# karamazov: the examiner's record

Begun 2026-10-03, 07:13 UTC (`examiner.txt`). The reading examined is
`reading.json` as the poet left it at 07:07 UTC. An artist began on the
piece at 08:34 UTC (`art.md`); I changed the reading only by small
exact edits.

Places in the hosted text are block and word numbers of
`karamazov/b05c05` unless another part is named. No text of the novel,
of the Russian, or of Auden is written out here beyond a few words.

## Verdict

Mended. The marks, the counts, the Russian and the dictionary facts all
held when I went to the sources myself. What was wrong lay in how
exactly Auden and two other sources were reported: one adverb pair, one
page number, one hedge that the source does not need, two paraphrases
that went a little beyond his words, one gospel named for words that
only the Russian takes from it, and a few loose words ("comes back"
five times, "the kingdoms that Christ refused", "Ivan's reply"). The
third passage cited Auden nowhere; it now cites him once, for the
silence. Every `checked` and every Auden ground now says what I read
with my own eyes.

The checker after the last change: no problems, no warnings, the
printed notes are fit to print.

## 1. The proof

`node build/tools/check-reading.mjs karamazov` on the poet's file: no
problems, no warnings, printed notes fit to print. Every mark was read
against the words it lands on, before and after the mends. The two
words joined by a dash that carry a mark (the second passage, word
1143; the later talk beside the third passage, block 49, word 43) are
both pointed at by their part (1143.1, 43.2), as they should be.

Every block and word number given in a ground's `source` was printed
and read (blocks 0, 6, 7, 8, 10, 12, 14, 17, 18, 19, 20, 21, 28, 29 and
31 of this chapter and block 30 of the chapter before). All land on the
words claimed. One was a word short: the sentence about love at the
Prisoner's coming is block 6, words 59 to 66, not 59 to 65 (mended in
the working record, two places).

No mark was changed.

## 2. The ear

The piece is prose in translation and has no beat lens. Nothing to scan.

## 3. The terms, and what the page joins

**Hypophora.** *Silva Rhetoricae* has the figure under anthypophora: a
figure of reasoning in which one asks and then at once answers one's
own questions; it sometimes takes the form of asking the audience or an
adversary what can be said. It gives hypophora among the other names
(with Peacham 1577), and its entry hypophora only points to
anthypophora. Tested against the first passage, question by question:
the first (asked twice) gets no reply and an answer is forbidden; the
second is the form that asks an adversary what he can say, and the old
man goes on to say that he knows; after the third he repeats his charge
and does not say why; the fourth (what will be tomorrow) he answers in
its own terms. So the name fits the whole passage only loosely and one
question fully. The reading already allows for this: the parts are
labeled "he asks" and "his own statement", not "he answers"; the
caption says he "goes straight on with a statement of his own"; and it
rests the name on the handbook and on Ivan's own description of a later
question (block 12, words 108 to 138), where the text itself says the
old man asks and answers. The fifth caveat tells a reader about the two
names. Kept, with a note in `open`.

