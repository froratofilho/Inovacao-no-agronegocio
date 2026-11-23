import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { Notice } from '../components/ui/Notice';
import { credits } from '../data/credits';
import { useSeo } from '../hooks/useSeo';

export default function Creditos() {
  useSeo('Créditos das imagens', 'Autoria e licença das fotografias utilizadas no site.');
  const list = Object.values(credits).filter((c, i, arr) => arr.findIndex((x) => x.path === c.path) === i);
  return (
    <>
      <PageHero kicker="Créditos" title="Créditos das imagens." intro="Fotografias de referência obtidas no Wikimedia Commons, com licença livre verificada. Nenhuma delas é registro de atividade do grupo." />
      <Section tone="light" label="Lista de créditos">
        <div className="shell section-y pt-16">
          {list.length === 0 ? (
            <Notice>As fotografias ainda não foram baixadas. Rode <code>npm run images</code> para obter as imagens e gerar esta lista automaticamente.</Notice>
          ) : (
            <div className="overflow-x-auto rounded-[24px] border border-graphite/10">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">Créditos das fotografias</caption>
                <thead className="bg-paper text-graphite/60">
                  <tr>
                    <th scope="col" className="p-4 font-semibold">Imagem</th>
                    <th scope="col" className="p-4 font-semibold">Autor</th>
                    <th scope="col" className="p-4 font-semibold">Licença</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((c) => (
                    <tr key={c.path} className="border-t border-graphite/10 align-top">
                      <td className="p-4">
                        <a href={c.source} target="_blank" rel="noreferrer" className="group inline-flex items-start gap-1 font-medium text-deep hover:text-tech">
                          {c.title}
                          <ArrowUpRight aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                        </a>
                        <span className="mt-1 block text-xs text-graphite/45">{c.path}{c.note ? ` · ${c.note}` : ''}</span>
                      </td>
                      <td className="p-4 text-graphite/75">{c.author}</td>
                      <td className="p-4">
                        {c.licenseUrl ? <a href={c.licenseUrl} target="_blank" rel="noreferrer" className="text-tech hover:text-forest">{c.license}</a> : c.license}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
