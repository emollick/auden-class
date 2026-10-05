# The Magic Flute: the examiner's record

Piece `magic-flute`. Begun 2026-10-03 07:53 UTC (see `examiner.txt`),
finished the same day about 10:15 UTC.

Words of the libretto, of the play and of the English libretto are pointed
at by part, row and word number, as the proof prints them. Nothing of
Auden's or of Auden and Kallman's is copied out here; they are paraphrased.

No artist's file for this piece existed while I worked
(`site/js/pieces/magic-flute.js` was absent at the start and at the end).
All the same every change to `reading.json` was a small exact edit; the
file was never written back whole.

**Verdict: mended.** The passages, the marks, the scansion, the three
figures and every gloss stand as the poet made them. What was wrong was in
the sentences: a few general statements that the scene around the passage
breaks, two reasons that claimed more than their grounds, Auden's essay of
1946 used for one sentence when it speaks of this very scene, and
paraphrases of Auden that ran too near his own words. The list of changes
is in section 10.

## 1. The proof

`node build/tools/check-reading.mjs magic-flute` at the start: no problems,
no warnings, the printed notes fit to print. I read the proof line by line.
Every gloss, tie, span, part, point and rhyme tail sits on the word meant:

- `trial` (o-magic-flute/trial rows 2.0 to 9.0; beside it 11.0 w16-21 and
  12.0 to 16.0): 37 glosses, 6 ties, 10 spans.
- `queen` (o-magic-flute/queen rows 0.0 to 7.0, with magic-flute/act-2 block
  45 set under it in the order 45.0 to 45.3, 45.5, 45.6, 45.4, 45.7): 8 rows
  scanned, 3 pinned remarks, 4 rhyme pairs with their tails, 7 parts, 6 ties.
- `weddings` (o-magic-flute/weddings rows 0.0 to 3.0 and 6.0 to 7.0; beside
  it tempest/a1s2 rows 200.0 to 200.2): 14 glosses, 10 parts, 4 ties.

Nothing to change in the marks themselves. No word in these rows is joined
to the next by a dash without a space, so the proof lists no word in two
parts; the dashes of the prose rows and of queen row 7.0 hang on the word
before them (7.0 w1 and w2), and no mark means only half of such a word.

The checker was run after every change. Its last run is at the end of this
file.

## 2. The ear

Only the Queen's eight lines are scanned (queen, tab Beat). I marked them
by ear before I opened the poet's `scan`, counting syllables and beats by
word number.

| row | syllables | where I hear the five beats | off the pattern |
|---|---|---|---|
| 0.0 | 11 | w1 (1st syll.), w2 (1st), w3, w5 (1st, light), w6 (1st) | none |
| 1.0 | 10 | w2 (2nd syll.), w3 (1st), w4 (light), w6; the first beat place is w1 | w0 is stressed where the pattern is light, and the beat on w1 is passed over |
| 2.0 | 11 | w1, w3, w4 (2nd syll.), w5 (1st), w5 (3rd, light) | none |
| 3.0 | 10 | w1 (light), w3 (1st, light), w4 (1st), w5 (1st), w5 (3rd) | none |
| 4.0 | 11 | w0 (2nd syll.), w1 (light), w3 (1st), w5 (2nd); the fourth beat place is w4 | the beat on w4 is passed over |
| 5.0 | 10 | w0 (2nd syll.), w1 (1st), w2 (1st), w4 (2nd); the fourth beat place is w3 | the beat on w3 is passed over |
| 6.0 | 11 | w1, w3, w4 (2nd syll.), w6 (2nd); the fourth beat place is w5 | the beat on w5 is passed over |
| 7.0 | 10 | w1 (1st syll.), w2 (1st), w3, w5 (1st), w6 | w0, a command, takes a stress before the first beat; two breaks, after w1 and after w2 |

The poet's marks are the same in every row. Where I hesitated the poet had
hesitated too and the caption does not lean on it: w0 of row 7.0 can be
said lighter, and the caption says only that the line can be heard to begin
on two stresses; in rows 4.0, 5.0 and 6.0 the fourth beat falls on a light
word, which the fifth caveat tells the reader.

The stated measure is the real one: five beats rising, eleven syllables and
ten by turns, the odd rows ending on one light syllable more. German stress
checked word by word: the prefixes of 4.0 w0, 4.0 w5, 5.0 w0 and 6.0 w6 are
unstressed, the compound in 2.0 w5 has its main stress on the first
syllable and a lighter one on the third, and 3.0 w5 takes a beat on its
first syllable and on its third, where the rhyme falls.

