# Orpheus and Eurydice (the aria of Act 3): the critic's record

Piece `orpheus`. Critic at work on 3 October 2026, from 11:44 UTC, after
the poet (`notes.md`), the examiner (`exam.md`), the artist (`art.md`)
and the lead's setting of the artist's two proposals (11:42 UTC, the
last section of `notes.md`). Words of the libretto are pointed at by
passage, tab, row and word number and never typed out. "Old" and "new"
below are the site's own sentences.

In short. Thirteen sentences reworded in eleven changes: two terms
said in plain words, two endings that posed, three pointers that
pointed at the wrong thing, and four smaller ones. Five titles and
seventeen named words set between asterisks, with no wording changed.
Nothing was taken out of the list of what Auden said: its one entry is
left in, as I was told, and section 5 says what I think of it (keep
the paragraph, lose the display quotation). Five strings in `facts`
go to the lead with their keys (section 6), and eleven doubts (section
9), of which the Petrarch sentences and "plea or order" matter most.
The checker ends with no problems, its one old warning (Echo), and the
printed notes fit to print. A list for the lead closes the file.

## 1. What was read, and with what

- `remake/BRIEF.md`, `remake/CRITIC.md` (all of it), `remake/EXAMINER.md`
  for "The printed notes".
- `reading.json` (all 1,305 lines), `exam.md`, `art.md`, `notes.md` of
  this piece, and the script `site/js/pieces/orpheus.js`, every line,
  for the words it prints.
- `node build/pieces.mjs orpheus` at 11:44 UTC, then
  `node build/tools/prose.mjs orpheus`: 3,238 printed words in
  `review/remake/prose/orpheus.md`, read once from top to bottom before
  anything was marked, then sentence by sentence.
- The proof: `node build/tools/check-reading.mjs orpheus --print` before
  any change: no problems, one warning (Echo), the printed notes fit to
  print.
- The picture tool, twice and no more (section 11 has the times). The
  first run gave the first pictures of the page since the lead set the
  two keys; the second was taken after my changes. Opened and read at
  full size from the first run: the whole page at 1280 (slices 0 to 3)
  and the head of the page at 390; every tab at 1280; the Rondo tab at
  390. From the second run: the page at 1280 (slices 0 and 2, which
  hold the Count and Rhyme tabs and what Auden said), the tabs
  Endings, Calls, Rondo, Words, Return and English at 1280, and
  English at 390. Also four of the artist's closer pictures (the
  pointer on each drawing, and "The numbers" unfolded under each),
  since the picture tool takes the pointer off the page and leaves
  the tables folded.
- Not read again: any source. The examiner's record stands; I checked
  no fact.

## 2. Every change of wording

All in `reading.json`, each by one exact edit. Nothing was touched in a
`quote`, a `grounds`, a `facts`, a mark, a number, a name, a page
reference, or any `turn`, `join`, `heading`, `speakers`, `beside` or
`label`. A path-by-path comparison with the copy I took before starting
shows 21 paths that differ: the eight captions and one remark of this
section, the three places of section 3, and nine more remarks of
section 4. The checker's proof (every mark and the words under it) is
the same before and after, line for line.

Thirteen sentences in eleven changes. The fault is given in a few words
after each.

Passage 1, the aria (`plates[0]`)

1. Count, caption, sentence 5.
   - Old: "The speech before the aria is recitative: lines of eleven
     syllables and one of seven, unrhymed until its close."
   - New: "The speech before the aria is recitative, sung speech:
     lines of eleven syllables and one of seven, unrhymed until its
     close."
   - Fault: a term left unexplained. This is the first place the page
     says recitative, and the plain words came two passages later
     (Measure: "Recitative is sung speech"). The two words added are
     that caption's own. See section 9, item 9, for their ground.
2. Count, caption, last sentence.
   - Old: "The third line here is three cries with stops between them
     and still counts eight: the measure holds where the speech
     breaks."
   - New: "The third line here is three cries with stops between them
     and still counts eight."
   - Fault: an ending that poses, and padding. The clause after the
     colon said again what the sentence had just said, as a balanced
     pair (holds, breaks), and closed the caption on it. Rule two still
     holds without it: the caption goes from the count to what the line
     of eight is for, and to its keeping its count through the cries.
     The `why` and the `stands` fit as they are.
