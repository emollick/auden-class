# The Magic Flute: the critic's report

Piece `magic-flute`. Begun 2026-10-03 12:44 UTC, finished 13:45 UTC.

Words of the libretto, of the English libretto and of the play are
pointed at by passage, row and word number, or by where they stand in a
sentence. Lines of no work are typed out here, and nothing of Auden's is
quoted.

## 0. How the page was read

- Built with `node build/pieces.mjs magic-flute`, and the prose listed
  with `node build/tools/prose.mjs magic-flute` (4,419 words before the
  changes, 4,402 after).
- For the first reading I used the artist's pictures in `shots/`, taken
  between 11:49 and 12:41 UTC from the reading as it then stood
  (unchanged since 10:11 UTC): the whole page at 1280 in six slices,
  every tab at 1280, the two folded lists at the foot, the Beat tab at
  390, and the artist's trial of the notes with their words upright. So
  the picture tool was not run for the first reading. Section 9 says
  when it was run.
- My working copies are in `critic/`: the reading before any change
  (`reading.before.json`), the checker's output before and after
  (`check-before.txt`, `check-after.txt`), the lists of exact edits
  (`edits-1.json` to `edits-8.json`), the scripts that wrote the first
  three lists, and the counting scripts (`count.py`, `recur.py`,
  `sentences.py`).
- Of the 62 changes to `reading.json`, 60 were made with
  `build/tools/edit-exact.py`, which writes nothing unless each old
  string is found exactly once. Two were single phrases replaced by
  hand in the same exact way; they are in `edits-4-by-hand.json`.
  Replayed in order on the copy from before, the 62 give the reading
  as it now stands.

## 1. Every change

Old, new, and the fault in a few words. Where only asterisks were put
round a word or a title, the wording is the same and the entry says
"marked". A row is named as the reading names it.

### The head of the page

1. `where` (the line under the title). Marked: the opera's name. It now
   stands upright in the italic line.
2. `view.source`. Marked: the book, *The Dyer's Hand*.

Nothing else at the head was changed. `view.says` and `view.quote` were
not touched.

### First passage, "The same question, twice" (`trial`)

3. Words, caption, second sentence.
   - Old: "Both men are asked in one verb, **erkämpfen**: to win by
     fighting."
   - New: "Both men are asked with the same verb, **erkämpfen**, to
     win by fighting."
   - Fault: mannered plainness. "Asked in one verb" is not English a
     person writes; and the colon was the first of four in the caption.
4. Words, caption, third sentence.
   - Old: "A dictionary of 1793 gives it to the higher style; …"
   - New: "Adelung's dictionary of 1793 gives it to the higher style; …"
   - Fault: none in the sentence. The name is needed here because of
     change 6: the notes under the caption speak of Adelung, and the
     note that introduced him is gone.
5. Words, caption, the sentence on what Papageno hopes.
   - Old: "The bird-catcher hopes to **fange**, catch, a **Weibchen**: …"
   - New: "The bird-catcher hopes to catch, **fange**, a **Weibchen**: …"
   - Fault: the German verb form stood where an English verb belongs
     ("hopes to fange") and read as a misprint. The English now comes
     first. The bold word is the same, so it still lights its place.
5a. Words, caption, fifth sentence.
   - Old: "Papageno takes the verb inside the priest's word,
     **Kämpfen**, and refuses it."
   - New: "From the priest's word Papageno takes the verb inside it,
     **Kämpfen**, and refuses it."
   - Fault: hard to follow. The bold word came straight after "the
     priest's word" and read as that word. The priest's word is the
     longer verb of the second sentence; the bold one is the verb
     inside it, and now follows "the verb inside it".
6. Words, the note on row 2.0, word 9. Cut (its gloss and its working
   source stay).
   - Old: "Adelung's dictionary of 1793 defines erkämpfen as to obtain
     by fighting, gives it to the higher style, and has winning a Sieg,
     a victory, as its first example."
   - Fault: padding. It said the second and third sentences of the
     caption over again, in nearly the same words, directly under them.
     Seven notes are left under this caption.
7. Words, the note on row 4.0, words 1 to 6.
   - Old: "Loos, the lot drawn to settle a thing by chance, is in the
     higher style any fate a person does not owe directly to himself,
     Adelung says; an English version that Auden quotes in 1943 has
     Fate here."
   - New: "*Loos* is the lot drawn to settle a thing by chance; in the
     higher style, Adelung says, it is any fate a person does not owe
     directly to himself. An English version that Auden quotes in 1943
     has *Fate* here."
   - Fault: too long to follow. "Is in the higher style any fate" had to
     be read twice. Two words marked: the German word, and the English
     word named as a word.
