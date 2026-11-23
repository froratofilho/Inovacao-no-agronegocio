import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Minus, ShieldCheck, X } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { Media } from '../components/ui/Media';
import { Notice } from '../components/ui/Notice';
import { Button } from '../components/ui/Button';
import { advantages, droneHotspots, limitations, operationSteps, safetyPractices, techTopics } from '../data/content';
import { useSeo } from '../hooks/useSeo';
import { ease } from '../styles/tokens';

function Inspector() {
  const [active, setActive] = useState<string | null>(null);
  const spot = droneHotspots.find((h) => h.id === active);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
      <Media src="/images/hero-drone.webp" alt="Drone agrícola de pulverização" variant="drone" className="aspect-square rounded-[32px] border border-white/10 sm:aspect-[4/3]" />
      <div className="flex flex-col">
        <ul className="grid grid-cols-2 gap-2" aria-label="Componentes do drone">
          {droneHotspots.map((h) => (
            <li key={h.id}>
              <button
                type="button"
                aria-pressed={active === h.id}
                onClick={() => setActive(active === h.id ? null : h.id)}
                className={`flex min-h-[48px] w-full items-center gap-2 rounded-2xl border px-4 text-left text-sm transition-colors ${active === h.id ? 'border-vivid bg-vivid/10 text-white' : 'border-white/10 text-white/70 hover:border-white/30'}`}
              >
                <span className={`h-2 w-2 rounded-full ${active === h.id ? 'bg-vivid' : 'bg-white/30'}`} />
                {h.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-6 min-h-[180px]" aria-live="polite">
          <AnimatePresence mode="wait">
            {spot ? (
              <motion.div key={spot.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease }} className="bg-white/5 rounded-3xl border border-vivid/30 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{spot.label}</h3>
                  <button type="button" onClick={() => setActive(null)} aria-label="Fechar detalhe" className="grid h-9 w-9 place-items-center rounded-full text-white/60 hover:bg-white/10 hover:text-white">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-3 leading-relaxed text-white/75">{spot.text}</p>
              </motion.div>
            ) : (
              <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-3xl border border-dashed border-white/15 p-6 text-white/55">
                Escolha um componente para ver o que ele faz.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <p className="mt-auto pt-6 text-xs leading-relaxed text-white/45">
          Descrição geral, válida para drones agrícolas de pulverização de grande porte.
        </p>
      </div>
    </div>
  );
}

export default function Tecnologia() {
  useSeo('A tecnologia', 'Como funcionam os drones de pulverização agrícola: rotas, navegação, sensores, sistemas de aplicação, limitações e boas práticas.');
  return (
    <>
      <PageHero image="/images/page-tecnologia.webp" imageAlt="Drone agrícola sobre lavoura" kicker="A tecnologia" title="Como um drone aplica com precisão." intro="Do mapa da lavoura às gotas que chegam ao alvo: entenda o funcionamento, os componentes e os limites da pulverização com drones." />

      <Section tone="light" label="Fundamentos">
        <div className="shell section-y">
          <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
            {techTopics.map((t, i) => (
              <Reveal key={t.title} delay={(i % 2) * 0.08}>
                <article className="border-t border-graphite/10 pt-8">
                  <h2 className="text-big font-semibold text-deep">{t.title}</h2>
                  <p className="mt-5 max-w-xl leading-relaxed text-graphite/70">{t.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-24 grid gap-5 md:grid-cols-2">
              <Media src="/images/tec-rotas.webp" alt="Planejamento de rota sobre mapa do talhão" variant="screen" className="aspect-[4/3] rounded-[28px]" />
              <Media src="/images/tec-acesso.webp" alt="Drone operando em área de relevo acidentado" variant="drone" className="aspect-[4/3] rounded-[28px]" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark" label="Conheça a tecnologia por dentro">
        <div className="shell section-y">
          <Reveal>
            <h2 className="max-w-3xl text-huge font-semibold">Conheça a tecnologia por dentro.</h2>
            <p className="lead mt-6 max-w-xl text-white/70">Escolha um componente para ver a função de cada parte do drone.</p>
          </Reveal>
          <div className="mt-14"><Inspector /></div>
        </div>
      </Section>

      <Section tone="paper" label="Passo a passo">
        <div className="shell section-y">
          <Reveal><h2 className="text-huge font-semibold text-deep">Passo a passo de uma aplicação.</h2></Reveal>
          <ol className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {operationSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <li className="h-full rounded-[26px] border border-graphite/10 bg-white p-7">
                  <span className="font-display text-5xl font-light text-tech">{i + 1}</span>
                  <h3 className="mt-6 text-xl font-semibold text-deep">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-graphite/70">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="light" label="Vantagens e limitações">
        <div className="shell section-y">
          <Reveal><h2 className="max-w-4xl text-huge font-semibold text-deep">Possibilidades reais, limites claros.</h2></Reveal>
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[28px] bg-mint/50 p-8 sm:p-10">
                <h3 className="text-2xl font-semibold text-deep">Vantagens possíveis</h3>
                <ul className="mt-8 space-y-4">
                  {advantages.map((a) => (
                    <li key={a} className="flex gap-3 text-graphite/80"><Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-tech" />{a}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-[28px] border border-graphite/10 p-8 sm:p-10">
                <h3 className="text-2xl font-semibold text-deep">Limitações</h3>
                <ul className="mt-8 space-y-4">
                  {limitations.map((a) => (
                    <li key={a} className="flex gap-3 text-graphite/80"><Minus aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-graphite/40" />{a}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-5 rounded-[28px] bg-deep p-8 text-white sm:p-10">
              <div className="flex items-center gap-3">
                <ShieldCheck aria-hidden className="h-6 w-6 text-vivid" />
                <h3 className="text-2xl font-semibold">Segurança e boas práticas</h3>
              </div>
              <ul className="mt-8 grid gap-4 md:grid-cols-2">
                {safetyPractices.map((s) => (
                  <li key={s} className="flex gap-3 text-white/80"><Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-vivid" />{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <Notice>Os benefícios dependem da cultura, do equipamento, das condições do local e da qualificação da equipe. Este conteúdo não substitui orientação de um engenheiro agrônomo.</Notice>
            <Button to="/regulamentacao" variant="outline-dark">Ver regulamentação</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
