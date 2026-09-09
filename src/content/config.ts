import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  pubDate: z.coerce.date().optional(),
});

export const collections = {
  blog: defineCollection({ schema: baseSchema }),
  ipfactory: defineCollection({ schema: baseSchema }),
  blueprints: defineCollection({ schema: baseSchema }),
  sovereignos: defineCollection({ schema: baseSchema }),
  writingfactory: defineCollection({ schema: baseSchema }),
};
