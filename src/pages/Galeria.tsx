import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { Media, type ArtVariant } from '../components/ui/Media';
import { Notice } from '../components/ui/Notice';
import { Dialog } from '../components/ui/Dialog';
import { gallery, galleryCategories, type GalleryCategory, type GalleryItem } from '../data/gallery';
import { useSeo } from '../hooks/useSeo';
import { creditFor } from '../data/credits';
import { ease } from '../styles/tokens';

const ratio = { portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]', square: 'aspect-square' };
const variantFor = (c: GalleryItem['category']): ArtVariant =>
  ({ 'Drones agrícolas': 'drone', 'Campo e operações': 'field', 'Bastidores do projeto': 'team', 'Testes e demonstrações': 'drone', 'Planejamento de voo': 'screen', 'Equipe e extensão': 'team' } as const)[c];

export default function Galeria() {
  useSeo('Galeria e experiências', 'Registros visuais da iniciativa de extensão: drones agrícolas, campo, planejamento de voo e bastidores.');
  const [filter, setFilter] = useState<GalleryCategory>('Todos');
  const [index, setIndex] = useState<number | null>(null);
  const items = useMemo(() => (filter === 'Todos' ? gallery : gallery.filter((g) => g.category === filter)), [filter]);
  const current = index !== null ? items[index] : null;

  const go = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);
  useEffect(() => {
    if (index === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [index, go]);

  return (
    <>
      <PageHero image="/images/page-galeria.webp" imageAlt="Lavoura vista do alto" kicker="Galeria e experiências" title="O projeto em imagens." intro="Um acervo para documentar ações, testes, visitas e materiais da iniciativa de extensão." />
      <Section tone="paper" label="Galeria">
        <div className="shell section-y pt-16">
          <Notice>As fotos sem marcação são registros reais do grupo. As marcadas como “Imagem de referência” vêm do Wikimedia Commons, com licença livre, e ilustram a tecnologia.</Notice>
          <div role="group" aria-label="Filtrar por categoria" className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
            {galleryCategories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
                className={`min-h-[44px] shrink-0 rounded-full border px-4 text-sm font-medium transition-colors ${filter === c ? 'border-deep bg-deep text-white' : 'border-graphite/15 text-graphite/70 hover:border-graphite/40'}`}
              >
                {c}
              </button>
            ))}
          </div>
          <motion.ul layout className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {items.map((g, i) => (
                <motion.li key={g.id} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.45, ease }} className="mb-5 break-inside-avoid">
                  <button type="button" onClick={() => setIndex(i)} className="group block w-full overflow-hidden rounded-[24px] text-left" aria-label={`Ampliar: ${g.alt}`}>
                    <div className="relative">
                      <Media src={g.src} alt={g.alt} variant={variantFor(g.category)} className={`${ratio[g.ratio]} transition-transform duration-700 ease-soft group-hover:scale-[1.03]`} label={g.demo ? 'Aguardando foto' : false} />
                      {g.demo && creditFor(g.src) && <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.68rem] font-medium text-deep">Imagem de referência</span>}
                      {g.type === 'video' && <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-deep"><Play aria-hidden className="h-4 w-4" /></span>}
                    </div>
                    <div className="flex items-baseline justify-between gap-3 px-1 pt-3">
                      <span className="text-sm font-medium text-deep">{g.caption}</span>
                      <span className="shrink-0 text-xs text-graphite/50">{g.category}</span>
                    </div>
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </Section>

      <Dialog open={!!current} onClose={() => setIndex(null)} label={current?.alt ?? 'Imagem'}>
        {current && (
          <figure>
            <Media src={current.src} alt={current.alt} variant={variantFor(current.category)} className="aspect-[16/10] w-full rounded-[24px]" label={current.demo ? 'Aguardando foto' : false} />
            <figcaption className="mt-4 flex items-center justify-between gap-4 text-white">
              <span><span className="block font-display text-lg">{current.caption}</span><span className="text-sm text-white/60">{current.category} · {index! + 1} de {items.length}</span></span>
              <span className="flex gap-2">
                <button type="button" onClick={() => go(-1)} aria-label="Imagem anterior" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"><ChevronLeft className="h-5 w-5" /></button>
                <button type="button" onClick={() => go(1)} aria-label="Próxima imagem" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"><ChevronRight className="h-5 w-5" /></button>
              </span>
            </figcaption>
          </figure>
        )}
      </Dialog>
    </>
  );
}
