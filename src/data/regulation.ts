export type Agency = {
  id: string;
  sigla: string;
  name: string;
  role: string;
  reference: string;
  href: string;
};

/**
 * Referências normativas conhecidas até a data de elaboração do site.
 * A legislação muda: confira sempre o texto vigente no portal oficial antes de apresentar como definitivo.
 */
export const agencies: Agency[] = [
  {
    id: 'mapa',
    sigla: 'MAPA',
    name: 'Ministério da Agricultura e Pecuária',
    role: 'Regras para a aplicação de agrotóxicos e afins com aeronaves remotamente pilotadas, incluindo cadastro de operadores, capacitação e condições de aplicação.',
    reference: 'Portaria MAPA nº 298/2021 e atualizações — conferir texto vigente',
    href: 'https://www.gov.br/agricultura',
  },
  {
    id: 'anac',
    sigla: 'ANAC',
    name: 'Agência Nacional de Aviação Civil',
    role: 'Requisitos gerais para aeronaves não tripuladas: cadastro, classificação, documentação e responsabilidades do operador.',
    reference: 'RBAC-E nº 94 e sistema de cadastro de drones — conferir texto vigente',
    href: 'https://www.gov.br/anac',
  },
  {
    id: 'decea',
    sigla: 'DECEA',
    name: 'Departamento de Controle do Espaço Aéreo',
    role: 'Regras de acesso ao espaço aéreo e solicitações de voo para aeronaves não tripuladas.',
    reference: 'ICA 100-40 e sistema SARPAS — conferir texto vigente',
    href: 'https://www.decea.mil.br',
  },
  {
    id: 'anatel',
    sigla: 'ANATEL',
    name: 'Agência Nacional de Telecomunicações',
    role: 'Homologação dos equipamentos de radiocomunicação usados no controle e na transmissão de dados da aeronave.',
    reference: 'Certificação e homologação de produtos para telecomunicações',
    href: 'https://www.gov.br/anatel',
  },
];

export type RegTopic = { title: string; agencies: string[]; body: string[] };

export const regTopics: RegTopic[] = [
  {
    title: 'Responsabilidades do operador',
    agencies: ['ANAC', 'MAPA'],
    body: [
      'O operador responde pela segurança da operação, pela conformidade da aeronave e pela aplicação dentro das regras agrícolas.',
      'Consulte no regulamento vigente quem pode atuar como operador, quais registros são exigidos e como manter a documentação.',
    ],
  },
  {
    title: 'Requisitos aplicáveis às aeronaves',
    agencies: ['ANAC'],
    body: [
      'Aeronaves não tripuladas seguem categorias e exigências definidas pela ANAC, que podem envolver cadastro e identificação do equipamento.',
      'Verifique a classe do seu equipamento e as exigências correspondentes no portal da agência.',
    ],
  },
  {
    title: 'Homologação de equipamentos de telecomunicações',
    agencies: ['ANATEL'],
    body: [
      'Rádios de controle e transmissão de dados devem estar homologados para uso no Brasil.',
      'Equipamentos sem homologação podem gerar interferências e problemas legais.',
    ],
  },
  {
    title: 'Cadastro e regras aeronáuticas',
    agencies: ['ANAC', 'DECEA'],
    body: [
      'Além do cadastro do equipamento, o voo precisa respeitar as regras de uso do espaço aéreo.',
      'Áreas próximas a aeródromos e outras zonas restritas têm condições específicas.',
    ],
  },
  {
    title: 'Solicitações de acesso ao espaço aéreo',
    agencies: ['DECEA'],
    body: [
      'Dependendo do local, da altura e do tipo de operação, pode ser necessário solicitar autorização de acesso ao espaço aéreo.',
      'As solicitações são feitas pelos canais oficiais do DECEA.',
    ],
  },
  {
    title: 'Capacitação e requisitos para aplicação agrícola',
    agencies: ['MAPA'],
    body: [
      'A aplicação de agrotóxicos com drones envolve exigências próprias de capacitação e de cadastro junto ao MAPA.',
      'Confira no texto vigente quais cursos, responsáveis técnicos e registros são obrigatórios.',
    ],
  },
  {
    title: 'Distâncias de segurança e condições operacionais',
    agencies: ['MAPA'],
    body: [
      'A norma agrícola estabelece afastamentos mínimos de áreas sensíveis e condições para a aplicação.',
      'Os valores não são reproduzidos aqui de propósito: consulte o texto oficial atualizado antes de planejar qualquer operação.',
    ],
  },
  {
    title: 'Cuidados com pessoas, propriedades, estradas e redes elétricas',
    agencies: ['ANAC', 'MAPA'],
    body: [
      'Planeje zonas de exclusão para moradias, mananciais, estradas e linhas de transmissão.',
      'Avise vizinhos quando necessário e interrompa o voo diante de qualquer presença não prevista na área.',
    ],
  },
];

export const regSteps = [
  { title: 'Conheça o equipamento', text: 'Identifique a classe da aeronave e verifique a homologação dos rádios.' },
  { title: 'Regularize a aeronave', text: 'Faça o cadastro exigido pela ANAC para o seu caso.' },
  { title: 'Capacite-se', text: 'Cumpra os requisitos de formação definidos pelo MAPA para aplicação agrícola.' },
  { title: 'Planeje o voo', text: 'Verifique as regras de espaço aéreo e solicite acesso quando exigido.' },
  { title: 'Aplique com responsabilidade', text: 'Siga receituário, condições meteorológicas e distâncias previstas na norma.' },
];
