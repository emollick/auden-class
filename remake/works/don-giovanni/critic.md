# The critic's report: don-giovanni

3 October 2026, begun 12:58 UTC. Written in parts as the work went; the
summary (section 0) was filled in last.

Words of the libretto and of the English beside it are pointed at by
passage, row and word number, as `node build/tools/check-reading.mjs
don-giovanni` prints them (the first word of a row is 0). "Old" and
"new" below are the site's own sentences. Where an old or new sentence
holds a word or phrase of either libretto, it is given as its row and
words in square brackets and is not typed out. Nothing of Auden's is
quoted.

## 0. Summary

**What was done.** 39 numbered changes to `reading.json` (section 2).
By count, 48 sentences were reworded, joined to a neighbor or cut
(three cut outright), 23 more were given marks and nothing else, one
was moved, and one entry came out of the list of what Auden said,
which now has eleven. Captions run from 99 to 110 words. The checker
ends: no problems, no warnings, the printed notes are fit to print.

**The faults that came up most.**

1. A tic: "The dictionary gives ..." opening a small note, in 14 of
   22 notes as found, 9 now.
2. Words named as words, Italian headwords and one title left bare:
   23 sentences marked, in notes, remarks, `stands`, `sources`,
   `where` and the first caveat.
3. A short sentence that announces the next or says the last again:
   five, all in captions, all gone.
4. "His" and "hers" with no name, in three captions of the duet.
5. A term of the trade ("couplet") used in three places before the
   one place that explains it.
