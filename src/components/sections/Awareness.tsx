import { ShieldCheck } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { awareness } from '../../data/content';

export function Awareness() {
  return (
    <Section
      id="conscientizacao"
     
      tone="dark"
      label="Conscientização"
      background={<div className="absolute inset-0 bg-[linear-gradient(180deg,#062F23,#0B4934)]" />}
    >
      <div className="shell section-y">
        <Reveal>
          <p className="mb-5 text-sm font-medium text-vivid">Conscientização</p>
          <h2 className="max-w-4xl text-huge font-semibold">Tecnologia no campo só faz sentido com responsabilidade.</h2>
          <p className="lead mt-8 max-w-2xl text-white/70">
            O drone muda a forma de aplicar, mas não muda as regras do bom uso de defensivos. Estes cuidados valem para toda operação.
          </p>
        </Reveal>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awareness.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.06} className="h-full">
              <li className="bg-white/5 flex h-full gap-5 rounded-[24px] border border-white/10 p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-vivid/15 text-vivid">
                  <ShieldCheck aria-hidden className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{a.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
