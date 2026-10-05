# Peer Gynt: the examiner's record

Piece `peer-gynt`. Examiner started 2026-10-03 (see `examiner.txt`).
This file is added to as the examination goes on. Words of the work are
pointed at by row and word number, never typed out; single words are
named only where the reasoning needs them.

**Verdict: mended.** The marks, the scansion, the terms and the word
histories were sound. What was wrong was in the reasons: five things
the poet had made up or overstated are cut (section 6), each caption
now gets its reason from the text, a source or Auden, and two places
where Auden writes on these very passages are brought in. The printed
notes are written. The checker ends with no problems, no warnings, and
the printed notes fit to print.

## 1. The proof (first run)

`node build/tools/check-reading.mjs peer-gynt --print` on arrival:
no problems, no warnings, 17 PRINTED NOTES left to do (no `stands` on
any of the twelve lenses, no `caveats`, two working words in `sources`,
the word "plate" in the Layers caption).

Every mark in the proof was read against the words it lands on (figure
parts, word notes, beat points, compare ties, on all three passages and
on both pairs). Each sits on the word it is meant for. Nothing had to be
moved.

## 2. The ear

I marked every scanned row myself before looking at the poet's marks.

- Measure. Archer's Introduction (Project Gutenberg no. 66239) says the
  translation keeps the metres of the original with the rhymes left out,
  line for line; that thirty of the thirty-eight scenes are in an
  irregular measure of four accents with feet of two to four syllables;
  and that the translators kept the law of four accents without matching
  each line foot for foot. The three passages are all in scenes of that
  measure (Act 2 scene 6, Act 5 scenes 5, 8 and 10 are none of the eight
  scenes he lists as being in other measures). "Four beats to the line"
  is therefore the real measure, and it is a stress measure, so no foot
  names are leaned on. Sound.
- First passage (a2s6 42.2 to 49.1, and the pair from a5s8). My marks
  give four stresses in each full line and agree with the poet's in
  every place a caption leans on. "One or two light syllables between
  the stresses" holds for every row of this passage.
- Second passage (a5s5). My marks agree, or differ only on a light
  syllable no caption leans on. Four stresses to a line throughout the
  rows shown.
- Third passage (a5s10 222.0 to 226.0). Rows 222.0 to 224.2 carry four
  stresses. Row 226.0 falls naturally into three; a fourth can only be
  had by leaning on a small word. Archer's own footnote 146 says the
  metre of this one line was given up. The caption says so and does not
  lean on a fourth stress. Sound.

No scan mark was changed.

**Words joined by a dash** (the lead's note, and the new paragraph in
EXAMINER.md). The proof lists three: a2s6 42.7 word 6, a5s5 7.5 word 4,
a5s5 11.1 word 3. Every mark that lands on one was looked at.
- 42.7 word 6: the Figure part "after the dash" and the Word gloss mean
  the word after the dash. Both now point at 6.2, and the proof shows
  them on that word alone.
- 42.7 word 6 is also the last word of two spans: the Figure part that
  holds the whole saying (words 3 to 6), with the Return tie on the same
  words, and the second Beat point (words 5 to 6, which speaks of both
  the word before and the added word). Each span means to run to the end
  of the row, so no part is given.
- 11.1 word 3: the Figure part means the onion word before the dash.
  Now 3.1.
- 7.5 word 4: no mark lands on it. The beat scans keep one group for
  each joined word.

## 3. The terms

Opened *Silva Rhetoricae* (rhetoric.byu.edu) for each name.

- Antithesis: contrasting words or ideas set side by side, often in
  parallel structure. The two sayings are that. Sound.
- Extended metaphor / conceit / allegory: metaphor = one thing spoken of
  as another; sustained through a passage. The onion is that. Sound.
- Anaphora: the same words at the beginning of successive clauses,
  sentences or lines (Merriam-Webster adds phrases and verses). Rows
  222.0 to 224.2 begin alike. Sound.
- Aposiopesis: breaking off suddenly in the middle of speaking. The
  Button-Moulder's sentence at p:244.1 ends on a dash with its clause
  unfinished (Oslo text the same). Sound.

## 4. The words

Each entry was opened this session.

- Online Etymology Dictionary: enough, sunder, escutcheon, kaiser, ego,
  swathe, kernel, sigil. All glosses agree with the entries, with one
  correction: sigil is from Late Latin *sigillum*, itself a diminutive
  of *signum* (mark, sign). The note is made exact.
