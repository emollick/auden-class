// Figure: the parts of a figure of speech are underlined, each kind in its own
// color, and joined in the way the figure joins them.
//
//   name:  "chiasmus"           plain: the term in plain words
//   draw:  cross | pair | align | chain | map | list | frame | other
//   parts: [{ row, w: [first, last], tag: "A", label: "the man" }]
//   join:  which parts a stroke joins, where the usual way of `draw` is not the one wanted:
//          "none"                 underlines only
//          "within"               the parts of each tag, each to the next
//          [["net", "catch"]]     the first of one tag to the first of the other, the second to the
//                                 second; where one of the two stands alone, it is joined to each
//          [[0, 3], [1, 4]]       two parts by their place in `parts`, counted from 0
//
// Parts with the same tag are the same kind of thing and take the same color.
// A stroke is drawn only between parts on one line of type, or on two lines
// that follow each other, and only where it runs clear of any line of type
// between the two (behind a speaker's name it is broken); other parts are told
// by their color. The strokes of one figure are of one kind: a crossing is two
// arcs that nest or two strokes that cross, and where it can be neither its
// parts are lettered a, b, b, a; the pairs of an antithesis are all joined
// under their lines or all from one line to the next, or not joined.

import { mk, el, lineBoxes, drawn, key, marked, hurdles, crosses, inside, breaks, PARTS, QUIET } from './draw.js';

const laid = new WeakMap();

function setup(ctx, lens) {
  const order = [...ctx.rows.keys()];
  const tags = [];
  const listed = (lens.parts || []).map((p, n) => {
    const w = Array.isArray(p.w) ? p.w : [p.w, p.w];
    if (!tags.includes(p.tag)) tags.push(p.tag);
    return { ...p, n, a: w[0], z: w[1], rowAt: order.indexOf(String(p.row)), nodes: ctx.words(p.row, w[0], w[1]) };
  }).filter((p) => p.nodes.length && p.rowAt >= 0);
  // as they stand in the passage
  const parts = [...listed].sort((x, y) => x.rowAt - y.rowAt || x.a - y.a);
  // a part that lies inside another is drawn a step lower
  for (const p of parts) p.level = parts.filter((q) => q !== p && q.rowAt === p.rowAt && q.a <= p.a && q.z >= p.z && (q.a < p.a || q.z > p.z)).length;
  const color = (tag) => PARTS[tags.indexOf(tag) % PARTS.length];
  // a list is numbered: the kind with the most parts (or every part, where each kind has one),
  // counted afresh in a second passage
  if (lens.draw === 'list' && !lens.join) {
    const count = (t) => parts.filter((p) => p.tag === t).length;
    const most = tags.reduce((best, t) => (count(t) > count(best) ? t : best), tags[0]);
    const list = tags.every((t) => count(t) === 1) ? parts : parts.filter((p) => p.tag === most);
    const seen = { a: 0, b: 0 };
    for (const p of list) p.num = String(p.row).startsWith('p:') ? ++seen.b : ++seen.a;
  }
  laid.set(lens, { parts, listed, tags, color });
}

function on(ctx, lens) { const { parts, color } = laid.get(lens); parts.forEach((p) => p.nodes.forEach((n) => { n.classList.add('fg'); n.style.setProperty('--c', color(p.tag)); })); }
function off(ctx, lens) { const { parts } = laid.get(lens); parts.forEach((p) => p.nodes.forEach((n) => { n.classList.remove('fg'); n.style.removeProperty('--c'); })); }

