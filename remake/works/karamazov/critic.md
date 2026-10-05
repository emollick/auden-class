# karamazov: the critic's report

2026-10-03. Begun 12:04 UTC; the last change to reading.json was made
at 12:41 UTC. This file is written in parts; it is whole when the line
"Finished" stands at its foot.

The words of the novel are pointed at by row and word number, or named
singly as the captions already name them. Nothing of Auden's is quoted.
"Old" and "new" are the site's own sentences.

## What I read and ran

Read: BRIEF.md, CRITIC.md, EXAMINER.md; exam.md; art.md (its part on
the reading); the whole of reading.json; site/js/pieces/karamazov.js
(read only); the prose listing; the artist's pictures; then my own.

The checker before any change: no problems, no warnings, the printed
notes fit to print. After the last change: the same (its last lines
are at the foot of this report). Then `node build/pieces.mjs karamazov`
and the prose listing again: 3,916 printed words as found, 3,741 now.

The picture tool was run twice, as allowed: 12:32:50 to 12:33:24 UTC
(1280 and 390, with the page) and 12:36:25 to 12:37:42 UTC (1280, 390,
360 and 320, with the page). The 40 tab pictures and 27 page slices in
shots/ are from the second run. One change was made after it (change 7
below, one noun for a pronoun in the caption of "Words"), so the four
pictures `karamazov-first-2-words-*.png` show a pronoun at that one
place where the page now has the noun. (The page slices show the
first tab of each passage, so they are not touched by it.) The
artist's nine pictures (`karamazov-look-*`, `karamazov-trial-*`, 11:49
to 11:50 UTC) show the wording as it was before I began.

The permission system refused nothing. Twice a command was held back
with a notice that the service which judges commands was not answering
for the moment; I ran the same command again, unchanged, and it ran.

## In brief

- 26 fields of reading.json changed: the wording in 21, only the marks
  (asterisks or italics) in 5.
- 35 sentences touched: 10 cut whole, 24 reworded, trimmed or joined,
  1 moved. No caption is over 120 words (the longest, "Voices", is 118).
- Not touched: `view`, every `grounds`, `facts`, `checked`, `why`,
  `stands`, `open`; every mark on a passage, quotation, number, name
  and page reference; every `turn`, `join`, `heading`, `speakers`,
  `beside` and tab `label`. The script was not edited.
- After each cut I read the tab's `why` and `stands` against the new
  caption. All still fit; none needed trimming.
- No entry was taken out of the list of what Auden said, and I wrote
  nothing in notes.md.

## The changes

### Passage 1, "The first words in the prison"

**1. Voices, caption, first sentence** (`plates[0].lenses[1].caption`)
- Old: "… and inside his telling the old man speaks 4,988, more than
  half."
- New: "… and inside his telling the old man speaks 4,988, more than
  half the chapter."
- Fault: half of what. Two totals stand before it. (It is more than
  half of either; the drawing prints "half the chapter".)

**2. Voices, caption, fourth sentence**
- Old: "… in the Russian the two are the Aramaic of Mark’s gospel."
- New: "… in the Russian the two are Aramaic, as Mark’s gospel gives
  them."
- Fault: read as if the gospel were written in Aramaic.

**3. Voices, caption, last sentence**
- Old: "At the first, Ivan tells him what alone matters: the old man
  must have his say."
- New: "At the first interruption Ivan tells him that the one thing
  that counts is for the old man to have his say."
- Fault: "the first" of what; and the point kept back behind a colon.
  The new words are those of `facts["Ivan on his plan"][1].what`,
  which the drawing prints when the reader points at that place.

**4. Words, gloss under row 8.0, word 2** (`plates[0].lenses[2].notes[0].gloss`)
- Old: "Russian ty, the familiar you"
- New: "Russian *ty*, the familiar *you*"
- Marks only: a foreign word and a word named as a word.

**5. Words, the note on the same word** (`…notes[0].note`): cut.
- Old: "The Russian has one familiar pronoun here, and the brothers use
  it to each other. Garnett gives the brothers you and keeps thou for
  Christ and God: 220 times in this chapter, and for no one else."
- Fault: the caption's second and third sentences over again, an inch
  under them, down to the number. The mark, the gloss and the note's
  `source` stay; a note is optional.

