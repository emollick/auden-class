import test from 'node:test';
import assert from 'node:assert/strict';
import { loadIndex, loadPart, Missing } from '../site/js/lib/texts.js';

// What the server sends back for each address, and how often it was asked.
function serve(answers) {
  const asked = [];
  globalThis.fetch = async (url) => {
    asked.push(url);
    const a = answers[url];
    if (a === undefined) return { ok: false, status: 404, json: async () => { throw new Error('not JSON'); } };
    if (a instanceof Error) throw a;
    if (typeof a === 'number') return { ok: false, status: a, json: async () => ({}) };
    return { ok: true, status: 200, json: async () => a };
  };
  return asked;
}

test('a part is fetched once and kept', async () => {
  const asked = serve({ 'data/texts/book-a/c1.json': { blocks: [{ k: 'p', text: 'One.' }] } });
  const a = await loadPart('book-a', 'c1');
  const b = await loadPart('book-a', 'c1');
  assert.equal(a.blocks[0].text, 'One.');
  assert.equal(a, b);
  assert.deepEqual(asked, ['data/texts/book-a/c1.json']);
});

test('a file the site does not have is Missing', async () => {
  const asked = serve({});
  await assert.rejects(loadPart('book-b', 'c999'), Missing);
  await assert.rejects(loadIndex('no-such-book'), Missing);
  // and it is asked for again the next time, not remembered as missing
  await assert.rejects(loadPart('book-b', 'c999'), Missing);
  assert.equal(asked.filter((u) => u === 'data/texts/book-b/c999.json').length, 2);
});

test('a fetch that failed is an error of the ordinary kind, and is tried again', async () => {
  const answers = { 'data/texts/book-c/c1.json': 500, 'data/texts/book-c/c2.json': new TypeError('Failed to fetch') };
  const asked = serve(answers);
  for (const part of ['c1', 'c2']) {
    await assert.rejects(loadPart('book-c', part), (err) => err instanceof Error && !(err instanceof Missing));
  }
  // the connection comes back
  answers['data/texts/book-c/c2.json'] = { blocks: [] };
  assert.deepEqual(await loadPart('book-c', 'c2'), { blocks: [] });
  assert.equal(asked.filter((u) => u === 'data/texts/book-c/c2.json').length, 2);
});
