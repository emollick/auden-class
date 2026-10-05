# Henry IV, Part 2: the critic's report

Piece `henry-iv-2`. 3 October 2026; times are UTC. No words of the play
are typed here beyond a name and the single words and short phrases the
captions and notes already give; places are given by passage, tab, row
and word number (rows and words as `reading.json` counts them). Nothing
of Auden's or Pearce's is quoted.

In short: 26 numbered changes of wording (section 1), every one small.
They touch 34 sentences, four of them cut, and two labels in a key.
Fifteen titles and fourteen words were marked (sections 2 and 3). One
entry of nine was taken out of the list of what Auden said (section 4).
What is left for the lead is in sections 6 to 9. One command was refused
by the permission system (section 10).

## 0. What was run, and what was read

    node build/pieces.mjs henry-iv-2
    node build/tools/shoot.mjs henry-iv-2 --out remake/works/henry-iv-2/shots --page    (first of two runs, 10:05)
    node build/tools/prose.mjs henry-iv-2
    node build/tools/check-reading.mjs henry-iv-2 --print                              (before any change)

The picture tool's last line: `nothing reported; now look at the pictures`.
The checker, before any change: `no problems`, `no warnings`, `the printed
notes are fit to print`.

After the changes the checker and `build/pieces.mjs` were run again, and
the picture tool a second and last time (10:43). What the second set of
pictures shows is in section 9, and the checker's last lines in
section 10.

Read, in this order: the six slices of the page at 1280 and the twelve
tabs at 1280; the Play tab at 390; `review/remake/prose/henry-iv-2.md`
from top to bottom once before anything was marked; `reading.json` whole
(the `why`, `grounds` and `stands` of every tab, which the prose sheet
does not all print); `exam.md`; `art.md`, its section 6 above all; and
`site/js/pieces/henry-iv-2.js` for the words the drawing prints.

## 1. Every change to `reading.json`

Each was a small exact edit, and the checker was run after each round.
"Passage 1, 2, 3" are the plates `charges`, `sleep` and `rejection`. No
quotation, number, page, mark, ground or fact was touched, and no `turn`,
`join`, `heading` or tab `label`. `view` has two pairs of asterisks and
no changed word.

### Wording

1. **The passages** (`about`), first sentence. One name added.
   Old: "... has been the companion of Prince Hal, heir to the throne."
   New: "... has been the companion of Prince Hal (Henry of Monmouth),
   heir to the throne."
   Fault: a name never tied to its man. The largest words on the page,
   the quotation at the head, end on "Henry of Monmouth", and nothing
   printed said who that is. The play is called *Henry IV* and both kings
   are Henrys, so a reader new to it will most likely take the name for
   the old King, the wrong man. This is the one place where I added
   words that say something: an identification, not a wording. The text
   printed here bears it out (the Prince is Harry Monmouth in the
   Induction, row 3.28; Act 1, Scene 1, twice; Act 1, Scene 3; Act 2,
   Scene 3). If the lead would sooner not have it in `about`, it is one
   parenthesis to take out, and then the quotation needs its gloss
   somewhere else.

2. **Passage 1, Cross**, last sentence of the caption.
   Old: "By a student’s notes, Auden said in class in 1941 that ..."
   New: "According to a student’s notes, Auden said in class in 1941
   that ..."
   Fault: a mannered short form. "By his notes" stood three times on the
   page (here and in the first two entries of the list; changes 20 and
   21). "By his account" is English; "by his notes" is the same turn
   stretched.

3. **Passage 1, Cross**, what the caption stands on (`stands`).
   Old: "Chiasmus and antimetabole as *Silva Rhetoricae* defines them."
   New: "Chiasmus as *Silva Rhetoricae* defines it, and its entry for
   antimetabole, the same words repeated in reverse order."
   Fault: a term of the trade with no plain words. The gloss is the one
   the lens's second ground already gives. The line is still well under
   the checker's seventy words.

4. **Passage 1, Word**, third sentence of the caption.
   Old: "... and marks the pun of <i>waste</i> and <i>waist</i> ..."
   New: "... and marks the pun on <i>waste</i> and <i>waist</i> ..."
   Fault: the idiom is "pun on"; the note beside the passage had it so.

