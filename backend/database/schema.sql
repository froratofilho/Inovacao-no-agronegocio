-- =====================================================================
-- Banco de dados do sistema "Inovação no Agronegócio"
-- Controle de aplicações de defensivos agrícolas feitas com drones.
--
-- Tabelas de cadastro (CRUD): usuario, produtor, drone, defensivo
-- Tabela de movimento:        aplicacao (cabeçalho) + aplicacao_item (itens)
-- =====================================================================

PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS aplicacao_item;
DROP TABLE IF EXISTS aplicacao;
DROP TABLE IF EXISTS defensivo;
DROP TABLE IF EXISTS drone;
DROP TABLE IF EXISTS produtor;
DROP TABLE IF EXISTS usuario;

-- Usuários que acessam o sistema (autenticação e autorização)
CREATE TABLE usuario (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    nome        VARCHAR(100) NOT NULL,
    email       VARCHAR(120) NOT NULL UNIQUE,
    senha_hash  VARCHAR(255) NOT NULL,
    perfil      VARCHAR(20)  NOT NULL DEFAULT 'operador'
                CHECK (perfil IN ('admin', 'operador'))
);

-- CRUD 1: Produtores rurais (clientes)
CREATE TABLE produtor (
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    nome           VARCHAR(100) NOT NULL,
    cpf_cnpj       VARCHAR(14)  NOT NULL UNIQUE,
    cidade         VARCHAR(80)  NOT NULL,
    estado         CHAR(2)      NOT NULL,
    telefone       VARCHAR(20),
    area_total_ha  DECIMAL(10,2) NOT NULL CHECK (area_total_ha > 0)
);

-- CRUD 2: Drones da frota
CREATE TABLE drone (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    modelo              VARCHAR(60) NOT NULL,
    numero_serie        VARCHAR(40) NOT NULL UNIQUE,
    capacidade_tanque_l DECIMAL(6,2) NOT NULL CHECK (capacidade_tanque_l > 0),
    vazao_max_lmin      DECIMAL(6,2) NOT NULL CHECK (vazao_max_lmin > 0),
    status              VARCHAR(20) NOT NULL DEFAULT 'Ativo'
                        CHECK (status IN ('Ativo', 'Manutenção', 'Inativo'))
);

-- CRUD 3: Defensivos / insumos (com estoque em litros)
CREATE TABLE defensivo (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    nome            VARCHAR(100) NOT NULL,
    tipo            VARCHAR(20)  NOT NULL
                    CHECK (tipo IN ('Herbicida', 'Fungicida', 'Inseticida', 'Fertilizante')),
    fabricante      VARCHAR(80)  NOT NULL,
    preco_litro     DECIMAL(10,2) NOT NULL CHECK (preco_litro > 0),
    estoque_litros  DECIMAL(10,2) NOT NULL DEFAULT 0 CHECK (estoque_litros >= 0)
);

-- MOVIMENTO: cada aplicação feita com drone (cabeçalho)
CREATE TABLE aplicacao (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    data         DATE         NOT NULL,
    produtor_id  INTEGER      NOT NULL REFERENCES produtor(id),
    drone_id     INTEGER      NOT NULL REFERENCES drone(id),
    usuario_id   INTEGER      NOT NULL REFERENCES usuario(id),
    cultura      VARCHAR(40)  NOT NULL,
    area_ha      DECIMAL(10,2) NOT NULL CHECK (area_ha > 0),
    observacao   VARCHAR(255)
);

-- MOVIMENTAÇÃO: produtos usados em cada aplicação (baixa no estoque)
CREATE TABLE aplicacao_item (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    aplicacao_id    INTEGER NOT NULL REFERENCES aplicacao(id) ON DELETE CASCADE,
    defensivo_id    INTEGER NOT NULL REFERENCES defensivo(id),
    quantidade_l    DECIMAL(10,2) NOT NULL CHECK (quantidade_l > 0),
    preco_litro     DECIMAL(10,2) NOT NULL CHECK (preco_litro > 0)
);

CREATE INDEX idx_aplicacao_data     ON aplicacao(data);
CREATE INDEX idx_aplicacao_produtor ON aplicacao(produtor_id);
CREATE INDEX idx_item_aplicacao     ON aplicacao_item(aplicacao_id);
