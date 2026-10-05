// Small tools the lenses share: making marks, measuring words, timing.

export const NS = 'http://www.w3.org/2000/svg';
// Colors are named in css/atlas.css; a mark takes its color by name.
export const INK = 'var(--ink)';
export const QUIET = 'var(--quiet)';
export const HAIR = 'var(--hair)';
export const RED = 'var(--red)';
export const BLUE = 'var(--blue)';
export const OCHRE = 'var(--ochre)';
export const GREEN = 'var(--green)';
export const PLUM = 'var(--plum)';
export const TEAL = 'var(--teal)';
export const UMBER = 'var(--umber)';
export const SLATE = 'var(--slate)';
// the colors rhymes and the parts of a figure are told apart by, in order
export const CLASSES = [OCHRE, BLUE, RED, GREEN, PLUM, TEAL, UMBER, SLATE];
export const PARTS = [RED, BLUE, OCHRE, GREEN, PLUM, TEAL, UMBER, SLATE];
// a sound that returns inside the lines: its color is one that no rhyme of the plate has taken
export const THREADS = [TEAL, PLUM, UMBER, SLATE, GREEN, BLUE, OCHRE, RED];
export const threadColor = (index, rhymes = 0) => {
  const taken = CLASSES.slice(0, Math.min(rhymes, CLASSES.length));
  const free = THREADS.filter((c) => !taken.includes(c));
  // (a plate whose rhymes have taken every color: the thread is told by its dots)
  const pool = free.length ? free : THREADS;
  return pool[index % pool.length];
};
// a pale ground for a band or a field in a drawing
export const TINT = 'var(--tint)';
// rhyme letters that mean "this line has no rhyme"
export const NO_RHYME = new Set(['x', 'X', '-', '_', '.', '0', '']);

export const still = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

export function mk(tag, attrs = {}, text) {
  const e = document.createElementNS(NS, tag);
  for (const k of Object.keys(attrs)) {
    const v = attrs[k];
    if ((k === 'fill' || k === 'stroke') && String(v).startsWith('var(')) e.style[k] = v; else e.setAttribute(k, v);
  }
  if (text !== undefined) e.textContent = text;
  return e;
}

export function el(tag, attrs = {}, kids = []) {
  const e = document.createElement(tag);
  for (const k of Object.keys(attrs)) {
    if (k === 'class') e.className = attrs[k] || '';
    else if (k === 'html') e.innerHTML = attrs[k];
    else if (k === 'text') e.textContent = attrs[k];
    else if (attrs[k] != null && attrs[k] !== false) e.setAttribute(k, attrs[k]);
  }
  for (const kid of [].concat(kids)) if (kid) e.append(kid);
  return e;
}

// The box of an element inside another box.
export function rel(node, box) {
  const r = node.getBoundingClientRect();
  return { l: r.left - box.left, r: r.right - box.left, t: r.top - box.top, b: r.bottom - box.top, cx: (r.left + r.right) / 2 - box.left, cy: (r.top + r.bottom) / 2 - box.top, w: r.width, h: r.height };
}

// The box of the last line of type an element stands on (two words joined by a dash may part where a line turns).
export function lastBox(node, box) {
  const rs = node.getClientRects(); const r = rs.length ? rs[rs.length - 1] : node.getBoundingClientRect();
  return { l: r.left - box.left, r: r.right - box.left, t: r.top - box.top, b: r.bottom - box.top, cx: (r.left + r.right) / 2 - box.left, cy: (r.top + r.bottom) / 2 - box.top, w: r.width, h: r.height };
}

// Boxes grouped by the line of type each stands on (a long line of verse
// may turn over on a narrow screen; a paragraph of prose always does).
export function byLine(boxes) {
  const lines = [];
  for (const b of boxes) {
    const last = lines[lines.length - 1];
    if (last && Math.abs(last[0].cy - b.cy) < b.h * 0.6) last.push(b); else lines.push([b]);
  }
  return lines;
}

// One box for each line of type that a run of elements stands on.
export function lineBoxes(nodes, box) {
  return byLine(nodes.map((n) => rel(n, box)).filter((b) => b.w > 0)).map((line) => {
    const l = Math.min(...line.map((b) => b.l)); const r = Math.max(...line.map((b) => b.r));
    const t = Math.min(...line.map((b) => b.t)); const b = Math.max(...line.map((x) => x.b));
    return { l, r, t, b, cx: (l + r) / 2, cy: (t + b) / 2, w: r - l, h: b - t };
  });
}

