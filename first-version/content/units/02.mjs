// Week 2. Dante: Paradiso. Aeschylus or Sophocles. Horace: Odes.

const L = 'dante-longfellow';

export default {
  n: 2,
  title: 'Paradise, a Greek tragedy, Horace',
  sub: 'Dante: *Paradiso*. Aeschylus: *Agamemnon*, or Sophocles: *Antigone*. Horace: *Odes*',
  intro: [
    'Finish the *Comedy* by reading the *Paradiso*. Then read one Greek tragedy, either the *Agamemnon* of Aeschylus or the *Antigone* of Sophocles, as the list allows. Both were written in Athens in the fifth century B.C. In the reading below, select the play you have chosen, because the test asks about the play selected there. After the play, read the four books of *Odes* by the Latin poet Horace and the Secular Hymn printed after them.',
    'There are two exercises this week, and both are required: a translation from Latin and thirteen lines of verse. Do the translation before you read Book I of the *Odes*, because the ode you will translate is printed there in English.',
  ],

  reading: [
    { work: 'dante', text: 'dante-temple', from: 'par-01', to: 'par-33', by: 'group' },
    { work: 'agamemnon', text: 'agamemnon', choice: { id: 'greek', option: 'agamemnon', default: 'agamemnon' } },
    { work: 'antigone', text: 'antigone', choice: { id: 'greek', option: 'antigone', default: 'agamemnon' } },
    { work: 'horace', text: 'horace', by: 'group' },
  ],

  questions: [
    {
      id: 'q02a',
      text: 'The hero of the play you read had to choose between two courses. Was either of them right? Is the hero guilty, and of what?',
      gloss: [
        'In *Agamemnon* the Elders tell what happened at Aulis in their first song. In *Antigone* the choice is made in the first scene.',
      ],
      auden: {
        paras: [
          'Auden wrote about the Greek tragic hero in 1948, in the introduction to a collection of Greek writers in translation.',
          'In that introduction he says that the hero of Homer is a model for a ruling class to copy, but that the hero of tragedy is a warning to the ordinary citizens of the chorus. The tragic hero, he writes, begins in glory and ends by suffering more than those citizens do. As a rule, the wrong the hero does is one that could not have been avoided: Agamemnon must kill his daughter or fail his army, and Antigone must fail her dead brother or her city.',
          'According to Auden, the Greeks concluded that anyone caught in such a position was already guilty of a further fault, hubris, which is the confidence of the fortunate that they are like gods and cannot be made to suffer. Sometimes, Auden says, the hero shows it in an act, as Agamemnon does when he walks on the purple cloth. Where no act shows it, the hubris is assumed, since otherwise the gods would not be punishing the hero.',
          'Auden calls the world of Greek tragedy foreign to modern readers. They take what a person does to be partly that person’s own choice and partly circumstances, and they cannot make sense of a situation that by itself makes a person guilty. He gives the example of Oedipus, who killed his father and married his mother without knowing who they were. Sophocles tells the story in *Oedipus the King*, a play that is not on the list. A modern playwright, Auden says, would show Oedipus tempted and deceiving himself, and so answerable for what follows. Of the Oedipus that Sophocles wrote, nobody can say, “That was where he made his fatal mistake.”',
        ],
        sources: ['“The Greeks and Us,” in *Forewords and Afterwords*, pp. 18–21.'],
      },
    },
    {
      id: 'q02b',
      text: 'In *Odes* I.3 Horace prays for the ship in which his friend Virgil, the poet who guides Dante, is sailing to Greece. Then Horace says that whoever first went to sea broke a law of the gods. What, for Horace, is wrong with going to sea?',
      gloss: ['Read I.3 and I.14 together.'],
      auden: {
        paras: [
          'In 1949 Auden lectured at the University of Virginia on the sea in Romantic literature. The lectures were published as *The Enchafèd Flood*. The first of them sets out what the sea meant to writers before the Romantics, whom he dates from the late eighteenth century.',
          'In Genesis and in one Greek story of how the world began, he says, the sea is what was there before anything had a form. It is the disorder that civilization emerged from and can fall back into. For that reason, he says, writers made a ship stand for the state only when the state was in danger, since a ship ought to be in harbor. In ordinary times society is pictured as a city or a garden, the places where people belong. As an example of the ship in danger Auden quotes *Odes* I.14, where Horace calls to a ship that the waves are carrying out again and tells it to make for port.',
          'A voyage is therefore a necessary evil, Auden says: Homer’s Odysseus is only trying to get home, and Jason, the Greek hero sent to bring back the Golden Fleece, would be glad if it were nearer. The lecture quotes *Odes* I.3 to show that for a classical writer nobody goes to sea who can stay ashore, and that the attempt to cross the sea “betrays a rashness bordering on hubris.” Hubris is the Greek word for the pride of people who believe they are like gods.',
          'After Horace, Auden writes about Dante’s Ulysses (Odysseus under his Latin name), whom you met in week 1, then about Shakespeare, and then about the Romantics, for whom every person of feeling and honor longs to get away from land and city. Keep Horace’s view in mind until you reach *Moby-Dick*, Herman Melville’s novel of a whaling voyage, in weeks 11 to 13.',
        ],
        sources: ['*The Enchafèd Flood*, pp. 6–12.'],
      },
    },
  ],

  making: [
    {
      id: 'm02',
      kind: 'translate',
      check: { lines: { min: 8 } },
      title: 'A poem from the Latin',
      short: 'Eight lines of Horace and a word list',
      brief: [
        'At Michigan Auden had each student translate a poem from German, French or Latin. Students picked a language they had not studied and were allowed no help but a dictionary.',
        'The poem printed below is *Odes* I.11, in which Horace addresses a woman who has been consulting astrologers. The word list takes the place of the dictionary.',
      ],
      rules: [
        'Make an English poem of the ode. The Latin has eight long lines, and your version may have more than eight but not fewer.',
        'Work from the word list alone, with no dictionary. You may use English words that are not in the list. Latin puts words in an order English cannot keep, so the notes in the word list say which words belong together, and the sense must tell you the rest.',
        'Until you have finished, do not look at any translation and do not open Book I of the *Odes* in this week’s reading, where this ode is printed in English. John Conington’s translation of 1863 is shown when you finish.',
        'If you have studied Latin, do this exercise anyway, and spend more time on the translation from French in week 10 or from German in week 14.',
      ],
      translate: {
        heading: 'Horace, *Odes* I.11',
        source: ['horace-la', 'o1-11', 0, 1],
        lang: 'la',
        cite: 'The Latin is from A. J. Macleane’s edition as revised by R. H. Chase, in the Boston printing of 1895.',
        wordsIntro: ['Each entry gives the word or phrase as it is printed in the line, then its dictionary form if that is different, then its meanings. Where an entry continues after a period, what follows is the sense the word has in this line, or a note about the word, such as which other word it belongs with. If an entry gives no sense for this line, work out from the neighboring words how the word is used.'],
        glossary: [
          [
            ['Tu', 'you (one person)'],
            ['ne quaesieris', 'ne: not, in a command; quaero: to seek, to ask. Do not ask'],
            ['scire', 'scio: to know'],
            ['nefas', 'a thing the gods forbid; a wrong'],
            ['quem … quem', 'qui: which, what. The word comes twice, and both times it goes with Finem in the next line'],
            ['mihi', 'ego: I. To me, for me'],
            ['tibi', 'tu: you. To you, for you'],
          ],
          [
            ['Finem', 'finis: an end, a limit'],
            ['di', 'deus: a god. The gods'],
            ['dederint', 'do: to give. Have given'],
            ['Leuconoë', 'the name of the woman Horace is speaking to'],
            ['nec', 'and not, nor'],
            ['Babylonios', 'Babylonius: Babylonian. Goes with numeros in the next line. Astrology came from Babylon'],
          ],
          [
            ['Tentaris', 'tento: to try, to test, to handle. Nor try'],
            ['numeros', 'numerus: a number, a reckoning'],
            ['Ut', 'how'],
            ['melius', 'bonus: good. Better'],
            ['quidquid', 'quisquis: whoever, whatever. Whatever'],
            ['erit', 'sum: to be. Will be'],
            ['pati', 'patior: to bear, to suffer, to put up with'],
          ],
          [
            ['Seu … seu', 'whether … or'],
            ['plures', 'plus: more. More, or many'],
            ['hiemes', 'hiems: winter; a storm. Winters'],
            ['tribuit', 'tribuo: to grant, to allot. Grants, or has granted'],
            ['Juppiter', 'Jupiter, king of the gods and god of the sky'],
            ['ultimam', 'ultimus: last. The last winter'],
          ],
          [
            ['Quae', 'qui: who, which. Which: the winter just spoken of'],
            ['nunc', 'now'],
            ['oppositis', 'oppono: to set against, to put in the way. Goes with pumicibus'],
            ['debilitat', 'debilito: to weaken, to lame, to wear out'],
            ['pumicibus', 'pumex: pumice, rock eaten into holes. On the rocks, or by means of them'],
            ['mare', 'the sea. It is what the winter wears out, against the rocks'],
          ],
          [
            ['Tyrrhenum', 'Tyrrhenus: Tyrrhenian, Etruscan. The Tyrrhenian is the sea on the west coast of Italy'],
            ['Sapias', 'sapio: to taste of something; to have sense, to be wise. Be wise'],
            ['vina', 'vinum: wine'],
            ['liques', 'liquo: to make clear, to strain. Wine was strained before it was drunk'],
            ['et', 'and'],
            ['spatio', 'spatium: a space, a span, a stretch of time. To a span, or within a span'],
            ['brevi', 'brevis: short'],
          ],
          [
            ['Spem', 'spes: hope'],
            ['longam', 'longus: long'],
            ['reseces', 'reseco: to cut back, to prune'],
            ['Dum', 'while'],
            ['loquimur', 'loquor: to speak, to talk. We are talking'],
            ['fugerit', 'fugio: to flee. Will have fled'],
            ['invida', 'invidus: envious, grudging. Goes with Aetas in the next line'],
          ],
          [
            ['Aetas', 'age, a lifetime, time'],
            ['carpe', 'carpo: to pluck or pick, as fruit and flowers are picked; to make use of'],
            ['diem', 'dies: a day'],
            ['quam minimum', 'as little as possible'],
            ['credula', 'credulus: trusting, quick to believe. Said of the woman'],
            ['postero', 'posterus: coming after, next. The next day. Goes with credula: it is what she trusts'],
          ],
        ],
        published: { cut: ['horace', 'o1-11', 0, 1], cite: 'John Conington, *The Odes and Carmen Saeculare of Horace* (1863).' },
        after: ['Conington matched Horace’s eight long lines with eight of his own and put them in rhymed couplets, although the Latin does not rhyme.'],
      },
      reflect: 'Which Latin word gave you the most trouble, and what did you do with it?',
      source: [
        'The assignment is described by Robert L. Chapman, who took both of Auden’s Michigan courses, in “Auden in Ann Arbor,” *Michigan Quarterly Review*, Fall 1978, p. 509, and after him in Humphrey Carpenter, *W. H. Auden: A Biography*, pp. 318–319. Neither says in which of the two courses the translation was assigned. Chapman’s own poem was by Rainer Maria Rilke, who wrote in German. No record of another student’s poem has been found, and this ode is the site’s choice.',
      ],
    },
    {
      id: 'm02b',
      kind: 'verse',
      title: 'Thirteen lines of terza rima',
      short: 'Dante’s verse form, in English',
      brief: [
        'Dante wrote the *Comedy* in terza rima, in which the lines are grouped in threes, called tercets. The middle line of each tercet gives the rhyme for the first and third lines of the next, so that each tercet is locked to the one after it. Each canto ends on a single line that closes the last rhyme. The first nine lines of the poem are printed below in Italian. You do not need Italian to see the pattern: look at the last word of each line.',
        'Longfellow’s translation kept the tercets and gave up the rhyme, and the prose translation Auden assigned gave up the lines as well. Write thirteen lines of terza rima in English.',
      ],
      rules: [
        'Thirteen lines: four tercets and a closing line, rhymed aba bcb cdc ded e.',
        'Any subject. Ten syllables to a line is usual in English.',
        'Do not end a sentence at the end of every tercet. Let at least one sentence run on from one tercet into the next.',
      ],
      model: { cut: ['dante-italian', 'inf-01', 0, 2], lang: 'it', cite: 'Dante, *Inferno* I, lines 1 to 9.' },
      check: { lines: { exact: 13 }, scheme: 'aba bcb cdc ded e', runOn: [3, 6, 9] },
      reflect: 'For which rhyme did you have to change what you meant to say?',
      source: [
        'No record has been found that Auden assigned terza rima at Michigan. Angelyn Stevens, who audited his class there, listed verse written to a set meter among the work of the class (her notebooks, quoted in Dorothy J. Farnan, *Auden in Love*, p. 73). In “The Poet & the City,” an essay in his book *The Dyer’s Hand* (1962), Auden imagines a college for poets in which every student takes courses in prosody, the study of meter and verse form (p. 77).',
      ],
    },
  ],
};
