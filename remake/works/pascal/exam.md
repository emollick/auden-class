# Pascal, *Pensées*: the examiner's record

Piece `pascal`. Examined 2026-10-03, from 06:20 UTC to about 09:50 UTC. The marker file
`examiner.txt` was not there when I began; I made it.

**Verdict: mended.** The last three lines of
`node build/tools/check-reading.mjs pascal --print`:

    no problems
    no warnings
    the printed notes are fit to print

Words of the text are pointed at by part, block and word number, as the tools print them.
Nothing of Pascal, of Trotter or of Auden is copied out here beyond a word or two; what
Auden wrote is given in paraphrase.

## 0. State on arrival

The checker printed "no problems / no warnings / the printed notes are fit to print".
Three passages (ids `heart`, `reed`, `wager`), eleven tabs, no beat or rhyme tab (prose in
translation). A copy of the reading as I found it is kept outside the project, in the
session scratchpad (`pascal-exam/reading.before.json`), with every page and snippet I
fetched.

The reading was careful work. Most of its facts held when the sources were opened again.
What was wrong was of four kinds: a gloss of Auden's word that was the poet's own; things
given as Auden's at second hand that could be found in his own text; a few sentences in
captions that said more than their source (or said it with a figure of speech); and two
figure tabs whose strokes did not show what the caption joins.

## 1. The proof

Ran the checker and read every line of its proof, before and after the mends.

- Every mark sits on the word meant. `heart`: 5 parts (Reasons), 4 notes (French), 6
  parts (Against). `reed`: 5 parts (Reed), 12 spans (Verbs), 6 parts (Crossing). `wager`:
  10 spans (Voice), 11 parts (Pairs), 4 parts (Scales), 4 notes (Game).
- No row shown has a word joined by a dash, so no mark needed a part number (6.1, 6.2).
  The poet's notes record why the third passage stops at word 125: word 132 of that
  block is two speakers' words joined.
- Every link in a `stands` and every `read` in the facts of the tab Page opens the block
  it should: `s04` 89, 91, 93, 99; `s03` 118, 128, 142, 143, 144, 145, 146, 152; `s02`
  115; `s07` 181, 348; `s09` 50; and the new one, `s02` 10 (fragment 63).

## 2. The ear

Nothing in this piece is scanned and no meter is stated: the text is prose in
translation, and the reading has no beat or rhyme tab. So there was no line to mark
before looking at the poet's marks. For the two sentence tabs I read the passages as
speech and checked where each span begins and ends against the clauses: they end where
the clauses end.

## 3. The terms, and what the page joins

| Tab | Term | Does it hold? |
| --- | --- | --- |
| Reasons | antanaclasis | Yes. One word, plural at 90.0 w4 and singular at w6, in two senses (Littré, *antanaclase*; *Silva Rhetoricae*). |
| Against | antithesis | Yes. Heart against reason, twice, in matching phrases (92.0 w3 with w7-10; w19 with w20-23). |
| Reed | metaphor | Yes. 17.0 w0 is called w3-4, with no word of comparison. |
| Crossing | chiasmus | Yes, it crosses: universe, speaker, speaker, world (20.0 w31-32, w36, w43, w45-46). In French the fourth is a pronoun for the first, so the cross is Pascal's too. |
| Pairs | parallelism | Yes. Three clauses on one pattern (144.0 w33-36, w43-46, w61-64). |
| Scales | antithesis | Yes. Two halves of six words that differ in two words each (144.0 w114-119, w120-125). |

The five plain-words glosses say what the terms mean.

**What the page joins.** The build writes outside this folder, so I did not run it. The
artist, at work on the piece at the same time, built it; I photographed every tab from
those builds into the scratchpad with `build/tools/shoot.mjs --out`, first at 08:10 UTC
and again at 09:33 UTC from the build of 09:31, which holds the mended reading.

- **Reasons** drew five underlines and no stroke: the usual pairing joins only equal
  numbers of parts, and here one part has the first tag and four the second. The caption
  joins the plural and the first singular. Set `"join": [[0, 1]]`. In the second pictures
  one squared stroke joins them, at 1280 and at 390.
