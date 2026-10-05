// Rhyme: the letters that carry each rhyme take a color, an arc joins one
// line end to the next of the same rhyme, and a dotted thread runs through
// the letters of a sound that returns inside the lines.
//
//   ends:    { "<row>": "a", ... }          the rhyme letter of each row
//   tails:   { "<row>": 4 }                 how many final letters carry the rhyme
//   threads: [{ sound: "f", at: [[row, word, firstLetter, howMany], ...] }]

import { mk, el, rel, lastBox, byLine, drawn, key, hurdles, crosses, breaks, CLASSES, threadColor, NO_RHYME } from './draw.js';

const diagrams = new WeakMap();
// the key's sample of each thread, which follows the mark the thread has on the plate
const samples = new WeakMap();

// the rhymed rows in the order they stand, with the color of each letter
function scheme(ctx, lens) {
  const letters = [];
  const ends = [];
  for (const row of ctx.rows.values()) {
    const letter = (lens.ends || {})[row.id];
    if (letter === undefined) continue;
    const none = NO_RHYME.has(letter);
    if (!none && !letters.includes(letter)) letters.push(letter);
    ends.push({ row, letter, none });
  }
  // the colors follow the plate's own count of letters, so that two rhyme lenses agree
  const all = [];
  for (const l of ctx.plate.lenses) if (l.kind === 'rhyme') for (const x of Object.values(l.ends || {})) if (!NO_RHYME.has(x) && !all.includes(x)) all.push(x);
  const color = (letter) => CLASSES[all.indexOf(letter) % CLASSES.length];
  return { ends, letters, color, rhymes: all.length };
}

