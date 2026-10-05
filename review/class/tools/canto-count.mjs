// Counts the words of parts of a hosted text without printing any of it.
//   node review/class/tools/canto-count.mjs dante-temple inf-03 inf-05 pur-28 par-33
import fs from 'node:fs';
const [text, ...parts] = process.argv.slice(2);
let total = 0;
const strip = (s) => String(s).replace(/<[^>]+>/g, ' ');
const words = (s) => (strip(s).match(/[A-Za-zÀ-ÿ’'’-]+/g) || []).length;
for (const part of parts) {
  const f = `site/data/texts/${text}/${part}.json`;
  if (!fs.existsSync(f)) { console.log(`${part}: NO SUCH PART`); continue; }
  const j = JSON.parse(fs.readFileSync(f, 'utf8'));
  const blocks = j.blocks || j.paras || [];
  let n = 0, kinds = {};
  for (const b of blocks) {
    const k = b.kind || b.type || (typeof b === 'string' ? 'string' : 'obj');
    kinds[k] = (kinds[k] || 0) + 1;
    if (typeof b === 'string') n += words(b);
    else if (b.rows) for (const r of b.rows) n += words(typeof r === 'string' ? r : (r.text || r.t || ''));
    else n += words(b.text || b.t || '');
  }
  total += n;
  console.log(`${part}: keys ${Object.keys(j).join(',')} | blocks ${blocks.length} | kinds ${JSON.stringify(kinds)} | words ${n}`);
}
console.log(`total ${total}; a fifth of the same average length: ${Math.round(total / parts.length * (parts.length + 1))}; per minute over 180: ${(total / parts.length * (parts.length + 1) / 180).toFixed(1)}`);
