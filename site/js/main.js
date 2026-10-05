// The whole site in one page: the works, a piece, the class, the shelf, about.

import { el } from './kit/draw.js';
import { renderPiece, getJSON } from './piece.js';
import { arriving, arrived, stepTo, moved } from './places.js';

const SITE = { name: 'Fate and the Individual' };
const main = document.getElementById('main');
const opts = document.documentElement.dataset;
// a private preview can show one piece only
if (opts.only) { SITE.only = opts.only; SITE.reader = false; }

const foot = document.getElementById('foot');
// The about page says who made the site in full, near its head, so its foot
// keeps the rule and says nothing; every other page says it at the foot.
function setFoot(path) {
  if (!foot || SITE.only) return;
  if (path === 'about') { foot.replaceChildren(); return; }
  if (foot.childNodes.length) return;
  foot.replaceChildren(
    el('p', { text: 'This site was made by Claude, an AI system made by Anthropic. No Auden scholar has checked it.' }),
    el('p', {}, [el('a', { href: '#/about', text: 'About the site and its sources' })]),
  );
}
setFoot('');

let leave = null;
let turn = 0;
// the page that is drawn and standing, where it is one that moves within itself (the class among its afternoons,
// the front page to its list): a step back inside such a page moves it and draws nothing again
let showing = null;
const pageOf = (path) => (SITE.only ? null : path === '' || path === 'works' ? 'home' : /^class(\/|$)/.test(path) ? 'class' : null);

const ROUTES = [
  [/^$/, async () => (SITE.only ? renderPiece(main, SITE.only, SITE) : (await import('./home.js')).renderHome(main, SITE))],
  // the front page, opened at its list of all the works
  [/^works$/, async () => (SITE.only ? renderPiece(main, SITE.only, SITE) : (await import('./home.js')).renderHome(main, SITE, 'works'))],
  [/^about$/, async () => (await import('./about.js')).renderAbout(main, SITE)],
  [/^shelf$/, async () => (await import('./shelf.js')).renderShelf(main, SITE)],
  // the class, and one of its afternoons: #/class/<scene>
  [/^class(?:\/([\w-]+))?$/, async (m) => (await import('./class.js')).renderClass(main, SITE, m[1] || null)],
  [/^read\/([\w-]+)$/, async (m) => (await import('./shelf.js')).renderBook(main, SITE, m[1])],
  [/^read\/([\w-]+)\/([\w-]+)(?::(\d+))?$/, async (m) => (await import('./shelf.js')).renderPart(main, SITE, m[1], m[2], m[3] ? +m[3] : null)],
  [/^([\w-]+)$/, async (m) => renderPiece(main, m[1], SITE)],
  // a card of the front page opens the plate and the tab it showed: #/<piece>/<plate>/<tab, from 0>
  [/^([\w-]+)\/([\w-]+)(?:\/(\d+))?$/, async (m) => renderPiece(main, m[1], SITE, { plate: m[2], lens: m[3] === undefined ? null : +m[3] })],
];

const clean = (hash) => decodeURIComponent(String(hash).replace(/^#\/?/, '')).replace(/\/$/, '');
// a new page begins at its top, at once (the page's own moves are smooth; this one is not a move)
const toTop = () => { try { window.scrollTo({ top: 0, behavior: 'instant' }); } catch (e) { window.scrollTo(0, 0); } };

async function go(to, fresh = false) {
  const mine = ++turn;
  const path = typeof to === 'string' ? to : clean(location.hash);
  // the place the reader left at this step of the history, where they are coming back to one (places.js)
  const back = arriving(fresh);
  const page = pageOf(path);
  if (back && page && page === showing) { arrived(back); return; }
  showing = null;
  document.querySelectorAll('audio').forEach((a) => a.pause());
  if (leave) { try { leave(); } catch (e) { /* the page is going anyway */ } leave = null; }
  for (const [re, draw] of ROUTES) {
    const m = path.match(re);
    if (!m) continue;
    try {
      const out = await draw(m);
      if (mine !== turn) { if (typeof out === 'function') out(); return; }
      leave = typeof out === 'function' ? out : null;
      const place = /^read\//.test(path) ? 'shelf' : /^class\//.test(path) ? 'class' : path === 'works' ? '' : path;
      setFoot(path);
      document.querySelectorAll('.top nav a').forEach((a) => { if (a.getAttribute('href') === `#/${place}`) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
      showing = page;
      arrived(back, () => {
        toTop();
        if (opts.frame) { const top = document.querySelector('.top'); if (top && top.scrollIntoView) top.scrollIntoView(); }
        // a page that opens at a place of its own goes there once the top is reached
        if (leave && leave.after) leave.after();
      });
    } catch (e) {
      console.error(e);
      main.replaceChildren(el('div', { class: 'sec' }, [el('h2', { text: 'Not found' }), el('p', {}, ['There is no page at this address. ', el('a', { href: '#/', text: 'The works' }), '.'])]));
      if (mine === turn) arrived(null, toTop);
    }
    return;
  }
  arrived(null);
}

if (opts.frame) {
  // inside a host's frame the address may not be ours to change: follow the site's own links here
  document.addEventListener('click', (e) => {
    const a = e.target && e.target.closest ? e.target.closest('a[href^="#/"]') : null;
    if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const href = a.getAttribute('href');
    stepTo(href);
    go(clean(href), true);
  });
  addEventListener('popstate', () => { if (moved()) go(); });
} else {
  // a step back to the same address (a move within a page) tells only popstate; a browser may tell both
  addEventListener('hashchange', () => { if (moved()) go(); });
  addEventListener('popstate', () => { if (moved()) go(); });
}
go();
export { SITE, getJSON };