**6. Words, the note on row 8.0, word 108** (`…notes[3].note`)
- Old: "From a Greek word for one who is able to choose; the Russian
  word is the same Greek one. Later the old man’s complaint is that
  the Prisoner left men free to choose."
- New: "The Russian word is the same Greek one."
- Fault: the first half is the gloss under the word and the caption's
  last sentence; the second sentence is the end of that same sentence.
  What is left is the one thing the caption does not say.

**7. Words, caption, last sentence** (`plates[0].lenses[2].caption`)
- Old: "The threat names him among the <b>heretics</b>, …"
- New: "The threat names the Prisoner among the <b>heretics</b>, …"
- Fault: a pronoun without its noun. The caption nowhere names the man
  spoken to, and the "he" later in the sentence could be taken for the
  old man. Made after the second picture run (see above).

### Passage 2, "The cry"

**8. Sentences, caption, second sentence** (`plates[1].lenses[0].caption`)
- Old: "In the rest of the long argument a sentence averages 23 words;
  here, nine."
- New: "In the rest of the old man’s long argument a sentence averages
  23 words; here, nine."
- Fault: the caption said "he" three times and never said who.

**9. Sentences, caption, seventh sentence**
- Old: "The short questions are Dostoevsky’s; Garnett also sets each
  command off as a sentence of its own."
- New: "The short questions are Dostoevsky’s; the two commands are
  sentences of their own only in Garnett’s English."
- Fault: "also" could be read as "Garnett as well as Dostoevsky". The
  fourth item of `grounds` says the reverse: in the Russian the two
  commands stand inside longer sentences.

**10. Earlier, caption** (`plates[1].lenses[1].caption`): one sentence
cut, the two round it joined.
- Old: "Here each of these comes back turned around. He asks why the
  Prisoner looks at him <b>silently</b>, he orders him to be angry,
  and now it is what he himself can say that <b>is known to Thee
  already</b>. In between the Prisoner has not spoken."
- New: "Here each of these comes back turned around, and in between
  the Prisoner has not spoken."
- Fault: the middle sentence gave the three turns that remarks 2, 3
  and 4 give, each beside its own lines: the same thing twice on one
  tab. Joined, because three short sentences in a row were left. The
  caption is 75 words now (104 before). `why` says the same as the
  new caption.

**11. Earlier, remark 3** (`…ties[2].say`)
- Old: "In the Russian meekly and mild are forms of one word."
- New: "In the Russian *meekly* and *mild* are forms of one word."
- Marks only.

**12. Mystery, caption, second sentence** (`plates[1].lenses[2].caption`)
- Old: "It is one of the three powers he names, …"
- New: "It is one of the three powers the old man names, …"
- Fault: "he", and no man named anywhere in the caption.

**13. Mystery, the note on row 20.0, words 1120 to 1121** (`…notes[1].note`)
- Old: "The paragraph has used the word six times already. It is one
  of the three powers that hold men’s conscience captive, miracle,
  mystery and authority, and it is what the people must follow
  blindly."
- New: "The three powers, he says, hold men’s conscience captive."
- Fault: the caption's first two sentences over again. What is left
  is the one thing the caption does not say.

**14. Mystery, the note on row 20.0, words 1145 to 1146** (`…notes[3].note`)
- Old: "The Russian word means both a mystery and a secret, and
  Garnett writes mystery for it all through this paragraph. After the
  poem Alyosha uses a plainer word: the old man’s secret, he says, is
  that he has no belief in God. Ivan agrees."
- New: "Where Alyosha speaks of the old man’s secret, the Russian has
  a plainer word."
- Fault: the caption's last two sentences over again (and the gloss
  under the word). What is left is the one new fact, that the Russian
  changes its word there.

**15. Plan, caption, first sentence** (`plates[1].lenses[3].caption`)
- Old: "… to its last word, <i>Dixi</i>, the Latin with which an
  orator closed."
- New: "… to its last word, the Latin <i>Dixi</i>, with which an
  orator closed a speech."
- Fault: "the Latin with which" read as the language, and "closed"
  had nothing to close.

### Passage 3, "The kiss"

