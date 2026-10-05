# The link card: critic A

Looked at by eye and by word on 4 October 2026: the five pictures in review/card/, lines 6 to 19 of
site/index.html, build/card.mjs, and the :root tokens of site/css/atlas.css. The two lines of verse on
the card are called "the first line" and "the second line" here and are not written out.

Each finding says where it is, what is wrong, how sure I am (sure / likely / a matter of taste), and
what I would do. Sizes are in pixels of the 1200 by 630 picture unless "units" is said; a unit is one
pixel of the 800 by 420 page that build/card.mjs lays out.

## In brief

The card is handsome and it is honest. It is the site's own plate with the site's name over it. There
is no advertisement in it, and I found no machine-sounding word on it. Three things are worth settling:
what X's title box does to it on a phone, the one sentence of the description, and the alt text. None
of the three is in the picture's own two phrases, which I would not touch.

## What was checked, and holds

- The picture that will be served, site/card-1.png, is the same file as review/card/card-1200.png, byte
  for byte: 1200 by 630, PNG, 74 KB, no transparency.
- Drawn again in memory from site/data/front.json as it stands now (the data was rebuilt six minutes
  after the card), the picture comes out the same to the byte. The card is in step with the front page.
- The marks agree with the data and with the site's key. First line: eight syllables, beats on the
  second, fourth, sixth and eighth, an ink dot at each, and a red dot under the first syllable, which is
  stressed off the beat. Second line: seven syllables, beats on the first, third, fifth and seventh, ink
  dots at the last three, and a red ring under the first, a beat the voice passes over. The heavier type
  falls on the same syllables as the dots. This is an ordinary reading of the two lines. Nothing in it is
  made up.
- The full stops at the ends of both lines are the source's (Project Gutenberg no. 1540), not the card's.
- The live site does not have the card yet. /card-1.png answers 404 there, and the live page still has
  the earlier tags (a small card, no picture). That is as it should be before the owner's word.

How it was done: by reading, by measuring the pixels of the pictures, and by laying the card's page
out in memory with the project's own browser. Nothing was written but this file. The live site was
read three times (its front page twice, /card-1.png once) and nothing was sent to it. The web was
searched to check X's box and LinkedIn's change. The permission system refused nothing.

## By eye

### 1. On a phone, X's title box lands on the dots under the second line

Where: the foot of the card, and the guard in build/card.mjs (`box.lowest > 369`).

What is wrong: X's box does not shrink with the picture. It is about 20 px high and sits 12 px in from
the left and from the foot, in 13 px type, whatever the width of the card. card-506-label.png and the
guard both fit the card to the box at 506 wide, where the box begins at 88 percent of the height. The
lowest marks on the card, the dots under the second line, end at 84.6 percent (533 of 630). In a
phone's timeline the card is about 280 to 315 wide, and there the box begins at 78 to 81 percent.

| card as shown | the box begins at | what it meets |
| --- | --- | --- |
| 506 wide (a desk screen) | 88.0% of the height (554 of 630) | nothing: 9 px clear of the dots |
| 396 wide | 84.6% | touches the dots |
| 356 wide (an opened post on a phone) | 82.9% | covers the dots |
| 310 wide (a timeline on an iPhone) | 80.3% (506 of 630) | covers the dots and the ends of the long strokes |
| 280 wide (a small Android) | 78.2% (493 of 630) | covers the whole measure, rule and all |

So on most phones the second line keeps its rule and loses its dots and its ring, for as far as the box
runs. With the present og:title the box runs nearly the whole width of the card (see 2).

How sure: sure of the arithmetic, and sure enough of X. The box's size is the one the lead's own
mock-up uses, and Polypane measured the same on X's site when the box still held the address: 20
px high, 12 px from either side, 13 px type. Their rule of thumb is to keep the bottom fifth of the
picture clear, which on this card is everything below 504 of 630. 9to5Google reported in January
2024 that the box now holds the page's title, white on black, and that the address moved under the
picture. (Links below, under Sources.) The one new fact here is that phones show the card narrower
and the box no smaller.

