import test from 'node:test';
import assert from 'node:assert/strict';
import { calendar, position, reckoning, dueBy, unitPages, pagesRead, itemPagesRead, itemDone, termEnd, perDay } from '../site/js/lib/schedule.js';
import { span, monthDay, addDays } from '../site/js/lib/dates.js';

const course = {
  paces: [{ id: 'one', weeks: 3 }, { id: 'two', weeks: 6 }],
  units: [
    { n: 1, reading: [{ work: 'a', items: [{ key: 'a/1', pages: 70 }, { key: 'a/2', pages: 70 }] }] },
    { n: 2, reading: [
      { work: 'b', choice: { id: 'bc', option: 'b', default: 'b' }, items: [{ key: 'b/1', pages: 35 }] },
      { work: 'c', choice: { id: 'bc', option: 'c', default: 'b' }, items: [{ key: 'c/1', pages: 49 }] },
      { work: 'd', items: [{ key: 'd/1', pages: 105 }] },
    ] },
    { n: 3, reading: [{ work: 'e', items: [{ key: 'e/1', pages: 140 }] }] },
  ],
};
const enrolled = { start: '2026-10-05', pace: 'one' };

test('the calendar gives each unit an equal share', () => {
  const cal = calendar(course, enrolled);
  assert.deepEqual(cal, [
    { n: 1, from: '2026-10-05', to: '2026-10-11' },
    { n: 2, from: '2026-10-12', to: '2026-10-18' },
    { n: 3, from: '2026-10-19', to: '2026-10-25' },
  ]);
  assert.equal(termEnd(course, enrolled), '2026-10-25');
});

test('a slower pace stretches the same units', () => {
  const cal = calendar(course, { start: '2026-10-05', pace: 'two' });
  assert.equal(cal[0].to, '2026-10-18');
  assert.equal(cal[2].to, '2026-11-15');
});

test('position before, during and after', () => {
  assert.equal(position(course, enrolled, '2026-10-01').phase, 'before');
  const mid = position(course, enrolled, '2026-10-14');
  assert.equal(mid.phase, 'during');
  assert.equal(mid.unit, 2);
  assert.equal(mid.dayOfTerm, 10);
  assert.equal(mid.daysLeftInUnit, 4);
  assert.equal(position(course, enrolled, '2026-10-26').phase, 'after');
});

test('alternatives: only the chosen reading counts', () => {
  assert.equal(unitPages(course.units[1], {}), 140);
  assert.equal(unitPages(course.units[1], { bc: 'c' }), 154);
});

test('the reckoning', () => {
  // day 1 of unit 1: a seventh of 140 pages is the day's share, and none of it is overdue
  let r = reckoning(course, enrolled, {}, {}, '2026-10-05');
  assert.equal(r.due, 20);
  assert.equal(r.dueBefore, 0);
  assert.equal(r.done, 0);
  assert.equal(r.behind, 0);
  assert.equal(r.ahead, 0);
  assert.equal(r.forToday, 20);
  // day 2 with nothing read: yesterday's share is overdue
  r = reckoning(course, enrolled, {}, {}, '2026-10-06');
  assert.equal(r.behind, 20);
  assert.equal(r.forToday, 0);
  // last day of unit 1, half read: six days' pages were due by yesterday
  r = reckoning(course, enrolled, { 'a/1': '2026-10-08' }, {}, '2026-10-11');
  assert.equal(r.due, 140);
  assert.equal(r.done, 70);
  assert.equal(r.behind, 120 - 70);
  assert.equal(r.earlier, 0);
  // the day after: the unread half belongs to a week that has ended
  r = reckoning(course, enrolled, { 'a/1': '2026-10-08' }, {}, '2026-10-12');
  assert.equal(r.behind, 70);
  assert.equal(r.earlier, 70);
  // ahead: more read than is due by the end of today
  r = reckoning(course, enrolled, { 'a/1': 'x', 'a/2': 'x', 'b/1': 'x', 'd/1': 'x' }, {}, '2026-10-12');
  assert.equal(r.ahead, 140 - 20);
  assert.equal(r.behind, 0);
  assert.equal(r.forToday, 0);
  assert.equal(r.total, 420);
  // part of today's share read: what is left of it is for today
  r = reckoning(course, enrolled, { 'a/1': 'x', 'a/2': 'x', 'b/1': 'x' }, {}, '2026-10-13');
  assert.equal(r.behind, 0);
  assert.equal(r.ahead, 0);
  assert.equal(r.forToday, 180 - 175);
  // today's share read exactly: neither behind nor ahead, nothing left for today
  r = reckoning(course, enrolled, { 'a/1': 'x', 'a/2': 'x' }, {}, '2026-10-11');
  assert.deepEqual([r.behind, r.ahead, r.forToday], [0, 0, 0]);
  // half of unit 1 unread, and most of unit 2 read on its third day: the
  // pages read ahead in unit 2 do not pay off what is overdue in unit 1
  r = reckoning(course, enrolled, { 'a/1': 'x', 'd/1': 'x' }, {}, '2026-10-14');
  assert.equal(r.dueBefore, 140 + 40);
  assert.equal(r.done, 70 + 105);
  assert.deepEqual([r.behind, r.earlier, r.ahead, r.forToday], [70, 70, 0, 0]);
  // before the term nothing is due
  assert.equal(reckoning(course, enrolled, {}, {}, '2026-09-01').due, 0);
  // after the term everything is
  assert.equal(reckoning(course, enrolled, {}, {}, '2026-12-01').due, 420);
});

