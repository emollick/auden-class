# Hamlet: the artist's record

Piece `hamlet`, 3 October 2026. This is the record as it stands after the
kit's seventh mending (10:40 UTC) and its correction of 11:06 UTC. All times
are UTC. Words of the play are pointed at by row and word number, as
`node build/tools/check-reading.mjs hamlet` prints them (row 46.9, word 1;
words are counted from 0). None is typed out here.

Handed in:

- `site/js/pieces/hamlet.js`, the drawing of the one shape lens;
- this file;
- `remake/works/hamlet/count-order.mjs`, the count behind the drawing;
- the pictures in `remake/works/hamlet/shots/`: the 22 tabs and 12 page
  slices the picture tool wrote at 12:03, and in `shots/extra/` 86 closer
  looks and other widths, taken between 11:20 and 12:10, which this file
  names. No picture is older than the kit's last change (11:05:49).

No stylesheet was needed. What I changed in `reading.json`, and nothing
else (section 3 gives the reasons):

- three headings;
- two new keys in the shape lens's facts, `inOrder` and `inOrderKey`;
- `turn` on two plates, four rows in all;
- `join` on the Chain lens of the second passage.

## 1. What I drew, and why that form

The piece has one shape lens: the tab "Shape" of the third passage (plate
`readiness`, lens 2). Its `what` is where Hamlet talks to himself, and where
he speaks verse and where prose, scene by scene.

**The drawing** is a line of marks along the play. All that Hamlet says is
laid end to end in the order he says it, a row to each act, on one scale
for all five rows. The act in which he says most (Act 3) fills the width,
and every mark is as long as its words. Each row is an ink thread as long
as all he says in that act, on a hairline of the full width, so the acts
can be measured against each other. What the text sets as verse stands over
the thread. What it sets as prose hangs under it. The words "verse" and
"prose" at the right of the first row say which side is which. The scenes
stand a little apart, each with its number under it (1.2, 1.4, 1.5 and so
on).

- The seven speeches to himself are the only marks in ink, and each has the
  number of its lines over it: "31 lines" on the first, then 21, 58, 33, 12,
  22 and 35. All seven stand over the thread, in the rows of Acts 1 to 4.
- The row of Act 5 has no ink mark and carries the words "no speech to
  himself". The script prints those words on any act in which the facts
  mark no speech to himself, so they follow the facts.
- This speech is the one red mark. It hangs under the thread in Act 5, and
  a red leader runs from it to the words "this speech: 5 sentences of
  prose, to Horatio". It is the last mark under any thread, and one mark of
  verse follows it to the end of the row.
- Everything else he says is in the hairline tone, with no outline, so
  that ink and red are read first.
- The key has two entries: "a speech to himself of 12 lines or more" (the
  12 is the least number of lines among the seven, read from the facts) and
  "all else he says; every mark is as long as its words".
- The pointer, or a tap, adds one note under the key, and the marks of that
  scene or speech stay dark while the others go pale. 22 places answer it:
  the 13 scenes, the seven speeches, and this speech on its mark and on its
  words. A scene says "Act 1, Scene 5: 98 lines of verse (685 words), no
  prose"; a speech to himself says "Act 2, Scene 2, to himself: 58 lines,
  459 words; I, me or my 35 times"; this speech says "Act 5, Scene 2, to
  Horatio: 61 words of prose in five sentences". The note is not needed to
  read the drawing.
- "The numbers", folded under the key, holds three plain tables and one
  sentence: this speech; the seven speeches to himself (lines, words, and
  how often each says I, me or my); the facts' own sentence on what he says
  to himself that is not among the seven; and his verse and prose scene by
  scene, with the totals. On the full site the places of the eight speeches
  are links to the play printed there (`#/read/` and the `read` of the
  facts); where the page has no reader the script prints them as plain
  words.

