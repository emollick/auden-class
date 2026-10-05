# The Flying Dutchman (Senta's ballad): the examiner's record

Begun 3 October 2026, 05:19 UTC (see `examiner.txt`). Words of the
libretto are pointed at by row and word number, as the proof prints
them. Nothing of the opera's text or of Auden's is copied here beyond
single words.

Verdict: **mended**. The reading was careful and almost all of it
stood when every source was opened again. Thirteen things were changed;
they are listed under "What was changed". What could not be settled is
under "Still doubtful".

## 1. The proof

`node build/tools/check-reading.mjs dutchman` as the poet left it: no
problems, no warnings, the printed notes fit to print. Every mark was
read against the proof. All marks sit on the words they are meant for,
with one exception: on the first passage the gloss "the pale man" was
drawn under words 4 to 5 of row 1.2 and left out word 3, the article it
translates (mended).

No word on any of the three passages is joined to the next by a dash
without a space (the dashes of rows 1.4 to 1.6 stand between spaces and
count with the word before them), so no mark needed a part number. Row
1.7 begins with a dash that stands alone as word 0; the poet shows the
row from word 1, because a beat mark cannot be set under a dash. The
page will therefore print points of omission where the libretto has a
dash. Left as it is.

The page sets the English beside the first passage (eight German rows,
seven English) and line under line on the second (ten and ten): read in
`site/js/kit/plate.js` and in the built `site/data/pieces/dutchman.json`.
The captions say "beside" and "the small lines" accordingly, and both
are right.

The third passage was the one fault of the picture. Its eight rows come
from three acts, and the part they were cut into (`o-dutchman/end`) held
only those eight lines in three blocks that follow one another. The
build sets its sign of omission only where the part itself has lines
between two rows shown (`build/pieces.mjs`, `rowsOf`), so the page
showed the eight lines as one unbroken run (the built data had no gap
among them). Mended by cutting the part again; see the end. The site
data built at 06:26 UTC has the two gaps, and the picture of this
passage that the artist took at 06:24 UTC shows the points of omission
after the second line and after the sixth, with every rhyme mark and
both dotted threads on the words they are meant for.

The page as a reader sees it was looked at in the artist's pictures of
06:24 UTC (`shots/`, the ten tabs at 1280 px): beat, rhyme, word and
English marks of the first passage; the ties, the persons, the verb
forms and the table of the second; the rhyme and the glosses of the
third. Every mark sits where the proof puts it. The Scene tab was
looked at again in the picture of 06:48 UTC, where the artist's drawing
has taken the place of the plain table (see "Beside the artist").

## 2. The ear

Scanned by word number before the poet's marks were read, by the rules
of German stress (the stem syllable; a compound on its first part).

- Rows 1.0 to 1.3: eight syllables each, beats on the even syllables.
  Row 1.0 word 0 can take a light stress off the beat; row 1.1 word 0
  is a compound stressed on its first part, against the measure; row
  1.3 word 3 is a verb after a comma, stressed lightly off the beat.
  The poet marks all three the same way, the caption does not lean on
  any of them, and the first point says so openly.
- Rows 1.4 and 1.5: a beat on word 0, then two rising pairs, then the
  call of three syllables with the beat last. Eight syllables, four
  beats.
- Rows 1.6 and 1.7 together: thirteen syllables and three, six beats
  (word 0; words 3, 6, 8 and 10 of row 1.6; word 2 of row 1.7). After
  word 0 each of the five beats has two syllables before it. Word 4 of
  row 1.6 is a verb and carries a light stress (the poet marks it so).
- I agree with every mark. Two statements about the marks were not
  exact and were mended: the name of the measure, which read as though
  every line had eight syllables and four beats (the close has sixteen
  and six), and the word "light" in the reason, said of two syllables
  of which one, by the poet's own mark, is not light.