**16. Answer, caption** (`plates[2].lenses[0].caption`): one sentence
moved, not reworded.
- The sentence "Auden writes that Jesus gives him no answer, having
  no need to." stood fourth, after the sentence on the Prisoner's
  three verbs. It now stands second, after the first sentence.
- Fault: where it stood, "him" had lost its noun (the sentence before
  it was about the Prisoner), and it came close after the bold words
  in which the story calls the kiss an answer (row 31.0, words 81 to
  85), so that the caption seemed to say yes and then no. The
  order now: he wants words; Auden: he is given no answer; what does
  come; what the story calls it. See doubt 5 below.

**17. Answer, caption, last sentence**
- Old: "Asked what becomes of him, Ivan says: …"
- New: "Asked what becomes of the old man, Ivan says: …"
- Fault: the last men named are the old man and the man he lets
  out; "him" could be either.

**18. Again, remark 2** (`plates[2].lenses[1].ties[1].say`)
- Old: "In the Russian Alyosha is also silent as he kisses, a word
  Garnett leaves out."
- New: "In the Russian Alyosha also kisses him *silently*, a word
  Garnett leaves out."
- Fault: "a word" pointed at no word in the sentence.

**19. Again, remark 3** (`…ties[2].say`)
- Old: "The Russian has the same adverb and verb, with an old poetic
  word for the old man’s lips and the everyday word for Ivan’s."
- New: "The Russian has an old poetic word for the old man’s lips and
  the everyday word for Ivan’s."
- Fault: the caption's second sentence already says "with the same
  adverb and verb".

**20. Again, remark 4** (`…ties[3].say`)
- Old: "The old man says go and never come again. Ivan asks for the
  kiss once more and then says go, in the Russian the same word."
- New: the same, with *go* marked both times. Marks only.

**21. Russian, caption, fourth and fifth sentences** (`plates[2].lenses[2].caption`)
- Old: "… Dostoevsky has ninety-year-old lips, …" and "… Dostoevsky
  has burns."
- New: "… Dostoevsky has <i>ninety-year-old lips</i>, …" and "…
  Dostoevsky has <i>burns</i>."
- Fault: "Dostoevsky has burns" reads at first as an injury. Italics
  only, as the same caption sets its next quoted phrase.

**22. Russian, the note on row 31.0, word 73** (`…notes[0].note`)
- The words *softly*, *slowly*, *peacefully* and *gently* marked.
  Marks only.

**23. Russian, the note on row 31.0, words 79 to 80** (`…notes[1].note`)
- Old: "The Russian says ninety-year-old lips, with an old poetic word
  for the mouth. Ninety years is how long the old man has kept
  silent, and the same word names the lips from which the Prisoner
  was to hear the secret."
- New: "The Russian has an old poetic word for the mouth, and the
  same word names the lips from which the Prisoner was to hear the
  secret."
- Fault: the gloss under the word and the caption's fourth sentence
  already give the Russian phrase and the ninety years.

**24. Russian, the note on row 31.0, word 85** (`…notes[2].note`)
- Old: "The old man’s first words met no answer and forbade one. When
  his speech is over he waits for the Prisoner to answer him, and
  this is what comes."
- New: "When his speech is over the old man waits for the Prisoner to
  answer him, and this is what comes."
- Fault: the first sentence is the end of the caption's third, almost
  word for word.

**25. Russian, the note on row 33.0, word 2** (`…notes[3].note`)
- Old: "The Russian verb is burns: the kiss burns on his heart.
  Garnett has burns for the same verb earlier, where love burns in
  the Prisoner’s heart as he comes among the people."
- New: "Garnett has *burns* for the same Russian verb earlier, where
  love burns in the Prisoner’s heart as he comes among the people."
- Fault: the first sentence is the gloss and the caption's last two
  sentences.

### More from Auden, and the caveats

**26. First entry** (`auden[0].says`)
- Old: "… the three questions hold in small the whole of mankind’s
  later history."
- New: "… the three questions gather up the whole of mankind’s later
  history."
- Fault: "hold in small" is not an idiom a reader meets. The research
  note (E_pd_pearce.md) uses "gather up" for the same clause.

**27. Second entry** (`auden[1].says`)
- Old: "… if he had been listening, in place of the Inquisitor, to an
  attendant who only repeated his master’s words."
