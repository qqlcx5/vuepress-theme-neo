const navbar = require('./navbar')
const sidebar = require('./sidebar')
import { localTheme } from '../theme-acme/lib/node/index'

export default localTheme({
    // 默认主题配置项
    navbar, // 导航栏配置
    sidebar, // 侧边栏配置
    logo: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/favicon.ico', // 导航栏logo
    contributors: false, // 是否显示贡献者
    docsDir: 'docs',
    docsBranch: 'master',
    docsRepo: 'https://github.com/qqlcx5/vuepress-next',
    editLinkPattern: ':repo/edit/:branch/:path',
    // @ts-ignore 自定义配置项
    category: true,
    tag: true,
    archive: true,
})
