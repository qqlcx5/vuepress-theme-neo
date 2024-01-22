import navbar from './navbar';
import neoOptions from './neoOptions.js';
import sidebar, { sidebarOptions } from './sidebar';
import neoTheme from '../theme-neo/lib/node/neoIndex';
// import neoTheme from 'vuepress-theme-neo'

// vuepress 配置项
export default neoTheme({
    navbar,
    sidebar,
    sidebarDepth: 0, // 侧边栏显示深度，默认主题配置项
    ...neoOptions,
    ...sidebarOptions, // 侧边栏配置项 neoTheme主题配置项
    logo: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/favicon.ico', // 导航栏logo
    docsDir: 'docs',
    docsBranch: 'master',
    contributors: false, // 贡献者信息
    docsRepo: 'https://github.com/qqlcx5/vuepress-next',
    editLinkPattern: ':repo/edit/:branch/:path',
});
