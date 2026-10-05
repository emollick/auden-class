// Week 02: tests and missing words.

const L = 'dante-longfellow';
const AG = 'agamemnon';
const AN = 'antigone';
const HOR = 'horace';

export default {
  words: {
    id: 'w02',
    cut: [HOR, 'o2-03', 0, 6],
    blank: [
      [0, 'equal'], [2, 'proud'], [4, 'gloom'], [9, 'hospitable'], [10, 'panting'],
      [13, 'brief'], [14, 'loom'], [19, 'reckless'], [23, 'pities'], [25, 'Shakes'],
    ],
    setting: 'Horace writes to Dellius, a rich man who owns woods and a villa on the Tiber.',
    cite: 'Horace, *Odes* II.3, in Conington’s translation of 1863.',
  },
  test: {
    items: [
      // Dante, Paradiso.
      { id: 't02-1', kind: 'spot', work: 'dante', cut: [L, 'par-03', 34, 35], ask: 'Who speaks?', speaker: ['Piccarda', 'Piccarda Donati'] },
      { id: 't02-2', kind: 'fact', q: 'Who tells the life of Saint Francis in the heaven of the Sun?', a: ['Thomas Aquinas', 'Aquinas', 'Thomas', 'Thomas of Aquino', 'Thomas of Aquinum'], where: '*Paradiso* XI; the speaker names himself in X' },
      { id: 't02-3', kind: 'spot', work: 'dante', cut: [L, 'par-17', 18, 19], ask: 'Who speaks?', speaker: ['Cacciaguida', 'great-great-grandfather', 'ancestor'] },
      { id: 't02-4', kind: 'fact', q: 'What bird do the souls of the just rulers form in the heaven of Jupiter?', a: ['An eagle', 'eagle'], where: '*Paradiso* XVIII' },
      { id: 't02-5', kind: 'spot', work: 'dante', cut: [L, 'par-31', 19, 20], ask: 'Who is being described?', speaker: ['Bernard', 'Bernard of Clairvaux'] },
      { id: 't02-6', kind: 'fact', q: 'Which apostle examines Dante on faith?', a: ['Peter', 'Simon Peter'], where: '*Paradiso* XXIV; he is named in XXV' },

      // Aeschylus, Agamemnon.
      { id: 't02-7', kind: 'spot', work: 'agamemnon', ifChoice: ['greek', 'agamemnon'], cut: [AG, 'p4', 12, 12, { lines: [5, 13] }], ask: 'Who speaks?', speaker: ['Agamemnon'] },
      { id: 't02-8', kind: 'fact', ifChoice: ['greek', 'agamemnon'], q: 'Which king was lost from the fleet in the storm on the way home from Troy?', a: ['Menelaus', 'Menelaos'], where: '*Agamemnon*, 3. The Herald from Troy' },
      { id: 't02-9', kind: 'spot', work: 'agamemnon', ifChoice: ['greek', 'agamemnon'], cut: [AG, 'p6', 79, 79, { lines: [0, 5] }], ask: 'Who speaks?', speaker: ['Aegisthus', 'Aegisthos', 'Aigisthos', 'Aigisthus', 'Egisthus'] },
      { id: 't02-10', kind: 'fact', ifChoice: ['greek', 'agamemnon'], q: 'Which god gave Cassandra the gift of prophecy?', a: ['Apollo', 'Phoebus', 'Loxias'], where: '*Agamemnon*, 5. Cassandra' },

      // Sophocles, Antigone.
      { id: 't02-11', kind: 'spot', work: 'antigone', ifChoice: ['greek', 'antigone'], cut: [AN, 'p3', 36, 36, { lines: [0, 7] }], ask: 'Who speaks?', speaker: ['Antigone'] },
      { id: 't02-12', kind: 'fact', ifChoice: ['greek', 'antigone'], q: 'Which of the two dead brothers does Creon forbid the city to bury?', a: ['Polyneices', 'Polynices', 'Polyneikes', 'Polynikes'], where: '*Antigone*, 1. Antigone and Ismene; the Elders of Thebes' },
      { id: 't02-13', kind: 'spot', work: 'antigone', ifChoice: ['greek', 'antigone'], cut: [AN, 'p4', 10, 10, { lines: [23, 30] }], ask: 'Who speaks?', speaker: ['Haemon', 'Haimon', 'Hemon'] },
      { id: 't02-14', kind: 'fact', ifChoice: ['greek', 'antigone'], q: 'What is the name of Creon’s wife, who kills herself at the end?', a: ['Eurydice', 'Eurydike'], where: '*Antigone*, 5. Teiresias; the Messenger; Creon’s lament' },

      // Horace, Odes.
      { id: 't02-15', kind: 'spot', work: 'horace', cut: [HOR, 'o1-24', 3, 4], ask: 'To whom is the ode addressed?', speaker: ['Virgil', 'Vergil', 'Virgilius', 'Vergilius'] },
      { id: 't02-16', kind: 'fact', q: 'What fell and nearly killed Horace on his own farm?', a: ['A tree', 'tree', 'a falling tree', 'a tree trunk', 'trunk'], where: '*Odes*, Book II, II.13 Ille et nefasto' },
      { id: 't02-17', kind: 'spot', work: 'horace', cut: [HOR, 'o3-05', 12, 13], ask: 'Who is he?', speaker: ['Regulus', 'Marcus Atilius Regulus', 'Atilius Regulus'] },
    ],
  },
};
