# faust: the examiner's record

Examined 2026-10-03, from 06:55 UTC (examiner.txt). The poet's files were
reading.json and notes.md as they stood at 05:50 UTC. A copy of the
reading as found (md5 e6cb2bc4219fa06d03ac511b68cee7d2) is kept in the
examiner's scratch folder as faust-exam/reading.before-exam.json, so that
every change below can be set beside what was there. notes.md was read as
information and left untouched.

**Result: mended.** No passage and no tab was removed. The marks, the
scansion and the counts stood up. What was wrong was in the prose: one
reason that was not a reason, several sentences that said a little more
than their source, several paraphrases of Auden that were quotations in
all but the marks, one line number, and printed notes that sent a reader
to places where Taylor's English does not say what Goethe's German says.
The checker ends with no problems, no warnings, and the printed notes fit
to print.

In this file the works are pointed at by row and word number (row 1.3,
word 0), by line number, or by a single word. No line is written out.
Auden is pointed at by the line numbers of the scans.

The three passages (German, with Bayard Taylor's English of 1870 under
each line):

- `heaven`: Prologue in Heaven, lines 267 to 270 and 275 to 282. Tabs:
  Beat, Rhyme, Parody, English.
- `name`: Study, lines 1334 to 1344. Tabs: Beat, Antithesis, Words, Names.
- `wheel`: Gretchen's Room, lines 3394 to 3405. Tabs: Beat, Anaphora,
  English, Measures.

---

## 1. The proof

`node build/tools/check-reading.mjs faust` on the poet's file: no
problems, no warnings, printed notes fit to print. It was run again after
every change and ends the same way now.

Every line of the proof was read. Each mark was set against the word it
lands on:

- Beat tabs: the four numbered remarks of `heaven`, the five of `name`,
  the four of `wheel` each sit on the word the remark is about (for
  example `heaven` row 1.0 words 4 to 5 are the two words for high words;
  `name` row 2.0 word 5 is the last word of Faust's question, which
  waits for its rhyme; `wheel` row 1.3 word 3 is the kiss).
- Rhyme tab: the letters a b a b, c d c d, e e, b b sit on rows 0.0 to
  1.7, and the `tails` lengths cover the rhyming letters of each last
  word.
- Figure tabs: all 6 parts of Parody, 6 of Antithesis, 10 of Anaphora
  land on the words named in their labels.
- Words tab: the ten glosses sit on the ten words glossed.
- English tabs: all 13 ties were read at both ends. In `heaven` the tie
  on row 0.0 goes to Taylor's second line (p:9.1), which is right,
  because Taylor turns Goethe's first two lines round. In `wheel` the tie
  from row 0.2 word 0 goes to word 3 of Taylor's line, where his
  possessive has moved.
- Words joined by a dash: the proof lists one, in Taylor's row p:39.5 of
  the second passage (word 0, parts 0.1 and 0.2). No mark lands on it:
  that passage has no English tab.

A second, independent test: a script counted the syllables of each of the
36 German rows in the hosted cut and set the number beside the length of
the `meter` and `voice` strings. All 36 agree.

Every link into the copy printed here was opened by script (25 targets,
counting the `read` targets of the two tables and `next`). Each block
exists and is the place described.

## 2. The ear

