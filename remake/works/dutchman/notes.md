# The Flying Dutchman (Senta's ballad): the poet's notes

Written on 3 October 2026. Words of the libretto are pointed at by row
and word number, as the proof prints them
(`node build/tools/check-reading.mjs dutchman`). Auden is paraphrased
throughout. The reading has two quotations of his and no more: the
couplet in `view.quote` (10 words) and one sentence in the fifth entry
of `auden` (8 words).

The rules moved while I worked. The reading was first finished under
BRIEF.md of 02:52 UTC; then `stands` on every lens, `caveats` and the
test of the printed notes were added to the rules, and I wrote those.
Before handing in I read the rule files again (BRIEF.md of 04:52,
POET.md of 05:08, EXAMINER.md of 04:53, the checker of 05:08, which
added a warning for more than five kinds of mark in one lens; that is
mended, see the second passage below). The checker ends: no problems,
no warnings, the printed notes are fit to print (also with `--print`).

I did not run `build/pieces.mjs` or `shoot.mjs`: both write outside this
folder. Nothing here has been seen in a browser.

## The texts

- German: Project Gutenberg no. 27769, the German of Rullman's
  Metropolitan Opera libretto, at
  `.cache/originals/wagner_fliegende_hollaender_27769.txt` (acts begin
  at lines 169, 560 and 1222). I cut two parts from it with
  `node build/tools/original.mjs cut`, the one write outside this folder
  that the task allows:
  - `o-dutchman/ballad`: source lines 727 to 770 without the speakers'
    names. Block 0 is the opening call, 1, 3 and 5 the three stanzas,
    2 and 4 the refrain after the first and second, 6 the girls' two
    lines, 7 Senta's three.
  - `o-dutchman/end`: source lines 262-263 (Act 1), 1162-1165 (Act 2,
    Scene 3) and 1639-1640 (the last two lines of the opera), as blocks
    0, 1 and 2.
    (Examiner, 3 October 2026: cut again as 262-267, 1162-1165,
    1587-1588 and 1639-1640, blocks 0 to 3, so that the page marks the
    lines left out between the three places. The third passage shows
    rows 0.0-0.1, 1.0-1.3 and 3.0-3.1. See `exam.md`.)
- English: the hosted `dutchman` (Project Gutenberg no. 31963), the
  English of the same publisher's libretto. Its note says it names
  neither translator nor date. It is a free singing version, so it is
  used only to show what a translation kept and lost, never as a gloss.

## What Auden said, and the view

Research notes C, section 29, say it plainly: there is no source on the
opera itself; the Dutchman appears in Auden only as a type. So the view
is put together from what he said of Wagner's dramas in general, and it
says so in its first sentence.

- "The Greatest of the Monsters" (1969), in Forewords and Afterwords
  (1973). Read in the scan (`research/auden/fa.txt`, lines 12139-12165
  for the view, 12130-12136 and 12222-12250 for the third `auden`
  entry). He calls Nietzsche the best guide to Wagner and says Nietzsche
  saw one theme come back in opera after opera; then he quotes
  Nietzsche, whose list includes this opera. The research notes give
  p. 253 for the sentence on this opera. In the scan the quotation
  begins at the foot of p. 253 and that sentence stands after the page
  break, so I cite pp. 253-54. The scan drops most punctuation, so
  nothing from this essay is quoted.
- New Year Letter (1941), the lines on Wagner. Quoted from The
  Collected Poetry of W. H. Auden (New York: Random House, 1945),
  p. 308. I looked at the page image itself (Internet Archive,
  in.ernet.dli.2015.215337, leaf n326, with 308 printed at its foot).
  The machine-read text of that scan has a full stop after "dreams";
  the page has a comma, as the research notes print it. In this edition
  "death or mother" is in lower case; by the research notes (appendix
  H6) the London edition of 1941 has capitals. I follow the 1945 page.
  One thing for the examiner: the poem's sentence on what Wagner staged
  names "the mental hero" first, and in its next sentence the one who
  roars is "the huge doll". I read the doll as that hero, which is how
  the view and the caption of the third passage's Rhyme tab put it
  ("a hero who roars"). The ground there says so.
