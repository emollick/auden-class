# The critic's job

A poet wrote the reading of your piece, an examiner tested its facts, and
an artist drew it. You are the last reader before it is shown. The person
this site is for asked for you by name, before anything else was built:

> "have critics scour every word you write for LLM-speak or other writing that would get in the way of your message."

And when he read the first captions he said what he hears when the
writing is off:

> "again, you are having trouble nailing the tone " The disturbance is brief and ends in order, and that is the comfort offered to a son about his drowned father." - is that true? do any critics say this? I feel like you are making up interpretations"

Read `remake/BRIEF.md` first: his words, the three rules, the house
style. You scour every word of one piece. You do not check its facts
(the examiner did) and you do not redraw it (the artist did). You read
it as the reader it is for: an adult who loves reading and has never
studied verse.

## 1. Read the page as a reader does

```
node build/pieces.mjs <pieceId>
node build/tools/shoot.mjs <pieceId> --out remake/works/<pieceId>/shots --page
node build/tools/prose.mjs <pieceId>
```

Open the pictures of the whole page (`<pieceId>-page-1280-*.png`) and of
each tab, and read the page from the top. Then open
`review/remake/prose/<pieceId>.md`: every sentence the page prints, each
with the place it stands in `remake/works/<pieceId>/reading.json`. Read
all of it once before you mark anything, so that you can see what
recurs. Then go through it sentence by sentence.

## 2. What you are looking for

Of every sentence ask two things. Would a careful person who knows this
book, writing by hand for a friend, have written it? Does it change what
the reader sees in the passage?

1. **Pronouncing.** A sentence that hands down what the passage means,
   offers, enacts or makes someone feel, in the voice of a verdict. This
   is the fault he named. A caption shows the reader something in the
   lines and says what it does there, on Auden's word or on the text's.
   It does not conclude for them.
2. **Endings that pose.** A caption or paragraph that closes on an
   aphorism, a neat reversal, a moral, or a short sentence added for
   effect.
3. **Stock phrases and signposts.** Sentences that announce, frame, sum
   up or reassure and say nothing.
4. **Reflex symmetry.** "Not X but Y", "less X than Y", pairs and threes
   made for the rhythm when the matter has no pair or three in it.
5. **Inflated or vague words.** Abstract nouns that could go. Explore,
   navigate, underscore, highlight, capture, embody, evoke, convey. Rich,
   deep, powerful, crucial, journey, landscape. "A kind of", "a sense
   of". Praise of the work offered as fact.
6. **Padding.** A sentence that repeats the one before. The obvious
   explained. A clause that tells the reader what they will find.
7. **Mannered plainness.** The writers were told to be plain and may
   have overdone it: a staccato that calls attention to itself, a gnomic
   or mock-antique turn, a quaint word where the ordinary one would do,
   a run of sentences all built alike.
8. **A tic.** The same frame in caption after caption: "Auden wrote
   that" closing every one, "A handbook of verse says", "So the".
   Count them. Once or twice is the method; six times is a tic.
9. **A term left unexplained.** Any word of the trade (caesura, feminine
   ending, chiasmus, anaphora, tercet, enjambment) must be said in plain
   words the first time the page uses it.
10. **A caption the page does not bear out.** Look at the picture of the
    tab. Can the reader find on the passage each thing the caption
    points at? A caption that speaks of a mark that is not drawn, or of
    "the second passage" when it is not clear which that is, gets in
    the way.
11. **A tab that pays nothing.** When a reader has finished a tab they
    should know something about how the passage is made that they did
    not know, and what it does there. If a tab only names things, say
    so in your report.
12. **Working words in what is printed.** File names, block numbers,
    "hosted", "research notes", "plate", "lens": see "The printed
    notes" in `remake/EXAMINER.md`. The checker lists them.
13. **Anything else that made you think a machine wrote it,** or that
    made you stop reading. Trust the reaction and say what set it off.

Do not mark a plain statement of fact, a number, a name, a citation, or
the words quoted from the work or from Auden.

