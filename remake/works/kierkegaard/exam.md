# Kierkegaard, *Fear and Trembling*: the examiner's record

Examiner started 2026-10-03 08:11 UTC (examiner.txt), finished about
10:25 UTC. Result: **mended**. Three passages and eleven tabs stand as
the poet chose them; no mark, row or key was changed. Words were
changed in ten of the eleven captions (all but the Turn tab's), with
their reasons, notes and grounds, in the list of what else Auden said,
and in all the printed notes. The checker ends: no problems, no
warnings, the printed notes are fit to print.

How to read this file: sections 1 to 9 follow the order of tests in
EXAMINER.md. Then come every change in one list, the source read for
each fact, what is still doubtful, and how the work went beside the
artist. Words of the text are pointed at by part, block and word number
(`node build/tools/show.mjs kierkegaard p2 6 6`); nothing of the work is
copied out here.

## 1. The proof

First run of `node build/tools/check-reading.mjs kierkegaard`, before
any change: no problems, no warnings, printed notes fit to print. Every
mark was then read against the words it lands on, in the proof and on
the built page.

- First passage (kierkegaard/p2, blocks 6, 9, 13, 17; openings beside
  last sentences). The opening marks cover words 0-6 of blocks 6, 13
  and 17 and words 0-9 of block 9, with words 3-5 of block 9 as the
  three added words. The marks on the last sentences sit on the two or
  three words after the first word (block 6, words 60-61; block 9,
  28-30; block 13, 62-63; block 17, 19-20). The four ties of the Turn
  tab join the right words (block 6, word 6 to word 67; block 9, 19-26
  to 28-34; block 13, 10-12 to 72-76; block 17, 9-13 to 21-26).
- Second passage (p3, block 2, words 206-311): twelve spans of the
  Build tab, twelve parts of the Paradox tab, four notes of the Sources
  tab. All sit where they should. The two turns are words 226-237 and
  271-278.1.
- Third passage (p4, block 21, words 58-160): nine spans of the Yet
  tab and four notes of the Words tab, all right.
- Counts were run again by a script that prints numbers only: the
  speech has 18 paragraphs and 3,375 words (250, 227, 312, 221, 129,
  143, 145, 217, 15, 107, 434, 42, 160, 39, 400, 95, 153, 286); the
  name comes 51 times (0, 0, 1, 2, 2, 2, 2, 5, 1, 2, 12, 1, 3, 2, 8, 2,
  3, 3), first at word 272 of block 2, after 749 words; the tellings
  and their paragraphs on weaning have 343 and 70, 149 and 39, 191 and
  77, 145 and 27 words; the portrait 130, 213, 231, 79 and 180 (833).
  The four tellings open on the same six words (the seventh differs in
  the fourth, and the stop after the sixth differs in the first); three
  paragraphs on weaning open on the same seven, and the second is the
  same with three words put in.

## 2. The ear

Prose in translation: there is no beat or rhyme tab and nothing to scan.
Three words in the passages are two words joined by a dash (second
passage, word 278; third passage, words 131 and 146). Every mark that
lands on one names its part (278.1, 278.2, 131.1, 131.2, 146.1, 146.2),
and each part is the one the mark means.

## 3. The terms, and what the page joins

- **Refrain** (figure). By the Online Etymology Dictionary and by Baum
  (chapter 5 and the glossary) a refrain is a phrase or line that comes
  back at a set place, and Baum keeps it to the stanza. Here the thing
  that comes back is a prose paragraph with a fixed opening and a fixed
  form of last sentence, after each of four tellings. That is an
  extension of the word. I kept it, because the nearer terms are worse
  (the openings are not an anaphora: the four paragraphs are not
  successive units, a telling stands between each two), and because the
  caption does not hide the stretch: it says "in a song". The plain
  line says "here the same opening, and the same form of last sentence,
  after each of four tellings", and the note under the tab now says
  that Baum's refrain belongs to a stanza and that the word is used
  here of prose. `open` tells the lead that "repetition" is the
  fallback.
- **Paradox** (figure). Each of the four phrases defines a ground of
  greatness by a word of blame. That is a paradox as *Silva Rhetoricae*
  defines it (its own example is the saying about losing one's life and
  finding it), and the book itself uses the word of Abraham (p4, blocks
  7, 8 and 31). The plain line is right.
- **What the page joins.** Built in a private copy of the site (see
  "Beside the artist") and looked at in pictures at 1280 and 390. In
  the Refrain tab a spine joins the four openings and nothing joins the
  marks on the last sentences, as the caption has it. In the Paradox
  tab a stroke joins each of Abraham's four to its word of blame
  (strength to weakness, wisdom to folly, hope to madness, love to
  hatred of one's self); the heroes' four stand unjoined. That is what
  the caption joins, so no `join` was set.

## 4. The words

Each entry behind a gloss was opened again.

- *Held*: Ferrall and Repp, *A Danish-English Dictionary* (1845),
  p. 124, on the page image: good luck, fortune, success. The Danish
  has the word five times in the whole book (counted on the text of
  SKS 4, pp. 99-210): four in the Preparation and one at p. 133. The
  adverb *heldigviis* is not counted.
- *den, der* and *Barnet*: Ferrall and Repp, p. 57 (Den with a
  relative: he or she that; Der: who, which, that); the Danish text,
  pp. 108-11. Found: the poet's caption went further than this (see
  section 6).
- *forfærdeligere*, the word behind Hollander's "worse means" (block
  6, words 64-65; the Danish text, p. 108). The poet looked for it in
  the dictionary of 1845 and did not find it. It is there, on p. 86
  (the dictionary sorts æ with ae), read on the page image: Forfærde,
  to terrify, appal; forfærdelig, terrific, appalling, frightful,
  horrific, dreadful. So the Danish says more dreadful means. The first
  remark of the Turn tab now says so, with a ground, and the word is in
  the list of dictionary entries. Hollander himself has "more
  terrible" for the same comparative in the last words of the third
  telling (p2, block 12; the Danish, p. 110) and "more terribly" in
  the speech (p3, block 10; p. 115). So in the Danish the word of the
  first paragraph's last sentence comes back as the last word of the
  third telling. That is in the working record under the tab. It is
  not on the page: the remark is long enough, and the page claims
  nothing from the echo.
