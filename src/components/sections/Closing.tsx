import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { Media } from '../ui/Media';

export function Closing() {
  return (
    <Section
     
      tone="dark"
      label="Encerramento"
      background={
        <>
          <Media src="/images/closing-aerea.webp" alt="Fotografia aérea de plantações" variant="aerial" className="absolute inset-0 h-full w-full" label={false} />
          <div className="absolute inset-0 bg-deep/80" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep to-transparent" />
        </>
      }
    >
      <div className="shell flex min-h-[90svh] flex-col items-center justify-center py-32 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-5xl text-mega font-semibold">A próxima geração da agricultura começa com conhecimento.</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12">
            <Button to="/tecnologia">Explore o futuro do agro</Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
