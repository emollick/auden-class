# The router's two notices: the critic by word

Read in `site/js/main.js` (lines 56 to 71), beside the about page's prose, the menu and `noscript` line of
`site/index.html`, and the reader's notice (`site/js/shelf.js`, line 130). No browser was run, so no line was
seen set. Where a line turns was counted from the font file: EB Garamond at the notice's 18 px, with its
kerning. This is the only file written. Nothing was refused.

All seven strings are kept as worded. One thing in the setting, S1, should be looked at before this goes live.
- Keep: the headings "Not found" and "Not loaded", and both tab titles (the heading, "· Fate and the Individual").
- Keep: "There is no page at this address. The works." and "It still could not be loaded. Try again."
- Keep the words: "This page could not be loaded. Try again." Hold the period to the button (S1).

**1. Plain, true, in voice.** Yes, each of them. None has a stock word, a dash, a question or a "we".
- "could not be loaded" is the about page's own turn for a try that failed: "could not be read for this site",
  "could be read only in part". The `noscript` line already says "load the page again".
- It names no cause. So it is true of a dropped connection, a server's error and a spoiled file, and of any
  other failure the router catches. "Try again" names what the button does and promises nothing.
- "This page" is the page at the address, as notice 1 says "at this address". A book or a part is a page too.
- The removed line's "in a moment" claimed that waiting helps, and it gave nothing to press. It is rightly gone.
- If the server lacks `data/front.json`, notice 1 stands untrue at the front page's address (`code-review.md`, D).

**2. "Not loaded".** It reads as English: "not" with a participle is an ordinary label ("Not sent", "Not
found"), and one word tells the two notices apart. Nothing in two or three words is better. "Did not load" is
a verb with no subject, "Failed to load" is the machine's phrase, and "No connection" claims a cause.

**3. The second line.** Clear without the first. "still" is right, and it stays true at a third try.
- The line is never the first thing read. It only takes the place of the first line, under the same heading,
  after the reader's own press. "It" has one thing to stand for.
- "This page still could not be loaded." would stand alone, and no reader meets the line alone. In plain speech
  a second telling takes the pronoun. That wording is no better, so the standing line stays.
- The line shows only where the try is made in place (a file of data, or a host's frame). Where the site is
  loaded anew, a second failure shows the first line again (`out/faults.txt`, lines 44 to 49). True as well.

**4. The period after "Try again".** Right. The line is running text and "Try again." is a whole sentence, so
the period is its own. It stands outside the button, as outside the link in notice 1, and the underline ends
with the words. The setting leaves one risk.
- S1. The period can be parted from the button. A link is ordinary text. A button is a box in the line
  (`inline-block` by default; `.notice .retry` sets nothing else), and CSS lets a line turn between such a box
  and the character after it, even a period (CSS Text 3, section 5.1). Which browsers do so was not tried here.
- At 320 px the first line stands at the edge: 276.4 px to the end of "again" and 280.6 px with the period, in
  a column of 280 px. The period may begin the second line alone. In fallback type the edge falls elsewhere.
- Put: one span around the button and its period, set not to wrap. The line then turns before "Try again."

**5. On a phone with a poor connection.** Yes, from these words alone. "Load" is the word such a reader
already uses of a page that will not come, and "Try again" is the one thing to do and the thing to press. The
words give no reason, and the site has none to give. One gap is left, which no string here can mend.
- Where the try is made in place, the notice stands unchanged until the request ends (`go()`, lines 89 to 105).
  No word says the press was taken, and a third failure leaves the same words. `RECORD.md` leaves the same
  silence for any page that is slow. If a word is wanted here, "Trying again" is true while the request is out.

**6. The tab titles.** Keep both. They have the form of the site's other titles ("About · Fate and the
Individual"). Each is made from its heading's own string, so heading and title cannot drift apart.

**Seen in passing, in the older words** (light; counted the same way).
- At 320 px notice 1 parts its link: "The" ends the first line and "works." begins the second (295.6 px whole,
  246.8 px to "The"). On phones 375 to 393 px wide the reader's notice parts "The" from "shelf." (364.0 px
  whole, 324.1 px to "The"). A no-break space between each link's two words keeps it whole.
- The reader's notice is headed and titled "The shelf", as the shelf's page is. "Not found" would match notice 1.