I would: make the mock-up again at 310 wide, with the box at its true size, and choose among three
with that in front of me: leave the card as it is; one line everywhere; or one line for X alone. I
would not tighten the two lines by halves without seeing the result.

What stands behind that, for the lead:

Tightening does not cure it. Tried in memory, with no file written:

| setting | lowest dot ends at | empty foot |
| --- | --- | --- |
| as it is (passage at 42) | 84.6% (533 of 630) | 97 |
| passage at 38, nothing else changed | 82.4% (519) | 111 |
| passage at 40, head a little tighter | 80.4% (506) | 124 |
| passage at 38, head a little tighter | 79.3% (500) | 130 |

("Head a little tighter" was: top padding 31, title at 58, 6 over the subtitle, 13 over the hairline,
8 and 9 round the Shakespeare line.) The last two rows clear the box on an iPhone by a hair and do not
clear it on a small Android. They cost type size everywhere, and they leave a fifth of the card empty
at the foot on the sites that lay no box there. To clear every phone with two lines the dots would
have to end by about 77 percent, and the parts as they are do not fit in that.

One line does cure it. The script's own `--rows 1`, laid out in memory, ends at 65 percent with the
line at 48, and at 66 percent with the line at 54, the largest the kit will set it in this width. A
third of the card is then empty at the foot, so the parts would want setting lower or looser. The
price is the second line and the ring.

X can have a picture of its own. X reads twitter:image first, and Facebook, Discord and iMessage read
og:image. (Slack takes whichever tag comes first in the page, which is og:image as the page stands.)
A one-line card could go to X alone and this card to everyone else. The script's last check, that
both tags name one file, would have to allow it, and there would be two pictures to keep in step.

A trick is going round that I would not use: give X a title that is one unseen character (a
zero-width space in twitter:title), and X lays no words on the picture. I have not seen it work. It
would leave X's readers with no title in text, and it hangs on a habit of X's that may change.

Whatever is chosen, the comment beside the guard should say that 369 is the top of the box at 506 wide
only. The number it tests is also not the ink: `box.lowest` is 365.7 now, the foot of the plate's box,
and the last dot ends 11 units above that, at 355.

### 2. The box in the mock-up is as wide as the site's address, not as wide as the title

Where: review/card/card-506-label.png.

In the mock-up as it is drawn, the box sits on nothing. It stands 9 px under the ring and the first
ink dot of the second line. That is close. The ring is the faintest mark on the card, and it has the
darkest thing in the view right under it. But nothing is touched and nothing is hidden.

What is wrong: the box is 176 px wide. In 13 px type the address "auden-english-135.netlify.app"
needs about 179, the bare name "Fate and the Individual" about 140, and the og:title, which is what X
prints there, about 283. (Reckoned with Helvetica's widths; X's own face should be close to it.) At
506 wide the true box runs from 12 to about 295, under nearly the whole of the second measure, which
runs from 47 to 303. The mock-up shows it under the first two marks only. It still touches nothing.
On a card 310 wide the box may be 286 wide at most, so the title just fits. On one 280 wide it is
cut short and loses the year.

A shorter title for X (a twitter:title) would not cure 1. The bare name's box, 140 px, still covers
the ring and two of the three ink dots on a card 310 wide.

How sure: sure of the widths to a few pixels, and sure enough that X prints the og:title there: it
takes twitter:title first, and the page has none.

I would: redraw the mock-up with a 283 px box, at 310 wide as well as at 506. At 506 I would change
nothing in the card.

### 3. At 506 and at 300: what is read and what turns to noise

Where: card-506.png and card-300.png.

At 506 wide, on a screen of ordinary density (the sizes are type sizes):
- Read at once: the title (39 px) and both lines (27 px).
- Read, quietly: the subtitle (12 px italic, grey) and "The Tempest" (9.5 px italic).
- Read with effort: "SHAKESPEARE" (7 px capitals).
- The marks: the rules, the long strokes and the ink dots are clear, and the red dot is plainly red.
  The short strokes are faint. The ring is a pale red spot 5 px across. It does not read as a ring.

