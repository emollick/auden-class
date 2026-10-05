// How well speech.mjs settles the speeches of one line: some two hundred
// of them, in passages of the four plays of Shakespeare where verse and
// prose meet, were read in their places and marked verse (v) or prose (p)
// as a careful edition would most likely print them. This compares the
// texts as built with those marks. Not a book script, and no part of
// the build: run it after changing the weights in speech.mjs.
//
//   node build/texts/plays/single-lines-check.mjs
//
// Each mark is the number of a block (as show.mjs prints it) and a kind.
// If the cutting of a play changes, the numbers move and the marks must
// be made again: the script says when a marked block is no longer a
// speech of one line. With the weights as they stand it finds 15 of 201
// against the marks, all of them at a turn between verse and prose.

import fs from 'node:fs';
import path from 'node:path';

const MARKS = `
tempest a1s1 3p 5p 16p 18p 22p 26p 43p 59v 66v 69v
tempest a2s1 5v 7p 9p 15p 19p 23p 33p 37p 39p 41p 43p 45p 47p 49p 51p 53p 55p 57p 59p 73p 75p 77p 79p 81p 83p 85p 87p 129p 131p 136p 138p 140p 144p 146p 152v 156v 160v 208p 212p 214p 219p 221p 234v 237v 239v
tempest a3s2 46p 48p 52p 54v 66p 68p 72p 74p 80p 84p 88p 133p 135p
tempest a4s1 141p 157p 159p 162v
hamlet a2s2 104p 106p 108p 110p 112p 114p 118p 348p
hamlet a3s1 62p 64p 72p 76p 80p 84p 88p
hamlet a3s2 119p 121p 123p 152p 156p 158p 162p
hamlet a4s2 3p 8p 11v 13v 23p
hamlet a4s3 13v 20p
hamlet a4s5 25p 31p 54p 64v
hamlet a5s2 44p 46p 48p
othello a1s1 68v 70v 72v
othello a1s3 145p 147p 149p 177p 179p 181p 183p 185p
othello a2s1 116p 120p 122p 134p 136v
othello a2s3 13v 43p 83p 87p 91p 117p 123p 125p 182p
othello a3s1 38p 41v 43v
othello a3s4 3p 5p 7p 11p 13p 15p 28v 30v
othello a4s1 41v 43v 45v 47v 114p 120p 122p 124p 126p 142p 144p 151p 224v 229v 231v 233v 236v 239v
othello a4s2 172p 174p 178p
othello a5s1 109v 114v 116v 118v
henry-iv-2 a2s1 49v 51p 108p 110p 115p 117v 119v 121p 123v 127p 131p 135p 137p
henry-iv-2 a4s3 30p 38v 40v 42p
henry-iv-2 a5s1 40p 44p 48p
henry-iv-2 a5s3 90p 92p 96p 100p 121v 131p 133v
henry-iv-2 a5s5 35p 39p 51v 53v 60p
`;

const TEXTS = path.resolve(import.meta.dirname, '../../../site/data/texts');
let marks = 0;
let against = 0;
let moved = 0;
for (const row of MARKS.trim().split('\n')) {
  const [id, part, ...rest] = row.trim().split(/\s+/);
  const { blocks } = JSON.parse(fs.readFileSync(path.join(TEXTS, id, `${part}.json`), 'utf8'));
  const wrong = [];
  for (const r of rest) {
    const [, n, kind] = r.match(/^(\d+)([vp])$/);
    const b = blocks[Number(n)];
    marks++;
    if (!b || !(b.k === 'p' || (b.k === 'v' && b.lines.length === 1))) {
      moved++;
      wrong.push(`${n}: not a speech of one line`);
    } else if (b.k !== kind) {
      against++;
      wrong.push(`${n}: ${b.k}, marked ${kind}`);
    }
  }
  if (wrong.length) console.log(`${id} ${part}  ${wrong.join('; ')}`);
}
console.log(`${marks} marks; ${against} against${moved ? `; ${moved} no longer speeches of one line (the cutting has changed: mark them again)` : ''}`);
