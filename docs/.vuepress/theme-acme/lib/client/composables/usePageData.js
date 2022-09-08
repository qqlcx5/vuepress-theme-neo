import { computed, provide } from 'vue'
import { pagesData } from '@temp/theme-acme/pagesData'
import { filterPosts, sortPosts, sortPostsByDate, groupPosts, categoriesAndTags } from '../utils/postData'
// export const filterPostsSymbol = Symbol('filterPosts');
export const sortPostsSymbol = Symbol('sortPosts');
export const sortPostsByDateSymbol = Symbol('sortPostsByDate');
export const groupPostsSymbol = Symbol('groupPosts');
export const categoriesAndTagsSymbol = Symbol('categoriesAndTags');

export const setupPageData = () => {
    const filterPosts_ = computed(() => filterPosts(pagesData))
    const sortPosts_ = computed(() => sortPosts(filterPosts_.value))
    const sortPostsByDate_ = computed(() => sortPostsByDate(filterPosts_.value))
    const groupPosts_ = computed(() => groupPosts(sortPosts_.value))
    const categoriesAndTags_ = computed(() => categoriesAndTags(groupPosts_.value))

    // provide('filterPostsSymbol', filterPosts_)
    provide('sortPostsSymbol', sortPosts_)
    provide('sortPostsByDateSymbol', sortPostsByDate_)
    provide('groupPostsSymbol', groupPosts_)
    provide('categoriesAndTagsSymbol', categoriesAndTags_)
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
