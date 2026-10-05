# Notes on the reading of Baudelaire, Intimate Journals

Piece `baudelaire`. The text printed is Shipley's translation of 1919 (`baudelaire/rockets`, `baudelaire/my-heart-laid-bare`). Places are named below by block and word number, as the checker's proof prints them. Everything here was read on 2026-10-03.

## The checker

It ends with "no problems", "no warnings" and "the printed notes are fit to print" (the strict run with `--print` exits 0), so there is no warning left to answer. The last run was made at 04:51 UTC, after the checker changed at 04:47. BRIEF.md, EXAMINER.md and POET.md also changed late (04:31, 04:33, 04:50 and 04:52 UTC: a fourth role file is named, examiners get a rule about one examiner to a piece, a tool and a paragraph are added for scanning Latin verse, and the rule against typing out the text of a work is said to be enforced); I read them again and found nothing that changes what is handed in for this piece. Three things were done to get the checker clean.

- The checker reads the journal's word for a looking glass as one of the forbidden verbs. The captions and the Auden items say "looking glass" where Shipley has the other word. The grounds, which are not printed, keep Shipley's word.
- It flagged one stock word in a `why`; the sentence was rewritten.
- The rules for the printed notes arrived while I was finishing (POET.md and EXAMINER.md, 04:13 UTC). I then wrote `stands` for each of the ten captions and five `caveats`, rewrote `sources` as a reader would look them up, and took the words plate and lens out of everything that is printed. `open` and each ground's `source` keep the working detail.

## The view

Auden's introduction to the Intimate Journals (Isherwood's translation, Marcel Rodd, 1947) reads the journals through the Dandy. The pages used:

- pp. 18 to 19: Baudelaire's pair of opposites, the Dandy and the mass.
- p. 19: a list of the Dandy's traits drawn from the journals, then a list of his opposites.
- p. 20: what the Dandy wants; Lucifer.
- p. 25: a line of thought, there from the start, that goes against the Dandy; love as the giving of oneself; the crisis of January 23, 1862.
- pp. 25 to 27: the last pages of My Heart Laid Bare; the maxim and the budget set side by side; the change of heart; Rimbaud; the last lines.

The three passages follow that line: a portrait of the dandy, the dated entry, and the two notes Auden himself pairs.

Auden also quotes the dated entry in The Enchafèd Flood (p. 42) and in Forewords and Afterwords (pp. 136 and 231 to 232), and quotes the journal's sentences on the dandy and on woman at The Enchafèd Flood, p. 84.

Found late, and it matters. Auden's list on p. 19 has three lines that bear on the first passage. The Dandy lives and sleeps before a looking glass. He does nothing useful. He is proud of being less base than the people passing: that is the sentence of the first passage, in the words of Isherwood's translation of it. The list of opposites that follows has the son who runs from home at twelve, which is the prophecy of the same entry of Rockets (block 125). So Auden built part of his portrait of the Dandy out of the entry the first passage comes from. The first two tabs of that passage now stand on p. 19 as well as p. 20.

## Passage one: Rockets, XXVI, block 126, words 27 to 134, with the French as its pair

Why this passage. It is the place in the text where the dandy is shown and not only defined: a man with a cigar, in one long sentence, with the word dandyism in it (w106). Auden takes a trait of his Dandy from this sentence (p. 19). It ends the prophecy that he quotes in The Enchafèd Flood, pp. 25 to 26. The paragraph begins, just before the part shown (w13 to w26), with the writer's statement about a doctor's charity, which bears on what Auden says about love on p. 25. The passage is 108 words of Shipley; the French beside it is 109 words.

The heading. It read "the last sentences" until the last pass. That was wrong: the entry has one more short paragraph after this one (block 127, two sentences), where the writer's "I" comes back. The heading now names the man, and `about` says the passage comes near the close of the entry.

Why the French is shown. The figure and the build of the sentence are Baudelaire's, and the translator changes the tense. The French was cut with `node build/tools/original.mjs cut` from Project Gutenberg no. 13792 (lines 706 to 717 of `.cache/originals/baudelaire_journaux_intimes_fr.txt`) into `site/data/texts/o-baudelaire/fusees-xv.json`. D_texts.md lists that text as out of copyright in the United States.

The tabs.

- Likeness (a simile, drawn as a chain). Marks: w36 to 37, w38 to 41, w71 to 72, w116 to 117, w129. I read every word from w38 to w134: no "I" stands there. The word at w129 is inside the man's speech and is his. The writer's "I" comes back at the head of the next paragraph (block 127), which the caption does not deny: it says no "I" comes back before the paragraph ends. The caption says the pride is told in the third person and stops there. It does not say that the man is the writer: the text makes him the writer's likeness and no more.
- Delay (the build of the sentence). Forty-nine words stand before the main clause when the two pairs of words joined by a dash (w85 and w88) are counted as two each. The checker's numbering makes them 47 tokens, w69 to w115. Six phrases: I count by the head words (w81, w85, w91, w96, w100, w107). Another count is possible: w91 to w99 can be taken as one phrase joined by "and", which gives five. The caption names the six head words, so the reader can see what is counted. The French of the pair has the same six heads in the same order.
- Words. Glosses on w75, w81, w100, w103, w106, w132.
- French (the two versions compared). Five ties. Shipley puts three verbs in the past. The French has a perfect made with a present auxiliary (pair words 72 to 73) and two presents (pair words 115 and 117 to 118), against Shipley's w73, w115 and w117. An earlier draft said "two verbs"; I corrected it when I set the two rows side by side again.

Other ways to read it.

- The form at pair words 116 to 118 could be a simple past as well as a present. I read a present because the verb beside it (pair word 115) is a present, because the clause of time has a perfect, and because Isherwood's translation also keeps the present and the reflexive (seen again in a snippet today). This is in `caveats` and in `open`.
- "These consciences" (w131 to 132) may point at the passers-by of w113 to 115 or at the people of the whole prophecy. The caption keeps to the words of the text and does not choose.
- The pairing of drunkenness with cool blood (w100 to 103) is called an oxymoron in the caption. The Online Etymology Dictionary defines the figure as joining terms that appear to contradict each other, and the caption now uses those words. A reader could call it a paradox; it is not a figure tab of its own for that reason.

## Passage two: My Heart Laid Bare, LXXII, blocks 238 and 239

Why this passage. It is the entry Auden calls the crisis, and the one he quotes most often. It is short (75 words), it has the only date of a day of writing in Shipley's text, and it has a figure that the last lines of Auden's introduction take up.

