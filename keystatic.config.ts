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
        genreEtRegistre: fields.text({label: 'Genre et Registre'}),
        creation: fields.text({label: 'Date de création'}),
        interprete: fields.text({label: "Nombre d'inteprète"}),
        espace: fields.text({label: "Type d'espace"}),
        espaceDetail: fields.text({
          label: 'Détails type de lieu, terrain', 
          multiline: true }),
        writeAndGame: fields.text({label: 'Ecriture et jeu'}),
        otherPartRole: fields.text({label: 'Le rôle des autres participants'}),
        otherPart: fields.text({
          label: 'Autres participants',
          multiline: true }),
        costume: fields.text({label: 'Costumier-e'}),
        decor: fields.text({label: 'Décorateur-e'}),
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
        }),

        public: fields.text({
          label: 'Public',
          description: 'ex : Adultes, tous niveaux',
        }),

        tarif: fields.text({
          label: 'Tarif (résumé court)',
          description: 'Affiché sur la carte. ex : 150€ – 200€',
        }),

        tarifDetail: fields.text({
          label: 'Tarifs détaillés',
          multiline: true,
          description: 'Texte complet avec les différentes paliers, affiché sur la page complète',
        }),

        lieu: fields.text({
          label: 'Lieu',
          description: 'ex : Espace Confluence, Bourganeuf (23)',
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

        prochainsDates: fields.array(
          fields.text({ label: 'Date' }),
          {
            label: 'Prochaines dates',
            description: 'Ajouter une ligne par date. ex : Du 30 janvier au 2 février 2026',
            itemLabel: (props) => props.value || 'Nouvelle date',
          }
        ), // est ce que ça marche en dépit de la correction?

        statut: fields.select({
          label: 'Statut des inscriptions',
          options: [
            { label: 'Inscriptions ouvertes', value: 'ouvert' },
            { label: 'Complet', value: 'complet' },
            { label: 'Bientôt disponible', value: 'bientot' },
          ],
          defaultValue: 'ouvert',
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
        titreFichier: fields.slug({name:{ label: 'Titre + date'} }),
        date: fields.date({ 
          label: "Date de l'événement"
          // validation: { isRequired: true } // ← Obligatoire
        }),
        lieu: fields.text({ label: 'Lieu', description: 'la ville avec une majuscule et le numéro de département entre parenthèse, exemple : Bayonne (64)' }),
        titre: fields.relationship({ 
          label: 'Titre', 
          description: 'La liste des spectacles du répertoire', collection: 'spectacles'}),
        type: fields.select({
          label: "Type d'évènement ",
          options: [
            { label: 'Spectacle', value: 'spectacle' },
            { label: 'Stage', value: 'stage' }
          ],
          defaultValue: 'spectacle'
        }),
        contenu: fields.markdoc({ 
      label: 'informations complémentaires'
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