- New: "… if he had been listening to an attendant who only repeated
  his master’s words, and not to the Inquisitor himself."
- Fault: "in place of the Inquisitor" could be taken with "he": Jesus
  listening in the Inquisitor's place.

**28. Fifth entry** (`auden[4].says`)
- Old: "… Auden set the American literary tradition …"
- New: "… Auden sets the American literary tradition …"
- Fault: tense. The same entry goes on "He calls … and says".

**29. Sixth entry** (`auden[5].says`)
- Old: "In its row for the hero, in the column headed Hell of the Pure
  Word, knowledge without power, it lists the Grand Inquisitor with
  Iago and Stavrogin under The Demonic Villain."
- New: "In its row for the hero it lists the Grand Inquisitor with
  Iago and Stavrogin under The Demonic Villain, in the column headed
  Hell of the Pure Word, knowledge without power."
- Fault: three commas' worth of heading before the verb; the reader
  could not tell where the heading ended.

**30. Third caveat** (`caveats[2]`): last sentence cut.
- Old: "The page says where this matters."
- Fault: a sentence of reassurance; it tells the reader nothing he
  can check there.

## The marks

Asterisks added in six small fields, twelve words: *ty* and *you*
(change 4); *meekly* and *mild* (11); *silently* (18); *go*, twice
(20); *softly*, *slowly*, *peacefully*, *gently* (22); *burns* (25).
Each is a word named as a word, or a foreign word given with its
meaning. Italics added to two phrases in one caption (21). No bare
title was found: in `about`, `where`, the view, the list and every
`source` the titles were already marked. The glosses that give only a
meaning in English ("Russian: burns", "in Russian, mystery or
secret") name no foreign word and are left as they are.

## What recurs

**The same thing said twice on one tab: 9 places.** This is the fault
of the piece. As found, 7 of the 12 notes on the three word tabs said
over again what the caption an inch above them says (Words 2, Mystery
2, Russian 3); the caption of "Earlier" gave in one sentence what
three of its four remarks give; one remark on "Again" repeated a
clause of its caption. All nine are mended (changes 5, 6, 10, 13, 14,
19, 23, 24, 25). The rule I kept: the general statement and its reason
stay in the caption, and a note keeps what belongs to its one place.
The notes went from 149 words to 87 on Words, 142 to 87 on Mystery,
145 to 112 on Russian.

Left on purpose, though of the same kind:
- Remarks 2 to 4 of "Earlier" still begin by naming what the caption's
  second sentence lists. Each remark has to name both its places.
- Remark 5 of "Again" says plainly what the caption's fourth sentence
  says in the poet's own terms.
- The note on *softly* (Russian) names places the caption names. It
  carries the count of four and the fourth place.
- The note on the last word marked on "Russian" still names the
  Prisoner's coming, as the caption does. It carries the fact that
  Garnett has the other English verb there.
- A gloss under a word and a caption that gives the same meaning: that
  is how a word tab is made.
- "Questions" says what the figure is in its plain line and again in
  the caption.

**A pronoun or pointer without its noun: 6 places in 5 captions**
(changes 3, 7, 8, 12, 16, 17). The piece calls its two men "the old
man" and "the Prisoner" throughout, which is clear. But five captions
said "he", "him" or "the first" where the noun was missing or too far
off, and a caption is read alone when a reader opens a tab.

**A phrase that could be read two ways, or stopped short: 6 places**
(changes 1, 2, 9, 15, 18, 21).

**Once each:** an ending kept back behind a colon (3); an idiom no
reader meets (26); an order of clauses that hid the sentence (27, 29);
a tense (28); a sentence of reassurance (30).

**Looked for and not found:** a dash in the site's own sentences; "we";
a question put to the reader; a sentence that only announces the next;
any stock word on the checker's list. The threes on the page (three
temptations, three powers, three verbs) are counted from the text and
not made for the rhythm.

**Counted and left:**
- Auden is named in 6 of the 10 captions, once in each, in six
  different turns of phrase; he has the last sentence in 3 (Questions,
  Sentences, Earlier). That is not a tic. Two of his points do come
  more than once: see the fourth doubt below.
