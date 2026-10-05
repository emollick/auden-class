# The critic's report on the piece "blake"

3 October 2026, 12:47 to 13:36 UTC.

Words of the work are pointed at by row and word number, as
`node build/tools/check-reading.mjs blake --print` shows them (`32.1 w6`
is word 6 of row 32.1, counted from 0; `p:16.0` is a row of the second
passage of the first plate). "Old" and "new" below are the site's own
sentences. Nothing of Auden's is quoted.

In `critic/`: `reading.before.json` (the reading as found),
`check.before.txt` (what the checker printed for it), `check.after.txt`
(what it prints now), `diff.txt` (every field that differs, old and
new), `notes.before.md` (the poet's notes before my lines were added).

In short: ten sentences reworded or cut (two of them cut) and two
short lines reworded; 69 pairs of asterisks added in 35 places and
five pairs of quotation marks in three; one entry taken out of the
list under "More from Auden", and one source with it. No mark, label,
`turn`, `join`, `heading`, `speakers`, `beside`, `grounds`, `why`,
quotation, `checked`, caveat or `open` line was changed (a script
compared them with the copy). The permission system refused nothing.

## 1. How the page was read

- `node build/pieces.mjs blake` and `node build/tools/prose.mjs blake`
  at 12:50.
- The picture tool was not run at the start. The 32 pictures in
  `shots/` were taken at 12:36, after the last change to the reading
  (06:52) and to the kit (11:05), and the built piece had not changed
  since, so they showed the page as it stood. I read the five pictures
  of the whole page at 1280 from the top, then each of the ten tabs at
  1280, then the head of the page at 390.
- `review/remake/prose/blake.md` was read once through before anything
  was marked, then sentence by sentence.
- Beside it: `reading.json` whole (every printed string, and every
  `why`, `grounds`, `checked` and `open`), `exam.md`, what `art.md`
  says of the reading, the poet's `notes.md`, the hosted text of the
  book where a caption or a note points into it, and the proof the
  checker prints.
- The checker as I found it: no problems, no warnings, the printed
  notes fit to print.
- After the changes the picture tool was run once, at 13:12, and the
  page was read again in those pictures (see section 8).

## 2. Every change to the wording

**2.1 `where`, the line under the title**

- Old: `The Marriage of Heaven and Hell: The Voice of the Devil, a Memorable Fancy, Proverbs of Hell`
- New: `“The Voice of the Devil,” a “Memorable Fancy,” “Proverbs of Hell”`
- Fault: padding. The small line above the title already reads
  "Blake · The Marriage of Heaven and Hell", so the book was named
  twice within three lines (the artist's first point). The three
  headings were bare. They head sections of the book, so by the rule
  for titles they take quotation marks and no asterisks.

**2.2 `about`, second sentence**

- Old: Under the heading The Voice of the Devil it sets three errors,
  laid to [11.0 w0–w4], against three contraries.
- New: Under the heading “The Voice of the Devil” it sets three errors,
  blamed on [the same five words], against three contraries.
- Fault: a quaint idiom where the ordinary one would do. The heading
  was bare.

**2.3 Answer caption, last sentence**

- Old: That would imply two Gods, he wrote, a Creator within the world
  and a Judge beyond it, and this book is one of the great polemics
  against such a dualism.
- New: cut.
- Fault: padding. The view at the head of the page says both things in
  nearly these words, just above, and the Grammar caption says again
  that Auden ranked the book among the great polemics. The caption now
  ends on the sentence that stood before this one. That sentence holds
  what the view does not say: Auden called the thought of an eternal
  penalty a misunderstanding of the doctrine of Hell. It comes straight
  after the sentence on the third error, so the caption still goes from
  what is there to the reason for it. The `why` already said only this
  and was left. `stands` was trimmed to match: "Auden on the law, the
  eternal penalty, the two Gods and this book:" is now "Auden on the
  law and the eternal penalty:". The `grounds` item for Auden is
  untouched and covers more than the caption now uses. The caption is
  79 words.

**2.4 Grammar caption, last sentence**

- Old: Here the errors laid to the sacred codes stand in dependent
  clauses, and the reply in plain statements.
- New: Here the errors blamed on the sacred codes stand in dependent
  clauses, and the reply in plain statements.
- Fault: the same idiom. These were its only two uses.

**2.5 Words caption of the first passage, second sentence**

- Old: Johnson gives force and vigor and, of speech, spirit and life.
- New: Johnson’s dictionary of 1755 gives force and vigor and, of
  speech, spirit and life.
- Fault: a name with nothing to say who he is, the first time a
  caption uses it. The words added stand in the first note under the
  same passage and in `stands`, so nothing new is claimed.

**2.6 Question caption, third sentence; 2.7 Words caption of the third
passage, second sentence**

- Old: "… has the sense Johnson gives as …" and "… and Johnson names it
  as a quality of the goat."
- New: "… has the sense Johnson’s dictionary gives as …" and "… and
  Johnson’s dictionary names it as a quality of the goat."
- Fault: the same, for a reader who opens the second or the third
  passage first. Each passage now says once, in a caption, that
  Johnson is a dictionary.

**2.8 `meterName`, the line printed after "The measure"**

- Old: seven beats to the line, rising: fourteen syllables
- New: seven beats to the line, each after a lighter syllable: fourteen
  syllables
- Fault: "rising" is a word of the trade and nothing on the page says
  what it means. The new words say what the row of marks under the
  line shows. Two other pieces on the site name a measure in these
  words.

**2.9 Beat caption, last sentence**

- Old: A handbook of verse scans such a syllable as a foot by itself,
  set off by the pause.
- New: A handbook of verse counts such a syllable as a foot by itself,
  one unit of the measure, set off by the pause.
- Fault: two words of the trade, "scans" and "foot", left unexplained.
  The handbook's own glossary calls a foot the smallest unit of the
  measure, so the gloss adds no claim. The caption is 113 words.

**2.10 Words caption of the second passage, second sentence**

- Old: Closed is the last verb of the ballad stanza that the first line
  is close to, said there of eyes shut by death.
- New: Closed is the last verb of the ballad stanza that the first line
  resembles, said there of eyes shut by death.
- Fault: "close to" a few words after "Closed" (the word of the
  passage, in bold) reads as a play on the word, and none was meant.

**2.11 The list, second entry, last sentence**

- Old: He went on using the pair: in an essay in The Dyer’s Hand he
  suspects that the dreamer of Eden and the dreamer of New Jerusalem
  are divided as deeply as Blake’s Prolifics and Devourers.
- New: cut. The second half of the `source` line went with it:
  "“Dingley Dell & the Fleet,” in The Dyer’s Hand (1962), pp. 409–10".
- Fault: a comparison made in passing, in an essay on another book,
  with three names in it that the page explains nowhere. See section 4.

**2.12 The list, fifth entry, third sentence**

- Old: In the review of 1946, after saying that liberalism …
- New: In his review of 1946, after saying that liberalism …
- Fault: "the review" pointed back at a review the list had not named.
  Only the source line of the view at the head names it.

One more change is a mark only and is listed in section 3: quotation
marks round the title of a section, in the `stands` of the Yoke tab.

## 3. The marks

No wording changed here. The second and third of the artist's points.

**Titles: 22 pairs of asterisks, five pairs of quotation marks.**

- `view.says`: the short title of the book. `view.source`: the journal
  and the book of 1950.
- The list: in `says`, the titles in the second entry (two), the third
  (two) and the last, which was the eighth as found (three); in every
  `source` line (seven), the journal, the books and the collections. The essays keep their
  quotation marks and take no asterisks.
- Words tab of the first passage, note 7: the short title of Locke's
  book.
- Quotation marks, for headings of sections of the book: three in
  `where`, one in `about`, and one inside the link in the `stands` of
  the Yoke tab, as other pieces on the site write such a link.

**Words named as words: 47 pairs of asterisks in 23 of the 32 small
notes.** 41 are English words and phrases, 6 are Latin.

- Answer remarks. 1: p:15.0 w7. 2: 12.0 w4 and p:16.0 w3. 4: 13.0 w4,
  13.0 w6, p:17.0 w4, and the five words p:17.0 w1–w5, which the
  remark quotes whole. 5: 13.0 w14. 6: 14.0 w2, w5, w7 and w4, and
  p:18.0 w3 and w4.
- Words, first passage. Note 1: *code*. Note 2: Latin *videlicet*.
  Note 4: the two names the religious give (13.0 w14 and w4). Note 7:
  Milton's phrase of four words, *inlets*, and Locke's phrase of five
  words. I read both phrases in the two books before marking them as
  quoted, and both are exact. Note 8: *bound*, *bounds*, and
  *circumference* three times.
- Beat remarks. 1: 32.0 w0 and w1. 3: 32.1 w1 and w4.
- Words, second passage. Note 3: Latin *immensus*, *in-*, *mensus*.
  Note 4: the four words p:18.0 w1–w4. Note 5: the four words of block
  51 of the book that the caption also sets in italics. Note 6: the
  book's three-word phrase for the senses.
- Words, third passage. Note 1: the three words from block 117. Note
  2: the herald's phrase, and *pride*. Note 3: the four phrases that
  end "of God". Note 4: *goatish*. Note 5: Latin *bonitas*. Note 6:
  the Bible's phrase. Note 8: Latin *excessus*.

In the pictures the marked words stand upright in the italic line and
can be told from the sentence round them.

**Left unmarked, on purpose.**

- Answer remark 3 speaks of Body and Soul as things and not as words.
- "Inversion" in Beat remark 4 is a term the remark is explaining. It
  is neither a word of the passage nor a foreign word.
- No gloss names a word of another language. One gloss, under 14.0 w4,
  names the answering word of the passage. The rule for glosses covers
  only foreign words, so it was left.
- "Online Etymology Dictionary", in four `stands` lines and one
  source, is the name of a website. The examiner left it roman beside
  the italic titles of printed dictionaries, and so did I.
- Captions needed nothing: the poet's bold and italic already do it.

## 4. The list under "More from Auden"

Eight entries as found, seven now.

**Taken out whole: the seventh entry**, from the essay on D. H.
Lawrence in *The Dyer’s Hand*, p. 278. It said that Blake and Lawrence
were artists and apostles at once, which makes their work hard to
judge fairly. It names Blake and not this book, in passing, in an
essay on another writer. No caption, `grounds` item or `stands` leans
on it, and it had no quotation. Its `says`, `source` and `checked` are
at the end of `notes.md` under the heading asked for.

**Cut from the second entry: its last sentence** (2.11 above). It is
the same case inside an entry: a comparison in an essay on Dickens.
The reader also met "the pair" and two "dreamers" with nothing to say
what they are. The record of where the examiner read it is still in
that entry's `checked`, which is never printed and which I left as it
was. I did not copy the sentence into `notes.md`, since it is not a
whole entry and I was to write nothing else there; it is in 2.11 and
in the copy. To put it back, take from `critic/reading.before.json`
the last sentence of `auden[1].says`, the second half of
`auden[1].source`, and `sources[7]`.

**`sources`: one entry taken out**, 24 to 23. It listed these two
essays and nothing else: "W. H. Auden, *The Dyer’s Hand and Other
Essays* (1962): “D. H. Lawrence,” p. 278; “Dingley Dell & the Fleet,”
pp. 409–10."

**Kept, and why.**

1. The essay of 1935, on Freud. Kept, and for the lead to decide. The
   entry says itself that the remark stands in a parenthesis, in an
   essay on psychology and art, so it is the nearest thing left to a
   mention in passing. I kept it because it is a judgment of this book
   and not only its name, and it is the earliest. Nothing leans on it.
2. The prose book of 1939. He wrote a book on the model of this one.
3. *New Year Letter*, 1941. The year of the course. The Words caption
   of the second passage leans on its lines.
4. *The Enchafèd Flood*, pp. 48–50. The Frame and Yoke captions lean
   on pp. 49 and 50.
5. *The Enchafèd Flood*, pp. 44–45, with the review of 1946. The Words
   caption of the first passage leans on p. 44.
6. The table talk and the foreword on aphorisms. The Frame caption
   leans on the foreword.
7. Donald Pearce's notes of the class. Said in 1941.

No two entries say the same thing.

## 5. What recurs, with counts

Nothing here reaches the count of a tic. The faults that did come up
were few and small: a name or a term with nothing to explain it (five
places: Johnson three times, "rising", and "scans" with "foot"); words
the page did not need (three: the book's name said twice at the head,
a sentence that said the view over again, a comparison made in
passing); a quaint idiom (two); one pointer back at nothing ("the
review"); and one chance echo. Most of the work was marks.

- **Auden.** In 6 of the 10 captions, 7 times. Three captions end on
  him (Answer, the Words of the second passage, Frame). The frame
  differs each time: he called, ranked, quotes, wrote, gives, his
  verse has, a foreword he signed says. The four captions without him
  (Beat, Question, Cross, the Words of the third passage) take their
  reason from the text or from a handbook.
- **Johnson.** In 4 captions and in 12 of the 22 notes on words;
  "Johnson:" opens a definition five times. That is what a Words tab
  is here. Left, apart from 2.5 to 2.7.
- **The book called on for another place, with a word of time**
  ("Soon the book says", "Later the book says", "the book later
  speaks of", "An earlier proverb", "A later one"): 6 times in 5
  captions, and in 4 notes. This is the method, a reason given on the
  text's own word. Only "Later the book" comes twice.
- **"Hung on", "hangs on":** 3 times in two captions and once in a
  key. **"Nowhere asserted":** twice (Grammar, Question). The second
  takes up the first on purpose: the errors are reported, and the
  Devil's claim is asked. Left.
- **"Rhetoric calls":** twice (Yoke, Cross). **"A handbook of
  verse":** twice (the Beat caption and its fourth remark).
- **"Here" turning to the reason:** 3 captions (Grammar, Beat, Cross).
- **"Laid to":** twice. Both changed.
- **"Polemic":** as found, four times in three places (the view, the
  Answer caption, the Grammar caption twice), and "polemical" once in
  the list. Now the view once, Grammar twice, the list once.
- **Length.** As found the ten captions ran from 101 to 110 words, and
  nine of them from 106 to 110. Ten captions of one length read as
  written to a limit. They are now 79, 99 and eight from 107 to 113.
  I cut nothing to vary the length. I name it because the lead may see
  the same across pieces.
- **Notes that say again what their caption says:** about 12 of the 22
  notes on words. A Words tab on this site is built so: the caption
  tells it through, and the note stands by its word. Left.
- **Stock words, claims of feeling, working words:** none. The checker
  lists none, and I found none.

## 6. Sentences doubted and not changed

No caption hands down what a passage means or what a reader feels.
Each caption is borne out by its picture: I found on the passage every
word a caption points at. Each of the ten tabs pays something, and
none only names things. What each one leaves the reader knowing:

- Answer: which words of the errors come back in the contraries, and
  which three do not.
- Grammar: the errors are clauses hung on a noun, and the contraries
  are full sentences in the present.
- Words, first passage: Energy was not yet a word of physics; inlets
  was Locke's word; the bound and the circumference are Milton's.
- Beat: where the second line leaves the measure, and on which words.
- Question: the claim about the bird sits inside a question about
  what the reader knows.
- Words, second passage: the verb of the ballad, and the number
  turned to the end.
- Frame: one build of sentence four times, with no reason given.
- Yoke: one verb for two halves, which pairs religion with law.
- Cross: each feeling is given the other's verb.
- Words, third passage: each sin stands with the animal tradition
  gave it, and three of the four endings are Bible phrases.

Doubts, for the lead:

1. **`view.says`, second sentence.** Three abstractions in one
   sentence ("polemic", "liberal theology", "dualism"), and "polemic"
   is said in plain words only later, in the Grammar caption, which
   is its second use on the page. The sentence keeps close to Auden,
   and CRITIC.md says not to touch `view`, so I marked the title there
   and changed no word. The plain words could stand here at first use.
2. **The list, first entry** (Freud, 1935). See section 4.
3. **The list, fifth entry: "meliorist".** Auden's word, not said in
   plain words. The clause before it, on inevitable progress, gives
   the sense. A gloss would add words to a paraphrase of him. Left.
4. **The list, fourth entry: "as sure-sighted here as ever".** This
   is Auden's praise of Blake, reported, and not the site's own. It
   reads a little mannered. Left, since it is a paraphrase of him.
5. **Words caption of the first passage, fifth sentence.** "Names
   Bacon, Newton and Locke as unbelief" reads oddly, but a smoother
   verb would change what the statement is said to say. Locke is not
   said to be a philosopher either; the sentence before says what he
   did with the word, and that is enough to follow it.
6. **Question caption, last sentence** (it begins with one thing and
   ends on another). A neat close, and I looked at it twice. Kept:
   both things are on the passage (32.0 w3; 32.1 w8–w10), and the
   sentence is the caption's reason, since the question is about
   knowing and its last words are the senses.
7. **Grammar caption: "A polemic is an argument in a controversy."**
   A dictionary sentence standing by itself. The page needs it and it
   is short. Kept.
8. **Beat caption: "here it slows on what every bird is."** The
   reader has to look back one sentence for the word (32.1 w3). Kept.
9. **Answer caption, first sentence.** It tells the reader how the
   numbers and colors work. That tab has no key, so the sentence does
   the key's work. Kept.
10. **Answer remark 2, after the colon.** It says the first contrary
    over again in nearly the book's words (p:16.0 w1–w8). Harmless in
    a small note. Kept.
11. **The Answer caption after the cut** (2.3). It is now the one
    short caption of the ten and ends without naming the book. I
    think it is the better for it. The cut sentence is in 2.3 if the
    lead wants it back.

## 7. The three keys where one color carries two labels

The artist's fourth point. The marks are not mine, and I changed
nothing here. In each of the three tabs one kind of mark has two
spans, each span has its own label, and the key prints one swatch of
the color with both labels after it, joined by a comma. I read the
three keys in the pictures at 1280.

**Grammar, kind `frame`** (red; 11.0 w0–w12 and p:15.0 w0–w7).
Printed: "the main clause, the claim: true".

- Does it mislead? Yes. Read as one name for the red mark, it says of
  the head of the errors that it is a claim of truth. That head claims
  nothing true: it gives the errors a cause. After the comma, "the
  claim: true" can also be taken as the page's own verdict, as if the
  page ruled that the claim is true. The page takes no side here and
  should not seem to. And the second label is not grammar, on a tab
  named Grammar: it repeats a word of the line (p:15.0 w7).
- The single label true of both: **"the main clause"**. Each head is
  one. It has its own subject and verb and depends on nothing. On the
  left the blue clauses hang on its last word, and on the right full
  sentences follow it. That difference is what the tab shows, and the
  blue and green labels already carry it.
- What is lost: that the contraries are called true. The first remark
  of the Answer tab says it, and the word stands in the line. To keep
  it in this key it would need a color of its own under p:15.0 w7.

**Question, kind `what`** (plum; 32.1 w1–w5 and 32.1 w6–w10).
Printed: "what it is, what closes it".

- Does it mislead? The least of the three, but it does. The two names
  follow the two brackets in order, and a reader can pair them off.
  Nothing in the key says so, though: it shows one swatch and two
  names. "It" changes between the names: first it is the subject of
  the claim, then it is the world. And the second name fits only the
  end of its bracket: what closes it is named by w8–w10, and w6 and
  w7 are the verb and its preposition.
- The single label true of both: **"what is said of it"**. Both
  brackets are what the sentence says of its subject, and the label
  follows "the subject" and "its verb" in the same key. The first
  label alone, "what it is", would also do if the lead prefers to
  keep a label that is there: the second bracket belongs to the same
  noun as the first.
- What is lost: the pointer at the senses. The last sentence of the
  caption carries it.

**Yoke, kind `half`** (red; 34.20 w0–w6 and 34.20 w7–w11).
Printed: "a full clause, no verb".

- Does it mislead? Yes, the most. Printed together the two names make
  one name that contradicts itself: a clause that is full and has no
  verb. Each name is true of one half and false of the other.
- The single label true of both: **"a half of the line"**. It is the
  caption's own word ("two halves and one verb").
- What is lost: nothing. The blue bracket, "the verb, said once",
  stands under the first half only, so the picture shows which half
  has the verb, and the caption says that the second leaves it out.

The fault is the same in all three: one kind of mark was given two
names. If two names are wanted, they want two kinds.

## 8. The page itself, the pictures, and the checker

**What got in the way of reading.** I leave the kit to the artist's
report, as told. Of the words and their order:

- The head. After 2.1 the title and the line under it begin with the
  same words, because the page is named for the first of the sections
  the line lists. The line cannot well say less. If the echo matters,
  the title is the lead's to change.
- The order of the list. It runs 1935, 1939, 1941, 1950, 1950 with
  1946, 1946–48 with 1962, and then the class of 1941. The one entry
  from the class itself stands last, under an entry of 1962. I did
  not move it: CRITIC.md gives me what is in the list and not its
  order. There is a case for leaving it last, since its saying is not
  from this book.
- The three keys of section 7.

**The pictures.** The picture tool was run once, at 13:12, into
`shots/critic/` (32 pictures) and not into `shots/`, so the artist's
pictures of 12:36 are as they were left. Four small changes came after
that run: 2.9, 2.6, 2.7, and the quotation marks in the `stands` of
the Yoke tab. The pictures are older than the reading by those four.
I did not use the second run. The lead will take new pictures when
the kit is mended, and these changes add seven words in three
captions.

**`notes.md`.** One section was added at its end, "Taken out of the
list of what Auden said", with the one entry. Nothing else in it was
touched. The file as it was is at `critic/notes.before.md`.

**Not done, as told.** No `turn` was set; the turns the artist
proposes are still only proposed. The three keys are answered in
section 7 and not changed.

**Refused.** Nothing was refused by the permission system.

**The checker**, run after the last change
(`node build/tools/check-reading.mjs blake --print`, then
`node build/pieces.mjs blake`), ends:

```
no problems
no warnings
the printed notes are fit to print
```
