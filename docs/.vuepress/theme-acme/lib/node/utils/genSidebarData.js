/**
 *  选择指定目录生成侧边栏的数据
 */

import { path, fs } from '@vuepress/utils'
import matter from 'gray-matter' // front matter解析器

function resolveDir(fileName = '目录') {
    // new Promise((resolve, reject) => {})
    return { text: fileName, collapsible: true, children: [] }
}

export function readFile(dir, allList = []) {
    !allList?.length && (allList.push(resolveDir()))
    const files = fs.readdirSync(dir)
    files.forEach(file => {
        const fileName = file.name
        const filePath = path.join(dir, fileName)
        const fileType = path.extname(filePath)
        // console.log(file.isFile(), file.isDirectory(), fileName, filePath, 'fileType--', fileType);
        if (file.isFile && fileType === '.md') {
            const fileContent = fs.readFileSync(filePath, 'utf-8')
            const { data } = matter(fileContent)
            const { title } = data
            const toc = {
                text: title,
                link: filePath
            }
            // allList[0].children.push(toc)
        } else if (file.isDirectory()) {
            // tempList(filePath, { text: fileName, collapsible: true, children: [] })
            // readFile(filePath, filesList)
        }
    })
}
export function resolveFiles(dir) {
    return []
}
// const treeData = (arr, id = null, link = 'parent_id') => arr.filter(item => item[link] === id).map(item => ({ ...item, children: treeData(arr, item.id) }))

// function walkSync(currentDirPath, callback) {

//     // http://nodejs.cn/api/fs.html#fsreaddirsyncpath-options
//     // http://nodejs.cn/api/fs.html#class-fsdirent 新增于: v10.10.0
//     fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(function(dirent) {
//       var filePath = path.join(currentDirPath, dirent.name);
//       if (dirent.isFile()) {
//         callback(filePath, dirent);
//       } else if (dirent.isDirectory()) {
//         walkSync(filePath, callback);
//       }
//     });
//   }
//   walkSync('src', function(filePath, stat) {
//     console.log(filePath);
//     // src/icons/card_flight.png
//     // src/icons/clock.png
//     // src/icons/icon-home-edit.png
//     // src/icons/iconSprites.json
//     // src/index.js
//     // do something with "filePath"...
//   });
