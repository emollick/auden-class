# Moby-Dick: the examiner's record

Piece `moby-dick`. Examiner started 2026-10-03, 06:16 UTC (see `examiner.txt`).
The words of the novel are pointed at by block and word number, as the
checker prints them. Nothing of Auden's is quoted here.

Verdict: MENDED. The passages, the eleven tabs and the view all stand.
Sixteen things were changed (section 10). The checker ends with no
problems, no warnings, and the printed notes fit to print.

## 0. State on arrival

- `node build/tools/check-reading.mjs moby-dick`: no problems, no warnings,
  printed notes fit to print.
- Three passages, eleven tabs: `whenever` (c001, block 0, words 56-149:
  Sentence, Figure, Word), `rails` (c037, block 1 and block 4 words
  225-269: Beat, Figure, Word, Play), `rachel` (c128, blocks 14, 15 and 18
  in part: Figure, Sentence, Word, Ships).
- No `site/js/pieces/moby-dick.js` at any time I looked (06:41, 07:09 and
  at the end), so no drawing reads the facts yet. No key in `facts` was
  renamed or reshaped, and no value in `facts` was changed.
- The reading was changed only by small exact edits. A copy of it as it
  arrived is in my scratch folder (`moby-exam/reading.arrival.json`).

## 1. The proof

Every line of the proof read. Each mark sits on the word it is meant
for, with these exceptions, all at words joined by a dash.

- c001, block 0, word 127 is two words joined by a dash (127.1 ends the
  fourth clause, 127.2 opens the main clause). Three marks ran under
  both. MENDED: the fourth "waits" span now ends at 127.1; the "main"
  span now begins at 127.2 (the poet's own count of 15 words for the main
  clause starts there; the span began at 128); the Figure's "then" is now
  [127.2, 127.2]. The poet's note says the two words "cannot be parted".
  They can: the checker prints 127.1 and 127.2, and the page sets this
  word in two parts (`shots/final-whenever-0-sentence-1280.png`).
- c128, block 15, word 14 is also two words joined by a dash (14.1 is the
  last word of the narrator's clause, 14.2 the first word of Ahab's
  speech). The poet's marks stop short of it on both sides: the
  "narrator" span ends at word 13 and the first "flat" span begins at
  word 16. I moved them to 14.1 and 14.2, photographed the page, and put
  them back. Reason: THE PAGE DOES NOT PART THIS WORD. In
  `site/js/kit/plate.js` (`buildWord`) a joined word is set in two parts
  only if every syllable begins inside one of the parts; here the
  syllable after the dash begins with the opening quotation mark, which
  lies in neither part, so the parts are dropped and a mark on 14.1 or
  14.2 is ruled under the whole word. Asked of the page itself: word 127
  of c001 has two parts; words 2 and 14 of c128 block 15 have none. With
  14.1 and 14.2 the page ruled the narrator's last word as part of Ahab's
  sentence (`shots/kit-fault/`, three photographs). With the poet's marks
  nothing false is drawn; the narrator's rule stops one word early and
  the vocative is not ruled (`shots/final-rachel-1-sentence-1280.png`).
  This is for the lead (it is in `open`): when the kit parts such words,
  set the two marks to 14.1 and 14.2. The checker already prints them
  correctly.
- Word 2 of the same block is joined in the same way. No mark lands on
  it.
- No other mark lands on a joined word (c001 block 0 words 5 and 9, c037
  block 4 words 75, 101 and 157, c128 block 14 words 35, 44, 50 and 56
  lie outside the rows shown).

Counts on the first passage, by word number: the sentence runs from word
56 to word 141, 86 tokens and 87 words (word 127 is two). The clauses:
56-64 (9 words), 65-74 (10), 75-93 (19), 94-127.1 (34), then 127.2-141
(15). 9 + 10 + 19 + 34 + 15 = 87. Each of the four clauses is longer
than the one before. The passages hold 94, 74 and about 80 words.

