// A meeting of the class. It starts from a passage. The student makes a
// move on it (puts back a word, marks a line, sorts a cast, sets down an
// answer), and the move is answered: by the writer's own words, or by what
// Auden said about the same lines. Nothing is explained before the move.

import { h, p, clear, prose, plain } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { today } from '../lib/dates.js';
import { normWord, answerMatches } from '../lib/text.js';
import { unitByNumber, work, cantoVersion } from '../lib/course.js';
import { plateFigure, recordPlayer } from '../lib/media.js';
import { verse } from '../lib/render.js';
import { readingLinks, shortWay } from './term.js';

// Steps that ask nothing of the student, and so never hold the meeting up.
// Something to read or to listen to holds it up only if it has a way on of its own.
const OPEN_KINDS = new Set(['turn', 'make', 'next']);
const OPEN = { has: (s) => OPEN_KINDS.has(s.kind) || (s.kind === 'read' && s.go === false) };

const blankRec = { steps: {}, done: null };

function meetingRec(st, id) {
  return (st.meet && st.meet[id]) || blankRec;
}

function stepRec(st, mid, sid) {
  return meetingRec(st, mid).steps[sid] || {};
}

function saveStep(mid, sid, fn, opts) {
  store.update((st) => {
    st.meet = st.meet || {};
    st.meet[mid] = st.meet[mid] || { steps: {}, done: null };
    st.meet[mid].steps[sid] = st.meet[mid].steps[sid] || {};
    fn(st.meet[mid].steps[sid], st);
  }, opts);
}

// The passage with words taken out that a spread stands on.
export function clozeOf(unit, sp) {
  if (!sp.passage || !sp.passage.gaps) return null;
  return sp.passage.cloze || unit.words || null;
}

export function stepDone(st, unit, m, sp, s) {
  if (OPEN.has(s)) return true;
  const r = stepRec(st, m.id, s.id);
  if (r.skip) return true;
  if (s.kind === 'gaps') {
    const c = clozeOf(unit, sp);
    return !!(c && st.words[c.id] && st.words[c.id].shown);
  }
  if (s.kind === 'write' && s.q) return !!(st.answers[s.q] && st.answers[s.q].handedIn);
  return !!r.done;
}

export function flatSteps(m) {
  return m.spreads.flatMap((sp, si) => sp.steps.map((s) => ({ s, sp, si })));
}

// How far a meeting has got: steps answered, steps that ask for an answer,
// and whether its end has been reached.
export function meetingStanding(st, unit, m) {
  const flat = flatSteps(m);
  const asks = flat.filter(({ s }) => !OPEN.has(s));
  const done = asks.filter(({ s, sp }) => stepDone(st, unit, m, sp, s) && !stepRec(st, m.id, s.id).skip).length;
  const left = asks.filter(({ s }) => stepRec(st, m.id, s.id).skip).length;
  const reached = flat.every(({ s, sp }) => stepDone(st, unit, m, sp, s));
  const begun = done > 0 || left > 0 || asks.some(({ s, sp }) => {
    if (s.kind === 'gaps') { const c = clozeOf(unit, sp); return !!(c && st.words[c.id] && (st.words[c.id].answers || []).some((x) => x && x.trim())); }
    if (s.kind === 'write' && s.q) return !!(st.answers[s.q] && st.answers[s.q].text);
    return Object.keys(stepRec(st, m.id, s.id)).length > 0;
  });
  return { done, left, total: asks.length, reached, begun };
}

function missing(t) {
  return { node: h('div', { class: 'col' }, h('h1', { tabindex: '-1' }, t('notfound.title')), p(t('notfound.body'))), title: t('notfound.title') };
}

// ---------- the passage ----------

// Draws a passage and returns its rows, so that a step can have them marked.
// what: { lines | paras } or a cloze; opts.cloze: { rec, shown, onInput }.
function passageNode(t, what, opts = {}) {
  const box = h('div', { class: 'passage' + (opts.sheet ? ' sheet' : ''), lang: what.lang || null });
  const rows = [];
  const inputs = [];
  if (what.label) box.appendChild(h('p', { class: 'passage-label' }, prose(what.label)));
  if (opts.cloze) {
    const { c, rec, shown } = opts.cloze;
    const holder = h('div', { class: c.verse ? 'verse cloze' : 'cloze' });
    // Every gap is as wide as the longest word, so that a gap's width gives nothing away.
    const wide = Math.max(...c.blanks.map((w) => w.length)) + 2;
    for (const line of c.lines) {
      if (line.length === 0) { holder.appendChild(h('div', { class: 'gap' })); continue; }
      const row = c.verse ? h('div', { class: 'vl' }) : h('p');
      for (const seg of line) {
        if (typeof seg === 'string') { row.appendChild(document.createTextNode(seg)); continue; }
        const mine = (rec.answers || [])[seg] || '';
        if (!shown) {
          const inp = h('input', { type: 'text', class: 'blank', autocomplete: 'off', spellcheck: 'false', autocapitalize: 'off', 'aria-label': t('meet.blank', { n: seg + 1 }), style: `width:${wide}ch` });
          inp.value = mine;
          inp.dataset.gap = String(seg);
          inputs.push(inp);
          row.appendChild(inp);
        } else {
          const theirs = c.blanks[seg];
          const same = normWord(mine) === normWord(theirs);
          const given = h('span', { class: 'given' + (same ? ' same' : ''), 'data-gap': String(seg) });
          if (!same) given.appendChild(h('span', { class: mine.trim() ? 'yours differs' : 'yours none' }, mine.trim() || t('meet.gaps.empty')));
          given.appendChild(h('span', { class: 'theirs' }, theirs));
          row.appendChild(given);
        }
      }
      rows.push(row);
      holder.appendChild(row);
    }
    box.appendChild(holder);
  } else if (what.lines) {
    const holder = h('div', { class: 'verse' + (what.first ? ' numbered' : '') });
    let n = what.first || 1;
    let i = 0;
    for (const l of what.lines) {
      if (l === '') { holder.appendChild(h('div', { class: 'gap' })); continue; }
      const show = what.first && (i === 0 || n % 3 === 0);
      const row = h('div', { class: 'vl', 'data-n': show ? String(n) : null }, l);
      rows.push(row);
      holder.appendChild(row);
      n++;
      i++;
    }
    box.appendChild(holder);
  } else {
    for (const para of what.paras || []) {
      const row = h('p', null, para);
      rows.push(row);
      box.appendChild(row);
    }
  }
  if (what.cite) box.appendChild(h('p', { class: 'passage-cite' }, prose(what.cite)));
  return { node: box, rows, inputs };
}

