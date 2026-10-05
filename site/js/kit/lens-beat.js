// Beat: the measure as a rule under the line, the voice as dots, and a hairline
// that crosses each line in even time.
//
//   scan: { "<row>": { meter: "/x/x/x/", voice: "x x /x x //", div: { "2": "suf|fer" } } }
//
// meter, one mark a counted syllable:  /  a beat      x  an off-beat
//                                      -  a long      u  a short       (verse measured by length)
//                                      .  a counted syllable, / a fixed accent (verse measured by count)
//        a | between marks divides the feet
// voice, one group a word, one mark a syllable:  /  stressed   \  lightly stressed   x  unstressed
//        -  long   u  short   ~  not counted (it runs into the next)   a lone | is a pause
//        a | between the marks of one word is a pause inside it (two words that a dash joins: "/|/")
//        <  not counted (it runs into the syllable before it)

import { mk, el, rel, lastBox, byLine, key, still, INK, RED, QUIET } from './draw.js';
import { rich } from '../rich.js';

const parsed = new WeakMap();

function parseRow(row, s, lens) {
  const groups = String(s.voice || '').trim().split(/\s+/).filter(Boolean);
  const sy = [];
  const pauses = []; // a pause stands before the syllable with this number
  let w = row.first;
  for (const g of groups) {
    if (/^\|+$/.test(g)) { pauses.push(sy.length); continue; }
    const word = row.words[w];
    // (a | among the marks of a word is a pause that falls inside it, before the syllable whose mark follows:
    // two words that a dash joins are one word to the row, and the voice may stop at the dash)
    const mine = g.replace(/\|/g, '');
    if (!word || w > row.last || word.sy.length !== mine.length) return null;
    let j = 0;
    for (const c of g) {
      if (c === '|') { pauses.push(sy.length); continue; }
      sy.push({ el: word.sy[j], w, voice: c, counted: c !== '~' && c !== '<' });
      j++;
    }
    w++;
  }
  if (w !== row.last + 1) return null;
  // the meter, laid on the counted syllables in order
  const counted = sy.filter((x) => x.counted);
  let k = 0; let foot = true; let feet = false;
  for (const c of String(s.meter || lens.meter || '')) {
    if (/\s/.test(c)) continue;
    if (c === '|') { foot = true; feet = true; continue; }
    if (!counted[k]) break;
    counted[k].meter = c; counted[k].footStart = foot; foot = false; k++;
  }
  const marks = counted.map((x) => x.meter || '').join('');
  const quant = /[-u]/.test(marks);
  for (const x of sy) {
    const m = x.meter;
    x.strong = quant ? (feet && x.footStart && m === '-') : (m === '/' || m === '\\');
    x.stress = x.voice === '/' ? 2 : x.voice === '\\' ? 1 : 0;
    x.cls = x.voice === '~' || x.voice === '<' ? 'sx' : x.voice === '/' || x.voice === '-' ? 's1' : x.voice === '\\' ? 's2' : 's0';
  }
  return { sy, pauses, quant, feet, hasMeter: k > 0, byCount: !quant && marks.includes('.') };
}

function setup(ctx, lens) {
  const out = new Map();
  for (const [rowId, s] of Object.entries(lens.scan || {})) {
    const row = ctx.rows.get(rowId);
    const p = row ? parseRow(row, s, lens) : null;
    if (p) out.set(rowId, p); else if (typeof console !== 'undefined') console.warn(`beat: row ${rowId} does not match its marks`);
  }
  parsed.set(lens, out);
  // a word that carries a numbered remark is given room after it for the number while this lens shows
  (lens.points || []).forEach((pt) => {
    if (!pt.at) return;
    const nodes = ctx.words(pt.at[0], pt.at[1], pt.at[2] === undefined ? pt.at[1] : pt.at[2]);
    const w = nodes.length ? nodes[nodes.length - 1].closest('.w') : null;
    if (w) w.classList.add('numd');
  });
}