Photographs. `shots/final-*.png` show every tab, the whole page, and
the two folded notes opened (`final-notes-open-0` and `-1`), at 1280 px,
as the finished reading draws. I did not run `build/pieces.mjs` into
`site/`: the task keeps my writing to this folder. I ran it with its
output turned aside into my scratch folder (`moby-exam/redirect.cjs`,
`moby-exam/built/`) and photographed the page with that file served in
place of `site/data/pieces/moby-dick.json` (`moby-exam/shoot2.mjs`,
`moby-exam/notes-open.mjs`). `site/` was not written to by me. The
photographs were taken a first time at 07:10 UTC and, because one
caption and one caveat were changed after that, again at 07:22 from a
fresh build; the first set was written over. A build of the site made by
another session at 07:13 UTC is the same, byte for byte, as mine of the
finished reading. The browser reported nothing.

## 2. The ear

Only the Beat tab of the second passage is scanned. I marked both rows by
word number before looking at the poet's marks, then set the two side by
side. They agree.

- Block 1 (29 words, 0 to 28): 36 syllables with word 15 said as two, eighteen
  rising feet, in phrases of 4, 5, 6, 1 and 2 feet. A light stress off
  the beat at word 7. Words 23-24 are most naturally a turned foot
  (stress on 23); the other way, with the stress on 24, is possible.
- Block 4, words 225-269: 63 syllables (2, 21, 26, 14 to the four
  stops). Words 225-226 are two stresses. Words 229-232 leave the rule:
  the beat on 230 is passed over, 231 and the first syllable of 232 are
  two stresses together, and 232 leaves one syllable over. From 233-234
  to 258-259 the voice keeps the rule for 7 + 13 = 20 feet, with one
  turned foot at 245, a light stress on the beat at 248, and the last
  syllable of 257 unstressed on a beat. Words 260-269: two turned feet
  (260-261 and the first two syllables of 262), then five feet in step,
  the beat on 266 passed over.
- The stated measure ("a rising beat ... the foot of blank verse") is the
  real movement of this prose, and the caption does not call it verse:
  it says "in prose", and the first remark says that only the second
  phrase has five feet. That is so (4, 5, 6, 1, 2).
- Other hearings, all already in the second caveat: word 7 with no
  stress; word 15 as three syllables; 23-24 regular; 225-226 with one
  stress; 248 unstressed; the last syllable of 257 lightly stressed. The
  caption leans on none of them: it says the foot at 23-24 "can be
  heard" turned, and names the turned foot at 245 and the unstressed beat
  in 257, which are not in doubt.
- How the device works: Baum, *The Principles of English Versification*
  (1922), chapter 5 (lines 6971-6984 of the copy on this machine: lines
  overweighted with stress retard the tempo) and chapter 4 (lines
  2796-2801). The third remark stands on that.
- The marks as the page draws them were read in
  `shots/final-rails-0-beat-1280.png`, dot by dot, against the two voice
  strings. They match.

## 3. The terms, and what the page joins

Silva Rhetoricae opened for each (rhetoric.byu.edu): anaphora (the same
word at the beginning of successive clauses), antimetabole (words
repeated in successive clauses in reverse order; it says the figure is
sometimes known as chiasmus), chiasmus (ideas or structures inverted,
which is not the same words repeated), metaphor (a comparison made by
referring to one thing as another). Merriam-Webster for anaphora and
metaphor; Britannica for anaphora and blank verse; Wikipedia, Chiasmus.

- Anaphora (first passage): the word at 56, 65, 75 and 96 heads four
  clauses in a row. The fourth has two words before it (94-95), and the
  caption says so. Rightly named.
- "Repeating the word makes the clauses one list": no handbook entry I
  opened says this in so many words. It is one of the four examples of
  common craft knowledge that POET.md itself names, and the plate shows
  it (four parallel clauses, one answering word at 127.2). Left.
- Metaphor (second passage): his path and his soul (228-232, 239-240)
  are spoken of as a railroad (236-237, 241-244, 268-269), with no like
  or as. Rightly named. The ship's wake and track (block 1, words 6 and
  22) are literal; the caption says he says I for the ship, which is
  what block 1 does.