- **Reed** drew two strokes from 17.0 w0: one to w3-4 and one to w14-16. The second is
  not false, but the caption joins the first word to the image once and tells the return
  by the word added, and on a phone the second stroke cut across the first. Set
  `"join": [[0, 1]]`. One arc now; the return is told by its color and the rule under
  the added word.
- **Against**, **Pairs**, **Scales**: the strokes join what the captions join.
- **Crossing**: the cross is drawn at 1280. On a phone the kit draws none, because the
  sentence turns between the parts (the artist's third fault of the kit). No setting in
  the reading mends that.

The artist proposed the same two joins in `art.md`. I had set the first already and set
the second after looking at the artist's pictures and my own.

## 4. The words

Each entry was opened again at littre.org and read by sense number. Littré quotes Pascal
himself under four of the senses used, so the senses were current when he wrote.

| Mark | Gloss in the reading | Entry read | Holds? |
| --- | --- | --- | --- |
| 90.0 w4, w6 | grounds or motives; the power that knows and judges | *raison*, senses 11 and 1; 11 quotes fragment 277 | Yes |
| 90.0 w11 | French *sait*: knows | *savoir*, sense 1; Brunschvicg's text of 277 | Yes |
| 92.0 w5 | French *sent*: feels, perceives | *sentir*, senses 1 and 6; Brunschvicg's text of 278 and 282 | Yes; a caveat says it can be taken simply as to feel |
| 92.0 w16 | French *sensible*: perceptible | *sensible*, sense 8, which quotes fragment 278 | Yes |
| 20.0 w33, w44 | one French verb, to contain and to understand | *comprendre*, senses 1 and 3; Brunschvicg's note 28 to Section VI | Yes |
| 144.0 w11 | already at sea | *embarquer*, sense 2 | Yes |
| 144.0 w46 | French *engager*: to pledge | *engager*, senses 1 and 3; 3 quotes this sentence | Yes |
| 144.0 w103-104 | was "in taking heads" | *croix*, sense 11, which quotes this sentence; *pile* (third entry), sense 2 | **Mended.** Littré makes *croix* the side opposite the face, once marked with a cross. It is not the side with a head. "Heads" is Trotter's equivalent in the English game (`s03` block 142 words 153-155, block 143 words 37-38). Gloss, note and caption now say so. |
| 144.0 w113 | French *cas*: cases | *cas*, sense 1; Brunschvicg's text of 233 | Yes |

## 5. Auden

Each place was found again at its page. The two books in the scans were read there; the
others in search snippets of scanned copies, chained forward and backward from each
sentence and saved in the scratchpad.

**The view.** *The Prolific and the Devourer*, p. 47, running on to p. 48: Pascal as the
noblest and most tempting of the dualists, the faculty he lacked set over the one he had,
the divided man, and what saved him. All there, and the quotation (20 words) is exact as
far as an OCR can show. Two faults:

- The view glossed "dualists" as people who set a supernatural world over against this
  one. That was the poet's gloss, drawn from the two-worlds passage. Auden defines the
  word himself on p. 31: the false philosophy begins by dividing the whole in two, one
  part good and one evil, and may be theological, metaphysical or political. The view
  now gives his definition and then Pascal's kind (p. 34 calls him an ascetic dualist;
  pp. 46-47 and p. 73 speak of the natural and supernatural worlds). Source line now
  pp. 31 and 46-48.
- "In the summer of 1939" is now "In 1939". The season is the editor's dating, not on
  the pages the view stands on.

**The list.** Ten entries now (nine on arrival).

