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
    title: 'Simple Present (To Be)',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I am a student.',
        espanol: 'Soy un estudiante.',
      },
      {
        verb: 'Negative',
        ingles: 'I am not a student.',
        espanol: 'No soy un estudiante.',
      },
      {
        verb: 'Question',
        ingles: 'Am I a student?',
        espanol: '¿Soy un estudiante?',
      },
    ],
  },
  {
    id: 2,
    title: 'Simple Past (To Be)',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I was a student.',
        espanol: 'Fui un estudiante.',
      },
      {
        verb: 'Negative',
        ingles: 'I was not a student.',
        espanol: 'No fui un estudiante.',
      },
      {
        verb: 'Question',
        ingles: 'Was I a student?',
        espanol: '¿Fui un estudiante?',
      },
    ],
  },
  {
    id: 3,
    title: 'Simple Future (To Be)',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I will be a student.',
        espanol: 'Seré un estudiante.',
      },
      {
        verb: 'Negative',
        ingles: 'I will not be a student.',
        espanol: 'No seré un estudiante.',
      },
      {
        verb: 'Question',
        ingles: 'Will I be a student?',
        espanol: '¿Seré un estudiante?',
      },
    ],
  },
  {
    id: 4,
    title: 'Simple Present (To Have)',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I have a book.',
        espanol: 'Tengo un libro.',
      },
      {
        verb: 'Negative',
        ingles: 'I do not have a book.',
        espanol: 'No tengo un libro.',
      },
      {
        verb: 'Question',
        ingles: 'Do I have a book?',
        espanol: '¿Tengo un libro?',
      },
    ],
  },
  {
    id: 5,
    title: 'Simple Past (To Have)',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I had a book.',
        espanol: 'Tuve un libro.',
      },
      {
        verb: 'Negative',
        ingles: 'I did not have a book.',
        espanol: 'No tuve un libro.',
      },
      {
        verb: 'Question',
        ingles: 'Did I have a book?',
        espanol: '¿Tuve un libro?',
      },
    ],
  },
  {
    id: 6,
    title: 'Simple Future (To Have)',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I will have a book.',
        espanol: 'Tendré un libro.',
      },
      {
        verb: 'Negative',
        ingles: 'I will not have a book.',
        espanol: 'No tendré un libro.',
      },
      {
        verb: 'Question',
        ingles: 'Will I have a book?',
        espanol: '¿Tendré un libro?',
      },
    ],
  },
  {
    id: 7,
    title: 'Present Continuous',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I am eating dinner.',
        espanol: 'Estoy cenando.',
      },
      {
        verb: 'Negative',
        ingles: 'I am not eating dinner.',
        espanol: 'No estoy cenando.',
      },
      {
        verb: 'Question',
        ingles: 'Am I eating dinner?',
        espanol: '¿Estoy cenando?',
      },
    ],
  },
  {
    id: 8,
    title: 'Past Continuous',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I was eating dinner.',
        espanol: 'Estaba cenando.',
      },
      {
        verb: 'Negative',
        ingles: 'I was not eating dinner.',
        espanol: 'No estaba cenando.',
      },
      {
        verb: 'Question',
        ingles: 'Was I eating dinner?',
        espanol: '¿Estaba cenando?',
      },
    ],
  },
  {
    id: 9,
    title: 'Future Continuous',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I will be eating dinner.',
        espanol: 'Estaré cenando.',
      },
      {
        verb: 'Negative',
        ingles: 'I will not be eating dinner.',
        espanol: 'No estaré cenando.',
      },
      {
        verb: 'Question',
        ingles: 'Will I be eating dinner?',
        espanol: '¿Estaré cenando?',
      },
    ],
  },
  {
    id: 10,
    title: 'Present Perfect',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I have finished my homework.',
        espanol: 'He terminado mi tarea.',
      },
      {
        verb: 'Negative',
        ingles: 'I have not finished my homework.',
        espanol: 'No he terminado mi tarea.',
      },
      {
        verb: 'Question',
        ingles: 'Have I finished my homework?',
        espanol: '¿He terminado mi tarea?',
      },
    ],
  },
  {
    id: 11,
    title: 'Past Perfect',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I had finished my homework.',
        espanol: 'Había terminado mi tarea.',
      },
      {
        verb: 'Negative',
        ingles: 'I had not finished my homework.',
        espanol: 'No había terminado mi tarea.',
      },
      {
        verb: 'Question',
        ingles: 'Had I finished my homework?',
        espanol: '¿Había terminado mi tarea?',
      },
    ],
  },
  {
    id: 12,
    title: 'Future Perfect',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I will have finished my homework.',
        espanol: 'Habré terminado mi tarea.',
      },
      {
        verb: 'Negative',
        ingles: 'I will not have finished my homework.',
        espanol: 'No habré terminado mi tarea.',
      },
      {
        verb: 'Question',
        ingles: 'Will I have finished my homework?',
        espanol: '¿Habré terminado mi tarea?',
      },
    ],
  },
  {
    id: 13,
    title: 'Present Perfect Continuous',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I have been studying.',
        espanol: 'He estado estudiando.',
      },
      {
        verb: 'Negative',
        ingles: 'I have not been studying.',
        espanol: 'No he estado estudiando.',
      },
      {
        verb: 'Question',
        ingles: 'Have I been studying?',
        espanol: '¿He estado estudiando?',
      },
    ],
  },
  {
    id: 14,
    title: 'Past Perfect Continuous',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I had been studying.',
        espanol: 'Había estado estudiando.',
      },
      {
        verb: 'Negative',
        ingles: 'I had not been studying.',
        espanol: 'No había estado estudiando.',
      },
      {
        verb: 'Question',
        ingles: 'Had I been studying?',
        espanol: '¿Había estado estudiando?',
      },
    ],
  },
  {
    id: 15,
    title: 'Future Perfect Continuous',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I will have been studying.',
        espanol: 'Habré estado estudiando.',
      },
      {
        verb: 'Negative',
        ingles: 'I will not have been studying.',
        espanol: 'No habré estado estudiando.',
      },
      {
        verb: 'Question',
        ingles: 'Will I have been studying?',
        espanol: '¿Habré estado estudiando?',
      },
    ],
  },
  {
    id: 16,
    title: 'Present Simple Passive',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'The book is read by many.',
        espanol: 'El libro es leído por muchos.',
      },
      {
        verb: 'Negative',
        ingles: 'The book is not read by many.',
        espanol: 'El libro no es leído por muchos.',
      },
      {
        verb: 'Question',
        ingles: 'Is the book read by many?',
        espanol: '¿Es el libro leído por muchos?',
      },
    ],
  },
  {
    id: 17,
    title: 'Past Simple Passive',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'The book was read by many.',
        espanol: 'El libro fue leído por muchos.',
      },
      {
        verb: 'Negative',
        ingles: 'The book was not read by many.',
        espanol: 'El libro no fue leído por muchos.',
      },
      {
        verb: 'Question',
        ingles: 'Was the book read by many?',
        espanol: '¿Fue el libro leído por muchos?',
      },
    ],
  },
  {
    id: 18,
    title: 'Future Simple Passive',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'The book will be read by many.',
        espanol: 'El libro será leído por muchos.',
      },
      {
        verb: 'Negative',
        ingles: 'The book will not be read by many.',
        espanol: 'El libro no será leído por muchos.',
      },
      {
        verb: 'Question',
        ingles: 'Will the book be read by many?',
        espanol: '¿Será el libro leído por muchos?',
      },
    ],
  },
  {
    id: 19,
    title: 'Present Conditional',
    ingles: '-',
    espanol: '-',
    tense: [
      { verb: 'Affirmative', ingles: 'I would eat.', espanol: 'Comería.' },
      { verb: 'Negative', ingles: 'I would not eat.', espanol: 'No comería.' },
      { verb: 'Question', ingles: 'Would I eat?', espanol: '¿Comería?' },
    ],
  },
  {
    id: 20,
    title: 'Past Conditional',
    ingles: '-',
    espanol: '-',
    tense: [
      {
        verb: 'Affirmative',
        ingles: 'I would have eaten.',
        espanol: 'Habría comido.',
      },
      {
        verb: 'Negative',
        ingles: 'I would not have eaten.',
        espanol: 'No habría comido.',
      },
      {
        verb: 'Question',
        ingles: 'Would I have eaten?',
        espanol: '¿Habría comido?',
      },
    ],
  },
];
