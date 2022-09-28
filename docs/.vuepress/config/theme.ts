import navbar from './navbar'
import sidebar from './sidebar'
import acmeTheme from '../theme-acme/lib/node'
import { type DefaultThemeOptions } from '@vuepress/theme-default'

export default acmeTheme({
    // 默认主题配置项
    navbar, // 导航栏配置
    sidebar, // 侧边栏配置
    logo: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/favicon.ico', // 导航栏logo
    contributors: false, // 是否显示贡献者
    docsDir: 'docs',
    docsBranch: 'master',
    docsRepo: 'https://github.com/qqlcx5/vuepress-next',
    editLinkPattern: ':repo/edit/:branch/:path',
    sidebarDepth: 0,
    // 默认主题配置项
    category: true,
    tag: true,
    archive: true,
    blog: {
        name: 'vueprss-theme-acme',
        roundAvatar: true,
        intro: 'https://feyoudao.cn',
        avatar: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/star_field.png',
        description: 'A blog theme for VuePress2.x'
    },
    author: {
        name: '星野',
        url: 'https://feyoudao.cn'
    },
    contentStyle: 'style1', // 内容风格
    contentBackground: '#fff', // 内容背景
    // personal information
    personalInfo: {
        name: 'vueprss-theme-acme',
        avatar: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/star_field.png',
        description: 'A blog theme for VuePress2.x'
    },

    // header images on home page
    homeHeaderImages: [
        {
            path: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/frentend/ghostblade/1.jpg',
            mask: 'rgba(40, 57, 101, .3)'
        },
        {
            path: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/frentend/ghostblade/62.jpg',
            mask: 'rgb(251, 170, 152, .3)'
        },
        {
            path: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/frentend/ghostblade/6.jpg',
            mask: 'rgba(19, 75, 50, .3)'
        }
    ]
} as DefaultThemeOptions)
