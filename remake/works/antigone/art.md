# Antigone: the artist's notes

Piece `antigone`. 3 October 2026; times are UTC. No words of the play are
typed here: places are given by passage, tab, row and word number (the
numbers `node build/tools/check-reading.mjs antigone` prints; words are
counted from 0).

In short: both shape tabs are drawn (section 2); one key was added to
the facts by a script (section 3); the kit's faults that are still
there after the second and third mendings are in section 4, worst
first; three turns I would set and could not are in section 5; what I
would ask the poet is in section 6; the picture tool's last line, at
07:18, was `nothing reported; now look at the pictures` (section 7).

## 1. The first look at every screen (06:00, before any drawing of mine)

    node build/pieces.mjs antigone
    node build/tools/shoot.mjs antigone --out remake/works/antigone/shots --page

Last line: `nothing reported; now look at the pictures`. I opened all
twenty tab pictures and the page slices. Those pictures show the page
before the kit's second mending and are kept in `shots/before/` only as
a record. A struck heading is a fault that is gone; what is still there
is listed again in section 4 with a new picture. I changed no heading
and no tab name: all of them read well and none wraps (the three
headings each fit one line at 390).

### ~~1.1 The two shape tabs were plain tables~~ (mine; drawn, section 2)

First passage (elders), tab Song, 390: the plate was 2,829 px tall, the
table's last two columns were cut off at the right edge, and a column
printed the reader's addresses raw; at 1280 it was 1,061 px tall.
Third passage (quarrel), tab Play: twelve rows of figures with nothing
to show where line 883 falls among 1,279.

### ~~1.2 A gloss falls into the next speaker's name~~ (kit; gone)

Third passage (quarrel), tab City, 390: the second gloss of row 38.0
(under word 4) dropped a level and stood on the line of the next
speaker's name. Now the two glosses stand side by side
(`antigone-quarrel-1-city-390.png`). The closeness of a gloss to the
name under it is still there: section 4.6.

### 1.3 On a phone every line of the song turns over (kit; stands)

First passage (elders), tabs Greek, Beat and Rhyme, 390. All six lines
turn, so the stanza stands as twelve lines of type and the plate is
1,491 px tall in Greek, 1,447 in Beat and 1,254 in Rhyme. The lead has
ruled that a long plate on a phone belongs to the thing itself, so this
is not listed again. Two things in how the lines turn:

- ~~Tab Beat, 390: only one of the four pauses was drawn, the other
  three being dropped where the line turns.~~ Gone: all four are drawn,
  three of them at the end of the first part
  (`antigone-elders-1-beat-390.png`).
- Where three of the lines turn is still wrong: section 5.

### ~~1.4 The figure of a note is wedged between two words~~ (kit; gone)

First passage, tab Beat, 390: the red figures 2 and 3 had about 1 px on
each side. They have room now (`antigone-elders-1-beat-390.png`).

### ~~1.5 The room kept for that figure shows as a hole in the other tabs~~ (kit; gone)

First passage, tabs Greek and Rhyme, both widths: a double space after
word 5 of row 73.0, word 8 of row 73.1 and word 7 of row 73.3. Gone
(`antigone-elders-0-greek-1280.png`, `antigone-elders-2-rhyme-1280.png`).

### 1.6 Bare paper under a short passage (kit; still there, section 4.5)

### 1.7 Small things (kit)

- ~~Second passage (answer), tab Sides, both widths: a long shallow
  slant joined row 36.2 word 0 to row 36.3 words 6 to 8.~~ Gone: the tab
  now has underlines in two colors and no stroke
  (`antigone-answer-0-sides-1280.png`), which is what its caption says
  the marks do (they sort the terms into two sides). I set no `join`:
  the caption names two sides, not pairs.
- Second passage, tab Knowing: at 1280 a stroke joined row 36.7 word 5
  to row 36.10 word 5 and at 390 there was none. Now there is one at
  390 too, and it runs through a word: section 4.1.
- ~~The sources, 1280: one entry broke a range of pages after its
  dash.~~ Gone (`antigone-page-1280-4.png`).

