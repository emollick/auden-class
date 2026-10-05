// Bizet, Carmen: the English of the French and English libretto published
// by Fred Rullman, New York (Internet Archive, carmen1910bize). The book
// prints the French in the left column of each page and the English in
// the right; the file is the raw OCR of the scan and gives the columns
// one after another. Only the English is taken. See notes/carmen.md.
//
// All line numbers in the tables are lines of the source file.

import { writeText, roman } from '../lib/gutenberg.mjs';
import { sourceLines, englishLines, mend, glue, tidy, squash, proof } from './fidelio-carmen-traviata.lib.mjs';

const ID = 'carmen';
const FILE = 'ia_carmen1910bize_djvu.txt';
const URL = 'https://archive.org/download/carmen1910bize/carmen1910bize_djvu.txt';
const FROM = 343; // 'ACTE PREMIER.'
const TO = 6052; // 'END OF THE OPERA.'
export const RANGE = [FROM, TO];

// The running head of a page (as the scan reads it) and the page number.
const HEAD = /^(CARMEN|OAKMEN|CABMEN|CAKMEN|CAKMEK|CARMEK|CAKMEJS|CAEMEN)\.?$|^\d{1,2}$/;

// Stray marks left out.
const DROP = [
  [1705, '\\'],
  [4529, 'u', true], // a page number
];
// Lines whose language the words do not settle, settled by hand.
const ASSIGN = [
  [395, 395, 'en'], // the heading of the act
  [505, 511, 'fr'], // wreck of the foot of the French column
  [689, 689, 'en'], [774, 774, 'en'], [807, 807, 'en'], [832, 832, 'en'], // the trumpet's syllables
  [1209, 1209, 'fr'],
  [1952, 1952, 'en'], // tra la la
  [2063, 2063, 'en'], [2071, 2083, 'en'], // names read as a column of their own
  [2394, 2394, 'en'], // tra la la
  [3109, 3109, 'fr'],
  [3690, 3690, 'en'], [3842, 3842, 'en'], [3889, 3889, 'en'], [3993, 3993, 'en'], [4140, 4140, 'en'],
  [4301, 4301, 'fr'],
  [4753, 4753, 'en'],
  [6000, 6000, 'fr'],
  [6003, 6004, 'en'],
];

export const OPT = { id: ID, from: FROM, to: TO - 1, foreign: 'fr', hardGap: Infinity, head: HEAD, drop: DROP, assign: ASSIGN };

