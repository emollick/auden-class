# Orpheus: the poet's notes

Working record of the second poet for this piece. Words of the libretto
are never written here: places are given by text, part, row and word
number, and the checker's proof prints the words.

## Log

- Started. Read the prompt, BRIEF.md and POET.md. Nothing of the first
  poet's reading was saved; the four cuts of the Italian are hosted as
  `o-orpheus`.
- Read pieces.json (orpheus), the model (tempest, first plate) and its
  proof, EXAMINER.md (model's faults, sources, printed notes), section
  25 of C_auden_on_works.md and webfacts no. 5.
- Auden: nothing on the opera itself (C section 25). Only where he puts
  Gluck in the history of opera: FA p. 8 ("The Greeks and Us"), LS p.
  310, "Opera Addict" (P2 p. 401). So `view` is null, with `viewWhy`.
- Hanslick (webfacts 5): the Boyé remark is in chapter 2, but NOT in
  the first edition of 1854; it enters with the second, 1858, p. 25.
  Hanslick quotes the aria by its French words (the Paris version of
  1774), not the Italian. Keep to that.
- Italian source: .cache/originals/gluck_orfeo_ed_euridice_it_ricordi_1879_ia_ocr.txt
  (Milan, Ricordi, 1879: libretto printed for a performance at the
  Milan Conservatory; three acts, the Vienna text of 1762). Raw OCR.
  The English (hosted `orpheus`) is Maggioni's, in four acts.
- `original.mjs cut` copies OCR lines as they stand: it cannot mend a
  misread letter. Any misreading in a line shown must go in `open`.
- The first poet left `.src/` in this folder: page images of the 1879
  libretto (p6..p24.jpg), images of a score (score_n*.jpg, "dorffel"),
  saved Treccani pages (tr_*.html, voc/*.html), Silva Rhetoricae pages
  (silva/*.html), Virgil (verg_g4_*.html), Hanslick from Gutenberg
  (hanslick_pg26949.txt). Information only: each one used is read again
  by me in this session, and fetched again where the claim leans on it.
- The checker and words.mjs divide Italian words by the English rules
  (site/js/kit/syllables.js: only "la" has its own). So most Italian
  words need a "div". To keep from typing the words, the reading is
  built by a small script from numbers (row, word, where the word
  splits); the script takes the letters from the hosted text.
- The hosted English (Maggioni, four acts) follows the four-act Italian
  of the Metropolitan libretto, not Calzabigi's three acts: outside the
  aria it is often not a version of the same Italian lines. Aria in
  English: orpheus/act-4 blocks 82 (4 rows) and 83 (rows 0-2).
- OCR: in this scan a capital R is often read as E or B (lines 517,
  733, 843, 880). Line 876 has a misread letter in its third word; the
  same line comes again clean at 888.

## The Italian text: what was checked

- Seen in the page image of the 1879 libretto (Toronto copy, p. 20,
  `.src/p21.jpg`): the aria is printed indented, in three groups of 4,
  3 and 2 lines; the 2 are the first two lines again. In the first line
  the print itself has a wrong letter in the third word at its first
  appearance, and has the line right when it returns. The plea in the
  third line begins with a capital R in the print; the hosted OCR
  (Toronto scan) reads it as E.
- Second and third witnesses fetched from the Internet Archive into
  `.src/ia/`: `orfeoedeuridicea00calz` (the same 1879 Ricordi libretto,
  the University of North Carolina copy, OCR by tesseract) and
  `orfeoedeuridicea00gluc_0` / `orfeoedeuridicea00gluc` (the libretto
  printed in Milan by Pirola for the Conservatory's performance of
  1862). All agree on the words of the aria and of the recitative
  before it; the UNC OCR has the R right.

## Italian verse: the rules, and where I read them

Read in this session in the saved Treccani pages (`.src/tr_*.html`):

- Vocabolario Treccani, "ottonario": eight syllables (more properly
  eight metrical positions), principal accents on the third and the
  seventh. Enciclopedia on line, "ottonario": the same.
- Enciclopedia dell'Italiano (2011), "versificazione" (Claudio
  Ciociola): a line is named from the place of its last stress plus
  one, so a line that ends on its stressed syllable (tronco) keeps its
  name with one syllable fewer. Ottonario: last stress on the 7th, the
  scheme 3rd and 7th prevailing; after Dante and Petrarch used only in
  religious verse and verse for music. Settenario: last stress on the
  6th, one other accent, free; with the endecasillabo the commonest
  line of the lyric. Quinario: last stress on the 4th. Endecasillabo:
  last stress on the 10th, with an accent on the 4th or the 6th.
- Enciclopedia dell'Italiano (2011), "sinalefe" (Sergio Bozzola): a
  final vowel and the vowel that begins the next word count as one
  syllable; a pause or a stop between them does not prevent it.
- Vocabolario Treccani, "tronco": a word stressed on its last
  syllable; a verso tronco ends with one.

## More sources read in this session

- Seen in page images of the 1879 libretto (`.src/p9.jpg`, `p10.jpg`,
  `p21.jpg` = printed pp. 8, 9, 20): the three strophes of the Act 1
  song, each printed as two groups of three lines, indented, between
  recitative set flush left; Love's terms; the recitative and aria of
  Act 3. The print sets a space before a comma, a semicolon, an
  exclamation mark and after an apostrophe; the hosted text keeps them.
  The verb in the first line of the hosted "law" cut has a circumflex in
  the print and a grave in the hosted OCR.
- The score: *Orpheus: Oper in drei Akten*, in Partitur herausgegeben
  von Alfred Dörffel (Leipzig: C. F. Peters, plate 5518; Internet
  Archive `orpheusoperindre00gluc`), no. 43, pp. 132-135, seen in
  `.src/score_n147..n150.jpg`. No sharps or flats in the signature,
  first and last chords on C: C major. "Andante con moto", cut time.
  The two opening lines are sung three times: from bar 7, at "Tempo I"
  (letter O, bar 31) and at "Tempo I" (letter P, bar 51). Between them:
  the third and fourth lines (the fourth marked "Adagio", bar 25); then
  "Moderato" for the name and "Adagio" for the fifth to seventh lines
  (bars 41-49), where flats enter. 71 bars. The score underlays the
  fourth line's last word in its full, untruncated form; the libretto
  prints it truncated. Dörffel's foreword: first performance Vienna, 5
  October 1762; score printed in Paris at the end of 1764; Paris version
  2 August 1774, Orpheus recast for high tenor; this edition joins the
  two and keeps Orpheus in the contralto range, after Berlioz (1859).
- Ernest Newman, *Gluck and the Opera* (1895), Internet Archive
  `cu31924022243152`: p. 145, in the Paris version the aria was moved
  from C to F; pp. 92-93, Gluck's dedication of *Paride ed Elena*: make
  the least change in the aria's movement or turn of expression and it
  becomes "an air of marionettes" (Newman's English, from
  Desnoiresterres's French).
- Hanslick, *Vom Musikalisch-Schönen*, Gutenberg no. 26949 (the text of
  the 13th-15th edition), chapter 2, read in `.src/hanslick_pg26949.txt`
  lines 1141-1166. Matches webfacts no. 5.
- Auden: `fa.txt` lines 410-418, "The Greeks and Us", p. 8 (pages
  counted from the title on p. 3 by the running heads).
- Treccani, Enciclopedia dell'Italiano (2011), "melodramma, lingua del"
  (Fabio Rossi): recitative in more prose-like lines, usually unrhymed
  hendecasyllables; arias and other closed numbers in strophes,
  strictly rhymed, with lines often repeated, often in lines of eight,
  seven or five. "rima": a tronco rhyme in a consonant (amor : cor) is
  the mark of the ode-canzonetta tradition. Enciclopedia on line,
  "recitativo": singing that follows the cadences of speech and makes
  no closed melody. Vocabolario, "canzonetta" (fetched): short lines,
  generally set to music. Vocabolario, "bene" (noun): what joy comes
  from; hence the person loved.
- Dizionario Biografico degli Italiani, vol. 17 (1974), "Calzabigi"
  (Clara Gabanizza): his aims about 1760. It calls the Act 1 lament by
  the name of the Act 3 aria: a slip. Not used for the form.
- Silva Rhetoricae (saved pages): apostrophe, ecphonesis, epistrophe,
  isocolon, polyptoton, anaphora.
- Counted in both scans of the 1879 libretto: the verb for "answer"
  stands in five lines (the last line of each of the three strophes of
  the Act 1 song; Eurydice's demand in Act 3; the aria). The two words
  for "forever" stand three times in the dialogue (Love's terms;
  Orpheus when she dies; Orpheus after the aria). The word for "law"
  stands four times, always in Orpheus's mouth; Love says pact and ban.

## The cuts of the Italian

- `o-orpheus/aria` was cut again by me, through `original.mjs`, from a
  second scan of the same 1879 libretto: the copy of the University of
  North Carolina at Chapel Hill (Internet Archive
  `orfeoedeuridicea00calz`, OCR by tesseract), fetched with the tool's
  own `fetch` as
  `.cache/originals/gluck_orfeo_ed_euridice_it_ricordi_1879_unc_ocr.txt`.
  Reason: the first cut (Toronto scan) had the plea of the third line
  with a wrong first letter. Lines taken: 1010, 1004, 1005-1006,
  1007-1009, as four blocks, so that the page sets the seven lines as
  2 + 2 + 3 with a little space between the groups. The first line is
  taken from its return (file line 1010) because the print has a wrong
  letter in it at its first appearance (file line 1003). The first
  poet's cut is kept in `.src/aria.first-cut.json`.
- Rows of the aria now: 0.0, 1.0 (the two opening lines), 2.0-2.1,
  3.0-3.2.
- `call`, `law`, `loss` are the first poet's cuts from the Toronto scan
  and are used as they stand.
- `put.mjs` in this folder builds `reading.json` from the small files
  in `parts/`. A beat lens there gives, for each word that needs it,
  the places where the word splits ("cuts", counted in letters); the
  script takes the letters from the hosted text and writes the "div".
  `reading.json` is the file handed in; `parts/` is the working copy.

## Corrections and additions (after the bars were counted)

- BAR NUMBERS. The entry above on the score gives some bars from a
  reader's pencilled numbers in the scanned copy; those count the upbeat
  as bar 1 and run one ahead. Counted again by me from crops of the four
  pages (`.src/crops/`), system by system, upbeat not counted: p. 132
  has bars 1-5, 6-11, 12-17; p. 133 has 18-23, 24-28, 29-34; p. 134 has
  35-40, 41-46, 47-52; p. 135 has 53-57, 58-63, 64-70. So: orchestra
  alone bars 1-6; the two opening lines from bar 7 (the voice's upbeat
  in bar 6) to the first beat of bar 16 (rehearsal letter N there); the
  third line from the upbeat in bar 17, at the first tempo, to a pause
  in bar 24; "Adagio" in bar 24 for the fourth line, to pauses in bar
  29; "Tempo I" and letter O at bar 30, the two lines again to the
  first beat of bar 39; the name twice, "Moderato" at bar 40, pauses in
  bars 40 and 41; "Adagio" at bar 42 for the rest of the fifth line and
  the sixth and seventh, to pauses in bars 47-48; "Tempo I" and letter P
  at bar 49, the two lines a third time, the voice ending in bar 63;
  orchestra alone bars 64-70. 70 bars and an upbeat (the pencil's 71).
- A FOURTH WITNESS OF THE WORDS, and an old one: the libretto printed at
  Bologna in 1771 (Stamperia del Sassi; Internet Archive
  `orfeoedeuridicee00gluc`, `.src/ia/orfeoedeuridicee00gluc.txt`, OCR
  with the long s read as f). Its lines 899-926 have the recitative,
  the seven lines of the aria and the two opening lines again, and the
  lines after: the same words as the 1879 libretto, the fourth line
  ending in the cut-short word, the first line without the 1879
  misprint. Counted there too: the verb for "answer" at lines 346, 364,
  377, 801, 918 (a sixth, line 1820, is in the other drama of the same
  volume); "forever" in the dialogue at 443, 899, 925 (and once in the
  prose Argument, line 63); the word for "law" at 484, 745, 872, 899.
  The Argument itself says "pact" and "ban".
- NEWMAN, PAGES. The dedication is quoted on pp. 92-93; the sentence on
  the aria is on p. 93; p. 94 says it is the dedication of *Paris and
  Helen* to the Duke of Braganza, in the score published at Vienna in
  1770. P. 145: for Paris the title part was recast for a
  counter-tenor and the aria moved from C into F. P. 65: in the aria
  "we have something of a reminiscence of the Orpheus of the first act".
- The saved encyclopedia article (`.src/wp_orfeo.txt`, English
  Wikipedia, "Orfeo ed Euridice", citing the New Grove Dictionary of
  Opera) calls the Act 1 song strophic, each verse followed by
  recitative, and the Act 3 aria a rondo. Used only as a pointer: the
  form is taken from the score.
- The Internet Archive record of the English libretto
  (`orfeoeeuridicely00glucuoft`, University of Toronto) dates it
  "[190-]": no date on the book.
- A search of the Internet Archive found no score of the Vienna version
  (the Paris engraving of 1764, or the Denkmäler edition): the mirrored
  scores there are of the French version (des Lauriers and later).

## The plates: why these passages, and what was decided

### First plate: the aria (Italian, with Maggioni's English line under line)

- Why: it is the piece. Seven lines; the libretto prints the first two
  again at the end, and the plate shows the seven once.
- Count. Every line counted by the rule (Treccani, "versificazione",
  "sinalefe"), and the count proved by the checker: eight syllables in
  the first, third, fifth and sixth lines, seven in the second, fourth
  and seventh, a stress on the third and the seventh in all seven.
  OTHER WAYS OF HEARING: (1) the third and fifth lines need the name's
  last vowel to count as one with the cry after it, across a stop and
  points of suspension; a reader who keeps them apart gets nine. The
  entry "sinalefe" allows it across a pause (its examples are a comma
  and a semicolon), and the line cannot be an eight otherwise. (2) The
  first words of the first, second, fourth and sixth lines are marked
  with a light stress; they could be marked unstressed. (3) In the third
  line the word for God is marked as a full stress on the fifth
  syllable; the cry before it is marked unstressed and could take a
  light stress. No caption leans on any of these.
- Endings. The unrhymed lines carry the letter x. The thread joins the
  stressed ending of the two verbs in the first and second lines, and
  the word that follows each.
- Calls. Apostrophe; underlines only (join "none"). The reason is taken
  from the scene itself: her charge and her order on p. 17 of the 1879
  libretto, his reply on pp. 17 and 18 (seen in the page image of p.
  17). The word in the fourth line that I gloss "truly, even so" has two
  senses in the dictionary ("pure", 1 c and 3 a); the caption gives
  both.
- Rondo. Facts from the Peters score, bars counted by me (see above).
  "About half its 70 bars": the voice sings the two lines in 35 bars; 36
  if the orchestral bar 17 is given to the first statement.
  Gluck's remark is given from Newman's English ("an air of
  marionettes"); other translations say a saltarello, a dance (so the
  saved encyclopedia article, after Noiray). The caption says "a tune
  for puppets".

### Second plate: Love's terms beside Orpheus before and after the aria

- Why: the six words of Love's threat come back in Orpheus's mouth, and
  his words for his loss go on into the aria. Both passages are
  Italian; there is no English for them in the hosted libretto (it
  follows a later four-act Italian text), so a Words tab gives the
  sense.
- The hosted "law" cut begins in mid-sentence: the object of its first
  verb (the ban) is in the line before. The hosted "loss" cut ends its
  fourth and sixth rows in mid-sentence, so only the first three words
  of the fourth and the first four of the sixth are shown.
- Petrarch: Vocabolario Treccani, "avanzare" (2), gives as its first
  example line 32 of Canzoniere 268. Read at it.wikisource.org
  (Canzoniere, the canzone that opens by asking Love what he must do):
  line 1 the question and the counsel; lines 29-32: without her he
  loves neither life nor himself, weeping he calls her back, and that
  is what is left him of so much hope; line 34 says her face is earth.
  The number 268 is taken from its place between the two poems
  Wikisource links before and after it; not checked in a printed
  edition. I do not say Calzabigi took the words from Petrarch.
- Measure. Proved by the checker: Love 11, 11, 7, 11; Orpheus 11, 11,
  11, and after the aria 7. Seven of the eight lines stress the third
  and sixth syllables, so the caption does not say the stresses move
  about. The fourth and sixth rows of the second passage are shown in
  part and not scanned (in full they are elevens). OTHER WAYS: the
  cries in the second row of Orpheus are marked unstressed and could
  take light stresses.
- "Six words", not five: the phrase is tokens 0 to 5 of its row.

### Third plate: the song at the tomb (Italian, with Maggioni's English)

- Why: the aria orders her to answer, and that is the fifth and last
  place where the libretto has the verb for answering. The first three
  are the last lines of the three strophes of this song. So the plate
  shows where the aria's order comes from. Newman (1895), p. 65, hears
  in the aria a reminiscence of the Orpheus of the first act; I do not
  lean on him, the count of the verb is enough.
- The passage is the first strophe only (hosted `o-orpheus/call`, rows
  0.0-0.2 and 1.0-1.2). The second and third strophes are not hosted;
  what the captions say of them was read in the page image of p. 8
  (`.src/p9.jpg`), in the UNC scan text (lines 302-330) and in the
  Bologna libretto of 1771 (lines 340-377).
- Rhyme. Letters a a b, c c b; the letters of each rhyme counted from
  the stressed vowel (one letter for the two lines that stop on a
  stressed vowel). No Count tab here: the first plate teaches the
  count. The count was still proved, in a scratch scan
  (`parts/song-count.scratch.json`, put in, proved by the checker and
  taken out again): the first, second, fourth and fifth lines are sevens
  that stop on their sixth syllable, the third and sixth are fives.
  OTHER WAYS OF HEARING: none that changes the rhyme.
- Strophes. Facts from p. 8. In the third strophe the fourth and fifth
  lines end on an unstressed syllable (full sevens); the first two
  strophes have them stopped. The facts say so.
- English. See the next section: the caption was written twice.

## The English libretto: what its own Italian says (found late)

- The scan text of the Italian and English libretto
  (`.cache/texts/ia_orfeoeeuridicely00glucuoft_djvu.txt`) has the
  Italian of the left-hand pages too. Read there:
  - Front matter: before the title page stands the Metropolitan Opera's
    program for Wednesday 29 November 1939 (season 1939-1940, Kerstin
    Thorborg as Orfeo, Erich Leinsdorf conducting; "Opera in Four Acts
    (Five Scenes)"). The title page: a lyric play in four acts, the
    libretto edited and translated by Manfredo Maggioni, published by F.
    Rullman, New York. No date on the title page.
  - The song (file lines 282-291): two strophes only. In the first
    strophe the third, fifth and sixth lines are Calzabigi's. The first
    line is another line: it begins with the pronoun for "thee", its
    verb is the verb for seeking (the verb for calling does not occur
    anywhere in that Italian), and it names her "my faithful one". The
    second line says that the day returns in the sky. The fourth has no
    "but" at its head.
  - The aria (file lines 1617-1621 and after): the seven lines are
    Calzabigi's, with small differences (the word for "without" elided
    before the name; no separate cry before the word for God; in the
    sixth line a "nor" where Calzabigi repeats "more"). After the seven
    lines stand others that the libretto of 1762 does not have, and the
    English follows them (hosted act-4, block 83, rows 3 and after).
  - The exchange before the aria in Calzabigi (her charge, her order to
    answer, his "come, and be silent" twice: UNC scan lines 812, 828,
    844, 849; Bologna 1771 lines 777-802) is not in the hosted English.
- What follows for the reading: the English is beside a later Italian
  text, so a difference between Maggioni's English and Calzabigi is not
  always Maggioni's doing. His first line has "thee", as that later
  Italian has; but its verb is "call", which is Calzabigi's verb and not
  the later text's. I could not tell which Italian he worked from. The
  English tab therefore says what each text has (the English says thee;
  so does the Italian printed with it; Calzabigi's line is about her)
  and gives to Maggioni only what is plainly his: the English rhymes
  (first line with third) and the two rhyme words that move the sense.
- The English is not fitted to the notes: counted on the proof, its
  lines in the aria run from six syllables to ten against the Italian
  seven and eight, and in the song four to six against the Italian five and six.
  The second caveat says it is verse for reading.

## The checker's warnings, and the answers

- `about` over 90 words: mended (84 words, four sentences).
- "Echo" in the Strophes caption (RULE THREE lint): kept. It is not a
  claim about what the passage stands for. Echo is the answerer the
  libretto itself names: the sixth line of the second strophe says that
  Echo answers, and the fourth that she alone does (the libretto of
  1879, p. 8; UNC scan text lines 316-318; Bologna 1771, line 364). The
  capital is the libretto's.
- Two caveats over 50 words: shortened.

## Mended at the last reading of the captions

- Count: "used after Petrarch only for religious verse and verse for
  music" became "since Petrarch's time a line of religious verse and of
  verse for music". The entry ("versificazione") says only, and then
  adds that the line returns to favor in the ode-canzonetta and the
  Romantic ballad; so no "only". Also "longer lines without rhyme"
  became "that do not rhyme until its close" (the last two lines before
  the aria rhyme: UNC scan lines 1001-1002).
- Words: "They are old words for this grief" became "Petrarch used
  these words for this grief": one poem, named.
- Calls: "his whole reply was to tell her to be silent" became "both
  times his reply was to tell her to come and be silent" (he says it
  after her charge and again after her order).
- The label of the Italian on the first and third plates is now
  "Calzabigi’s Italian" (it was "Calzabigi, 1762"): the words shown are
  from the prints of 1879 and 1771, and no print of 1762 was seen.
- Auden's sentence: the paraphrase no longer says he names the opera
  "once" (research note C lists two other places I did not read).

## Looked for and not found

- Anything by Auden on this opera. Research note C, section 25, finds
  none; the one sentence I read in a scan (Forewords and Afterwords, p.
  8) uses the opera as a date. `view` is null, with `viewWhy`.
- The Vienna libretto of 1762 and the score printed in 1764. The words
  stand on the prints of Bologna 1771 and Milan 1879, which agree in
  every line shown (the Milan print of 1862 was compared for the aria
  and the recitative before it only).
- The first printing of Maggioni's version, and his dates. The scan of
  the libretto has a program of 1939 before its title page; the library
  record says "[190-]".
- What the record of about 1922 sings (language, key, cuts). No caption
  describes it.
- Where Calzabigi found the words that Petrarch also uses. Nothing
  says he took them from the poem, and the piece does not say so.

## Where each thing was read (short list)

- The Italian shown: hosted `o-orpheus` (aria, law, loss, call), read
  only in tool output; each line seen again in the UNC scan text and in
  the page images `.src/p9.jpg` (p. 8), `p10.jpg` (p. 9), `p21.jpg`
  (p. 20), and in the Bologna libretto of 1771.
- The rest of the libretto of 1879 (not hosted), UNC scan text: Love's
  pact and ban, lines 386-396 (p. 9); the word for law, lines 438, 759,
  938, 997; her wish for one look, line 804; her charge and order,
  lines 812 and 844; his replies, 828 and 849; the stage directions
  that he turns and looks (976) and that she dies (983); the rhymed
  pair before the aria, 1001-1002; the lines after the aria and the
  direction that he tries to wound himself, 1012-1019; the strophes
  and the recitatives between, 302-334; the scene heads, 242, 345, 669.
- The score: `.src/score_n147..n150.jpg` and `.src/crops/` (Dörffel,
  Peters, no. 43, pp. 132-135); bars counted by me (see "Corrections").
- Verse: saved Treccani pages `.src/tr_*.html` (versificazione,
  sinalefe, rima, ottonario, tronco, recitativo, melodramma lingua
  del); Vocabolario entries in `.src/voc/*.html`.
- Words: `.src/voc/*.html`, one page for each entry named in a ground.
- Petrarch: it.wikisource.org (saved in the session scratchpad as
  `ws_petrarca268.html`).
- Hanslick: `.src/hanslick_pg26949.txt`, lines 1141-1166, and research
  note `remake/research/webfacts.md` no. 5.
- Newman: `.src/ia/newman1895.txt` (pp. 65, 92-94, 145).
- Apostrophe: `.src/silva/apostrophe.html`, fetched again this session.
- Auden: session scratchpad, `research/auden/fa.txt`, lines 410-418.
- The English: hosted `orpheus` (act-1 blocks 17-18; act-4 blocks 82-83)
  and the scan text named above for its Italian column.

## Files in this folder

- `reading.json`: the file handed in. It is built, not written by
  hand: `node remake/works/orpheus/put.mjs top parts/top.json`,
  `... plate parts/<plate>.json`, `... lens <plateId> parts/<lens>.json`
  (run from the project root). `parts/` holds one small file for the
  top fields, one for each plate and one for each tab. In a beat tab
  the file gives `cuts` (where a word divides, counted in letters) and
  the script writes the `div` from the hosted words, so that no word of
  the libretto has to be typed.
- `parts/song-count.scratch.json`: the proof of the strophe's count. It
  is not part of the reading.
- `.src/`: saved pages, page images and scan texts (the first poet's
  and mine). Information only.
- State at hand-in: `node build/tools/check-reading.mjs orpheus` says
  no problems, one warning (Echo, answered above), and "the printed
  notes are fit to print".

## Set by the lead from the artist's proposals (3 October 2026, 11:42 UTC)

Both things the artist set out in art.md, part 2, are now in
reading.json.

- A key `the libretto prints` in the facts of Rondo: the groups of
  lines as the libretto of 1879 prints the aria on p. 20 (lines 1 to 4,
  lines 5 to 7, then lines 1 and 2 again). The artist read the page
  image twice, and the examiner's record reads it the same way (exam.md,
  the last item of the part on the two shape tabs). The drawing now sets
  a stroke for each printed line under the bars that sing it, and the
  middle return has nothing under it, which is what the caption's fourth
  sentence says.
- The list of the five places of the verb is now named `the verb for
  answering in the libretto`. Its name is printed as a heading, under
  three strophes that each begin with a different verb.

Checker after: no problems; the one warning stood before (the name Echo
in the Strophes caption, which is the libretto's own). Seen in the
browser at 1280 and 390.

For the lead still: the hosted Italian has a space before some stops and
not others, and three straight apostrophes (art.md, part 4).

## The finisher's changes after the critic (3 October 2026, 13:12 UTC)

Read before anything was changed: BRIEF.md, FINISHER.md, CRITIC.md and
EXAMINER.md; critic.md (all 634 lines), art.md, exam.md and this file;
reading.json and site/js/pieces/orpheus.js in full. Twelve points set,
thirteen left, eleven things passed up (the list is at the end).

The words changed at 12:58 UTC, by 36 exact edits in four lists
(`finisher/edits-1-top.json` to `edits-4-song.json`), all of them in
reading.json. `finisher/before.json` is the reading as the critic left
it. `site/js/pieces/orpheus.js` was not changed: it is identical to
`finisher/orpheus.js.before`.

### Every change

**1. `auden[0]`: the display quotation is out (critic, section 5).**
Where: `auden[0].quote` (removed), `.says` (two places), `.checked`.
What was wrong: his six words stood in display type under the heading
"What Auden said", where they read as his verdict on this opera. In
his sentence they name 125 years of opera. Now: the paragraph is kept,
as the critic advised, and the six words stand in quotation marks
inside its third sentence, after "which he calls". "In one medium" is
now "in a single medium", because with it the sentence shared a run of
five words with his. The quotation is six words and the only one in
the piece. Ground: *Forewords and Afterwords*, p. 8, in the scan text
fa.txt, lines 410 to 418, read in this run: the first paragraph of the
essay's third part, which grants three things and then turns against
them. The paragraph on the page gives the third of the three and
nothing of the turn. The page number: the contents (fa.txt, line 86)
have the essay begin on p. 3, and the running heads fall at lines 171,
201, 250, 298, 350 and 400, the next at 448. Tested with
`python3 build/tools/runs.py` against fa.txt: outside the quotation
the longest run shared with his sentence is four words.

**2. Rondo, facts: the two flats are out of print (critic 6.1).**
Where: `plates[0].lenses[3].facts.sections[4]`: the key `flats` is now
a working key `note`. What was wrong: with the pointer on the section
of lines 5 to 7, the line under the drawing ended on a sentence saying
that two flats come in at the Adagio. It gave an observation and no
reason (RULE TWO); only a reader of music could use it; and its first
two words read as an article and a noun. Nothing read says what the
flats do there, so no reason could be added. Now: the line ends at the
pause (seen in `shots/finisher/point-rondo-lines-5-to-7-1280.png`).
The fact is kept in the unprinted note with its place in the score, as
the examiner saw it (exam.md, section 7). I did not open the score,
and no number changed. No ground was needed: the script prints the key
only where it is present (orpheus.js, line 89), and a key named `note`
is not printed (build/lib/printed.mjs).

**3. Strophes, facts: the third verb's meaning (critic 6.2 and 9.8).**
Where: `plates[2].lenses[1].facts.strophes[2]["in English"]`. What was
wrong: the drawing gave it with a preposition left hanging ("I weep
for") and the caption without one. Now: "I weep", as in the caption
and like the other two labels, which give the verb alone ("I call",
"I seek"). Ground: *Vocabolario Treccani*, "piangere", sense 1 a (to
shed tears), read in this run in `.src/voc/piangere.html`.

**4. Strophes, facts: two colons in one line (critic 6.3).** Where:
`...facts.between[1].recitative`. The script sets "recitative:" before
the string, which had a colon of its own. Now it has a semicolon. What
it says did not change. I read the second recitative again in the scan
text of the libretto of 1879 (p. 8; lines 319 to 324).

**5. Strophes, facts: the rhyme endings (critic 6.4).** Where:
`...facts.strophes[0].rhymes`, `[1]` and `[2]`. What was wrong: the
endings stood bare in an English sentence, and the last of them reads
as an English word. Now each is marked as a word named, and the line
under the drawing sets them in the other face (seen in
`shots/finisher/point-strophes-first-1280.png`). The endings did not
change. I read the ends of the eighteen lines in the scan text (lines
302 to 307, 313 to 318 and 325 to 330) and they are as the facts have
them: the third strophe alone differs, in its fourth and fifth lines.

**6. Strophes, facts: how the sevens count (critic 6.5).** Where:
`...facts["every strophe"]["how the sevens count"]`, the tab's
`grounds` (one entry added) and `stands` (one sentence added; 56
words). What was wrong: the drawing's key said that the sevens count
"by name", which tells a reader nothing. Now: "by the place of the
last stress", the critic's words; the rest of the string stands.
Ground: Treccani, *Enciclopedia dell'Italiano* (2011), "versificazione"
(Claudio Ciociola), read in this run in the saved page
(`.src/tr_versificazione___nciclopedia_dell__taliano_.html`): the last
stressed place gives a line its name, which is the number of that
place and one more, whatever follows it without stress; the line of
seven has its last stress in the sixth place.

**7. One name for the third line of the aria: the order (critic 9.1).**
Where: the caption of Endings (third sentence), the caption of Rondo
(third sentence), `plates[0].lenses[3].facts.sections[2].name`, the
`why` of Rondo (not printed on the page), and that tab's `grounds[0]`
and `grounds[3]`. What was wrong: lines 3 and 4 were "the plea" in
those three printed places and an order in seven others (Calls,
Strophes and the list in the Strophes drawing). Now: "the order to
answer" in all three ("the order" in `why`). Why this name: the third
line (p. 20; scan line 1005) is her name, a cry and the verb in the
imperative, each closed by an exclamation mark, and no word in it
asks. The same form of the same verb is what Eurydice says to him
earlier in the scene, with an insult (p. 18; scan line 844; his two
replies at lines 828 and 849), and nobody would call that a plea.
Calls turns on the word coming back, so it needs one name for her use
and for his. That his is also a plea is a judgment of tone, and the
lines do not state it. Ground: the libretto of 1879, scan lines 800 to
852 and 1003 to 1009, read in this run; *Vocabolario Treccani*,
"imperativo" (`.src/voc/imperativo.html`, read in this run), which
has the mood named from commanding, and expressing command or, as the
case may be, entreaty. Seen in the pictures of Endings and Rondo at
1280 and 390.

**8. Words: Petrarch's poem is no longer described (critic 9.2).**
Where: `plates[1].lenses[0]`: the caption (one sentence cut; 89 words),
`notes[12].note` (reworded), `notes[13]` (its note removed, its source
cut down to the dictionary), `why` (one clause cut), `grounds[4]`
(claim and source rewritten, the old record kept after the new),
`stands` (one sentence rewritten; 62 words); and `sources[7]`. What
was wrong: the caption and two side notes told what Petrarch's poem on
the death of Laura asks at its opening, and that it has the same verb
for what is left of hope, beside Orpheus's lines. Every clause was
true and tested (exam.md, section 7). But no source the piece cites
sets that poem beside the libretto. The dictionary gives one line of
it as its first example of a sense of the verb; the encyclopedia says
of serious opera in general that it drew its language from the line of
Petrarch, Tasso and Metastasio. Set together, the sentences led a
reader to conclude that these lines come from that poem, and nothing
read says so. Now: the caption goes from "hope replaces counsel" to
its last sentence, which stands on the encyclopedia. The note on the
verb says what the dictionary says, that its first example of this
sense is a line of Petrarch. `stands` and Sources say which line.
Ground: *Vocabolario Treccani*, "avanzare" (2), sense 1 a
(`.src/voc/avanzare2.html`), read in this run: the first example is
given to Petrarch, the second to Leopardi, the rest are of daily
speech. *Enciclopedia dell'Italiano*, "melodramma, lingua del" (Fabio
Rossi; `.src/tr_melodramma.html`), read in this run. The page of the
line: the full text of *Le rime* (1904) at the Internet Archive
(`lerimesecondolar00petruoft`), fetched in this run: poem 268 begins
on p. 258; the head of p. 259 is at line 11985 of that file; the line
numbered 25 is the first on the page, and the line with the verb is
the eighth, at line 11995. The fetched copy was deleted after the
count.

**9. Count: the ground of "sung speech" (critic 9.9).** Where:
`plates[0].lenses[0].grounds` (one entry added) and `.stands` (one
sentence added; 70 words, the limit). What was wrong: the two words
came into the caption with the critic and stood on an entry that was a
ground of Measure and in Sources, and was not among this tab's
grounds. Now it is. Ground: Treccani, *Enciclopedia on line*,
"recitativo" (treccani.it/enciclopedia/recitativo), the first sentence
of the entry, read in this run in `.src/tr_recitativo.html`: a way of
singing that follows the cadences and inflections of speech and makes
no closed melody. A page on line has no page number; the place is the
entry's first sentence.

**10. The fifth caveat says who did not hear (critic 9.10).** Where:
`caveats[4]`, its second clause. It said "the record on this page was
not heard". Now: "this page was made without hearing the record on
it" (the caveat is 50 words, the limit). Ground: the eighth item of
`open`, which is the makers' own record that nobody heard it; I did
not hear it either.

**11. Read on: a note now says which libretto the link leads to
(critic 10.3).** Where: the top level of reading.json: the key `next`
is replaced by `nextNote` and `nextLinks`. What was wrong: under Read
on a bare link led into Act 1 of the English libretto, a reworked text
in four acts, and nothing at the link said so; the aria this page is
about stands in its Act 4, and the page calls the scene Act 3
throughout. Now: a note of 21 words, then the link, with the same
address (orpheus/act-1:0) and the label "Orpheus and Eurydice, Act 1".
The note says that Calzabigi's libretto has three acts, that the
English one printed here, Maggioni's, has four, and that the aria
stands in its Act 4. How: the reading's one place for a note under
Read on is `nextNote`, which the page prints only where `next` is
absent (site/js/piece.js, lines 84 to 98); the build takes under
`nextLinks` a link into a book printed here, and its comment says so
(build/pieces.mjs, lines 234 to 243). Ground: the libretto of 1879 has
three acts (scan text: the acts are headed at lines 238, 452 and 663,
and the end is at 1221); the hosted text has four parts, Act 1 to
Act 4, and names Maggioni as translator
(`node build/tools/show.mjs orpheus`); the aria's English is taken
from its Act 4 (`plates[0].pair.text` is orpheus/act-4, rows 82 and
83, which the checker proves against the hosted text). Seen in the
pictures of the page at 1280 and 390. To undo it: put back
`"next": "orpheus/act-1:0"` and take the two keys out
(`finisher/edits-1-top.json` holds both forms).

**12. `about`: "The god Love" (critic 9.7).** Where: `about`, second
sentence (86 words; the limit is 90). What was wrong: nothing on the
page said who Love is, and a reader had only the capital letter to go
on. Now the sentence begins "The god Love set the terms". Ground: the
libretto of 1879, read in this run: Love enters and speaks as a person
of the opera (scan lines 346 and 349), brings word of Jove's pity
(line 356), and the last scene is set in a temple dedicated to him
(line 1132). In the English printed here LOVE is a speaker (Act 1,
block 25).

**The list `open`** was kept true: its first item now says what was
done with the entry under `auden`; its ninth says that the lead set
the key the artist's module reads; and a new last item says what the
finisher set for the lead to look at (Read on, the flats, Petrarch),
with the way to undo the first.

### Every point left, and why

1. **Return, caption: "word for word" (critic 9.3).** Left. It is true
   of the six words, and the sentence before it has just told the
   reader that the verb changes a letter.
2. **Calls, caption: "Now the order is his" (critic 9.4).** Left. It
   is what the libretto has, her order and then his, and with change 7
   the page now uses that one name everywhere.
3. **Rondo, caption, the last sentence (critic 9.5).** Left. The two
   remarks are reported and nothing is said of what they show. To say
   it would be a new claim, and I opened no source for one.
4. **Rondo, caption: "so the middle return is the score's" (critic
   9.6).** Left. Terse and not wrong, and the drawing's new row shows
   it.
5. **Rhyme, caption: "a stanza of the song" (critic 9.9).** Left, and
   no ground added: it is a plain word for a term. For whoever wants
   one, the *New English Dictionary* under "Strophe", sense 1, has the
   word used of modern verse for a stanza (`ned_oed9aarch.txt`, line
   521289 and after, read in this run).
6. **"What Auden said": "125" in figures, and "found" twice in the
   first two sentences.** Left. The figures keep the paraphrase off
   his words, where the number is spelled out; the two "found" say two
   different things (no account; one mention).
7. **The examiner's thought that all nine operas on the list fall
   inside his 125 years (exam.md, the part on `auden`).** Left out of
   the page. No source was opened for the other eight dates, and it
   would be the page's conclusion and not his.
8. **Endings: the third cut word has no color at rest (art.md, part 4;
   critic 7.3).** Left. It is a mark and not a word. The word ends a
   line that rhymes with nothing, as the caption says, so a rhyme's
   color would be false there.
9. **What recurs (critic, section 8).** Left as the critic left it.
   The repeated turns ("the same", "stops on", "still", a word and at
   once its meaning) are the method of the page or its subject. I
   added none: the new sentences in `stands` follow the form of the
   others.
10. **The second passage has no English under its lines (critic
    10.5).** Left. `pair` and `beside` are not mine, and the captions
    give the sense of every word they lean on.
11. **The two proposals of the artist that the lead set** (the section
    above this one). Left as they are; seen again in the pictures.
12. **The checker's one warning (Echo).** Left. It stood before the
    critic and is answered above, in the section on the checker's
    warnings: the name is the libretto's own, with its capital.
13. **The type of the hosted Italian** (a space before some stops,
    three straight apostrophes). Left; it is the lead's.

### For the lead

Worst first.

1. **Read on (change 11).** The note and its link stand in place of
   the key `next`. It is a use of two keys that the kit keeps for a
   work that cannot be printed here; look at it and keep it or undo it
   (one edit, given above). In a build without the reader the note
   would show with no link under it, where `next` showed nothing. The
   kit has no note beside `next`; if `next` is to stay, the kit needs
   one.
2. **Whose English stands under the aria (critic 10.6; art.md, part
   4).** The labels of a passage and of its version are not shown
   where the two are set line under line, so on the first passage
   nothing says that the English is Maggioni's. No caption carries
   it, and `about` has room for four words more.
3. **Words says less than it did (change 8).** Petrarch's poem is out
   of the caption and of two notes. The old words are in
   `finisher/before.json`. To put them back the page would need a
   source that sets the poem beside the libretto; none of those cited
   does.
4. **Rondo: the two flats are out of print (change 2).** They can come
   back with a reason, if a source on the harmony of the second Adagio
   is opened. None that was read says what they do.
5. **Rondo, the caption's last sentence (critic 9.5; left, point 3).**
   It reports what Gluck and Boyé said and gives no reason for telling
   it. A sentence that did would need a source opened: Hanslick's
   second chapter is where Boyé's remark is put to use.
6. **The second passage has no English under its lines (critic
   10.5).** Only the lead can pair a version with it.
7. **The type of the hosted Italian.** Known to the lead. One
   consequence a reader meets (critic 7.4): on Words the side note on
   the word glossed "is left to me" is headed by that word with a
   straight apostrophe, and the same word in the fifth line of the
   aria has the curved one.
8. **The other faults of the kit, as the artist reported them (art.md,
   part 4).** They stand. No word mends them.
9. **The older items of `open` stand unchanged:** no libretto or score
   printed in Vienna was seen; Maggioni's dates were not found; the
   date of the programme in the scanned book; a misread letter outside
   the words shown; two places in Auden that are not on this machine.
10. **`shots/as-the-artist-left-them/`** can be deleted when it is no
    longer needed (the critic's item 8). It is not my folder.
11. **Two things about the tools.** `build/tools/prose.mjs` lists
    neither `nextNote` nor the labels under `nextLinks`, so the note
    under Read on has to be read on the page or in reading.json. And
    the picture tool does not show the line under a drawing while the
    pointer is on a mark; for that I wrote a small script,
    `finisher/point.mjs`, which serves `site/` on a port of its own
    and writes only in my two folders.

### The checker, the pictures, and what else is to be recorded

The checker was run before the edits, after them and at the end
(13:07 UTC; `finisher/check-before.txt`, `check-after-1.txt`,
`check-last.txt`). Before its last three lines it says "no problems".
The last three:

    WARNINGS (1)
      plate song lens 1 (shape) caption: "Echo": RULE THREE: a claim about what the passage does to someone, or stands for. Keep it only if Auden, a source or the lines themselves say it
    the printed notes are fit to print

Its proof of the marks is line for line what it was before the edits.
Four lines differ, the "stands on" lines of the tabs whose grounds
changed: Count, Rondo, Words and Strophes.

Built with `node build/pieces.mjs orpheus`. Photographed one plate at
a time, at 1280 and 390, into `shots/finisher/`; every run ended with
nothing reported. Pictures looked at:

- Endings, Rondo, Words and Strophes, each at 1280 and at 390 (the
  eight files `orpheus-aria-1-endings-*`, `orpheus-aria-3-rondo-*`,
  `orpheus-terms-0-words-*`, `orpheus-song-1-strophes-*`);
- the page in slices, all eleven: `orpheus-page-1280-0` to `-4` and
  `orpheus-page-390-0` to `-5`: the head with `about`, the three
  passages as they stand when the page opens, and the foot with "What
  Auden said", the record, Read on and Sources;
- the pointer on a mark: `point-rondo-lines-5-to-7-1280.png` and
  `point-strophes-first-1280.png`.

Count was not photographed by itself: its caption did not change, and
it is the tab the page opens on, so the slices show it. Its line in
the folded list, the nine other lines of that list and the five
caveats were read from the built page by the script
(`finisher/point-out.txt`), as were the lines under both drawings for
every mark, and the two folded tables.

Nothing was refused by the permission system.

Two things I did that should be on record. Early in the run I wrote
two working files (the checker's first output and a draft of the
paragraph under `auden`) in the session's scratch folder, which is
outside the places this role may write; I moved both into `finisher/`
and removed the folder I had made. And the prose tool, which the role
file names, writes its own file, `review/remake/prose/orpheus.md`.

## The lead after the finisher (3 October 2026, 13:33 UTC)

Read the finisher's record and looked at its pictures (the four tabs it changed at both widths, the two pictures with the pointer on a mark) and at the head and the foot of the page again (`shots/lead/`, 1280 and 390).

- **Read on.** The note and its link are kept: a reader sent into a libretto of four acts from a page that speaks of Act 3 is told why. `build/tools/prose.mjs` now lists `nextNote` and the labels under `nextLinks`.
- **Petrarch's poem out of Words; the two flats out of print.** Both stand as the finisher left them: nothing that was read sets the poem beside the libretto or says what the flats do.
- **The last sentence of the Rondo caption.** Left. It reports two remarks with their sources and draws nothing from them.
- **No English under the second passage.** Left: the glosses under the marked words carry the sense, as the picture of Words shows.
- **The hosted Italian.** Its three straight apostrophes are curled (`node build/tools/typeset-texts.mjs o-orpheus`; `o-orpheus` and the other cuts in their own language are now listed in `build/lib/typeset.mjs` as texts whose single mark is always an apostrophe). The files before: `lead/o-orpheus-before/`. No string of the reading held the character. The seven stops that the libretto of 1879 sets after a space are the kit's to set close; the kit mender has it.
- **Whose English stands under the aria** waits on the kit's line of labels (eighth mending).
- Every printed paragraph was tested against the scans of Auden's prose (`runs-sweep.py --only orpheus --show`): three runs, all of small words.
- Checker: no problems; the one old warning (Echo); fit to print.

## The lead, one string of the script (3 October, 15:11 UTC)

The key of the drawing that sets a line "as long as its count of
syllables" now says "drawn as long as", so that "as long as" cannot be
read as "provided that" (the kierkegaard critic's point, set for the
site). Copy before: `orpheus.js.before-key` in this folder.
`node --check` passes.

## The lead in the last pass (3 October, 16:20 UTC)

A dictionary's headword after "under" in the folded notes and the sources is in
italics now wherever it stood bare in lower case, or is a word of another
language (item 2 of the last pass, 16:20 UTC; with it, a dictionary's name set as
the rest of the site sets it). Type only: no word changed. Edits in
`lead/edits-headwords.json`, the reading before in
`lead/before-headwords.json`; checker as before. The record is `review/remake/last-pass/RECORD.md`.

## The lead in the last pass: the measure's wording and the Word tab (3 October, 18:06 UTC)

One wording for the measure of a line, after Ariel's song, from the reader who went through every Beat tab (`review/remake/last-pass/measure/`; the lead's amendments are in `lead-apply.py` there, and the reasons in `review/remake/last-pass/RECORD.md`, item 1). A measure of stresses is named by its beats, by its syllables where the count matters, and by "the line beginning off the beat" or "on a beat". In verse measured by count an accent is a place the count fixes and a stress is what the voice does. "Light syllable", "weak", "the pattern", "the meter" and "scanned" give way to "unstressed", "where the measure has no beat", "the measure" and "marked".

Changed here: `aria`, tab Count: meterName, points; `terms`, tab Measure: meterName; `song`, tab Rhyme: caption; `song`, tab Strophes: facts. The edits: `lead/edits-measure.json`; the reading before: `lead/before-measure.json`. The checker says what it said before. No mark changed, and the new sentences were held against the five scans: no run of five.

The Word tab: its one tab named "Words" is named "Word", as on 36 other passages, the front page and Ariel's song (the site critic by word, labels, 5; the reading before: `lead/before-word-label.json`).

Earlier the same afternoon (about 17:20): the plain words under a figure's name were put in the site's one style (one edit; `lead/edits-plain.json`). The work's title in `remake/pieces.json` is now "Orpheus", the list's title and the shelf's, so that the front page, the list of works and the head of the page agree with the shelf. The front page's card has its own plain words for the figure.

## The lead in the last pass: one wording for each figure (3 October, 19:55 UTC)

Each Figure tab says in one line under the figure’s name what the figure is. Laid side by
side, the 82 tabs gave the 17 figures that stand on more than one page a different line
on nearly every page. Each figure now has one line, with a tab’s own tail after “; here”;
anaphora, epistrophe, anadiplosis, parallelism and asyndeton keep one sentence whose number
and unit are fitted to the passage. No name, mark, caption or claim changed in this step.
Why and how: `review/remake/last-pass/RECORD.md`, “One wording for each figure”; the table
of lines is `review/remake/last-pass/figures/lead/lead_lists.py`.

Lines changed here (1):

- `plates[0].lenses[2].plain`, the plate `aria`, the tab Calls (apostrophe):
  was “turning one’s speech from one hearer to another, most often to an abstraction, a thing or someone absent; here he turns from speaking about her to addressing her”;
  now “a turning away: the speaker turns from the hearers to speak to someone or something else; here he turns from speaking about her to addressing her”.

The checker says of the piece what it said before. Copy before:
`lead/before-figure-wordings.json`, with the list applied beside it.

## The lead after the word critic of the last pass (4 October, 00:08 UTC)

A critic read the lines written after the pieces' critics had read: the
figures' lines, the measures and the front page's cards. Its report is
`review/remake/critics/last-pass-words.md`; what the lead did with each
point is in `review/remake/last-pass/RECORD.md`. In this reading, exact
edits, each proved to change only the leaf it names (the file before is
`lead/before-last-pass-words.json`):

- `; here he turns from speaking about her to addressing her`
  became `; here, from speaking about her to speaking to her`

The checker says what it said before.
