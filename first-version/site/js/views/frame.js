// The masthead and the colophon.

import { h, clear, prose } from '../lib/dom.js';
import * as store from '../lib/store.js';

const NAV = [
  ['term', 'nav.term'],
  ['heart', 'nav.heart'],
  ['book', 'nav.book'],
  ['about', 'nav.about'],
];

function section(route) {
  if (route.startsWith('unit') || route.startsWith('read')) return 'term';
  if (route.startsWith('heart') || route === 'cantos' || route === 'examination') return 'heart';
  if (route === 'syllabus') return 'term';
  if (route === 'ledger' || route === 'papers') return 'book';
  return route.split('/')[0];
}

const examLeft = (sitting) => sitting.startedAt + 3 * 60 * 60 * 1000 - Date.now();

// The time left in a sitting of the examination: minutes, and in the last
// five minutes the seconds as well.
function examLine(t, sitting) {
  const left = examLeft(sitting);
  if (left <= 0) return t('standing.exam.over');
  if (left > 5 * 60 * 1000) return t('standing.exam', { n: Math.ceil(left / 60000) });
  const s = Math.ceil(left / 1000);
  return t('standing.exam.last', { time: `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}` });
}

let examTick = null;

// The notice that the browser is not saving, at the head of whatever page
// is open. It is taken down when a save next succeeds.
function savingNotice(t) {
  const main = document.getElementById('main');
  const old = document.getElementById('unsaved');
  if (store.canStore()) {
    if (old) old.remove();
  } else if (main && !(old && main.contains(old))) {
    main.insertBefore(h('p', { class: 'notice col', id: 'unsaved', role: 'status' }, t('store.warning')), main.firstChild);
  }
}

let watching = false;

export function masthead(el, ctx) {
  const { t, route = '' } = ctx;
  clear(el);
  el.appendChild(h('a', { class: 'home', href: '#/' }, t('site.short')));
  const nav = h('nav', { 'aria-label': t('nav.label') });
  const cur = section(route);
  for (const [href, key] of NAV) {
    nav.appendChild(h('a', { href: `#/${href}`, 'aria-current': cur === href ? 'page' : null }, t(key)));
  }
  el.appendChild(nav);
  savingNotice(t);
  if (!watching) {
    watching = true;
    store.onSaving(() => savingNotice(t));
  }
  clearTimeout(examTick);
  const sitting = store.get().final.sitting;
  if (sitting) {
    const line = h('a', { class: 'standing red', href: '#/examination', style: { textDecoration: 'none' } }, examLine(t, sitting));
    el.appendChild(line);
    // The line keeps time by itself, on whatever page is open. It changes as
    // each second of the time left runs out, which is when the clock on the
    // examination page changes, so that the two never disagree.
    const tick = () => {
      const now = store.get().final.sitting;
      if (!now || !line.isConnected) return;
      const text = examLine(t, now);
      if (line.textContent !== text) line.textContent = text;
      const left = examLeft(now);
      examTick = setTimeout(tick, left > 0 ? (left % 1000) + 10 : 1000);
    };
    tick();
  }
}

export function colophon(el, { t }) {
  clear(el);
  for (const para of t.list('colophon')) el.appendChild(h('p', null, prose(para)));
}
