/**
 *  选择指定目录生成侧边栏的数据
 */

import { path, fs } from '@vuepress/utils'
import matter from 'gray-matter' // front matter解析器

export function readFile(dir, collapsible, filesList = [], fpath, fIndex, fList, isChild) {
    const files = fs.readdirSync(dir)
    const rootName = path.basename(dir) // 根目录名
    let sortFiles = {} // 有排序的文件
    let noSortFiles = [] // 无排序的文件
    files
        .filter(o => !o.startsWith('.') && !o.startsWith('@'))
        .map((file, index) => {
            const filePath = path.join(dir, file)
            const fileType = path.extname(filePath)
            const fileName = path.basename(filePath)
            const stat = fs.statSync(filePath)
            if (stat.isDirectory()) {
                filesList[index] = {
                    text: path.basename(filePath),
                    collapsible,
                    children: [],
                }
                fpath = `/${rootName}/${file}`
                readFile(path.join(dir, file), collapsible, filesList[index].children, fpath, index, filesList, true)
            } else if (fileType === '.md') {
                const contentStr = fs.readFileSync(filePath, 'utf8') // 读取md文件内容，返回字符串
                const { data } = matter(contentStr, {}) // 解析出front matter数据
                const { title = '', icon = '', iconSize, order, collapsible = false } = data || {}
                if (isChild && file === 'README.md') {
                    fList[fIndex].text = title && title
                    fList[fIndex].icon = icon && icon
                    fList[fIndex].iconSize = iconSize && iconSize
                    fList[fIndex].collapsible = collapsible && collapsible
                    fList[fIndex].order = order != null ? order : null
                } else if (file === 'README.md') { } else {
                    const pathName = fpath ? `${fpath}/${fileName}` : fileName
                    order != null ? (sortFiles[order] = { pathName, icon, iconSize}) : noSortFiles.push({ pathName, icon, iconSize})
                    fList[fIndex].sortFiles = sortFiles
                    fList[fIndex].noSortFiles = noSortFiles
                }
            }
        })
    return filesList
}

export function resolveFiles(filesList) {
    sortPosts(filesList).map(item => {
        const sortFiles = item.sortFiles
        const noSortFiles = item.noSortFiles
        if (sortFiles) {
            const sortKeys = Object.keys(sortFiles).sort((a, b) => a - b)
            sortKeys.map(key => {
                // 子节点没有icon时，使用父节点的icon
                sortFiles[key].icon = sortFiles[key]?.icon || item.icon
                sortFiles[key].iconSize = sortFiles[key]?.iconSize || item.iconSize
                item.children.push(sortFiles[key])
            })
        }
        if (noSortFiles) {
            noSortFiles.map(file => {
                // 子节点没有icon时，使用父节点的icon
                file.icon = file?.icon || item.icon
                file.iconSize = file?.iconSize || item.iconSize
                item.children.push(file)
            })
        }
        delete item.sortFiles
        delete item.noSortFiles
    })
    return filesList.filter(Boolean)
}

// test Demo
// let arr = [{ order: 1, text: 'ab' }, { order: 3, text: 'a' }, { order: 2, text: 'c' }, { order: 4, text: 'b' }, { text: 'c' }, { text: 'a' }, { text: 'abc' }, { text: 'aef' }, { text: 'aba' }, { text: 'BoC' }, { text: 'Def' }, { text: 'FED' }]
export function sortPosts(posts) {
    posts.sort((prev, next) => {
        const { order: prevOrder, text: prevText } = prev
        const { order: nextOrder, text: nextText } = next
        
        if (prevOrder && nextOrder) {
            return prevOrder - nextOrder
        } else if (prevOrder && !nextOrder) {
            return -1
        } else if (!prevOrder && nextOrder) {
            return 1
        }
        if (prevText < nextText) {
            return -1
        } else if (prevText > nextText) {
            return 1
        }
        return 0
    })
    return posts
}