<template>
    <div class="articles-wrapper dark-shadow">
        <div class="blog-type-wrapper">
            <button v-for="[key, icon] of buttons" :key="key" class="blog-type-button" @click="handleButton(key)">
                <div class="icon-wapper" :class="{ active: buttonsType === key }" :aria-label="locale[key]">
                    <AIcon :name="icon" size="18" spin />
                </div>
            </button>
        </div>
        <CategoriesBar v-if="buttonsType === 'category'" :categoriesData="categoriesAndTagsSymbol?.categories" :category="category" />
        <TagsBar v-if="buttonsType === 'tag'" :tagsData="categoriesAndTagsSymbol.tags" :tag="tag" />
    </div>
</template>

<script>
import { ref, computed, inject } from 'vue'
import { useThemeLocaleData } from '../composables/index.js'
import CategoriesBar from '@theme/CategoriesBar.vue'
import TagsBar from '@theme/TagsBar.vue'

export default {
    components: { CategoriesBar, TagsBar },
    props: {},
    setup(props) {
        const buttons = new Map([
            // ["article", 'acme-wenzhang'],
            ['category', 'acme-fenlei'],
            ['tag', 'acme-tag']
        ])
        let buttonsType = ref('category')
        const themeLocale = useThemeLocaleData()

        const locale = computed(() => themeLocale.value.blogLocales)
        function handleButton(key) {
            buttonsType.value = key
        }

        const categoriesAndTagsSymbol = inject('categoriesAndTagsSymbol').value
        return {
            buttons,
            buttonsType,
            handleButton,
            locale,
            categoriesAndTagsSymbol
            // tags,
            // tagStyleList
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
