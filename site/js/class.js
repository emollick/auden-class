// The class: the afternoons that the students in Auden's course recorded, in
// the order the chief witness tells them. Each says what he said, shows what he
// put on the blackboard, names what he played, and gives what he asked for by
// the next meeting. Under each are the passages on this site that it was about.
//
// The words and the figures' data are in data/class.json, which build/class.mjs
// writes from content/class.mjs. Nothing on the page is asked of the reader.

import { el, tie, still } from './kit/draw.js';
import { getJSON } from './piece.js';
import { rich, para } from './rich.js';
import { specimen } from './home.js';
import { player } from './kit/player.js';
import { figures } from './class-figures.js';
import { stepTo } from './places.js';

const words = (list) => (list || []).join(' ').split(/\s+/).length;
// A page reference inside a sentence is set a size smaller and in the grey of the labels, so that the
// sentence is read through and the page is there for whoever wants it.
const REF = /\((?:[A-Z][\p{L}’. ]{1,40}, )?pp?\.[ \u00a0][\d–,\u00a0\u2060 and]+\)/gu;
function refs(node) {
  const tw = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
  const hits = [];
  for (let n = tw.nextNode(); n; n = tw.nextNode()) if (n.data.search(REF) >= 0) hits.push(n);
  for (const n of hits) {
    const kids = []; let at = 0;
    for (const m of n.data.matchAll(REF)) { kids.push(n.data.slice(at, m.index), el('span', { class: 'page-ref', text: m[0] })); at = m.index + m[0].length; }
    kids.push(n.data.slice(at));
    n.replaceWith(...kids);
  }
  return node;
}
const said = (t, attrs) => refs(para(t, attrs));
// running words keep one measure; two paragraphs or more, or one long one, run in two columns on a wide page
const prose = (paras, cls = '') => el('div', { class: `prose${(paras || []).length >= 2 || words(paras) >= 150 ? ' flow2' : ''} ${cls}`.trim() }, (paras || []).map((t) => said(t)));
// a witness and his pages are not parted where a line turns: a short reference keeps to one line, and in a long one the page numbers keep to their "pp."
const NB = '\u00a0';
const bind = (t) => String(t || '').split('; ').map((part) => (part.length <= 34 && !/[[\]]/.test(part)
  ? part.replace(/ /g, NB)
  : part.replace(/\b(pp?\.) (?=\d)/g, `$1${NB}`).replace(/(\d) and (?=\d)/g, `$1${NB}and${NB}`))).join('; ');
// a short title inside a line set large is not parted where the line turns
const whole = (t) => String(t || '').replace(/\*([^*]{1,26})\*/g, (m, x) => `*${x.replace(/ /g, NB)}*`);
const srcOf = (p, cls = 'part-src') => (p.src ? el('span', { class: cls }, rich(bind(p.src))) : null);
const label = (p) => el('p', { class: 'part-hd' }, [el('span', { class: 'lab', text: p.label }), srcOf(p)]);
// when an afternoon was: the halves of the line stand with a point between them, and where the line turns
// between two halves no point begins the new line (the stylesheet draws the points and hides the first of a line)
const whenLine = (t) => el('p', { class: 'scene-when' }, [el('span', { class: 'when-in' }, String(t || '').split(' · ').map((part) => el('span', { text: part })))]);

function folds(list) {
  if (!list || !list.length) return null;
  return el('div', { class: 'folds' }, list.map((f) => el('details', { class: 'fold' }, [
    el('summary', {}, [el('span', { text: f.h })]),
    el('div', { class: 'fold-in' }, [...f.paras.map((t) => said(t)), f.src ? para(f.src, { class: 'fold-src' }) : null]),
  ])));
}

// the passages a part opens: cards cut from the pieces, and plain ways in
function doors(list, mounted) {
  if (!list || !list.length) return null;
  const cards = list.filter((d) => d.card);
  const plain = list.filter((d) => !d.card);
  return el('div', { class: 'doors' }, [
    cards.length ? el('div', { class: `specs${cards.length === 1 ? ' specs-one' : cards.length === 2 ? ' specs-two' : ''}` }, cards.map((d) => specimen(d.card, mounted, { note: d.why, go: d.go }))) : null,
    plain.length ? el('ul', { class: 'ways' }, plain.map((d) => el('li', {}, [el('a', { href: d.href }, [el('span', {}, rich(d.label)), el('span', { class: 'spec-arrow', 'aria-hidden': 'true', text: '→' })])]))) : null,
  ]);
}

const WIDE = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(min-width: 980px)') : null;

