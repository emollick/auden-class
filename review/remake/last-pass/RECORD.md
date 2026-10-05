# The last pass across the pieces: what was decided and set

Begun 3 October 2026, 15:53 UTC. The matters are those of
`remake/LAST-PASS.md` and of "For the last pass" in
`remake/LEAD-LIST.md`. Each change to a reading is an exact edit (the
list and the reading before are in the piece's `lead/` folder), followed
by the checker and a build; each change to a drawing's script keeps the
script before in `lead/<piece>.js.before-…` and is followed by
`node --check` and a picture in `review/remake/last-pass/shots/`.

## 7. "As long as its words" in the keys of drawings (15:53)

Decided: "drawn as long as its words", the wording orpheus and traviata
already had for their lines. With "drawn" before it the phrase cannot be
read as "provided that". "As wide as its words" (augustine) and "drawn as
tall as" (henry-iv-2) cannot be misread and stand.

Set in four scripts (the key's text only):
- family-reunion, the Chorus drawing: "every mark is drawn as long as
  its words".
- hamlet, the Shape drawing: the same.
- kierkegaard, the Tellings and Speech drawings: "the line is drawn as
  long as its words" (lines 163 and 294).
- othello, the Play drawing: "every mark is drawn as long as its words".
Photographed at 1280 and 390; looked at othello (1280), hamlet (390) and
kierkegaard's Tellings (1280).

## 8. The word over the English column (settled before 16:07, nothing set)

The three Dante pages agree now: the version's name with its year
("Longfellow, 1867"; "Okey's prose, 1901"), the poet's name over the
Italian. Other pages name the version as their sources allow. Nothing
to set.

## 5. Figures for cantos, acts and books (16:07)

Decided: cantos in Arabic figures on the three Dante pages and in the
three hosted books, the way of the Inferno and Paradiso pages. Acts and
scenes are in Arabic figures on every page already. Books, parts,
volumes and chapters keep each work's own convention (a volume of a
dictionary, a part of a poem, a chapter of the *Vita nuova* stay Roman
where their sources print them so).

Set:
- The hosted books: `build/texts/dante.mjs` line 33 and
  `build/texts/dante-temple.mjs` line 31 label a canto by its number
  ("Inferno 1" to "Paradiso 33"). The three texts were rebuilt; in each,
  101 files differ in `label` only; `check-text` passes for all three.
  The place line beside a passage's heading and the reader's list of
  cantos take the label, so they changed with it.
- The Purgatorio page, the reading: 177 changes by
  `review/remake/last-pass/tools/dante-figures.py`, a substitution over
  the raw text limited to cantos (the reading before is
  `remake/works/dante-purgatorio/lead/before-figures.json`). A canto
  with its lines takes the form of the other two pages ("15.67-72"); a
  canto named in a sentence takes its number ("canto 17, line 125");
  the one caption that gave a canto and a line in figures alone now says
  "1, line 3", the caption form of the Inferno page. The seven keys of
  the middle cantos and the spans of cantos in the drawing's facts are
  numbers. Twenty-one Roman figures are left, none a canto. The
  checker's output differs from before in those figures only and ends
  with no problems.
- The Purgatorio page, the drawing: `site/js/pieces/dante-purgatorio.js`
  reads cantos as figures and prints them so (the scale, the canto's
  name, the row of seven cantos, the table); the two Roman helpers are
  gone; the pointer's line for a band reads "Virgil at 17.112–126: …".
  The script before is `lead/dante-purgatorio.js.before-figures`.
  `node --check` passes.

Looked at: the drawing at 1280 and 390 (the dot and the two rings stand
where they stood); its 27 lines for the pointer and its folded table,
read out by `tools/drawing-says.mjs`; the page's head; a plate of the
Inferno and of the Paradiso page for the place line; the reader's list
of cantos at 1280 and 390. Pictures in `shots/figures/`.

Left as it is: one sentence in the Inferno reading's `checked` (not
printed) that reports how Auden's own note signs its quotation, in Roman
figures as he printed it. The site's own pages (`content/pages.mjs`,
`content/ui.mjs`) still name four cantos in Roman figures: to set with
the report of the critic who is reading those pages.

## 2. A dictionary's headword after "under" (16:20)

