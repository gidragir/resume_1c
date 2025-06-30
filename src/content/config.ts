import { z, defineCollection } from "astro:content";

const contacts = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      link: z.string(),
      icon: z.string().max(150),
      title: z.string().max(50),
    }),
  ),
});

const experiences = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string().max(150),
    position: z.string().max(150),
    startDate: z.date(),
    endDate: z.date().optional(),
    description: z.array(z.string().max(500)),
  }),
});

const skills = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      category: z.string().max(150),
      skills: z.array(z.string().max(150)),
      style: z.string().optional(),
    }),
  ),
});

const certs = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      name: z.string().max(150),
      year: z.number(),
    }),
  ),
});

const courses = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      name: z.string().max(150),
      year: z.number(),
    }),
  ),
});
export const collections = {
  contacts,
  experiences,
  skills,
  certs,
  courses,
};
