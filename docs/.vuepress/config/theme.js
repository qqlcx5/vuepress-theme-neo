const { defaultTheme } = require('@vuepress/theme-default')
const navbar = require('./navbar')
module.exports = defaultTheme({
  logo: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/star_field.ico', // 导航栏logo
  repo: 'qqlcx5/vuepress-next',
  navbar, // 导航栏配置
})
