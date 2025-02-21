// 正则表达式，用于匹配URL中的哈希部分
export const hashRE = /#.*$/

// 正则表达式，用于匹配.md或.html文件扩展名
export const extRE = /\.(md|html)$/

// 正则表达式，用于匹配路径末尾的斜杠
export const endingSlashRE = /\/$/

// 正则表达式，用于匹配外部链接（以字母开头的协议）
export const outboundRE = /^[a-z]+:/i

// 防抖函数，用于减少函数调用频率
export const debounce = (function () {
    const timer = {} // 存储定时器的对象
    return function (func, wait = 500) {
        const context = this // 保存当前上下文
        const args = arguments // 保存传入的参数
        // 生成唯一键名，用于存储定时器
        const randomText = String(args[0]).replace(/[\r\n]|\s+/g, '')
        const name = 'debounce' + randomText
        if (timer[name]) clearTimeout(timer[name]) // 如果已存在定时器，清除之
        timer[name] = setTimeout(() => {
            func.apply(context, args) // 延迟执行函数
        }, wait)
    }
})()

// 标准化路径，移除URL的哈希部分和文件扩展名
export function normalize(path) {
    return decodeURI(path).replace(hashRE, '').replace(extRE, '')
}

// 从给定路径中获取哈希值
export function getHash(path) {
    const match = path && path.match(hashRE)
    if (match) {
        return match[0]
    }
}

// 检查路径是否为外部链接
export function isExternal(path) {
    return outboundRE.test(path)
}

// 检查路径是否为mailto链接（电子邮件）
export function isMailto(path) {
    return /^mailto:/.test(path)
}

// 检查路径是否为电话链接
export function isTel(path) {
    return /^tel:/.test(path)
}

// 确保路径有正确的文件扩展名
export function ensureExt(path) {
    if (isExternal(path)) {
        return path
    }
    if (!path) return '404'
    const hashMatch = path.match(hashRE)
    const hash = hashMatch ? hashMatch[0] : ''
    const normalized = normalize(path)

    if (endingSlashRE.test(normalized)) {
        return path
    }
    return normalized + '.html' + hash
}

// 检查当前路由是否与给定路径匹配
export function isActive(route, path) {
    const routeHash = route.hash
    const linkHash = getHash(path)
    if (linkHash && routeHash !== linkHash) {
        return false
    }
    const routePath = normalize(route.path)
    const pagePath = normalize(path)
    return routePath === pagePath
}

// 解析页面，根据路径和基础路径查找匹配的页面对象
export function resolvePage(pages, rawPath, base) {
    if (isExternal(rawPath)) {
        return {
            type: 'external',
            path: rawPath
        }
    }
    if (base) {
        rawPath = resolvePath(rawPath, base)
    }
    const path = normalize(rawPath)
    for (let i = 0; i < pages.length; i++) {
        if (normalize(pages[i].regularPath) === path) {
            return Object.assign({}, pages[i], {
                type: 'page',
                path: ensureExt(pages[i].path)
            })
        }
    }
    console.error(`[vuepress] No matching page found for sidebar item "${rawPath}"`)
    return {}
}

// 解析相对路径
function resolvePath(relative, base, append) {
    const firstChar = relative.charAt(0)
    if (firstChar === '/') {
        return relative
    }

    if (firstChar === '?' || firstChar === '#') {
        return base + relative
    }

    const stack = base.split('/')

    // 根据是否追加路径来移除或添加路径段
    if (!append || !stack[stack.length - 1]) {
        stack.pop()
    }

    // 解析相对路径
    const segments = relative.replace(/^\//, '').split('/')
    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i]
        if (segment === '..') {
            stack.pop()
        } else if (segment !== '.') {
            stack.push(segment)
        }
    }

    // 确保路径以斜杠开头
    if (stack[0] !== '') {
        stack.unshift('')
    }

    return stack.join('/')
}

// 根据页面数据和侧边栏配置解析侧边栏项
export function resolveSidebarItems(page, regularPath, site, localePath) {
    const { pages, themeConfig } = site

    // 获取本地化配置或默认配置
    const localeConfig = localePath && themeConfig.locales ? themeConfig.locales[localePath] || themeConfig : themeConfig

    // 获取页面特定的侧边栏配置
    const pageSidebarConfig = page.frontmatter.sidebar || localeConfig.sidebar || themeConfig.sidebar
    if (pageSidebarConfig === 'auto') {
        return resolveHeaders(page)
    }

    // 获取全局侧边栏配置
    const sidebarConfig = localeConfig.sidebar || themeConfig.sidebar
    if (!sidebarConfig) {
        return []
    } else {
        const { base, config } = resolveMatchingConfig(regularPath, sidebarConfig)
        if (config === 'auto') {
            return resolveHeaders(page)
        }
        return config ? config.map(item => resolveItem(item, pages, base)) : []
    }
}

// 根据页面头部信息解析侧边栏项
function resolveHeaders(page) {
    const headers = groupHeaders(page.headers || [])
    return [
        {
            type: 'group',
            collapsable: false,
            title: page.title,
            path: null,
            children: headers.map(h => ({
                type: 'auto',
                title: h.title,
                basePath: page.path,
                path: page.path + '#' + h.slug,
                children: h.children || []
            }))
        }
    ]
}

// 将页面头部信息分组
export function groupHeaders(headers) {
    // 将h3标题归入h2标题下
    headers = headers.map(h => Object.assign({}, h))
    let lastH2
    headers.forEach(h => {
        if (h.level === 2) {
            lastH2 = h
        } else if (lastH2) {
            ;(lastH2.children || (lastH2.children = [])).push(h)
        }
    })
    return headers.filter(h => h.level === 2)
}

// 解析导航链接项
export function resolveNavLinkItem(linkItem) {
    return Object.assign(linkItem, {
        type: linkItem.items && linkItem.items.length ? 'links' : 'link'
    })
}

// 根据当前路径匹配对应的侧边栏配置
export function resolveMatchingConfig(regularPath, config) {
    if (Array.isArray(config)) {
        return {
            base: '/',
            config: config
        }
    }
    for (const base in config) {
        if (ensureEndingSlash(regularPath).indexOf(encodeURI(base)) === 0) {
            return {
                base,
                config: config[base]
            }
        }
    }
    return {}
}

// 确保路径以斜杠结尾
function ensureEndingSlash(path) {
    return /(\.html|\/)$/.test(path) ? path : path + '/'
}

// 解析侧边栏项，可以是字符串、数组或对象
function resolveItem(item, pages, base, groupDepth = 1) {
    if (typeof item === 'string') {
        return resolvePage(pages, item, base)
    } else if (Array.isArray(item)) {
        return Object.assign(resolvePage(pages, item[0], base), {
            title: item[1]
        })
    } else {
        if (groupDepth > 3) {
            console.error('[vuepress] detected a too deep nested sidebar group.')
        }
        const children = item.children || []
        if (children.length === 0 && item.path) {
            return Object.assign(resolvePage(pages, item.path, base), {
                title: item.title
            })
        }
        return {
            type: 'group',
            path: item.path,
            title: item.title,
            sidebarDepth: item.sidebarDepth,
            initialOpenGroupIndex: item.initialOpenGroupIndex,
            children: children.map(child => resolveItem(child, pages, base, groupDepth + 1)),
            collapsable: item.collapsable !== false
        }
    }
}

// 对URL中的特殊字符进行编码
export function encodeUrl(str) {
    str = str + ''
    str = str.replace(/ |((?=[\x21-\x7e]+)[^A-Za-z0-9])/g, '-')
    return str
}
