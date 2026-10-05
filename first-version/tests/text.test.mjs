import test from 'node:test';
import assert from 'node:assert/strict';
import { normWord, align, compare, passes, firstLetters, answerMatches, allowedSlips, countWords, comparedWords, reach, written } from '../site/js/lib/text.js';

const REF = [
  'The quick brown fox jumps over',
  'the lazy dog; and mid-way down',
  'the lane it stops.',
];

test('normWord folds case, accents and punctuation', () => {
  assert.equal(normWord('Città,'), 'citta');
  assert.equal(normWord("o'er"), 'oer');
  assert.equal(normWord('Cœur'), 'coeur');
  assert.equal(normWord('—'), '');
});

test('a faithful copy has no slips', () => {
  const r = compare(REF, 'the quick brown fox jumps over the lazy dog and mid way down the lane it stops');
  assert.equal(r.slips, 0);
  assert.equal(r.exactLines, 3);
  assert.equal(r.totalLines, 3);
  assert.ok(r.lines.every((l) => l.exact));
});

test('punctuation and capitals do not matter', () => {
  const r = compare(REF, 'THE QUICK, BROWN FOX: jumps over!\nThe lazy dog and midway down\nthe lane it stops');
  assert.equal(r.slips, 0);
});

test('a wrong word is one slip and is shown with the right word', () => {
  const r = compare(REF, 'the quick red fox jumps over the lazy dog and mid-way down the lane it stops');
  assert.equal(r.slips, 1);
  assert.equal(r.exactLines, 2);
  const wrong = r.lines[0].parts.find((p) => p.kind === 'wrong');
  assert.equal(wrong.text, 'brown');
  assert.equal(wrong.typed, 'red');
});

test('a missing word is one slip', () => {
  const r = compare(REF, 'the quick brown fox jumps over the dog and mid-way down the lane it stops');
  assert.equal(r.slips, 1);
  const missing = r.lines[1].parts.find((p) => p.kind === 'missing');
  assert.equal(missing.text, 'lazy');
});

test('an added word is one slip', () => {
  const r = compare(REF, 'the quick brown fox jumps right over the lazy dog and mid-way down the lane it stops');
  assert.equal(r.slips, 1);
  const extra = r.lines.flatMap((l) => l.parts).find((p) => p.kind === 'extra');
  assert.equal(extra.text, 'right');
});

test('a dropped line costs every word in it', () => {
  const r = compare(REF, 'the quick brown fox jumps over the lane it stops');
  assert.equal(r.slips, 6);
  assert.equal(r.exactLines, 2);
});

test('trailing extra words are counted', () => {
  const r = compare(REF, 'the quick brown fox jumps over the lazy dog and mid-way down the lane it stops for good');
  assert.equal(r.slips, 2);
});

test('dashes separate words', () => {
  const r = compare(['Alone—alone—all alone'], 'alone alone all alone');
  assert.equal(r.slips, 0);
});

test('an empty page does not pass, however short the piece', () => {
  const r = compare(REF, '');
  assert.equal(passes(r), false);
  const r2 = compare(['One line only here'], '');
  assert.equal(passes(r2), false);
});

test('the rule: one word in a hundred', () => {
  assert.equal(allowedSlips(99), 0);
  assert.equal(allowedSlips(100), 1);
  assert.equal(allowedSlips(1249), 12);
  // 20 lines of six words: 120 words, one slip allowed
  const lines = Array.from({ length: 20 }, (_, i) => `line number ${i} goes here now`);
  const typedOne = lines.join('\n').replace('number 3 ', 'numbers 3 ');
  assert.equal(passes(compare(lines, typedOne)), true);
  const typedTwo = typedOne.replace('number 7 ', 'numbers 7 ');
  assert.equal(passes(compare(lines, typedTwo)), false);
});

test('prose paragraphs compare as lines do', () => {
  const paras = ['The road went down between two walls of rock; beyond the second wall the river could be heard.', 'Nobody spoke until the bridge.'];
  const r = compare(paras, 'the road went down between two walls of rock beyond the second wall river could be heard nobody spoke until the bridge');
  assert.equal(r.slips, 1);
  assert.equal(r.exactLines, 1);
  assert.equal(r.refWords, 23);
});

