/**
 *  读取所有md文件数据
 */
const fs = require('fs') // 文件模块
const path = require('path') // 路径模块
const docsRoot = path.join(__dirname, '..', '..', 'docs') // docs文件路径
const chalk = require('chalk') // 命令行打印美化
const log = console.log

function readFile(dir = docsRoot, filesList = [], fpath = '') {
  const files = fs.readdirSync(dir)
  files.forEach((item, index) => {
    let filePath = path.join(dir, item)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory() && item !== '.vuepress') {
      const fileNameArr = path.basename(filePath).split('.')
      let name = null
      if (fileNameArr.length === 1) {
        name = fileNameArr[0]
      } else if (fileNameArr.length === 2) {
        name = fileNameArr[1]
      } else {
        log(chalk.yellow(`warning: 该文件夹 "${filePath}" 没有按照约定命名，将忽略生成相应数据。`))
        return
      }
      filesList.push({
        title: name,
        collapsable: false,
        children: []
      })
      readFile(path.join(dir, item), filesList[index].children, item) //递归读取文件
    } else {
      const fileNameArr = path.basename(filePath).split('.')
      let name = null,
        type = null,
        pathName = null
      if (fileNameArr.length === 2) {
        // 没有序号的文件
        name = fileNameArr[0]
        ;(type = fileNameArr[1]), (pathName = fpath ? `${fpath}/${fileNameArr[0]}` : fileNameArr[0])
      } else if (fileNameArr.length === 3) {
        // 有序号的文件
        name = fileNameArr[1]
        type = fileNameArr[2]
        pathName = fpath ? `${fpath}/${fileNameArr[0]}.${fileNameArr[1]}` : `${fileNameArr[0]}.${fileNameArr[1]}`
      } else {
        log(chalk.yellow(`warning: 该文件 "${filePath}" 没有按照约定命名，将忽略生成相应数据。`))
        return
      }
      if (type === 'md') {
        // 过滤非md文件
        filesList.push([pathName, name])
      }
    }
  })
  return filesList
}

module.exports = readFile
