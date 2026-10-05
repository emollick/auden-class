# Götterdämmerung: the examiner's record

Begun 3 October 2026, 08:04 UTC (see `examiner.txt`). The reading examined
is `reading.json` in this folder as the poet left it at 08:00 UTC; the
poet's own account is `notes.md`.

Nothing of the libretto and nothing of Auden's prose is typed out here.
Words are pointed at by row and word number, as the checker prints them.

Verdict: **mended**. Three passages and eight tabs stand; no tab was
removed and no passage replaced. What was changed is listed in section 10,
what is still doubtful in section 11.

## 1. The proof

First run of `node build/tools/check-reading.mjs gotterdammerung`, before
any change: no problems, no warnings, printed notes fit to print. The
proof (`--print`) was then read line by line: every thread, part, gloss
and tie sits on the word it is meant for.

- First passage: German rows 0.0-6.0 (the third Norn, lines 219-231 of the
  German file), Armour's rows 19.9-19.15 of the Prelude beneath, seven
  lines to seven.
- Second passage: German rows 0.0-10.0 (the Rhinemaidens; the cut leaves
  out the stage directions between the sentences), Armour's rows 93.2-93.4,
  95.0-95.1 and 97.0-97.5 of Act 3 beneath, eleven to eleven.
- Third passage: German rows 0.0-10.0 (Brünnhilde, lines 5381-5401),
  Armour's rows 317.0-317.10 of Act 3, eleven to eleven.
- The one word joined by a dash (p:317.9, word 0) carries a tie, and the
  tie names its second part (0.2), which is the right one.

## 2. The ear

Scanned before the poet's marks were looked at, from the proof alone.

- First passage (the third Norn). No line ends in rhyme. After the first
  line the staves fall in three pairs of lines: rows 1.0 and 2.0 share two
  sounds, rows 3.0 and 4.0 two more, rows 5.0 and 6.0 open their stressed
  words on vowels. My scan and the poet's five threads agree at every
  place. Row 0.0 has two words that open on the same consonant (words 1
  and 2); the second is the unstressed verb, so it is fairly left unmarked,
  and the reading's last caveat says so. In row 6.0 the adverb at word 2
  opens on the same consonant as the verb at word 0; it is unstressed and
  is rightly not marked.
- Second passage (the Rhinemaidens). German: one stave to each pair of
  lines, six in all on five sounds (rows 0.0-1.0, 2.0, 3.0-4.0, 5.0-6.0,
  7.0-8.0, 9.0-10.0). Four of the marked letters stand inside a word,
  after an unstressed prefix (1.0 word 0, 2.0 word 1, 8.0 word 2, 9.0
  word 2): the mark is on the first letter of the stressed root each time,
  which is right for a stave. English: Armour has a stave where Wagner has
  one on three sounds (p:93.4, p:97.0-97.1, p:97.2), none on his first and
  last sound or on his vowels, and one of her own (p:93.4, p:97.3-97.4).
  The last word of her passage (p:97.5) has the sound of Wagner's outer
  stave at the head of its stressed syllable, but it stands alone, so
  there is no stave.
- Third passage (Brünnhilde). Rows 0.0-2.0 carry two staves, both kept in
  Armour's lines p:317.0-317.2. Only the one on r is spoken of, in a tie
  of the English tab.

Nothing was changed in the marks.

## 3. The terms, and what the page joins

- **Stave** (the kind is `rhyme`; what is drawn is alliteration). The
  term is right for this verse. Read: Grimm, *Deutsches Wörterbuch*, under
  Stabreim (vol. X,II,I, col. 377); Paull F. Baum, *The Principles of
  English Versification*, chapter 5, in the copy on this machine (the
  agreement of sounds at the beginning of accented syllables; a determining
  principle of early English, German and Scandinavian verse).
- **Antithesis** (second passage, first tab). *Silva Rhetoricae* was
  fetched again: the setting side by side of contrasting words or ideas,
  often in parallel structure. All four statements are that; the second
  and third are built alike (three words, then four, the same two words
  last). The plain-words gloss is right.
- The page was built (`node build/pieces.mjs gotterdammerung`) and every
  tab photographed (`build/tools/shoot.mjs`, 1280 px; the first tab also
  at 390 px), before and after the changes.
  - Against: no stroke is drawn between the two halves of any statement,
    because one of Armour's lines lies between them. The halves are told
    by their two colors and the key names them. Nothing is joined that
    the caption does not join, so `join` was left as it is.
  - Stave (first passage): arcs inside a line, dots where a stave goes
    on to the next German line. Reads clearly.
  - English (second passage): six threads. The dotted strokes of the r
    and g threads run from Wagner's word to Armour's word beneath it and
    on to the next line, so the two languages zigzag together. The caption
    does say that she keeps his stave on the same letter, so the stroke
    is not false; it is untidy. Left for an artist (noted in `open`).
  - English (third passage): five numbered ties, each on its two words;
    the numbers follow the order of the passage.
  - Told: there is no drawing yet (`site/js/pieces/gotterdammerung.js`
    does not exist); the page shows the kit's table.

