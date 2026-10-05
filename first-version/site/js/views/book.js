// The student's book: the lines they kept, what they set down beside the
// writers and beside Auden, what they made, and how to keep it all.

import { h, p, clear, download, prose, plain, num } from '../lib/dom.js';
import * as store from '../lib/store.js';
import { today, iso, medium, dated } from '../lib/dates.js';
import { normWord } from '../lib/text.js';
import { standingOf, passedOn } from '../lib/heart.js';
import { cantoPieces, allPieces, work } from '../lib/course.js';
import { exercises, written } from './making.js';
import { standingText } from './heart.js';
import { clozeOf, flatSteps, gapLine, doorUnit } from './meeting.js';
import { plate } from '../lib/media.js';

// A cell that carries the heading of its column, shown beside it when the
// rows are stacked on a narrow screen.
export function cell(label, cls, ...children) {
  return h('td', { class: cls || null, 'data-label': label }, ...children);
}

// The attempts at the examination, one to a row.
export function attemptsTable(t, sittings, cls = 'stack') {
  const ft = h('table', { class: cls });
  ft.appendChild(h('thead', null, h('tr', null, h('th', null, t('final.record.date')), h('th', { class: 'n' }, t('final.record.time')), h('th', { class: 'n' }, t('final.record.words')), h('th', { class: 'n' }, t('final.record.slips')), h('th', { class: 'n' }, t('final.record.cantos')))));
  const fb = h('tbody');
  for (const x of sittings) {
    fb.appendChild(h('tr', null,
      h('td', null, medium(x.date)),
      cell(t('final.record.time'), 'n', t('final.minutes', { n: x.minutes })),
      cell(t('final.record.words'), 'n', `${num(x.typed)} / ${num(x.words)}`),
      cell(t('final.record.slips'), 'n', num(x.slips)),
      cell(t('final.record.cantos'), 'n', `${x.passed} / ${x.cantos}`),
    ));
  }
  ft.appendChild(fb);
  return ft;
}

// A chart, printed as the table it was made in: the headings once, and the
// rows the student wrote in, with what the course gave in each.
function chart(ex, rec) {
  const cols = ex.table.columns;
  const rows = ex.table.rows || Array.from({ length: ex.table.count }, (_, i) => ({ id: `r${i + 1}`, cells: {} }));
  const table = h('table', { class: 'chart' });
  table.appendChild(h('thead', null, h('tr', null, cols.map((c) => h('th', { scope: 'col', style: c.width ? { width: c.width } : null }, c.label)))));
  const tb = h('tbody');
  for (const row of rows) {
    const mine = (c) => (rec.cells?.[`${row.id}.${c.id}`] || '').trim();
    if (!cols.some((c) => row.cells?.[c.id] === undefined && mine(c))) continue;
    tb.appendChild(h('tr', null, cols.map((c, i) => {
      const given = row.cells?.[c.id];
      if (given === undefined) return h('td', { 'data-label': c.label, class: 'mine' }, mine(c));
      // What the course gave is a word or two, or a line or two cut from a book.
      const node = typeof given === 'string' ? given
        : given.lines ? h('div', { class: 'verse cell-quote' }, given.lines.filter(Boolean).map((l) => h('div', { class: 'vl' }, l)))
          : h('div', { class: 'cell-quote' }, (given.paras || []).map((x) => h('p', null, x)));
      return h(i === 0 ? 'th' : 'td', { scope: i === 0 ? 'row' : null, 'data-label': c.label }, node);
    })));
  }
  table.appendChild(tb);
  return h('div', { class: 'scroll-x' }, table);
}

// The words put into the gaps of a passage, each beside the writer's.
function pairs(c, rec, t) {
  return c.blanks.map((theirs, i) => {
    const mine = ((rec.answers || [])[i] || '').trim();
    return { mine: mine || t('meet.gaps.empty'), theirs, same: normWord(mine) === normWord(theirs), blank: !mine };
  });
}

