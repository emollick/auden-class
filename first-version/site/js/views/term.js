// The term week by week, and the page for one week.

import { h, p, prose, plain } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { medium } from '../lib/dates.js';
import { omitted, testItems, itemKeys } from '../lib/schedule.js';
import { standingOf } from '../lib/heart.js';
import { today } from '../lib/dates.js';
import { unitByNumber, work, getPiece, cantoPiece, cantoVersion, isCanto } from '../lib/course.js';
import { plate, plateFigure, recordPlayer } from '../lib/media.js';
import { exercises } from './making.js';
import { meetingStanding, board } from './meeting.js';
import { standingText } from './heart.js';

// How far a week has got: 'new', 'begun' or 'done'.
export function weekState(st, u) {
  if (u.meetings && u.meetings.length) {
    const all = u.meetings.map((m) => meetingStanding(st, u, m));
    if (all.every((x) => x.reached)) return 'done';
    return all.some((x) => x.begun) ? 'begun' : 'new';
  }
  const begun = (u.words && st.words[u.words.id]) || (u.questions || []).some((q) => st.answers[q.id] && st.answers[q.id].text)
    || exercises(u).some((ex) => st.making[ex.id]) || st.tests[`unit${u.n}`];
  return begun ? 'begun' : 'new';
}

export async function renderTerm(ctx) {
  const { t, course } = ctx;
  // Each row says how far its week has got, so the page follows the record.
  ctx.follow((st) => [st.meet, st.words, st.answers, st.making, st.tests]);
  const st = store.get();
  const box = h('div', { class: 'term' });
  const head = h('div', { class: 'col' });
  head.appendChild(h('p', { class: 'kicker' }, t('term.kicker')));
  head.appendChild(h('h1', { tabindex: '-1' }, t('term.title')));
  for (const para of t.list('term.intro')) head.appendChild(p(para));
  box.appendChild(head);

  const list = h('ol', { class: 'weeks' });
  for (const u of course.units) {
    const state = weekState(st, u);
    const pic = u.plate ? plate(course, u.plate) : null;
    let says = null;
    if (state === 'done') says = t('term.state.done');
    else if (state === 'begun') says = t('term.state.begun');
    else if (!(u.meetings && u.meetings.length)) says = t('term.state.old');
    list.appendChild(h('li', null,
      h('a', { href: `#/unit/${u.n}`, class: 'week-row' + (pic ? ' has-plate' : '') },
        h('span', { class: 'w-n' }, String(u.n)),
        h('span', { class: 'w-main' },
          h('span', { class: 'w-title' }, prose(u.title)),
          h('span', { class: 'w-sub' }, prose(u.sub)),
          u.carry ? h('span', { class: 'w-carry' }, prose(u.carry)) : null,
          says ? h('span', { class: 'w-state' }, says) : null),
        pic ? h('img', { class: 'w-plate', src: `plates/${pic.file}`, alt: '', loading: 'lazy', decoding: 'async' }) : null,
      )));
  }
  list.appendChild(h('li', null,
    h('a', { href: '#/examination', class: 'week-row' },
      h('span', { class: 'w-n' }),
      h('span', { class: 'w-main' },
        h('span', { class: 'w-title' }, t('term.exam.title')),
        h('span', { class: 'w-sub' }, t('term.exam.sub'))),
    )));
  box.appendChild(list);
  box.appendChild(h('div', { class: 'note col' }, t.list('term.note').map((x) => p(x))));
  return { node: box, title: t('nav.term') };
}

// What a week offers to learn by heart, if anything: a set piece, or a
// canto in the version the student reads.
export function heartPiece(course, s, unit) {
  if (!unit.heart) return null;
  return isCanto(unit.heart) ? cantoPiece(cantoVersion(s), unit.heart, course) : getPiece(unit.heart, s, course);
}

// The readings of a week that are open to this student: an alternative not
// chosen, and a book marked "Omit" that is not being read, are left out.
function openReadings(course, unit, st, only) {
  return unit.reading.filter((r) => {
    if (only && !only.includes(r.work)) return false;
    if (r.choice && (st.choices[r.choice.id] || r.choice.default) !== r.choice.option) return false;
    if (r.omit && omitted(r, st.choices)) return false;
    return true;
  });
}

