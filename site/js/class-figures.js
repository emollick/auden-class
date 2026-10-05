// The figures of the class page: what Auden wrote on the blackboard, redrawn
// in the site's own hand, and two things set to scale (the reading list, the
// cantos to be written out). Each takes the part of data/class.json that it
// draws and returns a node. Nothing here is a game: a figure shows what is on
// record, and where it can be pressed, pressing shows more of the record.

import { el, still } from './kit/draw.js';
import { rich, para } from './rich.js';

const num = (n) => Number(n).toLocaleString('en-US');

// What a blackboard held is written on once, as the page comes to it, a line
// at a time. Where motion is not wanted, or cannot be watched for, it is there
// from the start.
function writeOn(root, lines) {
  if (still() || typeof IntersectionObserver !== 'function' || !lines.length) return;
  root.classList.add('to-write');
  lines.forEach((n, i) => { n.classList.add('wr'); n.style.setProperty('--i', String(i)); });
  const io = new IntersectionObserver((seen) => {
    if (!seen.some((s) => s.isIntersecting)) return;
    io.disconnect();
    root.classList.add('written');
  }, { rootMargin: '0px 0px -18% 0px' });
  io.observe(root);
  // (a page that is printed, or a frame that never reports what is in sight, still shows the board)
  setTimeout(() => root.classList.add('written'), 6000);
}

// ---- three lines on the board, and the cases he tried them on
function table(p) {
  const rows = p.rows.map((r) => el('tr', {}, [
    el('th', { scope: 'row', class: 'k3-head', text: r.head }),
    el('td', { class: 'k3-board', 'data-l': p.cols[0], text: r.board }),
    ...r.cells.map((c, i) => el('td', { class: `k3-case${c ? '' : ' is-none'}`, 'data-l': p.cols[i + 1] }, rich(c || p.empty || ''))),
  ]));
  const t = el('table', { class: 'k3' }, [
    el('thead', {}, [el('tr', {}, [el('td', {}), ...p.cols.map((c) => (c ? el('th', { scope: 'col', text: c }) : el('td', {})))])]),
    el('tbody', {}, rows),
  ]);
  writeOn(t, rows.map((r) => r.querySelector('.k3-board')));
  // On a narrow page a table would have to be stacked into a form. There the three lines stand first,
  // together, as they stood on the board, and each case follows once with its three answers.
  const board = el('ol', { class: 'k3n-board' }, p.rows.map((r) => el('li', {}, [el('i', { class: 'k3-head', text: r.head }), el('span', { class: 'k3-board', text: r.board })])));
  const cases = p.cols.slice(1).map((c, i) => el('section', { class: 'k3n-case' }, [
    el('p', { class: 'lab', text: c }),
    el('dl', {}, p.rows.map((r) => el('div', {}, [el('dt', { text: r.head }), el('dd', { class: r.cells[i] ? null : 'is-none' }, rich(r.cells[i] || p.empty || ''))]))),
  ]));
  writeOn(board, [...board.children]);
  return el('div', { class: 'k3-wrap' }, [t, el('div', { class: 'k3n' }, [board, ...cases])]);
}

