// Mozart, The Magic Flute: the English of the Italian and English libretto
// published by F. Rullman, New York ("The Magic Flute. Die Zauberflöte.
// An opera, in two acts ... as represented at the Royal Italian Opera,
// London, and the Academy of Music, New York"). The libretto names no
// translator and bears no date. It gives the Italian version of the opera
// (Il Flauto Magico), with sung recitative, and the English follows the
// Italian. Internet Archive, magicflutediezau00moza: raw OCR text of a
// scan, and a poor one. The Italian stands on the left-hand pages and the
// English on the right-hand pages; only the English is taken.
// See notes/magic-flute.md.

import { writeText, roman } from '../lib/gutenberg.mjs';
import { sourceLines, mend, leaveOut, englishPages, englishLines, reorder, joinLines, glue, tidy, lastChecks } from './orpheus-giovanni-flute.lib.mjs';

const ID = 'magic-flute';
const FILE = 'ia_magicflutediezau00moza_djvu.txt';
const URL = 'https://archive.org/download/magicflutediezau00moza/magicflutediezau00moza_djvu.txt';
const FROM = 142; // the head of the first Italian page
const TO = 3676; // the last line of the last chorus; printed music follows

// The running heads of the pages.
const HEAD = { it: /^IL FLAUTO MAGICO\.?$/, en: /^THE MAGIC FLUTE\.$/ };

// ---- the tables ---------------------------------------------------------
// All line numbers are lines of the source file. Before anything else the
// script closes up the spaces the old printers set before ; : ! ? and
// round a dash (tidy), and the tables speak of the lines as they then are.

