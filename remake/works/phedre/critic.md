# Phèdre: the critic's record

Piece `phedre`, "Racine's line". Critic at work on 3 October 2026, from
11:52 UTC, after the examiner (`exam.md`) and the artist (`art.md`).

Nothing in this file writes out a line of the play, of Boswell's English
or a sentence of Auden. Words of the passages are pointed at by passage,
tab, row and word number, as `node build/tools/check-reading.mjs phedre
--print` shows them (`p:` marks a row of the English; words count from
0). "Old" and "new" below are the site's own sentences. Where one of
them names a word of the play, the word is one the page already names.

This file is written in parts as the work goes. Until the heading "In
short" stands at its end, it is not finished.

## 1. What was read, and with what

- `remake/BRIEF.md`, `remake/CRITIC.md` (all of it), `remake/EXAMINER.md`
  for "The printed notes", and the end of `remake/KIT-CHANGES.md`.
- `reading.json` of this piece, whole; `exam.md`, whole; `art.md`, its
  sections 2 to 7, with the short part on the reading (section 6).
- The page as a reader sees it. The picture tool was not run at the
  start: the artist's set of 11:44 to 11:47 UTC was taken after the last
  change to the kit (11:05:49) and to the reading (10:18:35), and I
  checked the file times before using it. I read the whole page at 1280
  from the top (`phedre-page-1280-0.png` to `-5`), each of the ten tabs
  at 1280, and the Words tab at 390.
- `review/remake/prose/phedre.md`, made again at 11:53 with
  `node build/tools/prose.mjs phedre` after `node build/pieces.mjs
  phedre`: 3,667 words, read once from top to bottom before anything was
  marked, then sentence by sentence.
- The proof that `node build/tools/check-reading.mjs phedre --print`
  prints, kept before any change: no problems, no warnings, the printed
  notes fit to print.
- To judge whether a paraphrase says more than Auden did, the scans of
  *The Dyer's Hand*, pp. 24 to 26, 176 and 297, and of *Forewords and
  Afterwords*, pp. 358 to 359 and 364. No fact was checked again. The
  examiner's record stands.

## 2. Every change of wording

All in `reading.json`, each by one exact edit. Nothing was touched in a
`quote`, a `grounds`, a `why`, a `stands`, a `checked`, a mark, a
number, a name, a `turn`, a `join`, a `heading`, `speakers`, `beside`
or the one-word label of a tab. A path-by-path comparison with the copy
kept before the work shows 16 paths that differ, with the entry taken
out of the list (section 4) set aside: 8 captions, 3 numbered remarks,
1 note on a word, 3 entries of the list, and one line of `sources`
(the page that only the entry taken out had used). The changes are
numbered 1 to 17 below, with 2a after 2.

Where a sentence is a paraphrase of Auden I give its first words and
the words that changed, and do not copy it whole.

### 2.1 The first passage ("Hippolyte, then Théramène")

1. **Count, caption, the last two sentences: their order, and one
   word.**
   - Old: sentence 6 was "In the third line the cut falls between two
     names: her father ends the first half, her mother the second."
     Sentence 7, the last, was the one that begins "Auden found verse
     measured by count hard for an English ear".
   - New: the sentence on Auden is now sixth, after the one on the two
     fixed accents. The last is "In the third line the cut falls
     between two names: Phèdre’s father ends the first half, her mother
     the second."
   - Faults: two. (a) "Her father" had nothing to point back to: the
     caption had named her only as a word in bold, two sentences
     earlier, and the reader had not yet been told whose parents the
     third line holds. (b) The caption left the line it had just shown
     to end on Auden and the count again. It was one of six captions in
     ten that closed on a sentence about Auden (section 5). In its new
     place his remark follows the fact it answers, that only two
     accents are fixed, and the caption ends on the line. No word of
     either sentence changed but the one name; 110 words, as before.
     The `why` already gives the third line as the reason.

