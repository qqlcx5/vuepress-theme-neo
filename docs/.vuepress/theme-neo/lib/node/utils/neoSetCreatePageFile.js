import { createPage, deletePage } from './neoCreatePageFile.js'

// 生成分类标签等数据
export function prepareCreatePageFile(app, themeConfig) {
    let sourceDir = app.dir.source()
    if (!sourceDir || !themeConfig) return

    // 创建分类页文件
    if (themeConfig.category !== false) {
        createPage(sourceDir, 'categoriesPage')
    } else {
        deletePage(sourceDir, 'categoriesPage')
    }
    // 创建专栏页文件
    if (themeConfig.column !== false) {
        createPage(sourceDir, 'columnsPage')
    } else {
        deletePage(sourceDir, 'columnsPage')
    }
    // 创建文章页文件
    if (themeConfig.article !== false) {
        createPage(sourceDir, 'articlesPage')
    } else {
        deletePage(sourceDir, 'articlesPage')
    }

    // 创建标签页文件
    if (themeConfig.tag !== false) {
        createPage(sourceDir, 'tagsPage')
    } else {
        deletePage(sourceDir, 'tagsPage')
    }

    // 创建归档页文件
    if (themeConfig.archive !== false) {
        createPage(sourceDir, 'archivesPage')
    } else {
        deletePage(sourceDir, 'archivesPage')
    }
}