3. Endings, caption, sentences 3 and 5.
   - Old: "Each cut ends a group: the two returning lines, the plea,
     the last three lines." And: "The two returning lines rhyme with
     nothing."
   - New: "Each cut ends a group: the two opening lines, the plea, the
     last three lines." And: "The two opening lines, which return after
     the seventh, rhyme with nothing."
   - Fault: a caption the page does not bear out. Seven lines are shown
     once, and at this tab nothing has yet said that any of them comes
     back (that is Rondo, two tabs on), so "the two returning lines"
     had nothing to point at. They now have the name the rest of the
     page gives them (the Rondo caption, the drawing, the second
     caveat), and the return is said once, in the words of this tab's
     own ground.
4. Endings, caption, last sentence.
   - Old: "Their likeness is inside: a verb ending in a stressed …"
   - New: "They are alike inside the line: a verb ending in a
     stressed …"
   - Fault: mannered plainness. "Inside" with nothing after it is
     gnomic, and an abstract noun could go. "Inside the line" is the
     phrase of the tab's own `why`.
5. Calls, caption, last sentence.
   - Old: "… her faithful one, and <b>pure</b> insists on it, truly,
     even so."
   - New: "… her faithful one, and <b>pure</b>, truly, even so,
     insists on it."
   - Fault: an ending that poses, by accident. Everywhere else on the
     page a word of the passage is followed at once by its meaning.
     Here the two meanings came after the verb, at the very end, and
     read as the caption's own emphasis.
6. Rondo, caption, sentence 1.
   - Old: "… each time in C major and at the first tempo: about half
     its 70 bars."
   - New: "… each time in C major and at the first tempo. Together
     they take about half its 70 bars."
   - Fault: a sentence that has to be read twice. After the colon
     "about half its 70 bars" hung on "the first tempo". It is the
     three statements together that take half the bars (36 of the 70,
     in the key under the drawing).

Passage 2, the terms and the loss (`plates[1]`)

7. Words, caption, sentence 4.
   - Old: "The aria’s last lines take up these words, and hope
     replaces counsel."
   - New: "The aria’s last lines take up the words for help and for
     what is left, and hope replaces counsel."
   - Fault: a pointer that points at the wrong thing. "These words"
     could only mean the two just set in bold, help and counsel, and
     the same sentence goes on to say that counsel does not come back.
     What comes back is the word for help and the verb for what is
     left: the two side notes say so, and so does the `why`. The next
     sentence's "the same verb" now has a verb to refer to.
8. Return, caption, sentence 2.
   - Old: "He says his loss in Love’s words."
   - New: "He puts his loss in Love’s words."
   - Fault: not English as it is written. One says a word, and puts a
     thing into words.
9. Return, the second numbered remark (`ties[1].say`).
   - Old: "Six words come back in the same order, and again they begin
     the next line: and again, and forever."
   - New: "Six words come back in the same order, and as before they
     begin the next line: *and again, and forever*."
   - Fault: "and again" stood twice in ten words, once as the
     sentence's own words and once as the words quoted, with nothing
     to tell them apart.

Passage 3, the song at the tomb (`plates[2]`)

10. Rhyme, caption, sentence 1.
    - Old: "Each half of the strophe is two lines that rhyme at
      once …"
    - New: "Each half of the strophe, a stanza of the song, is two
      lines that rhyme at once …"
    - Fault: a term left unexplained at its first use on the page.
11. English, caption, sentences 4 and 5.
    - Old: "His first line says <i>thee</i>. So does the Italian
      printed with it in that libretto, a reworked text in four acts."
    - New: "His first line says <i>thee</i>, and so does the Italian
      printed with it in that libretto, a reworked text in four acts."
    - Fault: staccato. Three short sentences stood in a row, the first
      of five words. The first two are one thought.

The captions now count 103, 116, 105, 112, 115, 103, 104, 111, 85 and
110 words, in the order of the page. None is over 120. Endings and
Words are the longest, each longer by what it now names outright.

## 3. Titles marked (three places, five marks; no wording changed)

| place | marked |
| --- | --- |
| `where` | *Orfeo ed Euridice* |
| `auden[0].says` | Gluck’s *Orpheus*; Verdi’s *Otello*; *Orpheus* again, where it "stands first" on his list |
| `auden[0].source` | *Forewords and Afterwords* |

