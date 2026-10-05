# Horace: the examiner's record

Examiner started by the lead (examiner.txt, 2026-10-03 06:54 UTC).
No line of Horace or of Conington is written in this file. Words are
pointed at by row and word number; the checker's proof prints them.

## State when I began

- `node build/tools/check-reading.mjs horace`: no problems, no
  warnings, printed notes fit to print (the poet's hand-in).
- Three passages: Odes I.14 lines 1 to 4 (ship), I.3 lines 21 to 24
  (crossing), IV.2 lines 25 to 32 (bee). Ten lenses. Ten entries
  under what Auden said, fifteen sources, five caveats, thirteen
  items in `open`.

## What was tested, in the order of EXAMINER.md

### 1. Proof

`node build/tools/check-reading.mjs horace --proof`, read mark by
mark against the caption that names the word. Every figure part,
word note, beat point and tie lands on the word meant. No number
was moved.

### 2. Ear (the two Measure tabs, and the scans behind the Book tab)

Nothing was scanned by hand. `build/tools/latin.mjs` was run on
`horace-la o1-14 0` with `--meter ascl,ascl,pher,glyc` and on
`horace-la o4-02 6 7` with `--meter sapphic`.

- All twelve rows fit. The `meter` string of every row in
  reading.json is the string the tool prints by length.
- The `voice` strings are the tool's strings by stress, plus what
  the tool leaves to the reader: words of one syllable. The poet
  dotted three (w0 of row 0.0, w1 and w2 of row 0.1: two
  interjections and a question word) and left five undotted (w3
  and w5 of 0.0, w3 of 0.2, w3 of 6.1, w3 of 7.0: prepositions, a
  conjunction, a pronoun). Allen and Greenough, section 12, gives
  the accent of words of two syllables and more and says nothing
  of words of one. So these eight marks are a reader's choice. I
  let them stand; the first caveat says so in print.
- The lone bar: after the sixth syllable of rows 0.0 and 0.1, and
  after the fifth of the six long rows of the third passage. Each
  falls at a word-end (counted from the tool's syllables). In
  A&G section 626 the break is printed after the sixth syllable
  of each lesser Asclepiadic and after the fifth of each lesser
  Sapphic in the examples (counted by a script over the page).
  The edition's Introduction to the Metres says the lesser
  Sapphic always has a caesura in its dactyl.
- "The dots fall on long and short syllables alike": in row 0.0
  the dots stand over syllables 1, 2, 4, 8 and 11, of which 1 and
  2 are long and 4, 8 and 11 short. True.
- Row 6.2: the tool marks one syllable of w2 as not counted (it
  runs into w3). The caption says so. Right.
- The whole of IV.2: 57 of 60 rows fit as the tool divides them.
  The three that do not are row 0.1 (a name with a consonant i,
  which the tool reads as a vowel) and rows 5.1 and 5.2 (each
  ends in an enclitic whose vowel runs into the next line). None
  is shown. Fifteen blocks of three long rows and one short.
- The twentieth word: the sentence that begins at w2 of row 6.2
  has twenty words and its verb is w1 of row 7.3. Counted.
- Row 5.0 of I.3 (not a beat lens, but the gloss depends on it):
  the glyconic needs the second syllable of w2 short, which makes
  it the perfect of *abscindo* and not of *abscido*. Lewis and
  Short cite the line under *abscindo*.

For the Book tab every ode of the Latin printed here was scanned
against the measure its list gives it (a script over
`latin.mjs`, kept in the scratchpad). Of 2,850 rows in the
ninety-six odes in Alcaic, Sapphic and Asclepiadic measures,
2,809 fit as the tool divides them; no ode has more than four
rows off, and the rows off are of the kinds the tool's head
warns of. I.3 fits in all forty rows, I.14 in all twenty. The
seven odes in the six other measures were not scanned by
pattern (the tool has no lines for them); their rows were
counted by syllable and have the lengths those measures need.

### 3. Terms, and what the page joins

- *Allegory* (first passage). Quintilian 8.6.44, read in Latin
  (The Latin Library) and in Butler's English (LacusCurtius):
  one thing in the words and another in the sense, mostly by
  continued metaphors; his example is this opening, down to the
  harbor word, with the three equations the labels give. His
  definition has a second branch (words that mean the opposite),
  so the plain line now says "from the definition". Butler's
  introduction: Quintilian taught at Rome for twenty years.
- *Synchysis* (second passage). Allen and Greenough 598h: the
  interlocked order, the attribute of one pair between the parts
  of the other, "a favorite order with the poets". In rows 5.2 to
  5.3 the order is adjective of the ships, phrase for the
  waters, ships, verb, waters. It is what the name says.
- *Antithesis* (third passage). The term had no ground. A&G 641
  (glossary of figures; the Perseus page for 641 would not load,
  so it was read in the Dickinson College copy): "opposition, or
  contrast of parts". Added to the grounds and the printed note.
- What the page joins. Built with `node build/pieces.mjs horace`
  and photographed with `build/tools/shoot.mjs` at 1280 px
  before the mending and again after it (see the end of this
  file). Order: five colors and one arc, inside row 5.3 (the
  waters pair). Allegory: three single numbered words, no stroke.
  Contrast: arcs only inside row 6.0 and row 6.2. No stroke joins
  two parts the caption keeps apart. No `join` was changed.

### 4. Words (Lewis and Short at Perseus, each entry opened by me)

Entries opened: nequiquam, abscindo, prudens, dissociabilis,
impius, tango, ratis, transilio, vadum, deus, Oceanus, terra,
novus, navis, fluctus, portus, occupo, fortis, Dirce, cycnus,
Matinus, Venusia, Tibur, operosus, uvidus, thymum, carpo, fingo,
parvus, mos, modus, levo, aura, multus, nemus, numerus, solvo,
deduco, Aeolius, princeps, tendo, quotiens, altus, nubes, apis,
labor, gratus, ripa, carmen, refero. (The entry for the
preposition in row 7.1 would not load; nothing leans on it.)
Found:

- *prudens* (w0 of row 5.1). The gloss was "foreseeing" and the
  caption said the glosses are from Lewis and Short. The
  dictionary derives the word from *providens*, calls the sense
  foreseeing "very rare", and cites this very line under II.A.2.b,
  "knowing, wise, discreet, prudent". "Foreseeing the evil to
  come" is the edition's note on line 22. The Loeb's English,
  which Auden prints, speaks of the god's purpose. Mended: gloss
  "foreseeing, knowing"; the note and the caption say which book
  says which. The Online Etymology Dictionary under *prudent*
  agrees (rarely in the literal sense).
- *transilio* (w3 of row 5.3). The note and caption said the
  dictionary's first example with an object is Remus leaping the
  new walls, "and is killed for it". The first half is in the
  dictionary. The second is from Livy 1.7, true, but it was set
  among "the words that judge the crossing", and no source opened
  says Horace's verb carries that. The other objects in the same
  list are flames, nets, a river and horses. Cut; the note now
  gives the list. Livy is gone from the sources.
- *tango* (w1 of row 5.3). The dictionary cites these waters under
  I.B.2.a, of places, "to reach, arrive at, come to". Added to
  the note.
- *aura* (w3 of row 6.0). "Wind" in the caption and the key. The
  dictionary's first sense is a gentle breeze; the edition's note
  on line 25 and the Loeb both say breeze. Mended to breeze.
- Everything else says what the reading says. The entries for
  nequiquam, abscindo, dissociabilis, impius, tango, transilio,
  vadum, occupo, Dirce, cycnus, carpo, fingo, mos, modus, numerus,
  solvo and deduco cite the very lines.
- Grammar (Allen and Greenough at Perseus): sections 12, 110,
  286, 500, 595, 597, 598, 607, 608, 611, 623, 625 and 626 opened
  and read. Each says what it is cited for.
- Online Etymology Dictionary: hubris, transgress, providence,
  prudent. As cited.

### 5. Auden

The Enchafed Flood, pp. 6 to 12, read again in the scan.

- The quote is exact (eleven words, p. 9).
- The view said the book "begins with the older view". It does
  not: it opens on Wordsworth's dream (to the foot of p. 5), and
  the section called The Sea begins on p. 6. Mended.
- The view said the ship of state comes in only when society is
  in danger "because a ship belongs in port", and the Allegory
  caption joined the same two statements with a colon. Auden's
  "In consequence" points back to the sea as the state of
  disorder (foot of p. 6); the sentence about the harbor follows
  as a statement of its own. Mended in both places, in my own
  words (an earlier draft of mine had nine of his words in a
  row; a check for shared runs caught it).
- "Horace is one of its witnesses" (under what Auden said): made
  plain. Horace is named twice in the book, the two quotations.
  Auden's own name for the older attitude, "classic", is on p. 10
  and is now given with that page.
- Found by opening the Loeb (see "The Loeb" below): the English
  under Auden's stanza of I.3 is Bennett's with two words
  changed; the English under his lines of I.14 is his own. A new
  entry under what Auden said records it.
- The Dyer's Hand p. 485 and p. 297; Forewords and Afterwords
  pp. 5 to 6, 124 and 326 to 327; Pearce p. 133: each read at the
  page given, each paraphrase within what he says. One trim:
  "share only rhythm" is now "share only that both are patterns
  of rhythm", which is what p. 5 says.
- Mendelson (full text fetched again from the Internet Archive;
  the same as the poet's copy). P. 416: "Horatian stanzas" is his
  name for the syllabic stanzas of the Freud elegy. The Book
  caption gave this as plain fact about Auden; it now names
  Mendelson. P. 747: the remark to Michie, as reported. Pp. 778
  to 779: what he calls wrong, and clear to Auden, is what the
  speakers say of Regulus; the entry and the caveat said "wrong"
  alone. Mended. P. 773 (new): "River Profile" (1966) is in
  twelve Sapphic stanzas; added to the Mendelson entry.
- The Contrast caption said the close of "The Horatians" "takes
  up this comparison". Nothing read says the poem has this ode
  in mind. It now says the poem "makes the same comparison", as
  Mendelson quotes it.
- The list under the passages: all eleven entries kept. Two are
  near the line EXAMINER.md draws (a work named in an essay on
  something else): Horace and Pope as the poets he goes back to
  (p. 124) and the three versions of a stanza of IV.7 (pp. 326 to
  327). Each says something of Horace or of translating him, so
  they stay. The third passage does not bear on the view (the
  sea); it meets Auden through Mendelson only, and says so.

### 6. The reason and its ground, caption by caption

Every sentence of every caption and `why` was set against its
ground. What did not stand, and what I did:

- View: two faults, given under 5. Its source is now pp. 6 to 7
  and 9, since the cause Auden gives is on p. 6.
- First passage, Measure. The caption said the break of the
  second line "comes at the question mark". The mark is an
  editor's: the Loeb text, which Auden quotes, has an
  exclamation mark there. A sentence ends at that word in both
  printings, so the caption now says that a sentence stops at
  the break and does not name the mark. The fifth caveat tells
  the reader. Syllables behind "the dots fall on long and short
  syllables alike" checked against the headwords (navis long;
  refero, mare, novus short). The claim does not lean on any
  word of one syllable.
- First passage, Allegory. "None of the ode's twenty lines
  names Rome": the ode read through in the checker's and the
  site's output; its proper names are a wind, a Pontic pine and
  the Cyclades. True. Cicero's ship was known only through the
  dictionary; I read the sentence in Pro Sestio 45 to 46 (The
  Latin Library) and the caption now follows it ("tossing in
  storms of discord"). The edition's note says "seems to be a
  close imitation" of Alcaeus, as the caption has it.
- First passage, English. Stands (preface read: metrical
  conformity, Milton's version as the model for this stanza,
  ten and six syllables, rhyme added). One sentence of Auden
  made exact (under 5).
- Second passage, Order. "That puts the weight on" stated as
  fact what is the grammar's rule applied; now "By that rule the
  weight is on". A&G 598a itself draws the inference for an
  adjective before its noun.
- Second passage, Words. Two mendings under 4. "The edition sums
  up the ode as a lament" trimmed what the note says (reproaches
  against the first sailor, and a lament for the presumption of
  mankind); now "finds in the ode a lament".
- Second passage, English. A tie said Conington's note "says his
  own adjective comes from" a line of Matthew Arnold's. The note
  only sets Arnold's line under his two words; mended. The same
  tie now says what I found: the English Auden prints under the
  stanza has that adjective too. Another tie said the noun of
  the ships' adjective is "two words on"; two words and a line
  end stand between them, and it says so now.
- Third passage, Contrast. (a) The paraphrase changed the
  grammar: the breeze lifted the swan "into" the tracts of cloud.
  In the Latin w0 of row 6.1 is a verb of its own: he is lifted
  whenever he makes for them. (b) "Shape songs with labor": the
  phrase for labor (row 7.0 w3-4) stands in the clause about the
  bee's gathering. The second sentence is now paraphrased in the
  order of the Latin. (c) The word at w0 of row 7.1: see under
  the open items. (d) "Takes up this comparison": see under 5.
- Third passage, Measure. Stands as written. Fifteen stanzas
  counted; the third stanza read for what it says of Pindar's
  dithyrambs; numerus and solvo cite the words.
- Third passage, English. "Horace's last word is his verb": the
  ode goes on for seven stanzas. Now "Horace's sentence ends on
  its verb", and the tie the same.
- Third passage, Book. The numbers stand (recount under 2 and
  in the facts' source note). The last sentence gave as plain
  fact what is known only through Mendelson; it now names him.
- `about`: the first passage's verb is future (the waves will
  carry the ship back); "are carrying" was Auden's English, not
  the Latin. Mended. "John Conington's English verse of 1863":
  the text shown is the third edition, 1865; now "first
  published in 1863".

After the mending every caption still gives a reason, and each
`grounds` list matches its caption. No lens was removed.

### 7. Prose

The checker's lint is clean. No dashes, no stock words, American
spelling, present tense. One sentence is ungainly on purpose:
the paraphrase of the second sentence of the third passage
follows the Latin order so as not to decide what the place
belongs to.

### 8. Rules

- No two words of Horace or of Conington stand together in
  reading.json or in this file. A script compared every pair of
  neighboring words in the Latin of I.14, I.3, IV.2, I.11 and
  III.30 and in Conington's I.14, I.3 and IV.2 with both files.
  It found only chance pairs of small words, and two phrases,
  which I reworded (one was mine, in `about`).
- Copyright. A second script looked for runs of five or more
  words shared with the scans of Auden, Pearce and Mendelson.
  Only the view's quote (eleven words) and titles are shared.
- The passages are four, four and eight lines.

### 9. The printed notes

`node build/tools/check-reading.mjs horace --print` lists
nothing under PRINTED NOTES. What changed in them:

- `view.source`: pp. 6–7 and 9. One `auden[].source` widened
  (pp. 10 and 12), one new (the two books compared), one with a
  page added (Mendelson p. 773).
- `sources`: Conington's third edition dated (London, Bell and
  Daldy, 1865); the Loeb added; Livy removed; Cicero's Pro
  Sestio entered as read; *prudent* added to the etymologies;
  A&G 641 added.
- `stands`: Allegory, Words, the English of the second passage,
  Contrast and Book rewritten to match their captions. The
  others stand.
- `caveats`: five. The third now says exactly what Mendelson
  says; the fourth is about the unmarked word and the two ways
  of construing; the fifth gives the editions and the stop.

## The Loeb (the edition on Auden's list)

The poet could not open it. I found it at the Internet Archive:
item `in.ernet.dli.2015.98705`, Horace, The Odes and Epodes,
translated by C. E. Bennett, a later Heinemann and Harvard
printing (the date on its title page is misread in the scan's
text). First published 1914. What it shows:

- Row 0.1 of the first passage: the Loeb prints a full stop
  after w0 and an exclamation mark after w3. Auden's quotation
  (p. 7) has the exclamation mark. So it is not a slip of his:
  he follows the Loeb. The edition printed here has a question
  mark. Bennett's English makes the phrase a one-word warning;
  Auden's own English under the lines asks a question.
- The stanza of I.3: the Loeb spells w0 of row 5.0 without the
  c, as Auden does and the edition here does not. Auden's
  printing ends w2 of row 5.1 in -e; both editions have -i.
  That is a slip of his printer or of the scan. Not shown.
- The English under Auden's stanza (p. 9) is Bennett's, word
  for word but for two words: thirty-three words compared by a
  script, and the two that differ are the noun for the sea and
  one adverb. Bennett's phrase for the Ocean and its adjective
  is the same two words as Conington's at p:5.1 w5-6.
- The English under Auden's lines of I.14 (p. 7) is not
  Bennett's.
- The third passage: Bennett takes w0 of row 7.1 with the grove
  (the edition's note takes it with the word for labor), and he
  puts the grove and banks with the bee's gathering (Conington
  puts them with the speaker). He has "breeze".

Not checked: whether the printing Auden had read the same.

## Conington's editions

The scan `odesandcarmensc00flacgoog` at the Internet Archive
(an Oxford copy) is the third edition: London, Bell and Daldy,
1865. A script found the sixteen English rows shown in it; the
four that did not match whole differ only by the scanner's
spacing and misreadings. Its preface says the third edition
has more changes than the second "but the work may still be
spoken of as substantially unaltered". The first edition of
1863 was not found, so whether these rows read the same in
1863 is still unknown. The pair label ("Conington, 1863") is
the year in the site's index of texts; the sources and the
`about` now say what the text is.

## The poet's thirteen open items, weighed

1. "The Horatians" known through Mendelson: so. The caption
   and the caveat now say so in exact terms.
2. The remark to Michie, Mendelson only: so. It stays under
   what Auden said, given as Mendelson's report, and is in the
   third caveat.
3. Nothing more by Auden on these odes: I searched the four
   scans for the poet's name; The Enchafed Flood has it twice,
   the two quotations. Agreed.
4. The Loeb: settled above.
5. Conington's third edition: dated above; 1863 still unseen.
6. Stanza names differ between books: confirmed, and A&G agree
   with the edition on every list (their second and third are
   the edition's third and second). The facts name the five
   Asclepiadic stanzas by their lines, now in one pattern.
7. Three rows of IV.2 that do not fit as the tool divides
   them: confirmed, for the reasons the poet gives. None shown.
8. Dots on words of one syllable: a reader's choice, sensibly
   made (interjections and the question word dotted;
   prepositions, a conjunction and a pronoun not). No caption
   leans on one. The first caveat stands.
9. *plurimum*: the doubt is real, and the Loeb takes it the
   other way from the edition. Taken out of the chain; the key
   now reads "much and small"; fourth caveat.
10. Second-hand items: Cicero's Pro Sestio is now read. The
    rest stay marked as second-hand.
11. The note for the artist: right as far as the pictures go.
    Only strokes within one line are drawn on these passages.
12. The three English tabs: below.
13. One quotation of Auden only: confirmed by the check under 8.

## The three English tabs: my view

Keep all three. None was cut.

- The English is printed beside every passage, so each passage
  needs one tab that says what the English does there.
  Without it the pair is unexplained.
- They say three different things, each from a different part
  of Conington's preface: his model for the stanza and the pair
  of words he joins across a line end (first passage); the one
  ode he rhymed in couplets, and the adjectives he will not
  part from their nouns, with the blame moved (second); the
  arithmetic of the Sapphic, twenty-eight syllables for
  thirty-eight, and what it cost (third).
- The third is also where the words of the third passage are
  glossed, since that passage has no Words tab.
- If the lead wants fewer, the poet is right that the first is
  the one to spare: its point about endings and position is
  made again, with more to show, on the second passage. Its
  one fact found nowhere else is Auden's sentence that the two
  kinds of verse have nothing in common but rhythm; the Measure
  tab of the same passage has his other statement of it, with
  Kallman.

## Still doubtful

- *prudens*. The Order key still reads "the foreseeing god",
  on the edition's note. The dictionary files the line under
  knowing, wise, and the Loeb's English has the god's purpose.
  The Words tab gives both. A Latinist may want the key changed.
- A&G 598a is a rule of prose order. The Order caption applies
  it to verse and says so ("By that rule"). The grammar's own
  remark at 598h is only that poets favor the interlocked order.
- Auden's poems named here ("The Horatians", "River Profile",
  the elegy for Freud) were not read; all three statements are
  Mendelson's. Whether his "Horatian stanzas" are the Alcaic by
  syllable count was not checked, though both the grammar and
  the edition say the Alcaic is also called the Horatian stanza.
  The piece does not join the two.
- The Loeb printing read is later than the one Auden had.
- Conington's first edition (1863) was not found.
- Second-hand still: Milton's version of I.5 and Arnold's line
  (through Conington); the ode of Alcaeus (through the edition);
  Cicero's uses of *fingo* (through the dictionary); the Greek
  verb the edition compares with the last verb of the third
  passage.
- Two pages would not load at Perseus: the dictionary entry for
  the preposition in row 7.1, on which nothing leans, and A&G
  641, read instead at Dickinson College Commentaries.

## For the lead and the artist

- The Book tab shows only a plain table until it is drawn, and
  the table cannot show the two lists (books, measures). I added
  four totals so that it shows the caption's numbers meanwhile:
  37, 25, 34 and 7. Printable strings in the facts: the keys
  "odes in all", "measures in all", the four totals, "books"
  (book, odes), "measures" (measure, odes, named for, shown
  here, family, in). `read` values are valid places. `note` and
  `source` are working keys.
- The five Asclepiadic measures were renamed to one pattern,
  using the name both books give the line: "Lesser
  Asclepiadics throughout", "Three lesser Asclepiadics and a
  Glyconic", "Glyconic and lesser Asclepiadic by turns", "Two
  lesser Asclepiadics, a Pherecratic and a Glyconic", "Greater
  Asclepiadics throughout". Key names and shapes are unchanged.
  No `site/js/pieces/horace.js` exists yet.
- In the two Measure tabs the kit's key calls the bar "a
  pause". Five of the eight bars fall where the sense does not
  pause; they mark the regular break of the line. (The sense
  stops at the bar in rows 0.1 and 6.2, and in row 6.1 the bar
  follows the comma after the name.) The captions say "break".
- Contrast: the key rows are now "swan and bee", "breeze and
  labor", "clouds and Tibur", "much and small". The size pair
  is six lines apart and shares a color only.
- The pair label keeps 1863; the text is the 1865 third edition.

## Pictures

`node build/pieces.mjs horace`, then `node build/tools/shoot.mjs
horace --widths 1280,390`, before the mending and after it:
twenty pictures the second time, "nothing reported". I looked
at Contrast (both widths), Words, the English of the first and
second passages, both Measure tabs and Book (photographed once
more after the four totals went in). Nothing stands outside
its plate and no page is wider than its window. Until it is
drawn, the Book table shows six numbers and two empty rows
("books", "measures"), which the kit leaves to the drawing.

## What was changed in reading.json, in one list

- `about`: two phrases (the verb's tense; "first published in").
- `view`: says, source (pp. 6–7 and 9), checked.
- First passage. Measure: the last sentence of the caption, one
  ground. Allegory: plain line, the last two sentences of the
  caption, three grounds, the printed note. English: one
  sentence of the caption, the reason, the printed note.
- Second passage. Order: three words of the caption. Words:
  three notes (one gloss), caption, reason, grounds, printed
  note. English: two ties, grounds, printed note.
- Third passage. Contrast: one part removed, two key labels,
  caption, reason, grounds (one added), printed note. English:
  one tie, one sentence of the caption. Book: five measure
  names, four totals added, the facts' source note, the last
  sentence of the caption, the reason, grounds, printed note.
- Under what Auden said: one entry added (the English under his
  quotations), three mended (the classic attitude; Mendelson on
  "River Profile"; what Mendelson calls wrong).
- `sources`, `caveats` (three of five rewritten), `open` (eight
  items added, each beginning "From the examiner").

No plate, lens or tab was removed. notes.md was not touched.

## The checker at the end

`node build/tools/check-reading.mjs horace --print`, exit 0:

    no problems
    no warnings
    the printed notes are fit to print
