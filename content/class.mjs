// The class: English 135 as the people who sat in it recorded it, afternoon by
// afternoon, with what Auden put on the blackboard, what he played, and what he
// asked for before the next meeting. Under each afternoon are the passages on
// this site that answer to it.
//
// *x* is italic and [x](url) a link. build/class.mjs reads this file, cuts the
// passages from the built pieces, counts the list and the cantos, and writes
// site/data/class.json. The counts in braces ({pages}, {words}, {five}, {rate},
// {list}, {taught}, {operas}, {pairs}; with a capital where one begins a
// sentence) are filled in there. Nothing on this page is asked of the reader.
//
// Every fact carries its witness and page. Pearce's pages follow the foot of the
// printed page (review/class/tools/pearce-page.py finds a phrase's page in the
// kept scan). His words for Auden are his own reconstruction from notes made
// within an hour or so of a class: they are reported in this site's words and
// quoted for a few words at a time. The blackboards are given as he copied them.

export default {
  kicker: 'University of Michigan · Fall 1941',
  title: 'The class',
  where: 'English 135, *Fate and the Individual in European Literature*, as the students in the room recorded it',
  contents: 'Contents',
  // the way in from the front page, under its one passage and before the works: a label, a line set large, and what is here
  home: {
    label: 'The class',
    title: 'In room 2215, late in the afternoon',
    say: 'In the fall of 1941 Auden taught a course at the University of Michigan called *Fate and the Individual in European Literature*. His students recorded what he said, what he wrote on the blackboard, the records he played and the work he asked for.',
  },
  lede: [
    'In the fall of 1941 W. H. Auden taught one course at the University of Michigan. It met late in the afternoon, two hours at a time, in room 2215 of Angell Hall. Three of the students wrote about it afterward. One of them, Donald Pearce, took to writing down what he could remember within an hour or so of a lecture, in a classroom nearby. Most of what Auden is known to have said in class comes from those notes.',
    'The afternoons below are told in this site’s words, except what stands in quotation marks or stood on the blackboard. Where the class was reading a work that is on this site, a passage from it stands with the afternoon, so that what Auden asked can be tried on the lines themselves.',
  ],
  scenes: [
    {
      id: 'door',
      when: 'September 1941',
      title: 'A card on an office door',
      src: 'Pearce, pp. 132–34; Chapman, p. 508; Miller, pp. 7 and 32',
      paras: [
        'Donald Pearce was twenty-three, and had just been taken on to help teach a big course in American literature. One afternoon in September he found a card with Auden’s name on an office door in Angell Hall, knocked, and asked to join whatever course Auden was planning. Auden said that they must talk first, to see whether Pearce was prepared, and named some of the authors: Horace, Dante, Shakespeare, Goethe, Melville, Kafka, Rimbaud, Valéry. There would be operas as well, in their scores and their libretti, the printed words, and he mentioned *Carmen*, *Don Giovanni* and *Tristan*.',
      ],
      parts: [
        {
          kind: 'list',
          label: 'What he asked',
          src: 'Pearce, pp. 133–34',
          items: [
            'Which languages do you read and speak?',
            'Where do you come from, and where did you go to school?',
            'How much have you traveled?',
            'Have you read many fairy tales?',
            'What music do you like?',
          ],
          after: [
            'Pearce said Mozart and Beethoven. Auden approved, and said that one use of music is to tune the psyche: Mozart for when one is sick or low, Beethoven for when one is too happy. Then he admitted Pearce.',
          ],
        },
        {
          kind: 'note',
          paras: [
            'The course was not in the catalog, says Charles Miller, who shared Auden’s house that fall (p. 32). Its reading list was mimeographed, and the heading opened the course to juniors, seniors and graduate students who had permission in writing from Professor Arno Bader. Auden also chose his students himself. Robert Chapman, a student of Auden’s that year, remembered that they handed in samples of their writing and were seen by Auden before the first meeting, and learned on the spot that they had places (p. 508). Miller found that a place had been kept for him (p. 7).',
          ],
        },
      ],
    },
    {
      id: 'first',
      when: 'Early October 1941 · 2215 Angell Hall',
      title: 'The first afternoon',
      src: 'Miller, pp. 26–30, and his memoir in the *Ann Arbor Observer*; Pearce, pp. 129 and 131–32; Chapman, pp. 508–09',
      // the first two paragraphs run across the page; the two that lead to the definitions stand beside them
      sideFrom: 2,
      paras: [
        'Miller puts the first class in early October. Auden chalked the number of the course and “Instructor W. Auden” on the blackboard (p. 26). Chapman remembered Auden in blue jeans and a plaid shirt, with bedroom slippers on his feet, pacing as he talked and often stopping to look out at the street. At first the class had trouble with Auden’s accent and strained to hear him (p. 508).',
        'Auden’s way in class, Miller says, was to talk and not to lecture. His books and papers lay unopened on the desk at his back. He stayed with the ideas of the books and hardly ever spoke of their style, and in the early meetings he kept returning to Pascal’s *Pensées*. More than half the class were graduate students, and an instructor of the English department and two graduate assistants were in the room (p. 28). Miller’s memoir in the *Ann Arbor Observer* counts twenty-five students at the first class.',
        'Auden asked the class to take no notes, and three reasons are on record. In Miller’s account he told them they would be examined on what they thought about the books, not on what he said. Pearce has him say that people remember only what matters to them, and that note-taking gets in the way. The third comes from Chapman, who in 1978 printed the answers to a questionnaire he had sent to people who heard Auden lecture at Michigan that year. One of them, Frances Aaronson Lewis, remembered Auden saying, in this course or in the one he gave that spring, that one person cannot really tell another anything specific, so there was nothing to write down. At first, the same account says, the rule threw them into a panic (pp. 508–09).',
        'At the first meeting, as Pearce tells it, Auden sat behind the table, sweating, and said he would begin by reading some definitions, so that the class would start from common ground. He read abstract propositions from a sheaf of handwritten pages for five or six minutes. With note-taking forbidden, Pearce kept six.',
      ],
      parts: [
        {
          kind: 'list',
          numbered: true,
          label: 'The six definitions Pearce kept',
          src: 'Pearce, p. 132. The two in quotation marks are word for word. The rest are in this site’s words.',
          items: [
            '“Every evil is a former good.”',
            'Animals are no model for human beings. Among them the only standard is the body, and the only value is survival.',
            'Belief comes before understanding, and never the other way around.',
            'Whatever one believes, imagination goes on working, as breathing does.',
            '“A neurosis is a guardian angel.” Dante got himself exiled so that the *Divine Comedy* could be written, Milton went blind for *Paradise Lost*, and Beethoven deaf for the last quartets.',
            'The world is an act of the psyche, and the act is always being modified.',
          ],
        },
        {
          kind: 'note',
          paras: [
            'At that meeting a gust took Auden’s pages off the table. He stood up, stared at them on the floor and said “Oh dear!” with a look of horror. Pearce draws a conclusion of his own: Auden could not bear disorder, and the categories, definitions and diagrams of his published prose were charms against it (p. 132).',
            'Auden handed out the reading list. Tom Nolan’s biography of Kenneth Millar, who was in the class and later wrote novels as Ross Macdonald, says the length of the list drove away many who had registered (p. 53). Millar went down his own copy and ticked the titles he had on his shelves and the ones he took out of the library, as Michael Kreyling reports in his book on Millar’s novels (p. 39). George Lefferts, another of the students Chapman heard from, remembered the first meeting. As a boy, Auden told them, he used to drop stones down a disused coal shaft and listen for the splash, and once none came. “I fancy this course may be like that experience” (Chapman, p. 508).',
            'In Miller’s account the first assignment was given that afternoon too: six cantos of the *Divine Comedy* to be learned by heart, as an exercise. A graduate student said she had never learned a page by heart. Any grown person could, Auden answered, and he let anyone who could not manage six learn four (pp. 26–27). Pearce puts the cantos in December, and makes them [the examination](#/class/exam).',
            'Before the class left Auden announced an at-home at his house, 1223 Pontiac Trail: Friday evenings after dinner, and everyone was welcome (Miller, pp. 29–30).',
          ],
        },
        {
          kind: 'load',
          wide: true,
          label: 'What he handed out, to scale',
          src: 'The whole list is on [the shelf](#/shelf), with the books that can be read here.',
          taught: ['dante', 'augustine', 'henry-iv-2', 'othello', 'tempest', 'pascal', 'kierkegaard', 'moby-dick', 'castle', 'tristan', 'carmen'],
          key: { taught: 'on record in the class', rest: 'no account found' },
          rest: '{List} works: about {pages} pages in the copies on this site’s shelf, for a term of about seventeen weeks. Press a bar, or step along with the arrows, for its name and its page on this site.',
          note: 'Each bar is one work on the list, as wide as the work is long. The weeks run from the first class to the university’s examinations. The {taught} in black are the works an account shows in use in the class: lectured on, assigned for a lecture, asked about, or learned for the examination. Pascal’s *Pensées* is one of them on Miller’s word that Auden kept returning to it. The last {operas} are the operas, measured by their libretti, and the broken outline before them is *The Family Reunion*, which is in copyright and has no copy here to measure. The list gives two Greek plays and asks for one of them, and on the copy that has been published two books are marked “Omit” by hand.',
        },
      ],
    },
    {
      id: 'three',
      when: 'Late October 1941 · a Thursday, five o’clock',
      title: 'Kierkegaard’s three',
      src: 'Pearce, pp. 129–31',
      paras: [
        'The classroom was small and looked out on the street, and the sun was low in the west windows. There were fourteen or fifteen students, sitting well apart, and nobody was writing. Auden wore a plaid work shirt buttoned to the neck. He did not face the class. He stood half turned to the windows and talked slowly and evenly, with many pauses. To Pearce he seemed to be talking to the sky outside, or to the great dead.',
        'His subject was a set of terms from Kierkegaard, whom he called the last of Europe’s great thinkers on ethics. A tragic hero, he said, is a superior person who meets a force stronger than himself, chooses to fight it and is crushed. If he turns death down and settles for a compromise, he is no longer a tragic hero, that is, an esthetic one. He has become an ethical hero. The esthetic attitude treats the rules of the community as the individual’s to change. The ethical attitude keeps the rules and bends the individual’s wishes to them. Esthetics, he said, has an ontology and no teleology, an account of what is and none of what it is for, and ethics the reverse. For ethics what matters is that the whole be kept. For esthetics it is how strongly one person feels, and the part has to rate itself above the whole. Religion is where the two meet. Like the esthetic it deals with the here and now, and like the ethical it looks to the whole.',
        'He tried the terms on a case, a man set on kissing a married woman, and gave the three answers. Then he chalked three lines on the blackboard, and went on to a second case, a millionaire who steals.',
      ],
      parts: [
        {
          kind: 'board',
          figure: 'table',
          wide: true,
          label: 'On the blackboard, and his two cases',
          src: 'Pearce, pp. 130–31. The three lines are the blackboard as Pearce copied it. The answers to the two cases are Auden’s, in this site’s words.',
          cols: ['', 'A man wants to kiss a married woman', 'A millionaire steals'],
          rows: [
            { head: 'Ethics', board: 'sacrifices individual to universal', cells: ['He may not, and he should take a sedative.', 'Who steals, and how much, make no difference. The act is theft.'] },
            { head: 'Esthetics', board: 'sacrifices universal to individual', cells: ['It asks whether his passion is real and whether he can make it interesting. If so, he may.', 'A million dollars is dull. Eleven cents would be interesting.'] },
            { head: 'Religion', board: 'martyrs the individual', cells: ['It refuses him the kiss, and the sedative as well.', ''] },
          ],
          empty: 'Pearce records no answer.',
        },
        {
          kind: 'note',
          paras: [
            'Auden was still on the second case when someone opened the door, and again a draft took the loose pages off his table. Pearce, in the front row, helped to pick them up, and heard Auden swear under his breath as he stooped.',
          ],
        },
        {
          kind: 'doors',
          label: 'On this site',
          doors: [
            { piece: 'kierkegaard', plate: 'window', lens: 0, why: 'The book by Kierkegaard on the list is *Fear and Trembling*. Here is its man of faith, who looks like anyone else. Each “yet” turns from what can be seen of him to what cannot.' },
          ],
          folds: [
            {
              h: 'Where the sedative came back',
              paras: [
                'In 1944, reviewing Kierkegaard’s *Either/Or*, Auden tried the three views on Tristan and Isolde. The esthetic view wants all three people of the story to suffer, because that makes the situation interesting. The ethical view would have the lovers keep faith, she with her husband and he with his king, and would gladly exchange the love potion for a strong sedative. The religious view blesses the lovers only so far as they truly suffer their guilt, and blesses most of all King Mark, who suffers more innocently and in the end forgives. Had the lovers taken a sedative and stopped being tempted, he added, their keeping faith would have meant nothing to religion.',
              ],
              src: '“A Preface to Kierkegaard,” *The New Republic*, May 15, 1944; in *Prose*, vol. II, pp. 215–16',
            },
          ],
        },
      ],
    },
    {
      id: 'ego',
      when: 'An afternoon that fall, undated · the first hour',
      title: 'Augustine, Descartes, Kafka',
      src: 'Pearce, pp. 134–37',
      paras: [
        'Pearce’s notes pick up late in the hour, as Auden was winding up before the break. He called Augustine “the subtlest introspectionist between Aristotle and Freud,” and Augustine’s account of the conflict between self and ego the first classic of self-analysis. Since Freud, he went on, the ego has looked like a cluster of impulses in competition and no longer like one steady thing, so that Augustine now matters less as psychology than as ethics.',
        'He crossed the room, in what Pearce took for bedroom slippers, touched the handwritten pages on his table without looking at them, and went on to Descartes, of whom he had just said as much. Auden asked which of Descartes’s selves (the soldier, the mathematician, the lover, the Latinist, the philosopher, the horseman) does the thinking in “I think, therefore I am,” and which kind of thinking is meant: doubting, reasoning, remembering or dreaming.',
        'Of modern writers, he said, Kafka shows these predicaments best, above all in *The Castle*. On its face, he went on, the book is a satire on bureaucracy, and underneath it a parable, theological and psychological, which is to the twentieth century what the *Divine Comedy* was to the fourteenth.',
      ],
      parts: [
        {
          kind: 'next',
          label: 'For Tuesday',
          src: 'Pearce, p. 135',
          asks: [
            'Read *The Castle* with the *Divine Comedy* in mind. Where are the concerns of the two works alike, where are they the same, where do they differ, and why?',
            'Would Virgil, Dante’s guide, be any use to K.?',
            'Keep Melville in mind too. What do Ahab and K. have in common, and how are their quests alike?',
            'If the whale is what Ahab is after, who or what is K. after? And Dante?',
          ],
          after: [
            'What the class made of them on the Tuesday is not on record. Pearce’s notes go on with the second hour of the same afternoon.',
          ],
          doors: [
            { piece: 'castle', plate: 'street', lens: 0, why: 'K. walks toward the Castle, on a street that brings him no nearer.' },
            { piece: 'moby-dick', plate: 'rails', lens: 1, why: 'Ahab, alone, speaks of his purpose as a railroad.' },
            { piece: 'dante-paradiso', plate: 'end', lens: 0, why: 'What Dante’s journey comes to, in the last lines of the poem.' },
            { piece: 'augustine', plate: 'pears', tab: 3, label: 'Augustine examines one theft: the second book of the *Confessions*' },
          ],
          folds: [
            {
              h: 'What two of the class wrote',
              paras: [
                'Kenneth Millar, a teaching assistant, sat on Pearce’s right, and one of Millar’s papers for the course compared the *Divine Comedy* with *The Castle*. Pearce’s own essay found symbols everywhere in *The Castle*. Nolan says that Auden gave Millar’s essays an A-\u2060plus, and Pearce’s too.',
              ],
              src: 'Nolan, p. 53; Pearce, pp. 132 and 155',
            },
            {
              h: 'What Auden wrote',
              paras: [
                'That February he had reviewed Kafka. He wrote that anyone asked which artist stands to the present age much as Dante, Shakespeare and Goethe stood to their own would think first of Kafka, whose three novels use the oldest device in literature, the Quest. In a footnote he set *Moby-Dick* apart from every other quest: nothing in it promises salvation, and the whale is both the thing sought and its hostile keeper (p. 111).',
                'In 1946, in an essay called “K.’s Quest,” he said what K. and Dante are after. K. can earn no right to the title of Land Surveyor: all he can do is ask the Castle to permit it. Auden called the *Divine Comedy* a dream quest, whose journey seeks no object. The dreamer makes it to see what is real behind what appears and, awake again, can go on with his earthly life.',
              ],
              src: '“The Wandering Jew,” *The New Republic*, February 10, 1941, in *Prose*, vol. II, pp. 110–13; “K.’s Quest,” in *The Kafka Problem*, edited by Angel Flores (1946), pp. 47–52',
            },
          ],
        },
        {
          kind: 'heard',
          label: 'On the phonograph',
          src: 'Pearce, pp. 135–36',
          says: [
            'Auden often brought a portable phonograph to class, small and brown. That afternoon he played the second movement of Beethoven’s Fourth Piano Concerto. As far as music can show such a thing, he said, this movement shows how one person stands to his fate: Ahab to the whale, or K. to the Castle.',
            'He told the class what to listen for. When the piano defies the orchestra and goes off by itself, it is soon lost and hysterical, and it comes back to something like sanity only when it accepts the orchestra again. He left one question open: whether it comes back too late.',
            'The record was new to Pearce: the two drawing apart, the piano’s frenzy, its tired return and the quiet close. He calls what Auden did with it the best demonstration he ever saw in a classroom of how music and literature can explain each other. It was done, he says, by setting two or three things side by side.',
            'In introducing the record Auden named the two terms of the course’s title together: one person and his fate. He is not on record as saying what the title meant. Miller has him call it “our theme” at the first class (pp. 26–27).',
          ],
          record: null,
          played: { title: 'The second movement of Beethoven’s Fourth Piano Concerto', by: 'Artur Schnabel, piano, with the London Philharmonic: the recording Pearce names.' },
          recordNote: 'This recording cannot be played here: only records published before 1926 can be played on this site. Another recording of the concerto came out in 1925, and no copy of it that can be played here has been found.',
        },
        {
          kind: 'note',
          paras: [
            'Then Auden announced ten minutes’ recess, “so that you may rest your behinds.” At a recess he was easy to stop with a question, unless he had slipped out for a smoke or a short walk to think. Often, Pearce says, the recess was spent on the phonograph: Auden searched a record for the spot where the next hour’s music started, and the students gathered around the machine to help (pp. 136–37).',
          ],
        },
      ],
    },
    {
      id: 'love',
      when: 'The same afternoon · after the recess',
      title: 'Romantic love',
      src: 'Pearce, pp. 137–39',
      paras: [
        'Pearce says Auden lectured on love often that semester. The reading assigned was the libretti of *Tristan und Isolde* and *Carmen*; *Romeo and Juliet*, which is not on the list; and a new book that the list only recommends, Denis de Rougemont’s *Love in the Western World*. He added *The Allegory of Love*, by C. S. Lewis, which the list also recommends, and called it “a right good book.”',
        'That afternoon he made two points about romantic love, both close to de Rougemont. The first he called mirroring. The romantic lover holds a heroic picture of himself, which the rest of the world keeps having to correct and is not thanked for correcting. When two such people meet, each confirms the other’s picture, and their gratitude is what the affair runs on.',
        'The second he called the barrier. For the affair to last, the two must not become friends or settle into marriage. Something has to keep them apart: an existing marriage, a family feud, a duty, a difference in religion or in race. Where there is no obstacle they must make one, which is why Tristan and Isolde sleep with a drawn sword between them. The best obstacle is one that cannot be overcome, so that the lovers can be joined only in death. What such lovers love, he said, is death.',
      ],
      parts: [
        {
          kind: 'heard',
          label: 'On the phonograph',
          src: 'Pearce, pp. 138–39',
          says: [
            'Auden played the love duet from *Tristan*. Wagner, he said, understood this psychology perfectly: all through the duet he holds the two voices apart, and lets them join only as it closes. So it would be with the lovers’ lives, Auden said.',
            'Pearce remembered the fuss with the needle, the two voices circling each other up to their union, and how nobody moved when the record ended. He left the room feeling that he knew everything.',
          ],
          record: 'tristan-love-duet',
          recordNote: 'Pearce does not name the recording Auden played. This one ends well before the close of the duet, and no record of the close has been found that can be played here.',
        },
        {
          kind: 'doors',
          label: 'On this site',
          doors: [
            { piece: 'tristan', plate: 'names', lens: 2, why: 'Four lines near the end of the love duet: no naming, no parting, a new knowing, a new kindling. The letters and the brace mark their one rhyme. The libretto gives the lines to both lovers. In the score Isolde sings them alone, and the two voices join only in the last line.' },
            { piece: 'carmen', plate: 'habanera', lens: 1, why: 'Carmen’s own account of love: a child of Bohemia that has never known a law.' },
          ],
          folds: [
            {
              h: 'What Auden wrote',
              paras: [
                'In June of that year he had reviewed de Rougemont’s book. Summing up its argument, he wrote that Tristan and Isolde take their love as “something predestined, for which they have no moral responsibility,” and that it can last in time only while something bars its consummation. Against it, he wrote, stands what Christianity teaches about Agape, unselfish love. His one criticism of the book came a page later. De Rougemont, he wrote, sometimes treats Eros, the love that desires, and Agape as simply divided. For Auden, Agape is Eros changed by grace.',
              ],
              src: '“Eros and Agape,” *The Nation*, June 28, 1941; in *Prose*, vol. II, pp. 138–39',
            },
          ],
        },
      ],
    },
    {
      id: 'othello',
      when: 'An afternoon before a weekend',
      title: '*Othello* on the blackboard',
      src: 'Pearce, pp. 139–44; Miller, p. 29',
      paras: [
        'After that came Shakespeare, for several meetings: *Othello*, *Henry IV*, *The Tempest*. Pearce says Auden lectured on the minds of the characters and on the society around them, and hardly touched the verse, though he did send the class to the critic Wilson Knight.',
        'For *Othello* he put his argument on the blackboard: six schemes, each sorting the people of the play a different way. He talked haltingly as he wrote. Pearce copied the schemes down as a sample of the diagrams Auden often put up.',
      ],
      parts: [
        {
          kind: 'board',
          figure: 'schemes',
          wide: true,
          label: 'On the blackboard',
          src: 'From Pearce’s copy, pp. 139–40',
          lead: 'Follow one name',
          schemes: [
            { n: 'I', title: 'Stratified Society', tiers: [
              { label: 'Gentles:', lines: [[['Duke', 'Brabantio'], ['Desdemona']], ['Roderigo', 'Cassio'], ['Lodovico']] },
              { apart: true, names: ['Othello'] },
              { label: 'Non-Gentles:', lines: [['Iago'], ['Emilia'], ['Clown'], ['Bianca']] },
            ] },
            { n: 'II', title: 'Self-confident vs. Self-distrusting', sides: [
              { label: 'Self-conf:', full: 'Self-confident', names: ['Lodovico', 'Iago', 'Desdemona'] },
              { label: 'Un-conf:', full: 'Self-distrusting', names: ['Roderigo', 'Cassio'] },
            ], apart: ['Othello'] },
            { n: 'III', title: 'Sex-Appeal', sides: [
              { label: 'Have:', full: 'Has sex-appeal', names: ['Cassio', 'Desdemona', 'Lodovico', 'Emilia'] },
              { label: 'Lack:', full: 'Lacks sex-appeal', names: ['Roderigo', 'Othello'] },
            ], apart: ['Iago'], under: '(Sex is low to R.)' },
            { n: 'IV', title: 'Passionate vs. Cold', sides: [
              { label: 'Pass:', full: 'Passionate', names: ['Othello', 'Cassio', 'Bianca'] },
              { label: 'Cold:', names: ['Desdemona', 'Roderigo', 'Iago', 'Emilia'] },
            ] },
            { n: 'V', title: 'Sophisticated vs. Naive', sides: [
              { label: 'Soph:', full: 'Sophisticated', names: ['Cassio', 'Roderigo', 'Iago', 'Emilia'] },
              { label: 'Naïve:', full: 'Naive', names: [{ name: 'Othello', note: '(delib.)', full: 'deliberately' }, { name: 'Desdemona', note: '(by nat.)', full: 'by nature' }] },
            ] },
            { n: 'VI', title: 'Intelligent vs. Stupid', sides: [
              { label: 'Intell:', full: 'Intelligent', names: ['Iago'] },
              { label: 'Stu:', full: 'Stupid', rest: 'The rest' },
            ] },
          ],
          follow: [
            { name: 'Othello', says: 'Venice, Auden said, needs him as a soldier and looks down on him as an outsider, partly because he is black, and the strain is constant. Warm feeling is his mainspring, and he is not very intelligent. He is an exact case, Auden went on, of [one of Pascal’s types](#/pascal): a man who has only feeling and a few moral rules to meet life with. He is sure of himself in action and unsure everywhere else, largely for want of sex appeal. So he leans on his record as a soldier, almost as a child would. He is naive on purpose, so as not to know his own “inferiority.”' },
            { name: 'Iago', says: 'Above all, Auden said, he lacks passion. He cannot love other people, and he has made a strength of the defect: people are objects to him. The one brilliant person in the play, he has the mind [Pascal calls geometrical](#/pascal): he settles everything by reasoning and reasons without a slip, but principles are nothing he sees or cares about. No one else in the play shows any knowledge of the Bible. Auden called him Shakespeare’s portrait of “the villain as inverted saint”: a man who wanted to be a saint and failed.' },
            { name: 'Desdemona', says: 'She is naive by nature, Auden said: a schoolgirl who knows nothing of a soldier’s world, and who at once sees everything through Othello’s eyes. She loves him as a mother would. She needs proofs of his manhood, and he needs her adoration. Each holds on to the other’s innocence. Like him, she is not very intelligent.' },
            { name: 'Cassio', says: 'He is the reverse of Othello, Auden said: at ease with women and ill at ease among men, as his poor head for drink shows. The friendship of the two rests on each having what the other lacks.' },
            { name: 'Roderigo', says: '' },
            { name: 'Emilia', says: '' },
            { name: 'Lodovico', says: '' },
          ],
          saidLabel: 'What he said as he wrote',
          followSrc: 'In this site’s words: Pearce, pp. 141–43',
          silent: 'Pearce records nothing that Auden said of Roderigo, Emilia or Lodovico beyond what is on the board.',
        },
        {
          kind: 'note',
          paras: [
            'The play, Auden said, is first of all about a society in layers. The Duke, Brabantio, Roderigo, Cassio, Lodovico and Desdemona are its upper crust, as he said the class could see for itself. Iago and Emilia come from the layer below, and Bianca and the Clown from one lower still. A society like that, he said, breeds strain, misunderstanding, obsession, even paranoia (p. 141).',
            'Charles Miller, in the same class, was put off. He remembered the diagrams as meant to prove Othello a stupid man and Iago more honest than anyone else in the play. All this seemed to him flippant about Shakespeare, and he says other students were let down as he was (Miller, p. 29).',
            'Near the end of the lecture Auden said that the saint and the villain have much the same psychology. In each of them ethics and esthetics, the terms of [the Kierkegaard afternoon](#/class/three), have all but become one thing, and saint and villain stand back from other people in the same way (Pearce, p. 143).',
          ],
        },
        {
          kind: 'next',
          label: 'For next time',
          src: 'Pearce, pp. 143–44',
          asks: [
            'How does the mind of a saint work, and the mind of a villain or a criminal? Write down where the two are alike.',
            'Read *Henry IV* for next Tuesday, and look for likenesses between the psychology of Iago and that of Falstaff.',
            'Ask why Shakespeare was so taken up with this kind of mind, and what his attitude toward it is in *The Tempest*.',
            '“Read lots of fairy stories over the weekend!” he shouted over the noise as the class broke up. The stories were to go with the study of *The Tempest*.',
          ],
          after: [
            'He left in the dark with his arms full: books, papers, the records and the phonograph.',
          ],
          answers: [
            { text: 'The next meeting opened on his own answer about Iago and Falstaff.', to: 'falstaff' },
            { text: 'The lecture on *The Tempest* in December closed on the question about Shakespeare.', to: 'tempest' },
          ],
          doors: [
            { piece: 'othello', plate: 'echo', lens: 0, rows: ['100.0', '100.1', '102.0', '104.0'], why: 'Iago hands Othello’s own word back to him.' },
            { piece: 'henry-iv-2', plate: 'charges', lens: 0, rows: ['90.0', '92.0'], why: 'Falstaff answers a judge by turning the judge’s words around.' },
          ],
          folds: [
            {
              h: 'What Auden wrote',
              paras: [
                'Twenty years later his essay on the play opened with the villain. He could think of no other play, he wrote, in which every deed is one character’s and all the rest “only exhibit behavior.” Othello’s fall, he went on, is another man’s work, so an audience pities Othello without respecting him.',
              ],
              src: '“The Joker in the Pack,” in *The Dyer’s Hand* (1962), pp. 246–47',
            },
          ],
        },
      ],
    },
    {
      id: 'falstaff',
      when: 'The next meeting',
      title: 'Falstaff and the Prince',
      src: 'Pearce, pp. 144–48',
      said: { quote: 'Falstaff is a comic edition of Iago.', by: 'Auden, as Pearce set it down, p. 144' },
      // the paragraphs on the Prince, on England and on Falstaff's disappointment stand beside the passage where the Prince, now King, drops him
      sideFrom: 2,
      sideTo: 5,
      sideToNarrow: 3,
      paras: [
        'Auden began with his own answer to the question about Iago and Falstaff, and Pearce was a little startled.',
        'Both men, Auden said, stand back from the moral side of human dealings without seeming to. Iago’s detachment is a scientist’s, cold and analytic. Falstaff’s is a playwright’s: wherever he is, he starts a scene, and his way with any trouble between people is to make a play or a game of it. Both manipulate, and both have a cruel streak. In Falstaff it is usually missed, and Auden pointed to the scene where Falstaff, alone with the body of the rebel Hotspur, stabs it and carries it off as his own kill.',
        'The Prince, the King’s son and Falstaff’s companion, is a schemer under the charm, he went on, and one of the most hateful people in Shakespeare. He is cold. Like Iago he passes for honest and for good company, and he is as practiced a deceiver. He is curious about unprincipled conduct because a king must understand it, and he studies Falstaff as a good pupil studies his master. At the end of Part 2 he drops his old companions without regret, because he has no more use for them, as the King, his father, dropped the Percies, the family that had helped him to the crown.',
        'Under the play Auden saw England changing. The Percies and the other rebel lords stand for the feudal country, which is giving way to London and the nation state. They half know it, and what they will not admit comes out as fanaticism, above all in Hotspur. Auden gave Jung’s definition of fanaticism: doubt overcompensated.',
        'He read Falstaff as a disappointed man, a countryman adrift in the city, whose wit and feeling are the very things that fail in a world run on calculation. The drinking is compensation, the fat is padding against hard people, and he plays the child so as not to be hurt. The belly, Auden said, is a mock pregnancy, of a kind the physician Georg Groddeck had studied, and the child in it is Falstaff himself.',
        'Auden called him a coward, which is why he brags. He can deal with people only personally, and the Prince has no personal ties at all, so the break between them has to come. He is also the body of a sick England, for which the King’s cure is a war abroad. Falstaff, Auden said, cannot last in a world like that, and neither can the Merry England he stands for.',
        'Pearce’s notes stop there: it was dark and he was exhausted. More followed, and he believes it was on Rilke’s *Elegies*, a book that is not on the list. He meant to write it down that night, and lost it. He also warns that Auden must have talked of other things that day.',
      ],
      parts: [
        {
          kind: 'doors',
          side: true,
          label: 'On this site',
          doors: [
            { piece: 'henry-iv-2', plate: 'rejection', lens: 1, why: 'The Prince, now King, drops Falstaff at the end of Part 2.' },
          ],
        },
        {
          kind: 'folds',
          folds: [
            {
              h: 'What Auden wrote',
              paras: [
                'In *The Dyer’s Hand* (1962) Falstaff is “a comic symbol for the supernatural order of Charity,” set against the order of justice that the Prince stands for. Whatever the difference in what they intend, Auden wrote, the Prince and Iago, seen from outside, do the same two things: they deceive and they destroy.',
              ],
              src: '“The Prince’s Dog,” in *The Dyer’s Hand*, pp. 198 and 205',
            },
          ],
        },
      ],
    },
    {
      id: 'tempest',
      when: 'December 1941',
      title: '*The Tempest*',
      src: 'Pearce, pp. 148–53',
      said: { quote: 'All literature is allegory.', by: 'Auden, as Pearce set it down, p. 148' },
      // the paragraphs on the sea and on the form stand beside Ariel's song
      sideFrom: 2,
      sideTo: 4,
      sideToNarrow: 3,
      paras: [
        'This is the last lecture Pearce recorded. By then, he says, Auden no longer feared the class and stood facing it, though still speaking to a point high on the back wall.',
        'The notes open with Auden saying that a reader knows only himself, and meets himself in other people and other situations. So a reader’s knowledge of Shakespeare, he said, goes just as far as his experience of life. He told the class to read the late plays together, as the parts of one long poem.',
        'Then he spoke of the sea. In Shakespeare, he said, the sea is where new life comes from, where the old is laid down and where treasure is found, and he pointed to the second scene of *Twelfth Night* and to the birth at sea in *Pericles*. What Ariel’s song says, he told the class, is the central theme of the sea scenes in *Pericles* and *The Tempest*: a change that comes close to what an alchemist means by transmutation, and that works on people as well as on things.',
        'He called the form romance or, better, a fairy tale. A hero who has gone wrong spends years in a country full of wonders and comes home to rule again. Prospero’s fault, Auden said, was to neglect the plain work of governing so as to perfect himself in secret arts, and his brother, whom Auden called Prospero’s other self, was right to turn him out. On the island, in Auden’s account, Prospero learns the art of living, which is to honor the claims of ordinary life. At the end he gives up his powers and goes home to Milan. Faust, Auden added, gives his up too, and ends by building dikes.',
        'Prospero, he said, is often called Shakespeare’s complete man, and rightly. He is also Shakespeare himself, and the play is his “testament.” Miranda and Ferdinand, he went on, whose one difficulty is a squabble over chess, are Shakespeare’s last word on love. In them the rapture of *Romeo and Juliet*, which the class had been given to read, has become the plain first step toward marriage and a family. Of Caliban he said that the brute in human nature must be held down and cannot be removed, and that Prospero makes Miranda look at him.',
        'He called Gonzalo the easiest person in the play to overlook: the Polonius of [*Hamlet*](#/hamlet) done again, in whom Shakespeare this time finds something to respect. Goethe, he went on, tells apart three kinds of reverence in *Wilhelm Meister*, and they fit the outlook of this late play. Auden wrote them on the blackboard and left them without a word of comment.',
      ],
      parts: [
        {
          kind: 'doors',
          side: true,
          label: 'On this site',
          doors: [
            { piece: 'tempest', plate: 'song', lens: 2, why: 'Ariel’s song, where the change the sea works is said twice as plain fact.' },
          ],
        },
        {
          kind: 'board',
          figure: 'lines',
          label: 'On the blackboard',
          src: 'As Pearce copied it, pp. 151–52',
          lines: [
            { n: '(1)', head: 'Reverence for what is above you', note: 'ignorant and inferior fear; superior avoid.' },
            { n: '(2)', head: 'Reverence for one’s equals', note: 'philosophers seek to attain . . . “humanitas”.' },
            { n: '(3)', head: 'Reverence for what is beneath you', note: 'necessary part of life; need to see as form of beauty' },
          ],
        },
        {
          kind: 'note',
          paras: [
            'When Auden left the board he went on with Gonzalo: a blunderer at times, and a bore, whom Shakespeare now sees as good at heart and to be trusted. The brilliant talkers of the earlier plays, he said, have shrunk in this one to hangers-on: Shakespeare no longer admires cleverness, and for ordinary life he prefers the gentle and the honest. Then Auden talked briefly about Valéry, and of that Pearce kept nothing.',
            'The close took up the question about Shakespeare from [the *Othello* afternoon](#/class/othello). Auden pointed out that in this play the clever man is a small-time villain, ready to stab a man in his sleep. He ended on a further question: whether so long a fascination means that Shakespeare had felt the pull of that kind of mind himself, and had mastered it by the time of the last plays.',
          ],
        },
        {
          kind: 'doors',
          label: 'On this site',
          doors: [
            { piece: 'tempest', plate: 'epilogue', lens: 2, why: 'The last speech of the play, after Prospero has given up his powers.' },
          ],
          folds: [
            {
              h: 'What Auden wrote',
              paras: [
                'In *The Dyer’s Hand* (1962) he called the play a disquieting work. Prospero is to be admired for his gifts and his strength, he wrote, but cannot be liked, and Caliban has the better of their argument.',
              ],
              src: '“Balaam and His Ass,” in *The Dyer’s Hand*, pp. 128–29',
            },
          ],
        },
      ],
    },
    {
      id: 'chart',
      when: 'The same afternoon',
      title: 'A chart the width of the room',
      src: 'Pearce, p. 153',
      paras: [
        'When Auden had finished with *The Tempest* he went to the left edge of the blackboard and copied out a chart he had made for the class. It was in two rows and ran the whole width of the room. He said it summed up themes and relations the course had been concerned with that semester. Pearce copied it down. He records no word of explanation.',
      ],
      parts: [
        {
          kind: 'board',
          figure: 'tiers',
          wide: true,
          label: 'On the blackboard',
          src: 'From Pearce’s copy, p. 153',
          more: '{Pairs} pairs. The chart runs on to the right.',
          pairs: [
            ['Health', 'Sickness'],
            ['Bourgeois social stability', 'Revolution'],
            ['Gaiety', 'Sadness'],
            ['Voluntarism', 'Determinism'],
            ['Faith in personal integrity', 'Doubts about personal integrity'],
            ['Pragmatic specialized science', 'Synthetic heroic ironism'],
            ['Classical values', 'Romantic values'],
            ['Catholicism', 'Protestantism'],
            ['Pragmatic and practical morality', 'Uncoded morality'],
          ],
        },
      ],
    },
    {
      id: 'exam',
      when: 'Announced in December 1941 · held after Christmas',
      title: 'The examination',
      src: 'Pearce, pp. 153–54; Chapman, p. 509; Miller, pp. 77–78; Farnan, pp. 76–77',
      paras: [
        'Then Auden said what the final examination would be. Pens and paper came out, which had not happened before that term. The examination would come four or five weeks later, after the Christmas vacation, and last three hours. The class would write out seven cantos of the *Divine Comedy* from memory: the third and fifth of the *Inferno*, some of the *Purgatorio* and the last of the *Paradiso*. Of the *Purgatorio* cantos Pearce names the twenty-eighth. The text was the prose translation in the Modern Library volume on the list, the version, Auden told them, that Eliot used in *The Waste Land*.',
        'The class took the news in silence and then grumbled. A committee of students called it impossible and inhumane. Auden was surprised and thought it neither. He offered to cut the seven cantos to five, with a bargain: he was about to drive to California, and if he could not learn the five himself on the way, he would telephone and call the examination off. He did not telephone.',
        'The third canto of the *Inferno* took Pearce about a week of afternoons, and every trick of memory he knew, before it held. A couple of weeks later a canto took three afternoons. The last canto of the *Paradiso* took one.',
        'Miller remembered that in the fall Angelyn Stevens, a faculty wife who sat in on Auden’s classes that year, kept typed pages of Dante pinned above her kitchen sink, to learn her cantos over the dishes: six of them, in his account (pp. 77–78). Dorothy Farnan, a graduate student at Michigan who knew people in the class, tells of students up late over their cantos, and of senior professors who went to Auden and could not move him (pp. 76–77).',
        'At the examination Pearce wrote without a break for the whole three hours. He filled five examination books and believed he had not made a mistake. He thinks the memorizing may be the most valuable thing Auden taught him. In his own classes since, he says, he has asked the same, and met the same resistance, and then gratitude.',
        'Most of those who answered Chapman’s questionnaire had thought the memorizing pointless, and some said they still had eight cantos by heart. One, Joan Goldhamer, ran out of time before she had written out all her Dante and left the word “Time” on her paper. Auden telephoned to ask whether that was the truth, took her word for it, and did not mark her down (p. 509).',
      ],
      parts: [
        {
          kind: 'cantos',
          wide: true,
          label: 'What was to be written out',
          src: 'The four cantos Pearce names, in the prose the class used',
          cantos: [
            { part: 'inf-03', name: '*Inferno*, canto 3', piece: 'dante-inferno', plate: 'gate' },
            { part: 'inf-05', name: '*Inferno*, canto 5', piece: 'dante-inferno', plate: 'francesca' },
            { part: 'pur-28', name: '*Purgatorio*, canto 28', piece: 'dante-purgatorio', plate: 'garden' },
            { part: 'par-33', name: '*Paradiso*, canto 33', piece: 'dante-paradiso', plate: 'prayer' },
          ],
          sum: 'These four cantos run to {words} words. Five of that average length come to about {five}, or about {rate} words a minute for three hours of writing.',
          note: [
            'Each stroke is one paragraph of the prose, drawn to its length. The red strokes are the paragraphs shown in this site’s passages. Which five of the seven were kept is not recorded.',
            'The other accounts differ on the number of cantos, on when they were assigned, and on whether they were an examination or stood in place of one. They are laid side by side at the foot of this page, under “Where this page may be wrong,” and at more length on [the page about this site](#/about).',
          ],
        },
      ],
    },
    {
      id: 'papers',
      when: 'Through the term',
      title: 'Papers and exercises',
      src: 'Farnan, pp. 73 and 77; Nolan, p. 53; Kreyling, endnotes; Chapman, p. 509; Miller, pp. 26–28; Pearce, pp. 135, 143–44 and 153–55',
      paras: [
        'Papers were assigned and graded. In her notebook Angelyn Stevens called the work “tremendous, if you did everything” (Farnan, p. 73).',
      ],
      parts: [
        {
          kind: 'set',
          label: 'The work on record',
          items: [
            { text: '“Papers comparing two works of art”', by: 'Stevens’s notebook, which does not name the course: Farnan, p. 73' },
            { text: 'A paper comparing the *Divine Comedy* with *The Castle*', by: 'Kenneth Millar’s: Nolan, p. 53. Kreyling’s endnotes cite a paper of his for the course called “The Comic Hero,” which may be this one.', ways: [
              { piece: 'dante-paradiso', plate: 'end', label: 'The last lines of the *Paradiso*' },
              { piece: 'castle', plate: 'street', label: 'K. walks toward the Castle' },
            ] },
            { text: 'An essay on *The Castle*', by: 'His own: Pearce, p. 155' },
            { text: 'Questions to think over before the next meeting', by: 'Two sets are on record: Pearce, pp. 135 and 143–44', ways: [
              { to: 'ego', label: 'The questions on *The Castle*' },
              { to: 'othello', label: 'The questions after *Othello*' },
            ] },
            { text: 'A poem put into English from a language the student had not studied (Latin, French or German), with a dictionary and nothing else', by: 'Early in the term. Chapman does not name the course. His own was a poem of Rilke’s: Chapman, p. 509; Carpenter, p. 319', waysLabel: 'To try, on this site', ways: [
              { piece: 'horace', plate: 'ship', tab: 2, label: 'Horace, in Latin' },
              { piece: 'rimbaud', plate: 'stanza', label: 'Rimbaud, in French' },
              { piece: 'faust', plate: 'wheel', tab: 2, label: 'Goethe, in German' },
            ] },
            { text: 'Poems written to a set scansion, a given pattern of beats', by: 'Stevens’s notebook, which does not name the course: Farnan, p. 73', ways: [
              { piece: 'tempest', plate: 'song', tab: 0, label: 'Ariel’s song, with its beats marked' },
            ] },
            { text: 'Cantos of the *Divine Comedy*, learned by heart', by: 'Written out at the examination: Pearce, pp. 153–54. Given as an exercise at the first class: Miller, pp. 26–27', ways: [
              { to: 'exam', label: 'The examination' },
            ] },
          ],
        },
        {
          kind: 'note',
          paras: [
            'No list of topics has been found, and none of the accounts read for this site describes a quiz or a midterm examination. Some of the reading came from outside the list: Miller says Auden did not stick to it (p. 28), and Farnan says he recommended Georg Groddeck’s *Book of the It*, which the library would lend only to graduate students (p. 77).',
            'Nolan says Auden played opera records to make points about the books (p. 53). Beyond [the afternoon on romantic love](#/class/love), for which *Tristan* and *Carmen* were assigned, no account says how the {operas} operas on the list were taught. Each has one old record on [the shelf](#/shelf).',
          ],
        },
      ],
    },
    {
      id: 'friday',
      when: 'Friday evenings',
      title: 'At 1223 Pontiac Trail',
      src: 'Miller, pp. 29–30 and 55–56, and his memoir in the *Ann Arbor Observer*',
      paras: [
        'The class went on at Auden’s house. After the first at-home the dean of women telephoned about a student who had gone home drunk, and from then on, Auden ruled, the students were to supply the beer themselves and the house the coffee. In his memoir for the *Ann Arbor Observer* Miller remembered talk, music and arguments about Hemingway.',
        'For Thanksgiving Day Auden invited anyone who wished to come to the house between two and four. He would play records of *Parsifal*, an opera that is not on the list, and they would talk about it at tea. Five students came, and there was no discussion.',
      ],
      parts: [],
    },
    {
      id: 'after',
      when: 'Spring 1942',
      title: 'The next course',
      src: 'Pearce, pp. 154–57',
      paras: [
        'In the spring Auden gave a second course, on the analysis of poetry. A required course kept Pearce out of it, and he sat in once, at the back. Before turning to the poem of the day, Auden gave that class its project for the term, on Milton’s “Lycidas.” A student who did it told Pearce that “Lycidas” was the one English poem he felt he really knew.',
        'The poem that day was Wordsworth’s “The Solitary Reaper.” Some way in, Auden asked Pearce what he made of the girl. Pearce, whose essay had found symbols all through *The Castle*, said she was a symbol, and was asked of what. He offered the peasantry, or a rural England that Wordsworth feared was going. Auden’s own answer began further back, with how a poem gets written: the poet’s conscious mind has to reach his daemon, or genius, and the connection between them is like the telephone between the village and the Castle in Kafka, which works on some days and fails on others. The girl, he said, is Wordsworth’s own genius: put “I” for “she” and the poem is a portrait of the poet. Pearce went over the remarks as soon as the class ended, and is sure he has them word for word.',
      ],
      parts: [
        {
          kind: 'set',
          side: true,
          label: 'What that class was given',
          items: [
            { text: 'For each word of “Lycidas,” its origin and every meaning it had had down to the year of the poem, listed from the *Oxford English Dictionary*', by: 'The project of the term: Pearce, p. 154' },
            { text: 'A final examination, dated May 21, 1942, which survives', by: 'Printed in Auden’s collected *Prose*, vol. II, pp. 467–70. One section is on “Lycidas,” with gaps to be filled a word at a time, one is on Donne, Hopkins and scansion, and one is an essay' },
          ],
          doors: [
            { piece: 'hamlet', plate: 'to-be', lens: 3, rows: ['46.2'], why: 'One word, done as that class was to do every word of “Lycidas”: *outrageous* meant violent, comes from the Latin for *beyond*, and has no root in *rage*.' },
          ],
        },
      ],
    },
    {
      id: 'since',
      when: 'Then and afterward',
      title: 'What the students said',
      src: 'Pearce, pp. 132 and 157; Chapman, pp. 508 and 512–13; Miller, p. 29; Farnan, p. 73; Bruccoli, p. 10',
      paras: [
        'The class had names for Auden. Pearce’s was “The Everlasting Bonfire,” and another student’s was “The Dishevelled Star” (p. 132).',
        'Auden taught at Michigan for one year. Pearce once heard him say that as a teacher he had no talent, and says the despair was plain. Pearce’s own judgment is that no teacher he heard showed better how many kinds of knowledge meet in a text, and he says he has caught himself using Auden’s words in his own classes (p. 157).',
        'The people who answered Chapman’s questionnaire remembered “a superb teacher” who paid close attention to every one of them (p. 508). Three of them thought him unhappy or troubled that year (p. 512).',
      ],
      parts: [
        {
          kind: 'voices',
          label: 'In their words',
          items: [
            { quote: 'An old Ariel and a young Socrates rolled into one', who: 'Kenneth Millar', of: 'the teaching assistant who sat next to Pearce, about Auden, as Pearce reports it', src: 'Pearce, p. 132' },
            { quote: 'as elated as we were puzzled', who: 'Robert Chapman', of: 'about most of the class, once it could follow Auden', src: 'Chapman, p. 508' },
            { quote: 'Auden is evil and cynical about the classics', who: 'A student poet', of: 'who dropped the course, as Miller tells it', src: 'Miller, p. 29' },
            { quote: 'That class turned me around', who: 'Frances Aaronson Lewis', of: 'a senior that year, about one of Auden’s two courses', src: 'Chapman, p. 513' },
            { quote: 'mental food for a lifetime', who: 'Angelyn Stevens', of: 'in her notebook, about the work', src: 'Farnan, p. 73' },
            { quote: 'set fire to me', who: 'Kenneth Millar', of: 'who wrote as Ross Macdonald, about Auden', src: 'Bruccoli, p. 10' },
          ],
        },
      ],
    },
  ],
  caveats: [
    'Nearly everything Auden is reported as saying here comes from one student. Pearce says that his notes hold almost nothing of the opening meetings. After them he wrote a hurried page or two in a spiral notebook when a lecture was over, and before long whole sentences stayed with him. He printed the notes more than forty years afterward, unaltered, he says, with a narrative written from memory around them (p. 134). The wording is Pearce’s, not Auden’s, and outside quotation marks it is this site’s. A second student kept notes as well, Kenneth Millar. Michael Kreyling drew on them for his book on Millar’s novels, by courtesy of Pearce, and no printing of them has been found (Kreyling, p. 40 and his notes).',
    'From the lecture on Augustine onward, the order of the afternoons is Pearce’s. He tells what comes before it in the reverse order: [the Thursday on Kierkegaard](#/class/three) first, then the first meeting, then the card on the office door. Here they are put in order of date. He does not say whether that Thursday came before or after the lecture on Augustine.',
    'Pearce dates only two afternoons, the Thursday on Kierkegaard and, in December, [the lecture on *The Tempest*](#/class/tempest). A letter of Auden’s postmarked in Ann Arbor on the morning of December 19, 1941, says that he was leaving at noon for Hollywood, so the last class before Christmas met on or before Thursday, December 18 (letters to James and Tania Stern, in *Auden Studies* 3, pp. 65–72). The university’s examinations that winter ran from January 28 to February 4, 1942 (*Proceedings of the Board of Regents*, January 1942, p. 862), and the day of Auden’s is not recorded.',
    'The list says the class met on Thursdays from four to six. Pearce says Tuesdays and Thursdays from 3:30 to 5:30, and two of the assignments he records are for a Tuesday. On the published sheet the “4-” of the hours is inked in by hand and the rest is typed, so the first hour was filled in or corrected after the typing. Miller puts Auden’s teaching and his office hours together at five hours, all on Thursdays (p. 30), which agrees with the list.',
    'Auden gave two courses that year, this one in the fall and [one on the analysis of poetry](#/class/after) in the spring. Chapman seldom says which of the two an answer to his questionnaire is about, and Angelyn Stevens’s notebook, as Farnan reports it, does not say either.',
    'Pearce’s pp. 129–30 and 138–45, with the head of p. 131 and the foot of p. 137, could be read for this site only in the short extracts a search of the scanned book returns. The pages themselves were not seen. They hold the Thursday on Kierkegaard, most of the lecture on love, the lecture on *Othello* and the opening of the lecture on *Henry IV*. The extracts give the names and labels of each scheme for *Othello* in order, not their places on the page, so the way the six schemes are set out here is this site’s arrangement. In the first, the people set under the upper label are the six whom Auden named together in the lecture as the top of the society (p. 141). In the third the extract runs the two columns together, and the sides given here follow the order of the names and what Auden said in the lecture.',
    'Pearce prints the chart in three pieces to fit his page, and the scan of that page runs the labels of each line together. Where one label ends and the next begins is this site’s reading, from the way the two rows pair. The words are the same in the book of 1985 and in the reprint of the essay in his *Para/Worlds* (1989).',
    'The accounts of the cantos disagree on their number and on when they were assigned. Miller has six asked for at the first class, as an exercise, and four allowed to anyone who could not manage six (pp. 26–27). Farnan, who was not in the class, also has six, assigned on the first day (pp. 73 and 76). Nolan has each student choose six, in place of an examination (p. 53). Pearce has seven assigned in December and cut to five (pp. 153–54). Chapman’s classmates spoke of eight (p. 509). The account of the examination on this page is Pearce’s.',
    'What was drunk on Friday evenings is told four ways. Miller’s book has beer brought by the students, and his memoir coffee only. The biographer Humphrey Carpenter has plenty of cheap wine (p. 319), and Farnan a weekly tea (p. 73).',
  ],
  sources: [
    'Donald Pearce, “Fortunate Fall: W. H. Auden at Michigan,” in *W. H. Auden: The Far Interior*, edited by Alan Bold (1985), pp. 129–57; reprinted in Pearce’s *Para/Worlds* (1989).',
    'Charles H. Miller, *Auden: An American Friendship* (1983).',
    'Charles H. Miller, “Auden in Ann Arbor,” *Ann Arbor Observer*, March 1983.',
    'Robert L. Chapman, “Auden in Ann Arbor,” *Michigan Quarterly Review*, vol. 17, no. 4 (Fall 1978), pp. 507–20.',
    'Dorothy J. Farnan, *Auden in Love* (1984).',
    'Humphrey Carpenter, *W. H. Auden: A Biography* (1981).',
    'W. H. Auden, *The Dyer’s Hand* (1962); *Prose*, vol. II: 1939–1948, edited by Edward Mendelson (2002).',
    { h: 'On Kenneth Millar, who wrote as Ross Macdonald', items: [
      'Tom Nolan, *Ross Macdonald: A Biography* (1999).',
      'Michael Kreyling, *The Novels of Ross Macdonald* (2005).',
      'Matthew J. Bruccoli, *Ross Macdonald* (1984).',
    ] },
    'Auden’s letters to James and Tania Stern, edited by Nicholas Jenkins, in *Auden Studies* 3 (1995), pp. 65–72.',
    'University of Michigan, *Proceedings of the Board of Regents*, January 1942.',
    'The reading list of the course, in the picture [published by Alan Jacobs](https://blog.ayjay.org/audensyllabus/).',
    'Full references, and a table of what is known of the course and who says it, are on [the page about this site](#/about).',
  ],
};
