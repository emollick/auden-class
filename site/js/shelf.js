// The shelf: Auden's reading list of 1941 and the books printed here; the
// contents of a book; and a part of a book to read. The list and what is
// printed come from data/shelf.json, which build/shelf.mjs writes.

import { el } from './kit/draw.js';
import { getJSON } from './piece.js';
import { player } from './kit/player.js';
import { rich, para } from './rich.js';

const num = (n) => Math.round(n).toLocaleString('en-US');
const fill = (s, map) => String(s).replace(/\{(\w+)\}/g, (m, k) => (map[k] !== undefined ? map[k] : m));
const titled = (site, ...parts) => [...parts, site.name].filter(Boolean).join(' · ');

function head(kicker, title, where, cls = '') {
  return el('header', { class: `piece-hd ${cls}`.trim() }, [
    kicker ? el('p', { class: 'kicker' }, [].concat(kicker)) : null,
    el('h1', { text: title }),
    ...[].concat(where || []).map((w) => (w ? el('p', { class: 'where' }, [].concat(w)) : null)),
  ]);
}

// ---------- the bookcase ----------
// Every required book and libretto as a spine, as thick as the copy printed
// here is long. A spine opens its book.

function bookcase(shelf) {
  const now = el('p', { class: 'case-now', 'aria-hidden': 'true' });
  const row = el('div', { class: 'case-row' });
  for (const w of shelf.works) {
    if (w.kind === 'critical') continue;
    const text = w.texts[0];
    const say = [w.author, w.title, w.pages ? fill(shelf.labels.pages, { n: num(w.pages) }) : shelf.case.absent].join(', ');
    const attrs = { class: `spine spine-${w.kind}${w.omit ? ' is-omit' : ''}${text ? '' : ' is-absent'}`, style: `--pages:${w.pages || 0}`, 'aria-label': say };
    const face = el('span', { class: 'spine-in', 'aria-hidden': 'true' }, [
      el('span', { class: 'spine-au', text: w.author }),
      el('span', { class: 'spine-t', text: w.title }),
      w.pages ? el('span', { class: 'spine-pp', text: num(w.pages) }) : null,
    ]);
    const node = text ? el('a', { ...attrs, href: `#/read/${text.id}` }, [face]) : el('span', { ...attrs, role: 'img' }, [face]);
    const show = () => { now.textContent = say; };
    node.addEventListener('pointerenter', show);
    node.addEventListener('focus', show);
    row.append(node);
  }
  const clear = () => { now.textContent = ''; };
  row.addEventListener('pointerleave', clear);
  row.addEventListener('focusout', clear);
  return el('section', { class: 'case', 'aria-label': shelf.case.label }, [
    el('div', { class: 'case-in' }, [
      row,
      now,
      el('div', { class: 'case-ft' }, [
        para(shelf.case.note, { class: 'case-note' }),
        el('p', { class: 'case-keys' }, [
          el('span', { class: 'case-k' }, [el('i', { class: 'is-omit' }), shelf.case.keys.omit]),
          el('span', { class: 'case-k' }, [el('i', { class: 'is-absent' }), shelf.case.keys.absent]),
        ]),
      ]),
    ]),
  ]);
}

// ---------- the list ----------

const fact = (label, kids, cls = '') => el('div', { class: `fact ${cls}`.trim() }, [el('p', { class: 'lab', text: label }), el('div', { class: 'fact-v' }, kids)]);

