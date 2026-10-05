# Fidelio: the examiner's record

Begun 2026-10-03, 08:47 UTC. One examiner (examiner.txt). Nothing here is printed.
Words of the libretto are pointed at by row and word number, or by the line number of
the German file (.cache/originals/beethoven_fidelio_de_zeno.txt, called "the file" below).

## 0. State on arrival

- `node build/tools/check-reading.mjs fidelio`: no problems, no warnings, printed notes
  fit to print. Three passages (answer, scene, name), eleven tabs.
- No site/js/pieces/fidelio.js and no art.md, at the start and again at 09:24 UTC: no
  artist has been at work on the piece.
- site/data/pieces/fidelio.json was older (07:13) than the reading (07:56). I did not run
  `node build/pieces.mjs fidelio`: the rule I was started with lets me write only inside
  remake/works/fidelio/. To see the page I made private copies of the build and of the
  picture tool in the scratchpad (fidelio-exam/priv-build.mjs, priv-shoot.mjs; the built
  piece in fidelio-exam/built, the pictures in fidelio-exam/shots). Another session's
  build of all the pieces remade the site's copy at 09:37 UTC, in the middle of my
  changes; the last of them (09:40 and after) are not in it. The lead must build the
  piece in place.

## 1. The proof

Read every line the checker prints, before and after the changes. Every mark sits on the
word meant. Checked by hand against the proof:

- answer: the six ties of Versions (German 4.0 w1-4, 5.0 w1, 5.0 w4-23, 8.0 w1-2,
  14.0 w1-2, 15.0 w1-2; English p:344.0 w0-1, p:346.0 w0-1, p:346.1 w0, p:346.1 w1-2,
  p:348.0 w6-7, p:348.0 w9-11); the fifteen spans of Verbs (the four verbs of the two
  spoken speeches at 4.0 w6 and w9, 5.0 w6, w10, w16, w23, with w10 the auxiliary of w16);
  the notes of Words.
- scene: twelve scanned rows, twelve rhyme ends, the tails; the six ties of English, two
  of which use the parts of the dash-joined word of p:393.3 (3.1 for the tie on the
  devout wife, 3.2 for the tie on duty). Those are the only dash-joined words marked.
- name: nine parts of the figure; seven scanned rows; the notes.

## 2. The ear

Scanned by me from the proof before I looked at the poet's marks, by syllable count and
German word stress. Result, row by row of the part o-fidelio/aria:

- Rows 1.0 to 11.0 (the whole recitative, of which 1.0 to 4.0 are shown): every line is
  rising with four beats; eight syllables where the line ends on a beat, nine where a
  light syllable follows. The seven rows left out (5.0 to 11.0) were scanned too, because
  a note says "all of four beats": it holds.
- Rows 13.0 to 16.0: four, three, four, three beats, rhymed by turns.
- Rows 17.0 to 20.0: three, two, two, three, rhymed from the outside in.
- The rest of the aria in the file: four lines to her husband (lines 971 to 977) in four,
  three, four, three, then rows 17.0 to 20.0 again (lines 979 to 985). So "the number of
  beats changes twice" was true of the lines shown and not of the number. Mended
  (section 10, change 4).
- Where I differ from the poet: none of weight. In 1.0 I would let the question word (w1)
  take a light stress; in 4.0 the first two words can be even or the first light, which
  the poet's own note says. No caption leans on either syllable.

Part o-fidelio/recognition:

- 2.0, 4.0, 6.0: four, two and two syllables. Counted together eight syllables and four
  beats. The lines of the quartet around them have six or seven syllables and three beats
  (file lines 1958 to 2000), and the two speeches just before (file lines 1992 and 1996)
  make a line of six between two voices, which rhymes with the line after it. So the
  three speeches can as well be heard as a line of three beats shared by her and the two
  men (2.0 with 4.0) and an echo (6.0). The caption says "counted together" and compares
  the sum with the last line shown; that is true as a count, and the poet's `open` says
  it is only a count. Left, with "whole" taken out, "one line" made "one such line" in
  the caption and "the last line shown" in the `why`, and a sentence added to the fourth
  caveat (change 9).