// What the machine misread, mended after the page images: every English
// line of the file was compared with the page, and each row gives
// [line, as the file has it, as the book prints it]. Where a name hangs
// in the margin beside a speech, or a brace joins two names, the machine
// read the names in a block apart: the rows put each name at the head of
// its line (two names joined by a brace as "Tam. & Pam."), and the block
// is left out below. Words that the book sets one above the other for
// two singers ("His" over "My") are set side by side with a stroke.
const FIXES = [
  // the head of an Italian page
  [783, 'fL FLAlTTU MAGICO.', 'IL FLAUTO MAGICO.'],
  // leaf 9
  [285, 'r««.', 'Tam.'], [291, 'oh.', 'oh,'], [293, 'faintint;.—The', 'fainting.—The'], [296, 'T%t Lndits.', 'The Ladies.'],
  [298, '""riumph!', 'Triumph!'], [300, 'couragf^', 'courage'], [304, 'Tamtno.', 'Tamino.'], [305, "Firs'", 'First'], [307, 'Ladif.', 'Lady.'],
  [308, 'pamted. [Siili lookin<r', 'painted. [Still looking'], [308, 'Tamtno.', 'Tamino.'], [310, '4.11', 'All'], [314, 'hasten.', 'hasten,'],
  [316, 'tliis', 'this'], [318, 'Perliaps', 'Perhaps'], [320, 'brilli;', 'bring'], [321, 'IKrtt', 'First'], [321, 'Go. tlien,', 'Go, then,'],
  [321, 'tlie', 'the'], [324, 'ftecond', 'Second'], [324, 'No.', 'No,'], [324, 'yourself I', 'yourself!'], [327, 'No.', 'No,'],
  [330, 'ill three!', 'All three. I'], [330, "good '", 'good!'], [332, '^-iadly he', 'gladly be'], [334, 'N(i.', 'No,'], [336, '1', 'I'],
  [338, '1', 'I'], [338, 'li»«.', 'live.'], [340, 'Thai', 'That'], [344, 'best.', 'best,'], [346, 'liandsome', 'handsome'], [346, 'loveiv', 'lovely'],
  [350, '1 top ihee one', 'I see thee once'], [350, '[Ezevnt.', '[Exeunt.'], [353, 'Tarn.', 'Tam.'], [353, 'ntik»', 'snake'],
  [355, 'approaeliM', 'approaches'], [360, 'Papaoeno,', 'Papageno,'],
  [361, "'tbi fowlkr comes, in spitt of", '"THE FOWLER COMES, IN SPITE OF RAIN."'], [368, 'old.', 'old,'], [370, 'wholje', 'whole'],
  [370, 'ro', 'round.'], [371, 'Oh.', 'Oh,'], [376, 'Tliis', 'This'], [376, 'known.', 'known,'], [379, 'dolenti', 'dozens;'], [381, 'A lid', 'And'],
  [383, 'Tarn.', 'Tam.'], [387, 'Tarn.', 'Tam.'], [389, '»««?', 'see?'], [391, '7am.', 'Tam.'], [391, 'tliy', 'thy'], [391, 'fealherm.', 'feathers,'],
  [395, 'Pop.', 'Pap.'], [395, 'tn astm^', 'in aston-'], [396, '<^mcnt.)', 'ishment.)'], [398, 'Turn.', 'Tam.'],
  [398, 'iiow couldst iliou', "how could'st thou"], [398, 'Tho*', 'Thou'], [401, '1', 'I'], [401, 'lor weapon»', 'for weapons.'],
  [403, 'Tarn.', 'Tam.'], [403, "weapon '", 'weapon?'], [405, 'sutriciem;', 'sufficient;'], [405, 'ncTcr f«ii', 'never felt'],
  // leaf 11
  [602, 'IIL', 'III.'], [603, '$ame.—Three Ladim,,', 'same.—Three Ladies.'], [605, 'Tkt', 'The'], [607, 'Paf.', 'Pap.'], [607, 'eall', 'call'],
  [610, 'Tarn', 'Tam.'], [612, 'Fnp.', 'Pap.'], [613, '(only', 'I only'], [613, 'd^ily t-ake', 'daily take'], [616, 'Tarn.', 'Tam.'],
  [618, 'noi!', 'not!'], [620, '[Anffrtly.', '[Angrily.'], [630, 'Tamtno.)', 'Tamino.)'], [631, 'ihee.', 'thee.'], [632, "'♦ '« ibe", 'It is the'],
  [636, 'Papagkno.', 'Papageno.'], [640, 'Tmm', 'Tam.'], [643, 'rapiure', 'rapture'], [643, 'the.sight impart.', 'the sight impart,'],
  [644, 'ji inglcd', 'mingled'], [644, 'lieart.', 'heart.'], [645, 'f Oh,', 'Oh,'], [647, 'X', ''], [647, 'ihi.s', 'this'], [649, "\\", ''],
  [651, "\\", ''], [651, "'lis", "'tis"], [651, 'feeing,', 'feeling,'], [653, "\\", ''], [654, "\\", ''], [655, "\\", ''],
  [656, 'imparl!', 'impart!'], [662, 'TTie', 'The'], [662, 'Papagkno.', 'Papageno.'], [664, 'first', 'First'], [664, 'moit', 'most'],
  [665, 'y ath,', 'youth,'], [667, 'I^dy.', 'Lady.'], [668, 'compKie.', 'complete.'], [670, 'dauuhtcr', 'daughter'],
  [672, 'Tarn. tJestored! Wliat', 'Tam. Restored! What'], [674, 'Fir.<;t', 'First'], [677, 'Tarn.', 'Tam.'], [679, '•ave', 'save'],
  [680, "that '", 'that?'], [683, '»ur', 'our'], [685, 'Sfroiid', 'Second'], [685, 'Rehold,', 'Behold,'],
  [685, 'comcs! [Thunder', 'comes! [Thunder.'], [687, 'Thirfl', 'Third'], [687, 'slie.', 'she.'], [691, 'The QczEN of the', 'The Queen of the'],
  [691, 'and the', 'and the same.'], [698, 'm«.', 'me.'], [699, "your' 8,", "your's,"], [699, 'youHs', "your's"], [699, 'as mui', 'an end'],
  [704, 'aJarm»,', 'alarms,'], [707, 'longnte arrasj', 'longing arms,'], [709, 'saw.', 'saw,'], [709, 'aid.', 'aid,'], [710, 'made;.', 'made;'],
  [712, 'heard', 'I heard'], [712, 'wild.', 'wild,'], [713, 'waitings', 'wailings'], [716, 'ruMf', 'vain,'],
  [720, '"haste! hastk I hastkI"', '"HASTE! HASTE! HASTE!"'], [724, 'eaptiTc-', 'captive'], [728, '8UOoe»i^', 'succeed,'], [729, 'tliese', 'these'],
  [729, 'asain', 'again'], [732, '[Fill', '[Exit'], [732, 'Lud**»', 'Ladies.'], [738, 'Have', 'Tam. Have'], [738, 'lier?', 'her?'],
  [744, 'Hm!', 'Pap. Hm!'], [746, 'He', 'Tam. He'], [746, 'falsehood.', 'falsehood,'], [748, 'damk.', 'dumb.'], [750, 'Hm!', 'Pap. Hm!'],
  [752, '1', 'Tam. I'], [754, '1', 'I'], [756, 'Hm!', 'Pap. Hm!'], [769, 'vili.', 'VIII.'], [770, 'TJie', 'The'], [770, 'game.', 'same.'],
  [772, "PTj^^'nc'l /ip*", "Papageno's lips.)"], [774, 'merrilul.', 'merciful;'], [778, 'S^ccond', 'Second'], [778, "afUJk'", 'again.'],
  [779, 'Pup.', 'Pap.'], [780, 'Tlu', 'The'],
  // leaf 13
  [990, 'ell jive.', 'All five.'], [990, 'speaking', 'speaking,'], [992, 'a.', 'a'], [994, "In.'<i.ead or", 'Instead of'], [997, 'first', 'First'],
  [997, '[Prtsenting', '(Presenting'], [997, 'Tamtnc.)', 'Tamino.)'], [1003, 'Irs', 'Its'], [1006, '§€Cond Lndy.', 'Second Lady.'],
  [1008, 'lell tiie', 'tell the'], [1010, 'lis', 'Its'], [1012, 'me-lt', 'melt'], [1013, 'Jive.', 'five.'], [1019, "O'er", "o'er"],
  [1021, 'And', 'Pap. And'], [1024, 'Tke', 'The'], [1026, 'the*i', 'thee'], [1030, "Saraslro's", "Sarastro's"], [1032, 'I tliank', 'Pap. I thank'],
  [1035, '/', ''], [1035, 'tiser;', 'tiger;'], [1037, ') Ami', 'And'], [1037, 'Sarastfv-', 'Sarastro'], [1039, '/', ''], [1041, 'lus', 'his'],
  [1042, 'llie', 'The'], [1042, '■will', 'will'], [1044, 'shall', 'shalt'], [1046, 'Tue', 'Pap. The'], [1046, 'being.', 'being:'],
  [1052, 'Vd', "I'd"], [1053, "''irst", 'First'], [1055, 'tke', 'the'], [1057, 'ap. Eh.', 'Pap. Eh,'], [1058, 'aecond', 'Second'],
  [1058, 'bella', 'bells'], [1059, '1 - rinsing.', 'ringing.'], [1061, 'it.', 'it,'], [1062, 'Jive.', 'five.'], [1062, 'yes.', 'yes,'],
  [1062, 'binlcatt-her', 'birdcatcher'], [1064, 'llute', 'flute'], [1064, 'magic.', 'magic,'], [1068, 'crown.', 'crown,'],
  [1070, 'rencwn.', 'renown.'], [1071, 'Tarn. <5r)', 'Tam. & Pap.'], [1071, 'pray.', 'pray,'], [1072, "Pap. j'", ''], [1072, 'liiis', 'this'],
  [1073, '7^', 'The'], [1073, 'wini:ed', 'winged'], [1073, 'ye.', 'ye,'], [1080, '&■ I', '& Pap.'], [1081, "Pnp \\", ''], [1081, 'u.s', 'us'],
  [1082, 'Tht Ladie.s.', 'The Ladies.'], [1090, 'Sgypticv. Room.—Moxostatos,', 'Egyptian Room.—Monostatos,'], [1093, 'Hon.', 'Mon.'],
  [1094, 'Oh.', 'Oh,'], [1095, 'Hon.', 'Mon.'], [1101, 'brins', 'bring'], [1103, 'Alon.', 'Mon.'], [1104, 'piU', 'put'], [1104, 'Patn*nm', 'Pamina.'],
  [1107, 'found.', 'found,'], [1111, 'Man.', 'Mon.'], [1113, 'slaw.', 'slaves.'], [1130, 'Where', 'Pap. Where'], [1130, 'b«?', 'be?'],
  [1140, '{Seeitig', 'Pap. & Mon. (Seeing'], [1146, '["^f »■*♦•• •/', '[They run off.'], [1152, 'I^eavens!', 'Heavens!'], [1152, 'M/ dMJ', 'My dear'],
  [1156, 'portrait', 'portrait.'], [1159, 'set', 'get'], [1162, 'you', 'you;'], [1165, 'mj', 'my'], [1166, "a'.! mv", 'all my'],
  [1168, '"THK', '"THE'], [1170, 'Duct.', 'Duet.'], [1171, '<S-', '&'], [1171, 'lieart', 'heart'], [1171, 'i)ve overflowmf,', 'love overflowing,'],
  [1173, 'sott', 'soft'], [1173, 'besto^^^ng,', 'bestowing,'], [1174, 'lovers', "lover's"], [1175, 'Kail,', 'Hail,'], [1177, 'tiie', 'the'],
  [1177, 'beguiling.', 'beguiling,'], [1178, 'wiUing', 'willing'], [1179, 'smiling', 'smiling,'], [1181, 'prove.', 'prove,'],
  [1184, '[EMtvmt', '[Exeunt.'], [1188, 'Grove.—Taming', 'Grove.—Tamino'], [1188, 'Bof*.', 'Boys.'], [1190, 'the»', 'thee'],
  [1191, 'tbia. 0', 'thou, O'], [1191, 'wmquer;', 'conquer;'],
  // leaf 15
  [1427, 'Stfll', 'Still'], [1430, 'Tom.', 'Tam.'], [1430, 'say.', 'say,'], [1433, 'T%e', 'The'], [1439, '0', 'O'], [1439, 'thouMt', "thou'lt"],
  [1442, 'Tatn.', 'Tam.'], [1448, 'Tarn.', 'Tam.'], [1454, 'Tarn.', 'Tam.'], [1462, 'mne', 'tone'], [1463, "\\<pon", 'upon'],
  [1465, '** OHf', '"OH,'], [1465, "SWKKT TLCTE's", "SWEET FLUTE'S"], [1465, 'UAQIC TOHK."', 'MAGIC TONE."'], [1469, 'Tarn.', 'Tam.'],
  [1470, 'stone.', 'stone,'], [1471, 'And.^ensele.ss', 'And senseless'], [1471, 'move.', 'move,'], [1473, 'Pamina.', 'Pamina,'],
  [1473, "me '", 'me!'], [1474, '1 liopo', 'I hope'], [1476, 'I Plays', '[Plays'], [1477, 'Papageno s', "Papageno's"], [1479, 'PapnpTxo', 'Papageno'],
  [1487, 'ttolk', 'Both.'], [1489, "foe'«", "foe's"], [1494, 'Pom.', 'Pam.'], [1497, 'Tammo', 'Tamino'], [1498, 'Balk Wiiat', 'Both. What'],
  [1498, "greater '^", 'greater?'], [1502, 'wai', 'way'], [1502, 'ol', 'of'], [1502, 'flute 1', 'flute!'], [1504, 'joy. wiien', 'joy, when'],
  [1504, 'siiali', 'shall'], [1506, 'quick I', 'quick!'], [1506, 'hasten I', 'hasten!'], [1510, '77ie same.—^loNOSTATOS.', 'The same.—Monostatos.'],
  [1512, 'Alan.', 'Mon.'], [1514, '1', 'I'], [1521, 'me.', 'me,'], [1523, 'nose.', 'nose,'], [1523, 'promite yoo.', 'promise you.'],
  [1526, "Pav \\ '^^'^", 'Pam. & Pap. Alas! we'], [1530, 'thew^', 'them.'], [1531, 'ottimes win»', 'oftimes wins'], [1539, 'ani', 'and'],
  [1540, 'sing; d', 'sing; at'], [1541, 'danct', 'dance'], [1544, '" WHAT', '"WHAT'], [1546, 'Ihiet', 'Duet'],
  [1546, 'Chorum.—Mon.,', 'Chorus.—Mon.,'], [1552, 'eacli', 'each'], [1552, 'tiie', 'the'], [1553, 'sound.', 'sound,'], [1556, '■Sweetly', 'Sweetly'],
  [1557, 'liis power.', 'his power,'], [1561, 'shall.be,', 'shall be,'], [1562, 'liiat', 'that'], [1562, 'love.', 'love,'],
  [1567, 'tcer^', 'scenes.'], [1569, '1 shuddm', 'I shudder!'], [1570, '0', 'O'], [1570, 'ever.', 'ever,'], [1573, '1', 'I'],
  [1573, 'mouse.', 'mouse,'], [1575, '1 raiglil', 'I might'], [1577, "\\", 'I'], [1577, 'snail.', 'snail,'], [1583, 'f To Pjmim*^', '[To Pamina.'],
  [1586, '[Ftrmif', '[Firmly.'], [1590, 'Tlie same.—Sarastro, on n splendid utr, /9Ì', 'The same.—Sarastro, on a splendid car, fol-'],
  [1591, "crott'd.", 'crowd.'], [1593, 'Lon-j', 'Long'], [1593, 'forever I', 'forever!'], [1595, 'lie', 'he'], [1595, 'wlioin', 'whom'],
  [1597, 'wi.-e', 'wise'], [1599, 'is.', 'is,'], [1601, 'descenils', 'descends'], [1601, 'ike utf', 'the car.'], [1602, '{Kneeling.)', '(Kneeling.)'],
  [1604, '"scape', "'scape"], [1604, 'power.', 'power,'], [1606, 'Rut', 'But'], [1606, 'IS', 'is'], [1610, 'Tterelore,', 'Therefore,'],
  [1610, 'thoe.', 'thee.'],
  // leaf 17
  [1797, '{RaÌ9*ng', 'Sar. (Raising'], [1811, 'Filial', 'Pam. Filial'], [1811, 'conoemetf', 'concerned'], [1815, 'Who', 'Sar. Who'],
  [1821, 'Let', 'Pam. Let'], [1821, "again'—", 'again—'], [1823, 'is', 'is—'], [1825, 'A', 'Sar. A'], [1832, '77l«', 'The'],
  [1832, 'Tamiho.', 'Tamino.'], [1835, 'Thou,', 'Mon. Thou,'], [1836, 'Sarasiro,', 'Sarastro,'],
  [1837, 'Tarn, fy),rr. he', "Tam. & Pam. 'Tis he/she—"], [1850, '[Thty', '[They'], [1851, 'àU.', 'All.'], [1851, 'thi«', 'this'],
  [1856, 'tkem', 'them.'], [1859, 'Satastr»', 'Sarastro.'], [1867, 'Ptpagenai', 'Papageno.'], [1872, 'once', 'once—'], [1873, 'Man,', 'Mon.'],
  [1873, '[Rise»', '[Rises.'], [1880, 'Sar astro!', 'Sarastro!'], [1888, 'depart^ sur', 'depart, sur-'], [1890, "■'", ''],
  [1893, 'indeed.', 'indeed,'], [1897, 'XHD or AOT', 'END OF ACT'], [1909, 'Yon,', 'You,'], [1910, '•ervants', 'servants'], [1910, 'gods.', 'gods,'],
  [1911, 'truth i declare', 'truth I declare'], [1911, 'to-day i»', 'to-day is'], [1919, '1', 'I'], [1922, 'Tain', 'vain'], [1923, '«rath', 'wrath'],
  [1929, 'Ch<>nia,', 'Chorus.'], [1933, 'eoaple 1', 'couple!'], [1935, 'the.steps', 'the steps'], [1935, 'wanderer.', 'wanderer,'],
  [1947, '[EssmL', '[Exeunt.'], [1949, `"tor* I» «t'kt HràBT."`, `"LOVE IN EV'RY HEART."`], [1952, 'Love', 'Mon. Love'],
  // leaf 19
  [2164, 'MAorc; n^irm:.', 'MAGIC FLUTE.'], [2170, 'Bot', 'not'], [2172, 'Hash', 'flesh'], [2173, "wonnan's", "woman's"],
  [2177, 'Therefore,', 'Therefore'], [2177, 'I.', 'I,'], [2180, 'rnoon.', 'moon,'], [2185, 'thee.', 'thee,'], [2188, 'Patnina.', 'Pamina.'],
  [2190, 'li.', 'II.'], [2192, 'rites', 'rises'], [2192, 'Ra-', 'Pa-'], [2197, 'Fam. {Awakes.)', 'Pam. (Awakes.)'], [2198, '. Mon.', 'Mon.'],
  [2204, '[Recogntztng', '[Recognizing'], [2210, 'Queen', 'Queen.'], [2214, '1', 'I'], [2215, '■my', 'my'], [2217, '«un,', 'sun,'],
  [2218, '1 entreated', 'I entreated,'], [2219, 'ind', 'and'], [2219, 'yon', 'you'], [2221, 'him.', 'him,'], [2225, 'inino', 'mino'],
  [2227, 'chilis', 'chills'], [2229, "\\na", 'You'], [2230, '>mand', 'mand'], [2234, 'liie', 'the'], [2238, 'liiee', 'thee'],
  [2239, 'Rejeci>ed', 'Rejected'], [2239, 'forlorn.', 'forlorn,'], [2241, "mother'» vaw!", "mother's vow!"], [2243, '[Etit.', '[Exit.'],
  [2245, 'HI.', 'III.'], [2247, 'iiifAciA,', 'Pamina,'], [2247, 'mid M0NO8TATO8.', 'and Monostatos.'], [2250, "'No.", 'No,'],
  [2252, '(Atiie.)', '(Aside.)'], [2252, 'Til', "I'll"], [2252, 'affair»', 'affairs'], [2253, '^11.', 'well.'], [2256, 'du', 'dis-'],
  [2257, '1', 'I'], [2259, 'ktt', 'her.'], [2267, 'Vfttl,', 'Well,'], [2276, 'di«.', 'die.'], [2276, 'Pom', 'Pam.'], [2280, 'himselj', 'himself'],
  [2281, "Sarastro' s", "Sarastro's"], [2281, 'conspire*', 'conspires'], [2284, 'rentnr*', 'venture'], [2285, 'intoVny', 'into my'], [2287, '•', 'a'],
  [2290, 'let.', 'let'], [2291, 't«', 'to'], [2292, 'wUJ', 'will'], [2295, 'THISK SACREP BOWIB8 *', 'THESE SACRED BOWERS"'],
  [2298, 'bowers.', 'bowers,'], [2301, 'blight. iig', 'blighting'], [2302, 'woe.', 'woe,'], [2303, 'entwinM,', 'entwines,'],
  [2309, 'But. grie/', 'But, grief'], [2309, 'beguiling.', 'beguiling,'], [2310, 'others', "other's"], [2312, '[EzauU.', '[Exeunt.'],
  [2317, 'reMirn', 'return'], [2317, 'yoa.', 'you.'], [2318, '(heard', 'I heard'], [2321, 'ycur', 'your'], [2322, 'Pamtna', 'Pamina'],
  [2322, 'm«', 'me'], [2323, 'ts', 'is'], [2329, 'Pam W^retch', 'Pam. Wretch'], [2329, 'am. loo', 'am, too'], [2331, 'moon', 'mourn'],
  [2332, 'wo«,', 'woe,'], [2334, 'return.', 'return,'], [2337, 'ram.', 'vain.'],
  // leaf 21
  [2526, 'i iubierranean', 'A subterranean'], [2527, 'thoulders', 'shoulders'], [2527, "J'yramid.", 'Pyramid.'], [2529, 'hundn.', 'hands.'],
  [2533, 'Ic,', 'lo,'], [2533, 'ruy', 'ray'], [2534, 'risina Phcebus', 'rising Phœbus'], [2534, 'away,', 'away;'], [2537, 'stepr.', 'steps'],
  [2539, 'lead.', 'lead,'], [2546, 'rhe', 'The'], [2547, 'kd', 'led'], [2550, 'Srr.', 'Sar.'], [2550, 'goat', 'goal'], [2551, 'lore', 'more'],
  [2552, 'ive', 'love'], [2552, '{Takes', '(Takes'], [2553, `"'amino`, 'Tamino'], [2555, '(7b', '[To'], [2555, 'go.es', 'goes'],
  [2556, 'retgns.', 'reigns.'], [2558, 'Pami.va.', 'Pamina.'], [2561, '11', 'all'], [2561, 's»ems', 'seems'], [2562, 'ut', 'but'],
  [2562, 'zeph>T,', 'zephyr,'], [2563, 'ly', 'my'], [2565, 'Ho', 'He'], [2568, 'ne', 'one'], [2574, 'Tarn.', 'Tam.'], [2578, 'beheld', 'behold'],
  [2581, 'our', 'your'], [2583, 'levere', 'severe'], [2584, 'iposed.', 'exposed.'], [2586, "p^' ^ >", 'Sar. & Pam.'], [2589, 'is', 'his'],
  [2591, "if \\", '& Tam.'], [2593, 'Tarn..)', ''], [2593, 'smite.', 'smile.'], [2596, '>', 'to'], [2598, `n""' ^ > »*^`, 'Sar. & Pam. His/My'],
  [2598, 'yours:', 'yours;'], [2601, 'ut', 'but'], [2602, 'rara.', 'ward.'], [2605, '*»e', 'the'], [2606, '^)', '& Pam.'],
  [2607, 'Pam.] J*re', 'are'], [2610, 'it< (Tb', 'it. (To'], [2610, 'm,', 'to'], [2611, "(Jo Tamtno.'^", '(To Tamino.)'],
  [2613, `Pam! ^'^'' he ^'^^ ^^' ^*' °'^^^ ' ^^^ ^^'^^ "^®*`, 'Tam. & Pam. Yes, I/he will go. Oh gods! the very idea'], [2617, 'Vi', 'to'],
  [2617, '{To', '(To'], [2619, "p \\", 'Tam. & Pam.'], [2621, 'Pnest,', 'Priest,'], [2621, 'teay.', 'way,'], [2622, 'ancther.', 'another.'],
  [2624, 'Vili.', 'VIII.'], [2626, 'torth,', 'torch,'], [2627, '/rovi', 'from'], [2627, 'Paìi-', 'Pam-'], [2628, 'INA', 'ina'],
  [2630, 'rstag', 'stag'], [2630, 'overtak*', 'overtake'], [2631, 'him;—perhaps', 'him:—perhaps'], [2631, 'ar«', 'are'], [2632, '[lb', '[To'],
  [2632, 'Hare', 'Have'], [2638, 'mom.ent;', 'moment;'], [2652, '[E.Tir..', '[Exit.'], [2656, 'ge.stures.', 'gestures.'], [2658, "\\t", 'is'],
  [2659, 'alt', 'all'], [2659, 'difllculty', 'difficulty'], [2659, 'ih«', 'the'], [2660, 'sun', 'sun,'], [2661, '«i', 'of'], [2664, '" rOR', '"FOR'],
  [2664, 'LOVnS."', 'LOVING."'], [2669, 'creature.', 'creature,'], [2670, 'high.', 'high,'], [2672, 'ka.', '&c.'], [2675, 'life.', 'life,'],
  [2678, 'fair. Ate.', 'fair, &c.'], [2679, 'Wilt', 'Will'], [2679, 'sighing.', 'sighing,'], [2681, ".\\", 'A'],
  [2681, "myslumb'ring", "my slumb'ring"], [2681, 'wake.', 'wake,'], [2684, 'ke.', '&c.'], [2686, 'unavailing,', 'unavailing;'],
  [2687, 'Isdies.', 'ladies,'], [2690, 'fair. Ace', 'fair, &c.'], [2694, '77<e', 'The'], [2694, 'Woman^', 'Woman,'], [2694, 'Papaoeno.', 'Papageno.'],
  [2696, 'Woman', 'Woman.'], [2696, '1', 'I'], [2696, 'lay', 'my'], [2698, 'Vou: I Vfi/A sx^rpriM', 'You! [With surprise.'],
  // leaf 23
  [2911, 'FLL/TF,', 'FLUTE.'], [2917, 'clearest.', 'dearest.'], [2919, 'Pap (Aside)', 'Pap. (Aside.)'], [2921, 'Worvin.', 'Woman.'],
  [2923, "I'ap.", 'Pap.'], [2923, 'softly j', 'softly;'], [2926, 'W omau.', 'Woman.'], [2928, 'Pap', 'Pap.'], [2928, "you '", 'you?'],
  [2930, "il'ofian.", 'Woman.'], [2931, "'adies,", 'ladies,'], [2935, 'iroman.', 'Woman.'], [2935, 'husbaivl?', 'husband?'], [2937, 'doe«', 'does'],
  [2938, 'fart.', 'part.'], [2940, "W'oman.", 'Woman.'], [2944, 'c', 'a'], [2945, '1!', 'I!'], [2946, 'rmòraee', 'embrace'], [2947, 'J', 'I'],
  [2969, 'Pant.', 'Pam.'], [2971, 'mjr', 'my'], [2972, "T\\e", 'The'], [2977, 'be,', 'be.'], [2978, 'TV', 'The'],
  [2980, "Madne.«s rii'jes", 'Madness rages'], [2983, 'man.', 'man,'], [2990, 'ITu', 'The'], [2990, 'Ah.', 'Ah,'], [2991, '■Tiwi.', 'Pam.'],
  [2995, 'oh mother I [Looking ai dagger.', 'oh mother! [Looking at dagger.'], [2997, 'uraes', 'urges'], [2998, '7^*', 'The'],
  [3001, 'well I', 'well!'], [3007, 'kerself.', 'herself.'], [3008, "I\\e", 'The'], [3010, 'T annuo', 'Tamino'], [3010, 'thus.', 'thus,'],
  [3013, 'expire.-', 'expire.'], [3015, 'loveih ihee.', 'loveth thee.'], [3018, 'What,!', 'What!'], [3018, 'iie teel', 'he feel'],
  [3020, 'conceah-d', 'concealed'], [3020, '^', ''], [3024, 'cocnfoit', 'comfort'], [3025, 'TA< Boys This.', 'The Boys. This,'],
  [3025, 'mu-.,t', 'must'], [3027, 'ojw', 'now'], [3029, 'thru', 'thou'], [3033, 'li(e', 'life'], [3034, "1 \\vish", 'I wish'],
  [3035, 'will.«eek.', 'will seek.'], [3041, 'foes.', 'foes,'], [3043, "\\ Fxgunt", '[Exeunt.'], [3045, 'XIT.', 'XII.'],
  [3047, 'treifiendoua', 'tremendous'], [3047, '/lùC,', 'foot,'], [3047, 'den', 'deep'], [3048, 'en rem,', 'cavern,'], [3048, '%n', 'in'],
  [3050, '■ jlames arise J', 'flames arise,'], [3050, 'whenct', 'whence'], [3051, 'lit/md', 'liquid'], [3052, 'pyrajnid', 'pyramid'],
  [3054, 'AfterVAiiimk..', 'After Pamina.'], [3056, '-with dancers', 'with dangers'], [3057, "aii'", 'air'], [3058, 'deaths', 'death,'],
  [3060, 'v^ill', 'will'], [3063, 'Tarn.', 'Tam.'], [3063, 'man.', 'man,'], [3065, '()|ien,', 'Open,'], [3065, 'terror.', 'terror,'],
  [3068, 'tkf', 'thy'], [3070, 'cairn', 'came'], [3071, 'rusk', 'rush'], [3072, "other' t", "other's"],
  [3073, 'Dearest Tamino', 'Pam. Dearest Tamino.'], [3076, 'II ■ rOli', 'Pam. & Tam. Oh'], [3077, 'Rut', 'Tam. But'], [3077, 'tenor', 'terror'],
  [3077, 'Pamtna]', 'Pamina.]'], [3080, 'Dearest Pain', 'Tam. Dearest Pamina.'], [3087, 'llireaien."^.', 'threatens.'],
  [3089, 'failiilul coinpixnion wjierever', 'faithful companion wherever'], [3090, 'V)ve m', 'love in'], [3091, 'htti', 'him'],
  [3093, "way,\\", 'way,'], [3094, "\\", ''], [3095, "obey,\\", 'obey,'], [3102, 'w»y', 'way'], [3103, 'bani.*h', 'banish'], [3105, 'die.', 'die,'],
  [3105, 'her»^.', 'here.'], [3106, 'erat-', 'grat-'], [3107, 'ins,', 'ing,'], [3107, "T'mtuà i/", 'Tamino is'],
  // leaf 25
  [3307, 'FLUTEL', 'FLUTE.'], [3313, 'teen', 'seen'], [3313, 'aoundins^', 'sounding'], [3313, 'flute^', 'flute,'],
  [3314, 'hy tamiiia,', 'by Pamina,'], [3316, 'F««. > Tbe', 'Tam. & Pam. The'], [3318, "*'«j«. I", ''], [3318, 'away.', 'away,'],
  [3320, 'feel', 'feet'], [3326, 'sky.', 'sky,'], [3328, "\\Tht", '[The'], [3329, 'twmmit', 'summit'], [3329, 'xchich', 'which'],
  [3329, 'precipitate»', 'precipitates'], [3330, "l'amino", 'Tamino'], [3330, 'niotintain,', 'mountain,'], [3331, 'oil', 'on'],
  [3331, 'tfi^y', 'they'], [3332, 'stern', 'stem'], [3332, 'tonent.', 'torrent.'], [3333, 'the^n,', 'them,'], [3334, 'biU', 'but'],
  [3334, 'coritinues', 'continues'], [3335, 'tfiey', 'they'], [3338, 'Wlien', 'When'], [3338, 'tkoitght', 'thought'], [3338, 'droumed,', 'drowned,'],
  [3340, 'arid', 'and'], [3342, 'Tarn..', 'Tam.'], [3347, 'operu;', 'opens;'], [3348, 'thetr', 'their'], [3351, 'more.', 'more,'],
  [3353, 'Tiie trial s', "The trial's"], [3357, 'tiie rite«,', 'the rites,'], [3366, '7lu', 'The'], [3366, "Pai'aoexa", 'Papagena'],
  [3367, 'Papagexo <done;', 'Papageno alone;'], [3367, 'Buys', 'Boys'], [3368, 'Papaoena.', 'Papagena.'],
  [3370, '"«J». Pajiagena! Papasena!', 'Pap. Papagena! Papagena!'], [3374, 'Tain', 'vain'], [3374, 'sigli!', 'sigh!'],
  [3376, 'or. ill-lbrtnnes', "on ill-fortune's"], [3378, 'talked.', 'talked,'], [3380, 'so.', 'so,'], [3382, 'tasted.', 'tasted,'], [3384, '1', 'I'],
  [3384, 'bright.', 'bright,'], [3386, 'tbrm lia^i', 'form has'], [3390, "Papau'eiia, ligiit", 'Papagena, light'], [3390, "life '", 'life!'],
  [3392, "I'lpiiizcna,", 'Papagena,'], [3394, '!:i vnin', 'In vain'], [3394, '1 sigh?', 'I sigh!'],
  [3396, '^ r.diichi;."i Ipft', 'So nought is left'], [3398, '1 rn t:red', "I'm tired"], [3400, "T'l", 'To'], [3400, 'tiie', 'the'],
  [3403, 'bloom.', 'bloom,'], [3406, '{Pretends', '[Pretends'], [3409, 'displeaeeth m*, - -" ■', 'displeaseth me,'], [3410, '-', ''],
  [3412, 'lort,', 'love,'], [3415, "onl\\", 'only'], [3417, 'drowH,', 'drown,'], [3419, "Echo'.s—all", "Echo's—all"],
  [3420, 'yoiv "^ilL', 'your will.'], [3421, 'Papageno.', 'Papageno,'], [3421, 'hig!i,', 'high,'], [3423, 'and.see', 'and see'], [3424, '1', 'I'],
  [3425, 'past-', 'past—'], [3426, '1', 'I'], [3426, 'lajt,', 'last,'], [3427, 'For.', 'For,'], [3430, 'stajr', 'stay'], [3430, '1>«,', 'be,'],
  [3431, 'tb««.', 'thee.'], [3433, 'fine.', 'fine,'], [3435, 'Rut', 'But'], [3435, 'mina,', 'mine,'], [3438, '7%tf', 'The'], [3438, 'ring:', 'ring;'],
  [3440, 'the».', 'thee.'], [3442, 'things j', 'things;'], [3443, 'oh.«ound.', 'oh sound.'], [3445, 'himulf.', 'himself.'],
  [3447, '[Playi,', '[Plays.'], [3449, 'bells,.sound—Oh.', 'bells, sound—Oh,'], [3449, 'torn* 1', 'to me!'],
  [3451, 'Pupagena appeara.', 'Papagena appears.'], [3453, 'come I', 'come!'], [3455, '{Bringing Papa gena.)', '(Bringing Papagena.)'],
  [3459, 'Papagkna. seein^r', 'Papagena, seeing'], [3459, '«tdhi', 'make'], [3461, 'sJiou).', 'show.'], [3467, "I 'a—Pa—Pageno!", 'Pa—Pa—Pageno!'],
  [3469, 'quire', 'quite'], [3469, 'm»ì', 'me?'], [3471, 'Yes.', 'Yes,'], [3473, '-wife.', 'wife.'], [3477, 'f^hall', 'shall'], [3479, 'th«', 'the'],
  [3481, 'Littl*»', 'Little'], [3481, 'ar.d', 'and'], [3481, 'i:alore;', 'galore;'], [3483, 'w»? Mram»', 'we want,'], [3484, "I'irst", 'First'],
  [3484, 'hrxie', 'little'], [3485, "liUle F'a pagena!", 'little Papagena!'], [3486, 'Wiiat car v -iL', 'What can with'],
  [3488, 'ma.iy, irany,', 'many, many,'], [3490, 'Papa—pa—pvgpnf«,', 'Papa—pa—pagenos,'], [3492, 'Papa—pa—pay «aas.', 'Papa—pa—pagenas,'],
  [3494, 'blessing, cl', 'blessings of'], [3494, '[Etemmt,', '[Exeunt.'], [3498, 'MoKosTATOs,', 'Monostatos,'], [3498, 'L^dist,', 'Ladies.'],
  [3500, 'Mon.)', 'Mon., Queen, & Ladies.'], [3500, 'sofilv!', 'softly!'], [3502, "Queen. \\", ''], [3502, "ent«t tk« I'erapJe", 'enter the Temple'],
  [3504, "Ladies. \\Hush!", 'Hush!'],
  // leaf 27
  [3598, 'U»m. Bat, pnncesi,', 'Mon. But, princess,'], [3601, '^,)', 'Queen and The Ladies.'], [3604, 'The Ladies. I tt', 'My/Her'],
  [3607, 'If 1', '& Ladies.'], [3608, "Ladies. \\", ''], [3611, 'Now', 'Mon. Now'], [3611, 'hall»', 'halls.'], [3613, ')', 'Queen & Ladies.'],
  [3616, 'No', 'Mon. and All five. No'], [3618, 'sv.-ord.', 'sword.'], [3619, '6Jon. 4")', 'Mon. & Ladies.'], [3620, 'Ladies. ^', ''],
  [3622, '[7%<', '[The'], [3623, 'Stuldenly', 'Suddenly'], [3628, 'SiKABTRO', 'Sarastro'], [3629, 'uiWA', 'mina'],
  [3629, 'Initiated.,', 'Initiated,'], [3629, 'tur-', 'sur-'], [3645, 'Prietts;', 'Priests;'], [3646, 'tohoiii', 'whom'], [3646, 'Itand', 'hand'],
  [3648, 'I', ''], [3650, 'QcKKH,', 'Queen,'], [3650, "th-'ee Attendant*,", 'three Attendants,'], [3650, 'Movos', 'Monos-'],
  [3652, 'TAT08.', 'tatos.'], [3654, 'night!*', 'night!'], [3656, '£ternal', 'Eternal'], [3656, '{They sink', '[They sink.'], [3660, 'oe»', 'con-'],
  [3661, '[7b Pamtna', '[To Pamina'], [3661, 'Tamim*', 'Tamino.'], [3665, 'yoa', 'you'], [3665, 'day»', 'day,'], [3668, 'ray»', 'ray,'],
  [3671, 'guide.', 'guide,'], [3674, 'reigm,', 'reign,'], [3676, "obtaia. ''", 'obtain.'],
];
// The printer's own slips, which the page images show in the book itself,
// put right where there is no doubt: "Scena" for "Scene" over three
// scenes; a bracket shut with the wrong mark; and Pamina's name for
// Tamino's beside words that are spoken to her (the Italian page has
// "Sar. e Tam." there).
const MISPRINTS = [
  [769, 'SCENA', 'SCENE'],
  [1186, 'SCENA', 'SCENE'],
  [1484, 'SCENA', 'SCENE'],
  [2281, 'feet.]', 'feet.)'],
  [2598, 'Sar. & Pam.', 'Sar. & Tam.'],
];
// Lines left out: page numbers (misread), stray marks, and the names the
// machine read in blocks apart from their lines (see FIXES). Three of
// those blocks carry the lower of two words set one above the other
// ("she", "My", "My"): the word is not lost, the FIXES row of its line
// gives the pair with a stroke.
const LEFT_OUT = [
  [759, 'Pap.'], [760, 'Tarn.'], [763, 'Pap.'], [764, 'Tarn.'], [766, 'Pap.'], [978, 'Pap'], [981, 'Kp.'], [984, "\\"],
  [987, '*p-'], [1118, 'Pap.'], [1121, 'Pap.'], [1123, 'If'], [1125, 'Man.'], [1194, 'I«'], [1424, '11'],
  [1524, 'Pam. d" /., I,,,'], [1613, 'It'], [1780, 'IS'], [1783, '8ttr.'], [1786, 'Pam.'], [1787, 'Sar.'], [1790, 'Pam'],
  [1791, '&ir.'], [1794, 'Man.'], [1840, 'Pam.) she-'], [1926, 'Mon.'], [1960, "\\I4"], [2167, 'Ifi'], [2342, 't«'], [2521, 'n'],
  [2599, 'Pam.) My'], [2701, 'It'], [2914, 'It'], [3083, 'Pam'], [3085, 'Turn.'], [3086, 'Tar'], [3110, 'ao'], [3310, '81'],
  [3507, 'IS'], [3595, '2r^'], [3603, 'Queen and (Mv'], [3632, 'ilon.'], [3634, 'Queen.'], [3636, 'Ladies.'], [3638, 'Mon.'],
  [3640, 'and'], [3642, '411 five.'],
];
// Where the machine read the lines of a page in the wrong order: lines
// a to b are put back before line c. [a, b, c]
const MOVES = [
  [3080, 3080, 3076],
];
// Lines that belong to the end of the line before: verse too long for the
// column and turned over, and directions and names that run over several
// lines. (Every hyphen at such a break is the printer's.)
const JOINS = [
  294, 295, 308, 725, 1056, 1059, 1540, 1541, 1542, 1549, 1553, 1843, 1888, 1889, 2556,
  2622, 2656, 3069, 3071, 3072, 3107, 3313, 3314, 3315, 3329, 3330, 3331, 3332, 3333, 3334, 3335,
  3336, 3337, 3338, 3339, 3340, 3341, 3348, 3614, 3618, 3623, 3624, 3652, 3661,
];
// Directions the book prints without brackets (the scene, the persons of
// a scene, an entrance): [first line, last line] of each.
const DIRECTIONS = [
  [283, 283], [360, 360], [603, 603], [636, 636], [662, 662], [691, 691],
  [735, 735], [770, 770], [1090, 1091], [1128, 1128], [1150, 1150], [1188, 1188],
  [1485, 1485], [1510, 1510], [1590, 1591], [1832, 1832], [1905, 1907], [2192, 2193],
  [2247, 2247], [2274, 2274], [2315, 2315], [2526, 2529], [2546, 2548], [2558, 2558],
  [2626, 2628], [2694, 2694], [2951, 2951], [2967, 2967], [3047, 3054], [3366, 3368],
  [3459, 3461], [3498, 3498], [3628, 3648],
];
// The recitative set as prose in the book: [first line, last line] of
// each stretch. Everything else is verse, a printed line to a line.
const PROSE = [
  [353, 356], [383, 406], [605, 632], [664, 687], [1152, 1166], [1909, 1923],
  [2195, 2230], [2249, 2293], [2317, 2324], [2550, 2662], [2696, 2947], [3077, 3077],
  [3087, 3091],
];
// Lines that begin a new block of verse inside a speech (the book leaves
// a space above them).
const STANZAS = [
  374, 2177, 2306,
];
// Three speeches over which the book prints no name. The script gives
// them one, so that the words are not laid to the speaker before:
// Monostatos goes on after a line of Pamina and Papageno (1528); the
// chorus behind the scenes (1568; the Italian page has "Coro."); the
// three Boys, alone on the stage, begin the finale (2955).
const NAMED = [
  [1528, 'Mon.'], [1568, 'Chor.'], [2955, 'The three Boys.'],
];
// Lines of verse that begin like a name with its stop, and are none.
const NOT_NAMES = [
  342, 3327, 3346, 3356, 3362,
];

