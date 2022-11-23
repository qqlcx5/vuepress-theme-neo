<script setup lang="ts">
import { reactive, toRefs } from 'vue'
// @ts-ignore
import Catalogue from '@theme/Catalogue.vue'
const props = defineProps({
    list: {
        type: Array,
        defalut: () => []
    }
})
const toggleObj = reactive({})
const toggleClick = (index: number) => {
    toggleObj[index] = !toggleObj[index]
}
const { list } = toRefs(props)
</script>

<template>
    <ul class="acme-pl-0">
        <li v-for="(item, index) in list" :key="item" class="acme-ptb-4 acme-pr-8">
            <template v-if="item.children?.length">
                <div class="acme-pb-4 cursor-pointer" @click.stop="toggleClick(index)">
                    <AcmeIcon name="acme-wenjianlan" class="acme-mr-4" />
                    <span class="catalogue-title">{{ item.text }} 目录</span>
                    <AcmeIcon :name="toggleObj[index] ? 'acme-xiangxiajiantou' : 'acme-xiangshangjiantou'" class="acme-mr-4" />
                </div>
                <Transition name="fade-slide-y" mode="out-in">
                    <Catalogue v-show="!toggleObj[index]" :list="item.children" />
                </Transition>
            </template>

            <RouterLink v-else :to="item.link" :title="item.text">
                <AcmeIcon name="acme-md" class="acme-mr-4" />
                {{ index + 1 }}.{{ item.text }}
            </RouterLink>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
ul ul {
    margin-bottom: 16px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(var(--c-brand-rgb), 0.08);
    li {
        width: 50%;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        // 1 4 5 8 9 12 13 16 17 20 21 24 25 28 29 32 33 36 37 40 41 44 45 48 49 52 53 56 57 60 61 64 65 68 69 72 73 76 77 80 81 84 85 88 89 92 93 96 97 100
        // &:nth-of-type(4n) {
        //     background-color: rgba(var(--c-brand-rgb), 0.07);
        // }
        // &:nth-of-type(4n + 1) {
        //     background-color: rgba(var(--c-brand-rgb), 0.07);
        // }
        // 2 3 6 7 10 11 14 15 18 19 22 23 26 27 30 31 34 35 38 39 42 43 46 47 50 51 54 55 58 59 62 63 66 67 70 71 74 75 78 79 82 83 86 87 90 91 94 95 98 99
        &:nth-of-type(4n - 1) {
            background-color: rgba(var(--c-brand-rgb), 0.09);
        }
        &:nth-of-type(4n + 2) {
            background-color: rgba(var(--c-brand-rgb), 0.09);
        }

        a {
            color: var(--c-text-light);
            font-weight: normal;
            &:hover {
                text-decoration: none;
            }
        }
    }
}
.catalogue-title {
    color: var(--c-text);
    font-weight: 500;
}
li {
    list-style: none;
}
.cursor-pointer {
    cursor: pointer;
}
</style>