- *salige*: the one place where the Danish Bible's word for *blessed*
  could be checked is the edition's note to p. 117, line 21, which
  quotes Luke 23:28-30 from the New Testament of 1819. The note on
  *Happy* now says only that (at Luke 23:29 the English Bible has
  *blessed* and the Danish of 1819 has *salige*), and Luke 23:29 is in
  the list of verses.
- *maiden*: Online Etymology Dictionary (an unmarried woman, usually
  young). The Danish is *jomfrueligt*.
- Genesis 21:8: King James Bible.
- *Spekhøker*: the edition's note to p. 135, line 7, and Ferrall and
  Repp, p. 298 (chandler, cheesemonger). *greengrocer* and *chandler*:
  Online Etymology Dictionary.
- The phrase from Ephesians: the Danish text, p. 135; the edition's
  note to p. 135, line 9, which gives the wording of the New Testament
  of 1819; Ferrall and Repp, p. 28 (Beleilig); King James Bible,
  Ephesians 5:16; *redeem* in the Online Etymology Dictionary.
- *absurd*: the gloss and the note stand on the book's own account
  (p4, block 27). The poet's note also gave the Latin root of the
  English word from the Online Etymology Dictionary. I cut that
  sentence: the root of the English word says nothing about
  Kierkegaard's Danish term, and the note is about the term.
- *the movement of infinity*: the book's own next sentence (block 21,
  words 161-179) and blocks 15 and 26.
