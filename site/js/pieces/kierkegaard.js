// Fear and Trembling: the three drawings of its own.
//
//   weaning / Tellings: Genesis 22 and the four tellings, one under the other.
//                       Each says what Abraham does and how it ends, in two
//                       columns, so that the five endings can be read down one
//                       column. A telling has a bar as long as its words, and
//                       after it, in red, a bar for the paragraph on weaning
//                       that follows; what that paragraph says stands under
//                       the telling, under red heads.
//   greater / Speech:   the speech as one ruled line, a stretch to each
//                       paragraph, as long as its words. Over each paragraph
//                       stands a dot for every time it says the name. The
//                       stretch before the name is first said is tinted.
//   window / Day:       the five paragraphs of the portrait as five stations
//                       down one line, in order; beside each, numbered through,
//                       the people the man is likened to there.
//
// Everything is read from each lens's own `facts` when the page runs
// (remake/works/kierkegaard/reading.json). No count, name or sentence of the
// reading is typed here: a head or a label is the key the fact stands under.

import { RED, INK, HAIR, TINT, mk } from '../kit/draw.js';
import { sheet, lin, num } from '../kit/diagram.js';

// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const isObj = (v) => !!v && typeof v === 'object' && !Array.isArray(v);
const str = (v) => (typeof v === 'string' && v.trim() ? v.trim() : '');
const wideOf = (node) => { try { return node.getComputedTextLength(); } catch (e) { return String(node.textContent).length * 6; } };
const tallOf = (node) => node.getBoundingClientRect().height || 17;
const times = (n) => (n === 0 ? 'not once' : n === 1 ? 'once' : `${num(n)} times`);
// how wide some words would stand in a class of the drawing
const probe = (d, words, cls) => { const t = d.text(0, -99, words, { cls }); const w = wideOf(t); t.remove(); return Math.ceil(w); };
// the drawing is as tall as what was set in it
const close = (d, h) => { const H = Math.ceil(h); d.svg.setAttribute('height', H); d.svg.setAttribute('viewBox', `0 0 ${d.w} ${H}`); };

// Words that must turn, set in the drawing line by line and made as even as they can be.
function fold(d, words, width, cls) {
  const ws = String(words).split(/\s+/).filter(Boolean);
  const fill = (max) => {
    const out = [];
    ws.forEach((x) => { const last = out[out.length - 1]; if (last && probe(d, `${last} ${x}`, cls) <= max) out[out.length - 1] = `${last} ${x}`; else out.push(x); });
    return out;
  };
  let best = fill(width);
  for (let max = width - 8; max > 48 && best.length > 1; max -= 8) { const next = fill(max); if (next.length > best.length) break; best = next; }
  return best;
}

// A name that opens its place in the book printed here: ruled under with a hairline, as a link is on
// the page, and the rule reddens under the pointer. (The drawing is one picture to a keyboard.)
function opens(d, nodes, read, rules, at) {
  if (!read || !canRead()) return null;
  const a = mk('a', { href: `#/read/${read}`, tabindex: -1 });
  a.style.textDecoration = 'none'; a.style.outline = 'none'; a.style.cursor = 'pointer';
  d.svg.append(a);
  const under = rules.map(([x1, x2, y]) => d.rule(x1, y, x2, y, { at }));
  a.append(...nodes, ...under);
  a.addEventListener('pointerenter', () => under.forEach((u) => { u.style.stroke = RED; }));
  a.addEventListener('pointerleave', () => under.forEach((u) => { u.style.stroke = HAIR; }));
  return a;
}

// ===== Tellings: one story and four tellings of it =====

// the keys the facts stand under; each is also the head its fact is printed under
const T = { name: 'story', does: 'Abraham', end: 'the end', mother: 'the mother', happy: 'called happy', words: 'words', after: 'words on weaning', same: 'opening words in common' };

