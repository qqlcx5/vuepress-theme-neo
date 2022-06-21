/**
 * 生成分类标签等数据
 * */

const path = require('path') // 路径模块
const sourceDir = path.join(__dirname, '..', '..') // docs相对路径
const setFrontmatter = require('../utils/setFrontmatter')
const { createPage } = require('./handlePage')

// 所有.md文件设置frontmatter(标题、日期)
setFrontmatter(sourceDir, {})

// 创建分类页.md文件
createPage(sourceDir, 'categoriesPage')

// 创建标签页.md文件
createPage(sourceDir, 'tagsPage')

// 创建归档页.md文件
createPage(sourceDir, 'archivesPage')

function hello(params) {
    return 'hello'
}

module.exports = hello
