// Week 07: tests and missing words.
// Ibsen, Peer Gynt (the Archers' translation); Dostoevsky, The Brothers
// Karamazov, Part I (Books I to III, Garnett's translation).

const PG = 'peer-gynt';
const K = 'karamazov';

export default {
  words: {
    id: 'w07',
    cut: [PG, 'a1s1', 40, 40],
    blank: [
      [3, 'scythe'],
      [5, 'toppling'],
      [7, 'slumber'],
      [11, 'Clove'],
      [12, 'colt'],
      [14, 'glittered'],
      [16, 'void'],
      [18, 'motes'],
      [20, 'echo'],
      [22, 'swung'],
    ],
    setting: 'Peer Gynt is telling his mother a story about what happened to him on the mountain. In the story, a reindeer buck he had shot sprang up with him on its back and ran out along a ridge called the Gendin-Edge.',
    cite: 'Ibsen, *Peer Gynt*, Act 1, Scene 1, in William and Charles Archer’s translation of 1892, as they revised it in 1907.',
  },

  test: {
    items: [
      { id: 't07-1', kind: 'spot', work: 'peer-gynt', cut: [PG, 'a2s6', 42, 42, { lines: [0, 5] }], ask: 'Who speaks?', speaker: ['the Dovre King', 'Dovre-King', 'the Old Man of the Dovre', 'the Old Man', 'King of the Dovre', 'the Troll King', 'King of the Trolls', 'the Mountain King', 'King of the Mountain', 'Dovregubben', 'Dovre Master'], speakerShown: 'The Old Man of the Dovre, the troll king' },
      { id: 't07-2', kind: 'fact', q: 'Whom does Peer carry off up the mountain from the wedding at Hegstad?', a: ['Ingrid', 'the bride'], shown: 'Ingrid, the bride', where: '*Peer Gynt*, Act 1, Scene 3' },
      { id: 't07-3', kind: 'spot', work: 'peer-gynt', cut: [PG, 'a3s3', 19, 21], ask: 'Who speaks?', speaker: ['Solveig', 'Solvejg', 'Solvieg'] },
      { id: 't07-4', kind: 'fact', q: 'In what kind of place in Cairo is Peer crowned with a wreath of straw?', a: ['A madhouse', 'mad house', 'asylum', 'mental hospital', 'hospital for the insane', 'bedlam'], where: '*Peer Gynt*, Act 4, Scene 13' },
      { id: 't07-5', kind: 'spot', work: 'peer-gynt', cut: [PG, 'a5s9', 33, 33], ask: 'Who speaks?', speaker: ['The Button-moulder', 'Button-molder', 'Buttonmoulder', 'Buttonmolder', 'Button maker', 'Button caster', 'Button founder'] },
      { id: 't07-6', kind: 'fact', q: 'What does Peer strip layer by layer in Act 5, looking for a kernel that is not there?', a: ['An onion', 'onions'], where: '*Peer Gynt*, Act 5, Scene 5' },
      { id: 't07-7', kind: 'spot', work: 'karamazov', cut: [K, 'b01c04', 11, 11, { from: 'It’s impossible, I think, for the devils', to: 'more Lutheran that is.' }], ask: 'Who speaks?', speaker: ['Fyodor Pavlovitch', 'Fyodor', 'Fyodor Pavlovich', 'Fedor', 'Fiodor', 'Feodor', 'the father', 'old Karamazov', 'Karamazov senior', 'the old man'], speakerShown: 'Fyodor Pavlovitch, the father' },
      { id: 't07-8', kind: 'fact', q: 'Which servant took each of the three brothers into his cottage when their father forgot them?', a: ['Grigory', 'Grigori', 'Grigoriy', 'Gregory'], where: '*The Brothers Karamazov*, Part I, Book I: The History of a Family, Chapters 2 and 3' },
      { id: 't07-9', kind: 'spot', work: 'karamazov', cut: [K, 'b02c04', 44, 44, { from: 'I am sorry I can say nothing more consoling to you', to: 'a complete science.' }], ask: 'Who speaks?', speaker: ['Father Zossima', 'Zossima', 'Zosima', 'the elder', 'the starets'] },
      { id: 't07-10', kind: 'fact', q: 'Who waits for Alyosha on the path to the monastery and says the bow made to Dmitri points to a crime in the family?', a: ['Rakitin', 'Misha', 'the divinity student', 'the seminarian', 'the seminarist'], where: '*The Brothers Karamazov*, Part I, Book II: An Unfortunate Gathering, Chapter 7: A Young Man Bent on a Career' },
      { id: 't07-11', kind: 'spot', work: 'karamazov', cut: [K, 'b03c03', 46, 46, { from: 'Yes, man is broad, too broad, indeed.', to: 'the battlefield is the heart of man.' }], ask: 'Who speaks?', speaker: ['Dmitri', 'Mitya', 'Dmitry', 'Dimitri', 'Mitia'] },
      { id: 't07-12', kind: 'fact', q: 'How many rubles does Dmitri send Alyosha to ask their father for?', a: ['three thousand', '3000', '3,000', '3 thousand'], shown: 'Three thousand', where: '*The Brothers Karamazov*, Part I, Book III: The Sensualists, Chapter 5: The Confession of a Passionate Heart—“Heels Up”' },
      { id: 't07-13', kind: 'spot', work: 'karamazov', cut: [K, 'b03c06', 12, 12, { from: 'In his childhood he was very fond of hanging cats', to: 'with the greatest secrecy.' }], ask: 'Who is being described?', speaker: ['Smerdyakov', 'Smerdiakov', 'Pavel', 'the valet', 'the cook', 'the lackey', 'Balaam’s ass'] },
      { id: 't07-14', kind: 'fact', q: 'Which son tells his father over the brandy that there is no God?', a: ['Ivan'], where: '*The Brothers Karamazov*, Part I, Book III: The Sensualists, Chapter 8: Over the Brandy' },
    ],
  },
};
