import { typeOf, compareDate } from './neoResolveDate'

/**
 * 过滤非文章页
 * @param {Array} posts 所有文章数据
 */
export function filterPosts(posts) {
    posts = posts.filter(page => {
        // filePathRelative 舍弃那些不是从 Markdown 文件生成的页面
        return !!page.filePathRelative && !page.frontmatter['home'] && page.frontmatter.article !== false
    })
    return posts
}

/**
 * 按置顶和时间排序
 * @param {Array} posts 过滤非文章页之后的文章数据
 */
export function sortPosts(posts) {
    posts.sort((prev, next) => {
        const prevSticky = prev.frontmatter.sticky
        const nextSticky = next.frontmatter.sticky
        if (prevSticky && nextSticky) {
            return prevSticky == nextSticky ? compareDate(prev, next) : nextSticky - prevSticky
        } else if (prevSticky && !nextSticky) {
            return -1
        } else if (!prevSticky && nextSticky) {
            return 1
        }
        return compareDate(prev, next)
    })
    return posts
}

/**
 * 按时间排序
 * @param {Array} posts 过滤非文章页之后的文章数据
 */
export function sortPostsByDate(posts) {
    posts.sort((prev, next) => {
        return compareDate(prev, next)
    })
    return posts
}

/**
 * 按分类和标签分组
 * @param {Array} posts 按时间排序之后的文章数据
 */
export function groupPosts(posts) {
    const categoriesObj = {}
    const tagsObj = {}
    const columnsObj = {}

    for (let i = 0, postsL = posts.length; i < postsL; i++) {
        const {
            frontmatter: { categories, tags, columns }
        } = posts[i]
        if (typeOf(categories) === 'array') {
            categories.forEach(item => {
                if (!item) return
                !categoriesObj[item] && (categoriesObj[item] = [])
                categoriesObj[item].push(posts[i])
            })
        }
        if (typeOf(tags) === 'array') {
            tags.forEach(item => {
                if (!item) return
                !tagsObj[item] && (tagsObj[item] = [])
                tagsObj[item].push(posts[i])
            })
        }
        if (typeOf(columns) === 'array') {
            columns.forEach(item => {
                if (!item) return
                !columnsObj[item] && (columnsObj[item] = [])
                columnsObj[item].push(posts[i])
            })
        }
    }
    return {
        categories: categoriesObj,
        tags: tagsObj,
        columns: columnsObj
    }
}

/**
 * 获取所有分类和标签和专栏
 * @param {Object} groupPosts 按分类和标签分组之后的文章数据
 */
export function categoriesAndTags(groupPosts) {
    const categoriesArr = []
    const tagsArr = []
    const columnsArr = []

    for (let key in groupPosts.categories) {
        categoriesArr.push({
            key,
            length: groupPosts.categories[key].length
        })
    }

    for (let key in groupPosts.tags) {
        tagsArr.push({
            key,
            length: groupPosts.tags[key].length
        })
    }
    for (let key in groupPosts.columns) {
        columnsArr.push({
            key,
            length: groupPosts.columns[key].length
        })
    }
    return {
        categories: categoriesArr,
        tags: tagsArr,
        columns: columnsArr
    }
}
