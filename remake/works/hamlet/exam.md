# Hamlet: the examiner's record

Piece `hamlet`. Examiner started by the lead (see `examiner.txt`), 2026-10-03.

This file is added to as the work goes. Words of the play are pointed at by
part, `block.row` and word number, never typed out. Nothing of Auden's is
quoted here.

## State when I began

- `reading.json` as the poet left it at 04:02 UTC: three passages (a1s2 block
  32, rows 0 to 10; a3s1 block 46, rows 0 to 9; a5s2 block 161, prose), eleven
  tabs. The checker printed no problems, no warnings, and 25 printed-notes
  items (no `stands` on any tab, no `caveats`, working words in `sources` and
  in the facts of the Shape tab, the word for a part of the page in one
  caption).
- An artist is at work on the piece at the same time. Every change below was
  made as a small exact edit to the file as it stood at that moment.

## Order of work

1. The proof (every mark on its word).
2. The ear (the ten scanned lines, marked by me before I looked at the marks).
3. The terms (periphrasis, anadiplosis, antimetabole).
4. The words (each dictionary entry opened again).
5. Auden (each thing he is said to say, at its page).
6. The reason and its ground, sentence by sentence.
7. The prose.
8. The rules.
9. The printed notes.

Findings follow under these heads as each is done.

## 1. The proof

Read line by line. Every mark sits on its word. Changed:

