# Backend (Python + Flask + SQLite)

API do sistema de controle de aplicações de defensivos com drones.
O banco é SQLite (SQL puro, arquivo `database/agro.db`), então não precisa instalar servidor de banco.

## Como rodar

Precisa de Python 3.10 ou superior.

```bash
cd backend
python -m venv .venv
# Windows: .venv\Scripts\activate     Linux/Mac: source .venv/bin/activate
pip install -r requirements.txt

python gerar_dados.py   # cria o banco e preenche com dados de exemplo (opcional)
python app.py           # API em http://localhost:5000
```

Em outro terminal, na pasta raiz do projeto:

```bash
npm install
npm run dev             # site em http://localhost:5173  ->  "Área restrita" no rodapé
```

O Vite repassa tudo que começa com `/api` para o Flask (configurado em `vite.config.ts`).

**Logins padrão**

| Perfil   | E-mail            | Senha       |
|----------|-------------------|-------------|
| admin    | admin@agro.com    | admin123    |
| operador | operador@agro.com | operador123 |

## Estrutura

```
backend/
  app.py                  liga tudo e sobe o servidor
  gerar_dados.py          classe GeradorDados (popula as tabelas)
  database/
    schema.sql            CREATE TABLE de todas as tabelas
    consultas.sql         as consultas dos relatórios, prontas para rodar
    banco.py              classe Banco (conexão com o SQLite)
  models/                 classes com os campos e a validação
    modelo.py             classe base Modelo
    produtor.py  drone.py  defensivo.py  usuario.py  aplicacao.py
  dao/                    classes que fazem o SQL (acesso ao banco)
    base_dao.py           BaseDAO: CRUD genérico com filtro
    cadastros_dao.py      ProdutorDAO, DroneDAO, DefensivoDAO, UsuarioDAO
    aplicacao_dao.py      AplicacaoDAO (movimento + estoque)
    relatorio_dao.py      RelatorioDAO (múltiplas tabelas, agrupamento, pivot)
  routes/                 rotas da API
    crud_controller.py    CrudController: gera as rotas de CRUD de cada cadastro
    aplicacao_routes.py   rotas do movimento
    auth_routes.py        login / logout
    relatorio_routes.py   relatórios e geração de dados
  utils/auth.py           decorators login_obrigatorio e somente_admin
```

## Onde está cada requisito

| Requisito | Onde |
|---|---|
| Tabela/Classe CRUD (mín. 3) | `produtor`, `drone`, `defensivo` (+ `usuario`). Classes em `models/` e `dao/cadastros_dao.py`. Telas em `src/sistema/paginas/Cadastros.tsx` |
| Uso de CSS/Framework | Tailwind CSS (`src/index.css`, classes da área do sistema no final) |
| Tabela Movimento e Movimentação | `aplicacao` (cabeçalho) + `aplicacao_item` (itens). Ao salvar dá baixa no estoque do defensivo; ao editar/excluir devolve (`dao/aplicacao_dao.py`) |
| Validação de campos | No navegador (`src/sistema/validacao.ts` e `Aplicacoes.tsx`) e no backend (método `validar()` de cada classe em `models/`) |
| Página principal e menu | `/sistema` (Painel) com menu lateral (`SistemaLayout.tsx`) |
| Autenticação/Autorização | Login com sessão e senha com hash. Operador cadastra e edita; só admin exclui e gerencia usuários (`utils/auth.py`, `RotaProtegida.tsx`) |
| Geração de dados em tabelas | `gerar_dados.py` (linha de comando) e botão "Gerar dados" no Painel (admin) |
| Filtro nas páginas CRUD | Formulário de filtro em todas as telas, enviado como `?busca=&estado=...` e montado no `BaseDAO.montar_where()` |
| Consultas em múltiplas tabelas com totalização | Relatório "Totais por produtor" (produtor + aplicacao + aplicacao_item + defensivo, com TOTAL GERAL) |
| Consulta de agrupamento | Relatório "Desempenho por modelo de drone" (GROUP BY com COUNT, SUM, AVG, MAX) |
| Consulta de pivot | Relatório "Litros por produtor x tipo de defensivo" (SUM + CASE WHEN) |
| GitHub | Ver abaixo |

## Rotas da API

| Método | Rota | Quem pode |
|---|---|---|
| POST | /api/auth/login, /api/auth/logout | todos |
| GET | /api/auth/eu | logado |
| GET/POST/PUT | /api/produtores, /api/drones, /api/defensivos (/id) | logado |
| DELETE | /api/produtores/id, /api/drones/id, /api/defensivos/id | admin |
| GET/POST/PUT/DELETE | /api/usuarios (/id) | admin |
| GET/POST/PUT | /api/aplicacoes (/id) | logado |
| DELETE | /api/aplicacoes/id | admin |
| GET | /api/resumo, /api/relatorios/produtores, /drones, /pivot | logado |
| POST | /api/gerar-dados?quantidade=30 | admin |

## Git durante o desenvolvimento

O professor desconta se subir tudo só no final. Façam commits por etapa, por exemplo:

```bash
git add backend/database && git commit -m "Cria banco SQL (schema e consultas)"
git add backend/models && git commit -m "Classes de modelo com validação"
git add backend/dao && git commit -m "DAOs com CRUD, movimento e relatórios"
git add backend/routes backend/utils backend/app.py && git commit -m "Rotas da API e autenticação"
git add src && git commit -m "Área restrita no front: login, CRUDs, aplicações e relatórios"
git push
```
