export const galleryCategories = [
  'Todos',
  'Drones agrícolas',
  'Campo e operações',
  'Bastidores do projeto',
  'Testes e demonstrações',
  'Planejamento de voo',
  'Equipe e extensão',
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, 'Todos'>;
  ratio: 'portrait' | 'landscape' | 'square';
  type: 'foto' | 'video';
  /** true enquanto for imagem ilustrativa, e não registro real do grupo */
  demo: boolean;
};

/**
 * Acervo demonstrativo. Substitua por fotos reais em /public/images/galeria
 * e mude "demo" para false apenas em registros efetivamente realizados pelo grupo.
 */
export const gallery: GalleryItem[] = [
  // Registros reais do grupo — visita técnica em Maringá (PR) com o empreendedor Mario Filho
  { id: 'r1', src: '/images/acoes/drone-pastagem.webp', alt: 'Drone agrícola pousado em pastagem de morro, ao lado de balde com fertilizante granulado', caption: 'Distribuição de granulado em pastagem — Maringá (PR)', category: 'Campo e operações', ratio: 'portrait', type: 'foto', demo: false },
  { id: 'r2', src: '/images/acoes/controle-voo.webp', alt: 'Controle remoto DJI mostrando a rota no mapa, com o drone agrícola voando ao fundo', caption: 'Rota de voo no controle remoto', category: 'Planejamento de voo', ratio: 'portrait', type: 'foto', demo: false },
  { id: 'r3', src: '/images/acoes/base-apoio.webp', alt: 'Caminhonete com plataforma de apoio, gerador e operador, vista atrás de um drone agrícola', caption: 'Base de apoio montada na caminhonete', category: 'Bastidores do projeto', ratio: 'portrait', type: 'foto', demo: false },
  { id: 'r4', src: '/images/acoes/mini4-colheita.webp', alt: 'Drone DJI Mini 4 Pro na mão, com colheitadeira New Holland colhendo milho ao fundo', caption: 'DJI Mini 4 Pro na colheita de milho com New Holland', category: 'Equipe e extensão', ratio: 'portrait', type: 'foto', demo: false },
  { id: 'g1', src: '/images/galeria/drone-voo.webp', alt: 'Drone de pulverização sobrevoando lavoura', caption: 'Drone agrícola em operação', category: 'Drones agrícolas', ratio: 'landscape', type: 'foto', demo: true },
  { id: 'g2', src: '/images/galeria/talhao-aereo.webp', alt: 'Vista aérea de talhões agrícolas', caption: 'Aplicação vista do alto', category: 'Campo e operações', ratio: 'portrait', type: 'foto', demo: true },
  { id: 'g3', src: '/images/galeria/dji-pilot.webp', alt: 'Mapa de índice de vegetação gerado a partir de imagens aéreas', caption: 'Mapa de índice de vegetação', category: 'Planejamento de voo', ratio: 'square', type: 'foto', demo: true },
  { id: 'g5', src: '/images/galeria/demonstracao.webp', alt: 'Drones agrícolas DJI em exposição', caption: 'Drones agrícolas em exposição', category: 'Testes e demonstrações', ratio: 'portrait', type: 'foto', demo: true },
  { id: 'g7', src: '/images/galeria/rotores.webp', alt: 'Drone DJI Agras pousado, com braços e rotores visíveis', caption: 'Estrutura de um DJI Agras', category: 'Drones agrícolas', ratio: 'portrait', type: 'foto', demo: true },
  { id: 'g8', src: '/images/galeria/abastecimento.webp', alt: 'Barras e bicos de pulverizador terrestre', caption: 'Barras e bicos de pulverização', category: 'Campo e operações', ratio: 'landscape', type: 'foto', demo: true },
  { id: 'g9', src: '/images/galeria/rota.webp', alt: 'Drone agrícola sobrevoando a lavoura', caption: 'Drone sobre a lavoura', category: 'Planejamento de voo', ratio: 'landscape', type: 'foto', demo: true },
  { id: 'g10', src: '/images/galeria/teste.webp', alt: 'Operação de drone agrícola em campo', caption: 'Operação aérea em campo', category: 'Testes e demonstrações', ratio: 'square', type: 'foto', demo: true },
];