8. Words, six more notes. Marked, wording the same: the first word of
   the notes on 7.0 words 5 to 8, on 7.0 words 9 to 10, on p:12.0 word
   40 and on p:16.0 words 1 to 3; the noun after "defines a" in the
   note on p:12.0 words 14 to 18; the noun after "In Adelung" in the
   note on p:12.0 words 37 to 39. With change 7, all seven notes left
   under this caption now mark their word.
9. Answers, caption, first sentence.
   - Old: "Like numbers mark where the second exchange answers the
     first."
   - New: "Matching numbers mark where the second exchange answers the
     first."
   - Fault: a quaint word. "Like numbers" reads at first as the start
     of a comparison.
10. Answers, caption, fifth sentence.
    - Old: "Auden and Kallman write that this exchange is Papageno's
      trial, handled so lightly in the libretto that audiences can miss
      it."
    - New: "Auden and Chester Kallman, who put the opera into English,
      write that this exchange is Papageno's trial, handled so lightly
      in the original that audiences can miss it."
    - Fault: a name left unexplained. This is where a reader going tab
      by tab first meets Kallman, with no first name and no word of who
      he is. That the two translated the opera is on the page already
      (the English tab, and the list under the passages). "The
      original" for "the libretto", so that it is not taken for their
      English one.
11. Wishes, caption, second sentence.
    - Old: "Each names what he wants as a prize: wisdom's teaching his
      **Sieg**, victory; Pamina his **Lohn**, reward."
    - New: "Each names a thing he wants and calls it a prize: wisdom's
      teaching is to be his **Sieg**, victory, and Pamina his **Lohn**,
      reward."
    - Fault: mannered. The sentence left its own verb out, in imitation
      of the German, and "what he wants as a prize" could be read two
      ways. The key has the two things apart (what he wants, the
      prize), and the caption now does too.
12. Wishes, caption, fifth and sixth sentences.
    - Old: "… puts his wish last, under an if. The priest answers
      **nie**, never, with a condition of his own: a threat, Auden and
      Kallman say."
    - New: "… puts his wish last, under an *if*. The priest answers
      **nie**, never, with a condition of his own, which Auden and
      Kallman call a threat."
    - Fault: a word named as a word was bare; and four of the caption's
      seven sentences turned on a colon.