- "Russian" comes 20 times in captions, glosses, notes and remarks (21
  as found) and "Garnett" 7 times (9 as found). It is the method of
  the piece, a translation read against its original, and each use
  carries a fact of its own.
- All four remarks on "Earlier" turn on "Now" or "This time". The tab
  sets then against now; the turn is its matter.
- All nine remarks are two or three short sentences. Right for a note.

## Doubted and not changed

1. **Words, caption, last sentence** (the word at row 8.0, word 108,
   set beside the old man's complaint about free choice). Each half
   is checked. No source read says Dostoevsky meant the two to meet,
   as the examiner says in `open`; the caption joins them with "and",
   and a reader will take that as a meaning. It is the poet's point
   and I left it; it now stands once on the tab and not twice (change
   6). If the lead takes it out, the caption ends well at "the
   chapter’s prayers"; then `why` loses its clause after the
   semicolon and `stands` its last sentence.

2. **Russian, caption, fourth sentence** (the lips and the ninety
   years of silence): the other pairing the examiner named, of the
   same kind. Left; the note no longer says it a second time (23).

3. **The view names "the third temptation"** before the page has said
   what the temptations are. A reader finds out on the fourth tab of
   the second passage, or in the list. `view` is not mine. A clause
   in `about` would mend it, but that would be a new statement, so I
   did not write one.

4. **Two points of Auden's come more than once.** That Jesus has no
   need to answer: in the view, at the end of "Questions" and in
   "Answer". That the argument is nowhere put more fully: in the view
   and, almost in the same words, in "Voices" ("wrote" there and in
   the view; "writes" in "Answer"). Each tab is read alone and leans
   on its sentence, so I left all of them.

5. **Answer.** Even after change 16 the caption holds Auden's "no
   answer" and the story's own word for the kiss. That is the true
   state of things (the first caveat says he never mentions the
   kiss). If the lead judges that the move alters what the poet
   meant, the old order is given under change 16.

6. **Again, caption, fourth sentence** (Alyosha's question "sets Ivan
   beside the old man", Ivan's remark "sets Alyosha beside the
   Prisoner"). A reading and not a count; but it says no more than the
   two bold lines say, and remark 5 gives them plainly. Left. On the
   same tab `stands` gives the place where Ivan calls Alyosha his
   listener. Nothing in the caption leans on it, as found or now;
   only `why` does. Harmless, and not made by any cut of mine, so I
   left it; the lead may drop that sentence of `stands`.

7. **Sentences: "four statements".** The key gives three underlines
   to "a statement" and one, in another colour, to "the secret told",
   so a reader who counts colours finds three. The count is right
   (`grounds`, first item), and the sixth sentence does say that he
   then tells the secret. Not changed: its "Then" carries the turn
   (he has just said that all he can say is known), and a longer key
   label changes how the key sets. If the lead wants it mended, the
   label could read "a statement: the secret", or the first sentence
   could end "and four statements, the last of them the secret".

8. **Sentences: "The later questions he answers himself".** The
   examiner doubted it and kept it. The statements at words 1101 to
   1110 and 1122 to 1132 do follow his own questions. Left.

9. **Caveat 1, "search snippets of a scanned copy".** Working words,
   but exact, and fifteen other pieces use the word in their caveats
   or sources. Left.

10. **Headwords in the foot.** Under "What each caption stands on"
    and in the sources, dictionary headwords stand bare after
    "under": on Words, "under hinder, semblance, heretic and heresy"
    reads badly. Other pieces differ (castle and dutchman mark them
    with asterisks; hamlet and gotterdammerung do not). CRITIC.md
    does not name `stands` or `sources` among the fields to mark, so
    I left them. One rule for the whole site would be better.

## For the lead: words in `facts` and in the script

I changed none of these. Each is a string the drawings print.

1. `plates[1].lenses[3].facts.parts[6].part`
   - Now: "The sentence of burning, said again"
   - Better: "The threat of burning, said again"
   - Why: the first tab of this same passage is called "Sentences" and
     counts them; here the word has its other sense, a judge's. The
     caption of "Words" calls the same thing "the threat of burning".
     It is printed as a label on the drawing of "Plan" and in what
     the pointer says there.

2. `plates[1].lenses[3].facts["Auden quotes"][4].what`
   - Now: "the cry"
   - Better: "the opening of this passage"
   - Why: line 435 of the script makes the pointer say "Auden quotes:
     the cry (as the cry of men who know they have failed)", the same
     noun twice. He quotes only the opening (row 20.0, words 1047 to
     1075, by the last item of `grounds` on "Sentences"), and the
     caption of "Sentences" says "the opening of these lines".

3. Script lines 246 to 247 (the pointer on the unbroken run, "Voices")
   - Now prints: "Unbroken: 4,527 words (Ivan, in his own voice 17 and
     The Grand Inquisitor 4,510)."
   - Better: "Unbroken: 4,527 words (Ivan, in his own voice, 17; The
     Grand Inquisitor, 4,510)."
   - How: in line 246 a comma after `${v.voice}`; in line 247
     `who.join('; ')` in place of `series(who)`. A name that has a
     comma of its own runs into its number as it is.

