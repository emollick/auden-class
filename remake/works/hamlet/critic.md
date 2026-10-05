# The critic's report: hamlet

3 October 2026, 12:30 to 13:25 UTC.

**In short.** The reading is plain and careful. I found in it no
stock word and no verdict handed down, and no caption ends on a
moral. What I mended is smaller: notes and remarks that said their
caption over again, sentences that could be read two ways, five terms
left unexplained, and words and titles left unmarked. 25 sentences
are reworded and 3 cut; one entry is out of the list, which goes from
nine to eight; 34 titles and words are set between asterisks. Three
things are left for the lead: the last sentence of the Shape caption,
which the drawing beside it does not bear out (5.1, with the words I
would use); the key of the Verbs tab, which misleads (5.2); and one
line of the folded numbers, which needs a change in `facts` and in
the script together (5.3). The checker ends: no problems, no
warnings, the printed notes are fit to print.

Words of the play are pointed at by row and word number, as
`node build/tools/check-reading.mjs hamlet` prints them (row 46.9, word
7; the first word of a row is 0). "Old" and "new" below are the site's
own sentences. Where an old or new sentence holds a phrase of the play,
the phrase is given as its row and words in square brackets and is not
typed out. Nothing of Auden's is quoted.

## 1. How the page was read

- `node build/pieces.mjs hamlet` and `node build/tools/prose.mjs hamlet`
  at 12:31.
