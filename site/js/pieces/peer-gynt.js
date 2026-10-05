// Peer Gynt: the drawing of its own.
//
//   onion / Layers: the coats in the order Peer strips them, one to a row,
//                   set against the play scene by scene, with a mark where
//                   each part is seen on the stage or only told. The rows
//                   go down in the order of the stripping; the marks step
//                   back through Act 5 and Act 4, against the order of the
//                   scenes. A mark is broken where the row itself says
//                   "it appears". A red rule in the margin, and red numbers,
//                   for the coats that the passage of this plate shows
//                   (the passage itself stands on the plate's other tabs).
//
// It is a chart of two orders, not a picture of an onion. It is drawn from
// the reading's own `facts` (remake/works/peer-gynt/reading.json): nothing of
// the play is typed here, and no number. The scenes of a row are read from
// the row's own words ("Act 4, scenes 6 to 8"), each time the page runs.

import { el, RED, INK, HAIR } from '../kit/draw.js';
import { sheet } from '../kit/diagram.js';

const PAPER = 'var(--paper)';
// the columns of the reading's table, by the names the reading gives them
const COAT = 'coat';
const NAME = 'Peer calls it';
const PART = 'the part he played';
const WHERE = 'seen or told in';
const ACTS = 'scenes in each act';
const SPEECH = 'the speech';
// the head of the plain table that stands here if the drawing cannot be made
const TABLE = 'The table';
// the words by which a row of the reading says that a part is likely, not sure
// ("appears in Act 4" is no such word: only "it appears", "appears to be" and the like)
const DOUBT = /\bit (?:appears|seems)\b|\b(?:appears?|seems?) to\b|\bapparently\b|\bpresumably\b|\bprobably\b|\bperhaps\b|\blikely\b|\b(?:may|might) be\b/i;

// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const count = (n, one, many) => `${n} ${n === 1 ? one : many}`;
const sum = (list) => list.reduce((a, b) => a + b, 0);

// "1 and 4", "6 to 8", "11 and 12": the numbers meant
function list(s) {
  const out = [];
  const re = /(\d+)(?:\s*(?:to|-|–)\s*(\d+))?/g;
  let m;
  while ((m = re.exec(s))) { const a = +m[1]; const z = m[2] ? +m[2] : a; for (let n = a; n <= z && n < a + 99; n++) out.push(n); }
  return out;
}

// The scenes a place such as "Act 4, scenes 6 to 8" names, each as its
// number among all the scenes of the play, counted from nothing. A whole act
// ("Acts 1 to 3") is all of its scenes. `told`: the words before the place
// say it is told there ("told in Act 4, scene 1"), not seen.
function places(where, acts) {
  const first = acts.map((n, i) => sum(acts.slice(0, i)));
  const out = [];
  for (const clause of String(where || '').split(';')) {
    const re = /\bacts?\s+(\d+(?:\s*(?:,|and|to|-|–)\s*\d+)*)(?:\s*,?\s*scenes?\s+(\d+(?:\s*(?:,|and|to|-|–)\s*\d+)*))?/gi;
    let told = false;
    let from = 0;
    let m;
    while ((m = re.exec(clause))) {
      const before = clause.slice(from, m.index);
      if (/\btold\b/i.test(before)) told = true; else if (/\b(?:seen|staged|played|shown)\b/i.test(before)) told = false;
      from = re.lastIndex;
      for (const a of list(m[1])) {
        if (a < 1 || a > acts.length) continue;
        const scenes = m[2] ? list(m[2]) : Array.from({ length: acts[a - 1] }, (_, k) => k + 1);
        for (const s of scenes) if (s >= 1 && s <= acts[a - 1]) out.push({ cell: first[a - 1] + s - 1, told });
      }
    }
  }
  return out;
}

// the drawing is as tall as what was set in it
function close(d, h) {
  d.svg.setAttribute('height', Math.ceil(h));
  d.svg.setAttribute('viewBox', `0 0 ${d.w} ${Math.ceil(h)}`);
}

