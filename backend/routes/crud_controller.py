"""CrudController: cria as 5 rotas de CRUD para uma tabela de cadastro.

  GET    /api/<nome>          lista (aceita filtros na URL: ?busca=...&estado=SP)
  GET    /api/<nome>/<id>     busca um
  POST   /api/<nome>          cria
  PUT    /api/<nome>/<id>     altera
  DELETE /api/<nome>/<id>     exclui (só admin)
"""
from flask import Blueprint, request, jsonify
from dao import ErroNegocio
from utils import login_obrigatorio, somente_admin


class CrudController:
    def __init__(self, nome, dao, modelo, protecao=login_obrigatorio):
        self.dao = dao
        self.modelo = modelo
        self.blueprint = Blueprint(nome, __name__, url_prefix=f"/api/{nome}")
        bp = self.blueprint

        # 'protecao' define quem pode ler/criar/editar; excluir é sempre só admin
        bp.add_url_rule("", "listar", protecao(self.listar), methods=["GET"])
        bp.add_url_rule("/<int:id>", "buscar", protecao(self.buscar), methods=["GET"])
        bp.add_url_rule("", "criar", protecao(self.criar), methods=["POST"])
        bp.add_url_rule("/<int:id>", "alterar", protecao(self.alterar), methods=["PUT"])
        bp.add_url_rule("/<int:id>", "excluir", somente_admin(self.excluir), methods=["DELETE"])

    def novo_modelo(self, dados, editando=False):
        return self.modelo(dados)

    def listar(self):
        return jsonify(self.dao.listar(request.args.to_dict()))

    def buscar(self, id):
        registro = self.dao.buscar(id)
        if not registro:
            return jsonify({"erro": "Registro não encontrado."}), 404
        return jsonify(registro)

    def criar(self):
        objeto = self.novo_modelo(request.get_json(silent=True) or {})
        erros = objeto.validar()
        if erros:
            return jsonify({"erros": erros}), 400
        try:
            novo_id = self.dao.inserir(objeto.to_dict())
        except ErroNegocio as erro:
            return jsonify({"erros": [str(erro)]}), 400
        return jsonify(self.dao.buscar(novo_id)), 201

    def alterar(self, id):
        if not self.dao.buscar(id):
            return jsonify({"erro": "Registro não encontrado."}), 404
        objeto = self.novo_modelo(request.get_json(silent=True) or {}, editando=True)
        erros = objeto.validar()
        if erros:
            return jsonify({"erros": erros}), 400
        try:
            self.dao.atualizar(id, objeto.to_dict())
        except ErroNegocio as erro:
            return jsonify({"erros": [str(erro)]}), 400
        return jsonify(self.dao.buscar(id))

    def excluir(self, id):
        if not self.dao.buscar(id):
            return jsonify({"erro": "Registro não encontrado."}), 404
        try:
            self.dao.excluir(id)
        except ErroNegocio as erro:
            return jsonify({"erros": [str(erro)]}), 400
        return jsonify({"mensagem": "Excluído com sucesso."})


class UsuarioController(CrudController):
    """Usuários: tudo só para admin, e a senha é opcional na edição."""

    def __init__(self, dao, modelo):
        super().__init__("usuarios", dao, modelo, protecao=somente_admin)

    def novo_modelo(self, dados, editando=False):
        return self.modelo(dados, editando=editando)

    def excluir(self, id):
        from utils import usuario_logado
        if usuario_logado()["id"] == id:
            return jsonify({"erros": ["Você não pode excluir o próprio usuário."]}), 400
        return super().excluir(id)
