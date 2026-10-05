// Rilke, The Journal of My Other Self (Die Aufzeichnungen des Malte Laurids
// Brigge), in the Norton edition (New York: W. W. Norton, 1930).
// The Norton title page reads "Translation by M. D. Herter Norton and John
// Linton", and the index follows it, since the Norton edition is the one
// the course names and the one printed here. The London issue of the same
// setting of type (Hogarth Press, 1930, The Notebook of Malte Laurids
// Brigge) names John Linton alone. See notes/rilke.md.
// There is no proofread e-text. The words are taken from the OCR that the
// Internet Archive made of a scan of the book (item journalofmyother00rilk),
// cleaned by rule, and then corrected word by word from the list in
// rilke-fixes.json, every entry of which was checked against the page
// image. See notes/rilke.md.
//
// The OCR file used is the item's _djvu.xml, which gives every word with
// its place on the page; pages, lines and paragraphs are worked out from
// those places. Pages are counted as the file counts them, from 0 (the
// Archive's page URL .../page/n<n> shows the same page); the printed page
// number is n - 3.

import fs from 'node:fs';
import path from 'node:path';
import { fetchText, writeText, blockWords } from '../lib/gutenberg.mjs';

const SCAN = ['ia_rilke_linton_djvu.xml', 'https://archive.org/download/journalofmyother00rilk/journalofmyother00rilk_djvu.xml'];
// A second scan of the same edition (another copy, another OCR engine).
// A few lines that a reader underlined in pencil in the first copy came
// out of its OCR as rubbish; those lines alone are read from this one.
const SCAN2 = ['ia_rilke_linton2_djvu.xml', 'https://archive.org/download/journalofmyother0000rain/journalofmyother0000rain_djvu.xml'];
const SCAN2_OFFSET = 4; // page n of the first scan is page n + 4 of the second

const FIXES = path.resolve(import.meta.dirname, 'rilke-fixes.json');

// The two halves of the book, by page of the scan.
const HALVES = [
  { name: 'Part One', id: 'p1', titlePage: 4, first: 6, last: 125 },
  { name: 'Part Two', id: 'p2', titlePage: 126, first: 128, last: 246 },
];
const ENTRIES = 71;          // the German has 71 entries; so has this edition
const LAST_LINE = 'END OF JOURNAL';
// Rilke's own notes, which the edition prints at the foot of the page: one
// to the draft of a letter, six to passages written in the margin, and his
// gloss of the Danish king's last word (the German has it too: Der Tod, der
// Tod). They are kept, each as a `q` block beside its paragraph. The one
// other footnote is the translator's English for the French prayer on
// page n54, and is dropped.
const AUTHORS_NOTES = ['A rough draft of a letter.', 'Written on the margin of the MS.', '(Death, death.)'];
// What the run must find. The OCR read the page number on 233 of the 239
// pages of text (not on n6, n7, n8, n10, n12, n18).
const EXPECT = { pageNumbers: 233, notesKept: 8, notesDropped: 1, heads: 2, paragraphs: 499, verseBlocks: 3, verseLines: 19, footAsterisks: 6 };

// Sittings: entries are gathered into parts of about this many words.
const SITTING = { min: 2500, max: 6000, aim: 4200 };

// ---------------------------------------------------------------- reading

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };
const unescape = (s) => s.replace(/&(#x?[0-9a-fA-F]+|[a-z]+);/g, (m, e) => {
  if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
  return ENT[e] ?? m;
});

// pages[n].lines[i].words[j] = { t, x0, y0, x1, y1 }. A WORD element that
// holds two words (ABBYY joins the tail of a word broken at a line end to
// the word after it) gives two words with the one box. Lines are counted
// among those that have words; words are counted after this splitting.
function parsePages(xml) {
  const pages = [];
  for (const obj of xml.split('<OBJECT ').slice(1)) {
    const lines = [];
    let cur = null;
    const re = /<LINE(?: [^>]*)?>|<WORD coords="(\d+),(\d+),(\d+),(\d+)"[^>]*>([^<]*)<\/WORD>/g;
    let m;
    while ((m = re.exec(obj))) {
      if (m[1] === undefined) {
        cur = { words: [] };
        lines.push(cur);
        continue;
      }
      for (const t of unescape(m[5]).split(/\s+/).filter(Boolean)) {
        cur.words.push({ t, x0: Number(m[1]), y1: Number(m[2]), x1: Number(m[3]), y0: Number(m[4]) });
      }
    }
    pages.push({ lines: lines.filter((l) => l.words.length) }); // lines are numbered among those that hold words
  }
  return pages;
}