At 300 wide, on a screen of ordinary density:
- Read: the title (23 px) and both lines (16 px). The light syllables thin out but hold.
- At the edge: the subtitle (7 px). It can be made out. It is not read at a glance.
- Noise: "SHAKESPEARE The Tempest" (4 and 5.6 px), the short strokes, and the ring. The dots are specks,
  and the red of the red dot barely tells.

Three things to know, none of them a fault:
- A phone draws the same 300-wide card with two or three times the pixels, so there the small type is
  sharp. It is still small: the subtitle is the size of 7-point type.
- The sites shrink the picture and save it again as a JPEG, and the ring goes first. Measured in
  memory, as red less the mean of green and blue, of 255: at 506 the ring's reddest pixel falls from 95
  to 40 and the dot's from 147 to 96. At 300 the ring's falls from 65 to 21 and the dot's from 155 to
  59. The dot turns brown and stays. The ring all but goes.
- On LinkedIn an ordinary post no longer shows a large card at all. Since 2024 the picture is a small
  thumbnail at the left of the title, and only paid posts keep the large one. At that size the title
  may be read and little else. No tag changes this.

So at chat size the card says its name and shows two lines with something ruled under them. That is
enough, and it is all a picture of this kind can do. At that size nothing in the picture says the
lines are Shakespeare's, and Auden's name is at the edge of reading; the title that every app prints
beside the picture carries "Auden's course of 1941".

How sure: sure of the sizes. The reading of them is my eye on these two pictures.

I would: change nothing for this, except to weigh 4.

### 4. The subtitle is the faintest full line, and it carries Auden's name

Where: `.card-sub` in build/card.mjs (19 units, italic, in --quiet).

What is wrong: nothing at full size. It follows the site's own page heads, a quiet italic line under a
large title. But the site is read at full size, and the card at 42 or 25 percent of this picture. At
300 wide the subtitle is 7 px type in a grey that stands about 5 to 1 against the paper, and it is the
only line in the picture that says whose course this is.

How sure: a matter of taste.

I would: try it in --ink or --body, or at 21 units, and keep the change only if the head still looks
quiet. If 1 leads to a tighter head, the color is the change that costs no room.

### 5. The middle square

Where: card-square.png.

What is lost: 285 px at the left and 285 at the right. The right holds only the end of the hairline.
The left holds the first word of the title and the first letter of the second; the subtitle as far as
the middle of "course", so Auden's name; "SHAKESPEARE" and the first two letters of the work; the
first word and a half of the first line; the first two words and a letter of the second; and the red
dot, the first ink dot and the ring. What is left has no "Fate", no "Auden", no "Shakespeare" and no
red.

Does it matter: little. The apps that cut a square show it small and print the title beside it, so
the reader does not lose the words. What suffers is the look: the thumbnail is a torn corner of a
page. It cannot be mended without setting everything inside the middle 630 px, and the title alone is
819 wide. That would spoil the full card for the sake of the rare one.

How sure: sure of what is lost. A matter of taste whether to mind.

I would: leave it.

### 6. The shading at the edges is twice as deep as on the site

Where: `.card{box-shadow:inset 0 0 120px var(--shade)}` in build/card.mjs.

What is wrong: the site's plates carry the same shading at 90 px. On a desk screen the front page's
first plate is about 1,180 px wide, so the shading is 8 percent of the width. The card has 120 on
800: 15 percent of the width, and 29 percent of the height from the top and again from the foot, so
the two nearly meet. The paper goes from 246, 241, 230 in the middle to 239, 233, 221 at the corners.
The card reads a little more as lit from the middle than as flat paper with a soft edge. It is faint,
it is the site's own look, and it does not look cheap. It is also the only thing on the card that is
an effect.

How sure: a matter of taste.

I would: bring it to the site's proportion, about 60 px, or leave it. I would not remove it.

### 7. Where I find nothing wrong by eye

- Margins: 84 at the left, 84 at the right (the hairline runs from margin to margin), 57 over the
  title's tall letters, 97 under the last dots. Head smaller than sides, sides smaller than foot: that
  is how a page is set. The head has nothing to spare, which is why 1 is hard.
- The hairline stands evenly between the subtitle and the Shakespeare line (21 units over it, 20
  under). It is in ink and not in the site's pale --hair. That is right for a picture that will be
  shrunk: the pale color would be gone at 506.
