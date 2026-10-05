# The pass for phones: the critic by eye

Every picture in `review/phone/shots/` and its three folders was opened
(four pairs in `plates/` and `plates-before/` are the same file byte for
byte: Baudelaire, Rilke `count`, and the two piece pages). My own
pictures (eight runs of the tool, eleven files) are in
`review/phone/eye/`. Sizes are in CSS px, half of what a phone picture
measures; heights of plates and of their parts were measured in the
given pictures, from rule to rule, by a script that only read them and
printed numbers. I edited nothing, and nothing was refused to me.

One thing in the pictures is the picture tool and not the site: the red
title in `home-list-0`, `home-list-1` and `class-up-0` is the pointer left
where the click fell (`eye/works-0`, taken with no click, has none).

## 1. The eight changes

**1. The English under the original: better on most tabs, worse on two,
and it has put the key out of reach of the marks.** On the tabs that draw
sound or shape (Carmen `mood`, Dante `figure`, Don Giovanni `count`, the
Dutchman `beat`, Fidelio `figure`, Phèdre `halves`, Rimbaud `count`,
Tristan `crossing`) a reader without the language now has the sense
before the caption speaks of it. Before, it stood under "Draw it again",
a window or more off. Keep that. Horace's stanza and the Magic Flute's
second passage (which is Caliban's lines, not a version) are also right
where they now stand. Three costs: the key and "Draw it again" are
further from the marks by the height of the English (fault 2); the
Panther's English is a whole window of bare lines in the middle of its
plate (fault 4); on two Word tabs the English is a third telling of
lines already glossed (fault 5).

**2. The way down the front page: better, and part of the page, too much
so.** The sentence is in the paragraph's own type, and at 390 the link
begins its last line at the left edge. The landing is right: the list's
own heading, in the link's three words, with its rule 14 px under the
window's top, and the address `works` lands on the same pixel
(`eye/works-0`). Keep the landing. The link itself cannot be told from
the words round it (fault 3).

**3. The way back on the class page: better, and part of the page.** It
hangs on the right end of the rule like a running head, in the small
capitals of the date under the rule, 9 px clear of the rule and about
55 px under whatever ends the afternoon before. It takes no room and touches
nothing, at 390, at 360 (`eye/class-360-othello-0`) and on a desk. It is
not bolted on. Keep its place, size and color. (Its words stand right
over a title, and only the arrow says they point away from it: the label
is the other critic's.) Where it lands is right, the list opened and the
first afternoon's head under it; one thing is missing there (fault 10).

**4. The reader's verse: better.** At 390 the type is 17.5 px in 16 px
margins. In the screens given (`read-tempest-0`, `-1`, `read-dante-0`,
`-1`, `read-hamlet-foot-0`, `read-phedre-o-0`) three lines in about a
hundred turn, each for one word, the turned part set in. At 360 the type
is 16.5 px and the same two lines of the Tempest turn, no more
(`eye/tempest-360-1`). Prose at this size (`read-moby-0`, `-1`) is a
pleasure to read. Keep the sizes and the turned part's indent. The
change has made two small things worse (faults 6 and 7). There is no
picture of the reader from before.

**5. "Read on": right at both widths.** On a phone: the title, the small
words 7 px under it, a rule. On a desk: one row. In the two pairs given
(`adams`, `antigone`) before and after differ by a pixel, since both
titles were long; the gain is on a short title (`family-reunion-390-0`,
first row), which has no picture from before. Keep it. Two small things
remain (faults 11 and 12).

**6. Plate heads on a phone: better.** Seen on Othello and Horace: the
tabs stood at the right of the title, with the place under the title, so
the red line of the open tab hung beside the place. Now every plate reads
title, place, tabs, rule, and a thumb finds the tabs in one spot. It
costs 31 px a plate. At 360 a long title and four tabs still keep one row
each (`eye/rimbaud-360-0`). Keep it.

**7. Notes at 14 px: better.** The notes on words and the numbered
remarks are running words, and at 14 px they read without effort
(`eye/again-0` shows them at true size). The plates grow by 36 to 104 px
(Antigone 104, Tristan `work` 92, Blake 72, Volpone 63, the Tempest 36).
Keep it. The key under them stays 13 px italic, which is right for a key.

**8. Small things: two right, one half done, one not carried through.**
The front page now stands on one left edge, 16 px, from head to list
(`home-top-0`, `-1`, `home-list-0`): keep. The finger's room round the
menu's words cannot be seen and takes no room; by the stylesheet each
word has 39 px of height and 7 px at each side, and none overlaps. The
book's title in the reader's small heading is kept whole, but the point
before it now begins a line (fault 8). And the menu the finger was given
room in does not hold together on a narrower phone (fault 1).

## 2. Faults, worst first

**1. The menu breaks on a phone narrower than about 380 px.**
`eye/home-375-0` and `eye/tempest-360-0`, the head, under the site's
name: each entry of two words is parted, "The" over "Class", "The" over
"Works", "The" over "Shelf", and the four stand as columns two lines
deep. It is on every page. At 390 the row fits by 9 px (`home-top-0`); at
375 it is 3 px short and all three turn. It probably stood before this
pass (the finger's room takes no width), but the pass touched the menu
and left it. Mend: keep each entry whole (`white-space:nowrap`); under
390 set the gap at 10 px and the letters at .14em, which fits 360 with
5 px over; under 340 let the row turn between entries.

**2. "Draw it again" draws where no one is looking, and the key is a
window or more from its marks.** `eye/again-0` (the Dutchman, after a
press): the window holds the remarks, the key, the button and the next
plate's head. Every marked line is above the window. From the foot of
the original down to the button:

| plate and tab | before | now |
|---|---|---|
| Rilke, the Panther, `beat` | 490 | 1,250 |
| Phèdre, `halves` | 630 | 870 |
| the Dutchman, `beat` | 720 | 970 |
| Rimbaud, `count` | 720 | 840 |
| Don Giovanni, `count` | 930 | 1,270 |

A window is 844 px, less with the browser's bars. Before, the last
marked lines could stand in the window with the button on two of these
plates, and at its edge on two more; now on none. The key (what a
stroke, a dot or a color is) has moved as far, and so have the numbered
remarks. Mend: on a narrow plate a press first brings the passage to the
window's top; and the rows of the key stand under the original, over the
English, as they stand under a short passage on a wide plate.

**3. The link on the front page cannot be told from the words round
it.** `home-intro-0`, the last line of the paragraph: "All the works" is
in the ink and type of its sentence, and the one sign of a link is a
hairline in the color of the page's rules, about 1.6 to 1 against the
paper. At 375 it no longer begins a line: it stands in mid-line after
the page number, and "this page." turns alone (`eye/home-375-1`). On a
desk it stands near the end of the third line (`home-intro-1280-0`). It
is the only way
down some 14,000 px, and a reader who is not told will not see it. Mend:
the class page's device does this job and can be seen: "All the works ↓"
in small capitals at the right, over the rule of each of the three
headings (the first rule is 68 px under this paragraph). Failing that, a
"↓" inside the link and its line in the labels' color.

**4. A plain passage set at the pitch of marked lines.**
`plates/rilke-panther-1-beat`, between the two rules in the middle: the
twelve lines of the English stand about 56 px apart, the pitch the German
needs for its strokes and dots, with nothing in the bands. They take
741 px, a whole window, between the scan and the words about the scan. At
the plate's foot, before the pass, the same block parted nothing. The
same pitch makes the second passage of `baudelaire-evening-0-likeness`
914 px and of `rilke-count-0-sentence` 1,021 px (neither moved in this
pass). Mend: on a narrow plate a second passage that the open tab does
not mark is set at reading pitch, as a plain version already is. The
Panther's English comes to about 400 px.

**5. On two Word tabs the English is a third telling, and it parts the
glosses from their notes.** `plates/traviata-end-0-word`: every Italian
line has its sense under it; then come 740 px of the English libretto;
then the caption and the notes on those same words.
`plates/tristan-work-2-word`: the same, 384 px, and the caption's first
sentence says that the small glosses give the plain sense. Before the
pass the libretto stood last on both. Mend: on a Word tab that glosses
every line, leave the version after the notes.

**6. The red bar of a drawn passage is against the glass.** `read-moby-0`
and `read-phedre-o-0`, the left edge, beside the passage: the bar stands
2 px from the window's edge (`eye/phedre-here-x4-0`). With the old margin
of 20 px it stood at 6. Mend: on a phone set it 8 px left of the text,
not 14.

**7. The line over a drawn passage shrank with the verse.**
`read-phedre-o-0` and `read-moby-0`, under the red rule: "This passage is
drawn on the page" is .78 of the reader's size, so 13.65 px at 390 and
12.9 px at 360, down from 14.4. It is a sentence in italic, and it holds
the link from the book to the page that draws it. Mend: 14 px, whatever
the reader's size.

**8. A point begins a line.** `read-moby-0`, the small heading over
"Chapter 1: Loomings": the author stands alone on the first line, and
the second begins with the point, then the book's title. The title is
whole, as the change meant, but the point belongs at the end of the first
line or nowhere. Mend: tie the point to the author's name with a
no-break space, as the piece pages do.

**9. The reader's small ways have no room for a finger.**
`read-hamlet-foot-0` and `read-phedre-o-0`, under the last lines:
"Contents: Hamlet" and "The shelf" are 12 px capitals in a line 18 px
tall, 26 px apart. The book's name over the heading (`read-tempest-0`) is
the same. The menu got its room in this pass and these did not. Mend:
the menu's own rule: 9 px over, 12 under, 7 at each side.

**10. The list does not show where the reader was.** `class-up-0`: after
the way back the fourteen afternoons stand alike (the red one is the
tool's pointer). The reader who looked up and wants to go on must know
the name of the afternoon they left. Mend: mark that row with the 6 px
red point that the reader's contents already use.

**11. A word and an arrow alone on a line.** `readon/class-390-0`, under
"The shelf": the small words turn and leave "Here →" by itself. Mend:
even the two lines (`text-wrap:balance` on the small words), or fewer
words, which is the other critic's.

**12. A title that turns inside a pair of names, and one shape with two
signs.** `readon/antigone-390-0` and `readon/antigone-1280-0`: the first
line ends on one sister's name and the second begins "and Ismene", with
the book's name and the same name side by side before it. It was so
before the pass. Mend: let such a title turn after the book's name: the
book and the part each in a span that keeps together where it fits.
And the class page's two closing links end in an arrow
(`readon/class-390-0`) where "Read it here" and "At archive.org" have
none (`readon/family-reunion-390-0`): give all or none.

**13. A number parted from its noun.**
`plates/magic-flute-weddings-0-word`, the label over the second passage:
the first line ends "Scene" and the second begins "2:". Mend: a no-break
space between "Scene" and its number in every label.

**14. Two titles in one row at two heights.** `read-phedre-o-0`, the
foot: the title under "Previous" has two lines and stands 11 px further
from its label than the title under "Next", which has three. Mend:
`align-content:start` on the two links.

**Seen in passing, not of this pass.** `plates/fidelio-name-0-figure`,
the first direction: its English turns and leaves one word alone (so
too before). `plates/dutchman-tale-0-beat`, sixth and eighth lines of
the German: a straight typewriter apostrophe in the large type; if the
edition's is curled, set it. The glosses under the words are 12 px
italic on a narrow plate (`plates/volpone-gold-0-word`), under the mark
for running words; at 13 the full rows (the last line of Horace's
stanza) would need a second level, so I would leave them.

## 3. What still reads, on a phone, like a slog or a class website

**A plate is read downward and its tabs are only at its head.** The
plates in `plates/` are 1,230 to 2,840 px tall, one and a half to three
and a half windows. After a caption the next tab is that far back up,
and when a tab is pressed at the head, what changes most (the caption,
the remarks, the notes) is under the window. Change 1 made the trip
longer. Mend: on a narrow plate, the row of tabs again at the plate's
foot; a press there brings the plate's head to the window's top.

**A window of small italic.** `plates/don-giovanni-count-0-count`: six
remarks, about 490 px. `plates/tristan-work-2-word`: ten notes, about
780 px. At 14 px they can be read, and they are the reasons he asked
for, but they stand as one block of italic with 5 to 8 px between
entries. This is the part of a plate that looks like apparatus. Mend:
on a narrow plate, 12 px between entries, so that ten short things read
as ten.

**The class page's first window** (`class-top-0`): a course's place and
term, its name and number, fifteen lines of prose and a closed list.
Nothing is drawn or quoted until the next window. Of the first screens I
was shown, this is the one most like a course page. Its second paragraph
says how the page is told; at the page's foot, with the sources, it
would let the first afternoon's date and title into the first window.
(The words are the other critic's.)

**A piece opens with a window of prose.** `plates/hamlet-page-390-0`,
`plates/moby-dick-page-390-0`: the first plate begins at about 990 px,
under "The passages" and "What Auden said". The brief asks that his view
lead the piece, and the quotation in large italic carries the eye, so I
mark no fault. It is where a phone reader meets the most words before
the first drawn line.

Not a slog, and to be kept as they are: the list of all the works
(`home-list-0`, `-1`), a page of verse or prose in the reader, the head
of each afternoon with its way back, and the plate's head as it now is.
