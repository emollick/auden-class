// Cuts a part out of a picture, and enlarges it if asked, so that a tall plate can be read a part at a time.
//   node review/phone/tools/cut.mjs <in.png> <out.png> <x> <y> <width> <height> [times, default 1]
// With no numbers it prints the picture's size. All numbers are in the picture's own pixels (a plate in a 390 px
// window, photographed at twice the size, is 716 px wide; the window itself 780).
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import fs from 'node:fs';
const [,, inp, out, x, y, w, h, k = '1'] = process.argv;
if (!inp) { console.log('usage: node review/phone/tools/cut.mjs <in.png> [<out.png> <x> <y> <width> <height> [times]]'); process.exit(1); }
const browser = await chromium.launch(); const page = await browser.newPage();
const src = `data:image/png;base64,${fs.readFileSync(inp).toString('base64')}`;
const data = await page.evaluate(async ([src, x, y, w, h, k, cut]) => {
  const i = new Image(); await new Promise((d, f) => { i.onload = d; i.onerror = f; i.src = src; });
  if (!cut) return `${i.width} x ${i.height}`;
  const ww = Math.max(1, Math.min(w, i.width - x)); const hh = Math.max(1, Math.min(h, i.height - y));
  const c = document.createElement('canvas'); c.width = ww * k; c.height = hh * k;
  const g = c.getContext('2d'); g.imageSmoothingEnabled = false; g.drawImage(i, x, y, ww, hh, 0, 0, ww * k, hh * k);
  return c.toDataURL('image/png');
}, [src, +x || 0, +y || 0, +w || 0, +h || 0, +k || 1, !!out]);
if (out) { fs.writeFileSync(out, Buffer.from(data.split(',')[1], 'base64')); console.log(`wrote ${out}`); } else console.log(data);
await browser.close();
