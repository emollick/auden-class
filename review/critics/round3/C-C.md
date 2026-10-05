# Closing read, list C

List: `review/r3/closing/C.txt`, 51 sentences: 20 of the app's own wording, one book note, and 30 from weeks 6, 12, 13, 14 and 15. Each was read in its paragraph in `review/all-prose.md` (built at 19:22 UTC on October 2), with the paragraphs on either side and with both lenses at once. Each `ui:` sentence was also traced to the line in `site/js` that prints it and read with what stands on the screen beside it.

One finding.

### ui:home.week.sum
- where: Together they add up to the
- problem: The sentence points to a label at the top of the page, and while an examination is open the header does not carry that label. From the moment the clock is started until the result is asked for, `masthead` in `views/frame.js` prints the examination line in the header and returns before the count of pages is added. `during` in `views/home.js` takes no account of a sitting and prints the sentence all the same. A student who starts the clock and then goes to the front page, or who comes back a day after the three hours ran out, is sent to look for words that are not on the screen.
- fix: Together they put you {pages} pages behind.
- note: The second fact given with the task, that the header shows this figure, holds in every state but this one. In every other state the sentence is exact: the two numbers before it add up to the number it gives, and the header prints that number followed by the same two words. The fix keeps those two words, so the student can still match the sentence with the header whenever the header shows the figure, and with the row of figures at the foot of the front page, which shows it in every state. The sentence is printed only when both numbers before it are above zero, so {pages} is never less than 2 and the plural always holds. There is a second remedy, in the program: leave the string as it is and have `home.js` leave the sentence out while a sitting is open. The paste is the smaller change this late.
- checked: by running the front page and the header in memory, with nothing written to disk, on a record 17 days into a one-semester term with nothing read. With no examination open, the header ends with the count, 608, and the sentence follows parts of 470 and 138. With the clock running, and again with the three hours up, the header carries only the examination line and the page prints the same sentence.
- weight: must, by the task's rule for a string that names what the screen does not carry. The fault shows in that one state only: a sitting open, and pages overdue both from an earlier week and from this one.

## The rest

The other 50 sentences are sound as they stand, and I ask for no change in any of them. In each I looked for the tracks a repair leaves (broken grammar, a pronoun without an owner, a verb of saying missing or doubled, a name without its introduction, a pointer that does not say where to look, a sentence at odds with its neighbor, a phrase that reads as made by a machine) and found none that needs a change.

The other 19 `ui:` sentences say what the program does. What was checked for each:

- `home.week.before`: the number is the pages of the running week that were due by the end of yesterday and are unread (`r.behind - r.earlier`). Both forms read rightly with it.
- `home.after.passed.1`: printed only after the last day of term and only when a sitting has passed. Both dates are filled.
- `unit.omit`: no item of any test is on either of the two books so marked. The one question on either of them (in week 13) is one of four to choose from. The box stands directly under the sentence, gives that week's pages in its label, and adds them when checked.
- `words.source`: reads rightly beside the pointer to the Sources page that follows it.
- `test.none`: printed only for an item missed with nothing wrong entered in it.
- `making.notyet`: the mark it names is the one the stylesheet sets beside a failed check. On all 16 exercise pages the button is off only when a line above carries that mark, an empty box included. The button has two labels, and the sentence rightly names neither.
- `heart.state.once.late`: printed only when the day it names is past.
- `exam.shut`, `exam.over.shut`, `ledger.final.over`: printed in the states the task gives. The link in each leads to the page that does what the sentence says, and in the last two the link names the result as the button found there does.
- `heart.write.intro.1`, `heart.write.allowed`: {n} is the limit the comparison itself applies, one word in a hundred rounded down. The first gives the consequence and the second the figure, so the two do not repeat each other.
- `final.rules.4`: the comparison does take the British and American spellings as the same, and the rule now has the same words for this as the By heart page.
- `final.begin.confirm`: names the button that stands after it by its label, and that button starts the clock.
- `ledger.before`: the number is the same one `home.week.before` gives.
- `notebook.keep.2`: the three buttons carry the three labels given, the second file is plain text, and a restore replaces the whole record.

In the week sentences every pointer leads where it says. The third and fifth paragraphs under the opera's heading in week 15 are the two meant. The third question of week 11, the second of week 13 and the third and fourth of week 14 each hold what the sentence that points there says they hold. The question is the heading of its own page, as `week15.questions.1.auden.paras.1` says. The seven barred words of week 6 are the seven the program refuses, and it refuses their plurals.

## The files while I read

`review/all-prose.md` and the built data were not rebuilt after 19:22 UTC. The program was saved twice more: four pages at 19:37 (the front page, the term, Progress and By heart) and two files at 19:49 (`views/final.js` and `app.js`). I read the changed files again. The lines that print the listed strings are as they were, and the finding above was run after both changes. All 51 sentences stood word for word in `all-prose.md` and in the built data at 19:58.

## Patterns

None recurs. The one finding is a sentence that is exact in the state it was written for and is printed in one more state, where the thing it points to is gone.

Sentences read: 51. Findings: 1, a "must" that shows in one state only. No "should".
