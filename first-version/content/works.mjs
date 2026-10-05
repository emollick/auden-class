// The books on the list, in the order of the list.
// set:      the edition or translator the list names, if it names one
// texts:    the copies printed on this site
// copy:     a sentence for the reading list page, after the links
// find:     shown under the week's reading when the book, or the edition he set, is not printed here
// textNote: shown at the head of the copy printed here

const ia = (id) => `https://archive.org/details/${id}`;

export default [
  // ----- required reading -----
  {
    id: 'dante', kind: 'required', author: 'Dante', title: 'The Divine Comedy',
    set: 'Modern Library',
    texts: ['dante-temple', 'dante-longfellow', 'dante-italian'],
    textLabels: ['Carlyle, Okey and Wicksteed', 'Longfellow', 'Italian'],
    copy: 'The Modern Library volume reprinted the prose translation that J. M. Dent of London published in three volumes of its Temple Classics series (1899–1901): the *Inferno* by John Aitken Carlyle, the *Purgatorio* by Thomas Okey and the *Paradiso* by Philip Wicksteed. That translation is printed here, and it is the one Auden’s class learned by heart. The text is taken from the Temple volumes. This site found no scan of the Modern Library reprint that is free to read online, so it has not checked whether the reprint altered any wording. The *Inferno* is Carlyle’s translation in its second edition of 1867, with about two hundred alterations by the Temple editor, Hermann Oelsner, which are in square brackets. Longfellow’s verse translation and the Italian are printed alongside the prose translation.',
  },
  {
    id: 'agamemnon', kind: 'required', author: 'Aeschylus', title: 'Agamemnon', or: true,
    set: 'translated by Louis MacNeice',
    texts: ['agamemnon'],
    textLabels: ['Morshead'],
    copy: 'MacNeice’s translation of 1936 is in copyright. E. D. A. Morshead’s verse translation of 1881 is printed here.',
    find: `The list names Louis MacNeice’s translation of 1936, which is in copyright. The week’s test quotes the translation printed here, so you do not need MacNeice’s, though it can be [borrowed from the Internet Archive](${ia('agamemnonofaesch0000loui')}) with a free account.`,
  },
  {
    id: 'antigone', kind: 'required', author: 'Sophocles', title: 'Antigone',
    set: 'translated by Dudley Fitts and Robert Fitzgerald',
    texts: ['antigone'],
    textLabels: ['Storr'],
    copy: 'The Fitts and Fitzgerald translation of 1939 is in copyright. Francis Storr’s verse translation of 1912 is printed here.',
    find: `The list names the translation of 1939 by Dudley Fitts and Robert Fitzgerald, which is in copyright. The week’s test quotes the translation printed here, so you do not need Fitts and Fitzgerald’s, though it can be [borrowed from the Internet Archive](${ia('antigoneofsophoc0000dudl')}) with a free account.`,
  },
  {
    id: 'horace', kind: 'required', author: 'Horace', title: 'Odes',
    set: 'Loeb Classical Library',
    texts: ['horace', 'horace-la'],
    textLabels: ['Conington', 'Latin'],
    copy: 'The Loeb volume prints the Latin with C. E. Bennett’s prose translation of 1914 facing it. No proofread text of Bennett’s translation was found, so John Conington’s verse translation of 1863 is printed here with the Latin. Conington left out four odes (I.25, II.5, III.20 and IV.10), which are printed here in Latin only.',
  },
  {
    id: 'augustine', kind: 'required', author: 'Augustine', title: 'Confessions',
    set: 'Loeb Classical Library',
    texts: ['augustine'],
    textLabels: ['Pusey'],
    copy: 'The Loeb volumes print William Watts’s translation of 1631. No proofread text of it was found, so E. B. Pusey’s translation of 1838, which revises Watts, is printed here.',
  },
  {
    id: 'henry-iv-2', kind: 'required', author: 'Shakespeare', title: 'Henry IV, Part 2',
    texts: ['henry-iv-2'],
  },
  {
    id: 'othello', kind: 'required', author: 'Shakespeare', title: 'Othello',
    texts: ['othello'],
  },
  {
    id: 'hamlet', kind: 'required', author: 'Shakespeare', title: 'Hamlet',
    texts: ['hamlet'],
  },
  {
    id: 'tempest', kind: 'required', author: 'Shakespeare', title: 'The Tempest',
    texts: ['tempest'],
  },
  {
    id: 'volpone', kind: 'required', author: 'Ben Jonson', title: 'Volpone',
    texts: ['volpone'],
  },
  {
    id: 'pascal', kind: 'required', author: 'Pascal', title: 'Pensées',
    set: 'Everyman’s Library',
    texts: ['pascal'],
    textLabels: ['Trotter'],
    copy: 'The Everyman volume is W. F. Trotter’s translation of 1904, which is printed here without T. S. Eliot’s introduction of 1931.',
  },
  {
    id: 'phedre', kind: 'required', author: 'Racine', title: 'Phèdre',
    texts: ['phedre'],
    textLabels: ['Boswell'],
    copy: 'R. B. Boswell’s verse translation of 1890 is printed here, under the title *Phaedra*.',
  },
  {
    id: 'blake', kind: 'required', author: 'Blake', title: 'The Marriage of Heaven and Hell',
    texts: ['blake'],
  },
  {
    id: 'faust', kind: 'required', author: 'Goethe', title: 'Faust, Part I', omit: true,
    set: 'Everyman’s Library',
    texts: ['faust'],
    textLabels: ['Taylor'],
    copy: 'The Everyman volume is Albert Latham’s translation of 1908. No proofread text of it was found, so Bayard Taylor’s translation of 1870 is printed here.',
  },
  {
    id: 'kierkegaard', kind: 'required', author: 'Kierkegaard', title: 'Fear and Trembling',
    texts: ['kierkegaard'],
    textLabels: ['Hollander, selections'],
    copy: 'No complete translation is out of copyright. L. M. Hollander’s selection of 1923, about a third of the book, is printed here, but the week’s test and questions can be done from it.',
    find: `The text printed here is a selection, about a third of the book, but the week’s test and questions can be done from it. For the whole book, Walter Lowrie’s translation of 1941 can be [borrowed from the Internet Archive](${ia('feartremblingdia0000skie_r6e3')}) with a free account.`,
  },
  {
    id: 'baudelaire', kind: 'required', author: 'Baudelaire', title: 'Intimate Journals',
    set: 'Random House',
    texts: ['baudelaire'],
    textLabels: ['Shipley'],
    copy: 'The Random House volume of 1930 is Christopher Isherwood’s translation, with an introduction by T. S. Eliot. No free text of it was found, so Joseph Shipley’s translation of 1919 is printed here. Shipley calls the book *Intimate Papers* and its two journals *Rockets* and *My Heart Laid Bare*. He leaves out some pages of each, but no test or question depends on those pages.',
    find: `The list names the Random House edition of 1930, translated by Christopher Isherwood. The week’s test quotes the translation printed here, so you do not need Isherwood’s. A later edition of it (Marcel Rodd, 1947), which has an introduction by Auden, can be [borrowed from the Internet Archive](${ia('intimatejournals0000char_k2x1')}) with a free account.`,
  },
  {
    id: 'peer-gynt', kind: 'required', author: 'Ibsen', title: 'Peer Gynt',
    set: 'Everyman’s Library',
    texts: ['peer-gynt'],
    textLabels: ['Archer'],
    copy: 'The Everyman volume is R. Farquharson Sharp’s translation of 1921. No proofread text of it was found, so the translation by William and Charles Archer is printed here. It was first published in 1892, and the text is the one they revised in 1907.',
  },
  {
    id: 'karamazov', kind: 'required', author: 'Dostoevsky', title: 'The Brothers Karamazov',
    set: 'Modern Library',
    texts: ['karamazov'],
    textLabels: ['Garnett'],
    copy: 'The Modern Library volume is Constance Garnett’s translation of 1912, which is printed here.',
  },
  {
    id: 'rimbaud', kind: 'required', author: 'Rimbaud', title: 'Une Saison en Enfer',
    set: 'translated by Delmore Schwartz, New Directions',
    texts: ['rimbaud', 'rimbaud-fr'],
    textLabels: ['English of 1920', 'French'],
    copy: 'Schwartz’s translation of 1939 is in copyright. The translation printed here appeared unsigned in *The Dial*, an American magazine, in July 1920 under the title *A Season in Hell*. It is attributed to J. S. Watson, Jr., one of the magazine’s owners. In the chapter “Alchemy of the Word” Rimbaud quotes seven of his own poems, and the translation leaves them in French. The French text of 1873 is printed with it.',
  },
  {
    id: 'adams', kind: 'required', author: 'Henry Adams', title: 'The Education of Henry Adams', omit: true,
    set: 'Modern Library',
    texts: ['adams'],
  },
  {
    id: 'moby-dick', kind: 'required', author: 'Melville', title: 'Moby-Dick',
    set: 'Modern Library',
    texts: ['moby-dick'],
  },
  {
    id: 'rilke', kind: 'required', author: 'Rilke', title: 'The Journal of My Other Self',
    set: 'Norton',
    texts: ['rilke'],
    textLabels: ['Norton and Linton'],
    copy: 'The list names the edition that W. W. Norton published in 1930 under this title. Its translators were M. D. Herter Norton and John Linton, and their translation is printed here. The book is now called *The Notebooks of Malte Laurids Brigge*.',
  },
  {
    id: 'castle', kind: 'required', author: 'Kafka', title: 'The Castle',
    set: 'Knopf',
    texts: ['castle'],
    textLabels: ['Muir'],
    copy: 'The Knopf volume of 1930 is the translation by Willa and Edwin Muir, which is printed here.',
  },
  {
    id: 'family-reunion', kind: 'required', author: 'T. S. Eliot', title: 'The Family Reunion',
    set: 'Harcourt, Brace',
    copy: `In copyright in the United States until 2035, and so not printed here. It can be [borrowed from the Internet Archive](${ia('familyreunionpla00elio')}) with a free account.`,
    find: `This play is in copyright in the United States until 2035, and so is not printed here. Buy a copy or find one in a library. You can also [borrow it from the Internet Archive](${ia('familyreunionpla00elio')}) with a free account.`,
  },

  // ----- opera libretti -----
  // The list names no editions of the libretti. Most of those printed here are the English
  // versions from the two-language libretti that Fred Rullman of New York published.
  {
    id: 'orpheus', kind: 'opera', author: 'Gluck', title: 'Orpheus', texts: ['orpheus'],
    copy: 'The English version from Rullman’s Italian and English libretto, translated by Manfredo Maggioni. The libretto is headed *Orpheus and Eurydice*.',
  },
  {
    id: 'don-giovanni', kind: 'opera', author: 'Mozart', title: 'Don Giovanni', texts: ['don-giovanni'],
    copy: 'The English version from Rullman’s Italian and English libretto, which calls the opera *Don Juan*. It stops before the last scene of the opera, but no test or question depends on that scene.',
  },
  {
    id: 'magic-flute', kind: 'opera', author: 'Mozart', title: 'The Magic Flute', texts: ['magic-flute'],
    copy: 'The English version from Rullman’s Italian and English libretto. It follows the Italian version of the opera, in which the spoken scenes of the German original are cut or sung.',
  },
  {
    id: 'fidelio', kind: 'opera', author: 'Beethoven', title: 'Fidelio', texts: ['fidelio'],
    copy: 'The English version from Rullman’s German and English libretto.',
  },
  {
    id: 'dutchman', kind: 'opera', author: 'Wagner', title: 'The Flying Dutchman', texts: ['dutchman'],
    copy: 'The English version from Rullman’s German and English libretto.',
  },
  {
    id: 'tristan', kind: 'opera', author: 'Wagner', title: 'Tristan und Isolde', texts: ['tristan'],
    copy: 'The English version by H. and F. Corder, from the libretto published by Oliver Ditson of Boston, which does not credit them. The libretto is headed *Tristan and Isolda*.',
  },
  {
    id: 'gotterdammerung', kind: 'opera', author: 'Wagner', title: 'Götterdämmerung', texts: ['gotterdammerung'],
    copy: 'Margaret Armour’s translation of 1911, *The Twilight of the Gods*.',
  },
  {
    id: 'carmen', kind: 'opera', author: 'Bizet', title: 'Carmen', texts: ['carmen'],
    copy: 'The English version from Rullman’s French and English libretto of about 1910. It follows the version of the opera in which the scenes that were spoken at the first performance are sung.',
  },
  {
    id: 'traviata', kind: 'opera', author: 'Verdi', title: 'La Traviata', texts: ['traviata'],
    copy: 'The English version from Rullman’s Italian and English libretto, which calls the opera *The Lost One*.',
  },

  // ----- recommended critical reading: the first sheet -----
  { id: 'benedict', kind: 'critical', author: 'Ruth Benedict', title: 'Patterns of Culture', copy: '1934. In copyright.' },
  { id: 'mead', kind: 'critical', author: 'Margaret Mead', title: 'From the South Seas', copy: '1939. Three earlier books in one volume; in copyright in part.' },
  { id: 'lynd', kind: 'critical', author: 'Robert and Helen Lynd', title: 'Middletown', copy: '1929. Out of copyright. [Internet Archive](https://archive.org/details/middletownstudyi00lyndrich).' },
  { id: 'chadwick', kind: 'critical', author: 'H. M. Chadwick', title: 'The Heroic Age', copy: '1912. Out of copyright. [Project Gutenberg](https://www.gutenberg.org/ebooks/48426).' },
  { id: 'ker', kind: 'critical', author: 'W. P. Ker', title: 'Epic and Romance', copy: '1897. Out of copyright. [Project Gutenberg](https://www.gutenberg.org/ebooks/20406).' },
  { id: 'crossman', kind: 'critical', author: 'R. H. S. Crossman', title: 'Plato To-day', copy: '1937. In copyright.' },
  { id: 'cochrane', kind: 'critical', author: 'C. N. Cochrane', title: 'Christianity and Classical Culture', copy: '1940. In copyright.' },
  { id: 'lewis', kind: 'critical', author: 'C. S. Lewis', title: 'The Allegory of Love', copy: '1936. In copyright.' },
  // ----- the second sheet, as Charles Miller prints it -----
  { id: 'wicksteed', kind: 'critical', author: 'Philip Wicksteed', title: 'Dante and Aquinas', copy: '1913. Out of copyright. [Internet Archive](https://archive.org/details/danteaquinas0000phil).' },
  { id: 'wyndham-lewis', kind: 'critical', author: 'Wyndham Lewis', title: 'The Lion and the Fox', copy: '1927. Out of copyright. [Internet Archive](https://archive.org/details/lionfoxroleofher0000wynd).' },
  { id: 'eliot-essays', kind: 'critical', author: 'T. S. Eliot', title: 'Selected Essays', copy: '1932. In copyright.' },
  { id: 'nietzsche', kind: 'critical', author: 'Nietzsche', title: 'The Case of Wagner', copy: '1888. Anthony M. Ludovici’s English translation, in its third edition of 1911, is at [Project Gutenberg](https://www.gutenberg.org/ebooks/25012).' },
  { id: 'mann', kind: 'critical', author: 'Thomas Mann', title: 'Past Masters', copy: '1933. No free copy was found.' },
  { id: 'empson', kind: 'critical', author: 'William Empson', title: 'English Pastoral Poetry', copy: '1938. The American title of *Some Versions of Pastoral*. In copyright.' },
  { id: 'valery', kind: 'critical', author: 'Paul Valéry', title: 'Variété, I, II and IV', copy: '1924 to 1938. In French. The first volume is at [Project Gutenberg](https://www.gutenberg.org/ebooks/65224) and the second at the [Internet Archive](https://archive.org/details/varieteii0000paul). The fourth, of 1938, is in copyright.' },
  { id: 'james', kind: 'critical', author: 'Henry James', title: 'The Art of the Novel', copy: '1934. The prefaces James wrote for the New York edition of his novels, collected with an introduction that is in copyright.' },
  { id: 'rougemont', kind: 'critical', author: 'Denis de Rougemont', title: 'Love in the Western World', copy: '1940. In copyright.' },
  { id: 'lawrence', kind: 'critical', author: 'D. H. Lawrence', title: 'Studies in Classic American Literature', copy: '1923. Out of copyright. [Project Gutenberg](https://www.gutenberg.org/ebooks/60547).' },
];