// what is said under a figure, in small type: two paragraphs stand side by side on a wide page, and one long one runs in two columns
function notes(note) {
  const list = [].concat(note || []);
  if (!list.length) return null;
  return el('div', { class: `board-note${list.length >= 2 ? ' flow2 two' : words(list) >= 90 ? ' flow2' : ''}` }, list.map((t) => said(t)));
}

const PART = {
  note: (p) => el('div', { class: 'band' }, [prose(p.paras)]),

  list: (p) => el('div', { class: 'listed' }, [
    label(p),
    el(p.numbered ? 'ol' : 'ul', { class: 'listed-items' }, p.items.map((t) => el('li', {}, [el('span', {}, rich(whole(t)))]))),
    ...(p.after || []).map((t) => said(t, { class: 'listed-after' })),
  ]),

  // the work that was set, as far as it is on record: a line to each thing, with its witness, and the ways from it
  set: (p, ctx) => el('div', { class: `listed set${p.side ? '' : ' band set-wide'}` }, [
    label(p),
    el('ul', { class: 'set-items' }, p.items.map((it) => {
      const ways = it.ways || [];
      // ways that open a passage are marked as this site's, so that they are not taken for what the student worked on; a way to another afternoon needs no word
      const here = ways.some((w) => !w.scene);
      return el('li', {}, [
        el('span', { class: 'set-text' }, rich(whole(it.text))),
        it.by ? el('span', { class: 'set-by' }, rich(it.by)) : null,
        ways.length ? el('span', { class: 'set-ways' }, [
          here ? el('span', { class: 'set-on', text: it.waysLabel || 'On this site' }) : null,
          ...ways.map((w) => el('a', { href: w.href }, [el('span', {}, rich(w.label)), el('span', { class: 'set-arrow', 'aria-hidden': 'true', text: w.up ? '↑' : w.down ? '↓' : '→' })])),
        ]) : null,
      ]);
    })),
    doors(p.doors, ctx.mounted),
  ]),

  board: (p) => el('figure', { class: `band board board-${p.figure}` }, [
    el('figcaption', { class: 'board-hd' }, [el('span', { class: 'lab', text: p.label }), srcOf(p)]),
    figures[p.figure](p),
    notes(p.note),
  ]),

  heard: (p, ctx) => {
    const rec = p.record;
    const play = rec ? player(rec.file, 'the record') : null;
    if (play) ctx.stops.push(play.stop);
    const says = p.says || [];
    const more = says.length > 2;
    return el('div', { class: 'band heard' }, [
      label(p),
      el('div', { class: `heard-in${more ? ' has-more' : ''}` }, [
        prose(more ? says.slice(0, 2) : says, 'heard-a'),
        el('div', { class: `heard-rec${rec || p.played ? '' : ' is-none'}` }, rec ? [
          para(tie(rec.title), { class: 'rec-title' }),
          play,
          para([rec.performers, rec.credit].filter(Boolean).join(' '), { class: 'src' }),
          p.recordNote ? para(p.recordNote, { class: 'heard-note' }) : null,
        ] : [
          p.played ? para(tie(p.played.title), { class: 'rec-title' }) : null,
          p.played && p.played.by ? para(p.played.by, { class: 'src' }) : null,
          p.recordNote ? para(p.recordNote, { class: 'heard-note' }) : null,
        ]),
        more ? prose(says.slice(2), 'heard-b') : null,
      ]),
    ]);
  },

  next: (p, ctx) => el('div', { class: 'band next' }, [
    el('div', { class: 'asked' }, [
      el('p', { class: 'board-hd' }, [el('span', { class: 'lab', text: p.label }), srcOf(p)]),
      el('ol', { class: 'asks' }, p.asks.map((t) => el('li', {}, [el('span', {}, rich(whole(t)))]))),
      ...(p.after || []).map((t) => said(t, { class: 'asked-after' })),
    ]),
    doors(p.doors, ctx.mounted),
    p.answers ? el('ul', { class: 'ways answers' }, p.answers.map((a) => el('li', {}, [el('a', { href: `#/class/${a.to}` }, [el('span', {}, rich(a.text)), el('span', { class: 'spec-arrow', 'aria-hidden': 'true', text: '↓' })])]))) : null,
    folds(p.folds),
  ]),

  doors: (p, ctx) => {
    const d = doors(p.doors, ctx.mounted); const f = folds(p.folds);
    const pair = p.doors && p.doors.length === 1 && p.doors[0].card && f;
    if (!pair) return el('div', { class: 'band opened' }, [label(p), d, f]);
    // one card alone: what is folded stands beside it, under its own heading, and on a wide page it stands open
    if (WIDE && WIDE.matches) f.querySelector('details').open = true;
    return el('div', { class: 'band opened opened-pair' }, [el('div', { class: 'pair-a' }, [label(p), d]), f]);
  },
};
// what people said of the class afterwards: a few of their own words each, with who and where
PART.voices = (p) => el('div', { class: 'band voices' }, [
  label(p),
  el('div', { class: 'voices-in' }, p.items.map((v) => el('figure', { class: 'voice' }, [
    el('blockquote', { text: `“${v.quote}”` }),
    el('figcaption', {}, [el('b', {}, rich(v.who)), v.of ? el('span', { class: 'voice-of' }, rich(v.of)) : null, el('span', { class: 'voice-src' }, rich(v.src))]),
  ]))),
  ...(p.after || []).map((t) => para(t, { class: 'voices-after' })),
]);
PART.load = (p) => PART.board({ ...p, figure: 'load' });
PART.cantos = (p) => PART.board({ ...p, figure: 'cantos' });
// what is folded, standing by itself under a scene
PART.folds = (p) => el('div', { class: 'band' }, [folds(p.folds)]);
// what stands beside the paragraphs that lead to it: a list, or a passage those paragraphs are about
const beside = (p, ctx) => (p.kind === 'doors'
  ? el('div', { class: 'opened beside' }, [label(p), doors(p.doors, ctx.mounted)])
  : PART[p.kind](p, ctx));

