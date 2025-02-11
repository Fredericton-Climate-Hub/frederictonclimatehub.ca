import { defineCollection, defineContentConfig, z } from "@nuxt/content"

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
      },
      schema: z.object({
        navigationTitle: z.string().optional(),
      }),
    }),
  },
})
