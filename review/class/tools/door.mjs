// For each door named as piece:plate:tab, prints the plate's heading and label and that tab's
// kind, label, caption and why (the site's own prose). Prints no row of any passage.
//   node review/class/tools/door.mjs kierkegaard:window:0 castle:street:0 ...
import fs from 'node:fs';
for (const a of process.argv.slice(2)) {
  const [id, plate, tab] = a.split(':');
  const f = `site/data/pieces/${id}.json`;
  if (!fs.existsSync(f)) { console.log(`${a}: NO SUCH PIECE`); continue; }
  const p = JSON.parse(fs.readFileSync(f, 'utf8'));
  const pl = (p.plates || []).find((x) => x.id === plate);
  if (!pl) { console.log(`${a}: NO SUCH PLATE`); continue; }
  const l = pl.lenses[Number(tab)];
  console.log(`\n== ${a} | heading: ${pl.heading} | label: ${pl.label} | src: ${pl.src} | lang: ${pl.lang} | tabs: ${pl.lenses.length}`);
  if (!l) { console.log('   NO SUCH TAB'); continue; }
  console.log(`   tab ${tab}: ${l.kind} | ${l.label}`);
  console.log(`   caption: ${typeof l.caption === 'string' ? l.caption : JSON.stringify(l.caption)}`);
  if (l.why) console.log(`   why: ${typeof l.why === 'string' ? l.why : JSON.stringify(l.why)}`);
}
