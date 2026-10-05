# Carmen: the artist's notes

Artist started 2026-10-03, 11:36 UTC. Nothing here is printed on the
page. Words of the libretto are pointed at by row and word number (the
numbers `node build/tools/words.mjs` prints) and are never written out.

Read first, in this order: BRIEF.md, ARTIST.md, the kit's README,
KIT-CHANGES.md (all seven sections, with the paragraph of 11:06 UTC),
adams.js, then reading.json, notes.md and exam.md of this piece.

## What this piece is, for the artist

- Three plates, four tabs each, each with a second passage (the
  English libretto of about 1910):
  - `habanera` (The Habanera): Count, Word, Figure, English. Twelve
    French rows and twelve English, so the two are set line under line.
  - `la-bas` (Over there): Mood, Word, Figure, English. Eleven French
    rows, thirteen English, so the two stand as two blocks.
  - `cartes` (Carmen reads the cards): Count, Rhyme, Sentence, English.
    Fourteen rows each, line under line.
- No shape lens, so nothing is drawn: there is no
  `site/js/pieces/carmen.js` and no stylesheet, and none is wanted.
- In this round reading.json, notes.md and exam.md are not mine to
  edit, and I did not touch them. What I would set is under "Proposed
  for the reading", each with the picture that shows why.
- I wrote only this file and the pictures under `shots/`. Each trial
  was made on the built copy `site/data/pieces/carmen.json` and the
  copy was built again from the reading straight after.

## In short

- Nothing drawn: the piece has no shape lens.
- I would set three things in the reading, and a fourth only if the
  kit is left as it is: a `turn` on `cartes` (two lines), a `turn` on
  `la-bas` (one line), the third tab of `cartes` named "Build", and,
  failing a mend of the kit, the heading of `cartes`.
- Seven faults of the kit, worst first; the worst two are a stroke the
  reading asks for that is not drawn (first plate, Figure) and a
  thread of sound that reads as three specks (third plate, Rhyme).
- Nothing in the reading that I think is wrong.
- Final pictures: 3 October 2026, 12:34:57 to 12:37:50 UTC, after a
  build at 12:34:50. The tool: "nothing reported; now look at the
  pictures".

## Log (UTC, 3 October)

- 11:36: files read.
- 11:38: `node build/pieces.mjs carmen` (no problems);
  `node build/tools/check-reading.mjs carmen`: no problems, no
  warnings, the printed notes are fit to print.
- 11:40 to 11:48: first pictures, one plate at a time, 1280 and 390:
  "nothing reported" for each plate. Every picture was opened; the tall
  ones were cut into slices with `convert` (already on the machine)
  and read at full size.
- 11:53: trial of `"beside": true`, each plate in turn
  (`shots/trial-beside/`).
- 12:00 to 12:09: the small phones. `cartes` and `habanera` at 360 and
  320, `la-bas` at 375, 360 and 320; the whole page at 1280 and 390
  (kept as slices, `shots/carmen-page-1280-0..6.png` and
  `shots/carmen-page-390-0..8.png`).
- 12:05 to 12:10: trial of `turn` on `cartes` and `la-bas` and of a
  shorter tab name on `cartes` (`shots/trial-turn/`).
- 12:13: trial of the first plate set as two blocks, the way the
  second plate is (`shots/trial-blocks/`); not one of my settings, see
  "For the lead".
- 12:17: the reading and the kit had not changed since I began
  (reading.json 10:46, plate.js and atlas.css 11:05, KIT-CHANGES.md
  11:07).
- 12:23: trial of the plate heads (`shots/trial-head/`); built again
  from the reading at 12:23:39 and the built copy checked: no `turn`,
  no `beside`, the reading's headings and tab names.
- 12:34:50: built again and checked; 12:34:57 to 12:37:50: the final
  pictures, one plate at a time (see "The final pictures").

The sections below are in the order the lead needs them: what I would
set, the kit's faults (worst first), what I tried and would not set,
what is the lead's outside my settings, what is fine, and the final
pictures with their time.

## Proposed for the reading

Exactly what I would set, the most needed first. None of it changes
what the reading says. Each was tried with these same values on the
built copy; "now" pictures are in `shots/`, "tried" pictures in the
folder named.

### 1. `cartes`: where two lines turn on a small phone

On the plate `cartes`:

```json
"turn": { "0.4": 4, "1.4": 3 }
```

