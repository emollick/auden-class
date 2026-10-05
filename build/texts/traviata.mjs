// Verdi, La Traviata: the English of the Italian and English libretto
// published by Fred Rullman, Inc., New York (Internet Archive,
// latraviataloston00verduoft). The book prints a page of Italian and then
// a page of English, two columns to the page; the file is the raw OCR of
// the scan and gives the columns one after another. Only the English is
// taken. See notes/traviata.md.
//
// All line numbers in the tables are lines of the source file.

import { writeText, roman } from '../lib/gutenberg.mjs';
import { sourceLines, englishLines, mend, glue, tidy, squash, proof } from './fidelio-carmen-traviata.lib.mjs';

const ID = 'traviata';
const FILE = 'ia_latraviataloston00verduoft_djvu.txt';
const URL = 'https://archive.org/download/latraviataloston00verduoft/latraviataloston00verduoft_djvu.txt';
const FROM = 148; // the head of the first page of the Italian
const TO = 4160; // 'THE END.'
export const RANGE = [FROM, TO];

// The running head of a page (as the scan reads it) and the page number.
const HEAD = /^(THE LOST ONE[.,]?|LA TRA[VY]{1,2}[IT1]ATA[.,]?|LA TKAVIATA[.,]?|\d{1,2})$/;

// Stray lines to be left out: none in this book.
const DROP = [];
// Lines whose language the words do not settle, settled by hand.
const ASSIGN = [
  [151, 151, 'it'], [310, 310, 'en'], [633, 633, 'en'], [772, 772, 'en'], [775, 775, 'en'], [926, 926, 'it'], [1082, 1082, 'en'],
  [1144, 1144, 'it'], [1191, 1191, 'it'], [1194, 1194, 'it'], [1417, 1417, 'en'], [2512, 2513, 'en'], [2516, 2517, 'en'],
  [2746, 2746, 'it'], [2925, 2925, 'en'], [2928, 2929, 'en'], [2939, 2940, 'en'], [3123, 3123, 'it'], [3302, 3302, 'en'],
  [3320, 3320, 'en'], [3859, 3859, 'it'], [3975, 3975, 'it'], [3978, 3978, 'it'], [3981, 3981, 'it'],
];

export const OPT = { id: ID, from: FROM, to: TO - 1, foreign: 'it', hardGap: 2, head: HEAD, drop: DROP, assign: ASSIGN };