`where` and the `source` are printed in italic, so the title now stands
upright in them; in `says`, which is roman, the three titles are now
italic, as they are in the Sources. Seen in the second pictures
(`shots/orpheus-page-1280-0.png` and `-2.png`).

Looked at and left as they were:

- `about` names no title: Orpheus there is the man.
- The essay is already in curly quotation marks in `auden[0].source`
  and in `sources`.
- The captions, every `stands`, `sources` and `caveats` had their
  titles marked by the writers; I found none bare.
- The title over the record ("A record of it") is set by the build, not
  by the reading.

## 4. Named words marked in the small notes (ten notes and remarks, 17 marks)

A word spoken of as a word now stands upright in the italic of its
remark, so that it can be told from the sentence round it. Apart from
change 9 in section 2, only asterisks were added. Seen upright in the
second pictures of the tabs Count (in `orpheus-page-1280-0.png`),
Words, Return and English at 1280.

- Passage 1, Count, remark 1 (`plates[0].lenses[0].points[0].say`): the
  Italian name of the running together of vowels.
- Passage 2, Words, the note on the word glossed "law"
  (`plates[1].lenses[0].notes[10].note`): *pact*, *ban*, *Law*.
- Passage 2, Return (`plates[1].lenses[1].ties[n].say`):
  - n 0: *you lose her*, *I lose her*
  - n 1: *and again, and forever*
  - n 2: *let the pain end, and forever*
- Passage 3, English (`plates[2].lenses[2].ties[n].say`):
  - n 0: *I call my good*
  - n 1: the Italian word for day (word 4 of row 0.1), *when the day
    shows itself*, *sun*
  - n 2: *Hides*, *fall*
  - n 3: *Grief*, *sighs*
  - n 5: *never*

Most of these are the Italian words said in English, which is how the
remarks name them (the Italian stands beside the remark, underlined).
I marked them because without a mark the remark cannot be parsed: in
the third English remark one English verb "becomes" another, and
nothing said which words were being spoken of.

Left bare on purpose:

- The 17 glosses under the words: all are English and none names a
  word of another language.
- English, remark 2: "day", the meaning given for the marked Italian
  word, stays in the italic. The rule marks the foreign word, not its
  meaning.
- English, remark 1: "the one I love" explains the marked words and is
  the remark's own.
- Words, the notes on the words glossed "you must not tell her",
  "help", "is left to me" and "counsel"; Count, remarks 2 and 3;
  Return, remark 4; Measure, all four; English, remark 5: none names a
  word as a word ("the ban itself" is the thing, not the word).
- The line of plain words under *apostrophe* names no word.

One more place has the same fault and is not mine: the line under the
Strophes drawing. See section 6, item 4.

## 5. The entry under "What Auden said": weighed, and left in

It is the page's only entry, and `view` is null. I marked its titles
(section 3) and changed nothing else. I read his sentence again in the
scan of *Forewords and Afterwords*, p. 8, to weigh the paraphrase
against it.

What the words do, sentence by sentence:

1. "No account of this opera by Auden has been found." The page needs
   this sentence somewhere, and this is the only place it has. It is
   plain and it is true as far as the record goes.
2. "The one place found where he names it … and there it marks a
   date." Cramped ("found" twice in two sentences), but each word is
   there for a reason the examiner gives (exam.md, section 6: one place
   was found; two more that name Gluck were not read). I left it.
3. The paraphrase of his sentence. It says what he says and no more:
   I found nothing stretched. It follows his clause in order and at
   about his length, which is a good deal of room for something he
   says in passing; but the sentence before has already told the
   reader that it is in passing.
4. "*Orpheus* stands first among the nine opera libretti on his list
   for the course." Not something he said, but the one sentence here
   that bears on the work as he taught it. It claims nothing from the
   order. (The typed list runs composer by composer, Gluck, Mozart,
   Beethoven, Wagner, Bizet, Verdi, so "first" may be no more than
   "earliest"; the sentence does not say which, and need not.)

What I think. By the letter of CRITIC.md the entry comes out: it shows
that he named the work in passing, in an essay on something else. I
would still keep the paragraph, for the examiner's first reason. With
the list empty the page prints, at its head, the kit's line that
nothing he wrote or said about the work was found, and a reader who
knows p. 8 could call that untrue. The paragraph says the same thing
more exactly, and says where the one mention is.