- The four sources of the second passage: the edition's notes to
  p. 113, lines 29, 30 and 31 (one with *formentlig*, one with no
  hedge, one with *måske*; none on hope and madness), and the note to
  p. 119, line 9, for Plato's *Phaedrus*. The verses in the King James
  Bible.

The Danish senses are of Kierkegaard's own time (a dictionary of 1845,
a New Testament of 1819) or are the book's own. Of the English words
glossed, *maidenly* and *green-grocer* are Hollander's of 1923 and
*redeem* is the King James Bible's; the senses the dictionary gives
for them are older than either.

## 5. Auden

- **The view** (*Forewords and Afterwords*, p. 192). Read again in the
  scan (fa.txt, lines 9180-9202; the page number stands at the foot).
  The quotation is exact, 19 words. The paraphrase keeps to him: the
  extract from Bonhoeffer, that Kierkegaard could not truthfully have
  claimed as much for himself, that the portrait shows he knew this for
  a defect, and Auden's summary of Kierkegaard's verdict. Auden does not
  name the book there; the reading says "which is in this book" on the
  strength of the hosted text (p4, blocks 15-21), and `view.checked`
  says so. The third passage is from that portrait, so the passages
  bear on the view. The view stands.
- **1947, the introduction to Baudelaire's *Intimate Journals*.** Not
  on this machine. I read the sentences in full-text search snippets of
  two scans at archive.org: the volume of *Prose* (item
  prosetravelbooks0000aude) and the 1947 edition itself (item
  intimatejournals0000char_k2x1). They agree with research notes C,
  appendix H17s, word for word; the quotation is exact, 21 words. The
  snippets carry no page numbers, and search inside the borrow-only
  scan is refused without a loan, so pp. 309-10 rest on the research
  notes. Found: two paraphrases went a little beyond him or sat too
  close to him (see the changes).
- ***The Dyer's Hand*, p. 443** ("Genius & Apostle"). Read again in the
  scan (dh.txt, lines 20963-21003; running head at the top of the
  page). The paraphrase keeps to him. He is not writing about this book
  there, and the entry says so. I kept it in the list because it bears
  on the second passage (why Abraham, and that it is no matter of
  talent) and because the Paradox tab cites it. On p. 454 of the same
  essay (lines 21573-21576; the head of p. 454 is at line 21535) he
  calls Don Quixote the Knight of Faith. That is a passing use of the
  term; it is in notes.md, in a section I added at its end, and not in
  the list.
- ***Forewords and Afterwords*, p. 192** (the styles) and **p. 168**
  (the preacher; Newman). Read again in the scan. Both keep to him.
  Found: one caption applied the sentence on styles to the passage (see
  section 6).
- **Pearce.** The scan on this machine begins on p. 131, inside the
  last sentences of this lecture. The sentences of pp. 129-30 that the
  entry reports were found again in search snippets of the book at
  archive.org (item whaudenfarinteri0000bold) and agree with research
  notes C, appendix H21. A search of the volume for the book's title
  found nothing. Found: the entry called Pearce a graduate student,
  which is in research notes A only and not in the scan; it now says
  "a student in the class" and adds, from the scan, that note-taking in
  class was forbidden (p. 131) and that he wrote his notes just after
  (p. 134). The source line now gives pp. 129-31 and 134.
- **1944, "A Preface to Kierkegaard."** Found in a search snippet of
  the volume of *Prose*. The venue and date, which the research notes
  gave from memory, are now checked: a snippet of the volume prints
  them at the end of the review, and Mendelson's book cites the review
  so in a note (with *Prose* II 214 for another sentence). The entry is
  a sentence from a review of another book that names this one in a
  list. By the rule it could go to notes.md. I kept it, because it is
  the one place found where he names this book and says who should read
  it first, and I told the lead in `open`.