13. Wishes, the key. The label of the mark on p:13.0 words 2 to 6 (the
    priest's answer in the second exchange).
    - Old: the priest's never
    - New: the priest's "never" (with curly marks)
    - Fault: the key is set in italic and does not take asterisks, so
      the word named as a word could not be told from the words round
      it. In the key it read "a refusal, the priest's never".

### Second passage, "The mother's oath" (`queen`)

14. Beat, caption, second sentence.
    - Old: "The German has five beats, each after a lighter syllable;
      the odd lines end on one light syllable more."
    - New: "The German has five beats to the line."
    - Fault: padding. The line printed after "The measure", directly
      under the caption, says the same thing in the same sixteen words.
      Of the forty Beat tabs on the site this was the only one whose
      caption held its measure word for word. The measure keeps the
      detail; `meterName` was not changed.
14a. Beat, caption, first sentence.
    - Old: "Each German line stands over its English."
    - New: "Each German line stands over its English, taken from an
      English libretto of the opera."
    - Fault: a caption the page does not bear out. On this passage the
      English stands under each German line, and then the kit prints
      neither label ("The libretto of 1791", "The English libretto,
      each line under its German"): it prints a passage's labels only
      when two passages stand side by side. So nothing on Beat, Rhyme
      or Threat said whose English this is, and on the first passage
      the English under the phrases is the page's own. The fact is on
      the page already (the English tab, the sources, the fourth note
      under "Where this page may be wrong"); it now stands where a
      reader first needs it. The Beat tab's own `grounds` and `stands`
      do not have it, and those are not mine to add to: the lead may
      want the libretto named in that `stands`, as it is in the
      `stands` of English. Section 6 comes back to this sentence.
15. Beat, caption, sixth sentence.
    - Old: "Auden and Kallman, translating, hold that the Queen, …"
    - New: "Auden and Chester Kallman, writing on the translation of
      opera, hold that the Queen, …"
    - Fault: "translating", alone between commas, did not say what it
      meant (that the remark is made about how to translate). This is
      also the tab that shows first, so a reader who only scrolls
      meets Kallman here: his first name is given.
16. Beat, first remark (row 1.0, word 0).
    - Old: "This line begins on a stress, where the pattern has a light
      syllable. The word is Tod, death."
    - New: "This line begins on a stressed word, *Tod*, death, where
      the pattern has a light syllable."
    - Fault: a short sentence added for effect. The word marked.
17. Beat, second remark (row 4.0, words 2 to 3), first sentence.
    - Old: "… once each with cast off, forsaken and shattered."
    - New: "… once each with the words for cast off, forsaken and
      shattered."
    - Fault: hard to follow. The three English meanings ran on as if
      they were part of the sentence.
18. Beat, third remark (row 7.0, words 0 to 2). Marked, wording the
    same: the German words before "vengeance" and before "gods", and
    the compound before "gods of vengeance".
19. Beat, what it stands on. Marked: the opera's title inside its link.
20. Rhyme, caption, last sentence.
    - Old: "… shall be shattered if he does not die by Pamina's hand."
    - New: "… shall be shattered if Sarastro does not die by Pamina's
      hand."
    - Fault: a pronoun two sentences from its noun, with a handbook and
      a stanza between.
21. Threat, caption, third sentence.
    - Old: "The fifth and sixth go on with the penalty, and the seventh
      returns to the condition in four of the same words, …"
    - New: "The fifth and sixth say the penalty again, and the seventh
      returns to the condition in four of the third line's words, …"
    - Fault: the caption counts four parts ("Condition, penalty,
      penalty, condition") and its first sentence says the threat is
      said twice, but "go on with" made the fourth, fifth and sixth
      lines one penalty, which leaves three. "Say the penalty again" is
      what the figure's own line of plain words says ("said again"),
      and a new sentence does begin at the fifth line (row 3.0 ends on
      a full stop). "The same words" did not say the same as which.
22. Threat, caption, fourth sentence.
    - Old: "… a chiasmus, which shuts the penalty between two namings
      of the deed."
    - New: "… a chiasmus, which shuts the penalty between two
      statements of the condition."
    - Fault: a quaint noun, and a second name ("the deed") for what the
      caption and the key call the condition.
    As it now stands the caption names the parts by their lines and by
    what they say, and says nothing of what joins them on the passage.
    It holds with underlines alone, with letters, or with strokes.
23. English, caption, last sentence.
    - Old: "The English order differs too: the line set here under the
      seventh stands fifth, …"
    - New: "The English order differs too: as printed, the line set
      here under the seventh stands fifth, …"
    - Fault: "stands fifth" did not say where.
24. English, three remarks. Marked, wording the same: in the first, the
    two English words of the line; in the third, its first three words
    and the three after the colon; in the fifth, its first word and the
    three English words named.

### Third passage, "The two rewards" (`weddings`)

25. Words, the note on row 0.0, word 0. Marked: the word after "notes
    that".
26. Words, the note on row 2.0, words 0 to 1.
    - Old: "Wieder says that a thing takes place anew, …"
    - New: "*Wieder* means that a thing takes place anew, …"
    - Fault: it read as if somebody of that name says something (the
      artist saw it too). The word marked.
27. Words, the note on row 6.0, words 0 to 3. Marked: its first word
    and the noun after "the verb of".
28. Words, the note on row 6.0, words 6 to 7.
    - Old: "Lohn, reward, is Tamino's other word there: he asks for
      Pamina as his."
    - New: "*Lohn*, reward, is Tamino's other word before his trials:
      he asks for Pamina as his."
    - Fault: "there" pointed back into the note before it. A reader who
      points at this phrase gets this note alone. The word marked.
29. Words, what it stands on, last sentence.
    - Old: "Tamino's sentence is in the first passage on this page, The
      same question, twice; Auden: *The Dyer's Hand*, p. 134."
    - New: "Tamino's sentence is in the first passage on this page.
      Auden: *The Dyer's Hand*, p. 134."
    - Fault: the heading, bare and with its own comma, tripped the
      sentence, and it added nothing after "the first passage on this
      page". Cut; this is the artist's point d.
30. Caliban, third remark (rows 1.0 word 3 and p:200.1 word 4). Marked:
    its last word, the pronoun of the play.
31. Caliban, fourth remark, second sentence.
    - Old: "Caliban's verb fills an island."
    - New: "Caliban's verb, *peopled*, speaks of a whole island at
      once."
    - Fault: a short sentence that poses. The wit was the page's own
      and the reader was not told which verb. It now names the verb
      (row p:200.1, word 6, which the remark already marks) and says
      the same thing plainly.
32. Caliban, what it stands on. Marked: the play's title, twice, each
    inside its link.

### "More from Auden"

No entry was taken out, so nothing was written in `notes.md`. Section 4
says why.

33. First entry. Marked: the play's title in `says`, the book in
    `source`.
34. First entry, third sentence.
    - Old: "(A dictionary's gloss, not his: the Manichees held matter
      to be evil; Pelagius denied original sin.)"
    - New: "(As a dictionary has it, the Manichees held matter to be
      evil; Pelagius denied original sin.)"
    - Fault: a working note. "Not his" answers a question only the
      people who made the page had asked. That the gloss is a
      dictionary's is still said, which is what keeps it from being
      taken for Auden's.
35. First entry, fifth sentence.
    - Old: "He likens Papageno's refusal to a Caliban who answers
      Prospero's proposal to adopt and school him with thanks, and
      stays in the jungle."
    - New: "He likens Papageno's refusal to a Caliban who thanks
      Prospero for his proposal to adopt and school him, and stays in
      the jungle."
    - Fault: it could be read as "school him with thanks".
36. Second, third and fourth entries, `source`. Marked: the opera and
    the book in the second; the book in the third (the series and its
    volume's title as one title); the book in the fourth.
37. Fifth entry. Marked: the play's title in `says`; the book and the
    play in `source`.
38. Fifth entry, third and fourth sentences.
    - Old: "He retells the scene of the first passage: Tamino declares
      himself ready for the trials, and Papageno would stay single
      sooner than be tested at the risk of death. Papageno wins the
      prize all the same, …"
    - New: "Papageno, who refuses to be tested at the risk of death,
      still wins the prize, …"
    - Fault: padding. It was the third time running that the list
      quoted or retold the scene of the first passage (the lecture of
      1943, the essay of 1946, this lecture), and the head of the page
      has the scene too. What this lecture adds, the persons paired and
      the price, is kept. Nothing is said that the old sentences did
      not say. "Still" stands for "all the same", which the entry
      before this one uses of the same thing. 104 words became 83.
39. Sixth entry, first sentence.
    - Old: "… a libertine, a peasant girl and a fine lady, and answers
      that Mozart is right: …"
    - New: "… a libertine, a peasant girl and a fine lady. He answers
      that Mozart is right: …"
    - Fault: a sentence of 52 words, broken at its turn.
    In the third sentence a comma was put after "In a play", where
    "In a play how a person speaks" ran on and had to be read twice.
40. Sixth entry, `source`. Marked: the book.
41. Seventh entry, second sentence.
    - Old: "The Magic Flute, they note, is made of separate numbers, …"
    - New: "*The Magic Flute*, they note, is made of separate musical
      numbers, …"
    - Fault: a word of the trade. "Numbers" alone, on a page full of
      numbered remarks and line counts, does not say pieces of music.
      The title marked.
42. Seventh entry, `source`. Marked: the book.

### "Where this page may be wrong"

43. First caveat, second sentence.
    - Old: "It, the lecture of 1943 and the essay of 1946 were read
      here only in snippets …"
    - New: "That preface, the lecture of 1943 and the essay of 1946
      were read here only in snippets …"
    - Fault: "It," at the head of a list of three stops the reader.
44. Second caveat.
    - Old: "… so its words are not surely his; …"
    - New: "… so its words may not be his; …"
    - Fault: a mock-antique turn.

## 2. What recurs across the piece

The counts are of the reading as it now stands; "before" is the copy
in `critic/reading.before.json`. `critic/recur.py` and
`critic/sentences.py` did the counting.

- **How much was changed.** 46 printed fields differ. 33 sentences were
  reworded or cut, and one label of a key; 30 more sentences differ
  only by marks. All 62 edits are in `critic/edits-1.json` to
  `edits-8.json`; replayed on the copy from before, they give the
  reading as it now stands and nothing else.
- **A word named as a word, left bare.** The fault that came up most.
  In the small notes German stood in the same italic as the English
  round it. All 11 notes under the two Words tabs now mark their word
  (13 marks), and 7 of the 19 numbered remarks mark theirs (14 marks:
  2 remarks of Beat, 3 of English, 2 of Caliban). The 51 glosses are
  English throughout and name no foreign word, so none is marked. Two
  places that cannot take asterisks were mended in the wording: a
  label of a key (change 13) and an *if* in a caption (change 12).
- **A title left bare.** 17: the 14 the artist counted (1 in the line
  under the title, 1 under the view, 3 in what the entries say, 9 in
  their sources) and 3 more inside links in `stands` (changes 19 and
  32). No title of a book, a play or an opera is now bare in a field
  that can be marked. The two labels over the third passage name the
  opera and the play in the label's own type; a label takes no marks.
- **A thing said twice.** Three, all cut or folded: a note that said
  its caption over again (change 6), a caption sentence that said the
  measure printed under it (change 14), a scene retold for the third
  time in the list (change 38). A fourth is at the top of the third
  passage and is not mine to mend: section 5. A fifth runs through the
  list under "More from Auden": section 4.
- **Captions written to one length.** Before, all ten captions had
  between 107 and 110 words, and six had exactly 110. A person does
  not write ten captions on ten different things to one length; the
  poet was filling a measure. They now run from 108 to 118, and five
  still have exactly 110. I did not pad or trim any to vary them: the
  lengths are what the changes above left. The limit is 120, so the
  old sameness was a habit and not a cut, and it does no harm that a
  reader would see.
- **The colon that hands over the point.** "A statement: its point."
  21 colons in the ten captions before, 19 now. In Wishes four of
  seven sentences turned on one (now three). I changed three sentences
  that leaned on a colon in place of words they had left out (changes
  3, 11 and 12) and kept the colons that bring in a list or a gloss.
  Three captions still have three each (the first Words, English, the
  second Words).
- **Auden at the close.** He is named 14 times in the captions, in 9
  of the 10 (not in Rhyme), and 4 captions end on a sentence that
  names him (the first Words, Answers, Threat, List). This is rule two
  at work, a caption arriving at its reason, and the verbs are varied
  (says 4, write 2, call 2, hold, list, quotes, reads, prints, finds),
  so I left it. Read tab after tab it is still a pattern.
- **"Stands."** 12 times in the prose, 7 of them in captions, in three
  senses: stands for (5, twice at the head of the page), stands at a
  place (6), stands to (1). Left: the first is what Auden's view is
  about, the second is this site's plain verb for where a thing is. In
  the first caption the two senses meet (first sentence and sixth).
- **A German word in bold, a comma, its English.** 24 of the 29 bold
  words in the captions. A caption on a German text has to go this
  way, so I count it as the method and not as a tic; but it sets the
  gait of every caption on the page, and the first Words caption has
  eight bold words in 113.
- **"Here."** 9 times, 6 in captions. Each points at the plate. Left.
- **"By turns."** 3 times, for rhyme or names that alternate (twice
  in Rhyme, once in List). Plain and exact. Left.
- **Adelung.** Named in 7 of the 11 notes (8 of 12 before), and since
  change 4 once in the caption above them. The notes vary how they
  bring him in. Left.
- **"The first passage."** 4 times in the prose (5 before change 38),
  twice in the list. See section 4.
- **"Tamino …. Papageno …."** Four of the six remarks of Answers are
  two sentences built this way, and three of the four remarks of
  Caliban go "The duet …. Caliban ….". Each of these tabs sets one
  thing against another, remark by remark, so the form is the matter.
  Left.
- **"The marks on …"** opens 9 of the 10 lines under "What each
  caption stands on". In a list of grounds one form for every line
  makes a place easy to find. Left.

## 3. Sentences I doubt and did not change

To mend any of these is to change what the page says is so, or to add
to it. That is the lead's or the examiner's, so each comes with my
reason and, where I have one, a wording to weigh.

1. **Rhyme, caption, third sentence, and the tab's `why`.** The
   sentence that begins "A handbook of English verse quotes the
   remark". It carries the tab's reason and it is the weakest joint on
   the page. "More emphatic" than what? The ground has the answer: than
   in a stanza whose two middle lines rhyme together. The remark was
   made by comparison, about the stanza of one English poem
   (`.cache/handbooks/baum-versification-pg21342.txt`, lines 3755 to
   3764). The caption drops half of the comparison and carries the
   rest over to a German aria. It does say the handbook is of English
   verse, which is why I let it stand. Two ways out. Give the
   comparison: "A handbook of English verse quotes the remark that a
   four-line stanza closes more emphatically when its rhymes go by
   turns than when its two middle lines rhyme together" (the caption
   goes from 110 words to 117). Or cut the sentence and let the tab
   rest on what the passage shows: which words the rhymes pair, and
   which close each four. This is the one caption of the ten that does
   not come to Auden; without the handbook it would end on what the
   Queen swears, and I think that is enough.
2. **List, caption, fifth sentence.** "… the libretto has parents
   rejoice in their likeness." It reads two ways: the parents are glad
   to be like each other, or glad to see themselves in their children.
   The sentence after it, on Papagena as Papageno's double, pulls
   toward the first. The lines mean the second (zeno file, lines 3458
   to 3462: the little ones play round the parents, who are glad of
   their own image; the ground has the dictionary's sense of the noun,
   a person very like another). Which reading is meant is a matter of
   fact, so it goes to the examiner. If the second: "… the libretto
   has the parents, with the little ones at play round them, rejoice
   in their own image."
3. **Beat, caption, fifth sentence.** "… groups sing all the others."
   The reader has to supply two things: all the other lines of five
   beats in the libretto, and groups of singers. The ground has them
   by name (a chorus of priests, the two armed men, the three boys).
   Naming them makes a better sentence and it is grounded, but it puts
   on the page a statement that was passed only as a ground: "… the
   priests' chorus, the two armed men and the three boys sing all the
   others" (110 words to 119).
4. **"The passages", second sentence, after the semicolon.** "Tamino
   has said he seeks friendship and love." I take it to be there
   because the first question asks if he is ready to win *it* by
   fighting (the gloss under row 2.0, word 9) and those two things are
   the "it" (zeno file, lines 1813 to 1817: asked what the strangers
   seek, Tamino names the two, and the next question has only a
   pronoun). The
   page never ties the two, so the clause reads as a stray fact and
   the first gloss has an "it" that points at nothing. To tie them is
   to add a statement: "… Tamino has just said he seeks friendship and
   love, and the first question asks if he will fight for them." The
   paragraph has 89 words of its 90, so something would have to go.
5. **The first Words tab: two labels from the dictionary.** One word
   is given to "the higher style" and another to "the noble style"; a
   note has each; the Rhyme caption and a remark of the English tab
   have "a noble word for dying". These are the dictionary's marks for
   words above everyday speech. The page never says so, nor whether
   the two are one grade or two. The reader gets the drift from
   "familiar speech" later in the same caption, so I left it. If they
   are two, a clause should say how they differ; if one, one name
   would do.
6. **The first Words tab, the note on p:16.0, words 1 to 3.** After
   the sense that fits (unmarried) it lists three more senses and
   stops on the one that means free of bonds. That leaves the reader
   to think the bird-catcher's word for single is also a word for
   free, without the page saying so or having a reason to. Either the
   page says it, with a ground, or the clause after the semicolon is
   ornament and could go. It reports the dictionary truly, so it is
   not mine to cut.
7. **Two spellings side by side.** The caption's bold word for a man
   of nature has an *s* in the middle that the note under it lacks;
   the note on row 4.0 spells the word for lot with a double vowel,
   and the line of what the caption stands on with a single one. Each
   pair is right (the libretto's spelling, the dictionary's headword),
   but nothing says so, and to a reader one of each pair is a
   misprint. Names and marks are not mine to touch.
8. **"More from Auden", first entry, second sentence.** Its four
   adjectives are his, and five words of the sentence run as his
   sentence runs. It is far under any limit, it is given as his, and
   the view at the head uses one of the four in the same way. Whether
   his adjectives should stand in quotation marks is the lead's to
   say: I may not make a quotation. The lead's sweep
   (`build/tools/runs-sweep.py`) finds six runs of five words or more
   shared with a scan in this piece, the same six before my changes
   and after; the other five are names and small words.
9. **Tabs that pay little.** I asked of each of the ten what a reader
   would lose without it. None pays nothing. Rhyme pays least, for the
   reason in 1. List pays in its names (children named for their
   parents, one letter apart) more than in its figure: three lines
   beginning with the word for "then" is a slight thing, and the
   caption gives it one sentence and moves on, which is right.

I found no paraphrase of Auden that makes much of a passing remark.
Each entry reports what he wrote at some length about this opera or
about opera, and the examiner read each at its page.

## 4. The list under "More from Auden"

Seven entries. None was taken out, so nothing was written in
`notes.md`.

**Six of the seven are leaned on**, and an entry that a caption, a
ground or a `stands` leans on is never taken out:

- the first ("Balaam and His Ass"): the view, and the captions of the
  two Words tabs, of Answers and of Caliban;
- the second (the preface of 1956): the captions of Answers, Wishes
  and Threat;
- the third (the lecture of 1943): the note on row 4.0 and the List
  caption;
- the fourth (the essay of 1946): a remark of Answers, and what that
  tab stands on;
- the fifth (the lecture of 1947): a ground of Wishes names it as a
  further witness;
- the seventh (the essay on translating): the captions of Beat and
  English, and a remark of Beat.

**The sixth is the one free entry**, from "Notes on Music and Opera".
It does not name this opera, and says so in its first five words. The
three persons in the remark of Shaw's that it reports belong to
another opera of Mozart's (the entry's own working note says so), and
that opera's page on this site has the same passage. By the letter of
the rule it could come out. I kept it, for three reasons that the
lead may weigh otherwise:

