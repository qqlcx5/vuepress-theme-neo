
// neo主题配置项
export default {
    tag: true, // 标签页 @pages/tags
    column: true, // 专栏页 @pages/columns
    archive: true, // 归档页 @pages/archives
    category: true, // 分类页 @pages/category
    // 所有文章列表中作者信息
    author: {
        name: '星野',
        url: 'https://feyoudao.cn'
    },
    // 站点信息（文章底部的统计信息）
    siteInformation: {
        bolgCreateAt: '2020-01-01',
    },
    fontIcon: {
        assets: 'iconfont', // 字体图标的地址
        prefix: 'iconfont ' // 字体图标的前缀
    },
    // 别名配置
    blogLocales: {
        article: '文章1',
        articleList: '文章列表1',
        category: '分类1',
        tag: '标签1',
        archives: '归档1',
        // timelineTitle: '昨日不在',
        all: '全部1',
        intro: '个人介绍1',
        star: '收藏1',
        slides: '幻灯片1',
        encrypt: '加密1'
    },
    // 个人信息（文章旁边的作者信息）
    blogOptions: {
        name: 'Star Field', // 昵称
        avatar: 'https://r2-site.feyoudao.cn/star_field.png', // 头像
        roundAvatar: true,  // 是否为圆形头像
        intro: 'https://feyoudao.cn', // 个人介绍
        description: 'いつか、私がヒトじゃなくなっても、この星は燃え尽きることはない。', // 个人介绍下面的描述
    },
    // 文章页面中风格和背景图
    contentStyle: 'color', // 文章页面的风格 color | image | titleImage
    contentBackground: '#fff',
    contentImages: [
        {
            path: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/frentend/ghostblade/3.jpg',
            mask: 'rgba(65, 60, 55, .2)',
            opacity: 0.5
        },
        {
            path: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/frentend/ghostblade/3.jpg',
            mask: 'rgba(65, 60, 55, .2)',
            opacity: 0.8
        },
    ],
    contentTitleImage: [
        {
            path: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/frentend/ghostblade/6.jpg',
            mask: 'rgba(65, 60, 55, .2)',
            opacity: 0.1
        }
    ],

    // 首页一言的信息
    // homeHitokotoApi: 'https://v3.hitokoto.cn',
    // 首页首屏的信息
    homeHeaderInfo: {
        name: 'vuepress-theme-neo',
        avatar: 'https://r2-site.feyoudao.cn/star_field.png',
        description: '🚀一款极简风格VuePress2.x 主题✨'
    },
    // 首页首屏的背景图
    homeHeaderImages: [
        {
            path: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/frentend/ghostblade/3.jpg',
            mask: 'rgba(65, 60, 55, .2)'
        },
        {
            path: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/frentend/ghostblade/6.jpg',
            mask: 'rgba(65, 60, 55, .2)'
        }
    ]
};