- Antimetabole (third passage): the crossing is on the plate. One verb
  ends the main clause of the plea's first sentence (block 14, word 3)
  and ends the last sentence of the refusal (block 15, word 40); the
  other opens the plea's second sentence (block 14, word 13) and stands
  in the refusal's first (block 15, word 19). The plea has the second
  verb twice (words 13 and 21). So the order is A, B, then B, A, with the same words: by
  Silva's distinction that is antimetabole, not chiasmus. But it runs
  from one speaker to the other with three sentences between B and A in
  the reply, and the handbooks define the figure in successive clauses.
  The caption says that this one runs from one speaker to the other, and
  the third caveat says what the handbooks define. KEPT, with the doubt
  stated in `open` for the lead.
- The plain-words glosses of the three terms are right.

What the page joins (`shots/final-*-figure-1280.png`):

- First passage, Figure ("align"): a stroke joins the first of the four
  words to the second and the second to the third; the fourth, two lines
  on, is told by its color. Strokes also join the list's items each to
  the next (64 to 74, 74 to 82, and an arc from 83 to 91). The caption
  joins exactly these: the four heads, and the items as one list. Nothing
  to change.
- Second passage, Figure ("map"): underlines in four colors, no strokes.
- Third passage, Figure ("cross"): underlines in four colors, no strokes
  (the parts are too far apart); the crossing is told by color, A B, B A.
- No `join` was needed.

## 4. The words

Each entry opened in this session (pages fetched with curl; Britannica
through the fetch tool because it refuses curl).

Online Etymology Dictionary: hypo (1711, depression of spirits),
hypochondria, involuntary and voluntary (Latin voluntas, will, with in-,
not), deliberate and deliberately (with a set purpose; to weigh well;
libra, scales), method and methodical (a following after; hodos, a way),
turbid, envious and envy (Latin invidere, to look at with malice, to cast
an evil eye on; invidus, having hatred or ill will), whelm (to cover
completely, 1550s; to engulf, 1660s), groove (the verb 1680s; a rut,
1842), sound (v.2), rifle (v.1, to plunder, early 14c.; v.2, to cut
spiral grooves, 1630s), err (Latin errare, to wander), unerring (1640s),
avast (1680s, probably Dutch houd vast), good-bye (godbwye, 1570s, from
God be with ye), aye (assent, 1570s).

Merriam-Webster: hypo (noun 1, first known use 1709), involuntary,
methodical, account (to think of as, consider), whenever (at any or
every time that), upper hand (mastery), find 3b, ball 1c, periodic
sentence, turbid, unsounded (adjective 2: not fathomed or probed),
unerring, anaphora, metaphor, blank verse, iamb, pentameter, quarterdeck
(the stern area of the upper deck), foremast (the mast nearest the bow),
foretop (the platform at the head of the foremast), forecastle (the
forward part of the upper deck).

Wiktionary: find oneself, sense 2 (to begin to do something without
meaning to); hypo (obsolete: melancholy, a fit of hypochondria; it cites
this very sentence); envious, sense 1 (which ends in maliciously
grudging) and sense 3 (obsolete: malignant, spiteful); where'er (a
poetic contraction).

The Bible (bible-api.com): Jeremiah 31:15 in the King James Version (the
name is spelled Rahel; the verse ends with the four words at block 18,
words 32-35) and in the World English Bible; Matthew 2:16-18; Matthew
7:12; Luke 6:31; Luke 14:26. Britannica, Golden Rule.

Findings:

- Every gloss says what its entry says, and every sense was current by
  1851 (the latest date leaned on is 1842, for groove as a rut).
- ONE OVERSTATEMENT, MENDED. The Word tab of the second passage said the
  word at block 1, word 15, "has malice at its root". Its root is a verb
  for looking at; "with malice" is how the dictionary glosses the older
  sense of that verb, and the adjective between them means having hatred
  or ill will. The caption now says he gives the waves a word of ill
  will, and the `why` says the word once meant spiteful (Wiktionary's
  obsolete sense). The first sentence of the caption, which gives the
  Latin as the dictionary does, stands.
- Block 4, word 250 has two senses that both fit; the caption gives both
  and chooses neither. Left.

