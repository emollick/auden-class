# Part C, read for machine-made prose (round 2)

### work:dante.copy
- where: is open to read, and any change made for
- problem: A scan is free to read, not "open to read", and "any change ... is not known here" strains the grammar to avoid saying who does not know. The reader of the first row of the table is stopped twice in one sentence.
- fix: The text is taken from the Temple volumes, since no scan of the Modern Library reprint is free to read online. This site could not check whether the reprint altered any wording.
- weight: must

### work:dante.copy
- where: the Italian are printed with it
- problem: "It" has lost its owner. The sentence before is about the *Inferno* and Carlyle, so the pointer lands on one part of the poem when the whole prose translation is meant.
- fix: Longfellow's verse translation and the Italian are printed alongside the prose translation.
- weight: should

### work:augustine.copy
- where: because a proofread text of it was available
- problem: The reason is given back to front, since the cell says the substitute had a proofread text and leaves the reader to work out that the listed translation had none. The same clause, word for word, closes the cells for *Faust* and *Peer Gynt*.
- fix: Replace the second sentence with: No proofread text of it was found, so E. B. Pusey's translation of 1838, which revises Watts, is printed here. (This follows the Horace cell and the rule stated on the about page. If a proofread Watts does exist, the editor must give the true reason.)
- weight: should

### work:faust.copy
- where: because a proofread text of it was available
- problem: The same back-to-front reason as in the Augustine cell, in the same words.
- fix: Replace the second sentence with: No proofread text of it was found, so Bayard Taylor's translation of 1870 is printed here.
- weight: should

### work:kierkegaard.copy
- where: and the week’s test and questions can be done
- problem: The clause answers a worry the sentence has just raised, that only a third of the book is here, so the plain connective is "but". Joined with "and", the reassurance reads as one more fact in a row.
- fix: Change "and" to "but" before "the week's test".
- weight: could

### work:kierkegaard.find
- where: and the week’s test and questions can be done
- problem: The same clause as in the reading-list cell, with the same flattened contrast. The two notes are shown on different pages, so the repetition itself is right.
- fix: Change "and" to "but" before "the week's test".
- weight: could

### work:baudelaire.find
- where: an introduction by Auden replaces Eliot’s
- problem: This note is shown on the week's page, apart from the reading-list cell that mentions Eliot's introduction. Nothing on the week's page has said the 1930 edition had one, so "Eliot's" points at nothing and Eliot arrives by surname only (house rules 10 and 11).
- fix: Change the clause to "which has an introduction by Auden". If the editor wants Eliot kept, end the first sentence "translated by Christopher Isherwood, with an introduction by T. S. Eliot" and leave the second sentence alone.
- weight: should

### work:peer-gynt.copy
- where: because a proofread text of it was available
- problem: The third use of the back-to-front reason, again in the same words.
- fix: Replace the second sentence with: No proofread text of it was found, so the one by William and Charles Archer is printed here.
- weight: should

### work:rimbaud.copy
- where: the poems that Rimbaud quotes from himself in French
- problem: The sentence misleads on first reading. "Leaves" is parted from "in French" by a clause that itself ends in "quotes from himself", so the reader first takes the poems to be left out, or takes Rimbaud to be quoting in French.
- fix: Where Rimbaud quotes his own poems, the translation leaves them in French.
- weight: should

### work:don-giovanni.copy
- where: and no test or question depends on that scene
- problem: The second clause takes the sting out of the first, so the relation is a contrast. "And" leaves the reader to supply it.
- fix: Change "and" to "but" after "opera,".
- weight: could

### text:dante-temple
- where: printings of 1904 (Inferno, Purgatorio) and 1910 (Paradiso)
- problem: House rule 9. The three titles are roman in this source line and italic in the note on the same page.
- fix: flag only. This source line reaches the page as plain text, so the editor must decide whether to let it carry italics or to recast it without the titles, for example "the printings of 1904 (first and second volumes) and 1910 (third)". The link label at work:rimbaud.textLabels.1 has the same fault, a periodical title in roman beside the italic one in its cell.
- weight: could

### text:dante-temple.note
- where: wherever they differed the printed page was looked at
- problem: "Was looked at" says someone glanced at the page and stops short of saying the difference was settled from it, "they" has two possible owners, and "the machine's reading" turns the machine into a person. The same wording stands in ui:reader.unverified and on the about page.
- fix: Each canto was then compared with machine readings of at least two other copies of the same translation, and every difference was checked against the printed page.
- weight: should

### text:dante-temple.note
- where: the four set for the examination among them
- problem: "Set" is the British classroom word (house rule 4), and a student who has been told everywhere else that the examination is five cantos is left to work out why this says four. In the next sentence the lone "a misread word", said of eighty-eight cantos, is coy where the other notes say plainly that misread words may remain.
- fix: Twelve cantos, including the four that every student learns for the examination, were read through against the pages. The other cantos may still contain misread words. (The phrase about the four is also in page:about.sections.7.paras.3.)
- weight: should

### text:dante-temple.note
- where: and only the English is given here
- problem: After "with an argument and notes to each canto," the "and" reads at first as one more item in that list. The clause is a contrast with what the volumes print and wants "but".
- fix: Change "and" to "but" after "to each canto,".
- weight: should

### text:fidelio.note
- where: the library that owns this copy dates it 1903
- problem: "This copy" points forward to a scan that is not mentioned until the next sentence (house rule 10). The clause also corrects the one before it, so "and" is the wrong join.
- fix: It gives neither translator nor date, though the library that owns the scanned copy dates it 1903.
- weight: should

### text:rimbaud.note
- where: the poems that Rimbaud quotes from himself in French
- problem: The same misleading sentence as in work:rimbaud.copy, word for word.
- fix: Where Rimbaud quotes his own poems, the translation leaves them in French.
- weight: should

## Patterns

1. A contrast or correction joined with "and". 5 places: work:kierkegaard.copy, text:fidelio.note, and also work:kierkegaard.find, work:don-giovanni.copy, text:dante-temple.note. The part has 16 joins made with ", and" and does not contain "but", "though" or "although" once. House rule 2 asks for the plain contrast, but this part never uses one.

2. A pointer with no owner in its own block. 4 places: "it" in work:dante.copy, "Eliot's" in work:baudelaire.find, "they" in text:dante-temple.note, "this copy" in text:fidelio.note.

3. Strained impersonal wording that keeps the site out of the sentence. 4 phrases: "open to read" and "not known here" in work:dante.copy, "was looked at" in text:dante-temple.note, "was available" in work:augustine.copy.

4. One patched clause used again in the same words. 3 cells give the proofread-text reason: work:augustine.copy, work:faust.copy, work:peer-gynt.copy. The editor should also decide whether "No free text ... was found" (work:horace.copy, work:baudelaire.copy) means something different from "no proofread text". If it does not, one formula should serve all five cells and agree with the about page.

5. One sentence that misleads, printed twice. 2 places: work:rimbaud.copy, text:rimbaud.note.

Counted and not faulted, because these are table cells and one note to a book, where a fixed form helps the reader compare: "printed here" 21 times, the opening "The English version from" 15 times, "read by machine" 9 times, "neither translator nor date" 6 times.

The rest of the part is clean. It has no stock phrases, no posed endings, no hedging and no inflated diction.
