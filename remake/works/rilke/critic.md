# Critic's report for the piece "rilke"

Critic's record, 3 October 2026 (UTC), begun 12:00. Nothing of the
novel, of the poem, of either English version or of Auden's prose is
copied out here: places are pointed at by row and word number, or by
the key in `reading.json`. "Old" and "new" below are the site's own
sentences.

Finished at 12:36. In short: 37 changes to `reading.json`, of which 18
set marks and change no word, 16 change the wording of a sentence and 3
cut a sentence. Nothing was taken out of the list of what Auden said.
The checker ends as it began: no problems, no warnings, the printed
notes fit to print.

## 1. What was read

- `remake/BRIEF.md`, `remake/CRITIC.md` (all of it), "The printed notes"
  and "What the model itself got wrong" in `remake/EXAMINER.md`,
  `remake/KIT-CHANGES.md` to the seventh mending.
- The piece: `reading.json` from end to end, `exam.md`, `art.md`.
  For the form of this report, the head of the critic's report on
  "pascal"; for an entry taken out of a list, the end of the notes on
  "hamlet".
- The kit's `rich.js`, `lens-word.js`, `lens-compare.js` and
  `lens-beat.js`, read and not edited, to see how a remark, a note and a
  gloss take a marked word.
- The page: built soon after 12:00. The artist's last pictures (11:29 to 11:30
  UTC) show the reading as it stood when I began: it had not changed
  since 09:41, nor the kit since 11:06. So I read the page first in
  those (the whole page at 1280, every tab at 1280, the Word tab and
  others at 390), and kept the two runs of the picture tool for after
  my changes (section 7).
- `review/remake/prose/rilke.md`, written again then (the copy on
  disk was of an older reading), once from top to bottom before anything
  was marked, then sentence by sentence.
- The proof printed by `node build/tools/check-reading.mjs rilke
  --print`, for the place of every word a note or a caption names, and
  the whole paragraph the two prose passages are cut from, in the
  output of `node build/tools/words.mjs rilke p1-02 0 0`.
- I checked no fact again. The examiner's record stands.

## 2. Every change

All in `reading.json`, each by one small exact edit. The keys in
brackets are those of `reading.json`. The remarks of a compare tab are
numbered here as the page numbers them, which is the order of the
passage; on the English tab of the poem that is not the order of the
file, so both are given.

### 2a. Marks only (no word changed)

The artist's list (art.md, "In the reading: not mine to change", 1) was
checked against each remark and note as it stands: every place holds.
The stop after a marked run is left outside the mark.

The line under the title (`where`):

1. The brackets round the second title now stand inside its asterisks,
   so they are upright with the title they hold. The first title keeps
   its own pair of asterisks.

First passage, tab "German" (`plates[0].lenses[2].ties`):

