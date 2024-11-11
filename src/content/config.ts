import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        readingTime: z.number(),
        tags: z.string(),
        featuredImage: z.string().optional(),
    })
})

export const collections = {
    posts
}