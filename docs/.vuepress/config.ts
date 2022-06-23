const head = require('./config/head')
const plugins = require('./config/plugins')
const { viteBundler } = require('@vuepress/bundler-vite')
import { defineUserConfig } from 'vuepress'
import theme from './config/theme'

// console.log('vuepress-theme-acme', theme);
export default defineUserConfig({
    lang: 'zh-CN',
    title: '前端有道',
    // base: '/vuepress-next/',
    description: '前端有道,技术博客,前端,前端开发,前端博客,前端框架,web前端,前端面试,技术文档,学习,面试,JavaScript,js,es6,typeScript,ts,vue,python,css3,html5,node,git,github,markdown,vuepress,react',
    head,
    theme,
    plugins,
    bundler: viteBundler({
        viteOptions: {
            css: { postcss: { plugins: [require('tailwindcss')(), require('autoprefixer')({})] } },
            optimizeDeps: { exclude: ['vue'] }
        },
        vuePluginOptions: {}
    }),
    debug: true
})