function book(w, shelf) {
  const L = shelf.labels;
  const first = w.texts[0];
  const flags = [w.omit ? L.omit : null].filter(Boolean);
  const name = el('div', { class: 'book-name' }, [
    el('p', { class: 'book-au', text: w.author }),
    el('h3', { class: 'book-t' }, [first ? el('a', { href: `#/read/${first.id}`, text: w.title }) : w.title]),
    ...flags.map((f) => el('p', { class: 'book-flag', text: f })),
  ]);
  const facts = [];
  if (w.set) facts.push(fact(L.set, [el('p', { text: w.set })]));
  const here = [];
  if (w.texts.length) {
    const links = [];
    w.texts.forEach((t, i) => { if (i) links.push('\u00a0· '); links.push(el('a', { href: `#/read/${t.id}`, text: t.label || L.text })); });
    if (w.pages) links.push(el('span', { class: 'fact-pp', text: fill(L.pages, { n: num(w.pages) }) }));
    here.push(el('p', { class: 'fact-links' }, links));
  }
  if (w.copy) here.push(para(w.copy, { class: 'fact-note' }));
  if (w.borrow) here.push(para(w.borrow, { class: 'fact-note' }));
  if (here.length) facts.push(fact(w.texts.length ? L.here : L.absent, here));
  if (w.pieces && w.pieces.length) facts.push(fact(w.pieces.length > 1 ? L.pieces : L.piece, [el('p', { class: 'fact-pieces' }, w.pieces.map((p) => el('a', { href: `#/${p.id}`, text: p.title })))]));
  if (w.record) {
    facts.push(fact(L.record, [
      para(w.record.title, { class: 'rec-title' }),
      player(w.record.file, 'the record'),
      para([w.record.performers, w.record.credit].filter(Boolean).join(' '), { class: 'fact-note' }),
    ], 'record'));
  }
  return el('li', { class: `book${w.or ? ' is-or' : ''}`, 'data-or': w.or ? L.or : null }, [name, el('div', { class: 'book-facts' }, facts)]);
}

function list(shelf, kind) {
  const k = shelf.kinds[kind];
  const works = shelf.works.filter((w) => w.kind === kind);
  const items = kind === 'critical'
    ? el('ol', { class: 'crit' }, works.map((w) => el('li', {}, [el('p', { class: 'book-au', text: w.author }), el('p', { class: 'crit-t', text: w.title }), w.copy ? para(w.copy, { class: 'fact-note' }) : null])))
    : el('ol', { class: 'books' }, works.map((w) => book(w, shelf)));
  return el('section', { class: 'shelf-sec', id: kind }, [
    el('header', { class: 'shelf-hd' }, [el('h2', { text: k.title }), el('div', { class: 'shelf-intro' }, k.intro.map((t) => para(t)))]),
    items,
  ]);
}

export async function renderShelf(main, site = {}) {
  const shelf = await getJSON('data/shelf.json');
  document.title = titled(site, shelf.title);
  const page = el('article', { class: 'shelf' }, [
    head(shelf.kicker, shelf.title, shelf.where),
    bookcase(shelf),
    el('section', { class: 'home-intro' }, shelf.intro.map((t) => para(t))),
    ...['required', 'opera', 'critical'].map((kind) => list(shelf, kind)),
  ]);
  main.replaceChildren(page);
}

// ---------- a book ----------

const indexOf = (text) => getJSON(`data/texts/${text}/index.json`);

function missing(main, shelf, site, why) {
  // a book that is on the shelf and did not arrive is another matter from a book that is not there
  if (why && !/: 404$|not in the book/.test(String(why.message || why))) {
    main.replaceChildren(el('div', { class: 'sec' }, [el('h2', { text: shelf.title }), el('p', {}, [`${shelf.read.failed || 'The book could not be loaded.'} `, el('a', { href: '#/shelf', text: shelf.read.back }), '.'])]));
    return undefined;
  }
  document.title = titled(site, shelf.title);
  main.replaceChildren(el('div', { class: 'sec' }, [el('h2', { text: shelf.title }), el('p', {}, [`${shelf.read.missing} `, el('a', { href: '#/shelf', text: shelf.read.back }), '.'])]));
}

// the other versions of a book printed here: Dante in three, Horace and Rimbaud each with the original
async function versions(shelf, text, partId) {
  const own = shelf.texts[text];
  const work = own && shelf.works.find((w) => w.id === own.work);
  if (!work || work.texts.length < 2) return null;
  const all = await Promise.all(work.texts.map(async (t) => ({ ...t, index: await indexOf(t.id).catch(() => null) })));
  const has = all.filter((v) => v.index && (!partId || v.index.parts.some((p) => p.id === partId)));
  if (has.length < 2) return null;
  const row = el('p', { class: 'versions' }, [el('span', { class: 'lab', text: shelf.read.versions })]);
  has.forEach((v) => row.append(v.id === text ? el('b', { text: v.label }) : el('a', { href: `#/read/${v.id}${partId ? `/${partId}` : ''}`, text: v.label })));
  return row;
}

