# Critic's report for the piece "castle"

Critic's record, 3 October 2026 (UTC). Nothing of the translation or of
Auden's prose is copied out here: places are pointed at by row and word
number, or by the key in `reading.json`. "Old" and "new" below are the
site's own sentences.

**In short.** 38 numbered changes, all in `reading.json`: 25 sentences
reworded, 2 sentences cut (one in a caption, one in a remark), 2
clauses cut from remarks, 3 labels reworded (two over passages, one in
a key), 17 titles marked for italics in 15 fields, 1 entry taken out of
the list under "More from Auden" (now 8 entries), and 1 page range in
the sources brought in line. The page prints 3,406 words where it
printed 3,511. The checker ends with no problems and one warning
(section 8). The permission system refused nothing.

**Times, and what the pictures show.** First build and pictures 08:05.
Items 1 to 33 were made by 08:28. Second and last round of pictures
08:31 to 08:32, after a fresh build: 27 pictures, every tab at both
widths and the page in slices, and I opened every one. Reading those
pictures I found five more small things (items 34 to 38) and mended
them between 08:37 and 08:42. The piece was built again at 08:42 and
the checker and the prose print-out were run again; the picture tool
was not, since two runs is the limit. So these pictures in `shots/`
are a few words behind `reading.json`:

- `castle-street-1-stop-*`: the fourth remark (item 37);
- `castle-letter-0-reading-*`: two words in the caption (item 36);
- `castle-yard-0-turn-*`: one word in the caption (item 34);
- the page slices that show those two captions and the second and last
  entries of the list (items 27, 35 and 38);
- the artist's seven extra pictures of the Title tab, taken at 08:00
  and left as they were (`-1024`, `-320`, `-pointer-1280`, `-tap-390`,
  `-list-390`, `-figures-1280`, `-figures-390`): they show the Title
  caption as it was before items 17 and 18. The two Title pictures of
  08:31 show it as it is.

Each of the five is a change of words inside a paragraph that the
pictures already show set; none adds a line or moves a mark. I read
them in `review/remake/prose/castle.md` and found each in
`site/data/pieces/castle.json`. Everything else in the pictures is the
page as it now stands.

## 1. What was read

- `remake/BRIEF.md`, `remake/CRITIC.md` (all of it), "The printed
  notes" in `remake/EXAMINER.md`, `remake/KIT-CHANGES.md`.
- The piece: `reading.json`, `exam.md`, `art.md`, `notes.md` (sections
  4 and 8 and its end), `site/js/pieces/castle.js`, and the kit's
  `lens-compare.js` and `lens-word.js` to see how a remark, a gloss and
  a note are set.
- The page: built at 08:05, photographed at 08:05 (the whole page in
  slices and every tab, at 1280 px and 390 px), every picture opened;
  then `review/remake/prose/castle.md` from top to bottom once before
  anything was marked, then sentence by sentence. After the changes:
  the pictures of 08:31, every one, and the print-out of 08:42 from
  top to bottom once more.
- The text around each passage, in the output of the tools: the whole
  paragraph of the street (c01, block 34), K.'s second reading of the
  letter to its end (c02, block 10), and the yard (c08, blocks 11 to
  13).
- For the paraphrases of the class notes and of the two pieces not seen
  in full: section 23 and the extracts of
  `remake/research/C_auden_on_works.md`. The scans of Auden's books are
  outside the project folder and I did not open them; I checked no fact
  again. The examiner's record stands.

## 2. Every change

Old words, new words (or "cut"), and the fault in a few words. Numbers
in brackets are the keys in `reading.json`.

### The head of the page

1. `where`. The novel's title is now between asterisks. Titles.
2. `view.says`. The novel's title between asterisks. No word changed
   (CRITIC.md: never touch `view`). See section 4, first doubt.
3. `view.source`. *The Dyer's Hand* between asterisks. Titles.

### Passage 1, the street

4. `plates[0].label`. Old: "Chapter 1: K. sets out again". New: "K.
   sets out again". The page prints "Chapter 1" beside the heading, so
   the chapter was said twice within one line's height.
   `plates[0].pair.label` ("The end of the same paragraph") names no
   chapter and stands.
