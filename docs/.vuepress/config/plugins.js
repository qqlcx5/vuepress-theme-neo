const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { searchPlugin } = require('@vuepress/plugin-search')

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
]
