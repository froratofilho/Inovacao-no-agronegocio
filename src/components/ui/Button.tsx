import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'solid' | 'outline-light' | 'outline-dark' | 'ghost';

const styles: Record<Variant, string> = {
  solid: 'bg-tech text-white hover:bg-[#139058] shadow-[0_10px_30px_-12px_rgba(24,166,106,.8)]',
  'outline-light': 'border border-white/40 text-white hover:border-white hover:bg-white/10',
  'outline-dark': 'border border-graphite/20 text-graphite hover:border-tech hover:text-tech',
  ghost: 'text-tech hover:text-forest px-0',
};

type Props = {
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  children: ReactNode;
  icon?: boolean;
  className?: string;
  type?: 'button' | 'submit';
};

/** Botão único do sistema: vira Link, âncora externa ou button conforme a prop. */
export function Button({ to, href, onClick, variant = 'solid', children, icon = true, className = '', type = 'button' }: Props) {
  const cls = `group inline-flex min-h-[48px] items-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold transition-all duration-300 ease-soft hover:-translate-y-0.5 ${styles[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {icon && <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-300 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
        <span className="sr-only">(abre em nova aba)</span>
      </a>
    );
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