- The Enchafed Flood (1950; the scan is the Vintage edition of 1967):
  p. 5 (`ef.txt` lines 296-307) for the Flying Dutchman as one name of
  the exile half of a double-natured hero; pp. 12-13 (lines 570-600)
  for the four new notes of the Romantic attitude to the sea. The page
  numbers stand at the foot of the pages in this scan. He does not
  apply the four notes to this opera, and the reading says so twice.
- The Dyer's Hand (1962): p. 48 (`dh.txt` lines 2523-2534), pp. 470-72
  (lines 22118-22215) and p. 473 (lines 22250-22290). All read again
  today between their running heads.
- Not seen by me, taken from the research notes only: Auden's prose note
  to line 1432 of New Year Letter (Faber, 1941, pp. 143-44; appendix H6,
  pieced from search snippets, with a gap) and the Swarthmore chart of
  1943 (Mendelson, Early Auden, Later Auden, 2017, p. 555; the
  researcher's own caution is that the column is his reading). Both are
  marked in `caveats`, in `sources` ("not seen in full") and in `open`.

Before handing in I ran every printed sentence against the scans, the
research notes and the texts of the opera, looking for runs of five or
more words in common. Six paraphrases of Auden still ran close to him
(his list of four names in its order, "the decisive events", the
sentence on Wagner in English, "swept off their feet", the sentence on
learning to listen, and the two clauses from Nietzsche in the view) and
were reworded. What is left in common is titles, the five words of the
view on what the hero roars for, and "someone wants to be saved".

Where the plates meet the view: someone to be saved (the refrain is a
prayer for it, and Senta answers with I); Woman who redeems (her first
line of her own ends on that verb); passive as in dreams (Wagner's own
stage directions); the hero who roars for death (the first couplet of
the third plate and the monologue around it).

## Why these passages

Both leads in pieces.json held up when read against the text: she
breaks the form of the ballad at the end, and Wagner is still rhyming
here.

### Plate 1, "The first stanza" (o-dutchman/ballad rows 1.0 to 1.7; English dutchman/act-2 rows 54.1 to 54.7)

The stanza changes its measure where its matter changes, which is the
first thing POET.md says can be seen. Four lines in eight syllables and
alternate rhyme describe the ship; three lines begin on the cry Hui;
the last runs in two light syllables before each beat where the words
say he flies like an arrow. The close is three phrases on one word
(ohne), and its last word is unrhymed and tied by its first letter to
the word before it. The English beside it keeps the count and the rhyme
of the first four lines and changes the sense, which gives Auden's
remark on opera in translation (DH p. 473) something to stand beside.

Lenses: Beat, Rhyme, Word, English (compare).

The Word lens glosses the whole stanza, phrase by phrase (seventeen
glosses), and not only the words its caption leans on. The reader knows
no German, and the English beside the stanza is a singing version that
changes the sense, so without the glosses there is no way to see what
the German says. Six of the glosses carry a note beside the plate; the
other eleven are the bare sense, each from a dictionary entry opened
today.

### Plate 2, "The refrain, and what is sung in its place" (o-dutchman/ballad rows 2.0-2.4, 6.0-6.1, 7.0-7.2; English rows 55.0-55.4, 60.0-60.1, 62.0-62.2)

This is where the ballad stops being a ballad. The refrain after the
first stanza turns from telling about him to addressing him and back to
the hearers; after the third stanza the girls sing in its place, and
then Senta, with the only first-person words in the song apart from
the oath in the second stanza. The verbs go from can, if, when and may
to let me be and you shall. Wagner's own stage directions follow the
refrain through two scenes, and they are the nearest thing in the text
to the line of Auden's that the view quotes.

Lenses: English (compare, first because the small lines under the
German are not a gloss and the reader has to be told so before anything
else), Figure (apostrophe), Verbs (sentence), Scene (shape).

The Verbs lens marks four kinds: said as fact; supposed or wished; a
question; a promise. Its first version had six. The checker of 05:08
UTC warns when a lens has more than five kinds of mark, so the two
conditions (past subjunctives, rows 2.1 and 6.1) and the four wishes
(present subjunctives, rows 2.4, 6.0, 7.0, 7.1) now share one kind, and
the order to pray (row 2.3, word 0) is no longer marked there; the
Figure lens marks it. The Figure lens has five kinds (you, he, she, I,
pray), which the checker lets pass. Each has work to do: he and you are
the two sides of the turn, pray is the turn back to the hearers, and
she and I show Senta taking the place of the woman spoken of.

### Plate 3, "One rhyme in three acts" (o-dutchman/end rows 0.0-0.1, 1.0-1.3, 2.0-2.1)

The noun Gebot stands three times in the German libretto, once in each
act, and each time it rhymes with Tod: the Dutchman's sentence, Senta's
vow, her last two lines. The owner of the command changes each time
(damnation, troth, the angel). No pair: the eight lines lie in three
acts of the English, which gives the word as law in Act 1
(dutchman/act-1, block 21), demands in Act 2 (act-2, block 192) and has
neither angel nor command in the last couplet (act-3, block 137).

Lenses: Rhyme, Word.

## The scansion, and the other ways of hearing it

The meter of rows 1.0 to 1.3 is certain: eight syllables, four beats,
rising. What a voice does against it is not, and the caption leans on
none of the doubtful syllables.

- Row 1.0, word 0 (the verb of the question) and word 1. Marked as a
  light stress off the beat and a beat the voice passes over. The other
  way: say it in the measure, light then stressed. The printed tune
  does that: word 0 is a short note before the bar line (though the
  highest note of the phrase), word 1 falls on the downbeat.
- Row 1.1, word 0 (a compound, color word second). Marked stressed then
  lightly stressed, since a German compound takes its stress on its
  first part; the measure wants the beat on the second part. Sung, the
  first syllable is again the short high note before the bar.
- Row 1.3, word 3 (the verb after the comma). Marked as a light stress
  between two beats. It can be said with full stress, which gives three
  stresses running, or with none. In the tune it is the note before the
  bar line and the first syllable of word 4 takes the downbeat.
- Rows 1.3, 1.6 and 1.7, the preposition ohne. On the beat in row 1.3
  it is marked as a light stress; before the beats of the close both
  its syllables are marked light. A voice could lean on its first
  syllable each time.
- Row 1.6, word 4 (the verb). Marked as a light stress off the beat.
  It can be said quite unstressed; the tune gives it one of two quick
  notes.
- Rows 1.4 and 1.5, the call Johohe. Stressed on its last syllable
  after the sung form (two short notes and a long accented one). Said,
  it could be stressed otherwise, so the caption says outright that the
  marks on this word follow the printed tune. The tokenizer divides the word in
  two; the `div` gives three syllables.
- Rows 1.4 and 1.5, word 1 (Wie). Marked light; an exclaiming voice
  could stress it.
- The `div` entries: the syllable rule counts the final e of Meere,
  bleiche, Schiffes and ohne as silent, so every word of more than one
  syllable in the scanned rows carries its division.
- Wagner's edition of 1871 prints the close as two lines of three
  beats; this libretto prints one long line and turns the last two
  words over. Row 1.7 is that turnover, shown from word 1 so that the
  dash at its head is hidden. The second remark of the Beat lens says
  so.

I did not use the handbook for the claim that feet of three syllables
are quick. Baum (chapter 4, line 2797 of the file) reports that
anapests "are said to be" rapid and then says such labels generally
fail. The word quick in the caption and the `why` stands only on the
printed tune, where each pair is two sixteenth notes.

## Each fact, and where I read it

Wagner's own text and directions. Gesammelte Schriften und Dichtungen,
vol. 1 (Leipzig: Fritzsch, 1871), read in the machine-read text of the
Munich copy (archive.org/details/11015432bsb):
- p. 23, "Autobiographische Skizze": he wrote the poem in German verse
  himself.
- p. 335: the opening direction of Act 2 (the picture of a pale man in
  black; Senta leaning back in a grandfather's chair, arms folded, sunk
  in dreamy contemplation of it).
- p. 337: without leaving her position she softly sings a verse of the
  ballad to herself; the nurse's question about dreaming her young life
  away; the girls on the pale man.
- p. 338: she has often heard the ballad from the nurse and will sing
  it herself.
- p. 339: the heading "(Ballade.)"; the close of the stanza printed as
  two lines.
- p. 340: after the first stanza and its refrain, toward the end of the
  stanza she turns to the picture, the girls listen, the nurse has
  stopped spinning; after the second the girls softly sing the closing
  rhyme along; after the third she sinks back and the girls sing on
  after a pause. In this edition a stanza includes its refrain, so "the
  end of the stanza" is the refrain; the caption words it that way.
- p. 341: carried away by sudden inspiration she springs up; her first
  line there differs from the libretto shown (see below); afterward she
  has stayed as she stood, heard nothing, and starts like one waking.
- p. 345: at Erik's tale she sinks as into a magnetic sleep and seems
  to dream his dream; she answers with closed eyes. I kept the
  direction's own words and did not call it a trance.
- p. 347: sunk in thought, eyes on the picture, she softly sings the
  close of the refrain; the door opens; she cries out and stands
  rooted.
- pp. 362-63: her words to the Dutchman in the last scene, with the
  plain verb for am; the last couplet.

Vol. 4 (1872; archive.org/details/11723062bsb): Oper und Drama, p. 118
(alliteration and Stabreim named together); "Eine Mittheilung an meine
Freunde" (1851), pp. 399-400 (end rhyme a deceit; for Siegfried he took
the verse rhymed on first sounds). I checked only the statement about
Siegfried, so the caption does not say that all his later poems are in
such verse.

