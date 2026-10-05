# A Season in Hell (Rimbaud): the critic's record

Piece `rimbaud`. Critic at work on 3 October 2026, from 11:04 UTC,
after the examiner (`exam.md`) and the artist (`art.md`). Words of the
book are pointed at by passage, tab, row and word number and are not
typed out. "Old" and "new" below are the site's own sentences; where
one of them names a word of the passage, the word is given as its row
and number.

In short. The piece is plainly written. I found no sentence that
pronounces, no ending that poses and no stock phrase, and the terms of
verse and grammar are said in plain words where they first stand, but
for three small things (section 6, items 4 to 6). Nineteen changes of
wording touch 25 sentences, 4 of them cut. The commonest fault, six
times, was a word that pointed at nothing, at the wrong thing, or two
ways at once; then loose or vague wording (4), a named word not set
off (3) and something said twice or in passing (3). One entry of eight
came out of the list of what Auden said. Thirty-two marks were set in
the small notes and sixteen elsewhere (fifteen titles and one foreign
term). Twelve labels that held only a number came off the items of the
list on the first passage. What weighs on the piece lies across its
sentences: Auden closes nine captions of twelve, six of them on the
same two thoughts, and a word is often explained three times on its
tab (sections 3 and 7).

For the lead to decide: two lines of `facts` and four strings of the
script (section 5); `view.says`, where "them" has nothing to point at
(section 6, item 1); the `checked` of the last entry, which still
names the lines of a sentence I cut (change 19); and whether one of
the two closers that share a clause should give way (section 3).

## 1. What was read, and with what

- `remake/BRIEF.md`, `remake/CRITIC.md` (all of it), `remake/EXAMINER.md`
  for "The printed notes", `remake/KIT-CHANGES.md`.
- `reading.json`, `exam.md`, `art.md` and `notes.md` of this piece, the
  script `site/js/pieces/rimbaud.js` with the kit files it calls
  (`kit/diagram.js`, `kit/lens-shape.js`), and `kit/lens-figure.js` for
  what a list prints in its key.
- The page as a reader sees it: first the artist's pictures of 08:28
  UTC (the whole page at 1280 px and every tab), read from the top.
  The kit has changed since then, so they show the words and where
  they stand, not the last layout.
- `review/remake/prose/rimbaud.md`, made again at 11:04 with
  `node build/tools/prose.mjs rimbaud` (the copy on disk was older than
  the examiner's and the artist's changes): 4,620 words, read once
  from top to bottom before anything was marked, then sentence by
  sentence.
- The proof that `node build/tools/check-reading.mjs rimbaud --print`
  prints, kept before any change: no problems, no warnings, the
  printed notes fit to print.
- To judge whether a paraphrase says more than Auden did: the scan of
  *The Enchafèd Flood*, pp. 17 to 18, 25, 107 to 108 and 146 to 150,
  and of *The Dyer's Hand*, p. 297; the scan of the 1945 *Collected
  Poetry*, pp. 269 to 270, searched for single words and not printed;
  the research notes on Rimbaud (section 19 and the appendix). No fact
  was checked again beyond that. The examiner's record stands.

## 2. Every change of wording

All in `reading.json`, each by one exact edit. Nothing was touched in a
`quote`, a `grounds`, a `facts`, a number, a name, a `turn`, a `join`,
a `heading`, `speakers`, `beside` or the one-word label of a tab. No
mark was moved; twelve labels of a figure's parts came off (5.2). No
page reference changed but in `sources[2]`, which lost the three pages
only the entry taken out had used (change 20). The script
`site/js/pieces/rimbaud.js` was not opened for writing.

A path-by-path comparison with the copy taken before the work shows 65
paths that differ. Eighteen of them are the list of what Auden said
from its third place down, where the entry taken out (section 4) moved
five entries up a place. With that entry set aside, 56 paths differ,
and every one is accounted for below:

- 17 where the wording changed (2.1 to 2.4);
- 16 small notes where marks were set and no word changed (2.5);
- 11 lines where a title or a foreign term was marked and no word
  changed (2.6);
- 12 labels of the list's items, taken off (section 5).

Words of the passages are given as row and word number, as the
checker's proof prints them; a single word is named where the site's
own note names it.

### 2.1 The first passage