// Which parts are joined to which: what the reading says in `join`, or the usual way of its `draw`.
function joinsOf(lens, { parts, listed, tags }, color) {
  const kind = lens.draw || 'other';
  const how = kind === 'pair' ? 'level' : 'arc';
  const out = [];
  const before = (p, q) => p.rowAt < q.rowAt || (p.rowAt === q.rowAt && p.a <= q.a);
  // (`loose`: the joins of a pair or of a map that the reading does not name; they are drawn all alike or not at all)
  const loose = (kind === 'pair' || kind === 'map') && !Array.isArray(lens.join);
  const add = (p, q, c, chain = false) => { if (p && q && p !== q) out.push(before(p, q) ? { p, q, c, how, chain, loose } : { p: q, q: p, c, how, chain, loose }); };
  // in the order the reading lists them, so that the first of one tag answers the first of the other
  const of = (tag) => listed.filter((p) => p.tag === tag);
  const inPlace = (tag) => parts.filter((p) => p.tag === tag);
  const across = (s, t, many) => {
    const A = of(s); const B = of(t);
    if (!A.length || !B.length) return;
    if (A.length === B.length) A.forEach((p, i) => add(p, B[i], QUIET));
    else if (many && A.length === 1) B.forEach((q) => add(A[0], q, QUIET));
    else if (many && B.length === 1) A.forEach((p) => add(p, B[0], QUIET));
  };
  // (a chain: each part of one kind to the next of that kind)
  const within = (list, c) => list.forEach((p, i) => add(p, list[i + 1], c, true));
  const j = lens.join;
  if (j === 'none') return out;
  if (j === 'within') { tags.forEach((t) => within(inPlace(t), color(t))); return out; }
  if (Array.isArray(j)) {
    j.forEach((x) => {
      if (!Array.isArray(x) || x.length !== 2) return;
      if (typeof x[0] === 'number') {
        const p = listed.find((m) => m.n === x[0]); const q = listed.find((m) => m.n === x[1]);
        // (in a figure set in line, a join the reading names between two parts of one kind takes that kind's color)
        add(p, q, kind === 'align' && p && q && p.tag === q.tag ? color(p.tag) : QUIET);
      } else across(String(x[0]), String(x[1]), true);
    });
    return out;
  }
  const named = tags.includes('A') && tags.includes('B');
  if (kind === 'pair') {
    if (named) across('A', 'B', false);
    else if (tags.length > 1 && tags.every((t) => of(t).length === 2)) tags.forEach((t) => within(inPlace(t), color(t)));
    else if (tags.length > 1) across(tags[0], tags[1], false);
  } else if (kind === 'map') {
    if (named) across('A', 'B', true); else if (tags.length > 1) across(tags[0], tags[1], true);
  } else if (kind === 'chain') {
    if (tags.every((t) => of(t).length === 1)) within(parts, QUIET); else tags.forEach((t) => within(inPlace(t), color(t)));
  }
  return out;
}

