import type { ReactNode } from 'react';

/** Bloco simples (mantido para não alterar a estrutura das páginas). */
export function Reveal({ children, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return <div className={className}>{children}</div>;
}
