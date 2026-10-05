// Week 3. Augustine: Confessions.

export default {
  n: 3,
  title: 'The *Confessions*',
  sub: 'Augustine: *Confessions*, Books I to XIII',
  intro: [
    'This week there is one book, the *Confessions* of Augustine, a bishop in Roman North Africa who wrote it about the year 400. It is in thirteen parts called books. In the first nine he tells the story of his life as far as the death of his mother. Book X is on memory, Book XI is on time, and Books XII and XIII are on the first chapter of Genesis. The whole book is addressed to God, who is the *Thou* Augustine speaks to throughout.',
    '*Inferno* III, which you began learning in week 1, is due at the end of this week.',
  ],

  reading: [
    { work: 'augustine', text: 'augustine' },
  ],

  questions: [
    {
      id: 'q03a',
      text: 'Why did Augustine steal the pears?',
      gloss: ['In Book II Augustine gives more than one answer himself. Decide which he believes.'],
      auden: {
        title: 'What Auden wrote, and said in class',
        paras: [
          'In 1944 Auden reviewed a book from the list of recommended reading, C. N. Cochrane’s *Christianity and Classical Culture*. Much of the review is about Augustine.',
          'Auden says in the review that the classical philosophers thought of a person as divine reason shut up in a body. They put evil in the body, and held that to know the truth was to be free of evil. Augustine, he says, replaced this picture with another, in which people are made in the image of God and are fallen. A person is still divided in Augustine’s picture, but not into mind and body. The division now falls between the flesh, by which Auden means mind and body together in their self-loving state, and the spirit, which bears witness to what a person is still meant to be.',
          'From this division Auden concludes that a Christian such as Augustine, writing on ethics, begins with neither a reasonable act nor a pleasant one but with the gratuitous act. Such an act is done only to show that the people who do it are their own masters. He quotes Dostoevsky, the novelist you will read in weeks 7 to 10, whose hero in *Notes from Underground* protests that there is no free will left for a person whose wishes can be worked out by arithmetic. People act, Auden says, either out of love of self, “just for the hell of it,” or out of love of God, “just for the heaven of it,” and their reasons and appetites come second.',
          'One of the answers Augustine gives in Book II is that he wanted the theft itself and not the fruit. The review does not mention the pears. Auden spoke of them three years later, in a lecture on *Othello* given in New York in 1947. In the students’ notes from which that lecture has been reconstructed, he says that the idea of the gratuitous act first appears in the *Confessions*, where Augustine tells of robbing the pear tree.',
          'Donald Pearce, a student in Auden’s class at Michigan in 1941, wrote down after lectures what he could remember. His notes preserve part of a lecture on the ego in Augustine and in Franz Kafka, whose novel *The Castle* is assigned in weeks 14 and 15. Auden called Augustine the subtlest observer of his own mind between Aristotle and Freud. Augustine’s account of the conflict between self and ego, he said, matters less now as psychology than as ethics, where it must always be “an archetypal text.”',
        ],
        sources: [
          '“Augustus to Augustine,” in *Forewords and Afterwords*, pp. 34 and 36–37.',
          'W. H. Auden, *Lectures on Shakespeare*, reconstructed and edited by Arthur Kirsch (Princeton University Press, 2000), the lecture on *Othello*.',
          'Pearce, “Fortunate Fall,” p. 134.',
        ],
      },
    },
    {
      id: 'q03b',
      text: 'Augustine says in Book XI that the past exists only as memory and the future only as expectation. If he is right, is your past something that happened to you or something you are doing now?',
      gloss: ['Use Book X, on memory, as well as Book XI.'],
      auden: {
        paras: [
          'Auden writes about Augustine and time in “Balaam and His Ass,” an essay on masters and servants collected in *The Dyer’s Hand* (1962). The passage comes in his account of Phileas Fogg, the hero of Jules Verne’s novel *Around the World in Eighty Days*, whom Auden describes as a worshipper of the clock.',
          'According to the essay, the ancients for the most part thought of time as a pendulum or a wheel, so that sooner or later everything recurs and nothing can happen once and for all. The idea of a single event at a single moment cannot be drawn from the outside world, where every movement swings or circles, but only from the inner experience of remembering and looking forward. The essay credits Augustine with the first serious study of that experience.',
          'Auden then says that time seen from outside is Fate or Chance, the part of people’s lives that they are not answerable for and can do nothing about. Seen from inside, their time is their own, and they feel answerable for it. He adds that the Stoics of the ancient world trained themselves to master their passions but did not think of mastering their time, because they did not know that it was theirs. Auden calls Fogg a modern Stoic, who masters his passions by mastering his time.',
          'This site wrote the question so that you would have to choose between the two views of time in Auden’s essay. A past that happened to you is time seen from outside, and a past that you are doing now is time seen from inside.',
        ],
        sources: ['“Balaam and His Ass,” in *The Dyer’s Hand*, pp. 140–141.'],
      },
    },
  ],

  making: [
    {
      id: 'm03',
      kind: 'text',
      title: 'Yesterday, backward',
      short: 'An account of one day, from its end to its beginning',
      brief: [
        'Auden taught at Swarthmore College from 1942 to 1945. One of his composition assignments there was to describe the events of a day in reverse order.',
        'This site assigns it in week 3 because Books X and XI of the *Confessions* are about memory and time.',
      ],
      rules: [
        'Write what you did yesterday, beginning with the last thing and ending with waking.',
        'Between 250 and 400 words.',
        'Do not skip the dull parts of the day.',
        'Say what happened and do not comment on it.',
      ],
      check: { words: { min: 250, max: 400 } },
      reflect: 'What had you forgotten until you reached it going backward?',
      source: [
        'The assignment is reported by Monroe K. Spears, “W. H. Auden at Swarthmore,” *Swarthmore College Bulletin*, March 1962, p. 4, and on the page “Auden as a professor” of [*W. H. Auden at Swarthmore*](https://archive.swarthmore.edu/auden/professor.html), an exhibit on the web by the Swarthmore College Libraries. In both, the class describes the events of the day itself. Humphrey Carpenter’s biography of Auden has the day before, and the exercise here follows Carpenter.',
      ],
    },
  ],
};