- Words joined by a dash (lead's note, 05:40): the Verbs span that ended on
  row 46.9 word 4 now ends on 4.1; the span on row 46.4 words 5 to 7 held two
  infinitives and is now two spans (5 to 6.1, 6.2 to 7), so twelve spans are
  drawn for the caption's twelve. The Chain part C ends on 4.1.
- The Chain tab had six kinds of mark (a new warning). The mark on row 46.5
  words 0 to 1 is removed: its label was a gloss with no ground, and joined
  to the tag "first" the drawing would have linked it like the true chain.

## 2. The ear

Rows 46.0 to 46.9 scanned by me before I looked. My marks agree with the
poet's on all ten rows. Doubtful syllables, none of which a caption may lean
on: 46.0 (stress on word 6 or word 7), 46.3 (first stress on word 0 or word
2), 46.5 (word 0 light or stressed), 46.6 (word 5 as two syllables), 46.9
(word 5 with or without stress). Meter as stated: five beats, rising,
unrhymed. Fault found: row 46.7 also runs one unstressed syllable past the
last beat. It is the fifth such line of the ten, and the Beat caption spoke
only of the first four and drew a pattern from that (see 6).

## 3. The terms

- Periphrasis (rows 32.3 to 32.5): three signs of grief named by a phrase.
  True to the name (Online Etymology Dictionary, periphrasis).
- Anadiplosis (end of row 46.8, head of row 46.9): the same two words end one
  line and begin the next. True (Online Etymology Dictionary; Wikipedia).
- Antimetabole (row 161.0, words 19 to 33): two terms said again in the
  opposite order. True (Online Etymology Dictionary; Wikipedia).
- Infinitive: twelve with their particle in rows 46.0 to 46.9, counted by me.

## 4. The words

Every entry behind a gloss was opened again by me at the Perseus Digital
Library (Schmidt; Lewis and Short), etymonline.com and the public pages of
oed.com. All say what the reading says. Found:

- Schmidt's Play (verb), sense 7, does not list row 32.8 among its lines. The
  gloss is a fair use of the sense; the working source now says so.
- The note on row 32.9 word 7 said the players come in Act 3. They come in
  Act 2 and play in Act 3. Mended.
- Added the Online Etymology Dictionary under suspiration (sighing) as the
  ground for the plain word the caption sets beside row 32.3.

## The first passage (a1s2, block 32): what was changed

- Sentence: the caption said all the signs "are put aside together". The
  clause says only that they cannot mark him truly. Reworded to what the
  clause says; `why` likewise.
- Words: the first sentence now keeps to the Queen's words in block 30.
- Rhyme: the reason leaned on a count alone. Two grounds added, both read
  by me: E. A. Abbott, A Shakespearian Grammar (1870), paragraph 515 (rhyme
  as the stage's way to end a scene), and a3s2 blocks 126 to 149 (the
  players' own play rhymes in pairs). The ten scene-endings recounted: the
  same ten. Auden's sentence now carries its year and, in the grounds, its
  page (164) and how it was seen.

## The second passage (a3s1, block 46): what was changed

- Beat: the caption said the first four lines end weak and that the first
  lines to end on a beat end on the words for what is wished. Row 46.7, the
  line that holds the very word for what is wished, ends weak too, and rows
  46.6 and 46.9 end on a beat. The pattern was the poet's own and is cut. The
  caption now states all five weak endings, Baum's fact that a weak extra
  syllable tends to give a falling rhythm (chapter 5, read again), the plate
  fact that no line of the question and not the question itself ends on a
  beat, and the stress at row 46.9 word 4.2 with Baum on overweighted lines.
  A remark is pinned to row 46.7 word 7. (Changed once more: see "Late
  changes".)
- Verbs: twelve infinitives and six verbs with a subject recounted. No I, me,
  my, mine or myself in the 33 lines (rows 0 to 32, to word 5 of row 32);
  7, 8, 11, 12, 12 and 35 in the other six. Added Auden on this very speech
  (see 5). The sentence "Here acts are named with no doer" restated the
  marks and made room for it.
- Chain and Words: every sentence stands. No change but the marks (see 1).

## The third passage (a5s2, block 161): what was changed

- Crossing: said "The second plate's verb". Now "The verb of the second
  passage". The three conditions were worked through: in each case it comes.
- Words: `why` ended "so providence takes the place of omens". The lines say
  one thing and then the other; the `why` now says only that.
- Shape: every figure recounted with my own scripts (not the poet's, not the
  artist's): seven speeches to himself, lines, words, I/me/my; verse and
  prose by scene; totals 896, 6642, 4904; first prose a2s2:104; last prose
  a5s2:161 with 23 verse blocks of his after it; 61 words, 5 sentences. All
  agree. `node remake/works/hamlet/count-order.mjs` still prints "all as
  counted". Keys the drawing reads were not touched. The strings `shorter`,
  `act5`, `firstProse`, `lastProse` and `thisSpeech.then` were reworded for a
  reader; their block numbers moved to the working key `placesNote`.
  `shorter` now also names Hamlet's three short asides (a1s2:19, a2s2:231,
  a3s2:134), which I found; Act 5 has none. The caption gained Auden's own
  sentence on Hamlet's verse and prose (see 5).

## 5. Auden

Each thing he is said to say was looked up again by me.

- The view, and the grounds on pp. 451–52 and 452 of The Dyer's Hand: read
  in the scan (`dh.txt`, lines 21421 to 21436). True to the page. The one
  quotation is his, word for word, and 14 words long.
- The Dyer's Hand, p. 110 (the soliloquy heard as spoken to the audience) and
  p. 408 (a myth for actors): read in the scan. True. The piece's second
  quotation, from p. 110, is word for word and 20 words long (checked by
  script against the scan, as was the first).
- The Enchafèd Flood, p. 110: read in the scan. True as far as the scan
  goes; it loses the end of the sentence (read later elsewhere: see "Later
  still"). The scan is the Vintage edition of 1967, and the source line
  now says so.
- The 1947 lecture (Kirsch's reconstruction): not in the scans. I read it
  sentence by sentence in snippets of two scans of the book: the archive.org
  full-text search, and Google Books' search within the volume, which gives
  the printed page of each snippet. Every sentence paraphrased was found.
  Pages: 159 (Eliot's verdict, the one character who does not act, the part
  no one plays without looking ridiculous, the soliloquies that can be
  detached, the speech of the second passage as the example), 160 (verse
  and prose; the stop inside the line; paired adjectives), 164 (bored, so
  theatrical; an actor cannot act an actor; someone from the street).
  The poet gave no pages. They are now given.
- The 1947 class: Appendix I, pp. 321 to 340, Alan Ansen's notes, which
  Kirsch says he mostly transcribed word for word. The poet had only the
  fact of the class. I read the notes on Hamlet in snippets (pp. 324 to 335).

Not found: any remark of his on the first or the third passage. The class
notes on Act 1, Scene 2 begin at Kittredge's line 164, and those on Act 5,
Scene 2 pass from lines 203–18 to line 270. Phrases of both passages find
nothing in either scan of the book. A caveat says so.

### Found by the examiner and added

- 1941, the year of the Michigan course: a remark on casting Hamlet, made
  at home to Charles Miller. Miller's memoir (1983), p. 61. Seen in
  snippets of the memoir itself (archive.org; Google Books labels the
  snippet p. 61), of Kirsch's note (his p. 381) and of James Fenton's book.
  It is in the list of what Auden said. No tab leans on it.
- Lecture, pp. 159–60: this very speech can be lifted out of the character
  and the play. Now a ground of the Verbs tab.
- Lecture, p. 160: Hamlet speaks verse to himself and in passion, and
  otherwise mostly prose with other people. Now a ground of the Shape tab.
  The count bears out only half of it, and `open` says which half.
- Lecture, p. 160: in this play Shakespeare tries out the stop inside the
  line, to get a voice between passion and prose. Now the reason of the
  Beat tab (see "Late changes").
- Class notes, p. 327, on three lines of the second passage: emendations of
  three words of row 46.3; a fault of grammar at row 46.5, words 6 to 7;
  and the last word of row 46.9 as a term from bowling. The last is now a
  ground of the second passage's Words tab. All three are in the list.
- Class notes, p. 324: a general remark on Hamlet and Horatio. In the list.

## Late changes (06:15 to 06:30 UTC)

Made after Google Books' search within the volume gave me the lecture's
p. 160 and the class notes.

- Beat: pause marks added to the voice of rows 46.4, 46.5, 46.7 and 46.8,
  where this text prints a stop heavier than a comma inside the line. Row
  46.9 stops at a dash inside a joined word, where the beat lens cannot
  draw a pause; its remark now says the line stops there. Caption and `why`
  rewritten once more: five weak endings (Baum), five stops inside the
  line, Auden's sentence on such stops, the stress at row 46.9 word 4.2.
  Two grounds about the wish went out with the words they stood under.
  I photographed the tab at 1280 and 390 from the built site: the four
  double strokes and the key "a pause" are drawn, nothing collides.
- Words (second passage): Auden's class gloss on the last word of row 46.9
  added to the caption, the `why`, the grounds, `stands` and the note's
  source. Three small cuts keep the caption at 108 words.
- Five captions named no one before saying "he" or "him". The name is now
  in each.

## 6. The reason and its ground

Every caption sentence was set against its ground, and the scene around
each passage was read. What failed is listed under the three passages
above. What stood: the Naming, Chain and Crossing tabs whole; the glosses
of all three Words tabs; every number of the Shape tab.

## 7. The prose

All eleven captions are 104 to 110 words, every `why` 35 to 40, every
`stands` 27 to 65, the view 70. A script of mine looked through all 88
printed strings for dashes inside sentences, questions, "not X but Y",
"we", the stock words and the words rule three bars, British spelling, and
the two words for parts of the page. It finds only words of the play that
a caption names. The checker gives no warning.

## 8. The rules

- Two quotations of Auden, 14 and 20 words, both word for word. No third.
  Everything else of his is paraphrase, reworded where a draft of mine ran
  close to his order of words.
- The longest phrase of the play named in a caption is six words.
- Miller, Kirsch's notes, Baum, the dictionaries: paraphrased, none quoted.
- Nothing printed calls a part of the page a plate or a lens.

## 9. The printed notes

Written by me: `stands` on all eleven tabs; `sources` as eighteen entries
a reader can look up; five `caveats`; the reader's strings in the Shape
facts, with their working places moved to `placesNote`. Each `auden`
source now carries edition and page. `node build/tools/check-reading.mjs
hamlet --print` ends: no problems, no warnings, the printed notes are fit
to print.

### Later still (06:35 to 06:50 UTC)

- The Enchafèd Flood, p. 110: the end of the sentence that the scan loses
  was read in a snippet of another scan of the same Vintage edition
  (archive.org). The paraphrase now carries the sentence to its end: why
  Hamlet cannot bear to end the situation.
- The 1947 class entry: Kirsch's sentence on the spring examination was
  read whole in snippets. It names both plays, as the reading says, and
  adds that the class had to punctuate a prose speech of Hamlet's. Added.
  It stands in the head note of Appendix II, so the source now gives p. 341
  as well; that page number rests on the contents page alone.
- Miller, p. 61: confirmed by the page label of a Google Books snippet of
  the memoir itself. The caveat no longer says the page is Kirsch's.
- Found in the scans by searching them for the name Hamlet, and added to
  the list of what Auden said: The Enchafèd Flood, p. 34 (Hamlet ruled by
  reflection) and p. 102 (the one exception among the heroes who are heroes
  by what they do); Forewords and Afterwords, p. 228 (what Hamlet's problem
  is); The Dyer's Hand, p. 241 (a hell of wishing, glimpsed in this play).
  None names a line of the three passages, and no tab leans on them. Pearce
  on the 1941 class does not name Hamlet. The list now has twelve entries,
  each under 110 words.

## Sources read for each fact

- Text of the play: the hosted parts a1s2, a2s2, a3s1, a3s2, a5s1, a5s2
  through the checker and my own scripts; every stage direction "Aside".
- Schmidt and Lewis and Short at the Perseus Digital Library; Abbott,
  paragraphs 515 and 515a, there too.
- Baum, chapters 4 and 5, in the Project Gutenberg text.
- etymonline.com for ten words; the public pages of oed.com for two.
- Matthew 10:29 and 24:44 in the Geneva Bible of 1599 (biblegateway.com).
- Carter (1905), p. 381, in the Internet Archive's text.
- Calvin, Institutes 1.16, in Beveridge's English (ccel.org).
- Wikipedia: five articles, each for a definition only.
- Auden: the scans of The Dyer's Hand and The Enchafèd Flood; Kirsch's
  volume and Miller's memoir in snippets of two scans each.

## What is still doubtful

All of it is in `open` (seventeen items) and, where a reader needs it, in the
five caveats. In short:

- Kirsch's volume and Miller's memoir were read only in snippets. The
  pages are page labels of the snippets; 341 rests on the contents page.
  The class notes on Hamlet (pp. 324 to 335) should be read whole by
  someone with the book, and so should the list of lines Auden marked in
  his copy (Appendix III).
- Auden left nothing that was found on the first or the third passage. The
  view says Hamlet lacks faith in God, and the third passage speaks of
  providence. The piece reports both and joins them nowhere.
- Auden's "mostly prose with other people" is half borne out by the count.
- The stresses are one hearing. The pauses follow this text's punctuation.
  The stop of row 46.9 cannot be drawn, because the dash joins two words.
- Calvin's term was read in the English of 1845.
- This text prints one word of row 32.6 where the quartos print another,
  and sets a few short prose lines as verse.
- One rhyme of the ten scene-endings is a rhyme to the eye today.
- The artist should look again at the Beat tab (new pause marks, a sixth
  remark) and at the second passage's Words tab (caption changed).

## Last check

`node build/tools/check-reading.mjs hamlet --print` ends:

    no problems
    no warnings
    the printed notes are fit to print

`node remake/works/hamlet/count-order.mjs` ends "all as counted".

Verdict: mended.
