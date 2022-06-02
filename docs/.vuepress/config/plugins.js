const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
const { searchPlugin } = require('@vuepress/plugin-search')
const { prismjsPlugin } = require('@vuepress/plugin-prismjs')

module.exports = [
  backToTopPlugin(),
  nprogressPlugin(),
  googleAnalyticsPlugin({
    id: 'G-XXXXXXXXXX'
  }),
  mediumZoomPlugin({
    selector: '.theme-container img:not(.logo)'
  }),
  searchPlugin({
    maxSuggestions: 20,
    // 排除首页
    isSearchable: page => page.path !== '/',
    // 允许搜索 Frontmatter 中的 `tags` `categories`
    getExtraFields: page => (page.frontmatter.tags || page.frontmatter.categories) ?? []
  }),
  prismjsPlugin({})
]
