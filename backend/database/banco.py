"""Classe Banco: abre a conexão com o SQLite e cria as tabelas."""
import os
import sqlite3

PASTA = os.path.dirname(os.path.abspath(__file__))
ARQUIVO_BANCO = os.path.join(PASTA, "agro.db")
ARQUIVO_SCHEMA = os.path.join(PASTA, "schema.sql")


class Banco:
    @staticmethod
    def conectar():
        """Retorna uma conexão nova. As linhas voltam como dicionário (row['coluna'])."""
        conexao = sqlite3.connect(ARQUIVO_BANCO)
        conexao.row_factory = sqlite3.Row
        conexao.execute("PRAGMA foreign_keys = ON")
        return conexao

    @staticmethod
    def existe():
        return os.path.exists(ARQUIVO_BANCO)

    @staticmethod
    def criar_tabelas():
        """Executa o schema.sql (apaga e recria todas as tabelas)."""
        with open(ARQUIVO_SCHEMA, encoding="utf-8") as arquivo:
            sql = arquivo.read()
        conexao = Banco.conectar()
        conexao.executescript(sql)
        conexao.commit()
        conexao.close()
