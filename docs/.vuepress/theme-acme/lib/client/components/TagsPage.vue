<template>
    <Layout>
        <template #content-left>
            <TagsBar
                v-if="$categoriesAndTags.tags.length"
                :tagsData="$categoriesAndTags.tags"
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
                v-if="$categoriesAndTags.tags.length"
                :tagsData="$categoriesAndTags.tags"
                :tag="tag"
            />
        </template>
    </Layout>
</template>

<script>
import Layout from './Layout.vue'
import PostList from './PostList.vue'
import Pagination from './Pagination.vue'
import TagsBar from './TagsBar.vue'
import { onMounted, ref, inject, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
    components: { Layout, PostList, Pagination, TagsBar },
    setup() {
        let tag = ref()
        let total = ref(0) // 总长
        let perPage = ref(10) // 每页长
        let currentPage = ref(1) // 当前页
        const $groupPosts = inject('$groupPosts').value
        const $sortPosts = inject('$sortPosts').value
        const $categoriesAndTags = inject('$categoriesAndTags').value
        const $route = useRoute()
        onMounted(() => {
            let { tag = '', p = 1 } = useRoute().query
            refreshTotal(tag, p)
        })
        watch(() => $route.query.tag, (tag) => {
            refreshTotal(tag, 1)
        })
        function refreshTotal(queryTag, p = 1) {
            tag.value = queryTag ? decodeURIComponent(queryTag) : ''
            total.value = tag.value ? $groupPosts.tags[tag.value].length : $sortPosts.length
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
            $categoriesAndTags,
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