function readTellings(f) {
  if (!Array.isArray(f) || !f.length) throw new Error('facts: no stories');
  const stories = f.map((r) => {
    if (!isObj(r) || !str(r[T.name]) || !str(r[T.does]) || !str(r[T.end])) throw new Error('facts: a story without its name, what Abraham does, or its end');
    const counted = typeof r[T.words] === 'number' && typeof r[T.after] === 'number';
    // how many words, from its first, a telling shares with the others: the facts may give it, and the drawing does without it where they do not
    const same = counted && typeof r[T.same] === 'number' && r[T.same] > 0 && r[T.same] < r[T.words] ? r[T.same] : null;
    return { name: str(r[T.name]), does: str(r[T.does]), end: str(r[T.end]), mother: str(r[T.mother]), happy: str(r[T.happy]), words: counted ? r[T.words] : null, after: counted ? r[T.after] : null, same, read: str(r.read) };
  });
  if (!stories.some((s) => s.words != null)) throw new Error('facts: no telling with its words counted');
  return stories;
}

const tellings = {
  name: 'Tellings',
  stage: 'own',
  draw(ctx, lens, run) {
    const stories = readTellings(lens.facts);
    const d = sheet(ctx, lens, run, 400);
    d.wrap.classList.add('setup');                       // nothing moves while the words are measured and set out
    const w = d.w;
    // two statements side by side; on the narrowest sheet one under the other
    const two = w >= 300;
    const gap = two ? Math.max(14, Math.min(28, Math.round(w * 0.05))) : 0;
    const cw = two ? (w - gap) / 2 : w;
    const x2 = two ? cw + gap : 0;

    // the bars: one scale for every telling, a word to `u` px
    const most = Math.max(...stories.map((s) => (s.words || 0) + (s.after || 0)));
    const ON = T.after.startsWith(`${T.words} `) ? T.after.slice(T.words.length + 1) : T.after;   // "on weaning"
    const figures = (x, y, s, at) => {
      const t = d.text(x, y, '', { at });
      const then = mk('tspan', {}, `${num(s.after)} ${ON}`);
      then.style.fill = RED;
      t.append(mk('tspan', {}, `${num(s.words)} ${T.words}, then `), then);
      return t;
    };
    const nameW = Math.max(...stories.map((s) => probe(d, s.name, 'dg-name')));
    // (an italic letter leans a little past its measure)
    const figW = 3 + Math.max(...stories.filter((s) => s.words != null).map((s) => { const t = figures(0, -99, s); const n = Math.ceil(wideOf(t)); t.remove(); return n; }));
    // beside the name where the bar can still be half a pixel to a word; under it where not
    const beside = nameW + 18 + most * 0.5 + 10 + figW <= w;
    const u = Math.min(0.8, (beside ? w - nameW - 18 - 10 - figW : w) / most);

    // a statement under its head
    const cell = (x, y, head, words, color, at) => {
      d.text(x, y + 9, head, { cls: 'dg-lab', fill: color, at });
      const n = d.note(x, y + 15, cw, words, { at });
      n.style.color = INK; n.style.textWrap = 'balance';
      return 15 + tallOf(n);
    };
    const pair = (y, a, b, color, at) => {
      const ha = a[1] ? cell(0, y, a[0], a[1], color, at) : 0;
      if (!b[1]) return ha;
      if (two) return Math.max(ha, cell(x2, y, b[0], b[1], color, at + 80));
      return ha + (ha ? 8 : 0) + cell(0, y + ha + (ha ? 8 : 0), b[0], b[1], color, at + 80);
    };

    let y = 0;
    stories.forEach((s, i) => {
      const at = 100 + i * 300;
      const told = s.words != null;
      if (i) {
        // the story that is told stands apart from its tellings: an ink rule after it, hairlines between the rest
        const before = stories[i - 1].words != null;
        d.rule(0, y + 0.5, w, y + 0.5, { stroke: told && !before ? INK : HAIR, at: at - 60 });
        y += 13;
      }
      const base = y + 17;
      const name = d.text(0, base, s.name, { cls: 'dg-name', at });
      opens(d, [name], s.read, [[0, probe(d, s.name, 'dg-name'), base + 4.5]], at);
      if (told) {
        const bx = beside ? nameW + 18 : 0;
        const by = beside ? base - 5.5 : y + 32.5;
        const mid = bx + s.words * u;
        // the words every telling opens with stand apart at the head of its bar, to the same scale
        const head = s.same != null ? bx + s.same * u : bx;
        if (s.same != null) d.rule(bx, by, head, by, { stroke: INK, width: 7, at: at + 80 });
        d.rule(s.same != null ? head + 1.5 : bx, by, mid, by, { stroke: INK, width: 7, at: at + 80 });
        d.rule(mid + 1.5, by, mid + 1.5 + s.after * u, by, { stroke: RED, width: 7, at: at + 480 });
        if (beside) figures(mid + 1.5 + s.after * u + 10, base, s, at + 480);
        else figures(0, y + 52, s, at + 480);
        y += beside ? 32 : 62;
      } else y += 32;
      y += pair(y, [T.does, s.does], [T.end, s.end], null, at + 140) + 9;
      if (told && (s.mother || s.happy)) y += pair(y, [T.mother, s.mother], [T.happy, s.happy], RED, at + 560) + 9;
      y += 5;
    });
    close(d, y - 12);
    d.wrap.getBoundingClientRect();
    d.wrap.classList.remove('setup');

    const shared = [...new Set(stories.filter((s) => s.same != null).map((s) => s.same))];
    d.keys([
      { mark: 'line', color: INK, text: 'a telling: the line is drawn as long as its words' },
      shared.length ? { mark: 'bar', color: INK, text: shared.length === 1 ? `${num(shared[0])} ${T.same}` : T.same } : null,
      { mark: 'line', color: RED, text: 'the paragraph on weaning that follows it' },
    ].filter(Boolean));
  },
};

