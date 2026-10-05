// About: what the site is, what is on record of the course, how a page is
// made, and the works cited. The words are in data/about.json, which
// build/shelf.mjs writes from content/about.mjs.

import { el } from './kit/draw.js';
import { getJSON } from './piece.js';
import { rich, para } from './rich.js';

export async function renderAbout(main, site = {}) {
  const about = await getJSON('data/about.json');
  document.title = [about.kicker, site.name].filter(Boolean).join(' · ');
  const page = el('article', { class: 'about' }, [
    el('header', { class: 'piece-hd about-hd' }, [el('p', { class: 'kicker', text: about.kicker }), el('h1', { text: about.title })]),
    para(about.lede, { class: 'about-lede' }),
    ...about.sections.map((s) => el('section', { class: 'sec' }, [
      el('h2', { text: s.h }),
      ...(s.paras || []).map((t) => para(t)),
      s.table ? el('table', { class: 'record-t' }, [
        el('thead', {}, [el('tr', {}, s.table.head.map((h) => el('th', { scope: 'col', text: h })))]),
        el('tbody', {}, s.table.rows.map((r) => el('tr', {}, r.map((c) => el('td', {}, rich(c)))))),
      ]) : null,
      s.sources ? el('ul', { class: 'cited' }, s.sources.map((t) => el('li', {}, rich(t)))) : null,
      ...(s.after || []).map((t) => para(t, { class: 'after' })),
    ])),
  ]);
  main.replaceChildren(page);
}
