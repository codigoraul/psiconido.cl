import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// En producción (raíz del dominio) no se define SITE_BASE.
// Para la copia de prueba en psiconido.cl/prueba se compila con SITE_BASE=/prueba.
export default defineConfig({
  site: 'https://psiconido.cl',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
