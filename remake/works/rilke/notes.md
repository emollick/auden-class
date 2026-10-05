# Rilke, The Journal of My Other Self: the poet's notes

Written on 3 October 2026. Words of the works are pointed at by row and
word number, as the proof prints them (`node build/tools/check-reading.mjs
rilke`). No line of the novel, of the poem or of either English version
is written out here. Auden is paraphrased. The piece quotes him once, 17
words at the head of the page (`view.quote`), and names one more word of
his, *enumerates*, in a caption. Nothing else in copyright is quoted.

## What is handed in

- `remake/works/rilke/reading.json`: three passages, ten tabs. The
  checker ends "no problems", "no warnings", "the printed notes are fit to
  print".
- This file.
- One thing outside my folder, which the task allows: `node
  build/tools/original.mjs cut` wrote `site/data/texts/o-rilke/`
  (`index.json`, `verse.json`). It holds lines 428 to 462 of
  `.cache/originals/rilke_malte_german.txt` (Project Gutenberg no. 2188)
  as one prose block of 382 words: the paragraph on verses in German.

I did not run `build/pieces.mjs`, `build/tools/shoot.mjs`,
`build/tools/prose.mjs` or `original.mjs fetch` in the project, since
they write outside my folder. To see the page I copied `build/`, `site/`,
`content/` and `remake/pieces.json` into my scratch folder and ran the
builder and the picture tool there. All ten tabs were looked at at 1280
px, several at 390 px, and the whole page was read from the top.

The reading is assembled by a script from five parts in my scratch
folder (`rilke_poet/build/`: `head.mjs`, `p1.mjs`, `p2.mjs`, `p3.mjs`,
`tail.mjs`). Before each rebuild a second script compared the parts with
the file on disk, so I know that no one else has changed the file.

## The three passages, and why

The entry for this piece in `remake/pieces.json` gives three leads: the
sentence about learning to see; the passage on what a single line of
verse costs, "one long sentence built on the same opening words, then
the turn"; and one of the two poems in German with the English beside
it, "if it serves the book". The three passages follow them.

### First passage: `rilke/p1-02`, block 0, words 170 to 294

One sentence. This is the part of the book Auden praised in 1936, as
Herbert Read had quoted it, and his verb for it is *enumerates*. So the
sentence that does the counting is the thing to show, and something can
be seen in it: a main clause of eight words (170 to 177), then eleven
phrases that each begin with the same small word (178 to 281), then a
dash and the turn (282 to 294).

It is 126 words long (125 word numbers, because the dash joins two words
into one at the end of the list). POET.md gives 30 to 110 words for
prose and the checker warns above 130. I kept the whole sentence: cut at
the front it loses its subject and verb, cut in the middle it loses the
count of eleven, and cut at the end it loses the turn. This is in `open`.

### Second passage: the same paragraph, words 354 to 442

The end of the paragraph: three short sentences and the long last one.
It answers the first passage. That one is a loose sentence which could
stop in eleven places; this one is periodic and cannot stop before its
point. It also holds the one place where the English of 1930 says the
reverse of the German, and the place where Rilke turns memories into
blood, glance and gesture, which is the habit Auden described in 1939.

### Third passage: `rilke-de/panther`, rows 1.0 to 3.3, with `poems/panther-en`

The whole poem, twelve lines, with Jessie Lemont's English of 1918 line
under line. Why a poem in a piece on the novel: the paragraph the first
two passages come from says what a line of verse requires, namely
things seen, and Malte writes just before it that he is learning to see
(`rilke/p1-01`, blocks 8 and 11; `rilke/p1-02`, block 0, words 10 to
16). The poem is from the Paris stay the novel draws on, and Rilke said
it was the first result of being made to work before nature as a
painter does. It lets a reader see beat and rhyme at work, which the
prose passages cannot show. The two are tied in three places on the
page: the noun *Blick* stands in the second passage's German and is the
first noun of the poem (a word note in the second passage, and a remark
in the tab "English" of the third); and the caption of "Subjects" ends
on Malte learning to see.

I chose Der Panther over Herbsttag because it is the poem Rilke himself
tied to working before nature in Paris, and because its grammar, its
one short line and its repeated rhyme word can each be marked.

## How the English and the German are set

The site holds the novel in the English of 1930, so the English is the
marked text and the German is the `pair`. The German of the paragraph
was not on the site, so I cut it from the cached original (see above).

Both prose passages carry `"beside": true`. Without it the kit sets a
pair that has as many rows as the first text "line under line", which
for one block of prose means the whole German paragraph in small italic
type under the English. Three tabs mark or gloss German words (the tab
"German" of the first passage, "Word" of the second, and the remarks of
both), so I wanted the German in the same size of type under its own
label. With `beside` the two stand in two columns from 940 px, and in
the tab "German" each pair of phrases carries the same number in both
columns. POET.md describes `beside` for a second passage that is not a
translation of the first; here the second is the original of the first.
The cost is on a phone, where the two blocks stand one under the other:
the first passage is then about 2,600 px tall, against about 1,900
without `beside`, so the marks and the caption are never on one screen.
This is in `open` for the artist or the lead to judge.

The German pair of the second passage shows only the last sentence
(`o-rilke/verse`, words 339 to 381). The sentence before it is the one
the English reverses, and the cached German has lost a word there: at
line 458 of `.cache/originals/rilke_malte_german.txt` three words have
run into one damaged word (words 333 to 338 of the stored block). I may
not fetch a sound text into the cache, so the sentence is not shown.
The caption and a word note give its words from the collected works as
zeno.org prints them, and a caveat tells the reader. With a sound text
the sentence could be set beside its English, which would be better.

The poem is set line under line with Lemont's English, in the usual
way: twelve rows each.

## Tab by tab: what each says, what it stands on, where I read it

Everything below was read on 3 October 2026. Web pages were fetched
with curl; the copies are in my scratch folder (`rilke_poet/`).

### First passage, "Sentence"

Claim: one short assertion carries eleven phrases, each headed by the
same word, so the sentence can keep adding to its count before it calls
the whole not enough.

- Counted on the plate: 126 words; subject and verb in words 170 to
  177; eleven phrases at 178-182, 183-185, 187-193, 194-201, 203-231,
  232-247, 248-255, 257-261, 262-265, 266-267, 268-281 (104 words);
  the turn at 282-294. Words 186, 202 and 256 are the joining *and*
  between phrases and are left unmarked.
- That the sentence could end after any of the eleven: each comma or
  semicolon of the list closes a phrase that completes the grammar.
- "Loose" sentence: T. Clifford Allbutt, *Notes on the Composition of
  Scientific Papers* (1904), p. 64, in the Internet Archive full text
  (cu31924031387719; my copy `allbutt.txt`, lines 5402 to 5432): a loose
  sentence might have ended at an earlier pause, a periodic one only
  when its period is complete. Also William Strunk, *The Elements of
  Style* (1918), rule 14 (Project Gutenberg no. 37134).
- "Makes its assertion at once" follows Charles Sears Baldwin,
  *Composition, Oral and Written* (1909), p. 122, who says the periodic
  sentence makes no assertion until its conditions are stated.
- Auden's verb: see "Auden" below.

The eleven spans share one label. With eleven labels the key printed
eleven rows.

### First passage, "Figure" (climax)

Claim: the list ends on a rising series, and the dash stops it at its
widest, so the words that call it not enough cover the largest things
named.

- The five steps: words 249-255, 258-261, 263-265, 267, 269-281, of 7,
  4, 3, 1 and 13 words (the small word that heads each phrase is not
  counted).
