# Phèdre: the examiner's record

Piece `phedre`, "Racine's line". Examiner started Sat Oct 3 07:49 UTC 2026
(`examiner.txt`) and closed this record the same morning, at about 10:30
UTC. Verdict: **mended**. The three passages, the ten tabs, the view
and every scansion mark stand as the poet chose them. What is said about
them, and how the lines turn on a phone, was changed in eighteen places,
listed in section 10.

Nothing in this file writes out a line of the play, of Boswell's English
or a sentence of Auden. Places are given by act, scene and line, or by row
and word number as `node build/tools/check-reading.mjs phedre --print`
shows them (`p:` marks a row of the English). French words named singly
are dictionary headwords.

## 0. State on arrival

- `reading.json` and `notes.md` as the poet left them at 06:08 to 06:09
  UTC. Three passages: Act 1, Scene 1, lines 34 to 38 (`names`); Act 1,
  Scene 3, lines 273 to 278 (`sight`); Act 2, Scene 5, lines 623 to 630
  (`slip`). Ten tabs: Count, Figure, English; Figure, Halves, Words; Ear,
  Rhyme, Break, English. No `site/js/pieces/phedre.js`.
- The checker ended: no problems, no warnings, the printed notes are fit
  to print. So nothing below was found by the checker. All of it came
  from opening the sources and reading the scenes.
- An artist began on the piece at 08:25 UTC (`art.md`) and says there
  that it does not edit the reading. I changed `reading.json` only by
  small exact edits and ran the checker after each group.
- The drawing code changed under the piece while I worked: the kit's
  fifth mending (08:35 to 08:55 UTC), its sixth (09:20 to 09:52 UTC,
  `remake/KIT-CHANGES.md`), and once more at 10:14 UTC. I read what was
  written of each and photographed the page again after each. What
  section 13 says of the page is of the last set.

## 1. The proof

Every line of the proof was read. Each mark sits on the word meant: the
five parts of the periphrasis; the three clauses and the two verbs of the
asyndeton figure; the eight glossed words; the seven parts of the Break
figure; the nine ties of the two English tabs; the rhyme tails (four
letters in the first pair, three in the others); the thirteen numbered
remarks of the three scansion tabs. No word that a dash joins to the next
carries a mark (the one dash in the pieces shown ends p:91.7 w1 of the
English).

## 2. The ear

I scanned all nineteen French rows by word number before reading the
poet's marks, by the rules of the classical twelve-syllable line as
Kastner gives them (section 11). Agreement on every row: twelve counted
syllables, a word ending on the sixth, the same elisions and the same
counted mute e's. The stated measure (twelve counted syllables, cut after
the sixth, an accent on the sixth and the twelfth) is the real measure of
all three passages.

| row | what decides the count |
| --- | --- |
| names 0.0 | w4 ends the sixth, at a full stop; line-end mute e (w9) not counted |
| names 0.1 | w4 ends the sixth; no mute e |
| names 0.2 | final e of w1 counted (a consonant follows); w3 ends the sixth; w6 has four syllables |
| names 1.0 | w3 ends the sixth; final e of w5 counted; line-end mute e (w7) |
| names 1.1 | final e of w0 runs into w1; that of w3 runs into w4 across the comma, so the sixth is the stressed syllable of w3; final e of w5 and of w6 counted; line-end mute e |
| sight 0.0 | stops after the third and the sixth; w4 ends the sixth; 3+3+3+3; line-end mute e |
| sight 0.1 | final e of w1 counted; w2 ends the sixth; final e of w5 runs into w6; line-end mute e |
| sight 0.2 | w3 is two syllables (its verb ending is one syllable: Kastner p. 18, rule XII, where this very line is an example); w4 ends the sixth |
| sight 0.3 | w4 ends the sixth; 3+3+3+3 |
| sight 0.4 | w2 ends the sixth; line-end mute e |
| sight 0.5 | w2 is two syllables, its final e counted; w3 ends the sixth; w5 has four counted syllables and a line-end mute e |
| slip 0.0 | w5 ends the sixth; final e of w7 counted |
| slip 0.1 | the mute e of w2 runs into w3 at the cut; final e of w6 counted |
| slip 0.2 | w3 ends the sixth; line-end mute e |
| slip 0.3 | final e of w1 runs into w2; w2 ends the sixth; final e of w4 counted; line-end mute e |
| slip 0.4 | the mute e of w1 runs into w2 across the question mark (Kastner p. 5: a stop does not prevent it); w5 ends the sixth; final e of w7 runs into w8 |
| slip 0.5 | w3 ends the sixth; no mute e |
| slip 0.6 | the mute e of w5 runs into w6 across the semicolon; stops after the third, sixth, ninth and twelfth syllables |
| slip 0.7 | final e of w2 runs into w3; w3 ends the sixth; line-end mute e |

