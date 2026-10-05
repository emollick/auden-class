# The edits proposed for "one wording for the measure", piece by piece.
# Each entry: (old, new, rule, where, why).
#   old, new  the run of the raw reading.json to be replaced, and what replaces it
#   rule      A = how the line begins; B = accent and stress in verse measured by count;
#             C = one name for one thing elsewhere
#   where     the passage, the tab and the field
#   why       one line
# EDITS are the lists in this folder; OUTSIDE are the lists in outside/ (the same words outside the beat tabs).
# build_lists.py makes the lists from this file.
EDITS = {}

EDITS['antigone'] = [
 ('with one or two light syllables between the beats',
  'with one or two syllables between the beats',
  'C', 'elders, Beat, meterName', 'a syllable between two beats is off the beat already; "light" is a second name for that'),
 ('one or two light syllables between them',
  'one or two syllables between them',
  'C', 'elders, Beat, caption', 'the same'),
 ('blank verse and Greek quantity',
  'blank verse and Greek verse measured by length',
  'C', 'elders, Beat, stands', 'the caption says "measured by syllable length"; "quantity" is the term of art for that and is not taught on this page'),
]

EDITS['blake'] = [
 ('seven beats to the line, each after a lighter syllable: fourteen syllables',
  'fourteen syllables and seven beats, the line beginning off the beat',
  'A', 'sentence, Beat, meterName', 'the Tempest form: syllables, beats, how the line begins'),
 ('A stress where the measure has a light syllable.',
  'A stress where the measure has no beat.',
  'C', 'sentence, Beat, remark 4', 'the caption of this tab already says "where the measure has no beat"'),
]

EDITS['carmen'] = [
 ('eight syllables to the line; one line is printed with ten',
  'eight counted syllables to the line; one line is printed with ten',
  'B', 'habanera, Count, meterName', 'the other French pages say "counted syllables"; here too the count leaves out a mute e that is sung'),
 ('twelve syllables, resting after the sixth, then six',
  'twelve counted syllables, cut after the sixth, then six',
  'B', 'cartes, Count, meterName', 'the French line of twelve in the words of the Phèdre page; remark 1 of this tab already calls the place "the cut"'),
 ('French verse leaves the other accents free',
  'French verse leaves the other stresses free',
  'B', 'caveats[2]', 'an accent is what the count fixes; what the voice does elsewhere is a stress'),
]

EDITS['dante-inferno'] = [
 ('eleven syllables; the last accent always on the tenth, and in these lines a main accent on the sixth',
  'eleven syllables: the last accent always on the tenth, and in these lines another on the sixth',
  'B', 'francesca, Beat, meterName', 'one sentence shape for the three Dante pages'),
 ('are scanned: the rule',
  'are marked: the rule',
  'C', 'francesca, Beat, caption', 'the site says "marked" and "the marks" everywhere else'),
 ('s accents. In the second and third the accents fall',
  's stresses. In the second and third the stresses fall',
  'B', 'francesca, Beat, caption', 'the dots are the voice, and what the voice does is a stress'),
 ('then accents the seventh, right beside it. An accent so placed',
  'then stresses the seventh, right beside it. A stress so placed',
  'B', 'francesca, Beat, caption', 'the same; the Paradiso page says this of its ninth syllable with "stress"'),
 ('Accents meet on',
  'Stresses meet on',
  'B', 'francesca, Beat, remark 1', 'the same'),
 ('The scansion drawn on the three lines follows the word accents of the Italian.',
  'The marks drawn on the three lines follow the stresses of the Italian words.',
  'B', 'francesca, Beat, stands', '"the marks", as in every other stands; the dots are stresses'),
 ('an accent set beside a main accent',
  'a stress set beside a main accent',
  'B', 'francesca, Beat, stands', 'the main accent is the one the count fixes; the one beside it is the voice\'s'),
 ('the meeting accents bring out',
  'the meeting stresses bring out',
  'B', 'caveats[2]', 'the same'),
]

EDITS['dante-paradiso'] = [
 ('eleven syllables: a stress always on the tenth and, as a rule, on the fourth or the sixth',
  'eleven syllables: the last accent always on the tenth and, as a rule, another on the fourth or the sixth',
  'B', 'end, Beat, meterName', 'one sentence shape for the three Dante pages; what the count fixes is an accent'),
 ('The tenth is always stressed, and as a rule the fourth or the sixth is too.',
  'The last accent always falls on the tenth and, as a rule, another on the fourth or the sixth.',
  'B', 'end, Beat, caption', 'the sentence that states the rule of the line, in the words of the meterName'),
]

