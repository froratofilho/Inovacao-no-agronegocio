import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { Media } from '../ui/Media';

/** Controle deslizante entre duas imagens, operável por mouse, toque e teclado. */
export function CompareSlider() {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const r = box.current!.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5));
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5));
    if (e.key === 'Home') setPos(0);
    if (e.key === 'End') setPos(100);
  };

  return (
    <div
      ref={box}
      className="relative aspect-[4/3] w-full touch-pan-y select-none overflow-hidden rounded-[28px] sm:aspect-[16/10]"
      onPointerDown={(e: PointerEvent) => { dragging.current = true; (e.target as Element).setPointerCapture?.(e.pointerId); update(e.clientX); }}
      onPointerMove={(e: PointerEvent) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <Media src="/images/compare-drone.webp" alt="Aplicação com drone sobre lavoura" variant="drone" className="absolute inset-0 h-full w-full" label={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Media src="/images/compare-terrestre.webp" alt="Pulverizador terrestre trabalhando na lavoura" variant="ground" className="h-full w-full" label={false} />
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-deep/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">Terrestre</span>
      <span className="absolute right-4 top-4 rounded-full bg-tech/90 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">Drone</span>
      <span className="absolute bottom-4 left-4 rounded-full bg-deep/60 px-2.5 py-1 text-[0.68rem] text-mint backdrop-blur">Imagens demonstrativas</span>
      <div className="absolute inset-y-0 w-px bg-white/90" style={{ left: `${pos}%` }}>
        <div
          role="slider"
          tabIndex={0}
          aria-label="Comparar pulverização terrestre e por drone"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% terrestre`}
          onKeyDown={onKey}
          className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-white text-deep shadow-lg"
        >
          <MoveHorizontal aria-hidden className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