The tabs.

- Time. Spans on the time words and on the verbs. The claim that no other entry gives its day rests on a search of both parts for years, month names, weekday names and words such as to-day, run again today over every kind of block. The other hits: the year 1848 three times (blocks 28, 37, 38), the 15th of May and June in the same passage (blocks 29, 30), and to-day three more times with no date (Rockets block 125; My Heart Laid Bare blocks 61 and 74). A second search for any digit adds only sums of money and weights (blocks 255, 266, 282 and 283). The claim is true of Shipley's text only: the French of 1908 has a list of errands headed Tuesday, May 13, 1856, in its Fusées (p. 83), and in Mon cœur mis à nu a quoted sentence of Girardin's dated November 7, 1863. Shipley has neither. Both are in `caveats` and `open`.
- Wing (a metaphor, drawn as a map). The thing is at two removes: w29 to 30, then w31 to 33, then w34 to 35. In Shipley the warning and the gust are two sentences. In the French of 1908 (p. 130) they are two clauses of one sentence with a comma between them, which is why the caption says he calls the gust a warning.
- Words. Glosses on 238.0 w11 and on 239.0 w2, w4, w13, w20, w23, w35.

What I left out. Block 238 is a list of gulfs, and the sonnet Le Gouffre shares several of its nouns (action, desire, dream, sleep, number, and vertigo from block 239). Line 4 of the sonnet has the same verb phrase as the entry, with the wind of Fear and no wing. I checked all fourteen lines in the 1868 text and did not make a tab of the shared nouns: the caption uses only line 4. The French leaf has one more line, between blocks 237 and 238, that Shipley's text lacks; it is not on the passage. I also dropped a sentence about the last paragraph of Rockets (block 127), where the writer says he wants to date a feeling. Shipley's word there is one of two that the manuscript gives (the editors of 1908 print the other and give Shipley's as a variant written below it; the Project Gutenberg French prints both), so nothing should lean on it.

## Passage three: My Heart Laid Bare, LXXIX, blocks 266 to 269, beside Rockets, XIII, block 61

Why this passage and why a pair. Auden sets these two notes side by side (pp. 25 to 26; read again in snippets today): the man who wrote the maxim about the creditor now writes the budget. The `pair` field holds the maxim so that both stand on the page, as they do in his paragraph. The passage is 74 words and the maxim 17. After the first line of the budget Auden goes on to a later line of the same leaf (block 273) and then to the vow of LXXX (block 286).

The tabs.

- Maxim (the two notes compared). Three ties: the address, the order given, the promise.
- Verbs (the build of the sentences). No verb in w2 to w11 of block 266, infinitives at w12 to 13 and w25 to 26, a future at w32 to 34, the first "I" at 267.0 w0, a present at 268.0 w3 to 6. No "I" stands in block 266: its first-person words are w4 and w7, which are not subjects, and the "We" of w32, which the caption gives as the first finished sentence. The caption first called the verb at 267.0 w1 a verb of doubt. Littré's first sense of the French verb (supposer) is to lay a thing down as granted in order to draw a consequence, and his second is to conjecture, so the caption now says a verb of supposing.
- Words. Three words that return from the first passage, and glosses where Shipley and the French differ.

Leaves cited and not shown. LXXIV (block 243, 39 words), which names pleasure and work as the two means of forgetting the nightmare of time, was a candidate. It is used as a `text` ground in the Words tab, with block 245, a line of the same leaf about forgetting time. The caption places it "five leaves earlier", which is its place in the printed book in Shipley and in the French of 1908 alike. The `why` said he "has named" the two, which read as an order of writing; since the order of the leaves is the collector's, it now says he "names" them. LXXVIII (blocks 257 to 264) has the lines on charity and on his own egoism. LXXX, the vow, is too long for a passage: block 286 alone is 141 words.

No shape tab. The order of the leaves is the collector's, not Baudelaire's, so a diagram of the build of the book would show Poulet-Malassis's order.

## Scansion

None. The text is prose in translation, and no tab marks a beat.

## Where each fact was read

Dictionary entries, Littré at littre.org, one page for each word: avertissement, bercer, charité, conscience, cultiver, dandy, dandysme, destinée, enivrer, extra-terrestre, gouffre, hygiène, hystérie, imbécillité, infinitif, sang-froid, subir, vertige, and supposer for the correction above. Each gloss uses the words of the entry, and I set each one beside its entry again in the last pass. For gouffre I had written "abyss" from memory and changed it to the entry's first sense, a deep cavity. For conscience I had written "moral selves", which no entry says, and changed it to the two senses Littré gives. Littré's site dates the dictionary to the late 1800s, so it is later than Baudelaire's notes.

Online Etymology Dictionary (etymonline.com), one page for each word: dandy (borrowed into French about 1830), hysteria (from the Greek for womb; at first defined as peculiar to women), imbecility, infinitive, metaphor, oxymoron, sang-froid (1712), simile, vertigo. Also read and not used: charity, agape, hygiene.

How a held-back sentence works. Edwin A. Abbott, How to Write Clearly (Boston, 1883), Project Gutenberg no. 22600. Rule 33: a participle or adjective that qualifies the subject, set before the subject, gains suspense. Rule 30: in suspense the reader feels the sentence incomplete until the full stop. Rules 15 and 16: emphatic words stand, for the most part, at the beginning or the end of a sentence, and the beginning is mostly less emphatic than the end. Under rule 33 Abbott adds that heavy use of the device is a French habit, and his example has four such words before the subject; rule 31 says suspense must not be excessive. William Strunk, The Elements of Style (copyright 1918 and 1919), Project Gutenberg no. 37134, rule 18: the emphatic words of a sentence belong at the end, and the periodic sentence is effective by the prominence it gives the main statement. Baum's handbook of versification on this machine names periodic sentences once (chapter II, on prose) and leaves the subject to rhetoric, which is why two handbooks of composition are cited.

The French. The first passage and the maxim: Project Gutenberg no. 13792 (Fusées XV, lines 706 to 717 of the file; Fusées IX, lines 319 to 320). The Hygiene leaves and the editors' notes: Œuvres posthumes (Paris: Mercure de France, 1908), as transcribed at French Wikisource on the pages "Fusées" (pp. 75 to 98 of the book) and "Mon cœur mis à nu" (pp. 99 to 135), with the printed page numbers. The maxim is at the head of p. 84. The dandy passage runs over from p. 97 to p. 98, with both dashes and with quotation marks. The dated entry is on p. 130. LXXIV begins on p. 130 and its later lines are on p. 131. The leaf that begins, after its heading, with the words for "too late perhaps" is on p. 132. The budget is on p. 133. The editors' note says that Poulet-Malassis made up the journals from loose, unnumbered sheets found at Baudelaire's death and pasted them on larger sheets in an order they call necessarily arbitrary, and it gives Crépet's dating of the two journals. Their note on Jeanne Duval and their note on the variant at the end of Fusées are on the same two web pages.

The sonnet: Les Fleurs du mal (Paris: Michel Lévy, 1868), CII, p. 237, at French Wikisource. All fourteen lines read. No wing in it.

Life and dates. Wikipedia, "Charles Baudelaire", for the stroke of 1866, the year of aphasia, the death on August 31, 1867, and the posthumous edition of 1887. Shipley's own note (`.cache/texts/pg47032_baudelaire.txt`, lines 6930 to 6980) says the notes were found after Baudelaire's death and that paper was his confidant, puts Rockets about ten years before his death and My Heart Laid Bare in the days of his last illness, and says the numbers are the page divisions of the manuscript. The editors of 1908 give the same dating from Crépet.

Counts in the text: made with the tools and a search of the two parts.

## Where each statement of Auden's was read

The introduction of 1947. The research notes (C_auden_on_works.md, section 16 and appendix H5 and H17l) and the search-inside snippets of the lending scan at archive.org (item intimatejournals0000char_k2x1), chained phrase by phrase. I read the sentence before and after each one used. The page numbers are the running heads as the scan's text prints them; a head with the word Introduction after its number stands at the top of its page.

- pp. 18 to 19, the pair of opposites: the head of p. 19 falls inside the sentence, after the words for the first of the two.
- p. 19, the two lists. They follow the sentence about the opposites, and the head of p. 20 comes after them. The lines on the looking glass, on doing nothing useful, on the pride and on the son who runs from home were read again in snippets in the last pass.
- p. 20, the Dandy as no man of action, his one ambition, Lucifer. The head of p. 20 falls inside the sentence that likens the Dandy to the heroes of poetry and of philosophy, just before these sentences.
- p. 25, the line of thought that goes against the Dandy, love as the Dandy holds it and as the journals come to see it, and "the crisis". The sentence about the crisis has a hedge (such thoughts "seem" to have come only now and then), and the view and the Auden item keep it. The head of this page is garbled in the scan's text. I take it as 25 because I chained the text from that head to the head of p. 26 without a gap and found no other head between: about 245 words, one page of this book.
- pp. 25 to 26, the sentence quoted in `view`: it runs across the page break. Exact, 23 words.
- p. 26, the maxim and the budget set side by side; the change of heart; Rimbaud.
- p. 27, the humility he finds true, and as weak as a woman (his list has two more names); the last lines. The second quotation of the piece is here, 17 words; the bird is in the sentence before the last. The head of p. 27 is damaged in the scan's text.

The Enchafèd Flood, in the scan `ef.txt` (the Vintage Books edition of 1967): pp. 25 to 26 (lines 1157 to 1209), p. 42 (lines 1821 to 1828), p. 84 (lines 3579 to 3591). In this scan the page number stands at the foot of the page. The contents page lists chapter two at p. 40, and the number 40 follows the first page of text of that chapter. The same book quotes the journals in six more places that I found by searching the scan for his name (pp. 53 to 54, 55, 82, 103 to 104, 106 and 108). I read each; none is about the passages here.

Forewords and Afterwords, in the scan `fa.txt` (Faber and Faber, reprinted 1974): p. 136 (lines 6567 to 6570), p. 220 (lines 10521 to 10524), pp. 231 to 232 (lines 11090 to 11165). Here too the number stands at the foot. The contents page lists "Edgar Allan Poe" at p. 209 and "Tennyson" at p. 221; the number 208 stands just above the Poe title and 220 just above the Tennyson title, and the number 136 follows the lines cited from that page. The essay on p. 136 is "Italian Journey" (contents: 131 to 143).

Table Talk (Ansen) and The Viking Book of Aphorisms: research notes, C_auden_on_works.md, appendix H10 and section 16, and B_pedagogy.md, section 2.8; and search snippets of both scans at archive.org. The foreword's sentence covers two cases, an aphorism true of everything or true of every member of the class it names, and the Auden item gives both. Two of the anthology's sentences under Baudelaire's name are in My Heart Laid Bare (blocks 162 and 211).

## Corrections made while checking

- A passage given to Auden that is Isherwood's. The translator's preface in the same book of 1947 has a passage about Baudelaire's resolves to work and his last, paralyzed year. It quotes other lines of the same leaf that Auden quotes from (the hours of work, the destiny staked on work), and an earlier draft gave it to Auden in two captions. I chained the snippets again, found the running heads of the preface, its signature and date just before Auden's first sentence, and took every trace of the passage out. An examiner who searches the scan for the phrase about being half paralyzed will land in the preface, not in the introduction.
- Auden in my own words. Several Auden items and three captions followed his sentences too closely. I rewrote them so that the piece has two quotations and no more (23 and 17 words), and paraphrase everywhere else.
- Auden made to say more than he said. "As proof that" the hero can perish became "where he says"; he gives the entry as an instance. "Ends his introduction with a bird" became "the last lines have a bird". The writers who had little good to say of democracy are the Romantic writers he is discussing, Baudelaire among them, and the item says so.
- A handbook made to say more than it said. The Delay caption said that describing words set before their subject "throw the weight" on the end of a sentence and gave that to the handbook that names suspense. No rule says so in those words. The caption now gives what the rules do say: such words keep a sentence incomplete, and the end is the place of emphasis. The ground lists each rule beside what it says.
- Plain-words glosses of the two figures. They defined simile and metaphor in the usual schoolroom way ("with as or like", "with no like or as"), which the dictionary entry cited does not say. They now follow the entries: a comparison stated outright with both things named; a feature of one thing given to another.
- A contradiction "in terms" became two terms that "seem to contradict", which is how the entry for oxymoron puts it.
- The format. POET.md asks for one sentence in a word note; seven notes had two and were recast as one. The first caption named three French words without glossing them; they are now glossed. It also said the French stands "underneath", which is how the page sets a pair of one row today but is the artist's to decide; the captions and the printed notes now say "Baudelaire's French" and name no position.
- Runs of the text. A last search of both files for any run of seven or more words shared with the hosted text, the French e-text or the two scans found five: four in grounds and one in the third Words caption, where two short phrases and the words between them made nine words of Shipley in a row. All five were reworded; the longest shared run is now six words. One six-word run of Auden's own prose in an Auden item was reworded too.
- General statements. "Changes the tense of two verbs" was wrong (three). "The note ends" with the sentence at w32 to w36 was wrong (its first paragraph ends there). The maxim does not call its writer saved; it says "you". The heading "the last sentences" was wrong, as above. The line Shipley lacks after the broken question speaks of wealth for Jeanne and his mother; a note had "money". Each "first", "only", "no other" and "twice" in the captions was counted again in the proof.

## The printed notes

`stands`: one for each caption, 36 to 69 words, with seven links into the copy printed here for the other places in the journals that the captions lean on (My Heart Laid Bare IV twice, XVIII, LXXIII, LXXIV; Rockets XXVI twice). I checked that each link lands on the block meant.

`caveats`: five. Auden's introduction read in snippets, with the garbled head of p. 25; the order of the leaves; Shipley's text against the Isherwood translation that Auden set and quotes; the tense of the French verb; the claim about the one dated day.

`sources`: thirteen entries, the text printed here first. The introduction, the anthology of aphorisms and Table Talk are marked "not seen in full".

## Looked for and not found

- A clear running head for p. 25 of the introduction.
- The page of the remark on aphorists in Ansen's Table Talk.
- The first printing of Le Gouffre. One blog post (lesvraisvoyageurs.com, October 30, 2024) gives L'Artiste, March 1, 1862, citing the Pléiade edition of 2024, vol. II, p. 373. Two web searches did not confirm it. French Wikisource's page for the poem lists only the printings of 1866 and 1868, and its page for the review lists no issue of that day. The caption gives no date for the sonnet.
- The Oxford English Dictionary: not consulted. English dates are from the Online Etymology Dictionary.
- A statement by Auden on the simile, the long sentence or the tense of the first passage. He says nothing of them. The tabs there meet his view through his list of the Dandy's traits (p. 19), through what he says the Dandy wants (p. 20), and through the journal's own sentences about the dandy (My Heart Laid Bare, IV and XVIII).
- A handbook that says in so many words that suspense moves the weight of a sentence to its end. Abbott and Strunk say the two things separately, as set out above.
- The middle pages of the introduction (21 to 24) were sampled, not read through. They argue about two kinds of individual and about what Auden calls the Dandy's mistake. Nothing in the piece rests on them.

## Copyright

Shipley (1919) and the French are out of copyright in the United States; phrases quoted from them in captions are six words or fewer. Auden is paraphrased throughout, with two quotations (23 and 17 words). Isherwood's preface is not quoted.

## Added by the examiner, 2026-10-03

What follows was put here by the examiner; the notes above are the poet's and are left as they were. The full record of the examination is in exam.md.

One entry was moved out of the list "More from Auden"; it is at the end of this file, under "Taken out of the list of what Auden said".

Three of the notes above no longer hold:

- "A handbook that says in so many words that suspense moves the weight of a sentence to its end" was looked for and not found. Abbott says it, in the remark that closes rule 30 a. The Delay caption now stands on that.
- "The middle pages of the introduction (21 to 24) ... Nothing in the piece rests on them." The examiner chained pages 20 to 25. The sentence on the Dandy's mistake runs from the foot of p. 24 to the head of p. 25, and the Likeness caption now stands on it.
- "A clear running head for p. 25 of the introduction": still not clear, but the heads from 18 to 27 were all seen in order, so the page is counted.

Two smaller things:

- "Shipley's own note ... puts ... My Heart Laid Bare in the days of his last illness." The note says the days when he felt the first attacks of the illness he died of. It repeats Crépet, whom the editors of 1908 quote.
- Table Talk: the scan searched is the Faber and Faber edition of 1991; `sources` now names it beside the edition of 1990.

## Taken out of the list of what Auden said (the examiner, 3 October)

One entry that names Baudelaire only in passing, in an essay on another writer. True and checked, and kept here in case it is wanted.

- **“Edgar Allan Poe,” in Forewords and Afterwords (1973; Faber and Faber printing of 1974), p. 220**
  In his essay on Poe, Auden counts it among Poe's rewards that Baudelaire, when he felt his mind going, named him among those he asked to plead for him with God. The prayer is in the last leaf of My Heart Laid Bare, LXXX (block 286), the leaf from which the introduction of 1947 takes the evening prayer, the four parts of his earnings and the rule of sobriety.
  Checked: read in the scan of Forewords and Afterwords, research/auden/fa.txt, lines 10521 to 10524, by the poet and again by the examiner on 2026-10-03. The number 220 stands at the foot of the page, just above the title of the next essay. No tab leans on it.

## Taken out of the list of what Auden said (the critic, 3 October)

Two entries that no caption, no ground and no printed note leans on. The examiner read both in their sources and both are true; they are kept here whole (what the page said, its source line, and where it was checked) in case they are wanted. Why each came out is in critic.md, under "The list under More from Auden".

- ***The Enchafèd Flood* (1950; Vintage Books edition, 1967), pp. 25–26; Introduction to Charles Baudelaire, *Intimate Journals* (1947), p. 19**
  In *The Enchafèd Flood* he quotes the prophecy from the same entry of *Rockets* as the first passage: the son who runs from home at twelve to found a business. In the introduction of 1947 the same prophecy already stands among the traits of the Dandy’s opposites. Of the Romantic writers he is discussing, Baudelaire among them, he says that they had little good to say of the democracy of their day, and that this came from a passionate belief in individual freedom: as they saw it, the democracy of the cities was wiping out the hero and making him one more unit of the crowd.
  Checked: read in the scan of The Enchafèd Flood, research/auden/ef.txt, lines 1157–1209, on 2026-10-03; in this scan the page number stands at the foot of the page. The line of the introduction was read in the search snippets of the 1947 edition at archive.org on the same day. Read again by the examiner the same day: ef.txt lines 1150–1212, where the sentence on democracy is on p. 25 and the prophecy and the sentence on the crowd are on p. 26

- **Alan Ansen, *The Table Talk of W. H. Auden* (1990); W. H. Auden and Louis Kronenberger, *The Viking Book of Aphorisms* (1962), Foreword, pp. v–vi**
  In talk that Alan Ansen wrote down between 1946 and 1948, his list of the greatest aphorists runs Pascal, Baudelaire, Nietzsche, Blake, Kafka. He and Louis Kronenberger put sentences from these journals in their anthology of aphorisms, whose foreword says that an aphorism must convince every reader that it holds in all cases, or for every member of the class it names, and that its writer states his point and gives no argument or explanation for it.
  Checked: research notes, C_auden_on_works.md, appendix H10, and B_pedagogy.md, section 2.8; and search snippets of both books at archive.org, read on 2026-10-03. Read again by the examiner the same day: the remark on aphorists in a snippet of Table Talk (item tabletalkofwhaud0000anse), the first page of the foreword in snippets of the anthology (item vikingbookofapho0000unse), and two of its sentences under Baudelaire’s name, which are My Heart Laid Bare, blocks 162 and 211, in another translation

## The finisher's changes after the critic (3 October 2026, 14:10 UTC)

The finisher's record of a sitting from 12:41 to 14:16 UTC. Nothing of
Shipley's English, of Baudelaire's French beyond single words, or of
Auden's prose is copied out here. Places are given by block and word
number as the checker prints them (the first passage is rockets 126.0;
the second, my-heart-laid-bare 238.0 and 239.0; the budget, 266.0 to
269.0; the maxim, rockets 61.0), by key in `reading.json`, or by page
and line of a scan. Phrases in quotation marks below are the site's
own; a single word in quotation marks is a word named.

Read first: `remake/BRIEF.md`, `remake/FINISHER.md`, sections 2 and 3
of `remake/CRITIC.md`; `critic.md` whole; in `art.md` the faults still
there and the part on the reading; "Still doubtful" in `exam.md`;
`reading.json` whole, with `open`; the end of this file; and the page
as `node build/tools/prose.mjs baudelaire` prints it (4,124 words when
I began, 4,144 now).

The reading as I found it is `finisher/before.json` (sha256
267acce3...). Nine lists of exact edits, `finisher/edits-1-head.json`
to `finisher/edits-8-date.json` (the second in two parts), were
applied with `build/tools/edit-exact.py`. Sixty-four values differ from the copy,
one is gone and four are new. No `title`, `where`, `heading`, `beside`,
`join`, tab label, row, `plain`, `quote` or `say` was touched, and no
span, part or note was moved. The piece has no script in
`site/js/pieces/`, and no shape lens.

### Set: the lead's points

1. **The ambition (lead 1; critic 6.1).** `view.says`, first sentence,
   and the fourth sentence of the second entry of the list. The old
   phrase could be read as one thing he wants to be conscious of, or as
   two. Auden's sentence (1947, p. 20) has two, joined by "and", and
   its verb is "become". Both places now say "to become conscious that
   he is uniquely himself and like no one else". In the entry one
   "that" came out of the second sentence, to keep it at 110 words.
   Ground: the sentence read in three single searches of the scan
   (archive.org item intimatejournals0000char_k2x1, the public
   full-text search), and in `remake/research/C_auden_on_works.md`,
   appendix H5, line 1113. `build/tools/runs.py` against the research
   notes: no run of four words. Recorded in `view.checked` and in the
   entry's `checked`. A wider test of both texts against the scan
   itself is under 12 below.
2. **One form for dandy (lead 2; critic 6.2).** The small letter, which
   is Shipley's: rockets 126.0 word 106, rockets blocks 67 and 97,
   my-heart-laid-bare blocks 10, 13, 19, 59, 77 and 165. His one
   capital, block 110 word 0, begins a sentence. Changed at 21 places
   in what is printed: the view (2), the captions of Likeness (2),
   Delay, Words and French on the first passage and of Words on the
   third, the `stands` of Likeness (2), and entries 1, 2, 3, 4, 6 and 7
   of the list (11). The same in five `why` lines, which the build
   ships and the kit does not print. The title is as it was. In the
   caption and the `why` of Words on the first passage "the Dandy"
   became "Baudelaire's dandy": without the capital the bare word
   could be taken for any dandy, and Auden's sentence there is about
   the Dandy as Baudelaire's ideal man (*The Enchafèd Flood*, p. 84;
   ef.txt lines 3579 to 3583, read again; recorded in that lens's
   last ground). Kept with the capital: `grounds`, `checked` and the
   older lines of `open`, which record what Auden prints.