## 5. Auden

The Enchafèd Flood, in the scan (`ef.txt`; in it the page number stands
at the foot of its page), read again at every page cited: pp. 34-36
(lines 1491-1620), 60-61 (2548-2620), 112 (4631-4669), 119
(4909-4950), 124, 126-27, 136-40 (5600-5796). Every claim is where the
reading says it is. Both quotations are exact: 22 words on p. 137 and 20
words on p. 140. No page number is one off.

Pearce, in the scan (`pearce.txt`): the phonograph is brought in at the
foot of p. 135 and Auden's words follow the page mark, on p. 136. So
"pp. 135-36" is right.

"The Christian Tragic Hero" (1945). The poet saw it only in the research
notes. I FOUND EVERY SENTENCE THE PIECE USES in archive.org full-text
search snippets of scanned reprints: Laurence Michel and Richard B.
Sewall, eds., *Tragedy: Modern Essays in Criticism* (1963; the essay is
at pp. 234-38 by its contents page, and the Rachel sentence runs over
onto p. 238); Robert W. Corrigan, ed., *Tragedy: Vision and Form* (1965;
pp. 143-47 by its contents page); the volume of Auden's *Prose* for
1939-1948, which prints the newspaper and date under the essay's last
sentence. The credit lines in both anthologies give The New York Times
Book Review, 16 December 1945, pp. 1, 21. What the snippets show, in my
words:

- the opening sentence calls the book four things at once and also an
  American novel of its century;
- Christian tragedy is the tragedy of possibility: it might have been
  otherwise;
- Ahab is at the beginning what a Greek hero could only be at the end,
  exceptionally unfortunate; this is a temptation and an opportunity to
  choose; he chooses wrongly and goes on doing so;
- Macbeth and Ahab are named together as wrong to listen to prophecies;
- the last offer is expressly the cry for help of a friend in distress
  when the Pequod meets the Rachel, and only after he refuses it does his
  doom become necessary; the next sentences say Melville shows the change
  by having Ahab put Pip in his cabin at this point;
- the last paragraph: Ahab goes unrepentant, like all of Shakespeare's
  tragic heroes, to a death he chose and need not have died; Ishmael is
  no character, having consciousness and no will; he cannot die because
  he has not begun to live, and ends as an orphan with his first choice
  to make.

The essay was not read through as a whole, and the first caveat says so.

Miller: Google Books' search inside the volume (id -UxaAAAAMAAJ) gives
page 135 for the sentence; an archive.org snippet of the scanned book
shows its opening words, that he said it many times. *New Year Letter*:
the note was found in snippets of the scanned Faber edition of 1941
under the heading Line 1566, directly after the page number 152; an
edition of Moby-Dick cites its sentence on Ishmael at p. 153.

Findings:

- The view is Auden's view of this book, each of its five sentences is
  his (essay, and p. 137 for the last), and each passage bears on it:
  Ishmael's condition; Ahab's defiance in the words of fate; the refusal
  after which his end is necessary.
- FOUR PARAPHRASES WENT BEYOND HIM OR FELL SHORT, ALL MENDED:
  1. `auden[3]`: he writes of the saints' acceptance of suffering; the
     reading said they "welcome" it (welcoming pain is what he says of
     Ahab). Now "accept".
  2. `auden[5]`: he says most American books might begin as this one
     does; the reading said "nearly any". Now "most".
  3. Third passage, Word: "Auden writes of him as a religious hero whose
     god is his own will" gave a conditional sentence about the religious
     hero in general as a statement about Ahab. Now the caption says only
     that Auden writes of such a hero, and sets it beside Ahab's wish;
     the fifth caveat and the ground say the rest.
  4. Third passage, Word: "Auden compares the ship to the children Herod
     killed" was looser than p. 61, where the ship is a type of people
     caught up in the mystery without understanding or choice, as those
     children were caught up in the birth of Christ. The caption now says
     that. The `why` said "compares her", which could be read of the
     mother; it now says the ship.