- The spaces between the parts are even, 17 to 28 units, and nothing crowds anything. The first
  measure stands 20 units under its own line and 17 over the tall letters of the next, as on the front
  page. The strokes tie it to the line above. I would not touch the kit for it.
- The foot, on the sites that lay no box on it (Facebook, Slack, Discord, iMessage), is neither too
  empty nor too full.
- The order of importance is right. The title is the largest thing and the passage the darkest. At
  full size the eye takes the title, then the lines, then the subtitle. Small, the dark lines pull
  first and the title second. Either order serves a card whose work is to show what the site does.
- The heavy and light syllables inside one word are the site's own device, and the dots under them
  explain it. A stranger may take it at first for a reading-aid fashion. I would leave it: it is what
  the site does.
- Nothing looks cheap, like a template or like an advertisement. There is no logo, no address, no
  slogan, no button, no portrait and no scenery. Every word is the site's name, a plain statement of
  what the course was, an author and a work, or the lines themselves. None of Auden's words is on it.
- Nothing is missing that a stranger needs: whose course, where, when, whose lines, from what work.
  The card does not say that the play was on Auden's reading list. A stranger will take it so, and
  the description says it. A key to the marks is not there and should not be. There is no room for
  one at a size that would survive. The address is not there and should not be. Every site prints it
  beside the card.
- Nothing is there that the card would be better without. The Shakespeare line is noise at 300, but
  it has to stay: without it the lines would stand under Auden's name with no author.

## By word

### 8. The words on the card itself: nothing wrong

Where: `WORDS` in build/card.mjs, and what the kit draws from the data.

"Fate and the Individual". "W. H. Auden's course at the University of Michigan, fall 1941".
"Shakespeare", "The Tempest", and the two lines. Each is plain and each is true. I find no stock word,
nothing that tells the reader what to feel, and nothing that sounds like a machine. "fall 1941" is
right American usage, and it is how the class page's own heading gives the date.

One fact to know, which I would leave alone: the title is the site's name, and it is the first half
of the course's name (Fate and the Individual in European Literature). Set over the subtitle, it will
be taken for the name of the course. That is a fair short form, and it is the site's own.

### 9. The year is given three ways

Where: the picture ("fall 1941"), the description and og:description ("in 1941"), the og:title
("Auden's course of 1941").

What is wrong: in Slack or Discord all three stand in one box: the title, the description under it,
the picture under that. On X the box that says "of 1941" lies on the picture that says "fall 1941".
"Of 1941" has a reason: it is the name in the site's own header. "Fall 1941" has a reason: it is the
term, and the class page's heading. "In 1941" has none. The site's own prose says "In the fall of
1941" in every place where it tells this in a sentence: on the front page, on the class page and on
the about page.

How sure: sure.

I would: make the description say "in the fall of 1941" and leave the other two.

### 10. The description: three more words to weigh

Where: lines 7 and 11 of site/index.html (the same sentence twice, as it should be). The sentence is
the one that is live now. None of what follows is new with the card.

a. "each opened at a few passages". Not true of one work. Of the thirty-three, thirty-one are opened
   at three passages and Dante at nine, and T. S. Eliot's The Family Reunion is opened at none: its
   one plate has no text, only drawings of the whole play. How sure: sure of the count. Whether a
   one-sentence description may round off one work in thirty-three is a matter of taste. I would not
   say "each".

b. "the figures and the words drawn on the lines". A reader who has not seen the site cannot take
   "the words drawn on the lines": the lines are words. On the site this is the Word lens, which
   gives what a word meant when the line was written. "The figures" alone can be numbers or people;
   the front page says "figures of speech". The list is already a sample (it leaves out the sentence
   and the two versions), so the fourth item can go. How sure: likely. I would say "the beat, the
   rhymes and the figures of speech".

c. "recorded". On the class page the word is explained by what stands round it: three students wrote
   about the course, one of them within the hour. Alone in a link box, "the afternoons his students
   recorded" can be heard as sound recordings, which would be a great thing to promise. How sure: a
   matter of taste, since "recorded" is the site's word throughout. I would say "as his students
   wrote them down" here.

