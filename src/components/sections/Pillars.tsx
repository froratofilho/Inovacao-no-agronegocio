import { Crosshair, Gauge, GraduationCap } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { pillars } from '../../data/content';

const icons = [Crosshair, Gauge, GraduationCap];

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full rounded-[26px] border border-graphite/10 bg-white p-8">
      {children}
    </div>
  );
}

export function Pillars() {
  return (
    <Section tone="paper" label="Pilares">
      <div className="shell pb-28 pt-4 sm:pb-36">
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={p.n} delay={i * 0.08} className="h-full">
                <Card>
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm text-graphite/40">{p.n}</span>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-mint text-deep">
                      <Icon aria-hidden className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-deep">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-graphite/70">{p.text}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
