// Puts the pointer on one mark of a drawing and photographs the plate, to see
// what the pointer changes. Serves site/ as shoot.mjs does.
//
//   node remake/works/adams/hover.mjs <plate> <lens> <n> [--proposed] [--width 1280]

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const HERE = import.meta.dirname;
const ROOT = path.resolve(HERE, '../../..');
const SITE = path.join(ROOT, 'site');
const args = process.argv.slice(2);
const proposed = args.includes('--proposed');
const wi = args.indexOf('--width');
const width = wi >= 0 ? +args[wi + 1] : 1280;
const [plateId, lens, n] = args;
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  let file = path.join(SITE, rel);
  if (proposed && rel === '/js/pieces/adams.js') file = path.join(HERE, 'adams-proposed.js');
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
const page = await context.newPage();
await page.goto(`http://127.0.0.1:${server.address().port}/#/adams`);
await page.waitForTimeout(1500);
const h = await page.evaluate(() => document.documentElement.scrollHeight);
await page.setViewportSize({ width, height: Math.min(h, 15000) });
await page.waitForTimeout(1200);
const plate = await page.$(`.plates > .plate[data-plate="${plateId}"]`);
const tabs = await plate.$$('.plate-tabs button');
await tabs[+lens].click();
await page.waitForTimeout(800);
const hot = await plate.$$('.own .dg .dg-hot');
const box = await hot[+n].boundingBox();
await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
await page.waitForTimeout(500);
const state = await plate.evaluate((root) => {
  const svg = root.querySelector('.own svg.dg');
  const on = [...svg.querySelectorAll('.dg-on')].map((x) => `${x.tagName}${x.classList.contains('dg-hot') ? ' (answers to the pointer)' : ''} fill=${x.style.fill || x.getAttribute('fill')} opacity=${getComputedStyle(x).opacity}`);
  const dim = [...svg.querySelectorAll('*')].filter((x) => getComputedStyle(x).opacity !== '1').map((x) => `${x.tagName} fill=${x.style.fill || x.getAttribute('fill')} opacity=${getComputedStyle(x).opacity}`);
  const say = root.querySelector('.dg-say');
  return { on, dimmed: dim.length, dimmedVisible: dim.filter((s) => !/fill=transparent/.test(s)).length, say: say ? say.textContent : '' };
});
console.log(JSON.stringify(state, null, 1));
const out = path.join(HERE, 'shots', proposed ? 'proposed' : 'widths', `${proposed ? 'proposed' : 'live'}-${plateId}-${lens}-pointer-on-${n}-${width}.png`);
await plate.screenshot({ path: out });
console.log(path.relative(ROOT, out));
await browser.close();
server.close();
