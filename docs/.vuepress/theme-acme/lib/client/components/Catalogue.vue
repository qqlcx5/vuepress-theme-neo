<script setup lang="ts">
import { computed, toRefs } from 'vue'
// @ts-ignore
import Catalogue from '@theme/Catalogue.vue'
const props = defineProps({
    list: {
        type: Array,
        defalut: () => [],
    },
})
const { list } = toRefs(props)
</script>

<template>
    <div class="acme-ptb-20">
        <div
            v-for="item in list"
            :key="item"
        >
            <div v-if="item.children">
                {{item.text}} 目录
                <Catalogue :list="item.children" />
            </div>
            <RouterLink v-else :to="item">
                {{ item }}
            </RouterLink>
        </div>
    </div>
</template>
