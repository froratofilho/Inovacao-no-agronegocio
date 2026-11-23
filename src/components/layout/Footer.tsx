import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { mainNav, officialLinks, resourcesNav, site } from '../../data/site';
import { team } from '../../data/team';
import { Section } from '../ui/Section';

export function Footer() {
  return (
    <Section
     
      tone="dark"
      label="Rodapé"
      background={
        <svg className="absolute inset-0 h-full w-full opacity-[0.12]" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden>
          {Array.from({ length: 14 }).map((_, i) => (
            <path key={i} d={`M0 ${120 + i * 34} C 360 ${80 + i * 30}, 720 ${180 + i * 36}, 1080 ${110 + i * 32} S 1440 ${160 + i * 30}, 1500 ${140 + i * 33}`} stroke="#3EE58F" fill="none" />
          ))}
        </svg>
      }
    >
      <footer className="shell pb-10 pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-6 leading-relaxed text-white/65">
              Projeto de extensão universitária que aproxima produtores, estudantes e comunidade das tecnologias de pulverização agrícola com drones.
            </p>
            <div className="mt-8 rounded-2xl border border-white/15 p-5">
              <p className="text-xs text-white/50">Iniciativa de extensão</p>
              <p className="mt-1 font-display text-white">{site.institution}</p>
              <div className="mt-4 grid h-14 place-items-center rounded-xl border border-dashed border-white/20 text-xs text-white/40">
                Espaço para a logomarca da FEMA
              </div>
            </div>
          </div>
          <nav aria-label="Rodapé — páginas">
            <h2 className="text-sm font-semibold text-vivid">Navegação</h2>
            <ul className="mt-5 space-y-3">
              {[...mainNav, ...resourcesNav].map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-white/70 transition-colors hover:text-white">{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="text-sm font-semibold text-vivid">Equipe</h2>
            <ul className="mt-5 space-y-3 text-white/70">
              {team.map((m) => <li key={m.name}>{m.name}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-vivid">Órgãos oficiais</h2>
            <ul className="mt-5 space-y-3">
              {officialLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noreferrer" className="group inline-flex items-start gap-1.5 text-white/70 hover:text-white">
                    <span>{l.label}</span>
                    <ArrowUpRight aria-hidden className="mt-1 h-3.5 w-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.year} {site.name}. Conteúdo de caráter educativo.</p>
          <p>
            Desenvolvido pela equipe do projeto de extensão — FEMA ·{' '}
            <Link to="/creditos" className="underline-offset-4 hover:text-white hover:underline">Créditos das imagens</Link>
          </p>
        </div>
      </footer>
    </Section>
  );
}
