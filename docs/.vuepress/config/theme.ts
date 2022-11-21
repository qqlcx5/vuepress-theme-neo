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
    // acme主题配置项
    bolgCreateAt: '2020-01-01', // 博客创建时间
    category: true, // 是否开启分类
    tag: true, // 是否开启标签
    column: true, // 是否开启专栏
    archive: true, // 是否开启归档
    blog: {
        name: 'Star Field',
        intro: 'https://feyoudao.cn', // 个人简介
        roundAvatar: true, // 头像是否圆形
        avatar: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/star_field.png', // 头像
        description: 'この星は燃え尽きることはない。'
    },
    author: {
        name: '星野',
        url: 'https://feyoudao.cn'
    },
    contentStyle: 'style1', // 内容风格
    contentBackground: '#fff', // 内容背景
    contentImages: [], // 内容背景图片
    // header images information
    homeHeaderInfo: {
        name: 'Star Field',
        avatar: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/star_field.png',
        description: 'いつか、私がヒトじゃなくなっても、この星は燃え尽きることはない。'
    },
    // header images on home page
    homeHeaderImages: [
        {
            path: 'https://blog.zxh.io/img/home-bg/5.jpg',
            mask: 'rgba(65, 60, 55, .2)'
        }
        // {
        //     path: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/frentend/ghostblade/1.jpg',
        //     mask: 'rgba(40, 57, 101, .3)'
        // },
        // {
        //     path: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/frentend/ghostblade/62.jpg',
        //     mask: 'rgb(40, 170, 152, .3)'
        // },
        // {
        //     path: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/frentend/ghostblade/6.jpg',
        //     mask: 'rgba(40, 75, 50, .3)'
        // }
    ]
} as DefaultThemeOptions)
