# The lead's list (kept from 3 October, 14:49 UTC)

What the lead still owes the site, so that it does not live only in a
session's memory. Strike a line when it is done; add what the
finishers and artists pass up.

## Where things stand (written 05:39 UTC, 4 October): the remade site is live

- The owner wrote "deploy please" at 05:22 UTC on 4 October. The remade site went live at 05:36 UTC at https://auden-english-135.netlify.app, in place of the first version. Record: `review/remake/last-pass/RECORD.md`, last section.
- What is live is `site/` as built at 05:31 UTC, without `site/js/kit/README.md`: 1,256 files, each checked on the live address. The zip is `deploy/fate-and-the-individual-site-2026-10-04.zip`.
- The private page (version 9) is the build before the deploy's two unseen changes (the gloss sources left out of the data, the link-preview lines). It was not published again.
- Nothing is running.

Left:

1. Any further change to the live site needs the owner's word again (a new deploy each time).
2. The refused changes (the last section of this file) stay undone until he says. Two cards in the thread are unanswered.
3. A tenth mending, if more is wanted: what the critic by eye's report leaves (`review/remake/last-pass/RECORD.md`, "The critic by eye, applied").
4. The plate keys `stage`, `under`, `left`, `inline`, `stanza`, `indent`, `place`, the `join` list, `<`, `|` and `"order"` are not yet described in POET.md and ARTIST.md.
5. To deploy again: build, `npm test`, `walk-site.mjs` on `site/`, `deploy-zip.py`, the connector's deploy operation for the address, post the zip, `live-compare.py`. All three tools are in `review/remake/last-pass/tools/`.

## As things stood before the deploy (written 02:52 UTC, 4 October)

- All 35 pieces are through every stage. Nothing is running: both ninth menders, the word critic of the last pass and the critic by eye have handed in, and their work is merged or applied. Records: `review/remake/last-pass/RECORD.md` and `remake/KIT-CHANGES.md`, the last four sections of each.
- The private site is at version 9 (about 02:30 UTC, 4 October), built from this tree, tested and walked. Only `index.html` and `local.html` differ from version 8.
- The shared folder gave "Input/output error" from 01:29 until after 02:32 and answered again at 02:47. The 212 files changed since 23:00 on 3 October were copied at 02:49 and read back the same. It only adds and replaces.
- The owner was told at about 02:33 that the site is ready and waits on his word to deploy.

Left:

1. Deploy only on the owner's own word.
2. The refused changes (the last section of this file) stay undone until he says.
3. A tenth mending, if more is wanted: what the critic by eye's report leaves (`review/remake/last-pass/RECORD.md`, "The critic by eye, applied").
4. The plate keys `stage`, `under`, `left`, `inline`, `stanza`, `indent`, `place`, the `join` list, `<`, `|` and `"order"` are not yet described in POET.md and ARTIST.md.
5. The scripts the tests need are kept in `review/remake/last-pass/tools/`: `walk2.mjs`, `deeplink.mjs`, `merge9.sh`.

## As things stood at 23:01 UTC, 3 October (kept for the record; the section above replaces it)

The eighth mending is merged (22:38) and all 35 pieces are built with
it; the front page's cards run in two columns; the private site is at
version 7 (22:59), tested and walked; the shared folder holds
everything up to 23:00 (`<scratch>/stamp-2300` marks it). Three agents
are at work: the ninth mending's two menders, each in its own copy
(`remake/kit9a` the rows, `remake/kit9b` the lenses), and the critic by
eye, who photographs the live site. Until the critic hands in, no
`node build/pieces.mjs`, `build/front.mjs` or `build/shelf.mjs` on the
live data. The lead may edit the live kit, but every such edit is one
more thing to carry through the merge of the ninth: keep to papers.

### Done since 20:38

- The merge of the eighth (twelve files, a plain copy, by
  `<scratch>/merge8.sh`), its section in `remake/KIT-CHANGES.md`, the
  build, and the look at pictures of everything changed since version
  6: all read as meant.
