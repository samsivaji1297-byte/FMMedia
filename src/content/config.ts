import { defineCollection, z } from 'astro:content';

const flexibleDate = z.union([z.string(), z.date()]).transform((val) => new Date(val));

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: flexibleDate.optional(),
  pubDate: flexibleDate.optional(),
});

export const collections = {
  blog: defineCollection({ schema: baseSchema }),
  ipfactory: defineCollection({ schema: baseSchema }),
  blueprints: defineCollection({ schema: baseSchema }),
  sovereignos: defineCollection({ schema: baseSchema }),
  writingfactory: defineCollection({ schema: baseSchema }),
};