function draw(ctx, lens, run) {
  const b = ctx.box(); const narrow = ctx.narrow();
  const { ends, color, rhymes } = scheme(ctx, lens);
  const band = parseFloat(getComputedStyle(ctx.root).getPropertyValue('--band')) || 20;
  const size = narrow ? 12.5 : 14.5;
  // how far what the plate prints after the last word of a row reaches, on that word's line of type
  const endOf = (row, box) => {
    const last = row.words[row.last].el;
    if (!row.tx.lastChild || row.tx.lastChild === last || !row.tx.contains(last)) return box.r;
    const range = document.createRange();
    range.setStartAfter(last); range.setEndAfter(row.tx.lastChild);
    let r = box.r;
    for (const q of range.getClientRects()) if (q.width > 0.5 && Math.abs((q.top + q.bottom) / 2 - b.top - box.cy) < box.h * 0.6) r = Math.max(r, q.right - b.left);
    return r;
  };
  // where each rhymed line ends
  ends.forEach((e, i) => {
    const word = e.row.words[e.row.last];
    const marked = [...word.el.querySelectorAll('.rt')];
    const box = lastBox(word.el, b);
    const tail = marked.length ? rel(marked[marked.length - 1], b) : box;
    // (a row cut short ends in points of omission, set after its last word: the letter stands after them, not on them)
    e.r = Math.max(box.r, endOf(e.row, box)); e.y = tail.t + tail.h * 0.56; e.i = i;
    const g = ctx.label(e.none ? '·' : e.letter, e.r + (narrow ? 7 : 10), e.y - size * 0.62, 'gl letter');
    g.style.fontSize = `${size}px`;
    if (!e.none) g.style.color = color(e.letter);
    e.x = e.r + (narrow ? 7 : 10) + g.getBoundingClientRect().width + (narrow ? 4 : 6);
    ctx.later(() => g.classList.add('in'), run ? 150 + i * 110 : 0);
  });
  // how far right each row of the plate reaches, with its letter
  const order = ctx.rowList.map((r) => r.id);
  const under = (r) => { if (!r.pair) return null; const range = document.createRange(); range.selectNodeContents(r.pair.tx); const q = range.getBoundingClientRect(); return { r: q.right - b.left, b: q.bottom - b.top }; };
  // a long line may turn over on a narrow screen: its reach is that of its longest turn
  const whole = ctx.rowList.map((r) => { const range = document.createRange(); range.selectNodeContents(r.tx); const q = range.getBoundingClientRect(); return { r: q.right - b.left, turns: q.height > rel(r.words[r.last].el, b).h * 1.6 }; });
  const reach = ctx.rowList.map((r, k) => { const e = ends.find((x) => x.row === r); const u = under(r); return Math.max(e ? e.x : rel(r.words[r.last].el, b).r + 6, whole[k].r + 6, u ? u.r + 6 : 0); });
  // an arc from each line end to the next of its rhyme. It passes outside every line between,
  // and two arcs that overlap keep to two lanes
  const last = {};
  const arcs = [];
  ends.forEach((e) => {
    if (e.none) return;
    const a = last[e.letter]; last[e.letter] = e;
    if (!a) return;
    const from = order.indexOf(a.row.id); const to = order.indexOf(e.row.id);
    if (from < 0 || to < 0) return;
    let lane = 0;
    while (arcs.some((x) => x.lane === lane && x.from < to && from < x.to)) lane++;
    arcs.push({ a, e, from, to, lane });
  });
  const step = narrow ? 6 : 11;
  // where each row's text stands, top to bottom
  const tall = ctx.rowList.map((r) => { const f = rel(r.words[r.first].el, b); const l = rel(r.words[r.last].el, b); const u = under(r); return { t: Math.min(f.t, l.t), b: Math.max(f.b, l.b, u ? u.b : 0) }; });
  // the arc's height runs as a smooth step; this finds where along it a given height falls
  const along = (s) => 0.5 - Math.sin(Math.asin(1 - 2 * Math.min(1, Math.max(0, s))) / 3);
  // The joins stand inside the plate: where the room at the right of the lines is short of what they ask
  // (a narrow plate, three rhymes one outside the other), they close up, all by the same measure
  const limit = ctx.root.getBoundingClientRect().right - b.left - 3;
  const pad0 = narrow ? 7 : 12;
  let close = 1;
  for (const arc of arcs) { const ask = pad0 + arc.lane * step; const room = limit - Math.max(...reach.slice(arc.from, arc.to + 1)); if (ask > room) close = Math.min(close, Math.max(0, room) / ask); }
  const railOf = (arc, out) => {
    const { a, e } = arc;
    const r = Math.max(2, Math.min(narrow ? 9 : 14, out - a.x, out - e.x, (e.y - a.y) / 2));
    return `M${a.x} ${a.y}H${out - r}Q${out} ${a.y} ${out} ${a.y + r}V${e.y - r}Q${out} ${e.y} ${out - r} ${e.y}H${e.x}`;
  };
  const shape = (arc) => {
    const { a, e, from, to, lane } = arc;
    const pad = (pad0 + lane * step) * close;
    const out = Math.max(...reach.slice(from, to + 1)) + pad;
    // pull the arc out until it passes outside each line between
    let pull = out;
    for (let k = from + 1; k < to; k++) {
      for (const y of [tall[k].t - 3, (tall[k].t + tall[k].b) / 2, tall[k].b + 3]) {
        const s = (y - a.y) / (e.y - a.y);
        if (!(s > 0.03 && s < 0.97)) continue;
        const t = along(s);
        pull = Math.max(pull, (reach[k] + pad - a.x * (1 - t) ** 3 - e.x * t ** 3) / (3 * t * (1 - t)));
      }
    }
    const peak = (a.x + e.x) / 8 + 0.75 * pull;
    arc.curve = `M${a.x} ${a.y}C${pull} ${a.y} ${pull} ${e.y} ${e.x} ${e.y}`;
    // too far apart for an arc, or an arc that would swing outside the plate: a bracket, out to a rail beyond the longest line and down it
    arc.out = out;
    arc.far = (to - from > 1 && peak > out + (narrow ? 14 : 30)) || whole.slice(from + 1, to + 1).some((w) => w.turns) || peak > limit;
  };
  arcs.forEach(shape);
  // if one of the rhymes that reach past a line needs a bracket, all of them are brackets, so that the plate has one kind of join
  const rails = arcs.some((x) => x.far && x.to - x.from > 1);
  const railed = arcs.filter((arc) => arc.far || (rails && arc.to - arc.from > 1));
  // two rails that pass the same lines do not stand on one another: the outer of the two moves out by a lane, or in where there is no room outside
  [...railed].sort((x, y) => x.lane - y.lane).forEach((arc, n, list) => {
    const met = () => list.slice(0, n).find((x) => x.from < arc.to && arc.from < x.to && Math.abs(x.out - arc.out) < 3);
    for (let other = met(), tries = 0; other && tries < 6; other = met(), tries++) arc.out = other.out + step * close <= limit ? other.out + step * close : other.out - step * close;
  });
  arcs.forEach((arc) => {
    const path = mk('path', { class: 'arc draw', d: railed.includes(arc) ? railOf(arc, arc.out) : arc.curve, stroke: color(arc.e.letter), 'stroke-width': 1.4 });
    ctx.ov.append(path);
    ctx.later(drawn(path, run), 200 + arc.e.i * 130);
  });
  // A thread through the letters of a sound that returns. It joins words of one passage only: where a
  // version is set under each line, the lines of the original follow each other though the version stands between.
  const second = (id) => String(id).startsWith('p:');
  const rowOf = new Map(); const nthOf = new Map(); const seen = [0, 0];
  for (const r of ctx.rows.values()) { rowOf.set(r.tx, r); nthOf.set(r, seen[second(r.id) ? 1 : 0]++); }
  const versionUnder = (r) => (ctx.interlinear && r && r.pair ? r.pair.tx.getBoundingClientRect().height : 0);
  (lens.threads || []).forEach((t, nth) => {
    const col = threadColor(t.index || 0, rhymes);
    // one place for each word (a rhyme's colored tail may cut its letters in two)
    const byWord = new Map();
    ctx.stage.querySelectorAll(`.th[data-th="${t.index || 0}"]`).forEach((n) => { const w = n.closest('.w'); if (!byWord.has(w)) byWord.set(w, []); byWord.get(w).push(n); });
    const places = [...byWord.entries()].map(([w, nodes]) => {
      const boxes = nodes.map((n) => rel(n, b)).filter((x) => x.w > 0);
      if (!boxes.length) return null;
      const l = Math.min(...boxes.map((x) => x.l)); const r = Math.max(...boxes.map((x) => x.r));
      const top = Math.min(...boxes.map((x) => x.t)); const bot = Math.max(...boxes.map((x) => x.b));
      const row = rowOf.get(w.closest('.tx, .pr')) || null;
      return { l, r, t: top, b: bot, cx: (l + r) / 2, cy: (top + bot) / 2, w: r - l, h: bot - top, row, at: row ? nthOf.get(row) : -1, part: row && second(row.id) ? 1 : 0 };
    }).filter(Boolean);
    const put = (node) => { ctx.ov.append(node); ctx.later(() => node.classList.add('in'), run ? 500 : 0); };
    const dotAt = (x, y) => put(mk('circle', { class: 'fade', cx: x, cy: y, r: 1.7, fill: col }));
    const dotted = (d) => put(mk('path', { class: 'arc fade', d, stroke: col, 'stroke-width': 1.1, 'stroke-dasharray': '1 4.5' }));
    // what is drawn of this thread, for its key: an arc inside a line, a stroke from line to line, a place joined to none
    const did = { inside: false, across: false, lone: false };
    for (const part of [0, 1]) {
      const lines = byLine(places.filter((p) => p.part === part)).map((line) => ({ line, y: Math.max(...line.map((p) => p.b)) + (narrow ? 5 : 7) }));
      for (const { line, y } of lines) {
        line.forEach((p, i) => {
          const next = line[i + 1];
          if (!next) return;
          const dip = Math.min(13, (next.cx - p.cx) * 0.09) + 3;
          dotted(`M${p.cx} ${y}Q${(p.cx + next.cx) / 2} ${y + dip * 2} ${next.cx} ${y}`);
          p.under = true; next.under = true; did.inside = true;
        });
      }
      // a place that stands alone on its line is joined to the sound's place on the line before or after it,
      // where the way from one to the other is clear of any line of type between them and of a speaker's name.
      // Past a version set under the line the stroke may run behind its words, broken where they stand, if
      // less than a third of it is hidden so.
      lines.forEach((one, k) => {
        const two = lines[k + 1];
        if (!two || (one.line.length > 1 && two.line.length > 1)) return;
        // (from the place nearest the one it goes to, so that it does not run back under the arcs of its own line)
        const nearest = (line, x) => line.reduce((best, m) => (Math.abs(m.cx - x) < Math.abs(best.cx - x) ? m : best), line[0]);
        const p = one.line.length > 1 ? nearest(one.line, two.line[0].cx) : one.line[0];
        const q = two.line.length > 1 ? nearest(two.line, p.cx) : two.line[0];
        const gap = q.t - p.b;
        if (!(gap > -2 && (gap <= band + 8 || (q.at - p.at === 1 && gap <= band + 70 + (part ? 0 : versionUnder(p.row)))))) return;
        const a = { x: p.cx, y: one.y }; const z = { x: q.cx, y: q.t - 3 };
        const boxes = hurdles(ctx.stage, b, a.y, z.y);
        let cuts = [];
        if (crosses(a, z, boxes)) {
          const soft = part ? [] : boxes.filter((x) => x.under);
          if (!soft.length || crosses(a, z, boxes.filter((x) => !x.under))) return;
          const hid = breaks(a, z, soft);
          if (hid.hidden >= 1 / 3) return;
          cuts = hid.cuts;
        }
        const at = (u) => `${(a.x + (z.x - a.x) * u).toFixed(1)} ${(a.y + (z.y - a.y) * u).toFixed(1)}`;
        let d = `M${a.x} ${a.y}`; let done = 0;
        for (const [u0, u1] of cuts) { if (u1 <= done || u0 >= 1) continue; d += u0 > done ? `L${at(u0)}` : ''; done = Math.min(1, u1); d += `M${at(done)}`; }
        dotted(`${d}L${z.x} ${z.y}`);
        p.under = true;
        // two places of one line of verse that has turned: the stroke between them is the sound coming back inside
        // the line, and it ends in the second place's dot, over the word
        if (q.row && q.row === p.row && q.row.data.kind === 'v') { q.over = z; did.inside = true; } else { q.met = true; did.across = true; }
      });
      // a place that an arc or a stroke reaches has a dot; a place that none reaches has three points under it,
      // so that a lone dot does not read as a speck
      for (const { line, y } of lines) {
        for (const p of line) {
          if (p.over) dotAt(p.over.x, p.over.y);
          if (p.under || (p.met && !p.over)) dotAt(p.cx, y);
          else if (!p.over) {
            did.lone = true;
            const half = Math.max(4.5, Math.min(8, p.w / 2));
            [-half, 0, half].forEach((dx) => put(mk('circle', { class: 'fade', cx: p.cx + dx, cy: y, r: 1.25, fill: col })));
          }
        }
      }
    }
    const show = (samples.get(lens) || [])[nth];
    if (show) show(did);
  });
  if (diagrams.has(lens)) diagrams.get(lens)(run);
}