function draw(ctx, lens, run) {
  const b = ctx.box(); const narrow = ctx.narrow();
  const band = parseFloat(getComputedStyle(ctx.root).getPropertyValue('--band')) || 30;
  const state = laid.get(lens);
  const { parts, tags, color } = state;
  const kind = lens.draw || 'other';
  let n = 0;
  const line = (d, stroke, width = 1.3, extra = {}) => { const p = mk('path', { class: 'arc draw', d, stroke, 'stroke-width': width, ...extra }); ctx.ov.append(p); return p; };
  const dot = (x, y, fill, at) => { const c = mk('circle', { class: 'fade', cx: x, cy: y, r: 1.8, fill }); ctx.ov.append(c); ctx.later(() => c.classList.add('in'), run ? at : 0); };

  for (const p of parts) {
    p.lines = lineBoxes(p.nodes, b);
    p.y = (ln) => ln.b + 2 + p.level * 5;
    p.lines.forEach((ln, i) => {
      let d = `M${ln.l} ${p.y(ln)}H${ln.r}`;
      if (kind === 'frame') d = `M${ln.l} ${p.y(ln) - (i ? 0 : 4)}V${p.y(ln)}H${ln.r}V${p.y(ln) - (i === p.lines.length - 1 ? 4 : 0)}`;
      ctx.later(drawn(line(d, color(p.tag), 1.6), run), 120 + n * 130);
    });
    n++;
  }
  const drawnParts = parts.filter((p) => p.lines.length);
  const first = (p) => p.lines[0]; const last = (p) => p.lines[p.lines.length - 1];
  // where a stroke leaves a part (under the end of it) and where it reaches the next (under its start).
  // A part that an arc under its own line reaches, and that a stroke leaves for the next line, gives
  // each an end of its rule (`lean`), so that the two do not cross.
  const lean = new Map();
  const at = (ln, part, role) => { const s = lean.get(part); return s ? ln.cx + (role === 'arc' ? s : -s) * Math.min(ln.w * 0.22, 14) : ln.cx; };
  const from = (p, role) => ({ x: at(last(p), p, role), y: p.y(last(p)) + 3 });
  const under = (q, role) => ({ x: at(first(q), q, role), y: q.y(first(q)) + 3 });
  const sameLine = (p, q) => Math.abs(last(p).cy - first(q).cy) < first(q).h * 0.6;
  // the next line of type, or the next row of the plate with a speaker's name or a stanza's space between.
  // Where a version is set under each line, the next line of the original is near too, though the line of
  // the version stands between the two (in the order of rows it is the next but one).
  const second = (id) => String(id).startsWith('p:');
  const versionUnder = (p) => { const r = ctx.interlinear && !second(p.row) ? ctx.rows.get(String(p.row)) : null; return r && r.pair ? r.pair.tx.getBoundingClientRect().height : 0; };
  const near = (p, q) => {
    const gap = first(q).t - last(p).b;
    if (!(gap > -2)) return false;
    if (gap <= band + 8 || (q.rowAt - p.rowAt === 1 && gap <= band + 70)) return true;
    const h = versionUnder(p);
    return h > 0 && !second(q.row) && q.rowAt - p.rowAt === 2 && gap <= band + 70 + h;
  };
  let c = 0;
  const when = () => 420 + n * 130 + (c++) * 220;
  const of = (tag) => drawnParts.filter((p) => p.tag === tag);

  if (kind === 'cross' && !lens.join) {
    // the first two kinds that have two parts each are crossed (more crossings than one: the reading's `join`)
    const two = tags.filter((t) => of(t).length >= 2).slice(0, 2);
    const reach = (t) => Math.abs(under(of(t)[1]).x - from(of(t)[0]).x);
    const widest = Math.max(1, ...two.map(reach));
    // the outer arc goes as deep as the room under the line allows, and the inner one stays well clear of it
    const outer = Math.min(band - 12, 9 + widest * 0.07);
    // over two lines the two strokes cross between them; in one line the two arcs nest. The crossing is drawn
    // whole or not at all: where one of its strokes has no clear way, color alone tells both.
    const ways = two.map((t) => { const [p, q] = of(t); return sameLine(p, q) ? 'arc' : way(p, q); });
    // (an arc and a stroke together would show neither a nest nor a cross)
    const whole = two.length < 2 ? ways.every(Boolean) : ways.every((w) => w === 'arc') || ways.every((w) => w && w !== 'arc');
    if (!whole) letters(two.map((t) => of(t).slice(0, 2)));
    else two.forEach((t, i) => {
      const [p, q] = of(t);
      if (ways[i] !== 'arc') { stroke(ways[i], color(t)); return; }
      const a = from(p); const z = under(q); const y = Math.max(a.y, z.y);
      const part = reach(t) / widest;
      const deep = part > 0.999 ? outer : Math.max(4, Math.min(outer - 7, outer * part));
      ctx.later(drawn(line(`M${a.x} ${y}Q${(a.x + z.x) / 2} ${y + deep * 2} ${z.x} ${y}`, color(t), 1.2), run), when());
    });
  } else if (kind === 'align' && (!lens.join || Array.isArray(lens.join))) {
    // (a list of joins in the reading stands in place of the loose joins; the spines stay)
    const named = Array.isArray(lens.join);
    const loose = [];
    tags.forEach((t) => {
      const list = of(t);
      if (list.length < 2) return;
      const left = list.every((p) => p.a === ctx.rows.get(String(p.row)).first);
      const right = list.every((p) => p.z === ctx.rows.get(String(p.row)).last);
      if (left || right) {
        // a spine down the margin, with a tick at each line that takes part
        const at = list.map((p) => ctx.rowList.findIndex((r) => r.id === String(p.row)));
        const reach = (tx) => { const range = document.createRange(); range.selectNodeContents(tx); const q = range.getBoundingClientRect(); return { l: q.left - b.left, r: q.right - b.left }; };
        // every line the spine passes: the lines of the rows it spans and, where a version is set under each
        // line, the version's lines between them (the one under the last row lies below the spine's foot)
        const lo = Math.min(...at); const hi = Math.max(...at);
        const span = at.every((i) => i >= 0)
          ? ctx.rowList.slice(lo, hi + 1).flatMap((r, k) => (r.pair && lo + k < hi ? [reach(r.tx), reach(r.pair.tx)] : [reach(r.tx)]))
          : list.map((p) => ({ l: Math.min(...p.lines.map((ln) => ln.l)), r: Math.max(...p.lines.map((ln) => ln.r)) }));
        // it stands 12 px clear of the longest line where there is room, and never nearer than 7
        const edge = left ? Math.min(...span.map((q) => q.l)) : Math.max(...span.map((q) => q.r));
        const room = left ? edge - 2 : b.width - edge - 2;
        const out = Math.max(7, Math.min(12, room));
        const x = left ? edge - out : edge + out;
        const ys = list.map((p) => (left ? first(p).cy : last(p).cy));
        const tick = left ? 5 : -5;
        ctx.later(drawn(line(`M${x + tick} ${ys[0]}H${x}V${ys[ys.length - 1]}H${x + tick}${ys.slice(1, -1).map((y) => `M${x} ${y}h${tick}`).join('')}`, color(t), 1.2), run), when());
      } else if (!named) list.forEach((p, i) => { if (list[i + 1]) loose.push({ p, q: list[i + 1], c: color(t), how: 'arc', chain: true, loose: true }); });
    });
    // parts that do not stand at the head or the foot of their lines are joined each to the next, all alike
    // (every stroke from one line to the next, or every arc under its own line) or not at all
    // (or, where the reading names the joins, those and no others)
    drawJoins(named ? joinsOf(lens, state, color).filter((j) => j.p.lines && j.p.lines.length && j.q.lines && j.q.lines.length) : loose);
  } else if (kind === 'list' && !lens.join) {
    drawnParts.filter((p) => p.num).forEach((p, i) => {
      const g = ctx.label(String(p.num), first(p).l, p.y(first(p)) + 3, 'gl num');
      g.style.color = color(p.tag);
      ctx.later(() => g.classList.add('in'), run ? 300 + i * 160 : 0);
    });
  } else {
    drawJoins(joinsOf(lens, state, color).filter((j) => j.p.lines && j.p.lines.length && j.q.lines && j.q.lines.length));
  }

  // the strokes of a list of joins: arcs under one line of type, straight strokes from one line to the next
  function drawJoins(joins) {
    // In a chain, the parts that arcs join under one line of type are already tied: the stroke to the next line
    // leaves from the one of them that stands nearest to where it is going, so that it does not run back
    // under the others and across their arcs.
    const tiedTo = (p) => {
      const seen = new Set([p]);
      for (let grew = true; grew;) { grew = false; for (const f of joins) { if (f.chain && sameLine(f.p, f.q) && seen.has(f.p) !== seen.has(f.q)) { seen.add(f.p); seen.add(f.q); grew = true; } } }
      return [...seen];
    };
    for (const j of joins) {
      if (sameLine(j.p, j.q)) continue;
      j.start = j.p;
      if (j.chain) { const to = first(j.q).cx; j.start = tiedTo(j.p).reduce((best, m) => (Math.abs(last(m).cx - to) < Math.abs(last(best).cx - to) - 1 ? m : best), j.p); }
      const left = joins.some((f) => f.q === j.start && sameLine(f.p, f.q)); const right = joins.some((f) => f.p === j.start && sameLine(f.p, f.q));
      if (left !== right) lean.set(j.start, left ? -1 : 1);
    }
    // strokes under one line of type keep clear of each other: a wider one goes deeper
    const flat = joins.filter((j) => sameLine(j.p, j.q)).map((j) => { const a = from(j.p, 'arc'); const z = under(j.q, 'arc'); return { ...j, src: j, a, z, l: Math.min(a.x, z.x), r: Math.max(a.x, z.x), y: Math.max(a.y, z.y) }; });
    flat.sort((x, y) => (x.r - x.l) - (y.r - y.l));
    flat.forEach((j, i) => { j.lane = 0; while (flat.slice(0, i).some((x) => x.lane === j.lane && Math.abs(x.y - j.y) < 8 && x.l < j.r + 5 && j.l < x.r + 5)) j.lane++; });
    flat.sort((x, y) => x.l - y.l);
    // From one line of type to the next. A stroke the reading asks for by name is drawn wherever a way is
    // clear. In a chain (each part to the next of its kind) only the strokes that help are drawn: one that
    // would run far along between the lines, or cross a stroke already there, is left out, and the color
    // tells; the shorter stroke is tried first.
    // (the loose joins of a figure set in line are a help to the eye and no more: none is drawn behind a
    // speaker's name; the strokes of a chain, which may run from speech to speech, still pass behind it)
    const down = joins.filter((j) => !sameLine(j.p, j.q)).map((j) => ({ j, w: way(j.start || j.p, j.q, !(j.chain && j.loose)) })).filter((x) => x.w);
    const far = Math.max(140, b.width * 0.42);
    const wide = (w) => Math.abs(w.z.x - w.a.x);
    const side = (p, q, r) => Math.sign((q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x));
    const meet = (s, t) => side(s.a, s.z, t.a) * side(s.a, s.z, t.z) < 0 && side(t.a, t.z, s.a) * side(t.a, t.z, s.z) < 0;
    const kept = [];
    for (const x of [...down].sort((m, n) => wide(m.w) - wide(n.w))) {
      if (x.j.chain && (wide(x.w) > far || kept.some((k) => meet(k.w, x.w)))) continue;
      kept.push(x);
    }
    const out = new Set();
    const has = (j) => kept.some((x) => x.j === j);
    // The two strokes of a crossing that the reading names (its joins, two by two): two arcs that nest or
    // two strokes that cross, and where they can be neither, the parts are lettered.
    if (kind === 'cross') for (let k = 0; k + 1 < joins.length; k += 2) {
      const both = [joins[k], joins[k + 1]];
      if (both.every((j) => sameLine(j.p, j.q)) || both.every((j) => !sameLine(j.p, j.q) && has(j))) continue;
      both.forEach((j) => out.add(j));
      letters(both.map((j) => [j.p, j.q]));
    }
    // The pairs of an antithesis that the reading does not join by name, the strokes of a map it does not
    // name, and the parts of a figure set in line (`align`) that stand inside their lines: all under their
    // own lines, or all from one line to the next with none of them running far along between the lines;
    // where they cannot be alike, none is drawn and the colors tell.
    const loose = joins.filter((j) => j.loose);
    if (loose.length && !(loose.every((j) => sameLine(j.p, j.q)) || loose.every((j) => !sameLine(j.p, j.q) && has(j) && wide(kept.find((x) => x.j === j).w) <= far))) loose.forEach((j) => out.add(j));
    for (const j of flat) {
      if (out.has(j.src)) continue;
      const step = narrow ? 5 : 6;
      let d;
      if (j.how === 'level') { const v = (narrow ? 6 : 8) + j.lane * step; d = `M${j.a.x} ${j.y}v${v}H${j.z.x}v${-v}`; } else { const deep = Math.min(band - 12, 7 + (j.r - j.l) * 0.07) + j.lane * step; d = `M${j.a.x} ${j.y}Q${(j.a.x + j.z.x) / 2} ${j.y + deep * 2} ${j.z.x} ${j.y}`; }
      ctx.later(drawn(line(d, j.c, 1.2), run), when());
    }
    for (const x of down) if (kept.includes(x) && !out.has(x.j)) stroke(x.w, x.j.c);
  }

  // Where a crossing cannot be drawn, each of its parts takes a letter in the order they are said: a, b, b, a
  // says "the opposite order" on any number of lines.
  function letters(groups) {
    const seq = groups.flatMap((g, k) => g.filter((p) => p && p.lines && p.lines.length).map((p) => ({ p, k }))).sort((x, y) => x.p.rowAt - y.p.rowAt || x.p.a - y.p.a);
    const name = new Map();
    seq.forEach(({ p, k }) => {
      if (!name.has(k)) name.set(k, 'abcdefgh'[name.size] || '');
      const ln = first(p);
      const g = ctx.label(name.get(k), ln.l, p.y(ln) + 2, 'gl num ab');
      g.style.color = color(p.tag);
      const t = when();
      ctx.later(() => g.classList.add('in'), run ? t : 0);
    });
  }

  // the straight stroke from one part down to another on the next line: where it starts and where it ends.
  // It ends over the middle of the part where the way there is clear of names and of other lines; if not,
  // over another point of the part; and where no way is clear there is none.
  function way(p, q, behindNames = true) {
    if (!near(p, q)) return null;
    const a = from(p, 'stroke'); const to = first(q); const y = to.t - 2;
    const boxes = hurdles(ctx.stage, b, a.y, y);
    const side = a.x < to.cx ? -1 : 1; const inset = Math.min(4, to.w / 2);
    const tries = [to.cx, to.cx + side * to.w * 0.25, side < 0 ? to.l + inset : to.r - inset, to.cx - side * to.w * 0.25, side < 0 ? to.r - inset : to.l + inset];
    const x = tries.find((v) => !crosses(a, { x: v, y }, boxes));
    if (x !== undefined) return { a, z: { x, y } };
    // No clear way. The stroke may pass behind a speaker's name or a direction, and behind the words of a
    // version set under the line, broken where they stand, if it runs clear of every other word; and where
    // it is the version it passes behind, only if less than a third of the stroke is hidden. (A loose join of
    // a figure set in line passes behind the version only: a name, a direction or the points of a gap stop
    // it, `behindNames` false.)
    const soft = boxes.filter((q) => (q.name && behindNames) || q.under); const hard = boxes.filter((q) => !soft.includes(q));
    if (!soft.length || y - a.y < 8) return null;
    for (const v of tries) {
      const z = { x: v, y };
      if (crosses(a, z, hard)) continue;
      const { cuts, hidden } = breaks(a, z, soft);
      if (hidden >= 1 / 3 && soft.some((q) => q.under && inside(a, z, q))) continue;
      return { a, z, cuts };
    }
    return null;
  }
  function stroke(w, ink) {
    const t = when();
    const at = (u) => `${(w.a.x + (w.z.x - w.a.x) * u).toFixed(1)} ${(w.a.y + (w.z.y - w.a.y) * u).toFixed(1)}`;
    let d = `M${w.a.x} ${w.a.y}`; let done = 0;
    for (const [u0, u1] of w.cuts || []) {
      if (u1 <= done || u0 >= 1) continue;
      d += u0 > done ? `L${at(u0)}` : '';
      done = Math.min(1, u1);
      d += `M${at(done)}`;
    }
    d += `L${w.z.x} ${w.z.y}`;
    ctx.later(drawn(line(d, ink, 1.2), run), t);
    dot(w.a.x, w.a.y, ink, t); dot(w.z.x, w.z.y, ink, t + 700);
  }
}

