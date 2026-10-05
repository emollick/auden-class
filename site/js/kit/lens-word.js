// Word: a word whose sense or history matters is underlined, with a gloss
// set under it and a note beside the plate.
//
//   notes: [{ row, w: [first, last], gloss: "undergo · feel pain", note: "...", source: "..." }]

import { mk, el, lineBoxes, drawn, RED, QUIET } from './draw.js';
import { rich, tidy } from '../rich.js';

const span = (note) => (Array.isArray(note.w) ? note.w : [note.w, note.w]);

// the notes in the order their words stand in the passage, whatever order the reading lists them in
function inPlace(ctx, lens) {
  const order = [...ctx.rows.keys()];
  return (lens.notes || []).map((note, n) => ({ note, n, at: order.indexOf(String(note.row)), a: span(note)[0] }))
    .sort((x, y) => (x.at < 0 ? 1e9 : x.at) - (y.at < 0 ? 1e9 : y.at) || x.a - y.a || x.n - y.n).map((x) => x.note);
}

// rows that were given room for a second level of glosses give it back; says whether any had it
function shallow(ctx) {
  const deep = ctx.stage.querySelectorAll('[style*="--deep"]');
  deep.forEach((n) => n.style.removeProperty('--deep'));
  return deep.length > 0;
}

function draw(ctx, lens, run) {
  const narrow = ctx.narrow();
  const lane = narrow ? 14 : 14.5;
  const had = shallow(ctx);
  let b = ctx.box();
  const items = [];
  inPlace(ctx, lens).forEach((note) => {
    const [a, z] = span(note);
    const nodes = ctx.words(note.row, a, z);
    if (!nodes.length) return;
    // a word that is not shown (it stands outside what the plate shows of its row) takes no mark
    if (!lineBoxes(nodes, b).length) return;
    items.push({ note, nodes });
  });
  // The glosses of one line of type are set out together. Each stands under the middle of its word where
  // there is room. Two that would touch: the later one moves along to the right while it still begins
  // under its own word, or the earlier one moves to the left while it still ends under its own; only
  // where neither can does the later one go a level lower, and its row is then given the room for it.
  const placed = [];
  const clash = (g, x, level, but) => placed.filter((p) => p !== but && p.block === g.block && p.level === level && Math.abs(p.line - g.line) < 2 && x < p.x + p.gw + 10 && x + g.gw > p.x - 10);
  items.filter((it) => it.note.gloss).forEach((it) => {
    const parts = lineBoxes(it.nodes, b);
    // (a gloss is tidied as running words are: a range of figures in it takes the longer stroke)
    const g = ctx.label(tidy(it.note.gloss), 0, 0);
    // (a word of another language named in a gloss, *mot*, stands upright in it)
    if (/[*<]/.test(it.note.gloss)) g.replaceChildren(...rich(it.note.gloss));
    const gw = g.getBoundingClientRect().width;
    // A noted phrase that has turned: the gloss stands under its first part, unless that part is too short
    // to carry it (one word at the end of a line) and another part is longer.
    let part = 0;
    if (parts.length > 1 && parts[0].w < gw) parts.forEach((x, i) => { if (x.w > parts[part].w) part = i; });
    const ln = parts[part];
    // a gloss keeps inside the block its word stands in (a second passage has its own column)
    const block = it.nodes[0].closest('.beside, .poem');
    const q = block ? block.getBoundingClientRect() : null;
    const lo = q ? Math.max(0, q.left - b.left) : 0;
    const hi = q ? Math.min(b.width, q.right - b.left) : b.width;
    const keep = Math.min(10, ln.w * 0.4);
    const me = { it, g, gw, block, lo, hi, ln, keep, part, line: ln.b, level: 0, x: Math.max(lo, Math.min(hi - gw, ln.cx - gw / 2)) };
    for (;;) {
      const hits = clash(me, me.x, me.level);
      if (!hits.length) break;
      const along = Math.max(...hits.map((p) => p.x + p.gw)) + 10;
      if (along <= ln.r - keep && along + gw <= hi && !clash(me, along, me.level).length) { me.x = along; break; }
      // the one gloss in the way steps to the left, if it can and still ends under its own word
      const p = hits.length === 1 ? hits[0] : null;
      const back = p ? me.x - 10 - p.gw : 0;
      if (p && p.x < me.x && back >= p.lo && back + p.gw >= p.ln.l + p.keep && !clash(p, back, p.level, p).length) { p.x = back; break; }
      if (me.level >= 2) break;
      me.level++;
      me.x = Math.max(lo, Math.min(hi - gw, ln.cx - gw / 2));
    }
    placed.push(me);
    it.gloss = me;
  });
  // room under a row for the glosses that went lower (under its last line of type: a line that has
  // turned has no room to give between its two parts)
  let deepened = false;
  for (const p of placed) {
    if (!p.level) continue;
    const par = p.it.nodes[0].closest('.tx, .pr');
    if (!par) continue;
    const now = parseFloat(par.style.getPropertyValue('--deep')) || 0;
    if (p.level * lane > now) { par.style.setProperty('--deep', `${p.level * lane}px`); deepened = true; }
  }
  // the rows below have moved: set the two passages level again, and measure afresh
  if ((had || deepened) && ctx.settle) ctx.settle();
  b = ctx.box();
  let k = 0;
  items.forEach((it) => {
    const lines = lineBoxes(it.nodes, b);
    lines.forEach((ln) => {
      const p = mk('path', { class: 'arc draw', d: `M${ln.l} ${ln.b + 2}H${ln.r}`, stroke: RED, 'stroke-width': 1.5 });
      ctx.ov.append(p); ctx.later(drawn(p, run), 100 + k * 180);
    });
    if (it.gloss && lines.length) {
      const { g, x, level, part } = it.gloss;
      it.gloss.top = lines[Math.min(part, lines.length - 1)].b + (narrow ? 5 : 6) + level * lane;
      g.style.left = `${x}px`; g.style.top = `${it.gloss.top}px`;
      ctx.later(() => g.classList.add('in'), run ? 200 + k * 260 : 0);
    }
    k++;
  });
  // two glosses that stand close together on one line would read as one phrase: a hairline parts them
  const set = placed.filter((p) => p.top !== undefined).sort((x, y) => x.top - y.top || x.x - y.x);
  set.forEach((p, i) => {
    const q = set[i + 1];
    if (!q || q.block !== p.block || Math.abs(q.top - p.top) > 2) return;
    const gap = q.x - (p.x + p.gw);
    if (gap >= 18 || gap < 2) return;
    const x = p.x + p.gw + gap / 2; const h = narrow ? 10 : 11;
    const bar = mk('path', { class: 'mk fade', d: `M${x} ${p.top + 4}v${h}`, stroke: QUIET, 'stroke-width': 0.8 });
    ctx.ov.append(bar); ctx.later(() => bar.classList.add('in'), run ? 400 + i * 120 : 0);
  });
}

