# The last read of the app's own words

Read `review/r3/brief-lastread.md` in the scratchpad first, and everything it tells you to read. All of it applies to you. This note adds what is particular to your part.

Your part is the wording the program itself prints: headings, buttons, instructions, messages. In the second round two people tested the site in a browser, and three workers then changed the program to fix what they found. In doing so they wrote or changed about 130 strings, and the editor changed a few more. Nobody has yet read these as prose. You are the only critic who will, and the site is published after you.

The strings are in `/home/user/auden-course/content/ui.mjs`. Your part file prints them in that order, with the changed ones marked.

For every marked sentence in your share:

1. Find where the page prints it. The label after `ui:` is the key. Search `site/js` under `/home/user/auden-course` for the key in quotation marks (for example `grep -rn "'heart.learn.slips'" site/js`) and read the lines around the place, so that you know what is on the screen with it, what the student has just done, and what the control beside it does. A key that ends in a number (`home.intro.2`) is usually printed as one of a list (`t.list('home.intro')`), so search for the key without the number as well.
2. Judge it with both lenses, and ask one thing more: does it say what the program does? A message that promises what the code does not do, names a button by a label the button does not carry, or gives a count the code does not compute is a "must".
3. Read it with its neighbors on the screen. Two strings printed one after the other must not say the same thing twice, and a string must call a thing by the name the strings around it use. The workers' notes list the strings each one added and why (`code2/A-notes.md`, `code2/B1-notes.md`, `code2/B2-notes.md` in the scratchpad). Read the lists of strings in them and skip the rest.
4. A string with a bar | has a singular and a plural form. Read both. Words in braces are filled in by the program. Find out from the code what goes in, and check that the sentence reads rightly with it (a number, a date, a title in italics, a list of words).

Do not report a label that is a single word or a name, and do not report anything that is only taste.

You may look at a string on the page if the code leaves you in doubt. The built site is served at http://localhost:8135/ and Playwright with Chromium is installed (`/opt/node22/lib/node_modules/playwright`). Do not spend long on it. Reading the code is enough for nearly every string.

In each finding give the label, the first words of the sentence, the problem in a sentence or two, and the string as it should read, in full, so that the editor can paste it.

End with one line: how many marked sentences you read, and how many findings.
