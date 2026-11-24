// Página Comparativo: aplicação aérea x terrestre e os modelos da linha DJI Agras.
import Banner from '../components/Banner';

type Modelo = {
  nome: string;
  foto: string;
  resumo: string;
  caracteristicas: string[];
  paraQueServe: string[];
  diferenca: string;
};

const modelos: Modelo[] = [
  {
    nome: 'DJI Agras T25P',
    foto: '/fotos/modelos/t25p.webp',
    resumo: 'Esse modelo tem uma proposta diferente: ser menor, mais fácil de transportar e permitir que uma pessoa consiga realizar uma operação.',
    caracteristicas: ['Tanque de pulverização: 20 litros.', 'Capacidade de distribuição de sólidos: 25 kg.', 'Vazão de pulverização: até 24 L/min com quatro pulverizadores.', 'Estrutura dobrável.', 'Sistemas de radar e visão para auxiliar na operação.'],
    paraQueServe: ['Pequenas e médias propriedades.', 'Pomares e plantações com espaços mais limitados.', 'Áreas com terrenos irregulares.', 'Operações em que a facilidade de transporte é importante.'],
    diferenca: 'Capacidade muito menor, mas ganha em portabilidade e praticidade. Opção interessante para quem não precisa de um equipamento grande.',
  },
  {
    nome: 'DJI Agras T25',
    foto: '/fotos/modelos/t25.webp',
    resumo: 'É o modelo compacto da geração T50.',
    caracteristicas: ['Tanque de pulverização: 20 litros.', 'Capacidade de distribuição de sólidos: até 25 kg.', 'Vazão de até 24 L/min com quatro pulverizadores.', 'Estrutura dobrável.', 'Pode ser transportado e operado por uma pessoa.'],
    paraQueServe: ['Pequenas propriedades.', 'Pomares mais amplos.', 'Pulverização localizada.', 'Áreas em que drones maiores seriam pouco práticos.'],
    diferenca: 'É uma alternativa compacta para quem precisa de mobilidade e não necessita de um tanque muito grande, mas é uma versão melhorada do T25P.',
  },
  {
    nome: 'DJI Agras T50',
    foto: '/fotos/modelos/t50.webp',
    resumo: 'É um dos modelos mais conhecidos, por ser considerado o intermediário em relação aos seus outros irmãos.',
    caracteristicas: ['Tanque de pulverização: 40 litros.', 'Capacidade de distribuição de sólidos: até 50 kg.', 'Vazão de pulverização: até 24 L/min com quatro pulverizadores.', 'Sistema de radar frontal e traseiro.', 'Câmera FPV para auxiliar na visualização durante o voo.'],
    paraQueServe: ['Pulverização de lavouras.', 'Aplicação de defensivos agrícolas.', 'Distribuição de fertilizantes.', 'Propriedades de médio e grande porte.'],
    diferenca: 'É uma máquina bastante versátil, especialmente para quem busca um equipamento profissional sem chegar ao tamanho do T70P ou T100.',
  },
  {
    nome: 'DJI Agras T55',
    foto: '/fotos/modelos/t55.webp',
    resumo: 'O T55 é um modelo de maior porte, com uma proposta de equilíbrio entre capacidade de pulverização e produtividade.',
    caracteristicas: ['Tanque de pulverização: 50 litros.', 'Capacidade de carga: até 55 kg.', 'Sistema de distribuição de sólidos.', 'Pulverização com vazão elevada.', 'Estrutura voltada para operações agrícolas profissionais.'],
    paraQueServe: ['Propriedades de médio e grande porte.', 'Pulverização de lavouras.', 'Aplicação de defensivos.', 'Distribuição de produtos granulados.'],
    diferenca: 'Ele fica entre os modelos compactos e os modelos de maior capacidade, como o T70P e o T100. Como se fosse um compacto 2.0 (melhorado).',
  },
  {
    nome: 'DJI Agras T70P',
    foto: '/fotos/modelos/t70p.webp',
    resumo: 'O T70P é um modelo intermediário de grande porte. Ele oferece uma capacidade elevada, mas é um pouco menor que o T100.',
    caracteristicas: ['Tanque de pulverização: 70 litros.', 'Capacidade de distribuição de sólidos: até 100 litros.', 'Carga máxima de pulverização: 70 kg.', 'Vazão de pulverização: até 40 L/min.', 'Capacidade de transporte suspenso: até 65 kg.', 'Sistema de segurança com sensores e radares.'],
    paraQueServe: ['Pulverização de lavouras de médio e grande porte.', 'Aplicação de fungicidas, herbicidas e inseticidas.', 'Distribuição de fertilizantes e sementes.', 'Operações agrícolas que exigem produtividade elevada.'],
    diferenca: 'Comparado ao T100: o T100 possui tanque de 100 litros, contra 70 litros do T70P. O T100 também tem maior capacidade de transporte e distribuição.',
  },
  {
    nome: 'DJI Agras T100',
    foto: '/fotos/modelos/t100.webp',
    resumo: 'O T100 é um dos modelos mais robustos da DJI. Foi desenvolvido para operações agrícolas de grande escala, nas quais produtividade e capacidade de carga são fundamentais.',
    caracteristicas: ['Tanque de pulverização: 100 litros.', 'Tanque de distribuição de sólidos: 150 litros.', 'Capacidade máxima de carga: 100 kg.', 'Vazão de pulverização: até 40 L/min.', 'Velocidade máxima de operação: 20 m/s.', 'Capacidade de transporte suspenso: até 100 kg.'],
    paraQueServe: ['Grandes plantações de soja, milho e outras culturas.', 'Aplicação de defensivos agrícolas em grandes áreas.', 'Distribuição de fertilizantes granulados.', 'Transporte de cargas em determinadas operações rurais.'],
    diferenca: 'É um drone pensado para quem precisa trabalhar em escala elevada e cobrir grandes extensões de terra.',
  },
];

