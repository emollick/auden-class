# The Family Reunion: the critic's record

Piece `family-reunion`. Critic at work on 2026-10-03, from 08:04 UTC,
after the examiner (exam.md) and the artist (art.md). No line of the
play and no sentence of Eliot's or Auden's prose is copied in this
file. The two lines the page quotes are called "the first line shown"
and "the second line shown", and their words are named by number
(from 0). "Old" and "new" below are the site's own sentences.

In short: 22 sentences touched in `reading.json` (1 cut, 4 shortened,
1 moved within its caption, 16 reworded) and 17 titles marked. Nothing in
`facts` and nothing in the script was changed. No entry came out of
the list, so nothing was written in notes.md. The checker ends with
no problems, no warnings, and the printed notes fit to print.

The faults that came up most: the same thing said at two or three
places (the copyright sentence, the edition, the loan); a pronoun or a
pointing word with nothing clear to point at ("he", "his", "those",
"the second": 5); quaint turns where the ordinary word would do (4
mended, 3 more in what the drawings print); a term of the trade with
no plain words beside it (2).

For the lead: section 7 (wording for `facts` and for the script,
with the artist's five points weighed and the answer on "It keeps the
rule."), section 8 (eight things doubted and left) and the second
entry of section 9 (every caption ends on a fault found in the play).

## 1. What was read

- The whole page and every tab at 1280 px and at 390 px, in the
  pictures taken at 08:05 UTC, before any change of mine: the first
  pictures to show the note at the foot of the plate and "Read on".
- `review/remake/prose/family-reunion.md`, once from top to bottom
  before anything was marked, then sentence by sentence. That file
  does not yet gather `nextNote` and the labels of `nextLinks`; I read
  those in `reading.json` and in the picture of the page.
- Beside it: `reading.json` whole, exam.md, art.md, notes.md, and the
  script `site/js/pieces/family-reunion.js`, every string it prints.
- The checker before any change: no problems, no warnings, the printed
  notes fit to print.

I checked no fact again. The examiner's record stands, and where a
wording of mine had to keep to what a source says I kept to what
exam.md and notes.md record of it. One sentence was opened beside
them: the research notes' extract of the foreword of *Secondary
Worlds* (C_auden_on_works.md, H11), to keep the reworded sentence on
Becket to Auden's meaning.

The picture tool was run twice, as allowed: at 08:05, before any
change, and at 08:27, after the last. The pictures at 1280 px and
390 px in `shots/` are those of 08:27, all but
`family-reunion-page-390-4.png`: the page is one slice shorter on a
phone now, and that file is left over from 08:05. The pictures at 360
and 320 px are the artist's, from before the page printed the note
and "Read on". Both runs ended "nothing reported".

## 2. The copyright sentence, said once

It stood three times. It now stands once, at the foot of the plate
(`plates[0].noTextWhy`). That is where it does the most good: the note
shows under every tab, and it is at the plate that a reader who has
seen a passage on every other piece meets four drawings and no text.
The other two places lean on it by saying nothing of copyright: they
give only what a reader needs at that place.

1. `plates[0].noTextWhy`. Old, last sentence: "Everything else is
   counted or described from the New York edition of 1939, the edition
   on Auden’s reading list." New: "Everything else is counted or
   described from the New York edition of 1939." Padding: that the
   edition is the one on his list was said at three places (here,
   under "Read on", in the first source). It stays at the two where it
   helps: which copy to borrow, and the entry for the book. The first
   two sentences of the note are as they were.
2. `nextNote`. Old: three sentences, the first the copyright sentence
   again, the third telling what Cassandra does in the *Agamemnon*.
   New: "The play can be borrowed from the Internet Archive in the New
   York edition of 1939, the one on Auden’s list, and most libraries
   have it. The first of the three Greek plays under it, the
   *Agamemnon*, is printed here." Faults: the copyright sentence a
   second time; and every fact of the third sentence stood again in
   the link directly under it. Nothing is claimed that was not. The
   title is marked. The note no longer says in so many words that the
   play is not on this site: "can be borrowed" implies it, and the
   note at the plate has said it. If the lead wants the bare fact at
   this place too, a first sentence of seven words would do it with no
   word of copyright: "The play is not printed on this site."
3. `nextLinks[0].label`. Old: "Borrow the 1939 edition at the Internet
   Archive". New: "Borrow the 1939 edition". The page sets "At
   archive.org" beside the label and the sentence above names the
   Internet Archive, so the row said it three times in three lines.
   The address is untouched.
4. `nextLinks[1].label` is as it was. It now carries alone what the
   cut sentence said: where in the *Agamemnon* the link lands.
5. `sources[0]`. Old: "… Page numbers are that printing’s. The play is
   in copyright in the United States through 2034 and is not printed
   here; a copy of this edition can be [borrowed …]". New: "… Page
   numbers are that printing’s. A copy of this edition can be
   [borrowed …]". The copyright sentence a third time. The link and
   its address are as they were.

For the lead: the seventh entry of `open` still says that `nextNote`
and `nextLinks` are not printed. It is out of date since 08:00. `open`
is not mine to edit.

## 3. Titles marked (no word changed)

Books, plays and the two papers are now between asterisks, as the
`sources` list of this page already had them.

- `where`: *The Family Reunion*.
- `view.source`: *The Observer*, *The Griffin*, *Prose*.
- `auden[0].source`: *Poetry and Drama*, *The Observer*, *Prose*.
- `auden[1].says`: *The Cocktail Party*. `auden[1].source`: *Complete
  Poems and Plays*, *The Griffin*, *Prose*.
- `auden[2].says`: *The Cocktail Party*. `auden[2].source`: *Secondary
  Worlds*.
- `auden[3].source`: *The Enchafèd Flood*.
- `nextNote`: *Agamemnon* (section 2).
- The words of two links, `sources[6]` and the Greek tab's `stands`:
  *Agamemnon*. The addresses are untouched.

Left bare on purpose: "T. S. Eliot Memorial Lectures" in
`auden[2].says` (the name of a lecture series, not of a book) and the
label of the second link under "Read on" (the page sets a label as
plain words, so asterisks would print as asterisks).

In the facts, for the lead to set: the line over the Greek drawing,
`plates[0].lenses[2].facts.under`, names three plays and a Greek title
with no marks. The drawing sets a marked title upright in its italic
note, so the cure is asterisks and no change of words: "… in three
plays: the *Agamemnon*, *The Libation-Bearers* and *The Furies*, whose
Greek title is the *Eumenides*."

## 4. The list under "More from Auden"

Four entries, and all four stay. Nothing was moved to notes.md.

- The two reviews (1951, 1953) are the view itself at greater length,
  and the Line, Chorus and Sight captions lean on them.
- The remark on Orestes (1950) does not name the play, and the entry
  says so. The Greek caption and its `stands` lean on it, so it may
  not come out.
- The foreword of 1968 is one sentence said in passing, in a book on
  other things. By the rule it is the entry most open to question. I
  kept it: it is about Harry himself and about how the play ends, the
  seventh row of the Greek drawing, and a `grounds` item of the Greek
  tab still cites it. If the lead wants the list shorter, this is the
  one to move.

Wording changed in two of the four (the second entry has only its
title marked):

1. `auden[0].says`. Old: "Then he tries the rule". New: "Then Auden
   tries the rule". The sentence before ends on Eliot, so "he" read as
   Eliot.
2. `auden[0].says`. Old: "Prosody, he adds, is a matter on which each
   poet thinks only himself right." New: "On prosody, the measuring of
   verse, he adds, each poet thinks only himself right." A term of the
   trade, used nowhere else on the page, with no plain words beside
   it. The shorter frame keeps the entry within the 110 words the
   checker allows; the longer one I first put took it to 114.
3. `auden[2].says`. Old: "was a martyr of history". New: "was a martyr
   known to history". The old phrase could be read as a martyr to
   history.
4. `auden[2].says`. Old: "as the like decision of Celia does in The
   Cocktail Party". New: "as Celia’s decision does in *The Cocktail
   Party*". A mock-antique turn where the ordinary one would do.

## 5. The captions: every change

All four captions are still under 120 words (Line 112, Chorus 108,
Greek 113, Sight 113). No
`why` and no `stands` had to be trimmed: none of these changes takes
anything out of a caption.

### Line

1. Old: "By his account the line of this play varies in length (those
   of the first speech run from 8 to 16 syllables) and has three
   stresses, the syllables a speaker leans on, parted two and one by a
   pause, a caesura." New: "By his account the lines of this play
   vary in length (those of the first speech run from 8 to 16
   syllables), and each has three stresses, the syllables a speaker
   leans on, divided two and one by a pause, a caesura." Two faults.
   "The line", singular, is the trade's way of speaking, and "those"
   had no plural to point back to. "Parted" is a quaint word where
   "divided" is the ordinary one.
