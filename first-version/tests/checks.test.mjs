import test from 'node:test';
import assert from 'node:assert/strict';
import { runChecks, allOk, textLines, wordCount, holdsWord, barredFound, endsWithPeriod, rhymeGroups } from '../site/js/lib/checks.js';
import { passageFor, versionSet, emendCount, emendDates, emendDone, emendFinish, emendReopen } from '../site/js/views/emend.js';

const one = (text, check, id) => runChecks(text, check).find((c) => c.id === id);
const lines = (n, line = 'a line of four') => Array.from({ length: n }, () => line).join('\n');

test('lines are counted without the blank ones', () => {
  assert.deepEqual(textLines('one\n\n  two  \r\n\nthree\n'), ['one', 'two', 'three']);
  assert.equal(one(lines(8), { lines: { exact: 8 } }, 'lines').ok, true);
  assert.equal(one(lines(7), { lines: { exact: 8 } }, 'lines').ok, false);
  assert.equal(one(lines(9), { lines: { exact: 8 } }, 'lines').have, 9);
  assert.equal(one(lines(11), { lines: { min: 12, max: 20 } }, 'lines').ok, false);
  assert.equal(one(lines(12), { lines: { min: 12, max: 20 } }, 'lines').ok, true);
  assert.equal(one(lines(21), { lines: { min: 12, max: 20 } }, 'lines').ok, false);
});

test('a dash does not make one word of two', () => {
  assert.equal(wordCount(''), 0);
  assert.equal(wordCount('  one two\nthree '), 3);
  assert.equal(wordCount('the sea—and the whale'), 5);
  assert.equal(wordCount('the sea — and the whale'), 5);
  assert.equal(wordCount('the sea--and the whale'), 5);
  assert.equal(wordCount('the sea – and the whale'), 5);
  assert.equal(wordCount('the sea - and the whale'), 5);
  assert.equal(wordCount('a well-known whale'), 3);
  assert.equal(wordCount('“Stop!” he said.'), 3);
  // a range of figures is one word, as it was before dashes were counted across
  assert.equal(wordCount('in 1840–41 he sailed'), 4);
  assert.equal(wordCount('chapters 1–9–a long way'), 5);
});

test('the limits on words hold at both ends, dashes or none', () => {
  const words = (n) => Array.from({ length: n }, () => 'word').join(' ');
  const check = { words: { min: 300, max: 600 } };
  assert.equal(one(words(299), check, 'words').ok, false);
  assert.equal(one(words(300), check, 'words').ok, true);
  assert.equal(one(words(600), check, 'words').ok, true);
  assert.equal(one(words(601), check, 'words').ok, false);
  // 150 pairs joined by dashes are 300 words
  const pairs = Array.from({ length: 150 }, () => 'whale—fish').join(' ');
  assert.equal(one(pairs, check, 'words').have, 300);
  assert.equal(one(pairs, check, 'words').ok, true);
});

test('a line over the limit is named, with its count', () => {
  const text = ['one two three', 'one two three four five six', 'one', 'a—b—c—d—e'].join('\n');
  const c = one(text, { each: { max: 4 } }, 'each');
  assert.equal(c.ok, false);
  assert.deepEqual(c.over, [{ line: 2, words: 6 }, { line: 4, words: 5 }]);
  assert.equal(c.have, 2);
  assert.equal(c.want, 4);
  const fine = one('one two\nthree four', { each: { max: 4 } }, 'each');
  assert.equal(fine.ok, true);
  assert.deepEqual(fine.over, []);
  // nothing written: no line is over, and nothing is passed either
  assert.equal(one('', { each: { max: 4 } }, 'each').ok, false);
});

test('the bar on a word covers its plural and its possessive', () => {
  const barred = ['eternity', 'infinite', 'wisdom', 'energy', 'desire', 'heaven', 'hell'];
  assert.deepEqual(barredFound('The road to Hell is paved.', barred), ['hell']);
  assert.deepEqual(barredFound('Seven hells and nine heavens.', barred), ['hells', 'heavens']);
  assert.deepEqual(barredFound('Hell’s gate, heaven\'s door, the heavens’ rim.', barred), ['hell’s', "heaven's", 'heavens']);
  assert.deepEqual(barredFound('Two eternities, three energies, four desires.', barred), ['eternities', 'energies', 'desires']);
  assert.deepEqual(barredFound('He said ‘hell’ twice: hell, hell.', barred), ['hell']);
  assert.deepEqual(barredFound('A hell-hound.', barred), ['hell']);
});

