# Kierkegaard, *Fear and Trembling*: the poet's notes

Piece "kierkegaard", title "Abraham told four ways". Three plates, eleven
lenses. The checker ends: no problems, no warnings, the printed notes are
fit to print (run at 06:26 UTC on 2026-10-03, against the checker of 05:34
and the BRIEF, POET and EXAMINER of 05:39).

The text is prose in translation, so there is no beat or rhyme lens and
no scansion to defend. What follows is: the leads answered, Auden's view,
each plate (why this passage, what was rejected, where each fact was
read), what was looked for and not found, and what the examiner and the
artist should know.

In the last pass (06:05 to 06:26 UTC) these were opened again and
every fact the reading takes from them was read again: the Danish text
and its notes at tekster.kb.dk (the five *Held*, the six verdicts, the
four openings of the tellings and of the paragraphs on weaning, the
four pairs, the four *dog*, the phrase at p. 136, the frame's sentence
at p. 105, and the notes to p. 113 lines 29-31, p. 135 lines 7 and 9
and p. 136 line 5); the Online Etymology Dictionary under absurd,
chandler, greengrocer, maiden, paradox, redeem and refrain; *Silva
Rhetoricae* on paradox, anaphora and the encomium; the three pages of
the scans (*Forewords and Afterwords* pp. 168 and 192, *The Dyer's
Hand* p. 443); and the research notes on the 1947 passage, the 1944
review, Pearce, Mendelson and Kreyling.

Words are pointed at by block and word number in the hosted text
(`node build/tools/words.mjs kierkegaard p2 6 6` and the like). Nothing
of the work is copied out here.

## The three leads in pieces.json

1. *The story told four ways, each ending with the same turn about
   weaning.* Yes, and it is the first plate. One correction to the lead:
   the turn is not the same four times. The frame is the same (the
   opening clause, and a last sentence that begins with the same word),
   and what the mother does and who is called happy change each time.
   That change is what the second and third tabs show.
2. *Check that the four tellings are in Hollander's selection.* They
   are: kierkegaard/p2. Headings I to IV are blocks 3, 7, 10 and 14; the
   tellings are blocks 4-5, 8, 11-12 and 15-16; the paragraphs on weaning
   are blocks 6, 9, 13 and 17; the narrator's close is block 18.
3. *Auden's Kierkegaard lecture of October 1941 (Pearce).* It is reported
   under what else Auden said, with a caveat, and no plate is built on
   it. Reasons: what the research notes hold of Pearce's pages 129-30
   (C, appendix H21) does not name this book; its matter (the ethical,
   the aesthetic, the religious, the individual and the universal) is
   the matter of the three Problems, which Hollander leaves out
   altogether; and the scan of Pearce on this machine begins in the
   middle of p. 131, so the lecture could not be read at first hand.

## Auden's view

*Forewords and Afterwords*, p. 192 ("A Knight of Doleful Countenance",
1968), read in the scan, fa.txt lines 9180-9202; the page number stands
at the foot (line 9204). He quotes Bonhoeffer on accepting an earthly
happiness, says Kierkegaard could not truthfully have claimed as much
for himself, and says his portrait of the knight shows he knew that this
was a defect in him. Then the sentence quoted in the reading (19 words),
and his summary of Kierkegaard's verdict: such a man is the pattern for
everyone, and Kierkegaard cannot understand him.

- This is the one place found where Auden speaks of a passage of this
  book, so it leads the piece, and the third plate is that portrait.
- He does not name *Fear and Trembling* there. That the portrait is in
  this book is from the hosted text (p4, blocks 15-21). It is said so in
  `view.checked` and in `open`.
- The words he gives to Kierkegaard are his own summary. The book's
  narrator says he cannot understand Abraham (p4, block 13) and cannot
  make the movement of faith (p4, blocks 15 and 28); "Doleful
  Countenance" is Auden's (the essay's title), where the book has the
  knight of infinite resignation.
- The piece has exactly two quotations from copyrighted prose, the limit:
  this one, and the 1947 sentence on Abraham under `auden` (21 words).
  Everything else of Auden's is paraphrase. The drafts kept too close to
  his wording in places: the list of four styles, the likeness of the
  apostle to a postman, the answer to why Abraham was called, the 1947
  sentences on Abraham, and Pearce's record of the lecture. All were
  reworded, the last two in the final pass, in the captions, under
  `auden` and in the claims of the grounds. The test used: no run of
  five or more words shared with the scans or with what the research
  notes quote, outside the two declared quotations, titles, and names
  the book itself gives (the knight of faith, by virtue of the absurd,
  infinite resignation, which are in Hollander's text).

Other Auden, and where read:

| What | Source | Read where |
|---|---|---|
| Abraham as a hero of a third kind; gifts no greater than any man's; obeys and tells no one; set beside Agamemnon | Introduction to Baudelaire's *Intimate Journals* (1947), *Prose* vol. 2, pp. 309-10 | research notes C, section 15 and appendix H17s only; not in his text |
| Genius and apostle; Abraham called by God in person; why him cannot be answered in human terms; the apostle a plain messenger | *The Dyer's Hand*, p. 443 | the scan, dh.txt lines 20963-21003; running head "[ 443" at line 20970, "444 ]" at 21021 |
| Master of every style; does not know where to end | *Forewords and Afterwords*, p. 192 | the scan, fa.txt lines 9196-9202 |
| Neither poet nor philosopher: a preacher; Newman | *Forewords and Afterwords*, p. 168 ("Søren Kierkegaard", 1952) | the scan, fa.txt lines 8041-8049; the book's contents page and list of sources for the page and the date |
| The 1941 lecture | Pearce, pp. 129-31 | research notes C, appendix H21 only |
| A Christian should begin with this book | "A Preface to Kierkegaard" (1944), *Prose* vol. 2, pp. 213-14 | research notes C, appendix H17t only |
| The poems of 1940-41; Millar's notes | Mendelson pp. 476, 485; Kreyling pp. 39-40 | research notes C (section 15, line 1070) and A (line 403) only |

Also read and not used: *Forewords and Afterwords*, p. 177 (the commands
of God are neither an aesthetic fiat nor an ethical instruction, but a
call to choose what is asked at this moment). Abraham is not named
there, so it is not attached to this book.

## Whose craft

Hollander's English is shown. Each lens says whether a thing is
Kierkegaard's or the translator's, and every such statement was checked
against the Danish (*Søren Kierkegaards Skrifter*, vol. 4, with the notes
of vol. K4, both read at tekster.kb.dk: text at /text/sks-fb-txt-root,
notes at /text/sks-fb-kom-root). The edition's own colophon gives 1997
for vol. 4 and 1998 for K4. Its page anchors give the pages cited.

- Kierkegaard's: the fixed opening of the four paragraphs and the one
  word that begins each last sentence (pp. 108-11); the past tense with
  a negative in three of those sentences and the present without one in
  the fourth; the name held back to the last sentence of the ranking
  paragraph, and one wording of the verdict all six times (pp. 112-13);
  the four paired nouns (p. 113); the fourfold *dog* (p. 135).
- Hollander's: *he* and *his child* (the Danish has the one who, the
  child); *his mother* three times (the Danish has the mother each
  time); *green-grocer*; *purchases his leisure*; *hopes* in the plural
  and *expression* for *Form*; four different wordings of the verdict;
  the division of the speech into eighteen paragraphs; small cuts.

