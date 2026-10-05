// Sentence: how a sentence is built. Each span of words is ruled under,
// one kind to a color; a span inside another is ruled a step lower.
//
//   spans: [{ from: [row, word], to: [row, word], tag: "main", label: "the main clause" }]
// A word number may name one of two words joined by a dash (6.1, 6.2), so
// that a clause can end before the dash and the next begin after it.

import { mk, el, lineBoxes, drawn, key, PARTS } from './draw.js';

const laid = new WeakMap();

function setup(ctx, lens) {
  const order = [...ctx.rows.values()];
  const at = (id) => order.findIndex((r) => r.id === String(id));
  const tags = [];
  const spans = (lens.spans || []).map((s) => {
    const i = at(s.from[0]); const j = at(s.to[0]);
    if (i < 0 || j < i) return null;
    if (!tags.includes(s.tag)) tags.push(s.tag);
    const nodes = [];
    for (let k = i; k <= j; k++) {
      const row = order[k];
      if (String(row.id).startsWith('p:') !== String(s.from[0]).startsWith('p:')) continue;
      const a = k === i ? s.from[1] : row.first; const z = k === j ? s.to[1] : row.last;
      // the letters of each word, so that the rule stops where the last word stops and not under its comma
      nodes.push(...ctx.words(row.id, a, z));
    }
    return { ...s, i, j, a: s.from[1], z: s.to[1], nodes };
  }).filter((s) => s && s.nodes.length);
  const before = (r1, w1, r2, w2) => r1 < r2 || (r1 === r2 && w1 <= w2);
  for (const s of spans) s.level = spans.filter((q) => q !== s && before(q.i, q.a, s.i, s.a) && before(s.j, s.z, q.j, q.z) && !(q.i === s.i && q.a === s.a && q.j === s.j && q.z === s.z)).length;
  laid.set(lens, { spans, tags, color: (tag) => PARTS[tags.indexOf(tag) % PARTS.length] });
}

function draw(ctx, lens, run) {
  const b = ctx.box();
  const { spans, color } = laid.get(lens);
  spans.forEach((s, n) => {
    const lines = lineBoxes(s.nodes, b);
    lines.forEach((ln, i) => {
      // a rule stands 6 px under the foot of its words, so that the tick at its end stops clear of the tail of a
      // comma after the last word; a span inside another is ruled 8 px lower, so that its ticks stop short of the rule above
      const y = ln.b + 6 + s.level * 8;
      const open = i === 0 ? `M${ln.l} ${y - 4}V${y}` : `M${ln.l} ${y}`;
      const close = i === lines.length - 1 ? `V${y - 4}` : '';
      const p = mk('path', { class: 'arc draw', d: `${open}H${ln.r}${close}`, stroke: color(s.tag), 'stroke-width': 1.4 });
      ctx.ov.append(p); ctx.later(drawn(p, run), 150 + n * 260 + i * 120);
    });
  });
}

function aside(ctx, lens) {
  const { spans, tags, color } = laid.get(lens);
  const box = el('div', { class: 'keys' });
  // one row for each color: the names of its spans, in the order they stand in the passage
  const inPlace = [...spans].sort((x, y) => x.i - y.i || x.a - y.a);
  for (const t of tags) {
    const mine = inPlace.filter((s) => s.tag === t);
    const names = [...new Set(mine.map((s) => s.label).filter(Boolean))];
    if (!names.length) continue;
    // (labels that hold a comma or a colon are parted by semicolons, as in the key of a Figure tab)
    const row = key(mk('path', { d: 'M4 4V8H26V4', stroke: color(t), 'stroke-width': 1.4, fill: 'none' }), names.join(names.some((x) => /[,:]/.test(String(x))) ? '; ' : ', '));
    ctx.refer(row, mine.flatMap((s) => s.nodes));
    box.append(row);
  }
  return box.childNodes.length ? box : null;
}

export default { name: 'Sentence', setup, draw, aside };
