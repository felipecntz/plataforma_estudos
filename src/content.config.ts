import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const studyCollection = defineCollection({
  loader: glob({ base: "./src/content/studies", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    area: z.string(),
    areaSlug: z.string(),
    category: z.string(),
    categorySlug: z.string(),
    topic: z.string(),
    slug: z.string(),
    order: z.number(),
    icon: z.string(),
    color: z.string(),
    difficulty: z.string(),
    readingTime: z.string(),
    updatedAt: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
    summary: z.string().optional(),
    mindMap: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      highlights: z.array(z.string()).optional(),
      sections: z.array(
        z.object({
          title: z.string(),
          kind: z.enum(["core", "base", "process", "application"]),
          definition: z.string().optional(),
          formula: z.string().optional(),
          example: z.string().optional(),
          bullets: z.array(z.string()).optional()
        })
      )
    }).optional()
  })
});

export const collections = {
  studies: studyCollection
};