**Row 1.0, the pinned remark.** The line does begin on a stress where the
pattern has a light syllable. True.

**The count behind "the Queen has ten lines of five ... groups sing all the
others".** This is an "only" and an "all", so I counted again. A script
counted the syllables of every verse-like line of the zeno.org text of the
libretto of 1791 (1,171 lines). I read every line it counted at nine to
fifteen syllables that is given to a single character or stands under no
speaker's name (those of nine syllables are four-beat lines with a light
ending, three-beat lines in triple measure, or stage directions; those of
ten to twelve are triple measure, six-beat lines, stage directions, or the
lines below; the one verse line above twelve is the armed men's). Five-beat
rising lines: the Queen 10 (two in her recitative of Act 1, Scene 6, lines
467 and 469 of the file, and the eight here); the chorus of priests 4 (Act
2, Scene 20, lines 2598 to 2604); the two armed men 3 (lines 3080, 3084,
3086) with one irregular line (3088) and two six-beat lines beside them;
the three boys 2 (lines 3337, 3339). No line of any other single character.
The last chorus of the opera, which the third passage shows, is in triple
measure with four beats, not five. The poet's count stands. The stammered
opening of the duet is left out, as the caveat says.

**The English lines** (act-2 block 45): I counted syllables in each. Six
have ten or eleven; rows 45.2 and 45.4, which begin alike, have nine, and
have five beats only if their first word takes one. The caption said "five
beats to the line"; it now says the English keeps the five beats, two lines
a syllable short.

## 3. The terms and what the page joins

Each term was read at Silva Rhetoricae (rhetoric.byu.edu) on 2026-10-03.

- **chiasmus** (queen, tab Threat): repetition of ideas or of grammatical
  structures in inverted order. The parts: A row 2.0, B rows 3.0 to 5.0, A
  row 6.0, and C the four words 2.0 w1-4 and 6.0 w1-4, which are the same
  four words in the same place. Condition, penalty, penalty, condition: it
  crosses. The plain gloss is right. `join` is `none`, and the photograph
  shows underlines only: the two condition rows in one color, the three
  penalty rows in another, the four repeated words in a third, no stroke.
  That is what the caption says; a cross drawn between rows four lines
  apart would have joined two rows of the penalty. Left as it is.
- **anaphora** (weddings, tab List): the same word or words at the
  beginning of successive clauses, sentences or lines. Rows 1.0, 2.0 and
  3.0 begin with the same word (w0); row 0.0 begins with another, and the
  caption says so. The photograph shows a spine down the left joining the
  three line heads, a bracket on the right joining the four names (w3 of
  each row), and a stroke joining the two words for little (0.0 w2, 1.0
  w2). Each stroke joins what the caption joins. Left as it is.
- **zeugma** (trial, tab Wishes, named inside a sentence tab): one part of
  speech, most often the main verb, governs two or more parts of a
  sentence. In row 7.0 the verb w2 is said once and serves both halves
  (w1 with w3-4, w5-8 with w9-10). True of the line.

## 4. The words

Adelung's dictionary (second edition, 1793 to 1801, at zeno.org) is of the
libretto's own decade, so every sense was current. Entries I opened myself
and what they say against the reading:

- *Erkämpfen*: to get by fighting; marked as of the higher style; the
  first example is winning a victory. As the caption and note say.
- *Kämpfen*, *Sache*: the turn of phrase in p:12.0 w1-5 is in the entry
  for *Sache* (it is not my concern). As glossed.
- *Hold*, sense 3: lovable, pleasing in a marked degree, given to the
  noble style. As the note says.
- *Los* (and the cross-entry *Loos*): the lot drawn; in the higher style a
  fate one does not owe to oneself. As the note says.
- *Lohn*, sense 1: the good done to a person for what he has done.
- *Naturmensch*: a person living in the state of nature, without civil
  order. As the note says.
- *Weib* (sense 1 and the first remark): the diminutive is the usual word
  for a married woman in familiar speech and the word for the female of
  any animal. As the caption and note say.
- *Fangen*, sense 2.2: to get birds, fish or mice into one's power by
  cunning and with tools. Papageno's net for girls is in his first song
  (act-1 blocks 35 and 36), which I read.
