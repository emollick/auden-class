// The front page. Auden's first question of a poem stands at its head, and
// under it a line or two from each work on his list, with the marks of one
// lens drawn on them. The works are sorted by the three subjects he would
// have required of every student in a college for poets: prosody, rhetoric,
// comparative philology.
//
// What is shown comes from data/front.json, which build/front.mjs cuts from
// the pieces; the marks are drawn by the same kit as the piece itself.

import { el, PARTS, marked } from './kit/draw.js';
import { mountPlate } from './kit/plate.js';
import { getJSON } from './piece.js';
import { para, rich } from './rich.js';
import { stepTo } from './places.js';

const SUBJECTS = [
  { id: 'prosody', n: 'I', name: 'Prosody', gloss: 'The measure of a line, and its rhymes.', ways: ['beat', 'rhyme'] },
  { id: 'rhetoric', n: 'II', name: 'Rhetoric', gloss: 'The figures of speech, and the build of a sentence.', ways: ['figure', 'sentence'] },
  { id: 'philology', n: 'III', name: 'Philology', gloss: 'What a word meant when it was written, and a line beside its translation.', ways: ['word', 'compare'] },
];

const WAYS = {
  beat: {
    name: 'Beat',
    how: 'The rule under each line is its measure. In English and German verse the rule has a long stroke at each beat, and French verse counts its syllables. The dots are the stresses of the speaking voice, and red marks a place where the voice leaves the measure.',
  },
  rhyme: {
    name: 'Rhyme',
    how: 'The letters that carry a rhyme take a color, and an arc joins each rhyme to the next line that answers it. A dotted thread follows a sound that comes back inside the lines.',
  },
  figure: {
    name: 'Figure',
    how: 'The parts of a figure of speech are underlined, like with like in one color, and joined the way the figure joins them.',
  },
  sentence: {
    name: 'Sentence',
    how: 'The parts of a sentence are underlined, each kind in a color of its own.',
  },
  word: {
    name: 'Word',
    how: 'A word or a phrase is underlined, and a note under it gives what it meant when the line was written, where it is taken from, or what it says in English.',
  },
  compare: {
    name: 'Two versions',
    how: 'The original stands with an English version of it, and words that answer each other are underlined in one color.',
  },
};

// the small key under a specimen: what each color of rule stands for
function keyOf(lens) {
  const items = lens.kind === 'figure' ? lens.parts : lens.kind === 'sentence' ? lens.spans : null;
  if (!items) return [];
  const tags = [];
  for (const it of items) if (!tags.includes(it.tag)) tags.push(it.tag);
  // A color's row names every label that color carries on the card, as the key of the piece's own page does
  // (one label for a color said of three different words what was true of the first). Labels that hold a
  // comma or a colon are parted by semicolons.
  return tags.map((t) => {
    const names = [...new Set(items.filter((it) => it.tag === t && it.label && String(it.label).trim() !== String(it.num)).map((it) => it.label))];
    if (!names.length) return null;
    const label = names.join(names.some((x) => /[,:]/.test(String(x))) ? '; ' : ', ');
    return el('span', { class: 'spec-k' }, [el('i', { style: `--c:${PARTS[tags.indexOf(t) % PARTS.length]}` }), el('span', {}, marked(label))]);
  }).filter(Boolean);
}

export function specimen(s, mounted, opts = {}) {
  const lens = s.plate.lenses[0];
  const byline = s.translator && s.plate.lang === 'en' ? `${s.workTitle}, translated by ${s.translator}` : s.workTitle;
  const card = el('article', { class: `spec spec-${s.kind}${opts.hero ? ' spec-hero' : ''}` });
  card.append(el('p', { class: 'spec-hd' }, [el('span', { class: 'spec-au', text: s.author }), el('span', { class: 'spec-wk', text: byline })]));
  const prose = s.plate.rows.some((r) => !r.aside && r.kind !== 'v');
  mounted.push(mountPlate(card, s.plate, {}, { bare: true, narrowAt: 430, max: opts.max || (prose ? 23 : 30) }));
  const notes = [];
  if (lens.kind === 'figure' && lens.name) notes.push(el('p', { class: 'spec-term' }, [el('i', { text: lens.name }), lens.plain ? el('span', {}, marked(lens.plain)) : null]));
  if (lens.kind === 'beat' && lens.meterName && !opts.hero) notes.push(el('p', { class: 'spec-term' }, [el('span', { class: 'lab', text: 'The measure' }), el('span', { text: lens.meterName })]));
  const keys = keyOf(lens);
  if (keys.length) notes.push(el('p', { class: 'spec-keys' }, keys));
  if (opts.note) notes.push(para(opts.note, { class: 'spec-note' }));
  if (notes.length) card.append(el('div', { class: 'spec-notes' }, notes));
  card.append(el('a', { class: 'spec-go', href: s.at ? `#/${s.piece}/${s.at.plate}/${s.at.lens}` : `#/${s.piece}` }, [el('span', { class: 'spec-t', text: opts.go || s.title }), el('span', { class: 'spec-arrow', 'aria-hidden': 'true', text: '→' })]));
  return card;
}

