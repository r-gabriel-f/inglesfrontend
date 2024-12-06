export interface Pronoun {
  id: number;
  title: string;
  ingles: string;
  espanol: string;
  pronoun: {
    word: string;
    meaning: string;
  }[];
}
export const pronouns: Pronoun[] = [
  {
    id: 1,
    title: 'Pronombres personales',
    ingles: 'Used to replace the subject or object of a sentence.',
    espanol: 'Se utilizan para reemplazar al sujeto o al objeto de una oración.',
    pronoun: [
      {
        word: 'I',
        meaning: 'Yo',
      },
      {
        word: 'You',
        meaning: 'Tú/Usted',
      },
      {
        word: 'He',
        meaning: 'Él',
      },
      {
        word: 'She',
        meaning: 'Ella',
      },
      {
        word: 'It',
        meaning: 'Eso/Ello',
      },
      {
        word: 'We',
        meaning: 'Nosotros',
      },
      {
        word: 'They',
        meaning: 'Ellos/Ellas',
      },
    ],
  },
  {
    id: 2,
    title: 'Demonstrative pronouns',
    ingles: 'Used to point out specific things or people.',
    espanol: 'Se utilizan para señalar cosas o personas específicas.',
    pronoun: [
      {
        word: 'This',
        meaning: 'Esto',
      },
      {
        word: 'That',
        meaning: 'Eso',
      },
      {
        word: 'These',
        meaning: 'Estos',
      },
      {
        word: 'Those',
        meaning: 'Esos',
      },
    ],
  },
  {
    id: 3,
    title: 'Reflexive pronouns',
    ingles: 'Used when the subject and the object are the same.',
    espanol: 'Se utilizan cuando el sujeto y el objeto son el mismo.',
    pronoun: [
      {
        word: 'Myself',
        meaning: 'Yo mismo',
      },
      {
        word: 'Yourself',
        meaning: 'Tú mismo',
      },
      {
        word: 'Himself',
        meaning: 'Él mismo',
      },
      {
        word: 'Herself',
        meaning: 'Ella misma',
      },
      {
        word: 'Itself',
        meaning: 'Sí mismo',
      },
      {
        word: 'Ourselves',
        meaning: 'Nosotros mismos',
      },
      {
        word: 'Yourselves',
        meaning: 'Ustedes mismos',
      },
      {
        word: 'Themselves',
        meaning: 'Ellos mismos',
      },
    ],
  },
  {
    id: 4,
    title: 'Interrogative pronouns',
    ingles: 'Used to ask questions.',
    espanol: 'Se utilizan para hacer preguntas.',
    pronoun: [
      {
        word: 'Who',
        meaning: 'Quién',
      },
      {
        word: 'Whom',
        meaning: 'A quién',
      },
      {
        word: 'Whose',
        meaning: 'De quién',
      },
      {
        word: 'What',
        meaning: 'Qué',
      },
      {
        word: 'Which',
        meaning: 'Cuál',
      },
      {
        word: 'Where',
        meaning: 'Dónde',
      },
      {
        word: 'Why',
        meaning: 'Por qué',
      },
      {
        word: 'When',
        meaning: 'Cuándo',
      },
      {
        word: 'How',
        meaning: 'Cómo',
      },
    ],
  },
  {
    id: 5,
    title: 'Possessive pronouns',
    ingles: 'Used to indicate ownership or possession.',
    espanol: 'Se utilizan para indicar propiedad o posesión.',
    pronoun: [
      {
        word: 'Mine',
        meaning: 'Mío',
      },
      {
        word: 'Yours',
        meaning: 'Tuyo',
      },
      {
        word: 'His',
        meaning: 'Suyo (de él)',
      },
      {
        word: 'Hers',
        meaning: 'Suyo (de ella)',
      },
      {
        word: 'Its',
        meaning: 'Suyo (de ello)',
      },
      {
        word: 'Ours',
        meaning: 'Nuestro',
      },
      {
        word: 'Theirs',
        meaning: 'Suyo (de ellos/ellas)',
      },
    ],
  },
  {
    id: 6,
    title: 'Relative pronouns',
    ingles: 'Used to connect clauses or sentences.',
    espanol: 'Se utilizan para conectar cláusulas o oraciones.',
    pronoun: [
      {
        word: 'Who',
        meaning: 'Quién',
      },
      {
        word: 'Whom',
        meaning: 'A quién',
      },
      {
        word: 'Whose',
        meaning: 'Cuyo',
      },
      {
        word: 'Which',
        meaning: 'El cual',
      },
      {
        word: 'That',
        meaning: 'Que',
      },
    ],
  },
  {
    id: 7,
    title: 'Possessive adjectives',
    ingles: 'Used to indicate possession or ownership, always followed by a noun.',
    espanol: 'Se utilizan para indicar posesión o pertenencia, siempre seguidos de un sustantivo.',
    pronoun: [
      {
        word: 'My',
        meaning: 'Mi',
      },
      {
        word: 'Your',
        meaning: 'Tu',
      },
      {
        word: 'His',
        meaning: 'Su (de él)',
      },
      {
        word: 'Her',
        meaning: 'Su (de ella)',
      },
      {
        word: 'Its',
        meaning: 'Su (de eso)',
      },
      {
        word: 'Our',
        meaning: 'Nuestro',
      },
      {
        word: 'Your',
        meaning: 'Su / Vuestro',
      },
      {
        word: 'Their',
        meaning: 'Su (de ellos/ellas)',
      },
    ],
  },
  {
    id: 8,
    title: 'Object pronouns',
    ingles: 'Used as the object of a verb or preposition, receiving the action.',
    espanol: 'Se utilizan como objeto de un verbo o preposición, recibiendo la acción.',
    pronoun: [
      {
        word: 'Me',
        meaning: 'Me / A mí',
      },
      {
        word: 'You',
        meaning: 'Te / A ti',
      },
      {
        word: 'Him',
        meaning: 'Lo / A él',
      },
      {
        word: 'Her',
        meaning: 'La / A ella',
      },
      {
        word: 'It',
        meaning: 'Lo / La (para cosas o animales)',
      },
      {
        word: 'Us',
        meaning: 'Nos / A nosotros(as)',
      },
      {
        word: 'You',
        meaning: 'Los / Las / A ustedes',
      },
      {
        word: 'Them',
        meaning: 'Los / Las / A ellos(as)',
      },
    ],
  },
  {
    id: 9,
    title: 'Modal verbs',
    ingles: 'Used to express ability, possibility, permission, or obligation.',
    espanol: 'Se utilizan para expresar habilidad, posibilidad, permiso u obligación.',
    pronoun: [
      {
        word: 'Can',
        meaning: 'Poder (habilidad)',
      },
      {
        word: 'Could',
        meaning: 'Podría (habilidad pasada o posibilidad)',
      },
      {
        word: 'May',
        meaning: 'Poder (posibilidad o permiso)',
      },
      {
        word: 'Might',
        meaning: 'Podría (posibilidad)',
      },
      {
        word: 'Must',
        meaning: 'Deber (obligación)',
      },
      {
        word: 'Shall',
        meaning: 'Debería (formal o sugerencia)',
      },
      {
        word: 'Should',
        meaning: 'Debería (consejo)',
      },
      {
        word: 'Will',
        meaning: 'Futuro (voluntad)',
      },
      {
        word: 'Would',
        meaning: 'Haría (condicional)',
      },
    ],
  },
];
