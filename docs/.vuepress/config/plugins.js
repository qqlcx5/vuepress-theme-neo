// const { path } = require('@vuepress/utils')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const { searchPlugin } = require('@vuepress/plugin-search')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
// const typed = require('../plugins/vuepress-plugin-typed')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { copyCodePlugin } = require('vuepress-plugin-copy-code2')
const { photoSwipePlugin } = require('vuepress-plugin-photo-swipe')
const { mdEnhancePlugin } = require('vuepress-plugin-md-enhance')
const { commentPlugin } = require('vuepress-plugin-comment2')
const { readingTimePlugin } = require('vuepress-plugin-reading-time2')
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
    // commentPlugin({
    //     provider: 'Twikoo',
    //     envId: 'https://twikoo-qqlcx5.vercel.app/'
    // }),
    copyCodePlugin({
        showInMobile: false
    }),
    photoSwipePlugin({
        // 你的选项
    }),
    readingTimePlugin({
        // 你的选项
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