6. Small slips of wording: a sentence begun with a small letter
   (twice), a possessive left hanging (twice), a working word ("the
   tie"), "sit against", "then" with no time to point at.

I found no caption that pronounces. Each goes from something marked
in the lines to Auden’s word or the text’s.

**For the lead to decide.**

1. `view.says` says what the quotation over it says, and its fourth
   sentence joins two unlike things with a colon (section 5). `view`
   is not mine.
2. The entry with the quotation is now the **fourth** of eleven.
3. Change 35 put "before Wagner" where the fourth caveat had "then".
   It is the list’s own phrase, but it is a name where there was
   none. Put it back if that is more than wording.
4. The list is still at eleven. The entry on “Postscript: Infernal
   Science” is the one no tab stands on (section 4).
5. When the singers’ names are lifted from the duet: the gloss "both
   together" stands on the direction and will lose its word, and the
   slip the first caveat names may no longer be on the page. Words
   that hold either way are in section 6.
6. On the close, no printed sentence speaks of a stroke (section 7).
   The last sentence of remark 2 in the Beat tab of the count should
   go once the arc there is drawn on the right side.
7. Close, Figure: "quotes these three lines for the end" claims a
   little more than its ground; plainer words are in section 5.
8. One clause of Auden’s is paraphrased in the same words three
   times (sections 3 and 5).
9. The artist’s two proposals (`join` on the Figure tab of the close,
   `speakers` on the duet) are untouched, and nothing I wrote depends
   on either.

## 1. How the page was read

- `node build/pieces.mjs don-giovanni` and `node build/tools/prose.mjs
  don-giovanni` at 13:00 UTC. The checker as I found the piece: no
  problems, no warnings, the printed notes fit to print.
- The picture tool was not run at the start. The 125 pictures in
  `shots/` were the artist's of 12:42 to 12:48, taken after the last
  change to the reading (11:20), to the kit (11:05) and to the page
  script (10:33), and the build of 13:00 wrote a file of the same size
  to the byte as the build of 12:42. So they showed the page as it
  stood. I read the seven slices of the whole page at 1280 from the
  top, then each of the twelve tabs at 1280, and one slice of the page
  at 390.
- `review/remake/prose/don-giovanni.md` (632 lines) was read once
  through before anything was marked, then sentence by sentence.
- Beside it: `reading.json` whole (every printed string, and every
  `why`, `grounds`, `checked` and `open`), `exam.md`, `art.md` (all of
  it), the kit's README on the small notes, `site/js/piece.js` and the
  kit's lenses for where `*x*` is honored, and the proof the checker
  prints.
- The picture tool was run twice, the most allowed: after the main
  changes and again at the very end (section 8).

Where the page honors `*x*` (read in the code, not changed): `where`,
`about`, every `says` and `source`, `sources`, `stands`, `caveats`, the
`say` of a remark, the `note` and the `gloss` of a word. In `where`, in
a `source` line and in the small notes (remarks, notes and glosses),
which are italic themselves, `*x*` stands upright; in the others it is
italic. A caption is set as it is written: only `<b>` and `<i>` work there, an
asterisk would print, and the kit lights in the passage any word a
caption names in bold or italic. So nothing was marked inside a
caption.

## 2. Every change

Each entry: where, the old words, the new words (or "cut"), the fault.
All were made as small exact edits to `reading.json` (the Edit tool, or
`build/tools/edit-exact.py` with the edits kept in `critic/`); the
checker was run after each batch. No `turn`, `join`, `heading`,
`speakers`, `beside`, tab `label`, passage label, mark, tag, key label,
`grounds`, `facts`, `why` or quotation was touched, and no number, name
or page reference that stood there was changed. Counts of words in a
caption are mine, with the marks for bold
taken out.

### The head of the page

1. `where`. Old: "Don Giovanni, Act 1". New: "*Don Giovanni*, Act 1".
   The title of the opera is marked. The line is italic, so the title
   now stands upright in it, as the titles in the source lines do.
2. `about`. Old: "Later the Don comes on a peasant wedding". New:
   "Later the Don comes upon a peasant wedding". "Comes on" made me
   read it as an actor's entrance before I read it as finding.

`view` was not touched: see section 5.

### Passage 1, the catalogue: the count

3. Beat, caption. Old: "There, only [row 4.3, word 4], already, takes
   an accent that is neither country nor figure." New: "... takes an
   accent and is neither country nor figure." It is the word that is
   neither a country nor a figure, not the accent. 107 words.
4. Beat, remark 2 (row 1.0, words 3 and 4). Old: "The verb is stressed
   on its last syllable, the sixth of the line. The article after it
   begins with a vowel and is counted with that syllable. The mark of
   the tie is drawn after the article, and belongs before it." New:
   the same, with the verb and the article each followed by the word
   itself between asterisks (word 3, word 4), and the last sentence
   "The arc that marks this is drawn after the article, and belongs
   before it." Two faults. A reader with no Italian could not tell
   which word is the verb, and the number of the remark stands on the
   article. And "the tie" is a working word: the key under the caption
   calls the mark "a syllable that is not counted" and never a tie.
   The sentence is still the last of the remark, so the examiner's
   note in `open` (it goes when the kit can tie backward) still holds.
5. Words, caption. Old: "[row 4.3, word 4], already, gives the last
   total as the count so far." New: "The word [row 4.3, word 4],
   already, gives the last total as the count so far." The sentence
   began with a small letter, which reads as a slip. 106 words.
6. Words, note on row 0.0 word 0. The Italian word the pet form comes
   from is now between asterisks (the artist's point 2). No word
   changed.
7. Words, note on row 0.0 word 2. Old: "The dictionary gives it as an
   ordered list of objects of one kind, such as books, works of art or
   goods, and as the book or register that holds the list." New: "The
   dictionary also gives it for the book or register that holds such a
   list." Padding: all but the last clause was the caption's first
   sentence over again, a few lines higher. What the note alone tells
   is kept. The note's `source` (senses 1a and 1b) is as it was.
8. Words, note on row 1.0 words 0 and 1. Old: "... which the
   dictionary gives for a beautiful woman and for a sweetheart, and it
   is plural." New: the same without ", and it is plural". The caption
   says "in the plural" in the sentence that names the word, and the
   gloss under the word is plural.
9. Words, note on row 2.0 words 4 to 6. Old: "Italian can leave the
   word for I unsaid." New: "... the word for *I* unsaid." In the
   italic of the note the bare letter read as the pronoun of the
   sentence. No word changed.
10. Words, note on row 4.3 words 3 and 4. Old: "The dictionary says the
    adverb marks a fact as accomplished ..." New: "The adverb marks a
    fact as accomplished ..." A frame that had become a tic (section
    3). The caption's `stands` still names the dictionary under this
    word.
11. English, caption. Old: "The Italian figures do not agree either.
    They come to 2,065, and earlier in the scene Leporello says
    eighteen hundred." New: the two joined by a colon. "Either" had
    nothing to answer until the next sentence said what disagrees with
    what. 108 words.

### Passage 2, the catalogue: the close

12. Words, caption. Old: "The first two lines give a reason. He wins
    old women for the [row 7.1, word 1], the pleasure, of putting them
    on the [row 7.1, word 5], the list. [row 7.0, word 3], conquest,
    is a word of war, used also of love. The pleasure named is the
    listing itself. Auden says as much: ..." New: "The noun [row 7.0,
    word 3], conquest, is a word of war, used also of love. The first
    two lines give the Don’s reason for winning old women: the [row
    7.1, word 1], the pleasure, of putting them on the [row 7.1, word
    5], the list. Auden says as much: ..." Three faults. "The first two
    lines give a reason" announced the sentence after it. A sentence
    began with a small letter. "The pleasure named is the listing
    itself" said the second sentence over again for weight; it is cut,
    and "Auden says as much" now follows the lines it answers. The
    word of war comes first because it stands first in the passage.
    Nothing is added. `why` and `stands` fit as they were. 99 words.
13. Words, note on row 8.0. "the word for but" and "the word for his"
    are now "the word for *but*" and "the word for *his*": in the
    italic of the note the two small words ran into the sentence.
14. Words, note on row 8.1. Old: "The dictionary gives the noun for
    someone at the start of learning an art or a trade, and the first
    word is printed here without the accent that makes it the word for
    is." New: "The noun names someone at the start of learning an art
    or a trade. The first word is printed here without the accent that
    makes it the word for *is*." Two unlike things (a sense, a slip of
    the printer) were joined by "and"; the frame is the tic of section
    3; and the sentence ended on a bare "is".