- The lead's own section in `remake/KIT-CHANGES.md` ("After the eighth
  mending: the lead"): a key goes under a short passage only where no
  tab is more than 140 px longer for it (moby-dick `rails` had dropped
  its key; mended); the front page in two columns with `"order"` in
  `remake/front.json` (figure and sentence), labels through `marked()`,
  `.home-intro` and `.foot:empty`.
- Decided: 2d (a key under both passages) stays at 120 px; antigone
  `elders` at 1280 stays as the eighth built it; the quotation at a
  page's head stays tied and the title un-tied; dante-purgatorio
  `garden`'s tab names stay.
- moby-dick `whenever`: no-break spaces after four numerals (20:40).
  magic-flute `queen`, Beat: the caption's first sentence taken out,
  since the legend at the head of the passage says it (22:44).
- Both sweeps against the scans (356 runs plain, 304 more with a
  word misread: names, titles, common phrases; the three new ones are
  a figure's definition, a note's small words and a title) and the
  searches of the changed sentences in the books known as snippets
  (1,123 searches, 8 pieces: nothing to loosen).

### When the ninth menders hand in

The merge: a plain copy for a file only one of them changed;
`git merge-file` for `atlas.css` against either `orig`; a file both
changed is read. Check first that each live file still equals its
`orig` (the lead has not touched the kit since the copies were taken
at 22:50:39). Then their sections into `remake/KIT-CHANGES.md`, the
build, pictures, both walks, a new version of the private site, a
copy to the shared folder.

Readings to set when it is merged (each mender hands in exact edits;
apply them with `build/tools/edit-exact.py`, a copy kept in the
piece's `lead/`):

- traviata `refrain`: `"join": [[6, 7], [8, 9]]` (lenses, item 1); one
  more pair on English, row 5.0 words 0-3 to row p:270.7 words 0-4,
  with no remark (lenses, item 3); `indent` for rows 5.0 to 5.3 and a
  `place` (rows, item 5).
- traviata `end` and `cabaletta`: names and directions inside the
  line (rows, item 1: the words are listed there); `cabaletta` a
  stanza's space before row 10.4 and a `place`.
- fidelio `scene`: rows 0.0 and 12.0 as headings (rows, item 1); a
  stanza's space before row 17.0 (K6). The front page's card for
  Fidelio: the stroke over a speaker's name should be gone (lenses,
  item 1).
- baudelaire's two plates whose place line repeats the journal's name,
  and carmen 5: a `place`.
- adams: nothing in the reading; the hyphen in a range of years in a
  place line and "Read on" is the page's to set (lenses, item 6).
- phedre `names`: a pair's number stands just over the next speaker's
  name (rows, item 3). tristan `end`, Sentence: a plate 2,068 px tall
  (rows, item 11).

### When the critic by eye hands in

Its report is `review/remake/critics/site-eye.md` (pictures in
`review/remake/site-eye/shots`). Apply what is right in it: wording
through the readings and `content/`, the page through the kit after
the ninth is merged. Then critics have been over every word and the
whole by eye, and one reply tells the owner the site is ready and
waits on his word to deploy.

### Small things still the lead's

- ~~magic-flute `weddings`: the four duet lines alternate two singers;
  maybe a `stage`.~~ Left (23:04): the Words caption says who sings,
  and four names over four short lines would crowd them.
- ~~tristan, "Read on" names the opera in the English libretto's
  spelling.~~ Left (23:04): it is the title of the book the reader
  opens, as the shelf has it; the page's own prose keeps the German.
- hamlet's `endsKey` is read by nothing; left.
- Document `stage`, `under`, `left`, the `join` list, `<`, `"order"`
  and the ninth's new keys: kit README, `remake/KIT-CHANGES.md`,
  POET.md, ARTIST.md, `remake/prompts/README.md`.
