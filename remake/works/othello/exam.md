# Othello: the examiner's record

Begun 3 October 2026, 05:54 UTC (see examiner.txt). Words of the play
are pointed at by row and word number, as the proof prints them. Auden,
Pearce and Miller are paraphrased; nothing of theirs is copied out here.

An artist was at work on the piece at the same time (art.md, begun
05:58). Every change to reading.json was a small exact edit. The file
was never written back whole. The artist's new keys in the facts of the
Play tab (`othelloInOrder`, `iagoInOrder`, `inOrderNote`) were left as
they are.

Verdict: mended. The three passages, the marks, the terms, the glosses
and the counts of lines and words stand. Eight things were wrong and are
mended; they are listed in section 10. What is still doubtful is in
section 11.

## 1. The proof

`node build/tools/check-reading.mjs othello` at the start: no problems,
one warning, printed notes fit to print. Every mark was read against the
word it lands on.

- Plate `echo` (a3s3 96.0 to 112.2). Chain: ten marks, three words, each
  on the word meant. Beat: twelve rows scanned, four pinned remarks.
  Word: 100.1 w3 and 112.1 w5.
- Plate `lie` (a4s1 37.0 to 49.0). Row 49.0 has four tokens joined by
  dashes (w5, w13, w18, w65). No mark runs under the wrong half: the
  word notes sit on w0-2, w7-9, w12 and w17; the crossing on w20,
  w22-23, w29-30, w34, with w27 and w32 for the order; the last span
  takes all of w65, which is right, since both halves are pieces.
- Plate `light` (a5s2 4.0 to 4.12 w4). Pair: the two halves of 4.6 and
  the five places that take them up. Sentence: ten spans. Word: six
  glosses.

The one warning is on 112.0 w6 as quoted in the Figure caption of the
first passage. The lint matches the word by its letters. Here it is
Othello's own word, set in italics as a quotation, and the sentence
says only that he names the device. It stays, and the warning stays.

## 2. The ear

I scanned the twelve rows of `echo` from the numbered words before I
opened the poet's marks. `x` is a light syllable, `/` a stress, `\` a
half stress.

| row | mine | the poet's | difference |
|---|---|---|---|
| 96.0 | x/x/x/x/x/ | the same | none |
| 98.0 | x/ | the same | none |
| 100.0 | w1 a full stress | w1 a half stress | the pinned remark already says w1 can be heard as a sixth beat |
| 100.1 | w0 stressed | w0 a half stress | either; the row has five syllables both ways |
| 102.0 | /xx/ | the same | none |
| 104.0 | w1 stressed | w1 a half stress | either |
| 106.0 | x/x/x/ | the same | none |
| 108.0 | w0 stressed | w0 a half stress | either |
| 110.0 | /x/ | the same | none |
| 112.0 | nine syllables, w4 as one, begins on a beat, w7 stressed | the same count, w7 a half stress | either |
| 112.1 | ten syllables, five beats | w3 and w6 half stresses | the poet's is the lighter reading; both keep five beats |
| 112.2 | eleven syllables, w1 as two, w7 could take a stress off the beat | w6 stressed, w7 light | either; the line ends on a light syllable both ways |

Nothing the captions say rests on the places where we differ. They rest
on counts of syllables, and those I get the same: 96.0 ten; 98.0 two;
100.0 eleven; then six pieces of 5, 4, 5, 6, 4 and 3; 112.0 nine.
The name of the meter (five beats, rising, no rhyme) is right. The
caveat that the short pieces can be heard in more than one way is the
honest thing to print, and it is printed.

## 3. The terms

Read in *A New English Dictionary*, vol. I (the scan the poet used,
opened again by me):

