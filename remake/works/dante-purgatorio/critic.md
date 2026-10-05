# dante-purgatorio: the critic's report

Critic's record for "Three places on the mountain", 3 October 2026 (times
are UTC), after the examiner (exam.md) and the artist (art.md) had
finished. Begun 10:24. Words of the poem and of the translations are
pointed at by row and word number, or named singly as the captions
already name them. Nothing of Auden's is quoted. "Old" and "new" are the
site's own sentences. Nothing in this file is printed on the page.

## 1. What was read and run

- `node build/pieces.mjs dante-purgatorio` and
  `node build/tools/prose.mjs dante-purgatorio` (4,908 words printed).
- The pictures, first reading. The artist's last run of the picture tool
  ended at 10:21, three minutes before I began, and nothing the page is
  made from had changed since (the reading 09:12, the piece's script
  09:24, the kit 10:14). So I read the page first in those pictures, and
  kept the two runs allowed me for the page as I leave it. Then
  `review/remake/prose/dante-purgatorio.md` from top to bottom once
  before anything was marked, then sentence by sentence.
- Beside it: BRIEF.md, CRITIC.md, EXAMINER.md; the reading, notes.md,
  exam.md, art.md; the checker and its list of flagged words; the kit's
  `rich.js`, `lens-word.js`, `lens-compare.js`, `lens-beat.js`,
  `lens-sentence.js`, `lens-figure.js`, `lens-shape.js` and `diagram.js`
  (to see how asterisks, key rows and pointer notes are printed); and
  `site/js/pieces/dante-purgatorio.js` (read, not edited). As models, the
  critic's report of dante-paradiso and the "Taken out" section of
  hamlet's notes. For the two entries I took out of the list I read the
  two pages of Auden they rest on in the scans; for the artist's second
  point I read the prose of canto XVII round lines 85 to 91 on the site.
  I checked no fact again beyond that: the examiner's record stands.
- While I worked the kit changed (10:29 to 10:36: `plate.js`,
  `lens-word.js`, `lens-shape.js`, `atlas.css`, `piece.js`, `draw.js`,
  `lens-figure.js`). The passages now carry three small points where
  lines are left out, and a key row of a figure whose labels hold a comma
  is parted by semicolons. Both bear on this page: change 24 uses the
  second, and the first puts on the page the mark of omission that the
  tenth item of `open` asks for, so the lead can close that item. The
  kit changed once more at 11:05 (`plate.js`, `atlas.css`), before my
  second run of the picture tool.
- The picture tool, first run, 10:47 to 10:49, after the first round of
  changes ("nothing reported; now look at the pictures"). I opened the
  six slices of the page at 1280 and every tab at 1280, and the Word tab
  of the first passage at 390. Every marked word stands upright in its
  italic note, no asterisk is printed anywhere, and the titles are in
  italics. That reading gave the second round of changes (7, 8, 22 to
  24, 27, 29, and one mark in section 3).
- After the last change: the checker with `--print`, the build, the
  prose tool again (4,754 words printed), and the picture tool a second
  and last time (section 10).

Nothing was refused by the permission system. Once, shortly before
11:00, the check that passes each command was itself out of reach for a
moment and one command (the prose tool) was not run; the message said
to wait and try again, and the same command ran a few minutes later.

I wrote in four places only: the reading, by small exact edits; this
file; the end of notes.md (the two entries taken out); and `shots/` (the
picture tool). The old sentences below are taken from the record of my
own edits in this session. Two small counting scripts stand in the
session's scratch folder, outside the project.

In `shots/`, only the pictures at 1280 and 390 and the slices of the
page are of the page as it now stands. Those at 320 and 360 and the
eight named `extra-…` are the artist's, of 10:19 to 10:21, and show the
words as they were before my changes.

## 2. Every change

33 numbered changes. 30 change wording: 24 sentences reworded, 2 cut,
1 group of three joined, 1 broken in two, and 4 labels of two keys
reworded (2 entries). 3 cut back the list under "More from Auden" and
its sources. The marks of titles and of words named as words (which
change no wording) are counted in section 3. No `turn`, `join`, `heading`, `speakers`,
`beside`, tab label, mark on a passage, number, `grounds`, `facts`,
`view.quote`, `why`, `stands`, caveat or `open` item was touched. Each
entry: where, old, new (or "cut"), the fault.

### The head of the page