- The tune. The page image of the Ditson libretto of 1895, p. 16
  (Internet Archive, `flyingdutchmana00tourgoog`) was opened and read
  note by note. 6/8 time. Each of the first four lines begins with one
  eighth note before the bar line, the highest note of its phrase, and
  the beats of the bar then fall on the even syllables, as the measure
  has them. The call that ends rows 1.4 and 1.5 is two sixteenths and a
  long note under an accent sign. In the arrow line each pair of
  syllables is two sixteenths and each beat a quarter note; the last
  word is held over two bars. All as the reading says. No score was
  seen. (The German printed under the notes in that libretto has the
  words of row 1.5 twice, under rows 1.4 and 1.5; a misprint there, of
  no weight here.)
- The handbook (Baum) describes English verse and is used only for the
  stanza form and for alliteration, as the poet says in `open`.

## 3. The terms

- Apostrophe (second passage). *Silva Rhetoricae* was opened: a turning
  of one's speech from one audience to another, most often to an
  abstraction, an inanimate object or the absent. The Online Etymology
  Dictionary, apostrophe (n.2): from the Greek for a turning away. The
  refrain does turn: third person in rows 2.0 and 2.1, second person in
  row 2.2, an order to the hearers in row 2.3. The term is right. The
  plain-words gloss narrowed "most often" to someone who is not there
  (mended).
- Rhyme by turns, and "closely similar to the ballad stanza": Baum,
  chapter 4, read at the place. He says it of four-beat quatrains
  rhymed abab and abcb. Rows 1.0 to 1.3 are that.
- Alliteration, *Stabreim*: Baum, chapter 5; DWDS under Stabreim;
  Wagner's own use of the word, *Oper und Drama*, in *Gesammelte
  Schriften und Dichtungen*, vol. 4 (1872), p. 118. Right.
- Refrain, "the returning part": right, and said in plain words.
- Present and past subjunctive (second passage, Verbs): English
  Wikipedia, "Subjunctive mood", the section on German, and the forms
  in the DWDS. The six verbs tagged "supposed or wished" are
  subjunctives (word 0 of row 2.1, 4 of row 2.4, 9 of row 6.0, 10 of
  row 6.1, 1 of row 7.0, 0 of row 7.1); the three questions and the two
  promises are what they are called. The working ground called the six
  "two conditions, four wishes"; word 9 of row 6.0 is neither (mended
  to the names of the forms).

## 4. The words

Every dictionary entry behind a gloss was fetched and read: 56 pages of
the DWDS (dwds.de/wb/...) and the Grimm entries *hui*, *rast*, *ruhe*,
*ziel*, *hinfliegen*, *treueigen*, *bord* and *tau* in the digital
edition at dwds.de. The glosses say what the entries say. Those on
which a caption leans:

- *hui*: DWDS sense 1 (imitates the sound of air in swift movement);
  Grimm 1 and 1 g (in the newer language commonly paints great speed).
- *Rast*: DWDS (a pause for rest, especially on a journey); Pfeifer
  there (the old sense, the stretch of road between two resting
  places; English *rest* is kin).
- *Ruhe*: DWDS 1 to 3; Grimm II 1 c (after the toil of life a person
  finds it in death, with examples from Hans Sachs to Heine) and II 5
  (the set pair with *rast*).
- The set phrase of four words that the Rhyme caption gives: Grimm
  under *rast* (f.), sense 5, with that very phrase from Goethe and
  from Schiller. The working ground gave column 148 as the place of
  sense 5; that is the column where the entry begins, and the note now
  says so.
- *Ziel*: Grimm I 1 a (what a marksman shoots at with arrow, bolt or
  ball, with the example of the arrow in the dark that the note
  reports) and I 1 b (the end of a journey or sea voyage); DWDS 1 a
  and 1 b.
- *treueigen*: Grimm (a compound in use only since the nineteenth
  century, chiefly in love poetry), which cites row 6.1 itself.
- *Treue*, *treu*: DWDS, and Pfeifer there (first a pact between two
  parties, then the keeping of a pact; English *true*); the example of
  being true to someone until death stands under *treu*, sense 1.
