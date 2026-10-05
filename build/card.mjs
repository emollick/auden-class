// The cards that a link to the site shows when it is posted, and the words that describe them.
//
//   node build/card.mjs               draws both cards into site/ and writes their alt text into site/index.html
//   node build/card.mjs --out <dir>   draws both into <dir> and leaves site/ alone (for trials)
//   for trials also: --rows 2   --try '{"card-x-1.png":{"ttl":40,"max":46}}'
//
//   site/card-1.png     1200 by 630, the card for every site that shows one (og:image)
//   site/card-x-1.png   the same card set for X (twitter:image). X lays a box with the page's title over the
//                       picture: 20 px high, 12 px in from the left and from the foot. The box does not shrink
//                       with the picture, and on a phone the card is 280 to 350 px wide, so there the box
//                       begins at 78 to 83 percent of the card's height. This card keeps every mark above 77.
//
// A card is drawn by the site itself: its stylesheet, its faces, and the kit that draws the front page's first
// passage, from site/data/front.json. So the lines on a card are the lines on the front page, with the same
// measure under them. No word of them is written here, and the alt text takes them from the same data.
// Run `node build/pieces.mjs` first.
// A card is set at 800 by 420, the size at which the kit's strokes and dots suit its type, and photographed at
// one and a half times that, so the marks keep their weight when the card is shown small.
// A picture's name carries a number because the sites that show such cards keep a picture by its address for
// days: a changed card takes the next number, and site/index.html is pointed at it.

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const SITE = path.join(ROOT, 'site');
const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(`--${name}`); return i < 0 ? null : args.splice(i, 2)[1]; };
const outFlag = flag('out');
const outDir = outFlag ? path.resolve(outFlag) : SITE;
const rows = Number(flag('rows') || 2);
const trial = JSON.parse(flag('try') || '{}');
const W = 800;
const H = 420;
const SCALE = 1.5;

// the words of a card that are this site's own
const WORDS = {
  title: 'Fate and the Individual',
  sub: 'W. H. Auden’s course at the University of Michigan, fall 1941',
};

// The two cards. Sizes are px of the 800 by 420 page: the padding over the title and at the sides, the title,
// the space over the line under it and that line, the space over the hairline, the spaces round the author's
// line and its two sizes, the largest the passage may be set, and the lowest a mark may stand.
// The first card keeps a foot as deep as its sides (364 of 420). X's card must keep clear of X's box (323 of
// 420 is 77 percent). As it is set its last dots end near 308, 73 percent, which leaves a plain gap over the
// box on a card 280 px wide, and a gap still if a phone cuts the picture to two to one.
const CARDS = [
  { file: 'card-1.png', tag: 'og:image', pad: 31, side: 56, ttl: 62, subTop: 7, sub: 20, ruleTop: 14, hdTop: 10, hdFoot: 10, au: 12.5, wk: 17.5, max: 42, foot: 364 },
  { file: 'card-x-1.png', tag: 'twitter:image', pad: 23, side: 48, ttl: 34, subTop: 5, sub: 21, ruleTop: 10, hdTop: 6, hdFoot: 6, au: 13.5, wk: 19, max: 41, foot: 323 },
];
for (const c of CARDS) Object.assign(c, trial[c.file] || {});

const pageOf = (c) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<link rel="stylesheet" href="/css/atlas.css">
<style>
  html,body{margin:0;background:var(--paper)}
  .card{position:relative;width:${W}px;height:${H}px;overflow:hidden;background:var(--paper);box-shadow:inset 0 0 60px var(--shade);color:var(--ink)}
  .card-in{position:absolute;inset:0;padding:${c.pad}px ${c.side}px 0;display:flex;flex-direction:column}
  .card-ttl{margin:0;font-family:var(--display);font-weight:400;font-variant-numeric:lining-nums;font-size:${c.ttl}px;line-height:1;letter-spacing:-.01em;color:var(--ink);white-space:nowrap}
  .card-sub{margin:${c.subTop}px 0 0 2px;font-family:var(--text);font-style:italic;font-size:${c.sub}px;line-height:1.2;color:var(${c.subColor || '--soft'});white-space:nowrap}
  .card-rule{height:1px;margin:${c.ruleTop}px 0 0;background:var(--ink);opacity:.9}
  .card .spec{margin:0;padding:0;border-radius:0;background:none;box-shadow:none}
  .card .spec-hd{margin:${c.hdTop}px 0 ${c.hdFoot}px;padding-bottom:0;border-bottom:0;gap:2px 13px}
  .card .spec-au{font-size:${c.au}px}
  .card .spec-wk{font-size:${c.wk}px}