| Entry | Found at | Result |
| --- | --- | --- |
| 0. Faith as a choice; the two words | *Forewords and Afterwords*, p. 178 (scan, foot number) | Holds. Quotation of 23 words exact. |
| 1. Two worlds, two Gods | *The Prolific and the Devourer*, pp. 46-47 | Holds. The passage begins on p. 46; its last sentence and a half are on p. 47. |
| 2. Interesting as drama | *The Dyer's Hand*, p. 103 | Holds. |
| 3. Othello and Iago by Pascal's two minds | Pearce, pp. 141 and 143 | Holds. Titles now marked. |
| 4. *New Year Letter* | Faber 1941 scan, lines 483-527, note to line 497 | **Mended.** The poet wrote that the poem "has a passage that asks" about the serpent, and warned in a caveat that the voice might not be the poet's. I chained the verse from line 483 to 528: the passage is the Devil's speech. He purrs agreement at line 486 and the quotation closes at 527; the next line names the Devil. The entry now says whose speech it is and what else it says (salvation by logic is foolish; throw intelligence away; live by an order of the heart). Lines fixed by the marginal numbers 490 to 520 and by Auden's notes headed Line 497 and Line 527. |
| 5. Pascal beside Montaigne | *The Prolific and the Devourer*, p. 47; *Forewords and Afterwords*, p. 169; *The Dyer's Hand*, p. 20 | Holds. The second and third places name Pascal in passing; the entry stays because the tab Reed leans on the first and the other two show the pairing was a habit. |
| 6. Hard to judge fairly | *Forewords and Afterwords*, pp. 182-83 | Holds. Added his next sentence, on p. 183: the more one reads such writers, the plainer it is that their life of feeling is out of order. It bears on the view (corrupt in heart). |
| 7. The first fragment, in the essay on Henry James | *The Dyer's Hand*, p. 313 | Holds. His sentence follows the hosted translation of fragment 1 nearly word for word (`s01` block 2, words 31-50 and 62-69). |
| 8. (new) The book modelled on Pascal; the poem | Mendelson's preface, p. viii; the book, p. 29; "Pascal" in *The Collected Poetry* (1945), pp. 86-88 | **New.** See below. |
| 9. (new) Looking back in 1956; talk of 1947 | *Modern Canterbury Pilgrims*, pp. 36-37; Ansen, *Table Talk*, p. 25 | **New, replacing a second-hand entry.** See below. |

The old last entry gave three remarks "at second hand", from Mendelson's *Early Auden,
Later Auden* (2017) and from Ansen, neither seen. All three can be read nearer the
source:

- Mendelson's preface to *The Prolific and the Devourer* (p. viii; the foot lines for vii
  and viii stand before and after the sentences) says Pascal was one of the book's
  models, that Auden was reading him by June and had a poem about him by August, and
  that early that month he called the book his *pensées* in a letter.
- The book's second part (p. 29) opens by saying, in so many words, that like Pascal he
  starts from an observation and an assumption, and that Pascal overstated the
  unhappiness. Not in the reading before.
- The poem "Pascal": read in the scan text of *The Collected Poetry* (1945). One
  sentence of paraphrase is in the list. In the poem it is the gift that takes the child
  up and rebuilds his faith, which agrees with the view.
- The essay in *Modern Canterbury Pilgrims* (1956), pp. 36-37. The old entry set this
  remark after a sentence about 1939 and said "he then knew", so a reader took it for
  1939. The essay speaks of his years at school and university. The entry now says so.
  It also has what the old one left out: that Pascal did not sound like a clergyman.
- Ansen, p. 25, under February 1947: the aphorists, Pascal first; the untypical French
  writers he likes; no liking for Montaigne.

Three more sentences of *The Prolific and the Devourer* bear on Pascal and are not in the
list (pp. 34, 45-46, 73). They are described in `open` for the lead.

**Does the page show his view?** Yes. The first passage shows the heart given knowledge
and reasons (his "faculty he lacked" set over the other); the second shows dignity put in
thought (the faculty he had); the third is the reckoning he objects to on pp. 46-47 and
p. 178.

## 6. The reason and its ground, tab by tab

Each caption and `why` was taken a sentence at a time. Word counts after the mends:
captions 98 to 110, each `why` 36 to 40.

### heart / Reasons

All sentences stand. Plate: w4, w6 and the three later singulars (90.0 w62; 92.0 w10,
w23). Source: Littré; Brunschvicg's text and his note 145 (the clause "en surcharge").
Changed: two sentences joined so that the caption says the singular returns three times
below, which is what the marks show. I enlarged the edition's transcription image of
page 8: the first writing has only the plural, then a struck false start, then the
French of the second sentence (90.0 w10-16); the clause with the singular stands above
the line. So "the play on the word came with it" is what the page shows. The ground now
records that. Auden: p. 47.

