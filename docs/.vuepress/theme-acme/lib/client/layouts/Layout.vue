<script setup lang="ts">
// @ts-ignore
import Blog from '@theme/Blog.vue'
// @ts-ignore
import ArticlesPage from '@theme/ArticlesPage.vue'
// @ts-ignore
import CategoriesPage from '@theme/CategoriesPage.vue'
// @ts-ignore
import TagsPage from '@theme/TagsPage.vue'
// @ts-ignore
import ArchivesPage from '@theme/ArchivesPage.vue'
// @ts-ignore
import ColumnsPage from '@theme/ColumnsPage.vue'
// @ts-ignore
import Page from '@theme/Page.vue'
// @ts-ignore
import Navbar from '@theme/Navbar.vue'
// @ts-ignore
import Sidebar from '@theme/Sidebar.vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { DefaultThemePageFrontmatter } from '../../shared/index.js'
import {
    useScrollPromise,
    useSidebarItems,
    useThemeLocaleData,
} from '../composables/index.js'

const page = usePageData()
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
const themeLocale = useThemeLocaleData()

// navbar
const shouldShowNavbar = computed(
    () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
)

// sidebar
const sidebarItems = useSidebarItems()
const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
    isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
}
const touchStart = { x: 0, y: 0 }
const onTouchStart = (e): void => {
    touchStart.x = e.changedTouches[0].clientX
    touchStart.y = e.changedTouches[0].clientY
}
const onTouchEnd = (e): void => {
    const dx = e.changedTouches[0].clientX - touchStart.x
    const dy = e.changedTouches[0].clientY - touchStart.y
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80) {
            toggleSidebar(true)
        } else {
            toggleSidebar(false)
        }
    }
}
// custom acme theme
const enableToc = computed(
    () =>
        frontmatter.value.toc ||
        (themeLocale.value.toc !== false && frontmatter.value.toc !== false)
)
// custom acme theme
// classes
const containerClass = computed(() => [
    {
        'no-navbar': !shouldShowNavbar.value,
        'no-sidebar': !sidebarItems.value.length,
        'sidebar-open': isSidebarOpen.value,
        'has-toc': enableToc.value,
    },
    frontmatter.value.pageClass,
])

// close sidebar after navigation
let unregisterRouterHook
onMounted(() => {
    const router = useRouter()
    unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false)
    })
})
onUnmounted(() => {
    unregisterRouterHook()
})

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending
</script>

<template>
    <div class="theme-container theme-acme-container" :class="containerClass" @touchstart="onTouchStart" @touchend="onTouchEnd">
        <slot name="navbar">
            <Navbar v-if="shouldShowNavbar" :isSidebar="!!sidebarItems.length" @toggle-sidebar="toggleSidebar">
                <template #before>
                    <slot name="navbar-before" />
                </template>
                <template #after>
                    <slot name="navbar-after" />
                </template>
            </Navbar>
        </slot>

        <div class="sidebar-mask" @click="toggleSidebar(false)" />

        <slot name="sidebar">
            <Sidebar>
                <template #top>
                    <slot name="sidebar-top" />
                </template>
                <template #bottom>
                    <slot name="sidebar-bottom" />
                </template>
            </Sidebar>
        </slot>

        <slot name="page">
            <!-- 首页 -->
            <Blog v-if="frontmatter.home" />
            <!-- 文章 -->
            <ArticlesPage v-else-if="frontmatter.articlesPage" />
            <!-- 分类 -->
            <CategoriesPage v-else-if="frontmatter.categoriesPage" />
            <!-- 标签 -->
            <TagsPage v-else-if="frontmatter.tagsPage" />
            <!-- 归档 -->
            <ArchivesPage v-else-if="frontmatter.archivesPage" />
            <!-- 专栏 -->
            <ColumnsPage v-else-if="frontmatter.columnsPage" />

            <Transition v-else name="fade-slide-y" mode="out-in" @before-enter="onBeforeEnter"
                @before-leave="onBeforeLeave">
                <Page :key="page.path">
                    <template #top>
                        <slot name="page-top" />
                    </template>
                    <template #content-top>
                        <slot name="page-content-top" />
                    </template>
                    <template #content-bottom>
                        <slot name="page-content-bottom" />
                    </template>
                    <template #bottom>
                        <slot name="page-bottom" />
                        <CommentService />
                    </template>
                </Page>
            </Transition>
        </slot>
    </div>
</template>
