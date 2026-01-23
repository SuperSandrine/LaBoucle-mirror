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
  // 12:05:01 PM: ! The output: "hybrid" option has been removed. Use output: "static" (the default) instead, which now behaves the same way.

  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});