# rilke: Rilke, The Journal of My Other Self, tr. John Linton (1930)

There is no proofread e-text of this translation. The text is the OCR of a scan, cleaned by rule in `build/texts/rilke.mjs` and corrected word by word from `build/texts/rilke-fixes.json`. Places are given below by part and block, or by page of the scan: `n` is the page as the scan's `_djvu.xml` counts it from 0 (`https://archive.org/details/journalofmyother00rilk/page/n<n>` shows it); the printed page number is n - 3.

## The edition and the files

- Base: Internet Archive item `journalofmyother00rilk`, the University of Florida's copy of the Norton edition (New York: W. W. Norton, copyright 1930), with the Archive's ABBYY OCR. The script reads its `_djvu.xml`, which gives every word with its place on the page (cache: `ia_rilke_linton_djvu.xml`). The text stands on 239 pages: n6 to n125 and n128 to n246, printed pages 3 to 243.
- Second witness: `journalofmyother0000rain`, another copy of the same Norton edition, OCR by Tesseract (cache: `ia_rilke_linton2_djvu.xml`). Its page for n is n + 4. The script reads eleven lines from it (below).
- Third witness: `notebookofmaltel0000rain`, the London issue (Hogarth Press, 1930, The Notebook of Malte Laurids Brigge), OCR by Tesseract (cache: `ia_rilke_hogarth_djvu.xml`). It is the same setting of type: its lines begin and end with the same words as the Norton lines on almost every page. Only its OCR was used; its page images were not fetched.
- Page images: the `_jp2.zip` of each Norton item, unpacked into `.cache/texts/rilke-pages/s1` and `s2` (leaf number = page + 1) and turned into grey JPEGs `s1j/n<n>.jpg` and `s2j/n<n + 4>.jpg`, which the checking tools read. 488 MB; the build does not need them, only the two XML files. Also cached: the ABBYY file of scan 1 (`ia_rilke_linton_abbyy.gz`), used to find italics, small capitals and doubtful letters. No request to the Archive was refused.
- The translator. The Norton title page (seen in scan 2; the Florida copy's title leaf is not among the images of scan 1, which has the half-title and the copyright page) reads: Translation by M. D. Herter Norton and John Linton. The Hogarth title page, by its OCR, names John Linton alone. `translator` is 'John Linton', as the task says. See Doubts.

## How the edition divides the book

- Two halves, each announced on a page of its own: PART ONE (n4) and PART TWO (n126). The script checks both pages and drops them; they are the `group` of the parts.
- Inside the halves the entries have no numbers and no titles. An entry ends with a centred asterisk standing in a gap of about three lines; the next entry begins flush left with its first word or two in small capitals. Paragraphs inside an entry are indented. There are 71 entries, 38 and 33. All 71 openings were looked at on the page, and the script throws at any other count. Seventy-one is the number usually given for the German; it could not be counted afresh, because the German e-text on this machine does not mark where the entries end.
- Two entries have a head, set to the right in small capitals: the first of the book (a date and a street: p1-01 block 0) and the entry that opens p1-03 (the name of the library: block 0). Kept as `h` blocks, level 3, in ordinary capitals and small letters.
- No running heads. The page number stands at the foot. The last line of the book is END OF JOURNAL, the printer's; the script checks that it is there and drops it.
- Parts: 16 sittings, eight to each half, `p1-01` to `p1-08` and `p2-01` to `p2-08`, labelled `Part One, 1` and so on, `group` `Part One` or `Part Two`. Each begins and ends at an entry break. The script chooses the grouping nearest to 4,200 words a part with none under 2,500 or over 6,000; the parts run from 3,210 to 4,748 words. Entries in each: 13, 2, 3, 3, 6, 4, 3, 4 and 5, 3, 3, 5, 4, 3, 7, 3. Between entries inside a part stands `{ k: 'h', level: 3, text: '*' }` (55 of them).
- Blocks: 499 paragraphs, 3 verse blocks, 8 `q` blocks, 2 heads. The verse is the song near the end (p2-08 blocks 12, 14 and 16: 10, 3 and 6 lines); a long line turned over on the page is one line. The script throws if any of these counts changes.

## What was dropped, and what was kept

- Dropped: the bookplate, half-title and copyright page; the two part title pages; the Archive's own notice (n5); the page numbers (the OCR read one on 233 of the 239 pages; on the other six there is nothing to drop); END OF JOURNAL; the library slips after the text.
- Dropped: one footnote, the translator's English for the French prayer that is p1-03 block 16 (about 100 words; the German gives the French alone), with its asterisk.
- Kept: the eight footnotes that are Rilke's own, part of the fiction of an edited manuscript. One says that an entry is the draft of a letter (p1-05 block 0, before the entry); six say that a passage was written in the margin of the manuscript (p1-07 block 11, p2-04 block 23, p2-05 block 10, p2-06 block 11, p2-07 block 15, p2-08 block 22, each after its paragraph); one gives the meaning of the Danish word the dying king repeats (p2-02 block 54). Each is a `q` block; the asterisks that point to them are dropped. The German e-text on this machine (Gutenberg no. 2188) has the first as a line over its entry and the last in the text itself; it has no footnotes at all, so the six marginal ones could not be checked there. They are taken to be Rilke's because they speak of his manuscript, not of the translation.
- Not kept, because the blocks cannot carry them: italics (63 lines have a word or more in italics: French phrases, titles, stressed words) and the small capitals of the entry openings.
- Quotation marks are straight, as the OCR of scan 1 gives them (the edition prints single marks, double inside single). The edition sets a thin space before `; : ? !` and round its dashes, and spaces the points of an ellipsis; here there is no space before a stop, none round a dash, and the points are closed up (three points keep the space that divides them from their word; a full stop and three points stand against it; 19 ellipses in all).
- Words broken at the ends of lines: 862. 591 are joined because the book has the solid word elsewhere inside a line; 10 keep the hyphen because the book has the hyphened word inside a line; 39 keep it by the list in `rilke-fixes.json` (`hyphens`: compounds whose joined form is not a word, settled from word lists made of the proofread books on this machine and from the edition's own way with like compounds); the other 222, which the book does not settle, are joined. Nearly all of those are plain words divided at a syllable.
- A check in the script: every letter and figure of the lines taken into the text is in a block (286,348 of them), so that joining lines and closing up marks has changed nothing but spaces and hyphens.

## Corrections

All are in `rilke-fixes.json`, each with its page, line and word; the script stops if it does not find exactly the token named.

- 182 word corrections. 66 change letters; 63 only restore an accent, cedilla or umlaut that the OCR left out; 32 change only a stop, a quotation mark or the spacing; 13 remove a speck or a pencil mark read as a word; 5 change only capitals; 3 are misprints of the edition (below). None puts in more than two tokens.
- 11 whole lines in p1-02 block 0 (the last line of n21 and ten lines of n22). A reader underlined them in pencil in the Florida copy and their OCR is rubbish; the script takes the same lines from the OCR of scan 2. They were read against the images of both copies.
- 6 asterisks at the foot of a page that the OCR did not read, where an entry ends with the page (after p1-01 block 4, p1-02 block 46, p1-03 block 7, p1-07 block 14, p2-04 block 5, p2-07 block 19). The script also stops if a page number stands further below the last line than it should without an asterisk to account for the gap.
- 3 misprints of the edition, corrected and marked `page` in the file with what the page prints: a letter dropped from an English word (p2-05 block 14), a wrong vowel in a French verb (p1-04 block 2), a circumflex left off (p1-03 block 16). To have the edition's reading back, follow the note at the head of the file.

How the misread words were found:

- The three OCR texts were collated line by line (`rilke-tools/collate.py`). They differ in 453 places; 26 of these are page numbers; each of the other 427 was looked at on the page image, cut out at the word (`sheet.py`). Scan 1 was right in 247.
- Accents: all three OCR texts drop most of them. `accents.py` looks in the page images for ink above every letter that can bear a mark, and under every c, on all 239 pages. It found again every accent the collation had given and 26 more.
- Word lists were made from the proofread books already on this machine (`wordlist.py`); every word of the text not in them, and every odd shape (figures among letters, doubled words, words run together or split), was looked at (`unknown.py`). About 200 names and foreign words (Danish, French, German, Latin) were each seen on the page, not guessed.
- Also looked at on the page: the 254 words that ABBYY itself marked doubtful and the other engines agreed on (all right); every double quotation mark, ellipsis, and dash beside a stop; every line with italics; the start of every paragraph, against the indentation in scans 2 and 3.
- The decisions are in `rilke-tools/decisions/`; `makefixes.py` turns them into the fixes file (it gives the same file again).

## Checks

- `check-text rilke`: no problems, no warnings. 16 parts, 65,970 words, 188 pages. The task expected about 66,000 words.
- The script checks the first head, the opening of the first paragraph and the close of the last.
- No block is a number, and no title or part name in capitals is left. The only figures in the text are the date in the first head and one year (p2-07 block 29).
- Samples read through `show.mjs`: the first and last blocks of the first and last parts, the heads, the notes, the verse, the French passage, the end of Part One and start of Part Two, speeches that run over several paragraphs, and ten joins of one page to the next.
- The sample. Ten pages taken at random (seed 1910): n21, n59, n63, n134, n170, n189, n194, n204, n212, n240, 2,790 words. Every line was compared with the page image word for word, stops and accents included: no difference. As that found nothing, ten more (seed 1930): n11, n64, n71, n111, n118, n173, n183, n219, n239, n245, 2,706 words: no difference. That is 5,496 words, a twelfth of the book, without a wrong word. It does not prove there is none: by the usual rule it leaves room for anything up to about 35 in the whole book, and a handful is the likelier figure.

## Doubts

- The translator's name: see above. If the Norton title page is to be followed, `translator` should name M. D. Herter Norton as well.
- The three misprints: corrected, against the letter of the rule that the source's spelling is kept. They are marked and can be put back.
- One reading that looks wrong is the edition's and is kept: in the song, p2-08 block 12, line 4, the verb after the pronoun has the modern form where the old one is expected. Both Norton copies print it so.
- Hyphens at line ends. Where the book gives no other instance the word is joined, and this edition hyphens freely, so a few of the 222 may have lost a hyphen that was the word's own: overwearied, schoolchildren, seaweed, prearrangement (twice), reborn are the likeliest.
- Names are as the edition prints them, also where that is not the German's form or the usual one: Brissac (the German has Boussac), Reventlov once beside Reventlow, Avilla, Aliscamps, Salpetrière, Heloïse, Tvaergade, Mercoeur, Nimeguen. `collidor` is meant (a mispronunciation that the text quotes).
- The Hogarth issue was used only where its OCR differed from the others, and every such place was settled by the Norton page. Whether its wording differs anywhere from Norton's was not looked into.
- The comparison of the sample was made by eye, a line of the image against the same line of the text.

## The tools

`build/texts/rilke-tools/` (Python 3, standard library; ImageMagick's `convert` for the images). They are not part of the build. `ocrxml.py` reads the three XML files; `collate.py` collates them; `sheet.py` cuts lines or words out of the page images onto contact sheets; `locate.py` finds a word form in the OCR; `fixed.py` gives the words of a page after the corrections; `abbyy.py` and `accents.py` are described above; `wordlist.py`, `unknown.py` and `hyph.py` serve the word lists; `makefixes.py` writes `rilke-fixes.json` from `decisions/`.

Nothing in `build/lib` or `build/tools` was changed, and nothing there seemed wrong. `index.note` is set, as the task asked, though the README's list of `meta` does not have it.
