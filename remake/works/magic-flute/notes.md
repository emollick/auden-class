# The Magic Flute: the poet's notes

The reading is `reading.json`. On 2026-10-03 at 07:52 UTC
`node build/tools/check-reading.mjs magic-flute` ended with "no problems",
"no warnings" and "the printed notes are fit to print". Everything below
was read on 2026-10-03. Words of the libretto are pointed at by row and
word number, as the checker's proof numbers them.

## The view

Auden's fullest statement on the opera is one page of "Balaam and His
Ass" (*The Dyer's Hand*, pp. 134-35). He sets the opera beside *The
Tempest*, calls it overoptimistic and pelagian, says Tamino stands for
the spiritual and Papageno for the natural, gives the reason each is
rewarded, prints two lines of the last chorus, four lines of the duet
and three lines of Caliban, and ends with what the opera holds about
nature and spirit. The piece is built on that page: the three passages
are the place where the two men give the answers he names as the
reasons, the Queen's aria (the lead and the record), and the very lines
he prints.

## Why these passages

**1. `trial` (Act 2, Scene 3, spoken).** The scene Auden keeps coming
back to: he opens the lecture of 1943 with it, retells it in the Tempest
lecture of 1947, and he and Kallman call it Papageno's trial in 1956.
The same verb is put to both men and the two answers are the "courage"
and the "humility" of the view. It can be seen: one verb twice, death
named twice, three one-word answers against a speech of reasons. Rows
2.0 to 9.0 are the Speaker and Tamino; the second block is row 11.0 from
word 16 (the Second Priest's question; words 2 to 15 are his aside to
the Speaker) and rows 12.0 to 16.0. Row 10.0 (the handshake) is left
out. After row 16.0 the scene goes on: Papageno says his refusal twice
more, is told of a girl like himself, and agrees only to see her and
keep silent (zeno file lines 1847-1877).

The hosted English libretto has no version of this spoken scene, so the
reader's English is the glosses under the phrases. That is why this
word tab has 37 glosses, far more than any other piece. Each is at most
six words and sits under the phrase it translates.

**2. `queen` (Act 2, Scene 8, the aria).** The lead in pieces.json, and
the record on the page. Shown in the German of 1791 with the hosted
English under each line. Four things can be seen in eight lines: a
measure that the libretto gives to no other single character, a rhyme
scheme whose closing words are the words for nevermore and oath, a
threat built as a crossing, and an English version that keeps the beat,
drops the two-syllable rhymes and undoes the crossing. Auden says
nothing I could find about this aria by name. What bears on it: the
remark that a supernatural character like the Queen cannot be given a
courtesan's speech (*The Dyer's Hand*, p. 491), the mother's curse in
the list of what Pamina must learn to endure (Preface, p. 131), and the
essay on translating (feminine rhymes, p. 488; Mozart repeating lines,
p. 490).

**3. `weddings`.** The six lines Auden prints on p. 134, in the opera's
order (he prints the chorus first), with Caliban's three lines beside
them as he sets them. The cut `o-magic-flute/weddings` holds the four
list lines of the duet (rows 0.0 to 3.0) and the four lines of the last
chorus (4.0 to 7.0); the plate shows 0.0 to 3.0 and 6.0 to 7.0, so the
build prints its sign of omission between duet and chorus.

**Left aside.** Papageno's first song (used only as a ground: the net
for girls, `magic-flute/act-1` blocks 35 and 36). Sarastro's aria. The
chorale of the two armed men, whose lines are of five and six beats
(Auden says nothing of it). The duet of Pamina and Papageno, which
Auden and Kallman discuss for the rhythm of its setting (p. 490): the
point is the music's time against the verse, and the score is not here.
The second lead in pieces.json (who is good and who is bad changes
between the acts): the Preface of 1956 has a remark on the positive
part the Queen plays in Act 1, but I read it only as one snippet and
did not build a lens on it.

## The lenses, and what each stands on

Every ground is in the lens's `grounds`. Notes on the doubtful places
only.

- **trial / Words.** All glosses are from Adelung entries opened in this
  session (list below). The verb of rows 2.0 (word 9) and p:11.0 (word
  21): Adelung "to obtain by fighting, in the higher style", first
  example with the word for victory that Tamino uses at 7.0 word 4. The
  adjective at 7.0 word 7: Adelung's sense 3, "in the noble style". The
  noun at 7.0 word 10 is *not* a noble word in Adelung (sense 1 is "now
  usual only in common life and in the biblical style"; sense 3, the
  commonest, is pay for manual work), so the caption does not call it
  one. The verb at p:12.0 word 1: Adelung says it is used of persons
  "only in the noble and higher style", so Papageno is handing the
  priest's high word back. The phrase at p:12.0 words 1 to 5 is an
  idiom that Adelung gives under *Sache*. The noun at p:12.0 word 39:
  Adelung under *Weib*, sense 1 (the female of every animal, "only in
  the diminutive", with the elephant, the cock, the carp and the
  sparrow as examples) and remark 1 (the diminutive is "more usual" of
  married women "in the familiar kinds of speech"). The verb at p:12.0
  word 40: Adelung under *Fangen*, sense 2.2. The last word, p:16.0
  word 3: Adelung under *Ledig*, sense 2.2 (c), with (b) vacant and (e)
  free of bonds; the note names these and draws nothing from them.
- **trial / Answers.** "Three questions, each answered in one word" is
  true of the rows shown (2.0, 4.0 and 8.0 are questions; 6.0 is a
  warning, answered by the sentence of 7.0). Just before the passage
  the Speaker asks what the strangers seek and Tamino answers in three
  words; the caption speaks of the passage shown, and `about` gives
  that answer. "His last answer" is Auden and Kallman's phrase for row
  16.0; it is his last speech in the passage shown, not in the scene.
