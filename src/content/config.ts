import { defineCollection, z } from "astro:content";

const aboutCollection = defineCollection({
  type: "content",
  schema: z.object({
    topic: z.string(),
    emoji: z.string(),
  }),
});

export const collections = {
  about: aboutCollection,
};
