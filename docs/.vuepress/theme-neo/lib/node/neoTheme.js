import { defaultTheme } from './defaultTheme';
import { path, getDirname, fs } from 'vuepress/utils';
import { iconPlugin } from '@vuepress/plugin-icon'

import { extraLocaleOptions, extraThemePluginsOptions, prepareSidebarData, prepareCreatePageFile, preparePagesFrontmatter } from './utils/neoIndex.js';

const __dirname = getDirname(import.meta.url);
export const neoTheme = (options, legacy = false) => app => {
    const { plugins = {} } = legacy;
    // 定义默认名称配置(随笔 时间轴 归类等)
    extraLocaleOptions(options);
    // 定义默认插件配置
    extraThemePluginsOptions(options);
    // 生成侧边栏数据
    prepareSidebarData(app, options);
    return {
        name: 'vuepress-theme-neo',
        extends: defaultTheme(options),
        define: {},
        // 组件别名定义
        alias: Object.fromEntries(
            fs
                .readdirSync(path.resolve(__dirname, '../client/components'))
                .filter(file => file.endsWith('.vue'))
                .map(file => [`@theme/${file}`, path.resolve(__dirname, '../client/components', file)])
        ),
        plugins: [
            // 图标插件
            // @vuepress/plugin-icon
            options.themePlugins.icon!== false
               ? iconPlugin({
                  // 关键词: "iconify", "fontawesome", "fontawesome-with-brands"
                  assets: ["fontawesome-with-brands", "https://at.alicdn.com/t/c/font_3645957_b9h6o4puxjf.js"],
                  prefix: "",
               }) : [],

        ],
        // 主题准备阶段
        onPrepared(app) {
            Promise.all([
                // 创建分类、标签、归档、文件页
                prepareCreatePageFile(app, options),
                // 写入frontmatter (标题、日期) 和 统计文章总字数
                preparePagesFrontmatter(app, options),
            ]).then(() => void 0);
        },
        clientConfigFile: path.resolve(__dirname, '../client/neoConfig.js'),
        templateDev: path.resolve(__dirname, '../../templates/build.html'),
        templateBuild: path.resolve(__dirname, '../../templates/build.html')
    };
};
