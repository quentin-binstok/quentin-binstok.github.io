import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const keepFileName = ({ entry }: { entry: string }) => entry.replace(/\.mdx?$/, '');

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio', generateId: keepFileName }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    date: z.coerce.date().optional(),
    order: z.number().optional(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const contributions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/contributions', generateId: keepFileName }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    excerpt: z.string().optional(),
    date: z.coerce.date().optional(),
    venue: z.string().optional(),
    location: z.string().optional(),
    type: z.string().optional(),
    authors: z.array(z.string()).optional(),
    citation: z.string().optional(),
    paperurl: z.string().optional(),
    slidesurl: z.string().optional(),
    bibtexurl: z.string().optional(),
    doi: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages', generateId: keepFileName }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { portfolio, contributions, pages };
