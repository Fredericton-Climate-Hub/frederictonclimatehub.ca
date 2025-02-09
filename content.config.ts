import { defineCollection, defineContentConfig, z } from "@nuxt/content"

export default defineContentConfig({
  collections: {
    default: defineCollection({
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