EDITS['dante-purgatorio'] = [
 ('eleven syllables to the line; the last stress on the tenth, another on the fourth or the sixth',
  'eleven syllables: the last accent always on the tenth, another on the fourth or the sixth',
  'B', 'garden, Beat, meterName', 'one sentence shape for the three Dante pages; what the count fixes is an accent'),
 ('eleven syllables, stressed always on the tenth and on the fourth or the sixth.',
  'eleven syllables, the last accent always on the tenth and another on the fourth or the sixth.',
  'B', 'garden, Beat, caption', 'the sentence that states the rule of the line, in the words of the meterName'),
 ('and the fourth is weak',
  'and the fourth is unstressed',
  'C', 'garden, Beat, remark 2', '"weak" is a second name for unstressed'),
]

EDITS['don-giovanni'] = [
 ('The accents marked are those of the verse read aloud.',
  'The stresses marked are those of the verse read aloud.',
  'B', 'caveats[1]', 'what a reading aloud gives is the voice; fifteen other pages word this warning with "stresses"'),
]

EDITS['faust'] = [
 ('each beat comes after an off-beat',
  'the line beginning off the beat throughout',
  'A', 'heaven, Beat, meterName', 'the Tempest wording for how the line begins'),
 ('each beat after an off-beat',
  'the line beginning off the beat',
  'A', 'name, Beat, meterName', 'the same'),
]

EDITS['fidelio'] = [
 ('rising verse: four beats to the line in the recitative; four and three by turns in the lines to Hope; three, two, two and three in the resolve',
  'four beats to the line in the recitative; four and three by turns in the lines to Hope; three, two, two and three in the resolve; the line beginning off the beat throughout',
  'A', 'scene, Beat, meterName', '"rising verse" goes; how the line begins is said last, as on the Faust page'),
 ('rising verse: four beats shared among three speeches, then three beats, the name alone, three beats, and four',
  'four beats shared among three speeches, then three beats, the name alone, three beats, and four; the line beginning off the beat',
  'A', 'name, Beat, meterName', 'the same, without "throughout": the name alone begins on a beat'),
 ('The measure rises throughout, light syllable then beat.',
  'The line begins off the beat throughout, with a beat on every second syllable.',
  'A', 'scene, Beat, caption', 'the same thing in the Tempest vocabulary; every line marked bears it out'),
 ('four syllables, with no light syllable in front of them.',
  'four syllables, beginning on a beat.',
  'C', 'name, Beat, remark 3', 'the Tempest wording; this is the one line here that does not begin off the beat'),
]

EDITS['hamlet'] = [
 ('five beats to the line, rising from unstressed to stressed, without rhyme',
  'ten syllables and five beats, the line beginning off the beat, without rhyme',
  'A', 'to-be, Beat, meterName', 'the meterName of the Tempest\'s second passage, word for word; the clause on the extra syllable is kept as it is'),
]

EDITS['henry-iv-2'] = [
 ('"meterName": "five beats to the line, rising",\n          "scan": {\n            "5.0"',
  '"meterName": "ten syllables and five beats, the line beginning off the beat",\n          "scan": {\n            "5.0"',
  'A', 'sleep, Beat, meterName', 'the Tempest form for the same line'),
 ('"meterName": "five beats to the line, rising",\n          "scan": {\n            "51.0"',
  '"meterName": "ten syllables and five beats, the line beginning off the beat",\n          "scan": {\n            "51.0"',
  'A', 'rejection, Beat, meterName', 'the same'),
 ('in lines of five beats, each after a lighter syllable.',
  'in lines of ten syllables and five beats, the line beginning off the beat.',
  'A', 'sleep, Beat, caption', 'the Tempest wording; with the ten syllables named, "six beats by the same count" in the next sentence still has its count'),
 ('on the six-stress line. E. A. Abbott',
  'on the six-beat line. E. A. Abbott',
  'C', 'sleep, Beat, stands', 'the caption says "a six-beat line"'),
 ('A stress where the measure expects a light syllable, directly',
  'A stress where the measure has no beat, directly',
  'C', 'rejection, Beat, remark 1', 'the wording of the front page and of the Blake caption'),
 ('heard as two, with a light eleventh syllable to end the line.',
  'heard as two, with an eleventh syllable past the last beat.',
  'C', 'rejection, Beat, remark 2', 'the Tempest wording for the extra syllable'),
 ('on the accent after a pause. Falstaff',
  'on the stress after a pause. Falstaff',
  'C', 'rejection, Beat, stands', 'the caption says "takes a stress after the stop"; the Blake page cites the same thing as "a stress after a pause"'),
]