15. Words, note on row 9.3. Old: "The line is this printing’s." New:
    "The line is this printing’s own." A possessive left hanging; the
    remark on the same line in the English tab already says "own".
16. Rhyme, caption. The sentence "Auden writes that Leporello keeps
    the list and the Don only tells him the newest name" stood last,
    after the rhyme inside the line and the last line's rhyme, which
    it does not bear on. It now follows the sentence it answers
    ("Leporello has made this rhyme before, asking his master about a
    new conquest so as to put her on the list"). No word changed. The
    caption now ends on what the last mark shows. 106 words.
17. English, caption. Old: "Here it drops the list. Where the Italian
    says he wins old women for the pleasure of listing them, the
    English says that old and young own [row p:244.8, words 1 to 5]."
    New: "Where the Italian says he wins old women for the pleasure of
    listing them, the English has no list: it says that old and young
    own [the same words]." "Here" pointed at nothing: the sentence
    before is about the last lines, and this one about the first two.
    It was a signpost for the sentence after it. 107 words.
18. English, remarks 1, 4 and 5. The words named as words are between
    asterisks: in remark 1 the two pairs the English has (row p:244.7,
    words 4 to 6 and 0 to 2); in remark 4 the word dropped and the four
    added; in remark 5 the three adjectives. No word changed. Remarks
    3 and 6 speak of things ("the skirt", "a petticoat") and are left.

### Passage 3, the duet

19. Rhyme, caption. Old: "His four lines rhyme by turns, and so do
    hers, on new sounds. She has a stanza of her own. Then come four
    single lines, and each of hers rhymes with his line before it:
    [...]. She now completes his couplets. The last three lines ..."
    New: "The Don’s four lines rhyme by turns, and so do Zerlina’s, on
    new sounds. Then come four single lines, and each of hers rhymes
    with his line before it: [...]. The last three lines ..." This is
    the tab that opens first, the Italian puts no name on the first
    four lines, and the English calls the man by another name, so "his"
    and "hers" are now names once. The two short sentences are cut:
    each said what the sentence before it had said, and the sentence
    near the end ("Her part goes from a stanza of her own to half of
    his couplet to a shared line") says both again. `why` fits as it
    was. 98 words then; 100 after change 38.
20. Rhyme, `stands`. Old: "The marks on the passage, and the names
    printed before the lines." New: "The marks on the passage, and the
    singers’ names in the Italian." See section 6.
21. Voices, caption. Old: "Six of his seven verbs ... Three of her
    eight verbs ... each one a state of passion and will." New: "Six
    of the Don’s seven verbs ... Three of Zerlina’s eight verbs ...
    each a state of passion and will." The names once, as in 19; "one"
    went to keep the caption at 110 words.
22. Words, four notes. Row 1.0 word 0, old: "The dictionary gives the
    adverb for a place away from both the speaker and the hearer."
    New: "An adverb for a place away from both the speaker and the
    hearer." Row 1.3 words 3 and 4, old: "The dictionary gives the
    adverb for the place where the speaker is." New: "The second word
    is an adverb for the place where the speaker is." Row 4.2, old:
    "The dictionary gives the adjective first for ..." New: "The
    adjective is given first for ..." All three: the tic of section 3.
    Row 1.1 words 1 to 4, old: "The dictionary gives this word as the
    one that declares the will to marry ..." New: "The dictionary
    gives the last word as ..." The note stands on four words and did
    not say which.
23. English, caption. Old: "The English keeps the hand, the yes and
    her doubt. In the Italian Masetto moves her to pity. In the
    English he [row p:363.0, words 1 to 3]. In the Italian she says
    quick, or soon, and that she is no longer strong. In the English
    she yields to [row p:367.0, word 4]." New: "... and Zerlina’s
    doubt. In the Italian Masetto moves her to pity; in the English he
    [...]. In the Italian she says quick, or soon, and that she is no
    longer strong; in the English she yields to [...]." Four sentences
    built alike in a row are now two, each holding its pair. 107 words.
24. English, remarks 6 and 7. The three words of the English named as
    words (the rhyme word of row p:363.0, and the last words but one
    of rows p:365.0 and p:367.0) are between asterisks. No word
    changed.

### More from Auden

25. First entry. Old: "Auden heads his pages on the pair with two
    lines ..." New: "Auden heads his pages on the Don and Leporello
    with two lines ..." This is the first sentence under the heading,
    and "the pair" had nothing near it to point at.
26. Second entry. Old: "The Don, by contrast, must be staged so that
    nobody would pick him out." New: "The Don must be staged so that
    nobody would pick him out." The sentence before opens "Auden sets
    the Don against the Duke", so the signpost said it twice.
27. Third entry. Old: "Don Juan should look like a man nobody notices.
    What matters to him about a woman is only that she is one. What
    makes the myth foreign to the Greeks is the list." New: "Don Juan
    should look like a man nobody notices, and what matters to him
    about a woman is only that she is one. The list is what makes the
    myth foreign to the Greeks." Two sentences built alike, side by
    side, in a run of five short ones.
28. The entry with the quotation. Old: "In a note on the Devil, Auden
    takes the catalogue as his measure." New: "In a note on the Devil,
    Auden uses the catalogue for a comparison." A vague figure where a
    plain word would do; the quotation over the entry is the
    comparison.
29. One entry taken out: section 4.

### Sources, what each caption stands on, the caveats

30. `sources`. “The Prince’s Dog,” pp. 183–84, is out of the entry for
    *The Dyer’s Hand*: nothing on the page uses it now (section 4).
31. Marks only, no word changed. In `sources`: the three headwords of
    the grammar, the two headwords of the two encyclopedias (one of
    them twice), and the title *Silva Rhetoricae*. In `stands`: the
    same title (Figure tab of the close), and the Italian headwords
    after "under" in seven places (Beat, Rhyme and Words of the count;
    Rhyme of the close; Rhyme and Voices of the duet). The words
    glossed were already marked there; the headwords beside them were
    bare. The model in EXAMINER.md marks *Silva Rhetoricae*, and the
    pieces on Dante, *Carmen* and *Phèdre* mark their headwords.
    "Mozart" is a name and "anaphora" is the English term: both bare.
32. First caveat. The slip of the printing named as a slip, and the
    two small words named as words ("begins with *but* where the
    Italian printed with the English has *his*"), are between
    asterisks. Without them "begins with but where" could not be read
    at first sight. No word changed. See also section 6.
33. Second caveat. Old: "The stanza breaks are this page’s, set by the
    rhymes." New: "The stanza breaks were made for this page and
    follow the rhymes." A possessive left hanging before a comma.
34. Third caveat. Old: "Two places in the act sit against Auden’s
    account." New: "Two places in the act go against Auden’s
    account." "Sit against" is not an English idiom I know; BRIEF.md
    itself says "goes against Auden".
35. Fourth caveat. Old: "He held that opera verse was then a
    convention, heard as syllables, so the close reading is this
    page’s own." New: "He held that opera verse before Wagner was a
    convention, heard as syllables, ..." "Then" had no time to point
    at: the sentence before it is about the legend. "Before Wagner" is
    the list’s own phrase, in the entry on “Translating Opera
    Libretti” (p. 493), which says "before Wagner and the Verdi of the
    middle years". 50 words, the checker’s limit. This is the one
    change that puts a name where there was none. If the lead thinks
    it more than wording, the old sentence goes back as it was; "in
    Mozart’s day" would be plainer still but makes 51 words.

### One term, used before the page explains it

"Couplet" is explained once, in the caption of the Rhyme tab of the
close ("two couplets, pairs of rhymed lines"). It was used in three
other places a reader can reach first, or without that tab. The Rhyme
tab keeps the word and its explanation; `why`, `grounds` and `stands`
were not touched.

36. Close, Words, note on row 7.0 words 2 and 3. Old: "... and it
    quotes this couplet." New: "... and it quotes this line and the
    next." Words is the first tab of the passage, so the term came
    before its explanation. The `stands` of the same tab says the
    dictionary quotes four of these lines; the note says only what it
    said, that the two are among them.
37. Close, English, caption. Old: "That Italian couplet names what
    Auden says satisfies the Don: one more name on the list." New:
    "Those two Italian lines name what Auden says satisfies the Don:
    one more name on the list." The same term, in a tab that can be
    opened without the Rhyme tab. 108 words.
38. Duet, Rhyme, caption. Old: "Her part goes from a stanza of her own
    to half of his couplet to a shared line." New: "Her part goes
    from a stanza of her own to the answering half of his rhyme to a
    shared line." The term is not explained anywhere on this passage,
    and the pair of lines is not his: he sings one line of it and she
    the other. "Answering" is the caption’s own verb two sentences
    higher ("[her rhyme word] answers [his]"). 100 words.

### A word and its gloss that are the same word

39. Count, Rhyme, caption. Old: "The two short lines rhyme across the
    gap: [row 3.0, last word], me, with [row 4.3, last word], three."
    New: "... across the gap: [the first] with [the second], me with
    three." The Italian word and its English are the same two letters,
    so the page printed the word twice with a comma between, and it
    read as a stutter (it fell at a line end at 1280). The new order
    is the page’s own in the Rhyme caption of the close ("rhymes [one
    word] with [another], conquest with list"). 109 words.

After these the checker printed no problems, no warnings, and that
the printed notes are fit to print. The piece was built again and the
prose file written again, and I read the prose once more from the
top: 626 lines, 5,216 words.

By count (`critic/changed.mjs`, the reading as found against the
reading now): 50 printed strings differ. In them 48 sentences were
reworded, joined to a neighbor or cut (three cut outright, in changes
12 and 19), 23 more were given marks and no other change, one was
moved (change 16), and one entry of four sentences left the list.
The script counts the old sentences, so two joined into one count as
two.

## 3. What recurs, with counts

Counts are of what the page prints (`critic/recur.mjs` and
`critic/count.mjs`), as found and now.

- **"The dictionary gives ..."** as the opening of a small note. As
  found, 14 of the 22 word notes named the dictionary, and "the
  dictionary" stood 15 times in the printed text. Now 9 notes and 10
  times. I took the frame off where the note states a plain sense and
  the `stands` of the tab already names the dictionary (changes 10,
  14, 22). It stays where the dictionary’s ordering or its example is
  the point (first sense and second, the lines it quotes, the phrase
  it records).
- **A caption that ends on a sentence about Auden.** 9 of 12 as
  found, 8 of 12 now (change 16 moved one to where it bears). Every
  caption has at least one such sentence, 16 in all, because every
  tab must be tied to him. I count this as the method of the page and
  not as a fault, but eight endings alike are still heard by the
  third passage. Where the Auden sentence is the point the caption
  has been building to, it was left last. The one I moved stood last
  though it answers the caption’s third sentence.
- **One sentence of Auden’s paraphrased in the same words three
  times**: "any fondness would make a name of a number on the list"
  (Words caption of the count, English caption of the close, the
  entry on “Don Juan”). Not changed: section 5.
- **Who keeps the list**: 7 times (the head twice, the Rhyme captions
  of the count and the close and their `stands`, the first entry).
  **One more name / one name longer**: 4 times (the head twice, the
  Words and English captions of the close). Each stands where it is
  used, but the head has already said both, in the quotation and
  again in the paraphrase under it.
- **"Auden, writing of the legend" / "the Don Juan of legend"**: 7
  times (five captions, two entries). The examiner put these frames
  in, to keep the legend apart from the opera. They are needed where
  they stand. The fourth caveat says it once for the page.
- **"this printing"** 6 times and **"the Italian printed with the
  English"** 6 times, in the notes and remarks of the close, the
  Voices tab of the duet, one `stands` and the first caveat. They are
  the page’s two names for its two Italian
  texts, and they are only explained in the first caveat and in the
  sources, at the foot. A reader of a small note meets them cold. I
  found no shorter name that is as exact, and left them.
- **"the word for ..."** in place of an Italian word: 7 times. Left:
  it is how the page speaks of a word it does not print.
- **A sentence that begins with a small letter** because it begins
  with a word of the passage in bold: twice as found (changes 5 and
  12), none now.
- **A possessive left hanging** ("this printing’s.", "this page’s,"):
  twice as found (changes 15 and 33), none now. "This page’s own" in
  the fourth caveat is whole and stays.
- **"his" and "hers" with no name in the caption**: three captions
  of the duet as found (changes 19, 21, 23), each now with the names
  once.
- **Words named as words, foreign words and titles not marked**: 23
  sentences were given marks and nothing else, in `where`, small
  notes, remarks, `stands`, `sources` and the first caveat (changes
  1, 6, 9, 13, 18, 24, 31, 32). Two more got marks along with other
  changes (4 and 14).
- **A short sentence that announces the next one or says the last
  one again**: five as found, all in captions (two in change 12, one
  in 17, two in 19). None of those is left. One sentence of the kind
  stays: the last but one of the duet’s Rhyme caption (change 38)
  sums up the three before it, and the caption’s `why` rests on it.
- **"is kept" / "the English keeps"** in the English tabs: 11 times.
  It is the plain verb for the job. Left.
- "arithmetical": 4 as found, 3 now (the entry taken out had one).
  "stamps": 3, unchanged, two of them in the head and its echo in the
  Words caption of the count.

## 4. The list of what Auden said

The list had twelve entries. It has eleven.

**Taken out: the entry from “The Prince’s Dog,” *The Dyer’s Hand*,
pp. 183–84** (it stood fourth). It is whole at the end of `notes.md`,
under "Taken out of the list of what Auden said", with its `says`,
`source` and `checked`. It had no `quote`. Why:

- Nothing leans on it. No caption, no `grounds` item, no `stands` and
  no caveat cites those pages. The examiner had already taken the
  Words tab of the duet off Auden’s sentence about time on p. 184
  (the record of that is in `open`, which is not printed and which I
  left as it was).
- It bears least of the twelve on the passages shown. It says four
  things: that the Don’s true home is music; that he cannot be
  imagined before the list had a name on it; that time for him is an
  endless series of moments, ended only from outside; and that his
  going down to hell must be shown on stage. The page shows the
  catalogue and the duet. None of the twelve tabs touches music as
  his home, time, or the end of the opera. Only the second of the
  four touches the list, and the first entry says that more plainly
  (without the list the Don would have no reason for being).
- It was not said in 1941, and it is from an essay on Falstaff, where
  the Don comes in beside Tristan and Isolde as a comparison.
- Its matter of time is said in two entries that stay: the endless
  series and time as his enemy in the entry on “The Greeks and Us”,
  and time as an evil to be destroyed in the review of June 1941. So
  it was one of three entries saying nearly the same thing. What the
  page loses with it and has nowhere else: music as the Don’s home,
  and the descent to hell. If the lead wants either back, the entry
  is whole in `notes.md`.

In `sources`, “The Prince’s Dog,” pp. 183–84, came out of the line
for *The Dyer’s Hand* (change 30). The entry after it opens "In a
note on the Devil" and its `source` gives the book in full, so it
needed no name put back.

**The entry with the quotation is now the fourth**, not the fifth.
I did not touch its `quote`.

**The eleven that stay**, asked one by one whether the page would
miss them, since eleven is above eight:

1. “Balaam and His Ass,” pp. 118 and 120. The Rhyme tabs of the
   count and the close stand on p. 120. Stays.
2. “Balaam and His Ass,” pp. 119 and 121. The Figure tab of the close
   stands on p. 121, and the head and five tabs on p. 119. Stays.
3. “The Greeks and Us.” Three tabs stand on it (Words and Figure of
   the close, Rhyme of the duet). Stays.
4. “Postscript: Infernal Science,” p. 274. No tab cites it. It bears
   on a passage shown: Auden takes the last total of the count and
   makes a name of it, and numbers and names are what the first
   passage is about. It is also the only place in the list where his
   own words are printed. I
   kept it. It is the one the page could most easily lose, and the
   lead may weigh it.
5. “Don Juan,” p. 392. Two tabs stand on it. Stays.
6. *The Enchafèd Flood*, p. 107. The Words tab of the duet stands on
   it. Stays.
7. “Notes on Music and Opera,” pp. 469–70. The Voices tab of the
   duet stands on p. 470. Stays.
8. The same essay, p. 473. No tab cites it, but the fourth caveat
   rests on it ("heard as syllables"), and it is what tells the
   reader that
   Auden would have doubted a close reading of a libretto. Stays.
9. “Translating Opera Libretti.” The English tabs of the count and
   the duet and the second caveat stand on it. Stays.
10. “Eros and Agape,” June 1941. Said in 1941. Stays.
11. Donald Pearce on the interview. The work as Auden taught it.
    Stays.

The list is still long: about 900 words in eleven entries (103, 77,
103, 53, 107, 80, 101, 60, 93, 85, 38). Entries 7 and 8 are from one
essay and could be one entry, but together they run to 161 words and
the checker allows 110. Entries 2, 3 and 6 each say that the women’s
looks make no difference to him, in three books, and entries 2 and 3
both say that he should look like nobody in particular. Each says it
beside something only that entry has, so I took none of them for a
second entry saying the same thing. A reader going down the list
will still hear it three times.

## 5. Sentences I doubt and did not change

**The head (`view`, which is never mine).**

- `view.says`, sentences 2 and 3 ("His pleasure is in the count. What
  satisfies him is one more name on the list, and his servant keeps
  the list.") say what the quotation printed over them says, clause
  by clause. The reader gets the same three things twice at the top
  of the page, and then again in the captions (section 3). The
  paraphrase would do more if it gave what the quotation leaves out.
- `view.says`, sentence 4: "His looks should tell the audience
  nothing: stamps would have done as well as women." The colon makes
  the second half the reason for the first, and it is not: one is
  about how the part is cast, the other about what he collects. Two
  sentences, or "and", would be truer to the two entries below that
  give them at length. For the lead.

**Captions.**

- Count, Beat. The caption’s first sentence and the line "The
  measure", printed right under the caption, say the same thing in
  nearly the same words. Left: the front page can print the measure
  line alone under a specimen, so it has to be whole, and the
  caption’s second sentence ("Two lines stop on the ninth") needs
  the first.
- Close, Figure. "Auden quotes these three lines for the end the Don
  has chosen." "For" is loose: the `grounds` say he quotes them right
  after naming that end. "Auden quotes these three lines after naming
  the end the Don has chosen" is what the ground says and claims
  less, at 111 words (the checker allows 120; the examiner kept to
  110). I did not make it, because it is the examiner’s sentence and
  the change is to what is claimed, not to how it reads.
- Close, English. "the English says that old and young own [row
  p:244.8, words 1 to 5]". "Own" is the libretto’s verb, in an old
  sense, and it stands outside the bold, so it reads as the page’s
  word and as "possess". Marking is not mine; a plain verb would be a
  gloss of the English, which is the examiner’s to pass.
- Close, Rhyme. The last two sentences name rhymes and say nothing of
  what they do. Left: the last of them tells the reader why the last
  line shown has no partner in the passage, which the marks alone do
  not.
- Duet, Voices. The last sentence ("Auden counts Don Giovanni among
  opera’s great roles, each a state of passion and will") arrives
  after six sentences on verb forms with only the word "will" to join
  it to them. The join is in `why`, not in the caption. To make it in
  the caption would be to add a claim, so it stays as the examiner
  passed it.
- Duet, English. Remarks 6 and 8 repeat two sentences of the caption
  nearly word for word, a few lines under it. In all three English
  tabs the remarks say again what the caption says (the thousand and
  three kept with its rhyme; the skirt made a petticoat). It is how
  the tab is built: a remark has to say what its number shows. I
  joined the caption’s four sentences into two (change 23) and left
  the remarks.
- The clause on fondness, three times in the same words (section 3).
  It paraphrases one sentence of Auden’s, on p. 392, and the examiner
  tested these words against it. To vary a paraphrase without the
  page in front of me would risk saying something he did not. If the
  lead wants one of the three varied, the English caption of the
  close can spare it most: its sentence already says he must give up
  love.
- Count, Words. "Auden says that stamps would have served the Don as
  well as women" comes second, between the dictionary on the word for
  catalogue and Leporello’s word for the women. It bears on the first
  sentence (a list of like things), so I left it there.

## 6. The singers’ names on the duet

As the passage stands now, five rows of the Italian begin with a
singer’s short name as word 0 (rows 2.0, 3.0, 3.1, 3.2 and 3.3), and
the first two words of row 4.0 are the direction for both to sing.
The row and word numbers in this file are as they stand today, names
counted. What I found, tab by tab:

- **Nothing printed counts the words or the syllables of those
  rows.** The duet has no Beat tab. The counts in its captions are of
  lines (Rhyme: four, four single, the last three) and of verbs
  (Voices: six of seven, three of eight, the other five). A name is
  not a line and not a verb, so each count leaves the names out as it
  stands. The English caption speaks of rhymes of two syllables, but
  those are words of the English, which already sets its names apart
  from the verse.
- **No mark takes in a name.** No span, note, rhyme end or tie on
  the duet includes word 0 of a name row (checked by script against
  the built data). The marks beside them are numbered from the name,
  though, so their word numbers will move when the names are lifted.
  That is the lead’s, and I say it only so that it is not missed.
- **One count is in a caveat**: the fifth says "The first word of
  Zerlina’s last line can mean quick or soon." Her last line is row
  3.3 and the word meant is word 1 of it today, after the name. So
  the caveat already leaves the name out, and will be true to the
  letter once the name is lifted. Nothing to change.
- **The small notes of the Words tab** say "the last word" (rows 1.1
  and 2.3) and "the second word" (row 1.3); the first and the third
  of these are my wording, change 22. None of these rows has a name,
  and each counts inside the words the note stands on, not along the
  row.
- **Three places do depend on how the names stand.**
  1. Rhyme, `stands`: it said "the names printed before the lines".
     I made it "the singers’ names in the Italian" (change 20), which
     holds wherever the names are set.
  2. Words, the gloss "both together" stands on the direction itself
     (row 4.0, words 0 and 1). If the direction is lifted out of the
     verse with the names, the gloss loses its word. It will need a
     home, or to go. I did not touch it: a gloss on a mark is not
     mine to move.
  3. First caveat: "with its slips, such as [the short name the
     printing gives Zerlina in one row] for Zerlina". If the lead
     prints the names in full, the slip it points at is no longer on
     the page. Words that hold either way, with a slip that stays in
     the verse and that the `grounds` of the Voices tab already
     record: "with its slips, such as a bracket left open." That
     keeps the caveat at 50 words. I did not make it: which slip is
     named is a fact and not mine. (I did put the short name between
     asterisks, change 32, since it is a word named as a word.)
- **The English** calls the first singer by another name than the
  captions do. The artist’s `speakers` proposal would mend that. I
  wrote the names into three captions once each (changes 19, 21, 23)
  so that no caption needs the labels to be understood, and nothing I
  wrote says where or how a name is printed.

## 7. The strokes on the close

I read every printed string of the plate `close` for a word about a
stroke, a line, an arc or a joining of the figure’s places: the four
captions, the figure’s name and its plain words, the five key labels,
the four `stands`, the thirteen glosses and eight notes, the seven
remarks of the English tab, and the caveats.

- **None speaks of one.** The Figure caption speaks of clauses that
  "begin with the same two words", of a quality that "follows each
  time", of all three that "hang on one verb" (grammar, not drawing)
  and of the condition the next word "brings". The key names the colors by what
  they mark. All of it holds with the strokes or without them.
- "Lines" in that caption ("Auden quotes these three lines") are
  lines of verse.
- The only printed sentence on the page about a drawn joining mark is
  in the first passage: the last sentence of remark 2 of the Beat tab
  of the count (change 4), about the arc under a syllable that is not
  counted. It is true of the page as drawn today. It should go when
  the kit draws that arc on the right side, as the examiner’s note in
  `open` already says.

So I have no words to give for the close: nothing there needs them.

## 8. The pictures, and what on the page got in the way

**The pictures.** The picture tool was run twice. The first run, at
13:27 UTC, came after the main body of the changes; changes 36 to 39
were made after it. The second, at 13:46 UTC, was after the last
change, and took 39 seconds. Both ended "nothing
reported; now look at the pictures". The 40 pictures of 13:46 in
`shots/` (the twelve tabs at 1280 and at 390, and the slices of the
whole page at both widths) show the page as I leave it. I read the
seven slices of the page at 1280 from the top again, and the tabs
whose captions changed last. The marks do what was meant: a title or
a headword in an upright note is italic, and a word named in an
italic note or remark stands upright.

- The artist’s pictures at those two widths, which my first run wrote
  over, are kept in `critic/shots-before/` (41 files).
- The artist’s pictures at other widths, and the `try-` and `detail-`
  files, were not touched. They show the page before my changes.
- `don-giovanni-page-390-9.png` is left from the artist’s run. The
  page is one entry shorter now and ends at slice 8.

**No tab only names things.** Each of the twelve leaves the reader
with something about how the lines are made and what that does here.
The nearest to naming is the second half of the Rhyme tab of the
close (section 5).

**What got in the way of reading.** The kit’s faults are the
artist’s report and are not here. These are about words and their
order:

1. The head says its matter twice. The quotation is printed large,
   and the second and third sentences under it give the same three
   things in other words (section 5).
2. The fourth entry of the list. Its quotation is printed above its
   paraphrase and begins in the middle of a sentence, so the reader
   meets a comparison before knowing what is compared. It is only
   clear after the second sentence under it. (The marks inside the
   quotation are with the lead and are not reported here.)
3. Two names the notes use for the two Italian texts ("this
   printing", "the Italian printed with the English") are explained
   only under "Where this page may be wrong" and in the sources.
   Both are at the foot, and the first is folded shut.
4. The line "The measure" says the Beat caption’s first sentence
   again, directly under the caption (section 5).
5. In the duet the English beside the Italian gives the first singer
   a name the captions never use (section 6).
6. The list is long for a reader who wants a little more: eleven
   entries and about 900 words, against about 1,280 words in all
   twelve captions.
7. The record of the duet, under the list, is not in the prose file
   and not in `reading.json` (it comes from `content/records.mjs`,
   where I may not write). I read it on the page: a heading and four
   short sentences of plain fact. Nothing to mend.

**Refused.** Nothing. No tool call of mine was refused by the
permission system.

**Not done, and why.** I did not read the scans of Auden, so no
paraphrase of him was tested against his page: that was the
examiner’s. I did not touch `view`, any `turn`, `join`, `heading`,
`speakers`, `beside`, tab `label` or passage label, any mark, any
`grounds`, `why`, `facts`, `checked` or `open`, any quotation, or any
number, name or page reference that stays on the page (the pages of
the entry taken out left `sources` with it). In `notes.md` I wrote
only the entry taken out, at the end.

## 9. Working files

All in `remake/works/don-giovanni/critic/`:

- `reading.before.json`: the reading as I found it (11:20 UTC).
- `notes.before.md`: `notes.md` as I found it.
- `take-out.mjs` and the `*.edits.json` files: the exact edits that
  were made with `build/tools/edit-exact.py` (the rest were made with
  the Edit tool and are all in section 2).
- `count.mjs`, `recur.mjs`, `changed.mjs`: the counts in sections 0, 2
  and 3. They print places and numbers, never the text.
- `check-print.txt`: what the checker printed at the end.
- `shots-before/`: the artist’s pictures at 1280 and 390.
- `working-notes.md`: my notes while reading. Not a report.
