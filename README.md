# Inovação no Agronegócio — Front-end

Site do projeto de extensão da FEMA: **Inovação no Agronegócio — Aplicação de Defensivos Agrícolas via Drones de Precisão**.

Linguagem: **TypeScript** com **React** (arquivos `.tsx`). Estilos com **Tailwind CSS**. Projeto criado e executado com **Vite**.

## Como rodar

Requer Node.js 18 ou superior.

```bash
npm install      # instala as bibliotecas
npm run dev      # abre o site em http://localhost:5173
npm run build    # gera a versão final na pasta dist/
```

## Estrutura

```
index.html              página HTML base (o React é colocado dentro da <div id="root">)
public/fotos/           todas as fotos do site
src/
  main.tsx              ponto de entrada: inicia o React
  App.tsx               rotas: qual página aparece em cada endereço
  index.css             estilos gerais e classes reaproveitadas
  data/menu.ts          lista de páginas do menu e do rodapé
  components/
    Layout.tsx          cabeçalho + página atual + rodapé
    Header.tsx          cabeçalho com o menu
    Footer.tsx          rodapé
    Banner.tsx          faixa com foto e título no topo de cada página
  pages/
    Home.tsx            página inicial
    Tecnologia.tsx      funcionamento, vantagens, sustentabilidade e cursos
    Comparativo.tsx     aéreo x terrestre e modelos DJI Agras
    Galeria.tsx         fotos do grupo
    Projeto.tsx         o projeto, disciplinas e integrantes
    Perguntas.tsx       perguntas frequentes
    Regulamentacao.tsx  guia prático de regulamentação (MAPA, ANAC, DECEA, ANATEL)
    Fontes.tsx          fontes e links
    NaoEncontrada.tsx   página de erro 404
```

## Publicação

Funciona em qualquer hospedagem estática. `vercel.json` (Vercel) e `public/_redirects` (Netlify) direcionam todas as rotas para o `index.html`.
