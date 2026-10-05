# Critic's report for the piece "kierkegaard"

Critic's record, 3 October 2026 (UTC), 12:12 to 13:12. The translation
and Auden's prose are not copied out here, beyond the few words that
the site's own sentences already quote: places are pointed at by row
and word number, or by the key in `reading.json`. "Old" and "new"
below are the site's own sentences.

## In short

The writing on this page is plain and nearly free of the faults
CRITIC.md lists. I found no verdict handed down, no ending that poses,
no stock phrase and no inflated word, and the checker had no warning.
There is one interpretation of the page's own, hedged and labelled
(section 4, D1).

The commonest fault was of another kind: a caption that speaks of
someone or something as if the reader had already met it ("the man",
"the frame", "the sentence", "the paragraph", "this knight", a
translator's bare surname). Eleven places, all mended. Then five
stutters or sentences that read two ways, three things said twice
within a few lines, and three small tics ("So", "by X's account", a
caption closing on Auden).

What was done: 23 printed sentences reworded, 3 cut, 1 moved; marks
added in five places; one entry taken out of the list of what Auden
said, which now has eight; one line of sources trimmed. Every change
is in section 2.

Left for the lead:

- the inference in the Turn caption (D1);
- four captions that still close on an Auden sentence (D7), and how
  much rests on one passage of 1947 (D6);
- "a hero of a third kind" in the first entry of the list (D8);
- the translator, who is not named at the head of the page (section
  5, point 1);
- two strings in `facts` that say "the passage of this page", one
  antique turn in a fact, and one phrase in the keys of two drawings
  (section 6);
- whether the entry of 1944 should go back (section 3).

The checker's last three lines: no problems; no warnings; the printed
notes are fit to print.

## 1. What was read

- `remake/BRIEF.md`, `remake/CRITIC.md` (all of it), "The printed
  notes" in `remake/EXAMINER.md`, and the parts of
  `remake/KIT-CHANGES.md` on italics and marked words.
- The piece: `reading.json` from its first line to its last, `exam.md`,
  `art.md` (section 4 with care), `notes.md`, and the script
  `site/js/pieces/kierkegaard.js`, every string it prints.
- The page: built at 12:12, photographed at 12:13 (first of two runs:
  every tab at 1280 px and 390 px, and the whole page in slices). I
  opened the six slices of the page at 1280, all eleven tabs at 1280,
  and the three drawn tabs at 390. Then
  `review/remake/prose/kierkegaard.md` from top to bottom once before
  anything was marked, and then sentence by sentence.
- The text round each passage, in the output of the tools: the opening
  and the close of the Preparation (p2, blocks 0 to 2 and 18), the four
  tellings and their paragraphs (p2, blocks 4 to 17), the third
  paragraph of the speech (p3, block 2), and the paragraph of the
  fifth cry (p4, block 15).
- For three entries of the list: the extracts H17s, H17t and H21 in
  `remake/research/C_auden_on_works.md`. I checked no fact again, but
  for what four of my own rewordings touch (items 2, 15, 20 and 26);
  the examiner's record stands.

What the lead set from the artist's two proposals is in the section of
`notes.md` dated 12:12 UTC (it was written while I was reading the
file, and I read it at 12:36). The two counts are in `reading.json`:
`"opening words in common": 6` on the four rows of the tellings
(Tellings tab) and `"words before the name": 749` on the row of
paragraph 3 (Speech tab). Both drawings show them in the pictures of
12:13: a small block at the head of each telling's bar with its line
in the key, and the figure 749 over the tinted stretch of the speech.

## 2. Every change

Old words, new words (or "cut"), and the fault in a few words. The keys
are those of `reading.json`. Where a sentence is long, only the part
that changed is given, with "..." for the rest, which stands as it
was.

### The head of the page

1. `about`, third sentence. Old: "The first passage comes from four
   retellings of the story, each followed by a paragraph on weaning a
   child." New: "The first passage comes from four paragraphs on
   weaning a child, one after each of four retellings of the story."
   The passage shown is the paragraphs, not the retellings; the old
   sentence sent the reader to look for the wrong thing.

### Passage 1, four paragraphs on weaning

2. Refrain, caption, last sentence. Old: "The narrator says so: the man
   thought about the event *in many similar ways* and always ended
   by ...". New: "The narrator says so: a man thought about the event
   in these and *in many similar ways*, and always ended by ...". "The
   man" had not been met: this is the first caption on the page, and
   a reader takes "the man" for Abraham. "In these and" says what the
   narrator's sentence says (p2, block 18): the tellings are some of
   his ways of thinking about it. 113 words.
3. Turn, third remark (`ties[2].say`). Old: "comes back as a sorrow
   that someone was spared". New: "comes back as a sorrow someone was
   spared". With "that" the words could be read as sorrow over
   someone's being spared.
4. Turn, fourth remark (`ties[3].say`). Old: "Nearly the same words,
   and the same tense. This is the one last sentence in the present,
   and the one with no *not* in it." New: "Nearly the same words, and
   the same tense." The second sentence was the caption's last
   sentence over again, a few lines away. Padding.
5. Tellings, caption. Old: "Each changes the man." New: "Each changes
   Abraham." The caption ends on another man, the one whose thoughts
   the tellings are; two men were both "the man".
6. Tellings, caption, last sentence. Old: "The frame says who thinks
   them: a man who admired the story more with age and found it ...".
   New: "The tellings are one man's thoughts, and the Preparation
   opens with him: he admired the story more with age and found
   it ...". "The frame" is a word of the trade and nothing on the page
   had said the tellings have one. The new words name the place a
   reader can go to (the heading of the passage prints "Preparation";
   the man is p2, block 0, and block 18 says the thoughts are his).
   107 words.
7. Tellings, `why` (not printed), to match 5 and 6. Old: "change the
   man"; "the frame calls them the thoughts of". New: "change
   Abraham"; "the Preparation gives them as the thoughts of".
8. Words, caption, second sentence. Old: "So each last sentence calls
   someone lucky." New: "Each last sentence calls someone lucky." One
   of five sentences that began "So" (section 3).
9. Words, caption. Old: "four times here, and once in the last section
   printed here, over whoever can make the movements of faith". New:
   "four times here, and once in the Preliminary Expectoration, of
   whoever can make the movements of faith". "Here" twice in one
   breath with two meanings; the section has a name, which the line
   under the title gives; "over" was a quaint word for "of".
10. Words, caption. Old: "There Hollander writes". New: "There the
    translator, L. M. Hollander, writes". This is the first place the
    page names him, and nothing above it says who he is (section 5).
    93 words.
11. Words, `why` (not printed), to match 9. Old: "the fifth over
    whoever". New: "the fifth of whoever".
12. Words, gloss under the first word of the last sentences
    (`notes[2].gloss`). The Danish word is now between asterisks, so
    that it stands upright in the italic. No word changed.
13. Words, note on the word of the first opening (`notes[0].note`).
    Old: "Genesis 21:8 tells in one verse how". New: "Genesis 21:8
    tells how". A single verse is cited, and the caption has already
    said "a single verse".
14. Words, note on the second and third words of the first last
    sentence (`notes[3].note`). Cut: "So the Danish leaves open
    whether a woman or a man is meant. Hollander's English says *he*."
    Both sentences are in the caption, which stands a few lines above
    the note. The note keeps what only it has: the dictionary's
    sense of the two Danish words.
32. (Out of order: made last, at 13:02.) Turn, first remark
    (`ties[0].say`). The English given for the Danish, the last three
    words of the remark, is now between asterisks and stands upright,
    as the passage's own two words earlier in the same remark already
    did. In italic the last of the three could be read as a verb. No
    word changed.

### Passage 2, "Greater than all"

15. Build, caption, fifth and sixth sentences. Old: "The second time
    the place holds a name, Abraham, which the speech has not said
    before. Before the name comes, the paragraph gives this verdict
    five times, each time to an unnamed *he who*." New: "The second
    time the place holds a name, Abraham, which the speech has not yet
    said. Before the name comes, the paragraph that ends here gives
    this verdict five times, each time to an unnamed *he who*." Two
    faults. "Before. Before" stuttered. And "the paragraph" had not
    been met: the reader sees two sentences and one verdict given to a
    *he who*, and is told of five. "That ends here" says the passage is
    the end of a longer paragraph. The page already holds this: the
    Speech caption says the name comes in the paragraph's last
    sentence, and a fact of that tab calls the passage its close. I
    read the paragraph (p3, block 2): four of the five stand before
    the passage. 113 words. (The three words "that ends here" were put
    in at 12:47, after the last pictures.)
16. Paradox, caption, first sentence. Old: "The sentence first names
    four things heroes are great by: ...". New: "The second sentence
    names four things heroes are great by: ...". Two sentences are
    shown, and the tab before has just counted "two in the first
    sentence and four in the second". "The sentence" did not say which.
17. Sources, note on the third pairing (`notes[2].note`), second
    sentence. Old: "Hollander's *expression* is *Form*, form, in the
    Danish." New: "Where this translation has *expression*, the Danish
    has *Form*, that is, form." "*Form*, form" stuttered, and the
    surname stood alone, a whole passage below the one place the page
    says who Hollander is.
18. The same note, third sentence. Old: "..., where the edition thinks
    of Plato's *Phaedrus*." New: "..., where the edition points to
    Plato's *Phaedrus*." An edition does not think. The same turn as
    item 23. (Made at 12:50, after the last pictures.)
19. Speech, caption, fifth sentence. Old: "Every later paragraph names
    him, fifty times more." New: "Every later paragraph names him,
    fifty more times." "Fifty times more" can be read as fifty times as
    often. The drawing's key gives the sum, 51 in all.

### Passage 3, "The man at the window"

20. Words, caption, sixth sentence. Old: "In lines Hollander leaves
    out just after, Kierkegaard names what this knight alone can
    do: ...". New: "In lines this translation leaves out just after,
    Kierkegaard names what this knight of faith alone can do: ...".
    Two things. The surname again, two passages below the place it is
    explained; a reader who opens this tab first has not met him. And
    "this knight": no knight had been spoken of on this tab. "Knight
    of faith" is the name the view at the head and the heading of the
    Day tab give the man, and the Danish the caption cites says "that
    knight" of him, against the other knights it has just described
    (I read the sentence in the Danish). 112 words. (The two words "of
    faith" were put in at 13:09, after the last pictures.)
21. Words, gloss under the tradesman of the second row
    (`notes[0].gloss`). The Danish word is now between asterisks and
    stands upright. No word changed.
22. Words, `stands`. The two English words looked up in the Online
    Etymology Dictionary are now between asterisks, as the word looked
    up for the first passage already was in its `stands`. No word
    changed.
23. Words, note on the phrase about the price of his leisure
    (`notes[1].note`), second sentence. Old: "The edition hears
    Ephesians 5:15-16, which ...". New: "The edition points to
    Ephesians 5:15-16, which ...". An edition does not hear. A mannered
    turn where the ordinary word serves.
24. Words, note on the last phrase marked (`notes[3].note`). The
    book's term for the first step, two words, is now between
    asterisks: it is named there as a term. No word changed.
25. Day, caption. Three things. (a) Old: "The narrator likens the man
    to twelve other figures, from ...". New: "... to twelve figures,
    from ...". Other than whom? None had been named. (b) The sentence
    that begins "Auden describes Abraham in like terms" stood last. It
    now stands fourth, straight after the narrator's reason (those who
    have faith look like the philistines), which is the thing it is
    like. Not a word of it changed. This was one of five captions that
    closed on an Auden sentence, and the third of three in this
    passage (section 3). (c) Old last sentence, now the close: "Only
    at the window does he say what the man does every moment." New:
    "Only at the window does the narrator say what the man does every
    moment." After the move "he" would have pointed at Auden. The
    caption now ends on the passage. 109 words. The `why` already ended
    on the same point and needed no change.

### The list under "More from Auden"

26. Second entry, on the genius and the apostle (`auden[1].says`),
    second sentence. Old: "Why these two and no others cannot be
    answered in human terms, he writes, and ...". New: "Why these two
    were called, and not others, cannot be answered in human terms, he
    writes, and ...". The old sentence had no verb where the reader
    needs one, and had to be read twice. "Were called" is taken from
    the sentence before it in the entry, which is about the apostle's
    call. I read Auden's page in the scan the examiner used (`dh.txt`,
    p. 443): his question is why these two and not two other people.
    "And not others" is his sense, and nearer to it than "no others".