1. `where`. Old: "The Divine Comedy, Purgatorio, cantos XV, XVII and
   XXVIII". New: "*Purgatorio*, Cantos XV, XVII and XXVIII". The line
   over the title already reads "Dante · The Divine Comedy:
   Purgatorio", so the name of the work stood twice within an inch.
   This is now the form of the other two Dante pages ("*Inferno*,
   Cantos 3, 5 and 26"; "*Paradiso*, Canto 33"), and the title stands
   upright in the italic line. The figures are as they were: see the
   last doubt in section 6.
2. `view.says`, the last three sentences. Old: "Dante, he wrote, holds
   the exact opposite. What is natural cannot err. Only the mind’s love
   can." New: "Dante, he wrote, holds the exact opposite: what is
   natural cannot err, and only the mind’s love can." A staccato close:
   two sentences of five words set one after the other for effect, at
   the end of the paragraph every reader reads first. The same words,
   joined; 75 words, the limit.

`title`, `about`, `view.quote` and `view.source` are as they were.

### Passage 1, the good that grows by being shared

3. Simile, caption. Old: "marked by <b>così</b>, so, and <b>com’</b>,
   as: the good above". New: "marked by <b>così</b> (so) and
   <b>com’</b> (as): the good above". The two meanings are the words
   "so" and "as", and between commas they read as part of the sentence;
   I lost the thread at "so, and". See the note on brackets in
   section 5.
4. Sentence, caption. Old: "<b>Quantunque</b>, however far, love
   reaches, the worth grows on it." New: "<b>Quantunque</b>: however far
   love reaches, the worth grows on it." The second comma cut the
   meaning in two ("however far" belongs to "love reaches"). It now has
   the build of the statements on either side of it.
5. Sentence, the first label of each row of the key
   (`plates[0].lenses[1].spans[0].label` and `spans[1].label`). Old: "so
   much it gives" and "as it finds ardor". New: "what rises: so much it
   gives" and "what it rises with: as it finds ardor". The key was two
   lists of phrases with nothing to say what the two colors are. The
   caption says it ("as one rises the other does"), and the first label
   of each row now says it where the colors are. The kit prints the
   labels of a row one after another, so the row reads "what rises: so
   much it gives, the worth grows, the more to love, the more love".
6. Word, caption. Old: "is also said of a glass that sends back an
   image." New: "is also said of a mirror that sends back an image." A
   quaint word for the ordinary one. The passage's own word (row 24.2,
   word 2) is the word for a mirror, Okey's prose beside it has
   "mirror", and the first tab of this passage says "like a mirror".
   See the checker's warnings in section 10.
7. Word, caption. Old: "<b>L’etterno valore</b>, the eternal worth, is a
   name for God." Cut. On this tab the same thing is printed under the
   words themselves ("the eternal worth: God") and again in the note
   beside the caption, with the dictionary that says it. In the caption
   it stood between the sentence on the verb for giving back and the
   sentence on Auden and usury, and belonged to neither. The caption
   still goes from what is there to the reason; `why` does not use it,
   and `stands` already lists what only the notes use, so neither is
   trimmed.
8. Word, the note on row 24.2, word 6 (`notes[3].note`). Old: "Rendere
   is first to give back to someone what is owed him; it is also said
   of a glass that sends back an image." Cut (the meaning under the
   word and its `source` stay). It said again, almost word for word,
   the caption's sentence on the same verb; on a phone the note stands
   four lines under that sentence. The caption keeps the fact because
   its last sentence, on usury, needs it.
9. Word, the note on row 23.2, words 3 to 4 (`notes[2].note`). Old:
   "in the Comedy valore, worth, can be a name for God himself." New:
   "in the *Comedy* the word *valore*, worth, can be a name for God
   himself." In the italic of the note the Italian word, its meaning and
   the verb ran together as a list. "The word" says which is which; the
   marks are counted in section 3.
10. Word, the note on row 22.2, words 2 to 3 (`notes[4].note`). Old:
    "some commentators take this one to be a looking glass." New: "some
    commentators take this one to be a mirror." As 6.
11. English, caption, the first sentence. Old: "The English beside the
    Italian is the prose Auden set his class to learn, and the wording
    he copied into his notes." New: "The English beside the Italian is
    Okey’s prose, the version Auden set his class to learn and the
    wording he copied into his notes." The word over that column is
    "Okey", and no sentence on this passage said who or what that is;
    this is the tab about him. The name is no new claim: the remarks of
    this tab and two captions of the third passage already say "Okey’s
    prose".
12. English, caption. Old: "when Auden quotes these three lines he
    brings them in". New: "when Auden quotes the last three lines he
    brings them in". "These" had nothing behind it to point at: the
    sentence before is about one word. The Word caption of this passage
    says "the last three lines" too.
13. English, caption. Old: "Longfellow has <i>aspire</i>." New:
    "Longfellow’s translation has <i>aspire</i>." His name comes here
    for the first time on the page, with nothing to say that he
    translated the poem.
14. English, caption, the last sentence. Old: "On that reading lines 73
    and 74 hold three verbs". New: "On that reading lines 73 and 74,
    the seventh and eighth here, hold three verbs". No line on the page
    carries its number, so the reader could not find the two lines the
    sentence is about. (The same want is in section 9.)