// Misread places: [line, wrong, right]. The wrong string stands exactly
// once in the line (spaces squashed). A line mended to nothing is dropped.
const FIXES = [
  // leaf n10
  [310, 'I.', 'ACT I.'],
  [313, 'I.—', 'SCENE I.—'],
  [317, '1he', 'the'],
  [321, ', seated', 'VIOLETTA, seated'],
  [327, 'Uho.', 'Cho.'],
  [329, 'Y cm', 'You'],
  [330, 'Chv.', 'Cho.'],
  [338, 'fete', 'fête'],
  [340, 'VVTien', 'When'],
  [343, '^\'r > Can', 'Flo. and Mar. Can'],
  [350, 'All-', 'All.'],
  [354, '&ASTONE', 'GASTONE'],
  [354, 'jorward', 'forward'],
  [357, 'fras.', 'Gas.'],
  [357, '0 dear', 'O dear'],
  [359, 'car.', 'can'],
  [360, 'Yio.', 'Vio.'],
  [368, 'teas.', 'Gas.'],
  [370, 'YOU', 'You'],
  [378, 'ready Y', 'ready ?'],
  [387, 'a.ll', 'all'],
  [396, 'Alfred s', 'Alfred\'s'],
  [403, 'Vio. . Pray', 'Vio. Pray'],
  [411, 'Alfred*.', 'Alfred.'],
  [422, '\'T would', '\'Twould'],
  [427, 'flora', 'Flora'],
  [437, 'Mar*', 'Mar.'],
  [437, 'madam', 'madam.'],
  [439, 'Violetta,', 'Violetta.'],
  [443, 'Alfred,', 'Alfred.'],
  [451, 'verac', 'verse'],
  [463, 'Violett', 'Violetta.'],
  [467, 'Yes?- Willingly.', 'Yes ?— Willingly. [Rising.'],
  // leaf n12
  [630, 'Yes, list', 'All. Yes, list'],
  [633, 'AIR.', 'AIR. "WE\'LL DRINK TO THE BEAUTY."'],
  [636, 'WE\'LL DRINK TO THE BEAUTY/', ''],
  [645, 'path way', 'pathway'],
  [650, '^or', 'For'],
  [656, 'AIL', 'All.'],
  [658, 'crown,', 'crown.'],
  [659, 'yio.', 'Vio.'],
  [659, 'iu', 'in'],
  [659, 'onr', 'our'],
  [664, 'lov are', 'love are'],
  [665, 'er \'tis', 'ere \'tis'],
  [670, 'un dimmed', 'undimmed'],
  [672, '&tl.', 'All.'],
  [672, '\\oast', 'toast'],
  [678, '/io.', 'Vio.'],
  [687, 'All Ah', 'All. Ah'],
  [687, 'iu', 'in'],
  [691, 'eai th', 'earth'],
  [696, '¥w.', 'Vio.'],
  [696, '"riends lik', 'friends like'],
  [697, 'AIL Oh .', 'All. Oh !'],
  [697, 'thou0ht', 'thought'],
  [700, 'Alae', 'Alas'],
  [702, '\'Violetta', '[Violetta'],
  [702, 'atop', 'stop'],
  [704, 'aiis you t', 'ails you ?'],
  [705, '7io.', 'Vio.'],
  [707, 'makeoyou', 'makes you'],
  [707, 'then f', 'then ?'],
  [708, 'Vio Well', 'Vio. Well'],
  [708, '—0', '— O'],
  [710, '[8he', '[She'],
  [711, 'AH.', 'All.'],
  [715, 'AIL 0', 'All. O'],
  [715, 'it f', 'it ?'],
  [717, '/«"', 'Vio.'],
  [719, 'Unger', 'linger'],
  [721, 'therji', 'them'],
  [722, 'you,', 'you.'],
  [723, '^(l.', 'All.'],
  [725, 'AH pass', 'All pass'],
  [725, 'Alfr\'3 tnd', 'Alfred and'],
  [726, '\'', 'Violetta.'],
  [729, 'SCENE Hi', 'SCENE III.'],
  [733, 'pale i', 'pale !'],
  [735, 'acting Alfrri*', 'seeing Alfred.'],
  [740, 'heall', 'health'],
  [745, 'Oil I werfc', 'Oh ! wert'],
  [746, 'imard', 'guard'],
  [746, 'lift', 'life'],
  [747, 'tbou', 'thou'],
  [752, 'energi/', 'energy.'],
  [757, 'forgotten, ^aughin^', 'forgotten. [Laughing.'],
  [758, 'heart V', 'heart ?'],
  [759, 'why f', 'why ?'],
  [761, 'question f', 'question ?'],
  [762, 'trifh', 'trifle'],
  [764, 'thus. \'', 'thus.'],
  [768, 'me s', 'me ?'],
  [778, '0 nappy', 'O happy'],
  [779, 'm&}', 'me,'],
  [781, 'nay', 'my'],
  [783, 'surrounded..', 'surrounded,'],
  [784, 'confounded^', 'confounded,'],
  [785, 'my ne', 'my heart.'],
  [786, 'Vie,', 'Vio.'],
  [787, 'Frieudship ie', 'Friendship is'],
  [791, 'loving', 'loving,'],
  [794, 'door,]', 'door.]'],
  [798, 'continue :', 'continue !'],
  [799, 'agree\'', 'agree ?'],
  [800, 'ofgoin$', 'of going.'],
  [803, 'Jtowers from he* bosom,', 'flowers from her bosom.'],
  [805, 'why f', 'why ?'],
  [807, 'Ob ! when f [Comiitg bask', 'Oh ! when ? [Coming back.'],
  [810, '0 Heaven to morrow', 'O Heaven ! to-morrow'],
  [811, 'to morrow', 'to-morrow'],
  [814, '*n <B transport', 'in a transport.'],
  // leaf n14
  [984, '{Going', '[Going'],
  [992, 'iExit', '[Exit'],
  [999, '*ll.', 'All.'],
  [1003, 'fetes', 'fêtes'],
  [1004, 'Tis', '\'Tis'],
  [1014, 'Tis', '\'Tis'],
  [1017, 'sa/st', 'say\'st'],
  [1048, '{She', '[She'],
  [1073, 'round-', 'round—'],
  [1077, 'on the', 'on the left.'],
  [1082, 'ACT H.', 'ACT II.'],
  // the hyphen has not printed in our copy; the other copy of the edition shows it
  [1088, 'ing glass.', 'ing-glass.'],
  [1095, 'LPuts', '[Puts'],
  [1100, 'fetes', 'fêtes'],
  [1121, 'true ; "', 'true ;"'],
  [1136, 'dress,', 'dress.'],
  // leaf n16
  [1349, 'las.', 'has.'],
  [1351, 'A If S peakest', 'Alf. Speakest'],
  [1359, 'wanting ?', 'wanting—— ?'],
  [1362, 'lit. .Return', 'Alf. Return'],
  [1366, '1 shall', 'I shall'],
  [1373, '[» ureadful anguish f', 'O dreadful anguish !'],
  [1375, 'f o live', 'To live'],
  [1377, 'iJut', 'But'],
  [1379, '.1 see', 'I see'],
  [1381, 'angrily \\ for', 'angrily ; for'],
  [1383, '1 will appease :', 'I will appease ;'],
  [1385, 'tf or n ight nor day , till', 'Nor night nor day, till'],
  [1387, 'v foulest shame, [Exti.', 'O foulest shame. [Exit.'],
  [1391, 'ffioLETTA', 'VIOLETTA'],
  [1395, 'Vio, 0', 'Vio. O'],
  [1397, 'd.nn.', 'Ann.'],
  [1399, 'return ?', 'return—— ?'],
  [1401, 'Ann Before', 'Ann. Before'],
  [1402, '"lis', '\'Tis'],
  [1406, '\\Taking', '[Taking'],
  [1406, 'well 1', 'well !'],
  [1408, 'will be calling j', 'Will be calling ;'],
  [1414, 'cftenoards', 'afterwards'],
  [1417, 'Vio, [Reading letter.}', 'Vio. [Reading letter.]'],
  [1422, 'f Throws', '[Throws'],
  [1426, 'fos A', 'Jos. A'],
  [1427, 'F»o.', 'Vio.'],
  [1430, 'presdme', 'presume'],
  [1433, 'her.. In me you see, then.', 'Ger. In me you see, then,'],
  [1436, 'seated,', 'seated.'],
  [1437, 'jer Yes', 'Ger. Yes'],
  [1444, 'snail', 'shall'],
  [1445, 'm.y', 'my'],
  [1448, '(What manners •', '(What manners !'],
  [1456, '[Looking around', '[Looking around.'],
  [1457, 'but 1', 'but I'],
  [1458, '[Handing papers', '[Handing papers.'],
  [1460, '[Saving read them.] Heavens, what a state', '[Having read them.] Heavens, what a state-'],
  [1467, 'accuse you,', 'accuse you.'],
  [1470, 'him -•', 'him !'],
  [1472, 'Ah .\' how', 'Ah ! how'],
  [1477, 'I ask', 'I ask.'],
  [1484, 'fite', 'fate'],
  [1494, 'home inc', 'home and'],
  [1499, 'been.', 'been,'],
  [1501, 'joyoua', 'joyous.'],
  [1508, 'painful ,', 'painful,'],
  [1511, 'thou ~', 'thou—'],
  [1516, 'entirely »', 'entirely ?'],
  [1520, 'Ah \' you', 'Ah ! you'],
  [1521, 'IP this', 'In this'],
  [1521, 'burning j', 'burning ;'],
  [1522, '\' .teft', '\'Reft'],
  [1523, '\\Vhilst', 'Whilst'],
  [1523, 'spurning', 'spurning !'],
  [1524, 'Bv t', 'But'],
  [1525, 'I aft', 'I all'],
  [1527, 'being 5', 'being ;'],
  // leaf n18
  [1709, 'In time, too', 'In time, too——'],
  [1711, 'V^*. Ah, I know wL^t thou wouldst say —', 'Vio. Ah, I know what thou wouldst say—'],
  [1714, '&w- But', 'Ger. But'],
  [1717, 'Uer. Some', 'Ger. Some'],
  [1721, 'Ard time', 'And time'],
  [1728, 'wil 1 e\'en', 'will e\'en'],
  [1734, 'tier. Oh', 'Ger. Oh'],
  [1744, 'Ifio. Thus', 'Vio. Thus'],
  [1746, 't hould', 'should'],
  [1750, 'DUET. " SAY', 'DUET.—"SAY'],
  [1776, '&er. Well', 'Ger. Well'],
  [1778, 'Qer. Well', 'Ger. Well'],
  [1779, '17io. Embrace me, embrace me as tntne own', 'Vio. Embrace me, embrace me as thine own'],
  [1781, 'child-', 'child—'],
  [1782, 'Twill', '\'Twill'],
  [1789, 'to write,', 'to write.'],
  [1790, 'ter. You\'ll', 'Ger. You\'ll'],
  [1792, '&er. Generous', 'Ger. Generous'],
  [1793, 'tbee?', 'thee ?'],
  [1805, 'love j', 'love ;'],
  [1806, 'whilst 1 live', 'whilst I live'],
  [1819, 'rep-«y', 'repay'],
  [1827, 'ANNTNA', 'ANNINA'],
  [1831, '[ Violetta sits down, writes, and then rings beV', '[Violetta sits down, writes, and then rings bell.'],
  [1836, 'appears surprised', 'appears surprised.'],
  [1837, '[Exit Annina', '[Exit Annina.'],
  [1838, 'shall\' I', 'shall I'],
  [1841, 'courage f', 'courage ?'],
  [1848, 'A If.', 'Alf.'],
  [1852, 'confusion f', 'confusion ?'],
  [1866, 'letter-', 'letter—'],
  [1872, '[Much agitated', '[Much agitated.'],
  // leaf n20
  [2069, 'now- -I\'m smiling ! [ With', 'now—I\'m smiling ! [With'],
  [2070, 'Hi be there, \'monust', 'I\'ll be there, \'mongst'],
  [2071, '0 Alfred', 'O Alfred'],
  [2079, 'ilf. Oh', 'Alf. Oh'],
  [2088, '1 may', 'I may'],
  [2092, 'waiting-', 'waiting—'],
  [2099, 'A If. She\'s goue -perhaps', 'Alf. She\'s gone—perhaps'],
  [2103, '[Bis father', '[His father'],
  [2105, 'W ho\' s there ? [ Is aoing ou t.', 'Who\'s there ? [Is going out.'],
  [2112, 'From a. cab', 'From a cab'],
  [2115, '[fie give*', '[He gives'],
  [2121, 'excited t', 'excited ?'],
  [2125, '\' 0 Heaven ! support me ! \\Opensit and reads', 'O Heaven ! support me ! [Opens it and reads.'],
  [2126, '\'Dear A [fred', '‘Dear Alfred'],
  [2127, 'ter"—', 'ter’—'],
  [2130, '[#« v tier s a cry', '[He utters a cry'],
  [2133, 'hunseif, exclaiming —', 'himself, exclaiming—'],
  [2135, 'Gcr. My', 'Ger. My'],
  [2137, 'OQ ! Uow thou sufferest— oh', 'Oh ! how thou sufferest—oh'],
  [2139, 'Eatpm unto', 'Return unto'],
  [2143, '\\Arred in', '[Alfred in'],
  [2144, 'fairies p-**Juce in', 'buries his face in'],
  [2146, 'AiR. lt PUOM PROVENCE', 'AIR. "FROM PROVENCE'],
  [2151, 'Fr*»m thy', 'From thy'],
  [2153, 'away f', 'away ?'],
  [2161, 'and love ; •', 'and love ;'],
  [2163, 'ray guide', 'my guide !'],
  [2170, 'misery ard', 'misery and'],
  [2179, 'dead, ;', 'dead,'],
  [2188, '\\Embracing his son*', '[Embracing his son.'],
  [2192, 'louch', 'touch'],
  [2197, '[Aside', '[Aside.'],
  [2203, 'Ah 1 no, my son. I', 'Ah ! no, my son, I'],
  [2208, 'behoM,', 'behold,'],
  [2209, 'presence j', 'presence ;'],
  [2217, 'table^', 'table,'],
  [2218, 'Floras', 'Flora\'s'],
  [2219, 'fete', 'fête'],
  [2220, 'suc-h', 'such'],
  [2223, '.1 Saloon', 'A Saloon'],
  [2224, 'ftirnishe I, ami lighted', 'furnished, and lighted'],
  [2226, 'tahle', 'table'],
  [2227, 'implement*', 'implements'],
  [2228, 'chairt', 'chairs'],
  [2235, 'to-night •', 'to-night ;'],
  [2236, 'here j', 'here ;'],
  [2237, 'aud Alfred', 'and Alfred'],
  [2243, 'Is it true', 'Doc. and Flo. Is it true'],
  [2246, 'seeme*', 'seemed'],
  // leaf n22
  [2465, 'tfo. Be', 'Flo. Be'],
  [2466, '1 //, Hark', 'All. Hark'],
  [2468, '[ They all yo towards', '[They all go towards'],
  [2474, 'from, the', 'from the'],
  [2477, 'y >ur', 'your'],
  [2485, '^ Let\'fc see', '1. Let\'s see'],
  [2494, 'f To the', '[To the'],
  [2495, 'it 1 shall', 'it I shall'],
  [2496, 'Jfar. What words, dear inadara', 'Mar. What words, dear madam'],
  [2501, '£7o. The', 'Flo. The'],
  [2505, '4.11 Let all a veil b« throwing', 'All. Let all a veil be throwing'],
  [2507, 'aad present >', 'and present ;'],
  // the scan left the direction out; the names stand apart from their lines
  [2509, 'in store.', 'in store. [Flora and the Marquis shake hands.'],
  [2512, '&«s', ''],
  [2513, 'Mat.', ''],
  [2516, 'All the', ''],
  [2517, ')thtrs.', ''],
  [2523, 'lhattadores. and others as Piccadures', 'Mattadores, and others as Piccadores'],
  [2526, 'Of Madrid\'s', 'Gas. and Mat. Of Madrid\'s'],
  [2530, 'maybe', 'may be'],
  [2532, 'If the story', 'All the others. If the story'],
  [2537, 'One Piquillo', 'Gas. and Mat. One Piquillo'],
  [2540, 'sway j', 'sway ;'],
  [2545, 'Five large', '"Five large'],
  [2549, '" Yes', '"Yes'],
  [2555, 'A II the I Brave', 'All the others. Brave'],
  [2556, 'others. $ Truly', 'Truly'],
  [2561, 'Gas. ) Then', 'Gas. and Mat. Then'],
  [2562, 'Mat. \\ To the', 'To the'],
  [2567, 'All the ) By such', 'All the others. By such'],
  [2568, 'others. \\ AH the ladies7 hearts', 'All the ladies\' hearts'],
  [2569, 'Gas. ) But we\'ve tender hearts to deal witl.', 'Gas. and Mat. But we\'ve tender hearts to deal with'],
  [2570, 'Mat. \\ We need', 'We need'],
  [2571, 'lei\'s find our', 'let\'s find out'],
  [2575, 'tl»e', 'the'],
  [2577, 'asoirants', 'aspirants'],
  [2579, 'takeoff', 'take off'],
  [2582, 'SCENE XIL', 'SCENE XII.'],
  [2587, 'AIL Alfred', 'All. Alfred'],
  [2590, 'A If.', 'Alf.'],
  [2592, 'AIL And he don\'t care. Bravo! Now than,', 'All. And he don\'t care. Bravo ! Now then,'],
  [2595, 'other*', 'others'],
  [2600, 'f Advancing to meet her', '[Advancing to meet her.'],
  [2608, '[Aside.}', '[Aside.]'],
  [2613, 'teii ine', 'tell me'],
  [2616, 'sit "beside', 'sit beside'],
  [2620, 'state,', 'stake,'],
  [2628, 'gold i', 'gold I'],
  [2631, 'before- -in', 'before—in'],
  [2639, 'Great Heaven! I Aside', 'Great Heaven ! [Aside.'],
  [2643, '\\To Alfred, pointing 1<> Vio\'etta.', '[To Alfred, pointing to Violetta.'],
  // leaf n24
  [2860, 'Bat. [To Alfred, with ill-concealed malice.}', 'Bar. [To Alfred, with ill-concealed malice.]'],
  [2861, '<Vell', 'Well'],
  [2862, 'Vio Command', 'Vio. Command'],
  // two short lines the scan left out are put back at the ends of 2865 and 2898
  [2865, '[Ironically, i Well, Baron, did you call', '[Ironically.] Well, Baron, did you call me.'],
  [2867, 'J8ar. \\To Alfred.}', 'Bar. [To Alfred.]'],
  [2868, ':U0k Tm', 'luck I\'m'],
  [2870, 'Sot — I', 'So ?—I'],
  [2872, 'Vw. [Aside.]', 'Vio. [Aside.]'],
  [2875, 'heave-i', 'heaven'],
  [2877, 'Cn this', 'On this'],
  [2879, 'And 1 on', 'And I on'],
  [2881, 'Gas Au ace', 'Gas. An ace'],
  [2883, '[lo Alf red.', '[To Alfred.'],
  [2885, 'doublet', 'double ?'],
  [2895, '07/o. Biavo', 'Cho. Bravo'],
  [2896, '4j-nd to Alfred \'', 'kind to Alfred !'],
  [2898, 'jflo. \'Tis plain the Baron will pay the country', 'Flo. \'Tis plain the Baron will pay the country pleasure.'],
  [2903, 't&r The', 'Ser. The'],
  [2905, 'flo. Let\'s', 'Flo. Let\'s'],
  [2907, '[Starting]', '[Starting].'],
  [2911, '[To the Baron', '[To the Baron.'],
  [2913, 'can no at', 'can not at'],
  [2914, 'all have revenge', 'shall have revenge.'],
  [2916, 'Bar, Our', 'Bar. Our'],
  [2918, 'dll retire', '[All retire'],
  [2922, 'VtoLETTA returns, breathless, followed % ALFRED,', 'VIOLETTA returns, breathless, followed by ALFRED.'],
  // the names of this scene stand apart from their lines in the scan
  [2925, 'V\\o.', ''],
  [2928, 'Alf', ''],
  [2929, 'Vio.', ''],
  [2931, 'Alf.', ''],
  [2933, 'Via', ''],
  [2934, 'Alf.', ''],
  [2935, 'Vio.', ''],
  [2936, 'Alf', ''],
  [2939, 'Vio.', ''],
  [2940, 'Alf.', ''],
  [2943, 'I invited', 'Vio. I invited'],
  [2945, 'Will lie do so ?— Oh ! wfl he hear me t', 'Will he do so ?—Oh ! will he hear me ?'],
  [2950, 'Did you call me f What would you t', 'Alf. Did you call me ? What would you ?'],
  [2951, 'Leave this place, I do beseech you I', 'Vio. Leave this place, I do beseech you !'],
  [2952, 'you a» e threatened', 'you are threatened'],
  [2953, 'Ah, I see! that\'s sufficient', 'Alf. Ah, I see !—that\'s sufficient.'],
  [2955, 'Ah, no, ro ! but —', 'Vio. Ah, no, no ! but—'],
  [2956, 'Then what', 'Alf. Then what'],
  [2957, 'I fear, then , that', 'Vio. I fear, then, that'],
  [2958, 'Well, we', 'Alf. Well, we'],
  [2964, 'A iover', 'A lover'],
  [2965, 'alarm yout', 'alarm you ?'],
  [2966, 'But should', 'Vio. But should'],
  [2967, 'irightlul', 'frightful'],
  [2968, 'fatal J', 'fatal !'],
  [2969, 'For m v d\\ ing', 'Alf. For my dying'],
  [2970, 'Oh ! this instant, pray you, go \\', 'Vio. Oh ! this instant, pray you, go !'],
  [2971, 'I will go, buc you must first swea', 'Alf. I will go, but you must first swear'],
  [2974, 'where\'ei ^ &*>,', 'where\'er I go,'],
  [2976, 'will follow', 'will follow.'],
  [2979, 'Go, 0 unhappy one f', 'Go, O unhappy one !'],
  [2981, 'sad name', 'sad name.'],
  [2983, 'me j', 'me ;'],
  [2987, 'For, t o fly from thee I took a sacred oath', 'For, to fly from thee I took a sacred oath.'],
  [2992, 'A\\f. Then', 'Alf. Then'],
  [2995, 'A If. [ Bushes furiously to the doort and call* out—', 'Alf. [Rushes furiously to the door, and calls out—'],
  [3000, 'Tlie tame, and all the o\'hers', 'The same, and all the others'],
  [3007, 'against th', 'against the'],
  [3011, 'AU. Who', 'All. Who'],
  [3012, 'Do YOU know', 'Do you know'],
  [3015, 'Ah { speak', 'Ah ! speak'],
  [3016, 'All No.', 'All. No.'],
  [3018, 'HFB', 'HER'],
  [3020, 'A Ifred. All', 'Alfred. All'],
  [3022, 'blaiuable— -', 'blamable—'],
  [3023, 'All at, her', 'All at her'],
  [3024, 'much I wish', 'much I wish,'],
  [3025, 'disyrace', 'disgrace'],
  [3029, 'Violetta1 s', 'Violetta\'s'],
  [3030, 'lierfeet', 'her feet'],
  [3031, 'Doctor, At', 'Doctor. At'],
  [3036, 'Tfie same', 'The same'],
  [3046, 'here despise', 'here despise.'],
  [3047, 'Oer. He\'s', 'Ger. He\'s'],
  [3048, 'and furiously', 'and furiously.'],
  [3051, 'vhere\'s my Alfred ! I do not see hbr 4', 'where\'s my Alfred ! I do not see him—'],
  [3055, 'faithful j', 'faithful ;'],
  [3056, 'forbid to speak', 'forbid to speak.'],
  // leaf n26
  [3253, 'my being', 'Devours my being'],
  [3255, '[ wished to fly her> but', 'I wished to fly her, but'],
  [3259, '7io. 0 Alfred', 'Vio. O Alfred'],
  [3261, 'Tier fainting', 'her fainting'],
  [3262, 'can\'s t', 'can\'st'],
  [3269, 'thoult', 'thou\'lt'],
  [3286, 'ill. How much thou\'st Buffered', 'All. How much thou\'st suffered'],
  [3290, 'taee', 'thee'],
  [3295, 'Qermant takes Ms son', 'Germont takes his son'],
  [3296, 'room, by', 'room by'],
  [3299, 'END OP THE SECOND ACT', 'END OF THE SECOND ACT.'],
  [3302, 'III.', 'ACT III.'],
  [3305, 'SCENE L—Violetta\'s Bed-room— at the bade a Bed', 'SCENE I.—Violetta\'s Bed-room—at the back a Bed'],
  [3307, 'tlie bed', 'the bed'],
  [3308, 'bottlo of water , a crystal cup, and different loinds', 'bottle of water, a crystal cup, and different kinds'],
  [3309, 'of he room', 'of the room'],
  [3310, 'a I\'ttle apc.rt from', 'a little apart from'],
  [3311, 'fumitwre, upon which a uiglit-', 'furniture, upon which a night-'],
  [3316, '. discovered', 'VIOLETTA discovered'],
  // a word the scan left out is put back at the end of 3317; the direction of 3320 stands after 3325 on the page
  [3317, 'NIPA, seated near the fire-place, has fallen', 'NINA, seated near the fire-place, has fallen asleep.'],
  [3320, '[Waking up.', ''],
  [3323, '/to. [Awaking.]', 'Vio. [Awaking.]'],
  [3325, '4.nn. What would madame ?', 'Ann. What would madame ? [Waking up.'],
  [3329, 'Ann Yes', 'Ann. Yes'],
  [3331, 'Vio, Give me some water. [Annina does 90.', 'Vio. Give me some water. [Annina does so.'],
  [3338, 'toolcs', 'looks'],
  [3339, 'coming:', 'coming !'],
  [3345, '[She rises , but falls again— then, supported 6$', '[She rises, but falls again—then, supported by'],
  [3353, 'so early', 'so early !'],
  [3361, 'awound-', 'a wound-'],
  [3363, 'ed pirit', 'ed spirit !'],
  [3370, 'Vio Ah', 'Vio. Ah'],
  [3374, 'her hand,', 'her hand.'],
  [3377, 'low^tone, whilst following the Doctor^', 'low tone, whilst following the Doctor.]'],
  [3379, 'mistress i', 'mistress ?'],
  [3382, '[Exit', '[Exit.'],
  [3384, 'SCENE III,', 'SCENE III.'],
  [3389, 'Pails the fool is playing— *ttt the Cai', 'Paris the fool is playing—\'tis the Car-'],
  [3393, 'oi*Uy', 'only'],
  [3394, 'suffer 1', 'suffer !'],
  [3395, '[Pointing', '[Pointing.'],
  [3397, 'the pool', 'the poor'],
  [3402, '[Sighing,', '[Sighing.'],
  [3405, 'But you', 'But you——'],
  [3407, 'long return', 'long return-'],
  [3408, '[Exit Annina', '[Exit Annina.'],
  [3412, 'o*4', 'and'],
  [3415, 'fought-', 'fought—'],
  [3417, 'now better', 'now better.'],
  [3423, 'par. .on —', 'pardon—'],
  // the name under the letter is in small capitals on the page
  [3427, 'GEORGE GERMONT.', 'George Germont."'],
  // leaf n28
  [3617, '1 wait', 'I wait'],
  [3621, 's:tdly', 'sadly'],
  [3626, 'Ab i such', 'Ah ! such'],
  [3630, 'AIR.— " ADIEU » THOU', 'AIR.—"ADIEU ! THOU'],
  [3632, 'P8o Adieu', 'Vio. Adieu'],
  [3636, 'away j', 'away ;'],
  [3637, 'iThe friend', 'The friend'],
  [3641, '3hl help me! Oh! help!', 'Oh ! help me ! Oh ! help !'],
  [3644, '3h ! grant', 'Oh ! grant'],
  [3646, 'be o\'er', 'be o\'er.'],
  [3647, 'Ces, soon', 'Yes, soon'],
  [3652, 'restj', 'rest ;'],
  [3654, '#o tear', 'No tear'],
  [3661, 'Oh t grant', 'Oh ! grant'],
  [3662, 'o?er.', 'o\'er.'],
  [3680, 'with horn', 'with horn.'],
  [3685, 'Afr\'ca', 'Africa'],
  [3691, 'boast c f the throng 5', 'boast of the throng ;'],
  [3707, 'dnn. Dear', 'Ann. Dear'],
  [3715, 'promise f', 'promise ?'],
  [3721, 'say\'st thou T', 'say\'st thou ?'],
  [3725, 'Ah 1 Alfred', 'Ah ! Alfred'],
  [3729, '[Anninci', '[Annina'],
  [3730, '\'* Ah ! Alfred*', '"Ah ! Alfred !'],
  [3735, 'the doo.', 'the door.'],
  [3737, '[ Vlfred', '[Alfred'],
  [3739, 'exclaiming -', 'exclaiming—'],
  [3741, 'A If. My', 'Alf. My'],
  [3745, 'much 1', 'much I'],
  [3748, 'T could', 'I could'],
  [3749, 'find\'stme', 'find\'st me'],
  [3752, '0 much adored one f', 'O much adored one ?'],
  [3755, 'Have 1 the power? \'TisI am', 'Have I the power ? \'Tis I am'],
  [3760, 'part. >', 'part.'],
  [3762, '*\' COME, THEN, FROM PARIS.*1', '"COME, THEN, FROM PARIS."'],
  [3766, '«et us', 'let us'],
  [3768, 'Thou\'ltbe rewarded for sadness and gloom-', 'Thou\'lt be rewarded for sadness and gloom—'],
  [3769, 'wilt bloom', 'wilt bloom.'],
  [3771, 'shall bo.', 'shall be.'],
  [3775, 'Health,,', 'Health,'],
  [3778, 'Ah i no more ! To the temple, 0 Alfred 1', 'Ah ! no more ! To the temple, O Alfred !'],
  [3783, 'I Staggers.', '[Staggers.'],
  [3791, '[87ie sinks on a chair fainting, and her head folk', '[She sinks on a chair fainting, and her head falls'],
  [3796, 'hei .', 'her.'],
  [3798, 'Vio, It', 'Vio. It'],
  [3799, 'stronger >', 'stronger ;'],
  [3800, '[ With an effot .', '[With an effort.'],
  [3802, 'fortune.\'', 'fortune !'],
  [3804, 'nothing \\ Aninna', 'nothing ! Annina'],
  [3807, 'Aty. But', 'Alf. But'],
  [3809, 'Vio No ! 1 — must', 'Vio. No ! I—must'],
  [3811, 'in^ikea an effor*', 'makes an effort'],
  [3812, 'weak. a", id exclaims', 'weak, and exclaims'],
  // leaf n30
  [3988, 'I She throws away the dress eexedfy', '[She throws away the dress vexedly'],
  [3991, 'is it f', 'is it ?'],
  [3995, 'Ah I tell', 'Ah ! tell'],
  [3999, 'and ^^—', 'and me—'],
  [4003, 'But, If', 'But, if'],
  [4008, 'SCENE vn.', 'SCENE VII.'],
  [4010, 'AURBJD', 'ALFRED'],
  [4012, 'Ffo. Great', 'Vio. Great'],
  [4016, 'is nigh.', 'is nigh,'],
  [4022, 'too late I', 'too late !'],
  [4024, 'being I light', 'being ! light'],
  [4026, 'top,', 'too,'],
  [4032, 'Violettal calm', 'Violetta ! calm'],
  [4034, 'to seel', 'to see !'],
  [4037, 'G EKMONT', 'GERMONT'],
  [4039, '[Entering.} Ah! Violettal', '[Entering.] Ah ! Violetta !'],
  [4043, 'father 1', 'father !'],
  [4045, 'forgotten met', 'forgotten me ?'],
  [4059, 'who \'re', 'who\'re'],
  [4060, 'thou I', 'thou !'],
  [4062, 'Heaven 1 \'tis true. [Observing her. \'', 'Heaven ! \'tis true. [Observing her.'],
  [4075, 'done f', 'done ?'],
  [4078, 'the takes', 'she takes'],
  [4105, 'thou shalt not die I Ah I say', 'Thou shalt not die ! Ah ! say'],
  [4107, 'and me I', 'and me !'],
  [4128, '/a „. I While', 'Ger., Doc. and Ann. While'],
  [4130, '7v7^ I They 8ha11 be shed f or thee I', 'They shall be shed for thee !'],
  [4132, 'Ann f Oh ! fly to the Almighty-', 'Oh ! fly to the Almighty—'],
  [4134, 'Ann\' } He', 'He'],
  [4135, '[R*vi*wj', '[Reviving.'],
  [4148, 'happiness I [She falls lack again en the sofa', 'happiness ! [She falls back again on the sofa.'],
  [4152, 'O Heaven I receive', 'O Heaven ! receive'],
  [4153, 'Doc She is dead! [After having felt tor pulse.', 'Doc. She is dead ! [After having felt her pulse.'],
  [4154, 'Ome!', 'O me !'],
  [4155, 'Ail. Oh! dreadful grief I', 'All. Oh ! dreadful grief !'],
  [4157, 'fatts.', 'falls.'],
];

