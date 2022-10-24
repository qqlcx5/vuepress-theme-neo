import { computed, provide } from 'vue'
import pagesData from '@temp/theme-acme/pagesData'
import { sortPosts, sortPostsByDate, groupPosts, categoriesAndTags } from '../utils/postData'
export const sortPostsSymbol = Symbol('sortPosts');
export const sortPostsByDateSymbol = Symbol('sortPostsByDate');
export const groupPostsSymbol = Symbol('groupPosts');
export const categoriesAndTagsSymbol = Symbol('categoriesAndTags');

export const setupPageData = () => {
    const sortPosts_ = computed(() => sortPosts(pagesData))
    const sortPostsByDate_ = computed(() => sortPostsByDate(pagesData))
    const groupPosts_ = computed(() => groupPosts(sortPosts_.value))
    const categoriesAndTags_ = computed(() => categoriesAndTags(groupPosts_.value))
    provide('sortPostsSymbol', sortPosts_)
    provide('sortPostsByDateSymbol', sortPostsByDate_)
    provide('groupPostsSymbol', groupPosts_)
    provide('categoriesAndTagsSymbol', categoriesAndTags_)
}