15. English, the remark on row 24.0, word 6 (`ties[0].say`). Old: "Okey
    takes the verb as understand one another." New: "Okey takes the
    verb to mean understanding one another." In the italic of the
    remarks the old sentence read as broken English.
16. English, the remark on row 23.2 (`ties[2].say`). Old: "Okey turns it
    to goodness." New: "Okey writes *goodness*." "Turns it to" is a
    mock-antique way to say translates, and with the word unmarked it
    read as if Okey had made the thing good.
17. English, the remark on row 22.2 (`ties[3].say`). Old: "Longfellow
    again keeps the look-alike word, lucid." New: "Longfellow keeps the
    look-alike word, *lucid*." The kit numbers the remarks in the order
    of the passage, so this one is printed first, and "again" pointed at
    a remark the reader has not yet come to (it is printed third).

Simile, Sentence and Word: nothing else changed. The titles and the
words marked on this passage are in section 3.

### Passage 2, the rule of the mountain

18. Figure, caption. Old: "Auden’s gloss: what is natural obeys
    necessity". New: "Auden’s comment: what is natural obeys
    necessity". "Gloss" is a word of the trade, and on this page a
    reader would take it for the small meanings printed under the
    words.
19. Word, caption. Old: "of every act that earns <b>pene</b>." New: "of
    every act that earns <b>pene</b>, penalties or pains." The one
    Italian word of the caption that was left without its meaning. The
    meaning is the one printed under the word on the passage.
20. Mountain, caption, the first sentence. Old: "Virgil’s three ways of
    going wrong are the plan of the mountain." New: "The three ways of
    going wrong that Virgil names are the plan of the mountain." The
    old sentence can be read as three ways in which Virgil goes wrong.

Rhyme: nothing changed.

### Passage 3, a lady across a stream

21. Figure, caption. Old: "Chiavacci Leonardi’s commentary reads the
    myth as the loss of innocence". New: "Chiavacci Leonardi’s
    commentary reads the myth of Proserpina as the loss of innocence".
    The caption speaks of "the mother" and "the girl" and had not said
    whose story it is. No new claim: the `grounds` item has the same
    four words.
22. Figure, caption. Old: "two pairs: the mother and <b>lei</b>, her;
    <b>ella</b>, she, and the spring." New: "two pairs: the mother and
    <b>lei</b> (her); <b>ella</b> (she) and the spring." As 3: the
    meanings are "her" and "she", and between commas they read as more
    members of the pairs.
23. Figure, caption. Old: "The two words for the girl meet at the comma:
    on one side she is what is lost, on the other the one who loses."
    New: "The two words for the girl meet at the comma. On one side she
    is what is lost, on the other the one who loses." Three sentences
    running were built alike: a statement, a colon, its parts. The third
    is now two sentences.
24. Figure, two labels of the key (`plates[2].lenses[1].parts[2].label`
    and `parts[3].label`). Old: "her, the lost" and "she, the loser".
    New: "her, what is lost" and "she, the one who loses". On a page
    about Dante "the lost" reads as the damned, and "the loser" has
    another sense in present English. The new labels are the caption's
    own words. The row is printed "her, what is lost; she, the one who
    loses" (second run of the picture tool).
25. Sources, caption. Old: "through a wood, singing, and commentators
    name the song at this line. Dante’s lady is <b>soletta</b>, and his
    next canto opens by nearly repeating a line of the song." New:
    "through a wood, singing. Dante’s lady is <b>soletta</b>, and
    commentators name the song at that line. The next canto opens by
    nearly repeating a line of the song." "At this line" came before any
    line of Dante's had been named, and "his next canto" could be either
    poet's. The same facts, in the order a reader needs them.
26. Sources, caption. Old: "Ovid’s telling, whose grove has". New:
    "Ovid’s telling, where the grove has". A telling has no grove.
27. Sources, caption. Old: "she makes him <b>rimembrar</b>, remember,
    Proserpina, and <b>primavera</b> and the flowers". New: "she makes
    him <b>rimembrar</b> (remember) Proserpina, and <b>primavera</b> and
    the flowers". As 3 and 22: the meaning between commas parted the
    verb from its object and made a list of four things.
28. Beat, caption, the three examples after "stressed on the fourth:".
    The sentence says that the first three lines each open on five
    syllables. Its examples, in italics, were row 12.0 word 2, row 12.1
    word 0 and row 12.2 word 1: three syllables, five and four. They
    are now the openings themselves: row 12.0 words 0 to 2, row 12.1
    word 0, row 12.2 words 0 to 1, each five syllables by the marks on
    the tab. No word of the sentence round them is changed, and each of
    the three is found in the passage as the kit looks it up (tried by
    script on the Italian printed on the site). This lengthens two of
    the pointers by small words that stand in the passage above (three
    words in all). If the lead counts that as
    touching a quotation, the three single words go back and the doubt
    stands instead: the caption promised five syllables and showed
    three and four.

