// Página Guia Prático de Regulamentação: o que cada órgão (MAPA, ANAC, DECEA, ANATEL) exige.
import Banner from '../components/Banner';

const exigenciasMapa = [
  'Registro do operador no MAPA por meio do SIPEAGRO.',
  'Regularidade da aeronave perante a ANAC.',
  'Presença de aplicador aeroagrícola remoto com certificado CAAR, observadas as exceções previstas na norma.',
  'Responsável técnico, engenheiro agrônomo ou florestal, para operadores que sejam pessoas jurídicas.',
  'Cumprimento das normas de segurança durante as operações.',
];

const classesAnac = ['Classe 1: acima de 150 kg.', 'Classe 2: acima de 25 kg até 150 kg.', 'Classe 3: até 25 kg.'];

export default function Regulamentacao() {
  return (
    <>
      <Banner titulo="Guia Prático de Regulamentação" texto="Quem regulamenta os drones agrícolas no Brasil e o que é exigido." foto="/fotos/regulamentacao.webp" />

      <section className="container-site secao grid items-start gap-10 md:grid-cols-[2fr_1fr]">
        <div>
          {/* MAPA */}
          <h2 className="titulo">MAPA</h2>
          <p className="font-semibold text-destaque">Ministério da Agricultura e Pecuária</p>
          <p className="paragrafo">Responsável pelas regras relacionadas à atividade aeroagrícola, operadores, capacitação e aplicação de produtos.</p>
          <p className="paragrafo">
            A Portaria MAPA nº 298, de 22 de setembro de 2021, estabelece regras específicas para operações com aeronaves remotamente pilotadas destinadas à aplicação de agrotóxicos, fertilizantes, sementes e outros produtos.
          </p>
          <h3 className="subtitulo mt-6">Principais exigências</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-texto/80">
            {exigenciasMapa.map((e) => <li key={e}>{e}</li>)}
          </ul>

          <h3 className="subtitulo mt-6">O que é o CAAR?</h3>
          <p className="paragrafo">
            O Curso para Aplicação Aeroagrícola Remota é uma capacitação voltada aos profissionais que atuam na aplicação de produtos agrícolas por drones. O aplicador deve ter pelo menos 18 anos e ser aprovado em curso homologado pelo MAPA. A norma permite que ele também acumule a função de piloto remoto.
          </p>

          <h3 className="subtitulo mt-6">Distâncias e cuidados ambientais</h3>
          <p className="paragrafo">
            A Portaria MAPA nº 298/2021 estabelece uma distância mínima de 20 metros de determinadas áreas, como povoações, moradias isoladas, agrupamentos de animais e mananciais de captação de água para abastecimento humano, além de áreas de preservação e outras áreas ambientais protegidas.
          </p>
        </div>
        <img src="/fotos/regulamentacao.webp" alt="Drone agrícola em campo com equipe de apoio ao fundo" className="foto aspect-[3/4]" />
      </section>

      {/* ANAC */}
      <section className="bg-claro">
        <div className="container-site secao max-w-4xl">
          <h2 className="titulo">ANAC</h2>
          <p className="font-semibold text-destaque">Agência Nacional de Aviação Civil</p>
          <p className="paragrafo">
            Responsável pela regulamentação da aviação civil e pelos requisitos aplicáveis às aeronaves não tripuladas. A ANAC estabelece requisitos para o cadastro e a operação de aeronaves não tripuladas.
          </p>
          <p className="paragrafo">O regulamento RBAC-E nº 94 apresenta uma classificação baseada no peso máximo de decolagem:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-texto/80">
            {classesAnac.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <p className="paragrafo">
            Existe uma particularidade importante: operações de aplicação agrícola em áreas desabitadas, realizadas em VLOS ou EVLOS e até 400 pés de altura, possuem tratamento específico no regulamento, podendo ser classificadas como Classe 3 independentemente do peso da aeronave.
          </p>
          <p className="paragrafo">
            O cadastro e a documentação exigidos variam conforme a categoria e as condições da operação. Portanto, não se deve considerar que todos os drones agrícolas seguem exatamente o mesmo procedimento.
          </p>
        </div>
      </section>

      {/* DECEA e ANATEL */}
      <section className="container-site secao grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="titulo">DECEA</h2>
          <p className="font-semibold text-destaque">Departamento de Controle do Espaço Aéreo</p>
          <p className="paragrafo">O DECEA é responsável pelo controle e pela autorização de acesso ao espaço aéreo brasileiro.</p>
          <p className="paragrafo">Para solicitar autorização de voo, os operadores utilizam o sistema SARPAS.</p>
          <p className="paragrafo">
            É importante verificar as condições da região onde o drone será utilizado, especialmente quando existem aeroportos, aeródromos ou outras áreas com restrições. A autorização deve ser solicitada e respeitada conforme as condições estabelecidas pelo DECEA.
          </p>
        </div>
        <div>
          <h2 className="titulo">ANATEL</h2>
          <p className="font-semibold text-destaque">Agência Nacional de Telecomunicações</p>
          <p className="paragrafo">Responsável pela homologação dos equipamentos de telecomunicações, incluindo drones e controles remotos.</p>
          <p className="paragrafo">
            Os drones utilizam sistemas de comunicação sem fio para transmitir informações entre a aeronave e o controle remoto. Por isso, os equipamentos de telecomunicações precisam atender às exigências de homologação da ANATEL.
          </p>
          <p className="paragrafo">
            A homologação é importante para garantir que os equipamentos atendam aos requisitos técnicos e de compatibilidade eletromagnética estabelecidos pela agência.
          </p>
        </div>
      </section>
    </>
  );
}
