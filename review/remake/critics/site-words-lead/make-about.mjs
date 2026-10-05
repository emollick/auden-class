// Writes content/about.mjs as a file that stands on its own (it used to take
// six sections from the first version's content/pages.mjs), with the changes
// the lead made after the site critic by word. Run once, on 3 October 2026.
import fs from 'node:fs';
const about = (await import('../../../../content/about.mjs')).default;
const S = Object.fromEntries(about.sections.map((s) => [s.h, s]));
const need = (s, old, neu) => { if (s.split(old).length !== 2) throw new Error(`not once: ${old.slice(0, 60)}`); return s.replace(old, neu); };

const lede = need(need(about.lede,
  'opens each at a passage or two, and draws on the lines how the passage is made. What Auden said about the work stands at the head of each.',
  'opens each at three passages, and draws on the lines how each passage is made. What Auden said about a work stands at the head of its page.'),
  ' The site was made by Claude, an AI system, and no Auden scholar has checked it.', '');

const who = S['Who made this'];
const method = S['Where the method comes from'];
method.paras[0] = need(method.paras[0], 'about how poems are read and how poets should be taught.', 'about how he read a poem and how he would have poets taught.');
method.paras[2] = need(method.paras[2],
  'Its students would learn thousands of lines of poetry by heart. Its library would hold no criticism, and the only critical exercise would be parody. Three courses would be required of everyone: prosody, rhetoric and comparative philology (p. 77). The three subjects of the front page are those three.',
  'Its students would learn poetry by heart, thousands of lines of it. Its library would hold no criticism, and parody would be the one exercise in criticism. Everyone would have to take prosody, rhetoric and comparative philology (p. 77). They are the three headings of the front page.');
method.paras[3] = need(method.paras[3], 'This site does the same for a few words of each passage.', 'This site does a small part of that. For a few words of the passages it shows, it gives what the word meant when the line was written.');

const made = S['How a page is made'];
made.paras[0] = need(need(made.paras[0],
  'Each piece begins with what Auden said about the work, in this site’s words, with the book and the page.',
  'Each page begins with what Auden said about the work: most often a sentence of his own, then an account in this site’s words, with the book and the page.'),
  'Where he left nothing on a work, the piece says so.', 'On one work, Gluck’s *Orpheus*, no account by him was found, and its page says so.');
made.paras[1] = need(made.paras[1], 'Some pieces add a drawing', 'Some pages add a drawing');
made.paras[2] = need(made.paras[2], 'At the foot of each piece, “What each caption stands on” lists them, and', 'At the foot of each page, “What each caption stands on” gives the ground of each caption, and');
made.paras[3] = need(need(made.paras[3], 'Scansion is partly a matter of ear.', 'Marking the beats of a line is partly a matter of ear.'), 'can honestly be heard', 'can be heard');
made.paras[4] = 'Each reading was made in five passes. The first chose the passages and wrote the reading. The second checked the marks, the glosses and the page numbers against the sources and cut what it could not find. The third set the reading on the page and made the drawing, where there is one. The fourth read each sentence and took out what did not help a reader. The fifth settled what the fourth had left open. A last reading went across all the pages together. Mistakes will remain.';

const record = S['On the record'];
record.h = 'What is known of the course';
const rows = record.table.rows;
rows[6][1] = need(rows[6][1], 'Search results quote Chapman as giving an enrollment of twenty-two', 'Summaries returned by a web search have Chapman giving an enrollment of twenty-two');
rows[7][1] = need(rows[7][1],
  'Pearce, Miller and Chapman each give a different reason, and Carpenter repeats Chapman’s. In Miller’s account, Auden said the class would be quizzed on what they thought about the books and not on what he said.',
  'In Miller’s account, Auden said the class would be quizzed on what they thought about the books and not on what he said. Pearce and Chapman give other reasons, and Carpenter repeats Chapman’s.');
record.after[0] = need(record.after[0], 'were worked out from scanned copies and search results, so', 'were worked out from scanned copies and from the summaries a search returns, so');

const exam = S['The examination: five accounts'];
exam.paras[0] = need(need(exam.paras[0],
  'Donald Pearce wrote the fullest account of the course more than forty years later',
  'Donald Pearce wrote about the course at length more than forty years later'),
  'The cantos began with *Inferno* III and V, continued with some from the *Purgatorio* (Pearce names only XXVIII) and ended with *Paradiso* XXXIII.',
  'The cantos began with *Inferno* 3 and 5, continued with some from the *Purgatorio* (Pearce names only canto 28) and ended with *Paradiso* 33.');

