# The last test in the browser

Read `review/r2/brief-ux.md` in the scratchpad first. It says what the site is, how to drive it with Playwright, what to judge, how to report and the rules for your own writing. All of it applies to you, with the changes below.

## What is different in this round

In the second round two testers worked through the site and reported 64 findings (`review/r2/out/UX-1.md` and `review/r2/out/UX-2.md`, with their screenshots in `review/r2/ux1/` and `review/r2/ux2/`). Three workers then changed the app to fix them. Their notes say what each changed and how it was checked; your task names the notes that concern you. The course text was also revised in the same round.

A fix is where new faults come from. You are the last person to use the site before it is published, and nobody will test it after you. So:

1. Retest. For every finding your task assigns you that was marked "must" or "should", do again what the tester did and see whether the fault is gone. Use the workers' notes to learn what was meant to change, but judge by what the browser does, at 1200 by 900 and at 390 by 844. A fix that works on the desktop and breaks on the phone is not a fix.
2. Look for what the fixes broke. Then go through the flows your task names from beginning to end as a student would, with a fresh record (clear `localStorage` first) and again with a record that has work in it. Reload in the middle of things. Go back and forward. Leave a page half done and return to it.
3. Read the new words where they live. The workers added and changed sentences that the app itself says. Report any that is unclear, wrong about what the control does, or not in the plain voice of the rest.

Report only "must" and "should". The editor will act on what you report without a further round, so leave out matters of taste, and leave out anything the second-round testers already reported that the workers' notes say was deliberately left alone, unless you think the reason given is wrong.

For each finding that you retest, write one line in a section "Retested" at the head of your report: the old finding's heading, then `fixed`, `not fixed` or `fixed, but` with a few words. A finding that is not fixed, or that is fixed with a new fault, also gets a full entry in the usual form.

The site may be rebuilt while you work. If a page fails to load its data once, wait a few seconds and load it again before you call it a fault.

End with "What works" and "Verdict against the brief", five lines each at most, as the first brief asks.
