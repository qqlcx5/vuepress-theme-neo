<template>
    <div class="articles-wrapper dark-shadow">
        <div class="blog-type-wrapper">
            <button
                v-for="[key, icon] of buttons"
                :key="key"
                class="blog-type-button"
                @click="handleClasses(key)"
            >
                <div
                    class="icon-wapper"
                    :class="{ active: buttonsType === key }"
                    :aria-label="locale[key]"
                >
                    <AIcon
                        :name="icon"
                        size="20"
                        customStyle
                    />
                </div>
            </button>
        </div>
        <CategoriesBar
            v-show="buttonsType === 'category'"
            :categoriesData="categoriesAndTagsSymbol?.categories"
            :category="category"
        />
        <TagsBar
            v-show="buttonsType === 'tag'"
            :tagsData="categoriesAndTagsSymbol.tags"
            :tag="tag"
        />
    </div>
</template>

<script>
import { onMounted, ref, computed, inject, watch, nextTick, onBeforeUnmount } from 'vue'
import { useThemeLocaleData } from '../composables/index.js'
import CategoriesBar from '@theme/CategoriesBar.vue'
import TagsBar from '@theme/TagsBar.vue'
import { useRoute, useRouter } from 'vue-router'

export default {
    components: { CategoriesBar, TagsBar },
    props: {},
    setup(props) {
        const buttons = new Map([
            // ["article", 'acme-wenzhang'],
            ['category', 'acme-all'],
            ['tag', 'acme-biaoqian5'],
            ['cloumn', 'acme-lanmuleibie']
        ])

        const themeLocale = useThemeLocaleData()
        const locale = computed(() => themeLocale.value.blogLocales)
        function handleClasses(key) {
            buttonsType.value = key
        }

        const categoriesAndTagsSymbol = inject('categoriesAndTagsSymbol').value

        let category = ref(null)
        let tag = ref(null)
        let buttonsType = ref('category')
        const route = useRoute()
        const router = useRouter()

        onMounted(() => {
            let { category = '', tag = '' } = route.query
            refreshTotal(category, tag)

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

        watch([() => route.query.category, () => route.query.tag], ([category, tag], [prevCategory, prevTag]) => {
            refreshTotal(category, tag)
        })

        function refreshTotal(queryCategory, queryTag, p = 1) {
            category.value = queryCategory ? decodeURIComponent(queryCategory) : ''
            tag.value = queryTag ? decodeURIComponent(queryTag) : ''
        }
        // reset open tags after navigation
        const unregisterRouterHook = router.afterEach((to) => {
            nextTick(() => {
                buttonsType.value = route.path === '/tags/' ? 'tag' : 'category'
            })
        })
        onBeforeUnmount(() => {
            unregisterRouterHook()
        })

        return {
            tag,
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
.articles-wrapper {
    margin-top: 0.75rem;
    .blog-type-wrapper {
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
            color: var(--c-text-lighter);
            background: rgb(127 127 127 / 15%);
            &:hover {
                cursor: pointer;
            }
            &.active {
                color: var(--c-brand);
                background-color: rgba(var(--c-brand-rgb), 0.2);
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
            max-height: calc(100vh - var(--navbar-height) - 460px);
            overflow-y: auto;
        }
    }
}
</style>
