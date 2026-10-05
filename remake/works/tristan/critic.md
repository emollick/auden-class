# Tristan und Isolde: the critic's record

Piece `tristan`. Critic at work on 3 October 2026, 14:29 to 15:26 UTC,
after the poet (`notes.md`), the examiner (`exam.md`), the artist
(`art.md`) and the lead's settings of 14:28 (`notes.md`, "The lead before
the critic"). No line of the libretto and no sentence of Auden's is typed
out here: words of the passages are pointed at by passage, tab, row and
word number. "Old" and "new" below are the site's own sentences.

## In short

- 35 sentences reworded or cut (5 of them cut): in 10 of the 11
  captions, 5 small notes, 4 of the notes on what a caption stands on,
  the summary of the passages, 2 entries of the list and the first
  caveat. 34 words marked as words in 21 small notes, and the opera's
  title marked in the line under the page's title.
- One entry taken out of the list under "More from Auden" (the essay on
  Falstaff); eleven are left.
- One thing added that was not on the page, for the lead to strike if it
  is not wanted: a gloss of Agape in the list (change 33).
- The faults that came up most: a pointing word, a pronoun or a name
  with nothing near it to say what it is (9 sentences); a clipped or
  quaint turn where the ordinary one would do (8); a sentence that says
  what the picture, its key or the caption already says (6, four of
  them cut); a term with no plain words (4); the closing frame "Auden
  wrote that" (11 of 11 captions, 3 varied).
- Checker: no problems, no warnings, fit to print. Sweep against the
  four scans: 3 runs of five words left, all met by chance (section 8).
- One edit was made after the second and last run of the picture tool:
  four words put back in one caption (change 17). The two pictures of
  that tab lack them. The tool was not run a third time.
- The permission system refused nothing.

## 1. What was read, and with what

- `remake/BRIEF.md`, `remake/CRITIC.md` (all of it), "The printed notes"
  in `remake/EXAMINER.md`, `remake/KIT-CHANGES.md` (the fourth to the
  seventh mending, for how the small notes are set).
- `notes.md` (all), `exam.md` (sections 6 to 12), `art.md` ("In short",
  "The page, plate by plate", "In the reading, not mine to change",
  "Proposed for the reading").
- The page as a reader sees it. Built at 14:30 UTC
  (`node build/pieces.mjs tristan`), then the picture tool once for the
  whole piece (14:30:17 to 14:30:54; "nothing reported"): the whole page
  at 1280 and 390 and each of the eleven tabs at both widths, into
  `shots/`. Every 1280 picture was read, and the 390 pictures of the
  page head, the first passage, `names` Crossing and `end` English.
- `review/remake/prose/tristan.md` (5,087 words then, 4,999 now), read
  once from top to bottom before anything was marked, then sentence by
  sentence against `reading.json`, the checker's proof and the pictures;
  and read again from top to bottom after the changes.
- To judge a paraphrase or a shared run: short windows of the scan of
  *The Dyer's Hand* (pp. 121 to 122, 184, 469 to 473) and of *Forewords
  and Afterwords* (p. 25), and of the poet's search snippets of *Prose*,
  Volume II (pp. 138 to 139 and 216). Nothing was copied from them.
- Before the first edit the reading was copied to `critic/before.json`
  (the same file, to the byte, as the lead left it at 14:26). The edits
  were made only with `build/tools/edit-exact.py`; the lists are in
  `critic/`, in the order they were applied: `edits-1-marks.json`,
  `edits-2-captions.json`, `edits-3-list.json`, `edits-3b-list.json`,
  `edits-4-notes.json`, `edits-4b-notes.json`, `edits-4c-notes.json`,
  `edits-5-captions.json`, `edits-6-scope.json`. Lists 3b, 4b and 4c
  shorten what 3 and 4 had made too long for the checker's limits.
- The second and last run of the picture tool: 15:12:32 to 15:13:07 UTC,
  after list 5 ("nothing reported"). Read: the eight slices of the page
  at 1280; the tabs `work` Rhyme and Words, `names` Grammar, Rhyme and
  Words, `end` Rhyme, Beat and English at 1280; the head of the page and
  `end` Sentence at 390. Every change showed as meant.
- After that run, on reading the changes over, one of them was found to
  have dropped a limit the writers had set (change 17). List 6 put the
  four words back at 15:17. Checker, build, prose and sweep were run
  again after it; the picture tool was not.
- A comparison of `reading.json` with `critic/before.json`, path by
  path, after the last edit: 42 fields differ (`where`, `about`, 10
  captions, 4 `stands`, 16 notes on words, 5 remarks, the `says` of 2
  entries, 2 lines of `sources`, 1 caveat), and one entry is gone from
  the list. No `turn`, `join`, `heading`, `label`, `speakers`,
  `beside`, `stage`, `under` or row was touched, no mark, no gloss, no
  `grounds`, no `why`, no quotation, and no `source` or `checked` but
  those of the entry that was moved whole (it stands whole in
  `notes.md`: compared by script). The checker's proof, which prints
  every row and every mark with the words it stands on, is the same
  byte for byte before the first edit and after the last.

