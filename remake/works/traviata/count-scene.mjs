// Counts, over the hosted Italian cut (site/data/texts/o-traviata/act-1.json), where each part of
// Violetta's scene stands, how the cut groups its lines, which groups are lines that come back from
// earlier in the act, and which of its lines the plates of this piece show. Prints numbers only: no
// word of the libretto is typed here or printed.
//   node remake/works/traviata/count-scene.mjs
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = path.resolve(import.meta.dirname, '../../..');
const bare = (s) => String(s).toLowerCase().normalize('NFD').replace(/[^a-z ]/g, ' ').replace(/\s+/g, ' ').trim();

export function sceneParts() {
  const reading = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, 'reading.json'), 'utf8'));
  const plate = reading.plates.find((p) => p.lenses.some((l) => l.kind === 'shape'));
  const scene = plate.lenses.find((l) => l.kind === 'shape');
  const cut = JSON.parse(fs.readFileSync(path.join(ROOT, 'site/data/texts', `${plate.text}.json`), 'utf8'));
  // every row of verse of the cut, in order
  const rows = [];
  cut.blocks.forEach((b, bi) => { if (b.k === 'v') b.lines.forEach((t, ri) => rows.push({ id: `${bi}.${ri}`, b: bi, r: ri, t })); });
  const blockRows = (b) => rows.filter((x) => x.b === b);
  // a block comes back from an earlier one of the same size if all its rows but one are that block's rows, word for word
  const likeOf = (b) => {
    const mine = blockRows(b);
    for (let e = 0; e < b; e++) {
      const theirs = blockRows(e);
      if (mine.length < 2 || theirs.length !== mine.length) continue;
      const same = mine.map((x, k) => bare(x.t) === bare(theirs[k].t));
      if (same.filter(Boolean).length >= mine.length - 1) return { block: e, same };
    }
    return null;
  };
  // the rows a plate shows, from its row specs ("9.0-9.1", "10.7[0-5]")
  const shownBy = (p) => (p.rows || []).flatMap((spec) => {
    const m = String(spec).match(/^(\d+)\.(\d+)(?:-(\d+)\.(\d+))?/);
    const a = rows.findIndex((x) => x.id === `${m[1]}.${m[2]}`); const z = m[3] === undefined ? a : rows.findIndex((x) => x.id === `${m[3]}.${m[4]}`);
    return rows.slice(a, z + 1).map((x) => x.id);
  });
  let from = 0;
  return scene.facts.map((f) => {
    const want = bare(f['first words']);
    const at = rows.findIndex((x, i) => i >= from && `${bare(x.t)} `.startsWith(`${want} `));
    const mine = at < 0 ? [] : rows.slice(at, at + f.lines);
    if (at >= 0) from = at + f.lines;
    const blocks = [...new Set(mine.map((x) => x.b))].map((b) => ({ block: b, lines: mine.filter((x) => x.b === b).length, whole: mine.filter((x) => x.b === b).length === blockRows(b).length, like: likeOf(b) }));
    // the stanzas, where a group of lines comes back: such a group closes the stanza of the group before it
    let stanzas = null;
    if (blocks.some((b) => b.like && b.whole)) {
      stanzas = [];
      let open = null;
      for (const b of blocks) {
        if (b.like && b.whole && open) { open.push(b.lines); stanzas.push(open); open = null; } else { if (open) stanzas.push(open); open = [b.lines]; }
      }
      if (open) stanzas.push(open);
    }
    const shown = reading.plates.filter((p) => p.text === plate.text).map((p) => ({ plate: p.id, lines: shownBy(p).map((id) => mine.findIndex((x) => x.id === id) + 1).filter((k) => k > 0) }));
    return { part: f.part, lines: f.lines, found: mine.length, first: mine[0] && mine[0].id, last: mine.length ? mine[mine.length - 1].id : undefined, blocks, stanzas, shown };
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const run = (list) => { const out = []; for (const n of list) { const last = out[out.length - 1]; if (last && last[1] === n - 1) last[1] = n; else out.push([n, n]); } return out.map(([a, z]) => (a === z ? `${a}` : `${a} to ${z}`)).join(', '); };
  sceneParts().forEach((p, n) => {
    console.log(`part ${n + 1}, ${p.part}, ${p.lines} lines in the facts: ${p.found} rows of the cut, ${p.first} to ${p.last}`);
    console.log(`   the cut sets them in ${p.blocks.length} block${p.blocks.length === 1 ? '' : 's'}: ${p.blocks.map((b) => `block ${b.block} (${b.lines} rows)`).join(', ')}`);
    let line = 0;
    for (const b of p.blocks) {
      if (b.like) console.log(`   block ${b.block}, lines ${line + 1} to ${line + b.lines} of the part, comes back from block ${b.like.block} of the act: rows ${run(b.like.same.map((s, k) => (s ? k : -1)).filter((k) => k >= 0))} word for word, row ${run(b.like.same.map((s, k) => (s ? -1 : k)).filter((k) => k >= 0))} not`);
      line += b.lines;
    }
    if (p.stanzas) console.log(`   so its stanzas, each closed by the lines that come back: ${JSON.stringify(p.stanzas)}`);
    for (const s of p.shown) console.log(`   lines of it shown on the plate "${s.plate}": ${s.lines.length ? run(s.lines) : 'none'}`);
  });
}