- **trial / Wishes.** Zeugma: the verb at 7.0 word 2 is said once and
  serves both halves (Silva Rhetoricae's definition and example).
  "Papageno never enters fire or water": Act 2, Scene 28 of the
  libretto has only Tamino and Pamina go through (English libretto,
  `act-2` block 297). He does take on the trial of silence later in
  this scene and fails it; the Speaker tells him in Scene 23 that the
  gods remit his punishment. So the caption says only that the threat
  of row 13.0 is not carried out.
- **queen / Beat.** See "Scansion" and "The count of five-beat lines"
  below. "Classic line of German verse drama since Lessing's *Nathan*":
  German Wikipedia, "Blankvers" and "Jambischer Fünfheber"; the caption
  says "unrhymed" because that is what those articles say of the stage
  line, and the Queen's lines rhyme.
- **queen / Rhyme.** a b a b, c d c d; the a and c rhymes have two
  syllables, the b and d rhymes one. Corson, quoted by Baum (chapter
  4), says that with alternate rhyme the concluding rhymes of a
  four-line stanza are more emphatic; he says it of the stanza of *In
  Memoriam* turned into alternate rhyme, and the caption applies it to
  this scheme as a general fact about rhyme by turns.
- **queen / Threat.** Chiasmus of clauses: condition (row 2.0), penalty
  (3.0), penalty (4.0 and 5.0), condition (6.0). Words 1 to 4 of rows
  2.0 and 6.0 are the same four words. The last line (7.0) is outside
  the figure. `join` is "none": the two statements of the condition
  stand four lines apart, where no stroke is drawn, and the default
  drawing of "cross" would have joined two lines of the penalty.
- **queen / English.** Counted on `magic-flute/act-2` block 45: the
  eight rows have 10, 11, 9, 10, 9, 10, 10, 10 syllables and five beats
  each (the two rows of nine begin on a beat). Rows 45.0 to 45.3 do
  not rhyme; 45.4 rhymes with 45.7 and 45.5 with 45.6, on one syllable.
  In the libretto's own order the line that answers the German seventh
  line stands fifth (45.4), so the plate lists the pair rows as 45.0 to
  45.3, 45.5, 45.6, 45.4, 45.7 to set each English line under its
  German. The caption and a caveat say so.
- **weddings / Words.** Who sings: the libretto heads the four list
  lines Papageno and the woman by turns, and the last four lines of the
  opera "chorus of priests" (zeno file lines 3431-3445 and 3550-3558).
- **weddings / List.** Anaphora on rows 1.0 to 3.0 (three lines in a
  row begin with the same word); row 0.0 begins with another word and
  is tagged apart. With `draw: "align"` the kit stands a spine at the
  left for tag A and at the right for the names (tag C), and joins the
  two parts of tag D (word 2 of rows 0.0 and 1.0) with a stroke: for
  the artist to judge. The sentence about the parents' likeness rests
  on four lines of the 1791 libretto that Mozart did not set (the
  Mozarteum's edition says so in a note, citing Gernot Gruber's
  foreword to the Neue Mozart-Ausgabe); the caption says "in words
  Mozart did not set".
- **weddings / Caliban.** Auden's comparison, with four ties. Prospero's
  charge is `tempest/a1s2` block 198. The gift hoped for from the gods
  is in the four lines both sing before the list (zeno file lines
  3423-3429), which Mozart did set.

## Scansion (queen, rows 0.0 to 7.0)

Pattern: five beats, each after a lighter syllable; rows 0.0, 2.0, 4.0
and 6.0 have eleven syllables, the others ten. I said each line in my
head and marked it by word number. Where another hearing is fair:

- 0.0: the first syllable of word 5 carries the fourth beat lightly
  (marked as a half stress); it can be heard unstressed.
- 1.0: word 0 is stressed where the pattern has a light syllable (the
  first foot is turned). Word 4 carries the fourth beat lightly.
- 2.0: word 0, the verb, is marked light and words 1 and 3 stressed, as
  the sense (not through *you*) asks. It can also be heard with a
  stress on word 0. In word 5 the first syllable has the word's stress
  and the fourth beat; the third syllable has the fifth beat and the
  rhyme and is marked as a half stress.
- 3.0: words 1 and 3 are marked as half stresses on the first two
  beats; either can be heard light. In word 5 both the first and the
  last syllable are marked stressed: the last carries the rhyme and the
  fifth beat.
- 4.0, 5.0, 6.0: the fourth beat falls on a light word (word 4, word 3
  and word 5), so each line has four full stresses. In 4.0 word 1 is a
  half stress.
- 7.0: word 0, a command, is marked stressed in the light place, so
  that two stresses open the line; it can be heard lighter, and then
  the line is regular. Pauses are marked after words 1 and 2, where the
  print of 1791 has its dashes. The caption says "can be heard".

No caption leans on a half stress.

## The count of five-beat lines

The claim: in the libretto as printed in 1791, lines of five rising
beats are given to the Queen (ten) and to groups (a chorus of priests,
four; the two armed men, three; the three boys, two), and to no other
single character. Method: a script (scratchpad `mf/five.py`) counted
syllables in every verse line of the zeno.org text and listed those
counted from 9 to 14, with the speaker; I then read each listed line.
Lines at zeno file numbers 467 and 469 (Act 1, Scene 6) and 2212-2226
are the Queen's; 2598-2604 the chorus; 3080, 3084, 3086 the armed men;
3337, 3339 the boys. The eleven-syllable lines of Tamino, Sarastro,
Monostatos and the choruses are in a triple rhythm of four beats; the
twelve-syllable lines of the priest and Tamino in Act 1, Scene 15 and
two of the armed men's have six beats. Left out, and named in a caveat:
the armed men's line at 3088, which can be heard with five beats or
six, and the two stammered lines that open the duet (3395, 3399). The
script's syllable counts are rough (it miscounts a few words), which is
why the range read was wide.

## Where each fact was read

- **The German text.** `.cache/originals/mozart_zauberfloete_de_zeno.txt`
  (zeno.org, from the libretto printed in Vienna in 1791), cut with
  `node build/tools/original.mjs cut` into `site/data/texts/o-magic-flute/`
  (`trial`, `queen`, `weddings`). The three passages were compared with
  the Mozarteum's transcription of the first print: Stiftung Mozarteum
  Salzburg, Digital Mozart Edition, Libretti-Edition, KV 620,
  `https://dme.mozarteum.at/DME/libredition/para.php?idwnma=7137&v=421&p=423&line=1153&end=2456`.
  The text as Mozart set it (the repeats in the fifth and sixth lines of
  the aria, the one word in its last line, the end of the duet):
  `https://dme.mozarteum.at/DME/libredition/single.php?idwnma=7137&v=420&line=1153&end=2456`.
  The zeno file has misprints elsewhere (at its lines 3088 and 3411);
  none in the rows shown.
- **The English libretto.** `site/data/texts/magic-flute` (act-1, act-2)
  and `remake/research/D_texts.md` section 3 for its title page
  (New York: F. Rullman, Italian and English, no translator, no date).
  It has a shortened, recast dialogue before the aria (act-2 blocks 39
  to 43) and nothing for Act 2, Scene 3.
- **Auden, *The Dyer's Hand*** (scan `research/auden/dh.txt`; running
  heads stand at the top of their pages): "Balaam and His Ass", pp.
  134-35, lines 6438-6496; "Notes on Music and Opera", foot of p. 469
  and p. 470, lines 22092-22148, and p. 474, lines 22316-22327;
  "Translating Opera Libretti" (with Chester Kallman), p. 484 (they
  translated the libretto; numbers with spoken dialogue), p. 485 (the
  two prosodies), p. 488 lines 22959-22968 (feminine rhymes), p. 490
  lines 23051-23053 (Mozart repeats lines), p. 491 lines 23103-23108
  (the Queen and Violetta).