// What a meeting left in the record, step by step.
function meetingItems(course, st, t, unit, m) {
  const items = [];
  const rec = (st.meet && st.meet[m.id]) || { steps: {} };
  const at = (unit.meetings || []).indexOf(m);
  const where = at >= 0 && unit.n ? `#/unit/${unit.n}/meet/${at + 1}` : null;
  for (const { s, sp } of flatSteps(m)) {
    const r = (rec.steps || {})[s.id] || {};
    if (s.kind === 'gaps') {
      const c = clozeOf(unit, sp);
      const w = c && st.words[c.id];
      if (w && w.shown) items.push({ title: t('book.words.title'), meta: c.cite || '', gaps: { c, answers: w.answers || [] }, text: pairs(c, w, t).map((x) => `${x.mine} / ${x.theirs}`).join('\n') });
      if (w && w.note && w.note.trim()) items.push({ title: t('notebook.note'), meta: '', text: w.note });
    } else if (s.kind === 'choose' && r.done) {
      const op = s.options.find((x) => x.id === r.choice);
      const line = (r.line || '').trim();
      if (op) items.push({ title: s.ask, meta: '', text: plain(op.label) + (line ? `\n${t('book.line')} ${line}` : '') });
    } else if (s.kind === 'order' && r.done && Array.isArray(r.order)) {
      // The order the reader gave, and beside each name the place the book gives it where that differs.
      const nth = t.list('meet.order.nth');
      const rank = (x) => s.scale.findIndex((y) => y.id === x.at);
      const book = [...s.items].sort((a, b) => rank(a) - rank(b));
      const lines = r.order.map((id, k) => {
        const it = s.items.find((x) => x.id === id);
        if (!it) return null;
        const bk = book.indexOf(it);
        return `${k + 1}. ${plain(it.label)}${bk === k ? '' : ` (${t('book.order.book', { nth: nth[bk] })})`}`;
      }).filter(Boolean);
      if (lines.length) items.push({ title: s.ask, meta: '', text: lines.join('\n') });
    } else if (s.kind === 'write') {
      const q = s.q ? (unit.questions || []).find((x) => x.id === s.q) : null;
      const a = q ? st.answers[q.id] : (r.text ? { text: r.text, handedIn: r.done, reply: r.reply } : null);
      if (a && a.text && a.text.trim()) {
        // Beside an answer that has been set down stands the first thing Auden said.
        const turn = q ? q.auden : s.turn;
        items.push({ title: q ? q.text : s.ask, meta: a.handedIn ? medium(a.handedIn) : t('notebook.draft'), text: a.text, auden: a.handedIn && turn ? turn.paras[0] : null, more: where });
        if (a.reply && a.reply.trim()) items.push({ title: t('meet.write.reply'), meta: '', text: a.reply });
      }
    } else if (s.kind === 'two' && r.done) {
      const prompts = s.prompts || t.list('meet.two.prompts');
      const lines = prompts.map((x, i) => `${plain(x)} ${(r.answers || [])[i] || ''}`.trim());
      items.push({ title: plain(s.ask || t('meet.two.ask', { author: work(course, s.work).author })), meta: '', text: lines.join('\n') });
    } else if (s.kind === 'verdict') {
      const v = st.verdicts && st.verdicts[s.work];
      if (v && v.v) {
        const w = work(course, s.work);
        items.push({ title: t('book.verdict.title', { author: w.author, title: w.title }), meta: v.date ? medium(v.date) : '', text: [t.list('meet.verdict.options')[v.v - 1], (v.line || '').trim()].filter(Boolean).join('\n') });
      }
    }
  }
  return items;
}

// Everything set down, in the order of the term.
export function collect(course, st, t) {
  const out = [];
  for (const u of course.units) {
    const items = [];
    const inMeetings = new Set();
    for (const m of u.meetings || []) {
      for (const { s } of flatSteps(m)) if (s.kind === 'write' && s.q) inMeetings.add(s.q);
      items.push(...meetingItems(course, st, t, u, m));
    }
    if (u.words && !(u.meetings || []).length) {
      const rec = st.words[u.words.id];
      if (rec && rec.shown) items.push({ title: t('book.words.title'), meta: u.words.cite || '', gaps: { c: u.words, answers: rec.answers || [] }, text: pairs(u.words, rec, t).map((x) => `${x.mine} / ${x.theirs}`).join('\n') });
      if (rec && rec.note && rec.note.trim()) items.push({ title: t('notebook.note'), meta: '', text: rec.note });
    }
    for (const q of u.questions || []) {
      if (inMeetings.has(q.id)) continue;
      const rec = st.answers[q.id];
      if (rec && rec.text && rec.text.trim()) {
        items.push({ title: plain(q.text), meta: rec.handedIn ? medium(rec.handedIn) : t('notebook.draft'), text: rec.text });
        if (rec.reply && rec.reply.trim()) items.push({ title: t('meet.write.reply'), meta: '', text: rec.reply });
      }
    }
    for (const ex of exercises(u)) {
      const rec = st.making[ex.id];
      const text = written(ex, rec);
      if (text.trim()) {
        items.push({ title: ex.title, meta: rec.done ? medium(rec.done) : t('notebook.draft'), text, table: ex.kind === 'table' ? ex : null, rec });
        if (rec.note && rec.note.trim()) items.push({ title: ex.reflect || t('notebook.note'), meta: '', text: rec.note });
      }
    }
    if (items.length) out.push({ unit: u, items });
  }
  return out;
}