export default function Comparativo() {
  return (
    <>
      <Banner titulo="Comparativo" texto="Aplicação aérea e terrestre, e os principais modelos de drones agrícolas DJI Agras." foto="/fotos/modelos/t50.webp" />

      {/* Aéreo x terrestre: apenas as duas imagens lado a lado */}
      <section className="container-site secao">
        <h2 className="titulo">Aplicação aérea x terrestre</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <figure>
            <img src="/fotos/comparativo/aereo.webp" alt="Drone pulverizando uma plantação" className="foto aspect-[4/3]" />
            <figcaption className="mt-2 font-semibold">Aplicação aérea (drone)</figcaption>
            <p className="text-xs text-texto/50">Foto: Vis M · CC BY-SA 4.0 · Wikimedia Commons</p>
          </figure>
          <figure>
            <img src="/fotos/comparativo/terrestre.webp" alt="Pulverizador terrestre na lavoura" className="foto aspect-[4/3]" />
            <figcaption className="mt-2 font-semibold">Aplicação terrestre (pulverizador)</figcaption>
            <p className="text-xs text-texto/50">Foto: werktuigendagen · CC BY-SA 2.0 · Wikimedia Commons</p>
          </figure>
        </div>
      </section>

      {/* Modelos */}
      <section className="bg-claro">
        <div className="container-site secao">
          <h2 className="titulo">Modelos: T25P, T25, T50, T55, T70P e T100</h2>
          <div className="mt-8 space-y-8">
            {modelos.map((m) => (
              <article key={m.nome} className="grid gap-6 rounded-lg border border-texto/10 bg-white p-5 md:grid-cols-[1fr_1.4fr]">
                <img src={m.foto} alt={m.nome} className="foto aspect-[4/3]" />
                <div>
                  <h3 className="text-xl font-bold text-verde">{m.nome}</h3>
                  <p className="mt-2 text-texto/80">{m.resumo}</p>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="font-bold">Características</p>
                      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-texto/80">
                        {m.caracteristicas.map((c) => <li key={c}>{c}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold">Para que serve?</p>
                      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-texto/80">
                        {m.paraQueServe.map((c) => <li key={c}>{c}</li>)}
                      </ul>
                    </div>
                  </div>

                  <p className="mt-4 font-bold">Diferença para os demais</p>
                  <p className="mt-1 text-sm text-texto/80">{m.diferenca}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