- The picture tool was not run at the start. The 34 pictures in
  `shots/` were written at 12:03, after the last change to the reading
  (10:49), to the kit (11:05) and to the drawing's script (12:02), so
  they showed the page as it stood. I read the five pictures of the
  whole page at 1280 from the top, then each of the eleven tabs at
  1280, the Verbs and Shape tabs at 390, and two of the artist's closer
  looks at the Shape tab (the fold open, the pointer's note).
- The picture tool was run twice, and both times it ended "nothing
  reported". The first run was at 12:54, after the changes of section
  2. I then read the first, third and fourth pictures of the whole
  page at 1280 and the Words, Rhyme, Beat, Verbs, second Words and
  Shape tabs at 1280, and the Chain tab at 390: the words marked stand
  upright in the italic of the notes, the remarks and the source
  lines, the titles are in italics in the list, the list has eight
  entries, and nothing collides. The second run was at 13:09, after
  the second mending of entry 20, and I read the Chain tab at 1280 and
  the list again. No file of the kit changed between the two runs.
  The 34 pictures in `shots/` show the page as it is handed in, but
  for one mark: at 13:12, after the second run, a colon in the Chain
  caption became a comma (entry 21), and the two pictures of that tab
  still show the colon. I was told to run the tool twice at most and
  did not run it a third time.
- `review/remake/prose/hamlet.md` was read once through before anything
  was marked, then sentence by sentence.
- Beside it: `reading.json` whole (every printed string, and every
  `why`, `grounds`, `checked` and `open`), `exam.md`, `art.md`, the
  end of `notes.md`, the script `site/js/pieces/hamlet.js` (read, not
  edited), the kit's README on the small notes, and the proof the
  checker prints.
- The checker as I found it: no problems, no warnings, the printed
  notes fit to print. It has no warning for me to read, before my
  changes or after them.
- Nothing was refused by the permission system.

## 2. Every change

Each entry: where, the old words, the new words (or "cut"), the fault.
All were made as small exact edits to `reading.json`; the checker was
run after each batch. No `turn`, `join`, `heading`, `speakers`,
`beside`, tab `label`, mark, tag, `grounds`, `facts` or quotation was
touched.

### The head of the page

1. `where`. Old: "Hamlet, Act 1 Scene 2, Act 3 Scene 1 and Act 5 Scene
   2". New: "*Hamlet*, Act 1, Scene 2; Act 3, Scene 1; Act 5, Scene
   2". The title is marked. "Act 1 Scene 2" was the one place on the
   page without the comma that every caption, heading and source uses;
   it is now set as the piece on *Othello* sets its own.
2. `about`. Old: "In the third, the king has rigged a fencing match".
   New: "In the third, the King has rigged a fencing match". The
   captions and the heading write the King and the Queen with capitals
   for the two persons of the play. "Who is now king", the office,
   stays small.
3. `view.source`. *The Dyer's Hand* between asterisks. Titles. No word
   of the view was changed.

### Passage 1, Hamlet to the Queen

4. Sentence, caption. Old: "A verb kept to the end holds the sense
   open: every sign of mourning is named before the sentence says what
   none of them can do." New: "A verb kept to the end holds the sense
   open until every sign of mourning has been named." Padding: the
   sentence before had just said that what they cannot do comes only
   in the last five words. The caption still goes from the list and
   the place of the verb to what a verb kept back does; `why` says the
   same in nearly the same words and is untouched. 102 words.
5. Naming, caption. Old: "He says **suspiration**, a word found in
   Shakespeare only here, a [row 32.4, words 4 to 7], and the
   **haviour**, the bearing, of the **visage**." New: the same words
   with a semicolon after "only here" and after the phrase of row
   32.4. Three things are listed and two of them carry an aside
   between commas, so the list could not be told from the asides.
6. Words, caption. Old: "like the players’ dumb show." New: "like the
   players’ dumb show, a scene acted without words." A term left
   unexplained. 115 words.
7. Words, the note on row 32.0 word 8. Old: "The verb could mean to
   look like, to have the appearance of being, and also to be so in
   appearance only and not really." Cut. Padding: it was the caption's
   second sentence over again, opening on the same four words, and
   said nothing the caption does not. The gloss under the word stays,
   `stands` still names the lexicon under Seem, and the note's
   `source` is kept as the working record.
8. Words, the note on row 32.8 word 3. The word named, *action*, and
   the six words of Act 3 that the caption also gives (hamlet/a3s2,
   block 7) are now between asterisks, so they stand upright in the
   note's italic. No word changed.
9. Words, the note on row 32.9 word 7. Old: "The lexicon of
   Shakespeare’s words puts this line under show as the act of
   showing. A show was also a spectacle or a play: in Act 3 the
   players begin with a dumb show." New: "The lexicon of Shakespeare’s
   words puts this line under *show* as the act of showing." The
   second sentence was the caption's ("and also a stage spectacle,
   like the players’ dumb show") a few lines lower. What the note
   alone tells is kept: the lexicon files this line under the plain
   sense. The word named is marked.
10. Rhyme, caption. Old: "and for nine lines no line-end rhymes." New:
    "and for nine lines the line-ends do not rhyme." "Rhymes" could be
    read as a noun, which left the clause without a verb; and the next
    sentence, "The last two do", needs a verb to answer.
11. Rhyme, caption. Old: "ten of this play’s twenty scenes end on one,
    and the players’ play in Act 3 rhymes in pairs. Here one closes a
    speech in mid-scene". New: "ten of this play’s twenty scenes end on
    one. The players’ play in Act 3 rhymes in pairs. Here a rhymed pair
    closes a speech in mid-scene". After the colon the players' play
    read as a second proof that a rhymed pair marked a scene's end. It
    is a separate fact, and now a separate sentence. "One" had lost its
    noun and gets it back.
12. Rhyme, caption. Old: "Auden said in 1947 that Hamlet is an actor
    and acts theatrically." New: "Auden, lecturing on the play in 1947,
    said that Hamlet is an actor and acts theatrically." A frame that
    had become a tic (section 3). What he is reported to say is word
    for word as it was. 117 words.

### Passage 2, Hamlet to himself

13. Beat, `meterName`. Old: "five beats to the line, rising, without
    rhyme; some lines run one unstressed syllable past the last beat".
    New: "five beats to the line, rising from unstressed to stressed,
    without rhyme; some lines run one unstressed syllable past the
    last beat". A term left unexplained: "rising" is a word of the
    trade and stood bare.
14. Beat, caption. Old: "a weak ending, which tends to give a falling
    rhythm." New: "a weak ending, which tends to give the line a
    falling rhythm, from stressed to unstressed." The same fault, and
    the two now explain each other. 115 words.
15. Beat, remark 1 (row 46.0, words 6 and 7). Old: "Two ways to say
    it: the stress on that, as marked here, or on is. The count of
    syllables is the same." New: "Two ways to say it: the stress on
    *that*, as marked here, or on *is*." The two words named are
    marked (the artist's point 3). The second sentence is cut: the
    obvious explained, since where the stress falls cannot change the
    number of syllables.
16. Beat, remark 2 (row 46.0, word 9). Old: "The eleventh syllable.
    The line runs one unstressed syllable past its last beat." New:
    "The eleventh syllable, unstressed: a weak ending." Padding: see
    17.
17. Beat, remark 5 (row 46.7, word 7). Old: "The weak ending again.
    This is the fifth of the ten lines to run one unstressed syllable
    past its last beat." New: "The weak ending again, the fifth in
    these ten lines." The clause about running one unstressed syllable
    past the last beat stood three times in one column, in the
    measure, in remark 2 and in remark 5, under a caption that had
    just said it in other words. It now stands once, in the measure,
    and the remarks use the caption's name for it.
18. Beat, remark 6 (row 46.9, words 4.2, 4.1 and 5). The three words
    named as words are marked (the artist's point 3). No word changed.
    The count of five lines that stop inside themselves is left as it
    is, in the caption and here: the lead will mend the drawing.
19. Verbs, caption. Old: "Auden said in 1947 that this speech can be
    lifted out of the character and the play." New: "In his 1947
    lecture Auden said that this speech can be lifted out of the
    character and the play." The same tic as 12; the Beat tab beside
    it keeps the old frame. 112 words.
20. Chain, caption. Old: "The second time the line stops on *sleep*
    and the next line begins with the same words." New: "The second
    time the line stops on *sleep*, and its last two words begin the
    next line." The caption opens on the four words Hamlet says twice
    (row 46.8, words 4 to 7), so "the same words" could be taken for
    all four; the next line begins with the last two of them, as the
    drawing shows. My first mending, "and the next line begins with
    its last two words", left "its" free to mean the next line's own
    words. It stood from 12:53 to 13:08 and is replaced.
21. Chain, caption. Old: "The repeated word becomes the start of a
    further step, and here the step is [row 46.9, words 2 to 4.1]. He
    has called death a sleep, and from sleep the next step is
    dreaming." New: "The repeated word becomes the start of a further
    step. He has called death a sleep, and from sleep the next step
    is dreaming, [row 46.9, words 2 to 4.1]." Padding: "step" three
    times in two sentences, and the step itself named twice. From
    12:49 to 13:12 the new sentence had a colon before the words of
    the passage. That made the last three sentences of the caption
    all end on a colon and words quoted, so the first of them, the
    one I had made, now takes a comma. 104 words.
22. Words, caption. Old: "The words of the question are a fight’s:".
    New: "The question is asked in the words of a fight:". Mannered
    plainness: a possessive left hanging at the end of its clause, a
    turn this caption used twice (see 24) and the next passage's
    Words tab once.
23. Words, caption. Old: "and **consummation**, from the Latin for
    summing up and finishing, wished for **devoutly**, with devotion."
    New: "and **consummation**, from the Latin for summing up and
    finishing. It is to be wished for **devoutly**, with devotion."
    Too long to follow: a list of three, then four asides in a row.
24. Words, caption. Old: "The word that stops the wish is a bowler’s,
    as Auden told his class in 1947." New: "The word that stops the
    wish is a term from the game of bowls, as Auden told his class in
    1947." The same turn as 22. The new words are those of the ground
    under it (a technical term of the game of bowls). 119 words.
25. Words, the note on row 46.2 word 5. Old: "From French outrage,
    which goes back to Latin ultra, beyond: at root, a passing beyond
    bounds. The word has no root in rage, though English ears came to
    hear it there." New: "From French *outrage*, which goes back to
    Latin *ultra*, beyond: at root, a passing beyond bounds. English
    ears came to hear *rage* in it." Two foreign words and a word
    named are marked. "Has no root in rage" was the caption's clause
    word for word, three lines higher; what the note adds is kept.
26. Words, the note on row 46.7 word 7. *consummare* marked. No word
    changed.

### Passage 3, Hamlet to Horatio

27. Crossing, caption. Old: "and now it has a subject, *it*, never
    named, and a time." New: "and now it has a time and a subject,
    *it*, which is never named." Three commas in ten words, and "and
    a time" hung at the end, where it read as a second thing never
    named. 112 words.
28. Words, caption. Old: "Calvin’s chapter on it takes from the
    sparrow that the flight of birds is ruled by God’s counsel." New:
    "infers from the sparrow that". "Takes from the sparrow that" made
    me stop: it is not a turn a reader knows. The ground says the
    same thing (from the sparrow verse, that the flight of birds is
    governed by the counsel of God).
29. Words, the note on row 161.0 words 8 and 9. The word named,
    *Providence*, and the Latin *providentia* are marked. No word
    changed.

### "More from Auden" and the foot of the page

30. The entry on *The Enchafèd Flood*, pp. 34 and 102, is taken out
    whole. The list had nine entries and has eight. What it said and
    why it went are in section 4.
31. The entry after it, now the third (*The Enchafèd Flood*, p. 110).
    Old: "Later in the same book Auden says that Shakespeare had a new
    idea of revenge". New: "In *The Enchafèd Flood* Auden says that
    Shakespeare had a new idea of revenge". With the entry before it
    gone, "the same book" pointed at nothing; the entry gets the name
    it lacked. The title is marked.
32. The fifth entry (the lecture, pp. 159–60). Old: "the soliloquies
    of Hamlet, like those of other plays Shakespeare wrote in those
    years, can be detached from the character and from the play; in
    his earlier and later work they are more closely worked in." New:
    "the soliloquies of *Hamlet*, like those of other plays
    Shakespeare wrote in those years, can be detached from the
    character and from the play; in his earlier and later plays they
    are more closely worked in." "Work" and "worked in" stood four
    words apart. "Plays" is the word the sentence has just used for
    the same things. The title is marked.
33. The sixth entry (the lecture, p. 160). *Hamlet* is marked twice as
    the title of the play. No word changed.
34. The seventh entry (the Saturday class). *Hamlet* and *The Tempest*
    are marked. No word changed.
35. The eighth entry (Alan Ansen's notes). Old: "rub is a bowler’s
    term, for a ball turned aside when it grazes another; editors have
    tried to emend [row 46.3, words 6 to 8]; and [row 46.5, words 6
    and 7], two lines on, does not follow grammatically. The notes on
    Hamlet open with a general remark". New: the word *rub* and the
    two phrases of the passage are between asterisks (the artist's
    point 4), so is the title, and "tried to emend" is now "proposed
    changes to". "Emend" is a word of the editor's trade and stood
    unexplained.
36. The line of `source` under each of the eight entries. The title of
    the book is marked: *The Dyer’s Hand*, *Auden: An American
    Friendship*, *The Enchafèd Flood*, and *Lectures on Shakespeare*
    five times. No word changed. A source line is printed in italic,
    and the marked title stands upright in it.
37. `sources`, the third line. Old: "pp. 34, 102 and 110." New: "p.
    110." Pages 34 and 102 were cited by the entry taken out and by
    nothing else in the reading.
38. `caveats`, the fourth. Old: "where the early quartos read
    *shapes*." New: "where the early editions called quartos read
    *shapes*." A term left unexplained.

## 3. What recurs, with counts

In all: 25 sentences reworded, 3 cut, 3 changed only in a stop or a
capital; one entry taken out of the list; 34 titles and words set
between asterisks.

### The changes by fault (38 entries)

- **A note, a remark or a clause that says again what stands beside
  it: 8** (entries 4, 7, 9, 15, 16, 17, 21, 25). The commonest fault.
  Eight of the eleven notes on single words said again something the
  caption beside them says. One said nothing else and is cut; two are
  cut down to what they add; five are left (section 6). In the Beat
  tab the clause about a line that runs one unstressed syllable past
  its last beat stood three times in one column and now stands once.
- **A sentence that could be read two ways, or was hard to follow:
  7** (5, 10, 11, 20, 23, 27, 28).
- **A term left unexplained: 5** (6, 13, 14, 35, 38): dumb show,
  rising, falling rhythm, emend, quartos. Every other term on the page
  is said in plain words where it first stands: blank verse,
  periphrasis, weak ending, infinitive, anadiplosis, antimetabole,
  augury, special providence, caesura, soliloquy.
- **A possessive left hanging: 2 changed** (22, 24) of four on the
  page. Left: one in the Words caption of passage 3 (the sparrow) and
  one in a gloss, where the short form is the form.
- **A frame become a tic: 2 varied** (12, 19) of four.
- **An echo: 1** (32). **Names set alike: 2** (1, 2).
- **Marks and nothing else: 8 entries** (3, 8, 18, 26, 29, 33, 34,
  36), and marks inside seven others. The 34 places: 17 titles (one
  in `where`, one in `view.source`, seven in the paraphrases of the
  list, eight in its source lines) and 17 words (nine in the notes,
  five in the remarks, three in the list).
- **The list: 3 entries** (30, 31, 37).

### Frames counted

- Auden is named in seven of the eleven captions, eight times. He
  closes three of them (Words and Rhyme of passage 1, Shape). Four do
  not name him (Sentence, Naming, Chain, Words of passage 3). That is
  the method and not a tic.
- "Auden said in 1947 that" stood in four captions (Rhyme, Beat,
  Verbs, Shape). Two keep it. With "as Auden told his class in 1947"
  the year still stands in five captions. Each time it dates a
  different remark, and it tells the reader that the remark is not
  from the year of the course, so it stays.
- "Auden wrote that": twice in captions (Crossing, Shape), and "He
  wrote that" once (Verbs). With the head and the first entry of the
  list, five on the page.
- The sentence of the head about acting comes back in two captions
  (Words of passage 1, Verbs); the one about the hero of a Greek
  tragedy in one (Crossing). Each time it is the caption's reason.
- "Rhetoric calls this": twice (Naming, Chain). "The lexicon of
  Shakespeare’s words puts this line under": twice, in two notes of
  one tab.
- A statement, a colon, then the words pointed at: 22 colons in the
  eleven captions, one to three in each, about one sentence in four.
  It is how these captions point, and I stopped at it only in the
  Chain caption (entry 21).
- "The marks on the passage" opens seven of the eleven entries under
  "What each caption stands on". A formula helps there.

### Looked for and not found

No word of the role file's list of inflated words; no "not X but Y",
"less X than Y" or "a kind of"; no caption that ends on a moral or an
aphorism (two endings that come near one are weighed in section 6);
no praise of the play offered as fact; no working word in
what is printed (the checker lists none). The captions point at words
a reader can find, give the count or the sense, and say on whose word
the reason stands.

## 4. The list under "More from Auden"

The list had nine entries after the lead had taken three out. I asked
of each whether the page would miss it, and took out one.

### Taken out

*The Enchafèd Flood*, pp. 34 and 102. The entry said that Auden
speaks of Hamlet as ruled by reflection and melancholy, and makes him
the one exception among the heroes of classical and Renaissance
literature, who are heroes by what they do among other men.

- Both places name Hamlet in passing, in a book on something else. On
  p. 34 he is the last clause of a sentence about Melville's
  "isolatoes". On p. 102 he is five words in a parenthesis, in a
  sentence about the heroes of classical and Renaissance literature.
  The examiner found both by searching the scan for the name, as the
  record under `checked` says. That is the kind of entry the role
  file says comes out, and the kind the lead took out before.
- "Makes him the one exception" says more than a parenthesis does.
- The next entry, from p. 110 of the same book, paraphrases a full
  paragraph on Hamlet himself: what the book has to say of him.
- No caption, no `grounds` item and no `stands` leans on it, and no
  other line of the reading names pp. 34 or 102.

It is moved whole (source, paraphrase, the examiner's record) to the
end of `notes.md`, under the heading that was there, "Taken out of
the list of what Auden said", after the lead's three and with a line
that says the critic took it out. The entry had no `quote`. That is
all I wrote in `notes.md`; its first 519 lines are as they were.
Entries 31 and 37 above follow from it.

### The eight that stay

1. "Balaam and His Ass," *The Dyer’s Hand*, p. 110, on the soliloquy.
   The Shape caption leans on it, and it bears on the second passage,
   which is one, and on the third, which is not.
2. The remark of 1941, from Miller. Said in the year of the course.
3. *The Enchafèd Flood*, p. 110. It goes over the ground of the view
   at the head, twelve years earlier and at more length: why this
   Hamlet does not simply take his revenge. It is the entry nearest
   to saying a thing twice. I kept it because it says the one thing
   the view does not, that he cannot bring himself to end the
   situation which tells him who he is, and because the list is now
   at eight.
4. The lecture, pp. 159 and 164. The Rhyme caption leans on it. Its
   man brought in from the street is the remark of 1941 over again,
   but with another reason (in 1941 the part needs no actor; in 1947
   nobody can act himself), and a reader sees that he said it in the
   year of the course and again six years later.
5. The lecture, pp. 159–60. The Verbs and Shape captions lean on it.
6. The lecture, p. 160. The Beat caption leans on its first sentence.
   The second, on paired adjectives, is used by no caption; it is one
   sentence, on the language of this play, and I left it.
7. The Saturday class and its examination. How he taught the play.
8. Ansen's notes. The Words caption of passage 2 leans on them.

## 5. Left for the lead to decide

### 5.1 The last sentence of the Shape caption

"Auden said in 1947 that Hamlet speaks verse to himself and, when
passion is high, to others; with other people he otherwise mostly
speaks prose."

**What a reader will do with it.** They will take it for Auden's
remark: the frame is plain. They will also hold it against the
drawing, for three reasons. It is the caption's reason (the `why` of
the tab says so). It stands last. And the drawing's own title is
where he speaks verse and where prose. Held against the drawing, the
first half is borne out exactly: all seven dark marks stand above the
line. The second half is not. The drawing cannot show where passion
is high, "otherwise" is a quiet word, and what the eye finds is Act 1
with nothing under the line and, over the five rows, about as much
grey above the line as under it. The reader is left to think that the
drawing is wrong or that the page has not noticed. The reading has
noticed: its `open` list says the count bears out half of the remark.
Nothing printed says so.

**The numbers**, summed from `facts.inOrder`, with the examiner's two
figures from `open`:

| | verse, the seven speeches | other verse | prose |
|---|---|---|---|
| Act 1 | 419 | 1,518 | 0 |
| Act 2 | 459 | 163 | 1,624 |
| Act 3 | 555 | 1,792 | 1,606 |
| Act 4 | 277 | 85 | 346 |
| Act 5 | 0 | 1,374 | 1,328 |
| all | 1,710 | 4,932 | 4,904 |

Of the 4,932, 38 are the four lines to himself that end Act 1, Scene
2, which leaves the examiner's 4,894 words of verse to others beside
4,904 of prose. The scene with his mother (3.4) has 1,347 words of
verse, more than a quarter of that verse. Without it he says 3,547
words of verse to others, and the prose is 58 in 100.

**Why I did not change it.** Every mending makes the caption say
something it does not now say. That is more than wording.

**The words I would use**, in the order I would choose them:

(a) Keep the sentence and add one after it: "By the count drawn
here, about half of what he says to others is verse." Fifteen words;
the caption would be 119. `why`, `grounds` and `stands` need no
change, since the count is already the first ground. The item in
`open` says the caption "reports the remark and the count"; with this
sentence it would.

(b) Put Auden's own example into his sentence, as the fifth entry of
the list has it, so that a reader can find his exception on the
drawing as the long mark at 3.4: "... and, when passion is high, to
others, as he does to his mother; with other people he otherwise
mostly speaks prose. By the count drawn here, half of what he says to
others is verse; without the scene with his mother, about
two-fifths." This is fairer to Auden. The caption would be 132
words, 12 over the limit, so something else in it would have to go.

(c) Leave the caption and say it under "Where this page may be
wrong". The page has the five caveats it is allowed, so one would
have to give way.

### 5.2 The key of the Verbs tab: does it mislead?

Yes. The key has one blue row, "has a subject, the only person". The
kit makes one row for a tag and joins the labels of its marks with a
comma. Six marks carry the tag `subject`: five are labeled "has a
subject" and one (row 46.5, words 8 and 9) "the only person". As
printed, the row reads as one statement about every blue mark: it has
a subject, and that subject is the only person. Five of the six are
forms of *is*, and none of the five has a person for its subject. A
reader who tries the key on the first blue mark (row 46.0, word 7)
finds it untrue. "The only person" is explained nowhere: the caption
does not use the words. The Chain key has a row made the same way,
"sleep, sleep again", and there it reads well, so the fault is in
these two labels and not in the joining.

The tag is a mark and I changed neither it nor the labels. With a tag
of its own for row 46.5, as the artist proposes, I would label the
two rows "has a subject" and "the only subject that is a person".
Without one, I would label all six "has a subject" and let the
caption tell the six apart, as it does ("five forms of *is*, and"
the two words of row 46.5). The caption needs no change either way.

### 5.3 `facts.shorter`, and line 224 of the script

The fold "The numbers" prints this fact as a line of italic: "... the
four lines to himself that end Act 1, Scene 2, which say I or my
three times, and three short asides ...". The two words named as
words are not set off. The pointer's line on the same drawing sets
them upright (the script's `SELF`, line 28) and the caption sets them
in italics.

- In `facts`, key `shorter`: "which say *I* or *my* three times".
- In `site/js/pieces/hamlet.js`, line 224: the paragraph is made with
  `text: f.shorter`, which would print the asterisks. It would have to
  be built with the script's own `set` (line 30), and an `i` inside it
  would need `font-style: normal`, because the paragraph is italic by
  the style of line 225.

I changed neither. The one cannot be done without the other.

### 5.4 The other printed words of the drawing

I read every string the script prints: the names of the acts (line
88), the counts of lines over the dark marks (135), "no speech to
himself" (148), "verse" and "prose" (152 and 153), the red line under
this speech (161), the three kinds of line the pointer gives (184 to
192), the two entries of the key (203 and 204), the heads of the
three tables (219, 220 and 228) and "The numbers" (230). They are
plain, and they agree with the caption in every number and name. I
would change none of them.

### 5.5 The Beat tab

The caption and remark 6 count five lines that stop inside
themselves; the drawing marks four of them, and has no pause in row
46.9, where the dash stands inside word 4. Left as told. When the
drawing is mended no word needs to change.

## 6. Sentences doubted and not changed

1. **Crossing, the last two sentences of the caption.** "Auden wrote
   that Hamlet wishes to be what the hero of a Greek tragedy is,
   someone made by his situation. In these clauses what is coming is
   the subject of every verb; ..." This is the place where the page
   leans furthest. Auden's sentence is about the character as a whole,
   and the fifth caveat says no remark of his was found on this
   passage. The caption sets a fact of grammar beside his sentence and
   lets the reader join them. I left it because each sentence is true
   by itself, neither says that one shows the other, and the caveat is
   printed. If the lead finds that the joining reads as an
   interpretation made here, Auden's sentence can come out of this
   caption. The `why` of the tab does not rest on it: only one ground
   and the last words of `stands` would go with it.
2. **Verbs, the last sentence.** "The thirty-three lines end on" five
   words of the play (hamlet/a3s1, block 46, line 33). A short
   sentence set last for the echo of Auden's "cannot act": the kind of
   ending the role file warns of. I left it because it is a fact the
   reader can check by the link under the tab, because it is what
   ties Auden's sentence to this speech, and because the caption
   draws nothing from it. The `why` of the tab rests on neither of
   the last two sentences, so they too could come out together, and
   the caption would end on what Auden said of this speech.
3. **Words of passage 3, the last sentence.** "Hamlet refuses the art
   that reads birds for warnings, and goes from the bird whose fall is
   in God’s care to the three ifs." It sums up. I left it because it
   is the caption's reason, the one place where the two ways of
   reading a bird stand side by side, and because it gives the order
   of the lines, which the Crossing tab takes up. It says what the
   lines do, not what they mean.
4. **Crossing.** "Whichever case holds, it comes." Short, and it has a
   ring. It is what the three clauses come to, and the key's "the
   same end" rests on it.
5. **`about`.** "A ghost then tells him that the uncle murdered his
   father". It does not say whose ghost. A reader new to the play is
   left to ask, and one who knows it hears something held back. To
   name the ghost changes what the sentence says is so, which is not
   mine. Words: "His father’s ghost then tells him that the uncle was
   the murderer".
6. **The list, third entry.** "made of the old Hamlet the earliest
   hero of the romantic kind". "The old Hamlet" can be taken for
   Hamlet's father. The two words are Auden's own at that place, where
   he seems to mean the Hamlet of the older revenge story, and to say
   so adds to what he is reported to say. Words, if the lead wants
   them: "the Hamlet of the old revenge story".
7. **Five notes that say part of their caption again**, and are left:
   on row 32.8 word 3 (the six words of Act 3, which the caption also
   gives), row 46.7 word 7 (the Latin verb), row 46.9 word 7 (what a
   rub is), row 161.0 word 5 (the flight of birds as the commonest
   sign) and row 161.0 word 15 (the verse on the sparrow). Each gives
   first something the caption has no room for, and a reader who opens
   a note by pointing at a word may not have the caption in the eye.
8. **"Auden said in 1947 that"** still opens a sentence in the Beat
   and Shape captions. Two of eleven is the method.
9. **Key labels that name a word of the passage**: "nor, four times",
   "it, never named", "die", "sleep", "sleep again", "now", "not to
   come". The key is in the kit's italic and takes no marks, so the
   word cannot be set off. The color ties each label to its words,
   and I did not stop at them.

No sentence on the page reads as made up. No paraphrase that is left
says more than its source is recorded as saying; the one that did is
out of the list. Every tab pays: when I had finished each I knew
something about how the lines are made and what that does there.

## 7. What on the page got in the way of reading

Words only. Where a line turns, where a gloss stands and how tall a
plate is on a phone are the kit's and are not reported here.

1. **The key of the Verbs tab** (5.2). The one place where the page
   says something untrue of its own marks.
2. **The last sentence of the Shape caption beside its drawing**
   (5.1). The drawing is good enough to test the sentence, and the
   sentence does not pass.
3. **The key of the Rhyme tab.** Under the row of letters the kit
   prints a line for each of the two repeated words: "the sound seem,
   coming back inside the line and from line to line" and "the sound
   show, coming back from line to line" (`site/js/kit/lens-rhyme.js`,
   line 220, from `threads[].sound`). The line is all italic, so the
   word named is not set off, and the second reads for a moment as a
   show of sound. What comes back here is also a word and not a
   sound; the caption says so. The reading cannot mend this. If the
   kit set the name upright in the italic of that line, as it sets a
   marked word in a note, both lines would read at once.
4. **The line under the table of the seven speeches, in "The
   numbers"** (5.3): two words named and not set off.
5. **The order of the list.** The remark of 1941, the only entry from
   the year of the course, stands second, after an essay of 1962.
   Only the fifth and sixth entries lean on the fourth ("the same
   lecture", "that lecture") and the eighth on the seventh ("that
   class"), so the remark of 1941 could stand first. I did not move
   it: the order is not wording.

Nothing else. The eleven captions can each be read in one go, the
words they point at are found where they say, and the small notes add
to the captions more than they repeat.

## 8. The last check

    $ node build/pieces.mjs hamlet                          (13:21)
    $ node build/tools/check-reading.mjs hamlet --print     (13:21)
    ...
    no problems
    no warnings
    the printed notes are fit to print
    $ node remake/works/hamlet/count-order.mjs  ->  all as counted

The reading was last changed at 13:12 (entry 21). The script of the
drawing, the `facts` and every mark are as I found them.

The scripts of every edit, and a copy of the reading as I found it,
are in the session's scratchpad and not in the work's folder.
