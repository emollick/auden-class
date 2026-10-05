// The counts behind remake/works/karamazov/reading.json, so that anyone can make them again.
// usage (from /home/user/auden-course): node remake/works/karamazov/counts.mjs [voices|plan|sentences|words|paragraphs]
// It reads the hosted text and the site's word-splitter, writes nothing, and prints numbers and single words only.
import fs from 'node:fs';
import { tokens } from '../../../site/js/kit/syllables.js';

const part = JSON.parse(fs.readFileSync(new URL('../../../site/data/texts/karamazov/b05c05.json', import.meta.url), 'utf8'));
const what = process.argv[2] || 'all';
const want = (k) => what === 'all' || what === k;
const isLetter = (c) => /[\p{L}\p{N}]/u.test(c || '');

// ----- who is speaking: each word is given a depth by the quotation marks around it -----
// 0 outside all marks, 1 inside double marks, 2 inside single marks within them, 3 inside double marks within those.
// An apostrophe inside a word is not a mark.
const IVAN = new Set([0, 2, 4, 5, 6, 7, 8, 10, 12, 14, 16, 17, 18, 19, 20, 21, 25, 27, 29, 31, 33, 36, 38, 40, 42, 44, 47, 49, 51, 53]); // blocks that are Ivan's paragraphs
const ALY = new Set([9, 11, 13, 15, 24, 26, 28, 30, 32, 34, 37, 39, 41, 43, 45, 54]); // Alyosha's
const CONTINUES = new Set([2, 4]); // Ivan goes on after a verse quotation with no opening mark
const INQ = new Set([8, 12, 14, 17, 18, 19, 20, 21, 31]); // paragraphs in which the single marks are the Grand Inquisitor's
const jesuit = (b, k) => b === 12 && ((k >= 45 && k <= 53) || (k >= 56 && k <= 85)); // the Jesuits' words Ivan quotes
function depthTokens(bi) {
  const blk = part.blocks[bi];
  if (blk.k === 'v') return blk.lines.flatMap((l) => tokens(l)).map((t, k) => ({ t, d: 1, k, verse: true }));
  const text = blk.text; const toks = tokens(text);
  const out = []; let pos = 0; const stack = CONTINUES.has(bi) ? ['D'] : []; let scan = 0;
  const advance = (to) => {
    for (; scan < to; scan++) {
      const c = text[scan];
      if (c === '“') stack.push('D');
      else if (c === '”') { if (stack[stack.length - 1] === 'D') stack.pop(); }
      else if (c === '‘') stack.push('S');
      else if (c === '’') { const inword = isLetter(text[scan - 1]) && isLetter(text[scan + 1]); if (!inword && stack[stack.length - 1] === 'S') stack.pop(); }
    }
  };
  toks.forEach((t, k) => { const at = text.indexOf(t, pos); let first = at; while (first < at + t.length && !isLetter(text[first])) first++; advance(first); out.push({ t, d: stack.length, k }); pos = at + t.length; });
  return out;
}
function voices() {
  const rows = []; const tot = {};
  part.blocks.forEach((blk, b) => {
    const r = { n: b + 1 };
    const add = (who) => { r[who] = (r[who] || 0) + 1; tot[who] = (tot[who] || 0) + 1; };
    const lead = blk.k === 'v' ? 'Ivan' : IVAN.has(b) ? 'Ivan' : ALY.has(b) ? 'Alyosha' : 'narrator';
    for (const x of depthTokens(b)) {
      if (x.verse) { add('others'); continue; }
      if (x.d === 0 || lead === 'narrator') { add('narrator'); continue; }
      if (x.d === 1) { add(lead); continue; }
      if (lead === 'Alyosha') { add('Alyosha'); continue; }
      if (b === 6 && (x.k === 303 || x.k === 304)) { add('Prisoner'); continue; }
      if (INQ.has(b) && !jesuit(b, x.k)) { add('Inquisitor'); continue; }
      add('others');
    }
    rows.push(r);
  });
  return { rows, tot };
}
if (want('voices') || want('paragraphs')) {
  const { rows, tot } = voices();
  if (what === 'paragraphs') console.log(JSON.stringify(rows));
  else {
    console.log('VOICES (words by the site splitter; a word joined to the next by a dash counts once)');
    console.log(' ', JSON.stringify(tot), 'sum', Object.values(tot).reduce((a, n) => a + n, 0));
    console.log('  Ivan with all he quotes', tot.Ivan + tot.Inquisitor + tot.others + tot.Prisoner);
    const inq = [8, 12, 14, 17, 18, 19, 20, 21, 31].map((b) => `${b}:${rows[b].Inquisitor}`);
    console.log('  the Grand Inquisitor by block', inq.join(' '));
    // words the old man himself quotes: depth 3 and deeper inside his paragraphs
    let quoted = 0; for (const b of INQ) for (const x of depthTokens(b)) if (x.d >= 3 && !jesuit(b, x.k)) quoted++;
    console.log('  of the Grand Inquisitor’s words, those he quotes from others', quoted);
    console.log('  Alyosha’s four interruptions (blocks 9, 11, 13, 15)', [9, 11, 13, 15].map((b) => rows[b].Alyosha).join(' '));
    const run = [16, 17, 18, 19, 20, 21].reduce((a, b) => a + Object.entries(rows[b]).filter(([k]) => k !== 'n').reduce((x, [, v]) => x + v, 0), 0);
    console.log('  blocks 16 to 21, all words', run, 'of them Ivan’s own', [16, 17, 18, 19, 20, 21].reduce((a, b) => a + (rows[b].Ivan || 0), 0));
  }
}

