// Look at a text as the site holds it.
// usage: node build/tools/show.mjs                           list the texts
//        node build/tools/show.mjs <textId>                  list the parts
//        node build/tools/show.mjs <textId> <partId> [a b]   print blocks a..b of a part with their numbers
//        node build/tools/show.mjs <textId> --grep <regex>   find blocks in any part
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.resolve(import.meta.dirname, '../../site/data/texts');
const [id, second, ...rest] = process.argv.slice(2);
if (!id) {
  for (const t of fs.readdirSync(OUT).sort()) {
    const f = path.join(OUT, t, 'index.json');
    if (!fs.existsSync(f)) continue;
    const ix = JSON.parse(fs.readFileSync(f, 'utf8'));
    const what = ix.original ? `passages cut from the original (${ix.lang || 'language not given'})` : `${ix.title} (${ix.author}${ix.translator ? `, tr. ${ix.translator}` : ''})`;
    console.log(`${t.padEnd(22)} ${String((ix.parts || []).length).padStart(4)} parts  ${what}`);
  }
  process.exit(0);
}
const dir = path.join(OUT, id);
const index = JSON.parse(fs.readFileSync(path.join(dir, 'index.json'), 'utf8'));
const load = (pid) => JSON.parse(fs.readFileSync(path.join(dir, `${pid}.json`), 'utf8'));
const cut = (s, n = 160) => (s.length > n ? `${s.slice(0, n)}…` : s);

function printBlock(b, i, full) {
  if (b.k === 'v') {
    console.log(`[${i}] v`);
    b.lines.forEach((l, j) => console.log(`      ${j}: ${full ? l : cut(l)}`));
  } else console.log(`[${i}] ${b.k}  ${full ? b.text : cut(b.text)}`);
}

if (!second) {
  console.log(`${index.title} (${index.author}${index.translator ? `, tr. ${index.translator}` : ''}): ${index.words} words, ${index.pages} pages`);
  for (const p of index.parts) console.log(`${p.id.padEnd(16)} ${String(p.words).padStart(7)} w ${String(p.lines || '').padStart(5)} l ${String(p.pages).padStart(6)} pp  ${p.group ? p.group + ' / ' : ''}${p.label}`);
} else if (second === '--grep') {
  const re = new RegExp(rest[0], rest[1] || 'i');
  for (const meta of index.parts) {
    const part = load(meta.id);
    part.blocks.forEach((b, i) => {
      const hay = b.k === 'v' ? b.lines.join('\n') : b.text;
      if (re.test(hay)) { console.log(`--- ${meta.id}`); printBlock(b, i, false); }
    });
  }
} else {
  const part = load(second);
  const a = rest[0] !== undefined ? Number(rest[0]) : 0;
  const b = rest[1] !== undefined ? Number(rest[1]) : Math.min(part.blocks.length - 1, a + 40);
  console.log(`${second}: ${part.blocks.length} blocks`);
  for (let i = a; i <= b && i < part.blocks.length; i++) printBlock(part.blocks[i], i, true);
}
