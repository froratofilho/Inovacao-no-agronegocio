import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { Media } from '../ui/Media';
import { disciplines } from '../../data/team';

export function ProjectTeaser() {
  return (
    <Section tone="light" label="Projeto universitário">
      <div className="shell section-y grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="mb-5 text-sm font-medium text-tech">Extensão universitária — FEMA</p>
            <h2 className="text-huge font-semibold text-deep">Conhecimento que ultrapassa a sala de aula.</h2>
            <p className="lead mt-8 max-w-xl text-graphite/75">
              Uma iniciativa de extensão para democratizar informações sobre drones agrícolas e inovação no campo, aproximando estudantes, produtores rurais e comunidade.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-10 flex flex-wrap gap-2">
              {disciplines.map((d) => (
                <li key={d.name} className="rounded-full border border-graphite/15 px-4 py-2 text-sm text-graphite/75">{d.name}</li>
              ))}
            </ul>
            <div className="mt-10">
              <Button to="/projeto">Conhecer nossa iniciativa</Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:col-span-6">
          <div className="grid grid-cols-5 gap-4">
            <Media src="/images/acoes/mini4-colheita.webp" alt="Registro do grupo em campo: drone DJI Mini 4 Pro durante a colheita de milho" variant="team" className="col-span-3 aspect-[3/4] rounded-[28px]" />
            <div className="col-span-2 flex flex-col gap-4 pt-16">
              <Media src="/images/acoes/drone-pastagem.webp" alt="Drone agrícola em pastagem durante visita técnica em Maringá" variant="field" className="aspect-square rounded-[22px]" label={false} />
              <Media src="/images/acoes/controle-voo.webp" alt="Planejamento de voo no controle remoto do drone" variant="screen" className="aspect-square rounded-[22px]" label={false} focus="center 60%" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
