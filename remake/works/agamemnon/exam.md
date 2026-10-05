# Agamemnon: the examiner's record

Piece `agamemnon`. Examined on 2026-10-03, from 04:34 to about 06:00 UTC.
The poet's files were `reading.json` and `notes.md` as they stood at 02:57
UTC. An artist was at work on the piece at the same time (see `art.md`);
every change to `reading.json` was a small exact edit. The artist's own
changes while I worked: `parts`, `partsNote` and a `read` on each place in
the facts of the drawing, and the heading of the first plate. I left them
as they are.

No line of the play is copied here, and no sentence of Auden's. Places are
given as part, block and row, and words by their number in the row.

**Result: mended.** Three plates and ten lenses went in and three plates and
ten lenses come out. No lens was removed and no passage changed. Sentences
were cut or rewritten in every caption but none had to lose its reason.
`node build/tools/check-reading.mjs agamemnon --print` ends:

```
no problems
no warnings
the printed notes are fit to print
```

## 1. The proof

First run: no problems, no warnings, 24 items under PRINTED NOTES (no
`stands` on any lens, no `caveats`, working words in `sources` and in the
facts of the drawing). Every mark sat on the word it was meant for, and
still does: the last run was read line by line.

- Plate `yoke` (p1, rows 39.6 to 39.15 and 40.0 to 40.1): twelve lines.
- Plate `cloth` (p4, blocks 15 to 39, the odd ones): thirteen single lines.
  Hers are seven (15, 19, 23, 27, 31, 35, 39) and his six.
- Plate `net` (p6, rows 35.11 to 35.15): five lines.

One word on the plates is joined to the next by a dash (p4, row 15.0, word
3, parts 3.1 and 3.2). Two marks touch that row. The figure's mark is on
word 2 alone. The sentence span covers the whole line, and both halves of
the line are orders, so no mark there means only one of the two parts.

## 2. Sources opened by the examiner (all on 2026-10-03)

Fetched again, not taken from the poet's copies:

- The Greek: Aeschylus, Agamemnon, ed. and trans. H. W. Smyth (1926), from
  the Perseus Digital Library (texts 1999.01.0003 and 1999.01.0004),
  numbered by line with a script of my own. Lines read: 205-222, 351-361,
  818-828, 866-868, 914-974, 1046-1049, 1060-1064, 1114-1118, 1125-1129,
  1273-1278, 1372-1398, 1490-1494, 1578-1582, 1608-1611.
- Liddell-Scott-Jones (Perseus): lepadnon, ananke, themis, liponaus, hekon,
  amphiblestron, apeiros (B), heima, poikilos.
- Liddell and Scott, Intermediate Lexicon (Perseus): barys, ker, dyo (the
  entry opens under the key for the second verb of that spelling), hekon,
  kratos, peitho, mache, nikao, nike, olbios, ploutos, heima, diktyon,
  gangamon, page, agreuma, arkys, arkystatos, hyphasma, arachne, herkos.
- Online Etymology Dictionary: anaphora, metaphor, simile, stichomythia,
  yoke, recreant, wind, appanage, prevail, trammel, toil, inextricable,
  baffle, yield, fate.
- Silva Rhetoricae: anaphora, simile, metaphor.
- Encyclopaedia Britannica (through a page reader, since the site refuses
  a plain fetch): anaphora, stichomythia (read twice), couplet, rhyme.
  Merriam-Webster: appanage.
- A New English Dictionary, vol. I (1888), in the plain-text copy in the
  shared scratch folder (`ned1.txt`): Apanage, Baffle, Baffling.
- Paull F. Baum, The Principles of English Versification (1922), chapter 4,
  part 2, on the couplet and the short couplet.
- Auden: Forewords and Afterwords, pp. 19-21, and The Dyer's Hand,
  pp. 173-74, in the plain-text copies. "The Christian Tragic Hero" in
  Corrigan's anthology (Internet Archive item `tragedyvisionfor0000corr`),
  and the Baudelaire introduction in the 1947 volume
  (`intimatejournals0000char_k2x1`) and in Prose II
  (`prosetravelbooks0000aude`), through the Internet Archive's public
  full-text search (single snippets, run twice). The same search, in two
  other scans of Forewords and Afterwords (`forewordsafterwo0000aude`,
  `forewordsafterwo00aude`), for the words quoted in the view.
