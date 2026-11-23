import type { ReactNode } from 'react';

type Props = {
  id?: string;
  tone: 'dark' | 'light' | 'paper' | 'mint';
  children: ReactNode;
  className?: string;
  background?: ReactNode;
  label?: string;
};

const bg = { dark: 'bg-deep', light: 'bg-white', paper: 'bg-paper', mint: 'bg-mint' };

/** Seção padrão: fundo opcional atrás do conteúdo; informa ao header qual tema aplicar. */
export function Section({ id, tone, children, className = '', background, label }: Props) {
  return (
    <section
      id={id}
      aria-label={label}
      data-header={tone === 'dark' ? 'dark' : 'light'}
      className={`relative ${tone === 'dark' ? 'text-white' : 'text-graphite'} ${className}`}
    >
      <div className={`bg-layer ${bg[tone]}`}>{background}</div>
      <div className="content-layer">{children}</div>
    </section>
  );
}
