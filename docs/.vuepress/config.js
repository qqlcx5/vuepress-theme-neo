import head from './config/head'
import plugins from './config/plugins'
import theme from './config/theme'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'


export default defineUserConfig({
    lang: 'zh-CN',
    title: 'vuepress-theme-neo',
    description:
        '前端有道、技术博客、前端、前端开发、前端博客、前端框架、web前端、前端面试、技术文档、学习、面试、JavaScript、js、es6、typeScript、ts、vue、python、css3、html5、node、git、github、markdown、vuepress、react',
    head,
    bundler: viteBundler(),
    theme,
    plugins
})