- *Ledig*: unmarried, with the other senses the note names.
- *Erblassen*: to grow pale; to die, in the nobler style.
- *Verlassen*, *Verstoßen* (sense II.2.b: to withdraw protection and love
  from a person by force; casting off a child is among the examples),
  *Zertrümmern*, *Nimmermehr* (only of time to come), *Schwur*, *Band*.
- *Sprecher*, *Unterziehen*, *Scheuen*, *Weichen* (1), *Bestehen*,
  *Erhalten*, *Verlangen*, *Grund*, *Gar*, *Einmahl*, *Dann*, *Erst*
  (sense 1.1: proper only to familiar speech), *Wieder*, *Ewig*,
  *Siegen* (2), *Krönen*, *Begnügen*, *Unterwerfen*, *Ebenbild*.

The plainer glosses (yes, prince, time, step, late, every, little, beauty,
wisdom, crown) I checked against the German as I know it and did not open
an entry for each. No gloss was changed. One pinned remark was changed (see
10, item 1).

The two glosses in the Auden column (the Manichees, Pelagius) are from the
Online Etymology Dictionary, under Manichaeism and Pelagian, which I
opened; they are not Auden's, and now stand in a parenthesis that says so.

## 5. Auden

**The view** (*The Dyer's Hand*, "Balaam and His Ass", pp. 134 to 135).
Read in the scan (dh.txt lines 6436 to 6496). The head of p. 134 stands
above the passage; the sentence on nature and spirit begins at the foot of
p. 134 and ends under the head of p. 135. The quotation is exact, 22
words. The paraphrase lacked two words of his that matter (that the two
live together in man); added. It is his view of this opera, and all three
passages bear on it: the first is the scene of the refusal he speaks of,
the third holds the six lines he prints.

**More from Auden**, entry by entry:

1. *The Dyer's Hand*, pp. 134 to 135. As above. The poet had put two
   glosses of his own inside the paraphrase; set apart. I added what
   Auden says on p. 135 of the two men against Don Quixote and Sancho
   Panza (dh.txt lines 6498 to 6501), since it is said of Tamino and
   Papageno.
2. Auden and Kallman, Preface to *The Magic Flute* (1956), in *Libretti
   and Other Dramatic Writings*. Borrow-only scan; read only through the
   full-text search of the Internet Archive, phrase by phrase. I ran the
   searches again and found every sentence used: the two themes, with the
   head of p. 130 inside the first of them; Pamina's sufferings after the
   head of p. 131; Papageno's trial, the priest's threat, the humility
   shown by his last answer, the stage laughs and the vow of silence after
   the head of p. 132 and before that of p. 133. Late in the work I
   chained back from the two themes, about 560 words, to the heading
   Preface with no running head between: so the preface begins on the
   page before p. 130, a first page without a head. The entry was
   rewritten to say what they say and no more.
3. "Vocation and Society" (1943), in *Auden Studies 3*. Same kind of
   reading. The lecture does open with the scene of the first passage in
   an English version (its first words name the second act). The moral,
   the girl, the double and the multiplying are under the head of p. 16;
   the sentence on Papageno once woken closes the text of p. 18. The
   editor dates the lecture 15 January 1943, at Swarthmore College.
4. "Mozart and the Middlebrow" (1946), in *Prose, Volume II*, pp. 290 to
   291. **The poet had used one sentence of this essay; it retells the
   first passage and speaks of the children of the duet.** I read it in
   snippets: the parable about education and the two heroes, the quoted
   scene, the remark that Papageno is in love with no one woman, the
   reward in spite of the refusal and the children are on p. 290; the two
   choices and the two kinds of heroism are on p. 291 (the head of p. 291
   stands inside the sentence that says why Papageno is a hero). It now
   has an entry of its own, and one sentence of it is used in the first
   passage (tab Answers).
5. *Lectures on Shakespeare* (the lecture on *The Tempest*, 7 May 1947),
   p. 300. Read in snippets; everything used stands before the head of p.
   301. The entry left out half of the price Auden names (to stay single,
   or to take an old woman); completed. The second caveat tells the
   reader the book was put together from students' notes.
6. "Notes on Music and Opera", *The Dyer's Hand*, pp. 469 to 470 and 474.
   Read in the scan. The quotation is exact, 18 words. He does not name
   this opera here; the entry now begins by saying he writes of opera in
   general. It stays because the other opera pages on this site carry the
   same essay as part of what he taught about opera.
7. "Translating Opera Libretti" (with Kallman), *The Dyer's Hand*, pp.
   484 to 491. Read in the scan: the three libretti they translated and
   the numbers with spoken dialogue (p. 484), the two rhythms (p. 485),
   the rhymes of two syllables (p. 488), Mozart repeating lines (p. 490),
   the Queen and the courtesan (p. 491). The remark on Mozart repeating
   lines is general, said in a passage on syllables spread over notes;
   the pinned remark now says "of Mozart in general".

*The Enchafèd Flood*, p. 111 (tab Wishes): read in the scan, ef.txt lines
4608 to 4612; the page number stands at the foot of its page in that scan
(110 at line 4587, 111 at line 4630). The poet's line numbers were eight
off; corrected in the ground.

**His own words.** The brief asks that what is in copyright be said in the
page's own words. Several paraphrases, the poet's and three of my own from
earlier in the day, ran word for word with their source for six words or
more, or carried a phrase only he would write. I reworded them without
changing what they report: six entries of the Auden column, one tie, one
pinned remark, fifteen claims in the grounds, and a phrase each in the
view and in two captions. The piece has two
quotations, both exact and under 25 words; nothing else of his is quoted.

## 6. The reason and its ground

Each caption and `why`, sentence by sentence.

### First passage, "The same question, twice"

I read the whole of Act 2, Scene 3 in the German (the English libretto
printed here leaves the spoken scene out), and Scenes 13 to 15, 23, 28 and
29 for what becomes of Papageno.

**Words.** The same verb put to both men (2.0 w9, p:11.0 w21): plate. The
dictionary's style mark and first example: Adelung, opened. The word for
lovely: Adelung. The verb inside the priest's word (p:12.0 w1): plate and
Adelung. Papageno a bird-catcher: his first song. Auden on the natural and
on what the refusal may cost: p. 134. Two faults:
- "His last word is" the word for single. In the scene he says it again
  twice after the lines shown. Now "his last word here".
- The remark pinned to 7.0 w10 said the word returns in the last two
  lines of the opera "with the words for victory and wisdom". The noun
  for victory does not return; its verb does (weddings 6.0 w1), and the
  word for wisdom stands there alone where Tamino has it inside a longer
  word. Now "with the verb for winning and the word for wisdom".

**Answers.** The like numbers: plate. Faults:
- "Tamino is asked three questions and answers each in one word" is true
  of the lines shown, not of the scene (he is asked more before them).
  Now "Here Tamino is asked".
- Death was called "the stake"; the text names it as a possible lot (4.0
  w3-5) and as a thing not to shun (p:15.0 w7-11). Now "the risk", and
  the tie says what each priest says.
- A tie said each man "names a woman". Tamino names Pamina (7.0 w5);
  Papageno names no one (p:12.0 w37-40), and Auden says as much in 1946.
  Mended, with the ground added.
- Auden and Kallman on the exchange as Papageno's trial, and on the
  answer that shows his humility: found at p. 132. Stands.

**Wishes.** The two matched halves and the verb said once: plate. Auden on
Tamino: *The Enchafèd Flood*, p. 111. The priest's reply as a threat: the
preface, p. 132. Fault: the closing sentence said the opera does not carry
the threat out, and gave as proof only that Papageno never enters fire or
water and is given Papagena. The scene itself gives more, and it cuts both
ways: just after the lines shown he gives his hand on keeping silent so
that he may see her; in Scenes 13 to 15 he talks; in Scene 23 the Speaker
tells him the gods remit his punishment. Auden and Kallman say the same of
the vow. The sentence now says he promises only silence and breaks it,
with the libretto and the preface as grounds. "A thing he wants beside a
prize" was unclear; now "Each names what he wants as a prize".

### Second passage, "The mother's oath"

I read Act 2, Scenes 8 to 10 and Scene 27 in the German, and the English
block 45 and its neighbors.

**Beat.** The measure: plate. The classic line of verse drama since
Lessing: German Wikipedia, "Blankvers", opened. Faults:
- The `why` said the libretto "keeps the five-beat line of verse drama for
  the Queen". Nothing shows what the librettist meant, and the lines
  rhyme, which the drama's line does not. The `why` now states the count
  and no intention.
- "Her speech" for ten lines of hers; the rest of her part is four-beat
  or prose. Now "these lines".
- "Most of this libretto is in four beats": most of it is prose. Now
  "most of this libretto's verse".
- "The last line, the oath": the last line calls on the gods to hear the
  oath; the oath is the five lines before. Now "the last line, to the
  gods".
- Auden and Kallman's remark on the Queen and the courtesan is about the
  style a translator must find; the caption says "translating". Stands.

**Rhyme.** Scheme and tails: plate. Two syllables and one by turns as the
usual way with this line: German Wikipedia, "Jambischer Fünfheber",
opened. Faults:
- The rhymes were said to "join the Queen and her daughter to Sarastro's
  death". Now it says which words each rhyme pairs, and whose they are.
- The caption had "a handbook of verse" note that rhyme by turns "throws
  the emphasis on the closing rhyme", and the `why` had it throw "its
  weight on the last word of each four". The remark is Hiram Corson's,
  quoted by Baum (chapter 4, on the stanza of *In Memoriam*, lines 3755
  to 3764 of the file), and it is about English verse: turn the enclosed
  rhyme of that stanza into rhyme by turns and the closing rhymes are
  more emphatic. Caption, `why` and note now say that much, whose remark
  it is and of what verse.
- "What she swears is the shattering of nature's bonds" changed the
  grammar. She swears that they shall be shattered if he does not die by
  Pamina's hand. Mended.
- Row 4.0 has no stated subject, so I checked whose the casting off is.
  Its verb (w1) is singular and the bonds of row 5.0 are plural, so the
  two participles are said of the daughter addressed; Pamina says so
  herself in Scene 10 with the same verb. The poet's reading stands.

**Threat.** The figure: section 3. Faults:
- The `why` ran "so that" from the figure to Pamina's plight. Now two
  statements.
- Auden and Kallman's phrase on the mother's curse was laid on this aria
  with nothing between. I looked for the tie in the libretto and found
  it: in Scene 27 Pamina, about to kill herself, says she suffers through
  her mother and that her mother's curse pursues her (lines 2997 and 2999
  of the zeno file; the word for curse stands nowhere else in it). The
  caption now gives her words and then the preface.