2. **Figure, caption, sentence 3.**
   - Old: "The list of persons enters her in the same words."
   - New: "The play’s list of persons describes her in the same words."
   - Fault: a quaint turn. "Enters her" stopped me, and "the list of
     persons" did not say whose list. "List of persons" is kept because
     the notes at the foot use it.

2a. **Figure, caption, sentence 5.**
   - Old: "The play says later what each parent was."
   - New: "Later the play says what each parent was."
   - Fault: an echo of my own making. After change 2, two sentences in
     three opened on "The play". The same words in another order; 111
     words.

3. **English, caption, sentence 4.**
   - Old: "Both keep the gods as the ones who sent her."
   - New: cut.
   - Fault: padding. The first numbered remark, which stands beside the
     caption, is the same sentence word for word. The remark keeps it,
     at the mark it belongs to. The caption still goes from what
     changed (the length, the name) to the reason (Auden on English and
     French verse); the `why` never named the gods. 82 words.

### 2.2 The second passage ("Phèdre tells how it began")

4. **Figure, caption, sentence 5, its end.**
   - Old: "… and each verb has its own <i>et</i>, and."
   - New: "… and each verb has its own <i>et</i>, the French for
     “and.”"
   - Fault: hard to read. The gloss was the last word of the sentence
     and looked like a slip of the pen: "its own et, and." Quotation
     marks, not italics, so that the page does not go looking for the
     word in the passage.

5. **Figure, caption, sentence 6.**
   - Old: "Littré says <i>et</i> repeated gives a phrase more force."
   - New: "Littré’s dictionary says <i>et</i> repeated gives a phrase
     more force."
   - Fault: a name left unexplained. Read from the top, this is the
     first place the page says "Littré", and nothing told a reader
     with no French that it is a dictionary.

6. **Figure, caption, the last sentence.**
   - Old: "Racine’s preface says the play shows the passions only to
     show the disorder they cause."
   - New: "The play, Racine writes in his preface, shows the passions
     only to show the disorder they cause."
   - Fault: a tic. "Racine’s preface says" opened a sentence in four
     captions and closed three of them (section 5). Two are varied,
     this one and change 13. 115 words.

7. **Halves, caption, the last sentence, one word.**
   - Old: "… a rich robe over nakedness."
   - New: "… a splendid robe over nakedness."
   - Fault: one thing said two ways. The same sentence of Auden's is
     paraphrased in the list under the passages with "splendid". Neither
     adjective is his (I looked at p. 176), so nothing is lost, and a
     reader no longer wonders which he wrote.

8. **Halves, remark 2 (on row 0.2).**
   - Old: "One loss to each half of the line: sight, then speech."
   - New: "She loses her sight in the first half and her speech in the
     second."
   - Fault: an echo. The caption, a few lines above, says "The third
     line gives one loss to each half". The remark now gives only what
     it adds, which loss is where.

9. **Halves, remark 4 (on row 0.5, word 5).**
   - Old: "Unavoidable. The one word fills four of the six syllables of
     its half."
   - New: "The word for unavoidable fills four of the six syllables of
     its half."
   - Fault: a one-word sentence that reads as a verdict. Set alone, in
     italics, as the remark on the last line shown, "Unavoidable."
     looks like the page's comment on her fate. It is only the meaning
     of the word, and now says so.

10. **Words, the note on row 0.3, word 6** (the one the artist pointed
    at, `art.md`, section 6).
    - Old: "Littré quotes this line under the sense."
    - New: "Littré’s dictionary quotes this line under this sense, to be
      seized with cold."
    - Fault: a sentence that lacks its end. "The sense" stood only as
      the gloss under the word, across the page at a desk and a screen
      above on a phone. The note now names it, in the words of the
      gloss, and says once in this tab what Littré is (the caption of
      this tab never does). The next note, "Littré quotes this line here
      too.", leans on this one and now has something to lean on.

### 2.3 The third passage ("Phèdre to Hippolyte")

