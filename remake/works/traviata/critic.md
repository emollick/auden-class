# La Traviata: the critic's report

Begun 2026-10-03 13:26 UTC, handed in at 14:24 UTC. Working
record, not printed. Words of the libretto are named by row and word
number, or by the single word a caption already prints; no line of the
libretto and no sentence of Auden's is written out here.

In short: 27 changes of wording (section 1). They touch 29 printed
sentences, two of which are cut (a signpost, change 5, and a verdict,
change 9), and one `why`, which is not printed. One entry is taken out
of the list under "More from Auden" (nine are now eight; section 3).
31 Italian words in 21 notes and 15 English words in 9 numbered
remarks are set between asterisks, with four titles and one term
(section 2). No mark on a passage, ground, fact, quotation, number,
name or page reference was touched. The checker ends as it began: no
problems, no warnings, the printed notes are fit to print.

## 0. State on arrival

- `reading.json` as the lead left it at 13:25:22 UTC: the two new keys
  `syllables` and `stanzas` are in the `facts` of the tab Scene of the
  second passage, and the apostrophe of row 1.0 word 3 of the first
  passage is curled, in the hosted Italian and in the Measure tab's
  division of that word. A copy is in `critic/before.json`.
- `node build/pieces.mjs traviata` at 13:26:56; `node
  build/tools/prose.mjs traviata` printed 4,745 words.
- `node build/tools/check-reading.mjs traviata --print`: no problems,
  no warnings, the printed notes are fit to print.
- The pictures read first were the artist's set of 13:14 to 13:15 in
  `shots/` (thirty-nine, by the common tool) and the lead's two of the
  Scene tab in `shots/lead/` (13:23). Nothing the page is made from
  changed between those pictures and my reading but the two things the
  lead set, so I did not spend a run of the picture tool on the page
  as it stood. The tool was run twice, each time after changes of
  mine (section 9).
- Read besides: BRIEF.md, CRITIC.md, "The printed notes" in
  EXAMINER.md, this piece's art.md, exam.md, the end of notes.md, and
  every string of the reading (with `critic/dump.mjs`, which only
  prints).

## 1. What I changed in the wording

Every change was made by `build/tools/edit-exact.py` from the lists
kept in `critic/`: `spec-2-wording.json` (its first line was replaced
by `spec-3-about.json`), `spec-5`, `-6` and `-7` for the later ones,
and `edits-*.json`, the raw edits that `critic/make-edits.py` made
from them.
"Old" and "new" below are the page's own sentences. Places are named
as the page names them, with the place in the reading after.

### The head of the page

1. `about`, first sentence. Old: "Violetta Valery, a Paris courtesan,
   is the woman led astray of the title." New: "Violetta Valery, a
   Paris courtesan, is the title’s *traviata*, the woman led astray."
   A turn that trips: on a phone the line broke after "led" and the
   next began "astray of the title". The Italian word now stands
   beside its meaning. Still 90 words (the limit).

### First passage, "His four lines in her song"

2. Measure, numbered remark 4 (`plates[0].lenses[1].points[3].say`).
   Old: "Her recitative begins with two lines of the same measure."
   New: "Her recitative, the sung speech before the song, begins with
   two lines of the same measure." A term left unexplained: this is
   the first place the file has *recitative* (see also 27); the word
   stands nine times in the page's sentences and twice more as the
   name of a part in the Scene drawing.
3. Words, caption, first sentence. Old: "The four lines call love the
   soul, in her mouth the heartbeat, of the whole universe,
   mysterious, …" New: "The four lines call love the soul (in her
   song, the heartbeat) of the whole universe, mysterious, …" Hard to
   follow: eight commas, and the aside split "the soul" from "of the
   whole universe". "In her mouth" was a mock-antique turn (it stood
   twice on the page; see 16).
4. Words, caption, the sentence that reports Auden. Old: "He held
   that" followed by three nouns of his in his order and the verb
   after them, then "felt by everybody, and that opera can show it
   where spoken drama cannot: …" New: "He held that everybody has
   joyful, tender and noble feelings, and that opera can show it where
   spoken drama cannot: a song may come at the wrong moment, never
   from the wrong person." The phrase the lead named: a run of five
   words shared with *The Dyer's Hand* (section 6). The claim is the
   same: the three things are still said to be everybody's, and
   nothing is added. His three nouns are now three adjectives in the
   page's own sentence, and the verb after them is gone.
5. English, caption. Old: "Inside the frame it writes new matter. The
   soul and the universe are gone, a **chain** comes in, …" New:
   "Inside it the soul and the universe are gone, a **chain** comes
   in, …" A signpost: the sentence only announced the one after it.
6. English, caption. Old: "Auden and Kallman wrote that the
   translation of an aria owes only its emotion." New: "… need give
   only its emotion." A mannered verb: it was not clear who owes what
   to whom. The list under the passages already says "need give".
7. English, numbered remark 7 (`ties[6].say`). Old: "Piave’s word is
   strange, said of what amazes and may also trouble." New: "Piave’s
   word is *strano*, strange, said of what amazes and may also
   trouble." As it stood the sentence could be read as calling his
   word odd. The Italian word is on the passage (row 3.0, words 1 and
   3) and in the note on the Words tab.