// Slips of the printer, not of the scan (seen on the page): mended too.
const MISPRINTS = [
  [383, 'o\'eflow', 'o\'erflow'],
  [455, 'thou. To Alfred,', 'thou. [To Alfred.'],
  [1448, '(What manners !', '(What manners !)'],
  [1829, 'O Heaven ?', 'O Heaven !'],
  [2907, '[Starting].', '[Starting.]'],
  [3395, 'cubboard', 'cupboard'],
  [3725, 'Aio.', 'Vio.'],
  [3730, '"Ah ! Alfred !', '"Ah ! Alfred !"'],
  [3752, 'adored one ?', 'adored one !'],
];

// The English lines of the libretto, mended.
export function stream() {
  const lines = sourceLines(FILE, URL);
  if (squash(lines[FROM - 1]) !== 'LA TRAVTATA.' || squash(lines[TO - 1]) !== 'THE END.') throw new Error(`${ID}: the libretto does not lie where it did in the file`);
  let en = englishLines(lines, OPT);
  en = mend(mend(en, FIXES, ID), MISPRINTS, ID);
  return en;
}

// Directions that stand without a bracket: [first line, last line]; each
// is one paragraph of the book. (The description of the scene, where one
// follows the heading in the same line, and the persons of the scene.)
const PLAIN = [[313, 318], [321, 325], [354, 356], [374, 375], [725, 726], [731, 731], [996, 997], [1012, 1012], [1085, 1089],
  [1091, 1091], [1136, 1136], [1371, 1371], [1391, 1393], [1414, 1415], [1827, 1827], [2077, 2077], [2119, 2119], [2223, 2229],
  [2231, 2233], [2472, 2474], [2522, 2524], [2584, 2585], [2922, 2922], [3000, 3001], [3036, 3037], [3295, 3297], [3305, 3313],
  [3316, 3317], [3351, 3351], [3385, 3385], [3412, 3413], [3705, 3705], [3733, 3733], [4010, 4010], [4037, 4037], [4157, 4157]];
