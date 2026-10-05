// Prints the keys view, auden and sources of the named pieces (the site's own prose). Never plates.
//   node review/class/tools/piece-keys.mjs kierkegaard castle ...
import fs from 'node:fs';
for (const id of process.argv.slice(2)) {
  const f = `site/data/pieces/${id}.json`;
  if (!fs.existsSync(f)) { console.log(`${id}: NO SUCH PIECE`); continue; }
  const p = JSON.parse(fs.readFileSync(f, 'utf8'));
  console.log(`\n===== ${id}: ${p.title}`);
  console.log('keys:', Object.keys(p).join(', '));
  for (const k of ['view', 'auden', 'sources']) {
    console.log(`--- ${k}`);
    console.log(typeof p[k] === 'string' ? p[k] : JSON.stringify(p[k], null, 1));
  }
}
