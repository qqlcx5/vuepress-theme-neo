<template>
    <Layout>
        <template #content-left>
            <TagsBar
                v-if="categoriesAndTagsSymbol.tags.length"
                :tagsData="categoriesAndTagsSymbol.tags"
                :tag="tag"
            />
            <PostList
                :currentPage="currentPage"
                :perPage="perPage"
                :tag="tag"
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
            <TagsBar
                v-if="categoriesAndTagsSymbol.tags.length"
                :tagsData="categoriesAndTagsSymbol.tags"
                :tag="tag"
            />
        </template>
    </Layout>
</template>

<script>
import Layout from '@theme/TwoColumnLayout.vue'
import PostList from '@theme/PostList.vue'
import Pagination from '@theme/Pagination.vue'
import TagsBar from '@theme/TagsBar.vue'
import { onMounted, ref, inject, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
    components: { Layout, PostList, Pagination, TagsBar },
    setup() {
        let tag = ref()
        let total = ref(0) // 总长
        let perPage = ref(10) // 每页长
        let currentPage = ref(1) // 当前页
        const sortPostsSymbol = inject('sortPostsSymbol').value
        const groupPostsSymbol = inject('groupPostsSymbol').value
        const categoriesAndTagsSymbol = inject('categoriesAndTagsSymbol').value
        const route = useRoute()
        onMounted(() => {
            let { tag = '', p = 1 } = useRoute().query
            refreshTotal(tag, p)
        })
        watch(() => route.query.tag, (tag) => {
            refreshTotal(tag, 1)
        })
        function refreshTotal(queryTag, p = 1) {
            tag.value = queryTag ? decodeURIComponent(queryTag) : ''
            total.value = tag.value ? groupPostsSymbol.tags[tag.value].length : sortPostsSymbol.length
            currentPage.value = Number(p)
        }
        // 分页
        function handlePagination(page) {
            currentPage.value = page
        }
        return {
            tag,
            total,
            perPage,
            currentPage,
            categoriesAndTagsSymbol,
            handlePagination
        }
    }
}
</script>

<style lang='scss'>
@import '../styles/_variables';
.content-left .tags-wrapper {
    display: none;
    @media (max-width: $MQNarrow) {
        display: block;
        margin-bottom: 0.75rem;
        .tags {
            max-height: 12rem;
            overflow-y: auto;
        }
    }
}
</style>
