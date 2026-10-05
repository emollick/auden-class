// The counts of the reading of The Family Reunion, made again from a scan of the play.
//
// The play is in copyright in the United States through 2034. This script prints
// numbers, page numbers and speakers' names only, never a line of the text, and the
// scan is not kept in the project. Fetch it into a scratch folder, run this, delete it:
//
//   curl -sL -o <scratch>/fr.xml https://archive.org/download/familyreunionpl00elio/familyreunionpl00elio_djvu.xml
//   node remake/works/family-reunion/count.mjs <scratch>/fr.xml
//
// The scan is a later printing (1943 or after) of the New York edition of 1939
// (Harcourt, Brace). Printed page = number of the page image, from 0, less 3.
// The entry numbers below were fixed by reading the scan page by page. They hold
// only for this file, which gives 3346 entries; the script says so if that changes.

import fs from 'node:fs';

const file = process.argv[2];
if (!file) { console.error('usage: node count.mjs <path to familyreunionpl00elio_djvu.xml>'); process.exit(2); }
const { syllables, tokens } = await import(new URL('../../../site/js/kit/syllables.js', import.meta.url));
const reading = JSON.parse(fs.readFileSync(new URL('./reading.json', import.meta.url), 'utf8'));

// 1. The page images of the scan, each a list of lines with the place of the first word.
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n));
const xml = fs.readFileSync(file, 'utf8');
const pages = xml.split('<OBJECT').slice(1).map((o, idx) => {
  const lines = [];
  const lineRe = /<LINE>([\s\S]*?)<\/LINE>/g;
  let lm;
  while ((lm = lineRe.exec(o))) {
    const words = [];
    const wRe = /<WORD coords="([^"]*)"[^>]*>([^<]*)<\/WORD>/g;
    let wm; let x = null; let y = null;
    while ((wm = wRe.exec(lm[1]))) {
      const c = wm[1].split(',').map(Number);
      if (x === null) { x = c[0]; y = c[1]; }
      words.push(dec(wm[2]));
    }
    if (words.length) lines.push({ text: words.join(' '), x, y });
  }
  return { idx, lines };
});

// 2. The entries: every printed line of pp. 11 to 131, classed by how far it stands from the margin.
//    line = a verse line; turn = the turned-over end of the line before; far = set further in
//    (the second part of a line shared by two speakers, a direction, a turned-over word);
//    speaker = a speaker's name; folio = the page number at the foot.
const norm = (s) => s.replace(/\s+/g, ' ').trim();
const SPEAKERS = ['Amy', 'Agatha', 'Ivy', 'Violet', 'Charles', 'Gerald', 'Mary', 'Denman', 'Harry', 'Downing', 'Warburton', 'Winchell', 'Chorus', 'All', "Amy's Voice", 'Eumenides', 'The Eumenides'];
const s = [];
for (const p of pages) {
  const printed = p.idx - 3;
  if (printed < 11 || printed > 131) continue;
  const xs = p.lines.map((l) => l.x).sort((a, b) => a - b);
  let margin = xs[0];
  for (const x of xs) { if (xs.filter((y) => Math.abs(y - x) <= 12).length >= 4) { margin = x; break; } }
  for (const l of p.lines) {
    const t = norm(l.text);
    const dx = l.x - margin;
    let type;
    if (/^\d{1,3}$/.test(t) && l.y > 3200) type = 'folio';
    else if (SPEAKERS.includes(t.replace(/[.:]$/, '')) && dx > 300) type = 'speaker';
    else if (Math.abs(dx) <= 30) type = 'line';
    else if (dx > 30 && dx <= 230) type = 'turn';
    else type = 'far';
    s.push({ page: printed, type, dx, text: t });
  }
}
console.log(`entries: ${s.length}${s.length === 3346 ? '' : '  (EXPECTED 3346: the entry numbers below will not hold for this file)'}`);

// 3. The scenes: the page on which each scene heading stands, and the last page.
const HEADS = [['Part I, Scene I', 0], ['Part I, Scene II', 951], ['Part I, Scene III', 1433], ['Part II, Scene I', 1625], ['Part II, Scene II', 2291], ['Part II, Scene III', 2779]];
console.log('\nscenes (first page of each): ' + HEADS.map(([name, i]) => `${name} p. ${s[i].page}`).join('; ') + `; the last page is ${s[s.length - 1].page}`);

