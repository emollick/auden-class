# Brief for bringing books in (shared by all workers)

You are bringing public-domain books into a course web app at
/home/user/auden-course. Students will read these books in the app and
be tested on passages cut from them, so the text must be complete and
exact.

Read first, in this order:
1. /home/user/auden-course/build/texts/README.md  (the contract: follow it exactly)
2. /home/user/auden-course/build/lib/gutenberg.mjs (helpers)
3. /home/user/auden-course/build/texts/dante.mjs   (a worked example)

Source files already downloaded are in
/tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/research/texts/ .
For each book: copy its source file to /home/user/auden-course/.cache/texts/<name>
(name it pg<number>_<short>.txt for Project Gutenberg files) and have your
script call fetchText('<name>', '<url>') with the plain-text URL
https://www.gutenberg.org/cache/epub/<number>/pg<number>.txt so that the
build can fetch it again if the cache is empty. Use the Gutenberg ebook
page https://www.gutenberg.org/ebooks/<number> as index source.url and
'Project Gutenberg, no. <number>' as source.name.

For each book write /home/user/auden-course/build/texts/<textId>.mjs
exporting run(), run it, then run check-text and look at samples with
show.mjs until: check-text reports no PROBLEMS; every warning is
understood; the count of acts, scenes, chapters or poems is what the work
is known to have; the first and last blocks of the first and last parts
are the true beginning and end of the work; nothing from an editor's
introduction, notes or glossary has leaked in; and speeches in plays are
attached to the right speakers. Look at a dozen samples spread through
each book, including the awkward places (songs, letters, lists, shared
verse lines, stage directions inside speeches, chapter openings).

Make your script throw an Error if the structure it finds is not the
structure expected (for example: "expected 135 chapters, found 134").

Rules:
- Node 22 standard library only. Do not install packages.
- Write only inside /home/user/auden-course/build/texts/,
  /home/user/auden-course/.cache/texts/ and
  /home/user/auden-course/site/data/texts/<your textIds>/ .
  Do not edit build/lib/gutenberg.mjs or the tools; if a helper is
  missing, write it in your own script. If you think the lib or a tool is
  wrong, say so in your notes.
- Do not call any tool whose name starts with mcp__hearthbot__.
- Do not paste passages of the books into your messages or notes.
  Look at small samples through show.mjs when you need to.
- Never disable TLS verification or change proxy settings. If a download
  is needed and fails with 403/407, stop trying that host and say so.
- Keep notes in /home/user/auden-course/build/texts/notes/<textId>.md:
  source, edition, translator and date, what you dropped, how parts are
  divided, the counts, anything doubtful. A few lines per book.
- Final reply: at most 200 words. Per book: parts, words, pages, the
  structure check, what was dropped, doubts. No book text.
