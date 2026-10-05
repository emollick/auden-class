// Learning by heart: the text, the stretches, the writing out.

import { h, p, clear, num, prose } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { today, medium } from '../lib/dates.js';
import { compare, passes, allowedSlips, written, comparedWords, normWord } from '../lib/text.js';
import { standingOf, stretches, slice, cleanThrough, lineReached } from '../lib/heart.js';
import { pieceLines, loadIndex } from '../lib/texts.js';
import { verse, marked } from '../lib/render.js';
import { getPiece, allPieces, ownPieces, cantoPiece, cantoVersion, learningOrder, cantoTitle, isCanto, examOver, CANTO_VERSIONS, SET_CANTOS } from '../lib/course.js';

function lineCount(lines) {
  return lines.filter((l) => l !== '').length;
}

export function standingText(t, st) {
  if (st.state === 'new') return { text: '', cls: '' };
  if (st.state === 'begun') return { text: t('heart.state.begun'), cls: '' };
  if (st.state === 'learning') return { text: t('heart.state.learning'), cls: '' };
  if (st.state === 'once') return { text: t('heart.state.once'), cls: '' };
  return { text: t('heart.state.known'), cls: 'done' };
}

// The lines of a piece that are known: all of them once it has been
// written out whole within the limit; before that, the lines of the
// stretches written with the text covered, counting from the first.
export async function linesKnown(s, piece) {
  const rec = s.heart[piece.id];
  if (!rec) return 0;
  if ((rec.attempts || []).some((a) => a.ok)) return piece.lineCount || 0;
  if (!Object.keys(rec.clean || {}).length) return 0;
  try {
    const lines = await pieceLines(piece);
    const secs = stretches(lines, piece.prose, piece.stretch);
    return lineReached(lines, secs, cleanThrough(rec, secs.length), piece.prose, piece.lineCount);
  } catch (err) {
    console.error(err);
    return 0;
  }
}

// A fifth canto chosen in one version may be closed in another: in the
// prose version only a canto read through against the printed book can be
// learned. Such a choice is cleared, and the cantos page says so once.
let cleared = null;
export function dropClosedFifth(course) {
  const s = store.get();
  if (!s.fifth || !isCanto(s.fifth) || SET_CANTOS.includes(s.fifth)) return;
  if (!cantoPiece(cantoVersion(s), s.fifth, course).unverified) return;
  cleared = s.fifth;
  store.update((st) => { st.fifth = null; });
}

// A script against the text. Slips are marked in the stretch the script
// covers. What comes after it was not written: it is printed plainly, with
// one note of how many words it is.
export function markedScript(t, lines, typed, { prose: asProse = false } = {}) {
  const box = h('div');
  const w = written(lines, typed);
  const part = lines.slice(0, w.lines);
  if (part.length) box.appendChild(marked(compare(part, typed), part, { prose: asProse }));
  if (w.restWords) {
    box.appendChild(p(t('marked.rest', { n: w.restWords, words: num(w.restWords) }), 'small muted'));
    let rest = lines.slice(w.lines);
    while (rest.length && rest[0] === '') rest = rest.slice(1);
    box.appendChild(verse(rest, { numbers: false, prose: asProse }));
  }
  return box;
}

// ---------- the list ----------

