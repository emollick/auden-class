# Rilke: the examiner's record

Begun 3 October 2026, 08:00 UTC. One examiner (see `examiner.txt`).
Words of the works are pointed at by row and word number. Nothing of the
novel, the poem or either English version is written out here beyond a
single word or a short phrase that the reading itself prints. Auden is
paraphrased.

Result: mended. The checker ends with no problems, no warnings, and
the printed notes fit to print (its last lines are at the foot).

## State at the start

- `node build/tools/check-reading.mjs rilke` ended: no problems, no
  warnings, the printed notes are fit to print.
- Three passages, ten tabs: `count` (Sentence, Figure, German), `turn`
  (Sentence, Word, Figure), `panther` (Subjects, Beat, Rhyme, English).
- An artist was at work on the piece from 08:33 (`art.md`, `look/`,
  `shots/`). Every change to `reading.json` was a small exact edit.

## 1. The proof

Read line by line. Every mark sits on the word it is meant for, with
three exceptions, all on words that a dash joins to the next (see 2).

Counts checked against `node build/tools/words.mjs rilke p1-02 0 0` and
`... o-rilke verse 0 0`:

- First passage: words 170 to 294 are one sentence. 125 word numbers,
  126 words (word 281 is two words joined by the dash). Subject and
  verb, words 170 to 177 (8). The list, words 178 to the first half of
  281 (104 words: eleven phrases of 5, 3, 7, 8, 29, 16, 8, 5, 4, 2 and
  14 words, 101 in all, and the joining word at 186, 202 and 256). The
  turn, second half of 281 to 294 (14). 8 + 104 + 14 = 126.
- The poet's ground said "104 words in eleven phrases". The eleven
  phrases hold 101; the list is 104 with its three joining words. The
  caption's "the next 104" is right as a count of the list. Ground
  reworded with the eleven lengths.
- Every comma and semicolon inside the list ends one of the eleven
  phrases (none stands inside a phrase), so "the sentence could end
  after any of them" holds.
- The German pair: the small word at the head of each of the eleven
  things stands at words 153, 158, 162, second half of 168, 174, 199,
  212, 219, 223, 227 and 229. Eleven. (Word 247 is the same small word,
  not at the head of a thing.)
- The five steps of the Figure tab: 7, 4, 3, 1 and 13 words in the
  English (249-255, 258-261, 263-265, 267, 269 to first half of 281).
  In the German the same five are 5, 3, 3, 1 and 9 words (213-217,
  220-222, 224-226, 228, 230-238): the second and third are equal, so
  "the phrases shrink" is true of the English and the caption now says
  whose count it is.
- Second passage: sentences of 10, 24 and 8 words (354-363, 364-387,
  388-395), then one of 48 (396-442, word 417 being two). The condition
  is 22 words (396 to first half of 417). After the point (428-433)
  come the verb at 434 and eight more words.
- *must* between word 128 and word 395: at 136, 145, 171, 296, 331,
  338, 365, 377. Eight. None, and no *one*, in 396-442. German: the
  verb at 116, 125, 130, 150, 253, 282, 286, 313, 323 (nine; 180 is its
  past tense and is not counted), none in 339-381.
- The German paragraph says the two words for *not yet* three times:
  242-243, 306-307, 337-338. No earlier place in the paragraph has
  them (word 171 has the first of the two alone).
- German word 357 ends with a comma, and 358-359 follow it: the German
  has no dash where the English has one at word 417. A gloss said "after
  the dash"; reworded (see 6).

## 2. The ear, and words joined by a dash

### Dash-joined words (three marks mended)

- `count`, Sentence: the eleventh phrase ended at word 281, which is
  two words (281.1 the last of the list, 281.2 the first of the turn).
  Now it ends at 281.1 and the turn begins at 281.2.
- `count`, Figure: the fifth step ended at 281; now 281.1.
- `turn`, Sentence: the condition ended at 417; now 417.1. The main
  clause began at 418; now at 417.2, so that both words the caption
  names in bold are under one mark.
- German pair, word 168 (two words): no mark lands on it. Word 239
  begins with a dash and is one word.

### Der Panther, scanned before the poet's marks were compared

