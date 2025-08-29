import tailwindcss from "@tailwindcss/vite";
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://blog.isenschmid.dev',
  integrations: [mdx(), sitemap()],
  server: {
    host: true,
    allowedHosts: ['blog.isenschmid.dev']
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