## 4. The words

Every dictionary entry behind a gloss or a caption was opened (the poet's
saved copies were read and three were fetched again and compared).

Grimm, *Deutsches Wörterbuch* (dwds.de):

- Götterdämmerung (vol. IV,I,V, col. 1156): since 1772; a false
  loan-translation; two Old Norse names confused. As the caption says.
- Dämmerung: twilight of morning and of evening. As the caption says.
- aufdämmern (vol. I, col. 631): to grow light, to rise dawning, to
  break; "a word not yet a hundred years old"; the examples are of
  shapes, hopes, a coming century, and one of the morning. The reading
  called it "the verb for daybreak" in four places. **Changed** to
  "means to dawn".
- ewig (vol. III, cols. 1200 and 1203), Ende (col. 447): as glossed.
- sehren (vol. X,I, col. 164): to wound; the written language lost it
  early. As the caption says.
- da (vol. II, cols. 646 and 656): place and time. The reading takes the
  Norn's word as "then", which the when-clauses before it and Armour's
  line bear out. It could also be heard as "there"; nothing leans on it.
- Rune (vol. VIII, col. 1518), raunen (col. 294), rathen (col. 173: to
  help, to counsel, to divine), Brand (vol. II, col. 294): as glossed.
- verwähnen (vol. XII,I, col. 2073): to suppose, assume; in the written
  language only in older times; also to put into a delusion. wähnen
  (vol. XIII, col. 650): to believe, to assume falsely. The gloss on
  1.0 words 0-1 was "wrongly thinks himself". **Changed** to "fancies
  himself", and the note now gives Grimm's remark that the word is an
  old one. The wrongness is in the next line of the passage, not in the
  verb.
- hehr (vol. IV,II, col. 789): excellent, great, high, holy. The caption's
  "a highest good" is within it.

Online Etymology Dictionary:

- wise (adj.) and wit (v.): the root meant "to see"; the Germanic verb
  meant "to have seen", hence "to know". The reading said the root "first
  meant to have seen". **Changed** in the caption, the note and the
  ground.
- read (v.): German raten, to advise, counsel, interpret, guess; read is
  connected to riddle through the notion of interpreting. The caption
  said the German verb "is the English read in an old sense, to make out
  a riddle". **Changed** to what the two dictionaries give: the same word
  as English read, meaning to counsel, interpret or guess.
- rede (n.), with the *Century Dictionary* quoted there; rune; blind,
  bind, bound; brand; raven; Rhine; Gotterdammerung and Ragnarok: as cited.

## 5. Auden

Each thing was found again. The two books on this machine were read in
the scans; the rest could be read only through archive.org's full-text
search, a snippet at a time, as the poet read them. Page numbers were
settled from running heads and foot numbers seen in the snippets.

- **The view.** "Mimesis and Allegory" (1940), *Prose* II, pp. 81-82. The
  quotation is exact (24 words). The footnote to Nietzsche closes p. 81,
  so the sentences on the characters' odd behavior, on Oedipus, on what
  the actors explain and deny, and the example of Valhalla and the World
  Ash are on p. 82. The paraphrase does not go beyond him. He says it of
  the characters "taken as" people able to reason; the piece treats them
  so. The poet is right, and `remake/research/C_auden_on_works.md` wrong,
  about which essay this is: "James Joyce and Richard Wagner" begins at
  p. 115 and does not have the passage.
- **List 1** (two allegorical readings): pp. 81-82; the quotation exact
  (17 words), on p. 81. **List 2** (why Wagner; suffering; monologues):
  the sentence on why he chose Wagner is on p. 80, the rest on p. 83.
  Both as paraphrased.
- **List 3**, *New Year Letter* (1941): the verse at line 1432 and the
  note to it, pp. 66 and 143-44. As paraphrased. The number 65 falls one
  line before line 1432, not two as `checked` said. **Corrected** there;
  the page is unchanged.
- **List 4**, program notes for *Die Walküre* (1944), *Prose* II, pp. 503
  and 505: the alliterative meter, the Norns, what the later operas hold
  for Siegfried. As paraphrased. The entry also printed one word of his
  ("his word for the second kind is..."), a third quotation in a piece
  allowed two, and clumsy. **Cut** from the entry; the paraphrase stays.