27. Third entry, on his styles (`auden[2].says`), opening. Old: "On
    the same page Auden writes that ...". New: "On the same page as
    his sentence about the cheerful grocer, Auden writes that ...". The
    entry before it is from another book, *The Dyer's Hand*, p. 443.
    "The same page" meant the page of the view at the head, p. 192 of
    *Forewords and Afterwords*, which stands eleven tabs higher. The
    opening leaned on the view and not on a neighbour, so it was wrong
    before any entry was taken out.
28. The entry on the sonnet "The Hero" (now `auden[5]`), second
    sentence. Old: "By Edward Mendelson's account, the sonnets of 'The
    Quest' vary themes of Kierkegaard." New: "Edward Mendelson finds
    that the sonnets of 'The Quest' vary themes of Kierkegaard." A tic:
    four of the last five entries said "by X's account" (section 3).
    The examiner's paraphrase, "vary themes of Kierkegaard", is kept
    word for word.
29. The last entry, on Kenneth Millar (now `auden[7]`), second
    sentence. Old: "By Michael Kreyling's account, his fullest notes
    were on ...". New: "Michael Kreyling reports that his fullest notes
    were on ...". The same tic.
30. One entry taken out whole: the sixth of nine (it was `auden[5]`),
    a sentence from a review of 1944. It is at the end of `notes.md`
    with its `source` and `checked` (it had no `quote`). What it was
    and why it went: section 3.