function scene(s, ctx) {
  const small = !!s.small;
  const sec = el('section', { class: `scene${small ? ' scene-small' : ''}`, id: `scene-${s.id}` });
  // Over the rule an afternoon begins under, at the right, a small way back to the list of the afternoons: the page
  // is some forty screens long on a phone. It stands in the space between two afternoons and takes no room of its
  // own. (The first afternoon stands straight under the list and has none; nor has a short one that follows a short
  // one, which stands beside it on a wide page.)
  const up = ctx.contents && ctx.before && !(small && ctx.before.small)
    ? el('a', { class: 'scene-up', href: '#/class' }, [el('span', { text: ctx.contents }), el('span', { class: 'scene-up-a', 'aria-hidden': 'true', text: '↑' })]) : null;
  ctx.before = s;
  sec.append(el('header', { class: 'scene-hd' }, [
    up,
    whenLine(s.when),
    el(small ? 'h3' : 'h2', {}, rich(tie(s.title))),
    para(bind(s.src), { class: 'scene-src' }),
  ]));
  // a sentence a lecture opened on is set large, with whose words they are over it
  if (s.said) sec.append(el('figure', { class: 'scene-said' }, [el('figcaption', {}, rich(s.said.by)), el('blockquote', { text: `“${s.said.quote}”` })]));
  const parts = (s.parts || []).slice();
  // a list that the opening paragraphs lead to stands beside them, and so does a passage that some of the paragraphs are about:
  // the paragraphs from sideFrom up to sideTo stand beside it, and the rest run on above and below
  const first = parts[0];
  const side = !small && first && (first.kind === 'list' || ((first.kind === 'set' || first.kind === 'doors') && first.side)) ? parts.shift() : null;
  const n = s.paras.length;
  const from = side ? Math.min(s.sideFrom || 0, n - 1) : 0;
  // (on a narrow page the passage comes straight after the paragraph it shows: sideToNarrow says where)
  const upTo = WIDE && !WIDE.matches && s.sideToNarrow ? s.sideToNarrow : s.sideTo;
  const to = side && upTo ? Math.max(from + 1, Math.min(upTo, n)) : n;
  if (from > 0) sec.append(el('div', { class: 'band' }, [prose(s.paras.slice(0, from))]));
  sec.append(side
    ? el('div', { class: `band with-side${from > 0 ? ' follows' : ''}` }, [el('div', { class: 'prose' }, s.paras.slice(from, to).map((t) => said(t))), beside(side, ctx)])
    : el('div', { class: 'band' }, [small ? el('div', { class: 'prose' }, s.paras.map((t) => said(t))) : prose(s.paras)]));
  if (to < n) sec.append(el('div', { class: 'band resumes' }, [prose(s.paras.slice(to))]));
  for (const p of parts) if (PART[p.kind]) sec.append(PART[p.kind](p, ctx));
  return sec;
}

