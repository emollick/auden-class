# Hamlet: the poet's notes

Piece `hamlet`. Three plates, eleven lenses. `node build/tools/check-reading.mjs hamlet`
ends with "no problems" and "no warnings" (last run 2026-10-03, after the last change).

The words of the play are pointed at by part, `block.row` and word number, as the
brief asks. Where a word has to be named here it is a single word or a phrase of
a few words. Nothing of Auden's is quoted in this file; his two quotations are in
the reading (`view.quote`, 14 words, and `auden[0].quote`, 20 words).

The scripts and the fetched pages named below are in the session scratch folder,
`scratchpad/hamlet/`, not in the project.

## 1. What changed while I worked

The first draft was written before rule three reached BRIEF.md and POET.md
(2026-10-03, about 02:20 UTC). When I found the rule and the checker changed I
read all three files and the rewritten model again and rebuilt the reading:

- added `view` (Auden's paragraph on Hamlet, The Dyer's Hand, pp. 451-52) and
  `grounds` on every lens;
- cut every sentence that summed up what a passage "means" on no ground, and
  every closing sentence that was mine alone;
- took the names of critics out of the captions;
- dropped the hendiadys lens (section 6) and put a word lens on the stage
  vocabulary in its place.

Then I went through every sentence as an examiner would, with the dictionary
entry, the scan or the count open beside it. These are the mends from that pass:

1. `about`: "with nothing done" was a judgment (Hamlet has arranged a play by
   then); it now says the uncle still reigns. The match is said to be rigged to
   kill Hamlet, and Horatio "has said he will put it off" (a5s2 block 159).
2. Naming: "a part of the body" was untrue of row 32.3 (breath is not one); it
   now reads "the breath, the eye or the face". "By the same parts" became "by
   much the same signs": the player passage (a2s2 380.5-380.7) has visage, eyes
   and voice, and the first passage has breath, eye and visage.
3. Words (first plate): the Queen's question (a1s2 block 30, row 1) is now the
   ground for what Hamlet does with *seems*. The gloss on *actions* said "a
   player's movements"; Schmidt's sense 7 is gesticulation in general, so the
   gloss is now "gestures, movements of the body". The note on *show* says that
   Schmidt files these two lines under "the act of showing" and that "a
   spectacle, a play" is another sense of the word (his sense 5).
4. Rhyme: the last sentence followed Auden's own words too closely without
   marks. It is now a paraphrase of two things he said in the 1947 lecture
   (Hamlet is an actor; he acts theatrically). "A rhymed pair marks an ending"
   went; the count stands in its place, with the handbook's statement of what
   the return of a rhyme does to two lines.
5. Beat: "three stresses fall together" leaned on a doubtful syllable (word 5
   of row 46.9). The caption now rests on what is sure: word 4 carries a stress
   in a place where the line has no beat, between two beats. I added the extra
   unstressed syllable before the pause in row 46.4 (word 4), which is where the
   question ends, and the handbook for the two claims about how the verse works.
6. Verbs: the count of the speech in Act 1, Scene 5 was wrong by three lines
   (the hosted text sets it as two blocks, 40 and 42, with a stage direction
   between). "Soliloquies" became "long speeches to himself". The last words of
   the speech proper (row 46.32, words 1 to 5) were added because they bear
   straight on Auden's sentence about Hamlet's inability to act.
7. Chain: my gloss of the two words at row 46.5 (words 0 and 1) went. No
   dictionary entry was found that cites the place, and the caption does not
   need it.
8. Words (second plate): "the words for living" was wrong for words that
   belong to the second half of the question, which may be about dying; it now
   says "the words of the question". *Outrageous*: "from the French for going
   beyond" was loose; the word comes through French and the Latin root is
   *ultra*, beyond (the exact wording of the note is in 14 below).
   *Shock*: Schmidt says a violent collision, a conflict, an encounter,
   with battle lines among his examples, so the caption says "as when armies
   meet". *Rub*: not only a bump in the green; whatever slows a bowl or turns it.
9. Crossing: the subject of the three clauses is now marked together with its
   forms of *be*, as one kind, and the caption ties the verb to the first words
   of the second plate. Labels on all marks were cut to three words or fewer,
   one label to a kind.
10. Words (third plate): "above all the flight and cries of birds" said a
    little more than Lewis and Short, who list lightning, the flight or notes
    of birds and other signs, and call most common only the kind that watches
    the flight of birds. The caption now says "most often the flight of
    birds", and the note lists the signs and then says which kind was the most
    common. "From the sparrow he draws what follows" claimed an inference the
    lines do not state; it now gives the order of the sentences only. Calvin's
    step from the sparrow to the flight of birds (Institutes 1.16.5) was added.
11. Shape: "seven times he talks to himself" was broken by a four-line speech
    at the end of Act 1, Scene 2 (a1s2 block 158); the caption now says seven
    speeches of twelve to fifty-eight lines, and the facts name the shorter one.
    "The last prose he speaks" became "the last of his speeches set as prose in
    this text". Every word count was redone with one definition of a word.
12. Auden: the paraphrases were moved further from his wording, the line
    numbers of the scans were corrected, and the lecture's remark about boredom
    and theatrical behavior was added to `auden[2]`. A last pass measured the
    paraphrases against the scans with a script (`overlap2.mjs`: the longest
    run of words a sentence of mine shares with his page). Three places still
    ran with him for eleven to fifteen words without marks: `view.says`, the
    soliloquy entry `auden[0].says`, and the Auden ground of the Crossing
    lens. All three are now in my own words; the longest shared run left is
    five words, each a common phrase. The model piece measures up to nine.
13. Grounds: a short quotation from Wikipedia was taken out (it would have been
    a third quotation of text in copyright), and definitions from the Online
    Etymology Dictionary were put in my own words.
14. A second pass over every dictionary entry, the handbook, the counts and the
    rows of the play, made after the reading first passed the checker, mended
    five more things:
    - the note on row 46.2 word 5 gave "excess" as the sense of the French
      word; the Online Etymology Dictionary gives that sense to the Latin form
      behind it and says the root idea is a passing beyond bounds. The note now
      says that;
    - the note on word 44 of the third plate cited Matthew 24:44 but ran for
      ten words with the Geneva wording of Luke 12:40. It now paraphrases
      Matthew 24:44;
    - the Rhyme caption said a rhyme's quick return "makes two lines one closed
      unit"; the handbook says the couplet is "felt as a unit", so the caption
      now says "felt as one closed unit", and the ground says where the
      handbook says it (of the short couplet, to which its section on the
      five-stress couplet refers back);
    - the Verbs caption said "the speech's last words" of words that end only
      what Hamlet says to himself (row 46.32, word 5; the block runs on to row
      34 when he sees Ophelia, and row 34 has the word "my"). The caption now
      says "speaking to himself here for thirty-three lines" and "those lines
      end on";
    - two grounds still ran for six words with the Online Etymology
      Dictionary's definitions; they are reworded (`overlap4.mjs` measures the
      reading against every saved page).
    The same pass added one source: Carter's Shakespeare and Holy Scripture
    (1905), p. 381, which sets the third plate's speech beside the two verses
    of Matthew that the notes name (section 7).