function asText(course, st, t) {
  const lines = [t('site.title'), t('notebook.exported', { date: dated(today()) }), ''];
  if ((st.kept || []).length) {
    lines.push('', t('book.kept.title'), '='.repeat(40));
    for (const k of st.kept) lines.push('', k.words, plain(k.from || ''));
  }
  for (const { unit, items } of collect(course, st, t)) {
    lines.push('', `${t('unit.short', { n: unit.n })}. ${plain(unit.title)}`, '='.repeat(40));
    for (const it of items) {
      lines.push('', plain(it.title));
      if (it.meta) lines.push(plain(it.meta));
      lines.push('', it.text.trim());
    }
  }
  return lines.join('\n') + '\n';
}

// What was written is set in the narrow column; a chart has the width it was made in.
function entry(t, it) {
  const wide = !!it.table;
  const box = h('div', { class: wide ? 'entry' : 'entry col' });
  box.appendChild(h('h3', null, prose(it.title)));
  if (it.meta) box.appendChild(h('p', { class: 'small muted' }, prose(it.meta)));
  if (it.table) box.appendChild(chart(it.table, it.rec));
  else if (it.gaps) {
    // Each gap in the line it stood in, the reader's word struck where the writer's differs.
    const list = h('ul', { class: 'gap-lines' });
    it.gaps.c.blanks.forEach((_, i) => list.appendChild(h('li', null, gapLine(it.gaps.c, i, (it.gaps.answers[i] || '').trim()))));
    box.appendChild(list);
  } else box.appendChild(h('div', { class: 'handed' }, it.text));
  if (it.auden) {
    box.appendChild(h('p', { class: 'book-auden' }, h('span', { class: 'step-label' }, t('book.auden')), ' ', prose(it.auden),
      it.more ? h('span', { class: 'small' }, ' ', h('a', { href: it.more }, t('book.auden.more'))) : null));
  }
  return box;
}