- *Gebot* (DWDS: a principle, the Ten Commandments, and, marked as
  growing old, a command; Pfeifer under *bieten* for English *bid*),
  *Verdammnis* (religion: the punishment of hell; from Latin
  *damnare*), *Schreck*, *weihen* 1 and 2, *Reine*, *preisen*, *hier* I
  1, *sollen* 1 c, *mögen*, *erlösen*, *wachen* 1 and 2, *Bord* 2,
  *Tau*, *sausen* 1, *pfeifen* 3, *antreffen*, *Schiff*.
- *huzza*, *troth*, apostrophe: the Online Etymology Dictionary.
- The compounds of rows 0.1 and 1.1 of the third passage are in
  neither dictionary (Grimm returns nothing for either); they are
  glossed from their parts and the note says so.
- All these senses were current in 1841; nothing rests on a sense the
  dictionaries date later. (DWDS also gives *hui* as the long cry of a
  ghost, marked colloquial; the reading does not use it, rightly.)

## 5. Auden

Each thing he is said to have said was found at the page given.

- *Forewords and Afterwords*, pp. 253 to 255 (the scan, lines 12110 to
  12256; the running heads fix the pages). On p. 253 Auden calls
  Nietzsche by far the best guide to Wagner and says Nietzsche saw one
  theme come back in opera after opera; the sentence that someone
  always wants to be saved, and on p. 254 the sentence on this opera
  (the Wandering Jew saved and settled when he marries), are
  Nietzsche's, quoted by Auden. The view says this exactly. The Figure
  caption said "Auden, after Nietzsche, finds one theme", which gave
  Auden the finding (mended). The essay's date, 4 January 1969, is in
  the book's own acknowledgments. The research notes give p. 253 for
  the sentence on this opera; the poet's p. 254 is right.
- The same essay, pp. 253 and 255: the operas as freaks; heroes meant
  to be admired and shown as neurotics; the two things a listener must
  do at once. The paraphrase keeps to him.
- *New Year Letter*, the lines on Wagner: the page image of *The
  Collected Poetry* (1945), p. 308 (Internet Archive,
  `in.ernet.dli.2015.215337`, leaf n326) was opened, and opened a
  second time at the end. The two lines quoted are exact: a comma after
  the second word of the first line and a comma at its end, a full stop
  after the second. Ten words.
- *The Enchafèd Flood*, p. 5 (the four names of one half of the hero)
  and pp. 12 to 13 (the list; the item on the destination stands on
  p. 13, after the 12 at the foot of the page before). Right.
- *The Dyer's Hand*, p. 48 (Nietzsche's book taught him to hear
  Wagner), pp. 470 to 472 and p. 473. The quotation from p. 473 is
  exact, eight words. Auden says Wagner in English sounds intolerable
  and would still if the translation were the better poem; the caption
  had "would sound intolerable even as a better poem" (mended to his
  grammar).
- Two quotations in the piece, both under 25 words. No other sentence
  of his is copied.
- His prose note of 1941 and the Swarthmore chart of 1943 were read
  only in the research notes (C, appendix H6 and section 29). The
  paraphrases do not go beyond what the notes give. Both are in the
  caveats.
- The view is honest about what it is: no account by Auden of this
  opera alone exists, and it says so first.

## 6. The reason and its ground, lens by lens

Each sentence of each caption and reason was set against its ground.

**First passage, Beat.** Wagner as author: *Gesammelte Schriften und
Dichtungen*, vol. 1 (1871), p. 23, read. The counts: the proof. The cry
of row 1.4 outside the ballad: counted again in the German libretto
(nine lines of the ballad, three of the chorus of the Dutchman's crew
in Act 3, nowhere else), in Wagner's text of 1871 (the same nine and
three, pp. 339 to 340 and 358) and in the Fürstner libretto of 1901
(nine, and five in that chorus, p. 41). "Only the Dutchman's crew"
holds in all three. The printed note linked the count to the English,
which has the cry five times, and called the singers "the crew"; it now
names the chorus and says in which libretto the count was made. The
line division of 1871: p. 339, read. Stands, with the two mends named
in section 2.