EDITS['magic-flute'] = [
 ('five beats, each after a lighter syllable; the odd lines end on one light syllable more',
  'five beats, the line beginning off the beat, in lines of eleven and ten syllables by turns',
  'A', 'queen, Beat, meterName', 'the same German line as the Rilke poem, in the same words'),
 ('where the pattern has a light syllable.',
  'where the measure has no beat.',
  'C', 'queen, Beat, remark 1', '"the measure", and the wording of the front page'),
]

EDITS['moby-dick'] = [
 ('a rising beat: an off-beat, then a beat, the foot of blank verse',
  'the foot of blank verse: an off-beat, then a beat',
  'A', 'rails, Beat, meterName', '"rising" goes; prose has no line to begin, so the meterName says what the caption says, in the same words'),
]

EDITS['orpheus'] = [
 ('a stress on the third syllable and on the seventh; a line may stop',
  'an accent on the third syllable and on the seventh; a line may stop',
  'B', 'aria, Count, meterName', 'what the count fixes is an accent'),
 ('takes its name from the place of its last stress',
  'takes its name from the place of its last accent',
  'B', 'aria, Count, remark 2', 'the rule in the words of the Don Giovanni page'),
 ('the last stress on the tenth or the sixth; an eleven has one more on its fourth or sixth; the rest are free',
  'the last accent on the tenth or the sixth; an eleven has another on its fourth or sixth; the other stresses are free',
  'B', 'terms, Measure, meterName', 'the line of eleven in the shape of the Dante pages'),
]

EDITS['othello'] = [
 ('five beats to the line, each after a lighter syllable, without rhyme',
  'ten syllables and five beats, the line beginning off the beat, without rhyme',
  'A', 'echo, Beat, meterName', 'the meterName of the Tempest\'s second passage, word for word; two lines marked here begin on a beat, which "each after a lighter syllable" denied'),
]

EDITS['peer-gynt'] = [
 ('light syllables between the beats is free",\n          "scan": {\n            "42.2"',
  'syllables between the beats is free",\n          "scan": {\n            "42.2"',
  'C', 'two-sayings, Beat, meterName', 'a syllable between two beats is off the beat already; "light" is a second name for that'),
 ('light syllables between the beats is free",\n          "scan": {\n            "5.1"',
  'syllables between the beats is free",\n          "scan": {\n            "5.1"',
  'C', 'onion, Beat, meterName', 'the same'),
 ('light syllables between the beats is free",\n          "scan": {\n            "222.0"',
  'syllables between the beats is free",\n          "scan": {\n            "222.0"',
  'C', 'answer, Beat, meterName', 'the same'),
 ('here with one or two light syllables between them',
  'here with one or two syllables between them',
  'C', 'two-sayings, Beat, caption', 'the same'),
 ('four beats, the light syllables between them free.',
  'four beats, the syllables between them free.',
  'C', 'onion, Beat, caption', 'the same'),
 ('they gave up the meter of this line',
  'they gave up the measure of this line',
  'C', 'answer, Beat, caption', '"the measure", as two sentences earlier in the same caption'),
]

EDITS['phedre'] = [
 ('two light syllables then a beat',
  'two off-beats then a beat',
  'C', 'slip, Ear, caption', 'the foot said as the Moby-Dick page says the foot of blank verse'),
 ('The accent falls on the second syllable, where an anapest has none.',
  'The stress falls on the second syllable, where an anapest has no beat.',
  'B', 'slip, Ear, remark 1', 'this is a stress inside the half-line, not one of the two accents the count fixes'),
 ('on the fixed and the free accents',
  'on the fixed accents and the free stresses',
  'B', 'slip, Ear, stands', 'the same'),
 ('The lighter accents marked inside each half-line',
  'The lighter stresses marked inside each half-line',
  'B', 'caveats[1]', 'the key under these passages calls them "a light stress"'),
]

EDITS['rilke'] = [
 ('five beats, rising, in lines of eleven',
  'five beats, the line beginning off the beat, in lines of eleven',
  'A', 'panther, Beat, meterName', 'the Tempest wording for how the line begins'),
 ('five beats, each after an unstressed syllable, in lines',
  'five beats, the line beginning off the beat, in lines',
  'A', 'panther, Beat, caption', 'the same, so that caption and meterName agree'),
 ('A few light syllables could fairly be marked otherwise',
  'A few unstressed syllables could fairly be marked otherwise',
  'C', 'caveats[3]', 'a syllable the voice does not stress is unstressed'),
]

