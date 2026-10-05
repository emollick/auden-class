# Examination of dante-paradiso ("The last canto")

Examiner's record. Started 2026-10-03, after the lead created examiner.txt.
Words of the works are pointed at by row and word number, or named singly.
Nothing in this file is printed on the page.

**Result: MENDED.** All the changes listed in section 10 are applied. The
last run of `node build/tools/check-reading.mjs dante-paradiso --print`
ends:

    no problems
    no warnings
    the printed notes are fit to print

## 1. The proof

First run: no problems, no warnings, 19 PRINTED NOTES to write (no
`stands` on any of the ten lenses, no `caveats`, working words in
`sources` and in one `auden[].source`). During the examination the
checker gained a test for the number of kinds of mark in one lens, and
the Sentence tab of the third passage then drew a warning (six kinds).
Mended; see section 10, item 9.

Every mark was read against the proof, passage by passage:

- prayer / Figure: the six parts sit on the six words of the three pairs
  (rows 0.0 and 0.1). Right.
- prayer / Rhyme: nine line ends, aba bcb cdc; the thread joins the
  first four letters of the last word of rows 1.1 and 1.2. Right.
- prayer / English: eight ties; each joins the Italian word or phrase to
  the English that renders it in Wicksteed's prose (rows p:0.0, p:1.0,
  p:2.0). Right.
- book / Figure: three "book" parts (row 28.1 w0, row 28.1 w3-5, row
  28.2 w4-5) and three "meant" parts. Right.
- book / Word: ten notes, each on its word. Right.
- book / Rhyme: aba bcb cdc over lines 82 to 90; two threads (the four
  letters shared by the last words of rows 28.1 and 29.2; the article
  before each). Right.
- end / Beat, Sentence, Rhyme: every scanned row, span and line end on
  its words. Right.

## 2. The ear (rows 46.0 to 48.0, lines 139 to 145)

Scanned by me by the rules of the Italian eleven-syllable line (eleven
metrical syllables; the tenth always accented; a main accent on the
fourth or the sixth; a final vowel runs into a following initial vowel
unless the two are held apart; two vowels inside a word may count as one)
before I looked at the poet's marks. Syllable numbers are metrical
positions.

| Line (row)  | Stresses I hear                    | Remarks |
|-------------|------------------------------------|---------|
| 139 (46.0)  | 3 (or 2), 6, 8, 10                 | sixth-syllable type |
| 140 (46.1)  | 2 or 3, 6, 10                      | sixth-syllable type |
| 141 (46.2)  | 4, 8, 10                           | w0 and w1 are counted apart; w5 counts one syllable |
| 142 (47.0)  | 2, 6, 7 (if w3 is stressed), 9, 10 | w2 counts three syllables, its last two vowels as one; the ninth is the last syllable of w4 and the tenth the first of w5 |
| 143 (47.1)  | 2, 4, 8, 10                        | two runs of vowel into vowel; w7 is a bare consonant and no syllable |
| 144 (47.2)  | 1 or 2, 4, 8, 10                   | |
| 145 (48.0)  | 2, 4, 6, 8, 10                     | thirteen written syllables, two runs of vowel into vowel, eleven counted |

The poet's voice marks agree with mine. Where we could differ (the first
stress of 140; whether w3 of row 47.0 carries a stress; the first
syllable of 144) both hearings are defensible, and the caption leans on
none of them. It leans on the ninth and tenth syllables of line 142 and
on the five stresses of line 145, which are not in doubt: w4 of row 47.0
is a verb form accented on its last syllable, written with the accent,
and w5 is a two-syllable noun accented on its first.

Line 141 can be counted a second way. The text printed here has no
diaeresis on w5, so w0 and w1 must be held apart to make eleven. Dante
holds the same two words apart at Inferno 13.32, the place the poet's
`open` gives: I counted that line on the Italian printed here (row 10.1
of inf-13, w4 and w5), and it has eleven only with the two apart. An
edition that marked a diaeresis on w5 of our line would run w0 into w1
and give stresses on 3, 6, 8 and 10. Either way the line has eleven and
the caption does not lean on it. It is in `caveats` and in `open`.

