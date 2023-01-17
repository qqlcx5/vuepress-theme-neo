import { computed, provide } from 'vue'
import { pagesData, allWordCount } from '@temp/theme-neo/pagesData'
import { sortPosts, sortPostsByDate, groupPosts, categoriesAndTags } from '../utils/resolvePostData'

export const allWordCountSymbol = Symbol('allWordCount') // 本站的总字数
export const sortPostsSymbol = Symbol('sortPosts')
export const sortPostsByDateSymbol = Symbol('sortPostsByDate')
export const groupPostsSymbol = Symbol('groupPosts')
export const categoriesAndTagsSymbol = Symbol('categoriesAndTags')

export const setupPageData = () => {
    const sortPosts_ = computed(() => sortPosts(pagesData))
    const sortPostsByDate_ = computed(() => sortPostsByDate([...pagesData]))
    const groupPosts_ = computed(() => groupPosts(sortPosts_.value))
    const categoriesAndTags_ = computed(() => categoriesAndTags(groupPosts_.value))
    provide('allWordCountSymbol', allWordCount)
    provide('sortPostsSymbol', sortPosts_)
    provide('sortPostsByDateSymbol', sortPostsByDate_)
    provide('groupPostsSymbol', groupPosts_)
    provide('categoriesAndTagsSymbol', categoriesAndTags_)
}
