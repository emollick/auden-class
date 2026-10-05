import { fetchText, gutenbergBody, writeText } from '../lib/gutenberg.mjs';
import { cutPlay, expectShape } from './plays/pg-shakespeare.mjs';

// Every speaker's name as the source prints it, without the full stop.
// "ARIEL’S SONG" stands where a speaker's name would, over the first song.
const SPEAKERS = [
  'ADRIAN', 'ALONSO', 'ANTONIO', 'ARIEL', 'ARIEL’S SONG', 'BOATSWAIN', 'CALIBAN', 'CERES', 'FERDINAND',
  'FERDINAND, MIRANDA', 'FRANCISCO', 'GONZALO', 'IRIS', 'JUNO', 'MARINERS', 'MASTER', 'MIRANDA',
  'PROSPERO', 'SEBASTIAN', 'STEPHANO', 'TRINCULO',
];

// Stage directions printed without brackets that do not begin "Enter".
const DIRECTIONS = [
  /^Music\. Re-enter Ariel, invisible\.$/,
  /^Solemn and strange music: and Prospero above, invisible\. Enter /,
  /^Thunder and lightning\. Enter Ariel like a Harpy/,
  /^A Masque\. Enter Iris\.$/,
  /^Prospero and Ariel remain invisible\. Enter /,
  /^A noise of hunters heard\. Enter /,
  /^Ariel re-enters, singing, and helps to attire Prospero\.$/,
  /^Here Prospero discovers Ferdinand and Miranda playing at chess\.$/,
];

// The cries from the sinking ship, which the source gives to no speaker.
const NOISES = [/^_A confused noise within: _/];

// Two directions the source prints without brackets in the middle of a
// song. Bracketed here so that they are read as directions.
const FIXES = [
  ['    Burden dispersedly. _Bow-wow.', '    [Burden dispersedly.] _Bow-wow.'],
  ['    Burden: _Ding-dong.', '    [Burden:] _Ding-dong.'],
];

export function build(more = {}) {
  const body = gutenbergBody(fetchText('pg1540_tempest.txt', 'https://www.gutenberg.org/cache/epub/1540/pg1540.txt'));
  const { parts, report } = cutPlay({ body, speakers: SPEAKERS, directions: DIRECTIONS, noises: NOISES, fixes: FIXES, epilogue: true, ...more });
  expectShape('The Tempest', parts, [2, 2, 3, 1, 1], [], ['epilogue']);
  return { parts, report };
}

export function run() {
  const { parts } = build();
  return writeText('tempest', {
    author: 'William Shakespeare',
    title: 'The Tempest',
    translator: null,
    year: 1611, // first recorded performance (printed 1623)
    verse: false,
    source: { name: 'Project Gutenberg, no. 1540', url: 'https://www.gutenberg.org/ebooks/1540' },
  }, parts);
}
