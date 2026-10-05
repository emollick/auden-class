// Photographs the class page as a reader sees it: the head, each scene, the end, at a desk width and a phone width.
//   node review/class/tools/shoot-class.mjs [--out dir] [--widths 1280,390] [--only scene-id] [--open] [--site dir] [--pick Othello] [--bar 0] [--screens 3] [--route class|home|shelf|about]
// Prints what the browser complained of and anything wider than the window. Run `node build/pieces.mjs` first.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const ROOT = path.resolve(import.meta.dirname, '../../..');
const args = process.argv.slice(2);
const flag = (name, takes = true) => { const i = args.indexOf(`--${name}`); if (i < 0) return null; return takes ? args.splice(i, 2)[1] : (args.splice(i, 1), true); };
const SITE = path.resolve(flag('site') || path.join(ROOT, 'site'));
const out = path.resolve(flag('out') || path.join(ROOT, '.cache/shots/class'));
const widths = (flag('widths') || '1280,390').split(',').map(Number);
const only = flag('only');
const opened = flag('open', false);
const pick = flag('pick');
const bar = flag('bar');
const routeArg = flag('route');
const screens = Number(flag('screens') || 0);
const route = routeArg === 'home' ? '' : (routeArg || 'class');
fs.mkdirSync(out, { recursive: true });
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.mp3': 'audio/mpeg' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  const file = path.join(SITE, rel);
  if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/`;
const browser = await chromium.launch();
let trouble = 0;
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: width < 600 ? 2 : 1, reducedMotion: 'reduce' });
  const page = await context.newPage();
  const errs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(`${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => errs.push(`pageerror: ${String(e)}`));
  page.on('response', (r) => { if (r.status() >= 400) errs.push(`${r.status()}: ${r.url()}`); });
  await page.goto(`${base}#/${route}`);
  await page.waitForTimeout(1500);
  if (opened) await page.evaluate(() => document.querySelectorAll('details').forEach((d) => { d.open = true; }));
  if (pick) { await page.evaluate((name) => { const b = [...document.querySelectorAll('.sch-pick button')].find((x) => x.textContent === name); if (b) b.click(); }, pick); await page.waitForTimeout(500); }
  if (bar !== null) { await page.evaluate((n) => { const b = document.querySelectorAll('.load-strip .load-w')[n]; if (b) b.click(); }, Number(bar)); await page.waitForTimeout(300); console.log(`   bar ${bar}: ${await page.evaluate(() => { const n = document.querySelector('.load-now'); return `${n.textContent} | links ${[...n.querySelectorAll('a')].map((a) => a.getAttribute('href')).join(' ')}`; })}`); }
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  console.log(`${width}px: the page is ${h}px tall${over > 0 ? `, and ${over}px wider than its window` : ''}`);
  if (over > 0) trouble++;
  // things that run out of the window
  const wide = await page.evaluate(() => {
    const W = document.documentElement.clientWidth; const out = [];
    document.querySelectorAll('main *').forEach((n) => { const r = n.getBoundingClientRect(); if (r.width > 0 && r.right > W + 1 && !n.closest('.tiers-scroll')) out.push(`${n.tagName.toLowerCase()}.${String(n.className).slice(0, 30)} right ${Math.round(r.right)}`); });
    return out.slice(0, 8);
  });
  for (const w of wide) { trouble++; console.log(`   ! ${w}`); }
  if (route === 'class') {
    const shots = [['head', '.class-hd'], ['lede', '.class-lede'], ['toc', '.class-toc']];
    const ids = await page.$$eval('.scene', (ns) => ns.map((n) => n.id));
    for (const id of ids) shots.push([id.replace(/^scene-/, ''), `#${id}`]);
    shots.push(['end', '.class-end'], ['on', '.class-on']);
    // the first screens as a reader meets them
    for (let i = 0; i < screens; i++) { await page.evaluate((y) => window.scrollTo(0, y), i * 900); await page.waitForTimeout(300); await page.screenshot({ path: path.join(out, `screen-${width}-${i}.png`) }); }
    for (const [name, sel] of shots) {
      if (only && name !== only) continue;
      const node = await page.$(sel);
      if (!node) { console.log(`   no ${sel}`); continue; }
      await node.scrollIntoViewIfNeeded();
      await page.waitForTimeout(250);
      await node.screenshot({ path: path.join(out, `${name}-${width}.png`) });
    }
  } else {
    const total = Math.min(h, 9000);
    await page.setViewportSize({ width, height: total });
    await page.waitForTimeout(900);
    for (let y = 0, i = 0; y < total; y += 1500, i++) await page.screenshot({ path: path.join(out, `${route.replace(/\W+/g, '-') || 'home'}-${width}-${i}.png`), clip: { x: 0, y, width, height: Math.min(1500, total - y) } });
  }
  if (errs.length) { trouble += errs.length; console.log(`${width}px: the browser reported\n  ${[...new Set(errs)].join('\n  ')}`); }
  await context.close();
}
await browser.close();
server.close();
console.log(trouble ? `${trouble} thing${trouble === 1 ? '' : 's'} to look at` : 'nothing reported; now look at the pictures');