- Anadiplosis: beginning a sentence, line or clause with the last, or
  any prominent, word of the one before; from the Greek for a doubling
  back. The true hand-overs on the plate are three: 98.0 to 100.0, 100.1
  to 102.0, 108.0 to 110.0. In the other two places (102.0 to 104.0,
  110.0 to 112.0) the word that comes back is the first word of the
  speech before, which the dictionary's "any prominent word" covers.
  The caption says that the doubled word changes speakers. The name
  fits.
- Antimetabole: the same words or ideas repeated in inverse order. On
  the plate: w20 and w22-23, then w29-30 and w34. It fits.
- Antanaclasis: the same word repeated in a different sense. Row 4.6
  says four words twice; the six rows after it part the two senses. It
  fits.

## 4. The words

Each gloss was opened at its entry.

Schmidt's *Shakespeare-Lexicon* at Perseus, fetched by me: Honest (sense
2 cites the line of 100.1 by its Globe number; sense 1; sense 4 cites
the later line at a3s3 289.1); Monster (calls the passage peculiar and
explains the word as something monstrous); Echo, the verb; Stop, the
noun, sense 2 (cites a3s3 116.3); Belie and Fulsome (both cite this
speech); Invest 1 and Instruction 5 (both quote the sentence at 49.0
w39-50; Instruction 5 is prompting, suggestion); Lie, the verb of lying
down, sense 2; Cause 1 (quotes 4.0); Light (the head note on the word
being much played on; sense 7, life, pointing to 4.6); Minister 3;
Cunning, the adjective, 4; Pattern 3, a masterpiece; Monumental 2;
Promethean (given to men by Prometheus); Relume (to rekindle, to light
again, with the Quartos' other words).

*A New English Dictionary*, in the scans: Belie v.2 sense 2; Confess 10
(a proverbial phrase of the sixteenth and seventeenth centuries; the
remark that it appears to have been a degree ruder than the plain
charge of lying is the dictionary's own, drawn from its Pepys example;
it quotes 49.0 w19-34); Fulsome 6b (this line the first example);
Honest 1c, 3a, 3b, 3c; Lie v.1 (Old English licgan; sense 1f) and Lie
v.2 (Old English leogan; sense 1b, to tell lies about); Minister;
Monster and Monstrate (the Latin for a portent and warning, and the
verb to show formed from it); Monumental 1 (this line the first
example); Promethean and Prometheus; Relume (this line the first
example); Stop 6b; Cause 3, 7, 8, 9. The Oxford dictionary's public
page for relume gives the earliest evidence as before 1616, in
Shakespeare.

No gloss is from memory. One caption word was loose and is mended: the
third passage has the word at 4.11 w7 after 4.11 w6, and the caption
set another noun after the bold adjective, as if that were the plate's
phrase.

## 5. Auden

Read again in the scan of *The Dyer's Hand* (research/auden/dh.txt),
with the sentence before and after each one used.

- p. 266 (the view; four captions). The comparison with an analyst, the
  aim to kill, no need of lies, the answer that can be taken two ways
  where a direct lie would be safe, and the lines he quotes (a4s1 37.0
  to 47.0, with a different second speech for Othello): all as the
  piece says. The quotation in `view` is exact, eleven words.
  **One fault.** Auden's sentence about what Iago's words are designed
  to do has a pronoun that can be read two ways: the thing brought to
  Othello's consciousness is what "he" has already guessed is there. In
  the analogy the one who has guessed is more naturally the analyst,
  Iago. The poet wrote, five times, that it is what Othello has already
  guessed. That settles the pronoun one way, and probably the wrong
  way. Mended everywhere to what both readings share: it is already in
  Othello's mind.
- p. 266 again: the monster in Othello's own mind as the fear of being
  valued only for his use to the city; what she has done or not done is
  beside the point once he doubts her love. As the piece says. One
  reason (`why`, second passage, Figure) had dropped the "she" and made
  it "what was done"; it now names Desdemona, as Auden's sentence does.
- pp. 246-47: the villain first; one character alone acts; the fall is
  another man's work; pity without respect. The quotation is exact,
  eight words, and stands on p. 247.
- p. 249: the two speeches at the end of a3s3 (346 to 348), the private
  and unlawful sense of the rank, the earlier line not named. As the
  piece says; a3s3 164.0 is the likely earlier line and the entry says
  only that Auden does not name it.
- p. 258: the actor's two manners, a different Iago for each listener,
  the soliloquies spoken badly, the goal of nothingness. As the piece
  says.
- p. 268: what exactly she has done no longer matters; in the brothel
  scene the charge is of nameless things. As the piece says.

Pearce (read in research/A_pearce_gap2.txt; pp. 137-45 are missing from
research/auden/pearce.txt). In this book the page number stands at the
foot, before the next page's running head. By that rule: the lectures
on psychology and society, hardly on technique, and the reading of
Wilson Knight, p. 139; the first diagram p. 139, the other five p. 140;
Othello naive on purpose, the stress on simple virtues, Iago seeing the
key, p. 142; Iago cold, p. 142, and unable to love, the one brilliant
character, reasoning without a flaw, people as pieces in a game, p. 143.
The poet's pages are right.

Miller. **The page was wrong.** The piece gave pp. 27-28, from one
research note. I searched the scanned copy at archive.org
(audenamericanfri00mill) with the full-text search limited to that
book. The folio of p. 28 stands in the text directly before the
sentence about the blackboard. Folios in this book stand at the foot of
the page: the index puts Augustine on p. 26, and his name comes just
before the folio 26; Racine on p. 149, just before the folio 149; Alice
Cox on p. 88, just after the folio 87. The index puts Sidney Cox on
p. 29, and he is named a few sentences after the blackboard sentence.
The other research note (A_michigan_course.md, which was checked
against Google Books' page labels) also gives p. 29. Mended to p. 29 in
the Auden entry, the sources and `checked`. Miller's wording is as the
piece paraphrases it. Its index does not list the play under p. 29; it
is not a full index.

## 6. The reason and its ground, tab by tab

I read the whole of a3s3, a4s1 to block 226, and a5s2 to block 84, and
the other places each ground points at.

**First passage, Figure.** Thirteen words of Iago in four speeches (1,
3, 6, 3); three questions; two of them Othello's last word with two
words more; the one statement at 106.0: all on the plate. The last
sentence stands on 112.0 to 112.2. The reason is Auden's, p. 266, now
in a wording his sentence bears. True of this passage: Iago asserts
nothing in it.

**First passage, Beat.** Counts as in section 2. The editions, opened
by me: Folger 3.3.113 is Iago's one word alone; 118 and 119 are one
line in two parts; 115, 116, 117 and 120 are short. Globe (Perseus for
the numbers, the 1866 scan's text for the number 101 printed beside
Iago's word): 101 alone; 103 holds three pieces; 104 alone; 105 is the
question and the three words twice; 106 is the short rest of 112.0.
Cambridge 1866 (Project Gutenberg 49008): every speech begins its own
numbered line, 102 to 110. Abbott, sections 508, 511 and 513, and Baum,
chapter 3, say what the caption says of short lines and pauses, and no
more. Othello's word for the pauses is at 116.3, twelve lines on by the
Globe's count (thirteen printed rows). The caption does not claim that
these short lines are pauses. It says a short line can mark one and
that Othello soon speaks of Iago's. That is as far as the grounds go.

**First passage, Word.** My own count (scratchpad, honest.mjs): the
adjective and its noun 52 times in the play, 21 before 100.1, twelve of
those about Iago or what he does (a1s3 131.1, 142.0; a2s1 167.2; a2s3
7.0, 153.8, 171.1, 190.0, 218.0, 224.0, 227.1; a3s1 51.1; a3s3 7.0).
None of the 21 asks whether someone is honest. The noun at 112.1 w5
comes six times and first here; Iago's use is at 146.1. Othello's two
later uses of the adjective for his wife are at 176.1 and 289.1.
Pearce p. 142 and Auden p. 266 as in section 5.

**Second passage, Word.** One word at 43.0; two prepositions and three
words more at 47.0; Othello's order of taking them at 49.0 w0-17. The
two verbs and the glosses as in section 4. Auden quotes these lines on
p. 266. The last sentence stands on a4s1 52.2 to 52.3. Its pronoun was
unclear and now names Othello.

**Second passage, Figure.** The proverb and the figure as in sections 3
and 4. **A fault.** The caption said that the first talk of a
confession comes in Act 4, and that the turned order is the order of
events in the play. Forms of the verb are spoken seven times before
a4s1 (a1s3 74.6, 86.1, 95.1, 161.0, 167.0; a2s3 214.0, where Iago says
it to Cassio; a3s3 134.2), and at a3s3 303 Iago reports what Cassio
said in his sleep. What the text does bear: Othello orders Cassio's
death at a3s3 342.3 to 342.4; Iago first tells him that Cassio has
talked at a4s1 31 to 35; Othello's word for it is at 49.0 w18. The
caption and the reason now say that and no more. The sentence on Act 5
stands on a5s2 58.1 to 58.4. Auden's sentence is on p. 266.

**Second passage, Sentence.** Eight words of Iago (43.0 and 47.0) and
seventy-four of Othello (49.0, counted as words between spaces or
dashes): right. The three whole sentences are w35-38, w39-50 and
w51-58, and they are the longest run of whole sentences in the speech
(the others are w5.2 to w13.1 and w16-17, parted by an exclamation). The
pieces after them have one to four words. The glosses of w42 and w50
are Schmidt's. The direction is block 50. Auden does not comment on the
three sentences. The caption sets his general account after them
without saying that he does, and the ground now says so.

**Second passage, Play.** My own count (scratchpad, count.mjs) gives
the same figures as the poet's for every act and both men: Othello 832
lines and 5,879 words of verse, 360 of prose, all in Act 4; 511 lines
and 3,653 words, all verse, before a4s1 45; Iago 804 lines, 5,986 and
2,431. Iago's prose to Othello is at a4s1 176 to 220 and nowhere else.
Abbott, end of section 511 and section 515a, names this speech by its
Globe lines. **A fault in the facts.** `othelloProseSpeeches` and
`iagoProseSpeeches` were 24 and 82. Those are counts of prose blocks.
The facts define a speech as one turn under a speaker's name, and four
turns hold two prose blocks parted by a direction or a song (Iago at
a2s1 143 to 145, a2s3 55 to 58 and 72 to 75; Othello at a4s1 222 to
224). As turns they are 23 and 79 (scratchpad, pblocks.mjs). Corrected
under the same keys, which the artist's drawing reads.

**Third passage, Figure.** The four words twice at 4.6; the two
addresses at 4.7 and 4.10; the noun three times after, at 4.8, 4.9 and
4.12. The direction at block 1 has the light and the sleeper. Schmidt
under Light as in section 4. The reason is what rows 4.7 to 4.12 say.

**Third passage, Sentence.** The two conditions, the two addresses, the
object before its verb at 4.8 and 4.12, the two subjects of "can":
all on the plate. Strunk's rule 18 says the end of a sentence is
usually the place for what is to be most prominent. Nothing here goes
past the plate and that rule.

**Third passage, Word.** Three uses at 4.0 and 4.2; 4.1 for not naming
it; 4.5 for the one reason given. Glosses as in section 4. Auden p. 268.

## 7. The prose

Read aloud in the mind, every caption, reason, note and caveat.
American spelling; present tense; no dash inside a sentence; no
rhetorical question; no "we". Two contrasts with "not" are statements
of fact (Auden's own contrast on p. 268; the two word counts in the
fourth caveat). The lint finds nothing but the quoted word of section
1. My own sentences were written to the same rules. Every caption has
105 to 110 words; every reason is one sentence of at most 40.

## 8. The rules

- Passages: twelve rows of verse; five short rows of verse and 76 words
  of prose; thirteen rows of verse. Within the sizes.
- Phrases of the play named in captions: none longer than six words
  (three have six: the row 106.0, and 4.10 and 4.9 w4-9).
- Auden quoted twice (eleven words, eight words). Pearce and Miller in
  paraphrase.
- Nothing printed calls a part a plate or a lens.
- Nothing of the play is typed out in this record or in the notes I
  added.

## 9. The printed notes

- `view.source` and the five `auden[].source`: book, year, page. Miller's
  page corrected.
- `sources`: the fifteenth entry was a note on how the counting was
  done, not a source. Removed. What a word is now stands in the `stands`
  of the Play tab, where a count is to say what was counted.
- `stands`: ten, each of two to four sentences and at most 65 words.
  Each names what its caption stands on. Left as written, but for the
  one above.
- `caveats`: five entries of 44 to 50 words. The second had a sentence
  that was not true of the second passage (it said the two passages
  show only that Iago commits himself to nothing; at a4s1 35.0 and 39.0
  he reports that Cassio has talked). It now says that this rests on
  Iago's word alone. Later in the same scene, at block 80, rows 10 to
  12, Iago goes further and speaks of the adultery as a fact that Cassio
  will tell over again; that is noted in `open`. The poet's first
  `open` item on Act 5 was checked at a5s2 224 and 228 and is right.
  The other caveats were checked and stand: the Cambridge
  edition's lines, the Folio's pronoun at 112.0 w5 (Internet Shakespeare
  Editions, through line 1713), the Globe's exclamation marks, the
  Folger's brackets round 49.0 from w19 to the end, the Quartos' other
  words at 4.12 w4.
- `open`: the poet's eight items left as they are. Eight added, each
  beginning "From the examiner".

## 10. What was changed

1. Auden's pronoun (section 5): `view.says`; first passage, Figure,
   caption, reason and ground; second passage, Sentence, caption,
   reason and ground.
2. Miller's page, 27-28 to 29: fifth Auden entry (`source`, `checked`)
   and `sources`.
3. Second passage, Figure: caption, reason and one ground rewritten to
   what the text bears (section 6). The reason no longer makes Auden say
   "what was done".
4. Second caveat: the untrue sentence replaced.
5. Facts of the Play tab: 24 and 82 speeches to 23 and 79, with a line
   in `counted` saying why.
6. Third passage, Word: the noun after the bold adjective is now the
   plate's own (4.11 w7).
7. Second passage, Word: the last sentence names Othello.
8. `sources`: the note on counting removed; the Play tab's `stands`
   says what a word is.

After each change the checker was run. It ends as it began: no
problems, the one warning, printed notes fit to print.

## 11. Still doubtful

- Miller was not seen in a full copy. His sentence, the words before it
  and the sentences after it were read in search snippets; the page
  rests on the scan's folio, the book's index and one research note.
- Pearce's pp. 137-45 were read in the second copy only.
- Auden's pronoun on p. 266 is not settled, only stepped round.
- The 1622 Quarto was not seen. What is said of it comes from the
  Folger's marks and Schmidt.
- The Figure and Sentence tabs of the second passage stand on words
  that are in the 1623 Folio only. The fifth caveat says so.
- Only the public page of the present Oxford dictionary was seen.
- The scansion of the short pieces can be heard in more than one way.
- I did not build the page. The artist's drawing reads the two
  corrected numbers by key and should follow.

## 12. The checker's last lines

`node build/tools/check-reading.mjs othello --print`, 3 October 2026:

    no problems
    WARNINGS (1)
      plate echo lens 0 (figure) caption: "echoes": RULE THREE: a claim about what the passage does to someone, or stands for. Keep it only if Auden, a source or the lines themselves say it
    the printed notes are fit to print
