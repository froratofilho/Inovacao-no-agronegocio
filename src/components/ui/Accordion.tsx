import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { ease } from '../../styles/tokens';

type Item = { title: string; content: React.ReactNode; meta?: React.ReactNode };

/** Accordion acessível (botão com aria-expanded + região associada). */
export function Accordion({ items, tone = 'light' }: { items: Item[]; tone?: 'light' | 'dark' }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  const border = tone === 'dark' ? 'border-white/15' : 'border-graphite/10';
  return (
    <div className={`border-t ${border}`}>
      {items.map((it, i) => {
        const isOpen = open === i;
        const btn = `${base}-b${i}`;
        const panel = `${base}-p${i}`;
        return (
          <div key={i} className={`border-b ${border}`}>
            <h3 className="font-sans">
              <button
                id={btn}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg font-medium sm:text-xl">{it.title}</span>
                <span className="flex shrink-0 items-center gap-3">
                  {it.meta}
                  <Plus aria-hidden className={`mt-1 h-5 w-5 text-tech transition-transform duration-300 ease-soft ${isOpen ? 'rotate-45' : ''}`} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panel}
                  role="region"
                  aria-labelledby={btn}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="overflow-hidden"
                >
                  <div className={`max-w-3xl pb-7 leading-relaxed ${tone === 'dark' ? 'text-white/75' : 'text-graphite/75'}`}>{it.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