1. Tense, caption, sentences 3 and 4.
   - Old: "Three steps are past definite: … What he saw, was and envied
     is imperfect."
   - New: "Three steps are in the past definite: … What he saw, was and
     envied is in the imperfect."
   - Fault: a word that can be read two ways. "Is imperfect" reads for
     a moment as a verdict on what he saw and was. The tense is now
     plainly a tense.
2. Tense, caption, sentence 6.
   - Old: "So each step is told as closed; …"
   - New: "So each step is told as done and over; …"
   - Fault: an abstract word where the plain one stands a line lower.
     The key of the same tab says "a step, done and over". The `why`
     (not printed) still says "closed history" and still fits.
3. List, the figure in plain words.
   - Old: "a list with no and between its items"
   - New: "a list with no “and” between its items"
   - Fault: a word named as a word and not set off, so the line reads
     as a slip. This line is printed as plain type and cannot take
     italics; quotation marks do the work.
4. List, caption, sentence 1.
   - Old: "After [row 16.0, words 5 and 6], I saw, come four things and
     then two nouns alone, and no <i>et</i>, and, joins them."
   - New: "… come four things and then two nouns alone, with no
     <i>et</i>, the French for <i>and</i>, to join them."
   - Fault: hard to follow. "And no et, and, joins" has three "ands"
     in six words, one of them the gloss.
5. Innocence, what the caption stands on.
   - Old: "[“Night in Hell”], for baptism and the pagans."
   - New: "[“Night in Hell”], for the slave of his baptism."
   - Fault: a printed note that names what the caption does not say.
     The caption takes one thing from that page of the book, and the
     note now names that thing. The ground behind it is untouched and
     still holds both halves.
6. Innocence, the note on row 18.0, word 22.1.
   - Old: "Littré: every animal except man. The entry’s first example
     says the beast lacks reason."
   - New: "Littré: every animal except man."
   - Fault: padding. The second sentence stands word for word in the
     caption a few lines above. Made at 11:45, after the pictures of
     this passage were taken, so
     `shots/rimbaud-hallucination-3-innocence-*.png` still show it.

### 2.2 The second passage

7. Count, remark 5 (on row 38.3).
   - Old: "Three syllables. Each of the three lines above has five, and
     so has the fourth line of each of the next three stanzas. Printed
     on its own in 1886, the poem has five syllables in this line as
     well."
   - New: "Three syllables, where each line above has five."
   - Fault: padding. The caption four lines above says all three
     things in nearly the same words, and the last of them stands a
     third time under "Where this page may be wrong". The remark keeps
     what belongs to its line.
8. Frame, the note on row 38.0, words 0 to 2.
   - Old: "Elle, she, is the feminine noun of the next line; …"
   - New: "*Elle*, she, stands for the feminine noun of the next line; …"
   - Fault: loose wording. The pronoun is not the noun. No claim is
     changed: the gloss under the words already reads "it is found
     again".

### 2.3 The third passage

9. Figure, caption, sentences 5 to 8.
   - Old: "Set side by side, the verbs claim less each time. He has
     created. He has tried to invent. He has believed that he was
     gaining."
   - New: "Set side by side, the verbs claim less each time: he has
     created, he has tried to invent, he has believed that he was
     gaining."
   - Fault: mannered plainness. Three sentences of three to seven
     words in a row call attention to themselves. They are one list
     and now read as one.
10. Time, caption, sentence 1.
    - Old: "The verbs move through time."
    - New: "The verbs go from past to present to future."
    - Fault: a vague figure. The old sentence said nothing until the
      rest of the caption had been read. The new one says what the
      caption then shows, tense by tense, with its own "Then … Then",
      and what its `why` says. For the lead to know: one marked verb,
      the past in the relative clause at row 4.0, words 3 to 5, comes
      after the first present (row 3.0, words 65 to 66). The caption
      passed over it before this change and passes over it now.
11. Time, caption, sentence 6.
    - Old: "The last verb is a command in the form for we: …"
    - New: "The last verb is a command in the form for <i>we</i>: …"
    - Fault: a word named as a word and not set off. "For we" reads
      as a slip of grammar.
