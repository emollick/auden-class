# The Tempest: the poet's notes

Written on 3 October 2026 for the second and third plates. The first
plate (Ariel's song) is the lead's model and I did not write it.

Words of the play are pointed at by row and word number, as the proof
prints them (`node build/tools/check-reading.mjs tempest`). Auden is
paraphrased throughout; no sentence of his is quoted here.

## What I changed and what I left

Left as the lead wrote them: the first plate (`song`), `title`, `view`.
My merge script compares all three before and after and refuses to
write if any differs.

Changed at the level of the piece:

- `plates`: two added, `noises` (Act 3, Scene 2) and `epilogue`.
- `where`: now names all three places.
- `about`: one sentence added after the lead's three. It says who
  speaks on the second and third plates and what has just happened.
  The whole is four sentences, 80 words.
- `next`: was `tempest/a1s2:222` (Ferdinand's speech before the song).
  It is now `tempest/a1s1:0`, the start of the play, because the piece
  now covers the whole play. Put it back if the song's place is wanted.
- `auden`: five entries added after the lead's two (Pearce pp. 150-51;
  DH pp. 129-34 on Caliban and Ariel; DH pp. 128-29 and 526-27 on
  Prospero and the ending; DH pp. 130 and 134 on the play as manichean
  and the comparison with The Magic Flute; DH pp. 507-8 on instrumental
  music as the sound of a magical world). No new quotation: the piece
  still has the lead's two.
- `sources`: eleven added. `open`: three items.

For the lead to decide, since the scope says to leave the first as it
is:

- The title still names the first plate only. If the piece is renamed,
  the first plate needs a `heading`, or its title line changes with it.
- The `view` is Auden on the song. His view of the whole play (a
  disquieting work; repentance and pardon more form than fact; Prospero
  to be admired and not liked; DH pp. 128-29) is in the `auden` list and
  is what the third plate is built on.

The rules moved while I worked. Rule three, the `grounds` list, the
section "What the model itself got wrong" and the list of sources that
can be opened were added after my first draft. Both plates were
rewritten under the rules as they stood when I finished (BRIEF.md
02:52 UTC, POET.md 02:51, EXAMINER.md 02:51, the checker 02:19).

## Why these passages

### Plate 2: Caliban's speech, Act 3, Scene 2 (tempest/a3s2, rows 127.0 to 127.8, with the reply, row 129.0)

It is the passage Auden himself points at. In "Balaam and His Ass"
(DH p. 131) he says the natural cannot imagine possibility, that a
vague dream is the nearest it comes, and that without Prospero Ariel
can be known to Caliban only as what the second line of this speech
names; he quotes that line. So each lens is asked to show something
that bears on that page:

- Word: the nouns Caliban uses are words for music with no player
  (rows 127.0 w8, 127.1 w0 and w2-3, 127.2 w4, 127.3 w7).
- Sentence: rows 127.2 to 127.8 are one sentence that goes from waking
  to sleep to dream to waking, with verbs of custom and of the past and
  no future, and the reply in row 129.0 has two futures.
- Beat: late blank verse. Five lines of nine run a syllable over, and
  the three joints of the long sentence fall after the third beat of
  rows 127.3, 127.5 and 127.7.
- Scene: who speaks verse and who speaks prose in the scene, counted.

It is the lead "Caliban on the island's noises (3.2)" in pieces.json.
The reply is on the plate because Auden's remark is about what Caliban
cannot do and Stephano does it in the next line.

### Plate 3: the Epilogue, lines 1 to 10 and 19 to 20 (tempest/epilogue, rows 1.0 to 1.9 and 1.18 to 1.19), with Prospero's words to Caliban beside (tempest/a5s1, rows 171.2 words 5 to 7 and 171.3)

Three things can be seen here and each meets something Auden said:

- The Epilogue is in the measure of the song on the first plate, the
  measure of Shakespeare's charms, and Prospero speaks it only here.
  Auden's theme for the play in 1941 was the giving up of more than
  ordinary powers (Pearce p. 150).
- Four words that are Prospero's to use on others in Act 5 (the words
  at rows 1.3 w4, 1.7 w6, 1.8 w1 and 1.19 w5) are here used of
  Prospero, with the audience in his old place.
