// Week 15. Kafka: The Castle, Chapters 7 to 18. Eliot: The Family Reunion.
// Opera: Götterdämmerung.

const swat = 'https://archive.swarthmore.edu/auden';

export default {
  n: 15,
  title: '*The Castle*. *The Family Reunion*',
  sub: 'Kafka: *The Castle*, Chapters 7 to 18. Eliot: *The Family Reunion*',
  intro: [
    'In this last week of reading you finish *The Castle*, of which about 180 pages remain. Kafka died in 1924 without finishing the book, and his friend Max Brod, to whom he had left his papers, had the manuscript printed two years later. The translation of 1930, which is the one printed here, follows that first edition and stops at the end of Chapter 18.',
    'T. S. Eliot’s play *The Family Reunion* is still in copyright in the United States, so it is not printed here. If you did not get a copy last week, get one now. The note under the play in the reading list below has a link for borrowing it from the Internet Archive. The play runs to about 75 pages. It was published in 1939, two years before the course, which makes it the newest of the required books.',
    'Wagner’s opera *Götterdämmerung*, which takes about four and a half hours to hear, is also assigned this week. The exercise is a chart that Auden wrote across the blackboard near the end of the term. *Paradiso* XXXIII is due at the end of the week. The examination, five cantos of the *Divine Comedy* written from memory in three hours, falls on the same day, though you may take it earlier or later.',
  ],

  reading: [
    {
      work: 'castle', text: 'castle', from: 'c07', to: 'c18',
      ranges: [
        ['c07', 'c12', 'Chapters 7–12'],
        ['c13', 'c14', 'Chapters 13–14'],
        ['c15', 'c15-5', 'Chapter 15'],
        ['c16', 'c18', 'Chapters 16–18'],
      ],
    },
    { work: 'family-reunion', items: [{ key: 'family-reunion/all', label: 'The whole play', pages: 75 }] },
    {
      work: 'gotterdammerung', text: 'gotterdammerung', by: 'whole', label: 'The libretto',
      paras: [
        '*Götterdämmerung* runs about four and a half hours, in a prelude and three acts. The English translation printed here calls it *The Twilight of the Gods*.',
        '*Götterdämmerung* closes the cycle of four operas called *The Ring of the Nibelung* and is the only part of the cycle on the list. Wagner wrote the words himself, in German. He began in 1848 with a plan for a single opera about the death of the hero Siegfried, which became this one, and then wrote the words of the other three, working backward through the story. All four were first staged together at Bayreuth in August 1876.',
        'You are reading only the end of the story, but in three places the characters tell part of what has gone before: the three Norns, who spin the rope of fate, in the Prelude; Waltraute, one of the Valkyries (the women warriors of the god Wotan), who comes to her sister Brünnhilde, the heroine, in Act 1; and Siegfried himself in Act 3.',
        'While you listen, notice which characters know what is going to happen, and what each of them does about it.',
      ],
      auden: {
        title: 'What Auden wrote about the opera',
        paras: [
          'In “Mimesis and Allegory,” a lecture given at Columbia University in September 1940 and printed the next year, Auden says that the *Ring* is, in general, about an old order coming to its end. A historian, he says, can read it as Germany in the nineteenth century, with the gods as a reactionary nobility, the dwarfs as a money-grabbing middle class, and the giants as a strong and stupid working class. On that reading a fearless hero and an emancipated woman, Siegfried and Brünnhilde, deliver the country from all three. (In this opera the gods are only talked about until their hall is seen burning at the end, the giants are dead, and the dwarfs are represented by Alberich and by Hagen, his son by a mortal mother.)',
          'That reading runs into trouble in this opera, Auden goes on. “Siegfried and Brünnhilde do not create the new world, they go up in flames with the old.” The ring goes back to the Rhine. The audience is led to expect, he says, that the world will be made new, but nothing definite is said about how or by whom.',
          'Auden also says that the characters behave oddly, and that the oddness does not lie in their making mistakes and paying for those mistakes later. In Sophocles’ tragedy *Oedipus the King*, which is not on the list, Oedipus does not know what he is doing, though the audience does. The characters of the *Ring*, by contrast, are odd because they know in advance that they are making mistakes. They go on predicting the disaster in detail, and “they deny their own knowledge.”',
          'Auden ranks Wagner highest among the Romantic artists in one of the notes he wrote to *New Year Letter*, the long poem he published in the spring of 1941. The reason he gives is that Wagner carries furthest what the note calls the Romantic heresy, “the exaltation of causal necessity over logical necessity.” As this site reads the two terms, causal necessity is the force of what cannot be helped, such as desire or a curse, and logical necessity is the force of a reason that has been thought out. On that reading, characters who know better and go on all the same put the first above the second. Of all the characters in the *Ring*, Auden finds a sign of logic only in Fricka, the goddess of marriage, who does not appear in this opera, and he adds that Wagner makes her unsympathetic.',
          'Another note says that Søren Kierkegaard, whose *Fear and Trembling* you read in week 6, was the first, as far as Auden knew, to mark off tribulations clearly from temptations. A tribulation is a trouble that comes from outside and can only be endured, and a temptation is a conflict within a person that the will has to settle by acting. The note on Wagner calls the operas masterpieces when they are taken as studies in tribulation. Taken as dramatic plots, it says, they are absurd, because the characters know in advance that they are making mistakes, which is the point the lecture had made. The poem describes the Wagnerian hero in a couplet: “His intellectual life fulfilled / In knowing that his doom is willed.”',
          'In a review of 1969 Auden summarizes the theory of opera that Wagner set out in 1851. It allowed no duets or ensembles, gave the work of the chorus to the orchestra, and replaced the set aria with continuous melody. From *Die Meistersinger* (1868) on, Auden says, Wagner dropped the theory altogether and wrote grand opera of the kind the nineteenth century already knew. Auden agrees with Bernard Shaw, the playwright and former music critic, that *Götterdämmerung*, with its poisoned drinks and its ensemble of conspirators, is close kin to Verdi’s opera *Un Ballo in Maschera* (1859).',
          'Before you listened you were asked to notice which characters know what is going to happen, and what each of them does about it. Compare what you noticed with what Auden says the characters know (the third paragraph under this heading), and ask whether what they suffer is a tribulation or a temptation as the note defines the two (the fifth). You do not need to write anything down.',
        ],
        sources: [
          '“Mimesis and Allegory,” *English Institute Annual, 1940* (Columbia University Press, 1941), reprinted in *Prose, Volume II*, pp. 78–87. The passage on the *Ring* is on pp. 81–82.',
          '*New Year Letter* (Faber and Faber, 1941), Part III, and the notes to lines 1244 and 1432.',
          '“The Greatest of the Monsters,” in *Forewords and Afterwords*, pp. 251–252.',
        ],
      },
    },
  ],

  questions: [
    {
      id: 'q15a',
      text: 'If the whale is the object of Ahab’s quest, who or what is the object of K’s? Of Dante’s?',
      gloss: ['These are Auden’s own words when he assigned *The Castle*, as they were recorded by Donald Pearce, a student in the class who wrote down after lectures what he could remember.'],
      auden: {
        title: 'What Auden said and wrote about K.',
        paras: [
          'Pearce’s notes give no answer of Auden’s to this question. In assigning the book, Auden had told the class that it was to the twentieth century what Dante’s poem was to the fourteenth, and that they were to read it with the *Divine Comedy* beside it (see the third question of week 14). As soon as he had asked the question at the top of this page, he went to the phonograph, and while he put a record on he named Ahab and the White Whale, and K. and the Castle, as two cases of the relation of an individual to fate. He then played the class the second movement of Beethoven’s Fourth Piano Concerto (see week 13).',
          'In February 1941 Auden reviewed three books by Kafka, *The Castle* among them, in *The New Republic*, under the title “The Wandering Jew.” Kafka’s novels, he says, use the oldest device in literature, the quest, and should be read beside the older quests. The hero of a fairy tale is the lucky third son, and his success is foretold. Later heroes are marked out by being morally better than most people or, like Goethe’s Faust and Ibsen’s Peer Gynt, morally worse. Faust and Peer Gynt have an easy time of it, Auden says, because they take what is arbitrary in themselves for necessary. As this site reads the phrase, they follow their own wishes as though those wishes were laws.',
          'Auden calls K. “the mirror-image of Faust.” The goal of a Kafka hero, he says, is as clear as the goal of the old quests, and everyone recognizes it: in *The Castle*, everyone wants to live near the Castle. For the heroes before K., being exceptional in some way was the one hope of success. K. is exceptional without being able to tell in what way, and for him that is the source of his troubles. Auden then gives what he takes Kafka to be saying: to have faith is to accept something as necessary, to become exceptional is to become reflective, and to a reflective person what is necessary looks arbitrary. On this account Faust has an easy time because he never notices that the thing he obeys is arbitrary, while K. can no longer hide from himself how arbitrary everything looks, and so is always in danger of losing his faith. By that measure, the same passage says, Faust and Peer Gynt were never exceptions. They stand for the ordinary person who does not reflect, if there still is such a person.',
          'Near its end the review says: “Kafka is important to us because the predicament of his hero is the predicament of the contemporary man.” Life in an industrial civilization, Auden adds, turns every person into a K., exceptional and reflective.',
          'In an essay of 1946, “K’s Quest,” Auden says that K. fails because he is an individual, and that “he cannot become what he wishes, the Land Surveyor, because he cannot cease to be K.”',
          '“The I Without a Self,” an essay in *The Dyer’s Hand* (1962), says that in a typical story by Kafka the goal is the hero’s alone and that he has no rivals for it, where the review of 1941 had said that everyone recognizes the goal. The essay puts the difference between K. and the heroes before him as two questions. The hero of every earlier quest, Auden says, knows what ought to be done and asks only “Can I do it?” Homer’s Odysseus, for one, knows that he must not heed the Sirens’ song. K.’s question is “What ought I to do?” He is not tempted, Auden says, since to be tempted is to have to choose between good and evil. K. is sure that what he does next matters a great deal, but he has no idea what it should be and can only guess. When his guess is wrong, he suffers what a wrong choice would have brought on him, and he has to feel just as responsible.',
          'The hero of the older quests, Auden goes on, earned by gifts and deeds the right to say “I.” K. starts as an “I,” with no gifts or deeds to show for it, and that alone is his guilt. In *The Castle*, Auden writes, “K, the letter, wants to become a word, land-surveyor.” K. wants a self such as other people have, he explains, and that is what K. is refused.',
          '“The I Without a Self” also warns against interpreting Kafka. He wrote parables, and the essay holds that a parable means something different to each reader. A critic can help other people see what a novel or a play contains, but a critic who sets about interpreting a parable, Auden says, “will only reveal himself.”',
          'Take the paragraphs above as Auden’s own response to the book. This site chose them for what they say about K. On Ahab and on Dante they give only what Auden said to the class when he assigned the book. In your reply, compare what Auden says K. wants with what you wrote, without trying to settle which of you is right.',
        ],
        sources: [
          'Pearce, “Fortunate Fall,” p. 135 for the question and for what Auden said about Dante’s poem, and p. 136 for what he said at the phonograph.',
          '“The Wandering Jew,” *The New Republic*, February 10, 1941, reprinted in *Prose, Volume II*, pp. 110–113.',
          '“K’s Quest,” in *The Kafka Problem*, edited by Angel Flores (New Directions, 1946), reprinted in *Prose, Volume II*, pp. 282–286.',
          '“The I Without a Self,” in *The Dyer’s Hand*, pp. 159–160 and 162–163.',
        ],
      },
    },
    {
      id: 'q15b',
      text: 'Amalia tore up Sortini’s letter. The Castle did nothing to her family, and the village ruined it. Max Brod, who edited the book, compared her case with Abraham’s in *Fear and Trembling*. Does the comparison hold?',
      gloss: ['Read Chapter 15, all five parts. Brod’s note, which stands at the end of the first American edition of 1930, is not printed here. In it he says that the Castle is nearly what theologians mean by grace. Grace, as he explains it, is God’s guidance of human destiny, which sends favors and punishments alike and can be neither earned nor reached. He compares Sortini’s letter with the command to Abraham: God asked of Abraham what was a crime, and the official asks of the girl what is plainly immoral. You read Kierkegaard on Abraham in week 6.'],
      auden: {
        title: 'What Auden said and wrote about the Castle and its officials',
        paras: [
          'The first American edition of 1930 has two notes that are left out here. Edwin Muir, one of the translators, says at the front that the subject of the novel is human life as it is acted on by “divine law and divine grace,” and he proposes reading it as a modern version of *Pilgrim’s Progress*, John Bunyan’s allegory of 1678. At the back is the note by Brod described under the question, which takes the Castle for grace and compares Sortini’s letter with the command to Abraham.',
          'In 1941, at the lecture where Auden assigned the book, he told the class that it was a theological and psychological parable, and that it was to the twentieth century what Dante’s poem was to the fourteenth. In the notes of Donald Pearce, a student in the class who wrote down after lectures what he could remember, Auden does not say what the Castle stands for in theology. Later in the same lecture he named Ahab and the White Whale, and K. and the Castle, as two cases of the relation of an individual to fate (see the second question of week 13). The next spring Pearce heard him say that the Castle is the unconscious and the village the conscious mind (see the fourth question of week 14).',
          'Auden argues against the reading of the Castle as grace in “The I Without a Self,” an essay in *The Dyer’s Hand* (1962). With a writer of parables such as Kafka, he says, facts about the author’s life are a great help, if only by ruling out false readings. He then describes a Czech novel, Božena Němcová’s *The Grandmother*, of which Brod gives an account in a new edition of his life of Kafka. In Němcová’s novel the village lies under a castle whose owner, a duchess, is kind, while the officials and servants who stand between her and the villagers are shown as plainly bad. Auden takes this to suggest that the critics who saw servants of God’s grace in the people of Kafka’s Castle had read the book wrongly, and that the reading of the critic Erich Heller is right in the main. He quotes Heller, who calls the Castle the garrison “of a company of Gnostic demons,” holding its ground against an impatient soul. (The Gnostics were sects of the first Christian centuries who taught that hostile powers stand between the soul and the true God.) The Castle’s officers, Heller says, “are totally indifferent to good if they are not positively wicked,” and they arouse dread and disgust but no reverence.',
          '“The I Without a Self” does not mention Amalia or Sortini. The link between Amalia’s case and what the essay says about the officials is this site’s. In your reply, say what becomes of Brod’s comparison if the officials are what Heller and Auden take them to be, and whether Amalia’s refusal then looks different from Abraham’s obedience.',
        ],
        sources: [
          'Edwin Muir’s Introductory Note and Max Brod’s Additional Note, in Kafka, *The Castle* (Knopf, 1930).',
          'Pearce, “Fortunate Fall,” pp. 135–136 and 155.',
          '“The I Without a Self,” in *The Dyer’s Hand*, pp. 160–161.',
        ],
      },
    },
    {
      id: 'q15c',
      text: 'At the end of the play Harry leaves Wishwood to follow the Eumenides, and the house goes to his brother John. Why is Harry called, and not John?',
      gloss: ['The word “called” is Auden’s. He uses it in the religious sense, of a person chosen for a way of life and summoned to it. The Eumenides come from the *Oresteia* of Aeschylus, a set of three plays of which *Agamemnon*, one of the two tragedies offered in week 2, is the first. At the end of the third, the Furies, who have hunted Agamemnon’s son Orestes for killing his mother, are turned into the Kindly Ones, which is what the name Eumenides means. Decide whether Eliot’s Eumenides change in the course of the play, or whether Harry does.'],
      auden: {
        title: 'What Auden wrote about the play',
        paras: [
          'No writing of Auden’s about the play from the years of the course has been found.',
          'The nearest thing is a note to *New Year Letter*, Auden’s long poem of 1941. The note is about American literature as a whole and does not mention the play. It places Eliot in an American line with Poe, Emerson, Hawthorne, Melville and Henry James, says that this tradition stands much closer to Dostoevsky than to Tolstoy, and calls it “a literature of lonely people.” Ask yourself whether Harry, who leaves his family at the end of the play, is one of the lonely people the note speaks of.',
          'Reviewing Eliot’s collected poems and plays in 1953, Auden hears a snobbish note now and then in this play and in another of Eliot’s plays, *The Cocktail Party* (1949), and he puts it down to technique. Eliot, Auden says, wanted a verse for the stage that would not be arty, and had put off the problem of a dramatic convention. He did so by keeping, just as he found them, the long-standing conventions of English high comedy, in which the scene and the leading characters belong to the aristocracy. So long as the subject is a worldly one, such as love between a man and a woman, and the values are social, those conventions work perfectly well, Auden says, because riches and good breeding can stand for gifts and virtues. They fail once the theme is spiritual election (the calling of one person and not another) and the gulf that separates Christian faith from every worldly value. He is “absolutely certain” that Eliot did not mean the audience to think “that Harry is called and not John because John is stupid.” But the convention of comedy that Eliot works in, he says, cannot help giving the audience that idea.',
          'Auden wrote about Harry again in the foreword to *Secondary Worlds* (1968), the book of the lectures he gave in Eliot’s memory in 1967. He notes that the hero of Eliot’s first full-length play, *Murder in the Cathedral* (1935), was a martyr known to history, Thomas Becket, the archbishop of Canterbury who was killed in his cathedral in 1170. The audience is not told what happens to Harry, Auden says, but Harry “decides to take up a way of life which may well lead” to martyrdom.',
          'In your reply, say whether the reason you gave in your paper is the one that Auden rules out in the review of 1953. If it is, say whether the play suggested it to you in the way he describes, and if it is not, say whether anything in the play could lead an audience to the reason he rules out.',
        ],
        sources: [
          '*New Year Letter* (Faber and Faber, 1941), the note to line 1566.',
          '“T. S. Eliot So Far,” *The Griffin*, March 1953, reprinted in *A Company of Readers*, edited by Arthur Krystal (Free Press, 2001), pp. 225–228. The two phrases quoted are also in a note on p. 473 of Edward Mendelson’s *Early Auden, Later Auden* (Princeton University Press, 2017).',
          '*Secondary Worlds* (Random House, 1968), Foreword, pp. 11–12.',
        ],
      },
    },
    {
      id: 'q15d',
      text: 'The course is called “Fate and the Individual in European Literature.” Take three of its books, from three different centuries. In each, say what the individual is up against, and whether that individual could have done otherwise.',
      gloss: ['One way to choose is to take one book from before 1700, one from the nineteenth century and one from the twentieth.'],
      auden: {
        title: 'What Auden said and wrote that bears on the title',
        paras: [
          'No statement by Auden of what the title meant, or of why he chose these books, has been found. Charles Miller, who was in the class, remembered forty years later that on the first day Auden spoke of “our theme of fate and the individual in European literature.”',
          'In an article of March 1941, “James Joyce and Richard Wagner,” Auden says that the art of every age down to about 1850 was built on two contrasts. The first sets order and free will against chaos and fate, and the second sets the hero against the churl. The churl is “the passive slave of circumstance.” Heroes pit their will against accident and make order for themselves and for others, but heroism has a price: “to choose to do or think something means to choose not to do or think anything else.” As an example he gives Antigone, the heroine of the tragedy by Sophocles that was one of the two offered in week 2. She cannot both keep the law and do what she owes her brother, and knowing this she makes her choice and wills her death. The disorder is in her situation, he says, and not in her.',
          'A month earlier, in a review of Kafka called “The Wandering Jew,” Auden had told the history of one kind of hero, the one who goes on a quest. In the fairy tale he is the third son, and his success is foretold. Galahad, the knight who attains the Holy Grail in the medieval legend, and Christian, the pilgrim of John Bunyan’s *Pilgrim’s Progress* (1678), are marked out, Auden says, by being morally better than most people. Goethe’s Faust and Ibsen’s Peer Gynt are marked out by being morally worse: “The Hero has become a Bohemian.” The last is K., who is marked out but cannot tell in what way. Faust, Peer Gynt and K. are heroes of books on the list, where they come in the same order (weeks 6, 7 and 14 on this site). On the published copy of the list, though, *Faust* is marked “Omit.” Nothing has been found in which Auden says that he built the course from the review.',
          'In class Auden played the second movement of Beethoven’s Fourth Piano Concerto. The piano, he said, defies the orchestra as a person defies fate, and he asked whether the piano found its way back too late (see week 13). In 1945 he called Greek tragedy the tragedy of necessity, in which what happens had to happen, and Christian tragedy the tragedy of possibility, in which it could have been otherwise (see the third question of week 11). What he wrote in 1948 on Greek and modern tragedy is reported under the first question of week 2 and the second and third questions of week 4. In your reply, apply the contrast between necessity and possibility to the last clause of the question. Say for each of your three books whether what happened had to happen.',
        ],
        sources: [
          'Charles H. Miller, *Auden: An American Friendship* (Scribner, 1983), pp. 26–27.',
          '“James Joyce and Richard Wagner,” *Common Sense*, March 1941, reprinted in *Prose, Volume II*, pp. 115–118.',
          '“The Wandering Jew,” *The New Republic*, February 10, 1941, reprinted in *Prose, Volume II*, pp. 110–113.',
          'Pearce, “Fortunate Fall,” pp. 135–136, for the record played in class.',
          '“The Christian Tragic Hero,” *The New York Times Book Review*, December 16, 1945, reprinted in *Prose, Volume II*, pp. 258–261.',
        ],
      },
    },
  ],

  making: [
    {
      id: 'm15',
      kind: 'table',
      title: 'The chart of the course',
      short: 'Nine pairs of terms from Auden’s blackboard: find a book, an author or a character for each term',
      brief: [
        'Auden did not keep to the order of the reading list in class, and he lectured on *The Tempest* near the end of the term. At the close of that lecture, before he told the class about the examination, he went to the blackboard and copied out a chart he had made for them. It was in two lines, one above the other, and when he had finished it ran the whole width of the room. Donald Pearce, a student in the class who wrote down after lectures what he could remember, reports him saying that it was “a summary of certain themes and relationships we had been concerned with during the semester.”',
        'Pearce did not have to remember the chart, because he copied it down as Auden wrote it. It has nine pairs of terms, with one term of each pair in the upper line and the other below it. Pearce gives the terms without explaining them and without naming any books, so there is no key.',
      ],
      rules: [
        'For each pair, name a book, an author or a character from the reading of all fifteen weeks for the upper term and another for the lower, counting an opera as a book.',
        'Give your reason in a sentence. If a term is not plain to you, add a few words on what you take it to mean.',
        'Use at least ten different books in all. Characters count as the books they are in. An author counts as one book, in addition to any book by that author that you name elsewhere.',
        'Fill at least fourteen of the eighteen boxes. The other four may stay empty if you cannot place a term.',
      ],
      table: {
        columns: [
          { id: 'top', label: 'Upper line', width: '9rem' },
          { id: 'bottom', label: 'Lower line', width: '9rem' },
          { id: 'one', label: 'A book, author or character for the upper term, and why', rows: 3 },
          { id: 'two', label: 'A book, author or character for the lower term, and why', rows: 3 },
        ],
        rows: [
          { id: 'health', cells: { top: 'Health', bottom: 'Sickness' } },
          { id: 'stability', cells: { top: 'Bourgeois social stability', bottom: 'Revolution' } },
          { id: 'gaiety', cells: { top: 'Gaiety', bottom: 'Sadness' } },
          { id: 'will', cells: { top: 'Voluntarism', bottom: 'Determinism' } },
          { id: 'integrity', cells: { top: 'Faith in personal integrity', bottom: 'Doubts about personal integrity' } },
          { id: 'science', cells: { top: 'Pragmatic specialized science', bottom: 'Synthetic heroic ironism' } },
          { id: 'values', cells: { top: 'Classical values', bottom: 'Romantic values' } },
          { id: 'church', cells: { top: 'Catholicism', bottom: 'Protestantism' } },
          { id: 'morality', cells: { top: 'Pragmatic and practical morality', bottom: 'Uncoded morality' } },
        ],
        min: 14,
        after: [
          'No key follows, because Pearce recorded none.',
          `A larger chart of the same kind survives. Auden wrote it out for a seminar on Romanticism at Swarthmore College in 1943, and [the college has published it](${swat}/romanticism.html).`,
        ],
      },
      reflect: 'Read along each line. Do the nine upper terms belong together? What would you call each line?',
      source: [
        'Pearce, “Fortunate Fall,” p. 153.',
      ],
    },
  ],
};
