const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { searchPlugin } = require('@vuepress/plugin-search')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const typed = require('../plugins/vuepress-plugin-typed')
const { path } = require('@vuepress/utils')

module.exports = [
  googleAnalyticsPlugin({
    id: 'G-7Q9JVXXQBW'
  }),
  // <a> 标签以外的所有图片不包括.no-zoom都支持缩放
  mediumZoomPlugin({
    selector: ':not(a) > img:not(.no-zoom)'
  }),
  searchPlugin({
    maxSuggestions: 20,
    // 排除首页
    isSearchable: page => page.path !== '/',
    // 允许搜索 Frontmatter 中的 `tags` `categories`
    getExtraFields: page => (page.frontmatter.tags || page.frontmatter.categories) ?? []
  }),
  // 全局组件注册
  registerComponentsPlugin({
    componentsDir: path.resolve(__dirname, '../components'),
  }),
  typed({
    // 对应的标签选择器
    selector: '.vdoing-index-class .home .hero .description',
    // 打字内容
    strings: ["苦难磨炼一些人，也毁灭另一些人。——富勒", "一个不注意小事情的人，永远不会成就大事业。——卡耐基", "内外相应，言行相称。——韩非", "阅读一切好书如同和过去最杰出的人谈话。——笛卡儿"],
    typeSpeed: 100, // 打字速度
    backSpeed: 130, // 回退速度
  })
]