What I would not keep is the display quotation. Under the heading
"What Auden said" the first thing a reader sees, in the largest type of
the section, is six words that are not about this opera: they name 125
years of opera, which begin with it. A reader who skims takes them
for his verdict on *Orpheus*. The paragraph corrects that at once, but
the type has already spoken. This is the one place on the page where
the setting says more than the man said.

For the lead to set, if the lead agrees (I may not touch a `quote`,
and the second change follows from the first):

- `auden[0].quote`: take it out, so that the entry opens on its first
  sentence.
- `auden[0].says`, the end of the third sentence: put his six words in
  quotation marks where they already stand, for example "…, which he
  calls “the golden age of European opera.”" The words are then still
  given as his.

If the lead takes the whole entry out instead, the fourth sentence is
worth keeping somewhere a reader will see it (the `about` would hold
it), and the entry goes whole to the end of `notes.md` under "Taken
out of the list of what Auden said". I took nothing out, so I wrote
nothing in `notes.md`.

A small thing in the same sentence: "seventy-five" is in words and
"125" in figures. He writes both in words. A number is not mine to
change, and the figures keep the paraphrase from running in his words,
so I left it.

## 6. The words the two drawings print

I did not edit `site/js/pieces/orpheus.js` or anything in `facts`. I
read every string the two drawings set on the page: the script's own
joining words, every value it takes from `facts`, and the names of the
keys it prints as headings and labels. I read them in the script, in
the pictures of both runs, and in four of the artist's closer pictures
for the line under each drawing and the folded tables.

**Rondo (first passage).** It prints: the count of bars and the key;
each section's lines and name; the tempo marks; "ends on a pause"; the
heading *the libretto prints* over three brackets (lines 1 to 4, lines
5 to 7, lines 1 and 2); the key (the two opening lines three times in
the score, 36 of the 70 bars, twice in the libretto; Adagio); a folded
table headed lines, from bar, to bar, bars, tempo; and, when a mark is
pointed at, a line that gives its bars, its name, its tempo and how it
ends. All of it reads as a reader's words. The new heading reads on
into its brackets as one sentence, and under the middle return there
is nothing, which is what the caption's fourth sentence says. The name
"no help left" for lines 5 to 7 is plain and true to the lines. One
string I would change (item 1).

**Strophes (third passage).** It prints: each strophe's number, with
"shown here" for the first; the English of its verb; the verb and the
last word; "answers:" and what answers, in red; the recitative after
each; the heading *the verb for answering in the libretto* over five
places; the key; a folded table headed *every strophe*; and a line for
the strophe pointed at. The new heading says which verb is meant, as
the artist asked. Four strings I would change (items 2 to 5).

For the lead, each with its key. All five are in
`plates[n].lenses[m].facts`:

1. `plates[0].lenses[3].facts.sections[4].flats`: "A flat and E flat
   come in at the Adagio". Printed in the line under the drawing when
   lines 5 to 7 are pointed at (script line 89, `told`). It is the one
   thing on the page that only a reader of music can use, and it is an
   observation with no reason: nothing says what the two flats do. Its
   first two words also read as the article and a noun. Either give it
   a reason on a ground (the examiner saw the flats in bar 42; no
   source was opened on what they do to the key), or take the key
   out. The script prints nothing for a section that has none.
2. `plates[2].lenses[1].facts.strophes[2]["in English"]`: "I weep
   for". The caption beside it has "I weep". The fact is printed over
   the third strophe and again in the line under the drawing, where it
   makes a sentence that ends on "for." (script line 301, `sung`).
   Proposed: "I weep", as the caption has it. The ground gives the
   verb both senses, so either is true; the shorter one does not hang.
3. `plates[2].lenses[1].facts.between[1].recitative`: "he calls her
   name twice: the woods have learned it from him". The script sets
   "recitative:" before it (lines 359 and 362), so the printed line
   has two colons. Proposed: a semicolon for the fact's own colon.
4. `plates[2].lenses[1].facts.strophes[n].rhymes`: the three rhyme
   endings of each strophe, printed in the line under the drawing
   after "Rhymes:" (script line 301). The last ending of the first
   two strophes is spelled like an English conjunction, so the line
   reads as a list that breaks off. That line is italic and is read
   for asterisks (the script already marks the verb in it). Proposed:
   mark each ending as a word named, for example the first as
   `*ì*, *onde*, *or*`; the endings then stand upright. The value is
   printed nowhere else.