## 2. Every change

Thirty-six, numbered through the page in the order a reader meets them.
Word counts are the checker's. Where only a mark was put and no word
changed, the change is in section 4.

**The head of the page**

1. The line under the title (`where`). The opera's title was bare and
   is now between asterisks. No word changed (section 4).
2. The summary of the passages (`about`), second sentence.
   - Old: "She orders a drink of death for the two of them, and her maid
     Brangäne pours a love potion in its place."
   - New: "She orders a death potion for the two of them, and her maid
     Brangäne pours a love potion in its place."
   - Fault: a quaint phrase where the ordinary one would do. The two
     potions now stand in like words, which is the point of the
     sentence.

**First passage, "Whose work"**

3. Verbs, caption, fifth sentence.
   - Old: "Seven are Lady Love’s, from past to what may come: …"
   - New: "Seven are <b>Frau Minne</b>’s, Lady Love’s, from past to
     what may come: …"
   - Fault: a name left unexplained. This is the first tab, and it
     spoke of Lady Love before the page had said which words of the
     lines that is; the English beside the passage calls her something
     else (p:27.14, words 0 and 1). The Words tab says it, two tabs on.
     109 words to 111.
4. Verbs, the note on what the caption stands on (`stands`).
   - Old: "… the present subjunctive: English Wikipedia, “Subjunctive
     mood.”"
   - New: "… the form for what may be, the present subjunctive: English
     Wikipedia, “Subjunctive mood.”"
   - Fault: a term of grammar with no plain words beside it. The
     caption says "what may come" and "may choose, may lead"; the note
     now ties the term to that. 53 words to 59.
5. Rhyme, caption, second sentence.
   - Old: "<b>Werk</b>, work, and <b>Hand</b>, hand, end the two lines
     of Isolde’s own act."
   - New: "<b>Werk</b>, work, and <b>Hand</b> end the two lines of
     Isolde’s own act."
   - Fault: the obvious explained. The gloss was the word itself.
6. Rhyme, caption, fourth sentence.
   - Old: "Between, <b>Hand</b> rhymes with …"
   - New: "In between, <b>Hand</b> rhymes with …"
   - Fault: a clipped opening that calls attention to itself.
7. Rhyme, caption, fifth sentence.
   - Old: "… one first sound joins <b>Minne</b> to <b>meiner Macht</b>,
     my power, which she takes the work from."
   - New: "… one first sound joins <b>Minne</b>, Love, to <b>meiner
     Macht</b>, my power, which she takes the work from."
   - Fault: a word left without its sense. "She" pointed at a German
     noun that this tab had not put into English. 108 words to 109.
8. Words, caption, last sentence.
   - Old: "Auden wrote in 1948 that the myth could only arise where
     people are taught that giving the self to God is a free and
     absolute commitment."
   - New: "The myth, Auden wrote in 1948, could only arise where people
     are taught that to give oneself to God is a free and absolute
     commitment."
   - Fault: two. The closing frame, which every caption had (section
     5). And five words in a row shared with Auden's own sentence on
     p. 25 of *Forewords and Afterwords*, in the sentence that reports
     it (words 110 to 114 of the old caption); the new wording shares
     no run of five with the scan. What is claimed is the same.
9. Words, the note at row 12.0 (`notes[0]`), second sentence.
   - Old: "… and five times in these two speeches."
   - New: "… and five times here, in Brangäne’s speech and Isolde’s
     answer."
   - Fault: a pointing word with nothing to point at. The page shows
     the end of one speech; the other is not on it. The examiner's
     count (`exam.md`, "Facts about the text") is of those two
     speeches.
10. Words, the note at row 15.0, word 2 (`notes[7]`), second sentence.
    - Old: "In Luther’s Bible God takes a father’s goods from him and
      gives them to another with this verb."
    - New: "Luther’s Bible uses this verb where God takes a father’s
      goods from him and gives them to another."
    - Fault: hard to follow. "With this verb" came after two clauses it
      did not belong to, and read at first as the way the goods were
      given.
11. Words, the note at row 22.0 (`notes[15]`), second sentence.
    - Old: "Its kin erkoren, chosen, is Isolde’s word in Act 1, …"
    - New: "A related word, *erkoren*, chosen, is Isolde’s word in Act
      1, …"
    - Fault: a quaint word ("kin") for a plain one.

**Second passage, "Two names"**

12. Crossing, `stands`.
    - Old: "… a libretto of 1906 prints his lines first, bracketed with
      hers."
    - New: "… a libretto of 1906 prints Tristan’s lines first, bracketed
      with Isolde’s."
    - Fault: two pronouns with no one in the note to stand for. Whose
      lines come first is in the examiner's record (`exam.md`, the
      second passage, and item 20 of its list). 69 words, as before.