- The research notes `remake/research/C_auden_on_works.md` (section 2,
  blocks H4, H17d, H17s), `A_michigan_course.md` and `D_texts.md` (which
  translation Auden's list named).

## 3. The ear

The piece has no beat lens, but the rhyme lens leans on which lines are
short. I counted the syllables of rows 39.6 to 39.15 before reading the
poet's caption: 8, 12, 12, 8, 6, 8 or 9 (the word at 39.11 w5 can be two
syllables or three), 12, 12, 12, 6. They are rising lines of four, six and
three beats. So the speech has exactly two lines of three beats, rows 39.10
and 39.15, and they carry the rhyme marked c. Rows 40.0 and 40.1, after the
speech, have six syllables each.

- The poet's caption called 39.10 and 39.15 "short" lines and 39.15 "the
  speech's other short line". Rows 39.6 and 39.9 are short too (eight
  syllables against twelve). Mended to "a line of three beats", which is
  true of those two lines only.
- Rhyme f (rows 40.0 and 40.1) is a near-rhyme, and rhyme e (rows 39.13 and
  39.14) is full only in the older sound of the word at 39.14 w9, which the
  Online Etymology Dictionary records. The caption leans on neither. Both
  are now in the fifth caveat.

## 4. The terms

- Anaphora (yoke, lens 0): the same word heads two clauses that follow one
  another (39.6 w0, 39.7 w1; in the second it follows a conjunction). Silva
  Rhetoricae and Britannica define the term so, and the Greek has a textbook
  case: lines 206 and 207 both open with the same adjective. Sound. The
  plain-words gloss added an effect ("so that they are heard side by side")
  that no source gives; cut.
- Metaphor (yoke, lens 1; net, lens 0): Silva Rhetoricae's definition fits
  both. In `net` the first of the three namings is a simile (35.13 w0-1 is
  its sign) and the second a metaphor, as the caption says.
- Stichomythia (cloth, lens 0): thirteen single lines by turns; Britannica
  names this play under the term and says speakers may take up one
  another's words; the Century Dictionary (as the Online Etymology
  Dictionary quotes it) says "often". The Greek has the same thirteen
  (931 to 943). Sound. The label "word for word" on the first pair was not
  exact (15.0 w2 against 17.0 w2-3 is the same verb in two forms) and is now
  "the word taken up". "Each takes up the other's words" was true of the
  first pair and loose for the second (27.0 w5-8 against 29.0 w4-7 is the
  same thing in other words); now "A line takes up what the last one said".
- Sentence kinds (cloth, lens 1): counted by me before reading the caption.
  Hers: order, question, question, order, order, statement, order. His:
  statement (led in by an imperative at 17.0 w0), statement, statement,
  statement, statement, question. The caption's counts are right.
- Couplet (yoke, lens 2): the poet wrote that "a couplet closes as soon as
  it opens", on Britannica's definition of a closed couplet. Baum's
  sentence about the quick return of the rhyme is said of four-beat
  couplets, and these are of four and six beats, so I did not lean on it.
  The caption now gives Baum's general statement from the same chapter
  (part 2, under "Couplet"): the couplet is the simplest of the groups of
  lines that rhyme holds together.
- Rhyme in the Greek (yoke, lens 2): the poet wrote that Aeschylus's song
  "has none". Read by line, the ends of lines 205 to 217 follow no scheme,
  but lines 205, 211 and 213 end in the same inflection, so "none" was too
  much. Now "is not rhymed", on those lines and on Britannica under rhyme
  (found only now and then in classical Greek and Latin verse).

## 5. The words

Every gloss was opened again. What was found:

- 39.6 w0-1, 39.10, 39.11 w5, 39.13 w1, 40.0 w5, 40.1 w0, 40.1 w3: the
  Greek words are as given (lines 206 to 218), and the lexicon entries say
  what the notes say. LSJ cites line 212 under liponaus and line 218 under
  lepadnon; the Intermediate Lexicon quotes line 206 under ker. LSJ adds a
  second way of taking liponaus (deserted by the fleet); the note keeps the
  first, which is Smyth's.
