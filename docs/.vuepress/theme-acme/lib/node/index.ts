import { path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'
import type { Theme } from '@vuepress/core'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
const useFrontmatter = require('./utils/useFrontmatter')

export const acmeTheme = (options: DefaultThemeOptions): Theme => {
    return {
        name: 'vuepress-theme-acme',
        extends: defaultTheme(options),
        define: {},
        alias: app => ({}),
        async onInitialized(app) {
            let sourceDir = app.dir.source()
            useFrontmatter(sourceDir, options) // 写入frontmatter信息
            await app.writeTemp(`theme-acme/pageMap.js`, `export const pageMap = ${JSON.stringify(app.pages)}`)
        },
        layouts: {
            404: path.resolve(__dirname, '../client/layouts/404.vue'),
            Layout: path.resolve(__dirname, '../client/layouts/Layout.vue')
        },
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
        templateDev: path.resolve(__dirname, '../../templates/build.html'),
        templateBuild: path.resolve(__dirname, '../../templates/build.html')
    }
}
