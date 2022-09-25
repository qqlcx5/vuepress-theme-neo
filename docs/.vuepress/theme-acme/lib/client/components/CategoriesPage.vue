<template>
    <BlogLayout>
        <template #content-left>
            <CategoriesBar
                :categoriesData="categoriesAndTagsSymbol.categories"
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
                v-show="Math.ceil(total / perPage) > 1 && category"
            />
            <NoData :showImg="!category" />
        </template>
    </BlogLayout>
</template>

<script>
import BlogLayout from '@theme/BlogLayout.vue'
import PostList from '@theme/PostList.vue'
import Pagination from '@theme/Pagination.vue'
import CategoriesBar from '@theme/CategoriesBar.vue'
import NoData from '@theme/NoData.vue'
import BloggerInfo from '@theme/BloggerInfo.vue'
import { onMounted, ref, inject, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
    components: { BlogLayout, PostList, Pagination, CategoriesBar, NoData, BloggerInfo },
    setup() {
        const groupPostsSymbol = inject('groupPostsSymbol').value
        const sortPostsSymbol = inject('sortPostsSymbol').value
        const categoriesAndTagsSymbol = inject('categoriesAndTagsSymbol').value
        const route = useRoute()
        let category = ref(null);
        let total = ref(0) // 总长
        let perPage = ref(10) // 每页长
        let currentPage = ref(1) // 当前页
        onMounted(() => {
            let { category = '', p = 1 } = route.query
            refreshTotal(category, p)

            // 滚动条定位到当前分类（增强用户体验）
            const cateEl = document.querySelector('.categories')
            if (cateEl) {
                setTimeout(() => {
                    const activeEl = cateEl.querySelector('.categories .active')
                    const topVal = activeEl ? Math.abs(cateEl.getBoundingClientRect()?.top - activeEl.getBoundingClientRect()?.top) : 0
                    cateEl.scrollTo({ top: topVal, behavior: 'smooth' })
                }, 300)
            }
        })
        watch(() => route.query.category, (queryCategory, prevCategory) => {
            refreshTotal(queryCategory, 1)
        })
        function refreshTotal(queryCategory, p = 1) {
            category.value = queryCategory ? decodeURIComponent(queryCategory) : ''
            total.value = category.value ? groupPostsSymbol.categories[category.value].length : sortPostsSymbol.length
            currentPage.value = Number(p)
        }
        // 分页
        function handlePagination(page) {
            currentPage.value = page
        }

        return {
            total,
            perPage,
            category,
            currentPage,
            handlePagination,
            categoriesAndTagsSymbol,
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_variables';

.content-left .categories-wrapper {
    display: none;
    @media (max-width: $MQNarrow) {
        display: block;
        margin-bottom: 0.75rem;
        :deep(.categories) {
            max-height: 12rem;
            overflow-y: auto;
        }
    }
}
</style>