Scanned by word number, by the rules of German stress (stem stress;
the prefixes of rows 1.1 word 2, 2.0 word 3, 2.3 word 2 unstressed;
the separable prefix of row 3.1 word 2 stressed; row 3.0 word 6 and
row 3.1 word 7 stressed on their second syllable).

- The measure is what the reading says: five beats rising, eleven and
  ten syllables by turns (rows x.0 and x.2 eleven, rows x.1 and x.3
  ten), and row 3.3 has eight syllables and four beats. Counted in the
  proof: 11, 10, 11, 10; 11, 10, 11, 10; 11, 10, 11, 8.
- My marks agree with the poet's on every syllable except these, where
  both ways are honest:
  - row 1.2, words 0 and 1: I hear the first word carry the stress as
    easily as the second;
  - row 3.2, words 0 and 1: the verb said again can take the stress
    from the preposition, or yield it as the poet has it (the new word
    is the preposition);
  - row 3.1, word 3: can be stressed after the full stop;
  - row 1.1, word 0: can be stressed (it is answered by word 3).
- No caption leans on any of these. The Beat caption needs only the
  count of beats in each line and the full stop in row 3.1. The caveat
  that the stresses are one hearing stays.
- The beats the voice passes over, as the proof prints them (rows 1.0,
  1.1, 2.1, 2.2 twice, 2.3, 3.0), are all on small unstressed words or
  on the first syllable of row 2.2 word 7. Right.
- "The poem's one full stop inside a line": the other full stops end
  rows 1.1, 1.3, 2.3 and 3.3. Right. "Its one four-beat line": right.
- Lemont's twelve lines have ten syllables each (counted in the proof).
  Scanned by word number, each has five beats in rising measure, so
  "five beats to the line" and "a line of full length" hold. The voice
  varies as in any such English verse: the first foot is turned round
  in rows p:2.2 and p:2.3 (stress on word 0), the fourth in row p:1.2
  (stress on the first syllable of word 6), and a beat falls on a
  light word in rows p:0.0 (word 5), p:0.1 (word 2), p:0.2 (word 5),
  p:1.3 (word 1), p:2.0 (word 6) and p:2.2 (word 6). The ground of the
  English tab now says so. Her rhymes go by turns in all three stanzas
  (the first rhymes a word with itself).

## 3. The terms, and what the page joins

