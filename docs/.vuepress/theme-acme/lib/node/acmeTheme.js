import { path, getDirname, fs } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
import { defaultTheme } from '@vuepress/theme-default'
import useFrontmatter from './utils/useFrontmatter'
export const acmeTheme = options => {
    return {
        name: 'vuepress-theme-acme',
        extends: defaultTheme(options),
        define: {},
        alias: Object.fromEntries(
            fs
                .readdirSync(path.resolve(__dirname, '../client/components'))
                .filter(file => file.endsWith('.vue'))
                .map(file => [`@theme/${file}`, path.resolve(__dirname, '../client/components', file)])
        ),
        async onInitialized(app) {
            let sourceDir = app.dir.source()
            useFrontmatter(sourceDir, options) // 写入frontmatter信息
            await app.writeTemp(`theme-acme/pagesData.js`, `export const pagesData = ${JSON.stringify(app.pages)}`)
        },
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
        templateDev: path.resolve(__dirname, '../../templates/build.html'),
        templateBuild: path.resolve(__dirname, '../../templates/build.html')
    }
}
