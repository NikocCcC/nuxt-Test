// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: [
      // 掃描 composables 目錄頂層
      "composables",
      // 掃描深度一層的特定檔案
      "composables/*/index.{ts,js,mjs,mts}",
      // 掃描整個 composables 目錄下的檔案
      "composables/**"
    ]
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  typescript: {
    typeCheck: true
  },
  css: ["@/assets/css/tailwind.css"]
});
