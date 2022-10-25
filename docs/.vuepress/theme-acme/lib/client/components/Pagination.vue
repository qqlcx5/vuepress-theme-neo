<template>
    <div class="pagination">
        <span
            class="dark-shadow prev"
            :class="{disabled: currentPage === 1}"
            @click="goPrex()"
        >
            <AIcon
                name="acme-zuojiantou"
                customStyle
            />
            <p>上一页</p>
        </span>

        <!-- 分页在5页及以下时 -->
        <div
            class="pagination-list"
            v-if="pages <= 5"
        >
            <span
                class="dark-shadow"
                v-for="item in pages"
                :key="item"
                :class="{active: currentPage === item}"
                @click="goIndex(item)"
            >{{item}}</span>
        </div>
        <!-- 分页在5页以上 -->
        <div
            class="pagination-list"
            v-else
        >
            <!-- 一号位 -->
            <span
                class="dark-shadow"
                :class="{active: currentPage === 1}"
                @click="goIndex(1)"
            >1</span>

            <!-- 二号位 -->
            <span
                class="ellipsis ell-two"
                v-show="currentPage > 3"
                @click="goIndex(currentPage - 3)"
                title="上三页"
            />
            <!-- <span
                class="dark-shadow"
                v-show="currentPage <= 3"
                :class="{active: currentPage === 2}"
                @click="goIndex(2)"
            >2</span> -->
            <!-- 三号位基点 -->
            <span
                class="dark-shadow"
                :class="{active: currentPage === 2}"
                @click="goIndex(threeNum() - 1)"
            >{{ threeNum() - 1 }}</span>
            <!-- 三号位 -->
            <span
                class="dark-shadow"
                :class="{active: currentPage >= 3 && currentPage <= (pages - 2)}"
                @click="goIndex(threeNum())"
            >{{ threeNum() }}</span>
            <!-- 三号位基点 -->
            <span
                class="dark-shadow"
                :class="{active: currentPage === pages - 1}"
                @click="goIndex(threeNum() + 1)"
            >{{ threeNum() + 1 }}</span>

            <!-- 四号位 -->
            <span
                class="ellipsis ell-four"
                v-show="currentPage < (pages - 2)"
                @click="goIndex(currentPage + 3)"
                title="下三页"
            />
            <!-- <span
                class="dark-shadow"
                v-show="currentPage >= (pages - 2)"
                :class="{active: currentPage === pages-1}"
                @click="goIndex(pages-1)"
            >{{ pages-1 }}</span> -->

            <!-- 五号位 -->
            <span
                class="dark-shadow"
                :class="{active: currentPage === pages}"
                @click="goIndex(pages)"
            >{{pages}}</span>
        </div>

        <span
            class="dark-shadow next"
            :class="{disabled: currentPage === pages}"
            @click="goNext()"
        >
            <p>下一页</p>
            <AIcon
                name="acme-youjiantou"
                customStyle
            />
        </span>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: {
        total: { // 总长度
            type: Number,
            default: 10
        },
        perPage: { // 每页长
            type: Number,
            default: 10
        },
        currentPage: { // 当前页
            type: Number,
            default: 1
        }
    },
    setup(props, { emit }) {
        // 总页数
        const pages = computed(() => {
            return Math.ceil(props.total / props.perPage)
        })
        // 三号位页码计算
        function threeNum() {
            let num = 3
            const currentPage = props.currentPage
            const page = pages?.value || 0
            if (currentPage < 3) {
                num = 3
            } else if (currentPage > (page - 3)) {
                num = page - 2
            } else {
                num = currentPage
            }
            return num
        }

        function goPrex() {
            let currentPage = props.currentPage
            if (currentPage > 1) {
                handleEmit(--currentPage)
            }
        }
        function goNext() {
            let currentPage = props.currentPage
            if (currentPage < pages.value) {
                handleEmit(++currentPage)
            }
        }
        function goIndex(i) {
            if (i !== props.currentPage) {
                handleEmit(i)
            }
        }
        function handleEmit(i) {
            emit('getCurrentPage', i)
        }
        return {
            handleEmit,
            goIndex,
            goPrex,
            goNext,
            threeNum,
            pages
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

.pagination {
    position: relative;
    height: 60px;
    text-align: center;
    span {
        line-height: 1rem;
        opacity: 0.9;
        cursor: pointer;
        user-select: none;
        &:hover {
            color: $accentColor;
        }
        &.ellipsis {
            opacity: 0.5;
            &::before {
                content: '...';
                font-size: 1.2rem;
            }
            @media (any-hover: hover) {
                &.ell-two {
                    &:hover {
                        &::before {
                            content: '«';
                        }
                    }
                }
                &.ell-four {
                    &:hover {
                        &::before {
                            content: '»';
                        }
                    }
                }
            }
        }
    }
    > span {
        position: absolute;
        top: 0;
        padding: 1rem 1.2rem;
        font-size: 0.95rem;
        &.disabled {
            color: rgba(125, 125, 125, 0.5);
        }
        &.prev {
            left: 0;
            // border-top-right-radius: 32px;
            // border-bottom-right-radius: 32px;
        }
        &.next {
            right: 0;
            // border-top-left-radius: 32px;
            // border-bottom-left-radius: 32px;
            &::before {
                float: right;
                margin-left: 0.3rem;
            }
        }
        p {
            display: inline;
            line-height: 0.95rem;
        }
    }
    .pagination-list {
        span {
            display: inline-block;
            width: 2.5rem;
            height: 2.5rem;
            line-height: 2.5rem;
            margin: 0.3rem;
            &.active {
                background: $accentColor;
                color: var(--c-bg);
            }
        }
    }
}
// @media (max-width: 800px) {
//     .pagination {
//         > span {
//             padding: 1rem 1.5rem;
//             p {
//                 display: none;
//             }
//         }
//     }
// }
// 719px
@media (max-width: $MQMobile) {
    .pagination {
        > span {
            // 左右按钮
            padding: 0.86rem 1.5rem;
            p {
                display: none;
            }
        }
        .pagination-list {
            span {
                width: 2.3rem;
                height: 2.3rem;
                line-height: 2.3rem;
                margin: 0.23rem;
            }
        }
    }
}
@media (max-width: 390px) {
    .pagination {
        > span {
            // 左右按钮
            padding: 0.5rem 1.3rem;
            margin: 0.2rem 0;
        }
        .pagination-list {
            span {
                width: 2rem;
                height: 2rem;
                line-height: 2rem;
                margin: 0.14rem;
                // margin-top: 0.3rem;
            }
        }
    }
}
</style>