export async function renderList(ctx) {
  const { t, course } = ctx;
  // The standings are taken from the record, so the page follows the record.
  ctx.follow();
  dropClosedFifth(course);
  const s = store.get();
  const now = today();
  const box = h('div', { class: 'col' });
  box.appendChild(h('p', { class: 'kicker' }, t('heart.kicker')));
  box.appendChild(h('h1', { tabindex: '-1' }, t('heart.title')));
  for (const para of t.list('heart.intro')) box.appendChild(p(para));

  const version = cantoVersion(s);
  const row = (piece) => {
    const label = standingText(t, standingOf(s.heart[piece.id], now));
    const what = [piece.cite, piece.lineCount && !(piece.own && piece.prose) ? t('n.lines', { n: piece.lineCount }) : null].filter(Boolean).join(' · ');
    return h('li', null,
      h('a', { href: `#/heart/${encodeURIComponent(piece.id)}` },
        h('span', { class: 'st-n' }),
        h('span', { class: 'st-title' }, prose(piece.title)),
        label.text ? h('span', { class: 'st-state ' + label.cls }, label.text) : null,
        h('span', { class: 'st-what' }, what),
      ),
    );
  };

  const own = ownPieces(s);

  // ----- a few lines to begin with -----
  if (allPieces(course).length) {
    box.appendChild(h('h2', null, t('heart.set.title')));
    for (const para of t.list('heart.set.intro')) box.appendChild(p(para));
    const setList = h('ol', { class: 'stations standings' });
    allPieces(course).forEach((c) => setList.appendChild(row(c)));
    box.appendChild(setList);
  }

  // ----- lines of the student's own choosing -----
  box.appendChild(h('h2', null, t('heart.own.title')));
  for (const para of t.list('heart.own.intro')) box.appendChild(p(para));
  if (own.length) {
    const ownList = h('ol', { class: 'stations standings' });
    own.forEach((c) => ownList.appendChild(row(c)));
    box.appendChild(ownList);
  } else box.appendChild(p(t('heart.own.none'), 'muted'));

  // ----- what Auden asked of the class -----
  box.appendChild(h('h2', null, t('heart.cantos.title')));
  for (const para of t.list('heart.cantos.intro')) box.appendChild(p(para));
  const cantoList = h('ol', { class: 'stations standings' });
  for (const partId of learningOrder(s)) {
    if (partId) cantoList.appendChild(row(cantoPiece(version, partId, course)));
    else {
      cantoList.appendChild(h('li', null, h('a', { href: '#/cantos' },
        h('span', { class: 'st-n' }),
        h('span', { class: 'st-title' }, t('heart.fifth.title')),
        h('span', { class: 'st-what' }, t('heart.fifth.what')),
      )));
    }
  }
  box.appendChild(cantoList);
  box.appendChild(p(`${t('heart.cantos.version', { version: t(`cantos.version.${version}.short`) })} ${t('heart.cantos.version.note')}`, 'small muted'));
  box.appendChild(h('div', { class: 'row' },
    h('a', { class: 'btn', href: '#/cantos' }, t('heart.cantos.change')),
    h('a', { class: 'btn quiet', href: '#/examination' }, t('nav.examination')),
  ));

  box.appendChild(h('h2', null, t('heart.how.title')));
  const ol = h('ol', { class: 'plain' });
  for (const item of t.list('heart.how')) ol.appendChild(h('li', null, prose(item)));
  box.appendChild(ol);
  const note = h('div', { class: 'note' });
  for (const para of t.list('heart.rule')) note.appendChild(p(para));
  box.appendChild(note);
  return { node: box, title: t('heart.title') };
}

// ---------- the version, and the fifth canto ----------

