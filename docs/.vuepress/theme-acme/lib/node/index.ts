import { path, getDirname, fs } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
import { defaultTheme, type DefaultThemeOptions } from '@vuepress/theme-default'
import type { Theme } from '@vuepress/core'
// const useFrontmatter = require('./utils/useFrontmatter')

export const acmeTheme = (options: DefaultThemeOptions): Theme => {
    return {
        name: 'vuepress-theme-acme',
        extends: defaultTheme(options),
        define: {},
        alias: Object.fromEntries(fs.readdirSync(path.resolve(__dirname, '../client/components')).filter(file => file.endsWith('.vue')).map(file => [`@theme/${file}`, path.resolve(__dirname, '../client/components', file)])),
        async onInitialized(app) {
            // let sourceDir = app.dir.source()
            // useFrontmatter(sourceDir, options) // 写入frontmatter信息
            await app.writeTemp(`theme-acme/pageMap.js`, `export const pageMap = ${JSON.stringify(app.pages)}`)
        },
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
        templateDev: path.resolve(__dirname, '../../templates/build.html'),
        templateBuild: path.resolve(__dirname, '../../templates/build.html')
    }
}
