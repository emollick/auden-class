// Goethe, Faust, Part I, translated by Bayard Taylor (1870-71).
// Project Gutenberg no. 14591, set from an illustrated reprint (Harry
// Clarke's pictures). Taylor's preface and his poem to Goethe are dropped;
// Goethe's Dedication, Prelude and Prologue are kept, then one part a scene.
import { fetchText, gutenbergBody, writeText, roman, pad2 } from '../lib/gutenberg.mjs';

// The scenes as the book heads them. The first line under the numeral must
// be the title in capitals; the lines after it (a second title or the place)
// are given as the source prints them and become directions (d) or, in the
// Intermezzo, headings (h).
const SCENES = [
  { title: 'Night' },
  { title: 'Before the City-Gate' },
  { title: 'The Study' },
  { title: 'The Study' },
  { title: 'Auerbach’s Cellar in Leipzig', more: ['CAROUSAL OF JOLLY COMPANIONS'] },
  { title: 'Witches’ Kitchen' },
  { title: 'Street' },
  { title: 'Evening', sameLine: 'A SMALL, NEATLY KEPT CHAMBER' },
  { title: 'Promenade' },
  { title: 'The Neighbor’s House' },
  { title: 'A Street' },
  { title: 'Garden' },
  { title: 'A Garden-Arbor' },
  { title: 'Forest and Cavern' },
  { title: 'Margaret’s Room' },
  { title: 'Martha’s Garden' },
  { title: 'At the Fountain' },
  { title: 'Donjon' },
  { title: 'Night', more: ['STREET BEFORE MARGARET’S DOOR'] },
  { title: 'Cathedral', more: ['SERVICE, ORGAN _and_ ANTHEM.'] },
  { title: 'Walpurgis-Night', more: ['THE HARTZ MOUNTAINS.', '_District of Schierke and Elend_.'] },
  { title: 'Walpurgis-Night’s Dream', more: ['OBERON AND TITANIA’s GOLDEN WEDDING', 'INTERMEZZO'], kind: 'h' },
  { title: 'Dreary Day', more: ['A FIELD'], prose: true },
  { title: 'Night', more: ['OPEN FIELD'] },
  { title: 'Dungeon' },
];

// Lines in capitals that name who is on the stage and are not followed by a
// speech of their own: they become directions.
const CAST = new Set([
  'MANAGER    DRAMATIC POET    MERRY-ANDREW',
  'THE LORD THE HEAVENLY HOSTS _Afterwards_',
  'FAUST AND WAGNER',
  'FAUST AND MEPHISTOPHELES',
  'FAUST MEPHISTOPHELES',
  'MEPHISTOPHELES FAUST',
  'FAUST MARGARET _(passing by)_',
  'MARGARET FAUST',
  'MARGARET _and_ LISBETH _With pitchers_.',
]);

// Directions the source prints without italics, and two italic words that
// are directions to the orchestra and not verse.
const DIRECTIONS = new Set([
  '[He sets the goblet to his mouth.',
  '(Chime of bells and choral song.)',
  '_Fortissimo_.',
  '_pianissimo_',
]);

// ---- mending the source file -------------------------------------------
// All of these are faults of the file, not of the book. Each is found by
// the beginning of a line and must be found exactly once.