11. **Ear, caption, sentence 2, and remark 1: one spelling.**
    - Old: "anapaests" in the caption; "an anapaest" in the remark.
    - New: "anapests"; "an anapest".
    - Fault: the house style is American English, and the foot was
      spelled the British way in the site's own sentences while the
      notes at the foot of the same page already had "anapestic" and
      "Anapest". The other pieces that name the foot (Rimbaud, Moby
      Dick) write "anapests". Auden's own word in the quotation printed
      under the passages keeps his spelling, as a quotation must; the
      grounds, which are not printed, were not touched. See also change
      15.

12. **Break, caption, the last sentence, now two.**
    - Old: "Racine’s preface says that, forced to disclose her passion,
      she speaks with <i>confusion</i>, a word for shame as well as
      disorder, which shows her crime as the gods’ punishment more than
      her will."
    - New: "Racine’s preface says that, forced to disclose her passion,
      she speaks with <i>confusion</i>, a word for shame as well as
      disorder. This, it says, shows her crime to be the gods’
      punishment more than an act of her will."
    - Fault: too long to follow, in two places. After the gloss, "which"
      could be the word or the confusion; and "as the gods’ punishment
      more than her will" had to be read twice to find what was being
      compared. The claim is the same, and it is still given as the
      preface's (the ground reads: a confusion which shows that her
      crime is a punishment of the gods rather than a movement of her
      will). 115 words. The examiner's doubt about this sentence is not
      settled by the change: section 6, doubt 2.

13. **English, caption, sentence 4.**
    - Old: "Racine’s preface says she would rather die than declare her
      passion."
    - New: "Racine writes in his preface that she would rather die than
      declare her passion."
    - Fault: the same tic as change 6. This tab stands next to "Break",
      whose caption closes on what "Racine’s preface says", so a reader
      who went from one tab to the next met the frame twice running.
      103 words.

### 2.4 Under the passages ("More from Auden")

14. **The entry from “The Globe” (the third), its last two sentences.**
    - Old: two sentences, of nine words and of seven, the first ending
      "… from a noble nature." and the second beginning "It is a
      splendid robe".
    - New: one sentence, joined by a colon: "… from a noble nature: it
      is a splendid robe over nakedness."
    - Fault: a staccato close. The entry ended on three short sentences
      one after another, the last of them the image, set alone for
      effect. The contrast itself is Auden's (p. 176) and stays. No
      word changed.

15. **The entry from “Un Homme d’Esprit”, pp. 358–59 (the fifth), two
    words.**
    - Old: "anapaests", twice. New: "anapests", twice.
    - Fault: as change 11.

16. **`sources`, the fourth line.**
    - Old: "… (1973), pp. 358–59 and 364: his introduction to a volume
      of Paul Valéry."
    - New: "… (1973), pp. 358–59: his introduction to a volume of Paul
      Valéry."
    - Why: p. 364 was used only by the entry taken out of the list
      (section 4), as CRITIC.md directs. The footnote of p. 359 is
      inside the pages that remain.

17. **The last entry (“Two reports at second hand”), sentences 2 and
    3.**
    - Old: "In Alan Ansen’s record of his talk in 1947, Auden rates
      Racine below his reputation. Charles Miller, who took the class
      of 1941 and shared Auden’s house that term, remembered forty
      years later that he disliked Racine."
    - New: "In 1947, in talk that Alan Ansen wrote down, Auden rates
      Racine below his reputation. Charles Miller, who took the class
      of 1941 and shared Auden’s house that term, remembered forty
      years later that Auden disliked Racine."
    - Fault: pronouns that point the wrong way. "He disliked Racine"
      read as Miller's own dislike, since Miller is the subject of the
      sentence. "His talk" came before the man it meant and could be
      Ansen's, with a second "his", Racine's, eight words on. Nothing
      is claimed that was not: a record of Auden's talk in 1947, and a
      student's memory that Auden disliked Racine (the fourth warning
      at the foot says the same). Made at 12:23 UTC.

