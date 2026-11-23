import { useEffect, useState } from 'react';
import { creditFor } from '../../data/credits';

const CUTOUT = '/images/hero-drone-recorte.webp';
const PHOTO = '/images/hero-drone.webp';

type Kind = 'loading' | 'cutout' | 'photo' | 'none';

function probe(src: string) {
  return new Promise<boolean>((res) => {
    const i = new Image();
    i.onload = () => res(i.naturalWidth > 0);
    i.onerror = () => res(false);
    i.src = src;
  });
}

/** Foto do drone DJI no Hero: usa o recorte com fundo transparente se existir, senão a foto normal. */
export function HeroDrone() {
  const [kind, setKind] = useState<Kind>('loading');

  useEffect(() => {
    let alive = true;
    (async () => {
      const k: Kind = (await probe(CUTOUT)) ? 'cutout' : (await probe(PHOTO)) ? 'photo' : 'none';
      if (alive) setKind(k);
    })();
    return () => {
      alive = false;
    };
  }, []);

  if (kind === 'none') return null;
  if (kind === 'loading') return <div aria-hidden className="aspect-[5/4]" />;

  const credit = creditFor(kind === 'cutout' ? CUTOUT : PHOTO);
  const model = credit && /T50/i.test(credit.title) ? 'DJI Agras T50' : 'Drone agrícola DJI Agras';

  return (
    <figure className="relative mx-auto w-full max-w-[620px]">
      {kind === 'cutout' ? (
        <img
          src={CUTOUT}
          alt={`${model}, fotografia real com fundo removido`}
          className="w-full select-none drop-shadow-[0_30px_40px_rgba(2,26,18,.5)]"
          draggable={false}
          {...{ fetchpriority: 'high' }}
        />
      ) : (
        <div className="aspect-[5/4] overflow-hidden rounded-[28px] border border-white/10 shadow-[0_40px_80px_-40px_rgba(0,0,0,.7)]">
          <img
            src={PHOTO}
            alt={`${model}, fotografia real`}
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 55%' }}
            draggable={false}
            {...{ fetchpriority: 'high' }}
          />
        </div>
      )}

      <figcaption className="mt-4 flex items-center justify-between gap-4 text-xs text-white/60">
        <span>
          <span className="block font-display text-sm text-white">{model}</span>
          Drone de pulverização e distribuição
        </span>
        {credit && (
          <a href={credit.source} target="_blank" rel="noreferrer" className="max-w-[55%] truncate text-right hover:text-white" title={`${credit.author} — ${credit.license}`}>
            Foto: {credit.author} · {credit.license}
          </a>
        )}
      </figcaption>
    </figure>
  );
}