**Why this form.** The caption says four things that can be seen, and they
are about order as much as amount: seven speeches to himself of 12 to 58
lines, all verse, all in the first four acts; none in Act 5; this speech is
prose and is said to someone; it is the last of his prose, and verse
follows to the end. A bar for each scene, which the facts as the poet left
them allowed, shows the amounts and loses the last statement, because in
Act 5, Scene 2 he speaks verse, then prose, then verse again. A line of
marks along the play, in the order of speaking, shows all four at once.
Verse over the line and prose under it lets the eye follow him from one to
the other without a second color, which keeps red for this speech alone. A
row to each act keeps the marks large enough on a phone, and makes "none in
Act 5" a row that can be seen to be empty of ink.

**The scale.** One scale for every row, from zero: so many px to a word
(about a twentieth of a px on the narrowest phone, a sixth where the
drawing is widest). The gaps between scenes are not words. They are the
same in every row, and wider only where a scene is too short to hold its
number (4.2 and 4.3 on a phone). A run that would be narrower than a pixel
is drawn one pixel wide: the few short verse lines inside the prose of Act
2, Scene 2 and Act 3, Scene 2.

**Every number is read from the facts when the page runs.** The script
reads four keys of the lens's facts by name: `inOrder`, `soliloquies`,
`thisSpeech` and `hamletByScene`. If one is missing it throws, and the kit
shows its plain table. It also reads `totals` (the last row of a table) and
`shorter` (the sentence in the fold) if they are there. None of these is a
working note. No count, name or place is typed into the script. The red
label takes its "prose" from the run's `kind`, the name from
`thisSpeech.saidTo` and the number from `thisSpeech.sentences`. The only
typed words are labels and the small words that join them: Act, Scene,
verse, prose, line, word, sentence, the three words whose count the facts
hold under `iMeMy`, "no speech to himself", "this speech", "to himself",
never, once, twice, times, the number words up to ten, the two entries of
the key and the heads of the tables. Each names a part or states a fact;
none interprets.

`inOrder` gives the order. The amounts are those of the other keys: a
speech to himself is as long as its `words` in `soliloquies`, this speech
as long as `thisSpeech.words`, and what is left of a scene's verse and
prose in `hamletByScene` is shared among that scene's other runs in the
proportions `inOrder` has. So a number the examiner corrects in any of
those keys is corrected in the drawing without `inOrder` being touched.

**Figures and words.** On the drawing a count is in figures (31 lines, 5
sentences). In the note the pointer prints, a small number is a word (five
sentences), a count keeps its comma (1,624 words), and a scene is named in
full (Act 2, Scene 2) where the row has only its number (2.2). The three
words he says of himself are named as words, so in the italic note they
stand upright, as the kit sets a word between asterisks, and they are not
parted where the note turns (`extra/shape-pointer-1280.png`,
`extra/shape-pointer-390-ink.png`, `extra/shape-pointer-320-ink.png`).

**The note must not move what stands under it.** The kit keeps room for it
under the key: one line on a wide plate, two on a phone. The script sets
every note in a line made as the kit makes its own, measures it, and gives
the notes in full only if every one fits that room; otherwise each names
its scene by number and gives the words alone. With the present facts the
full notes fit at all 23 widths tried, from 320 to 1600 px: the longest
takes two lines in a room of two at 320 to 414, one line in a room of two
at 430 to 540, and one line in a room of one from 560 up. At every one of
those widths all 22 places answer, none lies outside the drawing, none is
silent, and the key and the plate stay where they were (run of 12:05 to
12:08; pictures `extra/shape-pointer-1280.png`,
`extra/shape-pointer-1280-scene.png`, `extra/shape-pointer-390.png`).

**Motion.** The rows draw from the top, Act 1 first, each from left to
right; the ink marks come a moment after the others, the line counts after
them, and the red leader and its words last. The last line begins 1.24
seconds after the drawing is set out and the kit draws a line in 1.1, so
the whole is there at 2.34 seconds by design. Measured on this machine at
12:06: every line and mark whole 2.2 seconds after set-out at 1280 and 2.4
at 390, and nothing is shown and then hidden again. With reduced motion it
is simply there. Because a picture takes seconds on this machine, the
frames were made by stopping the drawing inside the page at the moment
asked and photographing it afterwards: `extra/shape-1280-while-it-draws-900ms.png`,
`-1400ms`, `-1900ms` and `-3400ms` (0.43, 0.93, 1.44 and 2.94 seconds
after set-out) and `extra/shape-390-while-it-draws-1400ms.png` (0.93).