4. Smaller, and only if the lead is there anyway:
   - Line 276, the key of "Voices": "at least a hairline" is short for
     "never drawn thinner than a hairline". Understood at the second
     reading.
   - `plates[1].lenses[3].facts.speech["the last word means"]` prints
     under *Dixi* as "The last word means I have spoken, in Latin: …".
     The kit's note reads asterisks, so "*I have spoken*, in Latin: …"
     would set the meaning upright. I could not try it: the same
     string also goes into the folded table.

## The list of what Auden said

Six entries, all kept; four reworded (changes 26 to 29). Nothing was
moved to notes.md, and `sources` is as it was.

The one that is doubtful is the fifth, `auden[4]` (the note in *New
Year Letter*). It names Dostoevsky only by the way, in a remark about
American writing, and says nothing of this novel. It was written in
the year of the course, which is the ground the examiner kept it on.
I would keep it on that ground and no other. For the lead.

In the sixth entry the chart's two headings are Auden's own words,
printed with their capitals and without quotation marks (eight words,
and a gloss of three). Left as the examiner set them.

## The artist's two notes

1. The reading link among the facts of "Plan" that opens the book
   before the part it names begins (`facts.parts[6]`). Nothing in the
   words says the link lands on the part's first word, so there is
   nothing to mend in them. The link is the kit's.

2. The key of "Plan" prints "*hinder*, 5 times" and the caption sets
   two words in bold. Both are true by the artist's count, and a
   reader meets no clash: the key names the verb, the caption lights
   the two words in the passage. Left. If the lead wants them alike,
   the list in `facts` can be named for the two words (the script
   finds it by its shape and prints its name); every pointer on a dot
   would then print the two words as well.

## What on the page got in the way

The faults of the kit are the artist's to report and are not listed.
Apart from those:

- The first thing the page says of Auden turns on "the third
  temptation", which the page has not yet explained (doubt 3).
- On "Mystery" two of the four notes are headed by the same two words
  (row 20.0, words 1120 to 1121 and 1145 to 1146), so in the list a
  reader cannot tell them apart until he points at one. The words of
  the notes are not at fault; the same phrase is marked twice. If the
  second mark stood on word 1146 alone the heads would differ. A mark
  is not mine to move.
- On "Sentences" the key and the count in the caption do not add up
  at first sight (doubt 7).
- The two pointer sentences given under "For the lead", 2 and 3.

Nothing else. Read cold after the changes, each tab can be followed
without the others.

## For whoever works on this next

A copy of reading.json as I found it (md5
23c91be9f4c4229a4c68d1558748f411; the file is now
40ea241c1891d194bbecb5ca1f341e61) is at
/tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/kcritic/reading.before.json.
It is outside the project and will not outlast the session.

## The checker's last lines

After the last change, 12:42 UTC, `node build/tools/check-reading.mjs
karamazov --print` ended:

    no problems
    no warnings
    the printed notes are fit to print

Then `node build/pieces.mjs karamazov` (35 pieces with a reading) and
`node build/tools/prose.mjs karamazov` (3,741 words).

Run once more at 12:51 UTC, with this report written: the same three
lines. notes.md is as I found it (last written 07:08 UTC).

Finished, 2026-10-03, 12:53 UTC.
