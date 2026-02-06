// keystatic.config.ts
import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'SuperSandrine',
      name: 'LaBoucle-mirror',
    },
  
    //kind: 'local',  // On commence en local, on passera à Git plus tard
    //repo: {
    //  owner: 'ton-utilisateur', // Ton pseudo Codeberg/GitHub
     // name: 'site-clownesque',  // Nom du dépôt
      //branch: 'main',          // Branche par défaut
    //},
  },
  collections: {
    spectacles: collection({
      label: 'Spectacles',
      slugField: 'title',
      path: 'src/content/spectacles/*', // Chemin vers tes fichiers Markdown
      format: { contentField: 'contenu' },
      schema: {
        title: fields.slug({ name: { label: 'Titre du spectacle' } }),
        //date: fields.date({ label: 'Date' }),
        // lieu: fields.text({ label: 'Lieu' }),
        visuel: fields.image({
          label: 'Visuel',
          directory: 'public/images/spectacles',
          publicPath: '/images/spectacles',
        }),
        synopsis: fields.text({ label: 'Synopsis' }),
        duree: fields.text({ label: 'Durée' }),
        public: fields.text({label: 'Public'}),
        contenu: fields.markdoc({ label: 'Contenu' }),
      },
    }),
    dates: collection({
      label: 'Dates',
      slugField: 'titrefichier',
      path: 'src/content/dates/*',
      format: { contentField: 'contenu' },
      schema: {
                titrefichier: fields.slug({name:{ label: 'Titre + date'} }),

        date: fields.date({ 
          label: "Date de l'événement"
          // validation: { isRequired: true } // ← Obligatoire
    }),
        year: fields.text({ label: 'Année' }),
        lieu: fields.text({ label: 'Lieu' }),
        titre: fields.text({ label: 'Titre' }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Spectacle', value: 'spectacle' },
            { label: 'Stage', value: 'stage' }
          ],
          defaultValue: 'spectacle'
        }),
        contenu: fields.markdoc({ 
      label: 'Contenu'
    }),
      }
    })
    // ateliers: collection({
    //   label: 'Ateliers',
    //   slugField: 'title',
    //   path: 'src/content/ateliers/*',
    //   schema: {
    //     title: fields.text({ label: 'Titre' }),
    //     date: fields.date({ label: 'Date' }),
    //     content: fields.markdoc({ label: 'Contenu' }),
    //   },
    // }),
  },
});
