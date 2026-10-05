// Set printers' quotation marks and dashes in the books already built
// (site/data/texts), without building them again. The same is done by
// writeText whenever a book is built.
// usage: node build/tools/typeset-texts.mjs [--dry] [textId ...]
import fs from 'node:fs';
import path from 'node:path';
import { typeset, typesetBlocks, SINGLE } from '../lib/typeset.mjs';

const OUT = path.resolve(import.meta.dirname, '../../site/data/texts');
const args = process.argv.slice(2);
const dry = args.includes('--dry');
const ids = args.filter((a) => !a.startsWith('--'));
for (const id of ids.length ? ids : fs.readdirSync(OUT).sort()) {
  const dir = path.join(OUT, id);
  const single = SINGLE[id];
  const odd = [];
  let changed = 0;
  for (const f of fs.readdirSync(dir)) {
    const file = path.join(dir, f);
    const j = JSON.parse(fs.readFileSync(file, 'utf8'));
    let n = 0;
    const label = (o) => { for (const k of ['label', 'group']) if (typeof o[k] === 'string') { const t = typeset(o[k], single, odd); if (t !== o[k]) { o[k] = t; n++; } } };
    if (f === 'index.json') j.parts.forEach(label);
    else { label(j); n += typesetBlocks(j.blocks, single, odd); }
    if (n && !dry) fs.writeFileSync(file, JSON.stringify(j));
    changed += n;
  }
  if (changed || odd.length) console.log(`${id}: ${changed} strings set${single ? ` (${single})` : ''}${odd.length ? `; ${odd.length} decided by count` : ''}`);
  for (const o of odd.slice(0, 20)) console.log(`    ${JSON.stringify(o)}`);
}