// One line for one stretch of a book: its name, linked to where the
// reader left off in it, and how much of it is read.
function itemLine(item, st, t) {
  const keys = itemKeys(item);
  const read = keys.filter((k) => st.read[k]).length;
  let href = null;
  if (item.route) {
    const next = item.parts ? item.parts.find(([k]) => !st.read[k]) : null;
    href = `#/${next ? `read/${next[0]}` : item.route}`;
  }
  const link = href ? h('a', { href }, prose(item.label))
    : item.url ? h('a', { href: item.url, target: '_blank', rel: 'noopener' }, prose(item.label))
      : h('span', null, prose(item.label));
  const line = h('span', { class: 'book-part' }, link);
  if (read && read < keys.length) line.appendChild(h('span', { class: 'muted small' }, ' ', t('unit.reading.begun')));
  else if (read) line.appendChild(h('span', { class: 'muted small' }, ' ', t('unit.reading.read')));
  return line;
}

// The line over a meeting's title: which meeting it is, and when it comes.
export function meetingKicker(t, course, unit, i) {
  const m = unit.meetings[i];
  const which = t.list('meet.ordinals')[i] || '';
  if (!m.after) return t('unit.meet.before', { which });
  const books = unit.reading.filter((r) => work(course, r.work).kind !== 'opera').length;
  return t('unit.meet.after', { which, what: typeof m.after === 'string' ? m.after : t('unit.meet.after.what', { n: books }) });
}

// The books of a week as links into the reader: what a meeting ends with.
export function readingLinks(course, unit, st, t, only) {
  const rs = openReadings(course, unit, st, only);
  if (!rs.length) return null;
  const list = h('ul', { class: 'books-list' });
  for (const r of rs) {
    const w = work(course, r.work);
    const li = h('li', null, h('span', { class: 'book-name' }, `${w.author}, `, h('em', null, w.title)));
    if (r.items.length === 1 && !r.items[0].parts) li.appendChild(h('span', null, ' · ', itemLine({ ...r.items[0], label: t('unit.reading.open') }, st, t)));
    else {
      const parts = h('span', { class: 'book-parts' });
      r.items.forEach((item, i) => { if (i) parts.appendChild(document.createTextNode(' · ')); parts.appendChild(itemLine(item, st, t)); });
      li.appendChild(parts);
    }
    if (!r.items.some((x) => x.route || x.url) && w.find) li.appendChild(h('span', { class: 'muted small book-find' }, prose(w.find)));
    list.appendChild(li);
  }
  return list;
}

// The short way through the week's book: a few parts of it, for a reader
// with one evening. The parts already read are marked.
export function shortWay(unit, st, t, only) {
  if (!unit.short) return null;
  // A meeting that leads into one part of the book shows the short way through that part.
  const parts = only && only.from ? unit.short.parts.filter((x) => x.key.startsWith(only.from)) : unit.short.parts;
  if (!parts.length) return null;
  const box = h('div', { class: 'short-way' });
  box.appendChild(h('p', { class: 'step-label' }, t('unit.short.label')));
  box.appendChild(p((only && only.say) || unit.short.say));
  const list = h('p', { class: 'short-parts' });
  parts.forEach((x, i) => {
    if (i) list.appendChild(document.createTextNode(' · '));
    list.appendChild(h('a', { href: `#/read/${x.key}?way=short`, class: st.read[x.key] ? 'been' : null }, x.label));
  });
  box.appendChild(list);
  return box;
}

export function meetingCard(t, course, st, unit, i) {
  const m = unit.meetings[i];
  const s = meetingStanding(st, unit, m);
  const card = h('section', { class: 'card meeting-card' + (s.reached ? ' held' : '') });
  card.appendChild(h('p', { class: 'kicker' }, prose(meetingKicker(t, course, unit, i))));
  card.appendChild(h('h2', null, h('a', { href: `#/unit/${unit.n}/meet/${i + 1}` }, prose(m.title))));
  card.appendChild(p(m.blurb));
  const label = s.reached ? t('unit.meet.again') : s.begun ? t('unit.meet.goon') : t('unit.meet.begin');
  card.appendChild(h('div', { class: 'row' }, h('a', { class: 'btn' + (s.reached ? '' : ' primary'), href: `#/unit/${unit.n}/meet/${i + 1}` }, label)));
  return card;
}