Sentence: nothing changed.

### More from Auden

29. `auden[0].says`. Old: "One is the nine lines of the second passage
    here, with the six between them left out as they are here." New:
    "One is the nine lines of the second passage here, with the same six
    lines left out." "Here" twice in one sentence, and "the six between
    them" made me stop to work out six of what, and between what.
30. `auden[4].says`. Old: "Setting the lines against The Tempest, Auden
    added that no animal can fall." New: "Setting three lines of the
    second passage against *The Tempest*, Auden added that no animal can
    fall." "The lines" pointed at nothing: the entry before it is about
    a review and the seed. The view at the head says which lines they
    are ("three of those lines"), and the entry now says so too.
31. Taken out: the entry from “The Protestant Mystics” (*Forewords and
    Afterwords*, p. 68). Section 4.
32. Taken out: the entry from “Postscript: The Almighty Dollar” (*The
    Dyer’s Hand*, p. 336). Section 4.
33. `sources[2]` and `sources[3]`. Old: "“Brothers & Others,” p. 230;
    “Postscript: The Almighty Dollar,” p. 336." and "“The Protestant
    Mystics,” p. 68; “Søren Kierkegaard,” p. 169;". New: "“Brothers &
    Others,” p. 230." and "“Søren Kierkegaard,” p. 169;". The two pages
    that nothing printed on the page now uses.

## 3. Titles and words marked (no wording changed)

**Titles, 15.** In `where`, 1 (inside change 1). In `view.says`, 3: *New
Year Letter*, *The Dyer’s Hand*, *The Tempest*. Under "More from
Auden", 8: `auden[0].says` 4 (*New Year Letter*, *Purgatorio*, *The
Dyer’s Hand*, *The Tempest*), `auden[2].says` 1 (*The Merchant of
Venice*), `auden[4].says` 1 (*The Tempest*, inside change 30),
`auden[5].says` 2 (*The Waste Land*, *Purgatorio*). In three captions, 3,
set with `<i>` because a caption is HTML: "New Year Letter" (Simile,
first passage) and "Inferno" twice (Word and Mountain, second passage).
`about` names no title. `view.source` and the `source` under every
entry were already marked.

For the lead: CRITIC.md names the fields in which titles are marked and
captions are not among them. I marked the three because a bare title in
a caption is the same fault a few lines from where the page now gets it
right, and because "The Merchant of Venice" was already set so in the
Word caption of the first passage. The kit looks up every `<i>` of a
caption in the passage to light it; a title is not found there and
nothing happens (read in the kit; neither title stands in its passage
or in the prose beside it).

**Words named as words in the small notes, 33, and 1 title.** By the
artist's count none of the 24 notes and remarks carried a mark. Now:

- First passage, Word, 3 notes: the Latin noun and adjective for
  dearness (2); *valore* and the title *Comedy* (2); *Lucido* (1).
- First passage, English, all 5 remarks: *aspire*; *reflects*;
  *Valore*, *goodness*, *valour*; *Bright*, *lucido*, *lucid*; *Love*,
  *carità*, *charity* (11).
- Second passage, Word, 5 notes of 6: *error*; *errare*; *animus*,
  *rational*, *spiritual*; *Obietto*, *obiectum*; *poena*, *pena* (9).
- Third passage, Sources, 3 notes of 4: *sola sola*; *perpetuum ver*,
  *primavera*; *via*, *errore* (5).
- Third passage, Beat, 1 remark of 4: *Lei*, *ella*, *lei*, *ed* (4).

Seen upright in the italic in the pictures of both runs, at 1280 and at
390, with no asterisk printed. Not marked, because they name no word:
the note on the word for seed and the note on the verb for remembering,
and the first three remarks of Beat. The small meanings under the words
(`gloss`) name no word of another language: "Latin: dearness" and
"Latin: a straying" give a Latin sense in English.

**One word in the list.** `auden[1].says`: "*Rational* is the word
Okey’s prose uses". A word named as a word at the head of a sentence in
roman type, where for a moment it reads as the sentence's own
adjective. CRITIC.md asks this only of the small notes; it is the same
fault and the same cure, and the captions already set such words in
italics.

**Left as they are.** In `stands` (third passage, Sources) and in
`sources[12]` the first line that serves as the title of Cavalcanti's
song is in italics. By the rule under "Titles" a short poem takes
quotation marks. I left it: those two fields are not among the ones I
am told to mark, and a first line in Italian is commonly set so. For
the lead. The `caveats` name two translators' wordings, and the two
phrases whose order differs between printings, without marks; they are
in roman type and read clearly.

