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
    creation: z.number(),
    interprete: z.number(),
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

export const collections = {
  spectacles: spectaclesCollection, 
  dates: datesCollection
  // ... autres collections
};