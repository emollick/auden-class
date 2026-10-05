# The site by eye

The critic by eye, 2026-10-03 and 04. The site was already built
(`site/data/front.json` written at 22:49 UTC); nothing was built, edited
or installed, and no permission was refused.

- Pictures: `review/remake/site-eye/shots/`. A page is cut in slices of
  1,400 px, named `<page>-page-<width>-<n>.png`. The tabs of a piece are
  in `shots/<piece>/`, named by plate, number and tab.
- Enlarged details: `review/remake/site-eye/zoom/`.
- Running notes, fuller than this report: `review/remake/site-eye/notes.md`.
- A position is given in the picture's own pixels (x across, y down). At
  390 a slice of a page is 780 px wide and 2,800 tall, and the picture
  of a tab 716 wide: two picture pixels to one of the phone's. A type
  size is in the page's own px.

Looked at, at 1280 and 390: the front page, the page about the site, the
shelf; in the reader the contents of *The Tempest* and of *Moby-Dick*,
Act 3 Scene 1 and Act 3 Scene 2 of the play (the second opened at the
passage, as a link from the piece opens it) and Chapter 37 of the novel;
and eight pieces whole, every tab at both widths, the folded notes opened
at 1280. In `shots/` there are 433 pictures, taken from 22:51 to 23:40 UTC
on 10-03; 36 of them are slices with the notes open that are byte for byte
the closed slices. Every picture was opened, and those a finding rests on
were opened again on 10-04 before Parts 4 to 6 were written.

The front page changed after it was photographed (`site/js/home.js`, 00:10
UTC on 10-04). It was photographed again at 00:25 into `shots2/` and
compared: four keys have new wording (the "Beat" key, and the keys of the
Mozart *Don Giovanni*, Augustine and Bizet cards). Nothing else moved at
1280. At 390 everything below `home-page-390-5.png`, y 1788, stands 46 px
lower, and from the next slice 94 px lower. The positions in this report
are those of the first pictures, in `shots/`.

**The site was then rebuilt while this report was being finished.**
Another session's "ninth mending" went into `site/` at 01:18 UTC on
10-04 (the kit, the style sheet, `site/js/piece.js`, `site/js/rich.js`),
and the data of every piece, of the front page, the shelf and the page
about the site was written again by 01:22; the texts of the books were
not. The rebuilt site was photographed into `shots4/`: the front page,
the eight pieces in slices, every tab of *La Traviata*, two single
tabs, and then the page about the site, the shelf and the five pages of
the reader (223 pictures, all opened). Every finding was looked at
again there. Part 7 says what the mending mended, what holds, and what
was newly seen; a finding it mended is marked **Mended** in its place.
A position is still that of the first pictures unless a picture in
`shots4/` is named; Part 7 says how far the rebuilt front page has
moved. The page about the site, the shelf and the reader came out the
same to the pixel as the first pictures, in all 70 slices.

What the pictures cannot show:

- The picture tool stops at 15,000 px of page. At 390 the front page and
  the shelf are longer than that, so "All the works" and the foot of the
  front page, and "Recommended criticism" and the foot of the shelf, were
  not seen at phone width. Someone should look at them on a phone.
- A photograph has no pointer and does not scroll. The line under the
  bookcase that names the spine under the pointer, and the caption that
  travels beside a tall passage, are in the code and not in the pictures.
- The tool's browser gives every letter a whole number of pixels. A
  phone or a Mac places letters by fractions, and a line that just fits
  may turn differently there; the tool says so and has a switch for it
  (`--fractional`). The pictures in `shots/` are of the whole-pixel
  kind. On 10-04 the findings that rest on a line just fitting were
  photographed again with fractions into `shots3/` (73 pictures, all
  opened). Part 6 lists what held and what did not; the few that did
  not are corrected in their places.

## Part 1. The twelve things that most need mending, worst first

The order is the order of weight when this was first written. The
mending of 01:18 took the worst out of nos. 4 and 5; as the site now
stands the order is 1, 2, 3, 6, 7, 4, 8, 9, 11, 5, 10, 12. The numbers
are kept, because the other parts point to them.

**1. Six front cards set the label of the English version directly over
the line in the original language.** The label is small italic. On four
cards it is the translator's name (Goethe, Gluck, Dante's *Inferno*,
Wagner's *Götterdämmerung*); on two it is "The English libretto"
(Wagner's *Tristan*, Bizet). The line under it is the German, Italian or
French, which the translator did not write; the English it belongs to is
the small italic line below that.
`home-page-1280-1.png`: Goethe card (left column, label at y 1090 over the
German at y 1125) and Wagner, *Tristan* (right column, y 1067).
`home-page-1280-3.png`: Gluck (left, y 1075). `home-page-1280-4.png`:
Dante, *Inferno* (left, y 343) and Bizet (right, y 1024).
`home-page-1280-6.png`: Wagner, *Götterdämmerung* (right, y 350). The same
six at 390 (`home-page-390-1`, `-2`, `-4`, `-6`, `-7`, `-10`). All six
stand so on the rebuilt page; the last now has a year after the name.
Mend: name the translator in the card's head after the title, as the
cards of translated prose already do ("…, translated by …"); or give the
label both its halves, the poet in small capitals and the translator in
italic, as the plates of the *Inferno* piece do
(`dante-inferno/dante-inferno-gate-0-rhyme-1280.png`, y 118): that is the
dress of the two kinds of line under it. The other "Two versions" cards,
with a small-cap label over each block, show it done right.

**2. A card does not lead to the line it showed, and the tabs have no
common names.** Every card opens its piece at the head. Counted in
`site/data/front.json` and checked by eye on the eight pieces: of the 35
marked passages on the front page (the opening and 34 cards), 3 are what
the piece shows first (the opening, and the cards of Goethe and Rilke);
11 are on the first plate under another tab; 21 are on the second or
third plate, a screen or more below. In 16 of the 35 the tab does not
carry the name of the group the card stood in. A reader who chose the
Pascal card under "Figure" lands on a page with eleven tabs, none called
Figure: the line is on the third plate under "Pairs". The Hamlet card is
on the third plate under "Word"; the Verdi card, from "Two versions", is
under "English".
The front page teaches six names: Beat, Rhyme, Figure, Sentence, Word,
Two versions. In the eight pieces the beat is "Beat" (four pieces),
"Measure" (*Inferno*, *Traviata*) and "Count" (*Don Giovanni*). Two
versions side by side are "Compare" (*Inferno*), "English" (three
pieces) and "German" (*Rilke*), while "French" in *Pascal* is the word
lens. The drawing of the whole work is
"Scene", "Shape", "Poem", "Page", "Play", "Ships". *Pascal*'s eleven tabs:
Reasons, French, Against, Page; Reed, Verbs, Crossing; Voice, Pairs,
Scales, Game. The tab names are the file names of the tab pictures in
each `shots/<piece>/`.
Mend: one name for one lens across the site (Beat, Rhyme, Figure,
Sentence, Word, and one word for two versions). Keep a name of its own
for the one drawing a plate has that no other plate has, as the approved
page does with "Scene" and "Pardon". And let a card open its piece with
its own plate's tab chosen (the card's data already names its plate and
tab), or say on the card where the line is.

