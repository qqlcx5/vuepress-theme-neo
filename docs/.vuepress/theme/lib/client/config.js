import { defineClientConfig } from '@vuepress/client'
export default defineClientConfig({
    enhance({ app, router, siteData }) {},
    setup() {
        console.log('setup client/config.js')
    },
    rootComponents: []
})