12. Sentence, caption, last sentence.
    - Old: "Auden quotes it for the artist who finds he is no
      religious hero."
    - New: "Auden quotes this paragraph for the artist who finds he is
      no religious hero."
    - Fault: "it" pointed at the wrong thing. The sentence before
      names “Bad Blood”, which Auden does not quote there.
13. English, the remark on row 3.0, word 66, which the page numbers 1
    (`ties[4]` in the file).
    - Old: "… The Dial has am going to, and the obligation is gone
      here too."
    - New: "… The Dial has *am going to*, and the obligation is gone."
    - Fault: a pointer to what the reader has not met. The page sets
      the remarks in the order of the words they touch, so this one
      comes first, and "too" pointed five remarks down, at remark 6.
      The three words named in it are marked as well (2.5).

### 2.4 More from Auden, and the sources

14. First entry, last sentence.
    - Old: "…; reading the logs of those voyages, they should remember
      the voyagers’ courage."
    - New: "…; reading the logs of the Romantics’ voyages, they should
      remember the voyagers’ courage."
    - Fault: "those" pointed at nothing. No voyage is named in the
      entry or anywhere above it. Whose voyages they are was read in
      the scan of pp. 149 to 150; nothing else is added.
15. The entry on the sonnet “Rimbaud”, sentence 3.
    - Old: "… put his senses out of order by system and ended the
      nonsense he was used to, …"
    - New: "… put his senses methodically out of order and ended the
      nonsense he was used to, …"
    - Fault: "by system" is not a thing a person says. It is the
      poem's adverb turned word by word.
16. The entry on *New Year Letter*, sentence 5.
    - Old: "…: an adolescent whose hands are red, skilled, impatient
      of others and fast, who has choked the life out of an old
      rhetoric."
    - New: "…: an adolescent whose hands are red; he is skilled,
      impatient of others and fast, and has choked the life out of an
      old rhetoric."
    - Fault: hard to follow. The three adjectives read as said of the
      hands. In the poem (Collected Poetry, pp. 269 to 270) they are
      said of him.
17. The entry on the review of 1939, sentence 1.
    - Old: "… Auden judged that the man of action failed and tormented
      himself, …"
    - New: "… Auden judged that Rimbaud, as a man of action, failed
      and tormented himself, …"
    - Fault: unclear who is meant. "The man of action" reads as a
      type, and three entries higher the page has said that the heroes
      of that age were not men of action. See also section 6, item 8,
      on what this entry stands on.
18. The entry on Marianne Moore, sentence 2.
    - Old: "anapaests". New: "anapests".
    - Fault: the house spelling is American.
19. The same entry, its last sentence.
    - Old: "A few lines later he recalls that Moore’s way of thinking
      was so hard to follow that Rimbaud seemed easy beside one
      passage of hers."
    - New: cut.
    - Fault: a mention in passing. It says nothing of this book or of
      how its verse is made, and the list must not read as everything
      that was found. The entry stays for its first two sentences,
      which the caption of "Count" leans on. Its `checked` (not
      printed) still names the lines the cut sentence came from; the
      lead may trim it, or put the sentence back from here.
20. `sources[2]`, the pages of *The Enchafèd Flood*.
    - Old: "… (1950; Vintage Books, 1967): pp. 18 and 25, and in
      chapter 3, “Ishmael–Don Quixote,” pp. 94, 96–97, 100–102, 108
      and 146–50. …"
    - New: "… (1950; Vintage Books, 1967): chapter 3, “Ishmael–Don
      Quixote,” pp. 94, 96–97, 100–102 and 146–50. …"
    - Why: pages 18, 25 and 108 were used only by the entry taken
      out (section 4). No caption, ground or note at the foot names
      them.

### 2.5 Marks in the small notes

No word changed in these. A word named as a word, a word of another
language and a rendering of the Dial's now stand between asterisks, so
that each prints upright in the italic of the note: 32 marks in 18
notes (the 16 where nothing else changed, and changes 8 and 13). Seen
in place in the new pictures of the first and third passages. Those of
the second passage ("Count", "Frame") were not seen in a picture: the
picture tool was to run twice at most. They are set by the same code
(`site/js/rich.js`) as the ones seen.

- Judgment, four notes: *quite frankly*; *holy*; *disorder of mind*
  and *confusion*; *lazy*.
