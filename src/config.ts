import { defineCollection, z } from "astro:content";

const projectimages =  defineCollection({
    type: "data",
    schema: ({ image }) => 
        z.object({
            title: z.string(),
            alttext: z.string(),
            cover: image(),
        }),
});

export const collections = {
    projectimages,
}