31. `sources`, the line for the volume of *Prose* (`sources[6]`). Old:
    it named the introduction of 1947 and the review of 1944, "pp.
    309–10 and 213–14". New: it names the introduction of 1947 and
    "pp. 309–10". Nothing on the page now uses the review. "Not seen in
    full" stays.

### Marks and titles

The examiner had marked every title: books between asterisks, essays
and short poems in curly quotation marks. I found none bare in `about`,
`where`, `view.says`, the eight `says` or their `source` lines. The
names of the book's three sections in `where` stand without quotation
marks, as the scenes of *Faust* do in that piece; I left them. The
marks I added are items 12, 21, 22, 24 and 32, in five places: four
single words, one term of two words and one phrase of three.
In `sources` the words looked up in the two dictionaries stand bare,
as in the other pieces; I left them.

### Tried and put back

In the entry on Donald Pearce's notes (`auden[4].says`) I changed "His
scheme, as Pearce gives it" to "Auden's scheme, as Pearce gives it",
because "his" follows "By his account", where "his" is Pearce. With
"Auden's" in place the "he said" of the next sentence pointed at
Pearce. I put "His" back. The entry is as the examiner left it.

### In sum

Twenty-three printed sentences reworded (items 1 to 3, 5, 6, 8 to 10,
13, 15 to 20, 23 and 25 to 29; items 15 and 25 are two sentences
each); three sentences cut (one in item 4, two in item 14); one
sentence moved and not reworded (25 b); marks added in five places
(12, 21, 22, 24, 32); one entry out of the list (30); one line of
`sources` trimmed (31); two `why` lines matched to their captions (7
and 11). The tool that prints the page's prose counted 4,746 words at
12:13 and counts 4,672 now.

