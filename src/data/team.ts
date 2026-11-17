export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  initials: string;
  photo?: string; // ruta en /public, ej: '/equipo/andrea.jpg'
  bio: string[];
  highlights: string[];
}

export const team: TeamMember[] = [
  {
    slug: 'andrea-jara',
    name: 'Andrea Jara Parada',
    role: 'Psicóloga clínica',
    initials: 'AJ',
    photo: '/equipo/andrea.jpg',
    bio: [
      'Psicóloga clínica con experiencia en evaluación, diagnóstico e intervención psicoterapéutica en población infantojuvenil.',
      'Se ha formado en Psicopatología Infantojuvenil, Terapia Cognitivo-Conductual, Terapia Sistémica, Terapia Dialéctica Conductual (DBT) en Trastorno Límite de la Personalidad (TLP) y Terapia de Juego.',
    ],
    highlights: ['Niñas, niños y adolescentes', 'Orientación a familias', 'Presencial y online'],
  },
  {
    slug: 'fernando-palma',
    name: 'Fernando Palma',
    role: 'Psicólogo clínico',
    initials: 'FP',
    photo: '/equipo/fernando.jpg',
    bio: [
      'Psicólogo con más de 20 años de experiencia en la atención psicológica de adultos y terapia de pareja.',
      'Su trayectoria enriquece cada proceso terapéutico dentro del equipo de Psiconido.',
    ],
    highlights: ['Adultos', 'Terapia de pareja', 'Más de 20 años de experiencia'],
  },
];
