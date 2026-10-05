# fidelio

Source: Internet Archive, item `cu31924021639509` (a scan from Cornell University Library), the plain OCR text `cu31924021639509_djvu.txt`. Not Project Gutenberg: the file is raw machine reading of the page images.

What it is: "Fidelio. Grand Opera in Two Acts. The Music by Beethoven. Published by F. Rullman, at the Theatre Ticket Office, 111 Broadway, New York." The cover reads "Grand Opera under the direction of Mr. Heinrich Conried. Libretto. The original Italian, French or German libretto with a correct English translation." German and English.

Translator: not named anywhere in the book.

Date: none in the book. I looked at the cover and the title page in the page images: neither bears a year. The "1903" in the file is the library's shelf mark (and the Archive's record repeats it). Conried managed the Metropolitan Opera from 1903 to 1908, which agrees with it, but that is inference. So `year` is null, and the `note` says where the 1903 comes from.

The two languages: the book prints a page of German (two columns) and then a page of English (two columns); the file gives the columns one after another. The script tells the English lines from the German by their words (common words of each language, counted block by block; a block the words do not settle takes the language of the blocks round it in the same column), and throws if a block holds both or cannot be placed. Four places are settled by hand in the table `ASSIGN`. While writing the script I compared its answer with the page each line stands on (English on the even leaves of the scan): they agree on every line.

Dropped: the cover and publisher's pages, the list of persons, the prose Argument, all the German, the running heads and page numbers (and eight stray lines that are the wreck of running heads or dirt on the page, table `DROP`), "The End". There is no printed music.

Parts: `act-1` (12 scenes) and `act-2` (8 scenes); the scene headings are `h` blocks inside the acts. 2 parts, 7,360 words, 16 pages; 370 `s`, 391 `p`, 45 `v`, 212 `d`, 20 `h`.

Verse and prose: I follow the print. The spoken dialogue is prose (`p`, one block for each printed paragraph). Of the sung numbers the book sets some in lines, the long ones turned over and indented: those are `v` (ten stretches, table `VERSE`; turned lines are joined). The rest of the sung text it sets as paragraphs like the dialogue, and they are `p`. Nothing in the book marks which paragraphs are sung, so neither do I.

Speakers: in capitals, without the stop. Stage directions: what the book puts in brackets, without the brackets, and eight lines it sets without brackets (names of numbers such as the arias, and one unbracketed direction). A direction in the middle of a speech divides the speech, as in the plays; a stop that the book puts after the closing bracket is given to the words before the direction. Names set in small capitals inside directions are in ordinary letters.

Corrections: 118 misread places mended by the table `FIXES` (line of the file, wrong, right), 150 misread names by the table `NAMES` (29 misreadings of the seven names, which the book sets in small capitals), 3 slips of the printer by `MISPRINTS` (a stop for a comma, a name with a letter too many, two letters transposed in one word). 136 words broken at the end of a line are joined; three hyphens that belong to their words are kept. Every word not found in the other English texts of the course was looked at (54 words: all right as they stand; list `KNOWN`). Where the context did not settle a reading I looked at the page image; about forty places.

Kept as printed (they look like errors and are not the scan's): the governor's name with one z twice in directions; the old spellings ("intreat", "goaler", "Duett", "Arie" once beside "Aria", "pick-ax", "every thing" and "back ground" in two words); one dash with a space before it at the end of a broken-off speech; some sentences of odd English (the translation is a rough one). I checked these on the page.

Doubtful:
- Line 6934, the last direction but one: the mark that ends it is a blot on the page; read as a full stop.
- Line 3269: a mark after a word read as a comma (the sentence goes on).
- The first speech of Act 2 has no name over it in the English (the German has). It is Florestan's; the name is supplied by the table `UNNAMED`.
- The comparison of the order of speakers in the German and the English, scene by scene, could not be made to prove anything, the German names being too badly read. That no English line is lost rests on my reading of the whole text, which runs without a gap.
