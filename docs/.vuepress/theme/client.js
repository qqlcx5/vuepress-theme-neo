import { defineClientConfig } from '@vuepress/client'
import { onMounted, computed, provide } from 'vue'
import { filterPosts, sortPosts, sortPostsByDate, groupPosts, categoriesAndTags } from './util/postData'

export default defineClientConfig({
    // 函数会在客户端应用创建后被调用，你可以对 Vue 应用添加各种能力。
    enhance({ app, router, siteData }) {},
    setup() {
        onMounted(() => { })
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
        console.log('$filterPosts', $filterPosts);
        console.log('$sortPosts', $sortPosts);
        console.log('$sortPostsByDate', $sortPostsByDate);
        console.log('$groupPosts', $groupPosts);
        console.log('$categoriesAndTags', $categoriesAndTags);
    },
    rootComponents: []
})