- **climax** (`count`, Figure). Silva Rhetoricae gives two senses: in
  general, words, phrases or clauses arranged in an order of increasing
  importance, often in parallel structure; more narrowly, a chain in
  which each clause takes up the last word of the one before. The five
  phrases are parallel (each headed by the same small word) and each
  names a larger thing than the last: rooms, the seaside, the sea,
  seas, the night sky. That is the general sense. They rise in extent
  where the handbook says importance; the plain-words gloss ("each step
  greater than the one before") says no more than the passage shows.
  Kept.
- **metaphor** (`turn`, Figure). Silva: a comparison made by referring
  to one thing as another. The sentence says that memories turn into
  blood, a glance and a gesture. A thing of the mind is spoken of as
  things of the body. Kept. The gloss is right and is 21 words.
- **loose** and **periodic** (the two Sentence tabs). Allbutt (1904),
  p. 64: a loose sentence might have ended at an earlier pause; a
  periodic one can end only when its period is complete. Baldwin
  (1909), p. 122: the periodic sentence puts its conditions first so as
  to end with the point, and its syntax is incomplete up to its last
  word. Strunk (1918), rule 18: the periodic sentence gives prominence
  to the main statement; rule 14 has the term loose sentence. The long
  sentence of the first passage is loose in Allbutt's sense. The last
  sentence of the paragraph is periodic as far as word 434 and then
  adds eight words, so it is not periodic to its last word in Baldwin's
  strict sense. The caption says only that handbooks call "this order"
  periodic and that the sentence cannot end before its point, which is
  true. The `why` said the point was kept "for the end of a sentence";
  mended (see 6).

### What the page joins

Looked at in the artist's pictures of the built piece
(`shots/`, 08:33) and in a build of my own in a scratch copy, made
after the last change (all ten tabs at 1280 and 390 px; the picture
tool reported nothing).

- `count`, Figure, drawn as a list: the five steps are underlined and
  numbered 1 to 5, with no strokes. The numbers say an order, which is
  what the caption says. Nothing to change.
- `turn`, Figure, drawn as a map: at desk width the page drew a stroke
  from the word for the thing of the mind (392) to the first two of
  the three body words (402, 406) and none to the third (408), which
  stands two lines lower; a stroke is drawn only between one line and
  the next. On a phone it drew none. The caption joins all three to
  the first equally, so the picture left apart two words that the
  caption joins. Set `"join": "none"`: the four words are underlined
  in their two colors, with the key, at every width. Seen in my build.
  (The artist's notes of 08:56 say the same of this tab.)
- The two compare tabs number their pairs in the order they stand in
  the passage, and each remark sits beside its number. Right.
- Seen and left for the artist and the lead: on a phone the German of
  the first passage stands between the marked English and the caption
  on the tabs that do not mark it (the artist has it in `art.md`).
- Left as the poet set it: on the Word tab of the second passage the
  seven glosses stand under the English words, and five of them gloss
  a German word that stands in the sentence beside it (German words
  339-340, 346, 348, 373 and 374). The artist's notes ask whether
  those five should be tied
  to the German words. Nothing false is shown either way; it is a
  choice of design, and the lead's.
- A word named in a caption in bold or italics lights where it stands
  when the pointer is on it (plate.js; the match takes no account of
  capitals). I went through every such word of the ten captions.
  - **Mended.** The Subjects caption named the first word of the poem
    alone, in italics, and said the animal is there "in the first
    stanza only". The same letters are the poem's last word, a verb
    (row 3.3 word 6), which no mark of that tab covers, so the pointer
    lit both. The caption now names the first two words of row 1.0
    together, which stand in one place only.
  - Left: on the German tab of the first passage the small English
    word in bold also lights where it is not the head of a thing (the
    tab marks four of the eleven, and the page leaves dark only what
    lies inside a mark), and the German one lights at word 247 as
    well. On the second Sentence tab the pronoun in italics lights in
    three sentences. The page shows where the word stands, and nothing
    false is said.

## 4. The words (each entry opened on 3 October 2026)

- *Digitales Wörterbuch der deutschen Sprache* (dwds.de), fetched:
  - zurückdenken: to think of something past or of someone one knew;
    built with the small word that heads the eleven things. As said.
  - überhaupt, sense 1: seen on the whole, in sum; its example is of
    a discovery that matters for science as such. The reading's "as a
    whole" follows the entry.
  - noch, sense I.1: the lasting of a state whose end is mostly in
    sight; its examples include the two words for *not yet*. As said.
  - erst, sense I.2: that a thing does not lie before the time named,
    "not sooner than". As said.
  - vorübergehen: built with a preposition and the dative, to go up
    to, alongside and away from; second sense, to pass, to end. No
    object. As said.
  - Stab: among its examples, the iron bars of a railing or a cage.
  - Vers: 1, a unit of bound speech that mostly forms one line of a
    poem; 2, in common use, a stanza; 3, a verse of the Bible. Its
    etymology gives Latin *versus*, properly the turning of the earth
    by the plow and the furrow so made.
- Grimm, *Deutsches Wörterbuch*, fetched at dwds.de/wb/dwb:
  - Vers, sense 1 (vol. XII,I, col. 1029; part printed 1895): from
    Latin *versus*, properly the turning of the plow, the furrow, then
    line; in German it is throughout the rhythmic line. Sense 2 is a
    group of lines, said of hymns above all. So "a line of verse" is
    the first sense, and the word can also mean a stanza. The English
    of 1930 has *verse* at word 134 and *poem* at 433. A caveat now
    says so, and the ground names both dictionaries.
  - aufstehen (vol. I, cols. 746-48): sense 1 from bed, sense 2 from
    the ground or a seat; under 1, that a going follows as often as
    eating does; under 2, that speaking is joined to it because the
    speaker first rises to be heard. Grimm's word for the usage is
    *episch*, and the examples are from Luther's Bible: "in old
    narrative" will do. As said.
  - Blick (vol. II, col. 113 ff.): sense 1 a flash of light,
    lightning; sense 3 the light and ray of the eye. As said.
  - Geberde (vol. IV,I,I, col. 1729 ff.): II.1, even as a singular it
    first means a person's whole bearing; II.3, a single conscious
    expression. As said.
- All of these entries were in print before 1910 (Grimm) or describe
  the standard language (the modern dictionary); none of the senses
  used is a later one.

## 5. Auden

- **1936.** Read through the full-text search of both Internet
  Archive scans of *The English Auden* (englishaudenpoem0000aude,
  englishaudenpoem00aude), chaining snippets: the sentence before
  (about other men's intellectual ideas not applying to Shelley), the
  sentence itself, the two after (his objection to Shelley; that
  Shelley seems never to have looked at or listened to anything except
  ideas), and the next (Housman). The contents page gives the essay at
  p. 356. The words quoted stand as the poet gave them, the adjective
  before "mass" included, in both scans.
  - Changed: `view.quote` now begins after that adjective and its noun
    and runs twelve words. The adjective may be a misprint in the book
    (the poet says so in `open`); the page prints the quotation first
    and large; the twelve words are not in doubt. `view.says` now
    carries the rest in paraphrase (70 words). `view.checked` records
    it, and the `open` entry that said the quotation gave the two
    words "as printed" is corrected.
  - Read's quotation, checked the same way in *Form in Modern Poetry*
    (forminmodernpoet0000herb_k9i4): he introduces it as from a modern
    German poet's journal, it begins at the sentence that verses are
    not simply feelings and runs to the end of the paragraph, the
    reversed sentence included, and his footnote names the London
    edition and John Linton. Both passages shown lie inside it.
  - The page number 357. The search gives no page for a match in a
    lending copy, and the number stood only on the research note
    (F_rilke.md, 3.3: seen in a Google snippet). Worked out at the end
    from the text of the first scan, where the printed page numbers
    stand in the flow of the words. The contents page puts this essay
    at 356 and the next at 358. Text of this essay stands before the
    number 356, and the next essay begins between the numbers 357 and
    358; both are possible only if each number stands at the foot of
    its page. I followed the text snippet by snippet from the number
    356 to the sentence and from the sentence to the number 357: no
    other number stands between. So the sentence is on p. 357, and the
    essay ends a few lines into p. 358. Recorded in `view.checked` and
    in `open`; not seen on a page image.
- **1939.** Read in the text of the magazine
  (research/F_work/nr_1939-09-06.txt, lines 3264-3450), the whole
  review. What he says, in order: one of a poet's constant problems is
  abstract ideas in concrete terms; the Elizabethans solved it one way,
  the Metaphysicals another; with one exception the poets of the next
  two centuries found no fitting solution; Rilke is almost the first
  since the seventeenth century with a fresh one; his method is the
  opposite of the Elizabethans', and like them and unlike the
  Metaphysicals he thinks in physical, not intellectual, symbols;
  Shakespeare thought of the non-human in terms of the human, Rilke
  thinks of the human in terms of the non-human, Things; a child's way
  of thought, as Rilke said himself. All on p. 135; the review ends on
  p. 136. It names no prose book of Rilke's.
  - **Found wrong.** The Figure caption of the second passage said
    that Rilke's new way was to use "symbols taken from the physical
    world", and that the prose sentence "does the same". In Auden the
    physical symbols are what Rilke shares with the Elizabethans. What
    is new is the direction: the human seen as things. The sentence on
    the page turns memories into blood, a glance and a gesture, which
    are human. So Auden was made to say something he did not, and the
    sentence was claimed for a method it does not use. Mended: the
    caption now gives only the two things he did say that the sentence
    bears out (a poet always has to say abstract ideas concretely; the
    symbols Rilke thinks in are physical, not intellectual), says he
    was reviewing the poems, and no longer speaks of a new way. The
    `why` and the ground follow; the ground records what is not
    claimed.
  - The list entry for this review was checked sentence by sentence
    against the same text and stands as the poet wrote it.
- **1941, New Year Letter.** Searched in the scan of the Faber edition
  (newyearletter0000aude): the tribunal of the masters (his note to
  line 142 is on it), the couplet, Auden's note keyed to line 215, the
  later passage with the printed line number 550 beside it, and the
  note that names the Eighth Elegy. As the reading says. The two line
  ranges are the research note's.
  - Changed: the entry gave the couplet almost word for word without
    marking it as a quotation. It is now a looser paraphrase (things
    bless him, the poem using his German word; loneliness's Santa
    Claus).
- **Pearce, p. 148.** Read in research/auden/pearce.txt: the sentence
  on the Elegies stands between the page numbers 147 and 148, which in
  this scan are at the foot of their pages, so it is on p. 148. It
  follows his notes on the lecture on Henry IV.
  - **Found wrong, a second time through.** The entry said he wrote
    down what he could "of each lecture". Pearce says near the start
    that the first meetings are almost a blank to him, that he then
    began to go into a nearby room after a lecture and get a page or
    two down, and later that the last lecture he has any record of was
    in December. So not each. The entry also kept two runs of his
    words (seven and six) without marks. Reworded: he made his notes
    from memory after a lecture; where the notes on Henry IV stop he
    says that more followed, on the Elegies as far as he recalls, and
    that he meant to get it down the same night and lost it.
- **The third passage and the view.** The first two passages are the
  passage Auden praised. The poem is tied to it by seeing: its captions
  give their reason from Rilke's letter and from Malte's own words, and
  no sentence makes Auden speak of the poem. The 1939 review, in the
  list, is his account of how Rilke's poems think.
- **The Dyer's Hand.** Read in research/auden/dh.txt: the date of the
  inaugural lecture (line 1705); p. 51, under its running head (line
  2645; the sentence at 2672-74; the next head, p. 52, at 2692); p. 76
  (the running head at line 3770 is misread by the scan; it is the
  left-hand page between the heads of 73 at line 3633 and 77 at line
  3816, with an unnumbered right-hand head at 3722, so 76; the passage
  at 3778-88).
  - Changed: the paraphrase of p. 76 kept runs of his words (one of
    six words, two of three). Reworded throughout; it says what he
    says and no more: the opposite heresy credits what is gratuitous
    in art with a magical use, the poet takes himself for a god who
    makes his own universe, the visible world is nothing to him;
    Mallarmé and Rilke lead that heresy; both had genius; the last
    impression is of falseness and unreality.
  - The second essay's title is printed with an ampersand; the
    `source` now follows the book.
- The list "More from Auden": all four entries stay. Three are of 1939
  to 1941. The fourth, his later view, is two short places in essays
  on other things, and the examiner's rule would send a passing
  mention to the notes. It stays because p. 76 bears on what the first
  and third passages show (he there calls Rilke a poet to whom the
  visible world is nothing, and the passages are about what must be
  seen), and because without it the page would give only his praise.
  The lead may think otherwise.

## 6. The reason and its ground, tab by tab

Each caption and each `why` was taken a sentence at a time and set
against the proof, the paragraph, the source or the page of Auden.
Where nothing is said below, the sentence stands on the ground the
reading lists, and I opened that ground.

### First passage (`count`)

- **Sentence.** Plate: the three marks' counts (see 1). Source: Allbutt
  p. 64 for *loose*. Text: words 281.2 to 294 for what follows the
  dash. Auden: his verb and what is counted, 1936.
  - Changed: "The next 104 hang on one small word" became "The next
    104 are a list". Three of the 104 are joining words and hang on
    nothing; and the plainer sentence is true as it stands.
  - Changed: the plate ground now gives the lengths of the eleven
    phrases (101 words) and the three joining words.
- **Figure.** Plate: five steps, 7, 4, 3, 1 and 13 words. Source:
  Silva, climax. Text: the two words at 293-294 for what is called not
  enough.
  - Changed: "the phrases shrink" became "the English phrases shrink",
    and the printed note says the count is of the English (the German
    beside it runs 5, 3, 3, 1, 9).
  - "Each with more space in it than the one before" is read off the
    five things named. It holds in the German too.
- **German.** Plate: which words answer which, eleven and eleven, the
  noun at German words 222, 225 and 228 against English 261, 264 and
  267. Source: the modern dictionary for the three German words; the
  collected works at zeno.org, p. 724, for the second and third *not
  yet*. No change.

### Second passage (`turn`)

- **Sentence.** Plate: the counts (see 1). Source: Baldwin p. 122,
  Allbutt p. 64, Strunk rule 18. Text: the count of *must*.
  - Changed, the `why` only. It said periodic order "keeps the first
    word of a poem for the end of a sentence": nine words follow the
    point. It said the word "is not something one does", which no
    sentence of the paragraph says. Now: periodic order holds the
    sentence open until the first word of a poem arises; after eight
    uses of *must* it has none; its subjects are the memories and the
    word; it says what can then happen. Each clause is in the proof.
  - "Its subjects are the memories, it, and the word": words 398, 420
    and 428-433. "The writer is there only as us and ourselves": words
    404 and 417.1. Right.
- **Word.** Seven glosses, each set against its entry (see 4), and the
  German before the last sentence set against the collected works at
  zeno.org (pp. 724-25; the page marks there stand at the end of each
  page).
  - That the German of the reversed sentence is sound and the English
    is the odd one out: the same five German words stand in the
    collected works, in the *Zentralblatt für Psychoanalyse*, II.
    Jahrgang, Heft 8, May 1912 (zb219128), and in Robert Faesi,
    *Rainer Maria Rilke* (Zürich, 1919; rainermariarilke00faesuoft),
    each searched by me and the two catalog records read. Both English
    editions of 1930 and Read's quotation have the reversed sentence.
  - Changed: the gloss on words 396-397 said the German word comes
    again "after the dash". The German has a comma there. It now says
    "where the English has only then".
  - Changed: the ground for *Vers* names its second sense and the
    modern dictionary; a caveat tells the reader.
- **Figure.** See 5 (Auden, 1939) and 3 (the join). Text: the list
  begins with seeing (word 137) and with a gesture of flowers (157) and
  ends with one's own glance and gesture (406, 408) that can no longer
  be told from oneself (409-417.1). In the German the noun at 138 and
  348 is the same.

### Der Panther (`panther`)

- **Subjects.** Plate: the animal is in the poem only as the first
  words of rows 1.0 and 1.2; the first subject of each stanza; the last
  subject and its verb. The pronoun at row 1.1 word 5 is read as the
  gaze (a masculine noun); both English versions in the reference
  article take it so, and Lemont's line too. Source: the German
  reference article for gaze, gait, eye; Rilke's letter of 17 March
  1926 as Kuh quotes it on p. 60, read in the text of Kuh's book
  (IA40151827_0022), with the phrase about the schooling found again in
  the scan of *Briefe aus Muzot* (briefeausmuzot190000rain). The letter
  names Rodin, the duty to work before nature like a painter or
  sculptor, the poem as the first result, the Jardin des Plantes, and
  says one may see this origin in the poem. Text: Malte on learning to
  see (two entries of part one, and words 10-16 of the paragraph).
  - Changed, the first two sentences only, for what the page lights
    (see 3). They now say: only the title names the animal; the poem
    has it twice, in the first stanza, and never as the subject of a
    verb. Counted: rows 1.0 word 0 and 1.2 word 0; no other pronoun
    or possessive of the twelve lines refers to it (pupil, limbs and
    heart take the article).
- **Beat.** Plate: the counts (see 2). Source: Kuh p. 64, where the
  short last line is "to be assumed" a strengthening of the statement;
  the German reference article says the same and cites Kuh and Berendt.
  - Changed: the ground and the printed note named Baum's handbook of
    English verse for the quatrain and for a last line made shorter. I
    read the chapter: it says that Swinburne got a striking musical
    effect by shortening the last line of a stanza in one English poem.
    No sentence of the caption stands on it, and it says nothing of
    this poem or of German verse. Taken out of the ground, the note
    and the list of sources.
  - Changed: the caption called Kuh's book "a study of Rilke's animal
    poems". Its subject is animal symbolism in all of Rilke, prose
    included; the caption now says "a study of animal symbolism in
    Rilke". The sentence on the short line was read again in the text
    of the book: only the last line is an exception, with four beats,
    and it is to be assumed that the poet tried by this to strengthen
    the statement. The caption says no more.
  - Changed: "Line 10 has the poem's one full stop" became "Its second
    line has", said of the last stanza. The page numbers no lines, and
    the English stands under each line, so a reader would have had to
    count every other line to ten.
- **Rhyme.** Plate: the letters, the rhymes of two syllables and of
  one, the word for bars at row 1.0 word 6, row 1.2 word 6 and row 1.3
  word 3, the number before it twice, the first and last words of the
  poem.
  - Changed: the last sentence said "The repeating appears to be made
    for what the stanza says". No source says so; it is the kind of
    closing sentence the brief rules out, softened with "appears".
    Now: "Repeating a word stresses it, and the word here is bars: to
    him there seem to be a thousand of them, and no world behind." The
    first clause stands on Silva (ploce: the repetition of a single
    word for emphasis; polyptoton where the form changes), the second
    on the marks, the third on rows 1.2 and 1.3. The `why`, the ground
    and the printed note follow.
  - Not used: Kuh, p. 65, reads the likeness of the first and last
    words as making the poem's sound a ring, to bring out the animal's
    circling and the countless bars. It is one critic's reading, there
    was no room for it, and the caption keeps the bare fact, which Kuh
    also notes.
- **English.** Plate: which words answer which (six pairs), ten
  syllables in each of Lemont's lines. Source: the modern dictionary
  and the reference article on the genitive for who passes whom; the
  two published English versions for the sense of the German.
  - Changed: "Three times the German says that something is not there,
    and each time the English puts something in its place." Lemont's
    adjectives at p:0.1 word 6 and p:0.3 word 6 keep the emptiness, and
    in the third case her visions do end. Now: "Twice the German says
    outright that something is not there, and the English gives a noun
    with adjectives", then the two cases, then the end as a contrast of
    its own (one image against many; a short line against a full one).
  - Changed: "It changes what the lines say" became "what some lines
    say": rows p:0.2 and p:1.3 keep close to the German.
  - Changed: the remark on the fourth pair said the English "leaves
    something there"; it now says what the English has. The `why`
    follows. The printed note names the count of syllables.

### The head of the page

- `about`: the last sentence said Rilke "said he made" the poem "from
  nature". The letter calls it the first result of his schooling to
  work before nature. Reworded; "not just feelings" taken out with the
  clause it stood in; 89 words (the checker asks for under 90). That
  the novel draws on the stay of 1902 and 1903: the German reference
  article on the novel, first paragraph, read.
- `where`: pages 18 to 20 are those of the New York edition (the
  paragraph begins at the foot of p. 18 in the scan; the long sentence
  is on p. 19; the last sentence is at the head of p. 20).

## 7. The prose

Every caption, remark, gloss, `stands`, caveat and the two paraphrases
at the head were read for the house style after the changes.

- No dash stands inside a sentence. The only dashes are in page and
  date ranges of the sources.
- No rhetorical question, no "we", none of the stock words. "Physical,
  not intellectual" in the Figure caption is Auden's own contrast,
  reported. One "not just" stood in `about`; gone.
- Captions run 99 to 109 words, each `why` 29 to 40, each `stands` 37
  to 67 words in two to four sentences, the two plain-words glosses
  17 and 21, `view.says` 70, `about` 89.
- Nothing printed calls a part of the page a plate or a lens.

## 8. The rules

- Words of the works in the reading: single words, and phrases of at
  most six (the longest are the bold phrase of six in the second
  Sentence caption, two German phrases of five in the Word tab, and
  four words of Lemont's in the English tab).
- In copyright: one quotation of Auden, twelve words, and his one verb
  in the first caption. Kuh is paraphrased. The two modern English
  versions of the poem are named and not quoted; the short glosses of
  the German are not their wording. The research note on texts
  (D_texts.md, row 22) gives the hosted English as out of copyright in
  the United States since 1 January 2026.
- Length: the first passage is one sentence of 126 words, over the 110
  that POET.md gives for prose; the checker does not object, and the
  sentence cannot be cut without losing what the tab counts. The
  second is 90 words, the poem twelve lines. In `open` (the poet's
  entry).

## 9. The printed notes

- `view.source` and the four `auden[].source`: book or article, year,
  page. The Dyer's Hand entry now prints the essay's title as the book
  has it.
- Changed at the end: the titles of books and magazines in `where`, in
  `view.source` and in the four `auden[].source` are now set between
  asterisks, as the model reading has them. The page prints these
  lines in italics and sets a marked title upright, so a title can be
  told from the words round it. (The artist's notes point this out;
  the model and the page's code bear it out.) Seen in my build.
- `sources`: thirteen entries. Taken out: Baum (nothing stands on it)
  and the reference article on the book of poems (I read it; nothing
  stands on it). Added: *ploce* to the Silva entry, *Vers* to the
  modern dictionary's entries. The Zentralblatt and Faesi, named in the
  second entry, were searched and their catalog records read.
- `stands`: ten, each for a reader. Changed with their captions: Figure
  (first passage), Beat, Rhyme, English.
- `caveats`: five, each under 50 words: nothing by Auden on the book
  by name, and his sentence of 1936 read in snippets; the reversed
  sentence; *Vers*; the stresses and the glosses of the poem; the
  assumption about the short line, the date, the letter as quoted.
- The checker's PRINTED NOTES: none left.

## Sources read (3 October 2026)

- The hosted texts through `words.mjs` and the checker's proof: the
  paragraph (rilke/p1-02, block 0), block 3 of the same part, blocks 8
  and 11 of rilke/p1-01, the German paragraph (o-rilke/verse), the poem
  and Lemont's version. The catalog entries of the four texts.
- The two English editions of 1930 in `.cache/texts/` (title pages and
  the paragraph).
- zeno.org, *Sämtliche Werke* vol. 6, the paragraph with its page
  marks.
- Internet Archive, by full-text search and catalog record: The
  English Auden (two scans); Read, Form in Modern Poetry; New Year
  Letter (Faber); Briefe aus Muzot; Faesi (1919); Zentralblatt für
  Psychoanalyse (May 1912); Bradley (1967), for the date of the poem.
  In full text: Kuh (1967), pp. 59-65; Allbutt (1904), p. 64; Baldwin
  (1909), p. 122.
- Project Gutenberg no. 37134, Strunk, The Elements of Style (1918),
  rules 14 and 18. Baum's handbook on this machine, chapter 4.
- The New Republic, 6 September 1939, the review in full
  (research/F_work). The Dyer's Hand and Pearce in research/auden.
- dwds.de: the modern dictionary under zurückdenken, überhaupt, noch,
  erst, vorübergehen, Stab, Vers, Blick, Gebärde, aufstehen; Grimm
  under Vers, aufstehen, Blick, Geberde.
- Silva Rhetoricae: climax, auxesis, incrementum, metaphor, ploce,
  polyptoton (and four other figures of repetition, to choose the
  right name).
- German Wikipedia: Der Panther, Die Aufzeichnungen des Malte Laurids
  Brigge, Genitiv, Neue Gedichte (Rilke). English Wikipedia: The
  Panther (poem).
- The research notes F_rilke.md, C_auden_on_works.md section 22,
  D_texts.md. The poet's notes.md and the artist's art.md, as
  information.

## Still doubtful

1. The page 357 of *The English Auden* is worked out from the text of
   a scan and agrees with the research note; it was not seen on a page
   image (see 5). In `open`.
2. The adjective before "mass" in Auden's sentence of 1936. The
   quotation no longer shows it. In `open`.
3. Kuh (1967) is the one witness for the letter at length and for the
   assumption about the short line, and on p. 64 gives the poem's
   rhymes the wrong way round (nothing is taken from that sentence).
   Berendt (1957) was not seen; the Internet Archive does not have it.
   For the date I found a second witness at the end: Brigitte L.
   Bradley, *R. M. Rilkes Neue Gedichte: ihr zyklisches Gefüge* (Bern:
   Francke, 1967; rmrilkesneuegedi0000brad, a lending copy searched in
   snippets), which dates the poem to the end of 1902 or 1903. A search
   of it for the German words for last line, shortened and beats finds
   nothing on the short line. The German reference article cites for
   the date, beside Kuh, a commentary of 1978 (Stahl, p. 187), which I
   did not see. In `open`.
4. Lemont's "five beats" are my hearing of her ten-syllable lines (see
   2); no handbook or study of her version was found to set beside it.
5. *Climax* is used in the handbook's general sense, and the series
   rises in extent, not plainly in importance.
6. `"beside": true` on the two prose passages, and the length of the
   first on a phone: the artist's and the lead's to judge (in `open`,
   the poet's entry, and in `art.md`).
7. The fourth entry of the list from Auden (see 5).
8. The German of the reversed sentence cannot be printed beside its
   English: the only German copy on this machine has lost a word there
   (o-rilke/verse, word 336), and I may not fetch another. In `open`
   (the poet's entry).

## The checker at the end

`node build/tools/check-reading.mjs rilke --print`, last three lines:

    no problems
    no warnings
    the printed notes are fit to print