No Danish is shown on the page. `original.mjs list` has no Danish text
and D_texts.md lists none, and the reader knows no Danish, so the Danish
facts stand in glosses and notes, each with the dictionary or the
edition's note behind it.

## Plate 1, "weaning": kierkegaard/p2, blocks 6, 9, 13 and 17

**Why this passage.** It is the place in the book where a device can be
seen without any knowledge of philosophy: four paragraphs with one frame.
Each is shown by its opening and its last sentence (main rows
6.0[0-11], 9.0[0-26], 13.0[0-12], 17.0[0-17]; pair rows 6.0[59-69],
9.0[27-38], 13.0[61-76], 17.0[18-26]): 118 words. The second and fourth
paragraphs are shown whole; 47 words are left out of the first and 48 of
the third. A caveat says so.

**The layout.** A row id can stand only once among a plate's rows, so a
paragraph's opening and its last sentence cannot both be main rows. The
last sentences are therefore the `pair`, and `"beside": true` sets the
two as two blocks under their labels ("How each paragraph opens", "How
each ends"). The other way, line under line, would set the last
sentences small and italic like a translation, with no labels. POET.md
allows `beside` where the second is not a translation of the first.

**Rejected.** (a) All four paragraphs whole: 213 words, too long, and the
frame is harder to see. (b) Only the second and fourth, which are short:
the frame needs all four. (c) Two plates of two paragraphs. (d) A plate
on one whole telling: nothing to mark but narrative. (e) The opening
sentences of the four tellings side by side (they share six words): put
in the Tellings tab as a fact instead.

**Lenses.**

1. *Refrain* (figure, align). Counted on the proof: words 0-6 are the
   same in blocks 6, 13 and 17; block 9 has the same seven with three
   more inside (words 3-5). Each last sentence begins with the same
   word. The term: Online Etymology Dictionary, refrain (noun), and
   Baum, chapter 5 and glossary. Baum's refrain is a thing of stanzas;
   he says on the same page that repetition is used in prose too. The
   caption therefore says "in a song" and leans on the subtitle
   (*Dialektisk Lyrik*, title page, vol. 4 p. 99; Hollander's own
   introduction to the Selections gives it as "Dialectic Lyrics", line
   597 of the Gutenberg file). An examiner who thinks "refrain" too
   loose for prose could rename the figure "repetition"; anaphora would
   be wrong, since the four units are not successive. The reason given
   (the frame sets the four side by side as ways of thinking about one
   event) stands on block 18, where the narrator says so.
2. *Turn* (compare). The ties run from a word of each opening to the
   same word in its last sentence. Tenses checked in the Danish. The
   one inference of the piece is here, and it is marked with "appear":
   that the first and third last sentences call happy someone better
   off than the Abraham of the telling just before. It stands on the
   past tense and on blocks 5 and 12. Nothing is claimed for the second
   (it calls a child happy) or the fourth. The Danish behind "worse
   means" is a comparative of the word for terrible; it could not be
   checked in a dictionary and the caption says nothing of it.
   The caption does not say the paragraphs are "in the present". The
   English of the second has a will of habit, and the third has two
   past forms inside a relative clause, in the Danish too (block 13;
   vol. 4, p. 110). It says they tell what a mother does as a rule,
   which every one of their main clauses bears out.
3. *Tellings* (shape). Facts: one row for Genesis 22 and one for each
   telling. Counts by the site's tokenizer: tellings 343, 149, 191
   (59 + 132) and 145 (94 + 51) words; paragraphs on weaning 70, 39, 77
   and 27. Sarah: named in blocks 5, 8, 11, 15, 16; not in Genesis 22
   (King James Bible searched; K4 note to p. 107 line 7 says the same
   and derives her watching from the Book of Judith). Only the first
   telling has quoted speech; only the second has the ram; none has the
   angel or a blessing of Abraham. Genesis 22:3 for the early morning.
   The reason the caption gives is the frame's own: block 0 describes
   the man (his admiration grows with his years and the story grows
   less clear to him, in a four-word phrase the caption names) and
   block 18 says the tellings are how he thought about the event. An
   earlier draft ended on the contrast with the Abraham of the speech
   that follows; that was a second observation where a reason was
   wanted, and it was cut.
4. *Words* (word). *Held*: Ferrall and Repp (1845), p. 124, read on the
   page image (good luck, fortune, success). Five in the Danish book,
   counted on the whole text: four here and one at p. 133, which is
   Hollander's "Blessed" (p4, block 15). The adverb for luckily also
   occurs and is not counted. *Den, der*: Ferrall and Repp p. 57. The
   word for blessed in Luke 23:29 in the Danish New Testament of 1819
   is quoted in the K4 note to p. 117 line 21. Isaac's weaning: Genesis
   21:8. No source known for the blackened breast: K4 note to p. 108
   line 5. Maiden: Online Etymology Dictionary. What the word does to
   the lines is said in one sentence: each last sentence calls someone
   lucky. Nothing is said about whether it also blesses.

   Not said, though tempting: Genesis 21:8 has the child grow and be
   weaned, and Kierkegaard's second paragraph is the one that adds
   that the child has grown. The edition makes no such link, so the
   caption does not either; the note under the word gives the verse.

## Plate 2, "greater": kierkegaard/p3, block 2, words 206-311

**Why this passage.** The last two sentences of the paragraph that ranks
every kind of greatness: 106 words. They are built alike, and the second
puts the name where the first had an unnamed man. It is the first time
the speech says the name (word 272 of block 2, after 250 + 227 + 272 =
749 words), and it ends in four paradoxes.

**Rejected.** The whole ranking paragraph (312 words). The address to
Abraham that closes the speech (block 17): a good apostrophe, and it is
cited in two tabs, but the name and the paradoxes are the stronger
thing to see.

**Lenses.**

1. *Build* (sentence). Three tags. The verdict is given six times in the
   paragraph (block 2, words 59-63, 102-107, 146-151, 174-178, 232-237,
   273-277), five times to an unnamed man. Hollander varies the wording;
   the Danish has one wording all six times (pp. 112-13). Word 278 is
   two words joined by a dash: the turn ends at 278.1 and the first of
   the four "how" spans begins at 278.2, so the four are marked alike.
2. *Paradox* (figure, pair). Tag order is defect, gift, heroes, so that
   the kit joins each defect to its gift and draws the defects in red.
   Definition: *Silva Rhetoricae*, paradox (its own example is the
   saying about losing one's life), and the Online Etymology Dictionary.
   The encomium's list of excellences: *Silva Rhetoricae*,
   Progymnasmata, Encomium. Auden's sentence is reported, not equated
   with Kierkegaard's.
3. *Sources* (word). K4 notes to p. 113, lines 29, 30 and 31: the first
   "presumably" 2 Corinthians 12:1-10, the second an allusion to
   1 Corinthians 3:18-19 with no hedge, the fourth "perhaps" John 12:25;
   no note on the third. K4's note to p. 119 line 9 (the divine madness
   of the speech's close) thinks of Plato's *Phaedrus*. The verses were
   read in the King James Bible (Project Gutenberg no. 10).
4. *Speech* (shape). Eighteen rows, one for each of Hollander's
   paragraphs: words 250, 227, 312, 221, 129, 143, 145, 217, 15, 107,
   434, 42, 160, 39, 400, 95, 153, 286 (3,375); the name 0, 0, 1, 2, 2,
   2, 2, 5, 1, 2, 12, 1, 3, 2, 8, 2, 3, 3 (51, possessives included).
   In the Danish the speech is about 2,995 words, the name comes 56
   times, and first after 659 words; Hollander splits Kierkegaard's
   first paragraph in two and cuts a little. So the counts are of
   Hollander's text, and a caveat says so. The caption says that the
   comparison "comes early" and gives its effect (the name arrives at
   the top of a ranking already built); it does not say Kierkegaard
   moved it, which would claim he worked from the school pattern. The
   close of the speech (the speaker asks Abraham's pardon) is in the
   facts and no longer in the caption.

## Plate 3, "window": kierkegaard/p4, block 21, words 58-160

**Why this passage.** It is the end of the portrait Auden points to: 103
words in which what can be seen of the man and what he does are joined
by one small word said four times.

**Rejected.** The start of the portrait (block 17): lively, with less to
mark. The dish of lamb (block 19): one joke. The whole of block 21 (180
words). A figure lens on the similes was drafted and dropped: the Day tab
counts the likenesses over the whole portrait and says more.

**Lenses.**

1. *Yet* (sentence). Four tags: yet, seen, unseen, aside. The word comes
   at 103, 130, 131 and 147 (and once more at word 41 of the block,
   before the passage). Words 131 and 146 are each two words joined by
   a dash, and the spans divide them: the second "yet" span ends at
   131.1, the aside runs from 131.2 to 146.1, and the last "yet" span
   begins at 146.2. The reason (what
   cannot be seen has to be stated) is an inference from blocks 17-19,
   where the narrator says nothing betrays the man; it is listed as
   such in the grounds.
2. *Words* (word). *Spekhøker*: K4 note to p. 135 line 7; Ferrall and
   Repp p. 298 (chandler, cheesemonger), on the page image.
   Greengrocer and chandler: Online Etymology Dictionary. The phrase
   from Ephesians: the Danish at p. 135 line 9, K4's note to it (which
   quotes the New Testament of 1819 and compares Colossians 4:5),
   Ferrall and Repp p. 28 for the adjective, King James Bible for
   Ephesians 5:16, and the Online Etymology Dictionary under redeem.
   The absurd: p4, block 27. The movement of infinity: the rest of
   block 21 and blocks 15 and 26. *The sublime in the pedestrian*: vol.
   4, p. 136 line 5, in the comparison with a dancer that follows the
   window in the Danish and that Hollander leaves out (his block 21
   ends on marks of omission and block 22 opens with words that answer
   the end of the omitted lines). K4's note to that line glosses the
   phrase as the exalted in the prosaic. The English phrase in the
   caption is a word-for-word rendering of five Danish words, not a
   quotation from Lowrie or anyone else; a caveat says so.
3. *Day* (shape). Five rows, one for each paragraph of the portrait
   (blocks 17-21: 130, 213, 231, 79, 180 words). Twelve likenesses,
   counted by hand and listed in the facts. The times of day are the
   text's own; K4's note to p. 134 line 19 calls the walk a Sunday
   outing to the Deer Park, and its notes on the omnibuses, the coast
   road and the East Gate place it in Copenhagen (hence "the Copenhagen
   of his day" in `about`).

## Dictionary pages

Ferrall and Repp, *A Danish-English Dictionary* (Copenhagen: Gyldendal,
1845), at archive.org (adanishenglishd00reppgoog; the image of printed
page n is leaf n + 39). Read on the page image: pp. 28, 57, 124, 298.
Also read and not used: pp. 125, 182 (the word for a speech of praise),
299, 306 (the title of the Preparation in Danish means mood, or the
tuning of an instrument). The OCR of the book was used only to find
pages.

## Looked for and not found

- Any sentence of Auden's that names this book and a passage of it
  together. The nearest are p. 192 (the portrait, book not named) and
  the 1944 review (the book, no passage).
- The 1947 and 1944 passages in Auden's own text, and Pearce pp. 129-30
  at first hand.
- Which translation the class read. Research notes D: Lowrie's was
  registered for copyright on 10 December 1941, after the course began;
  Payne's (Oxford, 1939) existed. Neither was seen.
- A source for the mother who blackens her breast (the edition has
  none).
- A note in the edition on the third paradox (hope and madness).
- The Danish comparative behind "worse means" in the 1845 dictionary.
- ordnet.dk, Perseus and sks.dk could not be reached; tekster.kb.dk,
  archive.org, gutenberg.org, etymonline.com and rhetoric.byu.edu could.

Read in the edition and left out for lack of room: the K4 note on the
odd word in the third section's title (properly a coughing up from the
chest; figuratively, pouring out one's heart).

Noticed and not used: Hollander has Abraham resolve, in the first
telling, to conceal from Isaac where they are going; the Danish has him
say he will not conceal it (vol. 4, p. 107). The reading's account of
that telling does not lean on the sentence.

## For the examiner

- The inference in the Turn tab is the place to press. It is marked
  "appear" in the caption and the why, named in `stands` and in a caveat.
- "Each ends in a loss" (Tellings) is a summary of four endings, each of
  which is in the facts. "He lies" (of the first telling) rests on
  block 5: Abraham says the deed is his own wish, and then thanks God
  that the boy thinks him inhuman and keeps his faith.
- "Twelve" (Day) depends on what counts as a likeness; the list is in
  the facts under `counted`.
- "Only at the window" (Day): blocks 19 and 20 show the man's faith at
  work on a dish and a building, and say what he believes; they do not
  say what he does at every moment.
- The view's last sentence is Auden's account of what Kierkegaard says,
  not Hollander's text.
- The lecture under `auden` follows the research notes' record of
  Pearce (C, appendix H21). It says only what those snippets hold: the
  aesthetic and the ethical attitudes, that Kierkegaard treats these
  categories in full, the three-line scheme, and religion as the place
  where the other two meet. "Blackboard" is the researcher's label and
  is not used.
- The line on the poems of 1940-41 follows the research notes' report
  of Mendelson. It says the first poem draws on Kierkegaard's Abraham;
  it does not say Abraham is named in the poem, which was not seen.

## For the artist

- Plate 1 is `beside`. Rows that stop short of the paragraph's end or
  start after its beginning carry marks of omission. For paragraphs two
  and four nothing lies between the two parts.
- In the Refrain tab the marks on the last sentences begin at the second
  word on purpose. A mark on the first word of each would be given a
  spine in the margin of that block, and the spine would run through
  the marks of omission. The marks there are joined only where two of
  them stand on neighboring lines, so they may look uneven; `draw`
  could be read again once it is seen.
- A caption word in bold lights every place it stands on the plate:
  *mother* lights six words, *he who* (in italics, Build) seven.
- The three shape tabs are tables until drawn. Each row has a `read`
  address. Speech wants a bar for each paragraph with the count of the
  name; Day wants the five stations of the portrait in order; Tellings
  is a comparison of five short stories and may be best left close to a
  table.

## Added by the examiner, 2026-10-03

The examiner's record is `exam.md`. Two things found and kept out of
the list under the passages, because they only use the book's term in
passing or are a biographer's account of a later time:

- "Genius & Apostle," *The Dyer's Hand* (1962), p. 454 (dh.txt, lines
  21573-21576; the head of p. 454 stands at line 21535): at the end of
  the part of that essay about Don Quixote, Auden says that Don
  Quixote, for all his epic hero's talk, turns out to be the Knight of
  Faith, with a kingdom that is no earthly one. He does not name
  Kierkegaard's book there.
- Edward Mendelson, *Early Auden, Later Auden* (2017), p. 602: by his
  account Kierkegaard's knight, who has a shopkeeper's look, gave Auden
  in his Italian years the thought that ordinary life can be a sign of
  the absolute.

The poet's line above on the poems of 1940-41 is now checked against
Mendelson's own pages (459-60, 476, 485); see `exam.md`.

One thing listed above as looked for and not found was found: the
Danish comparative behind "worse means" is in Ferrall and Repp (1845)
on p. 86, leaf n125 of the scan (the dictionary sorts æ with ae):
Forfærde, to terrify, appal; forfærdelig, terrific, appalling,
frightful, horrific, dreadful. The first remark of the Turn tab now
gives the Danish sense.

Two more things from the Danish, for whoever works on this piece next:

- The same comparative stands twice in the Preparation: in the last
  sentence of the first paragraph on weaning (p. 108, Hollander's
  "worse means") and as the last word of the third telling (p. 110),
  where Hollander has "more terrible" (kierkegaard/p2, block 12). He
  has "more terribly" for it in the speech too (kierkegaard/p3, block
  10; p. 115). The page does not use the echo. It is in the working
  record under the Turn tab.
- How much of the book Hollander gives. His own last footnote, in the
  Gutenberg text, says about one third. A count says about a quarter:
  the copy printed here has 11,785 words, the Danish book about 41,000
  (vol. 4, pp. 99-210), and his English runs to about 1.15 words for
  each Danish word where he cuts nothing. He gives about two fifths of
  the preface, the Preparation, the speech but for one paragraph cut
  short (block 11) and perhaps a phrase or two elsewhere, and a little
  over half of the Preliminary Expectoration. The first source line
  and the first caveat now say a quarter and give his figure beside
  it.

## Set by the lead from the artist's proposals (3 October 2026, 12:12 UTC)

Both keys the artist set out in art.md, section 3, are now in the facts
of reading.json. Each is a count the caption already gives, and the
artist counted each again by a script over the hosted text.

- Speech (`greater`), the row of paragraph 3: `"words before the
  name": 749`. The drawing now tints the speech as far as the first
  naming and prints the caption's figure over it.
- Tellings (`weaning`), each of the four telling rows: `"opening words
  in common": 6`. Each bar now sets its first six words apart, and the
  key says what the small block is.

Checker after: no problems, no warnings, fit to print. Both drawings
seen in the browser at 1280, Speech also at 390.

## Taken out of the list of what Auden said

One entry, the sixth of nine, taken out by the critic on 3 October 2026
(12:36 UTC). It is true and checked, and is kept here whole in case it
is wanted. The reason is in `critic.md`, section 3. With it gone the
list has eight entries, and the line of `sources` for the volume of
*Prose* names the introduction of 1947 and pp. 309–10 only.

- `says`: Reviewing a translation of *Either/Or* in 1944, Auden advised a Christian reader to begin Kierkegaard with this book or with *Training in Christianity*.
- `source`: “A Preface to Kierkegaard,” *The New Republic*, 15 May 1944, in *The Complete Works of W. H. Auden: Prose*, vol. 2, 1939–1948, edited by Edward Mendelson (2002), pp. 213–14
- `checked`: not seen in a full copy: quoted in research notes C, section 15 and appendix H17t (VERIFIED (snippet)). The examiner found the sentence on 2026-10-03 in full-text search snippets of the volume at archive.org (item prosetravelbooks0000aude). The venue and date, which the research notes gave from memory, are now checked: a snippet of the volume prints 'The New Republic, 15 May 1944' at the end of the review, and Mendelson's Early Auden, Later Auden (2017) cites the review so in a note, with Prose II 214 for another sentence of it. The volume's textual notes begin this review at page 213 (snippet)
- The line of `sources` as it stood with this entry: W. H. Auden, introduction to Charles Baudelaire, *Intimate Journals* (1947), and “A Preface to Kierkegaard” (*The New Republic*, 15 May 1944), in *The Complete Works of W. H. Auden: Prose*, vol. 2, 1939–1948, edited by Edward Mendelson (2002), pp. 309–10 and 213–14. Not seen in full.

## Taken out of the list by the finisher (3 October 2026, 13:52 UTC)

The entry in the section above, the sentence from the review of 1944,
is back in the list word for word (it is now `auden[3]`), and the line
of `sources` for the volume of *Prose* names the review again, as the
last line of that section gives it. Why it went back is in the
finisher's section below, under 16.

The list may hold eight, so one entry went out in its place: the
second of the nine, on the genius and the apostle, from *The Dyer's
Hand*. It is true and checked (the examiner read p. 443 in the scan,
and the critic and the finisher read it again), and it is kept here
whole in case it is wanted. Why this one: it is not about this book
and says so; its matter (why Abraham was called, and that it is no
matter of gifts) is close to the first entry's; and nothing leans on
it now, since the `stands` of Paradox lost the clause that cited it
when that caption's Auden sentence was cut. The critic had named it
as the one to look at (`critic.md`, section 3, "The eight that
stay"). With it gone the list has eight entries again.

- `says`: In an essay on Ibsen, Auden separates the genius, who is called by a gift he was born with, from the apostle, whose call comes straight from God, as Abraham was told to leave his country and Matthew to follow. Why these two were called, and not others, cannot be answered in human terms, he writes, and being an apostle is not a matter of talent or temperament. The apostle is a plain messenger, he says, like a postman. He is not writing about this book there.
- `source`: “Genius & Apostle,” in *The Dyer’s Hand* (1962), p. 443
- `checked`: read in the scan of The Dyer's Hand, research/auden/dh.txt, lines 20963-21003, on 2026-10-03; the running head '[ 443' stands at the top of this page (line 20970) and '444 ]' at the top of the next (line 21021). Read again by the examiner, who kept the entry because it bears on the second passage (why Abraham, and that it is no matter of talent). Later in the same essay, on p. 454 (lines 21573-21576), Auden calls Don Quixote the Knight of Faith; that passing use of the book's term is recorded in notes.md (the examiner's section at its end) and in exam.md, not in this list
- The line of `sources` that went with it: W. H. Auden, *The Dyer’s Hand and Other Essays* (1962): “Genius & Apostle,” p. 443.

## The finisher's changes after the critic (3 October 2026, 13:53 UTC)

Read first: `remake/BRIEF.md`, `FINISHER.md`, `CRITIC.md`,
`EXAMINER.md` and `LAST-PASS.md`; then `critic.md`, `art.md`,
`exam.md`, `reading.json` with its `open` list, the end of this file,
the script, and the page's prose as `prose.mjs` prints it. The reading
as I found it (13:13 UTC) is `finisher/before.json`; the seven lists of
exact edits are `finisher/edits-1-...json` to `edits-7-...json`. The
script was not changed (`finisher/before.js` is identical to it).

Scans opened in this run: *Forewords and Afterwords* (`fa.txt`: p. 192,
lines 9164-9204; p. 168, lines 8037-8049; pp. 17-19), *The Dyer's Hand*
(`dh.txt`: pp. 442-444, lines 20925-21025), *The Enchafèd Flood*
(`ef.txt`: pp. 87-104), and Pearce (`pearce.txt`, searched only). None
of the four holds the introduction of 1947 or the review of 1944; I
searched them by words and with `runs.py`.

### Every change

The head of the page

1. `where`. Wrong: nothing at the head said whose English this is
   (`critic.md`, section 5, point 1). Now it ends "in the English of
   L. M. Hollander (1923)", in the form the piece "castle" uses.
   Ground: the hosted text's own record,
   `site/data/texts/kierkegaard/index.json` (`translator`: L. M.
   Hollander; `year`: 1923). The first line of `sources` agrees.
2. `view.says`, first sentence (D9). Wrong: it named Bonhoeffer and did
   not say who he is. Now: "Auden cites Bonhoeffer, who died a
   martyr: ...". Ground: Auden's own page, which says so of him where
   it brings him in: *Forewords and Afterwords*, p. 192 (`fa.txt`,
   lines 9164-9166). The scan names him nowhere else, so the page says
   no more of him than that.
3. `view.says`, second sentence. Wrong: six words in a row were
   Auden's (the sweep found them; `fa.txt`, line 9189). Now: "his
   Knight of Faith, who is drawn in this book". Nothing is added: "in
   this book" stood there before, and `view.checked` records that it is
   the page speaking. 72 words.

Passage 1, four paragraphs on weaning

4. Turn, caption (D1). Wrong: its sixth sentence said that the first
   and third of the last sentences appear to look back at the Abraham
   of the telling before. That is a reading of this page's own. No
   critic and no word of Auden's stands behind it, and it cannot be
   seen in the lines the tab shows, since the tellings are not among
   them. Cut, with the two clauses on what Abraham does in the first
   and third tellings, which served only it. The caption now stops at
   what the lines show: after the three past tenses it says that each
   of the three sentences says what someone was spared, and names the
   three things. Ground: the last sentences as the tab shows them
   (rows p:6.0, words 59-69; p:9.0, words 27-38; p:13.0, words 61-76,
   in the checker's proof); the second and third remarks beside the
   lines already said it of their own sentences. 80 words (110
   before). With it: `why` (35 words); the five grounds for the
   inference gave way to one for the new clause (they are whole in
   `finisher/before.json`, lines 244-268); `stands` lost the sentence
   that called it an inference and its two links to the tellings; the
   fourth caveat lost its first sentence.
5. Tellings, caption (D6, D7). Wrong: the sentence on how Genesis ends
   was given as Auden's, from the passage of 1947, which was read only
   in snippets, was written about Baudelaire, and does not name this
   book. Now the page says it itself: in Genesis 22 the son is spared
   and Abraham is blessed. Ground: the first row of the tab's own
   facts (the angel, the ram, the blessing), which the examiner read
   against Genesis 22:11-19 verse by verse (`exam.md`, section 6). No
   Bible is on this machine and I did not open the chapter again: see
   "For the lead". The `auden` ground and the Auden sentence of
   `stands` went. 95 words.
6. Tellings, the fact under "the end" of the second telling
   (`critic.md`, section 6). Wrong: its middle clause ended on the
   translation's own antique turn. Now: "... and is never happy
   again; ...", the critic's wording. Ground: the hosted text, p2,
   block 8, its close (the clause on going home and the three
   sentences after it), read in this run.

Passage 2, "Greater than all"

7. Paradox, caption (D6, D7). Cut: the last sentence, Auden's of 1947
   (Abraham no hero as poetry counts one). The caption reaches its
   reason without it: the sentence shown makes four paradoxes, and the
   book later uses the word of Abraham's life. With it: the last
   clause of `why`, the `auden` ground, and the sentence of `stands`
   that cited the introduction and *The Dyer's Hand*, p. 443. 81
   words.
8. Sources, caption (D7; D4 bears on it). Cut: the last sentence,
   Auden's of 1952 (Kierkegaard a preacher). It is a judgment of the
   man's work at large, hung on one sentence of his, and the list
   keeps it in full (third entry). I read the page it reports
   (`fa.txt`, lines 8037-8049, p. 168). The caption now closes on its
   own conclusion, the sentence D4 doubted; it is now the caption's
   reason. With it: the last clause of `why`, the `auden` ground, the
   last sentence of `stands`. 92 words.
9. Speech, the fact `here` of paragraph 3 (`critic.md`, section 6).
   Wrong: "the passage of this page", on a page with three. Now: "this
   passage is its close". Counted in this run on the hosted text: p3,
   block 2, has 312 words, and the passage is its words 206-311.

Passage 3, "The man at the window"

10. Yet, caption, last sentence. Kept, and it now says what Auden was
    summing up: "Auden's summary of this portrait keeps both
    halves, ...". Ground: `fa.txt`, lines 9188-9195 (p. 192): his
    sentence is about Kierkegaard's portrait of the Knight of Faith,
    and the man at the window is that portrait's man (the hosted text
    gives him the name at p4, block 16, word 113). This is now the one
    caption that cites Auden: the place where the passage meets the
    view at the head. 113 words.
11. Words, caption (D5). Cut: the last sentence, Auden's of 1968 on
    Kierkegaard's styles, said of all his writing and not of this
    sentence; the list keeps it (second entry). Its ground gave way to
    one for a thing the tab still says, in the note on the tradesman:
    Auden's word for him (`fa.txt`, lines 9191-9193). The last
    sentence of `stands` follows suit. 93 words.
12. Day, caption (D6). Cut: the sentence of 1947 (to look at, a man
    like any other). The last sentence has its "he" again, as before
    the critic moved the Auden sentence in front of it; "he" is the
    narrator of the two sentences before. The `auden` ground and the
    Auden sentence of `stands` went. 85 words.
13. Day, the heading `what`. Wrong: six words in a row were Auden's
    (the sweep; `fa.txt`, line 9189). Now it opens "the knight of
    faith's portrait in ...". No word added.
14. Day, the fact `here` (`critic.md`, section 6). Now: "this
    passage".

The list of what Auden said

15. First entry (D8). Wrong: it said the Old Testament has a hero "of
    a third kind" and never said what the first two are; and it did
    not say what Auden was writing. I could not open the first two:
    the four scans do not hold the passage, and what the research
    notes hold of this page (C, H17s, line 1266) begins at the third.
    So the count is gone and the sentence says less: the Old Testament
    "has its own idea of the hero", which orthodox Christianity works
    out more consciously. It now opens by saying that this is his
    introduction to Baudelaire's *Intimate Journals*. Ground: the
    extract H17s, as the examiner read it in snippets; nothing new is
    claimed. Tested with `runs.py` against the four scans and against
    the extract: no run of five. 106 words. `checked` says what was
    searched and what the nearest things in the scans are (*The
    Enchafèd Flood*, pp. 90-95; *Forewords and Afterwords*, p. 19).
16. The entry of 1944, back (`critic.md`, section 3). It went back
    word for word, as the fourth entry. Why: it is the one place found
    where Auden names this book in print, and it says something of it:
    which reader should begin with it. That is what the list is for.
    I read the sentence as the research notes give it (C, H17t, line
    1269); the scans do not hold the review, and `checked` says so.
17. The entry on the genius and the apostle, out. The list would have
    stood at nine. The section above this one holds it whole, with
    the reason. Its line of `sources` went with it.
18. The entry on Millar now stands after the entry on Pearce's notes
    (`critic.md`, section 5, point 3), so that the two records of the
    class of 1941 are together. Not a word of it changed. The entry on
    two poems still follows the entry on "The Hero".

Sources, caveats, the working notes

19. `sources`: the line for *The Dyer's Hand* is gone (nothing printed
    cites it now); the line for the volume of *Prose* names the review
    of 1944 again, with pp. 213–14, as before the critic's item 31.
20. Second caveat: it now covers the sentence of 1944 as well as those
    of 1947 (both read only in snippets). 50 words.
21. `open`: items 0, 7 and 9 brought up to date in square brackets
    (where the review of 1944 now stands; "twelve figures"; the three
    shape tabs are drawn; the lead's two keys of 12:12), and a new
    last item sums up this run.

### Left as they are, and why

- D2, Turn, last sentence (the fourth stays in the present). It is
  what the lines show. To give it a reason would be to make one up.
- D3, Build and Speech close on one finding. Twice, on two tabs that
  each pay their way; the critic says the same.
- D4, Sources, the sentence that begins "So". With the Auden sentence
  gone it is the caption's close and its reason.
- D9, second part: the page's voice inside the paraphrase of Auden
  ("in this book"). Auden's page does not name the book, and a reader
  must be told that the portrait is in it. `view.checked` records it.
- D10, the three small things the critic weighed. Each plainer wording
  would say more than the passage or the sources do.
- The words "the translator, L. M." in the Words caption of the first
  passage (the critic's item 10), which could come out now that the
  head names him. Left in: the tabs open in any order, and the line at
  the head is small.
- The critic's added words (FINISHER.md, rule 9), tested against the
  hosted text and kept. Item 2: p2, block 18, its first sentence. Item
  15: p3, block 2, where the verdict falls at words 59-63, 102-107,
  146-151, 174-178 and 232-237, each time of an unnamed one, and the
  name is word 272; the block ends where the passage ends. Item 20:
  the hosted text gives the man the name at p4, block 16, word 113;
  the Danish sentence is not on this machine and rests on the
  examiner's and the critic's reading of it. Item 26 was in the entry
  now taken out.
- The four runs of the last sweep (below).

The critic noted that ten captions of eleven lay within ten words of
each other. No sentence was cut for that. They now run 113, 80, 95,
93, 113, 81, 92, 108, 113, 93 and 85 words.

### For the lead

1. Two entries of the list still rest on search snippets that no one
   has read in a full copy: the first, with its quotation (the
   introduction of 1947; *Prose*, vol. 2, pp. 309–10), and the fourth
   (the review of 1944; pp. 213–14). The four scans hold neither. The
   second caveat says so, and no caption leans on either now. Whoever
   has the volume should read the two pages against the two entries.
2. The Tellings caption now says in the page's own voice how Genesis
   22 ends. It restates the first row of the tab's facts, which the
   examiner read against the chapter; I could not open a Bible here.
   Verses 11-19 settle it.
3. The first entry of the list no longer counts the hero's kinds. If
   the count is wanted back, the first two must be read in the
   introduction itself. Research notes C, H5 (lines 1107-1114), hold
   from snippets an earlier sentence of the same introduction that
   counts three ideas of the individual, two Greek and one Jewish; I
   could not open it and did not use it.
4. The script, lines 163 and 294: "as long as its words", in the keys
   of Tellings and Speech, reads first as "provided that"
   (`critic.md`, section 6, which proposes other words). Not changed:
   other pieces' scripts share the phrase, so it is one decision for
   the site.
5. "Preliminary Expectoration" stands under the title, beside the
   heading of the third passage and in one caption, and nothing says
   what the second word means there (`critic.md`, section 5, point 2).
   A ground exists: the Danish edition's note on the word, which the
   poet read and recorded above, under "Looked for and not found". I
   could not open the edition here, `about` has two words to spare,
   and the line beside the heading is not mine to change.
6. If the lead wants Auden back on the Sources tab, the sentence that
   stood there is in `finisher/before.json`; change 8 says why it
   went.
7. The kit's and the checker's, not this piece's: the definition of a
   figure printed twice on a figure tab (`critic.md`, section 5,
   point 4); verse ranges with a hyphen beside the passages and the
   longer stroke in the notes (point 6); the faults the artist lists
   in `art.md` (K1 to K8).

### The last sweep

`prose.mjs` (4,384 words), then `runs-sweep.py` with the four scans,
`--only kierkegaard --show`: four runs of five words, none longer.
One in the Speech caption (its words 101-105; `fa.txt`) and one in the
second entry of the list (its words 54-58; `ef.txt`, another book) are
runs of small words. Two are one phrase in the entry on Pearce's notes
(its words 33-37; `dh.txt` and `fa.txt`): Kierkegaard's own pair of
terms. All four stand.

### The checker and the pictures

The checker's last three lines (13:46 UTC, after the last edit; its
whole printout is `finisher/checker-last.txt`):

    no problems
    no warnings
    the printed notes are fit to print

Built at 13:39 UTC, after the last edit. Pictures, all in
`shots/finisher/`, every one opened and looked at, at 1280 and at 390:
the four tabs of the second passage (Build shows the critic's item
15, Sources its item 18, with changes 7 to 9); the three tabs of the
third passage (Words shows the critic's item 20, with changes 10 to
14); Turn (the critic's item 32, change 4) and Tellings (changes 5
and 6) of the first passage; and the whole page in slices, five at
1280 and eight at 390 (the head, the list, the sources). The tool
reported nothing on any run. The notes at the foot and the caveats
are folded shut in the pictures; I read them in the checker's proof
and in `reading.json`. Refrain and the Words tab of the first passage
were not changed and not photographed again.

Nothing was refused by the permission system.

## The lead after the finisher (3 October, 15:11 UTC)

Read: the finisher's record above (what was left, what was passed
up, the sweep, the pictures). Looked at: Tellings at 1280 and the
Words tab of the third passage at 390 (`shots/lead2/`, taken after
the changes below).

Set (`lead2/edits-after-finisher.json`; before:
`lead2/before-after-finisher.json` and
`lead2/kierkegaard.js.before`):

- **For the lead, 5: the odd word of the third section's title.** The
  Words caption of the third passage has one more sentence, its last:
  what an expectoration properly is and what it is figuratively. 115
  words. Ground: the note of the Danish edition (*Søren Kierkegaards
  Skrifter*, vol. K4, to vol. 4, p. 123, line 1), which the poet read
  and the lead read again in the page saved from tekster.kb.dk; the
  sentence says what the note says and no more. A ground is added to
  that tab and the word to the head of its `stands`.
- **4: the two keys of the script.** Lines 163 and 294 now read "a
  telling: the line is as long as its words" and "a paragraph: the
  line is as long as its words, ... in all", as the critic proposed.
  The like key of orpheus has "drawn as long as"; traviata's waits for
  its finisher. Keys that say "every mark is as long as its words"
  have a verb and stand. `node --check` passes.

Decided, nothing set:

- **1.** The two entries known from snippets stay, with the second
  caveat. The snippet test (`build/tools/grams.py`) is running for
  this piece with the others.
- **2.** How Genesis 22 ends: the angel stops Abraham, a ram is
  offered and the blessing is renewed (verses 11 to 18). The caption's
  sentence is right.
- **3, 6.** Left as the finisher left them.
- **7.** The kit's, on the lead's list.

Checker: no problems, no warnings, fit to print. The sweep with the
four scans and Mendelson's book: runs of small words and Kierkegaard's
own terms only.

The piece is through every stage.

## The lead in the last pass (3 October, 16:08 UTC)

The keys of the Tellings and Speech drawings say "the line is drawn as
long as its words" (item 7 of the last pass: the old wording could be
read as "provided that"). The script before is
`lead/kierkegaard.js.before-key`; photographed at 1280 and 390. The
record is `review/remake/last-pass/RECORD.md`. The snippet test found one run, a book's title with its
author's name, which stands (`review/remake/grams/LEAD.md`).

## The lead in the last pass: the measure's wording and the Word tab (3 October, 18:06 UTC)

The Word tab: the 2 tabs named "Words" are named "Word", as on 36 other passages, the front page and Ariel's song (the site critic by word, labels, 5; the reading before: `lead/before-word-label.json`).

## The lead in the last pass: one form for the books many pages cite (3 October, 18:48 UTC)

Printed lines only, and no page number, year or title changed (the tool proves the page
numbers of every line are what they were): `review/remake/last-pass/tools/cite-forms.py`.
The forms: under an entry, `*Prose*, vol. II (2002), pp. …`; in a `stands` line, `*Prose*,
vol. II, p. …`; in the list of sources, `*Prose*, vol. II: 1939–1948, edited by Edward
Mendelson (2002)` the first time and the short form after; and wherever a page of it is
cited under an entry or in the list, `*The Enchafèd Flood* (1950; Vintage Books edition,
1967)`, since every page number of that book on the site is the Vintage edition's (the
one scan all the pieces were written from; its own front matter says so).

Lines changed here (5): `auden[0].source`, `auden[3].source`, `auden[6].source`, `auden[7].source`, `sources[5]`.

The checker says of the piece what it said before. Copy before:
`lead/before-cite-forms.json`.

## The lead in the last pass: one wording for each figure (3 October, 19:55 UTC)

Each Figure tab says in one line under the figure’s name what the figure is. Laid side by
side, the 82 tabs gave the 17 figures that stand on more than one page a different line
on nearly every page. Each figure now has one line, with a tab’s own tail after “; here”;
anaphora, epistrophe, anadiplosis, parallelism and asyndeton keep one sentence whose number
and unit are fitted to the passage. No name, mark, caption or claim changed in this step.
Why and how: `review/remake/last-pass/RECORD.md`, “One wording for each figure”; the table
of lines is `review/remake/last-pass/figures/lead/lead_lists.py`.

Lines changed here (1):

- `plates[0].lenses[0].plain`, the plate `weaning`, the tab Refrain (refrain):
  was “a phrase that comes back at a set place in a song or poem; here the same opening, and the same form of last sentence, after each of four tellings”;
  now “words that come back at a set place in a song or poem; here the same opening, and the same form of last sentence, after each of four tellings”.

The checker says of the piece what it said before. Copy before:
`lead/before-figure-wordings.json`, with the list applied beside it.

## The lead after the word critic of the last pass (4 October, 00:08 UTC)

A critic read the lines written after the pieces' critics had read: the
figures' lines, the measures and the front page's cards. Its report is
`review/remake/critics/last-pass-words.md`; what the lead did with each
point is in `review/remake/last-pass/RECORD.md`. In this reading, exact
edits, each proved to change only the leaf it names (the file before is
`lead/before-last-pass-words.json`):

- `A statement that contradicts itself on the surface and is still meant as true is a paradox. The sentence makes four, and the book later uses the word of Abraham:`
  became `Each of the four is a paradox, and the book later uses the word of Abraham:`
- `; here the same opening, and the same form of last sentence, after each of four tellings`
  became `; here, in the paragraph after each of four tellings, the same opening and a last sentence of the same form`
- `no source given`
  became `no source in the Danish edition`
- `; here, in the paragraph after each of four tellings, the same opening and a last sentence of the same form`
  became `; here, in the paragraph after each of four tellings, the same opening and a matching last sentence`

The checker says what it said before.
