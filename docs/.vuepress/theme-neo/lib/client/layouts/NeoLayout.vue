<script setup lang="ts">
// @ts-ignore
import NeoBlog from '@theme/NeoBlog.vue'
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
import NeoPage from '@theme/NeoPage.vue'
// @ts-ignore
import Navbar from '@theme/Navbar.vue'
// @ts-ignore
import NeoSidebar from '@theme/NeoSidebar.vue'

import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { DefaultThemePageFrontmatter } from '../../shared/index.js'
import {
  useScrollPromise,
  useSidebarItems,
  useThemeLocaleData,
} from '../composables/neoIndex.js'

defineSlots<{
  'navbar'?: (props: Record<never, never>) => any
  'navbar-before'?: (props: Record<never, never>) => any
  'navbar-after'?: (props: Record<never, never>) => any
  'sidebar'?: (props: Record<never, never>) => any
  'sidebar-top'?: (props: Record<never, never>) => any
  'sidebar-bottom'?: (props: Record<never, never>) => any
  'page'?: (props: Record<never, never>) => any
  'page-top'?: (props: Record<never, never>) => any
  'page-bottom'?: (props: Record<never, never>) => any
  'page-content-top'?: (props: Record<never, never>) => any
  'page-content-bottom'?: (props: Record<never, never>) => any
}>()

const page = usePageData()
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
const themeLocale = useThemeLocaleData()

// navbar
const shouldShowNavbar = computed(
  () =>
    frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
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
/* -------------------------------- neoTheme -------------------------------- */
  const enableToc = computed(
  () =>
    frontmatter.value.toc ||
    (themeLocale.value.toc !== false && frontmatter.value.toc !== false)
);
const enableCatalogue = computed(() => frontmatter.value.catalogue);
/* -------------------------------- neoTheme -------------------------------- */
// classes
const containerClass = computed(() => [
  {
    'no-navbar': !shouldShowNavbar.value,
    'no-sidebar': !sidebarItems.value.length || enableCatalogue.value,
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
  <div
    class="theme-container theme-neo-container"
    :class="containerClass"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
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
      <NeoSidebar v-if="!frontmatter.catalogue">
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </NeoSidebar>
    </slot>

    <slot name="page">
      <!-- 首页 -->
      <NeoBlog v-if="frontmatter.home" />
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

      <Transition
        v-else
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <NeoPage :key="page.path">
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
        </NeoPage>
      </Transition>
    </slot>
  </div>
</template>