No word in the three passages is joined to the next by a dash, so the
rule about marking one part of such a word (added to the examiner's
brief while I worked) does not come up here.

Faults found here:

- The meter was written with `x` for the positions with no fixed accent.
  The page then printed the key for stress verse ("the meter: beat,
  off-beat", "a stress off the beat"), which is wrong for a line
  measured by count; I saw it so in the lead's screenshot of the tab.
  Mended: `.` for a counted syllable, `/` where the accent must fall,
  as the Inferno piece writes it. The key now reads "the count: one mark
  a syllable, a long mark where the accent must fall" and "a stress
  somewhere else".
- A point named "the mark ~". The page never shows that mark; it draws a
  small arc that ties the two syllables. Mended.
- "Stresses that meet slow a line" stood on a handbook of English verse
  only. See section 6, end / Beat.

Sources read for the rules: Treccani, Vocabolario, endecasillabo,
sinalefe, dialefe, sineresi; Enciclopedia dell'Italiano (2010),
endecasillabo (Claudio Ciociola); Enciclopedia Dantesca, endecasillabo
(Ignazio Baldelli); Germano, Il solfeggio dei versi, pp. 24 and 27 (in
the PDF the page number stands in the head of its page); Zuliani, "Sulla
cesura dell'endecasillabo", p. 173 (head numbers).

## 3. The terms

- paradox (prayer / Figure). Silva Rhetoricae: a statement that is
  self-contradictory on the surface and yet holds a truth. The three
  pairs of rows 0.0 and 0.1 fit. The Italian commentaries call them
  antitheses; Hollander's note to 33.1 speaks of paradoxical
  expressions. I also read oxymoron, antithesis and polyptoton there:
  oxymoron (a compressed paradox) would fit the first pair alone;
  antithesis names the opposition but not the truth of both terms.
  Paradox stands. The plain-words gloss is right.
- metaphor (book / Figure). Silva Rhetoricae: a comparison made by
  referring to one thing as another. The three book words are said of
  the things of the universe. Stands.
- periodic sentence (end / Sentence). Silva Rhetoricae under period:
  the completion of the sense is suspended until the end. In the last
  statement the verb comes first and its subject is kept for the last
  line. Stands. The caption says which part is held back.
- terza rima. Treccani under terzina; Britannica under terza rima: aba
  bcb and so on, closed by one line that rhymes with the middle line of
  the last group. Stands. Treccani says the form was first used by
  Dante; the caption's "first to use for a long poem" claims less.

## 4. The words

Every entry was opened (public pages). What each says:

- Treccani, Vocabolario: terzina (the chain and its closing line; first
  used by Dante); fattura (from Latin factura, from facere; sense 3: the
  thing made, creature, set against the maker, citing these very lines);
  fattore (maker, from Latin factor); fare (farsi: to become); germinare
  (to sprout; cites the line and glosses the flower); internare (2a
  cites line 85); legare (2a: of books); squadernare (from quaderno; 3:
  to unsew a book into its quires, with a gloss of lines 85 to 87);
  quaderno (2a: four sheets folded and sewn, eight leaves); semplice
  (etymology; 4a cites lines 88 to 90 for "no more than"); velle (the
  Latin infinitive used as a noun, citing lines 143 to 145); volume;
  muovere; endecasillabo; sinalefe; dialefe; sineresi; conflato.
- Enciclopedia Dantesca: internarsi (gives the "threefold" reading and
  its rejection); squadernarsi; volume (the heavens as turning, at
  Paradiso 23.112 and 28.14; a book, Inferno 1.84); velle (twice in the
  Paradiso, both times in rhyme with the word for stars); fattura (the
  two words of lines 5 and 6 are a play on one root, an annominatio);
  possa; fantasia; endecasillabo.
- Enciclopedia dell'Italiano: endecasillabo (2010) and rima (2011), both
  by Claudio Ciociola. The second was added by me: its section on what
  rhyme does says that the return of the rhyme at the line end
  underlines the close of the line, and that the likeness of sound sets
  up a relation of sense between the rhyme words.
- Lewis and Short: volumen (a roll, from volvere); conflo (I to blow
  together, kindle; II to melt, fuse metals).
- The senses are those of Dante's time: the Treccani entries cite the
  lines themselves, and the Latin words are classical.

Faults: one gloss in a caption was the poet's own and wrong (section 6,
prayer / Rhyme). One number in a word note was loose ("twenty lines
earlier" for 21 or 22): now "some twenty".

## 5. Auden

Each thing was found at the place given.

- view: "George Macdonald", Forewords and Afterwords, p. 269 (the scan,
  lines 12831 to 12840; in this scan the number follows the text of its
  page). Introduction to The Protestant Mystics, p. 68 (lines 3238 to
  3244; the kind of vision is defined at lines 2984 to 2988). The
  quotation is exact, 24 words, with one word in lower case that the
  scan prints in capitals for an italic. The paraphrase keeps to him:
  supreme master of the dream; images that never run dry; a logical and
  mathematical structure that dictates even the number of verses; one
  step, not a ladder; that love transfigured in the last vision, not
  annihilated. His word is "verses"; the reading says "lines". A caveat
  now gives his word.
- auden[0], "K.'s Quest": the heading of the kind, its example, what
  the journey is for, the dreamer on waking, the sentence quoted (24
  words, exact) and the sentence about responsibility were each found in
  search extracts of the scanned 1946 volume (the scan is restricted;
  the page was not seen whole). A page marker 48 stands just before the
  quoted sentence in the extract; pp. 47 to 48 covers the passage. One
  phrase of the paraphrase lost a sense. Mended (section 10, item 10).
- auden[1], New Year Letter, Part 1: read by me in the text of the 1945
  Collected Poetry, pp. 269 to 270 (numbers at the foot of the page; the
  description of Dante begins in the last line of p. 269). The poet had
  seen the lines only in the research notes. The paraphrase is faithful
  but for one phrase: it called Dante "the first of" the court, and the
  poem says he presides over the speaker's own case. Mended (item 10).
- auden[2], Pearce, pp. 153 to 154 (the number stands at the foot of
  its page): seven cantos cut to five, the prose version named, the
  list from Inferno 3 and 5 to this canto, a committee of students, this
  canto learned in one afternoon, three hours of writing. All there.
  That others remembered six: Charles H. Miller, Auden: An American
  Friendship (1983). I found his two sentences (his own account of the
  first class, and Angelyn Stevens as he quotes her) in search extracts
  of the scanned book; the page numbers are the research note's.
- auden[3], "Writing", The Dyer's Hand, pp. 23 to 24 (head numbers).
- auden[4], "D. H. Lawrence", p. 277.
- auden[5], "Making, Knowing and Judging", pp. 43 to 44.
- auden[6], The Nation, 24 December 1938, p. 689: read in the text of
  the issue; the paragraph is in the left column of that page. The
  contents page numbers the essay VII in its series. One phrase of the
  paraphrase glossed his term loosely. Mended (item 10).

The view is his view of Dante and of this vision, and the passages bear
on it: the one step from creature to Creator (prayer / Rhyme), the
images that never run dry (book / Figure), the structure that dictates
the number of verses (end / Rhyme, end / Whole), the vision as gift
(end / Sentence).

## 6. The reason and its ground (rules two and three)

Each caption and each `why` was taken a sentence at a time.

**prayer / Figure.** Stands as written. Sapegno's note to lines 1 and 2
says all of it: three pairs, contradictory by a natural measure and all
true on the plane of faith; such antitheses were already a formula of
the liturgy; here they are no artifice of style because the opposition
is in the fact. Singleton's note to lines 1 to 3 adds that all three
point to the Incarnation, which lines 4 to 6 state. Bosco and Reggio:
the second pair is developed in the two tercets that follow, and is no
play on words.

**prayer / Rhyme.** One sentence was invented and wrong: that the last
word of line 6 is the word for the maker "with the ending of" the word
for creature, "so the chain sets the maker's word among the creature's
rhymes". No source says it, and the word is not the maker's: Treccani
gives it as the thing made, a synonym of creature. Cut. In its place,
what the sources do say: the two words come from one verb (Treccani),
the Enciclopedia Dantesca calls them a play on one root, and they end
the two lines that state the Incarnation (the text). The `why` was
rewritten to match. The last two sentences stay: the rhyme of maker
with love is on the passage, and Auden's sentence is his. The caption
now uses his own nouns, creature and Creator, where it had "maker" for
his "Creator".

**prayer / English.** Stands. "The ties show both" used a working word;
now "The marked words show both" (on the page the words are underlined
and numbered).

**book / Figure.** Stands. In the `why`, "the binding, the line says, is
love" changed the grammar of the line, which says bound with love.
Mended.

**book / Word.** Stands. Each gloss is in the entry cited. The caption
gives both readings of the last phrase of line 90 and decides neither.

**book / Rhyme.** Stands. That rhyme marks the end of the line stood
only on a handbook of English verse; it now stands also on the
Enciclopedia dell'Italiano under rima.

**end / Beat.** The fault of substance. The caption said that stresses
which meet slow a line, and that this is the line where his power gives
out. The only ground was Paull F. Baum on English verse (chapter 5), and
the poet's own `open` admitted that the Italian sources do not say it.
What a source on Dante's line does say: Enciclopedia Dantesca,
endecasillabo, section 6. A secondary accent on the ninth syllable, when
it is prominent, strikes against that of the tenth and brings out the
word it falls on; and in general a strong accent right before or after a
main accent often gives the line a labored intensity and brings out its
word. The caption now says the first of these and names the word, which
is the verb of failing. Line 142 is not among the article's examples;
the application is the page's own, and a caveat says so. The gloss of
the faculty named in the line is Singleton's (a faculty that receives
images, not one that makes them). The hedged remark about a second
meeting of stresses at the sixth and seventh syllables left the caption
and became the first numbered point, still hedged ("can be heard").

