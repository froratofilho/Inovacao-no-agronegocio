export const site = {
  name: 'New Holland',
  short: 'New Holland',
  tagline: 'Inovação no Agronegócio: aplicação de defensivos agrícolas via drones de precisão',
  institution: 'FEMA — Fundação Educacional do Município de Assis',
  year: new Date().getFullYear(),
};

export type NavItem = { label: string; to: string };

export const mainNav: NavItem[] = [
  { label: 'Início', to: '/' },
  { label: 'Tecnologia', to: '/tecnologia' },
  { label: 'Comparativo', to: '/comparativo' },
  { label: 'Galeria', to: '/galeria' },
  { label: 'Regulamentação', to: '/regulamentacao' },
  { label: 'O Projeto', to: '/projeto' },
];

export const resourcesNav: (NavItem & { description: string })[] = [
  { label: 'Cursos', to: '/cursos', description: 'Onde buscar formação em drones agrícolas' },
  { label: 'Perguntas frequentes', to: '/faq', description: 'Dúvidas comuns de produtores e estudantes' },
];

export const officialLinks = [
  { label: 'MAPA — Ministério da Agricultura e Pecuária', href: 'https://www.gov.br/agricultura' },
  { label: 'ANAC — Agência Nacional de Aviação Civil', href: 'https://www.gov.br/anac' },
  { label: 'DECEA — Departamento de Controle do Espaço Aéreo', href: 'https://www.decea.mil.br' },
  { label: 'ANATEL — Agência Nacional de Telecomunicações', href: 'https://www.gov.br/anatel' },
];