// ---- six schemes for one play: each sorts the same people another way.
// The labels are the short forms that stood on the board; `full` spells one
// out where the reader is told in a sentence where a name stands.
const nameOf = (n) => (typeof n === 'string' ? n : n.name);
const namesOf = (g) => (g.lines ? g.lines.flat(2) : g.names || []);
function schemes(p) {
  const root = el('div', { class: 'sch' });
  const nm = (n) => {
    const name = nameOf(n);
    return el('span', { class: 'nm', 'data-n': name }, [name, n.note ? el('i', { class: 'nm-note', text: ` ${n.note}` }) : null]);
  };
  // a line of a group is names with commas between them; where the print leaves
  // a gap and no comma, the line is given as runs and each run stands apart
  const run = (names) => names.flatMap((n, i) => (i ? [', ', nm(n)] : [nm(n)]));
  const row = (line) => el('span', { class: 'sch-line' }, (line.some(Array.isArray) ? line : [line]).map((r) => el('span', { class: 'sch-run' }, run([].concat(r)))));
  const group = (g, cls = '') => el('div', { class: `sch-g ${cls}${g.lines ? ' has-lines' : ''}`.trim() }, [
    g.label ? el('p', { class: 'sch-l', text: g.label }) : null,
    el('p', { class: 'sch-names' }, g.rest ? [el('span', { class: 'nm nm-rest', 'data-rest': '1', text: g.rest })] : g.lines ? g.lines.map(row) : g.names.map(nm)),
  ]);
  const apart = (names) => el('div', { class: 'sch-g sch-apart' }, [el('p', { class: 'sch-names' }, names.map(nm))]);
  const one = (sc) => {
    let body;
    if (sc.tiers) body = el('div', { class: 'sch-tiers' }, sc.tiers.map((t) => (t.apart ? apart(t.names) : group(t))));
    else body = el('div', { class: `sch-sides${sc.apart ? ' has-apart' : ''}` }, [group(sc.sides[0]), sc.apart ? apart(sc.apart) : null, group(sc.sides[1])]);
    return el('section', { class: 'sch-one' }, [el('h4', {}, [el('span', { class: 'sch-n', text: sc.n }), el('span', { text: sc.title })]), body, sc.under ? el('p', { class: 'sch-under', text: sc.under }) : null]);
  };
  const grid = el('div', { class: 'sch-grid' }, p.schemes.map(one));

  // where a name stands in each of the six, read off the board
  const plain = (g) => g.full || String(g.label || '').replace(/:$/, '');
  const placeIn = (sc, name) => {
    if ((sc.apart || []).includes(name)) return 'Set apart';
    for (const g of sc.tiers || []) {
      if (!namesOf(g).map(nameOf).includes(name)) continue;
      return g.apart ? 'Set apart' : plain(g);
    }
    for (const g of sc.sides || []) {
      if (g.rest) continue;
      const hit = g.names.find((n) => nameOf(n) === name);
      if (hit) return hit.note ? `${plain(g)}, ${hit.full || hit.note}` : plain(g);
    }
    const rest = (sc.sides || []).find((g) => g.rest);
    return rest ? plain(rest) : null;
  };

  // What Auden said of some of the people as he wrote stands under the board, all of it, with nothing to press:
  // a name, where it stands in each scheme, and the remark. Following a name lights its places on the board
  // and marks what was said of it.
  const follow = p.follow || [];
  const where = (name) => p.schemes.map((sc) => [sc.n, placeIn(sc, name)]).filter(([, w]) => w);
  const buttons = follow.map((f) => el('button', { type: 'button', 'aria-pressed': 'false', text: f.name }));
  const rems = follow.map((f, i) => {
    if (!f.says) return null;
    const head = el('button', { type: 'button', class: 'sch-who', 'aria-pressed': 'false', text: f.name });
    head.addEventListener('click', () => pick(f, buttons[i]));
    return el('section', { class: 'sch-rem' }, [
      el('h4', {}, [head]),
      el('ol', { class: 'sch-where' }, where(f.name).map(([n, w]) => el('li', {}, [el('span', { class: 'sch-n', text: n }), el('span', { text: w })]))),
      para(f.says, { class: 'sch-says' }),
    ]);
  });
  const silent = p.silent && follow.some((f) => !f.says) ? para(p.silent, { class: 'sch-silent' }) : null;
  // (said to a reader who cannot see the board light: the name, where it stands, and whether anything is recorded of it)
  const say = el('p', { class: 'sch-say', 'aria-live': 'polite' });
  const pick = (f, btn) => {
    const on = btn.getAttribute('aria-pressed') === 'true';
    buttons.forEach((b) => b.setAttribute('aria-pressed', 'false'));
    root.querySelectorAll('.nm').forEach((n) => n.classList.remove('is-on'));
    rems.forEach((r) => { if (r) { r.classList.remove('is-on'); r.querySelector('.sch-who').setAttribute('aria-pressed', 'false'); } });
    if (silent) silent.classList.remove('is-on');
    if (on) { root.classList.remove('has-pick'); say.replaceChildren(); return; }
    btn.setAttribute('aria-pressed', 'true');
    root.classList.add('has-pick');
    root.querySelectorAll('.sch-one').forEach((sec, i) => {
      const own = [...sec.querySelectorAll('.nm')].filter((n) => n.dataset.n === f.name);
      if (own.length) own.forEach((n) => n.classList.add('is-on'));
      else if (placeIn(p.schemes[i], f.name)) sec.querySelectorAll('.nm-rest').forEach((n) => n.classList.add('is-on'));
    });
    const rem = rems[follow.indexOf(f)];
    if (rem) { rem.classList.add('is-on'); rem.querySelector('.sch-who').setAttribute('aria-pressed', 'true'); }
    else if (silent) silent.classList.add('is-on');
    say.replaceChildren(
      el('span', { text: `${f.name}. ${where(f.name).map(([n, w]) => `${n}: ${w}`).join('. ')}. ` }),
      ...(f.says ? [] : [el('span', { class: 'is-none', text: p.silent || '' })]),
    );
  };
  follow.forEach((f, i) => buttons[i].addEventListener('click', () => pick(f, buttons[i])));
  if (buttons.length) root.append(el('div', { class: 'sch-pick', role: 'group', 'aria-label': 'Follow one name across the six schemes' }, [el('span', { class: 'sch-lead', text: p.lead || 'Follow' }), ...buttons]));
  root.append(grid);
  if (rems.some(Boolean)) root.append(el('div', { class: 'sch-said' }, [
    // whose words these are is said over them, so that they are not read as this site's own judgment
    el('p', { class: 'part-hd' }, [el('span', { class: 'lab', text: p.saidLabel || 'What he said' }), p.followSrc ? el('span', { class: 'part-src' }, rich(p.followSrc)) : null]),
    el('div', { class: 'sch-rems' }, rems.filter(Boolean)),
    silent,
  ]));
  if (buttons.length) root.append(say);
  // a name on the board chooses itself too, where something is to be said of it
  const followed = (name) => (p.follow || []).findIndex((f) => f.name === name);
  grid.querySelectorAll('.nm[data-n]').forEach((n) => { if (followed(n.dataset.n) >= 0) n.classList.add('can'); });
  grid.addEventListener('click', (e) => {
    const n = e.target && e.target.closest ? e.target.closest('.nm.can') : null;
    const i = n ? followed(n.dataset.n) : -1;
    if (i >= 0) pick(p.follow[i], buttons[i]);
  });
  writeOn(root, [...grid.children]);
  return root;
}

