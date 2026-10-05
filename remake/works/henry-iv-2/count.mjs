// The counts behind the Henry IV, Part 2 piece, made on the text printed on
// the site (site/data/texts/henry-iv-2) with the site's own word-splitter.
// It prints numbers and row names only, never the words of the play.
//
//   node remake/works/henry-iv-2/count.mjs
//
// 1. verse and prose, part by part and speaker by speaker, set against the
//    facts of the tab named Play in reading.json;
// 2. the King's speech on sleep (a3s1, block 5): syllables in each line by
//    the site's rule, the lines with a first-person word, the points;
// 3. where partial, impartial and misle- stand in the play;
// 4. the rejection (a5s5): the length of the King's speech, the names in it,
//    who says my in the rows shown, where grace stands;
// 5. the lines of Falstaff's that the text sets as verse, and the Prince's
//    change from prose to verse in a2s4.

import fs from 'node:fs';
import path from 'node:path';
import { tokens, syllables } from '../../../site/js/kit/syllables.js';

const HERE = import.meta.dirname;
const DIR = path.resolve(HERE, '../../../site/data/texts/henry-iv-2');
const reading = JSON.parse(fs.readFileSync(path.join(HERE, 'reading.json'), 'utf8'));
const index = JSON.parse(fs.readFileSync(path.join(DIR, 'index.json'), 'utf8'));
const part = (id) => JSON.parse(fs.readFileSync(path.join(DIR, `${id}.json`), 'utf8'));
const bare = (t) => t.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
const short = (id) => { const m = id.match(/^a(\d)s(\d)$/); return m ? `${m[1]}.${m[2]}` : id[0].toUpperCase() + id.slice(1); };
const rowsOf = (b) => (b.k === 'v' ? b.lines : b.k === 'p' ? [b.text] : []);

// ---------------------------------------------------------------- 1. verse and prose
const parts = []; const who = {};
let lines = 0; let vwords = 0; let pwords = 0;
for (const meta of index.parts) {
  let sp = null; let vl = 0; let vw = 0; let pw = 0;
  for (const b of part(meta.id).blocks) {
    if (b.k === 's') { sp = b.text; continue; }
    if (b.k !== 'v' && b.k !== 'p') continue;
    const c = ((who[sp] = who[sp] || {})[meta.id] = who[sp][meta.id] || { vl: 0, pw: 0 });
    if (b.k === 'v') { vl += b.lines.length; vw += b.lines.reduce((a, l) => a + tokens(l).length, 0); c.vl += b.lines.length; }
    else { const n = tokens(b.text).length; pw += n; c.pw += n; }
  }
  lines += vl; vwords += vw; pwords += pw;
  parts.push({ id: meta.id, part: short(meta.id), name: meta.label, vl, pw });
}
const F = who.FALSTAFF;
const table = parts.map((p) => ({ part: p.part, name: p.name, 'lines of verse': p.vl, 'words of prose': p.pw, 'Falstaff speaks': F[p.id] ? 'yes' : 'no', read: `henry-iv-2/${p.id}` }));
const whole = {
  parts: table.length, 'lines of verse': lines, 'words of verse': vwords, 'words of prose': pwords,
  'parts with no prose': table.filter((r) => r['words of prose'] === 0).length,
  'parts with no verse': table.filter((r) => r['lines of verse'] === 0).length,
  'parts with both': table.filter((r) => r['words of prose'] > 0 && r['lines of verse'] > 0).length,
  'parts with no prose in which Falstaff speaks': table.filter((r) => r['words of prose'] === 0 && r['Falstaff speaks'] === 'yes').length,
  // a scene is a part numbered by act and scene: the Induction and the Epilogue are parts and not scenes
  scenes: table.filter((r) => /^\d\.\d$/.test(r.part)).length,
  'scenes with no prose': table.filter((r) => /^\d\.\d$/.test(r.part) && r['words of prose'] === 0).length,
  'scenes with no prose in which Falstaff speaks': table.filter((r) => /^\d\.\d$/.test(r.part) && r['words of prose'] === 0 && r['Falstaff speaks'] === 'yes').length,
};
const all = parts.map((p) => p.id);
const speaker = (label, name, ids) => {
  const o = who[label]; const use = (ids || all).filter((id) => o[id]);
  const sum = (k) => use.reduce((a, id) => a + o[id][k], 0);
  return { speaker: name, 'words of prose': sum('pw'), 'lines of verse': sum('vl'), 'by part': use.map((id) => ({ part: short(id), 'words of prose': o[id].pw, 'lines of verse': o[id].vl })) };
};
// the label KING is the old King in Acts 3 and 4 and the new King in Act 5
const speakers = [
  speaker('FALSTAFF', 'Falstaff'),
  speaker('KING', 'King Henry IV', ['a3s1', 'a4s4', 'a4s5']),
  speaker('PRINCE', 'the Prince, before he is king'),
  speaker('KING', 'the Prince as King Henry V', ['a5s2', 'a5s5']),
  speaker('CHIEF JUSTICE', 'the Lord Chief Justice'),
];
const facts = reading.plates[0].lenses.find((l) => l.kind === 'shape').facts;
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const strip = (s) => ({ speaker: s.speaker, 'words of prose': s['words of prose'], 'lines of verse': s['lines of verse'], 'by part': s['by part'] });
console.log('1. verse and prose');
console.log('   the whole play:', JSON.stringify(whole));
console.log('   the parts as in the reading:   ', same(table, facts.parts));
console.log('   the whole as in the reading:   ', same(whole, facts['whole play']));
console.log('   the speakers as in the reading:', same(speakers, facts.speakers.map(strip)));
console.log('   the label KING stands in:', all.filter((id) => who.KING[id]).map(short).join(', '));
console.log('   spoken by two together and counted under neither:', Object.keys(who).filter((k) => /&/.test(k)).map((k) => `${k} ${JSON.stringify(who[k])}`).join('; ') || 'nothing');

