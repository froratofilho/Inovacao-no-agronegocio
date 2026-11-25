"""Movimento: uma aplicação (cabeçalho) com vários itens (defensivos usados)."""
from datetime import date
from .modelo import Modelo


class AplicacaoItem(Modelo):
    CAMPOS = ["defensivo_id", "quantidade_l"]

    def validar(self):
        erros = []
        if not self.defensivo_id:
            erros.append("Escolha o defensivo de cada item.")
        if self.obrigatorio(self.quantidade_l, "Quantidade", erros):
            self.quantidade_l = self.numero_positivo(self.quantidade_l, "Quantidade", erros)
        return erros


class Aplicacao(Modelo):
    CAMPOS = ["data", "produtor_id", "drone_id", "cultura", "area_ha", "observacao"]

    def __init__(self, dados: dict):
        super().__init__(dados)
        self.itens = [AplicacaoItem(item) for item in dados.get("itens") or []]

    def validar(self):
        erros = []
        if self.obrigatorio(self.data, "Data", erros):
            try:
                if date.fromisoformat(str(self.data)) > date.today():
                    erros.append("A data não pode ser no futuro.")
            except ValueError:
                erros.append("Data inválida (use AAAA-MM-DD).")

        if not self.produtor_id:
            erros.append("Produtor é obrigatório.")
        if not self.drone_id:
            erros.append("Drone é obrigatório.")

        if self.obrigatorio(self.cultura, "Cultura", erros):
            self.tamanho(self.cultura, "Cultura", 2, 40, erros)

        if self.obrigatorio(self.area_ha, "Área aplicada", erros):
            self.area_ha = self.numero_positivo(self.area_ha, "Área aplicada", erros)

        if self.observacao:
            self.tamanho(self.observacao, "Observação", 0, 255, erros)

        if not self.itens:
            erros.append("Adicione pelo menos um defensivo na aplicação.")
        ids = [i.defensivo_id for i in self.itens]
        if len(ids) != len(set(ids)):
            erros.append("O mesmo defensivo foi adicionado mais de uma vez.")
        for item in self.itens:
            erros.extend(item.validar())
        return erros
