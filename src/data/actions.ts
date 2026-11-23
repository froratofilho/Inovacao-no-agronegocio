export type ProjectAction = {
  id: string;
  date: string;
  title: string;
  place: string;
  partner?: string;
  text: string;
  photos: { src: string; alt: string; caption: string }[];
};

/**
 * Portfólio: ações efetivamente realizadas pelo grupo.
 * Adicione novas ações no topo da lista.
 */
export const actions: ProjectAction[] = [
  {
    id: 'visita-mario-filho',
    date: 'Novembro de 2026',
    title: 'Acompanhamento de operações com drones em campo',
    place: 'Maringá — PR',
    partner: 'Mario Filho, empreendedor de Maringá',
    text:
      'O grupo acompanhou de perto o trabalho do empreendedor Mario Filho em propriedades rurais da região de Maringá: preparo do drone, distribuição de fertilizante granulado em pastagem de morro, a estrutura de apoio montada sobre a caminhonete (gerador, recarga de baterias e abastecimento), o planejamento de voo no controle remoto e o uso de um drone compacto para registro de imagens durante a colheita de milho com colheitadeira New Holland.',
    photos: [
      { src: '/images/acoes/drone-pastagem.webp', alt: 'Drone agrícola pousado em pastagem de morro, ao lado de balde com fertilizante granulado', caption: 'Drone pronto para distribuir granulado em pastagem de morro' },
      { src: '/images/acoes/base-apoio.webp', alt: 'Caminhonete com plataforma de apoio, gerador e operador, vista atrás de um drone agrícola', caption: 'Base de apoio: gerador, recarga e abastecimento no campo' },
      { src: '/images/acoes/controle-voo.webp', alt: 'Controle remoto DJI mostrando a rota no mapa, com o drone agrícola voando ao fundo', caption: 'Planejamento e acompanhamento do voo pelo controle' },
      { src: '/images/acoes/mini4-colheita.webp', alt: 'Drone DJI Mini 4 Pro na mão, com colheitadeira New Holland colhendo milho ao fundo', caption: 'Drone de imagem na colheita de milho (colheitadeira New Holland)' },
    ],
  },
];