// Misread places: [line, wrong, right]. The wrong string stands exactly
// once in the line (spaces squashed). A line mended to nothing is dropped.
const FIXES = [
  // leaf n8
  [395, 'ACT l', 'ACT I.'],
  [398, 'SCENE L', 'SCENE I.'],
  [413, 'thei*', 'their'],
  [414, 'fags', 'flags'],
  [421, 'smoMng', 'smoking'],
  [421, 'passers*', 'passers-'],
  [436, 'oui', 'out'],
  // leaf n9
  [536, 'he if', 'he is'],
  [541, 'him ri', 'him ?'],
  [542, 'troopt', 'troop.'],
  [552, 'no-.v coining', 'now coming'],
  [561, 'Mio.', 'Mic.'],
  [570, 'welcome?.', 'welcomes.'],
  [572, 'Mia Of', 'Mic. Of'],
  [578, 'Michaeloj', 'Michaela)'],
  // leaf n10
  [644, 'Mio.', 'Mic.'],
  [646, 'Good- b je', 'Good-bye'],
  [649, 'Mob.', 'Mor.'],
  [660, 'Michafla\'s', 'Michaela\'s'],
  [675, 'Fifers / then', 'Fifers ; then'],
  [685, 'heels ï See', 'heels ! See'],
  [688, 'up I be', 'up ! be'],
  [698, 'pave*', 'pave-'],
  // leaf n11
  [777, 'ttit', 'the'],
  [784, 'giri', 'girl'],
  [793, 'New- Comers', 'New-Comers'],
  [800, 'he/ore', 'before'],
  [800, '1 elieved', 'relieved'],
  [808, '\' Each', 'Each'],
  [812, '^uick', 'Quick'],
  // leaf n12
  [910, '\' i Present / "', '"Present !"'],
  [911, '1 \' Carry !" " Break the line ! \' \'', '"Carry !" "Break the line !"'],
  [922, 'Co to', 'Go to'],
  [922, 'cigarettes %', 'cigarettes ?'],
  [935, 'an;', 'are'],
  [938, 'petticoat', 'petticoat.'],
  [962, 'rings,', 'rings.'],
  // leaf n13
  [1077, '\\The', '[The'],
  [1077, 'arrive^', 'arrive,'],
  [1092, 'it-', 'it'],
  [1095, 'smoke-', 'smoke—'],
  [1110, 'skies,—-', 'skies,—'],
  [1114, 'prove\'', 'prove'],
  [1133, 'Mérimée s', 'Mérimée\'s'],
  [1134, 'a, bou-', 'a bou-'],
  // leaf n14
  [1222, 'Oak. "When', 'Car. When'],
  [1239, 'unheedhig:', 'unheeding;'],
  [1241, 'thet', 'thee,'],
  [1246, 'Jaw\'s', 'law\'s'],
  [1253, 'secure,.', 'secure,'],
  [1255, 'lur&*', 'lure.'],
  [1257, 'I.e.', 'he.'],
  [1259, 'f reet', 'free !'],
  [1270, 'Cabmen', 'Carmen'],
  // leaf n15
  [1348, 'a/rtd', 'and'],
  [1349, 'ts at tcork.', 'is at work,'],
  [1352, 'him / he', 'him ; he'],
  [1353, 'hell', 'bell'],
  [1367, 'flower \'s \\ smells', 'flowers, smells'],
  [1404, 'else (', 'else ?'],
  [1412, 'wuxuti', 'would'],
  // leaf n16
  [1498, 'Mio.', 'Mic.'],
  [1507, '" My daughter," said she, kt to', '"My daughter," said she, "to'],
  [1509, 'do^t', 'dost'],
  [1512, 'peek', 'seek'],
  [1523, 'Jo^e', 'Jose'],
  [1524, 'kis-,', 'kiss,'],
  [1526, 'mothei', 'mother'],
  [1527, 'Mtc.', 'Mic.'],
  [1531, 'Michael a', 'Michaela'],
  [1536, 'Josk', 'Jose'],
  [1539, 'shall 1 e\'er', 'shall I e\'er'],
  [1542, 'yon<Jer', 'yonder'],
  [1546, 'the m me', 'the name'],
  [1555, 'Joss.', 'Jose.'],
  [1555, 'prey,', 'prey'],
  [1557, 'thou\' It', 'thou\'lt'],
  // leaf n17
  [1636, 'Mie.', 'Mic.'],
  [1636, 'thon !', 'thou ?'],
  [1639, 'ISTo', 'No'],
  [1647, 'Josb.', 'Jose.'],
  [1659, 'Mio.', 'Mic.'],
  [1664, ') My', 'My'],
  [1665, 'Mio. ) His', 'Mic. His'],
  [1670, 'letter*', 'letter.'],
  [1671, 'Mio.', 'Mic.'],
  [1693, 'Michael a', 'Michaela'],
  [1696, 'witch— —', 'witch——'],
  [1702, 'Soldiers', 'Soldiers.'],
  // leaf n18
  [1797, '1 ST Group.', '1st Group.'],
  [1803, 'res,', 'yes,'],
  [1811, 'donkey r', 'donkey !'],
  [1816, '" A donkey', '"A donkey'],
  [1824, 'uAnd', '"And'],
  [1827, 'w;iy', 'way'],
  [1830, 'tight', 'fight'],
  [1834, 'Jos*.', 'Jose.'],
  [1839, 'factory y during', 'factory ; during'],
  // leaf n19
  [1924, 'away-', 'away—'],
  [1925, 'you 1', 'you !'],
  [1928, 'bach', 'back.'],
  [1938, 'beeo a îr&y.', 'been a fray.'],
  [1939, 'Uovs', 'blows,'],
  [1946, 'hear*', 'hear ?'],
  [1949, 'cnoa', 'thou'],
  [1952, 'tralala', 'tra la la'],
  [1960, 'me Î', 'me !'],
  [1964, 'not % Reply In-', 'not ? Reply !—'],
  [1966, 'I\'D', 'I\'ll'],
  [1974, 'prison 1', 'prison ?'],
  [1978, 'Ï Speaks', '[Speaks'],
  [1978, 'i/n', 'in'],
  [1982, 'Yery', 'Very'],
  // leaf n20
  [2065, 'José', 'Jose'],
  [2065, 'Carmeh', 'Carmen'],
  [2066, 'arid', 'and'],
  [2066, 'Jose, He', 'Jose. He'],
  [2067, 'hack', 'back'],
  [2089, 'Really \\ Thou wilt obey the orders \\', 'Really ? Thou wilt obey the orders ?'],
  [2092, '"Well', 'Well'],
  [2113, 'we\' 11', 'we\'ll'],
  [2114, 'Pastia', 'Pastia.'],
  [2128, 'Wlio', 'Who'],
  // leaf n21
  [2213, '"Wilt thou not be silent £', 'Wilt thou not be silent ?'],
  [2218, 'yon', 'you'],
  [2224, 'Josb.', 'Jose.'],
  [2227, 'briga*', 'briga-'],
  [2234, 'Carman', 'Carmen'],
  [2241, 'm.urmuring', 'murmuring'],
  [2243, 'I si) all', 'I shall'],
  [2246, 'tha', 'the'],
  [2247, 'hack,', 'back.'],
  [2248, 'enter*.', 'enters.'],
  [2251, 'SCENE XL', 'SCENE XI.'],
  [2253, 'then f', 'then !'],
  [2256, 'wiK', 'will'],
  [2259, 'grjund', 'ground'],
  [2260, 'rest t o me', 'rest to me'],
  [2262, 'hersef', 'herself'],
  [2268, 'Carmkn', 'Carmen'],
  [2274, 'Cab.', 'Car.'],
  [2276, 'I? or', 'For'],
  [2278, 'beware I', 'beware !'],
  // leaf n22
  [2352, 'disappears /', 'disappears ;'],
  [2364, '<&c.', '&c.'],
  [2366, 'Th&', 'The'],
  [2367, 'left Towards', 'left. Towards'],
  [2372, 'Tivo', 'Two'],
  [2375, 'hut sud-', 'but sud-'],
  [2376, 'denlg', 'denly'],
  [2399, 'Fras*', 'Fras-'],
  [2400, 'qutta', 'quita'],
  [2400, '" Tra la la "', '"Tra la la"'],
  [2407, 'dance en', 'dance en-'],
  // leaf n23
  [2497, 'IIP', 'III.'],
  [2506, 'wine -cup\'s', 'wine-cup\'s'],
  [2541, 'p \' f Ah', 'Car., Fras. and Mer. Ah'],
  [2541, 'thus,', 'thus.'],
  [2542, 'v/r v * ( Good-bye', 'Good-bye'],
  [2551, 'g^es', 'goes'],
  // leaf n24
  [2639, 'Eso.', 'Esc.'],
  [2651, 'witli', 'with'],
  [2667, 'love;s', 'love\'s'],
  [2687, 'hreast', 'breast'],
  // leaf n25
  [2786, 'EbCAMiLLo', 'Escamillo'],
  [2789, 'Esc (to', 'Esc. (to'],
  [2794, 'you %', 'you ?'],
  [2810, 'Zing ar elle', 'Zingarelle'],
  [2815, 'Pabtta', 'Pastia'],
  [2818, 'II Remendado', 'Il Remendado'],
  // leaf n26
  [2961, 'Mer. & ) "When you set out,', 'Mer. & Fras. When you set out.'],
  [2963, 'Fras. \\ But,', 'But,'],
  [2969, 'depart', 'depart.'],
  [2972, 'e-et', 'set'],
  [2989, 'love %', 'love ?'],
  [2991, 'love %', 'love ?'],
  [2993, 'love \\', 'love ?'],
  [3014, 'ust', 'us ?'],
  [3018, 'Sutler', 'Suffer'],
  // leaf n27
  [3112, 'mus*', 'must'],
  [3117, 'p R\' > Thou', 'Mer. & Fras. Thou'],
  [3119, '\'Tis true \'tis', '\'Tis true, \'tis'],
  [3131, 'Il P.', 'Il R.'],
  [3138, 'Aleala', 'Alcalà'],
  [3147, 'A leal à', 'Alcalà'],
  [3155, 'Il P.', 'Il R.'],
  [3160, 'Pemendado', 'Remendado'],
  [3167, 'Drago >n of Aleala', 'Dragoon of Alcalà'],
  [3169, 'Aleala %', 'Alcalà ?'],
  [3172, 'so %', 'so ?'],
  [3173, 'and go', 'and go.'],
  // leaf n28
  [3253, 'A 1 cala', 'Alcalà'],
  [3255, '[ ("ornes on the scene*', '[Comes on the scene.'],
  [3272, 'wrould', 'would'],
  [3275, 'lovent me still %', 'lovest me still ?'],
  [3305, 'yovider', 'yonder'],
  [3310, 'Ray dost thou not hear 1', 'Say dost thou not hear ?'],
  // leaf n29
  [3420, 'recall \\', 'recall !'],
  [3422, 'yourself I', 'yourself !'],
  [3425, '<&c,', '&c.,'],
  [3443, 'bead', 'head'],
  // leaf n30
  [3534, 'game', 'gave'],
  [3556, 'h\'ll\'d', 'fill\'d'],
  [3589, 'wrould', 'would'],
  // leaf n31
  [3690, 'José.', 'Jose.'],
  [3695, 'of all-', 'of all—'],
  [3701, 'Josk.', 'Jose.'],
  [3718, 'long r', 'longer'],
  [3718, 'you; 1', 'you; I'],
  [3734, 'Hoi a ! Carmen ! Hola i', 'Hola ! Carmen ! Hola !'],
  [3742, 'ei ter', 'enter'],
  [3746, 'd-^ar', 'dear'],
  [3750, 'degr.ide', 'degrade'],
  [3754, 'Jos*.', 'Jose.'],
  [3757, 'No! \'', 'No !'],
  [3760, 'Josh.', 'Jose.'],
  [3761, 'h im). G » !', 'him). Go !'],
  // leaf n32
  [3847, 'be mis', 'be mis-'],
  [3851, 'Dancaiko', 'Dancairo'],
  [3853, 'Carman', 'Carmen'],
  [3854, 'Remkndado', 'Remendado'],
  [3857, 'captain.', 'captain,'],
  [3863, 'weVo', 'we\'re'],
  [3867, 'prieoner', 'prisoner'],
  [3871, 'and II R.', 'and Il R.'],
  [3879, 'and II R.', 'and Il R.'],
  [3895, 'pieuse', 'please'],
  [3897, '\\The Officer goes "between', '[The Officer goes between'],
  [3903, 'can 1 say', 'can I say'],
  [3911, 'life,- 8', 'life,—'],
  // leaf n33
  [3996, 'overall', 'over all'],
  [4010, 'spot', 'spot.'],
  [4017, 'carrying- heavy', 'carrying heavy'],
  [4029, 'line trade', 'fine trade'],
  [4033, 'below — ~', 'below—'],
  [4035, 'we %', 'we ?'],
  [4056, 'prooeod', 'proceed'],
  // leaf n34
  [4142, 'II Dancairo and II', 'Il Dancairo and Il'],
  [4143, 'Reme n dado', 'Remendado'],
  [4144, 'home of', 'some of'],
  [4145, 'afire, wear', 'a fire, near'],
  [4147, 'the\'>r', 'their'],
  [4148, 'J ose', 'Jose'],
  [4155, 'woman.', 'woman,'],
  [4159, 'Car men', 'Carmen'],
  [4172, 'thee %', 'thee ?'],
  [4175, 'Carmen % I', 'Carmen ? I'],
  [4190, 'her sdf', 'herself'],
  [4191, 'moments', 'moment\'s'],
  // leaf n35
  [4309, 'hisspoup*', 'his spouse.'],
  [4325, 'no,no,he don\'tlast', 'no, no, he don\'t last'],
  [4330, 'tc', 'to'],
  [4337, 'again', 'again.'],
  [4353, '■ Pictures ! spades ! a grave I', 'Pictures ! spades ! a grave !'],
  [4355, 'nof', 'not'],
  [4360, '<oice', 'voice'],
  [4360, 'ike', 'the'],
  [4365, 'vain 1 sort', 'vain I sort'],
  [4367, 'they de', 'they de-'],
  [4369, 'claie,', 'clare,'],
  [4377, 'if hou', 'if thou'],
  // leaf n36
  [4472, 'Carmen 5s', 'Carmen is'],
  [4479, 'Enter II Dancairo and II', 'Enter Il Dancairo and Il'],
  [4494, 'awa^ i', 'away !'],
  [4511, 'T Play>', 'play,'],
  [4514, 'Thb Men.', 'The Men.'],
  // leaf n37
  [4610, 'the last / and', 'the last ; and'],
  [4618, 'Mio.', 'Mic.'],
  [4628, 'alt ho\'', 'altho\''],
  [4642, 'aid I', 'aid !'],
  [4653, 'deceived', 'deceiv\'d'],
  [4659, 'a shot I Heaven', 'a shot ! Heaven'],
  [4663, 'moment*', 'moment.'],
  // leaf n38
  [4753, 'SCENE Y.', 'SCENE V.'],
  [4755, 'José', 'Jose'],
  [4791, 'JOBE.', 'Jose.'],
  [4795, 'JOSE.', 'Jose.'],
  [4832, 'desperation Î', 'desperation !'],
  [4850, 't/w', 'the'],
  [4854, 'pierce-', 'pierce.'],
  // leaf n39
  [4938, 'k( ep', 'keep'],
  [4966, '"We shall', 'We shall'],
  [4971, '[ To Josk', '[To Jose.'],
  [4986, 'ineef.', 'meet.'],
  [4989, 'DANCAiRr and II', 'Dancairo and Il'],
  [5010, 'place %', 'place ?'],
  // leaf n40
  [5111, 'Mie.', 'Mic.'],
  [5114, 'manï', 'man !'],
  [5116, 'ever •', 'ever ;'],
  [5117, 'Eeturn to her; hapten', 'Return to her; hasten'],
  [5142, 'Mio.', 'Mic.'],
  [5142, '] layers', 'prayers'],
  [5144, 'waif s', 'waits'],
  [5160, 'accuised', 'accursed'],
  [5170, 'Mio.', 'Mic.'],
  [5174, 'thee 1', 'thee ?'],
  [5180, 'depart. [men.', 'depart.'],
  [5181, 'qui g you; [To Car-', 'quit you; [To Carmen.'],
  [5184, 'a\'cay', 'away'],
  [5185, 'readors', 'reador\'s'],
  [5187, 'eyee', 'eyes'],
  [5191, 'hack', 'back'],
  [5192, 'out decides', 'but decides'],
  // leaf n41
  [5265, 'Michael a. Carmen,.', 'Michaela. Carmen,'],
  [5280, 'bullfight', 'bull-fight'],
  [5281, 'toith or an g es ^', 'with oranges,'],
  [5285, 'Escamill®.', 'Escamillo.'],
  [5286, 'buy Î', 'buy ?'],
  [5288, 'A. little', 'A little'],
  [5292, 'buy \\', 'buy ?'],
  [5297, 'chorus , the tw@', 'chorus, the two'],
  [5313, 'Yendors', 'Vendors'],
  [5313, 'buy!', 'buy ?'],
  [5318, 't©', 'to'],
  [5330, 'dfcc', '&c.'],
  // leaf n42
  [5411, 'u Girls', '" Girls'],
  [5418, 'Castanet', 'castanet'],
  [5438, 'Castanet', 'castanet'],
  [5444, '\'\'He', '" He'],
  [5446, 'u Dance', '" Dance'],
  [5448, 'lad>-,', 'lads,'],
  [5452, '\\Noise', '[Noise'],
  [5462, '\\_Thfi', '[The'],
  [5488, 'r.oble', 'noble'],
  [5490, 'tin d', 'find'],
  [5502, 'mag', 'mag-'],
  // leaf n43
  [5588, 'g1', 'give,'],
  [5591, 've,', ''],
  [5597, 'Ewiva!', 'Evviva !'],
  [5598, 'E&camillo', 'Escamillo'],
  [5605, 'thaL', 'than'],
  [5623, 'Carmen,', 'Carmen.'],
  // leaf n44
  [5720, 'Cvrcus', 'Circus'],
  [5723, 'Josb', 'Jose'],
  [5737, 'off-', 'off—'],
  [5739, '" Fear for thy life !"', '"Fear for thy life !"'],
  [5740, 'fly I', 'fly !'],
  [5759, 'ended', 'ended.'],
  [5766, 'Cab.', 'Car.'],
  // leaf n45
  [5919, 'chorus y', 'chorus,'],
  [5920, 'C arm ex', 'Carmen'],
  [5924, 'pa-s', 'pass'],
  [5943, '[ Noise', '[Noise'],
  // leaf n46
  [6026, 'depart !', 'depart ?'],
  [6035, 'bach', 'back'],
  [6038, 'Çho. (withotct)', 'Cho. (without)'],
  [6050, 'C«rmen', 'Carmen'],
  // found by the word check
  [648, 'out', 'out.'],
  [1698, 'taJce', 'take'],
  // found in the reading
  [2138, 'fill', 'fil!'],
];

