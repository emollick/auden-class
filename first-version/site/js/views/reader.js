// Reading a book in the course's own copy.

import { h, p, prose } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { today } from '../lib/dates.js';
import { loadIndex, loadPart, Missing } from '../lib/texts.js';
import { reading } from '../lib/render.js';
import { plateFigure } from '../lib/media.js';
import { cantoVersion, examCantos, examOver } from '../lib/course.js';

// Where in the term a reading key falls, and how many pages it is.
function place(course, key) {
  for (const u of course.units) {
    for (const r of u.reading) {
      for (const item of r.items) {
        if (item.key === key) return { unit: u, pages: item.pages };
        const part = item.parts && item.parts.find((x) => x[0] === key);
        if (part) return { unit: u, pages: part[1] };
      }
    }
  }
  return null;
}

// "dante" stands for the Comedy in whichever version the student reads:
// the one last opened by name, and until one has been, Longfellow's verse,
// which the meetings quote.
function resolve(textId) {
  if (textId !== 'dante') return textId;
  const s = store.get();
  return (s.readIn && s.readIn.dante) || 'dante-longfellow';
}

// A version opened by its own name is the one the reader goes on in.
function noteVersion(asked, index) {
  if (asked === 'dante' || index.readAs !== 'dante') return;
  const s = store.get();
  if (s.readIn && s.readIn.dante === index.id) return;
  store.update((st) => { st.readIn = st.readIn || {}; st.readIn.dante = index.id; }, { quiet: true });
}

// The question a part of a book is read with: the one set for that part of
// it, or for the book, or for the week.
function carried(unit, w, key) {
  if (!unit || !w || w.kind === 'opera') return null;
  const own = Object.keys(unit.carries || {}).filter((k) => k === w.id || key.startsWith(k)).sort((a, b) => b.length - a.length)[0];
  return own ? unit.carries[own] : unit.carry || null;
}

function missing(t, body) {
  return { node: h('div', { class: 'col' }, h('h1', { tabindex: '-1' }, t('notfound.title')), p(body || t('notfound.body'))), title: t('notfound.title') };
}

// The versions of a book that is printed here in more than one: Dante in
// three, Horace and Rimbaud each with the original. The contents of each
// are fetched, to see which parts it has.
function versions(course, textId) {
  const w = course.works.find((x) => x.texts && x.texts.includes(textId));
  if (!w || w.texts.length < 2) return Promise.resolve([]);
  return Promise.all(w.texts.map(async (id, i) => ({ id, label: w.textLabels?.[i] || id, index: await loadIndex(id).catch(() => null) })));
}

// A part is linked in every version that has it under the same id.
function versionSwitch(t, index, list, partId) {
  const has = list.filter((v) => v.index && (!partId || v.index.parts.some((x) => x.id === partId)));
  if (has.length < 2) return null;
  const row = h('p', { class: 'small muted' }, t('reader.versions'), ' ');
  has.forEach((v, i) => {
    if (i) row.appendChild(document.createTextNode(' · '));
    const label = index.readAs === 'dante' ? t(`cantos.version.${v.id.replace('dante-', '')}.short`) : v.label;
    row.appendChild(v.id === index.id ? h('strong', null, label) : h('a', { href: `#/read/${v.id}${partId ? `/${partId}` : ''}` }, label));
  });
  return row;
}

// ----- the same line in another version of Dante -----
// The three versions share their line numbers, so a change of version can
// open the other at the line the reader had reached. The links to the
// versions stand at the head of the page, and by the time the reader has
// scrolled up to them that line is no longer at the top of the window. So
// the line is noted while the canto is read, and the links are kept
// pointing at it.

const cantos = new WeakMap(); // the text of a canto -> { lines: [[element, line]], links: [[a, href]], y }
let rest = null;

function cantoShown() {
  const text = document.querySelector('#main .reading');
  return (text && cantos.get(text)) || null;
}

// The line at the top of the window, or null while the head of the page shows.
function lineAtTop(lines) {
  const top = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  if (lines[0][0].getBoundingClientRect().top >= top) return null;
  const hit = lines.find(([el]) => el.getBoundingClientRect().bottom > top + 1);
  return (hit || lines[lines.length - 1])[1];
}

