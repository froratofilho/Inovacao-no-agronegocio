import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { Accordion } from '../components/ui/Accordion';
import { Notice } from '../components/ui/Notice';
import { agencies, regSteps, regTopics } from '../data/regulation';
import { useSeo } from '../hooks/useSeo';

export default function Regulamentacao() {
  useSeo('Regulamentação', 'Guia informativo sobre os órgãos e temas da regulamentação de drones agrícolas no Brasil: MAPA, ANAC, DECEA e ANATEL.');
  return (
    <>
      <PageHero image="/images/page-regulamentacao.webp" imageAlt="Operação de drone com controle remoto" kicker="Regulamentação" title="Voar dentro das regras." intro="Um guia de orientação sobre quem regula as operações com drones agrícolas no Brasil e quais temas merecem atenção antes de cada voo.">
        <div className="mt-10 max-w-2xl">
          <Notice tone="dark">
            Conteúdo informativo, sem valor de parecer jurídico. A legislação pode mudar: confirme sempre o texto vigente nos portais oficiais antes de qualquer operação.
          </Notice>
        </div>
      </PageHero>

      <Section tone="light" label="Órgãos reguladores">
        <div className="shell section-y">
          <Reveal><h2 className="max-w-3xl text-huge font-semibold text-deep">Quatro órgãos, quatro responsabilidades.</h2></Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {agencies.map((a, i) => (
              <Reveal key={a.id} delay={(i % 2) * 0.08}>
                <article className="flex h-full flex-col rounded-[28px] border border-graphite/10 p-8 transition-colors hover:border-tech/40">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-4xl font-semibold text-deep">{a.sigla}</h3>
                    <span className="text-right text-sm text-graphite/55">{a.name}</span>
                  </div>
                  <p className="mt-6 leading-relaxed text-graphite/75">{a.role}</p>
                  <p className="mt-4 text-sm text-graphite/55">Referência: {a.reference}</p>
                  <a href={a.href} target="_blank" rel="noreferrer" className="group mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold text-tech hover:text-forest">
                    Portal oficial {a.sigla}
                    <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper" label="Caminho de regularização">
        <div className="shell section-y">
          <Reveal><h2 className="max-w-3xl text-huge font-semibold text-deep">Um caminho em cinco etapas.</h2></Reveal>
          <ol className="relative mt-16 grid gap-8 lg:grid-cols-5 lg:gap-5">
            <span aria-hidden className="absolute left-[1.15rem] top-0 h-full w-px bg-graphite/10 lg:left-0 lg:top-[1.15rem] lg:h-px lg:w-full" />
            {regSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <li className="relative pl-14 lg:pl-0 lg:pt-14">
                  <span className="absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full bg-deep font-display text-sm text-white">{i + 1}</span>
                  <h3 className="text-lg font-semibold text-deep">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite/70">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="light" label="Temas regulatórios">
        <div className="shell section-y grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <h2 className="text-big font-semibold text-deep">Temas que você precisa conhecer.</h2>
            <p className="mt-5 max-w-sm leading-relaxed text-graphite/70">Cada tema indica os órgãos envolvidos. Valores e prazos específicos não são reproduzidos aqui para evitar informação desatualizada.</p>
          </Reveal>
          <Accordion
            items={regTopics.map((t) => ({
              title: t.title,
              meta: <span className="hidden gap-1 sm:flex">{t.agencies.map((a) => <span key={a} className="rounded-full bg-mint/60 px-2 py-0.5 text-[0.7rem] font-semibold text-deep">{a}</span>)}</span>,
              content: <>{t.body.map((p) => <p key={p} className="mb-3 last:mb-0">{p}</p>)}</>,
            }))}
          />
        </div>
      </Section>
    </>
  );
}
