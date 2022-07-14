<script setup lang="ts">
import Home from '../components/Home.vue'
import CategoriesPage from '../components/CategoriesPage.vue'
import TagsPage from '../components/TagsPage.vue'
import ArchivesPage from '../components/ArchivesPage.vue'
// @ts-ignore
import Page from '../components/Page.vue'
// @ts-ignore
import Navbar from '@vuepress/theme-default/lib/client/components/Navbar.vue'
// @ts-ignore
import Sidebar from '@vuepress/theme-default/lib/client/components/Sidebar.vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { computed, onMounted, onUnmounted, onBeforeUnmount, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { DefaultThemePageFrontmatter } from '@vuepress/theme-default/lib/shared'
import {
    useScrollPromise,
    useSidebarItems,
    useThemeLocaleData,
} from '@vuepress/theme-default/lib/client/composables'


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

// classes
const containerClass = computed(() => [
  {
    'no-navbar': !shouldShowNavbar.value,
    'no-sidebar': !sidebarItems.value.length,
    'sidebar-open': isSidebarOpen.value,
  },
  frontmatter.value.pageClass,
])

let observer;
const isDarkMode = ref(false);

// close sidebar after navigation
let unregisterRouterHook
onMounted(() => {
  const router = useRouter()
  unregisterRouterHook = router.afterEach(() => {
    toggleSidebar(false)
  })

  const html = document.querySelector("html") as HTMLElement;
  isDarkMode.value = html.classList.contains("dark");
  
  // watch theme change
  observer = new MutationObserver(() => {
    isDarkMode.value = html.classList.contains("dark");
  });
  observer.observe(html, {
    attributeFilter: ["class"],
    attributes: true,
  });
})

onBeforeUnmount(() => {
  observer.disconnect();
});

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
      <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar">
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
      <Home v-if="frontmatter.home" />
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