function pointAt(c, line) {
  for (const [a, href] of c.links) a.href = `${href}${href.includes('?') ? '&' : '?'}l=${line}`;
}

function note() {
  const c = cantoShown();
  const line = c && lineAtTop(c.lines);
  if (line) pointAt(c, line);
}

// A line is noted while the page moves down, and wherever it comes to rest.
// The lines passed on the way back up to the links are not noted.
window.addEventListener('scroll', () => {
  clearTimeout(rest);
  const c = cantoShown();
  if (!c) return;
  const y = window.scrollY;
  if (y > c.y) note();
  else rest = setTimeout(note, 1500);
  c.y = y;
}, { passive: true });

// ----- keeping lines -----
// Lines selected in the text can be kept in the student's book. The bar
// that offers it belongs to the part being read.

const keeps = new WeakMap(); // the text of a part -> { bar, say, btn, from, route, t, picked }
let settle = null;

function selectionIn(text) {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || !sel.anchorNode || !sel.focusNode) return '';
  if (!text.contains(sel.anchorNode) || !text.contains(sel.focusNode)) return '';
  let s = sel.toString();
  // A picture's caption is no part of the book.
  for (const cap of text.querySelectorAll('figcaption')) s = s.replace(cap.textContent, '');
  // A selection that begins or ends inside a word is taken to mean the whole word.
  const r = sel.getRangeAt(0);
  const a = r.startContainer;
  const b = r.endContainer;
  if (a.nodeType === 3) { let i = r.startOffset; while (i > 0 && /\S/.test(a.data[i - 1])) i--; s = a.data.slice(i, r.startOffset) + s; }
  if (b.nodeType === 3) { let j = r.endOffset; while (j < b.data.length && /\S/.test(b.data[j])) j++; s += b.data.slice(r.endOffset, j); }
  return s.replace(/\r/g, '').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

// The lines of this part that are in the student's book are marked in its margin.
function markKept(text, route) {
  const lines = new Set();
  for (const k of store.get().kept || []) {
    if (k.route !== route) continue;
    for (const l of k.words.split('\n')) if (l.trim().length >= 6) lines.add(l.trim());
  }
  for (const el of text.querySelectorAll('.vl, p')) {
    if (el.closest('figure')) continue;
    const own = el.textContent.trim();
    let hit = lines.has(own);
    if (!hit && own.length >= 6) for (const l of lines) if (own.includes(l) || (l.length > own.length && l.includes(own))) { hit = true; break; }
    el.classList.toggle('kept-here', hit);
  }
}

document.addEventListener('selectionchange', () => {
  clearTimeout(settle);
  settle = setTimeout(() => {
    const text = document.querySelector('#main .reading');
    const k = text && keeps.get(text);
    if (!k) return;
    const s = selectionIn(text);
    if (s.length < 8) {
      if (!k.done) k.bar.hidden = true;
      return;
    }
    k.done = false;
    k.picked = s;
    const long = s.length > 1800;
    if (long) k.picked = '';
    k.say.textContent = long ? k.t('reader.keep.long') : k.t('reader.keep.ask');
    k.btn.hidden = long;
    k.link.hidden = true;
    k.bar.hidden = false;
  }, 250);
});

function keepBar(t, text, from, route) {
  const say = h('span');
  const link = h('a', { href: '#/book', hidden: true }, t('reader.kept.book'));
  const k = { say, link, from, route, t, picked: '', done: false };
  k.btn = h('button', { type: 'button', onClick: () => {
    if (!k.picked) return;
    store.update((st) => {
      st.kept = st.kept || [];
      st.kept.push({ id: Date.now().toString(36), words: k.picked, from: k.from, route: k.route, date: today() });
    }, { quiet: true });
    k.done = true;
    k.picked = '';
    markKept(text, k.route);
    say.textContent = t('reader.kept');
    k.btn.hidden = true;
    link.hidden = false;
    const sel = window.getSelection();
    if (sel) sel.removeAllRanges();
    setTimeout(() => { if (k.done) k.bar.hidden = true; }, 6000);
  } }, t('reader.keep'));
  k.bar = h('div', { class: 'keep-bar', hidden: true, role: 'status' }, say, k.btn, link);
  keeps.set(text, k);
  return k.bar;
}

