import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { Accordion } from '../components/ui/Accordion';
import { Button } from '../components/ui/Button';
import { faq } from '../data/faq';
import { useSeo } from '../hooks/useSeo';

export default function Faq() {
  useSeo('Perguntas frequentes', 'Respostas responsáveis para as dúvidas mais comuns sobre pulverização agrícola com drones.');
  return (
    <>
      <PageHero image="/images/page-faq.webp" imageAlt="Linhas de plantio vistas do alto" kicker="Perguntas frequentes" title="Dúvidas comuns, respostas responsáveis." intro="O que produtores, estudantes e curiosos mais perguntam sobre drones agrícolas." />
      <Section tone="light" label="Perguntas">
        <div className="shell section-y space-y-20">
          {faq.map((g) => (
            <div key={g.theme} className="grid gap-8 lg:grid-cols-[1fr_2fr]">
              <Reveal><h2 className="text-big font-semibold text-deep">{g.theme}</h2></Reveal>
              <Accordion items={g.items.map((i) => ({ title: i.q, content: <p>{i.a}</p> }))} />
            </div>
          ))}
          <div className="flex flex-wrap gap-3 border-t border-graphite/10 pt-12">
            <Button to="/regulamentacao">Ver regulamentação</Button>
            <Button to="/tecnologia" variant="outline-dark">Entender a tecnologia</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
