# Phèdre: the poet's notes

Piece `phedre`, "Racine's line". Three passages of the French, each with
Boswell's English of 1890 set beside it. Ten tabs in all. The checker
ends "no problems / no warnings / the printed notes are fit to print"
(last run after the final change; see the end of this file).

Nothing in this file writes out a line of the play or a sentence of
Auden. Places are given by act, scene and line, or by row and word
number as `check-reading.mjs phedre` prints them.

## 1. The point of view

Auden wrote no essay on *Phèdre*, and there is no record of what he said
about it in the 1941 class (research note C, section 12). What he did
write stands in four places, all read in the scans on 2026-10-03:

| where | what he says there (my words) | scan lines |
| --- | --- | --- |
| "Writing", *The Dyer's Hand*, p. 24 | French poets more given to wanting poetry like music; sound effects count for more in French verse; the English keep poetic speech near everyday speech | dh.txt 1518-1537 |
| the same, p. 25 | French poetry prides itself on its distance from ordinary speech; in French drama verse and prose are different languages; Rachel's two octaves (from Valéry); reading Racine silently is like reading an opera score; no adequate notion of *Phèdre* without a great performance; the sentence quoted in `view.quote`; Euripides' Aphrodite against Racine's Venus; nobody in Racine sneezes; no weather, no nature | 1544-1587 |
| the same, p. 26 | so the passions exist only on stage; no speaking voice can compete with a singing voice and orchestra | 1590-1595 |
| "The Globe", *The Dyer's Hand*, p. 176 | tragedy in a Christian society; no noble sinner; Shakespeare and Racine give the sinner noble poetry, a conjuring trick; told by a journalist Phèdre is a pathological case; the poetry is a robe | 8303-8328 |
| "Two Bestiaries", *The Dyer's Hand*, p. 297 | verse that only counts syllables is hard for an English ear; an English ear hears most alexandrines as anapaests, which English associates with light verse (the second quotation); he quotes line 629 and Byron's line; in Racine at least all lines have twelve syllables | 14088-14098 |
| "Un Homme d'Esprit", *Forewords and Afterwords*, pp. 358-59 | no Englishman hears French verse rightly; he knows the rules academically and still hears anapaests; he knows it is wrong; English forbids anapaests for tragic subjects; an Englishman at the Comédie Française finds Racine comic | fa.txt 17000-17044 |
| the same, p. 364 | French poetry lacks formal variety to an English poet; a form is used up by two or three masters | 17318-17324 |

Two things about the pages.

- In dh.txt the running head stands at the top of its page. The head of
  p. 25 is at line 1538 and that of p. 26 at line 1588. So the paragraph
  on French poets and music (1518) is on p. 24, and the sentence about
  sneezing (about 1581) is on p. 25, not p. 26 as research note C,
  section 12 has it. I cite pp. 25-26 for that entry and say so in `open`.
