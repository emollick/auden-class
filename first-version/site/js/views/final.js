// The final examination as Donald Pearce describes it: cantos of the
// Divine Comedy written out from memory, three hours by the clock.

import { h, p, clear, num, prose, plain } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { today, medium } from '../lib/dates.js';
import { compare, passes, allowedSlips, comparedWords } from '../lib/text.js';
import { standingOf } from '../lib/heart.js';
import { pieceLines } from '../lib/texts.js';
import { termEnd } from '../lib/schedule.js';
import { cantoPiece, cantoPieces, cantoVersion, cantoTitle, EXAM_CANTOS } from '../lib/course.js';
import { standingText, markedScript, dropClosedFifth } from './heart.js';
import { attemptsTable } from './book.js';

export const DURATION = 3 * 60 * 60 * 1000;

// The last five minutes: the clock drops its hours, and turns red.
const LAST = 5 * 60 * 1000;

export function clock(ms) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const hh = Math.floor(s / 3600);
  const mm = Math.floor((s % 3600) / 60);
  const ss = String(s % 60).padStart(2, '0');
  if (s * 1000 <= LAST) return `${mm}:${ss}`;
  return `${hh}:${String(mm).padStart(2, '0')}:${ss}`;
}

export function timeLeft(sitting, now = Date.now()) {
  return sitting.startedAt + DURATION - now;
}

function minutes(ms) {
  return Math.max(1, Math.round(ms / 60000));
}

// Mark the scripts of a sitting against the text.
async function mark(course, version, cantos, scripts) {
  const out = [];
  for (const partId of cantos) {
    const piece = cantoPiece(version, partId, course);
    const lines = await pieceLines(piece);
    const script = scripts[partId] || '';
    const result = compare(lines, script);
    // A box left empty is a canto not written.
    out.push({ partId, piece, lines, script, result, written: result.typedWords > 0, ok: passes(result) });
  }
  return out;
}

let ticker = null;
// Whether a sitting was under way when the page was last drawn, and when
// one was last found to have ended since.
let wasSitting = false;
let endedAt = 0;

export async function render(ctx) {
  clearTimeout(ticker);
  // Every part of this page is drawn from the record, so it follows the
  // record when another tab starts a sitting, writes in one or hands it in.
  ctx.follow((st) => [st.final, st.heart, st.fifth, st.cantoVersion, st.enrolled]);
  const s = store.get();
  if (wasSitting && !s.final.sitting) endedAt = Date.now();
  wasSitting = !!s.final.sitting;
  if (s.final.sitting) return sitting(ctx);
  const out = await before(ctx);
  // The sitting has ended since the page was last drawn, handed in from
  // another tab perhaps. The result is shown from its head, however far
  // down the paper this window stood, and so it is if the page is drawn a
  // second time in the same moment.
  if (Date.now() - endedAt < 2000) out.top = true;
  return out;
}

// ---------- before, and after ----------

async function before(ctx) {
  const { t, course, reopen } = ctx;
  dropClosedFifth(course);
  const s = store.get();
  const now = today();
  const version = cantoVersion(s);
  const pieces = cantoPieces(s, course);
  const box = h('div', { class: 'col' });
  box.appendChild(h('p', { class: 'kicker' }, t('final.kicker')));
  box.appendChild(h('h1', { tabindex: '-1' }, t('final.title')));

  // The paper just handed in, or the last one sat.
  const last = s.final.last;
  if (last) {
    try {
      const results = await mark(course, last.version, last.cantos, last.scripts);
      box.appendChild(resultBlock(ctx, last, results));
    } catch (err) {
      console.error(err);
    }
  }

  if (!last) for (const para of t.list('final.intro')) box.appendChild(p(para));

  box.appendChild(h('h2', null, t('final.paper.title')));
  const list = h('ol', { class: 'stations standings' });
  for (const piece of pieces) {
    const st = standingText(t, standingOf(s.heart[piece.id], now));
    list.appendChild(h('li', null, h('a', { href: `#/heart/${encodeURIComponent(piece.id)}` },
      h('span', { class: 'st-n' }),
      h('span', { class: 'st-title' }, prose(piece.title)),
      h('span', { class: 'st-state ' + st.cls }, st.text),
      h('span', { class: 'st-what' }, t('n.lines', { n: piece.lineCount })),
    )));
  }
  const missing = pieces.length < EXAM_CANTOS;
  if (missing) {
    list.appendChild(h('li', null, h('a', { href: '#/cantos' },
      h('span', { class: 'st-n' }),
      h('span', { class: 'st-title' }, t('heart.fifth.title')),
      h('span', { class: 'st-state late' }, t('heart.fifth.state')),
      h('span', { class: 'st-what' }, t('heart.fifth.what')),
    )));
  }
  box.appendChild(list);
  box.appendChild(p(t('heart.cantos.version', { version: t(`cantos.version.${version}.short`) }), 'small muted'));

  box.appendChild(h('h2', null, t('final.rules.title')));
  const ol = h('ol', { class: 'rules' });
  for (const rule of t.list('final.rules')) ol.appendChild(h('li', null, rule));
  box.appendChild(ol);

  const zone = h('div', { class: 'row' });
  const begin = h('button', { type: 'button', class: 'primary', disabled: missing }, last ? t('final.begin.again') : t('final.begin'));
  begin.addEventListener('click', () => {
    clear(zone);
    zone.appendChild(h('span', null, t('final.begin.confirm')));
    zone.appendChild(h('button', { type: 'button', class: 'primary', onClick: () => {
      store.update((st) => {
        // (a sitting begun in another tab is not begun again over what is written in it)
        if (st.final.sitting) return;
        st.final.sitting = { startedAt: Date.now(), version, cantos: pieces.map((x) => x.canto), scripts: {} };
      });
      reopen();
    } }, t('final.begin.yes')));
    const no = h('button', { type: 'button', class: 'quiet', onClick: () => { clear(zone); zone.appendChild(begin); begin.focus(); } }, t('final.begin.no'));
    zone.appendChild(no);
    no.focus();
  });
  zone.appendChild(begin);
  box.appendChild(zone);
  if (missing) box.appendChild(p(t('final.begin.missing'), 'small muted'));

  const sittings = s.final.sittings || [];
  if (sittings.length) {
    box.appendChild(h('h2', null, t('final.record.title')));
    box.appendChild(attemptsTable(t, sittings, 'tight stack'));
  }
  if (last) {
    box.appendChild(h('h2', null, t('final.about.title')));
    for (const para of t.list('final.intro')) box.appendChild(p(para));
  }
  for (const para of t.list('final.source')) box.appendChild(p(para, 'source'));
  return { node: box, title: t('final.title') };
}

