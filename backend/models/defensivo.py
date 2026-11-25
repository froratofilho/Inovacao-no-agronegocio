from .modelo import Modelo

TIPOS = ["Herbicida", "Fungicida", "Inseticida", "Fertilizante"]


class Defensivo(Modelo):
    CAMPOS = ["nome", "tipo", "fabricante", "preco_litro", "estoque_litros"]

    def validar(self):
        erros = []
        if self.obrigatorio(self.nome, "Nome", erros):
            self.tamanho(self.nome, "Nome", 2, 100, erros)

        if self.obrigatorio(self.tipo, "Tipo", erros):
            self.opcao(self.tipo, "Tipo", TIPOS, erros)

        if self.obrigatorio(self.fabricante, "Fabricante", erros):
            self.tamanho(self.fabricante, "Fabricante", 2, 80, erros)

        if self.obrigatorio(self.preco_litro, "Preço por litro", erros):
            self.preco_litro = self.numero_positivo(self.preco_litro, "Preço por litro", erros)

        if self.obrigatorio(self.estoque_litros, "Estoque", erros):
            self.estoque_litros = self.numero_positivo(self.estoque_litros, "Estoque", erros, pode_zero=True)
        return erros