**3. On a phone the opera plates give the English last.** In every tab
but "English" the reader meets the Italian, then the caption, the notes,
the key, and only then the English libretto.
`don-giovanni/don-giovanni-count-0-count-390.png`: the Italian ends at
y 1250, the English begins at y 3230 of 3,804 (`zoom/dg-count-390-a` and
`-b`). So in `count-1`, `count-2`, `close-0` to `-2`, `duet-0` to `-2`,
and in `traviata/traviata-refrain-0-refrain-390.png` (English from y 3290
of 4,248; on the rebuilt page, in `shots4/traviata/`, from y 3220 of
4,154), `cabaletta-0` to `-2`, `end-0`, `end-1`. In the "English" tab of
the same plates the English follows the Italian at once, so one plate
changes its order from tab to tab.
The third plate of *Rilke* does the same on its first three tabs
(`shots4/rilke/rilke-page-390-4.png`: the German ends at y 800, the
caption and the key run to y 1590, the English of 1918 begins at y 1690).
Mend: at phone width set the second text straight under the first in
every tab, before the caption. (The first two plates of *Rilke* are right
as they are: there the English is the marked text and the German follows.)

**4. The head of a plate is not held to the pattern.** On the approved
page it is a short title in small caps, a short place in italic, and the
tabs at the right of the same row
(`tempest/tempest-song-0-beat-1280.png`, y 30 to 55).
- **Mended at 1280.** `traviata/traviata-page-1280-0.png`, y 805 to 850:
  the place ran to seventeen words, so the tabs had dropped to a second
  row at the left, while on the next plate they stood at the right. On the
  rebuilt page the place is eleven words and the tabs stand at the right
  on all three plates (`shots4/traviata/traviata-page-1280-0.png`, y 812).
  On a phone that place still takes two rows, and with the label there
  are six rows of small type before the passage
  (`shots4/traviata/traviata-page-390-0.png`, y 2070 to 2370).
- `shots4/rilke/rilke-page-390-2.png`, y 1610 to 1720
  (`zoom/r-rilke-plate2-head-390.png`): on a phone the second plate has
  its tabs at the right of its short title and the place under the title.
  The first and third plates of the same page have title, place, and then
  the tabs at the left (`zoom/r-rilke-plate1-head-390.png`). Two shapes of
  head on one page; the row wraps or not by the length of the title.
- `dante-inferno/dante-inferno-page-1280-0.png`: each title carries its
  line numbers after a colon. `pascal/pascal-page-390-1.png`: fragment
  numbers first, the name after a colon; two lines on a phone.
- `don-giovanni/don-giovanni-count-0-count-390.png`, y 30 to 210: the
  place is ten words and says the title again; four rows before the
  passage. `moby-dick`: the chapter is said in the title and again in the
  place, on all three plates.
Mend: a title of two to five words; a place of the form "work, act or
chapter"; line numbers, fragment numbers and speakers go in the small-cap
label over the passage. The tabs never change place between two plates:
on a phone always a row of their own under the place.

**5. Marks that do not sit on their words.**
- **Mended.** `home-page-1280-3.png`, Beethoven card (right column,
  y 1205 to 1270; `zoom/h3-fidelio-dot.png`): the blue tie from the first
  line ended in a dot inside the small-cap name of the next speaker, at
  both widths (`home-page-390-5.png`, y 2310 to 2380). On the rebuilt
  page no stroke is drawn behind the name (`zoom/r-fidelio-1280-old.png`
  beside `r-fidelio-1280-new.png`; `zoom/r-fidelio-390-new.png`).
- **Mended where a name follows.** In the English tabs on a phone the
  numbers under the marks touched, or all but touched, what stood beneath
  (`don-giovanni/don-giovanni-duet-3-english-390.png`, marks 2, 4, 5 and
  6; `traviata/traviata-end-2-english-390.png`, marks 1 to 5), and a
  number read as part of the speaker's name under it. On the rebuilt page
  a number stands 12 to 15 of the phone's pixels clear of a name, a
  direction or the points of a gap
  (`zoom/r-dg-duet-english-390-old-new-a.png` and `-b`,
  `zoom/r-trav-end-english-390-a.png` and `-b`). What is left: a number
  with a line of the verse after it still stands 3 to 5 px over that
  line's tall letters (marks 2 and 4 of the duet; mark 2 of the Traviata
  plate; `zoom/r-trav-refrain-english-390.png`). Tight, not touching.
- `dante-inferno/dante-inferno-ulysses-0-antithesis-390.png`, y 540 to
  670: the tie between the two opposed phrases is broken in two short
  strokes where the English line passes. At 1280 it is one clean line.
  The least of these: it can be read.
- `home-page-1280-2.png`, Sophocles card (left column, y 1030 to 1255):
  three dots under each of four words. The key beside the group promises a
  dotted thread, as the *Tempest* card draws it; these read as stray
  ellipses.
Mend, of what is left: draw the Sophocles sound as the thread the key
describes. Give a numbered underline as much room over a following line
of verse as it now has over a name.

## Part 1, continued. Nos. 6 to 12

**6. The page about the site stops as if cut off.**
`about-page-1280-6.png` (the slice is 163 px tall: the last line ends
13 px above the edge) and `about-page-390-8.png`. No rule, no space, no
way on. The style sheet hides the empty foot
(`.foot:empty{display:none}`, `site/css/atlas.css`, line 128 since the
rebuild), while the note in `site/js/main.js` says this page's foot
"keeps the rule".
Mend: keep the foot's rule and its space when it has nothing to say.

**7. The shelf does not say plainly what opens.**
- `shelf-page-1280-0.png`: eleven thin spines carry no name (x 271 to 286,
  818 to 824, 887 to 915 on the first shelf; 532 to 541 on the second;
  256 to 262, 286 to 318 and 372 to 402 on the third: five short books
  and the librettos of six operas). With a pointer a line under the
  case names each. On a phone a tap opens the book unseen.
- `shelf-page-1280-1.png` and after: in the list the title of a book is a
  link with no underline, and the underlined way in is the translator's
  surname ("Printed here: Garnett · about 999 pages").
- `shelf-page-1280-0.png`, y 1203 to 1400, and `shelf-page-390-1.png`,
  y 650 to 1480: the two opening paragraphs run together, no indent and
  no space.
Mend: underline the title in the list as other links are. Name the thin
spines (a small figure on each and the names beside the key), or let a
first tap name the book. Indent the second paragraph.

**8. In the reader, verse hangs to the left under a centered head.**
`read-tempest-a3s1-page-1280-0.png`: the head is centered on x 640; the
verse runs from x 281 to about 700, and the right 300 px of the column
stay empty down the whole scene.
Mend: center the block of verse on its longest line, or set the head
flush left on the verse's edge.