The lighter accents inside each half are a reader's choice. In two places
I would as soon put one elsewhere (first half of slip 0.0, second half of
slip 0.3). No caption, remark or `why` leans on either; the second caveat
already tells the reader these accents are one hearing. The four lines
the Ear tab says open with a group of two (slip 0.1, 0.2, 0.4, 0.5) do so
on any hearing: each has a stressed second syllable before a break in
sense.

## 3. The terms, and what the page joins

- **Periphrasis** (names, Figure). Silva Rhetoricae: a descriptive word or
  phrase put for a proper name. Row 0.2 is such a phrase and row 1.1 w0 is
  the name. The gloss in plain words is right. Silva gives antonomasia as
  the same figure.
- **Asyndeton** (sight, Figure). Silva: conjunctions left out between
  clauses. Row 0.0 holds three clauses and no conjunction. Right. The
  doubled conjunction of row 0.3 is polysyndeton in Silva; the caption
  does not name it and rests what it says of it on Littré (*et*, sense 4).
- **Aposiopesis** (slip, Break). Silva: breaking off in the middle of
  speaking, usually to show the speaker overcome by emotion. Row 0.6
  w6 to w8 breaks off on dots that stand in both editions. Right. The
  gloss in plain words left out Silva's "usually"; mended (change 9).
- **What the page joins.** Built from scratch copies (section 13) and
  looked at each figure tab. Periphrasis: no strokes; the parts are told
  by color and key. Asyndeton: the three clauses are numbered 1 to 3. The
  two verbs of row 0.3 had no labels, so their color had no row in the
  key; mended (change 4). Break: the caption makes two pairs of the four
  forms of the verb for seeing, Thésée's (rows 0.0 and 0.1) and hers
  (rows 0.5 and 0.6). **Fault:** drawn as a chain with no `join`, the
  page showed both strokes at 1280, only the first at 390 and only the
  second at 360 and 320, since the kit (as mended by 08:55 UTC) leaves
  out a chain's stroke that runs far along between two lines. So which
  of the caption's two pairs was joined changed with the width. I set
  `join` to the two pairs by part number (change 14), and a joined pair
  is not left out for running far. The page still strokes only forms on
  the same row or on neighboring rows. As the kit stands at the end
  (section 13): both strokes at 1280; at 390, 360 and 320 row 0.1 turns
  at its cut, a half-line stands between the forms of the first pair,
  and that pair is told by color, as POET.md says of parts further
  apart. The stroke of the second pair is drawn at every width.

## 4. The words

All twenty-two Littré entries named in the reading were opened at
littre.org, and the sense behind each gloss was read:

- *transir* 3 (to be seized with cold) and *brûler* 11 (to be burning
  hot): both quote line 276.
- *feu* 42 (in poetry, the passion of love): quotes line 277.
- *sang* 8 (race, extraction, family).
- *poursuivre* 1 and 3 (to pursue; to persecute, to torment).
- *inévitable* (that cannot be avoided); *redoutable* (to be dreaded).
- *reconnaître* 1 (to call back to mind what one knows) and 2 (to know by
  some sign a thing never seen). **Fault:** the reading gave sense 2
  alone. Littré quotes line 277 under neither, and the scene bears sense
  1 at least as well (lines 249 to 258). Mended (change 6).
