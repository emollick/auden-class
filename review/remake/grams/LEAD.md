# The snippet test: what was found and what the lead did

`build/tools/grams.py` searches, five words at a time, every printed
sentence that reports a book of Auden's the site has only as search
snippets at archive.org. A run that is found is printed in the page's
own words. `found/<piece>.txt` keeps what the first run over a piece
printed; `<piece>.txt` is the last run. The rule: a run at the place
the sentence reports is loosened by a word; small words met by chance,
titles, names and dates stand. Each change is an exact edit kept in the
piece's `lead/edits-grams.json` (the reading before:
`lead/before-grams.json`), followed by the checker and a build.

Begun 3 October 2026, 15:13 UTC; mended at 15:35 (until then the tool
missed most citations of *Prose*, vol. II); this record begun 15:47.

## volpone
One run, two play titles side by side in the head. Stands.

## othello, horace
No run.

## hamlet
Four runs, all with *Lectures on Shakespeare*.
- The fifth entry of the list, the sentence on verse and prose: eight
  words ran with the lecture. Loosened.
- The seventh entry: a date (stands) and seven words on what the class
  commented on, the editor's own wording. Loosened; what is left is the
  two plays' titles.
- The Sentence caption of the second passage, the sentence that reports
  the lecture: five words. Loosened.
Tested again with `grams.py field`: no run but the date and the titles.

## pascal
Three runs, with *The Prolific and the Devourer*.
- A stock phrase of the Bible in the second entry, and the book's own
  title in the seventh. Stand.
- The Metaphor caption of the second passage, last sentence: seven
  words were Auden's own sentence, unmarked. Said in the page's words
  now. Tested again: no run.

## kierkegaard
One run, a book's title with its author's name. Stands.

## gotterdammerung
Three runs, with *Prose*, vol. II. One source, *Prose*, vol. III, is in
no item and was not searched.
- The first entry: five words in the sentence on the two marriages.
  Loosened. Tested again: no run.
- The fourth entry and the first caption: the work's title with three
  small words before it. Stand.

## magic-flute
Two runs.
- The third entry (*Prose*, vol. II): five words in the sentence on what
  Tamino stakes. Loosened by a word.
- The fourth entry (*Lectures on Shakespeare*): two names side by side
  in a list of pairs. Stands.

## dante-inferno
Seven runs.
- The first entry (*The Prolific and the Devourer*, also in *Prose*,
  vol. II): five words across the last two sentences. The last sentence
  is turned round.
- The fifth entry (the notes to *New Year Letter*): five words of what
  Dante's three lines say. Reworded.
- The third entry (five small words) and the fourth (a phrase of time,
  the lecture's title, a phrase of place). Stand.

## blake
One run, the book's own title. Stands. One source, *Prose*, vol. I, is
in no item and was not searched.

## family-reunion, augustine (16:09)
No run. Six of the Family Reunion's fields cite *Prose*, vol. III, which
is in no item at archive.org and was not searched; the piece's
paragraphs were tested against the four scans and Mendelson's book by
its finisher.

## dante-purgatorio (16:09)
Five runs.
- The second entry of the list (the lines on Dante in Part I of *New
  Year Letter*): seven words ran with the poem, in the sentence on
  what led Dante through the dead. Turned round; three small words are
  left.
- The fourth entry and the Word caption of the second passage: runs of
  small words ("near the end of a", "a review of a book"). Stand.

## dante-paradiso (16:09)
One run: five words in the last sentence of the Sentence caption of
the third passage, with Auden's essay in *The Kafka Problem*. Loosened.

## dutchman (16:09)
One run, found in both printings of *New Year Letter*: five words of
the poem unmarked in the head's last sentence (the two lines quoted
under the head are marked and stand). The order of the hero's two
cries is turned round, so that no five words run.

## rimbaud, adams, antigone (16:24)
No run.

## faust (16:24)
Two runs.
- The first entry of the list (the review of February 1941, in *Prose*,
  vol. II): five words in the last sentence, on why God and men favor
  the two heroes. The clause is turned from the passive to the active.
- The sixth entry: a title with its part and scene. Stands.

