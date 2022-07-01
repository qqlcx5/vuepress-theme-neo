<template>
    <div class="custom-page tags-page">
        <MainLayout>
            <template #mainLeft>
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
            <template #mainRight>
                <TagsBar
                    v-if="$categoriesAndTags.tags.length"
                    :tagsData="$categoriesAndTags.tags"
                    :tag="tag"
                />
            </template>
        </MainLayout>
    </div>
</template>

<script>
import MainLayout from './MainLayout.vue'
import PostList from './PostList.vue'
import Pagination from './Pagination.vue'
import TagsBar from './TagsBar.vue'
import { onMounted, ref, inject, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
    components: { MainLayout, PostList, Pagination, TagsBar },
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
.tags-page {
    .tags-wrapper {
        position: sticky;
        top: ($navbarHeight + 0.9rem);
        max-height: calc(100vh - 10rem);
        min-height: 4.2rem;
        @media (max-width: $MQMobile) {
            display: none;
        }
        .tags {
            max-height: calc(100vh - 14rem);
            min-height: 2.2rem;
            overflow-x: hidden;
            overflow-y: auto;
            transition: all 0.2s;
        }
    }
}
.tags-page {
    .main-left {
        .tags-wrapper {
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
            .tags {
                max-height: 11.5rem;
            }
        }
    }
}
</style>