## 2. Auden's view, and where each thing he said was read

`view`: The Dyer's Hand (1962), "Genius & Apostle", the paragraph headed with
Don Quixote's name and Hamlet's. Read in the scan `research/auden/dh.txt`, lines
21421-21436. The running head for p. 451 is at line 21382 and for p. 452 at line
21433; the paragraph begins on 451 and its last sentence and a half are on 452.
What it covers: that Hamlet has no faith in God or in himself; that he has to
say who he is through other people; that he wishes to be what the hero of a
Greek tragedy is (Auden's four-word name for that is given in my words in the
reading: someone made by his situation; on p. 110 of The Enchafed Flood he says
in so many words that the situation makes Hamlet a hero); that this is why he
cannot act and can only "act". Nothing in it is about any one speech. The
captions say "Auden wrote that Hamlet ...", never that he said it of these lines.

Other things attributed to him:

- Soliloquy (Shape caption, `auden[0]`): "Balaam and His Ass", DH p. 110; scan
  lines 5208-5220, page head at line 5191.
- Hamlet is an actor, and acts theatrically (Rhyme caption, `auden[2]`): the
  1947 lecture in Lectures on Shakespeare, ed. Kirsch. Read only as extracts in
  `remake/research/C_auden_on_works.md`, section 8 and appendix H3 and H3b
  (lines 225-244, 1079, 1085). No page of the book was seen. The research note
  says Auden "agrees with Eliot"; the extract shows only that he cited Eliot's
  verdict and then gave his own objection, so `auden[2]` says "cited".
- The Enchafed Flood, p. 110 (`auden[1]`): scan `ef.txt`, lines 4554-4564. In
  this scan the page number stands at the foot (109 at line 4542, 110 at line
  4587). I tested that against a sentence whose page the research notes give
  as verified: the sentence on Tamino, p. 111, is at lines 4608-4609, between
  the numbers 110 and 111. The end of the last sentence is lost in the scan.
- Hamlet as a myth that belongs to actors (`auden[3]`): "Dingley Dell & The
  Fleet", DH p. 408; scan lines 19258-19265, page head at line 19249.
- The 1947 Saturday class and its examination on single words in Hamlet
  (`auden[4]`): `remake/research/B_pedagogy.md`, 1.N2 and 1.N3.

Seen and not used: DH p. 269 ("The Joker in the Pack", scan lines 12897-12898),
where he repeats as Shakespeare's own saying the figure of the mirror and
nature, which is from the advice to the players; two passing mentions in
`ef.txt` (near lines 1511 and 4226: Hamlet as the prey of reflection, and
Hamlet as the one Renaissance hero not known as a hero by his acts among
other men); nothing on Hamlet's speeches in `fa.txt`.

## 3. Plate "seems" (hamlet/a1s2, rows 32.0 to 32.10)

Why this passage. It is Hamlet's first long speech, and its subject is the
subject of Auden's paragraph: what a man is and what he can only play. Four
things can be seen in it: a sentence of six and a half lines that keeps its
predicate to the end (32.1 to 32.7, word 4); three lines built on one pattern
(32.3 to 32.5); the stage words (32.8 words 3 and 8, 32.9 word 7); and a rhyme
that comes only at the end (32.9, 32.10).

- Sentence. The sentence is a cleft: its grammatical main verb is in the first
  word of row 32.1, and what is kept back is the clause that says what the six
  listed things cannot do (32.7, words 0 to 4). I label that clause "verb kept
  back" on the plate. An examiner who wants the stricter term can relabel it
  "what they cannot do"; the caption's claim is the same. The denial is
  qualified by word 2 of row 32.1; the caption's "put aside" rests on rows 32.7
  to 32.10, where the speech itself says what the signs are worth.
- Naming (periphrasis). Each of the three phrases names by a longer phrase
  what one plain word would name. Row 32.4 is also a metaphor; I name the lens
  by what the three lines share. Schmidt glosses word 4 of row 32.3 as heavy,
  panting (under Force, sense 3), not as feigned, so the caption says nothing of
  feigning.
- Words. All glosses are Schmidt's. His entry for the verb *play* (sense 7)
  does not cite this line; the sense is his, the application here is plain from
  the line. The last sentence joins the stage words to Auden's play on one
  stage word; it does not say Auden wrote about this speech.
- Rhyme. No line-end among the first nine rhymes with another; they carry the
  letter `x`, which the page code draws as a dot for a line that rhymes with no
  other. The first and the eighth end on forms of one word (32.0 word 8, 32.7
  word 7), which the threads show. The claim about scene endings is my count
  (section 8).

No beat lens here: four lenses is the limit, and I could give no grounded
reason for the rhythm of these lines that was better than what the four say.

## 4. Plate "to-be" (hamlet/a3s1, rows 46.0 to 46.9)

Why this passage. The lead names it, and two things in it can be counted on the
page: the syllable past the last beat in the lines that ask the question, and
the run of infinitives. Both meet Auden's sentence that Hamlet cannot act and
can only play at possibilities: the lines name acts and give them no doer.
I stopped the plate at row 46.9 because the chain of repeated words and the
stop on the bowls word are there, and ten lines can be set large.

The scansion, with the other ways of hearing each line. The marks are in the
reading; `x` is unstressed, `/` stressed.

- 46.0. Marked with the stress on word 6 and none on word 7 (the fourth foot
  turned round after the pause). It can also be said with the stress on word 7,
  which keeps the meter. Wikipedia's article on the pentameter line scans this
  very line the first way. Eleven syllables either way.
- 46.1. Word 0 is stressed on its first syllable, against the meter, and word 3
  is light in a place where the meter has a beat. No other hearing changes the
  eleventh syllable.
- 46.2. Word 4 is light in a beat place. Word 5 is three syllables.
- 46.3. Marked light, light, stressed, stressed for words 0 to 3. It can also
  be heard with word 0 stressed and word 2 light, or with a light beat on word 1.
  The caption uses only the eleventh syllable.
- 46.4. Word 1 is marked light in a beat place; it can take a light stress.
  Word 4 is an unstressed syllable after the third beat and before the pause,
  so two unstressed syllables stand together there and the line has eleven
  syllables while ending on a beat. Wikipedia's article says the extra syllable
  of a weak ending may come before a pause inside the line. One could instead
  call words 4 and 5 two light syllables sharing one off-beat; the count and the
  ending are the same. Token 6 holds two words joined by a dash.
- 46.5. Words 0 and 1 are both marked stressed; the first can be light. Word 3
  is light in a beat place.
- 46.6. Word 5 is taken as two syllables, which gives ten. Said as three, the
  line has eleven with the extra one inside it, and still ends on a beat.
