# Fidelio (Leonore's answer): the critic's record

Piece `fidelio`. Critic at work on 3 October 2026, from 11:50 UTC, after
the examiner (`exam.md`) and the artist (`art.md`). Words of the libretto
are pointed at by passage, tab, row and word number and are never typed
out. "Old" and "new" below are the site's own sentences.

In short

- 23 changes of wording, in 28 sentences: 24 reworded (two of them run
  into one), 3 cut, 1 moved. The commonest faults: a quaint or clipped
  turn where the ordinary word serves (9), a pointer with nothing
  clear to point at (8), and a note that said again what its caption
  says (4, and a clause).
- Eleven titles set in italics, and 37 words named as words marked in
  the small notes.
- Nothing taken out of the list "More from Auden"; nothing written in
  `notes.md`.
- The checker ends with no problems, no warnings, and the printed
  notes fit to print. The piece was built at 12:36 UTC, after the last
  change.
- For the lead: what stands on the rows to be mended (section 5); one
  string in `facts` that names lines the tab does not show (section
  6); ten doubts (section 8). The two that weigh most: the note on the
  word for sworn tells half of what her sentence swears, and the
  paraphrase at the head repeats the quotation above it.

## 1. What was read, and with what

- `remake/BRIEF.md`, `remake/CRITIC.md` (all of it), "The printed
  notes" in `remake/EXAMINER.md`.
- `reading.json`, `exam.md`, `art.md` of this piece, and the script
  `site/js/pieces/fidelio.js` (every string it prints).
- The page as a reader sees it. Nothing the page is built from had
  changed since the artist's last pictures (the reading 10:06 UTC, the
  kit 11:05, the script and the built piece 11:31, the pictures 11:31
  to 11:32), so I read those pictures first: the six slices of the
  whole page at 1280 px, every tab at 1280 px, and the tab "Names" at
  390 px. The picture tool was kept for the page after my changes.
- `review/remake/prose/fidelio.md`, made at 11:52 UTC with
  `node build/tools/prose.mjs fidelio` (there was none before): 4,445
  printed words. Read once from top to bottom before anything was
  marked, then sentence by sentence.
- The proof that `node build/tools/check-reading.mjs fidelio --print`
  prints. Before any change it ended: no problems, no warnings, the
  printed notes are fit to print.

## 2. Every change of wording

All in `reading.json`, each by one exact edit. Nothing was touched in a
`quote`, a `grounds`, a `facts`, a mark, a number, a name, a page
reference, a `turn`, a `join`, a `heading`, a `speakers`, a `beside` or
the `label` of a tab. `view.says` and `view.source` got their titles
set in italics and nothing else.

The head and the foot of the page

1. More from Auden, second entry (`auden[1].says`), sentence 2.
   - Old: "A good play moves twice, as the mistake is made and as it
     is found out."
   - New: "A good play moves in two steps: the mistake is made, and
     then it is found out."
   - Fault: a compression that has to be read twice ("moves twice").
     The new words are the ones the caption of the tab "Names" uses
     for the same sentence of Auden's.
2. More from Auden, third entry (`auden[2].says`), two places.
   - Old: "Of the words he writes that poetry is at bottom
     reflection: …" New: "Of a libretto’s words he writes that …"
   - Old: "… are meant for the composer and not for the public, …"
     New: "… are meant for the composer, not for the public, …"
   - Fault: "the words" had nothing to point to (the entry before
     ends on librettos in general and on this opera). The second
     change only gives back the word the first one added: the checker
     wants an entry under 110 words, and this one stood at 110.
3. Where this page may be wrong, second item (`caveats[1]`).
   - Old: "… has it once, no reason." New: "… has it once, with no
     reason."
   - Fault: clipped.

Passage 1, "Leonore’s answer to Florestan" (`answer`)