// ===== Speech: the paragraphs along one line, and where the name is said =====

// the keys of a paragraph's facts; how often it says the name stands under "names <the name>"
const S = { n: 'paragraph', part: 'part', about: 'about', words: 'words', here: 'here', before: 'words before the name' };

function readSpeech(f) {
  if (!Array.isArray(f) || !f.length || !f.every(isObj)) throw new Error('facts: no paragraphs');
  const SAID = Object.keys(f[0]).find((k) => /^names\s+\S/.test(k));
  if (!SAID) throw new Error('facts: no count of the name');
  let from = 0;
  const ps = f.map((r, i) => {
    if (typeof r[S.words] !== 'number' || typeof r[SAID] !== 'number') throw new Error('facts: a paragraph without its words or its count');
    const p = { n: r[S.n] == null ? i + 1 : r[S.n], part: str(r[S.part]), about: str(r[S.about]), words: r[S.words], said: r[SAID], here: str(r[S.here]), read: str(r.read), from };
    from += p.words;
    p.to = from;
    return p;
  });
  const first = ps.find((p) => p.said > 0) || null;
  // Where the name is first said, in words from the head of the speech. The facts may give it; it must then
  // fall inside the first paragraph that says the name. Without it, only the paragraphs before that one are known to lack it.
  const given = f.map((r) => r[S.before]).find((v) => typeof v === 'number');
  const exact = first && given != null && given >= first.from && given < first.to ? given : null;
  // the parts of the speech: paragraphs that follow each other under one name
  const parts = [];
  ps.forEach((p) => { const last = parts[parts.length - 1]; if (last && last.name === p.part) last.to = p.to; else if (p.part) parts.push({ name: p.part, from: p.from, to: p.to }); });
  return { name: SAID.replace(/^names\s+/, ''), SAID, ps, parts, first, exact, total: from, said: ps.reduce((s, p) => s + p.said, 0) };
}

const cap = (s) => String(s).charAt(0).toUpperCase() + String(s).slice(1);

