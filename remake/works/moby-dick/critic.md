# moby-dick: the critic's report

Critic's record for "Ishmael and Ahab", 3 October 2026 (times are UTC),
after the examiner (`exam.md`), the artist (`art.md`) and the lead's
setting of three facts at 10:45 (end of `notes.md`). Begun 10:56,
finished 11:43.

The words of the novel are pointed at by row and word number, or named
singly as the captions already name them. Nothing of Auden's is quoted.
"Old" and "new" are the site's own sentences. Nothing in this file is
printed on the page.

In short: seven sentences changed in wording (section 2); eleven titles
marked in nine places (3); 28 named words marked in 17 notes and
remarks (4). For the lead to decide: what fails in two of the three
facts set at 10:45 and in the key that goes with them (7), five more
matters in the strings of the two drawn tabs (8), and eight sentences I
doubt (6). Nothing was taken out of the list of what Auden said. The
checker ends with no problems, no warnings, and the printed notes fit
to print (11).

## 1. What was read and run

- `remake/BRIEF.md`, `remake/CRITIC.md`, `remake/EXAMINER.md` ("The
  printed notes"), `exam.md`, `art.md`, the end of `notes.md`, the whole
  of `reading.json`, and `site/js/pieces/moby-dick.js` (read only).
- `node build/pieces.mjs moby-dick` at 11:01: the built piece came out
  the same, byte for byte, as the one the lead built at 10:44.
- `node build/tools/prose.mjs moby-dick`: 4,583 printed words, read once
  through before anything was marked.
- `node build/tools/check-reading.mjs moby-dick --print` before any
  change: no problems, no warnings, the printed notes fit to print.
- The pictures. For the first reading I used the artist's last set
  (09:56, every tab and the whole page) and, for the two drawn tabs as
  the lead has now set them, the artist's `proposed-*` pictures, which
  show the same two keys. The two runs of the picture tool allowed me
  were kept for the page as I leave it (section 9).

## 2. Changes of wording (seven sentences)

All in `reading.json`, by small exact edits. No number, name, page,
mark, ground, fact or quotation was touched, and no claim was added.
The `why` and `stands` of each changed caption still fit it, since no
caption now says anything it did not say before.

1. First passage, Sentence, caption.
   Old: "In the first and third clauses Ishmael says *I find myself*,
   said of what one does without meaning to."
   New: "... Ishmael says *I find myself*, a phrase for what one does
   without meaning to."
   Fault: "says ..., said of" stutters.
2. First passage, Word, caption.
   Old: "... is built on the Latin word for *will*, with *in-*, not; it
   goes with what Ishmael does ..."
   New: "... with *in-*, meaning not; it goes with ..."
   Fault: dictionary shorthand; "*in-*, not;" stops a reader who is not
   used to it.
3. Second passage, Word, caption.
   Old: "The Samuel Enderby's surgeon later calls the whale's malice
   mere awkwardness, ..."
   New: "The surgeon of another ship, the Samuel Enderby, later calls
   the whale's malice mere awkwardness, ..."
   Fault: a name left unexplained. A reader who has not read the book
   meets "The Samuel Enderby" here for the first time and cannot tell
   that it is a ship; the page says so only in the Ships drawing, the
   last tab of the next passage. The caption is now 113 words. This is
   the one change that puts words in that were not there; the lead may
   put it back.
4. Third passage, Word, the note on the word at row 15.0, words 26-27.
   Old: "A contraction of that phrase, written godbwye in the 1570s and
   shaped by good day and good evening."
   New: "A contraction of *God be with ye*, written *godbwye* in the
   1570s and shaped by *good day* and *good evening*."
   Fault: "that phrase" pointed at the gloss, which stands under the
   word in the passage, not beside the note; in the list of notes it
   pointed at nothing.
5. More from Auden, first entry (`auden[0].says`), last clause.
   Old: "... so he is driven to a drastic remedy: the sea."
   New: "... so he must take drastic measures and go to sea."
   Fault: an ending that poses (a colon, then two words kept back for
   effect). The new clause is also nearer the page it paraphrases (*The
   Enchafèd Flood*, p. 36, read again in the scan), which has "measures"
   and no "remedy"; two of his words are shared, none is quoted.
6. More from Auden, second entry (`auden[1].says`), first words.
   Old: "The 1945 essay calls the book four things at once ..."
   New: "Auden's essay of 1945 calls the book four things at once ..."
   Fault: a working label. "The 1945 essay" is how the makers speak of
   it; the list has not named it, and the reader last met it in the
   small type under the view.
7. More from Auden, sixth entry (`auden[5].says`), last clause.
   Old: "... he calls most American novels parables."
   New: "... he called most American novels parables."
   Fault: the sentence and the one before are in the past (called,
   said, wrote) and the last verb alone was in the present.

## 3. Titles marked (nine places, eleven titles; no wording changed)

The one the artist reported (art.md, section 8, item 1) and every other
title in the same state. A book, a newspaper's review section: between
asterisks. An essay or a short poem: curly quotation marks, as they
already stood.

| place | marked |
| --- | --- |
| `where` | *Moby-Dick* |
| `view.source` | *The New York Times Book Review*; *The Enchafèd Flood* |
| `auden[0].source` | *The Enchafèd Flood* |
| `auden[1].source` | *The New York Times Book Review* |
| `auden[2].source` | *The Enchafèd Flood* |
| `auden[3].source` | *The Enchafèd Flood* |
| `auden[4].source` | *W. H. Auden: The Far Interior* |
| `auden[5].says` | *New Year Letter* (the artist's finding) |
| `auden[5].source` | *Auden: An American Friendship*; *New Year Letter* |

`where` and each `source` are printed in italic, so a marked title now
stands upright in them, as on the other pieces; in `auden[5].says`,
which is roman, the title is now italic, as it is in the Sources. Seen
in `shots/critic/moby-dick-page-1280-0.png` and `-3.png`.

Looked at and left bare, because the rule is for titles:

- Ships' names (the Pequod, the Rachel, the Samuel Enderby and the
  rest) are in roman everywhere on the page, as the text printed here
  has them. They are names, not titles.
- "Beethoven's Fourth Piano Concerto" (`auden[4].says`): the name of a
  kind of piece with its number, which is not set in italics.
- "the Castle" in the same entry is the place in Kafka's novel, set
  beside the White Whale; it is not the title.
- The books of the Bible, the Online Etymology Dictionary,
  Merriam-Webster, Wiktionary and Wikipedia are roman in the Sources and
  in the folded notes, and I left them so.
- `about` and `view.says` name no title.

## 4. Named words marked in the small notes (17 notes and remarks, 28 marks)

A word spoken of as a word now stands upright in the italic of its
note. Nothing else in these notes was changed, except the one sentence
in section 2, item 4. No gloss names a word of another language, so no
gloss was marked.

First passage, Word (`plates[0].lenses[2].notes[n].note`):

- n 0: *voluntas*, *in-*
- n 1: *hypochondria*
- n 3: *deliberare*, *libra*
- n 4: *methodos*, *hodos*

Second passage, Beat (`plates[1].lenses[0].points[n].say`):

- n 1: *wherever*
- n 2: *fixed*, *purpose*

Second passage, Word (`plates[1].lenses[2].notes[n].note`):

- n 0: *turbidus*, *turba*
- n 1: *invidere*
- n 2: *overwhelm*
- n 3: *groove*, twice (the verb that "dates from the 1680s", and the
  noun that "was also a fixed routine")
- n 4: *sound*
- n 5: *rifle*
- n 6: *Un-*, *err*, *errare*

Third passage, Word (`plates[2].lenses[2].notes[n].note`):

- n 1: *houd vast*
- n 2: *God be with ye*, *godbwye*, *good day*, *good evening*
- n 3: *Rahel*
- n 4: *because they are no more* (the words of the modern version)

Seen upright in the italic in `shots/critic/moby-dick-rails-0-beat-1280.png`,
`moby-dick-rails-2-word-1280.png` and `moby-dick-rachel-2-word-1280.png`.
The first passage's Word tab was not photographed again (two runs, two
passages: section 9); its notes are set by the same code as the other
two.

