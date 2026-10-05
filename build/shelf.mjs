// The shelf and the about page as data: the 1941 list with what is printed
// here, the length of each copy, and the pieces that open each work.
//
//   node build/shelf.mjs     writes site/data/shelf.json and site/data/about.json
//
// build/pieces.mjs runs this after the pieces are built.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const TEXTS = path.join(ROOT, 'site/data/texts');
const OUT = path.join(ROOT, 'site/data');

export async function buildShelf() {
  const problems = [];
  const works = (await import('../content/works.mjs')).default;
  const words = (await import('../content/shelf.mjs')).default;
  const about = (await import('../content/about.mjs')).default;
  const records = (await import('../content/records.mjs')).default;
  const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'remake/pieces.json'), 'utf8'));
  const indexFile = path.join(OUT, 'pieces/index.json');
  const built = new Map((fs.existsSync(indexFile) ? JSON.parse(fs.readFileSync(indexFile, 'utf8')) : []).map((p) => [p.id, p]));
  const textIndex = (id) => { const f = path.join(TEXTS, id, 'index.json'); return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null; };

  const texts = {};
  let pages = 0;
  const out = works.map((w) => {
    const row = { id: w.id, kind: w.kind, author: w.author, title: w.title, set: w.set || '', or: !!w.or, omit: !!w.omit, copy: w.copy || '' };
    if (/\b(week|test)s?\b/i.test(row.copy)) problems.push(`shelf: the note on ${w.id} still speaks of weeks or tests`);
    row.texts = (w.texts || []).map((id, i) => {
      const idx = textIndex(id);
      if (!idx) { problems.push(`shelf: ${w.id} names the text ${id}, which is not hosted`); return null; }
      texts[id] = { work: w.id, label: (w.textLabels || [])[i] || '' };
      return { id, label: (w.textLabels || [])[i] || '', translator: idx.translator || null, year: idx.year || null, pages: idx.pages || null, lang: idx.lang || 'en' };
    }).filter(Boolean);
    if (w.kind !== 'critical') {
      row.pages = row.texts.length ? row.texts[0].pages : null;
      pages += row.pages || 0;
      // where the translation the list names, or the whole book, can be borrowed
      if (w.borrow) row.borrow = /^https:\/\/\S+$/.test(w.borrow) ? words.labels.borrow.replace('{url}', w.borrow) : w.borrow;
      row.pieces = manifest.filter((p) => p.work === w.id).map((p) => (built.has(p.id) ? { id: p.id, title: built.get(p.id).title } : null)).filter(Boolean);
      const rec = records.find((r) => r.work === w.id);
      if (rec) row.record = { file: rec.file, title: rec.title, performers: rec.performers, credit: rec.credit };
    }
    return row;
  });
  // where each piece's plates open the books: text/part -> [{ piece, title, block }]
  const opened = {};
  const hay = [];
  for (const p of manifest) {
    const f = path.join(OUT, 'pieces', `${p.id}.json`);
    if (!built.has(p.id) || !fs.existsSync(f)) continue;
    const raw = fs.readFileSync(f, 'utf8');
    hay.push(raw);
    const piece = JSON.parse(raw);
    for (const plate of piece.plates || []) {
      if (!plate.src) continue;
      const first = (plate.rows || []).find((r) => r.id !== undefined || r.b !== undefined);
      const block = first ? (first.b !== undefined ? first.b : parseInt(first.id, 10)) : 0;
      const list = (opened[plate.src] = opened[plate.src] || []);
      if (!list.some((o) => o.piece === piece.id && o.block === block)) list.push({ piece: piece.id, title: piece.title, block: Number.isFinite(block) ? block : 0 });
    }
  }

  // "Works cited" keeps an entry only while the site cites it: on the about
  // page, on the shelf, on the class page or in a piece
  const works_cited = about.sections.find((s) => s.sources);
  if (works_cited) {
    const said = [];
    JSON.stringify({ lede: about.lede, sections: about.sections.filter((s) => s !== works_cited) }, (k, v) => { if (typeof v === 'string') said.push(v); return v; });
    const haystack = [...said, ...out.map((w) => w.copy), ...hay, JSON.stringify((await import('../content/class.mjs')).default)].join('\n');
    works_cited.sources = works_cited.sources.filter((entry) => {
      const row = (about.citedBy || []).find(([start]) => entry.startsWith(start));
      if (!row) { problems.push(`about: no way to tell whether this is still cited: ${entry.slice(0, 60)}`); return true; }
      return row[1].some((key) => haystack.includes(key));
    });
  }
  const { citedBy, ...aboutOut } = about;

  const round = (n) => Math.round(n / 100) * 100;
  const shelf = { ...words, case: { ...words.case, note: words.case.note.replace('{pages}', round(pages).toLocaleString('en-US')) }, works: out, texts, opened, pages };
  fs.writeFileSync(path.join(OUT, 'shelf.json'), `${JSON.stringify(shelf)}\n`);
  const fill = (s) => String(s).replace('{pages}', round(pages).toLocaleString('en-US'));
  fs.writeFileSync(path.join(OUT, 'about.json'), `${JSON.stringify(aboutOut, (k, v) => (typeof v === 'string' ? fill(v) : v))}\n`);
  console.log(`shelf: ${out.filter((w) => w.kind === 'required').length} required, ${out.filter((w) => w.kind === 'opera').length} operas, ${out.filter((w) => w.kind === 'critical').length} of criticism; ${Object.keys(texts).length} texts; ${pages} pages`);
  return problems;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  const problems = await buildShelf();
  if (problems.length) { console.log(`PROBLEMS\n  ${problems.join('\n  ')}`); process.exit(2); }
}
