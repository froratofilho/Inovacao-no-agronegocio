export const pillars = [
  {
    n: '01',
    title: 'Precisão inteligente',
    text: 'Aplicação orientada por planejamento, parâmetros operacionais e tecnologia de navegação.',
  },
  {
    n: '02',
    title: 'Eficiência no campo',
    text: 'Possibilidade de operações direcionadas e acesso a determinadas áreas com menor tráfego de máquinas terrestres.',
  },
  {
    n: '03',
    title: 'Conhecimento que transforma',
    text: 'Informações, orientação técnica e conteúdos educacionais para aproximar a inovação das pessoas.',
  },
];

export const operationSteps = [
  {
    title: 'Planejamento da operação',
    text: 'Avaliação da cultura, do alvo da aplicação, do produto recomendado em receituário agronômico e das condições do local.',
  },
  {
    title: 'Definição da área e dos parâmetros',
    text: 'Delimitação do talhão, obstáculos e zonas de exclusão; escolha de altura, velocidade, faixa e taxa de aplicação.',
  },
  {
    title: 'Execução monitorada',
    text: 'Voo acompanhado por operador habilitado, com atenção ao vento, temperatura, umidade e à presença de pessoas.',
  },
  {
    title: 'Avaliação e registro dos resultados',
    text: 'Conferência da cobertura, registro da operação e destinação correta de embalagens e sobras.',
  },
];

export const methods = {
  terrestre: {
    label: 'Pulverização terrestre',
    summary:
      'Pulverizadores tratorizados ou autopropelidos. Alta capacidade de calda e operação consolidada no campo, com contato direto das máquinas com o solo e a cultura.',
    points: ['Grande volume de calda por abastecimento', 'Tecnologia amplamente difundida', 'Depende de trafegabilidade do terreno'],
  },
  drone: {
    label: 'Aplicação por drone',
    summary:
      'Aeronaves remotamente pilotadas que seguem rotas planejadas. Não trafegam sobre a cultura, mas exigem atenção redobrada a vento, deriva e regulamentação.',
    points: ['Sem tráfego de máquinas sobre a lavoura', 'Acesso a áreas encharcadas ou declivosas', 'Menor capacidade por voo e janelas climáticas estreitas'],
  },
};

export const comparisonRows: { dimension: string; terrestre: string; drone: string }[] = [
  {
    dimension: 'Acesso ao terreno',
    terrestre: 'Limitado por solo encharcado, declividade e obstáculos.',
    drone: 'Pode operar sobre áreas de difícil acesso, respeitando obstáculos aéreos e limites legais.',
  },
  {
    dimension: 'Contato de máquinas com a cultura',
    terrestre: 'Há passagem de rodas pela lavoura, com possível amassamento e compactação.',
    drone: 'Sem contato físico com plantas e solo durante a aplicação.',
  },
  {
    dimension: 'Planejamento da operação',
    terrestre: 'Baseado em linhas de tráfego e pontos de abastecimento.',
    drone: 'Exige mapeamento, rota de voo, zonas de exclusão e logística de baterias.',
  },
  {
    dimension: 'Condições meteorológicas',
    terrestre: 'Sensível a vento, temperatura e umidade, como toda aplicação.',
    drone: 'Também sensível; a aplicação aérea pede monitoramento rigoroso da deriva.',
  },
  {
    dimension: 'Capacitação necessária',
    terrestre: 'Operador treinado em tecnologia de aplicação e segurança.',
    drone: 'Operador com formação específica e cumprimento das exigências dos órgãos reguladores.',
  },
  {
    dimension: 'Investimento e custos operacionais',
    terrestre: 'Varia conforme o porte do equipamento e a área atendida.',
    drone: 'Inclui aeronave, baterias, carregadores, capacitação e regularização. Depende de cada caso.',
  },
  {
    dimension: 'Logística',
    terrestre: 'Transporte do maquinário e abastecimento em campo.',
    drone: 'Equipamento transportável; requer energia para recarga e preparo frequente de calda.',
  },
  {
    dimension: 'Limitações técnicas',
    terrestre: 'Trafegabilidade e janela de entrada na área.',
    drone: 'Capacidade por voo, autonomia, vento e obstáculos como redes elétricas.',
  },
];

