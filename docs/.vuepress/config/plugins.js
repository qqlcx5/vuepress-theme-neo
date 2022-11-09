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
    googleAnalyticsPlugin({ id: 'G-7Q9JVXXQBW' }),
    searchPlugin({
        maxSuggestions: 30,
        // 排除首页
        isSearchable: page => page.path !== '/',
        // 允许搜索 Frontmatter 中的 `tags`和`categories`和 columns
        getExtraFields: page => (page.frontmatter.tags || page.frontmatter.categories || page.frontmatter.columns) ?? []
    }),
    // <a> 标签以外的所有图片不包括.no-zoom都支持缩放
    // mediumZoomPlugin({
    //     selector: ':not(a) > img:not(.no-zoom)'
    // }),
    // 全局组件注册
    // registerComponentsPlugin({
    //     componentsDir: path.resolve(__dirname, '../components')
    // }),
    commentPlugin({
        // provider: 'Waline',
        // emoji: ['https://unpkg.com/@waline/emojis@1.0.1/bilibili', 'https://unpkg.com/@waline/emojis@1.0.1/tieba'],
        // serverURL: 'https://vuepress-waline-psi.vercel.app/'
        provider: 'Twikoo',
        envId: 'https://vuepress2-twikoo.vercel.app',
    }),
    copyCodePlugin({
        showInMobile: false
    }),
    photoSwipePlugin({
        selector: ':not(a) > img:not(.no-zoom)'
    }),
    sitemapPlugin({
        hostname: 'acme.feyoudao.cn'
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