Lengths after the changes: captions of 110, 111 and 82 words; 115, 109
and 110; 110, 110, 115 and 103. Each entry of the list is 110 words or
under. The checker's limit for a caption is 120.

## 3. The marks in the small notes, and the titles

I read all 28 numbered remarks and notes on words, and the 8 glosses,
for a word named as a word, a foreign word or a title left bare. None
is. The examiner had marked the six there are, in five notes: the
letter *e* three times, the French word for here, and Boswell's two
words (`exam.md`, change 17). The pictures show each standing upright
in its italic note. No gloss names a foreign word. My own rewrites of
two remarks and one note (changes 8, 9, 10) name no word of the
passage, so they carry no mark.

What I left bare on purpose, so that the lead can overrule it:

- A meaning given in English is not marked anywhere in the piece: "His
  first word means I understand", "to go cold and to burn", "I think I
  see", "whatever I do", the "here" after the marked French word. That
  is the piece's one manner in remarks and captions alike (a comma or a
  colon, then the meaning), and CRITIC.md asks for marks on words named
  as words, not on meanings. In change 10 I gave the sense in the same
  manner and did not set it upright.
- "The word for husband", "the word for heart", "the word for
  unavoidable": the English word stands for a meaning there too.

Titles: every title of a book or a play in `where`, `view.says`, the
list and the `source` lines already stands between asterisks, and the
essays and Byron's short poem are in curly quotation marks (the
examiner's change 17). "Phèdre" bare in `about`, in the third entry of
the list and in the notes at the foot is the woman. Nothing to add, and
nothing inside a `quote` was touched.

## 4. Taken out of the list of what Auden said

One entry of eight. Seven stand.

- **What.** The entry that stood seventh, from “Un Homme d’Esprit,” in
  *Forewords and Afterwords* (1973), p. 364: Auden, as an English poet,
  finds French poetry short of formal variety, and says that a form
  such as the twelve-syllable line or the English heroic couplet tends
  to be used up by two or three masters, so that those who come after
  must find other forms. It had no quotation.