5. Clauses, caption. Old: "does not lead **away**, gets **no
   nearer**." New: "does not lead **away**, and gets **no nearer**." A
   list closed with a comma and no "and": one of three in the piece
   (section 3).
6. Clauses, caption. Old: "One translator, Edwin Muir, wrote". New:
   "One of the translators, Edwin Muir, wrote". "One translator" read
   as one of Kafka's several translators; the line under the title
   names two for this book.
7. Stop, caption. Old first sentence: "The second passage is the end of
   the same paragraph." Cut. The label over the second passage says so
   in the same words, a hand's breadth above. Old: "Between the two K.
   walks on". New: "Between the two passages K. walks on", so that the
   caption stands without the sentence cut.
8. Stop, caption. Old: "calls the pulling out of the feet". New: "calls
   pulling the feet out". Two "of"s where none is needed.
9. Stop, caption. Old: "Auden wrote that no other imagined world is as
   heavy as Kafka's, and that one step in it takes all one's strength."
   New: "No other imagined world, Auden wrote, is as heavy as Kafka's,
   and one step in it takes all one's strength." Five captions closed
   on a sentence that began "Auden wrote that" (section 3); this one
   is turned, and nothing in it is claimed that was not.
10. Stop, remark on the pair of row 34.0 words 80 to 81 (`ties[1]`).
    Old second sentence: "Kafka's German has one word in both places:
    weiter, onward." Cut. The caption beside it says the same in the
    same words, and there the German word is in italics. The sentence
    that is left lost a clause later: item 37.
11. Stop, remark on the pair of row 34.0 words 5 to 9 (`ties[2]`).
    Old: "First the way is long. Here each step is an effort: Kafka's
    words for it are schwere Arbeit, work that is heavy or hard." New:
    "In the first passage the way is long. In the second each step is
    an effort." Two faults. "Here" had nothing to point at: in the
    reading's order this remark came after one that ended on the second
    passage, and on the page it now comes second, after the remark on
    the paragraph as a whole. And the clause after the colon repeated
    the caption word for word.

### Passage 2, the letter

12. `plates[1].label`. Old: "The letter, in chapter 2". New: "The
    letter". The page prints "Chapter 2" beside the heading.
    `plates[1].pair.label` ("K. reads it again, in his room") names no
    chapter and stands; its "it" still has "The letter" to point at.
13. Reading, the remark the reading lists second (`ties[1]`, row 8.0
    words 70 to 73). Old: "So too the mention of his wishes." New: "K.
    counts the mention of his wishes among the places that treat him as
    a free man." On the page it stands fifth, after the remark on the
    promise, so "So too" said the opposite of the text. The new words
    are those of the remark it used to follow, with its own subject put
    in: nothing is said that the two did not say together.
14. Reading, the remark on row 8.0 words 39 to 43 (`ties[4]`). Old: "K.
    adds actually." New: "K. adds the word actually." A remark is set
    in italics throughout, so the word named could not be told from the
    sentence, and the sentence read as broken.
15. Reading, caption. Old: "as a sign of others' guilt: they may prove
    his own." New: "as a sign of others' guilt, and that they may prove
    his own." The third sentence in a row built on a colon, and the one
    that closed the caption on a turn. His "may" is kept.
16. Words, caption. Old: "Auden wrote that K. wants to be a word,
    land-surveyor, and so to have a self like everyone else, and that
    this he is not allowed." New: "Of this novel Auden wrote that K.
    wants to be a word, land-surveyor, and so to have a self like
    everyone else, and that he is not allowed one." Two faults. "This
    he is not allowed" is an antique turn where plain order serves.
    And the frame is varied (section 3) with something a reader can
    use: this is the one sentence of his in the captions that is about
    this book and not about Kafka's stories at large, as the view and
    the second caveat already say.
17. Title, caption. Old: "Its editor notes ... Kafka told the same
    editor the ending he never wrote". New: "Its editor, Max Brod,
    notes ... Kafka told Brod the ending he never wrote". "The same
    editor" sent the reader back three sentences to find a man the
    page names only at its foot. The name is in the lens's grounds and
    its `stands`.
