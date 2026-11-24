// Página Perguntas Frequentes: cada pergunta abre e fecha usando a tag HTML <details>.
import Banner from '../components/Banner';

const perguntas = [
  {
    pergunta: 'O drone agrícola consegue substituir um trator pulverizador?',
    resposta: 'Não necessariamente. Os drones são uma alternativa para determinadas operações, especialmente em áreas de difícil acesso, terrenos irregulares e aplicações localizadas. Tratores e pulverizadores terrestres continuam sendo importantes em diversas situações.',
  },
  {
    pergunta: 'Os drones utilizam os mesmos defensivos agrícolas que os tratores?',
    resposta: 'Podem utilizar produtos destinados à aplicação aérea, desde que sejam registrados e tenham indicação de uso compatível com a modalidade de aplicação. É necessário respeitar as recomendações do fabricante, a bula e as exigências legais.',
  },
  {
    pergunta: 'É possível pulverizar uma plantação inteira com um drone?',
    resposta: 'Sim. Dependendo do tamanho da propriedade, da capacidade do equipamento e do planejamento operacional, é possível realizar aplicações em grandes áreas. Entretanto, pode ser necessário realizar várias recargas de produto e trocas de bateria.',
  },
  {
    pergunta: 'Os drones conseguem trabalhar em dias de vento?',
    resposta: 'Existem limites operacionais relacionados ao vento, à temperatura e à umidade. Condições meteorológicas inadequadas podem provocar deriva, prejudicar a distribuição do produto e comprometer a segurança da aplicação.',
  },
  {
    pergunta: 'Qualquer pessoa pode pilotar um drone agrícola?',
    resposta: 'Não basta saber controlar o equipamento. Para aplicações aeroagrícolas profissionais, existem exigências específicas de capacitação e registro, incluindo o CAAR, conforme as regras do MAPA.',
  },
  {
    pergunta: 'Os drones conseguem pulverizar plantações em terrenos inclinados?',
    resposta: 'Sim. Uma das vantagens desses equipamentos é a possibilidade de trabalhar em terrenos onde máquinas terrestres encontram dificuldades. Entretanto, é necessário avaliar obstáculos, condições do terreno, vento e segurança da operação.',
  },
  {
    pergunta: 'O uso de drones diminui a quantidade de defensivos utilizados?',
    resposta: 'Pode diminuir o desperdício quando a aplicação é bem planejada e direcionada. Porém, não significa que todos os produtos serão utilizados em menor quantidade. A dose recomendada deve sempre ser respeitada.',
  },
  {
    pergunta: 'Quanto custa um drone agrícola?',
    resposta: 'O preço varia conforme o modelo, a capacidade, os acessórios e os equipamentos complementares. Também devem ser considerados os custos de baterias, carregadores, geradores, manutenção, treinamento e transporte.',
  },
  {
    pergunta: 'É necessário ter autorização para utilizar um drone agrícola?',
    resposta: 'Sim. A operação precisa atender às exigências dos órgãos responsáveis, incluindo MAPA, ANAC, DECEA e ANATEL, conforme as características do equipamento e da atividade.',
  },
  {
    pergunta: 'Qual é o melhor drone agrícola?',
    resposta: 'Não existe um único modelo ideal para todas as propriedades. A escolha depende do tamanho da área, da cultura, da capacidade necessária, do tipo de aplicação e do orçamento disponível.',
  },
];

export default function Perguntas() {
  return (
    <>
      <Banner
        titulo="Perguntas Frequentes"
        texto="Respostas às dúvidas que um produtor rural provavelmente teria antes de utilizar essa tecnologia."
        foto="/fotos/faq.webp"
      />

      <section className="container-site secao max-w-3xl space-y-3">
        {perguntas.map((p, i) => (
          <details key={p.pergunta} className="rounded-lg border border-texto/10 p-5 open:bg-claro">
            <summary className="cursor-pointer font-bold text-verde">
              {i + 1}. {p.pergunta}
            </summary>
            <p className="mt-3 leading-relaxed text-texto/80">{p.resposta}</p>
          </details>
        ))}
      </section>
    </>
  );
}