- **Row 0.4, after word 4.** At 360 and 320, on every tab, the page
  turns this line after word 5. Word 5 is the "if" that the third tab
  rules and the caption names; it is left at the end of the first
  part, and the clause it opens begins on the next. On the Count tab
  it is worse: the pause mark stands inside the first part, with one
  more syllable of the count trailing after it. The cut of the line is
  after word 4 (notes.md gives the sixth syllable there), and every
  other long line of the plate turns at its cut.
  Now: `carmen-cartes-0-count-360.png`, `carmen-cartes-1-rhyme-320.png`,
  `carmen-cartes-2-sentence-320.png`.
  Tried: `trial-turn/carmen-cartes-0-count-360.png`,
  `trial-turn/carmen-cartes-1-rhyme-320.png`,
  `trial-turn/carmen-cartes-2-build-360.png`.
  Side by side (now at the left):
  `compare/cartes-count-360-row-0.4-now-and-tried.png` (the pause
  mark), `compare/cartes-rhyme-320-now-and-tried.png`, its first line.
- **Row 1.4, after word 3.** On the Count tab at 360 and 320 this line
  of eight turns after word 1, at its comma. Word 1 ends on a mute e
  and word 2 begins on a vowel: the count runs them together, and the
  arc that shows it cannot be drawn across the turn, so it is dropped.
  The first part then shows three syllables where the eye counts
  four, with nothing to say why. After word 3 the arc is kept, the
  first part is a whole phrase, and the second part is the word that
  comes back. (On the Rhyme tab at 360 the line stays whole, as now;
  at 320 the dotted stroke between its two places is shorter and
  clearer.)
  Now: `carmen-cartes-0-count-360.png`, `carmen-cartes-0-count-320.png`.
  Tried: `trial-turn/carmen-cartes-0-count-360.png`,
  `trial-turn/carmen-cartes-1-rhyme-320.png`.
  Side by side (now at the left):
  `compare/cartes-count-320-now-and-tried.png`, its last line.
- Two more, as guards only: `"0.0": 3` and `"0.6": 4`. Neither line
  has a stop at its cut, so the kit leaves both to the browser, which
  balances the two parts. In the picture tool's browser both turn at
  the cut (0.0 at 320, 0.6 at 360 and 320); a `turn` would hold them
  there in a browser that balances otherwise. The whole setting would
  be `"turn": { "0.0": 3, "0.4": 4, "0.6": 4, "1.4": 3 }`, and that is
  what the trial pictures were made with. The lines whose cut has a
  stop (0.2, 1.0, 1.2, 1.5) turn there by the kit's own rule.

### 2. `la-bas`: one line on a small phone

On the plate `la-bas`:

```json
"turn": { "1.3": 3 }
```

- At 360 and 320, on every tab, row 1.3 turns after word 4. Word 4 is
  the conjunction joined to its pronoun, and the verb they lead to
  begins the second part. The line has twelve syllables and its cut is
  after word 3 (notes.md), which is also where the clause begins.
  There is no stop in the line, so the kit leaves it to the browser.
  At 375 and 390 the line is whole.
  Now: `carmen-la-bas-0-mood-360.png`, `carmen-la-bas-1-word-320.png`.
  Tried: `trial-turn/carmen-la-bas-0-mood-360.png`,
  `trial-turn/carmen-la-bas-0-mood-320.png`.
  Side by side (now at the left):
  `compare/la-bas-mood-360-now-and-tried.png`, the fifth line.

### 3. `cartes`: the name of the third tab

In the plate `cartes`, the third lens (kind `sentence`):

```json
"label": "Build"
```

in place of `"label": "Sentence"`.

- At 320 the four names Count, Rhyme, Sentence, English do not keep to
  one row: English falls to a second row by itself, by about 6 px,
  even with the closer tabs of the seventh mending. With "Build" the
  four keep to one row and the plate is 30 px shorter. The word is the
  caption's own (the two stanzas are "built alike") and the brief's
  ("the build of a sentence"). The other two plates fit at 320.
  Now: `carmen-cartes-0-count-320.png`, `carmen-cartes-1-rhyme-320.png`.
  Tried: `trial-turn/carmen-cartes-0-count-320.png`,
  `trial-turn/carmen-cartes-2-build-320.png`.

### 4. `cartes`: the heading, only if the place beside it stays as it is

```json
"heading": "The cards"
```

in place of `"heading": "Carmen reads the cards"`.

- The head of this plate says the same four words twice, once as the
  heading and once at the end of the place printed beside it, on every
  tab at every width; the first plate does the same with its two
  words. The better mend is not in the reading: let the place stop at
  the scene (see "Faults of the kit", 5). If that is done, leave all
  three headings as they are. If it is not, I would set this one; the
  first plate's heading should stay, since it is the song's name and
  the record on the page is called by it.
  `trial-head/heads-1280.png`, three heads one over another: the
  plate now; with this heading; and the first plate with its place
  stopping at the scene. The same three from left to right at 390:
  `trial-head/heads-390.png`.