// A direction opens with a bracket. Where the book closes the bracket the
// direction ends there; where it does not (the common case) the direction
// runs on to the end of its sentence, or to a dash or a colon at the end of
// a line. The exceptions: lines that go on with the direction though the
// line above ends a sentence,
const MORE = new Set([2617]);
// and lines at which a direction ends without such a mark.
const ENDS = new Set([2218]);
// A line of a speech that begins with a capital begins a line of verse,
// and one that begins with a small letter is turned over from the line
// above. The exceptions:
const TURNED = new Set([1477, 4081]); // begins with a capital, yet turned over
const STARTS = new Set([]); // begins with a small letter, yet a new line
// Lines that end in a hyphen which belongs to the word.
export const HYPHEN_KEPT = new Set([1783, 2527, 3311, 4076]);
// Speeches with no name over them, and whose they are: each follows a
// heading that names the one person on the stage.
const UNNAMED = new Map([[1014, 'VIOLETTA'], [1373, 'ALFRED'], [3415, 'VIOLETTA']]);
// Lines that are a name in full, set over a number in the middle of the
// column: [line, as the book has it, the name].
const NAMED = [[1752, 'VIOLETTA and GERMONT.', 'VIOLETTA AND GERMONT'], [3664, 'BACCHANALIAN CHORUS.', 'BACCHANALIAN CHORUS'],
  [3764, 'VIOLETTA and ALFRED.', 'VIOLETTA AND ALFRED']];

