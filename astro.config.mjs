// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site:'https://laboucledelaboucle.fr',
  output: 'server',
  integrations: [react(), markdoc(), keystatic(), sitemap({
    filter: (page) => !page.includes('/admin') && !page.includes('/keystatic'),
    customPages: [
      'https://laboucledelaboucle.fr/spectacles/comment-devenir-riche',
      'https://laboucledelaboucle.fr/spectacles/la-lutte-finale',
      'https://laboucledelaboucle.fr/spectacles/prince-sse-pudeur',
      'https://laboucledelaboucle.fr/spectacles/baignoire',
    ],
  })],  // dans la doc de astro: https://docs.astro.build/fr/guides/cms/keystatic/
  //  integrations: [react(), markdoc()],
  adapter: netlify(),

  //static?
  // 12:05:01 PM: ! The output: "hybrid" option has been removed. Use output: "static" (the default) instead, which now behaves the same way.

  //output: 'server',
  //output: 'server',

  vite: {
    plugins: [tailwindcss()],
    // ssr: {
    //   external: ['@keystatic/astro'],
    //   noExternal: [
    //     '@astrojs/react']
    // },
    build: {
    rollupOptions: {
      output: {
        manualChunks: {
          keystatic: ['@keystatic/astro']  // met Keystatic dans un fichier séparé
        }
      }
    }
  }
  },

//  adapter: netlify(),
});
