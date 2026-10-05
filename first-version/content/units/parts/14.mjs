// Week 14: tests and missing words.
// Rilke, The Journal of My Other Self (Norton and Linton's translation);
// Kafka, The Castle, Chapters 1 to 6 (the Muirs' translation).

const R = 'rilke';
const C = 'castle';

export default {
  words: {
    id: 'w14',
    cut: [R, 'p1-01', 4, 6, { to: 'the awful crash.' }],
    blank: [
      [0, 'rage'],
      [0, 'slams'],
      [0, 'sniggering'],
      [0, 'muffled'],
      [0, 'interminably'],
      [0, 'relief'],
      [1, 'silence'],
      [1, 'stirs'],
      [1, 'leans'],
      [1, 'crash'],
    ],
    setting: 'Malte Brigge, a young Dane, has come to Paris and lives alone in a small room. He writes this in his notebook, early in his stay.',
    cite: 'Rilke, *The Journal of My Other Self*, Part One, 1, in M. D. Herter Norton and John Linton’s translation of 1930.',
  },

  test: {
    items: [
      { id: 't14-1', kind: 'spot', work: 'rilke', cut: [R, 'p1-01', 32, 32, { from: 'And when the villagers heard it roaring', to: 'among the others.' }], ask: 'Whose death is this?', speaker: ['Chamberlain Brigge', 'the chamberlain', 'Christoph Detlev Brigge', 'Christoph Detlev', 'Christoph Brigge', 'Christoph', 'Detlev', 'old Brigge', 'Malte’s grandfather', 'his grandfather', 'grandfather'], speakerShown: 'Chamberlain Christoph Detlev Brigge, Malte’s grandfather' },
      { id: 't14-2', kind: 'fact', q: 'What is the name of the dead woman who walks through the hall at Urnekloster while the family is at dinner?', a: ['Christine Brahe', 'Christine', 'Christina Brahe', 'Christina', 'Kristine Brahe', 'Kristine'], where: '*The Journal of My Other Self*, Part One, 2' },
      { id: 't14-3', kind: 'spot', work: 'rilke', cut: [R, 'p1-06', 8, 8, { from: 'I saw it, Malte; I saw it.', to: 'right up to lick her.' }], ask: 'Who is she?', speaker: ['Ingeborg'] },
      { id: 't14-4', kind: 'fact', q: 'To what hospital in Paris is Malte sent for electric treatment?', a: ['The Salpêtrière', 'Salpetriere', 'Salpetrier', 'Salpetiere', 'Salpatriere', 'Saltpetriere'], where: '*The Journal of My Other Self*, Part One, 4' },
      { id: 't14-5', kind: 'spot', work: 'rilke', cut: [R, 'p2-01', 19, 19], ask: 'At whose house does this happen?', speaker: ['The Schulins’', 'Schulins', 'Schulin', 'Lystager'], speakerShown: 'At the Schulins’, at Lystager' },
      { id: 't14-6', kind: 'fact', q: 'In the last of the six tapestries that Malte describes to Abelone, what does the lady hold?', a: ['A mirror', 'mirror', 'looking-glass', 'looking glass'], where: '*The Journal of My Other Self*, Part One, 8' },
      { id: 't14-7', kind: 'spot', work: 'rilke', cut: [R, 'p2-05', 7, 7, { from: 'But the old woman was already kneeling', to: 'be called a face at all.' }], ask: 'Whose body is this?', speaker: ['Charles the Bold', 'the Duke of Burgundy', 'Duke Charles', 'Charles of Burgundy', 'Burgundy', 'the duke', 'Charles the Rash', 'Charles le Téméraire', 'Karl der Kühne'], speakerShown: 'Charles the Bold, Duke of Burgundy' },
      { id: 't14-8', kind: 'fact', q: 'What does Nikolai Kusmitch feel blowing past his face like a draft, as he sits in the dark with the window shut?', a: ['Time', 'time passing', 'real time', 'the seconds', 'seconds'], shown: 'Time passing', where: '*The Journal of My Other Self*, Part Two, 3' },
      { id: 't14-9', kind: 'spot', work: 'rilke', cut: [R, 'p2-08', 39, 39, { from: 'It is easy to understand how', to: 'evidence of his attitude.' }], ask: 'Who is he?', speaker: ['The Prodigal Son', 'the Prodigal', 'prodigal', 'the lost son'] },
      { id: 't14-10', kind: 'fact', q: 'In what town does Malte walk into an ancient open-air theater?', a: ['Orange'], where: '*The Journal of My Other Self*, Part Two, 7' },
      { id: 't14-11', kind: 'spot', work: 'castle', cut: [C, 'c03', 1, 1, { from: 'A middle-sized, plump', to: 'rested on his knee.' }], ask: 'Who is he?', speaker: ['Klamm', 'Herr Klamm'] },
      { id: 't14-12', kind: 'fact', q: 'What is the name of the coachman who drives K. back to the inn on his first day in the village?', a: ['Gerstäcker', 'Gerstacker', 'Gerstaecker', 'Gerstaeker', 'Gerstaker', 'Gerstecker'], where: '*The Castle*, Chapter 1' },
      { id: 't14-13', kind: 'fact', q: 'By what one name does K. say he will call both of his assistants?', a: ['Arthur', 'Artur'], where: '*The Castle*, Chapter 2' },
      { id: 't14-14', kind: 'spot', work: 'castle', cut: [C, 'c05', 2, 2, { from: 'I know about the whole business', to: 'do with a Land Surveyor?' }], ask: 'Who speaks?', speaker: ['The Superintendent', 'Superintendent', 'village Superintendent', 'Mayor', 'village mayor', 'Chairman', 'headman'] },
      { id: 't14-15', kind: 'fact', q: 'What is the name of the Italian official in Department B who took up the Land Surveyor’s case?', a: ['Sordini'], where: '*The Castle*, Chapter 5' },
      { id: 't14-16', kind: 'spot', work: 'castle', cut: [C, 'c06', 17, 17, { from: 'Three times Klamm sent for me', to: 'we went on again.' }], ask: 'Who speaks?', speaker: ['The landlady of the Bridge Inn', 'landlady', 'Gardena', 'Gardana', 'hostess', 'innkeeper’s wife', 'landlord’s wife'] },
    ],
  },
};
