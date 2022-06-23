import { path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'
import type { Theme } from '@vuepress/core'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
const sourceDir = path.join(__dirname, '..', '..', '..', '..') // docs相对路径
const { useSitePages, useFrontmatter } = require('./node_utils/setSitePages')

export const localTheme = (options: DefaultThemeOptions): Theme => {
    useFrontmatter(sourceDir, options)

    return {
        name: 'vuepress-theme-acme',
        extends: defaultTheme(options),
        define: {
            __SITEPAGES__: useSitePages(sourceDir)
        },
        layouts: {
            404: path.resolve(__dirname, 'layouts/404.vue'),
            Layout: path.resolve(__dirname, 'layouts/Layout.vue')
        },
        clientConfigFile: path.resolve(__dirname, 'config.js')
    }
}
