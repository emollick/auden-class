// Week 15: tests and missing words.
const C = 'castle';

export default {
  words: {
    id: 'w15',
    cut: [C, 'c09', 5, 5],
    blank: [
      [0, 'daunt'],
      [0, 'weary'],
      [0, 'impregnable'],
      [0, 'cries'],
      [0, 'gaze'],
      [0, 'wheelings'],
      [0, 'incomprehensible'],
      [0, 'visible'],
      [0, 'crumbling'],
    ],
    setting: 'K. is in the taproom of the Herrenhof. Momus, the village secretary, wants to question him and write his answers down in a protocol, which is an official record. The landlady of the Bridge Inn, who is there too, has told K. that the protocol is the only road that can lead him to Klamm, the Castle official he has been trying to reach.',
    cite: 'Kafka, *The Castle*, Chapter 9, in Willa and Edwin Muir’s translation of 1930.',
  },

  test: {
    items: [
      { id: 't15-1', kind: 'fact', q: 'What post does the teacher come to offer K.?', a: ['school janitor', 'janitor', 'caretaker', 'custodian'], where: 'Chapter 7' },
      { id: 't15-2', kind: 'spot', work: 'castle', cut: [C, 'c08', 11, 11, { from: '“You’ll miss him in any case', to: 'talk of this young man.' }], ask: 'For whom is K. waiting?', speaker: ['Klamm'] },
      { id: 't15-3', kind: 'fact', q: 'What is the trade of Barnabas’s father?', a: ['cobbler', 'shoemaker', 'shoe maker', 'bootmaker'], where: 'Chapter 10' },
      { id: 't15-4', kind: 'spot', work: 'castle', cut: [C, 'c13', 2, 2, { from: '“I won’t be able to stand this life here', to: 'the wish to stay here?”' }], ask: 'Who speaks first?', speaker: ['Frieda'] },
      { id: 't15-5', kind: 'spot', work: 'castle', cut: [C, 'c13', 8, 8, { from: 'In spite of this, however, he had come to K.', to: 'he would excel everybody.' }], ask: 'Who has come to K.?', speaker: ['Hans', 'Hans Brunswick', 'the boy Hans', 'Brunswick’s son', 'the boy'], speakerShown: 'Hans Brunswick' },
      { id: 't15-6', kind: 'fact', q: 'Who lives in the village for love of Gisa, the lady teacher?', a: ['Schwarzer'], where: 'Chapter 14' },
      { id: 't15-7', kind: 'spot', work: 'castle', cut: [C, 'c15', 1, 1, { from: 'He’s admitted into certain rooms', to: 'were a mere intruder?' }], ask: 'Who is he?', speaker: ['Barnabas'] },
      { id: 't15-8', kind: 'fact', q: 'Which official sent a letter addressed to the girl with the garnet necklace?', a: ['Sortini'], where: 'Chapter 15: Amalia’s Secret' },
      { id: 't15-9', kind: 'spot', work: 'castle', cut: [C, 'c15-2', 0, 0, { from: 'I bowed before her triumph', to: 'literally to bow before her.' }], ask: 'Who is she?', speaker: ['Amalia'] },
      { id: 't15-10', kind: 'fact', q: 'What does the Captain of the Fire Brigade ask Olga’s father to give back?', a: ['his diploma', 'diploma', 'certificate'], where: 'Chapter 15: Amalia’s Punishment' },
      { id: 't15-11', kind: 'spot', work: 'castle', cut: [C, 'c18', 1, 1, { from: 'As he stood there, his hair rumpled', to: 'getting him back in bed again.' }], ask: 'Who is he?', speaker: ['Jeremiah', 'Jeremias'] },
      { id: 't15-12', kind: 'fact', q: 'Which official sent the two assistants to K. with orders to cheer him up?', a: ['Galater'], where: 'Chapter 16' },
    ],
  },
};