**9. The opening quotation on a phone leaves one word alone.**
`home-page-390-0.png`, y 220 to 440: three lines, the second a single
word. It is the first thing the page shows.
Mend: about 31 px at this width, so that each sentence holds one line,
or a balanced turn.

**10. Slips of an old printing shown as if the site's own.**
`don-giovanni/don-giovanni-duet-0-rhyme-1280.png`: the second speaker's
label is spelt another way at its second appearance (y 860; her name
stands in italic beside it, so who speaks is clear), and two lines end
in doubled stops (y 560, y 893). That the libretto is given as first
printed is said only in the folded note
(`don-giovanni-page-open-1280-6.png`); on the plate these read as slips.
Mend: a speaker's label is not the poet's word: set it right. For the
stops, three words in the label over the passage, "as first printed",
as the third plate of *La Traviata* has them.

**11. The caption changes its place, and its measure grows too long.**
On the approved page the caption always stands to the right of the
passage, about 390 px wide. Where a plate holds two texts it has two
places, and changes between them within one piece and from tab to tab
of one plate: at the right under the second text, or under both texts at
the left, where it runs to between 95 and 105 characters a line.
- `rilke/rilke-page-1280-1.png`: under both on the first plate (x 111 to
  720, y 340 to 485), at the right on the second (x 664 to 1168, y 1080
  to 1275).
- `don-giovanni/don-giovanni-page-1280-0.png`, y 1316: at the right;
  `don-giovanni-close-0-word-1280.png`: under both (x 61 to 700).
- On the rebuilt page, `shots4/traviata/traviata-end-0-word-1280.png`: at
  the right (x 660 to 1118, y 942 to 1165);
  `traviata-end-2-english-1280.png`, the same plate: under both at the
  left (x 61 to 675, y 1135 to 1305). Before the rebuild this plate had a
  third place, under the left text only; that is gone.
Mend: one place for the caption in a two-text plate, and no caption line
longer than about 75 characters.

**12. Specimen lines of three sizes in one group of cards.**
`home-page-1280-2.png`: the Aeschylus lines are about 19 px and the
Sophocles 18, beside Dante, Shakespeare, Jonson and Wagner at 28.
`home-page-1280-1.png`: Blake at 20 beside Shakespeare at 28. Long lines
are shrunk to fit one row.
Mend: one size for all, the long line turned once with an indent, as the
phone page already turns Blake (`home-page-390-1.png`, y 760 to 1240).

## Part 2. The front page

**What the eye goes to first.** At 1280 (`home-page-1280-0.png`) the
quotation in 88 px, then the heavy syllables of the two lines under it.
That is the right order: Auden's question, and a line that answers it. At
390 the same, marred by the lone word (Part 1, no. 9). Nothing on the page
looks like a course site: no weeks, no numbers, no progress.

**Do the cards read at a glance?** Thirty of the thirty-four do, since
the rebuild (twenty-nine before). The rhyme cards, the "Word" cards and
the "Two versions" cards need no key at all. Three are puzzles without
their page, and one is crowded:
- Blake and Rimbaud (`home-page-1280-1.png`): a double upright bar under
  the line (x 345, y 868; x 750, y 846), and in Rimbaud a small tie under
  the first two words (y 752). In Blake some red marks are dots and some
  are open rings. The key beside "Beat" names the rule, the long stroke,
  the dots and "red"; not the bar, the tie or the ring. So too after its
  new wording of 00:10 and after the rebuild (`zoom/r-home-beat-head.png`,
  `zoom/r-home-blake-1280.png`, `zoom/r-home-rimbaud-1280.png`).
- Sophocles (Part 1, no. 5): the dots.
- Henry Adams (`home-page-1280-3.png`, right, y 400 to 580): five colors,
  four slanted strokes and a key of two rows. It can be read, slowly. It
  is the one crowded card.
- **Mended.** Kierkegaard (`home-page-1280-5.png`, left, y 980): under
  the third phrase the note said only that no source is given, and a
  reader could not tell whose. On the rebuilt page the note names the
  edition (`zoom/r-home-kierkegaard-1280.png`).
Mend: a clause more in the "Beat" key, or leave the bar, the tie and the
ring to the piece.

**Do the cards sit well together?** The two columns work: no card leaves
bare paper beside it. Measured on the rebuilt page by the tint of the
cards, the two columns of a group end 1 px apart ("Figure"), 11
("Rhyme"), 14 ("Word"), 42 ("Sentence"), 61 ("Two versions") and 102
("Beat"). "Beat" ended 23 apart until 01:18, when its first card gained a
row; now its right column stops well short of its left
(`shots4/home-page-1280-2.png`: the left column ends at y 131, the right
at y 29).
The price of two columns is that neighbors do not share a top edge.
Where the miss is large it reads as the way of the page. Where it is
small it looks like a slip: in "Rhyme" the second pair of cards begin 15
px apart and the third 29 (`shots4/home-page-1280-2.png`, y 668 and 653,
then 998 and 1027; in the first pictures y 599 and 584, 930 and 959).
Mend, if any: where two tops come within about 30 px of each other, set
them level; and even the two columns of "Beat" again. Else leave it: it
is the lesser evil.

**More faults, worst first** (after Part 1, nos. 1, 5, 9 and 12):

1. "Two versions" does not keep one order.
   `home-page-1280-5.png` and `-6.png`, right column: Baudelaire gives the
   English first and the French second. Dante, Horace, Racine and Verdi
   give the original first, the order the key names them in. Wagner,
   *Götterdämmerung*
   (`home-page-1280-6.png`, y 350 to 545) is a third form: German lines
   with small italic English beneath and slanted strokes between.
   Mend: the original first on all six; set the Wagner as two blocks.
2. The rhyme tie has three shapes in one group. `home-page-1280-2.png`:
   round arcs (Dante, Shakespeare, Jonson, Wagner), squared brackets
   (Aeschylus, x 583 to 595, y 686 to 818), long flat swoops ending in a
   hook (Sophocles, y 1060 to 1105 and 1190 to 1230). The key says "an
   arc". Mend: the arc everywhere. No. 12 of Part 1 makes room for it.
3. The phone page is very long: more than 15,000 px, some eighteen
   screens of cards, before "All the works", and the link "The works" in
   the top bar is this same page. Mend: one quiet link to "All the works"
   under the opening paragraph.
4. `home-page-390-9.png`, Racine card, y 1700 to 1920
   (`zoom/home-racine-390.png`): of two twin lines the first is turned in
   two rows and the second kept in one. Mend: turn both or neither.
5. The caption of the opening plate: `home-page-1280-0.png`, y 845 to
   895: three lines of 15 px type across 726 px, about 115 characters a
   line, under the largest letters on the site. Mend: 17 px, or a
   measure of about 36 em.
6. Small type that carries running words. The glosses of the "Word"
   cards are about 12.3 px italic (`zoom/h5-flute-gloss.png`,
   `zoom/h5-hamlet-gloss.png`). In the Mozart, *Magic Flute* card the
   whole English of both lines is set in it. Under the Hamlet line two
   glosses of two and five words meet with a hair bar between.
   Mend: 13.5 px, the size a wide plate uses. The hair bar is the
   kit's own and is on the approved page at phone width
   (`tempest/tempest-song-3-word-390.png`, y 765): keep it.