- Climax: Gideon O. Burton, *Silva Rhetoricae* (rhetoric.byu.edu), under
  climax: Greek for ladder; words, phrases or clauses in an order of
  increasing importance, often in parallel structure.
- "Each with more space in it than the one before" is what the five
  phrases name (rooms, the seaside, the sea, oceans, the stars), read
  off the plate.

Drawn as `"draw": "list"` with one tag: the kit numbers the steps 1 to 5
and prints each number with its label in the key. I first drew it as a
chain; the arcs crossed whole lines of prose and tangled.

### First passage, "German" (compare)

Claim: the build of the sentence is Rilke's; three steps of the climb
are taken on one noun, so the word stays while what it covers grows.

- Seen in the pair: one verb (word 151 of the German) for words 175-177
  of the English; the small word *an* at the head of each of the eleven
  things, as *to* in the English (counted in both); the noun *Meer*
  three times (German words 219-222, 223-226, 227-228) against two
  different English nouns (257-261, 262-265, 266-267).
- *Digitales Wörterbuch der deutschen Sprache* (dwds.de): zurückdenken
  (to think back to something past; takes *an*), überhaupt, sense 1
  (taken as a whole), noch, sense I.1 with its examples of *noch nicht*.
  My copies: `dwds_zurueckdenken.txt`, `dwds_ueberhaupt.txt`,
  `dwds_noch.txt`.
- The second and third *noch nicht* stand outside the pair: Rilke,
  *Sämtliche Werke*, vol. 6, p. 724, as zeno.org gives it (my copy
  `zeno_malte.txt`). The page numbers 724 and 725 are zeno's page marks.

### Second passage, "Sentence"

Claim: periodic order keeps the point for the end of a sentence that
cannot stop sooner; after eight uses of *must* the last sentence has
none, so the word of the poem is said to happen and is not something
one does.

- Counted on the plate: sentences of 10, 24 and 8 words (354-363,
  364-387, 388-395), then one of 48 (396-442; word 417 is two words
  joined by the dash). Its condition runs 22 words, from 396 to the
  first half of 417; the main clause begins at the second half of 417;
  the point is words 428 to 433.
- *Must* eight times from the start of the list to this sentence:
  `rilke/p1-02`, block 0, words 136, 145, 171, 296, 331, 338, 365 and
  377. None after 395, and no *one* either; the subjects of the last
  sentence are at 398, 420 and 428-430; the writer appears only at 404
  and in the first half of 417.
- The German keeps the same shape: its *muß* comes nine times in the
  same stretch (`o-rilke/verse`, words 116, 125, 130, 150, 253, 282,
  286, 313, 323) and not once in the last sentence, which has no *man*
  either. The caption does not use this count; it is in the grounds.
- Periodic sentence: Charles Sears Baldwin, *Composition, Oral and
  Written* (1909), p. 122 (Internet Archive full text; my copy
  `baldwin.txt`, lines 14228 to 14250; the page from the table of
  contents, line 3182); Allbutt, p. 64; Strunk, rule 18.

I first marked six kinds of thing here and the checker warned ("a
reader can hold about four"). There are now four: the three shorter
sentences, the condition, the main clause, the point.

### Second passage, "Word"

Claim: in German three steps of *not yet*, the last about the memories
themselves, lead to *not until*; the English of 1930 reverses the
third; and where Rilke returns to his first noun, *Vers*, the English
says *poem*.

- The three steps. First: German words 242-244 (in the first passage's
  pair), English 282-286. Second: English 358-359, where the English
  keeps it. Third: English 388-395, which says the reverse of the
  German. The German of the second and third is on p. 724 of the
  collected works as zeno.org gives it.
- That the German of the third step is sound, and the English is the
  odd one out, rests on three printings of the German sentence: zeno.org
  (the collected works of 1955 to 1966); the *Zentralblatt für
  Psychoanalyse*, vol. 2, no. 8 (May 1912), which quotes the passage two
  years after the book came out (Internet Archive, zb219128); and
  Robert Faesi, *Rainer Maria Rilke* (1919) (rainermariarilke00faesuoft).
  All three have the same words. Both English editions of 1930 have the
  reversed sentence: the scan of the New York edition and the scan of
  the London edition in `.cache/texts/` (`ia_rilke_linton_djvu.txt`,
  `ia_rilke_hogarth_djvu.txt`), and Read's quotation of 1932. Why it was
  reversed I do not know.
- *Erst*: *Digitales Wörterbuch der deutschen Sprache*, erst, sense
  I.2 (not sooner than the time named). *Noch nicht*: the same, noch,
  sense I.1.
- Grimm, *Deutsches Wörterbuch*, read at dwds.de (my copies
  `dwb_Vers.txt`, `dwb_aufstehen.txt`, `dwb_Blick.txt`,
  `dwb_Gebärde.txt`):
  - Vers: vol. 12, part 1, col. 1029 (the part printed in 1895). From
    Latin *versus*, properly the turning of the plow, the furrow, then
    line.
  - aufstehen: vol. 1 (1854), cols. 746 to 748. Sense 1 is getting up
    from bed, sense 2 from the ground or a seat. Under 1 the entry says
    that a going follows the getting up as often as eating does in
    narrative, as the act the getting up is for; under 2, that speaking
    is joined to it, because the speaker rises first to be heard. In
    Rilke's sentence the word stands up and then goes out (German words
    374 and 381).
  - Blick: vol. 2 (1860), cols. 113 to 116. Sense 1 is a flash of
    light, lightning; a later sense is the light and ray of the eye.
  - Geberde: vol. 4, part 1, first half (1878), cols. 1729 to 1736. The
    entry says the singular first meant a person's whole bearing.
- That *Gebärde* also stands near the start of the German list (of the
  small flowers): `o-rilke/verse`, in the words before 149, and zeno.org
  p. 724. The English there says *gestures* (`rilke/p1-02`, block 0,
  words 155 to 169).
- That the English says *verse* at the start of the list and *poem* at
  its end: words 132 to 134 and 429 to 433.

The notes and glosses are plain text. I had italic and bold tags in
five notes and nine remarks; the kit sets those fields as plain text,
so the tags would have been printed. They are gone.

### Second passage, "Figure" (metaphor)

Claim: the sentence speaks of a thing of the mind as the body; Auden
wrote that Rilke's new way with abstract ideas was to think in symbols
taken from the physical world.

- Parts: word 392 on one side; 402, 406 and 408 on the other.
- Metaphor: *Silva Rhetoricae*, under metaphor: a comparison made by
  speaking of one thing as another (my copy `silva_metaphor.html`).
- "The list began with what one must see and with the gestures of
  flowers": `rilke/p1-02`, block 0, words 135 to 143 and 155 to 169.
  "Can no longer be told apart from oneself": words 409 to 417.
- Auden, 1939: see below. He says it of the poems, and the caption says
  so ("of the poems"). The last sentence of the caption applies it to
  this sentence of prose; that step is mine and is marked as mine by
  the words "does the same".

### Third passage, "Subjects"

Claim: the animal is never a subject, and each stanza starts from one
thing that can be seen of it; Rilke said the poem came of working
before nature like a painter or sculptor, and that this can be seen in
it.

- On the plate: the animal is there only at row 1.0, word 0 (a
  possessive) and row 1.2, word 0 (a dative), both in the first stanza.
  The pronoun at row 1.1, word 4 refers to the gaze, since the noun at
  row 1.0, word 1 is masculine; Lemont and the two English versions in
  English Wikipedia read it so. First subjects: row 1.0 word 1; row 2.0
  words 0 to 2; row 3.0 words 3 to 6. After the full stop the subject
  is row 3.1 words 5 and 6, with its verb in two parts at words 4 and
  7; rows 3.2 and 3.3 have no new subject.