// ----- the old man's speech as one run of words, and where things fall in it -----
if (want('plan')) {
  const speech = [];
  for (const b of [8, 12, 14, 17, 18, 19, 20, 21]) depthTokens(b).forEach((x) => { if (x.d >= 2 && !jesuit(b, x.k)) speech.push({ b, k: x.k, t: x.t }); });
  const posOf = (b, k) => speech.findIndex((x) => x.b === b && x.k === k) + 1;
  console.log('\nPLAN: the old man’s words to his last word:', speech.length);
  const marks = {
    'first earlier passage, from': [8, 12], 'first earlier passage, to': [8, 62], 'second earlier passage, from': [12, 290], 'second earlier passage, to': [12, 303],
    'part 2 (block 17) starts': [17, 0], 'part 3 (block 18) starts': [18, 0], 'part 4 (block 20) starts': [20, 0], 'part 5 (block 20, w1016) starts': [20, 1016], 'part 6 (block 20, w1147) starts': [20, 1147], 'part 7 (block 21, w895) starts': [21, 895], 'last word': [21, 949],
    'first temptation taken up': [18, 11], 'second temptation taken up': [20, 74], 'third temptation taken up': [20, 1160],
    'the passage, from': [20, 1047], 'the passage, to': [20, 1146], 'the question that takes him as known': [20, 1093],
    'hinder 1': [8, 50], 'hinder 2': [8, 57], 'hinder 3': [14, 154], 'hinder 4': [20, 1053], 'hinder 5': [21, 930],
    'Auden: epigraph sentence': [17, 267], 'Auden: first sentence answered': [18, 56], 'Auden: second sentence answered': [19, 142], 'Auden: third sentence answered': [20, 974],
  };
  for (const [name, [b, k]] of Object.entries(marks)) console.log(' ', name.padEnd(38), `block ${b} word ${k}`.padEnd(22), 'word', posOf(b, k), 'of the speech');
  console.log('  his words by block:', [8, 12, 14, 17, 18, 19, 20, 21].map((b) => `${b}:${speech.filter((x) => x.b === b).length}`).join(' '));
  console.log('  his words after the kiss (block 31):', depthTokens(31).filter((x) => x.d >= 2).length);
}

