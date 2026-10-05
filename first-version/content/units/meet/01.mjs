// Week 1: the head of the week and its two meetings.

const L = 'dante-longfellow';

export default {
  intro: [
    'Auden’s list begins with Dante’s *Divine Comedy*, and he kept it in front of the class all term. When they came to Kafka, three months later, he told them to keep Dante in mind as they read.',
    'This week is Hell and the mountain of Purgatory: sixty-seven cantos, in the prose translation he assigned or in Longfellow’s verse.',
  ],
  carry: 'No one in Dante’s Hell asks to be let out. Why not?',
  short: {
    say: 'Auden gave his class a week for all sixty-seven cantos. With one evening, read these ten. Both meetings can be followed from them.',
    parts: ['dante/inf-01', 'dante/inf-03', 'dante/inf-05', 'dante/inf-26', 'dante/inf-33', 'dante/inf-34', 'dante/pur-01', 'dante/pur-17', 'dante/pur-27', 'dante/pur-30'],
  },
  plate: 'dore-dark-wood',
  heart: 'gate',

  operas: {
    orpheus: {
      paras: [
        'This is the first of the nine operas on the list. Orpheus goes down among the dead while he is still alive, as Dante does, and he is allowed to bring one of them back on a condition. The libretto is thirteen pages and the opera lasts about an hour and a half. The record here is its best-known aria.',
        'Gluck made two versions, the Italian (*Orfeo ed Euridice*, Vienna, 1762) and a longer French one (*Orphée et Eurydice*, Paris, 1774). Recordings of both are in three acts. The libretto printed here is in four, and its second and third acts make up the second act of a recording.',
      ],
    },
  },

  meetings: [
    {
      id: 'm01a',
      title: 'A speech in Hell',
      blurb: 'A man in Hell tells how he talked his crew into one more voyage. Nine words are missing from what he says.',
      spreads: [
        {
          passage: { gaps: true },
          steps: [
            {
              id: 'words',
              kind: 'gaps',
              lead: [
                'Nine words have been taken out. Write in each gap the word you think Longfellow used. Do it before you open the book. Nothing depends on being right.',
              ],
              notes: {
                0: 'The first thing he tells us is their age. What he asks next, he asks of men with little left to lose.',
                1: 'A world with nobody in it. There is no one out there to rob, rule or trade with. The only thing the voyage offers is the knowing.',
                2: 'He appeals to their breeding: remember the stock you come from. You will meet the word again on the mountain, where Virgil calls love the seed of every virtue and of every act that deserves punishment (*Purgatorio* XVII).',
                3: 'Men on one side, beasts on the other, and nothing between. It flatters them. It also leaves out everyone who stays at home and is not a beast.',
                4: 'He is reporting his own success. Fifteen lines earlier these men were *old and slow*. One short speech, and they cannot be held back.',
                5: 'The oars become wings: the ship is trying to fly. His verdict on the flying comes in the same line.',
                6: 'This is his own word for the voyage, said in Hell with the voyage long over. The Italian is *folle*. Dante uses the same word of his own journey, at the start of the poem, when he is afraid to begin it (*Inferno* II).',
                7: 'The line turns over in the middle. They have seen land for the first time in five months, and the land kills them.',
                8: 'He does not say who. Ulysses is a pagan, dead a thousand years before Christ, and has no name for the one who sank him. Keep the phrase in mind for the first canto of the *Purgatorio*.',
              },
              after: [
                'Ulysses is Homer’s Odysseus. In Homer he gets home. This last voyage is found in no earlier poet and seems to be Dante’s own invention.',
              ],
            },
            {
              id: 'hero',
              kind: 'choose',
              ask: 'Is this man a hero?',
              options: [
                {
                  id: 'yes',
                  label: 'Yes. He would rather drown than stop finding out.',
                  reply: [
                    'Tennyson read him that way. His poem “Ulysses” (1842) is this speech at greater length, and it ends: “To strive, to seek, to find, and not to yield.” The line was later cut into the memorial cross for Captain Scott’s polar party.',
                    'Auden grants the likeness. But look at where Dante has put the man who says it.',
                  ],
                },
                {
                  id: 'no',
                  label: 'No. He talked tired old men into dying for his curiosity.',
                  reply: [
                    'That is the charge against him. He is in the eighth circle, with those who used the gift of speech to deceive, and this speech is the gift at work: men who had come through *a hundred thousand perils* are dead within the page.',
                    'But Dante gives him the best lines in the canto, and when he stops speaking neither Dante nor Virgil says a word against him.',
                  ],
                },
                {
                  id: 'both',
                  label: 'Both, and Dante knows it.',
                  reply: [
                    'That is nearest to what Auden said. His reading is on the board below.',
                  ],
                },
              ],
            },
            {
              id: 'serpent',
              kind: 'mark',
              ask: 'Somewhere in his speech to the crew an older tempter is speaking. Mark the lines where you hear him.',
              max: 3,
              key: [12, 13, 14],
              near: [9, 10, 11],
              hit: [
                'You heard him. He is in the three lines that begin *Consider ye*. In Genesis the Serpent tells Eve that if she eats the fruit “ye shall be as gods, knowing good and evil” (3:5, in the King James Version). Ulysses tells his crew what they were made for, and it is the same offer: knowledge, and a higher rank in creation than the one they have.',
              ],
              nearby: [
                'Close. Those lines hold out the knowledge. The three after them, beginning *Consider ye*, say what the crew were made for, and that is where the older voice comes in.',
                'In Genesis the Serpent tells Eve that if she eats the fruit “ye shall be as gods, knowing good and evil” (3:5, in the King James Version). Ulysses makes the same offer: knowledge, and a higher rank in creation than the one they have.',
              ],
              miss: [
                'Look at the three lines beginning *Consider ye*, now marked in the passage.',
                'In Genesis the Serpent tells Eve that if she eats the fruit “ye shall be as gods, knowing good and evil” (3:5, in the King James Version). Ulysses tells his crew what they were made for, and it is the same offer: knowledge, and a higher rank in creation than the one they have.',
              ],
              after: [
                'Both speak to people who have been shown where the limit is. Eve has been told which tree. The crew are looking at the pillars Hercules set up *that man no farther onward should adventure*.',
              ],
            },
          ],
        },
        {
          plate: 'dore-ulysses-flames',
          steps: [
            {
              id: 'auden',
              kind: 'turn',
              title: 'What Auden made of Ulysses',
              paras: [
                'Auden wrote about this passage in *The Enchafèd Flood* (1950), three lectures on the sea in the writing of the Romantics. Dante’s Ulysses, he says, behaves as the sea-going hero of the Romantic writers does, and Tennyson made him one.',
                'But to Dante, Auden adds, the voyage was the sin of Adam, and the speech to the crew echoes what the Serpent said to Eve.',
                'The poem keeps both readings open. Dante uses Ulysses’ word for the voyage, *folle*, of his own journey. The mountain that Ulysses drowned in sight of is taken by nearly every commentator to be the one Dante climbs in the *Purgatorio*. And from high in Paradise Dante looks down at the strait once more and sees “the mad track of Ulysses” (*Paradiso* XXVII). Ulysses went where Dante goes, and went without being sent.',
              ],
              sources: ['*The Enchafèd Flood*, p. 10. The third paragraph is this site’s, from the places in the poem that it names.'],
            },
            {
              id: 'next',
              kind: 'next',
              title: 'Read the *Inferno* and the *Purgatorio*',
              paras: [
                'A canto takes about ten minutes. Read in the prose translation Auden assigned, by Carlyle, Okey and Wicksteed, or in Longfellow’s verse, which you have just been reading.',
                'When you reach the first canto of the *Purgatorio*, look at the shore, and at what is said there about the men who have sailed those waters. You have been there before.',
              ],
              carry: 'No one in Dante’s Hell asks to be let out. Watch for anyone who does.',
              only: ['dante'],
              heart: { label: 'Nine lines to learn by heart: the words over the gate of Hell', href: '#/heart/gate' },
            },
          ],
        },
      ],
    },

    {
      id: 'm01b',
      after: true,
      title: 'Where Dante puts people',
      blurb: 'Seven of the damned to place in Hell, seven terraces to sort on the mountain, and a record of 1922 to listen to.',
      spreads: [
        {
          plate: 'dore-charon',
          steps: [
            {
              id: 'verdict',
              kind: 'verdict',
              work: 'dante',
              ask: 'Before anything else: did you like it?',
              after: [
                'Auden’s own verdict is on record. In *New Year Letter*, the long poem he published in 1941, he imagines himself on trial before the dead poets he most admires. Dante is the first of the judges.',
              ],
            },
            {
              id: 'pit',
              kind: 'match',
              ask: 'Where in Hell are they?',
              lead: ['Do it from memory first. Hell has a gate, and nine circles that narrow as they go down.'],
              pool: [
                { id: 'gate', label: 'Inside the gate, before the river' },
                { id: 'c1', label: 'First circle' },
                { id: 'c2', label: 'Second circle' },
                { id: 'c3', label: 'Third circle' },
                { id: 'c4', label: 'Fourth circle' },
                { id: 'c5', label: 'Fifth circle' },
                { id: 'c6', label: 'Sixth circle' },
                { id: 'c7', label: 'Seventh circle' },
                { id: 'c8', label: 'Eighth circle' },
                { id: 'c9', label: 'Ninth circle' },
              ],
              rows: [
                { id: 'neutral', label: 'Those who never took a side', answer: 'gate', note: 'Canto III. They run after a banner for ever. Heaven will not have them and Hell will not take them in.' },
                { id: 'homer', label: 'Homer, Aristotle and the unbaptized', answer: 'c1', note: 'Canto IV. No torment. They live in desire without hope.' },
                { id: 'paolo', label: 'Paolo and Francesca', answer: 'c2', note: 'Canto V. The lovers, blown about in a storm that never rests.' },
                { id: 'farinata', label: 'Farinata, who held that the soul dies with the body', answer: 'c6', note: 'Canto X. The heretics, in burning tombs.' },
                { id: 'pier', label: 'Pier della Vigna, who killed himself', answer: 'c7', note: 'Canto XIII. The violent against themselves, turned into trees.' },
                { id: 'ulysses', label: 'Ulysses', answer: 'c8', note: 'Canto XXVI. The eighth of the ten ditches of fraud.' },
                { id: 'ugolino', label: 'Ugolino, and the archbishop who starved him', answer: 'c9', note: 'Cantos XXXII and XXXIII. The traitors, fixed in ice.' },
              ],
              after: [
                'The order is an argument about which sins are worst, and Virgil gives it in Canto XI. The upper circles punish want of self-control. Below them comes violence, and below violence fraud, which Longfellow’s Virgil calls “man’s peculiar vice”: an animal can be violent, but only a creature with reason can cheat.',
                'So the lovers are near the top, and the man who made the speech you began with is near the bottom. At the very bottom, where treachery is punished, there is no fire. The traitors are frozen into a lake.',
              ],
            },
            {
              id: 'out',
              kind: 'write',
              q: 'q01a',
            },
          ],
        },
        {
          passage: {
            cut: [L, 'pur-17', 30, 34],
            first: 91,
            label: 'Virgil explains the mountain',
            cite: 'Dante, *Purgatorio* XVII, lines 91 to 105, in Longfellow’s translation.',
          },
          steps: [
            {
              id: 'mountain',
              kind: 'sort',
              ask: 'Seven terraces, and three ways for love to go wrong. Which is which?',
              lead: ['Halfway up the mountain Virgil stops and explains how it is laid out. He names what is purged on the terraces below him and on his own. Of the three above he says only that Dante must find them out for himself. You have read on, and you can.'],
              bins: [
                { id: 'object', label: 'A bad object', sub: 'love of a neighbor’s harm' },
                { id: 'little', label: 'Too little' },
                { id: 'much', label: 'Too much', sub: 'of a good that is not the highest' },
              ],
              items: [
                { id: 'pride', label: 'The proud', bin: 'object', note: 'First terrace. They hoped to rise by another’s fall.' },
                { id: 'envy', label: 'The envious', bin: 'object', note: 'Second. They grieved when another rose.' },
                { id: 'wrath', label: 'The angry', bin: 'object', note: 'Third. They wanted revenge.' },
                { id: 'sloth', label: 'The slothful', bin: 'little', note: 'Fourth, where Virgil is standing as he speaks.' },
                { id: 'avarice', label: 'The misers and the spendthrifts', bin: 'much', note: 'Fifth.' },
                { id: 'gluttony', label: 'The gluttons', bin: 'much', note: 'Sixth.' },
                { id: 'lust', label: 'The lustful', bin: 'much', note: 'Seventh, the last before the garden.' },
              ],
              boardTitle: 'The mountain, by Virgil’s account',
              after: [
                'At the first meeting of the Michigan class Auden read out a list of definitions, and Donald Pearce kept a few of them. One was “Every evil is a former good.” Virgil’s speech says the same thing at length: nobody on the mountain loved nothing, and nobody in Hell did either.',
                'Look at where the lovers are. In Hell they are in the second circle, the first below Limbo. On the mountain they are on the last terrace, nearest the garden. In both places Dante puts too much love closest to the good, and coldness of heart farthest from it.',
              ],
            },
            {
              id: 'blame',
              kind: 'write',
              q: 'q01b',
            },
          ],
        },
        {
          plate: 'corot-orpheus',
          steps: [
            {
              id: 'opera',
              kind: 'read',
              record: 'orpheus-che-faro',
              title: 'The other descent: Gluck’s *Orpheus*',
              paras: [
                'Auden put nine operas on the reading list of a course in literature, and he brought a portable phonograph to class and played records to make his points.',
                'Orpheus is let into the underworld alive because of his singing. He may lead Eurydice out on one condition, that he does not look at her on the way. Dante is led down by Virgil and may look at everything.',
                'This record is the aria Orpheus sings when he has looked, and she has died a second time. Its first words mean *What shall I do without Eurydice?* Play it before you go on.',
              ],
              go: 'I have listened',
            },
            {
              id: 'aria',
              kind: 'choose',
              ask: 'What did you hear?',
              options: [
                {
                  id: 'grief',
                  label: 'Grief.',
                  reply: ['Most listeners since 1762 have heard it so, and it is the best-known thing Gluck wrote. Now try to say what in the sound is sad. The key is major, and nothing in the tune breaks or cries out.'],
                },
                {
                  id: 'calm',
                  label: 'Something too calm for what has just happened.',
                  reply: ['Listeners in Gluck’s own day said the same.'],
                },
                {
                  id: 'words',
                  label: 'I could not tell from the tune. The words would have to say.',
                  reply: ['That is the oldest complaint made against this aria.'],
                },
              ],
              after: [
                'In 1854 the critic Eduard Hanslick repeated a remark made by a contemporary of Gluck’s: the tune would go as well, or better, with the opposite words, *I have found my Eurydice*.',
              ],
            },
            {
              id: 'opera-auden',
              kind: 'turn',
              title: 'What Auden said about suffering in opera',
              paras: [
                'In “Notes on Music and Opera” Auden says that in a sense there can be no tragic opera. Whatever the characters suffer and whatever mistakes they make, “they are doing exactly what they wish.”',
                'Opera, he says in the same essay, imitates human willfulness. We have feelings, and we insist on having them whatever they cost us.',
                'Orpheus was told not to look, and he looked. Paolo and Francesca, in the second circle of Hell, are still together.',
              ],
              sources: ['“Notes on Music and Opera,” in *The Dyer’s Hand* (1962), pp. 468 and 470–71. The third paragraph is this site’s.'],
            },
          ],
        },
        {
          steps: [
            {
              id: 'who',
              kind: 'spot',
              items: ['t01-1', 't01-5', 't01-7', 't01-13'],
              lead: ['Auden’s examination on Shakespeare at the New School in January 1947 was thirty-five passages under one heading: “Who says to Whom, When, Where?” Here are four from Dante, and a name is enough.'],
            },
            {
              id: 'chart',
              kind: 'make',
              ex: 'm01',
              paras: ['If you want Hell whole, draw it up: ten places, who is in each, and what is done to them. The chart Auden drew for this class, across the whole blackboard, was of the course itself. It comes in week 15.'],
            },
            {
              id: 'next',
              kind: 'next',
              title: 'Next week: Paradise',
              paras: [
                'The third part of the poem is the one readers most often leave unread. Auden had the class learn its last canto by heart.',
              ],
              reading: false,
            },
          ],
        },
      ],
    },
  ],
};
