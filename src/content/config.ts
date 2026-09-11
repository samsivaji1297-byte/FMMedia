import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.any().optional(),
    description: z.any().optional(),
    pubDate: z.any().optional(),
  }).passthrough(),
});

const sovereignosCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sovereignos' }),
  schema: z.object({
    title: z.any().optional(),
    description: z.any().optional(),
    pubDate: z.any().optional(),
  }).passthrough(),
});

export const collections = {
  blog: blogCollection,
  sovereignos: sovereignosCollection,
};