test('a word that only contains a barred word is allowed', () => {
  const barred = ['eternity', 'infinite', 'wisdom', 'energy', 'desire', 'heaven', 'hell'];
  assert.deepEqual(barredFound('Hello, shell, heavenly, desired, energetic, infinitely, Shelley, hellish.', barred), []);
  assert.equal(one('The shell is heavenly.', { forbid: barred }, 'forbid').ok, true);
  const c = one('No hells here.', { forbid: barred }, 'forbid');
  assert.equal(c.ok, false);
  assert.deepEqual(c.found, ['hells']);
});

test('a plural already on the list is found once', () => {
  const barred = ['miracle', 'miracles', 'mystery', 'mysteries', 'authority'];
  assert.deepEqual(barredFound('Miracles, mysteries and the authorities; a miracle.', barred), ['miracles', 'mysteries', 'authorities', 'miracle']);
});

test('a period at the end of a line', () => {
  assert.equal(endsWithPeriod('and so to bed.'), true);
  assert.equal(endsWithPeriod('“and so to bed.”'), true);
  assert.equal(endsWithPeriod('(and so to bed.) '), true);
  assert.equal(endsWithPeriod('and so to bed'), false);
  assert.equal(endsWithPeriod('and so to bed,'), false);
  assert.equal(endsWithPeriod('and so to bed?'), false);
  assert.equal(endsWithPeriod('and so to bed...'), false);
  assert.equal(endsWithPeriod('and so to bed…'), false);
  assert.equal(endsWithPeriod('and so to bed—'), false);
});

test('a line that must not end with a period', () => {
  const check = { lines: { exact: 8 }, noPeriod: [8] };
  const open = `${lines(7)}\nthe last line runs on`;
  const shut = `${lines(7)}\nthe last line stops.`;
  assert.equal(one(open, check, 'noPeriod').ok, true);
  assert.deepEqual(one(open, check, 'noPeriod').seen, [8]);
  assert.equal(allOk(open, check), true);
  assert.equal(one(shut, check, 'noPeriod').ok, false);
  assert.deepEqual(one(shut, check, 'noPeriod').found, [8]);
  assert.equal(allOk(shut, check), false);
  // blank lines between the stanzas do not move the count
  assert.equal(one(`${lines(4)}\n\n${lines(3)}\nthe last line stops.`, check, 'noPeriod').ok, false);
  // the line is not written yet: nothing to judge, and the count of lines still refuses
  const early = one(`${lines(4, 'a line.')}`, check, 'noPeriod');
  assert.deepEqual(early.seen, []);
  assert.equal(early.ok, true);
  assert.equal(allOk(lines(4, 'a line.'), check), false);
});

test('lines that must not all end with a period', () => {
  const check = { lines: { exact: 13 }, runOn: [3, 6, 9, 12] };
  const poem = (ends) => Array.from({ length: 13 }, (_, i) => `line ${i + 1} of the poem${ends.includes(i + 1) ? '.' : ','}`).join('\n');
  const closed = one(poem([3, 6, 9, 12, 13]), check, 'runOn');
  assert.equal(closed.ready, true);
  assert.equal(closed.ok, false);
  assert.deepEqual(closed.stopped, [3, 6, 9, 12]);
  assert.equal(allOk(poem([3, 6, 9, 12, 13]), check), false);
  const run = one(poem([3, 9, 12, 13]), check, 'runOn');
  assert.equal(run.ok, true);
  assert.deepEqual(run.stopped, [3, 9, 12]);
  assert.equal(allOk(poem([3, 9, 12, 13]), check), true);
  // blank lines between the tercets do not move the count
  const spaced = poem([3, 6, 9, 12, 13]).split('\n').map((l, i) => (i % 3 === 2 ? `${l}\n` : l)).join('\n');
  assert.equal(one(spaced, check, 'runOn').ok, false);
  // until the last of the lines is written there is nothing to judge
  const part = one('one.\ntwo.\nthree.\nfour.\nfive.\nsix.', check, 'runOn');
  assert.equal(part.ready, false);
  assert.equal(part.ok, true);
});

