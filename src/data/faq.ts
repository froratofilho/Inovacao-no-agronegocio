export type FaqGroup = { theme: string; items: { q: string; a: string }[] };

export const faq: FaqGroup[] = [
  {
    theme: 'Tecnologia',
    items: [
      { q: 'Como funciona a pulverização agrícola com drones?', a: 'O drone segue uma rota planejada sobre o talhão, em altura e velocidade definidas, distribuindo a calda por bicos ou atomizadores. O fluxo é ajustado à velocidade para manter a taxa planejada. Um operador acompanha toda a operação.' },
      { q: 'Quais são as principais vantagens e limitações?', a: 'Entre as vantagens estão a ausência de tráfego sobre a cultura e o acesso a áreas difíceis. Entre as limitações, a menor capacidade por voo, a dependência do clima e a necessidade de capacitação e regularização. O resultado depende de cada situação.' },
      { q: 'Em quais condições o drone pode não ser a melhor alternativa?', a: 'Com vento acima do recomendado, em áreas com muitos obstáculos aéreos, quando a demanda de volume é muito alta para a janela disponível ou quando o produto e sua bula não preveem esse tipo de aplicação.' },
    ],
  },
  {
    theme: 'Operação e formação',
    items: [
      { q: 'Todo produtor pode operar um drone agrícola?', a: 'Não basta adquirir o equipamento. A aplicação de defensivos com drones tem exigências de capacitação e cadastro definidas pelos órgãos competentes. Consulte a regulamentação vigente para o seu caso.' },
      { q: 'É necessário fazer algum curso?', a: 'Para aplicação agrícola, a norma do MAPA prevê requisitos de capacitação. Verifique no texto oficial atualizado quais formações são exigidas.' },
      { q: 'Quais cuidados são importantes durante uma aplicação?', a: 'Seguir o receituário agronômico, usar EPI no preparo, isolar a área, monitorar vento, temperatura e umidade, respeitar distâncias de áreas sensíveis e destinar corretamente as embalagens.' },
      { q: 'Como escolher um equipamento adequado?', a: 'Considere o tamanho e o formato das áreas, as culturas, a logística de energia, a assistência técnica disponível e o custo total. Compare fichas técnicas oficiais e converse com profissionais da área.' },
    ],
  },
  {
    theme: 'Regulamentação',
    items: [
      { q: 'Quais órgãos regulamentam essas operações no Brasil?', a: 'O MAPA trata da aplicação de agrotóxicos com drones; a ANAC, das aeronaves e operadores; o DECEA, do acesso ao espaço aéreo; e a ANATEL, da homologação dos equipamentos de radiocomunicação.' },
    ],
  },
];
