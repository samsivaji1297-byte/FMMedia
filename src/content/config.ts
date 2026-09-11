import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.any().optional(),
  }).passthrough(),
});

const sovereignos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.any().optional(),
  }).passthrough(),
});

export const collections = {
  blog: blog,
  sovereignos: sovereignos,
};
