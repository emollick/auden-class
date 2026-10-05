// What a piece's own drawing is made with (see kit/README.md).
//
// A drawing is an svg as wide as the stage, in px, built again whenever the
// plate is redrawn, so it can lay itself out for the width it has:
//
//   function draw(ctx, lens, run) {
//     const d = sheet(ctx, lens, run, (w) => 240);   // clears the stage; lens.what stands at its head
//     d.rule(0, 200, d.w, 200);                      // a hairline
//     d.bar(x, y, w, h, { fill: RED, at: 300 });     // `at`: when it appears, in ms, if the drawing is being drawn in
//     d.text(x, y, 'Chapter 25', { cls: 'dg-lab', anchor: 'middle' });
//     d.hot(node, 'what the line under the drawing says while the pointer is on node', label);
//     d.keys([{ mark: 'bar', color: RED, text: 'this chapter' }]);
//     d.figures(rows);                               // the numbers it is drawn from, folded away under it
//   }
//
// Lines draw themselves; everything else fades in. With reduced motion, or
// when `run` is false (a resize), everything is simply there.

import { mk, el, clear, drawn, still, unmarked, INK, HAIR } from './draw.js';
import { table } from './lens-shape.js';
import { rich } from '../rich.js';

export const lin = (d0, d1, r0, r1) => (v) => r0 + ((v - d0) / ((d1 - d0) || 1)) * (r1 - r0);
export const num = (n) => Number(n).toLocaleString('en-US');