- **Why.** I read the page in the scan. The paragraph is about what was
  left for French poets after the masters of the form, in an
  introduction to Valéry. It names neither Racine nor the play, and it
  says nothing about how a line of the three passages is made or heard,
  which is what every other entry does. It was also the third entry in
  a row
  from the one introduction ("Introducing Valéry …", "In a footnote on
  the same page …", "Later in the same essay …"), and with it the list
  read as the yield of that essay, not as his view of this play. The
  examiner kept it as bearing on the form that every passage shows
  (`exam.md`, section 5). That is a fair reading of the rule, and the
  lead may prefer it. Mine is that the page does not miss the entry.
- **Where it went.** Whole (`says`, no quotation, `source`, `checked`)
  to the end of `notes.md`, under "Taken out of the list of what Auden
  said". That section is the only thing I wrote in `notes.md`. A script
  moved it, so that its words did not pass through me, and checked that
  what was left of the list is the other seven entries unchanged.
- **What leaned on it.** Nothing. No caption, `grounds` or `stands`
  names p. 364 (searched in the file); `view` cites pp. 358–59 only.
  The entry after it opens "Two reports at second hand" and needed no
  name. `sources` lost the one page (change 16).
- **To put it back:** set the entry between the sixth and the seventh
  of the list as it now stands, and write "pp. 358–59 and 364" again in
  the fourth line of `sources`.

Of the seven that stand, each is used by a tab, by the view, or by a
warning at the foot: “Writing,” pp. 24–25 (the English tab of the
first passage, Rhyme, the view); pp. 25–26 (Words; it begins at the
sentence after the one the view quotes); “The Globe” (Halves, the
English tab of the third passage, the view); “Two Bestiaries” (Count,
Ear); the introduction to Valéry, pp. 358–59 (Ear, the view); its
footnote (Halves); the two reports at
second hand (the fourth warning, and the only word from the class of
1941). The fourth and fifth both tell of Byron's line. They are two
essays in two books, each used by the Ear tab, and the second adds
the confession and the Comédie Française. Both stay.

`exam.md` (section 5, "The list") still says eight entries. It is the
examiner's record and I did not change it.

## 5. What recurs across the piece, with counts

Counted in the ten captions unless said otherwise.

- **A caption that closes on an authority.** Before: 9 of 10 (Auden 6,
  Racine's preface 3; only Rhyme closed on the passage). Now: 8 of 10
  (Auden 5, the preface 3), with Count closing on its line (change 1).
  This is the method of the piece and mostly right: the reason a
  caption ends on is Auden's or the preface's, which is what rule three
  asks. I moved the one closer that was not the reason of its tab.
- **"Auden wrote" and its kin.** Auden is named 8 times in 7 captions;
  the verb is "wrote" 7 times, once in each of those 7 (with "found",
  "noted", "set", "quotes", "knew" and "called" beside it). One to a
  caption is not a tic, and I left them.
- **"Racine’s preface says".** Before: 4 times in 4 captions, 3 of them
  closers. Now 2 (the Figure tab of the first passage, Break), with 2
  varied (changes 6 and 13).
- **"A history of French verse says / calls".** 3, one to a passage
  (Count, Ear, Rhyme). Left.
- **"Rhetoric calls this" and "A handbook of rhetoric calls this".** 3,
  one in each tab that shows a figure. Left: it is how the term is
  given after the plain words.
- **Sentences laid to a source.** 27 of the 64 sentences in the ten
  captions, by my count: Auden 11, the preface 5, the history of verse
  3, rhetoric 3, Littré 2, the play itself elsewhere 3. So two
  sentences in five are "X says". It reads as a careful annotated page,
  a little dry, and not as a machine: the frames differ and each
  carries a fact. I would not thin it further.
- **What Auden said, said again.** The list under the passages repeats
  at more length nearly all that the view and the captions have already
  given of him. On the page as a whole: the conjuring trick 3 times
  (view, the English tab of the third passage, the list); the
  pathological case 3 (view, Halves, the list); the robe 2; Byron's
  line 3 (Ear, and two entries of the list); his hearing called wrong
  3 (view, Ear, the list); English verse near speech and French verse
  apart from it 3 (view, the English tab of the first passage, the
  list); the two goddesses 2; the pause held or shifted 2; every line
  with twelve syllables 2; sound counting for more in French verse 2.
  That is what the list is for, and each entry but the footnote adds
  something. I say it so that the lead knows how the foot of the page
  reads after the passages: familiar.
- **A numbered remark that says again what its caption says.** Before:
  6 of the 22 remarks (Count 2, 3 and 5; Halves 2; the first remark of
  the first English tab, word for word; the remark on the last clause
  in the second English tab). Now 4: Halves 2 gives only what it
  adds (change 8), and the caption of the first English tab no longer
  holds its remark's sentence (change 3). The three of Count and the
  one of the third passage's English tab ("In French the passion is the
  subject …") stay: each puts the caption's rule on the word it is
  about, which is what a numbered remark is for.
- **A remark that opens on a label with no verb.** 5 of 22 now ("The
  cut.", "Three verbs.", "A group of two.", "Three syllables and a
  stop.", "The broken clause."), and the last entry of the list ("Two
  reports at second hand."). They name the thing the number stands
  under, as a label on a drawing does. The sixth, "Unavoidable.", was
  the only one that could be read as a comment (change 9).
- **Meanings given bare after a comma or colon.** Throughout, in
  captions and remarks. Consistent, and clear in all places but the
  one mended (change 4).
- **No dash inside a sentence, no question, no "we", no stock word.**
  None found; the checker agrees (no warnings before or after).

## 6. Sentences I doubt and did not change

I set every paraphrase of Auden beside the scan (pp. 24 to 26, 176 and
297 of *The Dyer's Hand*; pp. 358, 359 and 364 of *Forewords and
Afterwords*). None says more than he did, and none runs in his words.
No sentence on the page reads as made up: each reason is laid to a
source, and where there is none the caption shows the thing and stops.
What follows is for the lead to decide.

1. **The view at the head (`view.says`), two phrases.** "He also owned
   that his English ear heard the French line wrongly": "owned" for
   "admitted" is a quaint word in the first paragraph every reader
   reads. "Who had not heard it greatly performed" is stiff beside
   Auden's own plain phrase about a great performance. I would write
   "He also admitted that …" and "who had not heard a great performance
   of it". Not changed: CRITIC.md says never to touch `view`, and I
   read that as covering its wording.

2. **Break, the last two sentences** (the preface on her confusion).
   The examiner's doubt (`exam.md`, section 14) stands after my change
   12, which only untangles the sentence. Read as a reader reads it:
   the caption has just shown the clause that breaks off, and then says
   the preface has her speak with confusion when "forced to disclose
   her passion". Anyone will take that as said of these lines. The
   preface names no scene, and in this one nobody forces her. If the
   lead wants no doubt, both sentences can go. The caption then ends on
   her next words, the reason left is the one in the key (a speaker
   overcome by emotion), and the `why`, two grounds and a clause of
   `stands` must be trimmed to match. That is a decision about a
   claim, so it is not mine.

3. **English (third passage), the last sentence** (Auden's conjuring
   trick). It is the third time the page says it (the view, here, the
   list), and the caption does not tie it to what the tab shows, which
   is who acts in each version. It reads as the view put on at the end.
   I left it because it is the view of the piece and the `why` leans on
   it. Without it the caption would close on Hippolyte's taking her
   words for love of his father, which is the stronger end.

4. **Halves, the last sentence** ("He wrote too that …"). The same
   matter as doubt 3 (the journalist, the robe), for the second time of
   three. The `why` joins it to the tab: each thing that happened to
   her is fitted to a measured part of a line. The caption does not say
   so, rightly, since no one is cited for it, and so the sentence comes
   in as an afterthought. Left.

5. **Ear: Byron's line is named and never given.** The caption says
   "Byron’s line on the Assyrian" and the poem is named only in the
   folded notes and the sources. A reader who does not have the line by
   heart cannot hear what Auden heard, and that is the whole matter of
   the tab. The poem is of 1815, long out of copyright, and the caption
   has ten words to spare. To name the poem there, or give the line's
   first words, would add matter, so it is the poet's or the lead's.

6. **Rhyme, the last sentence.** It says which words the third and
   fourth pairs rhyme, with their meanings, and stops. No reason
   follows, and none should: nobody is cited for what the pairing of
   stepson and husband means. I name it only because it is the one
   place where the page sets two loaded words side by side and leaves
   the reader to conclude. It does not pronounce.

7. **Four remarks that say again what their caption says** (section 5).
   Left as labels at the mark. The lead may think Count 3 one too many
   beside the caption's last sentence, which now ends the caption.

8. **Changes of mine the lead may want back.** Change 1 moves a
   sentence. Changes 11 and 15 put the house spelling in the site's own
   sentences, so the fifth entry of the list now spells the foot one
   way and Auden's quotation, a few lines above it, the other. Change 7
   makes two paraphrases agree by choosing one adjective. The entry
   taken out (section 4) rests on my reading of the rule against the
   examiner's.

## 7. What on the page itself got in the way of reading

In the words and their order, nothing beyond what sections 2 and 5
say. Where a line turns, where a gloss, a key or a caption stands, how
tall a passage is on a phone and what the samples in a key look like
are in `art.md`, and I do not repeat them.

Two things a reader of the pictures should know:

- At 1280 the six remarks of the third passage's English tab now stand
  in one column beside the caption. In the artist's pictures they
  stood under it in three columns. The page's code did not change
  between the two sets (last change 11:05:49 UTC). The caption is
  three words and one line longer since change 13, and the page pours
  the remarks into columns under a caption only when they stand much
  taller than it (`plate.js`, the line that sets `keys-wide`).
- The page is one entry shorter, so the whole-page pictures are one
  fewer at each width.

## 8. The tools, the pictures, and what was refused

- **The build and the prose.** `node build/pieces.mjs phedre` and `node
  build/tools/prose.mjs phedre` were run at the start and after the
  changes, as CRITIC.md sets out. They write the built copy in
  `site/data/pieces/` and `review/remake/prose/phedre.md`. I wrote
  nothing else outside this folder.
- **The picture tool: run twice, the most allowed.** First at 12:13
  UTC, after changes 1 to 16, to read the mended page; then at 12:25
  UTC, after the last two edits (2a and 17, both made after the first
  run, the later at 12:23:43).
  Both times it ended "nothing reported; now look at the pictures".
  After the second run nothing in the reading changed, so the
  pictures in `shots/` at 1280 and 390, and the whole page, show the
  wording as it now stands. Looked at after the changes: at 1280 the
  Count, Figure and English tabs of the first passage, all three tabs
  of the second, Break and English of the third, and the page from the
  list down; at 390 the Figure tab of the second passage.
- **The artist's pictures.** My runs write over the standard set (ten
  tabs at 1280 and 390, and the whole page), which `art.md` cites. I
  copied those 34 pictures to `shots/before-critic/` first, with their
  times, so that what the artist reported can still be seen. Two slices
  of the old, longer page that my runs no longer make
  (`phedre-page-1280-5.png`, `phedre-page-390-7.png`) were moved there
  too, so that no stale slice stands among the new ones. The artist's
  pictures at 320, 360, 375, 600, 980 and 1024, the enlarged parts and
  the trials are untouched. They show the wording as it was before my
  changes.
- **The checker**, `node build/tools/check-reading.mjs phedre --print`,
  run after every group of changes and last at 12:27 UTC, ends:

      no problems
      no warnings
      the printed notes are fit to print

  It had no warnings before the work either, so there was no warning
  to read.
- **Refused.** Nothing. The permission system refused no command.
- **Not done.** I checked no fact, changed no mark, and did not touch
  `exam.md`, `art.md`, the `open` list or any file of the kit.

## In short

- **Changed:** 18 small edits (1 to 17 and 2a) that touch 23 sentences
  in 16 places of `reading.json`: 1 sentence cut, 1 moved, 4 respelled,
  two pairs made one sentence each (9 and 14), 1 broken in two, the
  other 12 reworded. One entry of
  the list taken out and kept whole at the end of `notes.md`; one page
  number taken out of `sources` with it. No claim added or made
  stronger; no quotation, ground, mark, `turn`, `join`, heading or tab
  label touched.
- **The faults that came up most:** a remark or caption saying again
  what stood beside it (changes 3 and 8); the same frame once too often
  (6, 13, and the closer moved in 1); a pronoun or a "which" with the
  wrong thing to point at (1, 12, 17); a quaint or unexplained word (2,
  5, 9, 10); a gloss that read as a slip (4).
- **The artist's point** about the first note of the Words tab is
  mended (change 10): the note names its sense.
- **Marks:** none was left bare; the six words the examiner marked are
  the six there are.
- **For the lead to decide** (section 6): two phrases of the view that
  I may not touch ("owned", "greatly performed"); whether the preface's
  sentence on her confusion may stand under the Break tab; whether the
  third passage's English tab should close on Auden's conjuring trick a
  third time; whether the Ear tab should give Byron's line or name his
  poem; and whether my change 1, the spelling of changes 11 and 15,
  and the entry taken out should stand.
- **The checker ends:** no problems; no warnings; the printed notes are
  fit to print.