// The line a word was taken from, with the word put back and the student's
// own beside it. Of a paragraph of prose only the sentence is given, or as
// much of it as lies near the gap.
export function gapLine(c, i, mine) {
  const line = c.lines.find((l) => l.includes(i)) || [];
  const at = line.indexOf(i);
  const word = (seg) => (typeof seg === 'string' ? seg : c.blanks[seg]);
  let before = line.slice(0, at).map(word).join('');
  let after = line.slice(at + 1).map(word).join('');
  if (!c.verse) {
    const start = before.search(/[^.!?]*$/);
    before = before.slice(start).replace(/^[\s”’"')\]]+/, '');
    if (before.length > 110) before = '… ' + before.slice(before.indexOf(' ', before.length - 110) + 1);
    const end = after.search(/[.!?]/);
    if (end >= 0) after = after.slice(0, end + 1);
    if (after.length > 110) after = after.slice(0, after.lastIndexOf(' ', 110)) + ' …';
  }
  const theirs = c.blanks[i];
  const same = normWord(mine) === normWord(theirs);
  const given = h('span', { class: 'given' + (same ? ' same' : '') });
  if (!same && mine) given.appendChild(h('span', { class: 'yours differs' }, mine));
  given.appendChild(h('span', { class: 'theirs' }, theirs));
  return h('span', { class: 'gap-line' }, before, given, after);
}

// A note may be ready for the word the student wrote: heard is a list of
// [words, reply] for a gap, the words divided by |.
function heardReply(s, i, mine) {
  const mineN = normWord(mine);
  for (const [words, reply] of (s.heard && s.heard[i]) || []) {
    if (words.split('|').some((w) => normWord(w) === mineN)) return reply;
  }
  return null;
}

// Beside a long run of notes the passage stays in its own column. The gap
// that the note at the reader's eye speaks of is shown there.
let followWait = 0;
function followNotes() {
  followWait = 0;
  for (const dl of document.querySelectorAll('#main .gap-notes')) {
    const box = dl.getBoundingClientRect();
    if (box.bottom < 0 || box.top > window.innerHeight) continue;
    const notes = [...dl.querySelectorAll('.gap-note[data-gap]')];
    const eye = window.innerHeight * 0.4;
    let best = notes[0];
    for (const dt of notes) if (dt.getBoundingClientRect().top <= eye) best = dt;
    const spread = dl.closest('.spread');
    const side = spread && spread.querySelector('.spread-side');
    const given = side && best && side.querySelector(`.given[data-gap="${best.dataset.gap}"]`);
    if (!given || given.classList.contains('at')) continue;
    for (const el of side.querySelectorAll('.given.at')) el.classList.remove('at');
    given.classList.add('at');
    if (side.scrollHeight > side.clientHeight + 4) {
      const top = given.getBoundingClientRect().top - side.getBoundingClientRect().top + side.scrollTop;
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      side.scrollTo({ top: Math.max(0, top - side.clientHeight * 0.35), behavior: reduce ? 'auto' : 'smooth' });
    }
  }
}
window.addEventListener('scroll', () => { if (!followWait) followWait = requestAnimationFrame(followNotes); }, { passive: true });

// ---------- the page ----------

export async function render(ctx, n, k) {
  const unit = unitByNumber(ctx.course, n);
  const which = Number(k) || 1;
  const m = unit && unit.meetings ? unit.meetings[which - 1] : null;
  if (!m) return missing(ctx.t);
  return play(ctx, { unit, m, which });
}

// The door is a meeting that belongs to no week.
export function doorUnit(course) {
  return { n: 0, meetings: [course.door], questions: [], making: [], reading: [] };
}

// Draws a meeting. opts.door: the first page of the site, which has its
// own head and its own way on.
export function play(ctx, { unit, m, which = 1, door = false }) {
  const { t, course } = ctx;
  const flat = flatSteps(m);

  // Of the record the page shows this meeting's steps, the passages it
  // fills and the papers it asks for.
  ctx.follow((st) => [
    st.meet && st.meet[m.id],
    flat.map(({ s, sp }) => {
      if (s.kind === 'gaps') { const c = clozeOf(unit, sp); return c ? st.words[c.id] : null; }
      if (s.kind === 'write' && s.q) return st.answers[s.q];
      if (s.kind === 'verdict') return st.verdicts && st.verdicts[s.work];
      if (s.kind === 'make') return st.making[s.ex];
      return null;
    }),
    st.cantoVersion,
  ]);

  const box = h('div', { class: 'meeting' });
  const head = h('div', { class: 'col meeting-head' });
  if (door) {
    box.classList.add('door');
    if (m.kicker) head.appendChild(h('p', { class: 'kicker' }, m.kicker));
  } else {
    head.appendChild(h('p', { class: 'crumbs' }, h('a', { href: '#/term' }, t('nav.term')), h('span', { class: 'sep' }, '/'), h('a', { href: `#/unit/${unit.n}` }, t('unit.short', { n: unit.n }))));
    head.appendChild(h('p', { class: 'kicker' }, t('meet.kicker', { n: unit.n, which: t.list('meet.ordinals')[which - 1] || '' })));
  }
  head.appendChild(h('h1', { tabindex: '-1' }, prose(m.title)));
  box.appendChild(head);
  const body = h('div', { class: 'meeting-body' });
  box.appendChild(body);

  // The step whose answer was just given: the page is put at what answers it.
  let justDone = null;

  // A record goes on playing while the page around it is drawn again, so
  // each is made once and put back where it stood.
  // How the words of a sheet are shown, for the step that has the button.
  const showGaps = new Map();

  const players = new Map();
  const player = (id) => {
    if (!players.has(id)) players.set(id, recordPlayer(course, id, t));
    return players.get(id);
  };

  const draw = () => {
    // Beside the steps a long passage scrolls in its own column. Where it
    // stood is kept, so that answering a step does not send it back to its top.
    const stood = new Map([...body.querySelectorAll('.spread-side')].map((el) => [el.dataset.spread, el.scrollTop]));
    clear(body);
    showGaps.clear();
    const st = store.get();
    const firstOpen = flat.findIndex(({ s, sp }) => !stepDone(st, unit, m, sp, s));
    const last = firstOpen < 0 ? flat.length - 1 : firstOpen;
    const current = firstOpen < 0 ? null : flat[firstOpen].s;

    m.spreads.forEach((sp, si) => {
      const mine = flat.map((x, i) => ({ ...x, i })).filter((x) => x.si === si && x.i <= last);
      if (!mine.length) return;
      const spread = h('section', { class: 'spread' });
      const side = h('div', { class: 'spread-side', 'data-spread': String(si) });
      const steps = h('div', { class: 'spread-steps' });

      // ----- what the spread stands on -----
      const c = clozeOf(unit, sp);
      let passage = null;
      const markStep = mine.map((x) => x.s).filter((s) => s.kind === 'mark');
      const activeMark = current && current.kind === 'mark' && markStep.includes(current) ? current : null;
      const shownMark = activeMark || [...markStep].reverse().find((s) => stepRec(st, m.id, s.id).done) || null;
      if (sp.plate) {
        const fig = plateFigure(course, sp.plate, { eager: si === 0 });
        if (fig) side.appendChild(fig);
      }
      if (sp.record) {
        const rec = player(sp.record);
        if (rec) side.appendChild(rec);
      }
      if (c) {
        const rec = st.words[c.id] || { answers: [], shown: null };
        passage = passageNode(t, { cite: rec.shown ? c.cite : null }, { cloze: { c, rec, shown: !!rec.shown }, sheet: true });
        // On a narrow screen the passage stands above the steps, so what is
        // to be done with the gaps is said above it too.
        const gapStep = mine.map((x) => x.s).find((s) => s.kind === 'gaps');
        const filling = !!gapStep && !rec.shown;
        if (filling) {
          // While the gaps are being filled the sheet runs its full length in the page.
          spread.classList.add('gaps-open');
          const lead = h('div', { class: 'lead-above' });
          for (const para of gapStep.lead || t.list('meet.gaps.lead', { n: c.blanks.length })) lead.appendChild(p(para));
          side.appendChild(lead);
        }
        if (c.setting && !rec.shown) side.appendChild(p(c.setting, 'setting'));
        side.appendChild(passage.node);
        const anyWord = () => passage.inputs.some((x) => x.value.trim());
        const showWords = () => {
          if (!filling || !anyWord()) return;
          store.update((s2) => {
            s2.words[c.id] = s2.words[c.id] || { answers: [], shown: null, note: '' };
            if (!s2.words[c.id].shown) s2.words[c.id].shown = today();
          });
          justDone = gapStep.id;
          draw();
        };
        showGaps.set(gapStep ? gapStep.id : '', showWords);
        if (filling) {
          // The way on is in reach wherever the reader is: beside the sheet's
          // head, and under its last line.
          side.appendChild(h('div', { class: 'row under-sheet' },
            h('button', { type: 'button', class: 'primary', 'data-show-gaps': '', disabled: !(rec.answers || []).some((x) => x && x.trim()), onClick: showWords }, t('meet.gaps.show'))));
          const first = passage.inputs.find((x) => !x.value.trim());
          if (first && !(rec.answers || []).some((x) => x && x.trim())) first.classList.add('first-gap');
        }
        for (const inp of passage.inputs) {
          inp.addEventListener('input', () => {
            store.update((s2) => {
              s2.words[c.id] = s2.words[c.id] || { answers: [], shown: null, note: '' };
              // Words fixed from another tab are not written over from this one.
              if (s2.words[c.id].shown) return;
              s2.words[c.id].answers[Number(inp.dataset.gap)] = inp.value;
            }, { quiet: true });
            for (const btn of body.querySelectorAll('[data-show-gaps]')) btn.disabled = !anyWord();
            const hint = body.querySelector('[data-gaps-hint]');
            if (hint) hint.hidden = anyWord();
            for (const el of passage.inputs) el.classList.remove('first-gap');
          });
          // Enter goes on to the next gap, and from the last one shows the words.
          inp.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter') return;
            e.preventDefault();
            const next = passage.inputs[passage.inputs.indexOf(inp) + 1];
            if (next) next.focus();
            else showWords();
          });
        }
        // A word on the sheet, once shown, leads to its note.
        if (rec.shown) {
          for (const given of passage.node.querySelectorAll('.given[data-gap]')) {
            given.addEventListener('click', () => {
              const dt = spread.querySelector(`.gap-notes [data-gap="${given.dataset.gap}"]`);
              if (!dt) return;
              const det = dt.closest('details');
              if (det) det.open = true;
              dt.scrollIntoView({ block: 'center', behavior: 'smooth' });
            });
          }
        }
      } else if (sp.passage) {
        passage = passageNode(t, sp.passage);
        if (sp.passage.head) side.appendChild(p(sp.passage.head, 'setting'));
        side.appendChild(passage.node);
      }
      for (const b of sp.beside || []) {
        const extra = passageNode(t, b);
        if (b.head) side.appendChild(p(b.head, 'setting'));
        side.appendChild(extra.node);
      }

      // ----- lines marked on the passage -----
      if (passage && shownMark) {
        const r = stepRec(st, m.id, shownMark.id);
        const marks = new Set(r.marks || []);
        const key = new Set(shownMark.key || []);
        const max = shownMark.max || 1;
        passage.node.classList.add(r.done ? 'marked-done' : 'marking');
        passage.rows.forEach((row, i) => {
          if (r.done) {
            if (key.has(i)) row.classList.add('key-row');
            if (marks.has(i)) row.classList.add('my-row');
            return;
          }
          row.setAttribute('role', 'checkbox');
          row.setAttribute('tabindex', '0');
          row.setAttribute('aria-checked', marks.has(i) ? 'true' : 'false');
          if (marks.has(i)) row.classList.add('my-row');
          const toggle = () => {
            const now = new Set(stepRec(store.get(), m.id, shownMark.id).marks || []);
            if (now.has(i)) now.delete(i);
            else {
              // One line asked for: a new choice takes the place of the old.
              if (max === 1) now.clear();
              if (now.size >= max) return;
              now.add(i);
            }
            saveStep(m.id, shownMark.id, (rec) => { rec.marks = [...now].sort((a, b) => a - b); }, { quiet: true });
            passage.rows.forEach((el, j) => {
              el.classList.toggle('my-row', now.has(j));
              el.setAttribute('aria-checked', now.has(j) ? 'true' : 'false');
            });
            for (const btn of body.querySelectorAll('[data-mark-done]')) btn.disabled = now.size === 0;
          };
          row.addEventListener('click', toggle);
          row.addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); } });
        });
        if (r.done) {
          side.appendChild(h('p', { class: 'legend' },
            h('span', { class: 'swatch mine' }), t('meet.mark.legend.yours', { n: marks.size }),
            h('span', { class: 'swatch key' }), t('meet.mark.legend.key', { n: key.size })));
        } else {
          // On a narrow screen the question is below the passage. While the
          // lines are being marked, the way on stays at the foot of the window.
          const go = h('button', { type: 'button', class: 'primary', 'data-mark-done': '', disabled: !marks.size }, t('meet.mark.done', { n: max }));
          go.addEventListener('click', () => {
            if (!(stepRec(store.get(), m.id, shownMark.id).marks || []).length) return;
            saveStep(m.id, shownMark.id, (rec) => { rec.done = today(); });
            justDone = shownMark.id;
            draw();
          });
          side.appendChild(h('div', { class: 'mark-bar' }, h('span', null, t('meet.mark.bar', { n: max })), go));
        }
      }

      // A reading on the board may point at lines of the passage beside it.
      if (passage) {
        for (const { s } of mine) {
          if (s.kind !== 'turn' || !s.rows) continue;
          passage.node.classList.add('pointed');
          for (const i of s.rows) if (passage.rows[i]) passage.rows[i].classList.add('key-row');
        }
      }

      // ----- the steps -----
      for (const { s } of mine) {
        const done = stepDone(st, unit, m, sp, s);
        const r = stepRec(st, m.id, s.id);
        const card = h('div', { class: `step step-${s.kind}` + (done ? ' is-done' : ' is-open'), 'data-step': s.id });
        const finish = () => { justDone = s.id; draw(); };
        const api = { t, course, unit, m, sp, s, r, st, done, finish, card, passage, c, ctx, player, showGaps };
        if (r.skip && !OPEN.has(s)) skipped(api);
        else STEPS[s.kind](api);
        steps.appendChild(card);
      }

      if (side.childNodes.length) spread.appendChild(side);
      else spread.classList.add('no-side');
      spread.appendChild(steps);
      body.appendChild(spread);
    });

    // ----- the end of the meeting -----
    if (firstOpen < 0) {
      const rec = meetingRec(st, m.id);
      if (!rec.done) {
        store.update((s2) => {
          s2.meet = s2.meet || {};
          s2.meet[m.id] = s2.meet[m.id] || { steps: {}, done: null };
          if (!s2.meet[m.id].done) s2.meet[m.id].done = today();
        });
      }
      const foot = h('div', { class: 'col meeting-foot' });
      const left = flat.filter(({ s }) => stepRec(st, m.id, s.id).skip).length;
      if (left) foot.appendChild(p(t('meet.foot.left', { n: left })));
      const row = h('div', { class: 'row' });
      const nextMeeting = unit.meetings[which];
      if (door) {
        // Either way on is a way through the door: the front page is then the student's own.
        const pass = () => store.update((s2) => { s2.door = s2.door || {}; if (!s2.door.passed) s2.door.passed = today(); });
        row.appendChild(h('a', { class: 'btn primary', href: '#/unit/1/meet/1', onClick: pass }, t('door.begin')));
        row.appendChild(h('a', { class: 'btn', href: '#/term', onClick: pass }, t('door.term')));
        foot.appendChild(row);
        body.appendChild(foot);
      } else if (nextMeeting) {
        const toBook = flat.some(({ s }) => s.kind === 'next' && s.reading !== false && s.open);
        row.appendChild(h('a', { class: toBook ? 'btn' : 'btn primary', href: `#/unit/${unit.n}` }, t('meet.foot.week', { n: unit.n })));
      } else if (unit.n < course.units.length) {
        row.appendChild(h('a', { class: 'btn primary', href: `#/unit/${unit.n + 1}` }, t('meet.foot.nextweek', { n: unit.n + 1 })));
        row.appendChild(h('a', { class: 'btn', href: `#/unit/${unit.n}` }, t('meet.foot.week', { n: unit.n })));
      } else {
        row.appendChild(h('a', { class: 'btn primary', href: '#/book' }, t('nav.book')));
      }
      if (!door) {
        row.appendChild(h('a', { class: 'btn quiet', href: '#/book' }, t('meet.foot.book')));
        foot.appendChild(row);
        body.appendChild(foot);
      }
    }

    for (const el of body.querySelectorAll('.spread-side')) {
      const y = stood.get(el.dataset.spread);
      if (y) el.scrollTop = y;
    }

    // The page is put at what answers the step just taken.
    if (justDone) {
      const el = body.querySelector(`[data-step="${justDone}"]`);
      justDone = null;
      if (el) {
        // Lines just compared: the passage is put where the lines that were
        // meant can be seen, if it scrolls in a column of its own.
        const keyRow = el.classList.contains('step-mark') ? body.querySelector('.passage.marked-done .key-row') : null;
        const side = keyRow && keyRow.closest('.spread-side');
        if (side && side.scrollHeight > side.clientHeight + 4) {
          const at = keyRow.getBoundingClientRect().top - side.getBoundingClientRect().top + side.scrollTop;
          side.scrollTop = Math.max(0, at - side.clientHeight * 0.3);
        }
        // Words just shown: the sheet goes back to its head, and follows the notes from there.
        if (el.classList.contains('step-gaps')) {
          const sheet = el.closest('.spread').querySelector('.spread-side');
          if (sheet) sheet.scrollTop = 0;
        }
        const target = el.querySelector('.payoff') || el;
        // Only what is new on the page comes in with a movement.
        target.classList.add('fresh');
        const open = body.querySelector('.step.is-open');
        if (open) open.classList.add('fresh');
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        const top = el.getBoundingClientRect().top;
        if (top < 70 || top > window.innerHeight * 0.55) {
          const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          window.scrollTo({ top: window.scrollY + top - 90, behavior: reduce ? 'auto' : 'smooth' });
        }
      }
    }
  };
  draw();
  return { node: box, title: door ? null : `${plain(m.title)} · ${t('unit.short', { n: unit.n })}` };
}