2. Old: "The second has four accented words". New: "The second line
   has four accented words". No "first" stood before it.
3. Old: "It is from the passage Auden opened at random, where he could
   read no line with fewer than four stresses and heard five in what
   appears to be this one." New: "It stands where Auden opened the
   play at random: he could read no line there with fewer than four
   stresses, and heard five in what appears to be this one." A book is
   opened at random, not a passage. "Appears to be" is kept.

### Chorus

4. The sentence "The two scenes without a chorus are those in which
   Harry’s pursuers, the Eumenides, are shown." is moved, word for
   word, from the end of the caption to stand before "After *Murder in
   the Cathedral*". As the last sentence it had the weight of a
   conclusion and gave no reason (the poet and the examiner both
   record that it draws nothing). The caption now goes from what is
   there to Eliot's aim and his verdict, and ends on the verdict. See
   section 8, 3, for the plain cause the sentence could give.

### Greek

5. Old: "Under the play lies Aeschylus’s story of Orestes." New:
   "Aeschylus’s story of Orestes lies under the play." An inversion
   for effect.
6. Old: "those round him". New: "those around him". American English.
7. Old: "For its two killings the play has". New: "In place of its two
   killings the play has". "For" could be read as "to make its own two
   killings".

### Sight

8. Old: "With a theme of spiritual election, it is bound to seem".
   New: "When the theme is spiritual election, it is bound to seem".
   The opening phrase hung on nothing in the sentence.