// The names before the speeches, as the book prints them (two names that
// a brace joins are given with "&"), and four that stand on lines of
// their own. The book shortens seven names; the script writes them out.
const LABELS = [
  'Tam.', 'Pap.', 'Pam.', 'Papa.', 'Mon.', 'Sar.', 'Chor.', 'Queen.', 'Speaker.', 'Woman.', 'Men.', 'All.', 'Both.',
  'All three.', 'All four.', 'All five.', 'The Ladies.', 'First Lady.', 'Second Lady.', 'Third Lady.',
  'The three boys.', 'The three Boys.', 'The Boys.', 'Some voices.', 'Voices.',
  'Tam. & Pap.', 'Pap. & Mon.', 'Pam. & Pap.', 'Tam. & Pam.', 'Sar. & Pam.', 'Sar. & Tam.', 'Pam. & Tam.',
  'Mon., Queen, & Ladies.', 'Queen and The Ladies.', 'Mon. & Ladies.', 'Queen & Ladies.', 'Mon. and All five.',
  'Mon., Pam., Pap., and Slaves.',
  'Chorus of Priests.', 'A Chorus of Priests from within.', 'The Queen, the three Attendants, and Monostatos.',
];
const FULL = { Tam: 'Tamino', Pap: 'Papageno', Pam: 'Pamina', Papa: 'Papagena', Mon: 'Monostatos', Sar: 'Sarastro', Chor: 'Chorus' };
const speakerOf = (label) => label
  .replace(/\b(Tam|Papa|Pap|Pam|Mon|Sar|Chor)\./g, (_, short) => FULL[short])
  .replace(/ & /g, ' and ')
  .replace(/\.$/, '')
  .toUpperCase();
