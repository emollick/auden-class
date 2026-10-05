// The whole site in one page: the works, a piece, the class, the shelf, about.

import { el } from './kit/draw.js';
import { renderPiece, getJSON, absent } from './piece.js';
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
// the address asked for last (in a host's frame the bar may not say it)
let asked = null;
// the page that is drawn and standing, where it is one that moves within itself (the class among its afternoons,
// the front page to its list): a step back inside such a page moves it and draws nothing again
let showing = null;
// what the standing page's script was handed (see ROUTES): it is told there when the reader leaves the page
let standing = null;

// A page's script is handed `to` where it would have had the page itself (the scripts call it `main`). It draws
// off the document and shows its page there with its title, `main.show(page, title)`: see go(). Once the reader
// has asked for another page, `main.left` is true: a page that moves within itself (the third entry names it)
// then takes no step of its own, and its links are followed as links.
const ROUTES = [
  [/^$/, async (m, to) => (SITE.only ? renderPiece(to, SITE.only, SITE) : (await import('./home.js')).renderHome(to, SITE)), 'home'],
  // the front page, opened at its list of all the works
  [/^works$/, async (m, to) => (SITE.only ? renderPiece(to, SITE.only, SITE) : (await import('./home.js')).renderHome(to, SITE, 'works')), 'home'],
  [/^about$/, async (m, to) => (await import('./about.js')).renderAbout(to, SITE)],
  [/^shelf$/, async (m, to) => (await import('./shelf.js')).renderShelf(to, SITE)],
  // the class, and one of its afternoons: #/class/<scene>
  [/^class(?:\/([\w-]+))?$/, async (m, to) => (await import('./class.js')).renderClass(to, SITE, m[1] || null), 'class'],
  [/^read\/([\w-]+)$/, async (m, to) => (await import('./shelf.js')).renderBook(to, SITE, m[1])],
  [/^read\/([\w-]+)\/([\w-]+)(?::(\d+))?$/, async (m, to) => (await import('./shelf.js')).renderPart(to, SITE, m[1], m[2], m[3] ? +m[3] : null)],
  [/^([\w-]+)$/, async (m, to) => renderPiece(to, m[1], SITE)],
  // a card of the front page opens the plate and the tab it showed: #/<piece>/<plate>/<tab, from 0>
  [/^([\w-]+)\/([\w-]+)(?:\/(\d+))?$/, async (m, to) => renderPiece(to, m[1], SITE, { plate: m[2], lens: m[3] === undefined ? null : +m[3] })],
];
// (the longest address of a page here has under fifty letters: one far longer names no page, and is not sent
// to the server as the name of a file)
const LONGEST = 120;

