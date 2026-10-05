// The order in which Othello and Iago speak their verse and prose, act by act,
// counted on the hosted text. It prints numbers and places only, never the text.
//
//   node remake/works/othello/count-order.mjs            the runs, the checks, and the two keys as JSON
//
// The counting is the poet's (reading.json, plate "lie", lens "Play", facts.counted):
// verse and prose as the text prints them; a word is what stands between spaces
// or dashes; a speech is one turn under a speaker's name. A run is an unbroken
// stretch of one man's verse, or of his prose, inside one act; what other people
// say in between does not break it. Othello's prose is further divided at the
// four places that facts.othelloProse already names (by their "read").

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '../../..');
const DIR = path.join(ROOT, 'site/data/texts/othello');
const reading = JSON.parse(fs.readFileSync(path.join(ROOT, 'remake/works/othello/reading.json'), 'utf8'));
const facts = reading.plates.find((p) => p.id === 'lie').lenses.find((l) => l.kind === 'shape').facts;
const index = JSON.parse(fs.readFileSync(path.join(DIR, 'index.json'), 'utf8'));
const words = (s) => String(s).split(/[\s—–]+|--+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;

function runsOf(name, cuts = []) {
  const out = [];
  for (const p of index.parts) {
    const part = JSON.parse(fs.readFileSync(path.join(DIR, `${p.id}.json`), 'utf8'));
    let who = null;
    part.blocks.forEach((b, i) => {
      if (b.k === 's') { who = String(b.text).trim().replace(/\.$/, '').toLowerCase(); return; }
      if ((b.k !== 'v' && b.k !== 'p') || who !== name.toLowerCase()) return;
      const kind = b.k === 'v' ? 'verse' : 'prose';
      const n = b.k === 'v' ? b.lines.reduce((t, l) => t + words(l), 0) : words(b.text);
      const lines = b.k === 'v' ? b.lines.length : 0;
      const last = out[out.length - 1];
      const cut = cuts.includes(`${p.id}:${i}`);
      if (last && last.act === p.group && last.kind === kind && !cut) {
        last.words += n; last.lines += lines;
        const seg = last.where[last.where.length - 1];
        if (seg.part === p.id) seg.to = i; else last.where.push({ part: p.id, from: i, to: i });
      } else out.push({ act: p.group, kind, words: n, lines, where: [{ part: p.id, from: i, to: i }] });
    });
  }
  return out.map((r) => ({ act: r.act, kind: r.kind, words: r.words, blocks: r.where.map((s) => `${s.part} ${s.from}${s.to > s.from ? ` to ${s.to}` : ''}`).join('; ') }));
}

const cutsOf = (list) => (list || []).map((p) => String(p.read || '').replace(/^othello\//, '')).filter(Boolean);
const out = { othelloInOrder: runsOf('Othello', cutsOf(facts.othelloProse)), iagoInOrder: runsOf('Iago') };

// the checks: every sum must be the figure the reading already holds
let bad = 0;
const check = (what, got, want) => { const ok = got === want; if (!ok) bad++; console.log(`${ok ? 'ok ' : 'NO '} ${what}: ${got}${ok ? '' : ` (the reading has ${want})`}`); };
for (const [key, name] of [['othelloInOrder', 'Othello'], ['iagoInOrder', 'Iago']]) {
  for (const a of facts.acts) {
    const of = out[key].filter((r) => r.act === a.act);
    if (!of.length) continue;
    for (const kind of ['verse', 'prose']) check(`${name}, ${a.act}, words of ${kind}`, of.filter((r) => r.kind === kind).reduce((t, r) => t + r.words, 0), a[`${name} ${kind} words`]);
  }
}
const o = out.othelloInOrder; const first = o.findIndex((r) => r.kind === 'prose');
check('Othello, words of verse before his first prose', o.slice(0, first).reduce((t, r) => t + r.words, 0), facts.othelloBeforeThisPassage['verse words']);
o.filter((r) => r.kind === 'prose').forEach((r, i) => check(`Othello, prose place ${i + 1}`, r.words, (facts.othelloProse[i] || {}).words));
console.log(`${out.othelloInOrder.length} runs for Othello, ${out.iagoInOrder.length} for Iago; ${bad ? `${bad} sums do not agree` : 'every sum agrees with the reading'}`);
console.log(Object.entries(out).map(([k, v]) => `"${k}": [\n${v.map((r) => `  ${JSON.stringify(r)}`).join(',\n')}\n]`).join(',\n'));