// What stands between two lines of type, in the way of a stroke from one down to the other: the words of any
// line between the two heights (a line that has turned, a version set under its line), a speaker's name, a
// stage direction, the three points of a gap. Each as a box inside `box`.
export function hurdles(stage, box, top, bottom) {
  const out = [];
  const range = document.createRange();
  for (const n of stage.querySelectorAll('.w, .cut, .stage-s, .stage-d, .stage-gap')) {
    // (two words joined by a dash may stand on two lines: each line of them is a box of its own)
    for (let q of n.classList.contains('wj') ? n.getClientRects() : [n.getBoundingClientRect()]) {
      if (!q.width || !q.height) continue;
      const cy = (q.top + q.bottom) / 2 - box.top;
      if (!(cy > top && cy < bottom)) continue;
      // a name or a direction is a block as wide as its column: what counts is where its letters stand
      const name = !n.classList.contains('w') && !n.classList.contains('cut');
      if (name) { range.selectNodeContents(n); q = range.getBoundingClientRect(); if (!q.width) continue; }
      // (`under`: a word of a version set under its line; a stroke between two lines of the original may pass behind it)
      const under = !name && !!n.closest('.row > .pr');
      out.push({ l: q.left - box.left, r: q.right - box.left, t: q.top - box.top, b: q.bottom - box.top, pad: name ? 6 : 2, name, under });
    }
  }
  return out;
}

// The part of the straight stroke from a to z that lies inside a box grown by `pad`: where along the stroke
// it goes in and where it comes out (0 at a, 1 at z), or null if it does not pass through.
export function inside(a, z, q, pad = q.pad || 0) {
  const dx = z.x - a.x; const dy = z.y - a.y;
  let t0 = 0; let t1 = 1;
  for (const [p, d] of [[-dx, a.x - (q.l - pad)], [dx, q.r + pad - a.x], [-dy, a.y - (q.t - pad)], [dy, q.b + pad - a.y]]) {
    if (p === 0) { if (d < 0) return null; continue; }
    const u = d / p;
    if (p < 0) { if (u > t1) return null; if (u > t0) t0 = u; } else { if (u < t0) return null; if (u < t1) t1 = u; }
  }
  return [t0, t1];
}

// Does the straight stroke from a to z pass through one of those boxes, each grown by its `pad`?
export function crosses(a, z, boxes) { return boxes.some((q) => !!inside(a, z, q)); }

// Where a stroke from a to z is broken as it passes behind what stands between two lines: a speaker's name, a
// direction or the three points of a gap (each grown by 4 px), and the words of a version set under its line
// (the room their letters take, with 3 px to either side). Gives the hidden parts in order, joined where
// they meet (0 at a, 1 at z), and how much of the stroke they come to.
export function breaks(a, z, boxes) {
  const cuts = boxes.map((q) => (q.under ? inside(a, z, { l: q.l - 3, r: q.r + 3, t: q.t + 2, b: q.b + 2 }, 0) : inside(a, z, q, 4))).filter(Boolean).sort((m, n) => m[0] - n[0]);
  const out = [];
  for (const c of cuts) { const last = out[out.length - 1]; if (last && c[0] <= last[1]) last[1] = Math.max(last[1], c[1]); else out.push([c[0], c[1]]); }
  return { cuts: out, hidden: out.reduce((sum, c) => sum + (c[1] - c[0]), 0) };
}

// A line that draws itself: set up with the transition off, then let go.
export function drawn(path, run) {
  const n = path.getTotalLength();
  path.style.strokeDasharray = n;
  path.style.strokeDashoffset = run && !still() ? n : 0;
  return () => { path.style.strokeDashoffset = 0; };
}

// The letters of a word without the points before and after it.
export function bare(tok) {
  const m = tok.match(/^([^\p{L}\p{N}]*)(.*?)([^\p{L}\p{N}]*)$/u);
  return { lead: m[1].length, body: m[2], tail: m[3].length };
}

export function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

