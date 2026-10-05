# Orpheus: the examiner's record

Examiner started by the lead (examiner.txt, 2026-10-03 08:03 UTC). The
piece as found is the second poet's `reading.json` (59,719 bytes) and
`notes.md`. `reading.json` is edited in place by small exact edits;
`put.mjs.poet-only` was not run and `parts/` was not touched.

Words of the libretto are never written here: places are given by
text, part, row and word number.

## State as found

- `node build/tools/check-reading.mjs orpheus`: no problems, one
  warning (the word Echo in the caption of the tab "Strophes"), "the
  printed notes are fit to print".
- `view` is null; one entry under `auden`; nine items in `open`.

## 1. Proof: the rows against the scans

How it was done. Each hosted row of `o-orpheus` was compared, letter
for letter, with the line of the machine-read text it was cut from
(`.cache/originals/`, the Toronto and the Chapel Hill copies of the
Ricordi libretto of 1879), then with the other copy, then with the
Bologna print of 1771 (`.src/ia/orfeoedeuridicee00gluc.txt`). The page
images in `.src/` were then opened and read: p. 8 (the song), p. 9
(Love's terms), pp. 17 to 19 (the scene before), p. 20 (the aria).

Found.

- Every hosted row is the same as its scan line. No word is added,
  dropped or respelled by the cut.
- Part `aria`, 7 rows in 4 blocks, from the Chapel Hill copy. Row 0.0
  is the first line of the aria as the print gives it at its RETURN
  (the eighth printed line of the aria), because at its first place the
  print has a misprint in the third word. I saw both on the image of
  p. 20: the misprint the first time, the word right the second time.
  The words shown are therefore the libretto's own and nothing is
  emended by hand. See section 10 for whether the page says so.
- The print sets the aria as four lines, then three, then the two
  returning lines, by indentation. The hosted part has four blocks (1,
  1, 2 and 3 rows) and the page draws a space only where a block of
  more than one row begins or ends, so the reader sees 2 + 2 + 3. That
  grouping is the page's, not the print's. Said now in a caveat.
- Part `law` row 0.0 word 2 carries a grave accent where the print has
  a circumflex and the other copy's machine reading an acute. The
  dictionary gives this old form of the verb with a grave (Treccani,
  Vocabolario, the verb "dovere"), so the reading is a correct modern
  spelling of the same word. Left; no re-cut would mend it and the
  hosted text is not mine to edit.
- Bologna 1771 has the same words in every row shown. It differs only
  in: the interjection spelled without its h three times (part `loss`,
  row 0.1 words 6 and 8, row 0.2 word 0); small initials where 1879 has
  capitals (part `aria` row 3.2 words 2 and 5, row 2.0 word 3); points
  and commas. Nothing that any mark or caption rests on.

The marks. Every mark of every tab was looked up with `show.mjs` and
`words.mjs`: each lands on the word it names. Nothing moved.

## 2. Ear: the scansion, said aloud by the Italian rules

Rules used, read in Treccani (Enciclopedia dell'Italiano,
"versificazione", "sinalefe"): a line is named from the place of its
last stress plus one; two vowels that meet across a word boundary
count as one syllable, also across a pause.

- Aria, rows 0.0 to 3.2: 8, 7, 8, 7, 8, 8, 7 syllables on the page,
  stresses on the third and seventh in all seven. The three lines that
  count 7 stop on the stressed syllable, so all seven are eights by
  name. The poet's marks agree with my count in every row.
- Love's terms (`law`): 11, 11, 7, 11. Orpheus before the aria (`loss`
  rows 0.0 to 0.2): 11, 11, 11; the half line 0.3 words 0 to 2 opens
  an eleven. After the aria (rows 1.0, 1.1): a seven, and the first
  four words of the next line.
- The song (`call`): sevens that stop on the sixth in lines 1, 2, 4, 5
  of the strophe shown and of the second, fives in lines 3 and 6. In
  the third strophe lines 4 and 5 are full sevens (not shown).