// 4. The chorus: words spoken together and apart at the five places.
function text(a, b) {
  let out = '';
  for (let i = a; i <= b; i++) {
    const o = s[i];
    if (o.type === 'folio' || o.type === 'speaker') continue;
    const t = o.text.split(' ').filter((w) => /[A-Za-z0-9]/.test(w)).join(' ');   // pencil marks dropped
    if (out.endsWith('-')) out = out.slice(0, -1) + t; else out += (out ? ' ' : '') + t;
  }
  return out;
}
const words = (t) => t.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w));
const C = [
  { n: 1, together: [[303, 313], [327, 329]], apart: { Charles: [315, 316], Ivy: [318, 319], Gerald: [321, 322], Violet: [324, 325] } },
  { n: 2, together: [[887, 896], [912, 933]], apart: { Ivy: [898, 899], Gerald: [901, 902], Violet: [904, 905], Charles: [907, 908] } },
  { n: 3, together: [[1568, 1584]], apart: { Ivy: [1586, 1587], Gerald: [1589, 1590], Violet: [1592, 1593], Charles: [1595, 1596] } },
  { n: 4, together: [[2255, 2288]], apart: {} },
  { n: 5, together: [[3225, 3267], [3282, 3283]], apart: { Ivy: [3270, 3271], Gerald: [3273, 3274], Violet: [3276, 3277], Charles: [3279, 3280] } },
];
console.log('\nthe chorus (words):');
let T = 0; let A = 0; let ok = true;
for (const c of C) {
  const tw = c.together.map(([a, b]) => words(text(a, b)).length);
  const ap = Object.entries(c.apart).map(([who, [a, b]]) => [who, words(text(a, b)).length]);
  const t = tw.reduce((x, y) => x + y, 0); const a = ap.reduce((x, y) => x + y[1], 0);
  T += t; A += a;
  const all = [...c.together.flat(), ...Object.values(c.apart).flat()];
  const pp = [s[Math.min(...all)].page, s[Math.max(...all)].page];
  const r = reading.plates[0].lenses[1].facts.choruses.find((x) => x.n === c.n);
  const same = r && r.wordsTogether === t && r.wordsApart === a && ap.every(([who, n]) => (r.apart.find((x) => x.name === who) || {}).words === n);
  if (!same) ok = false;
  console.log(`  ${c.n}. pp. ${pp[0]}–${pp[1]}: together ${t}${tw.length > 1 ? ' (' + tw.join(' + ') + ')' : ''}, apart ${a}${ap.length ? ' (' + ap.map((x) => x[0] + ' ' + x[1]).join(', ') + ')' : ''}  ${same ? 'as in the reading' : 'NOT AS IN THE READING'}`);
}
const tot = reading.plates[0].lenses[1].facts.totals;
console.log(`  in all: together ${T}, apart ${A}  ${ok && tot.wordsTogether === T && tot.wordsApart === A ? 'as in the reading' : 'NOT AS IN THE READING'}`);

// 5. The first speech of the play: syllables in each line, by the site's rule of thumb.
const syl = (line) => tokens(line).filter((t) => /\p{L}/u.test(t)).reduce((n, t) => n + syllables(t).length, 0);
const first = s.findIndex((e) => e.type === 'speaker');
let end = first + 1; while (s[end].type !== 'speaker') end++;
const lines = [];
for (let i = first + 1; i < end; i++) {
  const e = s[i];
  if (e.type === 'folio') continue;
  const last = lines[lines.length - 1];
  if (last && last.endsWith('-')) lines[lines.length - 1] = last.slice(0, -1) + e.text;        // a word split at the line end
  else if (e.type === 'turn' && last) lines[lines.length - 1] = last + ' ' + e.text;          // a line turned over
  else lines.push(e.text);
}
const counts = lines.map(syl);
const L = reading.plates[0].lenses[0].facts.lengths;
console.log(`\nthe first speech: speaker ${s[first].text}, p. ${s[first].page}, ${lines.length} lines`);
console.log(`  syllables: ${counts.join(', ')}  (shortest ${Math.min(...counts)}, longest ${Math.max(...counts)})  ${JSON.stringify(counts) === JSON.stringify(L.syllables) ? 'as in the reading' : 'NOT AS IN THE READING'}`);

// 6. The two lines quoted in the reading: are they in the scan at their pages, and how long are they.
console.log('\nthe two quoted lines:');
const flat = (t) => t.toLowerCase().replace(/[^a-z]+/g, ' ').trim();
for (const q of reading.plates[0].lenses[0].facts.lines) {
  const hit = s.find((e) => e.page === q.page && flat(e.text) === flat(q.quote));
  const marks = q.voice.replace(/[^/x]/g, '').length;
  console.log(`  p. ${q.page}: ${hit ? 'found in the scan' : 'NOT FOUND IN THE SCAN'}; ${words(q.quote).length} words, ${syl(q.quote)} syllables by the tool, ${marks} marks in "voice", ${q.voice.split('/').length - 1} of them stressed`);
}

// 7. The name Eumenides, and the word Furies.
const count = (re, t) => (t.match(re) || []).length;
const whole = pages.map((p) => p.lines.map((l) => l.text).join('\n')).join('\n');
const inPlay = s.filter((e) => /Eumenides/.test(e.text));
console.log(`\nEumenides: ${count(/Eumenides/g, whole)} times in the whole book; ${inPlay.length} in pp. 11–131, on pp. ${inPlay.map((e) => e.page).join(', ')}; every one of these entries is part of a stage direction in square brackets (read on the page)`);
const fury = s.filter((e) => /\bfury\b/i.test(e.text));
console.log(`Furies: ${count(/\bFuries\b/gi, whole)} times in the whole book; the common noun fury ${fury.length} time(s), on p. ${fury.map((e) => e.page).join(', ')}`);