**First passage, Rhyme.** The rhymes: the proof. The last word of the
stanza rhymes with no line of it. Baum, Grimm, and Wagner's heading on
p. 339: read. Wagner on end rhyme and on the verse of his Siegfried:
vol. 4 (1872), pp. 399 to 400, read at the place; the paraphrase is
fair. The set phrase of four words was found again in Grimm under
*rast*, sense 5, with Goethe's name and Schiller's beside it. Caption
and reason stand unchanged; one working source and the printed note
were touched (sections 4 and 9).

**First passage, Word.** One sentence went past its ground: that in
Act 1 the Dutchman "names that lack". The dictionary says the word of
row 1.7 can mean the rest of death, and in Act 1 he says he is denied
grave and death; that the one is the other is the poet's joining, and
the libretto does not say it. Mended: the caption now gives the two
facts side by side and adds what the libretto itself does with the
word, which was missing: in Act 2, Scene 3 the Dutchman asks Senta
whether he is to find in her troth the rest he has long desired (German
libretto, lines 1112 to 1114; Senta uses the noun of him at line 945).
To make room, the sentence from p. 13 of *The Enchafèd Flood* was
shortened; it still says only what he says, of the Romantic view of the
sea. Reason, grounds and printed note follow the caption.

**First passage, English.** The syllables and rhymes of the English
rows: counted. The note of the hosted text: read. "The watch without
rest" set against the page's own gloss of the word in row 1.3 (a halt);
mended to "without a halt". Auden's sentence mended as in section 5.

**Second passage, English.** Which lines are the refrain and which are
sung in its place: the German libretto, lines 736 to 770. The phrase of
four words stands twice (rows 2.1 and 6.1). The English ballad never
has "death", has "true" once and "constant" twice: counted again in the
hosted text. The Dutchman's statement of the condition in Act 3: lines
1587 to 1588. Senta's last line: row 3.1 of the third passage. Stands
unchanged.

**Second passage, Figure.** The marks: the proof. The direction that
has Senta turn to the picture: vol. 1, p. 340 (the page begins just
before it). The count of the first-person pronoun in the ballad before
row 7.0: once, in the oath of the second stanza; counted again. Mended:
the plain-words gloss and the sentence on Auden and Nietzsche.

**Second passage, Verbs.** One statement in the refrain (row 2.0); the
rest is condition, question, order or wish: read line by line. The last
sentence said only that in the last scene Senta says a certain word; it
now says what the form shows, that the verb of row 7.0, word 1, has
become the plain form (German libretto, line 1607; vol. 1, p. 362).
This holds in Wagner's own wording of row 7.0 as well.

**Second passage, Scene.** Each cell of the table was read against the
stage directions of 1871 (vol. 1, pp. 335, 337, 339 to 341, 345, 347)
and the last return of the refrain against the Fürstner libretto,
p. 28 (the page head is on the leaf). All right. Two small things
mended: the second row gave, under the head of Wagner's directions, a
question that the nurse sings (it now says so); and the reason said the
directions "keep Senta dreaming" while the refrain goes round, which is
more than they say of the ballad itself, where she sings with growing
agitation. The reason now says what the directions say: sunk in dreamy
contemplation before, like one waking after, carried away between. The
hosted English has no stage directions in Act 2: counted.

**Third passage, Rhyme.** The noun of row 0.1 stands three times in
the German libretto (lines 263, 1163, 1639), each time rhymed with the
last word of row 0.0: counted again. The pronunciations: DWDS. That he
sought death: Act 1, his monologue. The last direction: German
libretto, lines 1642 to 1647, and Fürstner, p. 47. Caption and reason
stand unchanged; the marks were renumbered with the cut, and the
printed note was brought to four sentences (section 9).

