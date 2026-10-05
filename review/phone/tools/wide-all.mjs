// Opens every page of the site at each given width and says which are wider than their window, and what makes them so.
//   node review/phone/tools/wide-all.mjs [--site dir] [--widths 320,360,390,430] [--tabs]
// The pages: the front page, the list of works, the class, the shelf, the about page, every piece, and one part of every book.
// With --tabs every tab of every plate of every piece is pressed and the width looked at again.
// Prints numbers, ids and class names only.
import fs from 'node:fs'; import path from 'node:path'; import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const args = process.argv.slice(2);
const flag = (name, takes = true) => { const i = args.indexOf(`--${name}`); if (i < 0) return null; return takes ? args.splice(i, 2)[1] : (args.splice(i, 1), true); };
const SITE = path.resolve(flag('site') || 'site');
const widths = (flag('widths') || '320,360,390,430').split(',').map(Number);
const tabs = flag('tabs', false);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.png': 'image/png', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  const file = path.join(SITE, rel);
  if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const base = `http://127.0.0.1:${server.address().port}/`;
const pieces = fs.readdirSync(path.join(SITE, 'data/pieces')).filter((f) => f.endsWith('.json') && f !== 'index.json').map((f) => f.replace('.json', '')).sort();
const books = fs.readdirSync(path.join(SITE, 'data/texts')).filter((d) => fs.statSync(path.join(SITE, 'data/texts', d)).isDirectory()).sort();
const reads = books.map((b) => { const parts = fs.readdirSync(path.join(SITE, 'data/texts', b)).filter((f) => f.endsWith('.json') && f !== 'index.json').sort(); return parts.length ? `read/${b}/${parts[Math.min(1, parts.length - 1)].replace('.json', '')}` : null; }).filter(Boolean);
const routes = ['', 'works', 'class', 'shelf', 'about', ...pieces, ...reads];
const look = () => {
  const iw = innerWidth; const de = document.documentElement; const out = [];
  if (de.scrollWidth <= iw) return { iw, sw: de.scrollWidth, out };
  const name = (n) => { const p = []; for (let e = n; e && e !== document.body; e = e.parentElement) p.unshift(e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + (e.className && typeof e.className === 'string' ? '.' + e.className.trim().split(/\s+/).slice(0, 3).join('.') : '')); return p.slice(-3).join(' > '); };
  for (const n of document.querySelectorAll('body *')) {
    const b = n.getBoundingClientRect();
    if ((b.width === 0 && b.height === 0) || b.right <= iw + 0.5) continue;
    let clipped = false; for (let e = n.parentElement; e && e !== document.body; e = e.parentElement) { if (getComputedStyle(e).overflowX !== 'visible') { clipped = true; break; } }
    if (clipped || n.closest('details:not([open]) > :not(summary)')) continue;
    out.push(`${name(n)} to ${Math.round(b.right)}`);
    if (out.length >= 3) break;
  }
  return { iw, sw: de.scrollWidth, out };
};
const browser = await chromium.launch();
let bad = 0; let seen = 0; let pressed = 0;
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: 844 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  const page = await context.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(String(e).slice(0, 120)));
  for (const route of routes) {
    await page.goto(`${base}#/${route}`); await page.reload(); await page.waitForTimeout(route === 'class' || route === '' || route === 'works' ? 1800 : 900);
    seen++;
    let r = await page.evaluate(look);
    if (r.sw > r.iw) { bad++; console.log(`${width}  #/${route}  wider by ${r.sw - r.iw}: ${r.out.join(' | ')}`.slice(0, 260)); }
    if (tabs && pieces.includes(route)) {
      const n = await page.locator('.plate-hd .plate-tabs button').count();
      for (let i = 0; i < n; i++) {
        const b = page.locator('.plate-hd .plate-tabs button').nth(i);
        if (!(await b.isVisible())) continue;
        await b.click(); await page.waitForTimeout(140); pressed++;
        r = await page.evaluate(look);
        if (r.sw > r.iw) { bad++; console.log(`${width}  #/${route}  tab ${i}  wider by ${r.sw - r.iw}: ${r.out.join(' | ')}`.slice(0, 260)); }
      }
    }
  }
  if (errs.length) console.log(`${width}  page errors ${errs.length}: ${errs.slice(0, 2).join(' | ')}`);
  await context.close();
}
console.log(`${routes.length} pages at ${widths.length} widths: ${seen} looks${tabs ? `, ${pressed} tabs pressed` : ''}; wider than the window: ${bad}`);
await browser.close(); server.close();
