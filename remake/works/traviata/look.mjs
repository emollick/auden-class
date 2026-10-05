// The artist's own looking-glass for one tab of this piece. It serves site/ as build/tools/shoot.mjs does and
// photographs one tab of one plate, at any widths. It can also show the page as it WOULD be with something
// art.md proposes, without touching any file: the piece's data is patched on its way to the browser.
//
//   node remake/works/traviata/look.mjs --plate cabaletta --lens 3 --widths 320,390,1280 [--try syllables,stanzas]
//        [--tag name] [--motion 3000] [--hover [--click]] [--open] [--pairs] [--fractional] [--out dir]
//
//   --try   syllables, stanzas   the two keys proposed for the Scene facts (see trial.mjs for where each is read)
//           stanzas-plain, quatrains   the plainer form of the second, and the fast song parted in two fours
//           broken               a part of the Scene facts without its count: the kit must show its table
//           names                plate `end` with the speakers' names and stage directions out of the rows
//           inline               plate `end` with them left in the rows, in the type of a name and of a direction
//           level                plate `refrain` with one more pair on its English tab, so that the returns stand level
//   --motion ms   leave motion on and photograph that many ms after the tab is opened
//   --hover       put the pointer on the first name of the drawing first; with --click, follow it and say where the page went
//   --open        open the numbers folded away under a drawing first
//   --pairs       on a tab of pairs: how much lower the second passage's end of each pair begins than the first's
//   --fractional  letters placed by fractions of a pixel, as a phone places them (the common picture tool's flag)
//   --out dir     where the picture goes: look/ beside this file unless said (trial pictures were sent to shots/trial/)
// Prints what it measured: the drawing's width and height, the size of the verse, the height of the plate, labels
// that overlap or stand outside the plate, and what is not yet drawn in.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { patch, inlineWords, INLINE } from './trial.mjs';

