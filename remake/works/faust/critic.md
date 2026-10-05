# faust: the critic's record

Piece `faust`. Critic at work on 2026-10-03 from 12:30 to 13:22 UTC,
after the examiner (exam.md) and the artist (art.md). Words of the work are
pointed at by passage, tab, row and word number, or named singly as the
page itself names them; no line is written out. "Old" and "new" below
are the site's own sentences.

**In short.** 77 exact edits to `reading.json` (four reword an earlier
one of mine), in 64 strings. The words of 35 sentences changed (three
of them were cut); the rest are
marks that change no word: titles in 21 strings, words named as words
in 24 remarks and notes and one caption. The faults that came up most: a pronoun or
pointing word without its noun (8), a term or name unexplained (8), a
knotted or misread phrase (7), the frame "Auden wrote that" (3 varied,
out of 5), a thing said twice (3 cut). All seven entries of the list
stay, so nothing is written in `notes.md`. Nothing was refused. The
checker ends: no problems, no warnings, the printed notes are fit to
print.

Left to others:

- for the lead, section 4: eleven doubts, chief among them the one
  sentence of Auden's that the page gives six times, and the one
  German verb that has three English words between the Antithesis tab
  and the list;
- for the finisher, section 5 (five proposals on the words of `facts`
  in the two drawings, and how the artist's four read) and section 8
  (the words I added, each with its ground);
- for whoever mends the kit, section 6: where a caption leans on
  knowing who speaks.

## 1. What was read

- `remake/BRIEF.md` and `remake/CRITIC.md`, whole; "The printed notes"
  in `remake/EXAMINER.md`; `remake/FINISHER.md`, to know what the
  finisher can do with what is left here.
- `reading.json`, whole; `exam.md`, whole; `art.md`, whole; `notes.md`;
  the script `site/js/pieces/faust.js`, every string of it.
- The page as built at 12:31 UTC (`node build/pieces.mjs faust`) and
  `review/remake/prose/faust.md` (4,505 words then), from top to bottom
  once before anything was marked, then sentence by sentence; and once
  more from top to bottom at 12:56 UTC, after the first 69 edits. That
  second reading brought four more changes (2, 22, 28, 35) and a
  second wording of four of my own (3, 13, 20, 27).
- The pictures. The artist's last set (12:14 to 12:16 UTC) was taken
  with the kit as it still stood when I began (its code last changed
  11:05:49, the reading 08:17:13, the script 12:13:40), so I read that
  set first and did not take it again: the whole page at 1280 px and at
  390 px, every tab at 1280 px, the two drawings at 390 px. The picture
  tool was then run by me twice, after the changes (section 9), and I
  read the head of the page, all twelve tabs and the list at 1280 px,
  and heaven Beat and name Names at 390 px.
- The checker's proof (`check-reading.mjs faust --print`), for the row
  and word numbers.
- To judge whether a paraphrase says more than Auden did: the scan of
  *The Dyer's Hand*, pp. 115 to 118; of *Forewords and Afterwords*,
  p. 131; of *The Enchafèd Flood*, pp. 106 to 107; of Pearce's essay,
  pp. 149 to 150; and research notes C, section 14 and appendices H6
  and H17b.
- I tested no fact again beyond that, with four exceptions, each said
  where it is used: the first stanza of the hymn in the text hosted
  here (change 7), Calvin Thomas's edition of 1892 on the first
  Faust-book (change 27) and on the Prelude (change 35), and the
  research notes' transcript of the article of 1941 (change 28).

Remarks are numbered below as the page prints them, which is by their
place in the passage and not by their order in `reading.json`; where
the two differ the place in the file is given too.

## 2. Every change

All in `remake/works/faust/reading.json`, by exact edits (the tool
`build/tools/edit-exact.py`, seven small batches). First the 35
sentences whose words changed, numbered in the order of the page; then
the marks, which change no word. No mark of a scan, no place of a tie,
no `grounds`, `facts`, quotation, number, page reference, `heading`,
`label`, `turn` or `join` was touched, and nothing in the script.

### The head of the page

**1. `about`, sentence 4.**
Old: He has kissed her and has since gone off into the forest.
New: Faust has kissed her and has since gone off into the forest.
Fault: "He" could be Faust or the devil, who is the last man named
before it.

**2. `view.says`, sentence 2.**
Old: He likened it to a variety show: the scenes interest one by one
and have no real continuity.
New: He likened it to a variety show: the scenes are of interest one
by one and have no real continuity.
Fault: a verb without its object; the eye takes "interest one" as
"interest a person" and has to go back. The new sentence shares no run
of four words with any of the four scans (`runs.py`).

### Passage 1, the archangels and Mephistopheles (`heaven`)

**3. Beat, the line printed after "The measure" (`meterName`).**
Old: four beats to a line for the archangels; five beats, then six,
for Mephistopheles; every line rises to its beats
New: four beats to a line for the archangels; five beats, then six,
for Mephistopheles; each beat comes after an off-beat
Fault: a figure of the trade ("rises") where the key two lines lower
shows the thing in plain marks. "Off-beat" is that key's own word. My
first version said "after a lighter syllable"; I took it back, because
in row 1.3 (the third remark) the voice starts on a stress, so there
the syllable before the first beat is not the lighter one. What holds
for every line is the metre, and the key draws it.

**4. Beat caption, sentence 5.**
Old: ... fine phrases like the archangels’, as an edition of 1892
glosses them.
New: ... fine phrases like the archangels’, as an edition of 1892
explains them.
Fault: a working word.

**5. Beat caption, sentence 6 (the last).**
Old: Auden wrote that Goethe commanded every style of poetry, the
witty and the sublime among them.
New: The witty and the sublime are two of the styles Auden says Goethe
commanded.
Fault: the frame "Auden wrote that", a tic of the piece (section 3).
The new order puts first the two words that tie the sentence to this
passage. Nothing is added: the two styles are in the quotation at the
head.

**6. Beat, remark 4 (`points[3]`).**
Old: Six beats, with a pause after the third. The line breaks in the
middle.
New: Six beats, with a pause after the third.
Fault: said twice; the second sentence is cut.

**7. Parody caption, sentence 3.**
Old: Raphael’s stanza ended on the same line, so the hymn says it
twice.
New: The archangel Raphael’s stanza, the hymn’s first, ended on the
same line, so the hymn says it twice.
Fault: a name unexplained. Raphael is nowhere else on the page, and
nothing said where his stanza stands. Ground: the first speech of the
Prologue as hosted here (faust/prologue, blocks 2 and 3) is his, and
its last line is the line that row 0.3 repeats; the note of 1892 on
line 282 names both lines (exam.md).

**8. Parody caption, sentence 5.**
Old: He cannot make <b>hohe Worte</b>, high words, and man is
<b>wunderlich</b>, odd, as on the first day.
New: He says he cannot make <b>hohe Worte</b>, high words, and that
man is <b>wunderlich</b>, odd, as on the first day.
Fault: what the devil claims stood as the page's own statement.

**9. English caption, sentence 4.**
Old: The returns come out looser.
New: The words Goethe repeats come out looser.
Fault: a working word; "the returns" had not been given to the reader.

**10. English caption, the last sentence.**
Old: Taylor’s first two lines stand in the opposite order to Goethe’s.
New: cut.
Fault: the same sentence, word for word, is the first remark, printed
directly under the caption. The caption still opens on its reason
(Auden on translation) and ends on what is there; the lens's `why` and
`stands` never spoke of the order of the two lines, so both still fit.

**11. English, remark 7 (`ties[1]`).**
Old: The same four German words; in English hour becomes day.
New: The same four German words as at the hymn’s close; in English
*hour* becomes *day*.
Fault: "the same" as what was not said. It leaned on remark 4, which
is printed three lines higher. The two English words are now marked as
words.

**12. English, remark 6 (`ties[5]`).**
Old: Odd, strange: Taylor’s whimsical.
New: Odd, strange: Taylor has *whimsical*.
Fault: read as "Taylor is whimsical". Three of the remarks beside it
say "Taylor has".

### Passage 2, Mephistopheles names himself (`name`)

**13. Beat, the line printed after "The measure" (`meterName`).**
Old: rhymed lines of six, five and four beats, rising to each beat
New: rhymed lines of six, five and four beats, each beat after an
off-beat
Fault: as change 3.

**14. Beat caption, sentence 2.**
Old: His question and Mephistopheles’ first words make a second such
line, and the line of the riddle is a third.
New: His question and Mephistopheles’ first words make a second such
line, and the next line, the riddle, is a third.
Fault: "the line of the riddle" did not say which line it is, and no
riddle had yet been spoken of. The place now comes first; the third
remark calls the same row "the riddle".

**15. Antithesis caption, sentence 4.**
Old: It parts what the power wants from what it brings about; Faust
calls it a riddle.
New: It sets what the power wants against what it brings about; Faust
calls it a riddle.
Fault: a mannered plain word. An antithesis does not part its halves;
the lens's own plain words, printed under the name, say "set ...
against".

**16. Antithesis caption, sentence 5.**
Old: ... the companion he gives man, who must as devil
<i>schaffen</i>.
New: ... the companion he gives man, who must, as devil,
<i>schaffen</i>.
Fault: a stumble: "must as devil" ran together in front of a German
word. Two commas, no word changed.

**17. Words caption, sentence 1.**
Old: Faust has asked his name and got no answer.
New: Faust has asked Mephistopheles his name and got no answer.
Fault: "his" had no noun; the caption nowhere named Mephistopheles.

**18. Words caption, the last sentence.**
Old: He later wrote that a spirit which rejects everything actual must
hate creation; here all that comes to be, <b>entsteht</b>, deserves to
perish.
New: He later wrote that a spirit which rejects everything actual must
hate creation; here Mephistopheles says that all that comes to be,
<b>entsteht</b>, deserves to perish.
Fault: what the devil claims stood unowned after "He later wrote
that", so it read as Auden's opinion or as the page's.

**19. Words, the note on the word glossed "a part" (`notes[3]`).**
Old: A piece of a whole. English deal is the same word.
New: English *deal* is the same word.
Fault: padding. The gloss set under the word already says "a part".
The first sentence is cut and the English word marked as a word.

**20. Names caption, sentence 1.**
Old: ... and that no name belongs to an actor: his name is Legion.
New: ... and that no name belongs to an actor: his name is Legion, the
name of the many devils in the Gospel.
Fault: a term unexplained. The page already had the explanation: this
lens's `stands` says it in the same words, with Mark 5:9 (the lens's
second ground). My first version kept the possessive of `stands` ("the
many devils’ name"); said aloud that cannot be told from a verb, so
the words are turned round.

### Passage 3, Gretchen at the spinning wheel (`wheel`)

**21. Beat caption, sentence 2.**
Old: A line holds one thing: his walk, his figure, his smile, his eyes.
New: A line holds one thing of Faust’s: his walk, his figure, his
smile, his eyes.
Fault: "his" four times, and no noun for it anywhere in the caption.

**22. Anaphora caption, sentence 1.**
Old: Seven things are named in eight lines.
New: Seven things of Faust’s are named in eight lines.
Fault: the same. Faust was not named in this caption before its last
sentence.

**23. Anaphora caption, sentence 4.**
Old: It goes from his walk, figure, smile and eyes to his talk and
then to touch: ...
New: The list goes from his walk, figure, smile and eyes to his talk
and then to touch: ...
Fault: "It" straight after a sentence in which "it" was the figure.

**24. Anaphora caption, the last sentence.**
Old: Auden wrote that Faust, like Peer Gynt, meets many people and
always goes on without them.
New: Auden says of Faust, as of Peer Gynt, that he meets many people
and always goes on without them.
Fault: the tic (section 3). The sentence shares no run of four words
with the scan of *The Enchafèd Flood*.

**25. English caption, sentence 4.**
Old: <b>Size</b>, for <i>Gestalt</i>, a person’s figure, and <b>the
bliss</b>, which is not in the German, appear to be there for the
rhymes with <i>eyes</i> and <i>kiss</i>.
New: <b>Size</b> stands for <i>Gestalt</i>, a person’s figure, and
<b>the bliss</b> is not in the German; both appear to be there for the
rhymes with <i>eyes</i> and <i>kiss</i>.
Fault: a knotted sentence: two subjects, each with an aside hung on
it, before the verb came.

**26. English caption, the last sentence.**
Old: Auden wrote that a reader who knows <i>Faust</i> only in
translation will probably think Goethe too intellectual and short of
passion.
New: A reader who knows <i>Faust</i> only in translation, Auden wrote,
will probably think Goethe too intellectual and short of passion.
Fault: the tic.

**27. Measures caption, sentence 5.**
Old: ... the four-beat rhymed line that ruled German verse in the
sixteenth century, the century of the Faust-book.
New: ... the four-beat rhymed line that ruled German verse in the
sixteenth century, when the first book about Faust was printed.
Fault: a term unexplained ("the Faust-book"). Ground: Calvin Thomas's
edition of 1892, read in the scan (scratch `faust/thomas2.txt`): the
introduction says the tales told of Faust were collected and published
as a book in 1587, and the note before line 243 has "the first
Faust-book of 1587". The caption claims the century only, as before.

### The list under "More from Auden"

**28. `auden[0].says`, the last sentence.**
Old: ... are exceptional for being morally worse than ordinary people,
and are favored because they take what is arbitrary in themselves for
what is necessary.
New: ... are exceptional for being morally worse than ordinary people,
and are favored by God and men because they take what is arbitrary in
themselves for what is necessary.
Fault: a term unexplained: favored by whom was not said, and without
it the half-sentence can hardly be followed. Ground: the research
notes' transcript of the article (C, appendix H17b), where Auden asks
why the two are especially favored "of God and men". Nobody has seen
the article in full (the entry's `checked` says so), so the finisher
should weigh these four words.

**29. `auden[1].says`, sentence 2.**
Old: He blamed these faults on the myth itself and held that Goethe
did not lack talent as a dramatist.
New: He blamed the play’s faults as drama on the myth itself and held
that Goethe did not lack talent as a dramatist.
Fault: "these faults" pointed at nothing. The sentence before it names
no fault, only that every actor would want one of the two parts. In
Auden (p. 115) the defects are the play's as drama, which is what
`view.says` reports in its first sentence.

**30. `auden[1].says`, sentence 3.**
Old: ... and Mephisto shows what is possible with nothing actual in it.
New: ... and Mephisto makes visible what is possible and not actual.
Fault: a knotted phrase; "with nothing actual in it" hung loose on
"what is possible". No run of four words shared with the scan.

**31. `auden[2].says`, the last sentence.**
Old: ... and these shows change his character as little as a play
changes its audience.
New: ... and these shows change his character as little as watching
the play changes its audience.
Fault: the close had been turned into a saying about plays in general.
Auden (p. 117) speaks of this play and of those who watch it.

**32. `auden[5].says`, sentence 1.**
Old: In the long poem he published in 1941, Auden names the Devil by
Mephistopheles’ line, put into English, and a note gives the German
and cites Faust, Part I, Scene 3.
New: In *New Year Letter*, the long poem he published in 1941, Auden
names the Devil by Mephistopheles’ line, put into English, and a note
gives the German and cites *Faust*, Part I, Scene 3.
Fault: the poem went unnamed in the sentence, though the Words caption
and the entry's own source name it. *Faust* is marked as a title.

**33. `auden[5].says`, sentence 2.**
Old: A little later the poem addresses a Mephistopheles who has been
cheated and only thinks he is having his own way.
New: A little later the poem addresses Mephistopheles as one who has
been cheated and only thinks he is having his own way.
Fault: "a Mephistopheles" reads as one of several.

### Sources and caveats

**34. `sources[1]`.**
Old: The English beside it, and the copy to read here: ...
New: The English under it, and the copy to read here: ...
Fault: the page does not bear the word out. On every tab the English
stands under its German line, as the first English caption and both
English `stands` ("line under line") say.

**35. `caveats[2]`, sentence 2.**
Old: He also finds no special effect meant in the Prelude’s six-beat
lines.
New: He finds no special effect meant in the six-beat lines of the
Prelude at the Theatre.
Fault: a name unexplained, and one that misleads. "The Prelude" is
nowhere else on the page; a reader takes it for the Prologue in
Heaven, whose six-beat lines passage 1 shows. The editor's note is on
the scene before the Prologue (read in the scan of the edition: it
lists that scene's twelve six-beat lines and says they are not used
for any particular effect). "Prelude at the Theatre" is what the text
hosted here calls the scene (`site/data/texts/faust/prelude.json`).
"Also" went, to keep the caveat at 50 words.

### The marks (no word changed)

Titles between asterisks, in 21 strings:

- `where`: *Faust*. `view.says`: *Faust*. `view.source`: *The Dyer’s
  Hand*, *Forewords and Afterwords*.
- `stands` of eight tabs. The *Digitales Wörterbuch der deutschen
  Sprache* in seven (heaven Rhyme and Parody; name Antithesis, Words
  and Names; wheel Anaphora and English); *Silva Rhetoricae* in two
  (name Antithesis, wheel Anaphora). In wheel Measures the link to the
  song now reads “The King of Thule”: a short poem, so curly quotation
  marks and no italics.
- `auden[0].says`: *Faust*, *Pilgrim’s Progress*. `auden[4].says`:
  *The Tempest*. `auden[5].says`: with changes 32 and 33.
- `auden[].source`, all seven: *The New Republic*, *Prose*; *The
  Dyer’s Hand* (in three); *The Kafka Problem*, *Poets at Work*,
  *Prose*; *W. H. Auden: The Far Interior*; *New Year Letter*; *The
  Enchafèd Flood*.

Words named as words, and foreign words, in 24 remarks and notes and
one caption:

- heaven Beat, remarks 2 and 3: *Hohe Worte*; *du*.
- heaven English, remarks 2 to 7 (`ties[0]` to `ties[5]`): *sublime
  and splendid*, *bright*, *Creation’s hour*, *lofty speech*,
  *whimsical*, *hour* and *day*. Also *ill intention* in the Parody
  `stands`.
- name Beat, remarks 3 and 4: *will*; *Gemeint*, *verneint*.
- name Words, seven notes (`notes[0]`, `[1]`, `[3]`, `[4]`, `[5]`,
  `[6]`, `[9]`): *Beelzebub*; *Abaddon*, *Apollyon*; *deal*; *Rätsel*,
  *riddle*; *ghost*; *nein*; *Eigentlich*, *eigen*, *Element*.
- name Names caption: `<b>Junker Satan</b>` is now `<i>Junker
  Satan</i>`. Bold in a caption is for words of the passage shown, and
  this name is not in it (line 2504); the caption's three other German
  phrases were italic already.
- wheel Beat, remarks 2 and 3: *Zauberfluß*; *Kuß*.
- wheel English, remarks 1 to 5 (`ties[0]` to `ties[4]`): *His*;
  *Gestalt*, *size*, *eyes*; *his*, *The*, *And*, *Of*, *In*;
  *Zauberfluß*; *Händedruck*, *the bliss*, *kiss*.

In the pictures each marked word stands upright in its italic remark,
note or source line, and italic in the roman paragraphs. Left plain on
purpose: the key labels of the three figure tabs, the glosses, and the
`what` over a drawing, which print as typed (an asterisk would show);
and the headwords of dictionaries in `stands` ("under Alexandriner"),
which the Sources also print plain.

### The count

- 77 exact edits, four of them a second wording of an earlier one of
  mine (changes 3, 13, 20, 27): 73 places, in 64 strings.
- Words changed in 25 strings, 35 sentences: 19 in captions, 4 in
  remarks and notes, the 2 measure lines, 2 at the head, 6 in the
  list, 1 source, 1 caveat. Three of the 35 are cuts (6, 10, 19), and
  one is two commas (16).
- Marks alone in 39 strings, and marks beside a change of words in 7
  more: titles in 21 strings, words named as words in 25.
- After the changes: captions 95 to 117 words (limit 120);
  `view.says` 69 (limit 70); list entries 48 to 104 (limit 110);
  caveats 36 to 50 (limit 50).

## 3. What recurs, with counts

The 35 changes by fault:

- a pronoun or pointing word without its noun: 8 (changes 1, 11, 14,
  17, 21, 22, 23, 29);
- a term or a name unexplained: 8 (3, 7, 13, 20, 27, 28, 32, 35);
- a knotted phrase, a stumble, or words that read as something not
  meant: 7 (2, 12, 15, 16, 25, 30, 33);
- the frame "Auden wrote that": 3 (5, 24, 26);
- said twice: 3, all cut (6, 10, 19);
- what a character claims, left unowned: 2 (8, 18);
- a working word: 2 (4, 9);
- a remark on this play turned into a saying: 1 (31);
- a word the page does not bear out: 1 (34).

The first two kinds, 16 of the 35, have one root. The captions were
written by someone with the whole page in mind, and each tab is read
alone. Four of the twelve captions (name Beat and Words, wheel Beat
and Anaphora), one remark, the paragraph `about` and one list entry
had a "his", "he", "it" or "these" whose noun stood somewhere else;
four names or terms (Raphael, Legion, the Faust-book, the Prelude)
came with nothing to say what they are.

What recurs and stands:

- **Auden in nine of the twelve captions.** He closes six (heaven
  Beat; name Antithesis and Words; wheel Beat, Anaphora and English)
  and opens three (heaven English, name Names, wheel Measures). Only
  heaven Rhyme, heaven Parody and name Beat are without him. Five
  captions had the very words "Auden wrote that"; two have them now
  (heaven English, name Names), and the other frames differ: "Auden
  says" twice, "Auden names" twice, "Auden wrote" once inside its
  sentence, "Auden likened", "Auden quoted", "He later wrote".
- **One sentence of Auden's, six times.** "Italian Journey", p. 131,
  is one sentence in the scan. The page has it as the quotation at the
  head, as sentence 3 of `view.says`, as the close of heaven Beat, the
  opening of heaven English, the close of wheel Beat and the close of
  wheel English. A reader has met it three times by the end of the
  first caption. I varied the frames and cut none: which to drop is
  the lead's (section 4, item 3).
- **The editor of 1892 has no name where he is used.** "An edition of
  1892" in two captions (heaven Beat, heaven Parody) and "An editor of
  1892" in caveat 2; Calvin Thomas is named only in `stands` and in
  the Sources. A reader of the caveat cannot tell that this is the
  editor the captions lean on.
- **A German word, then its English after a comma**: about thirty
  times, in eleven of the twelve captions; five times in heaven Parody
  and in name Antithesis, six in name Words. It is how the page gives
  German to a reader who has none, and it works. Those three captions
  are the hardest to read aloud.
- **Colons**: 14 in the twelve captions, each before an example or a
  gloss. Semicolons: 13. No dash anywhere.
- **"Taylor has"**: once in a caption and in six remarks. The remarks
  are a list of pairings, and the sameness helps the eye match them.
- **Endings.** Six captions end on Auden (above). The other six end on
  a fact of the passage. None ends on a question or a turned phrase.
- The checker's lint finds none of its stock words: "no warnings".

Looked for and not found:

- **Pronouncing.** No caption hands down what a passage means or makes
  anyone feel. The nearest things are the sentences that set Auden
  beside a passage and leave the link unsaid (section 4, items 3 and
  4), and the two claims of the devil's that stood unowned (changes 8
  and 18).
- **Stock phrases, signposts, reflex symmetry.** None. The pairs in
  the captions are pairs in the lines (evil and good, wills and makes,
  hour and day).
- **Inflated words.** None of the page's own. "Rich" in `view.says`
  reports Auden's praise (section 4, item 1).
- **Working words in the printed notes.** None beyond changes 4 and 9;
  the checker lists none.
- **A tab that pays nothing.** None. Each of the twelve tells the
  reader one thing about how its lines are made and what that does
  there. The thinnest is wheel Measures, which is a table of nine
  measures; it pays by its drawing, where the nine lines can be seen
  to differ, and by tying the change of measure to Auden's variety
  show.
- **A caption the picture does not bear out.** None. On each tab I
  found on the passage every word and mark the caption points at; the
  rhyme letters, the pause marks and the coloured parts are all drawn
  as said.

## 4. Doubted and not changed (for the lead)

1. **`view.says`, sentence 1: "rich in poetry and wisdom".** Auden
   (p. 115) has great poetry and wise sayings. "Wisdom" says a little
   more than sayings do. Left, because how close a paraphrase may come
   is the examiner's, and "wise sayings" are Auden's own two words.
   If wanted: "rich in poetry and in wise sayings".
2. **`view.says`, the last sentence** has no "he wrote", and says "an
   age" where Auden (p. 118) writes of his own. Under the label "What
   Auden said" it is read as his. "He held" would take the paragraph
   to 71 words (limit 70). Left.
3. **The two nods to the styles**: the last sentence of heaven Beat
   and of wheel Beat. Each sets words of Auden's list beside a passage
   he does not name; caveat 0 says the matching is the page's. They
   tie the passages to the head, and they are the weakest sentences of
   their captions: a fact, then a nod. If the page is to carry less of
   that one sentence, heaven Beat's is the one to cut, since heaven
   English opens with the same thought one tab on.
4. **wheel Anaphora, the last two sentences.** That Goethe's direction
   has her alone, and that Faust (Auden says) goes on without the
   people he meets, stand side by side with the link left to the
   reader. It is a matching of the page's own. Caveat 0 owns "these
   matchings" in general and names the styles and the costumes, not
   this one. Each sentence is true and the caption does not state the
   link, so I left it; the caveat is at 49 words of 50.
5. **One German verb, three English words.** The Antithesis caption
   and its key give the riddle's last word as "makes"; the English
   printed under that line has "works"; `auden[0].says` has the Lord's
   companion "who must create though he is the Devil"; `auden[5].says`
   has him "work as a devil". The caption's point is that it is one
   verb in the riddle and in the Lord's lines, so a reader who goes on
   to the list is puzzled. A gloss is a fact and not mine. Also
   "though he is the Devil" reads a concession into the line's "as";
   the English hosted here has "create" with a plain "as"
   (faust/prologue, block 37). If the translation Auden quoted says
   "though", it should stand; it was seen only in a snippet.
6. **`auden[0].says`, sentence 1: "three books of Kafka".** One of the
   three is a miscellany not wholly his (H17b). "Of" covers that
   better than "by" would, so I left it.
7. **`auden[4].says`: "and that Faust gives up something like it".**
   "It" is Prospero's magic, and "something like it" is vague until
   the next sentence. Left: this is a student's report, already
   reworded by the examiner to keep clear of Pearce's words.
8. **name Words, three notes** that give only an English cousin of
   the German word (*deal*, *riddle*, *ghost*). They say nothing of
   the passage. They are short, and a reader may like them. Left.
9. **heaven Rhyme, sentence 5** (a rhyme that returns at once makes
   its two lines one unit). The examiner's own doubt stands: Baum
   writes of English couplets of four stresses. As prose it is plain.
10. **heaven Parody** is the longest caption (117 words, nine
    sentences, five glosses and a definition). Its eighth sentence (an
    edition of 1892 notes the parody) repeats what `stands` gives, but
    it is the caption's warrant for the word. Left.
11. **The key label "his, after and"** (wheel Anaphora) reads oddly,
    because a key label prints as typed and "and" cannot be marked as
    a word. "His, second word" would be false of the last line. Left.

## 5. The words of the two drawings and of `facts` (for the finisher)

I changed nothing here: the script is the artist's, and `facts` is not
mine. Row numbers are the places in `facts`, from 0.

### Names (plate `name`, tab 4)

What a reader sees: the `what` as a heading; "WHO SAYS IT" over six
lanes named from `who says it`; the column heads LINE, GERMAN, IN
ENGLISH, which are the facts' key names; three group heads from
`kind`; the script's two key lines ("in the lines of this passage",
"elsewhere in the play"); and, on pointing at a lane, a line the
script builds, such as "He himself: a name, 5 of 10; what he comes as,
3 of 5". The script's own strings are plain and true to the picture
and need no change.

