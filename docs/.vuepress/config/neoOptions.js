
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
        bolgCreateAt: '2023-01-01',
    },
    // 个人信息（文章旁边的作者信息）
    blogOptions: {
        name: 'Star Field', // 昵称
        avatar: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/star_field.png', // 头像
        roundAvatar: true,  // 是否为圆形头像
        intro: 'https://feyoudao.cn', // 个人介绍
        description: 'いつか、私がヒトじゃなくなっても、この星は燃え尽きることはない。', // 个人介绍下面的描述
    },
    // 文章页面中风格和背景图
    contentStyle: 'style1',
    contentBackground: '#fff',
    contentImages: [],

    // 首页一言的信息
    // homeHitokotoApi: 'https://v3.hitokoto.cn',
    // 首页首屏的信息
    homeHeaderInfo: {
        name: 'vuepress-theme-neo',
        avatar: 'https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/star_field.png',
        description: '🚀一款极简风格VuePress2.x 主题✨'
    },
    // 首页首屏的背景图
    homeHeaderImages: [
        {
            path: 'https://temporaryx.oss-cn-hongkong.aliyuncs.com/1703153606209.png',
            mask: 'rgba(65, 60, 55, .2)'
        },
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