The libretto of 1901 that agrees with the score (Berlin: Fürstner;
archive.org/details/derfliegendehol00wagngoog): p. 28, the last return
of the refrain breaks off before its last word; p. 47, the last couplet
and the last direction. The Reclam libretto
(archive.org/details/derfliegendeholl00wagn_3) and zeno.org agree on
the break.

The tune. Oliver Ditson Company's Standard Opera Libretto, The Flying
Dutchman, edited and adapted by J. C. Macy and J. Troutbeck (copyright
1895; archive.org/details/flyingdutchmana00tourgoog), p. 16, where the
melody of the first stanza is printed with the words. I looked at the
page images. Six-eight time; each of lines 1 to 4 begins with a short
note before the bar; each Hui is a long accented note; Johohe is two
sixteenths and a long note; in the arrow line each pair of light
syllables is two sixteenths and each beat a quarter note; the last word
is the longest note of the stanza. Not checked against a score.

Counts in the German libretto (PG 27769), made by script and read:
- Hui: nine lines of the ballad (732-734, 745-747, 757-759) and three
  of the chorus of the Dutchman's crew (1441, 1443, 1445). The crew
  also cry Huissa three times. The hosted English has hui five times in
  that chorus; Wagner's own text may have more than this libretto.
- The noun Gebot: lines 263, 1163, 1639, each rhymed with Tod (262,
  1165, 1640). A verb form of the same root at 1495 is not the noun.