export function sheet(ctx, lens, run, height, opts = {}) {
  clear(ctx.own);
  // (the head line is tidied as a caption is, and a word between asterisks is named: set upright in the italic line)
  if (opts.what !== false && lens.what) ctx.own.append(el('p', { class: 'shape-what' }, rich(lens.what)));
  const wrap = el('div', { class: 'dg-wrap' });
  ctx.own.append(wrap);
  const w = Math.max(240, Math.floor(wrap.clientWidth));
  const h = Math.round(typeof height === 'function' ? height(w) : height);
  const svg = mk('svg', { class: 'dg', width: w, height: h, viewBox: `0 0 ${w} ${h}`, role: 'img', 'aria-label': unmarked(opts.label || lens.what || '') });
  wrap.append(svg);
  const moving = !!run && !still();
  let say = null;

  const fade = (node, at) => { if (moving && at != null) { node.classList.add('fade'); ctx.later(() => node.classList.add('in'), at); } return node; };
  // a line is hidden first, with nothing moving, and only then told to draw itself
  const stroke = (node, at) => { if (!moving || at == null) return node; const go = drawn(node, true); node.getBoundingClientRect(); node.classList.add('draw'); ctx.later(go, at); return node; };
  // a tap on bare paper lets go of whatever a tap had lit
  const release = () => { svg.querySelectorAll('.dg-on').forEach((x) => x.classList.remove('dg-on')); if (say) say.textContent = ''; };
  wrap.addEventListener('click', (e) => { if (!e.target.closest('.dg-hot')) release(); });

  const d = {
    svg, wrap, w, h, run: moving,
    rule(x1, y1, x2, y2, o = {}) {
      const n = mk('line', { x1, y1, x2, y2, stroke: o.stroke || HAIR, 'stroke-width': o.width || 1, 'stroke-linecap': o.cap || 'butt' });
      if (o.dash) n.setAttribute('stroke-dasharray', o.dash);
      svg.append(n);
      return o.dash ? fade(n, o.at) : stroke(n, o.at);
    },
    path(dstr, o = {}) {
      const n = mk('path', { class: 'arc', d: dstr, stroke: o.stroke || INK, 'stroke-width': o.width || 1.2, fill: o.fill || 'none' });
      if (o.dash) n.setAttribute('stroke-dasharray', o.dash);
      svg.append(n);
      return o.dash || (o.fill && o.fill !== 'none') ? fade(n, o.at) : stroke(n, o.at);
    },
    bar(x, y, bw, bh, o = {}) {
      const n = mk('rect', { x, y, width: Math.max(0, bw), height: Math.max(0, bh), rx: o.r || 0, fill: o.fill || INK, stroke: o.stroke || 'none', 'stroke-width': o.width || 1 });
      svg.append(n);
      return fade(n, o.at);
    },
    dot(x, y, r, o = {}) {
      const n = mk('circle', { cx: x, cy: y, r, fill: o.fill || INK, stroke: o.stroke || 'none', 'stroke-width': o.width || 1.2 });
      svg.append(n);
      return fade(n, o.at);
    },
    // one line of words in the svg: cls 'dg-it' (italic note), 'dg-lab' (small capitals), 'dg-n' (figures), 'dg-name' (a name, in the display face)
    text(x, y, words, o = {}) {
      const n = mk('text', { x, y, class: o.cls || 'dg-it', 'text-anchor': o.anchor || 'start' }, String(words));
      if (o.fill) n.style.fill = o.fill;
      if (o.turn) n.setAttribute('transform', `rotate(${o.turn} ${x} ${y})`);
      svg.append(n);
      return fade(n, o.at);
    },
    // words that may run to several lines, set over the drawing at x, y, `width` px wide; like the line that
    // speaks and the key, they are tidied as a caption is, and a title between asterisks is set in italics
    note(x, y, width, words, o = {}) {
      const n = el('p', { class: `dg-note ${o.cls || ''}`.trim() }, typeof words === 'string' ? rich(words) : [].concat(words).map((x) => (x && x.nodeType ? x : String(x))));
      n.style.left = `${x}px`; n.style.top = `${y}px`; n.style.width = `${width}px`;
      if (o.align) n.style.textAlign = o.align;
      wrap.append(n);
      return fade(n, o.at);
    },
    // While the pointer is on `node`, the line under the drawing says `words`, and the other marks that
    // answer the pointer go pale. A tap does the same; a second tap, or a tap on bare paper, lets go.
    // `mark`: one node or several (its label, its figure) that stay dark with it.
    hot(node, words, mark) {
      if (!say) {
        say = el('p', { class: 'dg-say', 'aria-hidden': 'true' });
        // while nothing is pointed at, the line says how it is made to speak
        const touch = typeof matchMedia === 'function' && matchMedia('(hover: none)').matches;
        say.dataset.hint = `${touch ? 'Touch' : 'Point at'} a mark to read what it stands for.`;
        // the line stands under the key, so that the key stays where it is when the line speaks
        const keys = [...ctx.own.querySelectorAll('.dg-keys')].pop();
        (keys || wrap).after(say);
        // While its own place is below the window (a tall drawing, a phone), the line that speaks stands at
        // the window's foot, and is then given a ground of paper. A mark under it tells when that is so.
        const end = el('i', { class: 'dg-say-end', 'aria-hidden': 'true' });
        say.after(end);
        if (ctx.own.sayWatch) ctx.own.sayWatch.disconnect();
        if (typeof IntersectionObserver === 'function') {
          const line = say;
          ctx.own.sayWatch = new IntersectionObserver((es) => { const e = es[es.length - 1]; line.classList.toggle('stuck', !e.isIntersecting && e.boundingClientRect.top > 0); });
          ctx.own.sayWatch.observe(end);
        }
      }
      const all = [node].concat(mark || []).filter(Boolean);
      all.forEach((x) => x.classList.add('dg-hot'));
      const on = () => { release(); say.replaceChildren(...rich(typeof words === 'string' ? words : String(words == null ? '' : words))); all.forEach((x) => x.classList.add('dg-on')); };
      const off = () => { if (node.classList.contains('dg-on')) release(); };
      let touch = false;
      node.addEventListener('pointerdown', (e) => { touch = e.pointerType === 'touch'; });
      node.addEventListener('pointerenter', (e) => { if (e.pointerType !== 'touch') on(); });
      node.addEventListener('pointerleave', (e) => { if (e.pointerType !== 'touch') off(); });
      node.addEventListener('click', () => { if (touch && node.classList.contains('dg-on')) off(); else on(); });
      return node;
    },
    // what the marks mean: [{ mark: 'bar' | 'open' | 'line' | 'dash' | 'dot' | 'ring', color, text }]
    // (`open` is a box in outline)
    keys(items) {
      const row = el('p', { class: 'dg-keys' }, items.map((k) => el('span', { class: 'dg-k' }, [el('i', { class: `dg-m dg-m-${k.mark || 'bar'}`, style: `--c:${k.color || INK}` }), typeof k.text === 'string' ? el('span', {}, rich(k.text)) : k.text])));
      if (say && say.parentNode === ctx.own) say.before(row); else ctx.own.append(row);
      return row;
    },
    // the names and numbers the drawing is made from, folded away under it
    figures(facts, label = 'The numbers') {
      const t = table(facts);
      if (!t) return null;
      const box = el('details', { class: 'dg-facts' }, [el('summary', { text: label }), t.tagName === 'TABLE' ? el('div', { class: 'facts-wrap' }, [t]) : t]);
      ctx.own.append(box);
      return box;
    },
  };
  return d;
}
