# The class page: the record

What was asked, what was made, who checked it, what was decided and what was
left. Times are UTC, October 4, 2026. Nothing in `review/` is published.

## What was asked

At 05:45 the owner wrote, about the remade site that had gone live nine
minutes before: "beautiful, but i do think we need an intro page about the
class that offers this material as guide to what it would have been like to
think through the class. i still want you to keep the works and shelf, but
there is no class that tries to recreate the experience of being there
(including the assignments that survive, though you do not have to do brutal
tests or memorizations, just let people explore what they would have been
expected to do)".

Read as: the works and the shelf stay. What is added is the class itself, as
the students recorded it, with the work he set as far as it is on record, and
nothing asked of the visitor. His earlier rules hold (no games or scenery;
every remark with its reason; nothing made up; no week-by-week course).

## What was made

One page, `#/class`, "The class": fourteen scenes in the order the chief
witness tells them (the interview in September, the first afternoon,
Kierkegaard's three, Augustine and Kafka, romantic love, *Othello* on the
blackboard, Falstaff, *The Tempest*, the chart, the examination, papers and
exercises, Friday evenings, the next course, what they said of it), then the
sources and a fold of doubts. Each scene says what he said in the site's
words, gives the blackboard as the witness copied it, the record, the
questions set for the next meeting, and cards cut from the pieces for the
passages it was about. The brief is `remake/class/BRIEF.md`.