- First-person words in the ballad before Senta's own lines: one, in
  row 3.3.
- He says he sought death: lines 250-257. The angel who won him the
  condition of his rescue: 264-267. The condition stated: 1587-88. Her
  am: 1607. The last direction: 1642-47.
- The hosted English ballad (act-2, blocks 54 to 62): the word death
  never; true once (row 55.4); constant twice (57.4, 58.3). So the
  caption says the English keeps a true woman and leaves the death out.
  Rows 54.1 to 54.4 have eight syllables each by the build tools'
  count and rhyme a b a b.

Dictionaries, all opened today (dwds.de/wb/<word>; Grimm at
dwds.de/wb/dwb/<word>):
- hui: DWDS sense 1 (imitates the sound of a draught in swift
  movement); Grimm 1 and 1 g (in the newer language it commonly paints
  great speed). DWDS also has a sense for ghosts; not leaned on.
- Rast: DWDS (a pause for rest, especially on a journey; the set
  phrase with Ruh); Pfeifer there (the old sense, a stretch of road
  between two resting places; English rest is kin). Grimm rast (f.),
  5: the pairing with ruhe, with Goethe and Schiller among the
  examples. My first draft said "its oldest sense"; Pfeifer says "the
  old sense", and the note now says "an old sense".
- Ruhe: DWDS 1 to 3; Grimm ruhe (f.): rest found in death, examples
  from Hans Sachs to Heine; the pairing with rast.