- 46.7. Words 4 and 5 are marked light, the second in a beat place. Word 7 is
  four syllables with stresses on the first and third, and the line has a weak
  ending. This is a fifth weak ending in the ten lines. The caption speaks of
  the first four lines and of rows 46.4 and 46.5 and makes no claim that this
  line would break.
- 46.8. Word 1 is light in a beat place.
- 46.9. Token 4 holds two words joined by a dash, both stressed: the first is
  on a beat, the second is not. Word 5 is on a beat; I mark it stressed, and it
  can be said light. So two stresses are sure and a third is doubtful. The
  caption and the point rest on the second word of token 4 only.

I did not scan the rest of the speech and the caption says nothing of it. The
last word of the speech proper (46.32, word 5) is not at a line-end in the
hosted text, so no claim is made about how the speech ends metrically.

- Verbs. Twelve infinitives: 46.0 (two), 46.1, 46.3, 46.4 (two, in one span),
  46.5, 46.8 (three), 46.9 (two). The word at 46.7 word 4 is a preposition and
  is not counted. In 46.4, word 3 is a bare infinitive joined to the one in
  46.3; it has no subject and is not marked. Six verbs with a subject: 46.0
  word 7, 46.1 word 1, 46.5 words 8 and 9, 46.7 words 2 and 5, 46.9 word 5.
- Chain (anadiplosis). The words that end 46.8 begin 46.9. The earlier
  instance at 46.4 is marked to show that the first time the chain is not made.
- Words. The fighting words are in the question (46.2, 46.3, 46.4); I do not
  say which half of the question they belong to, since editors differ on
  whether the second half means fighting or dying.

## 5. Plate "readiness" (hamlet/a5s2, row 161.0, 61 words of prose)

Why this passage. The lead asks for Hamlet's prose. This is the last speech the
hosted text sets as prose for him, it is short enough to be read word by word,
and its three clauses cross on the page. It answers the second plate: the same
verb, now with a subject and a time; the same matter, now said to a friend.
It meets Auden's view where he says what Hamlet wishes to be, someone made by
his situation: in the three clauses the thing that is coming is the subject of
every verb.

I weighed the advice to the players (a3s2 block 7) for this place, because
Auden's lecture calls Hamlet an actor and DH p. 269 alludes to that speech. I kept
the Act 5 speech because its figure can be drawn exactly and because with it
the three plates run from the first act to the last. The advice to the players
is used as a cross-reference in the first plate's word lens.

- Crossing (antimetabole). The first two clauses repeat two terms in the
  opposite order (words 19, 21-23, then 27-29, 33). The third clause is not
  part of the crossing; it is marked apart. All 27 words from word 16 to word
  42 have one syllable. An earlier caption said so; I cut the sentence because
  I could give no grounded reason for the fact, and an observation with no
  reason is not finished. The last sentence of the caption once called
  readiness "Hamlet's part"; the line does not say whose it is, so the caption
  now says only that the next sentence has that noun for its subject.
- Words. Sources in section 7. The hosted text has no words after word 60;
  some editions print two more, which I did not find in either Gutenberg text,
  so nothing is said of them.
- Shape. Numbers in section 8.

## 6. The leads, answered

1. Hendiadys. Not made a lens. The figure is one idea said through two nouns
   joined by "and", and I could not show by a source that any pair on my three
   plates is one. The first plate has a pair of nouns before "of" at row 32.10
   (words 3 to 6), but a report of George T. Wright's list (a SHAKSPER post
   discussing his article) gives only one instance for that scene, in another
   line. In the second plate, Wright himself, as quoted there, doubts that the
   pair at 46.2 (words 1 to 3) is exactly hendiadys. His article (PMLA 96, 1981,
   pp. 168-193) was seen only in its abstract at Cambridge Core: over three
   hundred in Shakespeare, perhaps sixty-six in Hamlet. Places that Wikipedia's
   article on the figure names in this play, for an examiner who wants a
   hendiadys plate: a1s4 (Hamlet's first words to the Ghost), a1s3 (three in
   Laertes's advice), a2s2 block 380 row 1, and a3s1 row 46.14.
2. The 3.1 soliloquy: extra syllables and infinitives. Second plate, Beat and
   Verbs.
3. Hamlet's prose. Third plate; the Shape lens gives his verse and prose scene
   by scene.
4. Auden thought the play a problem. In `view` and `auden[2]`.

## 7. Where each fact was read

Shakespeare's words: Alexander Schmidt, Shakespeare Lexicon (3rd ed., 1902), at
Perseus (`perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.03.0079:entry=<Word>`).
Entries read, and what each says of our lines:

- Seem: 1, to look like, to have the appearance of being; 2, to be only in
  appearance and not really.
- Denote: to indicate, to mark; cites row 32.7 (in the quarto wording).
- Action: sense 7, gesticulation, the motions of the body accompanying words;
  cites row 32.8 and the advice to the players.
- Play (verb): sense 7, to act on the stage; does not cite row 32.8.
- Show (noun): sense 1, the act of showing, cites rows 32.6 and 32.9 and notes
  that the quartos read another word at 32.6; sense 5, a spectacle, a play;
  "a dumb show" is a pantomime.
- Suspiration: respiration, breathing; this line is the only one cited. The
  complete works (Project Gutenberg no. 100) have the noun once.
- Haviour: external carriage and deportment; cites row 32.5.
- Fruitful: sense 3, plenteous, copious; cites row 32.4.
- Visage: face, countenance, look. Windy: sense 2, of sighs; cites row 32.3.
  Deject: cast down, low-spirited; cites row 32.5. Force: sense 3 cites row
  32.3 with the gloss heavy, panting.
- Trapping: ornaments of horse furniture; in the plural any ornamental
  appendages; cites row 32.10. Suit: sense 4, dress, apparel; cites row 32.2,
  and row 32.10 as a metaphorical use.
- Outrageous: 1, violent, atrocious; cites row 46.2.
- Shock (noun): a violent collision, a conflict, encounter; cites row 46.6.
- Consummation: end, death; cites row 46.7.
- Devoutly: with devotion, earnestly; cites row 46.8.
- Rub (noun): 2, obstacle, impediment; cites row 46.9. Rub (verb): a term of
  bowls, said of a bowl turned from its course by an impediment.
- Defy: sense 2, to slight, to despise, to renounce; cites this speech.
  Augury: art of prophesying; cites this speech. Special: sense 1, particular.
  Providence: sense 2, the care of God; cites this speech. Readiness: sense 1,
  a state of due preparation; cites this speech. Betimes: sense 2, early; cites
  this speech.
- More: read to find a gloss for row 46.5; the place is not cited.

Word histories: the Online Etymology Dictionary (`etymonline.com/word/<word>`)
for outrage (through French from Latin *ultra*; English narrowed the sense by
hearing "rage" in it), consummation (Latin, to sum up, to finish), rub (an
obstacle or unevenness of the ground, 1580s, used in bowls of what slows or
turns a bowl; the phrase in this speech comes from that), trappings (first a
horse's ornamental cloth), augury (in English first divination from the flight
of birds), providence (Latin, foresight; *pro*, ahead, and *videre*, to see),
infinitive (Late Latin, unlimited; the form is not limited to a person or
number), periphrasis, anadiplosis, antimetabole. The Oxford English Dictionary's
open entry for outrageous (a borrowing from French; first found before 1325;
senses of excess and violence) and its public summary pages for the dates of
the other words: suspiration about 1504; rub, n.1, with a bowls sense from the
late 1500s; trapping 1398; augury before 1413; providence before 1382;
consummation before 1398; betimes about 1314.

Latin: Lewis and Short at Perseus (`...1999.04.0059:entry=<word>`): augur (a
Roman priest who made the future known from lightning, the flight or notes of
birds and other signs; the kind that watches the flight of birds was the most
common), augurium, providentia (foresight, foreknowledge).

The Gospel: Geneva Bible, 1599 printing, at biblegateway.com (version GNV):
Matthew 10:29 and 24:44; Luke 12:40 also read. The two notes paraphrase the
two verses of Matthew. That these verses belong beside this speech is not my
own pairing: Thomas Carter, Shakespeare and Holy Scripture, with the Version He
Used (London: Hodder and Stoughton, 1905), p. 381, prints the speech (Act V,
scene ii, 227 in his numbering) and under it Matthew 10:29, Luke 12:6-7,
1 Timothy 6:7, Habakkuk 2:3 and Matthew 24:44, all in the Geneva version. Read
in the Internet Archive's plain text of the book (identifier
`shakespeareandho00cartuoft`; the page head for 381 is at line 21089 of that
file and the head for 382 at line 21152; the passage is at lines 21097-21121).
On p. 442, under a line of King Lear, he sets the fourth sentence of our speech
beside Luke 12:40. The note on word 44 says "compare" and claims no more than
that the verse says this.

