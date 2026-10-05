import test from 'node:test';
import assert from 'node:assert/strict';
import { exportJSON, checkJSON, savedAt } from '../site/js/lib/store.js';

test('a saved copy records the moment it was made', () => {
  const before = Date.now();
  const text = exportJSON();
  const at = savedAt(text);
  assert.equal(typeof at, 'string');
  assert.ok(Date.parse(at) >= before && Date.parse(at) <= Date.now());
  // and it is still a copy that can be restored
  assert.ok('read' in checkJSON(text));
});

test('the moment is given as the copy has it', () => {
  assert.equal(savedAt('{"course":"English 135","exported":"2026-09-14T15:04:05.000Z","state":{"read":{},"heart":{}}}'), '2026-09-14T15:04:05.000Z');
});

test('a copy that does not say when it was made has no date', () => {
  // a bare state, which is also accepted as a copy
  assert.equal(savedAt('{"read":{},"heart":{}}'), null);
  assert.equal(savedAt('{"exported":"yesterday","state":{"read":{},"heart":{}}}'), null);
  assert.equal(savedAt('{"exported":20260914,"state":{"read":{},"heart":{}}}'), null);
  assert.equal(savedAt('null'), null);
  assert.equal(savedAt('not a file of ours'), null);
});