13. Grammar, caption, fourth sentence.
    - Old: "The lines set phrase beside phrase, and in <b>endlos
      ewig</b>, endless and eternal, two words of like meaning."
    - New: "The lines set phrase beside phrase, and <b>endlos ewig</b>,
      endless and eternal, is two words of like meaning."
    - Fault: a verb left out for the rhythm. The second half had to be
      read twice to find what "in" hung on.
14. Grammar, `stands`.
    - Old: "… the German infinitive used as a noun: “German verbs” and
      “German nouns” there."
    - New: "… that form used as a noun in German: “German verbs” and
      “German nouns” there."
    - Fault: a term of grammar the page uses nowhere else, with no
      plain words. The caption calls it "that form", and the clause
      before this one in the note has just described it. 65 words to 66.
15. Rhyme, caption, first sentence. Old: "The letters mark the rhymes."
    Cut. Fault: padding. The key the page prints under the caption of
    every Rhyme tab says it, and says more.
16. Rhyme, caption, second sentence. Old: "In this German text the first
    three lines are Isolde’s and the next three Tristan’s." Cut. Fault:
    it now says what the picture shows. The lead has set the singers'
    names over their lines, and the Crossing caption, the first a
    reader meets on this passage, says it together with the contrast
    that matters (the vocal score).
17. Rhyme, caption, third sentence (now the first).
    - Old: "Each name rhymes only with itself; her lines and his share
      one rhyme, <b>ich</b>, I."
    - New: "In this German text each name rhymes only with itself;
      Isolde’s lines and Tristan’s share one rhyme, <b>ich</b>, I."
    - Fault: "her" and "his" pointed back at the sentence that was cut.
      The words "In this German text" are kept from that sentence: they
      limit what is claimed, since in the vocal score the two do not
      share that rhyme (third caveat). My first wording of this change
      (list 2) left them out. List 6 put them back after the second run
      of the picture tool, so `shots/tristan-names-2-rhyme-1280.png`
      and `-390.png` show the sentence without its first four words.
18. Rhyme, caption, last sentence.
    - Old: "… that Wagner keeps the voices from unison until the duet’s
      end, and that their lives are to go the same way."
    - New: "… that Wagner keeps the lovers’ voices from unison until the
      duet’s end, and that their lives are to go the same way."
    - Fault: "their lives" had only "the voices" to point back to. 108
      words to 93 over changes 15 to 18. The `why` and the `stands`
      lean on nothing that was cut.
19. Words, caption, first sentence. Old: "The plain sense stands under
    each line." Cut. Fault: it tells the reader what they can see.
20. Words, caption, fifth sentence. Old: "It is a knowing with no name
    in it." Cut. Fault: an ending that poses, a short sentence for
    effect that turns the two sentences before it into a saying. The
    caption still goes from the words (without naming; a knowing) to
    Auden's remark about coming to know each other. The `why` says the
    same in its own words and still fits. 110 words to 94.
21. Words, the note at row 6.0 (`notes[6]`).
    - Old: "Earlier in the scene Tristan speaks of the two dying so as
      to live undivided and namenlos, a word that means nameless and,
      in elevated use, beyond telling. The English printed here leaves
      the word out."
    - New: "*Namenlos*, Tristan’s word earlier in the scene, means
      nameless and, in elevated use, beyond telling. The English
      printed here leaves the word out."
    - Fault: padding. The first half was the caption's first sentence
      over again, a hand's breadth above it. The note keeps what the
      caption does not say.
22. Words, the note at row 13.0 (`notes[13]`), second sentence.
    - Old: "… while its German kin kept the sense of pleasure."
    - New: "… while the German word kept the sense of pleasure."
    - Fault: the quaint word of change 11 again.

**Third passage, "The last twelve lines"**

23. Sentence, caption, second sentence.
    - Old: "<i>Sollen</i> is the verb for what a will not one’s own
      requires; …"
    - New: "<i>Sollen</i> is the verb for what another’s will requires;
      …"
    - Fault: a roundabout turn.
24. Sentence, caption, third sentence.
    - Old: "This is her last verb with a person, and <b>mich</b>,
      myself, three lines on, her last word for herself."
    - New: "This is her last verb that says who acts, and <b>mich</b>,
      myself, three lines on, is her last word for herself."
    - Fault: a term of grammar not said in plain words on this passage
      (the second passage says it as "who does a thing"), and the verb
      left out of the second half.
25. Sentence, caption, fourth sentence.
    - Old: "After that line, no pronoun and no question mark: three
      phrases beginning with in, two bare verbs, …"
    - New: "After that line there is no pronoun and no question mark:
      three phrases beginning with <b>in</b>, two bare verbs, …"
    - Fault: a sentence with no verb, and a word named as a word with
      nothing to mark it, so that "with in, two" read as a slip. It is
      marked as a word of the passage. Pointed at, it lights the first
      word of the four phrases the key names (rows 45.0, 47.0, 48.0 and
      49.0); the caption counts the three after row 46.0. 110 words to
      111.
