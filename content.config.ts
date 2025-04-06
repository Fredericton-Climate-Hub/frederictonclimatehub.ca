import { defineCollection, defineContentConfig, z } from "@nuxt/content"

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        cwd: 'content/pages',
      },
      schema: z.object({
        navigationTitle: z.string().optional(),
      }),
    }),
  },
})