- The note sent the reader to a block of the English libretto that does
  not hold Pamina's question; it is in block 55, without the call to the
  gods. Mended.

**English.** What the English keeps and drops: counted in block 45. That
the libretto names no translator: I opened the text of the scan (Internet
Archive, magicflutediezau00moza); the title page names two opera houses
and the publisher and no translator. Faults: "who translated this
libretto" could be read as the libretto printed here; now "who translated
the opera themselves". "Five beats to the line": see section 2.

### Third passage, "The two rewards"

I read Act 2, Scenes 29 and 30 in the German, the Mozarteum's edition of
the text as Mozart set it with its note at these lines, and *The Tempest*
a1s2 blocks 196 to 200.

**Words.** Who sings which lines: the libretto. Auden prints these six
lines and Caliban's three after them: p. 134. Faults: the chorus's words
were said to "go back to" Tamino's sentence, which claims a design; now
three of its words "stand in some form" there (the reward word as it is,
the verb of his noun, the word of which his is a compound: trial 7.0 w10,
w4, w1 against weddings 6.0 w7, w1 and 7.0 w3). The `why` called the two
songs the two rewards; Auden sets each song beside a reward. Mended.

**List.** Three lines begin alike, each ends in a name, the names differ
by a letter, each parent sings the lines that end in his or her own: all
in the proof and the libretto. The lines on the parents' likeness and the
Mozarteum's note that Mozart did not set them: opened. Auden on the
double, 1943, p. 16: found. Nothing to change.