const escaped = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const LABEL = new RegExp(`^(${LABELS.slice().sort((a, b) => b.length - a.length).map(escaped).join('|')})(?: (.+))?$`);
// What a name before a speech looks like; a line that begins so and with
// no name the script knows is an error, unless NOT_NAMES lists it.
const LIKE_A_NAME = /^[A-Z][A-Za-z]*(?: [A-Za-z]+){0,2}\.(?: |$)/;
// The kinds of musical numbers the book names over them, in italic.
const KINDS = ['Air.', 'Duet.', 'Finale.', 'Recitative.', 'Air and Chorus.', 'Duet and Chorus.'];
// Over nine numbers the book sets their first words, in capitals and
// inverted commas. The script keeps the inverted commas and gives the
// letters the case they have in the first line of the song.
const TITLES = 9;
const TITLE = /^"[A-Z][A-Z ,.!']*"$/;
// The scenes of the two acts as the book numbers them; the second act
// ends with one more, headed "Scene the Last".
const SCENES = [16, 14];
// How many bracketed directions stand inside the speeches.
const BRACKETS = 104;

const ranges = (table, what) => {
  const set = new Set();
  for (const [a, b] of table) {
    if (!(a <= b)) throw new Error(`${ID}: ${what}: a range runs backwards, ${a} to ${b}`);
    for (let n = a; n <= b; n++) {
      if (set.has(n)) throw new Error(`${ID}: ${what}: line ${n} is in two ranges`);
      set.add(n);
    }
  }
  return set;
};
const letters = (s) => s.replace(/[^A-Za-z]/g, '');