// The names over the speeches as the book has them, without the stop that
// ends them. Most are cut to three letters; the full names are those of
// the book's list of persons and of its directions (which speak of the
// Baron, the Marquis and the Doctor, and bring on a Messenger and a
// Servant). Where two or three names stand against a brace in the book
// they are written here with "and". Under "Gypsies" the book numbers two
// speeches 1 and 2.
const WHO = new Map(Object.entries({
  Vio: 'VIOLETTA', Alf: 'ALFRED', Ger: 'GERMONT', Gas: 'GASTONE', Bar: 'BARON', Mar: 'MARQUIS', Doc: 'DOCTOR', Flo: 'FLORA',
  Ann: 'ANNINA', Jos: 'JOSEPH', Mess: 'MESSENGER', Ser: 'SERVANT', Cho: 'CHORUS', 'Cho. 1': 'CHORUS 1', 'Cho. 2': 'CHORUS 2',
  All: 'ALL', Both: 'BOTH', Gypsies: 'GYPSIES', 1: 'GYPSIES 1', 2: 'GYPSIES 2', 'All the others': 'ALL THE OTHERS',
  'Gas. and Mat': 'GASTONE AND MATADORES', 'Flo. and Mar': 'FLORA AND MARQUIS', 'Doc. and Flo': 'DOCTOR AND FLORA',
  'Ger., Doc. and Ann': 'GERMONT, DOCTOR AND ANNINA', Germont: 'GERMONT', Alfred: 'ALFRED',
}));
// Words that keep their capital in the names of the airs.
const PROPER = ['Provence', 'Paris', 'O'];
const SCENES = [5, 15, 8];
const SPEECHES = 417; // names over speeches, those supplied among them
const DIRECTIONS = 216;

