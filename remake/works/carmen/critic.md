# The critic's report: carmen

3 October 2026, 12:47 to 13:40 UTC.

## In short

- **12 changes to the wording** (section 2): 7 sentences reworded, 3
  sentences and 1 clause cut, 1 caption put in another order. The
  faults that came up most, three times each: a reference that pointed
  two ways; a sentence that said again what had just been shown, or
  announced what came next; a word of the trade or of the workshop.
- **Marks, with no word changed** (section 3): 45 pairs of asterisks
  in 25 of the 43 small notes; 11 words or phrases set in italic in
  four captions; at the foot, two `stands` lines, the 28 headwords of
  the dictionary and one more word in `sources`; one title turned from
  italic to quotation marks.
- **The stanzas of the third passage** (section 4): the word is
  printed nine times there. Five places lean on stanzas that a reader
  cannot see on the plate. The words I would use for each are given.
  None was changed.
- **The mark of lines left out and the stage direction** (section 5):
  no caption needs either. One phrase should be read again when the
  direction is shown.
- **The list of what Auden said**: nothing taken out, nothing written
  in `notes.md`.
- 45 fields of `reading.json` were changed: 9 captions, 23 remarks, 4
  word notes, 1 line of plain words under a figure, 2 `stands`, 2
  `says`, 4 lines of `sources`. No `turn`, `join`, `heading`,
  `speakers` or `beside`, no label, no `why`, no ground, no quotation
  and nothing in `view` was touched.

**For the lead to decide.**

1. The stanzas of the third passage: a space in the French text, or
   the words of section 4 (a, d, e, f).
2. "Auden’s example of a one-sided romance is these two": which side
   a reader takes it for (section 7, 1).
3. Where the page says what the English is (section 8).
4. The eleven italics in the captions, which light words of the
   passage (section 3).
5. Malherbe's title in quotation marks (section 3).
6. The sentence cut from the entry on “Opera Addict”, and with it
   p. 470 in `sources` (change 11).
7. Two small mends not made for want of room in a caption at 120
   words (section 4, i; section 7, 2), and "in the next line" once the
   stage direction is shown (section 5).

Words of the opera are pointed at by row and word number, as
`node build/tools/check-reading.mjs carmen` prints them (the first word
of a row is 0). "Old" and "new" below are the site's own sentences.
Where an old or new sentence holds a phrase of the libretto or of its
English version, the phrase is given as its row and words in square
brackets and is not typed out. Nothing of Auden's is quoted but two
words that the page itself prints (section 7, 1).

## 1. How the page was read

- `node build/pieces.mjs carmen` and `node build/tools/prose.mjs carmen`
  at 12:48 UTC. The built copy is the reading as I found it.
- The picture tool was not run at the start. The artist's 72 pictures
  in `shots/` were taken from 12:34 to 12:37, after the last change to
  the reading (10:46) and to the kit in `site/` (11:05), so they showed
  the page as it stood. I read the seven pictures of the whole page at
  1280 from the top, then the tabs at 1280 (all twelve: three in the
  pictures of the page, nine by themselves), then the head of the page
  and the English tab of the second passage at 390.
- `review/remake/prose/carmen.md` (563 lines, 4,602 words) was read
  once through before anything was marked, then sentence by sentence.
- Beside it: `reading.json` whole (every printed string, and every
  `why`, `grounds`, `checked` and `open`), `exam.md` whole, `art.md`
  whole, the end of `notes.md`, the kit's README on the small notes,
  `site/js/rich.js` and the lines of the kit that print each field (to
  see where an asterisk is read and where it would be printed), and the
  proof the checker prints.
- The checker as I found it: no problems, no warnings, the printed
  notes fit to print. Both proofs are kept in `critic/`
  (`proof-before.txt`, `proof-before-print.txt`), with the reading as
  found (`critic/reading.before.json`).
- After my changes the picture tool was run once, at 13:10 UTC, at
  1280 and 390 with the whole page, into `shots/critic/` so that the
  artist's pictures stay as they are: "nothing reported; now look at
  the pictures". I read the tabs with marked words at 1280 (the Word
  and English tabs of the second passage whole; the caption columns of
  five more, cut out at full size as `shots/critic/crop-*.png`) and
  the foot of the page. The second run was not used.

## 2. Changes to the wording (12)