- The last couplet is built like the sentence to Caliban that Auden
  quotes as holding Prospero's attitude to everyone he pardons, with
  his remark that it never occurs to Prospero that he might need pardon
  himself (DH p. 129). So the pair is that sentence.

Lines 11 to 18 are left out to keep the plate to twelve lines. `open`
says so, and says what the gap hides from the rhyme lens. I weighed two
other cuts. Lines 1 to 14 run without a gap and lose the last couplet,
which the Word and Pardon lenses need. Lines 9 to 20 run without a gap
and lose the first eight lines, where two of the four turned words and
the line about his charms stand. The cut with a gap keeps both ends;
the label and a pinned remark say that it is a cut.

### Passages looked at and not chosen

- The revels speech (4.1) and the farewell to his art (5.1), both in
  the leads. I found nothing Auden said about either in dh.txt, fa.txt,
  ef.txt, pearce.txt or section 9 of C_auden_on_works.md, so a plate on
  either would have had no view to stand on.
- The Magic Flute parallel (a lead). It is in the `auden` list (DH
  p. 134) and not on a plate: what he compares is two attitudes, not a
  passage that can be shown.
- Auden's sentence that the animals have no future tense (DH p. 131).
  I kept it out of the Sentence caption. It is said of animals, and
  Caliban uses the future elsewhere in this scene (for instance in the
  verse speeches at blocks 54 and 58), so the caption claims only what
  can be counted: no future in this speech.
- Auden on Stephano's singing voice (DH p. 524): not used.

## The scansions, and the other ways of hearing them

Marks follow the model: `voice` is natural speech, and a function word
that stands on a beat is marked `x`, so the plate shows the beat passed
over. The model does this with the first word of row 225.1. On plate 3
it matters most in the rows of seven syllables, where the first word
stands on a beat: w0 of rows 1.1, 1.2, 1.5, 1.8 and 1.9 is a joining
word and is marked unstressed, so five of those six rows show the first
beat passed over and only row 1.0 has it spoken. A speaker who chants
the measure will stress all six. No caption leans on those words.

Plate 2 (five beats, rising):

- 127.0: marked with the stress on w1. It can as well be heard with
  the stress on w0 (a turned first foot). The caption does not lean on
  it.
- 127.1: w0 is stressed off the beat and w2-3 are two stresses
  together; that is firm, and the caption leans on w2-3. The last word
  (w9) is marked light; a speaker may give it more. Either way it is
  the eleventh syllable.
- 127.2: w0 is marked with its first syllable stressed (a turned first
  foot). Stressed on its second syllable the line is regular. The last
  syllable of w4 carries the fifth beat lightly.
- 127.4: w1 is marked unstressed on the first beat; a light stress is
  possible. The two meetings of stress, w5 with w6 and w7 with w8, are
  firm. The caption leans only on w7-8.
- 127.6: w5 passes over the fourth beat and w6 is stressed off the
  beat. It can also be heard with w6 lighter; the fourth beat is passed
  over all the same. Not leaned on.
- 127.7: eleven syllables with a full ending. I put the extra syllable
  at the pause (w4), which is how the rule is drawn. It can also be
  heard as a three-syllable foot after the pause. w6 is marked
  unstressed on the fourth beat; a light stress is possible.
- 127.8: three beats, no doubt.
- Row 129.0 is not scanned. The hosted text and the Cambridge edition
  of 1863 print it as prose; the Folio sets it as two lines (see
  `open`).

Plate 3 (four beats, seven or eight syllables):

- 1.1: w0 and w1 are marked unstressed. A speaker may stress w1, or w5
  in place of w4. Not leaned on.
- 1.2: marked with w2 and w3 both stressed and w4 stressed after the
  full stop. Heard the other way, with the beat on w1 and w3, the
  meeting of w3 and w4 across the full stop is still there, and that is
  all the caption claims.