export async function renderCantos(ctx) {
  const { t, course, refresh } = ctx;
  dropClosedFifth(course);
  const s = store.get();
  const box = h('div', { class: 'col-wide' });
  box.appendChild(h('p', { class: 'crumbs' }, h('a', { href: '#/heart' }, t('heart.title'))));
  box.appendChild(h('h1', { tabindex: '-1' }, t('cantos.title')));
  const intro = h('div', { class: 'col' });
  for (const para of t.list('cantos.intro')) intro.appendChild(p(para));
  box.appendChild(intro);

  const version = cantoVersion(s);
  const fs = h('fieldset', { class: 'col' }, h('legend', null, t('cantos.version')));
  for (const v of CANTO_VERSIONS) {
    const id = `ver-${v.id}`;
    fs.appendChild(h('div', { class: 'choice' },
      h('input', { type: 'radio', name: 'version', id, checked: version === v.id, onChange: () => { store.update((st) => { st.cantoVersion = v.id; }); dropClosedFifth(course); refresh(); } }),
      h('label', { for: id }, h('strong', null, t(`cantos.version.${v.id}`)), ' ', t(`cantos.version.${v.id}.note`)),
    ));
  }
  box.appendChild(fs);
  const begun = Object.keys(s.heart).some((k) => k.startsWith('canto:') && !k.startsWith(`canto:${version}:`) && (s.heart[k].attempts || []).length);
  if (begun) box.appendChild(h('p', { class: 'small muted col' }, t('cantos.version.begun')));

  box.appendChild(h('h2', null, t('cantos.set.title')));
  const setCol = h('div', { class: 'col' });
  setCol.appendChild(p(t('cantos.set.body', { list: SET_CANTOS.map(cantoTitle).join(', ') })));
  box.appendChild(setCol);

  const index = await loadIndex(`dante-${version}`);
  const unchecked = version === 'temple' && index.parts.some((x) => x.unverified);

  box.appendChild(h('h2', null, t('cantos.fifth.title')));
  const fifthCol = h('div', { class: 'col' });
  for (const para of t.list('cantos.fifth.intro')) fifthCol.appendChild(p(para));
  if (unchecked) fifthCol.appendChild(p(t('cantos.unverified.note')));
  if (cleared) {
    fifthCol.appendChild(h('p', { class: 'notice', role: 'status' }, prose(t('cantos.fifth.cleared', { canto: cantoTitle(cleared) }))));
    cleared = null;
  }
  fifthCol.appendChild(h('div', { class: 'row' }, h('a', { class: 'btn', href: `#/read/dante-${version}` }, t('cantos.readall'))));
  fifthCol.appendChild(p(t('cantos.grid.note'), 'small muted'));
  box.appendChild(fifthCol);

  const status = h('p', { class: 'figure', 'aria-live': 'polite' });
  const setStatus = () => {
    const cur = store.get().fifth;
    clear(status);
    status.appendChild(prose(cur ? t('cantos.fifth.chosen', { canto: cantoTitle(cur), n: course.cantoLines[cur] }) : t('cantos.fifth.none')));
  };
  setStatus();

  for (const group of ['Inferno', 'Purgatorio', 'Paradiso']) {
    box.appendChild(h('h3', null, h('em', null, group)));
    const grid = h('div', { class: 'canto-grid', role: 'radiogroup', 'aria-label': group });
    index.parts.filter((x) => x.id.startsWith(group.slice(0, 3).toLowerCase())).forEach((part) => {
      const n = Number(part.id.slice(4));
      const id = `c-${part.id}`;
      const isSet = SET_CANTOS.includes(part.id);
      const closed = !isSet && version === 'temple' && !!part.unverified;
      const input = h('input', {
        type: 'radio', name: 'fifth', id, checked: s.fifth === part.id, disabled: isSet || closed,
        onChange: () => { store.update((st) => { st.fifth = part.id; }); setStatus(); },
      });
      grid.appendChild(h('label', { class: 'canto' + (isSet ? ' is-set' : '') + (closed ? ' is-closed' : ''), for: id, title: isSet ? t('cantos.isset') : closed ? t('cantos.unverified.title') : null },
        input,
        h('span', { class: 'c-n' }, String(n)),
        h('span', { class: 'c-l' }, isSet ? t('cantos.set.mark') : String(course.cantoLines[part.id])),
      ));
    });
    box.appendChild(grid);
  }
  box.appendChild(h('div', { class: 'verdict' }, status));
  const tail = h('div', { class: 'col' });
  tail.appendChild(h('div', { class: 'row' }, h('a', { class: 'btn primary', href: '#/heart' }, t('cantos.done'))));
  box.appendChild(tail);
  return { node: box, title: t('cantos.title') };
}

// ---------- one piece ----------