export async function renderUnit(ctx, n) {
  const { t, course, refresh } = ctx;
  const unit = unitByNumber(course, n);
  if (!unit) return { node: h('div', { class: 'col' }, h('h1', { tabindex: '-1' }, t('notfound.title')), p(t('notfound.body'))), title: t('notfound.title') };
  // What is read, chosen, written and learned is shown from the record, so
  // the page follows it when a part is marked as read in another tab.
  ctx.follow();
  const st = store.get();
  const box = h('div', { class: 'week' });
  const head = h('div', { class: 'week-head' });
  const words = h('div', { class: 'col' });
  words.appendChild(h('p', { class: 'crumbs' }, h('a', { href: '#/term' }, t('nav.term'))));
  words.appendChild(h('p', { class: 'kicker' }, t('unit.short', { n: unit.n })));
  words.appendChild(h('h1', { tabindex: '-1' }, prose(unit.title)));
  if (unit.sub) words.appendChild(h('p', { class: 'lede' }, prose(unit.sub)));
  for (const para of unit.intro || []) words.appendChild(p(para));
  head.appendChild(words);
  box.appendChild(head);
  // The week's picture stands beside the whole page, and on a narrow screen
  // between the head and what follows.
  if (unit.plate) {
    const fig = plateFigure(course, unit.plate, { eager: true });
    if (fig) { box.classList.add('with-plate'); box.appendChild(fig); }
  }

  // A box of the reading that is changed has the page drawn again. The
  // keyboard's place goes back to the box, which the new page has under the
  // same id.
  const redraw = async (id) => {
    await refresh();
    const el = document.getElementById(id);
    if (el) el.focus({ preventScroll: true });
  };

  const body = h('div', { class: 'col week-body' });
  box.appendChild(body);
  const meetings = unit.meetings || [];

  // ----- before the book -----
  if (meetings[0]) body.appendChild(meetingCard(t, course, st, unit, 0));
  else if (unit.words) {
    body.appendChild(h('section', { class: 'card meeting-card' },
      h('p', { class: 'kicker' }, t('unit.meet.before', { which: t.list('meet.ordinals')[0] })),
      h('h2', null, h('a', { href: `#/unit/${unit.n}/words` }, t('words.title'))),
      p(t('unit.words.what')),
      h('div', { class: 'row' }, h('a', { class: 'btn primary', href: `#/unit/${unit.n}/words` }, t('unit.meet.begin')))));
  }

  // ----- the book -----
  body.appendChild(h('h2', null, t('unit.reading', { n: unit.reading.filter((r) => work(course, r.work).kind !== 'opera').length })));
  const operas = [];
  const seen = new Set();
  for (const r of unit.reading) {
    const w = work(course, r.work);
    if (w.kind === 'opera') { operas.push(r); continue; }
    if (r.choice) {
      // Two books for one place on the list: the choice is shown once, before the first.
      if (!seen.has(r.choice.id)) {
        seen.add(r.choice.id);
        const chosen = st.choices[r.choice.id] || r.choice.default;
        const fs = h('fieldset', { class: 'either' }, h('legend', null, t('unit.either')));
        for (const alt of unit.reading.filter((x) => x.choice && x.choice.id === r.choice.id)) {
          const aw = work(course, alt.work);
          const id = `choice-${alt.choice.id}-${alt.choice.option}`;
          fs.appendChild(h('div', { class: 'choice' },
            h('input', { type: 'radio', name: `choice-${alt.choice.id}`, id, checked: chosen === alt.choice.option, onChange: () => { store.update((s2) => { s2.choices[alt.choice.id] = alt.choice.option; }); redraw(id); } }),
            h('label', { for: id }, `${aw.author}, `, h('em', null, aw.title), alt.choice.label ? ` ${alt.choice.label}` : '')));
        }
        body.appendChild(fs);
      }
      if ((st.choices[r.choice.id] || r.choice.default) !== r.choice.option) continue;
    }
    body.appendChild(h('h3', { class: 'book-head' }, `${w.author}, `, h('em', null, w.title)));
    if (r.omit) {
      const out = omitted(r, st.choices);
      const id = `read-${r.work}`;
      body.appendChild(p(t('unit.omit'), 'small muted'));
      body.appendChild(h('div', { class: 'choice' },
        h('input', { type: 'checkbox', id, checked: !out, onChange: (e) => { store.update((s2) => { if (e.target.checked) s2.choices[`read:${r.work}`] = true; else delete s2.choices[`read:${r.work}`]; }); redraw(id); } }),
        h('label', { for: id }, t('unit.omit.read'))));
      if (out) continue;
    }
    if (r.note) body.appendChild(p(r.note, 'small muted'));
    const parts = h('p', { class: 'book-parts' });
    r.items.forEach((item, i) => { if (i) parts.appendChild(document.createTextNode(' · ')); parts.appendChild(itemLine(item, st, t)); });
    body.appendChild(parts);
    if (w.find) body.appendChild(h('p', { class: 'small muted' }, prose(w.find)));
  }

  const way = shortWay(unit, st, t);
  if (way) body.appendChild(way);

  // ----- when the book is read -----
  for (let i = 1; i < meetings.length; i++) body.appendChild(meetingCard(t, course, st, unit, i));

  for (const r of operas) {
    const o = work(course, r.work);
    body.appendChild(h('h3', { class: 'book-head' }, t('unit.opera'), ': ', `${o.author}, `, h('em', null, o.title)));
    for (const para of r.paras || []) body.appendChild(p(para));
    for (const rec of (course.records || []).filter((x) => x.work === r.work && !x.meeting)) {
      const player = recordPlayer(course, rec.id, t);
      if (player) body.appendChild(player);
    }
    const parts = h('p', { class: 'book-parts' });
    r.items.forEach((item, i) => { if (i) parts.appendChild(document.createTextNode(' · ')); parts.appendChild(itemLine(item, st, t)); });
    body.appendChild(parts);
    if (o.find) body.appendChild(h('p', { class: 'small muted' }, prose(o.find)));
    // What Auden wrote about the opera: on the page where it is short, folded away where it is long.
    if (r.auden && r.auden.open) body.appendChild(board(t, { ...r.auden, title: r.auden.title || t('meet.turn.title') }));
    else if (r.auden) body.appendChild(h('details', { class: 'opera-auden' }, h('summary', null, r.auden.title || t('meet.turn.title')), board(t, { ...r.auden, title: r.auden.title || t('meet.turn.title') })));
  }

  // ----- the rest of the week -----
  body.appendChild(h('h2', null, t('unit.also')));
  const also = h('div', { class: 'also' });
  const tile = (kicker, title, what, href, state) => also.appendChild(h('a', { class: 'tile', href },
    h('span', { class: 'kicker' }, kicker),
    h('span', { class: 'tile-title' }, prose(title)),
    what ? h('span', { class: 'tile-what' }, prose(what)) : null,
    state ? h('span', { class: 'tile-state' }, state) : null));

  if (!meetings.length && unit.questions && unit.questions.length) {
    const handed = unit.questions.filter((q) => st.answers[q.id] && st.answers[q.id].handedIn).length;
    tile(t('question.kicker'), plain(unit.questions[0].text), unit.questions.length > 1 ? t('unit.question.more', { n: unit.questions.length - 1 }) : null, `#/unit/${unit.n}/question`, handed ? t('state.handed') : null);
  }
  exercises(unit).forEach((ex, i) => {
    const rec = st.making[ex.id];
    tile(t('unit.make.kicker'), ex.title, ex.short || null, `#/unit/${unit.n}/making${i ? `/${i + 1}` : ''}`, rec && rec.done ? t('unit.make.done', { date: medium(rec.done) }) : null);
  });
  const hp = heartPiece(course, st, unit);
  if (hp) {
    const stand = standingOf(st.heart[hp.id], today());
    tile(t('heart.title'), hp.title, hp.lineCount ? t('n.lines', { n: hp.lineCount }) : null, `#/heart/${encodeURIComponent(hp.id)}`, stand.state === 'new' ? null : standingText(t, stand).text);
  }
  if (unit.test) {
    tile(t('unit.test.kicker'), t('unit.test.title'), t('unit.test.what', { n: testItems(unit, st.choices).length }), `#/unit/${unit.n}/test`, null);
  }
  body.appendChild(also);

  const nav = h('div', { class: 'row week-nav' });
  if (unit.n > 1) nav.appendChild(h('a', { class: 'btn quiet', href: `#/unit/${unit.n - 1}` }, t('unit.prev', { n: unit.n - 1 })));
  if (unit.n < course.units.length) nav.appendChild(h('a', { class: 'btn quiet', href: `#/unit/${unit.n + 1}` }, t('unit.next', { n: unit.n + 1 })));
  else nav.appendChild(h('a', { class: 'btn quiet', href: '#/examination' }, t('term.exam.title')));
  body.appendChild(nav);
  return { node: box, title: `${t('unit.short', { n: unit.n })}: ${unit.title}` };
}