// A blank line in the middle of a stanza or sentence (a page break, or the
// place where a picture stood): [how the line before begins, how the line after begins].
const CLOSE = [
  ['The souls, to whom my earliest songs', 'Dispersed the friendly troop'],
  ['Amused us hast, on the mountain', 'So now I take thee into my keeping'],
  ['comrade crazy, rude, repelling', 'One has one’s hands full'],
  ['Up by the brook,', 'Over the bridge,'],
];
// A long verse line that the file has broken in two: the next line is its tail.
const TAIL = [
  'Seest thou the black dog coursing there',
  'Had he not made himself the Devil’s',
  'I wish I knew something worse',
  'Most wise! And first, of course',
  'Intends to have the right, if but his',
  'But come: the further talking brings',
  'For thou art right, especially since I',
  'Make room! Squire Voland comes!',
];
// A line that ends with the first word of the next line, stuck on after a dash.
const CARRY = [
  'Behold him stop—upon his belly crawl—',
  'And after—first and foremost duty—',
  'Then again quiet she appears,—',
];
// A line that has lost its first word, a single capital letter (the printed
// book had ornamental initials here). The rest of the line begins in lower
// case. The word is put back: [how the line begins in the file, the word].
const RESTORE = [
  ['comrade crazy, rude, repelling', 'A'],
  ['daren’t say how—to pluck the final flower', 'I'],
  ['mighty love is in her breast', 'A'],
];
// A first word printed in capitals after an ornamental initial.
const INITIAL = [
  ['HOW otherwise was it, Margaret', 'HOW', 'How'],
  ['DOST thou not wish a broomstick', 'DOST', 'Dost'],
];
// Wrong words of the file. Each was found by comparing the file word for
// word with scans of four printings of the translation at the Internet
// Archive (Boston 1871, goethetaylorfaust01; Boston 1887,
// cu31924026304364; Boston 1912, faust00taylgoog; the London edition,
// fausttragedy00goetuoft). A word is changed only where the printings read
// alike against the file ("hast": three of the four):
// [how the line begins in the file, the file's reading, the printed reading].
const MISPRINTS = [
  ['THE LORD THE HEAVENLY HOST _Afterwards_', 'HOST ', 'HOSTS '],
  ['MERRY ANDREW', 'MERRY ANDREW', 'MERRY-ANDREW'],
  ['Yet, wherefore tums my gaze', 'tums', 'turns'],
  ['Where you, ye beasts?', 'beasts', 'breasts'],
  ['We mark how, ere our times', 'times', 'time'],
  ['Vanish, ye darking', 'darking', 'darkling'],
  ['That not alone your thirst is slake', ' is ', ' it '],
  ['That for our help he long may abide', 'abide', 'bide'],
  ['If your aid avail him', 'aid avail', 'aid can avail'],
  ['_Encheiresin natures_', 'natures', 'naturæ'],
  ['and striding among the jars', 'striding', 'striking'],
  ['And much could I in his face behold', 'And', 'So'],
  ['Where, how, and when he died, to certify his fitness', ' his ', ' with '],
  ['The monster without air or rest', 'air', 'aim'],
  ['VALENTINE (_jails_)', 'jails', 'falls'],
  ['_Diesira, dies illa', 'Diesira', 'Dies iræ'],
  ['Solvet soeclum in favilla', 'soeclum', 'sæclum'],
  ['Quidquid latet, ad parebit', 'ad parebit', 'adparebit'],
  ['_Quid sum miser tune dicturus', 'tune', 'tunc'],
  ['Woman in thousand steps is theft', 'theft', 'there'],
  ['Is’t not soon enough when morning chime has run?', 'run?', 'rung?'],
  ['Tell no one thou has been with Margaret', ' has ', ' hast '],
  ['For ’tis my pleasure-to behold', 'pleasure-to', 'pleasure to'], // a hyphen that the printings have not
  ['WILL-O’-THE WISPS', 'THE WISPS', 'THE-WISPS'], // a speaker's name: the hyphen is in the printings
  ['Serpent! Serpent!', '! Serpent', '! serpent'], // a capital that the printings have not
  ['Come out! Come out!', '! Come', '! come'], // the same
];
// Five words that the file spells in a later way where all four printings
// have Taylor's own form (the file itself has "fulfil" and "skilful"
// elsewhere). The contractions that Taylor prints apart ('T is, must n't)
// and the file closes up throughout are left as the file has them.
const SPELLING = [
  ['Where would you get contemporary fun?', 'contemporary', 'cotemporary'],
  ['If I fulfill my expectation', 'fulfill', 'fulfil'],
  ['In all the fullness of my', 'fullness', 'fulness'],
  ['Saved by your father’s skillful', 'skillful', 'skilful'],
  ['_Sans souci_, we call', 'Sans souci', 'Sanssouci'],
];
// Wrong stops of the file, found in the same comparison: the stop after a
// word is changed only where the printings agree against the file (all four
// in most places, never fewer than two with the others unreadable there).
// Every one was then looked at in the page images of the Boston 1887 scan.
// Where dashes and quotation marks stand was compared too, and no fault
// found; the kind of quotation mark and apostrophes were not compared.
// [how the line begins in the file, the file's pointing, the printed pointing].
const POINTING = [
  ['And each goes home', 'the effect,', 'the effect.'],
  ['Nor on thy curious', 'endeavor,', 'endeavor:'],
  ['They rave, as Satan', 'controlling.', 'controlling,'],
  ['And round the linden', 'wide.', 'wide:'],
  ['Health to the man,', 'tried.', 'tried,'],
  ['How little now I', 'deem,', 'deem'],
  ['Be still, thou poodle;', 'poodle;', 'poodle!'],
  ['Here am I balked:', 'who, now can', 'who, now, can'],
  ['A maid that, even', 'A maid that,', 'A maid, that,'],
  ['When on an idler’s', 'quiet.', 'quiet,'],
  ['Fear not that I', 'sever?', 'sever!'],
  ['That binds the Noble', 'together.', 'together,'],
  ['Nor nearer, to the', 'nearer, to the Infinite,', 'nearer to the Infinite.'],
  ['Pardon! With many questions', 'detain you.', 'detain you,'],
  ['_Ah, tara, lara da_!', 'lara da', 'lara, da'],
  ['Like kittens playing with', 'tails?', 'tails;'],
  ['We’ve just retraced our', 'from. Spain', 'from Spain'],
  ['Here, measure the lad', 'breeches.', 'breeches,'],
  ['Only believe there’s a', 'believe there', 'believe, there'],
  ['But have a care that', 'a care that', 'a care, that'],
  ['See what a vine!', 'See what a vine', 'See, what a vine'],
  ['Walked thyself off this', 'ball', 'ball.'],
  ['And now!—I could tear', 'vexation.', 'vexation,'],
  ['That cross me, drawing', 'thither', 'thither,'],
  ['Hearken! the pillars are', 'shattered.', 'shattered,'],
  ['Keep close! or we', 'turn,', 'turn.'],
  ['That the wedding golden', 'be.', 'be,'],
  ['Once many a bit', 'sponged,', 'sponged;'],
  ['the reptile again into his dog-shape?', 'dog-shape?', 'dog-shape,'],
  ['Gnash not thus thy devouring teeth at me?', 'at me?', 'at me!'],
  ['How is it, then? my hand’s already lame:', 'lame:', 'lame.'],
  ['A red mouse from her mouth—sufficient reason.', 'reason.', 'reason!'],
  ['Then saw I—.', 'I—.', 'I—'],
  ['Desiring no possession', 'possession', 'possession.'],
];
// More wrong stops of the file: a full stop where the book has a comma, and
// three other places at the end of the list. The first comparison missed
// them because the text of two of the scans reads many commas as full
// stops, and so seemed to share the file's reading. Each was read in the
// page images of the first edition (Boston 1871), which prints the stop
// given here.
const COMMAS = [
  ['Have lent, in need', 'tribulation.', 'tribulation,'],
  ['The posts are set,', 'completed.', 'completed,'],
  ['And now in this,', 'works.', 'works,'],
  ['From sea to land,', 'to sea.', 'to sea,'],
  ['Ah, me! this dungeon', 'I see.', 'I see,'],
  ['And danger thousand-fold, our', 'wrong.', 'wrong,'],
  ['Bring help to hearth', 'shelf.', 'shelf,'],
  ['And otherwise must I', 'translate it.', 'translate it,'],
  ['Then let the death-bell', 'token.', 'token,'],
  ['Where fly the shuttles', 'thither.', 'thither,'],
  ['Unseen the threads are', 'together.', 'together,'],
  ['Three years is but', 'space.', 'space,'],
  ['He gnawed and scratched', 'throughout.', 'throughout,'],
  ['How would the ape', 'enhances.', 'enhances,'],
  ['Left me lie in', 'I lay.', 'I lay,'],
  ['Save I have him', 'near.', 'near,'],
  ['When I have sat', 'carouse.', 'carouse,'],
  ['“Each well enough in', 'own way.', 'own way,'],
  ['Lets in a maid', 'a maid.', 'a maid,'],
  ['Thy guilty heart shall', 'dismay thee.', 'dismay thee,'],
  ['So long as in', 'existence.', 'existence,'],
  ['Woman in thousand steps', 'there.', 'there,'],
  ['The wind is hushed,', 'shoots by.', 'shoots by,'],
  ['But still the time', 'my friend.', 'my friend,'],
  ['Frog in green, and', 'cricket-trill.', 'cricket-trill,'],
  ['On Earth’s fair sun', 'my back', 'my back!'], // the note number follows in the file
  ['So, Friend (my views', 'Friend (', 'Friend, ('],
  ['Wilt thou grasp the thunder?', 'Well that', 'Well, that'],
];
// Lines that have lost the apostrophe they begin with (the file prints
// ’Tis and ’Twas so in forty other places; the printings have it here too).
const APOSTROPHE = [
  'Tis vain, this empty brooding here',
  'Tis all so cramped and close',
  'Tis well.',
  'Tis time to separate.',
  'Tis Lilith.',
  'Twill ne’er be clean',
  'Tis magic all, thou fool',
  'Twas Perseus lopped it',
];
// A speaker's name that is not in the book. The file has FAUST in the
// middle of the Old Peasant's speech (scene 2), before its last two lines;
// the four printings give those lines to the Old Peasant, as Goethe does,
// and print them without a break: [the line before, the name, the line after].
const NOT_A_SPEAKER = [['But you in health came out again.', 'FAUST', 'No test or trial you evaded:']];
// A direction that the file has lost: the four printings have "(aside)"
// after the speaker's name: [the name, how the speech begins, the direction].
const LOST_DIRECTION = [['MEPHISTOPHELES', 'I’ll cut away, betimes, from here', '(_aside_)']];
// One line of the file holds an entrance and, after it, the exit of the
// person who has just spoken. The printings set the exit at the end of her
// speech and the entrance under it; that order is kept here.
const EXIT_FIRST = '(_Enter_ MEPHISTOPHELES.) [_Exit_.';
// The only verse line that rightly begins in lower case: it goes on after a
// direction in the middle of a line.
const LOWER_OK = new Set(['at last,—']);
// The translator's notes are not in the file, but six of their numbers are
// left at the ends of lines.
const NOTE_NUMBERS = 6;

