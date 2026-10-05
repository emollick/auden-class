// What a machine can honestly check in a piece of writing: how many
// lines, how many words, which words are barred, where a period stands,
// and which line-endings a rhyme scheme pairs.
// Whether the rhymes are true and the lines scan is for the ear.

import { normWord } from './text.js';

export function textLines(text) {
  return text.split(/\r?\n/).map((l) => l.trim()).filter((l) => l.length > 0);
}

// Words as an exercise counts them. A dash is not a word and does not
// make one word of two: "sea—and" is two words, and so is "sea — and".
// The dash in a range of figures (1840–41) is left alone.
export function wordCount(text) {
  return text.replace(/(\d)–(?=\d)/g, '$1-').split(/\s+|[—–―]|--+/).filter((w) => w && w !== '-').length;
}

// A box of a chart counts as filled when it holds a word of two letters or more.
export function holdsWord(text) {
  return /\p{L}\p{M}*\p{L}/u.test(text || '');
}

function inRange(n, r) {
  if (r.exact !== undefined) return n === r.exact;
  if (r.min !== undefined && n < r.min) return false;
  if (r.max !== undefined && n > r.max) return false;
  return true;
}

export function rangeText(r) {
  if (r.exact !== undefined) return String(r.exact);
  if (r.min !== undefined && r.max !== undefined) return `${r.min}–${r.max}`;
  if (r.min !== undefined) return `${r.min}+`;
  return `≤ ${r.max}`;
}

// 'aba bcb cdc ded e' -> ['a','b','a','b','c','b',...]
export function schemeLetters(scheme) {
  return scheme.replace(/\s+/g, '').split('');
}

function lastWord(line) {
  const words = line.split(/\s+/).map((w) => w.replace(/[^\p{L}\p{N}'’-]/gu, '')).filter((w) => normWord(w));
  return words.length ? words[words.length - 1] : '';
}

// Group the end-words of the lines by the letters of the scheme.
export function rhymeGroups(text, scheme) {
  const letters = schemeLetters(scheme);
  const lines = textLines(text);
  const groups = new Map();
  lines.forEach((line, i) => {
    const letter = letters[i];
    if (!letter) return;
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter).push(lastWord(line));
  });
  return [...groups.entries()].map(([letter, words]) => ({ letter, words }));
}

// The plural of a barred word, by the common rules: hell, hells;
// eternity, eternities; a word in s, x, z, ch or sh takes es.
function plural(w) {
  if (/[^aeiou]y$/.test(w)) return `${w.slice(0, -1)}ies`;
  if (/(s|x|z|ch|sh)$/.test(w)) return `${w}es`;
  return `${w}s`;
}

// The barred words found in a text, as they are written there. The bar
// on a word covers its plural and its possessive: hell, hells, hell's.
// A word that only contains a barred word, as "shell" does, is allowed.
export function barredFound(text, barred) {
  const forms = new Set();
  for (const w of barred) { forms.add(w.toLowerCase()); forms.add(plural(w.toLowerCase())); }
  const found = [];
  for (const m of text.toLowerCase().matchAll(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*['’]?/gu)) {
    // a mark after the word may be the possessive of a plural, or may close a quotation
    const written = m[0].replace(/['’]$/, '');
    if (forms.has(written.replace(/['’]s$/, '')) && !found.includes(written)) found.push(written);
  }
  return found;
}

// Does the line end with a period? Quotation marks and brackets that
// close after it are passed over. Three periods are not a full stop.
export function endsWithPeriod(line) {
  const s = line.replace(/[\s"'’”»)\]]+$/, '');
  return s.endsWith('.') && !s.endsWith('..');
}

// Run the mechanical checks. Returns [{id, label values, ok}].
export function runChecks(text, check = {}) {
  const out = [];
  const lines = textLines(text);
  if (check.lines) out.push({ id: 'lines', have: lines.length, want: rangeText(check.lines), range: check.lines, ok: inRange(lines.length, check.lines) });
  if (check.words) {
    const n = wordCount(text);
    out.push({ id: 'words', have: n, want: rangeText(check.words), range: check.words, ok: inRange(n, check.words) });
  }
  if (check.each) {
    // every line (or sentence) within a word limit; `over` names the lines that are not
    const over = [];
    lines.forEach((l, i) => { const words = wordCount(l); if (!inRange(words, check.each)) over.push({ line: i + 1, words }); });
    out.push({ id: 'each', have: lines.length - over.length, want: lines.length, limit: rangeText(check.each), max: check.each.max, over, ok: over.length === 0 && lines.length > 0 });
  }
  if (check.endWords) {
    // forms that repeat whole words at line-ends, in a set order
    const want = check.endWords;
    const ends = lines.map((l) => normWord(lastWord(l)));
    const key = {};
    let ok = ends.length >= want.length;
    want.forEach((sym, i) => {
      if (ends[i] === undefined) return;
      if (key[sym] === undefined) key[sym] = ends[i];
      else if (key[sym] !== ends[i]) ok = false;
    });
    out.push({ id: 'endWords', ok });
  }
  if (check.forbid) {
    const found = barredFound(text, check.forbid);
    out.push({ id: 'forbid', found, ok: found.length === 0 });
  }
  if (check.noPeriod) {
    // lines, by number, that must not end with a period; `seen` are those written so far
    const seen = check.noPeriod.filter((n) => lines[n - 1] !== undefined);
    const found = seen.filter((n) => endsWithPeriod(lines[n - 1]));
    out.push({ id: 'noPeriod', lines: check.noPeriod, seen, found, ok: found.length === 0 });
  }
  if (check.runOn) {
    // lines, by number, that must not all end with a period: a sentence
    // has to run on past one of them. Nothing is judged until all are written.
    const seen = check.runOn.filter((n) => lines[n - 1] !== undefined);
    const stopped = seen.filter((n) => endsWithPeriod(lines[n - 1]));
    const ready = seen.length === check.runOn.length;
    out.push({ id: 'runOn', lines: check.runOn, ready, stopped, ok: !ready || stopped.length < check.runOn.length });
  }
  return out;
}

export function allOk(text, check) {
  if (!text.trim()) return false;
  return runChecks(text, check).every((c) => c.ok);
}