Each of the 36 German rows was scanned by word number before the poet's
marks were opened, then set beside them. German stress, by word accent
and by the sense of the sentence; the count of syllables checked by
script as above. My beats agree with the poet's in every row.

    row   line    syll  beats  meter
    heaven
    0.0   267      9     4     x/x/x/x/x
    0.1   268      8     4     x/x/x/x/
    0.2   269      9     4     x/x/x/x/x
    0.3   270      8     4     x/x/x/x/
    1.0   275     11     5     x/x/x/x/x/x
    1.1   276     10     5     x/x/x/x/x/
    1.2   277     11     5     x/x/x/x/x/x
    1.3   278     10     5     x/x/x/x/x/     voice begins on a stress
    1.4   279     11     5     x/x/x/x/x/x
    1.5   280     11     5     x/x/x/x/x/x
    1.6   281     12     6     x/x/x/x/x/x/   break after syllable 6
    1.7   282     12     6     x/x/x/x/x/x/   break after syllable 6
    name
    0.0   1334    12     6     x/x/x/x/x/x/   break after syllable 6
    0.1   1335a    6     3     x/x/x/         Faust's half of the line
    1.0   1335b    6     3     x/x/x/         Mephistopheles' half
    1.1   1336    12     6     x/x/x/x/x/x/   break after syllable 6
    2.0   1337    10     5     x/x/x/x/x/
    3.0   1338     8     4     x/x/x/x/
    3.1   1339    10     5     x/x/x/x/x/
    3.2   1340     8     4     x/x/x/x/
    3.3   1341     9     4     x/x/x/x/x
    3.4   1342     9     4     x/x/x/x/x
    3.5   1343     8     4     x/x/x/x/
    3.6   1344     8     4     x/x/x/x/
    wheel
    0.0   3394     4     2     x/x/
    0.1   3395     5     2     x/xx/
    0.2   3396     6     2     xx/x/x         or three beats
    0.3   3397     6     2     xx/xx/         or three beats
    1.0   3398     5     2     x/x/x
    1.1   3399     3     2     /x/            one word
    1.2   3400     4     2     x/x/
    1.3   3401     4     2     x/x/
    2.0   3402     5     2     xx/x/          or three beats
    2.1   3403     4     2     x/x/
    2.2   3404     6     2     x/xx/x
    2.3   3405     4     2     x/x/

Where another hearing is fair:

- `heaven` 1.3: word 0 takes the stress in speech and the first beat of
  the measure is passed over; the line can also be said with the stress
  on word 1. The poet's numbered remark says both. No caption leans on it.
- `wheel` 0.2, 0.3 and 2.0: the first word is a two-syllable possessive
  whose own accent is on its first syllable. Marked light, the lines have
  two beats; said with that accent, three. The caption says the lines
  "can be said" with two beats, and a caveat says some can be heard with
  three. No caption leans on the first syllable.
- The lighter beats (the backslashes in `voice`) are a matter of
  delivery. None carries a claim.

The stated measures were tested against the scenes, by script on the
first edition's numbered text and on the modern-spelling text:

- The hymn, lines 243 to 270: 28 lines, 9 and 8 syllables by turns, four
  beats, rhymed by turns in every quatrain. So "as in the twenty-four
  before" is right.
- Mephistopheles' speech, 271 to 292: 271 to 280 five beats (10 and 11
  syllables), 281 and 282 six, then 4, 6, 4, 5, 5, 5, 4, 5, 5, 5. Rhyme by
  turns in 271 to 278, then seven pairs. The four lines before the cut
  (271 to 274) are five-beat lines, so "four lines into his speech" in
  the second numbered remark is right.
- The Lord's reply, 293 to 295: four, four and five beats, rhymed. The
  rest of the scene to 353: rhymed lines of 8 to 13 syllables, no stanza.
- Study, 1331 to 1350: 1334, 1335, 1336 are twelve syllables with the
  break after the sixth; so are 1345, 1349 and 1350, as the Measures
  table says in its working note.
- Gretchen's room, 3374 to 3413: forty lines of 3 to 6 syllables, ten
  stanzas of four, stanzas 1, 4 and 8 the same word for word.

Nothing in the ear was changed.

## 3. The terms, and what the page joins

**Parody.** The term fits: the last line shown (row 1.7) keeps the four
closing words of the hymn's last line (row 0.3 words 2 to 5; row 1.7
words 5 to 8) and changes the adjective before them (row 0.3 word 1; row
1.7 word 3), and the subject is no longer the Lord's works but man. The
gloss is the Online Etymology Dictionary's definition of parody in other
words; the entry was opened. Thomas's note on line 282 uses the word
itself of this line. Left as it was.

**Antithesis.** The term fits row 1.1: two halves of the same build,
contrary nouns, contrary verbs. The gloss said "contrary ideas set close
together in matching words". Etymonline gives only the close opposition
of contrary ideas or terms; the matching build is from Silva Rhetoricae
(often, though not always, in parallel structure). The gloss is now
"contrary words or ideas set close against each other, often in phrases
built alike", and both sources are named.