2. Remark 1 (`[0].say`): the German verb. (Its second sentence, which
   named the two small words of the artist's list, was cut: item 21.)
3. Remark 2 (`[1].say`): the German word of two letters and the English
   word of two letters.
4. Remark 3 (`[2].say`): its first word. (Also reworded: item 22.)
5. Remark 4 (`[3].say`): the three German words after "says".
6. Remark 5 (`[4].say`): its first word.
7. Remark 6 (`[5].say`): the three German words after "is", and the two
   that end it.

Second passage, tab "Word" (`plates[1].lenses[1].notes`):

8. Glosses under words 358 to 359, 396 to 397, 406, 408, 433 and 434
   (`[0]`, `[2]`, `[3]`, `[4]`, `[5]`, `[6]`): the German word or pair
   at the head of each gloss. The artist's list did not have the
   glosses; CRITIC.md asks for them, and the kit has set a marked word
   upright in a gloss since the seventh mending. The gloss under words
   388 to 395 (`[1]`) names no German word and is as it was.
9. Note 2 (`[1].note`): the five German words after "are".
10. Note 3 (`[2].note`): its first word, the two German words after the
    colon, and the two English words of the passage that it names as
    words (words 417.2 and 418), which the artist's list did not have.
11. Note 4 (`[3].note`): the poem's title.
12. Note 6 (`[5].note`): the four German words after "begins", the five
    after "ends on", the noun after "derives", and the Latin word.

Third passage, tab "English" (`plates[2].lenses[3].ties`):

13. Remark 1 (`[1].say` in the file): its first word, the three German
    words after "turn to", and the English word of the notebook that it
    names as a word (the artist's list did not have that one).
14. Remark 4 (`[3].say`): its first two words, and the three words of
    Lemont's that it names (row p:0.3, words 5 to 7).
15. Remark 5 (`[4].say`): its first two words, and the three words of
    Lemont's that it names (row p:2.2, words 3 to 5).

Twenty fields: the line under the title, nine remarks, four notes and
six glosses.

### 2b. Titles and German words in the list under "More from Auden"

No word changed. `view.says` holds no title. Nothing inside a `quote`
was touched.

16. `auden[0].says`: the title of Rilke's book of elegies, between
    asterisks. Also the German word for things, which the entry names
    as a word. CRITIC.md asks only for titles in this field; I marked
    the German word so that it is italic here as it is in the captions.
17. `auden[1].says`: the title of Auden's long poem of 1941, and the
    same German word with its article.
18. `auden[2].says`: the title of Shakespeare's play, and the short
    title of Rilke's book of elegies.

The Eighth Elegy, named in `auden[1].says`, is one poem of that book
named by its number, and is left as it is.

### 2c. Words changed

The head of the page:

19. `about`, last clause. Old: "Rilke later called it the first result
    of his schooling to work before nature, in the Jardin des Plantes."
    New: "Rilke later called it the first result, in the Jardin des
    Plantes, of being schooled to work before nature." The place hung
    at the end, where it read as the place of nature or of the
    schooling; "his schooling to work" is not English. Nothing added:
    89 words, as before.

First passage, tab "German":

20. `caption`, first two sentences. Old: "With the English is Rilke’s
    German. The build of the sentence is his." New: "The build of the
    sentence is Rilke’s." Padding in a mannered order: the column is
    headed "Rilke's German" and the tab is called German.
21. Remark 1 (`ties[0].say`), second sentence cut. Old: "What is
    thought back to follows the small word [German word], as it follows
    [English word] in the English." It read wrong at "to follows", and
    remark 2 and the caption both say the same thing.
22. Remark 3 (`ties[2].say`). Old: "This is the first of three." New:
    "The word comes three times, and this is the first." It did not say
    three of what.

Second passage, tab "Sentence":

23. `caption`, second sentence. Old: "puts its condition first". New:
    "begins with its condition". "First" ended two clauses running
    ("come first", "its condition first").

Second passage, tab "Word":

24. `caption`, first sentence. Old: "With the English is Rilke’s German
    for the last sentence." New: "Rilke’s German is printed for the
    last sentence." The same mannered order as item 20. Here the
    sentence stays, because it says how much of the German is shown.
25. `caption`, fourth sentence, cut. Old: "So the last thing said to
    fall short is memory itself." It repeats the second sentence ("the
    third time of the memories themselves") and closes it as a saying.
    With it gone the next sentence needed its bearings. Old: "turns
    that sentence around". New: "turns that third sentence around". The
    `why` and the `stands` of the tab still fit; neither leaned on the
    sentence cut.
26. Note 4 (`notes[3].note`). Old: "Grimm’s dictionary gives its first
    sense as a flash of light and a later one as the light of the eye".
    New: "In Grimm’s German dictionary the first sense of [the German
    noun, marked] is a flash of light and a later one the light of the
    eye". The note is printed after the English word in bold, so "its"
    read as that word's; and this is the first place the page names
    Grimm, with nothing to say that the dictionary is a German one.
27. Note 7 (`notes[6].note`). Old: "in old narrative a going often
    follows it, or speaking". New: "in old narrative it is often
    followed by going, or by speaking". A mock-antique turn ("a
    going").

Third passage:

28. Tab "Subjects", `caption`, second sentence. Old: "The poem has it
    twice, in the first stanza, in [two German words], his gaze, and
    [one German word], to him, and never as the subject of a verb."
    New: "The poem has it twice, both times in the first stanza: in
    [the same two], his gaze, and in [the same one], to him. It is
    never the subject of a verb." Two "in"s of different meaning ran
    together; one sentence broken in two. The two words the examiner
    set together in one italic stay together.
29. Tab "Rhyme", `caption`. Old: "ends line 1, comes back inside line 3
    … and returns … in line 4". New: "ends the first line, comes back
    inside the third … and returns … in the fourth". The page numbers
    no lines, and while the English stands under each German line a
    reader who counts printed lines lands on the wrong one. Said of the
    stanza's own lines it holds whichever way the two poems are set.
    (The examiner mended the Beat caption for the same reason.)

The foot of the page:

30. `caveats[1]`. Old: "is not printed beside the English". New: "is
    not printed with the English". On a phone the German stands under
    the English, not beside it.
31. `auden[3].says`. Old: "His later view was cooler. In his inaugural
    lecture at Oxford in 1956 he said … Elsewhere in the same book he
    names". New: "Auden’s later view was cooler. In his inaugural
    lecture at Oxford in 1956, printed in *The Dyer’s Hand*, he said …
    Elsewhere in that book he names". The entry before is about Donald
    Pearce, so "His" read as Pearce's; and "the same book" pointed at a
    book the entry had not named. The book is the one in the entry's
    own `source`; nothing is added to what Auden is said to say.

Added on the second reading:

32. Second passage, tab "Figure", `caption`, third sentence. Old: "The
    list began with what one must [see] and with the [gestures] of
    flowers." New: "The list began, before the first passage here, with
    what one must [see] and with the [gestures] of flowers." A caption
    the page did not bear out: the first passage is headed as a list of
    eleven things, and a reader who looks there for these two words
    does not find them. They stand in the sentence before it (words 137
    and 157 of the paragraph; the first passage begins at word 170).
    The words in brackets are in italics as before.
33. First passage, tab "Sentence", `stands`. Old: "the pair joined by
    the dash as two". New: "with the pair joined by the dash counted as
    two words". It could not be followed; the second Sentence tab says
    it in these words already.
34. Third passage, tab "English", `stands`. Old: "on the genitive after
    a noun made from a verb". New: "on the genitive (the form that says
    *of*) after a noun made from a verb". A term of grammar with no
    plain words beside it. To keep the note under 70 words, "printed
    with the poem in English Wikipedia" became "printed in English
    Wikipedia", as the Rhyme tab's note has it.
35. Third passage, tab "English", remark 6 (`ties[5].say`). Old: "it
    stops being". New: "it ceases to be". The caption over it, and the
    Beat caption, give the same German words as "ceases to be"; one
    gloss for one phrase.

Added after the first set of pictures (the Word tab of the second
passage, where each note is printed after the English word in bold):

36. Note 5 (`notes[4].note`). Old: "Rilke uses the same noun near the
    start of the list". New: "Rilke uses the same noun, [the German
    noun, marked], near the start of the list". After the bold English
    word, "the same noun" and the "its" that follows read as the
    English word's. The German noun is the one meant, and the gloss
    that names it stands across the plate from the note.
37. Note 7 (`notes[6].note`). Old: "Grimm gives this verb". New: "Grimm
    gives the German verb". The same reason.

Thirty-seven items: 18 of marks only, 19 of words (items 19 to 37), of
which three cut a sentence (20, 21, 25).

## 3. What recurs, with counts

Counted in the reading as it now stands.

- **The three "not yet".** The thread that joins the first two passages
  is told in four places: the caption and remark 6 of the tab "German",
  and the caption and note 1 of the tab "Word". Inside the tab "Word"
  the one fact that the memories themselves are not yet it stood five
  times: twice in the caption, in the gloss under the sentence, in note
  1 and in note 2. Item 25 took out one. The other four each do a
  different job (the caption tells it, the gloss marks the place, note
  1 gives all three steps, note 2 gives Rilke's words), and I left
  them.
- **"With the English is Rilke's German".** Twice, at the head of the
  two tabs that set the German against the English. Both mended (items
  20 and 24).
- **"So" at the head of a sentence that sums up.** Twice (first
  passage, "Figure"; second passage, "Word"). One cut (item 25); one
  left (see 4.2).
- **"the English has".** Three times running in the caption of the tab
  "English", and again in remarks 4 and 5, with "the English gives" in
  the caption and in remark 3. Three sentences built alike is fault 7
  on my list. Left: the poem itself has the three cases side by side,
  and the like build is what lets a reader compare them.
- **Grimm at the head of a clause.** Four notes in a row on the tab
  "Word" (4 to 7): "Grimm's dictionary gives", "Grimm gives", "Grimm
  derives", "Grimm gives". It is a list of dictionary notes and reads
  as one. Note 4 now opens otherwise (item 26); three are left.
- **"Handbooks … call".** Twice, once for each of the two terms (loose,
  periodic). The method.
- **"by turns".** Three times on the poem (Beat, Rhyme, English), each
  time for one thing after another in alternation. The plain word, and
  left.
- **"this book" not named, or not found.** Four times: the head of
  what Auden said, the entries of 1939 and of Pearce in the list, and
  the first caveat. Each stands in a different part of the page and
  each is needed there; a reader who goes through the whole page meets
  it four times. Left.
- **Captions that close on Auden.** Two of ten (the first Sentence tab
  ends on his verb; the second Figure tab ends one sentence after his
  review). Not a tic.
- **Stock words, dashes, "we", questions, "not X but Y".** None found.
  The checker's list of stock words and of claims of feeling finds
  nothing, before my changes or after. "Physical, not intellectual" in
  the second Figure caption is Auden's own contrast, reported.
- **Terms of the trade.** Loose, periodic, climax, metaphor, the
  measure and rising are each said in plain words where they first
  come. The one I found bare was "genitive", in a note at the foot
  (item 34).

## 4. Sentences doubted and not changed

For the lead. None of these is a fact I checked; each is a matter of
how the sentence reads.

1. **Third passage, tab "Rhyme": three sentences that only name.** The
   first three sentences of the caption say what is there and give no
   reason for it: the rhymes go a b a b; two lines of each stanza rhyme
   on two syllables and two on one; the poem's last word has the sound
   of its first. The tab pays in its last two sentences (the word for
   bars three times, and what the stanza says of bars). The sentence on
   the first and last word is the one I would cut if the caption is to
   hold only what it gives a reason for. The examiner kept it as a bare
   fact and left out the one critic's reading of it (exam.md, 6,
   Rhyme). It does not pose, pad or pronounce, so it was not mine to
   cut.
2. **First passage, tab "Figure", last sentence** (the one that begins
   "So the" and ends on the stars). A closing sentence with a turn of
   phrase. Left: it is the tab's reason, and it says only what the
   sentence itself does, which calls "all this" not enough just after
   the list has reached the stars.
3. **Third passage, tab "Subjects", last sentence** ("In the notebook
   Malte writes that he is learning to see."). A short sentence set at
   the end, which leaves the reader to join it to the poem. Left: it is
   what ties the poem to the two prose passages, it is in the text, and
   it draws no conclusion.
4. **Second passage, tab "Sentence", last sentence**, and **first
   passage, tab "German"** ("the word stays, and what it covers
   grows"). Two balanced pairs. Left: in each the pair is in the matter
   (the passage's own "must" and "can"; one noun and three sizes of
   sea), and each is the reason its tab arrives at.
5. **Second passage, tab "Figure", last sentence** ("This prose
   sentence does it too, with memories."). "It" has to reach back over
   a clause to "saying abstract ideas concretely". And the step from
   what Auden said of the poems to a sentence of the novel is the
   page's own. The examiner cut the caption back to what the review
   bears out (exam.md, 5), and I left his wording.
6. **Second passage, tab "Word": three notes that stop short.** Notes
   4, 5 and 7 give a dictionary's senses of three German words and do
   not say what the sense does in this sentence. Note 7 is the one that
   comes nearest: Grimm says that in old narrative standing up is often
   followed by going or by speaking, and Rilke's sentence has the word
   stand up and then go out (German words 374 and 381; English 434 and
   439 to 440). The note does not say so, and I may not add it. One
   clause would turn that note from a gloss into a reason.
7. **Second passage, tabs "Sentence" and "Word": words that are not on
   the page.** The Sentence caption counts from the three words "a
   single verse", and the Word caption says where the English has
   "verse". Those words stand before the first passage shown. Left:
   the title of the page and the summary under "The passages" both
   tell the reader that the paragraph is about a single line of verse,
   and the folded note links to the whole paragraph. On the tab
   "Figure" nothing prepared it, and there I said where (item 32).
8. **What Auden said, at the head: Herbert Read comes bare.** Nothing
   says who he is. "The critic" before his name would do, and the
   paraphrase has room (70 words of 75). I may not add a fact, so it is
   left.
9. **The poem's title in italics.** In the line under the title, in
   two entries of the sources and in two caveats the title of the poem
   stands between asterisks. By the rule under "Titles" a short poem
   takes quotation marks. The examiner set the asterisks, a German
   title among English words is commonly set so, and in the one small
   note that names the poem the rule asks for asterisks anyway (item
   11). Left as it is, all of a piece.
10. **Dictionary entries left bare.** In the notes at the foot and in
    the sources the German words named as entries of a dictionary
    (ten of them) and the three figures named as entries of the
    handbook of rhetoric stand in plain type, while the note for the
    tab "English" sets two German items in italics. They are not among
    the fields I am told to mark. Uneven, and harmless.
11. **The last entry of the list** (Auden's later view). See section 5.

## 5. The list under "More from Auden"

Four entries, and all four stay. Nothing was taken out, so nothing was
written in `notes.md` and no entry of `sources` was touched.

1. The review of 1939 stays: the caption of the second Figure tab
   leans on it, and it is his fullest account of how Rilke's poems
   think.
2. *New Year Letter* stays: it is of 1941, the year of the course.
3. Pearce stays: it is the one trace of Rilke in the classroom of 1941.
4. The later view (1956 and 1962) is the one the rule might send out:
   two short places in essays on other things. I kept it, as the
   examiner did, for three reasons. It is not a second telling of
   anything else on the page. It bears on what the passages show: in
   1936 he praised Rilke for the things seen and heard that a poem
   needs, and here he names him among the poets who count the visible
   world as nothing. And without it the page gives only his praise,
   which is not the whole of what he said. Four entries is also well
   under the eight at which CRITIC.md asks whether each would be
   missed. The lead may still think otherwise; nothing leans on it.

No entry says the same thing as another. The marks set in the list are
items 16 to 18; the one change of wording there is item 31.

## 6. What on the page got in the way of reading

The words only. Where a line turns, where a gloss, a label or a caption
stands, how tall a passage is on a phone and how a rhyme is drawn are
in the artist's report, and by the lead's word I add nothing to them.

- **The notes of the tab "Word".** Each note is printed after the
  English word in bold, and five of the seven are about the German
  word. Before the marks a reader could not tell which word a note was
  about. With the German now upright, and three notes reworded (items
  26, 36, 37), each note says which word it means.
- **The two kinds of italic in the caption of the tab "English".** The
  caption sets in italics both what the German says, in the page's own
  English, and Lemont's words. The sentence each stands in says which
  is which ("the English has"), so I left them.
- Nothing else in the order of the page stopped me. The list from
  Auden runs by date, and the caveats say what a reader should know
  before trusting the page.

## 7. The pictures, and what was refused

- The picture tool was run twice and no more: at 12:28 UTC, after the
  first 35 items, and at 12:32 UTC, after the last two. Both ended
  "nothing reported; now look at the pictures". Each run wrote the
  tabs and the whole page at 1280 and 390 over the artist's pictures of
  the same names in `shots/`. The pictures at 360 and 320 there, and
  everything in `shots/close/` and `shots/proposed/`, are still the
  artist's, taken before my changes.
- Seen in the last pictures: the brackets in the line under the title
  upright with the second title; the German words upright in the six
  remarks of the tab "German", in the glosses and notes of the tab
  "Word" and in remarks 1, 4 and 5 of the tab "English"; the titles
  and the German words in italics in the list from Auden.
- The reading last changed at 12:29:41 UTC and was built at 12:31:58;
  the last pictures are of that build.
- The permission system refused nothing. Once, on my first command, it
  answered that it could not judge the command for the moment and said
  to try again; the same command ran the second time.
- I did not set or change any `turn`, `join`, `heading`, `speakers` or
  `beside`, any tab's `label`, any mark, quotation, number, name, page
  reference, `grounds` or `checked`. (Item 29 writes three line
  numbers as words and changes none of them.) The checker's proof
  before and after differs only in the six glosses that now carry
  asterisks.

## 8. The checker at the end

`node build/tools/check-reading.mjs rilke --print`, last three lines:

    no problems
    no warnings
    the printed notes are fit to print

It printed no warning before my changes or after, so there was no
flagged sentence to read beyond the ones above.