18. Title, caption. Old: "The Superintendent, his superior by the
    letter, tells him". New: "The Superintendent, whom the letter names
    as his superior, tells him". "By the letter" also means "strictly",
    and here it is meant of Klamm's letter.

### Passage 3, the yard

19. Turn, key (`spans[3].label`). Old: "no one may touch him". New: "no
    one dares touch him". The caption beside the key, the Figure
    caption and the passage (row 13.0, word 346) all have daring, not
    leave.
20. Turn, caption. Old: "he is freer than ever, no one dares touch
    him." New: "he is freer than ever, and no one dares touch him." As
    in 5.
21. Turn, caption. Old: "Then **but**, and the fourth, rated between
    dashes at least as strong:". New: "Then comes **but**, and the
    fourth, which a remark between dashes rates at least as strong:".
    A sentence with no verb and a clipped participle; I had to read it
    twice to see who rates what.
22. Figure, caption. Old: "he could *wait*, nobody dared *touch* him."
    New: "he could *wait*, and nobody dared *touch* him." As in 5.
23. Figure, caption. Old: "is built on the verb for to wound". New: "is
    built on the verb that means to wound". "For to" reads as the old
    idiom.

### More from Auden

24. First entry, `says`. Old: "By his notes Auden came to Kafka by way
    of Descartes". New: "According to his notes, Auden came to Kafka by
    way of Descartes". "By his notes ... by way of" could be read as
    the road Auden took.
25. First entry, `says`. Old: "For this century's culture it is what
    Dante's poem was for the fourteenth." New: "For the culture of the
    twentieth century it is what Dante's poem was for the fourteenth."
    "This century" was Auden's own in 1941 and is not the reader's
    now. The notes he is reported from have "our century".
26. First entry: the novel and the *Divine Comedy* between asterisks in
    `says`; the book between asterisks in `source`. Titles.
27. Second entry, `says`. Old: "How a man stands to his fate, Ahab to
    his whale or K. to his Castle, is best given, he said, so far as
    music can give such a thing, by Beethoven, in the second movement
    of his Fourth Piano Concerto." New: "He said that the second
    movement of Beethoven's Fourth Piano Concerto shows best, so far as
    music can show such a thing, how a man stands to his fate: Ahab to
    his whale, or K. to his Castle." One sentence broken into seven
    pieces by six commas; the same things are said in the same hedge,
    in an order that can be followed. (The verb is the one of item
    38.) `source`: the book between asterisks.
28. Third entry, `says`. Old: "By his notes Auden said". New:
    "According to his notes, Auden said". As in 24. `source`: the book
    between asterisks.
29. Fourth, fifth and sixth entries: *The Dyer's Hand* between
    asterisks in `says` (fourth) and in each `source`; *The Great Wall
    of China* in the fifth. Titles. No word changed.
30. The entry from pp. 166 to 167 of *The Dyer's Hand* (it was the
    seventh): taken out whole. Section 5.
31. The review of 1941: *The New Republic* between asterisks in `says`
    and `source`, and *Prose* in `source`. The rule names books, plays,
    long poems and operas; I marked the magazine as the page's own
    list of sources already does.
32. The essay of 1946, `source`: *The Kafka Problem* between asterisks.

### The notes at the foot

33. `sources[3]`. Old: "pp. 159–67". New: "pp. 159–63". With the entry
    of 30 gone nothing on the page uses pp. 164 to 167 (CRITIC.md:
    take out of `sources` any page that nothing else now uses).

### After the last pictures (08:37 to 08:42)

34. Turn, caption. Old: "are both what seemed to K. Kafka's German
    has". New: "are both what seemed to him. Kafka's German has". The
    full stop of the initial is also the end of the sentence, and the
    next sentence begins with the author's name, so the eye takes the
    two for one name. On a phone they stand side by side on the seventh
    line of the caption (`castle-yard-0-turn-390.png`).
