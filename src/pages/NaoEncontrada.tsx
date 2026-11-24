// Página mostrada quando o endereço não existe (erro 404).
import { Link } from 'react-router-dom';

export default function NaoEncontrada() {
  return (
    <section className="container-site secao text-center">
      <h1 className="titulo">Página não encontrada</h1>
      <p className="paragrafo">O endereço acessado não existe.</p>
      <Link to="/" className="botao mt-6">Voltar ao início</Link>
    </section>
  );
}