- **Auden, *The Enchafèd Flood*** (scan `research/auden/ef.txt`, lines
  4600-4604): p. 111. In this scan the page number stands at the foot,
  so the number 110 just above the passage closes the page before.
- **Auden and Kallman, Preface to *The Magic Flute* (1956)**, in
  *Libretti and Other Dramatic Writings* (Princeton, 1993), pp. 129-32:
  read only through the full-text search of the Internet Archive's
  borrow-only scan `librettiotherdra00aude`, phrase by phrase, each hit
  giving a few lines. Running heads seen: 130 inside the sentence on the
  first theme, 131 just before the sentence on Pamina, 132 just before
  the sentence that brings Papageno in; his trial follows on p. 132.
- **"Vocation and Society" (1943)**, in *Auden Studies 3* (Oxford,
  1995): the same way, scan `insolitudeforcom0000aude`. The lecture
  opens with the scene in an English version (its editors' note says
  they could not identify the translation); p. 16 by its running head;
  the sentence on Papageno once woken is on p. 18. Also the research
  notes, C section 27 and appendix H14.
- **"Mozart and the Middlebrow" (1946)**, *Prose*, volume II, p. 290:
  snippets of `prosetravelbooks0000aude` (the book's own notes and
  index give p. 290); research notes H17.
- ***Lectures on Shakespeare*** (ed. Kirsch, 2000), the lecture on *The
  Tempest* (1947): snippets of `lecturesonshakes00aude`; the running
  head of p. 301 follows the last words of the passage, so the passage
  is at the foot of p. 300; research notes H3.
- **Adelung**, *Grammatisch-kritisches Wörterbuch der Hochdeutschen
  Mundart*, second edition, at `http://www.zeno.org/Adelung-1793/A/<lemma>`,
  each entry saved and read: Auch, Band, Begnügen, Bereit, Bestehen,
  Bleiben, Dann, Ebenbild, Einmahl, Erblassen, Erhalten, Erkämpfen,
  Erst, Ewig, Fangen, Gar, Gesetz, Gott, Grund, Herz (1), Hold, Hölle,
  Ja, Jeder, Kämpfen, Klein, Krone, Krönen, Leben, Ledig, Lehre, Liebe,
  Lohn, Los, Magd, Mädchen, Natur, Naturmensch, Nie, Nimmermehr, Noch,
  Prinz, Prüfung, Rache, Sache, Scheuen, Schlaf (2), Schmerz, Schritt,
  Schwur, Schön, Schönheit, Selbst, Sieg, Siegen (2), Speise (2),
  Sprecher, Spät, Stärke, Tod, Trank, Unterwerfen, Unterziehen,
  Verlangen, Verlassen, Verstoßen, Weib, Weichen (1), Weisheit, Weit,
  Wenn, Wieder, Wollen, Zeit, Zertrümmern.
- **Silva Rhetoricae** (`https://rhetoric.byu.edu/`): zeugma, chiasmus,
  anaphora.
- **Baum**, *The Principles of English Versification*, chapter 4
  (`.cache/handbooks/baum-versification-pg21342.txt`, lines 3755-3766).
- **German Wikipedia**: "Blankvers", "Jambischer Fünfheber", and the
  article on the aria (its section on the text: the opera's lines are
  mostly of four beats; the sung text has four three-beat lines).
- **Online Etymology Dictionary**: Manichaeism, Pelagian (for the two
  words Auden uses, glossed in the first entry of what else he said).

## What the page does with this reading (for the artist and the examiner)

- The cut `o-magic-flute/trial` has each speaker's name in capitals as
  the first words of its row. The build (as changed at 07:13) lifts the
  name over the row and keeps the word numbers. The two notes set on
  names (2.0 word 0 and p:13.0 words 0 to 1) give the names their
  English; the build moves them up beside the names.
- The first plate and the third are `beside: true` (two passages of
  equal standing). The second is line under line, so its labels are not
  shown and its first caption says what the small lines are.
- A word named in a caption lights where it stands, but where a mark of
  the tab begins on one of its places, a place that only falls inside
  another mark stays dark (`plate.js`). So that the verb named in the
  first two captions lights in both exchanges, the gloss at 2.0 sits on
  word 9 alone (word 8, the particle before it, has no gloss), and the
  tie on the word for death joins the single words 4.0 word 3 and
  p:15.0 word 9.
- The Words tab of the first plate carries 35 glosses in the lines, some
  wider than the word they sit under (9.0 word 1, p:11.0 word 21, 2.0
  word 9). The kit moves a gloss along or a line lower where two would
  touch; whether that reads well there is for the artist's pictures.
- No `turn` is set; I could not see the page at a phone's width.
- I did not run `build/pieces.mjs` or `shoot.mjs` (they write outside
  this folder), so I have not seen any of this drawn.

## Looked for and not found

- A remark by Auden on the Queen's second aria itself.
- The English translation Auden quoted in 1943 (its editors could not
  identify it either).
- Who made the English of the Rullman libretto, and from what. It is
  printed with an Italian version, yet its aria follows the German
  words closely.
- Mozart's score. What is sung was read in the Mozarteum's edition of
  the text as set and in German Wikipedia. The record on the page was
  not heard.
- Auden and Kallman's own English for the trial scene (*Libretti*, pp.
  156-58, by the editors' note in *Auden Studies 3*), for the aria and
  for the duet: not seen.
- English Wikipedia would not open (429), so German Wikipedia stands
  for the history of the measure.

