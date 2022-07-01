/**
 *  生成 $site.pages 数据
 * @param {String} sourceDir docs目录
 */

const fs = require('fs') // 文件模块
const path = require('path') // 路径模块
const chalk = require('chalk') // 控制台颜色模块
const matter = require('gray-matter') // front matter解析器

let sitePages = [] // 分类数据
function genSitePages(sourceDir) {
    const files = fs.readdirSync(sourceDir) // 读取dosc目录（文件和文件夹）, 返回数组
    files.forEach(filename => {
        const file = path.resolve(sourceDir, filename) // 方法：将路径或路径片段的序列解析为绝对路径
        const stat = fs.statSync(file) // 文件信息
        const fileType = path.extname(file) // 文件类型数组
        // 过滤以下目录
        if (['@pages', '.DS_Store', '.vuepress', '_posts'].includes(filename)) return
        const isDir = stat.isDirectory()
        if (isDir) genSitePages(file) // 递归遍历
        else {
            if (fileType === '.md') {
                const contentStr = fs.readFileSync(file, 'utf8') // 读取md文件内容，返回字符串
                const { data } = matter(contentStr, {}) // 解析出front matter数据
                let fileInfo = {}
                fileInfo.title = data.title || '没有标题'
                fileInfo.frontmatter = data
                fileInfo.relativePath = file.split('/docs')[1] // 截取docs文件路径
                sitePages.push(fileInfo)
            }
        }
    })
    return sitePages
}

module.exports = genSitePages
