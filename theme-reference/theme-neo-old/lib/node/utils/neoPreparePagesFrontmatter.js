import { setFrontmatter } from './neoSetFrontmatter.js'
import { readTotalFileWords, formatWordCount } from './neoReadFileWords.js'

export const preparePagesFrontmatter = async (app, options) => {
    const usefulPages = app.pages.filter(page => !!page.filePathRelative && !page.frontmatter['home'] && !page.frontmatter.catalogue && page.frontmatter.article !== false)
    const usefulPagesMap = usefulPages.map(page => ({
        title: page.title || '',
        excerpt: page.excerpt,
        data: page.data || new Date().toLocaleString().replace(/\//g, '-'),
        author: page.frontmatter.author || options.author || '佚名',
        frontmatter: page.frontmatter || {}, // tags, categories, author, date, description, title, permalink
        path: page.path,
        permalink: page.permalink,
        filePath: page.filePath, // 绝对路径
        filePathRelative: page.filePathRelative, // 相对路径
        ...formatWordCount(page.content) // 字数/阅读时间统计 { wordsCount, readingTime }
    }))
    // 将所有.md文件设置frontmatter(标题、日期)
    setFrontmatter(usefulPagesMap, options)
    // 统计所有文章总字数
    const allWordCount = readTotalFileWords(usefulPages)
    await app.writeTemp(`theme-neo/allPagesData.js`, `export const allWordCount = ${JSON.stringify(allWordCount)}; export const allPagesData = ${JSON.stringify(usefulPagesMap)}`)
}
