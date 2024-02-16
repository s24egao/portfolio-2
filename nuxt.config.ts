// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        baseURL: '/website-2023/',
        pageTransition: { name: 'page' },
        head: {
            meta: [
                { name: 'theme-color', content: 'black' }
            ]
        }
    },
    modules: [
        '@nuxt/content'
    ]
})