**Anaphora.** EXAMINER.md asks that an anaphora begin successive units.
Five of the eight lines begin with the possessive (rows 0.0 to 0.3 and
1.2); in rows 1.0 and 1.3 it stands after the first word or two. The
poet's caption already told these apart ("five ... at the head of the
line; two have it after und"), and the parts carry two tags. That is
honest and it stays. Two things were mended. The gloss said "at the head
of each line, clause or item", and the caption "a word repeated at the
head of each item is anaphora": Etymonline does not give the place of the
repetition, and "each" is false here. Silva Rhetoricae does give it (the
beginning of successive clauses, sentences or lines), so the gloss and
the caption now follow that entry. And the key under the caption had two
rows that both read "his", because the parts of both tags had the same
label; the labels are now "his, first word" and "his, after and".

**What the page joins.** The piece was built (`node build/pieces.mjs
faust`) and every tab photographed at 1280 and 390 px
(`node build/tools/shoot.mjs faust`), four times in the course of the
examination. On the three figure tabs:

- Parody: strokes join high works to high words, glorious to odd, and
  the two closing phrases. Those are the three pairs the caption joins.
- Antithesis: always to always, evil to good, wills to makes. The same.
- Anaphora: one bracket down the five line-heads, underlines on the two
  that follow und, one bracket on my, my, I. The same.

No `join` was set. Nothing is joined that the caption does not join.

One thing for the artist, not a fault of the reading: at 390 px the Rhyme
tab of the first passage draws the long stroke from the hymn's last rhyme
to Mephistopheles' last pair out past the right edge of the passage,
where the eleventh line turns over. The photograph tool reports it
(`path.arc ... stands outside the plate`). At 1280 px it is sound.

## 4. The words

Every dictionary entry behind a gloss was fetched and read (the pages are
in the scratch folder, faust-exam/dict):

- Digitales Wörterbuch der deutschen Sprache, 23 entries: anklagen, böse,
  eigentlich, Element (sense 4), entstehen, Gang, Geist, Gestalt, Gewalt,
  Händedruck, herrlich, Junker, Maske, Rätsel, Rede, schaffen, Schalk,
  Schlag (sense 15), stets, Teil, verneinen, wunderlich, zugrunde. Each
  says what the reading says. Pfeifer's etymologies bear out Teil and
  deal, Geist and ghost.
- Grimm, Deutsches Wörterbuch: fliegengott (vol. 3, col. 1787, citing
  line 1334), händedruck (vol. 10, col. 367, citing line 3400), verneinen
  (vol. 25, col. 915, sense 1a, whose first examples are lines 338 and
  1338), zauberflusz (vol. 31, col. 334, sense 2, of speech). Entries
  that cite the very line, as EXAMINER.md asks.
- Online Etymology Dictionary: riddle (one word with the German), and
  the three terms above.
- Thomas's note on line 1334, for the three names (see section 6).

Senses current in 1808: the Grimm entries cite Goethe's own lines;
Thomas, in 1892, glosses *Schalk*, *wunderlich* and the three names the
same way; Pfeifer dates *Maske* as costume to the seventeenth century.
For the rest the DWDS gives the ordinary sense, which is the sense the
lines need. No gloss leans on a sense that could be later than Goethe.

Two glosses were mended.

- *Maske* (the Names table and caption). The poet had "the mask" and "he
  ... calls it a mask". DWDS gives sense 1, a covering for the face, and
  sense 2, costuming, above all an actor's made-up face. At lines 1846 to
  1847 the thing is Faust's gown and cap, so the word means his costume.
  The row now reads "the mask, his costume: Faust's gown and cap", and
  the caption says "which he calls die Maske, his costume". This matters
  to the reason of the tab, which is Auden's actor.
- The three names in the Words caption: see section 6.

## 5. Auden

Each thing he is said to have said was found again.

