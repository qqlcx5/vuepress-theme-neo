<template>
    <Layout>
        <template #content-left>
            <CategoriesBar
                :categoriesData="_categoriesAndTags.categories"
                :category="category"
            />
            <PostList
                :currentPage="currentPage"
                :perPage="perPage"
                :category="category"
            />
            <Pagination
                :total="total"
                :perPage="perPage"
                :currentPage="currentPage"
                @getCurrentPage="handlePagination"
                v-show="Math.ceil(total / perPage) > 1"
            />
        </template>
        <template #content-right>
            <CategoriesBar
                v-if="_categoriesAndTags?.categories.length"
                :categoriesData="_categoriesAndTags?.categories"
                :category="category"
            />
        </template>
    </Layout>
</template>

<script>
import Layout from '@theme/TwoColumnLayout.vue'
import PostList from '@theme/PostList.vue'
import Pagination from '@theme/Pagination.vue'
import CategoriesBar from '@theme/CategoriesBar.vue'
import { onMounted, ref, inject, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
    components: { Layout, PostList, Pagination, CategoriesBar },
    setup() {
        const _groupPosts = inject('_groupPosts').value
        const _sortPosts = inject('_sortPosts').value
        const _categoriesAndTags = inject('_categoriesAndTags').value
        const $route = useRoute()
        let category = ref(null);
        let total = ref(0) // 总长
        let perPage = ref(10) // 每页长
        let currentPage = ref(1) // 当前页
        onMounted(() => {
            let { category = '', p = 1 } = $route.query
            refreshTotal(category, p)

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
        watch(() => $route.query.category, (queryCategory, prevCategory) => {
            refreshTotal(queryCategory, 1)
        })
        function refreshTotal(queryCategory, p = 1) {
            category.value = queryCategory ? decodeURIComponent(queryCategory) : ''
            total.value = category.value ? _groupPosts.categories[category.value].length : _sortPosts.length
            currentPage.value = Number(p)
        }
        // 分页
        function handlePagination(page) {
            currentPage.value = page
        }

        return {
            _groupPosts,
            _sortPosts,
            _categoriesAndTags,
            category,
            total,
            perPage,
            currentPage,
            handlePagination
        }
    }
}
</script>
<style lang='scss'>
@import '../styles/_variables';

.content-left .categories-wrapper {
    display: none;
    @media (max-width: $MQNarrow) {
        display: block;
        margin-bottom: 0.75rem;
        .categories {
            max-height: 12rem;
            overflow-y: auto;
        }
    }
}
</style>