### heart / French

Found: (1) "Pascal's French words are words of knowing and perceiving" covered three
words, and the first sense Littré gives for one of them is to feel; (2) "a faculty, in
Auden's word for it, like the reason" used Auden's word to carry the poet's inference
that the heart is a way of knowing; (3) "Fragment 282 says so outright" gave no word of
that fragment.

Read Brunschvicg's French of 282 against the hosted block 100: where Trotter has
"intuitive knowledge" (words 130-133) and "intuited" (165-167), Pascal's verb is the one
behind word 5 of 92.0, with the heart as its subject. So the same verb is his verb for
the heart's knowledge of first principles. The caption now goes: each English word and
the French behind it; fragment 282's use of the verb; so the heart here knows as well as
loves; Auden calls both faculties (which is all he says). The note on 92.0 w5 and a new
ground carry the place. Also: "Trotter, the translator," at first mention; "Five
fragments on" is now "In fragment 282" in the caption and in the first note (from the
word the caption had just named it is four on).

### heart / Against

All sentences stand on the plate, the text and p. 47. Two changes. "In French the
fragment is one sentence" is true of Brunschvicg's text (two colons); the modern
edition's transcription sets the note as three sentences, so the caption now says "in
the French edition used here". It opens "The second fragment, 278," because nothing on
the passage shows which paragraph is which (see "Beside the artist").

### heart / Page

Found: "Both fragments were written around the wager" and, in the `why`, "notes written
around a late exchange of the wager". The editors of the electronic edition say the
opposite of what a reader would take from that: the texts on these pages other than the
wager are isolated notes, set in the margin, under a ruled line or head to foot, and no
part of that discourse (head of the transcription page; *Genèse du texte*, section 8 and
the closing note). The caveat already said so; the caption did not.

Now: both fragments stand on one of the four manuscript pages of the wager, one in the
margin and one upside down at the top; the main text there is late in the dialogue;
modern editors count the two as separate notes and judge which came first; the printed
arrangement is an earlier editor's. `why` rewritten to match; a ground added; the text
ground corrected to the words that are the main text of page 8 (`s03` block 146 words
48-62 and block 147 words 0-67; the first part of block 146 was written on page 7).

The facts were checked against the transcription image (the four places), the *Genèse*
(the order), the hosted text (each fragment's number, section and matter) and
Brunschvicg's introduction (fourteen sections, his own arrangement). One label changed:
the fifth piece said "lovable and happy together", which is the French; Trotter's
sentence, which a click opens, has "altogether", so the label is now "lovable and
happy". No key was renamed or reshaped.

### reed / Reed

Stands: plate (w0, w3-4, w5-10, w14-16, w15); text (the order of the paragraph);
Brunschvicg's note 20 to Section VI (a memory of Montaigne, quoted with omissions). The
last sentence, Auden's feeling for Pascal like Pascal's for Montaigne (p. 47), hung
loose: nothing on the page said what Pascal felt about Montaigne. Added from the book
itself: a note of Pascal's headed with Montaigne's name begins by calling his faults
great (fragment 63, `s02` block 11 words 0-3), with a link in `stands`. The quotation
from Montaigne is shortened to what the editor's note quotes. `join` set (section 3).

### reed / Verbs

Found: "to the universe and to small parts of it" (the two things are named, w27-32;
"small parts" was a gloss); "Man receives them, four times as him" (the first verb's
object is the universe itself, w23; the four are w26, w36, w44, w55); and the step from
Pascal's conclusion (all dignity is in thought) to Auden's word (reason) was made without
saying whose word is whose. Now: the verbs belong to the universe, or to the two small
things named at w27-32; four times their object is the man; and the caption says that
thought is Pascal's word and reason is Auden's word for the faculty Pascal possessed. The editor's gloss on *noble* is note
21 ("d'un genre plus élevé").

### reed / Crossing

Stands as written: plate; Brunschvicg's text of 348 and notes 26 (the opening words
added) and 28 (the literal sense against the figurative); Littré; the electronic
edition's page for the fragment, which marks the same addition. Two words changed: "The
two parties" is now "The two", and "the editor" is "the French editor".

### wager / Voice

