import { defineNuxtConfig } from "nuxt";
import { visualizer } from "rollup-plugin-visualizer";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxt/content", "bootstrap-vue-3/nuxt"],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  typescript: {
    strict: true,
  },
  vite: {
    build: {
      rollupOptions: {
        plugins: [
          visualizer({
            open: true,
            filename: "docs/index.html",
            gzipSize: true,
            brotliSize: true,
          }),
        ],
      },
    },
  },
});