**end / Sentence.** The caption stands: I checked the subject of each
of the seven verbs, and none is the speaker (the subjects are his wings,
his mind, its wish, power, love twice, and a wheel). The `why` went
past the text in two places ("the poem ends on the love that acts"; "he
does nothing himself"). Rewritten to what the lines and Auden say.

**end / Rhyme.** Stands, with one mend: "Dante uses" the Latin
infinitive "twice" was too wide (his Latin prose uses the verb freely).
Now "The poem has ... twice", which is what the count and the
Enciclopedia Dantesca give.

**end / Whole.** Stands. Every number counted again (section 7).

## 7. Counts made again (end / Whole and end / Rhyme)

Counted by me on the Italian text printed here (a line is one line of
verse; headings are not counted), with my own script, not the poet's:

- 100 cantos; 14,233 lines; 4,720, 4,755 and 4,758 by part. The three
  lists in `facts.parts[].linesPerCanto` equal mine, canto by canto.
- All 100 cantos have a multiple of three lines, plus one.
- Shortest 115 (Inferno 6 and 11); longest 160 (Purgatorio 32). The
  table `howManyCantosOfEachLength` equals mine.
- The last word of each of the three parts is the same word (stars),
  and no other canto ends on it.
- The Latin infinitive of line 143 comes twice in the poem, Paradiso
  4.25 and 33.143, both times at the line end in rhyme with the word
  for stars.
- Canto 33: 145 lines, 48 groups of three and one line; 49 rhyme
  sounds, the first and the last with two words, the 47 between with
  three.
- Paradiso 1.1 ends on the verb that is the verb of 33.145.
- The word for volume ends a line six times (Inferno 1.84; Paradiso
  15.50, 23.112, 26.119, 28.14, 33.86), and each time the word for
  light rhymes with it.

Nothing to change in `facts`. Key names and shapes are untouched.

## 8. The prose and the rules

- No dashes, no stock words; the checker's lint is clean.
- Two quotations of in-copyright text, 24 words each, both exact.
- No line of the poem is typed in the reading beyond single words and
  phrases of at most six words.
- `about` had five sentences where the format allows two to four. Two
  were joined.
- After the mends every caption has 106 to 110 words, every `why` 33 to
  40, every `stands` 47 to 69, every caveat 33 to 50.

## 9. The printed notes

Written for a reader:

- `stands` on all ten lenses, with links into the books printed here
  where a ground is another place in the poem (canto 30 and canto 31
  for the rose; lines 55 and 64 of this canto; Inferno 1; Paradiso 4;
  the end of the Purgatorio; the last lines of the Inferno and the
  Purgatorio). Every linked block was opened and is the place named.
- Each `stands` has at most four sentences and at most 69 words.
- "Not seen in full" is said in `sources` of the two things known only
  from search extracts: "K.'s Quest" and Miller's book.
- `sources`: 18 entries, the text printed here first. Dropped: the
  entries for the counts and for the project's research notes; Storti's
  web guide (no caption stands on it); Baum's chapter 5; three Silva
  Rhetoricae entries and two Enciclopedia Dantesca entries that no
  ground uses. Added: Miller; the Enciclopedia dell'Italiano under
  rima; the Enciclopedia Dantesca under endecasillabo; the editors of
  the volume in which Zuliani's essay appeared (seen on the volume's
  own contents page).