const speech = {
  name: 'Speech',
  stage: 'own',
  draw(ctx, lens, run) {
    const k = readSpeech(lens.facts);
    const wasOpen = !run && !!ctx.own.querySelector('details.dg-facts[open]');   // a resize must not shut the table
    const d = sheet(ctx, lens, run, 200);
    const w = d.w;
    const finger = typeof matchMedia === 'function' && matchMedia('(hover: none)').matches;
    const reader = canRead();
    const x = lin(0, k.total, 0.5, w - 0.5);                 // words from the head of the speech, to px
    const edge = (v) => Math.round(x(v) - 0.5) + 0.5;
    const r = w >= 480 ? 2.6 : 2.1;                          // a dot
    const pitch = 2 * r + 1.6;                               // from one dot up to the next
    const most = Math.max(1, ...k.ps.map((p) => p.said));
    const top = 24;                                          // the head of the field, under the words that name it
    const MANY = 4;                                          // more dots than these in one stack are also given as a figure
    const base = top + (most > MANY ? 16 : 6) + most * pitch + 4;   // the ruled line

    // ----- the stretch before the name is first said -----
    const bare = k.exact != null ? k.exact : k.first ? k.first.from : 0;
    if (bare > 0) {
      d.bar(0, top, x(bare), base - top, { fill: TINT, at: 120 });
      const fig = d.text(0, 14, num(bare), { cls: 'dg-n', at: 220 });
      // (the name is named as a word, so it stands upright in the italic, as it does in the key)
      const said = mk('tspan', {}, k.name);
      said.style.fontStyle = 'normal';
      const over = d.text(Math.ceil(wideOf(fig)) + 4, 14, '', { at: 220 });
      over.append(...(k.exact != null ? [`${S.words} before the first `, said] : [`${S.words}: `, said, ' not once']));
    }

    // ----- the line: a stretch to each paragraph, as long as its words -----
    d.rule(0, base + 0.5, w, base + 0.5, { stroke: INK, at: 60 });
    k.ps.forEach((p) => d.rule(edge(p.from), base, edge(p.from), base + 5.5, { stroke: INK }));
    d.rule(edge(k.total), base, edge(k.total), base + 5.5, { stroke: INK });
    k.ps.forEach((p) => {
      p.marks = [];
      if (p.here) p.marks.push(d.rule(edge(p.from), base + 0.5, edge(p.to), base + 0.5, { stroke: RED, width: 3, at: 600 }));
      if (x(p.to) - x(p.from) >= probe(d, p.n, 'dg-n') + 3) p.marks.push(d.text((x(p.from) + x(p.to)) / 2, base + 18.5, p.n, { cls: 'dg-n', anchor: 'middle', fill: p.here ? RED : null, at: 60 }));
    });

    // ----- a dot for every time a paragraph says the name, over the middle of the paragraph -----
    let order = 0;
    k.ps.forEach((p) => {
      const mid = (x(p.from) + x(p.to)) / 2;
      // where the facts say how far in the name first comes, that one dot stands at its place, just past the field
      const placed = k.exact != null && p === k.first ? x(k.exact) + r : null;
      const lift = placed != null && Math.abs(placed - mid) < 2 * r + 1 ? 1 : 0;
      for (let j = 0; j < p.said; j++) {
        const own = placed != null && j === 0;
        const level = own ? 0 : j - (placed != null ? 1 : 0) + lift;
        p.marks.push(d.dot(own ? placed : mid, base - 4 - r - level * pitch, r, { fill: p.here ? RED : INK, at: 500 + (order++) * 24 }));
      }
      // a tall stack is hard to count: its figure stands over it
      if (p.said > MANY) p.marks.push(d.text(mid, base - 4 - (p.said + lift) * pitch - 3, p.said, { cls: 'dg-n', anchor: 'middle', at: 500 + order * 24 }));
    });

    // ----- the parts of the speech, under the line -----
    const by = base + 28;
    const ends = [-99, -99];                                 // where the last label on each of two lines ends
    let low = false;
    k.parts.forEach((part, i) => {
      const a = edge(part.from) + 2; const z = edge(part.to) - 2;
      if (z > a) d.path(`M${a} ${by - 3}V${by + 0.5}H${z}V${by - 3}`, { stroke: 'var(--quiet)', width: 1, at: 900 + i * 90 });
      const lw = probe(d, part.name, 'dg-it');
      const lx = Math.max(0, Math.min(w - lw, (a + z) / 2 - lw / 2));
      const line = ends[0] + 8 <= lx ? 0 : ends[1] + 8 <= lx ? 1 : 0;
      if (line) low = true;
      ends[line] = lx + lw;
      d.text(lx, by + 14 + line * 15, part.name, { at: 900 + i * 90 });
    });
    close(d, by + 14 + (low ? 15 : 0) + 6);

    // ----- what the pointer adds: a paragraph says what it is about, and opens its place in the book -----
    let touch = false;
    d.svg.addEventListener('pointerdown', (e) => { touch = e.pointerType === 'touch'; }, true);
    const more = (read) => (finger && reader && read ? ` [Read it here](#/read/${read})` : '');
    const say = (p) => `${cap(S.n)} ${p.n}${p.part ? `, ${p.part}` : ''}${p.about ? `: ${p.about}` : ''}. ${num(p.words)} ${S.words}; *${k.name}* ${times(p.said)}.${p.here ? ` ${cap(p.here)}.` : ''}${more(p.read)}`;
    // the widest first, so that a paragraph too thin to point at lies over its neighbors
    [...k.ps].sort((a, b) => b.words - a.words).forEach((p) => {
      const pw = Math.max(8, x(p.to) - x(p.from));
      let hit = d.bar((x(p.from) + x(p.to)) / 2 - pw / 2, top, pw, base + 24 - top, { fill: 'transparent' });
      if (reader && p.read) {
        const a = mk('a', { href: `#/read/${p.read}`, tabindex: -1 });
        a.style.cursor = 'pointer'; a.style.outline = 'none';
        a.addEventListener('click', (e) => { if (touch) e.preventDefault(); });   // a finger asks; the answer carries the way in
        hit.replaceWith(a); a.append(hit); hit = a;
      }
      d.hot(hit, say(p), p.marks);
    });

    const here = k.ps.find((p) => p.here);
    d.keys([
      { mark: 'dot', color: INK, text: `*${k.name}*, once, over the paragraph that says it: ${num(k.said)} in all` },
      { mark: 'line', color: INK, text: `a ${S.n}: the line is drawn as long as its ${S.words}, ${num(k.total)} in all` },
      here ? { mark: 'line', color: RED, text: `${S.n} ${here.n}: ${here.here}` } : null,
    ].filter(Boolean));
    const figs = d.figures(k.ps.map((p) => ({ [S.n]: p.n, ...(w >= 480 ? { [S.part]: p.part } : {}), [S.about]: p.about, [S.words]: p.words, [k.SAID]: p.said })));
    if (figs && wasOpen) figs.open = true;
  },
};

