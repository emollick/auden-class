// Opens every folded table under every drawing and says which are wider than the room they have (so that a
// column is cut off and must be pushed sideways to be seen).
//   node review/phone/tools/tables.mjs [--site dir] [--widths 320,360,390] [piece ids ...]
// Prints numbers and ids only.
import fs from 'node:fs'; import path from 'node:path'; import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(`--${name}`); return i < 0 ? null : args.splice(i, 2)[1]; };
const SITE = path.resolve(flag('site') || 'site'); const widths = (flag('widths') || '320,360,390').split(',').map(Number);
const ids = args.length ? args : fs.readdirSync(path.join(SITE, 'data/pieces')).filter((f) => f !== 'index.json').map((f) => f.replace('.json', '')).sort();
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.png': 'image/png', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => { const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html'); const file = path.join(SITE, rel); if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('no'); return; } res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' }); fs.createReadStream(file).pipe(res); });
await new Promise((d) => server.listen(0, '127.0.0.1', d));
const base = `http://127.0.0.1:${server.address().port}/`;
const browser = await chromium.launch();
let tables = 0; let wide = 0;
for (const width of widths) {
  const page = await (await browser.newContext({ viewport: { width, height: 844 }, reducedMotion: 'reduce' })).newPage();
  for (const id of ids) {
    await page.goto('about:blank'); await page.goto(`${base}#/${id}`); await page.waitForTimeout(1200);
    const n = await page.evaluate(() => document.querySelectorAll('main .plate:not(.plate-spec)').length);
    for (let k = 0; k < n; k++) {
      const nt = await page.evaluate((k) => [...document.querySelectorAll('main .plate:not(.plate-spec)')][k].querySelectorAll('.plate-hd .plate-tabs button').length, k);
      for (let t = 0; t < Math.max(1, nt); t++) {
        const r = await page.evaluate(async ([k, t]) => {
          const pl = [...document.querySelectorAll('main .plate:not(.plate-spec)')][k];
          const b = pl.querySelectorAll('.plate-hd .plate-tabs button')[t]; if (b) b.click();
          await new Promise((d) => setTimeout(d, 160));
          const out = [];
          for (const box of pl.querySelectorAll('details.dg-facts')) {
            if (!box.getClientRects().length) continue;
            box.open = true;
            const w = box.querySelector('.facts-wrap'); if (!w) continue;
            await new Promise((d) => requestAnimationFrame(d));
            out.push({ need: w.scrollWidth, room: w.clientWidth, cols: w.querySelectorAll('tr:first-child > *').length });
            box.open = false;
          }
          return { plate: pl.dataset.plate, out };
        }, [k, t]);
        for (const o of r.out) { tables++; if (o.need > o.room + 1) { wide++; console.log(`WIDE ${id} ${r.plate} tab ${t} at ${width}: the table needs ${o.need} px and has ${o.room} (${o.cols} columns)`); } }
      }
    }
  }
  await page.close();
}
console.log(`${ids.length} pieces at ${widths.join(', ')}: ${tables} tables opened; wider than their room: ${wide}`);
await browser.close(); server.close();
process.exit(wide ? 1 : 0);
