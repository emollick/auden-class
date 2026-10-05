# magic-flute

Source: Internet Archive, item `magicflutediezau00moza` (https://archive.org/details/magicflutediezau00moza), a copy in the University of Connecticut library. The script reads the Archive's plain OCR text, `magicflutediezau00moza_djvu.txt`, cached as `.cache/texts/ia_magicflutediezau00moza_djvu.txt` (90,728 bytes).

What it is: an opera libretto, Italian and English. The title page reads "The Magic Flute, Die Zauberflöte. An Opera, in Two Acts, the Music by Mozart, as represented at the Royal Italian Opera, London, and the Academy of Music, New York. Published by F. Rullman, Theatre Ticket Office, 111 Broadway, New York." The Italian pages are headed "Il Flauto Magico" and the English pages "The Magic Flute".

The version: this is the Italian version of the opera, with sung recitative, and the English follows the Italian line for line. So the spoken dialogue of the German is cut or turned into short recitative, Monostatos's air stands at the end of the first scene of Act 2, Papagena as the old woman is called "Woman", and the Speaker is called the Orator in the directions. The index note says that the text follows the Italian version.

Translator and date: the book names no translator and bears no date, so both are null. The Archive's catalogue gives 1800, which is a placeholder and not a date: the title page names the Academy of Music in New York, which opened in 1854.

The two languages: Italian on the left-hand pages, English on the right-hand pages, as in `orpheus` and `don-giovanni`, and told apart the same way by the shared helper (`orpheus-giovanni-flute.lib.mjs`): pages cut at the running heads, each page's language counted from its words, and the script throws unless the count agrees with the head, the pages alternate, and no line or run of lines on an English page reads as Italian. Ten English pages (the libretto lies in file lines 142 to 3676).

Dropped: the library's slips and stamps, the title page, the list of persons, the prose Argument, all the Italian, the running heads and page numbers, "End of Act I.", and the pages of printed music after the text (airs with their Italian words). The book has no "The End" after the last chorus.

Parts: `act-1` and `act-2`. Scenes are level 3 headings as the book numbers them: 16 in the first act, 14 in the second and then one headed "Scene the Last". 2 parts, 6,354 words, 21 pages; 31 `h`, 163 `d`, 260 `s`, 172 `v` (601 lines), 123 `p`.

Blocks:
- Names. The book sets the names before the speeches in italic and shortens seven of them (Tam., Pap., Pam., Papa., Mon., Sar., Chor.). The script writes them out and puts them in capitals, like the other libretti. It knows 41 forms of name and throws on any other line that looks like a name. Where a brace joins two or three names beside lines sung together, the `s` joins them with "and".
- Two words for two singers. In four places the book sets two words one above the other inside a line that two persons sing at once (Act 1, Scene 16; Act 2, Scene 7 twice; Act 2, Scene 14). The script gives the two words side by side with a stroke between them, the upper word first.
- Three speeches over which the book prints no name are given one (table `NAMED`), so that the words are not laid to the speaker before: Monostatos after a line of Pamina and Papageno (line 1528), the chorus behind the scenes (1568, where the Italian page has the name), the three Boys who begin the second finale alone on the stage (2955).
- The recitative that the book sets as prose is `p` (table `PROSE`, 13 stretches); everything else is `v`, a printed line to a line. 44 lines that were turned over in print, or that carry on a direction or a name broken at the edge of the column, are joined by a table of line numbers.
- Directions. Every bracketed phrase inside a speech is a direction (the book sets them in italic) and is taken out as a `d`: 104 of them, 78 in square brackets, most of which the book does not shut, and 26 in round. The script checks the number. Scene descriptions, lists of persons and entrances printed without brackets are `d` (table `DIRECTIONS`, 33).
- Over nine numbers the book sets their first words in capitals between inverted commas. They are `d`, with the inverted commas kept and the letters given the case they have in the first line of the song. The kinds of number in italic (Air, Duet, Finale, Recitative, Air and Chorus, Duet and Chorus) are `d`.
- New blocks inside a speech: the book leaves a space above a line in only three places (`STANZAS`), found by measuring the distance between the lines on the page images.

Corrections: this is a poor scan and hardly a line of the OCR text was right. Every English line of the file was read against its page image (downloaded as `magicflutediezau00moza_jp2.zip`) and set down in a working file as the page has it; a tool then reduced the differences to rows of wrong string and right string. `FIXES` has 824 rows on 624 lines (one row is the head of an Italian page, which the script needs to find the pages). After that the corrected text was read against the page images a second time, column by column. 47 lines are left out: page numbers and stray marks, and the names that the machine read in blocks apart from their speeches (the rows of `FIXES` put each name at the head of its own line). One place where the machine read lines out of order is put back (`MOVES`). The Archive's other text layers come from the same OCR, so there was no second machine reading to compare.

Supplied, because the scan or the printing does not show it:
- On one page (Act 2, Scene 7) the first letter or two of about fifteen lines is lost in the gutter of the scan. Each is certain from the rest of the word.
- At the outer edge of several pages the type is worn: the last letters of a few directions and their closing stops are supplied.
- Line 712: the first word of the line, "I", did not print. The sense and the line two above it give it.
- Line 2218: a comma after "entreated", where the book has an empty space.

Printer's slips emended (`MISPRINTS`, 5 rows, all seen on the page images in the book itself): "Scena" for "Scene" over three scenes (lines 769, 1186, 1484); a round bracket shut with a square one (2281); and "Sar. & Pam." for "Sar. & Tam." beside words that are spoken to Pamina (2598; the Italian page has Tamino there). Empty the table to have the book as printed.

Doubtful readings:
- Lines 1046, 1162 and 2534: after a space the page shows only a point, or only a comma. Read as a colon (1046) and as semicolons (1162, 2534) of which one part did not print, since this printer sets a space before those marks and none before a comma or full stop.
- Line 2197: the first letter of the name is broken (the OCR has "Fam."). Read as Pam., which the sense and the Italian page give.
- Line 2621: a point at the worn edge inside a direction, where a clause follows. Read as a comma.
- Line 3426: the mark after "last" is blotted. Read as a comma.
- Worn commas that look like full stops in the middle of a clause are read as commas.

Kept as printed, though odd:
- No mark at the end of a line or speech where one is wanted (lines 1190, 1444, 1526, 1531, 2230, 2331, 2998, 3043, 3057, 3094, 3502), and a full stop where the sense runs on (1175, 1460, 2238, 2955, 3013).
- A question mark after an exclamation (2210; the Italian has an exclamation mark).
- "The Queen of the Temple" in a list of persons (691; the Italian has the same).
- "Sar. & Pam." beside a line at 2586 where Tamino would be expected. The Italian page has Pamina too, so it is left, unlike 2598.
- "then Papageno" in the persons of Act 2, Scene 7 (2546), where the Italian has Pamina, and it is Pamina who is led in.
- "dressed like Papagena" (2944; the Italian has the same), and "After Pamina." for "afterwards Pamina" (3054).
- "on searching the plain" (3331). The Italian says that they have reached the plain, so this is probably a slip for "reaching"; it is left because that is not certain.
- A name shortened inside a direction (2276).
- The spellings "oftimes", "nob'ly", "jas'mine", "your's", and "forever" beside "for ever".

The shared helper: `lastChecks` in `orpheus-giovanni-flute.lib.mjs` was given two options for this book, `heading` (for "Scene the Last") and `passOver` (for "&c."). The defaults leave `orpheus` and `don-giovanni` as they were; both were rebuilt and give the same counts.

Checked: every English line compared with its page image twice; the whole text then read through `show.mjs`; some forty odd places looked up again on enlarged images and found to be as printed; every word not found in the other English texts of the site looked at (46, all real words or names). check-text: no problems, no warnings.
