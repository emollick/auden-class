// lists every plate that holds two passages, and on which tabs the second is not marked (numbers and labels only)
import fs from 'node:fs';
const dir = 'site/data/pieces';
const second = (id) => String(id).startsWith('p:');
const marksWhere = (lens, is, pins = true, ends = true) => Object.keys(lens.scan || {}).some(is) || (ends && Object.keys(lens.ends || {}).some(is))
  || (lens.parts || []).some((x) => is(x.row)) || (lens.notes || []).some((x) => is(x.row))
  || (lens.spans || []).some((x) => is(x.from[0]) || is(x.to[0]))
  || (lens.ties || []).some((x) => (x.a && is(x.a[0])) || (x.b && is(x.b[0])))
  || (pins && (lens.points || []).some((x) => x.at && is(x.at[0])))
  || (lens.threads || []).some((t) => (t.at || []).some((x) => is(x[0])));
for (const f of fs.readdirSync(dir).sort()) {
  if (f === 'index.json') continue;
  const piece = JSON.parse(fs.readFileSync(`${dir}/${f}`, 'utf8'));
  for (const plate of piece.plates || []) {
    if (!plate.pair) continue;
    const textRows = (plate.rows || []).filter((r) => !r.aside);
    const pairRows = plate.pair.rows || [];
    const interlinear = !plate.beside && plate.under !== false && pairRows.length === textRows.length;
    const twin = !!plate.beside;
    const sameLang = (plate.pair.lang || 'en') === (plate.lang || 'en');
    const other = !interlinear && !twin && sameLang;
    const peers = twin && sameLang;
    const kind = interlinear ? 'interlinear' : twin ? (peers ? 'twin-same' : 'twin-2lang') : other ? 'other-same' : 'version';
    const tabs = plate.lenses.map((l) => `${(l.label || l.kind || '?').slice(0, 10)}${marksWhere(l, second) ? '*' : ''}${l.own || l.draw ? '~' : ''}`);
    console.log(`${piece.id.padEnd(18)} ${String(plate.id).padEnd(12)} ${kind.padEnd(12)} ${(plate.lang || 'en')}>${(plate.pair.lang || 'en')} rows ${String(textRows.length).padStart(3)}/${String(pairRows.length).padStart(3)}  ${tabs.join(' | ')}`);
  }
}