- `caveats`: five.
- `auden[2].source`: the path to a research note is gone; Miller is
  named there for the six cantos.
- `view.source` and the other `auden[].source` were already clean.

## 10. What was changed, in order

1. `about`: third and fourth sentences joined with a semicolon.
2. end / Beat, `scan`: the meter strings rewritten as a count (`.` and
   `/`). Voice strings and `div` untouched.
3. end / Beat, caption and `why`: rewritten on the Enciclopedia
   Dantesca (section 6 above).
4. end / Beat, `points`: a new first point for the possible second
   meeting of stresses; the last point no longer names a mark the page
   does not show.
5. end / Beat, `grounds`: the Baum ground replaced; a plate ground
   added for which word the ninth syllable belongs to; the text ground
   reworded after Singleton.
6. prayer / Rhyme, caption, `why`, `grounds`: the invented sentence cut
   and replaced (section 6); a text ground added for lines 4 to 6.
7. prayer / English, caption: "The ties show both" reworded.
8. book / Figure, `why`: the grammar of "with love" restored.
9. end / Sentence: `why` rewritten; the last span's tag changed from
   "clause" to "subject" (it is part of the subject phrase), which
   brings the kinds of mark from six to five and clears the warning.
10. `auden[0].says` (the dreamer on waking), `auden[1].says` (Dante
    presides over the case) and `auden[6].says` (natural good or evil):
    one phrase each brought back to what he wrote.