- Oxford English Dictionary, public pages: escutcheon (earliest 1480),
  enough (Old English), swathing n. (earliest 1375), kernel n.1 (Old
  English), ego n. (earliest 1824; the Etymology Dictionary gives "by
  1707" for the philosophical use). All these words were current in
  1892, when the translation was made.
- Bokmålsordboka (ord.uib.no): nok, selv, jeg (as a noun), lag, svøp,
  kjerne, keiser, stempel, kjærlighet. The dictionary enters the trolls'
  phrase as a set phrase of today's Norwegian meaning to care about no
  one else. It does not say where the phrase comes from, and the reading
  must not say so either. The modern entry for kjærlighet has no
  separate biblical sense; that sense rests on Archer's footnote 146.
- Henrik Ibsens skrifter (University of Oslo), the first-edition text of
  1867, for every claim about Ibsen's Norwegian: the two commands and
  the one word that divides them; the rhyme words; the title in Acts 1,
  4 and 5; the two words for wrapping and layer; the noun made from the
  pronoun I; the kernel; the four line ends of Peer's question and
  Solveig's answer; the dash after the Button-Moulder's last word.
- Archer's footnotes 76, 135 and 146 in Project Gutenberg no. 66239.
- 1 Corinthians 13:13 in the King James Bible.

## 5. Auden

Scans read: *The Dyer's Hand* (running head at the top of its page),
pp. 110, 194, 436, 437, 438, 439, 441; *The Enchafèd Flood* p. 107.

- `view.quote` (22 words) is exact at p. 436 after correcting the scan's
  misreadings. `auden[2].quote` (13 words) is exact at p. 441. Two
  quotations in the piece, the most allowed.
- p. 439: the two mottos as the difference between men and trolls; the
  troll motto applied to the poet. Paraphrase does not go beyond him.
- pp. 110 and 194: the eye operation told again in two other essays.
  Page 110 gives the human motto in the Everyman wording. Sound.
- p. 437: the boast to his mother; p. 438: the roles he plays abroad and
  the remark, given by Auden as something he has been told, that
  Norwegian has two words where English has "myself". Sound.
- "Criticism in a Mass Society": read in an open scan of *The Intent of
  the Critic*, ed. Donald A. Stauffer (Princeton, 1941). The trolls'
  motto for a closed society is on p. 130, the human motto on p. 131
  (numbers at the foot of the page). The source line is made exact.
- "The Wandering Jew" (The New Republic, 10 February 1941): seen only
  as passages found by searching two scanned copies (the magazine and
  *Prose*, vol. II). The passages bear out what the reading says: the
  answer of Solveig is no more final than the ones before it, and Peer
  must still meet the Button-Moulder. Entered as a caveat.
- "K.'s Quest" (*The Kafka Problem*, 1946): seen the same way. The
  passages bear out the paraphrase. The page of the sentence is not
  pinned. Entered as a caveat and in `open`.

## 6. The reason and its ground

Each caption and each `why` was taken a sentence at a time. For every
sentence the scene around the passage was read again in the text printed
here (tool output), and every source named was opened.

### First passage: the troll king's two sayings (a2s6 42.2 to 49.1; pair a5s8)

**Figure (antithesis).** True as far as it went, but it stopped at the
observation: two sayings built alike, and what Auden says. The reason
was missing. Mended: the caption now says that in Ibsen the two
commands differ by one added word (Oslo edition), and that the Old Man
himself picks that word out in his next speech and calls it the
dividing one (rows 49.0 to 49.1, which are in the passage). The
sentence about the Archers' English is kept short: two words also
change places there. Auden's sentence (*The Dyer's Hand*, p. 439) was
read again: he reports the two mottos as the king's account of the
difference between trolls and men. The paraphrase does not go beyond
him. Grounds brought into line; row 40.0 (Peer's own answer, that he
sees no difference) added to the text ground.

**Beat.** Two faults. (1) The last sentence said that the line end
"parts" the adjective meaning dividing from its noun. That is an
enactment claim slipped in as an observation, and it does not hold for
Ibsen: in the Oslo text the adjective left at the line end is the other
one (strong). The Archers turned the two adjectives round. Cut from the
caption. The fact that the noun begins the next line, as in Ibsen,
stays in the fourth point note, with the true reason: Ibsen's line ends
there on a rhyme word and the Archers follow him line for line.
(2) The caption gave no reason for where the last beat falls. Added, on
a source: Baum, chapter III (Metre), says that in rhymed verse the end
of the line is emphasized and that rhyme greatly emphasizes the pause
there; in Ibsen both sayings end on rhyme words (Oslo edition). So the
added word is given the emphasized place. Archer's Introduction was
read again for "line for line" and the four accents. New ground: Baum,
chapter III.