7. A key that leaves one entry alone on a second row:
   `home-page-1280-3.png`, Adams (y 573), four and one;
   `home-page-1280-4.png`, Dante (y 728), three and one. At 390 the
   Bizet key stood three and one (`home-page-390-7.png`, y 2100 to
   2150); the new wording of 00:10 happens to set it two and two.
   Mend: break a key in even rows (three and two, two and two).
8. "All the works" (`home-page-1280-7.png`): Dante's three pages stand
   under one name (y 17 to 170); Shakespeare's four, Wagner's three and
   Mozart's two say the name again each time. Mend: one way for all.
9. Three left edges. `home-page-1280-7.png`, y 1280 to 1310: the rule of
   the foot runs from x 30 to 1250; the page from 50 to 1230; the words of
   the foot and the name in the top bar begin at 58. The opening paragraph
   (`home-page-1280-0.png`, y 1105) begins at 292, on no edge above it.
   At 390 that paragraph is inset 40 px where all else is 32.
   Mend: the foot and its rule on the page's edge.
10. `home-page-1280-4.png`, Bizet card, y 1288: the third French line
    ends 5 px past the card's hairlines. With letters placed by fractions
    of a pixel (`shots3/home-page-1280-4.png`, y 1263) it ends 3 px
    inside them. Either way the line has no air.
    Mend: turn it, as no. 12 of Part 1 asks for every long line.

**What is best, to be kept.**
- The opening: the question, two lines with their marks, and a caption
  that says what each mark is. The page asks nothing of the reader and
  says nothing about itself.
- The three great names, Prosody, Rhetoric, Philology, each under an ink
  rule with a numeral and an italic gloss. They are Auden's own three
  courses, and they part the page as part-titles part a book.
- One key at the head of each group, beside its label. The cards
  themselves carry no instructions.
- The "Figure" cards: the term in italic display type, its meaning in
  plain words under it, the colors named. A reader learns a word of the
  trade from one line of verse.
- "Two versions": a small-cap label on each block, and small figures
  that pair the phrases across the two.
- The phone's way with a long line (Blake, `home-page-390-1.png`): turned
  once, indented, the rule carried on under the turned half.
- "All the works": a plain list in three columns in the order of Auden's
  own list, as the index of a book.

## Part 3. The page about the site, and the shelf

### About (`about-page-1280-0` to `-6`, `about-page-390-0` to `-8`)

**What the eye goes to first.** The title, in two balanced lines, then a
first paragraph a size larger than the rest. Right. The page is all
words, as such a page may be, and it is in good order.

**Faults, worst first.**
1. It stops as if cut off, at both widths (Part 1, no. 6).
2. The measure is too long at 1280. `about-page-1280-0.png`: the column
   runs from x 280 to 1000 in 19 px type, 95 to 100 characters a line (the
   first line under "Where the method comes from" has 98). A book holds 60
   to 75. The same measure carries "More from Auden" on every piece
   (`tempest/tempest-page-1280-3.png`, x 300 to 980). In the reader the
   prose holds about 85, and the two columns at the head of a piece about
   58, which reads best of all.
   Mend: no running prose wider than about 36 em (some 660 px at 19 px).
3. `about-page-390-4.png`, y 765: after a long section heading the rule
   that follows it shrinks to a stub (x 630 to 740). Mend: when the heading
   takes most of the row, drop the rule or put it under.
4. `about-page-390-7.png`, "Works cited": four entries leave a year alone
   on their last line (five with letters placed by fractions of a pixel,
   `shots3/about-page-390-7.png`). `about-page-390-4.png`, top: a row of
   the table leaves one word alone. Mend: a balanced or tidy turn for
   these short blocks.

**What is best.** The table of the record
(`about-page-1280-2.png`): what is said of the course on the left, who
says it on the right, a hairline between rows, and where the witnesses
disagree the page says so in plain type. On a phone each row stacks, the
fact in ink over its source in gray (`about-page-390-4.png`). "Who made
this" is said once, near the head, in three plain sentences. "Works
cited" with hanging indents is a real bibliography.

### The shelf (`shelf-page-1280-0` to `-8`, `shelf-page-390-0` to `-10`)

**Does the bookcase read as a bookcase?** Yes, at once, and it is the
happiest invention on the site. Spines stand on three ruled shelves (six
on a phone), each as thick as its book is long, with double bands at head
and foot. *The Brothers Karamazov* is as wide as a third of a shelf and
*The Tempest* a sliver; the eye takes that in before a word is read. The
low spines of the librettos stand apart from the books.

**Is it clear what can be opened?** Not altogether (Part 1, no. 7). The
last sentence of the note under the case says that a spine opens its
book, and a spine warms in color under the pointer. But eleven spines are
blank, and in the list below the plain-looking title is the way in.

**Faults, worst first** (after Part 1, no. 7):
1. The list reads as a form on a phone. `shelf-page-390-3.png`: for each
   of the Shakespeare plays the same six rows: name, title, "Printed
   here", "The text · about 85 pages", "Its page", the page's title. The
   two labels are said thirty-three times down the page.
   Mend: let the title open the book, set the count of pages beside it,
   and keep one label, for the page of the piece.
2. At 1280 the left two fifths of every entry hold a title and nothing
   else. `shelf-page-1280-3.png`: the title ends near x 380, the labels
   begin at 553, the facts at 720. Under a title with a long note there
   are 250 px of bare paper (Baudelaire, y 500 to 760).
   Mend: narrow the first column to the widest title, or set the label
   under the title and give the note the width.
3. The hatching of the two spines marked "Omit" runs through their
   titles. `shelf-page-1280-0.png`: Goethe (x 828 to 884, y 405 to 558)
   and Henry Adams (x 544 to 755, y 603 to 757).
   Mend: hatch the head and foot of the spine and leave the label clear,
   or hatch more lightly.
4. The name of the author on a spine is 10 px in small caps
   (`.spine-au`), half a pixel under the smallest label elsewhere.
   Mend: 10.5 px.
5. Shelves that look unpacked. `shelf-page-1280-0.png`: the third shelf
   is empty from x 402 to 1184. `shelf-page-390-0.png`, y 1750 to 2060:
   the fourth shelf holds one book. A bookcase may have room to spare;
   one book alone on a shelf looks like a slip.
   Mend: at 390 let the spines be a little narrower so that Adams stands
   with Dostoevsky or with Melville.