**Caliban.** Prospero's charge: a1s2 block 198. The duet's hope of
children from the gods: the four lines before these in the libretto.
Auden's one attitude in both: p. 134. One word changed: he "finds" it, he
does not "hear" it.

## 7. The prose

American English, present tense, no dashes inside sentences, no rhetorical
questions, none of the stock words; the checker's lint is clean. Counts at
the end: `about` 89 words; `view.says` 70; captions 107 to 110; reasons 33
to 40; ties at most 37; pinned remarks at most 54; the seven entries of the
Auden column 89 to 110; notes under the captions 51 to 70; five caveats, 32
to 50 words.

## 8. The rules

No line of any work is typed into the reading: the passages are cut by row
from the hosted texts. Captions name single German words and two phrases
of four words, one German and one from the English libretto, both out of
copyright. Two quotations of Auden, 22 and 18 words. The three passages
are 8 and 6 rows of prose, 8 lines with 8 under them, and 6 lines beside
3: short enough.

## 9. The printed notes

`view.source` and each `auden[].source` give book, year and page only.
`sources` has one entry for each thing the page stands on, the text first,
with "Not seen in full" on the four works read in snippets. Every tab has
its `stands`, 51 to 70 words, with links into the copies printed here
(act-1:35, act-2:45, act-2:55, act-2:297, act-2:330, act-2:347,
tempest/a1s2:198). The caveats are five, in a reader's words. The checker
reports the printed notes fit to print.

