// Compares the pictures of two sweeps, file by file: for each pair that differs, the two sizes, how much
// of the picture differs, and the box the differences stand in.
// usage: node pixdiff.mjs <dirA> <dirB> [split x, default 700] [cropDir] [names,comma]
// With a cropDir, each differing pair is also saved as one picture: the part that differs in the first, over the same part in the second.
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import fs from 'node:fs';
import path from 'node:path';
const [,, A, B, splitArg = '700', cropDir = '', only = ''] = process.argv;
if (cropDir) fs.mkdirSync(cropDir, { recursive: true });
const wanted = only ? only.split(',') : null;
const split = +splitArg;
const names = fs.readdirSync(B).filter((f) => f.endsWith('.png') && (!wanted || wanted.some((w) => f.startsWith(w)))).sort();
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('about:blank');
let same = 0; let gone = 0;
for (const name of names) {
  const fa = path.join(A, name); const fb = path.join(B, name);
  if (!fs.existsSync(fa)) { gone++; console.log(`${name}  only in ${B}`); continue; }
  const ba = fs.readFileSync(fa); const bb = fs.readFileSync(fb);
  if (ba.equals(bb)) { same++; continue; }
  const r = await page.evaluate(async ([a, b, split, crop]) => {
    const load = (src) => new Promise((done, fail) => { const i = new Image(); i.onload = () => done(i); i.onerror = fail; i.src = src; });
    const [ia, ib] = await Promise.all([load(a), load(b)]);
    const w = Math.min(ia.width, ib.width); const h = Math.min(ia.height, ib.height);
    const px = (im) => { const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(im, 0, 0); return x.getImageData(0, 0, w, h).data; };
    const da = px(ia); const db = px(ib);
    let n = 0; let l = w; let r = -1; let t = h; let bo = -1; let left = 0; let right = 0;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      if (Math.abs(da[i] - db[i]) > 24 || Math.abs(da[i + 1] - db[i + 1]) > 24 || Math.abs(da[i + 2] - db[i + 2]) > 24) {
        n++; if (x < l) l = x; if (x > r) r = x; if (y < t) t = y; if (y > bo) bo = y; if (x < split) left++; else right++;
      }
    }
    let pic = null;
    if (crop && n) {
      const m = 46; const x0 = Math.max(0, l - m); const y0 = Math.max(0, t - m);
      const cw = Math.min(Math.max(ia.width, ib.width), r + m) - x0; const cha = Math.min(ia.height, bo + m) - y0; const chb = Math.min(ib.height, bo + m + (ib.height - ia.height > 0 ? ib.height - ia.height : 0)) - y0;
      const c = document.createElement('canvas'); c.width = cw; c.height = cha + chb + 6; const x = c.getContext('2d');
      x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height);
      x.drawImage(ia, x0, y0, cw, cha, 0, 0, cw, cha);
      x.fillStyle = '#c0392b'; x.fillRect(0, cha + 2, cw, 2);
      x.drawImage(ib, x0, y0, cw, chb, 0, cha + 6, cw, chb);
      pic = c.toDataURL('image/png');
    }
    return { a: [ia.width, ia.height], b: [ib.width, ib.height], n, share: n / (w * h), box: [l, t, r, bo], left, right, crop: pic };
  }, [`data:image/png;base64,${ba.toString('base64')}`, `data:image/png;base64,${bb.toString('base64')}`, split, !!cropDir]);
  if (r.crop) fs.writeFileSync(path.join(cropDir, name), Buffer.from(r.crop.split(',')[1], 'base64'));
  const size = r.a[0] === r.b[0] && r.a[1] === r.b[1] ? `${r.a[0]}x${r.a[1]}` : `${r.a[0]}x${r.a[1]} -> ${r.b[0]}x${r.b[1]}  SIZE`;
  const where = r.n === 0 ? 'none above the threshold' : `${(r.share * 100).toFixed(2)}%  box x ${r.box[0]}..${r.box[2]} y ${r.box[1]}..${r.box[3]}  left ${r.left} right ${r.right}`;
  console.log(`${name.replace('.png', '')}  ${size}  ${where}`);
}
console.log(`same ${same}, only in the second ${gone}, of ${names.length}`);
await browser.close();