11. end / Rhyme, caption: "The poem has" for "Dante uses".
12. book / Word, one note: "Some twenty lines earlier".
13. book / Rhyme, `grounds`: the Italian authority for rhyme and the
    line end added beside Baum.
14. `stands` on every lens; `sources` rewritten; `caveats` added;
    `auden[2].source` cleaned.
15. `checked` on four `auden[]` entries: what the examiner read, added
    after the poet's words.
16. `open`: the poet's items kept; three have a note in brackets saying
    what is now settled; six examiner's items added at the end.

## 11. Still doubtful, or for the lead

- The reason in the Beat tab is a general remark applied by this page to
  a line the source does not cite. It is said so in `caveats`. If that
  is still too much, the caption can stop at the observation that the
  line ends on two stresses together, which Italian verse tends to
  avoid, on the word that says power failed.
- "K.'s Quest" has not been seen as a whole page by anyone on this
  project.
- Auden's "number of verses" is taken as the number of lines. The two
  captions that use the remark apply it to the closing line of a canto
  and to the line counts; that application is the page's. In `caveats`.
- The Britannica pages were read in archived copies.
- The Whole tab still shows the facts as a plain table; the artist's
  drawing was not yet there when I finished, and no key of `facts` was
  renamed or reshaped.
- Not mine to change, noted for whoever owns the kit: under a Rhyme tab
  the key for a thread of sound always reads "coming back inside the
  line". In the first two passages the threads run between words at
  line ends.
