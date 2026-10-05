# Moby-Dick: the artist's record

Piece `moby-dick`, "Ishmael and Ahab". Three plates, eleven tabs, two of
them shape lenses that this record's script draws:

- plate `rails`, tab 3, "Play";
- plate `rachel`, tab 3, "Ships".

Started 2026-10-03, 07:56 UTC. The words of the novel are pointed at by
row and word number, as the checker prints them. Nothing of the novel and
nothing of Auden's is typed here.

## 0. State on arrival

- `node build/pieces.mjs moby-dick` at 07:56 UTC: the built file was the
  same size as the one made at 07:13 (59,503 bytes).
- `node build/tools/check-reading.mjs moby-dick`: no problems, no warnings,
  the printed notes fit to print.
- No `site/js/pieces/moby-dick.js`: both shape tabs showed the plain table.
- First pictures, every tab at 1280 and 390 px and the whole page:
  `shots/first/moby-dick-*.png` (taken 07:57 UTC; the picture tool's last
  line was "nothing reported; now look at the pictures").

## 1. What the first pictures showed (07:57 UTC), tab by tab

Every picture in `shots/first/` was opened and looked at, at 1280 px and
at 390 px. Nine of the eleven tabs are the kit's. What is wrong in them
is listed in section 5, worst first; the notes here are the working
record.

- `whenever`, Sentence: sound at both widths. On a phone two lower rules
  begin under a one-letter word at the end of a line of type (words 76
  and 128), so that only the corner tick of the rule shows there.
- `whenever`, Figure: sound. Strokes join the first three heads and the
  items of the list; the fourth head is told by its color.
- `whenever`, Word: the two-word run 102-103 is parted by a line turn at
  both widths, and the run 147-149 at 390 px; the gloss then stands under
  the first part only.
- `rails`, Beat: sound at both widths; every dot read against the lines.
- `rails`, Figure: underlines in four colors and no stroke. Words 241-242
  are in two parts at once (the railroad, and "no doer named"): they take
  the second color and carry both rules.
- `rails`, Word: sound.
- `rails`, Play and `rachel`, Ships: the plain table (no script yet).
- `rachel`, Figure: sound; the crossing is told by color alone.
- `rachel`, Sentence: the narrator's rule (row 15.0, words 7 to 13) stops
  one word before the narrator does, because word 14 is not set in two
  parts (the examiner's finding, in the reading's `open`).
- `rachel`, Word: the runs 15.0 words 26-27 and 18.0 words 32-35 are
  parted by a line turn at 1280 px, the first at 390 px too.
- `rachel`, all tabs at 390 px: the sixth line of type (row 15.0, the
  three words before word 14) stops about a third short of the measure,
  because the joined word 14 cannot turn at its dash.

## 2. What I drew, and why that form

Script: `site/js/pieces/moby-dick.js`. No stylesheet. Both drawings read
`lens.facts` each time the page runs; every name, word and number of the
book that the page shows comes from there. If a key they need is
missing, they throw and the kit shows the plain table.

### 2.1 Play (plate `rails`, tab 3)

What the caption says can be seen: 12 of 135 chapters carry stage
directions; five stand in a row, this one second; the hour, the place and
the speakers of each of the five; the narrator silent from 37 to 40.
That is two things, so two small drawings stand one over the other, each
under its own heading in small capitals.

1. "135 chapters, 12 with stage directions". A line of marks, one for
   each chapter in order, with 1 and 135 at its ends. The twelve stand
   tall in ink, Chapter 37 in red. Form: "a line of marks for where
   something falls in a work". Under the heading the twelve are named in
   words ("Chapters 36 to 40, 108, 119 to 122, 127 and 129"), built from
   `withStageDirections.chapters`, because 127 and 129 stand 8 px apart
   at the widest and cannot each carry a figure.
   The step from chapter to chapter is a whole number of the screen's
   own dots (4 px at 1280, 2 px at 390, 1.5 px at 320), so that the five
   marks of the run are sharp and evenly spaced. At 1280 every chapter
   has a short tick of its own; where the step is under 3 px there is a
   low band instead. The price is that the line is narrower than the
   drawing (537 of 607 px, 270 of 334, 202 of 264). It is to scale.