export function build() {
  const line = sourceLines(FILE, URL).map(tidy);
  if (line[FROM] !== 'IL FLAUTO MAGICO.' || line[FROM + 3] !== 'ATTO I.' || line[279] !== 'ACT I.' || line[TO + 3] !== 'IL FLAUTO MAGICO.') {
    throw new Error(`${ID}: the libretto does not lie where it did in the file`);
  }
  mend(ID, line, FIXES);
  mend(ID, line, MISPRINTS, 'misprint');
  leaveOut(ID, line, LEFT_OUT);
  const pages = englishPages(ID, line, { from: FROM, to: TO, head: HEAD });
  if (pages.length !== 10) throw new Error(`${ID}: ${pages.length} English pages, expected 10`);
  const stream = joinLines(ID, reorder(ID, englishLines(line, pages), MOVES), JOINS);

  const dirStart = new Map(DIRECTIONS.map(([a, b]) => [a, b]));
  ranges(DIRECTIONS, 'DIRECTIONS');
  const prose = ranges(PROSE, 'PROSE');
  const stanza = new Set(STANZAS);
  const named = new Map(NAMED);
  const notNames = new Set(NOT_NAMES);
  const labelsUsed = new Set();
  const kindsUsed = new Set();

  const parts = [];
  const src = new Map(); // block -> the source lines it came from
  const brackets = []; // every bracketed direction, with the line it stands on
  let part = null;
  let scenes = 0;
  let lastScene = false;
  let speaker = null;
  let ends = 0;
  let titles = 0;
  const push = (b, ns) => { part.blocks.push(b); src.set(b, ns); return b; };
  const closeAct = () => {
    if (!part) return;
    const want = SCENES[parts.length - 1];
    if (scenes !== want) throw new Error(`${ID}: act ${parts.length} has ${scenes} numbered scenes, expected ${want}`);
    if (lastScene !== (parts.length === 2)) throw new Error(`${ID}: "Scene the Last" should close the second act and no other`);
  };
  const direction = (text, ns) => {
    const t = tidy(text);
    if (!/^[A-Z][^()[\]]*\.$/.test(t)) throw new Error(`${ID}: direction not understood, line ${ns[0]}: ${JSON.stringify(text)}`);
    push({ k: 'd', text: t }, ns);
  };
  const name = (label, ns) => {
    if (!LABELS.includes(label)) throw new Error(`${ID}: not a name the script knows, line ${ns[0]}: ${label}`);
    labelsUsed.add(label);
    speaker = speakerOf(label);
    if (!/^[A-Z]+(?:,? [A-Z]+)*$/.test(speaker)) throw new Error(`${ID}: a name not written out, line ${ns[0]}: ${speaker}`);
    push({ k: 's', text: speaker }, ns);
  };
  const kind = (text, ns) => {
    kindsUsed.add(text);
    push({ k: 'd', text }, ns);
  };

  // The words of a run of lines under one speaker: [{ n, ns, text }].
  // Every bracketed phrase is a direction (the book sets them in italic)
  // and is taken out to stand between the pieces of the speech. The book
  // opens most of them with "[" and does not shut them: such a one runs
  // to the end of its line.
  const MARK = /\u0003(\d+)\u0004/g;
  const say = (run, asProse) => {
    if (!speaker) throw new Error(`${ID}: words with no speaker, line ${run[0].n}: ${run[0].text}`);
    const ns = run.flatMap((l) => l.ns);
    const shut = run.map((l) => {
      const open = l.text.lastIndexOf('[');
      return { n: l.n, text: open >= 0 && l.text.indexOf(']', open) < 0 ? `${l.text}]` : l.text };
    });
    // one string: prose glued, verse with each line marked by its number
    const whole = asProse
      ? shut.map((l) => l.text).reduce((a, b) => glue(a, b))
      : shut.map((l) => `\u0003${l.n}\u0004${l.text}`).join('\n');
    // the line on which each bracket opens
    const opens = [];
    for (const l of shut) for (const c of l.text) if (c === '(' || c === '[') opens.push(l.n);
    // cut at the brackets
    const pieces = [];
    let rest = whole;
    let k = 0;
    for (;;) {
      const at = rest.search(/[([]/);
      if (at < 0) break;
      const n = opens[k++];
      const end = rest.indexOf(rest[at] === '(' ? ')' : ']', at);
      const inside = end < 0 ? null : rest.slice(at + 1, end);
      if (inside === null || /[()[\]\n\u0003]/.test(inside)) throw new Error(`${ID}: the bracket opened at line ${n} is not shut on its line, or has another inside it`);
      const after = rest.slice(end + 1);
      if (/^ ?[.,;:]/.test(after)) throw new Error(`${ID}: a stop after the bracket opened at line ${n}`);
      pieces.push({ text: rest.slice(0, at) });
      pieces.push({ d: inside, n });
      rest = after;
    }
    pieces.push({ text: rest });
    let block = null;
    let last = run[0].n;
    const begun = new Set();
    for (const p of pieces) {
      if (p.d !== undefined) {
        direction(p.d, asProse ? ns : [p.n]);
        brackets.push({ n: p.n, inside: p.d });
        block = null;
        continue;
      }
      if (/[)\]]/.test(p.text)) throw new Error(`${ID}: a bracket shut and never opened, lines ${ns[0]} to ${ns[ns.length - 1]}`);
      if (asProse) {
        const t = tidy(p.text);
        if (t) push({ k: 'p', text: t }, ns);
        continue;
      }
      for (const sub of p.text.split('\n')) {
        const m = sub.match(/^\u0003(\d+)\u0004/);
        if (m) last = Number(m[1]);
        const t = tidy(sub.replace(MARK, ''));
        if (!t) continue;
        if (!block || (stanza.has(last) && !begun.has(last) && begun.size)) block = push({ k: 'v', lines: [] }, []);
        begun.add(last);
        block.lines.push(t);
        src.get(block).push(last);
      }
    }
    for (const l of run) stanza.delete(l.n);
  };

  let run = [];
  const flush = () => {
    if (!run.length) return;
    // prose and verse may follow each other under one name
    let from = 0;
    for (let i = 1; i <= run.length; i++) {
      if (i === run.length || prose.has(run[i].n) !== prose.has(run[from].n) || (prose.has(run[i].n) && stanza.has(run[i].n))) {
        say(run.slice(from, i), prose.has(run[from].n));
        from = i;
      }
    }
    run = [];
  };
  // The first line of the song that follows line i of the stream, without its singer's name.
  const songAfter = (i) => {
    for (let j = i + 1; j < stream.length; j++) {
      const t = stream[j].text;
      if (KINDS.includes(t) || /^[A-Za-z ]+\.—/.test(t)) continue;
      const m = t.match(LABEL);
      return m ? m[2] || '' : t;
    }
    return '';
  };

  for (let i = 0; i < stream.length; i++) {
    const l = stream[i];
    const where = `line ${l.n}`;
    let text = l.text;
    let m;
    if ((m = text.match(/^ACT (I|II)\.$/))) {
      flush();
      closeAct();
      const n = roman(m[1]);
      if (n !== parts.length + 1) throw new Error(`${ID}: act ${n} out of order, ${where}`);
      part = { id: `act-${n}`, label: `Act ${n}`, blocks: [] };
      parts.push(part);
      scenes = 0; lastScene = false; speaker = null;
      continue;
    }
    if (!part) throw new Error(`${ID}: text before the first act, ${where}: ${text}`);
    if ((m = text.match(/^SCENE ([IVX]+|THE LAST)\.$/))) {
      flush();
      if (lastScene) throw new Error(`${ID}: a scene after the last, ${where}`);
      let label;
      if (m[1] === 'THE LAST') { lastScene = true; label = 'Scene the Last'; } else {
        const n = roman(m[1]);
        if (n !== scenes + 1) throw new Error(`${ID}: ${part.label}, scene ${n} out of order, ${where}`);
        scenes++;
        label = `Scene ${n}`;
      }
      push({ k: 'h', level: 3, text: label }, [l.n]);
      speaker = null;
      continue;
    }
    if (text === 'END OF ACT I.') { flush(); ends++; continue; }
    if (!scenes) throw new Error(`${ID}: text before the first scene of ${part.label}, ${where}`);
    if (dirStart.has(l.n)) {
      // a direction without brackets: it runs to the last line the table names
      flush();
      const last = dirStart.get(l.n);
      const ns = [...l.ns];
      while (ns[ns.length - 1] < last) {
        i++;
        if (!stream[i] || stream[i].n > last || dirStart.has(stream[i].n)) throw new Error(`${ID}: the direction at ${where} does not run to line ${last}`);
        text = glue(text, stream[i].text);
        ns.push(...stream[i].ns);
      }
      if (ns[ns.length - 1] !== last) throw new Error(`${ID}: the direction at ${where} does not end at line ${last}`);
      dirStart.delete(l.n);
      direction(text, ns);
      continue;
    }
    if (TITLE.test(text)) {
      // the first words of a number, over it
      flush();
      const song = letters(songAfter(i));
      const want = letters(text);
      if (!want || song.slice(0, want.length).toUpperCase() !== want) throw new Error(`${ID}: the title at ${where} is not the beginning of the song that follows it`);
      let k = 0;
      push({ k: 'd', text: text.replace(/[A-Z]/g, () => song[k++]) }, l.ns);
      titles++;
      continue;
    }
    if (KINDS.includes(text)) { flush(); kind(text, l.ns); continue; }
    if ((m = text.match(/^([A-Za-z ]+\.)—(.+)$/)) && KINDS.includes(m[1])) {
      // the kind of number and its singers on one line
      flush();
      kind(m[1], l.ns);
      name(m[2], l.ns);
      continue;
    }
    if (named.has(l.n)) {
      flush();
      name(named.get(l.n), l.ns);
      named.delete(l.n);
    } else if ((m = text.match(LABEL))) {
      flush();
      if (m[2] && /^(?:&|and |,)/.test(m[2])) throw new Error(`${ID}: names joined in a way not provided for, ${where}: ${text}`);
      name(m[1], l.ns);
      if (!m[2]) continue;
      text = m[2];
    } else if (LIKE_A_NAME.test(text) && !notNames.delete(l.n)) {
      throw new Error(`${ID}: this begins like a name that is not provided for, ${where}: ${text}`);
    }
    run.push({ n: l.n, ns: l.ns, text });
  }
  flush();
  closeAct();

  if (parts.length !== 2) throw new Error(`${ID}: expected 2 acts, found ${parts.length}`);
  if (ends !== 1) throw new Error(`${ID}: ${ends} act endings, expected 1 ("End of Act I.")`);
  if (titles !== TITLES) throw new Error(`${ID}: ${titles} titles over the numbers, expected ${TITLES}`);
  if (dirStart.size) throw new Error(`${ID}: directions not found at lines ${[...dirStart.keys()].join(', ')}`);
  if (stanza.size) throw new Error(`${ID}: nothing begins at lines ${[...stanza].join(', ')} (STANZAS)`);
  if (named.size) throw new Error(`${ID}: no speech begins at lines ${[...named.keys()].join(', ')} (NAMED)`);
  if (notNames.size) throw new Error(`${ID}: no line like a name at lines ${[...notNames].join(', ')} (NOT_NAMES)`);
  const unused = [...LABELS.filter((x) => !labelsUsed.has(x)), ...KINDS.filter((x) => !kindsUsed.has(x))];
  if (unused.length) throw new Error(`${ID}: names or kinds of number never met: ${unused.join(' | ')}`);
  if (brackets.length !== BRACKETS) throw new Error(`${ID}: ${brackets.length} bracketed directions, expected ${BRACKETS}`);
  lastChecks(ID, parts, { allow: /^[A-Za-zœ ,.;:!?'"&/—-]+$/, heading: /^Scene (?:\d+|the Last)$/, passOver: /&c\./g });
  // Marks that have one use each in this book: the inverted commas round
  // the nine titles, the stroke between two words set one above the other
  // for two singers at once (four places), "&c." after a burden (four).
  let strokes = 0;
  let etc = 0;
  for (const p of parts) for (const b of p.blocks) for (const t of b.k === 'v' ? b.lines : [b.text]) {
    if (/"/.test(t) && !(b.k === 'd' && /^"[^"]+"$/.test(t))) throw new Error(`${ID}: an inverted comma out of place: ${t}`);
    if (/-$/.test(t)) throw new Error(`${ID}: a line ends in a hyphen: ${t}`);
    if (/&/.test(t.replace(/, &c\.$/, ''))) throw new Error(`${ID}: "&" out of place: ${t}`);
    if (/&c\./.test(t)) etc++;
    const all = (t.match(/\//g) || []).length;
    const between = (t.match(/(?<![A-Za-z/])[A-Za-z]+\/[A-Za-z]+(?![A-Za-z/])/g) || []).length;
    if (all !== between || (all && b.k !== 'v' && b.k !== 'p')) throw new Error(`${ID}: a stroke out of place: ${t}`);
    strokes += all;
  }
  if (strokes !== 4 || etc !== 4) throw new Error(`${ID}: ${strokes} strokes and ${etc} "&c.", expected 4 and 4`);
  // The beginning and the end.
  const first = parts[0].blocks;
  const lastBlocks = parts[1].blocks;
  const last = lastBlocks[lastBlocks.length - 1];
  if (first[0].text !== 'Scene 1' || first[1].text !== 'Tamino, followed by a serpent.' || first[2].text !== 'TAMINO' || first[3].lines[0] !== 'Help! oh help! or else I am lost,') throw new Error(`${ID}: the libretto does not begin as expected`);
  if (last.k !== 'v' || last.lines[last.lines.length - 1] !== 'And her high awards obtain.' || lastBlocks[lastBlocks.length - 2].text !== 'CHORUS OF PRIESTS') throw new Error(`${ID}: the libretto does not end as expected`);
  return { parts, src, brackets };
}

export function run() {
  return writeText(ID, {
    author: 'Wolfgang Amadeus Mozart',
    title: 'The Magic Flute',
    translator: null, // not named in the libretto
    year: null, // and it bears no date
    note: 'The English version from the Italian and English libretto that Fred Rullman of New York published. It gives neither translator nor date. Mozart wrote the opera in German with spoken dialogue. This libretto follows the Italian version sung in London and New York in the nineteenth century, which cuts the dialogue or has it sung, so a recording in German has speech that is not printed here. This text was read by machine from a poor scan. It was then read through against the scan, but more misread words may remain in it than in the other libretti.',
    verse: false,
    source: { name: 'Internet Archive', url: 'https://archive.org/details/magicflutediezau00moza' },
  }, build().parts);
}
