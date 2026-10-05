import { h, clear, p, plain } from './lib/dom.js';
import * as store from './lib/store.js';
import { loadCourse, t } from './lib/course.js';
import { masthead, colophon } from './views/frame.js';

const main = document.getElementById('main');
let course = null;
let token = 0;

// ---------- keeping the place ----------
// Back, Forward and a reload put a page where the reader left it; a link
// opens its page at the top. Each entry in the browser's history is given a
// number when its page is first drawn, and how far down the page stood is
// kept under that number for the session. None of this is the student's
// record, and none of it goes into the store.

const PLACES = 'english135.places';
const KEPT = 100; // how many entries are remembered
let places = {};
let shown = null; // the number of the entry whose page is on the screen
try {
  const kept = JSON.parse(sessionStorage.getItem(PLACES));
  if (kept && typeof kept === 'object' && !Array.isArray(kept)) places = kept;
} catch {
  // no session storage: the places last only until the page is loaded again
}
try {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
} catch {
  // a frame that may not touch its history keeps the browser's own way
}

function keepPlace() {
  if (shown === null) return;
  places[shown] = Math.round(window.scrollY);
  for (const k of Object.keys(places).sort((a, b) => a - b).slice(0, -KEPT)) delete places[k];
  try {
    sessionStorage.setItem(PLACES, JSON.stringify(places));
  } catch {
    // the place is a convenience; the page still works without it
  }
}

// The number of the entry the browser stands at, and whether its page has
// been drawn before.
function entry() {
  let n = history.state && history.state.entry;
  if (n) return { n, seen: true };
  n = Date.now();
  try {
    history.replaceState({ entry: n }, '');
  } catch {
    // an entry that cannot be numbered opens at its top every time
  }
  return { n, seen: false };
}

// route pattern, module, the function in it that draws the page
const ROUTES = [
  [/^$/, () => import('./views/home.js'), 'render'],
  [/^door$/, () => import('./views/home.js'), 'renderDoor'],
  [/^syllabus$/, () => import('./views/syllabus.js'), 'render'],
  [/^term$/, () => import('./views/term.js'), 'renderTerm'],
  [/^unit\/(\d+)$/, () => import('./views/term.js'), 'renderUnit'],
  [/^unit\/(\d+)\/meet\/(\d+)$/, () => import('./views/meeting.js'), 'render'],
  [/^unit\/(\d+)\/words$/, () => import('./views/words.js'), 'render'],
  [/^unit\/(\d+)\/test$/, () => import('./views/test.js'), 'renderUnitTest'],
  [/^unit\/(\d+)\/question(?:\/(\d+))?$/, () => import('./views/question.js'), 'render'],
  [/^unit\/(\d+)\/making(?:\/(\d+))?$/, () => import('./views/making.js'), 'render'],
  [/^read\/([\w-]+)$/, () => import('./views/reader.js'), 'renderIndex'],
  [/^read\/([\w-]+)\/([\w-]+)$/, () => import('./views/reader.js'), 'renderPart'],
  [/^heart$/, () => import('./views/heart.js'), 'renderList'],
  [/^cantos$/, () => import('./views/heart.js'), 'renderCantos'],
  [/^heart\/([^/]+)$/, () => import('./views/heart.js'), 'renderPiece', (m) => [decodeURIComponent(m[1]), 'read']],
  [/^heart\/([^/]+)\/(learn|write)$/, () => import('./views/heart.js'), 'renderPiece', (m) => [decodeURIComponent(m[1]), m[2]]],
  [/^examination$/, () => import('./views/final.js'), 'render'],
  [/^book$/, () => import('./views/book.js'), 'render'],
  // the two pages the book took the place of
  [/^(?:ledger|papers)$/, () => import('./views/book.js'), 'render'],
  [/^about$/, () => import('./views/about.js'), 'render'],
];