// ----- sentences: one ends at a word that ends in . ? or ! (closing marks allowed) when the next word begins with a capital -----
if (want('sentences')) {
  const ends = (t) => /[.?!]["”’']*$/.test(t);
  const capital = (t) => /^[^\p{L}\p{N}]*\p{Lu}/u.test(t || 'A');
  const sentences = (b, from = 0, to = Infinity) => {
    const toks = tokens(part.blocks[b].text); const out = []; let start = Math.max(0, from); const last = Math.min(to, toks.length - 1);
    for (let i = start; i <= last; i++) if ((ends(toks[i]) && capital(toks[i + 1])) || i === last) { out.push({ b, from: start, to: i, n: i - start + 1, q: /\?["”’']*$/.test(toks[i]) }); start = i + 1; }
    return out;
  };
  const stat = (name, list) => { const w = list.reduce((a, s) => a + s.n, 0); console.log(' ', name.padEnd(40), 'sentences', String(list.length).padStart(4), ' words', String(w).padStart(5), ' mean', (w / list.length).toFixed(1), ' questions', list.filter((s) => s.q).length, ' of 1 or 2 words at:', list.filter((s) => s.n <= 2).map((s) => `${s.b}:${s.from}`).join(' ')); };
  console.log('\nSENTENCES');
  const long = [17, 18, 19, 20, 21].flatMap((b) => sentences(b));
  stat('blocks 17 to 21, whole', long);
  stat('blocks 17 to 21 without the passage', long.filter((s) => !(s.b === 20 && s.from >= 1047 && s.to <= 1146)));
  stat('the passage, block 20 w1047-1146', sentences(20, 1047, 1146));
  console.log('     lengths', sentences(20, 1047, 1146).map((s) => s.n).join(' '));
  stat('first passage, block 8 w0-108', sentences(8, 0, 108));
  console.log('     lengths', sentences(8, 0, 108).map((s) => s.n).join(' '));
  stat('third passage, block 31 w50-130', sentences(31, 50, 130));
  console.log('     lengths', sentences(31, 50, 130).map((s) => s.n).join(' '));
}

// ----- single words, counted on the raw text so that a word joined to another by a dash is not missed -----
if (want('words')) {
  const textOf = (blk) => (blk.k === 'v' ? blk.lines.join('\n') : blk.text || '');
  const raw = (re) => { let n = 0; const per = {}; part.blocks.forEach((blk, b) => { const m = textOf(blk).match(re); if (m) { n += m.length; per[b] = m.length; } }); return `${n}  by block ${JSON.stringify(per)}`; };
  console.log('\nWORDS (raw text)');
  for (const [name, re] of [['thou-forms', /\b(thou|thee|thy|thine|thyself)\b/gi], ['Thou', /\bthou\b/gi], ['Thee', /\bthee\b/gi], ['Thy', /\bthy\b/gi], ['Thine', /\bthine\b/gi], ['Thyself', /\bthyself\b/gi],
    ['you-forms', /\b(you|your|yours|yourself|yourselves)\b/gi], ['mystery, mysteries', /\bmyster\w*/gi], ['secret, secrets', /\bsecret\w*/gi], ['hinder', /\bhinder\w*/gi], ['softly', /\bsoftly\b/gi], ['lips', /\blips\b/gi], ['ninety', /\bninety\b/gi], ['aged', /\baged\b/gi], ['glows', /\bglow\w*/gi], ['burn-', /\bburn\w*/gi]]) console.log(' ', name.padEnd(20), raw(re));
  // where the thou-forms and the word for mystery stand, by the splitter's word numbers
  const at = (re, blocks) => { const out = []; part.blocks.forEach((blk, b) => { if (blocks && !blocks.includes(b)) return; if (blk.k === 'v') return; tokens(blk.text || '').forEach((t, i) => { if (re.test(t)) out.push(`${b}:${i}`); }); }); return out.join(' '); };
  console.log('  thou-forms outside the old man’s paragraphs:', at(/\b(thou|thee|thy|thine|thyself)\b/i, [0, 2, 6]));
  console.log('  thou-forms inside words joined by a dash:', at(/[\p{L}][^\p{L}\s’']*[—–][^\p{L}\s]*(thou|thee|thy|thine|thyself)\b|\b(thou|thee|thy|thine|thyself)[^\p{L}\s’']*[—–]/iu));
  console.log('  mystery in block 20:', at(/myster/i, [20]));
  console.log('  softly:', at(/softly/i));
  const t8 = tokens(part.blocks[8].text).slice(0, 109);
  console.log('  in the first passage (block 8, words 0 to 108): Thou', t8.filter((t) => /\bthou\b/i.test(t)).length, ' Thee', t8.filter((t) => /\bthee\b/i.test(t)).length);
}