Calvin: Institutes, book 1, chapter 16, in Henry Beveridge's translation (1845)
at ccel.org. Section 1 has "special providence" and the sparrow in one
sentence; section 5 cites the sparrow verse and goes on to the flight of birds.

How verse and figures work:

- Paull F. Baum, The Principles of English Versification (1922), on this
  machine at `.cache/handbooks/baum-versification-pg21342.txt`. Chapter 4, on
  the short couplet: the quick return of the rhyme makes the couplet felt as a
  unit and gives what are called closed couplets (lines 3208-3210 of the file); the
  section on the five-stress couplet says that what was said of varying the
  short couplet applies all the more to it (line 3308). Chapter 5: the normal
  blank verse line has five stressed and five unstressed syllables (line
  6547); an extra weak syllable at the end of
  a line tends to give it a falling rhythm (lines 6564-6566); a line overweighted
  with stress is slowed (lines 6970-6983).
- Wikipedia: Iambic pentameter (this very line as the example of a weak ending
  with the fourth foot turned round; the extra syllable may come before a
  pause); Masculine and feminine endings; Periodic sentence; Anadiplosis;
  Antimetabole; Hendiadys; Couplet (read; it speaks of sonnets, not scenes).
- That a verb kept to the end holds the sense open, and that stresses together
  slow a line, are also the brief's own examples of craft knowledge.

Other passages of the play used as grounds, all read in the hosted text:
a1s2 blocks 30 and 34; a2s2 block 380, rows 5 to 8; a3s2 blocks 7 and 98;
a3s1 rows 46.10 to 46.12, 46.22 and 46.32; a5s2 blocks 157 to 162. Richard II,
Act 3, Scene 4 (bowls and rubs) was read in Project Gutenberg no. 100.

## 8. The counts and how they were made

All from the hosted text's data files, read only, with scripts in the scratch
folder. A word is what stands between spaces or long dashes.

- Scene endings (`ends.mjs`). The play has twenty scenes in the hosted text.
  The last two lines rhyme in ten: 1.2, 2.1, 2.2, 3.1, 3.2, 3.3, 4.1, 4.3, 4.4,
  5.1. The pair in 2.1 rhymes today to the eye only. Three more scenes (1.5,
  4.5, 5.2) end with a rhymed pair and then one unrhymed line, and 3.4 with a
  rhymed pair and then two lines; these are not among the ten.
- Speech endings (`couplets.mjs`). Of 106 verse speeches of eight lines or
  more, five that are neither at a scene's end nor in the play within the play
  end on a rhymed pair: Hamlet's here (a1s2 block 32) and at a3s3 block 23,
  Laertes's at a1s3 block 11, Ophelia's at a3s1 block 93, Rosencrantz's at a3s3
  block 7. The caption does not use this number.
- Hamlet's speeches to himself (`solil4.mjs`, `solil5.mjs`). Lines, words and
  the count of I, me and my: 1.2, 31 lines, 260 words, 11; 1.5, 21 lines, 159
  words, 12 (two blocks; a quoted "me" in the Ghost's words is left out); 2.2,
  58, 459, 35 (one contracted "in" that looks like the pronoun is left out);
  3.1, 33, 262, 0 (rows 0 to 32, to word 5 of row 32; "we" and "us" seven
  times; no "mine" or "myself"); 3.2, 12, 100, 7; 3.3, 22, 193, 8; 4.4, 35,
  277, 12. A four-line speech to himself ends 1.2 (block 158); it is not among
  the seven.
- Hamlet's verse and prose by scene (`count2.mjs`): the table in the Shape
  lens. Totals 896 lines of verse, 6642 words of verse, 4904 words of prose.
  His first prose is at a2s2 block 104 and his last at a5s2 block 161; 23 verse
  blocks of his follow it. The hosted text sets a few short prose lines as
  verse (a2s2 block 342, a3s2 block 313), so the numbers are as that text sets
  them.
- Act 5 (`act5.mjs`): Hamlet enters each scene with Horatio (a5s1 block 50,
  a5s2 block 1) and in 5.1 leaves before him, so he is never alone on the
  stage.
- The third plate: 61 words, five sentences; words 16 to 42 are 27 words of
  one syllable.

## 9. Looked for and not found

- Any record of what Auden said about Hamlet in the Michigan class of 1941.
- Any remark of his on these three speeches themselves.
- The pages of Kirsch's edition for the Hamlet lecture (only extracts in the
  research notes; one extract is keyed there to a note on p. 164).
- The full text and list of Wright's article on hendiadys (Cambridge Core and
  JSTOR ask for payment; a Google Books request was refused; a university
  repository copy would not open).