## Changed since the first version of this reading

- Every gloss now comes from a dictionary entry opened in this session,
  and the wording of several changed with it.
- The third plate was cut again, so that it ends with the opera's last
  two lines, the ones Auden prints.
- A wrong ground was mended: the English libretto does not leave the
  dialogue before the aria out; it shortens and recasts it. What it
  lacks is the spoken trial scene.
- The line about the parents' likeness now says that Mozart did not set
  those words.
- Paraphrases of Auden that ran too close to his sentences were
  reworded, and each page number was checked against the running heads.
- The printed notes (`stands`, `sources`, `caveats`, the `source` lines)
  were written for a reader.

## The lead before the finisher (3 October, 13:53 UTC)

Set from the artist's proposals (art.md, "Proposed for the reading",
faults 2 and c) and the critic's section 5. Edits and copies are in
`lead/`; pictures in `shots/lead/`.

- `queen`, the Threat tab: `"join": [[0, 4], [1, 2]]` in place of
  `"none"` (the artist's proposal 1). No stroke is drawn; a small
  letter stands under the first word of rows 2.0, 3.0, 4.0 and 6.0:
  a, b, b, a. Seen at 1280, 390 and 320. The item of `open` that
  speaks of "join none" is now out of date; the finisher rewords it.
- `queen`: `"turn": { "3.0": 4 }` (proposal 2). It holds whatever
  the kit learns about German possessives.
- `weddings`: the label over the first passage is now "The Magic
  Flute: the duet, then the last chorus", the critic's wording
  (section 5).
- The place beside the heading of `weddings`: the label of the hosted
  part `o-magic-flute/weddings` now ends at its colon, after the act
  and scenes (`index.json` and `weddings.json`). Seen at 1280: the
  heading, the place and the tabs stand on one line, as on the other
  two passages. The labels of `trial` and `queen` stay whole: each
  says something the heading does not.
- No mark of lines left out is drawn on `queen`, now or after the
  lead's change to the build: all eight English lines are shown and
  one is moved, as the English caption, a remark and a caveat say.

Checker after: no problems, no warnings, the printed notes are fit to
print.

## Taken out of the list of what Auden said (the finisher, 3 October)

One entry, the sixth as the list then stood. It reports an essay on opera in
general that does not name this opera, and the lead set the test for it: it
stays only if, cut down to what bears on this page, it still reads as a
whole entry and its quotation still belongs to it. Cut down to its third
sentence it does neither; the reasons are in the finisher’s section below.
True and checked, and kept here whole in case it is wanted. Other pages of
this site cite the same essay (carmen, don-giovanni, dutchman, fidelio,
gotterdammerung, traviata, tristan); none prints its last sentence as a
quotation.

- **“Notes on Music and Opera,” in The Dyer’s Hand (1962), pp. 469–70 and 474**
  Writing of opera in general, he quotes Bernard Shaw, who thought Beethoven
  had a right to rebuke Mozart for giving his noblest feelings to a
  libertine, a peasant girl and a fine lady. He answers that Mozart is
  right: such feelings come to everybody, and opera can show it where a play
  cannot. In a play, how a person speaks is bound to his place in society;
  song is not so bound. Opera, he writes, imitates human willfulness, and
  its great roles are states of will and passion. Operas are harder to write
  now and would be impossible only if belief in free will and in personality
  were given up.
  Quotation: “Every high C accurately struck demolishes the theory that we
  are the irresponsible puppets of fate or chance.”
  Checked: read in the scan of The Dyer’s Hand, research/auden/dh.txt, on
  2026-10-03: Shaw’s remark and the answer to it at the foot of p. 469
  (lines 22092–22107), speech and song, willfulness and the great roles on
  p. 470 (lines 22110–22148), the last paragraph and the quotation on p. 474
  (lines 22316–22327). The running heads stand at the top of their pages.
  Shaw’s three persons are not named by Auden; they are those of an opera of
  Mozart’s, which he does not name here

## The finisher's changes after the critic (3 October 2026, 14:40 UTC)

Begun at 13:54 UTC. The time in the heading is from `date -u` when this
record was closed. Numbers in brackets are those of the lead's thirteen
points for this piece. Set: 11. Left: 6. Passed up: 8.

**How it was done.** Five lists of exact edits, applied with
`build/tools/edit-exact.py`. Each list was written by a script in
`finisher/`, so that no line of the libretto and no sentence of Auden's
was typed: `edits-1-order.json` (the order of the list),
`edits-2-entries.json` (three entries), `edits-3-rest.json` and
`edits-4-rest.json` (the paragraph on the passages, one note, three
tabs), `edits-5-open.json` (the list `open`). `finisher/before.json` is
the reading as I found it; `finisher/diff_paths.py` lists every place
where the reading now differs from it, by path and word count. The
piece has no shape lens and no script of its own
(`site/js/pieces/magic-flute.js` does not exist), so no script was
changed. No `turn`, `join`, `heading`, `speakers`, `beside` or tab
`label` was touched: what the lead set at 13:53 stands as set.

### Every change

**1. `open`, the item on "join none"** (the artist's point e). Wrong: it
said the chiasmus is drawn with underlines only. Now it says what is
drawn: underlines and four small letters. The lead set the join on 3
October; no stroke is drawn; the letters a, b, b, a stand under the
first word of rows 2.0, 3.0, 4.0 and 6.0; row 5.0 takes no letter and
goes on in the color of the second b. Ground: the `join` in the
reading, the lead's section above, and the pictures
`magic-flute-queen-2-threat-1280.png` and `-390.png`, where I read the
four letters under those rows.

**2. Beat, caption, first sentence: the critic's change 14a (1).**
Tested as rule 9 asks, and kept. The eight words ("taken from an
English libretto of the opera") say whose English stands under the
aria. Ground opened: the hosted text `magic-flute/act-2`, block 45, an
Air of eight lines, which are the eight lines set under the German
(rows p:45.0 to p:45.7, in the German order);
`remake/research/D_texts.md`, section 3 (lines 457 to 462), and the
first entry of the sources at the foot, which name the libretto
(Italian and English; New York: F. Rullman, no date; no translator
named). Added: a ground of kind `text` for the claim, and one sentence
in what the caption stands on, with the link to the block ("The
English lines: the English libretto printed here."); `stands` goes
from 58 words to 66. **The eighth mending of the kit will print each
version's label on such a passage, and the lead will take the eight
words out again then.** An item of `open` says so. The new ground and
the line in `stands` can stay when the words go: they are true of the
passage whether the caption says it or not.

**3. Beat, caption, fifth sentence (4).** Wrong: "groups sing all the
others" left the reader to supply who the groups are. Now: "a chorus
of priests, two armed men and three boys sing all the others." The
caption has 119 words. (With "the" before the men and the boys it came
to 121, one over the limit, so the two articles went:
`edits-4-rest.json`.) Ground: before the names went on the page I made
the count of five-beat lines again (`finisher/count5.py`, over
`.cache/originals/mozart_zauberfloete_de_zeno.txt`). I read all 80
lines that stand alone and count ten to twelve syllables, and the 43
short speeches printed on their speaker's line. The same lines as the
examiner's and no others:

- the Queen's ten, at lines 467 and 469 (Act 1) and 2212 to 2226;
- four under the heading CHOR, beneath a stage direction that names
  the Speaker and some priests, at lines 2598 to 2604;
- three under ZWEY MÄNNER, at lines 3080, 3084 and 3086 (line 3088 is
  irregular, and 3078 and 3082 have six beats);
- two under DREY KNABEN, at lines 3337 and 3339.

No other single character and no other group has one. The `source` of
the ground for the count now records this. The tab's `why` keeps the
word "groups": it has 39 of its 40 words.

**4. Rhyme, caption, third sentence, and the tab's `why` (2).** Wrong:
the sentence carried half of a comparison, made about one stanza of
English verse, over to a German aria. I read the handbook's lines
(`.cache/handbooks/baum-versification-pg21342.txt`, 3755 to 3764). The
remark, which Baum quotes from Hiram Corson, sets the stanza of a poem
of Tennyson's, whose two middle lines rhyme together, against the same
lines rhymed by turns, and says the closing rhyme is the more emphatic
in the second. Nothing there speaks of German verse. The lead prefers
the cut, provided the caption still gives its reason from the lines.
It does: which words the two-syllable rhymes pair and whose they are,
which word closes each set of four, and what she swears. So:

- the sentence is out, and the next now begins "The first set closes
  on" and goes on "and the second on" (the closing words are the last
  words of rows 3.0 and 7.0; the word that row 7.0 rhymes with is the
  last of row 5.0); the caption goes from 110 words to 91;
- `why` (35 words to 33) gives the pairing of the two-syllable rhymes
  and the two closing words, and no handbook;
- the handbook's ground is out of `grounds`, its sentence out of
  `stands` (68 words to 49), and the handbook out of `sources`, since
  nothing else on the page uses it;
- the item of `open` on the handbook says what was done.

Ground for the words that are new: the lines themselves (rows 0.0 to
7.0 of the passage) and the marks of the tab (`ends`, `tails`).

**5. List, caption, fifth sentence (3).** Wrong: "parents rejoice in
their likeness" read two ways, glad to be like each other or glad of
themselves in their children. Opened: the libretto's lines after the
list, in the zeno file at lines 3459, 3461 and 3463 (a blank line
stands between each; the critic gave 3458 to 3462): the little ones
play round the parents; the parents feel the same joy; they are glad
of their image. And Adelung under *Ebenbild*, sense 1 (volume 1,
columns 1629 to 1630, at zeno.org): an image like the thing it
pictures, in use only of a person very like another; his first example
of that use is a son who is the whole image of his father. The lines
say what the critic took them to say, so the critic's wording is set:
"the libretto has the parents, with the little ones at play round
them, rejoice in their own image." The caption goes from 110 words to
120, the limit. The ground's claim and source say the same. In
`stands`, "the parents' likeness after" is now "the lines on the
parents after" (67 words to 69).

**6. "The passages", second sentence (5).** Wrong: the clause on
friendship and love read as a stray fact, and the gloss under row 2.0,
word 9 has an "it" that the page tied to nothing. Opened: the zeno
file at lines 1813 to 1817, which are rows 0.0 to 2.0 of the hosted
part `o-magic-flute/trial`. Asked what the strangers seek, Tamino
names the two things (rows 0.0 and 1.0, lines 1813 and 1815, which the
page does not show); the next question, the first row the page shows
(2.0, line 1817), has only a neuter pronoun, at word 4. The paragraph
had 89 of its 90 words, so the tie is one word: "Tamino has *just*
said he seeks friendship and love." It says when he said so, and that
is what makes the question that follows a question about those two
things. The gloss keeps its "it", which is what the line has; its
working `source` now says what the "it" stands for and where. The
critic's fuller tie has no room unless something else in the paragraph
goes: see "For the lead", 5.

**7. First Words tab, the note on p:16.0, words 1 to 3 (7).** Wrong:
after the sense that fits it listed three more and stopped on "free of
bonds or captivity", which left the reader to think the word for
single is also a word for free, with no reason given on the page. Now:
"*Ledig* is unmarried." The note's `source` names the one sense
(Adelung under *Ledig*, 2.2 (c); volume 2, columns 1965 to 1967, opened
again at zeno.org) and records the senses that were cut. The note now
only says its gloss again in another word: see "For the lead", 4.

**8. "More from Auden", the order (10).** Wrong: after the first entry
the dates ran 1956, 1943, 1946, 1947, and then the two essays from the
book of 1962. Now: 1943, 1946, 1947, 1956, then the essay on
translating from the book of 1962. First I searched the reading for
words that point at an entry by number or by place, and found none.
The entries were then moved as raw lines by one exact edit
(`edits-1-order.json`, written by `make_order.py`): the file has the
same 429 lines before and after, twelve of them in a new place. That
each entry is word for word what it was is shown by
`finisher/compare_entries.py`, which takes each entry (what it says,
its quotation, its source) as `build/tools/prose.mjs` printed it before
the move (`prose-before.md`) and after it (`prose-after-order.md`):

| before | after | words said | SHA-1 of the entry, first 12 figures |
|---|---|---|---|
| 1 | 1 | 99 | 972cb1386553 |
| 2 (preface, 1956) | 5 | 107 | ccd41c940dd3 |
| 3 (lecture, 1943) | 2 | 100 | 3b4d850f20e1 |
| 4 (essay, 1946) | 3 | 105 | 62fb735f799b |
| 5 (lecture, 1947) | 4 | 83 | 6850886b4ab9 |
| 6 (music and opera) | 6 | 110, and its quotation | 510cb4a71484 |
| 7 (translating) | 7 | 90 | b2a90e53c5f0 |

It printed "7 of 7 entries stand after as they stood before". The 184
printed paragraphs outside the list were the same, in the same order.
The order therefore stays. Changes 9 to 11 were made after this proof
and are separate edits (`edits-2-entries.json`); run on the page as it
now stands, the same script finds four entries untouched (1943, 1947,
1956, translating) and names the other three.

**9. "More from Auden", the entry from "Notes on Music and Opera"
(10),** sixth as the list stood. The lead's test: it stays only if, cut
down to what bears on this opera's page (its third sentence), it still
reads as a whole entry and its quotation still belongs. I read the
essay's pages again in the scan (dh.txt lines 22086 to 22150, pp. 469
to 470; the last paragraph at lines 22316 to 22327, p. 474). It fails
both halves:

- Cut down, the entry would be one sentence: in a play how a person
  speaks is bound to his place in society, and song is not so bound.
  That is said of plays and of opera in general. The page nowhere
  applies it to this libretto (the critic, section 4: "The page does
  not draw that line, and I did not draw it"), and to apply it would
  be a reading of mine.
- The quotation is the essay's last sentence, on what a high note
  struck true says against the belief that we are puppets. It goes
  with the entry's last sentence, on free will and personality, which
  would be gone. It has nothing to say about speech and social place.

So the entry came out whole. Its `says`, `quote`, `source` and
`checked` are in the section above this one, written there by
`finisher/append_taken.py` from `before.json` and not typed. "Notes on
Music and Opera" is out of the line for *The Dyer's Hand* in `sources`,
since nothing else on the page uses the essay. The entry after it did
not begin with words that point back. The essay stays cited on seven
other pages of the site (carmen, don-giovanni, dutchman, fidelio,
gotterdammerung, traviata, tristan).

**10. "More from Auden", first entry, second sentence (9).** Wrong:
outside quotation marks it carried his four adjectives and ran with
his sentence for five words (the fourth run of the sweep before my
changes). His adjectives matter here: the entry's next sentence
glosses two of them, and the view at the head of the page uses a
third. With the entry of change 9 out, the piece had one quotation
(the view's, 22 words), so there was room for a second. Now the
sentence is out of what the entry says (99 words to 86) and his own
sentence stands over the entry as its quotation: 14 words, cut by
script from the scan and never typed (dh.txt lines 6447 to 6448, on
p. 134, where it opens the paragraph on the opera). A check that
prints no words finds the quotation, word for word, as one run of
those two lines. I read lines 6430 to 6504 again for the rest of the
entry, which says no more than it did. `checked` records it.

**11. "More from Auden", the entry for the essay of 1946 (10),** fourth
as the list stood and third now. The opening clause, that the essay
quotes the questions again, is out. The entry begins "An essay of 1946
calls the story a parable about education" and still reads whole (105
words to 96). It says less than it did, so no ground was needed.

**12. `open` (rule 7).** Besides the two items reworded (changes 1 and
4), four new items stand at the end: the order of the list, the entry
taken out and what that means for the two quotations; the eight words
in the Beat caption; Adelung's two marks of style; and, for the last
reading across the pieces, the two pairs of spellings and the note on
the word for single. This is upkeep and is not counted among the 11.

### Points left, and why

- **(6) "The higher style" and "the noble style".** Opened at
  zeno.org: Adelung under *Erkämpfen* (volume 1, column 1905), which he
  gives to the higher style; under *Hold*, sense 3 (volume 2, columns
  1262 to 1263), which he gives to the noble style; and, to learn
  whether the two marks are one grade, his own entry *Schreibart*,
  sense 2 (volume 3, column 1650), which names a low, a social, a
  learned, a noble, a higher and a sublime style, one after another. (The preface to the second edition, as zeno.org has it,
  does not define the grades.) They are two, so both names stay.
  Nothing is added on how they differ, since nothing I opened says
  how. An item of `open` records it.
- **(8) The two pairs of spellings.** Left, as the lead said. The
  passage and the caption have the libretto's spelling (the word for a
  man of nature in row p:12.0; the word for lot in row 4.0), and a
  note or the line of what the caption stands on has the dictionary's
  headword. Both of each pair are right and nothing on the page says
  so. See "For the lead", 4.
- **(11) art.md, "In the reading, and not mine to set".** d: nothing to
  set. The critic's change 29 took the heading out of that sentence of
  `stands`, which now ends "in the first passage on this page."; each
  of the three headings stands once in the file, as the heading
  itself. a and b: read against the page, place by place. Every word
  and title the artist lists is marked now, all by the critic: in the
  notes of the two Words tabs, in remarks 1 and 3 of Beat, in the
  remarks of English and of Caliban, in the line under the page's
  title, in the source under the view, and in the entries and their
  sources. (The note on row 2.0, word 9 that the artist names has no
  words of its own now; it is a gloss.) e is change 1. c was set by
  the lead.
- **(12) The critic's section 6** (marks of lines left out on
  `queen`): nothing to do. The lead's section above says no such mark
  is drawn. **Section 7, point 2** (two kinds of English, and the page
  says which only at the foot): left, as the lead said. The Beat
  caption announces the second kind (change 2), and the fourth caveat
  says the first is the page's own.
- **Not among the lead's points, and not changed.** The critic's
  section 3, point 9 (tabs that pay little): Rhyme paid least "for the
  reason in 1", and now rests on the lines alone. exam.md, "Still
  doubtful": its second item, on the remark about closing rhymes, is
  settled by change 4; the others stand as they were, in the caveats
  and in `open`, and nothing I may open would settle them.

### The whole-page sweep (rule 2)

`node build/tools/prose.mjs magic-flute`, then
`python3 build/tools/runs-sweep.py` with the four scans (dh, fa, ef,
pearce) and `--only magic-flute --show`. Before my changes it printed
six runs (`finisher/sweep-before.txt`). Its last run, made at 14:18 UTC
after the last edit (`finisher/sweep-after.txt`), printed five, all
with dh.txt and all names or small words:

    [about]  5 words: the queen of the night
    [plates[0].lenses[0].notes[13].note]  6 words: the last two lines of the
    [plates[2].lenses[2].caption]  5 words: one at a time and
    [auden[0].says]  5 words: don quixote and sancho panza
    [auden[3].says]  5 words: the queen of the night
    1 pieces; 5 runs of 5 or more words shared with a scan

The sixth, in the first entry, was a phrase of Auden's and went with
the sentence (change 10). `build/tools/runs.py` on the two entries
whose words changed: the first shares one run of five words with
dh.txt (the two names) and none with the other scans; the entry for
the essay of 1946 shares no run of five with any scan.

### For the lead (worst first)

1. **A title inside a quotation cannot be set apart (page script).**
   `said` in `site/js/piece.js` prints an entry's `quote` through
   `verseQuote`, which takes no marks, in an italic block. The first
   entry's quotation names the play and the opera, and both stand in
   the same italic as the words round them (pictures
   `magic-flute-page-1280-3.png` and `crops/page-390-5-top.png`). If a
   quotation went through `rich`, a title marked `*…*` could be set
   apart there, as it is in the lines of sources. This holds for any
   quotation on the site that names a work.
2. **The eight words in the Beat caption** (change 2) come out when
   the eighth mending of the kit prints each version's label. The
   caption then has 111 words.
3. **The entry taken out, and the piece's two quotations.** If the
   lead puts the entry back with its quotation, the first entry's
   quotation has to go and its sentence be said again in the page's
   own words: a piece has two quotations at most. As things stand the
   essay's last sentence is quoted on no page of the site (the page
   for *La Traviata* gives it in paraphrase); it is kept whole in the
   section above. One thing the lead's test did not ask and I did not
   weigh: that sentence is about a high note struck true, and the
   second passage of this page is an aria famous for its high notes.
   That is my own knowledge. The page says nothing of them and I
   opened no source for them, so nothing was added.
