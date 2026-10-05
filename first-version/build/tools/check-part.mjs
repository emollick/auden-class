// Check the tests and missing words written for one week, before the week
// itself is written.
//
//   node build/tools/check-part.mjs content/units/parts/02.mjs [--quiet]
//
// The file exports default { words, test }. Every passage is cut and
// printed so that it can be read; problems are listed at the end.

import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { cutter } from '../lib/cut.mjs';

const ROOT = path.resolve(import.meta.dirname, '../..');
const problems = [];
const fail = (m) => problems.push(m);
const { cut, cloze } = cutter(path.join(ROOT, 'site/data/texts'), fail);
const file = process.argv[2];
const quiet = process.argv.includes('--quiet');
if (!file) { console.error('usage: node build/tools/check-part.mjs content/units/parts/NN.mjs'); process.exit(2); }
const mod = (await import(pathToFileURL(path.resolve(file)).href)).default;
const works = new Set((await import(pathToFileURL(path.join(ROOT, 'content/works.mjs')).href)).default.map((w) => w.id));

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
const SMALL = new Set('the a an and or but of to in on at by for with from as is are was were be been it its he she they we you i his her their our your my me him them this that these those not no nor so if then than there here who whom which what when where why how all any each some shall will would should can could may might must do does did have has had o oh'.split(' '));

if (mod.words) {
  const w = mod.words;
  const what = 'missing words';
  try {
    const c = cloze(w, what);
    if (!/^w\d\d$/.test(w.id || '')) fail(`${what}: id should be like w02`);
    if (!w.cite) fail(`${what}: no cite`);
    if (!w.setting) fail(`${what}: no setting`);
    const rows = c.lines.filter((l) => l.length);
    const count = c.verse ? rows.length : rows.map((r) => r.map((x) => (typeof x === 'number' ? 'x' : x)).join('')).join(' ').split(/\s+/).length;
    if (c.verse && (rows.length < 10 || rows.length > 44)) fail(`${what}: ${rows.length} lines of verse (want 10 to 44)`);
    if (!c.verse && (count < 120 || count > 320)) fail(`${what}: ${count} words of prose (want 120 to 320)`);
    if (c.blanks.length < 7 || c.blanks.length > 12) fail(`${what}: ${c.blanks.length} blanks (want 7 to 12)`);
    for (const b of c.blanks) {
      if (SMALL.has(b.toLowerCase())) fail(`${what}: "${b}" is too small a word to leave out`);
      if (/\s/.test(b)) fail(`${what}: "${b}" is more than one word`);
    }
    const seen = new Set();
    for (const b of c.blanks) { if (seen.has(b.toLowerCase())) fail(`${what}: "${b}" is left out twice`); seen.add(b.toLowerCase()); }
    if (w.setting) for (const b of c.blanks) if (b.length > 3 && new RegExp(`\\b${b}\\b`, 'i').test(w.setting)) fail(`${what}: the setting gives away "${b}"`);
    if (!quiet) {
      console.log(`== MISSING WORDS ${w.id}: ${c.where} (${c.verse ? rows.length + ' lines' : count + ' words'}, ${c.blanks.length} blanks)`);
      console.log(`   setting: ${w.setting}`);
      console.log(`   cite: ${w.cite}`);
      for (const l of c.lines) console.log('   | ' + l.map((x) => (typeof x === 'number' ? `[${c.blanks[x]}]` : x)).join(''));
      if (w.after) console.log(`   after: ${[].concat(w.after).join(' / ')}`);
    }
  } catch (err) { fail(`${what}: ${err.message}`); }
}

if (mod.test) {
  const ids = new Set();
  let spots = 0;
  let facts = 0;
  const perWork = {};
  mod.test.items.forEach((item, i) => {
    const what = `test ${i + 1} (${item.id})`;
    if (!/^t\d\d-\d+$/.test(item.id || '') || ids.has(item.id)) fail(`${what}: id missing, repeated or not like t02-1`);
    ids.add(item.id);
    if (item.kind === 'spot') {
      spots++;
      perWork[item.work] = (perWork[item.work] || 0) + 1;
      if (!works.has(item.work)) fail(`${what}: unknown work ${item.work}`);
      if (!Array.isArray(item.speaker) || !item.speaker.length) fail(`${what}: speaker must be a list of accepted answers`);
      if (!item.ask) fail(`${what}: no ask`);
      try {
        const c = cut(item.cut, what);
        const text = (c.lines || c.paras).join('\n');
        const nLines = (c.lines || []).filter((l) => l).length;
        const nWords = text.split(/\s+/).length;
        if (c.lines && (nLines < 2 || nLines > 12)) fail(`${what}: ${nLines} lines (want 2 to 12)`);
        if (nWords > 130) fail(`${what}: ${nWords} words (want 130 at most)`);
        if (nWords < 12) fail(`${what}: ${nWords} words is too short to place`);
        const hay = ' ' + norm(text) + ' ';
        for (const a of item.speaker || []) {
          const n = norm(a);
          if (n && hay.includes(' ' + n + ' ')) fail(`${what}: the passage contains the answer "${a}"`);
        }
        if (!quiet) {
          console.log(`\n== ${item.id} SPOT ${item.work} — ${item.where || c.where} — ${c.lines ? nLines + ' lines' : nWords + ' words'}`);
          for (const l of c.lines || c.paras) console.log('   | ' + l);
          console.log(`   ${item.ask}  ->  ${(item.speaker || []).join(' | ')}${item.speakerShown ? `   (shown: ${item.speakerShown})` : ''}`);
          if (item.note) console.log(`   note: ${item.note}`);
        }
      } catch (err) { fail(`${what}: ${err.message}`); }
    } else if (item.kind === 'fact') {
      facts++;
      if (!item.q || !Array.isArray(item.a) || !item.a.length) fail(`${what}: a fact needs q and a list of accepted answers`);
      if (!item.where) fail(`${what}: say where in the book the answer is (where)`);
      for (const a of item.a || []) if (norm(a) && (' ' + norm(item.q || '') + ' ').includes(' ' + norm(a) + ' ')) fail(`${what}: the question contains the answer "${a}"`);
      if (!quiet) console.log(`\n== ${item.id} FACT ${item.q}\n   ->  ${(item.a || []).join(' | ')}${item.shown ? `   (shown: ${item.shown})` : ''}   [${item.where}]`);
    } else fail(`${what}: kind must be spot or fact`);
  });
  // Where the week offers a choice of books, each student sees the items
  // without a condition and those for the book chosen.
  const options = [...new Set(mod.test.items.filter((x) => x.ifChoice).map((x) => x.ifChoice[1]))];
  for (const opt of options.length ? options : [null]) {
    const seen = mod.test.items.filter((x) => !x.ifChoice || x.ifChoice[1] === opt);
    const s = seen.filter((x) => x.kind === 'spot').length;
    const f = seen.filter((x) => x.kind === 'fact').length;
    const who = opt ? ` for ${opt}` : '';
    if (s < 6 || s > 8) fail(`test: ${s} passages${who} (want 6 to 8)`);
    if (f < 6 || f > 8) fail(`test: ${f} facts${who} (want 6 to 8)`);
    if (!quiet) console.log(`\n${s} passages, ${f} facts${who}`);
  }
  if (!quiet) console.log(`passages by book: ${Object.entries(perWork).map(([k, v]) => `${k} ${v}`).join(', ')}`);
}

if (problems.length) {
  console.log(`\n${problems.length} PROBLEMS`);
  for (const x of problems) console.log(`  ${x}`);
  process.exit(1);
}
console.log('\nno problems');