4. Versions, caption, sentence 2.
   - Old: "Two American librettos print a shortened German text here,
     the word twice and no reason, and the English beside it follows
     that."
   - New: "Two American librettos print a shortened German text at
     this point, with the word twice and no reason, and the English
     shown here follows it."
   - Fault: three loose pointers in one sentence ("here", "beside
     it", "that"). The sentence before uses "here" for this page, so
     "here" could not also mean this place in the dialogue.
5. Versions, caption, sentence 4.
   - Old: "The notes of Auden’s lecture give her answer in this
     doubled form."
   - New: "The students’ notes of Auden’s lecture give her answer in
     this doubled form."
   - Fault: it could be read as Auden's own notes, which says more
     than is so. The head of the page and the first caveat say whose
     notes they are; nothing is added.
6. Words, caption, sentence 2.
   - Old: "… what cannot be named or expressed for its amount or its
     intensity." New: "… because of its amount or its intensity."
   - Fault: an antique "for" where the ordinary word serves.
7. Words, the note on row 5.0, words 17 to 23.
   - Old: "DWDS gives the phrase my better self two senses: …"
   - New: "The DWDS dictionary gives the phrase *my better self* two
     senses: …"
   - Fault: a bare abbreviation at its first appearance on the page.
     Two notes further down the page itself says "the DWDS
     dictionary".
8. Words, the note on row 8.0.
   - Old: "Adelung (1798), who spells the word nahmenlos, gives this
     sense to the higher style of the moderns and explains it by
     unaussprechlich, unspeakable."
   - New: "Adelung (1798) spells the word *nahmenlos* and explains
     this sense by *unaussprechlich*, unspeakable."
   - Fault: padding. The caption directly above it says, in the same
     words, that Adelung gives this sense to the higher style of the
     moderns. The note keeps what it alone has.

Passage 2, "Leonore alone, in Act 1" (`scene`)

9. Beat, remark 4 (row 13.0).
   - Old: "A command, a pause, and the name of the one she calls: the
     line opens on two stresses. From here the lines go four beats,
     three, four, three."
   - New: the first sentence alone.
   - Fault: padding. The caption says it ("the lines shown go four,
     three, four, three") and so does the line under "The measure".
10. Rhyme, caption, last sentence.
    - Old: "Adelung noted in 1801 that poets often use …"
    - New: "Adelung’s dictionary noted in 1801 that poets often use …"
    - Fault: a name left unexplained. A reader who opens this tab
      has not been told who Adelung is.
11. Words, caption, sentence 3.
    - Old: "<b>Pflicht</b> is duty: there a thing commanded, and
      also a sworn promise of fidelity."
    - New: "<b>Pflicht</b> is duty: in the same dictionary a thing
      commanded, and also a sworn promise of fidelity."
    - Fault: "there" has to be worked out.
12. Words, caption, sentence 4.
    - Old: "Rocco, who says the word oftenest, says what he means by
      it: …" New: "Rocco, who uses the word most often, says what he
      means by it: …"
    - Fault: a quaint word, and "says … says".
13. Words, caption, sentence 6.
    - Old: "Auden’s remark is about Cordelia: …"
    - New: "Auden’s remark, quoted at the head of the page, is about
      Cordelia: …"
    - Fault: "Auden’s remark" takes it that the reader knows which.
      On this tab nothing has named it. No claim is added: the
      remark is the sentence printed under "What Auden said".
14. Words, caption, last sentence.
    - Old: "Shortly after it he tells his class to compare …"
    - New: "Shortly afterward he tells his class to compare …"
    - Fault: a stumbling "after it".
15. Words, the note on row 17.0.
    - Old: "Trieb comes from treiben, to drive. Adelung: a bent of a
      living creature’s force, commonly one that does not come
      merely from our own purpose."
    - New: "*Trieb* comes from *treiben*, to drive."
    - Fault: padding. The second sentence stands word for word in
      the caption above the note.
16. Words, the note on row 19.0: cut. The gloss under the row stays.
    - Old: "Adelung gives Pflicht two senses: conduct that a law
      commands, and a solemn promise, above all a sworn promise of
      fidelity."
    - Fault: padding. The caption's third sentence gives the same
      two senses from the same dictionary. The `stands` of the tab
      still fits: it names Adelung under *Pflicht* for the caption.
17. English, caption, sentence 2.
    - Old: "It has six lines for these twelve, each of ten to
      sixteen syllables, and no rhyme, so the measures and rhymes
      are gone."
    - New: "It has six lines for these twelve, each of ten to
      sixteen syllables, so the measures are gone, and it has no
      rhyme."
    - Fault: the sentence concluded what it had just said (no
      rhyme, so the rhymes are gone).

Passage 3, "She says who she is" (`name`)

18. Figure, caption, sentence 3.
    - Old: "Leonore says the word first, and of herself as of
      another: <i>sein</i>, his."
    - New: "Leonore says the word first, and speaks of herself as
      she would of someone else: <i>sein</i>, his."
    - Fault: a mock-antique turn.
19. Figure, caption, sentences 5 and 6.
    - Old: "Florestan changes the first of them: <b>Mein</b>, my.
      The end word stays and the one before it changes: the man she
      spoke of speaks for himself."
    - New: "Florestan changes the first of them to <b>Mein</b>, my:
      the man she spoke of speaks for himself."
    - Fault: padding. The clause cut said again what the three
      sentences before it had shown. The `why` still fits: it says
      the end word stays while the word before it changes.
20. Beat, caption, sentence 2.
    - Old: "… takes the room of one such line." New: "… takes the
      space of one such line."
    - Fault: a quaint word where the ordinary one serves.
21. Words, caption, sentence 2.
    - Old: "… of a wife, oftener in Upper Germany, where nothing was
      commoner than <i>mein Weib</i>, my wife; …"
    - New: "… of a wife, more often in Upper Germany, where nothing
      was more common than <i>mein Weib</i>, my wife; …"
    - Fault: two quaint comparatives in one clause.
22. Names, caption: three things.
    - (a) Old: "… and <i>Leonore</i> never: under that name
      Marzelline loves her …" New: "… under the name <i>Fidelio</i>
      Marzelline loves her …" Fault: "that name" pointed at the
      nearer of the two, the wrong one.
    - (b) Old: "In the lines shown she says it herself, …" New: "In
      the lines of this passage she says it herself, …" Fault: a
      caption the page does not bear out. On this tab the drawing
      stands where the passage was and no lines are shown (the
      artist's remark, `art.md` section 6). See section 6 below for
      the same words in the drawing.
    - (c) The sentence "Beethoven, Grove’s dictionary says, wished
      the opera called <i>Leonora</i>." moved from the end of the
      caption to its beginning, no word of it changed; and the next
      sentence then needed "its heroine" for "she". Fault: an ending
      that poses. It was a short fact kept for the last word, after
      Auden's example of the chambermaid, with which it has nothing
      to do. At the head it is one more fact about the two names,
      and the caption ends on its reason. If the lead would sooner
      have it back at the end, the old order is in this record.

One change made last, after the pictures were taken (passage 2)

23. `scene`, Beat, caption, last sentence.
    - Old: "Auden wrote that a librettist’s verses are written to the
      composer, …" New: "Auden held that a librettist’s verses are
      written to the composer, …"
    - Fault: "wrote … written" in one clause, and the frame "Auden
      wrote" on a fourth tab (section 7). "Held" is the word the
      caption of Verbs uses of the same essay. One word, and the line
      keeps its length, so the pictures were not taken again.

After these changes the `why` and the `stands` of every tab were read
again against its caption: all still fit, and none was trimmed.

## 3. Marks set, with no change of wording

Titles set in italics by asterisks (eleven places):

- `where`: the opera's title.
- `view.says`: *King Lear*. `view.source`: *Lectures on Shakespeare*.
- `auden[0].says`: *The Dyer's Hand*, and the opera's title where the
  overture is said to be played in its second act. `auden[1].says` and
  `auden[3].says`: the opera's title.
- The `source` of `auden[0]`, `auden[1]` and `auden[2]`: *The Dyer's
  Hand*.
- `scene`, tab Words, the note on row 20.0: the opera's full German
  title as Grove gives it.

Left bare on purpose: "Leonora No. 3" in `auden[0].says`. It names an
overture by its number; it is not the title of a book, a play, a long
poem or an opera, and by custom such a name stands upright. In `about`,
"calling herself Fidelio" is her name and not the title, and stays
upright.

Words named as words, and foreign words given with their meaning, set
between asterisks in the small notes so that they stand upright in the
italic (37 places):

- `answer`, Versions, remarks 4, 5 and 6: the three phrases of the
  English version that the remarks name.
- `answer`, Words, the notes on rows 4.0 (two notes), 5.0, 8.0 and
  14.0: five German headwords, the dictionary's *unaussprechlich*, and
  the phrase *my better self*. Seven.
- `scene`, Words, the notes on rows 1.0, 2.0, 3.0, 14.0, 17.0, 18.0 and
  20.0: eight German words.
- `scene`, English, remarks 1, 2, 4, 5 and 6: six words or phrases of
  the English version.
- `name`, Beat, remarks 2, 5 and 6: seven small English words named as
  words (*his*, *my*, *am*, *I*, *him*, *you*, *him*).
- `name`, Words, the notes on rows 1.0, 12.0 and 13.0 (two notes): four
  German words.
- `caveats[3]`: the two names where they are counted as words, as the
  caption of the tab Names sets them.

No gloss names a word of another language (each is a plain English
rendering), so no gloss was marked. In the pictures taken after the
changes the marked words stand upright inside the italic notes, and
the titles stand in italics at the head and in the list.

## 4. The list "More from Auden"

Four entries, and none was taken out. Nothing was written in
`notes.md`.

- `auden[0]`, his remark on the overture played between the scenes of
  Act 2. Of the four this is the nearest to a work named in passing.
  It stays because the essay is about opera and not about something
  else, because the entry says it is the one place in that book where
  he names this opera, because it bears on the work as it is
  performed, in the act from which two of the three passages come,
  and because the next entry ("In the same notes") leans on it for
  the name of the book. If the
  lead takes it out, `auden[1]` must begin with the name of the essay,
  and no page goes out of `sources`: the captions use the same pages.
- `auden[1]` and `auden[2]`, his notes on the libretto. Six captions
  lean on them (Verbs, the first Words, the first Beat, English, the
  second Beat, Names), so by the rule they may not come out. See
  section 7 for what that costs a reader.
- `auden[3]`, the reading list of 1941: said in 1941, and the only
  entry that is.

## 5. For the lead: what stands on the rows that are to be mended

The rows themselves are not reported. These are the notes, glosses and
remarks that stand on them. None was cut or moved.

Plate `name`
- Row 1.0, tab Words, `notes[0]`, words 1 to 5: a gloss and a note
  (that it is a stage direction, the verb *Decken*, and her first
  shielding of him a moment before).
- Row 7.0, tab Words, `notes[4]`, words 1 and 2: a gloss.
- Row 11.0, tab Words, `notes[6]`, words 1 to 3: a gloss.
- Rows 3.0, 5.0 and 9.0: nothing.
- The caption of the tab Figure says she turns "to him" and "to the
  others": that rests on the two directions of rows 7.0 and 11.0.

Plate `answer`
- Row 6.0, tab Words, `notes[8]`, words 0 to 2: a gloss. The caption
  of the tab Verbs sets the heading's word in bold, and the bold word
  is looked up in this row.
- Row 13.0, tab Words, `notes[13]`, word 0: a gloss.
- Rows 7.0 and 10.0: nothing.

Plate `scene`
- Row 0.0, tab Words, `notes[0]`, word 0: a gloss and a note (Grove's
  account of recitative). If the note goes, the `stands` of that tab
  still names Grove under Recitative and must lose it.
- Row 12.0, tab Words, `notes[9]`, word 0: a gloss.
- Row 12.0, tab Beat, `points[2]`, at word 0: the remark on the seven
  lines left out. It says "above this heading", so it must be reworded
  if it moves (to the end of row 4.0, say: "after this line").
- The caption of the tab Beat sets the heading's word in bold, and the
  bold word is looked up in row 12.0.

Printed sentences that speak of these rows and will want a look once
they are mended: the `stands` of `name`, tab Figure ("with the
speakers' names and the stage directions that are printed among the
lines"), and the first sentence of `caveats[4]`.

## 6. The drawing of the tab "Names": its words, and the `facts`

Not edited by me. Every string the script prints was read.

- `plates[2].lenses[3].facts[2]["part of the opera"]` is now "the
  lines shown here". The tab shows no lines: the drawing stands where
  the passage was. Proposed: "the lines of this passage". The script
  finds that part by its `read` place and not by its name (lines 70 to
  79), so the change is safe. The key under the drawing (line 276)
  would then read "in the lines of this passage", and the sentence
  shown on pointing (line 246) would begin "The lines of this
  passage." The caption already says "In the lines of this passage".
  The next part, "from there to the end", still follows.
- Line 275, the first key: "each time the name is spoken or sung".
  The dots stand for two names, so "a name" would be exact. Slight.
- Line 246, the sentence shown on pointing, where no one says the
  name: it comes out as the part, the name, and "no one". Short, and
  clear enough. Left.
- Line 31 gives "once", "twice", and then a figure with "times". Left.
- The `note` and `counted` of the facts are not printed (the kit keeps
  them back). The `note` of the first part also says "the lines shown";
  it may as well change with the name of the part.

## 7. What recurs, with counts

The page prints eleven captions (62 sentences), 19 small notes, 24
remarks on marks, 49 glosses, four entries in the list and five
caveats.

Mended

- A quaint or clipped turn where the ordinary word serves: nine, in
  eight sentences (changes 1, 3, 6, 12, 14, 18, 20, 21). "Oftenest",
  "oftener", "commoner", "of herself as of another", "takes the room
  of", "expressed for its amount", "moves twice", "once, no reason",
  "Shortly after it". This is the mannered plainness CRITIC.md warns
  of. No other fault came up as often.
- A pointer with nothing clear to point at: eight, in six sentences
  (changes 2, 4, 11, 13, 22a, 22b). "The words", "here", "beside it",
  "that", "there", "Auden's remark", "that name", "the lines shown".
- A small note or remark that said again what its caption says: four
  (changes 8, 9, 15, 16), and one clause inside a caption (19). On a
  Words tab the caption gave the dictionary's sense and the note under
  the word gave it again.
- A name with no word of what it is, where a reader of that tab first
  meets it: three (changes 5, 7, 10).
- One ending that poses (22c). One sentence that concluded what it had
  just said (17). One frame varied where it also made an echo (23).

Counted and left

- Auden at the close. Eight of the eleven captions name him, and seven
  end on him (six before the change to Names). The frames differ:
  "Auden said", "Auden called … and held", "Auden held", "Auden
  believed", "Auden's remark … is", and "Auden wrote" on three tabs
  (four before change 23), twice at the head of its sentence. Each
  gives the reason the tab is there, which is rule two. Seven closes
  on his word are past what CRITIC.md calls the method; but the close
  is where rule two puts the reason, so only the verb was varied, once.
  Whether fewer tabs should end on him is the lead's to say.
- The one remark on Cordelia is told five times: in the display
  quotation, twice in the paraphrase under it, in the caption of
  Versions and in the caption of the second Words. The first caveat
  points at it once more. The page has that one remark of his on this
  opera and says so plainly; still, a reader hears it more often than
  anything in the libretto.
- The list retells the captions. All nine sentences of `auden[1]` and
  `auden[2]` are told, whole or in part, in six captions. Three
  clauses are the list's alone: why recognition must be sudden, that
  poetry tries to understand what is felt, and the verses' great
  moment. A reader of every tab reads his notes twice; a reader of one
  tab finds them gathered here. By the rule the entries stay.
- Remarks that say again what the caption says: seven of the 24
  (Versions, remark 2; English, remarks 1, 3, 4 and 5; the Beat of the
  third passage, remarks 1 and 3). Left: each is the only word on its
  mark, and a reader who points at a pair should be told there what it
  is. On the tab English the caption could say less instead.
- Length. Before my changes the eleven captions ran from 105 to 110
  words; now from 104 to 118. Each has five to seven sentences, and
  most go the same way: what is there, a term or a count, then Auden.
  That is the method. The even length is what a reader may feel.
- The colon: 20 in the 62 caption sentences, and one or more in 22 of
  the 43 small notes and remarks. Each brings a meaning, a list or a
  reason that the first half promises, so none was changed on that
  ground. The count is here for the lead.
- "*Word* is …" opens nine of the 19 small notes. It is the form of a
  glossary. Left.
- "Adelung" stands in four captions and five small notes (seven
  before); "dictionary" twelve times in captions and small notes
  together. Each time it is the source of a meaning. Left.

## 8. Sentences doubted and not changed

1. `view.says`, sentence 2 and the last sentence. The paraphrase says
   again what the display quotation just above it says, and then says
   part of it a third time. `view` is not mine to touch. For the lead:
   sentence 2 could place the quotation without retelling it (in a
   lecture of 1947 on *King Lear*, known from students' notes, he said
   this of Cordelia).
2. `scene`, Words, caption, sentences 6 and 7. Auden's remark on
   Cordelia is set beside the two grounds of Leonore's resolve, and the
   reader is left to draw the line between them. He said it of
   Cordelia and sent his class to Leonore's answer, which is the first
   passage and not this aria. The caption and the first caveat claim
   no more than that, and the examiner let it stand for the same
   reason. It is candid, and it is the thinnest join on the page: this
   is the tab that pays least.
3. `name`, Words, the note on row 12.0, word 4. It says that she
   swears death to Pizarro twice and "here comfort to her husband".
   But the same sentence of hers, on the next row, swears something to
   each man: the page's own glosses there are "comfort to him" and
   "ruin to you", and remark 6 of the tab Beat says so. To complete the
   note would change what it says is so. For the lead: "… and here
   comfort to her husband and ruin to Pizarro".
4. `name`, Words, caption, sentence 2: "Upper Germany". A reader is not
   told that this is the south. To say so adds a fact that no `stands`
   carries, so it is the lead's.
5. The date of Adelung's dictionary. The caption of the first Words
   says "of 1798", that of the third Words "of 1801", and the second
   Words "finished in 1801". Each is the date of the volume used, and
   the list of sources gives the years of the whole. A reader who
   goes from tab to tab may take them for two dictionaries. They are
   numbers, so I left them. For the lead: "in a volume of 1798".
6. `answer`, Words, the note on row 5.0: its second sentence, that the
   body's better self can be read as the soul or as the husband. This
   is the reading's own step from the dictionary's two senses, on no
   one's word. It is hedged, and the fifth caveat owns it. It is the
   one sentence in the small notes that interprets and does not
   report. Left for the lead to weigh against the reader's words in
   BRIEF.md about made-up interpretations.
7. Two captions of the third passage end on what is there and give no
   reason for it. Beat: the two lines that follow the discovery, and
   the rhyme of her name with the word for sworn (the reason, Auden's,
   stands in the middle, next to the count it explains). Words: three
   plain facts of the text (her clothes and the dagger, the one earlier
   use, Pizarro's question), set after the dictionary's senses with no
   word on how they meet. Neither poses nor pronounces. Left.
8. `name`, Names, caption: after change 22c it opens on a fact that
   is not in the drawing (Beethoven's wish for the title). The old
   order had the drawing's counts first. The lead may judge the pose
   at the end the smaller fault and put it back.
9. `about`, last sentence. The third passage comes earlier in Act 2
   than the first, and only the scene numbers in the line above say
   so. "The third, earlier in the same act, is the moment …" would
   state an order the sentence does not now state, so it is left for
   the lead.
10. `scene`, English, caption: "six lines". Whether a reader can count
    six depends on where the English lines turn, which the artist has
    reported (`art.md`, K4). Named here only because the caption
    leans on the count.

## 9. What on the page got in the way of reading

The words only; the kit's faults are the artist's report.

1. The head. Under "What Auden said" the page opens on a sentence
   about Cordelia, and the paraphrase tells it again before it comes
   to Leonore. A reader waits until the fourth sentence of the
   paraphrase to learn what the remark has to do with this opera
   (doubt 1).
2. The order of the passages. The page begins at the answer, goes
   back to Act 1, and ends at the moment in the dungeon that comes
   before the answer. `about` says what each passage is, and not that
   the third comes before the first (doubt 9).
3. One weight throughout. Eleven captions of nearly one length, seven
   of them closing on Auden. By the third passage I knew how a caption
   would end before I had read it.
4. Said twice. On the Words tabs the dictionary's sense stood in the
   caption and again in the note under the word (mended in three
   places). On the tab English four of the six remarks still say what
   the caption says (section 7).
5. The list at the foot gave me almost nothing I had not read in the
   captions (section 7).
6. Many dictionaries. On the way a reader meets Adelung's, Grimm's,
   the DWDS dictionary and Grove's, some with a year and some without;
   and on the second Words tab the word *Grimm*, rage, stands two
   notes above Grimm's dictionary. Each is named plainly. Together
   they slowed me. No one sentence is at fault.

What did not get in the way: no caption pronounces on what a passage
means or makes anyone feel, the checker's list of stock words finds
none, and each term of the trade (epizeuxis, epistrophe, recitative,
the tempo words, melodrama as Auden uses it) is said in plain words
where it first stands.

## 10. Tools run, what was refused, and how the checker ends

- `node build/tools/prose.mjs fidelio`: at 11:52 UTC (4,445 printed
  words), and after the changes at 12:18 and 12:37 (4,406). It writes
  `review/remake/prose/fidelio.md`.
- `node build/tools/check-reading.mjs fidelio --print`: before any
  change, after each round of changes, and last at 12:35 UTC.
- `node build/pieces.mjs fidelio`: at 12:18 UTC, and at 12:36 after
  change 23. It writes `site/data/pieces/fidelio.json` and the index
  beside it. The built piece is newer than the reading (12:34).
- `node build/tools/shoot.mjs fidelio --out remake/works/fidelio/shots
  --page`: once, from 12:18 to 12:19 UTC. It reported nothing. The
  pictures show the page with every change but 23; the second run
  allowed was not used.
- By hand I wrote only `reading.json` (small exact edits) and this
  file. Nothing was written in `notes.md`. The tools above wrote
  their own outputs, as CRITIC.md sets out. A copy of the reading as
  it stood before my changes, and the checker's output, lie in the
  session's scratch folder outside the project; nothing there is
  needed.
- The script and the `facts` were not edited (section 6). No `turn`,
  `join`, `heading`, `speakers`, `beside` or tab `label` was set or
  changed.
- Refused by the permission system: nothing. Three times a command
  was turned back with the message that the service which judges
  commands was unavailable for the moment and that the command should
  be tried again; each was run again unchanged and went through.

The last three lines the checker printed, at 12:35 UTC:

```
no problems
no warnings
the printed notes are fit to print
```
