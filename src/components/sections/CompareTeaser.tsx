import { useState } from 'react';
import { Check } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { CompareSlider } from './CompareSlider';
import { methods } from '../../data/content';

type Key = keyof typeof methods;

export function CompareTeaser() {
  const [tab, setTab] = useState<Key>('drone');
  const m = methods[tab];
  return (
    <Section tone="dark" label="Comparação de métodos" background={<div className="absolute inset-0 bg-[linear-gradient(180deg,#062F23_0%,#0B4934_100%)]" />}>
      <div className="shell section-y">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="text-huge font-semibold">Dois caminhos para a mesma lavoura.</h2>
            <p className="lead max-w-lg text-white/70 lg:justify-self-end">
              Nenhum método é melhor em todas as situações. A escolha depende da cultura, da área e das condições de aplicação.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <Reveal><CompareSlider /></Reveal>
          <Reveal delay={0.1}>
            <div role="tablist" aria-label="Métodos de aplicação" className="inline-flex rounded-full border border-white/15 p-1">
              {(Object.keys(methods) as Key[]).map((k) => (
                <button
                  key={k}
                  role="tab"
                  type="button"
                  id={`tab-${k}`}
                  aria-selected={tab === k}
                  aria-controls={`panel-${k}`}
                  onClick={() => setTab(k)}
                  className={`min-h-[44px] rounded-full px-5 text-sm font-medium transition-colors ${tab === k ? 'bg-white text-deep' : 'text-white/70 hover:text-white'}`}
                >
                  {methods[k].label}
                </button>
              ))}
            </div>
            <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} className="mt-8">
              <h3 className="text-2xl font-semibold">{m.label}</h3>
              <p className="mt-4 leading-relaxed text-white/70">{m.summary}</p>
              <ul className="mt-6 space-y-3">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-3 text-white/85">
                    <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-vivid" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button to="/comparativo">Comparar métodos de aplicação</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