One point was wrong. The tab "Measure" said the vowels of `loss` row
0.1 join "across each exclamation mark". They join across the first
two; after the third the next word begins with a consonant. Mended.

## 3. Counts in the whole libretto

Counted in both copies of 1879 and in Bologna 1771.

- The verb for "answer": five times, the aria's the last. Stands.
  (The Bologna scan has another piece bound after the libretto; the
  count stops at the libretto's own end. In the Toronto copy the
  machine misreads the first letter of the two places in Act 3.)
- The word for "law": four times, all in Orpheus's mouth. Stands.
- The phrase for "forever" (two words): three times in the dialogue
  (Love in Act 1; Orpheus just before the aria; Orpheus just after
  it), and once more in the prose Argument. The aria itself does not
  have it. The second word alone also comes in Orpheus's line of the
  duet (and in three stage directions), so the caption may speak of
  the phrase, not of the single word. Mended in "Return".
- The words for "pact" and "ban" are Love's (Act 1, Scene 2); so the
  note under "law" in the tab "Words" stands.
- Echo is named once, in the second strophe of the song, with a
  capital, and the lines say that she alone answers, because she knew
  love. Seen on p. 8. This is what the checker's one warning is about;
  see section 9.

## 4. The terms, and what the page joins

Built with `node build/pieces.mjs orpheus` and photographed with
`shoot.mjs`, every tab at 1280 wide; each picture looked at.

- "Calls" is the one figure tab. Apostrophe is the right name: two
  lines speak of her, then the speech turns to her. `join` is "none"
  and the page draws no stroke between parts, only two colors
  ("about her", "to her"). Nothing to set.
- `plain` said "most often to someone absent". *Silva Rhetoricae*
  (rhetoric.byu.edu, "apostrophe", fetched and read) has three: an
  abstraction, an inanimate object, the absent. Mended to say so; 28
  words.
- The imperative in the third line: the caption said "in the form used
  to one person". True, but it settles nothing (the cry before it is
  also to one). Cut. That the order is to her stands on the name before
  it and the possessive in the next line.
- The two shape tabs ("Rondo", "Strophes") had no drawing when I
  began (no `site/js/pieces/orpheus.js`), and the page printed their
  `facts` as a bare table: single values and the group "every
  strophe" show, the lists ("sections", "strophes", "between", "the
  verb in the libretto") show as empty rows. At 09:09 UTC the artist's
  module appeared with a drawing for "Rondo", and by 09:23 with one
  for "Strophes". See the end of this section.
- In "Strophes" the table printed syllables as 7, 7, 5, 7, 7, 5, while
  four of the lines shown count six on the page (they stop on their
  stress and are sevens by name). The key and its value are kept as
  they were, so that a drawing can go on reading them, and a new key
  beside it ("how the sevens count") says in a reader's words that
  the lines are named, not counted. No key of the facts was renamed
  or reshaped.
  In the same facts "answers: no one" for the first strophe went
  beyond the lines, which say only that she does not answer him: now
  "she does not".
- Beside the artist. An artist began on this piece at 08:48 UTC
  (`art.md`) and had changed nothing in `reading.json` when I
  finished. Its module, read at 09:10, draws "Rondo" from these keys:
  `bars`, `mode`, `first tempo`, `the opening lines`, and in
  `sections` the keys `name`, `lines`, `to`, `bars`, `returns`,
  `tempo`, `ends`, `flats`. I had changed none of them. Read again
  at 09:25, it draws "Strophes" from the count of syllables (it reads
  the figures out of the string, so the value kept its shape for good
  reason), each strophe's `n`, `verb`, `in English`, `setting`,
  `answers`, `says`, `last word`, `rhymes` and `shown`, the
  recitatives in `between`, and the places of the verb; the whole
  group "every strophe", my new key with it, is folded under the
  drawing as "The numbers". So every value under those keys was
  tested as something a reader will see (section 7, "Rondo" and
  "Strophes").
- Both drawings were looked at as they stood at 09:28. "Rondo": what
  it prints agrees with the caption (36 of the 70 bars; about half).
  "Strophes": under the first strophe it prints "answers: she does
  not", under the others Echo and a brook, which is what the lines
  say. It gives "I weep for" over the third verb where the caption
  has "I weep"; the verb takes an object there and both are right.