const lineText = (l) => l.words.map((w) => w.t).join(' ');
const straight = (s) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');

// ------------------------------------------------------------ corrections

// rilke-fixes.json:
//   lines:     [{ n, line, line2 }]  line `line` of page n is replaced by line `line2` of the same page in the second scan
//   words:     [{ n, line, word, wrong, right }]  the words from `word` on (as many as `wrong` has) are replaced by `right`
//              (with `page`: the edition itself misprints the word; `page` is what it prints, `right` the word meant)
//   asterisks: [{ n, after }]  an asterisk stands below line `after`, at the foot of the page, which the OCR did not read
//   hyphens:   [{ n, line, keep }]  the word broken at the end of this line keeps its hyphen: `keep` is the whole word
// Every entry must find exactly what it names, or the run stops.
function applyFixes(pages, fixes, pages2) {
  const at = (f) => `page n${f.n}, line ${f.line}`;
  const lineOf = (f) => {
    const l = pages[f.n] && pages[f.n].lines[f.line];
    if (!l) throw new Error(`rilke: fix names ${at(f)}, which is not there`);
    return l;
  };
  for (const f of fixes.lines) {
    const l = lineOf(f);
    const src = pages2[f.n + SCAN2_OFFSET] && pages2[f.n + SCAN2_OFFSET].lines[f.line2];
    if (!src) throw new Error(`rilke: second scan has no line ${f.line2} on the page for ${at(f)}`);
    if (l.replaced) throw new Error(`rilke: ${at(f)} replaced twice`);
    // keep the place of the line on its own page; take the words
    const box = { x0: Math.min(...l.words.map((w) => w.x0)), x1: Math.max(...l.words.map((w) => w.x1)), y0: Math.min(...l.words.map((w) => w.y0)), y1: median(l.words.map((w) => w.y1)) };
    l.words = src.words.map((w) => ({ t: straight(w.t), ...box }));
    l.replaced = true;
    l.flush = true; // none of these lines begins a paragraph (checked by eye)
  }
  // word fixes: from the right of each line to the left, so that the
  // counting of words stays that of the OCR
  const byLine = new Map();
  for (const f of fixes.words) {
    const k = `${f.n}.${f.line}`;
    if (!byLine.has(k)) byLine.set(k, []);
    byLine.get(k).push(f);
  }
  let applied = 0;
  let misprints = 0;
  for (const list of byLine.values()) {
    list.sort((a, b) => b.word - a.word);
    let floor = Infinity;
    for (const f of list) {
      const l = lineOf(f);
      const want = f.wrong.split(' ');
      const have = l.words.slice(f.word, f.word + want.length).map((w) => w.t);
      if (have.join(' ') !== f.wrong) throw new Error(`rilke: ${at(f)}, word ${f.word}: expected ${JSON.stringify(f.wrong)}, found ${JSON.stringify(have.join(' '))}`);
      if (f.word + want.length > floor) throw new Error(`rilke: fixes overlap at ${at(f)}, word ${f.word}`);
      floor = f.word;
      const old = l.words.slice(f.word, f.word + want.length);
      const box = { x0: Math.min(...old.map((w) => w.x0)), x1: Math.max(...old.map((w) => w.x1)), y0: Math.min(...old.map((w) => w.y0)), y1: Math.max(...old.map((w) => w.y1)) };
      const put = f.right === '' ? [] : f.right.split(' ').map((t) => ({ t, ...box }));
      l.words.splice(f.word, want.length, ...put);
      applied++;
      if (f.page !== undefined) misprints++;
    }
  }
  for (const f of fixes.asterisks) {
    const l = lineOf({ n: f.n, line: f.after });
    l.asteriskBelow = true;
  }
  for (const f of fixes.hyphens) {
    const l = lineOf(f);
    l.keepHyphen = f.keep;
  }
  return { applied, misprints };
}

