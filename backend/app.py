"""Ponto de entrada do backend.

Rodar:  python app.py   ->  API em http://localhost:5000/api
"""
import os
from flask import Flask, jsonify, send_from_directory

from database import Banco
from routes import registrar_rotas
from gerar_dados import GeradorDados

PASTA_FRONT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "dist")


def criar_app():
    app = Flask(__name__, static_folder=None)
    app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "troque-esta-chave-em-producao")
    app.json.ensure_ascii = False  # acentos normais no JSON

    # primeira vez: cria o banco e os usuários padrão
    if not Banco.existe():
        Banco.criar_tabelas()
        GeradorDados().criar_usuarios_padrao()

    registrar_rotas(app)

    @app.errorhandler(404)
    def nao_encontrado(_):
        return jsonify({"erro": "Rota não encontrada."}), 404

    # Opcional: depois de "npm run build", o Flask também serve o site (pasta dist)
    @app.get("/", defaults={"caminho": ""})
    @app.get("/<path:caminho>")
    def site(caminho):
        if caminho.startswith("api/") or not os.path.isdir(PASTA_FRONT):
            return jsonify({"erro": "Rota não encontrada."}), 404
        arquivo = os.path.join(PASTA_FRONT, caminho)
        if caminho and os.path.isfile(arquivo):
            return send_from_directory(PASTA_FRONT, caminho)
        return send_from_directory(PASTA_FRONT, "index.html")

    return app


if __name__ == "__main__":
    criar_app().run(debug=True, port=5000)