// Slips of the printer, not of the scan (seen on the page): mended too.
const MISPRINTS = [
  [2234, 'betwiched', 'bewitched'],
  [3556, 'flagrance', 'fragrance'],
  [6034, 'pionard', 'poniard'],
  [2138, 'fil!', 'fill!'],
  [5914, 'victor?', 'victor !'],
];

// Lines the scan broke in two, or read out of their order: [line, piece].
// The piece is a line of the file that is the end of the other; it is
// joined to it (with a space) and goes from its own place.
const JOIN = [
  [962, 966],
  [1949, 1946],
];

// Names the scan read as a column of their own, apart from the lines they
// stand before: [line of the name, line it stands before].
const MOVED = [
  [2071, 2086],
  [2072, 2088],
  [2073, 2089],
  [2074, 2090],
  [2075, 2092],
  [2078, 2095],
  [2080, 2097],
  [2083, 2104],
  [2382, 2385],
  [2639, 2642],
  [3537, 3580],
  [3540, 3585],
  [3541, 3587],
  [3544, 3595],
  [3545, 3597],
  [3993, 3996],
  [4340, 4346],
  [4341, 4347],
  [4779, 4798],
  [4782, 4809],
  [4783, 4811],
  [4785, 4814],
  [4786, 4816],
  [4787, 4818],
  [4788, 4820],
  [4791, 4830],
  [4793, 4832],
  [4795, 4834],
  [4839, 4842],
];

