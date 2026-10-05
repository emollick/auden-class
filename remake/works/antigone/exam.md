# Antigone: the examiner's record

Piece `antigone`. Begun 3 October 2026, 06:28 UTC; `examiner.txt` did
not exist, so I made it and the piece is mine.

No words of the play are typed here. Places are given as part,
block.row and word number, as `node build/tools/check-reading.mjs
antigone` prints them; Greek lines by their usual numbers. Auden is
paraphrased; no sentence of his is copied here.

Verdict: **mended**. The three passages, the ten tabs and the view all
stand. Nothing in a caption was invented and no tab had to go.
Twenty-one small changes, listed under "What I changed". The ones that matter: a
statement about the beat that one line can break; statements about
Greek rhyme and about the speeches made firmer than their grounds; a reading of line 369 credited
to Jebb, who holds the other one; one word of Auden's changed in
paraphrase; the pages of four Auden passages, now fixed from the page
heads; and the printed notes brought into line with all of this.

An artist was at work on the piece while I examined it. Every change
was a small exact edit. No key of the two shape tabs was renamed or
reshaped: the drawing in `site/js/pieces/antigone.js` reads `speaker`,
`lines`, `first line`, `last line`, `Greek lines`, `turns in order`,
`part`, `tells`, `read`, and prints any other key under its own name.
`remake/works/antigone/count-turns.mjs --check` still says "all agree".

## 1. The proof

As I found it and as I leave it: no problems, no warnings, the printed
notes fit to print. I read every line of the proof. Each mark sits on
the word it is meant for: the 36 beats and their voice marks, the
points, the six rhyme ends with their tails, the three threads, the 7,
9 and 6 glosses, the ten parts of the first figure, the five of the
second, the ten of the third. The second passage shows rows 32.0, 34.0,
36.0 to 36.7, words 4 to 9 of row 36.10, and rows 36.11 and 36.12 of
antigone/p3; the page prints dots where two and a half lines are left
out, and `about` says so.

The text printed here was compared, word by word, with a scan of
Storr's Loeb volume of 1912 (Internet Archive, `sophocleswitheng01soph`):
all 29 rows shown are there as printed here, but for one American
spelling (row 73.2 word 2), one hyphen the book has and this text has
not (antigone/p3, row 36.6 word 4), and one word the scan's reader
garbled (row 73.0 word 8).

## 2. The ear

I scanned rows 73.0 to 73.5 of antigone/p2 before I looked at the
poet's marks. My beats, by word (first syllable unless said):

- 73.0: words 0, 2, 3, 5, 8, 10. Six. No stop after the third.
- 73.1: words 1, 3, 6, then 8, 10, 12. Six; comma after word 6. Word 2
  carries some stress; the poet marks a half stress and a point says so.
- 73.2: words 2, 4, 7, then 9 (second syllable), 11, 14. Six; comma
  after word 7.
- 73.3: words 0, 2, 4, then 7, 8, 10. Six; semicolon after word 4. The
  second syllable of word 8 is a half stress, as marked.
- 73.4: words 0, 1, 4, 7, 9, 11 (second syllable). Six, with no stop
  inside. The count leans on word 0. Merriam-Webster stresses it on the
  first syllable with a lighter second, and so it takes a beat. Said as
  two light syllables running up to word 1, the line has five beats and
  word 4 is the second, not the third.
- 73.5: words 0, 3, 6, then 8, 10, 13. Six; comma after word 6.

This agrees with the poet's `meter` and `voice` in all six rows, mark
for mark. "One or two light syllables between them" holds in every row.
"Four of the six have a stop after the third" holds: rows 73.1, 73.2,
73.3 and 73.5, and not 73.0 or 73.4. I also read the other three
stanzas (blocks 67, 69 and 71). The halves there have three beats each.
Several open on two light syllables and still have their three (rows
67.3, 69.4, 71.2). Two first halves (rows 67.2 and 71.3) have only two
full stresses unless one of their light opening words takes a beat,
which is the case of row 73.4 too. The song's own pattern is the reason
for hearing six in row 73.4.

Found: "Each line has six beats" is a general statement that row 73.4
can break. The poet knew it (a caveat and an item under `open` say so),
but nothing at the place told the reader, and the Rhyme tab said "the
third beats rhyme too", which is false of row 73.4 on the other
hearing. Mended (changes 1 and 2).

## 3. The terms

