// Week 6. Pascal: Pensées, Sections VIII to XIV. Racine: Phèdre. Blake: The Marriage of Heaven and Hell.
// (Goethe: Faust, Part I, marked "Omit".) Kierkegaard: Fear and Trembling. Baudelaire: Intimate Journals.
// Opera: Don Giovanni.

export default {
  n: 6,
  title: 'Pascal, Racine, Blake, Kierkegaard, Baudelaire',
  sub: 'Pascal: *Pensées*, Sections VIII to XIV. Racine: *Phèdre*. Blake: *The Marriage of Heaven and Hell*. Kierkegaard: *Fear and Trembling*. Baudelaire: *Intimate Journals*',
  intro: [
    'Four of this week’s five books are short. Finish Pascal first. The translations printed here call Racine’s play *Phaedra* and Baudelaire’s book *Intimate Papers*.',
    'Goethe’s *Faust* is on the list between Blake and Kierkegaard, but on the copy of the list that has been published someone has written “Omit” beside it, so this week leaves it out. It is printed here if you want to read it.',
    'Mozart’s opera *Don Giovanni* is also assigned this week. By the end of the week you should know the whole of *Inferno* V by heart. Four of the five cantos for the examination are fixed, and one is your own choice. You learn it in weeks 7 to 9, so read a few cantos this week and make your choice on the By heart page before week 7 begins.',
    'Pascal, Blake and Baudelaire wrote in aphorisms. A few years after the course Auden told his friend Alan Ansen, who kept a record of their talk, that the greatest writers of aphorisms were Pascal, Baudelaire, Nietzsche, Blake and Kafka.',
  ],

  reading: [
    { work: 'pascal', text: 'pascal', from: 's08', to: 's14' },
    { work: 'phedre', text: 'phedre' },
    { work: 'blake', text: 'blake', by: 'whole', label: 'The whole book' },
    { work: 'faust', text: 'faust', omit: true, by: 'whole', label: '*Faust*, Part I' },
    { work: 'kierkegaard', text: 'kierkegaard' },
    { work: 'baudelaire', text: 'baudelaire' },
    {
      work: 'don-giovanni', text: 'don-giovanni', by: 'whole', label: 'The libretto',
      paras: [
        '*Don Giovanni* takes close to three hours. It is sung in Italian. In the English printed here the hero is called Don Juan, and the text stops where he is dragged down to hell, after the statue of the Commandant, whom he killed in the first scene, has come to supper. On the stage a short last scene follows, in which the others come back and are told what has happened.',
        'While you listen, follow Leporello, Don Giovanni’s servant, and decide which of the two men is the master.',
        'The words are by Lorenzo Da Ponte, and the opera was first performed in Prague in 1787.',
      ],
      auden: {
        paras: [
          'In “Balaam and His Ass,” an essay on masters and servants printed in *The Dyer’s Hand* (1962), Auden denies that desire is what sends Don Giovanni after women. A sensual man, he says, goes after the women who are his type and turns his eyes from one who is plain and elderly, whereas Leporello says of his master that rich or poor, ugly or beautiful, any woman will do so long as she wears a skirt. Auden calls the Don’s pleasure “arithmetical,” because what satisfies him is one more name for his list. He therefore wants the Don to look as unremarkable on the stage as possible, so that the audience understands that stamps would have served him as well as women.',
          'Auden adds that a merely sensual man has no need of a servant, and that the Don can be understood only together with his servant. Leporello keeps the list, and only Leporello is ever seen to take pleasure in it. By the end of the opera, Auden says, a listener begins to suspect that Leporello was the master all along. He wonders whether the statue ought to have dragged Leporello down to hell and left the Don to die in peace.',
        ],
        sources: ['“Balaam and His Ass,” in *The Dyer’s Hand*, pp. 119–120.'],
      },
    },
  ],

  questions: [
    {
      id: 'q06a',
      text: 'Abraham is ready to kill his son. By any rule that holds for everyone, that is murder. Why does Kierkegaard call it faith?',
      gloss: ['Read “A Panegyric on Abraham” and what follows it. Kierkegaard says more than once that he cannot understand Abraham, and you should take him at his word.'],
      auden: {
        title: 'What Auden said in class, and wrote later',
        paras: [
          'Donald Pearce, a student in the class, opens his account of the course on a Thursday afternoon late in October 1941, with Auden lecturing on Kierkegaard. Auden set out three ways of judging an act. Kierkegaard, he told the class, treats the first two at length. The aesthetic asks how interesting the act is. A theft of a million dollars by a millionaire is of no interest, Auden said, but a theft of eleven cents by a millionaire is interesting. The ethical cares only for what all thefts have in common, and has no place for the exception. The third way is the religious, and in it, Auden said, the other two meet. Like the aesthetic it has to do with the particular case, here and now, and like the ethical it keeps the larger whole in view. His example was a man who would like to kiss a woman married to someone else. The aesthetic lets him if his passion is real and he can make it interesting, the ethical forbids him and tells him to take a sedative, and the religious forbids him the kiss and the sedative too. Pearce’s account does not mention Abraham, whose case in *Fear and Trembling* is of the third kind.',
          'Auden wrote out the same three ways in 1952, in his introduction to a selection from Kierkegaard, where he applies them to religion. He takes the Greek gods as his example of an aesthetic religion and the God of the Greek philosophers as his example of an ethical one. In the first the gods give orders as they please and no two orders are alike, so the orders can never be made into a code. The second expects its commands to form a complete code of laws that hold for everyone. The command of the God of the Bible, he says, is of neither kind. It is the call of duty, “Choose to do what at this moment in this context I am telling you to do.”',
          'Auden writes of such a call again in “Genius & Apostle,” an essay in *The Dyer’s Hand* (1962). People of genius, he says, are called by a gift they were born with, and so what they must do and what they want to do are the same. An apostle’s call comes straight from God. One of Auden’s two examples is God’s command to Abraham to leave his own country, which comes earlier in Genesis than the command to sacrifice Isaac. Nobody can explain why the call came to Abraham and not to someone else, the essay says, and no natural desire of Abraham’s can have answered to it. An apostle, in Auden’s words, has to say, “I would not but, alas, I must.”',
        ],
        sources: [
          'Pearce, “Fortunate Fall,” pp. 129–131.',
          '“Søren Kierkegaard,” in *Forewords and Afterwords*, pp. 172–177.',
          '“Genius & Apostle,” in *The Dyer’s Hand*, p. 443.',
        ],
      },
    },
    {
      id: 'q06b',
      text: 'Kierkegaard’s knight of faith looks like a shopkeeper out for a walk. Nothing in his looks gives his faith away. How then does he differ from the shopkeeper?',
      gloss: ['The portrait is in the last of the four parts printed here. Kierkegaard compares the knight of faith with another knight, the knight of infinite resignation.'],
      auden: {
        paras: [
          'Reviewing the first volume of Kierkegaard’s *Journals and Papers* in 1968, Auden says that Kierkegaard was a Manichee in his feelings, though never in his doctrine. (The Manichees held that the material world was made by an evil spirit.) Kierkegaard would not have denied that God made the world, Auden says, yet his writings never give the feeling that to be alive, whatever a person suffers, is a blessing. Kierkegaard heard one theme of the New Testament, suffering and self-sacrifice, with unusual sharpness and was deaf to the rest. Against him Auden quotes Dietrich Bonhoeffer, the German pastor whom the Nazis hanged in 1945. If God grants people some great earthly happiness, Bonhoeffer wrote, “we ought not to try and be more religious than God Himself.”',
          'Auden grants that Kierkegaard could not truthfully have said those words of himself. What amazes Auden in the portrait of the knight of faith is the evidence that Kierkegaard knew he could not, and counted that a fault rather than a virtue. As Auden describes him, the knight has a happy marriage, the look of a cheerful grocer and the respect of his neighbors. Kierkegaard, he points out, calls this what a person ought to be, and admits that he cannot understand such a man.',
          'Auden makes a passing remark about the knight in an essay on Sydney Smith, an English clergyman and wit of the early nineteenth century. What Kierkegaard chiefly held against the respectable middle class, he says, was that it parodied the knight of faith. The remark does not say what the knight has that a parody of him lacks. For that, go back to the portrait and find what Kierkegaard says the knight is doing at every moment, though nothing of it shows.',
        ],
        sources: [
          '“A Knight of Doleful Countenance,” in *Forewords and Afterwords*, pp. 191–192.',
          '“Portrait of a Whig,” in the same book, p. 167.',
        ],
      },
    },
    {
      id: 'q06c',
      text: 'Phaedra says that her love for her stepson is the work of Venus. Suppose there is no Venus. What has happened to her, and who is to blame?',
      gloss: ['She says so in her first scene, in Act 1. Her last speech is in Act 5.'],
      auden: {
        paras: [
          'In “Writing,” an essay in *The Dyer’s Hand* (1962), Auden confesses that French classical tragedy strikes him as “opera for the unmusical.” Shakespeare, he says, can move readers who do not even hear the lines in their heads. He compares reading Racine silently to going through an opera score with too little skill to play or sing it, and holds that nobody who has not heard a great performance of *Phèdre* can form a fair idea of the play.',
          'In the *Hippolytus* of Euripides, the Greek play on the same story, Auden recognizes a world akin to Shakespeare’s, where Aphrodite (the Greek name of Venus) cares as much for fish and birds as for human beings. Racine’s Venus, he says, cares nothing for animals, or for the lower classes either. Racine’s world has no weather and no nature in it, and Auden cannot imagine anyone in it sneezing. He concludes that passions like theirs have no life off the stage, and that it takes the voices and gestures of great actors to give them one.',
          'In “The Globe,” an essay about the Elizabethan stage in the same book, Auden doubts whether a Christian society, which does not hold that suffering must be a sign of guilt, can have a wholly satisfactory tragedy. A dramatist in such a society, he says, can make the character who suffers noble and innocent, and then the effect is pathos and not tragedy. Or the sinners can bring the suffering on themselves, and then they cannot be noble, since it is sinning that makes a person ignoble. Shakespeare and Racine both try to get around the difficulty by putting noble verse in the sinner’s mouth. Auden calls this “a conjuring trick” and thinks both poets knew it was one. He adds that the story of Sophocles’ Oedipus would still be tragic if a journalist told it, but that the story of Shakespeare’s Macbeth would then be “a police court case” and Phaedra’s “a pathological case.”',
        ],
        sources: ['“Writing” and “The Globe,” in *The Dyer’s Hand*, pp. 25–26 and 176.'],
      },
    },
    {
      id: 'q06d',
      text: 'Pascal says that the heart has its reasons, which reason does not know. Blake’s Devil says that reason is only the outward bound of energy. Are they on the same side?',
      gloss: ['Pascal, nos. 277 and 282, in Section IV, which you read last week. Blake, the section headed “The Voice of the Devil.”'],
      auden: {
        title: 'What Auden wrote in 1939 and after',
        paras: [
          'In the summer of 1939 Auden worked on a prose book that he left unfinished and that was published only after his death. He took its title, *The Prolific and the Devourer*, from Blake’s *Marriage*, and told a friend that he was writing a new *Marriage of Heaven and Hell*. He studied Pascal that summer, and began to call the book his *pensées*.',
          'In the book Auden says that Pascal is to him what Montaigne was to Pascal. (Montaigne is the French essayist of the sixteenth century. Nos. 62 to 65 of the *Pensées*, in Section II, show a Pascal who cannot stop reading him and cannot forgive him.) He calls Pascal “incomparably the noblest and most seductive” of the dualists. A dualist, as the book uses the word, holds that everything is divided into a good part and an evil part, as into God and Satan or soul and body. Pascal, he says, did what most people do and valued what he lacked, the heart, above what he had, the reason. He concludes, “By all appearances he should have been damned, but he was saved, and saved not as he thought by his heart but by his reason,” and the ground he gives is that Pascal learned from his reason how corrupt his heart was, and so learned that human love was not for him.',
          'In 1940 Auden cited Blake against the dualists. A note to *New Year Letter*, the long poem he wrote that year, says that everything the Devil teaches begins by dividing a whole from its parts, or one part of it from the rest. Dualism, the note says, comes from thinking about the creation as if it were governed the way people govern one another, and Auden credits Blake with having seen this. (The Devil of the note is not the Devil of Blake’s book, who argues against dividing body from soul.)',
          'Auden had not come to Pascal fresh in 1939. In 1955 he wrote an essay, which has no title, for *Modern Canterbury Pilgrims*, a book of essays by members of the Episcopal Church about how they came to it. He recalls there that in his school and university years Pascal was the one writer on theology he could read, and one who disturbed his complacency. Looking back, he finds in Pascal’s writings “a certain element of fake,” a romantic pleasure in being unhappy, which he thinks may well have been what drew him to them as a young man.',
        ],
        sources: [
          '*The Prolific and the Devourer* (Ecco Press, 1994), pp. 31 and 47–48.',
          '*New Year Letter* (Faber and Faber, 1941), note to line 560.',
          'Edward Mendelson, *Early Auden, Later Auden* (Princeton University Press, 2017), pp. 390–392 and 398–399, for the letter and for the essay, which is in *Modern Canterbury Pilgrims*, edited by James A. Pike (1956).',
        ],
      },
    },
    {
      id: 'q06e',
      text: 'Baudelaire says that the dandy should live and sleep before a mirror. What does the dandy need the mirror for?',
      gloss: ['The dandy comes into *My Heart Laid Bare* several times. Collect what is said of him before you answer.'],
      auden: {
        paras: [
          'The course list names the Random House edition of the journals, which is the translation by Christopher Isherwood, the English novelist and a friend of Auden’s. (The translation printed here is an earlier one, by Joseph Shipley.) When Isherwood revised his translation and it was published again in 1947, Auden wrote the introduction. He says in it that Baudelaire, faced with his own nature and with the society of his century, set up a pair of opposites for himself and held to them until shortly before he went mad. One of the pair is the dandy, who is the heroic individual. The other is the common mass, in which Baudelaire put Woman, the man of business and the Belgians.',
          'The dandy, as Auden describes him, does not act and does not look for wisdom, and wants neither the admiration of other people nor the knowledge of God. All he wants is the consciousness of being himself and like nobody else. Auden calls him “the religious hero turned upside down,” and identifies him with Lucifer, the rebel who shows that he is free by disobeying every command, whether God’s, society’s or his own nature’s.',
          'The act proper to the dandy, according to the introduction, is the gratuitous act, since only an act that nothing calls for can be wholly the doer’s own choice. In the review of 1944 reported in week 3, Auden says that a person who acts from self-love acts “just for the hell of it.” For another act of the kind, go back to that week and the pears that Augustine stole.',
          'In 1944, in an essay on Tennyson, the English poet of Queen Victoria’s reign, Auden compares the two poets and calls Baudelaire the greater. He finds them alike underneath, since both were lonely men, anxious about their own existence. Baudelaire went further as a poet because he also had a first-rate critical intelligence, but the same intelligence misled him into making a religion of art, which Tennyson never did. Auden sets Baudelaire’s shocking pose beside the preaching and flag-waving in Tennyson, and judges that each was a way of managing without religious belief and that both end in disaster.',
        ],
        sources: [
          'Introduction to Baudelaire, *Intimate Journals*, translated by Christopher Isherwood (Marcel Rodd, 1947), pp. 18–20.',
          '“Augustus to Augustine,” in *Forewords and Afterwords*, p. 37.',
          '“Tennyson,” in *Forewords and Afterwords*, pp. 229–232.',
        ],
      },
    },
  ],

  making: [
    {
      id: 'm06',
      kind: 'text',
      title: 'Ten proverbs of Hell',
      short: 'A parody of Blake',
      brief: [
        'In an essay in *The Dyer’s Hand* (1962), Auden describes the college he would found for poets. Its library would have no books of literary criticism in it, and the students would practice criticism in one way only, by writing parodies.',
        'There are about seventy Proverbs of Hell in Blake’s book, most of them one sentence long. Many contradict a saying that everyone accepts. Find out how they are made, and then write ten more.',
      ],
      rules: [
        'Ten proverbs, each on a line of its own.',
        'No proverb longer than fifteen words.',
        'At least three must answer a saying you were brought up on. Say the opposite and make it sound true. You need not write the saying down.',
        'Use things that can be seen, as Blake uses the plow, the cistern and the crow. The following words of his are barred, and their plurals with them: eternity, infinite, wisdom, energy, desire, heaven, hell.',
      ],
      check: { lines: { exact: 10 }, each: { max: 15 }, forbid: ['eternity', 'infinite', 'wisdom', 'energy', 'desire', 'heaven', 'hell'] },
      reflect: 'Which of your ten do you believe?',
      source: [
        'The college is described in “The Poet & the City,” in *The Dyer’s Hand*, p. 77. The exercise is this site’s, and no record has been found that Auden assigned it at Michigan. His list of the five greatest writers of aphorisms, given in the opening paragraphs of this week, is in Alan Ansen, *The Table Talk of W. H. Auden* (Ontario Review Press, 1990).',
      ],
    },
  ],
};