// Lines the scan gives out of their order: [line, the line it stands
// after in the book].
const AFTER = [
  [4343, 4347],
];

// A line too long for the column has its last word or two tucked into the
// end of the line above or below, after a bracket: [line, tucked words,
// line they belong to].
const TUCKED = [
  [1369, 'there be,', 1371],
  [1521, 'ever', 1520],
  [2086, 'you.', 2088],
  [2090, 'duty', 2092],
  [2097, 'since —', 2099],
  [2219, 'officer!', 2221],
  [2518, 'us now ?', 2520],
  [2527, 'coming?', 2528],
  [2537, 'released.', 2539],
  [2646, 'day,', 2647],
  [2649, 'are.', 2651],
  [2658, 'kind.', 2660],
  [2666, 'Toreador.', 2667],
  [2794, 'loved you ?', 2796],
  [2822, 'plan :', 2824],
  [2836, 'tell,', 2838],
  [3696, 'me,', 3697],
  [3703, 'go', 3705],
  [4597, 'quite.', 4599],
  [4603, 'out of sight.', 4605],
  [4624, 'fil.', 4626],
  [4633, 'heart with fear.', 4635],
  [4639, 'now :', 4641],
  [4936, 'at bay :', 4938],
  [5171, 'world', 5173],
  [5409, 'dance', 5411],
  [5497, 'grace,', 5499],
  [5778, 'me?', 5780],
];