## 2. What I drew, and why that form

Both drawings are in `site/js/pieces/antigone.js`. Every name, word and
number on them is read from the lens's `facts` when the page runs;
nothing of the play is typed into the script. No stylesheet was needed.

### 2.1 Third passage (quarrel), tab Play: a score of the play

What the reader is to see at a glance: who speaks, how much, and that
Antigone is gone from line 883 of 1,279.

The play runs left to right, to scale, from line 1 to line 1,279. Each
speaker has a row, in the order the facts give (most lines first), and
every turn to speak is a mark as long as its lines, at its place in the
play. The count of each speaker's lines stands at the end of the row
under LINES. Antigone's row, name and count are red; a red rule stands
at her last line; the lines after it lie on a pale ground. Under the
rows is the play's own line with three figures (line 1, 883 in red,
1,279) and the red label "396 lines after Antigone's last line". So all
five numbers the caption names are on the drawing: 339, 1,279, 205, 883
and 396.

Why this and not ten bars of counts: bars show the shares (339 against
205) but not what the caption turns on, that she leaves with nearly a
third of the play to come and that what follows is Creon's. In the
tinted part the rows of the prophet, the two messengers and the wife
lie whole, Creon's and the elders' go on to the end, and Antigone's,
Ismene's, the Guard's and Haemon's are empty. The counts stay as
figures at the row ends, so both things are read.

| on the drawing | from the facts |
| --- | --- |
| the rows, their names, their order | `speaker`, in the order of the rows |
| the figure at the end of a row | `lines` |
| the marks | `turns in order` (the new key: section 3) |
| which row is red | the speaker whose `last line` is one before the `first line` of the row that runs from there to the end; found by that, not by name |
| the red rule and its figure | that speaker's `last line` |
| the pale ground and the red label | the row for what follows: `first line`, `last line`, `lines` |
| the play's last figure | the row that holds every line: `lines` |
| the pointer's line | also `first line`, `last line`, `Greek lines`, and the number of turns |
| "The figures", folded | every row as the facts give it (the kit leaves the long list out) |

- Scale: a line of verse is 0.38 px at 1280 and 0.16 px at 390. A mark
  is as wide as its lines, never widened to a whole pixel, so an
  exchange of single lines shows as a grey of the right weight, not as
  a solid block. Widening would overstate a one-line turn six times on
  a phone.
- Drawing in: the marks come in the order of the play over a second and
  a half, then the rule, its figure and the label; all is there by 2.9 s.
  With reduced motion it is simply there.
- The pointer (not needed): a row lights with its name and count, and
  the line under the key gives its lines, turns, first and last line
  and its lines in the Greek. Under the play's line, right of the rule,
  it gives the 396.
- If the facts change, the drawing follows. If the list of turns is
  missing, or does not agree with `lines`, `first line` and `last line`
  of every speaker and with the whole, each row is drawn instead as one
  line from the speaker's first line to the last, and the key says so.
  If the row for the whole play is missing the kit's table stands in.
  Tried in the browser with the data altered on its way there (no file
  changed): the list taken out; one count raised by one; the rows in
  another order; the row for the whole taken out; the row for what
  follows taken out.
- Widths: looked at from a window of 300 to one of 1920 (drawing 244 to
  757 px). No label meets another. In a window of 320 or less the red
  figure would run into the play's last figure, so there it stands
  beside its rule and not under it. Changing the window while the tab
  is open lays the drawing out again, and "The figures" stays open.

