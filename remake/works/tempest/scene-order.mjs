// The Tempest, Act 3, Scene 2, speech by speech: the artist's count for the
// Scene drawing of the second passage (see art.md).
//
//   node remake/works/tempest/scene-order.mjs           count the scene and check the reading's facts against it
//   node remake/works/tempest/scene-order.mjs --json    print the value of the facts key "speech by speech"
//   node remake/works/tempest/scene-order.mjs --write   add that key to the reading (nothing else is changed)
//
// The rule is the poet's (the "source" of each speaker's facts): a speech is
// one turn under a speaker's name; verse and prose are as the hosted text
// prints them; a speech is what its first block is. Lines of verse printed
// inside a prose speech are the lines sung. It reads
// site/data/texts/tempest/a3s2.json and the reading. Without --write it
// writes nothing. No word of the play is printed.
import fs from 'node:fs';
import path from 'node:path';
import { tokens } from '../../../site/js/kit/syllables.js';

const ROOT = path.resolve(import.meta.dirname, '../../..');
const TEXT = 'tempest/a3s2';
const KEY = 'speech by speech';
const file = path.join(ROOT, 'remake/works/tempest/reading.json');
const part = JSON.parse(fs.readFileSync(path.join(ROOT, 'site/data/texts', `${TEXT}.json`), 'utf8'));
const before = fs.readFileSync(file, 'utf8');
const reading = JSON.parse(before);
const lens = reading.plates.find((p) => p.id === 'noises').lenses.find((l) => l.kind === 'shape');
const json = process.argv.includes('--json');
const write = process.argv.includes('--write');
const say = (...a) => { if (!json) console.log(...a); };
let wrong = 0;
const check = (ok, what) => { if (!ok) wrong++; say(`  ${ok ? 'ok ' : 'NO '} ${what}`); };

// ----- the count, from the hosted text -----
const speeches = [];
let cur = null;
part.blocks.forEach((b, i) => {
  if (b.k === 's') { cur = { speech: speeches.length + 1, who: b.text, blocks: [] }; speeches.push(cur); return; }
  if (cur && ['v', 'p', 'q'].includes(b.k)) cur.blocks.push({ i, k: b.k, lines: b.k === 'v' ? b.lines.length : 0, words: b.k === 'v' ? b.lines.reduce((n, l) => n + tokens(l).length, 0) : tokens(b.text || '').length, text: b.k === 'v' ? b.lines.join(' ') : b.text || '' });
});
for (const s of speeches) {
  s.begins = s.blocks[0].i;
  s.form = s.blocks[0].k === 'v' ? 'verse' : 'prose';
  const verse = s.blocks.filter((b) => b.k === 'v');
  s.lines = s.form === 'verse' ? verse.reduce((n, b) => n + b.lines, 0) : 0;
  s.sung = s.form === 'prose' ? verse.reduce((n, b) => n + b.lines, 0) : 0;
  s.words = s.blocks.filter((b) => s.form === 'verse' || b.k !== 'v').reduce((n, b) => n + b.words, 0);
  s.monster = (s.blocks.map((b) => b.text).join(' ').match(/\bmonsters?\b/gi) || []).length;
}
const sum = (list, f) => list.reduce((n, x) => n + f(x), 0);
say(`${TEXT}: ${speeches.length} speeches`);
const counted = new Map();
for (const s of speeches) { if (!counted.has(s.who)) counted.set(s.who, []); counted.get(s.who).push(s); }
for (const [who, list] of counted) {
  const p = list.filter((s) => s.form === 'prose'); const v = list.filter((s) => s.form === 'verse');
  say(`  ${who}: ${list.length} speeches; ${p.length} printed as prose, ${v.length} as verse (${sum(v, (s) => s.lines)} lines); ${sum(list, (s) => s.sung)} lines sung; says monster ${sum(list, (s) => s.monster)} times`);
  say(`      ${list.map((s) => `${s.speech}${s.form[0]}${s.lines || ''}${s.sung ? `+${s.sung} sung` : ''}`).join(' ')}`);
}

