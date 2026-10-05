# The critic's report: volpone

3 October 2026, 10:10 to 11:05 UTC.

In short: 28 changes of wording (three sentences and three clauses
cut, the rest reworded, joined or given a missing name) and one
capital letter; 5 titles marked; 34 words or phrases marked in the
small notes so that they
stand upright there (32 in 20 of the 24 notes, 2 in the Beat remarks);
and the Latin headwords of two lists set in italics. Forty values of
`reading.json` differ from what I found, and no key was added or
taken away. Nothing was taken out of the list of what Auden said, so
nothing was written in `notes.md`. Nothing in `view` was changed but
the asterisks round three titles. Twelve things are left for the lead
in section 4. The checker ends with no problems and no warnings.

## 1. How the page was read

- `node build/pieces.mjs volpone`, then the picture tool (first of the
  two runs allowed: "nothing reported; now look at the pictures"), then
  `node build/tools/prose.mjs volpone` (4279 words).
- The five pictures of the whole page at 1280 were read from the top,
  then each of the eleven tabs at 1280, and the Names tab and the
  song's Figure tab at 390.
- `review/remake/prose/volpone.md` was read once through before
  anything was marked.
- Beside it: `reading.json` whole, `exam.md`, `art.md`, the end of
  `notes.md`, the script `site/js/pieces/volpone.js` (read, not
  edited), `site/js/rich.js` (how a marked word is set), and the proof
  the checker prints.
- Where a sentence gives Auden's words in paraphrase I read his page
  in the scans (*The Dyer's Hand*, pp. 173 and 252; *Forewords and
  Afterwords*, p. 30), to judge whether it says more than he did.
- The checker as I found it: no problems, no warnings, the printed
  notes fit to print.
- After the changes the piece was built again and the picture tool
  run a second and last time ("nothing reported"). I read the head of
  the page, the list, and the eight tabs I had changed, at 1280.
- Then, writing this report, I read every caption once more against
  the lines the page prints under it and the notes beside it, and
  made six more changes: 42 to 46, and the last wording of change 3.
  **No picture shows these six.** Two shorten a caption and one a
  note, one keeps a note at its length, one adds two words to the
  summary at the head, and one adds a word to the title over the
  Names drawing, which the page sets in balanced lines. I read them
  in the prose listing (now 4242 words) and in the checker's proof.
  The piece was built again after them.

Words of the play are pointed at by row and word number: the `row` and
`w` of `reading.json`, where the first word of a row is 0. "Old" and
"new" below are the site's own sentences. Where a sentence of the site
holds a run of the play's words, the run is left out here and shown as
[...].

## 2. Every change

Each entry: where, the old words, the new words (or "cut"), the fault.

### The head of the page

