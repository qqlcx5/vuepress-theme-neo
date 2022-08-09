module.exports = [
    {
        text: '导航页',
        link: '/nav-page/',
        activeMatch: '^/nav-page/'
    },
    {
        text: '指南',
        link: '/guide/',
        activeMatch: '^/guide/'
    },
    {
        text: '饿了么组件库',
        link: '/el-component/01.手写el-form表单组件.md',
        activeMatch: '^/el-component/'
    },
    {
        text: '工具函数',
        link: '/utils/Array/chunk转换二维数组.md',
        activeMatch: '^/utils/'
    },
    {
        text: '影视推荐',
        link: '/movies/',
        activeMatch: '^/movies/'
    },
    {
        text: '测试用例',
        link: '/demo/http',
        activeMatch: '^/demo/'
    },
    {
        text: '索引',
        children: [
            {
                text: '分类标题',
                children: [
                    {
                        text: '分类',
                        link: '/categories/',
                        activeMatch: '/categories/'
                    }
                ]
            },
            {
                text: '标签标题',
                children: [
                    {
                        text: '标签',
                        link: '/tags/',
                        activeMatch: '/tags/'
                    }
                ]
            },
            {
                text: '时间线标题',
                children: [
                    {
                        text: '时间线',
                        link: '/archives/',
                        activeMatch: '/archives/'
                    }
                ]
            }
        ]
    }
]