26. Rhyme, caption, first sentence. Old: "The letters mark the rhymes."
    Cut. Fault: as change 15.
27. Rhyme, caption, the sentence on the last rhyme.
    - Old: "The last pair is the rhyme that closed the first lines
      given to both lovers in Act 1 and their duet in Act 2: there you
      alone known to me, then aware as one, here <b>unbewußt</b>,
      unaware."
    - New: "The last two lines have the rhyme that closed the first
      lines given to both lovers in Act 1 and their duet in Act 2:
      there, you alone known to me; then, aware as one; here,
      <b>unbewußt</b>, unaware."
    - Fault: two. "The last pair" came straight after three rhyme
      words and read as the last two of them. And three places ran
      together with their three glosses, with nothing to part place
      from gloss.
28. Rhyme, caption, last sentence.
    - Old: "Auden wrote that the passion of the two aims past each
      other at Nirvana, a unity before anything was many."
    - New: "Each one’s passion, Auden wrote, aims past the other at
      Nirvana, a unity before anything was many."
    - Fault: the closing frame, and a slip of grammar ("the passion of
      the two aims past each other"). The ground has each as the
      other's means to something else. 97 words to 90.
29. Beat, caption, last sentence.
    - Old: "Auden held that the line a composer writes for the voice is
      decided by the syllables of the words."
    - New: "The line a composer writes for the voice, Auden held, is
      decided by the syllables of the words."
    - Fault: the closing frame. "Auden held that" closed this tab and
      the next.
30. English, caption, last sentence.
    - Old: "… and would be even in better verse than his own, since the
      new syllables do not fit the notes."
    - New: "… and would be even if the English were better verse than
      the German, since the new syllables do not fit the notes."
    - Fault: "his own" could be Auden's verse or Wagner's. The ground
      has it as an English finer than the German. 110 words to 113.
31. English, `stands`.
    - Old: "The translators, and their English under the notes: …"
    - New: "The translators, and their English under the music: …"
    - Fault: on a page with notes of its own, "the notes" read first as
      those.

**The list, the sources, the caveats**

32. The second entry of the list (`auden[1]`), first sentence.
    - Old: "The same summary of 1941 sets the legend of Don Juan beside
      that of Tristan as its opposite: that legend says yes to the
      flesh and no to the spirit, and lives for the present moment
      alone."
    - New: "Auden’s review of 1941, summing up de Rougemont, sets the
      legend of Don Juan beside that of Tristan as its opposite, a
      legend that says yes to the flesh and no to the spirit and lives
      for the present moment alone."
    - Fault: two pointing words. "The same summary" pointed past three
      passages and an entry to the head of the page; "that legend"
      could be either of the two just named. The next entry's "Later in
      the same review" now has a review before it to point at.
33. The same entry, last sentence. **The one addition.**
    - Old: "Opposed to both alike, he writes, is what Christianity
      teaches about Agape."
    - New: "Opposed to both alike, he writes, is what Christianity
      teaches about Agape, the church’s Greek word for the love of God
      for man and of man for God."
    - Fault: a term left unexplained. The word is in the review's
      title, which the page prints three times, and this is the one
      sentence that uses it. Nothing said what it is.
    - Ground: Online Etymology Dictionary under *agape*, read on 3
      October 2026 (a copy is in the scratchpad,
      `tristan-critic/etym_agape.html`): from the Greek; glossed as
      brotherly love or charity, and in church use as the love of God
      for man and man for God. `sources[12]` now names the entry: "Online
      Etymology Dictionary: lust." became "Online Etymology Dictionary:
      *agape* and *lust*."
    - What the lead should know: the entry's `checked` is the
      examiner's and does not cover the gloss. Auden's own account of
      the word stands a page on in the review (p. 139, in the sentence
      from which the next entry takes its gloss of Eros); the lead may
      prefer that, or no gloss. 88 words to 108; the limit is 110.
34. The sixth entry (`auden[5]`), last sentence.
    - Old: "… whose suffering is the more innocent and who, late,
      forgives."
    - New: "… whose suffering is the more innocent and who, belatedly,
      forgives."
    - Fault: a clipped adverb between commas. The review has a phrase
      of the same sense in a parenthesis (the poet's snippet of
      p. 216).
35. The ninth entry (`auden[8]` in the list as the lead left it) taken
    out, and with it the essay's pages in `sources[5]`: section 3.
36. The first caveat (`caveats[0]`).
    - Old: "The view is mostly Auden’s 1941 summary of de Rougemont’s
      thesis; … Apart from the duet and the words he set over his
      essay, no remark of his on these passages was found."
    - New: "The view that opens the page is mostly Auden’s 1941 summary
      of de Rougemont’s thesis; … Apart from the duet and the words set
      over his essay, no remark of his on these passages was found."
    - Fault: a working word. "The view" is the reading's name for the
      part the page heads "What Auden said"; a reader has not met it.
      "He" went from the second sentence to keep the caveat at the
      fifty words the checker allows (47 words to 50).

## 3. The list under "More from Auden"

Twelve entries as it came; eleven now.

Taken out: the ninth, on pp. 183–84 of “The Prince’s Dog” in *The Dyer’s
Hand* (1962).

- Why. It is a passage in an essay on Falstaff, where this opera is one
  case among several: CRITIC.md's "in passing, in an essay on something
  else". No caption, no `grounds` item and no `stands` leans on it (a
  search of the reading found the essay only in the entry itself and in
  `sources`). What it says of time is on the page without it: in the
  two entries on the review of 1941 (time as an ill to be borne; a tie
  fixed to a thing already done), in the entry on the essay of 1948
  (guarded against change) and in the
  Grammar caption of the second passage (nothing before or after the
  passion but itself). The poet's notes, section 8, name it as one of
  the two entries that bear least on the passages shown.
