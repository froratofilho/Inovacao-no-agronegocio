import { useState } from 'react';
import { creditFor } from '../../data/credits';

export type ArtVariant = 'field' | 'aerial' | 'drone' | 'screen' | 'team' | 'ground';

type Props = {
  src?: string;
  alt: string;
  variant?: ArtVariant;
  className?: string;
  label?: string | false;
  priority?: boolean;
  /** posição do recorte (object-position), ex.: 'center 30%' */
  focus?: string;
  /** mostra o crédito da foto (necessário para CC BY / CC BY-SA) */
  credit?: boolean;
  imgClassName?: string;
};

/**
 * Imagem com fallback ilustrado. Enquanto a foto real não existir em /public/images,
 * mostra uma arte vetorial coerente com a paleta e uma etiqueta de "imagem demonstrativa".
 */
export function Media({ src, alt, variant = 'field', className = '', label = 'Imagem demonstrativa', priority, focus, credit = true, imgClassName = '' }: Props) {
  const [failed, setFailed] = useState(!src);
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-forest ${className}`}>
      {failed ? (
        <Art variant={variant} alt={alt} />
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          {...(priority ? { fetchpriority: 'high' } : {})}
          style={focus ? { objectPosition: focus } : undefined}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
      {!failed && loaded && credit && <CreditTag src={src} />}
      {failed && label && (
        <span className="absolute bottom-3 left-3 rounded-full bg-deep/70 px-2.5 py-1 text-[0.68rem] font-medium text-mint backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}

function CreditTag({ src }: { src?: string }) {
  const c = creditFor(src);
  if (!c) return null;
  return (
    <a
      href={c.source}
      target="_blank"
      rel="noreferrer"
      title={`${c.title} — ${c.author} — ${c.license}`}
      className="absolute bottom-2 right-2 z-[3] max-w-[70%] truncate rounded-full bg-deep/55 px-2 py-0.5 text-[0.62rem] text-white/75 backdrop-blur transition-colors hover:bg-deep/80 hover:text-white"
    >
      Foto: {c.author} · {c.license}
    </a>
  );
}

function Art({ variant, alt }: { variant: ArtVariant; alt: string }) {
  const id = `g-${variant}`;
  return (
    <svg role="img" aria-label={alt} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B4934" />
          <stop offset="0.45" stopColor="#2E7A55" />
          <stop offset="0.62" stopColor="#E9D9A6" />
          <stop offset="1" stopColor="#0B4934" />
        </linearGradient>
        <linearGradient id={`${id}-soil`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1C6A45" />
          <stop offset="1" stopColor="#062F23" />
        </linearGradient>
        <radialGradient id={`${id}-sun`} cx="0.7" cy="0.52" r="0.5">
          <stop offset="0" stopColor="#FFF4D6" stopOpacity="0.9" />
          <stop offset="1" stopColor="#FFF4D6" stopOpacity="0" />
        </radialGradient>
      </defs>
      {variant === 'aerial' || variant === 'screen' ? (
        <g>
          <rect width="800" height="600" fill="#0B4934" />
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 5 }).map((__, c) => {
              const shades = ['#18A66A', '#0F7A4D', '#2F8F5E', '#1B5E40', '#4BAE73'];
              return (
                <g key={`${r}-${c}`} transform={`translate(${c * 168 - 20 + (r % 2) * 30} ${r * 110 - 20}) rotate(-8)`}>
                  <rect width="160" height="102" fill={shades[(r * 3 + c) % 5]} opacity={0.85} />
                  {Array.from({ length: 12 }).map((___, l) => (
                    <line key={l} x1="0" x2="160" y1={l * 8.5} y2={l * 8.5} stroke="#062F23" strokeOpacity="0.25" />
                  ))}
                </g>
              );
            }),
          )}
          {variant === 'screen' && (
            <g>
              <rect width="800" height="600" fill="#062F23" opacity="0.35" />
              <path d="M220 160 H580 V190 H220 V220 H580 V250 H220 V280 H580 V310 H220 V340 H580 V370 H220 V400 H580" fill="none" stroke="#3EE58F" strokeWidth="3" strokeDasharray="10 6" />
              <rect x="210" y="150" width="380" height="260" fill="none" stroke="#C9F4D8" strokeWidth="2" />
              <rect x="24" y="24" width="190" height="64" rx="10" fill="#062F23" opacity="0.8" />
              <rect x="40" y="42" width="120" height="8" rx="4" fill="#3EE58F" />
              <rect x="40" y="60" width="80" height="8" rx="4" fill="#C9F4D8" opacity="0.6" />
            </g>
          )}
        </g>
      ) : (
        <g>
          <rect width="800" height="600" fill={`url(#${id}-sky)`} />
          <rect width="800" height="600" fill={`url(#${id}-sun)`} />
          <path d="M0 330 Q200 300 400 318 T800 306 V600 H0Z" fill={`url(#${id}-soil)`} />
          {Array.from({ length: 26 }).map((_, i) => {
            const x = -600 + i * 80;
            return <line key={i} x1={400} y1={318} x2={x} y2={600} stroke="#3EE58F" strokeOpacity={0.18} strokeWidth={variant === 'ground' ? 3 : 1.4} />;
          })}
          {variant === 'drone' && (
            <g transform="translate(400 210)" fill="#062F23">
              <rect x="-46" y="-14" width="92" height="28" rx="10" />
              <rect x="-24" y="12" width="48" height="34" rx="12" fill="#17251F" />
              {[-1, 1].map((s) => (
                <g key={s}>
                  <rect x={s > 0 ? 40 : -150} y="-6" width="110" height="7" rx="3" />
                  <ellipse cx={s * 160} cy="-12" rx="70" ry="6" fill="#062F23" opacity="0.55" />
                </g>
              ))}
            </g>
          )}
          {variant === 'ground' && (
            <g transform="translate(250 360)" fill="#062F23">
              <rect x="0" y="0" width="220" height="80" rx="12" />
              <rect x="-160" y="40" width="540" height="8" />
              <circle cx="40" cy="96" r="34" />
              <circle cx="190" cy="96" r="34" />
            </g>
          )}
          {variant === 'team' && (
            <g fill="#062F23" opacity="0.9">
              {[260, 360, 460, 560].map((x, i) => (
                <g key={x} transform={`translate(${x} ${430 - (i % 2) * 10})`}>
                  <circle cx="0" cy="-80" r="26" />
                  <path d="M-44 0 Q-40 -54 0 -54 Q40 -54 44 0Z" />
                </g>
              ))}
            </g>
          )}
        </g>
      )}
    </svg>
  );
}