## 4. The list under "More from Auden"

Ten entries came to me; eight stand. Both entries taken out are true
and were checked by the examiner. They are whole (`says`, `source`,
`checked`, and why each came out) at the end of notes.md, under "Taken
out of the list of what Auden said".

- **“The Protestant Mystics,” p. 68.** The remark is about the meeting
  with Beatrice, two cantos after the third passage, in an essay on
  other writers. No caption, `grounds` item or `stands` leans on it. Set
  under a passage headed "A lady across a stream", whose lady the page
  never names, it invites a reader to take her for Beatrice. The
  Paradiso page has this page of Auden as its view, so the site keeps
  it.
- **“Postscript: The Almighty Dollar,” p. 336.** One sentence in a note
  on Americans and money, which uses the fifth terrace for a joke: the
  work named in passing in an essay on something else. Nothing leans
  on it.

Neither entry that followed began "In the same book", so no entry
needed a name it lacked. `view` was not touched.

What stays, and by which test: the notes of 1941 that copy the first
two passages (said in 1941, and on two passages shown); the lines on
Dante in the poem of 1941; the essay that quotes the first passage (the
Word caption leans on it); the review of 1941 that quotes the second
(the Word caption there leans on it); the passage of "Balaam and His
Ass" the view is taken from; Pearce on the examination (the work as he
taught it); the sentence on Dante's structure (the Mountain caption
leans on it); and the lines on suffering that Auden quotes in the
essay on Kierkegaard. That last is the nearest to the line: it is an
essay on something else and the lines are from canto XXIII. I kept it
because he quotes three lines and reads them, and because the page's
own note on the word for pains (second passage, Word) points at the
same place in canto XXIII. With eight entries the list is at the number
CRITIC.md names, not above it.

One thing follows from change 32 that is not mine to mend. The facts of
the Mountain tab keep a key `auden`
(`plates[1].lenses[3].facts.auden`) whose second sentence cites *The
Dyer’s Hand*, p. 336, for the fifth terrace. The drawing does not print
that key (it would show only in the kit's plain table, if the script
ever failed), so nothing printed now uses the page. For the lead: cut
that second sentence from the fact, or leave it as a working record.

## 5. What recurs across the piece, with counts

The twelve captions have 76 sentences as they now stand and run from
100 to 113 words.

- **Auden in a caption: 7 of 12.** He closes five (Simile and Word of
  the first passage; Figure, Word and Mountain of the second), stands
  inside one (English), and his class is named in the last sentence of
  one (Sentence of the third passage). The verbs differ: copied, quoted,
  comment, quoted and wrote, noted. That is the method the brief asks
  for and the frames are varied, so I cut none. If the lead wants
  fewer, see the first doubt in section 6.
- **One fact of Auden told five times.** That he copied or quoted the
  last three lines of the first passage: in three of that passage's
  four captions (Simile, Word, English) and in two entries of the list.
  Each tab has to stand alone, so I left the captions; a reader who
  opens all four tabs is told three times.
- **A meaning set between commas where the meaning is a small word: 3
  sentences**, mended with brackets (changes 3, 22, 27). The house way
  is the comma: 31 meanings in this page's captions follow their word
  after a comma, and by a count over the readings the Inferno and
  Paradiso pages have no bracket of this kind. I kept the comma
  wherever it reads clearly and used the bracket only where the meaning
  was "so", "as", "her", "she", or stood between a verb and its object.
  If the lead wants one form throughout, these three sentences need
  another cure than going back: each was a real stumble.
- **A pointer with nothing to point at: 6.** "These three lines" (12),
  "lines 73 and 74" on a page without line numbers (14), "at this line"
  and "his next canto" (25), "the six between them" (29), "the lines"
  (30).
- **A quaint or mock-antique word for the ordinary one: 5.** "Glass"
  twice and "looking glass" once for a mirror (6, 8 before it was cut,
  10); "turns it to" (16); "gloss" (18).
- **A key that did not say what its colors or names are: 2** (5, 24).
- **A sentence said again on its own tab: 2, cut** (7, 8). Beyond them,
  5 of the 13 notes that still carry a sentence say in part what their
  caption says: the notes on the Latin noun and verb for straying
  (second passage), and three of the four notes of Sources (third
  passage). Each adds a fact of its own, and a note is what a reader
  gets who goes from a marked word to the list beside it. Left.
- **Colons: 26 of the 76 caption sentences.** Most bring in the words
  pointed at, which is their work. Two captions have four: Sentence of
  the first passage (three head its three statements) and Sentence of
  the third. One run of three sentences built alike is broken (23); one
  group of three short ones is joined (2).
