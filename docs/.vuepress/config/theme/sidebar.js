const path = require('path') // 路径模块
const readFile = require('../../utils/simpleReadFile') // 读取文件函数模块
const docsRoot = path.join(__dirname, '..', '..', '..') // docs相对路径

module.exports = {
    // '/utils/': readFile(docsRoot + '/utils'),
    '/02.component/': readFile(docsRoot + '/02.component')
}