### What I would not set

- No `beside` on any plate, and no change to either `join`. See "Tried
  and not proposed".

## Faults of the kit, worst first

None of these is mine to mend (no script, no stylesheet, and the kit
is not to be touched). The fault already known on `la-bas` (no sign on
the French side between the three places) is not listed again, nor is
anything KIT-CHANGES.md leaves as it is on purpose. Pictures are in
`shots/` unless a folder is named.

1. **A stroke the reading asks for is not drawn, and nothing says so.**
   `habanera`, Figure, 1280 and 390 (and 360, 320). The lens sets
   `"join": [[2, 4]]`, the one link that makes the figure a chain: the
   words that end row 1.2 come back in row 1.3. No stroke is drawn,
   because the English line stands between the two French lines; with
   a version set line under line no stroke can go from one line to
   the next at all. Color still tells the two places. The checker is
   silent about it (the examiner saw it and left it).
   Now: `carmen-habanera-2-figure-1280.png` (its foot:
   `compare/habanera-figure-1280-foot-now.png`),
   `carmen-habanera-2-figure-390.png`.
   Drawn, when the English stands as a block:
   `trial-blocks/carmen-habanera-2-figure-1280.png`.
   A mend: let the stroke pass behind the version's line, broken where
   its type stands, as the seventh mending does for a speaker's name.
   Failing that, let the checker warn of a `join` that cannot be drawn.

2. **The thread of a sound reads as three specks.** `cartes`, Rhyme,
   every width. The sound has five places. The two in row 1.4 are
   joined by a dotted arc; the places in rows 1.1, 1.3 and 1.5 each
   get one dot of about 3 px under a vowel, which reads as a flaw in
   the paper or an accent. The same cause as 1 keeps the strokes from
   line to line from being drawn. Two things in the key make it
   worse: it says the sound comes back "from line to line", where no
   stroke goes from line to line; and it prints the sound's two
   letters like the rest of the sentence, so they read as an English
   word.
   Now: `carmen-cartes-1-rhyme-1280.png` (its foot:
   `compare/cartes-rhyme-1280-thread-now.png`),
   `carmen-cartes-1-rhyme-390.png`.
   As it is meant to look: `trial-beside/carmen-cartes-1-rhyme-1280.png`.
   A mend, in `lens-rhyme.js`: give three points to every place no
   stroke reaches (decide by line, not by the whole thread); let the
   key say only what is drawn; set the sound's letters upright.

3. **A line that turns between two words the count runs together
   loses the arc.** `cartes`, Count, 360 and 320, row 1.4 (see
   proposal 1). The same line turns on the Count tab only at 360,
   for the room its remark's number takes, so where it turns is not
   the same on every tab.
   Now and tried: `compare/cartes-count-320-now-and-tried.png`.
   A mend: hold two words that an elision joins as a marked run is
   held, on every tab of a plate that has a Beat tab.

4. **French words that lead to the next are left at the end of a
   part.** `cartes`, every tab, 360 and 320, row 0.4; `la-bas`, every
   tab, 360 and 320, row 1.3 (proposals 1 and 2). The kit's list for
   French (`LEADS.fr` in `plate.js`) has no word for "if", though the
   English list has "if" and the Italian "se"; it has no possessives; and a
   conjunction written as one token with its pronoun is not known to
   it. On the Count tab the pause mark of row 0.4 then stands inside
   the first part.
   Now and tried: `compare/cartes-rhyme-320-now-and-tried.png`,
   `compare/la-bas-mood-360-now-and-tried.png`;
   now: `carmen-cartes-0-count-360.png`.

5. **The place beside a heading says the heading again.** `habanera`
   and `cartes`, every tab, every width. The place is the hosted
   part's label, and both labels end on the words of the heading.
   Now and tried: `trial-head/heads-1280.png` (top: now; foot: the
   place stopping at the scene), `trial-head/heads-390.png` (left:
   now; right: the place stopping at the scene, a line shorter).
   A mend, in `piece.js` (`placeOf`): leave out a last clause of the
   place that only says the heading again. The labels themselves are
   used by the reader's page too, so I would not cut them there.

6. **Four tab names do not keep to one row at 320.** `cartes`, every
   tab, 320: the fourth name falls to a row of its own, by about
   6 px, after the seventh mending. Proposal 3 mends it in the
   reading. Now: `carmen-cartes-1-rhyme-320.png`.

