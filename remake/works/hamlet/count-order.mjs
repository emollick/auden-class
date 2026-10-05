// Hamlet's part in the order he speaks it: runs of verse and of prose, scene by scene.
// The artist's count for the Shape drawing of the third passage (see art.md).
//
//   node remake/works/hamlet/count-order.mjs            print the runs and check them against the reading's facts
//   node remake/works/hamlet/count-order.mjs --json     print the value of the facts key "inOrder"
//
// The rule for a word is the poet's (notes.md, section 8): a word is what stands
// between spaces or long dashes; verse and prose are as the hosted text sets them.
// It reads site/data/texts/hamlet/ and remake/works/hamlet/reading.json and writes nothing.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '../../..');
const TEXT = path.join(ROOT, 'site/data/texts/hamlet');
const reading = JSON.parse(fs.readFileSync(path.join(ROOT, 'remake/works/hamlet/reading.json'), 'utf8'));
const facts = reading.plates.find((p) => p.id === 'readiness').lenses.find((l) => l.kind === 'shape').facts;
const idx = JSON.parse(fs.readFileSync(path.join(TEXT, 'index.json'), 'utf8'));
const toks = (s) => String(s).split(/[\s—]+/).filter(Boolean);
const words = (s) => toks(s).length;

// the seven speeches to himself and this speech, by the blocks the reading's facts name
const blocksOf = (s) => { const m = String(s).match(/^(a\d+s\d+):(\d+)(?: and a\d+s\d+:(\d+))?$/); return { part: m[1], blocks: [m[2], m[3]].filter(Boolean).map(Number) }; };
const alone = facts.soliloquies.map((s) => ({ ...blocksOf(s.block), words: s.words, place: s.place }));
const here = blocksOf(facts.thisSpeech.block);

const out = [];
const sums = [];
for (const part of idx.parts) {
  const p = JSON.parse(fs.readFileSync(path.join(TEXT, `${part.id}.json`), 'utf8'));
  const m = part.id.match(/^a(\d+)s(\d+)$/);
  const scene = `${m[1]}.${m[2]}`;
  const solo = alone.find((a) => a.part === part.id);
  const runs = [];
  const push = (kind, n, mark, block) => {
    if (!n) return;
    const last = runs[runs.length - 1];
    if (last && last.kind === kind && !last.mark && !mark) { last.words += n; return; }
    if (last && mark && last.mark === mark) { last.words += n; return; } // one speech set as two blocks
    runs.push({ scene, kind, words: n, ...(mark ? { mark, block } : {}) });
  };
  let who = null; let vl = 0; let vw = 0; let pw = 0;
  p.blocks.forEach((b, i) => {
    if (b.k === 's') { who = b.text; return; }
    if (who !== 'HAMLET' || (b.k !== 'v' && b.k !== 'p')) return;
    const kind = b.k === 'v' ? 'verse' : 'prose';
    const n = b.k === 'v' ? b.lines.reduce((t, l) => t + words(l), 0) : words(b.text);
    if (b.k === 'v') { vl += b.lines.length; vw += n; } else pw += n;
    if (solo && solo.blocks.includes(i)) {
      // the speech to himself may stop inside the block (Act 3, Scene 1): its words are in the facts
      const left = solo.words - runs.filter((r) => r.mark === 'toHimself').reduce((t, r) => t + r.words, 0);
      const take = Math.min(n, left);
      push(kind, take, 'toHimself', solo.blocks[0]);
      push(kind, n - take);
    } else if (here.part === part.id && here.blocks.includes(i)) push(kind, n, 'thisSpeech', i);
    else push(kind, n);
  });
  if (!runs.length) continue;
  sums.push([scene, vl, vw, pw]);
  for (const r of runs) {
    const e = { scene: r.scene, kind: r.kind, words: r.words };
    if (r.mark) { e[r.mark] = true; e.read = `hamlet/${part.id}:${r.block}`; }
    out.push(e);
  }
}

if (process.argv.includes('--json')) { console.log(JSON.stringify(out)); process.exit(0); }

// ----- the checks -----
let bad = 0;
const check = (ok, what) => { console.log(`${ok ? 'ok ' : 'NO '} ${what}`); if (!ok) bad++; };
for (const s of sums) console.log(s[0].padEnd(4), out.filter((r) => r.scene === s[0]).map((r) => `${r.kind[0]}${r.words}${r.toHimself ? '*' : ''}${r.thisSpeech ? '!' : ''}`).join(' '));
console.log(`${out.length} runs in ${sums.length} scenes (* a speech to himself, ! this speech)`);
check(JSON.stringify(sums) === JSON.stringify(facts.hamletByScene), 'lines of verse, words of verse and words of prose by scene equal hamletByScene');
const by = (scene, kind) => out.filter((r) => r.scene === scene && r.kind === kind).reduce((t, r) => t + r.words, 0);
check(facts.hamletByScene.every((s) => by(s[0], 'verse') === s[2] && by(s[0], 'prose') === s[3]), 'the runs of each scene add up to its words of verse and of prose');
const solos = out.filter((r) => r.toHimself);
check(solos.length === facts.soliloquies.length && solos.every((r, i) => r.words === facts.soliloquies[i].words && r.kind === 'verse' && facts.soliloquies[i].place === `Act ${r.scene.split('.')[0]}, Scene ${r.scene.split('.')[1]}`), `the ${solos.length} speeches to himself have the words and the places of the facts, and all are verse`);
const it = out.filter((r) => r.thisSpeech);
check(it.length === 1 && it[0].words === facts.thisSpeech.words && it[0].kind === 'prose', 'this speech is one run of prose with the words of the facts');
const after = out.slice(out.indexOf(it[0]) + 1);
check(after.length > 0 && after.every((r) => r.kind === 'verse'), `every run after this speech is verse (${after.length} run${after.length === 1 ? '' : 's'}, ${after.reduce((t, r) => t + r.words, 0)} words)`);
const total = out.reduce((t, r) => t + r.words, 0);
check(total === facts.totals.verseWords + facts.totals.proseWords, `all the runs: ${total} words, the totals of the facts`);
if (facts.inOrder) check(JSON.stringify(facts.inOrder) === JSON.stringify(out), 'the facts key inOrder is this count');
else console.log('    the reading has no facts key inOrder yet');
console.log(bad ? `${bad} thing${bad === 1 ? '' : 's'} wrong` : 'all as counted');
process.exit(bad ? 2 : 0);
