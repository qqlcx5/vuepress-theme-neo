const path = require('path') // 路径模块
const readFile = require('../../utils/readFile')

// const docsRoot = path.join(__dirname, '..', '..', '..', '02.component') // docs相对路径
// console.log(readFile(docsRoot))
module.exports = {
    // '/pages/': [
    //     { title: 'aaaa', children: ['/pages/79910b/', '/pages/5ecff7/'] },
    //     { title: 'bbb', collapsable: false, children: ['/pages/6f932c/', '/pages/27a8d1/'] }
    // ],
    '/02.component/': [
        {
            text: 'VuePress Reference',
            collapsible: false,
            children: ['/pages/79910b/', '/pages/5ecff7/']
        },
        {
            text: 'Bundlers Reference',
            children: ['/pages/6f932c/', '/pages/27a8d1/']
        }
    ]
}