- **Mendelson, *Early Auden, Later Auden*** (2017). The poet gave pp.
  476 and 485 from the research notes. I read the book's full text at
  archive.org (page numbers at the head of each page): p. 476 (the
  command to rejoice in "In Sickness and in Health"), the footnote on
  p. 485 (the James poem and the dancer), and pp. 459-60 ("The Quest"
  and the sonnet "The Hero"). Found: the entry said "one line" of the
  James poem, and Mendelson says two; and the grocer of the view is
  already in the sonnet of 1940, which the list did not have. Both are
  mended (see the changes). The sonnet itself was read in a scan of
  *The Collected Poetry* (1945), pp. 259-60 (numbers at the foot).
  Nothing of it is quoted.
- **Kreyling.** Found in one search snippet of the book at archive.org
  (item novelsofrossmacd0000krey), which names both titles. The page
  number rests on research notes A.
- **Is the list right by the rule?** Every entry bears on a passage
  shown (the grocer, the absurd and the dancer on the third; the
  preacher, and why Abraham, on the second), or on the work as he
  taught it (Pearce, Millar), or was said or written in 1940-41. The
  one doubtful case is the 1944 sentence, as said above.

## 6. The reason and its ground, tab by tab

Each caption and each `why` was taken a sentence at a time.

**Refrain.** The facts are on the passage and in the Danish. Two
faults. The caption said that the last sentences begin with one word,
while the marks sit on the words after it; it now also says who is
called happy, which is what the marks show. And it said that the fixed
frame "sets the four side by side", an effect with nothing under it but
the handbook commonplace. The narrator himself says that the man
thought of the event in these and "in many similar ways" (p2, block
18), so the caption now gives the reason in his terms: the returning
paragraph marks each telling as one of a set. The reason is true of
this passage and meets the book's own frame.

**Turn.** This is the tab the poet asked the examiner to press. The
facts stand: each last sentence takes up a word of its own paragraph;
three are in the past with a negative and one in the present without;
the Danish has the same tenses and negatives; the paragraphs themselves
speak in the present of what a mother does. The step from there to
"the first and third appear to call happy someone better off than the
Abraham just shown" is an inference. It is marked with "appear" in the
caption and the `why`, named as an inference under the tab and in a
caveat, and the caption makes no claim about the second sentence. I
kept it and looked for something in the text to stand under it. There
is one thing: the first paragraph on weaning shares two words with the
telling before it, *changed* and *glance* (blocks 5 and 6; *forandret*
and *Blik* in the Danish, pp. 107-8). In the telling the father's face
is changed and his glance wild; in the paragraph the child thinks the
breast changed while the mother's glance is as loving as ever. That is
now a ground and is named under the tab. A second thing was found late:
where Hollander has "worse means" the Danish has more dreadful means
(section 4), which fits a telling in which the father makes himself
terrible to the boy. The first remark beside the passage now gives the
Danish sense, and says no more than that. The caption was not changed.

**Tellings.** Checked against Genesis 22 verse by verse (verses 3, 5,
8, 10, 11-13, 17-19; Sarah is not in the chapter) and against blocks 0,
5, 8, 11-12, 15-16 and 18. One sentence was cut: "Each ends in a loss."
It was the poet's own summary (the notes say so) and a general
statement that the first telling does not plainly bear out: it ends
with Abraham's thanks that Isaac keeps his faith, and what Abraham has
lost there has to be read in. What the text does plainly show is in the
next sentence, which I kept: no telling ends in a blessing, where
Genesis and Auden's sentence do. The `why` now says that.

**Words (first passage).** The caption said that Kierkegaard's words
"fit a mother or a father alike" and that Hollander's "point to a
father". The dictionary says only that *den, der* is he or she who. So
the caption and the note now say what the Danish leaves open: whether a
woman or a man is called lucky. The count of five was made again on the
whole Danish book. The fifth place and Hollander's other word for it
are in p4, block 15.

**Build.** The caption said that a speech of praise "ranks its subject
above others". The outline it cites (*Silva Rhetoricae*, the encomium)
says less: compare the subject favorably with someone else, to raise
the praise. The sentence now says that. In the English the verdict is
worded four ways (the comparative at words 59, 103, 233 and 274 of
block 2, the superlative at 148 and 175); the Danish has one wording
six times. The caption says "this verdict" and is true of both. The
Danish count before the first naming was 659 in the ground; it is 655
when the three words of the title are left out, and the ground now
says so. The number is not printed.