Not touched: `view`, every quotation, number and page reference, every
name already on the page, every mark on a passage, `grounds`, `facts`,
`turn`, `join`, `heading`, `speakers`, `beside`, the labels of the
tabs, the script, and `open`. One name was added to a caption, the
translator's with his initials (item 10); it is in the first line of
the sources. No claim was added or made stronger.

## 3. What recurs, with counts; and the list of what Auden said

### What recurs

Counted in the printed prose (captions, remarks, notes, glosses,
`stands`, the list, the caveats), before and after.

1. **Someone or something spoken of as already met.** The commonest
   fault: eleven places (items 2, 5, 6, 9, 10, 15, 16, 17, 27, and 20
   twice). "The man" for two different men, "the frame", "the
   sentence", "the paragraph", "this knight", "the last section
   printed here", "the same page", and the surname of a translator the
   page had not introduced, three times. Each caption was written as
   if the reader came straight from the tab before; the tabs can be
   opened in any order. All eleven mended.
2. **A caption that closes on a sentence beginning "Auden".** 5 of 11
   before (Paradox, Sources, Yet, Words of the third passage, Day); 4
   now. Auden is in six captions in all; in Tellings, and now in Day,
   he stands in the middle. All three tabs of the third passage closed
   on him. I moved one and left four: each of the four gives the thing
   he said that bears on that tab, and the brief wants the point of
   view to be his. Four is still a pattern a reader will hear, and
   Paradox and Sources stand side by side. It is for the lead (section
   4, D7).