Counted in the printed notes (`stands`) and the sources at the foot of
34 pieces: 210 headwords in italics, 77 bare with a capital, 63 bare in
lower case. Decided, one rule: a headword is set in italics, as a word
named. One case stands bare: an English headword, or an article's title,
written with a capital as its dictionary or encyclopedia heads it (the
page approved as the pattern has "*A New English Dictionary*, under
Sea"; so Schmidt's lexicon, Johnson, Grove, the Britannica of 1911,
Baum's glossary, Wikipedia's titles). A list is one thing: if any item
is in lower case, or the dictionary is of another language (Grimm, the
DWDS, Meyers, Florio's Italian words, German Wikipedia), every item is
in italics.

Set: 74 exact edits in 23 pieces, written by
`review/remake/last-pass/tools/headwords.py` (one edit to a field) with
eleven set by hand; the lists are in `review/remake/last-pass/headwords/`
and in each piece's `lead/edits-headwords.json`, the reading before in
`lead/before-headwords.json`. By hand: the entry "Cavalcanti, Guido" is
one headword (dante-purgatorio); the last headword of a list broken by a
parenthesis (antigone); bare lists after "public pages" (hamlet,
peer-gynt) and after "entry for" (henry-iv-2). The checker has no
problems on any of the 23, and its warnings are those that stood before.
Tristan is not touched while its finisher is on it: its one bare
headword goes on the lead's check of that piece.

With it, the names of the dictionaries (counted the same way): every
title is set one way across the site but three. The Online Etymology
Dictionary is in roman 71 times and was in italics 6 times (antigone 4,
dante-inferno 2): roman now. Wikipedia was in italics twice (traviata):
roman now. The *Oxford English Dictionary* stood in roman twice in
hamlet: in italics now.

Looked at: the Moby-Dick page with every fold open at 1280 (its sources
have the longest lists): `shots/headwords/`.

## 6. The dictionary's name (16:20)

Found settled. Captions and notes say "the Oxford dictionary" (tempest,
othello, volpone). The folded notes cite *A New English Dictionary*, the
name on the volumes read, and the sources give its full title, volume
and year; tempest and volpone add that it is the first edition of the
Oxford English Dictionary, and othello's source line calls it "the
Oxford dictionary of the captions". The *Oxford English Dictionary*
named as such (blake, hamlet, othello, peer-gynt) is the present
edition's public pages, a different book, and is rightly named apart.
No source line says "OED" any more. Nothing to set but hamlet's two
titles, above.

## 4. Turns of phrase that recur from piece to piece (16:20)

Counted by script over the printed prose of all 35 readings (runs of
three, four and five words that stand in many pieces). What recurs
across the site is of three kinds, and none is a tic to mend.
- The standing caveats ("The stresses marked are one reader's hearing",
  "read here only in snippets of scanned copies"): the same on purpose.
- The frame that reports Auden: "Auden wrote that" 55 times in 21
  pieces, "Auden says", "Auden calls", "Auden quotes". It is the method
  (rule three: his view, marked as his); the critics varied it piece by
  piece wherever one frame reached their count. Past and present both
  stand, as on the approved page: the past for what he said at a date,
  the present for what a text of his says.
- Names the site keeps for its tools: "the lexicon of Shakespeare's
  words" (4 pieces, each naming Schmidt at its foot), "first example"
  (10 times in 6 pieces, each the dictionary's or Auden's own first
  example). One sentence of a handbook, that a rhyme returning at once
  makes its two lines one unit, stands on four pages (tempest,
  don-giovanni, faust, henry-iv-2), each citing Baum: the same teaching
  in the same words, left.
Nothing set.

## 3. A sense said three times on a Word tab (16:23)

Decided: the tab is built so that the gloss under the word gives its
sense at a glance, the caption says why the word matters, and the note
gives what stands behind the sense (the root, the date, the other
sense, the dictionary's own example). A note stays where it adds one of
those; it goes where it only says its gloss again. Counted by script:
of 442 notes under words, ten add three content words or fewer to
their gloss, and nine of the ten add a fact (a root, a date, the
foreign word itself). One goes: magic-flute, first passage, the note on
row p:16.0 words 1 to 3, which said only what the gloss and the caption
say. The gloss stays under the row.

## The small ones passed up by finishers (16:23)

- **magic-flute, two pairs of spellings.** The libretto's spelling
  stands in the passage and the caption, the dictionary's headword in a
  note and in the folded line. For the word for a man of nature the
  note now says that the spelling is Adelung's ("Adelung, who spells
  the word *Naturmensch*, defines it as …"). The word for lot is left:
  its dictionary form stands only in a list of headwords, where a
  headword is what a reader expects.
- **magic-flute, two neighboring entries that began on one fact.** The
  last entry of the list no longer says again that there is an English
  version by the two of them; it begins "He and Kallman also wrote
  about the work of translating opera."
- **magic-flute, the order of the sources at the foot.** Left. No page
  sets Auden's books in order of date: each begins with the book its
  head comes from (so the approved page, hamlet, faust).
- **carmen, "famous".** Out of the last caption of the third passage:
  the one stock word the scan of printed prose had left.
- **Caption lengths (blake and others).** Counted for all 35: means of
  98 to 116 words, with two to nine captions of a piece at 110 or more.
  The approved page has a mean of 103, one at 120 and four at 110 or
  more, so the pieces keep its measure. The critics cut padding piece
  by piece. Nothing set.
- **A poem's title in a place line (rilke)** is the kit's to set (a
  title stands upright in a line that is all italic): on the list for
  after the mending, with tristan's three.
Edits: `lead/edits-lastpass.json` in magic-flute and carmen, the
readings before in `lead/before-lastpass.json`; checker clean on both;
magic-flute's first passage photographed at 1280 and 390
(`shots/small/`).

## 1. The measure of a line under one wording (applied 17:56 to 18:07)

A reader went through all 36 Beat tabs of 23 pieces after the three of
the approved page and proposed 73 exact edits in 21 pieces, with 6 more
outside the Beat tabs (`review/remake/last-pass/measure/`: one list a
piece, `outside/`, `edits_data.py` with the reason for each, and its
own check). Its report could not be saved as a file by the agent; the
substance is in `edits_data.py` and in the piece notes.

**The rule, taken whole.**
- A. A measure of stresses is named by its beats, by its syllables
  where the count matters, and by "the line beginning off the beat" or
  "on a beat". "Rising", "each after a lighter syllable" and "each beat
  after an off-beat" go. Blank verse takes the Tempest's line: "ten
  syllables and five beats, the line beginning off the beat".
- B. In verse measured by count an accent is a place the count fixes,
  and a stress is what the voice does. The key under a counted tab and
  the Don Giovanni page already spoke so. The other way round ("stress"
  everywhere) would have cost as much and rewritten the Don Giovanni
  tab; not taken.
- C. "Light syllable", "weak", "the pattern", "the meter", "scanned"
  give way to "unstressed", "where the measure has no beat", "the
  measure", "marked". Names a caption teaches stay (foot, anapest,
  alexandrine, blank verse, weak ending).

**Tested before it went in.** Every new measure line was held against
the marks by script: syllables and beats counted row by row, and the
first mark of each row read (so "throughout" on faust `heaven` and
fidelio `scene`, "eleven and ten by turns" on magic-flute and rilke).
All true of the marks.

**The lead's amendments** (`measure/lead-apply.py`, 100 edits in 23
pieces in all):
- dante-purgatorio: "as a rule" before the fourth or the sixth, the
  Paradiso page's hedge. The two grounds cite the same Treccani
  article, and the Paradiso ground says "in the prevailing type".