| what | where it was read | finding |
|---|---|---|
| the view: variety show; rich in poetry, not exciting as drama | dh.txt 5475 to 5497, p. 115 (running head at the top of the page) | so |
| the view: the Devil as actor; the actor's name; Legion | dh.txt 5637 to 5650, p. 118 | so |
| the view and its quotation: no translation shows the styles | fa.txt 6330 to 6345, p. 131 | quotation exact, 20 words. The contents list (fa.txt line 95) gives 131 for the essay, and the foot numbers 128 and 129 stand two and one pages before |
| every actor would want Mephisto; the myth, not Goethe; twins | dh.txt 5475 to 5513, pp. 115 to 116 | so, but see below |
| not damned and not to be called saved; the pupa | dh.txt 5571 to 5574, p. 117 | so |
| part of the part; a spirit that rejects everything actual | dh.txt 5576 to 5587, p. 117 | so; said of lines 1349 to 1350, not of the line shown |
| the riddle quoted; hard to see what he does to Faust | dh.txt 5598 to 5607, p. 117 | so; his word is evil |
| Faust and Peer Gynt leave the others behind | ef.txt 4424 to 4435, p. 107 (between foot numbers 106 and 107) | so; "always" is his |
| the Tempest lecture, December 1941 | pearce.txt, p. 150 (between the foot numbers 149 and 150) | so; a student's notes |
| "The Wandering Jew", 1941 | research notes C section 14, part four item 6, appendix H17b; snippets of the Internet Archive scans of the magazine and of Prose II | the sentence found word for word in both scans |
| New Year Letter, lines 384 and 400, notes to 384 and 395 | snippets of the Faber scan and of The Double Man | the line of the poem, the note headed Line 384 with the German and "Faust, Part I, Scene 3", the heading Line 395, and 400 in the margin beside the line on Mephistopheles |
| "K.'s Quest", 1946 | research notes C section 14; snippets of two scans of The Kafka Problem and of Prose II | the sentence found; page 49 not seen |
| "Squares and Oblongs", 1948 | research notes C section 14; snippets of Poets at Work and of Prose II | the sentence found; pages 349 to 350 not seen |

Page numbers. In dh.txt the running head stands at the top of its page:
p. 115 at line 5461, p. 116 at line 5510, p. 117 at line 5564 (the scan
reads the number as "n 7"), p. 118 at line 5619 ("n8"). Each passage
cited lies under the head of the page given. In ef.txt and fa.txt the
number stands at the foot. In pearce.txt it stands at the foot, before
the next page's heading: the mark 149 is at offset 52628 of the file, the
sentence on Faust at 54025, the mark 150 at 55064, so the sentence is on
p. 150. Pearce dates the lecture himself: the last he has a record of,
December 1941, on The Tempest. None of the page numbers was one off.

**The paraphrase must not go beyond him.**

- The list's second entry began "Every actor, Auden wrote, would like to
  play Mephisto". He says he can well imagine it. Mended.
- The Words caption said he "wrote that Mephisto is the spirit that
  refuses whatever is actual". What he says is general, of any spirit
  that turns away from the actual: such a spirit must hate creation. The
  caption and the `why` now say that, and the ground says of which lines
  he said it.
- The Measures caption said he "called Faust a variety show". He says
  "like". Now "likened".
- Where he says of the riddle that the good or evil done to Faust is
  hard to see, three paraphrases had "harm" for his "evil". The word is
  the riddle's own, so it is back (Antithesis caption and `why`, the
  list's third entry, one ground).
- The view was tested sentence by sentence against dh.txt and fa.txt and
  goes no further than he does. A caveat now says that his variety show
  is a remark about the scenes, since the Measures tab sets it beside the
  changes of verse.

**A quotation must be exact and at most 25 words, and a piece has two.**
The poet's file had two marked quotations and, in effect, four more:

- the sentence from The Enchafèd Flood, nearly whole, in the Anaphora
  caption and again in the list;
- Pearce's report of the lecture, phrase for phrase;
- the first half of the sentence from "The Wandering Jew" in `says`,
  with its second half as the quotation under it, which together gave
  the whole sentence (about 30 words);
- sentences of The Dyer's Hand, p. 117, in the list's third and fourth
  entries, a few words changed.

