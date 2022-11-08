<template>
    <div class="site-info dark-shadow">
        <div class="site-info__title">
            <AIcon name="acme-wangzhan" />
            本站信息
        </div>
        <div class="site-info__item">
            <div class="site-info__item-label">
                <AIcon name="acme-danwenben" />
                文章数目：
            </div>
            <div class="site-info__item-value">{{ mdFileCount }} 篇</div>
        </div>
        <div class="site-info__item">
            <div class="site-info__item-label">
                <AIcon name="acme-yun" />
                已运行时间：
            </div>
            <div class="site-info__item-value">{{ createToNowDay != 0 ? createToNowDay + ' 天' : '不到一天' }}</div>
        </div>
        <div class="site-info__item">
            <div class="site-info__item-label">
                <AIcon name="acme-wenku" />
                本站总字数：
            </div>
            <div class="site-info__item-value">{{ totalWords }} 字</div>
        </div>
        <div class="site-info__item">
            <div class="site-info__item-label">
                <AIcon name="acme-shijian" />
                最后活动时间：
            </div>
            <div class="site-info__item-value">{{ lastActiveDate == '刚刚' ? '刚刚' : lastActiveDate + '前' }}</div>
        </div>
        <div class="site-info__item">
            <div class="site-info__item-label">
                <AIcon name="acme-yonghuliang" />
                本站被访问了：
            </div>
            <div class="site-info__item-value">
                <span id="busuanzi_value_site_pv">
                    <AIcon name="acme-loading" spin />
                </span>
                次
            </div>
        </div>
        <div class="site-info__item">
            <div class="site-info__item-label">
                <AIcon name="acme-yuyan" />
                您的访问排名：
            </div>
            <div class="site-info__item-value">
                <span id="busuanzi_value_site_uv">
                    <AIcon name="acme-loading" spin />
                </span>
                名
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, inject } from 'vue'
import { dayDiff, timeDiff } from '../utils/index.js'
import busuanzi from '../composables/ownbusuanzi'
import { useThemeLocaleData } from '../composables/index.js'

export default {
    setup(props, { emit }) {
        const themeLocale = useThemeLocaleData()
        let mdFileCount = ref(0) // markdown 文档总数
        let createToNowDay = ref(0) // 博客创建时间距今多少天
        let lastActiveDate = ref('') // 最后活动时间
        let totalWords = inject('allWordCountSymbol') // 本站总字数
        const sortPostsSymbol = inject('sortPostsSymbol').value
        const sortPostsByDateSymbol = inject('sortPostsByDateSymbol').value

        onMounted(() => {
            busuanzi()
            mdFileCount.value = sortPostsSymbol.length || 0
            let bolgCreateTime = themeLocale.value.bolgCreateAt || '2022-01-01'
            createToNowDay.value = dayDiff(bolgCreateTime)
            lastActiveDate.value = timeDiff(sortPostsByDateSymbol[0]?.data?.git?.updatedTime)
        })
        return {
            mdFileCount,
            createToNowDay,
            lastActiveDate,
            totalWords
        }
    }
}
</script>

<style lang="scss" scoped>
.site-info {
    font-size: 0.875rem;
    line-height: 1.1;
    margin-top: 0.75rem;
    padding: 0.75rem 0;
    user-select: none;

    &__title {
        color: #333;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
    }
    &__item {
        padding: 0.68rem 0.95rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-label {
            color: #333;
            display: flex;
            align-items: center;
        }
        &-value {
            color: #666;
            display: flex;
            align-items: center;
        }
    }
}
</style>
