export default [
    {
        text: '面试官系列',
        icon: 'acme-jianzhu',
        link: '/interview/',
        activeMatch: '^/interview/'
    },
    {
        text: '指南',
        icon: 'acme-shizhong',
        link: '/guide/',
        activeMatch: '^/guide/'
    },
    {
        text: '饿了么组件库',
        icon: 'acme-shanchuxian',
        link: '/el-component/',
        activeMatch: '^/el-component/'
    },
    {
        text: '工具函数',
        icon: 'acme-renwu',
        link: '/utils/Array/chunk转换二维数组.md',
        activeMatch: '^/utils/'
    },
    // {
    //     text: '导航页',
    //     icon: 'acme-zuojiantou',
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
        icon: 'acme-riqi',
        link: '/demo/',
        activeMatch: '^/demo/'
    },
    {
        text: '索引',
        icon: 'acme-shaixuan',
        children: [
            {
                text: '标签',
                icon: 'acme-linkedin',
                link: '/tags/',
                activeMatch: '/tags/'
            },
            {
                text: '归档',
                icon: 'acme-github',
                link: '/archives/',
                activeMatch: '/archives/'
            },
            {
                text: '分类',
                icon: 'acme-momo',
                link: '/categories/',
                activeMatch: '/categories/'
            },
            {
                text: '专栏',
                icon: 'acme-ins',
                link: '/columns/',
                activeMatch: '/columns/'
            }
        ]
    }
]
