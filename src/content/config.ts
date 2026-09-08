import { defineCollection, z } from 'astro:content';

const ipfactory = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
  }),
});

const writingfactory = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
  }),
});

const sovereignos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
  }),
});

const blueprints = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
  }),
});

export const collections = {
  ipfactory,
  writingfactory,
  sovereignos,
  blueprints,
};