- Four counted tabs were named Beat: the three Dante tabs are now
  Measure (as the Orpheus tab for the same line) and the Don Giovanni
  tab is Count. No printed sentence named them.
- dante-purgatorio `garden` and rimbaud `stanza` wrote their count
  with "x", so they carried the key for beats under a measure line
  that speaks of accents. The "x" is now ".". The kit draws both the
  same: the pictures before and after are the same to the pixel but
  for the words (rows compared at 1280).
- fidelio `scene`: the clause "the line beginning off the beat
  throughout" is left out of the measure line, since the caption's
  first sentence says it.
- "Half-line" with a hyphen (henry-iv-2, peer-gynt); traviata's Scene
  fact says "with an accent on the third and on the seventh"; horace's
  first caveat says "within each foot" where "measure" meant a foot.
- Left as the reader proposed: the henry-iv-2 caption names ten
  syllables (the norm, as the measure line does); hamlet's "falling
  rhythm" explains itself without its opposite.

**After.** The checker says of each of the 23 what it said before.
Both sweeps against the five scans: no run of five in any field that
changed. Pictures of the 36 tabs before and after at 1280 and 390 are
in `shots/measure/` (`before`, `after`, `crops`: the part that
differs, before over after). At 1280 the differences stand in the
words only.

**The front page's cards** follow: faust says "four beats, the line
beginning off the beat"; peer-gynt's own measure line is dropped, the
page's serves (`remake/front.json`).

**Waiting on the kit** (asked of the eighth mending at about 17:45):
the key's "the meter" becomes "the measure: a long stroke is a beat, a
short one an off-beat"; the counted key says "where the measure has an
accent" for "where the accent must fall" (on Dante's pages both the
fourth and the sixth are marked on some lines, and "must" is too
much); a tie backward for the article in row 1.0 of don-giovanni
`count`, after which the last sentence of its second remark goes.

## The Word tab under one name (18:07)

The site critic by word, labels, 5: "Word" on 36 passages and "Words"
on 30. The front page and the approved page say "Word". The 30 are now
"Word" (`tools/word-label.py`, which changes nothing else and proves
it; readings before in each piece's `lead/before-word-label.json`).
Fifteen pieces: baudelaire, blake, castle, don-giovanni, faust,
fidelio, hamlet, horace, karamazov, kierkegaard, magic-flute, orpheus,
phedre, traviata, tristan. No printed sentence names the tab; the
examiners' notes in `open` that do are left as they were written.

## The site critic by word, applied (17:10 to 18:07)

The report is `review/remake/critics/site-words.md`; every file is
kept as it was in `review/remake/critics/site-words-lead/`.

- **Taken.** Its five main faults: the note on the prose Dante's
  contents page (A1, A2, D8); the Swarthmore entry, which nothing
  cited (A3); the first version's files in the published folder (A4:
  moved to `first-version/`, with a README; the book of four poems
  now prints the two by Rilke); the front page (B1 to B8); the about
  page (C1 to C17 and E), rewritten so that who made the site is said
  once at the top and the file no longer reads a first-version source.
  Its nine overlarge claims, each reworded. Shelf and reader D1 to D9.
  Labels 1 to 8, 10 and 12.
- **Changed from its wording.** The foot is emptied on the about
  page, not hidden (hiding it left the page without its last rule).
  The front page's intro is one paragraph. A narrow no-break space
  follows the italic word before "is" in the first card's note. Faust's
  card shows rows 0.2 and 0.3, because Taylor turned the first two
  lines round. The cards' small words are written in
  `remake/front.json` under `say`, and the build refuses one that no
  longer fits its card (`build/front.mjs`, `resay`).
- **Left.** The Tempest on two cards of the front page; B9; the
  Baudelaire card keeps the English first; "This site" about a dozen
  times on the about page.
- **Found by the sweep afterwards.** Two sentences of the about page
  shared five words with Pearce's essay (the Lycidas exercise; the
  five blue books): loosened. The three names of Auden's courses for
  poets stand as he gives them, with the page.
- **Waiting on the kit.** Label 9 (the key's "the meter") and label
  11 ("A record of it"): asked of the eighth mending. A rule in the
  stylesheet for the front page's one paragraph and for the foot.

## The four kinds of words the prose tool did not gather (18:31)

The critic of the site's own words said what `site.md` did not hold
(`review/remake/critics/site-words.md`, "What `site.md` does not
hold"). `build/tools/prose.mjs` now gathers all four into `site.md`:

1. The notes on the books' contents pages, with the name of each
   book's source (from `site/data/texts/<book>/index.json`; 18 books
   have a note).
2. The small words of each card of the front page as built
   (`site/data/front.json`), one line a card, in the order the card
   shows them.
3. Labels of one word in the site's data (Contents, Previous, Next,
   What, About, and the like); a key that holds a code (`kind`,
   `row`) is left out.
