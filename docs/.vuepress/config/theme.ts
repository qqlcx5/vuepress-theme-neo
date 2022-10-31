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
    // 站点配置（首页 & 文章页）
    blogInfo: {
        blogCreate: '2021-10-19', // 博客创建时间
        indexView: true, // 开启首页的访问量和排名统计，默认 true（开启）
        pageView: true, // 开启文章页的浏览量统计，默认 true（开启）
        readingTime: true, // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
        eachFileWords: '', // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
        mdFileCountType: 'archives', // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
        totalWords: 'archives', // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
        // 下面两个选项：第一次获取访问量失败后的迭代时间
        indexIteration: 2500, // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
        pageIteration: 2500 // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
        // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
    },
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
            mask: 'rgb(40, 170, 152, .3)'
        },
        {
            path: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/frentend/ghostblade/6.jpg',
            mask: 'rgba(40, 75, 50, .3)'
        }
    ]
} as DefaultThemeOptions)