- 25.0 w6-7: LSJ poikilos cites lines 923, 926 and 936. Sound.
- 31.0 w4 (appanage): the poet's gloss ("what rightly goes with") followed
  Merriam-Webster. The New English Dictionary, sense 4, gives the sense
  that fits the line and was current in 1881 (examples 1663 to 1875): a
  natural or necessary accompaniment or attribute. Gloss and note rewritten
  from it.
- 35.0 w1-2: the Greek word is olbios, the fortunate; neither the Greek nor
  the lexicon has "victors" (Smyth adds the word too). The note now says
  the Greek has no word for victors.
- 37.0 w3: the gloss cited the entry for the verb; the Greek has the noun.
  The source now names the entry for the noun.
- 39.0 w0, w1-3, w7: as given. The verb at 39.0 w0 is the verb of line 206,
  and the word behind w1-3 comes again ten lines later (line 953), as the
  notes say.
- p6 35.13 w3, 35.14 w4, 35.14 w5: as given (trammel, inextricable, toil).
  LSJ cites line 1382 under both Greek words of that line.
- 35.15 w5 (baffling): **wrong as written.** The note said the sense of
  defeating efforts came before the sense of puzzling. The New English
  Dictionary has the verb as "bewilder" from 1649 and as "defeat anyone in
  his efforts" from 1675, and gives the participle as bewildering, or
  defeating skill or endeavour. Gloss and note rewritten.
- 35.15 w6 (the Greek noun for garment): the note said it names the cloths
  at the door three times, citing lines 921, 960 and 963. At 960 it is used
  of garments in general. LSJ gives "rug, carpet" for lines 921 and 963.
  Mended to those two lines.
- 35.15 w1-2: the Intermediate Lexicon quotes the phrase of line 1383 under
  ploutos; line 949 has the same noun at the door. Sound.

## 6. Auden

Each thing was found at its page.

- Forewords and Afterwords, p. 19 (the view, the first Auden note, and
  seven grounds): in this copy the page number stands at the foot of the
  page. The paragraph on the tragic hero, with Agamemnon first of four
  examples, the walk on the carpet, and what the chorus learns, is all on
  p. 19. The sixteen words quoted are exact. The poet's copy drops most
  punctuation, so I looked for the same words in two other scans of the
  book: they stand there with no punctuation inside them, and a dash
  follows the last word.
- pp. 20-21 (second note): as cited.
- The Dyer's Hand, pp. 173-74 (third note; yoke, lens 1): as cited; the
  seventeen words quoted are exact, on p. 174.
- "The Christian Tragic Hero": the sentences were found again in the
  anthology (on necessity; on Agamemnon's choice, with Antigone beside
  him; and the one after it, on the flaw and the situation the gods send),
  and its acknowledgment gives the newspaper and the date, 16 December
  1945, which the poet had "from memory". Page 143 for the sentence on
  necessity and 144 for the one on Agamemnon are from the research notes;
  the search gives no page numbers, and the Archive's search inside the
  book is closed for this copy.
- Baudelaire introduction (1947): the sentence was found again in both
  books. The page is from the research notes; cited now as pp. 309-10.

Faults:

- **The view said more than he said.** "First example of the Greek tragic
  hero" (he gives Agamemnon first among examples of the tragic situation),
  and "could not have escaped the choice" (he says the wrong the hero does
  is not a choice he could have avoided). Rewritten, 68 words.
- **Paraphrase that was quotation.** Three places ran Auden's own words
  together without quotation marks: ten words in the third note, nine in
  the fifth, seven in the fourth. The piece already has its two quotations.
  All three reworded.
- "Again his example" (fourth note): he gives two examples there. Now
  "again one of his examples".
- yoke, lens 3: "Greek tragedy shows what had to be" was loose; now his own
  term with what he says the spectator feels.
- cloth, lens 2: the caption tied the queen's argument to what the chorus
  learns about the strong man (p. 19). The Greek word in her line means the
  fortunate, and on p. 21 Auden says that only exceptional good fortune
  exposes a man to the temptation of hubris. The tie is now to p. 21. It is
  a general statement, not made of this scene; the ground and the third
  caveat say so.