3. **`about` and the maxim (lead 3; critic 6.3).** `about` now ends:
   "; beside the third stands a maxim from *Rockets*, XIII." Ground:
   rockets block 61, 17 words, under the heading at block 59; the
   plate's own label. Room was made by trimming three phrases, each to
   fewer words that say the same or less: "in about his last ten
   years"; "in the order his publisher pasted them"; "is from the last
   entry of *Rockets*" (it had said near the close of that entry, which
   is so: the entry is blocks 124 to 127, and the passage is words 27
   to 134 of block 126, the last but one). Ninety words, the limit.
   That both entries of *My Heart Laid Bare* begin with the word named
   was looked at again: blocks 236 and 266.
4. **Titles and headwords (lead 4; critic 6.5 and section 3).** The
   sonnet's title in the caption of Wing was in italics and is now in
   quotation marks with its comma inside, as in `stands` and
   `sources`: a short poem, by CRITIC.md's rule. The dictionary
   headwords after "under" are words named as words and are now
   between asterisks: in nine `stands` (all but Delay's) and in the
   lines of `sources` for Littré (18 headwords) and for the Online
   Etymology Dictionary (7). Also *to-day* in the `stands` of Time and
   *Hygiène* in the third line of `sources`. The pictures show each
   in italic.
5. **The capital in word 73 of the first passage (lead 6; critic
   7.2).** A reader would stumble: a capital in the middle of a
   sentence, on the plate whose French tab is about that verb, and the
   caption of French gave the capital to Shipley. It is not his. Two
   scans of the 1919 book at archive.org, read in their full text
   (baudelairehispro00baud, a Modern Library printing with the
   copyright line of 1919, and baudelairehispro00baudiala), have the
   word once in that phrase with a small letter and never with the
   capital; the search snippets of three more scans agree
   (baudelairehispro0000tbsm, baudelairehispro0000unse, and
   baudelairehispro00baud_0, dated 1925). The capital is at line 7545
   of `.cache/texts/pg47032_baudelaire.txt`. So: the third caveat has
   a last sentence, twelve words, saying the capital is a slip of the
   Project Gutenberg copy (49 words in all; still five caveats); the
   caption of French quotes the word with a small letter; its `stands`
   says where the small letter is from; a new ground in that lens
   names the scans; and the fifth line of `open` is brought up to
   date. The hosted text is not mine to mend: see For the lead.
6. **The short note and the two names (lead 7; critic 6.11 and
   5.11).** The note on 267.0 word 5 said only what the caption's
   fourth sentence says, so it is cut; the gloss under the word and
   its source stay. For a numbered section of a journal the page now
   has one name, "entry". "Leaf" could be taken for one of the loose
   sheets that `about` and the second caveat speak of. Nine places:
   `about`, the note on 239.0 word 23, the caption and `stands` of
   Verbs, the gloss and note on 266.0 words 4 to 5, the caption of
   Words on the third passage, the third line of `sources` and the
   second caveat; and one `why`. The critic's twelve included three
   uses of the verb. Where "the French leaf before this one" stood,
   the caption of Verbs and the note now begin "In French the entry
   before this one".

### Set: what else

7. **`open` (the lead's note; critic section 8).** Line 4 now begins
   by saying that the entry it belongs to was taken out by the critic
   and is kept at the end of this file. Line 5 gives where the capital
   of point 5 is and where it is not. Line 11 no longer says that
   nothing was seen built or that the page should be built again, and
   gives the artist's later measures of the join that was tried (357
   and 96 px: art.md, "The joins"). A new last line, for a later hand,
   says which forms the printed page now keeps and where the working
   records differ from it.
8. **A ground with no sentence on it (critic, change 4).** In Delay
   the ground for the trait in Auden's list (1947, p. 19) was left
   standing after the critic cut the sentence it held up. It is
   removed. The trait is still in the first entry of the list, with
   its own `checked`.
9. **The key of Delay on small phones (art.md, fault 4).** At 360 and
   320 px the key broke after the numeral 5. Each of the six numbered
   labels now has a no-break space after its numeral. No span moved.
   In the pictures at 390, 360 and 320 the key reads in two lines,
   four names and two, with no numeral left alone.
10. **Words the critic added (FINISHER.md, rule 9).** Change 3 gave
    the main clause in plain words: the part that could stand alone.
    That is a statement of grammar and had no ground. Opened: Strunk,
    *The Elements of Style* (Project Gutenberg no. 37134), a book the
    piece already cites. Rule 3 sets the main clause against the
    phrases and dependent clauses before or after it (lines 333 to 335
    of the e-text); rule 5 calls independent clauses grammatically
    complete and lets them be written as sentences by themselves
    (lines 421 to 433). Kept, with a new ground in Delay; its `stands`
    now names the main clause and rules 3, 5 and 18 and is still 70
    words, its first sentence shortened to make room; the line of
    `sources` gives the three rules. I also read *A New English
    Dictionary*, vol. VII, under Principal, a., sense 9 (said of a
    clause in relation to one dependent on it; ned_oed07arch.txt,
    lines 569545 to 569552), which agrees; it is not cited on the
    page. The critic's other additions were each read against what
    they lean on and kept: 13 (the plate: 239.0 words 29 to 35), 16
    and 19 (the glosses under 238.0 word 11 and 239.0 word 35), 24
    (269.0), 28 (the pride, words 107 to 115, is in the second
    sentence shown, which begins at word 69), 29 (the research notes,
    line 1239, where Auden's noun for what Rimbaud did is a plain one
    and the critic's is no stronger), 31 and 32 (the entry's own
    `source`; fa.txt, p. 232).
11. **Two runs of five words with Auden's text, found by
    `build/tools/runs-sweep.py`.** Not among the points left; found
    when I ran the sweep over my own changes. (a) The last five words
    of the caption of Verbs ran with the last sentence of the
    introduction (the extract in the research notes, lines 431 and
    1240): "he was in time" is now "he came in time". (b) In the
    eighth entry of the list five small words ran with the essay on
    *Italian Journey* (fa.txt, line 6568): "trusts wholly in" is now
    "trusts wholly to". Each says what it said. Recorded in the last
    ground of Verbs and in the entry's `checked`.
12. **The introduction of 1947, five words at a time.** The lead's
    point 1 asked for a test against the scan cited. That scan is not
    on disk, so `runs.py` cannot read it, and the sweep sees only the
    extracts in the research notes. I searched every run of five words
    as an exact phrase inside the scan (archive.org's public full-text
    search of intimatejournals0000char_k2x1; the script is kept as
    `finisher/grams.py` and prints only the page's own words): the
    view (68 searches), entries 1, 2, 3, 4 and 6 of the list (104,
    106, 89, 105 and 78), and the sentences of the ten captions that
    report that book (154). Found, and changed by one word each:
    - the view, third sentence, and the last sentence of the fourth
      entry: the same five words, which lead up to the day of the
      month in Auden's sentence on p. 25. "Until" is now "before".
    - the second entry, second sentence: its first five words. The
      snippets show the same five-word form again for the second hero,
      which the search could not find because the scan misreads one
      word there and the head of page 20 follows. Now "a hero of
      poetry" and "a hero of philosophy".
    The changed places were searched again: none found. No other run
    was found in 704 searches. What this cannot see: a run broken in
    the scan's text by a running head or a misread word. Recorded in
    `view.checked` and in the `checked` of the five entries.
13. **The date in running prose.** In the fourth entry of the list the
    date of the second passage was parted after the month at 1280 and
    before the year at 390 (it is so in the critic's picture of 12:21
    too). The view and entries 4 and 7 now hold the date together with
    no-break spaces, as the plate's `heading` already does. Pictures
    at both widths show it whole.

### Left, and why

- **The two entries the critic took out, and the examiner's entry on
  Poe (lead 8).** They stay out. No caption, ground or `stands` leans
  on any of them; one is about a part of the last entry of *Rockets*
  that the page does not show, and of another neither page number was
  seen. The list stays at eight.
- **The key of Likeness (lead 5; critic 6.8).** Passed up, below. The
  `plain` line of that tab keeps the critic's quotation marks for the
  same reason: the kit prints both bare.
- **Critic 6.4, the last sentence of Wing.** Left. It reports two
  things that are in Auden's text (he quotes the entry as the crisis,
  p. 25; his last lines have the bird, p. 27) and concludes nothing.
- **6.6, the definition twice on Wing.** Left: the line under the
  figure's name is the kit's place for it, and the caption needs it.
- **6.7, "In another essay" in Time.** Left. The last entry of the
  list names the essay and `stands` gives its page. I read p. 232
  again (fa.txt, lines 11086 to 11168): the sentence says no more
  than Auden does.
- **6.9, 6.10, 6.12, 6.13.** Left for the critic's own reasons: to
  spell out the step in Delay would add a claim; "a compound past" is
  explained by what follows it; the short sentences of Time and Verbs
  each point at one mark.
- **7.1, the sense of 239.0 word 4 three times.** Left: the note
  alone gives the rest of the dictionary's entry. **7.3 and 7.4:**
  nothing wrong for a reader.
- **7.5, the speck on Verbs at 1280.** It is not on the page. I
  enlarged the same corner of the critic's picture and of mine: a
  pale mark at about x 1120, y 343 in the first, none in the second.
  A chance of that one rendering.
- **Section 5, what recurs.** Left. Every caption closes on Auden,
  each with its own page, and that is rule two. One thing in it for
  the lead is below (8).
- **`exam.md`, "Still doubtful".** The introduction known only in
  snippets, the order of the entries, the French form that could be a
  past, and the day no other entry gives are each said in a caveat;
  the first printing of the sonnet and the stroke of 1866 on Wikipedia
  alone are in `open`, and `sources` names Wikipedia for the stroke.
  Left as they are.
- **`art.md`.** Nothing stands under "Proposed for the reading". Of
  what the artist thought wrong in the reading, the critic did two,
  and the other two are 7 and 9 above.
- **What `runs-sweep.py` still lists for this piece: eight runs of
  five words or more, none with the text its sentence reports.** Four
  are chance meetings with *The Dyer's Hand*, which no sentence here
  reports (dh.txt lines 6675, 9189 and 21090): Littré's sense in the
  caption of French, a common phrase in the caption of Words on the
  second passage and again in the eighth entry, and six small words
  in the seventh entry. Four are with the research notes' own
  paraphrase (C_auden_on_works.md, lines 427 and 500), not with
  Auden's words: the caption of Maxim and entries 1, 2 and 6. Each of
  those four was searched in the 1947 scan and is not there.

### For the lead

Worst first.

1. **The hosted text has a capital the book does not.** Rockets block
   126, word 73: a slip of Project Gutenberg no. 47032 (line 7545 of
   `.cache/texts/pg47032_baudelaire.txt`); five scans of the book have
   a small letter. It wants mending where the text is built. When it
   is mended, take the last sentence out of the third caveat and the
   clause about the small letter out of the `stands` of French; the
   first ground of French, which still names the word with its
   capital, then wants the small letter too.
2. **The sweep cannot see a book the site has only in snippets.** In
   this piece four runs of five words with the introduction of 1947
   had passed the examiner and could not be seen by
   `runs-sweep.py` (12 above). Other pieces whose Auden is known only
   from snippets may hold the same. `finisher/grams.py` tests one
   printed field against one archive.org item; a search took 5 to 13
   seconds, and 704 took about forty minutes with up to five running
   at once.
3. **On a phone the unmarked French stands between the marked English
   and its caption** on Likeness, Delay and Words of the first passage
   (art.md, fault 1; `remake/kit8/BRIEF.md`, 2a). The kit's. Also the
   kit's: the place line repeats the journal's name on the first two
   plates (fault 2), and the date in the passage, 239.0 words 16 to
   18, is parted before its year at 1280 (fault 3; it is so in my
   picture of 14:06).
4. **The key of Likeness: "now he", "his me".** Two words named as
   words stand bare because the kit prints key labels plain. When a
   key label and a `plain` line take `*word*` (`remake/kit8/BRIEF.md`,
   3c): set the labels to `now *he*` and `his *me*`, and in `plain`
   put `*as*` for the critic's quotation marks.
5. **A date in running prose.** The kit does not hold a month, its
   day and its year together. I tied this piece's date in three
   sentences by hand (13 above); other pieces will have the same.
6. **`exam.md`, the first line of "Still doubtful"** still says that
   nothing the examiner changed was seen built. It has all been built
   and photographed since. Not mine to edit.
7. **Old pictures in `shots/`.** The artist's pictures at 360 and
   320 px (11:10 to 11:12) are older than the critic's changes and
   mine; so are `baudelaire-page-1280-5.png`,
   `baudelaire-page-390-8.png` and `shots/trial/`. The critic's
   pictures at 1280 and 390 (12:21) are older than mine. I deleted
   nothing. Mine are in `shots/finisher/`; of the two small widths I
   took only Delay.
8. **To weigh, no fault:** the closing sentences of French and of
   Maxim say again what stands at the head of the page (the view's
   second sentence; the quotation). Each is its caption's reason, so I
   left both.

### The checker, the build and the pictures

`node build/tools/check-reading.mjs baudelaire --print`, last run at
14:13 UTC on the reading as it stands (sha256 25c65903...; last edit
14:06:26). There was no WARNING to read at any of six runs. Its last
three lines:

    no problems
    no warnings
    the printed notes are fit to print

Limits, by the checker's count: `about` 90 words; `view.says` 72; the
ten captions 104 to 114; the ten `stands` 39 to 70; the eight entries
108, 110, 93, 109, 40, 82, 94, 94; five caveats, 45, 44, 49, 27, 43.

`node build/pieces.mjs baudelaire` ran at 13:04:00, 14:04:03 and
14:06:33, each time after the last edit before it. The picture tool
printed "nothing reported" at every run. `prose.mjs` was run again
after the last edit, so `review/remake/prose/baudelaire.md` is of the
page as it stands.

Pictures, all in `shots/finisher/` (35), one plate at a time, every
one opened:

- of the build of 13:04, the tabs changed by the first six lists:
  Likeness, Delay, Words and French on the first passage, Wing and
  Words on the second, Words on the third, each at 1280 and 390; Delay
  also at 360 and 320, for its key.
- of the build of 14:04: Verbs at 1280 and 390, after its caption
  changed; and the two folded lists at the foot, opened, at 1280 and
  390 (`baudelaire-foot-0-...` and `-foot-1-...`, taken with a few
  lines of script of my own that open the built page, unfold the
  lists and photograph them; it changes nothing).
- of the build of 14:06: the whole page, five slices at 1280 and
  eight at 390.

What moved in a picture: nothing on the lines. No mark was set or
moved. The key of Delay breaks differently at 360 and 320 (9 above),
and the date in the list holds together (13 above).

In `finisher/`: `before.json`; the nine edit lists; `grams.py`.

Nothing was refused by the permission system.

One slip of my own, with no effect on any file: early in the sitting
I typed four words of the hosted text in a search command. After that
I built such searches from the hosted data by block and word number
(the searches of point 5), and searched the 1947 scan with runs of
the page's own words and, to read a snippet, phrases of two to four
words.

## The lead after the finisher (3 October, 14:48 UTC)

Read: the finisher's record above, whole. Looked at: the head of the
page and the French tab at 1280 (`shots/lead/`, two pictures, taken
after the change below; the finisher's whole page at 1280).

Set, one thing, with what follows from it:

- **The capital the book does not have (For the lead, 1).** Mended
  where the text is built: `build/texts/baudelaire.mjs` has a list,
  SLIPS, of one place (rockets, block 126, word 73), sets that letter
  small and throws if no capital stands there inside a sentence. The
  hosted part was built again; only that letter and the book's note
  changed (8,970 words as before; `check-text`: no problems). The
  note printed with the book in the reader has one more sentence
  saying so. `build/texts/notes/baudelaire.md` is brought up to date.
  In the reading (`lead/edits-after-finisher.json`; before:
  `lead/before-after-finisher.json`): the last sentence of the third
  caveat is out; the clause on the small letter is out of the
  `stands` of French; the first ground of French names the word with
  its small letter; the last ground and the fifth line of `open` say
  what was done. Checker: no problems, no warnings, fit to print.

Decided, nothing set:

- **For the lead, 2: a book the site has only in snippets.** True of
  more pieces than this one (the karamazov finisher found the same
  with *The Prolific and the Devourer*). One test for every piece that
  reports such a book is the lead's to arrange, with a tool made from
  `finisher/grams.py`.
- **3, 4, 5: the kit's.** The French between the marked English and
  its caption on a phone is in the eighth mending (2a). The place
  line that repeats the journal's name waits for a plate's own place
  line; the key labels of Likeness (`now *he*`, `his *me*`, and
  `*as*` in `plain`) wait for keys that take marks (3c); a date
  held together in running prose is for `tidy()`. All three are on
  the lead's list for after the mending.
- **6, 7.** `exam.md` is a working record and is left as it is; the
  old pictures go at the last cleanup.
- **8.** For the last pass, with the other captions that close on
  Auden.

The sweep with the four scans, after the changes: 4 runs of five or
six words, all with *The Dyer's Hand*, which no sentence of this page
reports (the finisher's "Left, and why", last point).

The piece is through every stage.

## The lead in the last pass: the measure's wording and the Word tab (3 October, 18:06 UTC)

The Word tab: the 3 tabs named "Words" are named "Word", as on 36 other passages, the front page and Ariel's song (the site critic by word, labels, 5; the reading before: `lead/before-word-label.json`).

## The lead in the last pass: one form for the books many pages cite (3 October, 18:48 UTC)

Printed lines only, and no page number, year or title changed (the tool proves the page
numbers of every line are what they were): `review/remake/last-pass/tools/cite-forms.py`.
The forms: under an entry, `*Prose*, vol. II (2002), pp. …`; in a `stands` line, `*Prose*,
vol. II, p. …`; in the list of sources, `*Prose*, vol. II: 1939–1948, edited by Edward
Mendelson (2002)` the first time and the short form after; and wherever a page of it is
cited under an entry or in the list, `*The Enchafèd Flood* (1950; Vintage Books edition,
1967)`, since every page number of that book on the site is the Vintage edition's (the
one scan all the pieces were written from; its own front matter says so).

Lines changed here (4): `plates[0].lenses[2].stands`, `plates[1].lenses[2].stands`, `sources[3]`, `sources[4]`.

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

- `plates[0].lenses[0].plain`, the plate `evening`, the tab Likeness (simile):
  was “a comparison stated outright, with both things named; here the word is “as””;
  now “a comparison that says one thing is like another; here the word is “as””.
- `plates[1].lenses[1].plain`, the plate `warning`, the tab Wing (metaphor):
  was “a feature of one thing given to another”;
  now “one thing spoken of as another”.

The checker says of the piece what it said before. Copy before:
`lead/before-figure-wordings.json`, with the list applied beside it.

The follow-up (20:04 to 20:07 UTC, `review/remake/last-pass/tools/figure-sources.py`):

- `plates[1].lenses[1].stands` (the plate `warning`, the tab Wing): the line of what the tab stands on now names the handbook that carries the new line (checked in the saved page of that handbook).
- the list of sources: “*Silva Rhetoricae* (rhetoric.byu.edu), under *metaphor*.”

The checker says of the piece what it said before. Copy before:
`lead/before-figure-sources.json`.

## The lead after the eighth mending of the kit: named words take their mark (3 October, 20:20 UTC)

Since its eighth mending the kit sets a word between asterisks upright in a key's label and in a
Figure tab's line, as a caption sets a named word in italics. A word named in such a line stood
in the same italic as the words about it, or in quotation marks. 3 leaves changed here, and
nothing else (`review/remake/last-pass/tools/named-words.py` proves it):

- the plate `evening`, the tab Likeness, `plain`: “a comparison that says one thing is like another; here the word is “as”” is now “a comparison that says one thing is like another; here the word is *as*”
- the plate `evening`, the tab Likeness, `label`: “now he” is now “now *he*”
- the plate `evening`, the tab Likeness, `label`: “his me” is now “his *me*”

The checker says of the piece what it said before. Copy before: `lead/before-named-words.json`.
To look at after the merge and the build: each of these tabs' keys at 1280 and 390.

## The lead after the word critic of the last pass (4 October, 00:08 UTC)

A critic read the lines written after the pieces' critics had read: the
figures' lines, the measures and the front page's cards. Its report is
`review/remake/critics/last-pass-words.md`; what the lead did with each
point is in `review/remake/last-pass/RECORD.md`. In this reading, exact
edits, each proved to change only the leaf it names (the file before is
`lead/before-last-pass-words.json`):

- `A metaphor gives one thing a feature of another; this one gives <b>imbecility</b>`
  became `This metaphor gives <b>imbecility</b>`

The checker says what it said before.

## The lead after the ninth mending of the kit (4 October, 01:19 UTC)

Keys the ninth mending made, set here by exact edits proved on the parsed
file (the files before are in `lead/`, named `before-ninth-rows.json` and
`before-ninth-lenses.json`; the record is `remake/KIT-CHANGES.md`, "After
the ninth mending: the lead"):

`evening`, `warning`, `budget`: `"place": ""`, so that the line beside the heading no longer repeats the journal's name.

The checker says "no problems". No caption or claim changed.