7. **A list beside the caption runs on below the passage.** `la-bas`,
   Word, 1280: the right column (the English, the caption, then the
   nine notes) ends about 290 px below the last French line, so bare
   paper stands under the French. Now:
   `carmen-la-bas-1-word-1280.png`. A mend: where the notes would run
   more than a few lines below the passage, set the caption and the
   notes under both columns, side by side, as the caption and the
   remarks stand on the English tab of the same plate.

Small things, not worth a mending by themselves:

- `la-bas`, English, 1280: rows that answer begin level, as meant; the
  rows between them then stand at uneven distances (a line's room is
  left between rows 1.1 and 1.2, more than at the stanza break), and
  the first French row stands a little higher than its English, which
  has the speaker's name over it. `carmen-la-bas-3-english-1280.png`.
- `cartes`, Rhyme, 1280: the letter at each line's end is set at the
  size of a gloss, in italic, about half the size of the verse beside
  it, and is only just read; the key's letters are larger. The same
  on any plate with a Rhyme tab. `carmen-cartes-1-rhyme-1280.png`.

## Tried and not proposed

**`"beside": true`**, on each plate in turn (`shots/trial-beside/`).
Heights are of the plate, in px of the picture (at 390 the picture is
two to one).

| plate | 1280 now | 1280 beside | 390 now, first tab | 390 beside |
|---|---|---|---|---|
| `habanera` | 2059 | 1389 to 1538 | 4424 | 4774 |
| `la-bas` | 1033 to 1465 | 1352 to 1502 | 3166 | 3866 |
| `cartes` | 2266 | 1381 to 1546 | 4816 | 5138 |

- What it gains on the first and third plates at 1280: the song is
  a quarter to a third shorter; the Figure stroke and the thread of the
  sound are drawn; near rhymes are arcs and not brackets; the gap in
  the English shows its three points, and the stage direction before
  the last two English lines of the third plate is shown.
- What it costs, and why I would not set it: the English is then of
  equal standing, as large as the French, and it is only a help to
  the reader; the caption leaves the side of the song and goes under
  both passages, with the key and the remarks broken over three
  columns; and on a phone the whole English passage stands between
  the French with its marks and the caption that explains them, so
  every plate is longer there and the marks are a screen or more
  from their caption. Line under line, as now, the phone reader has
  the sense under each line and the caption straight after.
- On `la-bas` it loses on both counts: the plate is taller at 1280 as
  well.

**A `join` for the first plate's Figure.** The reading's own join is
right and is the only one the figure has. Joining parts inside one
line instead, so that something is drawn, would draw a likeness the
figure does not claim. Left as it is; see fault 1.

**A `turn` for other lines.** None is needed. At 375 the one line of
`cartes` that turns (row 1.5; on the Count tab row 1.2 as well) turns
at its cut, and at 360 and 320 so does every turned line but the two
of proposal 1. No line of `habanera` turns at any width down to 320.
On `la-bas` no line but row 1.3 turns, down to 320.

## For the lead, outside my settings

1. **The first plate as two blocks, the English small**
   (`shots/trial-blocks/`). The second plate has this form already,
   only because its English has two rows more than its French. I
   gave the first plate's English one row more on the built copy (the
   one English line the reading leaves out, row 110.8) to see it:
   - 1280: 1173 px against 2059 on Count, Word and Figure. The song
     stands whole at the left with its marks, the English small at
     the right, the caption and the key under the English and beside
     the lines they explain. The Figure stroke is drawn
     (`trial-blocks/carmen-habanera-2-figure-1280.png`).
   - 1280, English tab: 1572 px; both sides have numbered rules, and
     the French has a line's room beside the added English row.
   - 390: shorter too (3936 against 4424 on Count), but the English
     goes after the caption on the three tabs that do not mark it, so
     the phone reader loses the sense under each line.
   So it is better on a desk and worse on a phone. I do not propose
   the added row; a kit setting that set a line-under-line version as
   a small block beside, on a wide plate only, would give the best of
   both, and would let the three plates of this piece look alike. The
   look is settled, so this is only a note.

2. **The hosted French of the second plate**
   (`site/data/texts/o-carmen/`, not mine). The part has five blocks
   for the three places it is taken from, because of two blank lines
   in the source, so the plate shows four equal spaces, after rows
   0.0, 1.3, 2.1 and 3.0. Those after 0.0 and 3.0 fall inside one
   place and one speech (in the cached source each speech sets its
   first line apart from the rest by a blank line; whether the 1901
   edition does, I cannot tell). So a space on this plate now means
   two different things, twice each: a break inside a speech, and a
   leap to another place in the act. Whoever mends the known fault
   (a sign between the three places) should know that the two other
   spaces are there. The English side names its speakers (two names);
   the French side names none. Any tab of `carmen-la-bas-*-1280.png`.

