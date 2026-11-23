import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { Media } from '../ui/Media';

export function Manifesto() {
  return (
    <Section id="manifesto" tone="light" label="Manifesto">
      <div className="shell section-y">
        <Reveal>
          <h2 className="max-w-5xl text-huge font-semibold text-deep">
            A tecnologia evoluiu. <span className="text-graphite/35">A forma de produzir também.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Media src="/images/manifesto-lavoura.webp" alt="Linhas geométricas de lavoura vistas do alto" variant="aerial" className="aspect-[4/3] w-full rounded-[28px]" />
          </Reveal>
          <div className="flex flex-col gap-8 lg:col-span-5 lg:pt-12">
            <Reveal>
              <p className="lead text-graphite/80">
                A transformação digital chegou ao campo. Mapas, sensores e sistemas de navegação passaram a orientar decisões que antes dependiam só da observação.
              </p>
              <p className="mt-6 leading-relaxed text-graphite/65">
                Os drones agrícolas fazem parte desse movimento. Bem planejados e operados por profissionais capacitados, ampliam as possibilidades de aplicação, mas não substituem o conhecimento agronômico nem as regras de segurança.
              </p>
            </Reveal>
            <Reveal>
              <Media src="/images/manifesto-drone.webp" alt="Detalhe de drone agrícola sobre a plantação" variant="drone" className="aspect-[4/5] w-3/4 rounded-[28px] lg:ml-auto" />
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