// ----- how far the reader has got -----
// A part is noted as read when its end has been on the screen, some
// seconds after the part was opened. The contents and the week's page
// use the note to show the place.
function noteEnd(foot, key) {
  if (store.get().read[key] || !('IntersectionObserver' in window)) return;
  const born = Date.now();
  let was = false;
  const mark = () => {
    const r = foot.getBoundingClientRect();
    if (!foot.isConnected || r.top > window.innerHeight || r.bottom < 0) return false;
    if (!store.get().read[key]) store.update((st) => { st.read[key] = today(); }, { quiet: true });
    return true;
  };
  const io = new IntersectionObserver((entries) => {
    if (foot.isConnected) was = true;
    else if (was) { io.disconnect(); return; }
    if (!entries.some((e) => e.isIntersecting)) return;
    const wait = 6000 - (Date.now() - born);
    if (wait <= 0) { if (mark()) io.disconnect(); return; }
    setTimeout(() => { if (mark()) io.disconnect(); }, wait);
  });
  io.observe(foot);
}

// ----- pictures -----
// The pictures made for a part of a book go into its text, each before the
// stanza that holds the line it was drawn for, or at the head when it names
// no line. The stylesheet stands them in the margin where there is one.
function setPlates(course, text, plates, tercets) {
  const lines = tercets
    ? [...text.querySelectorAll('p[data-n]')].map((el) => [el, Number(el.dataset.n)])
    : [...text.querySelectorAll('.vl')].map((el, k) => [el.parentNode, k + 1]);
  const head = text.firstChild;
  plates.forEach((x, k) => {
    // Plates from one book name the book once.
    const fig = plateFigure(course, x.id, { eager: k === 0, bare: k > 0 && x.credit === plates[k - 1].credit });
    const hit = x.line && lines.length ? (lines.filter(([, n]) => n <= x.line).pop() || lines[0])[0] : null;
    if (hit && x.after) { fig.classList.add('after'); hit.after(fig); }
    else text.insertBefore(fig, hit || head);
  });
}

