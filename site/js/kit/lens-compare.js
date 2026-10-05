// Compare: two versions of the passage, and which words of one answer
// which words of the other.
//
//   ties: [{ a: [row, first, last], b: ["p:row", first, last], say: "..." }]
//
// The ties are numbered in the order their words stand in the first passage,
// whatever order the reading lists them in, and the remarks follow that order.
// A tie with no remark (`say`) is tied by its color and takes no number: the
// numbers count the remarks. (Where no tie has a remark, all are numbered.)

import { mk, el, lineBoxes, drawn, PARTS } from './draw.js';
import { rich } from '../rich.js';

const ends = (ctx, t) => ['a', 'b'].map((k) => (t[k] ? ctx.words(t[k][0], t[k][1], t[k][2] === undefined ? t[k][1] : t[k][2]) : []));

function inPlace(ctx, lens) {
  const order = [...ctx.rows.keys()];
  const at = (e) => (e ? [order.indexOf(String(e[0])), Math.floor(e[1])] : null);
  return (lens.ties || []).map((t, n) => ({ t, n, at: at(t.a) || [1e9, 0], then: at(t.b) || [0, 0] }))
    .sort((x, y) => x.at[0] - y.at[0] || x.at[1] - y.at[1] || x.then[0] - y.then[0] || x.then[1] - y.then[1] || x.n - y.n).map((x) => x.t);
}

// the number of each tie that has a remark, counted from 1 in the order they stand; 0 for a tie that has none.
// (Where no tie at all has a remark there is no list to count, as on a card of the front page: every tie is
// numbered in its order, as before.)
const numbers = (ties) => { const any = ties.some((t) => t.say); let n = 0; return ties.map((t) => (t.say || !any ? ++n : 0)); };

// two ties whose words overlap are ruled at two heights, the later one lower
function levels(ties) {
  const span = (e) => (e ? { row: String(e[0]), a: Math.floor(e[1]), z: Math.floor(e[2] === undefined ? e[1] : e[2]) } : null);
  return ties.map((t, i) => ['a', 'b'].map((k) => {
    const me = span(t[k]);
    if (!me) return 0;
    let level = 0;
    for (let n = 0; n < i; n++) for (const kk of ['a', 'b']) { const x = span(ties[n][kk]); if (x && x.row === me.row && x.a <= me.z && me.a <= x.z) level++; }
    return Math.min(level, 2);
  }));
}

function draw(ctx, lens, run) {
  const b = ctx.box();
  const band = parseFloat(getComputedStyle(ctx.root).getPropertyValue('--band')) || 26;
  const ties = inPlace(ctx, lens);
  const lv = levels(ties);
  const num = numbers(ties);
  ties.forEach((t, i) => {
    const col = PARTS[i % PARTS.length];
    const [A, B] = ends(ctx, t).map((nodes) => lineBoxes(nodes, b));
    [A, B].forEach((lines, side) => lines.forEach((ln) => {
      const p = mk('path', { class: 'arc draw', d: `M${ln.l} ${ln.b + 2 + lv[i][side] * 4}H${ln.r}`, stroke: col, 'stroke-width': 1.5 });
      ctx.ov.append(p); ctx.later(drawn(p, run), 120 + i * 240);
    }));
    if (!A.length || !B.length) return;
    const [u, v] = A[0].t <= B[0].t ? [A[A.length - 1], B[0]] : [B[B.length - 1], A[0]];
    // a stroke from one to the other where one stands just under the other
    if (ctx.interlinear && v.t - u.b > -2 && v.t - u.b <= band + 10) {
      const p = mk('path', { class: 'arc draw', d: `M${u.cx} ${u.b + 5}L${v.cx} ${v.t + v.h * 0.1}`, stroke: col, 'stroke-width': 1.1 });
      ctx.ov.append(p); ctx.later(drawn(p, run), 320 + i * 240);
      // the number of the pair's remark stands at the head of its stroke, on the side the stroke leans away from
      // (a stroke between the lines has a number only where there are remarks to count, as before)
      if (ties.length > 1 && num[i] && ties.some((x) => x.say)) {
        const right = v.cx <= u.cx;
        const g = ctx.label(String(num[i]), u.cx + (right ? 5 : -11), u.b + 4, 'gl num');
        g.style.color = col; ctx.later(() => g.classList.add('in'), run ? 320 + i * 240 : 0);
      }
    } else if (ties.length > 1 && num[i]) {
      // the number of a tie stands under its first word; where two ties begin together the lower one's number stands further in
      // (a tie of which nothing is said has its two rules in one color and no number)
      [A[0], B[0]].forEach((ln, side) => { const g = ctx.label(String(num[i]), ln.l + lv[i][side] * 10, ln.b + 4 + lv[i][side] * 4, 'gl num tn'); g.style.color = col; ctx.later(() => g.classList.add('in'), run ? 320 + i * 240 : 0); });
    }
  });
}

function aside(ctx, lens) {
  const ties = inPlace(ctx, lens);
  if (!ties.some((t) => t.say)) return null;
  const list = el('ol', { class: 'points ties' });
  const num = numbers(ties);
  ties.forEach((t, i) => {
    if (!t.say) return;
    const li = el('li', {}, rich(t.say));
    li.style.setProperty('--c', PARTS[i % PARTS.length]);
    li.value = num[i];
    ctx.refer(li, ends(ctx, t).flat());
    list.append(li);
  });
  return el('div', { class: 'keys' }, [list]);
}

export default { name: 'Compare', draw, aside };
