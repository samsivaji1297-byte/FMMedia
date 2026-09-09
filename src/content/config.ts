import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
    }),
  }),

  ipfactory: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
    }),
  }),

  blueprints: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
    }),
  }),

  sovereignos: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
    }),
  }),

  writingfactory: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
    }),
  }),
};
