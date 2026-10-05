// Shared by orpheus.mjs, don-giovanni.mjs and magic-flute.mjs. Not a book script.
//
// The three libretti are Rullman's Metropolitan Opera books, Italian and
// English, taken from the raw OCR text of Internet Archive scans (the
// *_djvu.txt files). In print the Italian stands on the left-hand page
// and the English on the right-hand page, each page with its running
// head and two columns; the OCR text gives the pages one after another,
// column by column, with no page marks but the heads.
//
// Every table in the book scripts names lines of the source file by
// their numbers (the first line is 1), so that anyone can open the file
// and see what was done to it. Nothing here retypes the text: words are
// changed only through tables of [line, wrong, right].

import { fetchText } from '../lib/gutenberg.mjs';

export const squash = (s) => s.replace(/\s+/g, ' ').trim();

// The lines of the file with runs of spaces closed up; line[n] is line n.
export function sourceLines(name, url) {
  return [''].concat(fetchText(name, url).split('\n').map(squash));
}

// ---- mending misread words ----------------------------------------------

// table: [[n, wrong, right], ...]. The wrong string must stand exactly once
// in line n as the line is when the row's turn comes (rows for one line
// are applied in order). Returns the number of rows applied.
export function mend(id, line, table, what = 'correction') {
  for (const row of table) {
    const [n, wrong, right] = row;
    if (row.length !== 3 || !Number.isInteger(n) || typeof wrong !== 'string' || typeof right !== 'string' || wrong === '') {
      throw new Error(`${id}: a ${what} is not [line, wrong, right]: ${JSON.stringify(row)}`);
    }
    const text = line[n];
    if (typeof text !== 'string') throw new Error(`${id}: ${what} for line ${n}, which is not a line of the file (or was left out)`);
    const at = text.indexOf(wrong);
    if (at < 0 || text.indexOf(wrong, at + 1) >= 0) {
      throw new Error(`${id}: line ${n}: ${JSON.stringify(wrong)} does not stand exactly once in ${JSON.stringify(text)}`);
    }
    line[n] = squash(text.slice(0, at) + right + text.slice(at + wrong.length));
  }
  return table.length;
}

// table: [[n, text], ...]. Lines left out: page numbers, stray marks, what
// is left of printed rules. The line must read exactly as the table says.
export function leaveOut(id, line, table) {
  for (const [n, text] of table) {
    if (line[n] !== text) throw new Error(`${id}: line ${n} to be left out is ${JSON.stringify(line[n])}, not ${JSON.stringify(text)}`);
    line[n] = null;
  }
  return table.length;
}

// ---- which language a piece of text is in -------------------------------

const list = (s) => new Set(s.trim().split(/\s+/));
// Common words of each language that are not also words of the other.
// (a, e, i, o, in, no, me, so, do, come, son, pace, sole, solo, dove, more,
// or, ah, oh and the like are in neither list.)
const ENGLISH = list(`the and of to is that it you my he his her with for not be this have as but are at on
  what we him will she thy thee from by your our they was shall who if there them their now here then
  let would can see how may must one when yes am an us which were has had did thou art hast go know say
  well love heart yet where too should could again never ever only away still than these those upon
  into out up down very good dear give take make made been little great old new first last long much
  such any every each both own same other another without before after over under through while till
  until because why whose whom though nothing soon once always alone together about above against
  among between since its himself herself myself yourself does done don't i'll i'm 'tis o'er e'er ne'er
  ye mine thine what's that's there's doth dost hath shalt wilt canst`);
const ITALIAN = list(`il lo gli le di del dello della dei degli delle ed un uno una che non mi ti si ci vi
  io tu egli ella noi voi essi al allo alla ai agli alle da dal dalla nel nella nei con per su sul sulla
  tra fra ma se mio mia miei mie tuo tua tuoi suo sua suoi nostro vostro loro qui qua ora ne quando chi
  cui tutto tutti tutta amor amore cor cuore ciel cielo dio sono sei siamo siete hai abbiamo hanno fu
  questo questa quello quella quel qual quale perche ancor ancora mai sempre sola ogni altro altra ch
  dell nell quell quest dunque ecco anche senza quanto tanto poi pur voglio vuoi vuol sento veggo vedo`);