1. **`kind`: "a name", on ten rows (1 to 10).** Four of the ten are
   not names: rows 3, 5, 6 and 9 (the poodle's core, a part of that
   power, the spirit who always says no, a gentleman like other
   gentlemen). The heading over the drawing has the right words
   already. Proposed: `"kind": "what he is called"` on all ten. The
   two group heads are then the two halves of the heading, and the
   pointing line reads "He himself: what he is called, 5 of 10; what
   he comes as, 3 of 5".
2. **Row 0, `in English`: "printed over each of his speeches; nobody
   speaks it".** It stands under the group head "THE NAME OVER HIS
   SPEECHES" and says the first half again. Proposed: "nobody speaks
   it". If the artist's proposal 1 is set the row also prints "255
   speeches under it", and the thing would be said three times; then
   this cut is needed. The label "speeches under it" reads well.
   Which number: 255 is the count in the English hosted here and 253
   in the German (the row's `counted`); the caption's "more than 250"
   holds for both. The cell stands in a column headed German, but a
   reader can only check the number in the text this page opens, so
   255, as the artist says.
3. **Row 11, `who says it`: "Faust and Wagner".** It is a lane's name
   in the drawing. Wagner is nowhere else on the page, and this site
   has three operas by another Wagner. Proposed: "Faust and his
   assistant Wagner". Ground: faust/s01, block 39, where Faust calls
   him his Famulus two blocks before Wagner's first speech.
4. **Row 3: "des Pudels Kern", "the poodle’s core".** As a row of
   things he is called it tells a reader nothing. Proposed for `in
   English`: "the poodle’s core: the scholar inside the poodle".
   Ground: faust/s03, blocks 22 to 25 (the stage direction and Faust's
   words at line 1323, which name the scholar as the core).
5. Small, and no change asked: the head IN ENGLISH stands over two
   cells that are remarks and no English at all (rows 0 and 1) and
   seven that add a remark to the English (4, 7, 8, 10, 13, 14, 15).

### Measures (plate `wheel`, tab 4)

What a reader sees: the `what` as a heading; the column heads SCENE,
LINES, WHO SPEAKS, then BEATS IN A LINE (the script's), then MEASURE
and IN PLAIN WORDS; nine rows; and the script's key: "the measure of
this passage", "one line of the measure, a stroke down for each beat".
The script's strings need no change. The caption names eight of the
nine rows (all but the alexandrine, which passage 2 shows) and agrees
with each.

1. **Row 5, `who speaks`: "Gretchen, singing The King of Thule".** The
   cell is italic throughout, so the title does not show as one. The
   artist proposes `<i>` (proposal 3). By CRITIC.md a short poem takes
   curly quotation marks and no italics: `"Gretchen, singing “The King
   of Thule”"`. The `stands` of this lens has the title so now.
   Quotation marks ask nothing of the kit and are right even in the
   plain table the artist warns of.
2. **Row 3, `in plain words`: "... the verse of Hans Sachs and the
   sixteenth century".** Hans Sachs is a name unexplained and nowhere
   else on the page. Either "the verse of the sixteenth century" (the
   caption says as much) or leave it; a small matter.
3. **Proposals 2 and 4** (`beats` and `break after` as numbers; the
   no-break space in `what`) change no word a reader sees. I have no
   objection to either.

The two `what` lines read well as headings.

## 6. Where a caption leans on knowing who speaks

Said here and not mended, as the lead asked; the kit is to print the
speakers' names.

- **`name`, Words.** "The answer takes none of them. It gives ..." The
  answer is two speeches of Mephistopheles (rows 1.0 to 1.1, and 3.0
  on) with Faust's second question (row 2.0) between them, and the
  caption does not mention that question. A reader who does not know
  that rows 0.0, 0.1 and 2.0 are Faust's cannot tell where the answer
  begins or that it comes in two parts. This is the one caption that
  cannot be followed without the names.
- **`name`, Antithesis.** "Faust calls it a riddle" points at row 2.0
  and does not say so. The caption is about one line, which the marks
  show, so the loss is small.
- **`name`, Beat** can be followed: its five remarks say who speaks at
  each turn.
- **`heaven`, Rhyme.** "The hymn rhymes by turns ... Mephistopheles
  keeps that order while he excuses himself." Where the hymn ends and
  he begins is told only by the four rhyme words the caption names,
  which are the ends of rows 0.0 to 0.3. It can be worked out; a name
  on the plate would settle it at a glance.
- **`heaven`, Beat, Parody and English** can be followed. Beat counts
  the lines ("the first four", "six lines of five beats, then two of
  six"), and the other two light their words in the passage. Of the
  four lines left out, the only word is in Beat's second remark ("four
  lines into his speech") and in the line numbers over the plate.
- **`wheel`** has one speaker, named in its heading and in Beat's
  first remark.

**The translator.** He is named in full once, in the heaven English
caption ("Bayard Taylor’s English of 1870"). The wheel English caption
begins "Taylor keeps", so a reader who opens passage 3 first meets a
surname alone. `about` says "The English printed here" and names no
one. No caption of passage 2 speaks of the English. If the plates come
to print their labels ("Bayard Taylor, 1870"), nothing in the captions
needs to change.

## 7. What on the page got in the way of reading

1. **One sentence of Auden's before anything else, three times.** The
   quotation at the head, the third sentence of the paragraph under
   it, and the close of the first caption all give "Italian Journey",
   p. 131; the English tab of the same passage opens with it a fourth
   time. (Left: section 4, item 3.)
2. **A caption that ended on its own first remark** (heaven English).
   The same eleven words stood twice, one under the other. Mended
   (change 10).
3. **Remarks are printed in the order of the passage**, not in the
   order they were written, so a remark that leans on another may
   stand far from it. One did (change 11).
4. **On passage 2 nothing says who speaks** on the Antithesis and
   Words tabs, and passage 2 is a dialogue in four turns (section 6).
5. **One verb, three English words** between the Antithesis tab and
   the list (section 4, item 5).
6. **In the Names drawing** the head "A NAME" stands over four rows
   that are not names, and the first row says one thing twice
   (section 5).
7. **In the Measures drawing** the title of Gretchen's song stands in
   an italic cell and does not show as a title (section 5).
8. **Three captions are heavy with glosses** (heaven Parody, name
   Antithesis, name Words): five or six German words, each followed
   by its English, in a hundred-odd words. Each gloss is wanted. On
   the screen the bold type carries them; read aloud they do not go
   easily.

Nothing else stopped me. The three passages follow from the head
without a gap, the terms of the trade (alexandrine, anaphora,
antithesis, parody, ottava rima, Knittelvers) are each said in plain
words where they first come, and no caption ends on a pose.

## 8. Words I added (for the finisher to test)

Changes of wording that bring in a word the sentence did not have,
with the place each rests on:

- change 1: "Faust" for "He" (the sentence before it).
- changes 3 and 13: "each beat (comes) after an off-beat" for "rises
  to its beats" (the scansion marks; "off-beat" is the key's word).
- change 7: "The archangel", "the hymn’s first" (faust/prologue,
  blocks 2 and 3).
- change 8: "He says", "and that" (rows 1.0 and 1.7 of passage 1).
- change 11: "as at the hymn’s close" (rows 0.3 and 1.7).
- change 14: "the next line" (row 1.1 of passage 2).
- changes 17 and 18: "Mephistopheles", twice (the scene before the
  passage, which this lens's `stands` links; rows 3.1 and 3.2).
- change 20: "the name of the many devils in the Gospel" (the lens's
  `stands`: Mark 5:9).
- changes 21 and 22: "of Faust’s" (`about`).
- change 27: "when the first book about Faust was printed" (Thomas's
  introduction and his note before line 243).
- change 28: "by God and men" (research notes C, appendix H17b; the
  article not seen in full).
- change 29: "the play’s ... as drama" (*The Dyer's Hand*, p. 115).
- change 31: "watching the" (*The Dyer's Hand*, p. 117).
- change 32: *New Year Letter* named (the entry's own source).
- change 35: "at the Theatre" (the hosted text's name for the scene;
  Thomas's note on its metre).

## 9. The list, what was run, what was refused

**The list under "More from Auden": seven entries, and all seven
stay.** Each is about this work, and none repeats another: the article
of 1941, the year of the course, which the Antithesis caption leans on
(0); the play as drama (1); the riddle shown here, which two captions
lean on (2); the ending (3); what he said in class in December 1941
(4); the poem of 1941 that uses the line shown (5); Faust and Peer
Gynt, which the Anaphora caption leans on (6). The examiner kept all
seven too. Nothing was taken out, so I wrote nothing in `notes.md`.

**Run.**

- `node build/pieces.mjs faust`: at 12:31 UTC, after the changes, and
  last at 13:16.
- `node build/tools/prose.mjs faust`: three times (4,505 words before,
  4,537 after).
- `node build/tools/check-reading.mjs faust --print`: after the first
  four batches, after each of the three later ones, and again at 13:17
  and 13:21. Every run ended with the same three lines (below).
- `python3 build/tools/runs.py`, on every sentence of the page that
  reports Auden, against the four scans. No sentence I reworded shares
  a run of five words with a scan. Two runs of five were found in
  sentences I did not touch, both of small common words and both by
  chance: heaven Rhyme caption, words 48 to 52 (the caption reports
  nothing of Auden), and `auden[4].says`, words 44 to 48, against *The
  Dyer's Hand* (the entry reports Pearce, and shares no such run with
  Pearce).
- The picture tool, twice, as allowed: at 13:01 UTC, after the first
  six batches, and at 13:16, after the two measure lines were changed
  again (changes 3 and 13). Both times it said "1 thing to look at": a
  stroke outside the plate on heaven Rhyme at 390 px, which the
  artist has reported (his fault 3). The pictures in `shots/` named
  `faust-*` at 1280 and 390 px now show the page as handed in.

**Refused by the permission system:** nothing.

**The checker's last three lines** (13:21 UTC, `reading.json` md5
3159a1ee7ebd69108a80e937753985fe):

    no problems
    no warnings
    the printed notes are fit to print
