// Sets the printers' apostrophe for the typewriter's in the passages hosted in their own language (the texts
// named o-...), where build/lib/typeset.mjs already says that every single mark is an apostrophe. Only that mark
// is changed: lines, paragraphs and labels keep every other character. (The tool that sets all printers' marks,
// build/tools/typeset-texts.mjs, would also set English double marks in a German text.)
//   node review/phone/tools/apostrophes.mjs [--dry] <text id> ...
// Prints counts only.
import fs from 'node:fs'; import path from 'node:path';
import { SINGLE } from '../../../build/lib/typeset.mjs';
const args = process.argv.slice(2); const dry = args.includes('--dry');
const OUT = path.resolve(import.meta.dirname, '../../../site/data/texts');
let total = 0;
for (const id of args.filter((a) => !a.startsWith('--'))) {
  if (!id.startsWith('o-') || SINGLE[id] !== 'apostrophes') { console.log(`${id}: left alone (not a passage in its own language whose single marks are all apostrophes)`); continue; }
  const dir = path.join(OUT, id);
  for (const f of fs.readdirSync(dir).sort()) {
    const file = path.join(dir, f); const j = JSON.parse(fs.readFileSync(file, 'utf8'));
    let n = 0;
    const set = (s) => { if (typeof s !== 'string') return s; const k = (s.match(/'/g) || []).length; n += k; return k ? s.replace(/'/g, '’') : s; };
    const label = (o) => { for (const k of ['label', 'group']) if (typeof o[k] === 'string') o[k] = set(o[k]); };
    if (f === 'index.json') (j.parts || []).forEach(label);
    else { label(j); for (const b of j.blocks || []) { if (Array.isArray(b.lines)) b.lines = b.lines.map(set); if (typeof b.text === 'string') b.text = set(b.text); } }
    if (n) { console.log(`${id}/${f}: ${n} set`); total += n; if (!dry) fs.writeFileSync(file, f === 'index.json' ? `${JSON.stringify(j, null, 1)}\n` : `${JSON.stringify(j)}\n`); }
  }
}
console.log(`${total} apostrophes ${dry ? 'would be' : ''} set`);