export async function renderPiece(ctx, id, mode) {
  const { t, course } = ctx;
  const s = store.get();
  const piece = getPiece(id, s, course);
  if (!piece) return { node: h('div', { class: 'col' }, h('h1', { tabindex: '-1' }, t('notfound.title')), p(t('notfound.body'))), title: t('notfound.title') };
  // While the examination's clock runs, the cantos stay shut.
  if (s.final.sitting && piece.kind === 'canto') {
    return { node: h('div', { class: 'col' },
      h('p', { class: 'crumbs' }, h('a', { href: '#/heart' }, t('heart.title'))),
      h('p', { class: 'kicker' }, piece.cite),
      h('h1', { tabindex: '-1' }, prose(piece.title)),
      p(examOver(s) ? t('exam.over.shut') : t('heart.exam.running')),
    ), title: piece.title };
  }
  const lines = await pieceLines(piece);
  const total = lineCount(lines);
  // counted as the comparison counts them, so the page and the result agree
  const words = comparedWords(lines);
  // How the margin is numbered: a prose version gives a paragraph to each tercet.
  const look = piece.own ? { prose: piece.prose, first: 1, step: 1, numbers: false }
    : piece.prose ? { prose: true, first: 1, step: 3 } : { first: piece.from || 1, every: piece.every || 3 };
  const base = `#/heart/${encodeURIComponent(id)}`;

  const box = h('div', { class: 'col' });
  box.appendChild(h('p', { class: 'crumbs' }, h('a', { href: '#/heart' }, t('heart.title'))));
  box.appendChild(h('p', { class: 'kicker' }, piece.cite));
  box.appendChild(h('h1', { tabindex: '-1' }, prose(piece.title)));
  if (piece.why) for (const para of [].concat(piece.why)) box.appendChild(p(para));
  let size;
  if (piece.own && piece.prose) size = t('heart.size.words', { words: num(words) });
  else if (piece.prose) size = t('heart.size.prose', { lines: piece.lineCount, words: num(words) });
  else size = t('heart.size.verse', { n: total, words: num(words) });
  // The standing is drawn again whenever a check or a writing-out changes it.
  const status = h('p', { class: 'muted' });
  const setStatus = () => { status.textContent = [size, standingText(t, standingOf(store.get().heart[id], today())).text].filter(Boolean).join(' · '); };
  setStatus();
  box.appendChild(status);

  const tabs = h('div', { class: 'seg', role: 'group', 'aria-label': t('heart.tabs') });
  for (const [m, label] of [['read', t('heart.tab.read')], ['learn', t('heart.tab.learn')], ['write', t('heart.tab.write')]]) {
    tabs.appendChild(h('button', { type: 'button', 'aria-pressed': String(mode === m), onClick: () => { location.hash = m === 'read' ? base : `${base}/${m}`; } }, label));
  }
  box.appendChild(h('div', { class: 'row' }, tabs));

  const body = h('div');
  box.appendChild(body);
  const env = { id, piece, lines, look, total, words, base, setStatus };

  if (mode === 'read') {
    for (const para of t.list('heart.read.intro')) body.appendChild(p(para, 'muted'));
    // The editors of the prose version put some words in square brackets.
    if (piece.version === 'temple' && lines.some((l) => l.includes('['))) body.appendChild(p(t('heart.brackets'), 'muted'));
    body.appendChild(verse(lines, look));
    if (piece.unverified) body.appendChild(h('div', { class: 'note' }, p(t('heart.unverified'))));
    if (piece.note) body.appendChild(h('div', { class: 'note' }, p(piece.note)));
    if (piece.source) body.appendChild(h('p', { class: 'source' }, piece.source));
    const attempts = s.heart[id]?.attempts || [];
    if (attempts.length) {
      body.appendChild(h('h2', null, t('heart.record')));
      // On a phone each row is stacked, the two figures under their headings.
      const table = h('table', { class: 'tight stack' }, h('thead', null, h('tr', null, h('th', null, t('heart.record.date')), h('th', { class: 'n' }, t('heart.record.words')), h('th', { class: 'n' }, t('heart.record.slips')), h('th', null, ''))));
      const tb = h('tbody');
      attempts.forEach((a) => tb.appendChild(h('tr', null, h('td', null, medium(a.date)), h('td', { class: 'n', 'data-label': t('heart.record.words') }, a.words !== undefined ? num(a.words) : ''), h('td', { class: 'n', 'data-label': t('heart.record.slips') }, num(a.slips)), h('td', null, a.ok ? (a.slips === 0 ? t('heart.record.exact') : t('heart.record.clean')) : ''))));
      table.appendChild(tb);
      body.appendChild(table);
    }
  } else if (mode === 'learn') {
    renderLearn(ctx, body, env);
  } else {
    renderWrite(ctx, body, env);
  }
  return { node: box, title: piece.title };
}