function one(lines, begins, what) {
  const at = [];
  lines.forEach((l, i) => { if (l.trim().startsWith(begins)) at.push(i); });
  if (at.length !== 1) throw new Error(`Faust: ${what}: "${begins}" found ${at.length} times`);
  return at[0];
}

function mend(lines) {
  for (const [a, b] of CLOSE) {
    const i = one(lines, a, 'break to close');
    let j = i + 1;
    while (lines[j].trim() === '') j++;
    if (j === i + 1 || !lines[j].trim().startsWith(b)) throw new Error(`Faust: break to close after "${a}" is not as expected`);
    lines.splice(i + 1, j - i - 1);
  }
  for (const [before, name, after] of NOT_A_SPEAKER) {
    const i = one(lines, before, 'line before a name to remove');
    let j = i + 1;
    while (lines[j].trim() === '') j++;
    let k = j + 1;
    while (lines[k].trim() === '') k++;
    if (j === i + 1 || lines[j].trim() !== name || !lines[k].trim().startsWith(after)) throw new Error(`Faust: the name after "${before}" is not as expected`);
    lines.splice(i + 1, k - i - 1);
  }
  for (const [name, begins, dir] of LOST_DIRECTION) {
    const k = one(lines, begins, 'speech that has lost its direction');
    let j = k - 1;
    while (lines[j].trim() === '') j--;
    if (j === k - 1 || lines[j].trim() !== name) throw new Error(`Faust: the name before "${begins}" is not as expected`);
    lines[j] = `${name} ${dir}`;
  }
  for (const [begins, word] of RESTORE) {
    const i = one(lines, begins, 'word to restore');
    lines[i] = `${word} ${lines[i].trim()}`;
  }
  for (const begins of APOSTROPHE) {
    const i = one(lines, begins, 'line without its apostrophe');
    lines[i] = lines[i].replace(/^(\s*)/, '$1’');
  }
  for (const [begins, from, to] of INITIAL) {
    const i = one(lines, begins, 'initial word');
    lines[i] = lines[i].replace(from, to);
  }
  for (const [begins, wrong, right] of [...MISPRINTS, ...SPELLING, ...POINTING, ...COMMAS]) {
    const i = one(lines, begins, 'misprint');
    if (lines[i].split(wrong).length !== 2) throw new Error(`Faust: misprint "${wrong}" is not once in the line "${begins}"`);
    lines[i] = lines[i].replace(wrong, right);
  }
  for (const begins of TAIL) {
    const i = one(lines, begins, 'broken line');
    const tail = lines[i + 1].trim();
    if (!/^[a-z]+[,.!?]$/.test(tail) && !/^tongue be clever,$/.test(tail)) throw new Error(`Faust: tail of "${begins}" is not as expected: ${tail}`);
    lines[i] = `${lines[i].trim()} ${tail}`;
    lines.splice(i + 1, 1);
  }
  for (const begins of CARRY) {
    const i = one(lines, begins, 'line to mend');
    const m = /^(.*—)([A-Z][a-z]*)$/.exec(lines[i].trim());
    if (!m || m[1] !== begins) throw new Error(`Faust: line "${begins}" is not as expected`);
    lines[i] = m[1];
    lines[i + 1] = `${m[2]} ${lines[i + 1].trim()}`;
  }
  let notes = 0;
  for (let i = 0; i < lines.length; i++) {
    const m = /^(.*\D) ?(\d\d)$/.exec(lines[i]);
    if (m) { lines[i] = m[1]; notes++; }
  }
  if (notes !== NOTE_NUMBERS) throw new Error(`Faust: expected ${NOTE_NUMBERS} note numbers, found ${notes}`);
  return lines;
}

