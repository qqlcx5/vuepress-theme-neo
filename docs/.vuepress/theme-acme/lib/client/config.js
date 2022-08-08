import { defineClientConfig } from '@vuepress/client'
import { onMounted, computed, provide, readonly } from 'vue'
import { filterPosts, sortPosts, sortPostsByDate, groupPosts, categoriesAndTags } from './utils/postData'
import { AIcon, NavCard } from './components/global'
import { pageMap } from '@temp/theme-acme/pageMap'
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
import './styles/index.scss'

export default defineClientConfig({
    // 函数会在客户端应用创建后被调用，你可以对 Vue 应用添加各种能力。
    enhance({ app, router, siteData }) {
        app.component('AIcon', AIcon)
        app.component('NavCard', NavCard)
    },
    extendsPage: page => {},
    setup() {
        onMounted(() => {})
        pageMap.map(item => {
            const {
                frontmatter: { author = [] }
            } = item
            !item.author && (item.author = {})
            if (author?.length) {
                item.author.name = author[0]?.name || author
                item.author.url = author[0]?.url || ''
            } else {
                const themeLocale = useThemeLocaleData()
                item.author = themeLocale.value?.author || {}
            }
        })

        const $filterPosts = computed(() => {
            return filterPosts(pageMap)
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
    }
})