**Word.** Two faults. (1) "It can be heard as that cry or as the
motto's word said back" was the poet's own double hearing of Peer's
one-word reply, and no ground says which he means. Cut. In its place,
what the text says: a few lines later (a5s8 91.0) Peer says the word
again and sets two names beside it. The fact that the word alone is
also a common cry (Online Etymology Dictionary: as an interjection from
about 1600) is kept in the note on the pair's last row, without saying
which Peer means; the gloss there no longer calls the reply a cry.
(2) "Away from Norway Peer is close to nobody" was looser than Auden,
who says that outside Norway Peer has no serious relations with others
(p. 439). Brought closer. Added, from a source opened this session:
*Bokmålsordboka* enters the trolls' phrase, under *nok* and under
*selv*, as a set expression meaning not to care about anyone else. The
dictionary does not say the phrase comes from the play, and the page
does not say so either.

**Return (compare).** All four ties were checked against both scenes
and against the Oslo text (the dash in Act 2 and none in Act 5; two of
the Act 2 rhymes back in Act 5; footnote 135 on the literal sense of
the motto line). Sound. The caption listed what returns but gave no
reason for the return. Mended with the text: Peer asks for a witness
(57.1 to 57.8), is given the saying of Act 2, and alone at the next
cross-road says that the word has passed judgment on him (a5s9 2.1).
Two sentences were shortened to make room. The pair's label now says
who speaks.

### Second passage: the onion (a5s5 5.1 to 13.0, with gaps)

The whole scene was read (blocks 0 to 26), and with it Act 4 scenes 1,
9 and 13, Act 5 scenes 1, 2 and 4, and Act 1 scene 1 at block 144.

**Figure (extended metaphor).** Sound in its marks and its term. Two
small things mended. "Peer says he is an onion": he says it to himself,
as *you* (row 5.1); now "tells himself". The Act 4 parallel was true
but its last clause (what he calls that way of life, row 6.14) did not
bear on coats. Replaced by what the same speech says two lines after
the turban is thrown away (a4s9 4.2): that the part was only a matter
of clothes. The two lines do begin with the same three words (a4s9 4.0,
a5s5 7.0; in the Oslo text they begin alike too). Auden p. 438 read
again: nearly everything Peer does is treated as a role. Sound.

**Layers (shape).** The table was checked coat by coat against the
speech (a5s5 7.0 to 7.17) and against the scene named for each.
- Coats 1 to 4, 6, 7, 8: the man Peer names is in the scene given, or
  is only told where the table says. Sound. The fur hunter is named
  nowhere else in the text (searched).
- Coat 5 (the one like a crown): Peer names no man. The poet matched it
  to the straw crown of the madhouse (a4s13 blocks 221 to 224) and said
  "appears". Kept as a marked inference: it stands on what Peer says of
  the coat and on its place in the order, and the passage itself begins
  from the title he is hailed by there.
- Coat 9 (sick, streaked with black): Peer names no man here either. He
  says what the black stands for (row 7.17, which holds a slur and is
  not shown). The table gave "trader in slaves, idols and missionaries"
  as plain fact. That is an inference from his words and from Act 4
  scene 1 (rows 64.0 to 64.2, 70.28 to 70.29). The table now says "it
  appears", and what Peer calls the coat is given more fully.
- "Then several at once": the caption and the table said that by the
  order these "appear to be his years in Norway", Acts 1 to 3. Nothing
  in the text says what these coats are; Peer names none. This was the
  poet's own reading and it is cut, from the caption, the `why`, the
  grounds and the table (the two values of that row are changed; the
  keys and the shape of the row are kept, as the artist's drawing reads
  them). In its place, a fact that can be counted: Peer gives a man's
  name to seven coats, and none of the seven is a part of Acts 1 to 3.
- The `why` said that two of the parts Auden names "are coats here".
  Only one plainly is (the Prophet). Cut.
- The word "plate" is gone from the caption.
- "The staged coats come off in the order opposite to the scenes" (now
  worded "last scene first"): for the coats Peer names and that are
  staged the scenes run Act 5 scene 2, Act 5 scene 1, Act 4 scenes 11
  to 12, 6 to 8, 1. True. With the crown taken as Act 4 scene 13 it is
  still true.

The artist has since taken out the `read` link that the row "then
several at once" carried to Act 1 scene 1, and the drawing followed the
changed values without a change to its script (art.md).

