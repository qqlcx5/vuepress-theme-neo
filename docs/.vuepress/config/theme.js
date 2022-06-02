const { defaultTheme } = require('@vuepress/theme-default')
const navbar = require('./navbar')
module.exports = defaultTheme({
  navbar, // 导航栏配置
  logo: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/star_field.ico', // 导航栏logo
  docsRepo: 'https://github.com/qqlcx5/vuepress-next',
  docsBranch: 'master',
  docsDir: 'docs',
  editLinkPattern: ':repo/edit/:branch/:path',
//   contributorsText: '星野'
})
