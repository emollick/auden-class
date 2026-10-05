// Week 13: tests and missing words.
// Melville, Moby-Dick: Chapter 87 to the Epilogue.

const M = 'moby-dick';

export default {
  words: {
    id: 'w13',
    cut: [M, 'c114', 1, 2],
    blank: [
      [0, 'purr'],
      [0, 'skin'],
      [0, 'pants'],
      [0, 'velvet'],
      [0, 'fang'],
      [1, 'filial'],
      [1, 'prairie'],
      [1, 'ears'],
      [1, 'wade'],
    ],
    setting: 'Ishmael speaks. The Pequod is on the Japanese cruising ground in mild weather. The men spend whole days in the boats, and between chases they sit and wait on a calm sea.',
    cite: 'Melville, *Moby-Dick*, Chapter 114, “The Gilder.”',
  },

  test: {
    items: [
      { id: 't13-1', kind: 'spot', work: M, cut: [M, 'c093', 12, 12, { from: 'He saw God’s foot upon the treadle of the loom', to: 'indifferent as his God.' }], ask: 'Who is he?', speaker: ['Pip', 'Pippin'] },
      { id: 't13-2', kind: 'fact', q: 'What does Stubb dig out of one of the dead whales that the French ship casts loose?', a: ['Ambergris', 'ambergrease', 'ambergriese'], where: 'Chapter 91: The Pequod Meets The Rose-Bud' },
      { id: 't13-3', kind: 'spot', work: M, cut: [M, 'c100', 36, 36, { from: 'No more White Whales for me', to: 'don’t you think so, Captain?' }], ask: 'Who speaks?', speaker: ['Captain Boomer', 'Boomer', 'the captain of the Samuel Enderby', 'Samuel Enderby', 'Enderby', 'the English captain', 'one-armed captain'], speakerShown: 'Captain Boomer of the Samuel Enderby' },
      { id: 't13-4', kind: 'fact', q: 'In what does Ahab temper the barbs of the harpoon forged for the White Whale?', a: ['Blood', 'the blood of the harpooneers'], shown: 'The blood of the three harpooneers', where: 'Chapter 113: The Forge' },
      { id: 't13-5', kind: 'spot', work: M, cut: [M, 'c107', 4, 4, { from: 'He was a pure manipulator', to: 'nail-filers, countersinkers.' }], ask: 'Who is being described?', speaker: ['The carpenter', 'carpenter'] },
      { id: 't13-6', kind: 'fact', q: 'What instrument does Ahab throw to the deck and trample?', a: ['The quadrant', 'quadrant'], where: 'Chapter 118: The Quadrant' },
      { id: 't13-7', kind: 'spot', work: M, cut: [M, 'c115', 4, 4, { from: 'As this glad ship of good luck', to: 'the clenched hands of the crew.' }], ask: 'What ship is this?', speaker: ['The Bachelor', 'Bachelor'] },
      { id: 't13-8', kind: 'fact', q: 'What kind of bird carries off Ahab’s hat?', a: ['A sea-hawk', 'hawk', 'seahawk'], where: 'Chapter 130: The Hat' },
      { id: 't13-9', kind: 'spot', work: M, cut: [M, 'c123', 7, 7, { from: 'Say he were pinioned even', to: 'tindering sheets and skin together?' }], ask: 'Who speaks?', speaker: ['Starbuck'] },
      { id: 't13-10', kind: 'fact', q: 'Who is missing when the crews are mustered after the second day of the chase?', a: ['Fedallah', 'the Parsee', 'Parsee'], where: 'Chapter 134: The Chase—Second Day' },
      { id: 't13-11', kind: 'spot', work: M, cut: [M, 'c128', 14, 14], ask: 'Who speaks?', speaker: ['The captain of the Rachel', 'Captain Gardiner', 'Gardiner', 'Rachel'], speakerShown: 'Captain Gardiner of the Rachel' },
      { id: 't13-12', kind: 'fact', q: 'What catches Ahab around the neck and pulls him out of his boat?', a: ['The whale-line', 'line', 'rope', 'hemp'], where: 'Chapter 135: The Chase.—Third Day' },
      { id: 't13-13', kind: 'spot', work: M, cut: [M, 'c132', 16, 16, { from: 'Is it I, God, or who', to: 'Fate is the handspike.' }], ask: 'Who speaks?', speaker: ['Ahab', 'Captain Ahab'] },
      { id: 't13-14', kind: 'fact', q: 'What keeps Ishmael afloat until a ship picks him up?', a: ['Queequeg’s coffin', 'coffin', 'life-buoy', 'lifebuoy'], shown: 'Queequeg’s coffin, made into a life-buoy', where: 'Epilogue' },
    ],
  },
};