35. Last entry of the list, `says`. Old: "He will never be the Land
    Surveyor he wishes to be, since he cannot stop being K. Auden calls
    the contradiction comic:". New: "Since he cannot stop being K., he
    will never be the Land Surveyor he wishes to be. Auden calls the
    contradiction comic:". The same stumble, with Auden's name
    (`castle-page-390-6.png`, third line). No word is added or dropped.
    I searched the printed text: these were the only two places where
    a sentence ended on the initial before a capital letter.
36. Reading, caption. Old: "He finds a hint that he made the first
    move". New: "Further on he finds a hint that he made the first
    move". The sentence sets a phrase in italics as the text's own, and
    the phrase is not in the lines shown: the second passage stops at
    word 92 of its paragraph, and the hint stands at words 479 to 561
    (the lens's own grounds). I looked for it on the plate. The two
    words say only where, and the `stands` of the lens already says
    "the rest of that paragraph". The caption has 114 words.
37. Stop, the remark on row 34.0 words 80 to 81 (`ties[1]`; on the
    page the fourth). Old: "first what he does, then, after could not,
    what he cannot do." New: "first what he does, then what he cannot
    do." A remark is set in italics throughout, so the two words named
    between the commas could not be told from the sentence around them
    and read as a slip. The caption beside the remark says where the
    words come back, with both pairs in bold.
38. Second entry of the list, `says`. "Gives best, so far as music can
    give such a thing" is now "shows best, so far as music can show
    such a thing" (the whole sentence is in 27). The verb was the
    poet's and I had kept it when I turned the sentence; "gives how a
    man stands" is not something one says.

Nothing else was changed: no `turn`, `join` or `heading`, no tab's
`label`, no mark, no `grounds`, no `facts`, no `quote` (the reading has
none), no `why` and no `stands` (each still fits its caption: the one
sentence cut from a caption, in 7, said where the second passage comes
from and carried no reason). `site/js/pieces/castle.js` was not opened
for writing.

## 3. What recurs across the piece

Counted in the text as I found it. What I did about each is in square
brackets.

1. **A caption that closes on a sentence of Auden's: 6 of 7.** Every
   caption but Figure's ends there, and it should: that sentence is the
   caption's reason (rule two), so I moved none. The tic was the frame.
   Five of the six began "Auden wrote that". Three do now (Reading,
   Title, Turn); Stop has his name inside the sentence, Words begins
   "Of this novel Auden wrote that", and Clauses always had "Auden,
   writing of ..., cites". [2 varied: items 9 and 16.]
2. **One sentence of Auden's used three times.** His sentence about the
   letter and the word stands in the view, closes the Words caption and
   closes the Title caption; the essay of 1946 in the list makes the
   point a fourth time. A reader who opens the three tabs of the letter
   one after another reads it twice within a minute. The examiner's
   note in `open` gives the cause: it is the only sentence of that
   essay that names the novel. [Left; the Words caption now says that
   this sentence is the one about the novel. Section 4, doubt 2.]
3. **The same thing said twice within one screen: 5.** A label over a
   passage and the line beside the heading (items 4 and 12); a
   caption's first sentence and the label over the second passage
   (item 7); a remark and the caption beside it, word for word (items
   10 and 11). [All five mended.] Left: the five remarks of Reading
   say pair by pair what the caption's second and third sentences say
   together, but each adds what K. adds or where he puts the phrase.
   On the Title tab the ending Kafka described is in the caption, in
   the last row of the list under the drawing (a `facts` string) and
   once more in the notes on where the page may be wrong.
4. **A remark that leans on a neighbor the page has moved: 2.** "So
   too" (item 13) and "Here" (item 11). [Both mended.] The page shows
   the remarks of Stop as the first, third, fourth and second of the
   reading's list, and those of Reading as its first, fourth, fifth,
   third and second. Read in that order, no other remark points at a
   neighbor it has lost: the third on the page of Reading ("that
   official") still follows the remark it points at.
5. **Words that can be read two ways: 5.** "One translator" (6), "by
   the letter" (18), "By his notes ... by way of" twice (24, 28),
   "this century" (25). [All mended.]
6. **Clipped or antique turns: 7.** Three lists closed with a comma and
   no "and" (5, 20, 22); a sentence with no verb and a clipped
   participle (21); "this he is not allowed" (16); "the verb for to
   wound" (23); one sentence in seven pieces (27). [All mended.] Two
   more of the kind are in the view: section 4, doubt 1.
7. **A word named as a word, with nothing to mark it: 5 places** in
   the remarks and glosses. A remark, a gloss and a note are set in
   italics from end to end and take no bold and no italic within, so
   "K. adds actually." read as a broken sentence. [2 reworded: items
   14 and 37. Left: 3. Two are announced by the words before them
   ("The same two words, ..." on Stop, "one word, ..." on Reading),
   and the gloss on row 8.0 words 88 to 94 names word 83 of the same
   row, five words before its mark.] Across the site 1 remark in 393
   uses quotation marks for this, so I added none. Section 7 says
   more.
8. **A sentence that ends on the initial before a name: 2** (items 34
   and 35). [Both mended.]
9. **"Kafka's German": on 5 of the 7 tabs** (four captions and a note;
   "Kafka's German has" three times). It is the method of the piece,
   and each says something the marks need. [Left. The two places where
   the German stood both in a caption and in a remark beside it are
   among the five of 3.]
10. **"So" at the head of the sentence that concludes: 2**, in the two
    captions of the yard, besides the "So too" of item 13. [Left:
    twice is the method.]
11. **A colon that turns the sentence: three in a row** in the Reading
    caption, now two (item 15). The seven captions have eight colons
    in all, most of them before a list.
12. **Titles left bare: 17, in 15 fields.** [All marked: items 1 to 3,
    26 to 29, 31 and 32.]

## 4. Doubted and not changed (for the lead)

Nothing on the page reads to me as made up: each caption's closing
sentence has its ground in the lens, and the examiner's record covers
it. Every tab pays: when I had finished each one I knew something
about how its passage is made. What I doubt is some wording I may not
touch, a name the page does not give, and an order.

1. **The view (`view.says`): its last sentence, and the two before
   it.** It ends: "... land-surveyor: to have a self like everyone
   else. That he is not allowed." Five words with the object put
   first, set last, in the first paragraph a reader meets: faults 2
   and 7 of CRITIC.md. Before it stand two short sentences that say
   nearly one thing ("Kafka's hero meets no one who knows it. K. does
   not know what he ought to do."). CRITIC.md says never to touch
   `view`, so I marked the title and changed no word. The wording I
   would set, every claim kept, in the form the Words caption has now:

   > In *The Castle* the letter K. wants to be a word, land-surveyor,
   > and so to have a self like everyone else, and he is not allowed
   > one.

   Less needed: "Kafka's hero meets no one who knows it, and K. does
   not know what he ought to do."
2. **One sentence three times** (section 3, point 2). No change of
   wording cures it. The examiner's proposal in `open` would: let the
   Title caption stand on the essay of 1946 once it is seen in full.
3. **Fifth entry of the list: "Fine as the two novels are".** The
   entry has named no two novels. The novel nearest in the paragraph
   is the Czech one, so a reader takes "the two" for that one and *The
   Castle*, and has Auden praising a book he brings in for its wicked
   officials. I believe he means two of Kafka's (the examiner notes
   that he names two on p. 163), but the scan is outside this folder
   and a name is not mine to add. If the essay names them at that
   place, the names should stand in the entry.
4. **First entry: "these predicaments".** One question has been asked
   (which of a man's selves is the I that thinks), and the plural has
   nothing to point at. The notes it reports, as the research file
   gives them, speak of predicaments of the time, of the mind and of
   metaphysics. To say which would add to the entry, so it stands.
5. **Third entry: "his daemon"** is not explained. The sentences after
   it (the conscious mind, the unconscious, composing a poem) let a
   reader work it out. A gloss would be mine and not Auden's.
6. **Fourth entry: "be called only K"**, without the full stop the
   rest of the page gives the initial. I take it for Auden's own form
   (the grounds of the Reading tab say he writes it so) and left it.
   If it is a slip it wants the stop.
7. **Fifth entry: "He notes from Max Brod's life of Kafka a Czech
   novel".** Clipped, but it can be followed, and I could not turn it
   without saying more of Brod's book than the entry does.
8. **Sixth entry closes on "His world is closed and heavy."** Six
   words, set last. It reports what those pages say, and the Stop
   caption has the heaviness already, so the list would not miss it.
   Left, because it poses nothing.
9. **Reading caption: "uneasy, the text adds, not bad".** The shape is
   "not X but Y", but the correction is the passage's own (words 518
   to 524 of that paragraph), so it stays.
10. **Title caption: "... a word, land-surveyor, and is not
    allowed."** It stops a word or two short; "and is not allowed to
    be one" would be plainer. Left, as the form of this lens's `why`.
11. **Turn caption: "So the freedom and its hopelessness are both what
    seemed to him."** Still stiff. It carries the reason of the tab
    (one verb governs both halves), and I found no plainer form that
    says no more.
12. **Remarks of Reading, the second and third on the page.** In the
    reading's order they followed the remark that names the minor
    employee. On the page they follow the one on the free man and no
    longer say which kind they are. Neither has a word that points
    back, "no more than" tells the kind, and the caption beside them
    names it, so I added nothing.
13. **The order of the list.** Three entries from the class notes
    (1941, 1941, 1942), three from the essay of 1962, then the review
    of 1941 and the essay of 1946. What Auden printed in the year of
    the course comes seventh. No entry leans across that seam, so the
    last two could stand after the third. Order is not wording; left.
14. **Where the page may be wrong: "The counts depend on how one
    counts."** A turn of phrase where a fact would do; the next two
    sentences give the fact. Left, at the foot.
15. **`open`, which is not printed.** Its ninth entry still says that
    the Title tab has no drawing and that there is no script for it.
    Both are there now.

## 5. Taken out of the list under "More from Auden"

One entry, the seventh of nine: from pp. 166 to 167 of "The I Without
a Self". It says when Auden thought one should read Kafka, and that
Kafka comes near to holding the physical world evil but was no
gnostic. It is true and checked. It came out because:

- it speaks of Kafka at large, and names neither the novel nor
  anything in the three passages;
- it was not said in 1941 and is not about the work as he taught it;
- no caption, no `grounds` item, no `stands` and no note at the foot
  leans on it (the view and the captions use pp. 162 to 163);
- with nine entries the list read as everything that was found. Three
  entries from that essay stay, and they are the three that bear on
  the novel: the parable and its critics, the officials of the Castle,
  the hero and his quest.

It was moved whole (`source`, `says`, `checked`; it had no `quote`) to
the end of `notes.md`, under the heading CRITIC.md gives, with these
reasons. That is all I wrote in `notes.md`. `sources[3]` now gives the
essay as pp. 159–63 (item 33). The entry that followed it begins "In
February 1941" and needed no name.

Of each of the eight that stay I asked whether the page would miss it.
The fourth (parables and what critics can say of them) is the furthest
from the passages; it stays because it says how he thought such a book
has to be read, which is the work as he taught it.

## 6. The Title tab: wording for the lead to set

I changed nothing in the `facts` and nothing in
`site/js/pieces/castle.js`. I read every string the drawing prints, in
`castle-letter-2-title-1280.png` and `-390.png` of 08:31, in the
artist's pictures of the list, the figures, the pointer and the tap,
and in the prose print-out.

Two strings want other words. Both are the script's own.

1. **Script line 191**, the heading of the list under the drawing:
   `` `${B}, turn by turn` ``, which prints "Land Surveyor, turn by
   turn". The word is busy on this page already. "Turn" is the name of
   a tab of the third passage; the first passage has it as a noun
   (row 34.0, word 61, inside a span the Clauses tab marks); and the
   Clauses caption has the verb twice, of a street and of a sentence.
   Here it means a step in the story of the title, one sense more,
   over rows that are each headed by a chapter. My wording: `` `${B}, chapter by chapter` ``, which
   prints "Land Surveyor, chapter by chapter". If the lead would
   sooner not suggest that every chapter has a row: "What happens to
   the title".
2. **Script line 25**, `times`: 0 prints "not once" and 1 prints
   "once", but 2 prints "2 times", in the sentence a column says when
   it is pointed at (line 159). Five columns say it: chapters 4, 6 and
   17 and two parts of chapter 15. My wording: a third case,
   `n === 2 ? 'twice'`, before the general one.

Read and found right as they stand: the sentence of line 159; the two
rows of the key (line 174); "After the text" (line 190, from the key
of the facts); the heading over the five rows, which is the facts' key
`who says the title`; its five `who` strings; the eleven
`turns[].what`; and `after the text.what`.

One thing between caption and facts. The caption now names Max Brod
(item 17), and the last row of the list, `after the text.what`, says
"his editor". They agree, and the row's own `source` names Brod, so
nothing has to change. If the row should stand alone, the words would
be "He told his editor, Max Brod, how it was to go".

One thing in the table under "The figures"
(`castle-letter-2-title-figures-1280.png`): the words of each part
are printed without the comma for thousands (5942, 10582), while the
totals over the drawing, the caption and the sentence a column says
have it (1,046; 6,774). art.md does not speak of it. Script line 196
hands the kit's `d.figures` the bare number; `num(q.words)` there
would set the comma, if the kit's table keeps a string aligned right.

## 7. What on the page got in the way of reading

Not the faults art.md lists; the lead has those. Only what stopped me
as a reader.

1. **A remark, a gloss or a note cannot mark a word.** They are set in
   italics from end to end and printed as plain text
   (`site/js/kit/lens-compare.js`, `lens-word.js`). A caption names a
   word of the passage in bold. A remark that names one has nothing to
   name it with, so the word runs into the sentence. On this page that
   happens in five places (section 3, point 7). I reworded the two
   that read as slips. The other three a reader gets through, slowly.
   If a remark could take the `<b>` a caption takes, they would read
   at once.
2. **The numbered remarks are small and pale beside the caption.** On
   the two compare tabs they carry as much as the caption does: which
   word K. adds, where he puts the promise. At 1280 px they stand to
   the right of it in smaller, grayer italics, and at 390 px under
   it. The longest (the fourth of Reading, three lines) I read twice
   to be sure of it.
3. **On the Reading tab the remarks no longer go the way the caption
   goes.** The caption follows K.: the two places for the free man,
   then the two for the minor employee. The remarks, numbered by the
   letter, go free man, minor employee three times, free man. Each
   stands alone now (item 13), so nothing is wrong, but the reader
   sorts them a second time. In the second passage the numbers
   read 1, 5, 4, 2, 3.
4. **A short line in the middle of the letter.** On a phone, on both
   marked tabs of the letter, one line of row 8.0 has five words and
   stops before word 70 (`castle-letter-0-reading-390.png`,
   `castle-letter-1-words-390.png`). I took it for a break in the
   letter. art.md's second fault has the cause (the kit keeps a short
   marked run on one line) but speaks of the unmarked passage. The
   lines of the street and of the letter also break differently in my
   two rounds of pictures, though I changed no passage: the kit was
   changed between 08:05 and 08:31.
5. **The Title tab.** "Turn by turn", "2 times" and the numbers
   without their comma: section 6.

What did not get in the way, and might have: with the titles marked,
the line under the page's title and the lines of source set a title
upright inside their italics, and a reader can tell the book from the
place it is named for.

## 8. The checker, and what was refused

`node build/tools/check-reading.mjs castle --print`, last run at
08:42 after the last edit, ends:

```
no problems
WARNINGS (1)
  plate yard lens 0 (sentence) caption: "as if": RULE THREE: a claim about what the passage does to someone, or stands for. Keep it only if Auden, a source or the lines themselves say it
the printed notes are fit to print
```

The warning is a false alarm and the sentence stays. The two words are
the passage's own (row 13.0, words 281 to 282, 295 to 296, 342 to 343
and 365.2 to 366). The caption names them, in bold in its first
sentence and in italics in its fifth, to say that they lead four
clauses and that the German has them three times. It makes no claim
with them. The examiner answered the same warning.

One warning of my own making came and went: after item 25 the first
entry of the list had 111 words, and the checker asks for 110 or
fewer. It has 109 now.

`node build/pieces.mjs castle` was run after the last edit (08:42).
The picture tool was run twice, at 08:05 and at 08:31, and not again.

Refused by the permission system: nothing.
