import test from 'node:test';
import assert from 'node:assert/strict';
import { typeset } from '../build/lib/typeset.mjs';

test('double hyphens become dashes', () => {
  assert.equal(typeset('He stopped--and went on.'), 'He stopped—and went on.');
  assert.equal(typeset('Mr. ---- of Boston'), 'Mr. —— of Boston');
  assert.equal(typeset('well-known'), 'well-known');
});

test('double marks open and close', () => {
  assert.equal(typeset('"Go," he said, "and come back."'), '“Go,” he said, “and come back.”');
  assert.equal(typeset('He said--"Go"--and went.'), 'He said—“Go”—and went.');
  assert.equal(typeset('("So it is")'), '(“So it is”)');
  assert.equal(typeset('"Is it so?" "It is."'), '“Is it so?” “It is.”');
  assert.equal(typeset('A speech that runs on."'), 'A speech that runs on.”');
});

test('apostrophes inside and after words', () => {
  assert.equal(typeset("don't, o'er, tho' and the boys' books"), 'don’t, o’er, tho’ and the boys’ books');
});

test('a single mark before a word opens a quotation unless the word is elided', () => {
  assert.equal(typeset("He said, 'I was,' and no more."), 'He said, ‘I was,’ and no more.');
  assert.equal(typeset("'Tis true: 'neath the moon 't is so."), '’Tis true: ’neath the moon ’t is so.');
  assert.equal(typeset("\"'O brothers!' I said, 'who came here.'\""), '“‘O brothers!’ I said, ‘who came here.’”');
});

test('a text may be set as having apostrophes only, or quotations only', () => {
  assert.equal(typeset("'Pray you, 'fore heaven", 'apostrophes'), '’Pray you, ’fore heaven');
  assert.equal(typeset("look under 'T.' or 'B.'", 'quotes'), 'look under ‘T.’ or ‘B.’');
});

test('printers’ marks already there are left alone', () => {
  const s = '“Go,” he said—‘now’—and don’t wait.';
  assert.equal(typeset(s), s);
});
