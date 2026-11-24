// Página Tecnologia: como funciona, vantagens, sustentabilidade e cursos.
import Banner from '../components/Banner';

const vantagens = [
  {
    titulo: 'Maior precisão na aplicação',
    texto: 'A programação de rotas e o controle dos parâmetros de voo permitem direcionar a aplicação para áreas específicas, evitando aplicações desnecessárias quando o planejamento é adequado.',
  },
  {
    titulo: 'Redução do amassamento da cultura',
    texto: 'Diferentemente de tratores e pulverizadores terrestres, os drones não precisam passar diretamente sobre as linhas de plantio. Isso evita o amassamento causado pela passagem das rodas sobre a lavoura.',
  },
  {
    titulo: 'Acesso a áreas difíceis',
    texto: 'Conseguem alcançar terrenos inclinados, áreas alagadas, regiões com obstáculos e locais onde máquinas terrestres encontram dificuldades.',
  },
  {
    titulo: 'Agilidade operacional',
    texto: 'A automatização dos trajetos e a possibilidade de realizar aplicações localizadas podem tornar determinadas operações mais rápidas.',
  },
  {
    titulo: 'Possibilidade de redução de desperdícios',
    texto: 'O planejamento da aplicação e o direcionamento do produto podem reduzir desperdícios. Entretanto, isso depende da regulagem, da tecnologia utilizada, das condições climáticas e da técnica de aplicação.',
  },
  {
    titulo: 'Menor exposição dos trabalhadores',
    texto: 'A operação remota permite que o operador permaneça afastado da área pulverizada durante a aplicação, embora ainda sejam necessários equipamentos de proteção e procedimentos de segurança.',
  },
];

const assuntosCurso = [
  'Legislação e regulamentação da aviação agrícola.',
  'Segurança operacional.',
  'Tecnologia de aplicação de produtos.',
  'Conhecimentos sobre defensivos agrícolas.',
  'Cuidados ambientais.',
  'Procedimentos de operação e aplicação.',
];

export default function Tecnologia() {
  return (
    <>
      <Banner titulo="Tecnologia" texto="O que são os drones agrícolas e como eles funcionam." foto="/fotos/tecnologia.webp" />

      {/* Como funciona */}
      <section className="container-site secao grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="titulo">Como funciona um drone agrícola</h2>
          <p className="paragrafo">
            Os drones agrícolas são aeronaves não tripuladas desenvolvidas para realizar atividades no campo, principalmente a pulverização de defensivos agrícolas e a distribuição de produtos como fertilizantes e sementes.
          </p>
          <p className="paragrafo">
            Esses equipamentos possuem reservatórios próprios, motores elétricos, hélices, sensores e sistemas de navegação por satélite. O operador controla o equipamento por meio de um controle remoto, podendo programar trajetos e áreas específicas de aplicação.
          </p>
          <p className="paragrafo">
            Durante o voo, o drone libera o produto por meio de pulverizadores instalados em sua estrutura. Sensores e sistemas de posicionamento auxiliam no controle da altura, velocidade e trajetória, permitindo uma aplicação planejada e direcionada.
          </p>
          <p className="paragrafo">
            Alguns modelos também possuem sistemas de radar e câmeras que auxiliam na identificação de obstáculos e no acompanhamento da operação.
          </p>
        </div>
        <img src="/fotos/tecnologia.webp" alt="Drone agrícola pulverizando a plantação" className="foto aspect-[4/3]" />
      </section>

      {/* Vantagens */}
      <section className="bg-claro">
        <div className="container-site secao">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <h2 className="titulo">Vantagens na utilização de drones</h2>
            <img src="/fotos/vantagens.webp" alt="Drone aplicando produto em um pomar" className="foto aspect-[16/9]" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vantagens.map((v) => (
              <div key={v.titulo} className="rounded-lg border border-texto/10 bg-white p-5">
                <h3 className="subtitulo">{v.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-texto/75">{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustentabilidade */}
      <section className="container-site secao grid items-center gap-10 md:grid-cols-2">
        <img src="/fotos/sustentabilidade.webp" alt="Drone sobrevoando uma lavoura verde" className="foto aspect-[4/3]" />
        <div>
          <h2 className="titulo">Os drones realmente são mais sustentáveis?</h2>
          <p className="paragrafo">A utilização de drones pode contribuir para uma agricultura mais eficiente no uso de insumos e recursos naturais.</p>
          <p className="paragrafo">
            Por permitirem aplicações localizadas, esses equipamentos podem diminuir o desperdício de produtos e evitar a passagem de máquinas pesadas sobre a plantação. Além disso, a possibilidade de trabalhar em áreas de difícil acesso amplia as alternativas disponíveis para o produtor rural.
          </p>
          <p className="paragrafo">
            Entretanto, a sustentabilidade não depende apenas do equipamento. A escolha correta dos produtos, a regulagem dos pulverizadores, as condições meteorológicas e o respeito às áreas de preservação são fundamentais para evitar a contaminação ambiental e a deriva de produtos químicos.
          </p>
        </div>
      </section>

      {/* Cursos */}
      <section className="bg-claro">
        <div className="container-site secao grid items-start gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="titulo">Cursos e capacitação profissional</h2>
            <h3 className="subtitulo mt-6">Como aprender a operar drones agrícolas?</h3>
            <p className="paragrafo">
              Para trabalhar profissionalmente com aplicação aeroagrícola remota no Brasil, existe o CAAR (Curso para Aplicação Aeroagrícola Remota), previsto na regulamentação do Ministério da Agricultura e Pecuária.
            </p>
            <p className="paragrafo">O curso é voltado à formação de aplicadores aeroagrícolas remotos e aborda conhecimentos importantes para a execução segura das atividades.</p>

            <h3 className="subtitulo mt-6">Entre os assuntos estudados estão:</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-texto/80">
              {assuntosCurso.map((a) => <li key={a}>{a}</li>)}
            </ul>

            <h3 className="subtitulo mt-6">Onde encontrar cursos?</h3>
            <p className="paragrafo">O ideal é procurar instituições de ensino registradas no MAPA e verificar se estão habilitadas a oferecer o CAAR.</p>
          </div>
          <img src="/fotos/cursos.webp" alt="Operador com controle remoto ao lado de drones agrícolas" className="foto aspect-[4/5]" />
        </div>
      </section>
    </>
  );
}