**Widths.** The drawing is 264 px wide in a window of 320, 304 at 360, 334
at 390, 659 at 768, 774 at 900 (its widest), 506 at 1024 and 607 at 1280
and 1600; it is 347 px tall at all of them. Pictures:
`hamlet-readiness-2-shape-1280.png`, `hamlet-readiness-2-shape-390.png`,
and `extra/shape-320.png`, `shape-360.png`, `shape-768.png`,
`shape-900.png`, `shape-1024.png`, `shape-1600.png`; the fold open,
`extra/shape-figures-open-1280.png` and `shape-figures-open-390.png`.
Nothing collides, overflows or is too small to read at any of them. At 320
the second entry of the key takes two lines, and the script asks for them
to be of even length so that no word is left alone.

## 2. The count behind it (new keys in the facts)

The facts as the poet left them give Hamlet's verse and prose by scene and
the seven speeches by scene. They do not give the order inside a scene, and
the drawing needs it. I counted it from the text printed here and added it
to the lens's facts under two new keys, without touching the keys that
were there:

- `inOrder`: 47 runs of his words in the order he speaks them. Each is
  `{ scene, kind, words }` with `kind` verse or prose as this text sets it.
  Speeches of one kind that follow each other in a scene make one run. The
  seven speeches to himself are runs of their own with `toHimself: true`,
  this speech has `thisSpeech: true`, and those eight carry `read`, the
  place of the speech in the reader (for example `hamlet/a3s1:46`).
- `inOrderKey`: a working note that says what `inOrder` is. The build
  takes it out, as it does every key ending in Key.

The command, and what it printed (v is verse, p is prose, the number is
words, `*` a speech to himself, `!` this speech). Run last at 12:03:

    $ node remake/works/hamlet/count-order.mjs
    1.2  v120 v260* v381
    1.4  v491
    1.5  v53 v159* v473
    2.2  p1147 v13 p12 v19 p284 v7 p8 v93 p3 v31 p170 v459*
    3.1  v262* v35 p346
    3.2  p397 v316 p248 v8 p179 v24 p37 v26 p20 v27 p379 v9 v100*
    3.3  v193*
    3.4  v1347
    4.2  p154
    4.3  p192
    4.4  v85 v277*
    5.1  p702 v322
    5.2  v564 p565 p61! v488
    47 runs in 13 scenes (* a speech to himself, ! this speech)
    ok  lines of verse, words of verse and words of prose by scene equal hamletByScene
    ok  the runs of each scene add up to its words of verse and of prose
    ok  the 7 speeches to himself have the words and the places of the facts, and all are verse
    ok  this speech is one run of prose with the words of the facts
    ok  every run after this speech is verse (1 run, 488 words)
    ok  all the runs: 11546 words, the totals of the facts
    ok  the facts key inOrder is this count
    all as counted

`node remake/works/hamlet/count-order.mjs --json` prints the value of
`inOrder`. The script reads `site/data/texts/hamlet/` and the reading and
writes nothing. Its rule for a word is the poet's, and its sums by scene
are the poet's own table, so the new key and the old ones cannot disagree
without the script saying so. The examiner counted the same figures with
scripts of his own and left the keys the drawing reads as they were.

**If the examiner corrects `hamletByScene`, `soliloquies` or
`thisSpeech`**, the drawing follows the new amounts by itself. Run
`node remake/works/hamlet/count-order.mjs` all the same. It says which
check fails, and `--json` prints the value `inOrder` should then have.

## 3. What I set in the reading