test('checks that are not switched on are not run', () => {
  assert.deepEqual(runChecks('one line.', { lines: { exact: 1 } }).map((c) => c.id), ['lines']);
  assert.deepEqual(runChecks('one line.', {}), []);
  assert.deepEqual(runChecks('one line.'), []);
});

test('nothing written passes nothing', () => {
  assert.equal(allOk('', { lines: { min: 0 } }), false);
  assert.equal(allOk('  \n ', { forbid: ['hell'] }), false);
});

test('a box of a chart is filled by a word of two letters or more', () => {
  assert.equal(holdsWord('The lustful.'), true);
  assert.equal(holdsWord('no'), true);
  assert.equal(holdsWord('été'), true);
  assert.equal(holdsWord('?'), false);
  assert.equal(holdsWord('x'), false);
  assert.equal(holdsWord('a b c'), false);
  assert.equal(holdsWord('12'), false);
  assert.equal(holdsWord('   '), false);
  assert.equal(holdsWord(''), false);
  assert.equal(holdsWord(undefined), false);
});

test('line endings are grouped by the letters of the scheme', () => {
  const text = 'the day\nthe night\nthe way\n\nthe light,\nthe sea.';
  assert.deepEqual(rhymeGroups(text, 'aba bc'), [
    { letter: 'a', words: ['day', 'way'] },
    { letter: 'b', words: ['night', 'light'] },
    { letter: 'c', words: ['sea'] },
  ]);
});

// ----- week 11: the record of the changed words, kept version by version -----

const passage = (wrong, right) => ({ lines: [['The ', 0, ' and the ', 1, ' and the ', 2, '.']], wrong, right });
const ex11 = { emend: { min: 2, versions: { temple: passage(['x', 'y', 'z'], ['a', 'b', 'c']), longfellow: passage(['p', 'q', 'r'], ['d', 'e', 'f']) } } };
const two = (v) => ({ [`${v}:0.1`]: 'a', [`${v}:0.4`]: 'wrong guess' });

test('the passage is the one for the version set for the cantos, or the one asked for', () => {
  assert.equal(versionSet(ex11, { cantoVersion: 'longfellow' }), 'longfellow');
  assert.equal(versionSet(ex11, {}), 'temple');
  // the exercise has no passage in the Italian: the first it has is used
  assert.equal(versionSet(ex11, { cantoVersion: 'italian' }), 'temple');
  assert.equal(passageFor(ex11, { cantoVersion: 'temple' }).id, 'temple');
  assert.equal(passageFor(ex11, { cantoVersion: 'temple' }, 'longfellow').id, 'longfellow');
  assert.deepEqual(passageFor(ex11, { cantoVersion: 'temple' }, 'longfellow').wrong, ['p', 'q', 'r']);
  assert.equal(passageFor(ex11, { cantoVersion: 'longfellow' }, 'no-such-version').id, 'longfellow');
  // an exercise with one passage and no versions
  assert.equal(passageFor({ emend: { min: 1, ...passage(['x'], ['a']) } }, {}).id, 'x');
});

test('only marks with a correction written are counted, and only those of the version', () => {
  const rec = { cells: { ...two('temple'), 'temple:0.7': '', 'temple:0.9': '   ', 'longfellow:0.1': 'd' } };
  assert.equal(emendCount({ id: 'temple' }, rec), 2);
  assert.equal(emendCount({ id: 'longfellow' }, rec), 1);
  assert.equal(emendCount({ id: 'italian' }, rec), 0);
  assert.equal(emendCount({ id: 'temple' }, {}), 0);
});

test('finishing in one version leaves the others open', () => {
  const rec = { text: '', cells: two('temple'), done: null };
  emendFinish(ex11, rec, 'temple', '2026-10-02');
  assert.deepEqual(rec.doneIn, { temple: '2026-10-02' });
  assert.equal(rec.done, '2026-10-02');
  assert.equal(emendDone(ex11, rec, 'temple'), '2026-10-02');
  assert.equal(emendDone(ex11, rec, 'longfellow'), null);
  // finished later in the other version: both stand, and `done` is the later day
  Object.assign(rec.cells, two('longfellow'));
  emendFinish(ex11, rec, 'longfellow', '2026-10-05');
  assert.deepEqual(rec.doneIn, { temple: '2026-10-02', longfellow: '2026-10-05' });
  assert.equal(rec.done, '2026-10-05');
});

