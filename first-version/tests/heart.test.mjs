import test from 'node:test';
import assert from 'node:assert/strict';
import { standing, sections, numbering, stretches, weekPortion, stretchesDue, cleanThrough, lineReached, passedOn } from '../site/js/lib/heart.js';

test('nothing attempted', () => {
  assert.equal(standing([], '2026-10-02').state, 'new');
  assert.equal(standing(undefined, '2026-10-02').state, 'new');
});

test('attempted but never clean', () => {
  const s = standing([{ date: '2026-10-02', ok: false }], '2026-10-02');
  assert.equal(s.state, 'learning');
  assert.equal(s.known, false);
});

test('once is not known; the second day makes it known', () => {
  const once = standing([{ date: '2026-10-02', ok: true }], '2026-10-02');
  assert.equal(once.state, 'once');
  assert.equal(once.due, '2026-10-03');
  const sameDay = standing([{ date: '2026-10-02', ok: true }, { date: '2026-10-02', ok: true }], '2026-10-02');
  assert.equal(sameDay.known, false);
  const twice = standing([{ date: '2026-10-02', ok: true }, { date: '2026-10-03', ok: true }], '2026-10-03');
  assert.equal(twice.known, true);
  assert.equal(twice.state, 'known');
  assert.equal(twice.due, '2026-10-06');
});

test('a known piece comes due again', () => {
  const a = [{ date: '2026-10-02', ok: true }, { date: '2026-10-03', ok: true }];
  assert.equal(standing(a, '2026-10-05').state, 'known');
  assert.equal(standing(a, '2026-10-06').state, 'due');
});

test('intervals lengthen', () => {
  const a = ['2026-10-02', '2026-10-03', '2026-10-06', '2026-10-13'].map((date) => ({ date, ok: true }));
  assert.equal(standing(a, '2026-10-13').due, '2026-11-03');
});

test('a failed recital after a good one puts the piece back', () => {
  const a = [{ date: '2026-10-02', ok: true }, { date: '2026-10-03', ok: true }, { date: '2026-10-06', ok: false }];
  const s = standing(a, '2026-10-06');
  assert.equal(s.state, 'due');
  assert.equal(s.known, true);
});

test('sections follow the stanzas', () => {
  // five tercets and a closing line, as at the end of a canto
  const lines = [];
  for (let i = 0; i < 5; i++) { lines.push('a', 'b', 'c', ''); }
  lines.push('z');
  const s = sections(lines);
  assert.deepEqual(s, [{ from: 0, to: 6 }, { from: 8, to: 14 }, { from: 16, to: 20 }]);
});

test('a long paragraph of blank verse is broken up', () => {
  const lines = Array.from({ length: 40 }, () => 'x');
  const s = sections(lines);
  assert.ok(s.every((x) => x.to - x.from + 1 <= 9));
  assert.equal(s[0].from, 0);
  assert.equal(s[s.length - 1].to, 39);
  for (let i = 1; i < s.length; i++) assert.equal(s[i].from, s[i - 1].to + 1);
});

test('numbering skips the gaps', () => {
  assert.deepEqual(numbering(['a', 'b', '', 'c'], 10), [10, 11, null, 12]);
});

test('prose is learned three or four paragraphs at a time', () => {
  const paras = Array.from({ length: 46 }, (_, i) => `paragraph ${i}`);
  const st = stretches(paras, true);
  assert.ok(st.every((x) => x.to - x.from + 1 >= 3 && x.to - x.from + 1 <= 4));
  assert.equal(st[0].from, 0);
  assert.equal(st[st.length - 1].to, 45);
});

test('fifteen weeks, five cantos: three weeks each', () => {
  assert.deepEqual(weekPortion(15, 0), { slot: 0, share: 1 / 3 });
  assert.deepEqual(weekPortion(15, 2), { slot: 0, share: 1 });
  assert.equal(weekPortion(15, 3).slot, 1);
  assert.equal(weekPortion(15, 14).slot, 4);
  assert.equal(weekPortion(15, 14).share, 1);
  assert.equal(stretchesDue(15, 1 / 3), 5);
  assert.equal(stretchesDue(14, 1 / 3), 5);
  assert.equal(stretchesDue(15, 1), 15);
});

test('clean stretches count from the beginning', () => {
  assert.equal(cleanThrough(undefined, 10), 0);
  assert.equal(cleanThrough({ clean: { 0: 'd', 1: 'd', 3: 'd' } }, 10), 2);
  assert.equal(cleanThrough({ attempts: [{ ok: true }] }, 10), 10);
});

test('the line a number of stretches reaches', () => {
  // verse: five tercets and a closing line, in stretches of 6, 6 and 4 lines
  const lines = [];
  for (let i = 0; i < 5; i++) { lines.push('a', 'b', 'c', ''); }
  lines.push('z');
  const secs = sections(lines);
  assert.equal(lineReached(lines, secs, 0, false), 0);
  assert.equal(lineReached(lines, secs, 1, false), 6);
  assert.equal(lineReached(lines, secs, 2, false), 12);
  assert.equal(lineReached(lines, secs, 3, false), 16);
  assert.equal(lineReached(lines, secs, 9, false), 16);
  // prose: a paragraph to each tercet, the last paragraph a single line
  const paras = Array.from({ length: 46 }, (_, i) => `paragraph ${i}`);
  const st = stretches(paras, true);
  assert.equal(lineReached(paras, st, 2, true, 136), (st[1].to + 1) * 3);
  assert.equal(lineReached(paras, st, st.length, true, 136), 136);
  // prose as the site holds it: the closing line stands in the last paragraph with the tercet before it
  const held = Array.from({ length: 45 }, (_, i) => `paragraph ${i}`);
  const hs = stretches(held, true);
  assert.equal(lineReached(held, hs, hs.length - 1, true, 136), (hs[hs.length - 2].to + 1) * 3);
  assert.equal(lineReached(held, hs, hs.length, true, 136), 136);
});

test('the examination is passed when every canto of a sitting passes', () => {
  assert.equal(passedOn([]), null);
  assert.equal(passedOn(undefined), null);
  assert.equal(passedOn([{ date: '2026-11-05', cantos: 5, passed: 4 }]), null);
  assert.equal(passedOn([{ date: '2026-11-05', cantos: 5, passed: 4 }, { date: '2026-11-12', cantos: 5, passed: 5 }, { date: '2026-11-20', cantos: 5, passed: 5 }]), '2026-11-12');
});