- *entendre* (the first-person form glossed as I understand well).
- *égarement* 1 and 3 (losing one's way; a disorder of the heart): sense 3
  quotes line 250.
- *voir* 1 (quotes lines 273 and 275 to 276), *rougir* 3 and 6, *pâlir* 1
  (quotes line 273).
- *et* 4 (repeated, it gives the phrase more force).
- *respirer* 2 (to live; said of one in whom a person seems to live
  again): quotes line 627.
- *croire* 4 (to think, to imagine).
- *égarer* 7 (to lose one's way) and 8 (to let the mind wander).
- *confusion* 5 (want of order or clearness) and 7 (the embarrassment
  that shame, or modesty, causes).
- *déclarer* 1 (to make known in express words) and 5 (reflexive: to be
  made manifest): sense 5 quotes lines 629 and 630.
- *ardeur* 1 and 4, *fou* 6, *malgré* 1.

Littré's examples are mostly of the seventeenth century, and several are
these lines, so each sense was current for Racine.

## 5. Auden

Each statement was found in the scan at the page given; the paraphrases
were set beside his sentences.

- *The Dyer's Hand*, "Writing", pp. 24 to 26 (`dh.txt` lines 1518 to
  1593; the running heads of pp. 25 and 26 stand at the top of their
  pages). On p. 24: French poets and music, sound in traditional French
  verse, English verse and everyday speech. On p. 25: French poetry and
  ordinary speech, Rachel, the opera score, the play unknown without a
  great performance, the sentence the view quotes (15 words, exact), the
  two goddesses, sneezing. On p. 26: the passions that exist only on
  stage; opera and the singing voice. **Fault:** the Rhyme tab weakened
  his sentence on sound; mended (change 8).
- "The Globe", p. 176 (`dh.txt` lines 8303 to 8328). **Faults:** the list
  entry gave Oedipus alone where he names Oedipus and Hippolytus, the
  hero of Racine's own source; and the Halves tab kept a run of his own
  words for the robe outside quotation marks. Mended (changes 11 and 5).
  He speaks there of Macbeth and Phèdre together, one a case for the
  police court and the other a pathological case; the reading keeps to
  Phèdre and says nothing of her that he does not.
- "Two Bestiaries", p. 297 (`dh.txt` lines 14088 to 14098): the quotation
  (19 words) is exact; the line he quotes is row slip 0.6.
- *Forewords and Afterwords*, "Un Homme d'Esprit", pp. 358 to 359
  (`fa.txt` lines 17000 to 17076; page numbers at the foot) and p. 364
  (lines 17318 to 17324). All as the reading says. **Fault:** his
  footnote on p. 359, on the pause inside the line, was not used, though
  it is his one remark on the fixed cut that two tabs show. Added
  (changes 5 and 12).
- The view (70 words) is his view of this play: each of its four
  statements is at pp. 25, 176 or 359, and the passages bear on it (the
  line as he mishears it; the ordered verse over a disordered passion).
- The two reports at second hand (Ansen 1947; Miller, p. 149) are as the
  research note C gives them (section 12 and its appendices), and its
  note A has Miller as a student in the class and Auden's housemate. They
  are marked as not seen in full in `sources` and in the fourth caveat.
- **The list.** Eight entries. Each bears on a passage shown or on the
  play; the entry for p. 364 bears on the form every passage shows. Two
  passing mentions stay out: "Tennyson" in *Forewords and Afterwords*
  (foot of p. 230, running on to p. 231: a parenthesis on verse technique
  that pairs Racine with Baudelaire; `fa.txt` line 11054) and the piece on
  Goethe's *Italian Journey* (p. 136; line 6561). The first is the
  comparison the poet could not place.
- **A test for borrowed words.** Every string of the reading was set
  against both scans for runs of words in common (`runs.mjs` in my
  scratch folder). The only runs of five or more are the two quotations
  (15 and 19 words), a book title and three commonplaces (such as "at the
  end of a line").

## 6. The reason and its ground

Each caption and `why` was taken a sentence at a time. Where nothing is
said below, the sentence stands on the ground the reading names and I
found it there.

**names / Count.** On the plate: twelve in each of five rows; the cut of
row 0.2 falls between the two names. Kastner p. 1 (count; the two fixed
accents), pp. 82 and 91 (the cut after the sixth; the voice rests).
**Fault:** the rule that a mute e counts before a consonant was laid to
pp. 4 to 5; it is rule VI on p. 7 (p. 4 is the line end, p. 5 the
elision). Mended (change 2).

**names / Figure.** Lines 29 to 33 (the question), line 26 (he has named
her eight lines before), lines 249 to 250 and 1277 to 1280 (what each
parent was), the list of persons in both editions (the same words as row
0.2), the preface (destiny and the anger of the gods). All there.

**names / English.** Syllables counted again: 36 in the French rows 0.0
to 0.2, 19 in p:12.0 to p:12.2. Baum, chapter 4, on blank verse. Auden
pp. 24 and 25. **Fault:** a closing sentence summed up what the two
versions "give"; it stood on nothing the caption had not already said.
Cut (change 3).

**sight / Figure.** Row 0.0: three clauses, each verb closing a group of
three. Row 0.3: each verb has its own conjunction. Silva, Littré, the
preface (the passions shown for the disorder they cause). **Fault:** the
`why` gave the hurried effect as a fact of the figure; Silva says
"often". Mended (change 4).

**sight / Halves.** A phrase ends on the sixth syllable in all six rows
(counted, row by row); rows 0.0 and 0.3 are four threes; row 0.2 has one
clause in each half. Kastner pp. 89 to 90 (the sense should rest at the
cut) and 91 to 92. Auden p. 176, and now the footnote of p. 359.

**sight / Words.** Lines 249 to 258 (the hatred of Venus; her mother; her
sister; herself the last of that blood). **Faults:** the gloss on w1 of
row 0.4 (section 4); "her fires" in my first mend could be read as
Phèdre's, and the fires are the goddess's; the count of *sang* (36) is
of the verse, and the word stands once more in the list of persons.
Mended (change 6).

**slip / Ear.** Auden p. 297 and pp. 358 to 359; Baum, chapter 4 (the
stanza of Byron as the example of the four-stress anapestic line) and the
glossary; Kastner pp. 91 to 92 (three and three preponderates; his phrase
"pendulum-like swing") and p. 1. **Faults:** the `why` called each of the
four threes a clause, and the third is a clause broken off; the third
remark said her account in Act 1 "began" with the clause of row sight 0.0
w0 to w2, and it begins four lines earlier, at line 269; a ground said
English poetry "keeps" the anapaest for light verse, where Auden says
only that the English link the two. Mended (change 7).

**slip / Rhyme.** Kastner p. 39 (the two kinds), pp. 63 and 67 (the
rule), pp. 64 to 65 (Ronsard and Du Bellay; song). The count was made
again (section 12 of this record gives the method): 827 couplets, the
kinds alternating without a break. **Fault:** Auden's sentence on sound
(section 5).

**slip / Break.** The verb for seeing stands at rows 0.0 w2, 0.1 w3 to
w4, 0.5 w6 and 0.6 w2, and nowhere else in the eight rows. Lines 623 to
629. Littré, Silva, the edition of 1697 (the dots). **Fault:** the
caption gave the preface's sentence on her confusion as if it were said
of this speech. The preface says it of whenever she is forced to disclose
her passion and names no scene. I kept the sentence, because line 630
says in her own words that the passion shows itself against her will,
and put its condition back. The ground now says what the preface does
not say. Mended (change 9).

**slip / English.** Littré *déclarer* 5 quotes these lines. The preface
(she would sooner die than declare it). Auden p. 176. **Fault:** nothing
told the reader that row 0.7 is not yet the avowal. Hippolyte takes it
for love of Thésée (lines 631 to 633), she agrees at first (line 634),
and she speaks plainly only at lines 670 to 673. The caption now says how
he takes it (change 10).

**`about`.** Lines 5, 44 to 45, 29 to 33, 264, 269 and 619 to 622.
**Fault:** it gave the second passage as her avowal to Œnone; the avowal
is at lines 262 to 264 and the passage tells how the love began.
Rewritten (change 1).

## 7. The prose

American English, present tense, no dashes inside sentences, no stock
words, nothing printed calls a part of the page a plate or a lens. No
printed string has a question mark now: the one there was stood in a
phrase of Racine's that a caption named (change 16). Lengths after the
mends: `about` 88 words; view 70; captions 110, 110, 92 / 109, 109, 110
/ 110, 110, 109, 100; every `why` 40 or under; every `stands` 69 words
or under and four sentences or fewer; what Auden said, 110 or under.

Titles of books and plays stand between asterisks wherever the page
reads asterisks (change 17). The name left bare in `about`, in the third
entry of what Auden said and in one `stands` is the woman's, not the
play's.

## 8. The rules

- Two quotations in copyright, 15 and 19 words, both exact in the scan.
- No line of the play or of Boswell is typed in the reading. Captions
  name single words and phrases of at most five words.
- The passages are five, six and eight lines.

## 9. The printed notes

The poet had written them for a reader and the checker found nothing to
do. I read each `stands` against its caption after the mends and changed
four so that they name what the caption now stands on (Count, Halves,
Break, English of the third passage). `sources` now gives Kastner pp. 1
to 7. The five caveats were left as they were: nothing I found needs a
new warning to the reader, and none is now out of date.

EXAMINER.md asks one to four sentences of each `stands`. Four had five
or six (Figure of the first passage; Rhyme, Break and English of the
third). Each now has four, by joining two of its sentences; the first
of them also says which line Littré quotes under *égarement*, the one
about her mother (the entry gives it as Act 1, Scene 3). Change 18.

## 10. What was changed, and why

1. **`about`** rewritten (88 words): the second passage is how her love
   began, after Œnone has named Hippolyte; Thésée's absence is given as
   the play gives it (line 5); Hippolyte "says he may live" (lines 619 to
   622).
2. **Count**: the ground for the mute e cites Kastner pp. 4, 5 and 7,
   with what each page says; `stands` and `sources` say pp. 1 to 7.
3. **names / English**: the closing sentence cut (caption now 92 words).
4. **sight / Figure**: the two verbs of row 0.3 labeled ("and go cold",
   "and burn") so the key has a row for their color; the `why` gives the
   effect as what a handbook says the figure often does.
5. **sight / Halves**: Auden's footnote on the pause added to the caption,
   the grounds and `stands`; his robe put in other words.
6. **sight / Words**: the note and the grounds give both of Littré's first
   senses of *reconnaître* and say that neither quotes the line; the
   caption says "known again or known by its signs" and gives the fires
   to Venus; the `why` follows; the note on *sang* says "in the verse of
   the play".
7. **slip / Ear**: the `why` says "each closed by a stop"; the third
   remark says the second passage opens with the same clause in the past
   tense; the last ground records lines 273 and 269; the ground from
   Auden says "links with light verse".
8. **slip / Rhyme**: Auden's sentence given at its own strength (sound
   has always counted for much more in traditional French verse).
9. **slip / Break**: the gloss in plain words follows Silva ("usually");
   the caption gives the preface's sentence with its condition and adds
   the words that follow the dots; the `why`, the grounds and `stands`
   follow; the key label for those words agrees with the caption.
10. **slip / English**: the caption says how Hippolyte takes the line; a
    ground for lines 631 to 633 and a link to his answer in `stands`.
11. **What Auden said, third entry**: Oedipus and Hippolytus; the
    sentence on the journalist kept to what he says of Phèdre.
12. **What Auden said, new sixth entry**: the footnote of p. 359.
13. **`open`**: twelve entries that begin "From the examiner".
14. **slip / Break**: `join` set to `[[1, 2], [3, 4]]`, the two pairs the
    caption makes (section 3).
15. **`turn`** set on five rows, each after the word that ends the sixth
    syllable: names 0.1 (after w4); sight 0.1 and 0.4 (after w2); slip
    0.2 (after w3) and 0.3 (after w2). Left to itself the page turned
    each of them one word off the cut at 320, and slip 0.2 at 360 too.
    The piece is about that cut, so a line that must turn should turn
    there (section 13).
16. **slip / Break**: the question mark taken out of the words the
    caption names at row 0.4 w0 to w1. French sets the mark off with a
    space, and at widths from 380 to 400 and at 1024 it began a line of
    the caption by itself. The named words still light their place.
17. **Titles and named words**: asterisks set round the titles in
    `where`, in the view and its `source`, and in the `says` and
    `source` of what Auden said (the play, the play of Euripides, his
    two books, Ansen's and Miller's), and round five words named as
    words in the small notes (the letter *e* three times, the word for
    here, Boswell's *race* and *him*), as the kit's sixth mending and
    KIT-CHANGES.md allow. The title of Byron's poem, a short one, stood
    between asterisks in `sources` and in the `stands` of the Ear tab;
    it now stands in quotation marks, as CRITIC.md sets the title of a
    short poem. No word was changed.
18. **`stands`** of four tabs brought to four sentences (section 9).

One sentence was cut outright. Elsewhere a caption was tightened only to
make room for what was added, and each is still within 110 words. No
lens was removed. No scansion mark, row, tie, rhyme tail, heading or
label of a tab was changed.

## 11. Sources read

- The French text: `.cache/originals/racine_phedre_fr_wikisource.txt`
  (the Firmin-Didot edition of 1854 as French Wikisource prints it; the
  index page there names the volume and the page, 241), with the preface
  and the list of persons. The scenes around each passage were read:
  Act 1, Scene 1, lines 1 to 56; Act 1, Scene 3, lines 238 to 316; Act 2,
  Scene 5, lines 581 to 674; Act 4, Scene 6, lines 1273 to 1290.
- The edition of 1697 at theatre-classique.fr (text by Paul Fièvre). Its
  printed line numbers (35, 250, 270, 275, 625, 630, 1280, 1650) agree
  with the reading's. The words of the nineteen lines are the same; the
  stops of line 629 after the third, sixth, ninth and twelfth syllables,
  the dots, and the full stop at the cut of line 34 are in both.
- Boswell as the site prints him: `phedre/act-1` blocks 12, 14, 98 to 106
  and 126; `phedre/act-2` blocks 89, 91 and 93; `phedre/act-4` block 95.
  The three links in `stands` lead to the blocks named.
- L. E. Kastner, *A History of French Versification* (Oxford, 1903), the
  archive.org text: pp. 1, 2, 4, 5, 7, 18, 39, 63 to 67, 82, 89 to 92.
- Littré at littre.org: the twenty-two entries of section 4.
- Silva Rhetoricae: periphrasis, antonomasia, asyndeton, polysyndeton,
  aposiopesis.
- Paull F. Baum, *The Principles of English Versification* (1922),
  `.cache/handbooks/baum-versification-pg21342.txt`: chapter 4 and the
  glossary.
- Auden: the scans `dh.txt` and `fa.txt`, at the lines given in section
  5. The research notes A and C for Miller and Ansen.

## 12. The counts, made again

On the French file, with a script of my own (`number.mjs`, `couplets.mjs`
in my scratch folder): 1,654 verses, 42 of them shared between speakers
and counted once; one stray fragment dropped, as the poet says. 827
couplets. By their endings 412 are feminine and 411 masculine. Four more
end in the letters -ent in both lines and were settled by reading them:
couplets 67 and 79 are plural verbs, where the ending is mute, so they
are feminine; couplets 208 and 704 are words in -ment, where it is
sounded, so they are masculine. That makes 414 and 413, and with those
four set, a test of every couplet against the one before it finds no two
neighbors of the same kind. The play begins and ends on a feminine
couplet. The word *sang* stands 36 times in the verse, never in the
plural, and once more in the list of persons.

## 13. The page

`node build/pieces.mjs` writes outside this folder, so I did not run it.
I photographed the reading from copies of the build script and the
photograph tool kept in my scratch folder. They differ from the
project's only in where they read and write, and I made them again from
the project's scripts each time those changed. Sets were taken on
arrival, after the mends, after the kit's fifth mending, and at the end.
The last set was taken from 10:15 to 10:18 UTC, with the reading as it
now stands, after the kit's sixth mending (09:20 to 09:52 UTC) and after
a further change to the plate code at 10:14 UTC that KIT-CHANGES.md did
not yet record when I closed. It is all ten tabs at 1280, 390, 360 and
320, forty pictures, and the whole page in slices. The tool reports
nothing at any of the four widths. The forty pictures are the same, byte
for byte, as the sets of 09:53, 10:05 and 10:14 UTC, so the change of
10:14 did not move anything in this piece at those widths. I looked at
every tab at 1280 and at 390, and at the Rhyme and Break tabs of the
third passage at 360 and 320. All ten draw as meant, and the marks of
changes 16 and 17 show as intended (the titles, and the named words
upright in the italic notes).

**Where the lines turn.** Photographs at four widths do not show every
phone, so I measured it. A script of my own (`lines.mjs` in my scratch
folder) opens the page as the photograph tool does and reads, for every
tab at 44 widths (every fifth from 320 to 480, and 393, 412, 414, 428,
540, 600, 768, 820, 1024, 1280 and 1440), after which word each line of
the three passages turns. It sets that against the word that ends the
sixth syllable in my own scansion (section 2). Before change 15, five
lines turned one word off the cut at 320, and one of them at 360. With
the turns set, no line turns anywhere but at its cut, at any of the 44
widths, on any tab. That was measured twice, from 09:55 to 10:03 UTC and
again from 10:18 to 10:26 UTC, after the kit's change of 10:14, with the
same result. The artist's own measure (`art.md`, section 3) agrees for
320 to 430. The checker takes a `turn` only for a row of the first
version, so where a line of the English turns on the narrowest phones is
not the reading's to set.

**The captions and the small notes.** The same script lists every line
of printed prose in a passage's frame that begins with a point. It found
one, the question mark of change 16, at 380 to 400 and at 1024. After
the change it finds none. Three hyphened words are divided at their
hyphens at some widths, as hyphened words may be: one English word in
each of two captions, and the French words the Break caption names at
row 0.4, at 380 to 390.

**The rhymes.** Until 09:46 UTC the tool reported two rhyme strokes of
the third passage that ran past the right edge, at 390 and at 360, where
one line of a pair had turned and the other reached the edge. No `turn`
could mend that, since a line that fits is not turned. The kit's sixth
mending did: a line now stops short of the edge by the room a rhyme's
letter needs, so the longer line turns too and the pair is a bracket.

The built copy in `site/data/pieces` is written by other sessions, the
last time at 10:09 UTC. It has every change but my last (the title of
Byron's poem in `sources` and in one `stands`). The lead must build
again.

## 14. Still doubtful

- Whether the preface's sentence on her confusion may be set beside Act 2,
  Scene 5 (section 6, Break). The caption reports the preface exactly; the
  joining is the reading's. If it is thought too free, the caption's last
  sentence can go and the rest stands.
- Which of Littré's two senses the verb of row sight 0.4 w1 has. The
  reading gives both.
- The lighter accents (the second caveat).
- Ansen's *Table Talk* and Miller's memoir were not seen in full by the
  poet or by me. The piece on Shakespeare that sets Racine beside him is
  still not identified. No record of the class of 1941 on this play has
  been found.
- Whether the lead wants the two strokes of the Break figure at all. On a
  phone only the second is drawn now (section 3). With `"join": "none"`
  the four forms would be told by color alone at every width; I kept the
  strokes because they say what the caption says.
- The two French words the Break caption names at row 0.4 are divided at
  their hyphen at 380 to 390 (section 13). A hyphen that does not break
  would stop that, and would also stop the words lighting their place in
  the passage, since the page matches them letter for letter. Holding a
  short named phrase on one line is for the page's code.
- The five turns were measured against the kit as it stood after 10:14
  UTC. If the size of the verse or the room at the edge changes again,
  other lines that have no stop at the cut could turn a word off it; a
  `turn` on each such row would then be the mend (the cut word of every
  row is in the table of section 2).

## 15. The checker at the end

`node build/tools/check-reading.mjs phedre --print` ends:

    no problems
    no warnings
    the printed notes are fit to print