- **List 5**, Ansen's *Table Talk*, p. 16: the three operas he likes all
  through, his order in the Ring, the oath on the spear, the duet. As
  paraphrased. The acts (2 and 1) are the libretto's, not Ansen's.
- **List 6**, "History, Feigned and Real" (1955), *Prose* III, pp. 689-90.
  Auden's sentence on the allegory comes first, not last ("He adds" was
  wrong), and he says Siegfried is no more interested in the ring than a
  character of Tolkien's, which is "takes no interest", not "cares
  nothing". **Reordered and reworded.**
- **List 7**, *The Dyer's Hand*, pp. 48 and 473 (scan, lines 2527-2534
  and 22276-22288); Miller's memoir, p. 27 (through the research notes).
  As paraphrased.
- **List 8 and 9**, "The Greatest of the Monsters", *Forewords and
  Afterwords*, pp. 251-52 and 255 (scan, lines 12035-12096 and
  12227-12253). As paraphrased.
- Pearce's memoir of the 1941 class and *The Enchafèd Flood* were
  searched for Wagner and for this opera: nothing. So there is no witness
  of what he said of it in class.
- Whether all nine entries stay: each bears on a passage shown (4, 5, 6,
  8), on the work (1, 2, 9), was said in 1941 (3) or bears on the course
  list and on the translation printed (7). None only names the work in
  passing. All kept.

## 6. The reason and its ground

Each caption and each `why` was taken a sentence at a time. The scene or
act around each passage was read in the hosted text and in the German
file. What stood is not repeated here; what did not is.

**The third Norn / Stave.** Every sentence stands. Wagner's words were
read in Ellis's translation: vol. 1, pp. 375-76 (rhyme a cheat; the verse
that bends to the accents of speech; the folk once sang it) and Ellis's
note at pp. 132-33; vol. 2, p. 227 (kindred roots knit into one image;
vowels) and p. 291 (the stave couples roots of opposite feeling). The
vowel stave of row 5.0 does join the words for eternal and end. No
change.

**The third Norn / Dawn.** The title word was searched for in the German
file: it is in no sung line (two stage directions have the second half
of it). The second sung line of the scene has the Norn's verb, and the
answer is fire and night (German lines 65-73; Prelude, blocks 4 and 6).
Auden's example is the fire of the World Ash wood, and the second Norn
has just said that Wotan had the tree felled (Prelude, block 16).
Changed: the verb "means to dawn" (section 4); the `why` says "the two
halves of the title", since the title is one word.

**The Rhinemaidens / Against.** The count and the build of the four
statements stand on the proof. The fault was the last sentence and the
`why`: they said the third statement "is close to" what Auden says, and
gave his remark of 1955 as if it were about knowledge not used. That
remark is about the ring: it does not corrupt its owners, and Siegfried,
told what it is, takes no interest and very nearly gives it back to the
Rhinemaidens. **Changed**: the caption now ends on his two remarks as he
made them; the `why` sets the third statement beside the charge of 1940
and no longer says the one is the other. A ground was added for the
place in this scene that the remark of 1955 describes (Act 3, blocks
71-79: he takes the ring off and holds it up, and they tell him to keep
it), and `stands` links to it.

**The Rhinemaidens / Knowing.** The words of knowing are where the
caption says. Brünnhilde's runes: Prelude, block 51. The warning and his
refusal: Act 3, blocks 82-90. Hagen's question in a form of the same
verb: Act 3, block 213 (German lines 4861-4863). The poem of 1872 has
the same words in the line Armour turns with "cannot" (vol. 6, p. 340,
seen in the scan's text). Changed: the two etymologies and one gloss
(section 4); the `why` ended by naming the lines "Auden's people who
deny their own knowledge" and now sets his sentence beside them.

**The Rhinemaidens / English.** The staves kept, dropped and added are
as the proof shows. The caption named one stave let go; there are two,
the outer one and the vowels of rows 3.0-4.0. **Added.** "The same old
words" in the `why` became "the same words" (only one of the pairs is
an old word).

**Brünnhilde / Now.** The phrase for the gods' end stands in two sung
lines of the German file (229 and 5395), the verb with its second half
in three (65, 231, 5397). The Norn's second prophecy names the god as
the thrower and has the word for the brand (lines 299-303; Prelude,
block 28). The caption said "in Act 1 the whisper was Wotan's wish".
The verb, or a noun made from it, stands in ten lines of the libretto,
three of them in Act 1, and one of those is Brünnhilde's own: she tells
Waltraute to take her refusal back to the gods in this verb (line 1995;
Act 1, block 308). **Changed**: the caption now says whose verb it was
(Waltraute's, for the wish Wotan whispered: line 1849, Act 1, block
290), and the note and the ground give both uses. Auden's sentence on
the pair who burn with the old world is on p. 81 and is said of this
ending.

