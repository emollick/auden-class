# dutchman

Source: Project Gutenberg no. 31963, "The Flying Dutchman (Der Fliegende Hollaender): Romantic Opera in Three Acts".

What it is: a Metropolitan Opera libretto. The first title page in the file (after the transcriber's note) reads "Metropolitan Opera Libretto. The Original Italian, French or German Libretto with a correct English Translation. Flying Dutchman. Fred Rullman, Inc., 1425 Broadway, New York 18, N.Y. The only correct and authorized edition"; the second, "The Flying Dutchman (Der Fliegende Hollaender). Romantic Opera in Three Acts. By Richard Wagner. Published by Fred. Rullman, Inc., New York, N.Y."

Translator: not named anywhere in the file. I looked for the wording elsewhere (archive.org full-text search) and found it only in later collections that reprint Rullman's libretti; none names a translator.

Date: none in the file, neither of the translation nor of the printing. (The postal zone in the address, "New York 18", was in use only from 1943, so this printing is later than that; the translation itself reads much older. That is inference, not a date.) So `translator` is null, there is no `year`, and the index carries a `note` saying what the version is; the reader prints the note where it would print the translator. `note` is not in the README's list, but the reader already uses it.

German beside it: yes. The transcriber's note says German and English were printed on facing two-columned pages; in the file they stand speech by speech, the German indented two spaces and the English six. Only the English is taken. The script checks that no paragraph mixes the two, that no German letter stands in the English, and that the English names answer the German names one for one, in order (219 speeches each).

Dropped: the transcriber's note; both title pages and the publisher's matter; the "Argument" (the publisher's synopsis in prose, not Wagner's); the list of persons; all the German; "The End"; the transcriber's errata list. There are no music incipits in the file.

Kept from the list of persons: the one line that sets the scene, as a stage direction at the head of Act 1.

Parts: `act-1`, `act-2`, `act-3`. Scene headings are heading blocks inside the acts (3, 3 and 2 scenes; the English numbers them afresh in each act). 3 parts, 5,693 words, 780 lines, 22 pages; 219 `s`, 228 `v`, 3 `d`, 8 `h`.

Speakers: as printed, in capitals, without the full stop. Three names are printed in italic instead (the chorus heard from the Dutchman's ship in Act 1, and two choruses of the Norwegian sailors in Act 3); they are `s` blocks in the letters the libretto gives them.

Stage directions: the libretto has only two, in either language (both in Act 3). They are `d` blocks.

Verse: every English line is a line. Four lines too long for the column are turned over in the file (indented, beginning with a small letter, all in Senta's ballad); they are joined to the lines they belong to. Other indenting is not kept. Italic marks for stress are taken off.

Doubtful:
- A long speech is broken in the file wherever the German and English are set against each other in pieces (9 breaks in all). Each piece is its own `v` block. In Senta's ballad the breaks fall at the stanzas; in the Dutchman's monologue two of them fall in mid-sentence and are probably the ends of columns in the print. I have left them as the file has them.
- In Act 1 the Mate has two speeches running, each under his name. The transcriber's errata ask whether the second name is a mistake for Daland; it is not (the song is the steersman's), and the German has the same two names. Kept as printed.
- One line of the Mate's song has no stop at its end, as printed (the errata say so).
