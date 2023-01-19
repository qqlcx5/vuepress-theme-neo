// import { getDirname, path } from '@vuepress/utils'
// const __dirname = getDirname(import.meta.url) // import and use the dirname() method from the path module.
// const readFile = require('../utils/simpleReadFile') // 读取文件函数模块
// const docsRoot = path.resolve(__dirname, '..', '..') // docs相对路径
// console.log('__dirname docs---------------------', docsRoot);

export default {
    // '/el-component/': readFile(docsRoot + '/el-component'),
    // '/utils/': readFile(docsRoot + '/utils', true),
    // '/demo/': readFile(docsRoot + '/demo'),
    // '/interview/': readFile(docsRoot + '/interview', false),
    // '/el-component/' : {
    //     text: 'Element-UI组件',
    //     value: 'structure',
    //     collapsible: false,
    //     children: []
    // },
    '/el-component/': 'structure',
    '/interview/': 'structure',
    '/utils/': 'structure',
    '/demo/': 'structure',
    '/guide/': 'structure',
    '/config/': 'structure'
}

// '/interview/': [
// icon: 'el-icon-s-help',
// title: '面试题',
//     { text: 'algorithm', collapsible: true, children: [Array] },
//     { text: 'applet', collapsible: true, children: [Array] },
//     { text: 'css', collapsible: true, children: [Array] },
//     { text: 'design', collapsible: true, children: [Array] },
//     { text: 'es6', collapsible: true, children: [Array] },
//     { text: 'git', collapsible: true, children: [Array] },
//     { text: 'http', collapsible: true, children: [Array] },
//     { text: 'JavaScript', collapsible: true, children: [Array] },
//     { text: 'linux', collapsible: true, children: [Array] },
//     { text: 'NodeJS', collapsible: true, children: [Array] },
//     { text: 'React', collapsible: true, children: [Array] },
//     { text: 'typescript', collapsible: true, children: [Array] },
//     { text: 'vue', collapsible: true, children: [Array] },
//     { text: 'vue3', collapsible: true, children: [Array] },
//     { text: 'webpack', collapsible: true, children: [Array] }
//   ]
