// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://astronaut.github.io",
  base: "ecommerce-product-page-2",

  vite: {
    plugins: [tailwindcss()],
  },
});