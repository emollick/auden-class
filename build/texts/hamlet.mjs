import { fetchText, gutenbergBody, writeText } from '../lib/gutenberg.mjs';
import { cutPlay, expectShape } from './plays/pg-shakespeare.mjs';

// Every speaker's name as the source prints it (it is not consistent
// about capitals), without the full stop.
const SPEAKERS = [
  'ALL', 'All', 'BARNARDO', 'BOTH', 'Both', 'CAPTAIN', 'CORNELIUS and VOLTEMAND', 'DANES', 'Danes',
  'FIRST AMBASSADOR', 'FIRST CLOWN', 'FIRST PLAYER', 'FIRST SAILOR', 'FORTINBRAS', 'FRANCISCO',
  'GENTLEMAN', 'GHOST', 'GUILDENSTERN', 'HAMLET', 'HORATIO', 'HORATIO and MARCELLUS', 'KING',
  'LAERTES', 'LORD', 'LUCIANUS', 'MARCELLUS', 'MARCELLUS and BARNARDO', 'MESSENGER', 'OPHELIA',
  'OSRIC', 'OSRIC and LORDS', 'PLAYER KING', 'PLAYER QUEEN', 'POLONIUS', 'PRIEST', 'PROLOGUE',
  'QUEEN', 'REYNALDO', 'ROSENCRANTZ', 'ROSENCRANTZ and GUILDENSTERN', 'SECOND CLOWN', 'SERVANT',
  'VOLTEMAND',
];

// Stage directions printed without brackets that do not begin "Enter".
// The third is the dumb show, a paragraph in italics.
const DIRECTIONS = [
  /^Danish march\. A flourish\. Enter /,
  /^Trumpets sound\. The dumb show enters\.$/,
  /^_Enter a King and a Queen very lovingly; /,
  /^The King rises and advances\.$/,
];

export function build(more = {}) {
  const body = gutenbergBody(fetchText('pg1524_hamlet.txt', 'https://www.gutenberg.org/cache/epub/1524/pg1524.txt'));
  const { parts, report } = cutPlay({ body, speakers: SPEAKERS, directions: DIRECTIONS, ...more });
  expectShape('Hamlet', parts, [5, 2, 4, 7, 2]);
  return { parts, report };
}

export function run() {
  const { parts } = build();
  return writeText('hamlet', {
    author: 'William Shakespeare',
    title: 'Hamlet',
    translator: null,
    year: 1603, // first printed (the first quarto)
    verse: false,
    source: { name: 'Project Gutenberg, no. 1524', url: 'https://www.gutenberg.org/ebooks/1524' },
  }, parts);
}