- ONE WAS VAGUER THAN HIS WORDS, MENDED: second passage, Beat, "Auden
  sets Ahab beside Shakespeare's tragic heroes". He says more exactly
  that Ahab dies unrepenting as they do. Caption and `why` now say that.
- ONE LEFT OUT HIS POINT, MENDED: `auden[4]` gave the piano against the
  orchestra without saying that he called the orchestra its fate, which
  is why he played it. Two words added.

## 6. The reason and its ground

Every caption and every `why` taken a sentence at a time. For `plate` I
looked at the proof and the photograph; for `text` I read the block
named and the chapter round it; for `source` and `auden` see sections 4
and 5. Texts read with `show.mjs`: c001 block 0; c016 block 42; c026
block 0; c027 blocks 0 and 3; c036 blocks 0-8 and 39; c037 whole; c038
whole; c039 whole; c040 whole; c041 block 0; c052 blocks 2-3; c054
block 2; c071 blocks 12-19; c081 blocks 4-8; c091 blocks 13-18 and 39;
c100 blocks 1-9 and 29-42; c115 blocks 7-12; c128 whole; c131 blocks
2-7; epilogue blocks 1-2.

No sentence was found that stands on nothing. No caption writes what a
passage offers, suggests, enacts, embodies or mirrors, and none ends on
a sentence that sums up a meaning.

First passage.

- Sentence. Stands. The `why` said that the main clause waits behind
  "four clauses in which Ishmael finds himself doing things and his low
  spirits and a principle act on him". That is true of the first, third
  and fourth, not of the second (words 65-74), which has neither. A
  general statement that one clause breaks: MENDED, the `why` now says
  in two, and in the fourth.
- Figure. Stands. The words the caption gives from the sentence before
  are there (block 0, words 43-46).
- Word. Stands. "For this state" did not say which state: MENDED to the
  condition this sentence describes, which is how p. 36 puts it (the
  image explains the condition that the passages he has just printed
  describe, this sentence among them).

Second passage.

- Beat. Stands. The reason is the book's own (c016, block 42: among the
  Nantucket whalemen a man of greatly superior force learns such a
  language and is formed for such tragedies; the narrator adds that he
  is not yet speaking of such a man, which the ground records and the
  caption does not contradict). The caption now runs from what is there,
  to the book's reason, to Auden.
- Figure. Stands. The dare to the gods and the two verbs that are his
  are in block 4 before the words shown.
- Word. Mended as in section 4.
- Play. Stands. Counted again: 135 chapter files; 17 lines set apart, in
  12 chapters (36, 37, 39, 108, 119, 120, 121, 122 one each; 38, 127,
  129 two each; 40 three). Chapters 37 to 40 hold only directions,
  headings, speech and song. Chapter 40: 51 blocks, of which 1 heading,
  3 directions, 2 songs, 45 speeches; 25 of the crew under their own
  headings; the mate's voice twice; all together three times. Word
  counts 2769, 498, 388, 254, 1509. The count depends on how the text
  marks a direction, and the fourth caveat says so.

Third passage.

- Figure. Stands. "Ahab hands the two verbs back" gave him a gesture the
  lines do not state: MENDED to "Ahab's reply has the two verbs in the
  opposite order". The `why` likewise. The sentence on Auden was moved
  from the head of the caption to its end, so that the caption goes from
  what is there to what it means.
- Sentence. The caption stopped at observation: the plea has a
  condition and a comparison hung on it, the reply has none, and then
  Auden. CARRIED THROUGH TO A REASON THAT STANDS ON THE TEXT: the
  narrator's own word for the refusal, in the paragraph after it (block
  16), is unconditional. One sentence added, with its ground and a link
  in `stands`; the caption reordered so that Auden comes last; "father,
  wife and children" made "father, mother, wife and children", as in
  the text he prints (Luke 14:26).
- Word. Mended as in section 5.
- Ships. Stands. The nine meetings read again in order; the Rachel is
  the eighth. The question is given in six chapters (52 and 71 in six
  words, 100 twice, 115, 128 and 131), in the last four in the same
  five words; Stubb asks in 91; no question is given in 54 and 81. A
  ground was missing for the sentence on the two ships that ask
  something of Ahab: ADDED (c081 blocks 5-8, c128, c115).

