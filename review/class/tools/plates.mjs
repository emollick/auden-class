// Lists the passages of the named pieces: plate ids, titles, and each tab's number, kind and label.
// Prints no text of any work: ids, titles (the site's own) and labels only.
//   node review/class/tools/plates.mjs augustine castle ...
import fs from 'node:fs';
for (const id of process.argv.slice(2)) {
  const f = `site/data/pieces/${id}.json`;
  if (!fs.existsSync(f)) { console.log(`${id}: NO SUCH PIECE`); continue; }
  const p = JSON.parse(fs.readFileSync(f, 'utf8'));
  console.log(`${id}: ${p.title} | record: ${p.record ? p.record.file : '-'}`);
  for (const pl of p.plates || []) {
    console.log(`  ${pl.id} | ${pl.title} | ${pl.where || ''} | rows ${pl.rows.length} | lang ${pl.lang}`);
    (pl.lenses || []).forEach((l, i) => console.log(`     ${i} ${l.kind} | ${l.label || l.name || ''}`));
  }
}
