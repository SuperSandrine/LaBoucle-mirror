import { defineCollection, z } from 'astro:content';

const spectaclesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    visuel: z.string(),
    duree: z.string(),
    public: z.string(),
    synopsis: z.string(),
    // ... autres champs
  }),
});

const datesCollection = defineCollection({
    type: 'content',
    schema: z.object({
      titreFichier: z.string(),
      //date: z.coerce.date(),// ajouter la possibilité de recevoir un format date ou string
      date: z.union([z.coerce.date(), z.string()]).transform((val) => new Date(val)),
      year: z.string(),
      lieu: z.string(),
      titre: z.string(),
      type: z.string(),
    }),
});

export const collections = {
  spectacles: spectaclesCollection, 
  dates: datesCollection
  // ... autres collections
};