9. Old: "He was certain Eliot did not mean it." New: "Auden was
   certain Eliot did not mean it." The sentence before speaks of Harry
   and John, so "He" was one of them for a moment.
10. Sight. Old: "Harry sees his pursuers at the window." New: "Harry
    sees his pursuers, the Eumenides, at the window." The line over
    the drawing and its key say "the Eumenides", the caption said only
    "pursuers", and nothing on this tab said they are the same. The
    Chorus caption already has the pairing. The caption is now 113
    words.

## 6. The notes at the foot: every change

1. Sight, `stands`. Old: "pp. 102 and 111 for his being chosen". New:
   "pp. 102 and 111 for Harry’s being chosen". Nothing in the note
   said whose.
2. `caveats[2]`. Old: "Eliot scanned no line of the play in his
   lecture". New: "Eliot marked the stresses of no line of the play in
   his lecture". "Scanned" is a term of the trade, used nowhere else
   on the page.

Not touched: `caveats[4]`, on how the counts were made, as the lead
asked. I added and removed no caveat.

Read and left as they stand: `title` (the examiner left it to the
lead; as a reader I found it true to the page: the first showing is in
the drawing room, where the whole first part is set, and the Greek tab
says at once why "Furies"), `about`, the four lines printed over the drawings, the other
three `stands`, the other ten `sources`, the other four `caveats`.

## 7. Words the drawings print: wording for the lead to set

I changed nothing in `facts` and nothing in the script. Each item gives
the key or the script line, the words now printed, and the words I
would put. Keys are under `plates[0].lenses[n].facts`.

### The artist's points, weighed

1. **Three and two** (art.md, section 4, 2). The fault is real for a
   reader. The Greek tab prints a large 3 over "times in its stage
   directions"; the Chorus tab has two red rings; the Sight tab says
   "twice". All three are right by the poet's record (notes.md,
   section 3: the name is in three stage directions, one on p. 60 and
   two on p. 106, and they are shown once on each page), but nothing
   printed says how three comes to two. The cure is one clause in
   `lenses[2].facts.name.inThePlay`, first sentence.
   Now: "The name stands in the list of persons and in three stage
   directions (pp. 60 and 106)."
   Put: "The name stands in the list of persons and in three stage
   directions, one on p. 60 and two on p. 106. They are shown twice,
   once on each page."
   That keeps to the record as it stands. If someone who can open the
   play confirms what notes.md implies (its row for p. 106: the third
   direction comes after the curtains have closed, when Agatha opens
   them on an empty window), the second sentence could say so
   instead: "The third names them after they have gone." I could not
   confirm it and did not try to open the play.
   On a phone this sentence is in the fold, so the large 3 stands
   alone there. I would leave that: the figure counts the name, and
   its label says so.