Each is the old sentence, the new one or "cut", and the fault. All
were made in `reading.json` by exact edits (the lists of old and new
strings are `critic/edits-1-captions.json` to `edits-4-foot.json`).
Word counts are the checker's.

**First passage (The Habanera)**

1. Word, caption, first sentence.
   Old: "In Littré three of these words have a sense in the language
   of courtship."
   New: "In Littré’s dictionary three of these words have a sense in
   the language of courtship."
   A name left unexplained. This is the first place the page names
   Littré, and nothing above the list of sources says what he is. He
   is named 18 more times in the captions and the small notes. 118
   words to 119.

**Second passage (Over there)**

2. Mood, caption, last sentence.
   Old: "Her words have gone from what would be to what will be."
   Cut. An ending that poses, and it pads. The four sentences before
   it show the change form by form (loved, would follow, will follow,
   love); this one says it again as a balanced pair, in the voice of a
   summing up. The caption now ends on Auden's verb, which is where
   its `why` ends. 114 words to 102. `why` and `stands` fit as they
   are.
3. Word, caption, third sentence.
   Old: "José named it when the bugles sounded and he said he must
   go."
   New: "José named that call when the bugles sounded and he said he
   must go."
   A pronoun that points two ways. "It" is the place in the two
   sentences before and in the one after; here it is the call back to
   barracks. 117 words to 118.
4. Figure, caption, fourth sentence.
   Old: "... here that authority is oneself, and the country is the
   whole world."
   New: "... here that authority is oneself."
   Padding, and a pair made for the balance. The second sentence has
   already said "for country the whole world", and Littré's sense,
   which this sentence is about, is of the law alone. 120 words to
   113. `why` fits.
5. Figure, the figure in plain words.
   Old: "members of the same length and the same build, set side by
   side"
   New: "parts of the same length and the same build, set side by
   side"
   A word of the trade, in the one line whose work is to say the
   figure plainly.
6. Word, the note on [row 4.1, word 4].
   Old: "Littré’s first sense is that makes drunk. The second is
   figurative: that deludes, exalts, charms."
   New: "Littré’s first sense is what makes drunk. The second is
   figurative: what deludes, exalts, charms."
   Dictionary shorthand that stops the reader ("is that makes drunk").
   The caption of the same tab already says "what makes drunk".

**Third passage (Carmen reads the cards)**

7. Count, caption: the order of its sentences. The last sentence ("A
   final e counts before a consonant, is dropped before a vowel, and
   is left out at a line’s end.") now stands second, straight after
   "French verse is measured by the number of syllables." No word is
   changed. Wrong order: the rule for counting came after the reason,
   so the caption ended on a point of method. It now ends where its
   `why` ends, on the line of twelve as the line of French tragedy.
   120 words, as before.
8. Count, second remark.
   Old: "A history of French verse shows this stanza by Malherbe’s
   famous poem consoling a friend on the death of his daughter."
   New: "A history of French verse gives as its example of this
   stanza Malherbe’s famous poem consoling a friend on the death of
   his daughter."
   "Shows this stanza by" is not what a person would write. The new
   words are those of the ground ("gives as his example"). "Famous" is
   the historian's word, by the ground, and stays.
9. Rhyme, caption, last sentence.
   Old: "Their rhyme keeps the sound or of those two words."
   New: "Their rhyme keeps the sound or of [row 1.1, word 4] and
   [row 1.3, word 3]." The two words are named, in bold, as they are
   two sentences earlier.
   "Those two words" reads as the two just named, the rhyme words of
   the last pair, so the sentence seemed to say that a rhyme keeps its
   own sound. 110 words, as before.
10. English, caption, third sentence.
    Old: "Four of its changes matter here."
    Cut. A signpost: it announces the four sentences after it and says
    nothing itself. "Matter here" is not made good until the last
    sentence, and one of the four (you and I) is not taken up there.
    118 words to 112. `why` fits; it names three changes, as it did.

**More from Auden**

11. The entry on “Opera Addict”, last sentence.
    Old: "He says the same later in “Notes on Music and Opera” (The
    Dyer’s Hand, p. 470), where the six roles he names do not include
    her."
    Cut. It made the list read as everything that was found: a
    sentence to report a place where the opera is not named. The
    passage itself is already kept whole in `notes.md`, in the entry
    the examiner took out. With it goes the page that nothing else
    now uses, in `sources`: "“Notes on Music and Opera,” pp. 470 and
    473." is now "“Notes on Music and Opera,” p. 473." The entry's
    `checked` and the `open` list still record the later essay; they
    are the working record and I left them.
