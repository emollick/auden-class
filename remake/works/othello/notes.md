# Othello: the poet's notes

Written on 3 October 2026.

Words of the play are pointed at by row and word number, as the proof
prints them (`node build/tools/check-reading.mjs othello`); a single
word is named where that is plainer. Auden, Pearce and Miller are
paraphrased throughout; no sentence of theirs is quoted here. The
reading itself holds two quotations of Auden: eleven words in `view`
(DH p. 266) and eight in the first `auden` entry (DH p. 247).

DH is The Dyer's Hand (1962); "The Joker in the Pack" is its pp. 246-72.
Line numbers for it are those of the scan, research/auden/dh.txt.

## What is handed in

`remake/works/othello/reading.json`: three plates, ten lenses.

- `echo`: othello/a3s3, rows 96.0 to 112.2 (Folger 3.3.112-24; Globe
  3.3.100-108). Figure (anadiplosis), Beat, Word.
- `lie`: othello/a4s1, rows 37.0 to 49.0 (Folger 4.1.39-54). Word,
  Figure (antimetabole), Sentence, Play (a shape lens).
- `light`: othello/a5s2, rows 4.0 to 4.11 and row 4.12 words 0 to 4
  (5.2.1-13 in the Folger and the Globe alike). Figure (antanaclasis),
  Sentence, Word.
- `view`: Auden on Iago as an analyst who works to kill, who need not
  lie, and whose answer in 4.1 can be taken two ways (DH p. 266).
- `auden`: five entries. `next`: othello/a1s1:0. `sources`: 15.
  `caveats`: 5. `open`: 8.

Nothing outside `remake/works/othello/` was written. I did not run
`build/pieces.mjs`, which writes outside this folder.

The rules moved twice while I worked. Rule three, the `grounds` list
and the two sections of EXAMINER.md ("What the model itself got wrong",
"Sources you can open from here") came after my first draft; the
printed notes (`stands` on every lens, `caveats`, sources written for a
reader, no block or row numbers in what the page prints) came at 04:12
UTC, when the reading was otherwise done. The reading was rewritten
under each set of rules as it came. CRITIC.md came at 04:29, and I
then read every printed sentence of the piece once more as the critic
is told to (see "A last reading" below). The rule files changed once
more between 04:47 and 04:53 (the checker, POET.md, BRIEF.md,
ARTIST.md, EXAMINER.md). I read them again and ran the newest checker
at 04:56 and after: nothing in them asked for a change in the reading.
From then on any change to `reading.json` was a small exact edit made
on the file as it stood, as EXAMINER.md now asks of anyone working
beside an artist; at hand-in no examiner or artist had begun on this
piece (no examiner.txt, no site/js/pieces/othello.js).

## How the leads were answered

1. Othello's own music against Iago's speech, and how his verse breaks.
   The Play lens of the second plate counts it: Othello speaks verse
   and nothing else until Iago's one word at a4s1 row 43.0, 360 words
   of prose in Act 4, and verse only in Act 5. The Beat lens of the
   first plate shows the five-beat line going into short pieces as Iago
   begins. No caption speaks of "music": nothing Auden wrote or said
   that I could read is about the sound of Othello's verse, and Pearce
   reports that Auden hardly touched technique in these lectures.
2. One line that says the same words twice with two meanings (5.2).
   The third plate, row 4.6.
3. Iago in verse and in prose. The Play lens: counts for Iago act by
   act and by the person he speaks to, with Auden's remark that there
   is a different honest Iago for each listener (DH p. 258).
4. Auden on Iago, in the 1941 class and in "The Joker in the Pack".
   `view`, the five `auden` entries, and the grounds of seven lenses.

Lenses that stand on a page of Auden: echo/Figure (p. 266), echo/Word
(Pearce p. 142; DH p. 266), lie/Word (p. 266), lie/Figure (p. 266),
lie/Sentence (p. 266), lie/Play (p. 258), light/Word (p. 268). The
other three (echo/Beat, light/Figure, light/Sentence) stand on the
marks, the lines and sources only. I found nothing of Auden's on the
verse of the first passage or on the lines of the third, and did not
lend him anything.

## Why these passages

### Plate 1, `echo`: the start of the temptation (3.3)

This is where Iago begins, and it is the place Auden's page is about
without his quoting it: DH p. 266 says the monster in Othello's own
mind, too hideous to be shown, is the fear Othello has kept down, and
those are the words of rows 112.1 and 112.2. What can be seen:

- Figure. Three times the last word of a speech begins the next speech
  (row 98.0 to 100.0; 100.1 to 102.0; 108.0 to 110.0), across a change
  of speaker. Iago's four speeches come to thirteen words, three of
  them questions; his one statement is row 106.0. Othello names the
  device himself (row 112.0 w5-7), says the word at row 112.1 w5 and
  draws the conclusion (row 112.2 w5-8). The repeats inside a line
  (row 100.0 w2, row 104.0 w2) are marked in the same chain as returns
  of the word; the figure named is the hand-over at the change of
  speaker.
- Beat. One full line, a line of two syllables, a full line, then six
  pieces of three to six syllables. How these make up lines depends on
  the edition (see below), so the caption says what two editions do and
  claims only what both agree on: row 98.0 stands alone in both, and
  each leaves other pieces short. The reason given is a sourced one:
  a short line can mark a pause (Abbott, Baum), and Othello's own word
  for Iago's pauses comes at row 116.3.
- Word. The word at row 100.1 w3 has been said 21 times before this
  line, 12 of them about Iago, never yet to ask whether someone is so;
  it could also mean chaste, and Othello says it of his wife later in
  the scene (rows 176.1 and 289.1). The noun at row 112.1 w5 is first
  heard here, from Othello, and Iago takes it up at row 146.1.

### Plate 2, `lie`: the two-sided answer and the fit (4.1)

These are the lines Auden quotes on DH p. 266 for his point that even
where a plain lie would be safe Iago's answer is two-sided and Othello
has to take it for himself. It is also where Othello's verse stops.

- Word. Row 43.0 is one syllable shared by two verbs. Othello's speech
  (row 49.0) takes both: w0-2 the bed, w7-9 and w12 slander, w13-17 the
  bed again. Iago's own word for such women follows at row 52.3.
- Figure. The proverb at row 49.0 w19-26 and its halves turned round at
  w27-34.
- Sentence. Iago's eight words (rows 43.0 and 47.0) against Othello's
  seventy-four; the three whole sentences that stand together at row
  49.0 w35-58, which are about himself; the pieces of one to four words
  at w59-66; the stage direction at block 50.
- Play. Verse and prose for the two men, act by act, counted.

### Plate 3, `light`: the first thirteen lines of 5.2

The lead's line is row 4.6. The six lines after it are on the plate
because they are where the two senses are told apart, so the claim
that the same four words mean two things rests on the lines themselves
and on the lexicon, not on me. Rows 4.0 to 4.5 are there for the word
at row 4.0 w3, said three times and not named, which is where Auden's
page 268 bears (what exactly she has done no longer matters to
Othello; his charges in 4.2 are of nameless things).

