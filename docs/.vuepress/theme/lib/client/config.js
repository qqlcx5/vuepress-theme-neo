import { defineClientConfig } from '@vuepress/client'
import { onMounted, computed, provide, readonly } from 'vue'
import { filterPosts, sortPosts, sortPostsByDate, groupPosts, categoriesAndTags } from './utils/postData'
import { AcIcon, NavCard } from './components/global'
import './styles/index.scss'
export default defineClientConfig({
    // 函数会在客户端应用创建后被调用，你可以对 Vue 应用添加各种能力。
    enhance({ app, router, siteData }) {
        app.component('AcIcon', AcIcon)
        app.component('NavCard', NavCard)
    },
    setup() {
        onMounted(() => {})

        const $filterPosts = computed(() => {
            return filterPosts(__SITEPAGES__)
        })
        const $sortPosts = computed(() => {
            return sortPosts($filterPosts.value)
        })
        const $sortPostsByDate = computed(() => {
            return sortPostsByDate($filterPosts.value)
        })
        const $groupPosts = computed(() => {
            return groupPosts($sortPostsByDate.value)
        })
        const $categoriesAndTags = computed(() => {
            return categoriesAndTags($groupPosts.value)
        })
        // 设置全局数据
        provide('$filterPosts', readonly($filterPosts))
        provide('$sortPosts', readonly($sortPosts))
        provide('$sortPostsByDate', readonly($sortPostsByDate))
        provide('$groupPosts', readonly($groupPosts))
        provide('$categoriesAndTags', readonly($categoriesAndTags))
        // console.log('$filterPosts', $filterPosts.value)
        // console.log('$sortPosts', $sortPosts.value)
        // console.log('$sortPostsByDate', $sortPostsByDate.value)
        // console.log('$groupPosts', $groupPosts.value)
        // console.log('$categoriesAndTags', $categoriesAndTags.value)
    },
    rootComponents: []
})