- The second stanza has one more subject, in a relative clause (row
  2.3, words 3 to 5). The caption says "first subject" for that reason.
- Named only in the title: the title of the part is the animal; the
  heading of the passage is the poem's subtitle in English, since the
  kit prints the part's label after the heading.
- The three stanzas as gaze, gait and eye: German Wikipedia, "Der
  Panther", section "Form" (my copy `panther_de.wiki`).
- Rilke's letter of 17 March 1926 to a young woman friend, in *Briefe
  aus Muzot 1921 bis 1926* (1935): read at length as Kih-Seong Kuh
  quotes it, *Die Tiersymbolik bei Rainer Maria Rilke* (1967), p. 60 (my
  copy `kuh_djvu.txt`, lines 3104 to 3115, footnote at line 3132), and
  in snippets of the Internet Archive scan of the letters
  (briefeausmuzot190000rain). In my words: under the great Rodin he was
  obliged, for the time being, to work before nature like a painter or
  sculptor, relentlessly grasping and copying; the first result of this
  strict good schooling was Der Panther, in the Jardin des Plantes in
  Paris, and one may see in the poem where it comes from. The last
  clause is the ground for "wrote that one can see this in it".
- The key has four rows: the animal, the first subject of each stanza,
  the last subject, its verb. An earlier version gave each subject its
  own English label and never said what the marks were.

### Third passage, "Beat"

Claim: the poem keeps five beats for eleven lines; its one full stop
inside a line and its one four-beat line both come in the stanza that
begins *only sometimes*; the short line is where the image ceases to
be.

- The scansion: see the next section.
- Syllables: rows 1.0, 1.2, 2.0, 2.2, 3.0, 3.2 have eleven; rows 1.1,
  1.3, 2.1, 2.3, 3.1 have ten; row 3.3 has eight. The checker's proof
  prints them.
- The one full stop inside a line: row 3.1, after word 2. All other
  full stops end lines (rows 1.1, 1.3, 2.3, 3.3).
- That the poet cut the last line short to strengthen what it says:
  Kuh, p. 64 (`kuh_djvu.txt`, lines 3322 to 3325; the section on the
  poem begins at line 3045 and the rhymes are at lines 3316 to 3318).
  He writes that only the last line is an exception, with four beats,
  and that "it is to be assumed" the poet meant by this to strengthen
  the statement. The caption keeps his hedge ("assumes") and does not
  name him; a caveat tells the reader it is an assumption. German
  Wikipedia says the same and cites this page and Hans Berendt,
  *Rainer Maria Rilkes Neue Gedichte* (1957), p. 112, which I have not
  seen. On the same page Kuh gives the masculine and feminine rhymes
  the wrong way round; I did not use that.
- Paull F. Baum, *The Principles of English Versification* (1922),
  chapter 4 (`.cache/handbooks/baum-versification-pg21342.txt`): the
  five-beat quatrain rhymed by turns, and stanzas whose last line is
  made shorter. It is an English handbook; I use it for the names of
  the things, not for German usage.

### Third passage, "Rhyme"

Claim: the word for bars comes back twice inside the lines of the
stanza that says there seem to be a thousand bars and no world behind
them; the repeating appears to be made for that statement.

- On the plate: rhyme by turns in each stanza; rhymes of two syllables
  in the first and third lines of each stanza and of one in the second
  and fourth. The rhyme word of row 1.0 (word 6) stands again at row
  1.2, word 6, with its rhyme partner next to it at word 7, and in
  another case at row 1.3, word 3; the word for a thousand stands
  before it both times (row 1.2 word 5, row 1.3 word 2).
- "Appears to" marks the reason as my inference. What the stanza says
  is read off rows 1.2 and 1.3; the sense of the words is from the
  *Digitales Wörterbuch der deutschen Sprache* under Stab and from the
  English versions by Stanley Appelbaum and Stephen Mitchell printed
  with the German in English Wikipedia, "The Panther (poem)".
- The first word of the poem (row 1.0, word 0) and its last (row 3.3,
  word 6) are the same sound with different meanings. Kuh notes it,
  p. 65 (`kuh_djvu.txt`, lines 3344 to 3355, where the bars gliding
  past are also). He reads it as a ring; I give only the fact, because the ring
  would be a claim that the sound acts out the cage. The fact stands
  in the middle of the caption so that the caption ends on its reason.
- Two threads are marked (the rhyme sound and the word for a thousand,
  each where it comes back inside a line). I took out a thread for the
  first and last words: the key prints "coming back inside the line"
  for every thread, which is untrue of those two places. A reader who
  points at either word in the caption sees both light up.
- I say "the first and third lines of each stanza" and "the second and
  fourth", not "the long lines" and "the short lines", because "the
  short line" in the other tabs means the last line of the poem.
- Lemont's English also has its word for bars three times in the first
  stanza (p:0.0 word 7, p:0.2 word 8, p:0.3 word 4), twice as a rhyme
  word. So the caption of "English" does not say that she lost this.

### Third passage, "English" (compare)

Claim: set beside the English, the German shows three absences; Lemont
keeps rhyme and beat and fills each.

- Lemont keeps rhyme by turns (her row ends, read off the proof) and
  ten syllables in every line, the last included (p:2.3), where Rilke
  has eight.
- Row 1.0, words 4 to 6, against p:0.0, words 3 to 7: in the German
  the bars are what goes past. *Vorübergehen* takes no object
  (*Digitales Wörterbuch der deutschen Sprache*); the genitive after a
  noun made from such a verb names its subject (German Wikipedia,
  "Genitiv"); Kuh, p. 65, speaks of the bars gliding past before the
  animal's eyes. In Lemont the glance does the passing.
- The three absences: row 1.1 words 5 to 7 against p:0.1 words 4 to 7;
  row 1.3 words 4 and 5 against p:0.3 words 5 to 7; rows 3.1 and 3.3
  against p:2.2 words 3 to 5 and p:2.3 words 2 to 7. The sense of the
  German is from the two English versions named above.
- The tie on row 1.0, word 1: the same noun stands in the German of the
  second passage (`o-rilke/verse`, word 346), where the English of 1930
  also says *glance* (word 406).
- The words of Lemont named in the caption are hers of 1918, out of
  copyright, and none is longer than four words.

## The scansion of Der Panther, and where it could be heard otherwise

The measure is five beats, rising, with eleven syllables in the first
and third lines of each stanza and ten in the second and fourth; the
last line has eight syllables and four beats. I read every line aloud
against the drawing of the tab. The marks on the page are one hearing.
Where I was unsure, this is the other way:

- Row 1.0: the second beat of the measure falls on word 3, a small word
  that the voice passes over. I marked it unstressed. No other way; the
  doubt is only how light it is.
- Row 1.1: word 0 could take a stress, since it is the adverb of
  degree that the clause at word 3 answers. I marked it light, as the
  measure has it. The beat on word 3 is passed over.
- Row 1.2: words 0 and 1 can be heard either way. The measure puts the
  beat on word 1, and I marked it so. A reader who wants the animal in
  the foreground will stress word 0 and make the line begin on a
  stress.
- Row 2.1: the beat on word 1 is passed over; the first three words
  are all light before the long word 3.
- Row 2.2: the beats on word 1 and on the first syllable of word 7 are
  passed over. Many readers would give the first syllable of word 7 a
  light beat, which would make the line more regular than I show it.
- Row 2.3: the beat on word 1 is passed over. Some would stress word
  1, since it points back to the noun that ends row 2.2.
- Row 3.0: the beat on word 5 is passed over.
- Row 3.1: word 3, the first word after the full stop, can take a
  stress. I marked it light, as the measure has it, with the stress on
  the verb at word 4. Stressing word 3 would put two stresses together
  after the pause.