4. The legends of the keys, which begin with a small letter (the Beat
   key's and the Rhyme key's rows among them).

Three kinds of noise are filtered out (a list of small Latin words in
`plate.js`, a media query, the viewport's setting). The pieces' own
prose files are byte for byte what they were. `site.md` now holds
8,246 words by the tool's count.

Read by the lead: the 18 notes and the 35 cards' lines. One thing set:
the Horace book's note now opens by saying that the translation was
first published in 1863 and that the text is the third edition
(London: Bell and Daldy, 1865), in the form the Peer Gynt note uses.
The reader's head gives 1863 and the page's label over the English
gives 1865; the note now joins them. The facts are those of
`build/texts/notes/horace.md` and the reading's sources. The book was
built again: only its `index.json` changed; `check-text.mjs` is good.
Copy before: `review/remake/critics/site-words-lead/horace.mjs.before-note`.

The first card's note has a narrow no-break space after the italic
word in its last sentence (so the slanted letter does not lean on the
next word). It is meant, and stays.

Swept again, `site.md` only, against the five scans: 26 runs where
there were 24. The two new ones are in the new words: a card's line
that begins with Blake's name and the title of his book (seven words,
with Mendelson's biography), and five small words of the Rimbaud
book's note (with the same). Both stand. The forgiving sweep shows 21
where it showed 19: the two new ones match a scan only through a
misread word, and stand.

## One form for the books many pages cite (applied 18:47, recorded 18:53)

Laid side by side, the citations of two of Auden's books stood in many
forms. His collected prose was named ten ways (the full title of the
Complete Works, "Prose, Volume II" inside one pair of italics, "vol. 2",
"volume II", "Prose II", with and without years, editor, press and date).
Four pages gave page numbers of *The Enchafèd Flood* with no edition, and
the rest named the edition four ways. A reader who went from page to page
could not tell whether two citations were of the same book.

The forms now, on every page:

| where | form |
|---|---|
| under an entry of what Auden said (`view.source`, `auden[].source`) | `in *Prose*, vol. II (2002), pp. 137–40` |
| in a `stands` line | `*Prose*, vol. II, p. 82` (no year); `*The Enchafèd Flood*, p. 84` (the title alone) |
| in the list of sources at the foot (`sources[]`) | `*Prose*, vol. II: 1939–1948, edited by Edward Mendelson (2002)` the first time the list names the volume; the short form after that. Vol. III: 1949–1955 (2008) |
| wherever a page of it is cited under an entry or in the list | `*The Enchafèd Flood* (1950; Vintage Books edition, 1967), p. 107` |

Why the Vintage edition is named everywhere: every page number of that
book on the site is that edition's. All the pieces were written from one
scan (`research/auden/ef.txt` in the scratchpad), and its own front matter
says it is the first Vintage Books edition, September 1967 (the scan's
lines 54–60). A page that cites "(1950), p. 107" sends a reader with the
Random House edition to the wrong page.

Done by `review/remake/last-pass/tools/cite-forms.py`, which scans the raw
text of each reading for its string values, changes only those three kinds
of line, and proves two things before it writes: that the page numbers of
every changed line are what they were, in order, and that no other leaf of
the reading changed. A copy of each reading as it was is at
`remake/works/<piece>/lead/before-cite-forms.json`.

87 lines in 20 pieces (48 under an entry, 25 in a list, 14 `stands`; the
form of *The Enchafèd Flood* changed in 20 of them): antigone 2,
baudelaire 4, blake 6, carmen 5, castle 1, dante-inferno 8,
dante-purgatorio 3, don-giovanni 4, family-reunion 9, faust 4,
gotterdammerung 6, kierkegaard 5, magic-flute 4, moby-dick 5, peer-gynt 4,
phedre 1, rilke 1, rimbaud 6, tristan 8, volpone 1. The checker says of
each of the twenty what it said before. Each piece's `notes.md` has a
dated section naming its lines.

The small ones, done by the same tool:

- Mendelson's biography takes its subtitle (": A Critical Biography") in
  the two kierkegaard lines that lacked it.
- Ansen's *Table Talk* takes "edited by Nicholas Jenkins" under the
  entries of blake (1991), phedre (1990) and volpone (1991). The two years
  are those of the American edition (1990) and the Faber edition (1991),
  as each piece has it, and are left.
- peer-gynt's `view.source`: a bracket inside a bracket became "; reprinted
  in *Prose*, vol. II (2002), pp. 110–13".

The about page (`content/about.mjs`, four exact edits; copy before at
`review/remake/critics/site-words-lead/about.mjs.before-cite-forms`): the
row of what is cited as what, the sentence that introduces the short name,
one row of the table of the course's records, and the entry in Works
cited, which now reads `*Prose*, vol. II: 1939–1948, edited by Edward
Mendelson (Princeton University Press, 2002), a volume of *The Complete
Works of W. H. Auden*`. `node build/shelf.mjs` was run after it.

Left as they are, on purpose:

- pascal's Ansen with its place and press (London: Faber, 1991): it is
  the only citation that gives a press for that book and it is right.
- The variants of *New Year Letter* (the poem, the book, the American
  title): each says a different thing.
- Volume numbers in Arabic for other authors' works.
- Vol. I of the prose, whose own title is longer and stands once.
- Two sentences in running prose that give *The Enchafèd Flood* its year
  alone, with no page; and the about page's own entry for the book, which
  names Random House, 1950 and says the pages are the Vintage edition's.

Not yet built into the site's data when this was written: `node
build/pieces.mjs` waits until no picture run is reading `site/data`.
After the edits the printed words were gathered again (`node
build/tools/prose.mjs`: 152,978 words) and searched for every old form:
none is left.

## One wording for each figure (applied 19:54 to 20:07, recorded 20:08)

The fault. The 82 Figure tabs name 30 figures, and 17 of them stand on more
than one page (69 tabs). Each tab says in one line under the figure's name
what the figure is (`plain`), and each poet had written that line alone, so
antithesis was said twelve ways on its thirteen tabs, anaphora ten on ten,
metaphor seven on eight, chiasmus six on seven. A reader
who met the same name on a second page met a different definition, and
could fairly ask which was meant. Some of the lines also ran close to a
handbook's own sentence.

How it was done. A reader (an agent, briefed in `figures/BRIEF.md`) laid
every tab side by side (`figures/TABS.md`, as they stood at 18:50), opened
the handbooks the tabs name and the pages of sixty entries (saved in the
scratchpad, with the address and time of each: 18:49 to 19:00 UTC), and
proposed one line for each figure (`figures/WORDINGS.md`) with a list of
exact edits for each piece. Its first attempt ended with nothing saved (one
answer too long); it was sent on with orders to save early, and finished.
The lead then weighed each proposal against the marks of every passage and
the caption beneath, and built its own lists from a table
(`figures/lead/lead_lists.py`). The reader's lists in `figures/` are stale
and are not to be applied.

What was taken as proposed (15 lines; a tab's own tail, where it has one,
follows after "; here"): antanaclasis, antimetabole, antithesis,
aposiopesis, apostrophe, chiasmus (the Tempest's own line, which leads),
metaphor, paradox, periphrasis, polyptoton, refrain, simile, stichomythia,
and two that stand on one page, extended metaphor and climax. The lines
themselves are the table `WORDING` in `lead_lists.py`.

What the lead fitted instead. For anaphora, epistrophe, anadiplosis,
parallelism and asyndeton the reader proposed a line that lists the cases
("one line, clause or phrase after another"). Under a passage that shows
one case, such a line makes the reader of the page work out which. So each
of these keeps one sentence, and its number and unit are fitted to the
passage, as the caption beneath already says it:

- anaphora: "the same word(s) at the head of U after U" (ten tabs; the
  unit is the line, the clause, the phrase or the sentence, and two tabs
  name two units);
- epistrophe: "the same word at the end of phrase after phrase";
- anadiplosis: "a doubling back: the word(s) that end(s) one U begin(s) the
  next";
- parallelism: "U of the same build, set side by side";
- asyndeton: "U set side by side with no joining word between them".

The table `FITTED` holds each whole line, and `FRAME` asserts that each
fits its sentence. Each number was checked against the width of the marks
on the passage; one was wrong as first applied (Faust's `wheel` said
"words" where every mark is one word wide) and was set right at 20:04.

Three lines the lead worded itself: agamemnon `net` (a metaphor that
follows a simile, and the tail says so), antigone `answer`/Knowing (the
tail names the two forms of the one verb) and traviata `end` (antilabe,
which stands on one page: one line of verse divided between speakers, the
pieces together keeping the measure).

Closeness. Every new line was tested against the sixty saved pages and the
extracts of the *New English Dictionary* and of Baum (`lead_lists.py runs
<folder>`): the longest run of words any line shares with any of them is
four. The old lines of adams and orpheus on the front page each shared
five with *Silva Rhetoricae*; both are gone (below).

Applied by `review/remake/last-pass/tools/figures-apply.py --lists
review/remake/last-pass/figures/lead --write`, which proves before it
writes that each old string occurs once, that the reading still parses,
and that the only leaves changed are the `name` or `plain` of a lens whose
kind is `figure`, and which refuses the Tempest. 62 lines in 32 pieces, no
name changed: adams 2, agamemnon 4, antigone 3, augustine 3, baudelaire 2,
blake 2, carmen 1, castle 1, dante-inferno 3, dante-paradiso 2,
dante-purgatorio 2, don-giovanni 1, dutchman 1, faust 2, fidelio 1,
gotterdammerung 1, hamlet 2, henry-iv-2 2, horace 1, kierkegaard 1,
magic-flute 2, moby-dick 2, orpheus 1, othello 1, pascal 6, peer-gynt 3,
phedre 2, rilke 2, rimbaud 2, traviata 2, tristan 1, volpone 1.
family-reunion and karamazov needed nothing; the Tempest was not touched.
A copy of each reading as it was is at
`remake/works/<piece>/lead/before-figure-wordings.json`, with the list
applied beside it. The checker says of each of the 32 what it said before.

A stumble, for whoever runs such a tool again: the first run stopped
after ten pieces, because dante-purgatorio already had a copy under the
name the tool wanted (from the pass of 16:07). The command was piped into
`grep`, so the stop did not stop what followed. The copies were renamed,
the lists rebuilt from the readings as they then stood, and the count
proved against the kept copies.

What each line stands on (`review/remake/last-pass/tools/figure-sources.py`,
20:04). On six pages the new line says more than the handbook its tab's
`stands` line named, so the handbook that carries the rest is named there
and in the page's list of sources. Each was checked first in the saved
page: *Silva Rhetoricae* says of antithesis that it is often in parallel
structure and of metaphor that one thing is referred to as another; the
Online Etymology Dictionary gives anadiplosis as a doubling back.

- antigone `answer`/Sides and its list: *Silva Rhetoricae* under antithesis;
- horace `bee`/Contrast: *Silva Rhetoricae* beside Allen and Greenough,
  whose glossary gives only opposition or contrast; a new entry in the list;
- augustine `pears`/Itself and pascal `heart`/Against: a sentence naming
  *Silva Rhetoricae* (both lists had it);
- baudelaire `warning`/Wing: *Silva Rhetoricae* beside the Online Etymology
  Dictionary; a new entry in the list;
- carmen `habanera`/Figure: the Online Etymology Dictionary beside *Silva
  Rhetoricae*; a new entry in the list.

Two of those lines went over the 70 words a `stands` line may have. The
Horace line dropped "’s grammar" (as the page's other lines name the book);
the Carmen line gave up a word or two in three sentences. Copies before:
`lead/before-figure-sources.json` in each of the seven pieces. The checker
says of each what it said before.

One caption. faust `wheel`/Anaphora said the figure in a phrase that shared
five words with two dictionaries; it now says "at the head of line after
line", as the tab's line does.

The front page (`remake/front.json`, two exact edits; copy before at
`figures/front/front-before.json`): the card for adams no longer overrides
the line, and the card for orpheus overrides it with the definition alone,
without the tail about the passage.

Left as they are, on purpose: "named" in the chiasmus line where a page's
crossing is of sounds or of grammar (magic-flute, tristan: the tails say
which); simile without "like" or "as"; captions that say more of a figure
than its line; the Antigone caption's six words from the *Century
Dictionary*, which is out of copyright and named; the ten other figures
that stand on one page.

Not yet done: the build (`node build/pieces.mjs` waits until no picture
run is reading `site/data`), so the site's data still has the old lines;
and, once the eighth mending of the kit is in and a `plain` line can carry
marks, the words quoted in three lines (baudelaire, antigone, carmen)
become marks.

## Readings set for the eighth mending (20:16 to 20:21, before its merge)

The mender's record (`remake/kit8/RECORD.md`) was read to the end while it
ran its last sweep. Five things that waited on what it built are set in the
readings, each by exact edits with a copy kept in the piece's `lead/`, the
checker saying of each piece what it said before, and a dated section in
its `notes.md`. None is built or seen yet: each is to be looked at after
the merge and the build.

- The checker (`build/tools/check-reading.mjs`) knows the voice mark `<`: a
  syllable that is not counted and runs into the syllable before it. It is
  counted as `~` is, and refused on the first syllable of a row. `POET.md`
  names it. (Copy of the checker as it was: the scratchpad,
  `check-reading.before-backtie.mjs`.)
- don-giovanni `count`, Count, row 1.0: word 4 takes `<` for `~`, and the
  last sentence of the second remark, which told the reader that the arc
  stood on the wrong side, is gone (`lead/before-back-tie.json`).
- phedre `names`: the two speakers' names over the French, by `stage`, as
  Carmen's and Tristan's plates have them; the names are the source's
  (`lead/before-stage-names.json`).
- dante-purgatorio `share`, Simile: `"join": [[0, 2], [1, 3]]`. The mending
  draws the joins a reading does not name all alike or not at all, and this
  tab's two (a stroke and an arc) both went; both say what the caption says
  (`lead/before-join-share.json`).
- Named words take their mark (`review/remake/last-pass/tools/named-words.py`,
  which proves that only these leaves change): since the mending's 3c a
  word between asterisks stands upright in a key's label and in a Figure
  tab's line. baudelaire `evening`/Likeness (two labels, and the line's
  quoted word), antigone `answer`/Knowing and carmen `habanera`/Figure (the
  quoted words of their lines), hamlet (seven labels on three tabs),
  tristan `end`/Sentence (two labels): 28 leaves in five pieces
  (`lead/before-named-words.json`). The table of figure lines
  (`figures/lead/lead_lists.py`) holds the two marked lines and still says
  "0 edits in 0 pieces".

Not set, and why:

- traviata `refrain`, Refrain: its two strokes (a word that ends one line
  and begins the next, in each stanza) cannot come back by a `join`,
  because an aligned figure that carries a `join` loses its spines
  (`lens-figure.js`: `kind === 'align' && !lens.join`). The kit must first
  draw the spines and then the named joins. No aligned tab carries a list
  of joins today, so that change can move no plate; four carry
  `"join": "none"`, which must go on meaning underlines only.
- magic-flute `queen`, Count: the eight words of the caption's first
  sentence that say whose English stands under the aria wait for a picture
  of the legend the mending prints at the head of the passage.
- hamlet `seems`, Rhyme: `endsKey` in the reading is read by nothing; the
  two lines under the letters are the kit's own.

A slip of the lead's, mended: `lead_lists.py`, run with no argument, cleared
every `.json` file of its folder, and took the two files of the front
page's change with it. They were in the shared copy (synced at 20:14) and
are back, in `figures/front/`; the tool now clears lists of pieces only.

## After the merge of the eighth mending (22:38 to 23:00)

The kit's side of this is in `remake/KIT-CHANGES.md`, in the eighth
mending's own section and in "After the eighth mending: the lead". What
touched words and data:

- **The build** at 22:38 and again at 22:49: "35 pieces with a reading", no
  problems. It is the first build to carry the citation forms, the figure
  lines, the Horace note's edition and the readings set at 20:16 to 20:21.
- **The front page.** The cards of each kind run in two columns. The cards
  of a kind stand in the order of Auden's list unless `remake/front.json`
  gives an `"order"` for that kind; it gives one for figure and for
  sentence, where the list's order left the columns 435 and 163 px apart.
  They now end within 1 and 42 px; the others, in the list's order, within
  23 (beat), 11 (rhyme), 14 (word) and 61 (compare). A key's label and a
  figure's line go through `marked()`, so a named word written `*word*`
  prints upright on a card as on its page. Edits:
  `review/remake/last-pass/kit/front-order-edits.json`,
  `front-home-edits.json`, `front-css-edits.json`; the file before,
  `front-before-order.json`.
- **moby-dick `whenever`**, Sentence (20:40): four key labels hold a
  no-break space after the numeral. **magic-flute `queen`**, Beat (22:44):
  the caption's first sentence is out, because the legend the mending
  prints at the head of the passage says both things it said; one working
  note that waited on this is out of `open`. Each in its piece's notes,
  with a copy before in `lead/`.
- **The tests, on the build as it stands (22:52 to 22:57).**
  `node build/tools/prose.mjs`: 152,999 words. The plain sweep against the
  five scans: 356 runs (354 at 18:10). The runs that are new: phedre, a
  figure's line (five common words that say a sentence is left
  unfinished); the note on Rimbaud's book (five small words); the front
  page's card for Blake (the author and the title). The same sweep
  forgiving a misread word: 304 more, the new ones common phrases of the
  figures' lines and two names. The snippet test over the sentences changed
  since it last ran (1,123 searches in dante-inferno, dante-paradiso,
  dante-purgatorio, dutchman, faust, hamlet, magic-flute, pascal): the runs
  found are small words, titles, a date and one doctrinal phrase. Nothing
  loosened.
- **The private site, version 7 (22:59).** The snapshot differs from
  version 6 in the page itself and in one book's pack (Horace, for its
  note). Walked plain and sandboxed: "nothing reported", 35 pieces linked
  from the front page, no place that says "to come".
- **The shared folder (23:00).** 133 files copied and read back: none
  differs. The menders' copies and the critic's pictures are not in it yet.

## The word critic of the last pass, applied (4 October, 00:05 to 00:11)

The pieces' critics read before the last pass put one wording on the
measures and the figures, and before the front page's cards were rebuilt.
So one more critic read those lines as a reader: 82 figure lines, 40
measure lines and the front page as built, every Figure and Beat tab from
a picture. Its report is `review/remake/critics/last-pass-words.md` (24
points; it found 73 of 82 figure lines, 32 of 40 measure lines and 26 of
34 cards sound). The edits: `review/remake/last-pass/words/edits.json` and
`edits-2.json`, applied by `review/remake/last-pass/tools/words-apply.py`
(exact text, the file before kept in each piece's `lead/`, the changed
leaves proved to be those named). 36 strings in 19 readings; the checker
says of each what it said before.

Applied as proposed: 2 (carmen, the measure of the card scene), 4
(baudelaire: the caption no longer defines metaphor a second way), 5
(tristan: "unstressed" for the retired word), 6 (fidelio: the lines are
named by their place, not by a name the page never gives), 7 (pascal:
"the headings"), 8 (gotterdammerung: the year after the translator's name,
as the shelf has it), 9 (kierkegaard: the definition stands once), 12
(fidelio: every line but the name begins off the beat), 14 (kierkegaard:
whose silence it is), 15 (orpheus), 16 (tristan, in the measure and in the
caption, which is back at 120 words by two small cuts), 17 (four key
labels mark their named words), 18 (antigone: "mostly"), 19 (traviata), 21
(horace), 22 (phedre: the accents on the sixth and twelfth syllables), 23
(henry-iv-2: "without rhyme", after a script found no two nearby lines of
the passage ending alike), and of 24: castle, othello, carmen, the two
Faust measures, and the Magic Flute's "Without rhyme, the line of five
beats is".

Applied in other words: 10 (rilke: the tail is cut, as the critic's first
choice); 11 (kierkegaard: the proposed tail made the line 33 words, three
over; it now ends "the same opening and a matching last sentence"); 20
(only where the caption said the line again whole: rilke `panther`, faust
`heaven`).

In the front page's script (`site/js/home.js`; the file before is
`review/remake/last-pass/kit/home-before-words.js`): 1, a card's key now
names every label a color carries on the card, as the piece's page does;
3, the Beat explanation begins "The rule under each line is its measure."

Left, with the reason: 13, the six captions that define metaphor,
polyptoton or paradox in their own words (each agrees with the line under
the figure's name, and the line's words in the caption would be the fault
of 9 and 20); the other six tabs of 20 (none misleads); of 24,
baudelaire `evening` ("the word" points back to "a word of comparison");
the Othello card's second row, which is one word of two syllables under a
measure of ten: to be looked at when the front page is next built.

Not built yet: the critic by eye is photographing the built site.

## The ninth mending merged (4 October, 01:19 to 01:24)

Both menders handed in (the lenses at 01:06, the rows at 01:17); the merge,
the two changes each asked of the other's files, the readings set and the
front page's script are recorded in `remake/KIT-CHANGES.md`, "After the
ninth mending: the lead". Six readings took new keys (traviata, fidelio,
baudelaire, tristan, hamlet, magic-flute); no caption or claim changed in
them. The build at 01:20 carries these and the word critic's 36 wordings.
The Othello card of the front page shows a third row. Still to do when the
critic by eye has handed in: its report, the tests, a new version of the
private site.

## The critic by eye, applied (4 October, written 02:32 UTC)

Report: `review/remake/critics/site-eye.md` (twelve chief points). Files before: `.cache/before-eye/`.

Mended: a front card's English version is labelled "Under each line: ..." (`site/js/kit/plate.js`); a card opens its own plate and tab by the route `<piece>/<plate>/<tab>` (`build/front.mjs`, `site/js/home.js`, `site/js/main.js`, `site/js/piece.js`); the about page ends with space and a rule; a book's title in the shelf's list is underlined; the opening quotation is balanced on a phone (`site/css/atlas.css`); Don Giovanni's three plate labels say "as first printed" (tag `eye`).

Left for a tenth mending: tabs have no common names; on a phone a plate's second text comes after the caption and key; plate heads, labels over passages and the caption's place differ from piece to piece; the shelf's thin spines carry no name; verse in the reader hangs left under a centered head; specimen lines of three sizes on cards.

Tested after: prose 152,970 words; plain sweep 356 runs, none new; no snippet search owing; both walks clean. Published as version 9 of the private site; only index.html and local.html differ from version 8, no pack. The shared folder gave "Input/output error" again and holds nothing after 23:00 on 3 October.

## The deploy of the remade site (4 October, 05:22 to 05:38 UTC)

**The owner's word.** At 05:22:22 UTC he wrote "deploy please" in the project chat, in answer to the post that asked for his word to deploy the remade site. The coordinator passed the message to the thread with the post it answers.

**Checks on the folder before it went.** `site/` held 1,257 files, 45 MB, no symbolic link. Searched for the owner's name and login, model names, local addresses, the scratch folder, `/tmp/`, `first-version`, TODO, FIXME, lorem: nothing, but for one thing. No address outside the site is loaded by the page, the scripts or the stylesheet; the data names only its sources (Project Gutenberg, the Internet Archive, Zeno, the Library of Congress, Wikisource, Standard Ebooks and a few others).

**The one thing found.** The page data of every piece carried the `source` of each gloss of a Word tab: 705 strings saying in which dictionary or edition a sense was checked, 54 of them with working words (file names, line numbers, "OCR", and in Traviata the scratch folder). The page never prints them (`site/js/kit/lens-word.js` does not read the key, and `review/remake/prose/` has none of them), but anyone could have fetched them. By the rule already written down (working notes never leave the reading) they should not be sent. `build/lib/printed.mjs`, `lensForSite`, now leaves the `source` of a lens's notes behind. None of them held a quoted run of more than 25 words.

**Proof that nothing else changed.** Built again (`node build/pieces.mjs`: 35 pieces with a reading). Of the 36 files in `site/data/pieces/`, 2 are the same to the byte and 34 are the same but for the gloss sources (compared as data, with the sources taken out of the old file); gloss sources left: 0. The other 1,221 files of `site/` are the same to the byte as before. `npm test`: 6 pass, 0 fail. The site was walked in a browser before and after (`review/remake/last-pass/tools/walk-site.mjs`, logs `walk-site-before-strip.log` and `walk-site-deployed.log` beside this record): 35 pieces linked from the front page, no place that says "to come", 35 cards that open their own passage and tab, every tab of every passage pressed, the shelf, a book, the about page, a record playing; "nothing reported", exit 0, both times. The mark of the words on each of the 35 pieces is the same in both walks. Two lines differ, both by timing: the count of the front page's characters on coming back to it (the cards were still filling in the first walk), and the record's time.

**Two more changes in the same deploy.** `site/index.html` gives its title and its description (the same sentence, unchanged) to link previews: four `meta` lines (`og:type`, `og:title`, `og:description`, `twitter:card`). The comment at the head of `netlify.toml` says where the first version is kept; its settings are unchanged.

**What was sent.** `python3 review/remake/last-pass/tools/deploy-zip.py <zip>`: `netlify.toml` and the 1,256 files of `site/` without `site/js/kit/README.md` (notes for whoever mends the kit). The zip is kept as `deploy/fate-and-the-individual-site-2026-10-04.zip` (35,118,846 bytes, sha1 b2897d9d5a72a9378f0224695c29acb884cb758b), with the list of its files and their checksums beside it. The connector's deploy operation gave a short-lived address; the zip was posted to it at 05:35:58 (http 200). The command the connector prints names an npm package, which was not run. Netlify project `auden-english-135`, deploy `6ac1e5c19978e364d0e16891`, build `6ac1e5c19978e364d0e1688f`, context production, state ready, published 05:36:12 UTC.

**Checks on the live address.** `python3 review/remake/last-pass/tools/live-compare.py <list> https://auden-english-135.netlify.app/ <folder>`: 1,256 files listed, 1,256 the same on the live address, 0 not the same. Content types: css `text/css`, html `text/html`, js `application/javascript`, json `application/json`, mp3 `audio/mpeg`, txt `text/plain`, woff2 `font/woff2`. Headers: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`. `js/kit/README.md` and `netlify.toml` are not served (404). Netlify's own picture of the deploy shows the front page drawn: the name, the three links, Auden's opening question with its citation, and the Tempest's song with the beat marked. A browser here cannot reach the live address (the proxy's certificate is not one it trusts, and that check is not to be turned off), so the browser's walk is the one of the folder, whose files the live address serves byte for byte.

**The owner was told** at about 05:38 UTC, with the address. The first version is no longer online; its files are in `first-version/`, and the zip that was deployed on 2 October is `deploy/english-135-site.zip` in the shared folder.
