// How many lines of verse in the reader's books turn at a phone's width, at several sizes of type. Counts only.
//   node verse-fit.mjs [width=390]
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
const SITE = path.resolve('site');
const WIDTH = +(process.argv[2] || 390);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.woff2': 'font/woff2', '.png': 'image/png', '.mp3': 'audio/mpeg' };
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
const ctx = await browser.newContext({ viewport: { width: WIDTH, height: 844 } });
const page = await ctx.newPage();
await page.goto(`${base}#/read/tempest/a3s1`); await page.waitForTimeout(1800);
// the font a line of verse is set in, and a check of the canvas against the page: the widths of the first lines both ways
const font = await page.evaluate(async () => {
  await document.fonts.ready;
  const vl = document.querySelector('.reading .vl'); const cs = getComputedStyle(vl);
  const c = document.createElement('canvas').getContext('2d');
  c.font = `${cs.fontStyle} ${cs.fontWeight} 100px ${cs.fontFamily}`;
  if ('fontKerning' in c) c.fontKerning = 'normal';
  const lines = [...document.querySelectorAll('.reading .vl')].slice(0, 40);
  let worst = 0;
  for (const l of lines) {
    const r = document.createRange(); r.selectNodeContents(l);
    const rects = [...r.getClientRects()]; if (rects.length !== 1) continue;
    const w = c.measureText(l.textContent).width * parseFloat(cs.fontSize) / 100;
    worst = Math.max(worst, Math.abs(w - rects[0].width));
  }
  const box = document.querySelector('.reading');
  return { font: c.font, size: parseFloat(cs.fontSize), col: vl.clientWidth, pad: getComputedStyle(box).paddingLeft, worst: +worst.toFixed(2), turnedNow: [...document.querySelectorAll('.reading .vl')].filter((l) => { const r = document.createRange(); r.selectNodeContents(l); return new Set([...r.getClientRects()].map((x) => Math.round(x.top))).size > 1; }).length, all: document.querySelectorAll('.reading .vl').length };
});
console.log(`at ${WIDTH}: verse is set at ${font.size}px in a column of ${font.col}px (side padding ${font.pad}); canvas and page differ by at most ${font.worst}px on unturned lines; in this scene ${font.turnedNow} of ${font.all} lines turn now`);
const dir = path.join(SITE, 'data/texts');
const CAND = [[18.5, WIDTH - 40], [18.5, WIDTH - 32], [18, WIDTH - 32], [17.5, WIDTH - 32], [17, WIDTH - 32], [17, WIDTH - 40], [16.5, WIDTH - 32]];
console.log(`columns: ${CAND.map(([s, c]) => `${s}px/${c}`).join('  ')}   (turned lines, and of them those over by less than 12% of the column)`);
const total = CAND.map(() => [0, 0]); let allLines = 0;
for (const t of fs.readdirSync(dir).sort()) {
  const d = path.join(dir, t); if (!fs.statSync(d).isDirectory()) continue;
  const lines = [];
  for (const f of fs.readdirSync(d)) { if (f === 'index.json' || !f.endsWith('.json')) continue; const j = JSON.parse(fs.readFileSync(path.join(d, f), 'utf8')); for (const b of j.blocks || []) if (b.k === 'v') lines.push(...b.lines); }
  if (lines.length < 90) continue;
  const widths = await page.evaluate(({ lines, font }) => { const c = document.createElement('canvas').getContext('2d'); c.font = font; if ('fontKerning' in c) c.fontKerning = 'normal'; return lines.map((l) => c.measureText(l).width); }, { lines, font: font.font });
  const row = CAND.map(([s, col], i) => { let n = 0; let near = 0; for (const w of widths) { const x = w * s / 100; if (x > col) { n++; if (x - col < col * 0.12) near++; } } total[i][0] += n; total[i][1] += near; return `${String(n).padStart(5)} ${(100 * n / widths.length).toFixed(1).padStart(4)}%`; });
  allLines += widths.length;
  console.log(`${t.padEnd(17)} ${String(widths.length).padStart(6)}  ${row.join('  ')}`);
}
console.log(`${'all'.padEnd(17)} ${String(allLines).padStart(6)}  ${total.map(([n]) => `${String(n).padStart(5)} ${(100 * n / allLines).toFixed(1).padStart(4)}%`).join('  ')}`);
console.log(`${'  of them near'.padEnd(17)} ${''.padStart(6)}  ${total.map(([, k]) => `${String(k).padStart(5)}      `).join('  ')}`);
await browser.close(); server.close();