Named words I could not mark, for the lead:

- The line of plain words under a figure's name (`plain`) is printed in
  italic too, and two of them name words: "with no like or as" (second
  passage, Figure) and "more loosely called chiasmus" (third passage,
  Figure). The kit sets `plain` as bare text (`site/js/kit/lens-figure.js`,
  the line that appends `class: 'plain'`), so asterisks there would be
  printed as asterisks. I left both as they are. If the kit comes to
  read `plain` as it reads a note, mark *like*, *as* and *chiasmus*.
- `auden[0].says`: Melville's word isolato is named as a word and
  stands in roman. CRITIC.md marks only titles in `says`, so I left it;
  `*isolato*` would set it in italics if the lead wants it.

## 5. What recurs, with counts

Counted in the eleven captions as they now stand, unless said otherwise.

- **Auden in every caption.** 12 sentences about him in 11 captions
  (the third passage's Word tab has two). 7 of the 11 captions end on
  that sentence; in 4 it stands in the middle. The frames vary: "For
  Auden" 3 times (and once more at the head of the view), "Auden wrote
  that" twice, and once each "Auden prints", "Auden's image ... is",
  "Auden quotes ... where he says", "Auden notes that", "Auden says
  that", "Auden writes of", "Auden reads". No one frame is a tic. The
  placing is the method (what is there, then the reason, then where it
  meets his view), and the examiner moved three of these sentences to
  the end on purpose. I changed none. A reader who opens all four tabs
  of the third passage does hear it: five sentences about Auden in
  four captions, three of them last.
- **The list says again what a caption has said.** 4 times: the first
  entry and the first passage's Figure caption (the sentence set beside
  Coleridge and Baudelaire, almost word for word, "how it feels" and "a
  solitary" in both); the second entry and two captions (consciousness
  and no will; unrepenting, like Shakespeare's tragic heroes); the third
  entry and the Ships tab (see section 6, item 5). In the first three
  the list gives the fuller form (the first entry adds the titles of
  the two poems), and I left them.
- **The frames of a Word tab.** "means" or "meant" 6 times, "built
  on" 3, "comes from the Latin" 2, all in the first two Word captions
  and the first passage's other two. That is what a Word tab is for;
  none stands twice in one sentence.
- **"here"** for "in the part shown": 5 times (three of them in the two
  Sentence captions, where the passage is cut and the count needs it).
- **"the mystery of existence"**: 3 times in sentences (two captions,
  one entry), and "the mystery" in seven of the nine lines of the
  column headed "Auden" in the Ships drawing. It is his term, and the
  column is his list.
- **"stands to" and "standing toward"** for a relation: 3 times (the
  Ships caption, the third and fifth entries). Plain enough; left.
- **Length.** Ten captions are 109 or 110 words and one is now 113.
  None is over 120. A reader does not see this; the lead may like to
  know that every caption was written to one length.
- **House style.** The printed words were scanned again after my
  changes: no dash inside a sentence, no question, no "we", none of the
  stock words of BRIEF.md or CRITIC.md, and none of the verbs BRIEF.md
  forbids (offers, suggests, enacts, embodies, mirrors). The one "not
  ... but" is inside Auden's quotation at the head.

## 6. Sentences I doubt and did not change

1. **Second passage, Beat, last sentence** ("For Auden, Ahab dies
   unrepenting, like Shakespeare's tragic heroes."). The caption does
   not say what this has to do with the beat, and Auden says nothing
   about the rhythm of the speech (the poet looked: notes.md, section
   9). The join is that both this sentence and the one on blank verse
   have Shakespeare in them. It is true and exact, and it does not
   claim to be the reason. But it stands where the reason stands in the
   other captions, and a reader may take it for one. The reason this
   caption needs is already there, and it is the book's own (Chapter
   16). This is the weakest join on the page. If the lead cuts the
   sentence, the `why`, the `stands` and one ground go with it; the
   same words stay in the list's second entry. Also here and in that
   entry: "unrepenting". The ordinary word is "unrepentant", and it is
   Auden's own; I took the poet's word for a way of keeping off his
   sentence and left it.
2. **Third passage, Word** ("Auden writes of a religious hero whose
   god is his own will, set in defiance."). It stands between Ahab's
   wish and Jeremiah with nothing to say why. The examiner rightly took
   out the claim that Auden says this of Ahab, and the fifth caveat
   explains what is left. The reader of the tab does not have the
   caveat open. As it stands the sentence leans wholly on being set
   beside the wish. The caption has a second sentence on Auden (the
   Rachel) and would not lack him without this one.
3. **First passage, Figure.** The sentence on Auden stands between two
   sentences about the list ("... one list. Auden prints ... The list
   runs ..."), so the account of the list is broken and taken up again.
   Moving a sentence is not among the changes I may make, so it stays.
   The caption ends well as it is, on the book's own words.
4. **More from Auden, sixth entry** ("most American books could open
   the way this one does"). The page never shows how this one opens:
   the first passage begins at word 56 of the paragraph. Auden's note
   itself gives the book's three opening words (research notes,
   `C_auden_on_works.md`, section 21, the line that quotes the note). A
   reader who does not have them by heart cannot see his point. Naming
   them would add words to a paraphrase, so I left the sentence; they
   are out of copyright, and the lead may add them.
5. **More from Auden, third entry.** It says again, kind by kind, what
   the column headed "Auden" prints in the Ships drawing, and what the
   Ships caption sums up. With six entries the rule keeps it, since it
   bears on the third passage, and a reader who does not open that tab
   has it nowhere else. It is the one entry the page would not miss.
6. **First passage, Sentence** ("to escape spleen"). The word is not
   explained. It is Auden's (p. 112) and Melville's own, in the sentence
   before the passage (word 51 of the same block). The same caption
   speaks of "his low spirits" and the Word tab explains the word at 98
   as low spirits, so I left it.
7. **Third passage, Ships, last sentence** ("In the Epilogue the Rachel
   picks up Ishmael."). A short sentence kept for the end. It is a
   fact, the drawing prints it too, and it sends the reader on to the
   end of the book, so I did not count it as a pose.
8. **More from Auden, fifth entry** ("or K. and the Castle"). Nothing
   says whose K. and whose Castle. A reader of this site can find
   Kafka's book among the works of the course, and most will know it;
   one who does not is stopped. "Or Kafka's K. and the Castle" would
   mend it. That adds a name to a paraphrase of what a student wrote
   down, so I left it for the lead.

No tab only names things. What a reader has at the end of each that
they did not have before:

- First passage. Sentence: the main clause is kept to the end of 87
  words, and the grammar makes Ishmael the one things happen to.
  Figure: one word heads four clauses and one *then* answers them all,
  and the acts are ones that come back. Word: the two adverbs of
  purpose go only with the acts he has to be kept from.
- Second passage. Beat: prose that keeps the foot of blank verse for 38
  feet, and the places where it leaves it. Figure: from a ship's track
  to iron rails, in two verbs that name no doer. Word: the word of ill
  will he gives the waves, and the mountains cut as his soul is. Play:
  five chapters set like scenes, each farther forward and later, with
  the narrator silent in four.
- Third passage. Figure: the two verbs cross from one speaker to the
  other, and *must* takes the place of *will*. Sentence: Gardiner's
  sentences carry a condition and a comparison, Ahab's none. Word: the
  word of parting has God in it and his next wish has not, and whose
  children Rachel's are. Ships: what each of the nine ships tells Ahab
  of the whale, and where the Rachel stands among them.

## 7. The three facts set at 10:45, read as printed words

Not changed by me. Each was read where the page prints it
(`shots/critic/moby-dick-rails-3-play-1280.png` and `-390.png`,
`moby-dick-rachel-3-ships-1280.png` and `-390.png`) and set against the
text printed here with `build/tools/show.mjs`.

### 7.1 `sternToBow` (second passage, Play): passes

- What is printed: the first and the last name, "at the stern" and
  "toward the bow", at the two ends of a short rule; a tick for each of
  the three steps; each chapter's mark at its step. The middle name,
  "at the mainmast", is not printed, and nothing is lost: the line of
  Chapter 38 says "the mainmast".
- True to the text: the title of Chapter 36, and the stage directions
  and headings of Chapters 37 to 40 (c037 block 0, c038 block 0, c039
  blocks 0 and 1, c040 title and block 1), with the four places as
  Merriam-Webster gives them.
- It bears out the caption and claims no more than it. "Each farther
  forward and later" is said of the three who speak alone, and they
  stand left, middle and right. Chapter 36 shares a step with 37 and
  Chapter 40 with 39; the caption claims no step there.
- One remark, no fault: the two names are unlike in kind. "At the
  stern" is a place and "toward the bow" a direction, while the key
  (script line 207) calls the rule "the ship from end to end". It is
  right as it stands, since the fore-top and the forecastle are forward
  and not at the bow itself.

### 7.2 `quoted` on six of the nine ships (third passage, Ships)

- True to the text. A question of Ahab's in direct speech stands at
  c052 block 2 and c071 block 12 (six words each, and not the same
  six), and in the same five words at c100 blocks 1 and 3, c115 block
  8, c128 block 2 and c131 block 2. None is given at c054 block 2 or
  c081 block 7. So the six filled dots, the four lines that say "in the
  same five words" and the caption's "six", "four" and "five" agree.
- "in the same five words" (meetings 6 to 9): passes. At meeting 6 it
  follows "Ahab hails her twice" and is read with it; at 7, 8 and 9 it
  looks back to 6.
- **"in his own words" (meetings 1 and 3): weak.** In the caption the
  phrase has its verb: the question "is given in his own words". On the
  drawing it follows "Ahab hails her" and "Ahab asks", and there it can
  only be read as the way Ahab speaks, which says nothing, since any
  hail is in the hailer's own words. What is meant is that the book
  prints his words. The same list already has the plain way to say so,
  at meeting 4: "his words are not given". For `ships[0].quoted` and
  `ships[2].quoted`: "his words are given". That also ends the look of
  two kinds ("his own" against "the same five") where there is one
  kind and a narrower one.
- **The key that these values bring with them fails at meeting 5.**
  Script line 316: "the question is quoted" and "it is not". The ring
  at meeting 5 says the question is not quoted; the line beside it says
  "Stubb asks and reports to Ahab"; and in Chapter 91 Stubb's question
  stands in quotation marks (c091 block 13, and again in other words in
  block 15). The key means Ahab's question, as the caption does, and
  does not say so. The artist took his name out of this label because
  the script types no name of the book (art.md, section 7, last item).
  So the two labels have to come from the reading: for example two new
  printed keys in `facts`, "Ahab's words are given" and "they are not",
  read by the script at line 316. With "his words are given" at
  meetings 1 and 3, the key, the lines and the caption would then say
  one thing.

### 7.3 `sameWords` (third passage, Ships): one word fails

- Where it is printed: with `quoted` set, no longer in the open under
  the drawing but in the fold "The counts" (script lines 305 and 322),
  as the first of the two entries there.
- True to the text: in Chapter 100 the five words stand twice, in the
  hail (block 1, which block 2 calls a hail) and again across the water
  (block 3). The third question of that chapter (block 29) is another
  question, asked on board, and no hail.
- **"in Chapter 100 he hails her twice": "her" has no ship before it.**
  The sentence has named six chapters and no ship, and in the fold it
  stands apart from the nine lines. The wording it replaced ("he asks
  twice") had no pronoun to lose its noun. With the lead's sense kept:
  "in Chapter 100 he hails the Samuel Enderby twice".
- The rest of the sentence reads rightly.

## 8. The other printed words of the two drawn tabs

Read in the pictures named in section 7, in the artist's picture of
the opened fold (`shots/open-rails-3-play-1280.png`), and in the script
and the facts for what a picture does not show (the line that answers
the pointer, the fold of Ships). The script was not edited. Each change
below is for the lead, by key or by script line.

Passes as it stands: both lines printed over the drawings (`what`).
In Play: the two headings, the list of the twelve chapters, the five
lines of hour, place and speakers, the sentence on Chapter 41 (`after`),
the five labels of the key, four of the five lines that answer the
pointer, the table in the fold and four of the five lines under it. In
Ships: the three column heads, the nine names, the two sentences after
the ninth ship (`after`), the label of the red dot, the label a phone
adds for Auden's column, and `asked` in the fold. The caption's list of
answers (eight things for nine ships, the fourth and fifth told
together) follows the nine lines in order, and its "six", "four" and
"five" are the drawing's.

For the lead, the weightiest first:

1. **Ships, key, script line 316.** See 7.2: the two labels fail at
   meeting 5.
2. **Ships, `facts.sameWords`.** See 7.3: "her".
3. **Ships, `facts.ships[0].quoted` and `ships[2].quoted`.** See 7.2:
   "in his own words".
4. **Ships, `facts.ships[3].Auden` and `ships[4].Auden`.** Each line
   tells both ships at once and sorts them in brackets: "with the
   Rose-Bud: people too lazy (this ship) or too greedy (the next) ever
   to notice the mystery", and the same again turned round. It is the
   one place in the drawing that reads as a working note. Auden's line
   (p. 61) gives the two ships one sentence with "respectively", so
   each line can keep its own half: for the Jungfrau "people too lazy
   ever to notice the mystery", for the Rose-Bud "people too greedy
   ever to notice the mystery", with "(Auden pairs her with the
   Rose-Bud)" and "(he pairs her with the Jungfrau)" after them if the
   pairing is to be kept.
5. **Ships, `facts.ships[5].answer`**: "and he will not lower for him
   again". "Lower" is the whaleman's word for putting the boats down to
   give chase, and it is the English captain's own (c100 block 36), but
   the page nowhere explains it (this is the only place it stands), and
   "he" is the captain and "him" the whale with nothing between them to
   tell them apart. Plainer: "and the captain will not hunt him again".
6. **Play, `facts.inARow[2].place`**, printed when the pointer is on
   the line of Chapter 38 (script line 180): "Starbuck calls the
   revelry forward and the silence aft". "Calls ... forward" reads at
   first as a summons. What is meant (c038 block 3) is that he says
   where each is. Plainer: "Starbuck says the revelry is forward and
   the silence aft".
7. **Play, `facts.audenQuotes`**, printed in the fold. Two small
   things. The title in it is roman, where the Sources set the same
   title in italics; the fold's sentences are set as bare text (script
   line 70), so asterisks there would be printed as asterisks, and the
   title can be italic only if the script reads these sentences as it
   reads a note. And "pp. 126-27" has a hyphen where every other range
   of pages on the page has the longer stroke ("pp. 126–27" in the
   Sources).
8. **Ships, `facts.after`**: "still searching for her missing
   children". The three words after "for" are the Epilogue's own (its
   last sentence), said here in the site's voice. No fault: the Word tab
   has told the reader who Rachel's children are. If the lead wants them
   shown as the book's words, asterisks would set them upright in that
   line, which the kit reads as a note.

Each thing the two captions point at can be found in its drawing (the
caption's "up the foremast" is the drawing's "the fore-top", which the
pointer explains), and no string in either drawing is a working word.

## 9. The page and the pictures

The picture tool was run twice, after my last change to the reading
(11:14) and the build that followed it (11:17), each time into a folder
of my own so that nobody else's pictures were written over:

- 11:17:57 to 11:18:48, `node build/tools/shoot.mjs moby-dick --out
  remake/works/moby-dick/shots/critic --plate rails --page`: the whole
  page at both widths (five pictures at 1280, seven at 390) and the
  four tabs of the second passage at both widths.
- 11:19:52 to 11:20:17, the same with `--plate rachel` and no `--page`:
  the four tabs of the third passage at both widths.

Both runs ended "nothing reported; now look at the pictures". The 28
pictures are in `shots/critic/`. The first passage's Figure and Word
tabs were not photographed again. Its Sentence tab is in the page
pictures, with its changed caption. The Word tab's changed caption and
the marks in four of its notes I checked in the built piece
(`site/data/pieces/moby-dick.json`) and in the listing of printed
words; they are set by the same code as the notes I did see.

What the pictures show of my changes: every title stands upright in the
italic of the line under the title and of the source lines, and italic
in the roman of the sixth entry; every named word stands upright in the
notes of the Beat tab and of the two Word tabs photographed; six of the
seven changed sentences read rightly where they stand (the seventh is
in the first passage's Word tab).

What got in the way of reading. I leave out, as told, where a line
turns, where a gloss or a caption stands and how tall a passage is on a
phone. What is left is a matter of words and of order:

1. **Ships, the key.** The two labels and the fifth ship (7.2). This is
   the one place where the page says something a reader can catch out.
2. **Beat, the first line of the key.** Under "The measure" the reading
   says "an off-beat, then a beat". The first label of the key, one
   line lower, says "the meter: beat, off-beat". The label is the
   kit's and stands on every Beat tab (`site/js/kit/lens-beat.js`, line
   166); it names the long and the short tick of the mark beside it. On
   this page the two orders stand one above the other and look like a
   contradiction. "The meter: a long tick for a beat, a short one for
   an off-beat" would not.
3. **The third passage, tab after tab.** A reader who opens all four
   tabs reads five sentences about Auden, three of them last. The nine
   kinds of people are told twice, in the drawing's column and in the
   third entry of the list, and the Rachel's kind a third time in the
   Word caption (section 5; section 6, item 5). Each is right where it
   stands. Together they are the place where the page comes nearest to
   repeating itself.
4. **The name of a ship before the page explains it.** Mended in the
   second passage's Word caption (section 2, item 3). The same ship is
   the one that `sameWords` calls "her" (7.3).
5. **The fold "The counts".** With the dots now saying which questions
   are given, the sentence that counts them is folded away, and it is
   the fullest account of the matter on the page. No fault: the caption
   gives the counts. It is the reason the one word in 7.3 matters less
   than the key in 7.2.

In the pictures I opened, nothing was too small to read at either
width.

## 10. The list under "More from Auden"

Six entries, and nothing taken out, so `notes.md` was not written.
Each was asked whether it bears on a passage shown, or on the work as
he taught it, or was said in 1941:

1. Ishmael's kind, and the city that closes no direction to him: on
   the first passage, part of whose sentence Auden prints.
2. The essay of 1945 on what the book is, on Ishmael and on Ahab's
   death: on the work, and one ground of the view at the head.
3. The nine ships: on the third passage. It repeats the Ships drawing
   (section 6, item 5). It is the one entry the page would not miss,
   and the rule keeps it.
4. Ahab glad of pain, with Auden's sentence on the cross: from the page
   where he comes to the Rachel, so on the third passage.
5. The class of 1941, with the concerto: said in 1941, and on the
   subject of the course.
6. The student's memory of how to read the book, and the note published
   in 1941: said in or about 1941.

No two say the same thing, none names the book only in passing, and
there are fewer than eight. The wording changes in the first, second
and sixth are in section 2; the title marked in the sixth is in
section 3.

## 11. The checker, what was run, and what was refused

After the last change, `node build/tools/check-reading.mjs moby-dick
--print` (run again at 11:37, the reading unchanged since 11:14) ended:

```
no problems
no warnings
the printed notes are fit to print
```

There were no warnings to read, before my changes or after.

What was run, and what it wrote besides the files I may write:

- `node build/pieces.mjs moby-dick`, at 11:01 and after my last change
  at 11:17: `site/data/pieces/moby-dick.json` and
  `site/data/pieces/index.json`.
- `node build/tools/prose.mjs moby-dick`, before and after:
  `review/remake/prose/moby-dick.md` (4,583 words before, 4,592 after;
  the nine more are in section 2, items 1, 2, 3, 4 and 6).
- `node build/tools/shoot.mjs`, twice (section 9): the pictures in
  `shots/critic/`.
- `node build/tools/show.mjs`, to read the text printed here: it writes
  nothing.

The first three, with the checker, are the commands CRITIC.md sets out.
The three files of the first two lie outside the four places the lead
named, and they are written by the tools, not by hand.

One slip, mine. Early in the run I sent the checker's first printout to
a file in the session's scratch folder under `/tmp`, which is not one of
the places I may write. I removed the file at once and touched nothing
else there.

The permission system refused nothing. Nothing was installed, published
or sent, no other agent was started, the script and the `facts` were not
edited, and `notes.md` was not written.