// The English lines of the libretto, mended.
export function stream() {
  const lines = sourceLines(FILE, URL);
  if (squash(lines[FROM - 1]) !== 'ACTE PREMIER.' || squash(lines[TO - 1]) !== 'END OF THE OPERA.') throw new Error(`${ID}: the libretto does not lie where it did in the file`);
  let en = englishLines(lines, OPT);
  // an italic bracket is read as a brace
  for (const l of en) l.text = l.text.replace(/\{/g, '(').replace(/\}/g, ')');
  en = mend(mend(en, FIXES, ID), MISPRINTS, ID);
  const at = new Map(en.map((l) => [l.n, l]));
  const need = (n, what) => {
    const l = at.get(n);
    if (!l || l.gone) throw new Error(`${ID}: ${what}: line ${n} is not an English line of the libretto`);
    return l;
  };
  for (const [n, piece] of JOIN) {
    const a = need(n, 'join');
    const b = need(piece, 'join');
    a.text = glue(a.text, b.text);
    b.gone = true;
  }
  for (const [name, n] of MOVED) {
    const a = need(name, 'name');
    const b = need(n, 'name');
    if (!/^[A-Z][A-Za-z ]*\.$/.test(a.text)) throw new Error(`${ID}: line ${name} is not a name: ${a.text}`);
    b.text = `${a.text} ${b.text}`;
    a.gone = true;
  }
  for (const [n, words, to] of TUCKED) {
    const a = need(n, 'tucked words');
    const b = need(to, 'tucked words');
    const tail = ` [${words}`;
    if (!a.text.endsWith(tail)) throw new Error(`${ID}: line ${n} does not end with ${JSON.stringify(tail)}: ${a.text}`);
    a.text = a.text.slice(0, -tail.length);
    b.text = glue(b.text, words);
  }
  for (const [n, after] of AFTER) {
    const a = need(n, 'order');
    need(after, 'order');
    en.splice(en.indexOf(a), 1);
    en.splice(en.findIndex((l) => l.n === after) + 1, 0, a);
  }
  const out = [];
  let gap = 0;
  let brk = false;
  for (const l of en) {
    if (l.gone) { gap += l.gap; brk = brk || l.brk; continue; }
    out.push({ n: l.n, text: l.text, gap: l.gap + gap, brk: l.brk || brk });
    gap = 0;
    brk = false;
  }
  return out;
}