- the examiner kept it as part of what he taught about opera, as the
  other opera pages on this site keep the same essay;
- it holds the only sentence in his own words in the list, and no
  other page prints that sentence as a quotation (the page for *La
  Traviata* gives it in paraphrase);
- its third sentence, that in a play a person's speech is bound to
  his place in society and song is not, bears on this page more than
  on most: the first passage is the spoken one, and its Words tab
  sorts the prince's words from the bird-catcher's by the
  dictionary's styles. The page does not draw that line, and I did
  not draw it.

If the lead wants the list shorter, this is the entry to take, whole.
Short of that, its first two sentences (Shaw, and the answer to him)
are the part that belongs to the other opera's page.

**What the list says more than once.** That Papageno is rewarded
though he refuses the trial is said at the head of the page, in three
captions (Answers, Wishes, the second Words) and in four entries
running: the second, third, fourth and fifth. Two entries begin by
saying that he quotes the questions of the first passage. That is the
list's weight, since he came back to this scene five times in twenty
years; it is also what makes the list read as everything that was
found. None of the four is one of "two entries that say the same
thing". Each has what the others lack: the two themes, and how the
original blurs Papageno's trial; the double, and the Papageno who has
been woken; the two kinds of heroism; the persons paired with those of
the play, and the price. And all four are leaned on. So I trimmed
where an entry retold the scene itself (change 38) and left the rest.
If the lead wants it leaner without losing an entry, the opening
clause of the fourth entry (that the essay quotes the questions again)
could go.