- 1.4: voice and measure agree; the full stop falls between an
  unstressed syllable and a beat. The pinned remark says so.
- 1.5: w0 is marked unstressed on the first beat and w2, an auxiliary,
  light. A speaker may put the beat on w0.
- 1.7: w1 and w4 stand on beats and are marked unstressed, and w2 is
  stressed off the beat. A speaker who keeps closer to the measure
  stresses w1 and w4. Not leaned on.
- 1.8: w0 and w3 pass over beats. A light stress on w3 is possible.
- 1.9: w4 is marked unstressed and w5 stressed. It can be heard with
  the beat on w4, or with w4, w5 and w6 nearly level.
- 1.18 and 1.19: the measure puts the first beat on w1 in both. A
  speaker may stress w0 of 1.19 instead.

The meter names are plain statements of what was counted: eight rows of
ten or eleven syllables and one of six on plate 2; six rows of seven
syllables and six of eight on plate 3.

## Where each fact was read (all on 3 October 2026)

Auden, in the scans (read to check, not copied):

- dh.txt 6168-6209, DH pp. 128-29: a disquieting work; repentance and
  pardon more formal than real; Alonso alone seems truly sorry; the
  pardon contemptuous, that of a man with his enemies at his mercy; his
  attitude to all of them is in the words to Caliban, which Auden
  quotes; to be admired, not liked; it never occurs to him that he
  might need pardon. The running head of p. 129 stands at line 6185, so
  lines 6168 to 6178 are p. 128 and the rest p. 129.
- dh.txt 6215-6221, p. 129: Caliban has the better of the argument and
  Prospero is largely responsible for his corruption.
- dh.txt 6249-6262, p. 130: Caliban has lost his savage freedom and
  innocence and is open to further corruption by the civilized vices of
  the two men.
- dh.txt 6273-6277, p. 130: the play manichean, and why.
- dh.txt 6297-6306, p. 131: the natural cannot imagine possibility;
  the vague dream; Ariel known to Caliban only as the sounds of this
  speech.
- dh.txt 6377-6390, p. 132: Caliban stands for the natural and Ariel
  for imagination, ideally unseen, a voice.
- dh.txt 6438-6443, p. 134: Prospero and Ariel bound by contract;
  Ariel released at the end.
- dh.txt 6447-6472, p. 134: The Magic Flute set against the play.
- dh.txt 24012-24045, pp. 507-8: the two uses of instrumental music;
  music commanded by spirits like Ariel, or by wise men like Prospero,
  to work on human beings; solemn music played off stage, from an
  unseen source. Page 508 begins at line 24029. I found this late. It
  is in the `auden` list and no caption leans on it. It is said of
  instrumental music in general and of solemn music, and the tune in
  3.2 is a catch played on a tabor and pipe, so I did not stretch it to
  cover this speech.
- dh.txt 24997-25040, pp. 526-27: the play ends more sourly than the
  three comedies before it; the victory of justice seems a duty to
  Prospero more than a joy.
- pearce.txt (the passage beginning with the sea in the late plays):
  the fairy tale, the erring hero, the giving up of powers, Faust and
  the art of life are on p. 150; the play as Shakespeare's summing up
  and the remark on Caliban are on p. 151. In this scan the page number
  stands at the foot of its page, just before the next page's heading,
  and I counted from the numbers 149 and 150.

The words (Alexander Schmidt, Shakespeare-Lexicon, 1902, at the Perseus
Digital Library; each entry fetched and read, and the files kept):

- Afeard: afraid; cites this line.
- Noise, sense 3: music; quotes row 127.0, and goes on to a company of
  musicians, citing Henry IV, Part 2, 2.4 (hosted: henry-iv-2/a2s4,
  block 7).
- Air (the third entry, the noun): a piece of music, played or sung;
  cites this line and Ferdinand's line in 1.2 (tempest/a1s2, block 222).
- Twangling: shrill-sounding, jingling; quotes rows 127.2 and 127.3.
- Methought: the sense "it seemed to me in sleep, I dreamt" cites this
  line.