test('pages a day', () => {
  assert.equal(perDay(course, enrolled, {}), 20);
});

test('a book read part by part', () => {
  const item = { label: 'Book V', pages: 71, parts: [['k/b05c01', 9.6], ['k/b05c02', 10.2], ['k/b05c03', 51.3]] };
  assert.equal(itemPagesRead(item, {}), 0);
  assert.equal(itemPagesRead(item, { 'k/b05c01': '2026-10-05' }), 10);
  assert.equal(itemDone(item, { 'k/b05c01': 'x', 'k/b05c02': 'x' }), false);
  assert.equal(itemPagesRead(item, { 'k/b05c01': 'x', 'k/b05c02': 'x', 'k/b05c03': 'x' }), 71);
  const unit = { n: 1, reading: [{ work: 'k', items: [item] }] };
  assert.equal(pagesRead(unit, { 'k/b05c03': 'x' }, {}), 51);
});

test('a work marked Omit can be left out', () => {
  const unit = { n: 1, reading: [
    { work: 'blake', items: [{ key: 'blake/all', pages: 15 }] },
    { work: 'faust', omit: true, items: [{ key: 'faust/all', pages: 130 }] },
  ] };
  // Left out unless the student chooses to read it.
  assert.equal(unitPages(unit, {}), 15);
  assert.equal(unitPages(unit, { 'read:faust': true }), 145);
  assert.equal(pagesRead(unit, { 'faust/all': 'x' }, {}), 0);
  assert.equal(pagesRead(unit, { 'faust/all': 'x' }, { 'read:faust': true }), 130);
});

test('a week\u2019s pages are shared out evenly, the odd pages first', () => {
  const week = { from: '2026-10-02', to: '2026-10-08' };
  // 223 pages in seven days: six days of 32 and one of 31
  assert.deepEqual([0, 1, 2, 5, 6].map((d) => dueBy(223, week, addDays(week.from, d))), [32, 64, 96, 192, 223]);
  assert.equal(dueBy(223, week, '2026-10-01'), 0);
  assert.equal(dueBy(223, week, '2026-10-09'), 223);
  // a day's share is what the front page asks for: the pages left over the days left, rounded up
  for (const [pages, len] of [[223, 7], [223, 14], [223, 24], [285, 14], [319, 24], [5, 7]]) {
    const c = { from: '2026-10-02', to: addDays('2026-10-02', len - 1) };
    let before = 0;
    for (let d = 0; d < len; d++) {
      const due = dueBy(pages, c, addDays(c.from, d));
      assert.equal(due - before, Math.ceil((pages - before) / (len - d)), `${pages} pages, day ${d + 1} of ${len}`);
      before = due;
    }
    assert.equal(before, pages);
  }
});

// The pages of the fifteen weeks as the course stood on October 2, 2026,
// the day two testers enrolled students to try the arrears.
const WEEKS = [223, 247, 319, 291, 353, 285, 394, 303, 277, 322, 203, 227, 197, 283, 316];
const term = {
  paces: [{ id: 'semester', weeks: 15 }, { id: 'two', weeks: 30 }, { id: 'year', weeks: 52 }],
  units: WEEKS.map((pages, i) => ({ n: i + 1, reading: [{ work: 'w', items: [{ key: `w/${i + 1}`, pages }] }] })),
};

