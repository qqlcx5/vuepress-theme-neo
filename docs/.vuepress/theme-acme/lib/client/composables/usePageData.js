import { computed, provide } from 'vue'
import { pagesDataMap } from '@temp/theme-acme/pagesDataMap'
import { useThemeLocaleData } from './useThemeData.js';

import { filterPosts, sortPosts, sortPostsByDate, groupPosts, categoriesAndTags } from '../utils/postData'

export const setupPageData = () => {
    // const themeLocale = useThemeLocaleData();
    // const frontmatter = usePageFrontmatter();
    // const sidebarItems = computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
    // provide(sidebarItemsSymbol, sidebarItems);
};

pagesDataMap.map(item => {
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
    return filterPosts(pagesDataMap)
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
