import { fetchText, gutenbergBody, writeText } from '../lib/gutenberg.mjs';
import { cutPlay, expectShape } from './plays/pg-shakespeare.mjs';

// Every speaker's name as the source prints it, without the full stop.
const SPEAKERS = [
  'ALL', 'BIANCA', 'BRABANTIO', 'CASSIO', 'CLOWN', 'DESDEMONA', 'DUKE', 'DUKE and SENATORS', 'EMILIA',
  'FIRST GENTLEMAN', 'FIRST MUSICIAN', 'FIRST SENATOR', 'GENTLEMEN', 'GRATIANO', 'HERALD', 'IAGO',
  'LODOVICO', 'MESSENGER', 'MONTANO', 'OFFICER', 'OTHELLO', 'RODERIGO', 'SAILOR', 'SECOND GENTLEMAN',
  'SECOND SENATOR', 'THIRD GENTLEMAN',
];

// Stage directions printed without brackets that do not begin "Enter".
const DIRECTIONS = [
  /^Brabantio appears above at a window\.$/,
  /^The Duke and Senators sitting at a table; Officers attending\.$/,
  /^Desdemona in bed asleep; a light burning\.$/,
];

// Cries from off the stage that the source gives to no speaker.
const NOISES = [
  /^\[_Within\._\] A sail, a sail, a sail!$/,
  /^\[_Within\._\] A sail, a sail!$/,
];

export function build(more = {}) {
  const body = gutenbergBody(fetchText('pg1531_othello.txt', 'https://www.gutenberg.org/cache/epub/1531/pg1531.txt'));
  const { parts, report } = cutPlay({ body, speakers: SPEAKERS, directions: DIRECTIONS, noises: NOISES, ...more });
  expectShape('Othello', parts, [3, 3, 4, 3, 2]);
  return { parts, report };
}

export function run() {
  const { parts } = build();
  return writeText('othello', {
    author: 'William Shakespeare',
    title: 'Othello',
    translator: null,
    year: 1604, // first recorded performance (printed 1622)
    verse: false,
    source: { name: 'Project Gutenberg, no. 1531', url: 'https://www.gutenberg.org/ebooks/1531' },
  }, parts);
}