const tokens = (text) => text.toLowerCase().replace(/[’‘]/g, "'").split(/[^a-zàèéìòù']+/).filter(Boolean);

// How many words of the text are common words of English, and of Italian.
export function score(text) {
  let en = 0;
  let it = 0;
  for (const t of tokens(text)) {
    const bare = t.replace(/^'+|'+$/g, '');
    if (!bare) continue;
    if (ENGLISH.has(bare) || ENGLISH.has(t)) { en++; continue; }
    if (ITALIAN.has(bare) || /[àèéìòù]/.test(bare)) { it++; continue; }
    if (!bare.includes("'")) continue;
    // an elided word: dell'amor, ch'io, o'erwhelmed
    const pieces = bare.split("'").filter((p) => p.length > 1);
    const e = pieces.some((p) => ENGLISH.has(p));
    const x = pieces.some((p) => ITALIAN.has(p));
    if (e && !x) en++;
    if (x && !e) it++;
  }
  return { en, it };
}

// ---- the English pages --------------------------------------------------

// The libretto lies in lines from..to of the file. A page begins at its
// running head; head.it and head.en match the head of an Italian and of an
// English page (after mending). Each page's language is told from its
// words, and must be the language its head says; the pages must come
// Italian, English, Italian, English. Inside an English page no run of
// lines may read as Italian. Anything else throws.
// Returns the English pages: [{ head, from, to }], line numbers.
export function englishPages(id, line, { from, to, head, firstIs = 'it' }) {
  const pages = [];
  for (let n = from; n <= to; n++) {
    const text = line[n];
    if (text == null || text === '') continue;
    const says = head.en.test(text) ? 'en' : head.it.test(text) ? 'it' : null;
    if (says) pages.push({ head: n, says, from: n + 1, to });
    else if (!pages.length) throw new Error(`${id}: line ${n} stands before the first running head: ${JSON.stringify(text)}`);
    if (says && pages.length > 1) pages[pages.length - 2].to = n - 1;
  }
  pages.forEach((p, i) => {
    const want = (i % 2 === 0) === (firstIs === 'it') ? 'it' : 'en';
    if (p.says !== want) throw new Error(`${id}: the page headed at line ${p.head} should be ${want} by its place, and its head says ${p.says}`);
    const body = [];
    for (let n = p.from; n <= p.to; n++) if (line[n]) body.push(line[n]);
    const { en, it } = score(body.join(' '));
    const lang = en >= 25 && en >= 6 * it ? 'en' : it >= 25 && it >= 6 * en ? 'it' : null;
    if (!lang) throw new Error(`${id}: cannot tell the language of the page headed at line ${p.head} (English words ${en}, Italian ${it})`);
    if (lang !== p.says) throw new Error(`${id}: the page headed at line ${p.head} reads as ${lang} but its head says ${p.says}`);
    if (lang !== 'en') return;
    // no Italian among the English: every run of lines between blank lines, and every line
    let run = [];
    const check = (lines, where) => {
      const s = score(lines.join(' '));
      if (s.it >= 2 && s.it > s.en) throw new Error(`${id}: ${where} on an English page reads as Italian: ${JSON.stringify(lines.join(' / ').slice(0, 80))}`);
    };
    for (let n = p.from; n <= p.to + 1; n++) {
      const text = n <= p.to ? line[n] : '';
      if (text) { check([text], `line ${n}`); run.push(text); continue; }
      if (text === '' && run.length) { check(run, `the lines ending at ${n - 1}`); run = []; }
    }
  });
  return pages.filter((p) => p.says === 'en').map(({ head: h, from: a, to: b }) => ({ head: h, from: a, to: b }));
}

// The lines of the English pages in order, blank lines and lines left out
// passed over: [{ n, text }].
export function englishLines(line, pages) {
  const out = [];
  for (const p of pages) {
    for (let n = p.from; n <= p.to; n++) if (line[n]) out.push({ n, text: line[n] });
  }
  return out;
}

// Where the OCR read the columns of a page in the wrong order: the lines
// a..b are taken out and put back before line `before`.
// table: [[a, b, before], ...].
export function reorder(id, stream, table) {
  let out = stream;
  for (const [a, b, before] of table) {
    const moved = out.filter((l) => l.n >= a && l.n <= b);
    const rest = out.filter((l) => l.n < a || l.n > b);
    const at = rest.findIndex((l) => l.n === before);
    if (!moved.length || at < 0 || (before >= a && before <= b)) throw new Error(`${id}: cannot move lines ${a} to ${b} before line ${before}`);
    out = [...rest.slice(0, at), ...moved, ...rest.slice(at)];
  }
  return out;
}

// ---- joining what the printer broke -------------------------------------

// Join two pieces of a broken line. A hyphen at the break is the printer's
// and goes, unless keep says the word has a hyphen of its own.
export function glue(a, b, keep = false) {
  if (/[A-Za-z]-$/.test(a)) return keep ? a + b : a.slice(0, -1) + b;
  if (/—$/.test(a)) return a + b;
  return `${a} ${b}`;
}

// joins: the numbers of lines that belong to the end of the line before
// them (a verse line too long for the column and turned over, a name or a
// direction broken at the edge). keep: lines joined to a hyphen that
// stays (numbers in keep that are not in joins are the caller's affair). Returns [{ n, ns, text }], ns being all the lines
// that went into the text.
export function joinLines(id, stream, joins, keep = []) {
  const want = new Set(joins);
  const kept = new Set(keep);
  const out = [];
  for (const l of stream) {
    if (want.has(l.n)) {
      const prev = out[out.length - 1];
      if (!prev) throw new Error(`${id}: line ${l.n} has nothing before it to be joined to`);
      if (kept.has(l.n) && !/[A-Za-z]-$/.test(prev.text)) throw new Error(`${id}: line ${l.n} is to keep a hyphen, but the line before it ends with none`);
      prev.text = glue(prev.text, l.text, kept.has(l.n));
      prev.ns.push(l.n);
      want.delete(l.n);
    } else out.push({ n: l.n, ns: [l.n], text: l.text });
  }
  if (want.size) throw new Error(`${id}: lines to be joined that are not English lines of the libretto: ${[...want].join(', ')}`);
  return out;
}

// The old printers set a space before ; : ! ? and round a dash, and the
// scan keeps some of them. They are no part of the spelling.
export function tidy(s) {
  return squash(s)
    .replace(/\s+([,;:!?.])/g, '$1')
    .replace(/([(\[])\s+/g, '$1')
    .replace(/\s+([)\]])/g, '$1')
    .replace(/\s*—\s*/g, '—');
}

// ---- last checks --------------------------------------------------------

// Every character of the text must be one that the libretti print, and the
// structure must hold: verse and prose only under a speaker, no speaker
// who says nothing, no empty block. heading: what a scene heading may be.
// passOver: what the test for letters standing alone is to pass over ("&c.").
export function lastChecks(id, parts, { allow = /^[A-Za-z ,.;:!?'"()—-]+$/, loneLetters = /^[AIOaio]$/, heading = /^Scene \d+$/, passOver = null } = {}) {
  const bad = [];
  for (const p of parts) {
    let speaker = null;
    let said = true;
    p.blocks.forEach((b, i) => {
      const where = `${p.id}[${i}]`;
      const texts = b.k === 'v' ? b.lines : [b.text];
      if (!texts.length) bad.push(`${where}: an empty block`);
      for (const t of texts) {
        if (typeof t !== 'string' || t === '') { bad.push(`${where}: an empty line`); continue; }
        if (b.k === 'h') { if (!heading.test(t)) bad.push(`${where}: a heading that is not a scene: ${JSON.stringify(t)}`); continue; }
        if (!allow.test(t)) bad.push(`${where}: a character the libretto does not print: ${JSON.stringify(t)}`);
        if (/ {2}|^ | $| [,;:!?.]/.test(t)) bad.push(`${where}: spacing: ${JSON.stringify(t)}`);
        for (const w of (passOver ? t.replace(passOver, ' ') : t).split(/[^A-Za-z']+/)) {
          if (/^[A-Za-z]$/.test(w) && !loneLetters.test(w)) bad.push(`${where}: a letter standing alone (${w}): ${JSON.stringify(t)}`);
        }
        if (/[A-Za-z]- |(^| )-[A-Za-z]/.test(t)) bad.push(`${where}: a hyphen left hanging: ${JSON.stringify(t)}`);
      }
      // brackets pair within the block (an aside in verse may run over several lines)
      let depth = 0;
      for (const c of texts.join(' ')) {
        if (c === '(') depth++;
        if (c === ')') depth--;
        if (depth < 0 || depth > 1) break;
      }
      if (depth !== 0) bad.push(`${where}: brackets do not pair: ${JSON.stringify(texts.join(' / ').slice(0, 90))}`);
      if (b.k === 'h') { if (!said) bad.push(`${where}: ${speaker} says nothing`); speaker = null; said = true; }
      if (b.k === 's') {
        if (!said) bad.push(`${where}: ${speaker} says nothing`);
        speaker = b.text;
        said = false;
      }
      if (b.k === 'v' || b.k === 'p') {
        if (!speaker) bad.push(`${where}: words with no speaker: ${JSON.stringify(texts[0])}`);
        said = true;
      }
    });
    if (!said) bad.push(`${p.id}: ${speaker} says nothing at the end`);
  }
  if (bad.length) throw new Error(`${id}: ${bad.length} things wrong in the text built:\n  ${bad.slice(0, 40).join('\n  ')}`);
}

const ORDINALS = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIRST: 1, SECOND: 2, THIRD: 3, FOURTH: 4 };
export const ordinal = (word) => ORDINALS[word.toUpperCase()] || null;