**Paradox.** Two sentences about what a speech of praise lists went
beyond the outline they cited (*Silva Rhetoricae*, the encomium), so
they stood on nothing; they were cut. In their place is something the
book says: the narrator calls the content of Abraham's life *the
enormous paradox* (p4, block 7; so too blocks 8 and 31; p. 128 of the
Danish). The sentence from Auden was brought back to what he says: no
hero in the poetic sense, with no exceptional gifts, only the nature
any man has. It now reads "nothing beyond what any man is born with".

**Sources (second passage).** The caption said that three of the four
pairings "have a source in the New Testament". The edition proposes
them, one with *probably* and one with *perhaps*. The caption now says
that the notes of the Danish edition trace them, and its closing
sentence says "in terms the notes trace to Paul and John". The meeting
with Auden (a preacher of Christian teaching, p. 168) is fair: he says
it of Kierkegaard as a writer, and the caption does not claim he said
it of this sentence.

**Speech.** Counts right. "Ranks every kind of greatness" became
"ranks the great", which is what the paragraph does; the third row of
the facts was reworded to match. The order of the school speech is as
*Silva Rhetoricae* gives it.

**Yet.** One sentence was an inference with no mark on it: "So what he
does has to be stated, and it comes after a yet." What the text shows
is the order: three statements of what can be seen, then *yet*, then
what cannot, after paragraphs that say no sign betrays the man (blocks
17-19). The sentence now says only that. The Danish has *dog* four
times in the same stretch (p. 135).

**Words (third passage).** The sentence on the phrase from Ephesians
now says whose Bible: a phrase of the Danish New Testament, which is
what the edition's note shows (the wording of 1819). The sentence from
Auden on styles read as if said of this passage; it now says "of
Kierkegaard's writing at large". The phrase about the sublime and the
pedestrian is in the Danish at p. 136, in lines Hollander leaves out;
the English is the page's own, and a caveat says so.

**Day.** "Likens the man to someone twelve times" became "to twelve
other figures". I counted the likenesses again in the English (blocks
17-21) and in the Danish (pp. 133-35): twelve named figures in both. A
general phrase in block 18 about worldly people names no figure and is
not counted; the working record and a caveat say so. The Danish prints
the whole portrait as one paragraph, so the five paragraphs are
Hollander's; the heading line of the drawing now says "in this
translation's five paragraphs". "Only at the window" is true: blocks 19
and 20 say what the man believes about a dish and a building, and block
21 alone says what he does every moment.

No tab was removed. Every caption still gives a reason, and each
`grounds` list matches what its caption now says.

## 7. The prose

