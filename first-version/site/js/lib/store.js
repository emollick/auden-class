// Everything the student does is kept in this browser and nowhere else.

const KEY = 'english135';
const VERSION = 1;

function blank() {
  return {
    v: VERSION,
    enrolled: null, // { start: 'YYYY-MM-DD', pace: id of a pace }
    choices: {}, // alternative readings, and omitted works read anyway: { greek: 'antigone', 'read:faust': true }
    read: {}, // reading key -> date marked read
    ticked: {}, // the marks a "mark all" box added: first reading key of the book -> [keys]
    heart: {}, // pieceId -> { attempts: [{date, slips, words, lines, exact, ok}], section, clean: {stretch: date} }
    fifth: null, // the fifth canto for the examination, e.g. 'pur-01'
    cantoVersion: 'temple',
    words: {}, // exerciseId -> { answers: [], shown: date|null, note: '' }
    tests: {}, // testId -> { attempts: [{date, right, total, missed: []}] }
    answers: {}, // questionId -> { text, handedIn: date|null, reply: '' }
    making: {}, // exerciseId -> { text, cells, done: date|null, note }; week 11 adds doneIn: { version of the cantos: date }, and its done is set while any version is done
    final: { sitting: null, sittings: [] }, // the examination
    drafts: {}, // anything half-written
    meet: {}, // meetingId -> { steps: { stepId: what was answered there }, done: date|null }
    kept: [], // lines kept while reading: { words, from, route, date }
    verdicts: {}, // workId -> { v: 1 to 5, line, date }
    door: {}, // { passed: date } once the first page has been gone through
    readIn: {}, // the version of a book last opened by name: { dante: 'dante-longfellow' }
  };
}

let state = load();
const listeners = new Set();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return blank();
    const parsed = JSON.parse(raw);
    return merge(parsed);
  } catch {
    return blank();
  }
}

// Lay a saved state over a blank one, so that fields added later exist.
function merge(saved) {
  const b = blank();
  const out = { ...b, ...saved, v: VERSION };
  out.final = { ...b.final, ...(saved.final || {}) };
  if (!Array.isArray(out.final.sittings)) out.final.sittings = [];
  if (!Array.isArray(out.kept)) out.kept = [];
  for (const k of ['meet', 'verdicts', 'door', 'readIn']) if (!out[k] || typeof out[k] !== 'object' || Array.isArray(out[k])) out[k] = {};
  return out;
}

let saveTimer = null;
let pending = false;
// The changes made here since the record was last stored. If another tab
// stores the record in the meantime, they are made again on what it stored,
// so that neither tab's work is lost.
let waiting = [];
let storageOk = true;
const saveListeners = new Set();

function persist() {
  pending = false;
  waiting = [];
  const was = storageOk;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    storageOk = true;
  } catch {
    storageOk = false;
  }
  if (was !== storageOk) for (const l of saveListeners) l(storageOk);
}

// Told when saving begins to fail, and when it works again.
export function onSaving(fn) {
  saveListeners.add(fn);
}

export function get() {
  return state;
}

export function canStore() {
  return storageOk;
}

// Change the state. `quiet` skips redrawing (used while typing).
export function update(fn, { quiet = false } = {}) {
  fn(state);
  waiting.push(fn);
  clearTimeout(saveTimer);
  pending = true;
  saveTimer = setTimeout(persist, quiet ? 400 : 0);
  if (!quiet) for (const l of listeners) l(state);
}

// Store at once what is waiting to be stored. A tab with nothing waiting
// stores nothing, so it cannot put an older record over a newer one.
export function flush() {
  clearTimeout(saveTimer);
  if (pending || !storageOk) persist();
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// Told when another tab or window has saved the record, once the record
// held here has been replaced with what it saved. Each is given the new
// record and the one this tab held before.
const outsideListeners = new Set();
export function onOutside(fn) {
  outsideListeners.add(fn);
}

export function exportJSON() {
  return JSON.stringify({ course: 'English 135', exported: new Date().toISOString(), state }, null, 2);
}

// The state held in a saved copy. Throws if the text is not one.
export function checkJSON(text) {
  const parsed = JSON.parse(text);
  const incoming = parsed && parsed.state ? parsed.state : parsed;
  if (!incoming || typeof incoming !== 'object' || !('read' in incoming) || !('heart' in incoming)) {
    throw new Error('not a course file');
  }
  return incoming;
}

// The moment a saved copy was made, as the copy records it, or null where
// it does not say.
export function savedAt(text) {
  try {
    const at = JSON.parse(text).exported;
    return typeof at === 'string' && !Number.isNaN(Date.parse(at)) ? at : null;
  } catch {
    return null;
  }
}

export function importJSON(text) {
  const incoming = checkJSON(text);
  state = merge(incoming);
  persist();
  for (const l of listeners) l(state);
}

export function reset() {
  state = blank();
  persist();
  for (const l of listeners) l(state);
}

if (typeof window !== 'undefined') {
  window.addEventListener('pagehide', flush);
  // What was written in the last moment is saved as the tab goes out of
  // sight, before another tab can change the record.
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
  window.addEventListener('storage', (e) => {
    if (e.key === KEY || e.key === null) {
      const before = state;
      state = load();
      for (const fn of waiting) {
        try { fn(state); } catch (err) { console.error(err); }
      }
      for (const l of outsideListeners) l(state, before);
      for (const l of listeners) l(state);
    }
  });
}