4. **For `remake/LAST-PASS.md`** (I may not write there).
   (a) Two pairs of spellings stand side by side on this page, the
   libretto's and the dictionary's headword: row p:12.0 and the first
   Words caption against the note on that row; row 4.0 and its note
   against the line of what the caption stands on. Both of each pair
   are right and nothing says so. It is near item 2 of that list.
   (b) Item 3 of that list: the note on p:16.0, words 1 to 3 now only
   repeats its gloss (the sense is under the row, in the caption and
   in the note).
5. **"The passages".** The tie between the clause on friendship and
   love and the first question rests on one word, "just". The
   critic's fuller tie ("and the first question asks if he will fight
   for them") needs eleven words, and the paragraph is full at 90.
   The lead may think it worth another clause's place.
6. **Entry numbers in the records of other sessions.** critic.md,
   exam.md and art.md number the entries in the old order. Old to
   new: 1 stays 1; 2 (the preface of 1956) is 5; 3 (1943) is 2; 4
   (1946) is 3; 5 (1947) is 4; 6 is out; 7 (translating) is 6.
7. **Two entries now side by side begin on the same fact.** The entry
   for the preface of 1956 speaks of "their English version", and the
   next begins by saying that he and Kallman put the libretto into
   English. Each is word for word what it was, as the lead asked, so
   I left them.
