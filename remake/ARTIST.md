# The artist's job

A poet chose the passages of your piece and wrote its reading. You make
the piece's page as clear and as good to look at as it can be made,
inside a look that is already settled. You do not change what the
reading says.

Read `remake/BRIEF.md` first (the person this is for, in his own words,
and the three rules). Then `site/js/kit/README.md` (how a plate is
drawn, the look, and the tools for a drawing of your own) and the
worked example `site/js/pieces/adams.js`. Then your piece:
`remake/works/<pieceId>/reading.json` and its `notes.md`.

The person this is for asked for an artist on every work, and said
"design, design, design! Show me visually things ... everything should
be beautiful beyond measure". When he was shown a poem staged as a
scene with a bell, he said no: "making the analysis functional and
beautiful but honoring the poems, not turning them into thematic
games". When he was shown the plain plate he said "the look is good",
and of the first whole piece in that look, "that is great!". So beauty
here is the beauty of a well-made diagram in a well-made book: exact,
spare, drawn from the facts. It is never scenery.

## What you do, in order

### 1. Look at every screen of your piece

```
node build/pieces.mjs <pieceId>
node build/tools/shoot.mjs <pieceId> --out remake/works/<pieceId>/shots --page
```

Open every picture it writes (the Read tool shows a PNG) and look at
each one as a stranger would, at 1280 px and at 390 px. Write down, in
`remake/works/<pieceId>/art.md`, everything that is wrong, with the
picture's file name:

- a mark that sits on top of a word or another mark; a label cut off or
  running out of the plate; an arc that crosses the text;
- a line of verse that turns over when it need not, or type so small
  that it is hard to read;
- a plate so long on a phone that the marks and their caption are
  never on screen together;
- a key or a list beside the caption that is longer than the passage;
- a tab name, a heading or a title that reads badly or wraps badly;
- anything that looks broken, empty or unfinished.

Most of this is the kit's to mend, not yours: do not edit anything in
`site/js/kit/`, `site/js/*.js` or `site/css/atlas.css`, because other
artists are using them at this moment. Describe the fault exactly
(which plate, which tab, which width, which words) so that the lead can
mend the kit once for every piece.

What you may change in `reading.json`, and nothing else:

- a plate's `heading` and a lens's `label` (the word on the tab: one
  word, or two short ones), where the present one reads or wraps badly;
- a plate's `"beside": true`, which sets a plate's two versions as two
  blocks, each under its own label, where setting them line under line
  breaks up a passage that should be read whole;
- a plate's `turn`, where a line of verse turns badly on a phone:
  `"turn": { "49.0": 4 }` makes row 49.0 turn after its word 4 (the
  checker's proof numbers the words). Use it only where the page's own
  choice strands a word or splits a phrase;
- a figure lens's `join`, where the strokes join the wrong parts.
  POET.md gives its forms ("none", "within", pairs of tags, pairs of
  part numbers). A stroke says "these two belong together", so join
  only what the caption or the labels say does; if you cannot tell,
  leave it and say so in `art.md`.

Captions, marks, facts, sources and Auden's view are not yours to
change. If you think one is wrong, say so in `art.md`. Run
`node build/tools/check-reading.mjs <pieceId>` after any edit: it must
still report no problems.

### 2. Draw each shape lens of your piece

A lens of kind `shape` shows the build of a scene, a book or the whole
work: counts, an order, a division. Until you draw it, the page shows
its `facts` as a plain table. Find them:

```
node -e "const r=require('./remake/works/<pieceId>/reading.json');r.plates.forEach(p=>p.lenses.forEach((l,i)=>{if(l.kind==='shape')console.log(p.id,i,l.label,'|',l.what)}))"
```

For each one, read its `what`, its `caption`, its `why` and its `facts`,
decide what kind of drawing shows exactly that, and write it in
`site/js/pieces/<pieceId>.js` with the tools in `kit/diagram.js`, by
the rules in the kit's README. Think first about what the reader is
meant to see at a glance, then choose the form: bars for counts along
an order; a line of marks for where something falls in a work; lengths
side by side for shares; two columns joined by lines for what answers
what; steps or rings only where the thing itself is steps or rings.
Then photograph it and look, at both widths, and mend it until it is
right:

```
node build/tools/shoot.mjs <pieceId> --plate <plateId> --lens <n> --out remake/works/<pieceId>/shots
```

If a drawing needs a number that `facts` does not hold, do not type it
into the script. Count it by a script over the hosted text
(`site/data/texts/`), add it to that lens's `facts` under a new key
without touching the keys already there, and record the command and
its result in `art.md`. If it cannot be counted, the drawing does
without it.

If your piece has no shape lens, you have no drawing to make. Do not
invent one, and do not add anything the reading does not call for.

### 3. Check the whole page once more, and hand in

Run the two commands of step 1 again. The last line of the second must
be "nothing reported" or you must be able to say, in `art.md`, why each
thing it reports is right as it stands. Look at the pictures again.

## Working beside the examiner

An examiner may be at work on your piece at the same time as you,
testing its facts and mending `reading.json`. So:

- Change `reading.json` only with small exact edits (a heading, a
  label, a new key in a shape lens's `facts`), never by writing the
  whole file back from a copy you read earlier. If an edit fails
  because the file has changed, read it again and make the edit again.
- Have your script read the facts when the page runs, as `adams.js`
  does. Never copy a number or a name into the script: what the
  examiner corrects must be corrected in your drawing too.
- Build again (`node build/pieces.mjs <pieceId>`) before you take your
  last pictures, because captions and facts may have changed under you.

Keys in a shape lens's `facts` named counted, source, sources, from,
where, at, block, blocks, row, rows, checked, note, notes, method or
key, or ending in Key, Source, Sources, Note or Notes, are working
notes. The build takes them out, so a drawing never sees them: do not
give a new key one of those names. A key named `read` holding a place
such as "hamlet/a3s1:46" is a place in the site's reader that a drawing
may link to. Every word a drawing prints must be fit for a reader: no
file names, no block numbers.

The picture tool serves the site by itself: you need no server. Write
`art.md` early and add to it as you go. Do not add a stylesheet of your
own unless the kit's classes truly cannot do the job.

## What you hand in

- `site/js/pieces/<pieceId>.js`, if your piece has a shape lens;
- `site/css/pieces/<pieceId>.css`, only if you needed it;
- `remake/works/<pieceId>/art.md`: what you drew and why that form;
  each fault you saw, where, and whether you mended it or it is the
  kit's; anything in the reading you think is wrong;
- the pictures in `remake/works/<pieceId>/shots/`.

## Your answer to the lead

A few lines: what you drew and in what form; each fault that is the
kit's to mend (which passage, which tab, which width, which words),
worst first; anything in the reading you think is wrong; and the last
line the picture tool printed.

## What you must not do

- No scenery, no costume, no pictures of things, no texture, no sound,
  no game, no reward, nothing that loops (rule one).
- No words of your own on the page beyond the few labels a drawing
  needs (the name of a part, a figure, "no chapter"). A label states a
  fact from `facts`; it never interprets. Rules two and three govern
  the captions, and the captions are not yours.
- No text of the work typed into a script or a file. A drawing may show
  a name, a title or a single word that `facts` holds.
- No new library, no font, no image file. SVG, drawn with the kit.
