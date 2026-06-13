// keystatic.config.ts
// TODO: rendre le formulaire plus user friendly en prévenant des champs obligatoire avant la soumission, pour que les champs manquants ne soient pas bloquants.


import { config, collection, fields } from '@keystatic/core';

//const isDevelopment = process.env.NODE_ENV !== 'production';

export default config({
//  storage: isDevelopment
    // ? { kind: 'local' }
    // : {
    //     kind: 'github',
    //     repo: {
    //       owner: 'SuperSandrine',
    //       name: 'LaBoucle-mirror',
    //     },
    //   },
  storage: { kind: 'github', 
      repo: {
           owner: 'SuperSandrine',
           name: 'LaBoucle-mirror',
        }, },
  collections: {
    spectacles: collection({
      label: 'Spectacles',
      slugField: 'title',
      path: 'src/content/spectacles/*', // Chemin vers tes fichiers Markdown
      format: { contentField: 'contenu' },
      schema: {
        title: fields.slug({ name: { 
          label: 'Titre du spectacle' } }),
        //date: fields.date({ label: 'Date' }),
        // lieu: fields.text({ label: 'Lieu' }),
        visuel: fields.image({
          label: 'Visuel',
          directory: 'public/images/spectacles',
          publicPath: '/images/spectacles',
          validation: { isRequired: true },
        }),
        synopsis: fields.text({ 
          label: 'Synopsis',
          multiline: true,
          validation: { isRequired: true },
        }),
        duree: fields.text({ 
          label: 'Durée',
          validation: { isRequired: true }, 
        }),
        public: fields.text({
          label: 'Public', 
          description: 'Exemple: "Tout public dès 12 ans" ou "Tout public"',
          validation: { isRequired: true },
        }),
        genreEtRegistre: fields.text({label: 'Genre et Registre'}),
        creation: fields.text({
          label: 'Date de création',
          validation: { isRequired: true },
        }),
        interprete: fields.text({label: "Nombre d'inteprètes"}),
        espace: fields.text({label: "Type d'espace"}),
        espaceDetail: fields.text({
          label: 'Détails sur le type de lieu, terrain', 
          multiline: true }),
        writeAndGame: fields.text({label: 'Ecriture et jeu'}),
        otherPartRole: fields.text({label: 'Le rôle des autres participants'}),
        otherPart: fields.text({
          label: 'Autres participants',
          multiline: true }),
        support: fields.text({label: 'Soutien à la création'}),
        costume: fields.text({label: 'Costumier-e'}),
        decor: fields.text({label: 'Scénographe'}),
        contenu: fields.markdoc({ label: 'Contenu' }),
      },
    }),

// ─────────────────────────────────────────
    // STAGES & ATELIERS
    // ─────────────────────────────────────────
    stages: collection({
      label: 'Stages & Ateliers',
      slugField: 'title',
      path: 'src/content/stages/*',
      format: { contentField: 'contenu' },
      schema: {
        title: fields.slug({ name: { label: 'Titre du stage ou atelier' } }),

        typeActivite: fields.select({
          label: "Type d'activité",
          options: [
            { label: 'Stage (plusieurs jours)', value: 'stage' },
            { label: 'Atelier mensuel', value: 'atelier' },
          ],
          defaultValue: 'stage',
        }),

        format: fields.text({
          label: 'Format court',
          description: 'ex : 4 jours intensifs · 9h30–17h30',
        }),

        visuel: fields.image({
          label: 'Visuel',
          // Toutes les images de stages dans un seul dossier
          directory: 'public/images/stages',
          publicPath: '/images/stages',
        }),

        synopsis: fields.text({
          label: 'Synopsis',
          multiline: true,
          description: 'Résumé court affiché sur la carte (2-3 phrases max)',
        }),

        duree: fields.text({
          label: 'Durée',
          description: 'ex : 4 jours · 9h30–17h30, ou : 1 jour/mois + 2 week-ends',
          validation: { isRequired: true },
        }),

        public: fields.text({
          label: 'Public',
          description: 'ex : Adultes, tous niveaux',
          validation: { isRequired: true },
        }),

        tarif: fields.text({
          label: 'Tarif (résumé court)',
          description: 'Affiché sur la carte. ex : 150€ – 200€',
          validation: { isRequired: true },
        }),

        tarifDetail: fields.text({
          label: 'Tarifs détaillés',
          multiline: true,
          description: 'Texte complet avec les différentes paliers, affiché sur la page complète',
        }),

        lieu: fields.text({
          label: 'Lieu',
          description: 'ex : Espace Confluence, Bourganeuf (23)',
          validation: { isRequired: true },
        }),

        lieuDetail: fields.text({
          label: 'Détails sur le lieu',
          multiline: true,
          description: 'Accessibilité, équipements, hébergement... (optionnel)',
        }),

        pedagogues: fields.text({
          label: 'Pédagogues',
          description: 'ex : Annabelle Vaillant & Leo Sciarrino',
        }),

        emailContact: fields.text({
          label: 'Email de contact / inscription',
          description: 'ex : laboucledelaboucle@gmail.com',
        }),

        // prochainsDates: fields.array(
        //   fields.text({ label: 'Date' }),
        //   {
        //     label: 'Prochaines dates',
        //     description: 'Ajouter une ligne par date. ex : Du 30 janvier au 2 février 2026',
        //     itemLabel: (props) => props.value || 'Nouvelle date',
        //   }
        // ), // est ce que ça marche en dépit de la correction?

        statut: fields.select({
          label: 'Statut des inscriptions',
          options: [
            { label: 'Inscriptions ouvertes', value: 'ouvert' },
            { label: 'Complet', value: 'complet' },
            { label: 'Bientôt disponible', value: 'bientot' },
          ],
          defaultValue: 'ouvert',
        }),

        prochainsDates: fields.text({
          label:'Indication sur les prochaines inscriptions',
          description: 'Exemple: "Prochaine inscription à partie juillet pour 2026/27."'
        }),

        contenu: fields.markdoc({ label: 'Contenu (texte de présentation)' }),
      },
    }),

    // ─────────────────────────────────────────
    // DATES (calendrier)
    // ─────────────────────────────────────────
    dates: collection({
      label: 'Dates',
      slugField: 'titreFichier',
      path: 'src/content/dates/*',
      format: { contentField: 'contenu' },
      schema: {
        titreFichier: fields.slug({
          name:{ 
            label: 'Titre + date', 
            description: 'Le format de date est : AAAA/MM/JJ, utiliser le format de titre de fichier suivant "Titre + AAAA/MM/JJ"; exemple: PatPatrouille + 2018/03/27', 
            validation: { isRequired: true }
          }
        }),
        date: fields.date({ 
          label: "Date de début",
          validation: { isRequired: true } // ← Obligatoire
        }),
        dateFin: fields.date({
          label: "Date de fin (optionnel)",
          description: "Renseigner uniquement si l'événement dure 2 jours ou plus (exemple: stages).",
        }),
        heure: fields.text({
          label: 'Heure',
          description: "Optionnel — format: 20h30 ou 15h00",
        }),
        lieu: fields.text({ label: 'Lieu', description: 'La ville avec une majuscule et le numéro de département entre parenthèse; exemple: Bayonne (64)' }),
        evenement: fields.conditional(
          fields.select({
            label: "Type d'évènement",
            options: [
              { label: 'Spectacle', value: 'spectacle' },
              { label: 'Stage', value: 'stage' }
            ],
            defaultValue: 'spectacle'
          }),
          {
            spectacle: fields.relationship({
              label: 'Titre du spectacle',
              description: 'Choisir un spectacle du répertoire',
              collection: 'spectacles',
              validation: { isRequired: true },
            }),
            stage: fields.relationship({
              label: 'Titre du stage ou at',
              description: 'Choisir un stage/atelier',
              collection: 'stages',
              validation: { isRequired: true },
            }),
          }
        ),
        
        contenu: fields.markdoc({ 
      label: 'informations complémentaires'
    }),
      }
    }),
    // ─────────────────────────────────────────
    // GALERIE
    // ─────────────────────────────────────────
    galerie: collection({
      label: 'Galerie',
      slugField: 'titreFichier',
      path: 'src/content/galerie/*',
      format: { data: 'yaml' },
      schema: {
        titreFichier: fields.slug({
          name: {
            label: 'Titre de la photo',
            description: 'Un titre court pour identifier la photo (ex: "Prince-sse Pudeur - répétition 2024")',
          },
        }),
        image: fields.image({
          label: 'Photo',
          directory: 'public/images/galerie',
          publicPath: '/images/galerie',
          validation: { isRequired: true },
        }),
        legende: fields.text({
          label: 'Légende',
          description: 'Optionnel — texte affiché sous la photo',
        }),
        categorie: fields.conditional(
          fields.select({
            label: 'Catégorie',
            options: [
              { label: 'Spectacle', value: 'spectacle' },
              { label: 'Stage', value: 'stage' },
              { label: 'Artiste', value: 'artiste' },
            ],
            defaultValue: 'spectacle',
          }),
          {
            spectacle: fields.relationship({
              label: 'Spectacle associé',
              collection: 'spectacles',
            }),
            stage: fields.relationship({
              label: 'Stage associé',
              collection: 'stages',
            }),
            artiste: fields.text({
              label: "Nom de l'artiste",
            }),
          }
        ),
      },
    }),
  },
});
