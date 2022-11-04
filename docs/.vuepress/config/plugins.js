// const { path } from '@vuepress/utils'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { searchPlugin } from '@vuepress/plugin-search'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
// import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
// import typed from '../plugins/vuepress-plugin-typed'
// import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import { photoSwipePlugin } from 'vuepress-plugin-photo-swipe'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { commentPlugin } from 'vuepress-plugin-comment2'
// import { readingTimePlugin } from 'vuepress-plugin-reading-time2'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'

export default [
    googleAnalyticsPlugin({
        id: 'G-7Q9JVXXQBW'
    }),
    searchPlugin({
        maxSuggestions: 20,
        // 排除首页
        isSearchable: page => page.path !== '/',
        // 允许搜索 Frontmatter 中的 `tags` `categories`
        getExtraFields: page => (page.frontmatter.tags || page.frontmatter.categories) ?? []
    }),
    // <a> 标签以外的所有图片不包括.no-zoom都支持缩放
    // mediumZoomPlugin({
    //     selector: ':not(a) > img:not(.no-zoom)'
    // }),
    // 全局组件注册
    // registerComponentsPlugin({
    //     componentsDir: path.resolve(__dirname, '../components')
    // }),
    // docsearchPlugin({
    //     appId: 'BXJ3ODS43J',
    //     apiKey: '454eb8558182c5133b92b8cd465cbb7d',
    //     indexName: 'feyoudao',
    //     debug: true,
    //     locales: {
    //         placeholder: '搜索文档1',
    //         translations: {
    //             button: {
    //                 buttonText: '搜索文档2',
    //                 buttonAriaLabel: '搜索文档3'
    //             },
    //             modal: {
    //                 searchBox: {
    //                     resetButtonTitle: '清除查询条件',
    //                     resetButtonAriaLabel: '清除查询条件',
    //                     cancelButtonText: '取消',
    //                     cancelButtonAriaLabel: '取消'
    //                 },
    //                 startScreen: {
    //                     recentSearchesTitle: '搜索历史',
    //                     noRecentSearchesText: '没有搜索历史',
    //                     saveRecentSearchButtonTitle: '保存至搜索历史',
    //                     removeRecentSearchButtonTitle: '从搜索历史中移除',
    //                     favoriteSearchesTitle: '收藏',
    //                     removeFavoriteSearchButtonTitle: '从收藏中移除'
    //                 },
    //                 errorScreen: {
    //                     titleText: '无法获取结果',
    //                     helpText: '你可能需要检查你的网络连接'
    //                 },
    //                 footer: {
    //                     selectText: '选择',
    //                     navigateText: '切换',
    //                     closeText: '关闭',
    //                     searchByText: '搜索提供者'
    //                 },
    //                 noResultsScreen: {
    //                     noResultsText: '无法找到相关结果',
    //                     suggestedQueryText: '你可以尝试查询',
    //                     reportMissingResultsText: '你认为该查询应该有结果？',
    //                     reportMissingResultsLinkText: '点击反馈'
    //                 }
    //             }
    //         }
    //     }
    // }),
    docsearchPlugin({
        appId: 'VUE9LSPBO8',
        apiKey: '9d972c785b0197e79df852a925cbfe88',
        indexName: 'acme',
        locales: {
            '/': {
                placeholder: 'Search',
                translations: {
                    button: {
                        buttonText: '搜索文档'
                    }
                }
            },
        },
        startUrls: [
            'https://acme.feyoudao.cn'
        ],
        sitemaps: [
            'https://acme.feyoudao.cn/sitemap.xml'
        ],
        schedule: 'at 02:00 every 1 day',
    }),
    commentPlugin({
        provider: 'Waline',
        emoji: ['https://unpkg.com/@waline/emojis@1.0.1/bilibili', 'https://unpkg.com/@waline/emojis@1.0.1/tieba'],
        serverURL: 'https://vuepress-waline-psi.vercel.app/'
        
        // provider: 'Twikoo',
        // envId: 'https://twikoo-qqlcx5.vercel.app/',
    }),
    // readingTimePlugin({}),
    copyCodePlugin({
        showInMobile: false
    }),
    photoSwipePlugin({
        selector: ':not(a) > img:not(.no-zoom)'
    }),
    sitemapPlugin({
        hostname: 'feyoudao.cn'
    }),
    mdEnhancePlugin({
        tabs: true, // 添加选项卡支持
        codetabs: true, // 启用代码块分组
        imageMark: true, // 启用图片标记
        imageSize: true, // 启用图片大小
        include: true, // 启用导入支持
        demo: true, // 启用代码演示
        presentation: true // 启用幻灯片
    })
]
