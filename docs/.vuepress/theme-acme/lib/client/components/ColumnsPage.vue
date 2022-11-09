<template>
    <BlogLayout>
        <template #content-left>
            <ColumnsBar
                :columnsData="categoriesAndTagsSymbol.columns"
                :column="column"
            />
            <PostList
                :perPage="perPage"
                :column="column"
                :currentPage="currentPage"
            />
            <Pagination
                :total="total"
                :perPage="perPage"
                :currentPage="currentPage"
                @getCurrentPage="handlePagination"
                v-show="Math.ceil(total / perPage) > 1"
            />
        </template>
    </BlogLayout>
</template>

<script>
import BlogLayout from '@theme/BlogLayout.vue'
import PostList from '@theme/PostList.vue'
import Pagination from '@theme/Pagination.vue'
import ColumnsBar from '@theme/ColumnsBar.vue'
import { onMounted, ref, inject, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
    components: { BlogLayout, PostList, Pagination, ColumnsBar },
    setup() {
        const groupPostsSymbol = inject('groupPostsSymbol').value
        const sortPostsSymbol = inject('sortPostsSymbol').value
        const categoriesAndTagsSymbol = inject('categoriesAndTagsSymbol').value
        const route = useRoute()
        let column = ref(null);
        let total = ref(0) // 总长
        let perPage = ref(10) // 每页长
        let currentPage = ref(1) // 当前页
        onMounted(() => {
            let { column = '', p = 1 } = route.query
            refreshTotal(column, p)

            // 滚动条定位到当前分类（增强用户体验）
            const cateEl = document.querySelector('.columns')
            if (cateEl) {
                setTimeout(() => {
                    const activeEl = cateEl.querySelector('.columns .active')
                    const topVal = activeEl ? Math.abs(cateEl.getBoundingClientRect()?.top - activeEl.getBoundingClientRect()?.top) : 0
                    cateEl.scrollTo({ top: topVal, behavior: 'smooth' })
                }, 300)
            }
        })
        watch(() => route.query.column, (queryColumn, prevColumn) => {
            refreshTotal(queryColumn, 1)
        })
        function refreshTotal(queryColumn, p = 1) {
            column.value = queryColumn ? decodeURIComponent(queryColumn) : ''
            total.value = column.value ? groupPostsSymbol.columns[column.value]?.length : sortPostsSymbol.length
            currentPage.value = Number(p)
        }
        // 分页
        function handlePagination(page) {
            currentPage.value = page
        }

        return {
            total,
            column,
            perPage,
            currentPage,
            handlePagination,
            categoriesAndTagsSymbol,
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_variables';

.content-left .columns-wrapper {
    display: none;
    @media (max-width: $MQNarrow) {
        display: block;
        margin-bottom: 0.75rem;
        :deep(.columns) {
            max-height: 12rem;
            overflow-y: auto;
        }
    }
}
</style>