// Página Fontes e Links: de onde vieram as informações do site.
import Banner from '../components/Banner';

const fontes = [
  { orgao: 'MAPA', descricao: 'Portaria nº 298/2021', link: 'https://www.gov.br/agricultura' },
  { orgao: 'ANAC', descricao: 'Regulamento RBAC nº 100 e orientações sobre drones', link: 'https://www.gov.br/anac' },
  { orgao: 'DECEA', descricao: 'ICA 100-40/2026 e sistema SARPAS', link: 'https://www.decea.mil.br' },
  { orgao: 'ANATEL', descricao: 'Homologação de equipamentos', link: 'https://www.gov.br/anatel' },
  { orgao: 'DJI', descricao: 'Informações técnicas da linha Agras', link: 'https://ag.dji.com' },
];

export default function Fontes() {
  return (
    <>
      <Banner titulo="Fontes e Links" texto="De onde vieram as informações apresentadas no site." foto="/fotos/vantagens.webp" />

      <section className="container-site secao max-w-3xl">
        <h2 className="titulo">Fontes consultadas</h2>
        <ul className="mt-6 space-y-3">
          {fontes.map((f) => (
            <li key={f.orgao} className="rounded-lg border border-texto/10 p-5">
              <p className="font-bold text-verde">{f.orgao}</p>
              <p className="text-texto/80">{f.descricao}</p>
              <a href={f.link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-destaque underline">
                {f.link}
              </a>
            </li>
          ))}
        </ul>

        <h2 className="titulo mt-12">Imagens</h2>
        <p className="paragrafo">As fotografias da galeria e do projeto são registros do grupo. As imagens dos modelos e das demais páginas fazem parte do material de pesquisa do projeto.</p>
        <p className="paragrafo">Imagens do comparativo aéreo x terrestre (Wikimedia Commons):</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-texto/80">
          <li>
            <a className="underline" href="https://commons.wikimedia.org/wiki/File:Sprinkler_drone.jpg" target="_blank" rel="noreferrer">Sprinkler drone</a> — Vis M, CC BY-SA 4.0
          </li>
          <li>
            <a className="underline" href="https://commons.wikimedia.org/wiki/File:Amazone_field_sprayer.jpg" target="_blank" rel="noreferrer">Amazone field sprayer</a> — werktuigendagen, CC BY-SA 2.0
          </li>
        </ul>
      </section>
    </>
  );
}