### Second passage, "Always free"

8. Measure, caption. Old: "It is an old line, used in dance songs,
   religious songs and carnival songs, and the guests took their leave
   in it, with *gioir*, …" New: "It is an old line, used in dance
   songs, religious songs and carnival songs. The guests took their
   leave in it, with *gioir*, …" One sentence of 37 words carrying the
   history of the line and the guests' chorus; now two.
9. Rhyme, caption, third sentence. Old: "The cost is named before the
   song begins." New: cut. Pronouncing: a short verdict set between
   the fact and Auden's sentence. The sentence before it says only
   that the verb "can mean" to die, and this one then calls the death
   "the cost" outright, a word the libretto does not use and that was
   chosen to meet Auden's "whatever it costs them" in the next
   sentence. The rhyme of the two verbs and Auden's sentence now stand
   side by side and the reader joins them. The caption still goes from
   what is there (the two rhymed lines, what their rhyme joins) to
   the reason
   (Auden on willfulness). If the lead wants it back, the old sentence
   is here and in `critic/before.json`.
10. Rhyme, `why` (not printed), trimmed to match 9. Old: "The couplet
    that closes the recitative rhymes taking joy with coming to an
    end, so the cost is named before the song begins; Auden held …"
    New: "The couplet that closes the recitative rhymes taking joy
    with coming to an end; Auden held …"
11. Rhyme, caption. Old: "Auden held that opera imitates human
    willfulness: …" New: "Opera, Auden held, imitates human
    willfulness: …" The frame "Auden held that", four times in eleven
    captions (section 4).
12. Rhyme, caption and the printed note under it (`stands`). Old: "In
    the song, printed as two quatrains, rhyme ties the halves
    together"; "page 11 of its first printing for the two quatrains".
    New: "In the song, printed as two groups of four lines, rhyme ties
    the halves together"; "for the two groups of four". A word of the
    trade where the plain words are as short.
13. Words, caption. Old: "Auden held that a sung role commands its
    fate more than a spoken one, even a self-destroyer’s, and that the
    great age of opera, …" New: "In Auden’s view a sung role commands
    its fate more than a spoken one, even a self-destroyer’s, and the
    great age of opera, …" The same frame again.
14. Scene, caption. Old: "The slow song wonders whether he is the man
    she once pictured; the fast one chooses pleasure." New: "In the
    slow song she wonders whether he is the man she once pictured; in
    the fast one she chooses pleasure." Songs made to wonder and to
    choose; she does both.

### Third passage, "Her last words"

15. Words, caption. Old: "Auden held that self-deception cannot be
    sung, since what is sung is so; …" New: "Self-deception, Auden
    held, cannot be sung, since what is sung is so; …" The frame, and
    the sentence itself nearly word for word as on the Refrain tab.
16. Words, the note on row 1.0 words 1 to 2 (`notes[0].note`). Old:
    "It stands four times in the libretto, each time in her mouth."
    New: "It stands four times in the libretto, and each time she says
    it." The mock-antique turn again.
17. Shared, caption, last sentence. Old: "Auden wrote that in a
    libretto the finding out of a mistake must be abrupt." New: "In a
    libretto, Auden wrote, the finding out of a mistake must be
    abrupt." The same sentence closes the Scene caption of the second
    passage; the words that report him are unchanged, only the frame
    moves. (See section 5 for my doubt about this sentence here.)

### The list under "More from Auden"

18. First entry. Old: "… and said that Verdi was a discovery of his
    last five years." New: "… and said that he had discovered Verdi in
    the past five years." "His last five years" could be read as
    Verdi's.
19. Second entry (pp. 469–70). Old: Auden's three nouns in his order,
    then ", he wrote, are not kept for noble characters. Everybody
    feels them, the most depraved included." New: "Auden wrote that
    joyful, tender and noble feelings are not kept for noble
    characters. Everybody has them, the most depraved included." The
    same three nouns as in 4. Here "he wrote" broke the run at four
    words, so the sweep did not list it; I changed it all the same, so
    that the page does not say his phrase in the list after ceasing to
    say it in the caption. If the lead thinks this goes past the rule
    of five words, the old sentence is in `critic/before.json`.
20. The entry from “Cav & Pag.” Old: "he says that verismo exchanged
    the gods and princes …" New: "he says that verismo, the realist
    school of opera, exchanged the gods and princes …" A term left
    unexplained.
21. The entry from p. 474. Old: "A high C sung dead on pitch, he
    wrote, disproves the idea …" New: "For him a high C sung dead on
    pitch disproves the idea …" The frame ", he wrote," stood in seven
    of the nine entries (section 4).

One entry of the list is taken out: section 3.

### Three notes that said their word twice (found in the pictures)

The page prints, in bold at the head of every word note, the words of
the passage the note hangs on. In three notes that head is one word
and the note began with the same word, as the dictionary's entry
word. Once I had marked those entry words (section 2) they stood
upright straight after the bold head, the same word twice running, at
both widths (`shots/traviata-cabaletta-2-words-1280.png`, as taken at
13:47). The note is printed nowhere without its head
(`site/js/kit/lens-word.js`), so the second saying could go. A word
said twice; nothing else changes.

