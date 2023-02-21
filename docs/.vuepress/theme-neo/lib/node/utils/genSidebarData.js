/**
 *  选择指定目录生成侧边栏的数据
 */

import { path, fs } from '@vuepress/utils'
import matter from 'gray-matter' // front matter解析器

export function readFile(dir, collapsible = true, filesList = [], fpath, fIndex, fList, isChild) {
    const files = fs.readdirSync(dir)
    const rootName = path.basename(dir) // 根目录名
    const sortFiles = {} // 有排序的文件
    const noSortFiles = [] // 无排序的文件
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
                    children: []
                }
                fpath = `/${rootName}/${file}`
                readFile(path.join(dir, file), collapsible, filesList[index].children, fpath, index, filesList, true)
            } else if (fileType === '.md') {
                const contentStr = fs.readFileSync(filePath, 'utf8') // 读取md文件内容，返回字符串
                const { data, content } = matter(contentStr, {}) // 解析出front matter数据
                const { title = '', icon = '', iconSize = '', order, collapsible = true } = data || {}
                if (isChild && file === 'README.md') {
                    fList[fIndex].text = title && title
                    fList[fIndex].icon = icon && icon
                    fList[fIndex].iconSize = iconSize && iconSize
                    fList[fIndex].collapsible = collapsible
                    fList[fIndex].order = order != null ? order : null
                } else if (file === 'README.md') {
                    !filesList['root'] && (filesList['root'] = { text: rootName, collapsible, children: [] })
                    filesList['root'].text = title && title
                    filesList['root'].icon = icon && icon
                    filesList['root'].iconSize = iconSize && iconSize
                    filesList['root'].collapsible = collapsible
                    filesList['root'].order = order != null ? order : null
                } else {
                    const relPath = fpath ? `${fpath}/${fileName}` : fileName
                    const fullTitle = content?.split('\n')?.filter(Boolean)[0]?.slice(2)?.trim()
                    // 排序累加，防止覆盖原来order
                    if (order != null) {
                        const objPage = { relPath, fullTitle, icon, iconSize }
                        function recurveOrder(order) {
                            sortFiles[order] ? recurveOrder(++order) : (sortFiles[order] = objPage)
                        }
                        recurveOrder(order)
                    } else {
                        noSortFiles.push({ relPath, fullTitle, icon, iconSize })
                    }
                    if (isChild) {
                        fList[fIndex].sortFiles = sortFiles
                        fList[fIndex].noSortFiles = noSortFiles
                    } else {
                        !filesList['root'] && (filesList['root'] = { text: rootName, collapsible, children: [] })
                        filesList['root'].sortFiles = sortFiles
                        filesList['root'].noSortFiles = noSortFiles
                    }
                }
            }
        })
    return filesList
}

export function resolveFiles(filesList) {
    sortPosts(filesList).forEach(item => {
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
    if (Object.keys(posts['root']?.sortFiles || {})?.length || posts['root']?.noSortFiles?.length) {
        posts.unshift(posts['root']) && delete posts['root']
    }
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
