# How to use the site

It runs at http://localhost:8136/ as a single page with hash routes (for example http://localhost:8136/#/unit/1/meet/1). Everything a reader does is kept in the browser's localStorage under the key `english135`; nothing is sent anywhere. A fresh browser context is a new visitor.

Playwright with Chromium is installed. Drive it from Node (do not install anything):

    import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
    const browser = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] });
    const context = await browser.newContext({ viewport: { width: 1280, height: 850 } });
    const page = await context.newPage();
    await page.goto('http://localhost:8136/');

Keep each script short and do one thing in it. To carry your reader's work from one script to the next, save `await context.storageState({ path })` at the end and pass `storageState: path` to `newContext` in the next. Use the site's own controls: type into its boxes, click its buttons, select text with the mouse (page.mouse) where the site asks you to select. Take screenshots (`page.screenshot({ path })`, and `fullPage: true` when you want the whole page) and look at them with the Read tool: judge the page as it looks, not only its text. In a full-page screenshot the sticky menu bar can appear in the middle of the picture; that is the camera, not a fault. Listen for console errors (`page.on('console', ...)`, `page.on('pageerror', ...)`) and report any.

Really do the things the site asks. Think of your own word for each gap before you look, give your own answer to each question, write real sentences in the boxes, and play the record (you cannot hear it, but check that it plays: the audio element's currentTime should advance). Then read what the site gives you back.