function path() {
  return location.hash.replace(/^#\/?/, '').split('?')[0].replace(/\/$/, '');
}

// The page now shown. `stale` is set when the record has been changed in
// another tab since a page that follows the record was drawn. `outside`
// counts those changes, so that a page drawn while one came in is known to
// be stale still.
let page = null;
let stale = false;
let outside = 0;

// A view returns { node, title }. It may add `at`: the element a page opens
// at when a link names a place in it (a line of a canto). It may add `top`
// when the page must open at its head even where it would be drawn in place.
// ctx.refresh draws the page again where it stands; ctx.reopen draws it
// again from the top, as a link would. A view whose boxes are saved as they
// are written in calls ctx.follow(), and the page is then drawn again
// whenever another tab changes the record. Given a function of the record,
// ctx.follow has the page drawn again only when what the function returns
// has changed: the function names what the page shows of the record.
// Returns true when the page it made is the one now shown, false when a
// later call overtook it.
async function render({ keepScroll = false, top = false } = {}) {
  const my = ++token;
  const mark = outside;
  const route = path();
  const ctx = { course, t, refresh: () => render({ keepScroll: true }), reopen: () => render({ top: true }), route, follows: false };
  ctx.follow = (on = true) => { ctx.follows = on; };
  let out;
  try {
    let found = null;
    for (const [re, load, fn, args] of ROUTES) {
      const m = route.match(re);
      if (m) { found = { load, fn, args: args ? args(m) : m.slice(1) }; break; }
    }
    if (!found) {
      out = { node: h('div', { class: 'col' }, h('h1', { tabindex: '-1' }, t('notfound.title')), p(t('notfound.body'))), title: t('notfound.title') };
    } else {
      const mod = await found.load();
      out = await mod[found.fn](ctx, ...found.args);
    }
  } catch (err) {
    console.error(err);
    out = { node: h('div', { class: 'col' }, h('h1', { tabindex: '-1' }, t('error.title')), p(t('error.body'))), title: t('error.title') };
  }
  if (my !== token) return false;
  const y = window.scrollY;
  clear(main);
  main.appendChild(out.node);
  page = ctx;
  stale = outside !== mark;
  main.inert = stale;
  document.title = out.title ? `${plain(out.title)} · ${t('site.title')}` : t('site.title');
  masthead(document.getElementById('masthead'), ctx);
  if (keepScroll && !out.top) {
    window.scrollTo(0, y);
    return true;
  }
  const { n, seen } = entry();
  const place = seen && !top && !out.top ? places[n] : undefined;
  shown = n;
  const settle = () => {
    if (place !== undefined) window.scrollTo(0, place);
    else if (out.at) out.at.scrollIntoView();
    else window.scrollTo(0, 0);
  };
  settle();
  // After a reload the type can arrive when the page is already drawn, and
  // move every line below it. The page is then put in its place again,
  // unless the reader has moved it in the meantime: a scroll that comes
  // with no change in the height of the page is the reader's own.
  if ((place || out.at) && document.fonts && document.fonts.status === 'loading') {
    let moved = false;
    let was = { y: window.scrollY, height: document.documentElement.scrollHeight };
    const watch = () => {
      const now = { y: window.scrollY, height: document.documentElement.scrollHeight };
      if (now.y !== was.y && now.height === was.height) moved = true;
      was = now;
    };
    window.addEventListener('scroll', watch, { passive: true });
    document.fonts.ready.then(() => {
      window.removeEventListener('scroll', watch);
      if (my === token && !moved) settle();
    });
  }
  const h1 = main.querySelector('h1');
  if (h1) h1.focus({ preventScroll: true });
  return true;
}

async function start() {
  try {
    course = await loadCourse();
  } catch (err) {
    console.error(err);
    main.appendChild(h('p', { class: 'col' }, 'The course could not be loaded. Check the connection and load the page again.'));
    return;
  }
  colophon(document.getElementById('colophon'), { course, t });
  window.addEventListener('hashchange', () => { keepPlace(); render(); });
  // A phone may drop a tab that is out of sight without another word, so the
  // place is kept when the page is hidden as well as when it is left.
  window.addEventListener('pagehide', keepPlace);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') keepPlace(); });
  store.subscribe(() => masthead(document.getElementById('masthead'), { course, t, route: path() }));
  // Another tab has changed the record. A page with boxes to write in was
  // drawn from the old record, and its next keystroke would save the old
  // words over the new ones. So when what the page shows of the record has
  // changed, the page is shut at once, and it is drawn again from the new
  // record as soon as it is in view. A change to something the page does
  // not show leaves it as it stands, with the caret where it was.
  let wait = null;
  let held = null;
  const CONTROLS = 'textarea, input, select, button, a[href], summary';
  // The control that has the focus, with its caret and its scroll.
  const hold = () => {
    const el = document.activeElement;
    if (!el || !main.contains(el)) return null;
    const all = [...main.querySelectorAll(CONTROLS)];
    const at = { id: el.id, tag: el.tagName, n: all.indexOf(el), of: all.length, top: el.scrollTop };
    try { at.from = el.selectionStart; at.to = el.selectionEnd; } catch { /* a control with no caret */ }
    return at;
  };
  const giveBack = (at) => {
    if (!at) return;
    let el = at.id ? document.getElementById(at.id) : null;
    if (!el && at.n >= 0) {
      const all = main.querySelectorAll(CONTROLS);
      if (all.length === at.of && all[at.n].tagName === at.tag) el = all[at.n];
    }
    if (!el) return;
    el.focus({ preventScroll: true });
    try {
      if (typeof at.from === 'number' && typeof el.value === 'string') el.setSelectionRange(Math.min(at.from, el.value.length), Math.min(at.to, el.value.length));
    } catch { /* a control with no caret */ }
    el.scrollTop = at.top;
  };
  // A tab that comes back into view is told so more than once (it is in
  // view, it has the focus). The page is drawn once for all of them, and
  // once more if the record changed again while it was being drawn.
  let drawing = false;
  const again = () => {
    if (!stale || drawing || document.visibilityState !== 'visible') return;
    drawing = true;
    const at = held;
    render({ keepScroll: true })
      .then((drew) => { if (drew) giveBack(at); })
      .finally(() => { drawing = false; if (stale) again(); });
  };
  store.onOutside((now, before) => {
    if (!page || !page.follows) return;
    if (!stale && typeof page.follows === 'function') {
      try {
        if (JSON.stringify(page.follows(now)) === JSON.stringify(page.follows(before))) return;
      } catch (err) {
        console.error(err);
      }
    }
    if (!stale) held = hold();
    outside += 1;
    stale = true;
    main.inert = true;
    clearTimeout(wait);
    wait = setTimeout(again, 150);
  });
  document.addEventListener('visibilitychange', again);
  window.addEventListener('focus', again);
  window.addEventListener('pageshow', again);
  render();
}

start();