6. "Recommended criticism" and the foot were not seen at 390 (beyond the
   tool's 15,000 px).

**What is best, to be kept.**
- The bookcase itself, and the two small keys beside its note (a hatched
  box, a dashed box). The dashed spine for the one book not printed here
  is exactly right.
- The line under the title, and the kicker "English 135": the page says
  what it is in nine words.
- "Required reading" under an ink rule with its paragraph to the right:
  the same part-title as the front page.
- "Recommended criticism" (`shelf-page-1280-7.png`): eighteen books in
  three columns, name, title, a line on where a free copy is. The best
  list on the site.
- The record of each opera (`shelf-page-1280-6.png`): a title, a ring
  with a triangle, a hairline for the time, a note on the singer and the
  disc. No machine dressed up as a gramophone. The lead's list of settled
  things says "no sound": these records are there, on the shelf and on
  the pages of the operas, and the lead should know it. By eye they are
  quiet and in keeping.

## Part 4. The reader

Opened: *The Tempest* (verse) and *Moby-Dick* (prose), each from its
spine: the contents, and a page.

**Is a page of the book a pleasure to read?** Yes. This is the quietest
and most bookish part of the site. `read-moby-dick-c037-page-1280-0.png`:
20 px type on 32 px lines, the first paragraph flush and the rest
indented with no space between, as a printed novel sets them.
`read-tempest-a3s1-page-1280-0.png`: speakers in small caps over the
speech, directions in gray italic, nothing else on the page.

**Is it clear where you are and how to get back?** At the head, yes: the
author and the book's title stand over the name of the scene or chapter,
and the title is the link to the contents. "The shelf" is lit in the top
bar. At the foot: the scene before, the scene after, the contents, the
shelf (`read-tempest-a3s1-page-1280-3.png`, y 970 to 1120). In the middle
of a long scene nothing says where you are, which is as a web page is.
The one way that is missing is in fault 3 below.

**Faults, worst first.**
1. Verse hangs to the left under a centered head (Part 1, no. 8).
2. Verse on a phone turns over a single word.
   `read-tempest-a3s1-page-390-0.png`: in the first speech three lines of
   fifteen turn (y 700, 1390, 1560), each for one word. In the whole
   scene it is five lines of about a hundred (the other two in
   `read-tempest-a3s1-page-390-2.png`, y 389 and y 2176), and so in Act 3
   Scene 2 (`read-tempest-a3s2-36-page-390-2.png`, y 966; `-3.png`,
   y 300). The turned word is indented, which is the right way to turn a
   line; but the scene opens on three in one speech. One of the three
   misses the edge by a pixel, the other two by some twenty of the
   phone's.
   Mend: verse at about 17 px on a phone, where it is now 18.5; all
   three then hold.
3. The two ways between a piece and its passage in the book are hard to
   find. Going: "Read it here" opens the book at its first page on all
   eight pieces, and the passage itself is reached from the contents, or
   from a small link in a note or a drawing where there is one (the
   approved page has none to the scene of its song, which is the scene
   after the one that opens). Coming back: the one link to the piece is in
   the mark at the passage; at the foot of the scene there are only the
   next scene, the contents and the shelf.
   Mend: make the place in a plate's head ("Act 1, Scene 2") the door to
   that passage in the book; where a page of the book holds a drawn
   passage, add the piece to the links at its foot.
4. The links to the next and the last scene stand on a narrower measure
   than the text. `read-tempest-a3s1-page-1280-3.png`: text from x 281,
   the links from 325 to 955, and their two hairlines leave a gap in the
   middle (x 628 to 652). `read-moby-dick-c037-page-390-1.png`: the left
   title takes two lines and the right one, so the pair stands uneven.
   Mend: the links on the edges of the text; align both to the top.
5. The prose measure is a little long at 1280: x 281 to 999 at 20 px,
   about 85 characters. Mend: about 31 em.
6. Small things in the contents.
   `read-tempest-page-1280-0.png`: the act is named in the margin and
   again in every row under it ("Act 1" over "Act 1, Scene 1"); the rule
   of an act runs from x 120 to 1160 and its rows from 300 to 980.
   `read-moby-dick-page-1280-0.png` and `-1.png`: eleven long chapter
   titles leave one word alone on the second line (chapters 42, 50, 77,
   81, 82, 83, 91, 109, 115, 128, 131), and chapter 74 begins its second
   line with a dash. `read-moby-dick-c037-page-390-0.png`: the line over
   the title breaks the book's name at its hyphen.
   Mend: rows that say "Scene 1"; a tidy turn for the long titles; no
   break at a hyphen in a title.

**What is best, to be kept.**
- The mark where a piece's passage begins
  (`read-tempest-a3s2-36-page-1280-4.png`, y 475 to 535;
  `read-moby-dick-c037-page-1280-0.png`, y 346 to 442): a red hairline
  across the column, one small italic line that names the page and links
  to it, and a red stroke in the margin beside the first words. A link
  that names a passage opens the page there. A reader always knows which
  lines were drawn.
- The same mark in the contents: a red dot and "Drawn on …" under each
  scene or chapter that a piece opens (`read-tempest-page-1280-0.png`,
  y 496; `read-moby-dick-page-390-1.png`, y 835).
- The contents of the novel in three columns with the pages in italic at
  the right of each row, and the acts of the play named in the margin.
- The paragraphs of the prose page, set as a book sets them.
- A turned line of verse indented, never run on.

## Part 5. The eight pieces

Opened as a reader meets them from the front page: each page whole at
1280 and 390, every tab, the folded notes open. The plates were judged by
their own critics; this part is about the page around them. *The Tempest*
is the pattern. Positions are at 1280 unless a 390 picture is named.

**The pattern, as it measures** (`tempest/tempest-page-1280-0`, `-2`,
`-4`). Head: a line of small capitals, the title, one italic line saying
where the passages are, all centered. Lead: two columns of like weight
with a hairline between, "The passages" in 8 or 9 lines, and "What Auden
said" as a quotation of 2 or 3 lines, a paragraph and its source. Plate:
a head of one row (short title, short place, the tabs at the right, the
tab in use underlined in red), the passage at the left, the caption at
the right about 390 px wide. "More from Auden" opens with one quotation
in display type. "Read on" is one row, its label at the right. "Sources"
with hanging indents and two folded notes. On a phone the head of a plate
is three rows: title, place, tabs.

**What a reader who chose a card meets** (Part 1, no. 2).
- *The Tempest* (the opening of the front page) and *Rilke*: the same
  lines under the same tab, first on the page. Right.
- *The Tempest* (its Rhyme card) and *La Traviata*: the first plate, but
  under the second and the fourth tab.
- *Inferno*, *Don Giovanni*, *Moby-Dick*: the second plate. On *Inferno*
  that is below a first plate 1,700 px tall.
- *Hamlet*, *Pascal*: the third plate, under its second tab.

**Where the seven are not the same as the pattern, worst first.**
1. The names of the tabs (Part 1, no. 2) and the head of a plate (no. 4).
   On a phone the pattern's three rows are four in *Inferno*
   (`dante-inferno-page-390-0.png`, y 2058 to 2195), *Pascal*
   (`pascal-page-390-1.png`, y 1679 to 1814) and *Don Giovanni*
   (`don-giovanni-page-390-0.png`, y 2177 to 2320). In *La Traviata* six
   rows of small type stand before the first line of the passage
   (`traviata-page-390-0.png`, y 2080 to 2360), and so on the rebuilt
   page: the title, a place of two rows, the tabs, a label of two rows
   (`shots4/traviata/traviata-page-390-0.png`, y 2070 to 2370;
   `zoom/r-trav-plate1-head-390.png`). In *Rilke* the second plate has
   two rows where its neighbors have three, the tabs standing beside the
   title (Part 1, no. 4). The *Inferno* title is on the edge: with
   letters placed by fractions of a pixel it holds one row with 6 of the
   phone's pixels to spare (`shots3/dante-inferno-gate-0-rhyme-390.png`),
   so it is three rows on one phone and four on a narrower. *Pascal*,
   *Don Giovanni* and *La Traviata* are as said on every phone.
2. The label over a passage is written five ways. The poet in small
   capitals and the translator in italic (*Inferno*): the best, because
   it is the dress of the two kinds of line under it. The librettist's
   name beside "The English libretto" (*Don Giovanni*). A name and a year
   (*Rilke*, third plate). "The English of 1930" beside "Rilke's German"
   (*Rilke*, first plate). Sentences of 7 to 12 words, two lines each, on
   the third plate of *La Traviata* (`traviata-page-1280-2.png`, y 725
   to 741; at 390 `traviata-end-2-english-390.png`, y 245 and y 1650).
   On the rebuilt page those two are eleven and twelve words, still two
   lines each (`shots4/traviata/traviata-end-0-word-1280.png`, y 115 to
   131; at 390 `shots4/traviata/traviata-end-2-english-390.png`, y 245 to
   300 and y 2530 to 2600; `zoom/r-trav-end-label-a.png` and `-b`). The
   one over the English tells the reader which speech a direction goes
   with. Since the rebuild the page shows that by itself: a direction
   stands under its own speech, clear of the next name.
   Mend: a label says who and when, in six words at most. What else must
   be said belongs in the caption or the notes.
3. The caption's place where a plate holds two texts (Part 1, no. 11).
4. "More from Auden" does not open the same way. The quotation in display
   type stands first (*Tempest*, *Pascal*), second
   (`hamlet-page-1280-2.png`, y 925), fourth
   (`moby-dick-page-1280-3.png`, y 108), sixth
   (`dante-inferno-page-1280-5.png`, y 20; `traviata-page-1280-4.png`,
   y 314) or not at all (*Don Giovanni*, *Rilke*). In the middle of the
   list the largest type in the column reads as a heading over the
   entries after it, which it is not.
   Mend: one quotation, at the head, or none; a later one in the size of
   the text.
5. "Read on" has two shapes at 1280. In six pieces the label stands at
   the right of the title. In `pascal-page-1280-4.png` (y 291 to 324) it
   has dropped under the title, flush left, and so it does with letters
   placed by fractions of a pixel (`shots3/pascal-page-1280-4.png`,
   y 324). In `moby-dick-page-1280-3.png` (y 1034 to 1067) it dropped by
   a pixel or two: the title ends at x 853 and the label would begin at
   872. With fractions it holds the row
   (`shots3/moby-dick-page-1280-3.png`, y 1019). So *Pascal* differs on
   every screen and *Moby-Dick* on some.
   On a phone it has two shapes as well, and there the pattern is the
   other one: the label stands under the title, flush left, on *The
   Tempest* (`shots4/tempest/tempest-page-390-5.png`, y 1490 to 1690),
   *Inferno*, *Pascal*, *Rilke* and *Moby-Dick*; and at the right of a
   shorter title on *Hamlet* (`shots4/hamlet/hamlet-page-390-5.png`,
   y 650 to 790), *Don Giovanni* and *La Traviata*
   (`zoom/r-readon-390-two-shapes.png`). The row wraps or not by the
   length of the title.
   Mend: one place at each width whatever the title's length: at the
   right at 1280, the title turning if it must; under the title on a
   phone.

## Part 5, continued. Nos. 6 to 9, and what is to be kept

6. Speakers. **Mended in the main.** The third plate of *La Traviata*
   set the speakers' names inside the line at the full size of the sung
   words (`traviata-page-1280-2.png`, y 773 on), and nothing but an
   underline told a name from the words. On the rebuilt page they are
   small capitals in gray, in the line where the first printing has them
   (`shots4/traviata/traviata-end-0-word-1280.png`, x 61 to 127), and
   read as names at once. Two things are left. Names stand in the line
   here, and over the speech in the *Don Giovanni* duet and in every
   English column; each is the way of its edition, and a reader will
   take it. And in the "Word" tab the red underline takes in one and the
   same name on two rows (y 244, y 761) and leaves it out on two (y 904,
   y 1047).
   Mend: underline a name where its gloss explains it, the first time
   only; after that leave it gray.
7. "Draw it again" stands flush left over a rule of its own width in the
   pattern (`tempest-page-1280-2.png`, x 710 to 813, y 593), and so in
   *Inferno*, *La Traviata* and *Moby-Dick*. In
   `don-giovanni/don-giovanni-count-0-count-1280.png` it is centered
   (x 206 to 310, y 1001) over a hairline as wide as its column.
   Mend: flush left over a rule of its own width, wherever it stands.
8. The head. `rilke-page-1280-0.png`, y 282 to 310: the line under the
   title runs to two lines, three on a phone (`zoom/heads-390.png`), and
   gives the book's name again with its other name in brackets.
   `traviata-page-390-0.png`, y 412 to 462: the line turns between "and"
   and the figure, so a lone "5," begins the second line.
   Mend: one line at 1280; keep "3 and 5" together.
9. Small things.
   `hamlet-page-1280-3.png`: five entries running end with the same
   source but for the pages (y 260, 510, 702, 923, 1167). A book would
   shorten the second and after.
   `moby-dick-page-1280-0.png`, y 664 to 710: the source under "What
   Auden said" takes three lines, where the pattern has one. Mend: the
   book and the page there, the rest under "Sources".
   The same picture, y 385 to 480: the quotation in display type holds a
   quoted phrase in double marks inside its own double marks. *Pascal*
   sets single marks inside (`pascal-page-1280-2.png`, y 810 to 920).
   Mend: single marks inside, everywhere.
   `don-giovanni-page-1280-5.png`, y 41, and `traviata-page-1280-4.png`,
   y 1031: the hairline of the record stops at x 820; the column and every
   rule above and below it run to 980. Mend: run it to the column's edge,
   as it runs on a phone.
   `dante-inferno-page-open-1280-6.png`, y 1124: with the line numbers in
   a plate's title, the bold opening of each entry under "What each
   caption stands on" is 290 px of a 680 px line (110 to 230 px in the
   pattern).