Set aside: one strip with a color to each speaker (ten kinds, where a
reader holds about four); the rows in order of first entrance (a
staircase, but then the counts at the right are out of order, and the
order is the poet's).

### 2.2 First passage (elders), tab Song: the song in the order it is sung

What the reader is to see: four stanzas between what comes before and
what comes after; this passage is the fourth; the third and the fourth
each hold a pair of opposites.

The six parts stand one under the other, with a hairline where the song
begins and where it ends. Each part has, at the left, a stroke for each
of its lines as printed here (6, 5, 5, 6, and 8 after); its name, which
opens the play at that place; at the right its lines in the Greek,
under GREEK LINES; and under the name what it tells. Under the third
and fourth stanzas the key "opposites side by side in the Greek" is a
small heading, and its two Greek words are set side by side, each ruled
under and the two rules joined, as the kit joins the parts of a figure,
with the English of each beneath. The stanza of this passage is red
(strokes, name, figures): it is the part whose `read` is the place
where the passage begins.

Why a ladder: the thing is an order, and each step of it needs a few
words that only the facts' `tells` can give (what comes before is a
guard's report; what comes after is the elders seeing Antigone led in).
With the table the plate was 2,829 px tall on a phone and 1,061 at
1280; with the drawing it is 1,225 and 831 (the drawing itself is 706
and 580).

| on the drawing | from the facts |
| --- | --- |
| the parts, their names, their order | `part`, in the order of the rows |
| the strokes | `lines` |
| the figures at the right | `Greek lines` |
| the words under a name | `tells` |
| where a name leads | `read` |
| which part is red | `read` equal to the place of the passage's first row |
| the heading and the joined pair | any other key, by its own name; a value of the form "a, b: c, d" is drawn as the pair, anything else is set as words |

- The hairlines stand where a name with the word stanza in it follows
  one without, or the other way: the one thing the script takes from
  the wording of the names. If no name has the word, every part but
  the first and the last is taken as the song.
- Narrow screens: in a window of 320 the heading over a pair turns over
  to two lines, and the Greek lines of the fourth stanza stand under
  its name, which is long. Looked at from 300 to 1920.
- If the facts change: a part without `Greek lines`, `read`, `lines` or
  `tells` is drawn without it; a new key is printed under its own name;
  a row without `part` gives the kit's table. Tried as above.
- No pointer is needed and none is used.

Set aside: two columns, strophe beside antistrophe (the caption speaks
of an order, three that count and one that turns, not of the pairing
of the stanzas in the music); six columns side by side (55 px each on
a phone).

## 3. What I added to the facts

One key, in the third passage's Play lens, in the row whose `speaker`
is "all speakers": `turns in order`. It is a list of 274 items, each a
speaker's name and the number of lines of one turn to speak, in the
order of the play. The facts already held each speaker's count, first
line and last line; the drawing needed where the lines between them
fall. No key that was there is touched.

It is counted by `remake/works/antigone/count-turns.mjs` over the text
printed here (`site/data/texts/antigone/`, parts 1 to 5), by the poet's
own method (his first ground for this lens): a line is a row of a verse
block; each verse block is given to the speaker named before it; the
lines are numbered from 1 through the five parts. A turn is a run of
lines with one speaker and no other between. The script prints names
and numbers only.

    node remake/works/antigone/count-turns.mjs

ends:

    274 turns, 1279 lines
    Antigone: 205 lines in 45 turns, first 1, last 883
    Ismene: 58 lines in 27 turns, first 10, last 537
    Chorus: 319 lines in 46 turns, first 99, last 1279
    Creon: 339 lines in 94 turns, first 155, last 1271
    Guard: 110 lines in 16 turns, first 216, last 407
    Haemon: 64 lines in 18 turns, first 593, last 720
    Teiresias: 78 lines in 14 turns, first 924, last 1029
    Messenger: 84 lines in 8 turns, first 1094, last 1196
    Eurydice: 8 lines in 1 turns, first 1123, last 1130
    Second Messenger: 14 lines in 5 turns, first 1216, last 1248

So this second count gives, for every speaker and for the whole, the
same lines, first line and last line as the poet's facts.

    node remake/works/antigone/count-turns.mjs --write

put the key in at 06:24 (as one long string) and again at 06:40:12 (as
a list, once the kit had been mended to leave a long list out of a
table by itself). The second time it printed:

    replaced "turns in order" (274 turns, 1279 lines) in the row "all speakers" of the Play lens; nothing else changed

The script reads the file afresh, changes that one line, and writes
only if the reading with the key left out is the same as before and
the file has not changed while it ran. Then, at 06:40:

    node remake/works/antigone/count-turns.mjs --check      ... all agree
    node build/tools/check-reading.mjs antigone             ... no problems / no warnings / the printed notes are fit to print

If the examiner changes a count, `--check` says which speaker differs,
and until the list is counted again the drawing falls back to one line
for each speaker (section 2.1). The last build, at 07:18, drew the
turns, which the script does only where the list agrees with every
count; `reading.json` was then as I left it at 06:40:12.

The script's `--song` lists the song's blocks in the text printed
here: 6, 5, 5 and 6 lines for the four stanzas and 8 after, which are
the `lines` of the Song facts. I added nothing to those facts.

## 4. Still there after the second mending

Built and photographed again four times after the kit's second
mending, the last time at 07:18, after the third mending and after a
further change to the kit at 07:15. Every fault here is in the
pictures of 07:18, which are the ones in `shots/`. All of them are the
kit's. Worst first.

### 4.1 A stroke runs through a word of the passage

Second passage (answer), tab Knowing, 390
(`antigone-answer-1-knowing-390.png`). Row 36.7 turns after word 5. The
stroke that joins its word 5 to word 5 of row 36.10 runs down across
the turned part and strikes through the first letters of word 8, the
last word of row 36.7. At 1280, where the row does not turn, the same
stroke crosses nothing. A stroke is meant to be drawn only between
parts on two lines of type that follow each other; here a line of type
lies between its two ends.

### 4.2 The dotted line of a sound runs through the words of a turned line

First passage (elders), tab Rhyme, 390
(`antigone-elders-2-rhyme-390.png`). Every line has turned, so between
the two ends of each dotted line lies the second part of the upper
row, and the dots go through it:

- from row 73.0 word 3 to row 73.1 word 6: through word 10 of row 73.0,
  the rhyme word, across its colored letters;
- from row 73.2 word 7 to row 73.3 word 4: between words 12 and 13 of
  row 73.2, touching word 13;
- from row 73.4 word 4 to row 73.5 word 6: through word 10 of row 73.4.

At 1280 the three cross nothing.

### 4.3 A stroke ends against a speaker's name

Third passage (quarrel), tab Exchange, 390
(`antigone-quarrel-0-exchange-390.png`). The red stroke from row 34.0
word 7 to row 36.0 word 1 ends with its dot against the last letter of
the speaker's name over row 36.0. The blue stroke from row 36.0 word 5
to row 38.0 word 1 ends the same way against the name over row 38.0.
Both lower words are the second word of their line, so the stroke
comes in low from the right, through the band where the name stands.
At 1280 both end clear of the names.

### 4.4 Two strokes of one color cross

Third passage, tab Exchange, both widths
(`antigone-quarrel-0-exchange-1280.png` and `-390.png`). Row 34.0 has
the word twice (words 1 and 7). The arc that joins the two under the
line and the stroke from word 7 down to row 36.0 word 1 cross each
other in the band between the rows. Word 1 of row 34.0 stands almost
over word 1 of row 36.0: a stroke from the nearer of the two would be
short and would cross nothing. I set no `join`: all three joins are
true, and the caption does not say which of the two is taken up.

### 4.5 Bare paper under a short passage

First passage, 1280: in tab Greek the passage is 391 px tall and the
caption with its seven remarks 613, so 222 px of paper stand bare
under the passage (`antigone-elders-0-greek-1280.png`); in tab Beat
391 against 620, so 229 px (`antigone-elders-1-beat-1280.png`). The kit
moves the remarks under a short passage where it is under 0.62 of the
margin's height; these are 0.64 and 0.63.

### 4.6 Small things

- First passage, tab Rhyme, both widths
  (`antigone-elders-2-rhyme-1280.png`): each dotted line ends in a dot
  over its lower word, and that word has a second dot under it which
  joins nothing. Three dots for two places; the third reads as a stray.
- Second passage, tab Greek, and third passage, tab City, both widths
  (`antigone-answer-2-greek-390.png`, `antigone-quarrel-1-city-390.png`):
  a gloss and the speaker's name under it have about 12 px of paper
  between them, three sizes of type in one short step. Nothing touches.
- Third passage, tab Play, 390 (`antigone-quarrel-2-play-390.png`): the
  room the kit keeps for the line that speaks is two lines high on a
  phone, so about 65 px of paper stand bare between the key and "The
  figures" until something is tapped. I use `d.hot` as the kit gives
  it; the room is the kit's.
- Second passage, tab Knowing, 1280
  (`antigone-answer-1-knowing-1280.png`): the stroke from row 36.7 to
  row 36.10 is a slant 250 px long through the band between the lines.
  It crosses nothing. The two words it joins carry different labels
  (the laws' origin, her death) but one tag, so I left it: the tag is
  the poet's saying that they belong together.

## 5. Three turns I would set, and could not

First passage (elders), 390. ARTIST.md now lets the artist say where a
line turns, where the page's own choice strands a word. Three rows do
(`antigone-elders-1-beat-390.png`, and the same in Greek and Rhyme for
the last two):

- row 73.4, all three tabs: it turns after word 5, a preposition, and
  parts it from its phrase (words 6 to 9). It should turn after word 4,
  which is also where the third beat falls.
- row 73.5, all three tabs: it turns after word 7, the conjunction that
  follows the stop. The stop is after word 6, and it should turn there;
  in Beat the pause would then stand at the end of the first part, as
  it does in rows 73.1 to 73.3.
- row 73.0, tab Beat only: it turns after word 4, a preposition, parted
  from its noun (word 5). In Greek and Rhyme it turns after word 5.
  With a turn set it would do so in all three.

The line to add to the plate `elders` in `reading.json`, after its
`rows`:

    "turn": { "73.0": 5, "73.4": 4, "73.5": 6 },

I prepared it as one exact edit, with a test that nothing else in the
file would change. A little before 07:00 the permission system of my
session refused it as a change to a file that others share, and I did not try
another way. So it is not set: it is for the lead, the examiner or the
poet to add, and then to run the checker, which prints the word each
row turns after. The same refusal met a later run of
`count-turns.mjs --check`, so the last check on record is the one of
06:40 (section 3).

## 6. In the reading: what I would ask the poet

I changed no caption, mark or source, and no fact that was there.
Three things:

1. Song, the caption's "at the same point". The facts give the two
   pairs of opposites, and the drawing sets them in one form under the
   third stanza and under the fourth. Where each pair stands in its
   stanza is not in the facts a drawing sees (the place is in a working
   note, which the build takes out), and the Greek is not printed here,
   so I could not count it. The drawing therefore shows that each of
   the two stanzas has such a pair; it does not show that the pairs
   stand at the same place in the tune. If the facts held the place
   under a key of its own, the drawing would print it under that name
   with no change to the script.
2. Song, the names of the parts. They carry the edition's labels
   (Str. 1, Ant. 1, Str. 2, Ant. 2), which the caption never explains.
   They are in the text printed here, so I left them.
3. Song, the name of the fourth part ends in ", shown here". On the
   drawing the red and the key say the same, and the name is so long
   that in a window of 320 its Greek lines stand under it, not beside.

The Play facts I can vouch for: my own count gives every figure the
caption names (section 3).

## 7. The pictures, and what the picture tool said

`shots/`: the twenty tab pictures and the twelve page slices of 07:18,
after the kit's third mending and with both drawings as they now are.
`shots/before/`: the thirty-two pictures of the first look at 06:00.
They show the old page and are kept only as the record for section 1.

    node build/pieces.mjs antigone
    node build/tools/shoot.mjs antigone --out remake/works/antigone/shots --page

Last line, at 07:18: `nothing reported; now look at the pictures`. I
opened all twenty tab pictures of this round, at 1280 and at 390, and
the twelve page slices. The tool reported nothing in any of its five
rounds (06:00, 06:47, 07:00, 07:13, 07:18); every fault in section 4 is one
it does not look for: a stroke over a word, a stroke against a name,
two strokes crossing, bare paper.
