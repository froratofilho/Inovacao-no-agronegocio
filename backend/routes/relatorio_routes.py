"""Relatórios (consultas) e geração de dados de teste."""
from flask import Blueprint, request, jsonify
from dao import RelatorioDAO
from gerar_dados import GeradorDados
from utils import login_obrigatorio, somente_admin

relatorio_bp = Blueprint("relatorios", __name__, url_prefix="/api")
dao = RelatorioDAO()


@relatorio_bp.get("/resumo")
@login_obrigatorio
def resumo():
    return jsonify(dao.resumo())


@relatorio_bp.get("/relatorios/produtores")
@login_obrigatorio
def por_produtor():
    return jsonify(dao.totais_por_produtor(request.args))


@relatorio_bp.get("/relatorios/drones")
@login_obrigatorio
def por_drone():
    return jsonify(dao.agrupado_por_drone(request.args))


@relatorio_bp.get("/relatorios/pivot")
@login_obrigatorio
def pivot():
    return jsonify(dao.pivot_produtor_tipo(request.args))


@relatorio_bp.post("/gerar-dados")
@somente_admin
def gerar_dados():
    quantidade = min(int(request.args.get("quantidade", 30)), 500)
    criados = GeradorDados().gerar(aplicacoes=quantidade)
    return jsonify({"mensagem": "Dados gerados com sucesso.", "criados": criados})