**What holds on all eight, to be kept.**
- The head, and above all the lead. "The passages" beside "What Auden
  said" is the same on every page, the two columns ending within 16 to
  60 px of each other. After one page a reader knows where to look.
- The tab in use is underlined in red on every plate (checked pixel by
  pixel on thirteen plates).
- "Sources" with hanging indents, and the two folded notes. "Where this
  page may be wrong" is the most honest thing on the site, and it is set
  quietly.
- One foot on every page.

**What is best on each page.**
- *The Tempest*: the head of a plate in one row, and the label over the
  third passage, which carries the line numbers so that the title need
  not.
- *Hamlet*: the third plate, prose, with its term and key under the
  passage and the caption beside it (`hamlet-page-1280-2.png`, y 40 to
  500).
- *Inferno*: the chain of the rhyme drawn down the right of twelve lines,
  and the label over the passage.
- *Don Giovanni* and *La Traviata*: the record: a title, a ring with a
  triangle, a hairline, a note.
- *Pascal*: the drawing of the manuscript page, which holds on a phone
  with its names set under it as a list (`pascal-heart-3-page-390.png`).
- *Rilke*: the two poems side by side at one size, each under a name and
  a year (`rilke-page-1280-2.png`), and on a phone one under the other
  with the numbers clear of the lines (`rilke-panther-3-english-390.png`).
