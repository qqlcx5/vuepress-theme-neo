// import { readFile, resolveFiles } from './genSidebarData.js'; // 读取文件函数模块
import { generateSidebarData } from './neoGenerateSidebarData.js'; // 读取文件函数模块

export const prepareSidebarData = (app, options) => {
    const {sidebar = {}, sidebarOptions = {} } = options;
    let sidebarData = {};
    for (const [path, value] of Object.entries(sidebar)) {
        if (value === 'structure') {
            const docsRoot = app.dir.source();
            // const lastPath = path.substring(0, path.lastIndexOf('/'));
            // const tocs = readFile(docsRoot + lastPath);
            // sidebarData[path] = resolveFiles(tocs);
            sidebarData[path] = generateSidebarData(docsRoot, path, sidebarOptions);
            // console.log(JSON.stringify(sidebarData, null, 2));
        } else if (Array.isArray(value)) {
            sidebarData[path] = value;
        } else {
            sidebarData[path] = [];
        }
    }
    // console.log(`🚀 - prepareSidebarData - sidebarData0:`, sidebarData['/utils/'][0].children)
    // console.log(`🚀 - prepareSidebarData - sidebarData1:`, sidebarData['/utils/'][1].children);
    // console.log(`🚀 - prepareSidebarData - sidebarData2:`, sidebarData['/config/'][0].children);
    options.sidebar = sidebarData;
};
