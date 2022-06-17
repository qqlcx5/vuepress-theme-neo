const path = require('path') // 路径模块
const readFile = require('../../utils/simpleReadFile') // 读取文件函数模块
const docsRoot = path.join(__dirname, '..', '..', '..') // docs相对路径

// 所有.md文件设置frontmatter(标题、日期)
const setFrontmatter = require('../../utils/setFrontmatter')
setFrontmatter(docsRoot, {})

module.exports = {
    '/el-component/': readFile(docsRoot + '/el-component'),
    '/utils/': readFile(docsRoot + '/utils', true),
}