The sentence is 236 characters and 43 words. It is one sentence, and long for this site, but it is a
list under a colon and it reads easily. I find no stock word in it, no dash, no "we", and nothing
that tells the reader what to feel.

A sketch that mends 9 and 10 together, for the lead to take or leave (240 characters):

> W. H. Auden’s course at the University of Michigan in the fall of 1941: the afternoons as his
> students wrote them down, and passages from the works on his reading list, with the beat, the
> rhymes and the figures of speech drawn on the lines.

### 11. Is the description the right length, and does it say what the site is

It says what the site is: whose course, where and when, and the two things the site holds. The
length is right. Slack and Discord print all of it. Facebook prints a line or two, or none on a
phone. A search engine prints about 155 characters. X, LinkedIn and iMessage print none of it. The
sentence is built so that a cut still leaves sense. At 100 characters it has reached "the afternoons
his students recorded", and at 155 it has reached the reading list. Nothing to do.

Where the description is printed, the title stands right over it, so the reader meets "Auden's
course of 1941" and then "W. H. Auden's course at the University of Michigan in 1941". That echo is
the price of a description that can also stand alone under the bare title in a search result. A
matter of taste. I would leave it.

### 12. The alt text leaves out the words that are in the picture

Where: lines 16 and 19 of site/index.html (the same text twice, as it should be).

What is wrong:
a. Someone who cannot see the picture is told that there are two lines of Ariel's song and is not
   told which. For that reader the two lines are the picture. The subtitle is left out as well.
b. "dots at the stresses of the speaking voice" is the first half of the front page's own note. There
   the next two sentences go on to the red dot and the red ring. Cut off from them it is not quite
   true: the mark under the first word of the second line is a ring, at a beat the voice does not
   stress. The alt text never says that anything is red, and the two red marks are the point of the
   drawing.
c. "over two lines" can be heard as laid on top of them. "Above" cannot.

Everything else in it is true to what is drawn: the title, the song, the play, a rule under each line,
a long stroke at each beat. It is 213 characters. X allows 420.

How sure: sure of what is left out. Likely that it should go in.

I would: let build/card.mjs write the alt text from the same data it draws from, so that the two
lines are copied by the machine and never typed. In this shape it comes to about 396 characters:

> Fate and the Individual. W. H. Auden’s course at the University of Michigan, fall 1941. Two lines
> of Ariel’s song from Shakespeare’s The Tempest: “(the first line) (the second line)” Under each
> line is its measure: a rule with a long stroke at each beat, and dots at the stresses of the
> speaking voice. A red dot and a red ring mark where the voice leaves the measure.

("Where the voice leaves the measure" is the front page's own phrase for the red marks. The marks
round the two lines have to be curled ones, since a straight one would end the tag.)

### 13. The two titles differ, with a reason

Where: line 6 (`<title>`: "Fate and the Individual") and line 10 (og:title: "Fate and the
Individual: Auden's course of 1941").

The bare name is right for a browser's tab, where the site's other pages put their own name before
it. The longer one is right for a link box, where it may stand with no picture. A search result and
a bookmark take the bare name, which does not say what the site is. A matter of taste. I would leave
both.

Two other pairs differ, each with a reason. The picture and the description say "W. H. Auden's" and
the og:title says "Auden's": that is the short name in the site's header. The alt text says "Ariel's
song" where the picture says "Shakespeare": the alt text gives the song's name, which the picture
does not carry. (The sketch in 12 gives both.) Apart from the year (9), I find no two wordings that
disagree without a reason.

## The tags

### 14. The tags agree, none is missing, none is wrong

Where: lines 6 to 19 of site/index.html.

- description and og:description are the same sentence. og:image and twitter:image are the same
  address. og:image:alt and twitter:image:alt are the same text.
- og:image:width, og:image:height and og:image:type are true of the file: 1200, 630, PNG. The address
  is a full https address, and the file it names is in site/, which is the folder that is published.
- og:url is the live address. og:type is "website". twitter:card is "summary_large_image", which is
  the one that asks for the large picture.
- There is no twitter:title or twitter:description, and none is needed: X falls back to og:title and
  og:description.
- X, Facebook, Slack, Discord and iMessage have all they need here to show the large picture. LinkedIn
  has all it reads too, but it shows an ordinary post's picture small whatever the tags say (see 3).
- The picture is 74 KB with no transparency, well inside every site's limits, and its shape (1.905 to
  1) is the one X and Facebook show without cutting.