3. **"By X's account".** 4 before, in four of the last five entries of
   the list; 2 now (the entry on Pearce's notes; the entry on two
   poems).
4. **A sentence beginning "So".** 5 before (four captions and a note);
   3 now (Turn, Sources, Yet). In each of the three it draws the
   caption's one conclusion, which is the method.
5. **The surname "Hollander".** 9 before, outside the list of sources;
   6 now. He is said to be the translator at the first of them.
6. **A stutter, or a sentence that reads two ways.** Five (items 3,
   15, 17, 19, 26). All mended.
7. **The same thing said twice within a few lines.** Three (items 4,
   13, 14). All cut.
8. **A mannered word.** An edition that "hears" and "thinks of" (items
   18, 23); "over" for "of" (item 9). All mended.
9. **Left as they are.** "The school pattern for ..." and "so the name
   arrives ..." are in both Build and Speech: twice each, and twice is
   the method (section 4, D3). Five captions open on a count (Build,
   Tellings, Paradox, Yet, Words of the third passage); each counts
   something the reader can see. "Comes" 13 times, three of them in
   the Yet caption, where two make a pair on purpose. "The narrator"
   10 times. "The Danish" 26 times: the two Words tabs and Sources are
   about it.
10. **Length.** The captions run 113, 110, 107, 93, 113, 103, 110,
    108, 110, 112 and 109 words. None is over 120, and ten of eleven
    lie within ten words of each other. A page on which every caption
    fills its allowance reads as written to a measure. I cut nothing
    for that alone: each sentence I weighed for cutting carried
    something the tab needs.

### The entry taken out

One, the sixth of nine. It was a single sentence: in a review of 1944
of a translation of *Either/Or*, Auden advised a Christian reader to
begin Kierkegaard with this book or with *Training in Christianity*.

Why it went. It bears on no passage shown. It says nothing of how he
taught the work. It was said in 1944, not in 1941. It is the case
CRITIC.md names: the book named in passing, in a piece on something
else, in a list of what different readers might start with. The list
stood at nine, above eight, and of the nine this is the one the page
would not miss. Nothing leans on it: I searched `reading.json` for the
year, the title of the review, its pages and the two book titles, and
outside the entry and its source line they occur only in `open`. The
examiner had said the same in the working record: kept for one reason,
and by the letter of the rules it could go.

Against, for the lead to weigh. It is the one place found where Auden
names *Fear and Trembling* in print. In the view and in the eight
entries that stay he never names it himself: three entries say so, and
in three others it is Mendelson or Kreyling who ties him to the book.
If the lead wants one line that shows he named it, the entry goes back
as it was: it is whole in `notes.md`, with the old line of `sources`
beside it.

What followed from it. The entry that came after it opens on its own
subject and needed no new name. The line of `sources` was trimmed
(item 31). `open[0]` and `open[9]` still speak of the review as in the
list; `open` is the lead's working record and I did not touch it.

### The eight that stay

Each by the test it meets. (1) 1947, Abraham beside Agamemnon: three
captions lean on it and it holds the second quotation. (2) 1962, the
genius and the apostle: on Abraham's call, and the `stands` of Paradox
cites it. (3) 1968, his styles: the Words caption of the third passage
leans on it. (4) 1952, the preacher: the Sources caption leans on it.
(5) Pearce's notes: said in the class, in October 1941. (6) "The Hero"
of 1940: the grocer of the third passage. (7) Two more poems, 1940 and
1941: the book in his own verse in the year of the course and the
year before, and the second points to lines just after the third
passage. (8) Millar: the class of 1941.