8. **The list of sources at the foot** is not in order of date (the
   book of 1962, then 1956, 1943, 1946, 1947, 1950). Nobody asked for
   it to be, and I did not move it.

### The checker's last three lines

`node build/tools/check-reading.mjs magic-flute --print`, run last at
14:40 UTC, after every edit (the last at 14:18:08) and after `node
build/pieces.mjs magic-flute` (14:18:57):

    no problems
    no warnings
    the printed notes are fit to print

Its whole output is `finisher/check-last.txt`, the same byte for byte
as `finisher/check-after.txt` (14:18). Before any change it ended on
the same three lines (`finisher/check-before.txt`).

### The pictures I looked at

All are in `shots/finisher/`. Each run of the picture tool ended
"nothing reported; now look at the pictures". One plate at a time:

- **The whole page** (`--page`; 14:19:03 to 14:19:16):
  `magic-flute-page-1280-0` to `-5` and `magic-flute-page-390-0` to
  `-8`, all fifteen. The paragraph on the passages, with "just", is
  in `-0` at both widths; the quotation at the head of the list and
  the entries by date in `page-1280-3` and `-4` and in `page-390-4`
  to `-6`; the sources in `page-1280-4` and `-5` and in `page-390-7`.
- **`trial`, Words** (14:20:07 to 14:20:18), at 1280 and 390: the
  last note, now three words.
