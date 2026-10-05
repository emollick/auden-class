# Critic by word, second reading: part .05 (the scripts, the about page, cross-checks)

## The words set by the scripts (review/remake/prose/site.md)

81. [site/js/class.js] "Passages from every work on the list →"
    - Fault: larger than a careful person would claim, by one work. The about page says *The Family Reunion* has a page and no text printed.
    - Put: "A page for every work on the list →"
82. [site/js/class-figures.js] "The chart, in two rows. It is wider than a narrow screen and scrolls sideways."
    - Fault: this is the spoken label of the chart on every screen, and it says what is true only on a narrow one. "Wider than a narrow screen" goes in a circle.
    - Put: "The chart, in two rows of nine. On a narrow screen it scrolls sideways."

Not marked: "Follow one name across the six schemes" (spoken) beside "Follow one name" (seen) is one control, and only one wording is seen. "Read it here" under each canto leads to that canto in the prose the class used, so the label is true. "The record," "Sources," "The works," "The shelf," "The list, and the books to read →," "The next work on the list," "The work before it on the list" and "marked “Omit” on the list" are plain.

## The about page (content/about.mjs)

83. [lede, last sentence] "[The class](#/class) goes through the afternoons…"; [The order of the books] "[The class](#/class) follows the order in…"; [The records] "[The class](#/class) has one more, made…"
    - Fault: one label for two things. The page's name is the subject of three sentences, and on the same page "the class" is the students. In the records section the two meet three sentences apart ("Auden played the duet to the class"). "The class follows the order in which Pearce tells the lectures" reads first as the students following.
    - Put: "The page on [the class](#/class) goes through the afternoons his students recorded." "The page on [the class](#/class) follows the order in which Pearce tells the lectures, from the one on Augustine onward."
84. [The records] "[The class](#/class) has one more…", "It holds the opening of…", "Auden played the duet to…"
    - Fault: three short sentences of one build for one fact.
    - Put: "The page on [the class](#/class) has one more, made in 1903 or 1904: the opening of the love duet from *Tristan*, which Auden played to his students."
85. [table, row "How many took the course"] "Summaries returned by a web search have Chapman giving…"
    - Fault: the row opens on its weakest witness, in a sentence that has to be read twice ("have Chapman giving"). The three counts that were read on the page come after it.
    - Put: "Farnan, p. 73, says the class was limited to twenty-five. Miller's memoir in the *Ann Arbor Observer* counts twenty-five students at the first class. Pearce, p. 129, counted fourteen or fifteen in the room one Thursday late in October. The summaries a search returns say that Chapman gives an enrollment of twenty-two, but the page the figure is on could not be read for this site."

### Whether the two pages say the same thing

- The order of the lectures: they agree. Both say the class page follows Pearce from the lecture on Augustine onward ([caveats[1]] and "The order of the books"). The about page's sequence leaves out the Thursday on Kierkegaard, which the class page sets before Augustine by date; that is a silence, not a clash.
- How many: they agree where both speak (twenty-five at the first class, from Miller's memoir; fourteen or fifteen one Thursday late in October, from Pearce).
- The cantos: they agree in every number and page (Pearce seven cut to five, pp. 153–54; Miller six or four, pp. 26–27; Farnan six, pp. 73 and 76; Nolan six, p. 53; Chapman's classmates eight, p. 509).
- The Friday evenings: they agree (Miller, pp. 29–30). Only the class page tells what was drunk.
- Page ranges: written one way on both pages, an en dash and the last two digits ("pp. 508–09," "pp. 139–40," "pp. 129–57"). No mismatch found.

86. Four places where the two pages differ in a word or a page. An examiner settles which is right; I mark only that they differ.
    - "Quizzed." The about page (row "Auden asked the class to take no notes") has Miller's Auden say the class "would be quizzed" on what they thought. Scene 2 of the class page says "examined," and [scenes[10].paras[0]] says "none of the accounts read for this site tells of a quiz." If "quizzed" is Miller's word, that sentence of scene 11 is too wide.
    - The questions for the next meeting: about, "Pearce, pp. 135 and 143"; class page, "pp. 135 and 143–44" ([scenes[5].parts[2].src], [scenes[10].parts[0].items[4].by]).
    - The "Lycidas" project: about, "(Pearce, p. 154)"; class page, "Pearce, pp. 154–55" ([scenes[12].parts[0].items[0].by]).
    - "Five blue books" on the about page; "five examination books" in [scenes[9].paras[4]]. One name for one thing: "examination books" is plain to a reader outside the United States.

## Corrections to marks already handed in

- Mark 40. Valéry is among the authors Auden names in scene 1, so "the poet" is not needed. Only the change of preposition stands. Put: "Then Auden talked briefly about Valéry, and Pearce kept none of it."
- Mark 33. My Put added one more sentence of the build marked in 87 below. Better: "In Prospero he saw Shakespeare's complete man, and Shakespeare himself, with the play as his testament." What I said of the word "testament" stands.
- Marks 6 and 7. The Pascal piece on this site words the same remark much as I proposed, so the fact is safe.

## Marks found on cross-checking

87. [scenes[7]] the whole scene: the build "X, he said, is Y"
    - Fault: a tic. Eleven sentences of scene 8 name their subject, break off for "he said" (or "he told the class," "he added," "he went on") and resume: "A reader, Auden said first," "The late plays, he told the class," "In Shakespeare, he said," "What Ariel's song says, he told the class," "Prospero's fault, he said," "Faust, he added," "Miranda and Ferdinand, he said," "Gonzalo, he said," "Goethe, he went on," "The brilliant talkers of the earlier plays, he said," "In this play, he said." The speaker must stay named; the place of the naming can change.
    - Put, for three of them: "He told the class to read the late plays together, as the parts of one long poem." "He called Gonzalo the easiest person in the play to overlook." "He pointed out that in this play the clever man is a small-time villain, ready to stab a man in his sleep."
88. [scenes[7].paras[5]] "He is [Polonius](#/hamlet) done again…"
    - Fault: the link's label promises Polonius, and the *Hamlet* piece does not have his name in it (I searched site/data/pieces/hamlet.json). Nor does the sentence say who Polonius is.
    - Put: "He is the Polonius of [*Hamlet*](#/hamlet) done again, and this time Shakespeare finds something in him to respect."
89. [scenes[5].parts[1].paras[2]] "…in the same way (p. 143)."
    - Fault: a bare page is Pearce's everywhere on the page, but this is the first citation after "(Miller, p. 29)."
    - Put: "(Pearce, p. 143)"
90. [scenes[5].parts[1].paras[2]] "Then he gave the assignments."
    - Fault: it announces the part that stands directly under it, whose label says the same.
    - Put: cut.

Checked and not marked: the two links to the Pascal piece in [scenes[5].parts[0].follow[0]] and [follow[1]]. The piece does carry what Auden said of Pascal's two types and of Othello and Iago, so the labels promise no more than the links give.

Looks uneven on a blackboard, to be checked against Pearce and otherwise left: in scheme V of scene 6 the heading has "Naive" and the label under it "Naïve."

Outside my share, but it touches mark 13: scene 3 writes "esthetic" and "Esthetics" in its paragraph and "The aesthetic view" in its fold. One spelling for the page.
