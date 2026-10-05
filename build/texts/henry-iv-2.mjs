import { fetchText, gutenbergBody, writeText } from '../lib/gutenberg.mjs';
import { cutPlay, expectShape } from './plays/pg-shakespeare.mjs';

// Every speaker's name as the source prints it, without the full stop.
const SPEAKERS = [
  'ARCHBISHOP', 'BARDOLPH', 'BULLCALF', 'CHIEF JUSTICE', 'CLARENCE', 'COLEVILE', 'DAVY', 'DOLL', 'FALSTAFF',
  'FANG', 'FEEBLE', 'FIRST BEADLE', 'FIRST DRAWER', 'FIRST GROOM', 'GLOUCESTER', 'GLOUCESTER & CLARENCE',
  'GOWER', 'HARCOURT', 'HASTINGS', 'HOSTESS', 'KING', 'LADY NORTHUMBERLAND', 'LADY PERCY', 'LANCASTER',
  'LORD BARDOLPH', 'MESSENGER', 'MORTON', 'MOULDY', 'MOWBRAY', 'NORTHUMBERLAND', 'PAGE', 'PETO', 'PISTOL',
  'POINS', 'PORTER', 'PRINCE', 'PRINCE & POINS', 'PRINCES', 'RUMOUR', 'SECOND DRAWER', 'SECOND GROOM',
  'SERVANT', 'SHADOW', 'SHALLOW', 'SILENCE', 'SNARE', 'TRAVERS', 'WART', 'WARWICK', 'WESTMORELAND',
];

// Stage directions printed without brackets that do not begin "Enter".
// The first is the place line of the Induction.
const DIRECTIONS = [
  /^Warkworth\. Before the castle\.$/,
  /^The Porter opens the gate\.$/,
  /^Alarum\. Excursions\. Enter /,
  /^The King lying on a bed\. /,
  /^Trumpets sound, and the King and his train pass over the stage\. /,
];

export function build(more = {}) {
  const body = gutenbergBody(fetchText('pg1518_henry_iv_2.txt', 'https://www.gutenberg.org/cache/epub/1518/pg1518.txt'));
  const { parts, report } = cutPlay({
    body,
    speakers: SPEAKERS,
    directions: DIRECTIONS,
    induction: true,
    epilogue: true,
    unspoken: ['epilogue'], // the source prints the Epilogue with no speaker's name over it
    ...more,
  });
  expectShape('Henry IV, Part 2', parts, [3, 4, 2, 5, 5], ['induction'], ['epilogue']);
  return { parts, report };
}

export function run() {
  const { parts } = build();
  return writeText('henry-iv-2', {
    author: 'William Shakespeare',
    title: 'Henry IV, Part 2',
    translator: null,
    year: 1600, // first printed (the quarto)
    verse: false,
    source: { name: 'Project Gutenberg, no. 1518', url: 'https://www.gutenberg.org/ebooks/1518' },
  }, parts);
}