**The order.** After the first entry the dates run 1956, 1943, 1946,
1947, and then two essays from the book of 1962. The first is first
because the view is drawn from it. After that a reader can see no
rule. By date (1943, 1946, 1947, 1956, then the two essays on opera)
the list would read as the history it is, and the fourth entry's
"again" would still follow what it points back to. The order is the
poet's and I left it.

## 5. The label over the first passage of `weddings`

Not mine to change. As it stands, the reader is told which lines
these are three times, one under the other, before reading one of
them (picture `magic-flute-weddings-0-words-1280.png`):

- the place beside the heading (the label of the hosted part, 123
  characters): the librettist, the German title, act and scenes, and
  then "four lines of the duet of Papageno and Papagena, and the last
  chorus";
- the label over the passage (76 characters): "The Magic Flute: four
  lines of the duet, and the last two lines of the opera";
- the second sentence of the caption that shows first: four are from
  the duet, and a chorus of priests sings the opera's last two.

What the label should say:

> The Magic Flute: the duet, then the last chorus

That is 47 characters; the label beside it has 48. My reasons:

- It must name the work, and in English. It is one of two labels side
  by side and the other names the play. The place has the opera's
  German title, and it may stand far from the passage: at the right
  of the heading on a wide window, several lines up on a phone.
