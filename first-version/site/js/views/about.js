// What is documented and what this reconstruction supplies.

import { h, p, prose } from '../lib/dom.js';

export function sections(box, list) {
  for (const sec of list) {
    if (sec.h) box.appendChild(h('h2', { id: sec.id || null }, sec.h));
    for (const para of sec.paras || []) box.appendChild(p(para));
    if (sec.list) {
      const ul = h(sec.ordered ? 'ol' : 'ul');
      for (const item of sec.list) ul.appendChild(h('li', null, prose(item)));
      box.appendChild(ul);
    }
    if (sec.table) {
      const table = h('table', { class: 'tight' });
      if (sec.table.head) table.appendChild(h('thead', null, h('tr', null, sec.table.head.map((x) => h('th', null, x)))));
      const tb = h('tbody');
      for (const row of sec.table.rows) tb.appendChild(h('tr', null, row.map((x) => h('td', null, prose(x)))));
      table.appendChild(tb);
      box.appendChild(h('div', { class: 'scroll-x' }, table));
    }
    for (const para of sec.after || []) box.appendChild(p(para));
    if (sec.sources) {
      const ul = h('ul', { class: 'sources' });
      for (const item of sec.sources) ul.appendChild(h('li', null, prose(item)));
      box.appendChild(ul);
    }
  }
}

export async function render(ctx) {
  const { t, course } = ctx;
  const page = course.pages.about;
  const box = h('div', { class: 'col' });
  box.appendChild(h('p', { class: 'kicker' }, page.kicker));
  box.appendChild(h('h1', { tabindex: '-1' }, page.title));
  if (page.lede) box.appendChild(p(page.lede, 'lede'));
  sections(box, page.sections);
  return { node: box, title: t('nav.about') };
}