- Innocence, two notes: *contentment*; *symbolize*.
- Count, remarks 1 and 4: *e*, *Elle*, *est*; *e*.
- Frame, three notes: *began to wear*; *bouffon*; *Elle* and
  *retrouver* (in change 8).
- English, seven of the eight remarks, by the numbers the page gives
  them: 1, *Dois*, *devoir*, *am going to*; 3, *mage*, *Magi*; 4,
  *Free*; 5, *Sol*, *Paysan*; 6, *devoir*, *morale*, *A job*; 7,
  *Rugueuse*, *Étreindre*, *embrasser*; 8, *we*, *I*, *Come!*

Left bare, on purpose:

- "the Dial", 12 times in the small notes (7 of them "the Dial has").
  There it is the short name of the English version, as in "the
  Dial’s English" at the foot, and not the magazine as a title. Marked
  as well, it would stand upright beside the word the note is about
  and that word would no longer stand out. Where the magazine is
  meant (`about`, and the note at the foot of "Chapter") it is marked.
- A meaning given in English: must, duty, she, let us go, carried
  off. These are the note's own words.
- "one of the three Magi" in remark 3, where the word is used and not
  named.
- The glosses under the words. All are English and none names a word
  of another language.

### 2.6 Titles

No word changed. Fifteen titles and one foreign term, in 13 lines.

- `where`: *A Season in Hell*, *Une saison en enfer*.
- `about`: *The Dial*.
- `view.source`, and the `source` of the first two entries: *The
  Enchafèd Flood*.
- First entry, `says`: *Moby-Dick*.
- Second entry, `says`: *poète maudit* (not a title: a French term
  given with its meaning).
- The sonnet's entry, `source`: *The Collected Poetry of W. H. Auden*.
- The entry of 1941, `says`: *New Year Letter*; `source`: *New Year
  Letter*, *The Collected Poetry of W. H. Auden*.
- The entry of 1939 and 1947, `source`: *Intimate Journals*, *Prose*.
- The last two entries, `source`: *The Dyer’s Hand*.

Essays, chapters and short poems keep their curly quotation marks and
take no asterisks. `view.says` holds no title. Nothing inside a `quote`
was marked.

## 3. What recurs, with counts

Counted in the text as it now stands: 12 captions, 30 small notes, 7
entries.

1. **Auden closes the caption: 9 of 12.** All four tabs of the first
   passage, "Chapter", and all four tabs of the third passage. The
   three that do not ("Count", "Rhyme", "Frame") close on Rimbaud's
   own words or on the grammar. The frames: "Auden says" 3 times as a
   closer (and once in mid-caption, "Count"); "Auden quotes … for the
   artist who" 3 times ("Judgment", "Figure", "Sentence"); "For
   Auden", "Shortly before quoting these lines, Auden speaks of" and
   "The English Auden quotes" once each. The writers had already
   varied the frame. What returns is the matter (2 and 3 below).
2. **The experiment and its record: 6 places.** `view.quote`,
   `view.says`, and the closers of "Tense", "Judgment" and "Chapter",
   with half of it in "List". The clause "makes the experiment on
   himself and keeps the record" stands three times in the same
   words: `view.says`, "Tense", "Judgment". The last two are two tabs
   apart on one passage.
