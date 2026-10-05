// Week 11: tests and missing words.
// Melville, Moby-Dick: the Etymology to Chapter 41.

const M = 'moby-dick';

export default {
  words: {
    id: 'w11',
    cut: [M, 'c023', 1, 2, { from: 'Let me only say' }],
    blank: [
      [0, 'pitiful'],
      [0, 'jeopardy'],
      [0, 'shudder'],
      [0, 'crowds'],
      [0, 'peril'],
      [0, 'foe'],
      [1, 'intrepid'],
      [1, 'conspire'],
      [1, 'slavish'],
    ],
    setting: 'The narrator, Ishmael, speaks. The Pequod has left Nantucket on a winter night, and Bulkington, a sailor who has just landed from a voyage of four years, is at her helm.',
    cite: 'Melville, *Moby-Dick*, Chapter 23, “The Lee Shore.”',
  },

  test: {
    items: [
      { id: 't11-1', kind: 'spot', work: M, cut: [M, 'c009', 25, 25, { from: 'Delight is to him—a far', to: 'only a patriot to heaven.' }], ask: 'Who speaks?', speaker: ['Father Mapple', 'Mapple'] },
      { id: 't11-2', kind: 'fact', q: 'Who is the landlord of the Spouter-Inn?', a: ['Peter Coffin', 'Coffin'], where: 'Chapter 3: The Spouter-Inn' },
      { id: 't11-3', kind: 'spot', work: M, cut: [M, 'c010', 2, 2, { from: 'Savage though he was', to: 'never had had a creditor.' }], ask: 'Who is being described?', speaker: ['Queequeg', 'Quequeg', 'Queeqeg', 'Queequeq'] },
      { id: 't11-4', kind: 'fact', q: 'What dish is served at every meal at the Try Pots?', a: ['Chowder'], where: 'Chapter 15: Chowder' },
      { id: 't11-5', kind: 'spot', work: M, cut: [M, 'c016', 78, 78, { from: 'He’s a grand, ungodly, god-like man', to: 'stranger foes than whales.' }], ask: 'Who speaks?', speaker: ['Captain Peleg', 'Peleg'] },
      { id: 't11-6', kind: 'fact', q: 'What lay, or share of the profits, is Ishmael given when he signs for the voyage?', a: ['The three hundredth', 'three hundredth', '300th', '300'], where: 'Chapter 16: The Ship' },
      { id: 't11-7', kind: 'spot', work: M, cut: [M, 'c019', 26, 26, { from: 'Ye’ve shipped, have ye?', to: 'I’m sorry I stopped ye.' }], ask: 'Who speaks?', speaker: ['Elijah'] },
      { id: 't11-8', kind: 'fact', q: 'On what day of the year does the Pequod sail from Nantucket?', a: ['Christmas Day', 'Christmas', 'December 25', 'December 25th', '25 December', '25th December', 'Dec 25'], where: 'Chapter 22: Merry Christmas' },
      { id: 't11-9', kind: 'spot', work: M, cut: [M, 'c027', 0, 0, { from: 'Good-humored, easy, and careless', to: 'the most exasperated monster.' }], ask: 'Who is being described?', speaker: ['Stubb'] },
      { id: 't11-10', kind: 'fact', q: 'What does Ahab throw into the sea when it no longer soothes him?', a: ['His pipe', 'pipe'], where: 'Chapter 30: The Pipe' },
      { id: 't11-11', kind: 'spot', work: M, cut: [M, 'c036', 39, 39, { from: 'All visible objects, man', to: 'I will wreak that hate upon him.' }], ask: 'Who speaks?', speaker: ['Ahab', 'Captain Ahab'] },
      { id: 't11-12', kind: 'fact', q: 'Which of the three mates is the last to sit down at the cabin table and the first to leave it?', a: ['Flask', 'King-Post', 'Kingpost'], where: 'Chapter 34: The Cabin-Table' },
      { id: 't11-13', kind: 'spot', work: M, cut: [M, 'c038', 1, 1, { from: 'My soul is more than matched', to: 'to hate with touch of pity!' }], ask: 'Who speaks?', speaker: ['Starbuck'] },
      { id: 't11-14', kind: 'fact', q: 'What is nailed to the mainmast as a reward for the man who first sights the White Whale?', a: ['A gold coin', 'gold', 'coin', 'doubloon', 'sixteen dollar piece', '16 dollar piece'], where: 'Chapter 36: The Quarter-Deck' },
    ],
  },
};
