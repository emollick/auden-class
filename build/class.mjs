// The class page as data: the afternoons the students recorded, with the
// passages on this site that each was about.
//
//   node build/class.mjs     writes site/data/class.json
//
// build/pieces.mjs runs this after the pieces, the front page and the shelf are
// built. The words are in content/class.mjs. What is done here: every passage
// the page opens is cut from its built piece (as a card of the front page is),
// every link and record is checked, the reading list and the four cantos are
// counted, and the numbers the words leave open are filled in.

import fs from 'node:fs';
import path from 'node:path';
import { WAYS, chosen, cardOf } from './front.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'site/data');
const PIECES = path.join(OUT, 'pieces');
const TEXTS = path.join(OUT, 'texts');

const comma = (n) => Number(n).toLocaleString('en-US');
const hundred = (n) => Math.round(n / 100) * 100;
const TENS = { 20: 'twenty', 25: 'twenty-five', 30: 'thirty', 35: 'thirty-five', 40: 'forty' };
// a count said in words, as the page says its counts
const NUMS = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const word = (n) => (n < 20 ? NUMS[n] : `${['twenty', 'thirty', 'forty'][Math.floor(n / 10) - 2]}${n % 10 ? `-${NUMS[n % 10]}` : ''}`);
const count = (s) => String(s).trim().split(/\s+/).filter(Boolean).length;

