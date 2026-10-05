# The words you are reading

Every new or changed string of the rebuilt parts is in one file:

    /tmp/claude-0/-home-user/16660bbc-c653-54ad-936c-75a5d2bff792/scratchpad/review4/prose-r4.md

Each line is one string with its label. `*word*` is italic; `[text](#/route)` is a link; `{n}` is filled in by the page; `a|b` is singular and plural. The sections:

- "The door": the opening. `door.spreads[i].steps[j]…` are the steps in order. In a step, `lead` is what the reader is told before making a move, `notes.k` is shown beside gap k once the reader has written a word there and seen the poet's, `after` follows the step, `ask` is a question, `options[k].label` is a choice and `.reply` is what the reader sees after choosing it (the replies to the other choices are available under "If you had said otherwise"), `title` / `paras` / `sources` are a panel of what Auden said or wrote, shown after the reader's own move.
- "Week 1": `w1.intro`, `w1.carry` (a question the reader carries into the book), `w1.operas…` (the note on the week's opera), then `w1.meetings[0]…` (before the book) and `w1.meetings[1]…` (after it). Step fields as above, and also: `hit` / `near` / `miss` (what a reader sees after marking lines in the passage, by how close they came), `bins[k].label` and `items[k].label` / `.why` (columns and cards of a sorting board; `.why` is shown when the board is checked), `rows` / `pool` (a matching board).
- "By heart: the set piece", "Pictures" (alt text, caption, credit) and "Records".
- "The app's own words": buttons, headings and messages (labels such as `meet.…`, `heart.…`, `book.…`, `term.…`, `home.…`, `reader.keep…`).

The passages from the books themselves (Shakespeare's song, Longfellow's Dante, the libretto) are not in the file; they are the authors' words. You can see every string in its place in the running site at http://localhost:8136/ (routes are listed in the common brief), and you should look whenever a string cannot be judged out of its place.
