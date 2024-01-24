import { createPage, deletePage } from './neoCreatePageFile.js';

// 生成分类标签等数据
export function prepareCreatePageFile(app, themeConfig) {
    let sourceDir = app.dir.source();
    if (!sourceDir || !themeConfig) return;

    // 定义一个处理页面创建和删除的函数
    function handlePageCreation(pageType, isEnabled) {
        const pageName = `${pageType}Page`;
        if (isEnabled !== false) {
            createPage(sourceDir, pageName);
        } else {
            deletePage(sourceDir, pageName);
        }
    }
    // 使用handlePageCreation函数处理各种页面
    handlePageCreation('categories', themeConfig.category);
    handlePageCreation('columns', themeConfig.column);
    handlePageCreation('articles', themeConfig.article);
    handlePageCreation('tags', themeConfig.tag);
    handlePageCreation('archives', themeConfig.archive);
}