function renderLearn(ctx, body, { id, piece, lines, look, setStatus }) {
  const { t } = ctx;
  const secs = stretches(lines, piece.prose, piece.stretch);
  const one = secs.length === 1;
  // the margin number of each line
  const nums = [];
  let n = look.first;
  for (const l of lines) { nums.push(l === '' ? null : n); if (l !== '') n += look.step || 1; }
  const asked = Number(new URLSearchParams(location.hash.split('?')[1] || '').get('s'));
  let k = Math.min(asked > 0 ? asked - 1 : (store.get().heart[id]?.section || 0), secs.length - 1);
  let whole = false; // from the beginning to here
  let veil = 'open';

  const draw = () => {
    clear(body);
    const sec = secs[k];
    const from = whole ? 0 : sec.from;
    const stretch = slice(lines, from, sec.to);
    const a = nums[from];
    // A paragraph of the prose is a tercet. The last one holds the canto's closing line as well.
    const b = !piece.prose ? nums[sec.to] : k === secs.length - 1 && piece.lineCount ? piece.lineCount : nums[sec.to] + 2;
    const cleanMarks = store.get().heart[id]?.clean || {};
    // The heading and the way forward change when the stretch is done.
    const kicker = h('p', { class: 'kicker' });
    const forward = h('button', { type: 'button', class: 'quiet', disabled: k >= secs.length - 1, onClick: () => go(k + 1) });
    const setDone = () => {
      const done = !!(store.get().heart[id]?.clean || {})[k];
      let head;
      if (piece.own) head = whole ? t('heart.learn.whole.own') : one ? '' : t('heart.learn.part', { k: k + 1, n: secs.length });
      else if (one) head = t('heart.learn.only', { a, b });
      else head = whole ? t('heart.learn.whole', { a, b }) : t('heart.learn.stretch', { k: k + 1, n: secs.length, a, b });
      kicker.textContent = [head, done && !whole ? t('heart.learn.done') : ''].filter(Boolean).join(' · ');
      forward.textContent = done ? t('heart.learn.next') : t('heart.learn.skip');
    };
    setDone();
    body.appendChild(kicker);
    if (k === 0 && !whole && !Object.keys(cleanMarks).length) for (const para of t.list('heart.learn.intro')) body.appendChild(p(para));

    const veilSeg = h('div', { class: 'seg', role: 'group', 'aria-label': t('heart.veil') });
    const order = ['open', 'letters', 'covered'];
    for (const v of order) {
      veilSeg.appendChild(h('button', { type: 'button', 'aria-pressed': String(veil === v), onClick: () => { veil = v; drawText(); veilSeg.querySelectorAll('button').forEach((bt, i) => bt.setAttribute('aria-pressed', String(order[i] === v))); } }, t(`heart.veil.${v}`)));
    }
    body.appendChild(h('div', { class: 'row' }, veilSeg));

    const textBox = h('div');
    const drawText = () => { clear(textBox); textBox.appendChild(verse(stretch, { ...look, first: a, veil })); };
    drawText();
    body.appendChild(textBox);

    const ta = h('textarea', { class: 'verse-in', rows: String(piece.prose ? 8 : Math.min(stretch.length + 2, 16)), spellcheck: 'false', autocomplete: 'off', autocapitalize: 'off', autocorrect: 'off' });
    body.appendChild(h('label', { class: 'field' }, h('span', null, t('heart.learn.field')), ta));
    const out = h('div', { 'aria-live': 'polite' });
    const check = h('button', { type: 'button', class: 'primary', onClick: () => {
      if (!ta.value.trim()) { ta.focus(); return; }
      const result = compare(stretch, ta.value);
      clear(out);
      const clean = result.slips === 0;
      if (clean && veil === 'covered') {
        store.update((st) => {
          st.heart[id] = st.heart[id] || { attempts: [] };
          st.heart[id].clean = st.heart[id].clean || {};
          const first = whole ? 0 : k;
          for (let i = first; i <= k; i++) if (!st.heart[id].clean[i]) st.heart[id].clean[i] = today();
        }, { quiet: true });
        setDone();
        setStatus();
      }
      let verdict;
      if (!clean) verdict = t('heart.learn.slips', { n: result.slips });
      else if (veil === 'covered') verdict = t('heart.learn.clean.covered');
      else verdict = t('heart.learn.clean');
      out.appendChild(h('div', { class: 'verdict' }, h('p', { class: 'figure' }, verdict)));
      if (!clean) out.appendChild(marked(result, stretch, { prose: piece.prose }));
      const next = h('div', { class: 'row' });
      next.appendChild(h('button', { type: 'button', onClick: () => { ta.value = ''; clear(out); ta.focus(); } }, t('heart.learn.again')));
      if (clean && veil !== 'covered') {
        next.appendChild(h('button', { type: 'button', class: 'primary', onClick: () => { veil = veil === 'open' ? 'letters' : 'covered'; draw(); } }, veil === 'open' ? t('heart.learn.toLetters') : t('heart.learn.toCovered')));
      }
      if (clean && veil === 'covered') {
        if (!whole && k > 0) next.appendChild(h('button', { type: 'button', onClick: () => { whole = true; veil = 'covered'; draw(); } }, t('heart.learn.fromTop')));
        if (k < secs.length - 1) next.appendChild(h('button', { type: 'button', class: 'primary', onClick: () => go(k + 1) }, t('heart.learn.next')));
        else next.appendChild(h('a', { class: 'btn primary', href: `#/heart/${encodeURIComponent(id)}/write` }, t('heart.learn.toWrite')));
      }
      out.appendChild(next);
    } }, t('heart.learn.check'));
    body.appendChild(h('div', { class: 'row' }, check));
    body.appendChild(out);

    const nav = h('div', { class: 'row' });
    if (!one) {
      nav.appendChild(h('button', { type: 'button', class: 'quiet', disabled: k === 0, onClick: () => go(k - 1) }, t('heart.learn.prev')));
      nav.appendChild(forward);
    }
    if (whole) nav.appendChild(h('button', { type: 'button', class: 'quiet', onClick: () => { whole = false; veil = 'open'; draw(); } }, t('heart.learn.backToStretch')));
    body.appendChild(nav);
  };
  const go = (to) => {
    k = Math.max(0, Math.min(secs.length - 1, to));
    whole = false;
    veil = 'open';
    store.update((st) => { st.heart[id] = st.heart[id] || { attempts: [] }; st.heart[id].section = k; }, { quiet: true });
    setStatus();
    draw();
    body.scrollIntoView({ block: 'start' });
  };
  draw();
}