// ---------------------------------------------------------------- 2. the speech on sleep
const speech = part('a3s1').blocks[5].lines;
const firstPerson = /^(I|me|my|mine|myself|we|us|our|ours)$/i;
console.log('\n2. the King’s speech, a3s1 block 5');
console.log('   lines:', speech.length);
console.log('   syllables by rule, line by line:', speech.map((l) => tokens(l).reduce((n, t) => n + syllables(t, 'en').length, 0)).join(' '));
console.log('   rows with I, me, my, mine, we, us or our:', speech.map((l, i) => (tokens(l).some((t) => firstPerson.test(bare(t))) ? `5.${i}` : null)).filter(Boolean).join(', '));
console.log('   question marks:', speech.join(' ').split('?').length - 1, '| exclamation marks:', speech.join(' ').split('!').length - 1);
console.log('   rows that end in a question mark:', speech.map((l, i) => (/\?\s*$/.test(l) ? `5.${i}` : null)).filter(Boolean).join(', '), '| rows with one inside:', speech.map((l, i) => (/\?./.test(l.trim()) ? `5.${i}` : null)).filter(Boolean).join(', '));

// ---------------------------------------------------------------- 3. three words through the play
const where = (re) => {
  const out = [];
  for (const meta of index.parts) part(meta.id).blocks.forEach((b, bi) => rowsOf(b).forEach((l, ri) => tokens(l).forEach((t, wi) => { if (re.test(bare(t))) out.push(`${meta.id} ${bi}.${ri} w${wi}`); })));
  return out.join('; ') || 'nowhere';
};
console.log('\n3. through the play');
console.log('   partial:  ', where(/^partial$/i));
console.log('   impartial:', where(/^impartial$/i));
console.log('   misle-:   ', where(/^misle/i));

// ---------------------------------------------------------------- 4. the rejection
const a5s5 = part('a5s5').blocks;
const king = a5s5[57].lines;
console.log('\n4. the rejection, a5s5');
console.log('   lines in the King’s speech (block 57):', king.length, '| after row 57.8:', king.length - 9);
console.log('   Falstaff, John, Jack or Sir in it:', king.some((l) => /\b(Falstaff|John|Jack|Sir)\b/.test(l)) ? 'yes' : 'no');
let sp = null; const my = []; const grace = [];
a5s5.forEach((b, bi) => {
  if (b.k === 's') { sp = b.text; return; }
  rowsOf(b).forEach((l, ri) => tokens(l).forEach((t, wi) => {
    if (/^my$/i.test(bare(t)) && bi >= 51 && (bi < 57 || ri <= 8) && bi <= 57) my.push(`${sp} ${bi}.${ri} w${wi}`);
    if (/^grace$/i.test(bare(t))) grace.push(`${sp} ${bi}.${ri} w${wi}`);
  }));
});
console.log('   my in rows 51.0 to 57.8:', my.join('; '));
console.log('   grace in the scene:', grace.join('; '));
console.log('   the kind of block 60, Falstaff’s next speech:', a5s5[60].k === 'p' ? 'prose' : 'verse');

// ---------------------------------------------------------------- 5. Falstaff's verse, the Prince's change
console.log('\n5. set as verse for Falstaff');
for (const meta of index.parts) {
  let s = null; const got = [];
  part(meta.id).blocks.forEach((b, bi) => { if (b.k === 's') s = b.text; else if (b.k === 'v' && s === 'FALSTAFF') b.lines.forEach((_, ri) => got.push(`${bi}.${ri}`)); });
  if (got.length) console.log(`   ${meta.id}: rows ${got.join(', ')}`);
}
const a2s4 = part('a2s4').blocks; let s2 = null; let lastProse = -1; let firstVerse = -1;
a2s4.forEach((b, bi) => { if (b.k === 's') s2 = b.text; else if (s2 === 'PRINCE' && b.k === 'p') lastProse = bi; else if (s2 === 'PRINCE' && b.k === 'v' && firstVerse < 0) firstVerse = bi; });
const peto = a2s4.findIndex((b) => b.k === 'd' && /^Enter Peto/.test(b.text));
console.log(`   the Prince in a2s4: last prose at block ${lastProse}, Peto enters at block ${peto}, first verse at block ${firstVerse}`);
let later = 0; let seen = false;
for (const meta of index.parts) { if (meta.id === 'a2s4') { seen = true; continue; } if (seen) for (const id of ['PRINCE', 'KING']) if (who[id] && who[id][meta.id] && (id === 'PRINCE' || ['a5s2', 'a5s5'].includes(meta.id))) later += who[id][meta.id].pw; }
console.log('   words of prose he speaks in any later part, as Prince or as King:', later);
