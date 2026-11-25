"""Login, logout e "quem sou eu"."""
from flask import Blueprint, request, jsonify, session
from dao import UsuarioDAO
from utils import usuario_logado

auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")
dao = UsuarioDAO()


@auth_bp.post("/login")
def login():
    dados = request.get_json(silent=True) or {}
    email, senha = dados.get("email", ""), dados.get("senha", "")

    erros = []
    if not email.strip():
        erros.append("Informe o e-mail.")
    if not senha:
        erros.append("Informe a senha.")
    if erros:
        return jsonify({"erros": erros}), 400

    usuario = dao.autenticar(email, senha)
    if not usuario:
        return jsonify({"erros": ["E-mail ou senha incorretos."]}), 401

    session["usuario"] = usuario  # guarda id, nome, email e perfil na sessão
    return jsonify(usuario)


@auth_bp.post("/logout")
def logout():
    session.clear()
    return jsonify({"mensagem": "Até logo!"})


@auth_bp.get("/eu")
def eu():
    usuario = usuario_logado()
    if not usuario:
        return jsonify({"erro": "Não logado."}), 401
    return jsonify(usuario)