1. `where`. The title of the play is now between asterisks. Titles.
2. `view.says`. Three titles of plays are now between asterisks: the
   two comedies he liked and this one. Titles (the artist's first
   point, and the lead's note). No word of the view was changed.

### Passage 1, Volpone to his gold

3. Word, the note on row 3.1 word 2. Old: "From Latin scrinium, a case
   or chest for books or papers; the Oxford dictionary quotes the
   first two lines here among figurative uses, of a person or thing
   venerated or idolized, and marks obsolete the plain sense, a box or
   coffer, last recorded in 1658." New: "From Latin *scrinium*, a case
   or chest for books or papers. The Oxford dictionary quotes these
   first two lines among figurative uses, where a person or thing is
   venerated or idolized. It marks obsolete the plain sense, a box or
   coffer, last recorded in 1658." One sentence of 45 words with five
   things hung on commas; "uses, of a person or thing" could not be
   read at speed. Three sentences now, still 45 words, and everything
   the old note reported is kept. (A first version of mine dropped
   "marks obsolete"; I put it back, since the examiner's entry in
   `open` says the note is there to give the dictionary's record.)
   See 4.8 for the third sentence.
4. Word, the note on row 3.1 word 8. Old: "... and in Act 3 Bonario
   speaks of this altar and calls Volpone’s treasure dross and his
   idol." New: "... and in Act 3 Bonario, who frees Celia from him,
   speaks of *this altar* and calls Volpone’s treasure *dross* and his
   *idol*." Two faults. A name met before it is given: this is the
   first place the page names Bonario, and nothing has said who he is
   (section 3). And "speaks of this altar" read as if the altar were
   on the page. The four things quoted from the play now stand
   upright: Volpone's two words from later in the speech, and
   Bonario's two words and two single words in Act 3, Scene 6.
5. Word, the note on row 5.0 word 0. Three things marked: the Latin
   greeting, the English name of the prayer and its Latin name. No
   wording changed.
6. Word, the note on rows 5.0 words 2 to 3. The Latin phrase marked.
7. Word, the note on row 5.7 words 5 to 7. Old: "Sol is the sun, and
   in alchemy it was the name for gold." New: "In alchemy *Sol*, the
   sun, was the name for gold." Padding: the gloss under the words
   already says that Sol is the sun and gold; the note keeps what it
   adds.
8. Word, the note on row 5.9 word 1. Old: "The act of worshipping, or
   paying divine honors; Latin adorare is to address, salute or
   reverence, and in late Latin to worship." New: "Latin *adorare* is
   to address, salute or reverence, and in late Latin to worship."
   Padding: the gloss under the word is "worship", and the cut clause
   said it twice more, without a verb.
9. Word, the note on row 5.9 word 5. The Latin word marked.

10. Beat, caption. Old: "One line adds a light eleventh syllable at
    the end." New: "One line, ending **relick**, adds a light eleventh
    syllable." A caption the page does not bear out: the reader could
    not tell which of thirteen lines was meant. It is row 5.9 (the
    proof gives it eleven places), and the word is its word 5. The
    song's Beat caption names its two longer lines the same way. For
    the lead: this adds a pointer, not a claim; if it reads to you as
    more, the old sentence can go back.
11. Beat, caption. Old last sentence: "The line with the verb puts its
    first beat on **I**, which the sentence has kept back for three
    lines." Cut. Padding: remark 3, a few lines lower, said the same
    thing in eleven words, so that all three remarks of the tab
    repeated the caption. The caption now ends on its reason (the gold
    is named second and given the heavier, slower greeting), and the
    remark carries what belongs to one place. 89 words. `why` never
    spoke of that beat; `stands` names "the beat on *I*", which remark
    3 still shows.
12. Beat, remark 1 (row 3.0 words 0 to 4). Old: "The day: six
    syllables, three of them light and in a row." New: "The greeting
    to the day: six syllables, three of them light and in a row."
    Clipped: "The day: six syllables" reads for a moment as a count of
    the day.
13. Beat, remark 2 (row 5.0 words 0 to 5). Old: "The gold: six
    syllables, four stresses. Two of them meet at world’s soul." New:
    "The greeting to the gold: six syllables, four stresses. Two of
    them meet at *world’s soul*." The same, and the two words of the
    passage marked.
14. Beat, remark 3 (row 5.3 words 0 to 1). Old: "The first beat is on
    I, kept back for three lines." New: "The first beat falls on *I*,
    which the sentence has kept back for three lines." It takes over
    the sentence cut from the caption (change 11); the bare capital
    could not be told from the sentence round it.

Nothing was changed in the Word caption or on the Sentence tab of this
passage.

### Passage 2, Volpone's song to Celia

15. Rhyme, caption. Old: "taken from Catullus". New: "taken from the
    Latin poet Catullus". A name met before it is given: Rhyme is the
    tab a reader sees first, and the poem is introduced one tab later.
16. Rhyme, caption. Old: "The second is the closing rule, where the
    split pair rhymes ...". New: "The second is the rule that closes
    the song, where the split pair rhymes ...". "The closing rule" is
    the reading's own name for the last four lines; three captions use
    it and none had said what it was. The first tab now says it. 115
    words.
17. Word, the note on row 106.0 word 5. The Latin verb and the English
    one marked.
18. Word, the note on row 106.9 word 2. The name of the Roman coin
    marked. Unmarked it read as the English word: "valued at one as, a
    copper coin".
19. Word, the note on rows 106.15 words 2 to 3. Three things marked:
    the Latin noun, the title of Virgil's poem (the artist's second
    point), and Virgil's two words.
20. Word, the note on row 106.16 word 2. Old: "... that Celia has been
    taken in the act with Bonario." New: "... that Celia has been
    *taken in the act* with Bonario, the man who freed her." The four
    words are the lawyer's own (Act 4, Scene 2), and the note is there
    for the first of them, so they are marked. And Bonario again came
    with nothing to say who he is.
21. Word, the note on row 106.17 word 2. The Latin word marked.
22. Figure, caption. Old: "On one side is the act. To [...]. On the
    other is being found out. To [...]: these are the **crimes**."
    New: "On one side is the act: to [...]. On the other is being
    found out: to [...], these are the **crimes**." Four short
    sentences built alike, in two pairs. Each pair is now one
    sentence. No word changed. (The sentence before them was cut down
    later: change 42.)
23. Beat, caption. Old: "In the ten lines shown first the voice can
    keep every stress on a beat. In the closing rule it cannot." New:
    one sentence, joined by a semicolon. The second was a short
    sentence set apart for effect.
24. Beat, caption. Old: "Those two words are what the rule calls
    crimes." New: "Those two words name what the rule calls crimes."
    Words are not crimes. 106 words.

Nothing was changed in the Word caption of this passage.

### Passage 3, the court's last words and the Fox's

25. Figure, caption, the second sentence. Undone, and not counted. I
    had reworded it ("In the judge’s last sentence [the simile]")
    because "says that" came twice in two sentences. Change 43 cut the
    first of the two, so the poet's sentence stands again as it was:
    "The judge’s last sentence says that [the simile]".
26. Figure, caption. Old third sentence: "By the simile a wrong that
    thrives is a beast fattening for slaughter." Cut. Pronouncing and
    padding. The sentence before has just given the simile whole, with
    what its last word could mean; this one said it again as a verdict,
    and dropped the "could". The slaughterhouse comes two sentences
    later, in Volpone's own words, where the reader can see it. The
    caption still goes from what is there (the simile) to what it does
    (it is made of words Volpone has used of himself, and he speaks
    next as the Fox). 86 words after change 43. `why` and `stands` did
    not lean on the sentence. One ground did: see 4.12.
27. Word, the gloss on row 265.1 word 1. Old: "his song’s word for
    being seen". New: "the song’s word for being seen". The line is
    the judge's, so "his" pointed at the wrong man.
28. Word, the note on row 265.3 word 7. Old: "To reward was to repay,
    for good or for ill; in Act 3 Bonario says that Volpone shall meet
    his just reward." New: "To *reward* was to repay, for good or for
    ill; in Act 3 Bonario, freeing Celia, says that Volpone shall meet
    his *just reward*." The verb and Bonario's two words marked; and
    Bonario placed for a reader who begins at this passage.
29. Word, the note on row 265.4 word 7. Volpone's two words for Mosca
    marked.
30. Word, the note on row 269.0 word 1. Two words of the Prologue
    marked, and "The prologue" given its capital, as the link under
    "What each caption stands on" has it.
31. Word, the note on row 269.1 word 3. The Italian word marked.
32. Word, the note on row 269.3 word 2. The lawyer's three words
    marked. Unmarked, "calls the adultery he alleges this foul fact"
    had to be read twice.
33. Word, the note on row 269.4 word 3. The judge's two words marked.
34. Word, the note on row 269.5 word 2. Three things marked: the verb,
    the four words from the Bible of 1611, and the two words of the
    parting wish.
35. Word, the note on row 269.5 word 3. The adjective and Volpone's
    two words marked.
36. Names, caption. Old: "Auden gives the situation of a Jonson
    comedy: a clever rascal cheats a rich fool, who deserves it,
    wanting nothing more moral than the rascal does." New: "Auden
    describes the situation of a Jonson comedy: a clever rascal cheats
    a rich fool, who deserves it, since he wants nothing more moral
    than the rascal does." "Gives the situation" is not said of a
    writer; and the hanging "wanting" could belong to either man. 112
    words.
37. Names, `stands`. Old: "in the university’s translation". New: "in
    the University of Aberdeen’s translation". No university had been
    named. 68 words. (The same words stand in the facts: see 4.6.)

Nothing was changed in the Rhyme and Word captions of this passage.

### More from Auden

38. The second entry. Old: "the first sight of Iago and Roderigo
    together shows". New: "the first sight of Iago and Roderigo
    together, in *Othello*, shows". Two names given with no play to
    put them in; the source line names only the essay.
39. The third entry. Old: "Auden describes a second type of comedy,
    invented by the Greeks, which grew, he says, into several kinds,
    among them the comedy of humor that Jonson wrote." New: "Auden
    describes a type of comedy, ... among them the comedy of humors
    that Jonson wrote." Two faults. "A second type" is the numbering
    of his essay, and on this page there is no first. And the page
    called one thing by two names: "comedy of humors" in the first
    caption and the first entry, "comedy of humor" here. (His two
    books differ; a paraphrase need not.)

All three entries stay. The first and second are leaned on by a
caption each. The third is weighed in 4.4.

### The notes at the foot

40. `caveats[0]`. Old: "Auden left no account of *Volpone* that was
    found, only one remark in conversation." New: "No account of
    *Volpone* by Auden was found, only one remark made in
    conversation." "Left no account that was found" turns back on
    itself.
41. `sources[5]` and the `stands` of the song's Word tab. The nine
    Latin headwords are now in italics. No wording changed. In lower
    case and roman the list read "under as, brevis" and "rumor, as,
    furtum": the coin again.

### On the last reading, after the second picture run

42. Passage 2, Figure, caption. Old: "The last four lines are an
    antithesis: opposed ideas set side by side in words that answer
    each other." New: "The last four lines are an antithesis."
    Padding. Under the caption the page prints the figure's name and,
    under the name, "opposed ideas set in neighboring clauses, in
    words that answer each other". The definition stood twice within
    six lines, in nearly the same words. The caption keeps the name,
    and its next two sentences show the two sides. 97 words. `stands`
    ("Antithesis as *A New English Dictionary* defines it") now points
    at the line under the name.
43. Passage 3, Figure, caption. Old first sentence: "A simile says
    that one thing is like another." Cut. The same fault: the line
    under the figure's name reads "a comparison that says one thing is
    like another". The caption now begins with what is there, the
    judge's sentence, and the word "simile" stands once, under it. 86
    words. With this cut, change 25 was undone.
44. Passage 3, Names, the title over the drawing
    (`plates[2].lenses[3].what`). Old: "... what each brings the Fox,
    ...". New: "... what each bird brings the Fox, ...". A caption the
    page does not bear out: two of the five bring nothing, and the
    drawing makes a point of it (the line of the gifts passes the
    fly's row without a stroke). The caption beside it already says
    "Each bird brings the Fox a gift". One word added, and it narrows
    what is said.
45. The head of the page, `about`, the last sentence. Old: "In the
    third a judge closes the trial that has sentenced Volpone, Mosca
    and the three men they cheated, ...". New: "In the third a judge
    closes the trial at which Volpone, Mosca and the three men they
    cheated have been sentenced, ...". A trial does not sentence; a
    court does. 89 words (the checker allows 90).
46. Passage 2, Word, the note on row 106.9 word 2 (the note of change
    18). Old: "In Catullus it is the talk of stern old men, all of it
    to be valued at one *as*, a copper coin." New: "In Catullus all of
    it is to be valued at one *as*, a copper coin." Padding: the
    caption above it has just said, in the same words, that it is the
    talk of stern old men, valued at one copper coin. The note keeps
    what it adds, the name of the coin.

## 3. What recurs across the piece, with counts

The prose is plain and none of it tells a reader what to feel. The
checker's lists found nothing before or after: no dash, no stock word,
no "not X but Y", no question asked for effect. What recurs is of
other kinds.

- **A name with nothing to say whose it is: 10 places.** Bonario four
  times (three notes and the song's Figure caption), and the summary
  at the head of the page never names him; three notes now place him
  by what he does in Act 3 (changes 4, 20, 28), each on the scene
  that note already cites, and in the caption his act is the
  sentence. Catullus once, a tab before he is introduced (15). Iago
  and Roderigo once (38). "The university" twice (37 and 4.6).
  Florio once, the artist's third point, now given by the lead's
  `dictionary` key. Everyman once, in the list (left: 4.10).
- **A word named as a word, bare in an italic note: 34**, in 20 of
  the 24 notes and 2 of the 5 Beat remarks: 13 Latin or Italian words
  or phrases, 14 words or phrases quoted from the play, 5 English
  words spoken of as words, the prayer's English name, and one phrase
  of the Bible. All marked. Three would not read without it: the coin
  (18), "this altar" (4) and the lawyer's three words (32).
- **The same thing said twice on one tab: 13 places, 6 mended.**
  *Remarks, 5 of 5.* All three of the first Beat tab said the caption
  again (one mended by cutting the caption's copy, change 11), and
  both of the song's Beat tab (left: six and seven words, labels to
  the numbers on the lines). *Figure tabs, 2 of 2.* Each caption
  defined its figure, and the line under the figure's name defined it
  again (mended, 42 and 43). *Notes, 6.* Most notes begin by saying
  their gloss again in fuller words and then add a root or an
  instance, which is how the two are meant to work. In two the first
  clause added nothing (Sol and adoration; mended, 7 and 8). One said
  again a clause of the caption above it and added one word (the coin;
  mended, 46). In three more the first clause says what the caption
  says (the notes on rows 106.15, 269.3 and 269.5); left, because each
  then adds two things. Not counted: the two Beat captions give the
  measure that is also printed under them, and the rest of each
  caption counts from it.
- **The reading's own name for a place, used as if the reader had it:
  "the closing rule", in 3 captions of the song.** The first tab now
  says what it is (16).
- **Short sentences set apart: 5, and a sixth of my making.** One
  joined (23). Four left, because each states a fact the caption needs
  and none is a moral: the second sentence of the first caption, the
  third of the song's Word caption, the second of the last Figure
  caption as it now stands, and the last of the Names caption. The
  sixth is what change 42 left of the song's Figure caption's first
  sentence: seven words that name the figure.
- **Auden as the frame: 4 captions of 11**, with four different verbs
  (wrote, says, calls, describes). Two captions end on the same
  sentence of his, that classical comedy ends with its people exposed
  and punished, which with the quotation and the view makes four
  times on the page. That is the view of the piece doing its work.
  Left.
- **"Slows the line": 2 captions, 1 remark and 2 lists of what a
  caption stands on**, each time for two stresses side by side; the
  first Beat caption says it and then says "slower" in its next
  sentence. The method, from one handbook. Left.
- **Notes that open alike**: "From Latin" 3, "Latin ... is" 2, "In
  Catullus" 2, "In Act" 2. They are dictionary notes and read as
  such. Left.

## 4. Left for the lead

None of these is changed in `reading.json` or in the script.

**4.1 `view.says`, the second sentence.** "In talk noted down under
January 8, 1947, he said ..." The sentence does not say who noted it
down, and "under" a date is a cataloguer's word. The line of sources
printed below the view does name Alan Ansen's book, so the reader is
not lost for long. My wording: "In conversation that Alan Ansen noted
down in his entry for January 8, 1947, he said ..." (74 words in all;
the checker allows 75). It keeps what "under" was there to keep: the
date is the heading of Ansen's entry, which is all the examiner could
see. The first sentence, "One remark by Auden on this play was found",
is about the search and not about the play. I would keep it: it is
what makes the rest honest.

**4.2 A term never said in plain words: "comedy of humors".** It
stands in the first caption (`plates[0].lenses[0].caption`) and in the
first and third entries of the list. It is Auden's own name for the
kind (p. 173 has it), so it cannot simply go. A reader who has not met
it may take "humors" for jokes. To say it in plain words needs a fact
with a ground, which is not mine to add. My wording, to follow the
sentence that gives Auden's pattern: "A humor was a person’s
temperament, his habitual bent." The ground: *A New English
Dictionary*, vol. V, Humour, sb., sense 4 (mental disposition,
originally as fixed by the proportion of the bodily humours; habitual
tendency; temperament). I read the entry in the saved volume. Under
sense 6 (a particular disposition, inclination or liking) it adds
that the word in that sense was very frequent in the late sixteenth
and early seventeenth centuries, and that Shakespeare and Jonson
ridiculed it. The caption would be 117 words. The entry would also go
into that tab's `grounds` and `stands` and into `sources[4]`.

**4.3 The second entry of the list, its second sentence.** "In a
comedy the fool would find out at last and not dare go to law ..." On
p. 252 Auden says this of one man in one play: were *Othello* a
comedy, Roderigo would find out and would not dare go to law. The
entry makes it a rule of comedy, and as a rule it sits oddly on this
page, where the three who are cheated stand in court in Acts 4 and 5.
My wording: "Were the play a comedy, he adds, Roderigo would find out
at last and not dare go to law, since the whole truth would make him
look ridiculous or shameful." That changes what the sentence says is
so, which is why I left it.

**4.4 The third entry of the list.** Weighed and kept. Its paraphrase
is close to p. 30. Its first half bears on the second passage: the
man it describes breaks the common rule because he does not believe
it binds him, and the song says that to steal is no sin. Its second
half says that the law leaves such a man alone and that he learns to
keep it; the third passage shows a court sending him to prison. The
page does not remark on the difference. (Jonson's letter, which the
last Word caption reports, grants that his ending may be censured by
the strict law of comedy. So the two can be squared; but nothing on
the page does it, and I may not add it.) If the lead wants a shorter
list, this is the entry to take out: no caption, ground or `stands`
leans on it, and `sources[2]` would go with it.

**4.5 Voltore's gift, and an entry the sources cannot name.** "Silver
or gold ware" stands in the Names caption, in
`facts.creatures[2].brings.what` and in `facts.theGiftsCounted.what`,
because the checker reads the play's word, plate, as a name for a part
of the page. As English it reads as if the play did not know which
metal. Worse is `sources[4]`: "under the word the play uses for ware
of silver or gold (sense 15)". A list of sources that will not name
its entry cannot be used. The play's word is already on the page in
this sense: the stage direction printed on the first passage has it.
I would make the exception the poet asked for in `open`: "a great
antique piece of plate" in the fact and the caption, and "Plate
(sense 15)" in its place in the list.

**4.6 The facts of Names, and the script's strings.**

- `facts.creatures[4].called.as`. The other four say who calls them
  so ("by Volpone", "by Voltore"). This one does not. It is Volpone,
  in disguise: the speech its `read` opens, in Act 5, Scene 5. Add
  "(by Volpone)" at the end.
- `facts.bestiary.book`. "In the university’s translation": no
  university has been named on the tab. "In the University of
  Aberdeen’s translation", as the tab's `stands` now has it (37).
- `facts.volponeSays[0].what`. "Who think him turning carcass" is the
  play's idiom in the site's voice; the Figure caption of the same
  passage says "who think him a carcass". My wording: "who think he
  is turning into a carcass". The same fact names a gorcrow and does
  not say what one is.
- `site/js/pieces/volpone.js`, line 340: "a sentence of the court: 5
  in all". The caption beside it says "five" twice. Spell out a
  number under ten.
- Line 290 (the three heads of the drawing), line 276 ("The facts in
  full"), lines 247 to 255 (the heads of the folded table) and line 85
  (what the pointer shows on a name): read, and nothing to change. No
  picture shows the folded table open; I read its words in the facts
  and the script.

**4.7 One dictionary entry given two ways.** The note on row 269.1
word 3 says the Italian dictionary gives the word as "an old fox, and
also an old, crafty, sneaking fellow". `facts.creatures[0].nameMeans`,
which the pointer and the folded table print on the same passage, has
"an old fox; also an old, crafty, subtle, sneaking companion", and
that is how `notes.md` records the entry. Neither is in quotation
marks, and "fellow" is a fair modern word for the old sense of
"companion". But a reader who sees both will ask which the dictionary
has. I would give the note the fact's words. I left it because the
choice between the dictionary's word and a modern one is the poet's.

**4.8 The note on row 3.1 word 2, its third sentence.** "It marks
obsolete the plain sense, a box or coffer, last recorded in 1658."
The note does not say what this has to do with the line. Set beside
a hoard of gold it reads as a hint that Jonson's hearers could still
hear a strongbox in the word, and that is the claim the examiner
withdrew (the entry on this word in `open`: the last examples are two
Scottish town records and a wordbook). A fact printed beside a line
is taken to bear on the line. I would cut the sentence; the note then
ends on how the dictionary files these lines, 31 words, and the root
stays in the gloss and in the first sentence. I left it because the
examiner chose to print the dictionary's record there, and to
overrule that is more than wording.

**4.9 The song's Beat tab: a red dot the caption passes over.** The
caption says that in the closing rule the voice cannot keep every
stress on a beat, and begins its account at row 106.15, words 2 and
3. The first red dot of the passage stands one line higher, at row
106.14 word 3, where the drawing sets three stressed words in a row,
and no word is said of it. The caveat on stresses explains why: that
syllable is one of those it lists as open to another stress, and the
captions rest only on stresses not in doubt. So the caption is
right to pass it over, and the drawing shows a doubtful stress like
a certain one. Either a remark on that line could say the stress is
open, or the mark could be drawn differently. Both are beyond my
part.

**4.10 "Everyman" in the first entry of the list.** "Remove Everyman,
he says, and make a deadly sin ... the hero instead". Nothing says
who Everyman is; the first Word caption explains the morality play
without him. The sentence lets a reader work it out. My wording:
"Remove the morality play’s hero, Everyman, he says, and make a
deadly sin, one of the seven, the hero in his place; ...". Auden's
own sentence on p. 173 gives Everyman as the hero whose place the sin
takes, so this adds nothing to what he says. I left it because it is
his paraphrase.

**4.11 The artist's section 5, and what the lead set.**

- Three titles bare in `view.says`: marked (change 2).
- One title bare in a note of the song's Word tab: marked, with the
  two Latin phrases beside it (change 19).
- A name met before it is given, Florio in the fourth creature's
  `nameMeans`: the lead's key `dictionary` now names him at the foot
  of the drawing. Its sentence passes every test. The pointer and the
  folded table can still show "Florio spells it" before a reader has
  come to the foot, but he is on the tab, and the list of sources has
  him.
- The three headings, as the lead set them: each says whose words
  these are and which lines. They pass.
- The gloss for the first speaker of the last passage, "the first
  judge": it passes, and it agrees with the captions and notes, which
  say "the judge" of the same speaker's speeches earlier in the
  scene.

**4.12 Grounds that no printed sentence now uses.** None is printed,
so nothing reads wrong; they are listed in case the lead keeps the
grounds in step with the captions.

- `plates[2].lenses[1].grounds[3]`: its second half ("a fattening for
  slaughter") answered the sentence cut in change 26.
- `plates[0].lenses[2].grounds[0]` and `[1]`: the beat on the pronoun
  and the wait of three lines are now said in remark 3 only (change
  11); `stands` still names that beat among the marks.
- `plates[1].lenses[2].grounds[1]` and `plates[2].lenses[1].grounds[1]`:
  the two definitions now bear on the line under each figure's name,
  not on the caption (changes 42 and 43).

## 5. What on the page got in the way of reading

Not the faults of the kit, which the artist has reported. These are
in the words, or in where the drawing sets its words.

- **The Names drawing, its first head.** "The name means" stands over
  the names, and its rule runs on across the middle column. The first
  two things in that column are what Volpone and Mosca do, and the
  column's own head, "brings the Fox", comes only at the third row.
  Reading down, I took the Fox's pretence for the meaning of a name.
  It is the same at 390, where the two deeds stand straight under
  "the name means". The folded table heads this column "what each
  does". The artist's report does not list it.
- **"5 in all"** in the key of the same drawing (4.6): the one count
  on the page set as a figure.
- **"Rising"**, in the name of the measure under the first Beat
  caption ("blank verse: five beats to the line, rising"). The caption
  says the same thing in plain words, a beat on every second
  syllable, and the page never says that this is what "rising" means.
  The word is the site's own (the poet's file gives it as the
  example), so I leave it to the lead; the page on *The Tempest* says
  "the line beginning off the beat".
- **Reading the tabs in order**, the song's first tab spoke of
  Catullus and of "the closing rule" before the tabs that explain
  them. Mended in words (changes 15 and 16).
- **Bonario** is named four times in captions and notes, and the
  summary at the head never mentions him. Three notes now say what he
  does. A clause in the summary would serve a reader better, but that
  is to add to what it tells, and `about` now has 89 of its 90 words.

## 6. Refused by the permission system

Nothing was refused.

## 7. The checker's last lines

`node build/tools/check-reading.mjs volpone --print`, run after the
last change, ended:

```
no problems
no warnings
the printed notes are fit to print
```

`node build/pieces.mjs volpone` was run after it. The picture tool was
run twice and not again.