- "Special providence" in the English Calvin of 1561 (the page at the
  University of Michigan's early English texts refused the request). It was
  read only in the English of 1845, and `open` says so.
- The Oxford English Dictionary's full entries for rub, trappings, augury,
  providence, suspiration and haviour (summary pages only).
- A dictionary gloss that cites the two words at row 46.5, words 0 and 1.
- A handbook statement that plays of the time end scenes on a rhymed pair.
  Baum does not say it; the caption rests on the count.
- The two words some editions print after word 60 of the third plate. They are
  in neither Gutenberg text, so the reading is silent about them.

## 10. Things an examiner should know

- Two tokens of the hosted text hold two words joined by a dash: 46.4 word 6
  and 46.9 word 4. A mark on either covers both words. The infinitive spans
  and the chain parts that touch them are right as printed in the proof, but
  the second span in 46.9 (words 3 to 4) takes in one word that is not part of
  the infinitive.
- The hosted text reads at 32.6 word 5 the word the Folio has; Schmidt notes
  that the quartos have another.
- The single word "act" stands in quotation marks in one caption, as Auden
  prints it. It is the same word that is quoted in `view.quote`, not a further
  quotation.
- The Shape lens is about the whole play and sits on the third plate because
  the plate is the end of the two things it counts: the last prose, and the
  first act without a speech to himself.

## Taken out of the list of what Auden said (the lead, 3 October)

Three entries that mention Hamlet only in passing, in essays on other
subjects. True and checked, and kept here in case they are wanted.

- **“Tennyson,” in Forewords and Afterwords (1973), p. 228**
  In his essay on Tennyson Auden says that the poet met in childhood what he
  calls Hamlet’s problem: the religious meaning of his own existence. The
  paragraph before puts Tennyson’s lifelong fear as two questions, who he is
  and why he exists.
  Checked: read in the scan of Forewords and Afterwords, research/auden/fa.txt,
  lines 10925-10962 (the page head of p. 228 is at lines 10953-10957;
  the scan is rough at this line and loses two letters of its first
  words). Found by the examiner on 2026-10-03 by searching the scan for
  the name Hamlet; the other places in that book name him only in
  passing. Pearce’s memoir of the 1941 class does not name Hamlet at
  all.

- **“Interlude: West’s Disease,” in The Dyer’s Hand (1962), p. 241**
  In his essay on the novelist Nathanael West, Auden describes a hell whose
  ruler is the Father of Wishes, and says that Shakespeare gives a glimpse
  of it in Hamlet. The sickness of its people is that they cannot turn a
  wish into a desire. A wish, he says, sees how things are and will not
  accept them; whatever it seems to be about, it means a refusal to be what
  one is.
  Checked: read in the scan of The Dyer's Hand, research/auden/dh.txt, lines
  11452-11478 (the page head of p. 241 is at lines 11444-11446). Found
  by the examiner on 2026-10-03 by searching the scan for the name
  Hamlet. Auden does not say where in the play the glimpse is, and no
  tab leans on this. The other places in the book that name Hamlet
  (lines 1151, 8349, 11741, 22033, 24844) say nothing of these passages.

- **“Dingley Dell & The Fleet,” in The Dyer’s Hand (1962), p. 408**
  Auden found five characters in Shakespeare who have become myths, Hamlet
  among them, and added that Hamlet is one for actors alone. His proof is
  that every actor, whatever the actor’s age, build or sex, wishes to play
  the part.
  Checked: read in the scan of The Dyer's Hand, research/auden/dh.txt, lines
  19258-19265 (the page head is at line 19249)

Taken out by the critic, 3 October (one entry; the reason is in critic.md):

- **The Enchafèd Flood (1950; Vintage Books edition, 1967), pp. 34 and 102**
  In The Enchafèd Flood Auden speaks of Hamlet as a man ruled by reflection
  and melancholy, and makes him the one exception among the heroes of
  classical and Renaissance literature, who are heroes by what they do among
  other men.
  Checked: read in the scan of The Enchafèd Flood, research/auden/ef.txt: p.
  34 at lines 1507-1512 (a scan of the Faber edition of 1951 prints the same
  words: archive.org full-text search), p. 102 at lines 4225-4228; in this
  scan the page number stands at the foot of the page (lines 1536 and 4243).
  Found by the examiner on 2026-10-03 by searching the scan for the name
  Hamlet.

## The finisher's changes after the critic (3 October 2026, 13:29 to 14:06 UTC)

**In short.** Nine points set, nine left as they are, eight lines passed
up. Of what the critic left for the lead: the Shape caption now gives the
count after Auden's remark; the Verbs key has a row of its own for the
one subject that is a person; the two words named in the folded numbers
are marked, though they will stand upright only when a rule of the kit
says so; the Crossing caption says of what Auden said his sentence;
`about` says whose ghost; the list no longer has two words that could
mean the father, and opens on the remark of 1941. Two places that ran
close to Auden's wording are loosened. The checker ends: no problems, no
warnings, the printed notes are fit to print. Nothing was refused by the
permission system.

Words of the play are pointed at by row and word number, as the checker
prints them. Nothing of Auden's is quoted. The lists of exact edits, the
reading as I found it (`before.json`), the script as I found it
(`hamlet.js.before`) and my count are in `remake/works/hamlet/finisher/`;
the pictures are in `remake/works/hamlet/shots/finisher/`.

### Set

1. **Shape, the last sentence of the caption (critic 5.1).** The caption
   gave Auden's remark that with other people Hamlet mostly speaks prose,
   beside a drawing that shows about as much verse to others as prose, and
   said nothing of it. I made the count myself:
   `python3 remake/works/hamlet/finisher/count-others.py`, a count of my
   own over the hosted text by the rule the drawing counts by (a word is
   what stands between spaces or long dashes; verse and prose as the text
   sets them). It prints the critic's table act by act (1,710 words of
   verse in the seven speeches, 4,932 of other verse, 4,904 of prose), the
   38 words of the four lines to himself that end Act 1, Scene 2, so 4,894
   of verse to others beside 4,904 of prose (49.9 in 100), 1,347 words of
   verse in Act 3, Scene 4, and without that scene 3,547, where the prose
   is 58.0 in 100. It ends "all as the critic reports". It also finds the
   three asides (9 and 2 words of verse, 15 of prose): with them out the
   figures are 4,883 and 4,889. So the critic's sentence (a) is added
   after Auden's: by the count drawn here, about half of what he says to
   others is verse. The caption is 119 words. Ground: a new item under
   `grounds` that names the script and the figures. `why` and `stands`
   are unchanged: the count was already the first thing `stands` names.
   The item in `open` on this point is brought up to date.
2. **Verbs, the key (critic 5.2; art.md, "Proposed for the reading").**
   One blue row read "has a subject, the only person", as if every blue
   mark had a person for its subject. The mark on row 46.5, words 8 and 9,
   now has a tag of its own (`person`) and the critic's label, "the only
   subject that is a person"; the other five keep `subject` and "has a
   subject". The lines bear it out: the subject there is word 8, a
   pronoun for persons; the other five subjects are a demonstrative (row
   46.0, word 6), the it inside the verb in rows 46.1 and 46.7, a noun
   for the body (row 46.7, word 1) and the there inside the verb in row
   46.9. The first ground of the tab now says so. What moved: the rule
   under those two words is ochre where it was blue, and the key has
   three rows. Looked at in `hamlet-to-be-1-verbs-1280.png` and
   `-390.png`: each row of the key now says one true thing of its marks,
   the ochre rule stands clear of the red one beside it, nothing
   collides. The caption is untouched.
