<template>
    <MainLayout>
        <template #mainLeft>
            <div>11111</div>
            <!-- <CategoriesBar
          v-if="$categoriesAndTags.categories.length"
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
        /> -->
        </template>
        <template #mainRight>
            <div>
                222
            </div>
            <!-- <CategoriesBar
          v-if="$categoriesAndTags.categories.length"
          :categoriesData="$categoriesAndTags.categories"
          :category="category"
        /> -->
        </template>
    </MainLayout>
</template>
<script>
import MainLayout from './MainLayout.vue'
// import { inject } from 'vue'
export default {
    components: { MainLayout },
    setup() {
        // const site_pages = inject('site_pages')
        // return {
        //     site_pages,
        // }
    },
}
</script>
