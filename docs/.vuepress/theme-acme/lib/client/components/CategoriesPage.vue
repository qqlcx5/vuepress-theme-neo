<template>
    <div class="custom-page categories-page">
        <MainLayout>
            <template #mainLeft>
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
            <template #mainRight>
                <CategoriesBar
                    v-if="$categoriesAndTags?.categories.length"
                    :categoriesData="$categoriesAndTags?.categories"
                    :category="category"
                />
            </template>
        </MainLayout>
    </div>
</template>

<script>
import MainLayout from './MainLayout.vue'
import PostList from './PostList.vue'
import Pagination from './Pagination.vue'
import CategoriesBar from './CategoriesBar.vue'
import { onMounted, ref, inject, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
    components: { MainLayout, PostList, Pagination, CategoriesBar },
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
.categories-page {
    .categories-wrapper {
        position: sticky;
        top: ($navbarHeight + 0.9rem);
        max-height: calc(100vh - 10rem);
        min-height: 4.2rem;
        @media (max-width: $MQMobile) {
            display: none;
        }
        .categories {
            padding-right: 0.5rem;
            max-height: calc(100vh - 14rem);
            min-height: 2.2rem;
            overflow-y: auto;
            transition: all 0.2s;
            position: relative;
        }
    }
}
.categories-page {
    .main-left {
        .categories-wrapper {
            position: relative;
            top: 0;
            padding: 0.9rem 1.5rem;
            margin-bottom: 0.9rem;
            max-height: 15rem;
            border-radius: 0;
            display: none;
            @media (max-width: $MQMobile) {
                display: block;
            }
            .categories {
                max-height: 12rem;
            }
        }
    }
}
</style>