**Brünnhilde / English.** Each tie was read against the first passage
and against Prelude, block 28 and Act 1, block 290. All stand. No
change.

**Brünnhilde / Told.** The lines of verse were counted again with a
script of my own over the hosted text: 256, 577, 635 and 558, 2,026 in
all. Every line number in the facts was recomputed and agrees (79, 111,
644, 754, 866, 2002; 896, 1251, 1263, 1358 and 1363, 1436, 1564, 1656;
1,791 lines before the spear; the three passages at 74-80, 1605-1615 and
1993-2003). Every telling was read in its place, and each is said before
the event. The third Norn's is the earliest: nothing before Prelude,
block 19 speaks of the end. Two marks are reports or defiance rather
than prophecy (Waltraute at 644, Brünnhilde at 754); both speak of the
end before it comes, and the caveat says the choice is a judgment. The
lines the facts list as left out (Act 2, blocks 309, 336, 354, 357, 365,
367, 379, 381) were read and are fairly described. The `why` said "that
is Auden's complaint" and added "and then deny what they know", which
the drawing does not show. **Changed** to set his complaint beside the
count.

## 7. The prose

Read for house style: American spelling, no dashes inside sentences, no
rhetorical questions, no "we", none of the stock words. Nothing found
beyond what was reworded above. All captions are 91 to 110 words, every
`why` one sentence of 40 words or fewer, the view 65 words.

## 8. The rules

- No line of the libretto is typed into the reading. The longest German
  phrase named is four words (in a note); the others are one or two.
- Auden is quoted twice (24 and 17 words), both exact. The third, a
  single word, was cut (section 5).
- The passages are 7, 11 and 11 lines.
- The German source is listed as out of copyright in
  `remake/research/D_texts.md`; the edition zeno.org names (*Die
  Musikdramen*, Hamburg 1971) was seen on the saved page.

## 9. The printed notes

- `view.source` and each `auden[].source`: book, year, page. In order.
- `sources`: fifteen entries, the text first. The first now names the
  book Armour's translation was printed in. The volume, place and year
  of the 1872 poem were seen on its title page, and its pages 254-55,
  340 and 360-61 from the running heads.
- `stands`: one on every tab, none over 70 words, none with "plate" or
  "lens". Two were added to (Against: the link to the offer of the
  ring; Knowing: the second Grimm entry).
- `caveats`: five, in a reader's words. The first was tested against the
  1872 poem and is right (the poem has the two adjectives of row 0.0 of
  the second passage in the other order, the plain verb, and another
  word for "once" in the first passage). Left as they are.

## 10. What was changed

1. Dawn: caption, `why`, one note and one ground ("means to dawn"; "the
   two halves of the title"). The same wording in a note of the Now tab.
2. Against: last sentences of the caption, the `why`, the ground for
   Auden's remark of 1955, a new ground for the scene, `stands`.
3. Knowing: two sentences of the caption, the `why`, one gloss, two
   notes, two grounds, `stands`.
4. English (second passage): the caption's first and last sentences and
   one phrase, the `why`, one ground.
5. Now: one sentence of the caption, one note, one ground.
6. Told: the `why`.
7. The list under the passages: the entry for 1944 (one clause cut), the
   entry for 1955 (order and one phrase), `checked` for *New Year Letter*.
8. `sources`: the first entry. `open`: one item added, from the examiner.

No mark, row, line number or fact of the shape was changed. At the end
the reading was compared key by key with the poet's last saved copy: only
the fields named above differ. The piece was built again after the last
change.

## 11. Still doubtful

- Auden's lecture of 1940, notes of 1944, talk of 1955, *New Year Letter*,
  Ansen's *Table Talk* and Miller's memoir were seen only in search
  snippets of scanned copies. The pages rest on running heads and foot
  numbers seen there. The second caveat says so to the reader.
- The German as sung was not checked against a score. It differs from
  the poem of 1872 in the first three lines of the second passage and in
  one word of the first; the first caveat says so.
- In the talk of 1955 the words that lead up to Auden's sentence on the
  allegory were not seen, so "he says first" is all the entry claims.
- Which lines count as tellings is a judgment (the fourth caveat).
- The Told tab has no drawing yet. Its caption speaks of a line and of
  marks, which the drawing must supply.
- The zigzag strokes on the English tab of the second passage
  (section 3).

## 12. The checker, at the end

`node build/tools/check-reading.mjs gotterdammerung --print`, last three
lines:

    no problems
    no warnings
    the printed notes are fit to print
