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
      'Psicóloga clínica con experiencia en evaluación, diagnóstico e intervención psicoterapéutica en población infantojuvenil y adulta.',
      'Se ha formado en Psicopatología Infantojuvenil, Terapia Cognitivo-Conductual, Terapia Sistémica y Terapia Dialéctica Conductual (DBT) en Trastorno Límite de la Personalidad (TLP).',
    ],
    highlights: ['Niños y adolescentes', 'Adultos', 'Presencial y online'],
  },
  {
    slug: 'fernando-palma',
    name: 'Fernando Palma',
    role: 'Psicólogo',
    initials: 'FP',
    bio: [
      'Psicólogo con más de 20 años de experiencia en la atención psicológica de adultos.',
      'Su trayectoria enriquece cada proceso terapéutico dentro del equipo de Psiconido.',
    ],
    highlights: ['Adultos', 'Más de 20 años de experiencia'],
  },
];