// A speaker's name at the head of a line, with the stop after it.
function speaker(text) {
  let best = null;
  for (const [key, name] of WHO) {
    if (!text.startsWith(key)) continue;
    const rest = text.slice(key.length);
    if (!/^(\.$|\. )/.test(rest)) continue;
    if (!best || key.length > best.key.length) best = { key, name, rest: rest.slice(1).trim() };
  }
  return best;
}

const startsSmall = (s) => /^[^A-Za-z]*[a-z]/.test(s);
const endsDirection = (s) => /[.!?:—]$/.test(s);
// The book sets its dashes close up to the words.
const fin = (s) => tidy(s).replace(/\s*—\s*/g, '—');
// Names set in small capitals inside the directions: in ordinary letters.
const title = (s) => s.replace(/[A-Z]{2,}/g, (w) => w[0] + w.slice(1).toLowerCase());
// The name of an air, set in small capitals: in ordinary letters.
function label(kind, sep, name) {
  let t = name.toLowerCase().replace(/[a-z]/, (c) => c.toUpperCase());
  for (const w of PROPER) t = t.replace(new RegExp(`\\b${w.toLowerCase()}\\b`, 'g'), w);
  return `${kind[0]}${kind.slice(1).toLowerCase()}.${sep}${t}`;
}

