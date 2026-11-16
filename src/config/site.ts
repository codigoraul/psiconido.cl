/**
 * Configuración central de Psiconido.
 * Todo dato de contacto, agenda y ubicación se edita SOLO aquí.
 * Más adelante estos valores se pueden leer desde WordPress headless.
 */
export const site = {
  name: 'PsicoNido',
  url: 'https://psiconido.cl',
  tagline: 'Psicología clínica para niñas, niños, adolescentes y adultos',
  description:
    'Psiconido: atención psicológica clínica para niñas, niños, adolescentes y adultos, de forma presencial y online. Un espacio seguro, cálido y confidencial para tu bienestar emocional.',

  owner: {
    name: 'Andrea Jara Parada',
    firstName: 'Andrea',
    role: 'Psicóloga clínica',
  },

  // Contacto
  phone: '+56948781574',
  phoneDisplay: '+56 9 4878 1574',
  email: 'psi.andreajarap@gmail.com',
  whatsappMessage: 'Hola Andrea, me gustaría agendar una hora en Psiconido.',

  // Agenda online. Pegar aquí el enlace de Encuadrado cuando esté disponible.
  // Mientras esté vacío, el botón de Encuadrado no se muestra.
  encuadradoUrl: 'https://encuadrado.com/p/ps-andrea-jara-parada',

  // Ubicación (atención presencial). Completar cuando se confirme.
  // Mientras esté vacío, la sección de mapa y dirección no se muestra.
  address: '',
  city: '',
  mapEmbedUrl: '',

  modalities: ['Presencial', 'Online'],

  // Redes sociales (dejar vacío para ocultar)
  instagram: '',
};

export const nav = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros/' },
  { label: 'Áreas de atención', href: '/areas-de-atencion/' },
  { label: 'Contacto', href: '/contacto/' },
];

export function whatsappLink(message: string = site.whatsappMessage): string {
  const number = site.phone.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Frase de ciudad para títulos y descripciones SEO. Se rellena sola cuando site.city tenga valor. */
export const cityPhrase = site.city ? ` en ${site.city}` : '';

/** Palabras clave del sitio (sirven de base para textos, schema y meta keywords). */
export const seoKeywords = [
  'psicóloga clínica',
  'psicóloga infantil',
  'psicólogo para adolescentes',
  'psicoterapia infantil y adolescente',
  'psicoterapia de adultos',
  'psicoterapia online',
  'evaluación psicológica',
  'diagnóstico psicológico infantil',
  'psicodiagnóstico infantil',
  'orientación a padres',
  'terapia cognitivo-conductual',
  'terapia sistémica',
  'psicología del vínculo',
  'Psiconido',
];

/** Prefijo de ruta (vacío en la raíz, "/prueba" en la copia de prueba). */
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Antepone el prefijo a una ruta absoluta del sitio, ej: withBase('/logo/x.svg'). */
export const withBase = (p: string) => base + p;
/** True cuando el sitio se publica bajo un prefijo (copia de prueba): no debe indexarse. */
export const isTestSite = base !== '';