- Row 3.2: word 0 repeats the verb of row 3.1 and can be stressed in
  place of word 1. I kept the measure: the verb is said for the second
  time, and the preposition at word 1 is the new word.
- Rows 1.3, 2.0 and 3.3 are regular. Row 3.3 is the short line.

The caption leans on none of these. It needs only the count of beats
in each line and the full stop in row 3.1, and a caveat tells the
reader that the stresses are one hearing.

Lemont's twelve lines have ten syllables each. I did not scan them on
the page.

## Auden: what he said, and where I read it

The research note for this piece is `remake/research/F_rilke.md`. I
checked each thing below at the scan or the text, not only in the note.

### The view at the head of the page: "Psychology and Criticism" (1936)

- A review of Herbert Read's *In Defence of Shelley*, in *New Verse*,
  no. 20 (April-May 1936); reprinted in *The English Auden*, edited by
  Edward Mendelson (1977), pp. 356 to 358. Issue, title and page are
  from F_rilke.md, section 3.3.
- I read three sentences of it on p. 357 through the full-text search
  of the Internet Archive scans of *The English Auden*
  (englishaudenpoem0000aude and englishaudenpoem00aude): that Rilke, in
  a fine passage Read has quoted in *Form in Modern Poetry*, counts out
  the sensory experiences that should go to the making of one poem;
  that this is precisely his objection to Shelley; and that reading
  Shelley he feels that the poet never looked at or listened to
  anything except ideas.
- `view.quote` is 17 words of the first of these, exact as both scans
  print them. Both print "human mass". That may be a misprint for
  another adjective; it may also be what he wrote, set against Shelley's
  ideas. I quote it as printed and say so in `open`. I could not open
  another printing: *New Verse* itself is not to be had from here (the
  Internet Archive has a collection for the magazine with no issue in
  it, and modernistmagazines.com did not answer), and the first volume
  of the collected *Prose* has no searchable copy (F_rilke.md, section
  3.2).
- An earlier draft put Auden's sentence about Shelley at the head of
  the page. The page prints the quotation large and first under "What
  Auden said", and that sentence begins with a pronoun, so on a page
  about Rilke it would have been read as a verdict on Rilke, the
  reverse of what he meant. The quotation is now his words on Rilke's
  passage, and the sentence on Shelley is paraphrased in `view.says`.
- What Read quoted, checked today in the snippets of two scans of *Form
  in Modern Poetry* (the Sheed and Ward edition of 1933,
  forminmodernpoet0000herb_k9i4, and a reprint of the edition of 1932,
  forminmodernpoet0000unse_l0u8): the
  paragraph from the sentence that verses are experiences to its last
  sentence, in the English of the hosted text, the reversed sentence
  included. His footnote, at the foot of the page before p. 76, names
  the book as translated by John Linton (Hogarth Press, 1930).
- Auden says that Read had quoted the passage. Whether he had read the
  book itself by 1936 is not shown (in `open`).
- No remark by Auden on the book by name was found. F_rilke.md says so
  after its own search, and I found none in the scans I could search.
  The first caveat tells the reader.

### "Rilke in English" (1939)

*The New Republic*, 6 September 1939, pp. 135 and 136; in *Prose*,
vol. II (2002), pp. 25 to 27 (those pages from F_rilke.md, section 1). I
read the review in the text of the magazine in the shared scratch
folder, `research/F_work/nr_1939-09-06.txt`, lines 3264 to 3450. A
search of that text finds none of the words Malte, Brigge, Notebook or
Journal, so the review does not name this book; the entry in `auden`
says so, and so does the caption that uses it ("of the poems").

### New Year Letter (1941)

The couplet that names Rilke, and Auden's note to line 215: read
through the full-text search of the Internet Archive scans of *New Year
Letter* (London: Faber, 1941; newyearletter0000aude) and *The Double
Man* (New York, 1941; bwb_S0-DUH-879). The two punctuate the couplet
differently, so I paraphrase it and quote nothing. The later passage
(the Devil and the Eighth Elegy) and both line numbers are from
F_rilke.md, section 4.2; I did not count the lines myself.

### Pearce

Donald Pearce, "Fortunate Fall: W. H. Auden at Michigan", in *W. H.
Auden: The Far Interior*, edited by Alan Bold (1985), p. 148: read in
the scan `research/auden/pearce.txt`. After the notes on the Henry IV
lecture he adds that there was more, on Rilke's Elegies as he believed,
which he meant to write down that night and never did. The page number
stands at the foot of that page in the scan. No account of a class on
this book has been found, and the entry says so.

### The Dyer's Hand (1962)

Read in the scan `research/auden/dh.txt`: lines 1705 and 1706 (the date
of the inaugural lecture, 1956), 2672 to 2674 (p. 51: still a great
poet in his judgment, and one he can no longer read), 3770 to 3790
(p. 76: Mallarmé and Rilke as the chief heretics of one kind). All
paraphrased.

## Other facts, and where I read them

- The page numbers 18 to 20 of the edition of 1930: from the Internet
  Archive scan of the New York edition (journalofmyother00rilk), cached
  as `.cache/texts/ia_rilke_linton_djvu.xml` with
  `rilke-ia-page_numbers.json`. The paragraph on verses begins near the
  foot of p. 18; the long sentence of the first passage is on p. 19;
  the last sentence is at the head of p. 20. I checked this by single
  words and by the page numerals printed on the leaves.
- The translators: the title page of the New York edition reads
  "Translation by M. D. Herter Norton and John Linton"
  (`.cache/texts/ia_rilke_linton2_djvu.txt`, lines 43 to 46). The
  London edition (Hogarth Press, 1930) reads "Translated by John
  Linton" (`ia_rilke_hogarth_djvu.txt`, line 20).
  `remake/research/D_texts.md` gives Linton alone.
- "Twenty-eight and unknown", "a small room", "learning to see",
  "ought to begin some work", that verses written young come to
  little, that verses are experiences and not just feelings: the hosted
  text, `rilke/p1-01` block 0 and blocks 8 and 11, `rilke/p1-02` blocks
  0 and 3, `rilke/p1-05` block 2. German Wikipedia, "Die Aufzeichnungen
  des Malte Laurids Brigge", also gives his age.
- "The stay the novel draws on": the same article says the novel was
  begun in Rome in 1904 and reflects the first impressions of the
  author's stay in Paris of 1902 and 1903.
- The date of the poem: Kuh, p. 59 (`kuh_djvu.txt`, lines 3073 to
  3077): it cannot be fixed with certainty; the collected works date it
  1903; 1902 is not ruled out; Rilke came to Paris in August 1902.
  First printed in the monthly *Deutsche Arbeit* in September 1903
  (p. 60). German and English Wikipedia both say 1902 or 1903. The
  label of the third passage and `about` say "1902 or 1903", and a
  caveat says the date is not certain.
- The poem's text: the site's `rilke-de/panther`, taken from Project
  Gutenberg no. 33863, whose title page reads Leipzig, Insel, 1920
  (`.cache/texts/pg33863_rilke_neue_gedichte.txt`). Lemont's English:
  `poems/panther-en`, from Project Gutenberg no. 38594, whose title
  page reads New York, Tobias A. Wright, 1918.
- Kuh's book is on the Internet Archive as public text (IA40151827_0022).
  His page numbers are worked out from the page marks in that text and
  from the leaf numbers the archive's search gives (leaf 61 is p. 59).
  This is in `open`.

## What I looked for and did not find

- Any remark by Auden on this book by name.
- Another printing of Auden's sentence of 1936, to settle "human
  mass": *New Verse* no. 20 and *Prose*, vol. I.
