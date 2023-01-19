import { setFrontmatter } from './setFrontmatter.js'
import { readTotalFileWords, formatWordCount } from './readFileWords.js'

export const preparePagesFrontmatter = async (app, options) => {
    const usefulPages = app.pages.filter(page => !!page.filePathRelative && !page.frontmatter['home'] && !page.frontmatter.catalogue && page.frontmatter.article !== false)
    const pagesMap = usefulPages.map(page => ({
        title: page.title || '',
        excerpt: page.excerpt || '',
        data: page.data || {},
        frontmatter: page.frontmatter || {},
        author: page.frontmatter.author || options.author || '',
        path: page.path,
        permalink: page.permalink,
        filePath: page.filePath, // 绝对路径
        filePathRelative: page.filePathRelative, // 相对路径
        ...formatWordCount(page.content)
    }))
    // 所有.md文件设置frontmatter(标题、日期)
    setFrontmatter(pagesMap, options)
    // 所有文章总字数
    const allWordCount = readTotalFileWords(usefulPages)
    await app.writeTemp(`theme-neo/pagesData.js`, `export const allWordCount = ${JSON.stringify(allWordCount)}; export const pagesData = ${JSON.stringify(pagesMap)}`)
}