- Ziel: DWDS 1 a and 1 b; Grimm ziel I 1 a (the marksman's mark, with
  an example of an arrow reaching it) and I 1 b (the end of a journey
  or sea voyage).
- The plain glosses of the first stanza, all DWDS unless said:
  antreffen (to find a person or thing at a certain place; the entry
  divides the word an- and treffen, and in the line the an stands last);
  ihr (several persons addressed); Meer; blutrot (of a red like the
  color of blood); Segel (the row has the plural); schwarz; Mast; hoch;
  Herr 3 (one who commands others, a master); sausen 1 (to rush, to
  roar; its first example is the wind in the trees); Wind; pfeifen 3 (a
  thing gives a whistling tone); hin 1 (the direction away from the
  speaker).
  - Bord: sense 2 is the deck, and one of its examples has someone high
    on the Bord of a ship; Pfeifer there gives ship's edge and ship's
    deck. Grimm, bord 3, has "a ship of high Bord", a tall-sided ship,
    so the three words could also be heard as: on the tall ship. I kept
    the deck.
  - Tau: a thick rope, used especially on ships; Grimm, tau: rope,
    ship's rope. The noun is singular in the line and stands for the
    ropes of the ship. The gloss keeps the singular.
  - hinfliegen: the gloss follows Grimm (to fly in a direction away
    from the speaker; to hurry that way; to fly away, to hurry off).
    The senses in the DWDS entry (to fly to a certain place, to fly
    over something, and a slang sense, to fall down) do not fit the
    line. My first gloss, "flies along", had no entry behind it and is
    gone.
- wachen 1 and 2; Pfeil 1; ohne; bleich; Schiff (neuter);
  weilen; treffen 5; bleiben 2; zeigen; erreichen; getreu; treu 1 (its
  examples include being true to someone until death); Treue (Pfeifer:
  at first a pact, then the keeping of it; kin to English true); Gebot
  (a command; the Ten Commandments; kin to bid); Tod and Gebot for the
  sounds; Verdammnis; Schreck; erlösen and Erlösung; Heil; Weib;
  preisen; Reine; weihen 1 and 2; hier I 1; nirgends; niemals; Grab;
  Herz; kennen; schenken; stehen; Engel; sollen 1 c (in promises and
  threats); mögen; Stabreim.
- Grimm treueigen: in use since the nineteenth century, especially in
  love poetry; the entry cites this very line.
- Schreck-Gebot and Hochgebot have no entry in either dictionary. They
  are glossed from their parts, and the note says neither dictionary
  has the first.
- Online Etymology Dictionary: huzza (at first a sailor's shout of
  exaltation, encouragement or applause), apostrophe (n.2), troth.
- Silva Rhetoricae (rhetoric.byu.edu), apostrophe: turning one's
  speech from one audience to another, most often to an abstraction, a
  thing or the absent.
- Baum, The Principles of English Versification
  (`.cache/handbooks/baum-versification-pg21342.txt`): chapter 4, line
  3680, the ballad stanza closely similar to the four-beat quatrain
  rhymed by turns; chapter 5, line 5830, alliteration as initial rime.
  The handbook describes English verse; I use it for the name of the
  stanza and of the device, not for German stress.
- English Wikipedia, "Subjunctive mood", the German section: the
  present subjunctive in wishes (its example is the cry for a king) and
  the past subjunctive in conditions; the form of sein.

## The text shown and Wagner's own