- 8.0 and 12.0: seven syllables, three beats; they rhyme (the inflected name with the
  word for sworn). 10.0: the name alone, four syllables. 13.0: eight syllables, four
  beats; the voice passes over the beat on w1 and stresses w2. I hear it the same way,
  because w2 is set against w5.

German stress checked for each word of more than one syllable (the four-syllable outcry
is stressed on its second; the name on its third with a light first; the compounds on
their first part).

## 3. The terms, and what the page joins

- epizeuxis (Versions): Silva Rhetoricae defines it as a word repeated with no others
  between, for vehemence or emphasis. The English p:346.0 w0-1 is that. Page opened
  (rhetoric.byu.edu, fetched 2026-10-03).
- epistrophe (Figure): Silva Rhetoricae: ending a series of lines, phrases, clauses or
  sentences with the same word or words. Rows 2.0, 4.0 and 6.0 each end on the same word.
  They are three speeches of four voices, which the caption says. The name holds.
- The crossing in 13.0 (him, comfort, ruin, you) is described and not named. Good.
- What the page joins (pictures from the private build, 1280 and 390 wide, every tab
  looked at): the figure tab draws a red stroke in the margin joining the end word of
  2.0, 4.0 and 6.0, which the caption joins; and a green stroke joining the name at
  8.0 w3 and at 10.0 w0, which the caption did not join (it spoke only of her turning to
  him with her name). Mended in the caption, which now says he repeats it (change 8).
  No stroke for "his" (2.0 w2, 4.0 w0): told by color, and the caption speaks of the two.
- Other tabs: the six ties of Versions and of English are numbered pairs and land where
  the remarks say; Verbs, Words, Beat, Rhyme and the table of names draw as meant.
  At 390 wide the table of names (five columns) is wider than the screen and its last
  column starts off the edge; the kit sets such a table in a box that scrolls sideways
  (`.facts-wrap` in site/css/atlas.css), so nothing is lost, and no artist has yet
  drawn this tab.
