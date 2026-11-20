import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    years: z.string(),
    order: z.number(),
    card: z.string(),
    tags: z.array(z.string()),
    role: z.string(),
    team: z.string(),
    timeline: z.string(),
    platform: z.string(),
    status: z.string(),
    tldr: z.object({ problem: z.string(), did: z.string(), result: z.string() }),
  }),
});

export const collections = { work };
