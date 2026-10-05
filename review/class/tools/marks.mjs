// For one passage of a piece: its rows (id, kind, how many words, who speaks) and, for each tab, the rows its marks stand on.
// Prints no words of any work except speakers' names.
//   node review/class/tools/marks.mjs othello echo
import fs from 'node:fs';
const [id, pl] = process.argv.slice(2);
const p = JSON.parse(fs.readFileSync(`site/data/pieces/${id}.json`, 'utf8'));
const plate = p.plates.find((x) => x.id === pl);
const span = (w) => (Array.isArray(w) ? `${w[0]}-${w[w.length - 1]}` : String(w));
console.log(`${id}/${pl}: ${plate.heading}`);
console.log('rows: ' + plate.rows.map((r) => (r.aside ? `[${r.aside}:${r.aside === 's' ? (r.t || r.text || '') : ''}]` : `${r.id}(${r.kind || 'p'},${(r.last - r.first + 1)}w)`)).join(' '));
plate.lenses.forEach((l, i) => {
  let marks = '';
  if (l.kind === 'figure') marks = (l.parts || []).map((x) => `${x.row}:${span(x.w)}#${x.tag}`).join(' ');
  else if (l.kind === 'word') marks = (l.notes || []).map((x) => `${x.row}:${span(x.w)}`).join(' ');
  else if (l.kind === 'sentence') marks = (l.spans || []).map((x) => `${x.from[0]}:${x.from[1]}..${x.to[0]}:${x.to[1]}#${x.tag}`).join(' ');
  else if (l.kind === 'beat') marks = Object.keys(l.scan || {}).join(' ');
  else if (l.kind === 'rhyme') marks = Object.entries(l.ends || {}).map(([r, e]) => `${r}=${e}`).join(' ');
  else if (l.kind === 'compare') marks = (l.ties || []).map((t) => `${t.a && t.a[0]}~${t.b && t.b[0]}`).join(' ');
  console.log(`  ${i} ${l.kind} "${l.label || ''}"${l.name ? ` (${l.name})` : ''}: ${marks}`);
});