export const techTopics = [
  {
    title: 'O que são drones agrícolas',
    text: 'Aeronaves remotamente pilotadas projetadas para trabalho no campo. Na pulverização, carregam um reservatório de calda e um sistema de bicos ou discos que distribuem o produto sobre a área planejada.',
  },
  {
    title: 'Como funciona a pulverização aérea de precisão',
    text: 'A aeronave percorre faixas paralelas em altura e velocidade definidas. O fluxo de calda é ajustado conforme a velocidade de deslocamento para manter a taxa planejada ao longo da rota.',
  },
  {
    title: 'Planejamento de rotas',
    text: 'O talhão é delimitado em software de planejamento a partir de mapa, caminhamento ou levantamento aéreo. São definidos obstáculos, bordas, sentido de voo e pontos de retorno.',
  },
  {
    title: 'Navegação e sensores',
    text: 'Receptores GNSS — em alguns modelos com correção RTK — orientam o posicionamento. Radares e câmeras auxiliam no acompanhamento do relevo e na detecção de obstáculos.',
  },
  {
    title: 'Reservatório e sistema de aplicação',
    text: 'Bombas, bicos hidráulicos ou atomizadores rotativos e o downwash dos rotores trabalham juntos para conduzir as gotas ao alvo.',
  },
  {
    title: 'Limitações e condições de uso',
    text: 'Vento, temperatura, umidade relativa, autonomia de bateria e capacidade do tanque determinam quando e quanto é possível aplicar com qualidade e segurança.',
  },
];

export const advantages = [
  'Não há tráfego de máquinas sobre a cultura durante a aplicação.',
  'Possibilidade de operar em áreas encharcadas, declivosas ou de acesso difícil.',
  'Rotas planejadas e registros digitais de cada operação.',
  'Aplicação localizada em partes específicas do talhão, quando indicada.',
];

export const limitations = [
  'Capacidade de calda e autonomia por voo reduzidas em relação a máquinas terrestres.',
  'Forte dependência de condições meteorológicas e risco de deriva.',
  'Exigência de operador capacitado e de regularização junto aos órgãos competentes.',
  'Obstáculos aéreos — árvores, torres e redes elétricas — exigem planejamento cuidadoso.',
];

export const safetyPractices = [
  'Seguir sempre o receituário agronômico e as instruções do rótulo e da bula.',
  'Usar equipamento de proteção individual no preparo da calda e no abastecimento.',
  'Isolar a área e confirmar a ausência de pessoas e animais antes do voo.',
  'Monitorar vento, temperatura e umidade durante toda a operação.',
  'Fazer a tríplice lavagem e a devolução correta das embalagens vazias.',
];

export type Hotspot = { id: string; label: string; text: string; position: [number, number, number] };

export const droneHotspots: Hotspot[] = [
  { id: 'rotores', label: 'Rotores', text: 'Conjuntos de motores e hélices que sustentam o voo. O fluxo de ar descendente ajuda a direcionar as gotas para dentro do dossel.', position: [1.27, 0.72, -1.27] },
  { id: 'tanque', label: 'Reservatório', text: 'Armazena a calda preparada conforme o receituário. Seu volume define quanto é aplicado em cada voo.', position: [0, -0.2, 0.55] },
  { id: 'bicos', label: 'Sistema de aplicação', text: 'Bicos ou atomizadores rotativos fragmentam a calda em gotas. O tamanho da gota influencia cobertura e deriva.', position: [-1.27, -0.4, 1.27] },
  { id: 'gnss', label: 'Navegação GNSS', text: 'Antenas de posicionamento guiam a aeronave pela rota planejada. A correção RTK, quando presente, aumenta a exatidão.', position: [0.22, 0.64, -0.3] },
  { id: 'radar', label: 'Radar e sensores', text: 'Auxiliam a manter a altura sobre o relevo e a perceber obstáculos. Não substituem a atenção do operador.', position: [0, -0.12, -0.98] },
  { id: 'bracos', label: 'Braços dobráveis', text: 'Estrutura que sustenta os rotores e, em muitos modelos, se recolhe para transporte.', position: [-0.9, 0.22, -0.9] },
];