5. **Passage 1, Word**, the note on the first word glossed (row 86.0,
   word 9).
   Old: "Of a high degree is the lexicon’s third sense of great. Large in
   size is its first, and there it quotes the great belly of the last
   reply."
   New: "The meaning given here is the lexicon’s third sense of *great*.
   Its first sense is large in size, and there it quotes the *great
   belly* of the last reply."
   Fault: two meanings set down as the subjects of their sentences, with
   nothing to mark them off, so that the note opens like an inverted,
   antique sentence and has to be read twice. Nothing is claimed that
   was not: the meaning "given here" is the one set under the word.

6. **Passage 1, Word**, the note on row 90.0, word 7, first sentence.
   Old: "The lexicon marks the pun on waist."
   New: cut. The rest of the note stands.
   Fault: padding. The caption's third sentence says it, on the same
   screen, a few lines higher.

7. **Passage 1, Word**, fourth sentence of the caption.
   Old: "Later in the scene he says he was born with a round belly."
   New: "Later in the scene Falstaff says he was born with a round
   belly."
   Fault: a pronoun with the wrong men nearest. The sentence before it
   is about the lexicon, the judge and the 1600 printing.

8. **Passage 1, Sentence**, fifth sentence of the caption.
   Old: "Auden wrote that Falstaff speaks for one reason only, ..."
   New: "In his essay “The Prince’s Dog” Auden wrote that Falstaff
   speaks for one reason only, ..."
   Fault: the next sentence begins "Near the end of the essay", and no
   essay had been named. The name is the one `view.source` and `sources`
   print for these pages (186 and 207), so nothing is claimed that the
   page did not say. It also varies, a little, a frame that stood in
   seven captions of the twelve (section 5). The caption is now 115
   words. This change was made after the second set of pictures and is
   not in them; it puts no new mark in the caption, only words. See
   also section 6, item 4.

9. **Passage 2, Word**, last sentence of the caption.
   Old: "... twice, in Act 5, both times of the Chief Justice."
   New: "... twice, in Act 5, both times said of the Chief Justice."
   Fault: a mannered short form, "of" doing the work of "said of". (One
   of the two is said by the Justice of himself, so "said of" is the
   fact.)

10. **Passage 2, Word**, the note on the word glossed "favoring one
    party".
    Old: "The lexicon’s words are: inclined to favour one party more
    than the other. It cites this line."
    New: cut whole. The gloss under the word stays.
    Fault: padding, the same meaning told three times. The caption's
    first sentence gives it in nearly the same words, the gloss gives it
    again, and `stands` says that the lexicon cites the line.

11. **Passage 2, Word**, the note on the word glossed "cures,
    medicines", first sentence.
    Old: "The lexicon gives cure, medicament, and quotes this line."
    New: cut. The note is now its second sentence alone, on the King's
    kingdom as a diseased body.
    Fault: padding. It repeated the gloss it stands beside.

12. **Passage 2, Word**, what the caption stands on (`stands`), two
    places.
    Old: "... and under each other word glossed." and "... for
    *partial* and *impartial*, which stands in ..."
    New: "... and under each of the other words explained." and "... for
    *partial* and *impartial*; the second stands in ..."
    Fault: a working word ("glossed"), and a "which" that could take
    either word before it. 58 words.

13. **Passage 2, Sentence**, two labels in the key (seven spans carry
    them).
    Old: `I and my` and `a and the, not my`
    New: `“I” and “my”` and `“a” and “the,” not “my”`
    Fault: words named as words with nothing to set them off, so that
    the second label read as a broken sentence. The key prints plain
    text, so these take quotation marks and not asterisks.

14. **Passage 3, Beat**, fourth and fifth sentences of the caption.
    Old: "Auden wrote that in these plays Falstaff has come to feel in
    earnest and still talks as his comic world talks; his example is
    prose. This call is verse."
    New: "In these plays, Auden wrote, Falstaff has come to feel in
    earnest and still talks as his comic world talks; his example is
    prose, and this call is verse."
    Fault: a four-word sentence set after a long one for effect, and the
    frame "Auden wrote that" again. The two facts are one thought and
    are now one sentence. Nothing is concluded from them, as before.

15. **Passage 3, Beat**, the first numbered remark.
    Old: "... straight after the stop. The full stop is an editor’s:
    ..."
    New: "... directly after the stop. The period is an editor’s: ..."
    Fault: British usage on a page spelled the American way (*favor*,
    *practice*). "Stop" is kept for the pause, as the caption has it.

