// Gather every word written for the remade site into files a critic can read.
//
//   node build/tools/prose.mjs            every piece that has a reading, and the site's own pages
//   node build/tools/prose.mjs hamlet     one piece
//
// Writes review/remake/prose/<pieceId>.md for each piece (every sentence the
// page prints, with the place it stands in remake/works/<pieceId>/reading.json)
// and review/remake/prose/site.md (the front page with the small words of its
// cards, the shelf, the reader with the notes on the books' contents pages, the
// about page, and the words set in the scripts, labels of one word and the
// legends of the keys among them) and review/remake/prose/class.md (the page
// "The class", in the order a reader meets it). Run build/pieces.mjs first.
// The words of the works themselves are not gathered: nobody here wrote them.

import fs from 'node:fs';
import path from 'node:path';
import { workingKey } from '../lib/printed.mjs';

const ROOT = path.resolve(import.meta.dirname, '../..');
const WORKS = path.join(ROOT, 'remake/works');
const OUT = path.join(ROOT, 'review/remake/prose');
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
fs.mkdirSync(OUT, { recursive: true });

const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'remake/pieces.json'), 'utf8'));
const count = (s) => String(s).replace(/<[^>]+>/g, ' ').replace(/\]\([^)]*\)/g, ']').trim().split(/\s+/).filter(Boolean).length;
let total = 0;