3. **The hosted French of the third plate.** The part has two blocks,
   of eight rows and six, so the plate shows two groups with one
   space, after row 0.7. The captions speak of a second and a third
   stanza and of the last two lines as a pair, so the reader has to
   count lines to find them; only the rhyme brackets of the Rhyme tab
   show the fours. If the edition parts the stanzas, a space after
   rows 0.3 and 1.3 as well would show what the captions count.
   `carmen-cartes-2-sentence-1280.png`, `carmen-cartes-1-rhyme-1280.png`.

4. **Words named as words in the italic notes** (the examiner's or the
   critic's to mark with asterisks, sixth and seventh mendings). They
   are not marked, and one of them reads as an English word:
   - `la-bas`, Word, the second note (for row 1.1, word 0): the French
     word is named inside the note in the same italic, and it is
     spelt like an English word. `carmen-la-bas-1-word-1280.png`.
   - `la-bas`, English, remarks 2, 5 and 6, which each begin on a
     French word. `carmen-la-bas-3-english-1280.png`.
   - `habanera`, Count, remarks 1 to 3 (the letter e); the fourth
     Word note, which names a French plural; English remark 4.
   - `cartes`, Count, remarks 3 and 4 (a French noun and the letter
     e), and the English remarks 1, 2, 3, 5, 6 and 7, which each name
     French words.
   No note of the reading uses the asterisks yet. In the captions
   these same words are bold or italic already.

## In the reading itself

I found nothing in the reading that I think is wrong. The settings I
may propose are all above; the join of the first plate's Figure is
right as set. The only things I would have the lead look at in the
words are the unmarked French words of "For the lead", 4.

## What is fine

- The picture tool reported nothing at any width: no error, no page
  wider than its window, no mark on a word.
- Every picture was opened and read at full size. No mark sits on a
  word or on another mark; no label is cut off or runs out of the
  plate; no arc or bracket crosses type.
- `habanera`: every line is whole at 1280, 390, 360 and 320. The
  count's rules, stresses and arcs stand clear; the four remark
  numbers are clear of the letters; glosses on the Word tab do not
  touch; the English tab's strokes run from the French word to the
  English one under it without crossing type.
- `la-bas`: the two blocks, the caption under the shorter one, the
  two brackets of the Figure tab and the nine glosses are all clear at
  1280; on a phone the English goes after the caption on the tabs that
  do not mark it, as the kit means. One line turns at 360 and 320
  (proposal 2).
- `cartes`: at 390 every long line is whole, at about 17 px (the room
  kept for the rhyme's letter makes it small: left on purpose, not
  reported). The rhyme brackets stand clear in the margin at every
  width down to 320; the pause marks of the Count tab stand at the cut
  wherever a line is whole and at the end of the first part where it
  has turned at its cut.
- The page: the head, "The passages", "What Auden said" and the
  further sayings with their sources, the record, "Read on", the
  sources and the two folded lists at the foot (seen folded) are in
  order at 1280 and 390.

## Refused

Nothing was refused by the permission system. Several times a shell
command was held back with the message that the safety check was
"temporarily unavailable (timed out)" and to try again in a moment;
each time I read files or wrote these notes meanwhile and ran the
same command again, and it went through. No other way round was
tried and none was needed.

## The final pictures

- Built again from the reading: `node build/pieces.mjs carmen`,
  2026-10-03 12:34:50 UTC; checker straight after: no problems, no
  warnings, the printed notes are fit to print. reading.json was then
  as it was when I began (10:46:34), and so were the kit and
  atlas.css (11:05:49).
- Taken 2026-10-03 from 12:34:57 to 12:37:50 UTC, one plate at a
  time: `habanera` at 1280, 390, 360, 320; `la-bas` and `cartes` at
  1280, 390, 375, 360, 320; then the whole page at 1280 and 390.
  72 pictures in `shots/`.
- The picture tool's last line, each of the four times:
  "nothing reported; now look at the pictures".
- Looked at again: 68 of the 72 are the same, pixel for pixel
  (`compare -metric AE`: 0), as the pictures of 11:40 to 12:09 that I
  had read at full size; the four new ones (`cartes` at 375) were read
  at full size.
- The trial pictures in `trial-beside/`, `trial-turn/`,
  `trial-blocks/` and `trial-head/` were taken between 11:53 and
  12:23 UTC with the same reading and the same kit, on a changed
  built copy; they show what was tried, not the page. `compare/`
  holds crops of the pictures set side by side.
- The built copy is the one built from the reading: no `turn`, no
  `beside`, the reading's headings and tab names.


