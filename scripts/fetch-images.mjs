#!/usr/bin/env node
/**
 * Baixa, verifica a licença, otimiza (WebP) e registra os créditos das imagens reais do site.
 *
 *   npm run images            -> baixa o que estiver faltando
 *   npm run images -- --force -> baixa tudo de novo
 *   npm run images -- --cutout -> também tenta recortar o fundo do drone do Hero
 *                                  (requer: npm i -D @imgly/background-removal-node)
 *
 * Saídas: public/images/**.webp, src/data/credits.generated.json, CREDITOS-IMAGENS.md
 */
import { mkdir, writeFile, access, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { slots, cutout, altSearches } from './images.config.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'images');
const creditsJson = join(root, 'src', 'data', 'credits.generated.json');
const creditsMd = join(root, 'CREDITOS-IMAGENS.md');
const API = 'https://commons.wikimedia.org/w/api.php';
const UA = 'AgroDronePrecisao/1.0 (projeto de extensao universitaria FEMA; site educativo)';
const FORCE = process.argv.includes('--force');
const CUTOUT = process.argv.includes('--cutout');

const ALLOWED = /^(cc0|public domain|pd\b|pdm|cc[- ]by(-sa)?[- ]\d|cc[- ]by(-sa)?$|attribution|no restrictions)/i;
const FORBIDDEN = /\b(nc|nd)\b|non-?commercial|no ?derivatives|fair use/i;

const strip = (html = '') => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const exists = (p) => access(p).then(() => true, () => false);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** fetch com espera entre chamadas e novas tentativas quando o Commons limita a taxa (429/503). */
async function politeFetch(url) {
  for (let attempt = 0; attempt < 6; attempt++) {
    await sleep(1200);
    const res = await fetch(url, { headers: { 'User-Agent': UA } });
    if (res.status !== 429 && res.status !== 503) return res;
    const wait = Number(res.headers.get('retry-after')) * 1000 || 5000 * 2 ** attempt;
    console.log(`   … limite do Commons, aguardando ${Math.round(wait / 1000)}s`);
    await sleep(wait);
  }
  throw new Error('Commons API 429 (limite persistente)');
}

async function api(params) {
  const url = `${API}?${new URLSearchParams({ format: 'json', formatversion: '2', origin: '*', ...params })}`;
  const res = await politeFetch(url);
  if (!res.ok) throw new Error(`Commons API ${res.status}`);
  return res.json();
}

function check(page, slot) {
  const ii = page?.imageinfo?.[0];
  if (!ii) return { ok: false, why: 'arquivo não encontrado' };
  const m = ii.extmetadata ?? {};
  const license = strip(m.LicenseShortName?.value);
  if (!license || FORBIDDEN.test(license) || !ALLOWED.test(license)) return { ok: false, why: `licença não permitida (${license || 'desconhecida'})` };
  if (!/image\/(jpeg|png|webp)/.test(ii.mime)) return { ok: false, why: `formato ${ii.mime}` };
  if (ii.width < slot.minWidth) return { ok: false, why: `resolução baixa (${ii.width}px)` };
  if (slot.orientation === 'landscape' && ii.width < ii.height * 1.15) return { ok: false, why: 'não é paisagem' };
  if (slot.orientation === 'portrait' && ii.height < ii.width) return { ok: false, why: 'não é retrato' };
  return {
    ok: true,
    info: {
      title: page.title.replace(/^File:/, ''),
      author: strip(m.Artist?.value) || 'Autor não informado',
      license,
      licenseUrl: m.LicenseUrl?.value ?? '',
      source: ii.descriptionurl,
      download: ii.thumburl ?? ii.url,
      width: ii.width,
      height: ii.height,
    },
  };
}

const IIPROPS = (w) => ({ prop: 'imageinfo', iiprop: 'url|size|mime|extmetadata', iiurlwidth: String(w) });

async function pick(slot, used) {
  for (const f of slot.files) {
    const data = await api({ action: 'query', titles: `File:${f}`, ...IIPROPS(slot.width) });
    const r = check(data.query?.pages?.[0], slot);
    if (r.ok) return r.info;
    console.log(`   · ${f}: ${r.why}`);
  }
  const searches = [slot.search, ...(altSearches[slot.out] ?? [])].filter(Boolean);
  for (const q of searches) {
    const data = await api({ action: 'query', generator: 'search', gsrnamespace: '6', gsrsearch: `${q} filetype:bitmap`, gsrlimit: '30', ...IIPROPS(slot.width) });
    const pages = (data.query?.pages ?? []).sort((a, b) => (a.index ?? 0) - (b.index ?? 0));
    for (const p of pages) {
      if (used.has(p.title)) continue; // evita repetir a mesma foto vinda da busca
      const r = check(p, slot);
      if (r.ok) return { ...r.info, viaSearch: true };
    }
  }
  return null;
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const previous = (await exists(creditsJson)) ? JSON.parse(await readFile(creditsJson, 'utf8')) : {};
  const credits = { ...previous };
  const pending = [];
  const used = new Set(Object.values(previous).map((c) => `File:${c.title}`));

  for (const slot of slots) {
    const file = join(outDir, `${slot.out}.webp`);
    if (!FORCE && (await exists(file)) && credits[slot.out]) { console.log(`✓ ${slot.out} (já existe)`); continue; }
    console.log(`→ ${slot.out}`);
    try {
      const info = await pick(slot, used);
      if (!info) { pending.push(`${slot.out}: nenhuma imagem com licença livre e qualidade suficiente`); continue; }
      const res = await politeFetch(info.download);
      if (!res.ok) throw new Error(`download ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await mkdir(dirname(file), { recursive: true });
      await sharp(buf).rotate().resize({ width: slot.width, withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(file);
      used.add(`File:${info.title}`);
      const { download, ...rest } = info;
      credits[slot.out] = { ...rest, path: `/images/${slot.out}.webp` };
      console.log(`   ✓ ${info.title} — ${info.author} — ${info.license}${info.viaSearch ? ' (busca)' : ''}`);
    } catch (e) {
      pending.push(`${slot.out}: ${e.message}`);
      console.log(`   ✗ ${e.message}`);
    }
  }

  if (CUTOUT && credits[cutout.from]) {
    try {
      const { removeBackground } = await import('@imgly/background-removal-node');
      const src = join(outDir, `${cutout.from}.webp`);
      const png = await sharp(src).png().toBuffer();
      const blob = await removeBackground(new Blob([png], { type: 'image/png' }));
      const outBuf = Buffer.from(await blob.arrayBuffer());
      await sharp(outBuf).trim().webp({ quality: 90, alphaQuality: 95 }).toFile(join(outDir, `${cutout.out}.webp`));
      credits[cutout.out] = { ...credits[cutout.from], path: `/images/${cutout.out}.webp`, note: 'Recorte do fundo feito a partir da foto original' };
      console.log(`✓ recorte do drone gerado (${cutout.out}.webp) — confira o resultado visualmente`);
    } catch (e) {
      pending.push(`recorte do drone: ${e.code === 'ERR_MODULE_NOT_FOUND' ? 'instale @imgly/background-removal-node' : e.message}`);
    }
  }

  await writeFile(creditsJson, JSON.stringify(credits, null, 2) + '\n');
  const rows = Object.entries(credits).map(([k, c]) => `| \`${c.path}\` | [${c.title}](${c.source}) | ${c.author} | ${c.licenseUrl ? `[${c.license}](${c.licenseUrl})` : c.license} |`);
  const md = `# Créditos das imagens\n\nGerado por \`npm run images\` em ${new Date().toLocaleString('pt-BR')}.\nTodas as imagens vêm do Wikimedia Commons, com licença livre verificada automaticamente (sem NC/ND).\nAs fotos são de referência: **não** são registros de atividades do grupo.\n\n| Arquivo | Original | Autor | Licença |\n|---|---|---|---|\n${rows.join('\n')}\n\n## Pendências\n\n${pending.length ? pending.map((p) => `- ${p}`).join('\n') : '- Nenhuma.'}\n\n## Reservado para fotos reais da equipe\n\n- \`/images/projeto-equipe.webp\`, \`/images/galeria/bastidores.webp\`, \`/images/galeria/equipe.webp\`\n`;
  await writeFile(creditsMd, md);
  console.log(`\n${Object.keys(credits).length} imagens com crédito registrado. Pendências: ${pending.length}`);
  if (pending.length) console.log(pending.map((p) => ` - ${p}`).join('\n'));
}

main().catch((e) => { console.error(e); process.exit(1); });