// ----- the reading's facts against the count -----
say('\nthe facts of the Scene tab against the count');
const out = {};
check(sum(lens.facts, (f) => f.speeches) === speeches.length, `the speakers' speeches add up to ${speeches.length}`);
for (const f of lens.facts) {
  const name = f.speaker.split(',')[0];
  const mine = counted.get(name.toUpperCase()) || [];
  const listed = f.where.speeches;
  // Ariel's four are counted as neither verse nor prose: the facts leave both blank
  const neither = f['in prose'] === '' && f['in verse'] === '';
  check(f.speeches === mine.length, `${name}: ${f.speeches} speeches`);
  if (!neither) {
    check(f['in prose'] === mine.filter((s) => s.form === 'prose').length && f['in verse'] === mine.filter((s) => s.form === 'verse').length, `${name}: ${f['in prose']} in prose, ${f['in verse']} in verse`);
    const sung = sum(mine, (s) => s.sung);
    check(sung ? f['lines of verse'] === `${sung}, sung` : f['lines of verse'] === sum(mine, (s) => s.lines), `${name}: lines of verse ${JSON.stringify(f['lines of verse'])}`);
  } else check(listed.every((t) => t[2] === ''), `${name}: no speech is given a form`);
  check(f['says monster'] === sum(mine, (s) => s.monster), `${name}: says monster ${f['says monster']} times`);
  check(listed.length === mine.length && listed.every((t, k) => { const s = mine[k]; return t[0] === s.speech && t[1] === s.begins && (neither || t[2] === s.form) && t[3] === s.words && t[4] === (neither ? 0 : s.lines) && t[5] === s.sung; }), `${name}: the working list has each speech's number, first block, form, words, lines and lines sung as counted`);
  // the new key, made from the working list
  out[f.speaker] = listed.map(([speech, block, form, , lines, sung]) => ({ speech, form, ...(lines ? { lines } : {}), ...(sung ? { 'lines sung': sung } : {}), read: `${TEXT}:${block}` }));
}
const order = Object.values(out).flat().map((s) => s.speech).sort((a, b) => a - b);
check(order.length === speeches.length && order.every((n, i) => n === i + 1), `put together, the four lists number the speeches 1 to ${speeches.length} with none missing and none twice`);
const here = reading.plates.find((p) => p.id === 'noises').rows.map((r) => +String(r).split('.')[0]);
const onPlate = [...new Set(here)].map((b) => speeches.find((s) => s.blocks.some((x) => x.i === b)));
say(`  the passage of the plate is speech${onPlate.length === 1 ? '' : 'es'} ${onPlate.map((s) => `${s.speech} (${s.who}, ${s.form})`).join(' and ')}`);

if (json) console.log(JSON.stringify(out, null, 1));
const has = lens.facts.every((f) => JSON.stringify(f[KEY]) === JSON.stringify(out[f.speaker]));
say(has ? `\nthe reading holds the key "${KEY}" as counted` : `\nthe reading does not yet hold the key "${KEY}" as counted`);
if (wrong) { console.log(`${wrong} thing${wrong === 1 ? '' : 's'} wrong; nothing written`); process.exit(2); }

if (write && !has) {
  for (const f of lens.facts) f[KEY] = out[f.speaker];
  // everything but the new key must be as it was
  const strip = (r) => { const c = JSON.parse(JSON.stringify(r)); c.plates.find((p) => p.id === 'noises').lenses.find((l) => l.kind === 'shape').facts.forEach((f) => { delete f[KEY]; }); return JSON.stringify(c); };
  if (strip(reading) !== strip(JSON.parse(before)) || JSON.stringify(reading.plates[0]) !== JSON.stringify(JSON.parse(before).plates[0])) { console.log('the reading would change in more than the new key; nothing written'); process.exit(2); }
  if (fs.readFileSync(file, 'utf8') !== before) { console.log('the reading was changed by someone else while this ran; nothing written, run it again'); process.exit(2); }
  fs.writeFileSync(file, `${JSON.stringify(reading, null, 2)}\n`);
  console.log(`added "${KEY}" to the four speakers of the Scene tab`);
}
