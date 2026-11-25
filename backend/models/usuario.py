import re
from .modelo import Modelo

PERFIS = ["admin", "operador"]


class Usuario(Modelo):
    CAMPOS = ["nome", "email", "senha", "perfil"]

    def __init__(self, dados: dict, editando=False):
        super().__init__(dados)
        self.editando = editando  # na edição a senha pode ficar em branco (mantém a atual)

    def validar(self):
        erros = []
        if self.obrigatorio(self.nome, "Nome", erros):
            self.tamanho(self.nome, "Nome", 3, 100, erros)

        if self.obrigatorio(self.email, "E-mail", erros):
            self.email = str(self.email).lower()
            if not re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", self.email):
                erros.append("E-mail inválido.")

        if self.senha or not self.editando:
            if not self.senha or len(str(self.senha)) < 6:
                erros.append("Senha deve ter pelo menos 6 caracteres.")

        self.perfil = self.perfil or "operador"
        self.opcao(self.perfil, "Perfil", PERFIS, erros)
        return erros