function resultBlock(ctx, last, results) {
  const { t } = ctx;
  const box = h('section', { class: 'exam-result' });
  const slips = results.reduce((a, r) => a + r.result.slips, 0);
  const words = results.reduce((a, r) => a + r.result.refWords, 0);
  const typed = results.reduce((a, r) => a + r.result.typedWords, 0);
  const passed = results.filter((r) => r.ok).length;
  const v = h('div', { class: 'verdict' });
  v.appendChild(h('p', { class: 'kicker' }, t('final.result.kicker', { date: medium(last.date), n: last.minutes })));
  // The time ran out with the script unfinished.
  if (last.timeUp) v.appendChild(p(t('final.result.timeup')));
  v.appendChild(h('p', { class: 'figure' }, t('final.result.figure', { n: passed, total: results.length })));
  v.appendChild(p(`${t('final.result.written', { n: typed, words: num(typed) })} ${t('final.result.words', { n: slips, slips: num(slips), words: num(words) })}`));
  v.appendChild(p(passed === results.length ? t('final.result.pass') : t('final.result.fail', { n: results.length - passed })));
  box.appendChild(v);
  box.appendChild(p(t('heart.marked.key'), 'small muted'));
  for (const r of results) {
    if (!r.written) {
      box.appendChild(h('p', { class: 'script' }, h('strong', null, prose(r.piece.title)), ' · ', h('span', { class: 'red' }, t('final.result.canto.none'))));
      continue;
    }
    const det = h('details', { class: 'script' });
    det.appendChild(h('summary', null,
      h('strong', null, prose(r.piece.title)), ' · ',
      t('final.result.canto', { n: r.result.typedWords, written: num(r.result.typedWords), slips: num(r.result.slips), words: num(r.result.refWords), allowed: allowedSlips(r.result.refWords) }),
      ' · ', h('span', { class: r.ok ? 'done' : 'red' }, r.ok ? t('final.result.canto.ok') : t('final.result.canto.no')),
    ));
    det.appendChild(markedScript(t, r.lines, r.script, { prose: r.piece.prose }));
    box.appendChild(det);
  }
  return box;
}

// ---------- the sitting ----------

// The time ran out in the middle of a word, and the keys still on their way
// would move the page: with no box to take it, a space scrolls the result
// out of sight. They are let fall until the typing has stopped for a second.
function holdKeys() {
  const began = Date.now();
  let last = began;
  const stop = () => window.removeEventListener('keydown', onKey, true);
  function onKey(e) {
    const now = Date.now();
    if (now - last > 1000 || now - began > 15000) { stop(); return; }
    last = now;
    if (e.key === 'Tab' || e.ctrlKey || e.metaKey || e.altKey) return;
    e.preventDefault();
  }
  window.addEventListener('keydown', onKey, true);
  setTimeout(stop, 15000);
}