2. "Chapters 36 to 40". Two hairlines open from the run to the full
   width, and under them each of the five has a line: its number (red
   for 37), its title, a hairline with one mark on it, and under that
   `hour · place · speakers`. The place is the first clause of `place`
   and the speakers the first clause of `who`; the place in full is what
   the pointer adds. The mark is a ring where `narrator` is the first
   value the facts give ("speaks") and a filled dot where it is the
   other ("silent"): one ring and four dots, which is the caption's
   "From Chapter 37 to Chapter 40 the narrator says nothing".
   Under the five, ruled off, stands the facts' `after` sentence.

Key: the tall mark, the red mark, the ring and the dot. The fold ("The
numbers") holds, for each of the five, the stage direction as the reading
words it, the speakers in full, the form and the word count; then the 17
lines set apart, and the sentences `otherRuns`, `ranks`, `epilogue` and
`audenQuotes`. It is a table of six columns where the drawing is 560 px
wide or more, and a fact to a line below that, because six columns of
words in 334 px were squeezed to a few letters a line and still ran off
the plate. In the table each title is kept on one line (left to itself
the column was so narrow that a title of two words took three), and a
count of a thousand or more has its comma.

Not drawn: the word counts of the five chapters as lengths. The caption
names none, and a third thing in the drawing would crowd it. They are in
the fold.

### 2.2 Ships (plate `rachel`, tab 3)

What the caption says can be seen: nine ships in order, the Rachel
eighth; what Ahab asks and what each tells him; how Auden reads each.
Form: an order, so one ink line down the left with a dot for each
meeting (red for the Rachel), the line drawn a stretch at a time as the
ships come in. Beside each dot: the number of the meeting, the ship's
name in the display face (her other name or her port after it in
italic), and at the right the chapter, under the heading "chapter".
Under the name: the question (quiet) and the answer (ink), under the
heading "question, answer". Auden's reading stands beside them under the
heading "Auden" where the drawing is 480 px wide or more, and under them
below that, with a hairline at its left that the key then explains. The
line runs on past the ninth ship to the facts' `after` sentence (the
chase, and the Rachel again in the Epilogue).

The caption's "six" and "the last four in the same five" cannot be
counted from the facts as they are (see P2). So the sentence that
counts them, `sameWords`, stands on the drawing, ruled off under the
line; it names the six chapters, and the chapters are the figures at the
right. `asked` is in the fold ("The counts").

Not drawn: a line of the book's chapters with the nine meetings on it.
This lens's facts hold no count of chapters, and it would be a second
idea.

### 2.3 What the pointer and the finger do

- Play: pointing at a tall mark of the first drawing names its chapter,
  or its run of chapters ("Chapters 119 to 122"). Pointing at one of the
  five lines turns the others pale, and the line under the key gives
  its place in full. The title opens the chapter in the book printed
  here (`read`). A finger gets the same line, and in it "Chapter 39" is
  the link, as the kit's hint says a touch asks what a mark stands for.
- Ships: nothing answers the pointer but the ship's name, which opens
  her chapter for a pointer and a finger alike. The other eight are not
  turned pale: nine paragraphs of small type must stay readable while
  the pointer rests on one of them.
- Neither is needed to read the drawing.

Both draw themselves in under three seconds (the last mark at 2.9 s),
and with reduced motion they are simply there.

## Proposed for the reading

I have not edited `reading.json`. Each proposal below was tested in the
browser only: the built piece was changed in the page as it was served,
nothing on disk, and the tab photographed. The script already reads both
keys; with neither set it draws what section 2 describes.

### P1. `rails`, the shape lens "Play": a new key in `facts`

```json
"sternToBow": [
  { "name": "at the stern",    "chapters": [36, 37] },
  { "name": "at the mainmast", "chapters": [38] },
  { "name": "toward the bow",  "chapters": [39, 40] }
]
```