// ---------------------------------------------------------------- the page

function median(a) {
  const s = [...a].sort((x, y) => x - y);
  const h = s.length >> 1;
  return s.length % 2 ? s[h] : (s[h - 1] + s[h]) / 2;
}

const PITCH = 95;        // lines of text stand about 73 apart; nothing under 95 is a gap
const BREAK_GAP = 180;   // an entry break leaves 200 to 300, with or without its asterisk read
const SETOFF_GAP = 120;  // verse is set off by half a line: about 145
const FOOTNOTE_PITCH = 56; // lines of a footnote stand about 45 apart
const NUMBER_GAP = 160;   // the page number stands 100 to 135 below the last line

// Measure the lines of one page and say what each is.
function readPage(page, n, tally, shortPage) {
  // `i` is the line's number in the OCR, whatever the corrections removed
  const lines = page.lines.map((l, i) => ({ l, i })).filter(({ l }) => l.words.length).map(({ l, i }) => ({
    n, i, words: l.words, text: lineText(l),
    x0: Math.min(...l.words.map((w) => w.x0)), x1: Math.max(...l.words.map((w) => w.x1)),
    base: median(l.words.map((w) => w.y1)),
    asteriskBelow: l.asteriskBelow, keepHyphen: l.keepHyphen, flush: l.flush,
  }));
  if (!lines.length) return [];
  // the page number: a word alone below the text
  const last = lines[lines.length - 1];
  const before = lines[lines.length - 2];
  if (last.words.length === 1 && last.text.length <= 4 && last.text !== '*' && (!before || last.base - before.base >= PITCH - 20)) {
    // The number stands 100 to 135 below the last line of a full page. If it
    // stands further off, something between them was not read: the asterisk
    // of an entry that ends with the page, which the corrections must supply.
    if (before && last.base - before.base > NUMBER_GAP && before.text !== '*' && !before.asteriskBelow && !shortPage) {
      throw new Error(`rilke: page n${n}: the page number stands ${last.base - before.base} below the last line; is an asterisk unread?`);
    }
    lines.pop();
    tally.pageNumbers++;
  }
  // a footnote: from a line that opens with an asterisk, set close, to the foot
  let noteAt = -1;
  for (let k = 1; k < lines.length; k++) {
    if (!/^\*/.test(lines[k].text) || lines[k].text === '*') continue;
    let close = true;
    for (let j = k + 1; j < lines.length; j++) if (lines[j].base - lines[j - 1].base > FOOTNOTE_PITCH) close = false;
    if (close && lines[k].base - lines[k - 1].base >= PITCH - 25) { noteAt = k; break; }
  }
  let note = null;
  if (noteAt >= 0) {
    const noteLines = lines.splice(noteAt);
    const w0 = noteLines[0].words;
    noteLines[0].words = w0[0].t === '*' ? w0.slice(1) : [{ ...w0[0], t: w0[0].t.slice(1) }, ...w0.slice(1)];
    note = joinLines(noteLines, null);
  }
  // the left edge of the text: lines after a broken word have no true
  // place for their first word (see parsePages), so they do not vote
  lines.forEach((l, k) => { l.afterHyphen = k > 0 && /-$/.test(lines[k - 1].text); });
  const voters = lines.filter((l) => l.words.length >= 5 && !l.afterHyphen).map((l) => l.x0).sort((a, b) => a - b);
  const margin = voters.length ? median(voters.slice(0, Math.max(1, Math.floor(voters.length / 3)))) : Math.min(...lines.map((l) => l.x0));
  const right = median(lines.map((l) => l.x1).sort((a, b) => a - b).slice(-Math.max(1, Math.floor(lines.length / 2))));
  const out = [];
  let prev = null;
  let pendingBreak = false;
  for (const l of lines) {
    l.indent = l.x0 - margin;
    l.full = l.x1 >= right - 40;
    l.gap = prev ? l.base - prev.base : 0;
    if (l.text === '*') {
      // an asterisk alone, in the middle of the measure: an entry break
      if (Math.abs((l.x0 + l.x1) / 2 - (margin + right) / 2) > 150) throw new Error(`rilke: page n${n}, line ${l.i}: an asterisk out of the middle`);
      pendingBreak = true;
      continue;
    }
    if (prev && l.gap >= BREAK_GAP && l.text !== LAST_LINE) pendingBreak = true;
    l.breakBefore = pendingBreak;
    pendingBreak = false;
    out.push(l);
    if (l.asteriskBelow) {
      pendingBreak = true;
      tally.footAsterisks++;
    }
    prev = l;
  }
  if (pendingBreak) {
    if (!out.length) throw new Error(`rilke: page n${n} is only an asterisk`);
    out[out.length - 1].breakAfter = true;
  }
  // the mark that sends the reader to the footnote
  if (note !== null) {
    const marked = out.flatMap((l) => l.words.map((w, k) => ({ l, w, k }))).filter((x) => x.w.t.includes('*'));
    if (marked.length !== 1) throw new Error(`rilke: page n${n} has a footnote and ${marked.length} marks for it`);
    const { l, w, k } = marked[0];
    const kept = AUTHORS_NOTES.includes(note);
    if (kept) tally.notesKept++;
    else tally.notesDropped++;
    const atStart = k === 0 && w.t.startsWith('*');
    w.t = w.t.replace('*', '');
    if (w.t === '') l.words.splice(k, 1);
    l.text = lineText(l);
    if (kept) l.note = { text: note, before: atStart };
  } else {
    for (const l of out) if (l.text.includes('*')) throw new Error(`rilke: page n${n}, line ${l.i}: an asterisk in the text and no footnote: ${JSON.stringify(l.text)}`);
  }
  return out;
}