- Layout, for the lead: in the German passages the speakers' names, the stage directions
  and the headings of the numbers are rows of the cut parts and are set at the size of
  the verse (the poet's `open` says so). The tool that cuts a passage cannot mark them.

## 4. The words

Opened by me (zeno.org for Adelung, dwds.de for the DWDS and for Grimm):

- Adelung, Nahmenlos (vol. 3, 1798, col. 420), sense 2: unspeakable, what cannot be named
  or expressed for its amount or the high degree of its intensity, "in the higher style
  of the moderns". Unnennbar (vol. 4, 1801, col. 879): what cannot be named, what there is
  no name for; nothing about style. FAULT: the caption gave "the higher style of the
  moderns" to both words. Mended (change 3).
- Adelung, Er-dulden (vol. 1, 1793, col. 1884): to suffer, to bear, with the secondary
  idea of composure. FAULT: the poet's `open` said Adelung has no such entry; the headword
  is hyphenated at zeno.org. Mended (change 2).
- Adelung, Menschheit (vol. 3, 1798, col. 180): the abstract of Mensch, human nature;
  narrower, the readiness to do the duties of social life (for which Menschlichkeit is
  more usual); third, starred, the human race, "a sense brought in by some moderns" and
  against analogy. DWDS: 1 mankind, 3 (obsolete) the being of man. FAULT: the note said
  "Menschheit is mankind. An older sense, now obsolete, is human nature", which is the
  view from today; in the years of the libretto human nature was the first sense and
  mankind the new one. Mended (change 7).
- Adelung, Trieb (vol. 4, 1801, cols. 677-78), sense 2 (6) and the remark that poets use
  the word for love for the convenience of the rhyme: as cited.
- Adelung, Pflicht (2) (vol. 3, 1798, cols. 743-44): the two senses as cited. The headwords
  at zeno.org are "Pflicht (1), die" and "Pflicht (2), die".
- Adelung, Weib (vol. 4, 1801, cols. 1440-42) with its first note: as cited, the four
  uses in the caption all there.
- Adelung, Wanken sense 2 (d) (cols. 1381-82), Gatte (vol. 2, 1796, col. 432),
  Abscheulich (vol. 1, 1793, col. 90), Dulden (col. 1569): as cited.
- Grimm: namenlos sense 4, unnennbar, tigersinn: as cited. Grimm has no entry for the
  compound in row 7.0 of the aria (not used on the page).
- DWDS: every entry named in a note's source was opened by the poet (cached pages) and
  the ones a caption or note leans on were opened again by me: erdulden, ohnegleichen
  (marked elevated, set after its noun), Selbst (the set phrase with two explanations),
  namenlos, unnennbar, Leid, Lust, übergroß, Grimm (the example from this scene),
  Menschheit, erbleichen, Gattenliebe (its one example is rows 19.0 and 20.0), Weib,
  decken, schwören, ja, Trost, Verderben, vorhaben, noch, abscheulich.
- Grove at Wikisource: Adagio (vol. 1, p. 27: Italian ad agio, at ease; defined "in
  general terms" as very slow), Allegro (pp. 54-55: in music, quick), Con Brio (p. 383:
  "with life and fire"), Recitative (vol. 3, pp. 83-86), Fidelio (vol. 1, p. 519: the
  full title, Sonnleithner after Bouilly, Breuning 1806, Treitschke 1814, Beethoven's wish
  for the title Leonora). The caption had "quick and with fire" for Allegro con brio;
  Grove's words are now given whole (change 4).
- "Der Müden" (14.0 w0-1) as one weary woman or all the weary: the form is the genitive
  of the feminine singular and of the plural. Left as the poet has it.

## 5. Auden

- Lectures on Shakespeare (Kirsch, 2000). The Internet Archive copy can only be borrowed,
  so I ran my own full-text searches inside the item (lecturesonshakes00aude). The quoted
  sentence came back whole and is exact, fifteen words. Before it stands a sentence about
  the two elder sisters; after it, Lear's lines on waking; then the running head
  "226 KING LEAR"; then Cordelia's answer, the comparison with Leonora's doubled answer,
  the sentence on authority, and then Edmund. The index gives Fidelio at 226. The textual
  note keyed to 226 quotes the libretto with the word once, with her next sentence, and
  says the notes of Ansen and of Bodenstein both have it twice; it ends just before the
  head "TEXTUAL NOTES 385". Heads 224, 225 and 227 seen as well. The lecture is dated
  26 March 1947. So pp. 225-26 and p. 384 hold. Not seen page by page (caveat 1, and
  `open`).
- The comparison is with Cordelia's answer in Act 4, Scene 7, not with her "Nothing" of
  Act 1, as the research notes (C section 28, H16, H18) have it. The poet found this and
  put it in `open`; I agree.
- The Dyer's Hand, "Notes on Music and Opera", read in research/auden/dh.txt at the lines
  the poet gives: p. 471 (drama and the mistake, the examples, the two movements; in a
  libretto recognition must be abrupt, closing on the seven quoted words); pp. 471-72
  (the libretto plot as melodrama, situations beyond words, nobody sings when feeling
  sensible); p. 472 (sensible passages glossed as conversation and not song; the
  orchestra and the overture between the scenes of Act 2; poetry as reflection, music
  immediate); p. 473 (the verses as a private letter to the composer; syllables, not
  words; against opera in translation). Each paraphrase in a caption and in the list
  keeps to what he says and says of what he says it (librettos in general). The seven
  quoted words are exact. Running heads checked: p. 471 at line 22157, p. 472 at 22204,
  p. 473 at 22253.
- "No account of this opera by Auden has been found": searched the scans on this machine
  (dh, fa, ef, pearce) and, by full-text search at the Internet Archive, Secondary Worlds
  (three copies), A Certain World, Forewords and Afterwords, the Libretti volume, Prose
  volume 3 and the two prose-and-travel volumes, for the names of the opera and of its
  two chief persons. Only the remark on the overture came back. The sentence stands.
- The reading list of 1941: the heading and the nine titles as the poet describes
  (research notes A, section 1.3).
- The four entries of the list under the passages: all stay. Three bear on the passages
  shown; the first is his one remark that names the opera, in his notes on opera, and it
  is about how the opera is played.
- Quotations of copyright text in the piece: two (the view's sentence, fifteen words; the
  seven words in the Beat caption of the third passage). No more may be added.

## 6. The reason and its ground, tab by tab

answer / Versions. Plate: once with a reason in the German (5.0), twice and no reason in
the English (p:346.0). Sources opened: the note at the head of the zeno.org text (file
line 29; the page itself, fetched, gives its source as Stuttgart 1970, pp. 10-11); the
Rullman libretto (New York; the library record, fetched, dates it 1903), German and
English, both with the word twice (machine-read text lines 6305-6313 and 6456-6464);
the Ditson libretto (Boston; the library record dates it 1864, and the copy prints two
copyright lines, the second of 1892), German twice, English once (lines 3973-3975 and
4044-4046); the Peters vocal score, once and no reason (its dialogue before No. 15).
King Lear 4.7 read. FAULT in the `why`: it said that the answer, shortened, becomes a
denial said twice; the Peters score is shortened and has it once. Mended (change 10).
The caption itself is exact.

answer / Verbs. Plate: the marks. The duet No. 15 counted by me: eighteen printed lines
(file lines 2164 to 2218), three finite verbs, at 2186, 2196 and 2200, each a form of
the verb to be. Auden p. 472 as paraphrased. No change.

answer / Words. See section 4 for the fault. The count: the three words stand on twelve
lines (file lines 285, 305, 1715, 2439, 2453; 389, 2164, 2170, 2214; 561, 2176, 2216);
eleven are sung; 1715 is spoken, by Leonore, and Florestan turns his face four speeches
later (1723). Auden pp. 471-72. In the Auden sentence "for speech" is now "for words",
which is his point (he sets the word in quotation marks) and the point of the tab.

scene / Beat. Plate: the marks. Text: rows 1.0 to 4.0 address the man who has left
(the stage direction at file line 925). FAULT: "At each change she turns: from the man
who has just left to Hope" passes over the seven rows left out, where she still speaks
to him in 5.0 and 6.0 and then of herself (7.0 w2, 11.0 w4-5). Mended (change 4): the
caption now says the recitative begins as a speech to him, and the note at 12.0 says
what the rows left out do. Score: Peters (see change 12 for its date), No. 9,
machine-read text of the scan:
Allegro agitato and Recit. at the head, Poco adagio, Più moto and Allegro in tempo inside
the recitative, Adagio at the call to Hope (score p. 63), Allegro con brio before the
resolve (p. 64). FAULT in `open`: it said no tempo word follows the Allegro con brio.
The same text has Più lento at the head of score p. 65, in the second half of the four
lines to her husband, and Tempo I (misread by the machine, file line 10359 of the
poet's plain text) as they end. Mended in `open` (change 1). Auden p. 473.

scene / Rhyme. Plate: the scheme, counted. Baum, chapter 4, on the stanza rhymed abba:
the third line's rime gains emphasis from its nearness to the second (read in
.cache/handbooks/baum-versification-pg21342.txt). It is said of English four-beat lines;
the caption, a caveat and `open` all say the handbook describes English verse. FAULT,
a small one: "waits three lines" for a rhyme answered in the fourth line. Two lines
stand between, and the model piece says "waits a line" where one line stands between.
Mended (change 5). Adelung on Trieb and rhyme as cited.

scene / Words. Sources in section 4. The count of Pflicht: ten lines (Rocco 818, 1511,
1685, 1727, 1811; Rocco with Leonore 1291; Leonore 967, 983, 1209; Florestan 1554);
1727 is where Rocco says what his duty is. The sentence on Auden says plainly that his
remark is about Cordelia and that the class is then told to compare Leonore's answer;
it does not make him speak of this aria. Left. The word for drive stands once more in
the file, in a stage direction (1901), which is no part of what is sung or spoken.

scene / English. Plate and count: six English lines of 13, 16, 10, 13, 10 and 10
syllables (counted by me), no rhyme. FAULT in the remark of the second tie: "The English
has none" (no image); the next English line has a ray. Mended (change 6). Auden p. 473.

name / Figure. FAULT: "that change is Florestan's part in the discovery" says more than
the rows do (he also cries her name, 10.0), and the `why` rested on the changed word
"standing out", for which no handbook was opened. Mended (change 8): both now say only
what is on the passage.

name / Beat. See section 2. Auden p. 471. "The whole discovery" overstated (her name and
his cry of it follow); "whole" taken out. The note at 13.0 stated a stress as fact; it
now says which voice stresses it (change 9).

name / Words. Adelung on Weib as cited. Counts: the word stands on twelve lines (90,
2004, 2008, 2012, 2024, 2046, 2148, 2156, 2192, 2461, 2489, 2509), one of them before
the passage (90, Jaquino to Marzelline); the word for sworn three times, all Leonore's
(1986, 2024, 2050). The dagger and her first rush forward: 1964 to 1968. Pizarro's
question: 2046. No change.

name / Names. Counted again by me with the speaker of each line: Fidelio fifteen times
in Act 1 (Marzelline 8, Rocco 6, Jaquino 1) and once in Act 2 (Rocco, 1755); Leonore
never in Act 1 and twelve times in Act 2 (Florestan 1566, 1737, 1899; Leonore 2016;
Florestan 2020; then Florestan 2148, 2172, 2206, 2231, Rocco 2355, Fernando 2359, the
chorus 2485). File line 1751 holds a speaker's name inside a speech block and is rightly
left out. The hosted English: Fidelio fourteen, Leonora nine. Auden p. 471. Grove as
cited. No change.

## 7. The prose

Read every caption, `why`, note and remark for house style: American spelling, present
tense, no dash inside a sentence, no rhetorical question, no "not X but Y" turn used as a
flourish, no stock words. Nothing printed says "plate" or "lens". Nothing found beyond
the faults above. A script run at the end over the 257 printed strings found no dash, no
British spelling and no stock word. Three things it listed were left on purpose: "our
own purpose" in the definition of the word for drive (caption and note of the second
passage's word tab) is Adelung's own first person, reported; two plain uses of "but"
that set one fact against another; and the question mark in the gloss of row 4.0 of
the third passage, which is the passage's own.

## 8. The rules

- No line of the libretto is typed into the reading: words and phrases of at most six.
  A script (scratchpad fidelio-exam/overlap2.py) compared every string of the reading
  with the German file, the hosted English and King Lear (the poet's copy of Project
  Gutenberg no. 1532). No run of four words is shared with the German. With Lear the
  one run that is not chance is the four words the Versions caption gives in italics,
  which the brief allows (a phrase of up to six words). With the hosted English the
  longest are one of six small words in the caption of the Names tab (it ends on a
  hyphened word that the script counts as three) and one of five in the gloss of the
  stage direction at row 1.0 of the third passage. A ground of mine had six words
  running with the English direction at fidelio/act-2, block 96; reworded (change 13).
- Copyright: two quotations, fifteen and seven words; everything else of Auden's is
  paraphrase. A second script (fidelio-exam/overlap.py) compared every string with the
  scan of The Dyer's Hand: outside the seven quoted words no run is longer than five
  words, and the runs of four and five are common words that match anywhere in the book.
- The three passages are short enough for a plate (twelve, fourteen and thirteen rows).

## 9. The printed notes

`view.source` and each `auden[].source`: book, year, page. `sources`: one entry for each
thing stood on; the Adelung entry now lists Er-dulden and Menschheit. Each `stands`
within 70 words and four sentences; the links into the hosted English tested (act-2:97,
act-2:113, act-2:259, act-2:314, act-2:407, act-1:35, act-1:166). `caveats`: five, in a
reader's words; the fourth now ends with the count of the three speeches. `open`
corrected in two places and added to (section 10).

## 10. What was changed

All by small exact edits to reading.json, with the checker run after each. No passage,
row, mark, tie, span, part or scan was changed: every fault was in the words.

1. `open`, the item on the tempo marks. It said no tempo word follows the Allegro con
   brio. It now says what the score's text has: Più lento in the second half of the four
   lines to her husband, Tempo I as they end. The ground of the Beat tab of the second
   passage says the same, with the score page (65).
2. `open`, the item on Adelung. It said he has no entry for the verb of 4.0 w9. He has
   (Er-dulden, vol. 1, 1793, col. 1884). The note's source and the `sources` entry for
   Adelung now cite it.
3. answer / Words, caption. "Adelung's dictionary of 1798 gives the sense to the higher
   style of the moderns" spoke of both words; the remark on style is made of the first
   only (the second is in the volume of 1801 and has no such remark). Now "gives
   *namenlos* in this sense to". "Eleven of the twelve" is now "eleven", to keep the
   length. In the sentence from Auden "for speech" is now "for words" (also in the second
   entry of the list under the passages).
   Also there: the ground for the spoken line said she climbs down "into the pit"; the
   direction (file line 1715) has her go a few steps down. Ground corrected.
4. scene / Beat, caption, `why`, a note, grounds and `stands`. The caption no longer says
   that at the first change she turns "from the man who has just left to Hope": it says
   the recitative begins as a speech to him, that the lines shown go four, three, four,
   three and then three, two, two, three, and what she does at each change (calls on
   Hope; says I). The note at 12.0 now tells what the seven rows left out do. "Changes
   twice" is gone (it was true only of the lines shown). Adagio is glossed "very slow"
   and Allegro con brio "quick, with life and fire", which are Grove's words. The `why`
   no longer says she turns "from Pizarro to Hope".
5. scene / Rhyme, caption. "Waits three lines" is now "waits two lines": two lines stand
   between the rhyme and its answer, and the model piece counts the same way ("waits a
   line" for rhyme by turns).
6. scene / English, the remark of the second tie. "The English has none" (no image) is
   now "The English has no star: a lingering heart here, and a ray of joy in its next
   line."
7. scene / Words, the note on 3.0 w3-5, its source, the `stands` and `sources`. The note
   now gives the senses Adelung gives in 1798 and says that the sense usual today is the
   one he calls new.
8. name / Figure, caption, `why` and the plate ground. "That change is Florestan's part
   in the discovery" is now "the man she spoke of speaks for himself"; "here four voices
   make it between them" is "here four voices share it" (length); the caption now says
   that he repeats her name, which is what the green stroke on the page joins. The `why`
   now says only what the rows show: three speeches by four voices end on one word while
   the word before it changes, and his answer is the last two words of her cry with one
   changed.
9. name / Beat, caption, `why`, the note at 13.0, and the fourth caveat. "The whole
   discovery ... takes the room of one line" is now "the discovery ... takes the room of
   one such line"; the `why` says "the length of the last line shown"; the note at 13.0
   says which voice stresses the word instead of stating the stress as fact; the caveat
   on counts now ends by saying that the three speeches as one line is a count.
10. answer / Versions, `why`, the remark of the third tie and its ground. The `why` said
    that her answer, shortened, becomes a denial said twice. A shortened German text (the
    Peters score) has it once. It now says "in the shortened text of two American
    librettos". The remark paraphrased her two clauses with a "so" between them; the
    German has a statement, a semicolon and a question. It now says "and she asks how".
11. `open`: one item added for the lead (the build; see section 0).
12. The date of the vocal score. The reading called it "a vocal score of 1888". That is
    the date in the library record (Internet Archive, fideliooperin2ak00beet). The
    scanned copy itself spells Tür, Tor, getan, Teil and gibt throughout and has none of
    the older forms with th or ie (counted in the machine-read text), which is the
    spelling fixed in 1901: it is a later printing of the edition. FAULT, a small one: a
    date given as fact that the copy contradicts. The `sources` entry now says that the
    library dates it 1888 (as the entry for the New York libretto does); the second and
    third caveats and the `stands` of the Beat tab now name the score without a year;
    `open` and the ground of the Beat tab say why. The remark on spelling is kept out of
    the printed notes, since no source for the history of German spelling was opened.
    The score's own note on its dialogue (as spoken on the stage and as in Reclam's
    opera book) was read: the second caveat holds.

13. answer / Words, the ground for the spoken line, once more: my own wording of the
    stage direction ran six words with the English libretto's (act-2, block 96). One
    verb changed. A ground is not printed.
14. name / Names, caption. "Drama rests on a mistake and moves in two steps" gave to
    drama what the essay (p. 471) says of good drama; its first statement is of drama,
    its second of all good drama. Now "and that good drama moves in two steps". "After
    that" is "afterward", to keep the length at 110 words. The entry in the list under
    the passages already had "a good play".

Nothing was removed: no tab and no passage. The view stands as the poet wrote it.

Read again at the end, sentence against sentence: pp. 471-73 of the essay in the scan
(lines 22157 to 22290) beside every caption, `why` and list entry that reports it, and
the cached snippets of the lecture beside the view and the three places that report
it. Apart from change 14 each keeps to what he says and to what he says it of.

Counts made again at the end, by a script over the hosted English with the speaker of
each speech: Fidelio fourteen times, all in Act 1 (Marceline 7, Rocquo 6, Jacquino 1);
Leonora nine times, all in Act 2 (Florestan at blocks 8, 125 and 226 before the third
passage; Leonora at 297 and Florestan at 299 in it; Florestan at 348, Rocquo at 392,
Don Fernando at 396 and the chorus at 438 after). The note in the first fact of the
Names tab and the fourth caveat hold. The two other places of the word for sworn (file
lines 1986 and 2050) are both death sworn to Pizarro, as the note at 12.0 says. The
score's later tempo words were found again in its machine-read text (Più lento after
the page number 65, with the third of the four lines to her husband under it; Tempo I
where those lines end and the first of them comes again).

