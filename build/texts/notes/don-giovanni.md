# don-giovanni

Source: Internet Archive, item `dongiovannidonju00moza` (https://archive.org/details/dongiovannidonju00moza), a copy in the Brigham Young University library. The script reads the Archive's plain OCR text, `dongiovannidonju00moza_djvu.txt`, cached as `.cache/texts/ia_dongiovannidonju00moza_djvu.txt` (140,344 bytes).

What it is: a Metropolitan Opera House libretto, Italian and English. The title page reads "Don Giovanni (Don Juan). A Grand Opera in Two Acts. Music by Wolfgang Amadeus Mozart. Book by Lorenzo Da Ponte. Published by Fred Rullman, Inc., New York, N. Y." The English pages are headed "Don Juan" and call the persons Juan, Octavio, the Commandant.

Translator and date: the book names no translator and bears no date, so both are null. The cover names Gatti-Casazza as manager and an advertisement at the back quotes a singer of the early 1930s, which dates this copy and not the translation.

The ending: this printing stops where the Don is carried off (the chorus of spirits, then "The End"). The last scene, in which the others come back, is in neither language. The index note says so.

The two languages: Italian on the left-hand pages, English on the right-hand pages, as in `orpheus`, and told apart the same way by the shared helper (`orpheus-giovanni-flute.lib.mjs`): pages cut at the running heads, each page's language counted from its words, and the script throws unless the count agrees with the head, the pages alternate, and no line or run of lines on an English page reads as Italian. 22 English pages (file lines 327 to 7625).

Dropped: the cover, the title page, the prose Argument, the list of persons, all the Italian, the running heads and page numbers, "End of Act I." and "The End.", and the advertisement after the text.

Parts: `act-1` and `act-2`. Scenes are level 3 headings as the book numbers them: 17 in the first act, 14 in the second. The second act has no Scene XI: X is followed by XII in the Italian and in the English alike, so it is the book's numbering and nothing is missing. 2 parts, 9,771 words, 41 pages; 31 `h`, 209 `d`, 646 `s`, 546 `v` (1,264 lines), 139 `p`.

Blocks:
- Names over the speeches are `s`, in capitals (the book has capitals and small capitals). A word in brackets after or under a name ("aside", "to Leporello") is a `d` after the `s`.
- The book marks what two, three or four sing together with "A 2.", "A 3.", "A 4." in italic. Where the singers' names follow, the mark is a `d` before them; in the one place where no names follow (the end of the duet in Act 1, Scene 3) it is the `s`. "Together" and "All" are the book's own labels.
- The recitative of the first act, up to the quartet in Scene 10, is set as prose in the book and is `p` (table `PROSE`); everything else is `v`, a printed line to a line. 80 lines too long for the column were turned over in print, or are names and directions broken in two, and are joined by a table of line numbers.
- Directions in brackets inside a speech are taken out as `d`, with the stop the book sets after the bracket. Scene descriptions and the lists of persons under the scene headings are `d` (table `DIRECTIONS`, 41). The titles over the numbers (Air, Duet, Trio, Quartett, Sestette, Finale, Recitative and Duet), which the book sets in small capitals, are `d` in that form.
- Asides. The book prints directions in italic and words spoken aside in roman, both in brackets, and the OCR text cannot tell them apart. The script takes a bracket as spoken if it has a word of the first or second person or ends with ! or ?, with two exceptions listed by line; spoken asides keep their brackets in the text. All 77 brackets were looked at on the page images: 11 are spoken, 66 are directions, and the script checks those two numbers.
- Passages left out in performance. The book marks four passages (two of prose, two of verse, in Act 1, Scenes 7, 9 and 10) with inverted commas down the margin. The words are kept and the marks are dropped (table `OMITTED`), so the text does not show which passages they are.
- New blocks inside a speech (an air after recitative, a new strophe, a new paragraph) are listed by line number (`STANZAS`, 8). They were found by measuring the space between the lines on the page images and looked at one by one.

Corrections: 86 rows in `FIXES`, every one checked against the page image (downloaded as `dongiovannidonju00moza_jp2.zip`): 9 running heads, and 77 in the text (w read as zv, a curly bracket for a round one, capitals for small capitals in three names, digits for letters, stray marks, damaged letters, lost stops). 44 lines of page numbers and stray marks are left out. In six places the machine read the lines of a page out of order and they are put back (`MOVES`).

Printer's slips emended (`MISPRINTS`, 8 rows, all seen on the page images in the book itself): a stop for a comma in a list of persons (line 664), "on oath" for "an oath" (754), "Do your hear" (1063), "not row depart" (2430), "air be moves" (2853), "gtntlemen" (5961), "dont" (5967), "Heaven's!" as an exclamation (6607). Empty the table to have the book as printed. One more change of the same kind is in its own table (`REPEATED_MARKS`): the words on the statue stand in single inverted commas, and the opening comma, which the book repeats at the head of their second line, is given once.

Doubtful readings:
- Line 1141: the mark after "her" at the end of a speech is damaged. Read as a full stop (the OCR has a comma).
- Line 7587: the mark after "No" is read as a comma (the OCR has a full stop; a small letter follows).

Kept as printed, though odd: "Promise me not be in a passion" (line 781); "Ah, were not" (3184); "The moments full of danger" (3590); "Some comfort!" where sweetmeats are offered (3865); "Sadrina" (3886); "her's", "your's", "dependant", "Prythee"; a full stop where the sense runs on (1364, 2865) and after a question (4883); a speech with no stop at its end (7556); "Don Giovanni" for Don Juan in one list of persons (3598); the direction that sends Donna Anna off with Leporello (5992).

Checked: every English page compared with its page image; the whole text then read through `show.mjs`; some thirty more odd places looked up on the images and found to be as printed; every word not found in the other English texts of the site looked at (80, all real words or names). check-text: no problems, no warnings.