The German on the plates is the American libretto's. Against Wagner's
edition of 1871 (and the 1901 libretto) it differs here:

- Row 7.0. Wagner's line says, in English: let it be I who redeem you
  through her troth. It has the same wish form of sein and the same
  verb of redeeming, in the wish form, at its end. The wording shown
  (with das Weib, Meine Treu' and soll) is also in the Ditson libretto
  of 1895. Where it came from I did not find. The captions lean on
  words both wordings have (the wish form in word 1, rows 7.1 and 7.2
  entire). Two marks exist only in the wording shown: the bold verb at
  the end of row 7.0 and the span on word 6. If the lead prefers
  Wagner's wording, the passage would have to be cut from another
  source and those two marks moved.
- The close of each stanza is two lines in Wagner and one long line
  here.
- The third line of the refrain ends in a question mark in Wagner; here
  it has an exclamation mark. The Verbs lens calls it a question on the
  strength of its question word and its inverted verb.
- Wagner has einstens where rows 2.0 and 6.0 have einst.
- The last line of the opera: Wagner in 1871 has a phrase meaning see
  me here; the text shown and the 1901 libretto have here I stand. The
  caption says only that the line begins with Hier and that she calls
  herself true to him until death, which both have.
- Smaller ones in the second stanza and elsewhere (the order of two
  verbs in the oath line, a tense, one verb in the last return of the
  refrain) touch nothing shown.
- The last return of the refrain at the end of Scene 2: complete in
  1871; cut off before its last word in 1901, Reclam and zeno.org; in
  the libretto shown (source line 1029) Senta repeats the girls'
  question with "etc." The table's last row follows 1871 and the
  working note on that row gives the other two.

Wagner gave two accounts of what he wrote first. In the sketch of 1843
(vol. 1, p. 23) he began with the sailors' chorus and the spinning
song. In 1851 (vol. 4, pp. 393-94) he remembers drafting Senta's ballad
first, words and melody, and calls it the germ of the whole. I used
neither in a caption.

## What I looked for and did not find

- Anything Auden said of this opera in class or in print beyond the
  places above. The research notes found none.
- A full score, to check the tune beyond the libretto's printed melody.
- The source of the American wording of row 7.0.
- Dictionary entries for the two compounds.
- Encyclopaedia Britannica's pages on the ballad, the refrain and
  apostrophe: they would not open from here. Nothing rests on them.
- A source saying outright who "er" is in the arrow line. The noun for
  ship is neuter, so it is not the ship; at the same place in the
  second stanza (row 3.6) it is the damned man. The wind is masculine
  too. The tie says only that, and `caveats` tells the reader.

## For the artist

- Plate 1 has eight German rows and seven English, so it is set side by
  side. Row 1.7 is the tail of the verse line that begins in row 1.6.
- Rhyme lens of plate 1: row 1.6 has no rhyme letter on purpose. Its
  last word is the end of a line only in this libretto's layout. The
  thread of r joins places on three rows (1.3, 1.6, 1.7); the kit draws
  thread arcs only inside one line, so these three letters will be
  colored and not joined. A stroke from the R of row 1.6 to the R of
  row 1.7 would show what the caption says.
- Word lens of plate 1: seventeen glosses on eight rows, up to four on
  a row (row 1.6). The kit sets a gloss that would touch its neighbor
  one level lower and has two levels. By my arithmetic from the kit's
  type sizes only the gloss under word 3 of row 1.3 drops a level on a
  wide screen; on a phone, where the long row turns over, more may. It
  needs a look in a browser, which I could not give it.
- Plate 2 has ten rows and ten, so the English is set line under line
  and neither label shows. The rows come from three places and no
  speaker's name appears; the first caption says who sings what.
- Figure lens: the parts are listed so that the tag "you" comes first
  and takes the red.
- Scene lens: `facts` is a list of nine steps in order, each with
  "when", "who sings", "what is sung", "Senta, in Wagner’s directions",
  a "read" address in the English libretto, and working keys "source"
  and "note" that do not reach the page. What matters to show: the
  refrain passing from Senta alone, to Senta with the girls, to the
  girls, then her own three lines in its place, then Senta alone again
  at the end of Scene 2; and beside each step what the direction has
  her doing. The hosted English has no stage directions in Act 2, so
  each "read" points to the nearest speech.
- Plate 3 has no pair. Its three groups of rows come from three acts;
  the part's label says so.

## For the examiner

Things I would test first: the four doubtful syllables above; "only
one thing in the refrain is stated as fact" (rows 2.0 to 2.4, counted:
one statement, one condition, one question, one order, one wish); the
count of first-person words; the count of the noun Gebot; whether the
English really has no word of death in the ballad; the page of each
Auden passage.