function aside(ctx, lens) {
  const { parts, tags, color } = laid.get(lens);
  const box = el('div', { class: 'keys' });
  if (lens.name) box.append(el('p', { class: 'term', text: lens.name }));
  if (lens.plain) box.append(el('p', { class: 'plain' }, marked(lens.plain)));
  const sample = (tag) => mk('path', { d: 'M4 8H26', stroke: color(tag), 'stroke-width': 1.6, 'stroke-linecap': 'round' });
  // one row for each color: the names of its parts, in the order they stand in the passage.
  // The parts of a list are numbered, and each has a row of its own.
  for (const t of tags) {
    const mine = parts.filter((p) => p.tag === t);
    if (mine.some((p) => p.num)) {
      const seen = new Set();
      for (const p of mine) {
        // (a label that is no more than the part's own number says nothing the number on the plate does not)
        if (!p.label || String(p.label).trim() === String(p.num) || seen.has(`${p.num}/${p.label}`)) continue;
        seen.add(`${p.num}/${p.label}`);
        const row = key(sample(t), `${p.num}  ${p.label}`);
        ctx.refer(row, mine.filter((q) => q.num === p.num && q.label === p.label).flatMap((q) => q.nodes));
        box.append(row);
      }
      continue;
    }
    const names = [...new Set(mine.map((p) => p.label).filter(Boolean))];
    if (!names.length) continue;
    // (labels that hold a comma or a colon are parted by semicolons)
    const row = key(sample(t), names.join(names.some((x) => /[,:]/.test(String(x))) ? '; ' : ', '));
    ctx.refer(row, mine.flatMap((p) => p.nodes));
    box.append(row);
  }
  return box.childNodes.length ? box : null;
}

export default { name: 'Figure', setup, on, off, draw, aside };