22. First passage, Words, the note on row 5.0 word 3
    (`plates[0].lenses[2].notes[12].note`). Old: "*Palpito* is each
    single beat of the heart, and in a figurative sense a strong
    emotion." New: "Each single beat of the heart, and in a figurative
    sense a strong emotion."
23. Second passage, Words, the note on the last word of row 9.0
    (`plates[1].lenses[2].notes[2].note`). Old: "*Gioire*: to feel an
    inner joy. The guests ended …" New: "To feel an inner joy. The
    guests ended …"
24. Second passage, Words, the note on the last word of row 9.1
    (`plates[1].lenses[2].notes[5].note`). Old: "*Finire*: to come to
    one’s end, and so, in particular, to die." New: "To come to one’s
    end, and so, in particular, to die."

The other notes keep the dictionary's entry word, because there it
differs from the words in bold (an inflected form, a phrase, a word
with its article). List: `critic/spec-5-stutter.json`.

### Two more, made while writing this report

25. Second passage, Rhyme, caption, first sentence. Old: "Like her
    first recitative, this one closes on a rhymed couplet, and the
    rhyme joins …" New: "Like her first recitative, this one closes
    on two lines that rhyme, and the rhyme joins …" A word of the
    trade not said in plain words; CRITIC.md names its fellow, tercet,
    and I had already put plain words for "quatrains" in the same
    caption (change 12). The printed note under the tab still cites
    Baum's chapter "on the couplet", which is the chapter's subject.
26. Second passage, Words, caption. Old: "The song states a duty she
    lays on herself, and it begins always free." New: "The song
    states a duty she lays on herself, and its first words are always
    free." Hard to parse: the two English words are her words and
    nothing marks them, so "begins always free" read at first as a
    statement about the song. 113 words.
27. Second passage, Measure, caption, first sentence. Old: "The
    recitative ends in two lines of eleven syllables." New: "The
    recitative, her sung speech before the song, ends in two lines of
    eleven syllables." The term again. Change 2 glossed it where the
    file first has it, in a numbered remark on the second tab of the
    first passage. A reader who keeps to the tab each passage opens
    on meets the word first here, at the head of the second passage.
    114 words. This one was made after the second and last run of the
    picture tool, so the two pictures of this tab, and the page
    pictures that show it, are six words behind the page (section 9).

Lists: `critic/spec-6-plain.json`, `critic/spec-7-gloss.json`. The
checker was run after each of the last three lists and the piece
built again (section 9).

## 2. Marks: titles, and words named as words

Asterisks only; no word of any sentence changes in this section. The
list is `critic/spec-1-marks.json` (48 lines, 37 places in the
reading; three of its marks went again later, as said below). In
upright text the asterisks set a title or a word named as a word in
italics; in text the page prints in italics (the line under the
title, the notes, the numbered remarks) they set it upright.

