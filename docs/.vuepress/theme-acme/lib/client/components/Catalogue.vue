<script setup lang="ts">
import { reactive, toRefs } from 'vue'
// @ts-ignore
import Catalogue from '@theme/Catalogue.vue'
const props = defineProps({
    list: {
        type: Array,
        defalut: () => [],
    },
})
const toggleObj = reactive({})
const toggleClick = (index: number) => {
    toggleObj[index] = !toggleObj[index]
}
const { list } = toRefs(props)
</script>

<template>
    <ul class="acme-pl-0 acme-pb-16">
        <li
            v-for="(item, index) in list"
            :key="item"
            class="acme-ptb-4"
        >
            <template v-if="item.children?.length">
                <div
                    class="acme-pb-4 cursor-pointer"
                    @click.stop="toggleClick(index)"
                >
                    <AcmeIcon
                        name="acme-wenjianlan"
                        class="acme-mr-4"
                    />
                    {{ item.text }} 目录
                    <AcmeIcon
                        :name="toggleObj[index] ? 'acme-xiangxiajiantou' : 'acme-xiangshangjiantou'"
                        class="acme-mr-4"
                    />
                </div>
                <Transition
                    name="fade-slide-y"
                    mode="out-in"
                >
                    <Catalogue
                        v-show="!toggleObj[index]"
                        :list="item.children"
                    />
                </Transition>
            </template>

            <RouterLink
                v-else
                :to="item.link"
            >
                <AcmeIcon
                    name="acme-md"
                    class="acme-mr-4"
                />
                {{ item.text }}
            </RouterLink>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
li {
    list-style: none;
}
.cursor-pointer {
    cursor: pointer;
}
</style>
