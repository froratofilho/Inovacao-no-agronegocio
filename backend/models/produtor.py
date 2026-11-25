import re
from .modelo import Modelo

ESTADOS = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA",
           "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]


class Produtor(Modelo):
    CAMPOS = ["nome", "cpf_cnpj", "cidade", "estado", "telefone", "area_total_ha"]

    def validar(self):
        erros = []
        if self.obrigatorio(self.nome, "Nome", erros):
            self.tamanho(self.nome, "Nome", 3, 100, erros)

        if self.obrigatorio(self.cpf_cnpj, "CPF/CNPJ", erros):
            self.cpf_cnpj = re.sub(r"\D", "", str(self.cpf_cnpj))  # guarda só os números
            if len(self.cpf_cnpj) not in (11, 14):
                erros.append("CPF/CNPJ deve ter 11 (CPF) ou 14 (CNPJ) números.")

        if self.obrigatorio(self.cidade, "Cidade", erros):
            self.tamanho(self.cidade, "Cidade", 2, 80, erros)

        if self.obrigatorio(self.estado, "Estado", erros):
            self.estado = str(self.estado).upper()
            self.opcao(self.estado, "Estado", ESTADOS, erros)

        if self.telefone and not re.fullmatch(r"[\d\s()+-]{8,20}", str(self.telefone)):
            erros.append("Telefone inválido.")

        if self.obrigatorio(self.area_total_ha, "Área total", erros):
            self.area_total_ha = self.numero_positivo(self.area_total_ha, "Área total", erros)
        return erros