export async function renderClass(main, site = {}, at = null) {
  const page = await getJSON('data/class.json');
  document.title = [page.title, site.name].filter(Boolean).join(' · ');
  const ctx = { mounted: [], stops: [], contents: page.contents, before: null };
  // small scenes that follow one another stand side by side
  const laid = [];
  for (const s of page.scenes) {
    const node = scene(s, ctx);
    const row = laid[laid.length - 1];
    if (s.small && row && row.classList.contains('scenes-small')) row.append(node);
    else laid.push(s.small ? el('div', { class: 'scenes-small' }, [node]) : node);
  }

  // the afternoons by name: on a wide page a few short columns under the opening, on a narrow one a single line that opens
  const toc = el('details', { class: 'fold toc-fold' }, [
    el('summary', {}, [el('span', { text: page.contents })]),
    el('ol', {}, page.scenes.map((s) => el('li', {}, [el('a', { href: `#/class/${s.id}` }, rich(s.title))]))),
  ]);
  const roomy = window.matchMedia ? window.matchMedia('(min-width: 760px)') : null;
  const setToc = () => { toc.open = !roomy || roomy.matches; };
  setToc();
  if (roomy && roomy.addEventListener) roomy.addEventListener('change', setToc);

  const root = el('article', { class: 'class' }, [
    el('header', { class: 'piece-hd class-hd' }, [el('p', { class: 'kicker', text: page.kicker }), el('h1', { text: page.title }), para(page.where, { class: 'where' })]),
    el('div', { class: 'class-lede' }, page.lede.map((t) => para(t))),
    el('nav', { class: 'class-toc', 'aria-label': page.contents, tabindex: '-1' }, [toc]),
    ...laid,
    el('section', { class: 'sec sources class-end' }, [
      el('h2', { text: 'Sources' }),
      el('ul', {}, page.sources.map((t) => (typeof t === 'string' ? el('li', {}, rich(t)) : el('li', { class: 'src-group' }, [el('span', { class: 'src-h' }, rich(t.h)), el('ul', {}, t.items.map((x) => el('li', {}, rich(x))))])))),
      page.caveats && page.caveats.length ? el('details', { class: 'fold end-fold' }, [el('summary', {}, [el('span', { text: 'Where this page may be wrong' })]), el('ul', { class: 'fold-in' }, page.caveats.map((t) => el('li', {}, rich(t))))]) : null,
    ]),
    el('section', { class: 'sec readon class-on' }, [
      el('a', { href: '#/' }, [el('b', { text: 'The works' }), el('span', { text: 'A page for every work on the list' })]),
      el('a', { href: '#/shelf' }, [el('b', { text: 'The shelf' }), el('span', { text: 'The list, and the books that can be read here' })]),
    ]),
  ]);

  // a scene named in the address is come to; the page is not drawn again for it
  const come = (id, smooth) => {
    const node = id && root.querySelector(`#scene-${CSS.escape(id)}`);
    if (node) node.scrollIntoView({ block: 'start', behavior: smooth && !still() ? 'smooth' : 'instant' });
    return !!node;
  };
  root.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    // the way back from an afternoon: the list is opened and come to, and the page is not drawn again
    const up = e.target && e.target.closest ? e.target.closest('a.scene-up') : null;
    if (up) {
      e.preventDefault();
      stepTo('#/class');   // a step of its own, so that Back returns to the place in the afternoon
      const nav = root.querySelector('.class-toc');
      toc.open = true;
      // (the afternoon the reader came up from is marked in the list, so that they can go on from it)
      const from = up.closest('[id^="scene-"]');
      toc.querySelectorAll('li.from').forEach((li) => { li.classList.remove('from'); li.firstChild.removeAttribute('aria-current'); });
      const row = from ? toc.querySelector(`a[href="#/class/${CSS.escape(from.id.slice('scene-'.length))}"]`) : null;
      if (row) { row.parentNode.classList.add('from'); row.setAttribute('aria-current', 'location'); }
      nav.scrollIntoView({ block: 'start', behavior: still() ? 'instant' : 'smooth' });
      nav.focus({ preventScroll: true });
      return;
    }
    const a = e.target && e.target.closest ? e.target.closest('a[href^="#/class/"]') : null;
    if (!a) return;
    const id = a.getAttribute('href').slice('#/class/'.length);
    if (!root.querySelector(`#scene-${CSS.escape(id)}`)) return;
    e.preventDefault();
    stepTo(a.getAttribute('href'));
    come(id, true);
  });

  main.replaceChildren(root);
  const leave = () => { ctx.mounted.forEach((m) => m.destroy()); ctx.stops.forEach((stop) => stop()); if (roomy && roomy.removeEventListener) roomy.removeEventListener('change', setToc); };
  // (the router scrolls a new page to its top and then calls this)
  leave.after = () => {
    if (!at) return;
    const go = () => { if (root.isConnected) come(at, false); };
    requestAnimationFrame(() => requestAnimationFrame(go));
    setTimeout(go, 700);
  };
  return leave;
}