// ---- a few lines as they stood on the board: a number, a head, and what he wrote after the colon
function lines(p) {
  const rows = p.lines.map((l) => el('li', {}, [
    l.n ? el('span', { class: 'bl-n', text: l.n }) : null,
    el('span', { class: 'bl-t' }, [el('span', { class: 'bl-head', text: l.head }), l.note ? el('span', { class: 'bl-note', text: `: ${l.note}` }) : null]),
  ]));
  const root = el('ol', { class: 'bl-list' }, rows);
  writeOn(root, rows);
  return root;
}

// ---- a chart in two rows, the width of the board
function tiers(p) {
  const cols = (p.pairs || []).map(([up, low]) => el('div', { class: 'tier-col' }, [el('span', { class: 'tier-up', text: up }), el('span', { class: 'tier-low', text: low })]));
  const chart = el('div', { class: 'tiers', style: `--n:${cols.length}` }, cols);
  const scroll = el('div', { class: 'tiers-scroll', tabindex: '0', role: 'group', 'aria-label': `The chart, in two rows of ${cols.length}. On a narrow screen it scrolls sideways.` }, [chart]);
  const more = p.more ? el('p', { class: 'tiers-more', hidden: '', text: p.more }) : null;
  // Where a little narrowing lets the whole chart in, it is all let in. Where it cannot be, the last column
  // in sight is cut through its words, so that the chart is seen to run on, and a line over it says so.
  const fit = () => {
    const cs = getComputedStyle(scroll);
    const w = scroll.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    if (!(w > 0)) return;
    const whole = w / cols.length >= 100;
    const col = whole ? w / cols.length : w / (Math.max(2, Math.floor(w / 112)) + 0.5);
    chart.style.setProperty('--col', `${col.toFixed(2)}px`);
    if (more) more.hidden = whole;
  };
  if (typeof ResizeObserver === 'function') new ResizeObserver(fit).observe(scroll);
  writeOn(chart, cols);
  return el('div', { class: 'tiers-wrap' }, [more, scroll]);
}

