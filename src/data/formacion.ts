export interface FormacionGrupo {
  title: string;
  icon: string;
  items: string[];
}

export const formacion: FormacionGrupo[] = [
  {
    title: 'Formación de base',
    icon: 'graduation',
    items: ['Licenciada en Psicología Clínica, Universidad UNIACC (2020 – 2025)'],
  },
  {
    title: 'Diplomados',
    icon: 'graduation',
    items: [
      'Diplomado en Psicopatología en la Infancia y Adolescencia (2025)',
      'Diplomado en Abordaje en Adicciones (2026)',
    ],
  },
  {
    title: 'Cursos de especialización',
    icon: 'graduation',
    items: [
      'Trastorno Límite de la Personalidad desde Terapia Dialéctica Conductual (2026)',
      'Introducción a la Psicopatología en la Infancia y Adolescencia (40 hr., 2025)',
      'Estrategias de Intervención en Psicología del Vínculo (40 hr., 2025)',
      'Herramientas de Evaluación en Infancia Temprana (40 hr., 2025)',
      'Observación y Mediciones Clínicas para Adolescentes (40 hr., 2025)',
      'Informe Pericial Psicológico Forense para Tribunales de Familia',
    ],
  },
  {
    title: 'Seminarios',
    icon: 'graduation',
    items: [
      'Ley 21.675 y Violencia de Género',
      'Psicodiagnóstico Infantil',
      'Prevención del Acoso Escolar',
      'Violencia Psicológica',
    ],
  },
];