// ---- how the book sets its lines ------------------------------------------
//
// A speech begins with the speaker's name at the margin. Its lines are
// verse: each stands on a line of its own, and one too long for the
// column is turned over and set further in. A direction begins with a
// bracket that is never closed, or stands in brackets after the name; at
// the head of a scene directions stand without any bracket. The file
// keeps none of the indenting, so what follows goes by the words, and by
// tables where the words do not tell. (The tables were checked against
// the places of the lines on the pages.)

// Directions that stand without a bracket: [first line, last line]; each
// is one paragraph of the book.
const PLAIN = [[400, 414], [416, 416], [418, 424], [665, 680], [951, 952], [954, 959], [1124, 1124], [1132, 1213], [1377, 1377],
  [1686, 1687], [1934, 1936], [2065, 2068], [2363, 2364], [2366, 2368], [2370, 2376], [2635, 2635], [2815, 2816], [2818, 2818],
  [3733, 3733], [4010, 4018], [4021, 4022], [4142, 4149], [4479, 4479], [4755, 4755], [5276, 5282], [5284, 5285], [5405, 5405]];
// A direction in a bracket runs on to the end of its sentence, and stops
// there. The exceptions: lines that go on with the direction though the
// line above ends a sentence,
const MORE = new Set([794, 906, 1702, 2248, 2513, 3296, 3297, 3298, 3853, 4191, 4947, 6036]);
// and lines at which a direction ends without a stop.
const ENDS = new Set([]);
// A line of a speech that begins with a capital begins a line of verse,
// and one that begins with a small letter is turned over from the line
// above. The exceptions:
const TURNED = new Set([1637, 1660, 1951, 2255, 2979, 4936, 4974, 4977]); // begins with a capital, yet turned over
const STARTS = new Set([]); // begins with a small letter, yet a new line
// Lines that end in a hyphen which belongs to the word.
export const HYPHEN_KEPT = new Set([421, 2133]);
// The numbers of the stanzas of the two songs of the second act; they go.
const STANZAS = new Set([2379, 2402, 2497, 2636, 2673]);
// The dance song of the last act is printed with the mark of quotation at
// the head of every line, as was the custom; it is kept at the first line
// only (which stands after the name) and at the end. [first, last line.]
const SONG = [5409, 5450];
// A speech with no name over it, and whose it is. (The second stanza of
// Carmen's song follows the refrain that the two others sing with her;
// the book gives only the number of the stanza.)
const UNNAMED = new Map([[2404, 'CARMEN']]);

// The names over the speeches as the book has them, without the stop that
// ends them. Most are cut short; the full names are those of the book's
// list of persons.
const PERSONS = {
  Car: 'CARMEN', Jose: 'JOSE', Mic: 'MICHAELA', Mor: 'MORALES', Esc: 'ESCAMILLO', Fras: 'FRASQUITA', Mer: 'MERCEDES',
  'Il D': 'IL DANCAIRO', 'Il R': 'IL REMENDADO', Officer: 'OFFICER', Cho: 'CHORUS',
  'Fras. and Mer': 'FRASQUITA AND MERCEDES', 'Mer. & Fras': 'MERCEDES AND FRASQUITA', 'Il D. and Il R': 'IL DANCAIRO AND IL REMENDADO',
  'Car., Fras. and Mer': 'CARMEN, FRASQUITA AND MERCEDES', 'Cho. of Street Lads': 'CHORUS OF STREET LADS',
};
// The groups, which the book names in full.
const GROUPS = ['Soldiers', 'Cigar Girls', 'Young Men', 'Girls & Young Men', 'Girls', '1st Group of Girls', '1st Group', '2nd Group',
  'All the Girls', 'All', 'The Three Girls', 'The Two Men', 'The Two Gipsies', 'Quintette', 'Quartette', 'All the Others', 'The Others',
  'Others', 'Together', 'Both', 'All Three', 'The Men', 'The Girls', 'Voices', 'Fruit Sellers', 'A Fruit Seller', 'Other Fruit Sellers',
  'All the Vendors', 'Programme Sellers', '1st Officer', '2nd Officer'];
