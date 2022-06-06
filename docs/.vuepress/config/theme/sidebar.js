const path = require('path') // 路径模块
const readFile = require('../../utils/readFile')

const docsRoot = path.join(__dirname, '..', '..', '..', '02.component') // docs相对路径
module.exports = {
  '/component/': readFile(docsRoot)
}