Read for house style: no dashes inside sentences, no rhetorical
questions, no "we", no stock words; the checker's lint is clean. Titles
of books were in roman type in the line under the title, in the source
lines and in two entries of the list; they are now marked for italics
(KIT-CHANGES says these are the examiner's to mark), and so are the
words spoken of as words in the notes of the three word tabs and in one
remark of the Turn tab. Lengths are inside POET.md's limits: captions
92 to 110 words, every `why` 40 or fewer, every note under a tab 70 or
fewer, `view.says` 70, the entries of the list 23 to 102.

## 8. The rules

- Runs of words shared with a source were looked for by script, in
  every string of the reading. Against the hosted text and the King
  James Bible, nine strings ran seven or eight words as the source has
  them: two facts of the Tellings tab, its `why`, two notes of the
  first Words tab, one note of the Sources tab, and three working
  fields. A working field of my own held eight words of the Danish.
  All are now paraphrases or shorter. The longest run left is six
  words.
- Against the scans of Auden, Pearce, Mendelson, the 1945 *Collected
  Poetry*, the research notes, *Silva Rhetoricae* and the Online
  Etymology Dictionary: nothing over five words outside the two
  declared quotations, titles, and terms the book itself gives. Two
  paraphrases were moved further from their source all the same (the
  sentence on Agamemnon, and the line about the grocer in the sonnet).
- Two quotations of copyright prose, 19 and 21 words, both exact. No
  other.
- The passages are short: eight short rows, 106 words, 103 words.

## 9. The printed notes

Written for a reader. Source lines give the book or article, the year
and the page. `sources` has fourteen entries, beginning with the text
printed here; things not seen in full say so. Each tab has its note of
one to four sentences with links into the copy printed here. There are
five caveats, each under fifty words: whose translation and whose
counts; the 1947 sentences and the lecture; what the first passage
shows whole and what it cuts, and Hollander's *he*; the inference of
the Turn tab and how the twelve were counted; the proposed sources and
the page's own English for one Danish phrase. The checker's last line
on them: fit to print.

One fact in these notes did not hold. The first source line and the
first caveat called Hollander's selection about a third of the book.
That is his own figure: the last footnote to his selection in the
Gutenberg text says so (the footnotes are not in the copy printed
here). A count does not bear it out.

- The copy printed here has 11,785 words (441, 1,511, 3,375 and 6,458
  in its four parts).
- The Danish book has about 41,000 words (SKS 4, pp. 99-210, as
  tekster.kb.dk gives it, with Kierkegaard's own footnotes; headings
  not counted): preface about 1,040, Preparation 1,318, speech 2,970,
  Preliminary Expectoration about 10,230, the three Problems about
  24,500, epilogue about 930.
- In the Preparation, which Hollander gives paragraph for paragraph,
  his English has 1,511 words for the 1,318 of the Danish (1.15 to
  one). In the speech it has 3,375 for 2,970, with one cut that
  shows: block 11, 42 words ending on marks of omission, stands for a
  Danish paragraph of 154 (pp. 116-17). For what he keeps of the speech
  that is about 1.18 to one. The name comes 51 times in his speech and
  56 times in the Danish.
- At those rates the whole book would be 47,000 to 49,000 words of his
  English. His selection is a quarter of that, or a little under.

So he gives about two fifths of the preface, the Preparation, nearly
all of the speech and a little over half of the Preliminary
Expectoration, and nothing of the Problems or the epilogue. The source
line now gives both figures. The caveat says about a quarter, adds that
he says a third, and says that the selection leaves out the three
Problems and much else. The line for the Danish now gives the pages of
the whole book (99-210), since this count and the count of *Held* were
made on all of it, and says that what the page uses stands on pp.
99-136.

## Every change, in one list

No mark, row, key or tab was changed. Words only.

1. Refrain: caption says who is called happy; "sets the four side by
   side" replaced by the narrator's own account; `why`, first ground
   and the note under the tab to match; the note says the word is used
   of prose.
2. Turn: two grounds added (the shared words of block 5 and block 6;
   the Danish word behind "worse means") and the note under the tab
   rewritten to name them; the first remark now gives the Danish sense,
   more dreadful means; *not* marked in the fourth remark. Caption
   unchanged.
3. Tellings: "Each ends in a loss." cut; `why` reworded twice (the
   blessing; a run of seven words); two facts reworded (the mother of
   the second telling, Abraham of the third).
4. Words, first passage: the claim about a mother or a father replaced
   by what the Danish leaves open; the notes on *Happy*, on *he who*,
   on *weaned* and on *maidenly fashion* reworded; `why`, a ground and
   the note under the tab to match.
5. Build: the sentence on the school speech; "which the speech has not
   said before"; the Danish count 659 to 655 in the ground.
6. Paradox: two sentences cut and one put in their place, with its
   ground; the sentence from Auden corrected; `why`, grounds and the
   note under the tab to match.
7. Sources: "have a source" to "the notes trace"; the closing sentence;
   the note on John 12:25 reworded; *Phaedrus* marked.
8. Speech: "ranks the great"; the third row's `about`; 659 to 655 in
   `counted`.
9. Yet: one sentence, and its ground.
10. Words, third passage: "a phrase of the Danish New Testament";
    Auden's sentence said of his writing at large; the Latin root cut
    from the note on *absurd*; the note under the tab merged to four
    sentences.
11. Day: "twelve other figures"; the heading line; the working record
    of the count; the note under the tab.
12. The list of what else Auden said: the 1947 entry (gifts; the
    sentence on Agamemnon); the Pearce entry (a student; how he made
    his notes; pages); the 1944 entry (venue and date in the source
    line); a new entry for the sonnet "The Hero" (1940); the entry on
    two more poems (two lines, not one; where the dancer passage
    stands); every `checked` brought up to date.
13. Titles marked for italics in `where`, `view.source`, every source
    line of the list, and two entries.
14. `sources`: Luke 23:29 added; the 1944 review's venue and date; a
    new entry for *The Collected Poetry* (1945); Pearce's pages;
    Mendelson's pages; Kreyling on a line of his own; *absurd* taken
    out of the Online Etymology Dictionary's list; Forfærdelig added to
    the entries of the Danish dictionary; the first line now gives
    Hollander's own figure for the size of his selection (a third) and
    the count (a quarter); the line for the Danish gives the pages of
    the whole book.
15. `caveats`: five, rewritten. The first says about a quarter of the
    book where it said about a third.
16. `open`: my findings added in brackets to seven of the poet's
    entries, and one new entry for the lead.
17. notes.md: a short section at the end (the passing use on p. 454 of
    *The Dyer's Hand*; Mendelson, p. 602).

## The source read for each fact

| Fact | Where I read it |
|---|---|
| Openings, last sentences, tenses, repeated words | the proof; p2, blocks 6, 9, 13, 17 |
| The same in Danish | SKS 4, pp. 108-11, at tekster.kb.dk |
| What a refrain is | Online Etymology Dictionary, refrain (noun); Baum, chapter 5 and glossary |
| The subtitle | title page, SKS 4, p. 99; Hollander's introduction |
| The narrator on the four tellings | p2, blocks 0 and 18 |
| What Abraham does in each telling | p2, blocks 5, 8, 11-12, 15-16 |
| The shared words of the first telling and its paragraph | p2, blocks 5 and 6; SKS 4, pp. 107-8 |
| Genesis 22 and 21:8 | King James Bible (Project Gutenberg no. 10) |
| Sarah not in Genesis 22; the tellings free | the same; K4, notes to p. 105 and to p. 107, line 7 |
| *Held*; *den*, *der*; *Spekhøker*; *Beleilig*; *forfærdelig* | Ferrall and Repp (1845), pp. 124, 57, 298, 28, 86, page images |
| Five times *Held* | counted on the Danish text, pp. 99-210 |
| *salige* at Luke 23:29 | K4, note to p. 117, line 21 |
| No source for the blackened breast | K4, note to p. 108, line 5 |
| *maiden*, *greengrocer*, *chandler*, *redeem*, *paradox* | Online Etymology Dictionary |
| The plan of the two sentences; the first naming; six verdicts | the proof; p3, blocks 0-2; counts by script |
| The same in Danish; 655 words; 56 namings | SKS 4, pp. 112-19 |
| The school speech of praise; paradox; anaphora | *Silva Rhetoricae* |
| The narrator's own word paradox | p4, blocks 7, 8, 31; SKS 4, p. 128 |
| The four pairs in Danish | SKS 4, p. 113 |
| The New Testament sources | K4, notes to p. 113, lines 29, 30, 31; the verses in the King James Bible |
| The divine madness; Plato | p3, block 17; K4, note to p. 119, line 9 |
| Four *dog* | SKS 4, p. 135 |
| No sign betrays the man; what the narrator cannot do | p4, blocks 13, 15, 17-19, 28 |
| The phrase from Ephesians | SKS 4, p. 135; K4, note to p. 135, line 9; Ephesians 5:16 |
| The absurd; infinite resignation | p4, blocks 15, 21, 26, 27 |
| The sublime in the pedestrian; the dancer; what Hollander leaves out | SKS 4, pp. 135-36; K4, note to p. 136, line 5; p4, blocks 21-22 |
| The portrait's day and its twelve figures | p4, blocks 15-21; SKS 4, pp. 133-35; K4, note to p. 134, line 19 |
| Auden, 1968 and 1952 | fa.txt, pp. 192 and 168 |
| Auden on genius and apostle | dh.txt, p. 443 (and p. 454) |
| Auden, 1947 and 1944 | search snippets at archive.org; research notes C, H17s and H17t |
| Pearce | pearce.txt, pp. 131 and 134; snippets for pp. 129-30; research notes C, H21 |
| Mendelson | full text at archive.org, pp. 459-60, 476, 485, 602 |
| The sonnet "The Hero" | *The Collected Poetry* (1945), pp. 259-60, scan at archive.org |
| Kreyling | one search snippet; research notes A |
| How much of the book Hollander gives | his last footnote, in the Gutenberg text (research/texts); counts by script on the hosted text and on SKS 4, pp. 99-210 |
| The Sunday walk | K4, note to p. 134, line 19; p4, blocks 18-19 |

## Still doubtful

- The page numbers 309-10 for the 1947 introduction were not seen by
  me. The words were.
- Pearce, pp. 129-30, and Kreyling were seen only in snippets.
- Which translation the class read is not known. Mendelson's note to
  his p. 460 cites Robert Payne's translation of 1939 for Auden's own
  reading in 1940. Payne's text was not seen, so whether Auden's word
  *grocer* comes from it is not known either. The page says nothing of
  Payne.
- The English of every Danish word and phrase is the poet's, but for
  "more dreadful", which is mine from the dictionary of 1845. I checked
  each against the Danish and that dictionary for every word a caption
  leans on. No reader of Danish has seen the page.
- The inference of the Turn tab is an inference. It is marked as one in
  four places.
- "Refrain" is used of prose by extension.
- The 1944 entry may belong in notes.md by the letter of the rule.
- "About a quarter of the book" sets English words against Danish
  words, scaled by the two sections Hollander gives whole or nearly
  whole. It could be out by a point or two. It could not be a third.

## Beside the artist

The artist was at work on this piece from 08:33 UTC and does not edit
the reading. I wrote only inside this folder. To see the mended tabs I
built the piece in a private copy of the site outside the project and
photographed it there (all eleven tabs at 1280 and 390, and the whole
page), the last time with the kit and the artist's script as they stood
at 10:08 UTC. The three drawings read the mended facts without error.
I did not build the site's own page: its built file
(site/data/pieces/kierkegaard.json) is made by the artist's runs. My
last changes to anything printed were made at 10:04 UTC (the first two
lines of the sources and the first caveat). A run of the artist built
the page again at 10:06 UTC, and at 10:08 UTC the built file was byte
for byte the same as a private build of the reading. If the reading is
changed again, the page must be built once more
(`node build/pieces.mjs kierkegaard`). Two tests that a built page is
current: the first remark of the Turn tab ends with the words "more
dreadful means", and the first caveat says "about a quarter".

In the facts of the three shape tabs no key was renamed, added or
removed. Four strings a drawing prints were changed (two in Tellings,
one in Speech, the heading line of Day).

art.md, section 3, proposes one new fact for the lead to set: in the
Speech tab, on the row of paragraph 3, "words before the name": 749. I
counted the same number (749 words stand before the first naming). It
is true and I left it for the lead, as the artist asks. art.md,
section 4, pointed out the titles in roman type and the long heading
line of the Day drawing; both are mended.

## The last lines of the checker

`node build/tools/check-reading.mjs kierkegaard --print`, last three
lines:

    no problems
    no warnings
    the printed notes are fit to print
