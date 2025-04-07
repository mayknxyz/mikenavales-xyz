// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://mikenavales-xyz.vercel.app",
  outDir: "./dist",
  integrations: [mdx(), sitemap(), tailwind()],
  devToolbar: { enabled: false },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
    domains: ["mikenavales-xyz.vercel.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mikenavales-xyz.vercel.app",
        pathname: "/**",
      },
    ],
  },
});
