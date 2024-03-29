<script setup lang="ts">
// @ts-ignore
import NeoBlog from '@theme/NeoBlog.vue'
// @ts-ignore
import NeoArticlesPage from '@theme/NeoArticlesPage.vue'
// @ts-ignore
import NeoCategoriesPage from '@theme/NeoCategoriesPage.vue'
// @ts-ignore
import NeoTagsPage from '@theme/NeoTagsPage.vue'
// @ts-ignore
import NeoArchivesPage from '@theme/NeoArchivesPage.vue'
// @ts-ignore
import NeoColumnsPage from '@theme/NeoColumnsPage.vue'
// @ts-ignore
import NeoPage from '@theme/NeoPage.vue'
// @ts-ignore
import NeoNavbar from '@theme/NeoNavbar.vue'
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
      <NeoNavbar v-if="shouldShowNavbar" :isSidebar="!!sidebarItems.length" @toggle-sidebar="toggleSidebar">
        <template #before>
          <slot name="navbar-before" />
        </template>
        <template #after>
          <slot name="navbar-after" />
        </template>
      </NeoNavbar>
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
      <NeoArticlesPage v-else-if="frontmatter.articlesPage" />
      <!-- 标签 -->
      <NeoTagsPage v-else-if="frontmatter.tagsPage" />
      <!-- 分类 -->
      <NeoCategoriesPage v-else-if="frontmatter.categoriesPage" />
      <!-- 归档 -->
      <NeoArchivesPage v-else-if="frontmatter.archivesPage" />
      <!-- 专栏 -->
      <NeoColumnsPage v-else-if="frontmatter.columnsPage" />

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
            <!-- <CommentService /> -->
          </template>
        </NeoPage>
      </Transition>
    </slot>
  </div>
</template>