// Words set over the drawing; with `read`, a link to that place in the book
// printed here. `fit`: no wider than the words, and at most `w`.
function words(d, x, y, w, text, o = {}) {
  const link = o.read && canRead() ? el('a', { href: `#/read/${o.read}`, text }) : null;
  const p = d.note(x, y, w, link ? '' : text, { at: o.at });
  if (link) { p.append(link); link.style.pointerEvents = 'auto'; }
  if (o.color) p.style.color = o.color;
  if (o.fit) { p.style.width = 'max-content'; p.style.maxWidth = `${w}px`; }
  p.style.pointerEvents = 'none';
  const b = p.getBoundingClientRect();
  return { node: p, w: b.width, h: b.height };
}

// how far below the top of such words the foot of their first line stands
function footOf(d) {
  const p = d.note(0, 0, 100, 'x');
  const s = el('span');
  s.style.cssText = 'display:inline-block;width:0;height:0';
  p.prepend(s);
  const b = s.getBoundingClientRect().bottom - p.getBoundingClientRect().top;
  p.remove();
  return b > 6 && b < 26 ? b : 13;
}

function chart(ctx, lens, run) {
  const facts = Array.isArray(lens.facts) ? lens.facts.filter((e) => e && typeof e === 'object') : [];
  const play = facts.find((e) => Array.isArray(e[ACTS]));
  if (!play) throw new Error(`facts: no ${ACTS}`);
  const acts = play[ACTS].map(Number);
  if (!acts.length || acts.some((n) => !(n >= 1))) throw new Error(`facts: ${ACTS} must be a number for each act`);
  const coats = facts.filter((e) => e !== play && e[COAT] !== undefined && e[NAME] !== undefined).map((e) => ({ ...e }));
  if (!coats.length) throw new Error('facts: no coats');
  const total = sum(acts);
  const first = acts.map((n, i) => sum(acts.slice(0, i)));
  const actOf = (cell) => { let a = 0; while (a < acts.length - 1 && cell >= first[a + 1]) a++; return a; };

  // which lines of the speech stand in the passage of this plate: the speech is one
  // block of the scene, and each coat takes the next of its lines in turn
  const at = /^(.+):(\d+)$/.exec((play[SPEECH] && play[SPEECH].read) || '');
  const here = at && at[1] === ctx.plate.src ? new Set(ctx.rowList.map((r) => String(r.id).split('.')).filter((id) => id[0] === at[2]).map((id) => +id[1])) : new Set();
  let next = 0;
  for (const k of coats) {
    // for each line of the speech that gives this coat, whether the passage holds it
    k.held = [];
    if (Number.isInteger(k.lines) && k.lines > 0) { for (let i = 0; i < k.lines; i++) k.held.push(here.has(next + i)); next += k.lines; }
    k.shown = k.held.filter(Boolean).length;
    // a part the reading gives with a word of doubt ("it appears, ...") has its
    // marks broken, and the key gives that word as the reading has it
    const doubt = DOUBT.exec(`${k[PART]} ${k[WHERE]}`);
    k.marks = places(k[WHERE], acts).map((p) => ({ ...p, unsure: !!doubt }));
    k.doubt = doubt && k.marks.length ? doubt[0].toLowerCase() : '';
  }
  const all = coats.flatMap((k) => k.marks);
  const doubts = [...new Set(coats.map((k) => k.doubt).filter(Boolean))];
  // the scene of this passage, from the name the page gives it
  const src = (ctx.piece.texts || []).find((t) => ctx.plate.src === `${t.text}/${t.part}`);
  const now = src ? places(src.label, acts)[0] : null;

  const d = sheet(ctx, lens, run, 400);
  const W = d.w;
  const wide = W >= 540;
  const xl = 24; // where the words begin: the number of the coat stands before it
  const gap = wide ? 6 : 5; // between two acts
  const GW = wide ? Math.round(Math.max(W * 0.44, Math.min(W - xl - 16 - 310, 420))) : W - xl; // the play takes what the words can spare
  const G0 = W - GW;
  const L = wide ? G0 - 16 - xl : W - xl; // the width the words of a row may take
  const c = (GW - gap * (acts.length - 1)) / total;
  const cx = (cell) => G0 + cell * c + actOf(cell) * gap;
  const foot = footOf(d);
  const mid = foot - 4; // where a rule stands beside a line of words

  // ----- the head: what the columns hold, and the play as a rule -----
  let y = 10;
  const h1 = d.text(xl, y, NAME, { cls: 'dg-lab', fill: INK });
  d.text(xl + h1.getComputedTextLength() + 14, y, PART, { cls: 'dg-lab' });
  if (!wide) y += 17;
  d.text(G0, y, WHERE, { cls: 'dg-lab' });
  y += 16;
  d.text(G0 - 5, y, 'Act', { anchor: 'end' });
  acts.forEach((n, a) => d.text(cx(first[a]), y, a + 1, { cls: 'dg-n' }));
  y += 7;
  acts.forEach((n, a) => {
    const x1 = cx(first[a]); const x2 = x1 + n * c;
    d.rule(x1, y, x2, y, { stroke: INK });
    for (let s = 0; s <= n; s++) { const x = Math.min(x2 - 0.5, x1 + s * c + 0.5); d.rule(x, y, x, y + 3.5, { stroke: INK }); }
  });
  if (now) d.bar(cx(now.cell), y - 0.5, c + 1, 4, { fill: RED });
  y += 13;

  // ----- a row to a coat, in the order they come off -----
  let ruled = null; // where the rule in the margin has come down to
  coats.forEach((coat, i) => {
    const t = 150 + i * 150;
    const y0 = y;
    const numbered = /^\d+$/.test(String(coat[COAT]));
    const own = []; // the marks of this row, which stand out while the pointer is on it
    let ty = y0;
    if (numbered) {
      own.push(d.text(xl - 8, y0 + foot, coat[COAT], { cls: 'dg-n', anchor: 'end', fill: coat.shown ? RED : INK, at: t }));
    } else {
      d.text(xl, y0 + 10, coat[COAT], { cls: 'dg-lab', fill: INK, at: t });
      ty += 15;
    }
    const name = words(d, xl, ty, L, coat[NAME], { color: INK, at: t });
    const part = words(d, xl, ty + name.h, L, coat[PART], { at: t });

    // the marks of this row, joined where they are of one kind and touch
    const runs = [];
    [...coat.marks].sort((a, b) => a.cell - b.cell).forEach((m) => {
      const last = runs[runs.length - 1];
      if (last && !m.told && !last.told && last.to === m.cell - 1 && actOf(last.to) === actOf(m.cell)) last.to = m.cell;
      else if (!last || last.told !== m.told || last.to !== m.cell) runs.push({ told: m.told, unsure: m.unsure, from: m.cell, to: m.cell });
    });
    const m1 = runs.length ? cx(runs[0].from) : null;
    const m2 = runs.length ? cx(runs[runs.length - 1].to) + c : null;

    // where it is seen or told, in words: on the row's rule, before its marks
    // if there is room there, after them if not, and failing both under it
    const line = wide ? ty + mid : ty + name.h + part.h + 9;
    let cut = null;
    let bottom = wide ? ty + name.h + part.h : line + 8;
    if (coat[WHERE]) {
      const where = words(d, G0, line - mid, GW, coat[WHERE], { read: coat.read, fit: true, at: t });
      let left = G0;
      if (runs.length && m1 - 8 - where.w >= G0) left = m1 - 8 - where.w;
      else if (runs.length && m2 + 8 + where.w <= W) left = m2 + 8;
      else if (runs.length) {
        const top = wide ? ty + name.h : line + 7;
        left = -1;
        where.node.style.top = `${top}px`;
        where.node.style.left = `${Math.max(G0, Math.min(m2, W) - where.w)}px`;
        bottom = Math.max(bottom, top + where.h);
      }
      if (left >= 0) { where.node.style.left = `${left}px`; cut = [left - 5, left + where.w + 5]; }
    }

    // the play, act by act, as a hairline; then the marks on it
    acts.forEach((n, a) => {
      const x1 = cx(first[a]); const x2 = x1 + n * c;
      if (!cut || cut[1] <= x1 || cut[0] >= x2) { d.rule(x1, line, x2, line, { at: t }); return; }
      if (cut[0] - x1 > 10) d.rule(x1, line, cut[0], line, { at: t });
      if (x2 - cut[1] > 10) d.rule(cut[1], line, x2, line, { at: t });
    });
    runs.forEach((r) => {
      const x1 = cx(r.from); const x2 = cx(r.to) + c;
      if (r.told) {
        const ring = d.dot((x1 + x2) / 2, line, 2.9, { fill: PAPER, stroke: INK, width: 1.3, at: t + 120 });
        if (r.unsure) ring.setAttribute('stroke-dasharray', '1.6 1.44');
        own.push(ring);
      } else own.push(d.rule(x1, line, x2, line, { stroke: INK, width: 3, dash: r.unsure ? '2 2' : null, at: t + 120 }));
    });

    // a rule in the margin beside the coats that the passage shows,
    // unbroken from one such row to the next
    if (coat.shown) { d.rule(1, ruled === null ? y0 + 3 : ruled, 1, bottom - 3, { stroke: RED, width: 1.6, at: t }); ruled = bottom - 3; } else ruled = null;

    // the whole row answers the pointer with the count of its lines, and its
    // number and marks stay dark while the other rows' go pale
    own.forEach((m) => m.classList.add('dg-hot'));
    if (coat.held.length) {
      const n = coat.held.length;
      const said = coat.shown === n ? 'in the passage' : coat.shown ? `${coat.shown} of them in the passage` : 'left out of the passage';
      const hit = d.bar(0, y0 - 5, W, bottom - y0 + 10, { fill: 'transparent' });
      d.hot(hit, `Coat ${coat[COAT]}: ${count(n, 'line', 'lines')} of the speech, ${said}`, own);
    }
    y = bottom + (wide ? 11 : 12);
  });
  close(d, y - (wide ? 9 : 8));

  // ----- what the marks mean -----
  const lines = coats.flatMap((k) => k.held);
  const inside = lines.filter(Boolean).length;
  const speech = play[SPEECH] && play[SPEECH].read;
  const shown = `in the passage: ${coats.filter((k) => k.shown).length} of the ${count(coats.filter((k) => k.held.length).length, 'coat', 'coats')}, and ${inside} of their ${count(lines.length, 'line', 'lines')} in `;
  const whole = speech && canRead() ? el('a', { href: `#/read/${speech}`, text: 'the speech' }) : el('span', { text: 'the speech' });
  whole.style.whiteSpace = 'nowrap';
  d.keys([
    all.some((m) => !m.told) ? { mark: 'line', color: INK, text: 'seen on the stage' } : null,
    all.some((m) => m.told) ? { mark: 'ring', color: INK, text: 'only told of' } : null,
    doubts.length ? { mark: 'dash', color: INK, text: `a part the row gives with “${doubts.join('” or “')}”` } : null,
    { mark: 'line', color: HAIR, text: 'the play: one step for each scene, whatever its length' },
    now ? { mark: 'line', color: RED, text: `${String(src.label).replace(/\bScene\b/, 'scene')}: the scene of this passage` } : null,
    inside ? { mark: 'line', color: RED, text: el('span', {}, [shown, whole]) } : null,
  ].filter(Boolean));
}

// The kit sets the facts out as a table if a drawing fails. Here that table
// would also print the keys this drawing alone uses (how many lines, where
// to open the book), so the drawing sets out its own: the rows of words only.
function plain(ctx, lens, run) {
  const mine = new Set(['lines', 'read']);
  const rows = (Array.isArray(lens.facts) ? lens.facts : [])
    .filter((e) => e && typeof e === 'object' && !Array.isArray(e[ACTS]) && e[SPEECH] === undefined)
    .map((e) => Object.fromEntries(Object.entries(e).filter(([k]) => !mine.has(k))));
  const d = sheet(ctx, lens, run, 1);
  const box = rows.length ? d.figures(rows, TABLE) : null;
  if (!box) return false;
  box.open = true;
  return true;
}

const layers = {
  name: 'Layers',
  stage: 'own',
  draw(ctx, lens, run) {
    try { chart(ctx, lens, run); } catch (e) {
      if (typeof console !== 'undefined') console.warn(e);
      if (!plain(ctx, lens, run)) throw e;
    }
  },
};

export default { lenses: { 'onion:shape': layers } };
