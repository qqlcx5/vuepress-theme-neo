import { defaultTheme } from '@vuepress/theme-default'
import { path, getDirname, fs } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
import { extraLocaleOptions, prepareCreatePageFile, preparePagesFrontmatter, prepareSidebarData } from './utils/index.js'

export const neoTheme =
    (options, legacy = false) =>
    app => {
        // 额外参数配置
        extraLocaleOptions(options)
        // 生成侧边栏数据
        prepareSidebarData(app, options)
        const { plugins = {}, sidebarSorter } = legacy
        return {
            name: 'vuepress-theme-neo',
            extends: defaultTheme(options),
            define: {},
            alias: Object.fromEntries(
                fs
                    .readdirSync(path.resolve(__dirname, '../client/components'))
                    .filter(file => file.endsWith('.vue'))
                    .map(file => [`@theme/${file}`, path.resolve(__dirname, '../client/components', file)])
            ),
            onPrepared(app) {
                Promise.all([
                    // 创建分类标签归档文件页面
                    prepareCreatePageFile(app, options),
                    // 生成文章页的frontmatter
                    preparePagesFrontmatter(app, options)
                ]).then(() => void 0)
            },
            clientConfigFile: path.resolve(__dirname, '../client/config.js'),
            templateDev: path.resolve(__dirname, '../../templates/build.html'),
            templateBuild: path.resolve(__dirname, '../../templates/build.html')
        }
    }