// ---- the reading list to scale: one bar to a work, as wide as the work is long.
// A bar names its work when the pointer or the keyboard is on it. Pressed, it
// keeps the name and gives the way to that work's page on this site. Many bars
// are too thin for a finger, so a finger may be slid along the strip, and two
// arrows beside the name step from one work to the next.
function load(p) {
  const says = el('span', { class: 'load-says', 'aria-live': 'polite' });
  const named = (w) => [el('b', { text: w.author ? `${w.author}, ` : '' }), el('i', { text: w.title }), w.pages ? `, ${num(w.pages)} pages` : '', w.omit ? ', marked “Omit”' : ''];
  const ways = (w) => ((w.pieces || []).length ? [el('span', { class: 'load-open' }, w.pieces.flatMap((pc, i) => [i ? '\u00a0· ' : '', el('a', { href: `#/${pc.id}` }, [pc.title, el('span', { 'aria-hidden': 'true', text: ' →' })])]))] : []);
  let held = -1;
  const show = (i) => {
    bars.forEach((x, j) => x.classList.toggle('is-at', j === i));
    if (i < 0) { says.textContent = p.rest || ''; return; }
    const w = p.works[i];
    says.replaceChildren(...named(w), ...(i === held ? ways(w) : []));
  };
  const hold = (i) => {
    held = i;
    bars.forEach((x, j) => x.setAttribute('aria-pressed', j === held ? 'true' : 'false'));
    show(held);
  };
  const bars = p.works.map((w, i) => {
    const cls = ['load-w', w.taught ? 'is-taught' : '', w.omit ? 'is-omit' : '', w.pages ? '' : 'is-absent'].filter(Boolean).join(' ');
    const name = `${w.author ? `${w.author}, ` : ''}${w.title}${w.pages ? `, ${num(w.pages)} pages` : ''}`;
    const b = el('button', { type: 'button', class: cls, style: `--pages:${w.pages || 0}`, tabindex: i ? '-1' : '0', 'aria-pressed': 'false', 'aria-label': `${name}${w.taught ? `: ${p.key.taught}` : ''}${w.omit ? ' (marked Omit)' : ''}` });
    b.addEventListener('focus', () => show(i)); b.addEventListener('blur', () => show(held));
    // (a press of the keyboard, or of a script, comes as a click that no pointer made)
    b.addEventListener('click', (e) => { if (!e.detail) hold(held === i ? -1 : i); });
    return b;
  });
  // one stop for the Tab key; the arrow keys go from bar to bar
  const strip = el('div', { class: 'load-strip', role: 'toolbar', 'aria-label': 'The works on the list, each bar as wide as the work is long' }, bars);
  strip.addEventListener('keydown', (e) => {
    const at = bars.indexOf(document.activeElement);
    const to = { ArrowRight: at + 1, ArrowLeft: at - 1, Home: 0, End: bars.length - 1 }[e.key];
    if (at < 0 || to === undefined || to < 0 || to >= bars.length) return;
    e.preventDefault();
    bars.forEach((x, j) => x.setAttribute('tabindex', j === to ? '0' : '-1'));
    bars[to].focus();
  });
  // the bar under a pointer: the one it is on, or the nearest to it
  const barAt = (x) => {
    let best = 0; let gap = Infinity;
    bars.forEach((b, i) => {
      const r = b.getBoundingClientRect();
      const d = x < r.left ? r.left - x : x > r.right ? x - r.right : 0;
      if (d < gap) { gap = d; best = i; }
    });
    return best;
  };
  let down = -1;
  strip.addEventListener('pointerdown', (e) => { if (e.button) return; down = barAt(e.clientX); show(down); });
  strip.addEventListener('pointermove', (e) => { if (down >= 0 || e.pointerType === 'mouse') show(barAt(e.clientX)); });
  strip.addEventListener('pointerup', (e) => {
    if (down < 0) return;
    const i = barAt(e.clientX);
    hold(i === held && i === down ? -1 : i);
    if (held < 0) show(i);
    down = -1;
  });
  strip.addEventListener('pointercancel', () => { down = -1; show(held); });
  strip.addEventListener('pointerleave', () => { if (down < 0) show(held); });
  const step = (d) => hold(held < 0 ? (d > 0 ? 0 : bars.length - 1) : (held + d + bars.length) % bars.length);
  const arrow = (d) => {
    const b = el('button', { type: 'button', class: 'load-step', 'aria-label': d > 0 ? 'The next work on the list' : 'The work before it on the list', text: d > 0 ? '→' : '←' });
    b.addEventListener('click', () => step(d));
    return b;
  };
  const now = el('p', { class: 'load-now' }, [says, el('span', { class: 'load-steps' }, [arrow(-1), arrow(1)])]);
  // The longest works are named over their own bars, as a map names its largest towns, so that the strip
  // can be read before it is touched: the title where the bar has room for it, or else the author.
  const tags = bars.map((b) => { const t = el('span', { class: 'load-tag', 'aria-hidden': 'true' }); b.append(t); return t; });
  const longest = p.works.map((w, i) => i).sort((a, b) => (p.works[b].pages || 0) - (p.works[a].pages || 0)).slice(0, 7);
  const tag = () => {
    for (const i of longest) {
      const w = p.works[i]; const room = bars[i].getBoundingClientRect().width - 2; const t = tags[i];
      t.textContent = '';
      for (const [name, cls] of [[w.title, 'load-tag'], [w.author, 'load-tag is-au']]) {
        if (!name) continue;
        t.className = cls; t.textContent = name;
        if (t.offsetWidth <= room) break;
        t.textContent = '';
      }
    }
  };
  if (typeof ResizeObserver === 'function') new ResizeObserver(tag).observe(strip);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(tag);
  show(-1);
  const key = el('p', { class: 'load-keys' }, [
    el('span', { class: 'load-k' }, [el('i', { class: 'load-w is-taught' }), el('span', { text: p.key.taught })]),
    el('span', { class: 'load-k' }, [el('i', { class: 'load-w' }), el('span', { text: p.key.rest })]),
    p.works.some((w) => w.omit) ? el('span', { class: 'load-k' }, [el('i', { class: 'load-w is-omit' }), el('span', { text: 'marked “Omit” on the list' })]) : null,
  ]);
  return el('div', { class: 'load' }, [strip, now, key]);
}