test('align handles long inputs', () => {
  const a = Array.from({ length: 1200 }, (_, i) => 'w' + (i % 97));
  const b = a.slice();
  b.splice(500, 1);
  b[900] = 'zzz';
  const { distance } = align(a, b);
  assert.equal(distance, 2);
});

test('first letters keep punctuation', () => {
  assert.equal(firstLetters('"Through me the way is," said he—'), '"T m t w i," s h—');
  assert.equal(firstLetters("O'er hill, o'er dale"), 'O h, o d');
});

test('short answers', () => {
  assert.ok(answerMatches('The Rachel', ['Rachel']));
  assert.ok(answerMatches('rachel.', ['Rachel']));
  assert.ok(answerMatches('the ship Rachel', ['Rachel']));
  assert.ok(!answerMatches('Pequod', ['Rachel']));
  assert.ok(!answerMatches('', ['Rachel']));
  assert.ok(answerMatches('St. Augustine', ['Augustine']));
  assert.ok(answerMatches('nine', ['nine', '9']));
  assert.ok(!answerMatches('it was either the Rachel or the Pequod or the Delight I think', ['Rachel']));
});

test('countWords', () => {
  assert.equal(countWords(''), 0);
  assert.equal(countWords('  one two\nthree '), 3);
});

// British and American spellings, and a few old ones, count as one word.
const SAME = [
  ['colour', 'color'], ['Honoured', 'honored'], ['dishonour', 'dishonor'], ['neighbouring', 'neighboring'],
  ['enamoured', 'enamored'], ['clangour', 'clangor'], ['saviour', 'savior'], ['savour', 'savor'],
  ['centre', 'center'], ['centres', 'centers'], ['centred', 'centered'], ['sepulchre', 'sepulcher'],
  ['mitre', 'miter'], ['mitred', 'mitered'], ['sombre', 'somber'], ['meagre', 'meager'],
  ['defence', 'defense'], ['offences', 'offenses'], ['licence', 'license'],
  ['recognise', 'recognize'], ['unrecognised', 'unrecognized'], ['unbaptised', 'unbaptized'],
  ['harmonised', 'harmonized'], ['organisation', 'organization'], ['philosophising', 'philosophizing'],
  ['practise', 'practice'], ['practised', 'practiced'],
  ['marvelled', 'marveled'], ['marvellous', 'marvelous'], ['marvellest', 'marvelest'], ['travelling', 'traveling'],
  ['dishevelled', 'disheveled'], ['remodelled', 'remodeled'], ['untrammelled', 'untrammeled'],
  ['embowelled', 'emboweled'], ['enamelled', 'enameled'], ['cancelled', 'canceled'],
  ['equalled', 'equaled'], ['unequalled', 'unequaled'], ['signalling', 'signaling'], ['marshalling', 'marshaling'],
  ['worshipped', 'worshiped'],
  ['grey', 'gray'], ['greyhounds', 'grayhounds'], ['plough', 'plow'], ['ploughman', 'plowman'],
  ['judgement', 'judgment'], ['fulfil', 'fulfill'], ['fulfils', 'fulfills'], ['fulfilment', 'fulfillment'],
  ['distil', 'distill'], ['distils', 'distills'], ['instil', 'instill'], ['enthral', 'enthrall'],
  ['skilful', 'skillful'], ['wilful', 'willful'],
  ['shew', 'show'], ['shewn', 'shown'], ['shewest', 'showest'], ['sheweth', 'showeth'],
  ['burthen', 'burden'], ['ecstacy', 'ecstasy'], ['connexion', 'connection'],
  ['mould', 'mold'], ['mouldeth', 'moldeth'], ['smouldering', 'smoldering'], ['waggon', 'wagon'],
  ['to-morrow', 'tomorrow'],
  ['baptisers', 'baptizers'], ['bestialised', 'bestialized'], ['subtilises', 'subtilizes'],
  ['moulted', 'molted'], ['foetus', 'fetus'], ['nought', 'naught'], ['behoves', 'behooves'], ['behoveth', 'behooveth'],
  ['draught', 'draft'], ['sulphur', 'sulfur'], ['sulphurous', 'sulfurous'], ['enquire', 'inquire'], ['enquired', 'inquired'],
];