- *Moby-Dick*: the nearest of the seven to the pattern, and the phone
  form of the nine ships (`moby-dick-rachel-3-ships-390.png`).

## Part 6. Small type, lines that just fit, and what was not seen

**Small type.** The brief's bars are 13 px for running words and 10.5 px
for a label. The sizes are those of `site/css/atlas.css`, checked on the
pictures.

- Under the bar, one label: the author's name on a spine, 10 px
  (`.spine-au`; Part 3, the shelf, fault 4). Mend: 10.5.
- Under the bar for running words, one kind: a gloss under a word
  (`.gl`), 12 px on a phone, about 12.3 on a front card at 1280, 13.5 on
  a wide plate. As a label of one to four words it reads. Where it
  carries a whole translated line it does not (the *Magic Flute* card;
  Part 2, fault 6).
- At the bar, and the smallest running type on the site: the notes
  beside a plate, 13 px italic in gray (`.aside`). It is the approved
  page's own size. Where a plate has six such notes on a phone they are
  a long read (`shots3/don-giovanni-count-0-count-390.png`, y 1920 to
  2700; `zoom/p6-frac-dg-notes-390.png`). If one size is raised, raise
  this one on a phone, to 14 px.
- At the bar for a label, 10.5 px in spaced small capitals: "The
  measure", "Draw it again", "Previous" and "Next", "Printed here" and
  "Its page", the heads of the small tables, the labels on a drawing,
  and the figures under marks on a phone. They read. None should go
  lower.
- With room to spare: speakers' names, 11 px capitals; the title and
  tabs of a plate, 11.5; the line over a title, the section labels and
  the top bar, 12; stage directions and the place in a plate's head,
  13.5 italic; the English under a line of the original, 14.5 and up;
  sources, 15; captions, 15 to 17; the two columns at the head of a
  piece, 17.5 to 19.5; a page of the book, 18.5 to 20.5.

**Lines that just fit.** Photographed again with letters placed by
fractions of a pixel, as a phone or a Mac places them (`shots3/`).

Held, the same in both kinds of picture (three of these, marked here,
the rebuild of 01:18 has since mended):
- the lone word in the opening quotation at 390 (Part 1, no. 9);
- the English last on a phone and Dante's broken tie; and, since
  mended, the figures against the names and the Fidelio tie (Part 1,
  nos. 3 and 5);
- *La Traviata*: six rows before the passage on a phone and the lone
  figure in the line under the title; and, since mended, the tabs on a
  second row on the first plate only (Part 1, no. 4; Part 5, nos. 1
  and 8);
- four rows in the head of a plate on a phone in *Pascal* and *Don
  Giovanni*, and "Read on" in *Pascal* (Part 5, nos. 1 and 5);
- the three sizes of specimen line, the three shapes of rhyme tie, the
  keys of the Adams and Dante cards, Racine's twin lines, the long
  caption of the opening plate (Part 1, no. 12; Part 2);
- the turned lines of verse in Act 3 Scene 1 on a phone, the same five
  (Part 4, fault 2);
- the end of the page about the site, and the stub of a rule after its
  longest heading (Part 1, no. 6; Part 3).

Changed, and corrected in their places:
- "Read on" in *Moby-Dick* holds one row (Part 5, no. 5).
- The title of the first *Inferno* plate holds one row on a phone, by
  6 px (Part 5, no. 1).
- Bizet's third French line ends 3 px inside its card (Part 2, fault 10).
- In the contents of *Moby-Dick* chapters 74 and 83 turn well; the other
  ten stay (Part 4, fault 6).
- "Works cited" on a phone leaves five years alone, not four (Part 3).

These five have one cause: a line that fills its row to the last pixel.
Where a line is meant to hold one row, give it a few pixels of air or a
rule for turning; then the page is the same on every screen.

Not photographed again, because nothing found there rests on a line
just fitting: the shelf, *Hamlet*, *Rilke* (its line under the title is
two full lines), the reader at 1280.

**Not seen, or not judged.**
- At 390, "All the works" and the foot of the front page, and
  "Recommended criticism" and the foot of the shelf: beyond the tool's
  15,000 px. They want a look on a phone.
- What answers a pointer or a finger: the line under the bookcase that
  names a spine, and the line under a drawing that says what a mark
  stands for. The pictures show that line's hint. It reads "Point at a
  mark" at both widths, because the tool's phone has no touch; the code
  says "Touch" on a real one (`site/js/kit/diagram.js`, line 95).
- What moves with the page: the caption that travels beside a tall
  passage, and the line that stays at the window's foot under a tall
  drawing.
- The page "Read it here" opens: the first scene or chapter of each of
  the eight books.
- The other twenty-seven pieces. What Part 1, no. 2 says of them is
  counted in `site/data/front.json` and `site/data/pieces/`, not seen.
- The records were not played.
- Widths between 390 and 1280.

**Does anything look like a template, a dashboard or a course site?**
Not a course site, anywhere: no weeks, no modules, no progress, nothing
to tick. Not a dashboard: the figures a drawing is made from are folded
away under it. Two places come near a template, both on a phone. One is
the front page, where thirty-four boxed cards, each with an arrow at
its foot, stand one under another for some eighteen screens (Part 2,
fault 3). The other is the list of the shelf, with its two labels on
every book (Part 3). At 1280 the cards are kept from it by the verse
set large, the marks, and two columns of unequal cards. Do not add to
the boxes: no shadow, no icon, no button.

**The same faults, by the brief's three words.**
- Standing apart, though they belong together: the label of the English
  and the English (Part 1, no. 1); a card and its line in the piece
  (no. 2); the original and its English on a phone (no. 3); a piece and
  its passage in the book (Part 4, fault 3).
- Crowded: the head of the first *Traviata* plate on a phone; the Adams
  card; six notes in 13 px italic. (The figures in the English tabs on a
  phone were crowded against the names until 01:18.)
- Bare: the right 300 px of a page of verse at 1280; the left two
  fifths of each entry in the shelf's list, and most of its third
  shelf; the foot of the page about the site, which has none.

