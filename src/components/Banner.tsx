// Faixa do topo de cada página: foto de fundo escurecida com o título por cima.
type Props = {
  titulo: string;
  texto?: string;
  foto: string;
};

export default function Banner({ titulo, texto, foto }: Props) {
  return (
    <section className="relative">
      <img src={foto} alt="" className="absolute inset-0 h-full w-full object-cover" />
      {/* camada verde escura para o texto ficar legível */}
      <div className="absolute inset-0 bg-verde/75" />
      <div className="container-site relative py-20 text-white sm:py-24">
        <h1 className="max-w-3xl text-3xl font-bold sm:text-5xl">{titulo}</h1>
        {texto && <p className="mt-5 max-w-2xl text-lg text-white/85">{texto}</p>}
      </div>
    </section>
  );
}
