// Week 06: tests and missing words.
// Pascal, Pensées, Sections VIII to XIV (Trotter); Racine, Phèdre (Boswell);
// Blake, The Marriage of Heaven and Hell; Kierkegaard, Fear and Trembling
// (Hollander's selections); Baudelaire, Intimate Journals (Shipley).
// Goethe's Faust is not required and is not used.
//
// The passages come from five books and the student must also say which
// book each is from, so the items are mixed and not in reading order.

const PH = 'phedre';
const BL = 'blake';

export default {
  words: {
    id: 'w06',
    cut: [BL, 'marriage', 34, 34, { lines: [0, 20] }],
    blank: [
      [0, 'enjoy'],
      [2, 'excess'],
      [4, 'pestilence'],
      [5, 'forgives'],
      [8, 'star'],
      [9, 'Eternity'],
      [10, 'sorrow'],
      [14, 'wings'],
      [17, 'wise'],
      [20, 'religion'],
    ],
    setting: 'Blake says he walked among the fires of Hell and collected some of its proverbs. These are the first twenty-one.',
    cite: 'Blake, *The Marriage of Heaven and Hell*, the first twenty-one Proverbs of Hell.',
  },

  test: {
    items: [
      { id: 't06-1', kind: 'spot', work: 'phedre', cut: [PH, 'act-3', 55, 55, { lines: [7, 14] }], ask: 'Who speaks?', speaker: ['Oenone', 'Enone', 'the nurse'], where: 'Act 3, Scene 3' },
      { id: 't06-2', kind: 'fact', q: 'Which country’s history does Pascal compare with Moses, asking which of the two is the more credible?', a: ['China', 'Chinese'], where: '*Pensées*, Section IX, no. 592' },
      { id: 't06-3', kind: 'spot', work: 'blake', cut: [BL, 'marriage', 56, 58], ask: 'What kind of house is this?', speaker: ['a printing-house', 'printing house', 'printing', 'print shop', 'printshop', 'print house', 'print works', 'printer', 'printers', 'printery'], speakerShown: 'A printing-house in Hell', where: 'the third Memorable Fancy' },
      { id: 't06-4', kind: 'fact', q: 'What does Phaedra take from Hippolytus that is later shown to Theseus as proof against him?', a: ['His sword', 'sword'], where: '*Phèdre*, Act 2, Scene 5' },
      { id: 't06-5', kind: 'spot', work: 'pascal', cut: ['pascal', 's12', 162, 163, { from: 'He fought no battles', to: 'which perceive wisdom!' }], ask: 'Who is the man who fought no battles?', speaker: ['Archimedes', 'Archimede', 'Archemedes', 'Archimides'], where: 'Section XII, no. 792' },
      { id: 't06-6', kind: 'fact', q: 'In the lines that end each of Kierkegaard’s four versions of Abraham’s journey, what is a mother about to do to her child?', a: ['Wean him', 'wean', 'weans', 'weaned', 'weaning', 'stop nursing', 'stop breastfeeding', 'stop suckling', 'take him from the breast', 'take the child from the breast'], where: '*Fear and Trembling*, Preparation' },
      { id: 't06-7', kind: 'spot', work: 'baudelaire', cut: ['baudelaire', 'my-heart-laid-bare', 98, 98], ask: 'Who is she?', speaker: ['George Sand', 'Sand', 'Aurore Dupin', 'Dupin', 'Dudevant'], where: '*My Heart Laid Bare* XXIII' },
      { id: 't06-8', kind: 'fact', q: 'Name one of the two prophets who dine with Blake in a Memorable Fancy.', a: ['Isaiah', 'Ezekiel', 'Isaias', 'Ezechiel'], shown: 'Isaiah and Ezekiel', where: '*The Marriage of Heaven and Hell*, the second Memorable Fancy' },
      { id: 't06-9', kind: 'spot', work: 'phedre', cut: [PH, 'act-4', 95, 95, { lines: [29, 36] }], ask: 'Who speaks?', speaker: ['Phaedra', 'Phedre', 'Phedra', 'Phaedre', 'Fedra', 'the Queen'], where: 'Act 4, Scene 6' },
      { id: 't06-10', kind: 'fact', q: 'Whom does Baudelaire call the most perfect type of manly beauty?', a: ['Satan', 'the Devil', 'Lucifer'], where: '*Intimate Journals*, *Rockets* XVI' },
      { id: 't06-11', kind: 'spot', work: 'kierkegaard', cut: ['kierkegaard', 'p4', 19, 19, { from: 'Toward evening he walks home again', to: 'surely has that dish ready for him.' }], ask: 'Who is being described?', speaker: ['The knight of faith', 'man of faith', 'person of faith', 'one who has faith', 'the man who has faith', 'the believer'] },
      { id: 't06-12', kind: 'fact', q: 'Who brings Theseus the news that Hippolytus is dead?', a: ['Theramenes', 'Theramene', 'Theramenus', 'his tutor', 'tutor', 'governor'], where: '*Phèdre*, Act 5, Scene 6' },
      { id: 't06-13', kind: 'spot', work: 'blake', cut: [BL, 'marriage', 85, 85, { from: 'And now hear the reason', to: 'conceited notions.' }], ask: 'Who is he?', speaker: ['Swedenborg', 'Swedenberg', 'Swedenbourg'], where: 'after the fourth Memorable Fancy' },
    ],
  },
};
