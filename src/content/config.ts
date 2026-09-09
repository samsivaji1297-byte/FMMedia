import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.any(),
    pubDate: z.any().optional(),
    slug: z.string().optional(),
  }),
});

export const collections = {
  blog,
  ipfactory: blog,
  blueprints: blog,
  sovereignos: blog,
  writingfactory: blog,
};