5. `plates[2].lenses[1].facts["every strophe"]["how the sevens count"]`:
   "by name: a line that stops on its stressed sixth syllable is
   still a seven, and four lines of the strophe shown do". In the
   folded table it stands after its key and reads well. In the key
   under the drawing the script drops "how" (line 397) and prints
   "the sevens count by name: …", which has to be read twice.
   Proposed, to read in both places: "by the place of the last
   stress: a line that stops on its stressed sixth syllable is still
   a seven, and four lines of the strophe shown do". Those are the
   words of the first passage (Count, remark 2), so nothing new is
   said.

The name "the plea" (`plates[0].lenses[3].facts.sections[2].name`) is
weighed in section 9, item 1.

## 7. What the artist left for other hands (art.md, part 4)

1. *Rondo: a caption's last claim had no mark.* Set by the lead at
   11:42. Drawn, and seen at 1280 and at 390 in both runs. The caption
   and the drawing now agree, and no word needed changing for it.
2. *Strophes: a list whose name did not say which verb.* Set by the
   lead. Seen at 1280 and at 390.
3. *Endings: the first claim is marked for two of its three words.*
   Weighed, and no word changed. The caption names the three cut
   words in bold, in the order of the lines, and each lights when its
   word in the caption is pointed at. The one with no color is the
   last word of the second line, and the caption itself says, further
   on, that this line rhymes with nothing; a rhyme's color would be
   false there. If all three are to show at rest, that is a
   mark, not a word.
4. *The type of the Italian as it stands in the copy printed here.*
   Not mine, and the lead has it (the last line of `notes.md`). One
   consequence falls in what a reader reads: on the Words tab the side
   note on the word glossed "is left to me" is headed by that word
   with its straight apostrophe, while the same word in the fifth
   line of the aria, in the first passage, has the curved one.

## 8. What recurs, with counts

Counted in the page as it now stands.

- **A word of the passage followed at once by its meaning**: 23 times
  in seven of the ten captions (five in Calls; Count, Rondo and
  Measure have none). A term of verse is glossed the same way three
  times more (*ottonario* once, *canzonetta* twice). It is the
  method, and the page needs it: the second passage has no English at
  all, and the English under the song is a rhymed version that moves
  the sense, as its own tab shows. Not a tic. After change 5 none
  stands out of the pattern.
- **"the same"**: 14 times in what is printed, eight of them in
  captions (Return, Rhyme and Strophes twice each) and one in the
  folded table under the Strophes drawing. The subject of the piece
  is return. I varied none.
- **"stops on"**: 7 times, six of a line (on its stress, or on a cut
  word) and once of the music's pause. It is the page's plain word
  for a line that ends on its stressed syllable, and Count, remark 2,
  explains it on the tab where it first comes.
- **"still"** for "all the same": 6, three of them in view together on
  the Count tab (the caption and remarks 1 and 2), two on Measure and
  one in the key of the Strophes drawing. Each is apt. Left.
- **The plain words for *canzonetta*** stand twice, word for word, in
  Endings and in Rhyme. A reader may open either passage first. Left.
- **Remarks that take up a point their caption has made**: about nine
  of the 17 numbered remarks, and on Return all four. That is how the
  page is built (the caption carries the argument, the remark stands
  at the mark), and on a phone the remark is what a reader has beside
  the line. Left. If the lead wants less said twice, Return is the
  place to trim.
- **"Love’s aria follows"**: three times on one tab (Measure: the
  caption, remark 3, the folded note). Left.
- **Remarks that are a phrase without a verb, or open on one**: 3 of
  17 (Measure, remarks 2 and 4; English, remark 5). A note in a
  margin may be a phrase.
- **Colons in captions**: 17 (19 before), and 8 semicolons. Endings
  has four colons in 116 words: it is a caption made of lists.
- **A caption that closes for effect**: one left, and it is mild
  (Return closes on a short sentence set against the one before it:
  Love had said he would live on). Count closed on a balanced clause
  and Calls on what read as an emphasis, before changes 2 and 5.
- **Frames that are a tic elsewhere and are absent here**: "Auden
  wrote that" (0: he wrote nothing), "A handbook says" (0), a
  sentence opening "So the" (0), a question (0), a dash inside a
  sentence (0), "not X but Y" (0), "we" (0). No stock word of
  BRIEF.md or of CRITIC.md is in any printed string; I searched all
  of them by pattern after the examiner had.
