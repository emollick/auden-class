// Week 4. Shakespeare: Henry IV, Part 2; Othello; Hamlet.

const H = 'hamlet';

export default {
  n: 4,
  title: '*Henry IV*, *Othello*, *Hamlet*',
  sub: 'Shakespeare: *Henry IV, Part 2*; *Othello*; *Hamlet*',
  intro: [
    'This week you read three plays by Shakespeare. Auden’s list names only the second part of *Henry IV*, and that is the only part this site prints or tests you on. Donald Pearce, a student in the class, wrote down after lectures what he could remember, and his notes show that Auden lectured on the first part too.',
    'You do not need to read the first part, but you need to know how it ends. The King’s army beats the rebels in a battle at Shrewsbury, and his son Prince Hal kills their leader, Hotspur. Hal is known for the time he spends in the London taverns with Sir John Falstaff, a fat old knight. The second part opens as news of the battle reaches Hotspur’s father, Northumberland.',
    'Auden gave the class the first of this week’s questions himself.',
    'Begin learning *Inferno* V by heart this week. The whole canto is due at the end of week 6.',
  ],

  reading: [
    { work: 'henry-iv-2', text: 'henry-iv-2', by: 'group' },
    { work: 'othello', text: 'othello', by: 'group' },
    { work: 'hamlet', text: 'hamlet', by: 'group' },
  ],

  questions: [
    {
      id: 'q04a',
      text: 'What have the minds of Iago and Falstaff in common?',
      gloss: ['Auden gave the class this question at the end of his lecture on *Othello*, along with three others. One of the others was why Shakespeare was so taken up with minds of this kind. Answer the question above. You may answer the one about Shakespeare as well.'],
      auden: {
        title: 'What Auden said in class, and wrote later',
        paras: [
          'Auden told the class to take no notes, so Donald Pearce, one of the students, wrote down after lectures what he could remember. The next two paragraphs are from his notes.',
          'Iago, Auden said, is cold and cannot love other people, and has learned to make a strength of this lack. He is the only brilliant person in *Othello*, with what the French writer Pascal calls the geometrical mind (the mathematical mind, in the translation assigned in week 5), and he settles every question by reasoning alone. Auden thought it significant that Iago alone in the play shows any knowledge of the Bible, and went on to call him “the villain as inverted saint,” a man who at bottom wanted to be a saint. In the saint and in the villain “Ethics and Esthetics have become almost the same thing,” and both are free of the scruples that govern most people’s dealings with others.',
          'The next lecture began: “Falstaff is a comic edition of Iago.” The two are alike, Auden said, in leaving right and wrong out of their dealings with people. Each keeps life at arm’s length without seeming to, Iago in the manner of a scientist and Falstaff in the manner of a playwright. In these lectures Falstaff is an opportunist without a conscience and a disappointed man, who drinks to swallow his disappointments and plays the child so as not to be hurt. Auden called Prince Hal an unfeeling Machiavel, or schemer, who like Iago is thought honest and sociable and like Iago is expert at deceiving. Hal has no personal ties and Falstaff has no other kind, and so the break between them could not be avoided.',
          'Auden did not keep this view of Falstaff. In “The Prince’s Dog,” an essay he collected in *The Dyer’s Hand* (1962), he asks why, whenever Falstaff is on the stage, nobody looks at Hal. He answers that *Henry IV* is also a parable. On the surface, he says, Falstaff is a Lord of Misrule, the mock ruler who presides over holiday revels. In the parable he is a comic symbol of charity in its older sense of love, and Prince Hal stands for worldly justice. In “The Joker in the Pack,” an essay on *Othello* in the same book, Auden describes Iago as a practical joker. Every deed in the play, he says, is Iago’s, and the other characters perform no actions of their own but only behave.',
        ],
        sources: [
          'Pearce, “Fortunate Fall,” pp. 134 and 142–148.',
          '“The Prince’s Dog” and “The Joker in the Pack,” in *The Dyer’s Hand*, pp. 198, 246 and 253.',
        ],
      },
    },
    {
      id: 'q04b',
      text: 'The Ghost tells Hamlet in Act 1 what he must do. Why is it not done until Act 5?',
      gloss: ['Hamlet gives reasons of his own in three places: the end of Act 2, Scene 2; Act 3, Scene 3; and Act 4, Scene 4. Weigh them against what he does.'],
      auden: {
        paras: [
          'Auden wrote a short note on Hamlet and Don Quixote, the hero of Cervantes’s novel. It is one of several notes on Don Quixote in “Genius & Apostle,” an essay in *The Dyer’s Hand* (1962).',
          'Hamlet, the note says, has no faith in God and none in himself, and so he can say who he is only by what other people have done: he is the man whose uncle murdered his father and then married his mother. He envies the heroes of Greek tragedy, who are made what they are by their situation. That envy, the note says, is why Hamlet cannot act. He can only “act” in the player’s sense, and try one possibility after another. Auden had written in 1948, in “The Greeks and Us,” his introduction to a book of Greek writers, that in a Greek tragedy the situation by itself can make a hero guilty.',
          'The note contrasts Hamlet with Don Quixote, who believes he is a knight and cannot see himself as playing a part at all, and is therefore the opposite of an actor.',
        ],
        sources: [
          '“Genius & Apostle,” in *The Dyer’s Hand*, pp. 451–452.',
          '“The Greeks and Us,” in *Forewords and Afterwords*, p. 20.',
        ],
      },
    },
    {
      id: 'q04c',
      text: 'Othello kills his wife on the word of one man. At what point could he still have stopped?',
      gloss: ['Give the act and the scene, and quote the line. The plays are printed on this site without line numbers.'],
      auden: {
        paras: [
          '“The Globe,” an essay in Auden’s book *The Dyer’s Hand* (1962), is about the Elizabethan stage, and in it he writes: “In a Greek tragedy everything that could have been otherwise has already happened before the play begins.” In an Elizabethan tragedy, the essay goes on, the hero can still turn back. Othello, for example, could at any point before the murder have governed his jealousy, learned the truth and given the play a happy ending.',
          'Auden’s essay on *Othello*, in the same book, says that Othello is brought down by another man and originates nothing himself, so that an audience pities him without respecting him and saves what Auden calls its aesthetic respect for Iago.',
          'Auden had taken a different view in 1948, in “The Greeks and Us,” his introduction to a book of Greek writers, where he called Othello a tragic hero in the modern sense. In Greek tragedy, he wrote, heroes suffer a punishment sent from outside, and by bearing it they are reconciled to the law in the end. The suffering that a modern audience finds tragic is suffering that heroes make for themselves and insist on, and so they die defiant and unreconciled.',
        ],
        sources: [
          '“The Globe” and “The Joker in the Pack,” in *The Dyer’s Hand*, pp. 174–175 and 246–247.',
          '“The Greeks and Us,” in *Forewords and Afterwords*, p. 21.',
        ],
      },
    },
  ],

  making: [
    {
      id: 'm04',
      kind: 'table',
      title: 'Sixteen words in *Hamlet*',
      short: 'Dictionary work: what each word meant when Shakespeare used it',
      brief: [
        'The term after this course, Auden had a class look up every word of Milton’s “Lycidas” in the *Oxford English Dictionary* and list each sense recorded for it up to 1637, the year the poem was written. A student who did the work said afterward that he could not claim to know any other English poem nearly so well.',
        'At the New School in New York, the final examination of Auden’s course on Shakespeare in the spring of 1947 asked, among other things, for the meanings of single words in *Hamlet*. Below are sixteen words from the play, chosen by this site, that no longer mean what they meant in Shakespeare’s time.',
      ],
      rules: [
        'For each word, write what it means in the line. A word or a phrase is enough.',
        'Use a dictionary that shows what a word meant in Shakespeare’s time. The *Oxford English Dictionary* does, and traces the history of each word as well, but you will need a library that subscribes to it. [Alexander Schmidt’s *Shakespeare Lexicon*](https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.03.0079) is free, and lists the senses each word has in the plays.',
        'Do not guess from the sense the word has now.',
        'Fill in the meaning of at least twelve of the sixteen words. You can then finish, and the site shows the key.',
      ],
      table: {
        columns: [
          { id: 'word', label: 'Word', width: '7rem' },
          { id: 'line', label: 'The line' },
          { id: 'sense', label: 'What it means in the line', rows: 2 },
        ],
        rows: [
          { id: 'rivals', cells: { word: 'rivals', line: { cut: [H, 'a1s1', 23, 23, { lines: [1, 2] }] } } },
          { id: 'approve', cells: { word: 'approve', line: { cut: [H, 'a1s1', 51, 51, { lines: [5, 6] }] } } },
          { id: 'extravagant', cells: { word: 'extravagant', line: { cut: [H, 'a1s1', 124, 124, { lines: [5, 6] }] } } },
          { id: 'tell', cells: { word: 'tell', line: { cut: [H, 'a1s2', 138, 138] } } },
          { id: 'doubt', cells: { word: 'doubt', line: { cut: [H, 'a1s2', 158, 158, { lines: [0, 1] }] } } },
          { id: 'admiration', cells: { word: 'admiration', line: { cut: [H, 'a1s2', 86, 86, { lines: [0, 1] }] } } },
          { id: 'character', cells: { word: 'character', line: { cut: [H, 'a1s3', 21, 21, { lines: [0, 1] }] } } },
          { id: 'censure', cells: { word: 'censure', line: { cut: [H, 'a1s3', 21, 21, { lines: [11, 11] }] } } },
          { id: 'eager', cells: { word: 'eager', line: { cut: [H, 'a1s4', 5, 5] } } },
          { id: 'lets', cells: { word: 'lets', line: { cut: [H, 'a1s4', 55, 55, { lines: [0, 0] }] } } },
          { id: 'secure', cells: { word: 'secure', line: { cut: [H, 'a1s5', 37, 37, { lines: [18, 19] }] } } },
          { id: 'fond', cells: { word: 'fond', line: { cut: [H, 'a1s5', 40, 40, { lines: [6, 7] }] } } },
          { id: 'still', cells: { word: 'still', line: { cut: [H, 'a2s2', 23, 23] } } },
          { id: 'abuses', cells: { word: 'abuses', line: { cut: [H, 'a2s2', 380, 380, { lines: [54, 55] }] } } },
          { id: 'quick', cells: { word: 'quick', line: { cut: [H, 'a5s1', 99, 99, { from: '’Tis for the dead', to: 'thou liest.' }] } } },
          { id: 'bravery', cells: { word: 'bravery', line: { cut: [H, 'a5s2', 39, 39, { lines: [6, 7] }] } } },
        ],
        min: 12,
        key: {
          title: 'The sixteen words',
          columns: [
            { id: 'word', label: 'Word', width: '7rem' },
            { id: 'sense', label: 'What it means in the line' },
            { id: 'from', label: 'Where the sense comes from' },
          ],
          rows: [
            { word: 'rivals', sense: 'Partners; men who share the same duty.', from: 'Latin *rivalis*, one who draws water from the same stream as another.' },
            { word: 'approve', sense: 'Confirm; bear out what our eyes have seen.', from: 'Latin *approbare*, to make good, to prove.' },
            { word: 'extravagant', sense: 'Wandering outside its bounds.', from: 'Latin *extra*, outside, and *vagari*, to wander.' },
            { word: 'tell', sense: 'Count.', from: 'Old English *tellan*, to reckon. A bank teller counts.' },
            { word: 'doubt', sense: 'Suspect; fear.', from: 'Old French *douter*, which meant to fear as well as to be unsure.' },
            { word: 'admiration', sense: 'Wonder; astonishment.', from: 'Latin *admirari*, to wonder at.' },
            { word: 'character', sense: 'Write; inscribe. A verb, stressed on the second syllable.', from: 'Greek *kharakter*, a mark cut or stamped.' },
            { word: 'censure', sense: 'Opinion; judgment, favorable or not.', from: 'Latin *censura*, a judging.' },
            { word: 'eager', sense: 'Sharp; biting.', from: 'French *aigre*, sour, the second half of *vinegar*.' },
            { word: 'lets', sense: 'Hinders; holds back.', from: 'Old English *lettan*, to hinder. A different word from *let*, to allow. The word for hindering survives in tennis, where a let is a serve that touches the net and is played again.' },
            { word: 'secure', sense: 'Free from care; unsuspecting.', from: 'Latin *se*, without, and *cura*, care.' },
            { word: 'fond', sense: 'Foolish; trifling.', from: 'Middle English *fonned*, foolish, from *fon*, a fool.' },
            { word: 'still', sense: 'Always.', from: 'Old English *stille*, at rest. The sense passed from motionless to unchanging to continual, and so the adverb came to mean always.' },
            { word: 'abuses', sense: 'Deceives.', from: 'Latin *abuti*, to misuse. The sense of deceiving has died out.' },
            { word: 'quick', sense: 'The living.', from: 'Old English *cwic*, alive.' },
            { word: 'bravery', sense: 'Show; display; swagger.', from: 'Italian *bravo* and French *brave*, which meant fine or showy as well as bold.' },
          ],
        },
      },
      reflect: 'Which of these words would have misled you most if you had read it in its present sense?',
      source: [
        'The “Lycidas” assignment is in Pearce, “Fortunate Fall,” p. 154. The spring examination at the New School is known from the journal of Auden’s friend Alan Ansen, as reported in W. H. Auden, *Lectures on Shakespeare*, reconstructed and edited by Arthur Kirsch (Princeton University Press, 2000). The choice of words and the key are this site’s.',
      ],
    },
  ],
};
