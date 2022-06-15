/**
 *  选择指定目录读取所有md文件数据
 */
const fs = require('fs') // 文件模块
const path = require('path') // 路径模块

function readFile(dir, collapsible = false,  filesList = [], fpath = '') {
  const files = fs.readdirSync(dir)
  const rootName = path.basename(dir)
  files.forEach((item, index) => {
    let filePath = path.join(dir, item)
    const stat = fs.statSync(filePath)
    const fileName = path.basename(filePath) // 文件名数组
    // 如果是文件夹，则递归调用该函数
    if (stat.isDirectory() && item !== '.vuepress') {
      filesList.push({
        text: fileName,
        collapsible,
        children: []
      })
      // 上层目录名 + 当前目录名
      fpath = `/${rootName}/${item}`
      readFile(path.join(dir, item), collapsible, filesList[index].children, fpath) //递归读取文件
    } else {
      const fileType = path.extname(filePath) // 文件类型数组
      const pathName = fpath ? `${fpath}/${fileName}` : fileName
      // 如果是md文件，则添加到数组中
      if (fileType === '.md') {
        filesList.push(pathName)
      }
    }
  })
  console.log(filesList);
  return filesList
}

module.exports = readFile
