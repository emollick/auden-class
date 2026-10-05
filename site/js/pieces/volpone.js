// Volpone: the drawing of its own.
//
//   close / Names: the five persons the court sentences, a row to each. The
//                  name and the creature it means; what each brings the Fox,
//                  with one line that gathers the gifts to him; what the court
//                  gives each, on one red line that reaches all five. Wide, the
//                  three stand side by side; narrow, the gifts stand over the
//                  sentences as two small drawings.
//
// Drawn from the reading's own `facts` (remake/works/volpone/reading.json):
// creatures, sentenced, theHope, theGiftsCounted, bestiary, others, volponeSays.
// One key more is proposed and used where it is found: dictionary { what, book }.

import { el, RED, INK } from '../kit/draw.js';
import { sheet } from '../kit/diagram.js';

// a private preview of one piece has no book to open
const canRead = () => typeof document === 'undefined' || !document.documentElement.dataset.only;
const wideOf = (node) => { try { return node.getComputedTextLength(); } catch (e) { return String(node.textContent).length * 6; } };
const upper = (s) => String(s).replace(/^\p{Ll}/u, (c) => c.toUpperCase());
const stop = (s) => (/[.!?]$/.test(String(s)) ? String(s) : `${s}.`);
// Words are handed to the kit as a caption is written, so that it tidies them (an act and its
// number stay on one line): [words](place) opens their place in the book printed here.
const linked = (words, read) => (read && canRead() && !/[[\]]/.test(words) && !/[)\s]/.test(read) ? `[${words}](#/read/${read})` : String(words));
// In the drawing only the head of a fact opens its place, the words before its first comma or
// semicolon, so that a column of facts is not a column of underlines.
const cited = (words, read) => { const s = String(words); const cut = s.search(/[,;]/); return cut > 0 ? linked(s.slice(0, cut), read) + s.slice(cut) : linked(s, read); };

// The facts, read by key. What does not hold together is not drawn: the kit
// then shows the plain table.
function model(f) {
  const list = f && f.creatures;
  if (!Array.isArray(list) || !list.length) throw new Error('facts: no creatures');
  const people = list.map((c) => {
    if (!c.who) throw new Error('facts: a creature without a name');
    if (!c.short && !c.nameMeans) throw new Error(`facts: no meaning for ${c.who}`);
    const said = (o) => (o && o.what ? { what: o.what, read: o.read || '' } : null);
    return {
      who: c.who, means: c.short || c.nameMeans, full: c.nameMeans || c.short, listed: c.listed || '',
      called: c.called && c.called.as ? c.called : null,
      brings: said(c.brings), part: said(c.part), sentence: said(c.sentence),
    };
  });
  const sentenced = people.filter((p) => p.sentence);
  if (!people.some((p) => p.brings)) throw new Error('facts: no one brings anything');
  if (typeof f.sentenced === 'number' && f.sentenced !== sentenced.length) throw new Error(`facts: ${f.sentenced} sentenced, and ${sentenced.length} sentences are given`);
  // the one the gifts are brought to: the first who brings nothing
  const fox = people.find((p) => !p.brings);
  if (!fox) throw new Error('facts: no one to bring the gifts to');
  return { people, sentenced, fox };
}

// Words set over the drawing; gives back the node and how tall it stands.
function words(d, x, y, w, text, o = {}) {
  const p = d.note(x, y, w, text, { at: o.at });
  if (o.ink) p.style.color = INK;
  // the pointer goes through the words to the mark under them, except on a link
  p.style.pointerEvents = 'none';
  p.querySelectorAll('a').forEach((a) => { a.style.pointerEvents = 'auto'; });
  return { node: p, h: Math.ceil(p.getBoundingClientRect().height) };
}

// How far below the top of such words the foot of their first line stands.
function footOf(d) {
  const p = d.note(0, 0, 100, 'x');
  const s = el('span');
  s.style.cssText = 'display:inline-block;width:0;height:0';
  p.prepend(s);
  const foot = s.getBoundingClientRect().bottom - p.getBoundingClientRect().top;
  p.remove();
  return foot || 13;
}

