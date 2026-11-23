import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Minus, Plus, X } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { Media, type ArtVariant } from '../components/ui/Media';
import { Notice } from '../components/ui/Notice';
import { Dialog } from '../components/ui/Dialog';
import { comparisonRows, methods, thenNow, worthIt } from '../data/content';
import { equipment, TBD, type Equipment } from '../data/equipment';
import { useSeo } from '../hooks/useSeo';
import { ease } from '../styles/tokens';

const MAX = 3;

function EquipCard({ e, selected, onToggle, onDetails, disabled }: { e: Equipment; selected: boolean; onToggle: () => void; onDetails: () => void; disabled: boolean }) {
  return (
    <article className={`flex h-full flex-col overflow-hidden rounded-[28px] border bg-white transition-colors ${selected ? 'border-tech' : 'border-graphite/10'}`}>
      <div className="relative">
        <Media src={e.image} alt={e.imageNote ? `${e.name} — ${e.imageNote}` : `Equipamento: ${e.name}`} variant={(e.id === 'mapeamento' ? 'screen' : 'drone') as ArtVariant} className="aspect-[4/3]" />
        {e.imageNote && <span className="absolute left-3 top-3 z-[3] rounded-full bg-white/90 px-2.5 py-1 text-[0.68rem] font-medium text-deep">{e.imageNote}</span>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium text-tech">{e.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-deep">{e.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-graphite/70">{e.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {e.applications.map((a) => <li key={a} className="rounded-full bg-paper px-2.5 py-1 text-xs text-graphite/70">{a}</li>)}
        </ul>
        <p className="mt-4 rounded-2xl bg-mint/60 p-3 text-xs leading-relaxed text-deep"><span className="font-semibold">Compensa para: </span>{e.bestFor}</p>
        <div className="mt-auto flex gap-2 pt-6">
          <button type="button" onClick={onDetails} className="min-h-[44px] flex-1 rounded-full bg-deep px-4 text-sm font-semibold text-white hover:bg-forest">Ver detalhes</button>
          <button
            type="button"
            onClick={onToggle}
            disabled={disabled && !selected}
            aria-pressed={selected}
            aria-label={selected ? `Remover ${e.name} da comparação` : `Adicionar ${e.name} à comparação`}
            className={`grid h-11 w-11 place-items-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-35 ${selected ? 'border-tech bg-tech text-white' : 'border-graphite/20 text-graphite hover:border-tech hover:text-tech'}`}
          >
            {selected ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Comparativo() {
  useSeo('Comparativo e modelos', 'Compare pulverização terrestre e por drones e conheça classes de drones agrícolas, com comparador de equipamentos.');
  const [selected, setSelected] = useState<string[]>([]);
  const [details, setDetails] = useState<Equipment | null>(null);
  const toggle = (id: string) => setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : s.length < MAX ? [...s, id] : s));
  const chosen = equipment.filter((e) => selected.includes(e.id));

  return (
    <>
      <PageHero image="/images/page-comparativo.webp" imageAlt="Pulverizador terrestre em operação" kicker="Comparativo e modelos" title="Escolher bem começa por comparar." intro="Terrestre ou aérea, compacta ou de grande porte: a melhor solução depende da cultura, da área e das condições de aplicação." />

      <Section tone="dark" label="Métodos de aplicação" background={<div className="absolute inset-0 bg-[linear-gradient(180deg,#062F23,#0B4934)]" />}>
        <div className="shell section-y">
          <div className="grid gap-5 md:grid-cols-2">
            {(['terrestre', 'drone'] as const).map((k, i) => (
              <Reveal key={k} delay={i * 0.08}>
                <article className="bg-white/5 h-full overflow-hidden rounded-[28px] border border-white/10">
                  <Media src={`/images/metodo-${k}.webp`} alt={methods[k].label} variant={k === 'drone' ? 'drone' : 'ground'} className="aspect-[16/9]" />
                  <div className="p-8">
                    <h2 className="text-2xl font-semibold">{methods[k].label}</h2>
                    <p className="mt-3 leading-relaxed text-white/70">{methods[k].summary}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="antes-e-agora" tone="paper" label="Antigamente e atualmente">
        <div className="shell section-y">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <Reveal>
              <p className="mb-5 text-sm font-medium text-tech">Antigamente × atualmente</p>
              <h2 className="text-huge font-semibold text-deep">Como era, como é — e quando vale investir.</h2>
            </Reveal>
            <Reveal delay={0.08}><p className="lead max-w-lg text-graphite/70 lg:justify-self-end">Do pulverizador costal ao drone com rota automática: o que mudou na prática para quem aplica no campo.</p></Reveal>
          </div>
          <ol className="mt-14 grid gap-4">
            {thenNow.map((r, i) => (
              <Reveal key={r.topic} delay={(i % 3) * 0.05}>
                <li className="grid gap-4 rounded-[24px] border border-graphite/10 bg-white p-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] md:items-start md:gap-8">
                  <h3 className="text-lg font-semibold text-deep">{r.topic}</h3>
                  <p className="text-graphite/65"><span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-graphite/45">Antigamente</span>{r.before}</p>
                  <p className="text-graphite/80"><span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-tech">Atualmente</span>{r.now}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <div className="mt-10 rounded-[28px] bg-deep p-8 text-white sm:p-10">
              <h3 className="text-2xl font-semibold">Vale o investimento?</h3>
              <p className="mt-3 max-w-2xl text-white/70">Na maioria dos casos, o drone tende a compensar quando:</p>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {worthIt.map((w) => (
                  <li key={w} className="flex gap-3 text-white/85"><Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-vivid" />{w}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="light" label="Tabela comparativa">
        <div className="shell section-y">
          <Reveal><h2 className="max-w-3xl text-huge font-semibold text-deep">Diferenças operacionais, lado a lado.</h2></Reveal>
          <div className="mt-14 overflow-x-auto rounded-[24px] border border-graphite/10">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">Comparação entre pulverização terrestre e por drone</caption>
              <thead className="bg-paper">
                <tr>
                  <th scope="col" className="w-1/4 p-5 text-sm font-semibold text-graphite/60">Dimensão</th>
                  <th scope="col" className="p-5 font-display font-semibold text-deep">Terrestre</th>
                  <th scope="col" className="p-5 font-display font-semibold text-tech">Drone</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r) => (
                  <tr key={r.dimension} className="border-t border-graphite/10 align-top">
                    <th scope="row" className="p-5 font-display font-medium text-deep">{r.dimension}</th>
                    <td className="p-5 text-graphite/75">{r.terrestre}</td>
                    <td className="p-5 text-graphite/75">{r.drone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8"><Notice>Esta comparação é qualitativa. Não apresentamos números de rendimento, economia ou custo sem fonte verificada.</Notice></div>
        </div>
      </Section>

      <Section id="modelos" tone="paper" label="Modelos de drones">
        <div className="shell section-y">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <Reveal><h2 className="text-huge font-semibold text-deep">Modelos: para que serve cada um e qual compensa.</h2></Reveal>
            <Reveal delay={0.08}><p className="lead max-w-lg text-graphite/70 lg:justify-self-end">Veja especificações, vantagens e desvantagens. Selecione até três modelos com o botão + para comparar lado a lado.</p></Reveal>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((e) => (
              <EquipCard key={e.id} e={e} selected={selected.includes(e.id)} disabled={selected.length >= MAX} onToggle={() => toggle(e.id)} onDetails={() => setDetails(e)} />
            ))}
          </div>

          <div className="mt-12" aria-live="polite">
            <AnimatePresence mode="wait">
              {chosen.length === 0 ? (
                <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="rounded-[24px] border border-dashed border-graphite/20 p-8 text-center text-graphite/60">
                  Adicione equipamentos ao comparador para vê-los lado a lado.
                </motion.p>
              ) : (
                <motion.div key="table" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease }} className="overflow-x-auto rounded-[24px] border border-graphite/10 bg-white">
                  <table className="w-full min-w-[640px] text-left">
                    <caption className="sr-only">Comparador de equipamentos selecionados</caption>
                    <thead>
                      <tr className="bg-deep text-white">
                        <th scope="col" className="p-5 text-sm font-medium text-white/60">Comparador ({chosen.length}/{MAX})</th>
                        {chosen.map((e) => (
                          <th key={e.id} scope="col" className="p-5">
                            <div className="flex items-center justify-between gap-3">
                              <span className="font-display font-semibold">{e.name}</span>
                              <button type="button" onClick={() => toggle(e.id)} aria-label={`Remover ${e.name}`} className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/10"><X className="h-4 w-4" /></button>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-graphite/10"><th scope="row" className="p-5 font-medium text-deep">Categoria</th>{chosen.map((e) => <td key={e.id} className="p-5 text-graphite/75">{e.category}</td>)}</tr>
                      {chosen[0].specs.map((s, i) => (
                        <tr key={s.label} className="border-t border-graphite/10">
                          <th scope="row" className="p-5 font-medium text-deep">{s.label}</th>
                          {chosen.map((e) => (
                            <td key={e.id} className="p-5 text-graphite/75">
                              <span className="block text-xs text-graphite/45">{e.specs[i]?.label}</span>
                              <span className={e.specs[i]?.value === TBD ? 'italic text-graphite/50' : ''}>{e.specs[i]?.value}</span>
                            </td>
                          ))}
                        </tr>
                      ))}
                      <tr className="border-t border-graphite/10"><th scope="row" className="p-5 font-medium text-deep">Vantagens</th>{chosen.map((e) => <td key={e.id} className="p-5 text-sm text-graphite/75">{e.pros.join(' · ')}</td>)}</tr>
                      <tr className="border-t border-graphite/10"><th scope="row" className="p-5 font-medium text-deep">Desvantagens</th>{chosen.map((e) => <td key={e.id} className="p-5 text-sm text-graphite/75">{e.cons.join(' · ')}</td>)}</tr>
                      <tr className="border-t border-graphite/10 bg-mint/40"><th scope="row" className="p-5 font-medium text-deep">Compensa para</th>{chosen.map((e) => <td key={e.id} className="p-5 text-sm text-deep">{e.bestFor}</td>)}</tr>
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="mt-8"><Notice>Especificações de referência, tiradas das fichas públicas do fabricante. Versões e mercados variam: confira sempre a ficha técnica oficial antes da compra.</Notice></div>
        </div>
      </Section>

      <Dialog open={!!details} onClose={() => setDetails(null)} label={details ? `Detalhes: ${details.name}` : 'Detalhes'}>
        {details && (
          <div className="grid overflow-hidden rounded-[28px] bg-white md:grid-cols-2">
            <Media src={details.image} alt={details.name} variant={details.id === 'mapeamento' ? 'screen' : 'drone'} className="aspect-[4/3] md:aspect-auto md:h-full" />
            <div className="max-h-[70svh] overflow-y-auto p-8">
              <p className="text-xs font-medium text-tech">{details.category}</p>
              <h2 className="mt-2 text-3xl font-semibold text-deep">{details.name}</h2>
              <p className="mt-4 leading-relaxed text-graphite/70">{details.description}</p>
              <dl className="mt-6 divide-y divide-graphite/10 border-y border-graphite/10">
                {details.specs.map((s) => (
                  <div key={s.label} className="flex justify-between gap-4 py-3 text-sm">
                    <dt className="text-graphite/60">{s.label}</dt>
                    <dd className={s.value === TBD ? 'italic text-graphite/45' : 'text-right font-medium text-deep'}>{s.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-sans text-sm font-semibold text-deep">Vantagens</h3>
                  <ul className="mt-2 space-y-2 text-sm text-graphite/75">{details.pros.map((p) => <li key={p} className="flex gap-2"><Check aria-hidden className="h-4 w-4 shrink-0 text-tech" />{p}</li>)}</ul>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-deep">Desvantagens</h3>
                  <ul className="mt-2 space-y-2 text-sm text-graphite/75">{details.cons.map((p) => <li key={p} className="flex gap-2"><Minus aria-hidden className="h-4 w-4 shrink-0 text-graphite/40" />{p}</li>)}</ul>
                </div>
              </div>
              <p className="mt-6 rounded-2xl bg-mint/60 p-4 text-sm leading-relaxed text-deep"><span className="font-semibold">Compensa para: </span>{details.bestFor}</p>
            </div>
          </div>
        )}
      </Dialog>
    </>
  );
}
