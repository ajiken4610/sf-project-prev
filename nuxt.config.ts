import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxt/content", "bootstrap-vue-3/nuxt"],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
});
