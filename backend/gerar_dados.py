"""Geração de dados nas tabelas.

Rodando direto (python gerar_dados.py) ele APAGA e recria o banco,
cria os usuários padrão e preenche tudo com dados de exemplo.
Também é chamado pelo botão "Gerar dados" no painel (só admin).
"""
import random
from datetime import date, timedelta

from database import Banco
from dao import ProdutorDAO, DroneDAO, DefensivoDAO, UsuarioDAO, AplicacaoDAO

PRODUTORES = [
    ("Fazenda Santa Helena", "12345678000190", "Assis", "SP", "(18) 3322-1001", 850),
    ("Sítio Boa Esperança", "23456789012", "Cândido Mota", "SP", "(18) 99711-2020", 120),
    ("Agropecuária Paranapanema", "34567890000155", "Palmital", "SP", "(18) 3351-4400", 2300),
    ("Fazenda Três Irmãos", "45678901234", "Tarumã", "SP", "(18) 99654-3311", 640),
    ("Fazenda Água Limpa", "56789012000122", "Maracaí", "SP", "(18) 3371-8080", 1500),
    ("Sítio São José", "67890123456", "Paraguaçu Paulista", "SP", "(18) 99802-7766", 95),
    ("Cooperativa Vale Verde", "78901234000177", "Londrina", "PR", "(43) 3025-9000", 4100),
    ("Fazenda Primavera", "89012345678", "Ourinhos", "SP", "(14) 99133-4545", 980),
]

DRONES = [
    ("DJI Agras T25P", "T25P-0001", 20, 24), ("DJI Agras T25", "T25-0002", 20, 24),
    ("DJI Agras T50", "T50-0003", 40, 24), ("DJI Agras T50", "T50-0004", 40, 24),
    ("DJI Agras T55", "T55-0005", 50, 30), ("DJI Agras T70P", "T70P-0006", 70, 40),
    ("DJI Agras T100", "T100-0007", 100, 40),
]

DEFENSIVOS = [
    ("Glifosato 480", "Herbicida", "Nortox", 28.90), ("2,4-D Amina", "Herbicida", "Corteva", 34.50),
    ("Azoxistrobina + Ciproconazol", "Fungicida", "Syngenta", 89.00), ("Mancozebe 800", "Fungicida", "UPL", 42.30),
    ("Clorantraniliprole", "Inseticida", "FMC", 310.00), ("Lambda-cialotrina", "Inseticida", "Syngenta", 65.80),
    ("Fertilizante Foliar NPK", "Fertilizante", "Yara", 22.40), ("Boro Líquido", "Fertilizante", "Stoller", 18.75),
]

CULTURAS = ["Soja", "Milho", "Cana-de-açúcar", "Trigo", "Café", "Laranja", "Feijão"]


class GeradorDados:
    def __init__(self):
        self.produtores = ProdutorDAO()
        self.drones = DroneDAO()
        self.defensivos = DefensivoDAO()
        self.usuarios = UsuarioDAO()
        self.aplicacoes = AplicacaoDAO()

    def criar_usuarios_padrao(self):
        if not self.usuarios.listar():
            self.usuarios.inserir({"nome": "Administrador", "email": "admin@agro.com", "senha": "admin123", "perfil": "admin"})
            self.usuarios.inserir({"nome": "Operador", "email": "operador@agro.com", "senha": "operador123", "perfil": "operador"})

    def criar_cadastros(self):
        criados = 0
        if not self.produtores.listar():
            for nome, doc, cidade, uf, tel, area in PRODUTORES:
                self.produtores.inserir({"nome": nome, "cpf_cnpj": doc, "cidade": cidade, "estado": uf,
                                         "telefone": tel, "area_total_ha": area})
                criados += 1
        if not self.drones.listar():
            for modelo, serie, tanque, vazao in DRONES:
                self.drones.inserir({"modelo": modelo, "numero_serie": serie, "capacidade_tanque_l": tanque,
                                     "vazao_max_lmin": vazao, "status": "Ativo"})
                criados += 1
        if not self.defensivos.listar():
            for nome, tipo, fabricante, preco in DEFENSIVOS:
                self.defensivos.inserir({"nome": nome, "tipo": tipo, "fabricante": fabricante,
                                         "preco_litro": preco, "estoque_litros": 2000})
                criados += 1
        return criados

    def gerar(self, aplicacoes=30):
        self.criar_usuarios_padrao()
        criados = self.criar_cadastros()

        produtores = self.produtores.listar()
        drones = self.drones.listar({"status": "Ativo"})
        usuarios = self.usuarios.listar()
        if not drones:
            return criados

        for _ in range(aplicacoes):
            # repõe estoque se algum defensivo estiver acabando
            for d in self.defensivos.listar():
                if d["estoque_litros"] < 200:
                    self.defensivos.atualizar(d["id"], {"estoque_litros": round(d["estoque_litros"] + 2000, 2)})

            defensivos = self.defensivos.listar()
            area = round(random.uniform(5, 80), 1)
            itens = [{"defensivo_id": d["id"], "quantidade_l": round(area * random.uniform(0.5, 2.5), 1)}
                     for d in random.sample(defensivos, k=random.randint(1, 3))]
            cabecalho = {
                "data": (date.today() - timedelta(days=random.randint(0, 365))).isoformat(),
                "produtor_id": random.choice(produtores)["id"],
                "drone_id": random.choice(drones)["id"],
                "usuario_id": random.choice(usuarios)["id"],
                "cultura": random.choice(CULTURAS),
                "area_ha": area,
                "observacao": "Gerado automaticamente",
            }
            self.aplicacoes.inserir(cabecalho, itens)
            criados += 1
        return criados


if __name__ == "__main__":
    Banco.criar_tabelas()
    total = GeradorDados().gerar(aplicacoes=60)
    print(f"Banco recriado com {total} registros.")
    print("Login admin:    admin@agro.com / admin123")
    print("Login operador: operador@agro.com / operador123")