- It must say what the three points in the passage part: the duet
  above them, the chorus below. Nothing else over the lines does; no
  singers' names are shown in this passage.
- It need not count. The place counts the duet's lines and the
  caption counts both.
- "Then" and not "and", because the points stand between the two.

If the lead cuts the place at its colon, as the artist proposes, the
label is the one thing at the head that says which lines these are
and the caption gives the count once. If the place stays whole, this
label is still right; the bare title, "The Magic Flute" (15
characters), would also do, but it leaves the three points unexplained
until the caption.

One thing the present label says and this one does not: that the two
lines are the last of the opera. The caption's second sentence says
it, and so do the line under the page's title and the last sentence
under "The passages".

## 6. The marks of lines left out on `queen`

**Where they will fall.** The built piece
(`site/data/pieces/magic-flute.json`) flags two rows of the English as
having a gap before them: p:45.5, the English under the fifth German
line, and p:45.7, the English under the eighth. The kit's mark is
three points, and the label it carries for a screen reader is "Some
lines are left out here".

**No line is left out.** The English stanza has eight lines (block 45
of Act 2 on the shelf, rows 0 to 7) and the passage shows all eight.
They are set in the order of the German, so the line the libretto
prints fifth (45.4) stands seventh. The build flags a gap wherever the
row numbers jump forward: from 45.3 to 45.5, and from 45.4 to 45.7. At
the first mark the line "left out" stands two rows below. At the
second the two lines "left out" stand two and three rows above.