// ---- the cantos to scale: a stroke to a paragraph of the prose
function cantos(p) {
  const longest = Math.max(1, ...p.cantos.flatMap((c) => c.paras));
  const one = (c) => {
    const shown = new Set(c.shown.flatMap((s) => s.blocks));
    const strokes = el('a', { class: 'canto-strokes', href: c.read, 'aria-label': `Read ${c.name.replace(/\*/g, '')} in the prose the class used` }, c.paras.map((n, i) => el('i', { class: shown.has(i) ? 'is-shown' : '', style: `--w:${(n / longest).toFixed(3)}` })));
    return el('div', { class: 'canto' }, [
      el('p', { class: 'canto-name' }, [el('span', {}, rich(c.name))]),
      strokes,
      el('p', { class: 'canto-n' }, [`${num(c.words)} words. `, el('a', { href: c.read, text: 'Read it here' }), '.']),
      el('div', { class: 'canto-ons' }, c.shown.map((s) => el('p', { class: 'canto-on' }, [el('a', { href: s.href, text: s.heading.replace(/: lines? .*$/, '') })]))),
    ]);
  };
  const root = el('div', { class: 'cantos' }, p.cantos.map(one));
  // what the four come to, and what five of them asked of a hand in three hours, in the figure's own type
  return p.sum ? el('div', { class: 'cantos-wrap' }, [root, para(p.sum, { class: 'cantos-sum' })]) : root;
}

export const figures = { table, schemes, lines, tiers, load, cantos };