export function build(trace = null) {
  const st = stream();
  const note = (n, what) => { if (trace) trace.set(n, what); };
  const inStream = new Map(st.map((l) => [l.n, l]));
  for (const n of [...PLAIN.flat(), ...MORE, ...ENDS, ...TURNED, ...STARTS, ...HYPHEN_KEPT, ...UNNAMED.keys(), ...NAMED.map((r) => r[0])]) {
    if (!inStream.has(n)) throw new Error(`${ID}: line ${n}, named in a table, is not an English line of the libretto`);
  }
  for (const [n, text] of NAMED) if (inStream.get(n).text !== text) throw new Error(`${ID}: line ${n} is not the name ${text}`);
  const named = new Map(NAMED.map(([n, , name]) => [n, name]));

  const parts = [];
  let part = null;
  let scenes = 0;
  let said = null; // whose speech it is
  let verse = null; // its lines, as far as they are gathered
  let last = null; // the last line of the file put into them
  const met = new Set();

  const closeVerse = () => {
    if (verse) part.blocks.push({ k: 'v', lines: verse.map(fin) });
    verse = null;
    last = null;
  };
  const closeAct = () => {
    if (part && scenes !== SCENES[parts.length - 1]) throw new Error(`${ID}: act ${parts.length} has ${scenes} scenes, expected ${SCENES[parts.length - 1]}`);
  };
  const direction = (text, n) => {
    closeVerse();
    const t = title(fin(text));
    if (!t || /[\[\]]/.test(t)) throw new Error(`${ID}: line ${n}: the direction is not understood: ${JSON.stringify(t)}`);
    part.blocks.push({ k: 'd', text: t });
  };
  const joined = (pieces) => pieces.reduce((a, p, k) => (k === 0 ? p.text : glue(a, p.text, HYPHEN_KEPT.has(pieces[k - 1].n))), '');
  const name = (who) => {
    closeVerse();
    said = who;
    part.blocks.push({ k: 's', text: who });
  };
  // Words of a speech, from the line l: fresh if they begin a line of verse.
  const words = (text, l, fresh) => {
    if (!said) throw new Error(`${ID}: line ${l.n}: words with no speaker: ${text.slice(0, 40)}`);
    if (/[\[\]]/.test(text)) throw new Error(`${ID}: line ${l.n}: a bracket among the words: ${text}`);
    if (fresh) {
      if (!verse) verse = [];
      verse.push(text);
    } else {
      if (!verse) throw new Error(`${ID}: line ${l.n} is turned over from nothing: ${text}`);
      verse[verse.length - 1] = glue(verse[verse.length - 1], text, HYPHEN_KEPT.has(last.n));
    }
    note(l.n, fresh ? 'v' : 't');
    last = { n: l.n, text };
  };
  const isHeading = (l) => /^(ACT|SCENE) /.test(l.text) || /^(AIR|DUET|SCENE)\./.test(l.text) || named.has(l.n) || PLAIN.some(([a]) => a === l.n);
  // Does the line `next` go on with the open direction whose last line so far is `prev`?
  const goesOn = (prev, next) => {
    if (MORE.has(next.n)) return true;
    if (ENDS.has(prev.n) || endsDirection(tidy(prev.text))) return false;
    if (next.text.startsWith('[') || isHeading(next)) throw new Error(`${ID}: the direction ends at line ${prev.n} without a stop; if it is so in the book, say so in ENDS`);
    if (speaker(next.text)) throw new Error(`${ID}: line ${next.n} looks like a name, and the direction above it is not ended; say which it is in MORE or ENDS`);
    return true;
  };

  for (let i = 0; i < st.length; i++) {
    const l = st[i];
    let m;
    if ((m = l.text.match(/^ACT ([IVX]+)\.$/))) {
      if (part) closeVerse();
      closeAct();
      const n = roman(m[1]);
      if (n !== parts.length + 1) throw new Error(`${ID}: act ${n} out of order, line ${l.n}`);
      part = { id: `act-${n}`, label: `Act ${n}`, blocks: [] };
      parts.push(part);
      scenes = 0;
      said = null;
      note(l.n, 'h');
      continue;
    }
    if (!part) throw new Error(`${ID}: line ${l.n} stands before the first act`);
    if (/^END OF (ACT [IVX]+|THE [A-Z]+ ACT)\.$/.test(l.text)) {
      closeVerse();
      said = null;
      note(l.n, 'x');
      continue;
    }
    // the heading of a scene; the description of the place may follow it in the same line
    let text = l.text;
    if ((m = text.match(/^SCENE ([IVX]+|THE LAST)\.(?:\s*—\s*(.+))?$/))) {
      closeVerse();
      const n = m[1] === 'THE LAST' ? scenes + 1 : roman(m[1]);
      if (n !== scenes + 1) throw new Error(`${ID}: ${part.label}, scene ${n} out of order, line ${l.n}`);
      if (m[1] === 'THE LAST' && parts.length !== SCENES.length) throw new Error(`${ID}: the last scene is not in the last act, line ${l.n}`);
      scenes = n;
      said = null;
      part.blocks.push({ k: 'h', level: 3, text: m[1] === 'THE LAST' ? 'Scene the Last' : `Scene ${n}` });
      note(l.n, 'h');
      if (!m[2]) {
        if (PLAIN.some(([a, b]) => l.n >= a && l.n <= b)) throw new Error(`${ID}: line ${l.n} is a heading and no direction`);
        continue;
      }
      text = m[2];
    }
    const plain = PLAIN.find(([a, b]) => l.n >= a && l.n <= b);
    if (plain) {
      if (l.n !== plain[0]) throw new Error(`${ID}: the direction of lines ${plain[0]} to ${plain[1]} is not whole`);
      const pieces = [{ n: l.n, text }];
      while (st[i].n < plain[1]) pieces.push(st[++i]);
      pieces.forEach((p, k) => note(p.n, k ? 'd' : 'D'));
      direction(joined(pieces), l.n);
      continue;
    }
    if (text !== l.text) throw new Error(`${ID}: line ${l.n}: words after the heading of the scene, and no direction named in PLAIN`);
    // the name of an air
    if ((m = text.match(/^(AIR|DUET|SCENE)\.(—| )(.+)$/))) {
      if (/[a-z]/.test(m[3])) throw new Error(`${ID}: line ${l.n}: the name of the air is not in capitals: ${text}`);
      closeVerse();
      said = null;
      part.blocks.push({ k: 'd', text: fin(label(m[1], m[2], m[3])) });
      note(l.n, 'L');
      continue;
    }
    if (named.has(l.n)) {
      name(named.get(l.n));
      note(l.n, 's');
      continue;
    }
    if (UNNAMED.has(l.n)) name(UNNAMED.get(l.n));
    let fresh = null; // not yet known
    const sp = speaker(text);
    if (sp) {
      name(sp.name);
      met.add(sp.key);
      text = sp.rest;
      fresh = true;
      if (!text) { note(l.n, 's'); continue; }
    }
    // the words and the directions of the line, in their order
    let cur = l;
    while (text) {
      const at = text.indexOf('[');
      const before = (at < 0 ? text : text.slice(0, at)).trim();
      if (before) {
        if (fresh === null) fresh = STARTS.has(cur.n) || (!TURNED.has(cur.n) && !startsSmall(before) && !(last && /[A-Za-z]-$/.test(last.text)));
        words(before, cur, fresh);
      }
      if (at < 0) break;
      let dir = text.slice(at + 1).trim();
      let close = dir.indexOf(']');
      const pieces = [{ n: cur.n, text: close < 0 ? dir : dir.slice(0, close) }];
      text = close < 0 ? '' : dir.slice(close + 1).trim();
      note(cur.n, before ? 'w' : 'B');
      if (close < 0) {
        // the bracket is not closed in this line: the direction may run on
        for (;;) {
          const next = st[i + 1];
          if (!next) break;
          const c = next.text.indexOf(']');
          const o = next.text.indexOf('[');
          if (c >= 0 && (o < 0 || c < o)) {
            pieces.push({ n: next.n, text: next.text.slice(0, c) });
            text = next.text.slice(c + 1).trim();
            cur = next;
            i++;
            note(next.n, 'b');
            close = c;
            break;
          }
          if (!goesOn(pieces[pieces.length - 1], next)) break;
          pieces.push(next);
          cur = next;
          i++;
          note(next.n, 'b');
        }
      }
      direction(joined(pieces), l.n);
      fresh = true; // words after a direction in the same line begin a line
    }
  }
  closeVerse();
  closeAct();
  if (parts.length !== SCENES.length) throw new Error(`${ID}: expected ${SCENES.length} acts, found ${parts.length}`);
  for (const key of WHO.keys()) if (!met.has(key)) throw new Error(`${ID}: the name ${key} is over no speech`);

  // The marks of quotation: one that opens stands at the head of a line or
  // after a space or a dash; the others close. They must answer each other.
  for (const p of parts) {
    let open = false;
    const marks = (s, where) => s.replace(/(^|[\s(—])"\s*|"/g, (q, before) => {
      const opens = before !== undefined;
      if (opens === open) throw new Error(`${ID}: ${where}: the marks of quotation do not answer each other: ${s}`);
      open = opens;
      return opens ? `${before}“` : '”';
    });
    p.blocks.forEach((b, i) => {
      const where = `${p.id}, block ${i}`;
      if (b.k === 'v') b.lines = b.lines.map((t) => marks(t, where));
      else b.text = marks(b.text, where);
      if (b.k === 's' && open) throw new Error(`${ID}: ${where}: a quotation is left open`);
    });
    if (open) throw new Error(`${ID}: ${p.id}: a quotation is left open`);
  }
  // the apostrophes are the printer's throughout
  const curl = (s) => s.replace(/'/g, '’');
  for (const p of parts) {
    for (const b of p.blocks) {
      if (b.k === 'v') b.lines = b.lines.map(curl);
      else b.text = curl(b.text);
    }
  }
  proof(ID, parts);

  // What was found must be what was found when the tables were made.
  const count = (k) => parts.reduce((n, p) => n + p.blocks.filter((x) => x.k === k).length, 0);
  if (count('s') !== SPEECHES || count('d') !== DIRECTIONS) throw new Error(`${ID}: ${count('s')} speeches and ${count('d')} directions, expected ${SPEECHES} and ${DIRECTIONS}`);
  const first = parts[0].blocks;
  const end = parts[2].blocks.slice(-3);
  if (first[0].text !== 'Scene 1' || !first[1].text.startsWith('A saloon in the house of Violetta') || first[3].text !== 'CHORUS 1'
    || end[0].text !== 'ALL' || end[1].k !== 'v' || !end[1].lines[0].startsWith('Oh! dreadful grief') || end[2].text !== 'A Tableau, and the curtain falls.') {
    throw new Error(`${ID}: the libretto does not begin or end as expected`);
  }
  return parts;
}

export function run() {
  return writeText(ID, {
    author: 'Giuseppe Verdi',
    title: 'La Traviata',
    translator: null, // not named in the book
    year: null, // the book bears no date
    note: 'The English version from the Italian and English libretto that Fred Rullman of New York published for the Metropolitan Opera House. It calls the opera *The Lost One* and gives neither translator nor date. This text was read by machine from a scan. It was then read through against the scan, but some misread words may remain.',
    verse: false,
    source: { name: 'Internet Archive', url: 'https://archive.org/details/latraviataloston00verduoft' },
  }, build());
}

// Words of the English that are in none of the other English texts of the
// course, each looked at and found right: names and their short forms,
// then words.
export const KNOWN = [
  'Vio', 'Alf', 'Violetta', 'Annina', 'Flo', 'Germont', 'Flora', 'Doc', 'Gastone', 'Jos', 'Cho', 'Viscount', 'Grenville', 'Douphol',
  'Valery', 'Piquillo', 'Biscaye', 'Andalusia', 'Hebe',
  'saloon', 'matadore', 'matador', 'mattadori', 'mattadores', 'piccadores', 'staking', 'maskers', 'fête', 'fêtes', 'duet', 'vot\'ries',
  'vexedly', 'vented', 'refreshments', 'misinformed', 'lovelight', 'lengthens', 'lateral', 'lacerate', 'heedest', 'forewarns',
  'expended', 'exotics', 'disburse', 'determinedly', 'converses', 'conspiring', 'canceled', 'basely', 'bacchanalian', 'aspirants',
  'toilette-table', 'night-lamp', 'bull-fights', 'broken-hearted',
];
