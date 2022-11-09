import { defineClientConfig } from '@vuepress/client'
import { AcmeIcon, NavCard } from './components/global'
import { setupDarkMode, setupSidebarItems, setupPageData } from './composables/index.js';
import './styles/index.scss'
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';
export default defineClientConfig({
    // 函数会在客户端应用创建后被调用，你可以对 Vue 应用添加各种能力。
    enhance({ app, router, siteData }) {
        app.component('AcmeIcon', AcmeIcon)
        app.component('NavCard', NavCard)
    },
    extendsPage: page => {},
    setup() {
        setupDarkMode();
        setupSidebarItems();
        setupPageData()
    },
    layouts: {
        Layout,
        NotFound,
    },
})
