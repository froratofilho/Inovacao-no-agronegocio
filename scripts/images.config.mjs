/**
 * Curadoria de imagens reais — Wikimedia Commons.
 *
 * Cada "slot" corresponde a um arquivo esperado pelo site em /public/images.
 * `files`: arquivos do Commons escolhidos na pesquisa (testados na ordem).
 * `search`: busca de reserva no Commons, usada só se nenhum arquivo da lista passar na verificação.
 * Toda imagem é verificada pelo script: existência, licença livre (CC0, domínio público,
 * CC BY ou CC BY-SA — nunca NC/ND), resolução mínima e formato.
 *
 * Slots sem candidatos (equipe, bastidores) ficam vazios DE PROPÓSITO:
 * não usamos pessoas desconhecidas como se fossem integrantes do projeto.
 */
export const slots = [
  // ---------- HOME ----------
  { out: 'hero-campo', width: 2600, minWidth: 1800, orientation: 'landscape',
    files: ['Central-eastern Brazil, by Copernicus Sentinel-2A satellite.jpg'],
    search: 'aerial view green soybean field rows' },
  { out: 'hero-drone', width: 1800, minWidth: 1200,
    files: ['DJI Agras T50 on ground.jpg', 'DJI Agriculture, Agritechnica 2023, Hanover (P1160331).jpg'],
    search: 'DJI Agras T50' },
  { out: 'manifesto-lavoura', width: 1800, minWidth: 1200, orientation: 'landscape',
    files: [], search: 'aerial farmland fields pattern green' },
  { out: 'manifesto-drone', width: 1400, minWidth: 900,
    files: ['Agricultural drone in use on rice field near Nisoshi, Aomori.jpg', 'Drone crop fertilizer.jpg'],
    search: 'agricultural drone spraying field' },
  { out: 'compare-terrestre', width: 2000, minWidth: 1200, orientation: 'landscape',
    files: ['Deutz-Fahr 5090.D5 mit Lochmann Spritze.jpg', 'Amazone field sprayer.jpg', 'Delvano sprayers.jpg'],
    search: 'tractor field sprayer spraying' },
  { out: 'compare-drone', width: 2000, minWidth: 1200, orientation: 'landscape',
    files: ['Sprinkler drone.jpg', 'Agricultural drone in use on rice field near Nisoshi, Aomori.jpg'],
    search: 'agricultural drone spraying crop' },
  { out: 'projeto-campo', width: 1000, minWidth: 700,
    files: [], search: 'soybean plantation field Brazil' },
  { out: 'projeto-planejamento', width: 1000, minWidth: 600,
    files: ['UAS Enhanced Agriculture NDVI.png'], search: 'NDVI drone agriculture map' },
  { out: 'closing-aerea', width: 2600, minWidth: 1600, orientation: 'landscape',
    files: [], search: 'aerial view agricultural fields sunset' },

  // ---------- TECNOLOGIA ----------
  { out: 'tec-rotas', width: 1600, minWidth: 900, files: ['Drone crop fertilizer.jpg'], search: 'precision agriculture drone map field' },
  { out: 'tec-acesso', width: 1600, minWidth: 900,
    files: ['UAV-IQ Conducting Drone Biological Control Operations in California.jpg'], search: 'drone agriculture hillside vineyard' },

  // ---------- COMPARATIVO ----------
  { out: 'metodo-terrestre', width: 1600, minWidth: 1000, orientation: 'landscape',
    files: ['Amazone field sprayer.jpg', 'Deutz-Fahr 5090.D5 mit Lochmann Spritze.jpg'], search: 'self-propelled sprayer field' },
  { out: 'metodo-drone', width: 1600, minWidth: 1000, orientation: 'landscape',
    files: ['Drone crop fertilizer.jpg', 'Sprinkler drone.jpg'], search: 'agricultural spraying drone' },
  { out: 'equip-t100', width: 1200, minWidth: 700, files: [], search: 'DJI Agras T100' },
  { out: 'equip-t50', width: 1200, minWidth: 700, files: ['DJI Agras T50 on ground.jpg'], search: 'DJI Agras T50' },
  { out: 'equip-t25', width: 1200, minWidth: 700, files: [], search: 'DJI Agras T25' },
  { out: 'equip-mapping', width: 1200, minWidth: 700, files: [], search: 'DJI Mavic 3 Multispectral' },

  // ---------- PROJETO ----------
  // projeto-objetivo: usa a foto real do grupo (public/images/acoes/base-apoio.webp)

  // ---------- ABERTURAS DAS PÁGINAS ----------
  { out: 'page-tecnologia', width: 2400, minWidth: 1400, orientation: 'landscape', files: ['Sprinkler drone.jpg'], search: 'agricultural drone' },
  { out: 'page-comparativo', width: 2400, minWidth: 1400, orientation: 'landscape', files: ['Deutz-Fahr 5090.D5 mit Lochmann Spritze.jpg'], search: 'crop sprayer field' },
  { out: 'page-galeria', width: 2400, minWidth: 1400, orientation: 'landscape', files: [], search: 'green crop field aerial drone photo' },
  { out: 'page-regulamentacao', width: 2400, minWidth: 1400, orientation: 'landscape', files: ['DJI Agras T50 in flight.jpg', 'DJI Agriculture, Agritechnica 2023, Hanover (P1160331).jpg'], search: 'agricultural drone flying field' },
  { out: 'page-cursos', width: 2400, minWidth: 1400, orientation: 'landscape', files: [], search: 'drone pilot training remote controller' },
  { out: 'page-projeto', width: 2400, minWidth: 1400, orientation: 'landscape', files: [], search: 'agricultural landscape Brazil field' },
  { out: 'page-faq', width: 2400, minWidth: 1400, orientation: 'landscape', files: [], search: 'wheat field rows aerial' },

  // ---------- GALERIA (imagens de referência, não registros do grupo) ----------
  { out: 'galeria/drone-voo', width: 1600, minWidth: 900, files: ['Agricultural drone in use on rice field near Nisoshi, Aomori.jpg'], search: 'agricultural drone flight' },
  { out: 'galeria/talhao-aereo', width: 1200, minWidth: 800, orientation: 'portrait', files: ['Drone crop fertilizer.jpg'], search: 'aerial crop field' },
  { out: 'galeria/dji-pilot', width: 1200, minWidth: 700, files: ['UAS Enhanced Agriculture NDVI.png'], search: 'drone flight planning software' },
  { out: 'galeria/demonstracao', width: 1200, minWidth: 800, files: ['DJI Agriculture, Agritechnica 2023, Hanover (P1160331).jpg'], search: 'agricultural drone exhibition' },
  { out: 'galeria/rotores', width: 1200, minWidth: 800, files: ['DJI Agras T50 on ground.jpg'], search: 'drone propeller motor close-up' },
  { out: 'galeria/abastecimento', width: 1600, minWidth: 900, files: ['Delvano sprayers.jpg'], search: 'crop sprayer nozzles' },
  { out: 'galeria/rota', width: 1600, minWidth: 900, files: ['Sprinkler drone.jpg'], search: 'drone over field' },
  { out: 'galeria/teste', width: 1200, minWidth: 800, files: ['UAV-IQ Conducting Drone Biological Control Operations in California.jpg'], search: 'drone agriculture operation' },
  // bastidores.jpg e equipe.jpg: reservados para fotos reais da equipe FEMA.
];