12. The entry on Pearce, last sentence.
    Old: "Neither place reports anything he said of the opera itself."
    New: "On neither page does Pearce report anything Auden said of
    the opera itself."
    A working word. "Place" is the examiner's word for a spot in the
    essay, and a reader has been told of no places. The source under
    the entry gives two pages, so "neither page" keeps the claim to
    those two, as the examiner set it.

## 3. Words and titles marked, with no change of wording

None of these changes a word. The old and new strings are in
`critic/edits-2-notes.json`, `edits-3-ties.json`, `edits-4-foot.json`
and `edits-5-caption-mark.json`; the headwords were wrapped by
`critic/mark-headwords.py`.

**In the small notes: 45 marks, in 25 of the 43 notes.** The piece has
9 remarks under its two Count tabs, 15 word notes and 19 remarks under
its three English tabs, and 15 glosses. As found, not one of them used
the asterisks. Each mark is a pair of asterisks round a word or a
phrase that the note names: a word of the passage, French or English;
the English words that a note sets down for the French ones it names
("The French says ..."); the letter *e*; the word *if*.

| passage | tab | notes marked | marks |
|---|---|---|---|
| first | Count | remarks 1, 2, 3 | 3 |
| first | Word | notes 4 and 6 | 2 |
| first | English | remarks 1, 2, 4, 5 | 5 |
| second | Word | note 2 | 1 |
| second | English | remarks 1 to 6 | 13 |
| third | Count | remarks 3 and 4 | 3 |
| third | English | remarks 1 to 7 | 18 |

- Every note the artist listed is among them, and the one that read
  as an English word (second passage, Word, second note, on
  [row 1.1, word 0]) now stands upright in the italic.
- Not marked, on purpose: the English meaning that follows a marked
  French word, and a word that a note uses and does not name.
- No gloss needed a mark: all fifteen are plain English meanings.
- Seen in the pictures of 13:10 (`shots/critic/`): the marked words
  stand upright in the italic of the notes, and no asterisk is printed.

**In the captions: 11 words or phrases set in italic** (`<i>`), as the
captions already set the French words they name.

- Ten are words of the English libretto that the three English
  captions name: first passage [p:110.9, word 5] and [p:110.10,
  word 4]; second passage [p:253.1, words 3-5], [p:253.1, word 0],
  [p:333.2, words 0-1], [p:333.1, words 3-4]; third passage [p:76.1,
  word 2], [p:76.9, word 2], [p:76.11, words 3-4], [p:78.1, word 6].
- One is Auden's verb, the last word of the Mood caption of the second
  passage. As found the sentence ended "... is tempts." This one was
  set after the picture run; the built copy holds it.
- In the kit a bold or italic word of a caption lights the place where
  it stands in the passage when a reader points at it. I read that
  rule (`site/js/kit/plate.js`, lines 388-498) and checked each of the
  eleven against the rows of the built copy. Nine light the English
  words the caption is speaking of. The word at [p:253.1, word 0]
  stands again at [p:261.2, word 5] and lights in both places, which
  is true to the passage. The pronoun of one letter at [p:76.1,
  word 2] lights nothing, because the kit passes over a word of one
  letter. Auden's verb is in neither version and lights nothing. The
  lighting needs a pointer, so no picture shows it.
- For the lead: these eleven are the only marks of mine that do
  something on the page besides change a letter's slope. Each is one
  pair of tags and can be taken out by itself.
- Left bare on purpose: *if* in the fifth sentence of the Mood caption
  ("The if is gone too"). In italic it would light the two *ifs* of the
  English version, and one of those is the *if* the English keeps
  where the French drops it (the third remark of the English tab says
  so). The mark would send the reader to the wrong line.
- Also left bare: the terms the captions bring in with "calls" (the
  name of the first figure; the two kinds of ending). They are
  neither words of the passage nor foreign words given with a meaning.

**At the foot.**

- `stands`, first passage, Figure: "the tenses after *if*".
- `stands`, second passage, English: the three English words of which
  the French has none, now each between asterisks.
- `sources`, the Littré line: all 28 headwords between asterisks, as
  the `stands` lines already set them.
