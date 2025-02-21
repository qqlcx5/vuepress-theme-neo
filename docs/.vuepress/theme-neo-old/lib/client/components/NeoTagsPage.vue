<template>
    <NeoBlogLayout>
        <template #content-left>
            <!-- <TagsBar
                v-if="categoriesAndTagsSymbol.tags.length"
                :tagsData="categoriesAndTagsSymbol.tags"
                :tag="tag"
            /> -->
            <NeoPostList
                mode="tag"
                :tag="tag"
                :perPage="perPage"
                :currentPage="currentPage"
            />
            <NeoPagination
                :total="total"
                :perPage="perPage"
                :currentPage="currentPage"
                @getCurrentPage="handlePagination"
                v-show="Math.ceil(total / perPage) > 1"
            />
            <!-- <NoData :showImg="!tag" /> -->
        </template>
        <!-- <template #content-right>
            <BloggerInfo />
            <TagsBar
                v-if="categoriesAndTagsSymbol.tags.length"
                :tagsData="categoriesAndTagsSymbol.tags"
                :tag="tag"
            />
        </template> -->
    </NeoBlogLayout>
</template>

<script>
import NeoBlogLayout from '@theme/NeoBlogLayout.vue'
import NeoPostList from '@theme/NeoPostList.vue'
import NeoPagination from '@theme/NeoPagination.vue'
import NeoTagsBar from '@theme/NeoTagsBar.vue'
import NeoNoData from '@theme/NeoNoData.vue'
import NeoBloggerInfo from '@theme/NeoBloggerInfo.vue'
import { onMounted, ref, inject, watch } from 'vue'
import { useRoute } from 'vuepress/client';
export default {
    components: { NeoBlogLayout, NeoPostList, NeoPagination, NeoTagsBar, NeoNoData, NeoBloggerInfo },
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
            handlePagination,
            categoriesAndTagsSymbol,
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;;
.content-left .tags-wrapper {
    display: none;
    @media (max-width: $MQNarrow) {
        display: block;
        margin-bottom: 0.75rem;
        :deep(.tags) {
            max-height: 12rem;
            overflow-y: auto;
        }
    }
}
</style>
