import { fs, getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
import matter from 'gray-matter' // front matter解析器

/**
 * 获取本站的文章总字数
 * 可以排除某个目录下的 md 文档字数
 */
export function readTotalFileWords(filesList) {
    let allWordCount = 0
    filesList.forEach(item => {
        const content = getContent(item.filePath)
        let len = counter(content)
        allWordCount += len[0] + len[1]
    })
    if (allWordCount < 1000) {
        return allWordCount
    }
    return Math.round(allWordCount / 100) / 10 + 'k'
}
/**
 * 获取每一个文章的字数
 * 可以排除某个目录下的 md 文档字数
 */
export function readEachFileWords(filesList, cn, en) {
    const filesListWords = []
    filesList.forEach(item => {
        const content = getContent(item.filePath)
        var len = counter(content)
        // 计算预计的阅读时间
        var readingTime = readTime(len, cn, en)
        var wordsCount = 0
        wordsCount = len[0] + len[1]
        if (wordsCount >= 1000) {
            wordsCount = Math.round(wordsCount / 100) / 10 + 'k'
        }
        const fileMatterObj = matter(content, {})
        const matterData = fileMatterObj.data
        filesListWords.push({ ...item, wordsCount, readingTime, ...matterData })
    })
    return filesListWords
}

/**
 * 计算预计的阅读时间
 */
export function readTime(len, cn = 300, en = 160) {
    var readingTime = len[0] / cn + len[1] / en
    if (readingTime > 60 && readingTime < 60 * 24) {
        // 大于一个小时，小于一天
        let hour = parseInt(readingTime / 60)
        let minute = parseInt(readingTime - hour * 60)
        if (minute === 0) {
            return hour + 'h'
        }
        return hour + 'h' + minute + 'm'
    } else if (readingTime > 60 * 24) {
        // 大于一天
        let day = parseInt(readingTime / (60 * 24))
        let hour = parseInt((readingTime - day * 24 * 60) / 60)
        if (hour === 0) {
            return day + 'd'
        }
        return day + 'd' + hour + 'h'
    }
    return readingTime < 1 ? '1' : parseInt(readingTime * 10) / 10 + 'm' // 取一位小数
}

/**
 * 读取文件内容
 */
export function getContent(filePath) {
    return fs.readFileSync(filePath, 'utf8')
}
/**
 * 获取文件内容的字数
 * cn：中文
 * en：一整句英文（没有空格隔开的英文为 1 个）
 */
export function counter(content) {
    const cn = (content.match(/[\u4E00-\u9FA5]/g) || []).length
    const en = (content.replace(/[\u4E00-\u9FA5]/g, '').match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g) || []).length
    return [cn, en]
}