/** Buscas de reserva extras, testadas em ordem quando a busca principal não retorna foto válida. */
export const altSearches = {
  'hero-campo': ['aerial view farmland Brazil', 'soybean field aerial', 'agricultural fields aerial view'],
  'manifesto-lavoura': ['aerial farmland', 'crop field aerial'],
  'projeto-campo': ['soybean field', 'corn field'],
  'closing-aerea': ['aerial farmland', 'fields aerial view'],
  'tec-rotas': ['NDVI map field'],
  'equip-t100': ['DJI Agras', 'agricultural drone DJI', 'crop spraying drone'],
  'equip-t25': ['DJI Agras T30', 'DJI Agras T10', 'agricultural spraying drone'],
  'equip-mapping': ['DJI Mavic 3 Enterprise', 'DJI Phantom 4 Multispectral', 'DJI Phantom 4 RTK'],
  'projeto-objetivo': ['farmer soybean field', 'agronomist field', 'farmer crop field'],
  'page-galeria': ['aerial view farmland', 'crop field aerial'],
  'page-regulamentacao': ['crop spraying drone flight'],
  'page-cursos': ['drone pilot', 'drone training', 'quadcopter flying'],
  'page-projeto': ['farmland Brazil', 'soybean field Brazil', 'agricultural landscape'],
  'page-faq': ['wheat field', 'corn field', 'crop field rows'],
  'galeria/drone-voo': ['agricultural drone', 'crop spraying drone'],
  'galeria/talhao-aereo': ['aerial farmland', 'field aerial view'],
  'galeria/dji-pilot': ['NDVI map', 'drone map agriculture'],
  'galeria/demonstracao': ['DJI Agras', 'agricultural drone'],
  'galeria/abastecimento': ['field sprayer', 'crop sprayer'],
  'galeria/teste': ['agricultural drone', 'drone spraying'],
};

/** Imagem recortada (fundo transparente) do drone para o Hero — gerada a partir de hero-drone, se possível. */
export const cutout = { from: 'hero-drone', out: 'hero-drone-recorte' };