- That (the conjunction), sense 3: so that; cites this line.
- Cry (the verb), sense 5: to demand eagerly, with a following
  infinitive; quotes rows 127.7 and 127.8. Sense 2 of the same entry is
  to weep, which is why the note says the verb can mean that too.
- Will (the verb): under "use and custom" it quotes rows 127.2 and
  127.3 and, among the examples with would, cites the line of row
  127.6. That row 127.5 w0 is the same will is my reading of the
  grammar (the two halves of the sentence are built alike), and the
  caption says only that.
- Charm (the noun), sense 1: magic power; cites the Epilogue. Its Latin
  origin is from the Online Etymology Dictionary, under charm.
- Confine (the verb), sense 3: to restrain to a certain place; quotes
  rows 1.3 and 1.4.
- Spell (the noun): charm, magic; cites the Epilogue and 5.1.
- Release (the verb), sense 1: to set free from confinement; quotes
  row 1.8 and Prospero's order in 5.1. Release (the noun) cites Ariel's
  report in 5.1.
- Band (the noun), sense 1: tie, hence fetters; quotes row 1.8.
- Hand: explains Puck's request as clap hands, applaud, and sets rows
  1.8 and 1.9 beside it.
- Crime: a heavy offence; cites the Epilogue.
- Indulgence: leniency; and, as the sense in the Roman Catholic church,
  absolution from censure and punishment, under which it quotes rows
  1.18 and 1.19.
- Free (the adjective), sense 1: at liberty, not confined; cites the
  Epilogue and Prospero's last words to Ariel.
- Trim (the verb), sense 1, and Handsomely, sense 1: to make neat;
  neatly. Both cite the line of the pair.

How the verse works (Paull F. Baum, The Principles of English
Versification, 1922, the copy in .cache/handbooks):

- Chapter 2: verse is prose fitted over a framework of meter.
- Chapter 3, on the pause: where there is no pause of sense at the line
  end many readers reduce the pause there. Read; not cited in a
  caption.
- Chapter 4, on the line, and the glossary: the feminine ending is an
  extra unstressed syllable at the end of a rising line.
- Chapter 4, on the short couplet: a strong pause of sense cannot well
  fall in mid-line without danger to the rhythm; the pause of sense
  usually falls with the line; the quick return of the rhyme makes the
  couplet felt as a unit.
- Chapter 4, on blank verse: extra syllables and unusual pauses mark
  Shakespeare's later blank verse, with lines from The Tempest as the
  example; Shakespeare changed between prose and verse as subject or
  tone required.
- Chapter 5: the placing of the pause is often a means of fitting the
  verse to the meaning; a line overweighted with stress is slowed.

Other passages and editions:

