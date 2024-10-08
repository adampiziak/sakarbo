import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    static: true,
    preset: "cloudflare-pages-static",
    prerender: {
      crawlLinks: true,
    },
    routeRules: {
      "/**": {
        cors: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",

          "Cross-Origin-Opener-Policy": "same-origin",
          "Cross-Origin-Embedder-Policy": "require-corp",
        },
      },
    },
  },
});