const WHO = new Map([...Object.entries(PERSONS), ...GROUPS.map((g) => [g, g.replace('&', 'and').toUpperCase()])]);
const SCENES = [11, 5, 5, 2];
const SPEECHES = 415; // names over speeches, the one supplied among them
const DIRECTIONS = 155;

// A speaker's name at the head of a line. After it: a stop (or, once, a
// colon), or a direction in brackets, with the stop before the bracket,
// after it, inside it, or nowhere.
function speaker(text) {
  let best = null;
  for (const [key, name] of WHO) {
    if (!text.startsWith(key)) continue;
    const rest = text.slice(key.length);
    if (!/^(\.$|\. |:$| \()/.test(rest)) continue;
    if (!best || key.length > best.key.length) best = { key, name, rest };
  }
  if (!best) return null;
  let rest = best.rest.replace(/^[.:]/, '').trim();
  if (!rest.startsWith('(')) return { ...best, dir: null, rest };
  const close = rest.indexOf(')');
  if (close < 0) return { ...best, open: rest.slice(1), rest: '' }; // the direction runs on into the next line
  return { ...best, dir: rest.slice(1, close), rest: rest.slice(close + 1).replace(/^\./, '').trim() };
}

const startsSmall = (s) => /^[^A-Za-z]*[a-z]/.test(s);
const endsSentence = (s) => /[.!?]$/.test(s);
// The book sets its dashes close up to the words.
const fin = (s) => tidy(s).replace(/\s*—\s*/g, '—');

export function build(trace = null) {
  const st = stream();
  const note = (n, what) => { if (trace) trace.set(n, what); };
  const inStream = new Set(st.map((l) => l.n));
  for (const n of [...PLAIN.flat(), ...MORE, ...ENDS, ...TURNED, ...STARTS, ...HYPHEN_KEPT, ...STANZAS, ...SONG, ...UNNAMED.keys()]) {
    if (!inStream.has(n)) throw new Error(`${ID}: line ${n}, named in a table, is not an English line of the libretto`);
  }

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
    const t = fin(text);
    if (!t || /[\[\]]/.test(t)) throw new Error(`${ID}: line ${n}: the direction is not understood: ${JSON.stringify(t)}`);
    part.blocks.push({ k: 'd', text: t });
  };
  const joined = (pieces) => pieces.reduce((a, p, k) => (k === 0 ? p.text : glue(a, p.text, HYPHEN_KEPT.has(pieces[k - 1].n))), '');
  // Words of a speech: the line l, or what is left of it after the name.
  const words = (text, l, first) => {
    if (!said) throw new Error(`${ID}: line ${l.n}: words with no speaker: ${text.slice(0, 40)}`);
    // a direction at the end of the line, after the words
    let dir = null;
    const at = text.indexOf('[');
    if (at >= 0) {
      dir = text.slice(at + 1).trim();
      text = text.slice(0, at).trim();
      if (!text || !dir || !endsSentence(dir)) throw new Error(`${ID}: line ${l.n}: the direction after the words is not understood`);
    }
    const fresh = first || STARTS.has(l.n) || (!TURNED.has(l.n) && !startsSmall(text) && !(last && /[A-Za-z]-$/.test(last.text)));
    if (fresh) {
      if (!verse) verse = [];
      verse.push(text);
    } else {
      if (!verse) throw new Error(`${ID}: line ${l.n} is turned over from nothing: ${text}`);
      verse[verse.length - 1] = glue(verse[verse.length - 1], text, HYPHEN_KEPT.has(last.n));
    }
    note(l.n, first ? 's' : fresh ? 'v' : 't');
    last = { n: l.n, text };
    if (dir) direction(dir, l.n);
  };
  const isHeading = (l) => /^(ACT|SCENE) [IVX]+\.$/.test(l.text) || STANZAS.has(l.n) || PLAIN.some(([a]) => a === l.n);
  // Does the line `next` go on with the direction whose last line so far is `prev`?
  const goesOn = (prev, next) => {
    if (MORE.has(next.n)) return true;
    if (ENDS.has(prev.n) || endsSentence(tidy(prev.text))) return false;
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
    if ((m = l.text.match(/^SCENE ([IVX]+)\.$/))) {
      closeVerse();
      const n = roman(m[1]);
      if (n !== scenes + 1) throw new Error(`${ID}: ${part.label}, scene ${n} out of order, line ${l.n}`);
      scenes = n;
      said = null;
      part.blocks.push({ k: 'h', level: 3, text: `Scene ${n}` });
      note(l.n, 'h');
      continue;
    }
    if (STANZAS.has(l.n)) {
      if (!/^I{1,3}\.$/.test(l.text)) throw new Error(`${ID}: line ${l.n} is not the number of a stanza: ${l.text}`);
      closeVerse();
      note(l.n, 'n');
      continue;
    }
    if (/^[IVXL]+\.$/.test(l.text)) throw new Error(`${ID}: line ${l.n}: a number alone in its line`);
    const plain = PLAIN.find(([a, b]) => l.n >= a && l.n <= b);
    if (plain) {
      if (l.n !== plain[0]) throw new Error(`${ID}: the direction of lines ${plain[0]} to ${plain[1]} is not whole`);
      const pieces = [l];
      while (st[i].n < plain[1]) pieces.push(st[++i]);
      pieces.forEach((p, k) => note(p.n, k ? 'd' : 'D'));
      direction(joined(pieces), l.n);
      continue;
    }
    if (l.text.startsWith('[')) {
      const pieces = [{ n: l.n, text: l.text.slice(1) }];
      note(l.n, 'B');
      while (st[i + 1] && goesOn(st[i], st[i + 1])) {
        pieces.push(st[++i]);
        note(st[i].n, 'b');
      }
      direction(joined(pieces), l.n);
      continue;
    }
    if (UNNAMED.has(l.n)) {
      closeVerse();
      said = UNNAMED.get(l.n);
      part.blocks.push({ k: 's', text: said });
    }
    if (l.n >= SONG[0] && l.n <= SONG[1]) {
      // the mark at the head of the line goes; a line without it is turned over
      if (/^"/.test(l.text)) l.text = l.text.replace(/^"\s*/, '');
      else if (!startsSmall(l.text)) throw new Error(`${ID}: line ${l.n} of the dance song has no mark at its head`);
    }
    const sp = speaker(l.text);
    if (sp) {
      closeVerse();
      let { dir, rest } = sp;
      if (sp.open !== undefined) {
        const next = st[++i];
        const mm = next && next.text.match(/^([^()\[]*)\)\.?(.*)$/);
        if (!mm) throw new Error(`${ID}: line ${l.n}: the bracket after the name is not closed`);
        dir = glue(sp.open, mm[1]);
        rest = mm[2].trim();
        note(next.n, 'd');
      }
      said = sp.name;
      met.add(sp.key);
      part.blocks.push({ k: 's', text: said });
      if (dir !== null && dir !== undefined) {
        const t = fin(dir).replace(/\.$/, '');
        if (!t || /[()\[\]]/.test(t)) throw new Error(`${ID}: line ${l.n}: the direction after the name is not understood`);
        part.blocks.push({ k: 'd', text: t });
      }
      if (rest) words(rest, l, true);
      else note(l.n, 's');
      continue;
    }
    words(l.text, l, false);
  }
  closeVerse();
  closeAct();
  if (parts.length !== 4) throw new Error(`${ID}: expected 4 acts, found ${parts.length}`);
  for (const key of WHO.keys()) if (!met.has(key)) throw new Error(`${ID}: the name ${key} is over no speech`);

  // The marks of quotation: one that opens stands at the head of a line or
  // after a space; the others close. They must answer each other.
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
  const end = parts[3].blocks.slice(-4);
  if (first[0].text !== 'Scene 1' || !first[1].text.startsWith('A Square in Seville.') || first[4].text !== 'CHORUS'
    || end[0].text !== 'JOSE' || end[2].k !== 'd' || end[3].k !== 'v' || !end[3].lines[0].startsWith('Oh, Carmen!')) {
    throw new Error(`${ID}: the libretto does not begin or end as expected`);
  }
  return parts;
}