// Small things a printer sees to, wherever words run: a word and the number that goes with it stay on one
// line ("p. 12", "Chapter 21", "chapter 4", "Appendix II", "Matthew 10:29", "2 Corinthians 12:9", "3 May",
// "May 1941"), and so do the two ends of a range ("12–14", "xii–xiv") and a pair of initials. A range of
// figures is set with the longer stroke between its two ends, in one form everywhere.
const MONTHS = 'January|February|March|April|May|June|July|August|September|October|November|December';
const ROMAN = /^(?=.)m{0,3}(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})$/i;
export const keep = (s) => String(s == null ? '' : s)
  .replace(/\b(pp?|ll?|nos?|ch|chs|vols?|n|c|ca|fol|sc|st)\.[ \u00a0]+(?=\d|[ivxlc]+\b)/gi, '$1.\u00a0')
  .replace(/\b(Act|Scene|Book|Canto|Chapter|Part|Ode|Letter|Appendix|line|lines|page|pages)[ ]+(?=[\dIVXLC]+\b)/g, '$1\u00a0')
  // (in small letters too, and in the plural; "act I saw" is left alone)
  .replace(/\b(acts?|scenes?|books?|cantos?|chapters?|paragraphs?|sections?|Acts|Scenes|Books|Cantos|Chapters|Paragraphs?|Sections?|Lines?|Pages?)[ ]+(?=\d|(?!I [a-z])[IVXLC]+\b)/g, '$1\u00a0')
  .replace(/\b([A-Z])\.[ ]+(?=[A-Z]\.)/g, '$1.\u00a0')
  // a book and its chapter and verse (or a canticle and its canto and line), with the number before the book's name
  .replace(/\b([1-3])[ ]+(?=[A-Z][a-z]+ \d{1,3}[:.]\d)/g, '$1\u00a0')
  .replace(/\b([A-Z][a-z]+)[ ]+(?=\d{1,3}[:.]\d)/g, '$1\u00a0')
  // a day and its month, a month and its year
  .replace(new RegExp(`\\b(\\d{1,2})[ ]+(?=(?:${MONTHS})\\b)`, 'g'), '$1\u00a0')
  .replace(new RegExp(`\\b(${MONTHS})[ ]+(?=\\d{4}\\b)`, 'g'), '$1\u00a0')
  // (the two ends of a range of figures: one form wherever words run, the longer stroke, whichever stroke the
  // words were typed with: "3:18-19" is set as "3:18–19". Figures joined by more strokes than one are not a
  // range, a date written 2026-10-03 or the like: they keep their strokes, and keep to one line)
  .replace(/\d+(?:[–-]\d+)+/g, (run) => (run.split(/[–-]/).length === 2 ? run.replace(/[–-]/, '\u2060–\u2060') : run.replace(/[–-]/g, (dash) => `\u2060${dash}\u2060`)))
  .replace(/\b([ivxlcdm]+)([–-])([ivxlcdm]+)\b/gi, (m, a, dash, b) => (ROMAN.test(a) && ROMAN.test(b) && (a === a.toLowerCase()) === (b === b.toLowerCase()) ? `${a}\u2060${dash}\u2060${b}` : m));

// In a heading, a short word (an article, a preposition) is not left at the end of a line: it keeps
// to the word after it. A heading keeps a word with its number as running words do.
export const tie = (text) => keep(text)
  .replace(/(?<=^|[\s(*\u00a0“‘])(a|an|the|of|or|and|to|in|on|at|by|for|as|if|is|its|his|her|de|la|le|du|des|der|die|das|und|il) (?=\S)/gi, '$1\u00a0')
  // (the pronoun of one letter, as the article of one letter)
  .replace(/(?<=^|[\s(*\u00a0“‘])I (?=\p{Ll})/gu, 'I\u00a0');

// Words set as bare type (a label in a key, a figure's plain line, a cell of a table) may name a word:
// *x* (or <i>x</i>) is set in italics, as `rich()` reads it, and the stylesheet sets it upright where the
// line is italic. Words that hold no such mark come back as the one string they were, and print as before.
const NAMED = /\*([^*]+)\*|<i>([^<]+)<\/i>/g;
export function marked(text) {
  const s = String(text == null ? '' : text);
  const out = [];
  let at = 0;
  for (const m of s.matchAll(NAMED)) {
    if (m.index > at) out.push(s.slice(at, m.index));
    out.push(el('i', { text: m[1] || m[2] }));
    at = m.index + m[0].length;
  }
  if (!out.length) return [s];
  if (at < s.length) out.push(s.slice(at));
  return out;
}
// The same words where only plain text can stand (an `aria-label`, a `title`): the marks come off.
export const unmarked = (text) => String(text == null ? '' : text).replace(NAMED, (m, a, b) => a || b).replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1');

// A row of the key in a lens's margin: a small sample of a mark, and what it means.
export function key(sample, text) {
  const svg = mk('svg', { width: 30, height: 12, viewBox: '0 0 30 12', 'aria-hidden': 'true' });
  for (const s of [].concat(sample)) svg.append(s);
  return el('p', { class: 'k' }, [svg, el('span', {}, marked(text))]);
}

// The two faces, loaded before anything is measured. A slow network is not waited for.
let faces;
export function fontsReady() {
  if (!faces) {
    const want = ['420 38px "Cormorant Garamond"', 'italic 420 38px "Cormorant Garamond"', '400 16px "EB Garamond"', 'italic 400 16px "EB Garamond"'];
    const all = document.fonts && document.fonts.load ? Promise.all(want.map((f) => document.fonts.load(f).catch(() => null))) : Promise.resolve();
    faces = Promise.race([all, new Promise((done) => { setTimeout(done, 2600); })]);
  }
  return faces;
}
