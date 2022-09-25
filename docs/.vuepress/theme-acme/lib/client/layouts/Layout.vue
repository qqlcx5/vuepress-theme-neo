<script setup lang="ts">
// @ts-ignore
import Home from '@theme/Home.vue'
// @ts-ignore
import ArticlesPage from '@theme/ArticlesPage.vue'
// @ts-ignore
import CategoriesPage from '@theme/CategoriesPage.vue'
// @ts-ignore
import TagsPage from '@theme/TagsPage.vue'
// @ts-ignore
import ArchivesPage from '@theme/ArchivesPage.vue'
// @ts-ignore
import Page from '@theme/Page.vue'
// @ts-ignore
import Navbar from '@vuepress/theme-default/components/Navbar.vue'
// @ts-ignore
import Sidebar from '@vuepress/theme-default/components/Sidebar.vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { computed, onMounted, onUnmounted, onBeforeUnmount, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { DefaultThemePageFrontmatter } from '../../shared'
import { useEventListener, useDebounceFn } from '@vueuse/core'
import {
    useScrollPromise,
    useSidebarItems,
    useThemeLocaleData,
} from '../composables/index.js'

const page = usePageData()
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
const themeLocale = useThemeLocaleData()

// navbar
const hideNavbar = ref(false)
const shouldShowNavbar = computed(
    () =>
        frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
)

/** Get scroll distance */
const getScrollTop = () =>
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
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
const enableToc = computed(
    () =>
        frontmatter.value.toc ||
        (themeLocale.value.toc !== false && frontmatter.value.toc !== false)
)

// classes
const containerClass = computed(() => [
    {
        'no-navbar': !shouldShowNavbar.value,
        'hide-navbar': hideNavbar.value,
        'has-toc': enableToc.value,
        'no-sidebar': !sidebarItems.value.length,
        'sidebar-open': isSidebarOpen.value,
        invert: isInvert.value,
    },
    frontmatter.value.pageClass,
])

let observer
const isDarkMode = ref(false)

// close sidebar after navigation
let unregisterRouterHook
let lastDistance = 0
let isInvert = ref(true)
useEventListener(
    'scroll',
    useDebounceFn(() => {
        const distance = getScrollTop()
        // scroll down
        if (lastDistance < distance && distance > 58) {
            if (!isSidebarOpen.value) hideNavbar.value = true
        }
        // scroll up
        else hideNavbar.value = false
        lastDistance = distance
        isInvert.value = distance <= 10
    }, 60)
)
onMounted(() => {
    const router = useRouter()
    unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false)
    })

    const html = document.querySelector('html') as HTMLElement
    isDarkMode.value = html.classList.contains('dark')

    // watch theme change
    observer = new MutationObserver(() => {
        isDarkMode.value = html.classList.contains('dark')
    })
    observer.observe(html, {
        attributeFilter: ['class'],
        attributes: true,
    })
})

onBeforeUnmount(() => {
    observer.disconnect()
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
    <div
        class="theme-container theme-acme-container"
        :class="containerClass"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
        <slot name="navbar">
            <Navbar
                v-if="shouldShowNavbar"
                @toggle-sidebar="toggleSidebar"
            >
                <template #before>
                    <slot name="navbar-before" />
                </template>
                <template #after>
                    <slot name="navbar-after" />
                </template>
            </Navbar>
        </slot>

        <div
            class="sidebar-mask"
            @click="toggleSidebar(false)"
        />

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
            <Home v-if="frontmatter.home" />
            <!-- 文章 -->
            <ArticlesPage v-else-if="frontmatter.articlesPage" />
            <!-- 分类 -->
            <CategoriesPage v-else-if="frontmatter.categoriesPage" />
            <!-- 标签 -->
            <TagsPage v-else-if="frontmatter.tagsPage" />
            <!-- 归档 -->
            <ArchivesPage v-else-if="frontmatter.archivesPage" />

            <Transition
                v-else
                name="fade-slide-y"
                mode="out-in"
                @before-enter="onBeforeEnter"
                @before-leave="onBeforeLeave"
            >
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
                        <CommentService :darkmode="isDarkMode" />
                    </template>
                </Page>
            </Transition>
        </slot>
    </div>
</template>
