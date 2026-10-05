// How full each line of a prose passage is: for every passage a plate shows, on every tab, the lines
// (but the last) that end short of a share of the measure. Holding a marked run of words together
// makes the line before it end early; this says where and by how much. It prints the first word of
// a line and no more. Serves site/ as shoot.mjs does. Writes nothing.
//   node remake/works/adams/rag.mjs [--piece adams] [--short 85] [--widths 1280,390,360,320]
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const arg = (name, fallback) => { const i = process.argv.indexOf(`--${name}`); return i > 0 ? process.argv[i + 1] : fallback; };
const piece = arg('piece', 'adams');
const short = Number(arg('short', '85'));
const widths = arg('widths', '1280,390,360,320').split(',').map(Number);
const SITE = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../../../site');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  const file = path.join(SITE, rel);
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/`;
const browser = await chromium.launch();
let worst = 100; let shortLines = 0; let allLines = 0; let heldLines = 0; let worstHeld = 100;
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(`${base}#/${piece}`);
  await page.waitForSelector('.plates > .plate');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1500);
  console.log(`== window ${width} px`);
  const plates = await page.$$eval('.plates > .plate', (list) => list.map((p) => ({ id: p.dataset.plate, tabs: p.querySelectorAll('.plate-tabs button').length })));
  for (const plate of plates) {
    const said = new Set();
    for (let t = 0; t < Math.max(1, plate.tabs); t++) {
      if (plate.tabs) { await page.click(`.plates > .plate[data-plate="${plate.id}"] .plate-tabs button:nth-child(${t + 1})`); await page.waitForTimeout(600); }
      const got = await page.evaluate(({ id, limit }) => {
        const root = document.querySelector(`.plates > .plate[data-plate="${id}"]`);
        const out = [];
        [...root.querySelectorAll('.tx, .pr')].forEach((tx, k) => {
          const ws = [...tx.querySelectorAll('.w')].filter((w) => w.getClientRects().length);
          if (ws.length < 2 || !tx.getClientRects().length) return;
          const cs = getComputedStyle(tx); const box = tx.getBoundingClientRect();
          const left = box.left + parseFloat(cs.paddingLeft); const right = box.right - parseFloat(cs.paddingRight);
          const lines = [];
          for (const w of ws) {
            const r = w.getBoundingClientRect(); const top = Math.round(r.top);
            let line = lines.find((l) => Math.abs(l.top - top) < 8);
            if (!line) { line = { top, right: r.right, first: w.textContent.trim().split(/\s/)[0], head: w, headWidth: r.width }; lines.push(line); }
            line.right = Math.max(line.right, r.right);
          }
          lines.sort((a, b) => a.top - b.top);
          const fills = lines.map((l) => Math.round(((l.right - left) / (right - left)) * 100));
          // a line is short because of a held run when the next line begins with the first word of such a run,
          // and that word by itself would have had room on the short line (a space is taken as 6 px)
          const held = (i) => {
            const next = lines[i + 1]; if (!next) return false;
            const run = next.head.closest('.run'); if (!run || run.querySelector('.w') !== next.head) return false;
            return lines[i].right + 6 + next.headWidth <= right + 0.5;
          };
          const low = lines.map((l, i) => ({ n: i + 1, first: l.first, fill: fills[i], held: held(i) })).slice(0, -1).filter((l) => l.fill < limit);
          out.push({ k, lines: lines.length, measure: Math.round(right - left), low });
        });
        return out;
      }, { id: plate.id, limit: short });
      for (const g of got) {
        const key = `${g.k}/${g.lines}/${g.measure}/${g.low.map((l) => `${l.n}:${l.fill}`).join(',')}`;
        if (said.has(key)) continue;
        said.add(key);
        allLines += g.lines - 1; shortLines += g.low.length; heldLines += g.low.filter((l) => l.held).length;
        for (const l of g.low) { worst = Math.min(worst, l.fill); if (l.held) worstHeld = Math.min(worstHeld, l.fill); }
        console.log(`   ${plate.id}, tab ${t}, passage ${g.k} (${g.lines} lines of ${g.measure} px): ${g.low.length ? g.low.map((l) => `line ${l.n} ("${l.first}") ends at ${l.fill}%${l.held ? ' BECAUSE THE RUN AFTER IT IS HELD' : ''}`).join('; ') : `no line but the last ends short of ${short}%`}`);
      }
    }
  }
  await context.close();
}
await browser.close(); server.close();
console.log(shortLines ? `${shortLines} of ${allLines} lines (the last line of a passage not counted) end short of ${short}% of the measure; the shortest ends at ${worst}%` : `no line but the last of a passage ends short of ${short}% of the measure (${allLines} lines)`);
console.log(heldLines ? `${heldLines} of those ${shortLines} are short because the run after them is held together; the shortest of these ends at ${worstHeld}%` : 'none of them is short because a run is held together');
