// How each small note beside a passage ends: for every numbered remark (a Beat or a compare tab) and
// every word note (a Word tab) that a tab shows, the width it is set in, its type size, how many lines
// it makes and how many words stand on its last line. A note of three lines or more that ends in a
// line of one word is marked. It prints numbers only, never the words. Serves site/ as shoot.mjs does.
// Writes nothing.
//   node remake/works/adams/last.mjs [--piece adams] [--widths 1280,1024,900,768,600,390,360,320]
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const arg = (name, fallback) => { const i = process.argv.indexOf(`--${name}`); return i > 0 ? process.argv[i + 1] : fallback; };
const piece = arg('piece', 'adams');
const widths = arg('widths', '1280,1024,900,768,600,390,360,320').split(',').map(Number);
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
let widows = 0; let notes = 0;
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(`${base}#/${piece}`);
  await page.waitForSelector('.plates > .plate');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1500);
  console.log(`== window ${width} px`);
  const plates = await page.$$eval('.plates > .plate', (list) => list.map((p) => ({ id: p.dataset.plate, tabs: [...p.querySelectorAll('.plate-tabs button')].map((b) => b.textContent.trim()) })));
  for (const plate of plates) {
    for (let t = 0; t < Math.max(1, plate.tabs.length); t++) {
      if (plate.tabs.length) { await page.click(`.plates > .plate[data-plate="${plate.id}"] .plate-tabs button:nth-child(${t + 1})`); await page.waitForTimeout(600); }
      const got = await page.evaluate((id) => {
        const root = document.querySelector(`.plates > .plate[data-plate="${id}"]`);
        return [...root.querySelectorAll('.aside .points li, .aside .wn')].filter((n) => n.getClientRects().length && getComputedStyle(n).visibility === 'visible').map((n) => {
          const tops = [];
          const walk = document.createTreeWalker(n, NodeFilter.SHOW_TEXT);
          for (let node = walk.nextNode(); node; node = walk.nextNode()) {
            const re = /\S+/g; let m;
            while ((m = re.exec(node.data))) {
              const r = document.createRange(); r.setStart(node, m.index); r.setEnd(node, m.index + m[0].length);
              // a word that follows the one before with no space between (a mark inside a word) is the same word
              const glued = m.index === 0 && node.previousSibling == null && node.parentNode !== n && tops.length && !/\s$/.test((node.parentNode.previousSibling && node.parentNode.previousSibling.textContent) || ' ');
              const rect = r.getClientRects()[0]; if (!rect) continue;
              if (!glued) tops.push(Math.round(rect.top + rect.height / 2));
            }
          }
          const lines = [];
          for (const y of tops) { const line = lines.find((l) => Math.abs(l.y - y) < 6); if (line) line.words += 1; else lines.push({ y, words: 1 }); }
          lines.sort((a, b) => a.y - b.y);
          const cs = getComputedStyle(n);
          return { kind: n.matches('li') ? 'remark' : 'note', wide: Math.round(n.getBoundingClientRect().width), size: Math.round(parseFloat(cs.fontSize) * 10) / 10, lines: lines.length, last: lines.length ? lines[lines.length - 1].words : 0 };
        });
      }, plate.id);
      if (!got.length) continue;
      const said = got.map((g, i) => { const widow = g.lines >= 3 && g.last === 1; notes += 1; if (widow) widows += 1; return `${g.kind} ${i + 1}: ${g.lines} lines, ${g.last} on the last${widow ? ' ONE WORD' : ''}`; });
      console.log(`   ${plate.id}, tab ${t} "${plate.tabs[t] || ''}": set ${got[0].wide} px wide at ${got[0].size} px. ${said.join('; ')}`);
    }
  }
  await context.close();
}
await browser.close(); server.close();
console.log(widows ? `${widows} of ${notes} notes (each counted at each width) end in a line of one word` : `no note of three lines or more ends in a line of one word (${notes} notes, each counted at each width)`);