- How. Moved whole (`says`, `source`, `checked`; it had no `quote`) to
  the end of `notes.md`, under "Taken out of the list of what Auden
  said". In `sources[5]` the essay and its pages are gone; the two other
  essays of that book stay. The entry after it opens with its own
  essay's name and needed no change. `view` was not touched.
- A run went with it: its last sentence shared five words with the scan
  of *The Dyer’s Hand* (words 49 to 53 in the sweep before any edit).
  The note in `notes.md` says so, in case the entry goes back.

The eleven that stay, by their place in the list now:

- 1 (the class of 1941), 2 and 3 (the review of June 1941, the view's
  own source), 4 (a review of June 1941), 5 (a lecture of 1940, printed
  in 1941): said in 1940 or 1941.
- 6 (1944): not in passing. These lovers are the case it works through.
- 7 (1948) and 8 (1962, “Balaam and His Ass”): captions lean on them
  (first passage, Words; first passage, Rhyme; second passage, Grammar
  and Words; third passage, Rhyme).
- 9 (1962, “Notes on Music and Opera”): the Beat and English captions
  of the third passage lean on the next page of the same essay.
- 10 (1969): the Grammar caption of the second passage leans on it.
- 11 (the poem dated to 1940): written the year before the course.

Above eight I asked of each whether the page would miss it. Three it
would miss least are left for the lead (section 9).

## 4. Titles, and words named as words

**Titles.** The line under the page's title (`where`) had the opera's
title bare; it is between asterisks now (change 1). The page sets that
line in italic and the title upright in it: seen at 1280 and at 390.
`about` and `view.says` hold no title. In every `says` of the list and
every `source` the books, operas and journals were already marked and
the essays and the poem already in curly quotation marks; I went through
them entry by entry and found none bare.

