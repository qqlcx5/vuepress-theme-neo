export default [
    {
        text: '指南',
        icon: 'neo-zhinanzhen',
        link: '/guide/introduce',
        activeMatch: '^/guide/'
    },
    {
        text: '配置',
        icon: 'neo-shezhi1',
        link: '/config/theme/feature',
        activeMatch: '^/config/'
    },
    {
        text: '饿了么组件库',
        icon: 'neo-shanchuxian',
        link: '/el-component/',
        activeMatch: '^/el-component/'
    },
    {
        text: '面试官系列',
        icon: 'neo-jianzhu',
        link: '/interview/',
        activeMatch: '^/interview/'
    },
    {
        text: '工具函数',
        icon: 'neo-renwu',
        link: '/utils/',
        activeMatch: '^/utils/'
    },
    // {
    //     text: '导航页',
    //     icon: 'neo-zuojiantou',
    //     link: '/nav-page/',
    //     activeMatch: '^/nav-page/'
    // },
    // {
    //     text: '影视推荐',
    //     link: '/movies/',
    //     activeMatch: '^/movies/'
    // },
    {
        text: '测试用例',
        icon: 'neo-riqi',
        link: '/demo/',
        activeMatch: '^/demo/'
    },
    {
        text: '索引',
        icon: 'neo-shaixuan',
        children: [
            {
                text: '标签',
                icon: 'neo-linkedin',
                link: '/tags/',
                activeMatch: '/tags/'
            },
            {
                text: '归档',
                icon: 'neo-github',
                link: '/archives/',
                activeMatch: '/archives/'
            },
            {
                text: '分类',
                icon: 'neo-momo',
                link: '/categories/',
                activeMatch: '/categories/'
            },
            {
                text: '专栏',
                icon: 'neo-ins',
                link: '/columns/',
                activeMatch: '/columns/'
            }
        ]
    }
]