export async function renderIndex(ctx, asked) {
  const { t, course } = ctx;
  const textId = resolve(asked);
  const others = versions(course, textId);
  let index;
  try {
    index = await loadIndex(textId);
  } catch (err) {
    if (err instanceof Missing) return missing(t);
    throw err;
  }
  const s = store.get();
  const w = course.works.find((x) => x.texts && x.texts.includes(textId)) || null;
  const box = h('div', { class: 'col' });
  box.appendChild(h('p', { class: 'crumbs' }, h('a', { href: '#/syllabus' }, t('nav.syllabus'))));
  box.appendChild(h('p', { class: 'kicker' }, index.author));
  box.appendChild(h('h1', { tabindex: '-1' }, index.title));
  if (index.translator) box.appendChild(h('p', { class: 'muted' }, index.year ? t('reader.translated', { who: index.translator, year: index.year }) : t('reader.translated.undated', { who: index.translator })));
  const sw = versionSwitch(t, index, await others, null);
  if (sw) box.appendChild(sw);
  // What this copy is and how far to trust it, before the reader begins.
  if (index.note) box.appendChild(h('div', { class: 'note' }, p(index.note)));
  if (w && w.textNote) box.appendChild(h('div', { class: 'note' }, p(w.textNote)));

  const readKey = index.readAs || textId;
  let group = null;
  let list = null;
  for (const part of index.parts) {
    if (part.group !== group || !list) {
      group = part.group;
      if (group) box.appendChild(h('h2', null, group));
      list = h('ol', { class: 'units parts' });
      box.appendChild(list);
    }
    const read = s.read[`${readKey}/${part.id}`];
    list.appendChild(h('li', null, h('a', { href: `#/read/${textId}/${part.id}` },
      h('span', { class: 'u-n' }, read ? '✓' : ''),
      h('span', { class: 'u-title' }, part.label),
      h('span', { class: 'u-when' }, part.lines && index.verse ? t('n.lines', { n: part.lines }) : t('n.pages.short', { n: Math.max(1, Math.round(part.pages)) })),
    )));
  }
  box.appendChild(h('p', { class: 'source' }, t('reader.source', { name: index.source.name }), ' ', h('a', { href: index.source.url, rel: 'noopener', target: '_blank' }, index.source.url.replace(/^https?:\/\//, ''))));
  return { node: box, title: index.title };
}

export async function renderPart(ctx, asked, partId) {
  const { t, course } = ctx;
  const textId = resolve(asked);
  const others = versions(course, textId);
  const [ix, pt] = await Promise.allSettled([loadIndex(textId), loadPart(textId, partId)]);
  // No such book, or no such part in it: the address names nothing, and
  // loading it again will not help. Anything else is a failure to fetch.
  if (ix.status === 'rejected') {
    if (ix.reason instanceof Missing) return missing(t);
    throw ix.reason;
  }
  const index = ix.value;
  const i = index.parts.findIndex((x) => x.id === partId);
  if (i < 0) return missing(t, t('reader.nopart', { title: index.title, text: textId }));
  noteVersion(asked, index);
  // While the examination's clock runs, the cantos stay shut here as they do
  // on the By heart pages.
  if (index.readAs === 'dante' && store.get().final.sitting) {
    return { node: h('div', { class: 'col' },
      h('p', { class: 'crumbs' }, h('a', { href: `#/read/${textId}` }, index.title)),
      h('p', { class: 'kicker' }, [index.author, index.translator, index.parts[i].group].filter(Boolean).join(' · ')),
      h('h1', { tabindex: '-1' }, index.parts[i].label),
      p(examOver(store.get()) ? t('exam.over.shut') : t('heart.exam.running')),
    ), title: `${index.parts[i].label} · ${index.title}` };
  }
  if (pt.status === 'rejected') throw pt.reason;
  const part = pt.value;
  const meta = index.parts[i];
  const prev = index.parts[i - 1];
  const next = index.parts[i + 1];
  const key = `${index.readAs || textId}/${partId}`;
  const at = place(course, key);
  const unit = at ? at.unit : null;
  // The short way through the week's book, when the reader came by it.
  const short = unit && unit.short ? unit.short.parts : [];
  const si = short.findIndex((x) => x.key === key);
  const onShort = si >= 0 && new URLSearchParams(location.hash.split('?')[1] || '').get('way') === 'short';

  const box = h('div', { class: 'col' });
  const crumbs = h('p', { class: 'crumbs' });
  if (unit) {
    crumbs.appendChild(h('a', { href: `#/unit/${unit.n}` }, t('unit.short', { n: unit.n })));
    crumbs.appendChild(h('span', { class: 'sep' }, '/'));
  }
  crumbs.appendChild(h('a', { href: `#/read/${textId}` }, index.title));
  box.appendChild(crumbs);
  box.appendChild(h('p', { class: 'kicker' }, [index.author, index.translator, meta.group].filter(Boolean).join(' · ')));
  box.appendChild(h('h1', { tabindex: '-1' }, meta.label));
  const sw = versionSwitch(t, index, await others, partId);
  if (sw) {
    if (onShort) for (const a of sw.querySelectorAll('a')) a.setAttribute('href', `${a.getAttribute('href')}?way=short`);
    box.appendChild(sw);
  }
  // The question the week's first meeting sent the reader into the book with.
  const w = course.works.find((x) => x.texts && x.texts.includes(textId));
  const carry = carried(unit, w, key);
  if (carry) box.appendChild(h('p', { class: 'carry-line' }, h('span', { class: 'step-label' }, t('reader.carry')), ' ', prose(carry)));

  box.appendChild(p(t('reader.keep.hint'), 'small muted keep-hint'));
  const text = reading(part, { numbers: !!index.verse, every: index.every || 3, lang: index.lang, tercets: !!index.tercets });
  box.appendChild(text);
  const plates = (course.plates || []).filter((x) => x.at === key);
  setPlates(course, text, plates, !!index.tercets);
  markKept(text, `read/${textId}/${partId}`);
  box.appendChild(keepBar(t, text, [index.author, `*${index.title}*`, meta.label].filter(Boolean).join(', '), `read/${textId}/${partId}`));
  // A canto: the lines as they stand on the page, each with its number. In
  // the prose a paragraph is a tercet, and carries the number of its first line.
  let openAt = null;
  if (index.readAs === 'dante' && sw) {
    const lines = index.tercets
      ? [...text.querySelectorAll('p[data-n]')].map((el) => [el, Number(el.dataset.n)])
      : [...text.querySelectorAll('.vl')].map((el, k) => [el, k + 1]);
    if (lines.length) {
      const c = { lines, links: [...sw.querySelectorAll('a')].map((a) => [a, a.getAttribute('href')]), y: 0 };
      cantos.set(text, c);
      // A link from another version names the line to open at.
      const want = Number(new URLSearchParams(location.hash.split('?')[1] || '').get('l'));
      if (want >= 1) {
        openAt = lines.filter(([, n]) => n <= want).pop()[0];
        pointAt(c, want);
      }
    }
  }
  if (meta.unverified) box.appendChild(h('div', { class: 'note' }, p(t('reader.unverified'))));

  // The way on. Nothing is asked for here: the place the reader has got to
  // is noted when the end of the part has been on the screen.
  const foot = h('div', { class: 'verdict' });
  if (carry) foot.appendChild(h('p', { class: 'carry-line at-foot' }, h('span', { class: 'step-label' }, t('reader.carry')), ' ', prose(carry)));
  const row = h('div', { class: 'row', style: { margin: 0 } });
  // A meeting that comes when this part has been read is the way on from it.
  const mi = unit && unit.meetings ? unit.meetings.findIndex((m) => m.at === key) : -1;
  const meets = mi >= 0 ? h('a', { class: 'btn primary', href: `#/unit/${unit.n}/meet/${mi + 1}` }, prose(t('reader.meeting', { title: unit.meetings[mi].title }))) : null;
  if (meets) row.appendChild(meets);
  if (onShort) {
    const then = short[si].stop ? null : short[si + 1];
    if (then) row.appendChild(h('a', { class: 'btn primary', href: `#/read/${then.key}?way=short` }, t('reader.next.short', { label: then.label })));
    else if (!meets) row.appendChild(h('a', { class: 'btn primary', href: `#/unit/${unit.n}` }, t('reader.short.end', { n: unit.n })));
    if (next) row.appendChild(h('a', { class: 'btn quiet', href: `#/read/${textId}/${next.id}` }, t('reader.next.whole', { label: next.label })));
  } else {
    if (next) row.appendChild(h('a', { class: 'btn' + (meets ? ' quiet' : ' primary'), href: `#/read/${textId}/${next.id}` }, t('reader.next', { label: next.label })));
    if (unit && !meets) row.appendChild(h('a', { class: 'btn' + (next ? ' quiet' : ' primary'), href: `#/unit/${unit.n}` }, t('reader.backToUnit', { n: unit.n })));
  }
  foot.appendChild(row);
  box.appendChild(foot);
  noteEnd(foot, key);
  const below = h('p', { class: 'small' });
  if (prev) below.appendChild(h('a', { href: `#/read/${textId}/${prev.id}` }, t('reader.prev', { label: prev.label })));
  if (index.readAs === 'dante' && examCantos(store.get()).includes(partId)) {
    if (prev) below.appendChild(document.createTextNode(' · '));
    below.appendChild(h('a', { href: `#/heart/${encodeURIComponent(`canto:${index.id.replace('dante-', '')}:${partId}`)}/learn` }, t('reader.learn')));
  }
  if (below.childNodes.length) box.appendChild(below);
  // With pictures the page is given the room for them beside the text.
  if (plates.length) return { node: h('div', { class: 'read-page' }, box), title: `${meta.label} · ${index.title}`, at: openAt };
  return { node: box, title: `${meta.label} · ${index.title}`, at: openAt };
}