- **Sentences of six words or fewer in captions: 4 of 76**, each a
  plain fact ("Dante’s rhyme is a chain."). No staccato is left.
- **"So" opening a sentence: 1** (Rhyme). It draws a consequence. Left.
- **The question told twice in the same words.** `about` and the first
  caption both say that Dante asks "how a good can make its owners
  richer the more of them share it". Left: the head is read once, and
  the caption has to stand under its passage.
- None found: a dash inside a sentence, a rhetorical question, "we", a
  stock word from the brief's list, "not X but Y", praise of the poem
  given as fact, a working word in anything printed, a sentence that
  says what the passage makes a reader feel.

## 6. Sentences I doubt and did not change

1. **Simile, first passage, the last sentence.** "Auden copied these
   last three lines into the notes of *New Year Letter* in 1941." A
   fact set at the end. It does not change what the reader sees in the
   two comparisons, and the same fact opens the English caption and the
   list. I left it: it is true, it is this caption's one tie to Auden,
   and on the first tab a reader opens it says why these lines are on
   the page at all. If one Auden sentence is to go, it is this one;
   then "Auden: *New Year Letter* (1941), the note to line 1705." comes
   out of `stands`, and the last sentence of `why` with it.
2. **Rhyme, second passage, the last sentence.** "In the first passage
   *amore* stands in the same place and is answered by *ardore* and
   *valore*." True, and a reader can find it (rows 22.1, 23.0 and 23.2
   of the first passage). But it shows a thing and gives no reason for
   it; a reason would be a claim, and not mine to add. The tab pays
   without it.
3. **Sentence, first passage, the last sentence.** The count of the
   word for "more": ten between lines 55 and 75. Seven of the ten are
   in lines the page does not show, so the reader can see three. It
   bears on the caption's point and the link is in `stands`. Left; but
   the caption ends on a number the page cannot show.
4. **The note on the verb for remembering** (third passage, Sources;
   row 16.0, word 3). Its second sentence says that the stream is
   Lethe, whose water takes away the memory of sin. The examiner cut
   from the caption a sentence that set the river of forgetting beside
   this verb, because no source makes the pairing, and kept the two
   facts in this note "without joining them" (exam.md). Set in one note
   under that verb, they are joined by the reader. I left it because
   the examiner weighed it. The second sentence says nothing of the
   word the note is on, and I would cut it.
5. **`auden[1].says`, the last sentence.** "*Rational* is the word
   Okey’s prose uses for the second love in the second passage here."
   True (p:30.0, word 15). Set straight after "rational love, which
   Auden names in Latin", it suggests that Auden's Latin answers Okey's
   English. Nothing cited says so. It is the entry's one tie to a
   passage shown; without it the entry still stays, by the test "said
   in 1941". For the lead.
6. **Word, first passage.** "The answer has no word of owning." and,
   two sentences on, "*Rendere* is first to return what is owed". Owing
   is not owning, and the examiner passed both. But the caption does
   not say what the first sense of the verb does in these lines; it
   leaves the last sentence, on usury, to do it. Left: to say more
   would be a claim.
7. **Mountain, the sentence on Hell.** Left; weighed in section 7, the
   third point.
8. **"Canto" is never said in plain words.** The nearest the page comes
   is the drawing's "51st of 100 cantos". Left: the word is in common
   use, the line under the title has it, and `about` has 88 of its 90
   words.
9. **`where`, the figures.** The Inferno and Paradiso pages give their
   cantos in Arabic figures in this line; this page has Roman figures,
   here and everywhere else (beside each heading, in the captions, in
   the drawing). A number is not mine to change, and inside this page
   they agree. For the lead if the three pages should agree.

No tab pays nothing. Each of the twelve shows how something is made and
says what it does there: on the text's word (the proportion, the chain
of rhyme, the verb kept back, the one verb for two losses, the two
kinds of line), on a commentator's (Landino, Chiavacci Leonardi), or on
Auden's.

## 7. The artist's five points (art.md, section 5), weighed

**1. Two notes give the lines of a whole scene.** Right, and the first
is a fault a reader will meet. The pointer's note on the ring of the
second terrace prints "The first passage is spoken on the stair above
this terrace, XV, 40–81." On this page the first passage is nine lines,
67 to 75; lines 40 to 81 are the whole talk on the stair. As printed,
the sentence gives the passage 42 lines. The note on the ring in the
garden prints "The lady across the stream, XXVIII, 37–51." Its figures
are the first and last lines of the third passage, so it is near
enough; but it does not say that this is the third passage, though the
key calls the rings "the other passages on this page", and six of
those lines are not shown. Facts are not mine to edit. Proposed:

- `plates[1].lenses[3].facts.levels[2].plate`:
  "the first passage is spoken on the stair above this terrace: XV, 67-75"
