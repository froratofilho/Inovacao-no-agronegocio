import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { Media } from '../ui/Media';
import { operationSteps } from '../../data/content';

/** Etapas da operação, da prancheta ao voo. */
export function TechSteps() {
  return (
    <Section tone="dark" label="Tecnologia em movimento" background={<div className="absolute inset-0 bg-[linear-gradient(180deg,#062F23_0%,#0B4934_100%)]" />}>
      <div className="shell section-y grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="mb-5 text-sm font-medium text-vivid">Tecnologia em movimento</p>
            <h2 className="text-huge font-semibold">Da prancheta ao voo, cada etapa importa.</h2>
            <p className="lead mt-6 max-w-md text-white/70">
              A aplicação com drone é um processo. A aeronave executa o que foi planejado por pessoas qualificadas.
            </p>
            <Media src="/images/metodo-drone.webp" alt="Drone agrícola em operação sobre a lavoura" variant="drone" className="mt-10 hidden aspect-[16/10] rounded-[28px] lg:block" />
          </Reveal>
        </div>
        <ol className="space-y-4">
          {operationSteps.map((s, i) => (
            <Reveal key={s.title}>
              <li className="flex gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-vivid font-display text-sm text-deep">{i + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold sm:text-2xl">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/70">{s.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
          <li className="list-none pt-4">
            <Button to="/tecnologia" variant="outline-light">Ver como a tecnologia funciona</Button>
          </li>
        </ol>
      </div>
    </Section>
  );
}
