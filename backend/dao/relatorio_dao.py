"""RelatorioDAO: as 3 consultas pedidas (múltiplas tabelas, agrupamento e pivot).

Todas aceitam filtro de período (data_inicio / data_fim).
As mesmas consultas estão em database/consultas.sql para mostrar ao professor.
"""
from .base_dao import BaseDAO
from models.defensivo import TIPOS


class RelatorioDAO(BaseDAO):

    @staticmethod
    def periodo(filtros):
        condicoes, parametros = [], []
        if filtros.get("data_inicio"):
            condicoes.append("a.data >= ?")
            parametros.append(filtros["data_inicio"])
        if filtros.get("data_fim"):
            condicoes.append("a.data <= ?")
            parametros.append(filtros["data_fim"])
        return (" AND ".join(condicoes) or "1 = 1"), parametros

    # 1) MÚLTIPLAS TABELAS + TOTALIZAÇÃO
    def totais_por_produtor(self, filtros):
        condicao, parametros = self.periodo(filtros)
        linhas = self.consultar(f"""
            SELECT p.nome                         AS produtor,
                   p.cidade || '/' || p.estado    AS cidade,
                   COUNT(a.id)                    AS qtd_aplicacoes,
                   ROUND(SUM(a.area_ha), 2)       AS area_ha,
                   ROUND(SUM(t.litros), 2)        AS litros,
                   ROUND(SUM(t.custo), 2)         AS custo_total
            FROM produtor p
            JOIN aplicacao a ON a.produtor_id = p.id
            JOIN (SELECT i.aplicacao_id,
                         SUM(i.quantidade_l)                 AS litros,
                         SUM(i.quantidade_l * i.preco_litro) AS custo
                  FROM aplicacao_item i
                  JOIN defensivo d ON d.id = i.defensivo_id
                  GROUP BY i.aplicacao_id) t ON t.aplicacao_id = a.id
            WHERE {condicao}
            GROUP BY p.id
            ORDER BY custo_total DESC""", parametros)
        total = {
            "produtor": "TOTAL GERAL", "cidade": "",
            "qtd_aplicacoes": sum(l["qtd_aplicacoes"] for l in linhas),
            "area_ha": round(sum(l["area_ha"] for l in linhas), 2),
            "litros": round(sum(l["litros"] for l in linhas), 2),
            "custo_total": round(sum(l["custo_total"] for l in linhas), 2),
        }
        return {"linhas": linhas, "total": total}

    # 2) AGRUPAMENTO
    def agrupado_por_drone(self, filtros):
        condicao, parametros = self.periodo(filtros)
        return self.consultar(f"""
            SELECT dr.modelo,
                   COUNT(DISTINCT dr.id)    AS qtd_drones,
                   COUNT(a.id)              AS qtd_aplicacoes,
                   ROUND(SUM(a.area_ha), 2) AS area_total_ha,
                   ROUND(AVG(a.area_ha), 2) AS media_area_ha,
                   MAX(a.data)              AS ultima_aplicacao
            FROM drone dr
            JOIN aplicacao a ON a.drone_id = dr.id
            WHERE {condicao}
            GROUP BY dr.modelo
            ORDER BY area_total_ha DESC""", parametros)

    # 3) PIVOT: produtor (linhas) x tipo de defensivo (colunas), valores em litros
    def pivot_produtor_tipo(self, filtros):
        condicao, parametros = self.periodo(filtros)
        colunas = ",\n".join(
            f"ROUND(SUM(CASE WHEN d.tipo = '{tipo}' THEN i.quantidade_l ELSE 0 END), 2) AS \"{tipo}\""
            for tipo in TIPOS)
        linhas = self.consultar(f"""
            SELECT p.nome AS produtor,
                   {colunas},
                   ROUND(SUM(i.quantidade_l), 2) AS total
            FROM produtor p
            JOIN aplicacao a      ON a.produtor_id  = p.id
            JOIN aplicacao_item i ON i.aplicacao_id = a.id
            JOIN defensivo d      ON d.id           = i.defensivo_id
            WHERE {condicao}
            GROUP BY p.id
            ORDER BY total DESC""", parametros)
        return {"colunas": TIPOS, "linhas": linhas}

    # números do painel inicial
    def resumo(self):
        return self.consultar("""
            SELECT (SELECT COUNT(*) FROM produtor)  AS produtores,
                   (SELECT COUNT(*) FROM drone WHERE status = 'Ativo') AS drones_ativos,
                   (SELECT COUNT(*) FROM defensivo) AS defensivos,
                   (SELECT COUNT(*) FROM aplicacao) AS aplicacoes,
                   (SELECT ROUND(COALESCE(SUM(area_ha), 0), 2) FROM aplicacao) AS area_total_ha,
                   (SELECT COUNT(*) FROM defensivo WHERE estoque_litros < 50) AS estoque_baixo""")[0]
