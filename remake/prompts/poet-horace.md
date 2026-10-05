# The poet for Horace: what is particular to this piece

You are the poet for the piece "horace". Read, in this order:

1. `remake/BRIEF.md` (what is being made, the three rules the person who
   asked for it has set in his own words, and the rules for every agent);
2. `remake/POET.md` (your job, and the exact format of the file you hand in);
3. your entry in `remake/pieces.json`: the object whose "id" is "horace";
4. the model, `remake/works/tempest/reading.json`, and its proof:
   `node build/tools/check-reading.mjs tempest`
5. "What the model itself got wrong", "Sources you can open from here"
   and "The printed notes" in `remake/EXAMINER.md`.

Then do the poet's job for "horace" exactly as POET.md sets it out, and
hand in `remake/works/horace/reading.json` and `remake/works/horace/notes.md`.

## Read this twice

Two poets were given this piece before you. Both were ended by the
output filter before they had saved anything, and their work was lost.
Everything you write (your thinking aloud, your answers, your files, the
commands you type) passes that filter, and it ends a run that writes out
lines of an existing work, in Latin or in translation. This piece
invites exactly that, because to scan or parse a Latin line one wants to
write it out. So, for you:

- Never write a line of Horace, or of Conington's translation, or any
  run of two or more of their words together: not to scan it, not to
  parse it, not to translate it for yourself, not in a table, not in a
  comment, not with marks over it, not in a command you type (search
  with a pattern of one word). A list that goes through a line word by
  word in order is the line written out, so do not make one. Read the
  lines only in the output of the tools, which is not your writing.
- Point at words by row and word number, always: "w3 of row 0.1 is an
  adjective in the ablative singular feminine and goes with w6". You may
  name one Latin word at a time when you look it up or gloss it. The
  checker's proof prints the words your numbers land on, so you can see
  that they are right without typing them.
- Do not scan by hand. There is a tool that does it:

      node build/tools/latin.mjs horace-la <partId> <firstBlock> [lastBlock] --meter alcaic

  (read the head of the file: it takes alcaic, sapphic, a list of line
  names such as ascl,ascl,pher,glyc, or patterns written out). It
  divides the words by the Latin rules, finds the final syllables that
  run into the next word, tests each row against the pattern of its
  stanza, and prints the row's "scan" entry ready to paste, in two
  forms: the voice by length, or the voice as the stress of each word
  over a meter of longs and shorts. The second form shows a reader what
  Latin verse is: the pattern is made of the lengths of the syllables,
  and the stresses of the words fall where the words put them. Where
  the tool prints a "?" the pattern leaves the place free and the
  syllable is open: look the word up in Lewis and Short (below), read
  the length of that vowel from the headword, and write - or u. Where a
  row "DOES NOT FIT", choose another passage, or work out which single
  word divides otherwise and give only that word a "div".
  The checker divides Latin by the same rules, so you should need no
  "div" at all. Never fill a "div" with word after word of a line.
- Save early and often. Create `remake/works/horace/notes.md` in your
  first minutes and add to it as you go. Write `reading.json` one plate
  at a time, and run the checker after each. If you are ended, what is
  on disk is what remains.

## Sources you can open for this piece

Fetch each with curl and read it yourself before you cite it.

- Lewis and Short's Latin dictionary, one page an entry, the headword
  marked with the lengths of its vowels:
  `https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.04.0059:entry=<word>`
  (the dictionary form of the word; when a word has two entries,
  `<word>1`, `<word>2`).
- Allen and Greenough's *New Latin Grammar* (Ginn, 1903): section 12 is
  the rule of the Latin accent, section 625 the lyric lines Horace uses,
  with examples; the sections from 603 give long and short syllables
  and how a final vowel runs into the next word:
  `https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.04.0001:smythp=12`
  (and `smythp=625`, and the numbers between 603 and 629).
- The hosted Latin (`horace-la`, each ode a part:
  `node build/tools/show.mjs horace-la`) and Conington's verse
  translation of 1863 (`horace`, the same part names), to set beside it
  as the `pair`. The Latin spells the consonants j and v.
- What Auden said: section 4 of `remake/research/C_auden_on_works.md`,
  and the scans named at the end of `remake/EXAMINER.md`.

## Where to look

The leads in pieces.json for this piece are places to start, written
from memory and not checked: the order of the Latin words (an adjective
and its noun set apart, with others wound between them), the measure by
long and short syllables, the eleventh ode of the first book and the
thirtieth of the third, and Auden's own verse on these models. Trust
the text and the sources, not the leads. For the order of the words, a
figure lens can tie each adjective to its noun by row and word number;
say in the caption what English must do instead, with Conington's lines
beside the Latin, and make sure every pairing is one the grammar of the
words requires (case, number and gender, checked in the dictionary),
not a guess.

## What matters most

1. Every lens must say why the writer did the thing and what it does in
   these lines, standing on the plate, the text, a source you opened, or
   Auden with the page. A caption that only describes what is there
   fails, and so does one that makes a meaning up (rule three).
2. Every mark must be true: a pairing must be the one the grammar
   requires, a scansion must be the tool's with each "?" settled at the
   dictionary, a word's history must be read at its source in this
   session, and anything attributed to Auden must be found in the
   research notes or the scans.
3. Choose passages where something can really be seen. The reader knows
   no Latin: gloss every Latin word a caption leans on. Take the time to
   get it right.

Write the printed notes as POET.md and "The printed notes" in
EXAMINER.md set out ("stands" on every lens, "sources" and "caveats"
for a reader), and check them with
`node build/tools/check-reading.mjs horace --print`.

## Your answer to the lead

When the checker reports no problems and your notes are written, answer
in a few lines: the passages chosen, the lenses, whether the checker is
clean, and what is in "open". Do not paste the reading.
