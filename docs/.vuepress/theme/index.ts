import { defaultTheme } from '@vuepress/theme-default'
import type { Theme } from '@vuepress/core'
import type { DefaultThemeOptions } from '@vuepress/theme-default'

import { path } from '@vuepress/utils'
const plugins = require('./config/plugins')

const useSitePage = require('./useSitePage');
console.log('useSitePage', useSitePage());

export const localTheme = (options: DefaultThemeOptions): Theme => {
    return {
        name: 'minimalism-theme',
        extends: defaultTheme(options),
        define: {
            __FOO__: 'test',
        },
        plugins,
        layouts: {
            404: path.resolve(__dirname, 'lib/client/layouts/404.vue'),
            Layout: path.resolve(__dirname, 'lib/client/layouts/Layout.vue')
        },
        clientConfigFile: path.resolve(__dirname, 'client.js')
    }
}