const each = (lens, f) => { for (const [rowId, p] of parsed.get(lens) || []) f(p, rowId); };

function on(ctx, lens) { each(lens, (p) => p.sy.forEach((s) => s.el.classList.add(s.cls))); }
function off(ctx, lens) { each(lens, (p) => p.sy.forEach((s) => s.el.classList.remove('s0', 's1', 's2', 'sx', 'on'))); }

function draw(ctx, lens, run) {
  const b = ctx.box(); const narrow = ctx.narrow();
  const R = narrow ? 2.8 : 3.5; const T = narrow ? 7 : 9; const t0 = narrow ? 3 : 4;
  const marks = []; const lines = [];
  const add = (node) => { ctx.ov.append(node); marks.push(node); return node; };
  // rows in the order they stand on the plate, each with its lines of type
  const shown = [];
  for (const row of ctx.rowList.concat([...ctx.rows.values()].filter((r) => !ctx.rowList.includes(r)))) {
    const p = (parsed.get(lens) || new Map()).get(row.id);
    if (!p) continue;
    p.sy.forEach((s, i) => { s.box = rel(s.el, b); s.x = s.box.cx; s.i = i; });
    shown.push({ p, lines: byLine(p.sy.map((s) => ({ ...s.box, s }))).map((l) => l.map((x) => x.s)) });
  }
  // Verse measured by length: every long mark of the plate is one length, about half an em and no more than
  // 16 px, and shorter where two marks would else stand closer than 3 px, or a bar between two marks closer
  // than 3.5 px to either (but never under 7 px). A short mark is 7.2 px wide.
  const SHORT = 3.6;
  const fs = parseFloat(getComputedStyle(ctx.root).getPropertyValue('--fs')) || 30;
  let long = Math.max(4, Math.min(8, fs * 0.26));
  const marked = (s) => s.counted && s.meter;
  const barred = (p, a, z) => p.pauses.some((n) => n > a.i && n <= z.i) || (p.feet && z.footStart);
  for (const { p, lines: ls } of shown) {
    if (!p.quant) continue;
    for (const line of ls) {
      const c = line.filter(marked);
      for (let k = 1; k < c.length; k++) {
        const room = c[k].x - c[k - 1].x - (barred(p, c[k - 1], c[k]) ? 10 : 3);
        const longs = (c[k - 1].meter === '-') + (c[k].meter === '-');
        if (longs === 2) long = Math.min(long, room / 2); else if (longs === 1) long = Math.min(long, room - SHORT);
      }
    }
  }
  long = Math.max(3.5, long);
  const half = (s) => (s.meter === '-' ? long : SHORT);
  for (const { p, lines: ls } of shown) {
    let prev = null; // the line of type before this one, where a long line has turned
    for (const line of ls) {
      const base = Math.max(...line.map((s) => s.box.b));
      const top = Math.min(...line.map((s) => s.box.t));
      const y1 = base + (narrow ? 7 : 9); const y2 = y1 + T + (narrow ? 8 : 10);
      const counted = line.filter((s) => s.counted && s.meter);
      let hooked = -Infinity; // where the hook of a syllable that runs on past the turn ends
      const tied = []; // the ties of this line of type, from where to where: a pause under one begins lower
      if (counted.length && !p.quant) {
        // the rule, with a small gap where one foot ends and the next begins
        let d = `M${counted[0].x - 0.5} ${y1}`;
        counted.forEach((s, i) => { if (i && s.footStart && p.feet) { const m = (counted[i - 1].x + s.x) / 2; d += `H${m - 2}M${m + 2} ${y1}`; } });
        add(mk('path', { class: 'mk fade', d: `${d}H${counted[counted.length - 1].x + 0.5}`, stroke: INK, 'stroke-width': 1, fill: 'none' }));
      }
      line.forEach((s, i) => {
        if (s.counted && s.meter) {
          if (p.quant) {
            if (s.meter === '-') add(mk('path', { class: 'mk fade', d: `M${s.x - long} ${y1 + 2}H${s.x + long}`, stroke: INK, 'stroke-width': 1.5, 'stroke-linecap': 'round' }));
            else add(mk('path', { class: 'mk fade', d: `M${s.x - SHORT} ${y1 - 0.5}Q${s.x} ${y1 + 5.5} ${s.x + SHORT} ${y1 - 0.5}`, stroke: INK, 'stroke-width': 1.1, fill: 'none', 'stroke-linecap': 'round' }));
            // (the bar between two feet stands midway between the two marks, not between the middles of the syllables)
            const before = line.slice(0, i).reverse().find(marked);
            if (p.feet && s.footStart && before) { const m = (before.x + half(before) + s.x - half(s)) / 2; add(mk('path', { class: 'mk fade', d: `M${m} ${y1 - 3}V${y1 + 7}`, stroke: QUIET, 'stroke-width': 0.8 })); }
          } else {
            const strong = s.meter === '/' || s.meter === '\\';
            add(mk('path', { class: 'mk fade', d: `M${s.x} ${y1}v${strong ? T : t0}`, stroke: INK, 'stroke-width': strong ? 1.5 : 1 }));
          }
        }
        // the voice
        const judged = p.hasMeter && (!p.quant || p.feet);
        if (s.stress) add(mk('circle', { class: 'mk fade', cx: s.x, cy: y2, r: s.stress === 2 ? R : R * 0.6, fill: !judged || s.strong ? INK : RED }));
        else if (judged && s.strong) add(mk('circle', { class: 'mk fade', cx: s.x, cy: y2, r: R - 0.6, fill: 'none', stroke: RED, 'stroke-width': 1.2 }));
        // a syllable that is not counted is tied to the one it runs into: the next, or (marked <) the one before it
        if (!s.counted && s.voice === '<') {
          const before = line[i - 1];
          // (the same tie, mirrored; in verse measured by length it begins clear of the mark of the syllable before)
          const from = before && p.quant && marked(before) ? Math.min(s.x - 6, before.x + half(before) + 3) : before ? before.x : 0;
          if (before) { tied.push([from, s.x]); add(mk('path', { class: 'mk fade arc', d: `M${from} ${base + 2}Q${(from + s.x) / 2} ${base + 7} ${s.x} ${base + 2}`, stroke: QUIET, 'stroke-width': 1 })); }
          // where the line has turned before it, the second half of the tie is drawn: a short hook that comes in from before the part
          else if (p.sy[s.i - 1]) { const start = Math.min(s.x - 6, s.box.l - (narrow ? 4 : 6)); add(mk('path', { class: 'mk fade arc', d: `M${start} ${base + 4.5}Q${(start + s.x) / 2} ${base + 4.5} ${s.x} ${base + 2}`, stroke: QUIET, 'stroke-width': 1 })); }
        } else if (!s.counted) {
          const next = line[i + 1];
          // (in verse measured by length the tie stops short of the next syllable's mark, which stands just under its end)
          const to = next && p.quant && marked(next) ? Math.max(s.x + 6, next.x - half(next) - 3) : next ? next.x : 0;
          if (next) { tied.push([s.x, to]); add(mk('path', { class: 'mk fade arc', d: `M${s.x} ${base + 2}Q${(s.x + to) / 2} ${base + 7} ${to} ${base + 2}`, stroke: QUIET, 'stroke-width': 1 })); }
          // where the line turns after it, the tie cannot reach the next syllable: its first half is drawn, a short hook past the end of the part
          else if (p.sy[s.i + 1]) { const end = Math.max(s.x + 6, s.box.r + (narrow ? 4 : 6)); hooked = end; add(mk('path', { class: 'mk fade arc', d: `M${s.x} ${base + 2}Q${(s.x + end) / 2} ${base + 4.5} ${end} ${base + 4.5}`, stroke: QUIET, 'stroke-width': 1 })); }
        }
        if (p.pauses.includes(s.i) && i) {
          let m = (line[i - 1].box.r + s.box.l) / 2;
          // (in verse measured by length the bar keeps 3.5 px clear of the marks on either side of it, where there is the room)
          const before = p.quant ? line.slice(0, i).reverse().find(marked) : null; const after = p.quant ? line.slice(i).find(marked) : null;
          if (before || after) { const lo = before ? before.x + half(before) + 5 : -Infinity; const hi = after ? after.x - half(after) - 5 : Infinity; m = lo <= hi ? Math.max(lo, Math.min(hi, m)) : (lo + hi) / 2; }
          // (under a tie the two bars begin 2.5 px clear of it: the tie hangs 5 px under the foot of the line,
          // and bars that met it read with it as one mark)
          const barTop = tied.some(([l, r]) => m + 1.5 > l && m - 1.5 < r) ? Math.max(y1 - 4, base + 7.5) : y1 - 4;
          add(mk('path', { class: 'mk fade', d: `M${m - 1.5} ${barTop}V${y2 + R}M${m + 1.5} ${barTop}V${y2 + R}`, stroke: QUIET, 'stroke-width': 0.8 }));
        }
        // a pause where the line has turned is drawn at the end of the part before the turn
        else if (p.pauses.includes(s.i) && prev) { const m = prev.r + (narrow ? 5 : 7); add(mk('path', { class: 'mk fade', d: `M${m - 1.5} ${prev.y1 - 4}V${prev.y2 + R}M${m + 1.5} ${prev.y1 - 4}V${prev.y2 + R}`, stroke: QUIET, 'stroke-width': 0.8 })); }
      });
      // (a pause that falls at the turn stands clear of the hook, after it)
      prev = { r: Math.max(hooked, ...line.map((s) => s.box.r)), y1, y2 };
      const head = mk('path', { class: 'ph', d: `M0 ${top + (base - top) * 0.2}V${y2 + R + 3}` });
      ctx.ov.append(head);
      lines.push({ line, head });
    }
  }
  // remarks pinned to words
  (lens.points || []).forEach((pt, i) => {
    if (!pt.at) return;
    const nodes = ctx.words(pt.at[0], pt.at[1], pt.at[2] === undefined ? pt.at[1] : pt.at[2]);
    if (!nodes.length) return;
    const end = nodes[nodes.length - 1];
    const r = lastBox(end.closest('.w') || end, b);
    const g = ctx.label(String(i + 1), r.r + 1, r.t + r.h * 0.08, 'gl num');
    ctx.later(() => g.classList.add('in'), run ? 500 + i * 200 : 0);
  });
  ctx.ov.getBoundingClientRect();
  const gap = Math.min(14, 900 / Math.max(1, marks.length));
  marks.forEach((m, i) => ctx.later(() => m.classList.add('in'), run ? 30 + i * gap : 0));
  if (!run || still()) return;
  // the hairline: every syllable takes the same time
  const total = lines.reduce((sum, l) => sum + l.line.length, 0);
  const step = Math.max(170, Math.min(400, 13000 / Math.max(1, total)));
  let t = 700;
  for (const { line, head } of lines) {
    line.forEach((s, i) => {
      ctx.later(() => {
        head.style.transition = i ? `transform ${step}ms linear,opacity .3s` : 'opacity .3s';
        head.style.transform = `translateX(${s.x}px)`; head.style.opacity = 0.75;
        if (s.stress) { s.el.classList.add('on'); setTimeout(() => s.el.classList.remove('on'), step); }
      }, t);
      t += step;
    });
    ctx.later(() => { head.style.opacity = 0; }, t + 40);
    t += Math.max(300, step * 1.4);
  }
}