Each was a small exact edit. After the last of them (10:49) and again at
12:03 the checker ends "no problems", "no warnings", "the printed notes are
fit to print".

### Three headings

| plate | was | is |
| --- | --- | --- |
| `seems` | Hamlet to the Queen, in Act 1, Scene 2 | Hamlet to the Queen |
| `to-be` | Hamlet to himself, in Act 3, Scene 1 | Hamlet to himself |
| `readiness` | Hamlet to Horatio, in Act 5, Scene 2 | Hamlet to Horatio |

The kit prints the place with the heading (beside it on a wide plate, under
it on a phone), so each head said its act and scene twice, and at 320 the
long headings turned over. No label was changed.

### Where four lines turn on a phone

The kit's own choice is good for every other row that turns. These four I
set, because its choice splits a phrase or leaves a leading word at the end
of the first part. Each is the same on all four tabs of its plate.

| row | the kit's own | set | why | turns at |
| --- | --- | --- | --- | --- |
| 32.0 | after word 2 | after word 4 | Two stops are equally near the middle and the kit takes the first, a comma, which parts a clause of three words after its first word and puts the semicolon inside the second part. Word 4 carries the semicolon: the last clause then has a line to itself. | 320 to 360 |
| 32.5 | after word 2 | after word 3 | The kit parts the adjective (word 2) from its noun (word 3), the pair the Naming tab marks; the noun then stands on the second part and its stroke is not drawn. Set after the noun, the line turns as row 32.3 does, before the phrase that says where the sign shows. | 320 |
| 32.8 | after word 4 | after word 3 | Word 4 is the word that begins the clause which follows. It is not in the kit's list of short leading words, so it was left at the end of the first part. | 320 to 350 |
| 46.3 | after word 4 | after word 3 | Word 4 is a preposition of seven letters, not in the kit's list, left at the end of the first part. | 320 |

Pictures, the kit's own choice beside the turn as set:
`extra/turn-seems-320-the-kits-own.png` and `turn-seems-320-as-set.png`
(rows 32.0, 32.5, 32.8 on the Sentence tab);
`extra/turn-seems-360-the-kits-own.png` and `turn-seems-360-as-set.png`
(row 32.0); `extra/turn-seems-naming-320-the-kits-own.png` and
`turn-seems-naming-320-as-set.png` (row 32.5 on the Naming tab);
`extra/turn-to-be-320-the-kits-own.png` and `turn-to-be-320-as-set.png`
(row 46.3 on the Beat tab). To undo one, take its entry out of the plate's
`turn`.

Every other `turn` I had set in earlier rounds is taken out again, because
the kit's own choice became the same. The last three went at 10:49, after
the seventh mending: rows 32.3, 46.1 and 46.2 now keep their short leading
word with the word after it by the kit's own rule.

Where the lines of the two verse passages turn now (listings of 11:32,
11:48 and 12:15; no line of verse turns at 390 or wider):

- `seems`: 9 of its 11 rows at 320; 7 at 330 to 350; 4 at 360 (32.0, 32.6,
  32.7, 32.10); 2 at 375 (32.6, 32.7).
- `to-be`: 8 of its 10 rows at 320; 6 at 330; 4 at 340; 2 or 3 at 350 and
  360; 1 at 375 (row 46.9, at its dash).

### One stroke on the Chain tab

`join: [[2, 3]]` on the second passage's Chain lens joins part 2 (row 46.8,
words 6 and 7) to part 3 (row 46.9, words 0 and 1). The caption says that
the line stops on those words and the next line begins with the same
words, and the two parts carry one tag (`B`) and labels that name one word,
the second with "again", so this is the tie the caption and the labels
name. Without it the kit leaves the stroke out, because it runs far between
the two lines, and the tab named Chain shows six underlines and no link
(`extra/kit-chain-without-the-join-1280.png`, `-390.png`, `-320.png`).
With it: `hamlet-to-be-2-chain-1280.png`, `hamlet-to-be-2-chain-390.png`,
`extra/kit-chain-1280-close.png`, `extra/kit-to-be-320-tab2.png`. To undo
it, take the line out.

