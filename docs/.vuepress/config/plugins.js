// const { path } = require('@vuepress/utils')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const { searchPlugin } = require('@vuepress/plugin-search')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
// const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
// const typed = require('../plugins/vuepress-plugin-typed')
// const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { copyCodePlugin } = require('vuepress-plugin-copy-code2')
const { photoSwipePlugin } = require('vuepress-plugin-photo-swipe')
const { mdEnhancePlugin } = require('vuepress-plugin-md-enhance')
const { commentPlugin } = require('vuepress-plugin-comment2')
// const { readingTimePlugin } = require('vuepress-plugin-reading-time2')
const { sitemapPlugin } = require('vuepress-plugin-sitemap2')

module.exports = [
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
    docsearchPlugin({
        appId: 'BXJ3ODS43J',
        apiKey: '76c82d7ad20d1045db580721acdc4cb8',
        indexName: 'feyoudao',
        debug: true,
        locales: {
            '/': {
                placeholder: '搜索文档',
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        searchBox: {
                            resetButtonTitle: '清除查询条件',
                            resetButtonAriaLabel: '清除查询条件',
                            cancelButtonText: '取消',
                            cancelButtonAriaLabel: '取消'
                        },
                        startScreen: {
                            recentSearchesTitle: '搜索历史',
                            noRecentSearchesText: '没有搜索历史',
                            saveRecentSearchButtonTitle: '保存至搜索历史',
                            removeRecentSearchButtonTitle: '从搜索历史中移除',
                            favoriteSearchesTitle: '收藏',
                            removeFavoriteSearchButtonTitle: '从收藏中移除'
                        },
                        errorScreen: {
                            titleText: '无法获取结果',
                            helpText: '你可能需要检查你的网络连接'
                        },
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭',
                            searchByText: '搜索提供者'
                        },
                        noResultsScreen: {
                            noResultsText: '无法找到相关结果',
                            suggestedQueryText: '你可以尝试查询',
                            reportMissingResultsText: '你认为该查询应该有结果？',
                            reportMissingResultsLinkText: '点击反馈'
                        }
                    }
                }
            }
        }
    }),
    commentPlugin({
        provider: 'Waline',
        emoji: ['https://unpkg.com/@waline/emojis@1.0.1/bilibili', 'https://unpkg.com/@waline/emojis@1.0.1/tieba'],
        serverURL: 'https://vuepress-waline-psi.vercel.app/',
        // provider: 'Twikoo',
        // envId: 'https://twikoo-qqlcx5.vercel.app/',
    }),
    // readingTimePlugin({}),
    copyCodePlugin({
        showInMobile: false
    }),
    photoSwipePlugin({}),
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
