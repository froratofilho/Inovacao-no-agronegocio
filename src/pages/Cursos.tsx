import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Clock, MapPin } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { Notice } from '../components/ui/Notice';
import { Button } from '../components/ui/Button';
import { courseCategories, courses, type CourseCategory } from '../data/courses';
import { useSeo } from '../hooks/useSeo';
import { ease } from '../styles/tokens';

export default function Cursos() {
  useSeo('Cursos e conhecimento', 'Orientação para quem busca formação em drones agrícolas: operação, planejamento de voo, tecnologia de aplicação e regulamentação.');
  const [filter, setFilter] = useState<CourseCategory>('Todos');
  const list = useMemo(() => (filter === 'Todos' ? courses : courses.filter((c) => c.category === filter)), [filter]);

  return (
    <>
      <PageHero image="/images/page-cursos.webp" imageAlt="Treinamento com drone" kicker="Cursos e conhecimento" title="Aprender antes de voar." intro="Áreas de formação para quem quer trabalhar com drones agrícolas e orientações para escolher um curso confiável." />
      <Section tone="paper" label="Cursos">
        <div className="shell section-y pt-16">
          <Notice>
            Os cards abaixo são demonstrativos: mostram a estrutura de cada área de formação, mas nenhum curso foi verificado ainda. Antes de se inscrever, confirme a instituição e se o curso atende às exigências do MAPA para aplicação agrícola.
          </Notice>
          <div role="group" aria-label="Filtrar por área" className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
            {courseCategories.map((c) => (
              <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)} className={`min-h-[44px] shrink-0 rounded-full border px-4 text-sm font-medium transition-colors ${filter === c ? 'border-deep bg-deep text-white' : 'border-graphite/15 text-graphite/70 hover:border-graphite/40'}`}>
                {c}
              </button>
            ))}
          </div>
          <motion.ul layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((c) => (
                <motion.li key={c.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease }}>
                  <article className="flex h-full flex-col rounded-[26px] border border-graphite/10 bg-white p-7">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-medium text-tech">{c.category}</span>
                      {c.demo && <span className="rounded-full bg-paper px-2.5 py-1 text-[0.68rem] font-medium text-graphite/60">Demonstrativo</span>}
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-deep">{c.name}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-graphite/70">{c.content}</p>
                    <dl className="mt-6 space-y-2 text-sm text-graphite/65">
                      <div className="flex items-center gap-2"><BookOpen aria-hidden className="h-4 w-4 text-tech" /><dt className="sr-only">Instituição</dt><dd>{c.institution}</dd></div>
                      <div className="flex items-center gap-2"><MapPin aria-hidden className="h-4 w-4 text-tech" /><dt className="sr-only">Modalidade</dt><dd>Modalidade: {c.modality}</dd></div>
                      <div className="flex items-center gap-2"><Clock aria-hidden className="h-4 w-4 text-tech" /><dt className="sr-only">Carga horária</dt><dd>Carga horária: {c.hours}</dd></div>
                    </dl>
                    <div className="mt-auto pt-6">
                      {c.href ? (
                        <Button href={c.href} variant="outline-dark" className="w-full justify-center">Acessar curso</Button>
                      ) : (
                        <p className="rounded-full border border-dashed border-graphite/20 px-4 py-3 text-center text-sm text-graphite/50">Link oficial a incluir</p>
                      )}
                    </div>
                  </article>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </Section>
    </>
  );
}