The plate stops at row 4.12 w4, the end of the sentence. The rest of
that row begins the sentence about the rose.

### Passages looked at and not chosen

- Othello's last speech in 5.2. Auden only passes on another critic's
  remark about it (DH p. 268, lines 12832-12836), so a plate on it
  would have no view of his to stand on.
- The end of 3.3 (rows 342 to 348), where Auden reads the word
  lieutenant as a private commission and Iago's answer as a mocking
  repetition (DH p. 249). It is in the `auden` list. He does not say
  which earlier line he means; row 164.0 is my finding and the entry
  says only that the line is there.
- The Clown's play on the two verbs at the head of 3.4 (othello/a3s4,
  blocks 3 to 17). So the pun of the second plate has been made once
  before, as a joke, and in a line Auden quotes for another word (the
  first line of that scene, DH p. 249). Schmidt lists the place as a
  play on the word. I had no room for it in a caption of 110 words; it
  is true and could be added if a caption is ever loosened.
- The handkerchief speeches and the dream in 3.3. They are where Iago
  does tell an untruth (row 319.2), which is why `caveats` and `open`
  say that Auden's sentence goes further than the play.

## How the editions divide the short speeches of plate 1

All read on 3 October 2026.

- The text printed here (Project Gutenberg no. 1531): each speech is a
  row of its own; rows 98.0, 100.1, 102.0, 104.0, 106.0, 108.0 and
  110.0 are short, and the last of them is repeated at the head of row
  112.0.
- The Folger Shakespeare (folger.edu; the page kept as
  othello-poet/folger_33.html, parsed with folger.py). Line 3.3.113 is
  row 98.0 alone. 115, 116 and 117 are rows 100.1, 102.0 and 104.0,
  each alone. 118 and 119 are rows 106.0 and 108.0 as the two parts of
  one line (119 carries the edition's mark for the second part of a
  split line). 120 is row 110.0 alone. 121 is the whole of row 112.0.
  The Folger numbers every printed line, turnovers included.
- The Globe edition (Clark and Wright, Macmillan, 1866). Line 101 is
  row 98.0 alone; 103 is rows 100.1, 102.0 and 104.0 together; 104 is
  row 106.0 alone; 105 is row 108.0, row 110.0 and the first three
  words of row 112.0; 106 is the rest of row 112.0, a short line.
  Checked three ways. (1) The text at the Perseus Digital Library
  (doc Perseus:text:1999.03.0034, Act 3, Scene 3) prints line numbers
  101, 109 and 120 in its margin; twelve printed rows stand between
  the marks for 101 and 109 and they must make eight lines. (2)
  Schmidt's references use the Globe's numbers and agree: 106 for row
  112.0 w5-7, 107 for row 112.1, 120 for row 116.3. (3) In the scan of
  the 1866 Globe at archive.org (aba6868.0001.001.umich.edu, leaf 907)
  the part-lines are indented in steps: rows 102.0 and 104.0 further
  and further in; rows 106.0 and 108.0 not indented, each beginning
  where a full line begins after the speaker's name; the two speeches
  of three words stepped in; and the rest of row 112.0 at the left
  margin with no speaker's name. I read the positions from the scan's
  word coordinates.
- The Cambridge edition of 1866 by the same editors (vol. VIII,
  Project Gutenberg no. 49008) prints each short speech as a numbered
  line by itself (its 3.3.102 to 110); the line of row 116.3 is its
  124.
- The Folio of 1623 (Internet Shakespeare Editions, Othello, Folio 1,
  through-line numbers 1704 to 1715) sets each speech on a line of its
  own.

Other differences seen in those texts and given in `caveats` or `open`:
the Globe prints exclamation marks after Iago's three short speeches
where the text here, the Folio and the Folger have question marks; in
row 112.0 the Folio has another exclamation where the text here has
the oath (w3-4), and has Othello say thou and thy where rows 112.0 and
112.1 have he and his (the Folger follows the Folio there and takes
the oath from the Quarto, in pointed brackets).

In the second plate the Folger (4.1.39-54) differs from the text here
in small things that no caption leans on: a dash after row 43.0; in
row 49.0 question marks at w2 and w5, an oath taken from the Quarto
between w15 and w16, and the verb at w56 with a final s. It sets row
49.0 from w19 to the end in square brackets, its mark for words found
in the Folio only. In the third plate its lines 1 to 13 have the same
words as rows 4.0 to 4.12 w4; it has full stops where the text here
has a comma, an exclamation mark and a colon (the ends of rows 4.0,
4.1 and 4.6) and no comma at the end of row 4.8.

"A dozen lines on" in the Beat caption: from the last line of the
plate (Globe 108) to the line of row 116.3 (Globe 120) is twelve lines
by the Globe's count. It is thirteen printed rows in the text here and
fifteen numbers in the Folger, which counts turnovers.

Abbott's "amphibious section" (section 513) is a part-line that ends
one verse and begins the next. He does not list these lines among his
examples. The point pinned at row 108.0 says only that the grammar has
a name for such a part-line, after saying what the two editions print;
that the name fits here is my application.

## The scansion of plate 1, and the other ways of hearing it