export async function render(ctx) {
  const { t, course, refresh } = ctx;
  ctx.follow();
  // The page is as wide as a chart. Everything else on it keeps to the measure.
  const box = h('div', { class: 'col-wide book' });
  const head = h('div', { class: 'col' });
  head.appendChild(h('p', { class: 'kicker' }, t('book.kicker')));
  head.appendChild(h('h1', { tabindex: '-1' }, t('book.title')));
  for (const para of t.list('book.intro')) head.appendChild(p(para));
  box.appendChild(head);

  const list = h('div');
  box.appendChild(list);
  const draw = () => {
    clear(list);
    const st = store.get();
    let any = false;

    // ----- lines kept while reading -----
    const kept = st.kept || [];
    if (kept.length) {
      any = true;
      const sec = h('div', { class: 'col' }, h('h2', null, t('book.kept.title')));
      kept.forEach((k, i) => {
        const bq = h('blockquote', { class: 'kept-line' }, h('p', null, k.words));
        const src = h('p', { class: 'source' }, k.route ? h('a', { href: `#/${k.route}` }, prose(k.from)) : prose(k.from || ''));
        if (k.id) {
          src.appendChild(document.createTextNode(' · '));
          src.appendChild(h('a', { href: `#/heart/${encodeURIComponent(`own:${k.id}`)}` }, t('book.kept.learn')));
        }
        src.appendChild(document.createTextNode(' · '));
        src.appendChild(h('button', { type: 'button', class: 'quiet small', onClick: () => { store.update((s2) => { s2.kept.splice(i, 1); }); draw(); } }, t('book.kept.drop')));
        bq.appendChild(src);
        sec.appendChild(bq);
      });
      list.appendChild(sec);
    }

    // ----- the song the site opens with -----
    const opened = course.door ? meetingItems(course, st, t, doorUnit(course), course.door) : [];
    if (opened.length) {
      any = true;
      list.appendChild(h('div', { class: 'col' }, h('h2', null, h('a', { href: '#/door' }, t('book.door.title')))));
      for (const it of opened) list.appendChild(entry(t, it));
    }

    // ----- week by week -----
    for (const { unit, items } of collect(course, st, t)) {
      any = true;
      const pic = unit.plate ? plate(course, unit.plate) : null;
      list.appendChild(h('div', { class: 'col book-week' },
        pic ? h('img', { class: 'book-plate', src: `plates/${pic.file}`, alt: '', loading: 'lazy', decoding: 'async' }) : null,
        h('h2', null, h('a', { href: `#/unit/${unit.n}` }, prose(`${t('unit.short', { n: unit.n })}. ${unit.title}`)))));
      for (const it of items) list.appendChild(entry(t, it));
    }

    // ----- by heart -----
    const now = today();
    const pieces = [...cantoPieces(st, course), ...allPieces(course)].filter((x) => (st.heart[x.id]?.attempts || []).length || (st.heart[x.id]?.section || 0) > 0 || Object.keys(st.heart[x.id]?.clean || {}).length);
    if (pieces.length) {
      any = true;
      const sec = h('div', { class: 'col' }, h('h2', null, h('a', { href: '#/heart' }, t('heart.title'))));
      const ul = h('ul', { class: 'heart-list' });
      for (const x of pieces) {
        ul.appendChild(h('li', null, h('a', { href: `#/heart/${encodeURIComponent(x.id)}` }, prose(x.title)), h('span', { class: 'muted' }, ` · ${standingText(t, standingOf(st.heart[x.id], now)).text}`)));
      }
      sec.appendChild(ul);
      list.appendChild(sec);
    }
    const sittings = st.final.sittings || [];
    if (sittings.length) {
      any = true;
      const passed = passedOn(sittings);
      list.appendChild(h('div', { class: 'col' }, h('h2', null, h('a', { href: '#/examination' }, t('term.exam.title'))), passed ? p(t('ledger.final.passed', { date: medium(passed) })) : null));
      list.appendChild(h('div', { class: 'scroll-x keep' }, attemptsTable(t, sittings)));
    }
    if (!any) list.appendChild(h('div', { class: 'col' }, p(t('book.empty'), 'muted'), h('div', { class: 'row' }, h('a', { class: 'btn primary', href: '#/' }, t('book.empty.go')))));
  };
  draw();

  // ----- keeping it -----
  const tail = h('div', { class: 'col' });
  box.appendChild(tail);
  // Saving and restoring a copy stand together, so that a page that cannot
  // hand the browser a file can leave them out.
  const copy = h('div', { class: 'keep-copy' });
  tail.appendChild(copy);
  copy.appendChild(h('h2', null, t('notebook.keep.title')));
  for (const para of t.list('notebook.keep')) copy.appendChild(p(para));
  const msg = h('p', { class: 'small', 'aria-live': 'polite', tabindex: '-1' });
  const file = h('input', { type: 'file', accept: 'application/json,.json', style: { display: 'none' } });
  // Restoring replaces everything kept here, so it asks first.
  const asking = h('div', { class: 'row' });
  file.addEventListener('change', async () => {
    const f = file.files[0];
    if (!f) return;
    msg.textContent = '';
    clear(asking);
    let text;
    try {
      text = await f.text();
      store.checkJSON(text);
    } catch {
      msg.textContent = t('notebook.restore.bad');
      file.value = '';
      return;
    }
    asking.appendChild(h('span', null, t('notebook.restore.confirm')));
    asking.appendChild(h('button', { type: 'button', class: 'primary', onClick: () => {
      store.importJSON(text);
      // The page fills with the work in the copy, and one line says that it
      // was restored and which day's copy it was.
      draw();
      clear(asking);
      file.value = '';
      const at = store.savedAt(text);
      msg.textContent = at ? t('notebook.restored', { date: medium(iso(new Date(at))) }) : t('notebook.restored.undated');
      msg.focus({ preventScroll: true });
      msg.scrollIntoView({ block: 'center' });
    } }, t('notebook.restore.yes')));
    const no = h('button', { type: 'button', class: 'quiet', onClick: () => { clear(asking); file.value = ''; restore.focus(); } }, t('notebook.restore.no'));
    asking.appendChild(no);
    no.focus();
  });
  const restore = h('button', { type: 'button', onClick: () => file.click() }, t('notebook.restore'));
  copy.appendChild(h('div', { class: 'row' },
    h('button', { type: 'button', class: 'primary', onClick: () => download(`english-135-${today()}.json`, store.exportJSON()) }, t('notebook.save')),
    restore,
    h('button', { type: 'button', onClick: () => download(`english-135-${today()}.txt`, asText(course, store.get(), t), 'text/plain') }, t('notebook.text')),
    file,
  ));
  copy.appendChild(asking);
  copy.appendChild(msg);

  const det = h('details', null, h('summary', null, t('notebook.reset.title')));
  det.appendChild(p(t('notebook.reset.body')));
  const zone = h('div', { class: 'row' });
  const ask = h('button', { type: 'button' }, t('notebook.reset.ask'));
  ask.addEventListener('click', () => {
    clear(zone);
    zone.appendChild(h('span', null, t('notebook.reset.confirm')));
    zone.appendChild(h('button', { type: 'button', class: 'primary', onClick: () => { store.reset(); location.hash = '#/'; refresh(); } }, t('notebook.reset.yes')));
    const no = h('button', { type: 'button', class: 'quiet', onClick: () => { clear(zone); zone.appendChild(ask); ask.focus(); } }, t('notebook.reset.no'));
    zone.appendChild(no);
    no.focus();
  });
  zone.appendChild(ask);
  det.appendChild(zone);
  tail.appendChild(det);
  return { node: box, title: t('book.title') };
}
