export const courseCategories = [
  'Todos',
  'Introdução aos drones agrícolas',
  'Pilotagem e operação',
  'Planejamento de voo',
  'Tecnologia de aplicação',
  'Regulamentação e segurança',
  'Agricultura de precisão',
] as const;

export type CourseCategory = (typeof courseCategories)[number];

export type Course = {
  id: string;
  name: string;
  institution: string;
  modality: string;
  hours: string;
  content: string;
  category: Exclude<CourseCategory, 'Todos'>;
  href?: string;
  /** true enquanto o curso não tiver sido verificado pelo grupo */
  demo: boolean;
};

/**
 * Cards demonstrativos — nenhum curso abaixo foi verificado.
 * Substitua por cursos reais (nome, instituição, carga horária e link oficial) e defina demo: false.
 */
export const courses: Course[] = [
  { id: 'c1', name: 'Introdução aos drones agrícolas', institution: 'Instituição a definir', modality: 'A definir', hours: 'A confirmar', content: 'Conceitos, tipos de aeronaves e usos no campo.', category: 'Introdução aos drones agrícolas', demo: true },
  { id: 'c2', name: 'Operação de aeronaves remotamente pilotadas', institution: 'Instituição a definir', modality: 'A definir', hours: 'A confirmar', content: 'Preparação, checklists, comandos e procedimentos de emergência.', category: 'Pilotagem e operação', demo: true },
  { id: 'c3', name: 'Planejamento de rotas e mapeamento', institution: 'Instituição a definir', modality: 'A definir', hours: 'A confirmar', content: 'Delimitação de talhões, obstáculos e geração de rotas.', category: 'Planejamento de voo', demo: true },
  { id: 'c4', name: 'Tecnologia de aplicação de defensivos', institution: 'Instituição a definir', modality: 'A definir', hours: 'A confirmar', content: 'Gotas, deriva, calibração e qualidade da aplicação.', category: 'Tecnologia de aplicação', demo: true },
  { id: 'c5', name: 'Regulamentação de drones no Brasil', institution: 'Instituição a definir', modality: 'A definir', hours: 'A confirmar', content: 'Papéis de MAPA, ANAC, DECEA e ANATEL.', category: 'Regulamentação e segurança', demo: true },
  { id: 'c6', name: 'Fundamentos de agricultura de precisão', institution: 'Instituição a definir', modality: 'A definir', hours: 'A confirmar', content: 'GNSS, mapas de variabilidade e tomada de decisão.', category: 'Agricultura de precisão', demo: true },
];