## 11. Still doubtful, and for the lead

- Lectures on Shakespeare was not seen page by page, by the poet or by me. The page
  numbers rest on running heads in search snippets, the index and the textual note. The
  punctuation of the quoted sentence should be set against a printed copy.
- The lead in pieces.json ("beside Cordelia's Nothing") and the research notes (C 28,
  H16, H18) are wrong about which answer of Cordelia's is meant. It is the one in Act 4,
  Scene 7.
- The score was read in machine-read text, not in page images. Where the three tempo
  words inside the recitative fall, to the bar, is not known; the Adagio, the Allegro con
  brio and the Più lento are placed by the words printed under them.
- The second passage sets Auden's sentence on Cordelia beside the two grounds of
  Leonore's resolve. He said it of Cordelia and sent the class to Leonore's answer, not
  to this aria. The caption and the first caveat say so. I let it stand because the piece
  claims no more than that.
- The third passage meets Auden only through what he wrote of the craft of the libretto
  (the mistake and its discovery, recognition that must be abrupt: the essay, p. 471),
  not through the view, which is his remark on Cordelia and on Leonore's answer. The
  brief allows that ground, and each caption says of what he said it ("of librettos in
  general", "not from this opera"). The word tab of that passage is about the word
  with which the first passage opens (4.0 w2 there).
- The handbook behind the remark on the enclosed rhyme describes English verse (said in
  the caption, a caveat and `open`).
- That the three short speeches make a line of four beats is one way to count them
  (section 2).
- In the German passages the speakers' names and directions are set as rows at the size
  of the verse. The tools give no way to mark them. If the lead can, they should be set
  small, as the names over the two spoken speeches of the first passage already are.
- Not built in place (section 0). `node build/pieces.mjs fidelio` must be run by the lead.
- The record named for this piece in pieces.json (Leonore's scene, sung in 1924) is not
  mentioned in the reading; the format has no place for it.

## 12. State at the end

2026-10-03, 10:07 UTC. `node build/tools/check-reading.mjs fidelio --print` ends:

    no problems
    no warnings
    the printed notes are fit to print

Three passages, eleven tabs, five caveats, fourteen sources, twelve items in `open`.
Mended, not failed: fourteen changes, all in words (section 10). The site's built copy
of the piece (site/data/pieces/fidelio.json, 09:37 UTC) is older than the reading; the
lead must run `node build/pieces.mjs fidelio`.
