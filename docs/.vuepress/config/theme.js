const { defaultTheme } = require('@vuepress/theme-default')
const navbar = require('./theme/navbar')
const sidebar = require('./theme/sidebar')

// const path = require('path') // 路径模块
// const sourceDir = path.join(__dirname, '..', '..') // docs相对路径
// const setFrontmatter = require('../utils/setFrontmatter')
// const getSidebarData = require('../utils/getSidebarData')

// setFrontmatter(sourceDir, {})
// const sidebarData = getSidebarData(sourceDir, (collapsable = true))
// console.log('sidebarData-------', JSON.stringify(sidebarData))
module.exports = defaultTheme({
    navbar, // 导航栏配置
    sidebar, // 侧边栏配置
    logo: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/favicon.ico', // 导航栏logo
    contributors: false, // 是否显示贡献者
    docsDir: 'docs',
    docsBranch: 'master',
    docsRepo: 'https://github.com/qqlcx5/vuepress-next',
    editLinkPattern: ':repo/edit/:branch/:path'
})
