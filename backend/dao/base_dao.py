"""BaseDAO: CRUD genérico (listar com filtro, buscar, inserir, atualizar, excluir).

Cada tabela de cadastro cria uma classe filha só dizendo:
  TABELA  -> nome da tabela
  FILTROS -> filtros aceitos na listagem: {nome_do_parametro: trecho SQL}
  ORDEM   -> ordenação da listagem
"""
from __future__ import annotations
import sqlite3
from database import Banco


class ErroNegocio(Exception):
    """Erro que deve aparecer para o usuário (ex.: CPF repetido)."""


class BaseDAO:
    TABELA = ""
    FILTROS: dict[str, str] = {}
    ORDEM = "id"
    MENSAGEM_DUPLICADO = "Já existe um registro com esses dados."

    # ---------- LISTAR com filtros ----------
    def listar(self, filtros: dict | None = None):
        where, parametros = self.montar_where(filtros or {})
        sql = f"SELECT * FROM {self.TABELA} {where} ORDER BY {self.ORDEM}"
        return self.consultar(sql, parametros)

    def montar_where(self, filtros: dict):
        """Transforma os filtros recebidos da tela em WHERE ... AND ..."""
        condicoes, parametros = [], []
        for nome, trecho_sql in self.FILTROS.items():
            valor = (filtros.get(nome) or "").strip()
            if not valor:
                continue
            if "LIKE" in trecho_sql:
                valor = f"%{valor}%"
            condicoes.append(trecho_sql)
            parametros.extend([valor] * trecho_sql.count("?"))
        where = "WHERE " + " AND ".join(condicoes) if condicoes else ""
        return where, parametros

    # ---------- BUSCAR um ----------
    def buscar(self, id: int):
        linhas = self.consultar(f"SELECT * FROM {self.TABELA} WHERE id = ?", [id])
        return linhas[0] if linhas else None

    # ---------- INSERIR ----------
    def inserir(self, dados: dict) -> int:
        colunas = ", ".join(dados.keys())
        marcadores = ", ".join("?" for _ in dados)
        sql = f"INSERT INTO {self.TABELA} ({colunas}) VALUES ({marcadores})"
        return self.executar(sql, list(dados.values()))

    # ---------- ATUALIZAR ----------
    def atualizar(self, id: int, dados: dict):
        campos = ", ".join(f"{coluna} = ?" for coluna in dados)
        sql = f"UPDATE {self.TABELA} SET {campos} WHERE id = ?"
        self.executar(sql, list(dados.values()) + [id])

    # ---------- EXCLUIR ----------
    def excluir(self, id: int):
        self.executar(f"DELETE FROM {self.TABELA} WHERE id = ?", [id])

    # ---------- utilitários ----------
    @staticmethod
    def consultar(sql: str, parametros=None) -> list[dict]:
        conexao = Banco.conectar()
        linhas = conexao.execute(sql, parametros or []).fetchall()
        conexao.close()
        return [dict(linha) for linha in linhas]

    def executar(self, sql: str, parametros=None) -> int:
        conexao = Banco.conectar()
        try:
            cursor = conexao.execute(sql, parametros or [])
            conexao.commit()
            return cursor.lastrowid
        except sqlite3.IntegrityError as erro:
            raise self.traduzir_erro(erro)
        finally:
            conexao.close()

    def traduzir_erro(self, erro: sqlite3.IntegrityError) -> ErroNegocio:
        texto = str(erro)
        if "UNIQUE" in texto:
            return ErroNegocio(self.MENSAGEM_DUPLICADO)
        if "FOREIGN KEY" in texto:
            return ErroNegocio("Não é possível excluir: este registro já foi usado em aplicações.")
        return ErroNegocio(f"Dados inválidos para o banco ({texto}).")