// ---- reading the lines --------------------------------------------------

const plain = (s) => s.replace(/_/g, '').replace(/\s+/g, ' ').trim();

// What is left of a line when its parentheses and italics are taken out: a
// speaker's name or a heading has only capitals there.
const core = (t) => t.replace(/_?\([^)]*\)?_?/g, ' ').replace(/_[^_]*_/g, ' ').replace(/\s+/g, ' ').trim();
const isCaps = (t) => { const c = core(t); return /[A-Z]{2}/.test(c) && !/[a-z]/.test(c); };
const startsDirection = (t) => DIRECTIONS.has(t) || (/^_?[(\[]/.test(t) && t.includes('_'));

function directionText(raw) {
  const s = plain(raw).replace(/^[(\[]/, '').replace(/\)(\.?)$/, '$1').trim();
  if (/[\[\]]/.test(s) || (s.match(/\(/g) || []).length !== (s.match(/\)/g) || []).length) throw new Error(`Faust: direction not understood: ${raw}`);
  if (!s) throw new Error(`Faust: empty direction: ${raw}`);
  return s;
}

export function build() {
  const body = gutenbergBody(fetchText('pg14591_faust_taylor.txt', 'https://www.gutenberg.org/cache/epub/14591/pg14591.txt'));

  // Take out the pictures. Two of them carry the titles of the Dedication
  // and the Prelude, which are printed nowhere else: these mark the parts.
  const kept = [];
  let pictures = 0;
  for (let i = 0; i < body.length; i++) {
    const t = body[i].trim();
    if (/^\[illustration/i.test(t)) {
      let text = t;
      while (!/\]$/.test(text)) text += ` ${body[++i].trim()}`;
      pictures++;
      const m = /^\[Illustration: =([^=]+)=\]$/.exec(text);
      if (m) kept.push(`@PART ${m[1]}`);
      continue;
    }
    kept.push(body[i]);
  }
  const first = kept.indexOf('@PART Dedication');
  if (first < 0) throw new Error('Faust: the Dedication was not found');
  if (kept.filter((l) => l.startsWith('@PART')).length !== 2) throw new Error('Faust: expected two titled pictures (Dedication, Prelude)');
  let last = kept.length;
  while (kept[last - 1].trim() === '') last--;
  const lines = mend(kept.slice(first, last).map((l) => l.replace(/\s+$/, '')));

  const parts = [];
  let part = null;
  let block = null; // the v or p block being gathered
  let speaker = null;
  let prose = false;
  let scene = 0;
  let trailing = 0;
  let exitFirst = 0;
  const report = { cast: [], speakers: new Map() };
  const push = (b) => { part.blocks.push(b); block = null; };
  const newPart = (id, label) => {
    part = { id, label, blocks: [] };
    parts.push(part);
    block = null; speaker = null; prose = false;
  };
  const direction = (raw) => { push({ k: 'd', text: directionText(raw) }); };
  const say = (line) => {
    if (!speaker && part.id !== 'dedication') throw new Error(`Faust: ${part.id}: speech with no speaker: ${line}`);
    const text = plain(line);
    if (/\d/.test(text)) throw new Error(`Faust: digit in a line: ${text}`);
    if (/[\[\]{}=*@]/.test(text)) throw new Error(`Faust: unexpected mark in a line: ${text}`);
    if (prose) {
      if (!block) { block = { k: 'p', text }; part.blocks.push(block); } else block.text += ` ${text}`;
      return;
    }
    if (/^[^A-Za-z]*[a-z]/.test(text) && !LOWER_OK.has(text)) throw new Error(`Faust: verse line begins in lower case: ${text}`);
    if (!block) { block = { k: 'v', lines: [] }; part.blocks.push(block); }
    block.lines.push(text);
  };

  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t === '') { block = null; continue; }

    // The three pieces before the play.
    if (t === '@PART Dedication') { newPart('dedication', 'Dedication'); continue; }
    if (t === '@PART Prelude at the Theatre') { newPart('prelude', 'Prelude at the Theatre'); continue; }
    if (t === 'PROLOGUE IN HEAVEN') { newPart('prologue', 'Prologue in Heaven'); continue; }
    if (t === 'FIRST PART OF THE TRAGEDY') {
      if (scene !== 0 || part.id !== 'prologue') throw new Error('Faust: "FIRST PART OF THE TRAGEDY" is not where it was expected');
      continue;
    }

    // A scene: its numeral, then its title, then perhaps a second title or the place.
    if (/^[IVXL]+$/.test(t) && lines[i - 1].trim() === '' && lines[i + 1].trim() === '') {
      const n = roman(t);
      if (n !== scene + 1) throw new Error(`Faust: scene ${t} follows scene ${scene}`);
      scene = n;
      const sc = SCENES[n - 1];
      if (!sc) throw new Error(`Faust: more scenes than expected (${t})`);
      newPart(`s${pad2(n)}`, `${n}. ${sc.title}`);
      prose = !!sc.prose;
      const head = () => { do i++; while (lines[i].trim() === ''); return lines[i].trim(); };
      const titleLine = head();
      const wanted = sc.title.toUpperCase() + (sc.sameLine ? ` ${sc.sameLine}` : '');
      if (titleLine !== wanted) throw new Error(`Faust: scene ${t}: expected the title "${wanted}", found "${titleLine}"`);
      if (sc.sameLine) push({ k: 'd', text: sc.sameLine });
      const more = (sc.more || []).map((want) => {
        const got = head();
        if (got !== want) throw new Error(`Faust: scene ${t}: expected "${want}", found "${got}"`);
        return plain(got);
      });
      if (sc.kind === 'h') for (const text of more) push({ k: 'h', text, level: 3 });
      else if (more.length) push({ k: 'd', text: more.join(' ') });
      continue;
    }
    if (!part) throw new Error(`Faust: text before the first part: ${t}`);

    // A direction on a line (or several lines) of its own.
    if (startsDirection(t)) {
      let text = t;
      while ((text.match(/\(/g) || []).length > (text.match(/\)/g) || []).length) {
        const more = lines[++i].trim();
        if (more === '') throw new Error(`Faust: direction not closed: ${text}`);
        text += ` ${more}`;
      }
      // Two directions on one line: an entrance in parentheses, an exit in a
      // bracket. The exit comes first (see EXIT_FIRST).
      const two = /^(\(.*\)) (\[.*)$/.exec(text);
      if (two) {
        if (text !== EXIT_FIRST) throw new Error(`Faust: two directions on one line, not the line expected: ${text}`);
        direction(two[2]);
        direction(two[1]);
        exitFirst++;
      } else direction(text);
      continue;
    }

    // A line in capitals: the persons on the stage, or a speaker.
    if (isCaps(t)) {
      if (CAST.has(t)) {
        let text = t.replace(/ {2,}/g, ', ');
        if (/_Afterwards_$/.test(t)) text += ` ${lines[++i].trim()}`;
        text = plain(text).replace(/^(.*) \((.*)\)$/, '$1 ($2)');
        report.cast.push(text);
        push({ k: 'd', text });
        speaker = null;
        continue;
      }
      const m = /^([^(_]+?)\.?\s*(_?\(.*)?$/.exec(t);
      if (!m || /[a-z]/.test(m[1])) throw new Error(`Faust: line in capitals not understood: ${t}`);
      speaker = plain(m[1]);
      report.speakers.set(speaker, (report.speakers.get(speaker) || 0) + 1);
      push({ k: 's', text: speaker });
      if (m[2]) direction(m[2]);
      continue;
    }

    // A line of a speech, perhaps with an exit or other direction at its end.
    const m = /^(.*\S)\s+(_?\[_?(?:Exit|Exeunt)(?![a-z]).*|\(_[^()]*_\.?\))$/.exec(t);
    if (m) {
      say(m[1]);
      direction(m[2]);
      trailing++;
      continue;
    }
    if (/^_?[\[]/.test(t)) throw new Error(`Faust: bracket not understood: ${t}`);
    say(t);
  }

  // ---- checks --------------------------------------------------------------
  if (scene !== SCENES.length) throw new Error(`Faust: expected ${SCENES.length} scenes, found ${scene}`);
  if (parts.length !== SCENES.length + 3) throw new Error(`Faust: expected ${SCENES.length + 3} parts, found ${parts.length}`);
  if (parts.slice(0, 3).map((p) => p.id).join() !== 'dedication,prelude,prologue') throw new Error('Faust: the Dedication, Prelude and Prologue are not in their places');
  if (pictures < 40) throw new Error(`Faust: only ${pictures} pictures found`);
  if (trailing !== 4) throw new Error(`Faust: expected 4 directions at the ends of verse lines, found ${trailing}`);
  if (exitFirst !== 1) throw new Error(`Faust: expected one line with an entrance and an exit, found ${exitFirst}`);
  if (report.cast.length !== 14) throw new Error(`Faust: expected 14 lines naming the persons on the stage, found ${report.cast.length}`);
  const ded = parts[0].blocks;
  if (ded.length !== 4 || ded.some((b) => b.k !== 'v' || b.lines.length !== 8)) throw new Error('Faust: the Dedication is not four stanzas of eight lines');
  // Twice a person is named and only acts: a direction follows the name
  // and no words.
  const SILENT = new Set(['s05 MEPHISTOPHELES', 's06 THE WITCH']);
  const faults = [];
  for (const p of parts.slice(1)) {
    // Every speaker speaks, and every speech has a speaker.
    let open = null; // a speaker who has not yet spoken
    let any = false;
    p.blocks.forEach((b, i) => {
      if (b.k === 's') {
        if (open && !SILENT.delete(`${p.id} ${open}`)) faults.push(`${p.id} block ${i}: ${open} has no speech`);
        open = b.text; any = true;
      } else if (b.k === 'v' || b.k === 'p') {
        if (!any) faults.push(`${p.id} block ${i}: speech before any speaker`);
        open = null;
      }
    });
    if (open) faults.push(`${p.id}: ${open} has no speech at the end`);
    const kinds = new Set(p.blocks.map((b) => b.k));
    const isProse = SCENES[Number(p.id.slice(1)) - 1]?.prose;
    if (isProse ? kinds.has('v') : kinds.has('p')) faults.push(`${p.id}: verse and prose are not as expected`);
  }
  if (SILENT.size) faults.push(`expected a name with no speech: ${[...SILENT].join(', ')}`);
  if (faults.length) throw new Error(`Faust: ${faults.length} faults:\n  ${faults.join('\n  ')}`);
  const lastPart = parts[parts.length - 1];
  const end = lastPart.blocks.slice(-3).map((b) => b.k).join('');
  if (end !== 'sdv') throw new Error(`Faust: the last scene does not end with a voice and its line (${end})`);
  return { parts, report };
}

export function run() {
  return writeText('faust', {
    author: 'Johann Wolfgang von Goethe',
    title: 'Faust, Part I',
    translator: 'Bayard Taylor',
    year: 1870, // the First Part; the Second followed in 1871
    verse: false,
    source: { name: 'Project Gutenberg, no. 14591', url: 'https://www.gutenberg.org/ebooks/14591' },
  }, build().parts);
}