Sentences I cut or changed because they went past their ground: that
all Wagner's later poems are in verse rhymed on first sounds; that
three places "end" on one rhyme (the first does not end its speech);
that the last couplet's angel is "the same" angel as in Act 1 (now two
separate statements); that Auden made the Flying Dutchman "the exile"
(he lists the exile beside him); that the English ballad drops the
condition (it keeps a true woman and drops until death).

## Taken out of the list of what Auden said

Moved here by the lead on 3 October 2026 from section 4 of critic.md, where the critic kept them because that run could not write this file. They stay out of the page.

Two entries, true as far as they were checked, and kept in case they
are wanted. They are given as they stood, before any title was
marked.

- **“Making, Knowing and Judging,” in The Dyer’s Hand (1962), p. 48**
  Of all the critical studies of one artist that he knew, Auden ranked
  Nietzsche’s The Case of Wagner highest. However fierce the attack,
  he says, Nietzsche keeps Wagner’s genius and the importance of his
  music before the reader. This book, he adds, was what first taught
  him how to hear Wagner; until then his ideas about him had been
  silly and formed in advance.
  Checked: read in the scan, research/auden/dh.txt, lines 2523–2534,
  on 2026-10-03, between the running heads of pp. 48 and 49.
  (No `quote`.)
  Why it came out: the lecture is on another subject (how a poet
  learns to judge), it names neither this opera nor any passage shown,
  it is not of 1941, and what it adds for this page, that Nietzsche
  was his guide to Wagner, the view at the head already says from the
  essay of 1969. One of two that say the same thing.

- **a chart of 1943, as reproduced in Edward Mendelson, Early Auden,
  Later Auden: A Critical Biography (2017), p. 555**
  On a chart Auden made at Swarthmore College in 1943, the words
  Flying Dutchman appear to stand under the heading The Tragic
  Hero-Outlaw. The chart was read for this page in a reproduction,
  where it is not always clear which column an entry belongs to.
  Checked: read only in the research notes,
  remake/research/C_auden_on_works.md, section 29; the chart was not
  seen in this session.
  (No `quote`.)
  Why it came out: it only shows that he wrote the name down, two
  years after the course; half of the entry is an apology for not
  being sure where on the chart the name stands; and no one in these
  sessions has seen the chart. It read as "everything that was
  found".

## The lead's changes after the critic (3 October 2026, 09:10 UTC)

What the critic left for the lead (critic.md, end of section 10), and what was done.

1. The Scene drawing, row 7 ("Just after"). The cell for who sings said that no one did. Five speeches stand there in the text the page prints (Act 2, blocks 63 to 72: the nurse with all the girls, Erik, the girls, the nurse, Erik; seen in the reader). The cells now name the three voices and what they sing, in the critic's words, and the line over the drawing says "who sings each time".
2. The Scene drawing, row 9 ("The end of Scene 2"). The row follows Wagner's text of 1871; its link opens the English printed here, which gives Senta the girls' two lines at that place (blocks 60 and 163 of Act 2 are the same two lines). The cell now says so. The detail of the three editions, which only `open` had, is printed as a caveat of its own.
3. The two entries the critic took out of the list stay out and are above, under "Taken out of the list of what Auden said". The line of `open` that named the chart was reworded.
4. The Figure caption now says that in Wagner's edition the stanza takes in the refrain (119 words). The English of the line of 1871 in the second caveat and in `open` is the critic's, which keeps the third person of the German clause.
5. The two paraphrases of Auden's p. 473 stand as they are: they follow his order with his page given, and no run of his words comes near the limit.
6. The caveats were six after the split, and the checker allows five. The one about Auden's prose note of 1941 (read only in snippets, with a gap) was moved into the printed source line of the list entry it concerns.
7. `site/js/pieces/dutchman.js`: the column of directions is now found without counting the working columns `source` and `note`, so that a long note cannot be taken for the directions.