The plain-words gloss ("asks a question and at once answers it
himself") is the handbook's.

**What the page joins.** I did not run `node build/pieces.mjs
karamazov`, because it writes to `site/data/pieces/`, outside this
piece's folder. Instead:

- The build that stood in `site/data/pieces/karamazov.json` at 07:13
  UTC (made from the poet's reading, not by me) was photographed with
  `shoot.mjs --out` into a folder of mine, all ten tabs at 1280 and 390
  px, and every picture at 1280 px and the two pair tabs at 390 px were
  looked at.
- After the mends, a private copy of the build script, changed only so
  that it writes into my working folder, built the piece from the
  mended reading without a problem, and a private copy of `shoot.mjs`
  that serves that one file photographed it again, with the whole page.
  Nothing was reported; the changed captions, the entries under More
  from Auden and the sources were read in the pictures.

What the pictures show. On the figure tab (Questions) no stroke joins
anything: the four kinds of part are told apart by color, with a key,
and each question stands next to the statement that follows it, which
is all the caption joins. No `join` was needed. On the two compare tabs
(Earlier, Again) the second set of lines shows only on its own tab,
beside the passage at 1280 px and under it at 390 px, with numbered
underlines and no strokes across. The two shape tabs (Voices, Plan)
showed the plain table of facts, because the artist's drawing did not
exist yet. The working folder and its pictures are removed; the page
must be built again by whoever may write to `site/`.

## 4. The words

Each entry was fetched and read in this session.

- Thou. Merriam-Webster: archaic, used especially in ecclesiastical or
  literary language. Online Etymology Dictionary: the second person
  singular pronoun, superseded by you. Current in that state in 1912.
  Russian: Wiktionary's entry for the familiar pronoun (familiar second
  person singular).
- hinder. Online Etymology Dictionary: Old English, to harm, injure,
  check, repress, from a root meaning behind; the ground sense is to
  put or keep back. The Russian verb (Wiktionary: to hinder, impede,
  interfere with) stands at all five places in the old man's speech and
  once more in the Jesuits' words, where Garnett writes "meddle".
- semblance. Online Etymology Dictionary: likeness, appearance; a
  person or thing that resembles another, from the 1510s. Wiktionary's
  entry for the Russian noun: similarity; semblance, likeness.
- heretic, heresy. Online Etymology Dictionary: from the Greek for able
  to choose; a taking or choosing for oneself. Wiktionary: the Russian
  word is the same Greek one, through Old Church Slavonic.
- The word behind meekly and mild: one Russian word in two forms
  (Wiktionary: gentle, meek, mild), seen at both places in the Russian.
- mystery. Wiktionary's entry for the Russian noun: mystery; secret;
  secrecy. The Russian of the long argument has it eighteen times and
  the plainer borrowed word (Wiktionary: secret) once; set beside the
  English, all eleven uses of mystery in block 20 answer to it, and
  Garnett has "secret" for the same word in blocks 19 and 21. Alyosha's
  and Ivan's lines after the poem have the plainer word.
- softly. Wiktionary's entry for the adverb: quietly, softly, gently;
  calmly; slowly. Eight times in the Russian chapter (counted again
  today), four of them where Garnett has softly.
- aged lips. The Russian has ninety-year-old (Wiktionary) and the old
  poetic word for the mouth (Wiktionary: archaic or poetic), which also
  stands at the Prisoner's words to the dead child and at "from my
  lips" in the cry; the everyday word stands at the moving lips after
  the kiss and at Alyosha's kiss.
- answer. Wiktionary's entry for the Russian noun: answer, reply; the
  same noun at the first words and at the kiss.
- glows. The Russian verb is to burn (Wiktionary: to burn; to be lit;
  to gleam, to shine), with the noun for heart, twice in the chapter:
  "in" his heart at the coming, "on" his heart at the kiss.
- Dixi. Lewis and Short under dico: the technical term at the end of a
  speech. The Russian edition's footnote translates it.

No gloss was changed.

## 5. Auden

Everything given as Auden's was looked for at its page, by me.

- **The view** (*The Prolific and the Devourer*, p. 51). Read twice in
  search snippets of the scan, chained one to the next. Page numbers in
  this book stand at the foot (the foot line of p. 26 comes just before
  the heading of Part II, which the contents put at p. 27). The foot
  line of p. 50 falls in the middle of the sentence before, about
  loving no one; then come the end of Satan's speech, Auden's comment
  that Satan is claiming to be God, the two sentences on the Grand
  Inquisitor, the cry, and the sentence on the attendant, after which
  the foot line of p. 51 follows. The quotation in `view.quote` is
  exact, word for word, nineteen words. Found wrong: the paraphrase had
  "more fully or forcefully" where Auden joins his two adverbs with
  "and". Mended in `view.says`, in the Voices caption and in its ground.
  That Jesus "does not need to" answer is Auden's own phrase. The cry
  as he prints it is a loose quotation (his wording differs from
  Garnett's in the first question and in the refusal) and ends with the
  refusal of love: block 20, words 1047 to 1075. Mendelson (p. 395)
  quotes the same passage through the first question.
- **More from Auden, first entry** (pp. 48 to 51). The epigraph signed
  Dostoyevsky is the sentence at block 17, word 267, quoted loosely,
  with a parenthesis of Auden's. Childhood, adolescence, maturity: as
  the entry says. The third temptation begins with the last words of p.
  49. Found loose: the entry said Satan "argues from experience that
  every man loves only himself". Auden's frame is that Satan appeals to
  reason; in the speech the test of truth is the experience of success
  or failure, and the true way is to be the stronger, since people love
  only themselves. The sentence was rewritten to say that.
- **Second entry** (pp. 51 to 58). The attendant; the three sentences
  of the old man that head the parts of the reply (they answer to block
  18 from word 56, block 19 from word 142, block 20 from word 974, each
  quoted loosely); the freedom to know the truth; individual faith and
  effort; the last words of the reply with the foot line of p. 58 after
  them. All found. No change to the entry.
- **Third entry** (pp. 54 and 62). The remark on the Last Supper stands
  between the foot lines of pp. 53 and 54. On p. 62 the sentence about
  Satan and the Inquisitor follows two conditions: a general direction
  of history toward the unity and the equality of men (foot of p. 61),
  which the way of love must always have assisted and the way of hate
  and coercion must always have hindered and always failed in the end
  to prevent. The entry had "if his account of the two Ways is not
  borne out by history", which is not what his words cover. Rewritten
  to give the conditions.
- **Miller**, pp. 26 to 27. The speech was read in snippets of the
  scan: the date, the room, and the four titles in the order the entry
  gives (the scan garbles the novel's name). The page was not seen as
  an image; the book's index gives Dostoyevsky at pp. 19, 26 and 89,
  Augustine at p. 26, Dante at pp. 26 to 27. Kept as it was.
- **New Year Letter**, note to line 1566. Read in snippets of the scan
  of the Faber edition. The page was given as pp. 152 to 153. In this
  book the number stands at the foot (75 follows the last line of the
  Letter and the Notes begin at p. 77 by the contents; 160 stands just
  before the heading of The Quest, p. 161). The number 152 stands just
  before the heading of this note and 153 just before the next, so the
  note is on p. 153. Mended in the entry and in `sources`. The
  paraphrase "written about lonely people" decided a preposition that
  Auden leaves open; it now reads "a literature of the lonely".
- **The chart of 1943.** Mendelson's full text read at p. 554 and its
  note; the image of p. 555 fetched and looked at. In the row Hero, in
  the last column (Hell of the Pure Word, Knowledge without Power), the
  chart reads The Demonic Villain and under it Iago, Stavrogin, The
  Grand Inquisitor. The entry hedged ("as the chart is read here") on
  the strength of the research notes; the placing is plain on the page.
  Rewritten to give the row and the column, and the season (spring
  1943, on the seminar table) as Mendelson gives it.
- **What stays in the list.** Every entry bears on the chapter shown or
  was said in 1941. The one passing mention (Dyer's Hand, p. 387) had
  already been moved to `notes.md` by the poet. The scans on this
  machine (*The Dyer's Hand*, *Forewords and Afterwords*, *The
  Enchafèd Flood*, Pearce) were searched for the novel, the Inquisitor
  and the brothers: Dostoevsky is named a few times in passing, the
  novel never, and Pearce has nothing.
- **The view and the passages.** The first two passages bear on the
  view directly (the forbidden answer; the cry that Auden quotes). The
  third cited Auden nowhere. A search of the scan of his book finds no
  form of the word kiss and neither brother's name, so he cannot be
  cited for the kiss; but his sentence that Jesus does not answer,
  having no need to, is said of exactly this silence. It was added to
  the Answer caption and its `why`, with its ground, and the first
  caveat now tells a reader that no mention of the kiss was found.

**The year of the book.** The piece prints "Ecco Press, 1994". The
cataloging data printed in the book carries 1993 in its call number and
the book prints no other year for this edition; Mendelson's list of
abbreviations cites the Ecco Press edition as 1993. But the catalog
record of the first trade edition (Open Library OL1395108M, built from
the Library of Congress record, LCCN 93002409: "1st trade ed.", x and
101 pages) and the Internet Archive's record of the scanned copy both
give 1994. I first took 1994 for an error and then found the catalog
records. Not changed; told to the lead in `open`. The contents page
says "Preface by Edward Mendelson" and the book nowhere says "edited
by", so `sources` now says "with a preface by".

## 6. The reason and its ground, lens by lens

Each caption and each `why` was taken a sentence at a time.

**First passage, Questions.** Plate: four questions, the first twice;
a statement after each of the other three; the ban. Text: Ivan's aside;
Ivan's two remarks in block 12. Source: the handbook; the Russian (same
questions, ban and statements in the same order; the last statement
runs on with a comma). Auden: p. 51. The reason is double and both
halves stand: the old man's own (no right to add anything) and Auden's
(no need to answer). No change but the ground's record.

**First passage, Voices.** Counts: run again from `counts.mjs` and by a
script of my own; every number agrees, and 4,988 is more than half of
9,244. Text: Ivan's two remarks on his plan (block 0, words 467 to 483;
block 10, words 117 to 140). Found: "taken from Mark's gospel" was said
of the two English words. In the Russian the Prisoner says the two
Aramaic words that only Mark gives (Mark 5:41; Matthew 9 has no words
and Luke 8:54 has two English ones nearer Garnett's). The caption now
rests the link on the Russian, and the ground says why. The caption was
trimmed elsewhere to stay within 110 words ("more than half"; "at the
first, Ivan tells him what alone matters"). In `facts` one value was
made exact to match (the Prisoner, "first said": Mark 5:41, "whose
Aramaic the Russian keeps"); its key and its shape are as they were,
and the artist's drawing (`site/js/pieces/karamazov.js`, written at
08:53 UTC) prints it as a phrase after the key. No other fact was
touched.

**First passage, Words.** Plate: Thou twelve times and Thee twice
(counted again). Count: 220 thou-forms in the chapter, each read in its
place, all said to Christ or to God; the four outside the old man's
speech are a hymn, a prayer and two pleas. The sentence about "the
pronoun of the chapter's prayers" joins two counted facts and claims no
more. The heretic sentence sets an etymology beside the old man's
complaint (block 19, words 456 to 490 and 641 to 669) and says nothing
of what the author meant; kept, and named in `open`. One note mended:
the speech does not "come back" five times to the Prisoner's hindering,
since the first time is not a return; it "speaks of" it five times.

**Second passage, Sentences.** Plate: eleven sentences, the kinds and
the lengths as given. Count: 190 sentences of mean 23.2 words in the
rest of blocks 17 to 21, and 11 of mean 9.1 here; by my own count no
other eleven sentences in a row in those blocks have a lower mean. The
Russian, counted again today: eight sentences, 89 words (7, 12, 12, 6,
7, 15, 8, 22), the five questions each a sentence, the two commands
inside longer ones. I doubted "the later questions he answers himself"
(the third question is followed by another question) and then kept it:
the statement that all he can say is known already answers the third
and fourth questions together, and the next statement answers the
fifth. Auden: he quotes words 1047 to 1075 as the cry of those
tormented by the knowledge of failure; the ground now says exactly how
far his quotation runs.

**Second passage, Earlier.** Plate: the four pairs. Count: about three
thousand words between (3,226 and 2,976). Text: the Prisoner does not
speak (block 31, words 28 to 49). Russian: the order to be silent and
the adverb share a root; meekly and mild are one word; the remark about
the meek look is itself a question there. Auden: said of these men and
followed at once by these very lines. No change but the ground's record.

**Second passage, Mystery.** Text: the six earlier uses (block 20,
words 58, 920, 931, 940, 960, 985), the three powers, what the people
must follow; Alyosha and Ivan after the poem (blocks 28 and 29). One
note mended: what the next sentences say the Church took is the last
gift Christ refused, offered with the sight of the kingdoms; the note
had "the kingdoms that Christ refused".

**Second passage, Plan.** Counts: 4,977 and every start, again from
both scripts. Matthew 4 and Luke 4 read for the order. Lewis and Short
for Dixi. Text: block 20, words 1147 to 1216. Auden: the third
temptation, pp. 49 to 51, with only its opening words on p. 49. One
sentence mended as on Words: the words about hindering "come five times
in the speech". The working `key` in `facts` now records what Auden
prints at each of the five places it lists.

**Third passage, Answer.** Plate: eight sentences of 13, 18, 5, 4, 3,
22, 12 and 4 words; the three verbs; the eleven words. Russian, counted
again today: seven sentences, 69 words (13, 16, 4, 2, 25, 7, 2), told
in the present from the kiss on, all but one verb. Added: one sentence
from Auden with its ground (see section 5); the caption was shortened
elsewhere to hold it (110 words).

**Third passage, Again.** Plate: the five pairs. Text: block 30 of the
chapter before, for the listener. Russian: the same adverb and verb for
both kisses, the two words for lips, "silently" at Alyosha's look and
at his kiss, the same word for go. One word mended: "Ivan's reply",
set right after "Alyosha's question", read as the reply to that
question; it is his remark on the kiss.

**Third passage, Russian.** All four words checked in the Russian and
in Wiktionary (section 4). The lips and the ninety years are two facts
side by side; kept, and named in `open`. No change.

No lens was removed. No sentence had to be cut as an invention.

## 7. The prose

American spelling throughout. No dashes inside sentences, no rhetorical
questions, no "we", none of the stock words (the checker's list finds
none). Quoted words from the novel run to six at most.

## 8. The rules

No text of the work is typed into the reading beyond phrases of up to
six words. Auden is quoted once, nineteen words; the chart's column
heading (eight words) is the only other run of his words. The passages
are 109, 100 and 108 words.

## 9. The printed notes

The checker's list was already empty. Read as a reader would read
them, and changed: `sources` (Auden's book "with a preface by", "not
published in his lifetime", and "Not seen in full" without the account
of how it was read; Mendelson with the pages actually used; New Year
Letter p. 153; the Wiktionary entry for the plainer word for a secret,
which a note leans on); the Voices and Answer `stands`; the first
caveat (what was read and how; that no mention of the kiss was found).
`open` keeps the poet's entries and has six from me.

## Sources opened in this session (2026-10-03)

Auden and the books about him:

- *The Prolific and the Devourer*: the scan at the Internet Archive
  (`prolificdevourer00aude`, borrow-only) answers full-text search with
  snippets of about fifteen words, as often as it is asked. Read that
  way: pp. 48 to 51 nearly whole; the heads of the three parts of the
  reply; its passages on freedom; the Last Supper; the end of the reply
  on p. 58; the conditions and the sentence on pp. 61 and 62; the
  imprint and contents pages; the preface, p. vii (written in the
  spring and summer of 1939 and abandoned in the autumn).
- Edward Mendelson, *Early Auden, Later Auden* (2017): the full text at
  the Internet Archive, read at p. 351 (note), p. 395, pp. 554 to 555
  with the note to p. 554, and the list of abbreviations; the image of
  p. 555.
- *New Year Letter* (Faber, 1941), scan `newyearletter0000aude`,
  snippets.
- Charles H. Miller, *Auden: An American Friendship* (1983), scan
  `audenamericanfri00mill`, snippets, and its index.
- The scans named in EXAMINER.md, searched for the novel and its people.
- Open Library and the Internet Archive, for the catalog record of the
  Ecco Press book.

The text and the counts:

- The whole chapter, read in the output of `show.mjs` and of a small
  script that prints a range of words.
- `node remake/works/karamazov/counts.mjs`, and a recount by a script
  of my own (kept only while I worked).

The Russian:

- ilibrary.ru, text 1199, page 37, parsed into its 45 paragraphs and
  six footnotes, and Russian Wikisource (Book V, chapter V, raw
  wikitext). Compared word by word: the two differ only in one mistyped
  letter and in how the verse quotations are set.

Dictionaries and reference pages:

- Silva Rhetoricae: anthypophora; hypophora.
- Online Etymology Dictionary: thou, hinder, semblance, heretic, heresy.
- Merriam-Webster: thou.
- Wiktionary, the Russian entries named in `sources`.
- King James Bible (bible-api.com): Matthew 4:1-11, Luke 4:1-13,
  Matthew 9:23-26, Mark 5:41-42, Luke 8:54-55.
- Lewis and Short under dico (Perseus, dico2).

## Still doubtful

- Auden's book was read in snippets, not in a full copy. What lies
  between the snippets on pp. 52 to 58 was not read.
- The year of the Ecco Press book: 1994 by the catalogs, 1993 by the
  book's own cataloging line and by Mendelson.
- Miller's page for the first meeting rests on his index and on the
  research notes; no page image was seen.
- That Auden nowhere mentions the kiss rests on a search of one scan,
  whose reading of the print is not perfect.
- The first edition of the Russian (1880) was not seen; the Russian is
  the 1991 Nauka text in two online copies.
- The page was not built into `site/` by me. It must be built again and
  looked at once the artist's drawings for Voices and Plan exist.