Why. The caption says the three solo speakers stand "each farther
forward", and the lens's `why` says the five chapters move "from stern
to bow". As the facts are, that order is only in the words of `place`
(36: "the stern area of the upper deck"; 37: "at the stern"; 38: the
mainmast; 39: "the mast nearest the bow"; 40: "the forward part of the
upper deck"), and a script cannot draw from the wording of a sentence.
The key says nothing new: it puts those five places in their order. Its
grounds are the ones the lens has (`placesSource`).

With it. A short rule is drawn over the five lines, "at the stern" at
its left end and "toward the bow" at its right (the names of the first
and the last entry), with a tick for each entry. Each chapter's mark
stands at its place on its own line, and its hour, place and speakers
stand under the mark. The reader sees the marks step from left to right
as the hours go from the close of day to midnight. The key gains one
row: "the ship from end to end: the places in their order, not to
scale".

Without it. The five marks stand in one column at the left, and "farther
forward" is to be read in the names of the places.

Pictures: `shots/proposed-rails-3-play-sternToBow-1280.png` and
`-390.png`; as it is now, `shots/moby-dick-rails-3-play-1280.png` and
`-390.png`.

### P2. `rachel`, the shape lens "Ships": a new key on six of the nine ships

In `facts.ships`, on the ships of meetings 1 and 3:

```json
"quoted": "in his own words"
```

and on the ships of meetings 6, 7, 8 and 9:

```json
"quoted": "in the same five words"
```

Meetings 2, 4 and 5 get no such key.

Why. The caption says: at six of the meetings the question is given in
Ahab's own words, at the last four in the same five. The facts hold this
only as a sentence (`sameWords`); the nine `question` strings do not say
it ship by ship ("Ahab hails her" at 1, 8 and 9, "Ahab asks" at 3 and 7).
The count behind the two values is in section 4.

With it. The dot of a meeting is filled where the ship has the key and a
ring where she has not: six dots and three rings, the last four dots in
a row. The value stands after the question ("Ahab hails her · in the
same five words"). The key gains "the question is quoted" and "it is
not". The sentence `sameWords` goes back into the fold, since the marks
now say it.

Without it. Every dot is filled, and the sentence `sameWords` stands
under the drawing in the open, so that the caption's six, four and five
can still be found there.

Pictures: `shots/proposed-rachel-3-ships-quoted-1280.png` and
`-390.png`; as it is now, `shots/moby-dick-rachel-3-ships-1280.png` and
`-390.png`.

### Not proposed

- A `join` for the Figure tab of `rails`. The figure is drawn as `map`
  and joins nothing, because two things (his path, his soul) are spoken
  of as three (parts 2, 3 and 4). I tested `"join": [[0, 2], [1, 3]]`,
  each thing to the first words that picture it, as the caption pairs
  them. At 1280 the first stroke runs slantwise half across the plate
  between two lines of type, and the second is an arc under two phrases
  that already stand side by side; at 390 both arcs pass under words
  they do not join. Color tells the four kinds better. I leave it as it
  is. Pictures: `shots/tested-rails-1-figure-join-1280.png`, `-390.png`.
- No heading, `beside`, `turn` or label. The three passages are prose;
  no line turns badly at 320, 360 or 390 for a reason a `turn` could
  mend (see section 5 for the one line that ends short).
- No `speakers` gloss (the sixth mending): no passage of this piece
  prints a speaker's name over a speech. No row is cut at a dash
  either, so the points of omission stand as they did.

## 4. Counts, with their commands

No number was added to the reading, and none is typed in the script. Two
counts stand behind what is said in this file.

### 4.1 The question in the same words (behind P2)

Run from the project's root; it prints numbers only. It takes the
question of the last meeting from the hosted text (Chapter 131, block 2,
which is that question and nothing else), and looks for the same words,
and for any other quoted question that ends in the same two words, in
the nine chapters of `facts.ships`.

```js
// node count-question.js
const fs = require('fs');
const T = (c) => JSON.parse(fs.readFileSync(`site/data/texts/moby-dick/c${String(c).padStart(3, '0')}.json`, 'utf8')).blocks.map((b) => b.text || '');
const norm = (s) => s.toLowerCase().replace(/[^a-z\s]/g, ' ').replace(/\s+/g, ' ').trim();
const q = norm(T(131)[2]);
const tail = q.split(' ').slice(-2).join(' ');
console.log(`the question of c131, block 2: ${q.split(' ').length} words`);
for (const c of [52, 54, 71, 81, 91, 100, 115, 128, 131]) {
  const same = []; const other = [];
  T(c).forEach((t, i) => {
    const n = norm(t).split(q).length - 1;
    if (n) same.push(`block ${i}${n > 1 ? ` (${n} times)` : ''}`);
    (t.match(/“[^”]*/g) || []).forEach((m) => m.split(/(?<=[?!.])\s+/).forEach((s) => { const w = norm(s); if (s.includes('?') && w.endsWith(tail) && w !== q) other.push(`block ${i}, ${w.split(' ').length} words`); }));
  });
  console.log(`c${String(c).padStart(3, '0')}: the same words ${same.length ? `in ${same.join(', ')}` : 'nowhere'}; another quoted question ending in the same two words: ${other.length ? other.join('; ') : 'none'}`);
}
```

Result (3 October, 09:08 UTC):

```
the question of c131, block 2: 5 words
c052: the same words nowhere; another quoted question ending in the same two words: block 2, 6 words
c054: the same words nowhere; another quoted question ending in the same two words: none
c071: the same words nowhere; another quoted question ending in the same two words: block 12, 6 words
c081: the same words nowhere; another quoted question ending in the same two words: none
c091: the same words nowhere; another quoted question ending in the same two words: block 13, 13 words
c100: the same words in block 1, block 3; another quoted question ending in the same two words: block 29, 6 words
c115: the same words in block 8; another quoted question ending in the same two words: none
c128: the same words in block 2; another quoted question ending in the same two words: none
c131: the same words in block 2; another quoted question ending in the same two words: none
```

So: the same five words in Chapters 100 (twice), 115, 128 and 131, which
are meetings 6 to 9; a question of his in other words in Chapters 52 and
71 (meetings 1 and 3, six words each); none of his in 54 and 81; in 91
the question in block 13 is the one the facts give to Stubb. This agrees
with `sameWords`. The third question in Chapter 100 (block 29, in the
paragraph that names Ahab) is a different question about the whale, not
the hail: see section 8.

### 4.2 How long the marked runs are (behind the second fault of section 5)

The kit holds a run of marked words together where it is "at most 14
letters" in prose. Its count (`lettersOf` in `kit/plate.js`) is the
length of each word as it is set, points and hyphens included, plus one
for each space. Counted both ways from the built piece
(`site/data/pieces/moby-dick.json`, the `words` of each row), by row and
word number:

| run | words | letters | the kit's count | held |
| --- | --- | --- | --- | --- |
| `rachel` 15.0, 26-27 | 2 | 14 | 19 | no |
| `rachel` 18.0, 32-35 | 4 | 18 | 22 | no |
| `whenever` 0.0, 82-83 | 2 | 16 | 18 | no |
| `whenever` 0.0, 147-149 | 3 | 13 | 16 | no |
| `whenever` 0.0, 102-103 | 2 | 9 | 10 | yes |
| `whenever` 0.0, 125-126 | 2 | 11 | 13 | yes |
| `rails` 4.0, 241-244 | 4 | 14 | 18 | no |
| `rails` 4.0, 236-237 | 2 | 9 | 11 | yes |

## 5. Faults that are the kit's, worst first

Both are seen in pictures taken after the sixth mending (09:20 to 09:52
UTC), in the whole-piece run of 3 October, 09:56:05 to 09:57:13 UTC,
and both were measured in the page once more at 10:00 to 10:02 UTC. The
kit's code was last changed at 09:46:08. I read the fourth, fifth and
sixth parts of `KIT-CHANGES.md` before taking the pictures, the sixth
again after it was added to at 09:52. Neither fault is worked around in
my script or in a stylesheet. Neither is in the list of what is mended.

### K1. A word joined by a dash to a word in quotation marks is one block

Where: plate `rachel`, row 15.0, words 2 and 14. Each is a word, a dash,
an opening quotation mark and a word. This is the examiner's finding (the
reading's `open`, entry 8); the pictures show it is still so. In the
page, word 14 has no `.wp` parts: its second syllable begins on the
quotation mark, outside both parts, and `buildWord` in `kit/plate.js`
then drops the parts.

- (a) Tab "Sentence", at 1280 and at 390. The narrator's clause ends
  with the half of word 14 that stands before the dash. The reading can
  only mark words 7 to 13, so the blue rule stops one word before the
  narrator does. Pictures: `shots/moby-dick-rachel-1-sentence-1280.png`
  (fourth line of type) and `-390.png` (the rule ends with the sixth
  line; the unruled half begins the seventh).
- (b) Tabs "Figure", "Sentence" and "Word", at 390 and at 360. Word 14
  is 127 px wide at 390 and cannot turn at its dash. Word 13 ends 220 px
  into a measure of 334 px, the 114 px that are left cannot take it, and
  the line of words 11 to 13 stops at 66% of the measure (72% at 360;
  at 320 the lines fall otherwise and the shortest of the row is at
  78%). Measured in the page, the last time at 10:01 UTC.
  Pictures: `shots/moby-dick-rachel-0-figure-390.png`,
  `-1-sentence-390.png`, `-2-word-390.png` (sixth line of type).

When the kit parts such words, the lead may move the narrator's span to
end at 14.1, as the examiner's note says.

### K2. "At most 14 letters" is counted with hyphens, points and spaces

Where: plate `rachel`, tab "Word", at 1280 and at 390: row 15.0, words
26-27, the two-word phrase with one gloss. It has 14 letters, which the
fifth mending says is held. The kit's count is 19 (two hyphens, a comma,
a full stop and the space are counted: section 4.2), so the run is left
free. At 1280 it is parted between the fifth and sixth lines of type, at
390 between the eighth and ninth, and the gloss stands under the first
word only. Pictures: `shots/moby-dick-rachel-2-word-1280.png` and
`-390.png`.

What holding it would cost, measured in the page at 09:42 UTC and again
at 10:02. At 1280
word 26 stands at 486 to 592 px of a measure of 607; held with word 27
it would go down, and the line before would end at 480 px, 79% full. At
390 word 26 stands at 173 to 255 px of 334; the line before would then
end at 168 px, 50% full. So the rule as the list words it is right for
the wide plate and the count as the code makes it is right for the
phone. The lead may hold such a run where the line before stays, say,
three quarters full, or let the code stand and say "characters" in the
list; then this is no fault of the plate, only of the list.

The same count leaves free two other runs of 14 letters or fewer:
`whenever` 0.0, words 147-149 (13 letters, counted 16) and `rails` 4.0,
words 241-244 (14 letters, counted 18). Both happen to stand whole in
the last pictures at 1280 and at 390.

### Seen, and not a fault by the rules as they now stand

- `whenever`, tab "Figure", 1280: the item of words 82-83 is parted by
  the line turn. It has 16 letters, over the limit however counted.
- `rachel`, tab "Word", 1280: the phrase of row 18.0, words 32-35, is
  parted (18 letters). Its gloss now stands under the wider part.
- On every tab at 320 to 390 some lines of this large prose end between
  66% and 78% of the measure before a long word or a held run (measured
  in the page at 320, 360 and 390). Only the line of K1(b) has a cause
  that is not the width itself.
- `rails`, tab "Figure": words 241-242 belong to two parts at once and
  carry two rules, the second lower. It reads rightly.

## 6. Faults of the first pictures that are gone

Struck after the pictures of 09:01 UTC, and still gone in the last ones:

- ~~`whenever`, tab "Word", 1280 and 390: the phrase of words 102-103
  parted by a line turn, its gloss under the first half only.~~ Held
  whole at both widths.
- ~~`whenever`, tab "Word", 390: the phrase of words 147-149 parted.~~
  Whole at both widths (by the fall of the lines: see K2).
- ~~`whenever`, tab "Sentence", 390: a lower rule that began under a
  one-letter word at the end of a line showed only its corner (words 76
  and 128).~~ The runs 76-78 and 128-129 are held and ruled whole.
- ~~`rachel`, tab "Word", 1280: the gloss of the parted phrase of row
  18.0 stood under its first word.~~ It stands under the wider part.

Struck later (it was my third fault, K3, until 09:26 UTC):

- ~~`rails`, tab "Play", the fold "The numbers": the kit's table set a
  count without its comma (2769, 1509) if the column was to stand at the
  right.~~ Mended by the lead at 09:26:04 UTC (the sixth mending, "A
  drawing's table"): `table` in `kit/lens-shape.js` now takes a count
  that a script has set with its comma for a number. The script sets it
  with `num`, and the fold reads 2,769 and 1,509, set right at 1280.
  Pictures: `shots/open-rails-3-play-1280.png` and `-390.png`.

## 7. Faults of my own drawings, found in the pictures and mended

All in `site/js/pieces/moby-dick.js`; none needed the kit.

- Play, 320: the heading in small capitals was 10 px wider than a
  drawing of 264 px. It is now measured, and set in two lines where one
  does not fit.
- Play, 320: a line of `hour · place · speakers` turned inside a
  hyphened place name. Each of the three is now kept whole and the line
  turns after a point.
- Play: the hours stood at the right of the titles and crowded the marks
  at the bow end in the proposed form. They went into the line under.
- Play, pointer: the title of the line pointed at went pale with the
  rest, and the other titles twice as pale, because the link round a
  title was itself a mark. The words set over the drawing did not go
  pale at all, and stopped the pointer from reaching the line under
  them. All three mended.
- Play, pointer: the tall marks did not answer, though the kit's hint
  says "Point at a mark". They now name their chapters.
- Both: the last marks came in after three seconds. The times were drawn
  in so that both finish at 2.9 s.
- Ships: the whole line of meetings drew itself at once, with gaps where
  the dots had not yet come. It now grows from ship to ship.
- Ships, 320: a question turned with one word left alone on its second
  line. Balanced now.
- Ships, key: the hairline beside Auden's reading stands upright, and
  the key showed it lying down. The key's sample is now upright.
- Ships: a ship's name wrapped in a link was ruled under heavily (the
  site's link rule falls on SVG type at full weight). A name in a
  drawing is not ruled under; the pointer's hand shows that it opens.
- Both: a finger had no way into the book, because a touch on a name
  was kept for asking. See 2.3.
- Play, the fold at 390: see 2.1.
- Play, the fold at 1280: a chapter title of two words stood in three
  lines, broken at its hyphen, in a column the table had made narrow.
  Each title is now kept on one line.
- A key label in the proposed form of Ships named Ahab in the script.
  It now reads "the question is quoted".

## 8. In the reading: for the lead

Not mine to change; nothing here is changed.

1. `auden[5].says`: the title New Year Letter is not between asterisks,
   so the page sets it in roman under "More from Auden", while the
   Sources set it in italics. Pictures:
   `shots/moby-dick-page-1280-3.png`, `shots/moby-dick-page-390-5.png`.
2. `rachel`, shape lens, `facts.sameWords`: "in Chapter 100 he asks
   twice" is true of the five words (blocks 1 and 3). The same chapter
   has a third quoted question of Ahab's about the whale, in other words
   (block 29, six words: section 4.1). If the sentence means the hail,
   it stands; "twice in those words" would shut out the doubt.
3. The two proposals above (P1, P2), which the lead sets or leaves.
4. `rachel`, Sentence lens: when the kit parts the joined word (K1), the
   narrator's span can end at 14.1, as the examiner's note in `open`
   says.

I found nothing else wrong. The marks of the nine kit tabs were read
against the words in the first pictures and again in the last.

## 9. The last pictures, and what was refused

Nothing was refused by the permission system.

The lead mended the kit twice while I worked, and added to the sixth
mending once, so the last pictures were taken four times. Only the
fourth set is in `shots/` now.

- 09:00:49 to 09:01:31 UTC, after the fifth mending: the whole piece
  (`node build/tools/shoot.mjs moby-dick --out
  remake/works/moby-dick/shots --page`); at 09:16:59 to 09:17:16 the
  two drawn tabs again, one at a time, after small changes to the
  script. All opened and looked at.
- 09:19 to 09:29 UTC: the lead changed the page's script, the build,
  the stylesheet and five files of the kit (the sixth mending). When no
  file had changed for four minutes I built, checked and photographed
  the whole piece again (09:34:08 to 09:35:18) and compared it with the
  set before, dot for dot. What had moved: the summary is headed "The
  passages"; the remarks of the Beat tab and the notes of the three
  Word tabs are larger and darker. No mark on a passage moved, and
  nothing in my two drawings. I opened every picture that differed.
- 09:40 UTC: the lead's word that the sixth mending was done. I read
  its part of `KIT-CHANGES.md` and took the whole piece a third time
  (09:46:25 to 09:47:31): the same, dot for dot, as at 09:34.
- 09:52 UTC: the list was added to (lines of a plate with a rhyme tab
  stop short of the edge; the stylesheet and `kit/plate.js` had changed
  at 09:46:08), and now asks for pictures later than 09:52. No plate of
  this piece has a rhyme tab. I read the part again.
- 09:56:05 UTC: `node build/pieces.mjs moby-dick` (the built file is
  the same, byte for byte, as at 09:16), then
  `node build/tools/check-reading.mjs moby-dick`: "no problems", "no
  warnings", "the printed notes are fit to print".
- 09:56:05 to 09:57:13 UTC, the last pictures: the whole piece, every
  tab at 1280 and at 390 and the page in twelve slices. Last line:
  "nothing reported; now look at the pictures". All 34 are the same,
  dot for dot, as those of 09:46 and of 09:34.
- 09:58:33 to 10:00:13 UTC: the nine other pictures listed below, taken
  again with the piece and the kit as they now are. They are the same,
  dot for dot, as those of 09:49, which I looked at.
- 10:00:48 to 10:02:12 UTC: the phone widths measured once more in the
  page (sections 5 and the last paragraph below). No file of the kit
  had changed since 09:46:08 when I handed in.

Pictures in `shots/` (mine):

- `moby-dick-*.png`: the last state, every tab at 1280 and 390, and the
  page in slices;
- `first/`: the same set as it was at 07:57 UTC, before any drawing;
- `proposed-rails-3-play-sternToBow-{1280,390}.png` and
  `proposed-rachel-3-ships-quoted-{1280,390}.png`: P1 and P2;
- `tested-rails-1-figure-join-{1280,390}.png`: the join not proposed;
- `open-rails-3-play-{1280,390}.png`: the fold of Play opened;
- `touch-rails-3-play-390.png`: Play after a touch on its fourth line,
  on a phone with no pointer: the speaking line carries the way in.

`final-*.png` and `kit-fault/` are the examiner's.

Also looked at, in the page and not kept: both drawings at windows of
320, 360, 600, 820, 960 and 1100 px (drawings of 264 to 705 px wide),
with every word measured to stand inside the drawing and clear of the
others; both while they draw themselves, at 0.7 s and at 3 s. Measured
again at 320, 360, 600 and 960 after the sixth mending (09:44 UTC),
and at 320 and 360 once more at 10:01: the same, but for the ink of
one figure. In Ships the chapter figures
are set flush right, and the 4 of 54 overhangs its cell by 1 px past
the drawing's edge. A drawing does not clip and the plate has room, so
I left the figures in line.
