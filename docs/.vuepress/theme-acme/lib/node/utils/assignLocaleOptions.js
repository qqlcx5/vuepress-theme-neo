// 主题配置默认数据
export const BLOGLOCALES = {
    article: '文章',
    articleList: '文章列表',
    category: '分类',
    tag: '标签',
    timeline: '时间轴',
    timelineTitle: '昨日不在',
    all: '全部',
    intro: '个人介绍',
    star: '收藏',
    slides: '幻灯片',
    encrypt: '加密'
}

/**
 * Assign default options
 */
export const assignLocaleOptions = localeOptions => {
    const blogLocales = localeOptions.blogLocales
    localeOptions.blogLocales = blogLocales ? Object.assign(BLOGLOCALES, blogLocales) : BLOGLOCALES
}
