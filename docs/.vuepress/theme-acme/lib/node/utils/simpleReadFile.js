/**
 *  选择指定目录读取所有md文件数据
 */
// const fs = require('fs') // 文件模块
// const path = require('path') // 路径模块
import { path, fs } from '@vuepress/utils'

function readFile(dir, collapsible = false,  filesList = [], fpath = '') {
  const files = fs.readdirSync(dir)
  const rootName = path.basename(dir)
  files.filter(o => o !== '.DS_Store' && !['README.MD', 'INDEX.MD'].includes(o.toUpperCase())).forEach((file, index) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    const fileName = path.basename(filePath) // 文件名数组
    // 如果是文件夹，则递归调用该函数
    if (stat.isDirectory() && file !== '.vuepress') {
      filesList.push({
        text: fileName,
        collapsible,
        children: []
      })
      // 上层目录名 + 当前目录名
      fpath = `/${rootName}/${file}`
      readFile(path.join(dir, file), collapsible, filesList[index].children, fpath) //递归读取文件
    } else {
      const fileType = path.extname(filePath) // 文件类型数组
      const pathName = fpath ? `${fpath}/${fileName}` : fileName
      // 如果是md文件，则添加到数组中
      if (fileType === '.md') {
        filesList.push(pathName)
      }
    }
  })
  return filesList
}

module.exports = readFile