/** Intuito do site — o que o visitante encontra aqui. */
export const purposes = [
  { title: 'Plataforma de informação', text: 'Conteúdo claro e confiável sobre drones agrícolas para produtores, estudantes e comunidade.', to: '/tecnologia' },
  { title: 'Apoio técnico na pulverização', text: 'Como funciona a aplicação com drones: planejamento de voo, parâmetros e boas práticas.', to: '/tecnologia' },
  { title: 'Conscientização', text: 'Uso responsável de defensivos e cuidado com pessoas, animais, água e com a deriva do produto.', to: '/#conscientizacao' },
  { title: 'Cursos e capacitação', text: 'Onde encontrar e quais são os melhores caminhos para aprender a operar drones agrícolas.', to: '/cursos' },
  { title: 'Guia de regulamentação', text: 'Guia prático das exigências do MAPA e da ANAC (além de DECEA e ANATEL) para operar dentro da lei.', to: '/regulamentacao' },
  { title: 'Antigamente × atualmente', text: 'Como a aplicação era feita antes, como é feita hoje e quando o investimento vale a pena.', to: '/comparativo#antes-e-agora' },
  { title: 'Modelos e qual compensa', text: 'Modelos existentes, para que serve cada um, especificações, vantagens e desvantagens.', to: '/comparativo#modelos' },
  { title: 'Portfólio do projeto', text: 'Transparência do nosso projeto de extensão: registro das ações desenvolvidas pelo grupo.', to: '/projeto#acoes' },
];

/** Conscientização: cuidados que valem para qualquer aplicação com drone. */
export const awareness = [
  { title: 'Receituário sempre', text: 'Defensivo só com receituário agronômico, respeitando dose, cultura e intervalo de segurança indicados na bula.' },
  { title: 'Deriva é responsabilidade', text: 'Vento forte, calor e baixa umidade levam o produto para fora do alvo — para lavouras vizinhas, casas, rios e apiários.' },
  { title: 'Pessoas e animais longe', text: 'Isolar a área, avisar vizinhos e confirmar que não há pessoas ou animais sob a rota antes de decolar.' },
  { title: 'Proteção do operador', text: 'O drone reduz o contato direto com o produto, mas o preparo da calda e o abastecimento ainda exigem EPI completo.' },
  { title: 'Embalagens e sobras', text: 'Tríplice lavagem, devolução das embalagens vazias no ponto indicado e nunca descartar sobras em cursos d’água.' },
  { title: 'Operador habilitado', text: 'Pilotar um drone agrícola exige capacitação e regularização. Tecnologia sem preparo aumenta o risco, não a eficiência.' },
];

/** Como era antigamente e como é atualmente. Comparação qualitativa, sem números sem fonte. */
export const thenNow: { topic: string; before: string; now: string }[] = [
  { topic: 'Forma de aplicar', before: 'Pulverizador costal (manual), trator com barra ou contratação de avião agrícola.', now: 'Drone com rota automática, faixas paralelas e taxa de aplicação controlada pelo sistema.' },
  { topic: 'Exposição do trabalhador', before: 'No costal, o trabalhador caminha dentro da área aplicada, muito próximo do produto.', now: 'O operador fica fora da área de aplicação, controlando o voo a distância.' },
  { topic: 'Áreas difíceis', before: 'Morros, terrenos encharcados e talhões recortados ficavam sem aplicação ou eram feitos à mão.', now: 'O drone sobrevoa relevo acidentado, pastagens em morro e solo molhado sem entrar na área.' },
  { topic: 'Dano à cultura', before: 'As rodas do trator amassam plantas e compactam o solo a cada passada.', now: 'Sem contato com a lavoura durante a aplicação.' },
  { topic: 'Planejamento e registro', before: 'Anotações em papel e dependência da experiência do aplicador.', now: 'Mapa digital, rota salva, área aplicada e fluxo registrados no controle.' },
  { topic: 'Acesso à tecnologia', before: 'A aviação agrícola era viável quase só para grandes áreas.', now: 'Prestadores de serviço com drone atendem também pequenas e médias propriedades.' },
];

/** Quando o investimento em drone tende a compensar. */
export const worthIt = [
  'A propriedade tem áreas de morro, solo encharcado ou talhões recortados onde o trator não entra bem.',
  'Há aplicações frequentes ou demanda de prestação de serviço na região.',
  'Alguém da equipe vai se capacitar e regularizar a operação (MAPA, ANAC, DECEA, ANATEL).',
  'Existe estrutura para recarga de baterias (gerador ou energia no campo) e preparo de calda.',
  'Se a área é pequena e as aplicações são raras, contratar um prestador de serviço costuma compensar mais do que comprar.',
];