// A person's name with the creature it means after it; under them, or after
// them where `o.after` says there is room, how the list of persons has him.
function head(d, x, base, p, o = {}) {
  const name = d.text(x, base, p.who, { cls: 'dg-name', at: o.at });
  const means = d.text(x + wideOf(name) + 8, base, p.means, { fill: INK, at: o.at });
  const right = x + wideOf(name) + 8 + wideOf(means);
  const listed = p.listed ? d.text(o.after ? o.after : x, o.after ? base : base + 16, p.listed, { anchor: o.after ? 'end' : 'start', at: o.at }) : null;
  return { nodes: [name, means, listed].filter(Boolean), right, listedW: listed ? wideOf(listed) : 0, h: listed && !o.after ? 34 : 20 };
}

// a count under ten is spelled out, as the captions spell it
const spell = (n) => ['none', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][n] || String(n);

// what the pointer adds on a name: the dictionary's own words, and what the play calls him
const sayOf = (p) => `${p.who}${p.listed ? `, ${p.listed}` : ''}: ${stop(p.full)}${p.called ? ` Called ${stop(p.called.as)}` : ''}`;

// ----- wide: a row to each, the three things side by side -----
function matrix(d, m, L, o) {
  const { people, fox } = m;
  const W = d.w;
  // the first column is as wide as the widest name and creature
  const probe = people.map((p) => head(d, 0, -60, p));
  const A = Math.ceil(Math.max(...probe.map((h) => h.right), ...probe.map((h) => h.listedW)));
  probe.forEach((h) => h.nodes.forEach((n) => n.remove()));
  const xr = A + 15.5;                       // the line that gathers the gifts
  const xb = xr + 14.5;                      // what each brings
  const room = W - xb - 26 - 12;
  const bw = Math.round(room * 0.45);
  const xc = Math.round(xb + bw + 26) + 0.5; // the court's line
  const cx = xc + 11.5; const cw = W - cx;

  let y = 0;
  d.text(0, y + 9, L.name, { cls: 'dg-lab' });
  // (the first rows of the middle column say what a man does, before the rows that say what one brings)
  if (people[0] && !people[0].brings && people[0].part) d.text(xb, y + 9, L.does, { cls: 'dg-lab' });
  d.text(cx, y + 9, L.court, { cls: 'dg-lab' });
  y += 17;
  d.rule(0, y + 0.5, xb + bw, y + 0.5);
  const courtTop = y;
  y += 11;

  const rows = [];
  let label = null;
  people.forEach((p, i) => {
    const at = 120 + i * 110;
    // over the first who brings something: what the column holds from here down
    if (p.brings && !label) {
      if (i) y += 4;
      label = d.text(xb, i ? y + 9 : 9, L.brings, { cls: 'dg-lab' });
      if (i) y += 19;
    }
    const base = y + 15;
    const h = head(d, 0, base, p, { at });
    const act = p.brings || p.part;
    const b = act ? words(d, xb, base - o.foot, bw, cited(act.what, act.read), { at: p.brings ? 800 + rows.filter((r) => r.p.brings).length * 260 : at, ink: true }) : { h: 0 };
    const c = p.sentence ? words(d, cx, base - o.foot, cw, cited(p.sentence.what, p.sentence.read), { at: 1650 + i * 100, ink: true }) : { h: 0 };
    const row = { p, i, base, h, top: y, mid: base - 4.5 };
    rows.push(row);
    y += Math.max(h.h, b.h, c.h) + 18;
    row.bottom = y - 10;
  });
  const end = y - 18;

  // the gifts: from each, along one line, to the one they are brought to
  const to = rows.find((r) => r.p === fox);
  const fx = Math.min(xr - 9, to.h.right + 9);
  let k = 0;
  rows.forEach((r) => {
    if (!r.p.brings) return;
    r.gift = d.path(`M${xb - 5} ${r.mid}H${xr}V${to.mid}H${fx}`, { stroke: INK, width: 1.2, at: 800 + (k++) * 260 });
  });
  to.dot = d.dot(fx, to.mid, 2.6, { fill: INK, at: 1400 });

  // the court: one line, and a mark on it for each sentence
  const judged = rows.filter((r) => r.p.sentence);
  if (judged.length) {
    d.rule(xc, courtTop, xc, judged[judged.length - 1].mid, { stroke: RED, width: 1.2, at: 1500 });
    judged.forEach((r, n) => { r.mark = d.dot(xc, r.mid, 3, { fill: RED, at: 1650 + n * 100 }); });
  }
  const last = rows.filter((r) => r.gift).pop();
  return { rows, end, to, label, noteW: xb + bw, rail: [xr - 6, to.mid, 12, last.mid - to.mid], hit: (r) => [0, r.top - 4, xr - 8, r.bottom - r.top + 8] };
}