Found: "Three short statements shut that door" and "a point ticked off aloud" (figures
of speech of the poet's); "eighteen times in 126 words" (a count of the translation
given as if of Pascal); and in the `why`, that Auden "doubted its truth" (he asks whether
such accounts are true, and says what his own choices were like).

Counted again by script: in 144.0 words 0-125, *you* 11 and *your* 7, no *I*. Counted in
Brunschvicg's French of the same stretch: *vous* 8 and *votre* 7, no *je*; three of the
English uses stand for impersonal French. The caption now gives both counts, says
"Three statements rule that out" and "one point called settled", and keeps to what Auden
says (*The Dyer's Hand*, p. 103). The added sentence (w87-91) is above the line in the
transcription of page 4, which I enlarged. A caveat now says three of the eighteen are
Trotter's.

### wager / Pairs

Found: the last sentence said Pascal's own word "for refusing the bet" is *imprudent*.
At `s03` block 144 words 196-214 the word is said of the player who, forced to play,
will not stake one life to win three. The caption now says that. Everything else stands:
plate (three headings, four pairs); text (words 68-94 settle reason's side and turn to
happiness); Brunschvicg's notes and the page 4 transcription (the first and last pairs
are additions); Auden, p. 178 (the word suggests prudent calculation).

### wager / Scales

