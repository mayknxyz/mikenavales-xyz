// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://mayknxyz.github.io",
  outDir: "./dist",
  integrations: [mdx(), sitemap(), tailwind()],
  devToolbar: { enabled: false },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
    domains: ["mayknxyz.github.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mayknxyz.github.io",
        pathname: "/mikenavales-xyz/**",
      },
    ],
  },
});