## 7. The reason and its ground

Each caption and each `why` was read one sentence at a time against the
proof, the scene around the passage, the sources and Auden's pages.

**yoke 0 (anaphora).** Cut: "it sets the clauses side by side" and "get the
same verdict before any reason is given" (no source for the effect). Put in
its place what the lines plainly show: both acts get the one word and
neither is called the lesser evil (rows 39.6 to 39.15 read for any
comparison; there is none). The Greek ground and the Auden ground stand.

**yoke 1 (metaphor).** Cut: "to consent is to take it" (the passage says
he took the yoke; consent is the poet's word). "What Fate demands" became
"the compulsion of Fate", which is what 40.1 w0-2 say. "At the neck" came
out of the definition of a yoke (the dictionary says collar or harness);
the neck is in the line itself. The reason stands on the marks and on The
Dyer's Hand, p. 173.

**yoke 2 (rhyme).** See 3 and 4 above. Cut: "finds no partner" (it finds
one five lines on), "a couplet closes as soon as it opens", and the closing
sentence about the speech's rhymes being complete only at its last word,
which summed up. What is left is on the marks and the lines: the two acts
rhyme by turns, each reason has a couplet, and the rhyme opened at the line
of the two woes is closed by the prayer. No Auden ground; none was claimed.

**yoke 3 (word).** "In the same terms" cut (Auden's words are not the
king's). The 1945 sentence tightened. "That course" could be read as the
army's demand; it now says which course Auden means, sparing her.
Otherwise sound.

**cloth 0 (stichomythia).** Sound after the two changes in 4. Checked: the
gods are named once in the thirteen lines (19.0 w7-8); the king's refusal
is at rows 12.9 to 12.13 and his speech runs on through block 13; he says
he will walk at 41.15.

**cloth 1 (sentence).** **A general statement that the scene breaks.** The
caption said "Just before, the orders were his" and the `why` "Before these
lines the orders are the king's". The queen's own speech before his (block
10) gives orders too. Kept to his speech. The reason was thin ("to her
Yield he answers if thou wilt"); the text gives a better one in plain
words at row 41.14, where he says his will gives way to hers (lines 956-957
in the Greek), and the caption now ends there. "Her lines about fear" could
mean row 19 or row 27; now "her question about the gods". The king's first
line opens on an imperative (17.0 w0, as line 932 does in the Greek) that
only leads in a statement; the caption says so, and so "in these lines
they are hers" stands. Read against the Greek once more at the end: 931,
937 and 943 are orders, 933 and 939 statements, 935 and 942 questions.

**cloth 2 (word).** "Can afford to give way" was more than row 35.0 says;
now the line's own statement. The Auden tie changed (see 6).

**net 0 (figure).** "Called a net twice" was not exact: once likened, once
called. "Closing on a shoal": the verb at 35.13 w4 is of hemming in. "Trapped
him in" became "with", the line's own preposition (35.14 w3). The
caption stopped at the order of the three namings; the reason is in the
two lines before them, which the plate already shows (35.11 and 35.12; line
1381 in the Greek): she so worked that he could neither flee nor ward off
his doom. Added, with a text ground. "The king is a catch before the cloth
is named" kept in plainer form.

**net 1 (the drawing).** The count was made again with a wider list of
words; the nine places stand and nothing was missed. One fact was wrong:
at the third place (p4, row 9.8) the net is a comparison for the king's
rumored wounds and catches no one, but the facts gave him as caught, and
the drawing prints "is caught". `caught` there is now "no one" and
`byCaught` gives Agamemnon four. "After that it is for the king" became
"Each later net is said of the king or his captive Cassandra". Added: eight
of the nine are in the Greek (the sixth is not), with a source ground.
"The net stands at both ends" replaced by the plain statement of the same
fact. A near place the poet had not listed (p5, block 55: the Greek has a
robe, neither text a net) went into the list of what was left out. "Thanks
for victory" was checked for both of the first two places: the elders say
before their song that they will salute the gods who bring them bliss
(p2, rows 38.3 to 38.4; Smyth's English at lines 353-354 has prayers of
thanksgiving), and the king names gratitude (p4, rows 2.16 to 2.17).
Every word or phrase of the play that a caption names was searched for in
the text printed here by a script; each is where the caption says it is.

**net 2 (word).** See 5. The reason stands on the Greek (lines 921, 949,
963, 1383) and on p. 19. The `why` said "the act ... and the thing ... are
named alike"; it is the cloths and the robe that are named alike, and it
says so now.

## 8. The prose

No dashes, no stock words and no rhetorical questions were found or left.
"Here" was replaced where it could mean the page or the passage. Captions
run from 102 to 119 words; six are over the 110 the brief aims at and all
are under the checker's 120. The translator is named once, in the first
caption, and is "the translator" after that; the page's kicker does not
name him, the sources do.

## 9. The rules

- Text of the work in the reading: single words and phrases of two to six
  words in captions only. The longest is six words (cloth, lens 1). The
  list of what was not counted held phrases of the translation; they are
  paraphrased now.
- Auden in copyright: two quotations, 16 and 17 words. Everything else is
  paraphrase (after the mends in 6).
- Passages: twelve, thirteen and five lines.

## 10. The printed notes

Written for a reader: `stands` on all ten lenses (27 to 62 words and three
or four sentences each, with links into the copy printed here where a
ground is another place in the play), twelve `sources`, five `caveats`. The four strings of
`facts.notCounted` held addresses; they are now five plain sentences, and
the addresses are kept in a working key beside them (`notCountedNote`).
The artist's drawing prints that list. Page ranges in the printed sources
use the same dash as the model piece.

The caveats: the translation is not the one Auden set; no Greek is printed
and all of it rests on Smyth; which of Auden's sentences are about this
play and which about Greek tragedy in general, and that two of his pieces
were read only in snippets; what the count of nets depends on; the two
loose rhymes.

## 11. What was changed, in one list

1. `about`: who ordered the cloths, and whom the queen tells.
2. `view.says` rewritten; `view.checked` extended.
3. All ten captions and eight of the ten `why` lines (yoke 3 and cloth 0
   kept theirs but for the translator's name).
4. `plain` of the two figures on the first plate.
5. Two labels inside lenses: "his own act" to "his act"; "word for word" to
   "the word taken up". No tab label and no heading was touched.
6. Word notes: appanage, the fortunate, baffling, the garment noun,
   inextricable, toil, the wealth noun, two that named the translator.
7. Grounds on every lens brought into line with the captions; five added
   (text or source), sources named for each.
8. Facts of the drawing: `caught` at the third place, `byCaught`,
   `notCounted`, a new `notCountedNote`, a sentence added to `counted`,
   one dash. No key renamed or reshaped. The artist's script was read
   first: it uses `verseLines`, `places` (line, speaker, words, caught,
   greek, read), `parts`, `thisPlate.lines` and `notCounted`.
9. Auden's five notes: four reworded, sources' page ranges, `checked`
   brought up to date.
10. `sources` rewritten; `caveats` written; six items added to `open`
    (the poet's eight left as they were).

## 12. Still doubtful

- Pages 143 and 144 of the 1965 reprint and pages 309-10 of Prose II were
  not seen whole. The words were seen; the page numbers are the research
  notes'.
- Smyth's text only. Morshead's Greek was an earlier text, and I did not
  open another edition. The caption says "in H. W. Smyth's Greek text" at
  the one place where it matters most (which of the queen's lines are
  statements).
- The drawing reads the word "none" at the head of the sixth place's
  `greek` to draw its ring. If that string is edited the word must stay.
- The drawing's new fourth line under "who is caught" is named "no one".
  It is true; whether it reads well is for the artist and the lead.
- The rhyme lens is about the translator's verse, and Auden set another
  translation. The caption says whose rhyme it is, and the first caveat
  says which translation he set.
- No Greek pair could be made (see `open`).
- The artist's record (`art.md`) had its sections on faults of the kit and
  on things wrong in the reading still unwritten when I finished (05:55
  UTC). Whatever the artist sets down there about the reading I have not
  seen. The artist's pictures of 05:36 UTC were looked at: the drawing's
  line for no one, the ring at the sixth place, the view, the notes on
  Auden and the sources all print as written here.