- In fa.txt the page number stands at the foot. Two things show it: the
  contents page (line 129) gives 358 as the first page of the essay, and
  the numbers run 357 (line 16993, just above the essay's title), 358
  (17023), 359 (17079), and so on to 364 (17326), one at the end of each
  page of text. So the first page of the essay is 358; Byron's line, the
  admission that his hearing is wrong and the Comédie Française (lines
  17030 to 17044) are on 359; the passage on formal variety (17318 to
  17324) is on 364. The scan of this book drops most punctuation, so I
  quote nothing from it. His example of the rhythm in this essay is a
  line of Baudelaire; the line of *Phèdre* is quoted only in *The Dyer's
  Hand*, p. 297.

The piece quotes Auden twice (15 and 19 words; both matched word for
word against dh.txt by a script). Everything else is paraphrase. I
tested every string of the reading against the two scans for shared
runs of five words or more: what is left is the two quotations, the
title of the book, and the phrase "at the end of a line".

Not read by me, and marked so in `checked`, `caveats` and `open`: the
Table Talk remark of 1947 and Charles Miller's memory that Auden
disliked Racine. Both come from research note C (section 12, appendices
H7 and H10), which had them from search snippets. The same note (its
appendix of extracts, at "RACINE (Prose II ...)") records two passing
comparisons from the 1940s: Racine set beside Shakespeare, in a piece on
Shakespeare the note could not identify, and Racine set beside
Baudelaire, in the introduction to his Tennyson selection (1944). The
first rates Racine very high, which sits oddly with the two reports
above. I left both out: the note gives no page for either, and neither
is about *Phèdre*.

## 2. Why these passages

All three are shown in French (the cut of the Firmin-Didot text of 1854
from French Wikisource, made with `original.mjs cut` into
`o-phedre/a1s1`, `a1s3`, `a2s5`) because Racine's own line is the point
(POET.md, "Whose verse it is"). Boswell's blank verse does not follow
the French line for line, so the pair has a different number of rows and
the page sets it as a block beside the French.

**First passage, Act 1, Scene 1, lines 34 to 38** (Hippolyte's answer,
three lines, and the first two lines of Théramène's reply). The lead
"the line made of two proper names" is line 36. It is the plainest place
to learn the count: a line that is nothing but her parentage, with the
cut between the two names. The next two lines supply the name itself, so
the figure (a description in place of a name) can be seen whole. Boswell
puts the bare name where Racine has the line of descent, which is the
difference Auden describes between English and French verse.

**Second passage, Act 1, Scene 3, lines 273 to 278** (Phèdre to Œnone).
The lead "Phèdre's first account of her love". Six lines in which each
thing that happened to her takes a measured part of a line, and the last
couplet names Venus as the cause. This is where Auden's "pathological
case" and "robe" can be set beside something visible: a list of symptoms
in exact halves. His remark on Racine's Venus bears on the last two
lines.

**Third passage, Act 2, Scene 5, lines 623 to 630** (Phèdre to
Hippolyte). The lead "the declaration". I took the eight lines that end
with the line Auden himself quotes (629) and the line after it. They
hold the turn from "he is dead" to "I see him", the sentence that breaks
off, and the verb of the last line, where the passion and not the woman
is the subject. Line 629 is also the best single place to test Auden's
hearing against the French rules.

The fourth lead ("how few different words Racine uses") is not a tab.
A count of the French gives about 14,260 words in 2,785 different
spelled forms, but spelled forms in French (every verb ending is a
separate form) cannot be set fairly beside an English count, and no
source I read gives a comparable figure. The repeated verb for seeing in
the third passage (four forms in eight lines) and the word for blood (36
times in the play) carry the point as far as it can be shown honestly.

## 3. The scansions

Rules followed (Kastner, *A History of French Versification*, 1903, read
in a scan of the book: p. 1, pp. 4-5, p. 82, pp. 89-92):

- twelve counted syllables; the cut after the sixth, which must be an
  accented syllable ending its word; accents fixed only on the sixth and
  twelfth; all other accents free and slight;
- a mute e at the end of the line is not counted; inside the line it is
  elided before a vowel, whatever stop stands between, and counted
  before a consonant; a feminine word may stand before the cut only if
  its e is elided into a following vowel;
- verb endings in -aient are one syllable and masculine.

Notation. `meter` is `...../...../` for every row (dots for counted
syllables, a stroke at the two fixed accents; the dot makes the page key
the rule as a count). In `voice`, `/` is kept for the sixth and twelfth,
`\` marks the lighter accent inside a half-line, `x` an unaccented
counted syllable, `~` a mute e that is not counted, and ` | ` the cut.
All 19 rows count to twelve (checked by the generator and by the
checker). The syllable divisions (`div`) were built from the exact
tokens.

Kastner himself says (p. 2) that no two readers would always agree in
the accents of the same passage, and (pp. 91-92) that the secondary
accents are often almost imperceptible beside the pause in the middle.
The second caveat of the reading says as much to the reader.

Where I was unsure, and the other way of hearing it. The numbers are
syllables of the line. No caption leans on any of these.

| passage, row | marked | the other hearing |
| --- | --- | --- |
| first, 0.0 (line 34), second half | 4 + 2, light accent on the 10th | an accent on the 7th as well (the first word of the half can take one), giving 1 + 3 + 2 |
| first, 0.1 (line 35), first half | 2 + 4, light accent on the 2nd | no inner accent at all: the conjunction is weak |
| first, 0.2 (line 36), second half | no inner accent: one group of six | a light accent on the 9th, the first syllable of the name |
| first, 1.1 (line 38), first half | accents on the 1st and 3rd, then the 6th | only the 1st and 6th, or only the 3rd and 6th |
| third, 0.0 (line 623), first half | 4 + 2 | 3 + 3, with the accent on the verb. If heard so, this line too is four threes |
| third, 0.3 (line 626), both halves | 3 + 3, then 4 + 2 | second half 2 + 4, accent on the verb |
| third, 0.4 (line 627), first half | 2 + 4 | a further light accent on the 5th (the negative) |

Because of the doubt in the third passage, row 0.0, the Ear caption does
not say that every earlier line divides otherwise than in threes. It
says that four of the six lines before line 629 open with a group of two
(rows 0.1, 0.2, 0.4, 0.5), and each of those four openings is fixed by
the syntax: a vocative before a colon, an adverbial phrase, a question,
an adverb.

Solid, and leaned on: the four threes of line 629 (third passage, row
0.6: a stop after the 3rd, 6th, 9th and 12th syllables in both the 1854
and the 1697 texts); the four threes of lines 273 and 276 (second
passage, rows 0.0 and 0.3: clause and phrase boundaries); a phrase
ending on the sixth syllable in each of lines 273 to 278.

Elisions that a reader might question, each by Kastner's rule that a
stop does not prevent elision: the end of the fourth word of line 38
into the next word, across a comma, at the cut; the enclitic pronoun of
line 627 into the next word, across the question mark; the end of the
sixth word of line 629 into the next word, across the semicolon, at the
cut.

## 4. The figures

- **Periphrasis** (first passage). Silva Rhetoricae: the substitution of
  a descriptive word or phrase for a proper name. Line 36 is that.
  Silva gives the same definition under antonomasia and cross-refers; I
  used the commoner name. Hippolyte has in fact used her name once, at
  line 26, eight lines before; the caption says only that he answers
  without it.
- **Asyndeton** (second passage, line 273). Silva: omission of
  conjunctions between clauses, often with a hurried rhythm or vehement
  effect; its example is Caesar's three verbs. Three clauses, no
  conjunction. The contrast in line 276, where each of two verbs has its
  own conjunction, is what Silva calls polysyndeton; I did not name it
  (one figure to a tab) and took the effect from Littré, *et*, sense 4.
  In the marks the two verbs of line 276 carry no label, because the
  page numbers every label of a list and they are not part of the list.
- **Aposiopesis** (third passage, line 629). Silva: breaking off
  suddenly in the middle of speaking, usually to portray being overcome
  with emotion. The clause about her heart has a subject and no verb.
  The dots are in the 1697 text as well. The words just before, in line
  627, are a self-correction (Silva: correctio); marked and labeled, not
  named. The same tab marks the verb for seeing in its four forms (lines
  623, 624, 628, 629), because the caption's reason is that this verb
  carries her to the point where the sentence breaks. A word repeated in
  different forms is what Silva calls polyptoton; I did not name it, to
  keep one named figure to the tab. The figure the tab is named for is
  the mark tagged "break" and nothing else.

## 5. Where each fact was read

All opened in this session.

- **The French text and its line numbers**:
  `.cache/originals/racine_phedre_fr_wikisource.txt` (French Wikisource,
  Firmin-Didot 1854), through `original.mjs show`. Line numbers by my
  own count of the verses, a verse shared between speakers counted once:
  1,654 lines, which agrees with research note D.
- **The preface and the list of persons**: the same file. The preface
  says: she is neither wholly guilty nor wholly innocent; destiny and
  the anger of the gods draw her into a passion she is the first to
  abhor; she would sooner die than declare it; when forced to disclose
  it she speaks with a confusion that shows her crime to be a punishment
  of the gods more than a movement of her will; the passions are shown
  only to show the disorder they cause.
- **The 1697 edition**: theatre-classique.fr (text established by Paul
  Fièvre from the Barbin edition of 1697), fetched once. Compared with
  the 1854 text stop by stop for all 19 lines: the words are the same;
  the punctuation differs in lines 34, 37, 273 to 278, 624, 625 and 628
  to 630. Line 34 has its full stop at the cut in both. Line 629 has
  four stops and the dots in both.
- **Other places in the play** (for the `text` grounds): lines 29 to 33
  (Théramène's question), 249 to 258 (Venus, the mother, the sister, the
  last of the blood), 1277 to 1280 (Minos). In Boswell: `phedre/act-1`
  blocks 98, 102 and 106, and `phedre/act-4` block 95, seen with
  `show.mjs`.
- **Boswell's English**: `phedre/act-1` blocks 12, 14 and 126;
  `phedre/act-2` block 91. Rows 91.7 and 91.8 are one ten-syllable line
  printed as two. Syllables of his three lines for line 34 to 36: 4, 10
  and 5.
- **Kastner** (scan of the 1903 book at archive.org, pages by its own
  running heads, which stand at the top of each page): p. 1 count and
  fixed accents; p. 2 readers differ in the other accents; pp. 4-5 the
  mute e (p. 4 at the line end, p. 5 elision before a vowel, which a stop
  does not prevent; his own scansions on p. 4 count the e before a
  consonant); p. 39 masculine and
  feminine rhyme; pp. 63-67 the rule of alternation and its history (p.
  65: recommended because poetry was thought of as meant to be sung;
  kept although poetry has long been parted from music); p. 82 the cut
  defined; pp. 89-90 the sense must pause at the cut, a rule binding
  until the nineteenth century; pp. 91-92 the half-lines divide 3 + 3,
  2 + 4, 4 + 2; the inner accents are slight; 3 + 3 preponderates and
  gives the classical line its pendulum-like swing and its name for
  monotony.
- **Littré** (littre.org, the edition of 1873-74), one page an entry.
  Entries that quote the very lines shown: *voir* 1 and *pâlir* 1 (line
  273), *transir* 3 and *brûler* 11 (line 276), *feu* 42 (line 277),
  *respirer* 2 (line 627), *déclarer* 5 (lines 629-630), *égarement* 3
  (line 250). Other senses used: *entendre* (the first word of line 37),
  *rougir* 3 and 6, *et* 4, *reconnaître* 1, *redoutable*, *sang* 8,
  *poursuivre* 1 and 3, *inévitable*, *croire* 4, *égarer* 7 and 8,
  *ardeur* 1 and 4, *fou* 6, *malgré* 1, *confusion* 5 and 7.
- **Silva Rhetoricae** (rhetoric.byu.edu): periphrasis, asyndeton,
  aposiopesis; also read and not named in a tab: antonomasia,
  polysyndeton, correctio, epanorthosis, polyptoton.
- **Baum** (`.cache/handbooks/baum-versification-pg21342.txt`): chapter
  4, part 1 ("The Line"), where a stanza of Byron's poem on Sennacherib
  is the example headed "Four-stress anapestic" (Baum names the poem;
  Auden quotes its first line without naming it); the glossary under
  Anapest; chapter 4, part 3, on blank verse as the line of nearly all
  the Elizabethan drama.
- **Counts**, on the French file with the one stray fragment dropped (a
  word and a stage direction in Act 5, Scene 5, printed as a line of its
  own): 1,654 lines in 827 couplets; 414 couplets end on a mute e and
  413 do not; both lines of every couplet are of the same kind and no
  two neighboring couplets are alike. The word for blood, as spelled,
  36 times. These were counted again after the reading was written.

## 6. Looked for and not found

- Any record of Auden on *Phèdre* in the 1941 class.
- A full copy of Ansen's Table Talk or of Miller's memoir.
- The 1694 Académie dictionary: I could not get an entry out of its
  search pages. Littré cites Racine's own lines for almost every sense
  used, so nothing rests on it.
- A source for the common remark that Racine's vocabulary is small, with
  a figure that could be checked. None read; no tab is built on it.
- A printed scansion of these particular lines by a French metrist. The
  lighter accents are mine, by Kastner's rules and his own scanned
  examples from *Athalie* (p. 92).

## 7. What I changed after reading the proof and testing each sentence

- A caption said the first passage's reply was "the first word of his
  second line"; the page shows no speakers' names for the French (the
  cut tool makes verse blocks only), so the `about`, the heading, a
  numbered remark and the captions now say which lines are whose.
- "Twenty lines earlier" in the Words caption was wrong (the lines are
  20 to 28 lines earlier). It now says "earlier in the scene".
- "So he is dead" was more than the lines say at that point. The caption
  now keeps to what they say.
- "The lines before it divide otherwise" leaned on a doubtful accent in
  line 623. Replaced by the count of lines that open with a group of
  two.
- A tie said Boswell gives the broken clause "a line to itself"; it is
  half of one of his lines. It now says he ends it with a dash.
- A tie said "against my will, in both"; Boswell's phrase means
  "whatever I do". Corrected.
- "She does not declare it. It declares itself" was the forbidden turn
  of phrase. Recast.
- Racine's word *confusion* in the preface can mean shame as well as
  disorder; the caption now says so (Littré, senses 5 and 7).
- Several paraphrases of Auden, in captions, grounds and the `auden`
  list, kept runs of his own words. All were rewritten.
- The marks of the periphrasis and of the broken sentence were re-tagged
  after reading how the page draws a "pair", a "list" and a "chain".
- "Each clause takes three syllables" (the first tab of the second
  passage) was loose: the third clause runs on to the end of the line.
  It now says that each of the three verbs closes a group of three
  syllables, and the numbered remark says the same.
- "Hippolyte does not say" her name could be read as true of the whole
  scene; he says it at line 26. The caption now says he answers without
  the name.
- Two sentences in the `auden` list sat too close to his own (the
  admission that his hearing is wrong; the form used up by its masters),
  and one added a "so" he does not write (between the remark on
  anapaests and the remark on the Comédie Française). Rewritten.
- `open` said both passing comparisons came from pieces the research
  note could not identify. One is identified there (the Tennyson
  introduction of 1944). Corrected.
- The printed note under the Ear tab and the entry for Baum now name
  Byron's poem.
- The remark on the verb of line 629 in the last tab gave two of the
  senses Littré lists for it and skipped the one between (to let the
  mind wander, sense 8, under which "no longer master of one's reason"
  stands with the line from *Mithridate*). It now gives all three. My
  English for the verb in the captions ("I lose my way") keeps the first
  sense, which is the figure the French word still carries; a reader who
  prefers "my mind wanders" is not wrong, and the remark lets them see
  why.

The role files and the checker changed again at 05:34 to 05:39 UTC (the
rule for two words joined by a dash). I read them again. No row of this
piece has such a word (the proof lists none with parts), so nothing
changed in the marks.

## 8. What the page looks like

I did not run `build/pieces.mjs`: it writes outside this folder. Two
ways of looking that write nothing into the project:

- `build/tools/shoot.mjs phedre --out <my scratch folder>` on the page
  as the lead's build of 05:38 UTC had made it, at 1280 and at 390.
- For the reading as it now stands: copies of `build/pieces.mjs` and
  `shoot.mjs` in my scratch folder, changed only so that the piece's
  data is written to and read from that folder, at 1280 and at 390.

What the photographs showed, and what I changed after them:

- All ten tabs draw. The French stands on the left under "Racine,
  1677" and Boswell on the right under "Boswell, 1890" (on a phone, one
  under the other).
- The scansion: a tick for each counted syllable, a long tick and a
  black dot at the sixth and twelfth, a small red dot at each lighter
  accent, a double stroke at the cut, a tie under an e that is elided
  into the next vowel. A mute e at the end of a line gets no tick and
  no tie. So the key's words for the tie ("it runs into the next") are
  true of every tie drawn; an earlier note of mine in `open` said
  otherwise and is corrected.
- In the line Auden quotes the four dots stand evenly, at the third,
  sixth, ninth and twelfth syllables, and in four of the six lines
  above it the first red dot stands at the second. The Ear caption's
  point can be seen.
- The numbered remark on the cut in the first line stood after the
  first word of the second half. It is now pinned to the word before
  the cut, and so is the remark on the cut between the two names.
- In the first passage's English tab the numbers ran 2, 1, 3 down the
  page. The ties are now in reading order.
- In the Break tab the four forms of the verb for seeing took the first
  color and headed the key, under the name of a figure they are not.
  The broken clause now comes first.
- In the Rhyme caption the bold word for "you" lit three places in the
  passage, since the word comes three times. It now names the two words
  that end the line.
- At 390 the fifth line of the third passage turns, and in the Rhyme tab
  the arc of the third pair then runs out of the passage on the right
  (the tool reports it). I cannot mend that from the reading; it is in
  `open` for the lead.
- In the list figure of the second passage the two verbs of line 276 are
  underlined in a second color with no entry in the key. That is by
  choice (see section 4); the caption names them.

## 9. The checker

`node build/tools/check-reading.mjs phedre` ends:

    no problems
    no warnings
    the printed notes are fit to print

No warning is left to answer.

## Taken out of the list of what Auden said

- **says:** Later in the same essay Auden finds French poetry short of formal variety, as an English poet sees it. A form such as the French twelve-syllable line, or the heroic couplet in English, he says, however good a vehicle at first, tends to be used up by two or three masters. Those who come after must find other forms or stay imitators.
  **quote:** none
  **source:** “Un Homme d’Esprit,” in *Forewords and Afterwords* (1973), p. 364
  **checked:** read in the scan of Forewords and Afterwords, research/auden/fa.txt, lines 17318-17324 (the page number 364 stands at the foot of the page), on 2026-10-03

## The finisher's changes after the critic (3 October 2026, 12:56 UTC)

At work from 12:35 UTC, after the critic (`critic.md`, closed at 12:32).
Nothing here writes out a line of the play, of Boswell or of Byron, or a
sentence of Auden. Places are given by passage, tab, row and word as the
checker's proof prints them, and by line of the scans. "Old" and "new"
are the site's own sentences.

Read first: `BRIEF.md`, `FINISHER.md`, `CRITIC.md`, `EXAMINER.md`;
`critic.md`, whole; `art.md`, sections 1, 2.1, 5, 6 and 7; `exam.md`,
sections 5, 6 and 9 to 15; `reading.json`, whole, with its `open` list;
this file from section 6 down; the proof; and the page as
`node build/tools/prose.mjs phedre` prints it (3,536 words after the
changes), read through once from the top.

### What was opened in this run

- *The Dyer's Hand* in the scan `dh.txt`: p. 25 (lines 1540 to 1575),
  p. 176 (lines 8296 to 8332), p. 297 (lines 14080 to 14102).
- *Forewords and Afterwords* in the scan `fa.txt`: pp. 358 and 359 with
  the footnote (lines 16996 to 17080), p. 364 (lines 17300 to 17332).
- Racine's preface, whole, in the French text the reading cites
  (`.cache/originals/racine_phedre_fr_wikisource.txt`, lines 1 to 20,
  one paragraph to a line), and the list of persons there (line 27).
- Paull F. Baum, chapter 4, the examples of the anapestic line
  (`.cache/handbooks/baum-versification-pg21342.txt`, lines 2843 to
  2849; the chapter begins at line 2341).
- *Silva Rhetoricae* under aposiopesis, fetched from rhetoric.byu.edu at
  12:43 UTC.
- Boswell's Act 1 as printed here, blocks 84 to 98
  (`node build/tools/show.mjs phedre act-1 84 98`).

### The five points the critic left for the lead

**1. The view, two phrases. Set.**

- Old: "… nobody could know *Phèdre* who had not heard it greatly
  performed" and "He also owned that …".
- New: "… nobody could know *Phèdre* without hearing a great performance
  of it" and "He also admitted that …". Seventy words, as before.
- Ground: `dh.txt` lines 1558 to 1563 (p. 25). He says there that
  reading Racine to oneself is like reading a score one can hardly play,
  and that no fair idea of the play is to be had without a great
  performance heard. `fa.txt` lines 17020 to 17038 (pp. 358 and 359):
  his ear takes the French line for an English measure, and he says he
  knows that hearing is mistaken. Both are written into `view.checked`.
- The critic's own wording of the first phrase was not used. Tested with
  `runs.py` it shares a run of four words with p. 25, and a near variant
  of it a run of five. The words set share no run of four with `dh.txt`,
  `fa.txt`, `ef.txt` or `pearce.txt`.

**2. Break: the preface on her confusion. Cut.**

- The preface does not bear the sentence for these lines. Its sentence on
  her confusion (first paragraph, line 5 of the file) names no scene and
  keeps a condition: when she is forced to disclose the passion. Its
  paragraph on Plutarch (line 17) speaks of this very scene in other
  terms: the report of Thésée's death gives her the occasion for a
  declaration of love that she would never have dared to make while she
  believed her husband alive. A declaration she dares is not a disclosure
  forced from her. Where she is forced is Act 1, Scene 3: the nurse begs
  on her knees and Phèdre gives way (Boswell, Act 1, blocks 88 to 90).
- Caption: the last two sentences are out. It now ends "Her next words
  are **Je m’égare**, I lose my way." I put "are" for the colon so that
  the caption does not close on a fragment. The reason that is left is
  the handbook's, printed in the key directly under the caption: the
  figure usually shows a speaker overcome by emotion.
- `why`: its second half is now "and her next words say she is losing
  her way; a handbook of rhetoric says the figure usually shows a speaker
  overcome by emotion." Ground for the handbook: *Silva Rhetoricae* under
  aposiopesis, opened in this run. It says what the ground says.
- `grounds`: the two that leaned on the sentence are out (the preface
  with line 630, and Littré under *confusion*). Five stand.
- `stands`: lost "and *confusion*" and "and Racine’s preface to the
  play". Four sentences.
- `sources`: *confusion* is out of the list of Littré's entries, since
  nothing on the page uses it now.
- `open`: the poet's note on the two senses of *confusion* is out, and
  the examiner's note on this sentence now says it was cut, and why.

**3. English, third passage: the closing sentence on the conjuring
trick. Cut.**

- It could not be tied to the marks without a new claim. The tab shows
  who acts in each version. Auden's remark on p. 176 (`dh.txt` lines 8312
  to 8316) is about noble poetry given to a sinner; it says nothing of
  who acts, and nothing of this line. It stays in the view and in the
  third entry of the list, so the page now says it twice, not three
  times.
- The caption ends on Hippolyte's answer (85 words). Its reason is the
  preface's, read in this run: she would rather let herself die than
  declare the passion to anyone (first paragraph), and in row 0.7 the
  passion is the subject of the verb (words 1 to 7).
- `why` lost its last clause, the ground from p. 176 is out of this tab,
  and `stands` lost its last sentence. Three sentences stand.

**4. Ear: the title of Byron's poem. Set.**

- Old: "It reminded him of Byron’s line on the Assyrian: …". New: "It
  reminded him of the line on the Assyrian in Byron’s “The Destruction of
  Sennacherib”: …". The caption is six words longer and within the
  limit.
- Ground: Baum, chapter 4, under the four-stress anapestic line, prints a
  stanza with Byron's name and this title under it (lines 2843 to 2849 of
  the handbook file). The stanza opens with the line Auden gives on
  p. 297 (`dh.txt` line 14097) and on p. 359 (`fa.txt` line 17030). The
  ground from Baum under this tab now says so. Neither page of Auden
  names Byron or the poem: the naming was the handbook's before, and is
  still.
- The line is typed nowhere. Auden gives it with one article different
  from Baum's printing; the page prints neither.

**5. Three of the critic's own changes. All stand.**

- *Change 1* (Count: the last two sentences in a new order, and
  "Phèdre’s father"). The caption now ends on the line that its `why`
  gives as the reason. The name is borne out by the list of persons (line
  27 of the French file) and by rows 0.2 and 1.1. Auden's sentence moved
  and did not change; it says what p. 297 says (`dh.txt` lines 14088 to
  14098).
- *The American spelling of the foot*, four places (changes 11 and 15).
  BRIEF.md sets American English for the site's own prose, the notes at
  the foot already had it from Baum, and a quotation keeps its own
  spelling. So that the tab agrees with itself I respelled the word in
  the `why` of the Ear tab too, which the checker reads as the site's
  prose. The grounds keep theirs.
- *The entry taken out* (p. 364). Read in the scan (`fa.txt` lines 17318
  to 17324): it is about what is left to later poets when two or three
  masters have used a form up. It names neither Racine nor the play, and
  says nothing of how a line here is made or heard. Nothing leans on it.
- The critic also named its *change 7* (one adjective for the robe).
  It stands: neither adjective is Auden's (`dh.txt` line 8327). The
  ground under Halves now has the caption's word.

Also tested, since the critic reworded them: the three sentences that
report the preface (the Figure tabs of the first and second passages,
the English tab of the third). Each says what the preface says.

The critic's other changes that put a word or a name where there was
none were read against the proof and the French file: change 2 (the
list of persons, line 27, has the words of row 0.2), change 8 (row 0.2,
one clause to each half) and change 9 (row 0.5, word 5: four counted
syllables of the six in its half). Changes 4, 5, 10 and 17 name what the
page already says elsewhere: the meaning of the joining word, what
Littré is, the gloss under the word, whose talk and whose dislike. None
says more than the sentence it replaced.

### Two notes in `open` brought up to date

The poet's note that a rhyme stroke ran out of the passage at 390, and
the examiner's that the piece must be built before it is judged, now say
that neither is so any longer. A last entry, "From the finisher", sums
up this section.

### The English tab of the third passage at 1280

In the critic's picture (`shots/phedre-slip-3-english-1280.png`, 12:26
UTC) the six remarks stand in one column beside the caption. It reads
well: the caption on the left, the remarks level with its first line,
the numbers running down in order. With the last sentence cut the
caption is two lines shorter, and the page pours the remarks under it
again in three columns, two to a column, as in the artist's pictures
(`shots/finisher/phedre-slip-3-english-1280.png`). That reads well too:
no remark is parted between columns, and the eye goes from the caption
down to remark 1. Which of the two a reader gets depends on the length
of the caption alone (see "For the lead").

### Points left as they are

- **Halves, the last sentence** (the critic's doubt 4: the journalist
  and the robe, said again). Left. With the English tab's closer gone,
  this is the one tab that sets a passage beside Auden's view of her
  poetry, and the lines it stands under are her list of what happened to
  her body. No sentence joins the two, and none should: nobody is cited
  for the join.
- **Rhyme, the last sentence** (doubt 6). Left. It names the words in
  rhyme and their meanings, which the marks show, and concludes nothing.
- **Four remarks that say again what their caption says** (doubt 7).
  Left. Each stands at a mark and shows where the caption's sentence
  points. I looked at the third remark of Count in the critic's picture
  (`shots/phedre-names-0-count-1280.png`): it sits at the cut of the
  third line, and to take it out would take a number off that line.
- **Meanings given in English with no mark** (`critic.md`, section 3).
  Left. CRITIC.md asks a mark for a word named as a word, and a meaning
  is not one. The piece does it one way throughout.
- **The list says again what the view and the captions say**
  (`critic.md`, section 5). Left. The list is for a reader who wants
  more, and each entry is used by a tab, the view or a warning.
- **Byron's line in the fourth and fifth entries of the list**, still
  without the title. Left. Those entries report Auden, who does not name
  the poem.
- **From `exam.md`, section 14.** Which of Littré's two senses the verb
  at `sight` 0.4, word 1, has: the reading gives both. The lighter
  accents: the second warning at the foot covers them. Ansen and Miller
  not seen in full: the sources and the fourth warning say so.
- **Not mine** (FINISHER.md, rule 5): the artist's turns for two rows of
  the English (`art.md`, 5.2), which the lead keeps, and the `join` of
  the Break tab (5.3). No `turn`, `join`, `heading`, `speakers`,
  `beside`, label or mark was touched. The piece has no script in
  `site/js/pieces/`, so there were no words of a drawing to mend.
- `exam.md`, `art.md`, `critic.md` and the sections above are other
  hands' records. I changed none of them.

### For the lead

1. **The kit: where the remarks of an English tab stand at 1280 turns
   on a few words of the caption.** Eighteen words less and the six
   remarks of the third passage's English tab went from one column
   beside the caption back to three columns under it (`plate.js`, the
   line that sets `keys-wide`). Both read well here. The next change of
   wording may flip it again.
2. **The preface has a sentence of its own on the scene of the third
   passage** (its paragraph on Plutarch: the report of the death, and
   the declaration she would not otherwise have dared). It bears on the
   first lines of that passage. I added nothing: a new sentence under
   the passage is a poet's choice.
3. **The Break caption now leaves its reason to the key under it.** If
   the reason should stand in the caption's own words, the handbook's can
   be said there as the asyndeton caption says its own. The ground was
   opened in this run.
4. **The kit: the two words the Break caption names at row 0.4 still
   part at their hyphen at 390** (`shots/finisher/phedre-slip-2-break-390.png`,
   the end of the caption's second line). The examiner's note stands.
5. **The kit: the key of the three Beat tabs** has a red row, "a stress
   somewhere else", for accents that this measure leaves free (`art.md`,
   2.1). Seen again in the Ear pictures.
6. **`exam.md` still counts eight entries in the list.** There are
   seven since the critic.

### The checker and the pictures

`node build/tools/check-reading.mjs phedre --print`, run after each set
of edits and last at 12:53 UTC, ends:

    no problems
    no warnings
    the printed notes are fit to print

It printed no warning, so there was none to read. Its proof differs from
the one before my changes only in the two lines that list what the Break
and English tabs stand on. `node build/pieces.mjs phedre` was run last at
12:53 UTC; it wrote the built copy of this piece and the index.

Edits: four lists in `finisher/` (`edits-1.json` to `edits-4.json`),
each applied with `build/tools/edit-exact.py`; the reading as the critic
left it is `finisher/before.json`.

Pictures, all in `shots/finisher/`, taken from 12:49 to 12:51 UTC with
every printed change in place (the edits after that touched `open`
only). The tool ended "nothing reported" each of its three runs. I opened
and looked at all eighteen:

- `phedre-page-1280-0.png` to `-4` and `phedre-page-390-0.png` to `-6`:
  the whole page, with the new view at its head and the shorter list of
  Littré's entries at its foot;
- `phedre-slip-0-ear-1280.png` and `-390`: the title sits in the
  caption and turns after "of" on a phone;
- `phedre-slip-2-break-1280.png` and `-390`: the caption ends on her
  next words, with the figure's name and its plain words directly under;
- `phedre-slip-3-english-1280.png` and `-390`: as said above.

Before any change I looked at four of the critic's pictures in `shots/`:
Count, Ear, Break and the third passage's English tab, all at 1280.

The permission system refused nothing.

## The lead after the finisher (3 October 2026, 13:05 UTC)

Read: the finisher's record above. Looked at: its pictures of the tabs
Break and English of the third passage at 1280, and my own of the
English tab at 320 and 390 (`shots/lead/`).

- **Accepted as it stands.** The cut in Break is right: the preface's
  sentence on her confusion names no scene, and the figure's reason is
  printed in the key directly under the caption. The English tab keeps
  the one sentence of the preface that the last line bears out.
- **Racine's own sentence on this scene** (the finisher's second point,
  from the preface's paragraph on Plutarch): not added. The English tab
  already pays with the preface once, and a second sentence of it would
  be said of the scene and not of the lines shown.
- **Two turns set in the English of the third passage**, as the artist
  proposed (art.md 5.2): `"p:91.1": 2, "p:91.4": 3` on the plate
  `slip`. The checker refused a turn on a row of the version; it now
  takes one (`build/tools/check-reading.mjs`, the test of `turn`). At
  320 px both lines now turn at their full stops; at 390 nothing
  moved. The copy before the change is `lead/before.json`.
- **For the kit, already reported by the artist:** where the remarks of
  an English tab stand at 1280 depends on the caption's length alone;
  a two-word phrase named in the Break caption parts at its hyphen at
  390; the red row in the key of the three Beat tabs.
- `exam.md` counts eight entries in the list of what Auden said; there
  are seven since the critic. It is the examiner's record of its own
  time and stays.
- The checker: no problems, no warnings, fit to print. The piece is
  through every stage.

## The lead in the last pass (3 October, 16:20 UTC)

A dictionary's headword after "under" in the folded notes and the sources is in
italics now wherever it stood bare in lower case, or is a word of another
language (item 2 of the last pass, 16:20 UTC; with it, a dictionary's name set as
the rest of the site sets it). Type only: no word changed. Edits in
`lead/edits-headwords.json`, the reading before in
`lead/before-headwords.json`; checker as before. The record is `review/remake/last-pass/RECORD.md`.

## The lead in the last pass: the measure's wording and the Word tab (3 October, 18:06 UTC)

One wording for the measure of a line, after Ariel's song, from the reader who went through every Beat tab (`review/remake/last-pass/measure/`; the lead's amendments are in `lead-apply.py` there, and the reasons in `review/remake/last-pass/RECORD.md`, item 1). A measure of stresses is named by its beats, by its syllables where the count matters, and by "the line beginning off the beat" or "on a beat". In verse measured by count an accent is a place the count fixes and a stress is what the voice does. "Light syllable", "weak", "the pattern", "the meter" and "scanned" give way to "unstressed", "where the measure has no beat", "the measure" and "marked".

Changed here: `slip`, tab Ear: caption, points, stands; one caveat. The edits: `lead/edits-measure.json`; the reading before: `lead/before-measure.json`. The checker says what it said before. No mark changed, and the new sentences were held against the five scans: no run of five.

The Word tab: its one tab named "Words" is named "Word", as on 36 other passages, the front page and Ariel's song (the site critic by word, labels, 5; the reading before: `lead/before-word-label.json`).

## The lead in the last pass: one form for the books many pages cite (3 October, 18:48 UTC)

Printed lines only, and no page number, year or title changed (the tool proves the page
numbers of every line are what they were): `review/remake/last-pass/tools/cite-forms.py`.
The forms: under an entry, `*Prose*, vol. II (2002), pp. …`; in a `stands` line, `*Prose*,
vol. II, p. …`; in the list of sources, `*Prose*, vol. II: 1939–1948, edited by Edward
Mendelson (2002)` the first time and the short form after; and wherever a page of it is
cited under an entry or in the list, `*The Enchafèd Flood* (1950; Vintage Books edition,
1967)`, since every page number of that book on the site is the Vintage edition's (the
one scan all the pieces were written from; its own front matter says so).

Lines changed here (1): `auden[6].source`.

The checker says of the piece what it said before. Copy before:
`lead/before-cite-forms.json`.

## The lead in the last pass: one wording for each figure (3 October, 19:55 UTC)

Each Figure tab says in one line under the figure’s name what the figure is. Laid side by
side, the 82 tabs gave the 17 figures that stand on more than one page a different line
on nearly every page. Each figure now has one line, with a tab’s own tail after “; here”;
anaphora, epistrophe, anadiplosis, parallelism and asyndeton keep one sentence whose number
and unit are fitted to the passage. No name, mark, caption or claim changed in this step.
Why and how: `review/remake/last-pass/RECORD.md`, “One wording for each figure”; the table
of lines is `review/remake/last-pass/figures/lead/lead_lists.py`.

Lines changed here (2):

- `plates[0].lenses[1].plain`, the plate `names`, the tab Figure (periphrasis):
  was “a description put in the place of a proper name”;
  now “the long way round: a description put in the place of a name”.
- `plates[2].lenses[2].plain`, the plate `slip`, the tab Break (aposiopesis):
  was “a sentence broken off before it is finished, usually to show a speaker overcome by emotion”;
  now “a sentence broken off in the middle, with the rest left unsaid”.

The checker says of the piece what it said before. Copy before:
`lead/before-figure-wordings.json`, with the list applied beside it.

## The lead in the last pass: the two speakers' names on the first passage (3 October, 20:16 UTC)

The French of `names` showed no speakers' names, because the tool that cuts an original makes
blocks of verse only, and the heading, the `about` and the captions had to say which lines are
whose. The plate now carries `"stage": { "0.0": { "name": 0, "text": "HIPPOLYTE" }, "1.0":
{ "name": 0, "text": "THÉRAMÈNE" } }`, as Carmen's and Tristan's plates do. The names are the
source's own (lines 98 and 104 of `.cache/originals/racine_phedre_fr_wikisource.txt`, checked
by script). No word index changes (`name: 0` takes no word from the row). The checker says of
the piece what it said before. Copy before: `lead/before-stage-names.json`. To look at after
the build: the plate at 1280 and 390 on all three tabs, and whether the captions still read
well now that the names stand on the plate.

## The lead after the word critic of the last pass (4 October, 00:08 UTC)

A critic read the lines written after the pieces' critics had read: the
figures' lines, the measures and the front page's cards. Its report is
`review/remake/critics/last-pass-words.md`; what the lead did with each
point is in `review/remake/last-pass/RECORD.md`. In this reading, exact
edits, each proved to change only the leaf it names (the file before is
`lead/before-last-pass-words.json`):

- `only the sixth and twelfth accents are fixed`
  became `only the accents on the sixth and twelfth syllables are fixed`

The checker says what it said before.