- The play as hosted: tempest/a3s2, blocks 36 and 111 (the directions
  for Ariel's entry and for the tabor and pipe) and 113 to 139;
  tempest/a4s1, block 97 (Ariel's report); tempest/a5s1, blocks 3, 9,
  15, 23, 133, 171 and 188; tempest/epilogue.
- A Midsummer Night's Dream 2.2 and 5.1 and Macbeth 4.1, read at
  shakespeare.mit.edu, for the measure of the charms and for Puck's
  last speech.
- The Folio of 1623, in the transcription of the Internet Shakespeare
  Editions (Act 3, Scene 2, through-line numbers 1350 to 1512). The
  speech is 1492 to 1500. It has a comma after row 127.0 w2, a colon
  at the end of the second line and no full stop before the end; the
  three pauses of the long sentence are pointed there too, with a
  semicolon and two commas. It sets Stephano's reply as two lines
  (1501 to 1502), and sets Caliban's first speech of the scene (1373
  to 1374) and his fifth (1393 to 1395) as lines that begin with
  capitals.
- The Cambridge edition of 1863 (Project Gutenberg no. 23042), text and
  notes to 3.2: prints the reply as prose, prints Caliban's first
  speech of the scene as verse, and notes that Steevens printed all
  Caliban's speeches as verse.
- Project Gutenberg no. 1540, the list of persons, for what Stephano,
  Trinculo, Caliban and Ariel are called. The hosted text has no such
  list.
- Verse and prose by rank: the Royal Shakespeare Company's Shakespeare
  Learning Zone (the language pages for The Tempest, Macbeth and A
  Midsummer Night's Dream) and Shakespeare's Globe, "Verse and Prose."
  They say that Shakespeare sometimes divides the two by rank and that
  Trinculo and Stephano generally speak prose. The Globe page says the
  rule holds sometimes, so the caption says "sometimes."

Counts, made by script from the hosted text and checked again before
handing in:

- Act 3, Scene 2 has 66 speeches: Stephano 28, Trinculo 14, Caliban 20,
  Ariel 4. A speech is one turn under a speaker's name. Stephano's 28
  stand in 29 prose blocks, because one speech is split by a stage
  direction (blocks 72 and 74), and one of them holds two sung lines
  (block 108).
- Caliban's first five speeches are printed as prose and the other
  fifteen as verse, 54 lines.
- In the scene the two men say "monster" 17 times: Stephano 11,
  Trinculo 6. Caliban and Ariel never say it there.
- No speech of Prospero, Miranda or Ferdinand is printed as prose in
  any scene (136, 49 and 30 verse blocks; no prose block).
- Prospero has 655 lines of verse before the Epilogue. No two of them
  that stand together are of seven or eight syllables and rhyme.
- The name Ariel is spoken 17 times in the play: 16 by Prospero, once
  by Ariel.
- In the twelve lines shown, sentences end at rows 1.2 w3, 1.4 w3,
  1.9 w6 and 1.19 w5. Rows 1.3, 1.7, 1.9, 1.18 and 1.19 hold the word
  of address or its possessive.

## Looked for and not found

- Anything Auden said about the Epilogue itself, about the revels
  speech or the farewell to his art, or about verse and prose in the
  play. The reading claims none.
- The Oxford English Dictionary entries for these words: the pages ask
  for a login. Schmidt is used throughout.
- A handbook statement about a line shared or left short at a change of
  speaker. Baum has none, so the claim I had drafted was cut.
- A note in any edition I could open saying that applause breaks a
  spell. Not found; nothing of the kind is in the reading.
- One web guide to the scene answered a second request with a refusal,
  so nothing rests on it.

## The checker

`node build/tools/check-reading.mjs tempest` ends with "no problems"
and "no warnings." There is no warning to answer.

## For the artist

- Plate 3 has a pair and all four lenses show it; only the last lens
  ties words across.
- Rows 1.9 and 1.18 are not next to each other in the play. The plate's
  label says which lines are shown, and the fourth pinned remark of the
  Beat lens, set on row 1.18 w0, says that lines 11 to 18 are left out
  there. The other three lenses have nothing that marks the gap. A
  small mark between the two rows in every lens would be better, if the
  kit can draw one.
- The Scene lens gives four speakers. For each: speeches, in prose, in
  verse, lines of verse, and how often he says "monster." Those seven
  columns are what the plain table shows.
- Under each speaker, `where.speeches` lists his speeches for a drawing
  of the scene. Each is [number among the scene's 66 speeches, the
  block it begins at, "prose" or "verse", words spoken, lines of verse,
  lines sung]. Put the four lists together and sort by the first number
  and the scene is there in order. The speech on the plate is number
  60 and the reply number 61. Ariel's four have no form given, for the
  reason in his `note`. A script made the lists and checked them
  against the counts (66 in all; 28, 14, 20 and 4; Caliban's first five
  prose and the rest verse; 54 lines; one speech with two sung lines).
- Seen in that list and not claimed in the caption: as the hosted text
  prints it, Caliban's first verse speech (number 20, block 42) is his
  answer to Ariel's first interruption (number 19). The Folio sets his
  verse as beginning one speech earlier, at Ariel's entry, and sets his
  first speech of the scene as verse too. I know of nothing that says
  why, so the caption gives the counts only.
- Every phrase set in bold or italic in my captions was run through
  the page's own matching rule (site/js/kit/plate.js, `find`). Each
  lands on the words meant. Two are not on the plate and light nothing:
  the play title in the Epilogue's Beat caption and "monster" in the
  Scene caption.
- In the Sentence lens the tags `awake`, `asleep`, `dream` mark the
  four parts of the sentence in order, and `custom`, `past`, `future`
  mark verbs.

## The lead's changes after the critic (3 October 2026, 10:01 UTC)

From critic.md, sections 4, 5 and 7. Checker after: no problems, no
warnings, fit to print. Seen in the browser at 1280 and 390.

**The head of the page**
- `about` now says who Caliban and Prospero are, in the critic's words
  (90 words).
- `view.says`: the second and the last sentence followed Auden's own
  sentences too closely (a run of six of his words and a run of five,
  beside a quotation of 25). Both are said again in the page's words. A
  test against the scan of the book now finds no run of four words
  shared with him. The last sentence keeps his point that it is the
  song that lets Ferdinand accept the past.

**The approved plate, `song`** (six small corrections, none of them a
new claim; the plate's marks, glosses and look are as they were)
- Beat, the caption: "the two lines that say" is now "the fourth and
  fifth lines, which say", since a reader could not tell which two;
  and "In Into" is now "In the next line, Into".
- Beat, the first remark: "rises to its beats" is now "begins off the
  beat", the key's own word. The measure named on the Beat tab of the
  second passage changes with it ("the line beginning off the beat").
- Beat, the second remark: of the three last stresses the first two
  are the sound of the bell; it said "two of them", and the third is
  the word for the bell itself.
- Rhyme, the caption: "one unit, a couplet", so that the word is said
  before the last sentence uses it.
- Word, two notes: "under the sense:" with a colon, as the critic set
  the same notes of the other passages. One Old English word is marked
  to stand upright.
- Not changed: the caption's last sentence on the Rhyme tab, which the
  critic found gives no reason; he had no wording that was not a new
  claim, and neither have I.

**The second passage**
- Word, the caption: a tabor is now said to be a small drum. Ground:
  Schmidt's lexicon under Tabor, opened by the lead at Perseus ("a small
  drum used for festivity", accompanied by a pipe; the entry cites
  Ariel's report in Act 4). Added to `grounds`, `stands` and
  `sources`.
- Scene, the caption's last sentence (Auden, p. 130) stays: it is his
  view of the two men the tab sets against Caliban.

**Notes** can now carry upright words (the sixth mending of the kit):
two titles of plays and one Latin word are marked.

**The list of what Auden said**: 663 words, now 601. Three sentences
that captions already carry were cut from the fourth and fifth entries.
All seven entries stay; each bears on a passage shown.

**Sources**: the New English Dictionary is now said to be the first
edition of the Oxford dictionary, which the Word tab names.

Kept as the critic set them: his change 18 (the handbook no longer
named in the Rhyme caption of the third passage; its ground still
cites it) and his change 37 (Auden's plain word for what Caliban is
accused of).

## Words marked in the small notes by the lead (3 October 2026, 10:07 UTC)

After the sixth mending of the kit a word between asterisks in a remark or a word's note stands upright in the italic. The lead marked the words these notes name as words (words of the passage, words of the original, Latin and Old English forms) and the titles in them. No wording was changed. Checker after: no problems.

## Phrases loosened that ran close to Auden's or Pearce's wording (3 October 2026, 13:11 UTC)

The lead, after the piece was through every stage. A test of every
printed paragraph of every piece against the four scans
(`python3 build/tools/runs-sweep.py`, which prints the page's own words
and never the scan's) found sentences here that shared a run of five or
more words with Auden's text or with Pearce's memoir. Each was said
again in other words; no claim was added or taken away. The edits, 8
of them, are in `lead/edits-runs.json`, and the reading before them is
`lead/before-runs.json`. The runs that are left are small words ("at
the end of the") or the words of the work itself. The checker after the
change ends as it did before.