Found: "Pascal names the scales himself" (he uses a verb, w97; no scales are named: that
is the tab's label); "The manuscript shows the balance being made" (an interpretation);
"a struck-out start asks only what is lost" (the struck words go straight to the case of
losing; they ask nothing); "prudence will back the second" (Auden's own image is a bet).

Now: his verb is to weigh; in the manuscript a struck-out start went straight to the
case of losing, and the words for weighing and w114-117 were added above the line (page
4 transcription, enlarged; Brunschvicg's note); Auden's sentence ends with the prudent
man betting on the second God (pp. 46-47; the bet itself falls on p. 47).

### wager / Game

Found: "The game is there because the proof is a gambler's rule". No source says why the
game is there; it was the poet's. Cut. Also the gloss of *croix* (section 4), and the
last sentence, which gave the value to the wager where Auden gives it to the word.

Now: the words are a voyage's and a game's; the coin; the reckoning goes by a rule the
next fragment names (`s03` block 153; Brunschvicg's notes to 234 and his commentary on
233 give the rule for dividing stakes and quote Pascal's treatise; the *Britannica* of
1911 has the letters with Fermat); people work for the uncertain at sea and in battle
(block 153); and what Auden grants the word (p. 178).

## 7. The prose

Read every printed string again and ran my own lint over them (dashes, "we", questions,
"not ... but", British spellings, filler, the checker's lists). Nothing left. American
spelling throughout; *vapour* stands only as a word of the passage.

## 8. The rules

- Words of the text in captions: single words and phrases of at most six words.
- Auden: two quotations, of 20 and 23 words. Three short phrases of his that the working
  notes used as place marks are now described, not quoted.
- Length: the first passage shows 91 words, the second 102, the third 126. The third is
  over the 110 that POET.md asks and under the checker's limit. It cannot lose words
  68-86 (the caption of Pairs leans on that sentence and the count of Voice covers it)
  and cannot end one sentence later. Left as it is; recorded in `open`.

## 9. The printed notes

- `where`, `about` and the list now mark titles with asterisks, which the page sets in
  italics (KIT-CHANGES, second mending). Seen in the pictures of 09:33.
- `about` names the translator, because four captions call him by name. One clause
  shortened to keep it under 90 words.
- `sources`: fragment 282 added to the French text; the pages of *The Prolific and the
  Devourer* now 29, 31 and 46-48 with the preface; the poem; *New Year Letter* by lines;
  the essay of 1956 and Ansen entered as read in snippets; Mendelson's book of 2017
  taken out, since nothing rests on it now.
- `stands`: rewritten wherever a ground changed. One to four sentences each, 28 to 66
  words.
- `caveats`: five. The first now covers all four things read only in snippets; the
  second covers Pearce and Ansen; the third adds the three uses of *you*. The old
  sentence about whose voice speaks in *New Year Letter* is gone because the entry now
  says it is the Devil's.
- The date of Trotter's translation (1904) and that it follows Brunschvicg's text were
  confirmed in the note of a scanned Everyman's Library printing (snippets).

## Beside the artist

The artist began at 08:05 UTC and wrote `site/js/pieces/pascal.js` and `art.md`. I
changed `reading.json` only by exact edits and read the file again before each round.
The script reads the facts when the page runs; the one label I changed shows in the
picture of 09:33.

From `art.md`, read as information:

- The two joins: set (section 3).
- Titles not marked: marked.
- French words in the glosses and notes of French and Game not marked: left. The page
  does not take mark-up there yet. Recorded in `open`.
- Nothing on a passage shows where one fragment ends: the caption of Against now says
  which fragment it means. No other caption leans on it.
- The order of the eight pieces is the editors' inference: the lens's `what`, the
  caption, the `stands` and a caveat all say so. No change.

## Sources I opened

- The hosted text, with `show.mjs` and `words.mjs`: every block named above.
- *Œuvres de Blaise Pascal*, ed. Brunschvicg, on French Wikisource: Sections II, III,
  IV, VI, VII and IX (fragments 63, 89, 227, 231, 233, 234, 277-279, 282, 347, 348, 477,
  542, 606, with their notes) and the introduction on the fourteen sections.
- Descotes and Proust, *Édition électronique des Pensées de Blaise Pascal*: the
  transcription page for manuscript page 8 with its notes; the transcription images of
  pages 4 and 8, enlarged; the *Genèse du texte* of the wager; the pages for
  Brunschvicg 348 (their Grandeur 9, paper RO 165-1) and 347 (their Transition 5, paper
  RO 63-6, and Transition 6, whose original paper is lost).
- Littré at littre.org: the ten entries of section 4 and *antanaclase*.
- *Silva Rhetoricae*: the five figures.
- *Encyclopædia Britannica* (1911), "Pascal, Blaise", on English Wikisource.
- A scanned Everyman's Library printing of the translation (Internet Archive, snippets):
  its note on the translator.
- Auden: the scans of *The Dyer's Hand* and *Forewords and Afterwords*; Pearce in
  `A_pearce_gap2.txt`; snippets of the Internet Archive scans of *The Prolific and the
  Devourer*, *New Year Letter* (Faber, 1941), *Modern Canterbury Pilgrims* (Mowbray,
  1956) and Ansen's *Table Talk* (Faber, 1991); the scan text of *The Collected Poetry*
  (1945).
- `remake/research/C_auden_on_works.md`, section 11, and `E_pd_pearce.md`, section 1.1.

## Still doubtful

1. *The Prolific and the Devourer*, *New Year Letter*, the essay of 1956 and Ansen were
   read in snippets of OCR, not on full pages. Page numbers rest on foot lines and
   running heads that fall inside the snippets. A lead with the books should confirm
   pages and the punctuation of the quotation. (First caveat; `open`.)
2. The manuscript was not seen. Additions and struck words come from Brunschvicg's notes
   and from the electronic edition's transcriptions. The order of writing on page 8 is
   those editors' inference.
3. Pearce's and Ansen's notes are not Auden's own text. (Second caveat.)
4. In fragment 278 the French verb can be taken simply as to feel; the caption's
   reading leans on Littré's sixth sense and on fragment 282. (Third caveat.)
5. Entry 5 of the list keeps two places where Pascal is only named in passing. A lead
   who wants a shorter list could cut the entry: the tab Reed cites the first place
   directly.
6. The third passage is 126 words.
7. No French text is set beside the English; the French words are named in captions and
   glosses. `open` says what a lead could do.
8. The tab Crossing shows no crossing on a phone, and the long strokes of Pairs and
   Scales run nearly level across a line end. Both are the kit's, reported by the
   artist.
9. The poem "Pascal" is given in one sentence; that it was written by August 1939 is
   Mendelson's statement. "A Preface to Kierkegaard" (1944), cited in the research
   notes, was not checked and is not used.
10. That Trotter's numbers match Brunschvicg's up to 513 and then run one behind was
    checked at ten fragments (511 to 517, 541, 603 and 605), not at every one.
