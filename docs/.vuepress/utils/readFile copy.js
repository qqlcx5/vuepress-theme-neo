/**
 *  读取所有md文件数据
 */

const fs = require('fs') // 文件模块
const path = require('path') // 路径模块
const docsRoot = path.join(__dirname, '..', '..') // docs相对路径

const chalk = require('chalk') // 控制台颜色模块
const log = console.log

function readFile(fileName = '', collapsable = false, allfilesList = [], key = 0) {
  // 初始化数据
  if (!allfilesList?.length) {
    allfilesList.push({ title: fileName, collapsable, children: [] })
  }
  log(chalk.green(`读取文件：${filePath}`))
  const files = fs.readdirSync(path.join(docsRoot, fileName))

  files.forEach((file, index) => {
    const subFilePath = path.join(filePath, file)
    let stat = fs.statSync(subFilePath)
    if (stat.isDirectory() && file !== '.vuepress') {
      allfilesList[file] || (allfilesList[file] = { title: file, collapsable, children: [] })
      readFile(subFilePath, collapsable, allfilesList, file)
    }
    let suffix = file.substring(file.lastIndexOf('.'), file.length) // 后缀名
    if (suffix === '.md') {
      let item = ['index.md', 'readme.md'].includes(file.toLowerCase()) ? file : `${fileName}/${file}`
      allfilesList[key].children.push(item)
    }
  })
  log(chalk.green(`生成文件目录-----------`))
  console.log(allfilesList)
  return []
}

// [
//   {
//     text: 'VuePress Reference',
//     collapsible: true,
//     children: ['/reference/cli.md', '/reference/config.md']
//   },
//   {
//     text: 'Bundlers Reference',
//     collapsible: true,
//     children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md']
//   }
// ]

module.exports = readFile