// ------------------------------------------------------- lines into words

// Whether a word broken at a line end keeps its hyphen is settled in
// decideHyphens; here the answer is only carried out.
function joinLines(lines, hyphen) {
  const words = [];
  lines.forEach((l, k) => {
    l.words.forEach((w, j) => {
      const prevLine = lines[k - 1];
      if (j === 0 && prevLine && words.length && /[A-Za-zÀ-ÿ]-$/.test(words[words.length - 1])) {
        const head = words[words.length - 1];
        const keep = hyphen ? hyphen(prevLine, head, w.t) : false;
        words[words.length - 1] = (keep ? head : head.slice(0, -1)) + w.t;
      } else words.push(w.t);
    });
  });
  return tidy(words);
}

// The edition sets a thin space before ; : ? ! and round its dashes, and
// spaces the points of an ellipsis; the OCR gives these as it happens to
// see them. Here: no space before a stop, none round a dash, the points
// of an ellipsis closed up. An ellipsis of three points keeps the space
// the edition gives it after a word (`word ...`); a full stop and three
// points stand against their word (`word....`).
function tidy(words) {
  // points first: `.` `.` `.'` is one ellipsis
  const toks = [];
  for (const t of words) {
    const prev = toks[toks.length - 1];
    if (prev !== undefined && /^\.+$/.test(prev) && /^\.+['")]*$/.test(t)) toks[toks.length - 1] = prev + t;
    else toks.push(t);
  }
  const out = [];
  for (const t of toks) {
    const prev = out[out.length - 1];
    let join = false;
    if (prev === undefined) join = false;
    else if (/^\.\./.test(t)) join = /\.$/.test(prev) || /^\.{4}/.test(t); // an ellipsis
    else if (/^[.;:?!,)]/.test(t)) join = true;                            // a stop the OCR set apart
    else if (/^—/.test(t) || /—$/.test(prev)) join = true;                 // dashes
    else if (prev === '(') join = true;
    if (join) out[out.length - 1] = prev + t;
    else out.push(t);
  }
  for (const t of out) if (!/[A-Za-zÀ-ÿ0-9]/.test(t) && !/^\.{3,}['")]*$/.test(t)) throw new Error(`rilke: a mark standing alone: ${JSON.stringify(t)} in ${JSON.stringify(out.join(' ').slice(0, 80))}`);
  return out.join(' ');
}

// A word broken at the end of a line: joined, unless the hyphen is the
// word's own. The book itself is the first witness: if the joined form
// stands elsewhere in it within a line, join; if the hyphened form does,
// keep the hyphen. What the book does not settle is in rilke-fixes.json
// (`hyphens`), settled from a word list and, where need be, by eye.
function decideHyphens(lines) {
  const strip = (s) => s.toLowerCase().replace(/^[^a-zà-ÿ]+|[^a-zà-ÿ]+$/g, '');
  const solid = new Set();
  const hyphened = new Set();
  for (const l of lines) {
    l.words.forEach((w, j) => {
      const t = strip(w.t);
      if (!t) return;
      const lastOfLine = j === l.words.length - 1;
      if (lastOfLine && /-$/.test(w.t)) return;
      if (j === 0 && l.afterHyphen) return;
      if (t.includes('-')) hyphened.add(t);
      else solid.add(t);
    });
  }
  const undecided = [];
  const both = [];   // the book has the word both ways: joined here, and reported
  const decide = (line, head, tail) => {
    const a = strip(head.slice(0, -1));
    const b = strip(tail);
    const whole = `${head}${tail}`.replace(/^[^A-Za-zÀ-ÿ]+|[^A-Za-zÀ-ÿ]+$/g, '');
    if (line.keepHyphen !== undefined) {
      if (line.keepHyphen !== whole) throw new Error(`rilke: page n${line.n}, line ${line.i}: the hyphen to keep is in ${JSON.stringify(whole)}, not ${JSON.stringify(line.keepHyphen)}`);
      line.keepUsed = true;
      return true;
    }
    if (solid.has(a + b)) {
      if (hyphened.has(`${a}-${b}`)) both.push({ n: line.n, line: line.i, whole });
      return false;
    }
    if (hyphened.has(`${a}-${b}`)) return true;
    undecided.push({ n: line.n, line: line.i, joined: a + b, hyphened: `${a}-${b}`, whole });
    return false;
  };
  return { decide, undecided, both, solid, hyphened };
}

// ------------------------------------------------------------- the blocks

// where[block] = { n, line }: the page and line of the scan at which the
// block begins. Kept beside the blocks, for the checking tools; not written out.
const where = new WeakMap();

function blocksOf(lines, tally, hyphen) {
  // Each entry: { blocks }. A paragraph is gathered line by line.
  const entries = [];
  let entry = null;
  let para = null;       // { lines, note }
  let verse = null;      // { rows: [[line, ...]] } rows are lines of the poem with their turned-over ends
  const flush = () => {
    const put = (b, l) => {
      where.set(b, { n: l.n, line: l.i });
      entry.blocks.push(b);
    };
    if (para) {
      const text = joinLines(para.lines, hyphen);
      if (para.note && para.note.before) put({ k: 'q', text: para.note.text }, para.lines[0]);
      put({ k: 'p', text }, para.lines[0]);
      tally.paragraphs++;
      if (para.note && !para.note.before) put({ k: 'q', text: para.note.text }, para.lines[para.lines.length - 1]);
      para = null;
    }
    if (verse) {
      put({ k: 'v', lines: verse.rows.map((row) => joinLines(row, hyphen)) }, verse.rows[0][0]);
      tally.verseBlocks++;
      tally.verseLines += verse.rows.length;
      verse = null;
    }
  };
  let breakNext = true;
  let prev = null;
  for (const l of lines) {
    const newPage = !prev || prev.n !== l.n;
    if (l.breakBefore || breakNext) {
      flush();
      entry = { blocks: [], n: l.n, line: l.i };
      entries.push(entry);
      breakNext = false;
    }
    const opening = entry.blocks.length === 0 && !para && !verse;
    const isVerseIndent = !l.afterHyphen && !l.flush && l.indent >= 40 && l.indent < 90;
    if (opening && l.indent > 250 && l.full && l.words.length <= 5) {
      // a head over the entry, set to the right in small capitals
      const head = { k: 'h', level: 3, text: joinLines([l], hyphen) };
      where.set(head, { n: l.n, line: l.i });
      entry.blocks.push(head);
      tally.heads++;
    } else if (verse && (l.afterHyphen || (l.indent >= 130 && prev.full)) && !newPage) {
      verse.rows[verse.rows.length - 1].push(l); // the end of a long line of verse, turned over
    } else if (isVerseIndent && (verse ? l.gap < SETOFF_GAP : (l.gap >= SETOFF_GAP || newPage))) {
      if (!verse) {
        flush();
        verse = { rows: [] };
      }
      verse.rows.push([l]);
    } else if (isVerseIndent && verse) {
      flush();
      verse = { rows: [[l]] };
    } else {
      const starts = !l.flush && !l.afterHyphen && l.indent >= 90;
      if (verse || !para || starts) {
        flush();
        para = { lines: [] };
      }
      para.lines.push(l);
      if (l.note) {
        if (para.note) throw new Error(`rilke: two notes to one paragraph at page n${l.n}`);
        para.note = { text: l.note.text, before: l.note.before && para.lines.length === 1 };
      }
    }
    if (l.breakAfter) breakNext = true;
    prev = l;
  }
  flush();
  return entries;
}

// Gather the entries of one half into sittings: the grouping whose parts
// lie nearest the aim, none beyond the limits where the entries allow.
function sittings(entries) {
  const w = entries.map((e) => blockWords(e.blocks));
  const n = entries.length;
  const cost = (words, single) => {
    let c = ((words - SITTING.aim) / 1000) ** 2;
    if (words < SITTING.min) c += 100 + (SITTING.min - words) / 10;
    if (words > SITTING.max && !single) c += 100 + (words - SITTING.max) / 10;
    return c;
  };
  const best = Array(n + 1).fill(Infinity);
  const cut = Array(n + 1).fill(0);
  best[0] = 0;
  for (let j = 1; j <= n; j++) {
    let sum = 0;
    for (let i = j - 1; i >= 0; i--) {
      sum += w[i];
      const c = best[i] + cost(sum, j - i === 1);
      if (c < best[j]) { best[j] = c; cut[j] = i; }
      if (sum > SITTING.max * 2) break;
    }
  }
  const groups = [];
  for (let j = n; j > 0; j = cut[j]) groups.unshift(entries.slice(cut[j], j));
  return groups;
}

// -------------------------------------------------------------------- run

export function run() {
  const pages = parsePages(fetchText(...SCAN));
  const fixes = JSON.parse(fs.readFileSync(FIXES, 'utf8'));
  const pages2 = fixes.lines.length ? parsePages(fetchText(...SCAN2)) : [];
  const { applied, misprints } = applyFixes(pages, fixes, pages2);

  const tally = { pageNumbers: 0, footAsterisks: 0, notesKept: 0, notesDropped: 0, heads: 0, paragraphs: 0, verseBlocks: 0, verseLines: 0 };
  const parts = [];
  let entryCount = 0;
  const undecidedHyphens = [];
  const entriesPerPart = [];
  const allLines = [];
  const halves = HALVES.map((half) => {
    const title = pages[half.titlePage].lines.map(lineText).join(' ');
    if (title !== half.name.toUpperCase()) throw new Error(`rilke: page n${half.titlePage} should be the title ${half.name.toUpperCase()}, found ${JSON.stringify(title)}`);
    const lines = [];
    for (let n = half.first; n <= half.last; n++) lines.push(...readPage(pages[n], n, tally, n === half.last));
    allLines.push(...lines);
    return { half, lines };
  });
  // the last line of the book is the printer's
  const lastLines = halves[1].lines;
  if (lastLines[lastLines.length - 1].text !== LAST_LINE) throw new Error(`rilke: the book should end with the line ${LAST_LINE}`);
  lastLines.pop();
  allLines.pop();

  const hy = decideHyphens(allLines);
  for (const { half, lines } of halves) {
    const entries = blocksOf(lines, tally, hy.decide);
    entryCount += entries.length;
    sittings(entries).forEach((group, k) => {
      const blocks = [];
      group.forEach((e, j) => {
        if (j) blocks.push({ k: 'h', level: 3, text: '*' });
        blocks.push(...e.blocks);
      });
      parts.push({ id: `${half.id}-${String(k + 1).padStart(2, '0')}`, label: `${half.name}, ${k + 1}`, group: half.name, blocks });
      entriesPerPart.push(group.length);
    });
  }
  undecidedHyphens.push(...hy.undecided);
  for (const l of allLines) if (l.keepHyphen !== undefined && !l.keepUsed) throw new Error(`rilke: page n${l.n}, line ${l.i}: no broken word to keep the hyphen of`);

  // What was found must be what the book has.
  if (entryCount !== ENTRIES) throw new Error(`rilke: expected ${ENTRIES} entries, found ${entryCount}`);
  for (const k of Object.keys(EXPECT)) if (tally[k] !== EXPECT[k]) throw new Error(`rilke: expected ${k} = ${EXPECT[k]}, found ${tally[k]}`);
  const first = parts[0].blocks;
  if (first[0].k !== 'h' || first[0].text !== '11 September, rue Toullier') throw new Error(`rilke: the book should open with its date line, found ${JSON.stringify(first[0].text)}`);
  if (!first[1].text.startsWith('People come here, then, to live?')) throw new Error('rilke: the first paragraph does not open as expected');
  const lastBlocks = parts[parts.length - 1].blocks;
  const end = lastBlocks[lastBlocks.length - 1];
  if (end.k !== 'p' || !end.text.endsWith('But He was not yet willing.')) throw new Error('rilke: the last paragraph does not close as expected');

  // Nothing lost: every letter and figure of the lines taken into the text
  // (and of the author's notes kept) stands in a block. Joining lines and
  // closing up marks changes spaces and hyphens only.
  const letters = (s) => s.replace(/[^0-9A-Za-zÀ-ÿŒœ]/g, '').length;
  let taken = 0;
  for (const l of allLines) {
    taken += letters(l.words.map((w) => w.t).join(''));
    if (l.note) taken += letters(l.note.text);
  }
  let held = 0;
  for (const p of parts) {
    for (const b of p.blocks) {
      if (b.k === 'h' && b.text === '*') continue;
      held += letters(b.k === 'v' ? b.lines.join('') : b.text);
    }
  }
  if (taken !== held) throw new Error(`rilke: ${taken} letters in the lines of the text, ${held} in the blocks`);

  // Nothing of the OCR's furniture may be left in the text.
  for (const p of parts) {
    p.blocks.forEach((b, i) => {
      for (const t of b.k === 'v' ? b.lines : [b.text]) {
        const bad = b.k === 'h' && t === '*' ? null
          : /[*^_|\\<>{}\[\]=~§£¬■♦»«„°#@%+]/.exec(t) || /\s[,;:!?.)]/.exec(t.replace(/ \.\.\./g, '')) || /\(\s/.exec(t) || /\s—|—\s/.exec(t) || /^\d+$/.exec(t) || /\.\s\./.exec(t) || /[a-z]-\s/.exec(t);
        if (bad) throw new Error(`rilke: ${p.id}[${i}]: ${JSON.stringify(bad[0])} left in ${JSON.stringify(t.slice(Math.max(0, bad.index - 30), bad.index + 30))}`);
      }
    });
  }

  const index = writeText('rilke', {
    author: 'Rainer Maria Rilke',
    title: 'The Journal of My Other Self',
    translator: 'M. D. Herter Norton and John Linton',
    year: 1930,
    verse: false,
    source: { name: 'Internet Archive, scan of the Norton edition of 1930', url: 'https://archive.org/details/journalofmyother00rilk' },
    note: 'This text was read by machine from a scan of the edition of 1930 and corrected against the scan only where a word looked wrong, so some misread words may remain.',
  }, parts);
  const places = parts.map((p) => ({ id: p.id, blocks: p.blocks.map((b) => where.get(b) || null) }));
  return { ...index, entries: entryCount, entriesPerPart, fixesApplied: applied, misprints, tally, letters: held, undecidedHyphens, bothWays: hy.both, places };
}
