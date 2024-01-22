import { computed, provide } from 'vue'
import { allPagesData, allWordCount } from '@temp/theme-neo/allPagesData'
import { sortPosts, sortPostsByDate, groupPosts, categoriesAndTags } from '../utils/resolvePostData'

export const allWordCountSymbol = Symbol('allWordCount') // 本站的总字数
export const sortPostsSymbol = Symbol('sortPosts')
export const sortPostsByDateSymbol = Symbol('sortPostsByDate')
export const groupPostsSymbol = Symbol('groupPosts')
export const categoriesAndTagsSymbol = Symbol('categoriesAndTags')

// 排序文章数据 标签页、专栏页、归档页、分类页
export const setupPageData = () => {
    const sortPosts_ = computed(() => sortPosts(allPagesData))
    const sortPostsByDate_ = computed(() => sortPostsByDate([...allPagesData]))
    const groupPosts_ = computed(() => groupPosts(sortPosts_.value))
    const categoriesAndTags_ = computed(() => categoriesAndTags(groupPosts_.value))
    provide('allWordCountSymbol', allWordCount)
    provide('sortPostsSymbol', sortPosts_)
    provide('sortPostsByDateSymbol', sortPostsByDate_)
    provide('groupPostsSymbol', groupPosts_)
    provide('categoriesAndTagsSymbol', categoriesAndTags_)
}
