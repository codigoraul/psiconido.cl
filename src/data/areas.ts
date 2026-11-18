export interface Area {
  slug: string;
  icon: string;
  image: string;
  title: string;
  short: string;
  long: string;
  topics: string[];
}

export const areas: Area[] = [
  {
    slug: 'ninos-adolescentes',
    image: '/img/areas/ninos-adolescentes.jpg',
    icon: 'sprout',
    title: 'Niñas, niños y adolescentes',
    short:
      'Acompañamiento en desarrollo, autoestima, regulación emocional y adaptación.',
    long:
      'Acompaño a niñas, niños y adolescentes en sus procesos de desarrollo, autoestima, regulación emocional y adaptación, brindando también orientación y apoyo a sus familias.',
    topics: [
      'Desarrollo emocional',
      'Autoestima',
      'Manejo y reconocimiento de emociones',
      'Ansiedad y estrés',
      'Duelo',
      'Bullying',
      'Depresión',
      'Autolesiones',
      'Ideación suicida',
      'Trastorno Límite de la Personalidad (TLP)',
      'Orientación y apoyo a la familia',
    ],
  },
  {
    slug: 'orientacion-familias',
    image: '/img/areas/orientacion-familias.jpg',
    icon: 'users',
    title: 'Orientación a familias',
    short:
      'Orientación y apoyo a las familias de niñas, niños y adolescentes durante su proceso.',
    long:
      'Brindo orientación y apoyo a las familias de niñas, niños y adolescentes, porque el bienestar de cada etapa también se construye en conjunto con quienes los rodean.',
    topics: [
      'Crianza y competencias parentales',
      'Gestión emocional y vínculos familiares',
      'Dificultades conductuales y emocionales',
      'Familia y desarrollo infantil',
      'Autocuidado y bienestar parental',
    ],
  },
  {
    slug: 'evaluacion-diagnostico',
    image: '/img/areas/evaluacion-diagnostico.jpg',
    icon: 'clipboard',
    title: 'Evaluación y diagnóstico',
    short:
      'Evaluación psicológica y diagnóstico en población infantojuvenil.',
    long:
      'Realizo evaluación, diagnóstico e intervención psicoterapéutica en población infantojuvenil, a partir de una mirada clínica cuidadosa de cada caso.',
    topics: [
      'Evaluación psicológica infantojuvenil',
      'Diagnóstico clínico',
      'Intervención psicoterapéutica',
    ],
  },
];

export const enfoques = [
  {
    title: 'Terapia Cognitivo-Conductual (TCC)',
    text: 'Trabajamos la relación entre pensamientos, emociones y conductas, desarrollando herramientas para afrontar dificultades, fortalecer la autoestima y favorecer respuestas más saludables.',
  },
  {
    title: 'Terapia Sistémica',
    text: 'Comprendemos a cada niño y adolescente dentro de su contexto familiar y social, promoviendo vínculos saludables, una comunicación positiva y la participación de los padres en el proceso terapéutico.',
  },
  {
    title: 'Terapia Dialéctico-Conductual (DBT)',
    text: 'Formación en DBT para el abordaje del Trastorno Límite de la Personalidad (TLP).',
  },
  {
    title: 'Terapia de Juego',
    text: 'La terapia de juego es una herramienta psicoterapéutica especialmente utilizada en niños y niñas, que permite explorar y comprender su mundo emocional a través del juego, la creatividad, los juguetes, el dibujo y la expresión simbólica.\n\nDesde la mirada psicológica, el juego es el lenguaje natural de la infancia. Muchas veces, los niños no cuentan con las palabras necesarias para expresar lo que sienten, pero pueden comunicar sus emociones, preocupaciones, temores y experiencias mediante sus juegos.',
  },
];

export const pasos = [
  {
    title: 'Agenda tu hora',
    text: 'Reserva en Encuadrado o escríbeme directamente por WhatsApp.',
  },
  {
    title: 'Elige tu modalidad',
    text: 'La atención puede ser presencial u online, según lo que te acomode.',
  },
  {
    title: 'Comencemos a tu ritmo',
    text: 'Consideramos tu historia, tus necesidades y tus tiempos en cada paso del proceso.',
  },
];