**Word.** "The passage begins by taking the title back" needed its
ground. Just before the passage Peer makes up his own epitaph with the
title in it, questions the word and laughs (a5s5 3.15 to 3.18, block
4); added. Added too, from the text: the scene ends with his cry that
here was his empire, the same word with a suffix (row 25.3), and (in
the note) the crowning in the madhouse. "A seed, and since the 1550s
the core of anything" is shortened in the caption; the date stays in
the note. All four glosses were read against their entries. Auden p.
437 read again. Sound.

**Beat.** The caption's reason was thin: that two half lines are one
line. Two things mended. (1) "Could carry both comic and sad speech"
was near Archer but not what he says; he takes the measure to be
designed for variety and suppleness in the dialogue and finds it
capable of pathetic as well as humorous expression. Reworded from the
Introduction. (2) A reason added that stands on a source: each of the
three coats shown takes two lines; in the Oslo text each of those pairs
is a rhymed couplet (checked by the last word of every line of the
speech); and Baum, chapter IV, on the short couplet, says the quick
return of the rhyme makes the couplet felt as a unit. The claim is kept
to the three coats shown: later in the speech one coat has a single
line and one has three. The sentence listing where the beats of the
first line fall was dropped to make room; the marks show it.

### Third passage: Peer's riddle and Solveig's answer (a5s10 222.0 to 226.0; pair 241.0 to 247.1)

Read with it: a5s10 blocks 196 to 247, a5s9 blocks 0 to 36 and 56 to
64, a5s7 blocks 88 to 123.