- `sources`, the grammar: "sentences with *if*".
- Not marked: the measure line of a Count tab, the plain words under a
  figure's name and the labels of a key. The kit does not read
  asterisks there and would print them. None of these names a word.

**Titles.** Every title in `about`, `where`, `view.says`, the eight
`says` and their `source` lines was already marked, and rightly: books,
the opera, the plays and the magazine between asterisks, essays in
curly quotation marks. I found none bare. One was changed:

- `sources`, last line: the title of Malherbe's poem stood between
  asterisks. It is now in curly quotation marks, as CRITIC.md sets the
  title of a short poem. The poem is a lyric in stanzas, not a long
  poem. For the lead: this is the one mark I turned from one kind to
  the other; if the house would rather have a poem with so long a
  title in italic, the old line is in `critic/reading.before.json`.
- Left as they are: the two names at the head of the entry on “Balaam
  and His Ass” are the two characters, by the scan (`dh.txt`, lines
  5794-5810), not the two operas; the kind of work named in the first
  line of `sources` (a French term, used and not named).

## 4. The third passage: stanzas a reader cannot see

Nothing in this section was changed. These are the places, and the
words I would use.

**What the plate shows.** Fourteen French lines, each with its English
under it. There is one space, after the eighth line (row 0.7), and it
is slight. There is none after the fourth line (row 0.3) or the
twelfth (row 1.3). So a reader sees one run of fourteen lines, or at
most a group of eight and a group of six. The three stanzas (rows
0.0-0.3, 0.4-0.7, 1.0-1.3) and the last pair (1.4-1.5) can be made out
only from marks: on the Rhyme tab the brackets join the lines in fours
and then the last two; on the third tab the marks stand between the
fifth line and the twelfth and nowhere else; on the Count tab the
counts change at the thirteenth line.

**What the words count.** "Stanza" is printed nine times in the
captions and remarks of this passage: twice in the Rhyme caption,
twice in the caption of the third tab, once in the English caption,
in two Count remarks and in two English remarks. Read one by one
against the plate:

a. Rhyme, caption, first sentence: "Each stanza rhymes by turns."
   The plate does not say how long a stanza is. The brackets show the
   fours to a reader who looks for them, and nothing tells him to
   look. I would write: "Each stanza is four lines, rhymed by turns."
   110 words to 113. This adds a count ("four lines"). It is on the
   plate, in the brackets, and it follows from the grounds (three
   stanzas and a couplet in fourteen lines), but it is a count, so it
   is the lead's to pass.

b. Rhyme, caption, sixth sentence: "In the third stanza the short
   lines end on ..." The two rhyme words are bold and light where they
   stand, so a reader is led to the lines. He cannot see that they are
   a third stanza: they are the four lines after the space. If (a) is
   taken he can count to it, and this sentence stands. If not, I would
   write: "In the third stanza, the four lines after the space, the
   short lines end on ..." Six words more.

c. Rhyme, caption, seventh sentence: "The last two lines rhyme as a
   pair". It can be seen. It stands.

d. The third tab, caption, first sentence: "The second and third
   stanzas are built alike: ..."; then "In the second stanza ..." and
   "In the third ...". A reader sees no second and third stanza. What
   he does see is that the marks of this tab stand in two sets, one on
   each side of the space, and nowhere else. I would write: "The
   second and third stanzas, marked here, are built alike: ..." 118
   words to 120, the limit. The fifth and sixth sentences then stand
   (the last line of the second stanza, row 0.7, has no mark; the
   space after it still shows where that stanza ends). Words that also
   give the count ("the four lines on each side of the space") do not
   fit without a cut elsewhere in that caption, and I found nothing in
   it to cut.

e. Count, fifth remark, on [row 1.4, words 0-4]: "Eight syllables. The
   stanza is over." No space comes before this line, which stands in
   the middle of the second group, so nothing shows a stanza ending.
   The counts on this tab do show it. I would write: "Eight
   syllables. The stanzas of twelve and six are over."