## 7. The prose

All 243 printed strings scanned by script and read: no dash inside a
sentence, no rhetorical question, no "we", no stock word, none of the
six verbs the brief forbids, no working word. "How it feels" is Auden's
own phrase on p. 34. The one "not ... but" is inside his quotation.
American spelling, apart from words quoted from the novel.

## 8. The rules

- Phrases from the novel in captions and notes: none longer than six
  words.
- Auden: two quotations in the piece, 22 and 20 words. Two phrases that
  stood close to his wording (the hero's god; the type of the Rachel)
  were put further into other words.
- Passages: 94, 74 and about 80 words.

## 9. The printed notes

Read as a reader would, in `shots/final-page-1280-*.png` and, for the
two notes the page keeps folded (what each caption stands on; where the
page may be wrong), in `shots/final-notes-open-0-1280.png` and
`shots/final-notes-open-1-1280.png`.

- `view.source`: the essay's pages (1 and 21) added, as in `auden[1]`.
- `sources`: the essay's entry now names both reprints the extracts were
  read in, with their pages. Everything else covers what is used.
- `stands`: all eleven read against their captions; the third passage's
  Sentence gained the link to the paragraph after the answer.
- `caveats`: five. The first no longer says the essay "is cited without
  a page" (the sources give its pages); it says the three things were
  read in extracts from scanned copies, not from end to end. The fifth
  was reworded to match the mended caption.
- `checked`, the grounds' `source` and `open` (never printed) now record
  what the examiner found and where.

## 10. What was changed

1. First passage, Sentence: fourth clause's span ends at 127.1.
2. First passage, Sentence: main clause's span begins at 127.2.
3. First passage, Figure: the answering word marked at 127.2.
4. First passage, Sentence: `why` no longer generalizes over four
   clauses.
5. First passage, Word: "For this state" made exact in the caption and
   the `why`; one word saved in the first sentence to make room; the
   ground on Dürer's figure says which condition.
6. Second passage, Beat: Auden's sentence made exact and moved to the
   end; two words saved in the sentence before; `why` to match.
7. Second passage, Word: "has malice at its root" replaced; `why` to
   match; the ground gives the dictionary's chain.
8. Third passage, Figure: "hands ... back" and "makes his refusal from"
   replaced; Auden's sentence moved to the end; `why` to match.
9. Third passage, Sentence: the narrator's word added, with ground and
   link; reordered; mother added to the Gospel list; `why` to match.
10. Third passage, Word: both sentences on Auden made exact; `why` to
    match; the ground on the Rachel reworded.
11. Third passage, Ships: a ground added.
12. `auden[3]`: accept, not welcome.
13. `auden[5]`: most, not nearly any.
14. `auden[4]`: the orchestra as the piano's fate.
15. Printed notes: `view.source`, one `sources` entry, two caveats.
16. Working record: three `checked` (the view, `auden[1]`, `auden[5]`);
    the `source` of the three grounds that stand on the 1945 essay; and
    `open` (three entries added to, four new).

In all 54 places in the file differ from the copy as it arrived
(`moby-exam/diffpaths.mjs` lists them). No `facts`, no row, no gloss, no
note, no label and no heading was changed.

Tried and put back: the two marks at c128 block 15 word 14 (section 1).

## 11. Still doubtful

- The 1945 essay, Miller's memoir and the note in *New Year Letter* were
  seen only in search snippets. Every sentence used was found, but none
  of the three was read from end to end.
- Whether the *New Year Letter* note begins on p. 152 or p. 153.
- The page numbers of *The Enchafèd Flood* are those of the 1967 Vintage
  edition and were not compared with the first edition.
- The name antimetabole for a crossing that runs across two speakers.
- The scansion is of prose, and seven places can be heard another way.
- The count of twelve chapters follows the markup of the text printed
  here.
- The two marks at c128 block 15 word 14 wait on the kit.

## 12. The last three lines of the checker

    no problems
    no warnings
    the printed notes are fit to print