16. **Passage 3, Names**, last two sentences of the caption.
    Old: "... forbids the sort of answer shown in the first passage.
    Falstaff makes none."
    New: "... forbids the sort of answer shown in the first passage, and
    Falstaff makes none."
    Fault: an ending that poses, a three-word sentence set last for
    effect. The fact stays.

17. **Passage 3, Word**, first sentence of the caption.
    Old: "Four of the King’s phrases are of age and death: ..."
    New: "Four of the King’s phrases speak of age and death: ..."
    Fault: the mannered "of" again, as in change 9.

18. **Passage 3, Word**, `stands`.
    Old: "... under each word glossed."
    New: "... under each word explained."
    Fault: a working word.

19. **Passage 3, Balance**, last sentence of the caption.
    Old: "Auden wrote that no allowance can mend what the rejection does
    to Falstaff’s heart: ..."
    New: "No allowance, Auden wrote, can mend what the rejection does to
    Falstaff’s heart: ..."
    Fault: the frame (section 5). The words after the colon are as they
    were.

20. **The list, first entry** (Pearce, pp. 144–45), four sentences of
    its six.
    Old: "By his notes Auden began on Henry IV by calling Falstaff a
    comic counterpart of Iago. Both are detached from the moral side of
    human dealings, and both manipulate people: Iago coldly, Falstaff by
    making a play or a game of everything. The play’s true Machiavel, he
    said, is the Prince, who studies Falstaff as a pupil and at the end
    of Part 2 drops his old companions ..." and "His later essay, “The
    Prince’s Dog,” reads Falstaff differently."
    New: "His notes have Auden begin on *Henry IV* by calling Falstaff a
    comic Iago. Both are detached from the moral side of human dealings
    and manipulate people: Iago coldly, Falstaff by making a play or
    game of everything. The play’s true Machiavel, or schemer, he said,
    is the Prince, who studies Falstaff as his pupil and, at the end of
    Part 2, drops his old companions ..." and "Auden’s later essay, “The
    Prince’s Dog,” reads Falstaff differently."
    Faults: "By his notes" (change 2), with a second "by" in the same
    clause. "Machiavel" is a word of the trade and had no plain word
    beside it. "As a pupil" could be taken for "when he was a pupil" or
    "as a pupil might"; the notes make the Prince Falstaff's pupil (I
    looked again at the pieced text of pp. 144–45), and "his" says so.
    "His later essay" followed a sentence about the Prince's father and
    borrowed its "his". Three trims ("counterpart of", "and both", "a")
    keep the entry under the checker's 110 words now that the plain word
    is in: it is 108. "A comic Iago" says what "a comic counterpart of
    Iago" said.

21. **The list, second entry** (Pearce, pp. 146–48), first sentence.
    Old: "Later in the same lecture, by the same notes, Auden called ..."
    New: "Later in the same lecture, as Pearce recorded it, Auden called
    ..."
    Fault: as change 2.

22. **The list, fourth entry** (the fable, pp. 186–88), fourth sentence.
    Old: "Auden lists five things the ideal ruler needs: ..."
    New: "Auden listed five things the ideal ruler needs: ..."
    Fault: the tense wandered inside one entry (gave, lists, wrote). The
    list is in the past everywhere else.

23. **The list, fifth entry** (pp. 195–98), second sentence.
    Old: "... that England’s body politic is unwell too, and he sets
    beside them the play’s lines on ..."
    New: "... that England’s body politic is unwell too. He set beside
    them the play’s lines on ..."
    Fault: a sentence of 54 words, too long to follow, and the tense
    again. Broken at the "and".

24. **The list, sixth entry** (pp. 204–06), second sentence.
    Old: "... and seen from outside the Prince and Iago do the same two
    things ..."
    New: "... and, seen from outside, the Prince and Iago do the same
    two things ..."
    Fault: without the commas the eye takes "outside the Prince"
    together.

25. **The list, seventh entry** (“Music in Shakespeare”), first and last
    sentences.
    Old: "... that music, like sack, helps Falstaff keep up the illusion
    ..." and "... he adds, the first thing Falstaff hears ..."
    New: "... that music, like the sack Falstaff drinks, helps him keep
    up the illusion ..." and "... he added, the first thing Falstaff
    hears ..."
    Fault: a word left unexplained (sack is his wine, and "drinks" says
    as much without a gloss), and the tense.

