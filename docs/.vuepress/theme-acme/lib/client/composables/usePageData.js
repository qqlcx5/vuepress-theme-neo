import { computed, provide } from 'vue'
// import { pagesData } from '@temp/theme-acme/pagesData'
// import { useThemeLocaleData } from './useThemeData.js';
import { filterPosts, sortPosts, sortPostsByDate, _groupPosts, _categoriesAndTags } from '../utils/postData'

export const setupPageData = () => {
    const _filterPosts = computed(() => filterPosts(pagesDataMap))
    const _sortPosts = computed(() => sortPosts(_filterPosts.value))
    const _sortPostsByDate = computed(() => sortPostsByDate(_filterPosts.value))
    const _groupPosts = computed(() => _groupPosts(_sortPostsByDate.value))
    const _categoriesAndTags = computed(() => _categoriesAndTags(_groupPosts.value))

    provide('_filterPosts', _filterPosts)
    provide('_sortPosts', _sortPosts)
    provide('_sortPostsByDate', _sortPostsByDate)
    provide('_groupPosts', _groupPosts)
    provide('_categoriesAndTags', _categoriesAndTags)
}

// pagesDataMap.map(item => {
//     const {
//         frontmatter: { author = [] }
//     } = item
//     !item.author && (item.author = {})
//     if (author?.length) {
//         item.author.name = author[0]?.name || author
//         item.author.url = author[0]?.url || ''
//     } else {
//         const themeLocale = useThemeLocaleData()
//         item.author = themeLocale.value?.author || {}
//     }
// })