f. English, fifth remark, on [row 1.3, words 2-3]: "The French stanza
   ends on the card’s own words ..." No space follows this line. Each
   of the three stanzas is one sentence (rows 0.3 and 0.7 end on a
   full stop and row 1.3 on the exclamation that closes the card’s
   words; the `stands` of the third tab speaks of "its two
   sentences"), and that a reader can see. I would write: "The French
   sentence ends on the card’s own words ..." This puts one true
   statement in the place of another, so it is for the lead and the
   examiner to pass.

g. English, caption, third sentence, and English, first remark: "in
   every stanza". A reader does not have to find a stanza to follow
   it. Both stand. (The grounds say each of the three stanzas; the
   last two lines name her instead, so "every stanza" is exact where
   "throughout" would not be.)

h. Count, second remark: "this stanza" is the form the remark has just
   described, twelve and then six, rhymed by turns. It stands. So
   does the measure line of the Count tab ("the last two lines have
   eight and twelve"), which can be seen.

i. One count of another kind. Count, caption, fifth sentence: "Carmen
   turns up death in four lines of her own." These four lines come
   before the passage (the third ground of the tab; its `stands` says
   "Carmen’s four lines after them"). They are not on the plate, and
   the first stanza on the plate is four lines long. The sentence
   after it ("What she sings next is in another measure ...") sets a
   reader right, so I left it. If the lead wants it firm at no cost in
   words (the caption is at 120): "Carmen has read death in four
   lines of her own." The tense puts the lines before the passage, and
   the verb is the one the `why` uses.

**In short.** If the French text is given a space after rows 0.3 and
1.3, so that three stanzas and a pair are seen, then a, b, d, e and f
all read right as they stand and I would change none of them. If the
text stays in two groups, a, d, e and f are the four to reword, and b
follows from a.

## 5. The mark of lines left out and the stage direction

No caption on either plate needs them in order to be followed.

**First passage.** The English leaves out one row between the verse
and the refrain (p:110.8, two words). What the captions and remarks
count holds on each side of that place:

- English caption, second sentence, "its first four lines": rows
  p:110.0 to p:110.3.
- The same sentence, "rhymes every second line": the rhymes fall on
  the second and fourth, sixth and eighth lines of the verse and on
  the second and fourth of the refrain (p:110.1 with 110.3, 110.5 with
  110.7, 110.10 with 110.12).
- First remark, "two lines on": p:110.1 to p:110.3, inside the verse.
- Sixth remark, "two lines up": p:110.12 to p:110.10, inside the
  refrain.

When the mark is shown nothing here has to change, so long as the mark
is not taken for a line of the song.

**Third passage.** The stage direction (three words, block 77 of the
English act) stands between p:76.11 and p:78.0: after the last line of
the third stanza and before the last two lines.

- No caption needs it. Two remarks will be easier to follow once it is
  shown, because it falls exactly where they say a stanza ends: the
  fifth remark of the Count tab and the fifth of the English tab (e
  and f above).
- One phrase should be read again once it is shown. The fifth remark
  of the English tab says the English has its word for death "in the
  next line" ([p:78.0, word 4]). With the direction printed between,
  the next line of English a reader sees is the direction. I would
  write: "in the line she sings next".

## 6. What recurs across the piece, with counts

The counts were made by script (`critic/counts.py`), on the reading as
found and as it is now.

**The faults mended, by kind (12 changes).**

- A reference that pointed two ways, or at something a reader had not
  been given: 3 (changes 1, 3, 9).
- A sentence or clause that said again what the caption had just
  shown, or announced what came next: 3 (changes 2, 4, 10).
- A word of the trade or of the workshop: 3 (changes 5, 6, 12).
- A phrase no one would write: 1 (change 8). A caption in the wrong
  order: 1 (change 7). A sentence that made the list read as
  everything that was found: 1 (change 11).

**Captions written up to the limit.** As found the twelve ran from 105
to 120 words: nine at 114 or more, three at exactly 120. Every `why`
runs from 35 to 40 words against a limit of 40, five of them at 40.
The sentences are not padded; they are close packed. What the limit
cost is room. Every mend had to be paid for with a cut, and two small
ones could not be paid for and were not made (section 4, i; section
7, 2). The twelve now run from 102 to 120, 1,365 words for 1,388, and
two are still at 120.

**Where Auden stands.** Nine of the twelve captions name him, each of
them once. As found his sentence was the last in four and the next to
last in five. After change 2 it is the last in five and the next to
last in four. The three captions without him are the first three tabs
of the third passage. The sentence is made a different way nearly
every time ("Auden says" twice, then "names", "counts", "quoted",
"said", "Auden’s example ... is", "Auden’s verb ... is", "Auden was
not ... for"), so it is not heard as a refrain. The place is fixed
because a caption goes from what is there to the reason, and in these
nine the reason is his. I moved none.

**Frames that come back, all left.**

- "a history of French verse": 5 (three captions, two remarks), with
  "a French grammar" once and "rhetoric calls" once. The books are
  named only at the foot. Each use carries a different fact.
- Littré: 4 times in the captions, 15 in the small notes (14 of the 15
  word notes, and the third English remark of the third passage), 8 in
  the `stands` lines. Thirteen of the fifteen word notes open on his
  name: "Littré:" 7, "Littré’s first sense is" 4, "Littré’s first
  sense:" 2. A word note is read by itself, when its word is touched,
  and has to say whose sense it gives. In the proof it reads as a
  drone; on the page it does not.
- The remarks of the three English tabs: 19 (6, 6 and 7). Thirteen end
  on a sentence that opens "The English" (3, 5, 5), and eight of those
  on "The English says" (0, 3, 5). Eight open on "The French". In the
  third passage five remarks of seven end "The English says ...". It
  is a table set in sentences, and each remark is read beside its own
  mark. If the lead hears a tic in the third passage, "has" for "says"
  in its second, third and seventh remarks would vary it with no
  change of sense.
- "French verse is measured by the number of syllables." opens both
  Count captions, word for word. Each tab has to stand alone.
- "by turns": 3 (first Count caption, third Rhyme caption, the second
  Count remark of the third passage). It is the plain word for the
  thing.
- "what would happen if": 2. The first Figure caption points forward
  with it to Act 2, and the Mood caption of the second passage takes
  it up. The echo is meant.
- Short sentences on which a caption turns: "What is named changes."
  (first English), "Three of its changes run one way." (second
  English), "They differ at the line ends." (third passage, third
  tab). Each says something that the sentences after it make good:
  what changes, which way, where. The fourth of the kind, "Four of its
  changes matter here.", did not, and is change 10.
- A meaning set between commas inside a list: 3 (first Figure, first
  sentence; second Word, second sentence; second Figure, third
  sentence). See section 7, 2.
- Colons: 20 in the twelve captions, as found and now, four of them in
  the Figure caption of the second passage. Semicolons: 7.

**Looked for and not found.** A dash inside a sentence of the page's
own (the eight in the `stands` lines join page numbers). A question. "We" in
the page's own voice (the eight are the libretto's words, named).
"Not X but Y", or "rather than". Any of the stock words: the checker
printed "no warnings" before my changes and after them. A sentence
that tells a reader what to feel.

## 7. Sentences I doubt and did not change

1. **First passage, Figure, last sentence: "Auden’s example of a
   one-sided romance is these two."** It is true as far as it goes,
   and the examiner passed it. In “Balaam and His Ass” (*The Dyer’s
   Hand*, p. 121; the scan `dh.txt`, lines 5808-5814) Auden says that
   a lifelong romantic idolatry of a real person can happen if the
   romance is on one side only, with one of the two playing the Cruel
   Fair, and he gives these two as his example. He does not say in so
   many words which of them is which. But the Cruel Fair is by its
   name the lady's part, and he names José first: the one who idolizes
   is José, and Carmen is the one who does not answer. The examiner's
   own note of the page reads it so (`exam.md`, line 95). The caption
   has just shown the other case. In the song she loves the one who does
   not love her, and José is the man who pays her no attention. A
   reader will take "one-sided" the way the caption has pointed it,
   which is the other way round from Auden's. The entry in the list
   does not settle it ("with one of the two playing the Cruel Fair").
   This is a claim about what Auden meant, so it is not mine to
   reword. For the lead and the examiner: either the caption says
   which side Auden means, if the scan is held to bear it, or the
   sentence is kept to what the song itself lays down, that whoever
   loves here is not loved in return.

2. **First passage, Figure, first sentence: "... two sentences of one
   build: *si*, if, a condition, a result."** The meaning of the
   French word stands between commas inside a list, so the eye counts
   four things before it sees three. The caption of the third tab of
   the third passage has the same build with "then" twice, and reads
   at once. This caption is at 120 words. The words I would use, at
   no cost: "... two sentences built alike: *si*, if, a condition,
   then a result." I left it because the mend gives up one good
   phrase to buy a word, and that is a trade for the lead. The same
   thing, milder, is in the Word caption of the second passage,
   second sentence (the word for "no" and its meaning before "officer
   to obey"). Left too.

3. **Third passage, Count, the sentence that is now the last: "The
   line of twelve has been the standard line of French tragedy since
   the sixteenth century."** It is a fact, and it is the reason of the
   tab. What it lets a reader conclude, that at the card of death her
   verse turns to the line of tragedy, is the page's own. The
   handbook's example of this stanza of twelve and six is a poem of
   consolation, as the second remark says. I think the page may go
   this far, since it only sets two facts side by side and both are
   grave. I name it because change 7 made it the last sentence, where
   it weighs more than it did. The old order is in
   `critic/reading.before.json`.

4. **Two doubts of the examiner's that touch the wording.** I read
   both and left them as they stand.
   - First passage, English, first sentence: "This English seems made
     for singing." The hedge is the examiner's, and the two sentences
     after it give what it rests on (the rhyme, the count).
   - Third passage, third tab, the last two sentences. "Held that"
     keeps the case against the run-over with the critics who made
     it. "Here it falls after ..." then applies it in the page's own
     voice, to a run-over those critics allowed. That is the
     examiner's doubt, already in `exam.md`, and I have nothing to add
     to it but the place.

5. **Nothing else.** No tab pays nothing: each of the twelve marks
   something on its passage and gives a reason for it. No sentence
   about Auden in a caption says more than its entry in the list or
   the view at the head says. I found no claim that reads as made up.

## 8. What on the page got in the way of reading (the words only)

**When the page says what the English is.** A reader meets the lines
of English under the first line of the first passage. On the first
and third passages, where they stand line under line, nothing names
them. On the second, where the two versions stand side by side, each
has its label over it. The words of the page take the matter up in
this order:

- the last tab of the first passage opens "This English seems made
  for singing";
- the last tab of the third passage opens "The English is from a
  libretto sold in New York about 1910";
- the list of sources and the first of the caveats, at the foot, say
  the rest.

So the sentence that says where the English comes from stands in the
last tab a reader comes to, and "This English" in the first asks him
to take on trust something he has not been told. The sentence belongs
in the first English caption, which has room for it (105 words): "This
English, from a libretto sold in New York about 1910, seems made for
singing." I did not move it. The fact stands on the fourth ground of
the third passage's English tab, and the grounds are not mine to move
or to copy. For the lead.

Everything else that got in my way was the kit's, and the artist has
reported it.

## 9. The list, the refusals, the checker

**More from Auden.** Eight entries as found, eight now. Nothing was
taken out, and nothing of mine is in `notes.md`. One sentence was cut
from one entry (change 11). Each entry was read against the rule:

- five are leaned on by a caption: “Vocation and Society”, the lecture
  on *Richard III*, “Balaam and His Ass”, “The Mythical Sex”, “Notes on
  Music and Opera”;
- one is the course of 1941: Pearce;
- two stand free, with no caption, ground or `stands` leaning on them,
  and both bear on the work: “Opera Addict”, where Carmen is one of
  the six characters in whom he finds willed feeling (will is the
  matter of the last tab of the third passage); and Ansen's record of
  what he thought of the opera, eighteen words long.

If the lead wants fewer than eight, these two are the ones to weigh. I
kept both: the first is the only entry that says what he thought her
character was made of, and the second is his judgment of the work in
his own plain terms.

**Refused.** Nothing was refused by the permission system.

**The picture tool** was run once (13:10 UTC, into `shots/critic/`).
The second run was not used.

**Left as working record.** The `checked` of the entry on “Opera
Addict” and one note of the examiner's in `open` still speak of the
sentence cut in change 11. They are not printed, and they are a record
of what was done, so I did not touch them. One more note in `open`
(line 1629 of `reading.json`, the examiner's) lists the tabs of the
third passage by their present names. No printed sentence names a
tab, so if the third tab is given another name that note is the only
place in the reading where the old one is left.

**The checker**, run last after `edits-5-caption-mark.json`, with
`--print` (kept as `critic/proof-after-print.txt`), and then
`node build/pieces.mjs carmen` and `node build/tools/prose.mjs carmen`
(4,568 words). Its last three lines:

```
no problems
no warnings
the printed notes are fit to print
```
