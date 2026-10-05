# Last read: the app's own words, the weekly exercises (`ui:making.*`)

Share: the 59 entries from `ui:making.kicker` to `ui:making.translate.published` in `review/r3/wave3/ui.md`; 34 are marked NEW and hold 38 marked sentences. Each was read in `content/ui.mjs`, traced to the line that prints it in `site/js/views/making.js` or `site/js/views/emend.js`, held against `site/js/lib/checks.js`, and looked at on the built site with every exercise page in its empty, failing, passing and finished states.

How the check messages were tested: for each of the ten exercises with a `check:` field, the five charts and the passage with changed words, the page was fed work that fails and work that passes each check, and the message printed was compared with what `checks.js` computes and with the numbered rules of that exercise.

Findings follow in the order of the text. Entries not named are sound.

### ui:making.notyet
- where: The rules marked ✗ above are not yet
- problem: The sentence stands beside the disabled finishing button on thirteen exercise pages. On nine of them (the five charts, week 11, and weeks 3, 7 and 12) the list above it never holds more than one line, so "rules" is a plural for one mark. What carries the mark is a count or a fact (`making.check.noPeriod.no`, for one), not a rule, and the sentence only repeats what the ✗ has said without telling the student what the button is waiting for.
- fix: You can finish when nothing above is marked ✗.
- weight: should
- note: checked against `isReady` and `checkPanel` in `making.js`: on those thirteen pages the button is off exactly when a line above carries ✗, with the box empty as well as with work in it. "Finish" is the verb the rules use for this button (weeks 1, 4, 5, 11, 13, 14). The translations print `making.notyet.translate` in this place and need no change.
- status: found already made in `content/ui.mjs` at 17:54 on October 2, and read again on the built site. All thirteen pages print the new sentence beside the disabled button, each with a line marked ✗ above it, and none prints it once the marks are gone.

### ui:making.check.lines.poem, with the `check` field of week10.making.1 and of week14.making.1
- where: Lines: {have}. The poem has {n}.
- problem: The line gets a tick whenever the version has at least as many lines as the poem. That agrees with rule 1 of week 2, which allows more lines than the Latin and bars fewer. Rule 1 of week 10 asks for twenty-four lines, and rule 1 of week 14 for twelve in stanzas of three, four and five. On the built site a version of 27 lines in week 10 and one of 15 in week 14 each get a tick and can be finished, so the message under the rule passes what the rule does not allow.
- fix: keep the string, and hold the two exercises to the number their rules give. In `content/units/10.mjs`: `check: { lines: { exact: 24 } },` In `content/units/14.mjs`: `check: { lines: { exact: 12 } },` Week 2 keeps `min: 8`.
- weight: should
- note: tried on the built site with the data changed on its way to the browser and no file touched. With `exact`, 27 lines in week 10 print a cross beside the count in the list and, beside the button, the poem's 24 and the version's 27 in the words of `making.notyet.translate`; 24 lines pass. Both strings read rightly as they stand, because `making.js` fills them from the poem and the box and not from the range. No test and no step of the build reads these two fields.
- status: found already made in both unit files at 17:54 on October 2, and tried again on the built site. Week 10 refuses 23 and 26 lines and passes 24; week 14 refuses 11 and 14 and passes 12; week 2 still passes 10. The 89 tests of the project pass.

## The check messages, held against `checks.js` and the rules

Asked for with special care, so the result is set down check by check. Apart from the finding above, every message says what the code tests, in its passing and its failing form, and the rules of the exercise agree with it.

- Lines (`making.check.lines`; week 2 second exercise, weeks 6, 7, 9). The code counts the lines that are not blank. 13, 10, 12–20 and 8 are the numbers the rules give.
- Lines of a translation (`making.check.lines.poem`, `making.notyet.translate`; weeks 2, 10, 14). The poem's number is counted from the poem as printed: 8, 24, 12. Week 2 agrees with its rule 1. Weeks 10 and 14 are the finding above.
- Words (`making.check.words`; weeks 3, 8, 12). The figure under the box and the figure in the list come from one counter, and the ranges are those of the rules.
- Words to a line (`making.check.each`, `.each.no`, `.each.line`; week 6). The limit is 15, as in rule 2. The failing form names each line over the limit with its count (tried with lines of 17 and 16 words). The singular form of `.each.line` cannot be printed while the limit is 15.
- Barred words (`making.check.forbid.ok`, `.forbid.no`; weeks 6 and 8). The seven words and the three words are the lists in the rules. Plurals and possessives are caught, and a longer word that only contains a barred one is let through; rule 4 of week 6 says that the plurals are barred.
- A line that must not end with a period (`making.check.noPeriod.ok`, `.no`; week 9, line 8). Agrees with rule 4 in both forms. Nothing is printed until an eighth line is written.
- A sentence that must run on (`making.check.runOn.ok`, `.no`, `.lines`; week 2 second exercise, lines 3, 6 and 9). Both forms say what is tested, which is periods and no other stop. The test is the second sentence of rule 3. A poem whose only run-on is from line 12 into the closing line is refused, and by that sentence rightly.
- Rhyme scheme (`making.rhyme.words`, `making.rhyme.note`; week 2 second exercise). The scheme is the one in rule 1. The table sets the last word of each line under its letter and gives no verdict, as the note says.
- Syllables (week 9). The numbers wanted are those of rule 2. The count decides nothing, as its note says.
- Boxes (`making.check.boxes`; weeks 1, 4, 5, 13, 15). 16 of 20, 12 of 16, 16 of 22, 14 of 18 and 14 of 18, as the rules say. A box counts once it holds a word of two letters or more.
- Corrections (`making.check.marks`; week 11). Seven, as in rule 3, and a mark with no word written beside it is not counted, as that rule says.
- `making.check.endWords.ok` and `making.check.endWords.no` are printed by no exercise, because no unit sets that check. Both read soundly.

## Patterns

No fault recurs. The two findings are of different kinds: one sentence whose number and name do not fit what stands above it, and one check set looser than the rule it serves.

Not found in the 38 marked sentences: a count the code does not compute, a button or page named by a label it does not carry, a promise the code does not keep, a filled-in name, date, number or list that breaks the sentence around it (each version's name, a date in this year and in another, one word and several were tried), an em-dash, an exclamation mark, or a message that scolds or cheers.

## Changed in the project while this share was being read

- At 18:04 on October 2 the 59 entries were compared again with `content/ui.mjs`. One differs from the part file, `making.notyet`, and it differs because the fix above is in.
- At 17:59 `making.js` was given a new case, and a new string that no part shows: `exam.shut`. While the examination's clock runs, the second exercise of week 2 prints it in place of the nine lines of Italian and the box (the week 11 exercise still prints `heart.exam.running`). I read it on the page in that state. It says what the code does: the model, the box and the button are all left out until the examination ends, and its link opens the examination. It reads soundly there. The two other pages that print it (Missing words in week 1, and the tests of weeks 1 and 2) set it under the page heading with nothing else, by `words.js` and `test.js`, and what it says is true of them as well.

38 marked sentences read (34 entries); 2 findings, both "should".