- **The checker's one warning** (Echo, in the Strophes caption) is on
  a name the libretto itself prints (exam.md, section 9). The sentence
  stands.

No tab pays nothing. Each of the ten leaves the reader knowing
something about how the passage is made and what that does there.
Words pays least by itself, being a list of meanings; but it is the
only English the second passage has, and its caption carries two words
on into the aria.

## 9. Sentences I doubt and did not change

1. **Plea or order.** The third and fourth lines of the aria are "the
   plea" in three printed places (the captions of Endings and Rondo,
   and the name of a section in the Rondo drawing) and an order in
   seven (Calls: "orders", "that order", "Now the order is his", and
   "her order" in the folded note; Strophes: the caption and two rows
   of the list). The ground allows both, since the form is "a mood of
   command or entreaty". But a reader is told on one tab that this is
   a plea and on the next that it orders. Calls needs one word for
   her demand and for his, because its point is that the word comes
   back, and "plea" would not do for hers. To change "orders" would
   change what those sentences say, so it is not mine. If the lead
   wants one name, the cheaper change is the other way: something for
   "the plea" that does not pull against it, in the two captions and
   in `plates[0].lenses[3].facts.sections[2].name`.
2. **Words, caption, the last two sentences (Petrarch).** Every clause
   stands on something read (exam.md, section 7), and the caption does
   not say that Calzabigi took his words from the poem. But the choice
   to set that poem beside these lines is the page's own. It came from
   the dictionary's first example of one verb. No critic, and no
   Auden, puts the two together. Side by side, the two sentences lead
   a reader to conclude what the page will not say. Of everything on
   the page this comes nearest the fault that the person this is for
   named: "I feel like you are making up interpretations". If the lead
   wants the page to say less, the caption can go from "hope replaces
   counsel" straight to its last sentence, which stands on the
   encyclopedia alone; the two side notes on Petrarch and the line in
   `sources` would go with it. I left it because each sentence is
   true and the examiner tested it.
3. **Return, caption: "A threat in Act 1 is a fact in Act 3, word for
   word".** The most finished sentence left on the page. It stands on
   the two passages, which say both things, and it is the caption's
   reason, so I kept it. "Word for word" is true of the six words and
   not of the verb before them, which changes its last letter, as the
   caption has just said.
4. **Calls, caption: "Now the order is his".** A short clause that
   turns the scene round. It is what the libretto has (her order,
   then his: the list on Strophes counts both), and the examiner had
   already taken out the claim that his line answers hers. Kept.
5. **Rondo, caption, the last sentence.** Gluck's remark and Boyé's
   are reported, and nothing is said of what they show. That is the
   right side to err on. A reader may still ask why they are there.
6. **Rondo, caption: "so the middle return is the score’s".** Terse;
   "is in the score alone" would be plainer. The new row of the
   drawing now shows it, so I left the words.
7. **`about`: "Love set the terms".** Who Love is (a god, and a
   person of the opera who speaks) is never said on the page. The
   capital and the label "Love, Act 1" carry it. "The god Love" would
   add a fact, so it is the lead's.
8. **Strophes, caption: the third verb's meaning** differs by one
   word from what the drawing prints over the third strophe (section
   6, item 2). One of the two should give way.
9. **The grounds of two plain words.** "Sung speech" (change 1)
   stands on Treccani's entry *recitativo*, which is a ground of the
   Measure tab and is in the Sources, but is not among the `grounds`
   of Count; the lead may want it added there. "A stanza of the
   song" (change 10) is a plain word for a term and I think needs
   none.
10. **The fifth caveat: "the record on this page was not heard".**
    True and plain, and it made me stop: a reader asks, by whom. What
    a reader needs is that the record may differ from the score
    counted here, in key, in language and in cuts. I did not reword
    it, because that would change what the caveat owns up to.
11. **The entry under "What Auden said".** Nothing doubted in what it
    says. The display quotation is the doubt (section 5).

## 10. What on the page itself got in the way of reading

The faults of the kit are the artist's to report and are not repeated
here: I leave out where lines turn, where glosses and captions stand,
how tall a passage is on a phone, and the labels that are not shown.
What is left is about words and their order.

1. **The order of the tabs on the first passage.** Endings spoke of
   lines that return two tabs before Rondo says that they do. Mended
   in the words (change 3), since the order of tabs is not mine.
