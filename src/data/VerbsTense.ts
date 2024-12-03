export interface VerbsTenseModel {
  id: number;
  title: string;
  ingles: string;
  espanol: string;
  tense: {
    verb: string;
    ingles: string;
    espanol: string;
  }[];
}

export const verbsTense: VerbsTenseModel[] = [
  {
    id: 1,
    title: 'Simple Present',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I eat apples.',
        espanol: 'Yo como manzanas.',
      },
      {
        verb: 'Negative',
        ingles: 'I do not eat apples.',
        espanol: 'Yo no como manzanas.',
      },
      {
        verb: 'Question',
        ingles: 'Do I eat apples?',
        espanol: '¿Como manzanas?',
      },
    ],
  },
  {
    id: 2,
    title: 'Present Continuous',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I am eating an apple.',
        espanol: 'Estoy comiendo una manzana.',
      },
      {
        verb: 'Negative',
        ingles: 'I am not eating an apple.',
        espanol: 'No estoy comiendo una manzana.',
      },
      {
        verb: 'Question',
        ingles: 'Am I eating an apple?',
        espanol: '¿Estoy comiendo una manzana?',
      },
    ],
  },
  {
    id: 3,
    title: 'Present Perfect',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I have eaten an apple.',
        espanol: 'He comido una manzana.',
      },
      {
        verb: 'Negative',
        ingles: 'I have not eaten an apple.',
        espanol: 'No he comido una manzana.',
      },
      {
        verb: 'Question',
        ingles: 'Have I eaten an apple?',
        espanol: '¿He comido una manzana?',
      },
    ],
  },

  {
    id: 4,
    title: 'Present Perfect Continuous',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I have been eating apples.',
        espanol: 'He estado comiendo manzanas.',
      },
      {
        verb: 'Negative',
        ingles: 'I have not been eating apples.',
        espanol: 'No he estado comiendo manzanas.',
      },
      {
        verb: 'Question',
        ingles: 'Have I been eating apples?',
        espanol: '¿He estado comiendo manzanas?',
      },
    ],
  },
  {
    id: 5,
    title: 'Past Simple',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I ate an apple.',
        espanol: 'Comí una manzana.',
      },
      {
        verb: 'Negative',
        ingles: 'I did not eat an apple.',
        espanol: 'No comí una manzana.',
      },
      {
        verb: 'Question',
        ingles: 'Did I eat an apple?',
        espanol: '¿Comí una manzana?',
      },
    ],
  },
  {
    id: 6,
    title: 'Past Continuous',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I was eating an apple.',
        espanol: 'Estaba comiendo una manzana.',
      },
      {
        verb: 'Negative',
        ingles: 'I was not eating an apple.',
        espanol: 'No estaba comiendo una manzana.',
      },
      {
        verb: 'Question',
        ingles: 'Was I eating an apple?',
        espanol: '¿Estaba comiendo una manzana?',
      },
    ],
  },
  {
    id: 7,
    title: 'Past Perfect',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I had eaten an apple.',
        espanol: 'Había comido una manzana.',
      },
      {
        verb: 'Negative',
        ingles: 'I had not eaten an apple.',
        espanol: 'No había comido una manzana.',
      },
      {
        verb: 'Question',
        ingles: 'Had I eaten an apple?',
        espanol: '¿Había comido una manzana?',
      },
    ],
  },
  {
    id: 8,
    title: 'Past Perfect Continuous',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I had been eating apples.',
        espanol: 'Había estado comiendo manzanas.',
      },
      {
        verb: 'Negative',
        ingles: 'I had not been eating apples.',
        espanol: 'No había estado comiendo manzanas.',
      },
      {
        verb: 'Question',
        ingles: 'Had I been eating apples?',
        espanol: '¿Había estado comiendo manzanas?',
      },
    ],
  },
  {
    id: 9,
    title: 'Future Simple',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I will eat an apple.',
        espanol: 'Comeré una manzana.',
      },
      {
        verb: 'Negative',
        ingles: 'I will not eat an apple.',
        espanol: 'No comeré una manzana.',
      },
      {
        verb: 'Question',
        ingles: 'Will I eat an apple?',
        espanol: '¿Comeré una manzana?',
      },
    ],
  },
  {
    id: 10,
    title: 'Future Continuous',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I will be eating an apple.',
        espanol: 'Estaré comiendo una manzana.',
      },
      {
        verb: 'Negative',
        ingles: 'I will not be eating an apple.',
        espanol: 'No estaré comiendo una manzana.',
      },
      {
        verb: 'Question',
        ingles: 'Will I be eating an apple?',
        espanol: '¿Estaré comiendo una manzana?',
      },
    ],
  },
  {
    id: 11,
    title: 'Future Perfect',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I will have eaten an apple.',
        espanol: 'Habré comido una manzana.',
      },
      {
        verb: 'Negative',
        ingles: 'I will not have eaten an apple.',
        espanol: 'No habré comido una manzana.',
      },
      {
        verb: 'Question',
        ingles: 'Will I have eaten an apple?',
        espanol: '¿Habré comido una manzana?',
      },
    ],
  },
  {
    id: 12,
    title: 'Future Perfect Continuous',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I will have been eating apples.',
        espanol: 'Habré estado comiendo manzanas.',
      },
      {
        verb: 'Negative',
        ingles: 'I will not have been eating apples.',
        espanol: 'No habré estado comiendo manzanas.',
      },
      {
        verb: 'Question',
        ingles: 'Will I have been eating apples?',
        espanol: '¿Habré estado comiendo manzanas?',
      },
    ],
  },
];
