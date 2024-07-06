import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  output: "server",
  adapter: netlify()
});