</style></head>
<body><div class="card" id="card"><div class="card-in" id="in"></div></div>
<script type="module">
  import { el } from '/js/kit/draw.js';
  import { mountPlate } from '/js/kit/plate.js';
  const WORDS = ${JSON.stringify(WORDS)};
  const front = await (await fetch('/data/front.json')).json();
  const s = front.hero;
  const keep = s.plate.rows.slice(0, ${rows});
  const ids = new Set(keep.map((r) => r.id));
  const lens = { ...s.plate.lenses[0] };
  if (lens.scan) lens.scan = Object.fromEntries(Object.entries(lens.scan).filter(([id]) => ids.has(id)));
  const plate = { ...s.plate, rows: keep, lenses: [lens] };
  const host = document.getElementById('in');
  const spec = el('article', { class: 'spec spec-beat spec-hero' });
  spec.append(el('p', { class: 'spec-hd' }, [el('span', { class: 'spec-au', text: s.author }), el('span', { class: 'spec-wk', text: s.workTitle })]));
  const title = el('h1', { class: 'card-ttl', text: WORDS.title });
  const sub = el('p', { class: 'card-sub', text: WORDS.sub });
  host.append(title, sub, el('div', { class: 'card-rule' }), spec);
  mountPlate(spec, plate, {}, { bare: true, narrowAt: 430, max: ${c.max}, now: true });
  await document.fonts.ready;
  window.__drawn = true;
</script></body></html>`;

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const card = /^\/__card-(\d+)\.html$/.exec(rel);
  if (card && CARDS[Number(card[1])]) { res.writeHead(200, { 'content-type': TYPES['.html'], 'cache-control': 'no-store' }); res.end(pageOf(CARDS[Number(card[1])])); return; }
  const file = path.join(SITE, rel);
  if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/`;

