export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss", "@formkit/nuxt"],
  css: ["@/assets/main.css",'vue-final-modal/style.css'],
  plugins: ['~/plugins/vue-final-modal.ts'],
  tailwindcss: {
    config: {
      content: ["./node_modules/laravel-vue-pagination/**/*.vue"],
    },
  },
  runtimeConfig: {
    public: {
      appURL: "http://127.0.0.1:8000",
    },
  },
  ssr: false,
});