So, to the question put to me: no caption needs the reader to know
that lines are left out, because none are. The trouble runs the other
way. Once drawn, the marks will say something the page has to take
back, and it takes it back in one place only.

- **English.** The last sentence of the caption says that a line has
  been moved (change 23). So do the fourth remark and the fourth note
  under "Where this page may be wrong". That explains the first mark.
  Nothing explains the second, though a reader who has followed the
  first can work it out. This caption also counts English lines ("its
  first four lines", "its last four"), and beside marks that say
  lines are missing a reader may ask which four. The count is right
  either way: the same four lines close the stanza as printed and as
  set here.
- **Beat, Rhyme, Threat.** Not a word about the order of the English.
  Beat is the tab that shows first. A reader there will see three
  points in the English twice and conclude that the English lacks
  lines.
- **Threat** counts lines (the third, the fourth, the fifth and
  sixth, the seventh). They are German lines and all are shown, so
  the count holds. But a reader who follows it in the English will
  meet the first mark exactly where the caption says "the fifth".

What I would do, in this order:

1. Draw no mark on this passage. A mark of omission where nothing is
   omitted is untrue, and the page already says in words what was
   done. This is for the build or the kit (flag a gap only where a
   row between the two is shown nowhere in the passage), so it is the
   lead's.
2. If a mark must stand there, it should not be the mark for lines
   left out, and the words that explain it should be on the tab that
   shows first. The first sentence of the Beat caption is the place,
   since change 14a put the libretto there: "Each German line stands
   over its English, taken from an English libretto of the opera,
   which prints these lines in another order." The caption then has
   117 words. I did not put this in. It would speak of marks that are
   not yet on the page, and under 1 it is not needed on Beat.
3. The label over the English ("The English libretto, each line under
   its German") is in the reading and is not printed on this passage
   (change 14a). If the lead has the kit print it, the label could
   carry the order: "The English libretto, its lines in the order of
   the German". It is not mine to change.

## 7. What on the page itself got in the way of reading

Words only. Where a line turns, where a gloss, a key or a caption
stands, and how tall a passage is on a phone are the artist's, and
they are in `art.md`.

1. **The second passage prints neither of its labels.** "The libretto
   of 1791" and "The English libretto, each line under its German" are
   in the reading and never reach the reader (change 14a says why). The
   first is hardly missed: the place beside the heading names the
   libretto, and the third remark of Beat gives its year. The second
   was missed, and the first sentence of the Beat caption now does its
   work.
2. **Two kinds of English, and the page says which only at the foot.**
   Under the first passage each phrase has this page's own plain
   English. Under the second each line has a verse translation from an
   undated libretto, with its *thee* and *thou*. A reader going
   from one passage to the next meets the change of voice unprepared.
   After change 14a the second is announced. That the first is the
   page's own is said only in the fourth note under "Where this page
   may be wrong", which is folded; I think a reader takes it for
   granted, and left it.
3. **The third passage says which lines these are three times** before
   its first line: section 5.
4. **The list under the passages comes back to one scene five times**,
   and its dates run out of order: section 4.
5. **A note begins twice.** Under a Words tab each note opens with the
   words of the passage in bold, and often the note's own first word
   is the same word again in the dictionary's form. Bare, the two ran
   together. Marked, the second now stands upright between the bold
   and the italic and the eye can part them (picture
   `magic-flute-weddings-0-words-1280.png`, the four notes at the
   foot). This is the form of such notes on the whole site, so I only
   report that the marks help it.

Nothing else in the words stopped me. The head of the page, the three
headings and the names on the tabs are plain and say what is there.

## 8. Refused by the permission system

Nothing was refused.

## 9. The picture tool, and the checker

**The picture tool** was run once, from 13:08:42 to 13:09:19 UTC, after
the first 55 of the 62 edits: the whole page at 1280 and at 390, and
all ten tabs at both widths. It reported nothing. In the pictures the
marked words stand upright in the italic notes and remarks, the titles
stand upright in the italic lines of sources, the *if* of the Wishes
caption is italic, and the key of Wishes reads with its quotation
marks.

Seven edits were made after that run, all of them words inside a
paragraph: the fifth sentence of the first caption (change 5a); "as
printed," in the English caption (change 23); the
semicolon of the first entry (change 34); "refuses" and "still" in the
fifth entry (change 38); a comma in the sixth (change 39); and the
libretto named in the first sentence of the Beat caption (change 14a,
eight words more). I did not run the tool again for them. The machine
is loaded, and none of them can move anything but the length of one
paragraph by a line. So the pictures of the first Words tab, the Beat
tab, the English tab and the list under the passages in `shots/` show
the wording before those seven. One of the two runs allowed is
unused.

**The checker**, run last, after every edit and after
`node build/pieces.mjs magic-flute`:

```
no problems
no warnings
the printed notes are fit to print
```

Its whole output is in `critic/check-after.txt`; the output from
before any change is in `critic/check-before.txt`. Before the changes
it also ended on these three lines: the faults above are ones it does
not look for.