- Hans Berendt, *Rainer Maria Rilkes Neue Gedichte* (1957), p. 112,
  which German Wikipedia cites with Kuh for the short last line.
- The page of the letter of 17 March 1926 in *Briefe aus Muzot*. An
  article in *Modern Language Notes* (May 1945) cites the sentence at
  pages 370 and following of a book that appears to be this one; I saw
  only snippets of the letters.
- A sound German text of the novel on this machine. zeno.org has one;
  I may not fetch it into `.cache/originals`.
- Any statement by Rilke or by a handbook about the eleven phrases of
  the long sentence or about the reversed sentence in the English. Both
  are read off the texts.

## Found and left out, on purpose

- After the first stanza the poem has no pronoun for the animal at all,
  and where Lemont's English says *his* (p:1.0 word 3, p:2.0 word 7,
  p:2.3 word 6) the German has the definite article (row 2.0 word 0,
  row 3.0 word 5, row 3.3 word 2). I say only that the animal is named
  "in the first stanza only". German often uses the article with parts
  of the body where English uses a possessive, so the articles alone
  prove little, and I found no source that makes the point.
- Kuh's reading of the first and last words as a ring, and German
  Wikipedia's remark that the unchanging measure stands for the pacing
  of the animal. Both say that the sound acts out the thing, which
  POET.md rules out unless Auden or the lines say it.
- Kuh, pp. 61 and 62: a prose sketch and an earlier poem as forerunners
  of Der Panther, and a small plaster cast of an antique tiger in
  Rodin's studio that Rilke described to his wife on 27 September 1902.
  True and interesting, and nothing a reader can see in the lines.
- Kuh, p. 64: the last line of the first and of the third stanza begin
  with the same small word (row 1.3 word 0, row 3.3 word 0). Seen on
  the plate, and I found no reason to give for it.
- The word history of *Erfahrung* (Grimm, vol. 3 (1862), cols. 788 and
  793), read for the sentence that verses are experiences. That
  sentence is not in either passage.
- That *Dinge*, things, is the word Auden names in 1939 and in 1941,
  and that the German list begins with it. It would need a fourth tab
  on a passage that is already long.
- Before the long sentence the German says *muß* three times
  (`o-rilke/verse`, words 116, 125, 130) where the English says *must*
  twice (words 136, 145); and the German of the turn says *darf* (word
  251) where the English says *be able* (words 288 and 289). Small, and
  each would need a remark of its own.
- The stanza of Der Panther as a form in fashion about 1900 (German
  Wikipedia, citing Dieter Burdorf). No use to a reader of these lines.

## The page as a reader meets it

- A word or phrase in bold or italic in a caption lights its words in
  the passage when the pointer is on it. So the small words named in
  the first passage (*to*, *an*) light every such word in the passage,
  not only the eleven that head a phrase. The English has six more. In
  the German one more is lit (word 247) and one head is not, because it
  is joined to the word before it by a dash (word 168). The drawn marks
  show the eleven.
- The head of the page prints `view.quote` first and large. See above
  for why it is no longer the sentence on Shelley.
- Counted across the ten captions: "With the English is Rilke's
  German" opens two; a handbook is called on in two; a sentence opens
  with "So" in two; Auden is named in two. No frame comes more than
  twice. The captions run from 98 to 110 words.
- Terms said in plain words where they first come: loose sentence,
  periodic, climax, metaphor, "rhymes by turns" with its letters, the
  rule and the dots of the tab "Beat".
- Nothing printed says "plate" or "lens". The tab "Figure" is named
  once, by its label, in the caption of the tab "German".

## For the examiner and the lead

- The items in `open` (twelve) are all things I could not verify or
  that someone else should judge. The ones that matter most: "human
  mass"; the damaged German sentence, which keeps the reversed sentence
  from being shown beside its English; `beside` on the two prose
  passages and its length on a phone; the page numbers of Kuh and of
  the collected works, which are worked out from page marks.
- `next` is `rilke/p1-01:0`, the start of the book.
- Two quotations in copyright are allowed to a piece; this one has one
  (`view.quote`, 17 words).
- Rules moved while I worked: CRITIC.md appeared, POET.md gained
  `beside`, and the checker began to warn at more than five kinds of
  mark in a tab. The reading was brought into line with each as it
  stood at 05:08 UTC, and with the kit as it stood at 05:22.

## The finisher's changes after the critic (3 October 2026, 12:37 to 13:33 UTC)

The finisher's record. Nothing of the novel, of the poem, of either
English version or of Auden's prose is copied out here: a place is given
by row and word number, as `node build/tools/check-reading.mjs rilke
--print` prints them, or by page and line.

Read first: BRIEF.md, FINISHER.md, CRITIC.md and EXAMINER.md; `critic.md`,
`art.md` and `exam.md` from end to end; `reading.json` with its `open`;
the end of this file; the page as `node build/tools/prose.mjs rilke`
prints it; the critic's pictures of the Rhyme and Word tabs.

Every change is in `reading.json`, made by 34 exact edits in six
lists (`finisher/edits-1.json` to `edits-6.json`). The first two hold
the printed changes; the third, fourth and fifth each mend one
unprinted record, a ground's source or a `checked`; the sixth adds one
sentence to a caveat and a line to its ground. The reading as the
critic left it is `finisher/before.json`. The piece has no script and no
shape lens, so there were no words of a drawing to mend. No mark, `turn`,
`join`, `heading`, `beside` or tab label was touched, the checker's proof
of the marks is the same before and after, and nothing I wrote says where
the English of the poem stands.

### Set: five points

1. **Third passage, tab "Rhyme": two sentences cut from the caption**
   (critic 4.1). Its first three sentences only named things: the
   scheme, the two kinds of rhyme, the last word that sounds like the
   first. The rule: a sentence that only names goes, unless a later
   sentence of the same caption builds its reason on it.
   - Kept, the first (the scheme). The sentence on the word for bars
     stands on it: it says that the word which ends the first line comes
     back inside the third "with its rhyme right behind it", and that
     the third line rhymes with the first is the scheme.
   - Cut, the second (rhymes of two syllables and of one). No later
     sentence builds on the two kinds, and no ground offers a reason
     for them: Kuh, p. 64, has the rhymes the wrong way round and Baum
     says nothing of German verse (both in exam.md).
   - Cut, the third (the first and the last word). Nothing builds on
     it. The one reading of it, Kuh's on p. 65, the examiner had left
     out already as one critic's.
   - The caption is now three sentences and 69 words: the scheme; the
     word for bars at row 1.0 word 6, row 1.2 word 6 and row 1.3 word 3,
     twice after the word for a thousand; that repeating a word stresses
     it, and what the stanza says of bars.
   - What went with the cuts: the last sentence of `stands` (Kuh,
     p. 65); in the plate ground, the two kinds of rhyme and the first
     and last words; the whole ground on Kuh, p. 65; and in `open` the
     examiner's entry on Kuh no longer lists the likeness of the first
     and last words, and says where it went. `sources` keeps Kuh's
     pp. 59 to 65: p. 65 is still a ground of the tab "English".
   - Nothing was added, so no new ground was needed. The `why` fits as
     it stood.