export function run() {
  return writeText(ID, {
    author: 'Georges Bizet',
    title: 'Carmen',
    translator: null, // not named in the book
    year: 1910, // the date of the library's record; the book itself shows none
    note: 'The English version from the French and English libretto that Fred Rullman of New York published about 1910. It names no translator. It follows the version of the opera in which the scenes that were spoken at the first performance are sung, so a recording that has them spoken will not match the words. This text was read by machine from a scan. It was then read through against the scan, but some misread words may remain.',
    verse: false,
    source: { name: 'Internet Archive', url: 'https://archive.org/details/carmen1910bize' },
  }, build());
}

// Words that are not in the other English texts of the course and are right
// as they stand: names (and the short forms of them over the speeches),
// Spanish and Italian words, old spellings, the trumpet's syllables, and
// plain words that happen to be new here. Each was looked at where it
// stands. (For the word check; not used by the build.)
export const KNOWN = ['jose', 'michaela', 'morales', 'escamillo', 'frasquita', 'mercedes', 'dancairo', 'remendado', 'zuniga', 'lillas',
  'pastia', 'carmencita', 'manuelita', 'mérimée', 'almanza', 'alcalà', 'mic', 'mor', 'esc', 'fras', 'cho',
  'toreador', 'toreadors', 'picador', 'alguazil', 'alguazils', 'alcade', 'corregidor', 'zingara', 'zingarelle', 'seguidille', 'signor',
  'hola', 'viva', 'evviva', 'ra', 'tra',
  "whil'st", 'altho', "mem'ries", "retain'd", "jewell'd", "conq'ror", 'bandrol', 'quintette', 'quartette', 'clamoring',
  'dragoon', 'dragoons', 'coastguard', 'coastguards', 'smuggler', 'trumpeters', 'fifes', 'fifers', 'castanet', 'tambourines', 'guitars',
  'torchlight', 'parapet', 'cavalcade', 'bouquet', 'bodice', 'acacia', 'brunette', 'coquettes', 'coquets', 'simpletons', 'seller',
  'surpassing', 'untying', 'reseats', 'replaces', 'refusest', 'deemedst', 'heartiest', 'fondest', 'brisker', 'passersby'];
