// Week 11. Melville: Moby-Dick, the Etymology to Chapter 41.
// (Henry Adams: The Education of Henry Adams, marked "Omit": to Chapter 10.)

const V = 'inf-05';

export default {
  n: 11,
  title: '*Moby-Dick*: to the quarter-deck',
  sub: 'Melville: *Moby-Dick*, to Chapter 41',
  intro: [
    'This week you read about two hundred pages, the first third of *Moby-Dick*, the novel that Herman Melville published in 1851. The whaling ship, the Pequod, does not sail until Chapter 22, and her captain, Ahab, does not come on deck until Chapter 28. In Chapter 36 he tells the crew what the voyage is for.',
    '*The Education of Henry Adams*, the autobiography of an American historian, comes just before *Moby-Dick* on the reading list. Like *Faust*, it is marked “Omit” on the published copy of the list, and you need not read it. If you do, this site divides it into three parts, one for each week of *Moby-Dick*.',
    'This week’s exercise is on Canto V of the *Inferno*, the canto you learned in weeks 4 to 6. You will do it from memory, with the canto closed.',
  ],

  reading: [
    {
      work: 'moby-dick', text: 'moby-dick', from: 'etymology', to: 'c041',
      ranges: [
        ['etymology', 'c009', 'Etymology, Extracts, Chapters 1–9'],
        ['c010', 'c022', 'Chapters 10–22'],
        ['c023', 'c035', 'Chapters 23–35'],
        ['c036', 'c041', 'Chapters 36–41'],
      ],
    },
    { work: 'adams', text: 'adams', omit: true, from: 'editors-preface', to: 'c10', by: 'whole', label: 'The prefaces and Chapters 1–10' },
  ],

  questions: [
    {
      id: 'q11a',
      text: 'Ishmael was brought up a Presbyterian. In Chapter 10 he joins Queequeg in the worship of a wooden idol, and he reasons his way to it in one paragraph. Is the reasoning sound?',
      gloss: ['Chapter 10, “A Bosom Friend.” Then see what Queequeg does on the boat to Nantucket in Chapter 13.'],
      auden: {
        title: 'What Auden wrote about Ishmael’s road to the ship',
        paras: [
          'In *The Enchafèd Flood*, the book of his 1949 lectures on the sea in Romantic writing, Auden reads everything before the Pequod sails as a set of tests. Ishmael has made up his mind to go to sea, but he has not signed, and at each step he could still turn around and go back to the city. The first test is a fright: he pushes open the door of what he takes for an inn and finds a church, with a sermon on hell in progress. The last are Elijah’s warning on the wharf and the interview with the two Quaker owners.',
          'The longest test is Queequeg. Ishmael starts with two fixed notions, which Auden says readers of *Moby-Dick* share: that people who are not white must be ugly, and that pagans cannot keep the commandment to love their neighbor, since they have never been given it. He loses both through Queequeg, who left his island to learn the truth from Christians, found that the people who know it do not obey it, and settled down to live as a pagan among them. On the boat to Nantucket Queequeg saves the life of a man who has just insulted him. Auden says that in doing so he shows a Christian’s forgiveness and love without any effort, and calls him “a doer of the Word who has never heard the Word.”',
          'According to Auden, Ishmael accepts Queequeg by taking part in his worship of the idol, and the acceptance proves Ishmael fit for the voyage. No comment by Auden on Ishmael’s paragraph of reasoning has been found.',
          'Auden says that for Ishmael, and for the reader who travels with him, the voyage is an exploration. Ishmael comes through it unchanged except in what he knows of himself and of other people. He had to be tested beforehand, Auden says, to find out whether he was fit for an exploration of that kind, and after passing the tests he has nothing left to do but record. The rest of the crew, by contrast, gain no knowledge of themselves, and the voyage changes them as the reader watches.',
        ],
        sources: ['*The Enchafèd Flood*, pp. 113–115 and 119.'],
      },
    },
    {
      id: 'q11b',
      text: 'Father Mapple says near the start of his sermon on the Book of Jonah that to obey God we must disobey ourselves. At the end he says that delight belongs to whoever stands forth “his own inexorable self.” Can one person do both?',
      gloss: ['Chapter 9. Father Mapple speaks of obeying God at the end of the first long paragraph of his sermon, just before he begins the story of Jonah. He speaks of delight in the last paragraph of the sermon, which is the next-to-last paragraph of the chapter.'],
      auden: {
        title: 'What Auden wrote about the sermon',
        paras: [
          'Auden says in *The Enchafèd Flood*, the book of his 1949 lectures on the sea in Romantic writing, that Father Mapple’s sermon has sometimes been called splendid and beside the point, but that it is “an essential clue to the meaning of the whole book.” Melville put it early, before the Pequod sails, so that readers would have a standard for judging what Ahab and the others say and do afterward.',
          'Jonah, as Auden retells the story, knows the Word of God and is called to do more than know it: he is to act on it with his whole passion, as a religious hero. He runs away out of pride, afraid that nobody will listen to him or admire him. His punishment is to be faced with what is really great, a storm and a whale, next to which the greatest emperor is puny. Inside the whale he loses his one gift, the power to hear the Word. He repents instead of despairing and trusts the God he cannot hear, and he is forgiven and put ashore to do what he was told.',
          'Auden says that Father Mapple’s two statements only appear to contradict each other, and that they say what the Button-moulder says to Peer in Ibsen’s *Peer Gynt*, the play you read in week 7. The Button-moulder, who has come to melt Peer down, tells him that being oneself means slaying oneself. He doubts that Peer will understand this, so he puts it another way: it means carrying out the Master’s intention in everything.',
          'Auden then distinguishes the ego from the self, which together make a person. The self is what a person has been given. It has powers it does not know of, it can begin nothing, and it wants only to stay as it is, content with itself and in need of nothing. The ego is the part that decides. Auden says that it can go wrong in three ways: first, by refusing to look honestly at the self it has; second, by preferring a false god, one it thinks it can manage, to the true God; third, by knowing the self and what is required of it and still disobeying, out of weakness or out of defiance. Keep the third way in mind for Ahab, and defiance above all. In this passage Auden does not apply the distinction to Father Mapple’s two statements, so in your reply say of each statement whether the self it speaks of is the self a person has been given or the ego that decides.',
        ],
        sources: ['*The Enchafèd Flood*, pp. 116–119.'],
      },
    },
    {
      id: 'q11c',
      text: 'Ahab lost his leg before the book begins. Chapter 41 says what he made of the loss. What else could he have made of it?',
      gloss: ['Chapter 41, “Moby Dick.” Then go back to Chapter 36 and read what Starbuck says to Ahab on the quarter-deck, and what Ahab answers.'],
      auden: {
        title: 'What Auden wrote about Ahab',
        paras: [
          'In December 1945 Auden wrote about *Moby-Dick* on the front page of *The New York Times Book Review*, under the title “The Christian Tragic Hero.” He begins by calling Greek tragedy the tragedy of necessity, which leaves the spectator sorry that things had to happen as they did. In Christian tragedy, which he calls the tragedy of possibility, the spectator thinks, “What a pity it was this way when it might have been otherwise.” By Christian he means that an author’s idea of what a person is derives from Christian doctrine, whether or not the author believed it.',
          'Auden says that a Greek hero begins exceptionally fortunate and ends ruined, and that Ahab starts where the Greek hero finishes, as a man marked out by misfortune. A Greek audience would have had to take the lost leg as a punishment for sin. For Ahab, Auden says, it is a temptation and “an opportunity to choose.” Ahab chooses wrongly and keeps to his choice, and in doing so he punishes himself.',
          'In *The Enchafèd Flood*, the book of his 1949 lectures on the sea in Romantic writing, Auden asks what the loss of the leg was telling Ahab to become. The question, he says, can be answered only in the negative: “At least, not to go on whaling.” He guesses that the loss told Ahab to stop being someone set apart from other people by his abilities, and to become a happy husband and father or a monk. Auden notes that Ahab does not call his punishment just and does not declare, as Job does in the Bible, that he will trust the one who slays him. Auden has him say instead, “Thou art guilty and shalt be punished,” without naming the one addressed.',
          'Auden says that nothing in Ahab’s nature wants to go chasing a whale around the world, old and maimed as he is, and that by Ahab’s own admission what it wants is peace, a family and happiness. It is as if Ahab, knowing that God wanted these things for him too, willed for that reason to be miserable at every moment. Auden calls him a representation of defiant despair, “perhaps the greatest in literature.”',
        ],
        sources: [
          '“The Christian Tragic Hero,” *The New York Times Book Review*, December 16, 1945, reprinted in *Prose, Volume II*, pp. 258–261.',
          '*The Enchafèd Flood*, pp. 134–137.',
        ],
      },
    },
  ],

  making: [
    {
      id: 'm11',
      kind: 'emend',
      title: 'Emend the following',
      short: 'Ten words of a canto you know have been changed',
      brief: [
        'In the spring of 1942 Auden gave a second course at Michigan, English 136, on the analysis of poetry. The first part of its final examination, on May 21, was on Milton’s “Lycidas,” which the class had been made to look up word by word (see week 4). One question printed the last eight lines of the poem with about a dozen words changed. The whole instruction was “Emend the following.”',
        'This exercise asks the same question about a canto you know by heart. To emend a passage is to find the words in it that are wrong and put the right ones back. The end of Canto V of the *Inferno* is printed below with ten words changed.',
      ],
      rules: [
        'Work from memory. Do not open the canto.',
        'A correction must be the word that your version of the canto has at that place, spelled as it is printed there. Capital letters and accents do not count, and the British and American spellings of a word are taken as the same.',
        'You cannot finish until you have marked at least seven words and written a correction for each. Ten words were changed, so if you are sure of fewer than seven, mark the ones you most suspect until you have seven. The page shows which of your corrections were right only after you finish.',
        'The page lists with your result every unchanged word that you marked and corrected, so once you have seven, mark another word only if you believe it has been changed.',
      ],
      emend: {
        versions: {
          temple: {
            cut: ['dante-temple', V, 40, 46],
            swap: [
              [0, 'greater', 'sharper'], [0, 'happy', 'former'], [0, 'teacher', 'master'], [1, 'weeps', 'sighs'], [2, 'pastime', 'instruction'],
              [2, 'alone', 'content'], [3, 'colour', 'look'], [3, 'moment', 'verse'], [5, 'mouth', 'hand'], [6, 'dead', 'tired'],
            ],
            cite: 'From Carlyle’s translation of *Inferno* V, with ten words changed.',
          },
          longfellow: {
            cut: ['dante-longfellow', V, 40, 47],
            swap: [
              [0, 'greater', 'sharper'], [1, 'happy', 'former'], [2, 'Teacher', 'Master'], [5, 'weeps', 'sighs'], [6, 'delight', 'instruction'],
              [8, 'Alone', 'Content'], [10, 'colour', 'laughter'], [11, 'point', 'verse'], [15, 'mouth', 'hand'], [21, 'dead', 'tired'],
            ],
            cite: 'From Longfellow’s translation of *Inferno* V, with ten words changed.',
          },
          italian: {
            cut: ['dante-italian', V, 40, 47],
            swap: [
              [0, 'maggior', 'peggior'], [1, 'tempo', 'giorno'], [2, 'dottore', 'signore'], [5, 'piange', 'geme'], [6, 'diletto', 'dispetto'],
              [8, 'soli', 'lieti'], [10, 'lettura', 'scrittura'], [11, 'punto', 'verso'], [15, 'bocca', 'mano'], [21, 'morto', 'stanco'],
            ],
            cite: 'From *Inferno* V, with ten words changed.',
          },
        },
        min: 7,
        after: [
          'Auden’s examination changed Milton’s words in the same way. It calls the swain (the shepherd who has sung the poem) “comely,” where Milton wrote “uncouth,” and has him touch the stops “of various pills,” where Milton wrote “quills.” The first change makes good sense, and only memory will catch it. The second makes nonsense, and a careful reader who has never seen the poem can catch it.',
          'All ten changes in this exercise are of the first kind. Go back to each line where you missed one and learn it again.',
        ],
      },
      reflect: 'Which changes did you pass over, and why did each sound right? If you caught all ten, say which was hardest to catch.',
      source: [
        'The examination for English 136, dated May 21, 1942, is printed in *Prose, Volume II*, pp. 467–470. The choice of canto and of words is this site’s.',
      ],
    },
  ],
};
