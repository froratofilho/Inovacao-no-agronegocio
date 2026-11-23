import { Link } from 'react-router-dom';
import { site } from '../../data/site';

export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${site.name} — página inicial`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <rect width="32" height="32" rx="9" fill={tone === 'dark' ? '#3EE58F' : '#062F23'} />
        <g stroke={tone === 'dark' ? '#062F23' : '#3EE58F'} strokeWidth="1.8" fill="none" strokeLinecap="round">
          <circle cx="9" cy="9" r="3.4" /><circle cx="23" cy="9" r="3.4" /><circle cx="9" cy="23" r="3.4" /><circle cx="23" cy="23" r="3.4" />
          <path d="M11.5 11.5l9 9M20.5 11.5l-9 9" />
        </g>
      </svg>
      <span className={`font-display text-[1.05rem] font-semibold tracking-tight ${tone === 'dark' ? 'text-white' : 'text-deep'}`}>
        New Holland
      </span>
    </Link>
  );
}