// ---------- the steps ----------

function label(api, key, params) {
  api.card.appendChild(h('p', { class: 'step-label' }, api.s.label || api.t(key, params)));
}

// Lines of the book given back in answer to a move: the poem answers
// before anyone else does.
function poemNode(t, poem) {
  const box = h('div', { class: 'poem-back' });
  if (poem.head) box.appendChild(p(poem.head, 'setting'));
  box.appendChild(passageNode(t, poem).node);
  for (const para of poem.say || []) box.appendChild(p(para));
  return box;
}

// The face of a card: a name, and a line saying who that is.
function face(it) {
  return [h('span', { class: 'chip-label' }, prose(it.label)), it.sub ? h('span', { class: 'chip-sub' }, prose(it.sub)) : null];
}

function ask(api, text) {
  api.card.appendChild(h('h2', { class: 'step-ask' }, prose(text)));
}

function payoff(api, ...children) {
  const box = h('div', { class: 'payoff' }, ...children);
  api.card.appendChild(box);
  return box;
}

function skipButton(api) {
  return h('button', { type: 'button', class: 'quiet', onClick: () => { saveStep(api.m.id, api.s.id, (rec) => { rec.skip = true; }); api.finish(); } }, api.t('meet.skip'));
}

function skipped(api) {
  const { t, s, card, m } = api;
  card.classList.add('is-skipped');
  const what = s.ask || (s.q && (api.unit.questions || []).find((q) => q.id === s.q)?.text) || t(`meet.kind.${s.kind}`);
  card.appendChild(h('p', { class: 'step-label' }, t('meet.skipped')));
  card.appendChild(h('p', { class: 'skipped-what' }, prose(what)));
  card.appendChild(h('div', { class: 'row' }, h('button', { type: 'button', onClick: () => { saveStep(m.id, s.id, (rec) => { delete rec.skip; }); api.finish(); } }, t('meet.takeup'))));
}

