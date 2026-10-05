// Scan lines of hosted Latin verse by long and short syllables, so that a
// reading can mark them without the lines being copied out by hand.
//
//   node build/tools/latin.mjs <textId> <partId> <firstBlock> [lastBlock] --meter alcaic
//
//   --meter   the pattern of each row of a stanza in turn:
//               alcaic     (alc11, alc11, alc9, alc10)
//               sapphic    (sapph, sapph, sapph, adon)
//               a list of line names:  ascl,ascl,pher,glyc    glyc,ascl    ascl    asclmaj
//               or of patterns written out:  "-u---uu-u-x,-uu-x"
//             In a pattern - is a long place, u a short one, x a place left free.
//   --from n  the row of its block where the first stanza begins (default 0)
//
// For each row it prints the words numbered and divided, which final syllables
// run into the next word and are not counted, whether the count fits the
// pattern, every place where the pattern needs a short syllable and the
// syllable is closed or a diphthong (a sign that the division, the pattern or
// the text is not what was assumed), and the row's "scan" entry for a beat
// lens, in two forms: the voice by length, and the voice by the stress of
// each word. It cannot know a vowel's own length: where that decides, it says so.

import fs from 'node:fs';
import path from 'node:path';
import { tokens, syllables, latinGroups, latinUnits, latinMuteLiquid } from '../../site/js/kit/syllables.js';

const TEXTS = path.resolve(import.meta.dirname, '../../site/data/texts');

export const LINES = {
  alc11: 'x-u---uu-ux', // Alcaic line of eleven syllables
  alc9: 'x-u---u-x', // Alcaic line of nine
  alc10: '-uu-uu-u-x', // Alcaic line of ten
  sapph: '-u---uu-u-x', // Sapphic line of eleven
  adon: '-uu-x', // Adonic, the short fourth line of the Sapphic stanza
  ascl: '---uu--uu-ux', // lesser Asclepiad, twelve
  glyc: '---uu-ux', // Glyconic, eight
  pher: '---uu-x', // Pherecratean, seven
  asclmaj: '---uu--uu--uu-ux', // greater Asclepiad, sixteen
};
export const STANZAS = { alcaic: ['alc11', 'alc11', 'alc9', 'alc10'], sapphic: ['sapph', 'sapph', 'sapph', 'adon'] };

export function patternsOf(meter) {
  if (!meter) return null;
  const names = STANZAS[meter] || meter.split(',').map((s) => s.trim()).filter(Boolean);
  return names.map((n) => {
    const p = LINES[n] || n;
    if (!/^[-ux]+$/.test(p)) throw new Error(`"${n}" is not a line name (${Object.keys(LINES).join(', ')}) or a pattern of - u x`);
    return { name: LINES[n] ? n : 'pattern', pattern: p };
  });
}

const letters = (tok) => tok.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, '').toLowerCase();
// how much a run of consonants weighs: h is nothing, x and z are two, a j between vowels is two
const weight = (units, between) => units.filter((u) => u.s !== 'h').reduce((n, u) => n + (u.s === 'x' || u.s === 'z' || (between && units.length === 1 && u.s === 'j') ? 2 : 1), 0);

function analyse(tok) {
  const w = letters(tok);
  const groups = latinGroups(w);
  const syl = syllables(tok, 'la');
  const diph = (g) => g[1] - g[0] > 1 || 'æœ'.includes(w[g[0]]);
  const inner = [];
  for (let g = 0; g + 1 < groups.length; g++) {
    if (diph(groups[g])) { inner.push('L'); continue; }
    const u = latinUnits(w.slice(groups[g][1], groups[g + 1][0])).filter((x) => x.s !== 'h');
    const wt = weight(u, true);
    inner.push(wt >= 2 ? (u.length === 2 && latinMuteLiquid(u[0].s, u[1].s) ? 'c' : 'L') : 'o');
  }
  return {
    w, syl, inner, ok: groups.length > 0 && syl.length === groups.length,
    head: groups.length ? latinUnits(w.slice(0, groups[0][0])) : [],
    tail: groups.length ? latinUnits(w.slice(groups[groups.length - 1][1])) : [],
    lastDiph: groups.length ? diph(groups[groups.length - 1]) : false,
  };
}

