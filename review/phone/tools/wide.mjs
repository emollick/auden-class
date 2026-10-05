// Says what makes a page wider than its window: the elements whose right edge passes the window's, outermost first.
//   node wide.mjs <route> [--site dir] [--width 390]
import fs from 'node:fs'; import path from 'node:path'; import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(`--${name}`); if (i < 0) return null; return args.splice(i, 2)[1]; };
const SITE = path.resolve(flag('site') || 'site'); const width = +(flag('width') || 390); const route = args[0] || '';
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.png': 'image/png', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html');
  const file = path.join(SITE, rel);
  if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((done) => server.listen(0, '127.0.0.1', done));
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width, height: 844 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
const page = await context.newPage();
await page.goto(`http://127.0.0.1:${server.address().port}/#/${route === 'home' ? '' : route}`);
await page.waitForTimeout(2500);
const r = await page.evaluate(() => {
  const iw = innerWidth; const out = [];
  const de = document.documentElement;
  const path = (n) => { const p = []; for (let e = n; e && e !== document.body; e = e.parentElement) p.unshift(e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + (e.className && typeof e.className === 'string' ? '.' + e.className.trim().split(/\s+/).join('.') : '')); return p.slice(-4).join(' > '); };
  for (const n of document.querySelectorAll('body *')) {
    const b = n.getBoundingClientRect();
    if (b.width === 0 && b.height === 0) continue;
    if (b.right > iw + 0.5 || b.left < -0.5) {
      const cs = getComputedStyle(n);
      // inside a box that scrolls or clips sideways it does not widen the page
      let clipped = false; for (let e = n.parentElement; e && e !== document.body; e = e.parentElement) { const o = getComputedStyle(e).overflowX; if (o !== 'visible') { clipped = true; break; } }
      const closed = !!n.closest('details:not([open]) > :not(summary)');
      out.push({ p: path(n), l: Math.round(b.left), r: Math.round(b.right), w: Math.round(b.width), y: Math.round(b.top + scrollY), clipped, closed, pos: cs.position });
    }
  }
  return { iw, sw: de.scrollWidth, sh: de.scrollHeight, bw: document.body.scrollWidth, out };
});
console.log(`window ${r.iw}; page ${r.sw} wide (body ${r.bw}), ${r.sh} tall; ${r.out.length} elements pass an edge; ${r.out.filter((o) => !o.clipped && !o.closed).length} of them not inside a clipping box or a closed fold`);
const seen = new Set();
for (const o of r.out.filter((o) => !o.clipped)) { const k = o.p + o.r; if (seen.has(k)) continue; seen.add(k); if (seen.size > 14) break; console.log(`  ${o.closed ? '(closed) ' : ''}${o.pos}  x ${o.l}..${o.r} (w ${o.w}) y ${o.y}  ${o.p}`.slice(0, 210)); }
await browser.close(); server.close();
