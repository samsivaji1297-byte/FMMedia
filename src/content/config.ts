import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Fully permissive schema: accepts any frontmatter without failing build
const flexibleSchema = z.object({
  title: z.any().optional(),
  description: z.any().optional(),
  pubDate: z.any().optional(),
  tags: z.any().optional(),
}).passthrough();

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: flexibleSchema,
});

const sovereignos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sovereignos' }),
  schema: flexibleSchema,
});

const ipfactory = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ipfactory' }),
  schema: flexibleSchema,
});

const blueprints = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blueprints' }),
  schema: flexibleSchema,
});

export const collections = { blog, sovereignos, ipfactory, blueprints };
