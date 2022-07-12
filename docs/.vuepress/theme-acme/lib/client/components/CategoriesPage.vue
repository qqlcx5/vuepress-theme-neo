<template>
    <Layout>
        <template #content-left>
            <CategoriesBar
                :categoriesData="$categoriesAndTags.categories"
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
                v-if="$categoriesAndTags?.categories.length"
                :categoriesData="$categoriesAndTags?.categories"
                :category="category"
            />
        </template>
    </Layout>
</template>

<script>
import Layout from './Layout.vue'
import PostList from './PostList.vue'
import Pagination from './Pagination.vue'
import CategoriesBar from './CategoriesBar.vue'
import { onMounted, ref, inject, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
    components: { Layout, PostList, Pagination, CategoriesBar },
    setup() {
        const $groupPosts = inject('$groupPosts').value
        const $sortPosts = inject('$sortPosts').value
        const $categoriesAndTags = inject('$categoriesAndTags').value
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
            total.value = category.value ? $groupPosts.categories[category.value].length : $sortPosts.length
            currentPage.value = Number(p)
        }
        // 分页
        function handlePagination(page) {
            currentPage.value = page
        }

        return {
            $groupPosts,
            $sortPosts,
            $categoriesAndTags,
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
