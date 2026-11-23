# New Holland — Front-end

Website do projeto de extensão da FEMA: **Inovação no Agronegócio — Aplicação de Defensivos Agrícolas via Drones de Precisão**.

React 18 · TypeScript · Vite · Tailwind CSS · React Router · Framer Motion · Lucide.
Somente front-end: todo o conteúdo vem de arquivos em `src/data`.

## Rodar localmente

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # checagem de tipos + build de produção em /dist
npm run preview    # serve o build
```

## Fotografias reais

As fotos são baixadas e verificadas por script (precisa de internet):

```bash
npm run images              # baixa do Wikimedia Commons, checa a licença, converte para WebP e gera os créditos
npm run images -- --cutout  # opcional: recorta o fundo do drone do Hero (instale antes @imgly/background-removal-node)
```

Detalhes em `public/images/LEIA-ME.txt`. Os créditos aparecem nas próprias fotos e na página `/creditos`.

## Estrutura

```
src/
  components/layout    Header, Footer, Layout, Logo
  components/sections  seções da Home
  components/ui        Button, Section, Media, Accordion, Dialog, Reveal, Notice, PageHero
  pages                Home, Tecnologia, Comparativo, Galeria, Regulamentacao, Cursos, Projeto, Faq, NotFound
  data                 todo o conteúdo editável (textos, equipamentos, cursos, FAQ, equipe, galeria)
  hooks                SEO, tema do header
  styles               CSS global e tokens de design
```

## Visual

Landing page simples: fotos reais com sobreposição de cor, sem animações de rolagem nem 3D.

## O que preencher antes da apresentação

- **Fotos**: rode `npm run images` e confira o resultado e o arquivo `CREDITOS-IMAGENS.md`.
- **Equipe** (`src/data/team.ts`): função, descrição e foto de cada integrante.
- **Trajetória** (`timeline` em `src/data/team.ts`): somente atividades realmente realizadas.
- **Equipamentos** (`src/data/equipment.ts`): trocar "Dados a confirmar" pelos números da ficha técnica oficial.
- **Cursos** (`src/data/courses.ts`): cursos verificados, com link oficial, e `demo: false`.
- **Galeria** (`src/data/gallery.ts`): `demo: false` só em registros reais do grupo.
- **Regulamentação** (`src/data/regulation.ts`): conferir as normas citadas no texto vigente dos portais oficiais.
- **Logo da FEMA**: espaço reservado no rodapé (`Footer.tsx`).

## Publicação

Funciona em qualquer hospedagem estática. `vercel.json` e `public/_redirects` (Netlify) já redirecionam as rotas para o `index.html`.