- **`queen`, Beat, Rhyme, Threat and English** (14:20:52 to 14:21:09),
  each at 1280 and 390: the three named groups in the Beat caption;
  the shorter Rhyme caption; the letters a, b, b, a under Threat as
  the lead set them; English as the critic's change 23 left it.
- **`weddings`, List** (14:22:19 to 14:22:29), at 1280 and 390: the
  caption at its 120 words.
- **The two folded lists at the foot, opened**
  (`finisher/foot.mjs`, which reads the built site and changes
  nothing; 14:23:05 to 14:23:11): `magic-flute-foot-0-1280.png` (what
  each caption stands on: the lines for Beat, with its new link, for
  Rhyme and for List) and `magic-flute-foot-1-1280.png` (the five
  caveats, unchanged).
- Halves of the tall phone pictures, cut to be read at full size, are
  in `shots/finisher/crops/`.

These cover every tab I changed and the tabs touched by the seven
edits the critic made after its own pictures (the first Words tab,
Beat, English, and the list under the passages). What they show:
nothing is broken or pushed out of place at either width; every
changed sentence stands where it should; the quotation stands at the
head of "More from Auden" and the entries under it run by date; the
book on verse is gone from the sources.

Which kit the pictures show: while I worked another hand changed
`build/pieces.mjs` (14:05:49) and `site/js/kit/plate.js` (14:08:58).
Both are earlier than my build and my pictures, and at 14:40 nothing
under `site/js`, `site/css` or `build` was newer. No label is printed
over either version of the second passage in these pictures.

### Refused by the permission system

Nothing was refused.

## The lead after the finisher (3 October, 15:15 UTC)

Read: the finisher's record above (the entry taken out, what was
left, the sweep, the eight points for the lead, the pictures), and
the head, every caption, the list and the caveats as `prose.mjs`
prints them. Nothing set.

- **For the lead, 1, 2: the page script and the kit.** A title inside
  an entry's quotation, and the eight words of the Beat caption that
  come out when the kit prints each version's label, are on the
  lead's list for after the eighth mending (`remake/LEAD-LIST.md`).
