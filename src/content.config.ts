import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    date:        z.coerce.date(),
    tags:        z.array(z.string()).default([]),
    featured:    z.boolean().default(false),
    draft:       z.boolean().default(false),
    image:       z.string().optional(),
  }),
});

const writings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    date:        z.coerce.date(),
    tags:        z.array(z.string()).default([]),
    draft:       z.boolean().default(false),
    externalUrl: z.string().url().optional(),
    image:       z.string().optional(),
  }),
});

export const collections = { projects, writings };
