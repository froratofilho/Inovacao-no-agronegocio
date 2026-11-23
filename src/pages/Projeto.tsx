import { CalendarPlus, Cpu, Database, Code2, Handshake, MapPin, Shapes, User } from 'lucide-react';
import { actions } from '../data/actions';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { Media } from '../components/ui/Media';
import { disciplines, team, timeline } from '../data/team';
import { site } from '../data/site';
import { useSeo } from '../hooks/useSeo';

const discIcons = [Database, Shapes, Cpu, Code2];

export default function Projeto() {
  useSeo('O projeto de extensão', 'Portfólio do projeto de extensão da FEMA sobre drones agrícolas: objetivos, ações desenvolvidas pelo grupo, equipe e trajetória.');
  return (
    <>
      <PageHero image="/images/page-projeto.webp" imageAlt="Paisagem agrícola" kicker="Projeto de extensão universitária — FEMA" title="Inovação no Agronegócio e Aplicação de Defensivos Agrícolas via Drones de Precisão." intro="Uma iniciativa acadêmica para levar informação de qualidade sobre drones agrícolas a estudantes, produtores e comunidade." />

      <Section tone="light" label="Objetivo">
        <div className="shell section-y grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Media src="/images/acoes/base-apoio.webp" alt="Base de apoio em campo durante visita técnica do grupo em Maringá" variant="field" className="aspect-[4/5] rounded-[28px]" />
          </Reveal>
          <div className="lg:col-span-7 lg:pt-10">
            <Reveal>
              <h2 className="text-huge font-semibold text-deep">Nosso objetivo.</h2>
              <p className="lead mt-8 text-graphite/80">
                Ser uma plataforma de informação, apoio técnico e conscientização sobre a pulverização com drones: indicar onde aprender, explicar a regulamentação do MAPA e da ANAC, mostrar o que mudou em relação a antigamente e ajudar o produtor a escolher o modelo que mais compensa.
              </p>
              <p className="mt-6 leading-relaxed text-graphite/65">
                Esta página também é o portfólio do nosso projeto de extensão: aqui documentamos, com transparência, as ações desenvolvidas pelo grupo.
              </p>
              <p className="mt-6 text-graphite/60">{site.institution}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section id="acoes" tone="paper" label="Ações desenvolvidas">
        <div className="shell section-y">
          <Reveal>
            <p className="mb-5 text-sm font-medium text-tech">Portfólio</p>
            <h2 className="max-w-3xl text-huge font-semibold text-deep">Ações desenvolvidas pelo grupo.</h2>
          </Reveal>
          <div className="mt-14 grid gap-16">
            {actions.map((a) => (
              <article key={a.id} className="grid gap-10 lg:grid-cols-12">
                <Reveal className="lg:col-span-5">
                  <p className="text-sm font-medium text-tech">{a.date}</p>
                  <h3 className="mt-2 text-3xl font-semibold text-deep">{a.title}</h3>
                  <ul className="mt-5 space-y-2 text-sm text-graphite/70">
                    <li className="flex items-center gap-2"><MapPin aria-hidden className="h-4 w-4 text-tech" />{a.place}</li>
                    {a.partner && <li className="flex items-center gap-2"><Handshake aria-hidden className="h-4 w-4 text-tech" />{a.partner}</li>}
                  </ul>
                  <p className="mt-6 leading-relaxed text-graphite/75">{a.text}</p>
                </Reveal>
                <ul className="grid grid-cols-2 gap-4 lg:col-span-7">
                  {a.photos.map((p, i) => (
                    <Reveal key={p.src} delay={i * 0.06}>
                      <li>
                        <figure>
                          <Media src={p.src} alt={p.alt} className="aspect-[3/4] rounded-[22px]" label={false} />
                          <figcaption className="mt-2 px-1 text-xs leading-snug text-graphite/60">{p.caption}</figcaption>
                        </figure>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="light" label="Integração acadêmica">
        <div className="shell section-y">
          <Reveal><h2 className="max-w-3xl text-huge font-semibold text-deep">Quatro disciplinas, um mesmo projeto.</h2></Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {disciplines.map((d, i) => {
              const Icon = discIcons[i];
              return (
                <Reveal key={d.name} delay={(i % 2) * 0.08}>
                  <article className="flex h-full gap-6 rounded-[26px] border border-graphite/10 bg-white p-8">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-deep text-vivid"><Icon aria-hidden className="h-5 w-5" /></span>
                    <div>
                      <h3 className="text-xl font-semibold text-deep">{d.name}</h3>
                      <p className="mt-3 leading-relaxed text-graphite/70">{d.link}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <Section tone="paper" label="Integrantes">
        <div className="shell section-y">
          <Reveal><h2 className="text-huge font-semibold text-deep">Quem faz o projeto.</h2></Reveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <li className="overflow-hidden rounded-[26px] border border-graphite/10">
                  {m.photo ? (
                    <img src={m.photo} alt={`Foto de ${m.name}`} className="aspect-[4/5] w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="grid aspect-[4/5] place-items-center bg-[linear-gradient(160deg,#C9F4D8,#F5FAF6)]">
                      <span className="grid h-20 w-20 place-items-center rounded-full bg-white text-tech"><User aria-hidden className="h-8 w-8" /></span>
                      <span className="sr-only">Espaço para foto de {m.name}</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-deep">{m.name}</h3>
                    <p className="mt-1 text-sm font-medium text-tech">{m.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-graphite/60">{m.bio}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="light" label="Nossa trajetória">
        <div className="shell section-y">
          <Reveal><h2 className="text-huge font-semibold text-deep">Nossa trajetória.</h2></Reveal>
          {timeline.length === 0 ? (
            <Reveal>
              <div className="mt-14 flex flex-col items-start gap-5 rounded-[28px] border border-dashed border-graphite/20 p-8 sm:flex-row sm:items-center sm:p-10">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-mint text-deep"><CalendarPlus aria-hidden className="h-6 w-6" /></span>
                <div>
                  <h3 className="text-xl font-semibold text-deep">A linha do tempo começa com a primeira atividade.</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-graphite/65">Pesquisas, visitas, testes e ações de extensão entram aqui assim que forem realizados. Para adicionar, edite o arquivo <code className="rounded bg-white px-1.5 py-0.5 text-sm">src/data/team.ts</code>.</p>
                </div>
              </div>
            </Reveal>
          ) : (
            <ol className="relative mt-14 border-l border-graphite/15 pl-8">
              {timeline.map((t) => (
                <li key={t.title} className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-paper bg-tech" />
                  <p className="text-sm font-medium text-tech">{t.date}</p>
                  <h3 className="mt-1 text-xl font-semibold text-deep">{t.title}</h3>
                  <p className="mt-2 max-w-2xl text-graphite/70">{t.text}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
      </Section>
    </>
  );
}
