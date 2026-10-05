// When is a piece known by heart?
// The rule used here: written out from memory with no more than one word
// in a hundred wrong, on two different days. After that it comes round
// again at lengthening intervals, because what is not repeated is lost.

import { addDays, daysBetween } from './dates.js';

const INTERVALS = [1, 3, 7, 21, 60];

// attempts: [{date, ok}] in the order they were made
export function standing(attempts, today) {
  const list = attempts || [];
  const okDays = [];
  for (const a of list) {
    if (a.ok && okDays[okDays.length - 1] !== a.date) okDays.push(a.date);
  }
  const last = list[list.length - 1] || null;
  if (list.length === 0) return { state: 'new', okDays: 0, due: null, known: false };
  if (okDays.length === 0) return { state: 'learning', okDays: 0, due: null, known: false, last };
  const lastOk = okDays[okDays.length - 1];
  // A failed attempt made after the last good one puts the piece back on the desk.
  const failedSince = last && !last.ok && last.date >= lastOk;
  const interval = INTERVALS[Math.min(okDays.length - 1, INTERVALS.length - 1)];
  const due = failedSince ? today : addDays(lastOk, interval);
  const known = okDays.length >= 2;
  let state;
  if (!known) state = 'once';
  else if (daysBetween(due, today) >= 0) state = 'due';
  else state = 'known';
  return { state, okDays: okDays.length, due, known, last, lastOk, failedSince };
}

// The standing of a piece from the whole of its record. A piece that has
// never been written out whole, but whose stretches are under way, has begun.
export function standingOf(rec, today) {
  const st = standing(rec && rec.attempts, today);
  if (st.state === 'new' && rec && ((rec.section || 0) > 0 || Object.keys(rec.clean || {}).length)) return { ...st, state: 'begun' };
  return st;
}

// The day the examination was first passed: a sitting in which every canto
// came within the limit. sittings is the store's record of them.
export function passedOn(sittings) {
  const x = (sittings || []).find((y) => y.cantos > 0 && y.passed === y.cantos);
  return x ? x.date : null;
}

// Cut a piece into stretches short enough to learn at one go, breaking
// where the poem breaks. `lines` uses '' for the gap between stanzas.
export function sections(lines, target = 6, max = 9) {
  const stanzas = [];
  let cur = [];
  lines.forEach((l, i) => {
    if (l === '') {
      if (cur.length) stanzas.push(cur);
      cur = [];
    } else cur.push(i);
  });
  if (cur.length) stanzas.push(cur);

  // Break up anything too long to hold at once.
  const pieces = [];
  for (const st of stanzas) {
    if (st.length <= max) pieces.push(st);
    else {
      const n = Math.ceil(st.length / target);
      const size = Math.ceil(st.length / n);
      for (let i = 0; i < st.length; i += size) pieces.push(st.slice(i, i + size));
    }
  }
  // Join short neighbours up to the target length.
  const out = [];
  let run = [];
  for (const pc of pieces) {
    if (run.length && run.length + pc.length > max) {
      out.push(run);
      run = [];
    }
    run = run.concat(pc);
    if (run.length >= target) {
      out.push(run);
      run = [];
    }
  }
  if (run.length) {
    if (out.length && out[out.length - 1].length + run.length <= max) out[out.length - 1] = out[out.length - 1].concat(run);
    else out.push(run);
  }
  return out.map((idx) => ({ from: idx[0], to: idx[idx.length - 1] }));
}

// The lines of a stretch, keeping the gaps between stanzas.
export function slice(lines, from, to) {
  return lines.slice(from, to + 1);
}

// Number the lines of verse as editions do, skipping the gaps.
export function numbering(lines, first = 1) {
  const nums = [];
  let n = first;
  for (const l of lines) nums.push(l === '' ? null : n++);
  return nums;
}

// How long a stretch to learn at one go: verse by the line, a prose
// version by the paragraph.
export function stretches(lines, prose, size) {
  if (size) return sections(lines, size, size);
  return prose ? sections(lines, 3, 4) : sections(lines, 6, 9);
}

// The term's work by heart, week by week. The weeks are shared out
// equally among the cantos, in the order they are learned.
// For week i (counting from 0) of `weeks`: which canto, and how much of
// it should be known when the week ends.
export function weekPortion(weeks, i, cantos = 5) {
  const per = weeks / cantos;
  const slot = Math.min(cantos - 1, Math.floor(i / per + 1e-9));
  const within = i - slot * per + 1;
  return { slot, share: Math.min(1, within / per) };
}

export function stretchesDue(count, share) {
  return Math.max(1, Math.min(count, Math.ceil(count * share - 1e-9)));
}

// The line of the poem that the first `n` stretches reach. A prose version
// gives a paragraph to each tercet, so its paragraphs count for three lines.
// Its last paragraph also holds the line a canto closes on, so the last
// stretch reaches the last line of the canto.
export function lineReached(lines, secs, n, prose, lineCount) {
  if (n <= 0 || !secs.length) return 0;
  if (prose && lineCount && n >= secs.length) return lineCount;
  let k = 0;
  for (let i = 0; i <= secs[Math.min(n, secs.length) - 1].to; i++) if (lines[i] !== '') k++;
  return prose ? Math.min(lineCount || k * 3, k * 3) : k;
}

// How many stretches, counting from the first, have been written out
// clean with the text covered. rec is the store's record for the piece.
export function cleanThrough(rec, count) {
  if (!rec) return 0;
  if ((rec.attempts || []).some((a) => a.ok)) return count;
  const clean = rec.clean || {};
  let n = 0;
  while (n < count && clean[n]) n++;
  return n;
}