- One thing for the lead. The module also reads a key that the facts
  do not have yet, "the libretto prints", to draw the order in which
  the libretto prints the lines. On p. 20 the print sets lines 1 to
  4 together, then 5 to 7, then lines 1 and 2 again (seen once more
  on the image). Lines 3 and 4 are not a printed group of their own;
  a line in `open` says so.

## 5. The words

Every entry behind a gloss was fetched from treccani.it and read
(Vocabolario: the 40 entries named in `sources`; Enciclopedia
dell'Italiano: versificazione, sinalefe, rima, lingua del melodramma;
Enciclopedia on line: recitativo). All seventeen glosses of the tab
"Words" say what the entries say; none is over six words. Points
checked with care:

- "at the mercy of" (law, row 1.0 words 7-8): the entry marks this
  sense as an old use; the phrase runs on into the next line.
- "is left to me" (loss, row 0.3 word 1): the entry's first example of
  the sense is Petrarch's line; see section 7 on what the caption may
  claim from that.
- The cut word at a line's end: the Vocabolario (under "troncamento")
  says such words are characteristic of the canzonette, and adds that
  they had more fortune in the anacreontics of the eighteenth century
  and with the Romantics. The encyclopedia (under "rima") says the
  stopped rhyme in a consonant becomes characteristic of the
  ode-canzonetta. So "a mark of the canzonetta", not "the mark of
  Italian verse for singing". Mended in "Endings" and "Rhyme".
- The canzonetta is "generally set to music" (Vocabolario), not "made
  for music". Mended in both captions.
- Arias "rigorously rhymed": the encyclopedia describes the genre; the
  caption had turned it into what "is expected". Now "as a rule
  strictly rhymed".
- The line of eight: after Dante and Petrarch only in religious verse
  and verse for music (encyclopedia, "versificazione"). Stands.

## 6. Auden: `view` is null, and the one sentence

