import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const sovereignos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sovereignos' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const ipfactory = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ipfactory' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    price: z.string().optional(),
  }),
});

const blueprints = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blueprints' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, sovereignos, ipfactory, blueprints };
