// Week 1. Dante: Inferno, Purgatorio.

const L = 'dante-longfellow';

export default {
  n: 1,
  title: 'Hell and Purgatory',
  sub: 'Dante: *Inferno*, *Purgatorio*',
  intro: [
    'Auden’s reading list begins with Dante’s *Divine Comedy*, an Italian poem finished about 1320, and the final examination is on that poem. This week read the first two of its three parts, the *Inferno* and the *Purgatorio*, which make sixty-seven cantos. Read them in the prose translation by Carlyle, Okey and Wicksteed, which Auden assigned, or in the verse translation of 1867 by the American poet Longfellow.',
    'Start learning *Inferno* III by heart on the first day. Before you do, [choose your version](#/cantos) (the prose translation, Longfellow’s verse or the Italian), because work done in one version does not count toward another. The whole canto is due at the end of week 3.',
    'Gluck’s opera *Orpheus* is also assigned this week.',
  ],

  reading: [
    { work: 'dante', text: 'dante-temple', from: 'inf-01', to: 'pur-33', by: 'group' },
    {
      work: 'orpheus', text: 'orpheus', by: 'whole', label: 'The libretto',
      paras: [
        'This is the first of the nine operas that the list assigns as reading. The libretto is thirteen pages, and the opera lasts about an hour and a half. You may listen to either of the two versions Gluck made, the Italian (*Orfeo ed Euridice*) or the French (*Orphée et Eurydice*). Recordings of both are in three acts. The libretto printed here is in four, and its second and third acts make up the second act of a recording.',
        'Orpheus goes down among the dead while he is still alive, as Dante does this week. While you listen, notice the condition Orpheus is given and what makes him break it.',
        'The words are by Ranieri de’ Calzabigi. The Italian version was first performed in Vienna in October 1762, and the French version, which is longer, was made for Paris in 1774.',
      ],
      auden: {
        title: 'What Auden wrote about opera',
        paras: [
          'Auden names Gluck’s *Orpheus* in two pieces of 1948, an article for *Vogue* and the introduction to a book of Greek writers, both times as the point where a period starts. Nothing more by him about the opera has been found. The introduction, “The Greeks and Us,” says that Athenian drama, in its seventy-five or so years, is outdone by “the golden age of European opera” as a period of continuous work in a single art. It counts that age as the hundred and twenty-five years from Gluck’s *Orpheus* to Verdi’s *Otello*, and the *Vogue* article gives the years, 1762 and 1887. All nine operas on the list were first performed within those years.',
          '“Notes on Music and Opera” is an essay in Auden’s book *The Dyer’s Hand* (1962). It dates opera’s great years from Mozart to Verdi (the introduction of 1948 began them with Gluck) and says that liberal humanism was at its height in the same years, when people believed without question in freedom and progress. Auden suggests that if good operas are rarer in his own time, the cause may be that people have learned they are not as free as the humanists supposed and have come to doubt whether being free makes people good. But opera would become impossible only if people stopped believing in free will and personality altogether. “Every high C accurately struck demolishes the theory that we are the irresponsible puppets of fate or chance.”',
        ],
        sources: [
          '“The Greeks and Us,” in *Forewords and Afterwords*, p. 8.',
          '“Opera Addict,” written for *Vogue* in 1948, in *Prose, Volume II*, pp. 400–402.',
          '“Notes on Music and Opera,” in *The Dyer’s Hand*, p. 474.',
        ],
      },
    },
  ],

  words: {
    id: 'w01',
    cut: [L, 'inf-26', 35, 47, { dropClose: true }],
    blank: [
      [0, 'old'],
      [11, 'unpeopled'],
      [12, 'seed'],
      [13, 'brutes'],
      [15, 'eager'],
      [19, 'wings'],
      [19, 'mad'],
      [30, 'weeping'],
      [35, 'Another'],
    ],
    setting: 'Ulysses, who is Homer’s Odysseus under his Latin name, is in Hell and tells how he died. He and his crew have come to the Strait of Gibraltar, where Hercules set up his pillars to mark the end of the world.',
    cite: 'Dante, *Inferno* XXVI, lines 106 to 142, in Longfellow’s translation of 1867.',
    after: [
      'Auden wrote about this passage in *The Enchafèd Flood* (1950), which prints three lectures he gave in 1949 on the sea in the Romantic writing of the late eighteenth and nineteenth centuries. He says that Dante’s Ulysses behaves like the sea-going hero the Romantic writers admired, and that the Victorian poet Tennyson made him one in his poem “Ulysses” (1842). But to Dante, Auden adds, the voyage was the sin of Adam, and the speech to the crew echoes what the Serpent said to Eve.',
      '*The Enchafèd Flood*, p. 10.',
    ],
  },

  test: {
    items: [
      { id: 't01-1', kind: 'spot', work: 'dante', cut: [L, 'inf-10', 11], ask: 'Who is he?', speaker: ['Farinata', 'Farinata degli Uberti'] },
      { id: 't01-2', kind: 'fact', q: 'Who ferries the dead across Acheron?', a: ['Charon'], where: '*Inferno* III' },
      { id: 't01-3', kind: 'spot', work: 'dante', cut: [L, 'inf-13', 11, 12], ask: 'How did these souls die? Answer in a few words.', speaker: ['suicide', 'suicides', 'killed themselves', 'by their own hands', 'by their own hand', 'took their own lives', 'self-murder', 'by killing themselves', 'took their own life', 'they killed themselves', 'by suicide'], speakerShown: 'They killed themselves' },
      { id: 't01-4', kind: 'fact', q: 'Who assigns each of the damned a circle?', a: ['Minos'], where: '*Inferno* V' },
      { id: 't01-5', kind: 'spot', work: 'dante', cut: [L, 'inf-15', 40, 41], ask: 'Who is he?', speaker: ['Brunetto Latini', 'Brunetto', 'Ser Brunetto', 'Latini'] },
      { id: 't01-6', kind: 'fact', q: 'On whose back do Dante and Virgil go down to the eighth circle?', a: ['Geryon'], where: '*Inferno* XVII' },
      { id: 't01-7', kind: 'spot', work: 'dante', cut: [L, 'inf-33', 23, 24], ask: 'Who speaks?', speaker: ['Ugolino', 'Count Ugolino'] },
      { id: 't01-8', kind: 'fact', q: 'One of Satan’s three mouths holds Judas. Name one of the other two men.', a: ['Brutus', 'Cassius'], shown: 'Brutus and Cassius', where: '*Inferno* XXXIV' },
      { id: 't01-9', kind: 'spot', work: 'dante', cut: [L, 'pur-03', 35, 36], ask: 'Who is he?', speaker: ['Manfred', 'Manfredi'] },
      { id: 't01-10', kind: 'fact', q: 'What letter does the angel at the gate cut seven times on Dante’s forehead?', a: ['P'], where: '*Purgatorio* IX' },
      { id: 't01-11', kind: 'spot', work: 'dante', cut: [L, 'pur-16', 22, 23], ask: 'Who speaks?', speaker: ['Marco Lombardo', 'Marco', 'Mark the Lombard', 'Marco the Lombard'] },
      { id: 't01-12', kind: 'fact', q: 'Which Roman poet joins Dante and Virgil on the upper terraces of the mountain?', a: ['Statius'], where: '*Purgatorio* XXI' },
      { id: 't01-13', kind: 'spot', work: 'dante', cut: [L, 'pur-27', 46, 47], ask: 'Who speaks?', speaker: ['Virgil', 'Vergil', 'Virgilius'] },
      { id: 't01-14', kind: 'fact', q: 'In which river is Dante plunged before he crosses to Beatrice?', a: ['Lethe'], where: '*Purgatorio* XXXI; the river is named in XXVIII' },
    ],
  },

  questions: [
    {
      id: 'q01a',
      text: 'No one in Dante’s Hell asks to be let out. Why not?',
      gloss: ['Begin with the crowd on the bank of Acheron at the end of Canto III, and with what Virgil says of them.'],
      auden: {
        paras: [
          'No essay by Auden on the *Comedy* itself has been found, but he touches on this question in his introduction to a selection from Søren Kierkegaard that was published in 1952. Kierkegaard is the Danish religious writer whose *Fear and Trembling* is assigned in week 6.',
          'According to the Kierkegaard introduction, the relation of each creature to the God of the Bible cannot be broken. Auden says that people may try to put the relation out of their minds but do not get rid of it by doing so; they still feel it, as guilt and despair. On this view the wrath of God does not describe a feeling in God but the way God appears to anyone who distorts or denies that relation.',
          'Auden says that this is why Dante could write over the gate that Hell was made by Power, Wisdom and Love. He adds that the English writer Walter Savage Landor was right to remark that the people in the *Inferno* do not want to get out. Auden does not say how the remark follows from the rest. As this site reads the passage, the damned would have to stop denying their relation to God before they could ask to be let out.',
        ],
        sources: ['“Søren Kierkegaard,” in *Forewords and Afterwords*, p. 176.'],
      },
    },
    {
      id: 'q01b',
      text: 'How can people be blamed for what they love?',
      gloss: ['Dante asks this himself in *Purgatorio* XVIII. Virgil has just told him, in XVII, that love is the seed in us of every virtue and of every act that deserves punishment.'],
      auden: {
        paras: [
          '“Balaam and His Ass,” an essay in Auden’s book *The Dyer’s Hand* (1962), is about masters and servants in literature. In the essay Caliban, the wild islander enslaved by the magician Prospero in Shakespeare’s *The Tempest*, represents nature. Auden says that the play, which you will read in week 5, treats nature as the guilty party in the quarrel between nature and spirit, and spirit as blameless. Dante’s view is “the exact opposite.” For that view Auden quotes three lines from Virgil’s speech in *Purgatorio* XVII. The lines say that natural love cannot go wrong, but that the other love, the love a mind chooses, can go wrong in three ways: it takes a bad object, or it has too much force, or too little.',
          'Auden comments that a merely natural creature cannot want more or less than is good for it, since excess and shortage are equally painful to it. Animals cannot fall, because the tempter’s promise, “Ye shall be as gods,” is in the future tense, which animals do not have.',
          'Auden does not himself apply the lines to the question. This site does, and takes them to mean that people can be blamed for a love they have chosen.',
        ],
        sources: ['“Balaam and His Ass,” in *The Dyer’s Hand*, pp. 130–132.'],
      },
    },
  ],

  making: [
    {
      id: 'm01',
      kind: 'table',
      title: 'A chart of Hell',
      short: 'Ten places: who is there, and what is done to them',
      brief: [
        'Fill in this chart from the poem alone, without looking at notes or a commentary. If you lose your way, read Canto XI, where Virgil stops and explains the plan. He counts only the three circles below him, so his first and second circles are the seventh and eighth of this chart and his smallest circle is the ninth.',
        'The chart of Hell is the site’s. The chart Auden made for his students was of the themes of the course. Donald Pearce, a student in the class who wrote down after lectures what he could remember, describes Auden copying it out across the whole blackboard. You will fill in that chart in week 15.',
      ],
      rules: [
        'For each place, say who is punished there and what the punishment is.',
        'Keep each entry to a line or two.',
        'The seventh circle has three rings and the eighth has ten ditches. Fill in those two rows ring by ring and ditch by ditch, for as many as you can. The entries in those rows may run longer than two lines.',
        'Fill at least sixteen of the twenty boxes. You can then finish, and the site shows the chart as the poem has it.',
      ],
      table: {
        columns: [
          { id: 'place', label: 'Place', width: '8.5rem' },
          { id: 'cantos', label: 'Cantos', width: '6.5rem' },
          { id: 'who', label: 'Who is there', rows: 3 },
          { id: 'what', label: 'What is done to them', rows: 3 },
        ],
        rows: [
          { id: 'gate', cells: { place: 'Inside the gate', cantos: 'III' } },
          { id: 'c1', cells: { place: 'First circle', cantos: 'IV' } },
          { id: 'c2', cells: { place: 'Second circle', cantos: 'V' } },
          { id: 'c3', cells: { place: 'Third circle', cantos: 'VI' } },
          { id: 'c4', cells: { place: 'Fourth circle', cantos: 'VII' } },
          { id: 'c5', cells: { place: 'Fifth circle', cantos: 'VII–VIII' } },
          { id: 'c6', cells: { place: 'Sixth circle', cantos: 'IX–XI' } },
          { id: 'c7', cells: { place: 'Seventh circle', cantos: 'XII–XVII' } },
          { id: 'c8', cells: { place: 'Eighth circle', cantos: 'XVIII–XXX' } },
          { id: 'c9', cells: { place: 'Ninth circle', cantos: 'XXXII–XXXIV' } },
        ],
        min: 16,
        key: {
          title: 'The chart, from the poem',
          rows: [
            { place: 'Inside the gate', cantos: 'III', who: 'Those who lived without blame and without praise, and the angels who took neither side.', what: 'They run after a banner that never stops, stung by flies and wasps.' },
            { place: 'First circle', cantos: 'IV', who: 'The unbaptized, and the great of the ancient world.', what: 'No torment. They live in desire without hope.' },
            { place: 'Second circle', cantos: 'V', who: 'The lustful.', what: 'A storm drives them through the dark and never rests.' },
            { place: 'Third circle', cantos: 'VI', who: 'The gluttons.', what: 'They lie in mud under rain, hail and snow. Cerberus tears them.' },
            { place: 'Fourth circle', cantos: 'VII', who: 'The hoarders and the spendthrifts.', what: 'They roll great weights against each other, and each side shouts at the other.' },
            { place: 'Fifth circle', cantos: 'VII–VIII', who: 'The angry and the sullen.', what: 'The angry tear at each other in the marsh of Styx. The sullen lie under its mud.' },
            { place: 'Sixth circle', cantos: 'IX–XI', who: 'The heretics.', what: 'They lie in burning tombs.' },
            { place: 'Seventh circle', cantos: 'XII–XVII', who: 'The violent, in three rings: against their neighbors; against themselves; against God, nature and art.', what: 'In the same order: sunk in a river of boiling blood; turned into trees in a wood, where those who destroyed their own goods are hunted by dogs; kept on burning sand under a rain of fire.' },
            { place: 'Eighth circle', cantos: 'XVIII–XXX', who: 'The fraudulent, in ten ditches: panders and seducers; flatterers; sellers of church offices; soothsayers; sellers of public offices; hypocrites; thieves; false counselors; sowers of discord; falsifiers.', what: 'In the same order: whipped by demons; sunk in filth; set head down in holes with their soles on fire; their heads twisted backward; boiled in pitch; cloaked in gilded lead; bitten by serpents and changed into them; wrapped in flame; cut open with a sword; wasted by disease.' },
            { place: 'Ninth circle', cantos: 'XXXII–XXXIV', who: 'The traitors: to kin, to country, to guests, to lords and benefactors.', what: 'They are fixed in the ice of Cocytus. At the center Satan chews Judas, Brutus and Cassius.' },
          ],
          after: [
            'Virgil gives the plan in Canto XI. The second, third, fourth and fifth circles lie outside the city of Dis and punish incontinence, that is, lack of self-control. The seventh circle punishes violence, and the eighth and ninth punish fraud. Virgil’s plan does not place the first circle or the sixth.',
          ],
        },
      },
      reflect: 'Choose one circle. What does the punishment have to do with the sin?',
      source: [
        'Pearce describes the chart of the themes of the course in “Fortunate Fall: W. H. Auden at Michigan,” p. 153. Charles Miller, who also took the course, remembers Auden drawing diagrams on the blackboard to argue his reading of *Othello* (*Auden: An American Friendship*, p. 29).',
      ],
    },
  ],
};
