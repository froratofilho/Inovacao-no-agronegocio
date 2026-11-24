// Estrutura comum a todas as páginas: cabeçalho, conteúdo da página e rodapé.
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();

  // ao trocar de página, volta para o topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        {/* <Outlet /> é onde aparece a página atual */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
