"""Classe base de todos os modelos.

Cada modelo diz quais campos tem (CAMPOS) e implementa validar(),
que devolve uma lista de erros. Lista vazia = dados válidos.
"""


class Modelo:
    CAMPOS: list[str] = []

    def __init__(self, dados: dict):
        # guarda só os campos conhecidos, tirando espaços das pontas
        for campo in self.CAMPOS:
            valor = dados.get(campo)
            if isinstance(valor, str):
                valor = valor.strip()
            setattr(self, campo, valor)

    def to_dict(self) -> dict:
        return {campo: getattr(self, campo) for campo in self.CAMPOS}

    def validar(self) -> list[str]:
        raise NotImplementedError

    # ---------- funções de validação reaproveitadas ----------
    @staticmethod
    def obrigatorio(valor, nome: str, erros: list):
        if valor is None or str(valor).strip() == "":
            erros.append(f"{nome} é obrigatório.")
            return False
        return True

    @staticmethod
    def tamanho(valor, nome: str, minimo: int, maximo: int, erros: list):
        if valor is not None and not (minimo <= len(str(valor)) <= maximo):
            erros.append(f"{nome} deve ter entre {minimo} e {maximo} caracteres.")

    @staticmethod
    def numero_positivo(valor, nome: str, erros: list, pode_zero=False):
        try:
            numero = float(valor)
        except (TypeError, ValueError):
            erros.append(f"{nome} deve ser um número.")
            return None
        if numero < 0 or (numero == 0 and not pode_zero):
            erros.append(f"{nome} deve ser maior que zero." if not pode_zero else f"{nome} não pode ser negativo.")
            return None
        return numero

    @staticmethod
    def opcao(valor, nome: str, opcoes: list, erros: list):
        if valor not in opcoes:
            erros.append(f"{nome} deve ser um destes: {', '.join(opcoes)}.")