3. **Shape, the sentence under the table of the seven speeches (critic
   5.3).** `facts.shorter` named two words as words and did not set them
   off. In the facts they are now between asterisks. So that the
   asterisks are not printed, line 224 of `site/js/pieces/hamlet.js`
   builds the paragraph with the script's own `set` (line 30) where it
   had `text: f.shorter`. That is the one change of logic allowed me, and
   the only line of the script that differs from `hamlet.js.before`.
   `node --check` passes. With the fold open
   (`node remake/works/hamlet/finisher/shoot-fold.mjs 1280`, then `390`)
   the sentence prints with no asterisk, as words, an `i`, words, an `i`,
   words. **But the two words still stand in the paragraph's italic**:
   the paragraph is italic by the style of line 225, an `i` is italic by
   the browser's own rule, and neither the kit nor the script sets an
   `i` upright there. The page looks as it did. See "For the lead", 1.
   That the four lines say those words three times I counted
   (`count-others.py`; two of the three are forms of the second word,
   one of them with a capital).
4. **Crossing, Auden's sentence (critic 6.1).** The caption set his
   sentence about the hero of a Greek tragedy beside the grammar of a
   passage he did not remark on, and did not say what he said it of. It
   now reads "Auden wrote of the character as a whole that Hamlet wishes
   ...". I kept it and did not cut it because the caption's reason does
   not rest on it, each of the two sentences is true by itself, and with
   the six words a reader is told that the sentence is general, as the
   fifth caveat already says in the same words. Ground: the scan of *The
   Dyer's Hand*, `dh.txt`, lines 21421 to 21436, read in this run (pp.
   451 to 452): four sentences on Hamlet under a heading that sets him
   beside Don Quixote, and nothing on this speech. The ground of the
   tab now says so. The sentence shares no run of five words with the
   scan. 118 words. Looked at in `hamlet-readiness-0-crossing-1280.png`
   and `-390.png`.
5. **`about`, whose ghost (critic 6.5).** "A ghost then tells him that
   the uncle murdered his father" is now "His father's ghost then tells
   him that the uncle was the murderer", the critic's words. Ground, read
   in this run in the text printed here: hamlet/a1s5, block 21, row 0,
   where the Ghost says what it is; block 33, rows 8 and 9, and block
   35, row 1, for the murderer. 90 words, which is the limit. Looked at
   in `hamlet-page-1280-0.png` and `hamlet-page-390-0.png`.
6. **The list, the entry from *The Enchafèd Flood* (critic 6.6).** Two
   words of Auden's stood in the paraphrase for the earlier Hamlet, and
   a reader could take them for Hamlet's father. It now says "made of
   the Hamlet he inherited the earliest hero of the romantic kind". I
   did not use the critic's words (the Hamlet of the old revenge story):
   Auden does not say story, or play. Ground: `ef.txt`, lines 4554 to
   4564, read in this run (p. 110): his two words stand against
   Shakespeare's Hamlet in the next sentence, so they mean the Hamlet
   who was there before Shakespeare's, and "inherited" says that and no
   more. `checked` under the entry says so. No run of five words with
   the scan.
7. **The order of the list (critic 7.5).** The remark of 1941, the one
   entry from the year of the course, now stands first, and the entry on
   the soliloquy second. No other entry moved, and none leans on either.
   The list reads better so: it opens on the year the site is about and
   on the matter of the view above it, acting a part, and its talk of
   the speeches leads into the entry on the soliloquy. The two entries
   were cut from the raw text and set down in the other order by
   `finisher/make-move.py`, so that Auden's quotation in the second
   passed through no hand; I checked afterwards that every entry has
   its keys, quotation and record as before. Looked at in
   `hamlet-page-1280-2.png` and `hamlet-page-390-3.png`: the quotation
   of the second entry is set large above its paraphrase, where it used
   to open the list. **The critic's numbers for the list (critic.md,
   sections 2, 4 and 6) are as it stood before: its first and second
   entries are now second and first.**
8. **Two places that ran close to Auden's wording (rule 2), and the
   sweep.** The sweep of the whole page against the four scans
   (`dh.txt`, `fa.txt`, `ef.txt`, `pearce.txt`) first printed nine runs
   of five or more words. Two were his:
   - The entry on the soliloquy opened on a run of six words shared
     with *Forewords and Afterwords* (`fa.txt`, line 4576) and of five
     with *The Dyer's Hand* (`dh.txt`, line 14365), both on other
     matters; but two of those words are his on the page cited (p. 110,
     `dh.txt`, lines 5208 to 5220, read in this run). The sentence now
     says that a whole personality "can hardly be shown through one
     character". It says no more than his: what he calls all but
     impossible is to show a personality whole through one character.
   - The fifth caveat had five words in a row that open his paragraph
     on Hamlet (`dh.txt`, line 21423). It now says "has no faith in
     God", the words the view at the head uses.
   The last run of the sweep printed six runs of five words and none
   longer, and all six stand:
   - `about`, "after his father s death" (`fa.txt`, line 21716, said of
     another man) and "his father s death and" (`ef.txt`, line 4525,
     said of Orestes): plain words, and not Auden's on Hamlet;
   - "the last two lines of" (the `stands` of the Rhyme tab) and "the
     first line of the" (a Beat remark and the `stands` of the
     Crossing): small words;
   - "as a work of art" in the entry on the 1947 lecture (`dh.txt`,
     line 22693, in an essay on another matter): a common phrase; the
     lecture itself is in none of the scans. So I tested the eight
     entries against the project's research file as well, which has
     the extract of the lecture this entry was written from
     (`remake/research/C_auden_on_works.md`, lines 240 and 1079): no
     entry shares a run of five words with it, the extract has other
     words for the verdict, and this phrase is nowhere in the file.
   Each sentence I wrote or changed was also tested by itself with
   `runs.py` against all four scans: none shares a run of five.
9. **`open`, brought up to date (three items, and one new).** A new
   last item says that the two words of point 3 are marked and what is
   still needed for the mark to show. The item on the count
   of verse and prose now says what the caption says and names my
   count. The item that asked the artist to look at the Beat tab again
   now says the artist has looked and the lead has the kit's part. The
   item on the list now says it has eight entries, with the remark of
   1941 first.