// One row. Returns what was found and, where the count fits, the marks.
export function scanRow(toks, pattern) {
  const A = toks.map(analyse);
  const notes = [];
  A.forEach((a, k) => {
    const next = A[k + 1];
    a.elided = false;
    if (!a.ok) notes.push(`w${k} could not be divided by rule: give its division by hand`);
    if (!next || !a.ok || !next.ok) return;
    const open = a.tail.length === 0 || (a.tail.length === 1 && a.tail[0].s === 'm');
    const vowelNext = next.head.filter((u) => u.s !== 'h').length === 0;
    if (open && vowelNext && !['o', 'a', 'ah', 'heu', 'io'].includes(a.w)) a.elided = true;
  });
  const sy = [];
  A.forEach((a, k) => {
    a.syl.forEach((text, j) => {
      let q;
      if (j < a.syl.length - 1) q = a.inner[j] || 'o';
      else if (a.elided) q = '~';
      else if (a.lastDiph) q = 'L';
      else {
        const next = A[k + 1];
        const wt = weight(a.tail, false);
        const wh = next ? weight(next.head, false) : 0;
        q = wt >= 2 || (wt >= 1 && wh >= 1) ? 'L' : 'o';
      }
      sy.push({ k, j, q });
    });
  });
  const counted = sy.filter((s) => s.q !== '~');
  const out = { A, sy, counted: counted.length, notes, elided: A.map((a, k) => (a.elided ? k : -1)).filter((k) => k >= 0) };
  if (!pattern) return out;
  out.fits = counted.length === pattern.length;
  if (!out.fits) return out;
  out.clash = []; out.byVowel = []; out.free = [];
  counted.forEach((s, i) => {
    const p = pattern[i];
    const last = i === pattern.length - 1;
    if (p === '-') { s.mark = '-'; if (s.q !== 'L' && !last) out.byVowel.push(`w${s.k}.${s.j}`); }
    else if (p === 'u') { s.mark = 'u'; if (s.q === 'L') out.clash.push(`w${s.k}.${s.j}`); }
    else if (last) s.mark = '-';
    else if (s.q === 'L') s.mark = '-';
    else { s.mark = '?'; out.free.push(`w${s.k}.${s.j}`); }
  });
  sy.forEach((s) => { if (s.q === '~') s.mark = '~'; });
  out.meter = counted.map((s) => s.mark).join('');
  out.voice = A.map((a, k) => sy.filter((s) => s.k === k).map((s) => s.mark).join('')).join(' ');
  // the stress of each word: on the last syllable but one if that is long, else on the one before it
  out.stress = A.map((a, k) => {
    const mine = sy.filter((s) => s.k === k);
    const n = mine.length;
    const end = mine[n - 1].mark === '~' ? '~' : 'x';
    if (n === 1) return end;
    if (n === 2) return `/${end}`;
    const pen = mine[n - 2].mark;
    if (pen === '?') return `${'x'.repeat(n - 3)}??${end}`;
    return pen === '-' ? `${'x'.repeat(n - 2)}/${end}` : `${'x'.repeat(n - 3)}/x${end}`;
  }).join(' ');
  return out;
}

if (process.argv[1] && path.resolve(process.argv[1]) === import.meta.filename) {
  const args = process.argv.slice(2);
  const flag = (name) => { const i = args.indexOf(name); if (i < 0) return undefined; const v = args[i + 1]; args.splice(i, 2); return v; };
  const meter = flag('--meter');
  const fromRow = Number(flag('--from') || 0);
  const [id, partId, a0, b0] = args;
  if (!id || !partId || a0 === undefined) {
    console.log('usage: node build/tools/latin.mjs <textId> <partId> <firstBlock> [lastBlock] --meter alcaic|sapphic|ascl,ascl,pher,glyc|"<pattern>,<pattern>"');
    console.log(`line names: ${Object.entries(LINES).map(([k, v]) => `${k} ${v}`).join('   ')}`);
    process.exit(1);
  }
  const patterns = patternsOf(meter);
  const part = JSON.parse(fs.readFileSync(path.join(TEXTS, id, `${partId}.json`), 'utf8'));
  const a = Number(a0);
  const b = b0 === undefined ? a : Number(b0);
  if (patterns) console.log(`pattern of each row of a stanza in turn: ${patterns.map((p) => `${p.name} ${p.pattern}`).join('   ')}\n(- long, u short, x a place the pattern leaves free; the last place of a line counts as long whatever stands in it)`);
  let n = 0;
  for (let i = a; i <= b && i < part.blocks.length; i++) {
    const blk = part.blocks[i];
    if (blk.k !== 'v') continue;
    console.log(`--- ${id}/${partId}:${i}`);
    blk.lines.forEach((row, r) => {
      if (!row || !row.trim()) return;
      if (i === a && r < fromRow) return;
      const toks = tokens(row);
      const pat = patterns ? patterns[n % patterns.length] : null;
      n++;
      const s = scanRow(toks, pat && pat.pattern);
      console.log(`${id}/${partId}:${i}.${r}   ${toks.length} words, ${s.counted} counted syllables${pat ? `   ${pat.name} ${pat.pattern}: ${s.fits ? 'fits' : `DOES NOT FIT (the pattern has ${pat.pattern.length} places)`}` : ''}`);
      console.log('   ' + toks.map((t, k) => `w${k}:${s.A[k].syl.join('·')}`).join('  '));
      if (s.elided.length) console.log(`   runs into the next word, last syllable not counted: ${s.elided.map((k) => `w${k}`).join(' ')}`);
      s.notes.forEach((x) => console.log(`   ${x}`));
      if (!pat) return;
      if (!s.fits) { console.log('   look for: a syllable that runs on where the rule saw none (or the other way); two vowels that are one syllable, or one that is two; a different pattern for this row'); return; }
      console.log(`   short places on a closed syllable or a diphthong: ${s.clash.length ? `${s.clash.join(' ')}   <- something is wrong here` : 'none'}`);
      if (s.byVowel.length) console.log(`   long by the vowel's own length, which this tool cannot see (look one up before a caption leans on it): ${s.byVowel.join(' ')}`);
      if (s.free.length) console.log(`   left free by the pattern and open: ${s.free.join(' ')}   <- look up the vowel and write - or u for each ? below, in both strings`);
      console.log(`   by length   "${i}.${r}": { "meter": "${s.meter}", "voice": "${s.voice}" }`);
      console.log(`   by stress   "${i}.${r}": { "meter": "${s.meter}", "voice": "${s.stress}" }`);
    });
  }
  if (patterns) console.log('\nby stress: / is the stressed syllable of a word by the rule of Latin accent (the last but one if it is long, else the one before it; a word of two syllables on its first). Words of one syllable are left x: decide each. A word ending in -que, -ne or -ve may carry its stress one syllable later.');
}
