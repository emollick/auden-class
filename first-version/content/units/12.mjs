// Week 12. Melville: Moby-Dick, Chapters 42 to 86.
// (Henry Adams: The Education of Henry Adams, marked "Omit": Chapters 11 to 21.)
// Opera: The Flying Dutchman.

const M = 'moby-dick';

export default {
  n: 12,
  title: '*Moby-Dick*: the whale',
  sub: 'Melville: *Moby-Dick*, Chapters 42 to 86',
  intro: [
    'This week you read the middle of the book, about two hundred pages. Little happens to Ahab in it. The Pequod lowers her boats after whales and meets four ships, and Ishmael describes the sperm whale part by part, from the head to the tail.',
    'Do not skip the chapters on rope, blubber, heads and tails. The first question is about two of them, and the exercise asks you to write a chapter of that kind yourself, on the model of Chapter 32, which you have already read.',
    'Wagner’s opera *The Flying Dutchman* is also assigned this week. *Purgatorio* XXVIII is due at the end of the week.',
  ],

  reading: [
    {
      work: 'moby-dick', text: 'moby-dick', from: 'c042', to: 'c086',
      ranges: [
        ['c042', 'c053', 'Chapters 42–53'],
        ['c054', 'c054', 'Chapter 54: The Town-Ho’s Story'],
        ['c055', 'c072', 'Chapters 55–72'],
        ['c073', 'c086', 'Chapters 73–86'],
      ],
    },
    { work: 'adams', text: 'adams', omit: true, from: 'c11', to: 'c21', by: 'whole', label: 'Chapters 11–21' },
    {
      work: 'dutchman', text: 'dutchman', by: 'whole', label: 'The libretto',
      paras: [
        'The opera runs about two hours and a quarter, and is often played without a break.',
        'Wagner wrote the words himself, as he did for all his operas. He took the story from the German poet Heinrich Heine. The opera was first performed in Dresden in January 1843, and it is sung in German.',
        'While you listen, notice how much Senta, a Norwegian sea captain’s daughter, knows about the Dutchman before he comes through the door, and where she learned it.',
      ],
      auden: {
        title: 'What Auden wrote that bears on this opera',
        paras: [
          'Auden names the hero of this opera only in passing, as a type, and no account by him of the opera itself has been found. In *The Enchafèd Flood*, the book of his 1949 lectures on the sea in Romantic writing, he describes the hero of the Romantics as having two natures. Half of him is an exile, and Auden gives the exile three names: the Ishmael of Genesis, the Wandering Jew (the man of legend who must walk the earth until the end of the world) and the Flying Dutchman. The other half is Don Quixote, the man with a mission.',
          'The Dutchman is doomed by an oath. Senta tells the story in her ballad: he swore that he would round a cape if he had to sail forever, and he was taken at his word. Auden has a page on oaths in his account of Ahab, who makes his harpooneers swear to hunt the White Whale to the death. An oath, he says, commits a person’s future. It is right to swear to a direction of the will, as a man does who vows at the altar to love his wife until death, but wrong to swear to a particular act. For the wrong kind Auden imagines a husband’s vow to give his wife a pound of candy a week, when she may get diabetes. As this site applies the rule, the Dutchman’s oath to round one cape was an oath to a particular act, and Senta’s last words, a vow to be his until death, are an oath to a direction of the will.',
          'In the notes to *New Year Letter*, his long poem of 1941, Auden says that Wagner, in expressing the sufferings of failure, is “perhaps the greatest genius who ever lived,” but that happiness and success were beyond him. For friendship and for love that is returned, a listener has to go to Mozart. The poem itself sums up a Wagner plot in a couplet: “And Woman, passive as in dreams, / Redeems, redeems, redeems, redeems.”',
          'In a review of 1969 Auden calls the German philosopher Friedrich Nietzsche by far the best guide to Wagner. Nietzsche’s *The Case of Wagner* is one of the books of criticism recommended on the reading list. The passage Auden quotes from him says that somebody in a Wagner opera always wants to be saved. Of *The Flying Dutchman* it says that even the Wandering Jew, as Nietzsche calls the Dutchman, is saved and settles down once he marries.',
        ],
        sources: [
          '*The Enchafèd Flood*, pp. 5 and 96, and pp. 138–139 for oaths.',
          '*New Year Letter* (Faber and Faber, 1941), Part III, and the note to line 1432.',
          '“The Greatest of the Monsters,” in *Forewords and Afterwords*, pp. 253–254.',
        ],
      },
    },
  ],

  questions: [
    {
      id: 'q12a',
      text: 'Chapter 60 is about rope and Chapter 68 is about blubber. Each ends by turning to the reader. Take one of them and say how Melville gets from the fact about whaling to the lesson. Does the lesson follow from the fact, or is it laid on top of it?',
      gloss: ['Chapter 60 is “The Line” and Chapter 68 is “The Blanket.” Read twice the last paragraph of Chapter 60 and the last two paragraphs of Chapter 68.'],
      auden: {
        title: 'What Auden wrote about the three kinds of meaning in the book',
        paras: [
          'Auden says in *The Enchafèd Flood*, the book of his 1949 lectures on the sea in Romantic writing, that *Moby-Dick* has meaning of three kinds. The first kind is the figure of speech in which a part stands for the whole. Leave out the White Whale, he says, and the book is one large figure of that sort: Melville takes whaling, a trade he had worked at, and makes it stand for anybody’s life. Whalemen live by killing, and so does everyone in one way or another. The owners of the Pequod are Quakers, who profess never to shed blood, and they see nothing odd in their business. Each of the mates shows what he is by how he goes about killing whales. For this kind of meaning, Auden adds, another trade would have done as well, so long as Melville knew it.',
          'The second kind is parable, where something in one part of life is made to answer, point for point, to something in another. As examples Auden quotes the two endings the question asked about, the whale-lines that everyone lives in and the whale that keeps its own temperature at the Equator and at the Pole. The nine ships that the Pequod meets, which you will chart next week, are a third example. Auden says that the method is deliberate, that it is the one that the Church Fathers, the Christian writers of the first centuries, used when they interpreted Scripture, and that the reader grasps each correspondence by reasoning.',
          'The third kind is symbol in the true sense, and, according to Auden, Melville uses it when he writes about the White Whale. By a symbol Auden means something that is felt to matter before anyone can say why, and in which different people see different things. The other question this week is about what the whale is to Ahab and to Ishmael.',
          'Charles Miller took the course in the fall of 1941 and lived in Auden’s house at the time. He remembered that Auden never discussed Melville but said many times that *Moby-Dick* “is really an epic poem, and should be read that way.” In Miller’s view Auden was inclined to revere Melville and not to examine him. This site adds that an epic stops for lists and for gear, as Homer’s *Iliad* stops for its catalog of ships and for the shield of Achilles.',
        ],
        sources: [
          '*The Enchafèd Flood*, pp. 58–62.',
          'Charles H. Miller, *Auden: An American Friendship* (Scribner, 1983), p. 135.',
        ],
      },
    },
    {
      id: 'q12b',
      text: 'On the quarter-deck Ahab told the crew what the White Whale is to him. In Chapter 42 Ishmael says what it was to him. Set the two accounts side by side. Is what Ahab hates the same thing that frightens Ishmael?',
      gloss: ['Chapter 42, “The Whiteness of the Whale.” Ahab’s speech is in Chapter 36. The White Whale also matters to two other men in this week’s chapters, Steelkilt in Chapter 54 and Gabriel in Chapter 71. You may use them in your answer, but the question is about Ahab and Ishmael.'],
      auden: {
        title: 'What Auden wrote about the whale',
        paras: [
          'In *The Enchafèd Flood*, the book of his 1949 lectures on the sea in Romantic writing, Auden defines a symbol as something felt to matter before anyone can say why. A symbol, he says, never has a single meaning, and different people see different things in it. In this a symbol is unlike a parable, in which one thing answers to one thing. Auden quotes as examples of parable the lessons Melville draws at the end of Chapters 60 and 68.',
          'To Ahab, in the words Auden quotes from the speech on the quarter-deck, the whale is a mask, and in it he sees great strength driven by malice. To Gabriel, the madman of the Jeroboam, it has similar qualities, but Gabriel worships it. Steelkilt of the Town-Ho meets in it God’s justice and mercy: it kills the man he was about to murder, and so keeps him from murder. To Starbuck it means death, or his own fatal tie to his captain. Ishmael, whom Auden does not separate from Melville, finds it neither good nor evil. To him, Auden says, it is “numinous”: the whale shows him a divine power and majesty beyond any human measure of right and wrong.',
          'In February of 1941, the year of the course, Auden reviewed three books by Franz Kafka, among them *The Castle*, which you will read in weeks 14 and 15. He made the review into an essay on quest stories, from the old tales of the Holy Grail to Kafka. A footnote to the essay calls *Moby-Dick*, among such stories, “a unique exception.” Nobody in the book, Auden says, is looking for salvation, and the whale is two figures of the old stories in one, the sacred thing that is sought and the monster that guards it.',
          'That spring Auden published *New Year Letter*, his long poem with notes. One of the notes says that most American novels are parables, in which the struggle takes place inside a person, and that “Melville’s sea is not a real sea nor his whale a real whale.” Eight years later, in *The Enchafèd Flood*, Auden uses the word parable more narrowly, for the lessons Melville draws from whaling, and calls the whale a symbol.',
        ],
        sources: [
          '*The Enchafèd Flood*, pp. 62–63.',
          '“The Wandering Jew,” *The New Republic*, February 10, 1941, reprinted in *Prose, Volume II*, pp. 110–113. The footnote is on p. 111.',
          '*New Year Letter* (Faber and Faber, 1941), the note to line 1566.',
        ],
      },
    },
  ],

  making: [
    {
      id: 'm12',
      kind: 'text',
      title: 'A chapter in the manner of “Cetology”',
      short: 'A parody: sort something you know as Melville sorts the whales',
      brief: [
        'In “The Poet & the City,” an essay in *The Dyer’s Hand* (1962), Auden imagines a college for poets. The library has no criticism on its shelves, and the students practice criticism in one way only, by writing parodies. This is the second parody of the course, after the parody of Blake’s Proverbs of Hell in week 6.',
        'Some chapters of *Moby-Dick* pretend to be treatises. “Cetology” (Chapter 32) sorts the whales by size into three Books named after the sizes of printed books, Folio, Octavo and Duodecimo, and gives each whale a Chapter. Before you begin, read Chapter 32 again and note what each sentence in Melville’s account of one whale does. Keep the chapter open while you write if that helps. Here are two of its whales, and its ending.',
      ],
      rules: [
        'Write a chapter of this kind about a class of things you know well: dogs, bicycles, the customers of a shop.',
        'Give it a learned title of one word. Begin by saying that nobody has yet put the subject in order.',
        'Divide the subject into three Books and put at least two Chapters in each. You may sort by size, as Melville does, or in some other way. Each Chapter describes one kind of thing and must say how to know that kind when you see it.',
        'End as Melville ends, by leaving the system unfinished and giving a reason why it must be left that way.',
        'Write between 300 and 600 words, which leaves a few sentences for each Chapter. Every fact must be true, and the sentences must sound like Melville’s. The site counts your words, and whether they sound like Melville is for you to judge.',
      ],
      model: {
        cuts: [[M, 'c032', 27, 28], [M, 'c032', 45, 45]],
        gap: 'Two more Books follow. The chapter ends:',
        cite: 'Melville, *Moby-Dick*, Chapter 32, “Cetology.”',
      },
      check: { words: { min: 300, max: 600 } },
      reflect: 'Which habit of Melville’s was hardest to copy?',
      source: [
        'The college is described in “The Poet & the City,” in *The Dyer’s Hand*, p. 77. The exercise and the choice of chapter are this site’s.',
      ],
    },
  ],
};