const translated = (shelf, index) => (index.translator ? fill(index.year ? shelf.read.translated : shelf.read.translatedUndated, { who: index.translator, year: index.year }) : null);
const pagesOf = (p) => { const n = p.pages ? Math.max(1, Math.round(p.pages)) : 0; return n ? `${n} ${n === 1 ? 'p.' : 'pp.'}` : ''; };

export async function renderBook(main, site, text) {
  const shelf = await getJSON('data/shelf.json');
  let index;
  try { index = await indexOf(text); } catch (e) { return missing(main, shelf, site, e); }
  const title = index.title || shelf.read.contents;
  document.title = titled(site, title);
  const own = shelf.texts[text];
  const work = own && shelf.works.find((w) => w.id === own.work);

  const page = el('article', { class: 'book-page' });
  page.append(head(index.author || (work && work.author) || '', title, translated(shelf, index), 'read-hd'));

  const facts = el('div', { class: 'book-about' });
  const switcher = await versions(shelf, text, null);
  if (switcher) facts.append(switcher);
  if (index.note) facts.append(para(index.note));
  if (index.source && index.source.name) facts.append(el('p', {}, rich(fill(shelf.read.source, { name: index.source.url ? `[${index.source.name}](${index.source.url})` : index.source.name }))));
  if (work && work.pieces && work.pieces.length) facts.append(el('p', { class: 'book-pieces' }, [el('span', { class: 'lab', text: work.pieces.length > 1 ? shelf.labels.pieces : shelf.labels.piece }), ...work.pieces.map((p) => el('a', { href: `#/${p.id}`, text: p.title }))]));
  if (facts.childNodes.length) page.append(facts);

  // the parts, under the headings the book gives them
  const groups = [];
  for (const p of index.parts) { const last = groups[groups.length - 1]; if (last && last.group === (p.group || '')) last.parts.push(p); else groups.push({ group: p.group || '', parts: [p] }); }
  const toc = el('nav', { class: 'toc', 'aria-label': shelf.read.contents });
  for (const g of groups) {
    toc.append(el('section', { class: 'toc-g' }, [
      el('h2', { text: g.group || (groups.length > 1 ? '' : shelf.read.contents) }),
      el('ol', { class: g.parts.length > 8 ? 'toc-many' : '', lang: index.lang || null }, g.parts.map((p) => {
        const on = shelf.opened[`${text}/${p.id}`] || [];
        return el('li', { class: on.length ? 'is-on' : '' }, [
          el('a', { class: 'toc-p', href: `#/read/${text}/${p.id}${on.length ? `:${on[0].block}` : ''}` }, [el('span', { text: p.label }), el('span', { class: 'toc-pp', text: pagesOf(p) })]),
          ...[...new Map(on.map((o) => [o.piece, o])).values()].map((o) => el('a', { class: 'toc-on', href: `#/${o.piece}`, text: fill(shelf.read.piece, { piece: o.title }) })),
        ]);
      })),
    ]));
  }
  page.append(toc);
  page.append(el('p', { class: 'read-back' }, [el('a', { href: '#/shelf', text: shelf.read.back })]));
  main.replaceChildren(page);
}

// ---------- a part of a book ----------

