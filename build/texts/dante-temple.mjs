// The Temple Classics Dante (J. M. Dent, 1899-1901): the Inferno in John
// Aitken Carlyle's prose (second edition, 1867) with Hermann Oelsner's
// alterations in square brackets, the Purgatorio in
// Thomas Okey's, the Paradiso in Philip H. Wicksteed's. The Modern Library
// reprinted it in one volume in 1932 as "the Carlyle-Wicksteed
// translation"; that is the book on Auden's list, and the version Donald
// Pearce names for the examination.
//
// The text is recovered from scans by build/texts/temple/extract.py, which
// writes cantos.json (see build/texts/temple/REPORT.md for the printings
// followed and for what was checked). This script only turns that file
// into site data.

import fs from 'node:fs';
import path from 'node:path';
import { writeText, toRoman } from '../lib/gutenberg.mjs';

const SRC = path.resolve(import.meta.dirname, 'temple/cantos.json');
const NAMES = { inf: 'Inferno', pur: 'Purgatorio', par: 'Paradiso' };

export function run() {
  const cantos = JSON.parse(fs.readFileSync(SRC, 'utf8'));
  const ids = Object.keys(cantos).sort((a, b) => order(a) - order(b));
  if (ids.length !== 100) throw new Error(`Temple Dante: expected 100 cantos, found ${ids.length}`);
  const parts = ids.map((id) => {
    const c = cantos[id];
    const name = NAMES[id.slice(0, 3)];
    const n = Number(id.slice(4));
    return {
      id,
      label: `${name} ${n}`,
      group: name,
      blocks: c.paras.map((text) => ({ k: 'p', text })),
      meta: c.verified ? {} : { unverified: true },
    };
  });
  return writeText('dante-temple', {
    author: 'Dante Alighieri',
    title: 'The Divine Comedy',
    translator: 'John Aitken Carlyle, Thomas Okey and Philip H. Wicksteed',
    year: null, // the three volumes are of 1899–1901, but Carlyle's Inferno is of 1849; the note gives the printings
    verse: false,
    tercets: true,
    readAs: 'dante',
    brackets: true, // the Inferno's square brackets are the book's: its editor's alterations to Carlyle
    note: 'This text was read by machine from scans of the three Temple Classics volumes: the [*Inferno*](https://archive.org/details/inferno00dant_3) and the [*Purgatorio*](https://archive.org/details/purgatorioofdant00dant_0) in the printings of 1904, the [*Paradiso*](https://archive.org/details/paradisoofdantea00dant) in that of 1910. Each canto was then compared with machine readings of two or more other copies of the same translation. Where the copies disagreed, the reading was settled from the scan or, if the machine had plainly garbled the word, from the agreement of the other copies. In eight places the reading was taken from another printing of the same volume, because the printing this text follows has a fault there, such as a missing period. Twelve cantos were read through against the scans. The other cantos may still contain misread words. The volumes print the Italian opposite the English and give each canto a summary and notes. Only the English is taken from them here, so the Italian printed here comes from another source. In the *Inferno* the square brackets are the book’s. They mark the places where its editor, Hermann Oelsner, altered Carlyle’s translation.',
    source: { name: 'The Temple Classics (J. M. Dent, London)', url: 'https://archive.org/details/inferno00dant_3' },
  }, parts);
}

function order(id) {
  return { inf: 0, pur: 100, par: 200 }[id.slice(0, 3)] + Number(id.slice(4));
}
