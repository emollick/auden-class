# Art notes for dante-purgatorio

Artist's record. Words of the poem are pointed at by row and word number
(a row is block.line, words counted from 0, as the examiner's record does)
and are never copied here. Begun 2026-10-03.

**Status: finished.** Last pictures taken 2026-10-03, 10:18:29 to 10:21:23
UTC, after the kit's sixth mending (which its notes close at 09:52) and
two later changes to the kit that no note describes yet (10:13 and 10:14;
its newest file is of 10:14:38). The picture tool's last line: "nothing
reported; now look at the pictures". Every fault listed in 2a is in the
pictures of that run, which are the same, bit for bit, as those of the
three runs before it, from 09:50 on.

One drawing made (plate "love", tab "Mountain"), in
`site/js/pieces/dante-purgatorio.js`. In `reading.json`: the three plate
headings shortened, one tab renamed ("Translation" to "English"), and two
keys added to the facts of the drawing. No stylesheet of my own. Nothing in
the kit, the site's stylesheet or the build was touched, and nothing of the
kit's is worked round in my script: it draws its own marks, measures the
words it has set, and gives its own svg its height.

The three plates are "share" (canto XV), "love" (canto XVII) and "garden"
(canto XXVIII), four tabs each.

## 1. What I drew, and why that form

File: `site/js/pieces/dante-purgatorio.js`. It draws one lens, `love:shape`,
with `kit/diagram.js`, from `lens.facts` when the page runs.

The lens's heading promises three things: the seven terraces sorted by the
three ways love goes wrong, the cantos given to each level, and where these
lines stand in the poem. That is an order, a division and a place. None of
them is a quantity that a height or an area could show, so the drawing is a
ruled list and two scales, as a diagram in a book would be. It is not a
picture of a mountain: it has no outline, no slope, no steps and no scenery.
It is two small drawings under two small-capital headings, one under the
other with a hairline between, as the kit's sixth rule asks when a lens
holds two things. (The script would set them side by side in a drawing of
820 px or more. A plate gives a drawing 264 to 788 px, so that form is
never reached today; it waits for a wider plate.)

**The levels and their cantos.** A ruled list of the nine levels of the
facts, the highest at the top and the lowest at the foot, which is the
order of the mountain and the only thing in the drawing that is "up".

- The division. A hairline and a small-capital heading stand over each band
  of terraces that share an error: the three names come from
  `facts.errors[].error`, and after each stands the word or words of the
  passage that name it, cut from the plate when the page runs
  (`ctx.text(inRow, w)`, rows 31.1 and 31.2). So the reader sees the three
  words of Virgil's line become the three bands of seven terraces: three,
  one, three. The two levels that are not terraces (below the gate, the
  garden) stand outside the bands, in the italic of a note.
- The cantos. To the right of the names runs one scale of the 33 cantos of
  the Purgatorio (first, middle and last figured; a tick for each). Each
  level is a 3 px line over the cantos its fact `cantos` gives it. The
  lines step up and to the right, which shows the order of the climb along
  the poem, and where a canto is shared by two levels (XV, XVII, XIX) the
  two lines overlap by that canto. Honest at the grain of the facts, which
  give whole cantos.
- This passage. Red is kept for "this, here": the terrace the passage is
  spoken on (its number, name and line), a red dot on that line at the
  canto of the passage, and that canto on the scale with the fact
  `thisCanto.inPurgatorio` under it as a red note. Two ink rings mark where
  the other two passages of the page are spoken (from the `plate` notes of
  the levels). Everything else is ink and hairline.
- A dot or a ring takes the place of the line where it stands. A stub of
  line beside it too short to read as a line (less than twice the ring) is
  left out, so that a ring at the first or last canto of a level stands at
  the end of its line at every width.

**The poem by count of lines.** Three cells, each as long as the lines of
its part (names and counts over them), with canto XVII as a red cell at its
true place and width; two fine lines open that cell out to a bar of the
canto's 139 lines. On the bar: the speech on love in the kit's quiet color,
the lines shown on the plate in red, a tick at line 91, and an ink mark at
the middle line of the poem with its label. The label is computed, not
read from a string: the middle is (all lines + 1) / 2, and its number in
the canto is that less the lines before the canto (the Inferno, and the
first sixteen cantos of the array I added, section 3). It comes to line 125
and 7,117 of 14,233, which is what the poet's own sentence in the facts
says. Under the bar stand the seven figures of
`linesInTheSevenMiddleCantos`, the middle one red: they are figures, not
bars, because what matters in them is that they read the same from both
ends, and seven numerals show that at a glance where seven nearly equal
bars would not.

**What is to scale.** The three cells and the red cell are in proportion to
lines, from zero. The canto bar gives one equal step to each line. The
levels are laid on whole cantos. Nothing is out of scale, so the key says
nothing about scale.

**Words.** The only words of my own are the two headings, the word "canto"
on the scale, "line N: the middle line of the poem", "lines in cantos A to
B", the five entries of the key, and the heads of the folded table. Each
states what a mark is or a fact of `facts`. Everything else is printed from
the facts. No count, name or line number is typed in the script (the part
of the poem is read from `thisCanto.canto`; the words "named", "reached"
and "left" and the speaker's name in the pointer's notes are the names of
the facts' own keys). A place in the poem is set as a printer sets it: a
dash between the two ends of a range of lines, the range kept on one line,
and a canto kept with its lines. In the key, the last short phrase of an
entry that holds a fact is kept on one line, so that no word is left alone
where the entry turns (at 320 to 345 px the fifth entry did).

**The pointer** adds detail and is not needed. It speaks through the kit's
`d.hot(node, words, mark)`: a line under the key says the note, the marks
of the place stay dark and the others step back. Each part of a row speaks
of itself, in a note short enough for the room the kit keeps under the key
(one line; two on a narrow plate):

- the name of a terrace: where the poem names what is purged there
  (`named`); the name of the level below the gate: what it is (`what`);
- the rest of the row: its cantos, and where the level is reached and left
  (`reached`, `left`);
- a dot or a ring: which passage of this page is spoken there (`plate`);
- the heading of a band: where Virgil says it (`errors[].virgil`), while
  the terraces of that band stay dark;
- a cell of the poem: its lines and cantos;
- the middle mark and its label: the poet's sentence
  `thisCanto.middleLineOfPoem`.

That is 28 places, and every one speaks with a mouse at 1280 and with a
finger at 390 (each tried by script). Counted at 26 widths from 320 to
1920: 24 of the 28 notes fit the kit's room at every width but one narrow
range (windows of 917 to about 924 px, where the drawing is 453 to 456 px
beside its caption and up to three more notes turn onto a second line).
The other four places hold three notes that are single sentences of the
reading, 145 to 193 characters: the two longer `errors[].virgil` and the
sentence on the middle line. I kept them whole, because they say what the
caption does not, and what they cost is fault F of 2a.

**The numbers**, folded under the key, are the nine levels as a table, in
the order of the drawing: level, what is purged, error of love, cantos.
From a drawing of 570 px no cell turns
(`extra-love-3-mountain-figures-1280.png`: the table is 518 px in 607).
Below that the level and what is purged share a column, so that only the
head and one long name turn at 334 px
(`extra-love-3-mountain-figures-390.png`).

**Drawing in.** The levels draw themselves from the foot upward, then the
headings, then the second drawing from the top down. The last line begins
1.75 s after the tab opens and is drawn at 2.85 s. With reduced motion
everything is simply there.

**What I left out, on purpose.**
- A picture of the mountain, risers between the levels, a path. Rule one.
- Inferno XI, which the caption names. The lens's heading does not promise
  it, and to show a plan of Hell beside this one would be a second lens.
  The caption says it in words, and the note on what the caption stands on
  links to the canto.
- The facts `night`, `hell`, `wordOrder` and `auden`. They are sentences,
  not marks. The caption carries the first two, the page's fourth caveat
  the third, and the note on what the caption stands on the fourth.

## 2. Faults

Every fault below was seen in a picture. File names are in
`remake/works/dante-purgatorio/shots/` and begin `dante-purgatorio-`
unless they begin `extra-`. "Okey" is the label of the English prose that
stands beside the Italian on all three plates. The numbers in brackets are
those of my earlier lists. Sizes and distances were measured in the same
browser the picture tool uses, by small scripts kept outside the project.

### 2a. Still there after the second mending

All of these are the kit's to mend. Worst first. Each was seen again in
the last pictures (10:18 to 10:21 UTC).

A. [6] **Plate "love" is set smaller than the other two, and a tenth of
   its column stands unused.** Tabs "Figure", "Rhyme" and "Word", every
   width (`love-0-figure-1280.png`, `love-1-rhyme-1280.png`,
   `love-0-figure-390.png`, `love-0-figure-360.png`; `page-1280-1.png`
   shows the foot of plate "share" and the head of plate "love" together).
   The Italian is 28.57 px on "love" against 37.76 px on "share" and
   36.34 px on "garden" at 1280; 17.47 against 22.78 and 21.92 at 390;
   16.5 against 20.71 and 19.93 at 360. The plate has a "Rhyme" tab, and
   room for its letters and arcs is kept at the right on every tab. But
   at 1280 the words reach 473 px and the marks of "Rhyme" 502 px in a
   column of 551 px, and at 390 they reach 282 and 302 px of 334. So type
   a tenth larger (about 31.4 px and 19.3 px) would still clear the
   widest tab. At 320, since the sixth mending, three of the plate's nine
   lines turn on every tab to keep that room (rows 30.1, 31.1 and 34.0;
   `love-0-figure-320.png`, `love-2-word-320.png`), where the words reach
   229 px of 264 and only the "Rhyme" tab uses the rest; the other two
   plates turn no line at any width.

B. [17] **A row of a key, a note under the caption or a numbered remark
   leaves one word alone on its last line.** The captions are set with
   `text-wrap: pretty`; the rows under them (`.keys p`, `.points li`) are
   not. Where it shows now:
   - 390: plate "share", tab "Sentence", first row of the key
     (`share-1-sentence-390.png`); "share", "English", remark 1
     (`share-3-english-390.png`); "garden", "Sources", note 1
     (`garden-2-sources-390.png`); "garden", "Beat", remark 3
     (`garden-3-beat-390.png`).
   - 360: "share", "Simile", the definition under the figure's name
     (`share-0-simile-360.png`); "share", "Sentence", second row of the
     key (`share-1-sentence-360.png`); "share", "English", remark 5
     (`share-3-english-360.png`); "love", "Word", note 1
     (`love-2-word-360.png`); "garden", "Sources", notes 2 and 3
     (`garden-2-sources-360.png`).
   - 320: "share", "Word", note 4; "love", "Figure", the definition;
     "love", "Rhyme", the note under the row of letters; "garden",
     "Sources", note 4; "garden", "Beat", the fourth row of the key and
     remark 1 (the pictures of those tabs ending `-320.png`).
   - 1280: "love", "Word", note 1 (`love-2-word-1280.png`).
   One rule for those rows would mend them all.

C. [18] **In a row of a key a comma parts the entries and also stands
   inside an entry.** Plate "garden", tab "Figure", every width
   (`garden-1-figure-1280.png`, `garden-1-figure-390.png`): the third row
   reads "her, the lost, she, the loser". It is two entries, each with a
   comma of its own, and it reads as four things. A semicolon or a raised
   point between the entries of a row would keep them apart.

D. **A key and its remarks are broken across three columns.** Plate
   "garden", tab "Beat", 1280 (`garden-3-beat-1280.png`). Under the
   caption the first column holds "The measure" and three rows of the
   key; the second begins with the last two rows of the key and goes on
   with remarks 1 and 2; the third holds remarks 3 and 4 and the button.
   The key should stay whole in one column and the remarks begin another.

E. **The three points of omission differ between the two columns.** On a
   phone the points in the prose are larger than those in the verse:
   22.5 px (51 px wide) against 13.98 px (33 px) on plate "love" at 390
   and against 17.54 px on "garden" (`love-0-figure-390.png`,
   `garden-0-sentence-390.png`). At 1280 they are not level: the points
   of the prose stand 12 px lower than those of the verse on "love" and
   26 px lower on "garden", where they are also smaller (22.5 px against
   29.07 px) (`love-0-figure-1280.png`, `garden-0-sentence-1280.png`).

F. [10, what is left of it] **The line that speaks keeps room for one line
   (two on a narrow plate), and a longer note moves what stands under
   it.** Plate "love", tab "Mountain". The three long notes of 1 take two
   lines at 1280, and "The numbers", the foot of the plate and the page
   under it move 21 px while the pointer is on the place
   (`extra-love-3-mountain-pointer-1280.png`: the plate grows from 945 to
   966 px). At 390 they take three or four lines and the caption moves
   21 or 42 px (`extra-love-3-mountain-pointer-390.png`: 1,254 to
   1,296 px); at 320, up to 63 px. A note that fits moves nothing
   (`extra-love-3-mountain-row-1280.png`, `-row-390.png`). The line
   could lie over what is under it on a ground of paper when it is
   longer than its room, as it already does at the window's foot.

G. [15] **The plain table that stands in for a drawing that throws.**
   Tried in the browser only, with the piece's script answered by one
   whose `draw` throws; no file was touched
   (`extra-love-3-mountain-fallback-1280.png`, `-fallback-390.png`). The
   plate is 3,054 px tall at 1280 and 3,294 px at 390; the table is
   1,410 px wide in a box of 607 px (334 px on a phone), so most of it is
   out of sight and a column head is cut at the edge; its rows are named
   as the keys are written in the file; and rows with nothing to show
   stand empty, one of them hundreds of pixels tall. A reader sees this
   only if a fact the drawing needs is lost.

H. **At 320 the four tabs of every plate take two rows, the fourth alone
   on the second** (`love-0-figure-320.png`, `garden-0-sentence-320.png`,
   `share-0-simile-320.png`). Small. (At 360 the tabs of plate "share"
   did the same until I renamed its fourth tab: section 4.)

Seen, and right as it stands. Where the lines of verse turn (counted by
script at 390, 375, 360, 345, 330 and 320, and seen in the pictures): no
line turns on any plate at 390, 375 or 360. On plate "love" row 34.0
turns after its word 2 from 345 down, between the main clause and the
one that hangs on it; at 320 row 30.1 also turns after its word 2, at
the comma, and row 31.1 after its word 3, before the three words that
name the first error (`love-0-figure-320.png`, `love-1-rhyme-320.png`).
Each turn falls between two phrases and leaves no word alone, so I set
no `turn`. On the "English" tab at 390 two marked phrases of the prose
are parted at a line's end (marks 3 and 4; `share-3-english-390.png`):
the rule under them carries over, and since the fifth mending only a
short phrase is held whole.

### Proposed for the reading

Nothing. No speaker's name stands over a speech on this piece (the two
labels over the columns are the names of the poet and the translator),
so there is no name to gloss with `speakers`.

### 2b. Gone

Each of these was on the page in an earlier round and is not in the last
pictures.

1. ~~The prose beside the verse does not show its paragraphs, and is
   leaded like verse.~~ Gone with the second mending: each paragraph
   begins level with its tercet, the prose is 19 px on 27.55 px at 1280
   and 16 px on 23.2 px at 390, and it is leaded for marks only on the
   tab that marks it.
2. ~~Lines left out are not marked in the prose beside.~~ Gone: three
   points stand in the prose too. What is left of it is E above.
3. ~~Under "Beat" the three points read as more marks of the beat.~~
   Gone: they stand 54 px under the stress dots at 1280 and 38 px at 390,
   and are set in from the left edge.
4. ~~Holes in three lines on the tabs that have no numbers.~~ Gone: the
   room for a remark's number is kept on the "Beat" tab only.
5. ~~On a phone the marks and their caption are never on screen
   together.~~ Gone: on the tabs that do not mark it the prose goes after
   the caption (plate "share", "Simile", 390: the Italian ends 674 px
   down the plate, the caption begins at 697 px, the prose at 1,141 px).
7. ~~A drawing in a plate with two versions gets half the plate.~~ Gone:
   a drawing has the plate to itself up to 788 px and stands beside its
   caption from a window of 917 px (607 px at 1280), and the caption
   keeps in view beside a tall drawing (tried at 1280 by 640).
8. ~~A line with a time is seen before its time.~~ Gone: 0.4 s after the
   tab opens all twelve lines of the drawing are hidden.
9. ~~A line that can stand out does not draw itself.~~ Gone: it draws,
   and a mark that fades in while another speaks takes its 0.6 s.
10. ~~The line under a drawing has room for one line of words~~, in part:
    it stands under the key, so the key does not move; it shows a hint
    while it is empty; it keeps two lines on a narrow plate; and it
    stands at the foot of the window while its own place is out of
    sight. What is left is F above.
11. ~~The heading over a drawing is long on a phone.~~ Gone: 19 px
    there, in four balanced lines at 390 and 360 and five at 320.
12. ~~Headings and the line under the title are not balanced.~~ Gone.
13. ~~Small type on a phone~~ (glosses of 11 px). Gone: 12 px at 390 and
    360, 13.5 px at 1280.
14. ~~The key of a word tab, and the numbers of the fourth tab of plate
    "share", do not follow the passage.~~ Gone: both follow it.
16. ~~A range of pages or years breaks at its dash, and "pp." is parted
    from its figures.~~ Gone (`page-390-0.png`).
- ~~The words of `d.hot`, `d.keys` and `d.note` are printed as given,
  without the site's `tidy`.~~ Gone with the fourth mending.
- ~~On plate "share" at 390, in the prose after the caption, a line
  stopped at 60 and another at 72 per cent of the measure, before a
  phrase held whole.~~ Gone with the fifth mending: no line before the
  last of a paragraph now stops short of 76 per cent at 320, 360, 390 or
  1280.

### 2c. Faults of my own drawing, seen in pictures and mended in my script

- A level said all four of its facts in one pointer note of 87 to 185
  characters, two lines at 1280 and four on a phone. Now each part of a
  row says its own (section 1).
- A stub of line 3 to 5 px long stood beside a ring or a dot in windows
  of 640 to 916 px. Left out now.
- The fifth entry of the key left one word alone on a second line in
  windows of 320 to 345 px. Its last phrase now turns whole.
- The four lines by which my script once worked round faults 7, 8 and 9
  and the folded table are long gone from it: the kit mended all four.

## 3. What the drawing needed and the facts did not hold

**The lines of each canto of the Purgatorio.** To find the middle line of
the poem inside canto XVII, and to set the canto at its place on a line of
the whole poem, the drawing needs the lines of the cantos before it. The
facts held that sum only inside a working note, which the build takes out.
Counted over the Italian printed on the site:

    node -e "
    const fs=require('fs');
    const count=(id)=>JSON.parse(fs.readFileSync('site/data/texts/dante-italian/'+id+'.json','utf8')).blocks.filter(b=>b.k==='v').reduce((n,b)=>n+b.lines.length,0);
    const pur=[];for(let i=1;i<=33;i++)pur.push(count('pur-'+String(i).padStart(2,'0')));
    console.log(JSON.stringify(pur));"

Result (lines in cantos I to XXXIII of the Purgatorio):

    [136,133,145,139,136,151,136,139,145,139,142,136,154,151,145,145,139,145,145,151,136,154,133,154,139,148,142,148,154,145,145,160,145]

The same script gave 4,720, 4,755 and 4,758 lines for the three parts,
14,233 in all, 2,272 for Purgatorio I to XVI, and line 125 of canto XVII as
line 7,117, the middle line. All agree with the facts the poet counted, and
the examiner has since checked the array against the examiner's own count.
The parts hold nothing but verse blocks (1,607 of them in the Purgatorio).

Added to the lens's facts under the new key `linesInEachCantoOfPurgatorio`.
No key that was there was touched.

**A pointer to three words.** Each entry of `facts.errors` points at its
words in the passage with `words.row` and `words.w`. The build takes out
every key named `row`, so the page got the word numbers without the row. I
added `words.inRow` beside each `row`, with the same value ("31.1", "31.2",
"31.2"), so that the drawing can cut the words from the plate when the page
runs. The words themselves are typed nowhere.

Both additions were made as small exact edits while the examiner was at
work on the same file.

## 4. What I changed in the reading

**The three headings.** Each began with its canto, and the kit sets the
place of the passage beside the heading (under it on a phone), so the canto
was said twice, and at 390 the first heading took two lines. Each is now
the title alone, as in the other pieces:

| plate | was | is |
| --- | --- | --- |
| share | Canto XV: the good that grows by being shared | The good that grows by being shared |
| love | Canto XVII: the rule of the mountain | The rule of the mountain |
| garden | Canto XXVIII: a lady across a stream | A lady across a stream |

(The third had been "Canto XXVIII: the lady across the stream" when I came
to it. I had already made it "a lady across a stream": that is what the
passage says, where she is seen for the first time and has no name yet.)
The headings are also the names of the plates in the page's folded list of
what each caption stands on, where each still reads rightly.

**One tab.** Plate "share", fourth tab: "Translation" is now "English"
(09:12 UTC). At 360, a common width of phone, the four tabs of that plate
took two rows, with the fourth alone on the second; the tabs of the other
two plates fit one row there. "English" is also the site's own word for
this kind of tab: counted by script over every reading in `remake/works/`,
25 compare tabs are labelled "English", and this was the only
"Translation". With it the row fits at 360 (`share-0-simile-360.png`). The
word stood nowhere else in the reading. The pictures of that tab are now
named `share-3-english-*.png`.

**Nothing else.** I weighed "Plan" for the drawing's tab, since it is not a
picture of a mountain, and kept the poet's "Mountain", because the plate's
heading speaks of the rule of the mountain and the tab shows the mountain
that the rule orders. No `beside`: the kit already sets the prose as a
block of its own. No `turn`: see the end of 2a. No `join`: the strokes of
the three figure tabs join what their captions say belongs together.

`node build/tools/check-reading.mjs dante-purgatorio` after each edit: no
problems (one warning, on a word of the first caption of plate "share",
which is not mine to change).

## 5. In the reading: nothing I think false, five things for other hands

1. **The `plate` notes of two levels give the lines of the scene, not of
   the lines shown.** `levels` (terrace 2): the first passage is said to be
   spoken on the stair, "XV, 40-81"; the first plate shows lines 67 to 75.
   `levels` (the garden): "XXVIII, 37-51"; the third plate shows 37 to 42
   and 49 to 51. The drawing prints these in the pointer's note for the
   ring, and a reader may take the figures for the lines of the passage.
   Saying "in the scene of", or giving the lines shown, would settle it.
   (My script reads the canto from the end of each of these notes to place
   its dot and rings; it allows a closing bracket or stop after the
   figures.)

2. **Two starts for Virgil's speech.** `levels` (terrace 4) says Virgil
   speaks at "XVII, 85-139"; `thisCanto.speechOnLove` says lines 91 to 139.
   Both are true (he begins to answer at 85 and the speech on love begins
   at 91), but printed near each other they read like a disagreement. The
   first shows only in the pointer's note for the red dot; the key and the
   bar use the second.

3. **The caption names Inferno XI and the drawing does not show it** (see
   section 1, what I left out). If the lead wants every number of a caption
   findable in its drawing, the sentence on Hell belongs in the note on
   what the caption stands on, where its link already is, or the lens
   needs a count of the Inferno's cantos to place it.

4. **Titles of books are in roman in the page's own paragraphs.** The
   paragraph under "What Auden said" (`view.says`) and those under "More
   from Auden" (`auden[].says`) name books and plays with no asterisks
   round the titles, so the page prints them upright
   (`page-1280-0.png`, `page-1280-3.png`), while the source lines under
   them, which are marked, print them rightly. The words are the
   examiner's and the critic's to mark.

5. **Words named as words in the small notes are not marked.** Since the
   sixth mending a word between asterisks stands upright in an italic
   note. Counted by script, none of the 24 notes and remarks of this
   piece carries a mark (plate "share", "Word" and "English"; "love",
   "Word"; "garden", "Sources" and "Beat"), and most of them name an
   Italian, Latin or English word as a word, which is lost in the italic
   (`share-3-english-1280.png`, `love-2-word-1280.png`). The critic's to
   mark.

Smaller: the facts' pointer `errors[].words.row` can never reach the page,
because `row` is a working key (section 3). Any other piece that points at
words from a shape lens's facts will meet the same wall.

## 6. Commands, and the picture tool's last line

    node build/pieces.mjs dante-purgatorio
    node build/tools/check-reading.mjs dante-purgatorio
    node build/tools/shoot.mjs dante-purgatorio --out remake/works/dante-purgatorio/shots --page
    node build/tools/shoot.mjs dante-purgatorio --widths 360,320 --out remake/works/dante-purgatorio/shots

Last run: 2026-10-03, 10:18:29 to 10:21:23 UTC (the build and the checker
at 10:18:29, the pictures at 1280 and 390 to 10:19:17, those at 360 and
320 to 10:20:20, the eight extras to 10:21:23). The kit's newest file was
of 10:14:38 before the run and after it. The checker: "no problems". The
picture tool, both times: "nothing reported; now look at the pictures".
All 70 pictures of that run are the same, bit for bit, as those of the
three runs before it (09:50 to 09:53, 09:55 to 09:59, 10:14 to 10:18), so
this piece's page has stood still since the sixth mending. The tool also
reported nothing for the "Mountain" tab alone at 26 widths from 320 to
1920 (10:09 to 10:12).

In `shots/`: 70 pictures. 38 are every tab of every plate at 1280 and 390
and the whole page in slices; 24 are every tab at 360 and 320, which the
lead asked for after the fifth mending; 8 begin `extra-` and show the
"Mountain" tab with the pointer on a row and on a band's heading, with
its table open, and as it would stand if the drawing threw, each at 1280
and 390. I looked at every one.