10. **What the critic added (rule 9).** Three glosses the poet did not
    write, each tested as a new sentence and kept:
    - Words of passage 1, "a scene acted without words", of the dumb
      show. Ground: hamlet/a3s2, block 98 names the show and block 99
      is the whole of it, one stage direction of 121 words with no
      speech in it. The ground of the tab now names block 99.
    - Beat, "rising from unstressed to stressed" (the measure) and "from
      stressed to unstressed" (the caption). Ground: Paull F. Baum,
      *The Principles of English Versification*, chapter 4, where iambic
      and anapestic movements are called rising and dactylic and
      trochaic falling, and the glossary under Iamb and Trochee
      (`.cache/handbooks/baum-versification-pg21342.txt`, lines 2562 to
      2565, 7439 and 7668). The Baum ground of the tab now says so.
    - The fourth caveat, "the early editions called quartos". It adds
      no claim: "the early quartos" said as much, and the examiner's
      record has the First Quarto as of 1603. I opened no source for it.
    The critic's other changes are changes of wording. Two I read
    against their grounds: "a term from the game of bowls" is the
    ground's own wording, and "infers from the sparrow" says what the
    ground records of Calvin's chapter.

### Left as they are

1. **The other printed words of the drawing (critic 5.4).** The critic
   read every string of the script and would change none. I saw them on
   the drawing in four pictures and they agree with the caption and the
   facts. No string of the script was changed.
2. **Beat, the stop in row 46.9 (critic 5.5; art.md, the first thing
   still there).** Left as told: the pause stands at a dash inside a
   joined word and needs the kit. The marks of that row are untouched.
3. **Verbs, the last sentence (critic 6.2).** It says on which words the
   thirty-three lines end. It is a fact of the text (row 46.32, which
   the link under the tab opens), the caption draws nothing from it,
   and what ties it to Auden's sentence before it is the play's own
   word. The sentence before that reports what Auden said of this very
   speech, so the tab does not lean on a general remark alone.
4. **Words of passage 3, the last sentence (critic 6.3).** It gives the
   order of the lines and says what they do, not what they mean.
5. **Crossing, the short sentence after the three clauses (critic
   6.4).** It is the reason of the tab, and the key's last label on
   that row rests on it.
6. **Five notes that say part of their caption again (critic 6.7).**
   Each gives first something the caption has no room for, and a reader
   may open a note without the caption in view.
7. **The frame with the year 1947 in two captions (critic 6.8).** Two
   of eleven.
8. **Key labels that name a word of the passage (critic 6.9), and the
   wording of the Rhyme key (critic 7.3).** A row of a key is set by
   the kit as plain words and takes no mark. Left as told; see "For the
   lead", 3.
9. **The fourth caveat's gloss of quartos, and the five-word runs of
   plain words that the sweep still prints.** See 8 and 10 above.
10. **Every `turn`, `join`, `heading` and tab label, the view and its
    quotation, and every mark but the one tag of point 2.**

### For the lead

Worst first.

