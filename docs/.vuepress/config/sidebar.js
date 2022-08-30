// const path = require('path') // 路径模块
import { getDirname, path } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url); // import and use the dirname() method from the path module. 
const readFile = require('../utils/simpleReadFile') // 读取文件函数模块
const docsRoot = path.resolve(__dirname, '..', '..') // docs相对路径

module.exports = {
    '/el-component/': readFile(docsRoot + '/el-component'),
    '/utils/': readFile(docsRoot + '/utils', true),
    '/demo/': readFile(docsRoot + '/demo'),
}