**Third passage, Word.** The angel of Act 1: the two lines after row
0.1 (now hosted, not shown). The condition in Act 3: lines 1587 to
1588 (now hosted, not shown). Stands unchanged, but for the numbers of
the last two rows.

## 7. The prose

American English, present tense, no dashes, no questions, no "we", none
of the stock words: scanned by rule and read. Word counts after the
mends: captions 107 to 110, reasons 30 to 39, printed notes 43 to 70,
the plain-words gloss 26, the view 69, every gloss six words or fewer.
Every reason is one sentence, as POET.md asks; two that the examiner
had first rewritten as two sentences (Word of the first passage, and
Scene) were made one at the end.

Two things were weighed and left. The side notes of the two Word tabs
run to two or three short sentences (22 to 39 words) where POET.md asks
for one sentence, and the model keeps to one. Each sentence gives a
fact from an entry that was opened, the captions lean on several of
them, and making one sentence of two would only make it longer. The
two remarks pinned to the Beat tab have 53 and 43 words, longer than
any in the model; the first says where a voice may differ from the
marks and the second where Wagner's own edition divides the close, and
a reader needs both.

## 8. The rules

No line of the libretto is typed into the reading; the longest German
phrases in it have four words. The two Auden quotations are ten and
eight words. Passages of eight, ten and eight rows.

## 9. The printed notes

`view.source`, each `auden[].source`, `sources`, `stands` and `caveats`
were read as a reader would. No file names, no block or row numbers, no
mention of how the work was done; nothing calls a part of the page a
plate or a lens. Every link was followed in the hosted English and
lands on the speech named (act-1:19 and 21; act-2:21, 124 and, new,
178; act-3:71, 118, 136 and 138), followed once when the notes were
tested and once more at the end. The five caveats are the ones a
reader needs and were left as they were. Four of the notes on what a
caption stands on had five or six sentences where the brief allows
four (Rhyme and English of the first passage, Figure of the second,
Rhyme of the third). In each, two short sentences were joined; in the
last the stage direction is now named for what it grounds, Senta's
leap and the sinking of the ship. All ten now have two to four
sentences and at most 70 words.