function off(ctx) { shallow(ctx); }

// A note stands under a head in bold: the words of its row. Where the note itself opens with a word of that
// head, named as a word (*word*), the head is not said twice: the note's own word is set as the head, and
// the words of the row are not printed before it. (The note's sentence is left as it was written. A word is
// what stands between two spaces or after an apostrophe: the half of a word that a hyphen joins is not the
// head's word, and a note that opens with it keeps the whole head before it.)
const wordsOf = (s) => String(s == null ? '' : s).toLowerCase().split(/[\s\u00a0'’]+/u).map((w) => w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '')).filter(Boolean);
function opening(note, head) {
  const m = String(note == null ? '' : note).match(/^\s*(?:\*([^*]+)\*|<i>([^<]+)<\/i>)/);
  if (!m) return null;
  const mine = wordsOf(m[1] || m[2]); const heads = wordsOf(head);
  if (!mine.length || !heads.length || !(mine.every((x) => heads.includes(x)) || heads.every((x) => mine.includes(x)))) return null;
  return { head: (m[1] || m[2]).trim(), rest: String(note).slice(m[0].length) };
}

function aside(ctx, lens) {
  const notes = inPlace(ctx, lens).filter((n) => n.note);
  if (!notes.length) return null;
  const box = el('div', { class: 'keys' });
  notes.forEach((note) => {
    const [a, z] = span(note);
    const head = ctx.text(note.row, a, z);
    const own = opening(note.note, head);
    const p = el('p', { class: 'wn' }, own ? [el('b', { text: own.head }), ...rich(own.rest)] : [el('b', { text: head }), ' ', ...rich(note.note)]);
    ctx.refer(p, ctx.words(note.row, a, z));
    box.append(p);
  });
  return box;
}

export default { name: 'Word', draw, off, aside };
