import { generateSidebarData } from './neoGenerateSidebarData.js'; // 读取文件函数模块

export const prepareSidebarData = (app, options) => {
    const {sidebar = {}, sidebarOptions = {} } = options;
    let sidebarData = {};
    for (const [path, value] of Object.entries(sidebar)) {
        if (value === 'structure' || value?.mode === 'structure') {
            const docsRoot = app.dir.source();
            sidebarData[path] = generateSidebarData(docsRoot, path, sidebarOptions);
        } else if (Array.isArray(value)) {
            sidebarData[path] = value;
        } else {
            sidebarData[path] = [];
        }
    }
    options.sidebar = sidebarData;
};
