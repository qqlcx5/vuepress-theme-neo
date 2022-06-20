import { defaultTheme } from '@vuepress/theme-default'
import type { Theme } from '@vuepress/core'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

export const localTheme = (options: DefaultThemeOptions): Theme => {
    return {
        name: 'minimalism-theme',
        extends: defaultTheme(options),
        layouts: {
            404: path.resolve(__dirname, 'lib/client/layouts/404.vue'),
            Layout: path.resolve(__dirname, 'lib/client/layouts/Layout.vue')
        }
    }
}