const problems = [];
const problem = (t) => { problems.push(t); };
fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: SCALE, reducedMotion: 'reduce' });
let marks = null;
for (const [i, c] of CARDS.entries()) {
  const page = await context.newPage();
  const errs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(`${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => errs.push(`pageerror: ${String(e)}`));
  page.on('response', (r) => { if (r.status() >= 400) errs.push(`${r.status()}: ${r.url()}`); });
  await page.goto(`${base}__card-${i}.html`);
  await page.waitForFunction(() => window.__drawn === true, null, { timeout: 15000 });
  await page.waitForTimeout(900);
  // what stands where, so that nothing is cut off, pushed against an edge, or left under the box X lays on the foot
  const box = await page.evaluate(() => {
    const one = (n) => Math.round(n * 10) / 10;
    const ends = (sel) => { const e = document.querySelector(sel); const r = document.createRange(); r.selectNodeContents(e); const b = r.getBoundingClientRect(); return { top: one(b.top), right: one(b.right), bottom: one(b.bottom), cut: e.scrollWidth > e.clientWidth }; };
    let low = 0; let right = 0;
    for (const e of document.querySelectorAll('#card .plate svg .mk, #card .plate .sy')) { const b = e.getBoundingClientRect(); if (b.width || b.height) { low = Math.max(low, b.bottom); right = Math.max(right, b.right); } }
    const circles = [...document.querySelectorAll('#card .plate svg circle')];
    const red = (v) => /--red/.test(v || ''); // (the kit sets a color that is a variable as a style, and any other as an attribute)
    const plate = document.querySelector('#card .plate');
    return {
      title: ends('.card-ttl'), sub: ends('.card-sub'), head: ends('.spec-hd'), lowest: one(low), rightmost: one(right),
      redDots: circles.filter((x) => red(x.style.fill)).length,
      redRings: circles.filter((x) => x.getAttribute('fill') === 'none' && red(x.style.stroke)).length,
      dots: circles.length,
      fs: plate ? getComputedStyle(plate).getPropertyValue('--fs').trim() : '?',
      faces: [...document.fonts].filter((f) => f.status === 'loaded').length,
    };
  });
  const out = path.join(outDir, c.file);
  await page.locator('#card').screenshot({ path: out });
  await page.close();
  marks = box;
  const kb = Math.round(fs.statSync(out).size / 1024);
  console.log(`${path.relative(ROOT, out)}: ${W * SCALE} by ${H * SCALE}, ${kb} KB; ${rows} line${rows === 1 ? '' : 's'} at ${box.fs}; faces loaded ${box.faces}`);
  console.log(`  title to ${box.title.right} by ${box.title.bottom}, line under it to ${box.sub.right} by ${box.sub.bottom}, author's line to ${box.head.bottom}; lowest mark at ${box.lowest} of ${H} (${Math.round(box.lowest / H * 1000) / 10}%, may reach ${c.foot}), rightmost at ${box.rightmost}`);
  if (box.lowest > c.foot) problem(`${c.file}: the passage runs too low (${box.lowest}, and it may reach ${c.foot})`);
  if (box.rightmost > W - 40 || box.title.right > W - 40 || box.sub.right > W - 40) problem(`${c.file}: something runs too near the right edge`);
  if (box.title.cut || box.sub.cut) problem(`${c.file}: the title or the line under it is cut off`);
  if (box.faces < 4) problem(`${c.file}: only ${box.faces} of the faces loaded`);
  if (errs.length) problem(`${c.file}: the browser complained:\n  ${errs.join('\n  ')}`);
}
await browser.close();
server.close();

// The alt texts: the words that are in the picture, then what is drawn. The lines come from the data.
// (They are written to be heard: a line that ends with a stop is followed by a space, and any other by a comma.)
const hero = JSON.parse(fs.readFileSync(path.join(SITE, 'data/front.json'), 'utf8')).hero;
const lines = hero.plate.rows.slice(0, rows).map((r) => r.words.slice(r.first, r.last + 1).map((w) => w.t).join(' '));
const verse = lines.reduce((all, line) => (all ? `${all}${/[.,;:!?]$/.test(all) ? ' ' : ', '}${line}` : line), '');
const count = ['', 'One line', 'Two lines', 'Three lines'][rows] || `${rows} lines`;
const said = `${WORDS.title}. ${WORDS.sub}. ${count} of ${hero.title} from ${hero.author}’s ${hero.workTitle}: “${verse}” `
  + 'Under each line is its measure: a rule with a long stroke at each beat, and dots at the stresses of the speaking voice. ';
// X takes 420 characters, which leaves room for the key to the two red marks and no more. The other sites take
// a longer text, and theirs says where the two marks stand.
const ALT = [
  ['property="og:image:alt"', `${said}The first line begins with a red dot, a stress off the beat. The second begins with a red ring, a beat the voice passes over.`],
  ['name="twitter:image:alt"', `${said}A red dot is a stress off the beat, and a red ring a beat the voice passes over.`],
];
console.log(`alt texts: ${ALT[0][1].length} characters, and ${ALT[1][1].length} for X (which takes 420); the cards carry ${marks.dots} dots, ${marks.redDots} of them red, and ${marks.redRings} red ring${marks.redRings === 1 ? '' : 's'}`);
if (ALT[1][1].length > 420) problem(`the alt text for X is ${ALT[1][1].length} characters, and X takes 420`);
// Their last sentences are written for the passage as it is marked now: one red dot, under the first syllable
// of the first line, where the voice has a stress and the measure no beat, and one red ring, under the first
// syllable of the second, where the measure has a beat and the voice no stress. Another passage wants other
// sentences.
const scan = hero.plate.lenses[0].scan || {};
const opens = hero.plate.rows.slice(0, rows).map((r) => { const m = scan[r.id] || {}; const first = (t) => String(t || '').replace(/[\s|]/g, '')[0]; return first(m.meter) + first(m.voice); });
if (rows !== 2 || marks.redDots !== 1 || marks.redRings !== 1 || opens[0] !== 'x/' || opens[1] !== '/x') problem('the alt texts say that the first line begins with a red dot and the second with a red ring, and the passage on the card is not marked so: write their last sentences again');

// the page has to name the pictures it is served with, and to describe them as they are
if (outDir === SITE) {
  const file = path.join(SITE, 'index.html');
  const was = fs.readFileSync(file, 'utf8');
  const esc = (t) => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  let html = was;
  for (const [key, text] of ALT) {
    const re = new RegExp(`(<meta ${key} content=")[^"]*(">)`);
    if (!re.test(html)) problem(`site/index.html has no tag ${key}`);
    html = html.replace(re, (m, a, z) => a + esc(text) + z);
  }
  if (html !== was) { fs.writeFileSync(file, html); console.log('the alt texts were written into site/index.html'); }
  const tag = (name) => (new RegExp(`<meta (?:property|name)="${name}" content="([^"]*)"`).exec(html) || [])[1] || '';
  for (const c of CARDS) if (!tag(c.tag).endsWith(`/${c.file}`)) problem(`site/index.html does not name ${c.file} as ${c.tag}`);
  if (tag('og:image:width') !== String(W * SCALE) || tag('og:image:height') !== String(H * SCALE)) problem('site/index.html gives the picture another size than it has');
  if (tag('twitter:card') !== 'summary_large_image') problem('site/index.html does not ask for the large card (twitter:card)');
}
if (problems.length) { console.log(`PROBLEMS:\n  ${problems.join('\n  ')}`); process.exitCode = 2; } else console.log('no problems');
