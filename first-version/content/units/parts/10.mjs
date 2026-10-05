// Week 10: tests and missing words.
// Dostoevsky, The Brothers Karamazov, Books XI and XII and the Epilogue
// (Garnett's translation).

const K = 'karamazov';

export default {
  words: {
    id: 'w10',
    cut: [K, 'b11c09', 2, 3, { from: 'This was a person', to: 'flourish in the times of serfdom.' }],
    blank: [
      [0, 'pointed'],
      [0, 'shabby'],
      [0, 'tailor'],
      [0, 'discarded'],
      [0, 'stylish'],
      [0, 'threadbare'],
      [0, 'tight'],
      [0, 'season'],
      [1, 'gentility'],
      [1, 'idle'],
    ],
    setting: 'It is the night before the trial, and Ivan has come home ill with fever. He looks across his room and sees someone sitting on the sofa.',
    cite: 'Dostoevsky, *The Brothers Karamazov*, Book XI, Chapter 9, in Constance Garnett’s translation of 1912.',
  },

  test: {
    items: [
      { id: 't10-1', kind: 'spot', work: 'karamazov', cut: [K, 'b11c04', 49, 49, { from: 'If they drive God from the earth', to: 'Hail to God and His joy! I love Him!' }], ask: 'Who speaks?', speaker: ['Mitya', 'Dmitri', 'Dmitri Karamazov', 'Dmitri Fyodorovitch', 'Dmitry', 'Dimitri', 'Mitia', 'Dimitry'] },
      { id: 't10-2', kind: 'fact', q: 'What does Lise crush in the door when she is left alone?', a: ['finger', 'her finger', 'her own finger'], shown: 'Her finger', where: '*The Brothers Karamazov*, Part IV, Book XI: Ivan, Chapter 3: A Little Demon' },
      { id: 't10-3', kind: 'spot', work: 'karamazov', cut: [K, 'b11c08', 41, 41], ask: 'Who speaks?', speaker: ['Smerdyakov', 'Smerdiakov', 'Pavel Fyodorovitch', 'Pavel Smerdyakov'] },
      { id: 't10-4', kind: 'fact', q: 'With what heavy object from his own table was Fyodor Pavlovitch killed?', a: ['paper-weight', 'paperweight', 'an iron paper-weight', 'an iron paperweight'], shown: 'An iron paper-weight', where: '*The Brothers Karamazov*, Part IV, Book XI: Ivan, Chapter 8: The Third and Last Interview with Smerdyakov' },
      { id: 't10-5', kind: 'spot', work: 'karamazov', cut: [K, 'b11c09', 27, 27, { from: 'I adopt all your habits here', to: 'Then there would be an end to my sufferings.' }], ask: 'Who speaks?', speaker: ['The devil', 'devil', 'Satan', 'Ivan’s devil', 'Ivan’s visitor', 'Ivan’s hallucination', 'hallucination', 'Ivan’s double', 'visitor', 'the visitor', 'the gentleman', 'gentleman', 'Ivan’s nightmare'], speakerShown: 'The devil, Ivan’s visitor' },
      { id: 't10-6', kind: 'fact', q: 'How does the murderer of Fyodor Pavlovitch die on the night before the trial?', a: ['hangs himself', 'hanged himself', 'hung himself', 'hanging', 'by hanging', 'suicide', 'kills himself', 'killed himself', 'takes his own life', 'took his own life', 'hanged', 'hung'], shown: 'He hangs himself', where: '*The Brothers Karamazov*, Part IV, Book XI: Ivan, Chapter 10: “It Was He Who Said That”' },
      { id: 't10-7', kind: 'spot', work: 'karamazov', cut: [K, 'b12c05', 23, 23], ask: 'Who speaks?', speaker: ['Ivan', 'Ivan Karamazov', 'Ivan Fyodorovitch'] },
      { id: 't10-8', kind: 'fact', q: 'What did Doctor Herzenstube once buy for Mitya when he was a neglected child?', a: ['nuts', 'a pound of nuts', 'pound of nuts'], shown: 'A pound of nuts', where: '*The Brothers Karamazov*, Part IV, Book XII: A Judicial Error, Chapter 3: The Medical Experts and a Pound of Nuts' },
      { id: 't10-9', kind: 'spot', work: 'karamazov', cut: [K, 'b12c09', 21, 21, { from: 'Our fatal troika dashes on', to: 'safety, enlightenment and civilization.' }], ask: 'Who speaks?', speaker: ['The prosecutor', 'prosecutor', 'Ippolit Kirillovitch', 'Ippolit', 'Ippolit Kirillovich', 'the prosecution', 'prosecuting attorney'], speakerShown: 'The prosecutor, Ippolit Kirillovitch' },
      { id: 't10-10', kind: 'fact', q: 'Who hands the court the letter in which Mitya wrote that he would kill his father?', a: ['Katerina Ivanovna', 'Katerina', 'Katya', 'Katia', 'Katarina'], where: '*The Brothers Karamazov*, Part IV, Book XII: A Judicial Error, Chapter 5: A Sudden Catastrophe' },
      { id: 't10-11', kind: 'spot', work: 'karamazov', cut: [K, 'b12c10', 6, 6, { from: 'It is worse if we are carried away by the artistic instinct', to: 'a knife that cuts both ways.' }], ask: 'Who speaks?', speaker: ['Fetyukovitch', 'Fetyukovich', 'Fetiukovich', 'the defense counsel', 'counsel for the defense', 'the defense', 'the defence', 'defense lawyer', 'Mitya’s lawyer', 'Mitya’s counsel', 'Mitya’s attorney', 'Dmitri’s lawyer', 'Dmitri’s attorney', 'Dmitri’s counsel'], speakerShown: 'Fetyukovitch, counsel for the defense' },
      { id: 't10-12', kind: 'fact', q: 'After the verdict, how many years of penal servitude do people expect Mitya to get?', a: ['twenty', '20'], shown: 'Twenty', where: '*The Brothers Karamazov*, Part IV, Book XII: A Judicial Error, Chapter 14: The Peasants Stand Firm' },
      { id: 't10-13', kind: 'spot', work: 'karamazov', cut: [K, 'epc03', 56, 56, { from: 'You must know that there is nothing higher', to: 'even that may sometime be the means of saving us.' }], ask: 'Who speaks?', speaker: ['Alyosha', 'Alexey', 'Alexei', 'Alyosha Karamazov', 'Alexey Fyodorovitch', 'Aliosha'] },
      { id: 't10-14', kind: 'fact', q: 'To what country does Mitya plan to escape with Grushenka?', a: ['America', 'the United States', 'USA', 'US', 'U.S.', 'U.S.A.'], where: '*The Brothers Karamazov*, Epilogue, Chapter 2: For a Moment the Lie Becomes Truth' },
    ],
  },
};
