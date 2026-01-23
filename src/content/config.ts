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

export const collections = {
  spectacles: spectaclesCollection,
  // ... autres collections
};