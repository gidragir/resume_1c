// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import purgecss from "astro-purgecss";

export default defineConfig({
  site: "https://gidragir.github.io",
  base: "resume_1c",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [purgecss()],
});