// Week 5. Shakespeare: The Tempest. Jonson: Volpone. Pascal: Pensées, Sections I to VII. Opera: The Magic Flute.

export default {
  n: 5,
  title: '*The Tempest*, *Volpone*, Pascal',
  sub: 'Shakespeare: *The Tempest*. Ben Jonson: *Volpone*. Pascal: *Pensées*, Sections I to VII',
  intro: [
    'The *Pensées* are the notes Pascal left for a book he did not live to write. Read them as notes, a few pages at a sitting. Section I opens with the difference between the mathematical mind and the intuitive mind. Auden said in his lecture on *Othello* (week 4) that Iago has the mathematical mind.',
    'The opera this week is Mozart’s *The Magic Flute*. The first question is again Auden’s own, asked in his lecture on *The Tempest*.',
  ],

  reading: [
    { work: 'tempest', text: 'tempest', by: 'group' },
    { work: 'volpone', text: 'volpone', by: 'group' },
    { work: 'pascal', text: 'pascal', from: 's01', to: 's07' },
    {
      work: 'magic-flute', text: 'magic-flute', by: 'whole', label: 'The libretto',
      paras: [
        '*The Magic Flute* takes about two and a half hours. It is sung in German, and between the musical numbers the characters speak. The English printed here comes from a libretto made for the opera’s Italian version, which was the one given in London and New York in the nineteenth century. In that version the spoken scenes are shortened and sung, and the English shortens them in the same way, so a recording in German has more speech in it than you will find on the page. The English of most of the arias follows the German words.',
        'While you listen, compare Tamino, a prince, with Papageno, the bird-catcher who is sent along with him. Tamino goes through the trials of the temple. In a spoken scene that the page leaves out, Papageno says that he wants no wisdom and is then talked into the first trial. He fails it, and in Act 2, Scene 8 he is content to go no further. Notice what each is given at the end.',
        'The words are by Emanuel Schikaneder, who also sang Papageno at the first performance, in Vienna in 1791.',
      ],
      auden: {
        paras: [
          'Auden compares this opera with *The Tempest* in “Balaam and His Ass,” an essay in *The Dyer’s Hand* (1962). According to the essay, each work has a pair, one who stands for spirit and one who stands for nature: Prospero and Caliban, Tamino and Papageno. In the play the two are at war and the blame is put on nature, and Auden calls that too gloomy.',
          'The opera he calls too hopeful. In it the two live side by side without a quarrel. Tamino earns his reward by daring the trials at the risk of his life, and Papageno earns his by being humble enough to refuse them. That refusal, Auden says, is as if Caliban had thanked Prospero for the offer of an education and declined it, preferring to stay in the jungle without clothes or speech.',
          'Auden made an English version of *The Magic Flute* with Chester Kallman, the American poet who was his partner in writing opera libretti. It was broadcast on American television in January 1956.',
        ],
        sources: ['“Balaam and His Ass,” in *The Dyer’s Hand*, pp. 130 and 134–135.'],
      },
    },
  ],

  questions: [
    {
      id: 'q05a',
      text: 'How has Prospero erred?',
      gloss: ['Auden asked this question in his lecture on the play in December 1941, near the end of the term. Look at the whole play: how Prospero lost Milan (he tells it in Act 1, Scene 2), how he rules the island, and what he gives up at the end.'],
      auden: {
        title: 'What Auden said in class, and wrote later',
        paras: [
          'Auden answered the question himself. Donald Pearce, a student in the class, wrote down after lectures what he could remember, and his account gives the answer. Prospero, Auden said, erred by neglecting the daily work of governing Milan. He wanted to perfect himself in secret studies, which he found more exciting than public duty. Auden thought it quite proper that Prospero’s brother turned him out. On the island, Auden said, Prospero learns magic, but he also learns what matters more, that the art of life is to meet the ordinary claims of living. So he gives up his magic and goes home. Auden compared this with the end of Goethe’s *Faust* (in the second part, which is not on the list), where Faust gives up knowledge and power to help build dikes.',
          'In the same lecture Auden took the play as Shakespeare’s testament, a summing-up of what he had come to think. Miranda and Ferdinand, he said, are Shakespeare’s last word on love, and love here is a plain thing that leads to marriage and children. Gonzalo is another Polonius, the old counselor in *Hamlet*, but one whom Shakespeare now respects, while the clever villains of the earlier plays have shrunk to Antonio and his hangers-on. Pearce gives Auden’s conclusion as “For the purposes of normal human life, the gentle, honest soul is best.”',
          'Three years after the course Auden published a long poem, *The Sea and the Mirror*, in which the people of the play speak after it is over. His judgment of the play in prose is in “Balaam and His Ass,” an essay in *The Dyer’s Hand* (1962), which calls *The Tempest* “a disquieting work.” According to that essay, only Alonso seems truly sorry. The others repent as people do who have been punished and frightened, and Prospero pardons them with contempt, knowing that he has them in his power. Auden says that a reader must admire Prospero but cannot like him. Prospero is cold, and the thought that he might himself have done wrong and need pardon never crosses his mind.',
          'The essay gives Caliban the better of the argument. Before Prospero came, Auden writes, the island was Caliban’s alone, and he lived there in the innocence of a savage. Prospero tried to educate him, gave it up when Caliban tried to rape Miranda, and then, instead of letting him go back to the forest, kept him as a slave and ruled him by fear. Prospero gets his fire made and his wood fetched, and Auden cannot see what Caliban gets in return.',
        ],
        sources: [
          'Pearce, “Fortunate Fall,” pp. 148–152.',
          '“Balaam and His Ass,” in *The Dyer’s Hand*, pp. 128–130.',
        ],
      },
    },
    {
      id: 'q05b',
      text: 'At the end of *Volpone* the guilty are punished and nobody is forgiven. Is the play a comedy?',
      gloss: ['The court sentences Volpone, Mosca and the others in the last scene. Jonson expected readers to object that so harsh an ending does not suit a comedy, and he answers them in the Epistle printed before the play.'],
      auden: {
        paras: [
          '“The Globe,” in *The Dyer’s Hand* (1962), is an essay about the Elizabethan stage. Auden says in it that Jonson owes less to Latin comedy than to the morality play of the Middle Ages. (In a morality play, vices and virtues fight over one figure who stands for all mankind. In the best-known example the figure is called Everyman.) The pattern of a comedy by Jonson, he writes, is the morality with one of the seven deadly sins put where Everyman stood, and the other six making what they can out of him.',
          'Later in the essay he divides comedy into two kinds. Classical comedy sorts mankind into those who have excellence and those who have none, and only the second sort, the fools and rascals and slaves, can be laughed at. Its rascals get the beating they deserve, and at the end, Auden says, the audience laughs while the people on the stage weep.',
          'According to the essay, Christian comedy holds that everyone is a sinner, so nobody is too good to be shown up. It also holds that all are forbidden to judge one another and commanded to forgive. Its people are exposed and then pardoned, and at the curtain they are laughing with the audience.',
          'Jonson’s comedies, he says, are classical, but Shakespeare’s are Christian. In your reply, compare the last scene of *Volpone* with the last scene of *The Tempest* and say whether the difference holds.',
        ],
        sources: ['“The Globe,” in *The Dyer’s Hand*, pp. 173 and 177.'],
      },
    },
    {
      id: 'q05c',
      text: 'Pascal says that you must bet on whether God exists, and that reason cannot settle the bet for you. Can a person come to believe a thing by deciding that it pays to believe it?',
      gloss: ['The wager is no. 233, in Section III. Read to the end of it, where Pascal answers people who say they are so made that they cannot believe.'],
      auden: {
        paras: [
          'In 1952 Auden introduced a selection from Søren Kierkegaard, the Danish religious writer whom you read next week. In that introduction he says that no argument can make a person believe, and that nobody can make the choice for another. He finds that neither Pascal’s “wager” nor Kierkegaard’s “leap” (his word for the step into faith) quite describes that choice, because the first sounds like prudent calculation and the second like willfulness. The wager, he grants, does remind people that in every other part of life they act on faith all the time, and willingly, so that they cannot expect religion to be different. The leap reminds them that everybody lives by faith in something, and that people whose faith gives way must jump, even if they cannot see where they will land.',
          'In *The Dyer’s Hand* (1962) he writes that accounts of choice like the wager and the leap “are interesting as dramatic literature, but are they true?” Of the few choices that decided his own life, he finds that at the time he did not know how serious they were. What had seemed a brook turned out to have been a Rubicon. He is thankful for that ignorance, because if he had known the risk he would never have dared.',
        ],
        sources: [
          '“Søren Kierkegaard,” in *Forewords and Afterwords*, pp. 178–179.',
          '“Hic et Ille,” in *The Dyer’s Hand*, p. 103.',
        ],
      },
    },
  ],

  making: [
    {
      id: 'm05',
      kind: 'table',
      title: '*The Tempest* as an opera',
      short: 'Give each part a voice, and say why',
      brief: [
        'In New York in 1946 and 1947 Auden gave a course on Shakespeare at the New School. He offered different projects to students who acted, designed for the stage or wrote. Those who wrote poems or plays were to make an opera libretto out of a comedy or a tragedy. One of the problems this raises, he noted, is the distribution of voices.',
        'Do that part of the work for *The Tempest*: decide what kind of voice is to sing each part. A part given to a bass is a different part from the same words given to a tenor.',
        'There is no one right casting of the play.',
      ],
      rules: [
        'Give each part a voice: soprano, mezzo-soprano, contralto, tenor, baritone or bass. The first three are women’s voices and the last three are men’s, each listed from high to low. A part may also be spoken, or danced, or cut.',
        'Say why in a line. Go by what the character is in the play, and not by any singer you have heard.',
        'Prospero, Ariel and Caliban must have three different voices.',
        'Each part has two boxes, one for a voice and one for a reason, twenty-two in all. Try to fill every one. If you cut a part, write that in its voice box and give the reason. The site lets you finish once sixteen boxes are filled, and then shows how Mozart cast *The Magic Flute*.',
      ],
      table: {
        columns: [
          { id: 'part', label: 'Part', width: '9rem' },
          { id: 'voice', label: 'Voice', width: '9rem', rows: 1 },
          { id: 'why', label: 'Why', rows: 2 },
        ],
        rows: [
          { id: 'prospero', cells: { part: 'Prospero' } },
          { id: 'miranda', cells: { part: 'Miranda' } },
          { id: 'ariel', cells: { part: 'Ariel' } },
          { id: 'caliban', cells: { part: 'Caliban' } },
          { id: 'ferdinand', cells: { part: 'Ferdinand' } },
          { id: 'alonso', cells: { part: 'Alonso' } },
          { id: 'antonio', cells: { part: 'Antonio' } },
          { id: 'sebastian', cells: { part: 'Sebastian' } },
          { id: 'gonzalo', cells: { part: 'Gonzalo' } },
          { id: 'stephano', cells: { part: 'Stephano' } },
          { id: 'trinculo', cells: { part: 'Trinculo' } },
        ],
        min: 16,
        key: {
          title: 'How Mozart cast *The Magic Flute*',
          intro: [
            'These are the voices of the opera you are hearing this week. In his New School lecture on *The Tempest* in 1947, as students’ notes record it, Auden matched Sarastro with Prospero, the Queen of the Night with Sycorax (the witch who was Caliban’s mother), Monostatos with Caliban, and the opera’s two lovers with Ferdinand and Miranda. In the essay from *The Dyer’s Hand* reported under the opera, the figure he sets beside Caliban is Papageno.',
          ],
          columns: [
            { id: 'part', label: 'Part', width: '11rem' },
            { id: 'voice', label: 'Voice', width: '11rem' },
            { id: 'who', label: 'Who it is' },
          ],
          rows: [
            { part: 'Sarastro', voice: 'Bass', who: 'High priest of the temple of wisdom. The part lies very low.' },
            { part: 'The Queen of the Night', voice: 'Soprano', who: 'Pamina’s mother and Sarastro’s enemy. The part lies very high.' },
            { part: 'Tamino', voice: 'Tenor', who: 'A prince. He undergoes the trials of the temple.' },
            { part: 'Pamina', voice: 'Soprano', who: 'The Queen’s daughter, held in Sarastro’s temple.' },
            { part: 'Papageno', voice: 'Baritone', who: 'A bird-catcher. He wants food, wine and a wife, and has no wish to be tried.' },
            { part: 'Papagena', voice: 'Soprano', who: 'The wife Papageno is given at the end.' },
            { part: 'Monostatos', voice: 'Tenor', who: 'A Moor, overseer of Sarastro’s slaves. He wants Pamina.' },
            { part: 'The Speaker of the temple', voice: 'Bass', who: 'The priest who meets Tamino at the temple door.' },
            { part: 'Three Ladies', voice: 'Three women’s voices', who: 'They serve the Queen.' },
            { part: 'Three Boys', voice: 'Three boys’ voices', who: 'Spirits who guide Tamino and Papageno.' },
          ],
          after: [
            'When you have heard the opera, read what Auden wrote about the two works together. It is under the opera on this week’s page.',
          ],
        },
      },
      reflect: 'In an opera an act usually ends with most of the singers on the stage together. Which scene of the play would you end your first act with, and who is singing when the curtain falls?',
      source: [
        'The projects are in the notes that Auden’s friend Alan Ansen took of the class, printed as an appendix to W. H. Auden, *Lectures on Shakespeare*, edited by Arthur Kirsch (Princeton University Press, 2000). Auden’s example was *Love’s Labour’s Lost*. The choice of *The Tempest* is this site’s. The likenesses between the two casts are in the same book, in the lecture on *The Tempest*.',
      ],
    },
  ],
};
