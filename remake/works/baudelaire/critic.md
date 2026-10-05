# Critic's report for the piece "baudelaire"

Critic's record, 3 October 2026 (UTC), 11:38 to 12:40, after the
examiner (`exam.md`) and the artist (`art.md`). Nothing of Shipley's
translation, of Baudelaire's French beyond the single words and short
phrases the notes already name, or of Auden's prose is copied out here:
places are pointed at by row and word number, or by the key in
`reading.json`. "Old" and "new" below are the site's own sentences.

This file was written in parts as the work went. It is finished: the
heading "In short" stands at its foot.

## 1. What was read, and with what

- `remake/BRIEF.md`, `remake/CRITIC.md` (all of it), `remake/EXAMINER.md`
  for "What the model itself got wrong" and "The printed notes",
  `remake/KIT-CHANGES.md` to the mend of 11:06.
- The piece: `reading.json` from end to end (1,211 lines), `exam.md`,
  `art.md`. The kit's `rich.js`, `lens-word.js`, `lens-compare.js` and
  `lens-figure.js` were read, not edited, to see which printed lines
  take a marked word.
- The page before the changes: built at 11:41 with
  `node build/pieces.mjs baudelaire`. The reading had not changed since
  08:46:42 and no file of the kit since 11:05:49, and the artist's
  pictures in `shots/` were of 11:09 to 11:12, so they showed the page
  as it stood when I began. I read the whole page in its six slices at
  1280 px and every one of the ten tabs at 1280 px from those pictures,
  and did not run the picture tool for a first set that would have been
  the same (the lead's word was twice at most, on a loaded machine).
- `review/remake/prose/baudelaire.md`, made again at 11:41 with
  `node build/tools/prose.mjs baudelaire` (the copy on disk was of 05:14,
  older than the examiner's mendings): 4,471 words, read once from top
  to bottom before anything was marked, then sentence by sentence.
- The page after the changes: the checker and the build at 12:20:46,
  then the picture tool once, at 12:21:32 (31 seconds; 1280 and 390 px,
  with the whole page; it printed "nothing reported"). I read the page
  again in its five slices at 1280 px, which show Likeness, Time and
  Maxim; the other seven tabs each in its own picture at 1280 px; and
  Words on the first passage, Maxim and Verbs at 390 px. The second run
  the lead allowed was not needed. The prose file was made again last:
  4,124 words.
- I checked no fact again. The examiner's record stands. Three things
  I did look up in the text printed here, because a rewording leaned
  on them: the first passage has two sentences and the pride is in the
  second (change 28); in the last row of the budget (269.0) it is the
  writer who has not yet known that pleasure (change 24); and Auden's
  phrase kept in the Delay caption is the one the grounds give to
  p. 20 (change 4).
- Nothing was refused by the permission system. Three times a command
  was put off with a notice that the safety check could not be reached
  for the moment; each ran when tried again.

## 2. Every change

Each as: where; old; new (or "cut"); the fault. A mark that came with
a rewording is shown in the new sentence; the marks that changed no
wording are in section 3. In `reading.json` this was 69 exact
replacements, each of a string found once, and one cut of two whole
entries (section 4). Fifty-six values differ from the copy I took at
the start, every one of them an `about`, `plain`, `caption`, `note`,
`gloss`, `say`, `says`, `stands` or `sources`. No `view`, `quote`,
`grounds`, `why`, `checked`, `open`, mark, row, number, `heading`,
`turn`, `join`, `beside` or label was touched.

A word of a passage is given by its block and word number, as the
checker prints them: the first passage is rockets 126.0; the second,
my-heart-laid-bare 238.0 and 239.0; the budget, 266.0 to 269.0; the
maxim beside it, rockets 61.0.

### The head of the page

1. `about`, second sentence. Old: "...the notes are printed after his
   death, in the order in which his publisher mounted them." New:
   "...in the order in which his publisher pasted the sheets." A word
   of the bookbinder's trade where the page's own second caveat has
   the plain one, and two words for one act on one page.

### First passage (Rockets, XXVI)

2. Likeness, the plain words under the figure's name. Old: "a
   comparison stated outright, with both things named; here the word
   is as, the man stays on, and the next sentence is about him". New:
   "a comparison stated outright, with both things named; here the
   word is “as”". Padding: the last two clauses said over again what
   the caption's first two sentences say. The word named stood bare;
   the kit sets this line as plain type, so it takes quotation marks
   and not asterisks.
3. Delay, caption, first sentence. Old: "...and forty-nine words pass
   before its main clause." New: "...before its main clause, the part
   that could stand alone." A term of grammar not said in plain words
   where the page first uses it.
4. Delay, caption, last sentence. Old: "In Auden’s list of the Dandy’s
   traits he does nothing useful, and Auden calls him no man of
   action." New: "Auden calls the Dandy no man of action." Padding:
   three statements running of one thing (the journal's own sentence,
   the trait in Auden's list, Auden's phrase), and the trait is the
   journal's sentence said again. It is still on the page, in the
   first entry of the list. With it gone, the caption no longer cites
   a list that, as the examiner noted for the lead, also has the Dandy
   loving work.
   The `stands` of the tab was trimmed to match: "...(1947), pp.
   19–20." is now "...(1947), p. 20." (p. 19 was the trait's page).
   The `why` names only the journal's sentence and Auden's phrase and
   still fits. One item of `grounds` (the trait, p. 19) now has nothing
   in the caption standing on it; `grounds` is not mine to touch.
5. Words, caption, second sentence. Old: "Intoxicated turns the French
   enivré, made drunk, ..." New: "Intoxicated translates the French
   enivré, made drunk, ..." A mannered word for the ordinary one; it
   stood four times on the page (section 5).
6. Words, caption, third sentence. Old: "So the phrase makes one man
   drunk on his own calm." New: "The phrase makes one man drunk on
   his own calm." "So" opened a sentence in five of the ten captions;
   here nothing is concluded, the sentence only puts the two words
   together.
7. Words, the note on word 75 of the passage. Old: "The same
   French word is turned as destiny in the third passage." New: "The
   same French word is translated as *destiny* in the third passage."
   "Turned" again; the word named is marked.
8. Words, the note on word 103. Old: "Littré’s
   sense is a calm state of the soul, presence of mind; English has
   had the phrase since 1712." New: "English has had the phrase since
   1712." The first half was the caption's first sentence over again.
9. Words, the note on word 106. Old: "French
   borrowed the English word about 1830; Littré defines a dandy as a
   man studied in his dress who carries the fashions to the point of
   ridicule." New: cut; the word keeps the gloss under it. The note
   was the caption's fifth sentence nearly word for word. All it added
   was "studied in his dress".
10. French, the remark on the pair that has the theft (`ties[2]`; the
    page prints it as remark 1), last sentence. Old: "Destinée is the
    word he turns as destiny in the third passage." New: "*Destinée*
    is the word he translates as *destiny* in the third passage."
    "Turns" again.

### Second passage (My Heart Laid Bare, LXXII)

11. Time, caption, third sentence. Old: "No other entry in Shipley’s
    text of the two journals gives the day on which it was written."
    New: "No other entry in Shipley’s translation of the two journals
    gives the day on which it was written." "Shipley’s text of the
    journals" reads as if he had edited them; he translated them.
12. Wing, the plain words under the figure's name. Old: "a feature of
    one thing given to another: here imbecility, a weakness, is given
    a wing". New: "a feature of one thing given to another". Padding:
    the second half was the caption's second sentence over again. All
    it added was "a weakness", which the Words tab gives in full.
13. Wing, caption, third sentence. Old: "The thing stays two steps
    off: ..." New: "Imbecility itself stays two steps off: ..." "The
    thing" could be the wing, the figure or the event the entry does
    not tell; the sentence goes on to show it is the imbecility.
14. Wing, `stands`. Old: "...CII, *Le Gouffre*, p. 237, ..." New:
    "...CII, “Le Gouffre,” p. 237, ..." A short poem's title in
    italics; `sources` already had it in quotation marks.
15. Words, caption, third sentence. Old: "So the entry tells the
    hysteria as his own work, ..." New: "So the entry presents the
    hysteria as his own work, ..." "Tells a thing as" is not said in
    English.
16. Words, the note on word 11 of the first paragraph (238.0). Old:
    "That is Littré’s first sense and his second is a whirlpool; he
    says gouffre is the same word as golfe, gulf." New: "Littré’s
    first sense of *gouffre* is a deep cavity and his second is a
    whirlpool; he says it is the same word as *golfe*, gulf." "That"
    pointed at the gloss, which is printed under the word in the
    passage and not beside the note.
17. Words, the note on word 2 of the second paragraph (239.0). Old:
    "The French is cultivé; Auden quotes the phrase in his essay on
    Goethe’s Italian Journey, where a religion that trusts the mood of
    the moment leads first to this cultivation, he says, and at last
    to despair." New: "The French is *cultivé*; Auden quotes the
    phrase in his essay on Goethe’s *Italian Journey*." From "where"
    on, the note was the caption's last sentence over again. It keeps
    what the caption lacks: the French word and the name of the essay.
18. Words, the note on word 20 (239.0). Old: "...and Littré glosses
    subir as to pass, willing or not, ..." New: "...and Littré defines
    *subir* as to pass, willing or not, ..." "Glosses" as a verb is a
    word of the trade; the note on word 4 already said "defines".
19. Words, the note on word 35 (239.0). Old: "That is Littré’s first
    sense of imbécillité, and in medicine ..." New: "Weakness of mind
    and body is Littré’s first sense of *imbécillité*, and in medicine
    ..." "That" pointed at the gloss again.

### Third passage (the budget beside the maxim)

20. Maxim, first remark. Old: "...The note has three names, a sum
    against each, and a total by the month." New: "...The budget has
    three names, ..."
21. Maxim, second remark. Old: "...The note orders work and counts it
    by the clock, from six till noon." New: "...The budget orders
    work ..."
22. Maxim, third remark. Old: "...The note promises nothing: we shall
    see." New: "...The budget promises nothing: *we shall see*."
    One fault in all three: the caption calls both texts notes and
    names them the maxim and the budget, so "the note" in a remark
    could be either.
23. Words, caption, fourth sentence. Old: "Fate and destiny are one
    French word, destinée, and heures, hours, stands in both
    sentences, so work stands where pleasure stood." New: "*Fate* and
    *destiny* are one French word, *destinée*, and *heures*, hours, is
    in both sentences, so work stands where pleasure stood." (In the
    file the italics of a caption are `<i>`.) The two English words
    are named as words and stood bare beside two French words in
    italics; and "stands" came twice in one sentence in two senses.
24. Words, caption, sixth sentence. Old: "...in a question that breaks
    off, and as that of [words 8 to 11 of 269.0], [words 2 to 4]."
    New: "...and as the pleasure of [the same four words], which he
    has [the same three]." "That of" and a bare participle left the
    reader to work out what is not yet known, and by whom. The row
    says both.
25. Words, the note on word 11 of 267.0. Old: "It is the noun of
    travailler, the verb that begins both resolutions; Shipley varies
    work and toil ..." New: "*Travail* is the noun of *travailler*,
    ...; Shipley varies *work* and *toil* ..." "It" pointed at the
    gloss.
26. Words, the note on word 11 of the maxim. Old: "Littré glosses the
    French word as that which is outside the earth; Shipley turns it
    as abstract." New: "Littré defines the French word as that which
    is outside the earth; Shipley translates it as *abstract*."
    "Glosses" and "turns" again.

### The list under the passages

27. First entry, second and third sentences. Old: "Auden then lists
    the Dandy’s traits from the journals. He lives and sleeps before a
    looking glass, ..." New: "Auden then lists the Dandy’s traits from
    the journals: he lives and sleeps before a looking glass, ..."
    After the full stop "He" read as Auden.
28. First entry, last sentence. Old: "That last trait is taken from
    the sentence of the first passage." New: "...from the second
    sentence of the first passage." The passage has two sentences and
    "the sentence" did not say which.
29. Sixth entry, first sentence. Old: "...beside Rimbaud’s later and
    more showy one, from poet to trader, where he thinks the heart did
    not change: there, it seems to him, one kind of Dandy was merely
    traded for another, ..." New: "...beside Rimbaud’s later and more
    showy turn from poet to trader, where he thinks the heart did not
    change: there, it seems to him, one kind of Dandy was merely
    swapped for another, ..." "One" stood for "change of heart" in
    the sentence that goes on to say the heart did not change; and
    "trader ... traded" fell within a line. I wrote "swapped" and not
    the verb of Auden's own sentence, so that the paraphrase stays
    one.
30. Sixth entry, last sentence. Old: "He asks in prayer only to use
    his gifts better." New: "Baudelaire asks in prayer only to use his
    gifts better." "Him" in the sentence before is Auden.
31. Seventh entry (the eighth when I began), first sentence. Old: "In
    the same book the entry of January 23, 1862 is one of his
    instances that the hero too can perish." New: "In *The Enchafèd
    Flood* the entry of January 23, 1862 is one of Auden’s instances
    that the hero too can perish." The entry that named the book was
    taken out (section 4), and with it gone "his" followed a sentence
    about Baudelaire.
32. Eighth entry (the ninth when I began), second sentence. Old: "...in
    his hearing the wind this entry records; ..." New: "...in his
    hearing the wind that the second passage records; ..." Under the
    three passages "this entry" has nothing to point at, and could be
    taken for the entry of the list.

### The notes at the foot

33. `sources`, the line for *The Enchafèd Flood*. Old: "...pp. 25–26,
    42 and 84." New: "...pp. 42 and 84." The pages of the entry taken
    out. The two lines for the anthology of aphorisms and for Ansen's
    *Table Talk* came out with the other entry (section 4).

## 3. Words and titles marked, with no change of wording

The artist was right: none of the 8 remarks, 22 notes and 22 glosses
set off a word named as a word. Now 54 words or short phrases stand
between asterisks in 32 of those lines: 30 in 18 of the 21 notes, 15
in 5 of the 8 remarks, 9 in 9 of the 22 glosses. The pictures of 12:21
show them upright in the italic line round them, at 1280 and 390 px.
Three kinds of thing are marked: a French or Latin word given with its
meaning; a word of Shipley's English named as a word; and the English
of a French phrase where a remark sets it against Shipley's.

By place; g is the gloss under the word, n its note.

First passage, Words (rockets 126.0):
- w75: g *la destinée*; n *destiny*
- w81: n *bercé*, *bercer*
- w100: n *enivré*
- w106: g *dandy*
- w132: n *conscience*

First passage, French (remarks in the order of the file):
- `ties[0]`: *he says to himself*, *he said*, *to himself*
- `ties[1]`: *those who pass*
- `ties[2]`: *has stolen*, *he says*, *stole*, *Destinée*, *destiny*
- `ties[3]`: *Sang-froid*, *Dandysme*, *dandy*

Second passage, Words (238.0 and 239.0):
- 238.0 w11: g *gouffre*; n *gouffre*, *golfe*
- 239.0 w2: n *cultivé*, and the title *Italian Journey*
- w4: n *hystérie*
- w13: n *vertere*, *vertige*
- w20: g *subi*; n *j’ai subi*, *subir*, *felt*, *senti*
- w23: g *avertissement*
- w35: n *imbécillité*, *madness*

Third passage, Maxim:
- `ties[2]`: *you are saved*, *you will be saved*, *we shall see*

Third passage, Words (266.0 to 268.0, and the maxim, 61.0):
- 266.0 w0: n *hygiène*
- w2.2: g *Jean*; n *Jeanne*
- 267.0 w5: g *destinée*; n *fate*
- w7 to 9: n *plusieurs heures*, *quelques heures*
- w11: g *travail*; n *Travail*, *travailler*, *work*, *toil*
- 268.0 w12: n *des plaisirs nouveaux*
- maxim w11: g *extra-terrestre*; n *abstract*
- maxim w15 to 16: n *vous serez sauvé*

Not marked, because they name no word: 3 notes (126.0 w103; 239.0
w23; 266.0 w4 to 5), 3 remarks (`ties[4]` of French; `ties[0]` and
`ties[1]` of Maxim) and 13 glosses that give a meaning in English.

Outside the small notes:
- `about`: "the word Hygiene" is now "the word *Hygiene*".
- Seventh entry of the list: "where imbecility has become madness" is
  now "where *imbecility* has become *madness*".
- The two words named in the caption of Words on the third passage
  (change 23) and the one in the plain words of Likeness (change 2).

Titles marked in the notes at the foot (`stands`), eight:
- the words of five links, where the title stood bare inside the
  brackets: *My Heart Laid Bare*, XVIII (Delay); *Rockets*, XXVI
  (French, and Words on the third passage); *My Heart Laid Bare*,
  LXXIII (Words on the second passage); *My Heart Laid Bare*, LXXIV
  (Words on the third passage). The addresses are untouched. `rich.js`
  passes the words of a link through the same marker, and five other
  pieces already write a link so.
- *Fusées*, twice (Maxim; Words on the third passage): the French
  title of *Rockets*, italic in `sources`, bare here.
- “Le Gouffre,” (change 14).

Left bare on purpose, for the lead if they should match:
- the headwords after "under" in nine `stands` and two `sources`
  lines. They are dictionary entries in a list, and none can be
  misread as a word of the sentence. The critic of "rimbaud" left
  the same; the critic of "volpone" marked nine where one could be
  misread.
- "to-day" in the `stands` of Time, and "Hygiène" in the third line
  of `sources`.
- the key of Likeness and the title in the caption of Wing: section
  6, items 8 and 5.

## 4. The list under More from Auden

Ten entries when I began; eight now. The examiner had written for the
critic that no caption, ground or `stands` leans on two of them. I
looked again after the change: *The Enchafèd Flood* is cited in what
the page prints only at p. 84 (Words, first passage) and p. 42 (Words,
second passage), and Ansen's book and the anthology nowhere.

Taken out whole (`says`, `source`, `checked`; neither had a `quote`)
and put at the end of `notes.md`, under "Taken out of the list of what
Auden said (the critic, 3 October)":

1. The seventh entry as I found it, 106 words, from *The Enchafèd
   Flood*, pp. 25–26, with one line of the introduction, p. 19. It
   said that Auden quotes the prophecy from the same entry of
   *Rockets* as the first passage, and that he says the Romantic
   writers disliked the democracy of their day out of a belief in
   individual freedom. Why: it is about a part of that entry the page
   does not show, and what it reports is said of the Romantic writers
   as a group. The Dandy's opposites, which it touches, are in the
   first entry, from the introduction. The page keeps the entry from
   that book that two captions stand on.
2. The tenth entry, 77 words, from Ansen's *Table Talk* and the
   foreword to *The Viking Book of Aphorisms*. It said where Auden
   ranked Baudelaire among aphorists and what the anthology says an
   aphorism must do. Why: it shows that he named the journals' writer
   in talk and put sentences of his in an anthology. It says nothing
   about a passage shown or about the Dandy. It was also the entry
   least well seen: by the fourth line of `open`, neither page number
   was seen.

What followed from the cut:
- The entry after the first one began "In the same book"; it now names
  the book (change 31).
- `sources` went from 13 lines to 11: pages 25–26 out of the line for
  *The Enchafèd Flood* (change 33), and the lines for the anthology
  and for *Table Talk* out whole. Nothing else printed uses them.
- The fourth line of `open` (not printed) still describes how the
  anthology's foreword and Ansen's remark were seen. It now belongs
  with the entry in `notes.md`. `open` is not mine to edit.

The eight that stay, and what leans on each: (1) the two figures and
the traits, Likeness; (2) the Dandy summed up, Delay and the view;
(3) the Dandy's mistake, Likeness; (4) the contrary thought, French,
Time, Wing and the view; (5) the last lines on time, with the list's
one quotation, Verbs and Wing; (6) Rimbaud, the sentence that follows
the one Words on the third passage reports; (7) *The Enchafèd Flood*,
the Words tabs of the first and second passages; (8) the two essays
of *Forewords and Afterwords*, Time and Words on the second passage.
Six are from the introduction of 1947. I asked of each whether the
page would miss it, and it would.

## 5. What recurs, with counts

Counted on the reading as it now stands, unless "before" is said.

1. **A caption closes on what Auden said: 10 of 10.** In eight he
   first comes in the last sentence or the one before it; Maxim also
   opens on him; in Words on the second passage he comes in the fourth
   sentence of five. The words vary: "Auden says" opens the closing
   sentence three times (Words on the first passage, Maxim, Words on
   the third), and the other seven are each built another way (lists,
   calls twice, quotes, takes up, a sentence that turns on "Auden
   says", "Auden’s introduction ends"). Left. The place is rule two,
   what is there and then the reason on his word; no one phrase
   reaches the six that CRITIC.md calls a tic.
2. **One build for every caption:** what the marks show, in four of
   them a dictionary or a handbook, then Auden. Each caption has 104
   to 114 words (105 to 110 before; the limit is 120) and five to nine
   sentences. Read one after another the ten sound alike in gait.
   Each is read by itself under its own tab, so I left the build.
3. **"So" opening a sentence: 4 captions, once each** (Likeness,
   French, Wing, Words on the second passage); 5 before (change 6).
   In each of the four it marks the step from what is there to what
   follows from it.
4. **Littré by name: 6 times in 3 captions, and in 11 of the 21
   notes** (13 of 22 before). "Littré’s first sense" 6 times: 2
   captions, 4 notes. These are citations, which rule three asks for,
   and I left them. What went were the notes that said a caption's
   Littré over again (8, 9).
5. **A note or remark that opens "The French is" or "The French
   has": 8** (5 notes, 3 remarks). The plain form of a note on a
   translated word. Left.
6. **"Shipley’s text lacks": 3** (the Verbs caption and two notes on
   the third passage), and "Shipley lacks" once in the third caveat.
   Each names a different line of the French. Left.
7. **"Turns" or "turned" for "translates": 4 before** (one caption,
   two notes, one remark), none now. **"Glosses" as a verb: 2
   before**, none now.
8. **A note that leaned on the gloss under its word** ("That is",
   "It is"): 3, all mended (16, 19, 25). The page prints a note beside
   the word in bold and the gloss elsewhere, under the word in the
   passage.
9. **A line that said its caption over again:** 3 notes, one cut and
   two trimmed (9; 8, 17); the plain words under both figures' names
   (2, 12); one sentence of a caption that said the one before it
   again (4). One short note of the kind was left (section 6, item
   11).
10. **One fact in two tabs of one passage: 1.** That English has had
    the phrase since 1712 is in the note on 126.0 w103 and in
    `ties[3]` of French, in the same seven words. Left: a reader
    opens one tab at a time.
11. **Two names for a numbered note of the journals:** "entry" 9
    times and "leaf" or "leaves" 12 times in what is printed. `about`
    says the notes were written on loose sheets, and a reader can
    take a leaf for one of them. Left; for the lead if one word should
    serve.

What I looked for and did not find: a sentence that hands down what a
passage means or makes a reader feel; a close on a moral or a neat
reversal (the nearest is the last sentence of Wing: section 6, item
4); a stock or inflated word (the checker has no warnings); "not X
but Y" for effect (the two "not"s in the list are Auden's own
distinctions, and two more are in the caveats); a dash inside a
sentence of the site's; a question put for effect; "we"; praise of
the work; a working word in what is printed.

## 6. Sentences doubted and not changed

1. **`view.says`, first sentence, and the same words in the second
   entry of the list:** "...to be conscious that he is himself, like
   no one else." It reads two ways: he is himself as no one else is
   himself, or he is himself and unlike anyone else. Both come to his
   being unique, so no reader is misled. `view` is not mine to touch,
   and I left the list's sentence so that the two agree. For the lead.
2. **The title** has "dandy" in lower case; every sentence under it
   writes "the Dandy" for Auden's figure (18 times) and "a dandy" for
   the common noun (once, in the list). The lower case may be meant.
   For the lead.
3. **`about`** accounts for three of the four notes named in the line
   under the title. The maxim, *Rockets* XIII, is not mentioned; "The
   other two are from late leaves of *My Heart Laid Bare*" is true of
   the second passage and of the left side of the third. A clause on
   the maxim would be a new statement, and `about` is at its limit of
   90 words. For the lead.
4. **Wing, last sentence.** The caption sets the bird of Auden's last
   lines beside the wing of the entry and stops. It does not say that
   Auden had the wing in mind, and the examiner let it stand. It is
   the one close on the page that works by an image. I left it: it
   reports what is in Auden's text and concludes nothing.
5. **Wing, the sonnet's title** is in italics in the caption, as a
   French title followed by its English. In `stands` and `sources` it
   now has quotation marks. Other critics left an italic title in a
   caption; so did I. For the lead if all three should match.
6. **Wing, the definition twice.** The caption's second sentence and
   the plain words under the figure's name say one thing in nearly the
   same words. The caption needs it to make its point; the line under
   the name is the kit's place for it. On Likeness the caption never
   uses the word "simile" and the line carries the definition alone.
7. **Time, last sentence:** "In another essay he writes..." Other than
   the introduction, which the caption has not called an essay. The
   last entry of the list names it: the essay on Tennyson. Left: the
   name would be a new thing in a caption that has no use for it.
8. **Likeness, the key:** "now he" and "his me" are words named as
   words and stand bare. The second sentence of the caption explains
   both. The key is plain type and joins its labels with commas, so
   quotation marks would crowd it; the critic of "rimbaud" left the
   same. For the lead when the key is settled.
9. **Delay, the last two sentences** set the journal's sentence and
   Auden's phrase about the Dandy beside the six states and say no
   more. The step is the reader's: six things the man is, one thing he
   does, and that is to speak. To say it would be to add a claim.
10. **French:** "a compound past" in the remark on the theft is a
    term of grammar; the remark says what the form does, which is the
    plain saying of it. "Disclaiming" in the caption is the one
    bookish word in the ten captions. The words it stands for are in
    the part of the paragraph the page does not show (126.0 w13 to
    26), so I kept the examiner's word.
11. **Words on the third passage, the note on 267.0 w5:** "The same
    French word as *fate* in the first passage." It says in nine words
    what the caption's fourth sentence says. Left because it is short
    and is the mate of the note on 126.0 w75. If notes are to hold
    only what a caption lacks, it goes, and the gloss stays.
12. **Time and Verbs have nine sentences each** in about 110 words;
    the other eight captions have five to seven. Each short sentence
    points at one mark, in the order of the passage. I read them as
    steps and not as a manner, and left them.
13. **No tab pays nothing.** Likeness shows who the pride is told of;
    Delay, where the main verb falls; the three Words tabs, what the
    French words mean; French, a change of tense; Time and Verbs, the
    order of the verbs; Wing, how far off the thing is; Maxim, two
    notes against each other. No claim read to me as made up: each
    closing sentence has its page in `stands`.

## 7. What on the page got in the way of reading

Words only. How the kit sets a line, a gloss, a key or a caption is in
the artist's report and is not said again here.

1. **The sense of one word up to three times on a Words tab:** in the
   caption, in the gloss under the word, and in its note. Mended where
   a whole clause came back (8, 9, 17). Still so, and left: 239.0 w4,
   where caption, gloss and note each give the dictionary's sense in
   nearly the same words and the note alone goes on to the rest of it;
   and 267.0 w5 (section 6, item 11).
2. **The capital in word 73 of the first passage.** A reader meets a
   capital in the middle of a sentence and may take it for a slip of
   the page. The `open` list records that it is in the Project
   Gutenberg text; nothing printed says so. The caption of French
   quotes the word with its capital and the remark beside it names it
   without. For the lead: a line in the caveats, or nothing.
3. **"The third passage"** in the note on 126.0 w75 and in `ties[2]`
   of French. The third passage is two texts side by side, and the
   word meant is in the left one. Clear enough when one gets there.
4. **The numbers of the remarks on French.** The page numbers them by
   where each pair stands in the passage: its remark 1 is `ties[2]`,
   2 is `ties[4]`, 3 is `ties[3]`, 4 is `ties[1]` and 5 is `ties[0]`.
   Nothing is wrong for a reader; it is said so that this report can
   be set against the page.
5. **Seen in a picture, and no matter of words:** on Verbs at 1280 px
   there is a speck at the right edge of the caption's second line
   (near x 1118, y 343 in `baudelaire-budget-1-verbs-1280.png`). It is
   not there at 390 px and not in the artist's list. I could not
   enlarge it, and installed nothing to do so.

## 8. After the changes, and what is left

- `node build/tools/check-reading.mjs baudelaire --print`, last run at
  12:34 on the reading as it stands (sha256 267acce3...; 1b515fc9...
  when I began): no problems, no warnings, the printed notes fit to
  print. There was no WARNING to read at any run.
- `node build/pieces.mjs baudelaire` ran at 12:20:46, after the last
  edit (12:20:03), and the pictures are of that build.
- `notes.md`: only its end was written, 2,676 characters under the
  one new heading; the text before it is unchanged to the byte.
- The reading and the notes as I found them are kept, outside the
  project, in the session's scratch folder as
  `baudelaire-critic-reading-before.json` (sha256 1b515fc9...) and
  `baudelaire-critic-notes-before.md`, should anything need putting
  back.
- `shots/`: my run replaced the artist's pictures at 1280 and 390 px
  under the same names. Still there from the artist's set, and now
  showing the page as it was before the changes: the tab pictures at
  360 and 320 px (11:10 to 11:12), `baudelaire-page-1280-5.png` and
  `baudelaire-page-390-8.png` (the page is shorter now, five slices
  and eight), and `shots/trial/`. I deleted nothing.
- Out of date, not printed, and not mine to edit: the eleventh line
  of `open` and the first line of "Still doubtful" in `exam.md` say
  the examiner's mendings were never seen built. They have been: the
  artist's report gives builds from 09:37 on and pictures of 11:09,
  and I built at 11:41 and 12:20 and photographed at 12:21. The fourth
  line of `open` now belongs with an entry that is in `notes.md`.

For the lead to decide:

1. `view.says` and the second entry of the list: "he is himself, like
   no one else" reads two ways (section 6, item 1).
2. The title's lower-case "dandy" beside "the Dandy" everywhere else
   (section 6, item 2).
3. `about` does not mention the maxim, and has no room to (section 6,
   item 3).
4. The sonnet's title in italics in the caption of Wing, in quotation
   marks at the foot (section 6, item 5); the headwords after "under"
   left bare (section 3).
5. The key of Likeness: "now he", "his me" (section 6, item 8).
6. The capital in word 73 of the first passage: say in the caveats
   that it is the source's, or leave it (section 7, item 2).
7. Whether the short note on 267.0 w5 should go (section 6, item 11),
   and whether "leaf" and "entry" should be one word (section 5, item
   11).
8. The two entries in `notes.md`: put either back if the list is
   wanted fuller. Both are true and were read by the examiner.

## In short

- **Changed:** 34 sentences or lines reworded or cut. Thirty-one are
  in the reading's prose: 1 in `about`, 2 lines of plain words under a
  figure's name, 9 sentences in 6 captions, 9 notes (one cut whole),
  4 remarks, 6 sentences in 4 entries of the list. Three are in the
  notes at the foot. No claim was added or made stronger.
- **Marked:** 54 words or short phrases in 32 of the small notes,
  remarks and glosses, which had none; one in `about`, two in the
  list; 8 titles in the notes at the foot.
- **The list under "More from Auden":** 10 entries to 8. The two taken
  out are whole at the end of `notes.md`; `sources` went from 13
  lines to 11.
- **Faults that came up most:** a word with nothing clear to point at
  ("That is", "It is", "the note", "the thing", "this entry", "he"),
  14 sentences; a mannered, trade or wrong word for the plain one
  ("turns" for "translates", "glosses", "mounted", "tells as"), 8; a
  line that said over again what stands beside it, 6.
- **Not found:** a sentence that pronounces on what a passage means, a
  close that poses, a stock word, a made-up reading. Every caption
  closes on Auden, each time in different words and with its page.
- **Left for the lead:** the eight things listed in section 8.
- **Refused:** nothing. The picture tool was run once.
- **The last three lines the checker printed:**

```
no problems
no warnings
the printed notes are fit to print
```