// ----- narrow: the gifts over the sentences, as two small drawings -----
function stacked(d, m, L, o) {
  const { people, fox } = m;
  const W = d.w;
  const xr = 4.5; const x0 = 17;
  // how the list of persons has each stands after the name, where every row has room for it
  const probe = people.map((p) => head(d, x0, -60, p));
  const after = probe.every((h) => h.right + 14 + h.listedW <= W) ? W : 0;
  probe.forEach((h) => h.nodes.forEach((n) => n.remove()));

  let y = 0;
  d.text(x0, y + 9, people[0] && !people[0].brings && people[0].part ? `${L.name} · ${L.does}` : L.name, { cls: 'dg-lab' });
  y += 19;
  const rows = [];
  let label = null;
  people.forEach((p, i) => {
    const at = 120 + i * 110;
    if (p.brings && !label) {
      if (i) y += 3;
      label = d.text(x0, y + 9, L.brings, { cls: 'dg-lab' });
      y += 19;
    }
    const row = { p, i, top: y, base: y + 15 };
    row.h = head(d, x0, row.base, p, { at, after });
    y += row.h.h + 1;
    const act = p.brings || p.part;
    if (act) {
      row.mid = y + o.foot - 4.5;
      y += words(d, x0, y, W - x0, cited(act.what, act.read), { at: p.brings ? 800 + rows.filter((r) => r.p.brings).length * 260 : at, ink: true }).h;
    }
    row.bottom = y;
    rows.push(row);
    y += 13;
  });

  // the gifts: from each, along one line, to the one they are brought to
  const to = rows.find((r) => r.p === fox);
  const fy = to.base - 5.5;
  let k = 0;
  rows.forEach((r) => { if (r.p.brings) r.gift = d.path(`M${x0 - 5} ${r.mid}H${xr}V${fy}`, { stroke: INK, width: 1.2, at: 800 + (k++) * 260 }); });
  to.dot = d.dot(xr, fy, 2.6, { fill: INK, at: 1400 });
  const last = rows.filter((r) => r.gift).pop();

  // the court: one line, and a mark on it for each sentence
  const judged = people.filter((p) => p.sentence);
  if (judged.length) {
    y += 3;
    d.rule(0, y + 0.5, W, y + 0.5);
    y += 12;
    d.text(x0, y + 9, L.court, { cls: 'dg-lab' });
    const top = y + 15;
    y += 19;
    let foot = top;
    judged.forEach((p, n) => {
      const at = 1650 + n * 100;
      const base = y + 15;
      const name = d.text(x0, base, p.who, { cls: 'dg-name', at });
      const mark = d.dot(xr, base - 5.5, 3, { fill: RED, at });
      foot = base - 5.5;
      y += 21;
      y += words(d, x0, y, W - x0, cited(p.sentence.what, p.sentence.read), { at, ink: true }).h + 13;
      const row = rows.find((r) => r.p === p);
      if (row) { row.mark = mark; row.again = name; }
    });
    d.rule(xr, top, xr, foot, { stroke: RED, width: 1.2, at: 1500 });
  }
  return { rows, end: y - 13, to, label, noteW: W, rail: [0, fy, x0 - 7, (last ? last.mid : fy) - fy], hit: (r) => [x0 - 4, r.top - 2, W - x0 + 4, r.h.h + 4] };
}

