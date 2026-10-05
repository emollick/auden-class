// The course as data: units, works, pieces, tests, questions.

import { loadData } from './texts.js';

// The versions of Dante a student may learn the cantos in.
export const CANTO_VERSIONS = [{ id: 'temple', prose: true }, { id: 'longfellow' }, { id: 'italian' }];

// The four cantos Donald Pearce names as set for the examination.
export const SET_CANTOS = ['inf-03', 'inf-05', 'pur-28', 'par-33'];
export const EXAM_CANTOS = 5;

// The examination lasts three hours from the moment its clock is started.
// When they are up, the sitting stays open until its result is asked for.
export const EXAM_MS = 3 * 60 * 60 * 1000;
export function examOver(state) {
  const sitting = state.final.sitting;
  return !!sitting && sitting.startedAt + EXAM_MS <= Date.now();
}

const ROMAN = [[100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
export function toRoman(n) {
  let out = '';
  for (const [v, s] of ROMAN) while (n >= v) { out += s; n -= v; }
  return out;
}

let strings = {};

export async function loadCourse() {
  const [course, ui] = await Promise.all([loadData('course'), loadData('ui')]);
  strings = ui;
  return course;
}

// The words on the page. `{n} line|{n} lines` chooses by vars.n.
export function t(key, vars) {
  let s = strings[key];
  if (s === undefined) {
    console.warn('missing string', key);
    return `[${key}]`;
  }
  if (Array.isArray(s)) s = s.join(' ');
  return fill(s, vars);
}
t.list = (key, vars) => {
  const s = strings[key];
  if (s === undefined) {
    console.warn('missing string', key);
    return [`[${key}]`];
  }
  return (Array.isArray(s) ? s : [s]).map((x) => fill(x, vars));
};
t.has = (key) => strings[key] !== undefined;

function fill(s, vars) {
  if (s.includes('|') && vars && typeof vars.n === 'number') {
    const [one, many] = s.split('|');
    s = vars.n === 1 ? one : many;
  }
  if (!vars) return s;
  return s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined ? String(vars[k]) : m));
}

const CANTICA = { inf: 'Inferno', pur: 'Purgatorio', par: 'Paradiso' };
const ORDER = { inf: 0, pur: 1, par: 2 };

export function isCanto(partId) {
  return /^(inf|pur|par)-\d\d$/.test(partId);
}

export function cantoTitle(partId) {
  return `*${CANTICA[partId.slice(0, 3)]}* ${toRoman(Number(partId.slice(4)))}`;
}

function cantoRank(partId) {
  return ORDER[partId.slice(0, 3)] * 100 + Number(partId.slice(4));
}

export function cantoVersion(state) {
  return CANTO_VERSIONS.some((v) => v.id === state.cantoVersion) ? state.cantoVersion : 'temple';
}

export function cantoPiece(version, partId, course) {
  const v = CANTO_VERSIONS.find((x) => x.id === version);
  return {
    id: `canto:${version}:${partId}`,
    kind: 'canto',
    canto: partId,
    version,
    title: cantoTitle(partId),
    cite: t(`cantos.cite.${version}`),
    text: `dante-${version}`,
    part: partId,
    prose: !!v.prose,
    lineCount: course.cantoLines?.[partId],
    unverified: version === 'temple' && !(course.cantosVerified || []).includes(partId),
  };
}

// The student's cantos in the order they are learned through the term:
// the two from the Inferno, then the one the student chose, then the
// Purgatorio canto, and the end of the Paradiso last.
export function learningOrder(state) {
  const fifth = state.fifth && isCanto(state.fifth) && !SET_CANTOS.includes(state.fifth) ? state.fifth : null;
  return ['inf-03', 'inf-05', fifth, 'pur-28', 'par-33'];
}

// The same cantos in the order of the poem, as they are written at the examination.
export function examCantos(state) {
  return learningOrder(state).filter(Boolean).sort((a, b) => cantoRank(a) - cantoRank(b));
}

export function cantoPieces(state, course) {
  const version = cantoVersion(state);
  return examCantos(state).map((partId) => cantoPiece(version, partId, course));
}

export function allPieces(course) {
  return course.pieces || [];
}

// Lines the student kept while reading can be learned as any piece is.
// One paragraph of prose is a single long line; verse keeps its lines.
export function ownPiece(k) {
  const lines = [];
  for (const raw of String(k.words || '').split('\n')) {
    const l = raw.trim();
    if (l === '' && (!lines.length || lines[lines.length - 1] === '')) continue;
    lines.push(l);
  }
  while (lines.length && lines[lines.length - 1] === '') lines.pop();
  const count = lines.filter(Boolean).length;
  const first = (lines.find(Boolean) || '').replace(/[*[\]]/g, '');
  return {
    id: `own:${k.id}`,
    kind: 'own',
    own: true,
    title: first.length > 52 ? `${first.slice(0, first.lastIndexOf(' ', 52))} …` : first,
    cite: String(k.from || '').replace(/\*([^*]+)\*/g, '$1'),
    lines,
    prose: count === 1,
    lineCount: count,
  };
}

export function ownPieces(state) {
  return (state.kept || []).filter((k) => k.id && String(k.words || '').trim()).map(ownPiece);
}

export function getPiece(id, state, course) {
  if (id.startsWith('own:')) return ownPieces(state).find((x) => x.id === id) || null;
  if (id.startsWith('canto:')) {
    const [, version, partId] = id.split(':');
    if (!CANTO_VERSIONS.some((v) => v.id === version) || !isCanto(partId || '')) return null;
    // "inf-99" has the form of a canto, and the poem has no such canto.
    if (course.cantoLines && course.cantoLines[partId] === undefined) return null;
    return cantoPiece(version, partId, course);
  }
  return (course.pieces || []).find((x) => x.id === id) || null;
}

export function unitByNumber(course, n) {
  return course.units.find((u) => u.n === Number(n)) || null;
}

export function work(course, id) {
  return course.works.find((w) => w.id === id) || null;
}