26. **The list, last entry** (the New York lectures), last sentence.
    Old: "He also said that the two are lasting opposites and enemies,
    ..."
    New: "He also said that Hal and Falstaff are lasting opposites and
    enemies, ..."
    Fault: "the two" pointed at the wrong pair. The sentence before it
    is about father and son. The end of the same sentence names Falstaff
    and Hal, and the research notes bear it out.

After each cut I read the caption or note again: each still goes from
what is on the passage to the reason for it, and no `why`, `grounds` or
`stands` needed trimming to match. Counts after the changes: captions 99
to 115 words, `stands` 17 to 68, list entries 74 to 108.

## 2. Titles marked

No word changed. Fifteen titles stood bare in the lines that are printed
in italic or beside them, and are now between asterisks:

- `where`: the play's title. It now stands upright in the italic line
  under the page title, with the acts and scenes after it in italic.
- `view.says`: *Henry IV*. `view.source`: *The Dyer’s Hand*. These are
  the only two marks made in `view`.
- `auden[].says`: *Henry IV* in the first entry, *The Dyer’s Hand* in the
  third.
- `auden[].source`, all eight: *W. H. Auden: The Far Interior* (two),
  *The Dyer’s Hand* (five), and in the last *Lectures on Shakespeare*
  with the plays its lecture is named for, *Henry IV, Parts One and Two*
  and *Henry V*, as `sources` already had them.

The essays were already in curly quotation marks and stay so: “The
Prince’s Dog,” “Brothers & Others,” “Music in Shakespeare,” “Fortunate
Fall: W. H. Auden at Michigan.” The captions (`<i>`), every `stands`,
`sources` and `caveats` were already marked by the writers. `about` names
no title.

## 3. Words named as words, marked in the italic notes

Fourteen, in eight notes (`notes[].note`), all in the three Word tabs.
The forms are the writers'; I added the asterisks and nothing else. The
ones that are the play's own words I checked against the text printed
here; the spellings of the Quarto and the Folio are as the examiner left
them.

- Passage 1, Word. The note on the first word glossed: *great*, *great
  belly* (in the sentence rewritten in change 5). The note on the word
  glossed "squandering": *waste*, *slender*, *slenderer*, *wast*,
  *waste*. The note on the word glossed "led astray": *misleaders*.
- Passage 2, Word. The note on the word glossed "a ship’s boy":
  *season*, *Sea-Boy*. The note on the last word glossed: *uneasy*.
- Passage 3, Word. The note on the word glossed "swollen by gluttony":
  *surfeited*. On the word glossed "virtue": *grace*. On the last word
  glossed: *borne*.

Left bare on purpose: in the note on the word glossed "coarse of tongue"
the Prince is said to blame himself "for profaning the time". That is the
note's own sentence about what he does, not the word named as a word,
and the play's form there is not this one. The five numbered remarks
(`points[].say`) name no word and no title, and the page has no `ties`.
In the second set of pictures each marked word stands upright in its
italic note (the three Word tabs at 1280).

## 4. The list of what Auden said: one entry taken out

The list had nine entries. It has eight.

**Taken out:** the eighth, from two essays in *The Dyer’s Hand* on other
subjects: “Brothers & Others,” p. 221 (an essay on *The Merchant of
Venice*) and “Notes on the Comic,” pp. 378–79. It said that an
audience's liking for Falstaff sees further than the moral judgment that
must side with Hal, and that Falstaff stands for loyalty to a person
against the Prince's management of others, so that, rejected, he can be
said to die of a wound to his honor.

**Why:** it is the one entry of the nine that CRITIC.md's rule names.
Both remarks are made in passing in essays about something else, and the
page says each of them already: that an audience which knows Falstaff is
not won over is in the entry on pp. 190–91; that Falstaff can form only
personal ties and the Prince none is in the Names caption, from the
class of 1941; that the Prince manages people as a Machiavel does is the
first entry; that what the rejection wounds is his heart is the Balance
caption and the quotation over the third entry. What the page loses is
one image, the wound to honor. No caption, ground or `stands` leaned on
the entry.

**What went with it:** “Notes on the Comic,” pp. 378–79, came out of the
second line of `sources`; nothing else on the page uses those pages (I
searched the file for them). “Brothers & Others,” p. 221, stays there:
`view.source` and the Play caption use it. The entry that followed did
not begin "In the same book", so no entry needed a name put back. The
entry is whole (`says`, no `quote`, `source`, `checked`) at the end of
`notes.md`, under "Taken out of the list of what Auden said". That
heading and the entry are the only thing I wrote in `notes.md`.