// The facts in full, folded away under the drawing as one table: the
// dictionary's words and what the play calls each; what each does and is
// given, as the drawing has them; the other persons;
// then the facts that stand alone, each under the name its key gives it
// (theHope: "the hope"). Whatever has a place in the book opens it. On a
// narrow sheet a third column would run off the paper: what it holds stands
// under the second, and a fact that stands alone stands under its name.
function folded(f, m, narrow, set) {
  const t = el('table', { class: 'facts' });
  if (narrow) t.style.width = '100%';
  const whole = (text) => { const s = el('span', { text }); s.style.whiteSpace = 'nowrap'; return s; };
  const join = (list) => list.filter(Boolean).flatMap((v, i) => (i ? ['; '] : []).concat(v));
  const spaced = (key) => String(key).replace(/([a-z])([A-Z])/g, (x, a, z) => `${a} ${z.toLowerCase()}`);
  const some = (v) => (Array.isArray(v) ? v.length > 0 : v !== '' && v != null);
  const under = (v, i) => { const b = el('div', {}, [].concat(v)); if (i) b.style.marginTop = '3px'; return b; };
  const cells = (list) => (narrow ? [list[0], list.slice(1).filter(some).map(under)] : list);
  // a name, and under it how the list of persons has him
  const role = (p) => { const r = whole(p.listed); r.style.fontStyle = 'italic'; return [whole(p.who), el('br'), r]; };
  let n = 0;
  const part = (heads, rows) => {
    if (!rows.length) return;
    const ths = cells(heads.map((h) => (h ? whole(h) : ''))).map((kids) => el('th', {}, [].concat(kids)));
    if (n++) ths.forEach((th) => { th.style.paddingTop = '20px'; });
    t.append(el('tr', {}, ths));
    rows.forEach((r) => t.append(el('tr', {}, cells(r).map((kids) => el('td', {}, [].concat(kids))))));
  };
  part(['', 'the name means', 'called, in the play'], m.people.map((p) => [p.listed ? role(p) : whole(p.who), set(p.full), p.called ? set(linked(p.called.as, p.called.read)) : '']));
  // what the drawing shows, as a table has it: a gift is told as the others are, with the word that makes it one
  const does = (p) => (p.brings ? set(`brings ${linked(p.brings.what, p.brings.read)}`) : p.part ? set(linked(p.part.what, p.part.read)) : '');
  part(['', 'what each does', 'the court gives'], m.people.filter((p) => p.brings || p.part || p.sentence).map((p) => [whole(p.who), does(p), p.sentence ? set(linked(p.sentence.what, p.sentence.read)) : '']));
  const others = (Array.isArray(f.others) ? f.others : []).filter((x) => x && x.who);
  part(['the others', 'listed as', ''], others.map((x) => [whole(x.who), set(x.listed || ''), join([
    x.nameMeans ? set(`the name means ${x.nameMeans}`) : null,
    x.called && x.called.as ? set(`called ${linked(x.called.as, x.called.read)}`) : null,
    x.brings && x.brings.what ? set(`brings ${linked(x.brings.what, x.brings.read)}`) : null,
    x.part && x.part.what ? set(linked(x.part.what, x.part.read)) : null,
  ])]));
  // a fact that stands alone, or a list of them: a row to each, the key's words at the head of the first
  let first = true;
  Object.keys(f).forEach((key) => {
    const list = [].concat(f[key]).filter((x) => x && typeof x === 'object' && typeof x.what === 'string' && !x.who);
    if (!list.length || key === 'bestiary' || key === 'dictionary') return;
    const lead = first && n > 0;
    first = false;
    const named = el('th', { scope: 'row' }, [whole(spaced(key))]);
    named.style.cssText = `vertical-align:top;padding:${lead ? 27 : 7}px 18px ${narrow ? 0 : 5}px 0;border-top:${lead ? 0 : '1px solid var(--hair)'}`;
    if (narrow) { named.setAttribute('colspan', 2); t.append(el('tr', {}, [named])); }
    list.forEach((x, i) => {
      const td = el('td', { colspan: 2 }, set(linked(x.what, x.read)));
      td.style.borderTop = !narrow && !i && !lead ? '1px solid var(--hair)' : '0';
      if (!narrow && !i && lead) td.style.paddingTop = '25px';
      if (narrow) t.append(el('tr', {}, [td]));
      else t.append(el('tr', {}, [i ? el('th', { scope: 'row' }) : named, td]));
    });
  });
  return el('details', { class: 'dg-facts' }, [el('summary', { text: 'The facts in full' }), el('div', { class: 'facts-wrap' }, [t])]);
}