function renderWrite(ctx, body, { id, piece, lines, base, setStatus }) {
  const { t } = ctx;
  const draftKey = `heart:${id}`;
  const drawForm = () => {
    clear(body);
    // What is written in the box is saved as it is written, so the box follows the record.
    ctx.follow((st) => [st.drafts[draftKey], st.heart[id], !!st.final.sitting]);
    for (const para of t.list('heart.write.intro')) body.appendChild(p(para));
    const ta = h('textarea', { class: 'verse-in', rows: '18', spellcheck: 'false', autocomplete: 'off', autocapitalize: 'off', autocorrect: 'off', 'aria-label': t('heart.write.field') });
    ta.value = store.get().drafts[draftKey] || '';
    ta.addEventListener('input', () => store.update((st) => { st.drafts[draftKey] = ta.value; }, { quiet: true }));
    body.appendChild(ta);
    body.appendChild(h('div', { class: 'row' },
      h('button', { type: 'button', class: 'primary', onClick: () => {
        if (!ta.value.trim()) { ta.focus(); return; }
        const result = compare(lines, ta.value);
        const ok = passes(result);
        store.update((st) => {
          st.heart[id] = st.heart[id] || { attempts: [] };
          st.heart[id].attempts.push({ date: today(), slips: result.slips, words: result.refWords, lines: result.totalLines, exact: result.exactLines, ok });
          delete st.drafts[draftKey];
        });
        setStatus();
        drawResult(result, ok, ta.value);
      } }, t('heart.write.compare')),
    ));
  };
  const drawResult = (result, ok, typed) => {
    clear(body);
    // The marked script is shown this once and is not kept, so it is not drawn again.
    ctx.follow(false);
    const st = standingOf(store.get().heart[id], today());
    const v = h('div', { class: 'verdict', 'aria-live': 'polite' });
    v.appendChild(h('p', { class: 'figure' }, result.slips === 0 ? t('heart.verdict.exact') : t('heart.verdict.figure', { n: result.slips, slips: num(result.slips), words: num(result.refWords) })));
    const allowed = allowedSlips(result.refWords);
    let line;
    if (ok && st.known) line = t('heart.verdict.known');
    else if (ok) line = result.slips === 0 ? t('heart.verdict.once.exact') : t('heart.verdict.once');
    else if (allowed === 0) line = t('heart.verdict.notyet.exact');
    else line = t('heart.verdict.notyet', { n: allowed });
    v.appendChild(h('p', null, line));
    body.appendChild(v);

    // Each word that memory put in the place of the writer's is a word the
    // reader expected and the writer did not use.
    const bare = (x) => x.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
    const changes = [];
    result.lines.forEach((ln) => ln.parts.forEach((part) => { if (part.kind === 'wrong' && part.typed && bare(part.typed) && bare(part.text)) changes.push(part); }));
    if (changes.length) {
      body.appendChild(h('h2', null, t('heart.changed.title')));
      for (const para of t.list('heart.changed.intro')) body.appendChild(p(para));
      const ul = h('ul', { class: 'pairs changed' });
      changes.slice(0, 14).forEach((c) => ul.appendChild(h('li', null, h('span', { class: 'yours differs' }, bare(c.typed)), h('span', { class: 'theirs' }, bare(c.text)))));
      body.appendChild(ul);
      if (changes.length > 14) body.appendChild(p(t('heart.changed.more', { n: changes.length - 14 }), 'small muted'));
    }
    // What the site has to say about words of the piece: after a script
    // with slips, about the words that were changed or left out; after a
    // script without any, about all of them.
    if (piece.notes && piece.notes.length) {
      const off = new Set();
      result.lines.forEach((ln) => ln.parts.forEach((part) => {
        if (part.kind === 'wrong' || part.kind === 'missing') for (const w of part.text.split(/\s+/)) off.add(normWord(w));
      }));
      const said = result.slips === 0 ? piece.notes : piece.notes.filter((x) => x.on.some((w) => off.has(normWord(w))));
      if (said.length) {
        body.appendChild(h('h2', null, result.slips === 0 ? t('heart.notes.all') : t('heart.notes.title')));
        const dl = h('div', { class: 'word-notes' });
        for (const x of said) dl.appendChild(h('div', { class: 'word-note' }, h('p', { class: 'word-head' }, prose(x.head)), p(x.note)));
        body.appendChild(dl);
      }
    }
    if (result.slips > 0) {
      body.appendChild(h('h2', null, t('heart.marked.title')));
      body.appendChild(p(t('heart.marked.key'), 'small muted'));
      body.appendChild(markedScript(t, lines, typed, { prose: piece.prose }));
    }
    body.appendChild(h('div', { class: 'row' },
      h('button', { type: 'button', onClick: drawForm }, t('heart.write.again')),
      h('a', { class: 'btn quiet', href: `${base}/learn` }, t('heart.write.toLearn')),
      h('a', { class: 'btn quiet', href: '#/heart' }, t('heart.write.toList')),
    ));
    body.scrollIntoView({ block: 'start' });
  };
  drawForm();
}