Eight is the number CRITIC.md allows without asking more. If the lead
wants fewer, the second is the one to look at: it "is not writing
about this book there", and its matter is close to the first. But the
`stands` of Paradox leans on it, so it cannot go unless that `stands`
loses its last clause, and that is not a change of wording.

## 4. Sentences doubted and not changed

**D1. Turn, caption, sixth sentence:** "So the first and third appear
to call happy someone better off than the Abraham just shown." This is
the one sentence on the page that reads as an interpretation of the
page's own. No critic and no word of Auden's stands behind it. The
writers knew: it says "appear", the `stands` calls it "an inference of
this page" and gives its three reasons, and a caveat repeats that. A
reader of the caption alone sees only "appear". It is the kind of
sentence the person this site is for asked about ("do any critics say
this?"). I did not cut it, for three reasons: the examiner weighed it
and kept it; it is the tab's whole reason, and with it gone the two
clauses before it (what Abraham does in the first and third tellings)
have nothing to do; and taking it out changes what the tab says, which
is more than wording. The lead's choice is between the sentence as it
stands and a caption that stops at what can be seen: each last
sentence takes up a word of its paragraph, three turn to the past, the
fourth stays in the present.

**D2. Turn, caption, last sentence:** "The fourth alone stays in the
present and has no *not*." True and plain to see, but the caption does
nothing with it, and it says nothing of the second sentence, which the
second remark covers. I left it: the other course is a reason made up
to fill the gap.

**D3. Build and Speech close on one finding.** Build: "This speech
builds the top rank first, so the name arrives already defined."
Speech: "... so the name arrives at the top of a ranking already
built." Each is led in by "The school pattern for ...". The Speech tab
still pays its way (eighteen paragraphs, the name held back 749 words,
where the comparison stands in the school order), so this is an echo
and not a tab that pays nothing. Left as written. If the lead wants one
varied, Build's last sentence is the one to shorten.

**D4. Sources, caption, sixth sentence:** "So the orator's sentence
praises Abraham, three times in four, in terms the notes trace to Paul
and John." It says again what the first sentence said, with one step
added: that this is praise. I left it because it is the caption's step
from what is there to what it does, and without it Auden's sentence
has nothing to answer.

**D5. Words of the third passage, caption, last sentence:** "Auden
wrote of Kierkegaard's writing at large that he commands every style,
the homely and the abstract among them." Auden did not say this of the
sentence shown, and the caption and its `stands` say so honestly ("at
large", "said of all his writing"). Of the four captions that close on
him this is the loosest fit: a general remark hung on a particular
sentence. Cutting it would leave one of the lens's `grounds` with
nothing to ground, and those are not mine.

**D6. One passage of 1947 carries three captions.** Auden's sentences
on Abraham and Agamemnon, from an introduction to Baudelaire, are used
in Tellings (the Bible's story in one sentence), Paradox (no hero in
poetry's sense) and Day (to look at, a man like any other), and again
in the first entry of the list, with its quotation. Each use takes a
different clause and none claims more than he wrote. But it is one
passage in an essay on another writer, it "does not name this book",
and it was read in search snippets only (a caveat says both). The lead
should know how much of Auden's presence on this page rests on it.

**D7. Four captions still close on Auden** (Paradox, Sources, Yet,
Words of the third passage). See section 3. Paradox and Sources are
neighbours, and in the third passage only Day now ends on the text.
Each of the four is a true report and bears on its tab; together they
are a habit. The only mends open to me were to move or to cut, and in
these four the Auden sentence has no better place inside the caption.

**D8. The list, first entry, first sentence:** "In 1947 Auden wrote
that the Old Testament has a hero of a third kind ...". A reader asks
what the first two kinds are, and the page cannot say: the extract the
research holds begins at the third. To drop "third" would change what
Auden is reported to say. For the lead: either the two are found and
named, or the sentence opens on Abraham ("His example is Abraham ...")
and the count goes.

**D9. `view.says`** (not mine to touch). "Auden cites Bonhoeffer:" the
reader is not told who Bonhoeffer is, and it is the first sentence
under "What Auden said". Four words would do it, but they are a fact
added. Also "which is in this book" is the page speaking inside a
paraphrase of Auden; `open` records that he does not name the book on
that page. It is true and it helps; I only note that the voice changes
for five words.

**D10. Three small things I weighed and left.** Paradox, first
sentence: "four things heroes are great by" is clipped English, but
the plainer "four things that make heroes great" says a little more
than the passage does. Build and Speech: "the school pattern" does not
say which school; the list of sources says "the school exercise of the
encomium". A reader takes it as the textbook pattern, and to say whose
school would add a claim. Words of the third passage, the gloss under
the book's word for what faith acts by: "outside the understanding's
categories" explains one term of the book by another. It is the book's
own account, six paragraphs on, and the note beside it does the plain
work; a plainer gloss would be my paraphrase of Kierkegaard.

**A caption the picture does not bear out:** none. I read every
caption against the picture of its tab and found each thing it points
at: the seven words and the three added in Refrain, the four ties in
Turn, the four *yet* and the narrator's aside in Yet, the twelve
figures in Day, the five verdicts in the text of the speech (four of
them stand before the passage, which is why item 15 was needed).

**A tab that pays nothing:** none. Sources is the nearest to a list of
references, and it ends by saying what the list shows.

## 5. What on the page got in the way of reading

Words and their order only. The faults of the kit that the artist has
reported are not repeated here.

1. **Whose English this is.** Nothing at the head says that the
   passages are in a translation of 1923, or that it gives about a
   quarter of the book. The list of sources and the first caveat say
   both, at the foot. On the way there the reader meets "this
   translation" or the translator on five tabs. Item 10 now names him
   at the first of them. The better mend is one clause in the line
   under the title, as the piece "castle" has it ("in the English of
   Willa and Edwin Muir (1930)"): here, "in the English of L. M.
   Hollander (1923)". That adds a fact to the head, so it is the
   lead's. If it goes in, the four words of item 10 ("the translator,
   L. M.") can come out again.
2. **"Preliminary Expectoration".** The name of the third section, in
   this translation's English, stands under the title, beside the
   heading of the third passage and in one caption. Nobody will know
   the second word in this sense, and nothing glosses it. A reader
   takes it as a name and goes on; I stopped at it each time. A gloss
   would be a claim, so none was added. (Item 9 put the name into that
   caption, in place of "the last section printed here": it is the one
   name the reader can match to the heading of the third passage.)
3. **The order of the list.** It runs by subject: 1947, 1962, 1968,
   1952, then the class of 1941 (Pearce), a poem of 1940, two poems of
   1940 and 1941, and the class again (Millar). A reader who wants
   what Auden said in the year of the course finds it fifth and
   eighth, with the poems between. Moving Millar up beside Pearce
   would break nothing: no entry opens on its neighbour except the
   entry on two poems, which must follow the entry on "The Hero". The
   order is not mine to change.
4. **A definition printed twice.** In Paradox the caption defines the
   figure, and a few lines lower the line under the figure's name
   defines it again in the same words. In Refrain the same, in other
   words. That line belongs to every figure tab on the site, so the
   repeat is the form's. If the lead ever sets that line above the
   caption, the caption's own definition can go.
5. **What a caption stands on is folded shut.** The notes at the foot
   and the caveats open only when asked. That is right for a page of
   this length. It matters in one place: the words "an inference of
   this page" (D1) are two steps from the sentence they qualify.
6. **Verse numbers.** Under and beside the passages the ranges print
   with a hyphen ("3:18-19", "5:15-16"); in the notes at the foot and
   in the sources, with the longer stroke. The checker warns on any dash in
   a caption, a gloss or a note, so the hyphens stay. It is the
   checker's rule and not the writers' slip.
7. **"The passage of this page"** in the keys of two drawings, on a
   page with three passages: section 6.

## 6. Words that are not mine to change

### In `facts` (printed by the drawings)

- Speech, `plates[1].lenses[3].facts[2].here`. Now: "the passage of
  this page is its close". Proposed: "this passage is its close". The
  script prints it in the key after "paragraph 3:" (line 295) and in
  the answer when the reader points at that paragraph (the function
  `say`, line 277).
- Day, `plates[2].lenses[2].facts[4].here`. Now: "the passage of this
  page". Proposed: "this passage". The script prints it in the key
  beside the red dot (line 385).
  The page has three passages, so "the passage of this page" does not
  say which; it is the case CRITIC.md gives under fault 10. Each
  drawing stands under its own passage's heading, so "this passage" is
  enough. If the lead would rather number them, as `about` does: "the
  second passage of this page is its close" and "the third passage of
  this page".
- Tellings, `plates[0].lenses[2].facts[2]["the end"]`. Now: "home;
  Abraham grows old and sees happiness no more; Isaac thrives as
  before". Proposed: "home; Abraham grows old and is never happy
  again; Isaac thrives as before". The middle clause ends on the
  translation's own antique turn, four words with the tense changed,
  in the page's voice. The caption says the same thing plainly. Small.
- The names of the keys that the drawings print: in Tellings
  "Abraham", "the end", "the mother" and "called happy" as heads, and
  "words", "words on weaning" and "opening words in common" in the
  lines and the key; in Speech "paragraph" and "words", and "part",
  "about" and "names Abraham" as heads of the table of numbers; in Day
  "when" and "likened to" as heads. All are plain and read well where
  they stand. Nothing to propose.

### In the script, `site/js/pieces/kierkegaard.js`

- Line 163, `'a telling, as long as its words'`, and line 294,
  `` `a ${S.n}, as long as its ${S.words}: ${num(k.total)} in all` ``
  (printed as "a paragraph, as long as its words: 3,375 in all").
  "As long as" reads first as "provided that", and the line has to be
  read twice. Other pieces say "every mark is as long as its words",
  where the verb settles it. Proposed: `'a telling: the line is as
  long as its words'` and `` `a ${S.n}: the line is as long as its
  ${S.words}, ${num(k.total)} in all` ``. The phrase is used across
  the site, so the lead may prefer to leave it.
- Lines 103, 164, 165, 228, 293, 295, 384 and 385: read without
  trouble. Nothing to propose beyond the two `here` strings above.

### Elsewhere

- `where`: the translator (section 5, point 1).
- `view.says`: Bonhoeffer (D9).
- `open` (the working record, not printed): entries 0 and 9 still
  speak of the review of 1944 as in the list, and entry 7 says the Day
  caption has "twelve other figures"; it now has "twelve figures"
  (item 25).

## 7. The checker, the pictures, and what was refused

The picture tool ran twice, as allowed: 12:12:59 to 12:13:35 and
12:42:52 to 12:43:27 (UTC). Of the second run I opened all eleven
tabs at 1280, one tab at 390, and four of the six slices of the page
at 1280. They show the reading as it now stands, but for four changes
made after the second run and seen only in the print-out of the prose:
three words in the Build caption (item 15), two in a note of Sources
(item 18), two in the Words caption of the third passage (item 20) and
one mark in a remark of Turn (item 32). The pictures at
360, 320, 1024, 820, 600 and 480, the folder `first` and the files
named `proposed-*` are older and show the old words.

The permission system refused nothing. Twice, at about 12:14, the
shell was not run because the safety check of the session timed out;
the same commands ran when tried again. I installed nothing, started
no agent, and wrote only `reading.json`, this file, the last section
of `notes.md`, and `shots/`. Outside the project I used only the
session's scratch folder: two small counting scripts and one saved
output of the checker are mine, and I read three files there: the
lead's copy of the reading as it stood at 12:07, to set
every "old" sentence above against it; one sentence of the saved
Danish text (item 20); and one page of the scan of *The Dyer's Hand*
(item 26).

After the last change, at 13:09, the checker and the build were run
once more, and the built page was searched for every new wording: all
are in it, and the review of 1944 is not. The checker's last three
lines:

```
no problems
no warnings
the printed notes are fit to print
```