const names = {
  name: 'Names',
  stage: 'own',
  draw(ctx, lens, run) {
    const f = lens.facts || {};
    const m = model(f);
    const d = sheet(ctx, lens, run, 200);
    // while the words are set out and measured, nothing moves
    d.wrap.classList.add('setup');
    // what the play calls the one the gifts go to, as far as the first comma
    const fox = m.fox.called ? String(m.fox.called.as).split(',')[0] : m.fox.who;
    const L = { name: 'the name means', does: 'what he does', brings: `brings ${fox}`, court: 'the court gives' };
    const out = (d.w >= 540 ? matrix : stacked)(d, m, L, { foot: footOf(d) });
    let y = out.end;

    // under the rows: whose dictionary the meanings are from, where the facts say (`dictionary`,
    // a key proposed and not yet in the reading), and the book of beasts; each with its book
    // inside the sentence's stop, as a citation stands
    const foot = [f.dictionary, f.bestiary].filter((x) => x && x.what);
    if (foot.length) {
      y += 14;
      d.rule(0, y + 0.5, out.noteW, y + 0.5);
      y += 9;
      foot.forEach((x, n) => {
        const told = String(x.what).replace(/[.]$/, '');
        y += (n ? 5 : 0) + words(d, 0, y + (n ? 5 : 0), out.noteW, x.book ? `${told} (${x.book}).` : stop(told), { at: 2200 }).h;
      });
    }

    // what the pointer adds: on a name, the dictionary's words and what the play calls him;
    // on the line of the gifts, the hope they are brought in; at its end, the gifts counted
    const over = (box, pad = 3) => d.bar(box.x - pad, box.y - pad, box.width + 2 * pad, box.height + 2 * pad, { fill: 'transparent' });
    out.rows.forEach((r) => {
      const [x, top, w, h] = out.hit(r);
      const marks = r.h.nodes.concat([r.gift, r.mark, r.again, r.p === m.fox ? out.to.dot : null].filter(Boolean));
      d.hot(d.bar(x, top, w, h, { fill: 'transparent' }), sayOf(r.p), marks);
      // where the name stands a second time it answers there too, and so does the mark of his sentence
      if (r.again) d.hot(over(r.again.getBBox()), sayOf(r.p), marks);
      if (r.mark) d.hot(d.bar(+r.mark.getAttribute('cx') - 7, +r.mark.getAttribute('cy') - 7, 14, 14, { fill: 'transparent' }), sayOf(r.p), marks);
    });
    // with the line of the gifts stay dark those who bring them and the one they are brought to
    const lines = out.rows.filter((r) => r.gift).map((r) => r.gift).concat(out.to.dot);
    const gifts = lines.concat(out.label || [], out.rows.filter((r) => r.gift || r.p === m.fox).flatMap((r) => r.h.nodes));
    if (f.theHope && f.theHope.what) {
      const hope = upper(stop(f.theHope.what));
      const [x, top, w, h] = out.rail;
      d.hot(d.bar(x, top + 8, w, Math.max(0, h - 8), { fill: 'transparent' }), hope, gifts);
      // the label over the gifts says the same: a finger finds it sooner than the line
      if (out.label) d.hot(over(out.label.getBBox(), 4), hope, gifts);
    }
    if (f.theGiftsCounted && f.theGiftsCounted.what) d.hot(d.bar(+out.to.dot.getAttribute('cx') - 8, +out.to.dot.getAttribute('cy') - 8, 16, 16, { fill: 'transparent' }), upper(stop(f.theGiftsCounted.what)), lines.concat(out.to.h.nodes));

    // the drawing is as tall as what was set in it
    d.svg.setAttribute('height', Math.ceil(y + 2));
    d.svg.setAttribute('viewBox', `0 0 ${d.w} ${Math.ceil(y + 2)}`);
    d.wrap.getBoundingClientRect();
    d.wrap.classList.remove('setup');

    const judged = m.sentenced.length;
    d.keys([
      { mark: 'line', color: INK, text: `a gift, brought to ${fox}` },
      judged ? { mark: 'dot', color: RED, text: `a sentence of the court: ${spell(judged)} in all` } : null,
    ].filter(Boolean));
    // the table's words are set as the drawing's are: the kit sets them, and they are moved to their cells
    const set = (text) => { const p = d.note(0, 0, 10, text); const kids = [...p.childNodes]; p.remove(); return kids; };
    ctx.own.append(folded(f, m, d.w < 540, set));
  },
};

export default { lenses: { 'close:shape': names } };
