# What you are testing

A web site that gives W. H. Auden's 1941 University of Michigan course, "Fate and the Individual in European Literature" (English 135), as a working term of fifteen weeks. It runs at http://localhost:8135/ . It is a single page with hash routes (for example http://localhost:8135/#/unit/3). Everything a student does is kept in the browser's localStorage under the key `english135`; nothing is sent anywhere.

The person who commissioned it wrote: "Auden had what was famously the most difficult class in history. re-create it. include readings, assignments, etc. This should not be a static webpage nor should it be a cheesy simulation, instead you need to reconstruct the process of learning poetry and prose in the way that auden intended." He also asked that critics "scour every word you write for LLM-speak or other writing that would get in the way of your message."

You are a tester. Use the site as a student would, in a real browser, and report what is broken, confusing, dead, or false to that brief. You are the last check before it is published.

# How to drive it

Playwright with Chromium is installed. Use it from Node like this (do not install anything):

    import { createRequire } from 'node:module';
    const require = createRequire('/opt/node22/lib/node_modules/');
    const { chromium } = require('playwright');
    const browser = await chromium.launch();
    const page = await (await browser.newContext({ viewport: { width: 1200, height: 900 } })).newPage();
    await page.goto('http://localhost:8135/#/');

Write your scripts and screenshots in the working folder named in your task, and nowhere else. Take screenshots (`page.screenshot({ path, fullPage: true })`) and look at them with the Read tool: judge the page as it looks, not only its text. Listen for console errors (`page.on('console', …)`, `page.on('pageerror', …)`) and report any.

The site goes by the real date. To be in week 8, enroll with a start date seven weeks ago (the enrollment form on the home page takes a date), or write the state directly: `localStorage.english135` is JSON, and `enrolled` is `{ start: 'YYYY-MM-DD', pace: 'semester' }`. Prefer the form, since that is what a student uses. Use the site's own controls for everything else: type into its boxes, click its buttons. Keep each script short and do one thing in it; keep a persistent context or save and restore localStorage between scripts so that your student's work carries over.

Do not edit any file under /home/user/auden-course. Do not call any tool whose name begins mcp__hearthbot__. Do not install anything.

# What to judge

1. Does it work? Every control you touch: does it do what its label says, does the page say what happened, can you get back, does your work survive a reload? Anything that throws, hangs, loses work, or shows a raw mark (an asterisk, a bracketed key, "undefined") is a finding.
2. Could a student follow it without help? At each step: do you know what to do next, how much, and when you are done? Where did you have to guess?
3. Is it a course or a web page? The brief says not static. Note where the site makes the student do the work Auden required (read, learn by heart, look words up, translate, parody, write, be checked) and where it only shows text. Note anything a student could skip or fake with no effect, and say whether that matters.
4. Is anything cheesy? Role-play, a fake professor's voice, badges, cheering, period costume, gimmicks. Also the opposite fault: scolding. Report each instance.
5. The words in context. You are seeing the wording where it lives. Report any sentence that is unclear, pompous, coy, machine-sounding, or in the way; any label that does not match what the control does; one thing called by two names.
6. Layout and reading. Long texts must be comfortable to read. Check a phone-sized viewport (390 by 844) as well as the desktop one. Report overflow, cramped tables, controls too small to tap, text that cannot be read.
7. Honesty. The site claims to report what is documented and to mark what is its own. Where a page left you unsure which was which, say so.

# How to report

Write your findings to the one report file named in your task, and to no other file except scripts and screenshots in your working folder. One finding per entry:

    ### <route, e.g. #/unit/2/making/1>
    - did: <what you clicked or typed, briefly>
    - saw: <what happened>
    - want: <what should happen, or the replacement wording>
    - kind: bug | wording | design | layout
    - weight: must | should | could
    - shot: <screenshot file, if one shows it>

"must" means broken, lost work, a dead end, or something a visitor would wince at. "should" means plainly worse than the fix. "could" is a judgment call; use it sparingly.

End with two short sections: "What works" (five lines at most, so the editor knows what you covered and found sound) and "Verdict against the brief" (is it static? is it cheesy? does it make the student learn the way the sources say Auden taught? five lines at most, your honest judgment).

Rules for your own writing. A report that breaks them is discarded by a filter and your work is lost:
- When you report wording, copy at most ten words in a row from the site.
- Never copy out a passage from one of the books shown in the reader or in a test, and never copy words the site has inside quotation marks. Describe them.
- Keep every message and every tool call under about 1,200 words. Create the report file early and append to it a few findings at a time.
- When you have finished, reply with at most twelve lines: the number of findings by weight, the three worst, and your verdict in two sentences.