- `plates[1].lenses[3].facts.levels[8].plate`:
  "the third passage, the lady across the stream, with six lines left out: XXVIII, 37-51"

Each string must still end in a canto, a comma and one run of lines:
the script takes the place of the ring from the end of the string
(`placeOf`, script line 43), and a string that ended "37-42 and 49-51"
would give no ring. If the lead would sooner keep the scene and say
so, "the first passage comes in the talk on the stair above this
terrace, XV, 40-81" is also true.

**2. Two first lines for one speech.** Both figures are true, of two
things, as the artist says. In the prose of the canto Virgil answers
Dante's question about the terrace in lines 85 to 90, and that answer
closes. At line 91 the poem says that he began, and a new speech runs
to the end of the canto; the passage on this page opens at those words
(p:30.0, words 0 to 1). So the key's "the speech on love: lines 91 to
139" is exact, and the note on the red dot, "Virgil speaks here, at the
top of the stair, XVII, 85–139", counts the short answer in. A reader
who points at the dot and then reads the key sees two beginnings.
Proposed:

- `plates[1].lenses[3].facts.levels[4].plate`:
  "Virgil makes the speech on love here, at the top of the stair: XVII, 91-139"

`errors[1].virgil` rightly keeps "XVII, 85-87 and 130-132": it cites
the two places where Virgil says that slow love is made good on this
terrace, and the first of them is in the short answer.

**3. The caption names *Inferno* XI, which the drawing does not show.**
I would leave the sentence where it is. It points at no mark. It cites
another place in the poem, as the Word caption of this passage cites
the first canto of the *Inferno* and the Figure caption cites the next
canto. It stands on the text and on four commentaries (`grounds`), and
`stands` carries the link to the canto. And it is the one sentence on
the tab that says what kind of plan this is: sorted by love, where the
plan of Hell is sorted by the harm done. Without it the caption only
lists what the drawing already shows. The drawing has no need of Hell.

**4. Titles in `view.says` and in the list.** Marked: section 3. Three
more were bare in captions, and one in `where`.

**5. The small notes.** Marked: section 3. 33 words and 1 title, in 17
of the 22 notes and remarks that now carry a sentence.

## 8. The words the drawing prints (second passage, Mountain)

Read in `site/js/pieces/dante-purgatorio.js` and in the pictures; the
script was not edited. What it prints, and where each word comes from:

- From the reading: the line over the drawing (`what`); the names of
  the levels and of what is purged on each; the three errors, each
  followed by the words of the passage that name it, cut from the
  passage when the page runs; the note under the scale of cantos
  (`thisCanto.inPurgatorio`); the name of the canto and "51st of 100"
  (`canto`, `inPoem`); the two long entries of the key (`linesOnPlate`,
  `speechOnLove`); every count.
- Typed in the script: the two small headings (lines 100 and 226),
  "canto" (196), "cantos" and "lines" (255), "line 125: the middle line
  of the poem," (279), "lines in cantos XIV to XX" (296), the first
  three entries of the key (338 to 340), and the heads of the table
  under "The numbers" (353 to 354).
- For the pointer, one note for each name, row, dot, ring, band and
  mark, made from `named`, `what`, `cantos`, `reached`, `left`,
  `plate`, `errors[].virgil` and `middleLineOfPoem`.

All of it is plain. No working word, nothing pronounced, no asterisk
printed. Four things for the lead, each with its key or line:

a. **The seven figures at the foot.** "lines in cantos XIV to XX" and
   seven counts. Nothing printed says why they are there. The caption's
   last sentence (Auden on the number of verses) is as near as the page
   comes, and a reader who does not read the row from both ends will
   miss that the counts answer each other in pairs round canto XVII.
   The fact has the sentence, under a key the build takes out
   (`facts.linesInTheSevenMiddleCantos.note`). Proposed: print it under
   the row (script, after line 304), from a key that survives the
   build, in words such as "the counts answer each other in pairs on
   either side of canto XVII". The seven numbers bear it out, but it
   is new print, so it is the lead's and the examiner's to pass.
b. **The note for the heading of a band** (script line 187) is put
   together as the speaker's name, a comma and the fact: "Virgil, XVII,
   133–139: love that gives itself too much…". It reads as a citation
   of a book by Virgil. Proposed, line 187:
   `` stop(`${cap(who)} in canto ${e[who]}`) ``, which prints "Virgil in
   canto XVII, 133–139: …" and serves the other two bands as well. And
   in `plates[1].lenses[3].facts.errors[2].virgil`, "; Virgil does not
   name them" could be "; he does not name them": the note already
   opens with his name.
