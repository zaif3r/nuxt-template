// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "My Nuxt App",
            meta: [
                { name: "description", content: "My amazing site." },
            ],
        },
        baseURL: process.env.NODE_ENV === "development" ? "/" : process.env.BASE_URL,
    },
    modules: [
        "@nuxt/image-edge",
        "@nuxtjs/tailwindcss",
    ],
});