**Counts.** `shots/` 433 pictures, `shots2/` 19, `shots3/` 73, `shots4/`
223, `zoom/` 98 details; the notes are
`review/remake/site-eye/notes.md`. Three temporary files went to the
session's scratch folder by mistake while measuring and were deleted at
once; nothing else was written outside `review/remake/site-eye/` and
this report. One shell command of the last pass went on from the
project's folder into `review/remake/site-eye/` to compare pictures; it
wrote nothing.

## Part 7. After the rebuild of 01:18 UTC on 10-04

**What changed in `site/`.** At 01:18 the kit (`plate.js`, `draw.js` and
five lenses), the style sheet, `piece.js` and `rich.js`; at 01:20 the
data of every piece, of the shelf and of the page about the site; at
01:21 `front.json`. Against the copy another session kept from 22:50
(`remake/kit9a/orig/site`) 33 files differ. Of the eight pieces the data
of *The Tempest*, *Inferno*, *Don Giovanni* and *Moby-Dick* is the same
to the byte; *Hamlet* differs in one mark of a scan, *Pascal* in the
label of a key, *Rilke* in two places, *La Traviata* in forty-five.
`front.json` differs in nine. The two menders' notes
(`remake/kit9a/KIT-CHANGES-section.md`, `remake/kit9b/…`) were read as
information.

**What was photographed again** (`shots4/`, whole-pixel pictures as in
`shots/`, compared with them pixel by pixel):
- The front page, 20 pictures: changed (below).
- *The Tempest* 12 slices, *Inferno* 16, *Moby-Dick* 12, *Pascal* 14,
  *Rilke* 13: the same to the pixel. The approved page is untouched.
- *Hamlet* 12: ten the same; two differ in 112 and 180 pixels, one mark
  of a scan on the second plate.
- *Don Giovanni* 15 slices: eight the same, seven differ, in the duet
  plate only. One tab more, the English of the duet at 390.
- *La Traviata* 15 slices and all 22 tab pictures: changed from the
  first plate down.
- *Rilke*, one tab more: the English of the third plate at 390.
- The page about the site 16, the shelf 20, the reader 34: the same to
  the pixel. These pages share with the pieces one helper that changed
  (it now sets a range of figures typed with a hyphen with the longer
  stroke); their data holds no such range.

**Mended by the rebuild** (each marked in its place):
1. The tie on the Beethoven card no longer ends in a dot inside the
   next speaker's name (Part 1, no. 5; `zoom/r-fidelio-1280-old.png`
   beside `r-fidelio-1280-new.png`).
2. On a phone a number under a mark of the English stands clear of the
   name, the direction or the gap beneath (Part 1, no. 5;
   `zoom/r-dg-duet-english-390-old-new-a.png`).
3. The tabs of the first *Traviata* plate are back at the right, its
   place cut from seventeen words to eleven (Part 1, no. 4;
   `shots4/traviata/traviata-page-1280-0.png`, y 812; `-1.png`, y 761;
   `-2.png`, y 598).
4. The speakers in the third *Traviata* plate are small capitals in
   gray (Part 5, no. 6).
5. The third note of the Kierkegaard card names its edition (Part 2).

Two mendings of things this report had not named, both to be kept. In
the English of the *Don Giovanni* duet at 1280 the space between two
stanzas now stands over the speaker's name, not between the name and
the speech (`zoom/r-dg-duet-english-1280-old-new.png`). In the English
of *La Traviata* a direction stands under the speech it belongs to.

**What holds, and where it now stands in `shots4/`.**
- Part 1, no. 1, the six labels: `home-page-1280-1.png`, Goethe y 1168
  and *Tristan* y 1067; `-3.png`, Gluck y 1143; `-4.png`, Dante y 410
  and Bizet y 1092; `-6.png`, *Götterdämmerung* y 418.
- No. 2: counted again in the rebuilt data. 35 passages; 3, 11 and 21;
  16 under a tab of another name. Unchanged.
- No. 3: all eleven tabs of *La Traviata* at 390 opened again. The
  English comes last on eight, at once on the two called "English";
  "Scene" has none.
- No. 4: the long places, the numbers in the titles, the chapter said
  twice. No. 5: the Sophocles dots (`home-page-1280-2.png`, y 1103 to
  1318) and Dante's tie. Nos. 6, 7 and 8: the same to the pixel.
- No. 9: `home-page-390-0.png`, the lone word. No. 10:
  `don-giovanni/don-giovanni-page-1280-2.png`, y 1072 and y 1372, and
  `-3.png`, y 5. Nos. 11 and 12 as restated in their places.
- Part 2: the keys of Adams (`home-page-1280-3.png`, y 617 and 641) and
  Dante (`-4.png`, y 772 and 796); the rest as written, lower by the
  figures below.
- Part 5, in *La Traviata*: the quotation in display type sixth
  (`traviata/traviata-page-1280-4.png`, y 230), the record's hairline
  (y 948), "Read on" on one row (y 1196), "Draw it again" flush left
  (`-2.png`, x 710 to 813, y 440), the lone figure under the title
  (`traviata-page-390-0.png`, y 412 to 462). In *Don Giovanni*: "Draw
  it again" centered (`don-giovanni/don-giovanni-page-1280-1.png`,
  x 256 to 360, y 462).

**How far the rebuilt front page has moved.** At 1280 the first card of
"Beat" is 79 px taller, the two cards under it stand 79 px lower, and
everything from "Rhyme" down 68 px lower than in `shots/`. At 390 all
below the Othello card stands 286 picture px lower, and further down
between 240 and 334. The slices are cut where they were, so a thing
near the foot of one slice may now be at the head of the next.

**Newly seen** (each entered in its place):
1. The third plate of *Rilke* gives the English last on a phone, as the
   opera plates do (Part 1, no. 3).
2. The second plate of *Rilke* has its tabs beside the title on a
   phone; its neighbors have them under the place (Part 1, no. 4).
3. "Read on" has two shapes on a phone as well as at 1280 (Part 5,
   no. 5).
4. Double marks inside double marks in the quotation at the head of
   *Moby-Dick* (Part 5, no. 9).
5. The columns of "Beat" now end 102 px apart, and two pairs of cards
   in "Rhyme" all but share a top (Part 2).
6. A label in *La Traviata* tells in twelve words what the page now
   shows by itself (Part 5, no. 2).

Seen and not a fault: in the "Shared" tab of *La Traviata* on a phone a
tie stops over the row of a direction and goes on under it
(`zoom/r-trav-shared-390-a.png` and `-b`). It reads.

**What the rebuild left as it was.** Of the twelve in Part 1: nos. 1,
2, 3, 6, 7, 8, 9, 10, 11 and 12 whole, and the lesser halves of nos. 4
and 5. Four of them are the kit's to mend: the order of a plate on a
phone, the caption's place beside two texts, the size of a specimen
line, the Sophocles dots. The rest are the front page's data and links,
the foot, the shelf's list, the reader's verse, and the wording of
heads and labels.

The site was looked at once more at 02:16 UTC: nothing in `site/` is
newer than `front.json` of 01:21:57.