All were put into other words. Then a script looked for any run of five
or more words shared between the printed prose and the four scans. It
found three more (the actor's name, in the view and in the Names tab; the
faults of the play; the heroes "morally worse than the average", which
ran with the research notes' summary). Those were reworded too. It now
finds only titles and one German phrase that Auden also quotes. The two
quotations are 20 words each. The second is now the first twenty words
of the sentence from "The Wandering Jew"; the poet had its last 21, which
began in the middle with a lowercase pronoun and read oddly as a display
line.

**The list.** All seven entries stay: each is on the work itself, or was
said in 1941, or (The Enchafèd Flood) is used by a caption. None merely
names the work in passing.

## 6. The reason and its ground, tab by tab

Each caption and each `why` was taken a sentence at a time. Where nothing
is said, the sentence was found at its ground and left alone.

### heaven / Beat (changed)

- Sentences 1 to 3 (four beats, twenty-four before; five, then six; the
  rest mixes four, five and six): the marks, and the count in section 2.
- The poet's fourth sentence: rhymed lines of changing length were the
  verse of La Fontaine's fables and of the German fables after them; and
  the `why` ended "the rhymed lines of changing length used for fables".
  German Wikipedia under Madrigalvers does say this of the verse. But as
  a reason for this passage it does not hold. The Lord answers in the
  same verse (293 to 295, counted), the Prelude before it is in that
  verse (Thomas's note on the Prelude), and Taylor's preface says the
  greater part of the work is in it. A reader was led to think that the
  devil speaks fable verse because he is the devil. The sentence was
  cut. In its place: the Lord answers in the same mixed lines, which are
  the verse of most of the play (text; Taylor's preface, lines 440 to 441
  of the Gutenberg file; German Wikipedia).
- "He cannot make high words": the text, line 275. Added, from a source:
  Thomas's note on 275 glosses the phrase as making fine phrases, as the
  archangels have just been doing. That is the reason the tab needed, and
  it is an editor's, not mine.
- Auden's styles: fa.txt, p. 131.
- `stands` now links the Lord's reply and names Thomas.

### heaven / Rhyme (two small changes)

- The order of rhymes: the marks. "Stays in pairs to the end of his
  speech": counted, seven pairs, 279 to 292.
- "A rhyme that returns at once makes its two lines one unit": Baum,
  chapter IV (lines 3203 to 3215 of the file), on the short couplet in
  English. See "still doubtful".
- "His second pair is one sentence, and it says what he thinks of man":
  lines 281 to 282, read.
- "Is the rhyme the hymn has just ended on": ten lines stand between.
  Now "ended on".
- The `why` said he turns to pairs, "each a closed unit". A general
  statement that one line breaks: the pair at 287 to 288 runs on into
  the next. Now the closed sentence is said only of the pair shown.

### heaven / Parody (two changes)

- The returns: the marks. Raphael's stanza ends on the same line: lines
  250 and 270 compared in the German, the same word for word.
- *herrlich*, *wunderlich*: DWDS; Thomas has 'singular'.
- The definition: Etymonline. "An edition of 1892 notes that his line
  parodies the hymn's": Thomas on 282, read.
- The poet's last sentence: "The Lord answers by asking whether he
  always comes to accuse." The question comes ten lines after the last
  line shown, when the speech is over (293 to 295), and it asks whether
  he comes only to accuse. Now "When he ends, the Lord asks whether he
  always comes only to accuse." *anklagen* was looked up (DWDS).
- The link under the tab goes to the Lord's question in Taylor's English,
  where there is no accusing: Taylor has "ill intention". `stands` now
  says so, or a reader who follows the link finds the caption unsupported.
- The poet's "He keeps the end of the line" became "the line's end", for
  room.

### heaven / English (one spelling)

All claims are on the marks and were checked in Taylor's rows: four,
five, six beats as in the German; the same order of rhymes; his two
closing phrases differ where Goethe's are the same; his last pair does
not rhyme with his hymn's close; his first two lines are in the opposite
order. Title page and preface: read in the Gutenberg file. `stands` had a
British spelling of meters.

### name / Beat (changed)

- Three six-beat lines with a break in the middle: the marks, and the
  count in section 2.
- The alexandrine: Meyers under Alexandriner (vol. 1, p. 305), Baum
  chapter IV (lines 2961 to 2966).
- Schiller. The letter of 15 October 1799 was read again. It says that
  the line's property of dividing into two equal halves, and rhyme's
  making a couplet of two such lines, determine the whole inner spirit
  of the French plays, and that everything is put under the rule of
  opposition. The poet's ground said all of this. The caption gave only
  the first cause, the two halves, and left out the rhyme in pairs. The
  `why` said the line "puts everything under the rule of opposition", as
  if of the line anywhere; the letter says it of the French plays. Now
  the caption gives both causes and the `why` says French plays.
  `stands` says what the letter is about. The riddle's line and the one
  before it do rhyme as a pair, which fits.
- The poet's second sentence quoted Faust's four-word question in German
  with an English version. Removed for room; the marks show the half
  line.
- "Faust asks what it means": "it" had no clear noun. Now "the riddle".
- Whether Goethe meant the form for the antithesis is not known. Thomas
  says of the alexandrines of the Prelude that no special effect is
  meant. That is now in a caveat, with the plain statement that setting
  Schiller's remark beside the riddle is this page's choice.

### name / Antithesis (small changes)

- The build of the line: the marks. *stets*, *böse*, *schaffen*: DWDS.
- "Faust calls it a riddle": line 1337.
- The Lord uses the same verb of the companion he gives man: lines 340
  to 343, read.
- Auden in 1941: the sentence in the scans; he quotes those lines (in
  Latham's English) just before it.
- Auden later: dh.txt 5598 to 5607. "Harm" is now "evil", as above.
- Thomas reads the riddle another way (note on 1336: the devil's own
  opinion, no higher power admitted). The poet had a caveat for this; it
  was shortened and kept.

### name / Words (changed)

- The poet: "He cites three names that devils are called, each from the
  Bible." Thomas's note on 1334 says the first translates Beelzebub and
  the second Apollyon, the Destroyer of Revelation 9:11, and that the
  third "is not a translation of any devil's name", though John 8:44
  calls the devil a liar. The caption now says exactly that. The verses
  were read in the King James Version (2 Kings 1:2, Matthew 12:24,
  Revelation 9:11, John 8:44).
- "Been told the question is a small one" became "got no answer", for
  room; lines 1327 to 1330 bear both out.
- The answer gives a part, then a description: lines 1335 and 1338.
- New Year Letter: see section 5.
- Auden's later sentence: made exact, as in section 5. The poet's "The
  lines agree" is gone; the caption now only sets the line beside him
  ("here all that comes to be ... deserves to perish", lines 1339 to
  1340).

### name / Names (changed)

- Auden's sentence (dh.txt 5637 to 5650) gives his own reason for the
  actor's having no name: his name is Legion. The poet stopped short of
  it. It is now in the caption, and `stands` tells a reader that Legion
  is the many devils' name in Mark 5:9 (read in the King James Version,
  with Luke 8:30).
- The count: run again by script on both Gutenberg texts, with the same
  numbers. German: 253 headings of his own speeches, 1 shared, 29 in
  directions and scene headings, 1 spoken (the short form, line 4183).
  Taylor as printed here: 255, 1, 28, 1. "More than 250 speeches and
  nobody speaks it" holds in both.
- Every row of the table was read at its line in the German and at its
  link in the English. Line numbers were tested against the first
  edition's markers. One was wrong: the poodle row said 1147 to 1322. The
  direction in which he steps out as a traveling scholar stands before
  1322, so the poodle ends at 1321. Mended in the row and in the ground.
- The witch's greeting, his refusal, Baron: lines 2504 to 2511. The
  poet's clause about the fable book was dropped for room.
- *Maske*: section 4. Taylor has no mask at this place (cap and mantle;
  playing the comedy; a direction that he disguises himself), so the
  link's label was changed from "the mask" to "Faust's gown and cap", and
  a working note on the row records the difference.
- "Says aside that he must play the devil again": lines 2009 to 2010,
  with the directions after 1847 and 1850 that put him in the gown.
- The link label "the Lord's rogue" became "the Lord's word for him":
  Taylor has "waggish knave" there.
- `about` said "traveling student"; the table and the caption say
  scholar. Now one word throughout.

### wheel / Beat (left as it was)

- Two beats in every line of the scene, forty lines: counted. The poet's
  "can be said" keeps it honest.
- One thing to a line; the one item that runs over; its second line a
  single word (row 1.1); the list ends at the kiss with no verb: the
  marks and the text.
- The first stanza returns "as it did once before": stanzas 4 and 8
  repeat stanza 1; the passage shows the eighth.
- The direction does not say she sings: read, in German and in the
  English. Thomas takes the stanzas as probably a lyric monologue.
- Schubert, 1814: German and English Wikipedia (composed 19 October
  1814; published 1821 as Op. 2, D 118).
- Auden names the lyrical among the styles: fa.txt, p. 131.

### wheel / Anaphora (changed)

- Seven things in eight lines; five at the head, two after und; my, my,
  I: the marks and lines 3394 to 3405.
- The definition: section 3.
- "It makes the items a list, here without a verb": the first half is
  what the marks show and what POET.md calls craft knowledge; no
  handbook sentence was found for it, and it claims no more than the
  marks do.
- The direction has her alone: read.
- Auden: his sentence was nearly whole in the caption. Now in other
  words; "always" is his.

### wheel / English (left as it was)

Taylor's rows were read: two beats a line; second and fourth lines
rhyme; his possessive heads two lines and then other words stand first;
"size" and "the bliss" stand at the rhymes. "Appear to be there for the
rhymes" is hedged as it should be. *Gestalt*: DWDS. Auden's sentence on
the reader of a translation: fa.txt, p. 131.

### wheel / Measures (small changes)

- Each of the nine rows was counted in the German at the lines given.
  Dedication: four stanzas of eight lines, 11 and 10 syllables, rhymed a
  b a b a b c c (Thomas's note gives the same scheme; Meyers under Stanze,
  vol. 18, p. 852, calls it the epic measure of the Italians and names
  Ariosto and Tasso). Night, 354 to 385: 8 to 11 syllables in the
  modern-spelling text, the first four lines rhymed by turns and the
  rest in pairs (Meyers under Knüttelverse, vol. 11, p. 196: four beats,
  rhymed in pairs, the ruling form of the sixteenth century, revived by
  Goethe after Hans Sachs; Thomas, introduction, p. xxxviii). The King of
  Thule: six stanzas of four three-beat lines, six to eight syllables,
  rhymed by turns; the direction says she sings. Forest and Cavern, 3217
  to 3250: 34 unrhymed lines of ten and eleven syllables and one of
  twelve; a direction brings Mephistopheles in after them. The prose
  scene after 4398 was opened at its link.
- "Faust's first speech is in Knittelvers" covered the whole speech,
  which was counted only to 385. Now "opens in".
- The Faust-book of 1587: Thomas's note on the name, before line 243.
- "Called a variety show" became "likened to"; the `why` no longer
  repeats six words of the quotation in the view.

## 7. The prose

Read for house style after every change, by eye and by the checker's
lint. No dashes inside sentences, no stock words, no rhetorical
questions, no "we", present tense, short sentences. Three British
spellings were found and made American (meters in one `stands`, dikes in
the list; "traveling" was already so). "In the original metres" stays
where it is Taylor's title page.

## 8. The rules

- Text of the works: nothing longer than five words of Goethe or four of
  Taylor stands in a caption or a table cell.
- Copyright: two quotations of 20 words; everything else of Auden's and
  of Pearce's is paraphrase, tested by script as in section 5.
- Length: twelve lines to a passage. Captions 95 to 110 words; each `why`
  40 or fewer; each `stands` 70 or fewer; five caveats of 36 to 49 words.

## 9. The printed notes

The poet had already written these for a reader, and the checker found
nothing left to do. They were read again as a reader would and changed
where the examination changed the ground:

- `sources`: anklagen and Maske added to the DWDS entry; two new entries,
  Silva Rhetoricae and the King James Bible (the six verses read). Twenty
  entries.
- `stands`: eight of the twelve changed, as set out above.
- `caveats`, still five. The first now also says that the variety show
  is a remark about the scenes and that setting Schiller's remark beside
  the riddle is the page's choice. The third (Thomas on the riddle) now
  also carries his remark on the Prelude's six-beat lines. The others
  are the poet's.
- `open`: the poet's nine entries stand as written. Six were added, each
  beginning "From the examiner". One of the poet's is now a little out
  of date: it says the captions speak of "a later essay"; they now say
  "later".

## What was changed, in one list

Printed side: `about`; `view.says`; in `heaven` the Beat caption, `why`
and `stands`, the Rhyme caption and `why`, the Parody caption and
`stands`, the English `stands`; in `name` the Beat caption, `why` and
`stands`, the Antithesis gloss, caption, `why` and `stands`, the Words
caption, `why` and `stands`, the Names caption, `why`, `stands` and two
cells of the table; in `wheel` the Anaphora gloss, caption, `stands` and
seven part labels, the Measures caption and `why`; six of the seven
entries of the list and the quotation at its head; two caveats; three
entries of `sources`.

Working side: the `grounds` of nine tabs were changed to match the
captions, each with a source that was opened (the grounds of the Rhyme
tab, of the second Beat tab and of the third Beat tab already matched
and were left); `view.checked` and three `checked` notes in the list
record what was read again; one working note was added to the table row
for *Maske*; six entries in `open`.

Not changed: any mark, any scan, any tie, any gloss under a word, the
choice of passages, the order of tabs, any heading or tab label.

## For the artist

No `site/js/pieces/faust.js` existed while the reading was being edited
(looked for at the start, at 07:51, 07:55 and 08:19 UTC). An artist began
at 08:18 UTC (art.md). The last change to the reading was made at 08:17,
and none was made after. All edits were small exact replacements.

- Names table: the cell `in English` of the *Maske* row and the cell
  `line` of the poodle row changed; a `source` key was added to the
  *Maske* row (never printed). No key was renamed or reshaped.
- Anaphora: the `label` of seven parts changed, so the key now has three
  different rows.
- Rhyme tab of the first passage at phone width: the stroke noted in
  section 3.
- The German cuts carry no speakers' names (the poet's first `open`
  entry). The captions and numbered remarks say who speaks.

## Still doubtful

- Page numbers not seen by me: Prose, vol. II, pp. 110 to 113 and 349 to
  350; The Kafka Problem, p. 49. Another session's research notes (F, on
  Rilke) record the title of "The Wandering Jew" at the head of p. 110
  and its source line at the foot of p. 113. The search service gives no
  page for a snippet, and the lending scans cannot be opened.
