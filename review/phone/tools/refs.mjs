// Looks at every node the plates' kit marks as naming a place in the passage (class "ref": a word named in a
// caption, a row of a key) and says whether it is set like the words around it: the same size, the same color,
// free to turn. (The class page's rule for a page reference once fell on these too.) Also counts the class
// page's own page references and says how they are set.
//   node review/phone/tools/refs.mjs [--site dir] [--width 1280] [piece ids ...]
// Prints numbers and ids only.
import fs from 'node:fs'; import path from 'node:path'; import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(`--${name}`); return i < 0 ? null : args.splice(i, 2)[1]; };
const SITE = path.resolve(flag('site') || 'site'); const width = +(flag('width') || 1280);
const ids = args.length ? args : fs.readdirSync(path.join(SITE, 'data/pieces')).filter((f) => f !== 'index.json').map((f) => f.replace('.json', '')).sort();
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.png': 'image/png', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => { const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/$/, '/index.html'); const file = path.join(SITE, rel); if (!file.startsWith(SITE) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('no'); return; } res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' }); fs.createReadStream(file).pipe(res); });
await new Promise((d) => server.listen(0, '127.0.0.1', d));
const base = `http://127.0.0.1:${server.address().port}/`;
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' })).newPage();
let total = 0; let odd = 0; const where = [];
for (const id of ids) {
  await page.goto('about:blank'); await page.goto(`${base}#/${id}`); await page.waitForTimeout(1300);
  const r = await page.evaluate(() => {
    let n = 0; const bad = [];
    for (const node of document.querySelectorAll('main .plate .ref')) {
      n++;
      const a = getComputedStyle(node); const b = getComputedStyle(node.parentElement);
      const small = Math.abs(parseFloat(a.fontSize) - parseFloat(b.fontSize)) > 0.01 && !node.matches('b, strong, .k, li, p, div');
      const own = node.matches('li, p, div, .k');
      // a row of a key is a block of its own: it is compared with the row beside it that is not marked, if there is one
      const sib = own ? [...node.parentElement.children].find((x) => x !== node && x.tagName === node.tagName && x.className.replace(/\s*\bref\b/, '') === node.className.replace(/\s*\bref\b/, '') && !x.classList.contains('ref')) : null;
      const c = sib ? getComputedStyle(sib) : b;
      if (a.whiteSpace !== c.whiteSpace || (sib ? a.fontSize !== c.fontSize : (own ? parseFloat(a.fontSize) < 12.5 : small)) || (!sib && !own && a.color !== b.color && !node.matches('b, strong, i, em'))) bad.push(`${node.tagName.toLowerCase()}.${node.className.replace(/\s+/g, '.')} in ${node.closest('.cap, .keys, .aside, .under, .plate-note')?.className.split(' ')[0] || '?'}: ${a.fontSize} ${a.whiteSpace}`);
    }
    return { n, bad };
  });
  total += r.n; odd += r.bad.length; if (r.bad.length) where.push(`${id}: ${r.bad.length} of ${r.n}: ${[...new Set(r.bad)].slice(0, 3).join(' | ')}`);
}
await page.goto('about:blank'); await page.goto(`${base}#/class`); await page.waitForTimeout(2500);
const cls = await page.evaluate(() => { const all = [...document.querySelectorAll('main .page-ref')]; const sizes = new Set(all.map((n) => (parseFloat(getComputedStyle(n).fontSize) / parseFloat(getComputedStyle(n.parentElement).fontSize)).toFixed(2))); return { n: all.length, sizes: [...sizes].join(','), old: document.querySelectorAll('main article.class > * .ref:not(.plate .ref)').length, inPlates: document.querySelectorAll('main .plate .ref').length }; });
where.forEach((w) => console.log(w));
console.log(`${ids.length} pieces at ${width}: ${total} marked words and rows on the plates; set unlike their neighbors: ${odd}`);
console.log(`the class page: ${cls.n} page references, at ${cls.sizes} of the size around them; left with the old class outside a plate: ${cls.old}; marked words in its plates: ${cls.inPlates}`);
await browser.close(); server.close();
process.exit(odd ? 1 : 0);