// (an address that cannot be read, #/% for one, comes out null: it names no page)
const clean = (hash) => { try { return decodeURIComponent(String(hash).replace(/^#\/?/, '')).replace(/\/$/, ''); } catch (e) { return null; } };
// a new page begins at its top, at once (the page's own moves are smooth; this one is not a move)
const toTop = () => { try { window.scrollTo({ top: 0, behavior: 'instant' }); } catch (e) { window.scrollTo(0, 0); } };

// What stands where a page should when there is none to show. An address that names no page and a page that did
// not come are told apart: the second may come yet, so the reader is offered another try.
const notice = (head, says) => ({
  title: `${head} · ${SITE.name}`,
  page: el('div', { class: 'sec notice' }, [el('h2', { text: head }), el('p', {}, says)]),
});
const notFound = () => notice('Not found', ['There is no page at this address. ', el('a', { href: '#/', text: 'The\u00a0works' }), '.']);
// (A file of the site's data can be asked for again where the reader stands. A script that did not come cannot:
// a browser keeps that failure for as long as the page is open. So for anything but data the site is loaded anew,
// at the address in the bar. In a host's frame the scripts are in the page already.)
function notLoaded(path, again, inPlace) {
  const says = el('span', { id: 'notice-says', text: again ? 'It still could not be loaded.' : 'This page could not be loaded.' });
  const retry = el('button', { type: 'button', class: 'retry', 'aria-describedby': 'notice-says', text: 'Try again' });
  let trying = false;
  retry.addEventListener('click', () => {
    if (trying) return;
    // (the press is taken once, and the button says so until the answer comes)
    trying = true; retry.textContent = 'Trying again'; retry.setAttribute('aria-disabled', 'true');
    // (the reader may have asked for another page since this notice was put up: the try is of the page asked for last)
    if (inPlace) go(asked, false, asked === path); else location.reload();
  });
  // (the button is a box in the line: it and its period turn the line together)
  return notice('Not loaded', [says, ' ', el('span', { class: 'keep' }, [retry, '.'])]);
}

// (a reader who has just pressed "Try again" from the keyboard is on the button)
const onRetry = () => { const a = document.activeElement; return !!a && main.contains(a) && a.classList.contains('retry'); };

// The page of an address is drawn off the document. When it is ready its script shows it (`show`), and it is put
// before the reader, with its title, only if it is still the page asked for: a reader who has gone on is not
// brought back by a slower page, or told of its failure. (A page goes into the document at the moment it is
// shown, as its plates expect: they start as soon as the faces are in, and only if they stand in the document.)
// `to` is the address where it is not to be read from the bar; `again`, that the reader is trying a second time.
async function go(to, fresh = false, again = false) {
  const mine = ++turn;
  const path = to === undefined ? clean(location.hash) : to;
  asked = path;
  const route = path === null || path.length > LONGEST ? null : ROUTES.find(([re]) => re.test(path));
  // the place the reader left at this step of the history, where they are coming back to one (places.js)
  const back = arriving(fresh);
  const page = route && !SITE.only ? route[2] || null : null;
  if (back && page && page === showing) { arrived(back); return; }
  showing = null;
  document.querySelectorAll('audio').forEach((a) => a.pause());
  if (standing) { standing.left = true; standing = null; }
  if (leave) { try { leave(); } catch (e) { /* the page is going anyway */ } leave = null; }

  const put = (node, title, by = null) => { main.replaceChildren(node); document.title = title; standing = by; };
  let shown = false;
  const stage = {
    left: false,
    show(node, title) {
      if (mine !== turn) return;
      // (a reader whose try brought the page was on the button, which goes with the notice: they go on from the page)
      const tried = onRetry();
      put(node, title, stage); shown = true;
      if (tried) main.focus({ preventScroll: true });
    },
  };
  let out = null; let failed = null;
  if (route) { try { out = await route[1](path.match(route[0]), stage); } catch (e) { failed = e; console.error(e); } }
  if (mine !== turn) { if (typeof out === 'function') { try { out(); } catch (e) { /* it was never shown */ } } return; }

  const ok = shown && !failed;
  leave = ok && typeof out === 'function' ? out : null;
  // (there is no such page: the address matched no route, or the page's script found no piece, book or part of the name)
  const missing = !route || (!!failed && absent(failed));
  if (!ok) {
    const view = missing ? notFound() : notLoaded(path, again, !!opts.frame || !!(failed && failed.data));
    // A reader who tried again from the keyboard, and in vain, is still on the button, and is told the notice
    // from there (the button is described by it). Any other reader is told it as it is put up.
    const retry = view.page.querySelector('.retry');
    const tried = !!retry && onRetry();
    const says = view.page.querySelector('p');
    if (tried) says.setAttribute('aria-live', 'polite'); else says.setAttribute('role', 'alert');
    put(view.page, view.title);
    if (tried) retry.focus({ preventScroll: true });
  }
  setFoot(ok ? path : '');
  // (the menu marks the page of the address, also where it did not come; an address that names no page has no mark)
  const place = missing ? null : /^read\//.test(path) ? 'shelf' : /^class\//.test(path) ? 'class' : path === 'works' ? '' : path;
  document.querySelectorAll('.top nav a').forEach((a) => { if (a.getAttribute('href') === `#/${place}`) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  showing = ok ? page : null;
  arrived(ok ? back : null, () => {
    toTop();
    if (opts.frame) { const top = document.querySelector('.top'); if (top && top.scrollIntoView) top.scrollIntoView(); }
    // a page that opens at a place of its own goes there once the top is reached
    if (leave && leave.after) leave.after();
  });
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
