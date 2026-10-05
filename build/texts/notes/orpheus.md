# orpheus

Source: Internet Archive, item `orfeoeeuridicely00glucuoft` (https://archive.org/details/orfeoeeuridicely00glucuoft), a copy in the University of Toronto library. The script reads the Archive's plain OCR text, `orfeoeeuridicely00glucuoft_djvu.txt`, cached as `.cache/texts/ia_orfeoeeuridicely00glucuoft_djvu.txt` (43,106 bytes, the size the Archive listed on 2 Oct 2026).

What it is: a Metropolitan Opera House libretto, Italian and English. The title page reads "Orfeo e Euridice. A Lyric Play, in Four Acts. Music by Gluck. The Libretto Edited and Translated by Manfredo Maggioni. Published by F. Rullman, New York." The English running head is "Orpheus and Eurydice", which is the title given in the index.

Translator and date: Manfredo Maggioni, from the title page. The title page bears no date, so `year` is null. A Metropolitan programme for 29 November 1939 is bound into this copy, which dates the copy and not the translation; the Archive's catalogue date "[190-]" is a cataloguer's guess. With a translator and no year the reader prints "Translated by Manfredo Maggioni" (its string for an undated translation).

The two languages: Italian on the left-hand pages, English on the right-hand pages, each page with its running head and two columns. The script cuts the file into pages at the running heads, tells each page's language by counting common English and Italian words, and throws unless that agrees with the head, the pages alternate, and no run of lines on an English page reads as Italian. Six English pages (file lines 315 to 1890).

Dropped: the cover, the programme, the title page, the list of persons, all the Italian, the running heads and page numbers, the four lines that end the acts ("End of the First Act" and so on, "End."), and the pages of printed music and the advertisement after the text. This book has no prose Argument.

Parts: `act-1` to `act-4`. Scenes are level 3 headings inside the acts (4, 1, 4 and 3 scenes). 4 parts, 2,600 words, 437 lines, 13 pages; 12 `h`, 42 `d`, 71 `s`, 97 `v`.

Blocks: names over the speeches are `s` in capitals as printed. A word in brackets after a name ("alone", "aside") is a `d` after the `s`. Scene descriptions, the lists of persons under the scene headings, the bracketed directions and the titles "Ballet of the Furies", "Hymn to LOVE" and the like are `d`. All the sung text is `v`, a printed line to a line; 23 lines too long for the column were turned over in print and are joined to their lines by a table of line numbers. The book has no blank lines inside a speech: it shows an air, and each new strophe of one, by setting lines further in or out. The OCR text loses that, so the 23 places where a new block begins inside a speech are listed by line number in the script (`STANZAS`), found from the positions of the lines on the page images and looked at one by one.

Corrections: 21 rows in `FIXES`, all checked against the page images (downloaded as `orfeoeeuridicely00glucuoft_jp2.zip`): the digits 0 and 1 for the capitals O and I (10 lines), a broken "of" twice, a stray capital, a stray apostrophe, two marks in broken names, one running head, and three rows that put right a pair of names joined by a brace in the margin. One place where the machine read the foot of the first column after the top of the second is put back in order (`MOVES`).

Printer's slips emended (`MISPRINTS`, 3 rows): "you" for "your" in Orpheus's speech to the deities (line 599), a full stop for a comma after "Oh" (line 1501), and a missing full stop at the end of a scene description (line 975). The page images show all three in the book itself. Empty the table to have the book as printed.

Emendation of a name (`EMENDED`): at the head of Act 3, Scene 3 the book sets the persons of the scene where the speaker's name should stand. The Italian page has the persons and then the name of Orpheus. The script gives the persons as a direction and supplies the name ORPHEUS.

Kept as printed, though odd:
- "caschet" in the direction at the end of Act 1 (line 714). The first scene has "casque". Doubtful which word was meant, so it is left.
- A full stop where the sense wants a comma in the last chorus (line 1881).
- "o gods" with a small o (line 1552).
- Small capitals for names inside directions come out as full capitals.

Checked: the whole English text read through `show.mjs` against the six page images; the names over the speeches on the English pages follow the names on the Italian pages in the same order; every word not found in the other English texts of the site was looked at (12, all real words but "caschet"). check-text: no problems, no warnings.
