// Página O Projeto: apresentação, disciplinas envolvidas e integrantes.
import Banner from '../components/Banner';

const disciplinas = [
  {
    nome: 'Banco de Dados',
    professor: 'Lecionada pelo Coordenador do curso e Professor Dr. Alex',
    texto: 'Organização e armazenamento das informações sobre os drones, suas características técnicas, regulamentações e conteúdos apresentados no site.',
  },
  {
    nome: 'Computação Gráfica',
    professor: 'Lecionada pelo Professor Célio',
    texto: 'Desenvolvimento da identidade visual do projeto, organização dos elementos gráficos, imagens, ilustrações e apresentação visual das informações.',
  },
  {
    nome: 'Eletrônica Digital',
    professor: 'Lecionada pelo Professor Guilherme',
    texto: 'Estudo dos componentes eletrônicos presentes nos drones, como sensores, controladores, sistemas de comunicação e dispositivos de navegação.',
  },
  {
    nome: 'Linguagem de Programação',
    professor: 'Lecionada pelo Professor Dr. Almir',
    texto: 'Aplicação dos conhecimentos de lógica e programação no desenvolvimento da estrutura e das funcionalidades da plataforma.',
  },
];

const integrantes = ['Fernando Rorato Filho', 'Daniel', 'Pedro', 'Dirceu'];

export default function Projeto() {
  return (
    <>
      <Banner titulo="O Projeto" texto="Inovação no Agronegócio: Aplicação de Defensivos Agrícolas via Drones de Precisão." foto="/fotos/projeto.webp" />

      {/* Apresentação */}
      <section className="container-site secao grid items-start gap-10 md:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="titulo">Sobre a iniciativa</h2>
          <p className="paragrafo">
            O projeto "Inovação no Agronegócio: Aplicação de Defensivos Agrícolas via Drones de Precisão" surgiu como uma iniciativa acadêmica vinculada às disciplinas da Fundação Educacional do Município de Assis - FEMA.
          </p>
          <p className="paragrafo">
            A proposta busca integrar conhecimentos de diferentes áreas da tecnologia da informação e da computação com uma necessidade real do setor agrícola.
          </p>
          <p className="paragrafo">
            Por meio da pesquisa e do desenvolvimento de uma plataforma informativa, pretendemos apresentar aos produtores rurais e à comunidade acadêmica as possibilidades oferecidas pelos drones agrícolas, destacando seu funcionamento, suas vantagens, suas limitações e os requisitos necessários para sua utilização.
          </p>
          <p className="paragrafo">
            A iniciativa também busca facilitar o acesso a informações técnicas e regulamentares, contribuindo para a disseminação do conhecimento e incentivando a adoção consciente de novas tecnologias no campo.
          </p>
        </div>
        <img src="/fotos/projeto.webp" alt="Controle remoto de drone agrícola com o drone em voo ao fundo" className="foto aspect-[3/4]" />
      </section>

      {/* Disciplinas */}
      <section className="bg-claro">
        <div className="container-site secao">
          <h2 className="titulo">Integração com as disciplinas</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {disciplinas.map((d) => (
              <div key={d.nome} className="rounded-lg border border-texto/10 bg-white p-5">
                <h3 className="subtitulo">{d.nome}</h3>
                <p className="mt-1 text-sm font-semibold text-destaque">{d.professor}</p>
                <p className="mt-2 text-sm leading-relaxed text-texto/75">{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrantes e objetivo */}
      <section className="container-site secao grid gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="titulo">Integrantes</h2>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-texto/80">
            {integrantes.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="titulo">Nosso objetivo</h2>
          <p className="paragrafo">Nosso principal objetivo é aproximar a inovação tecnológica da realidade dos produtores rurais.</p>
          <p className="paragrafo">
            Muitas tecnologias disponíveis no mercado ainda são pouco conhecidas por parte dos agricultores, seja pela falta de informação, pelo custo de aquisição ou pelas dúvidas relacionadas à regulamentação e à operação dos equipamentos.
          </p>
          <p className="paragrafo">
            Dessa forma, buscamos oferecer um espaço de consulta acessível, reunindo informações que auxiliem na compreensão dos drones agrícolas e de suas aplicações.
          </p>
          <p className="paragrafo">
            Acreditamos que compartilhar conhecimento é um passo importante para incentivar uma agricultura cada vez mais moderna, eficiente e consciente.
          </p>
        </div>
      </section>
    </>
  );
}