The page was built and photographed in a scratch copy at 1280 and 390
pixels, each tab and the whole page. Each drawing matches its caption. An
early run reported two rhyme arcs outside the passage at phone width; the
shared page code changed during the day, and the last run reported
nothing.

## 10. What was changed, and why

1. trial, Words: "His last word here" (the opening sentence was turned to
   save the word); the remark pinned to 7.0 w10 now names the verb for
   winning, not the noun for victory.
2. trial, Answers: "Here Tamino is asked"; death as "the risk"; two ties
   reworded (what each priest says of death; Papageno names no one, with
   Auden's remark of 1946); grounds and note to match.
3. trial, Wishes: the closing sentence now says that Papageno promises
   only silence and breaks it; grounds added from the libretto (Scenes 3,
   13 to 15, 23) and from the preface (the vow); "what he wants as a
   prize".
4. queen, Beat: the `why` states the count and no intention; "these
   lines"; "this libretto's verse"; "the last line, to the gods"; the
   remark on Mozart marked as general.
5. queen, Rhyme: the pairing said word by word; the remark on closing
   rhymes given to its handbook and to English verse in caption, `why`
   and note; the paraphrase of the oath put right.
6. queen, Threat: the `why` in two statements; Pamina's words on the
   curse added with their ground; the link to the English libretto
   corrected to block 55.
7. queen, English: "who translated the opera themselves"; "two lines a
   syllable short"; the ground for the missing translator's name now
   says what was opened.
8. weddings, Words: "stand in some form"; the `why` no longer calls the
   songs the rewards.
9. weddings, Caliban: "finds" for "hears".
10. `about`: the two are at the temple, not in it (the stage direction
    sets a forecourt). `view.says`: "in man" added.
11. Auden column: the two glosses set apart and the remark of p. 135
    added (entry 1); the preface entry rewritten (2); the lecture of 1943
    kept to what he says (3); a new entry for the essay of 1946 (4); the
    price completed (5); "of opera in general" (6). `sources`: the essay
    of 1946 now pp. 290 to 291.
12. Paraphrases of Auden put into the page's own words where they ran
    with his: entries 1, 2, 3, 4, 5 and 7 of the column, one tie, one
    pinned remark, fifteen grounds; and one phrase each in `view.says`
    and in the captions of Answers and Beat (on Tamino's courage, and on
    how a courtesan speaks).
13. The fifth caveat made fuller (which beats are light, what the count
    leaves out).
14. Working notes: line numbers put right in `view.checked`, in the
    ground for *The Enchafèd Flood* and in three grounds that cite the
    libretto file; `checked` extended on the first five entries of the
    Auden column with what I found; nine items added to `open`.

Not changed: every mark, the scansion, the rhyme scheme and tails, the
three figures and their drawing, every gloss, the headings and labels,
caveats one to four.

## 11. Still doubtful

- The preface, the lecture of 1943, the essay of 1946 and the lecture of
  1947 were read only in snippets of full-text search. Their pages come
  from running heads seen in the snippets. The number 129 for the
  preface's first page was never seen printed; it is the page before the
  head of p. 130.
- The remark on closing rhymes is about English verse. I found no
  handbook statement on the German stanza.
- Mozart's score was not seen and the record on the page was not heard.
  What is sung was read in the Mozarteum's edition of the text as set.
- Who made the English of the libretto printed here is unknown.
- Auden and Kallman's own English of these passages was not looked at.
- Two English lines can be heard with four beats.

## The checker's last lines

`node build/tools/check-reading.mjs magic-flute --print`:

    no problems
    no warnings
    the printed notes are fit to print
