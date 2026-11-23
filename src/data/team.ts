export type Member = { name: string; role: string; bio: string; photo?: string };

/** Funções e descrições em aberto — preencha com as informações reais de cada integrante. */
export const team: Member[] = [
  { name: 'Fernando', role: 'Função a definir', bio: 'Descrição a ser preenchida pelo integrante.' },
  { name: 'Daniel', role: 'Função a definir', bio: 'Descrição a ser preenchida pelo integrante.' },
  { name: 'Pedro', role: 'Função a definir', bio: 'Descrição a ser preenchida pelo integrante.' },
  { name: 'Dirceu', role: 'Função a definir', bio: 'Descrição a ser preenchida pelo integrante.' },
];

export const disciplines = [
  { name: 'Banco de Dados', link: 'Estruturação dos conteúdos, catálogo de equipamentos e registros das ações em dados organizados.' },
  { name: 'Computação Gráfica', link: 'Modelagem e renderização 3D do drone e do ambiente agrícola em tempo real com WebGL.' },
  { name: 'Eletrônica Digital', link: 'Compreensão de sensores, controladores, GNSS e sistemas embarcados presentes nos drones.' },
  { name: 'Linguagem de Programação', link: 'Desenvolvimento da plataforma, dos componentes interativos e da lógica de navegação.' },
];

export type TimelineEntry = { date: string; title: string; text: string };

/** Adicione aqui somente atividades efetivamente realizadas. */
export const timeline: TimelineEntry[] = [
  {
    date: 'Novembro de 2026',
    title: 'Visita técnica em Maringá (PR) com o empreendedor Mario Filho',
    text: 'Acompanhamento de operações reais com drones agrícolas: distribuição de granulado em pastagem, estrutura de apoio em campo, planejamento de voo e registro da colheita de milho com colheitadeira New Holland.',
  },
];