test('a student who enrolls ten weeks late and has read nothing', () => {
  const day = '2026-10-02';
  const start = '2026-07-24';
  // One semester: the first day of week 11. Ten weeks are over; none of week 11 is overdue.
  let r = reckoning(term, { start, pace: 'semester' }, {}, {}, day);
  assert.equal(position(term, { start, pace: 'semester' }, day).unit, 11);
  assert.equal(r.behind, 3014);
  assert.equal(r.earlier, 3014);
  assert.equal(r.due, 3043);
  assert.equal(r.total, 4240);
  // Two semesters: the first day of week 6. Five weeks are over.
  r = reckoning(term, { start, pace: 'two' }, {}, {}, day);
  assert.equal(position(term, { start, pace: 'two' }, day).unit, 6);
  assert.equal(r.behind, 1433);
  assert.equal(r.earlier, 1433);
  assert.equal(r.due, 1454);
  // A year: the twenty-third of the twenty-four days of week 3. Two weeks
  // are over (470 pages), and 22 days of week 3 were due by yesterday.
  r = reckoning(term, { start, pace: 'year' }, {}, {}, day);
  const pos = position(term, { start, pace: 'year' }, day);
  assert.deepEqual([pos.unit, pos.dayOfUnit, pos.unitDays], [3, 23, 24]);
  assert.equal(r.earlier, 470);
  assert.equal(r.behind, 470 + 293);
  assert.equal(r.due, 470 + 306);
  // In every case the overdue pages are those of the weeks that have ended
  // and the days of this week that have ended, and nothing is "for today".
  for (const pace of ['semester', 'two', 'year']) {
    const x = reckoning(term, { start, pace }, {}, {}, day);
    assert.equal(x.forToday, 0);
    assert.equal(x.ahead, 0);
    assert.ok(x.behind >= x.earlier);
  }
});

test('on the first day of the term nobody is behind', () => {
  const day = '2026-10-02';
  const want = { semester: 32, two: 16, year: 10 };
  for (const pace of ['semester', 'two', 'year']) {
    const r = reckoning(term, { start: day, pace }, {}, {}, day);
    assert.equal(r.behind, 0, pace);
    assert.equal(r.ahead, 0, pace);
    assert.equal(r.earlier, 0, pace);
    assert.equal(r.forToday, want[pace], pace);
    // the next day, with nothing read, the first day's share is overdue
    assert.equal(reckoning(term, { start: day, pace }, {}, {}, addDays(day, 1)).behind, want[pace], pace);
  }
  // before the term nobody is behind either
  assert.equal(reckoning(term, { start: day, pace: 'semester' }, {}, {}, '2026-09-30').behind, 0);
});

test('unread pages of the weeks that have ended are counted week by week', () => {
  const start = '2026-07-24';
  // weeks 1 and 2 read, the rest not; and all of week 11 read ahead of its days
  const read = { 'w/1': 'x', 'w/2': 'x', 'w/11': 'x' };
  let r = reckoning(term, { start, pace: 'semester' }, read, {}, '2026-10-02');
  assert.equal(r.earlier, 3014 - 223 - 247);
  // the header gives the same figure as the sentence about earlier weeks:
  // week 11, read before its days, takes nothing off what is overdue
  assert.equal(r.behind, r.earlier);
  // three days later, with week 11 untouched, two days of it are overdue as well
  r = reckoning(term, { start, pace: 'semester' }, { 'w/1': 'x', 'w/2': 'x' }, {}, '2026-10-04');
  assert.equal(r.earlier, 3014 - 223 - 247);
  assert.equal(r.behind, r.earlier + 29 + 29);
});

test('a day in a narrow column is given without its year', () => {
  assert.equal(monthDay('2026-09-30'), 'Sep 30');
  assert.equal(monthDay('1941-12-07'), 'Dec 7');
});

test('a range of dates gives a year once', () => {
  const y = new Date().getFullYear();
  assert.equal(span(`${y}-10-02`, `${y}-10-08`), 'Oct 2–8');
  assert.equal(span(`${y}-09-28`, `${y}-10-04`), 'Sep 28 to Oct 4');
  assert.equal(span(`${y}-12-25`, `${y + 1}-01-07`), `Dec 25 to Jan 7, ${y + 1}`);
  assert.equal(span(`${y + 1}-01-08`, `${y + 1}-01-21`), `Jan 8–21, ${y + 1}`);
  assert.equal(span(`${y + 1}-01-22`, `${y + 1}-02-04`), `Jan 22 to Feb 4, ${y + 1}`);
  assert.equal(span(`${y + 1}-12-25`, `${y + 2}-01-07`), `Dec 25, ${y + 1} to Jan 7, ${y + 2}`);
});