- **3.** The entry stays out and the first entry keeps its quotation.
  Nothing is said of the aria's high notes: no source was opened for
  them.
- **4.** For the last pass; on the lead's list.
- **5, "The passages".** Left: "has just said" carries the tie.
- **6, 7, 8.** Nothing to do.

The snippet test (`build/tools/grams.py`) is running for this piece
with the others; what it finds is set by the lead afterwards.

The piece is through every stage.

## The lead in the last pass (3 October, 16:08 UTC)

The snippet test (`build/tools/grams.py`) found two runs. The third
entry of the list (*Prose*, vol. II) ran five words in the sentence on
what Tamino stakes: loosened by a word, no change of claim
(`lead/edits-grams.json`, before in `lead/before-grams.json`; checker
clean). Two names side by side in a list of pairs, in the fourth
entry, stand. The record is `review/remake/grams/LEAD.md`.

The small ones, the same pass (16:23 UTC), no change of claim: the note on
the word for a man of nature says that the spelling is Adelung's; the
note on row p:16.0, words 1 to 3, which only said its gloss again, is
out (the gloss stays); the last entry of the list no longer says again
that there is an English version ("He and Kallman also wrote about the
work of translating opera."). Left: the dictionary form of the word for
lot in the list of headwords; the order of the sources (no page sets
them by date). Edits in `lead/edits-lastpass.json`, the reading before
in `lead/before-lastpass.json`; checker clean; the first passage
photographed. The record is `review/remake/last-pass/RECORD.md`.

## The lead in the last pass: the measure's wording and the Word tab (3 October, 18:06 UTC)

One wording for the measure of a line, after Ariel's song, from the reader who went through every Beat tab (`review/remake/last-pass/measure/`; the lead's amendments are in `lead-apply.py` there, and the reasons in `review/remake/last-pass/RECORD.md`, item 1). A measure of stresses is named by its beats, by its syllables where the count matters, and by "the line beginning off the beat" or "on a beat". In verse measured by count an accent is a place the count fixes and a stress is what the voice does. "Light syllable", "weak", "the pattern", "the meter" and "scanned" give way to "unstressed", "where the measure has no beat", "the measure" and "marked".

Changed here: `queen`, tab Beat: meterName, points. The edits: `lead/edits-measure.json`; the reading before: `lead/before-measure.json`. The checker says what it said before. No mark changed, and the new sentences were held against the five scans: no run of five.

The Word tab: the 2 tabs named "Words" are named "Word", as on 36 other passages, the front page and Ariel's song (the site critic by word, labels, 5; the reading before: `lead/before-word-label.json`).

## The lead in the last pass: one form for the books many pages cite (3 October, 18:48 UTC)

Printed lines only, and no page number, year or title changed (the tool proves the page
numbers of every line are what they were): `review/remake/last-pass/tools/cite-forms.py`.
The forms: under an entry, `*Prose*, vol. II (2002), pp. …`; in a `stands` line, `*Prose*,
vol. II, p. …`; in the list of sources, `*Prose*, vol. II: 1939–1948, edited by Edward
Mendelson (2002)` the first time and the short form after; and wherever a page of it is
cited under an entry or in the list, `*The Enchafèd Flood* (1950; Vintage Books edition,
1967)`, since every page number of that book on the site is the Vintage edition's (the
one scan all the pieces were written from; its own front matter says so).

Lines changed here (4): `auden[2].source`, `plates[0].lenses[1].stands`, `sources[5]`, `sources[7]`.

The checker says of the piece what it said before. Copy before:
`lead/before-cite-forms.json`.

## The lead in the last pass: one wording for each figure (3 October, 19:55 UTC)

Each Figure tab says in one line under the figure’s name what the figure is. Laid side by
side, the 82 tabs gave the 17 figures that stand on more than one page a different line
on nearly every page. Each figure now has one line, with a tab’s own tail after “; here”;
anaphora, epistrophe, anadiplosis, parallelism and asyndeton keep one sentence whose number
and unit are fitted to the passage. No name, mark, caption or claim changed in this step.
Why and how: `review/remake/last-pass/RECORD.md`, “One wording for each figure”; the table
of lines is `review/remake/last-pass/figures/lead/lead_lists.py`.

Lines changed here (2):

- `plates[1].lenses[2].plain`, the plate `queen`, the tab Threat (chiasmus):
  was “two things said, then said again in the opposite order: here condition and penalty, then penalty and condition”;
  now “a crossing: two things are named, then named again in the opposite order; here condition and penalty, then penalty and condition”.
- `plates[2].lenses[1].plain`, the plate `weddings`, the tab List (anaphora):
  was “the same word at the start of line after line”;
  now “the same word at the head of line after line”.

The checker says of the piece what it said before. Copy before:
`lead/before-figure-wordings.json`, with the list applied beside it.

## The lead after the eighth mending: the Beat caption's first sentence (3 October, 22:46 UTC)

The eighth mending of the kit prints a legend at the head of a passage
set line under line, and on `queen` it says whose the English is and
that each line stands under its German. The caption's first sentence
said both again. It is out, whole (fifteen words; the caption has 104
now), and the item of `open` that waited on this is out with it. The
ground of kind `text` and the sentence in what the caption stands on
stay, as the finisher's note on change 14a says they can. Proved: only
that caption and that item changed (`lead/before-legend-sentence.json`
is the reading as it was). The checker says what it said.

## The lead after the word critic of the last pass (4 October, 00:08 UTC)

A critic read the lines written after the pieces' critics had read: the
figures' lines, the measures and the front page's cards. Its report is
`review/remake/critics/last-pass-words.md`; what the lead did with each
point is in `review/remake/last-pass/RECORD.md`. In this reading, exact
edits, each proved to change only the leaf it names (the file before is
`lead/before-last-pass-words.json`):

- `Unrhymed, this is the classic line of German verse drama`
  became `Without rhyme, the line of five beats is the classic line of German verse drama`

The checker says what it said before.

## The lead after the ninth mending of the kit (4 October, 01:19 UTC)

Keys the ninth mending made, set here by exact edits proved on the parsed
file (the files before are in `lead/`, named `before-ninth-rows.json` and
`before-ninth-lenses.json`; the record is `remake/KIT-CHANGES.md`, "After
the ninth mending: the lead"):

The first entry's quotation marks its two titles with asterisks, so that they stand upright.

The checker says "no problems". No caption or claim changed.
