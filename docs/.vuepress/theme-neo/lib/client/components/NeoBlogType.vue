<template>
    <div class="blog-type-wrapper dark-shadow">
        <div class="blog-type">
            <button v-for="[key, icon] of buttons" :key="key" class="blog-type-button" @click="handleClasses(key)">
                <div class="icon-wapper" :class="{ active: buttonsType === key }" :aria-label="locale[key]">
                    <VPIcon :icon="icon" size="16" />
                </div>
            </button>
        </div>
        <NeoCategoriesBar v-show="buttonsType === 'category'" :categoriesData="categoriesAndTagsSymbol?.categories" :category="category" />
        <NeoTagsBar v-show="buttonsType === 'tag'" :tagsData="categoriesAndTagsSymbol.tags" :tag="tag" />
        <NeoColumnsBar v-show="buttonsType === 'cloumn'" :columnsData="categoriesAndTagsSymbol.columns" :column="column" />
    </div>
</template>

<script>
import { onMounted, ref, computed, inject, watch, nextTick, onBeforeUnmount } from 'vue'
import { useThemeLocaleData } from '../composables/neoIndex.js'
import NeoCategoriesBar from '@theme/NeoCategoriesBar.vue'
import NeoColumnsBar from '@theme/NeoColumnsBar.vue'
import NeoTagsBar from '@theme/NeoTagsBar.vue'
import { useRoute, useRouter } from 'vuepress/client';

export default {
    components: { NeoCategoriesBar, NeoTagsBar, NeoColumnsBar },
    props: {},
    setup(props) {
        const buttons = new Map([
            // ["article", 'neo-wenzhang'],
            ['category', 'fa-solid fa-folder-tree'],
            ['tag', 'fa-solid fa-tags'],
            ['cloumn', 'fa-solid fa-columns']
        ])

        const themeLocale = useThemeLocaleData()
        const locale = computed(() => themeLocale.value.blogLocales)
        function handleClasses(key) {
            buttonsType.value = key
        }

        const categoriesAndTagsSymbol = inject('categoriesAndTagsSymbol').value

        let category = ref(null)
        let tag = ref(null)
        let column = ref(null)
        let buttonsType = ref('')
        const route = useRoute()
        const router = useRouter()

        onMounted(() => {
            let { category = '', tag = '', column } = route.query
            refreshTotal(category, tag, column)
            !buttonsType.value && (buttonsType.value = pageType.value)

            // 滚动条定位到当前分类（增强用户体验）
            const cateEl = document.querySelector('.articles-wrapper .categories')
            if (cateEl) {
                setTimeout(() => {
                    const activeEl = cateEl.querySelector('.categories .active')
                    const topVal = activeEl ? Math.abs(cateEl.getBoundingClientRect()?.top - activeEl.getBoundingClientRect()?.top) : 0
                    cateEl.scrollTo({ top: topVal, behavior: 'smooth' })
                }, 300)
            }
        })

        watch([() => route.query.category, () => route.query.tag, () => route.query.column], ([category, tag, column], [prevCategory, prevTag, prevColumn]) => {
            refreshTotal(category, tag, column)
        })
        const pageType = computed(() => {
            const typeMap = {
                '/categories/': 'category',
                '/tags/': 'tag',
                '/columns/': 'cloumn'
            }
            return typeMap[route.path] || 'category'
        })
        function refreshTotal(queryCategory, queryTag, queryColumn, p = 1) {
            category.value = queryCategory ? decodeURIComponent(queryCategory) : ''
            tag.value = queryTag ? decodeURIComponent(queryTag) : ''
            column.value = queryColumn ? decodeURIComponent(queryColumn) : ''
        }
        // reset open tags after navigation
        const unregisterRouterHook = router.afterEach(to => {
            nextTick(() => {
                buttonsType.value = pageType.value
            })
        })
        onBeforeUnmount(() => {
            unregisterRouterHook()
        })

        return {
            tag,
            column,
            locale,
            buttons,
            category,
            buttonsType,
            handleClasses,
            categoriesAndTagsSymbol
        }
    }
}
</script>

<style lang="scss" scoped>
.blog-type-wrapper {
    margin-top: 0.75rem;
    .blog-type {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.75rem;
    }

    .blog-type-button {
        border-width: 0;
        background-color: transparent;
        margin: 0 8px;
        padding: 4px;

        &:focus {
            outline: none;
        }

        .icon-wapper {
            width: 20px;
            height: 20px;
            padding: 8px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--vp-c-text-lighter);
            background: rgb(127 127 127 / 15%);
            &:hover {
                cursor: url('https://r2-site.feyoudao.cn/pointer.cur'), pointer;
            }
            &.active {
                color: var(--neo-c-brand);
                background-color: rgba(var(--neo-c-brand-rgb), 0.2);
            }
        }
    }
    :deep(.dark-shadow) {
        box-shadow: none;
        &:hover {
            box-shadow: none;
        }
        .categories,
        .tags {
            // max-height: calc(100vh - var(--navbar-height) - 460px);
            max-height: 310px;
            overflow-y: auto;
        }
    }
}
</style>
