// The tabs of one plate at small windows: the gap between them, the room between their letters, the
// width the row needs against the width the head has, and the rows they stand in. With --try it sends
// one more style rule to the browser, last, and measures again; no file is changed. Serves site/ as
// shoot.mjs does. Writes nothing.
//   node remake/works/adams/tabs.mjs [--piece adams] [--plate dynamo] [--widths 320,330,350,360]
//                                    [--try '.plate-tabs button{letter-spacing:.14em}']
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const arg = (name, fallback) => { const i = process.argv.indexOf(`--${name}`); return i > 0 ? process.argv[i + 1] : fallback; };
const piece = arg('piece', 'adams');
const plateId = arg('plate', 'dynamo');
const widths = arg('widths', '320,330,350,360').split(',').map(Number);
const trial = arg('try', '');
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
const round = (n) => Math.round(n * 10) / 10;
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 2, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(`${base}#/${piece}`);
  await page.waitForSelector('.plates > .plate');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1200);
  const measure = () => page.evaluate((id) => {
    const root = document.querySelector(`.plates > .plate[data-plate="${id}"]`);
    const bar = root.querySelector('.plate-tabs');
    const tabs = [...bar.querySelectorAll('button')];
    const rows = new Set(tabs.map((b) => Math.round(b.getBoundingClientRect().top)));
    const gap = parseFloat(getComputedStyle(bar).columnGap) || 0;
    const need = tabs.reduce((s, b) => s + b.getBoundingClientRect().width, 0) + gap * (tabs.length - 1);
    const head = root.querySelector('.plate-hd').getBoundingClientRect().width;
    return { head, gap, spacing: parseFloat(getComputedStyle(tabs[0]).letterSpacing) || 0, need, rows: rows.size, tabs: tabs.length };
  }, plateId);
  const say = (m) => `${m.tabs} tabs, ${round(m.gap)} px between them, ${Math.round(m.spacing * 1000) / 1000} px between letters: they need ${round(m.need)} px, the head is ${round(m.head)} px wide, and they stand in ${m.rows} row(s)`;
  console.log(`${width}px  ${plateId}  as it stands: ${say(await measure())}`);
  if (trial) {
    await page.addStyleTag({ content: trial });
    await page.waitForTimeout(200);
    console.log(`${width}px  ${plateId}  with ${trial} sent last: ${say(await measure())}`);
  }
  await context.close();
}
await browser.close(); server.close();
