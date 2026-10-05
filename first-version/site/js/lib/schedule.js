// The calendar of the term and the arithmetic of the reading.

import { addDays, daysBetween } from './dates.js';

export function termDays(course, paceId) {
  const pace = course.paces.find((x) => x.id === paceId) || course.paces[0];
  return pace.weeks * 7;
}

// Each unit gets an equal share of the term. Returns [{n, from, to}] where
// `to` is the last day of the unit.
export function calendar(course, enrolled) {
  const total = termDays(course, enrolled.pace);
  const count = course.units.length;
  return course.units.map((u, i) => {
    const a = Math.floor((i * total) / count);
    const b = Math.floor(((i + 1) * total) / count) - 1;
    return { n: u.n, from: addDays(enrolled.start, a), to: addDays(enrolled.start, b) };
  });
}

export function termEnd(course, enrolled) {
  return addDays(enrolled.start, termDays(course, enrolled.pace) - 1);
}

// Where the calendar says the student should be on a given day.
// before: term not begun; after: term over.
export function position(course, enrolled, day) {
  const cal = calendar(course, enrolled);
  if (day < enrolled.start) return { phase: 'before', unit: null, daysToStart: daysBetween(day, enrolled.start) };
  const end = termEnd(course, enrolled);
  if (day > end) return { phase: 'after', unit: null, daysOver: daysBetween(end, day) };
  const cur = cal.find((c) => day >= c.from && day <= c.to);
  return {
    phase: 'during',
    unit: cur.n,
    dayOfTerm: daysBetween(enrolled.start, day) + 1,
    totalDays: termDays(course, enrolled.pace),
    dayOfUnit: daysBetween(cur.from, day) + 1,
    unitDays: daysBetween(cur.from, cur.to) + 1,
    daysLeftInUnit: daysBetween(day, cur.to),
  };
}

// A work marked "Omit" in ink on the surviving sheet is left out, unless
// the student asks to read it anyway.
export function omitted(r, choices = {}) {
  return !!(r.omit && !choices[`read:${r.work}`]);
}

// The items of a week's test, taking account of which alternative was read.
export function testItems(unit, choices = {}) {
  if (!unit.test) return [];
  const defaults = {};
  for (const r of unit.reading) if (r.choice) defaults[r.choice.id] = r.choice.default;
  return unit.test.items.filter((x) => !x.ifChoice || (choices[x.ifChoice[0]] || defaults[x.ifChoice[0]]) === x.ifChoice[1]);
}

// The reading set for a unit, as a flat list of readable items, taking
// account of the student's choice where the syllabus offers alternatives.
export function unitReading(unit, choices = {}) {
  const out = [];
  for (const r of unit.reading) {
    if (r.choice && (choices[r.choice.id] || r.choice.default) !== r.choice.option) continue;
    if (omitted(r, choices)) continue;
    for (const item of r.items) out.push({ ...item, work: r.work });
  }
  return out;
}

// An item is one line of the reading list. It is either a single thing to
// read (key) or several parts of a book, each ticked off on its own
// (parts: [[key, pages], ...]).
export function itemKeys(item) {
  return item.parts ? item.parts.map((x) => x[0]) : [item.key];
}

export function itemDone(item, read) {
  return itemKeys(item).every((k) => read[k]);
}

export function itemPagesRead(item, read) {
  if (!item.parts) return read[item.key] ? item.pages : 0;
  if (itemDone(item, read)) return item.pages;
  const sum = item.parts.reduce((a, [key, pages]) => a + (read[key] ? pages : 0), 0);
  return Math.min(item.pages, Math.round(sum));
}

export function unitPages(unit, choices) {
  return unitReading(unit, choices).reduce((a, x) => a + x.pages, 0);
}

export function pagesRead(unit, read, choices) {
  return unitReading(unit, choices).reduce((a, x) => a + itemPagesRead(x, read), 0);
}

// How many of a week's pages are due by the end of `day`. The pages are
// shared out evenly over the days of the week, the odd pages going to the
// first days, so that a day's share is never less than the "pages a day"
// the front page gives.
export function dueBy(pages, c, day) {
  if (day > c.to) return pages;
  if (day < c.from) return 0;
  const len = daysBetween(c.from, c.to) + 1;
  const elapsed = daysBetween(c.from, day) + 1;
  return elapsed * Math.floor(pages / len) + Math.min(elapsed, pages % len);
}

// Where the reading stands on `day`.
//   due, dueBefore: pages due by the end of the day, and by the end of the day before
//   behind: pages that were due by the end of the day before and are unread.
//     They are counted week by week: pages read ahead of their day in one
//     week do not pay off what is overdue in another, so this is never less
//     than `earlier`, and is equal to it on the first day of a week.
//   ahead: when nothing is overdue, pages read beyond what is due by the end of the day
//   forToday: when neither behind nor ahead, what is left of the day's share
//   earlier: unread pages of the weeks that have ended
export function reckoning(course, enrolled, read, choices, day) {
  const cal = calendar(course, enrolled);
  const dayBefore = addDays(day, -1);
  let due = 0;
  let dueBefore = 0;
  let done = 0;
  let total = 0;
  let behind = 0;
  let earlier = 0;
  course.units.forEach((u, i) => {
    const pages = unitPages(u, choices);
    const got = pagesRead(u, read, choices);
    const before = dueBy(pages, cal[i], dayBefore);
    total += pages;
    done += got;
    due += dueBy(pages, cal[i], day);
    dueBefore += before;
    behind += Math.max(0, before - got);
    if (day > cal[i].to) earlier += pages - got;
  });
  const ahead = behind ? 0 : Math.max(0, done - due);
  return { due, dueBefore, done, total, behind, ahead, forToday: behind || ahead ? 0 : due - done, earlier };
}

export function perDay(course, enrolled, choices) {
  const total = course.units.reduce((a, u) => a + unitPages(u, choices), 0);
  return Math.round(total / termDays(course, enrolled.pace));
}
