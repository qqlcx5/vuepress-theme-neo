import { defineClientConfig } from '@vuepress/client'
import { onMounted } from 'vue'

export default defineClientConfig({
    enhance({ app, router, siteData }) {},
    setup() {
        onMounted(() => {
            // 在 mounted 之后使用 DOM API
            document.querySelector('#app')
            console.log('setup client/config.js')
        })
    },
    rootComponents: []
})
