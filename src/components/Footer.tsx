// Rodapé simples: sobre o projeto, páginas e órgãos oficiais.
import { Link } from 'react-router-dom';
import { paginas } from '../data/menu';

const orgaos = [
  { nome: 'MAPA', link: 'https://www.gov.br/agricultura' },
  { nome: 'ANAC', link: 'https://www.gov.br/anac' },
  { nome: 'DECEA', link: 'https://www.decea.mil.br' },
  { nome: 'ANATEL', link: 'https://www.gov.br/anatel' },
];

export default function Footer() {
  return (
    <footer className="bg-verde text-white">
      <div className="container-site grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">Inovação no Agronegócio</p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Inovação no Agronegócio: Aplicação de Defensivos Agrícolas via Drones de Precisão. Projeto acadêmico da FEMA — Fundação Educacional do Município de Assis.
          </p>
        </div>

        <div>
          <p className="font-bold">Páginas</p>
          <ul className="mt-3 space-y-2 text-sm">
            {paginas.map((p) => (
              <li key={p.link}>
                <Link to={p.link} className="text-white/75 hover:text-white">{p.nome}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold">Órgãos oficiais</p>
          <ul className="mt-3 space-y-2 text-sm">
            {orgaos.map((o) => (
              <li key={o.nome}>
                <a href={o.link} target="_blank" rel="noreferrer" className="text-white/75 hover:text-white">{o.nome}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="container-site pb-8 text-sm text-white/60">© {new Date().getFullYear()} — Projeto de extensão FEMA. Conteúdo educativo.</p>
    </footer>
  );
}