function pieceProse(entry) {
  const file = path.join(WORKS, entry.id, 'reading.json');
  if (!fs.existsSync(file)) return null;
  const r = JSON.parse(fs.readFileSync(file, 'utf8'));
  const out = [];
  let words = 0;
  const put = (where, text, note = '') => { if (typeof text !== 'string' || !text.trim()) return; words += count(text); out.push(`[${where}]${note ? ` (${note})` : ''}\n${text.trim()}\n`); };
  out.push(`# ${entry.id}: ${r.title || ''} (${entry.author}, ${entry.title})\n`);
  out.push(`Every sentence the page prints, in the order a reader meets it. The words in brackets say where the sentence stands in remake/works/${entry.id}/reading.json. In captions <b> marks a word of the passage (it is shown in the passage when the reader points at it) and <i> is italic; in the notes at the foot *x* is italic and [words](address) is a link.\n`);
  out.push('## The head of the page\n');
  put('title', r.title); put('where', r.where); put('about', r.about, 'under “The passage”');
  if (r.view) { put('view.says', r.view.says, 'under “What Auden said”: a paraphrase of him'); put('view.quote', r.view.quote, 'Auden’s own words, not to be changed'); put('view.source', r.view.source); }
  (r.plates || []).forEach((p, pi) => {
    out.push(`## Passage ${pi + 1}${p.heading ? `: ${p.heading}` : ''}  (plates[${pi}], id "${p.id}", from ${p.text || 'no printed text'})\n`);
    put(`plates[${pi}].heading`, p.heading); put(`plates[${pi}].label`, p.label, 'names the first of two versions'); if (p.pair) put(`plates[${pi}].pair.label`, p.pair.label, 'names the second version');
    put(`plates[${pi}].noTextWhy`, p.noTextWhy);
    (p.lenses || []).forEach((l, li) => {
      const at = `plates[${pi}].lenses[${li}]`;
      out.push(`### Tab “${l.label || l.kind}” (${l.kind})\n`);
      put(`${at}.label`, l.label, 'the word on the tab');
      put(`${at}.meterName`, l.meterName, 'printed after “The measure”');
      put(`${at}.name`, l.kind === 'figure' ? l.name : '', 'the name of the figure'); put(`${at}.plain`, l.plain, 'the figure in plain words');
      put(`${at}.what`, l.what, 'printed over the drawing');
      put(`${at}.caption`, l.caption, 'the caption');
      for (const key of ['points', 'notes', 'ties', 'parts', 'spans']) (l[key] || []).forEach((x, i) => {
        if (!x || typeof x !== 'object') return;
        put(`${at}.${key}[${i}].say`, x.say, 'a numbered remark'); put(`${at}.${key}[${i}].gloss`, x.gloss, 'set under the word'); put(`${at}.${key}[${i}].note`, x.note, 'a note on the word');
        if (x.label && !(l[key].slice(0, i).some((y) => y && y.label === x.label))) put(`${at}.${key}[${i}].label`, x.label, 'in the key');
      });
      if (l.kind === 'shape' && l.facts && typeof l.facts === 'object') {
        const walk = (v, w) => {
          if (typeof v === 'string') { if (/[a-z]{3,}\s+[a-z]{2,}/i.test(v)) put(w, v, 'a fact a drawing may print'); } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${w}[${i}]`));
          else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!workingKey(k)) walk(x, `${w}.${k}`);
        };
        walk(l.facts, `${at}.facts`);
      }
      put(`${at}.stands`, l.stands, 'at the foot, under “What each caption stands on”');
    });
  });
  if ((r.auden || []).length) out.push(`## ${r.view ? 'More from Auden' : 'What Auden said'}\n`);
  (r.auden || []).forEach((a, i) => { put(`auden[${i}].says`, a.says, 'a paraphrase of him'); put(`auden[${i}].quote`, a.quote, 'Auden’s own words, not to be changed'); put(`auden[${i}].source`, a.source); });
  if (r.nextNote) { out.push('## Read on\n'); put('nextNote', r.nextNote, 'the note under “Read on”'); (r.nextLinks || []).forEach((l, i) => put(`nextLinks[${i}].label`, l && l.label, 'a link under the note')); }
  out.push('## Sources\n');
  (r.sources || []).forEach((s, i) => put(`sources[${i}]`, s));
  if ((r.caveats || []).length) out.push('## Where this page may be wrong\n');
  (r.caveats || []).forEach((s, i) => put(`caveats[${i}]`, s));
  out.push(`\n(${words} words)\n`);
  fs.writeFileSync(path.join(OUT, `${entry.id}.md`), out.join('\n'));
  total += words;
  return words;
}

const done = [];
for (const entry of manifest) {
  if (only.length && !only.includes(entry.id)) continue;
  const n = pieceProse(entry);
  if (n !== null) done.push(`${entry.id} ${n}`);
}

if (!only.length) {
  // ---- the site's own pages
  const out = ['# The site’s own pages\n', 'Every word written for the front page, the shelf, the reader and the about page, and the words set in the scripts. The words in brackets say where each stands.\n'];
  let words = 0;
  const put = (where, text) => { if (typeof text !== 'string' || !text.trim()) return; words += count(text); out.push(`[${where}]\n${text.trim()}\n`); };
  // a string of one word is a label a reader sees (Contents, Next, What) unless its key holds a code
  const CODES = ['kind', 'row'];
  const walk = (v, w, skip = () => false, key = '') => {
    if (typeof v === 'string') { if (/\s/.test(v.trim()) || (!CODES.includes(key) && /[A-Za-z]{2,}/.test(v))) put(w, v); } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${w}[${i}]`, skip, key));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!skip(k, x)) walk(x, `${w}.${k}`, skip, k);
  };
  const data = (f) => JSON.parse(fs.readFileSync(path.join(ROOT, 'site/data', f), 'utf8'));
  out.push('## About (content/about.mjs, as built in site/data/about.json)\n');
  walk(data('about.json'), 'about');
  out.push('## The shelf and the reader (content/shelf.mjs, content/works.mjs, content/records.mjs, as built in site/data/shelf.json)\n');
  walk(data('shelf.json'), 'shelf', (k) => ['opened', 'pieces', 'texts', 'id', 'file', 'url'].includes(k));
  out.push('## The front page (remake/front.json; the specimens are cut from the pieces and are read with them)\n');
  const front = JSON.parse(fs.readFileSync(path.join(ROOT, 'remake/front.json'), 'utf8'));
  walk(front, 'front', (k) => ['rows', 'piece', 'plate', 'lens'].includes(k));
  // the small words of each card as the front page shows them: most are cut from the piece's own
  // reading and are read with it, but only here do they stand beside one another
  out.push('## The front page as built (site/data/front.json): the small words of each card, in the order the card shows them\n');
  const built = data('front.json');
  const card = (s, where) => {
    if (!s || !s.plate) return;
    const said = [s.author, s.translator && s.plate.lang === 'en' ? `${s.workTitle}, translated by ${s.translator}` : s.workTitle, s.plate.label, s.plate.pair && s.plate.pair.label];
    for (const l of s.plate.lenses || []) {
      said.push(l.meterName, l.name, l.plain);
      const labels = new Set();
      for (const key of ['parts', 'spans', 'ties']) for (const x of l[key] || []) if (x && x.label) labels.add(x.label);
      said.push(...labels);
      for (const x of l.notes || []) if (x && x.gloss) said.push(x.gloss);
    }
    said.push(s.title, s.note);
    put(where, said.filter((x) => typeof x === 'string' && x.trim()).join(' · '));
  };
  card(built.hero, `front built: ${built.hero && built.hero.piece} (the first card)`);
  for (const way of built.ways || []) for (const s of way.specs || []) card(s, `front built: ${s.piece} (${way.kind})`);
  out.push('## The notes on the books’ contents pages (build/texts/<book>.mjs, as built in site/data/texts/<book>/index.json)\n');
  const TEXTS = path.join(ROOT, 'site/data/texts');
  for (const book of fs.readdirSync(TEXTS).sort()) {
    const file = path.join(TEXTS, book, 'index.json');
    if (!fs.existsSync(file)) continue;
    const index = JSON.parse(fs.readFileSync(file, 'utf8'));
    put(`texts/${book}.note`, index.note);
    put(`texts/${book}.source.name`, index.source && index.source.name);
  }
  out.push('## Words set in the scripts and the page shell\n');
  // a legend begins with a small letter: told from a class list by a small word standing between spaces
  const SMALL = /(^| )(a|an|the|of|in|on|is|to|and|or|one|where|that|its|it|by|with|for|not|no|as|at|are|from|this|each)( |$|[,:;.])/;
  const legend = (s) => /^[a-z]/.test(s) && / /.test(s) && SMALL.test(s) && !/[{}<>=;]|\.(js|json|css)\b/.test(s) && !(s.split(' ').length >= 15 && !/[,:;.]/.test(s)) && /[A-Za-z]{4,}/.test(s);
  for (const f of ['site/index.html', 'site/js/main.js', 'site/js/home.js', 'site/js/class.js', 'site/js/class-figures.js', 'site/js/piece.js', 'site/js/shelf.js', 'site/js/about.js', 'site/js/kit/plate.js', 'site/js/kit/lens-beat.js', 'site/js/kit/lens-rhyme.js', 'site/js/kit/lens-figure.js', 'site/js/kit/lens-sentence.js', 'site/js/kit/lens-word.js', 'site/js/kit/lens-compare.js', 'site/js/kit/lens-shape.js', 'site/js/kit/diagram.js', 'site/js/kit/player.js']) {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8').split('\n').filter((line) => !/^\s*(\/\/|\*|import\s)/.test(line)).join('\n');
    const found = new Set();
    if (f.endsWith('.html')) { for (const m of src.matchAll(/>([^<>]{3,})</g)) found.add(m[1].trim()); for (const m of src.matchAll(/content="([^"]{12,})"/g)) if (!m[1].includes('=')) found.add(m[1]); } else {
      for (const m of src.matchAll(/'((?:[^'\\\n]|\\.)*)'|`((?:[^`\\]|\\.)*)`/g)) {
        const s = (m[1] !== undefined ? m[1] : m[2]).replace(/\\'/g, '’');
        if (legend(s.trim())) { found.add(s.trim()); continue; }
        // words a reader sees begin with a capital or follow a space; skip class names, selectors, paths and patterns
        if (!/[A-Za-z]{2,}/.test(s) || !/^[A-Z“(]/.test(s.trim()) || /^[A-Z_]+$/.test(s) || /^M\d|[{}<>=;]|^\w+(-\w+)+$|\.(js|json|css)\b/.test(s) || /^[A-Z][a-z]+[A-Z]/.test(s) || /^\([a-z-]+: [a-z]+\)$/.test(s)) continue;
        found.add(s.trim());
      }
    }
    const list = [...found].filter(Boolean);
    if (list.length) { out.push(`### ${f}\n`); list.forEach((s) => put(f, s)); }
  }
  out.push(`\n(${words} words)\n`);
  fs.writeFileSync(path.join(OUT, 'site.md'), out.join('\n'));
  total += words;
  done.push(`site ${words}`);

  // ---- the class page, in the order a reader meets it (content/class.mjs, as built in site/data/class.json)
  if (fs.existsSync(path.join(ROOT, 'site/data/class.json'))) {
    const page = data('class.json');
    const o = ['# The class page\n', 'Every word written for the page “The class” (content/class.mjs, as built in site/data/class.json), in the order a reader meets it. The words in brackets say where each stands in content/class.mjs. *x* is italic and [words](address) is a link. The passages the page opens are cut from the pieces and are read with them: of each card only the small words are given here, with the line that says why it is on this page. The words set in the page’s scripts (site/js/class.js, site/js/class-figures.js) are in site.md.\n'];
    let n = 0;
    const say = (where, text, note = '') => { if (typeof text !== 'string' || !text.trim()) return; n += count(text); o.push(`[${where}]${note ? ` (${note})` : ''}\n${text.trim()}\n`); };
    const small = (c) => {
      const said = [c.author, c.translator && c.plate && c.plate.lang === 'en' ? `${c.workTitle}, translated by ${c.translator}` : c.workTitle, c.title, c.plate && c.plate.label];
      for (const l of (c.plate && c.plate.lenses) || []) said.push(l.name, l.plain, l.meterName);
      return said.filter((x) => typeof x === 'string' && x.trim()).join(' · ');
    };
    const doorsOf = (list, at) => (list || []).forEach((d, i) => {
      if (d.card) { say(`${at}.doors[${i}]`, small(d.card), 'the small words of a card cut from the piece; not written for this page'); say(`${at}.doors[${i}].why`, d.why, 'printed on the card: why it is here'); say(`${at}.doors[${i}].go`, d.go, 'at the foot of the card, in place of the piece’s title: the heading of the passage in its piece'); } else say(`${at}.doors[${i}].label`, d.label, 'a link');
    });
    const foldsOf = (list, at) => (list || []).forEach((f, i) => { say(`${at}.folds[${i}].h`, f.h, 'the heading of a fold, shut until it is pressed'); (f.paras || []).forEach((t, j) => say(`${at}.folds[${i}].paras[${j}]`, t)); say(`${at}.folds[${i}].src`, f.src); });
    o.push('## The head of the page\n');
    say('kicker', page.kicker); say('title', page.title); say('where', page.where);
    (page.lede || []).forEach((t, i) => say(`lede[${i}]`, t));
    say('contents', page.contents, 'the one line that opens the list of the scenes on a narrow screen; on a wide one the scenes’ titles stand under the opening without it');
    if (page.home) {
      o.push('## The way in from the front page (under its one passage, before the works; beside it on a wide screen stand the scenes’ titles)\n');
      say('home.label', page.home.label, 'a small label over the line'); say('home.title', page.home.title, 'set large; the whole block is a link to this page'); say('home.say', page.home.say, 'under the large line');
    }
    page.scenes.forEach((s, si) => {
      const at = `scenes[${si}]`;
      o.push(`## Scene ${si + 1}: ${s.title.replace(/\*/g, '')}  (${at}, id "${s.id}"${s.small ? ', one of the small scenes at the end' : ''})\n`);
      say(`${at}.when`, s.when, 'over the heading'); say(`${at}.title`, s.title); say(`${at}.src`, s.src, 'the witnesses and pages');
      if (s.said) { say(`${at}.said.quote`, s.said.quote, 'set large: a witness’s words for Auden, not to be changed'); say(`${at}.said.by`, s.said.by); }
      (s.paras || []).forEach((t, i) => say(`${at}.paras[${i}]`, t));
      (s.parts || []).forEach((p, pi) => {
        const pa = `${at}.parts[${pi}]`;
        o.push(`### ${p.kind}${p.figure ? `, ${p.figure}` : ''}${p.label ? `: ${p.label}` : ''}\n`);
        say(`${pa}.label`, p.label, 'the label of this part'); say(`${pa}.src`, p.src);
        (p.paras || []).forEach((t, i) => { if (typeof t === 'string') say(`${pa}.paras[${i}]`, t); });
        (p.items || []).forEach((t, i) => {
          if (typeof t === 'string') { say(`${pa}.items[${i}]`, t, 'an item of the list'); return; }
          if (p.kind === 'set') {
            say(`${pa}.items[${i}].text`, t.text, 'a thing that was set, in the larger type'); say(`${pa}.items[${i}].by`, t.by, 'under it, small: the witness and page');
            (t.ways || []).forEach((w, j) => say(`${pa}.items[${i}].ways[${j}].label`, w.label, w.down || w.up ? 'a link to a scene of this page' : 'a link to a passage on this site'));
            return;
          }
          say(`${pa}.items[${i}].quote`, t.quote, 'a witness’s own words, printed in quotation marks: not to be changed');
          say(`${pa}.items[${i}].by`, [t.who, t.of, t.src].filter(Boolean).join(' · '), 'under the quotation: who said it, of what, and where it is printed');
        });
        (p.says || []).forEach((t, i) => say(`${pa}.says[${i}]`, t));
        if (p.played) say(`${pa}.played`, [p.played.title, p.played.by].filter(Boolean).join(' · '), 'the record he played, set as a record is; it cannot be played here'); if (p.record) say(`${pa}.record`, [p.record.title, p.record.performers, p.record.credit].filter(Boolean).join(' · '), 'the record’s own words, from content/records.mjs'); say(`${pa}.recordNote`, p.recordNote, p.record ? 'under the record and its credits' : 'where a record would stand');
        (p.asks || []).forEach((t, i) => say(`${pa}.asks[${i}]`, t, 'what he asked for, set large'));
        (p.after || []).forEach((t, i) => say(`${pa}.after[${i}]`, t));
        if (p.cols) say(`${pa}.cols`, p.cols.filter(Boolean).join(' · '), 'the heads of the columns');
        (p.rows || []).forEach((r, i) => { say(`${pa}.rows[${i}]`, `${r.head} · ${r.board}`, 'a row’s name and the line on the blackboard, as the witness copied it'); (r.cells || []).forEach((c, j) => say(`${pa}.rows[${i}].cells[${j}]`, c)); });
        say(`${pa}.empty`, p.empty, 'where a cell has nothing');
        (p.schemes || []).forEach((sc, i) => say(`${pa}.schemes[${i}]`, [`${sc.n}. ${sc.title}`, ...[...(sc.tiers || []), ...(sc.sides || [])].map((g) => `${g.label ? `${g.label}: ` : ''}${g.rest || (g.lines ? g.lines.flat(2) : g.names || []).map((x) => (typeof x === 'string' ? x : `${x.name} ${x.note}`)).join(', ')}`), sc.apart ? `apart: ${sc.apart.join(', ')}` : '', sc.under || ''].filter(Boolean).join(' | '), 'the blackboard, as the witness copied it'));
        (p.lines || []).forEach((l, i) => say(`${pa}.lines[${i}]`, `${l.n || ''} ${l.head}${l.note ? `: ${l.note}` : ''}`.trim(), 'a line of the blackboard, as the witness copied it'));
        say(`${pa}.lead`, p.lead, 'leads in the row of names that can be pressed, over the schemes');
        (p.follow || []).forEach((f, i) => say(`${pa}.follow[${i}].says`, f.says, `shown when “${f.name}” is chosen`));
        say(`${pa}.followSrc`, p.followSrc); say(`${pa}.silent`, p.silent, 'shown for a name of which nothing is recorded');
        if (p.pairs) say(`${pa}.pairs`, p.pairs.map(([up, low]) => `${up} / ${low}`).join(' | '), 'the blackboard, as the witness copied it: upper row / lower row');
        if (p.key) { say(`${pa}.key.taught`, p.key.taught, 'in the key'); say(`${pa}.key.rest`, p.key.rest, 'in the key'); }
        say(`${pa}.rest`, p.rest, 'under the bars until one is pointed at'); say(`${pa}.more`, p.more, 'under the label of the chart, only where the screen is too narrow to show all of it');
        if (p.kind === 'cantos') (p.cantos || []).forEach((c, i) => say(`${pa}.cantos[${i}].name`, c.name));
        [].concat(p.note || []).forEach((t, i, all) => say(all.length > 1 ? `${pa}.note[${i}]` : `${pa}.note`, t, 'under the figure, in small type'));
        doorsOf(p.doors, pa);
        (p.answers || []).forEach((a, i) => say(`${pa}.answers[${i}].text`, a.text, 'a link to a later scene'));
        foldsOf(p.folds, pa);
      });
    });
    o.push('## Sources\n');
    (page.sources || []).forEach((t, i) => {
      if (typeof t === 'string') { say(`sources[${i}]`, t); return; }
      say(`sources[${i}].h`, t.h, 'a small heading over the entries that follow'); (t.items || []).forEach((x, j) => say(`sources[${i}].items[${j}]`, x));
    });
    o.push('## Where this page may be wrong (a fold)\n');
    (page.caveats || []).forEach((t, i) => say(`caveats[${i}]`, t));
    o.push(`\n(${n} words)\n`);
    fs.writeFileSync(path.join(OUT, 'class.md'), o.join('\n'));
    total += n;
    done.push(`class ${n}`);
  }
}
console.log(`${done.join(', ')}\n${total} words in all -> ${path.relative(ROOT, OUT)}/`);