c. **The three `plate` notes:** section 7, points 1 and 2.
d. **Italian words in the pointer's notes.** These notes are printed in
   italic by the same means as the small notes beside a passage, so a
   word between asterisks would stand upright in them. The seven
   `named` strings each open with the Italian name of what is purged
   ("superbia, XI, 88" and the six like it; two names in the string of
   the fourth terrace), and `thisCanto.middleLineOfPoem` holds the
   title *Purgatorio*. I would mark the names. One cost: the kit's
   plain table, which stands in for the drawing if the script fails,
   would print the asterisks.

The second sentence of `facts.auden` now cites a page that nothing
printed uses: section 4, the last paragraph.

## 9. What on the page got in the way of reading

Words, and what the page prints. How the page is set (where a line
turns, where a caption or a small meaning stands, the size of the
type, the height of a drawing on a phone) is in the artist's report
and in the lead's hands, and is left out here.

1. **No passage shows its line numbers, and the page cites lines by
   number.** Beside each heading stands the canto only. The captions of
   the first passage cite lines 49 to 51, 55 to 75, 61 to 63 and 73 to
   74; a note of the third cites lines 127 to 130. Only the drawing
   says which lines a passage is. With the lines beside the canto
   ("Purgatorio XV, 67–75") a reader could place every one of those
   figures. Change 14 mends the one sentence that pointed by number at
   lines of the passage itself.
2. **The lady has no name.** The heading, `about`, the captions and the
   notes say "a lady" or "the lady". Her name is printed once, in the
   sources, among the entries read in the Dante encyclopedia, where no
   reader will connect it with her. A reader who knows that Dante meets
   Beatrice in this garden may take the lady for Beatrice (one reason
   for change 31). The poem itself names her once, five cantos on
   (XXXIII, 119, in the Italian printed on the site). One clause would
   settle it. It is a claim, so it is the lead's and the examiner's.
3. **The story of Proserpina is not told.** The Figure caption says
   that the mother lost the girl and the girl lost the spring, and a
   note says that the girl was seized. Who the mother is, and who took
   the girl, is left to the reader, and the two middle tabs of the
   third passage give less to a reader without the myth. One sentence
   of fact would do it; again a claim to add.
4. **"Okey" stands over the English from the top of the page and is
   first explained on the fourth tab of the first passage** (now in its
   first sentence, change 11). A reader who does not open that tab
   meets the name next in the third passage. For the lead: whether the
   word over the column, or the first caption, should say whose English
   it is.
5. **On the Mountain tab,** the seven figures at the foot have no word
   (section 8, a), and the note on the dot and the key give two first
   lines for one speech (section 7, the second point).

Nothing is in the wrong order. Under "More from Auden" the second entry
opens "In the poem itself" and takes the name of its poem from the
first; if the list is ever put in another order it will need the name.

## 10. The checker, and the last runs

After the last change to the reading (11:02:59):

    node build/tools/check-reading.mjs dante-purgatorio --print
    node build/pieces.mjs dante-purgatorio
    node build/tools/prose.mjs dante-purgatorio
    node build/tools/shoot.mjs dante-purgatorio --out remake/works/dante-purgatorio/shots --page

The prose tool now prints 4,754 words (4,908 when I began). The picture
tool, second and last run, 11:09 to 11:11: "nothing reported; now look
at the pictures". It was taken after the kit's last change (11:05). I
opened what the second round had changed: Word of the first passage
and Figure of the third at 1280, Sources of the third at 390, and the
slice of the page that holds the list. The key row with its semicolon,
the three notes that remain, the brackets, and the italic word in the
list are as intended.

The checker's own file was changed at 11:16, not by me, so I ran it
once more at 11:20, with the build. Its last lines:

    no problems
    WARNINGS (3)
      plate share lens 0 (figure) caption: "mirror": RULE THREE: a claim about what the passage does to someone, or stands for. Keep it only if Auden, a source or the lines themselves say it
      plate share lens 2 (word) notes[4].note: "mirror": RULE THREE: a claim about what the passage does to someone, or stands for. Keep it only if Auden, a source or the lines themselves say it
      plate share lens 2 (word) caption: "mirror": RULE THREE: a claim about what the passage does to someone, or stands for. Keep it only if Auden, a source or the lines themselves say it
    the printed notes are fit to print

All three warnings are the noun. The first stood before I came, and
the examiner answered it (exam.md, section 1): the word is the thing
named in the passage itself (row 24.2, word 2, and Okey's prose,
p:24.0, word 26), and the caption does not say that the verse mirrors
anything. The other two are mine (changes 6 and 10), where "a glass"
and "a looking glass" stood for the same thing. The answer is the
same, and for the note the examiner's record has two commentaries
that speak of mirrors at that place (row 22.2, words 2 to 3). The
checker cannot tell the noun from the verb.
I read the three sentences again: none says what the passage does to
anyone, or what it stands for.