2. **Second passage, tab "Word", note 7** (critic 4.6; `notes[6]`). It
   gave Grimm's remark on what follows the verb for standing up and did
   not say that the remark fits this sentence. It now ends: here going
   follows, the first word of a line stands up and then goes forth, with
   the German verb for going out named and marked as a word. A note may
   run to 45 words and this one stood at 41, so the reason Grimm gives
   for the speaking (the speaker rises to be heard) went out to make
   room; it has no bearing on this sentence. The note is 45 words.
   - Ground opened, 3 October: Grimm, *Deutsches Wörterbuch*, vol. 1
     (1854; part 4 printed 1852), under aufstehen, at
     dwds.de/wb/dwb/aufstehen. The verb's entry runs from col. 746,
     line 48, to col. 748, line 22. Sense 1 (from bed or a resting
     place): after the remark on eating, that going, walking or moving
     off follows the getting up as often, as the action proper for
     which the getting up is the condition; the examples are from
     Genesis, a chronicle and a huntsman's rhyme. Sense 2 (from the
     ground, a chair or a bench): speaking is joined to it because the
     speaker first rises to be heard; the examples are from Acts and
     Mark. Grimm's word for both usages is *episch*, which the page
     gives as "in old narrative" (the examiner's wording, kept).
   - The lines: in the German sentence as printed here the verb is
     word 374, and after it come the word for and (378) and the verb
     for going out (381), which ends the sentence. The English has
     words 434 and 439 to 440.
   - For the sense of the second verb: Grimm under ausgehen, the same
     volume, from col. 868, line 68 (the Latin at its head is for going
     out, going forth, coming forth and, last, perishing; sense 1 is
     going out of the house or the room, as against going in).
   - Where it is recorded: a new ground in the tab's `grounds`; three
     words more in its plate ground; the note's `source`; and
     "ausgehen" among Grimm's entries in the tab's `stands` and in
     `sources`.
   - What the entry also says, and what I did about it. Sense 7 of the
     same entry is to arise, to come up, to come into being; discord,
     an evening wind and, last, a thought that arose in the writer are
     among its examples. That is the sense the English of 1930 follows
     at word 434. The page glosses the verb by its first senses, and
     the note builds on them, so the reader is now told: the third
     caveat, on the gloss of the other German word of this tab, has
     one sentence more, of eleven words, that the verb glossed as
     stands up also means to arise in Grimm. The caveat is 50 words,
     its limit. The poet and the examiner had recorded senses 1 and 2
     only. Recorded in the new ground. See "For the lead", 1.
3. **The head of the page: who Herbert Read is** (critic 4.8). The
   paraphrase of Auden now says "the critic Herbert Read". It is 72
   words.
   - Ground opened, 3 October: Auden's own page, in the source the
     piece cites, through the full-text search of archive.org limited
     to the scan of *The English Auden* (englishaudenpoem0000aude).
     The essay is headed with the book under review, *In Defence of
     Shelley*, by Herbert Read. In it Auden takes up what Read calls
     ontogenetic criticism, and says that Read himself quoted the
     passage of Rilke in *Form in Modern Poetry*. The research note
     F_rilke.md, 3.3, says the same. Recorded in `view.checked`.
4. **The poem's title, in quotation marks** (critic 4.9). CRITIC.md
   asks quotation marks and no asterisks for a short poem. Set in the
   six printed places: the line under the title (`where`); note 4 of
   the tab "Word"; the third and ninth entries of `sources`; the fourth
   and fifth of `caveats`. In note 4 the quotation marks take the place
   of the asterisks, as the piece "rimbaud" sets a chapter's title in a
   remark (see "For the lead", 5). No word changed. One printed place
   is not in the reading: see "For the lead", 2.
5. **Second passage, tab "Figure": the last sentence of the caption
   narrowed** (critic 4.5). It said that this prose sentence "does it
   too". "It" could be either of the two things Auden is reported to
   say, and that the sentence says abstract ideas concretely is the
   page's own step, with no ground of its own. It now says only that
   this prose sentence, too, puts memories in physical terms. That is
   what the marks show (word 392 against words 402, 406 and 408), and
   it answers to the one word of Auden's report, physical, that the
   sentence bears out. The caption is 113 words; the `why` fits as it
   stood.
   - Ground: the lines, read in the checker's proof. The sentence
     before it, which reports Auden, is the examiner's and was not
     changed. I opened Auden's page for it all the same, 3 October,
     in snippets, through the full-text search of archive.org limited
     to the public scan of the magazine (new-republic-the-1914-1969):
     the sentence on the poet's problem with abstract ideas, the one
     on the physical symbols that Rilke shares with the Elizabethans,
     and the one on Things. The report says no more than he says. The
     research note F_rilke.md, 1.2, steps 3 and 4, gives the review in
     the same way. Recorded in the tab's plate ground and in the
     source of its ground on Auden.

### The three closing sentences, tested as new

The lead asked that the three closing sentences the critic doubted and
kept be tested as new sentences under rule 1, and that whatever has no
ground be cut. None was cut. Two stand on the lines as they are, and
the third was narrowed to what the lines show (Set, 5).

- **First passage, tab "Figure", last sentence** (critic 4.2). Kept as
  it stands. Ground, read 3 October in the checker's proof: the fifth
  step of the tab is words 269 to 281.1 and ends on the word for the
  stars; the turn of the sentence follows at once, words 281.2 to 294,
  and ends on the two words the caption gives in italics. So what the
  sentence calls not enough comes straight after the step that reaches
  the stars. The caption says that and no more. Recorded in the claim
  of the tab's ground on the text.
- **Third passage, tab "Subjects", last sentence** (critic 4.3). Kept
  as it stands. Ground, opened 3 October in the text the site holds:
  Malte writes it three times, at rilke/p1-01 block 8 (words 2 to 4)
  and block 11 (words 7 to 9), and at rilke/p1-02 block 0 (words 10 to
  16), the paragraph the first two passages come from. The sentence
  reports and draws no conclusion, and `about` says the same thing at
  the head of the page. Recorded in the source of the tab's ground on
  the text.
- **Second passage, tab "Figure", last sentence** (critic 4.5).
  Narrowed: Set, 5.

### Left: seven points

1. **First passage, "Figure", last sentence** (critic 4.2). Tested
   above. It stands on the lines.
2. **Third passage, "Subjects", last sentence** (critic 4.3). Tested
   above. It stands on the text.
3. **Two balanced pairs** (critic 4.4): the last sentence of the tab
   "Sentence" of the second passage, and the clause on the one noun in
   the tab "German" of the first. Left. Each pair is in the lines and
   is the reason its tab arrives at. Read again in the proof and in
   the stored paragraph: the verb of duty stands eight times from word
   136 to word 377 (twice in the passage shown, at 365 and 377) and
   not once in the last sentence, whose main clause (words 417.2 to
   421) has "can" at 419; the German noun for the sea stands at words
   222, 225 and 228 of the German, where the English has one noun at
   261 and 264 and another at 267.
4. **Tab "Word", notes 4 and 5** (critic 4.6). Left. The critic is
   right that each gives a dictionary's senses and does not say what
   the sense does in this sentence. No ground offers a reason, and to
   supply one would be a reading of my own. Neither note only names:
   note 4 ties its word to the first noun of the poem (row 1.0, word
   1), and note 5 to the same noun earlier in the list (German words
   138 and 348). See "For the lead", 4.
5. **Words that are not on the page** (critic 4.7): the three words
   the Sentence caption of the second passage counts from (words 132
   to 134 of the paragraph), and the place where the Word caption says
   the English has another word (134). Left, for the critic's reasons:
   the title of the page and the summary under "The passages" both say
   that the paragraph is about a single line of verse, and the folded
   note of each tab links to the whole paragraph.
6. **Dictionary entries in plain type** (critic 4.10). Left. The model
   piece, "tempest", prints the name of an entry bare after "under"
   (Sea, Tabor, Will and others, in its folded notes and its sources)
   and sets in italics only a word named as a word. This piece does
   the same, and the two
   German items in italics in the note of the tab "English" are words
   named as words.
7. **The fourth entry of the list from Auden** (critic 4.11 and 5;
   exam.md, Still doubtful, 7). It stays, by the lead's word: all four
   entries stay.

Read as well, and left as it stands:

- critic.md, 6: the two kinds of italic in the caption of the tab
  "English" (what the German says, in the page's English, and Lemont's
  own words). Each sentence says which is which.
- art.md, "In the reading", 3 to 5: the five notes of the tab "Word"
  that gloss a German word the tab does not mark (it would need a note
  with a second place, which the kit does not have); the order of the
  colors on the second Sentence tab (exact as it is); the long label
  of the German of the second passage (a label is not mine to change).
- art.md, "Proposed for the reading", 1 and 2: `beside` on the plate
  `panther` and its three turns are the lead's, and I touched neither.
- exam.md, "Still doubtful", 1, 2, 3, 6 and 8: each is in `open` and
  is still true as written. I opened nothing that settles one of them.
  The entry in `open` on Kuh was brought up to date (it listed the
  likeness of the first and last words, now cut).
- exam.md, "Still doubtful", 4 (Lemont's five beats are one hearing).
  Left: it is a count on the plate. By `words.mjs` eleven of her
  twelve lines have ten syllables; the rule gives eleven for the row
  poems/panther-en:1.0 only because it divides word 7 in three, and
  the word has two. Ten syllables in rising rhythm are five beats, and
  the last line is of full length like the rest.
- exam.md, "Still doubtful", 5 (climax in the handbook's general
  sense). Left: the examiner tested the term and kept it (exam.md, 3),
  the caption says in what the steps rise, which is space, and the
  plain words say only "greater".

### What the critic did past its brief, tested

Six of its changes add words that say something. Each was tested as a
new sentence (rule 9), and each is kept.

- **Items 26 and 37** (tab "Word", notes 4 and 7): "Grimm's German
  dictionary" and "the German verb". Ground: the dictionary's own
  title on the two pages fetched 3 October at dwds.de/wb/dwb, and the
  entries themselves, which are of German words.
- **Item 31** (the last entry of the list): "printed in *The Dyer's
  Hand*". Ground: the scan dh.txt. Line 346 is the contents, with the
  essay at p. 31; lines 1705 to 1706 are the note under its title,
  that it was an inaugural lecture given at Oxford on 11 June 1956;
  its running heads stand over its pages, p. 51 at line 2645, and the
  sentence on Rilke follows at lines 2672 to 2674. `runs.py` finds one
  run of five words shared with the scan (words 15 to 19 of the entry):
  the title of the book with the word before it. A title is not his
  prose, so nothing was changed. Recorded in `auden[3].checked`.
- **Item 32** (second passage, tab "Figure"): "before the first
  passage here". Ground: the two words the caption names are words 137
  and 157 of rilke/p1-02 block 0, and the first passage begins at word
  170. Recorded in the source of the tab's ground on the text.
- **Item 34** (third passage, tab "English", `stands`): "(the form
  that says *of*)". Ground: *A New English Dictionary on Historical
  Principles*, vol. IV (Oxford, 1901), under Genitive, in the copy on
  this machine (ned_oed04arch.txt, from line 325187): sense A.1, and
  under B a quotation of about 1620 which says that the English
  genitive is marked with *of* or with *s*. The German in question is
  row 1.0, words 4 to 6. Recorded in the tab's ground. The note itself
  has no room to name the dictionary (68 words of 70), so it is named
  in the entry of `sources` that lists the dictionaries.
- **Item 36** (tab "Word", note 5): the German noun named in the note.
  Ground: o-rilke/verse block 0, where the same noun stands at word
  138 and again at word 348. Recorded in the note's `source`.

Items 29, 30, 33 and 35 change wording and add nothing: three line
numbers written as words, "with" for "beside", a count said in full,
and one gloss for one German phrase in three places. Item 29 names the
lines of the stanza, so the Rhyme caption holds however the two poems
are set.

### For the lead

Worst first.

1. **A sentence in a caveat that no one asked for.** Opening Grimm for
   note 7, as told, I found that the entry also gives the verb the
   sense to arise (sense 7), which is what the English says, and that
   neither the poet nor the examiner had recorded it. The clause I
   added to note 7 builds on the bodily senses, so I added eleven words
   to the third caveat to say so (Set, 2). Nothing printed was false
   without them. If the lead would rather not have them, they are the
   first edit of `finisher/edits-6.json`, and the caveat goes back to
   39 words.
2. **One printed place still gives the poem's title without quotation
   marks**: the place line at the head of the third passage. It is not
   in the reading. The kit takes it from the label of the part in the
   catalog (`site/data/texts/rilke-de/index.json`; `plate.js`, lines
   191 to 195) and sets every place line in italic (`atlas.css`, line
   133). To bring it under the rule needs the kit or the catalog, which
   are not mine. Seen in `rilke-panther-2-rhyme-1280.png`.
3. **The Rhyme caption lost two sentences, and the critic pointed to
   one.** The sentence on the two kinds of rhyme went by the same rule
   as the one on the first and last word: it only names, and nothing
   after it builds on it. The page still shows the fact in another
   form, since the Beat tab gives the lines as eleven and ten syllables
   by turns. If the lead wants the sentence back, it is in the first
   edit of `finisher/edits-2.json`, with its clause of the plate ground
   in the third.
4. **Do small notes fall under the rule that cut those sentences?**
   Notes 4 and 5 of the tab "Word" each give a dictionary's senses with
   no reason for them here (Left, 4). If the rule holds for notes on a
   word as it does for captions, the first half of note 4 and the
   second half of note 5 go, and with them Grimm's entries for the two
   nouns. A question for the whole site, so I did not answer it here.
5. **Two rules meet in note 4.** A title in a small note takes
   asterisks, so that it stands upright in the italic; the title of a
   short poem takes quotation marks and no asterisks. I followed the
   second, as the piece "rimbaud" does in one remark, so the title is
   in quotation marks and italic like the note round it
   (`rilke-turn-1-word-1280.png`). Upright in quotation marks is one
   pair of asterisks away.
6. **The folded notes are in no picture.** The picture tool leaves
   "What each caption stands on" and "Where this page may be wrong"
   folded. What I changed there (the `stands` of the tabs "Word" and
   "Rhyme", and three caveats) I read in the output of `prose.mjs`,
   and the checker passes it; I did not see it as printed. The list of
   sources is open in the page picture, and its three changed entries
   read as they should (`rilke-page-1280-4.png`).
7. **The plate `panther` is as it was.** I set no `beside` and no
   turn, and no sentence of mine says where the English of the poem
   stands. The Rhyme caption names the lines of the stanza, so it holds
   either way.
8. **An English dictionary among the sources.** `sources` now names
   *A New English Dictionary*, vol. IV, under Genitive: the ground for
   the five words the critic set beside "genitive". It can come out of
   the printed list without loss, since the tab's ground keeps it.
9. art.md, "In the reading", 3: tying the five notes of the tab "Word"
   to their German words waits on a note with a second place, which is
   the kit's.

### The checker at the end

`node build/tools/check-reading.mjs rilke --print`, run last at 13:33
UTC, last three lines:

    no problems
    no warnings
    the printed notes are fit to print

It printed no warning at any run, so there was no flagged sentence to
read. Its proof before my changes and after differs in five lines, and
each is a line of "stands on", where the grounds are listed. No line
of marks differs. A comparison of the reading with `before.json`,
field by field, finds 14 printed fields changed (`where`, `view.says`,
notes 4 and 7 and the `stands` of the tab "Word", the captions of the
second Figure tab and of the tab "Rhyme", the `stands` of "Rhyme",
three entries of `sources` and three caveats) and no change in any
`turn`, `join`, `heading`, `beside`, label or mark. The page is 3,499
words by `prose.mjs`, 32 fewer than the critic left, counted in the
same way over the fields that changed.

### The pictures

All in `shots/finisher/`, taken with `shoot.mjs` at 1280 and 390
between 13:00 and 13:02 UTC, one plate at a time; each run ended
"nothing reported; now look at the pictures". I opened every one.

- `rilke-turn-1-word-1280.png`, `-390.png`: notes 4 and 7 as changed;
  the second German verb upright at the end of note 7; nothing cut off
  at either width.
- `rilke-turn-2-figure-1280.png`, `-390.png`: the caption with its new
  last sentence.
- `rilke-panther-2-rhyme-1280.png`, `-390.png`: the caption of three
  sentences; the letters, brackets and dotted threads as before.
- `rilke-page-1280-0.png` to `-5.png` and `rilke-page-390-0.png` to
  `-7.png`: the line under the title with the poem's title in
  quotation marks, the paraphrase of Auden with "the critic", and the
  list of sources.

The reading last changed at 13:28:43 UTC and was built at 13:28:44.
Nothing printed outside the folded notes changed after the pictures:
the four later lists of edits touch grounds, one `checked` and the
third caveat. So I took no more pictures, as the machine is loaded.
The pictures at 360 and 320 in `shots/` are the artist's and older
than the critic's changes; I did not take them again.

### Where I wrote, and what was refused

- `reading.json`, by the six lists; the end of this file; `finisher/`
  (`before.json` and the six lists); `shots/finisher/` (twenty
  pictures). Replayed in order on `before.json`, the six lists give
  the reading exactly as it stands.
- The tools I was told to run wrote the built copy of the piece and
  `review/remake/prose/rilke.md`.
- Working copies that are no part of the piece (the two pages of Grimm
  as fetched, the checker's proofs, the copies that `edit-exact.py`
  keeps) are in the session's scratchpad, under `rilke-finisher/`, and
  not in the project.
- The permission system refused nothing.

Finished 3 October 2026, 13:33 UTC.

## The lead after the finisher (3 October 2026, 13:41 UTC)

Read the finisher's record and looked at its pictures (the tabs Word, Figure and Rhyme, the page in slices), then set the layout of the poem and looked again (`shots/lead/`: the four tabs of the third passage at 1280 and 390, Rhyme at 320).

- **The plate `panther`** now sets the two poems as two blocks (`"beside": true`) with the artist's three turns (`"turn": { "1.3": 3, "2.0": 2, "2.1": 1 }`): the German stands whole, its six rhymes are arcs that interlock, and each poem has its label over it. On a phone the English tab ties its pairs by number and color only; the other three tabs gain. Copy of the reading before: `lead/before.json`.
- **The sentence added to the third caveat** (Grimm's seventh sense of the verb) stays: it tells the reader what the gloss leaves out.
- **The two sentences cut from the Rhyme caption** stay out.
- **Small notes that give a dictionary's senses** stay: a gloss for a reader without German is its own reason.
- **The poem's title in the place line of the third passage** is set by the kit in italic, from the catalog. Left for the last reading across pieces.
- Every printed paragraph was tested against the scans of Auden's prose (`runs-sweep.py --only rilke --show`): one run, of small words.
- Checker: no problems, no warnings, fit to print.

## The lead in the last pass (3 October, 16:20 UTC)

A dictionary's headword after "under" in the folded notes and the sources is in
italics now wherever it stood bare in lower case, or is a word of another
language (item 2 of the last pass, 16:20 UTC; with it, a dictionary's name set as
the rest of the site sets it). Type only: no word changed. Edits in
`lead/edits-headwords.json`, the reading before in
`lead/before-headwords.json`; checker as before. The record is `review/remake/last-pass/RECORD.md`.

## The lead in the last pass: the measure's wording and the Word tab (3 October, 18:06 UTC)

One wording for the measure of a line, after Ariel's song, from the reader who went through every Beat tab (`review/remake/last-pass/measure/`; the lead's amendments are in `lead-apply.py` there, and the reasons in `review/remake/last-pass/RECORD.md`, item 1). A measure of stresses is named by its beats, by its syllables where the count matters, and by "the line beginning off the beat" or "on a beat". In verse measured by count an accent is a place the count fixes and a stress is what the voice does. "Light syllable", "weak", "the pattern", "the meter" and "scanned" give way to "unstressed", "where the measure has no beat", "the measure" and "marked".

Changed here: `panther`, tab Beat: meterName, caption; one caveat. The edits: `lead/edits-measure.json`; the reading before: `lead/before-measure.json`. The checker says what it said before. No mark changed, and the new sentences were held against the five scans: no run of five.

## The lead in the last pass: one form for the books many pages cite (3 October, 18:48 UTC)

Printed lines only, and no page number, year or title changed (the tool proves the page
numbers of every line are what they were): `review/remake/last-pass/tools/cite-forms.py`.
The forms: under an entry, `*Prose*, vol. II (2002), pp. …`; in a `stands` line, `*Prose*,
vol. II, p. …`; in the list of sources, `*Prose*, vol. II: 1939–1948, edited by Edward
Mendelson (2002)` the first time and the short form after; and wherever a page of it is
cited under an entry or in the list, `*The Enchafèd Flood* (1950; Vintage Books edition,
1967)`, since every page number of that book on the site is the Vintage edition's (the
one scan all the pieces were written from; its own front matter says so).

