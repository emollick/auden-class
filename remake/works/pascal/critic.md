# Critic's report for the piece "pascal"

Critic's record, 3 October 2026 (UTC), begun 11:25, ended 12:25. The
last change to `reading.json` was at 11:48:46. Nothing of the
translation, of Pascal's French beyond the short phrases the notes
already name, or of Auden's prose is copied out here: places are pointed
at by row and word number, or by the key in `reading.json`. "Old" and
"new" below are the site's own sentences.

**In short.** 34 changes, all in `reading.json` (section 2). Thirteen
fields on the two word tabs were marked, with no word changed.
Twenty-four sentences were reworded: 12 in seven captions, 3 small notes
(two of them lost a clause that repeated the caption), 6 in three
entries of the list, 3 in one caveat. One entry was taken out of the
list, which now has nine; it stands whole at the end of `notes.md`, and
two lines of the sources were trimmed with it. No claim was added or
made stronger; no mark on a passage, number, name, page
reference, ground, fact or quotation was touched, and nothing in `view`.
The drawing of the tab "Page" needs no change to its script or its
`facts` (section 4). Twelve doubts are set down for the lead (section
5); five of them ask for a decision. The page prints 4,171 words where
it printed 4,292. The checker ends with no problems, no warnings and the
printed notes fit to print. Nothing was refused.

## 1. What was read

- `remake/BRIEF.md`, `remake/CRITIC.md` (all of it), `remake/EXAMINER.md`
  ("The printed notes" above all), `remake/KIT-CHANGES.md` to the seventh
  mending.
- The piece: `reading.json` from end to end, `exam.md`, `art.md`, the
  headings of `notes.md`, and `site/js/pieces/pascal.js` (read, not
  edited), with the kit's `lens-word.js` and `rich.js` to see how a gloss
  and a note take a marked word.
- The page: built at 11:27; the artist's pictures of 10:14 to 10:17 (the
  reading had not changed since 09:46): the whole page in slices at 1280,
  every tab at 1280, the tab "Page" at 390 with a row tapped, and the
  artist's four trial pictures of marked notes. Then
  `review/remake/prose/pascal.md` from top to bottom once before anything
  was marked, then sentence by sentence.
- After the changes: the page built again (last at 11:51) and
  photographed in two runs (section 7), the first and third passages at
  every tab and both widths and the whole page in slices; the print-out
  made again; and every printed sentence read once more as it now
  stands.
- The text around each passage, in the output of the tools: section IV,
  blocks 88 to 101; section VI, blocks 16 to 21; section II, block 11;
  section III, blocks 141 to 154.
- I checked no fact again. The examiner's record stands. For two
  paraphrases I reworded I looked at the examiner's own account of the
  place and at `remake/research/C_auden_on_works.md`, lines 299 to 308.

## 2. Every change

All in `reading.json`, each by one exact edit, except item 32 (see
"How 32 was done"). Old words, new words (or "cut"), and the fault in a
few words.
The keys in brackets are those of `reading.json` as it now stands.

### 2a. Words marked in the small notes and glosses (no word changed)

The artist's list was checked against each note as it now reads, word by
word counted from 0: every count holds. The stop after a marked run is
left outside the mark. The glosses take the same asterisks since the
seventh mending, so the six glosses that name a French word are marked
too, and so is Trotter's English word where a note and a gloss name it
as a word.

Passage 1, tab "French" (`plates[0].lenses[1].notes`):

