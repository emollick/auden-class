# tristan

Source: Project Gutenberg no. 16250, "Tristan and Isolda: Opera in Three Acts".

What it is: the libretto of the Oliver Ditson Company, Boston. The two title pages at the head of the file (after the transcriber's note) read "Grand Opera Librettos. German and English text and music of the leading motives. Tristan und Isolde (Tristan and Isolda) by Wagner. Oliver Ditson Company, Boston; Chas. H. Ditson & Co, New York; Lyon & Healy, Chicago" and "Tristan and Isolda, Opera in Three Acts, by Richard Wagner", with the same imprint.

Translator: not named anywhere in the file (the script throws if the word turns up). From outside the file: the wording is that of the translation by H. and F. Corder. I compared the file with the OCR of the Breitkopf & Härtel vocal score, whose title page names them (archive.org `tristanisolda00wagn`): that OCR is very broken, but about a third of the longer lines stand in it letter for letter and where it is legible it agrees word for word. That is an identification by comparison, not a statement of the libretto.

Date: none in the file, neither of the translation nor of the printing, and I did not find one I could verify. So `translator` is null, there is no `year`, and the index carries a `note` (as for the Dutchman; `note` is not in the README's list, but the reader prints it where the translator would stand). The note names the Corders: take that clause out if you want only what the libretto itself says.

German beside it: in the book, yes (two columns). The file leaves it out; its transcriber's note says so.

Dropped: the transcriber's note; both title pages; "The Story of Tristan and Isolda" (the publisher's synopsis); the Dramatis Personae; the title line over Act 1. The file has none of the libretto's music.

Parts: `act-1`, `act-2`, `act-3`. Scenes are heading blocks inside the acts: 7, 3 and 4, as this libretto numbers them (the score has 5, 3 and 3; the scan of the libretto has the same headings as the file). 3 parts, 9,671 words, 1,909 lines, 55 pages (act-1 735 lines, act-2 563, act-3 611); 282 `s`, 315 `v`, 206 `d`, 14 `h`. Every act opens with its scene; the last block is the fall of the curtain. The script checks that the words of the blocks are the words of the file from Act 1 to the end, plus the words supplied (below).

Speakers: small capitals in the book, capitals in the file, and so here; the file writes AE for the ligature. The script holds the table of names with the number of speeches of each (281 in the file) and throws on any other. All 281 were confirmed on the scan.

Directions: the text inside the brackets, italic marks off, names in capitals as the file has them; a full stop standing outside the closing bracket is dropped. 90 stand alone, 108 beside a name (after the `s` block), 8 at the end of a verse line (the direction follows that line and the speech goes on in a new `v` block). 29 times a speech goes on after a direction without its name being repeated.

Verse: each line of the file is a line; indenting is not kept. The libretto begins a speech on the line of the name and turns the end of that line over when there is no room; the file keeps eight such turned ends as separate lines, and they are joined again (seven are set deeper in the scan; the eighth is one line in the German and by the sense).

Checked against the book. The file was compared with a scan of the Ditson libretto (archive.org `cu31924017539655`): every word through the scan's OCR, and the page images wherever the two disagreed or the OCR failed; the punctuation wherever the OCR and the file do not show the same mark. The file seems to follow another impression than the one scanned, so I kept its readings and mended only what is plainly wrong in it, where the scan shows the right reading. Each mend is in a table in the script and throws if the place is not found exactly once:
- In the directions, 6: two words misread, a space wanting, two commas that cut a phrase in two, a full stop wanting at the end.
- In the verse, 8: three misreadings; a hyphen (a word divided between two lines) given as a dash; three lines that end a sentence without their mark (one of these marks is broken in the scan, and one is followed there by a blotted dash; the Rullman libretto, below, has them clearly); and one line that is two lines run together, with two words lost.

Kept as the file has them where the scan differs: one word (the scan has an older word for "country"); two words and two names that the scan misprints and the file has right; a capital; six marks of punctuation where the file's reading is possible (a colon for a semicolon and the reverse, a comma wanting, three commas that the scan lacks or has broken). Three misprints that the file and the scan share are left (a name misspelt once in a direction, an apostrophe misplaced, and one word in a direction).

Accents: the file is plain ASCII. The book marks a sounded -ed with an accent in a few words (and has one diaeresis); those marks are not in the file and not in the text.

Supplied from a second source: 59 lines and one name. The Ditson libretto prints two passages only as music, with the words under the notes: the young sailor's song that opens Act 1, and the duet in Act 2, scene 2. The file has neither; at those places it has the sailor's name with nothing after it, and two directions with nothing between them (`build()` checks exactly that). Since nothing of the work may be lost, `supply()` takes the words from another libretto that prints the same translation and sets both passages as verse:
- The source: the libretto published by Fred Rullman, Inc., New York ("Metropolitan Opera House ... Libretto. The original Italian, French or German libretto with a correct English translation"), archive.org `tristanisoldeope00wagn`, cached as `ia_tristanisoldeope00wagn_djvu.txt`. It names no translator and bears no date (the archive's catalogue says 1890; the cover names a general manager of 1908 to 1935). It is another setting of the same English text: the directions round both passages are the same, and it even shares a misprinted name with the Ditson.
- What is taken: the song, 14 lines, after the sailor's name and its direction; the duet, 45 lines under the name "Both" (an `s` block BOTH), between the two directions. 188 words and the name.
- The Ditson's own words under the notes (scan pages 6 and 25 to 27) were read against these lines. The words are the same, with two exceptions. In the song the Rullman misprints one word (it breaks the rhyme); the Ditson's word is given, which is also what both libretti have where the sailor sings the lines again. In the duet the Ditson repeats one phrase under the notes (in the German too) where the Rullman has a line of its own; the vocal score has that line, and it is kept.
- Spelling and punctuation are the Rullman's (it prints -ed where the Ditson's music has 'd), except that one full stop in mid-sentence stands as the comma the Ditson has, and the dash is written as the file writes dashes.
- The OCR is mended in 11 lines (the table is in the script). Each was read on the page image, and on a later impression of the same setting (archive.org `bwb_S0-AUM-168`) where the scan is faint: four of the eleven are marks at line ends that barely printed.
- The script checks that the eight lines of the song which the file does have (the repeat in scene 2) are the same lines in the passage supplied.
- To leave these passages out, make `run()` call `build()` instead of `supply(build())` and reword the `note`.

Doubtful:
- The supplied passages, above: they are not from the Gutenberg file, and four line-end marks in them rest on faint print.
- The Ditson's music says which of the two sings some lines of the duet; the Rullman gives it all to both, and so do I.
- The attribution to the Corders and the missing date, above.
- The scene numbers are this libretto's, not the score's.
- Where both the file and the scan's OCR lack a mark, I would not have seen it.

Check-text: no problems, no warnings.
