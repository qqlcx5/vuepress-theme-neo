import {readFile, resolveFiles } from './genSidebarData' // 读取文件函数模块

export const prepareSidebarData = (app, options) => {
    let docsRoot = app.dir.source()
    const sidebar = options.sidebar
    // const isSidebarIcon = options.sidebarIcon || true // 是否显示侧边栏图标
    let sidebarData = {}
    for (const [path, value] of Object.entries(sidebar)) {
        const lastPath = path.substring(0, path.lastIndexOf('/'))
        if (value === 'structure') {
            const tocs = readFile(docsRoot + lastPath)
            sidebarData[path] = resolveFiles(tocs)
        } else if (Array.isArray(value)) {
            sidebarData[path] = value
        } else {
            sidebarData[path] = []
        }
    }
    // console.log('prepareSidebarData--------', sidebarData);
    options.sidebar = sidebarData
}