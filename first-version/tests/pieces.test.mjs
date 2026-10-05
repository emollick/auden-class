import test from 'node:test';
import assert from 'node:assert/strict';
import { getPiece } from '../site/js/lib/course.js';

const course = { cantoLines: { 'inf-03': 136, 'par-33': 145 }, cantosVerified: ['inf-03'], pieces: [{ id: 'ode', title: 'An ode' }] };

test('a canto of the poem is a piece in each version', (ctx) => {
  ctx.mock.method(console, 'warn', () => {}); // the words of the page are not loaded here
  const piece = getPiece('canto:longfellow:inf-03', {}, course);
  assert.equal(piece.id, 'canto:longfellow:inf-03');
  assert.equal(piece.text, 'dante-longfellow');
  assert.equal(piece.part, 'inf-03');
  assert.equal(piece.lineCount, 136);
  assert.equal(getPiece('canto:temple:par-33', {}, course).prose, true);
});

test('an address with the form of a canto, for a canto the poem does not have, is no piece', () => {
  assert.equal(getPiece('canto:temple:inf-99', {}, course), null);
  assert.equal(getPiece('canto:italian:par-34', {}, course), null);
});

test('a version that does not exist, or no canto at all, is no piece', () => {
  assert.equal(getPiece('canto:cary:inf-03', {}, course), null);
  assert.equal(getPiece('canto:temple', {}, course), null);
  assert.equal(getPiece('canto:temple:inferno-3', {}, course), null);
});

test('a course that does not list its cantos lets any canto through, as before', (ctx) => {
  ctx.mock.method(console, 'warn', () => {});
  assert.equal(getPiece('canto:temple:inf-99', {}, { pieces: [] }).part, 'inf-99');
});

test('the other pieces are found by their ids', () => {
  assert.equal(getPiece('ode', {}, course).title, 'An ode');
  assert.equal(getPiece('elegy', {}, course), null);
});
