// Week 04: tests and missing words.
const H4 = 'henry-iv-2';
const OTH = 'othello';
const HAM = 'hamlet';

export default {
  words: {
    id: 'w04',
    cut: [H4, 'a3s1', 5, 5],
    blank: [
      [2, 'frighted'], [4, 'steep'], [5, 'smoky'], [8, 'perfumed'], [12, 'loathsome'],
      [14, 'giddy'], [18, 'ruffian'], [20, 'slippery'], [22, 'partial'], [27, 'crown'],
    ],
    setting: 'King Henry IV speaks, alone, in his palace at Westminster. It is past one in the morning, he is ill, and the north is in arms against him.',
    cite: 'Shakespeare, *Henry IV, Part 2*, Act 3, Scene 1.',
  },
  test: {
    items: [
      { id: 't04-1', kind: 'spot', work: 'henry-iv-2', cut: [H4, 'a3s2', 262, 262, { from: 'I do remember him at Clement', to: 'the whores called him mandrake.' }], ask: 'Who is being described?', speaker: ['Shallow', 'Justice Shallow', 'Robert Shallow', 'Master Shallow'] },
      { id: 't04-2', kind: 'fact', q: 'To what country does Northumberland withdraw instead of joining the Archbishop?', a: ['Scotland'], where: '*Henry IV, Part 2*, Act 2, Scene 3' },
      { id: 't04-3', kind: 'spot', work: 'henry-iv-2', cut: [H4, 'a5s2', 61, 61, { lines: [16, 19] }], ask: 'To whom is this said?', speaker: ['The Lord Chief Justice', 'Lord Chief Justice', 'Chief Justice', 'Lord Justice'] },
      { id: 't04-4', kind: 'fact', q: 'What is the name of the chamber where King Henry asks to be carried to die?', a: ['Jerusalem', 'the Jerusalem Chamber'], where: '*Henry IV, Part 2*, Act 4, Scene 5' },
      { id: 't04-5', kind: 'spot', work: 'othello', cut: [OTH, 'a1s3', 163, 163, { from: 'Virtue! a fig!', to: 'lies in our wills.' }], ask: 'To whom is this said?', speaker: ['Roderigo', 'Rodrigo'] },
      { id: 't04-6', kind: 'fact', q: 'Whom does Cassio wound in the brawl on the night watch?', a: ['Montano'], where: '*Othello*, Act 2, Scene 3' },
      { id: 't04-7', kind: 'spot', work: 'othello', cut: [OTH, 'a4s2', 145, 145], ask: 'Who speaks?', speaker: ['Emilia', 'Iago’s wife'] },
      { id: 't04-8', kind: 'fact', q: 'What fruit is Desdemona’s handkerchief spotted with?', a: ['Strawberries', 'strawberry'], where: '*Othello*, Act 3, Scene 3' },
      { id: 't04-9', kind: 'spot', work: 'othello', cut: [OTH, 'a5s2', 317, 317, { lines: [0, 9] }], ask: 'Who speaks?', speaker: ['Othello', 'the Moor'] },
      { id: 't04-10', kind: 'fact', q: 'At which university has Hamlet been a student?', a: ['Wittenberg', 'Wittenburg', 'Wittemberg'], where: '*Hamlet*, Act 1, Scene 2' },
      { id: 't04-11', kind: 'spot', work: 'hamlet', cut: [HAM, 'a2s1', 39, 39, { lines: [8, 11] }], ask: 'Who speaks?', speaker: ['Polonius'] },
      { id: 't04-12', kind: 'fact', q: 'What instrument does Hamlet ask Guildenstern to play?', a: ['A recorder', 'recorder', 'recorders', 'a pipe', 'pipe'], where: '*Hamlet*, Act 3, Scene 2' },
      { id: 't04-13', kind: 'spot', work: 'hamlet', cut: [HAM, 'a3s3', 19, 19, { lines: [29, 36] }], ask: 'Who speaks?', speaker: ['Claudius', 'the King', 'King Claudius', 'Hamlet’s uncle'] },
      { id: 't04-14', kind: 'fact', q: 'By whom is Hamlet taken prisoner on the voyage to England?', a: ['Pirates', 'a pirate', 'pirate'], where: '*Hamlet*, Act 4, Scene 6' },
      { id: 't04-15', kind: 'spot', work: 'hamlet', cut: [HAM, 'a5s2', 161, 161], ask: 'To whom is this said?', speaker: ['Horatio'] },
    ],
  },
};