export async function renderHome(main, site = {}, at = null) {
  const front = await getJSON('data/front.json');
  const mounted = [];
  const page = el('article', { class: 'home' });

  page.append(el('header', { class: 'home-hd' }, [
    el('h1', { class: 'home-q' }, [el('span', { text: '“Here is a verbal contraption.' }), ' ', el('span', { text: 'How does it work?”' })]),
    el('p', { class: 'home-by' }, ['W. H. Auden, on the first of the two questions that interested him most when he read a poem. ', el('i', { text: 'The Dyer’s Hand' }), ' (1962), p. 50.']),
  ]));

  if (front.hero) page.append(el('div', { class: 'home-hero' }, [specimen(front.hero, mounted, { hero: true, max: 76, note: front.hero.note || WAYS[front.hero.kind].how })]));

  // the way into the class itself: under the one passage, before the works. Beside it, the afternoons by name.
  // (its words are in content/class.mjs, under "home"; the last word of the large line keeps the arrow beside it)
  const klass = front.klass;
  if (klass && klass.title) {
    const cut = klass.title.lastIndexOf(' ');
    page.append(el('section', { class: 'home-class' }, [
      el('a', { class: 'home-class-go', href: '#/class' }, [
        el('span', { class: 'lab', text: klass.label }),
        el('b', {}, [klass.title.slice(0, cut + 1), el('span', { class: 'nb' }, [klass.title.slice(cut + 1), el('span', { class: 'spec-arrow', 'aria-hidden': 'true', text: '→' })])]),
        el('span', { class: 'home-class-say' }, rich(klass.say)),
      ]),
      (klass.scenes || []).length ? el('ol', { class: 'home-class-toc', 'aria-label': `Contents: ${klass.label}` }, klass.scenes.map((k) => el('li', {}, [el('a', { href: `#/class/${k.id}` }, rich(k.title))]))) : null,
    ]));
  }

  // The list of every work stands at the foot of the page, under all the cards (some eighteen screens down on a
  // phone): the opening says so, and its link goes there without drawing the page again.
  const toWorks = el('a', { href: '#/works', text: 'All the works' });
  page.append(el('section', { class: 'home-intro' }, [
    el('p', {}, ['The reading list of that course names thirty-three works, nine of them operas. The three headings below are courses Auden would have required of every student in a college for poets: prosody, rhetoric and comparative philology (', el('i', { text: 'The Dyer’s Hand' }), ', p. 77). ', toWorks, ' are listed at the foot of this page.']),
  ]));

  const byKind = new Map(front.ways.map((w) => [w.kind, w.specs]));
  for (const subject of SUBJECTS) {
    const ways = subject.ways.filter((k) => (byKind.get(k) || []).length);
    if (!ways.length) continue;
    const sec = el('section', { class: 'subject', id: subject.id }, [
      el('header', { class: 'subject-hd' }, [el('p', { class: 'subject-n', text: subject.n }), el('h2', { text: subject.name }), el('p', { class: 'subject-gloss', text: subject.gloss })]),
    ]);
    for (const kind of ways) {
      sec.append(el('div', { class: 'way' }, [
        el('div', { class: 'way-hd' }, [el('h3', { text: WAYS[kind].name }), el('p', { class: 'way-how', text: WAYS[kind].how })]),
        el('div', { class: 'specs' }, byKind.get(kind).map((s) => specimen(s, mounted))),
      ]));
    }
    page.append(sec);
  }

  // every work, in the order of the list
  const groups = [];
  for (const w of front.works) { const last = groups[groups.length - 1]; if (last && last.work === w.work) last.items.push(w); else groups.push({ work: w.work, author: w.author, items: [w] }); }
  const works = el('section', { class: 'home-works', id: 'works' }, [
    el('header', { class: 'subject-hd' }, [el('p', { class: 'subject-n', text: '' }), el('h2', { tabindex: '-1', text: 'All the works' }), el('p', { class: 'subject-gloss' }, ['In the order of Auden’s reading list. The list itself, and the books to read, are on ', el('a', { href: '#/shelf', text: 'the shelf' }), '.'])]),
    el('ol', { class: 'works' }, groups.map((g) => el('li', {}, [
      el('p', { class: 'works-au', text: g.author }),
      ...g.items.map((w) => (w.toCome
        ? el('p', { class: 'works-none' }, [el('span', { class: 'works-t', text: w.workTitle }), el('span', { class: 'works-wk', text: 'to come' })])
        : el('a', { href: `#/${w.id}` }, [el('span', { class: 'works-t', text: w.title }), el('span', { class: 'works-wk', text: w.workTitle })]))),
    ]))),
  ]);
  page.append(works);

  // The list is come to at once and not by a long glide: every card passed on the way would draw its marks.
  let cameTo = null;
  const come = () => {
    works.scrollIntoView({ block: 'start', behavior: 'instant' });
    cameTo = window.scrollY;
  };
  toWorks.addEventListener('click', (e) => {
    // (once the reader has asked for another page this one takes no step of its own: the link is followed)
    if (main.left || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    stepTo('#/works');   // a step of its own, so that Back returns to this paragraph
    come();
    // (the heading takes the focus, so that a reader with a keyboard or a screen reader goes on from the list)
    const h = works.querySelector('h2');
    if (h) h.focus({ preventScroll: true });
  });

  main.show(page, site.name || 'Fate and the Individual');
  const leave = () => mounted.forEach((m) => m.destroy());
  // The address #/works opens the page at the list. (The router scrolls a new page to its top and then calls
  // this. The cards over the list take their true heights when the faces are in, so the list is come to again
  // then, unless the reader has moved the page meanwhile.)
  leave.after = () => {
    if (at !== 'works') return;
    const go = () => { if (page.isConnected && (cameTo === null || Math.abs(window.scrollY - cameTo) < 8)) come(); };
    requestAnimationFrame(() => requestAnimationFrame(go));
    [400, 900, 1800].forEach((ms) => setTimeout(go, ms));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => requestAnimationFrame(go));
  };
  return leave;
}