**The eight that stay,** and what the page would miss:

1. Pearce, pp. 144–45: said in 1941, and the only place the page gives
   his view of that year whole.
2. Pearce, pp. 146–48: said in 1941; three captions lean on these pages
   (Cross, the second passage's Sentence, Names).
3. pp. 190–91: it carries the quotation; Balance, Names and the third
   passage's Beat lean on it.
4. pp. 186–88: the fable that the second sentence of the view
   compresses; the second passage's Word leans on p. 188. I doubt its
   last sentence (section 6).
5. pp. 195–98: a note in the third passage's Word leans on it.
6. pp. 204–06: the only place on the page that says what the quotation
   at the head means by Charity (section 6).
7. “Music in Shakespeare,” pp. 510–11: the caption of the third
   passage's Word leans on it.
8. The New York lectures, pp. 107 and 110: the Rhyme caption leans on
   p. 107.

Eight entries of 74 to 108 words is still a long foot to the page, about
800 words. Where it could be shorter without losing an entry is in
section 5, under "thoughts told twice".

One thing for the lead to carry over: exam.md (section 6, items 5 and 6)
calls the entry on the New York lectures "the ninth entry". It is now
the eighth. exam.md is not mine to edit.

## 5. What recurs, with counts

The piece is clean of the faults the checker hunts: no stock word, no
claim of feeling, no "not X but Y", no caption that closes on a moral.
What recurs is of the other kind: plainness overdone, and one frame used
too often.

- **"Auden wrote that"** opening a sentence: seven captions of twelve
  before, and the view. Now four bare (first passage, Word and Play;
  second passage, Word; third passage, Word), one with the essay named
  in front (change 8) and two turned to "..., Auden wrote, ..." (changes
  14 and 19). Three list entries open with it too, which is its place.
- **Auden in the caption at all:** eleven of twelve; the second
  passage's Beat is the one without him. Six captions close on him: all
  four of the first passage, the second passage's Sentence, and Balance.
  That is the method, and I did not move sentences to hide it. A reader
  going through the four tabs of the first passage does hear the same
  close four times.
- **"Auden told his class in 1941"** twice (second passage, Sentence;
  Names) and "Auden said in class in 1941" once (Cross). Left: three in
  twelve is the method.
- **"By ... notes"** for "according to": three, now none (changes 2, 20,
  21).
- **"Of" for "said of" or "about":** two, now none (changes 9 and 17).
- **A short sentence set after a long one for effect:** two, both
  joined to the sentence before (changes 14 and 16). One more of the
  build is left, the last sentence of the third passage's Beat, five
  words long. It is a fact the reader can go and see, and the caption
  began with its like, so it stays.
- **Notes that open by reporting the lexicon:** seven of twelve notes
  before, four of eleven now (changes 6, 10, 11). The three sentences
  cut repeated the caption or the gloss beside them. "The lexicon of
  Shakespeare’s words files" stands in two captions, and "Rhetoric calls
  this" in two; both are the method.
- **Tense in the list:** "lists", "sets", "adds" among past verbs, three
  (changes 22, 23, 25). Every verb of saying in the list is now in the
  past.
- **Working words in printed notes:** "glossed", twice (changes 12, 18).
  The checker lists none now.
- **Every caption the same length and the same build.** 99 to 115 words,
  nine of the twelve between 108 and 111: what is in the lines, then a
  handbook or the lexicon, then Auden. None is short. Each is sound; read
  one after another they sound like one mould filled twelve times. This
  is for the lead and the poet, not something a critic's cut can mend. A
  tab whose point is made by its fourth sentence, as in Names, need not
  go on to the limit.

**Thoughts told twice.** Not wording, so left; the lead may want a
sentence or two out of the list.

- Falstaff takes the Prince for his child: second entry, last sentence;
  third entry.
- He believes the Prince loves him back: third entry; seventh entry.
- England's sick body and Falstaff's: second entry; fifth entry; the note
  on the word glossed "swollen by gluttony".
- The King's denial is the first thing Falstaff hears: seventh entry,
  last sentence; the caption of the third passage's Word, last sentence.
- The friendship ends with the good night: seventh entry; the note on
  the word glossed "coarse of tongue".
- Father and son on how uneasy a king is: last entry; the Rhyme caption.
- A world where Falstaff cannot live: the view ("cannot live"), the Play
  caption ("cannot exist"), the second entry ("cannot survive").

Some of these are the class of 1941 and the essay of 1962 agreeing,
which is worth a reader's seeing once. The two that repeat a caption
nearly word for word (the denial; father and son) are the first I would
give up. I left them because each is the place where the caption's
source is told in full.

## 6. Sentences doubted and not changed

For the lead. The first three matter most.

1. **The quotation at the head has nothing to explain it** (`view`,
   which is not mine to touch). The largest words on the page call
   Falstaff a comic symbol for the supernatural order of Charity, set
   against the temporal order of Justice. The paragraph under them is
   about play, history and justice. It never says Charity, or love, and
   no caption does. Nothing on the page says that Charity here is the
   old word for love and not almsgiving. The nearest help is the sixth
   entry of the list, far down under the three passages (a love that
   keeps nothing back, pp. 204–06), and it does not use the word. Either
   the paragraph should say it in one clause, on the word of those
   pages, or another sentence of Auden's should stand at the head. I did
   the one thing in my reach: change 1 says who Henry of Monmouth is.

2. **"Temporal justice"**, in the same paragraph. The word is taken over
   from the quotation and never said plainly: justice in this world, the
   justice a ruler can keep. In the same sentence, "Cut his scenes, and
   *Henry IV* is ..." uses a command for a condition, and "a trilogy" is
   not said to be which three plays. The fourth entry of the list says
   the same thing more plainly ("the three plays with the Falstaff
   scenes cut").

3. **The last sentence of the fourth list entry** (pp. 186–88): that no
   one, the rebels included, names a particular unjust act of the old
   King's reign. Where it stands it is a stray fact, and it seems to
   deny the view above it, which says the old King pays for an act of
   injustice. The two fit only when the reader works out that the act is
   the taking of the crown and nothing done as king. Auden says so in
   his very next sentence (I looked in the scan; p. 188), and the Word
   caption of the second passage gives it. Cut the sentence, or finish
   it with that. I did neither: the first loses a statement the examiner
   checked, and the second adds one.

4. **The essay's name and the last reply.** The first passage ends on
   the reply in which Falstaff calls the Prince his dog, and Auden's
   essay is called “The Prince’s Dog” and, as the Sentence caption says,
   comes back to that reply near its end. The page never put the two
   together: the name stood only in the small source lines and in the
   list. Change 8 now names the essay in the caption that stands beside
   the reply, so a reader can see it. Whether to say outright that the
   essay is named for these words is the lead's to decide. It would be a
   new statement and would need care: in the line it is the Prince who
   is the dog, and the title can be read the other way.

5. **Third passage, Beat: "his example is prose, and this call is
   verse."** The examiner cut a pairing here down to this (exam.md,
   section 6, item 3). What is left tells the reader that Auden's remark
   was made of another speech, and stops. Does it hold of this line or
   not? The caption cannot say without making the claim itself. It is
   honest, and it is the weakest sentence in the piece: Auden is brought
   in to be told he was speaking of something else. The tab pays without
   him: the halting line, the stress after the stop, the return to
   prose. The lead might take the sentence out and let this be the
   second caption of twelve without Auden. I did not, because the
   caption's `why`, one ground and `stands` rest on that page.

6. **Two tabs make their point by setting two places side by side**: the
   second passage's Word (the King calls Sleep by a word the play uses
   nowhere else, and keeps its opposite for the Chief Justice) and
   Balance (the King's line has the build of Falstaff's wish in the
   first passage, and his speech answers both halves of it). The
   examiner doubted them too (exam.md, section 11). Neither is Auden's;
   both are the reading's own noticing. Read as a reader: each says only
   what can be counted or seen in the text, draws no conclusion, and
   told me something about how the passage is made that I did not know.
   They pay, and I would keep them. They are flagged because this is the
   kind of sentence the person the site is for asked about.