test('reopening one version does not reopen the other', () => {
  const rec = { text: '', cells: { ...two('temple'), ...two('longfellow') }, done: '2026-10-05', doneIn: { temple: '2026-10-02', longfellow: '2026-10-05' } };
  emendReopen(ex11, rec, 'longfellow');
  assert.deepEqual(rec.doneIn, { temple: '2026-10-02' });
  // the rest of the site reads `done`: still finished, on the day that remains
  assert.equal(rec.done, '2026-10-02');
  assert.equal(emendDone(ex11, rec, 'longfellow'), null);
  emendReopen(ex11, rec, 'temple');
  assert.deepEqual(rec.doneIn, {});
  assert.equal(rec.done, null);
  // the marks are kept
  assert.equal(emendCount({ id: 'temple' }, rec), 2);
});

test('a record from before the versions were kept apart is read by its marks', () => {
  // finished in the prose version, with one correction drafted in Longfellow
  const old = { text: '', cells: { ...two('temple'), 'longfellow:0.1': 'd' }, done: '2026-09-20' };
  assert.deepEqual(emendDates(ex11, old), { temple: '2026-09-20' });
  assert.equal(emendDone(ex11, old, 'temple'), '2026-09-20');
  assert.equal(emendDone(ex11, old, 'longfellow'), null);
  // reading it changes nothing; finishing the other version writes the new shape and keeps the old day
  assert.equal(old.doneIn, undefined);
  old.cells['longfellow:0.4'] = 'e';
  emendFinish(ex11, old, 'longfellow', '2026-10-02');
  assert.deepEqual(old.doneIn, { temple: '2026-09-20', longfellow: '2026-10-02' });
  assert.equal(old.done, '2026-10-02');
  // odd records do not throw: a day and nothing else, nothing at all, a doneIn that is not a list of days
  assert.deepEqual(emendDates(ex11, { done: '2026-09-20' }), {});
  assert.deepEqual(emendDates(ex11, {}), {});
  assert.deepEqual(emendDates(ex11, { cells: two('temple'), done: null }), {});
  assert.equal(emendDone(ex11, { cells: two('temple'), done: '2026-09-20', doneIn: null }, 'temple'), '2026-09-20');
  assert.equal(emendDone(ex11, { cells: two('temple'), done: '2026-09-20', doneIn: 'temple' }, 'temple'), '2026-09-20');
  assert.equal(emendDone(ex11, { cells: two('temple'), done: '2026-09-20', doneIn: [] }, 'temple'), '2026-09-20');
});

test('a record that an older copy of the site has written to since is still read by `done`', () => {
  // reopened there: the day is gone and the versions are still named
  const reopened = { text: '', cells: two('temple'), done: null, doneIn: { temple: '2026-10-02' } };
  assert.deepEqual(emendDates(ex11, reopened), {});
  assert.equal(emendDone(ex11, reopened, 'temple'), null);
  // finishing it again here puts the two fields in step
  emendFinish(ex11, reopened, 'temple', '2026-10-03');
  assert.deepEqual(reopened.doneIn, { temple: '2026-10-03' });
  assert.equal(reopened.done, '2026-10-03');
  // finished there after being reopened here: a day, and no version named
  const finished = { text: '', cells: two('temple'), done: '2026-10-04', doneIn: {} };
  assert.deepEqual(emendDates(ex11, finished), { temple: '2026-10-04' });
});

test('an exercise of this kind with no versions keeps its one day', () => {
  const ex = { emend: { min: 1, ...passage(['x', 'y', 'z'], ['a', 'b', 'c']) } };
  const rec = { text: '', cells: { 'x:0.1': 'a' }, done: null };
  assert.deepEqual(emendDates(ex, rec), {});
  emendFinish(ex, rec, 'x', '2026-10-02');
  assert.equal(rec.done, '2026-10-02');
  assert.equal('doneIn' in rec, false);
  assert.equal(emendDone(ex, rec, 'x'), '2026-10-02');
  emendReopen(ex, rec, 'x');
  assert.equal(rec.done, null);
});