3. **"No religious hero": 5 places.** `view.says`, the closers of
   "Figure" and "Sentence", and the first entry of the list twice
   (Auden's words and the paraphrase).
4. **"One of his follies": 5 places.** `about`, "Tense", "Judgment",
   "Chapter", and once more inside the drawing of "Chapter".
5. **The authorities.** "A school grammar of the time" (or "of the
   day") 3 times: "Tense", "Frame", "Time". "A history of French
   verse" twice: the caption of "Rhyme" and remark 3 of "Count".
   Littré by name 7 times in 5 captions and in 20 of the 30 small
   notes.
6. **One build for every caption.** What is marked, then the
   dictionary or the grammar, then a line of the book, then Auden. All
   twelve run from 101 to 116 words and from 6 to 10 sentences. "So"
   opens the sentence that draws the marks together 3 times ("Tense",
   "Rhyme", "English").
7. **A sense given three times on one tab.** In the three tabs that
   gloss words ("Judgment", "Innocence", "Frame") the caption, the
   gloss under the word and the note beside the passage often give
   the same sense of the same word: 13 of the 17 words that carry a
   note are also explained in the caption.
8. **"The Dial has"**: in 7 of the 30 small notes, and 6 of them
   close on it.

How I weighed these. Items 1 to 3 are the cost of an honest page. What
Auden wrote on this book is a few pages of one lecture (pp. 146 to
150), and every tab that leans on him must lean on the same few
sentences. I looked for a way to vary the two closers that share a
clause ("Tense" and "Judgment") and found none that did not either
repeat a third caption ("Chapter" already has the other wording) or
loosen what Auden is said to say, so they stand. The lead may prefer
that one of the two close on the book's own word, as the three tabs of
the stanza do; "Judgment" could, since its sentence before the last
already gives the chapter's own verdict. Items 4 to 6 read as the
method and not as a tic: each grammar or dictionary is named where its
fact is used. Item 7 is taken up in section 7. Item 8 is a list form
and reads as one.

## 4. Taken out of the list of what Auden said

One entry of eight. Seven stand.

- **What.** The entry that stood third: "Elsewhere in the same
  lectures Rimbaud is one of Auden’s witnesses for the Romantics. …",
  with the source "The Enchafèd Flood (1950), chapters 1 and 3, pp.
  18, 25 and 108 of the Vintage Books edition (1967)". It had no
  quotation.
- **Why.** It reports three places where Auden brings in other
  writings of Rimbaud's: the poem of the drunken boat, the prose poem
  on democracy, and two short quotations on an unhappy childhood,
  which the scan of p. 108 gives to the *Illuminations* and to an
  early poem. None is from this book and none bears on a passage
  shown. So it fails all three tests: it is not on a passage, not on
  the work as he taught it, and not said in 1941. It is true, and the
  examiner checked it; it read as one more thing that was found.
- **Where it went.** Whole (`says`, no `quote`, `source`, `checked`)
  to the end of `notes.md`, under "Taken out of the list of what Auden
  said". That section is the only thing written in `notes.md`.
- **What leaned on it.** Nothing. No caption, `grounds` or `stands`
  names pp. 18, 25 or 108 (searched in the file). `view` is untouched.
  The entry that followed opens with its own name ("Auden’s sonnet
  “Rimbaud” …") and needed nothing. `sources[2]` lost the three pages
  (change 20).

Of the seven that stand, I asked whether the page would miss each. The
first two are the lecture the view is taken from, on the third passage
and on the first. The sonnet (of December 1938, by the research notes)
and *New Year Letter* are Auden on Rimbaud within three years of the
course, and the second was published in 1941. The entry of 1939 and
1947 and the Oxford lecture of 1956 both bear on the leave-taking that
"Adieu" is, and they say different things. The last is what the
caption of "Count" leans on. One sentence was cut from it (change 19).

## 5. The artist's three things, and the words of the drawing

Nothing here was changed in the script or in `facts`. What is asked of
the lead is given with its key or its line.

### 5.1 The two `here` lines that say "above"

`plates[1].lenses[3].facts[8].here`, "its last sentence stands above
the stanza", and `facts[9].here`, "the stanza above is its first and
its last".

As a reader: today no reader meets them. The script never reads
`here`; the drawing shows the same thing with the words "this passage"
in red beside the row. They would print only if the plain table of
facts came back, and under "Chapter" nothing stands above a table, so
"above" would then point at nothing. The artist's wording, "of this
plate", cannot be printed either: "plate" is a working word. If the
lead wants them safe for any tab, in the drawing's own term:

- `facts[8].here`: "its last sentence is the sentence of this passage"
- `facts[9].here`: "its first stanza, which is also its last, is the
  stanza of this passage"

`facts[3].here`, "three of its paragraphs are the first passage", has
no "above" and can stand.

### 5.2 The six items labelled "1" to "6"

Mended, in `reading.json`: the twelve `label`s that held only a number
(`plates[0].lenses[1].parts`, places 1, 3 to 7, 10 and 12 to 16: six
items in each of the two versions) are taken off. The kit already left
out a key row whose label is the item's own number (KIT-CHANGES, under
"Figure"; `kit/lens-figure.js`, line 319), so the page looks the same;
the reading no longer leans on that rule. I did not give the items
names in their place. The caption says what each item is, and six more
rows in the key would bury the three that say something. Seen at 11:32
(`shots/rimbaud-hallucination-1-list-1280.png`): the numbers 1 to 6
stand under the items in both versions, and the key has three rows,
"the one verb", "what was there", "a new clause".

### 5.3 One stanza counted at two lengths

`facts[9]["words in each stanza"]` gives the first stanza of poem 6 as
11 words and the sixth, which is the same stanza come back, as 10. I
ran the site's word-splitter on both: row 38.1 is two words where row
43.1 is one, because the second time a dash stands between them with
no space. Both figures are right by the rule.

As a reader: the two figures show only in the table under "The
figures", and nothing printed says that the sixth stanza is the first
again, so few readers will set them side by side. One who does finds
the rule at the foot of the page, under what the caption stands on: a
word is whatever stands between two spaces. It is not worth a line
under "Where this page may be wrong". If the lead wants it closed, a
clause after that rule in the `stands` of "Chapter" would do it: "so
two words that a dash joins count as one". That adds a statement of
fact, so I did not add it.

### 5.4 The words the drawing prints (`site/js/pieces/rimbaud.js`)

Read in the script and in the artist's picture of 08:27. The totals,
"this passage", "the first passage" and the first two rows of the key
read well. Four things, in the order a reader meets them:

1. Line 173, the third row of the key: "a stanza of a poem; every box
   is as long as its words". A box cannot be as long as words. Offered:
   "a stanza of a poem; the more words, the longer the box".
2. Line 149, the sentence for a run of prose. With the facts as they
   are it gives, for the second run, "5 paragraphs, 118 words (old
   poetic stuff; the hallucinations), ending on a colon." What the
   prose says hangs in brackets on a count of words, between the count
   and the stop. Offered: the counts and the stop first, then what it
   says as its own sentence: "5 paragraphs, 118 words, ending on a
   colon. In it: old poetic stuff; the hallucinations."
3. Line 163 with `facts[4].title` and `facts[6].title`: "Poem 3, with
   a title of six words: 18 lines, 66 words." A title told only by its
   length reads as if something were being held back. The title itself
   would say more, with its English beside it. This is small.
4. Line 188, the head of a column in the table under "The figures":
   "words in each". Each what is not said. Offered: "words in each
   paragraph or stanza".

## 6. Sentences doubted and not changed

No tab pays nothing: each of the twelve leaves the reader knowing
something about how the passage is made. No caption speaks of a mark
that is not drawn (the first and third passages in the new pictures,
the second in the artist's). What follows is smaller.

1. **`view.says`, sentence 3**: "… holds to some degree, Auden says,
   for every one of them." Nothing plural stands before "them": the
   two sentences before speak of "the Romantic artist". Auden's own
   sentence (scan, p. 148) ends the same way, but he has just been
   speaking of the Romantic artists. `view` is not mine to touch.
   Offered: "for every Romantic artist".
2. **Judgment, caption, sentence 5**: "Each paragraph has another kind
   of word too." This is the hinge left when the examiner took out the
   sorting of the six words. It promises a kind and names none. I left
   it: it is true in the plain sense (the first three are, by Littré,
   words for something gone wrong, and these are not), and any mend
   that names the kind puts back what the examiner found no ground
   for. If the lead wants it flat: "In each paragraph a second word is
   marked."
3. **Innocence, caption, last sentence**: "the Romantics’ identifying
   sin with consciousness". Abstract, and a reader new to it gets no
   help. It is Auden's phrase (scan, p. 146), the page gives it as
   his, and to unpack it would be to read him for the reader. Stands.
4. **Sentence, caption, sentence 2**: "magus" is not explained until
   the next tab, "English", where Littré's three senses are given. It
   is Auden's English for the word. A gloss here would add a claim.
5. **Count, remark 3**: "Old French pastourelles and romances". Two
   kinds of medieval poem, named and not explained, in the tab where
   the reader has least to hold on to. To say what they are is to add
   a statement, and to put "Old French songs" for them changes what
   the history is said to find. For the lead.
6. **"A mute e" and "a silent e"**: remarks 1 and 4 of "Count" say
   mute, the caption of "Rhyme" says silent, of one letter in one
   stanza. Each is right where it stands (inside a line a mute e can
   count as a syllable, at the end of one it never does), so I left
   both. In the caption of "Rhyme" the letters named, é and e, stand
   bare, where the remarks now mark theirs. If one name is wanted,
   "mute".
7. **The entry on *New Year Letter***: "…: Dante’s journey." The lines
   (Collected Poetry, pp. 269 to 270) describe the first judge and do
   not name him. The name is the page's. It is safe, since the lines
   name the Malebolge, but it is the one place in the list where the
   page names someone Auden leaves unnamed.
8. **The entry of 1939 and 1947**: by its own `checked`, both texts
   are known only from snippets in the research notes, and the page
   says so in its third caveat. I read the snippets (section 19 and
   the appendix): the paraphrase says no more than they do, and change
   17 brings its first sentence closer to them. It is listed here
   because it cannot be weighed against a full text.
9. **Time, a label in the key**: "a command, in the form for we". The
   key prints plain type, so "we" cannot be set off as the caption now
   sets it. Quotation marks would leave the kit's comma outside them.
   Left for when the key's joining is settled.
10. **`sources[6]`**: the 44 headwords of Littré stand bare, where
    each note at the foot of a tab marks the same words with
    asterisks. Harmless as a list; for the lead if the two should
    match.

## 7. What on the page got in the way of reading

Words only. How the kit sets a line, a gloss, a key or a caption is
the artist's report and is not repeated here.

1. **The same sense three times.** On the tabs that gloss words, the
   caption explains a word, the gloss under it explains it, and the
   note beside the passage explains it again in Littré's words: 5 of 6
   notes on "Judgment", 4 of 5 on "Innocence", 4 of 6 on "Frame". To
   read the notes after the caption is to read the caption again in
   smaller type. I cut the one sentence that was word for word (change
   6). The rest is the form of the tab. A note could hold only what
   the caption does not: the Dial's word, a second sense, the example.
2. **Three closers on one thought.** On the first passage "Tense",
   "List" and "Judgment" each close on Auden's experiment (section 3,
   items 1 and 2). By the third the reader knows the last sentence
   before reading it.
3. **The remarks under "English" are read in the order of the words**,
   which is not the order they were written in. After change 13 none
   leans on another. Remark 1 speaks of "the noun *devoir*" five
   remarks before remark 6 defines it; the caption above has already
   given it, so it holds.
4. **The drawing under "Chapter"**: the sentence that comes up when a
   run of prose is pointed at, and the third row of the key (5.4,
   items 1 and 2).
5. **The last item under "Where this page may be wrong"** holds three
   cautions that have nothing to do with each other: the accent on one
   word, a verb that could be a present, a paragraph left out. Each
   would be found sooner as an item of its own. Not split: the
   caveats are the examiner's.

## 8. After the changes

Run at 11:59 UTC, after the last edit:

    node build/tools/check-reading.mjs rimbaud --print
    node build/pieces.mjs rimbaud
    node build/tools/prose.mjs rimbaud

The checker's last three lines:

    no problems
    no warnings
    the printed notes are fit to print

The build ended without complaint, and the built piece
(`site/data/pieces/rimbaud.json`) holds the last change and no longer
holds the entry taken out. The prose listing now counts 4,459 words;
it counted 4,620 before the work.

The picture tool was run twice, one passage each time, and both runs
ended "nothing reported; now look at the pictures":

- 11:32, `--plate hallucination`, after every change but change 6;
- 11:39, `--plate adieu`, after every change to that passage.

So in `shots/` the sixteen pictures of those two passages are new. The
pictures of the whole page (`rimbaud-page-*.png`) and of the second
passage (`rimbaud-stanza-*.png`) are still the artist's of 08:27 and
08:28: they show the list with eight entries, the remarks of "Count"
and the notes of "Frame" as they were, and no marks in the small
notes. The two pictures of "Innocence" show the note that change
6 shortened afterward.

Where I wrote: `reading.json`, by exact edits; this file; the last
section of `notes.md`; `shots/`, through the picture tool. The tools
CRITIC.md names wrote their own outputs (the built piece and the prose
listing). The copy of the reading taken before the work, the two
proofs and the small scripts that counted for this record are in the
session's scratch folder, outside the project.

Nothing was refused by the permission system. Once, between 11:45 and
11:59, the session could not judge a command because its checker timed
out; the same command, unchanged, ran a few minutes later.
