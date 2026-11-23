import type { ReactNode } from 'react';
import { Section } from './Section';
import { Media } from './Media';

/** Abertura padrão das páginas internas: escura, com foto ao fundo. */
export function PageHero({ kicker, title, intro, children, image, imageAlt = '' }: { kicker: string; title: string; intro: string; children?: ReactNode; image?: string; imageAlt?: string }) {
  return (
    <Section
      tone="dark"
      label={title}
      background={
        image ? (
          <div className="absolute inset-0 overflow-hidden">
            <Media src={image} alt={imageAlt} variant="aerial" className="absolute inset-0 h-full w-full bg-deep" label={false} priority />
            <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(6,47,35,.96)_0%,rgba(6,47,35,.86)_45%,rgba(6,47,35,.6)_100%)]" />
          </div>
        ) : undefined
      }
    >
      <div className="shell pb-16 pt-36 sm:pb-24 sm:pt-44">
        <p className="mb-5 text-sm font-medium text-vivid">{kicker}</p>
        <h1 className="max-w-5xl text-huge font-semibold">{title}</h1>
        <p className="lead mt-6 max-w-2xl text-white/75">{intro}</p>
        {children}
      </div>
    </Section>
  );
}