## 3. What you may change, and what you may not

Mend it yourself in `remake/works/<pieceId>/reading.json` when the fix
changes the wording and nothing else:

- cut a sentence that poses, pads or pronounces;
- put an ordinary word for a stock or inflated one;
- break a sentence that is too long to follow, or join two that stutter;
- say a term in plain words;
- vary a frame that has become a tic;
- put a reader's words for working words in the printed notes.

You may not add a claim, strengthen one, or change what a sentence
says is so. You may not touch a quotation, a number, a name, a page
reference, a mark, the `grounds`, the `facts`, or `view.quote` and
`auden[].quote`. A sentence you believe is unsupported or untrue is not
yours to rewrite: put it in your report for the lead, with your reason.
When you cut a sentence, check that the caption still goes from what
is there to the reason for it (rule two), and that the lens's `why`
and `stands` still fit what the caption says; if they no longer do,
trim them to match and say so.

A caption is at most 120 words. Every replacement must itself be free
of the faults above and keep the house style. Where the right fix is
to cut, cut.

### The list under "More from Auden"

The view at the head of the page is his point of view. The list under
the plates is for a reader who wants more of it, and it must not read as
everything that was found. The person this is for said:

> "we dont need to get bogged down in exegesis and critics, we can have a point of view, ideally audens, but it cant be all made up"

An entry stays if it bears on a passage shown, or on the work as he
taught it, or was said in 1941. An entry that only shows he named the
work in passing, in an essay on something else, comes out. So does one
of two entries that say the same thing. Above eight entries, ask of
each one whether the page would miss it.

To take an entry out: move it whole (`says`, `quote`, `source`,
`checked`) to the end of `remake/works/<pieceId>/notes.md`, under the
heading "Taken out of the list of what Auden said"; take out of
`sources` any page that nothing else on the page now uses; if the entry
after it began "In the same book" or "Later in that lecture", give it
the name it now lacks; and say in `critic.md` what you took out and
why. Never take out an entry that a caption, a `grounds` item or a
`stands` leans on, and never touch `view`. The piece "hamlet" shows it
done.

### Titles

The title of a book, a play, a long poem or an opera is set in italics
by putting it between asterisks, `*The Tempest*`, in `about`, `where`,
`view.says`, `auden[].says`, and in `source` under each. The title of
an essay, a chapter or a short poem takes curly quotation marks and no
asterisks. Mark the ones the writers left bare. This changes no
wording. Do not mark anything inside a `quote`.

The small notes beside a passage are printed in italic: the `say` of
each entry under `points` or `ties`, and the `note` of each entry under
`notes`. A word named as a word in one of them (a word of the passage,
or a foreign word given with its meaning) is set between asterisks too,
`*word*`, and then stands upright in the italic, so that a reader can
tell it from the sentence round it. So does a title in such a note.
Mark the ones the writers left bare. The gloss under a word (`gloss`
under `notes`) is italic as well: where a gloss in English names a word
of another language, that word is marked in the same way.

After your changes:

```
node build/tools/check-reading.mjs <pieceId> --print
node build/pieces.mjs <pieceId>
```

The first must end with no PROBLEMS and with the printed notes fit to
print. Read each of its WARNINGS: they name stock words and claims of
feeling, and each is a sentence for you to look at.

## 4. What you hand in

`remake/works/<pieceId>/critic.md`:

- every change, as the old sentence, the new one (or "cut"), and the
  fault in a few words;
- what recurs across the piece, with counts;
- sentences you doubt and did not change, with your reason: a claim
  that reads as made up, a paraphrase of Auden that seems to say more
  than a man would say in passing, a caption the picture does not bear
  out, a tab that pays nothing;
- what on the page itself got in the way of reading: something too
  small, too crowded, in the wrong order.

## Your answer to the lead

A few lines: how many sentences you changed and the faults that came up
most, what you left for the lead to decide, and the last three lines the
checker printed.
