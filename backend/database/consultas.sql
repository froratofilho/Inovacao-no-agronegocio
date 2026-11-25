-- =====================================================================
-- Consultas usadas na tela de Relatórios (as mesmas que estão em
-- dao/relatorio_dao.py). Dá para rodar direto no DB Browser for SQLite.
-- =====================================================================

-- 1) Consulta com dados de MÚLTIPLAS TABELAS e TOTALIZAÇÃO
--    Junta produtor + aplicacao + aplicacao_item + defensivo
--    (a subconsulta "t" soma os itens de cada aplicação antes de juntar,
--     assim a área não é somada repetida quando a aplicação tem vários itens)
SELECT p.nome                          AS produtor,
       p.cidade || '/' || p.estado     AS cidade,
       COUNT(a.id)                     AS qtd_aplicacoes,
       ROUND(SUM(a.area_ha), 2)        AS area_ha,
       ROUND(SUM(t.litros), 2)         AS litros,
       ROUND(SUM(t.custo), 2)          AS custo_total
FROM produtor p
JOIN aplicacao a ON a.produtor_id = p.id
JOIN (SELECT i.aplicacao_id,
             SUM(i.quantidade_l)                 AS litros,
             SUM(i.quantidade_l * i.preco_litro) AS custo
      FROM aplicacao_item i
      JOIN defensivo d ON d.id = i.defensivo_id
      GROUP BY i.aplicacao_id) t ON t.aplicacao_id = a.id
GROUP BY p.id
ORDER BY custo_total DESC;

-- Total geral (linha de totalização)
SELECT COUNT(DISTINCT a.id)                              AS qtd_aplicacoes,
       ROUND(SUM(i.quantidade_l), 2)                     AS litros,
       ROUND(SUM(i.quantidade_l * i.preco_litro), 2)     AS custo_total
FROM aplicacao a
JOIN aplicacao_item i ON i.aplicacao_id = a.id;

-- 2) Consulta de AGRUPAMENTO: desempenho por modelo de drone
SELECT dr.modelo,
       COUNT(a.id)             AS qtd_aplicacoes,
       SUM(a.area_ha)          AS area_total_ha,
       ROUND(AVG(a.area_ha),2) AS media_area_ha
FROM drone dr
JOIN aplicacao a ON a.drone_id = dr.id
GROUP BY dr.modelo
HAVING COUNT(a.id) > 0
ORDER BY area_total_ha DESC;

-- 3) Consulta PIVOT: litros aplicados por produtor (linhas) x tipo de defensivo (colunas)
SELECT p.nome AS produtor,
       SUM(CASE WHEN d.tipo = 'Herbicida'    THEN i.quantidade_l ELSE 0 END) AS herbicida,
       SUM(CASE WHEN d.tipo = 'Fungicida'    THEN i.quantidade_l ELSE 0 END) AS fungicida,
       SUM(CASE WHEN d.tipo = 'Inseticida'   THEN i.quantidade_l ELSE 0 END) AS inseticida,
       SUM(CASE WHEN d.tipo = 'Fertilizante' THEN i.quantidade_l ELSE 0 END) AS fertilizante,
       SUM(i.quantidade_l) AS total
FROM produtor p
JOIN aplicacao a      ON a.produtor_id  = p.id
JOIN aplicacao_item i ON i.aplicacao_id = a.id
JOIN defensivo d      ON d.id           = i.defensivo_id
GROUP BY p.id
ORDER BY total DESC;