1. **The sentence in "The numbers" is marked, and the mark does not
   show yet.** The two words are an `i` each (point 3), and still print
   in the paragraph's italic. One rule would set them upright, and I may
   write none of them: in the kit's stylesheet, `.dg-facts p
   i{font-style:normal}` (beside the rule for `.dg-say i`; the fold of
   *Henry IV, Part 2* sets italic lines of the same kind); or a
   stylesheet of the piece; or one more statement in the script. Until
   then the page looks as it did before. Also: the kit's plain table,
   which stands in only if the script fails, sets a fact as plain text
   and would print the asterisks.
2. **Beat, row 46.9.** The fifth stop inside a line has no pause mark;
   the lead has the kit's part. When the kit can draw a pause at a dash
   inside a joined word, the voice of that row needs the mark; the
   caption and remark 6 need no change.
3. **Keys take no marks.** The kit sets a key row as plain words, so a
   word named there cannot stand upright: the two lines under the Rhyme
   tab's letters (the lead has those), and seven labels of this piece:
   Sentence, "nor, four times"; Chain, "die", "sleep", "sleep again";
   Crossing, "now", "not to come", "it, never named". If the kit comes
   to set `*word*` upright in a key, these can be marked.
4. **The 34 pictures in `shots/` are out of date in five places**: the
   Verbs key, the Crossing caption, the Shape caption, the paragraph
   under "The passages", and the list (and the Chain colon the critic
   reports). Those I changed are photographed in `shots/finisher/`. A
   whole set should be taken when the machine is free.
5. **Shape: Auden's own example is not in the caption.** His exception
   is the scene with his mother (1,347 words, more than a quarter of
   the verse to others). The fifth entry of the list has it. The
   critic's fuller sentence (5.1, b) would say it and needs 132 words;
   something else in the caption would have to go.
6. **`about` is 90 words**, the limit, and the Shape and Crossing
   captions are 119 and 118 of 120.
7. **Verbs, the ending (critic 6.2).** I left it. If it reads as a
   pose, the last two sentences can come out together: the `why` of the
   tab rests on neither.
8. **To undo any of this**: each list in `finisher/` (`edits-1` to
   `edits-9`) is a list of exact edits, and applied with old and new
   exchanged it puts the old words back; `edits-5-order.json` moves the
   remark of 1941 back to second. The script goes back with
   `hamlet.js.before`, but only together with the asterisks of
   `facts.shorter` (`edits-3`).

### The last check

    $ node build/pieces.mjs hamlet                                  (13:55)
    $ node --check site/js/pieces/hamlet.js                         ok
    $ node remake/works/hamlet/count-order.mjs                      all as counted
    $ python3 remake/works/hamlet/finisher/count-others.py          all as the critic reports
    $ node build/tools/prose.mjs hamlet                             3,951 words
    $ python3 build/tools/runs-sweep.py dh.txt fa.txt ef.txt pearce.txt --only hamlet --show
    ... 6 runs of 5 or more words shared with a scan            (point 8: all six stand)
    $ node build/tools/check-reading.mjs hamlet --print
    ...
    no problems
    no warnings
    the printed notes are fit to print

Run once more before closing, with the same result: the checker at
13:59, and at 14:02 the prose and the sweep, which printed the same six
runs. The built page (`site/data/pieces/hamlet.json`, 13:55:47) is later
than the last edit to the reading (13:55:23).

The checker gave no warning at any run, so there was none to read. The
script differs from `hamlet.js.before` in line 224 and nowhere else. The
reading differs from `before.json` in what points 1 to 10 name and in
nothing else: I compared the two files line by line after the last edit.

Pictures, all in `remake/works/hamlet/shots/finisher/`, each opened and
looked at after it was taken. The picture tool reported nothing at any
of its three runs, and the browser reported nothing at the two runs of
my own script.

- `hamlet-to-be-1-verbs-1280.png`, `-390.png`: the key in three rows,
  the ochre rule under words 8 and 9 of row 46.5.
- `hamlet-readiness-0-crossing-1280.png`, `-390.png`: the caption with
  its six new words.
- `hamlet-readiness-2-shape-1280.png`, `-390.png`: the caption with the
  count as its last sentence; the drawing as it was.
- `hamlet-readiness-2-shape-fold-open-1280.png`, `-390.png`: "The
  numbers" unfolded; no asterisk; the two words still italic.
- `hamlet-page-1280-0.png` to `-4.png` and `hamlet-page-390-0.png` to
  `-6.png`, the whole page in slices: the paragraph under "The
  passages" (slice 0 at both widths) and the list in its new order
  (slices 2 and 3 at 1280, 3 to 5 at 390). The other slices show what I
  did not change, and nothing in them is amiss.

The last four lists of edits (`edits-6` to `edits-9`) came after the
last picture. They touch only what is never printed: three grounds, one
record under `checked` and one new item of `open`. The two pictures of
the Verbs tab and the two of the fold were taken earlier still, and
nothing they show was changed after them.

In `finisher/`: `before.json`, `hamlet.js.before`, the nine lists of
edits to the reading (`edits-1-shape.json` to `edits-9-open.json`, with
`edits-3-script.json` for the script and five small lists for this
record), `make-move.py`, `count-others.py` and `shoot-fold.mjs`.

## The lead after the finisher (3 October, 15:11 UTC)

Read: the finisher's record above, and the head, every caption, the
list and the caveats of the page as `prose.mjs` prints it (3,951
words). Nothing set.

- **For the lead, 1, 2, 3: the kit's.** The rule that sets the two
  marked words of "The numbers" upright, the pause at a dash inside a
  joined word (row 46.9), and marks in key labels are on the lead's
  list for after the eighth mending (`remake/LEAD-LIST.md`). When
  keys take marks, the seven labels the finisher names can be marked.
- **4.** Old pictures: at the last cleanup.
- **5.** Left. The fifth entry of the list has Auden's exception; the
  caption gives the count.
- **7, the ending of Verbs.** Left. The last sentence is a fact of the
  text set after Auden's sentence, and the caption draws nothing from
  it in words.

The snippet test (`build/tools/grams.py`) is running for this piece
with the others (the lectures of 1947 and Miller's memoir are known
here only in snippets); what it finds is set by the lead afterwards.

The piece is through every stage.

## The lead in the last pass (3 October, 16:08 UTC)

Two things, neither a change of claim.
- The snippet test (`build/tools/grams.py`) found four runs with
  *Lectures on Shakespeare*. Loosened: the fifth entry of the list (the
  sentence on verse and prose, eight words), the seventh entry (seven
  words on what the class commented on; the two plays' titles are
  left), and the sentence of the second passage's Sentence caption that
  reports the lecture (five words). A date stands. Edits in
  `lead/edits-grams.json`, the reading before in
  `lead/before-grams.json`; checker clean; tested again, no run but
  the date and the titles. The record is `review/remake/grams/LEAD.md`.
- The key of the Shape drawing says "every mark is drawn as long as its
  words" (item 7 of the last pass: the old wording could be read as
  "provided that"). The script before is
  `lead/hamlet.js.before-key`; photographed at 1280 and 390. The record
  is `review/remake/last-pass/RECORD.md`.

A dictionary's headword after "under" in the folded notes and the sources is in
italics now wherever it stood bare in lower case, or is a word of another
language (item 2 of the last pass, 16:20 UTC; with it, a dictionary's name set as
the rest of the site sets it). Type only: no word changed. Edits in
`lead/edits-headwords.json`, the reading before in
`lead/before-headwords.json`; checker as before. The record is `review/remake/last-pass/RECORD.md`.

## The lead in the last pass: the measure's wording and the Word tab (3 October, 18:06 UTC)

One wording for the measure of a line, after Ariel's song, from the reader who went through every Beat tab (`review/remake/last-pass/measure/`; the lead's amendments are in `lead-apply.py` there, and the reasons in `review/remake/last-pass/RECORD.md`, item 1). A measure of stresses is named by its beats, by its syllables where the count matters, and by "the line beginning off the beat" or "on a beat". In verse measured by count an accent is a place the count fixes and a stress is what the voice does. "Light syllable", "weak", "the pattern", "the meter" and "scanned" give way to "unstressed", "where the measure has no beat", "the measure" and "marked".

Changed here: `to-be`, tab Beat: meterName. The edits: `lead/edits-measure.json`; the reading before: `lead/before-measure.json`. The checker says what it said before. No mark changed, and the new sentences were held against the five scans: no run of five.

The Word tab: the 3 tabs named "Words" are named "Word", as on 36 other passages, the front page and Ariel's song (the site critic by word, labels, 5; the reading before: `lead/before-word-label.json`).

## The lead in the last pass: one wording for each figure (3 October, 19:55 UTC)

Each Figure tab says in one line under the figure’s name what the figure is. Laid side by
side, the 82 tabs gave the 17 figures that stand on more than one page a different line
on nearly every page. Each figure now has one line, with a tab’s own tail after “; here”;
anaphora, epistrophe, anadiplosis, parallelism and asyndeton keep one sentence whose number
and unit are fitted to the passage. No name, mark, caption or claim changed in this step.
Why and how: `review/remake/last-pass/RECORD.md`, “One wording for each figure”; the table
of lines is `review/remake/last-pass/figures/lead/lead_lists.py`.

Lines changed here (2):

- `plates[0].lenses[1].plain`, the plate `seems`, the tab Naming (periphrasis):
  was “the long way round: a thing is named by a phrase that describes it, where one plain word would do”;
  now “the long way round: a description put in the place of a name”.
- `plates[1].lenses[2].plain`, the plate `to-be`, the tab Chain (anadiplosis):
  was “the words that end one clause begin the next”;
  now “a doubling back: the words that end one clause begin the next”.

The checker says of the piece what it said before. Copy before:
`lead/before-figure-wordings.json`, with the list applied beside it.

## The lead after the eighth mending of the kit: named words take their mark (3 October, 20:20 UTC)

Since its eighth mending the kit sets a word between asterisks upright in a key's label and in a
Figure tab's line, as a caption sets a named word in italics. A word named in such a line stood
in the same italic as the words about it, or in quotation marks. 17 leaves changed here, and
nothing else (`review/remake/last-pass/tools/named-words.py` proves it):

- the plate `seems`, the tab Sentence, `label`: “nor, four times” is now “*nor*, four times”
- the plate `to-be`, the tab Chain, `label`: “die” is now “*die*”
- the plate `to-be`, the tab Chain, `label`: “sleep” is now “*sleep*”
- the plate `to-be`, the tab Chain, `label`: “sleep again” is now “*sleep* again”
- the plate `readiness`, the tab Crossing, `label`: “now” is now “*now*”
- the plate `readiness`, the tab Crossing, `label`: “not to come” is now “*not to come*”
- the plate `readiness`, the tab Crossing, `label`: “it, never named” is now “*it*, never named”

The checker says of the piece what it said before. Copy before: `lead/before-named-words.json`.
To look at after the merge and the build: each of these tabs' keys at 1280 and 390.

## The lead after the ninth mending of the kit (4 October, 01:19 UTC)

Keys the ninth mending made, set here by exact edits proved on the parsed
file (the files before are in `lead/`, named `before-ninth-rows.json` and
`before-ninth-lenses.json`; the record is `remake/KIT-CHANGES.md`, "After
the ninth mending: the lead"):

One `voice` takes `|` inside a group: the pause stands at the dash inside two words joined by one.

The checker says "no problems". No caption or claim changed.