function aside(ctx, lens) {
  const rows = [...(parsed.get(lens) || new Map()).values()];
  const all = rows.flatMap((p) => p.sy.map((s) => ({ ...s, p })));
  const quant = rows.some((p) => p.quant); const byCount = rows.some((p) => p.byCount);
  const judged = (s) => s.p.hasMeter && (!s.p.quant || s.p.feet);
  const box = el('div', { class: 'keys' });
  if (lens.meterName) box.append(el('p', { class: 'measure' }, [el('span', { class: 'lab', text: 'The measure' }), ` ${lens.meterName}`]));
  if (quant) {
    box.append(key(mk('path', { d: 'M8 6H22', stroke: INK, 'stroke-width': 1.5, 'stroke-linecap': 'round' }), 'a long syllable'));
    box.append(key(mk('path', { d: 'M11.4 3.5Q15 9.5 18.6 3.5', stroke: INK, 'stroke-width': 1.1, fill: 'none', 'stroke-linecap': 'round' }), 'a short syllable'));
  } else if (rows.some((p) => p.hasMeter)) {
    box.append(key(mk('path', { d: 'M3 1.5H27M5 1.5v9M15 1.5v4M25 1.5v9', stroke: INK, fill: 'none' }), byCount ? 'the count: one stroke a syllable, a long one where the measure has an accent' : 'the measure: a long stroke is a beat, a short one an off-beat'));
  }
  // The voice: one row for each kind of dot the lines carry. A stress is a large dot and a light stress a small
  // one; ink where it falls on a beat (or the tab has no meter to judge by), red where it does not.
  const met = (s) => !judged(s) || s.strong;
  const dot = (r, fill) => mk('circle', { cx: 15, cy: 6, r, fill });
  if (all.some((s) => s.stress === 2 && met(s))) box.append(key(dot(3.4, INK), quant ? 'the accent of the word' : byCount ? 'a stress in the voice, on an accent of the measure' : 'a stress in the voice, on the beat'));
  if (all.some((s) => s.stress === 2 && !met(s))) box.append(key(dot(3.4, RED), byCount ? 'a stress somewhere else' : 'a stress off the beat'));
  if (all.some((s) => !s.stress && judged(s) && s.strong)) box.append(key(mk('circle', { cx: 15, cy: 6, r: 2.9, fill: 'none', stroke: RED, 'stroke-width': 1.2 }), byCount ? 'an accent the voice passes over' : 'a beat the voice passes over'));
  if (all.some((s) => s.stress === 1 && met(s))) box.append(key(dot(2.1, INK), 'a light stress'));
  if (all.some((s) => s.stress === 1 && !met(s))) box.append(key(dot(2.1, RED), byCount ? 'a light stress somewhere else' : 'a light stress off the beat'));
  if (all.some((s) => !s.counted)) box.append(key(mk('path', { d: 'M8 4Q15 10 22 4', stroke: QUIET, 'stroke-width': 1, fill: 'none', 'stroke-linecap': 'round' }), all.some((s) => s.voice === '<') ? 'a syllable that is not counted: it runs into the one beside it' : 'a syllable that is not counted: it runs into the next'));
  if (rows.some((p) => p.pauses.length)) box.append(key(mk('path', { d: 'M13.5 1V11M16.5 1V11', stroke: QUIET, 'stroke-width': 0.8 }), quant ? 'the break in the line' : 'a pause'));
  const points = (lens.points || []).filter((pt) => pt.say);
  if (points.length) {
    const list = el('ol', { class: 'points' });
    points.forEach((pt) => { const li = el('li', {}, rich(pt.say)); list.append(li); if (pt.at) ctx.refer(li, ctx.words(pt.at[0], pt.at[1], pt.at[2] === undefined ? pt.at[1] : pt.at[2])); });
    box.append(list);
  }
  const again = el('button', { type: 'button', class: 'again', text: 'Draw it again' });
  again.addEventListener('click', () => ctx.replay());
  box.append(again);
  return box;
}

export default { name: 'Beat', setup, on, off, draw, aside };
