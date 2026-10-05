// The door: what a visitor is given before anything is explained.
// It has the shape of a meeting, with one spread.

export default {
  id: 'door',
  kicker: 'W. H. Auden’s course at the University of Michigan, 1941',
  title: 'A song with six words missing',
  blurb: 'Ariel’s song, and what Auden said it was about.',
  spreads: [
    {
      passage: {
        gaps: {
          id: 'door',
          cut: ['tempest', 'a1s2', 225, 227],
          blank: [[1, 'coral'], [2, 'pearls'], [3, 'fade'], [4, 'suffer'], [5, 'strange'], [6, 'knell']],
          cite: 'Shakespeare, *The Tempest*, Act I, scene 2.',
        },
      },
      steps: [
        {
          id: 'words',
          kind: 'gaps',
          lead: [
            'Auden gave his classes poems they did not know, copied out with words missing, and had them fill the gaps.',
            'Write in each gap the word you think the poet used. Nothing depends on being right.',
          ],
          notes: {
            0: 'Coral grows under the sea, hard and branching like bone. The bones in this song do not rot. The sea makes something of them.',
            1: 'Eyes are soft. Pearls are hard, round and bright, and a diver brings them up as treasure.',
            2: 'The rhyme is with *made*, two lines up. *Fade* is what flowers and dyes do: they lose their color and are still there.',
            3: 'In Shakespeare’s English *suffer* could mean simply *undergo*. It could also mean what it means now, and the song lets you hear both.',
            4: 'The rhyme is with *sea-change*, a word Shakespeare seems to have made for this song: the *Oxford English Dictionary* has no earlier example. In his English *strange* also meant foreign, as in *a strange land*.',
            5: 'A knell is the bell rung for a death. The sea-nymphs ring this one every hour. His funeral is never over, and nobody has to bury him.',
          },
          heard: {
            0: [
              ['pearl|pearls', 'Pearls come in the next line, for his eyes. For the bones the song has something that branches.'],
              ['dust|ashes|earth|clay', 'That is what the burial service says bones come to. This song says otherwise.'],
              ['sand|stone|stones|rock|rocks|shells|shell', 'A beach is made of that, and none of it grows.'],
            ],
            1: [
              ['jewels|gems|diamonds|sapphires|emeralds', 'Treasure, as in the song. The song’s treasure is one the sea makes itself.'],
              ['stars', 'Stars would lift him out of the sea. The song keeps him in it.'],
            ],
            2: [
              ['die|perish', 'The song agrees that he is dead. This line is about what becomes of the body afterward.'],
              ['rot|decay|waste|spoil', 'That is what bodies do. The song’s word is gentler.'],
              ['change', 'The change comes in the next line. Here the rhyme is with *made*.'],
            ],
            3: [
              ['undergo', 'You have the sense exactly.'],
              ['bear|endure', 'Close in sense. The song’s word has more pain in it.'],
            ],
            4: [
              ['rare', '*Rare* fits the sense and the beat. The rhyme rules it out: the line has to answer *sea-change*.'],
            ],
            5: [
              ['bell|bells', 'A bell it is, and *bell* is the last word of the song. Here Shakespeare names the kind of ringing.'],
              ['dirge|hymn|song', 'That would be sung. This is rung, and the song goes on to give the sound of it.'],
              ['toll|chime|chimes|peal', 'The same bell. The word in the song is the ringing for a death and no other.'],
            ],
          },
          after: [
            'The song is from Shakespeare’s play *The Tempest*, written about 1611. Ariel, a spirit of the air, sings it to Ferdinand, a young prince who has just swum ashore from a shipwreck and believes that his father, the king, has drowned.',
            'His father is alive, on another part of the same island, and Ariel knows it.',
          ],
        },
        {
          id: 'true',
          kind: 'choose',
          ask: 'What is the song, then?',
          options: [
            {
              id: 'lie',
              label: 'A lie, told to lead him somewhere.',
              reply: [
                'Ariel is under orders from the magician Prospero, and the music draws Ferdinand across the island to Prospero’s daughter. By the end of the scene the two are in love, which is what Prospero wanted.',
                'The errand does not need a song this careful about bones and eyes.',
              ],
            },
            {
              id: 'comfort',
              label: 'A comfort, to make the death bearable.',
              reply: [
                'Ferdinand takes it so. Just before the song he says that the music crept past him on the water and calmed both the storm and his grief.',
                'The death he is being comforted for has not happened.',
              ],
            },
            {
              id: 'other',
              label: 'True, though not about his father.',
              reply: [
                'Then something else in the play has to be changed by the sea into something rich and strange. Say what, before you read on.',
              ],
              line: 'True of what? A guess will do.',
            },
          ],
        },
        {
          id: 'auden',
          kind: 'turn',
          title: 'What Auden said in class',
          rows: [4, 5],
          paras: [
            'In December 1941 Auden lectured on *The Tempest*. Donald Pearce, a student in the class, wrote down afterward what he could remember. By his notes Auden found the central theme of the sea scenes of *Pericles* and *The Tempest* in two lines of this song, the two now marked on the sheet, and said: “What Shakespeare is dealing with here is transformation.”',
            'It works, Auden said, on the minds and lives of the people in the play. They are transformed, and Prospero most notably.',
            'So the song is false about the king, who has not drowned, and true about everyone in the play, the king included.',
          ],
          sources: ['Donald Pearce, “Fortunate Fall: W. H. Auden at Michigan,” in *W. H. Auden: The Far Interior*, edited by Alan Bold (1985), pp. 148–49. The last paragraph is this site’s.'],
        },
        {
          id: 'how',
          kind: 'next',
          label: false,
          title: 'The course that lecture belonged to',
          paras: [
            'In the fall of 1941 Auden taught a course at the University of Michigan called Fate and the Individual in European Literature: thirty-two books and operas in fifteen weeks, from Dante to T. S. Eliot. He told the class to take no notes. One student remembered him adding that they would be tested on what they thought about the books, and not on what he said.',
            'Fifteen years later, lecturing at Oxford, he said that two questions interested him most when he read a poem. The first was “Here is a verbal contraption. How does it work?” The second was what kind of person lives in it.',
            'This site goes through his course with those two questions. Each week begins as this page did, with a passage from a book you have not opened yet and something for you to decide. Then you see what the writer wrote and what Auden said about it, and then you read the book. Every week has a short way through its book, for a reader with one evening.',
          ],
          sources: [
            'Pearce, p. 129.',
            'The student is Charles Miller, *Auden: An American Friendship* (1983), p. 26.',
            '“Making, Knowing and Judging” (1956), in *The Dyer’s Hand* (1962), pp. 50–51.',
          ],
          reading: false,
        },
      ],
    },
  ],
};