**The small notes.** They are printed in italic, and none of them
marked the word it is about (`art.md`, "In the reading, not mine to
change", point 1; the lead's note of 14:28). Marked now, 34 words in 21
notes, each then standing upright in the italic (seen in the pictures
of the three tabs):

- `work`, Words, the ten notes (`notes[0]`, `[2]`, `[3]`, `[4]`, `[7]`,
  `[8]`, `[10]`, `[15]`, `[18]`, `[20]`): 15 marks. The German word or
  phrase each note explains; in the note at row 16.0 the dictionary's
  phrase for one who cannot escape death as well; at 22.0 the related
  word of Act 1; at 24.0 the word a second time, where it names a
  bondman; at 25.0 the adjective and the letter that tells it from the
  noun.
- `names`, Words, the six notes (`notes[6]`, `[7]`, `[8]`, `[9]`,
  `[11]`, `[13]`): 9 marks. The German words; Tristan's earlier word
  for undivided; the two halves of the compound of row 11.0; and the
  English word that is the same word as the German of row 13.0.
- `end`, English, the five remarks (`ties[0]` to `ties[4]`): 10 marks.
  The German word of each, and the English words named as words: in
  remark 2 the word at p:265.48, word 2; in remark 3 the word at
  p:265.51, word 0; in remark 4 the three words of p:265.54; in remark
  5 the words at p:265.55, word 1, and p:265.54, word 2.

**English words named as words in a remark** (the task's second point):
the five places in the remarks of `end` just listed, the English
cognate in the last note of `names`, and the letter in the last note of
`work`. In remark 1 of `end` the English line is told in the page's own
words and no word of it is named, so nothing is marked there. The two
remarks of the Beat tab name no word. The glosses set under the words
(`gloss`) name no word of another language. The plain words under the
figure's name on Crossing are plain text and take no mark.

**Words named in a caption.** One was bare: the German and English
preposition in the Sentence caption of the third passage, now in bold
as a word of the passage (change 25).

**The sources.** In the line for the Online Etymology Dictionary the
two entry words are in asterisks, as the entry words are in the three
lines above it.

**Left as the rule on titles says.** The opera's short title stands in
italics in the Grammar caption of the second passage. The page's code
makes every bold or italic phrase of a caption light the same words in
the passage, so a pointer on that title lights the name in rows 1.0,
3.0 and 5.0 (`art.md`, point 3). That is a fault of the code and the
lead's to mend; the title stays marked. The other italic words in the
captions (the verb of the Sentence tab in its dictionary form, the word
for "and", Tristan's word for nameless, the two words that open
Isolde's answer, the name of Wagner's other poems) stand in no row
shown, so none of them lights anything.

## 5. What recurs, with counts

1. **The closing frame.** All eleven captions end on a sentence about
   Auden. That is the method: what is there, then his word for why. In
   all eleven the sentence began with his name and a verb (wrote 4,
   held 2, told the 1941 class 2, noted 1, thought 1, set … and wrote
   1). Three now carry him inside the sentence (changes 8, 28, 29);
   eight still begin with his name. I left those: each has a verb or a
   date that does work, and to turn more of them would make a new tic.
   "Auden told the 1941 class, a student recalled, that" stands word
   for word on two tabs of the second passage (Crossing, Rhyme). It is
   the honest form for a report at second hand, and either tab may be
   the first a reader opens, so both keep it whole.
2. **A caption that begins by telling how to read the picture:** 6 of
   11 (first passage, Rhyme and Words; second passage, Rhyme and Words;
   third passage, Rhyme and Beat). Three cut (15, 19, 26). Three stay:
   "The letters mark the rhymes." on the first Rhyme tab (but see
   section 9, 2), "The small glosses give the plain sense." and the
   Beat tab's sentence on the rule and the dots.
3. **"The letters mark the rhymes."** opened all 3 Rhyme tabs; 1 is
   left.
4. **Said more than once.** Auden's sentence on the tie and the potion
   stands 3 times (the view, the Verbs caption of the first passage,
   the third entry of the list). The two remarks from the class stand
   twice each (the Crossing and Rhyme captions of the second passage;
   the first entry). Page 473 of “Notes on Music and Opera” closes two
   tabs side by side (Beat, English). None changed: each place needs
   it.
5. **A note that says again what its caption says.** On the Word tabs 5
   of 16 notes did (first passage, the notes at rows 17.0, 24.0 and
   25.0; second passage, at rows 6.0 and 8.0); 4 do now (change 21). On
   the English tab 2 of the 5 remarks give the caption's two examples
   again (remarks 1 and 4). It is how these tabs are built (LAST-PASS,
   item 3); only the one that was nearly word for word was cut.
6. **A pronoun, a pointing word or a name with nothing near it:** 9,
   all mended (changes 3, 7, 9, 12, 18, 27, 30, 32, 36).
7. **A quaint or clipped turn:** 8, all mended (2, 6, 11, 13, 22, 23,
   25, 34). "Kin" for a related word came twice.
8. **A term with no plain words:** 4, all mended (4, 14, 24, 33).
9. **"Elevated,"** the dictionary's label, 5 times in the small notes
   (four words "an elevated word", one "in elevated use"). Left: one
   label for one thing; a second word for it would look like a second
   thing.
10. **"Her eyes on Tristan,"** twice, in two notes of the first passage
    (rows 16.0 and 22.0). Both point at the same four lines of Act 1
    (`exam.md`, "Facts about the text"). Left.
11. **"Earlier in the scene" and its like:** 5 times (3 captions, 2
    notes). Each points at lines that `stands` links to. Left.
12. **Tense.** In the captions Auden is in the past (wrote, held,
    noted, told, thought); in the view and the list he is in the
    present (calls, adds, writes, holds; "he says", "he adds" and the
    like 9 times in the list). Left: it is even within each part.
13. **The entries open alike:** a date or a place, then "Auden" and a
    verb, in 9 of 11 ("Reviewing …, Auden" twice). Left: a list in
    order of time reads so.

## 6. Doubted, and not changed

1. **Third passage, Beat: the thinnest reason on the page.** The
   caption counts, and the picture bears every number out; then it ends
   on Auden's general statement about any composer's line. Nothing says
   what the change of measure does in this song. The examiner cut a
   reason that was made up, and rightly. What the tab still pays: a
   reader learns that the measure breaks exactly where the questions
   end. A reason would have to come from Auden or the text, and I found
   none to put.
2. **The list, third entry.** "One hides in the actual: Don Juan’s
   affairs stay possibilities never made real." Read alone this
   contradicts itself, and so does the next sentence (a flight into the
   possible, then a tie that "holds no possibilities"). As far as the
   poet's snippets show the review, its point is that each flight ends
   in the opposite of what it sought; the entry leaves that step out.
   To put it in is to add a claim, so it is the lead's or the
   examiner's.
3. **Second passage, Rhyme.** The `stands` ends "Auden himself: “The
   Greeks and Us,” … p. 24", and the `why` gives a sentence of 1948.
   The caption has no sentence of 1948: the examiner moved it out and
   kept the ground on purpose (`exam.md`). A reader of "What each
   caption stands on" finds a source for nothing the caption says. A
   ground is not mine to cut.
4. **Third passage, Sentence:** "when Eros tries to live in the
   possible alone". Eros is said in plain words only in the list (third
   entry), "the possible" nowhere. A gloss here would bring a second
   sentence of Auden's into the caption, so I left it. The caption has
   111 words and could bear one.
5. **"Drinking in a kiss"** (third passage, English caption and remark
   4) reads two ways: drinking, in a kiss; or drinking a kiss in. The
   English line reads both ways too. Left.
6. **One German word, two English ones.** The word of row 53.0 is
   "unconscious" on the Sentence and English tabs and "unaware" on the
   Rhyme tab, where the gloss is chosen to match the two earlier forms
   of the word. The two words of row 10.0 are "endless and eternal" in
   the Grammar caption and "endlessly, eternally" in the gloss under
   them on the Words tab. Each can be defended; a reader who goes from
   tab to tab sees them differ.
7. **First passage, Words, the note at row 16.0:** "Isolde says the
   word twice". The note has just named two; which is meant is not
   said. By the examiner's record it is the word of this row.
8. **Sentences that now say what the names over the rows show** (the
   lead's first point): the first sentence of the Crossing caption, and
   "The libretto gives the last eight lines to both" in the Rhyme
   caption. Kept. Each is half of a contrast with the vocal score,
   which the picture does not show, and the first also gives "She" and
   "He" their names. The one that was only a repeat went (change 16).
9. **Third passage, Rhyme:** "The last line is theirs too, less the
   word for love". "Theirs" is the lovers', from the sentence before,
   and takes a moment. I tried "the duet's" and dropped it: by the
   ground the same line also ends the passage of Act 1.
10. **"The DWDS dictionary"** stands in 10 of the 11 `stands` and is
    tied to its full name only by the initials and the address in the
    sources. It is the form across the site. Left.
11. **Two key labels.** "A phrase that begins with in" (third passage,
    Sentence) names a word with nothing to mark it, and a key label
    takes no mark. "Lady Love’s verbs" (first passage, Verbs) labels
    the long rule under whole clauses, beside "a verb" for the short
    one. Both belong to marks, which are not mine.
12. **The view:** "the Tristan legend, which Wagner’s opera crowns".
    "Crowns" is near to praise given as fact. It reports Auden's
    summary, which the examiner checked, and `view` was not touched.

## 7. What on the page got in the way

1. **The third passage is very tall.** At 1280 its twelve short lines
   take 2,042 pixels (the first passage's fourteen take 1,207), each
   English line standing far under its German line and the right-hand
   column blank below the caption. A reader scrolls through three
   screens for twelve lines and loses the caption on the way.
2. **Second passage: fourteen lines beside twelve.** The German has six
   lines of names and the English four, so the two blocks do not match
   line for line, and only the third caveat, folded at the foot, says
   why.
3. **Word tabs: a word twice running.** Each note stands under a bold
   head, the words of the row. With the marks the note's first word
   now stands upright straight after that head, and in 9 of the 16
   notes it is the head's own word (first passage: the notes at rows
   12.0, 13.0 word 2, 14.0, 17.0, 24.0 and 25.0; second passage: at
   rows 7.0, 8.0 and 9.0). It was so before the marks too, in italic.
   A matter for the page's code (a head could be dropped when the note
   opens with it) or for all the Word tabs of the site together.
4. **First passage, Words: a great deal on one tab.** Ten notes in
   small italic under the caption, beside fourteen lines with one to
   three glosses under each. The caption picks out four of the words;
   the other six notes are for the reader who wants them.
5. **The line under the page's title turns after "Scenes" on a phone,**
   leaving "1 and 2" to open the second line. The artist has it down
   for the page's code.
6. **The header line of each passage** is made by the page from the
   text it hosts, not from the reading. It prints the opera's title in
   a line that is all italic, with nothing to tell the title from the
   words round it.
7. **Stale pictures in `shots/`.** `tristan-page-1280-8.png` is the
   artist's of 14:19 (the page is eight slices now, 0 to 7) and
   `tristan-page-390-10.png` is from my first run (ten slices now, 0 to
   9). The pictures at 320 and 360 and `tristan-folded-*` are the
   artist's and older than every change here, so the folded notes are
   shown as they were. The two pictures of the second passage's Rhyme
   tab lack four words (change 17).
8. **"A record of it" and "Read on,"** at the foot, are not in the
   reading; I read them only as a reader. The second gives the opera's
   title in the English libretto's spelling of the heroine's name,
   which the first line of the sources explains.

## 8. The tests against Auden's wording

Run as the task sets out: `node build/tools/prose.mjs tristan`, then
`build/tools/runs-sweep.py` over the four scans (`dh.txt`, `fa.txt`,
`ef.txt`, `pearce.txt`) with `--only tristan --show`.

Before any edit, 4 runs of five words:

- the first passage's Words caption, words 11 to 15 (`fa.txt`);
- the same caption, words 110 to 114 (`fa.txt`): in the sentence that
  reports p. 25 of the essay of 1948. Loosened (change 8);
- the first passage's Words tab, the note at row 14.0, words 12 to 16
  (`fa.txt`);
- the ninth entry of the list, words 49 to 53 (`dh.txt`): in the
  sentence that reports the passage. It left the page with its entry
  (section 3).

After the last edit, 3 runs of five words. Each is left, for this
reason:

1. `plates[0].lenses[2].caption`, words 11 to 15 (`fa.txt`). Five small
   words in the sentence that says what the old German word for love
   is. The scan has them once: in the essay of 1948, but in a sentence
   on the Greek idea of the good, which the caption does not report.
   Chance.
2. `plates[0].lenses[2].notes[4].note`, words 12 to 16 (`fa.txt`). A
   phrase of time in a dictionary's account of the same word. The scan
   has it once, in a passage on carnival in an essay on another matter.
   Chance.
3. `auden[1].says`, words 98 to 102 (`fa.txt`). A stock phrase of five
   words inside the gloss that change 33 put in. The scan has it once,
   as an exclamation in an essay on another matter, and the entry
   reports a review that is in none of the four scans. Chance. It goes
   if the lead strikes the gloss.

The four scans do not hold most of what this piece reports: *Prose*,
Volume II, is not among them, and the scan of Pearce's memoir lacks
pp. 137 to 145. So the view, every caption and every entry were also
measured, with `build/tools/runs.py`, against the poet's search
snippets of *Prose* II (`tristan-poet/chain_*.txt` in the scratchpad)
and the research snippets of those pages of Pearce (`research/
A_pearce_gap*.txt`, `pearce_fwd*.txt`). The longest run shared with a
passage that a sentence reports is four words, in five places (the
view; the first and fifth entries; the Crossing and Grammar captions of
the second passage). One run of five is the title of *The Dyer’s Hand*
followed by Auden's name, which the sweep masks as a title.

## 9. Left for the lead to decide

1. **The gloss of Agape** (change 33): keep it, strike it, or put
   Auden's own account of the word in its place.
2. **"The letters mark the rhymes."** on the first passage's Rhyme tab.
   I kept it as the first of three. The pictures of the second run show
   the key under every Rhyme caption saying the same and more, so this
   one can go too: a cut of five words, after which the caption opens
   on the two rhyme words. I did not cut it only because the picture
   tool had had its two runs.
3. **The list at eleven.** Whether more should come out. Least missed:
   the first sentence of the fourth entry (the materialist creed, which
   is not about this work); the eleventh entry (the poem, told at
   second hand); and one of the two sentences on stout singers (eighth
   and ninth entries: one point from two essays of one book).
4. **The italic title that lights the names** (second passage,
   Grammar): the page's code, as `art.md` says.
5. **The second passage's Rhyme tab:** whether `stands` should go on
   naming p. 24 of the essay of 1948 when the caption has no sentence
   from it (section 6, 3).
6. **The Beat tab's reason** (section 6, 1) and **the third entry's
   missing step** (section 6, 2).
7. **The height of the third passage and the unmatched line counts of
   the second** (section 7, 1 and 2).
8. **The doubled word at the head of the Word-tab notes** (section 7,
   3): for every Word tab on the site.
9. **The pictures:** whether the two stale slices should be deleted,
   and whether the second passage's Rhyme tab should be shot again
   after change 17.
10. **The two key labels** (section 6, 11).

## 10. What the permission system refused

Nothing. No tool call was refused, and no step was left undone for
that reason. Within the rules of the task: no tool whose name begins
`mcp__hearthbot__` was called; nothing was deployed, published,
uploaded or pushed; nothing was installed; no agent was started;
`/mnt/project-files` was not read or written; the picture tool was run
twice and no server was started. One page was fetched from the web, the
Online Etymology Dictionary's entry for the gloss of change 33.

## 11. The checker's last lines, and the files

`node build/tools/check-reading.mjs tristan --print`, run at 15:17 UTC
after the last edit, ends:

```
no problems
no warnings
the printed notes are fit to print
```

Then `node build/pieces.mjs tristan`, `node build/tools/prose.mjs
tristan` (4,999 words) and the sweep of section 8.

- `remake/works/tristan/reading.json`: changed by exact edits only.
- `remake/works/tristan/critic/`: `before.json` and the nine lists of
  edits.
- `remake/works/tristan/notes.md`: the entry taken out, appended at the
  end.
- `remake/works/tristan/shots/`: the pictures of the second run
  (15:12), over those of the first.
- `review/remake/prose/tristan.md` and the built piece: written by the
  tools.