Searched again: the four scans (The Dyer's Hand, The Enchafed Flood,
Forewords and Afterwords, Pearce) for the opera's name in Italian and
English, its persons, the librettist and Gluck. One place names the
opera: Forewords and Afterwords, p. 8 (fa.txt lines 410-418), in "The
Greeks and Us", which the book's own note gives as the introduction
to The Portable Greek Reader, 1948. The page is 8 by the running
heads. (The lines of New Year Letter quoted in the volume that holds
Pearce's memoir name Gluck among the pleasures of an evening, not this
opera.) Research note C, section 25, lists two more places that name
Gluck and not the opera (Lectures on Shakespeare, p. 310; "Opera
Addict", Prose II, p. 401); neither book is on this machine.

What he says there. The sentence opens section III. It grants three
things before its "nevertheless". The third is about how long an art
keeps up its best work: Athenian drama did so for some seventy-five
years, and he allows that opera did better, for 125, counting from
this opera to Verdi's Otello. Those years he calls the golden age of
European opera. He says nothing of what is in the opera.

The judgment. `view: null` is right. A view must be his view of this
work or passage, with something on the page that bears it out; a date
at one end of a period is neither.

Was what the page claimed of it what he says? Nearly. Two phrases
went past him and are mended:

- "Where he names it, it is a date" spoke as if of several places.
  One place was found. Now: "The one place found where he names it".
- "a stretch of unbroken work in one art" for his "sustained creative
  activity in one medium". Sustained is not unbroken. Now a closer
  paraphrase, and "He grants", since the clause is a concession.

The count of 125 years and the two operas are his. The quotation (six
words) is exact. Last, the paraphrase was measured against his
sentence word by word: one stretch ran eight words with his (the two
operas and what joins them) and was turned ("from ... to"). Outside
the quotation no run of his words is now longer than five.

Should the entry be in the list at all? By the letter of test 5, a
place where he only names the work in passing, in an essay on
something else, goes in the notes. I kept it, for two reasons, and
the lead may overrule (one line in `open`):

1. With `view` null and an empty list the page prints, in the place of
   his view, that nothing he wrote or said about this work was found.
   A reader who knows p. 8 could fairly call that untrue.
2. It bears on the work as he taught it in one respect that can be
   checked: Orpheus stands first among the nine opera libretti on his
   list (research note A, section 1.3; the site's own list; and the
   image of the typed list on Alan Jacobs's page, which I fetched and
   read). The entry now says that, as a fact, and draws no conclusion
   from it. The list is added to `sources`. (By the usual dates of
   first performance all nine operas on the list fall inside his 125
   years, 1762 to 1887. I opened no source for the other eight dates,
   so the page does not say it; the lead may think it worth a line.)

No other piece on the site has `view` null, so there is no settled
practice to follow; the page as left shows no view at the head and
this one entry at the foot under "What Auden said".

## 7. The reason and its ground, caption by caption

Each caption and each `why` was taken a sentence at a time. What
stood is not listed; what changed is, with the ground read for it.

**Count.** The speech before the aria was "in longer lines that do
not rhyme until its close". Counted on the image of p. 20: ten lines
from the stage direction that she dies to the aria, nine of eleven
syllables and the ninth of seven; only the last two rhyme. The caption
now says lines of eleven and one of seven. Ground and `stands`
brought into step.

**Endings.** Three changes, all in section 5 (a mark of the
canzonetta; usually set to music; as a rule strictly rhymed). The
sentence "Each cut ends a group" stands: the groups are the two lines
the libretto prints again, the two lines said to her, and the last
three, which are one sentence; the score sets the same three as its
sections. A ground was added that says so and records that the print
groups by indentation as four lines and three.

**Calls.** "Meets her charge with its opposite" made the line an
answer to her; now "says the opposite of her charge", which the words
bear: she calls him faithless and says he has lost faith (pp. 17-18),
and the fourth line says he is still her faithful one. Her order and
his two replies were read again in the scan text (lines 812, 828, 844,
849); the caption's account of them is exact.

**Rondo.** My own count of the score agrees with the poet's in every
number: 70 bars and an upbeat; the opening lines sung in bars 7-16,
30-39 and 49-63; Adagio in bar 24; Tempo I at 30 and 49; Moderato at
40 and Adagio at 42; pauses in 24, 29, 39, 40, 41, 47, 48; no
signature, and the head of the number reads Andante con moto. The
fact that A flat and E flat come in at the second Adagio, which the
drawing prints, was looked at on p. 134, second system: from bar 42
both flats stand as accidentals in the first violin, the viola and
the voice. The sections add up to 70, and the three with the opening
lines to 36; the voice itself sings them in 35 (bar 17 is the
orchestra's close of the first), which is why the ground says 35 or
36 and the caption "about half".
Changed:

- "the same question comes back" and, in `why`, "the two questions":
  both prints close these lines with exclamation marks. Now "the two
  opening lines".
- Boyé is known only through Hanslick, so "is reported to have said".
  Hanslick's passage read again (chapter II, Project Gutenberg 26949):
  he quotes the aria in its French words.
- That the example came in with the second edition was second hand
  (research note webfacts.md, no. 5). Settled: I fetched the
  machine-read text of both scans from the Internet Archive. The
  second edition (1858, bub_gb_PiIWAAAAYAAJ) has the passage on the
  page numbered 25, with the aria's French couplet and the couplet
  of opposite sense. The first (1854, VomMusikalischSchnen1tea1854)
  has at that place, pp. 21-22, a theme from Meyerbeer and the duet
  from Fidelio, and the aria's French words nowhere. `sources` now
  gives publisher and page.
- The sentence about the two lines coming back was folded into the
  one before it, to bring the caption under 110 words.
- `facts.note` said the edition "joins the Vienna score of 1762 with
  the Paris version of 1774". Dörffel's foreword says more exactly
  that he took the French score as his basis, put Orpheus's part back
  in the contralto range after Berlioz (1859), and so united the two
  printed scores. The note, the caveat and `sources` now say that.
  The bars and tempo marks are therefore this edition's; the Vienna
  score was not seen.
- Gluck's sentence: Newman, p. 93, read again; "pace or expression"
  for his "movement" and "turn of expression" is fair.

**Words.** "Petrarch used these words for this grief" and, in `why`,
"they are words of Petrarch's poem" claimed more than the poem has.
Read at it.wikisource.org: it has the libretto's verb for what is
left, in the same form (line 32); the verb for counsel, where the
libretto has the noun (line 1); another word for hope; no word for
help. The caption now says just that. To carry it to a reason on a
ground, one sentence was added from a source I opened: Treccani's
article on the language of opera says that the forms of serious
librettos come from a long tradition and that opera before the
Romantics moves along the line Petrarch, Tasso, Metastasio. Nothing
says Calzabigi took the words from this poem, and the page does not
say so. The poem's number, 268, is its place in the index of the
*Canzoniere* on the same site. Last, to have it from a printed book:
the machine-read text of *Le rime*, edited by Giuseppe Salvo Cozzo
(Florence: Sansoni, 1904; Internet Archive,
lerimesecondolar00petruoft), has the poem as CCLXVIII on pp. 258-259
with its lines numbered by fives: line 1 has the question to Love
and the verb for counsel, line 32 the verb for what is left, of "so
much hope". The Hoepli edition of 1918 has the same number in its
running heads. `sources` now cites the edition of 1904.

**Return.** "After the aria *sempre* comes a third time": true of the
two words together, not of the second alone (section 3). The caption
now marks both words. The stage direction at the end of the speech
(he means to wound himself) is on p. 20: "when he chooses death" in
`why` stands.

**Measure.** "Without rhyme" is now "mostly without rhyme", as the
encyclopedia has it ("usually") and as the caption itself goes on to
show. The point on row 0.1 of the right-hand passage is mended
(section 2). The name of the measure said "the others free"; the
marks, rightly, also fix a stress on the fourth or sixth of an eleven,
as the encyclopedia does, and the name now says so. "The only rhyme
in it" (point 3) was tested on the whole of Love's speech: true.

**Rhyme.** `why` called the strophe "a canzonetta's". No source read
says that of this strophe; they say the stopped rhymes are a mark of
the canzonetta. Mended to that. "Which answers *asconde*" played on
the word; now "rhymes with".

**Strophes.** "In the first no one, for she does not" went past the
lines, which say that she does not answer him. The caption and the
facts now say only that. `why` had "a different answerer each time"
(the first strophe names none) and "the answer the song never had";
it now says what can be counted: all three strophes end on the verb,
she answers in none, and the verb comes twice more in Act 3, last in
the aria. All three strophes and the three recitatives after them
were read again in the scan text (lines 302-344), and every value in
the facts was held against them: each strophe's verb, its setting,
what answers and what the lines say of it, its last word and its
three rhymes; what each recitative between says; the five places of
the verb, in order. All true to the lines. The image of p. 8 was
opened again for the first strophe.

**English.** "In his song Orpheus does not address her" is true of
the three strophes, not of the recitatives between them: now "In the
three strophes". "Rhymes his first line with his third" is true of
each half: now says so. The title page of the English libretto and
the program bound before it were read again in the scan text.

## 8. The prose and the rules

- Every printed string (290 of them at the last count: captions,
  reasons, notes, points, ties, glosses, the printed facts and the
  names of their keys, sources, caveats, what Auden said)
  was searched for the stock words of BRIEF.md, for "offers",
  "suggests", "enacts", "embodies", "mirrors", for dashes inside
  sentences, question marks, "not X but Y", "we", British spellings,
  and for the words "plate" and "lens", file names and research notes.
  None found.
- POET.md gives a caption 50 to 110 words. As found, "Endings" had 111
  and "Calls" 112; my first mends took "Count" and "Rondo" over too.
  All ten are now between 85 and 109. Every `why` is 40 words or
  fewer, every `stands` 70 or fewer, `plain` 28, `about` 84.
- No line of the libretto is typed into the reading: single words, one
  Italian phrase of two words, and paraphrases in English. One
  quotation from Auden, six words.
- The passages are short enough: seven lines, four lines beside five
  and a half, six lines.

## 9. The checker's one warning: Echo

The warning is on the word Echo in the caption of the tab "Strophes".
The lint takes it for the critic's verb. It is a name. The second
strophe of the song, as both prints have it (the libretto of 1879,
p. 8, seen in the image; scan text lines 313-318), says that he seeks
her on the shore where she died and that Echo alone answers his
grief, because she knew love. The libretto prints the name with its
capital. So the lines themselves bear the sentence out, word for word,
and it stands. The sentence was shortened in the mend of section 7
("In the second Echo alone answers") and still says only what the
strophe says. No other wording would be as true, so the warning will
go on printing; one line in `open` tells the lead why.

## 10. Does the page say plainly enough which print the words come from?

As found: partly. The foot of the page named the print (Ricordi,
Milan, 1879, compared with Bologna, 1771) in `sources` and again in
the first caveat. But two things about the first passage were told
only in `open` and `notes.md`, which a reader never sees:

1. The first line shown is not the line where the print first has it.
   There the print has a wrong letter in the third word (seen on the
   image of p. 20; both library copies have it, so it is the printing,
   not the scan). The poet took the line from the place where the two
   opening lines return, after the seventh, where the print has it
   right. That is a sound way to do it: every word shown is the
   libretto's, and nothing is corrected by hand. But the caveat as
   found said only that the libretto "prints the aria's two opening
   lines again at the end, and they are shown once", which hides it.
2. The print sets the aria as four lines and three, by indentation.
   The page shows a space after the second line and after the fourth;
   the first of these is the page's own, a result of the way the part
   was cut into blocks.

Mended: the second caveat now says both, in a reader's words. With
that, yes: a reader who lays the page beside p. 20 of the libretto of
1879 is told what he will find different and why. Which of the two
library copies each part was cut from is in the hosted parts' own
source lines (Toronto for the song and the recitatives, Chapel Hill
for the aria); both are the same printing, and the page need not say
more.

One thing the page cannot say plainly because nobody here knows it:
how the first print (Vienna, 1762) reads. The first caveat now says
that no Vienna print was seen.

## 11. The poet's nine open items

The nine in the poet's order, with what could be settled from this
machine and from public pages fetched here:

1. *The second cut of the aria.* Tested (section 1): every row is its
   scan line; the first row is the print's own line from its return.
   What is left for the lead is one line: the rows shift if the part
   is rebuilt from the first cut, and the four blocks make the page
   set a space the print does not have.
2. *Small differences between print and hosted text.* The accent in
   `law` row 0.0 is a right modern spelling of the same form (Treccani,
   the verb "dovere"). The spaces before points are the print's own.
   In `loss` the last word of row 1.1 has one misread letter (the
   image of p. 20 has the word right); it lies outside the words
   shown. Row 0.3 is the print's whole line, and its second half
   begins a sentence the part does not finish, which is why only its
   first three words are shown. One line is left so that nobody shows
   row 1.1 whole before the hosted text is mended.
3. *The two prints agree.* Compared row by row (section 1): the same
   words in every row shown. That no Vienna print was seen stays open.
4. *The Italian printed with the English.* Read in the scan text of
   the English libretto (lines 276-314): as the poet reports. In the
   song its first, second and fourth lines are not Calzabigi's, its
   first line is said to her, and it has two strophes for his three.
   Which Italian Maggioni worked from cannot be told here; left. A
   search of the Internet Archive found him as translator of
   librettos for the Royal Italian Opera, Covent Garden, dated 1847
   to 1870, and no earlier print of his Orfeo; that pointer is in
   `open`, and nothing on the page rests on it.
5. *The program of 1939.* Read in the scan text of the English
   libretto: the Metropolitan Opera's program for 29 November 1939
   stands before the title page. Left as one line, since the hosted
   text's note is the lead's to change.
6. *The bars.* Counted again, same numbers (section 7). The record
   stays open.
7. *The two other places in Auden.* Not settled: neither book is on
   this machine (section 6). Left.
8. *Petrarch's number.* 268 is the poem's place in the index of the
   *Canzoniere* at it.wikisource.org (the 268th entry; the sonnets
   before and after it are 267 and 269), and its number in the
   printed edition of 1904 (section 7, "Words"). The caption now
   claims only what the poem has.
9. *Echo.* Stands (section 9).

Left for the lead, each now one line in `open`:

- the passing mention kept in the list under `auden` (section 6);
- Lectures on Shakespeare, p. 310, and "Opera Addict": not on this
  machine (item 7);
- the hosted part of the aria: its rows and its blocks (item 1);
- the misread letter outside what is shown, and the row that is
  shown only in part (item 2);
- no Vienna libretto or score seen; the score's full form of the last
  word of the aria's fourth line (item 3);
- Maggioni's dates, the first printing of his version, and which
  Italian he worked from (items 4 and 5);
- the note of the hosted English text and the program of 1939 (item 5);
- the record, not heard (item 6);
- an artist was drawing the two shape tabs while I examined; I tested
  the facts and saw both drawings as they stood, not the finished
  page; and how the print groups the aria's lines, for the key the
  artist's module expects (new);
- why the checker's warning stays (item 9).

Two things I had first left as second hand were settled at the end
and are no longer in `open`: the date of Hanslick's example and
Petrarch read in a printed edition (section 7, "Rondo" and "Words").
`open` now has ten lines.

## 12. The printed notes

- `auden[0].source`: the essay, its year, the book, its year and the
  page; nothing else. Where it was read is in `checked`, with what I
  added on reading it again.
- `sources`: ten entries. The text printed here comes first, with the
  print named and the English version's edition. Changed: the score's
  entry now says the Peters issue is undated and what the foreword
  says of 1866; Hanslick's entry gives publisher and page and says
  that the remark is Boyé's as he reports it; Petrarch's gives the
  two lines used and the printed edition of 1904 in which I read
  them; the reading list of the course is added, since the entry
  under `auden` now rests on it (I fetched the image of the list from
  Alan Jacobs's page and read the nine libretti on it: Orpheus heads
  them).
- `stands`: all ten read as a reader would. Rewritten where the
  caption changed or where it named something only this project
  knows: "Count" (where the recitative is), "Endings" (the groups),
  "Calls" (the pages of the scene), "Rondo" (Newman and Hanslick as
  go-betweens), "Words" (the encyclopedia added), "English" (the link
  goes to the English printed here; the Italian beside it was read in
  a scan).
- `caveats`: five. The print and what was not seen; the first line
  and the grouping of the aria; the English; the stresses; the score,
  the record and the two remarks known through others. Cut from the
  caveat on the English: "it is verse for reading, not fitted to the
  notes", which no source here says.
- Nothing printed says "plate" or "lens", names a file or a research
  note.

## 13. Still doubtful

- Whether the aria's form in the Vienna score of 1762 is in every bar
  the form counted here. The count is of Dörffel's edition, and the
  page says so twice (the tab's `stands`, a caveat).
- The stresses marked as light or secondary in the two beat tabs are
  one hearing. No caption leans on them: the captions lean only on
  the fixed stresses (third and seventh; tenth, and fourth or sixth)
  and on the counts, which I checked line by line.
- "Each cut ends a group" (Endings) rests on groups of sense that the
  score also sets apart; the print's own grouping is different, and a
  caveat says so.
- The entry under `auden` (section 6): kept on my judgment, against
  the letter of test 5.

## Refusals

The permission system refused nothing in this session.

## State as left

`node build/tools/check-reading.mjs orpheus --print`: no problems,
one warning (Echo, answered in section 9), "the printed notes are fit
to print". Files written: `reading.json` (small exact edits only),
this file. `put.mjs.poet-only` was not run; `parts/`, `notes.md` and
the hosted texts were not touched. The piece was built with
`build/pieces.mjs` and photographed into the session's scratchpad.
The artist's files (`art.md`, `shots/`, `site/js/pieces/orpheus.js`)
were read, not written.