// A reading of Auden's, or of the site's, written up on the board.
export function board(t, turn) {
  const box = h('section', { class: 'board' });
  box.appendChild(h('h3', { class: 'board-title' }, prose(turn.title || t('meet.turn.title'))));
  for (const para of turn.paras) box.appendChild(p(para));
  if (turn.sources && turn.sources.length) {
    const src = h('p', { class: 'board-source' });
    src.appendChild(document.createTextNode(t('meet.turn.sources', { n: turn.sources.length }) + ' '));
    turn.sources.forEach((x, i) => {
      if (i) src.appendChild(document.createTextNode(' '));
      src.appendChild(prose(x));
    });
    box.appendChild(src);
  }
  return box;
}

const STEPS = {
  // Words taken out of the passage: put them back, then see the writer's.
  gaps(api) {
    const { t, s, card, c, done, st } = api;
    const rec = st.words[c.id] || { answers: [], shown: null };
    if (!done) {
      label(api, 'meet.gaps.label');
      for (const para of s.lead || t.list('meet.gaps.lead', { n: c.blanks.length })) card.appendChild(p(para));
      const any = (rec.answers || []).some((x) => x && x.trim());
      const show = h('button', { type: 'button', class: 'primary', 'data-show-gaps': '', disabled: !any }, t('meet.gaps.show'));
      show.addEventListener('click', () => { const go = api.showGaps.get(s.id); if (go) go(); });
      const hint = h('span', { class: 'muted small', 'data-gaps-hint': '' }, t('meet.gaps.none'));
      hint.hidden = any;
      card.appendChild(h('div', { class: 'row' }, show, hint));
      return;
    }
    label(api, 'meet.gaps.label');
    const box = payoff(api);
    if (s.notes) {
      // Word by word: the line with the writer's word back in it and the
      // student's beside it, then what the writer's word does there.
      // A word the student had too is one line, which opens on its note.
      const list = h('div', { class: 'gap-notes' });
      c.blanks.forEach((w, i) => {
        const mine = ((rec.answers || [])[i] || '').trim();
        const agree = normWord(mine) === normWord(w);
        if (agree) {
          list.appendChild(h('details', { class: 'gap-note same', 'data-gap': String(i) },
            h('summary', null, gapLine(c, i, mine), h('span', { class: 'agree' }, t('meet.gaps.agree'))),
            p(s.notes[i])));
          return;
        }
        const note = h('div', { class: 'gap-note', 'data-gap': String(i) }, h('p', { class: 'gap-head' }, gapLine(c, i, mine)));
        const met = mine ? heardReply(s, i, mine) : null;
        if (met) note.appendChild(p(met, 'heard'));
        note.appendChild(p(s.notes[i]));
        list.appendChild(note);
      });
      box.appendChild(list);
    }
    for (const para of s.after || []) box.appendChild(p(para));
  },

  // A question with two or three answers, each of which someone has held.
  choose(api) {
    const { t, s, card, r, done, m } = api;
    if (s.label) card.appendChild(h('p', { class: 'step-label' }, s.label));
    ask(api, s.ask);
    for (const para of s.lead || []) card.appendChild(p(para));
    if (!done) {
      const list = h('div', { class: 'options' });
      for (const op of s.options) {
        list.appendChild(h('button', { type: 'button', class: 'option', onClick: () => { saveStep(m.id, s.id, (rec) => { rec.choice = op.id; rec.done = today(); }); api.finish(); } }, prose(op.label)));
      }
      card.appendChild(list);
      return;
    }
    const chosen = s.options.find((op) => op.id === r.choice) || s.options[0];
    const box = payoff(api);
    box.appendChild(h('p', { class: 'chosen' }, h('span', { class: 'chosen-tag' }, t('meet.choose.yours')), ' ', prose(chosen.label)));
    for (const para of [].concat(chosen.reply)) box.appendChild(p(para));
    // An answer may be asked to go one step further, in a line that is kept.
    if (chosen.line) {
      const inp = h('input', { type: 'text', class: 'line-in', 'aria-label': plain(chosen.line), placeholder: plain(chosen.line) });
      inp.value = r.line || '';
      inp.addEventListener('input', () => saveStep(m.id, s.id, (rec) => { rec.line = inp.value; }, { quiet: true }));
      box.appendChild(inp);
    }
    if (s.poem) box.appendChild(poemNode(t, s.poem));
    for (const para of s.after || []) box.appendChild(p(para));
    const others = s.options.filter((op) => op !== chosen);
    if (others.length && !s.hideOthers) {
      const det = h('details', { class: 'others' }, h('summary', null, t('meet.choose.others', { n: others.length })));
      for (const op of others) {
        det.appendChild(h('p', { class: 'other-label' }, prose(op.label)));
        for (const para of [].concat(op.reply)) det.appendChild(p(para));
      }
      box.appendChild(det);
    }
  },

  // A line to find in the passage.
  mark(api) {
    const { t, s, card, r, done, m } = api;
    const max = s.max || 1;
    label(api, 'meet.mark.label', { n: s.key.length });
    ask(api, s.ask);
    for (const para of s.lead || []) card.appendChild(p(para));
    if (!done) {
      card.appendChild(p(t('meet.mark.hint', { n: max }), 'muted small'));
      if (api.passage) {
        card.appendChild(h('p', { class: 'to-passage small' }, h('a', { href: '#', onClick: (e) => {
          e.preventDefault();
          api.passage.node.scrollIntoView({ block: 'start', behavior: 'smooth' });
        } }, t('meet.mark.up'))));
      }
      const btn = h('button', { type: 'button', class: 'primary', 'data-mark-done': '', disabled: !(r.marks && r.marks.length) }, t('meet.mark.done', { n: max }));
      btn.addEventListener('click', () => {
        if (!(stepRec(store.get(), m.id, s.id).marks || []).length) return;
        saveStep(m.id, s.id, (rec) => { rec.done = today(); });
        api.finish();
      });
      card.appendChild(h('div', { class: 'row' }, btn, skipButton(api)));
      return;
    }
    const marks = r.marks || [];
    const hit = marks.some((i) => s.key.includes(i));
    const near = !hit && marks.some((i) => (s.near || []).includes(i));
    const box = payoff(api);
    for (const para of hit ? s.hit : near && s.nearby ? s.nearby : s.miss) box.appendChild(p(para));
    for (const para of s.after || []) box.appendChild(p(para));
  },

  // Cards to be put under headings, as on the blackboard.
  sort(api) {
    const { t, s, card, r, done, m } = api;
    label(api, 'meet.sort.label');
    ask(api, s.ask);
    for (const para of s.lead || []) card.appendChild(p(para));
    const binOf = (id) => s.bins.find((b) => b.id === id);
    const right = (it, where) => [].concat(it.bin).includes(where);
    const places = { ...(r.places || {}) };
    const boardEl = h('div', { class: 'sortboard' + (done ? ' compared' : '') + (s.bins.length > 3 ? ' many' : ''), style: `--bins:${s.bins.length}` });
    const tray = h('div', { class: 'tray' });
    let held = null;

    const paint = () => {
      clear(boardEl);
      clear(tray);
      for (const b of s.bins) {
        const col = h('div', { class: 'bin' });
        if (!done) col.addEventListener('click', (e) => { if (held && !e.target.closest('.chip, .bin-head')) { places[held] = b.id; held = null; commit(); } });
        const headBtn = done
          ? h('div', { class: 'bin-head' }, prose(b.label))
          : h('button', { type: 'button', class: 'bin-head', onClick: () => { if (held) { places[held] = b.id; held = null; commit(); } } }, prose(b.label));
        col.appendChild(headBtn);
        if (b.sub) col.appendChild(h('p', { class: 'bin-sub' }, prose(b.sub)));
        const inBin = s.items.filter((it) => (done ? [].concat(it.bin)[0] === b.id : places[it.id] === b.id));
        for (const it of inBin) {
          if (done) {
            const mineAt = places[it.id];
            const ok = right(it, mineAt);
            const chip = h('div', { class: 'chip placed' + (ok ? ' agree' : ' differ') }, h('span', { class: 'chip-label' }, prose(it.label)));
            if (!ok && mineAt) chip.appendChild(h('span', { class: 'chip-mine' }, t('meet.sort.yours', { bin: plain(binOf(mineAt).label) })));
            if (it.note) chip.appendChild(h('span', { class: 'chip-note' }, prose(it.note)));
            col.appendChild(chip);
          } else {
            col.appendChild(h('button', { type: 'button', class: 'chip placed' + (held === it.id ? ' held' : ''), 'aria-pressed': held === it.id ? 'true' : 'false', onClick: () => { held = held === it.id ? null : it.id; paint(); } }, prose(it.label)));
          }
        }
        boardEl.appendChild(col);
      }
      if (!done) {
        const loose = s.items.filter((it) => !places[it.id]);
        if (loose.length) tray.appendChild(h('p', { class: 'tray-label' }, t('meet.sort.tray')));
        for (const it of loose) {
          tray.appendChild(h('button', { type: 'button', class: 'chip' + (held === it.id ? ' held' : ''), 'aria-pressed': held === it.id ? 'true' : 'false', onClick: () => { held = held === it.id ? null : it.id; paint(); } }, prose(it.label)));
        }
        boardEl.classList.toggle('holding', !!held);
        const btn = card.querySelector('[data-sort-done]');
        if (btn) btn.disabled = s.items.some((it) => !places[it.id]);
      }
    };
    const commit = () => {
      saveStep(m.id, s.id, (rec) => { rec.places = { ...places }; }, { quiet: true });
      paint();
    };
    if (!done) {
      card.appendChild(p(t('meet.sort.hint'), 'muted small'));
      card.appendChild(tray);
      card.appendChild(boardEl);
      const btn = h('button', { type: 'button', class: 'primary', 'data-sort-done': '', disabled: true }, s.compare || t('meet.sort.compare'));
      btn.addEventListener('click', () => {
        if (s.items.some((it) => !places[it.id])) return;
        saveStep(m.id, s.id, (rec) => { rec.places = { ...places }; rec.done = today(); });
        api.finish();
      });
      card.appendChild(h('div', { class: 'row' }, btn, skipButton(api)));
      paint();
      return;
    }
    const box = payoff(api);
    if (s.boardTitle) box.appendChild(h('p', { class: 'board-caption' }, prose(s.boardTitle)));
    box.appendChild(boardEl);
    paint();
    for (const para of s.after || []) box.appendChild(p(para));
  },

  // People to be put in order by the student's own judgment, and then the
  // order the book gives them, drawn as the places of the book.
  order(api) {
    const { t, s, card, r, done, m } = api;
    if (s.label) card.appendChild(h('p', { class: 'step-label' }, s.label));
    ask(api, s.ask);
    for (const para of s.lead || []) card.appendChild(p(para));
    const n = s.items.length;
    const depth = (it) => s.scale.findIndex((x) => x.id === it.at);
    const theirs = [...s.items].sort((a, b) => depth(a) - depth(b));
    // The places of the student's order, the first at the top; null where none is put yet.
    const slots = [...(r.order || [])];
    while (slots.length < n) slots.push(null);
    const nth = t.list('meet.order.nth');
    if (!done) {
      const ladder = h('ol', { class: 'ladder', style: `--n:${n}` });
      const tray = h('div', { class: 'tray' });
      const btn = h('button', { type: 'button', class: 'primary', disabled: true }, s.compare || t('meet.order.compare'));
      const save = () => saveStep(m.id, s.id, (rec) => { rec.order = [...slots]; }, { quiet: true });
      const paint = (focus) => {
        clear(ladder);
        clear(tray);
        slots.forEach((id, k) => {
          const it = id ? s.items.find((x) => x.id === id) : null;
          const li = h('li', { class: 'rung' + (it ? ' filled' : ''), style: `--k:${k}` });
          if (it) li.appendChild(h('button', { type: 'button', class: 'chip placed', title: t('meet.order.take'), onClick: () => { slots[k] = null; save(); paint('tray'); } }, prose(it.label)));
          else li.appendChild(h('span', { class: 'rung-empty' }, nth[k] || String(k + 1)));
          ladder.appendChild(li);
        });
        for (const it of s.items.filter((x) => !slots.includes(x.id))) {
          tray.appendChild(h('button', { type: 'button', class: 'chip', onClick: () => {
            const k = slots.indexOf(null);
            if (k < 0) return;
            slots[k] = it.id;
            save();
            paint('tray');
          } }, face(it)));
        }
        btn.disabled = slots.includes(null);
        // The keyboard stays with the names, and goes to the way on when none is left.
        if (focus) (tray.querySelector('button') || btn).focus({ preventScroll: true });
      };
      card.appendChild(p(t('meet.order.hint'), 'muted small'));
      const frame = h('div', { class: 'ladder-box' });
      if (s.ends) frame.appendChild(h('p', { class: 'ladder-end' }, s.ends[0]));
      frame.appendChild(ladder);
      if (s.ends) frame.appendChild(h('p', { class: 'ladder-end' }, s.ends[1]));
      card.appendChild(frame);
      card.appendChild(tray);
      btn.addEventListener('click', () => {
        if (slots.includes(null)) return;
        saveStep(m.id, s.id, (rec) => { rec.order = [...slots]; rec.done = today(); });
        api.finish();
      });
      card.appendChild(h('div', { class: 'row' }, btn, skipButton(api)));
      paint();
      return;
    }
    const box = payoff(api);
    if (s.boardTitle) box.appendChild(h('p', { class: 'board-caption' }, prose(s.boardTitle)));
    const pit = h('ol', { class: 'pit', style: `--n:${s.scale.length}` });
    s.scale.forEach((lv, k) => {
      const here = s.items.filter((it) => it.at === lv.id);
      const li = h('li', { class: 'level' + (here.length ? '' : ' bare'), style: `--k:${k}` });
      li.appendChild(h('span', { class: 'level-name' }, prose(lv.label)));
      if (!here.length && lv.who) li.appendChild(h('span', { class: 'level-who' }, prose(lv.who)));
      for (const it of here) {
        const mine = slots.indexOf(it.id);
        const same = mine === theirs.indexOf(it);
        const chip = h('div', { class: 'chip placed' + (same ? ' agree' : ' differ') }, h('span', { class: 'chip-label' }, prose(it.label)));
        if (mine >= 0) chip.appendChild(h('span', { class: 'chip-mine' }, same ? t('meet.order.same') : t('meet.order.yours', { nth: nth[mine] || String(mine + 1) })));
        if (it.note) chip.appendChild(h('span', { class: 'chip-note' }, prose(it.note)));
        li.appendChild(chip);
      }
      pit.appendChild(li);
    });
    box.appendChild(pit);
    for (const para of s.after || []) box.appendChild(p(para));
  },

  // Rows to be matched from a list.
  match(api) {
    const { t, s, card, r, done, m } = api;
    label(api, 'meet.match.label');
    ask(api, s.ask);
    for (const para of s.lead || []) card.appendChild(p(para));
    const picks = { ...(r.picks || {}) };
    const poolOf = (id) => s.pool.find((x) => x.id === id);
    if (!done) {
      const table = h('div', { class: 'matchlist' });
      const btn = h('button', { type: 'button', class: 'primary', disabled: s.rows.some((row) => !picks[row.id]) }, s.compare || t('meet.match.compare'));
      for (const row of s.rows) {
        const sel = h('select', { 'aria-label': plain(row.label) }, h('option', { value: '' }, t('meet.match.choose')));
        for (const op of s.pool) sel.appendChild(h('option', { value: op.id }, plain(op.label)));
        sel.value = picks[row.id] || '';
        sel.addEventListener('change', () => {
          if (sel.value) picks[row.id] = sel.value; else delete picks[row.id];
          saveStep(m.id, s.id, (rec) => { rec.picks = { ...picks }; }, { quiet: true });
          btn.disabled = s.rows.some((x) => !picks[x.id]);
        });
        table.appendChild(h('div', { class: 'matchrow' },
          h('div', { class: 'match-what' }, h('span', { class: 'match-label' }, prose(row.label)), row.sub ? h('span', { class: 'match-sub' }, prose(row.sub)) : null),
          h('div', { class: 'match-pick' }, sel)));
      }
      card.appendChild(table);
      btn.addEventListener('click', () => {
        if (s.rows.some((x) => !picks[x.id])) return;
        saveStep(m.id, s.id, (rec) => { rec.picks = { ...picks }; rec.done = today(); });
        api.finish();
      });
      card.appendChild(h('div', { class: 'row' }, btn, skipButton(api)));
      return;
    }
    const box = payoff(api);
    const table = h('div', { class: 'matchlist compared' });
    for (const row of s.rows) {
      const ok = picks[row.id] === row.answer;
      const ans = h('div', { class: 'match-pick' });
      if (!ok && picks[row.id]) ans.appendChild(h('span', { class: 'yours differs' }, plain(poolOf(picks[row.id]).label)));
      ans.appendChild(h('span', { class: 'theirs' + (ok ? ' agree' : '') }, prose(poolOf(row.answer).label)));
      if (row.note) ans.appendChild(h('span', { class: 'match-note' }, prose(row.note)));
      table.appendChild(h('div', { class: 'matchrow' + (ok ? ' agree' : ' differ') },
        h('div', { class: 'match-what' }, h('span', { class: 'match-label' }, prose(row.label)), row.sub ? h('span', { class: 'match-sub' }, prose(row.sub)) : null),
        ans));
    }
    box.appendChild(table);
    for (const para of s.after || []) box.appendChild(p(para));
  },

  // A question answered in a few sentences. What Auden said on it is
  // shown only when the student's own answer is set down.
  write(api) {
    const { t, s, card, r, done, m, unit, st } = api;
    const q = s.q ? (unit.questions || []).find((x) => x.id === s.q) : null;
    const turn = q ? q.auden : s.turn;
    const rec = q ? (st.answers[q.id] || { text: '', handedIn: null, reply: '' }) : { text: r.text || '', handedIn: r.done || null, reply: r.reply || '' };
    const saveText = (text, quiet = true) => {
      if (q) {
        store.update((s2) => {
          s2.answers[q.id] = s2.answers[q.id] || { text: '', handedIn: null, reply: '' };
          if (s2.answers[q.id].handedIn) return;
          s2.answers[q.id].text = text;
        }, { quiet });
      } else saveStep(m.id, s.id, (x) => { if (!x.done) x.text = text; }, { quiet });
    };
    const setDown = (text) => {
      if (q) {
        store.update((s2) => {
          s2.answers[q.id] = s2.answers[q.id] || { text: '', handedIn: null, reply: '' };
          if (s2.answers[q.id].handedIn) return;
          s2.answers[q.id].text = text;
          s2.answers[q.id].handedIn = today();
        });
      } else saveStep(m.id, s.id, (x) => { x.text = text; x.done = today(); });
    };
    if (s.label) card.appendChild(h('p', { class: 'step-label' }, s.label));
    ask(api, q ? q.text : s.ask);
    for (const para of (q ? q.gloss : s.lead) || []) card.appendChild(p(para, 'gloss'));
    if (!done) {
      const ta = h('textarea', { rows: String(s.rows || 5), 'aria-label': t('meet.write.field') });
      ta.value = rec.text || '';
      const btn = h('button', { type: 'button', class: 'primary', disabled: !ta.value.trim() }, t('meet.write.set'));
      ta.addEventListener('input', () => { saveText(ta.value); btn.disabled = !ta.value.trim(); });
      btn.addEventListener('click', () => {
        if (!ta.value.trim()) return;
        setDown(ta.value);
        api.finish();
      });
      // Someone who would rather not write is shown Auden's answer all the same.
      const pass = h('button', { type: 'button', class: 'quiet', onClick: () => { setDown(ta.value.trim() ? ta.value : ''); api.finish(); } }, t('meet.write.pass'));
      card.appendChild(ta);
      card.appendChild(p(t('meet.write.hint'), 'count'));
      card.appendChild(h('div', { class: 'row' }, btn, pass));
      card.appendChild(p(t('meet.write.sealed'), 'sealed'));
      return;
    }
    const box = payoff(api);
    if (rec.text && rec.text.trim()) {
      box.appendChild(h('p', { class: 'step-label' }, t('meet.write.yours')));
      box.appendChild(h('div', { class: 'handed' }, rec.text));
    }
    if (s.poem) box.appendChild(poemNode(t, s.poem));
    box.appendChild(board(t, turn));
    for (const para of s.after || []) box.appendChild(p(para));
    box.appendChild(h('p', { class: 'step-label' }, t('meet.write.reply')));
    const ta = h('textarea', { rows: '4', class: 'reply', 'aria-label': t('meet.write.reply') });
    ta.value = rec.reply || '';
    ta.addEventListener('input', () => {
      if (q) store.update((s2) => { if (s2.answers[q.id]) s2.answers[q.id].reply = ta.value; }, { quiet: true });
      else saveStep(m.id, s.id, (x) => { x.reply = ta.value; }, { quiet: true });
    });
    box.appendChild(ta);
    box.appendChild(p(t('meet.write.reply.note'), 'muted small'));
  },

  // What Auden made of it, when nothing is asked first.
  turn(api) {
    const { t, s, card } = api;
    card.appendChild(board(t, s));
    for (const para of s.after || []) card.appendChild(p(para));
  },

  // Something to read before going on.
  read(api) {
    const { t, s, card, done, m } = api;
    if (s.title) card.appendChild(h('h2', { class: 'step-ask' }, prose(s.title)));
    for (const para of s.paras) card.appendChild(p(para));
    // A record to be played before going on.
    const rec = s.record ? api.player(s.record) : null;
    if (rec) card.appendChild(rec);
    if (!done) {
      card.appendChild(h('div', { class: 'row' }, h('button', { type: 'button', class: 'primary', onClick: () => { saveStep(m.id, s.id, (rec) => { rec.done = today(); }); api.finish(); } }, s.go || t('meet.read.go'))));
    }
  },

  // The student's own verdict on a book: one of the five Auden allowed a grown reader.
  verdict(api) {
    const { t, s, card, course, st, m } = api;
    const w = work(course, s.work);
    const rec = (st.verdicts && st.verdicts[s.work]) || {};
    label(api, 'meet.verdict.label');
    card.appendChild(h('h2', { class: 'step-ask' }, prose(s.ask || t('meet.verdict.ask', { title: w.title }))));
    for (const para of s.lead || t.list('meet.verdict.lead')) card.appendChild(p(para));
    const list = h('div', { class: 'options verdicts' });
    t.list('meet.verdict.options').forEach((text, i) => {
      list.appendChild(h('button', { type: 'button', class: 'option' + (rec.v === i + 1 ? ' chosen' : ''), 'aria-pressed': rec.v === i + 1 ? 'true' : 'false', onClick: () => {
        store.update((s2) => {
          s2.verdicts = s2.verdicts || {};
          s2.verdicts[s.work] = { ...(s2.verdicts[s.work] || {}), v: i + 1, date: today() };
        });
        saveStep(m.id, s.id, (x) => { x.done = today(); });
        api.finish();
      } }, text));
    });
    card.appendChild(list);
    if (rec.v) {
      const box = payoff(api);
      for (const para of [].concat((s.replies && s.replies[rec.v - 1]) || [])) box.appendChild(p(para));
      box.appendChild(p(t('meet.verdict.kept'), 'muted small'));
      const inp = h('textarea', { rows: '2', class: 'line-in', 'aria-label': t('meet.verdict.line'), placeholder: t('meet.verdict.line') });
      inp.value = rec.line || '';
      inp.addEventListener('input', () => store.update((s2) => { if (s2.verdicts && s2.verdicts[s.work]) s2.verdicts[s.work].line = inp.value; }, { quiet: true }));
      box.appendChild(inp);
      for (const para of s.after || []) box.appendChild(p(para));
    } else {
      card.appendChild(h('div', { class: 'row' }, skipButton(api)));
    }
  },

  // The second of Auden's two questions, asked of one writer.
  two(api) {
    const { t, s, card, r, done, m, course } = api;
    const w = work(course, s.work);
    label(api, 'meet.two.label');
    card.appendChild(h('h2', { class: 'step-ask' }, prose(s.ask || t('meet.two.ask', { author: w.author }))));
    for (const para of s.lead || t.list('meet.two.lead')) card.appendChild(p(para));
    const prompts = s.prompts || t.list('meet.two.prompts');
    const answers = [...(r.answers || [])];
    if (!done) {
      const btn = h('button', { type: 'button', class: 'primary', disabled: answers.filter((x) => x && x.trim()).length < 2 }, t('meet.two.set'));
      prompts.forEach((text, i) => {
        const inp = h('input', { type: 'text', class: 'line-in', id: `two-${s.id}-${i}` });
        inp.value = answers[i] || '';
        inp.addEventListener('input', () => {
          answers[i] = inp.value;
          saveStep(m.id, s.id, (x) => { x.answers = [...answers]; }, { quiet: true });
          btn.disabled = answers.filter((x) => x && x.trim()).length < 2;
        });
        card.appendChild(h('label', { class: 'field', for: inp.id }, h('span', null, prose(text)), inp));
      });
      btn.addEventListener('click', () => { saveStep(m.id, s.id, (x) => { x.answers = [...answers]; x.done = today(); }); api.finish(); });
      card.appendChild(h('div', { class: 'row' }, btn, h('span', { class: 'muted small' }, t('meet.two.min')), skipButton(api)));
      return;
    }
    const box = payoff(api);
    const dl = h('dl', { class: 'two-answers' });
    prompts.forEach((text, i) => {
      dl.appendChild(h('dt', null, prose(text)));
      dl.appendChild(h('dd', { class: 'yours' }, (answers[i] || '').trim() || t('meet.gaps.empty')));
      if (s.key[i]) dl.appendChild(h('dd', { class: 'theirs' }, prose(s.key[i])));
    });
    box.appendChild(dl);
    for (const para of s.after || []) box.appendChild(p(para));
    if (s.sources) box.appendChild(h('p', { class: 'source' }, t('meet.turn.sources', { n: s.sources.length }), ' ', s.sources.map((x) => prose(x + ' '))));
  },

  // Who says it? Passages from the reading, answered one at a time.
  spot(api) {
    const { t, s, card, r, done, m, unit, course, st } = api;
    label(api, 'meet.spot.label');
    card.appendChild(h('h2', { class: 'step-ask' }, prose(s.ask || t('meet.spot.ask'))));
    for (const para of s.lead || t.list('meet.spot.lead')) card.appendChild(p(para));
    const items = s.items.map((id) => unit.test.items.find((x) => x.id === id)).filter(Boolean);
    const got = { ...(r.got || {}) };
    const list = h('div', { class: 'spots' });
    const drawItems = () => {
      clear(list);
      items.forEach((item, i) => {
        const answered = got[item.id];
        const row = h('div', { class: 'spot' + (answered ? ' answered' : '') });
        if (item.kind === 'spot') {
          const it = item.versions ? item.versions[cantoVersion(st)] : item;
          const q = h('div', { class: 'quoted', lang: it.lang || null });
          if (it.lines) q.appendChild(verse(it.lines, { numbers: false }));
          else for (const para of it.paras || []) q.appendChild(h('p', null, para));
          row.appendChild(q);
        } else row.appendChild(p(item.q));
        const accepted = item.kind === 'spot' ? item.speaker : item.a;
        const shown = item.kind === 'spot' ? (item.speakerShown || item.speaker[0]) : (item.shown || item.a[0]);
        if (!answered) {
          const inp = h('input', { type: 'text', autocomplete: 'off', spellcheck: 'false', size: '24', 'aria-label': item.ask || t('meet.spot.field') });
          const go = () => {
            if (!inp.value.trim()) return;
            got[item.id] = { a: inp.value.trim(), ok: answerMatches(inp.value, accepted) };
            const all = items.every((x) => got[x.id]);
            saveStep(m.id, s.id, (x) => { x.got = { ...got }; if (all) x.done = today(); }, { quiet: !all });
            if (all) { api.finish(); return; }
            drawItems();
            const nextInput = list.querySelector('input');
            if (nextInput) nextInput.focus();
          };
          inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); go(); } });
          row.appendChild(h('div', { class: 'answer-row' }, h('label', null, h('span', null, item.kind === 'spot' ? (item.ask || t('meet.spot.field')) : t('meet.spot.answer')), inp), h('button', { type: 'button', onClick: go }, t('meet.spot.check'))));
        } else {
          const w = item.work ? work(course, item.work) : null;
          const line = h('p', { class: 'spot-key ' + (answered.ok ? 'right' : 'wrong') });
          line.appendChild(h('span', { class: 'yours' + (answered.ok ? '' : ' differs') }, answered.a));
          line.appendChild(document.createTextNode(' '));
          if (!answered.ok) line.appendChild(h('span', { class: 'theirs' }, shown));
          const where = [w ? `${w.author}, *${w.title}*` : null, item.where].filter(Boolean).join(', ');
          if (where) { line.appendChild(document.createTextNode(' · ')); line.appendChild(h('span', { class: 'muted' }, prose(where))); }
          row.appendChild(line);
          if (item.note) row.appendChild(p(item.note, 'muted small'));
        }
        list.appendChild(row);
        void i;
      });
    };
    drawItems();
    card.appendChild(list);
    if (!done) card.appendChild(h('div', { class: 'row' }, skipButton(api)));
    else {
      const box = payoff(api);
      for (const para of s.after || []) box.appendChild(p(para));
      if (unit.test && unit.test.items.length > items.length) box.appendChild(p(t('meet.spot.more', { n: unit.n, count: unit.test.items.length })));
    }
  },

  // The week's exercise: something to make.
  make(api) {
    const { t, s, card, unit, st } = api;
    const list = unit.making || [];
    const i = list.findIndex((x) => x.id === s.ex);
    const ex = list[i];
    const rec = st.making[ex.id];
    label(api, 'meet.make.label');
    card.appendChild(h('h2', { class: 'step-ask' }, prose(ex.title)));
    for (const para of s.paras || [ex.short].filter(Boolean)) card.appendChild(p(para));
    const state = rec && rec.done ? t('meet.make.done') : rec ? t('meet.make.begun') : null;
    card.appendChild(h('div', { class: 'row' },
      h('a', { class: 'btn' + (rec && rec.done ? '' : ' primary'), href: `#/unit/${unit.n}/making${i ? `/${i + 1}` : ''}` }, rec && rec.done ? t('meet.make.again') : t('meet.make.open')),
      state ? h('span', { class: 'muted small' }, state) : null));
  },

  // The book, and a question to carry into it.
  next(api) {
    bookBlock(api.card, api);
  },
};