Lines changed here (1): `auden[0].source`.

The checker says of the piece what it said before. Copy before:
`lead/before-cite-forms.json`.

## The lead in the last pass: one wording for each figure (3 October, 19:55 UTC)

Each Figure tab says in one line under the figure’s name what the figure is. Laid side by
side, the 82 tabs gave the 17 figures that stand on more than one page a different line
on nearly every page. Each figure now has one line, with a tab’s own tail after “; here”;
anaphora, epistrophe, anadiplosis, parallelism and asyndeton keep one sentence whose number
and unit are fitted to the passage. No name, mark, caption or claim changed in this step.
Why and how: `review/remake/last-pass/RECORD.md`, “One wording for each figure”; the table
of lines is `review/remake/last-pass/figures/lead/lead_lists.py`.

Lines changed here (2):

- `plates[0].lenses[1].plain`, the plate `count`, the tab Figure (climax):
  was “Greek for ladder: words or phrases set in rising order, each step greater than the one before”;
  now “a ladder: words or phrases set in rising order, each step greater than the one before”.
- `plates[1].lenses[2].plain`, the plate `turn`, the tab Figure (metaphor):
  was “one thing spoken of as another: here memories, a thing of the mind, as blood and the movements of a body”;
  now “one thing spoken of as another; here memories, a thing of the mind, as blood and the movements of a body”.

The checker says of the piece what it said before. Copy before:
`lead/before-figure-wordings.json`, with the list applied beside it.

## The lead after the word critic of the last pass (4 October, 00:08 UTC)

A critic read the lines written after the pieces' critics had read: the
figures' lines, the measures and the front page's cards. Its report is
`review/remake/critics/last-pass-words.md`; what the lead did with each
point is in `review/remake/last-pass/RECORD.md`. In this reading, exact
edits, each proved to change only the leaf it names (the file before is
`lead/before-last-pass-words.json`):

- `one thing spoken of as another; here memories, a thing of the mind, as blood and the movements of a body`
  became `one thing spoken of as another`
- `the measure does not change: five beats, the line beginning off the beat, in lines of eleven and ten syllables by turns. Two things`
  became `the measure does not change. Two things`

The checker says what it said before.
