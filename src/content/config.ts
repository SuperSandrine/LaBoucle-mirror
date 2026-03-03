import { defineCollection, z } from 'astro:content';

const spectaclesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    visuel: z.string(),
    synopsis: z.string(),
    duree: z.string(),
    public: z.string(),
    genreEtRegistre: z.string(),
    creation: z.string(),
    interprete: z.string(),
    espace: z.string(),
    espaceDetail: z.string(),
    writeAndGame: z.string(),
    otherPartRole : z.string(),
    otherPart: z.string(),
    costume: z.string(),
    decor: z.string(),
    // ... autres champs
  }),
});

const datesCollection = defineCollection({
    type: 'content',
    schema: z.object({
      titreFichier: z.string(),
      //date: z.coerce.date(),// ajouter la possibilité de recevoir un format date ou string
      date: z.union([z.coerce.date(), z.string()]).transform((val) => new Date(val)),
      lieu: z.string(),
      titre: z.string(),
      type: z.string(),
    }),
});

const stagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // --- Identité ---
    title: z.string(),
    // "stage" pour les stages 4 jours, "atelier" pour l'atelier mensuel
    typeActivite: z.enum(['stage', 'atelier']),
    // Sous-titre / format court (ex: "4 jours intensifs", "Mensuel + 2 week-ends")
    format: z.string(),
    visuel: z.string(),
    synopsis: z.string(),

    // --- Méta affichées sur la carte ---
    duree: z.string(),        // ex: "4 jours, 9h30-17h30"
    public: z.string(),       // ex: "Adultes, tous niveaux"
    tarif: z.string(),        // ex: "150€ – 200€" (résumé court pour la carte)

    // --- Détails page complète ---
    tarifDetail: z.string(),  // Texte complet avec les paliers
    lieu: z.string(),
    lieuDetail: z.string().optional(),
    pedagogues: z.string(),
    emailContact: z.string().email(),

    // --- Prochaines dates (tableau de strings lisibles) ---
    prochainsDates: z.array(z.string()).optional(),

    // --- Statut ---
    // "ouvert" | "complet" | "bientot"
    statut: z.enum(['ouvert', 'complet', 'bientot']).default('ouvert'),
  }),
});

export const collections = {
  spectacles: spectaclesCollection, 
  dates: datesCollection,
  stages: stagesCollection,
  // ... autres collections
};