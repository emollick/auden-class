// Week 08: tests and missing words.
// Dostoevsky, The Brothers Karamazov, Books IV to VII (Garnett's translation).

const K = 'karamazov';

export default {
  words: {
    id: 'w08',
    cut: [K, 'b06c03', 30, 30, { from: 'Brothers, have no fear', to: 'Woe to him who offends a child!' }],
    blank: [
      [0, 'sand'],
      [0, 'leaf'],
      [0, 'mystery'],
      [0, 'untroubled'],
      [0, 'harass'],
      [0, 'pride'],
      [0, 'defile'],
      [0, 'foulness'],
      [0, 'purify'],
      [0, 'offends'],
    ],
    setting: 'Father Zossima, the elder of the monastery, is teaching his monks. Alyosha wrote the talks down after the elder died.',
    cite: 'Dostoevsky, *The Brothers Karamazov*, Book VI, Chapter 3, in Constance Garnett’s translation of 1912.',
  },

  test: {
    items: [
      { id: 't08-1', kind: 'spot', work: 'karamazov', cut: [K, 'b04c01', 34, 34, { from: 'I tell you I can see', to: 'It’s a year since I have been there.' }], ask: 'Who speaks?', speaker: ['Father Ferapont', 'Ferapont'] },
      { id: 't08-2', kind: 'fact', q: 'What part of Alyosha’s body does the schoolboy who threw stones bite?', a: ['finger', 'his finger', 'middle finger', 'the middle finger of his left hand'], shown: 'His finger', where: 'Part II, Book IV: Lacerations, Chapter 3: A Meeting with the Schoolboys' },
      { id: 't08-3', kind: 'spot', work: 'karamazov', cut: [K, 'b04c07', 42, 43], ask: 'Who speaks?', speaker: ['Captain Snegiryov', 'Snegiryov', 'the captain', 'Snegiriov', 'Snegirev', 'Snegiryev', 'Ilusha’s father', 'Ilyusha’s father'] },
      { id: 't08-4', kind: 'fact', q: 'To whom does Alyosha become engaged?', a: ['Lise', 'Liza', 'Lisa', 'Lise Hohlakov', 'Hohlakov’s daughter'], where: 'Part II, Book V: Pro and Contra, Chapter 1: The Engagement' },
      { id: 't08-5', kind: 'spot', work: 'karamazov', cut: [K, 'b05c04', 22, 22, { from: 'I don’t want harmony. From love', to: 'And that I am doing.' }], ask: 'Who speaks?', speaker: ['Ivan', 'Ivan Karamazov', 'Ivan Fyodorovitch'] },
      { id: 't08-6', kind: 'fact', q: 'What instrument does Smerdyakov play as he sings to Marya Kondratyevna?', a: ['guitar', 'a guitar', 'the guitar'], shown: 'The guitar', where: 'Part II, Book V: Pro and Contra, Chapter 2: Smerdyakov with a Guitar' },
      { id: 't08-7', kind: 'spot', work: 'karamazov', cut: [K, 'b05c05', 20, 20, { from: 'We have corrected Thy work', to: 'for I love Thee not.' }], ask: 'Who speaks?', speaker: ['The Grand Inquisitor', 'Grand Inquisitor', 'Inquisitor', 'the cardinal', 'the old cardinal'], speakerShown: 'The Grand Inquisitor, in Ivan’s poem' },
      { id: 't08-8', kind: 'fact', q: 'Down what steps does Smerdyakov fall in a fit?', a: ['cellar', 'the cellar steps', 'cellar stairs', 'the steps to the cellar'], shown: 'The cellar steps', where: 'Part II, Book V: Pro and Contra, Chapter 7: “It’s Always Worth While Speaking to a Clever Man”' },
      { id: 't08-9', kind: 'spot', work: 'karamazov', cut: [K, 'b06c02', 25, 28, { from: 'We were placed twelve paces apart', to: 'whom you hold dearest in the world.”' }], ask: 'Who speaks?', speaker: ['Father Zossima', 'Zossima', 'Zosima', 'the elder', 'the starets'] },
      { id: 't08-10', kind: 'fact', q: 'From what creatures at his window does the dying Markel ask forgiveness?', a: ['birds', 'the birds', 'birds of heaven'], shown: 'The birds', where: 'Part II, Book VI: The Russian Monk, Chapter 1: Father Zossima and His Visitors' },
      { id: 't08-11', kind: 'spot', work: 'karamazov', cut: [K, 'b07c03', 81, 81, { from: 'The angel ran to the woman', to: 'So the angel wept and went away.' }], ask: 'Who tells this story?', speaker: ['Grushenka', 'Agrafena Alexandrovna', 'Agrafena', 'Grusha'] },
      { id: 't08-12', kind: 'fact', q: 'How many years after committing murder does the mysterious visitor confess?', a: ['fourteen', '14'], shown: 'Fourteen', where: 'Part II, Book VI: The Russian Monk, Chapter 2: The Duel' },
      { id: 't08-13', kind: 'spot', work: 'karamazov', cut: [K, 'b07c04', 27, 27, { from: 'He longed to forgive every one', to: 'at the very moment of his ecstasy.' }], ask: 'Who is being described?', speaker: ['Alyosha', 'Alexey', 'Alexei', 'Alyosha Karamazov', 'Alexey Fyodorovitch', 'Aliosha'] },
      { id: 't08-14', kind: 'fact', q: 'How many rubles is Rakitin promised for bringing Alyosha on a visit?', a: ['twenty-five', '25'], shown: 'Twenty-five', where: 'Part III, Book VII: Alyosha, Chapter 3: An Onion' },
    ],
  },
};
