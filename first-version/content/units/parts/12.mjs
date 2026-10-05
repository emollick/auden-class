// Week 12: tests and missing words.
// Melville, Moby-Dick: Chapters 42 to 86.

const M = 'moby-dick';

export default {
  words: {
    id: 'w12',
    cut: [M, 'c042', 30, 30, { to: 'wraps all the prospect around him.' }],
    blank: [
      [0, 'heartless'],
      [0, 'stabs'],
      [0, 'annihilation'],
      [0, 'absence'],
      [0, 'dumb'],
      [0, 'atheism'],
      [0, 'harlot'],
      [0, 'leper'],
      [0, 'infidel'],
      [0, 'shroud'],
    ],
    setting: 'Ishmael speaks. He has spent a chapter asking why the whiteness of the whale appalls him, though white is the color of so many good things. Here he gives his last guesses.',
    cite: 'Melville, *Moby-Dick*, Chapter 42, “The Whiteness of the Whale.”',
  },

  test: {
    items: [
      { id: 't12-1', kind: 'spot', work: M, cut: [M, 'c047', 1, 1, { from: 'This warp seemed necessity', to: 'all interweavingly working together.' }], ask: 'What are the two men weaving?', speaker: ['A sword-mat', 'sword mat', 'mat'] },
      { id: 't12-2', kind: 'fact', q: 'What does Ishmael draw up after his boat is swamped at the first lowering?', a: ['His will', 'will', 'testament'], where: 'Chapter 49: The Hyena' },
      { id: 't12-3', kind: 'spot', work: M, cut: [M, 'c048', 0, 0, { from: 'The figure that now stood by its bows', to: 'coiled round and round upon his head.' }], ask: 'Who is being described?', speaker: ['Fedallah', 'the Parsee', 'Parsee'] },
      { id: 't12-4', kind: 'fact', q: 'What is seen far ahead of the ship on moonlit nights, again and again, and never overtaken?', a: ['A silvery spout', 'spout', 'spirit-spout', 'jet', 'spouting'], shown: 'A silvery spout, the Spirit-Spout', where: 'Chapter 51: The Spirit-Spout' },
      { id: 't12-5', kind: 'spot', work: M, cut: [M, 'c052', 1, 1, { from: 'As if the waves had been fullers', to: 'nearly four years of cruising.' }], ask: 'What ship is this?', speaker: ['The Albatross', 'Albatross', 'the Goney', 'Goney'], speakerShown: 'The Albatross, also called the Goney' },
      { id: 't12-6', kind: 'fact', q: 'In the story of the Town-Ho, which man does Moby Dick carry down in his jaws?', a: ['Radney'], shown: 'Radney, the mate', where: 'Chapter 54: The Town-Ho’s Story' },
      { id: 't12-7', kind: 'spot', work: M, cut: [M, 'c059', 5, 5, { from: 'A vast pulpy mass', to: 'chance-like apparition of life.' }], ask: 'What is being described?', speaker: ['The great squid', 'squid', 'kraken', 'cuttlefish', 'cuttle-fish'] },
      { id: 't12-8', kind: 'fact', q: 'What name does the mad prophet aboard the Jeroboam give himself?', a: ['Gabriel', 'the archangel Gabriel'], shown: 'The archangel Gabriel', where: 'Chapter 71: The Jeroboam’s Story' },
      { id: 't12-9', kind: 'spot', work: M, cut: [M, 'c064', 23, 23, { from: 'Your woraciousness, fellow-critters', to: 'de shark well goberned.' }], ask: 'Who speaks?', speaker: ['Fleece', 'the cook', 'cook'], speakerShown: 'Fleece, the cook' },
      { id: 't12-10', kind: 'fact', q: 'What is the name of the rope that ties Ishmael to the harpooneer at work on the whale’s back?', a: ['The monkey-rope', 'monkey rope', 'monkeyrope'], where: 'Chapter 72: The Monkey-Rope' },
      { id: 't12-11', kind: 'spot', work: M, cut: [M, 'c070', 6, 6, { from: 'Of all divers, thou hast dived the deepest.', to: 'to lay them down.' }], ask: 'Who speaks?', speaker: ['Ahab', 'Captain Ahab'] },
      { id: 't12-12', kind: 'fact', q: 'What kind of whale is killed so that its head can hang opposite the head of the sperm whale?', a: ['A right whale', 'right whale'], where: 'Chapter 73: Stubb and Flask kill a Right Whale; and Then Have a Talk over Him' },
      { id: 't12-13', kind: 'spot', work: M, cut: [M, 'c084', 6, 6, { from: '’Tis July’s immortal Fourth', to: 'quaff the living stuff.' }], ask: 'Who speaks?', speaker: ['Stubb'] },
      { id: 't12-14', kind: 'fact', q: 'What does the captain of the Jungfrau come aboard the Pequod to beg?', a: ['Oil', 'lamp oil', 'sperm oil'], where: 'Chapter 81: The Pequod Meets The Virgin' },
    ],
  },
};
