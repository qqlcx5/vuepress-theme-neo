import os from 'os'
import chalk from 'chalk'
import jsonToYaml from 'json2yaml'
import { path, fs } from '@vuepress/utils'
import { typeOf, repairDate, dateFormat } from './index'
import matter from 'gray-matter' // FrontMatter解析器 https://github.com/jonschlinkert/gray-matter
const log = console.log

const PREFIX = '/pages/'
/**
 * 给.md文件设置frontmatter(标题、日期、永久链接等数据)
 */
export function setFrontmatter(files, themeConfig) {
    const { category: isCategory, tag: isTag, column: isColumn, categoryText = '随笔', extendFrontmatter } = themeConfig
    // 扩展自定义生成frontmatter
    const extendFrontmatterStr = extendFrontmatter
        ? jsonToYaml
              .stringify(extendFrontmatter)
              .replace(/\n\s{2}/g, '\n')
              .replace(/"|---\n/g, '')
        : ''
    files.forEach(file => {
        const main_name = path.basename(file.filePath)?.toUpperCase()
        if(['README.MD', 'INDEX.MD'].includes(main_name)) return
        let dataStr = fs.readFileSync(file.filePath, 'utf8') // 读取每个md文件内容
        // fileMatterObj => {content:'剔除frontmatter后的文件内容字符串', data:{<frontmatter对象>}, ...}
        const fileMatterObj = matter(dataStr, {})
        // ['', '# isEqual 检查两个对象各项值相等','']
        const fileTitle = fileMatterObj.content?.split('\n')?.filter(Boolean)[0]?.slice(2)?.trim() || file.title
        if (Object.keys(fileMatterObj.data).length === 0) {
            // 未定义FrontMatter数据
            const stat = fs.statSync(file.filePath)
            const dateStr = dateFormat(getBirthtime(stat)) // 文件的创建时间
            const categories = getCategories(file, categoryText)

            let cateLabelStr = ''
            categories.forEach(item => {
                cateLabelStr += os.EOL + '  - ' + item
            })

            let cateStr = ''
            if (!(isCategory === false)) {
                cateStr = os.EOL + 'categories:' + cateLabelStr
            }

            // 注意下面这些反引号字符串的格式会映射到文件
            const tagsStr =
                isTag === false
                    ? ''
                    : `
tags:
  - `
            const colStr =
                isColumn === false
                    ? ''
                    : `
columns:
  - `
            const fmData = `---
title: ${fileTitle}
date: ${dateStr}${cateStr}${tagsStr}${colStr}
${extendFrontmatterStr}---`

            fs.writeFileSync(file.filePath, `${fmData}${os.EOL}${fileMatterObj.content}`) // 写入
            log(chalk.blue('tip ') + chalk.green(`write frontmatter：${file.filePath} `))
        } else {
            // 已有FrontMatter
            let matterData = fileMatterObj.data
            let hasChange = false

            // 已有FrontMatter，但是没有title、date、permalink、categories、tags数据的
            if (!matterData.hasOwnProperty('title')) {
                // 标题
                matterData.title = fileTitle
                hasChange = true
            }

            if (!matterData.hasOwnProperty('date')) {
                // 日期
                const stat = fs.statSync(file.filePath)
                matterData.date = dateFormat(getBirthtime(stat))
                hasChange = true
            }

            //   if (!matterData.hasOwnProperty('permalink')) { // 永久链接
            //     matterData.permalink = getPermalink();
            //     hasChange = true;
            //   }

            if (file.filePath.indexOf('_posts') > -1 && !matterData.hasOwnProperty('sidebar')) {
                // auto侧边栏，_posts文件夹特有
                matterData.sidebar = 'auto'
                hasChange = true
            }

            if (!matterData.hasOwnProperty('pageComponent') && matterData.article !== false) {
                // 是文章页才添加分类和标签
                if (isCategory !== false && !matterData.hasOwnProperty('categories')) {
                    // 分类
                    matterData.categories = getCategories(file, categoryText)
                    hasChange = true
                }
                if (isTag !== false && !matterData.hasOwnProperty('tags')) {
                    // 标签
                    matterData.tags = ['']
                    hasChange = true
                }
                if (isColumn !== false && !matterData.hasOwnProperty('columns')) {
                    // 标签
                    matterData.columns = ['']
                    hasChange = true
                }
            }

            // 扩展自动生成frontmatter的字段
            if (typeOf(extendFrontmatter) === 'object') {
                Object.keys(extendFrontmatter).forEach(keyName => {
                    if (!matterData.hasOwnProperty(keyName)) {
                        matterData[keyName] = extendFrontmatter[keyName]
                        hasChange = true
                    }
                })
            }

            if (hasChange) {
                if (matterData.date && typeOf(matterData.date) === 'date') {
                    matterData.date = repairDate(matterData.date) // 修复时间格式
                }
                const newData =
                    jsonToYaml
                        .stringify(matterData)
                        .replace(/\n\s{2}/g, '\n')
                        .replace(/"/g, '') +
                    '---' +
                    os.EOL +
                    fileMatterObj.content
                fs.writeFileSync(file.filePath, newData) // 写入
                log(chalk.blue('tip ') + chalk.green(`write frontmatter：${file.filePath} `))
            }
        }
    })
}

// 获取分类数据
function getCategories(file, categoryText) {
    let categories = []

    if (file.filePath.indexOf('_posts') === -1) {
        // 不在_posts文件夹
        let filePathArr = file.filePath.split(path.sep) // path.sep用于兼容不同系统下的路径斜杠
        filePathArr.pop()

        let ind = filePathArr.indexOf('docs')
        if (ind !== -1) {
            while (filePathArr[++ind] !== undefined) {
                const item = filePathArr[ind]
                const firstDotIndex = item.indexOf('.')
                categories.push(item.substring(firstDotIndex + 1) || '') // 获取分类
            }
        }
    } else {
        categories.push(categoryText)
    }
    return categories
}

// 获取文件创建时间
function getBirthtime(stat) {
    // 在一些系统下无法获取birthtime属性的正确时间，使用atime代替
    return stat.birthtime.getFullYear() != 1970 ? stat.birthtime : stat.atime
}

// 定义永久链接数据
function getPermalink() {
    return `${PREFIX + (Math.random() + Math.random()).toString(16).slice(2, 8)}/`
}
