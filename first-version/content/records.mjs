// Old records. Each was published long enough ago to be in the public
// domain in the United States, and each says where its transfer comes from.
// The files in site/records are the transfers made over as single-channel
// MP3s of modest size; nothing else was done to the sound.

const IA = 'https://archive.org/details/';
const LOC = 'https://www.loc.gov/item/';

export default [
  {
    id: 'orpheus-che-faro',
    file: 'orpheus-che-faro-onegin-1922.mp3',
    work: 'orpheus',
    title: '“Che farò senza Euridice,” from the last act of Gluck’s *Orpheus*',
    plain: 'Che farò senza Euridice',
    performers: 'Sigrid Onegin, contralto, with orchestra. Brunswick record 50039, made about 1922. Four minutes.',
    credit: `A collector’s transfer from the disc, at the [Internet Archive](${IA}sigrid-onegin-christoph-willibald-gluck-orfeo-ed-euridice-che-faro-senza-euridice-brunswick-50039).`,
  },
  {
    id: 'magic-flute-queen',
    file: 'magic-flute-der-hoelle-rache-hempel-1911.mp3',
    work: 'magic-flute',
    title: '“Der Hölle Rache,” the Queen of the Night’s aria in the second act of Mozart’s *The Magic Flute*',
    plain: 'Der Hölle Rache',
    performers: 'Frieda Hempel, soprano, with orchestra. A Gramophone Company record made on September 12, 1911. Three minutes.',
    credit: `A collector’s transfer from a later pressing of the disc, at the [Internet Archive](${IA}der-holle-rache-db-365).`,
  },
  {
    id: 'don-giovanni-la-ci-darem',
    file: 'don-giovanni-la-ci-darem-farrar-scotti-1909.mp3',
    work: 'don-giovanni',
    title: '“Là ci darem la mano,” the duet of Don Giovanni and Zerlina in the first act of Mozart’s *Don Giovanni*',
    plain: 'Là ci darem la mano',
    performers: 'Geraldine Farrar, soprano, and Antonio Scotti, baritone, with orchestra. A Victor record made on October 4, 1909. Three minutes.',
    credit: `Transfer by the Library of Congress, in its [National Jukebox](${LOC}jukebox-125909/).`,
  },
  {
    id: 'tristan-liebestod',
    file: 'tristan-liebestod-gadski-1915.mp3',
    work: 'tristan',
    title: 'Isolde’s last song, the “Liebestod,” which ends Wagner’s *Tristan und Isolde*',
    plain: 'Isolde’s Liebestod',
    performers: 'Johanna Gadski, soprano, with orchestra conducted by Walter B. Rogers. Victor record 88058, made on June 16, 1915. Four minutes.',
    credit: `Transfer by the Library of Congress, in its [National Jukebox](${LOC}jukebox-124612/).`,
  },
  {
    id: 'carmen-habanera',
    file: 'carmen-habanera-farrar-1914.mp3',
    work: 'carmen',
    title: 'The Habanera, from the first act of Bizet’s *Carmen*',
    plain: 'The Habanera from Carmen',
    performers: 'Geraldine Farrar, soprano, with orchestra conducted by Walter B. Rogers. Victor record 87210, made on December 9, 1914. Three minutes.',
    credit: `Transfer by the Library of Congress, in its [National Jukebox](${LOC}jukebox-11761/).`,
  },
  {
    id: 'traviata-sempre-libera',
    file: 'traviata-sempre-libera-galli-curci-1919.mp3',
    work: 'traviata',
    title: '“Sempre libera,” which ends the first act of Verdi’s *La Traviata*',
    plain: 'Sempre libera',
    performers: 'Amelita Galli-Curci, soprano, with orchestra. Victor record 64820, made on March 7, 1919. Under three minutes. As sung, to judge by old librettos, the song has other words in six of its eight lines than the libretto shown on this page.',
    credit: `Transfer made for the [Internet Archive](${IA}78_traviata---sempre-libera-ill-fulfill-the-round-of-pleasure_amelita-galli-curci-v_gbia0010963a).`,
  },
  {
    id: 'fidelio-abscheulicher',
    file: 'fidelio-abscheulicher-leider-1924.mp3',
    work: 'fidelio',
    title: '“Abscheulicher! Wo eilst du hin?”, Leonore’s scene in the first act of Beethoven’s *Fidelio*',
    plain: 'Abscheulicher! Wo eilst du hin?',
    performers: 'Frida Leider, soprano, with orchestra. Both sides of a Polydor record of the early 1920s. Seven and a half minutes.',
    credit: `A collector’s transfer from the disc, at the [Internet Archive](${IA}78_abscheulicherwoeilstduhin_191_03).`,
  },
  {
    id: 'dutchman-senta',
    file: 'dutchman-senta-ballad-jeritza-1922.mp3',
    work: 'dutchman',
    title: 'Senta’s ballad, from the second act of Wagner’s *The Flying Dutchman*',
    plain: 'Senta’s ballad',
    performers: 'Maria Jeritza, soprano, with orchestra. Victor record 74776, made in 1922. Four and a half minutes.',
    credit: `Transfer made for the [Internet Archive](${IA}78_flying-dutchman-traft-ihr-das-schiff-a-ship-the-restless-ocean-sweeps-sentas_gbia0253553a).`,
  },
  {
    id: 'gotterdammerung-march',
    file: 'gotterdammerung-funeral-march-raho-1920.mp3',
    work: 'gotterdammerung',
    title: 'Siegfried’s Funeral March, from the last act of Wagner’s *Götterdämmerung*',
    plain: 'Siegfried’s Funeral March',
    performers: 'The Royal Albert Hall Orchestra. Both sides of His Master’s Voice record D 502, made in 1920. Eight minutes.',
    credit: `Transfers by the Centre for the History and Analysis of Recorded Music, King’s College London, at the Internet Archive: [the first side](${IA}78_siegfrieds-funeral-march-part-1-gtterdmmerung_royal-albert-hall-orchestra) and [the second](${IA}78_siegfrieds-funeral-march-part-2-gtterdmmerung_royal-albert-hall-orchestra).`,
  },
];
