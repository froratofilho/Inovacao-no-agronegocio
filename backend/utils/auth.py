"""Autenticação e autorização.

- login_obrigatorio: só deixa passar quem fez login (está na sessão).
- somente_admin: só deixa passar usuário com perfil 'admin'.
"""
from functools import wraps
from flask import session, jsonify


def usuario_logado():
    return session.get("usuario")


def login_obrigatorio(funcao):
    @wraps(funcao)
    def verificar(*args, **kwargs):
        if not usuario_logado():
            return jsonify({"erro": "Faça login para continuar."}), 401
        return funcao(*args, **kwargs)
    return verificar


def somente_admin(funcao):
    @wraps(funcao)
    def verificar(*args, **kwargs):
        usuario = usuario_logado()
        if not usuario:
            return jsonify({"erro": "Faça login para continuar."}), 401
        if usuario["perfil"] != "admin":
            return jsonify({"erro": "Acesso negado: apenas administradores."}), 403
        return funcao(*args, **kwargs)
    return verificar
