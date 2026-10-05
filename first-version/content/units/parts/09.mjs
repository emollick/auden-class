// Week 09: tests and missing words.
// Dostoevsky, The Brothers Karamazov, Books VIII to X (Garnett's translation).

const K = 'karamazov';

export default {
  words: {
    id: 'w09',
    cut: [K, 'b08c04', 3, 4, { from: '“And naught but the whispering silence,”', to: 'fell on the front part of the bush.' }],
    blank: [
      [0, 'whispering'],
      [0, 'grass'],
      [0, 'creeping'],
      [0, 'lighted'],
      [0, 'hid'],
      [0, 'breath'],
      [0, 'sneeze'],
      [1, 'beating'],
      [1, 'throbbing'],
      [1, 'shadow'],
    ],
    setting: 'Mitya has climbed the fence into his father’s garden at night. He thinks that Grushenka, the woman both of them want, may be inside with his father.',
    cite: 'Dostoevsky, *The Brothers Karamazov*, Book VIII, Chapter 4, in Constance Garnett’s translation of 1912.',
  },

  test: {
    items: [
      { id: 't09-1', kind: 'spot', work: 'karamazov', cut: [K, 'b08c03', 35, 35, { from: 'I have been watching you for the last month.', to: 'that’s a man who would find gold.' }], ask: 'Who speaks?', speaker: ['Madame Hohlakov', 'Hohlakov', 'Mme Hohlakov', 'Khokhlakov', 'Khokhlakova', 'Hohlakova', 'Lise’s mother'] },
      { id: 't09-2', kind: 'fact', q: 'Which old merchant sends Mitya on a useless journey to the trader Lyagavy?', a: ['Samsonov', 'Kuzma Samsonov', 'Kuzma Kuzmitch', 'Kuzma Kuzmich'], where: 'Part III, Book VIII: Mitya, Chapter 1: Kuzma Samsonov' },
      { id: 't09-3', kind: 'spot', work: 'karamazov', cut: [K, 'b08c04', 25, 26], ask: 'Who is the old man?', speaker: ['Grigory', 'Grigori', 'Grigoriy', 'Gregory', 'Grigory Vassilyevitch'], speakerShown: 'Grigory, the old servant' },
      { id: 't09-4', kind: 'fact', q: 'What object does Mitya snatch from the table as he runs out past Fenya?', a: ['pestle', 'a brass pestle', 'the pestle', 'brass pestle'], shown: 'A brass pestle', where: 'Part III, Book VIII: Mitya, Chapter 3: Gold-Mines' },
      { id: 't09-5', kind: 'spot', work: 'karamazov', cut: [K, 'b08c08', 85, 85, { from: 'I want to play to-day, good people', to: 'Wicked as I’ve been, I want to pray.' }], ask: 'Who speaks?', speaker: ['Grushenka', 'Agrafena Alexandrovna', 'Agrafena', 'Grusha'] },
      { id: 't09-6', kind: 'fact', q: 'To what village does Mitya drive through the night behind Andrey’s three horses?', a: ['Mokroe', 'Mokroye', 'Mokroie'], where: 'Part III, Book VIII: Mitya, Chapter 6: “I Am Coming, Too!”' },
      { id: 't09-7', kind: 'spot', work: 'karamazov', cut: [K, 'b09c05', 44, 44, { from: 'He’s not a coward, he’s the epitome', to: 'a child of eight could thrash him.' }], ask: 'Who is being described?', speaker: ['Smerdyakov', 'Smerdiakov', 'Pavel Fyodorovitch', 'Pavel Smerdyakov', 'Pavel', 'the valet', 'the cook', 'the lackey'] },
      { id: 't09-8', kind: 'fact', q: 'How many rubles does Mitya say he had carried sewn up in a rag around his neck?', a: ['fifteen hundred', '1500', '1,500', 'one thousand five hundred', 'a thousand five hundred'], shown: 'Fifteen hundred', where: 'Part III, Book IX: The Preliminary Investigation, Chapter 7: Mitya’s Great Secret. Received with Hisses' },
      { id: 't09-9', kind: 'spot', work: 'karamazov', cut: [K, 'b09c09', 5, 5, { from: 'I understand now that such men as I need a blow', to: 'and perhaps I really might have killed him.' }], ask: 'Who speaks?', speaker: ['Mitya', 'Dmitri', 'Dmitri Karamazov', 'Dmitri Fyodorovitch', 'Dmitry', 'Dimitri', 'Mitia'] },
      { id: 't09-10', kind: 'fact', q: 'What does Mitya find under his head when he wakes from his dream?', a: ['pillow', 'a pillow', 'cushion'], shown: 'A pillow', where: 'Part III, Book IX: The Preliminary Investigation, Chapter 8: The Evidence of the Witnesses. The Babe' },
      { id: 't09-11', kind: 'spot', work: 'karamazov', cut: [K, 'b10c06', 21, 21], ask: 'Who speaks?', speaker: ['Kolya', 'Kolya Krassotkin', 'Krassotkin', 'Krasotkin', 'Nikolay Krassotkin'] },
      { id: 't09-12', kind: 'fact', q: 'What passes over a boy who lies flat and still to win a bet of two rubles?', a: ['train', 'a train', 'the train', 'railway train'], shown: 'A train', where: 'Part IV, Book X: The Boys, Chapter 1: Kolya Krassotkin' },
      { id: 't09-13', kind: 'spot', work: 'karamazov', cut: [K, 'b10c07', 40, 40], ask: 'Who speaks?', speaker: ['Captain Snegiryov', 'Snegiryov', 'the captain', 'Snegiriov', 'Snegirev', 'Snegiryev', 'Ilusha’s father', 'Ilyusha’s father'] },
      { id: 't09-14', kind: 'fact', q: 'What had the sick boy once hidden in a piece of bread that he threw to a dog?', a: ['pin', 'a pin'], shown: 'A pin', where: 'Part IV, Book X: The Boys, Chapter 4: The Lost Dog' },
    ],
  },
};
