import { Info } from 'lucide-react';
import type { ReactNode } from 'react';

export function Notice({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <div
      role="note"
      className={`flex gap-3 rounded-2xl border p-5 text-sm leading-relaxed ${
        tone === 'dark' ? 'border-vivid/25 bg-white/5 text-white/80' : 'border-tech/25 bg-mint/40 text-graphite/80'
      }`}
    >
      <Info aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-tech" />
      <div>{children}</div>
    </div>
  );
}