I set no `join` on the Crossing or the Naming lens. The kit's own strokes
are what their captions say.

## 4. Faults on the screens

I opened every picture named in this file after it was last taken: the 34
of the picture tool (the set of 12:03 is byte for byte the set of 11:10,
which I looked at one by one) and the 86 in `shots/extra/`. Pictures named
without a folder are in `remake/works/hamlet/shots/`.

### Mine, and mended

- **The key said less than the facts.** The facts record an eighth,
  four-line speech to himself, not among the seven. The ink entry reads "a
  speech to himself of 12 lines or more".
- **The second entry of the key turned over at 360 px.** Shortened; it
  fits one line from 360 up and takes two even lines at 320.
- **The drawing-in ran past three seconds.** It is whole at 2.34.
- **The pointer's note pushed the key down** when it took a second line.
  The note now stands under the key, in the room the kit keeps, and the
  script measures that room (section 1).
- **Number style.** Figures on the drawing, number words in the note, no
  comma in the number of a line; the fold is named "The numbers".
- **The three words named in a note were in the note's own italic.** They
  now stand upright (12:02).
- **Heads said the place twice.** Section 3.
- **My pictures of the drawing while it draws showed it finished**, because
  the picture took longer than the drawing. They are now made by stopping
  the drawing inside the page (section 1).

### The first list (06:01), struck where the fault is gone

- ~~K1. `readiness` / Crossing: the two ties wrong or missing wherever the
  prose does not break as at 1280.~~ Gone. The strokes of the figure are
  now of one kind at every width: two strokes that cross between two lines
  at 375, 390, 520, 1280 and 1600; two arcs that nest under one line at
  880; and no stroke, with the parts lettered a, b, b, a in their colors,
  at 320, 340, 360, 414, 430, 600, 768 and 1024
  (`hamlet-readiness-0-crossing-1280.png`, `hamlet-readiness-0-crossing-390.png`,
  `extra/kit-crossing-320.png` to `kit-crossing-1600.png`, fourteen
  widths).
- ~~K2. Lines of a piece's own drawing show whole before their time.~~
  Gone; the script no longer works round it.
- ~~K3. `seems` / Rhyme: the marks for the two returning words look
  broken.~~ Gone in three of its four parts: every place of a thread has a
  dot, no word is joined to itself, and the key says where each sound comes
  back. What is left is small and is under "Still there", 6.
- ~~K4. A double word space on the Verbs, Chain and Words tabs where the
  Beat tab has a remark number.~~ Gone.
- ~~K5. `to-be` / Beat, 390: remark numbers touch the word that
  follows.~~ Gone (`extra/kit-beat-390-close.png`).
- ~~K6. The lower end of a tie stands on the letters.~~ Gone
  (`extra/kit-chain-1280-close.png`, `extra/kit-naming-1280-close.png`,
  `extra/kit-naming-390-close.png`).
- ~~K7. The place in a plate's head is hidden on a phone.~~ Gone: it
  stands under the heading (`hamlet-seems-0-sentence-390.png`).
- ~~K8. Two labels in one color in a key, on two rows.~~ Gone as the kit's:
  labels of one tag now share a row. What is left is the reading's
  (section 5, 1).
- ~~K9. `readiness` / Crossing, 1280: the key broken into two columns.~~
  Gone.
- ~~K10. The line the pointer fills is one line tall.~~ Gone: the kit
  keeps two lines on a phone and the line stands under the key.
- ~~K11. `readiness` / Shape at 768: the caption held to the left three
  fifths.~~ Gone (`extra/shape-768.png`).
