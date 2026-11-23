import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }
    // páginas são carregadas sob demanda: espera a âncora existir antes de rolar
    let tries = 0;
    const id = window.setInterval(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el || ++tries > 40) {
        window.clearInterval(id);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
    return () => window.clearInterval(id);
  }, [pathname, hash]);

  return (
    <>
      <Header />
      <main id="conteudo" key={pathname}>
        <Suspense fallback={<div className="min-h-[100svh] bg-deep" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
