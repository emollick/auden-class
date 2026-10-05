// The front page. A visitor who has not been here is given a song with
// words missing, before anything is explained. One who has is shown where
// they stopped.

import { h, p, prose } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { play, doorUnit, meetingStanding, flatSteps, bookBlock } from './meeting.js';
import { meetingCard } from './term.js';
import { plateFigure } from '../lib/media.js';

// Whether anything has been done on the site beyond its first page.
export function hasBegun(st) {
  return Object.keys(st.meet || {}).some((id) => id !== 'door')
    || Object.keys(st.words || {}).some((id) => id !== 'door')
    || [st.read, st.heart, st.answers, st.making, st.tests].some((x) => x && Object.keys(x).length > 0)
    || (st.kept || []).length > 0;
}

export async function renderDoor(ctx) {
  return play(ctx, { unit: doorUnit(ctx.course), m: ctx.course.door, door: true });
}

// The first meeting that has not been gone through to its end.
function stop(st, course) {
  for (const u of course.units) {
    const list = u.meetings || [];
    for (let i = 0; i < list.length; i++) {
      const standing = meetingStanding(st, u, list[i]);
      if (!standing.reached) return { unit: u, i, m: list[i], standing };
    }
  }
  return null;
}

function back(ctx) {
  const { t, course } = ctx;
  ctx.follow((st) => [st.meet, st.words, st.answers, st.kept, st.read, st.choices]);
  const st = store.get();
  const at = stop(st, course);
  const box = h('div', { class: 'home' });
  const col = h('div', { class: 'col' });
  box.appendChild(col);
  col.appendChild(h('p', { class: 'kicker' }, t('home.kicker')));

  const met = course.units.filter((u) => u.meetings && u.meetings.length);
  const rest = course.units.filter((u) => !(u.meetings && u.meetings.length));
  if (!at && met.length && rest.length) {
    // Every meeting there is has been gone through, and weeks without
    // meetings remain: the page says so, and does not call the term over.
    const last = met[met.length - 1];
    col.appendChild(h('h1', { tabindex: '-1' }, t('home.more.title', { n: last.n })));
    for (const para of t.list('home.more', { from: rest[0].n, to: rest[rest.length - 1].n })) col.appendChild(p(para));
    col.appendChild(h('div', { class: 'row' },
      h('a', { class: 'btn primary', href: '#/book' }, t('nav.book')),
      h('a', { class: 'btn', href: `#/unit/${rest[0].n}` }, t('home.more.next', { n: rest[0].n })),
      h('a', { class: 'btn quiet', href: '#/term' }, t('nav.term'))));
  } else if (!at) {
    col.appendChild(h('h1', { tabindex: '-1' }, t('home.end.title')));
    for (const para of t.list('home.end')) col.appendChild(p(para));
    col.appendChild(h('div', { class: 'row' }, h('a', { class: 'btn primary', href: '#/book' }, t('nav.book')), h('a', { class: 'btn', href: '#/term' }, t('nav.term'))));
  } else {
    const { unit, i, m, standing } = at;
    col.appendChild(h('h1', { tabindex: '-1' }, prose(t('home.week.title', { n: unit.n, title: unit.title }))));
    if (unit.sub) col.appendChild(h('p', { class: 'lede' }, prose(unit.sub)));
    // Between two meetings comes the book: what the last meeting ended on
    // is shown again, and the next meeting waits under it.
    const before = i > 0 ? flatSteps(unit.meetings[i - 1]).map((x) => x.s).reverse().find((s) => s.kind === 'next' && s.reading !== false) : null;
    if (m.after && !standing.begun && before) {
      const card = h('section', { class: 'card book-card' });
      bookBlock(card, { t, s: { ...before, heart: null, sources: null }, unit, course, st });
      col.appendChild(card);
    }
    const card = meetingCard(t, course, st, unit, i);
    card.querySelector('.row').appendChild(h('a', { class: 'btn quiet', href: `#/unit/${unit.n}` }, t('home.week.open', { n: unit.n })));
    col.appendChild(card);
    if (unit.plate) {
      const fig = plateFigure(course, unit.plate, { eager: true });
      if (fig) col.appendChild(fig);
    }
  }

  // Something from the student's own book: the last lines they kept.
  const kept = (st.kept || [])[st.kept.length - 1];
  if (kept) {
    col.appendChild(h('h2', null, t('home.kept.title')));
    col.appendChild(h('blockquote', { class: 'kept-line' }, h('p', null, kept.words), h('p', { class: 'source' }, kept.route ? h('a', { href: `#/${kept.route}` }, prose(kept.from)) : prose(kept.from))));
  }

  col.appendChild(h('p', { class: 'home-links' },
    h('a', { href: '#/term' }, t('nav.term')), ' · ',
    h('a', { href: '#/book' }, t('nav.book')), ' · ',
    h('a', { href: '#/door' }, t('home.links.door'))));
  return { node: box, title: null };
}

// The opening is shown until it has been gone through. A visitor who went
// through it on an earlier visit, and left without taking either way on,
// is shown the front page; one who has just finished it stays where they are.
let doorOpenedHere = false;

export async function render(ctx) {
  const st = store.get();
  if ((st.door && st.door.passed) || hasBegun(st)) return back(ctx);
  const done = meetingStanding(st, doorUnit(ctx.course), ctx.course.door).reached;
  if (done && !doorOpenedHere) return back(ctx);
  doorOpenedHere = true;
  return renderDoor(ctx);
}
