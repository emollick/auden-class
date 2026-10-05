import test from 'node:test';
import assert from 'node:assert/strict';

// A browser's storage, small enough to fail on demand. It holds a record
// saved before the "mark all" box began to remember the marks it added.
const kept = { english135: JSON.stringify({ v: 1, enrolled: { start: '2026-10-02', pace: 'semester' }, read: { 'dante/inf-01': '2026-10-02' }, heart: {}, final: { sitting: null, sittings: [] } }) };
let full = false;
globalThis.localStorage = {
  getItem: (k) => (k in kept ? kept[k] : null),
  setItem: (k, v) => {
    if (full) throw new Error('the storage is full');
    kept[k] = v;
  },
};
const store = await import('../site/js/lib/store.js');

test('an older record loads, and gains the marks of the "mark all" box', () => {
  const s = store.get();
  assert.deepEqual(s.read, { 'dante/inf-01': '2026-10-02' });
  assert.deepEqual(s.ticked, {});
});

test('the store tells when saving fails, and when it works again', () => {
  const told = [];
  store.onSaving((ok) => told.push(ok));
  store.update((st) => { st.read['dante/inf-02'] = '2026-10-02'; });
  store.flush();
  // nothing to tell while saving works
  assert.equal(store.canStore(), true);
  assert.deepEqual(told, []);
  full = true;
  store.update((st) => { st.read['dante/inf-03'] = '2026-10-02'; });
  store.flush();
  assert.equal(store.canStore(), false);
  assert.deepEqual(told, [false]);
  // it goes on failing: told once only
  store.flush();
  assert.deepEqual(told, [false]);
  // the next save that succeeds is told too, and holds what could not be saved before
  full = false;
  store.flush();
  assert.equal(store.canStore(), true);
  assert.deepEqual(told, [false, true]);
  assert.equal(JSON.parse(kept.english135).read['dante/inf-03'], '2026-10-02');
});