// Words the rules above must leave alone, each with a misspelling that must stay wrong.
const APART = [
  ['hour', 'hor'], ['four', 'for'], ['your', 'yor'], ['pour', 'por'], ['devour', 'devor'], ['paramour', 'paramor'],
  ['called', 'caled'], ['recalled', 'recaled'], ['compelled', 'compeled'], ['dwelling', 'dweling'],
  ['fulfilled', 'fulfiled'], ['willed', 'wiled'], ['still', 'stil'], ['enamel', 'enamell'],
  ['paradise', 'paradize'], ['wise', 'wize'], ['praise', 'praize'], ['promise', 'promize'],
  ['acre', 'acer'], ['sacred', 'sacered'], ['hundred', 'hundered'],
  ['silence', 'silense'], ['hence', 'hense'], ['presence', 'presense'],
  ['naughty', 'noughty'], ['drought', 'draft'], ['require', 'requier'], ['behold', 'behoold'],
];

test('British, American and old spellings are one word', () => {
  for (const [a, b] of SAME) assert.equal(normWord(a), normWord(b), `${a} and ${b}`);
});

test('the spelling rules leave other words alone', () => {
  for (const [word, wrong] of APART) {
    assert.equal(normWord(word), word, word);
    assert.notEqual(normWord(word), normWord(wrong), `${word} and ${wrong}`);
  }
});

test('a recital in the other spelling has no slips', () => {
  const ref = ['The colour of the centre, grey and sombre,', 'he recognised, and marvelled at its splendour.'];
  const r = compare(ref, 'the color of the center gray and somber he recognized and marveled at its splendor');
  assert.equal(r.slips, 0);
  assert.equal(r.exactLines, 2);
});

test('how far a script reaches', () => {
  const ref = 'a b c d e f g h'.split(' ');
  assert.equal(reach(ref, []), 0);
  assert.equal(reach(ref, 'a b c'.split(' ')), 3);
  assert.equal(reach(ref, ref), 8);
  // a wrong last word stands for the word of the text in its place
  assert.equal(reach(ref, 'a b c x'.split(' ')), 4);
  // a word left out on the way does not shorten the reach
  assert.equal(reach(ref, 'a c d e'.split(' ')), 5);
});

test('a script that breaks off covers the lines it reaches', () => {
  const lines = ['One two three four', 'five six seven eight', '', 'nine ten eleven twelve', 'thirteen fourteen'];
  // nothing written
  assert.deepEqual(written(lines, ''), { lines: 0, restWords: 14 });
  // the first line and half the second: the stretch runs to the end of the second line
  const w = written(lines, 'one two three four five six');
  assert.deepEqual(w, { lines: 2, restWords: 6 });
  // within the stretch the slips are marked as usual
  const r = compare(lines.slice(0, w.lines), 'one two three four five six');
  assert.equal(r.slips, 2);
  assert.equal(r.lines[0].exact, true);
  assert.deepEqual(r.lines[1].parts.filter((x) => x.kind === 'missing').map((x) => x.text), ['seven', 'eight']);
  // the whole text written: nothing is left over, however many slips
  assert.deepEqual(written(lines, 'one two three four five six seven eight nine ten eleven twelve thirteen fourteen'), { lines: 5, restWords: 0 });
  assert.deepEqual(written(lines, 'one two three for five six seven eight nine ten eleven twelve thirteen fourteen'), { lines: 5, restWords: 0 });
  // the last line left off
  assert.deepEqual(written(lines, 'one two three four five six seven eight nine ten eleven twelve'), { lines: 4, restWords: 2 });
});

test('the count on the page is the count the comparison uses', () => {
  const lines = ['the day—and the night', '', 'a well-made thing -- so it seemed', 'last — line'];
  const n = comparedWords(lines);
  assert.equal(n, compare(lines, lines.join('\n')).refWords);
  assert.equal(n, 13);
  // counted by its spaces the same text gives another figure
  assert.equal(countWords(lines.join('\n')), 14);
  // what is typed in the box is counted the same way
  assert.equal(comparedWords(lines.join('\n')), compare(lines, lines.join('\n')).typedWords);
  assert.equal(comparedWords(''), 0);
  assert.equal(comparedWords('   \n '), 0);
});
