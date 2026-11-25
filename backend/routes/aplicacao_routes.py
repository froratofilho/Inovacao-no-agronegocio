"""Rotas do MOVIMENTO (aplicações com drone + itens)."""
from flask import Blueprint, request, jsonify
from dao import AplicacaoDAO, ErroNegocio
from models import Aplicacao
from utils import login_obrigatorio, somente_admin, usuario_logado

aplicacao_bp = Blueprint("aplicacoes", __name__, url_prefix="/api/aplicacoes")
dao = AplicacaoDAO()


def ler_formulario():
    aplicacao = Aplicacao(request.get_json(silent=True) or {})
    erros = aplicacao.validar()
    cabecalho = aplicacao.to_dict()
    cabecalho["usuario_id"] = usuario_logado()["id"]  # quem registrou
    itens = [item.to_dict() for item in aplicacao.itens]
    return cabecalho, itens, erros


@aplicacao_bp.get("")
@login_obrigatorio
def listar():
    return jsonify(dao.listar(request.args.to_dict()))


@aplicacao_bp.get("/<int:id>")
@login_obrigatorio
def buscar(id):
    aplicacao = dao.buscar(id)
    if not aplicacao:
        return jsonify({"erro": "Aplicação não encontrada."}), 404
    return jsonify(aplicacao)


@aplicacao_bp.post("")
@login_obrigatorio
def criar():
    cabecalho, itens, erros = ler_formulario()
    if erros:
        return jsonify({"erros": erros}), 400
    try:
        novo_id = dao.inserir(cabecalho, itens)
    except ErroNegocio as erro:
        return jsonify({"erros": [str(erro)]}), 400
    return jsonify(dao.buscar(novo_id)), 201


@aplicacao_bp.put("/<int:id>")
@login_obrigatorio
def alterar(id):
    if not dao.buscar(id):
        return jsonify({"erro": "Aplicação não encontrada."}), 404
    cabecalho, itens, erros = ler_formulario()
    if erros:
        return jsonify({"erros": erros}), 400
    try:
        dao.atualizar(id, cabecalho, itens)
    except ErroNegocio as erro:
        return jsonify({"erros": [str(erro)]}), 400
    return jsonify(dao.buscar(id))


@aplicacao_bp.delete("/<int:id>")
@somente_admin
def excluir(id):
    if not dao.buscar(id):
        return jsonify({"erro": "Aplicação não encontrada."}), 404
    dao.excluir(id)
    return jsonify({"mensagem": "Aplicação excluída e estoque devolvido."})
