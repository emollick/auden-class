// The reading list: what the sheet sets, and where to read each book.

import { h, p, prose } from '../lib/dom.js';
import { sections } from './about.js';

export async function render(ctx) {
  const { t, course } = ctx;
  const page = course.pages.syllabus;
  const box = h('div', { class: 'col-wide' });
  const head = h('div', { class: 'col' });
  head.appendChild(h('p', { class: 'kicker' }, page.kicker));
  head.appendChild(h('h1', { tabindex: '-1' }, page.title));
  for (const para of page.intro) head.appendChild(p(para));
  box.appendChild(head);

  for (const kind of ['required', 'opera', 'critical']) {
    const works = course.works.filter((w) => w.kind === kind);
    if (!works.length) continue;
    const sec = page.kinds[kind];
    box.appendChild(h('h2', null, sec.title));
    const intro = h('div', { class: 'col' });
    for (const para of sec.intro || []) intro.appendChild(p(para));
    box.appendChild(intro);
    const cols = kind === 'critical' ? ['work', 'note'] : ['work', 'set', 'copy', 'week'];
    // On a phone each row is stacked, every cell after the first with the heading of its column.
    const table = h('table', { class: 'tight books stack' });
    table.appendChild(h('thead', null, h('tr', null, cols.map((c) => h('th', null, page.col[c])))));
    const tb = h('tbody');
    for (const w of works) {
      const tr = h('tr');
      const name = h('td');
      if (w.author) name.appendChild(document.createTextNode(`${w.author}, `));
      name.appendChild(h('em', null, w.title));
      if (w.or) name.appendChild(h('span', { class: 'muted' }, ` ${page.or}`));
      if (w.omit) name.appendChild(h('span', { class: 'red small' }, ` ${page.omit}`));
      tr.appendChild(name);
      if (cols.includes('set')) tr.appendChild(h('td', { class: 'muted', 'data-label': page.col.set }, w.set ? h('span', null, prose(w.set)) : null));
      const cell = h('td', { 'data-label': page.col[kind === 'critical' ? 'note' : 'copy'] });
      const copy = h('span');
      if (w.texts && w.texts.length) {
        w.texts.forEach((id, i) => {
          if (i) copy.appendChild(document.createTextNode('; '));
          copy.appendChild(h('a', { href: `#/read/${id}` }, w.textLabels?.[i] || page.here));
        });
        if (w.copy) copy.appendChild(document.createTextNode('. '));
      }
      if (w.copy) copy.appendChild(prose(w.copy));
      if (copy.childNodes.length) cell.appendChild(copy);
      tr.appendChild(cell);
      if (cols.includes('week')) {
        const units = course.units.filter((u) => u.reading.some((r) => r.work === w.id));
        const wk = h('span');
        units.forEach((u, i) => {
          if (i) wk.appendChild(document.createTextNode(', '));
          wk.appendChild(h('a', { href: `#/unit/${u.n}` }, String(u.n)));
        });
        tr.appendChild(h('td', { class: 'nowrap n', 'data-label': page.col.week }, units.length ? wk : null));
      }
      tb.appendChild(tr);
    }
    table.appendChild(tb);
    box.appendChild(h('div', { class: 'scroll-x' }, table));
    const after = h('div', { class: 'col' });
    for (const para of sec.after || []) after.appendChild(p(para, 'small muted'));
    box.appendChild(after);
  }
  const tail = h('div', { class: 'col' });
  sections(tail, page.after || []);
  box.appendChild(tail);
  return { node: box, title: t('nav.syllabus') };
}
