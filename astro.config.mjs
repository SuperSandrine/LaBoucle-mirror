// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'


import tailwindcss from '@tailwindcss/vite';


import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],

  //static?
  output: 'hybrid',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});