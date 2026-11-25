from .modelo import Modelo

STATUS = ["Ativo", "Manutenção", "Inativo"]


class Drone(Modelo):
    CAMPOS = ["modelo", "numero_serie", "capacidade_tanque_l", "vazao_max_lmin", "status"]

    def validar(self):
        erros = []
        if self.obrigatorio(self.modelo, "Modelo", erros):
            self.tamanho(self.modelo, "Modelo", 2, 60, erros)

        if self.obrigatorio(self.numero_serie, "Número de série", erros):
            self.tamanho(self.numero_serie, "Número de série", 4, 40, erros)

        if self.obrigatorio(self.capacidade_tanque_l, "Capacidade do tanque", erros):
            self.capacidade_tanque_l = self.numero_positivo(self.capacidade_tanque_l, "Capacidade do tanque", erros)

        if self.obrigatorio(self.vazao_max_lmin, "Vazão máxima", erros):
            self.vazao_max_lmin = self.numero_positivo(self.vazao_max_lmin, "Vazão máxima", erros)

        self.status = self.status or "Ativo"
        self.opcao(self.status, "Status", STATUS, erros)
        return erros
