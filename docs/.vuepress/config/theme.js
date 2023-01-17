import navbar from './navbar'
import sidebar from './sidebar'
import neoTheme from '../theme-neo/lib/node'
// import { type DefaultThemeOptions } from '@vuepress/theme-default'

export default neoTheme({
    // 默认主题配置项
    navbar,
    sidebar,
    logo: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/favicon.ico',
    contributors: false,
    docsDir: 'docs',
    docsBranch: 'master',
    docsRepo: 'https://github.com/qqlcx5/vuepress-next',
    editLinkPattern: ':repo/edit/:branch/:path',
    sidebarDepth: 0,
    // neo主题配置项
    bolgCreateAt: '2020-01-01',
    category: true,
    tag: true,
    column: true,
    archive: true,
    blog: {
        name: 'Star Field',
        intro: 'https://feyoudao.cn',
        roundAvatar: true,
        avatar: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/star_field.png',
        description: 'いつか、私がヒトじゃなくなっても、この星は燃え尽きることはない。'
    },
    author: {
        name: '星野',
        url: 'https://feyoudao.cn'
    },
    contentStyle: 'style1',
    contentBackground: '#fff',
    contentImages: [],

    // header images information
    homeHeaderInfo: {
        name: 'vuepress-theme-neo',
        avatar: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/star_field.png',
        description: '🚀一款个性化的 VuePress2.x 主题✨'
    },
    // header images on home page
    homeHeaderImages: [
        {
            path: 'https://blog.zxh.io/img/home-bg/5.jpg',
            mask: 'rgba(65, 60, 55, .2)'
        }
    ]
})