- Add `left` and typesetting to `original.mjs cut`. (The other
  originals' apostrophes were set in the pass for phones, 4 October:
  o-dutchman, o-fidelio, o-gotterdammerung, o-magic-flute, 31 marks;
  the readings needed no mending. o-rilke's two single marks are
  quotation marks around a title and stay as transcribed.)

## One test for the whole site

- **Auden's books the site has only in snippets.** `runs-sweep.py`
  sees four scans. Sentences that report a book not among them were
  never tested five words at a time, except in baudelaire (the
  introduction of 1947; `remake/works/baudelaire/finisher/grams.py`)
  and karamazov (*The Prolific and the Devourer*;
  `remake/works/karamazov/finisher/pdruns.py`, which also closes up
  words broken at a line's end). Known untested: blake, dante-inferno
  and pascal for *The Prolific and the Devourer*; every piece whose
  list cites *Lectures on Shakespeare*, the *Prose* volumes, *Secondary
  Worlds*, *A Certain World* or the libretti's prefaces. The tool is
  made: `build/tools/grams.py` (plan, run, field). Its results are in
  `review/remake/grams/<piece>.txt`; each run found is the lead's to
  loosen or to let stand, and what was done is in
  `review/remake/grams/LEAD.md` (the run goes on through the rest).
  Mendelson's biography is on disk
  (`scratchpad/research/F_work/mendelson2017.txt`) and goes to
  `runs-sweep.py` as a fifth scan. Its runs in adams, family-reunion,
  gotterdammerung, henry-iv-2 and othello are weighed (16:31: two
  loosened, the rest chance). The sweep reads the prose files, so run
  `node build/tools/prose.mjs` first. Swept again at 18:08 after the
  measure's wording went in: 354 runs over 36 prose files, all names,
  titles and common phrases. Still to do at the end: every piece
  against all five scans once more, after the kit's merge and any
  edit that follows it.
  *Prose*, vol. III has an archive.org item (`trent_0116405823828`);
  the tool knows it from 16:31.
- The year of the Ecco Press *Prolific and the Devourer*: decided, it
  stays 1994 (the catalog records of the copy read; the book's own
  cataloging data and Mendelson have 1993; karamazov's `open`, sixth
  line, records both). All three pieces that print it agree.
- A dictionary's headword after "under" in `stands` and `sources`:
  marked as a word named (baudelaire now marks them; karamazov has
  them bare; the pieces differ). One rule for the site, in the last
  pass.

## The last pass across the pieces (the lead's; record in `review/remake/last-pass/RECORD.md`)

Done by 16:23 UTC on 3 October: item 7 (keys of drawings), item 8 (the
word over the English column), item 5 (cantos in Arabic figures), item
2 (headwords after "under") with item 6 (the dictionary's name), item 4
(recurring phrases: nothing to set), item 3 (one note out), and the
small ones (magic-flute's spellings, entries and sources; carmen's
"famous"; caption lengths).

Done by 18:20 UTC on 3 October: item 1 (the measure of a line under
one wording: 100 edits in 23 pieces, and one more on fidelio), the
Word tab under one name (30 tabs), Tristan's headword, the four cantos
(those two files are the first version's and are out of the site),
the about page's paragraph on the college for poets and two more of
its sentences loosened, and the whole report of the critic of the
site's own words but for what waits on the kit. The first version's
files are out of `site/` and kept in `first-version/`. All of it is
in the record. Done about 18:40: `build/tools/prose.mjs` gathers the
four kinds of words the critic missed in `site.md` (the books' notes,
the cards' small words, labels of one word, the keys' legends), and
`site.md` is swept again with nothing new but a title and five small
words.

Open:
- A poem's title in a place line (rilke, third passage) with the kit
  item above ("A title in a place line stands upright").
- dante-purgatorio `garden`: five rows carry a long mark on both the
  fourth and the sixth syllable. Left as the examiner marked them;
  noted in the piece's notes.
- After the next build of the private site: the Horace pack goes with
  it (its contents note now gives the edition; done about 18:40).
- The citations of Auden's collected prose and of *The Enchafèd
  Flood* are in one form (18:47; the record, "One form for the books
  many pages cite"). `node build/pieces.mjs` has still to be run for
  it, when no picture run is reading `site/data`.
- One wording for each figure of speech is in (19:54 to 20:07; the
  record, "One wording for each figure"): 62 lines in 32 pieces, the
  handbook named on six pages, one Faust caption, and the two
  overrides of `remake/front.json`. The table of lines is
  `review/remake/last-pass/figures/lead/lead_lists.py` (run it with
  no argument: it must say "0 edits in 0 pieces"; `table` prints
  every tab by figure). The reader's own lists in
  `review/remake/last-pass/figures/*.json` are STALE: never apply
  them. Still owed: `node build/pieces.mjs` and `node
  build/front.mjs`, then a look at some Figure tabs and at the six
  figure cards of the front page (henry-iv-2, pascal, adams, orpheus,
  don-giovanni, fidelio); and after the kit's merge, when a `plain`
  line can carry marks, the words quoted in three lines become marks
  (baudelaire `evening`/Likeness, antigone `answer`/Knowing, carmen
  `habanera`/Figure).
- A new Figure tab, or a new line on an old one: take the figure's
  line from the table in `lead_lists.py` (a tail after "; here" is
  the piece's own), add the tab to the table if its line is fitted,
  and name in `stands` the handbook the line stands on.
- The shared copy holds 471 files that no longer stand at those paths
  in the source: 117 first-version files under `site/`, `content/`,
  `build/` and `tests/` whose copies are whole under `first-version/`
  there (synced with `--all` at 19:08), and 354 that were removed in
  the source (old pictures, five cache files, a stray line, and two
  view scripts of the deployed first version that the zip in
  `deploy/` also holds). Taking the 117 out of the shared folder was
  REFUSED by the permission system at 19:10 ("Modify Shared
  Resources"): nothing was removed, and it waits on the owner's word.
  Instead `sync.sh` now writes the list (`build/tools/shared-stale.txt`)
  before every copy, and a working copy made from the shared folder
  is cleaned with `python3 build/tools/sync-moved.py --restored <dir>`
  before anything else. Nothing is to be deployed or published from
  the shared copy's `site/`.

The pictures owed at 18:20 are taken and looked at (about 18:42; in
`review/remake/last-pass/shots/grams/`).

## Tools made or mended on 3 October

- `build/tools/runs-tolerant.py`: the sweep, forgiving a scan's broken
  words. `build/tools/runs-sweep.py`: its chain fault is mended. Run
  `node build/tools/prose.mjs` before either.
- `build/tools/grams.py` (plan, run, field): the snippet test.
- `build/tools/shoot.mjs`: the front page is asked for as `home`;
  `--page`, `--site`, `--fractional`.
- `build/tools/pixdiff.mjs`: counts what differs between two folders
  of pictures. A phone picture can differ all over by a pixel of
  jitter: look before believing it.
- `build/tools/sync.sh`: leaves symbolic links out (they stopped the
  whole copy). It only adds and replaces, so a file moved in the
  source stays at its old place in the shared copy.
  `build/tools/sync-moved.py` lists those files, writes the list for
  the sync, and cleans a restored working copy.
- `build/tools/snapshot.sh`: leaves `first-version/` and every
  mender's copy (`remake/kit` followed by a number) out of the private
  site's copy.
- `build/tools/kit-copy.sh <dir>`: a working copy of the kit, the
  build, the readings and the built data for a mender, with the same
  again in `<dir>/orig`. The copy's own build writes the copy's data,
  so two menders can build and photograph at once and the live site
  is not touched. Take the copies after the live build.
- `build/tools/check-reading.mjs`: knows the voice mark `<`.
- `review/remake/last-pass/tools/named-words.py`: writes a named word
  in key labels and `plain` lines as `*word*`, proving that only those
  leaves of the named tab change.
- `review/remake/last-pass/tools/front-cards.mjs`: photographs cards
  of the front page. `word-label.py` and
  `review/remake/last-pass/measure/lead-apply.py`: the two changes
  across many readings, each proving that nothing else changed.
- `remake/front.json`: a choice may carry `say` (measure, plain,
  label, pairLabel, keys); `build/front.mjs` refuses a stale one.
- `review/remake/last-pass/tools/cite-forms.py`: one form for the
  citations of Auden's collected prose and of *The Enchafèd Flood*
  (87 lines in 20 pieces, 18:47). Run it again after any new citation
  of either: it says what it would do and writes only with `--write`.
  A piece it has already changed has a copy in `lead/`, and the tool
  will not overwrite that copy: move the copy first.
- `review/remake/last-pass/tools/figures-apply.py` (applies lists of
  exact edits to Figure tabs, proving that only the `name` or `plain`
  of a figure lens changes; `--lists <dir>`) and `figure-sources.py`
  (the follow-up edits of 20:04). Both keep a copy in the piece's
  `lead/` and will not overwrite one that is there.
- `build/tools/prose.mjs`: also gathers the front page's cards as
  built, the notes on the books' contents pages, one-word strings and
  legends that begin with a small letter.
- `build/tools/scan.mjs <width> <probe.js> [--site dir] [--first]
  [piece …]`: asks every plate a question in the page itself and
  prints one line a plate (from the eighth mender's scanner). Probes
  in `build/tools/probes/`: `low.js` (which layout a plate took, its
  height, where the passage and the key end), `keysunder.js`,
  `sidein.js`. Save a scan before a change to the kit and diff it
  after: it found what the mender's own pictures had passed over.
- `build/tools/shoot.mjs --open`: opens the folded notes at a page's
  foot before the page is photographed (slices named `-page-open-`).
- `remake/front.json` `"order": { "<kind>": [ids] }`: the order of a
  kind's cards on the front page, where the list's order would leave
  the two columns far apart; `build/front.mjs` refuses an order that
  does not name exactly that kind's cards.
  `review/remake/last-pass/tools/front-cards.mjs <dir> 1280 <tag> none
  [--site dir]` prints where each card stands, and `front-order.py`
  reads that and proposes an order (the first card stays first; a
  card moved out of the list's order costs 20 px of evenness).

## Old pictures and files, for the last cleanup

- `remake/works/orpheus/shots/as-the-artist-left-them/`; baudelaire's
  `shots/` outside `finisher/` and `lead/`; hamlet's 34 pictures in
  `shots/`; gotterdammerung's; karamazov's `look.mjs`, look-* and
  trial-* pictures.

## From the class page (4 October), for a later pass

- The card cut from `othello/echo` (shown in the class page's scene
  on *Othello*): the short tie between the two speeches runs close by
  a speaker's name. It is the plate's own drawing, and shows on the
  piece's page as well.
- Glosses under words on cards are 12 px. On a phone they are at the
  edge of what can be read. The Melville card (`moby-dick/rails`,
  figure) carries more marks than a card can hold comfortably, and
  the Wagner and Kierkegaard cards need their pages to be understood.
  (Critic by eye, `review/class/critic-eye.md`.)
- The critic by eye proposed a drawing of the slow movement of the
  Beethoven concerto beside what Auden said of it. Not made: nothing
  on record says where in the movement each thing he named falls.
- The space between an italic title and a following bracket looks
  tight in the lists of sources (EB Garamond's italic overhang): on
  the class page, the about page and the shelf alike.

## From the pass for phones (4 October), for a later pass

Record: `review/phone/RECORD.md`. None of these held the update.

- Three folded tables are still wider than a 320 px plate, and one
  than a 360 px plate: Agamemnon `net` (by 54 px at 320, 14 px at
  360), Paradiso `end` (28 px at 320), Kierkegaard `greater` (14 px
  at 320). Each can be pushed sideways and nothing says so.
  `review/phone/tools/tables.mjs` finds them.
- The head line of a drawing is set with `rich()`, which keeps a word
  with its number and not a short word with the word after it: the
  head line of Adams's Book turns after a preposition at 390 and
  after an article at 1280. `tie()` there would touch every drawing;
  to be done with pictures of all of them.
- The kit's `keep()` does not tie "part 1" or a count to its word
  ("42 times"); piece.js and the Adams script do it for themselves.
- The folded tables under Adams's two drawings: a red number for
  chapter 25 and a rule between rows 20 and 21 would tie each table
  to its drawing (critic of the drawings).
- Chapter 27 of the *Education* is "Teufelsdrockh" in the hosted
  text, the facts and the table. The printed book may have the
  umlaut. To be checked against a scan, and changed in all three
  together.
- The line under a drawing says "Touch" where `(hover: none)` holds;
  `site/js/pieces/pascal.js` also asks `(any-pointer: coarse)`. One
  test for both.
- On a narrow plate the key now stands just over the caption, and on
  a Figure tab the caption names and explains the figure again (seen
  on othello `echo`, adams `dynamo`, agamemnon `net`, fidelio
  `name`). The captions were written to stand alone.
- Under the last line of a passage the room for marks stays, so a key
  can stand 50 to 77 px under it (fidelio `name`).
- Three lines of `o-dutchman/ballad` keep straight double marks (the
  reader only). `o-rilke/verse` keeps two straight single marks
  around a play's title: quotation marks, to be set as the printed
  book has them.
- The reader's notice for a book that is not there sets its label at
  20 px against the head's 16.
- Links in running words keep the pale hairline; only the front
  page's link to the list has the darker line.

From the reader who finished the look at the phone
(`review/phone/critic-eye-2b.md`, its parts 4 and 6), in its order:

- A. The ten Word tabs that set the English libretto after the notes:
  on a phone the libretto (257 to 748 px of it) parts the notes from
  the tabs at the foot, and under Traviata `end` come 1,606 px with
  nothing drawn. Its mend: on a narrow plate, fold the libretto under
  its own label, as a drawing's table is folded. Four of the plates
  have a tab that shows the English in any case.
- C. The tables above, a step further: for a table of more than six
  columns under 380 px, 6 px between columns and type at 12.5 px, or
  one column fewer in Agamemnon's.
- D. A version in prose and the caption after it are one face, one
  size and one ink with a hairline between (the Purgatorio `garden`).
  Its mend: a prose version in the quiet ink of the labels.
- B. Left as it is: on a Beat tab the measure is told by the key's
  head line and again by the caption's first sentence. If a caption is
  opened again, it could begin at its second sentence.
- In passing: the sense under a line stands midway between its line
  and the next where the open tab draws nothing under the line (Faust
  `heaven`, the Inferno `gate`); the remark for a number stands up to
  1,200 px under it on a tab that numbers two passages alike; the
  fourth speech of Agamemnon `cloth` at 320 has its turned half close
  under the first (as live).
- Needs the owner's word, so not done and not yet put to him: on a
  narrow window "Read on" stands a middle 2,501 px under the last
  plate, after "More from Auden". The reader would set it straight
  under the last plate on a phone. That changes the order of a page he
  has approved.

## Refused by the permission system: undone until the owner says

See the lead's memory file on refusals. The owner said yes on 4
October (21:02 UTC) to the small changes named to him, and they are
made: Blake's turns on two plates, Agamemnon's turns and heading, the
artist's two diagrams of Henry Adams. Dutchman's turns and the
Tempest's one turn needed nothing: the page's own rule already turns
those lines there. Still undone: the second fetch for The Family
Reunion; the fetch of Ovid for the Purgatorio; and, the lead's own,
taking the first version's leftover files out of the shared folder
(19:10 on 3 October).
