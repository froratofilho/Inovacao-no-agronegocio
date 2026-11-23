import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/** Lê o tema (claro/escuro) da seção que está sob o header, via data-header nas seções. */
export function useHeaderTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const check = () => {
      setScrolled(window.scrollY > 24);
      const probe = 40;
      const sections = document.querySelectorAll<HTMLElement>('[data-header]');
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) {
          setTheme((s.dataset.header as 'dark' | 'light') ?? 'light');
          return;
        }
      }
    };
    check();
    const t = window.setTimeout(check, 80);
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [pathname]);

  return { theme, scrolled };
}