// What a meeting ends with when a book comes next: its name, how long it
// is, the question to carry into it and the ways in. The front page shows
// the same thing while the book is being read.
export function bookBlock(card, { t, s, unit, course, st }) {
  const reads = s.reading !== false;
  const links = reads && !s.open ? readingLinks(course, unit, st, t, s.only) : null;
  const n = links ? links.children.length : 1;
  if (s.label !== false && (s.label || reads)) card.appendChild(h('p', { class: 'step-label' }, s.label || t('meet.next.label', { n })));
  if (s.title) card.appendChild(h('h2', { class: 'step-ask' }, prose(s.title)));
  for (const para of s.paras) card.appendChild(p(para));
  if (s.carry) card.appendChild(h('blockquote', { class: 'carry' }, h('p', { class: 'step-label' }, t('meet.next.carry', { n })), p(s.carry)));
  if (reads) {
    // The way into the book is the thing to do next, so it is the filled button.
    // A reader who has begun the book is sent on from the place they reached.
    if (s.open) {
      const from = s.short && s.short.from;
      const keys = unit.reading.flatMap((r) => r.items.flatMap((it) => (it.parts || []).map(([k]) => k))).filter((k) => !from || k.startsWith(from));
      const on = keys.some((k) => st.read[k]) ? keys.find((k) => !st.read[k]) : null;
      if (on) card.appendChild(h('div', { class: 'row' }, h('a', { class: 'btn primary', href: `#/read/${on}` }, t('meet.next.goon'))));
      else card.appendChild(h('div', { class: 'row' }, s.open.map((o, i) => h('a', { class: 'btn' + (i ? '' : ' primary'), href: o.href }, prose(o.label)))));
    } else if (links) card.appendChild(links);
    const way = shortWay(unit, st, t, s.short);
    if (way) card.appendChild(way);
  }
  if (s.heart) card.appendChild(h('p', { class: 'next-heart' }, h('a', { href: s.heart.href || '#/heart' }, prose(s.heart.label))));
  if (s.sources && s.sources.length) card.appendChild(h('p', { class: 'source' }, s.sources.map((x) => prose(x + ' '))));
  return card;
}