**Figure (anaphora).** Sound. Two small things mended. (1) Solveig's
third phrase begins with *and*, so "begins three phrases running with
the same two" is now "answers in three phrases built on the same two".
(2) The paraphrase of row 229.1 changed its grammar ("the man who is
there is her own child"). The line says that she is herself mother to
the man who is there. Now said so, and her reply added (231.0: she says
she is). Auden's two statements were found again: the review of 1941
(passage seen by search, see section 5) and *The Dyer's Hand*, p. 441.

**Beat.** Sound; nothing changed but the printed notes. Ten syllables
and three stresses in row 226.0 are plain; the caption says a fourth
beat would need a small word. Footnote 146 says the translators gave up
the metre of this line. The Oslo text has the four line ends rhyming
first with last.

**Word.** Sound. The note on *sigil* is made exact (see section 4). The
link from the Button-Moulder's answer (a5s9 33.0 to 33.3) to Peer's
question is in the text: the first form of his riddle (a5s10 219.0 to
219.1) asks where he has been with his destiny's mark on his brow, as
he first sprang from God's thought. Auden quotes the Button-Moulder's
lines at *The Dyer's Hand* p. 439 in the Archers' wording (checked word
for word against the text printed here). Faith, hope, charity in that
order: 1 Corinthians 13:13. A ground was added for the note on the word
*myself* (Auden p. 438, given by him as hearsay; the note only reports
what he says of the English word).

**Ending (aposiopesis).** Two things mended. (1) "Solveig does not
answer" is replaced by what the direction says: she sings louder, in
the full daylight (block 246). (2) Added from the text: the third time
the Button-Moulder lets Peer go on (a5s10 174.0) his sentence also
breaks off. The three reprieves were read: a5s7 122.1, a5s9 61.0,
a5s10 174.0. The lullaby lines do return in the opposite order with one
word added (241.0 to 241.1 against 247.0 to 247.1). These are the last
six lines of the play.

### What Auden said: places the poet did not have

Looking for the page of one sentence in the scan of *The Enchafèd
Flood*, I found that the book treats this play in four places, and the
research notes list only one (p. 107). In this scan the page number
stands at the foot of its page.

- pp. 85 to 86: Auden quotes the very exchange of the first passage
  (the king's question, Peer's answer, the two sayings), in the Everyman
  wording, calls it a catechism, and says what being enough to oneself
  means: no conscious ego over against the self, no power to refuse
  oneself or to tell fantasy from reality, or to lie. He goes on: the
  prospect draws every man, and every man makes his reservations as
  Peer does. This is his own gloss of the word the first passage turns
  on, so it now leads the Auden sentence of the Word caption there
  (paraphrased; nothing quoted), with a ground. His later use of the
  word for the poet (*The Dyer's Hand*, p. 439) follows in one clause.
- p. 107: Faust and Peer Gynt meet many people and leave them behind.
- pp. 116 to 117: he sets the Button-Moulder's answer about being
  oneself beside Father Mapple's two sayings in *Moby-Dick* and says
  they are the same thing.
- p. 149 (found on the last pass, scan lines 6126 to 6137, between the
  foot numbers 148 and 149): the artist is one for whom the
  Button-Moulder waits at the next cross-roads, to be asked whether he
  has become himself. Added to the same entry in one sentence. It bears
  on the last six lines of the play and on the view (Peer as the poet).

A new entry under "what Auden said" reports the four, in paraphrase,
with the pages. To make room in the Word caption the dictionary fact
about the Norwegian set phrase moved to the note on the word, which is
printed beside the caption.

Also added to the last Auden entry, from *The Dyer's Hand*, p. 440: he
takes the mother and child of the play as a parable of a love that time
and conduct do not change. It bears on the lullaby of the third
passage. The page was fixed by the running heads: the sentence stands
after the head of p. 440 and before the head of p. 441.

The entry on the two mottos now names the book in which "Criticism in
a Mass Society" was read (pp. 130 to 131) and says "the grown member of
an open" society, which is what p. 131 says (the motto is the adult's).

Quotations of Auden in the piece: two, as before (22 and 13 words),
both exact.

## 7. The prose

Every printed string was read twice, sentence by sentence, against the
house style, and each fact in it opened again in its source on the
second reading (the scans of *The Dyer's Hand* pp. 110 and 437 to 441
and *The Enchafèd Flood* pp. 85 to 86, 107, 116 to 117; William
Archer's Introduction and notes 76, 135 and 146; the Oslo text for
every rhyme named; Baum, chapters 3 and 4; the scenes cited). The
checker's style test gives no warnings. Changed on the second reading:

- First passage, Figure: the list after "two sayings" read as if the
  sayings were a place, a frame, a name and a command. Now "each with".
- First passage, Word, the note on Peer's reply: "In Ibsen the reply",
  since the reply is Peer's, not Ibsen's.
- First passage, Return, second tie: that Peer inscribed the motto is
  what the Old Man says (a5s8 71.1), and the note now says so. Cut to
  39 words.
- Second passage, Beat, the reason: "is felt as one unit" told the
  reader what is felt. Now the rhyme "makes one unit" (Baum's point).
- Second passage, Layers: the first sentence said every coat stands
  with the scene where Peer was that man, but coats 3 and 4 are never
  staged and coat 9 is only told (the artist's notes pointed this out,
  and they are right). It now says where the play shows or tells each
  part, and that all nine are listed. In the row "then several at
  once" the part is left empty, since the row said the same thing
  twice.
- Third passage, Ending: the review of 1941 was searched again in the
  scanned issue of 10 February 1941. Next to the two clauses already
  used it says that stagings which have Peer die at the end get the
  play wrong. That is Auden on these six lines, and it now closes the
  caption, in paraphrase. "In full daylight" went to make room; the
  ground keeps it.
- Sources: the dictionary does not say its set phrase comes from the
  play. The entry now says the phrase matches the trolls' saying.
- Seven captions ran to 111 to 115 words. All twelve are now 102 to
  110, with no fact removed.

## 8. The rules

- No line of the play is typed anywhere. Captions name single words
  and phrases of at most six words from the Archers' text (1907, out of
  copyright).
- Auden is paraphrased. Two quotations, 22 and 13 words, both checked
  letter by letter against the scan (the first against the research
  notes as well, since the scan misprints two words).
- Ibsen's Norwegian is described and single words named. No line of it
  is printed.
- The passages are 10, 14 and 5 rows, with 5 and 6 rows beside the
  first and third.

## 9. The printed notes

- `stands` on all twelve lenses, 30 to 60 words, in a reader's words,
  with links into the play where a scene is cited.
- `sources`: 15 entries, each a book, a page or a public reference.
- `caveats`: 5, each under 50 words.
- `view.source` and each `auden[].source` name the essay, the book, the
  year and the pages.
- Last run of `node build/tools/check-reading.mjs peer-gynt --print`:
  no problems, no warnings, the printed notes are fit to print. The
  artist's `counts.mjs` still reads the table of coats without a
  difference.

## What stays doubtful

- Auden's review of 1941 and his essay of 1946 were seen only as the
  passages that searches of scanned copies return. The view of the
  piece leans on the review. The page numbers in *Prose*, vol. II are
  the research notes'; the page of the 1946 sentences is not pinned.
- Two coats are matched by inference and say "it appears": the crown
  and the black-streaked one.
- Applying Baum's remark on the English short couplet to Ibsen's
  rhymed four-beat couplets is this reading's step. The remark is about
  what quick rhyme does, and the caption claims no more.
- The research notes should be brought up to date on two points (the
  wording of the mottos in the essay of 1941; the two further places
  in *The Enchafèd Flood*). Both are in the reading's `open` list.
- In the Ending tab all the marks fall on the six small lines beside
  the passage (the artist's point). Left as the poet built it.