- *antithesis*: Online Etymology Dictionary (contrary ideas or terms
  brought into close opposition) and Silva Rhetoricae (contrasting words
  or ideas set side by side). The marks show two sets of terms set
  against each other through eight lines, and the caption says no more
  than that. Right.
- *polyptoton*: Merriam-Webster (a word repeated in a different case,
  inflection or voice in the same sentence) and Silva Rhetoricae (a word
  repeated in a different form). Row 32.0 has one verb in two forms at
  words 1, 3 and 9. Right, and the caption says plainly that the figure
  is Storr's: Sophocles has the verb once in that line.
- *stichomythia*: Liddell and Scott (conversation in alternate lines)
  and the Century Dictionary's account as the Online Etymology Dictionary
  quotes it, which the caption paraphrases closely. Rows 24.0 to 42.0 of
  antigone/p4 are ten single lines by turns. Right.
- strophe and antistrophe (a ground of the Song tab): Online Etymology
  Dictionary. The song has two pairs, as the headings of blocks 66 to 72
  of antigone/p2 say.

What the page joins. I could not build the page (that writes outside
this folder), so I looked at the artist's pictures of the three figure
tabs, taken at 07:18, at both widths; no part of a figure has changed
since. Sides: underlines in two colors and no stroke. Knowing: two arcs
join the three forms in row 32.0, and one stroke joins row 36.7 word 5
to row 36.10 word 5, across the dots. The caption names those two
together as the verb's two returns, so the stroke says nothing the
caption does not; they have one tag, and the artist left it for the
same reason. Exchange: strokes join row 26.0 word 2 to row 28.0 word 3,
the two places in row 34.0 to each other and to row 36.0 word 1, row
36.0 word 5 to row 38.0 word 1, and row 40.0 word 5 to row 42.0 word 3.
Each is a word taken up from the line before, which is what the caption
says the colors mark. I set no `join`. In the phone picture the Knowing
stroke runs through a word of a turned line (the artist's record, 4.1);
the kit's figure script was changed at 07:38 so that a stroke is not
drawn where its way is not clear, and no picture has been taken since.
If the stroke is still wanted gone, `"join": [[0, 1], [1, 2]]` keeps
the two arcs of the first line and nothing else.

## 4. The words

Every gloss was checked against the Greek of Storr's own Loeb volume
(at Perseus, and the same text in Perseus's public files) and against
the dictionary entry, most of which cite the very line.

First passage. Line 367 has evil before good, as the gloss says. Line
368 has the noun for laws, and a participle that is a correction of the
manuscripts (Jebb's note). Line 370 has the two compounds side by side;
Liddell and Scott under each names the other as its opposite and cites
the line. Line 371 has the noun for daring (Liddell and Scott: courage,
and in a bad sense over-boldness), and line 449 has the verb made from
it. Lines 372 to 375: the adjective is by or at the hearth (Liddell and
Scott; Jebb's note; his translation has the hearth too).

Found at line 369. The reading gave the phrase as the justice of the
gods, to which a man is bound by oath, and credited that to "Jebb's
note on line 369 and his prose translation, both at Perseus". Jebb's
note says otherwise: he takes the gods with the oath (justice which men
swear to observe, taking oaths by the gods). I then opened Jebb's own
second edition of 1891 (Internet Archive, `playsfragmentswi03sophuoft`,
title page seen), and his translation there agrees with his note. The
English at Perseus is credited to that edition but is revised in
wording, and at this line it turns the phrase the other way. Liddell
and Scott (*enorkos* II) cite the line under "that whereto one is
sworn" and do not settle it. So "the gods' justice" stands on the
Perseus wording alone, and Jebb is on the other side. Both are fair
ways to take the Greek. The caption keeps its wording; the note under
the gloss now gives the words in their order and both readings; the
tab's printed note and the fifth caveat say whose each is (changes 3,
12, 14). On either reading the stanza joins the laws of the land to a
justice that hangs on the gods, and that is all the caption builds on.

Because the Perseus English proved to be a revised Jebb, I checked every
other place where the reading cites "Jebb's translation" against the
1891 book: lines 191, 367, 450 to 452, 738 and 739. In each the book
bears out what the reading says (rules at 191; evil then good; Zeus and
the edict, Justice and no such laws; a question at 738; a desert at
739). At line 191 the book's verb is to guard the city's greatness and
the Perseus wording is to strengthen. The caption's "strengthens"
stands on Liddell and Scott, *auxano* 2 (increase in power, strengthen),
which cites this very line; that entry is now named (change 6).

Second passage. Line 447 (the herald's verb, in Creon's mouth), 449
(dared; overstep; laws), 450 (a pronoun, and the herald's verb), 452
(laws, in a line the editors correct: Jebb's note on 451 gives what the
manuscripts have), 454 to 455 (proclamations; unwritten; not liable to
fall; usages; outrun), 457 and 460 (the verb to know, the second time
with a prefix), 461 (the herald's verb with a prefix), 462 (gain). Line
8 has the first word for the order in the play, the same noun as line
454. Each Liddell and Scott entry named says what the gloss says, and
*hyperbaino*, *kerygma*, *prokerysso*, *hypertrecho*, *agraptos*,
*asphales*, *nomimos* and *exoida* cite these lines.

Third passage. Line 733 (a compound of the word for city, with the
word for people), 734, 737 and 738 (the word for city; once in 737,
where row 34.0 has its English word twice), 736 and 739 (to rule; rule
alone), 738 (the ruler's; a question), 739 (the adjective for a
desolate place), 740 and 741 (woman), 745 (Haemon on the honors of the
gods: row 50.0, four lines past the last shown). Liddell and Scott,
*polis* III.2, cite line 738 and compare 734. Online Etymology
Dictionary: mob (1680s, the rabble, shortened from mobile), monarch and
monarchy (alone, and to rule).

Found: two notes under glosses said "the edition's note" where the note
is Jebb's (Storr's edition has no such notes), and the first gave as
Jebb's an English phrase that his note has only in Greek (change 4).
The note under row 38.0 word 4 gave three senses, the third of which
the dictionary gives only of places; it now follows the entry (change
7). In the Song tab the first stanza was summed up as "none is greater
than man"; the Greek adjective, Storr and Jebb all say more wonderful
(Liddell and Scott, *deinos* II, cite line 333 under wondrous,
marvellous, strange) (change 5).

## 5. Auden

Forewords and Afterwords is among the scans, and I read the pages:
p. 5 (the loss in translation; the better as English poetry, the less
like Greek, with his "almost"; quantitative unrhymed verse and
qualitative rhymed verse alike only as rhythm), pp. 6 to 7 (word order,
compound epithets, single-line dialogue and the Medea example), p. 19
(the tragic hero as a warning to the chorus; glory and good fortune at
the start, exceptional suffering at the end, which he explains as more
than the chorus suffers; four examples, Antigone the fourth, who must
violate her duty to her dead brother or to her city; hybris defined;
what the chorus learns), pp. 19 to 20 (the moderate law-abiding
citizen). The page number stands at the foot in that scan. Every
paraphrase is faithful. One word had changed in paraphrase: the caption
of the Play tab had "extreme" suffering where Auden has exceptional and
says what he means by it (change 8).

The other four books are not among the scans. I read each sentence
again in full-text search snippets of the Internet Archive's copies and
fixed the pages from the running heads in the same snippets.

- "James Joyce and Richard Wagner" (1941), in Prose II
  (`prosetravelbooks0000aude`). The sentences the view and the two
  figure tabs paraphrase are there, and the 18 words quoted are exact.
  He says them of the hero who accepts a tragic choice, with Antigone as
  his instance: the paraphrase covers what his words cover and no more.
  Pages: the index and the textual notes put the essay at p. 115, and
  the next piece begins at the head of p. 119 (its title follows the
  head and the number), so the essay is pp. 115 to 18, not 115 to 19.
  The head of p. 117 stands about 320 words after the end of the
  Antigone passage, with no head between. A page of that book holds
  about 600 words (I counted p. 114: about 560, with a title on it). So
  the passage cannot be on p. 115; it is on p. 116. This is counted,
  not seen: the head of p. 116 is not in the search text (a scrap of
  misread letters about 300 words before the passage may be what is
  left of it). More than 400 words of the essay stand before the
  passage, which agrees. The date line (Common Sense, March 1941)
  stands under the essay, just before the head of p. 119.
- "The Martyr as Dramatic Hero", in Secondary Worlds
  (`secondaryworldse00aude`, which is the New York edition, Random
  House, 1968). Every sentence paraphrased is there: the two martyrs
  from before Christianity, the traitor abhorred in all societies and
  the decree, the principal figure, Antigone's role, the punishment and
  what it is for, and what would have followed had she obeyed. The 13
  words quoted are exact. In that book the number stands at the foot
  and the lecture's title heads the next page: the decree is on p. 18,
  all the rest on p. 19. The jacket says the lectures were delivered
  in October 1967, the first of the T. S. Eliot lectures at the
  University of Kent.
- "Lecture Notes" (1942), in Prose II. The sentence stands about 39
  words below the head of p. 166. Its installment begins about 283
  words above that head, straight after the date line of the one before
  (13 November), and ends with its own date line, 20 November 1942,
  just before the head of p. 168. So it is the third of the five
  installments, pp. 165 to 67, as the research notes had inferred. All
  five date lines are in the search text, each after the signature: 6,
  13, 20 and 27 November and 4 December 1942.
- "The Christian Tragic Hero" (1945), in Corrigan's reprint
  (`tragedyvisionfor0000corr`). The sentence stands about 60 words above
  the head of p. 145, so p. 144 is right. The research notes gave the
  date of the review from memory. It is in Corrigan's acknowledgment
  (December 16, 1945, pp. 1 and 21 of the Book Review; the reprint
  begins on p. 143) and in the date line under the essay in Prose II.
- Lectures on Shakespeare (`lecturesonshakes00aude`). The sentence is
  there, and the editor's note to the sentence that follows it is keyed
  to p. 44, as the index is. Found: the reading said "his New York
  lectures of 1946 and 1947". The sentence stands about 130 words into
  the lecture on Romeo and Juliet, whose heading carries the date 6
  November 1946, and the index gives the play no other page. The entry
  now says a lecture of November 1946, and the second caveat 1946
  (change 21).

The list of what else Auden said keeps to entries that bear on the
passages or the work: the 1967 lecture, the 1948 pages on the tragic
hero and on the citizen to imitate, the run of remarks from 1942 to
1947, and the 1948 pages on Greek in English. None is a passing
mention. In the three scans of his books the play is named once only
(Forewords and Afterwords, p. 19); Pearce does not name it.

## 6. The reason and its ground

Each caption and each `why` was taken a sentence at a time.

**The elders end their song on man** (antigone/p2, rows 73.0 to 73.5)

- *Greek*. Two things to honor (plate; lines 368 to 369); the compound
  and its opposite (line 370, the dictionary, Jebb); the man whose
  daring brings him to wrong (lines 370 to 371; Jebb: by reason of his
  audacity); law and justice in one clause (the lines); Antigone on
  Justice (antigone/p3, rows 36.1 to 36.2; line 451, the same noun as
  line 369); Auden, p. 19. The reason is true of the passage: this is
  the place in the song where the land's law and a justice of the gods
  are asked for together, and Auden's sentence is about her having to
  violate one of two duties. Stands, with the matter of line 369 above.
- *Beat*. Six beats, the stops, the halves set against each other
  (plate, and my own scan); long lines break up (Baum, chapter 4: his
  sentence is about lines of more than five feet); the speeches in
  unrhymed five-beat lines (I read block 64, the guard's five lines
  before the song, and the other two passages); speech and song
  (Aristotle, Poetics 4, 6 and 12 in Butcher; Liddell and Scott mark
  lines 360, 365, 369 and 370 as lyric); quantity (Baum, chapter 3);
  Auden, p. 5. Stands, with the point added at row 73.4. Found: "The
  speeches go in five beats without rhyme" is a general statement, and
  the poet's own item under `open` names a rhymed couplet that closes
  the Messenger's report (antigone/p5, rows 114.51 to 114.52). A rough
  listing, by spelling, of lines in a row that end on rhyming words
  outside the chorus gives that couplet and the parts Antigone and
  Creon sing or chant in their last scenes (antigone/p4, blocks 129 to
  135; antigone/p5, blocks 128 to 176). The caption now says "as a
  rule", and the ground names the exceptions (change 20).
- *Rhyme*. The pairs at the ends and inside the lines (plate); four
  short lines by turns (plate; Baum, chapter 4, on the short quatrain
  printed as a long couplet; the same inner rhyme runs through the
  other three stanzas); the order of evil and good (line 367; Jebb
  1891); Storr's first principle (his introduction, p. xii: the roman
  number stands at the foot in the scan, and I counted it); Auden, p. 5.
  Found: "Greek verse did not use it" is firmer than its source. Baum
  says Greek prosody rejected rime and adds in a footnote that rime
  occurs here and there in Greek and Latin (change 9). The caption does
  not say that Storr reversed the order for the rhyme's sake, and
  should not.
- *Song*. Four stanzas of 6, 5, 5 and 6 printed lines, and 8 lines
  after (counted). What each tells (read, all four). The guard's report
  and Creon's threat (rows 33.0 to 33.2, 37.0 to 37.3, 41.21 to 41.26,
  61.0 to 61.2). Only death (rows 71.3 to 71.4; lines 360 to 362). The
  two pairs of opposites "at the same point": in Storr's Greek text
  each of the two stanzas is printed in six lines and each pair opens
  the fourth (counted in Perseus's file of that text); the dictionary
  gives each first word with its opposite. Auden, pp. 19 to 20. Stands.

**Antigone answers Creon** (antigone/p3)

- *Sides*. The plate bears out every mark and the four negatives. The
  Greek sets the same things against each other (lines 450 to 457).
  Auden 1941: the choice, and the ambiguity that lies in her situation.
  Stands.
- *Knowing*. Creon's question is at rows 30.0 to 30.1 (line 447). Three
  forms in row 32.0; once in the Greek line (448); again at 457 and
  460. Gain (row 36.12; line 462). Auden 1941. Stands.
- *Greek*. "Two lines earlier", "three times here" and "laws she says
  once" were each counted in the Greek of the lines shown: 447 is two
  before 449; the herald's word is at 450, 454 and 461; the noun for
  laws is hers at 452 only (454 to 455 has the other noun, usages; the
  lines left out have a pronoun). Auden 1967, pp. 18 and 19. Stands.

**Creon and Haemon, a line each** (antigone/p4, rows 24.0 to 42.0)

- *Exchange*. Forty rows each in blocks 6 and 10; 28 single lines in
  blocks 20 to 74 (counted; Greek 730 to 757); ten shown. The first
  shown is about Antigone; the seventh is Creon's (row 36.0); row 50.0
  is the fourth after the last shown and is Haemon's. The three words
  are taken up in the Greek too. Auden 1967, p. 19. Stands.
- *City*. Found: the `why` said the three English words "are one Greek
  word"; the first of them stands for a compound built on it, as the
  caption itself says (change 10). "Uses the same Greek noun" did not
  say which noun (change 11). The rest stands on lines 733 to 739 and
  191, the dictionary, and Jebb's note on line 370, which itself sends
  the reader to line 191. This tab gives its reason from the play and
  does not name Auden. That is within the rules, and the Exchange tab
  carries his view over the same lines.
- *Play*. My own count of the text printed here agrees with the poet's
  and the artist's: 1,279 printed lines; Creon 339 (155 to 1271);
  Chorus 319; Antigone 205, the last at 883, with 396 after; Guard 110;
  Messenger 84; Teiresias 78; Haemon 64; Ismene 58; Second Messenger
  14; Eurydice 8. In the Greek, by the standard numbers of Storr's
  text: Creon 358, Chorus 362, Antigone 215 (last line 943, 410 after),
  Guard 112, Messenger 82, Teiresias 76, Haemon 65, Ismene 60, Second
  Messenger 14, Eurydice 9; 1,353 in all. Found: `stands` called a line
  "one line of Storr's verse", but five verse lines are split between
  two speakers and printed as two rows, each counted for its speaker
  (antigone/p2, rows 43.1 with 45.0 and 45.1 with 47.0; antigone/p4,
  rows 87.1 with 89.0; antigone/p5, rows 4.0 with 6.0 and 14.1 with
  16.0). Counted as whole lines the play has 1,274. No claim moves:
  Creon has a half in all five. It is said now in `stands`, in the
  ground and in a caveat (change 13). What follows her exit
  (antigone/p5): the prophet, Creon giving way, row 130.0, the
  Messenger at rows 91.6 to 91.12, the three deaths, and Creon's block
  176 before the closing block 178: all read, all as said. "About
  two-thirds more" is 339 to 205 (1.65) and 358 to 215 (1.67).

## 7. The prose

American spelling, present tense, short sentences, no dashes inside
sentences, no rhetorical questions, none of the stock words, no "we".
Nothing says plate or lens. No closing sentence sums up what a passage
"means". Each caption is 106 to 110 words, each `why` 38 to 40, each
`stands` 41 to 67, each caveat 43 to 48, the view 70.

## 8. The rules

No line of the play is typed in the reading. The captions quote single
words and phrases of at most six words (the longest are six: row 36.0
words 1 to 6 of antigone/p4, and row 36.10 words 4 to 9 of antigone/p3).
Two quotations of Auden, 18 and 13 words. The passages are 6, 13 and 10
lines. Jebb, Storr, Baum, Butcher and Liddell and Scott are out of
copyright; a few words of theirs stand in the notes under the glosses.

## 9. The printed notes

Read as a reader would: `view.source`, each `auden[].source`, the 18
`sources`, the ten `stands`, the five `caveats`, the notes under the
glosses and the points. Changed: the 1941 essay's pages (115 to 18, the
passage on p. 116); Secondary Worlds named in the edition whose pages
are given, with p. 19 where only that page is meant; the 1942
installment's date and page; Jebb's translation entered under the book
it was checked in, with a sentence saying that Perseus gives it in a
revised wording; one dictionary entry added; the reading list's own
wording for the translators. The caveats now tell the reader of the
split lines, of the second reading of line 369, and that the 1941 page
was worked out and not seen.

## What I changed

1. Beat tab: a point added at row 73.4 word 0 (the dictionary's stress;
   five beats if the word is said lightly, and the inner rhyme then on
   the second).
2. Rhyme tab, caption: "The third beats rhyme too" became "The lines
   rhyme midway too". The ground's claim follows.
3. Greek tab, first passage: the note under row 73.2 words 10 to 14
   now gives the phrase word for word, Jebb's reading and the Perseus
   reading. The ground and the note's source say whose each is.
4. Two notes under glosses (row 73.3 words 0 to 4; antigone/p4 row 26.0
   words 1 to 2): "the edition's note" became "Jebb's note"; the first
   now says he takes the word as having a high city, not standing high
   in his city, which is how his note puts it.
5. Song tab, facts, first stanza, `tells`: "none is greater than man"
   became "none is a greater wonder than man". Key and shape unchanged.
6. City tab: Liddell and Scott, *auxano* 2, added to the ground for
   line 191, to `stands` and to `sources`; *polis* III.2 (which cites
   line 738) added to the first ground; Jebb's line 739 named.
7. City tab, note under row 38.0 word 4: the dictionary's senses as the
   entry gives them, and that Jebb also has a desert.
8. Play tab, caption: "extreme" became "exceptional" (Auden's word).
9. Rhyme tab, caption: "Greek verse did not use it" became "Greek verse
   as a rule had none"; `stands` and the ground follow Baum.
10. City tab, `why`: "are one Greek word" became "go back to one Greek
    word".
11. City tab, caption: "uses the same Greek noun" became "has the same
    noun for laws"; the phrase about the word monarch was shortened to
    keep the caption at 109 words.
12. Greek tab, first passage, `stands`: one sentence added on whose the
    two readings of line 369 are.
13. Play tab, `stands` and first ground: a line is a printed line, and
    five split lines count for each speaker. Third caveat the same.
14. Fifth caveat: the second reading of line 369 added; shortened to
    stay one sentence under 50 words.
15. Second caveat: the 1941 page was worked out from the page headings,
    not seen.
16. Pages and editions: the 1941 essay pp. 115 to 18 with the passage
    on p. 116 (view, two `stands`, two grounds, `sources`); Secondary
    Worlds p. 18 for the decree and p. 19 for the rest (view, four
    grounds, two `stands`), with the New York edition named in
    `sources`; "Lecture Notes" as the third installment, 20 November
    1942, p. 166. The `checked` notes of the view and of two entries of
    what Auden said now record what I saw and how the pages were fixed.
17. `sources`: Jebb's translation entered under his 1891 book, with the
    sentence on the Perseus wording; *deinos* added to the dictionary
    entries (the first stanza's summary was checked against it); the
    reading list's "Fitts or Fitzgerald" given as typed.
18. First passage, `turn`: rows 73.0, 73.4 and 73.5 now turn after
    words 5, 4 and 6 on a narrow page. This is the artist's line
    (`art.md`, section 5), which the artist's session could not set. I
    looked at the phone picture of the Beat tab, where each of the
    three rows strands a small word at the turn, and at how
    `site/js/kit/plate.js` uses the key, and set it. The checker prints
    the three words.
19. `open`: six entries from the examiner, for the lead.
20. Beat tab, caption: "The speeches go in five beats without rhyme"
    became "The speeches as a rule go in five beats without rhyme"
    (109 words). The ground's claim follows, and its source names the
    Messenger's closing couplet and the sung parts.
21. What else Auden said, fourth entry: "his New York lectures of 1946
    and 1947" became "a New York lecture of November 1946"; the second
    caveat says 1946 where it said 1946–47. Recorded in the entry's
    `checked` and in `open`.

## The artist's three questions (`art.md`, section 6)

1. "At the same point" in the Song caption is not shown by the drawing.
   It stands on the Greek, and I counted it (section 6 above). I added
   no key for it, since a new key prints new words on the drawing and I
   could not look at the result. If the lead wants it shown, a key such
   as "place of the pair" with the value "opens the fourth of the
   stanza's six lines in the Greek text" on the third and fourth rows
   would be true.
2. The names of the parts carry the headings of the text printed here
   (Str. 1, Ant. 1, Str. 2, Ant. 2). Nothing printed explains them, and
   in this play the second could be misread. Left as they are, because
   they are what a reader meets on following the link, and they are the
   page's only sign that the third and fourth stanzas answer each other,
   which is what "at the same point" rests on. Dropping them would make
   the names plainer and shorter; that choice is the lead's.
3. The fourth part's name ends in ", shown here". Left. The words are
   true. The drawing does not need them (it finds the passage's stanza
   by its place, and needs only the word stanza in the name), but where
   the drawing cannot be made the page falls back on a plain table of
   the facts, and there the name is all that says which stanza is the
   passage. Whether the name may be shortened for a narrow page is for
   the lead and the artist.

I could not take new pictures: that needs the site built, which is
outside this folder. The pictures in `shots/` are older than the changed
captions, the new point and the turns.

## Sources I opened

- The text printed here, all five parts, with my own counting script
  and `build/tools/show.mjs`.
- Storr's Loeb volume of 1912 at the Internet Archive
  (`sophocleswitheng01soph`): title page, introduction pp. xii to xiv,
  and the rows shown.
- The Greek of that volume at Perseus (1999.01.0185) and in Perseus's
  public files: lines 8, 191, 332 to 383, 447 to 462, 730 to 757, and
  the whole play for the count.
- Jebb's commentary of 1900 at Perseus (1999.04.0023): notes on lines
  332, 360, 368, 369, 370, 372, 451, 454, 460 and 733.
- Jebb's second edition of 1891 at the Internet Archive
  (`playsfragmentswi03sophuoft`): title page; the translation of lines
  191, 365 to 375, 450 to 455 and 738 to 741; the notes on 369, 370 and
  733.
- The English at Perseus (1999.01.0186): lines 332 to 375, and the
  lines above.
- Liddell and Scott at Perseus (1999.04.0057): every entry in
  `sources`, and *deinos*.
- Online Etymology Dictionary, Merriam-Webster, Silva Rhetoricae: the
  entries in `sources`.
- Baum (the copy on this machine): chapters 3, 4 and 5 and the
  glossary. Butcher's Poetics (Project Gutenberg 1974): 4, 6, 12.
- The scans of Forewords and Afterwords (pp. 5 to 7, 19 to 20), The
  Dyer's Hand, The Enchafed Flood and Pearce (searched for the play).
- Full-text search snippets of the Internet Archive's copies of Prose
  II, Secondary Worlds, Corrigan and the Lectures on Shakespeare.
- The research notes A and C, for the reading list and the snippets.
- The artist's record and pictures, and the drawing's script.

## Still doubtful

- The 1941 passage is given as p. 116 from a count of words between
  page heads. It is safe within the essay's pages, 115 to 18. Someone
  with the book should look.
- Line 369 can be read two ways, and the caption follows the reading
  that Jebb, whose edition the piece names, does not hold. The note
  under the gloss and a caveat say so. If the lead would rather follow
  Jebb, the places are the caption (the words after "the Greek is"),
  the `why` and the gloss.
- The beat of row 73.4, as above.
- The English at Perseus is not Jebb's wording throughout. Other pieces
  that cite "Jebb's translation" from Perseus may have the same fault.
- None of the five Auden pieces outside the scans was seen in full.
- The Fitts and Fitzgerald translation, which Auden set, was not opened.
- The three turns were not seen on a page, and the strokes of the three
  figure tabs were judged from the artist's pictures of 07:18, not from
  a fresh build.
- Chance rhymes in the speeches were listed only roughly, by the
  spelling of the end words.

## The checker's last lines

`node build/tools/check-reading.mjs antigone --print` ends:

    no problems
    no warnings
    the printed notes are fit to print
