## The ninth mending: the rows (3 to 4 October, 22:51 to 01:25 UTC)

From the reports on La Traviata, Fidelio, Don Giovanni, Phèdre,
Kierkegaard, Karamazov, Baudelaire, Carmen, Tristan and Rilke. If your
final pictures are older than this mending, take them again where your
piece has a second passage beside the first (names, directions and
numbers stand differently there), and on every English or Versions tab
at 1280 px. The approved plate, the song of the Tempest, is the same
to the pixel.

**New in a reading: five things you can now say on a plate**

- **A name or a direction that the edition prints in the line may stay
  there.** `"stage"` took names and directions out of the line and set
  them over it. With `"inline": true` they stay where the edition has
  them, in the small capitals of a name and the small italic of a
  direction:

      "stage": { "1.0": { "name": 1, "dir": [3, 4], "inline": true } }

  `"inline": "name"` or `"inline": "dir"` leaves only that one in the
  line. Such words are no words of the verse: do not scan them, give
  them no rhyme, and set no part, span, pair or sound on them (the
  build and the checker refuse it, by row and word number). A note of
  a Word tab and a numbered remark may stand on them. The words keep
  their numbers. A direction after the verse is left out of the
  reckoning of the type's size; on a phone the line turns before it
  and it stands in under its line. Where the line ends on a rhyme,
  leave `inline` out for that row: the letter of the rhyme stands
  where the direction would.
- **A row that is nothing but a heading** of the edition ("Aria", the
  name of a number) can be shown as one: `"0.0": { "dir": [0, 0],
  "inline": true }` on a row of one word sets it small and italic
  among the lines. Its gloss and its remark keep their places.
- **Rows set deeper in**, as the edition sets them:
  `"indent": ["5.0-5.3"]` (a row, or a run of rows; `"p:270.7-270.10"` in the
  second passage).
- **A stanza's space where the hosted text shows none**:
  `"stanza": { "17.0": true }` sets it before row 17.0. The kit knows a
  stanza only by a block of the hosted text, so where each line is a
  block of its own you must say. `false` takes away a space the kit
  sets where no stanza ends. The build refuses the key where a name, a
  direction or a line of three points already stands before the row.
- **A place line of your own**: `"place": "Piave, *La Traviata*, Act 3"`
  replaces the line beside the plate's heading, which the kit takes
  from the label of the hosted part. Use it where that label says your
  heading again, or names more than the passage shows. `"place": ""`
  leaves the line out. A title between asterisks stands upright in the
  italic line; the kit cannot find a title by itself, so a place line
  that holds one needs this key.

The checker prints a line of proof for each (`indent:`, `stanza:`,
`place:`, and one line for every row that `stage` touches).

**Names and directions beside a passage**

- A direction that the edition prints before a speaker's name now
  stands before that name, under the speech it belongs to. It used to
  stand under the name and read as the new speaker's. If your label or
  caption explains which speech a direction goes with, it need not.
- The heading that a libretto prints over a number (its kind, a full
  stop, and the first words of the number) is no longer shown as a
  direction. A direction that stands before lines your plate leaves
  out is no longer shown over the first line it does show.
- A name, a direction or a line of three points that follows a row
  with a pair's number or a gloss under it stands clear of that mark.
  They used to touch and read as one.
- A stanza's space stands over the speaker's name, not between the
  name and the speech. Where the kit moves a row down to stand level
  with the line it answers, the name moves with it.
- A row of a second passage that opens with points of omission no
  longer has a line of three points before it as well.

**An English or Versions tab at 1280 px**

- Where the kit can set no pair of rows level (the version has more
  rows than the original, or the pairs cross), the version no longer
  keeps the original's pitch: it is set at its own, as on a tablet,
  and the plate is shorter. Where pairs do stand level nothing has
  changed. A short second passage that stands at the foot of its
  column, beside the last lines it answers, keeps the pitch where a
  row of it stands level with its line (the Tempest's epilogue,
  Fidelio's scene) and goes to its own where none does (Peer Gynt's
  two sayings, 103 px shorter).

**Already so, and still asked about**

- A `turn` on a row of the second passage (`"p:91.1": 2`) is taken by
  the checker and honored by the page.
- A label over a passage is balanced where it turns, since the eighth
  mending; its last word is not left alone.

**Not mended this time**: the lighting of a caption's words (an
italic title that lights a name, a word joined by an apostrophe, a tap
on a phone); a turned line of a version that the tab does not mark;
the height of a row set line under line at 1280 px.