function setBlocks(part, index) {
  const box = el('div', { class: `reading${index.tercets ? ' is-tercets' : ''}`, lang: part.lang || index.lang || null });
  const numbered = index.readAs === 'dante' && !index.tercets;
  let line = 0;
  part.blocks.forEach((b, i) => {
    let node = null;
    const rule = /^[*\s·.]+$/.test(b.text || '');
    if (b.k === 'p') node = rule ? el('p', { class: 'rd-break', text: '* * *' }) : el('p', { class: 'rd-p', 'data-n': index.tercets ? String(i * 3 + 1) : null, text: b.text });
    else if (b.k === 'h') node = rule ? el('p', { class: 'rd-break', text: '* * *' }) : el(b.level === 3 ? 'h3' : 'h2', { class: 'rd-h', text: b.text });
    else if (b.k === 's') node = el('p', { class: 'rd-s', text: b.text });
    else if (b.k === 'd') node = el('p', { class: 'rd-d', text: b.text });
    else if (b.k === 'q') node = el('blockquote', { class: 'rd-q', text: b.text });
    else if (b.k === 'v') node = el('div', { class: 'rd-v' }, b.lines.map((l) => { line += 1; return el('div', { class: 'vl', 'data-n': numbered && line % 3 === 1 ? String(line) : null, text: l }); }));
    if (!node) return;
    node.dataset.b = String(i);
    box.append(node);
  });
  return box;
}

export async function renderPart(main, site, text, partId, block) {
  const shelf = await getJSON('data/shelf.json');
  let index; let part;
  try { index = await indexOf(text); part = await getJSON(`data/texts/${text}/${partId}.json`); } catch (e) { return missing(main, shelf, site, e); }
  const at = index.parts.findIndex((p) => p.id === partId);
  const meta = index.parts[at] || {};
  const label = part.label || meta.label || '';
  document.title = titled(site, label, index.title);

  const page = el('article', { class: 'part-page' });
  const kicker = index.title ? [index.author ? `${index.author}\u00a0· ` : '', el('a', { href: `#/read/${text}`, text: index.title })] : null;
  page.append(head(kicker, label, translated(shelf, index), `read-hd${label.length > 44 ? ' is-long' : ''}`));
  const switcher = await versions(shelf, text, partId);
  const notes = el('div', { class: 'book-about' }, [switcher, meta.unverified ? el('p', { text: shelf.read.unverified }) : null]);
  if (notes.childNodes.length) page.append(notes);

  const body = setBlocks(part, index);
  // where a piece's passage begins
  for (const o of shelf.opened[`${text}/${partId}`] || []) {
    const node = body.querySelector(`[data-b="${o.block}"]`);
    if (!node || (node.previousElementSibling && node.previousElementSibling.classList.contains('rd-here'))) continue;
    const words = String(shelf.read.here).split('{piece}');
    node.before(el('p', { class: 'rd-here' }, [words[0], el('a', { href: `#/${o.piece}`, text: o.title }), words[1] || '']));
    node.classList.add('is-here');
  }
  page.append(body);

  const prev = index.parts[at - 1]; const next = index.parts[at + 1];
  const turn = (p, word, cls) => (p ? el('a', { class: cls, href: `#/read/${text}/${p.id}` }, [el('span', { class: 'lab', text: word }), el('b', { text: p.label })]) : el('span', { class: cls }));
  page.append(el('nav', { class: 'read-turn', 'aria-label': index.title || shelf.read.contents }, [turn(prev, shelf.read.prev, 'turn-prev'), turn(next, shelf.read.next, 'turn-next')]));
  page.append(el('p', { class: 'read-back' }, [el('a', { href: `#/read/${text}`, text: index.title ? `${shelf.read.contents}: ${index.title}` : shelf.read.contents }), el('a', { href: '#/shelf', text: shelf.read.back })]));
  main.replaceChildren(page);

  // open at the passage asked for: the router asks for this once the page stands at its top (and not when the
  // reader is coming back to a place they left)
  let timer = 0;
  const leave = () => clearTimeout(timer);
  if (block != null) {
    const node = body.querySelector(`[data-b="${block}"]`);
    const target = node && node.previousElementSibling && node.previousElementSibling.classList.contains('rd-here') ? node.previousElementSibling : node;
    if (target) leave.after = () => { timer = setTimeout(() => { const y = target.getBoundingClientRect().top + window.scrollY - Math.max(24, window.innerHeight * 0.18); window.scrollTo({ top: y, behavior: 'instant' }); }, 80); };
  }
  return leave;
}