7. **Third passage, Word: the caption and the marks go separate ways.**
   The caption is about four phrases of age and death. None of the four
   is among the nine words underlined and explained, and none of the
   nine is in the caption. The four show only when the reader points at
   them in the caption. The notes are good ones (two carry Auden), but
   on the still page a reader looks for the caption's phrases among the
   underlined words and does not find them. Not wording; for the lead
   and the poet.

8. **Second passage, Rhyme, last sentence.** The line from Act 5 is the
   reading's addition and not Auden's, as the `open` list says. The
   caption keeps the two apart well enough ("the son in *Henry V*. In
   Act 5 of this play ..."). The quoted words keep their "on me" inside
   a "says that", which jars a little. It is a quotation, so it stays.

9. **Second passage, Beat: the first and third numbered remarks say
   again what the caption says** (the sentence ends on the sixth
   syllable, and the King turns to a new hearer). They number places on
   the passage, so they are marks and not mine to take out. Their words
   could be fewer.

10. **Smaller things, left.** Peto (the Play caption, the seventh
    entry), the Percies (first entry) and Iago (first and sixth entries)
    are named and not said to be anyone; the text printed here has no
    list of persons to ground a gloss of Peto, and the sentences read
    without one. In the third passage's Word, "When the two next meet"
    means Falstaff and the Prince, and the caption has named only the
    King. In the second passage's Sentence, "the last line has **the
    head** and **a crown**" leaves its point to the key. "The low"
    (second passage, Beat and Rhyme) is the play's own word and stands
    in the line shown.

## 7. The artist's section 6, weighed

The artist says that nothing wrong reaches the page, names three working
notes that no longer fit it, and leaves one question open.

- **Nothing wrong reaches the page.** I agree. I read each caption
  against its picture in both sets. On the Play tab every number in the
  caption stands on the drawing: Falstaff's 5,373 words and eleven lines
  beside his name, nine of nineteen scenes in the key, "no prose" beside
  the old King, the Prince's change at Act 2, Scene 4. My one
  reservation is not an error: section 6, item 7.
- **`open`, the second entry** (nothing marks the gap on the second
  plate). Stale, as the artist says. Three points stand between the two
  stretches in every picture of that passage, and the Rhyme tab's key
  says what they are. The printed caveat on the lines left out is still
  right. The rest of the entry is still true and is the root of section
  9, item 4.
- **`open`, the entry on the first tab of the first plate** (only the
  first crossing is drawn with arcs). Stale, and now the other way
  about: the second crossing has its two strokes and the first is told
  by color. Neither entry is printed, so no reader is misled. `open` is
  not mine to edit, and `notes.md` (its section 8 says the same as the
  old entry) is mine only for the entry taken out. Both are for the
  lead.
- **The order of the numbered remarks on the second passage's Beat.**
  Already mended in the reading as I found it. The list runs row 5.1,
  then row 5.26 words 1 to 3, then words 4 to 5, and in both sets of
  pictures the numbers 1, 2, 3 stand in reading order with the right
  remark against each.
- **The open question: should `join` be "none", so that both crossings
  are told by color?** Not mine to set. As a reader I would keep the X.
  The caption's word is "crossed", and one X drawn where it can be drawn
  shows what the word means; I read the first pair of colors by its
  light, as the artist hoped. With color alone the word would have
  nothing drawn to stand on. The cost is small: for a moment I looked
  for a second X.

## 8. The printed words of the drawing (tab "Play")

Read in `site/js/pieces/henry-iv-2.js`, which I did not edit: every
string it prints (lines 19–20, 25, 147, 151–152, 155, 164, 189–190, 199,
206, 208, 232–234, 248–249, 253, 257), and the sentence over the
drawing, which is `what` in the reading. They read as one hand with the
captions, and nothing in `facts` needs changing. One change I would
make, and one smaller.

1. **Line 233.**
   Old: `'under a figure: lines of verse too few to draw to scale'`
   New: `'under a number: lines of verse too few to draw to scale'`
   Why: on this page "figure" means a figure of speech. The first tab of
   this same passage prints "chiasmus" with the figure in plain words
   under it, and Balance names another. The fold under the key is called
   "The numbers", and what the reader sees is a small number over a
   stroke.

2. **Line 249** (smaller). The second table in the fold "The numbers"
   prints each `speaker` as `facts` holds it, so three of its five rows
   begin with a small letter (`facts.speakers[2]`, `[3]` and `[4]`: the
   Prince twice and the Lord Chief Justice) under two that begin with a
   capital. The drawing prints the same names through `cap()` (line
   164), and so do the words the pointer brings up (line 190).
   `cap(s.speaker)` at line 249 would match them. I would not change the
   three values in `facts` instead: the script joins the Prince's two
   rows by the words they share, and finds his change by the key `the
   Prince changes to verse`, which must begin with the same words (lines
   45 to 66). The picture tool does not open the fold, so this is read
   from the script and not seen.

Looked at and left: line 232 ("a line of verse is drawn as tall as 7.6
words, its average length in this play") is clear. Line 234 ("no prose:
9 of the 19 scenes, and the Induction") agrees with the caption. "This
exchange" (line 155) is the caption's own opening. The words the pointer
brings up (lines 147, 190, 208) are counts with their place and need
nothing.

## 9. What on the page itself got in the way of reading

Words and order only. Where a line turns, where a gloss or a caption
stands and how tall a plate is on a phone are the artist's, reported in
art.md, and are left out here as told.

1. **The page's title is borne out late.** It promises Falstaff's prose
   and the King's verse. The first passage opens on Cross, which is
   about word-play and does not say the passage is prose. The tab that
   shows the title's matter, Play, is the fourth of that passage, and
   the first tab a reader meets that says it in words is the Beat of the
   third passage. `about` does not say it either. A reader who opens no
   tab leaves the first passage without what the title promised. Play
   first in the first passage, or one clause in `about`, would mend it.
   The order of tabs is not mine to change.
2. **The quotation at the head** asks more than the page gives back:
   section 6, items 1 and 2.
3. **The key under the Rhyme tab** prints "the sound lie, coming back
   from line to line". The syllable is not set off, so the eye takes
   "the sound lie" as a phrase and stumbles; every other word named as a
   word in the small italic lines now stands upright. The words are the
   kit's (`site/js/kit/lens-rhyme.js`, line 220) and the syllable is the
   reading's (`threads[0].sound` of that tab). It is a matter of words
   and not of layout, so it is reported: the kit could set the syllable
   upright or between quotation marks. I did not touch the value, which
   belongs to a mark.
4. **Two rows of the second passage end on the same word**, the fourth
   shown and the last but one, six rows apart on the plate, and the
   Rhyme tab gives only the second a letter. The reason is in `open`
   (in the speech they are twenty-three lines apart, and the tab does
   not count it a rhyme) and is sound, but nothing printed says it. A
   reader who notices may think the tab missed one. A short caveat of
   its own would settle it; the fifth is already at its fifty words.
5. **The foot of the page is long:** eight entries, about 800 words,
   after three passages of four tabs each. Sections 4 and 5 say where
   it could lose a sentence.
6. **The third passage's Word** shows nine underlined words and a
   caption about four other phrases: section 6, item 7.

**What the second set of pictures shows** (10:43; I looked at the head,
the list and the foot of the page at 1280, the head at 390, and all
twelve tabs at 1280). The play's title stands upright in the italic line
under the page title, and the book titles upright in the italic source
lines under the view and under each of the eight entries. *Henry IV* is
italic in the view's paragraph. The parenthesis in `about` reads without
a hitch. All fourteen marked words stand upright in their notes. The two
key labels of the second passage's Sentence print with their quotation
marks. The notes cut short (changes 6, 10, 11) leave no gap: the gloss
is still under each word. Two phrases are not in these pictures, being
made afterwards: the essay's name in change 8 and "as his pupil" in
change 20. Each replaces words with words in running text.

## 10. Refused, and the last run

**Refused: one command.** Part way through, this session's working
memory was cut short and replaced by a summary, so for section 1 I went
to the session's own record (a file under `/root/.claude/projects`,
outside the course folder; read only) for the old wording of sentences I
had already changed. One look went through and gave the old first entry
of the list (change 20). A second search of the same record, for the old
wording of the other entries, was refused by the permission system
("Sensitive-Source Provenance"). I did not try again or by another way.
Except in change 20, the old wording in section 1 is therefore given
from my own account of the edits, the exact strings I replaced, and not
read back from a copy of the file as it was. Where only part of a
sentence is given, that is why. Nothing else was refused.

Besides the course folder I read, and did not quote, the scans that the
entries' `checked` notes point to (*The Dyer’s Hand* and Pearce's
essay), to see that my rewording of the list kept to what they say, and
for section 6, item 3.

**The last run**, 11:03, after the last change:

    node build/tools/check-reading.mjs henry-iv-2 --print
    node build/pieces.mjs henry-iv-2

The checker's last three lines:

    no problems
    no warnings
    the printed notes are fit to print

`build/pieces.mjs` ended without error, and `build/tools/prose.mjs` was
run again so that `review/remake/prose/henry-iv-2.md` holds the page as
it now reads (4,355 words). The picture tool was run twice and no more.
Two small changes came after its second run and are not in the pictures:
the essay's name in change 8, and "as his pupil" in change 20.