async function collect(ctx, { typing = false } = {}) {
  const { course, reopen } = ctx;
  clearTimeout(ticker);
  const cur = store.get().final.sitting;
  if (!cur) return;
  const ended = Math.min(Date.now(), cur.startedAt + DURATION);
  const timeUp = Date.now() >= cur.startedAt + DURATION;
  const results = await mark(course, cur.version, cur.cantos, cur.scripts);
  store.update((st) => {
    const record = {
      date: today(),
      minutes: minutes(ended - cur.startedAt),
      version: cur.version,
      cantos: results.length,
      passed: results.filter((r) => r.ok).length,
      slips: results.reduce((a, r) => a + r.result.slips, 0),
      words: results.reduce((a, r) => a + r.result.refWords, 0),
      typed: results.reduce((a, r) => a + r.result.typedWords, 0),
    };
    st.final.sittings.push(record);
    st.final.last = { date: record.date, minutes: record.minutes, version: cur.version, cantos: cur.cantos, scripts: cur.scripts, timeUp };
    // A canto written at the examination counts as a writing-out. A box
    // left empty leaves the canto's standing as it was.
    for (const r of results) {
      if (!r.written) continue;
      st.heart[r.piece.id] = st.heart[r.piece.id] || { attempts: [] };
      st.heart[r.piece.id].attempts.push({ date: record.date, slips: r.result.slips, words: r.result.refWords, lines: r.result.totalLines, exact: r.result.exactLines, ok: r.ok });
    }
    st.final.sitting = null;
  });
  // The result opens at its head, with the heading in focus, whether the
  // paper was handed in or the time ran out in the middle of a word.
  if (typing) holdKeys();
  await reopen();
}

async function sitting(ctx) {
  const { t } = ctx;
  const cur = store.get().final.sitting;
  const box = h('div', { class: 'col exam' });
  if (timeLeft(cur) <= 0) {
    // The time ran out while the page was closed.
    box.appendChild(h('h1', { tabindex: '-1' }, t('final.over.title')));
    box.appendChild(p(t('final.over.body')));
    box.appendChild(h('div', { class: 'row' }, h('button', { type: 'button', class: 'primary', onClick: () => collect(ctx) }, t('final.over.mark'))));
    return { node: box, title: t('final.title') };
  }

  const time = h('span', { class: timeLeft(cur) <= LAST ? 'clock red' : 'clock', role: 'timer' }, clock(timeLeft(cur)));
  const bar = h('div', { class: 'exam-bar' }, h('span', { class: 'kicker' }, t('final.kicker')), time);
  box.appendChild(bar);
  box.appendChild(h('h1', { tabindex: '-1' }, t('final.sitting.title')));
  for (const para of t.list('final.sitting.intro')) box.appendChild(p(para));

  for (const partId of cur.cantos) {
    box.appendChild(h('h2', null, prose(cantoTitle(partId))));
    const count = h('div', { class: 'count' });
    const refused = h('div', { class: 'small', role: 'status' });
    const ta = h('textarea', { class: 'verse-in', rows: '14', spellcheck: 'false', autocomplete: 'off', autocapitalize: 'off', autocorrect: 'off', 'aria-label': plain(cantoTitle(partId)) });
    ta.value = cur.scripts[partId] || '';
    const setCount = () => { const n = comparedWords(ta.value); count.textContent = t('n.words', { n, words: num(n) }); };
    ta.addEventListener('input', () => {
      store.update((st) => { if (st.final.sitting) st.final.sitting.scripts[partId] = ta.value; }, { quiet: true });
      setCount();
      refused.textContent = '';
    });
    // Nothing is pasted or dropped in, and the box says so.
    const refuse = (e) => { e.preventDefault(); refused.textContent = t('final.paste'); };
    ta.addEventListener('paste', refuse);
    ta.addEventListener('drop', refuse);
    ta.addEventListener('beforeinput', (e) => { if (e.inputType === 'insertFromPaste' || e.inputType === 'insertFromDrop') refuse(e); });
    setCount();
    box.appendChild(ta);
    box.appendChild(count);
    box.appendChild(refused);
  }

  const zone = h('div', { class: 'row' });
  const hand = h('button', { type: 'button', class: 'primary' }, t('final.hand'));
  hand.addEventListener('click', () => {
    clear(zone);
    zone.appendChild(h('span', null, t('final.hand.confirm')));
    zone.appendChild(h('button', { type: 'button', class: 'primary', onClick: () => { store.flush(); collect(ctx); } }, t('final.hand.yes')));
    const no = h('button', { type: 'button', class: 'quiet', onClick: () => { clear(zone); zone.appendChild(hand); hand.focus(); } }, t('final.hand.no'));
    zone.appendChild(no);
    no.focus();
  });
  zone.appendChild(hand);
  box.appendChild(zone);

  // The clock changes as each second of the time left runs out. The line in
  // the masthead keeps the same beat, so the two never disagree.
  const tick = () => {
    const now = store.get().final.sitting;
    if (!now || !document.body.contains(time)) return;
    const left = timeLeft(now);
    time.textContent = clock(left);
    time.classList.toggle('red', left <= LAST);
    if (left <= 0) { store.flush(); collect(ctx, { typing: true }); return; }
    ticker = setTimeout(tick, (left % 1000) + 10);
  };
  ticker = setTimeout(tick, (timeLeft(cur) % 1000) + 10);
  return { node: box, title: t('final.title') };
}