// ===== Day: the paragraphs of the portrait as stations down one line =====

// the keys of a paragraph's facts; `he` and `likened to` are also the words its statements begin with
const D = { when: 'when', he: 'he', like: 'likened to', count: 'likenesses', words: 'words', here: 'here' };

function readDay(f) {
  if (!Array.isArray(f) || !f.length || !f.every(isObj)) throw new Error('facts: no paragraphs');
  let n = 0;
  return f.map((r) => {
    if (!str(r[D.when]) || !str(r[D.like]) || typeof r[D.count] !== 'number') throw new Error('facts: a paragraph without its time, its likenesses or their count');
    // the likenesses are listed with a semicolon between them; where the list and the count do not agree, the list is shown whole
    const list = str(r[D.like]).split(/\s*;\s*/).filter(Boolean);
    const whole = list.length !== r[D.count];
    const s = { when: str(r[D.when]), he: str(r[D.he]), items: whole ? [str(r[D.like])] : list, whole, count: r[D.count], first: n + 1, words: typeof r[D.words] === 'number' ? r[D.words] : null, here: str(r[D.here]), read: str(r.read) };
    n += s.count;
    return s;
  });
}

const day = {
  name: 'Day',
  stage: 'own',
  draw(ctx, lens, run) {
    const stops = readDay(lens.facts);
    const wasOpen = !run && !!ctx.own.querySelector('details.dg-facts[open]');   // a resize must not shut the table
    const d = sheet(ctx, lens, run, 400);
    d.wrap.classList.add('setup');                       // nothing moves while the words are measured and set out
    const w = d.w;
    const two = w >= 480;                                // the likenesses in a column of their own
    const LX = 4.5;                                      // the line the stations stand on
    const tx = 20;                                       // where the words of a station begin
    const aw = two ? Math.round(w * 0.46) : w;           // the first column
    const bx = two ? aw + 24 : tx;                       // where the likenesses stand
    // a likeness has its number, counted through the portrait; a list shown whole has the first and the last
    const mark = (s, j) => (!s.whole ? `${s.first + j}` : s.count > 1 ? `${s.first}–${s.first + s.count - 1}` : `${s.first}`);
    const nw = Math.max(...stops.flatMap((s) => s.items.map((_, j) => probe(d, mark(s, j), 'dg-n'))));
    const ix = bx + nw + 8;                              // where the words of a likeness begin

    let y = 0;
    if (two) { d.text(tx, 9, D.when, { cls: 'dg-lab' }); d.text(bx, 9, D.like, { cls: 'dg-lab' }); y = 22; }
    stops.forEach((s, i) => {
      const at = 100 + i * 320;
      if (i) { d.rule(tx, y + 0.5, w, y + 0.5, { at: at - 60 }); y += 12; }
      const top = y;
      s.cy = top + 11;
      // when: the name of the station, which opens its paragraph in the book
      const lines = fold(d, s.when, aw - tx, 'dg-name');
      const names = lines.map((t, j) => d.text(tx, top + 16 + j * 20, t, { cls: 'dg-name', at }));
      opens(d, names, s.read, lines.map((t, j) => [tx, tx + probe(d, t, 'dg-name'), top + 20.5 + j * 20]), at);
      let ya = top + lines.length * 20 + 5;
      if (s.he) {
        const n = d.note(tx, ya, aw - tx, `${D.he} ${s.he}`, { at: at + 80 });
        n.style.textWrap = 'balance';
        ya += tallOf(n);
      }
      // whom he is likened to there
      let yb = two ? top + 4 : ya + 9;
      if (!two) { d.text(bx, yb + 9, D.like, { cls: 'dg-lab', at: at + 160 }); yb += 15; }
      s.items.forEach((item, j) => {
        const when = at + 200 + j * 70;
        d.text(ix - 8, yb + 13, mark(s, j), { cls: 'dg-n', anchor: 'end', fill: s.here ? RED : null, at: when });
        const n = d.note(ix, yb, w - ix, item, { at: when });
        n.style.color = INK; n.style.textWrap = 'balance';
        yb += tallOf(n) + 3;
      });
      y = Math.max(ya, yb - 3) + 11;
    });
    close(d, y - 9);

    // the line, from station to station, and a ring at each; the paragraph of the passage is red
    stops.forEach((s, i) => {
      const at = 100 + i * 320;
      const next = stops[i + 1];
      if (next) d.rule(LX, s.cy + 4, LX, next.cy - 4, { stroke: INK, at: at + 100 });
      if (s.here) d.dot(LX, s.cy, 4, { fill: RED, at });
      else d.dot(LX, s.cy, 3.4, { fill: 'none', stroke: INK, at });
    });
    d.wrap.getBoundingClientRect();
    d.wrap.classList.remove('setup');

    const here = stops.find((s) => s.here);
    d.keys([
      { mark: 'ring', color: INK, text: 'a paragraph of the portrait, in order' },
      here ? { mark: 'dot', color: RED, text: here.here } : null,
    ].filter(Boolean));
    const figs = d.figures(stops.map((s) => ({ [D.when]: s.when, [D.count]: s.count, ...(s.words != null ? { [D.words]: s.words } : {}) })));
    if (figs && wasOpen) figs.open = true;
  },
};

export default { lenses: { 'weaning:shape': tellings, 'greater:shape': speech, 'window:shape': day } };