- ~~K12. The senses under words: too near the next line at 1280, 11 px at
  390.~~ Gone at 360 and wider: the two senses under row 161.0 words 4 and
  5 stand side by side with a hairline between them, and the senses are 12
  px at 390 (`extra/kit-readiness-words-1280-close.png`,
  `extra/kit-readiness-words-390-close.png`,
  `extra/kit-readiness-360-tab1.png`). At 320 it is still there ("Still
  there", 7).
- K13. Length on a phone. The lead has said this stays; see below.
- K14. Tabs at 320. Still there ("Still there", 3).
- ~~K15. The foot of the page: the fold's marker outside the column, the
  same general phrases for every tab, the site's name set small.~~ Gone:
  each caption has its own entry (`extra/sources-open-390.png`,
  `extra/sources-open-1280.png`, `hamlet-page-390-0.png`).
- K16. The plain table shown when a drawing fails. The lead has said this
  stays; see below.

Reported in later rounds and now gone: a key row's last word alone on its
line; an article or a short preposition left at the end of a turned line's
first part (rows 32.3, 46.1, 46.2); row 46.9 turned away from its dash (it
now turns after the dash at 375 and under, and is whole from 390); the
thread key that said both sounds came back inside the line.

### Still there after the second mending

Worst first. Each picture named was taken after 11:10. The first eight are
the kit's to mend; I have worked round none of them.

**1. `to-be` / Beat, every width: the tenth line has no pause mark.** The
caption counts five lines that stop inside the line, the fifth, sixth,
eighth, ninth and tenth, and remark 6 says of the tenth that it stops at
its dash. The drawing shows the pause mark (two upright hairlines, "a
pause" in the key) in rows 46.4, 46.5, 46.7 and 46.8 and none in row 46.9.
The dash stands inside word 4 of that row, two words joined into one
token, and the reading can mark a pause only between two tokens. So the
drawing shows four of the five stops its caption counts. On a phone of 375
and under the row even turns at that dash, as rows 46.4 and 46.7 turn at
their pauses, and still carries no mark. Pictures:
`hamlet-to-be-0-beat-1280.png`, `hamlet-to-be-0-beat-390.png`,
`extra/kit-beat-1280-close.png`, `extra/kit-beat-390-close.png`,
`extra/kit-to-be-320-tab0.png`, `extra/kit-to-be-360-tab0.png`,
`extra/kit-to-be-375-tab0.png`. Mend: let the beat lens draw a pause at a
dash inside a joined word where the reading asks for one. The examiner's
notes say the same of this row and ask for the tab to be looked at again.

**2. `seems` / Naming at 320 (not at 330): the figure joins two of its
three lines.** The strokes tie adjective to adjective and noun to noun
down rows 32.3, 32.4 and 32.5. At 320 row 32.3 turns after word 2, its
second part lies between it and row 32.4, and the two strokes from row
32.3 to row 32.4 are not drawn; the two from row 32.4 to row 32.5 are. A
reader sees the second and third lines tied and the first left out.
Picture: `extra/kit-seems-320-tab1.png`; all four strokes at 330,
`extra/kit-seems-330-tab1.png`. The seventh mending gave a crossing and an
antithesis the rule "all alike or none"; a figure set in line (`draw:
align`) needs it too. No `turn` can mend it, because row 32.3 is too long
for 264 px however it turns.

**3. `seems`, all four tabs at 320 (not at 330): the tabs take two rows,
the fourth alone on the second.** The four names need 268 px and have 264.
The seventh mending's rule for the smallest phones does not take effect:
in `site/css/atlas.css`, line 136 sets `.plate-tabs button` to a letter
spacing of .14em, and line 137, `.plate button`, of the same weight and
later in the file, sets it back to .17em. The spacing measured on the page
is still 1.955 px, which is .17em. With .14em the four would need about
260 px. Pictures: `extra/kit-seems-320-tab0.png` to `-tab3.png`.

**4. Where a line of verse turns by the kit's own choice.** Mended on this
piece by the four turns of section 3, but the rule will choose the same on
other pieces. (a) Of two stops equally near the middle the first wins,
even where the second is the heavier (row 32.0: a comma chosen before a
semicolon). (b) Where no stop is near the middle the browser evens the two
parts, and so parts an adjective from its noun (row 32.5) or leaves a
leading word that is not in the kit's list at the end of the first part
(row 32.8, row 46.3). The heavier stop could win a tie; and the list could
take the longer prepositions and the words that begin a clause. Pictures:
the four pairs named in section 3.

**5. A mark parted from its number at the end of a line.** "Appendix" from
its numeral in a source line under "More from Auden" at 390, 768, 1024 and
1280 (`hamlet-page-1280-3.png`, `hamlet-page-390-5.png`); "paragraph" from
its number in "What each caption stands on" at 390 and in the sources at
414; "chapter" from its number in "What each caption stands on" at 414;
"Appendix" from its numeral and the Gospel's name from its chapter and
verse in the sources at 320 (`extra/sources-open-320.png`,
`extra/sources-open-390.png`, `extra/sources-open-414.png`). Of 80 such
marks on the page two are parted at 320, none at 360, two at 390, two at
414 and one at 768, 1024 and 1280. Cause: the list of words kept with
their number in `site/js/rich.js`, line 9, has Chapter with a capital only
and has no Appendix, paragraph, section or book of the Bible.

**6. `seems` / Rhyme.** (a) Every width: row 32.9 word 7 is both a place of
a thread and the first word of the rhyme. It is set whole in the thread's
plum, so its rhyming letters are not in the rhyme's ochre, while its
partner's are (row 32.10 word 8). The one rhyme of the passage shows one
colored tail; the letters a and a and the arc at the line ends still say
it (`hamlet-seems-3-rhyme-1280.png`, `hamlet-seems-3-rhyme-390.png`,
`extra/kit-rhyme-1280-close.png`, `extra/kit-rhyme-390-close.png`). (b) At
320 and 360, where row 32.0 turns, the dotted stroke from its word 0 ends
over the second part while the dot of the second place (word 8) stands
under that part, so stroke and dot do not meet
(`extra/kit-seems-320-tab3.png`, `extra/kit-seems-360-tab3.png`).

**7. `readiness` / Words at 320: two senses on two levels.** The senses
under row 161.0 words 4 and 5 do not fit side by side in 264 px; the second
is set a line lower and stands 2 to 3 px above the ascenders of the next
line of the passage (`extra/kit-readiness-320-tab1.png`). At 360 and wider
they are side by side.

**8. Small.** In "What each caption stands on" and the sources, on a
phone, a line sometimes ends well short of the measure before the last
line of an entry, because the browser evens the last lines (the Sentence
and Chain entries at 320, the Rhyme entry at 390:
`extra/sources-open-320.png`, `extra/sources-open-390.png`). In
`readiness` / Crossing the last marked run, words 43 to 46 of row 161.0,
parts over two lines at 375 (after its first word) and at 390 (before its
last): it is prose, and longer than the kit holds together in prose
(`extra/kit-crossing-375.png`, `hamlet-readiness-0-crossing-390.png`).

**For the lead to know, not a fault.** A chain's stroke from the end of one
line to the start of the next is left out unless the reading names it
(section 3). Named, it is drawn in the quiet tone, not in the color of the
two parts it joins (`extra/kit-chain-1280-close.png`).

### What the lead has said stays

- Two rows of the first passage (32.6 and 32.7) turn at 375 on every tab,
  though they would fit, for the room the Rhyme tab's letter and arc need
  (`extra/kit-seems-375-tab0.png` to `-tab3.png`).
- A long plate is long on a phone. At 390 the plates are 930 to 1,442 px
  tall; on the Beat tab the six remarks stand 599 to 912 px under the
  numbers they explain (`hamlet-to-be-0-beat-390.png`).
- The plain table that stands in for a drawing whose script fails. I took
  a fact away in a test to see it: key names such as `hamletByScene` and
  `firstProse` are printed, and at 390 its columns run off the plate
  (`extra/kit-plain-table-when-a-fact-is-missing-1280.png`, `-390.png`). It
  shows only if one of the four keys goes missing.

### Looked at and found right

The Sentence, Naming, Words and Rhyme tabs of the first passage at 1280
and 390, and all four at 320, 360 and 375 apart from what is listed; the
Beat, Verbs, Chain and Words tabs of the second passage at 1280 and 390,
and all four at 320, 360 and 375, with the Words caption the examiner
changed; the Crossing, Words and Shape tabs of the third passage. Verse is
set at 29 px at 1280 and 16.5 px on a phone, the prose of the third
passage at 26 and 20 px, the senses under words at 13.5 and 12 px, the
notes and remarks at 14.5 and 13 px. No page is wider than its window from
320 to 414, and the console has no error. The title, "The passages", "What
Auden said", "More from Auden", "Read on", the sources and the two folds at
the foot read well at both widths. No speaker's name is printed on this
piece, so no `speakers` gloss is needed.

## 5. What in the reading I think is wrong

None of this is mine to change.

1. **`to-be` / Verbs: one row of the key for two kinds of mark.** The five
   forms of one verb and the one verb with a plural subject (row 46.5,
   words 8 and 9) share the tag `subject`, so the key has one blue row,
   "has a subject, the only person", which reads as if the second phrase
   explained the first. The caption tells the two apart.
2. **`to-be` / Beat: the caption and remark 6 against row 46.9.** See
   "Still there", 1. The reading cannot mark the pause as the kit stands,
   and its own notes say so; a reader of the page is told only by remark 6.
3. **`to-be` / Beat, remarks 1 and 6: words named as words are not set
   off.** Remark 1 names two words of row 46.0 and remark 6 three of row
   46.9. They are in the remark's own italic. The kit sets a word between
   asterisks upright in a remark (README, "The small notes beside a
   passage").
4. **"More from Auden": words and titles in roman.** The last paragraph
   cites three phrases of the second passage (row 46.9 word 7; row 46.3
   words 6 to 8; row 46.5 words 6 and 7) with no italics, where the rest of
   the page sets the play's words in italics. Other paragraphs name the
   play as a title, another play and a book of Auden's in roman, where the
   source lines under them set titles in italics
   (`hamlet-page-1280-3.png`).
5. **The last sentence of the Shape caption beside the drawing.** It
   reports Auden as saying that with other people Hamlet mostly speaks
   prose. The drawing shows about as much hairline over the threads as
   under them, and the examiner's count is 4,894 words of verse to others
   and 4,904 of prose. The caption gives the sentence as Auden's and
   claims no more, and the reading's open list holds the point; I note it
   because a reader will see it.

### Proposed for the reading

- Verbs: give the mark on row 46.5 words 8 and 9 a tag of its own, so that
  the key has a row and a color for "the only person" (or reword the two
  labels so that one row reads as one thing).
- Beat, remarks 1 and 6: put the words named between asterisks.
- "More from Auden": put the phrases cited from the passage, and the
  titles, between asterisks, as the sources do.
- No `speakers` gloss: no speaker's name is printed.

## 6. The last check

At 12:03, after my last edit to the script (12:02:53); the reading was last
changed by me at 10:49:13, and the kit last changed at 11:05:49 (its record
at 11:07:44, the README at 11:08:08):

    $ node build/pieces.mjs hamlet
    $ node build/tools/check-reading.mjs hamlet     ->  no problems / no warnings / the printed notes are fit to print
    $ node remake/works/hamlet/count-order.mjs      ->  all as counted
    $ node build/tools/shoot.mjs hamlet --out remake/works/hamlet/shots --page
    ...
    nothing reported; now look at the pictures

So there is nothing reported to account for. The 34 pictures were written
between 12:03:08 and 12:03:36. The pointer, the frames and the links of the
Shape tab were tried again from 12:05 to 12:08, and its other pictures
taken from 12:08 to 12:10. The pictures of the other tabs at 320, 360 and
375, of the Crossing at fourteen widths and of the foot were taken from
11:20 to 11:28, the pairs that show the turns at 11:33, and the Naming tab
at 330 at 11:48. No file of the kit changed between 11:05:49 and the
writing of this record.