Not done: the `turn`s the artist asked for (refused to the artist by the permission system; they wait for the owner's word). For the kit: the size of the side notes at 1280 px, and the points of omission before the last two words of the first stanza, where only a dash is left out.

## Words marked in the small notes by the lead (3 October 2026, 10:07 UTC)

After the sixth mending of the kit a word between asterisks in a remark or a word's note stands upright in the italic. The lead marked the words these notes name as words (words of the passage, words of the original, Latin and Old English forms) and the titles in them. No wording was changed. Checker after: no problems.

## Phrases loosened that ran close to Auden's or Pearce's wording (3 October 2026, 13:11 UTC)

The lead, after the piece was through every stage. A test of every
printed paragraph of every piece against the four scans
(`python3 build/tools/runs-sweep.py`, which prints the page's own words
and never the scan's) found sentences here that shared a run of five or
more words with Auden's text or with Pearce's memoir. Each was said
again in other words; no claim was added or taken away. The edits, 1
of them, are in `lead/edits-runs.json`, and the reading before them is
`lead/before-runs.json`. The runs that are left are small words ("at
the end of the") or the words of the work itself. The checker after the
change ends as it did before.

## The lead in the last pass (3 October, 16:09 UTC)

The snippet test (`build/tools/grams.py`) found one run, in both
printings of *New Year Letter*: five words of the poem stood unmarked
in the head's last sentence. The order of the hero's two cries is
turned round so that no five words run; the two lines quoted under the
head are marked and stand. No change of claim. Edit in
`lead/edits-grams.json`, the reading before in
`lead/before-grams.json`; checker clean. The record is `review/remake/grams/LEAD.md`.

## The lead in the last pass: hidden runs (3 October, 17:04 UTC)

Two faults in the tests of closeness were mended today (`review/remake/grams/LEAD.md`, "Two faults in
the tests"): the sweep passed over a run that began inside a chain of chance words, and it cannot see
through a misprint in a scan (`build/tools/runs-tolerant.py` now can). One sentence of this page is loosened: in
the second entry, the last item of Auden's list followed his sentence clause by clause, with one word
different in each run ("Whether there is a lasting destination nobody knows, and a lasting bond can be
neither had nor wished for"). Edits: `lead/edits-hidden.json`; the reading before: `lead/before-hidden.json`. No claim changed.
Checker as before. Built. Both sweeps run again: no run of five in what was changed.

## The lead in the last pass: one wording for each figure (3 October, 19:55 UTC)

Each Figure tab says in one line under the figure’s name what the figure is. Laid side by
side, the 82 tabs gave the 17 figures that stand on more than one page a different line
on nearly every page. Each figure now has one line, with a tab’s own tail after “; here”;
anaphora, epistrophe, anadiplosis, parallelism and asyndeton keep one sentence whose number
and unit are fitted to the passage. No name, mark, caption or claim changed in this step.
Why and how: `review/remake/last-pass/RECORD.md`, “One wording for each figure”; the table
of lines is `review/remake/last-pass/figures/lead/lead_lists.py`.

Lines changed here (1):

- `plates[1].lenses[1].plain`, the plate `refrain`, the tab Figure (apostrophe):
  was “a turning away: the speaker breaks off from the people she is talking to and addresses another, most often an abstraction, a thing or someone absent”;
  now “a turning away: the speaker turns from the hearers to speak to someone or something else”.

The checker says of the piece what it said before. Copy before:
`lead/before-figure-wordings.json`, with the list applied beside it.
