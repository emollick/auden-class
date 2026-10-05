import { fetchText, gutenbergBody, verseBlocks, writeText, roman, pad2, toRoman } from '../lib/gutenberg.mjs';

const CANTICHE = [
  { key: 'inf', it: 'Inferno', en: 'Inferno' },
  { key: 'pur', it: 'Purgatorio', en: 'Purgatorio' },
  { key: 'par', it: 'Paradiso', en: 'Paradiso' },
];

function cut(lines, isHeading) {
  const parts = [];
  let cur = null;
  for (const line of lines) {
    const hd = isHeading(line);
    if (hd) {
      cur = { ...hd, lines: [] };
      parts.push(cur);
    } else if (cur) cur.lines.push(line);
  }
  return parts;
}

const RUNNING_TITLE = /^\s*(INFERNO|PURGATORIO|PARADISO|OR THE INFERNO)\s*$/;

function toParts(raw) {
  return raw.map((p) => {
    // Stop at anything that follows the poem: appendices, tables, licences.
    const stop = p.lines.findIndex((l) => /^\s*(APPENDIX|- - - -|End of Project Gutenberg)/.test(l));
    const lines = (stop >= 0 ? p.lines.slice(0, stop) : p.lines).filter((l) => !RUNNING_TITLE.test(l));
    const blocks = verseBlocks(lines)
      // a translator's footnote, set after the canto and marked with a star
      .filter((b) => !b.lines[0].startsWith('* '))
      .map((b) => ({ ...b, lines: b.lines.map((l) => l.replace(/\*$/, '')) }));
    return { id: `${p.key}-${pad2(p.n)}`, label: `${p.name} ${p.n}`, group: p.name, blocks };
  });
}

function check(id, parts) {
  if (parts.length !== 100) throw new Error(`${id}: expected 100 cantos, found ${parts.length}`);
  const counts = { inf: 0, pur: 0, par: 0 };
  for (const p of parts) counts[p.id.slice(0, 3)]++;
  if (counts.inf !== 34 || counts.pur !== 33 || counts.par !== 33) throw new Error(`${id}: canto counts ${JSON.stringify(counts)}`);
}

export function run() {
  const out = [];

  // Longfellow, 1867. Line for line with the Italian.
  {
    const body = gutenbergBody(fetchText('dante_longfellow.txt', 'https://www.gutenberg.org/cache/epub/1004/pg1004.txt'));
    const raw = cut(body, (l) => {
      const m = l.match(/^(Inferno|Purgatorio|Paradiso): Canto ([IVXLC]+)\s*$/);
      if (!m) return null;
      const c = CANTICHE.find((x) => x.en === m[1]);
      return { key: c.key, name: c.en, n: roman(m[2]) };
    });
    const parts = toParts(raw);
    check('longfellow', parts);
    out.push(writeText('dante-longfellow', {
      author: 'Dante Alighieri',
      title: 'The Divine Comedy',
      translator: 'Henry Wadsworth Longfellow',
      year: 1867,
      verse: true,
      readAs: 'dante',
      source: { name: 'Project Gutenberg, no. 1004', url: 'https://www.gutenberg.org/ebooks/1004' },
    }, parts));
  }

  // The Italian.
  {
    const body = gutenbergBody(fetchText('dante_italian.txt', 'https://www.gutenberg.org/cache/epub/1012/pg1012.txt'));
    const raw = cut(body, (l) => {
      const m = l.trim().match(/^(Inferno|Purgatorio|Paradiso) • Canto ([IVXLC]+)$/);
      if (!m) return null;
      const c = CANTICHE.find((x) => x.it === m[1]);
      return { key: c.key, name: c.it, n: roman(m[2]) };
    });
    const parts = toParts(raw);
    check('italian', parts);
    out.push(writeText('dante-italian', {
      author: 'Dante Alighieri',
      title: 'La Divina Commedia',
      translator: null,
      year: 1321,
      verse: true,
      readAs: 'dante',
      lang: 'it',
      source: { name: 'Project Gutenberg, no. 1012', url: 'https://www.gutenberg.org/ebooks/1012' },
    }, parts));
  }
  // Longfellow is line for line with the Italian, and every canto of
  // terza rima has 3n + 1 lines. If either fails, the cutting is wrong.
  const en = out[0].parts.map((p) => p.lines);
  const it = out[1].parts.map((p) => p.lines);
  en.forEach((n, i) => {
    if (n !== it[i] || n % 3 !== 1) throw new Error(`Dante: ${out[0].parts[i].id} has ${n} lines in Longfellow, ${it[i]} in the Italian`);
  });
  const total = it.reduce((a, b) => a + b, 0);
  if (total !== 14233) throw new Error(`Dante: ${total} lines, expected 14,233`);
  return out;
}
