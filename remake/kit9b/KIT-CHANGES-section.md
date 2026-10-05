## The ninth mending: the lenses (3 October, 22:51, to 4 October, 01:05 UTC)

The part of the mender of the lenses (`remake/kit9b/`). For the artists.
The other half of this section, the rows, is the other mender's.
If a picture of yours shows one of the tabs named here, take it again
after the merge.

**Figure**
- A figure drawn as `align` may now carry a list in `join`. The spines
  stay, and the joins you name are drawn in place of the loose ones
  (the strokes between parts that stand inside their lines). A join
  named by two numbers between two parts of one kind takes that kind's
  color; a join between two kinds is grey, as on every other figure.
  `"join": "none"` still means underlines only.
- In an `align`, a loose stroke is no longer drawn behind a speaker's
  name, a direction or the points of a gap. Loose strokes are all
  alike or none, so where one would pass behind a name none is drawn,
  and color tells. The strokes of a `chain` still pass from speech to
  speech behind the name, broken where it stands.

**Word**
- A note stands under a bold head, the words of its row. Where the
  note itself opens with a word of that head marked `*word*`, the word
  is printed once: the note's own word is the head, and the words of
  the row are not printed before it. Thirty-eight notes on twenty
  plates change. A note that opens with its word unmarked, or in
  another form (the dictionary's), is printed as before: mark the
  word, or reword the note, if it reads twice.
- A gloss under a word is tidied as running words are (see "Running
  words" below).

**Compare**
- A pair with no remark (`say`) is tied by its color and carries no
  number. The numbers count the remarks, 1, 2, 3, with none left out,
  on the plate and in the list. So you may add a pair only to show
  that two phrases answer each other, or to set two rows level, and
  say nothing of it. (Where no pair at all has a remark, as on the
  cards of the front page, every pair is numbered as before.)

**Beat**
- A pause may fall inside a word that a dash joins. In `voice`, put
  `|` between the marks of its two parts: `/|/`. The bars stand under
  the dash; where the line turns at the dash they stand at the end of
  the first part. (The checker does not know this mark yet and will
  report the row: wait for the lead's word before you use it.)
- Under a tie (a syllable that is not counted) the two bars of a pause
  begin 2.5 px clear of the tie, so the two no longer read as one mark.

**Rhyme**
- The letter of a row that is cut short stands after its points of
  omission, not on them.

**Running words**
- A range of figures has one form wherever words run: the longer
  stroke between its two ends, whichever way it was typed. "3:18-19"
  in a gloss, a note, a remark, a source or a heading is set as
  "3:18–19", and the two ends keep to one line. Figures joined by
  more strokes than one (a date written 2026-10-03) are left as they
  are. You may go on typing a hyphen in a caption, a gloss or a note.
- The place of a passage beside a plate's heading, and "Read on", take
  the same stroke where the label of a part of the hosted book holds a
  range of years with a hyphen. The book's data is not changed.

**The page**
- The quotation at the head of an entry ("What Auden said", "More
  from Auden") takes marks: a title inside it is put between
  asterisks in `quote` and stands upright in the italic block.
- A quotation that ends in a quoted phrase keeps that phrase's closing
  mark, and the page adds its own after it. Two closing marks then
  stand together: single marks round the inner phrase read better.

**Small things**
- A word marked in an italic sentence among the folded numbers of a
  drawing (`.dg-facts p`) stands upright.
- The heads of a table of facts stand on one foot line: a head of one
  line beside a head of two or three stands at the foot, not at
  mid-height.

**Not changed, and why**
- The last lines of a caption may end short of the measure. The
  stylesheet asks that no last word stand alone (`text-wrap: pretty`),
  and the browser pays for it by ending the lines above a little
  short. The only cure is to drop that for every caption, which would
  set anew many captions that have no fault. The measures are in the
  record (`remake/kit9b/RECORD.md`, item 8).
- A short phrase in bold may still be parted between two lines of a
  caption (don-giovanni 12; phedre 2.11). A rule that kept such a
  phrase on one line was tried and taken back: where a caption ended
  on such a phrase, the browser set its last lines anew, in captions
  that had no fault. If the break troubles a caption of yours, reword
  the sentence so that the phrase does not fall at the turn. The
  record's item 9 has what was tried.
