const { defaultTheme } = require('@vuepress/theme-default')
const navbar = require('./navbar')
const sidebar = require('./sidebar')
module.exports = defaultTheme({
  navbar, // 导航栏配置
  sidebar, // 侧边栏配置
  logo: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/star_field.ico', // 导航栏logo
  docsDir: 'docs',
  docsBranch: 'master',
  docsRepo: 'https://github.com/qqlcx5/vuepress-next',
  editLinkPattern: ':repo/edit/:branch/:path'
})