Four things to know. None is a fault in the tags.

a. There is no og:site_name, and I would keep it so. Slack and Discord print it as a line of its own
   over the title. It would be the site's name a third time in one box.
b. Every page of the site will show this one card. The part of an address after "#" never reaches a
   server, so a link to the class page or to a single work shows the same title, sentence and
   picture. The card is about the whole site, so that is honest. Sure. Nothing to do.
c. The sites keep what they have fetched. Since the last deploy the live page has carried a small
   card with no picture (twitter:card "summary", og:title "Fate and the Individual"). Where the
   address has been posted already, that old box will show for a time after the new page is up.
   Facebook's Sharing Debugger and LinkedIn's Post Inspector fetch a page again when asked. X fetches
   again by itself within about a week. Likely. I would run the first two once after the deploy,
   before the owner posts.
d. The site's icon is a data: address inside the page. Slack prints a site's icon beside its name,
   and it probably cannot use one that is not a file, so the Slack box will have no icon. Likely, and
   small. I would leave it unless the owner minds.

### 15. How the card is drawn

Where: build/card.mjs.

The way it is made is right. The site's own stylesheet, faces and kit draw it from the front page's
data, so the card cannot drift from the front page, and I checked that it has not (see the top). The
picture's name carries a number so that a changed card gets a new address. The script checks that the
page names the picture.

Two gaps, both small:
- The guard for the foot is set for X at 506 wide only (see 1).
- The script checks the picture's name in the page and does not check the alt text. The alt text
  names "Ariel's song from The Tempest" by hand. If the front page's first passage is ever changed,
  the picture will follow and the alt text will not, and nothing will warn. Likely. I would have the
  script write the alt text (see 12), or at least fail when the alt text does not hold the passage's
  title and its work's title from the data.

## Sources outside the project

- Polypane, "Where to put text so it doesn't overlap in the new X/Twitter preview":
  https://polypane.app/blog/where-to-put-text-so-it-doesnt-overlap-in-the-new-x-twitter-preview/
  (the box: 20 px high, 12 px from either side, 13 px type; keep the bottom fifth clear)
- 9to5Google, 3 and 4 January 2024, on the title's return to X's link pictures:
  https://9to5google.com/2024/01/04/twitter-x-headlines-link-preview/
- Social Media Today, 30 May 2024, on LinkedIn's smaller pictures for ordinary link posts:
  https://www.socialmediatoday.com/news/linkedin-updates-link-previews-organic-posts-smaller-images/717571/
- Matt Haughey, "Everything you ever wanted to know about unfurling" (2015, so old), on the order in
  which Slack reads a page's tags:
  https://a.wholelottanothing.org/everything-you-ever-wanted-to-know-about-unfurling-but-were-afraid-to-ask-or-how-to-make-your/
- For the trick with the unseen title, which I would not use, a third party's notes on X's cards:
  https://tessl.io/registry/skills/github/NeverSight/learn-skills.dev/x-image-cards

## What matters most

1. X's title box on a phone (1, with 2). The card was fitted to the box at 506 wide. On a phone the
   box covers the dots and the ring under the second line, and with the present title it runs the
   width of the card. Make the mock-up at 310 wide with a 283 px box, then choose: leave it, one line
   everywhere, or one line for X alone.
2. The description (9 and 10). "In 1941" beside "fall 1941" and "of 1941"; "each", which is not true
   of one work; "the figures and the words", which a stranger cannot take. One sentence to mend,
   twice over in the page.
3. The alt text (12). It names the picture's parts and leaves out the picture's words. Let the script
   write it from the data.

The rest are matters of taste or things to know. None of the three makes the card wrong to put up.
2 and 3 are a few minutes' work in the page, and 1 shows only on X and only on phones.
