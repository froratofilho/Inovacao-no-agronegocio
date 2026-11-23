export type Equipment = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  applications: string[];
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  /** para quem o modelo costuma compensar mais */
  bestFor: string;
  /** aviso quando a foto mostra outro modelo da mesma linha (falta foto livre do modelo exato) */
  imageNote?: string;
};

export const TBD = 'Dados a confirmar';

/**
 * Valores de referência tirados das fichas públicas da DJI.
 * Confira sempre a ficha técnica oficial antes de publicar ou comprar — versões e mercados variam.
 */
export const equipment: Equipment[] = [
  {
    id: 'agras-t100',
    name: 'DJI Agras T100',
    category: 'Grande porte',
    image: '/images/equip-t100.webp',
    description: 'Drone de alta capacidade, pensado para quem aplica em grandes áreas ou presta serviço em escala.',
    applications: ['Grandes culturas', 'Prestadores de serviço', 'Pulverização e sólidos'],
    specs: [
      { label: 'Tanque de pulverização', value: 'até 100 L' },
      { label: 'Tanque de distribuição (sólidos)', value: 'até 150 L' },
      { label: 'Sistema de aplicação', value: 'Atomizadores centrífugos' },
      { label: 'Sensores', value: 'Radar e visão para desvio de obstáculos' },
    ],
    pros: ['Maior volume por voo, menos paradas', 'Rende mais em áreas grandes', 'Pulveriza e distribui sólidos'],
    cons: ['Investimento mais alto', 'Exige gerador potente e logística de baterias', 'Transporte mais pesado'],
    bestFor: 'Prestador de serviço ou produtor com grandes áreas e muitas aplicações por safra.',
    imageNote: 'Foto: DJI Agras T50, da mesma linha',
  },
  {
    id: 'agras-t50',
    name: 'DJI Agras T50',
    category: 'Médio a grande porte',
    image: '/images/equip-t50.webp',
    description: 'O modelo mais versátil da linha: equilibra capacidade e manobrabilidade, para pulverização e distribuição de sólidos.',
    applications: ['Grãos', 'Cana-de-açúcar', 'Pastagens', 'Café'],
    specs: [
      { label: 'Tanque de pulverização', value: 'até 40 L' },
      { label: 'Tanque de distribuição (sólidos)', value: 'até 75 L (50 kg)' },
      { label: 'Sistema de aplicação', value: 'Atomizadores centrífugos duplos' },
      { label: 'Sensores', value: 'Radar de matriz de fase + visão binocular' },
    ],
    pros: ['Bom equilíbrio entre rendimento e preço', 'Atende diferentes culturas', 'Opera bem em relevo acidentado'],
    cons: ['Exige equipe e estrutura de recarga', 'Sensível a janelas climáticas'],
    bestFor: 'Quem está começando a prestar serviço ou tem propriedades médias com culturas variadas — costuma ser o melhor custo-benefício.',
  },
  {
    id: 'agras-t25',
    name: 'DJI Agras T25',
    category: 'Compacto',
    image: '/images/equip-t25.webp',
    description: 'Drone compacto, fácil de transportar, pensado para áreas menores e operação ágil por uma só pessoa.',
    applications: ['Pequenas e médias propriedades', 'Hortifrúti', 'Áreas recortadas'],
    specs: [
      { label: 'Tanque de pulverização', value: 'até 20 L' },
      { label: 'Tanque de distribuição (sólidos)', value: 'até 35 L (25 kg)' },
      { label: 'Sistema de aplicação', value: 'Atomizadores centrífugos' },
      { label: 'Sensores', value: 'Radar de matriz de fase + visão binocular' },
    ],
    pros: ['Menor investimento da linha Agras', 'Cabe em caminhonete pequena', 'Bom para talhões irregulares'],
    cons: ['Menor rendimento por voo', 'Mais paradas para reabastecer'],
    bestFor: 'Pequeno e médio produtor que quer aplicar na própria área, com talhões menores ou recortados.',
    imageNote: 'Foto: DJI Agras T30, geração anterior da linha',
  },
  {
    id: 'mapeamento',
    name: 'Drone de mapeamento',
    category: 'Apoio ao planejamento',
    image: '/images/equip-mapping.webp',
    description: 'Drone com câmera (RGB ou multiespectral, como o DJI Mavic 3M) que gera mapas para planejar rotas e acompanhar a lavoura.',
    applications: ['Levantamento de talhões', 'Delimitação de obstáculos', 'Monitoramento da cultura'],
    specs: [
      { label: 'Tipo de sensor', value: 'Câmera RGB e/ou multiespectral' },
      { label: 'Autonomia', value: 'até 43 min (Mavic 3M)' },
      { label: 'Resultado', value: 'Ortomosaico e mapas de vigor' },
      { label: 'Integração', value: 'Exporta mapas para o planejamento do Agras' },
    ],
    pros: ['Melhora a qualidade do planejamento', 'Mostra falhas e manchas na lavoura', 'Gera registros visuais da área'],
    cons: ['Não realiza aplicação', 'Exige processamento das imagens'],
    bestFor: 'Quem já aplica com drone e quer planejar melhor, ou faz monitoramento e agricultura de precisão.',
    imageNote: 'Foto: DJI Mavic 4 Pro, drone de câmera',
  },
  {
    id: 'mini-4-pro',
    name: 'DJI Mini 4 Pro',
    category: 'Imagem e inspeção',
    image: '/images/acoes/mini4-colheita.webp',
    description: 'Drone leve de câmera, usado em campo para inspeção rápida, fotos e vídeos de operações — como o registrado pelo nosso grupo na colheita de milho.',
    applications: ['Inspeção rápida da lavoura', 'Registro de operações', 'Conteúdo e divulgação'],
    specs: [
      { label: 'Peso', value: 'menos de 249 g' },
      { label: 'Autonomia', value: 'até 34 min (bateria padrão)' },
      { label: 'Câmera', value: '48 MP, sensor 1/1,3"' },
      { label: 'Sensores', value: 'Detecção de obstáculos omnidirecional' },
    ],
    pros: ['Baixo investimento', 'Muito fácil de levar e operar', 'Ótimo para ver a lavoura do alto'],
    cons: ['Não aplica produto', 'Não gera mapas multiespectrais'],
    bestFor: 'Produtor ou técnico que quer olhar a lavoura de cima e registrar o trabalho gastando pouco.',
  },
];
