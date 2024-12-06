export interface Pronoun {
  id: number;
  title: string;
  ingles: string;
  espanol: string;
  pronoun: {
    word: string;
    meaning: string;
    example: string;
    exampleTranslation: string;
  }[];
}

export const pronouns: Pronoun[] = [
  {
    id: 1,
    title: 'Pronombres personales',
    ingles: 'Used to replace the subject or object of a sentence.',
    espanol:
      'Se utilizan para reemplazar al sujeto o al objeto de una oración.',
    pronoun: [
      {
        word: 'I',
        meaning: 'Yo',
        example: 'I love coding.',
        exampleTranslation: 'Yo amo programar.',
      },
      {
        word: 'You',
        meaning: 'Tú/Usted',
        example: 'You are a developer.',
        exampleTranslation: 'Usted es desarrollador.',
      },
      {
        word: 'He',
        meaning: 'Él',
        example: 'He is my brother.',
        exampleTranslation: 'Él es mi hermano.',
      },
      {
        word: 'She',
        meaning: 'Ella',
        example: 'She likes coffee.',
        exampleTranslation: 'Ella le gusta el cafe.',
      },
      {
        word: 'It',
        meaning: 'Eso/Ello',
        example: 'It is a sunny day.',
        exampleTranslation: 'Eso/Ello es un dia soleado.',
      },
      {
        word: 'We',
        meaning: 'Nosotros',
        example: 'We are learning English.',
        exampleTranslation: 'Nosotros estamos aprendiendo inglés.',
      },
      {
        word: 'They',
        meaning: 'Ellos/Ellas',
        example: 'They work at a tech company.',
        exampleTranslation: 'Ellos/Ellas trabajan en una empresa tecnológica.',
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
        example: 'This is my book.',
        exampleTranslation: 'Este es mi libro.',
      },
      {
        word: 'That',
        meaning: 'Eso',
        example: 'That is your car.',
        exampleTranslation: 'Ese es tu coche.',
      },
      {
        word: 'These',
        meaning: 'Estos',
        example: 'These are my keys.',
        exampleTranslation: 'Estas son mis llaves.',
      },
      {
        word: 'Those',
        meaning: 'Esos',
        example: 'Those are your shoes.',
        exampleTranslation: 'Esos son tus zapatos.',
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
        example: 'I did it myself.',
        exampleTranslation: 'Lo hice yo mismo.',
      },
      {
        word: 'Yourself',
        meaning: 'Tú mismo',
        example: 'You can do it yourself.',
        exampleTranslation: 'Puedes hacerlo tú mismo.',
      },
      {
        word: 'Himself',
        meaning: 'Él mismo',
        example: 'He built it himself.',
        exampleTranslation: 'Él lo construyó él mismo.',
      },
      {
        word: 'Herself',
        meaning: 'Ella misma',
        example: 'She baked the cake herself.',
        exampleTranslation: 'Ella horneó el pastel por sí misma.',
      },
      {
        word: 'Itself',
        meaning: 'Sí mismo',
        example: 'The dog hurt itself.',
        exampleTranslation: 'El perro se lastimó a sí mismo.',
      },
      {
        word: 'Ourselves',
        meaning: 'Nosotros mismos',
        example: 'We cleaned the house ourselves.',
        exampleTranslation: 'Nosotros limpiamos la casa por nosotros mismos.',
      },
      {
        word: 'Yourselves',
        meaning: 'Ustedes mismos',
        example: 'You should organize yourselves.',
        exampleTranslation: 'Ustedes deberían organizarse.',
      },
      {
        word: 'Themselves',
        meaning: 'Ellos mismos',
        example: 'They repaired the car themselves.',
        exampleTranslation: 'Ellos mismos repararon el coche.',
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
        example: 'Who is calling me?',
        exampleTranslation: '¿Quién me está llamando?',
      },
      {
        word: 'Whom',
        meaning: 'A quién',
        example: 'Whom did you meet yesterday?',
        exampleTranslation: '¿A quién conociste ayer?',
      },
      {
        word: 'Whose',
        meaning: 'De quién',
        example: 'Whose jacket is this?',
        exampleTranslation: '¿De quién es esta chaqueta?',
      },
      {
        word: 'What',
        meaning: 'Qué',
        example: 'What are you doing?',
        exampleTranslation: '¿Qué estás haciendo?',
      },
      {
        word: 'Which',
        meaning: 'Cuál',
        example: 'Which is your favorite movie?',
        exampleTranslation: '¿Cuál es tu película favorita?',
      },
      {
        word: 'Where',
        meaning: 'Dónde',
        example: 'Where do you live?',
        exampleTranslation: '¿Dónde vives?',
      },
      {
        word: 'Why',
        meaning: 'Por qué',
        example: 'Why are you late?',
        exampleTranslation: '¿Por qué llegaste tarde?',
      },
      {
        word: 'When',
        meaning: 'Cuándo',
        example: 'When will the meeting start?',
        exampleTranslation: '¿Cuándo empezará la reunión?',
      },
      {
        word: 'How',
        meaning: 'Cómo',
        example: 'How do you solve this problem?',
        exampleTranslation: '¿Cómo resuelves este problema?',
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
        example: 'This book is mine.',
        exampleTranslation: 'Este libro es mío.',
      },
      {
        word: 'Yours',
        meaning: 'Tuyo',
        example: 'The laptop is yours.',
        exampleTranslation: 'La laptop es tuya.',
      },
      {
        word: 'His',
        meaning: 'Suyo (de él)',
        example: 'The car is his.',
        exampleTranslation: 'El coche es suyo.',
      },
      {
        word: 'Hers',
        meaning: 'Suyo (de ella)',
        example: 'This scarf is hers.',
        exampleTranslation: 'Esta bufanda es suya.',
      },
      {
        word: 'Its',
        meaning: 'Suyo (de ello)',
        example: 'The tail is its.',
        exampleTranslation: 'La cola es suya.',
      },
      {
        word: 'Ours',
        meaning: 'Nuestro',
        example: 'The house is ours.',
        exampleTranslation: 'La casa es nuestra.',
      },
      {
        word: 'Theirs',
        meaning: 'Suyo (de ellos/ellas)',
        example: 'The idea was theirs.',
        exampleTranslation: 'La idea fue de ellos.',
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
        example: 'The teacher who explained this is kind.',
        exampleTranslation: 'El maestro que explicó esto es amable.',
      },
      {
        word: 'Whom',
        meaning: 'A quién',
        example: 'The person whom you called is here.',
        exampleTranslation: 'La persona a quien llamaste está aquí.',
      },
      {
        word: 'Whose',
        meaning: 'Cuyo',
        example: 'The boy whose dog is lost is sad.',
        exampleTranslation: 'El niño cuyo perro está perdido está triste.',
      },
      {
        word: 'Which',
        meaning: 'El cual',
        example: 'The pen which I borrowed is yours.',
        exampleTranslation: 'El bolígrafo que tomé prestado es tuyo.',
      },
      {
        word: 'That',
        meaning: 'Que',
        example: 'The book that you read is amazing.',
        exampleTranslation: 'El libro que leíste es asombroso.',
      },
    ],
  },
  {
    id: 7,
    title: 'Possessive adjectives',
    ingles:
      'Used to indicate possession or ownership, always followed by a noun.',
    espanol:
      'Se utilizan para indicar posesión o pertenencia, siempre seguidos de un sustantivo.',
    pronoun: [
      {
        word: 'My',
        meaning: 'Mi',
        example: 'This is my car.',
        exampleTranslation: 'Este es mi coche.',
      },
      {
        word: 'Your',
        meaning: 'Tu',
        example: 'Your house is big.',
        exampleTranslation: 'Tu casa es grande.',
      },
      {
        word: 'His',
        meaning: 'Su (de él)',
        example: 'His dog is friendly.',
        exampleTranslation: 'Su perro es amigable.',
      },
      {
        word: 'Her',
        meaning: 'Su (de ella)',
        example: 'Her dress is beautiful.',
        exampleTranslation: 'Su vestido es hermoso.',
      },
      {
        word: 'Its',
        meaning: 'Su (de eso)',
        example: 'The cat is licking its paw.',
        exampleTranslation: 'El gato está lamiendo su pata.',
      },
      {
        word: 'Our',
        meaning: 'Nuestro',
        example: 'Our team won the game.',
        exampleTranslation: 'Nuestro equipo ganó el juego.',
      },
      {
        word: 'Your',
        meaning: 'Su / Vuestro',
        example: 'Your ideas are creative.',
        exampleTranslation: 'Sus ideas son creativas.',
      },
      {
        word: 'Their',
        meaning: 'Su (de ellos/ellas)',
        example: 'Their house is near the park.',
        exampleTranslation: 'Su casa está cerca del parque.',
      },
    ],
  },
  {
    id: 8,
    title: 'Object pronouns',
    ingles:
      'Used as the object of a verb or preposition, receiving the action.',
    espanol:
      'Se utilizan como objeto de un verbo o preposición, recibiendo la acción.',
    pronoun: [
      {
        word: 'Me',
        meaning: 'Me / A mí',
        example: 'She told me a story.',
        exampleTranslation: 'Ella me contó una historia.',
      },
      {
        word: 'You',
        meaning: 'Te / A ti',
        example: 'I will help you.',
        exampleTranslation: 'Te ayudaré.',
      },
      {
        word: 'Him',
        meaning: 'Lo / A él',
        example: 'I saw him at the park.',
        exampleTranslation: 'Lo vi en el parque.',
      },
      {
        word: 'Her',
        meaning: 'La / A ella',
        example: 'We called her yesterday.',
        exampleTranslation: 'La llamamos ayer.',
      },
      {
        word: 'It',
        meaning: 'Lo / La (para cosas o animales)',
        example: 'Did you fix it?',
        exampleTranslation: '¿Lo arreglaste?',
      },
      {
        word: 'Us',
        meaning: 'Nos / A nosotros(as)',
        example: 'They invited us to the party.',
        exampleTranslation: 'Nos invitaron a la fiesta.',
      },
      {
        word: 'You',
        meaning: 'Los / Las / A ustedes',
        example: 'We saw you at the concert.',
        exampleTranslation: 'Los vimos en el concierto.',
      },
      {
        word: 'Them',
        meaning: 'Los / Las / A ellos(as)',
        example: 'I met them at the mall.',
        exampleTranslation: 'Los conocí en el centro comercial.',
      },
    ],
  },
  {
    id: 9,
    title: 'Modal verbs',
    ingles: 'Used to express ability, possibility, permission, or obligation.',
    espanol:
      'Se utilizan para expresar habilidad, posibilidad, permiso u obligación.',
    pronoun: [
      {
        word: 'Can',
        meaning: 'Poder (habilidad)',
        example: 'I can swim.',
        exampleTranslation: 'Yo puedo nadar.',
      },
      {
        word: 'Could',
        meaning: 'Podría (habilidad pasada o posibilidad)',
        example: 'She could play the piano.',
        exampleTranslation: 'Ella podía tocar el piano.',
      },
      {
        word: 'May',
        meaning: 'Poder (posibilidad o permiso)',
        example: 'You may leave early.',
        exampleTranslation: 'Tú puedes salir temprano.',
      },
      {
        word: 'Might',
        meaning: 'Podría (posibilidad)',
        example: 'It might rain today.',
        exampleTranslation: 'Podría llover hoy.',
      },
      {
        word: 'Must',
        meaning: 'Deber (obligación)',
        example: 'You must wear a seatbelt.',
        exampleTranslation: 'Debes usar el cinturón de seguridad.',
      },
      {
        word: 'Shall',
        meaning: 'Debería (formal o sugerencia)',
        example: 'Shall we go?',
        exampleTranslation: '¿Deberíamos ir?',
      },
      {
        word: 'Should',
        meaning: 'Debería (consejo)',
        example: 'You should eat more vegetables.',
        exampleTranslation: 'Deberías comer más verduras.',
      },
      {
        word: 'Will',
        meaning: 'Futuro (voluntad)',
        example: 'I will call you tomorrow.',
        exampleTranslation: 'Te llamaré mañana.',
      },
      {
        word: 'Would',
        meaning: 'Haría (condicional)',
        example: 'I would travel if I had money.',
        exampleTranslation: 'Viajaría si tuviera dinero.',
      },
      {
        word: 'Need',
        meaning: 'Necesitar (obligación)',
        example: 'You need to study harder.',
        exampleTranslation: 'Necesitas estudiar más.',
      },
    ],
  },
];