One printed thing lies outside the reading: the page offers a record
of the ballad (the lead's entry in `remake/pieces.json`), sung by Maria
Jeritza for Victor in 1922. The Internet Archive's catalogue entry for
that transfer was opened and agrees with what the page says of it:
soprano with orchestra, record 74776, 1922, sung in German, 272.8
seconds.

## What was changed

In `reading.json`:

1. Beat, `meterName`: now says that six lines have eight syllables and
   four beats and that the close has six beats.
2. Beat, `why`: "two light syllables" is now "two syllables".
3. Beat, `stands` and the ground behind it: the chorus is named as the
   Dutchman's crew's, the count is said to be of the German libretto,
   and the working note records the same count in the texts of 1871
   and 1901.
4. Rhyme (first passage), a working source: the Grimm column.
5. Word (first passage), mark: "the pale man" now runs under words 3
   to 5 of row 1.2.
6. Word (first passage), `caption`, `why`, `grounds`, `stands`: the
   sentence that made Act 1 name the lack of row 1.7 is gone; the
   dictionary's sense, the Dutchman's words in Act 1 and his question
   in Act 2 stand side by side; a ground and a link were added for the
   question.
7. English (first passage), `caption`: "without a halt"; Auden's
   sentence in his own grammar.
8. Figure, `plain`: the definition as *Silva Rhetoricae* gives it.
9. Figure, `caption`, `why` and a ground: the theme is Nietzsche's,
   reported by Auden.
10. Verbs, `caption` (last sentence) and a ground (the names of the
    verb forms).
11. Scene, `why`, and the second row of the table.
12. Third passage, `rows` and every mark on its last two rows: block 2
    is now block 3 (see below). `open`: the item on the count of the
    cry rewritten with what was found; four items added for the lead
    (the cut, the `read` key of the table, the dash of row 1.7, a
    weakness in the artist's drawing).
13. Four printed notes (`stands`) brought to four sentences, as set
    out in section 9.

Outside `reading.json`, with the one tool allowed:

- `node build/tools/original.mjs cut dutchman end
  wagner_fliegende_hollaender_27769.txt
  262-267,1162-1165,1587-1588,1639-1640` (same language, source and
  address as before). The page prints the label of a part beside the
  heading of the passage, so the label was worded to be true of the
  eight lines shown as well as of the part: lines from Act 1, Scene 2,
  from Act 2, Scene 3, and from the last scene of Act 3. Block 0
  has four more lines (the Dutchman's address to his angel, which the
  third passage's Word caption cites), and a new block 2 holds the two
  lines of Act 3 in which he states the condition. Neither is shown.
  With them in the part, the build finds lines left out after row 0.1
  and after row 1.3 and sets its sign of omission there: checked by
  running the gap logic of `build/pieces.mjs` over the new part without
  writing anything. The checker's proof shows every mark of the third
  passage on the same words as before.
- `notes.md`: one bracketed line under the poet's note of the cut.

The checker was run after every change.

## Beside the artist

An artist began on this piece at 06:12 UTC (`art.md`, `shots/`), built
the site data and took pictures at 06:12, at 06:24 (after the cut) and
at 06:48, and at 06:34 wrote `site/js/pieces/dutchman.js`, a drawing
for the Scene tab. The artist changed nothing in `reading.json`
(`art.md` says so, and every edit made here went in at the first
attempt).

The drawing was read, and its picture of 06:48 looked at. It reads the
keys `when`, `who sings`, `what is sung` and `read` of the table and
prints their words as they stand: a lane for each voice (Senta, the
girls, Erik), a dot where a voice sings, a ring where the girls join
in, the direction in italics beside each row. Each of these follows
from a cell that was tested in section 6, and the one cell reworded
here (the second row's direction) was reworded before the drawing was
made. One weakness, written into `open` for the lead: the script takes
as the column of directions the longest column that is not one of the
four it names, and the working column `source` is only 90 characters
shorter in all (899 against 989). Nothing is wrong on the page today.

## Still doubtful

- The page was seen only in the artist's pictures, not in a browser.
  The examiner did not build the site data (an examiner may not write
  there); the data another session built at 06:26 UTC has the third
  passage with its two gaps, and in the data built at 06:47 UTC every
  caption, printed note, caveat and source is word for word the
  reading's. The two notes folded at the foot of the page were read
  there and in the reading, not seen opened on the page.
- No score was seen. The tune is known only from the melody printed in
  the Ditson libretto of 1895.
- Where the American wording of row 7.0 came from was not found; both
  American librettos have it, Wagner's text of 1871 and the libretto
  of 1901 have another. The captions lean only on words both have,
  except the bold verb at the end of the row and the mark on word 6.
- Auden's prose note of 1941 and his chart of 1943 were read only in
  the research notes. The London edition of *New Year Letter* was not
  seen.
- In row 1.6 word 5 is taken for the pale man; grammar allows the wind
  and the mast as well (in the caveats).
- In the Scene table the key `read` holds addresses of the hosted
  English. In the pictures of 06:24 UTC the plain table of the kit
  printed them as a column headed "read". Since then the kit leaves
  out a key of that name and the artist's drawing uses it for links;
  the picture of 06:48 UTC shows no such column. Settled, and kept in
  `open` with the weakness of the drawing named above.
- Row 1.7 is shown from its second word, so the page prints points of
  omission for the dash. The tools count the dash as a word, and a
  scan must mark every word shown, so the reading cannot do otherwise
  (in `open`).
- The side notes of the Word tabs are longer than the one sentence
  POET.md asks for (section 7). Left for the lead to judge.

## The checker, at the end

`node build/tools/check-reading.mjs dutchman --print` ends:

    no problems
    no warnings
    the printed notes are fit to print