const six = S['Six thousand pages'];
six.paras[1] = need(six.paras[1], 'and it counts only the third of *Fear and Trembling* that is.', 'and of *Fear and Trembling* it counts only the third that is printed.');

const books = S['The books'];
books.paras[0] = need(need(books.paras[0],
  'or no proofread text of it could be found, another translation is printed',
  'or no text of it could be found that had been checked against the printed book, another translation is printed'),
  'and its piece shows how the play is built', 'and its page shows how the play is built');
{
  const p = books.paras[3];
  const a = p.indexOf('Each canto of the prose Dante was compared');
  const z = p.indexOf('Misread words may remain');
  if (a < 0 || z < 0) throw new Error('the paragraph on the nine texts has changed');
  books.paras[3] = `${p.slice(0, a)}The prose Dante was compared canto by canto with other copies of the same translation, and twelve of its cantos were then read through against the scans. Its contents page says how. Misread words may remain in any of the nine texts, and each says so at its head.`;
}
books.paras[4] = 'Where a passage is shown in the language it was written in, that text also comes from an edition in the public domain, which the page names among its sources.';

const records = S['The records'];
records.paras[0] = need(records.paras[0],
  'and each names the transfer it was taken from. The files are those transfers made over as single-channel MP3s of modest size, and nothing else was done to the sound.',
  'and each names the transfer, the copy made from the disc, that it was taken from. The files are those transfers, brought down to one channel and a small size, and nothing else was done to the sound.');

const cited = S['Works cited'];
cited.sources = cited.sources.filter((e) => !e.startsWith('Swarthmore College Libraries'));
{
  const i = cited.sources.findIndex((e) => e.startsWith('Alan Jacobs'));
  cited.sources[i] = need(cited.sources[i], '[“Auden’s Syllabus”](https://blog.ayjay.org/audensyllabus/), October 1, 2012.', '[“Auden’s Syllabus,”](https://blog.ayjay.org/audensyllabus/) October 1, 2012.');
}
cited.after = ['Each page lists its own sources as well: the edition of its text, the dictionaries behind its glosses, and the places in Auden’s books that it reports.'];

const sections = [
  { h: who.h, paras: [who.paras[0]] },
  method, made, record, exam, S['The order of the books'], six, books, records, cited,
  { h: 'The type', paras: [who.paras[1]] },
];
const citedBy = about.citedBy.filter(([start]) => start !== 'Swarthmore College Libraries');

const q = (s) => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const list = (xs, pad) => `[\n${xs.map((x) => `${pad}  ${q(x)},`).join('\n')}\n${pad}]`;
let out = `// The about page: who made the site, where its method comes from, how a page
// is made, what is known of the course, the books, the records and the works
// cited. *x* is italic and [x](url) a link. {pages} is filled in by
// build/shelf.mjs with the count of the shelf.
//
// Until 3 October 2026 six of these sections were taken from the first
// version's content/pages.mjs; they are written out here now, so that this
// file stands on its own.

// Which words show that an entry of "Works cited" is still cited somewhere on
// the site. The build drops an entry that nothing cites.
const citedBy = [
${citedBy.map(([a, b]) => `  [${q(a)}, [${b.map(q).join(', ')}]],`).join('\n')}
];

export default {
  citedBy,
  kicker: ${q(about.kicker)},
  title: ${q(about.title)},
  lede: ${q(lede)},
  sections: [
`;
for (const s of sections) {
  out += `    {\n      h: ${q(s.h)},\n`;
  if (s.paras) out += `      paras: ${list(s.paras, '      ')},\n`;
  if (s.table) out += `      table: {\n        head: [${s.table.head.map(q).join(', ')}],\n        rows: [\n${s.table.rows.map((r) => `          [${r.map(q).join(', ')}],`).join('\n')}\n        ],\n      },\n`;
  if (s.sources) out += `      sources: ${list(s.sources, '      ')},\n`;
  if (s.after) out += `      after: ${list(s.after, '      ')},\n`;
  out += '    },\n';
}
out += '  ],\n};\n';
fs.writeFileSync(new URL('./about.mjs.new', import.meta.url), out);
console.log(`${sections.length} sections, ${out.length} characters`);
