"""AplicacaoDAO: tabela de MOVIMENTO.

Gravar uma aplicação = inserir o cabeçalho + os itens + dar baixa no estoque
dos defensivos. Tudo numa transação só: se algo der errado, nada é salvo.
"""
from __future__ import annotations
from database import Banco
from .base_dao import BaseDAO, ErroNegocio


class AplicacaoDAO(BaseDAO):
    TABELA = "aplicacao"
    FILTROS = {
        "busca": "(p.nome LIKE ? OR a.cultura LIKE ?)",
        "produtor_id": "a.produtor_id = ?",
        "drone_id": "a.drone_id = ?",
        "data_inicio": "a.data >= ?",
        "data_fim": "a.data <= ?",
    }

    SQL_LISTA = """
        SELECT a.*, p.nome AS produtor, d.modelo AS drone, u.nome AS operador,
               COALESCE((SELECT ROUND(SUM(i.quantidade_l), 2) FROM aplicacao_item i WHERE i.aplicacao_id = a.id), 0) AS total_litros,
               COALESCE((SELECT ROUND(SUM(i.quantidade_l * i.preco_litro), 2) FROM aplicacao_item i WHERE i.aplicacao_id = a.id), 0) AS valor_total
        FROM aplicacao a
        JOIN produtor p ON p.id = a.produtor_id
        JOIN drone d    ON d.id = a.drone_id
        JOIN usuario u  ON u.id = a.usuario_id
    """

    def listar(self, filtros=None):
        where, parametros = self.montar_where(filtros or {})
        return self.consultar(f"{self.SQL_LISTA} {where} ORDER BY a.data DESC, a.id DESC", parametros)

    def buscar(self, id):
        linhas = self.consultar(f"{self.SQL_LISTA} WHERE a.id = ?", [id])
        if not linhas:
            return None
        aplicacao = linhas[0]
        aplicacao["itens"] = self.consultar("""
            SELECT i.*, d.nome AS defensivo, d.tipo, ROUND(i.quantidade_l * i.preco_litro, 2) AS subtotal
            FROM aplicacao_item i JOIN defensivo d ON d.id = i.defensivo_id
            WHERE i.aplicacao_id = ? ORDER BY i.id""", [id])
        return aplicacao

    # ---------- gravação com controle de estoque ----------
    def inserir(self, cabecalho: dict, itens: list[dict]) -> int:
        conexao = Banco.conectar()
        try:
            self.validar_ativos(conexao, cabecalho)
            colunas = ", ".join(cabecalho)
            marcadores = ", ".join("?" for _ in cabecalho)
            cursor = conexao.execute(f"INSERT INTO aplicacao ({colunas}) VALUES ({marcadores})", list(cabecalho.values()))
            novo_id = cursor.lastrowid
            self.gravar_itens(conexao, novo_id, itens)
            conexao.commit()
            return novo_id
        except Exception:
            conexao.rollback()
            raise
        finally:
            conexao.close()

    def atualizar(self, id: int, cabecalho: dict, itens: list[dict]):
        conexao = Banco.conectar()
        try:
            self.validar_ativos(conexao, cabecalho)
            self.devolver_estoque(conexao, id)
            conexao.execute("DELETE FROM aplicacao_item WHERE aplicacao_id = ?", [id])
            campos = ", ".join(f"{c} = ?" for c in cabecalho)
            conexao.execute(f"UPDATE aplicacao SET {campos} WHERE id = ?", list(cabecalho.values()) + [id])
            self.gravar_itens(conexao, id, itens)
            conexao.commit()
        except Exception:
            conexao.rollback()
            raise
        finally:
            conexao.close()

    def excluir(self, id: int):
        conexao = Banco.conectar()
        try:
            self.devolver_estoque(conexao, id)
            conexao.execute("DELETE FROM aplicacao WHERE id = ?", [id])  # itens saem junto (CASCADE)
            conexao.commit()
        finally:
            conexao.close()

    # ---------- regras de negócio ----------
    @staticmethod
    def validar_ativos(conexao, cabecalho):
        if not conexao.execute("SELECT 1 FROM produtor WHERE id = ?", [cabecalho["produtor_id"]]).fetchone():
            raise ErroNegocio("Produtor não encontrado.")
        drone = conexao.execute("SELECT status FROM drone WHERE id = ?", [cabecalho["drone_id"]]).fetchone()
        if not drone:
            raise ErroNegocio("Drone não encontrado.")
        if drone["status"] != "Ativo":
            raise ErroNegocio(f"Este drone está com status '{drone['status']}' e não pode ser usado.")

    @staticmethod
    def gravar_itens(conexao, aplicacao_id, itens):
        for item in itens:
            defensivo = conexao.execute("SELECT * FROM defensivo WHERE id = ?", [item["defensivo_id"]]).fetchone()
            if not defensivo:
                raise ErroNegocio("Defensivo não encontrado.")
            if item["quantidade_l"] > defensivo["estoque_litros"]:
                raise ErroNegocio(f"Estoque insuficiente de {defensivo['nome']}: "
                                  f"disponível {defensivo['estoque_litros']:.2f} L.")
            conexao.execute(
                "INSERT INTO aplicacao_item (aplicacao_id, defensivo_id, quantidade_l, preco_litro) VALUES (?, ?, ?, ?)",
                [aplicacao_id, item["defensivo_id"], item["quantidade_l"], defensivo["preco_litro"]])
            conexao.execute("UPDATE defensivo SET estoque_litros = ROUND(estoque_litros - ?, 2) WHERE id = ?",
                            [item["quantidade_l"], item["defensivo_id"]])

    @staticmethod
    def devolver_estoque(conexao, aplicacao_id):
        """Ao editar ou excluir, o que tinha sido usado volta para o estoque."""
        itens = conexao.execute("SELECT defensivo_id, quantidade_l FROM aplicacao_item WHERE aplicacao_id = ?",
                                [aplicacao_id]).fetchall()
        for item in itens:
            conexao.execute("UPDATE defensivo SET estoque_litros = ROUND(estoque_litros + ?, 2) WHERE id = ?",
                            [item["quantidade_l"], item["defensivo_id"]])
