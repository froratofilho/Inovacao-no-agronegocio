import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Media } from '../ui/Media';
import { HeroDrone } from './HeroDrone';

export function Hero() {
  return (
    <Section
      tone="dark"
      label="Apresentação"
      background={
        <div className="absolute inset-0 overflow-hidden">
          <Media src="/images/hero-campo.webp" alt="Lavoura vista do alto" variant="field" className="h-full w-full" label={false} credit={false} priority />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,47,35,.96)_0%,rgba(6,47,35,.88)_40%,rgba(6,47,35,.6)_100%)]" />
        </div>
      }
    >
      <div className="shell flex min-h-[88svh] flex-col pb-12 pt-28 lg:pt-32">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div className="max-w-[38rem]">
            <p className="eyebrow mb-6 text-vivid">Agricultura de precisão • Inovação no campo</p>
            <h1 className="text-[clamp(2.5rem,5.4vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
              O futuro do campo já está no ar.
            </h1>
            <p className="lead mt-6 max-w-lg text-white/78">
              Descubra como os drones de precisão estão transformando a aplicação agrícola, conectando tecnologia, eficiência operacional e conhecimento.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/tecnologia">Explorar a tecnologia</Button>
              <Button to="/projeto" variant="outline-light">Conhecer o projeto</Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2" aria-label="Temas">
              {['Precisão', 'Tecnologia', 'Inovação'].map((t) => (
                <li key={t} className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-white/70">{t}</li>
              ))}
            </ul>
          </div>
          <HeroDrone />
        </div>
      </div>
    </Section>
  );
}