The front page keeps its opening (Auden's question and one passage). The way
in to the class now stands directly under that passage, before the works,
with the afternoons by name beside it, and "The class" is first in the menu.
Whether the class should be the opening page instead is the owner's to say.

Figures: the reading list to scale (a bar to a work), the three lines on
Kierkegaard with the two cases, the six schemes for *Othello* (a name can be
followed across them), Goethe's three reverences, the chart of nine pairs,
the four cantos to scale (a stroke to a paragraph).

## Decisions taken without asking

- **Where the site opens.** As above. To be said to the owner in one line.
- **The record.** Auden played the love duet from *Tristan*. Two records of
  it from before 1926 were prepared (`review/class/records.md`). The one of
  1915 is longer, has an orchestra and comes nearer the close, but its sound
  reached the Internet Archive as a copy of a compact disc of 2004. Every
  other record on the site credits a library's or a collector's own transfer
  from the disc. So the page carries the record of 1903 or 1904 (Sedlmair and
  Schmedes, with piano, the opening of the duet), and says that it ends well
  before the close.
- **The Beethoven.** The recording Pearce names (Schnabel with the London
  Philharmonic) was published after 1925 and cannot be given. An earlier
  recording of the concerto, of 1925, was looked for and no copy was found
  (`records.md`). The page names what he played and says so.
- **The translation exercise and the scansion exercise** have short links to
  passages on the site in Latin, French and German and to a song with its
  measure marked. German is Goethe and not Rilke, so that no one takes the
  passage for the poem Chapman put into English. Who chose that poem is not
  on record.

## Who checked it

1. Two examiners against the sources (`exam-pearce.md`, `exam-others.md`):
   order of events, sentences too close to Pearce, things left out. Applied.
2. A searcher for the records (`records.md`).
3. A critic by eye (`critic-eye.md`) and a critic by word for scenes 6 to 14,
   the sources and the doubts (`critic-words-b.md`). Applied: one measure for
   running words, folds set as rows, the blackboards off the tinted paper,
   the work that was set given as a list, the way in moved up the front page,
   one mark for the keyboard, people given a word of who at first mention.
   The critic by word for scenes 1 to 5 died without a report.
4. The lead looked at every scene in pictures at 1280 and at 390 after those
   changes and mended: page ranges set small and grey like single pages; the
   first afternoon's opening paragraphs across the page and the definitions
   beside the two that lead to them; the phonograph band; notes under figures
   in two columns; the date line where it turns on a phone; arrows of the
   list that point up the page where the scene stands above.
5. A second round, on the text as mended: two critics by word (the whole
   page), a first reader of the whole page in pictures, and two examiners for
   drift from the sources (`critic2-*.md`, `exam2-*.md`). What they found and
   what was done is at the foot of this file.

Checks that run by machine: `node build/pieces.mjs` (no PROBLEMS), `npm test`
(6 pass), the walk of the site in a browser
(`review/remake/last-pass/tools/walk-site.mjs`: every scene, card, fold, name,
bar, link and the record), and the closeness test
(`review/class/tools/class-runs.py`: no run of five words shared with the kept
scan of Pearce, outside quotations).

## Left for a later pass

- The *Othello* card on this page draws a stroke close by a speaker's name.
  It is the plate's own drawing (`remake/LEAD-LIST.md`).
- The glosses on cards are 12 px, and the Melville card carries many marks.
- A drawing of the Beethoven movement was proposed by the critic by eye and
  not made: nothing on record says how Auden described it bar by bar.
- Pearce's pages 129 to 130 and 137 to 145 were read only in search extracts.
  The page says so in its fold of doubts.

## The second round: what was found and what was done

Five readers went over the page as mended after the first round. None of them
reported anything refused by the permission system.

**Two examiners for drift from the sources** (`exam2-a.01` to `.05`,
`exam2-b.01` to `.06`). Twenty-four findings: none wrong, five doubtful,
nineteen small. Every one was answered.

- Share A. The instructor and the two assistants "were in the room" (Miller
  does not say they sat in). The fright at the no-notes rule is given to the
  account it stands in and to no speaker. "For the next day" is gone from the
  questions after *Othello*: no class met the next day. Wilson Knight is a
  concession and no longer an errand. "Lectured on love often." The note on
  the Beethoven says no copy that can be played here was found. The essay on
  the Prince is cited at pp. 198 and 205. Descartes comes in before Auden
  crosses the room. The lede no longer counts afternoons. The contents are
  headed "On this page." The black bars are defined, so that a passing
  mention of a play is not counted as teaching it. Outside its brief: one
  run of five words shared with Miller was loosened, and the note under the
  *Tristan* record now says that Pearce names no recording.
- Share B. The line on the cantos is split by witness (Pearce for the
  examination, Miller for the exercise). The Tempest notes "open with Auden
  saying." Stevens "sat in on Auden's classes," and both items from her
  notebook say that it does not name the course. "A couple of weeks later."
  Millar's two papers are one line, with Kreyling's title as a maybe.
  Chapman's own poem was Rilke's, with Carpenter cited. Page 154 for the
  project on "Lycidas." "Who wrote as Ross Macdonald." *The Dyer's Hand* and
  *Prose*, vol. II are in the sources. The sentence on Millar's notes follows
  Kreyling. The pages not seen are named. "Offered to cut" the cantos, here
  and on the about page. One finding was looked at and left: the clause on
  Caliban stays, and its page in *The Dyer's Hand* was confirmed by position.

**Two critics by word** (`critic2-words-a.01` to `.08`, 88 marks;
`critic2-words-b.01` to `.07`, 93 marks, of which the critic withdrew six).
Applied place by place: who is speaking is named early in each remark,
pronouns have owners, each person has a word of who at first mention,
British forms are gone, and repeated turns of phrase were thinned. Left on
purpose: the heading "Where the sedative came back"; the book of Augustine's
that Pearce does not name stays unnamed; the blackboards keep their own
punctuation and spelling.

**A first reader of the whole page in pictures** (`critic2-reader.01` to
`.04`). Six points, all acted on: the remarks on *Othello* now stand at rest
under the board, and a name pressed lights its places and its remark; the
first scene opens on the knock at the door; the passages for Falstaff and
*The Tempest* stand beside the paragraphs they show; the pages, the weeks
and the words a minute are lifted out of the small notes; the list comes
first under "Papers and exercises"; on a phone the rows are easier under a
thumb and the cards follow their paragraphs. Not done: a small way back to
the contents from each scene's head.

**After the round** the lead looked at every scene again at 1280 and at 390.
One mending: on a narrow page the running words now fill each line as it
comes, because evening out the last lines had ended two lines short at two
full stops in the Friday scene, which read as a new paragraph.

**Glosses that are this site's and rest on no page seen here.** In the fold
on the 1944 review, "she with her husband and he with his king" explains
"keep faith"; the review was not on this machine, and the sense rests on the
first examiner's summary of its p. 216. In the Falstaff scene, what Falstaff
does to Hotspur's body is the play's action, supplied by this site: the
record has only that Auden pointed to his behavior there.

Run at the end: `node build/pieces.mjs` (no problems), `npm test` (6 pass),
the walk of the site ("nothing reported": 14 scenes, 12 cards, 9 folds, 7
names followed, 33 bars, 6 figures, 1 record, 68 links inside the site), and
the closeness tests against the kept scans (clean outside quotations).

## The upload

Ethan's word for it, on 4 October 2026 at 17:07 UTC in the project chat, in
answer to the post that said the class page goes live when he says deploy:
"post it, create". He said nothing about which page opens the site, so the
site still opens on the works.

At 17:18 UTC the zip `deploy/fate-and-the-individual-site-2026-10-04-class.zip`
(1,260 files of `site/` and `netlify.toml`) was sent through the address the
Netlify connector gave: deploy `6ac28a6b9fa3f1fb9c60c291`, production, ready
at 17:18:45 UTC, "10 new files uploaded". Before it: `node build/pieces.mjs`
(no problems), `npm test` (6 pass), the walk of the site (nothing reported).
After it: all 1,260 files compared the same on the live address as in the
build.

Nothing in `site/` was changed between the private page of 10:27 UTC
(version 10) and this upload.

The card that a link to the site shows came after it, the same evening:
`review/card/RECORD.md`.