EDITS['rimbaud'] = [
 ('heard with its own accent and a pause',
  'heard with its own stress and a pause',
  'B', 'stanza, Count, remark 2', 'the count fixes no accent here; what the voice may do is a stress'),
 ('The accent marked on *Quoi?*',
  'The stress marked on *Quoi?*',
  'B', 'caveats[4]', 'the same'),
]

EDITS['traviata'] = [
 ('by the Italian count: the last stress always on the sixth',
  'by the Italian count: the last accent always on the sixth',
  'B', 'refrain, Measure, meterName', 'what the count fixes is an accent'),
 ('its last stress falls on the sixth syllable',
  'its last accent falls on the sixth syllable',
  'B', 'refrain, Measure, caption', 'the sentence that states the rule of the line'),
 ('two unstressed syllables follow the last stress, so eight',
  'two unstressed syllables follow the last accent, so eight',
  'B', 'refrain, Measure, remark 1', 'the same syllable as in the caption'),
 ('The line stops on its stress, so six syllables',
  'The line stops on its last accent, so six syllables',
  'B', 'refrain, Measure, remark 3', 'the words of the Don Giovanni page for the same thing'),
 ('by the Italian count, stressed on the third and the seventh; the first',
  'by the Italian count: an accent on the third and on the seventh; the first',
  'B', 'cabaletta, Measure, meterName', 'the line of eight in the words of the Orpheus page'),
 ('The line stops on its stress, so seven syllables',
  'The line stops on its last accent, so seven syllables',
  'B', 'cabaletta, Measure, remark 4', 'the same as in the first passage'),
]

EDITS['volpone'] = [
 ('blank verse: five beats to the line, rising',
  'blank verse: ten syllables and five beats, the line beginning off the beat',
  'A', 'gold, Beat, meterName', 'the Tempest form for the same line; "blank verse" stays, since the caption says what it is'),
 ('adds a light eleventh syllable.',
  'runs a syllable past the last beat.',
  'C', 'gold, Beat, caption', 'the Tempest wording for the extra syllable'),
 ('three light syllables run together before',
  'three unstressed syllables run together before',
  'C', 'gold, Beat, caption', 'a syllable the voice does not stress is unstressed'),
 ('three of them light and in a row',
  'three of them unstressed and in a row',
  'C', 'gold, Beat, remark 1', 'the same'),
 ('the light syllable added at a line',
  'the extra syllable at a line',
  'C', 'gold, Beat, stands', 'the words of the Tempest\'s stands'),
 ('when a stress is crowded into a light place:',
  'when a stress is crowded in where the measure has no beat:',
  'C', 'gold, Beat, stands', 'the wording of the front page for a place with no beat'),
 ('and four beats, the beat first.',
  'and four beats, the line beginning on a beat.',
  'A', 'song, Beat, caption', 'the measure of the Tempest\'s song, named as its meterName and the Tempest caption name it'),
 ('add a light syllable. In the ten lines',
  'run a syllable past the last beat. In the ten lines',
  'C', 'song, Beat, caption', 'the Tempest wording for the extra syllable'),
 ('a stressed word crowded into a light place slows the line',
  'a stressed word crowded in where the measure has no beat slows the line',
  'C', 'song, Beat, caption', 'the wording of the front page for a place with no beat'),
]

# The same words outside the beat tabs. Not part of the main lists: written to measure/outside/.
OUTSIDE = {}

OUTSIDE['horace'] = [
 ('in the rising beat usual in English verse',
  'beginning off the beat as English verse usually does',
  'A', 'ship, English (compare), caption', 'the only "rising" left in a printed field once the main lists are applied'),
]

OUTSIDE['orpheus'] = [
 ('stop on their stress',
  'stop on their last accent',
  'B', 'song, Rhyme, caption', 'goes with the main list: the Count tab of this page will say "its last accent"'),
 ('by the place of the last stress:',
  'by the place of the last accent:',
  'B', 'song, Strophes (shape), facts', 'the rule that names an Italian line, as remark 2 of the Count tab will word it'),
]

OUTSIDE['traviata'] = [
 ('It stops on its stress and rhymes',
  'It stops on its last accent and rhymes',
  'B', 'end, Shared (figure), caption', 'goes with the main list: the two Measure tabs of this page will say "stops on its last accent"'),
]

OUTSIDE['family-reunion'] = [
 ('The second line has four accented words',
  'The second line has four stressed words',
  'C', 'play, Line (shape), caption', 'the caption defines stresses two sentences earlier and counts stresses in the next'),
]

OUTSIDE['volpone'] = [
 ('as scanned on [the page on',
  'as marked on [the page on',
  'C', 'sources[14]', 'the site says lines are marked; this entry is the page\'s own words, not a source\'s'),
]