1. `[1].gloss` (under 90.0 w11): the French word, word 1 of the gloss.
2. `[1].note`: words 2 to 4, the three French words (artist's list).
3. `[2].gloss` (under 92.0 w5): word 1.
4. `[2].note`: word 3, the French infinitive (artist's list). The note
   was also reworded: item 19.
5. `[3].gloss` (under 92.0 w16): word 1.
6. `[3].note`: words 2 to 5, the four French words (artist's list).

Passage 3, tab "Game" (`plates[2].lenses[3].notes`):

7. `[0].note` (on 144.0 w11): word 3 (artist's list).
8. `[1].gloss` (under 144.0 w46): word 1.
9. `[1].note`: word 0 (artist's list).
10. `[2].gloss` (under 144.0 w103-104): word 2, the French word, and
    word 4, Trotter's word for it. This is the gloss the artist could not
    read: a French word third, with English on both sides.
11. `[2].note`: words 2 to 4 and word 5 (artist's list), and Trotter's
    word near the end, which the artist's list did not have. One word of
    this note was also changed: item 27.
12. `[3].gloss` (under 144.0 w113): word 1.
13. `[3].note`: words 2 to 4 (artist's list).

Thirteen fields: six glosses, seven notes. The piece has no numbered
remarks (no Beat or compare tab), and I found no title left bare in a
note, a gloss, `about`, `where`, `view.says`, any `says` or any `source`:
the examiner had marked them. The two glosses with no foreign word
(under 90.0 w1 and 144.0 w11) are as they were.

### 2b. Words changed

Passage 1, tab "Reasons" (`plates[0].lenses[0].caption`):

14. Old: "Littré’s dictionary lists the two senses apart". New: "Littré’s
    French dictionary lists the two senses apart". A name not explained
    at its first use: the two sentences before it are about English
    words, and a reader takes the dictionary for an English one.
15. Old: "The turn is Pascal’s:". New: "The play on the word is
    Pascal’s:". "Turn" for a figure of speech is a word of the trade, and
    quaint.
16. Old: "and the play on the word came with it". New: "and the play came
    with it". So that the phrase item 15 brought in is not said twice in
    three sentences.

Passage 1, tab "French":

17. `caption`, last sentence. Old: "Auden’s sentence on Pascal calls heart
    and reason alike faculties." New: "Auden’s sentence on Pascal calls
    both heart and reason faculties." It read wrong at first ("alike
    faculties").
18. `notes[0].note`. Old: "In fragment 282 Pascal says that truth is known
    by the heart as well as by the reason, and first principles such as
    space, time and number by the heart alone." New: "In fragment 282
    Pascal says that first principles such as space, time and number are
    known by the heart alone." Padding: the caption over it says the first
    half in the same words.
19. `notes[2].note`. Old: "The verb is sentir, to feel, which Littré also
    gives the sense to perceive or know; in fragment 282 Pascal uses it
    for the heart’s knowledge of first principles." New: "The verb is
    *sentir*, to feel; Littré also gives it the sense to perceive or
    know." A clause that does not parse ("which Littré also gives the
    sense to"); and padding: the second half is in the caption word for
    word. After 18 and 19 the tab tells fragment 282 twice (the caption,
    and the note on 90.0 w1, which adds what the caption lacks), not four
    times. The note's unprinted `source` still names fragment 282; it is
    the working record and I left it.

Passage 1, tab "Against" (`plates[0].lenses[2].caption`):

20. Old: "In the French edition used here it is one sentence". New: "In
    the French edition used here the fragment is one sentence". "It" had
    nothing near to point at: the sentence before is about two words
    changing places.

Passage 1, tab "Page" (`plates[0].lenses[3].caption`):

21. Old: "and is told that reason brings him to it and to work on his
    passions". New: "and is told that reason brings him to belief and
    that he should work on his passions". Hard to follow ("to it and to
    work"). "It" is belief: the lens's own `why` says so, and so does
    block 147 of section III.

Passage 2, tab "Reed" (`plates[1].lenses[0].caption`):

22. Old: "the next six words give the ground:". New: "the next six words
    say why:". A word of the trade.

Passage 3, tab "Pairs" (`plates[2].lenses[1].caption`):

23. Old: "Under them stand four pairs, each divided the same way." New:
    "They head four pairs, each divided the same way." Nothing stands
    under anything on the passage: the three clauses and their pairs run
    on in one sentence. The key calls the clauses "the three headings".
24. Old: "The two columns let the argument settle". New: "The division
    lets the argument settle". There are no columns on the passage, and
    since the seventh mending no strokes either: two colors tell the
    sides, and the caption has just called them sides.
25. Old: "Later in the paragraph Pascal calls the player who will not
    stake one life to win three *imprudent*." New: "Later in the
    paragraph Pascal’s word for the player who will not stake one life to
    win three is *imprudent*." The named word came at the end of a long
    object and read as "three imprudent".

Passage 3, tab "Game":

26. `caption`. Old: "a rule the next fragment names, *the doctrine of
    chance*: in French, the rule for dividing the stakes of an unfinished
    game, which Pascal set out in a treatise. The fragment adds that".
    New: "a rule the next fragment names, *the doctrine of chance*. In
    French it is the rule for dividing the stakes of an unfinished game,
    which Pascal set out in a treatise. The same fragment adds that". A
    sentence of 33 words with a colon and three commas, broken in two; "in
    French," followed by English words, needed its verb; "The fragment"
    could be taken for the one shown.
27. `notes[2].note`. Old: "which Trotter turns as heads". New: "which
    Trotter gives as *heads*". Quaint.

The list under "More from Auden":

28. `auden[3].says`. Old: "the two chief persons of *Othello*. By a
    student’s notes, he said". New: "the two chief characters of
    *Othello*. According to a student’s notes, he said". A quaint word;
    a clipped phrase.
29. `auden[7].says`, the entry that begins with Mendelson (it was the
    ninth, and is the eighth now; the keys count from 0). Three things.
    Old: "Auden began reading him by June 1939". New: "Auden was reading
    him by June 1939". Old: "Its second part begins, in so many words,
    like Pascal, from one observation and one assumption". New: "Its
    second part opens by saying that, like Pascal, Auden starts from one
    observation and one assumption". Old: "Auden adds that". New: "He adds
    that". The second sentence put three commas between the verb and what
    it governs. Both new wordings say what `exam.md`, section 5, says of
    the place, and no more.
30. `auden[8].says`, the last entry, first sentence. Old: "Auden wrote
    that at school and university Pascal was the one writer on theology
    he knew whom he could read and who shook his self-satisfaction." New:
    "Auden wrote that among the writers on theology he knew at school and
    university, only Pascal was readable and shook his
    self-satisfaction." Two relative clauses on one noun ("he knew whom
    he could read"). The new sentence keeps the one "only" that covers
    both things, as the old one did.

Where this page may be wrong:

31. `caveats[4]`. Three things. Old: "The order and the numbers of the
    fragments are an editor’s." New: "The printed order and the numbers
    of the fragments are an editor’s." The note before it speaks of
    another order, the order of writing, and the two ran together. Old:
    "and 277 was probably written after 278". New: "and modern editors
    think 277 was written after 278". This is the one change made under
    the lead's instruction about the order: the caption and its ground
    give the order as the editors' judgment, and "probably" was the
    page's own word for it. Old: "The paragraph that draws the conclusion
    about dignity and thought". New: "The paragraph on dignity and
    thought". Only to keep the note inside its 50 words (it has 47).

### 2c. The list under "More from Auden": one entry taken out

32. The sixth of ten entries, the one that began by saying that Auden
    more than once set Pascal beside Montaigne. It stands whole at the
    end of `notes.md` under "Taken out of the list of what Auden said",
    with its source and its record. Why: its first remark, of 1939, is
    the last sentence of the Reed caption, which has its own ground and
    its own line at the foot; its other two remarks only name Pascal in
    passing, in an essay on Kierkegaard and in a list in an essay on
    writing, and the list is not explained ("Alices and Mabels" means
    nothing to a reader who has not read that essay). The examiner's
    record (section "Still doubtful", 5) had named it as the one to cut.
    No caption, `grounds` item or `stands` leans on it. The entry after
    it begins with its own name. Nine entries are left.
33. `sources[8]`: "“Writing,” p. 20; " taken out. Nothing else on the page
    used it.
34. `sources[9]`: "pp. 169 and 178" is now "p. 178". Nothing else on the
    page used p. 169.

How 32 was done. I did not type the entry: one sentence of it keeps
close to a sentence of Auden's. A script of a few lines, kept in the
session scratchpad, read `reading.json`, checked that the five lines it
was about to cut were exactly that entry and that no other key of the
file changed, cut them, and set the entry at the end of `notes.md` under
a paragraph I wrote. That is the only thing I wrote in `notes.md`.

Not changed: no `turn`, `join`, `heading`, `speakers` or `beside`, no
tab's `label`, no mark on a passage, no `grounds`, no `facts`, no
`quote`, no `why` and no `stands` (each `why` and `stands` still fits its
caption: no caption lost or gained a claim), and nothing in `view`. The
script `site/js/pieces/pascal.js` was read and not opened for writing.

Three `why` sentences keep a word that I changed in the caption or the
caveat beside them: `plates[0].lenses[1].why` ("alike faculties", item
17), `plates[2].lenses[1].why` ("in two columns", item 24) and
`plates[0].lenses[3].why` ("was probably written first", item 31). A
`why` goes into the page's data and no view shows it to a reader, and
each of the three still says what its caption says, so I left them.
Words for each, if the lead wants the record to match, are in section 5,
item 12.

## 3. What recurs across the piece

Counted in the reading as it is handed in: eleven captions (1,189
words as the checker counts them), eight small notes, nine entries in
the list (782 words). What I did about each is in square brackets.

1. **A caption that closes on Auden: 8 of 11.** Reasons, French, Against,
   Reed, Verbs, Voice, Scales, Game. A ninth (Pairs) has him in the
   sentence before the last. Page and Crossing do without him. That is
   the method, and the frame is not a tic: nine different openings
   ("Auden’s judgment was that", "Auden’s sentence on Pascal calls",
   "Auden’s verdict uses", "Auden wrote that", "Auden’s word for", "Auden
   granted", "Auden’s objection to the word", "Auden objected in 1939
   that", "Auden grants the word"), and "Auden wrote that" only once.
   [None varied.]
2. **One page of Auden behind five captions.** Page 47 of *The Prolific
   and the Devourer* is the Auden of all three tabs of the first passage
   that have him, and of Reed and Verbs in the second. That his reason
   saved Pascal, and not the heart, is said three times: at the head of
   the page, at the end of Against and at the end of Verbs. A reader who
   opens every tab meets it as a refrain. Each caption takes a different
   word from the page (heart set above reason; the two nouns reversed;
   both called faculties; the feeling about Montaigne; reason as the
   faculty he had), so I cut none. [Left; for the lead to know.]
3. **The list says again, at length, what a caption has said.** The
   first three entries are the Auden of Pairs and Game, of Scales, and of
   Voice. That is what the list is for. The entry I took out was the one
   whose only remark on Pascal himself was already a caption's close.
4. **On the two word tabs, caption and notes say the same things.** On
   "French" each of the four notes said again something the caption
   said, two of them in its very words; on "Game" two of four do, and
   add where the sense comes from. The model piece does the same (the
   caption gives the sense, the note the dictionary), so I cut only
   where the words were the same. [2 trimmed: items 18 and 19.]
5. **"In the manuscript" opening a sentence: 4 captions** (Reasons,
   Crossing, Pairs, Scales), and a fifth addition above the line told
   another way (Voice). Each is a different fact about what Pascal
   added, and each changes how the sentence is read, so this is matter,
   not a frame. [Left.]
6. **"Behind X is Y": 4** (three on "French", where there are three
   words to go behind, and one on "Game"). [Left.]
7. **"X, not Y" and "X and not Y": 8 in all that is printed** (4 in the
   captions, 1 in the summary, 1 in the view, 2 in the notes at the
   foot). Every one has a real pair in the matter: two of the four in
   captions are the fragments' own words, and the rest set an editor
   against Pascal, the heart against the reason, a note against the
   dialogue, a transcription against the manuscript. None is made for
   the rhythm. Not counted: "not in full", four times in the sources,
   which says how a book was read, and the fragment's own words as a
   label in the drawing. [Left.]
8. **"So" drawing the reason: 3** (French, Reed, Voice). [Left.]
9. **"Stand" for "is" or "is written": 4 before, 3 now** (the Page
   caption, one line at the foot, one caveat). [1 changed: item 23.]
10. **Words of the trade left bare: 2** ("the ground" of a likeness;
    "the turn" for a figure). The five figures are each said in plain
    words, in the caption or in the key. [Both changed: items 15, 22.]
11. **Quaint words: 3** ("persons" of a play, "turns as" for
    translates, "By a student’s notes"). [All changed: items 27, 28.]
    "For want of room" in the Page caption I let stand: it is still
    current, and it is the phrase the lens's ground uses for the editors'
    remark.
12. Stock words, rhetorical questions, dashes, "we", praise of the work
    as fact, sentences that announce or sum up: none found. The checker
    has no warnings.

## 4. The tab "Page": the printed words of the drawing, and the order

I read every word the drawing can print, in the pictures (wide; narrow
with a row tapped) and in `site/js/pieces/pascal.js`:

- line 126, the label of the strip of page numbers;
- line 174, the two heads, in their three lengths ("Page 8, as written"
  and "The book, as printed"; "Page 8, written" and "printed"; "Page 8"
  and "printed");
- line 241 (`sayOf`), the sentence for a piece: its place "in the order
  given", its fragment number, its section and the section's name;
- lines 254 to 255, the sentence for a section;
- lines 264 to 266, the three sentences for a page of the strip;
- lines 280 to 282, the three rows of the key; line 284, the folded
  table and its two column heads;
- from `facts`: the four `place` strings, the eight `about` strings, the
  fourteen section names, and `otherSide.holds`.

No working word, no stock word, nothing that pronounces. The sentences
are plain and each fits one line.

**The order of the eight pieces.** What each printed place claims:

| Where | What it says of the order |
| --- | --- |
| `what`, over the drawing | "in the order a modern edition gives": whose order it is, not what kind |
| the figures 1 to 8 beside the rows | nothing in words |
| the head of the left column | "as written", set against "as printed": the manuscript against the book |
| `sayOf` | "in the order given": no more than `what` |
| the caption | an order of writing for 278 and 277 only, as what modern editors judge |
| `stands` | the order in which the page was written, as "those editors’ judgment" |
| the fourth caveat | the order in which he filled the page is "the modern editors’ judgment" |
| the fifth caveat | said 277 was "probably" written after 278; now "modern editors think" (item 31) |

The ground is the working note `facts.orderNote` and the third ground
of the caption: the whole order of the eight is the editors' inference,
given by them as what it is logical to think. So, after item 31, **no
printed word about the order claims more than the caption and its
ground do**, and I ask for no change to any string of the script or to
anything in `facts`. The artist's two choices are right and should
stay: "written sixth" would give a judgment as a fact.

One place says less than its ground, and a reader feels it. `what`
(`plates[0].lenses[3].what`) names an order and does not say what it is
an order of. The reader learns that only from the caption's third
sentence, and for the other six pieces only at the foot. If the lead
wants it said over the drawing, these words claim exactly what `stands`
and the fourth caveat already print:

    Page 8 of Pascal’s manuscript: the eight pieces written on it, in the order modern editors think they were written, and the section in which each is printed here

I did not make this change: it makes a sentence say what it now leaves
unsaid, and that is the lead's to decide. With it or without it the
script's strings need no change.

One sentence that no reader sees still has the page's own "probably":
`plates[0].lenses[3].why`. It goes into the page's data and no view
prints it. Section 5, item 12, has words for it.

The hint under the drawing ("Point at a mark to read what it stands
for", or "Touch a mark" on a phone) is the kit's, not this script's.

## 5. Sentences I doubt and did not change

For the lead. Each with its key, the doubt, and why I left it. Items 1
to 5 ask for a decision. Items 6 to 10 are remarks. Items 11 and 12
give the old words, or the matching ones, for one thing I changed and
three I left, so that the lead can go either way.

1. **`plates[0].lenses[3].what`**, the line over the drawing of "Page".
   It names an order and does not say it is the order of writing.
   Section 4 has the words I would put.

2. **`auden[8].says`, second sentence: "By then".** Two times have just
   been named, 1956 and his years at school and university, and "then"
   can point at either. I read it as 1956: the same sentence speaks of
   what "may have been what drew him", which looks back. The examiner's
   record fixes the years of the first remark and is silent on this
   one, and the essay was read in snippets, so I did not settle it. If
   it is 1956, "By 1956 he found" says so.

3. **`auden[7].says`, last sentence, on the poem.** It is the one
   sentence on the page that speaks in images and not in statements. A
   reader who does not know the poem cannot tell what the gift is or
   which night is meant, and is not told why the poem is in the list.
   The examiner's working note has the reason (in the poem it is his
   gift that rebuilds his faith, which agrees with the view); to print
   that would add a claim. To cut the sentence is to take the poem off
   the page: nothing else rests on its line in the sources. Both are
   the lead's to decide. I have not seen the poem, so I cannot say how
   near the paraphrase keeps to its words; the lead, who can, may want
   to look at that as well.

4. **`auden[4].says`, first sentence: "answers a contradiction".** The
   reader is not told who contradicts the Devil, or about what, and the
   word can be taken for a fault of logic. If the lines mean that he is
   contradicted and agrees, "the Devil, when he is contradicted, purrs
   agreement" would say it. I have not seen the lines.

5. **The list, at nine.** One over the eight at which each entry has to
   be asked for. Each passes one of the three tests:

   | Entry | Why it stays |
   | --- | --- |
   | `[0]` faith as a choice; the two words | Pairs and Game lean on it |
   | `[1]` two Gods | Scales leans on it |
   | `[2]` interesting as drama | Voice leans on it |
   | `[3]` the Michigan class | said in 1941, in the course |
   | `[4]` *New Year Letter* | printed in 1941; bears on the first passage |
   | `[5]` hard to judge fairly | his judgment of Pascal as a writer; bears out the view |
   | `[6]` the essay on Henry James | bears on the first fragment, which the class used and the page sends the reader to next |
   | `[7]` the book of 1939, and the poem | how the book the view comes from was modelled on Pascal |
   | `[8]` 1956, and the talk of 1947 | what Pascal was to him as a student, and after |

   If the lead wants eight, the page would miss least `[6]`, or else
   the last sentence of `[8]`, the talk of 1947, which is a list of
   likings. `[5]` and `[6]` both come from essays on something else. In
   `[5]` Pascal is one of four names, but what is said is said of all
   four and at length, and its last sentence bears out the view's
   "corrupt in heart". To take out the sentence on the talk of 1947,
   half of the entry's `source`, `sources[13]`, a name in `caveats[0]`
   and half of `caveats[1]` go with it. That is more than a critic's
   cut, so I left it.

6. **Against, third sentence** (`plates[0].lenses[2].caption`):
   "Between the two, heart and God change places." It points at the two
   marks for God and does not say what the exchange does. The reason is
   not mine to supply.

7. **Voice, fifth sentence** (`plates[2].lenses[0].caption`), on the
   note headed *Order by dialogues*. It bears out the caption's first
   sentence and stands four sentences after it, where nothing leans on
   it. Moved up, it would part "Three statements rule that out" from
   the refusal that sentence answers. Left where it is.

8. **Reed, last two sentences** (`plates[1].lenses[0].caption`). The
   caption reaches Auden by way of Montaigne: the editor hears
   Montaigne in the image, Pascal finds great faults in Montaigne,
   Auden felt about Pascal as Pascal did about Montaigne. Auden's
   sentence says nothing of the reed. It is true to its ground and it
   is all the Auden this tab has. Of the eight closes on Auden it bears
   least on how the passage is made.

9. **Crossing, fifth sentence, after the colon**
   (`plates[1].lenses[2].caption`): "what holds the speaker in space,
   he holds in thought". The one clause in the captions with the ring
   of a saying. It is the editor's point about the two senses of the
   verb in the page's words, it says what the two lines say, and each
   plainer wording I tried was longer. Left.

10. **Spelling and setting**, three small things:
    - Verbs caption, first sentence: "a vapour and a drop of water" are
      the translator's words in his British spelling. Here they are
      neither bold nor italic, so the spelling reads as the page's own,
      beside "defense" in `about`. The Reed caption has the same words
      in bold.
    - `about`, third sentence: "addressed as you" names the word and
      leaves it in roman; the Voice caption and the third caveat set it
      in italics. `*you*` would match them. The instruction for marks
      named notes, remarks and glosses, so I left `about` alone.
    - Reed `stands`: the *Apology for Raymond Sebond* is in italics. It
      is a chapter of the *Essays*, which by the house rule takes
      quotation marks; it is also as long as a book and is often set as
      one. Left as the examiner set it.

11. **`caveats[4]`, "modern editors think"** (item 31). The one change
    of mine that alters who vouches for a thing: the page's own
    "probably" became the editors' judgment, as the caption, `stands`
    and the fourth caveat already have it. If the lead prefers the
    page's own hedge, the old words were "and 277 was probably written
    after 278"; the note stays inside 50 words either way.

12. **Three `why` sentences** that no reader sees (section 2, under
    "Not changed"). Words that would make each match its caption, none
    longer than what it replaces:
    - `plates[0].lenses[1].why`: for "calls heart and reason alike
      faculties", "calls both heart and reason faculties".
    - `plates[2].lenses[1].why`: for "in two columns", "on two sides".
    - `plates[0].lenses[3].why`: for ", and 278 was probably written
      first", "; modern editors think 278 the earlier". The sentence has
      40 words, the most the checker passes without a warning, and this
      keeps it at 40.

## 6. What on the page itself got in the way of reading

Only the words. How the page is set is the artist's report, and I add
nothing to it.

1. **There is as much Auden as reading.** The view, the nine sentences
   on him in the captions and the list come to 1,021 words without his
   two quotations; the rest of the eleven captions is 1,018. The list
   alone is 782 words under three short passages. After its fourth
   entry I was reading a file of findings and no longer a point of
   view, which is what CRITIC.md warns of. One entry is out; section 5,
   item 5, says which I would take next.
2. **One page of one book closes five of the first seven tabs**
   (section 3, item 2). By the tab "Verbs" I knew the last sentence
   before I reached it. Each close uses a different word of that page,
   so nothing here is a cut of wording; it is a matter of how many tabs
   need him.
3. **On "French" the caption takes the three words out of order.** It
   lists them as they come in the passage and then takes the first, the
   third and the second, so that the second word's verb can lead into
   fragment 282. The eye goes down the passage and has to come back up.
   To set them in order, two sentences would have to be rebuilt round
   "that verb". I left it.
4. **"The second fragment, 278."** The Against caption begins with
   these words, and nothing on the passage says where 278 begins: the
   heading gives both numbers and the passage is two paragraphs. A
   reader takes the second paragraph for it and is right. The
   examiner's record has the same remark. No word needs changing.
5. **Nothing else.** On each of the ten tabs that have a passage I
   could find there every word the caption sets in bold. Each count a
   caption makes of the English is one a reader can make on the page,
   and I made them: three singulars below the first; four objects;
   three statements, two questions, four invitations; eighteen of *you*
   and *your*; three clauses and four pairs; two halves of six words.
   On "Page" the eight pieces and the five sections of fourteen can be
   counted in the drawing. The count of fifteen in the French is the
   one a reader has to take on trust, and its line at the foot says
   where it was made.

## 7. The pictures, the tools, and what was refused

- **Pictures.** The picture tool was run twice, as allowed, each time
  straight after a build. At 11:47: the first passage, its four tabs at
  1280 and 390 (eight pictures, `pascal-heart-*`). At 11:51: the third
  passage, its four tabs at both widths, with the whole page in slices
  at both widths (22 pictures, `pascal-wager-*` and `pascal-page-*`).
  The reading was last changed at 11:48:46 (item 26, in the third
  passage), between the two runs, so all thirty show the reading as it
  is handed in. At the end I read the first run's wide pictures again
  against the reading: word for word.
- **Not photographed again.** The three tabs of the second passage:
  `pascal-reed-*` are the artist's pictures of 10:17, taken before the
  kit's seventh mending. The tab "Reed" as it now stands, with item 22,
  is in the whole-page slices at both widths, where it is the open tab.
  "Verbs" and "Crossing" have no change of mine. The artist's other
  pictures in the folder are as the artist left them.
- **The tools.** `node build/pieces.mjs pascal` and
  `node build/tools/prose.mjs pascal` were run as CRITIC.md sets out.
  They write outside the piece's folder: `site/data/pieces/pascal.json`
  with `index.json` (the piece's file was last built at 11:51:20, after
  the last change), and `review/remake/prose/pascal.md` (last written
  at 12:10). The print-out has 4,171 words; before my changes it had
  4,292.
- **The script that moved the entry** (item 32) is in the session's
  scratchpad, outside the project. It wrote `reading.json` and
  `notes.md` and nothing else.
- **Refused: nothing.** Three times (about 11:49, 12:02 and 12:17) a
  command did not run because the service that passes commands had
  timed out. The message said to wait and try again. I went on with
  other work, ran the same command again, and it ran. I tried no other
  way round.
- **The checker**, run last at 12:18 on the reading as handed in, ends:

      no problems
      no warnings
      the printed notes are fit to print
