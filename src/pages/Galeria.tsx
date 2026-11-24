// Página Galeria: fotos do grupo em atividades com drones.
import Banner from '../components/Banner';

const fotos = [
  { arquivo: '/fotos/galeria/foto-1.webp', descricao: 'Abastecimento do drone agrícola' },
  { arquivo: '/fotos/galeria/foto-2.webp', descricao: 'Drone agrícola em área de pastagem' },
  { arquivo: '/fotos/galeria/foto-3.webp', descricao: 'Preparação do drone para o voo' },
  { arquivo: '/fotos/galeria/foto-4.webp', descricao: 'Drone DJI Mini durante a colheita de milho' },
  { arquivo: '/fotos/galeria/foto-5.webp', descricao: 'Equipe acompanhando o drone em campo' },
  { arquivo: '/fotos/galeria/foto-6.webp', descricao: 'Drone em voo controlado pelo operador' },
  { arquivo: '/fotos/galeria/foto-7.webp', descricao: 'Drone agrícola pousado em área aberta' },
];

export default function Galeria() {
  return (
    <>
      <Banner titulo="Galeria" texto="Registros das atividades do grupo com drones agrícolas." foto="/fotos/galeria/foto-5.webp" />

      <section className="container-site secao">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fotos.map((f) => (
            <figure key={f.arquivo}>
              <img src={f.arquivo} alt={f.descricao} loading="lazy" className="foto aspect-[3/4]" />
              <figcaption className="mt-2 text-sm text-texto/70">{f.descricao}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
