// Week 05: tests and missing words.
const TEM = 'tempest';
const VOL = 'volpone';
const PAS = 'pascal';

export default {
  words: {
    id: 'w05',
    cut: [VOL, 'a1s1', 3, 5],
    blank: [
      [1, 'shrine'], [3, 'teeming'], [4, 'Peep'], [6, 'hoards'], [8, 'chaos'],
      [10, 'kiss'], [12, 'sacred'], [17, 'dream'], [21, 'dumb'], [23, 'price'],
    ],
    setting: 'Volpone, a rich Venetian with no heir, speaks at the opening of the play. He has just risen, and at his order his servant Mosca uncovers his gold.',
    cite: 'Ben Jonson, *Volpone*, Act 1, Scene 1.',
  },
  test: {
    items: [
      { id: 't05-1', kind: 'spot', work: 'tempest', cut: [TEM, 'a2s1', 243, 243, { lines: [4, 7] }], ask: 'To whom is this said?', speaker: ['Sebastian'] },
      { id: 't05-2', kind: 'fact', q: 'When Prospero was put to sea, who saw to it that he had books from his library with him?', a: ['Gonzalo'], where: '*The Tempest*, Act 1, Scene 2' },
      { id: 't05-3', kind: 'spot', work: 'tempest', cut: [TEM, 'a3s3', 51, 51], ask: 'Who speaks?', speaker: ['Ariel', 'the harpy'] },
      { id: 't05-4', kind: 'fact', q: 'What game are Ferdinand and Miranda playing when Prospero shows them to the King?', a: ['Chess'], where: '*The Tempest*, Act 5, Scene 1' },
      { id: 't05-5', kind: 'spot', work: 'tempest', cut: [TEM, 'a4s1', 104, 104], ask: 'Who is being described?', speaker: ['Caliban'] },
      { id: 't05-6', kind: 'fact', q: 'What name does Volpone take when he plays the mountebank below Celia’s window?', a: ['Scoto of Mantua', 'Scoto', 'Scoto Mantuano'], where: '*Volpone*, Act 2, Scene 1' },
      { id: 't05-7', kind: 'spot', work: 'volpone', cut: [VOL, 'a3s6', 19, 19], ask: 'Who speaks?', speaker: ['Corvino', 'Celia’s husband'] },
      { id: 't05-8', kind: 'fact', q: 'In what does Sir Politick Would-be hide when he thinks he is to be arrested?', a: ['A tortoise shell', 'tortoise shell', 'a tortoise', 'tortoise', 'shell'], where: '*Volpone*, Act 5, Scene 2' },
      { id: 't05-9', kind: 'spot', work: 'volpone', cut: [VOL, 'a5s1', 248, 248, { lines: [2, 9] }], ask: 'To whom is this said?', speaker: ['Corbaccio', 'the raven'] },
      { id: 't05-10', kind: 'fact', q: 'What does Pascal say we find in a natural style, where we expected to see an author?', a: ['A man', 'man', 'a person', 'a human being'], where: '*Pensées*, Section I, no. 29' },
      { id: 't05-11', kind: 'spot', work: 'pascal', cut: [PAS, 's02', 241, 241], ask: 'What one word does the author use for pursuits like this chase?', speaker: ['Diversion', 'diversions', 'distraction', 'distractions', 'amusement', 'amusements', 'divertissement'], where: 'Section II, no. 139' },
      { id: 't05-12', kind: 'fact', q: 'Which mountains does Pascal name when he says that truth on one side is error on the other?', a: ['The Pyrenees', 'Pyrenees'], where: '*Pensées*, Section V, no. 294' },
      { id: 't05-13', kind: 'spot', work: 'pascal', cut: [PAS, 's03', 144, 144, { from: 'You have two things to lose', to: 'This is one point settled.' }], ask: 'This passage is one step in an argument. What is the argument called?', speaker: ['The wager', 'wager', 'wagering', 'the bet', 'bet', 'betting', 'gamble'], where: 'Section III, no. 233' },
      { id: 't05-14', kind: 'fact', q: 'What creature buzzing in the ears does Pascal say is enough to stop the mind from reasoning well?', a: ['A fly', 'fly', 'flies'], where: '*Pensées*, Section VI, no. 366' },
    ],
  },
};