export async function buildClass() {
  const problems = [];
  const fail = (m) => problems.push(`class: ${m}`);
  const src = (await import('../content/class.mjs')).default;
  const records = (await import('../content/records.mjs')).default;
  const shelfFile = path.join(OUT, 'shelf.json');
  const shelf = fs.existsSync(shelfFile) ? JSON.parse(fs.readFileSync(shelfFile, 'utf8')) : { works: [], pages: 0 };
  const index = JSON.parse(fs.readFileSync(path.join(PIECES, 'index.json'), 'utf8'));
  const pieces = new Map();
  for (const row of index) {
    const f = path.join(PIECES, `${row.id}.json`);
    if (fs.existsSync(f)) pieces.set(row.id, JSON.parse(fs.readFileSync(f, 'utf8')));
  }
  const part = (text, id) => {
    const dir = path.join(TEXTS, text);
    if (!fs.existsSync(path.join(dir, 'index.json'))) return null;
    const idx = JSON.parse(fs.readFileSync(path.join(dir, 'index.json'), 'utf8'));
    const row = (idx.parts || []).find((p) => p.id === id);
    if (!row || !fs.existsSync(path.join(dir, `${id}.json`))) return null;
    return { row, blocks: JSON.parse(fs.readFileSync(path.join(dir, `${id}.json`), 'utf8')).blocks || [] };
  };
  const sceneIds = new Set();
  for (const s of src.scenes) { if (sceneIds.has(s.id)) fail(`two scenes are called ${s.id}`); sceneIds.add(s.id); }
  for (const k of ['label', 'title', 'say']) if (!src.home || !src.home[k]) fail(`the way in from the front page has no ${k}`);

  // an address inside the site: does it lead anywhere
  const leads = (to) => {
    const p = String(to).replace(/^#\/?/, '').replace(/\/$/, '');
    if (p === '' || p === 'about' || p === 'shelf' || p === 'class') return true;
    let m = p.match(/^class\/([\w-]+)$/);
    if (m) return sceneIds.has(m[1]);
    m = p.match(/^read\/([\w-]+)(?:\/([\w-]+)(?::(\d+))?)?$/);
    if (m) return m[2] ? !!part(m[1], m[2]) : fs.existsSync(path.join(TEXTS, m[1], 'index.json'));
    m = p.match(/^([\w-]+)(?:\/([\w-]+)(?:\/(\d+))?)?$/);
    if (!m || !pieces.has(m[1])) return false;
    if (!m[2]) return true;
    const plate = pieces.get(m[1]).plates.find((x) => x.id === m[2]);
    return !!plate && (m[3] === undefined || !!plate.lenses[+m[3]]);
  };

  // ---- a door into a passage: a card cut from the piece, or a plain way in
  const door = (d, where) => {
    if (d.shelf) return { href: '#/shelf', label: d.label };
    if (d.read) { if (!leads(`read/${d.read}`)) fail(`${where}: nothing to read at ${d.read}`); return { href: `#/read/${d.read}`, label: d.label }; }
    const piece = pieces.get(d.piece);
    if (!piece) { fail(`${where}: no piece ${d.piece}`); return null; }
    const plate = d.plate ? piece.plates.find((x) => x.id === d.plate) : null;
    if (d.plate && !plate) { fail(`${where}: ${d.piece} has no passage "${d.plate}"`); return null; }
    if (d.lens !== undefined) {
      const lens = plate && plate.lenses[d.lens];
      if (!lens) { fail(`${where}: ${d.piece}/${d.plate} has no tab ${d.lens}`); return null; }
      if (!WAYS.includes(lens.kind)) { fail(`${where}: tab ${d.lens} of ${d.piece}/${d.plate} is a ${lens.kind}, which cannot be shown as a card: give it as { piece, plate, tab, label }`); return null; }
      if (!d.why) fail(`${where}: the card ${d.piece}/${d.plate} does not say why it is here`);
      try {
        const s = chosen(piece, { plate: d.plate, lens: d.lens, rows: d.rows, row: d.row, words: d.words, say: d.say });
        if (!s) { fail(`${where}: nothing to show for ${d.piece}/${d.plate}/${d.lens}`); return null; }
        const card = cardOf(piece, s);
        // a card shows a few lines of a longer passage: its rhymes are lettered from a, as they stand on the card
        for (const l of card.plate.lenses || []) {
          if (l.kind !== 'rhyme' || !l.ends || (l.threads || []).length) continue;
          if (!Object.values(l.ends).every((e) => /^[a-z]$/.test(e))) continue;
          const to = new Map();
          for (const row of card.plate.rows) { const e = l.ends[row.id]; if (e && !to.has(e)) to.set(e, String.fromCharCode(97 + to.size)); }
          for (const k of Object.keys(l.ends)) l.ends[k] = to.get(l.ends[k]) || l.ends[k];
        }
        return { card, why: d.why, heading: plate.heading ? String(plate.heading).split(':')[0].trim() : '' };
      } catch (e) { fail(`${where}: ${e.message.replace(/^front\.json: /, '')}`); return null; }
    }
    if (d.tab !== undefined && !(plate && plate.lenses[d.tab])) { fail(`${where}: ${d.piece}/${d.plate} has no tab ${d.tab}`); return null; }
    if (!d.label) fail(`${where}: the way into ${d.piece} has no label`);
    const href = `#/${d.piece}${d.plate ? `/${d.plate}${d.tab !== undefined ? `/${d.tab}` : ''}` : ''}`;
    return { href, label: d.label, author: piece.author, workTitle: piece.workTitle, title: piece.title };
  };

  // ---- the reading list to scale
  const load = (p, where) => {
    const works = (shelf.works || []).filter((w) => w.kind !== 'critical').map((w) => ({
      id: w.id, author: w.author, title: w.title, pages: w.pages || null, opera: w.kind === 'opera', omit: !!w.omit, or: !!w.or, taught: (p.taught || []).includes(w.id),
      pieces: (w.pieces || []).filter((x) => pieces.has(x.id)).map((x) => ({ id: x.id, title: x.title })),
    }));
    for (const w of works) if (!w.pieces.length) fail(`${where}: ${w.id} opens no page on this site`);
    for (const id of p.taught || []) if (!works.some((w) => w.id === id)) fail(`${where}: "taught" names ${id}, which is not on the list`);
    const taughtCount = works.filter((w) => w.taught).length;
    Object.assign(fills, { list: word(works.length), taught: word(taughtCount), operas: word(works.filter((w) => w.opera).length) });
    return { ...p, works, pages: shelf.pages, taughtCount, count: works.length };
  };

  // ---- the cantos to scale: the words of each paragraph of the prose, and the places the site's pieces open
  const cantos = (p, where) => {
    let total = 0;
    const out = (p.cantos || []).map((c) => {
      const got = part(p.text || 'dante-temple', c.part);
      if (!got) { fail(`${where}: no canto ${c.part}`); return null; }
      const paras = got.blocks.map((b) => count(b.text || ''));
      const words = got.row.words || paras.reduce((a, b) => a + b, 0);
      total += words;
      // where a piece shows lines of this canto: the tercets, which the prose follows paragraph by paragraph
      const shown = [];
      for (const piece of pieces.values()) {
        for (const plate of piece.plates) {
          if (!plate.src || !plate.src.endsWith(`/${c.part}`) || !/^dante-/.test(plate.src)) continue;
          const blocks = [...new Set(plate.rows.filter((r) => !r.aside && r.id !== undefined).map((r) => parseInt(r.id, 10)))].filter((n) => Number.isFinite(n) && n < paras.length);
          if (blocks.length) shown.push({ blocks, href: `#/${piece.id}/${plate.id}`, heading: plate.heading || piece.title });
        }
      }
      if (c.piece && !shown.some((s) => s.href === `#/${c.piece}/${c.plate}`)) fail(`${where}: ${c.piece}/${c.plate} does not open ${c.part}`);
      return { part: c.part, name: c.name, words, paras, read: `#/read/${p.text || 'dante-temple'}/${c.part}`, shown };
    }).filter(Boolean);
    const five = hundred(total * 5 / out.length);
    const rate = Math.round(five / (3 * 60) / 5) * 5;
    if (!TENS[rate]) fail(`${where}: no word for ${rate} words a minute`);
    return { ...p, cantos: out, total, fill: { words: comma(total), five: comma(five), rate: TENS[rate] || String(rate) } };
  };

  const fills = { pages: comma(hundred(shelf.pages || 0)) };
  const scenes = src.scenes.map((s) => {
    // two cards cut from one piece in one scene would both be named for the piece: the later one is named for its passage
    const met = new Set();
    const parts = (s.parts || []).map((p, i) => {
      const where = `${s.id}, part ${i + 1} (${p.kind})`;
      const out = { ...p };
      if (p.doors) {
        out.doors = p.doors.map((d) => door(d, where)).filter(Boolean);
        for (const d of out.doors) {
          if (!d.card) continue;
          if (met.has(d.card.piece) && d.heading) d.go = d.heading;
          met.add(d.card.piece);
          delete d.heading;
        }
      }
      if (p.kind === 'heard' && p.record) {
        const rec = records.find((r) => r.id === p.record);
        if (!rec) { fail(`${where}: no record ${p.record}`); out.record = null; } else out.record = { file: rec.file, title: rec.title, performers: rec.performers, credit: rec.credit };
      }
      // the work that was set: a line may open pieces of this site, or go to another afternoon on this page
      if (p.kind === 'set') {
        out.items = (p.items || []).map((it) => ({ ...it, ways: (it.ways || []).map((w) => {
          if (!w.to) return door(w, where);
          if (!sceneIds.has(w.to)) { fail(`${where}: a line points to the scene ${w.to}, which is not on the page`); return null; }
          // (the arrow beside it points up the page or down it, to where that afternoon stands)
          const there = src.scenes.findIndex((x) => x.id === w.to);
          const here = src.scenes.findIndex((x) => x.id === s.id);
          return { href: `#/class/${w.to}`, label: w.label, scene: true, down: there > here, up: there < here };
        }).filter(Boolean) }));
      }
      if (p.kind === 'load') return load(out, where);
      if (p.kind === 'cantos') { const c = cantos(out, where); Object.assign(fills, c.fill); delete c.fill; return c; }
      if (p.kind === 'board' && p.figure === 'schemes') {
        const names = new Set();
        for (const sc of p.schemes) for (const g of [...(sc.tiers || []), ...(sc.sides || [])]) for (const n of (g.lines ? g.lines.flat(2) : g.names || [])) names.add(typeof n === 'string' ? n : n.name);
        for (const sc of p.schemes) for (const n of sc.apart || []) names.add(n);
        for (const f of p.follow || []) if (!names.has(f.name)) fail(`${where}: ${f.name} is to be followed and stands in no scheme`);
      }
      if (p.kind === 'board' && p.figure === 'tiers' && (!(p.pairs || []).length || p.draft)) fail(`${where}: the chart's labels are still a draft`);
      if (p.kind === 'board' && p.figure === 'tiers') fills.pairs = word((p.pairs || []).length);
      if (p.answers) for (const a of p.answers) if (!sceneIds.has(a.to)) fail(`${where}: an answer points to the scene ${a.to}, which is not on the page`);
      return out;
    });
    return { ...s, parts };
  });

  // the page's own words keep the rule of the house: no dash inside a sentence
  JSON.stringify(src, (k, v) => { if (typeof v === 'string' && /—/.test(v)) fail(`a dash inside a sentence: ${v.slice(0, 60)}`); return v; });

  const page = { ...src, scenes };
  // the numbers the words leave open, and every link
  const text = JSON.stringify(page, (k, v) => {
    if (typeof v !== 'string') return v;
    // ({Taught}, with a capital, begins a sentence)
    const filled = v.replace(/\{([A-Za-z]+)\}/g, (m, key) => {
      const got = fills[key.toLowerCase()];
      if (got === undefined) return m;
      return /^[A-Z]/.test(key) ? got.charAt(0).toUpperCase() + got.slice(1) : got;
    });
    const open = filled.match(/\{[A-Za-z]+\}/);
    if (open) fail(`a number is left open (${open[0]}) in: ${v.slice(0, 50)}`);
    for (const m of filled.matchAll(/\]\((#\/[^)\s]*)\)/g)) if (!leads(m[1])) fail(`a link goes nowhere (${m[1]}) in: ${v.slice(0, 50)}`);
    return filled;
  });
  fs.writeFileSync(path.join(OUT, 'class.json'), `${text}\n`);
  // the front page names the afternoons beside its way in
  const frontFile = path.join(OUT, 'front.json');
  if (fs.existsSync(frontFile)) {
    const front = JSON.parse(fs.readFileSync(frontFile, 'utf8'));
    front.klass = { ...(src.home || {}), scenes: scenes.map((s) => ({ id: s.id, title: s.title })) };
    fs.writeFileSync(frontFile, `${JSON.stringify(front)}\n`);
  }
  const cards = scenes.flatMap((s) => s.parts.flatMap((p) => (p.doors || []).filter((d) => d.card))).length;
  console.log(`class: ${scenes.length} scenes, ${scenes.reduce((n, s) => n + s.parts.length, 0)} parts, ${cards} cards; ${Math.round(Buffer.byteLength(text) / 1024)} KB`);
  return problems;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  const problems = await buildClass();
  if (problems.length) { console.log(`PROBLEMS\n  ${problems.join('\n  ')}`); process.exit(2); }
}