2. **The display quotation under "What Auden said"** (section 5). It
   is the only place where the page's type says more than its words.
3. **"Read on"** sends the reader to Act 1 of the English libretto in
   four acts. The English tab has just told that reader that this
   libretto's Italian is a reworked text and not Calzabigi's, and the
   third caveat says it again, folded at the foot. At the link itself
   nothing says which of the two the reader is being sent to. (`next`
   is not mine, and the link's words are the build's.)
4. **The line under the Strophes drawing**, for the third strophe and
   for the rhymes (section 6, items 2 and 4).
5. **The second passage has no English under its lines.** Words is its
   first tab and gives the sense; a reader who opens Return or Measure
   first has only the caption. Both captions give the meaning of
   every word they lean on, so I found nothing to mend. I note it
   because it is the one passage a reader cannot follow line by line
   without a tab.
6. **Whose English it is.** No caption on the first passage says whose
   English stands under the lines of the aria; the label that would
   say so is one of those the kit does not yet show. Once it shows,
   this is answered, and no caption need carry it.

## 11. Tools run, what was refused, and how the work stands

In order, all from `/home/user/auden-course`, times in UTC:

- 11:44 `node build/pieces.mjs orpheus`, then
  `node build/tools/prose.mjs orpheus` (3,238 words).
- 11:45 the picture tool, first run:
  `node build/tools/shoot.mjs orpheus --out remake/works/orpheus/shots --page`.
  Last line: "nothing reported; now look at the pictures".
- `node build/tools/check-reading.mjs orpheus --print`, before any
  change.
- 12:05 to 12:06 the edits of sections 2 to 4, then the checker again.
- 12:13 the build and the prose tool again (3,258 words), and the
  picture tool, second and last run, the same command. Last line the
  same.
- 12:22 the checker again.
- 12:26 to 12:32 the counts of section 8 taken again from the page as
  it stands, by reading only. `reading.json` was last written at
  12:06.
- 12:33 the checker, last run. Its output is the same, byte for byte,
  as the run of 12:06 that followed the edits.

The pictures. Each run wrote the ten tabs at 1280 and at 390 and the
eleven slices of the whole page into `shots/`, over the artist's
pictures of the same names. Before the first run I copied those 31
into `shots/as-the-artist-left-them/`, because `art.md` names several
of them as its evidence for the kit's faults and they were taken
before the lead set the two keys. The artist's pictures at 360 and
320, the trial pictures and the closer ones were not touched. The
folder of copies can go when the lead has no more use for it.

Written by me: `reading.json` (21 paths, each by an exact edit), this
file, and `shots/`. Nothing in `notes.md` (no entry was taken out).
The script was read and not edited. The two tools that CRITIC.md says
to run write outside this folder, the build into the site's data and
the prose tool into `review/remake/prose/`; I wrote nothing else
there. Outside the project I kept only scratch things in the
session's scratch folder: a copy of `reading.json` as I found it, the
checker's outputs, and two small scripts that count and compare.

Refused by the permission system: nothing. Four times (twice
between 12:07 and 12:12, once at about 12:20, once at about 12:29) a
command did not run because the service that passes commands had
timed out. Its message said to wait and send the same command again.
Three times I did, and each ran. The fourth command only printed
captions from `reading.json` for a last count; I read the same
captions in the prose tool's output instead, with the file reader,
which that message says needs no such check. I tried no way round
anything that was refused.

The last lines the checker printed at 12:33 (the same as at 12:22):

    no problems
    WARNINGS (1)
      plate song lens 1 (shape) caption: "Echo": RULE THREE: a claim about what the passage does to someone, or stands for. Keep it only if Auden, a source or the lines themselves say it
    the printed notes are fit to print

## For the lead, in one list

1. `auden[0]`: left in. I would keep the paragraph and take out the
   display quotation (section 5).
2. Five strings in `facts`, with keys and script lines (section 6).
3. Plea or order: one line, two names (section 9, item 1).
4. The Petrarch sentences on Words: true in every clause, and the
   page's own pairing (section 9, item 2).
5. The ground of "sung speech" on Count (section 9, item 9).
6. The fifth caveat's "was not heard" (section 9, item 10).
7. "Read on" and which libretto it leads to (section 10, item 3).
8. `shots/as-the-artist-left-them/` can be deleted when not needed.
