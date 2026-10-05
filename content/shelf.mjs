// The words of the shelf: the 1941 reading list, and the books printed here.
// The list itself (authors, titles, editions, what is printed) is in works.mjs.
// *x* is italic and [x](url) a link.

const jacobs = 'https://blog.ayjay.org/audensyllabus/';

export default {
  kicker: 'English 135',
  title: 'The shelf',
  where: 'Auden’s reading list of 1941, and the books to read here',
  intro: [
    `A mimeographed reading list survives from the course. The standard bibliography of Auden, by Bloomfield and Mendelson, describes it as two sheets. Alan Jacobs, a scholar of Auden, published a picture of the first sheet in 2012 with the permission of Auden’s estate, and [it can be seen on his site](${jacobs}).`,
    'The list is headed English 135, Fate and the Individual in European Literature. Under the title it gives the particulars: first semester, two hours of credit, Thursdays from four to six in 2215 Angell Hall, open to juniors, seniors and graduate students who have the written permission of Professor Arno Bader. The instructor’s name is typed as “W. Auden.” The list carries no year, and Bloomfield and Mendelson put it in the fall semester of 1941.',
  ],
  case: {
    label: 'The required books and the libretti as spines, each as thick as its book is long',
    note: 'Each spine is as thick as its book is long in the copy printed here, at 350 words or 35 lines of verse to the page. The number on a spine is its pages by that count. The short spines are the opera libretti. Together the copies come to about {pages} pages. A spine opens its book.',
    absent: 'not printed here',
    keys: { omit: 'Marked “Omit” on the list', absent: 'Not printed here, and not drawn to scale' },
  },
  kinds: {
    required: {
      title: 'Required reading',
      intro: [
        'The list has twenty-three entries of required reading. One entry offers a choice between *Agamemnon* and *Antigone*. On the published sheet someone has written “Omit” by hand beside two others, *Faust* and *The Education of Henry Adams*. Who wrote it is not recorded. That makes twenty-four works, and each has a page on this site.',
      ],
    },
    opera: {
      title: 'Opera libretti',
      intro: [
        'The list assigns nine opera libretti as reading. Donald Pearce, who took the course, remembers that Auden brought a phonograph and records to class.',
        'The list names no editions of the libretti. Most of the texts printed here are the English versions from the bilingual libretti that Fred Rullman of New York published. Where an entry names no translator, the libretto names none. With each opera there is one old record, made between 1909 and 1924.',
      ],
    },
    critical: {
      title: 'Recommended criticism',
      intro: [
        'The list recommends eighteen books of criticism. None of them is printed here. Where one is out of copyright in the United States and this site found a free copy online, the entry links to it.',
        'The first sheet ends after the eighth of them, so the published picture shows only those eight. The other ten are known from Charles Miller, who took the course and prints the list in his memoir. The list gets three of the authors’ names wrong, and Miller’s copy has slips of its own. This site corrects both kinds of error.',
      ],
    },
  },
  labels: {
    set: 'The list names',
    here: 'Printed here',
    text: 'The text',
    absent: 'Not printed here',
    piece: 'Its page',
    pieces: 'Its pages',
    or: 'or',
    omit: 'marked “Omit” on the list',
    borrow: 'The translation the list names can be [borrowed from the Internet Archive]({url}) with a free account.',
    pages: 'about {n} pages',
    record: 'A record',
  },
  // the reader
  read: {
    contents: 'Contents',
    versions: 'Versions here',
    translated: 'Translated by {who}, {year}',
    translatedUndated: 'Translated by {who}',
    source: 'The text is from {name}.',
    unverified: 'This part was read by machine from a scan and has not been read through against it. Misread words may remain.',
    back: 'The shelf',
    piece: 'Drawn on “{piece}”',
    here: 'This passage is drawn on the page “{piece}.”',
    prev: 'Previous',
    next: 'Next',
    missing: 'There is no such book or part on this shelf.',
    failed: 'The book could not be loaded. Try again in a moment.',
  },
};