2. **Three `say` entries under `doesNotSee`** (art.md, 3). The fault
   is real. The list is headed "do not see them", so a reader takes
   each sentence as the play's evidence that the person does not see.
   Under Charles and Violet the sentence is about understanding, at
   the end of the play; under Ivy it is about the whole family. Only
   Amy's and Gerald's are evidence of not seeing. By the lens's own
   fourth ground the evidence for the other three is one place, p. 24,
   where Harry tells the family so.
   `lenses[3].facts.doesNotSee[2].say` (Charles), `[3].say` (Ivy) and
   `[4].say` (Violet): put, for each of the three, "With the family
   when Harry tells them that they do not see them."
   The two sentences about the end of the play ("At the end he starts
   to think there may be something he could grasp, if someone told
   him."; "At the end she says that none of it has made sense to
   her.") are good and true to the record, but they answer another
   question. If the lead keeps them, let each follow the new sentence
   and not stand for it. If they go, the pages under Charles and
   Violet become "24" alone.
3. **`lenses[0].facts.lines[1].stressesAudenHeard`: 5** (art.md, 4).
   Auden says less than this: that the line he calls his third sounds
   like five, and which line that is is inferred (the caption and
   `auden.say` both say "appears to be"). No drawing prints the key,
   so no reader sees the fault today. A later drawing could, and the
   key would then say flatly what the page takes care not to say. The
   cure is to take the key out of `lines[1]`: the number stands,
   rightly hedged, at `facts.auden.mostStresses` beside `auden.say`.
4. **The Sight caption says nothing of the audience** (art.md, 5).
   I would not add it to the caption. The two sentences the drawing
   prints (`facts.audience`) say what the red rings are and answer a
   question the tab raises, whether the figures are there for anyone
   but Harry. That is worth its place in the drawing. The caption has
   another job, from who sees to Auden's objection, and little room:
   it is 113 words. A caption need not repeat every note of its
   drawing. If the lead does want it said, it is a new claim in a
   caption and so not mine to add. The shortest form I can find is
   five words, which would fit after the second sentence: "The
   audience sees them twice."
5. **Titles not marked** (art.md, 6). Done: section 3.

### "It keeps the rule."

The Line drawing prints, under the first line shown: the syllables,
the stresses, then the `sides` string, then (script line 216) "It
keeps the rule." The lead asks whether a reader can take that as it
stands, given that the stress marks are the page's own hearing.

Yes, in substance. Three reasons.

- It does not hang on the doubtful part of the hearing. The line is
  seven words of one syllable. Only words 1, 3 and 6 carry a
  stress in ordinary speech: the other four are two articles, an auxiliary and
  a preposition. The poet and the examiner each marked it alone and
  agree (exam.md, section 3). What can be heard two ways is the place
  of the pause, after word 3 or after word 1, and the rule is kept
  either way (`lines[0].note`). So the verdict holds on every hearing
  the record gives.
- The condition is in sight. "As marked here" stands just before it
  in the same line of type, the line over the drawing says "as this
  page hears them", and the caption says "By them".
- The other verdict under the second line is not a verdict at all:
  "The rule asks 3." states the rule and leaves the reader to compare.
  That is well judged, since there the page's ear is the doubtful
  thing.

One reservation. It is the only sentence on the tab in which the page
rules instead of reporting, it is four words long, and a short
sentence is read alone. Read alone it sounds like a finding about
Eliot's verse. One word would tie it to the marks:

- script line 216, now 'It keeps the rule.' Put: 'That keeps the
  rule.' "That" is the division just described as marked: two before
  the pause and one after.
- the same line, now `The rule asks ${…}.` Put: `The rule asks for
  ${…}.` "Asks 3" is clipped past ordinary English.

### Smaller wordings in what the drawings print

1. `lenses[2].facts.pairs[6].play`, now "gives them at the last a holy
   name". Put: "in the end gives them a holy name". And in
   `lenses[2].facts.name.inThePlay`, now "and at the last he gives
   them a holy name (p. 111)". Put: "and in the end he gives them a
   holy name (p. 111)". "At the last" is a mock-antique turn, twice on
   one tab.
2. `lenses[2].facts.under`: asterisks round the four titles (section
   3).
3. Script line 258, the key of the Line drawing, now 'the line, parted
   at the pause'. Put: 'the line, broken at the pause'. The same
   quaint word I took out of the caption.
4. Script line 374, the order of voices under each row of the Chorus
   drawing, now for the first place a bare list that begins
   "Together," and ends "together." It reads as a sentence with no
   verb, and I had to read it twice to see that it is an order. Put a
   word before it: `In order: ${order}.` with the list in lower case.
5. `lenses[0].facts.lines[0].inThePlay`, what the pointer says of the
   first line shown. Its last sentence, now "Here it has happened.",
   is a short sentence set apart for effect. Join it to the one
   before: "In the first scene (p. 15) she says that this is what she
   does not want, and here it has happened."

Read and found fit to print as they stand, but for the items above:
the other strings of the script (heads, keys, the names of the four
folds, what the pointer says), `rule.say`, the note on the second line
shown and the note on its fifth stress, the paraphrases of the five
choruses and of the sixteen single voices, the eight pairs of the
Greek tab, the lists of the Sight tab, `election`, `john` and
`audience`.

## 8. Doubted and not changed (for the lead)

None of these is a doubt about a fact.

1. **`view.says`, two phrases.** "The problem of its verse": the head
   of the page does not say what the problem was, and a reader learns
   it only from the first sentence of the Line caption (a rhythm close
   to the speech of the day). "The three stresses Eliot counted in its
   line": "its line" is the trade's way of speaking, and can be read
   as one line of the play. I would put "in each line". The rule says
   never to touch `view`, so I marked its titles and left the words.
2. **The same sentence of Auden's, twice.** The second half of the
   view and the last three sentences of the Sight caption say one
   thing in nearly the same words (bound to seem, called, stupid, did
   not mean it), and the second entry of the list says most of it a
   third time. A caption is meant to show where the play bears the
   view out, so I left it. If the lead wants it said once in full, the
   caption is the place and the view could stop at "spiritual
   election".
3. **Chorus, the sentence I moved.** It is still an observation with
   no reason. The plain cause is already in the lens's last ground:
   the four leave the stage before each of the two scenes (pp. 44 and
   94). To say so in the caption is a new claim there, so it is the
   lead's: "The four are off the stage in the two scenes in which
   Harry’s pursuers, the Eumenides, are shown."
4. **Chorus, the two threes.** "Uneasy, then afraid, then lost" and
   "of a parish tea, of one another’s faults, of an unused ticket"
   stand back to back, each a three without "and". It is the one
   place on the page that sounds composed. I kept both: each item is a
   place in the play (the first, third and fifth places; the first,
   second and fifth), the fold under the drawing bears each out, and
   the contrast between them is what the tab has to show.
5. **Greek, "Auden noted that Orestes does not repent and is
   acquitted."** True to his page, and the examiner narrowed it. But
   it stands directly after Agatha's phrase and Harry's turning, and
   there it does work Auden did not do: he was not writing about this
   play, and he never set Orestes against Harry. The entry in the list
   says so; the caption does not. A clause would mend it ("Of
   Aeschylus’s Orestes, and not of this play, Auden noted …"), but it
   takes the caption past 120 words unless something else goes.
6. **Line, "accented words" and "stresses".** The caption counts
   stresses in the rule and "accented words" in the second line, on
   purpose (exam.md, section 3: the accent of four words in ordinary
   speech is safe on any hearing). A reader will not see the
   difference, and the drawing under the same line says "4 stresses or
   5". It does no harm. I note it because the two words look like one
   thing said two ways.
7. **The first long play.** The third entry of the list says "the
   first long play" and the Chorus caption names *Murder in the
   Cathedral*. They are one play and the page never says so. To name
   it in the entry is an identification no source on this page makes,
   so I left it: "Becket, in *Murder in the Cathedral*, was a martyr
   known to history."
8. **No tab pays nothing.** After each of the four a reader knows
   something about how the play is made that the page showed and did
   not only name: the rule and two lines tried against it; who the
   chorus are and what they say together and alone; what was kept and
   changed from Aeschylus; who sees, and why Auden objected.

## 9. What recurs, with counts

- **The copyright sentence**: 3 times, now 1 (section 2). "The
  edition on Auden’s list": 3 times, now 2. "Borrowed from the
  Internet Archive": 4 times with the label and its tag, now 3.
- **Every caption comes to rest on a fault found in the play**: 4 of
  4. Line ends on Auden unable to hear the rule; Chorus on Eliot's
  "unsatisfactory" and Auden's "more artificial"; Greek on Eliot's
  judgment that the two stories were not fitted; Sight on a
  convention that is bound to make the call seem to go by brains. Each is true and has its page, and the
  view is Auden's. But the one good thing he says of the play, that
  Eliot went far toward solving the problem of the verse, stands only
  in the view and in the first entry of the list, and no tab shows it.
  A reader who finishes the four tabs has been told four times what
  is wrong with the play and is then sent to borrow it. I could not
  mend this without adding a claim. It is the thing I would most want
  the lead to weigh.
- **"Later" for second thoughts**: "He later found" (Chorus), "Eliot
  later judged" (Greek), "he wrote later" (view). Three, each a true
  date. The method, not a tic.
- **"Auden wrote that"**: view and Sight caption, 2. "Auden noted
  that": 1. "By Auden’s report": 1. Not a tic.
- **That the marks are the page's own**: 6 times (the line over the
  drawing, the caption, "as marked here" twice in the drawing, the
  tab's `stands`, the third caveat). Four of them are on the tab
  itself. The examiner put them there on purpose, and I left them.
- **Three names for the figures at the window**: "Furies" (the title,
  and the Greek side of the Greek tab), "pursuers" (the captions),
  "the Eumenides" (the stage directions' name). The Chorus caption,
  the Greek drawing and now the Sight caption tie them together.
- **Mock-antique turns**: "parted" (2: the Line caption, mended; the
  key of the Line drawing, section 7), "at the last" (2, both in
  facts, section 7), "the like decision" (1, mended), "those round
  him" (1, mended), the inversion that opened the Greek caption (1,
  mended).
- Stock words of the lists in BRIEF.md and CRITIC.md: none. Dashes
  inside sentences: none (the dash that ends the second line shown is
  the play's). Rhetorical questions: none. "We": none. A sentence
  that tells the reader what to feel: none.

## 10. What on the page itself got in the way of reading

Faults of the kit that art.md lists are not said again here.

1. **The head calls a summary "The passage".** On this page there is
   no passage: what stands under that label is the story of the whole
   play, and the note at the foot of the plate says no text is
   printed. The label is the page's, not the reading's.
2. **Line tab, the doubtful fifth looks like a fifth.** In the second
   line shown, word 6 is set nearly as heavy as the four sure
   stresses. At a glance the eye counts five dark words; only the red
   ring under it says "may". The caption and the line under the marks
   say "four, or five".
3. **Sight tab, wide page: the two sentences on the audience have no
   head.** They stand between the lists and Harry's word, in the same
   small italic as the notes under each name, and I first read them
   as part of the last list. On a phone the same two sentences are
   headed "The audience" in the fold. The head would help on the wide
   page too.
4. **Greek tab, on a phone.** The drawing shows the eight points with
   "kept" or the change, and both stories are folded away. The fifth
   point then reads only "a killing becomes a doubt". The caption
   carries the sense, so a reader is not lost, but the tab's own
   matter is one tap further off than on any other tab.
5. **"Read on" before and after.** Before my change the note and its
   two links said each thing twice in the space of a hand. After it,
   the note is two sentences and each link says one thing more.

## 11. What was run, and how it ended

- `node build/pieces.mjs family-reunion`, the picture tool (twice,
  08:05 and 08:27) and `node build/tools/prose.mjs family-reunion`.
- After the last change, `node build/tools/check-reading.mjs
  family-reunion --print` ends:

      no problems
      no warnings
      the printed notes are fit to print

  One warning came up on the way and was answered: my first wording of
  the sentence on prosody took the first entry of the list to 114
  words (section 4, 2).
- Nothing was refused by the permission system of this session.
- Written: `reading.json` (small exact edits, none in `facts`,
  `grounds`, `checked`, `open` or any `quote`), this file, and the
  pictures in `shots/`. notes.md was not opened for writing.
