# Checking the three word lists

## The site

`/home/user/auden-course` holds a web site that sets W. H. Auden's 1941 University of Michigan course as a working term of fifteen weeks. At Michigan Auden had each student translate a poem from a language the student had not studied, with a dictionary as the only help. The site sets that exercise three times: a Latin ode of Horace in week 2, a French poem of Rimbaud in week 10, a German poem of Rilke in week 14. The student is told to work from a word list alone. So the word list is the student's whole dictionary, and a wrong entry in it produces a wrong translation that the student cannot detect.

Earlier critics read the site's prose. Nobody has yet checked the word lists as a person who knows the three languages would. That is your task.

## Where the lists are

- Week 2: `content/units/02.mjs`, the exercise whose `kind` is `translate`. The Latin is Horace, *Odes* I.11.
- Week 10: `content/units/10.mjs`, the same. The French is a poem that Rimbaud quotes in "Alchimie du verbe" in *Une Saison en Enfer*.
- Week 14: `content/units/14.mjs`, the same. The German is Rilke's "Herbsttag".

In each, `translate.glossary` is a list of lines; each line is a list of pairs, `[the word or phrase as it stands in the line, the entry]`. `translate.wordsIntro` tells the student how to read an entry. The poem itself is cut from one of the site's texts by the field beside it; print it with a short script from `site/data/texts/` (the ids are in the file) or read it in the content file if it is there. All three poems are out of copyright. The rules, the brief and the notes of each exercise are in the same object; read them, because an entry must agree with what they tell the student.

## What to check, for every pair

1. The word or phrase is exactly what stands in that line of the poem, in the same order as the line, and no word of the line is missing from the list (small words included: a student with no German does not know what "und" means unless some line of the list has told them; a word explained in an earlier line need not be explained again, but say so if you think its second appearance will puzzle).
2. The dictionary form is right (the nominative singular, the infinitive, the right gender or declension where it is given).
3. The meanings are right for the word, and the list includes the meaning that the word has in this line. If the entry gives a sense for this line, that sense is right. If it parses a form (the tense, mood, case, person), the parsing is right.
4. Any note about which words belong together is right.
5. The entry does not hand the student a finished translation of the line where it need not. (An idiom that cannot be worked out from its parts may be given whole.)
6. The entry is plain to a student who has never studied the language: no grammatical term that the list has not explained, no abbreviation.
7. The entry follows the form that `wordsIntro` describes.

Check also the sentences of the brief, the rules and the notes that state a fact about the language or the poem (the meter, the number of lines, where the poem was printed).

## Rules for your own writing

- Do not copy out the poems or any translation of them, whole or in part. To point at a place, give the week, the line number and the word.
- Do not call any tool whose name begins `mcp__hearthbot__`. Do not edit any file under `/home/user/auden-course` or `/mnt/project-files`. Do not install anything.
- Write plainly. No headings beyond those asked for.

## What to hand back

Write your report to the file your task names. For each fault:

```
### week N, line L, "word"
- problem: what is wrong, in a sentence or two
- fix: the entry as it should read, in full
- weight: must (a student would be misled) or should (unclear, or inconsistent with the other entries)
```

Leave out anything that is only taste. End with one line for each list: how many pairs you checked and how many faults you found. If a list is sound, say so.

Reply with at most six lines: the counts, and the one fault you think matters most.