**Titles and a term.** The opera's title was in plain roman in three
places and is now marked: `where` (the line under the page's title),
the first entry of the list (Ansen), and the entry from “Cav & Pag,”
where *Manon* beside it is marked too. In the fifth caveat *Antilabe*,
named as a term, is marked as the sources already mark it. In the
pictures taken afterwards the title stands upright in the italic line
under the page's title and in italics in the two entries of the list
(`shots/traviata-page-1280-0.png`, `-3.png`). The caveats are under a
fold that the pictures do not open; the page sets them by the same
routine as the sources (`rich`, in `site/js/piece.js`), where marked
words show in italics (`-5.png`).

**The three Words tabs (the artist's R3): 31 Italian words in 21
notes.** Marked where the note names the word as a word: the
dictionary form at the head of a note, or a form it is compared with.
I first marked 34 words in 24 notes; in three notes the word marked
only repeated the bold head, and it went again with changes 22 to 24.

- First passage, tab Words, 12 words in 7 notes
  (`plates[0].lenses[2].notes` 2, 4, 5, 6, 7, 9, 11): *anima* and
  *palpito*; *altero*; *croce* and *delizia*; *cor*, *core* and
  *cuore*; *strano*; *scolpire* and *accenti*; *a*.
- Second passage, tab Words, 8 words in 6 notes
  (`plates[1].lenses[2].notes` 1, 3, 4, 6, 7, 8): *deggio* and *devo*;
  *voluttà*; *vortice*; *libero*; *dovere*; *trasvolare* and
  *folleggiare*.
- Third passage, tab Words, 11 words in 8 notes
  (`plates[2].lenses[0].notes` 1, 4, 6, 9, 10, 13, 14, 16):
  *rianimare*; *dolore*; *animare*; *trasalire*; *gioia*;
  *soccorrere*; *spegnere* and *accendere*; *dolor*, *mio* and *rio*.

**The two English tabs: 15 English words in 9 numbered remarks.** The
same fault, which the artist did not list: a remark in italics names
a word of the English libretto and the word does not stand out from
what is said of it. In one of them the sentence could be misread for
want of the mark (first passage, remark 5: two nouns "joined by and
are kept").

- First passage, tab English, 8 words in 5 remarks
  (`plates[0].lenses[3].ties` 2, 3, 4, 6, 7): *chain*; *mysterious*;
  *and* and *pain*; *wondrous* and *strange*; *graven* and *seem*.
  Remark 7 also holds the *strano* of change 7.
- Third passage, tab English, 7 words in 4 remarks
  (`plates[2].lenses[2].ties` 0, 1, 2, 4): *strange* and *wondrous*;
  *pains* and *sorrow*; *happiness* and *joy*; *dead*.

**Not marked, on purpose.** An English word that gives a meaning and
is not named as a word of the libretto ("Carved becomes *graven*":
the first is what the Italian means, the second is the English
libretto's word). The words in bold at the head of each note, which
the page prints from the passage. The glosses. And every caption: in
a caption italics and bold make the page light the same word in the
passage (`site/js/kit/plate.js`), so a mark there is a mark on the
passage, which is not mine to set. One caption would read more easily
with such marks, and I say so in section 8.

In the pictures taken afterwards every marked word stands upright in
its italic note at both widths (`shots/traviata-refrain-2-words-*`,
`-cabaletta-2-words-*`, `-end-0-words-*`, `-refrain-3-english-*`,
`-end-2-english-*`). No asterisk shows on the page.

## 3. The list under "More from Auden": one entry taken out

The list had nine entries, one above the eight at which CRITIC.md
says to ask of each whether the page would miss it. I asked it of all
nine.

**Taken out:** the entry from “Notes on Music and Opera,” p. 470, on
the great roles of opera (each a single state of passion and will;
his examples named, with the remark that Violetta is not among them).
Why this one:

- nothing leans on it. No caption reports it, no `grounds` item and no
  `stands` cites its lines of the scan (22124-22128 and 22145-22150).
  The p. 470 that the view and the Rhyme tab cite is the sentence on
  willfulness just before it (lines 22121-22124), which stays;
- its own last sentence says that he does not name this opera's
  heroine there, so for this page it is a remark on opera at large;
- what it says of a sung role as a state of will is already in the
  view at the head of the page, and again in the entry from “Cav &
  Pag” (music expresses will);
- it ended on a list of names that a reader of this page has no use
  for.

It was true and the examiner had checked it. It is moved whole to the
end of `notes.md`, under the heading "Taken out of the list of what
Auden said", with its source and its `checked` line (it had no
`quote`). The edit is `critic/edits-4-list.json`; `critic/take-out.py`
made it and `critic/taken-out.md` is the text added to notes.md
(`critic/notes-before.md` is notes.md as I found it).

`sources` needed no change: p. 470 is still used, and the entry for
*The Dyer's Hand* gives the essay as pp. 468–74. The entry that
followed the one removed does not point back at it, so none needed a
name put in. The entry that now stands second begins "Auden wrote
that" (change 19), so the list still names him before "he" takes
over.

**Kept, and why.** Ansen (1947): the one thing here that he said of
the work itself, and the nearest in date to the course. Pp. 469–70:
the fuller form of what the Words caption of the first passage
reports. P. 468 (no opera can be tragic): bears on a
heroine who dies singing. “Cav & Pag”: a `stands` cites it, and it is
where he names this opera. P. 473 (the verses as a letter to the
composer): the Rhyme caption reports it. P. 471 (the mistake found
out abruptly): two captions report it. P. 474 (the great age of
opera): the Words caption of the second passage reports it. Kallman:
where he calls Violetta a courtesan, on which the Words caption of
the first passage leans, and the sentence on arias that the English
tab of that passage reports.

Eight is still a long list for one page. If the lead wants seven, the
next to go would be p. 468: no caption or `stands` leans on it. I did
not take it, because it is the entry that says most about the last
scene and CRITIC.md asks the question only above eight.

## 4. What recurs across the piece, with counts

Counted over the printed sentences with `critic/count.mjs`, which
reads `critic/before.json` and the reading and changes nothing.

**The frame that reports Auden.** Each of the eleven captions has a
sentence that reports him, thirteen such sentences in all. That is
the method (a caption goes from what is there to his reason). The tic
was the sameness of the frame.

| frame | before | after |
|---|---|---|
| "Auden held that" | 4 | 1 |
| "He held that" | 1 | 1 |
| "Auden wrote that" | 2 | 1 |
| "Auden and Kallman wrote that" | 3 | 3 |
| "They also wrote that" | 1 | 1 |
| "Auden and Kallman say" | 1 | 1 |
| "For Auden" | 1 | 1 |
| ", Auden held," | 0 | 2 |
| ", Auden wrote," | 0 | 1 |
| "In Auden’s view" | 0 | 1 |

Before, twelve of the thirteen opened with the name and the verb;
now eight do. "Auden and Kallman wrote that" I left three times: the
three stand on three tabs of two passages, both names have to be
given, and the plain order is the least mannered way to give them.

**Where that sentence stands.** Eight of the eleven captions end on
it, before and after. I did not move any: the order is the one the
BRIEF asks for. The three that end otherwise are the Refrain tab, the
Measure tab of the second passage and the Words tab of the third
(each is in section 5).

**", he wrote," in the list.** Seven of nine entries; now four of
eight (changes 19 and 21, and the entry taken out).

**One sentence of his, reported more than once.**

- What is sung is so: the display quotation, the view under it, the
  Refrain caption of the first passage and the Words caption of the
  third. The two captions stand at the two ends of the page and each
  needs it; I varied the second frame only (change 15).
- A mistake must be found out abruptly: the Scene caption of the
  second passage, the Shared caption of the third, and the list (with
  its display quotation). See section 5, b.
- Five of the eight entries of the list say again, more fully, what a
  caption has reported (pp. 469–70, 471, 473, 474 and Kallman). That
  is what the list is for, and each adds something the caption has
  not; but only Ansen, p. 468 and the entry from “Cav & Pag” are
  wholly new to a reader who has read the tabs.

**Terms.** *Recitative*: nine times in the sentences and twice as a
part's name in the Scene drawing; it had no gloss and now has one
where each of the two passages first uses it (changes 2 and 27).
*Cabaletta*: in two captions of the second passage, glossed in both,
which is right since the tabs may be read in any order. *Quatrains*: once in a caption and once in a printed
note, replaced (change 12). *Verismo*: once, glossed (change 20).
*Couplet*: once in a caption, now said in plain words (change 25).
*Refrain* and *antilabe* are said in plain words under their names.

**Turns of phrase.** "In her mouth": twice, now gone (changes 3 and
16). "As sung" opens four sentences (a caption, two notes, a caveat)
and "the dictionary" stands six times on the Words tabs (two captions,
four notes): both are the method saying where a thing was read, and I
left them. "The first printing": eight times, always the same name
for the same thing.

**Looked for and not found** in the 154 printed strings: no dash in a
sentence, no "not X but Y", no "we" or "our", no question in the
page's own voice (one gloss gives a question of the libretto's), no
stock word of the checker's list and no British spelling. Captions
run from 104 to 114 words by my count; `about` is 90.

## 5. Sentences I doubted and did not change

a. **Refrain tab, caption:** "Her claim is made good: where she says
   what love is, the words are his." It has the form of a verdict. I
   left it because it is the step the caption exists to make, and it
   says what the lines do, which the marks show: her song closes on
   his four lines. It joins what she says (his words are carved in
   her heart) to Auden's sentence just before it, and the first
   caveat tells the reader that fitting his view to these passages is
   the page's doing. If the lead finds it too much of a ruling, the
   plainer wording is "Her song bears her out: …".

b. **The mistake found out abruptly, twice.** Auden says it of the
   discovery of a mistake (the ground says so, and so does the open
   question on it). The Scene caption of the second passage sets it
   beside her turn from the slow song to the fast one; the Shared
   caption of the third sets it, as a last sentence standing alone,
   after the line in which her cry of joy and the others' cry that
   she dies are the two halves. Neither caption says whose mistake is
   meant, and in the third passage the reader has to supply it: that
   she believed she was returning to life. To say so is to add a
   claim, which is not mine to do. I only moved the frame (change 17).

c. **The third passage sets two of his sentences side by side and
   does not say how they fit.** The Words tab: self-deception cannot
   be sung, what is sung is so. The Shared tab: the finding out of a
   mistake. A reader may ask whether her revival is "so" or is the
   mistake. By the view's own `checked` line he treats the mistake
   and self-deception as two matters on the same page of the essay
   (p. 471), so the page need not be contradicting him; but it leaves
   the reader to work that out. I did not read the scan for this. One
   sentence would settle it, and it would be a new claim: the lead's
   or the poet's.

d. **Words tab of the third passage, caption:** "and his example is
   from this scene." His example is the music at Germont's entry, at
   the head of the libretto's last scene; the lines shown are that
   scene's last. "This scene" is true of the scene and may be taken
   for the lines shown. The view at the head of the page says which
   moment he means, so I left it.

e. **Measure tab of the second passage, last sentence:** "Piave
   supplies the same two stresses eight times." It says again what
   the second sentence said (the third and seventh syllables, in all
   eight lines), and it is a short sentence at the close. I left it
   because it is a fact, and it is the one place where the caption
   ties what a cabaletta is for (one figure returning evenly, the
   singer's skill) back to the marks on the passage. If the lead
   wants the caption to end on Auden and Kallman, it can go without
   loss of fact.

f. **Words tab of the third passage, last sentence:** "Then the
   Doctor says *È spenta*, she is extinguished: a word used of
   flames." The caption stops on the observation and gives no reason
   for it; the reason (in Act 1 she said no man had yet kindled her
   soul) is in the note on that word and not in the caption. Moving
   it up would change what the caption claims.

g. **Refrain tab, last sentence:** "An early study says his tune
   returns too." Short, and added after the argument is done; but it
   is the one thing the page can say of the music, and the printed
   note under it names the study. Left.

h. **Words tab of the first passage:** "Torment and pleasure are
   joined by nothing more than *e*, and." An observation with a
   slight flourish ("nothing more than"). It is true of the line and
   it is what the next tab takes up (the English keeps the two nouns
   joined), so it stays.

i. **Words tab of the second passage:** "The song states a duty she
   lays on herself". This is the page's reading of the verb, one step
   past what the dictionary entry says (an obligation, and often a
   will set on something). The lines bear it out, since nobody else
   in them lays the duty on her, so I left it.

j. **`sources`, first entry:** "; the facsimile pages were read too."
   It tells of the making of the page, not of the source. It is also
   the only place where the reader learns that the text was checked
   against the printed pages, which is why it is still there.

k. **Three of my own changes the lead may want to undo:** the
   sentence cut from the Rhyme caption (change 9); the list entry
   reworded on a run of four words, below the tool's five (change
   19); and the entry word taken from three notes (changes 22 to 24),
   if the lead would sooner have every dictionary note begin alike.
   The old sentences are in section 1 and in `critic/before.json`.

## 6. Phrases close to Auden's own wording: the sweep

Commands, as the lead gave them: `node build/tools/prose.mjs traviata`,
then `python3 build/tools/runs-sweep.py` over the four scans (`dh.txt`,
`fa.txt`, `ef.txt`, `pearce.txt`) with `--only traviata --show`. For
each run of the page's words that the sweep listed I asked where it
stands in the scan with `critic/where-in-scan.py`, which prints line
numbers and never the scan's text. I opened the scan itself once, a
window of eleven lines (dh.txt 22098 to 22108), to see the phrase the
lead named in its place, and copied nothing.

**On arrival: 14 runs of five or more words.** Two were his.

- The one the lead named: the caption of the Words tab of the first
  passage, three nouns of his in his order and the verb after them,
  five words standing together at dh.txt line 22101, inside the lines
  the caption paraphrases (22100-22119). Said again in the page's own
  words: change 4. `build/tools/runs.py` now finds no run of four or
  more words between that caption and the scan.
- "a character in a novel", in the list entry on the great roles. The
  run stands at dh.txt line 21637, which is not the passage that
  entry paraphrased, so it was an accident of common words; it went
  with the entry (section 3).

Not listed by the sweep, and changed all the same: the second entry
of the list began with the same three nouns, a run of four (change
19). It now shares one run of four small words with the scan ("for
the person who", in another part of the book).

**The twelve that stand,** and why. None is in a passage of his that
the page paraphrases, except the last, which is a name.

| where on the page | the run | scan | why it stands |
|---|---|---|---|
| `about` | "the end of the opera" | dh, lines 5743 and 6448 | small words; other essays |
| `about` | "for the rest of the" | fa, ef | small words |
| the view | "as a character in a" | dh, line 21604 | small words; another essay |
| first passage, Words, `notes[4]` | "of a person or a" | fa | small words, from a dictionary's sense |
| first passage, Words, `notes[7]` | "that it is often said" | fa | small words |
| second passage, Rhyme, printed note | "the last two lines of" | dh, line 16161 | small words |
| second passage, Words, `notes[1]` | "in the first line of the" | dh, line 11833 | small words |
| second passage, Scene, caption | "in the first half of the" | dh, lines 16124 and 17253 | a date |
| the same | "the first half of the nineteenth century" | fa | a date; the caption takes it from the dictionary's entry for *cabaletta* |
| the same | "the first half of the" | ef | a date |
| the list, Kallman | "the queen of the night" | dh, line 23107 | the name of a role, in the lines the entry paraphrases |

(The second row is two runs, one in each scan: twelve in all.)

**Not printed, not mine, and worth the lead's knowing.** The sweep
reads what the page prints. The working ground of that same Words tab
(`plates[0].lenses[2].grounds[4].claim`) still opens with his three
nouns in his order, a run of four. Grounds are not printed and are
not mine to change.

**The last run** is in section 9.

## 7. Wording for what is not mine to change: the Scene tab

The `facts` of the tab Scene of the second passage, the drawing's
script (`site/js/pieces/traviata.js`) and what a printed note stands
on are the lead's. I changed none of them. Read in the pictures
(`shots/traviata-cabaletta-3-scene-1280.png`, `-390.png`, the same at
13:47 and at 14:16) and, for the fold opened, in the artist's trial
picture
(`shots/trial/traviata-cabaletta-3-try-syllables-stanzas-open-1280.png`).

**The new numbers agree with every sentence the page prints.**
`syllables`: the first recitative begins with two sevens (Measure tab
of the first passage, remark 4); the second ends with two elevens
(Measure caption of the second passage), and the line that holds her
question, the last but one, is an eleven (remark 1 there); the slow
song is in sevens and the fast in eights throughout. `stanzas`: two
of twelve, each closing on four lines (the part's own sentence and
its `measure`). The counts 8, 24, 8, 8 are the caption's. The key's
"10 lines" are the two elevens and the eight of the song, which is
what the other tabs show. I found nothing to correct.

**Wording offered, in the order I would want it.**

1. *The printed note under the tab (`stands`) does not yet say what
   the two new things stand on.* The drawing now shows the measure of
   every line and sets four lines in, and the note still speaks only
   of a count of lines. Offered, 69 words by the checker's count (its
   limit is 70):

   > A count of the lines of [the scene](#/read/traviata/act-1:267) in the Italian libretto and of the syllables of each; its stage direction between the two songs; pages 10 and 11 of its first printing for the four lines set in. Treccani’s *Vocabolario* under *cabaletta*. Basevi’s study of Verdi’s operas (1859), p. 234, for the two parts of the aria. Auden, “Notes on Music and Opera,” *The Dyer’s Hand*, p. 471.

   It names two grounds more than the note has now, so it is the
   lead's or the examiner's to set. Pages 10 and 11 are where the
   poet's notes read the four lines set deeper in (notes.md, "The
   first printing, read in page images").

2. *Nothing on the tab says what a stroke set in means.* Four strokes
   at the foot of each stanza of the slow song begin further right.
   They are no longer than the rest, but their right ends reach
   further, and the key says a stroke is as long as its measure; a
   reader may take them for longer lines. The part's own sentence
   could say it. In `facts[1]`, "what she says", for "Each stanza
   closes on Alfredo’s four lines.":

   > Each stanza closes on Alfredo’s four lines, set in here as the first printing sets them.

3. *The key's second entry (script):* "the 10 lines of this passage".
   On this tab the drawing stands where the passage stood, so "this
   passage" points at nothing in view. Offered: "the 10 lines shown
   under the other tabs".

4. *The fold "The numbers" (script).* Under the head SYLLABLES the two
   recitatives give a number for every line and the two songs give a
   bare 7 and a bare 8, beside 24 and 8 under LINES. Offered for the
   songs: "7 in every line" and "8 in every line"; or the head
   "syllables in each line".

5. *`facts[0]`, "what she says", first sentence:* "His words are
   carved in her heart." The four parts each open in her voice and
   the other three cannot be mistaken for the page's (they begin
   Perhaps, Follies and Always free). This one can: nothing on the
   drawing says that the sentences under a part are what she says.
   Offered: "She says his words are carved in her heart." The least
   pressing of the five.

The key's first entry ("a line of verse, as long as its measure: 7, 8
or 11 syllables by the Italian count") reads well as it is, and so do
the four names of parts and the four `measure` lines.

## 8. What on the page got in the way of reading

Not listed: what the lead already knows to be the build's or the
kit's (names and directions inside the Italian rows of the third
passage; the English libretto's song headings set as stage
directions), and the artist's R1, which I met too: on the English tab
of the first passage the caption says the English keeps the four
lines that come back, and those four stand a row above the Italian
lines they answer.

1. **Shared tab, third passage: the fifth line has no mark.** The
   caption says "In the fifth she sings that she returns to life."
   The key names the first, sixth, seventh and eighth lines, each in
   its color. The fifth is plain, and the reader finds it by
   counting: it is the last of the four unmarked rows, the one just
   above the sixth line's. A mark is not mine to set.

2. **Two captions tell how the first printing sets the lines, and the
   passage under the label "as first printed" does not show it.** On
   the Refrain tab: "The first printing sets them deeper in than her
   own lines"; the four lines stand at her margin, after a little
   space. On the Rhyme tab of the second passage: "printed as two
   groups of four lines"; the eight stand as one block, so "the
   halves" that the rhymes tie cannot be seen, though the arcs do
   show the second line tied to the fifth and the fourth to the
   eighth. The label is true of the words, and a reader takes it of
   the setting too. Where the rows break is the hosted cut's; the
   label is the lead's.

3. **English tab, third passage, caption:** "Piave’s one word for her
   pain and the others’ grief becomes pains, sorrow and grief." Three
   English words are named as words and nothing sets them off, where
   the two named earlier in the same caption are in bold. Bold there
   would also light the words on the passage (all three are in the
   rows shown), so it is a mark and I left it.

4. **The record.** "A record of it" is the fast song as a soprano
   sang it in 1919. The page says in two places (the Rhyme caption of
   the second passage, the second caveat) that as sung six of its
   eight lines have other words. A reader who plays it with the
   passage "Always free" open will not hear the lines shown, and the
   note under the record does not send them to the place that says
   why. The record's words are kept outside the reading, and nobody
   on this piece has listened to it (the open question says so), so I
   offer no sentence for it.

5. **The opera's title is written two ways.** With a small t in the
   line over each passage and in the first entry of the sources (the
   libretto's title, in the Italian manner), with a capital T
   everywhere else. It may be meant; a reader may take it for a slip.
   Names are not mine to change.

6. **The line over the first two passages names the cut, not the
   passage.** The same words stand over both: Alfredo's lines in the
   duet, the guests' chorus, and Violetta's scene alone. The first
   passage shows nothing of the chorus and the second nothing of
   Alfredo. It comes from the hosted text, not from the reading.

7. **Song, air, aria.** The captions say her "slow song" and "fast
   song"; the printed notes under three tabs link to "Alfredo’s air",
   "Alfred’s air" and "the fast air"; "aria" is kept for the form.
   The three are used consistently, each in its place, and I changed
   none; a reader who opens the notes may wonder whether an air is
   something else.

**No tab pays nothing.** Each of the eleven tells something of how
its passage is made and what that does. The thinnest is the English
tab of the third passage, whose finding is that the English reader
does not meet the words of Act 1 again; it is a real one.

**Nothing too small or too crowded** at 1280 or at 390 beyond what is
listed. The longest stretch on a phone is the Words tab of the first
passage (the passage with its glosses, the caption, eight notes, then
the English), and it reads in the right order.

## 9. Runs, pictures, refusals, and the last lines printed

All times UTC, 3 October 2026. Every edit of the reading went through
`python3 build/tools/edit-exact.py`, which writes nothing unless each
old string is found exactly once.

| when | what | result |
|---|---|---|
| 13:26 | `node build/pieces.mjs traviata`; prose; checker | 4,745 words; no problems, no warnings, fit to print |
| 13:43 to 13:46 | marks; wording; `about`; the list (`critic/edits-1` to `-4`); notes.md appended | checker once warned that `about` had 92 words; mended to 90; then clean |
| 13:46 | build | written 13:46:38 |
| 13:47 | picture tool, first run | "nothing reported; now look at the pictures" |
| 14:09 | three notes (`edits-5`); checker; build | clean; written 14:09:48 |
| 14:12 | two captions (`edits-6`); checker; build | clean; written 14:12:59 |
| 14:16 | picture tool, second and last run | "nothing reported; now look at the pictures" |
| 14:19 | one caption (`edits-7`); checker; build | clean; written 14:19:22 |
| 14:20 | prose; sweep; checker | below |

**The pictures in `shots/`** are those of the second run (14:16): six
of the page at 1280, nine at 390, and each of the eleven tabs at both
widths. Two older ones of the artist's remain beside them (the Scene
tab at 360 and 320, 13:15), and `shots/lead/` and `shots/trial/` are
as I found them. After the second run I looked again at the tabs my
later changes touch and at the rest of the first and second passages
at 1280: the three notes read as one word and its sense, the two
captions stand as changed, every marked word is upright in its note,
no asterisk shows, and the Scene drawing is as the lead left it.

**One thing the pictures do not show.** Change 27 (six words added to
the Measure caption of the second passage, now 114 words) was made at
14:19, after the last run I was allowed. `traviata-cabaletta-0-measure-1280.png`
and `-390.png`, and the page pictures that show that tab, have the
caption without the gloss. The checker passed and the piece was built
after it; the caption is six words under the limit.

**Refused by the permission system: nothing.** I installed nothing,
sent nothing anywhere, started no agent, and wrote only in
`reading.json`, `critic.md`, the end of `notes.md`, `critic/` and
`shots/` (through the picture tool), besides what the tools that
CRITIC.md and the lead name write for themselves
(`site/data/pieces/traviata.json` and `index.json`,
`review/remake/prose/traviata.md`).

**The last run of the two commands** (14:20, after every change).
`node build/tools/prose.mjs traviata` printed "traviata 4696" and
"4696 words in all". The sweep printed the twelve runs of the table
in section 6, none new and none gone since the run before:

```
traviata  [about]  5 words, 71 to 75 of 91  (dh.txt)  : the end of the opera
traviata  [about]  5 words, 55 to 59 of 91  (fa.txt)  : for the rest of the
traviata  [about]  5 words, 55 to 59 of 91  (ef.txt)  : for the rest of the
traviata  [view.says]  5 words, 45 to 49 of 71  (dh.txt)  : as a character in a
traviata  [plates[0].lenses[2].notes[4].note]  5 words, 8 to 12 of 18  (fa.txt)  : of a person or a
traviata  [plates[0].lenses[2].notes[7].note]  5 words, 14 to 18 of 28  (fa.txt)  : that it is often said
traviata  [plates[1].lenses[1].stands]  5 words, 7 to 11 of 63  (dh.txt)  : the last two lines of
traviata  [plates[1].lenses[2].notes[1].note]  6 words, 17 to 22 of 40  (dh.txt)  : in the first line of the
traviata  [plates[1].lenses[3].caption]  6 words, 35 to 40 of 114  (dh.txt)  : in the first half of the
traviata  [plates[1].lenses[3].caption]  7 words, 36 to 42 of 114  (fa.txt)  : the first half of the nineteenth century
traviata  [plates[1].lenses[3].caption]  5 words, 36 to 40 of 114  (ef.txt)  : the first half of the
traviata  [auden[7].says]  5 words, 17 to 21 of 54  (dh.txt)  : the queen of the night
1 pieces; 12 runs of 5 or more words shared with a scan
```

**The checker's last three lines** (`node build/tools/check-reading.mjs
traviata --print`, 14:20, and the same again at 14:23):

```
no problems
no warnings
the printed notes are fit to print
```

The reading as handed in: md5 `b5fbda22a36653cb66607b1a320a5ddb`,
last written 14:19:21. `node remake/works/traviata/critic/diff.mjs`
lists the 52 places where it differs from `critic/before.json`, and
the one entry gone; nothing else differs.
