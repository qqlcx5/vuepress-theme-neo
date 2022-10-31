import { path, getDirname, fs } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
import { defaultTheme } from '@vuepress/theme-default'
import { createPageFile, setFrontmatter, assignLocaleOptions, readTotalFileWords,formatWordCount, readTime } from './utils/index'
export const acmeTheme = (localeOptions = {}) => {
    assignLocaleOptions(localeOptions)
    return {
        name: 'vuepress-theme-acme',
        extends: defaultTheme(localeOptions),
        define: {},
        alias: Object.fromEntries(
            fs
                .readdirSync(path.resolve(__dirname, '../client/components'))
                .filter(file => file.endsWith('.vue'))
                .map(file => [`@theme/${file}`, path.resolve(__dirname, '../client/components', file)])
        ),
        async onInitialized(app) {
            let sourceDir = app.dir.source()
            // 创建分类标签归档文件页面
            createPageFile(sourceDir, localeOptions)
            const usefulPages = app.pages.filter(page => !!page.filePathRelative && !page.frontmatter['home'] && page.frontmatter.article !== false)
            const pagesMap = usefulPages.map(page => ({
                title: page.title || '',
                description: page.excerpt || '',
                data: page.data || {},
                frontmatter: page.frontmatter || {},
                author: page.frontmatter.author || localeOptions.author || '',
                path: page.path,
                permalink: page.permalink,
                filePath: page.filePath, // 绝对路径
                filePathRelative: page.filePathRelative, // 相对路径
                ...formatWordCount(page.content)
            }))
            // 所有.md文件设置frontmatter(标题、日期)
            setFrontmatter(pagesMap, localeOptions)
            // 所有文章总字数
            const allWordCount = readTotalFileWords(usefulPages)
            await app.writeTemp(`theme-acme/pagesData.js`, `export const allWordCount = ${JSON.stringify(allWordCount)}; export const pagesData = ${JSON.stringify(pagesMap)}`)
        },
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
        templateDev: path.resolve(__dirname, '../../templates/build.html'),
        templateBuild: path.resolve(__dirname, '../../templates/build.html')
    }
}