## The biography as a fifth scan: adams, family-reunion, gotterdammerung, henry-iv-2, othello (16:31)
Mendelson's biography of 2017 quotes Auden at length, so a run shared
with it was weighed by where it stands there: inside quotation marks it
is Auden's sentence, outside them it is the biographer's prose or
chance. `runs-sweep.py` with the biography alone, over the five pieces
whose runs had been noted and not weighed. It tests the printed prose
as `prose.mjs` last wrote it, so that was written again for the two
pieces changed.
- **adams**, the second entry of the list: five words of the last
  clause stood inside a quotation of Auden's in the biography. The
  clause is said again ("seen to be a world of masses, responsible for
  no one"); his four-word term stays. No run now.
- **family-reunion**, the head: five words of the sentence on Harry
  and his brother stood inside a quotation of Auden's. Turned round
  ("to make the call seem to come to Harry, and not to his brother
  John"). No run now. A first wording with "suggest" drew the
  checker's warning for a claim about what a passage does, and was not
  kept.
- The rest stand, each a run of small words or a title met in an
  unrelated passage of the biography: adams `about` ("it was published
  in the"); family-reunion's third entry (the name of the lectures),
  its note on the next piece and four facts of its drawings;
  gotterdammerung's sixth entry twice, its eighth entry, a caption, a
  note and two caveats; henry-iv-2's head, three captions and two
  entries; othello's head.

## *Prose*, vol. III has an item after all (16:31)
Gotterdammerung's sixth entry was checked by its poet in archive.org
item `trent_0116405823828`, whose title page is *Prose*, Volume III:
1949–1955. The tool did not know it and had listed that source, and six
fields of the Family Reunion, as not searched. `PROSE` in
`build/tools/grams.py` now names the item, and the two pieces are being
run again. Volume I is still in no item (one source of blake's).

## Every finished piece against the five scans once more (16:33)
After the edits of the last pass, the printed prose of the 34 finished
pieces was written again (`prose.mjs`) and swept against the four
scans and the biography together: 352 runs, 323 of them five words
long. None is new in a field the last pass changed, and against the
earlier sweep of the biography the only new lines are entries that
moved in a list (don-giovanni) and one run of small words (hamlet's
fifth entry). The runs of six and seven words are names and terms ("the
sin against the Holy Ghost", "one of the seven deadly sins", a
character's name, a lecture's title) or phrases of place ("at the end
of a line"). Tristan is to be swept when its finisher is done. The
site's own pages share two runs of five with *The Dyer's Hand* in one
paragraph of the about page (the college for poets): on the lead's
list, to turn round with the report of the critic who is reading those
pages.

## moby-dick, peer-gynt, rilke (16:36)
No run.

## carmen (16:36)
Three runs, all loosened.
- The second entry of the list (the lecture on *Richard III*): five
  words of the rule ran with the lectures as the editor printed them.
  "The wills of others" is now "other people's wills". The sentence
  quoted under the entry is marked as a quotation and stands.
- The fifth entry (the piece of 1948 in *Prose*, vol. II): the five
  words that began its last sentence. Now "Every great character of
  opera".
- The last caption of the third passage, which says the quoted
  sentence again in the page's words: five words ran with the
  quotation itself. Now "are inclined to a belief in fate and in
  signs".
The test run again on the piece finds no run.

## family-reunion and gotterdammerung against *Prose*, vol. III (16:42)
The tool, now knowing the volume's item, made 585 searches it had not
made and found six runs. All six are loosened, and the test run again
on both pieces finds none.
- **family-reunion**, the head: five words on Harry's brother, in the
  sentence already turned round at 16:31. Now the call seems "to pass
  over his brother John for being stupid".
- **family-reunion**, the first entry of the list (the review of
  1951): five words on the rhythm Eliot wanted. "Close to" is now
  "near".
- **family-reunion**, the second entry (the review of 1953): three
  small words and two names of the list of chosen persons. The clause
  is turned so that "in the plays" stands before "the chosen persons".
- **gotterdammerung**, the fourth entry (the notes of 1944, in vol.
  II): five words that began the reported sentence, with the cycle's
  title. Now "Wagner's text for the *Ring*, dated by him to 1853".
- **gotterdammerung**, the first caption of the first passage, which
  reports the same notes: the same five words. Now "the words of the
  *Ring*".
- **gotterdammerung**, the sixth entry (the BBC talk of 1955): five
  words on how Wotan behaves. Now "no wiser and no better behaved than
  anyone else".

## The rest of the snippet run (17:04)
The run over every piece ended at 16:59. No run: phedre, fidelio,
karamazov, baudelaire, tristan (after its finisher). No field that
reports a snippet-only book: agamemnon, orpheus, tempest. Titles and
names that stand: don-giovanni (a book's title with its author),
traviata (a character's name).
- **henry-iv-2**, the eighth entry (the lecture as its editor printed
  it): five words before what becomes of Falstaff. "At the end" is now
  "by the end".
- **castle**, the fourth entry (the review of February 1941): five
  words of the sentence that names Kafka beside Dante, Shakespeare and
  Goethe. It now begins "Asked which artist stands to the present
  age".
- **castle**, the fifth entry (the essay of 1946), twice: how Bunyan's
  pilgrim comes to heaven ("must gain heaven"), and what K. will never
  be ("will never become the Land Surveyor that he wishes to be").
The test run again on castle, henry-iv-2 and tristan finds no run.
The Family Reunion's drawings print four lines that report Auden, and
the run does not read a drawing's lines: each was tested by itself
against the third prose volume (`grams.py field`), and none shares a
run.

## Two faults in the tests, and what they had hidden (17:04)
**The sweep passed over a run that began inside a chain of chance
words.** `runs-sweep.py` and `runs.py` chain four-word matches; after a
chain they went on from its end, so a run of Auden's that began among
the last three words of a chance match was never looked at. Both now go
on from the last word but three (mended 16:57). Over every page and the
five texts the sweep then showed nine runs more (361, where it had
shown 352). Two were his, both in the Castle: the head's last words on
what K. does not know, and five words at the start of the first
caption's report. The other seven are small words and a title.
**The sweep cannot see through a misprint in a scan.** Tristan's
finisher found one such phrase and wrote a second sweep; it is now
`build/tools/runs-tolerant.py`, over every piece at once: it joins
words broken at a line's end (the finisher's script moved one letter
only, so that case had never worked) and lets one of five words differ
by two letters. It listed 309 places the plain sweep does not show.
Nearly all are a different word in an unrelated sentence ("end" for
"head", "ears" for "year"). Each that could be a phrase of his was
looked up at the scan's line. Loosened:
- **castle**: the head ("what he should do"); the first caption ("the
  stories typical of Kafka"); the eighth entry, which had five words
  of his on K. being an I (the plain sweep had always shown it, and it
  had been let stand): the sentence now begins "From the beginning he
  is an I".
- **agamemnon**, the head: his example of the act that shows hubris
  ("Agamemnon treading the purple carpet").
- **dante-inferno**, the first caption of the third passage: five
  words on Ulysses, hidden by a spelling ("the counselor of evil, and
  that his words are like the Serpent's to Eve").
- **dante-purgatorio**, the eighth entry: six words on the paradox,
  hidden by a misread letter ("the paradox of the place suffering has
  in Christianity").
- **dutchman**, the second entry: his sentence on the destination,
  followed clause by clause ("Whether there is a lasting destination
  nobody knows, and a lasting bond can be neither had nor wished
  for").
- **rimbaud**, the head: six words, hidden by a tense ("Rimbaud's
  account of himself").
- **faust**, the fifth entry: four words of Pearce's and a spelling
  ("joining in the building of dikes").
- **family-reunion**, the line the fourth drawing prints from the
  review of 1953: the five words loosened in the head at 16:40 stood
  here too ("passed over for being stupid").
Let stand, after the scan's line was read: agamemnon's first entry
(four words on the hero's suffering) and its second passage's caption
(four words, and the sentence it matched is another one, on pride);
castle's eighth entry otherwise; the words of Dante and of Ibsen that
Auden quotes and the pages show as the works' own; doctrinal and
common phrases ("man is born in sin", "love of one's neighbor").
After the edits both sweeps were run again: none of the loosened
sentences shares a run of five, exact or with one word misread.