- New Year Letter was seen only in snippets. The three line numbers are
  the book's own (two note headings and a number in the margin).
- That the review of February 1941 covered three books of Kafka is from
  the research notes (appendix H17b names them); the review was seen
  only in snippets.
- Whether Goethe chose the six-beat line for the riddle because of what
  Schiller says the form does is not known. The page states the form
  and the letter, and the caveats say the matching is the page's.
- Baum writes of the couplet in English verse of four stresses. The
  Rhyme tab applies his sentence to German pairs of five and six beats.
  The claim is modest (two lines made one unit) and the pair shown is in
  fact one sentence.
- "Most of the play" is in the mixed verse: Taylor's preface and German
  Wikipedia say so; the play was not counted through.
- Schubert's date is from Wikipedia.
- The line numbers are from the first edition's markers at German
  Wikisource (every fifth line), checked against Thomas's notes; no
  modern numbered edition was opened.
- The counts of the name depend on how the two Gutenberg texts print
  headings and directions.
- The scansion is two readers' hearing, the poet's and mine, which
  agree; the alternatives are named in section 2 and in a caveat.
- The Measures table is not complete, as the poet's `open` says: the
  songs and choruses are not in it.

## Sources opened

- The German text, Project Gutenberg no. 2229 (.cache/originals/
  faust_german.txt), and the first edition as transcribed at German
  Wikisource (scratch faust/ws_faust1.txt), for line numbers and counts.
