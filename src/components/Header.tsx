// Cabeçalho com o nome do projeto e o menu. Ele fica no topo e NÃO acompanha a rolagem.
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { paginas } from '../data/menu';

export default function Header() {
  // controla se o menu do celular está aberto
  const [menuAberto, setMenuAberto] = useState(false);

  const estiloLink = ({ isActive }: { isActive: boolean }) =>
    `whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-semibold ${isActive ? 'bg-claro text-destaque' : 'text-texto/75 hover:text-destaque'}`;

  return (
    <header className="border-b border-texto/10 bg-white">
      <div className="container-site flex items-center justify-between py-4">
        <NavLink to="/" className="whitespace-nowrap text-lg font-bold text-verde">
          Inovação no Agronegócio
        </NavLink>

        {/* menu do computador */}
        <nav className="hidden justify-end xl:flex">
          {paginas.map((p) => (
            <NavLink key={p.link} to={p.link} end className={estiloLink}>
              {p.nome}
            </NavLink>
          ))}
        </nav>

        {/* botão do menu no celular */}
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          className="rounded-md border border-texto/20 px-3 py-2 text-sm font-semibold xl:hidden"
        >
          {menuAberto ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {/* menu do celular */}
      {menuAberto && (
        <nav className="container-site flex flex-col pb-4 xl:hidden">
          {paginas.map((p) => (
            <NavLink key={p.link} to={p.link} end className={estiloLink} onClick={() => setMenuAberto(false)}>
              {p.nome}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
