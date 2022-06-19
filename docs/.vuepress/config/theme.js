const { defaultTheme } = require('@vuepress/theme-default')
const navbar = require('./theme/navbar')
const sidebar = require('./theme/sidebar')
const { path } = require('@vuepress/utils')

module.exports = {
    // 继承默认主题
    extends: defaultTheme({
        navbar, // 导航栏配置
        sidebar, // 侧边栏配置
        logo: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/favicon.ico', // 导航栏logo
        contributors: false, // 是否显示贡献者
        docsDir: 'docs',
        docsBranch: 'master',
        docsRepo: 'https://github.com/qqlcx5/vuepress-next',
        editLinkPattern: ':repo/edit/:branch/:path'
    }),
    // 覆盖 `404` 布局
    layouts: {
        404: path.resolve(__dirname, '../theme/lib/client/layouts/404.vue'),
        Layout: path.resolve(__dirname, '../theme/lib/client/layouts/Layout.vue'),
    },
    // clientConfigFile: path.resolve(__dirname, '../theme/lib/client/config.js'),
}
