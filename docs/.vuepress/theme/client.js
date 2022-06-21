import { defineClientConfig } from '@vuepress/client'
import { onMounted } from 'vue'
// const siteData =  require('./genSiteData');
// siteData()

export default defineClientConfig({
    // 函数会在客户端应用创建后被调用，你可以对 Vue 应用添加各种能力。
    enhance({ app, router, siteData }) {},
    setup() {
        onMounted(() => {
            // 在 mounted 之后使用 DOM API
            console.log('theme client setup')
            console.log(__FOO__, '__FOO__')
        })
    },
    rootComponents: []
})