`voice` is natural speech; a function word that stands on a beat is
marked `x` or light (`\`), so the plate shows the beat passed over.
The meter name is a plain statement of the full lines: five beats,
rising, unrhymed.

- 96.0: regular. w0 can take a stress of its own; not leaned on.
- 98.0: two syllables, one beat. No doubt.
- 100.0: eleven syllables. I give w1 a light stress off the beat. It
  can be heard as a full sixth stress, or as an exclamation outside
  the count, which leaves a regular line of ten. The pinned remark
  says it can be heard as a sixth beat.
- 100.1: marked with a light stress on w0 and the main stress on the
  first syllable of w3. It can as well be heard with the stress on w2,
  or evenly on w1 as the meter has it. Not leaned on.
- 102.0: a turned first foot; no real doubt.
- 104.0: w1 marked light. A speaker may give it full weight, which
  makes three stresses in five syllables.
- 106.0: regular, three beats.
- 108.0: w0 marked light and the stress on w3. It can be heard with
  full stress on w0, or with the beat on w1 as the meter has it.
- 110.0: three syllables, beginning on a beat.
- 112.0: nine syllables and five beats if w4 is one syllable, the line
  beginning on a beat; the pinned remark says both things. With w4 as
  two syllables there are ten and a double off-beat in the middle. The
  last word is marked light; a speaker stressing the contrast will
  give it full weight. The Folio has a different word in the place of
  w3-4, of two syllables.
- 112.1: w3 and w6 stand on beats and are marked light. A speaker may
  stress w4 in place of w3.
- 112.2: eleven syllables with a light ending, w1 as two syllables.
  w6 takes the beat as marked; it can be heard with the stress on w7
  off the beat. w0 may be stressed. With w1 as three syllables the
  line has twelve.

What the captions lean on is counted, not heard: the number of
syllables in each row, that row 96.0 is a full line, and that row 98.0
has one beat.

There is no Beat lens on plates 2 and 3. The speech of plate 2 is
prose. The thirteen lines of plate 3 are regular, and I had no reason
standing on a source for what their regularity does.

## Where each fact was read (all on 3 October 2026)

### Auden

- dh.txt 11695-11727, DH pp. 246-47 (the head of p. 247 is at line
  11716): the essay begins from the villain; no other play he can
  think of in which one character alone does deeds and the rest only
  behave; Othello's fall another man's work; pity without respect.
- dh.txt 11813-11832, p. 249: the word lieutenant at the end of 3.3 a
  private and unlawful commission, to kill Cassio in secret; Iago's
  answer a mocking repetition of an earlier line.
- dh.txt 12277-12300, p. 258 (head at 12260): the actor of Iago; as
  many honest Iagos as there are people he talks to; the soliloquies
  to be spoken badly; Iago's last aim nothingness.
- dh.txt 12675-12717, p. 266 (head at 12670): the monster in
  Othello's own mind is his fear that he is valued only for his use to
  the city; once he suspects she does not love him, what she has or
  has not done does not matter; Iago as analyst; no need to lie;
  everything aimed at what Othello has already guessed; even where a
  lie would be safe the answer is two-sided. He then quotes the lines
  of plate 2, rows 37.0 to 47.0, in a text that differs in one speech
  from the one printed here (row 41.0).
- dh.txt 12811-12817, p. 268 (head at 12806): if Othello cannot trust
  her he can trust no one, and just what she did is not important; in
  the brothel scene his charge is of nameless things, not of adultery
  with Cassio.
- dh.txt 12963-12990, p. 271: Iago as the experimenter who plays on
  fears the victim does not know he has. Read; not used in a caption.
- A search of dh.txt for the words of rows 4.0, 4.6 and 4.12 of plate
  3 and of row 112.0 of plate 1 finds nothing: Auden does not discuss
  those lines in the book.

### Pearce and Miller (the 1941 class)

- Pearce, pp. 137 to 145, are missing from research/auden/pearce.txt.
  I read them in research/A_pearce_gap2.txt (a second copy of those
  pages kept with the scans) and in remake/research/E_pd_pearce.md.
  In that copy the page number stands at the foot of its page, before
  the next page's heading. The number 141 stands just before the
  passage on Othello's naivety, so that passage is on p. 142; the
  number 142 stands inside the passage on Iago, which runs on to
  p. 143. Page 139: Auden lectured on the psychology of the people of
  the plays and their social circumstances, hardly on technique, and
  asked the class to read Wilson Knight. Page 142: Othello naive, and
  naive on purpose; the stress he lays on simple virtues, honesty
  first among them; Iago sees in this the key to him. Pages 142-43:
  Iago cold, unable to love, the one brilliant mind in the play,
  reasoning without a flaw, moving others like pieces in a game.
  Also there and not used: Iago as a saint turned upside down.
- Pearce's record of the blackboard, pp. 139-40, in the same copy. He
  says his notes grow fuller at this point because Auden put diagrams
  on the board, and gives six that he took from the lecture on this
  play. Each sorts the persons of the play under two or three heads:
  rank; self-confidence; sex appeal; passion; sophistication (Othello
  naive on purpose, Desdemona by nature); intelligence, where Iago
  stands alone on one side and the rest on the other. The first
  diagram is on p. 139 and the other five on p. 140: the running head
  that begins p. 140 stands between the first and the second (its
  foot number, 139, is lost in the copy), and the foot number 140
  follows the sixth. The lecture as Pearce reports it begins on
  p. 141; there Auden says that Venice needs Othello for his soldiering
  and only puts up with him socially, which agrees with DH p. 266.
- Miller, Auden: An American Friendship (1983). The research notes
  (C_auden_on_works.md, section 7 and H7) give his sentence about the
  blackboard from snippets, with pages 27-28 as approximate. I ran
  archive.org's full-text search myself (the address is
  archive.org/services/search/beta/page_production/ with
  service_backend=fts and the phrase in user_query) and saw, in the
  snippets returned from the scanned copy of the book
  (audenamericanfri00mill), the sentence about the blackboard with the
  clause before it (when Auden reached Shakespeare) and the sentence
  after it (that Miller and others were put off). The same search
  shows James Fenton quoting the sentence in The Strength of Poetry
  (seen in a snippet only; not cited). The snippets carry no page
  number and the book cannot be opened in full from here.
- The fifth `auden` entry now gives Pearce's diagrams first, which I
  read in full, and Miller's memory after them. Pearce's sixth diagram
  bears Miller out on the first half of his sentence. Nothing in
  Pearce says that Auden called Iago the most honest person in the
  play; that half is Miller's alone. No caption leans on either.

### The words: Schmidt's Shakespeare-Lexicon (1902), at Perseus

Each entry fetched and read; the files are kept in the scratchpad as
othello-poet/schmidt_*.html. Line numbers are the Globe's.

- Honest: sense 2, honorable, respectable, cites 3.3.103 (row 100.1);
  sense 1, upright, true in word and deed; sense 4, chaste, cites
  3.3.384 (row 289.1).
- Monster (the noun): quotes rows 112.1 and 112.2 as a peculiar
  passage and explains the word there as something monstrous.
- Echo (the verb), sense 2: to repeat in sound; quotes row 112.0
  w5-7. This is the word of the checker's one warning.
- Stop (the noun), sense 2: a ceasing of speech, an interruption;
  quotes the line of row 116.3.
- Lie (the verb of lying down), sense 2: to lie with, of the bed.
  Lie (the verb of falsehood): no line of this passage under it, but
  it sends the reader to 4.1.35 for comparison and lists 3.4.2 as a
  play on the word.
- Belie: to tell lies about; cites 4.1.36. Fulsome, sense 1:
  disgusting, nauseous; cites 4.1.37.
- Invest, sense 1: to dress; quotes 4.1.40. Instruction, sense 5:
  prompting, suggestion; quotes 4.1.41. Shadowing: full of shapes and
  images; quotes the same sentence (not used).
- Cause (the noun), sense 1: what produces an effect or is the motive
  of an action; quotes 5.2.1.
- Monumental, sense 2: of a human figure placed over a grave; quotes
  5.2.5. Light (the noun): the entry begins by calling it a word much
  played on by the poet; sense 7, life, ends with a "cf." to 5.2.7,
  so the ground says the entry refers to the line, not that it quotes
  it. Minister (the noun), sense 3: a servant in general; cites 5.2.8.
- Cunning (the adjective), sense 4: made with skill; quotes 5.2.11
  and notes that the Quartos have the plain form of the word. Pattern
  (the noun), sense 3: something made after a model, and emphatically
  a masterpiece; quotes 5.2.11.
- Promethean: given to men by Prometheus; cites 5.2.12. Relume: to
  light again; quotes 5.2.13 and records that the first Quarto has
  another verb there and the later Quartos a longer form.

After reading Schmidt I changed four glosses that I had taken from
the Oxford dictionary alone (the words at a3s3 100.1 w3, a4s1 49.0
w17, a5s2 4.0 w3 and 4.4 w3) and added the gloss at a5s2 4.10 w1-2.

### The words and the figures: A New English Dictionary (Oxford)

Read in the OCR of the scans at archive.org; the copies are kept in
the scratchpad as othello-poet/ned_*.txt, and the line numbers below
are lines of those files.

- Vol. I, 1888 (oed01arch): Anadiplosis (126583), Antanaclasis
  (148414), Antimetabole (155100), Belie v.2 sense 2 (328634-328646).
- Vol. II, 1893 (oed02arch): Cause sb., sense 3 (near 81590) and
  senses 7, 8 and 9 (81797-81872). Sense 9, a charge or accusation, is
  marked obsolete; its example is a line of King Lear where the cause
  asked about is adultery (found, not put in a caption). Confess v.,
  sense 10 (333629-333645): the proverbial phrase, which the
  dictionary says appears to have been a degree ruder than giving the
  lie; it quotes the line of row 49.0 w19-26.
- Vol. IV, 1901 (oed04arch): Fulsome, sense 6b (262656): morally
  foul, obscene; this line is its first example.
- Vol. V, 1901 (newenglishdicpt105murruoft): Honest (149660), senses
  1c, 3a, 3b (149799) and 3c.
- Vol. VI, 1908 (oed6aarch): Lie v.1, the forms (104594) and sense 1f
  (near 105126); Lie v.2 (106305), sense 1b. (oed6barch): Minister
  (208756); Monster (278932); Monstrate (279396-279404); Monumental,
  sense 1 (281644), with this line as first example.
- Vol. VII, 1909 (oed07arch): Promethean (601911), Prometheus
  (601968).
- Vol. VIII, 1914 (oed8aarch): Relume (178131), first example this
  line. The public page of the Oxford English Dictionary for relume,
  v., gives the earliest evidence as before 1616, in Shakespeare.
- Vol. IX, part 1, 1919 (oed9aarch): Stop sb.2, sense 6b
  (460819-460828); quotes the line of row 116.3.

The two dictionaries do not agree on the word at row 49.0 w17. The
note under the word gives both, the gloss gives the Oxford sense, and
the caption uses the one plain word that both bear out. It is in
`open`.

### How the verse and the sentences work

- E. A. Abbott, A Shakespearian Grammar (1870; the 1901 printing, at
  archive.org; kept as othello-poet/abbott.txt). Section 508 (line
  26391): a foot or syllable can be left out where there is a marked
  pause. Section 511 (26681-26870): short lines among lines of five
  accents; a speaker pausing to watch the effect of his words; action
  taking up the space of words; the highest passion going into prose,
  with this speech of Othello's (4.1.34-44 in the Globe's numbers)
  and one of Lear's as the examples (lines 26709-26710). Section 513
  (27054): the amphibious section. Section 515a (27273-27280): prose
  is used for letters and to lower the pitch, and also to express
  frenzy, with the same speech of Othello's as the example.
- Paull F. Baum, The Principles of English Versification (1922), the
  copy in .cache/handbooks. Chapter 3, on pause: the rest is a pause
  that takes the place of an unstressed element, and where light
  syllables are lacking the rest supplies their place. Chapter 4 says
  Shakespeare changed between prose and verse as subject or tone
  required (read; not cited, since Abbott speaks of this very speech).
- William Strunk, Jr., The Elements of Style (the 1920 edition,
  Project Gutenberg no. 37134; kept as othello-poet/strunk.txt, lines
  1336-1339), rule 18: the place for what is to be most prominent is
  usually the end of the sentence. The caption keeps his "usually".

### Other places in the play that a ground points at

All read in the text printed here.

- a3s3 rows 116.1 to 116.3: Othello on Iago's pauses.
- a3s3 row 146.1: Iago's use of the noun for jealousy.
- a3s3 rows 176.1 and 289.1: Othello says the word of his wife, the
  second time in doubt. His other uses of it in the scene after the
  plate (rows 189.0, 199.0, 285.0) are of Iago or to him.
- a3s3 rows 164.0 and 348.0: the two lines in the third `auden`
  entry.
- a3s3 rows 342.3 to 342.4 and 346.1 to 346.3: the order for Cassio's
  death, and the resolve on Desdemona's.
- a4s1 rows 31.0 to 35.1: Iago's first word that Cassio has said
  something. He does not say what. I had written that he reports a
  confession; he does not, and the caption, the reason and the ground
  of the Figure lens now say only that the first talk of a confession
  comes here. The word confessions is Othello's (row 49.0 w18).
- a4s1 block 50 (the stage direction) and rows 52.1 to 52.3.
- a4s1 blocks 174 to 224: the two men settle the deaths in prose.
- a5s2 block 1: the stage direction. It is an editor's. The Folger
  has Othello enter with a light, from the Quarto, and Desdemona in
  her bed. The caption's words for the first sense of row 4.6 hold
  either way.
- a5s2 rows 58.1 to 58.4: Othello tells her to confess and that she
  is to die, in one speech.
- For `caveats` and `open`: a3s3 row 319.2 (Iago's untruth about the
  handkerchief) and a5s2 rows 224.1 to 228.0.

## The counts

Made with small scripts over the text printed here (kept in the
scratchpad: othello-poet/count2.mjs and wc2.mjs) and run again before
handing in. A word is what stands between spaces or dashes; verse and
prose are as the text prints them; a speech is one turn under a
speaker's name.

- Othello: 832 lines of verse, 5,879 words of verse, 360 words of
  prose in 24 speeches, all in Act 4. Before a4s1 block 45 he has 511
  lines and 3,653 words, all verse. His prose: a4s1 blocks 45 and 49
  (2 and 74 words); blocks 116 to 153 (72); blocks 174 to 224 (192);
  a4s3 block 15 (20).
- Iago: 804 lines of verse, 5,986 words of verse, 2,431 words of
  prose in 82 speeches. By listener: Roderigo 1,478 (a1s3, a2s1 from
  block 172, a4s2); Cassio and the men drinking with him 634 (a2s3;
  a4s1 blocks 122 to 170); Othello 120 (a4s1 blocks 176 to 220);
  Desdemona, the company on the quay and himself aside 118 (a2s1
  blocks 136 to 145); Brabantio 81 (a1s1). I settled the listener of
  each prose speech by reading it. The 59 words at a2s1 block 172
  begin with a sentence that may be to an attendant; they are counted
  with Roderigo.
- By act, in the order verse lines, verse words, prose words. Othello:
  153, 1,132, 0; 86, 631, 0; 255, 1,793, 0; 127, 843, 360; 211,
  1,480, 0. Iago: 146, 1,126, 658; 210, 1,623, 1,282; 232, 1,712, 0;
  125, 872, 491; 91, 653, 0.
- The text here prints the two words at a4s1 block 45 as prose. The
  Folger sets them in a verse line with rows 43.0 and 47.0
  (4.1.42-44). Counted that way Othello's prose is 358 words.
- The word of row 100.1 w3 and its noun come 52 times in the play (42,
  9, and one possessive of the noun). The 21 before this line: a1s1
  17.8, 50.2; a1s3 131.1, 142.0, 188.17; a2s1 167.2; a2s3 7.0, 111.3,
  153.8, 171.1, 190.0, 218.0, 224.0, 227.1, 227.5, 227.17; a3s1 30.0,
  32.0, 51.1; a3s3 7.0, 45.5. The twelve said of Iago or of what he
  does: a1s3 131.1, 142.0; a2s1 167.2; a2s3 7.0, 153.8, 171.1, 190.0,
  218.0, 224.0, 227.1; a3s1 51.1; a3s3 7.0. Four of the twelve are
  Iago's own. I read all 21 in their lines. One stands inside a
  question (a3s1 30.0) but none asks whether someone is honest.
- The noun of row 112.1 w5 comes six times: a3s3 112.1 and 146.1,
  a3s4 158.2 and 160.0, a4s1 70.0 and 72.1. The adjective made from it
  comes earlier (a1s3 188.21, a2s1 9.3, a2s3 165.13), which is why the
  caption says "the noun".
- Plate 1: Iago's four speeches are 1, 3, 6 and 3 words. Plate 2:
  rows 43.0 and 47.0 are 1 and 7 words; row 49.0 is 67 tokens and 74
  words, because four tokens hold words joined by dashes.

## Looked for and not found, or not checked

- The full entries of the present Oxford English Dictionary: they ask
  for a login. Only the public page for relume was read.
- Pearce's pages 137 to 145 in research/auden/pearce.txt: missing
  there; read in the second copy.
- Miller in a full copy: not to be had from here (see above).
- Wilson Knight's essay on the play, which Auden asked the class to
  read: not read, and nothing in the reading rests on it.
- The 1622 Quarto itself. What is said of it comes from the Folger's
  marks, Schmidt's notes and the Folio transcription.
- Auden's 1947 lecture on the play (Lectures on Shakespeare, 2000):
  the research notes have a few sentences from snippets (Iago and the
  gratuitous act). Nothing in them bears on these three passages and
  I used none of it.
- A handbook statement about what a line shared between two speakers
  does. Baum has none; Abbott has the amphibious section. No caption
  says what a shared line does, only what the editions print.
- Abbott does not list rows 106.0 to 112.0 under section 513.

## The checker

`node build/tools/check-reading.mjs othello` prints "no problems", one
warning, and "the printed notes are fit to print".

The warning is on the word at row 112.0 w6, which the Figure caption
of the first plate gives in italics inside a phrase of three words.
The lint takes it for a claim of mine about what the passage does. It
is Othello's own word for what Iago is doing, quoted from the plate,
and Schmidt glosses it under Echo, sense 2, from this line. The lines
themselves say it, which is the case the lint allows. I kept it,
because the sentence is about who names the device.

## A last reading, as the critic is told to read

CRITIC.md came after the reading was done. I did not run
`build/tools/prose.mjs` or `build/pieces.mjs`, which write outside this
folder; a copy of the same gathering in the scratchpad
(othello-poet/prose_dump.mjs) printed every sentence the page prints,
and I read them against the critic's list. What I changed, with
othello-poet/edit16.mjs to edit18.mjs:

- Second passage, Figure caption. The dictionary says the proverb
  appears to have been a degree ruder than saying that someone lies. I
  had made that "a ruder way of saying" it, which is more than the
  entry says; the caption now keeps the dictionary's own five words.
  The order for Cassio's death is put in the present tense like the
  rest.
- Second passage, Play caption. I had written that the two men settle
  in prose how Desdemona and Cassio are to die. They settle how she is
  to die; of Cassio, Iago says only that he will see to him (a4s1
  blocks 214 to 220). The caption and its ground now say that they
  settle the two deaths. Abbott's section 515a is added beside 511.
- The frame "Auden writes that" opened four captions. It now opens
  two; the sentences say what they said.
- The fourth `auden` entry gave Pearce's sentence on what the lectures
  were about with the psychology left out. It is back, in my words.
- The fifth `auden` entry: Pearce's six diagrams, read in full, now
  come before Miller's memory of the blackboard.
- `sources`: titles in italics, as the model now sets them, and three
  entries say which book the captions mean by the Oxford dictionary,
  the lexicon of Shakespeare's words and the Victorian grammar.
- `caveats`: the same five matters, in short sentences as the model
  has them, each entry within the checker's fifty words. POET.md says
  "at most five sentences"; the model, as examined, has five entries
  of one to three sentences, and I followed the model because five
  sentences of fifty words each were hard to read. If five sentences
  is meant strictly, the first sentence of each entry is the one to
  keep. The second caveat now gives the reason the handkerchief story
  is untrue: Iago takes the handkerchief at a3s3 block 246 and does
  not leave the stage before he tells the story at block 319. The
  fifth says which part of the long speech is the Folio's alone: from
  row 49.0 w19 to the end, the words the Folger sets in square
  brackets (4.1.48-54).
- Third passage, Figure: the lexicon's head-note on the noun is added
  to the ground and to the printed note.
- Second passage, Sentence caption. A script (othello-poet/runs.mjs)
  looked in both files for any run of six or more words shared with
  the play as printed here. It found one of seven: two plain words of
  mine stood before an italic phrase of five, and the speech has the
  same two words in that place (row 49.0 w51-57). The sentence now
  takes two words only (w53-54) and says the rest in my words. What
  is left are the three italic phrases of exactly six words (row
  106.0 of the first passage; rows 4.10 and 4.9 w4-9 of the third),
  which the brief allows. The notes share no such run with the play.

What I looked at and left: the first three sentences of the third
passage's Figure caption are short and built alike, because the line
they describe is built that way; the last sentence of the second
passage's Word caption gives Iago's own word at row 52.3, which is a
fact of the text and bears on the caption's point, so it stays.

## For the lead

- Each plate holds a word or words said twice; the title names that.
- The piece has its two quotations of Auden. Pearce and Miller are
  paraphrased.
- Miller's sentence is the one thing here not read in a full copy.
  If that is too thin, cut the last two sentences of the fifth `auden`
  entry and Miller from its source line, the fourth `sources` line,
  the last sentence of the first caveat and the last `open` item.
  Pearce's diagrams stand without him, and nothing else depends on it.
- `caveats` gives a reader five things; `open` says the same and more
  for you, with the working names.

## For the artist

- The Play lens (plate `lie`, lens 3) is a shape lens. Its `facts`:
  `acts` is six rows, the five acts and the whole play, each with
  verse lines, verse words and prose words for Othello and for Iago.
  `othelloBeforeThisPassage` is what Othello has spoken before the
  two words of block 45. `othelloProse` lists the four places of his
  prose and `iagoProse` Iago's prose by listener, with words; where an
  entry has `read`, it is the place for a link, and `blocks` beside it
  is the working record. `counted`, `passageNote` and `grammarSource`
  are working notes and are not printed. What a reader should see at
  a glance: Othello's prose is nothing in every act but the fourth,
  and Iago has prose in Acts 1, 2 and 4 and none in 3 and 5.
- Figure on plate 1 is drawn as a chain with three tags, one for each
  word. Within a tag the kit joins each part to the next; the joins
  that matter are the ones from the end of one speech to the head of
  the next (98.0 to 100.0, 100.1 to 102.0, 108.0 to 110.0).
- Figure on plate 2 is a cross: tags A and B are the two halves of the
  proverb, each twice. Tag C marks the two words that give the order
  (row 49.0 w27 and w32) and is not joined. The row is prose and
  wraps, so the four parts may not stand on one line.
- Figure on plate 3 is drawn as a pair. Only the two halves of row 4.6
  are joined; the other parts are colored by tag (A the flame, B her
  life) and stand too far apart to be joined, which is what I want.
- Sentence on plate 2 has three tags: `iago` (his eight words),
  `whole` (the three sentences) and `pieces`. Sentence on plate 3 has
  five: `if`, `to`, `main`, `who`, `verb`, each twice, once in each
  sentence.
- Beat on plate 1 has four pinned remarks, at rows 98.0, 100.0, 108.0
  and 112.0. Two words carry a division: row 112.0 w4 as one syllable
  and row 112.2 w1 as two.
- I ran every phrase set in bold or italic in the captions through
  the page's own matching rule (site/js/kit/plate.js, `find`). Each
  lands on words that are meant, with these things to know. The two
  words that Othello asks at block 45 light in four places, because
  they come four times in the passage (a4s1 45.0, 47.0, and twice in
  49.0); so does the two-word phrase of address in the first plate's
  Figure caption (rows 102.0, 106.0, 110.0, 112.0); the one-word
  question in the Beat caption lights rows 98.0 and 100.0 alike. Six
  phrases light nothing because they are not on their plate: Othello's
  word for the pauses and the noun honesty (plate 1); Iago's word at
  row 52.3, the dictionary's two words for giving the lie, and the
  stage direction (plate 2); the single letter in the Sentence caption
  of plate 3.
- The plates show speakers' names on plates 1 and 2 (two speakers) and
  none on plate 3 (one).

## The finisher's changes after the critic (3 October 2026, 12:18 to 12:45 UTC)

Read before anything was changed: `remake/BRIEF.md`, `remake/FINISHER.md`,
`remake/CRITIC.md`, two sections of `remake/EXAMINER.md` ("The printed
notes", "The scans"), all of `critic.md` and `exam.md`, the parts of
`art.md` on the reading and under "Proposed for the reading" (nothing is
proposed), the end of these notes (nothing was recorded as set, and no
entry had been taken out of the list of what Auden said), the whole of
`reading.json` with its `open` list, the script, the checker's proof,
and every printed sentence (`node build/tools/prose.mjs othello`: 3,543
words then, 3,528 now).

The reading as I found it is `finisher/before.json`. Every change is a
small exact edit made with `build/tools/edit-exact.py`:
`finisher/edits-1-spans.json` and `finisher/edits-2-words.json`. The two
files `finisher/undo-1-spans.json` and `finisher/undo-2-words.json` take
back any one of them. The script `site/js/pieces/othello.js` was not
edited (it is byte for byte `finisher/before-othello.js`, and
`node --check` passes). No `turn`, `join`, `heading`, tab label or
`facts` key was touched. Words of the play are pointed at by row and
word number, and Auden is not quoted.

A check on myself: the reading as it stands was compared key by key
with `finisher/before.json`. These differ and no others:
`plates[1].lenses[0]` (`caption`, `grounds[4].claim`,
`grounds[4].source`, `stands`); `plates[1].lenses[2].spans` (`[5]`
replaced by `[5]` to `[10]`); `plates[1].lenses[3]` (`caption`,
`grounds[2].claim`); `plates[2].lenses[0].stands`;
`plates[2].lenses[2].caption`; `open[0]`, `open[4]`, `open[7]`.

### Set: six points

**1. Second passage, Sentence: six rules where there was one** (the
critic's sections 4 and 8.1; the artist's note under "The reading").
- What was wrong: one gold rule ran under words 59 to 66 of row 49.0,
  while the caption and the key speak of pieces of one to four words.
- Now: six spans in place of `spans[5]`, as the critic gave them: 59 to
  59; 60 to 63; 64 to 65.1; 65.2 to 65.2; 65.3 to 65.3; 65.4 to 66.
  That is one, four, two, one, one and two words, and each ends at a
  stop of the text. The label of the color is the poet's again, "pieces
  of one to four words", on all six.
- Ground: the lines themselves. The checker's proof lists word 65 of
  row 49.0 with its four parts and prints the word each span begins
  and ends on; each lands on the piece meant. The kit says in its own
  note that a word number in a span may name a part
  (`site/js/kit/lens-sentence.js`, lines 5 and 6), and the checker's
  `checkWordRef` takes part numbers in a span. (The artist had taken a
  span to begin and end at a whole word; the critic did not know
  whether the checker would take a part.)
- What moved (rule 8): nothing in the type. The speech turns its lines
  exactly where it did, at 1280, 390 and 320 px. Only the gold mark
  changed: six rules, each with its two end ticks, each stopping under
  the last letter of its piece and before the stop. Where a piece
  turns the line (the two-word piece at 1280 px, the four-word piece at
  390 and 320 px), its rule is left open at the end of the line and
  closed on the next, as the blue rules already do. At 390 and 320 px
  word 65 itself turns after its second part, and the rules follow it.
  The other tabs of the passage are as they were: the kit joins the
  words of a span into one unbreakable run only when the run is short
  (in prose, 14 letters), and none of the six is.
- The picture is better, so the mark stays. If it is ever to go back:
  `finisher/undo-1-spans.json` restores the one rule and the critic's
  label, "the end, in pieces of one to four words".

**2. Second passage, Word: the last sentence of the caption** (the
critic's change 8 and section 8.3; rule 9, words the critic added).
- What was wrong: the critic had put three words of its own after "has
  fallen", to stop the verb being read of another kind of fall. The
  play has no such words: its direction says that he falls, and in
  what state. The critic had first written the direction's words and
  taken them back, since the lens had no ground for them and a fact
  was not the critic's to add.
- Now: "When Othello has fallen in a trance, …". The three words are
  the stage direction's own. The caption still has 113 words.
- Ground, opened in this run with `show.mjs`: `othello/a4s1`, block 50
  (the direction) and block 52, rows 2 and 3 (Iago's word for such
  women). The fifth ground of the lens now names the direction and
  block 50, and the last sentence of its `stands` begins with a link to
  the direction, as the Sentence tab's `stands` does (50 words, four
  sentences).

**3. Second passage, Play: where Auden's remark comes from** (the
critic's doubt 2 and section 8.5).
- What was wrong: the sentence on a different Iago for each listener
  stood bare between two sentences about verse and prose, and so read
  as if Auden were speaking of verse and prose. He is not.
- Now it begins "Writing of how the part should be acted,". Eight words
  more; the caption has 113.
- Ground, opened in this run: *The Dyer's Hand*, p. 258, in the scan
  (`dh.txt`, lines 12284 to 12293; the page runs from the running head
  at line 12257 to the next at line 12311, counted on from the folio
  256 at line 12160). He says there what the actor must do with others
  and alone, and gives the many Iagos as the reason for the first.
  Nothing on the page is about verse or prose. `runs.py` finds no run
  of four words shared with the scan. The third ground of the lens now
  says the same.

**4. Third passage, Word: the last two sentences of the caption cut**
(the critic's doubt 3 and section 8.6).
- What was wrong: the two sentences on the words at row 4.11, word 6,
  and row 4.12, word 4, said what each word means and that one is
  first recorded here, and gave no reason. Rule two asks a caption for
  the reason. The critic had none with a ground, and neither have I.
  Both sentences also said again what the two notes printed directly
  under the caption say, and what the glosses under the words say.
- Now: the caption ends with the sentence on the word at row 4.4,
  word 3. It has 84 words. Nothing a reader could learn is gone: the
  two glosses and the two notes stand as they were. The `why`, the
  grounds and `stands` are unchanged; they serve the notes of the tab
  as well as its caption, and still fit.
- Ground: none is needed for a cut. Undo: the seventh edit of
  `finisher/undo-2-words.json`.

**5. One of the critic's four marks taken off** (sections 2 and 8.4).
- In the `stands` of the third passage's Figure tab the asterisks stood
  round a sense, the lexicon's meaning for the word at row 4.6. A sense
  is not a word named as a word, and everywhere else in this piece a
  sense stands bare. The words are the poet's again; none changed. The
  other three marks are kept: see "Left".

**6. The `open` list brought up to date in three places** (rule 7;
not printed).
- The first item said that the two passages show Iago committing
  himself to nothing. The examiner found that in the second he reports
  that Cassio has talked (row 39.0). The item now says so.
- The fifth said that the caption gives the two editions' divisions.
  Since the critic's change 2 the third and fourth remarks of the Beat
  tab give them more fully than the caption. The item now says so.
- The eighth still gave Miller's page from the research notes as 27 to
  28. It now says that the examiner corrected it to p. 29 (the item
  after it).

### Left as it is: twenty-seven points

- **The name of the measure** (the critic's change 1, section 8.2).
  The critic's plain words stand, as the lead asked. They say what
  "rising" says, the name the examiner passed (`exam.md`, section 2).
  One thing to weigh is under "For the lead".
- **Three of the critic's four marks kept** (section 8.4). The two
  glosses under row 49.0 (words 0 to 2, words 7 to 9) each name the
  phrase as a phrase, in its dictionary form, before its meaning. In
  the picture the phrase stands upright and the meaning in italic, and
  a reader can tell the one from the other. The word marked in the
  third entry of "More from Auden" is the word Auden reads: on p. 249
  he writes of the use of that word in this place (`dh.txt`, line
  11827, read in this run).
- **Second passage, Figure: the turned proverb beside the order of
  events** (doubt 1, section 8.5). Left, and passed up. I read the
  three places again with `show.mjs`: the order for Cassio's death
  (`a3s3`, rows 342.3 to 342.4), Iago's first word that Cassio has
  talked (`a4s1`, blocks 31 to 35), and Othello to his wife (`a5s2`,
  rows 58.1 to 58.4). Each sentence of the caption says what those
  lines say and the examiner tested them. The caption draws no
  conclusion in words. To cut the two sentences would leave Auden's
  sentence on Desdemona next to a proverb said of Cassio, which is a
  weaker setting side by side and no more grounded.
- **The checker's one warning** (section 8.8). The word is Othello's
  own, at row 112.0, word 6, quoted in italics. It stands on purpose.
- **Six sentences the critic doubted and left** (section 7, doubts 4
  to 9): the last sentence of the Word caption of the second passage
  (a fact of the text, rows 52.2 to 52.3, now with the direction's
  words); the short sentence on the bed in the same caption; the three
  short sentences that close the Sentence caption of the third
  passage; the last four words on rank in the third entry of the list
  (read against p. 249: a fair short form of Auden's own contrast);
  "the taking" at the head and in one caption; the name of the Folger
  edition in roman in one `stands`. Each is wording the critic could
  have changed and chose to keep, and I found no fault in any.
- **The two small things on the Play drawing** (section 6): the bare
  numbers in the two lists, and the fourth name in Iago's list. The
  critic shows no fault, so the script and the facts are untouched.
- **Three things on the page** (section 9): the persons of the third
  passage named late; the two dictionaries met before the foot of the
  page says which books they are; the bare numbers again.
- **Three things that recur and are the method** (section 3): Auden's
  point at the head said again at the passages; "first example" in
  three notes; two tabs of the third passage ending on one fact.
- **Seven doubts of the examiner** (`exam.md`, section 11): Miller not
  seen in a full copy; Pearce's pages read in the second copy only;
  Auden's pronoun on p. 266 stepped round and not settled; the 1622
  Quarto not seen; two tabs of the second passage standing on words
  that are in the 1623 Folio only; only the public page of the present
  Oxford dictionary seen; the short pieces of the first passage open
  to more than one scansion. None can be mended from here, and the
  caveats tell the reader of each that matters to a reader.

### For the lead

Worst first. The first two are also counted among what was left.

1. **The Figure caption of the second passage** sets the turned
   proverb beside the order of events in the play (the critic's doubt
   1). Every sentence is a fact of the text and no source makes the
   link. It is the one place on this page that is near what the person
   this site is for named. I left it; only he or the lead can say
   whether two facts set side by side fall under his rule. If it is to
   go: cut the caption's fourth and fifth sentences, take the plot out
   of the `why`, and take out the fourth, fifth and sixth grounds and
   the three links of `stands`.
2. **The name of the measure**, to be settled across the pieces. One
   thing to weigh for this page: its rule for row 110.0 and for row
   112.0 begins on a beat, and the fourth remark says so of the second.
   The critic's wording says of each beat that it follows a lighter
   syllable, and a reader can hold it against those two rules;
   "rising" names the measure without saying it of every beat.
3. **Each sense said three times on a Word tab** (under the word, in
   the caption, in the note; the critic's section 8.7). It is how the
   tab is built, here and in other pieces. On the third passage two
   words are now said twice. The rest needs a decision on the form.
4. **Words that are in the 1623 Folio only.** The Figure and Sentence
   tabs of the second passage stand on them, and all six new rules lie
   there (row 49.0 from word 19 on). The fifth caveat tells the reader,
   and the examiner's item in `open` says what a lead who wanted only
   shared words would have to drop.
5. **Not in any picture.** Under the rule of the loaded machine I
   photographed only what I changed. Still unseen since the critic's
   changes: the Figure tab of the first passage (its change 6), the
   Figure tab of the third (change 11), and the head and foot of the
   page (the titles; changes 15, 16 and 18). The two `stands` I changed
   lie folded at the foot; I read them in the built data
   (`site/data/pieces/othello.json`, built 12:32 UTC and again 12:41).
6. **Another file.** `remake/research/C_auden_on_works.md`, section 7
   and H7, still gives Miller's page as 27 to 28. The examiner settled
   p. 29 (`open`, ninth item). Not mine to edit.
7. **The Play drawing.** If the unit of the bare numbers in the two
   lists should be said outright, the place is the title of each list,
   line 228 of the script, as the critic says. No fault was shown, so
   I changed nothing.

The kit: nothing new from me. My 320 px picture shows row 39.0 turning
inside its joined word, which is the artist's S1.

### Refused, and housekeeping

The permission system refused nothing. Besides my own folders, two
tools that the role file sets out wrote where they always write:
`build/pieces.mjs` (`site/data/pieces/othello.json`) and
`build/tools/prose.mjs` (`review/remake/prose/othello.md`). The
picture tool wrote only into `shots/finisher/`. Twice I kept the
checker's output for a few minutes in the session's scratch folder,
outside the project; that was a slip, and both files are removed.
`finisher/close.mjs` is a small script of mine that cuts a place out of
a picture already taken and enlarges it; it does not open the site.

### The checker and the pictures

`node build/tools/check-reading.mjs othello --print`, 12:41 UTC, after
the last change. Its last lines:

    no problems
    WARNINGS (1)
      plate echo lens 0 (figure) caption: "echoes": RULE THREE: a claim about what the passage does to someone, or stands for. Keep it only if Auden, a source or the lines themselves say it
    the printed notes are fit to print

The one warning is the old one and stands on purpose. Then
`node build/pieces.mjs othello` and `node build/tools/prose.mjs
othello` (3,528 words).

Pictures taken, all in `shots/finisher/`, each run ending "nothing
reported; now look at the pictures", and every one opened and looked
at:

- `othello-lie-2-sentence-1280.png` and `-390.png` (12:28), with a
  close cut of the last lines of each (`-1280-close.png`,
  `-390-close.png`), and `othello-lie-2-sentence-320.png` (12:36): the
  six rules and the key.
- `othello-lie-0-word-1280.png` and `-390.png` (12:33): the new last
  sentence; the two glosses with their phrases upright; the critic's
  changes 7 and 17, which no picture had shown.
- `othello-lie-3-play-1280.png` and `-390.png` (12:33): the new clause;
  the drawing as it was.
- `othello-light-2-word-1280.png` and `-390.png` (12:34): the shorter
  caption over the six notes; the critic's changes 13 and 14.

Looked at for comparison and not taken again: the critic's pictures of
11:39 (`othello-lie-2-sentence-1280.png` and `-390.png`,
`othello-lie-0-word-1280.png`, `othello-lie-3-play-1280.png`) and the
artist's `othello-light-2-word-1280.png` of 09:54.

## The lead after the finisher (3 October 2026, 13:00 UTC)

Read: the finisher's record above, all of it. Looked at: its eleven
pictures in `shots/finisher/`, and five of my own in `shots/lead/` taken
at 12:55 for what no picture had shown since the critic (the Figure tab
of the first passage and of the third at 1280 and 390; the whole page
at 1280, head, list, sources and foot).

- **The finisher's first point, the turned proverb beside the order of
  events: kept.** The rule is "we can have a point of view, ideally
  audens, but it cant be all made up". Every sentence of that caption
  is a fact of the text that a reader can open from the foot of the
  page (the order for Cassio's death, Iago's first word that Cassio has
  talked, Othello to his wife), the last sentence is Auden's own, with
  its page, and the caption draws no conclusion in words. It gives a
  reason for the figure out of the play itself, which is what the
  second rule asks. If the person the site is for reads it otherwise,
  the finisher's line says how it comes out.
- **The name of the measure, the headwords after "under", a sense said
  three times on a Word tab:** matters for every piece, written down in
  `remake/LAST-PASS.md` for the last reading across the pieces.
- **Miller's page in the research notes:** corrected in
  `remake/research/C_auden_on_works.md` (sections 7 and 19, and a
  section of corrections at its end).
- **One thing for the kit:** an italic phrase that ends in a question
  mark nearly touches the word after it (the Word tab and the Play tab
  of the second passage). Sent to the eighth mending.
- Nothing else was changed. The piece is through every stage.

## The lead in the last pass (3 October, 16:08 UTC)

The key of the Play drawing says "every mark is drawn as long as its
words" (item 7 of the last pass: the old wording could be read as
"provided that"). The script before is `lead/othello.js.before-key`;
photographed at 1280 and 390. The record is `review/remake/last-pass/RECORD.md`. The snippet test found
no run (`review/remake/grams/LEAD.md`).

A dictionary's headword after "under" in the folded notes and the sources is in
italics now wherever it stood bare in lower case, or is a word of another
language (item 2 of the last pass, 16:20 UTC; with it, a dictionary's name set as
the rest of the site sets it). Type only: no word changed. Edits in
`lead/edits-headwords.json`, the reading before in
`lead/before-headwords.json`; checker as before. The record is `review/remake/last-pass/RECORD.md`.

## The lead in the last pass: the measure's wording and the Word tab (3 October, 18:06 UTC)

One wording for the measure of a line, after Ariel's song, from the reader who went through every Beat tab (`review/remake/last-pass/measure/`; the lead's amendments are in `lead-apply.py` there, and the reasons in `review/remake/last-pass/RECORD.md`, item 1). A measure of stresses is named by its beats, by its syllables where the count matters, and by "the line beginning off the beat" or "on a beat". In verse measured by count an accent is a place the count fixes and a stress is what the voice does. "Light syllable", "weak", "the pattern", "the meter" and "scanned" give way to "unstressed", "where the measure has no beat", "the measure" and "marked".

Changed here: `echo`, tab Beat: meterName. The edits: `lead/edits-measure.json`; the reading before: `lead/before-measure.json`. The checker says what it said before. No mark changed, and the new sentences were held against the five scans: no run of five.

## The lead in the last pass: one wording for each figure (3 October, 19:55 UTC)

Each Figure tab says in one line under the figure’s name what the figure is. Laid side by
side, the 82 tabs gave the 17 figures that stand on more than one page a different line
on nearly every page. Each figure now has one line, with a tab’s own tail after “; here”;
anaphora, epistrophe, anadiplosis, parallelism and asyndeton keep one sentence whose number
and unit are fitted to the passage. No name, mark, caption or claim changed in this step.
Why and how: `review/remake/last-pass/RECORD.md`, “One wording for each figure”; the table
of lines is `review/remake/last-pass/figures/lead/lead_lists.py`.

Lines changed here (1):

- `plates[0].lenses[0].plain`, the plate `echo`, the tab Figure (anadiplosis):
  was “a doubling back: the word that ends one sentence comes again to begin the next”;
  now “a doubling back: the word that ends one sentence begins the next”.

The checker says of the piece what it said before. Copy before:
`lead/before-figure-wordings.json`, with the list applied beside it.

## The lead after the word critic of the last pass (4 October, 00:08 UTC)

A critic read the lines written after the pieces' critics had read: the
figures' lines, the measures and the front page's cards. Its report is
`review/remake/critics/last-pass-words.md`; what the lead did with each
point is in `review/remake/last-pass/RECORD.md`. In this reading, exact
edits, each proved to change only the leaf it names (the file before is
`lead/before-last-pass-words.json`):

- `the same word said again with a different meaning`
  became `the same words said again with a different meaning`

The checker says what it said before.
