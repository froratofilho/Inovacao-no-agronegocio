import { useEffect } from 'react';
import { site } from '../data/site';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

/** Metadados por página (título, descrição e Open Graph). */
export function useSeo(title: string, description: string) {
  useEffect(() => {
    const full = title ? `${title} — ${site.name}` : `${site.name} — Inovação no Agronegócio`;
    document.title = full;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', full);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', window.location.href);
  }, [title, description]);
}
