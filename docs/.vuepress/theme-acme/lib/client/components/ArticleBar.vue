<template>
    <div class="articles-wrapper dark-shadow">
        <div class="blog-type-wrapper">
            <button v-for="[key, icon] of buttons" :key="key" class="blog-type-button" @click="handleButton(key)">
                <div class="icon-wapper" :class="{ active: buttonsType === key }" :aria-label="locale[key]">
                    <AIcon :name="icon" size="18" spin />
                </div>
            </button>
        </div>
        <CategoriesBar v-show="buttonsType === 'category'" :categoriesData="categoriesAndTagsSymbol?.categories" :category="category" />
        <TagsBar v-show="buttonsType === 'tag'" :tagsData="categoriesAndTagsSymbol.tags" :tag="tag" />
    </div>
</template>

<script>
import { onMounted, ref, computed, inject, watch } from 'vue'
import { useThemeLocaleData } from '../composables/index.js'
import CategoriesBar from '@theme/CategoriesBar.vue'
import TagsBar from '@theme/TagsBar.vue'
import { useRoute } from 'vue-router'

export default {
    components: { CategoriesBar, TagsBar },
    props: {},
    setup(props) {
        const buttons = new Map([
            // ["article", 'acme-wenzhang'],
            ['category', 'acme-fenlei'],
            ['tag', 'acme-tag']
        ])

        const themeLocale = useThemeLocaleData()

        const locale = computed(() => themeLocale.value.blogLocales)
        function handleButton(key) {
            buttonsType.value = key
        }

        const categoriesAndTagsSymbol = inject('categoriesAndTagsSymbol').value

        let category = ref(null)
        let tag = ref(null)
        let buttonsType = ref('category')
        const route = useRoute()

        onMounted(() => {
            let { category = '', tag = '', p = 1 } = route.query
            refreshTotal(category, tag, p)

            // 滚动条定位到当前分类（增强用户体验）
            const cateEl = document.querySelector('.categories')
            if (cateEl) {
                setTimeout(() => {
                    const activeEl = cateEl.querySelector('.active')
                    const topVal = activeEl ? activeEl.offsetTop : 0
                    cateEl.scrollTo({ top: topVal, behavior: 'smooth' })
                }, 300)
            }
        })

        watch([() => route.query.category, () => route.query.tag], ([category, tag], [prevCategory, prevTag]) => {
            buttonsType.value = tag ? 'tag' : 'category'
            refreshTotal(category, tag, 1)
        })

        function refreshTotal(queryCategory, queryTag, p = 1) {
            category.value = queryCategory ? decodeURIComponent(queryCategory) : ''
            tag.value = queryTag ? decodeURIComponent(queryTag) : ''
        }

        return {
            tag,
            category,
            buttons,
            buttonsType,
            handleButton,
            locale,
            categoriesAndTagsSymbol
        }
    }
}
</script>

<style lang="scss">
.articles-wrapper {
    padding-top: 0.75rem;
    margin-top: 0.75rem;
}
.blog-type-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
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
        background: rgb(127 127 127 / 15%);
        &:hover {
            cursor: pointer;
        }
        &.active {
            background-color: rgba(var(--c-brand-rgb), 0.68);
        }
    }
}
</style>
