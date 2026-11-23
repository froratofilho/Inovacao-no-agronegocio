import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { purposes } from '../../data/content';

/** "Intuito" do site: o que o visitante encontra em cada parte da plataforma. */
export function Purpose() {
  return (
    <Section id="intuito" tone="light" label="Intuito do site">
      <div className="shell section-y">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="mb-5 text-sm font-medium text-tech">Nosso intuito</p>
            <h2 className="text-huge font-semibold text-deep">Uma plataforma para entender, escolher e operar com responsabilidade.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead max-w-lg text-graphite/70 lg:justify-self-end">
              Informação, apoio técnico e conscientização sobre pulverização com drones — e o registro transparente do nosso projeto de extensão.
            </p>
          </Reveal>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {purposes.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.06} className="h-full">
              <li className="h-full">
                <Link
                  to={p.to}
                  className="group flex h-full flex-col rounded-[24px] border border-graphite/10 bg-paper p-6 transition-colors duration-300 hover:border-tech/40 hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-sm text-graphite/40">{String(i + 1).padStart(2, '0')}</span>
                    <ArrowUpRight aria-hidden className="h-4 w-4 text-graphite/30 transition-colors group-hover:text-tech" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-deep">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite/65">{p.text}</p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