// the scheme by itself: a letter for each line, an arc for each rhyme
function aside(ctx, lens) {
  const { ends, color } = scheme(ctx, lens);
  const box = el('div', { class: 'keys' });
  if (ends.length > 1) {
    const n = ends.length;
    // where lines of the work are left out between two that are shown, the row of letters opens and shows three points
    const at = new Map((ctx.plate.rows || []).map((r, k) => [String(r.id), k]));
    const cut = ends.map((e, i) => {
      if (!i) return false;
      const a = at.get(String(ends[i - 1].row.id)); const z = at.get(String(e.row.id));
      if (a === undefined || z === undefined) return !!(e.row.data && e.row.data.gapBefore);
      return (ctx.plate.rows || []).slice(a + 1, z).some((r) => r.aside === 'gap');
    });
    const cuts = cut.filter(Boolean).length;
    const dx = Math.min(33, 186 / (n - 1 + cuts * 0.8)); const x0 = 8; const y = 40;
    const xs = []; ends.forEach((e, i) => xs.push(i ? xs[i - 1] + dx * (cut[i] ? 1.8 : 1) : x0));
    const w = x0 + xs[n - 1];
    const svg = mk('svg', { class: 'scheme', viewBox: `0 0 ${w} 76`, width: w, height: 76, 'aria-hidden': 'true' });
    box.append(svg);
    const order = [];
    diagrams.set(lens, (run) => {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      const last = {};
      ends.forEach((e, i) => {
        const x = xs[i];
        const t = mk('text', { class: 'fade', x, y: y + 5, fill: e.none ? 'var(--quiet)' : color(e.letter) }, e.none ? '·' : e.letter);
        svg.append(t); ctx.later(() => t.classList.add('in'), run ? 250 + i * 110 : 0);
        if (cut[i]) { const m = (xs[i - 1] + x) / 2; [-4, 0, 4].forEach((d) => { const c = mk('circle', { class: 'fade', cx: m + d, cy: y + 1, r: 0.9, fill: 'var(--quiet)' }); svg.append(c); ctx.later(() => c.classList.add('in'), run ? 250 + i * 110 : 0); }); }
        if (e.none) return;
        if (!order.includes(e.letter)) order.push(e.letter);
        const a = last[e.letter]; last[e.letter] = { x, i };
        if (!a) return;
        const up = order.indexOf(e.letter) % 2 ? 1 : -1;
        const lift = Math.min(26, (x - a.x) * 0.6) * up;
        const p = mk('path', { class: 'arc draw', d: `M${a.x} ${y + 13 * up}Q${(a.x + x) / 2} ${y + 13 * up + lift} ${x} ${y + 13 * up}`, stroke: color(e.letter), 'stroke-width': 1.2 });
        svg.append(p); ctx.later(drawn(p, run), 250 + i * 110);
      });
    });
    box.append(el('p', { class: 'k-note', text: `${ends.some((e) => e.none) ? 'A letter for each line. Lines with the same letter rhyme; a point is a line that rhymes with none.' : 'A letter for each line. Lines with the same letter rhyme.'}${cuts ? ' Three small points stand where lines are left out.' : ''}` }));
  }
  const { rhymes } = scheme(ctx, lens);
  const shows = [];
  samples.set(lens, shows);
  // In a key that names a sound of more than one letter, each sound stands upright in the italic, as a word
  // named in a note does, so that it is not read as a word of the sentence. (A sound told in words is not set so.)
  const named = (s) => !!s && !/\s/.test(s);
  const upright = (lens.threads || []).some((t) => named(t.sound) && [...t.sound].length > 1);
  (lens.threads || []).forEach((t, nth) => {
    const col = threadColor(t.index || 0, rhymes);
    // the samples are the marks the thread has on the plate: two places joined, and three points under a place joined to none
    const joined = mk('g', {});
    joined.append(mk('path', { d: 'M4 4Q15 13 26 4', stroke: col, 'stroke-width': 1.1, fill: 'none', 'stroke-dasharray': '1 4.5', 'stroke-linecap': 'round' }), mk('circle', { cx: 4, cy: 4, r: 1.7, fill: col }), mk('circle', { cx: 26, cy: 4, r: 1.7, fill: col }));
    const lone = mk('g', {});
    [8, 15, 22].forEach((x) => lone.append(mk('circle', { cx: x, cy: 6, r: 1.25, fill: col })));
    const say = (tail) => (!t.sound ? `a sound${tail.replace(/^,/, '')}` : upright && named(t.sound) ? ['the sound ', el('i', { text: t.sound }), tail] : `the sound ${t.sound}${tail}`);
    const both = key(joined, ''); const alone = key(lone, '');
    const write = (row, what) => { const span = row.lastChild; span.textContent = ''; span.append(...[].concat(what)); };
    // The key says only what is drawn: a row for the places that are joined (inside a line, from one line to
    // another, or both), and a row for the places joined to none, where the plate has such.
    const show = (did) => {
      const where = did.inside && did.across ? 'inside the line and from line to line' : did.inside ? 'inside the line' : did.across ? 'from line to line' : '';
      both.style.display = where ? '' : 'none';
      alone.style.display = did.lone ? '' : 'none';
      if (where) write(both, say(`, coming back ${where}`));
      write(alone, where ? 'the same sound, by itself' : say(', coming back'));
    };
    // (before the plate is drawn, what the reading says: places on one row, or on more than one)
    const perRow = new Map();
    for (const place of t.at || []) perRow.set(String(place[0]), (perRow.get(String(place[0])) || 0) + 1);
    const counts = [...perRow.values()];
    show({ inside: counts.some((n) => n > 1), across: counts.some((n) => n === 1) || !counts.length, lone: false });
    shows[nth] = show;
    box.append(both, alone);
  });
  return box.childNodes.length ? box : null;
}

export default { name: 'Rhyme', draw, aside };
