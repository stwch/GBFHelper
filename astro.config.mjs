// @ts-check
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { subfont } from './subfont-integration';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://gbf-helper.com',

  integrations: [
    react(),
    subfont(),
    sitemap(),
    playformCompress(),
  ],
});