import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH werden beim GitHub-Pages-Build gesetzt (siehe scripts/deploy-pages.sh).
const base = (process.env.BASE_PATH ?? '').replace(/\/$/, '');

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://www.vz-projects.de',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  redirects: { '/kontakt': `${base}/anfrage` },
});