- Taylor's translation, Project Gutenberg no. 14591 (.cache/texts/
  pg14591_faust_taylor.txt), and the hosted parts dedication, prologue,
  s01, s02, s03, s04, s06, s08, s14, s15, s21, s23.
- Goethes Faust, ed. Calvin Thomas, vol. I (1892), Internet Archive scan
  (scratch faust/thomas2.txt): introduction p. xxxviii; notes on the
  Dedication, the Prelude, the name (before 243), 275, 282, 339, 1334,
  1336, 4023, and Gretchen's room.
- Schiller to Goethe, 15 October 1799, at Projekt Gutenberg-DE.
- Meyers Großes Konversations-Lexikon, 6th ed., at Wörterbuchnetz:
  Alexandriner, Knüttelverse, Stanze. Grimm at Wörterbuchnetz: four
  entries. DWDS: 23 entries. Etymonline: anaphora, antithesis, parody,
  riddle. Silva Rhetoricae: anaphora, antithesis.
- The King James Bible at bible-api.com: 2 Kings 1:2; Matthew 12:24;
  Mark 5:9; Luke 8:30; John 8:44; Revelation 9:11.
- Baum, The Principles of English Versification, chapter IV
  (.cache/handbooks/baum-versification-pg21342.txt).
- German Wikipedia: Madrigalvers; Faust. Eine Tragödie; Faust. Der
  Tragödie zweiter Teil; Gretchen am Spinnrade. English Wikipedia:
  Gretchen am Spinnrade.
- Auden: dh.txt, fa.txt, ef.txt, pearce.txt; research notes C section 14
  and appendices H6 and H17b; full-text search of the Internet Archive
  for the four writings not on this machine ("The Wandering Jew", New
  Year Letter, "K.'s Quest", "Squares and Oblongs").

## The checker's last lines

`node build/tools/check-reading.mjs faust --print`, last run:

    no problems
    no warnings
    the printed notes are fit to print