const ROOT = path.resolve(import.meta.dirname, '../../..');
const SITE = path.join(ROOT, 'site');
const args = process.argv.slice(2);
const flag = (name, takes = true) => { const i = args.indexOf(`--${name}`); if (i < 0) return null; return takes ? args.splice(i, 2)[1] : (args.splice(i, 1), true); };
const out = path.resolve(flag('out') || path.join(import.meta.dirname, 'look'));
const widths = (flag('widths') || '1280,390').split(',').map(Number);
const plateId = flag('plate') || 'cabaletta';
const lensNo = Number(flag('lens') || 0);
const tries = (flag('try') || '').split(',').filter(Boolean);
const tag = flag('tag') || (tries.length ? `try-${tries.join('-')}` : 'look');
const motion = flag('motion');
const hover = flag('hover', false);
const unfold = flag('open', false);   // open the numbers folded away under a drawing first
const follow = flag('click', false);  // with --hover: click the name and say where the page went (no picture)
const pairsToo = flag('pairs', false); // on a tab of pairs: how far apart, up and down, the two ends of each pair stand
fs.mkdirSync(out, { recursive: true });

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.mp3': 'audio/mpeg' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  const file = path.join(SITE, rel);
  if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  // the piece's data, patched on the way out where a trial is asked for
  if (tries.length && rel === '/data/pieces/traviata.json') {
    const piece = JSON.parse(fs.readFileSync(file, 'utf8'));
    patch(piece, new Set(tries), () => {});
    res.writeHead(200, { 'content-type': TYPES['.json'], 'cache-control': 'no-store' });
    res.end(JSON.stringify(piece));
    return;
  }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/`;

// (--fractional: letters placed by fractions of a pixel, as a phone places them; the common picture tool has the same flag)
const fractional = flag('fractional', false);
const browser = await chromium.launch(fractional ? { args: ['--font-render-hinting=none'] } : {});
let trouble = 0;
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: width < 600 ? 2 : 1, reducedMotion: motion ? 'no-preference' : 'reduce' });
  const page = await context.newPage();
  const errs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(`${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => errs.push(`pageerror: ${String(e)}`));
  await page.goto(`${base}#/traviata`);
  await page.waitForTimeout(1500);
  // (the type of a word is changed before the window takes its full height, so that the plate is fitted again with it)
  if (tries.includes('inline')) {
    const words = inlineWords(JSON.parse(fs.readFileSync(path.join(SITE, 'data/pieces/traviata.json'), 'utf8')));
    const done = await page.evaluate(({ list, styles }) => list.filter((x) => { const w = [...document.querySelectorAll(`.plate[data-plate="end"] .row[data-row="${x.row}"] .tx .w`)][x.nth]; if (w) w.style.cssText += `;${styles[x.kind]}`; return !!w; }).length, { words, list: words, styles: INLINE });
    console.log(`      ${done} of ${words.length} words of plate end set in the type of a name or of a direction`);
  }
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width, height: Math.min(h, 15000) });
  await page.waitForTimeout(1200);
  const plate = await page.$(`.plates > .plate[data-plate="${plateId}"]`);
  const tabs = await plate.$$('.plate-tabs button');
  if (tabs[lensNo]) { await tabs[lensNo].click(); await page.mouse.move(0, 0); }
  await page.waitForTimeout(motion ? Number(motion) : 900);
  if (hover) {
    // the pointer goes onto the first letter of the first name that is a link, and what its rule then is, is printed
    const t = await plate.$('.dg a text');
    if (t) {
      // (where the link has a clear zone round its letters, the pointer goes to a corner of the zone, off the letters)
      const z = await plate.$('.dg a rect');
      const b = await (z || t).boundingBox();
      await page.mouse.move(z ? b.x + b.width - 1.5 : b.x + 5, z ? b.y + 1.5 : b.y + b.height / 2, { steps: 4 });
      await page.waitForTimeout(400);
      const seen = await plate.evaluate((root) => { const a = root.querySelector('.dg a'); const u = a.querySelector('line, path'); return `${a.getAttribute('href')}; its rule is ${getComputedStyle(u).stroke}; pointer ${getComputedStyle(a).cursor}`; });
      console.log(`      with the pointer on the first name: ${seen}`);
      if (follow) {
        // a click there: where the page then is, and whether the reader opened (nothing of the book is printed here)
        await page.mouse.down(); await page.mouse.up();
        await page.waitForTimeout(2000);
        const there = await page.evaluate(() => `${location.hash}; ${document.querySelectorAll('main .plate').length} plates and ${document.querySelectorAll('main p, main .line, main [data-b]').length} paragraphs or lines on the page; scrolled to ${Math.round(scrollY)}`);
        console.log(`      after a click: ${there}`);
        await context.close();
        continue;
      }
    } else console.log('      no name of the drawing is a link');
  }
  if (unfold) { const s = await plate.$('details.dg-facts summary'); if (s) { await s.click(); await page.mouse.move(0, 0); await page.waitForTimeout(300); } else console.log('      no numbers are folded away under this drawing'); }
  const found = await plate.evaluate((root) => {
    const box = root.getBoundingClientRect();
    const say = [];
    const svg = root.querySelector('.dg');
    if (svg) say.push(`drawing ${Math.round(svg.getBoundingClientRect().width)} x ${Math.round(svg.getBoundingClientRect().height)} px`);
    const verse = [...root.querySelectorAll('.poem .tx')].find((n) => n.getBoundingClientRect().width > 0);
    if (verse) say.push(`verse at ${parseFloat(getComputedStyle(verse).fontSize).toFixed(1)} px; the plate ${Math.round(box.height)} px tall`);
    if ([...root.querySelectorAll('.own table.facts')].some((t) => !t.closest('details'))) say.push('the kit’s plain table is showing');
    const outside = (r) => r.width > 0 && (r.left < box.left - 1 || r.right > box.right + 1 || r.top < box.top - 1 || r.bottom > box.bottom + 1);
    root.querySelectorAll('.gl, .ov > *, .dg > *, .dg-note').forEach((n) => { if (outside(n.getBoundingClientRect())) say.push(`! ${n.tagName.toLowerCase()} "${(n.textContent || '').slice(0, 24)}" stands outside the plate`); });
    const labs = [...root.querySelectorAll('.dg text, .gl, .dg-note')].filter((n) => (n.textContent || '').trim()).map((n) => ({ n, r: n.getBoundingClientRect() })).filter((x) => x.r.width > 0);
    for (let a = 0; a < labs.length; a++) for (let b = a + 1; b < labs.length; b++) {
      const p = labs[a].r; const q = labs[b].r;
      const w = Math.min(p.right, q.right) - Math.max(p.left, q.left); const hh = Math.min(p.bottom, q.bottom) - Math.max(p.top, q.top);
      if (w > 1 && hh > 0.3 * Math.min(p.height, q.height)) say.push(`! "${labs[a].n.textContent.slice(0, 20)}" and "${labs[b].n.textContent.slice(0, 20)}" overlap`);
    }
    // what is still not drawn in (a mark that has not faded in, a line that has not drawn itself)
    const pale = [...root.querySelectorAll('.dg .fade, .dg-note.fade')].filter((n) => Number(getComputedStyle(n).opacity) < 0.99).length;
    const undrawn = [...root.querySelectorAll('.dg .draw')].filter((n) => parseFloat(getComputedStyle(n).strokeDashoffset) > 0.5).length;
    if (pale || undrawn) say.push(`! not yet drawn in: ${pale} that fade, ${undrawn} lines`);
    return say;
  });
  if (pairsToo) {
    // each pair of the tab showing: its two rows, and how much lower (+) or higher (-) the second passage's row begins
    const said = await plate.evaluate(async (root, { id, n }) => {
      const piece = await fetch('/data/pieces/traviata.json').then((r) => r.json());
      const lens = piece.plates.find((p) => p.id === id).lenses[n] || {};
      const plateOf = piece.plates.find((p) => p.id === id);
      // (a row of the second passage carries no number on the page: it is the n-th of that passage)
      const second = [...root.querySelectorAll('.beside p.pr')];
      const node = (row) => (String(row).startsWith('p:') ? second[((plateOf.pair || {}).rows || []).findIndex((r) => r.id === row)] : root.querySelector(`.row[data-row="${row}"] .tx`));
      const top = (row) => { const tx = node(row); return tx && tx.getBoundingClientRect().width > 0 ? tx.getBoundingClientRect().top : null; };
      const twoCol = root.classList.contains('two-col');
      return [`two columns: ${twoCol ? 'yes' : 'no'}`, ...(lens.ties || []).map((t, k) => { const a = top(t.a[0]); const b = top(t.b[0]); return `pair ${k + 1}: rows ${t.a[0]} and ${t.b[0]}: ${a == null || b == null ? 'one is not on the page' : `${Math.round(b - a)} px`}`; })];
    }, { id: plateId, n: lensNo });
    said.forEach((s) => console.log(`      ${s}`));
  }
  const file = path.join(out, `traviata-${plateId}-${lensNo}-${tag}-${width}.png`);
  await plate.screenshot({ path: file });
  console.log(`${width}px  ${plateId} ${lensNo}  ->  ${path.relative(ROOT, file)}`);
  for (const f of found) { if (f.startsWith('!')) trouble++; console.log(`      ${f}`); }
  if (errs.length) { trouble += errs.length; console.log(`      the browser reported: ${[...new Set(errs)].join(' | ')}`); }
  await context.close();
}
await browser.close();
server.close();
console.log(trouble ? `${trouble} thing${trouble === 1 ? '' : 's'} to look at` : 'nothing reported');
