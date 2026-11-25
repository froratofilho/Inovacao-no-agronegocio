"""DAOs das tabelas de cadastro. Toda a lógica de CRUD vem do BaseDAO."""
from werkzeug.security import generate_password_hash, check_password_hash
from .base_dao import BaseDAO


class ProdutorDAO(BaseDAO):
    TABELA = "produtor"
    ORDEM = "nome"
    MENSAGEM_DUPLICADO = "Já existe um produtor com esse CPF/CNPJ."
    FILTROS = {
        "busca": "(nome LIKE ? OR cpf_cnpj LIKE ?)",
        "cidade": "cidade LIKE ?",
        "estado": "estado = ?",
    }


class DroneDAO(BaseDAO):
    TABELA = "drone"
    ORDEM = "modelo"
    MENSAGEM_DUPLICADO = "Já existe um drone com esse número de série."
    FILTROS = {
        "busca": "(modelo LIKE ? OR numero_serie LIKE ?)",
        "status": "status = ?",
    }


class DefensivoDAO(BaseDAO):
    TABELA = "defensivo"
    ORDEM = "nome"
    FILTROS = {
        "busca": "(nome LIKE ? OR fabricante LIKE ?)",
        "tipo": "tipo = ?",
    }


class UsuarioDAO(BaseDAO):
    TABELA = "usuario"
    ORDEM = "nome"
    MENSAGEM_DUPLICADO = "Já existe um usuário com esse e-mail."
    FILTROS = {
        "busca": "(nome LIKE ? OR email LIKE ?)",
        "perfil": "perfil = ?",
    }

    # nunca devolve o hash da senha para a tela
    def listar(self, filtros=None):
        return [self.sem_senha(u) for u in super().listar(filtros)]

    def buscar(self, id):
        usuario = super().buscar(id)
        return self.sem_senha(usuario) if usuario else None

    # a senha é salva criptografada (hash), nunca em texto puro
    def inserir(self, dados):
        dados = dict(dados)
        dados["senha_hash"] = generate_password_hash(dados.pop("senha"))
        return super().inserir(dados)

    def atualizar(self, id, dados):
        dados = dict(dados)
        senha = dados.pop("senha", None)
        if senha:
            dados["senha_hash"] = generate_password_hash(senha)
        super().atualizar(id, dados)

    def autenticar(self, email: str, senha: str):
        linhas = self.consultar("SELECT * FROM usuario WHERE email = ?", [(email or "").strip().lower()])
        if linhas and check_password_hash(linhas[0]["senha_hash"], senha or ""):
            return self.sem_senha(linhas[0])
        return None

    @staticmethod
    def sem_senha(usuario: dict):
        usuario.pop("senha_hash", None)
        return usuario
