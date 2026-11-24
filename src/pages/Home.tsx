// Página inicial: banner, apresentação do projeto e atalhos para as outras páginas.
import { Link } from 'react-router-dom';

const atalhos = [
  { titulo: 'Tecnologia', texto: 'Como o drone agrícola funciona, vantagens e cursos.', link: '/tecnologia' },
  { titulo: 'Comparativo', texto: 'Aplicação aérea x terrestre e os modelos DJI Agras.', link: '/comparativo' },
  { titulo: 'Guia de Regulamentação', texto: 'MAPA, ANAC, DECEA e ANATEL: o que cada órgão exige.', link: '/regulamentacao' },
  { titulo: 'Perguntas Frequentes', texto: 'Dúvidas comuns de quem pensa em usar drones.', link: '/perguntas-frequentes' },
];

export default function Home() {
  return (
    <>
      {/* Banner */}
      <section className="relative">
        <img src="/fotos/home-banner.webp" alt="Drone agrícola pulverizando uma lavoura" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-verde/70" />
        <div className="container-site relative py-24 text-white sm:py-32">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
            Conheça como os drones agrícolas estão transformando a aplicação de defensivos nas lavouras brasileiras.
          </h1>
          <p className="mt-6 text-lg text-white/85">Mais precisão no campo, menos desperdício e uma nova maneira de produzir.</p>
          <Link to="/tecnologia" className="botao mt-8">Conhecer a tecnologia</Link>
        </div>
      </section>

      {/* Texto de apresentação */}
      <section className="container-site secao max-w-3xl">
        <h2 className="titulo">Sobre o projeto</h2>
        <p className="paragrafo">
          A agricultura está passando por uma transformação tecnológica. Com o avanço dos drones agrícolas, atividades que antes dependiam exclusivamente de máquinas terrestres ou aeronaves podem ser realizadas com maior flexibilidade e precisão.
        </p>
        <p className="paragrafo">
          Este projeto tem como objetivo apresentar o uso de drones na aplicação de defensivos agrícolas, demonstrando como essa tecnologia funciona, quais são seus benefícios, suas limitações e quais cuidados devem ser considerados durante sua utilização.
        </p>
        <p className="paragrafo">
          Além de apresentar as inovações disponíveis no mercado, buscamos aproximar o conhecimento acadêmico da realidade dos produtores rurais, oferecendo informações acessíveis que possam contribuir para a modernização do agronegócio.
        </p>
      </section>

      {/* Atalhos para as páginas */}
      <section className="bg-claro">
        <div className="container-site secao">
          <h2 className="titulo">Explore o site</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {atalhos.map((a) => (
              <Link key={a.link} to={a.link} className="rounded-lg border border-texto/10 bg-white p-5 hover:border-destaque">
                <h3 className="subtitulo">{a.titulo}</h3>
                <p className="mt-2 text-sm text-texto/70">{a.texto}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
