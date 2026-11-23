import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '../ui/Button';
import { mainNav, resourcesNav } from '../../data/site';
import { useHeaderTheme } from '../../hooks/useHeaderTheme';
import { ease } from '../../styles/tokens';

export function Header() {
  const { theme, scrolled } = useHeaderTheme();
  const [mobile, setMobile] = useState(false);
  const [res, setRes] = useState(false);
  const resRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const dark = theme === 'dark' && !mobile;

  useEffect(() => {
    setMobile(false);
    setRes(false);
  }, [pathname]);

  useEffect(() => {
    if (!res) return;
    const close = (e: MouseEvent) => !resRef.current?.contains(e.target as Node) && setRes(false);
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setRes(false);
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', esc);
    };
  }, [res]);

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
  }, [mobile]);

  const resourcesActive = resourcesNav.some((r) => pathname.startsWith(r.to));
  const link = (active: boolean) =>
    `relative rounded-full px-3.5 py-2 text-[0.9rem] font-medium transition-colors ${
      dark ? (active ? 'text-white' : 'text-white/65 hover:text-white') : active ? 'text-deep' : 'text-graphite/60 hover:text-deep'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-vivid focus:px-4 focus:py-2 focus:text-deep">
        Pular para o conteúdo
      </a>
      <div
        className={`mx-auto flex h-16 max-w-site items-center justify-between rounded-full pl-5 pr-2 transition-all duration-500 ease-soft ${
          scrolled || mobile
            ? dark
              ? 'bg-deep border border-white/10'
              : 'bg-white border border-graphite/10'
            : 'border border-transparent'
        }`}
      >
        <Logo tone={dark ? 'dark' : 'light'} />

        <nav aria-label="Principal" className="hidden items-center lg:flex">
          {mainNav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => link(isActive)}>
              {({ isActive }) => (
                <>
                  {n.label}
                  {isActive && <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-vivid" />}
                </>
              )}
            </NavLink>
          ))}
          <div ref={resRef} className="relative">
            <button type="button" aria-expanded={res} aria-haspopup="true" aria-controls="menu-recursos" onClick={() => setRes((v) => !v)} className={`${link(resourcesActive)} inline-flex items-center gap-1`}>
              Recursos
              <ChevronDown aria-hidden className={`h-4 w-4 transition-transform ${res ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {res && (
                <motion.div
                  id="menu-recursos"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease }}
                  className="absolute right-0 top-12 w-72 rounded-2xl border border-graphite/10 bg-white p-2 shadow-[0_30px_60px_-30px_rgba(6,47,35,.45)]"
                >
                  {resourcesNav.map((r) => (
                    <NavLink key={r.to} to={r.to} className="block rounded-xl px-4 py-3 hover:bg-paper">
                      <span className="block font-display text-[0.95rem] font-medium text-deep">{r.label}</span>
                      <span className="block text-sm text-graphite/60">{r.description}</span>
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button to="/tecnologia" variant={dark ? 'outline-light' : 'solid'} className="min-h-[44px] px-5 text-sm">
              Explorar tecnologia
            </Button>
          </div>
          <button
            type="button"
            className={`grid h-12 w-12 place-items-center rounded-full lg:hidden ${dark ? 'text-white' : 'text-deep'}`}
            aria-label={mobile ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobile}
            aria-controls="menu-mobile"
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.nav
            id="menu-mobile"
            aria-label="Menu móvel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease }}
            className="mx-auto mt-2 max-h-[calc(100svh-6rem)] max-w-site overflow-y-auto rounded-3xl border border-graphite/10 bg-white p-3 shadow-[0_30px_60px_-30px_rgba(6,47,35,.45)] lg:hidden"
          >
            {[...mainNav, ...resourcesNav].map((n) => (
              <div key={n.to}>
                <NavLink
                  to={n.to}
                  end={n.to === '/'}
                  className={({ isActive }) => `flex min-h-[52px] items-center justify-between rounded-2xl px-4 font-display text-lg ${isActive ? 'bg-mint/60 text-deep' : 'text-graphite hover:bg-paper'}`}
                >
                  {n.label}
                </NavLink>
              </div>
            ))}
            <div className="p-2 pt-4">
              <Button to="/tecnologia" className="w-full justify-center">Explorar tecnologia</Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
