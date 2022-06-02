const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { searchPlugin } = require('@vuepress/plugin-search')
const { prismjsPlugin } = require('@vuepress/plugin-prismjs')

module.exports = [
  googleAnalyticsPlugin({
    id: 'G-7Q9JVXXQBW'
  }),
  mediumZoomPlugin({
    selector: '.theme-container img:not(.no-zoom)'
  }),
  searchPlugin({
    maxSuggestions: 20,
    // 排除首页
    isSearchable: page => page.path !== '/',
    // 允许搜索 Frontmatter 中的 `tags` `categories`
    getExtraFields: page => (page.frontmatter.tags || page.frontmatter.categories) ?? []
  }),
]
