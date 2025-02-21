import { path, fs } from 'vuepress/utils';
import matter from 'gray-matter';

/**
 * 生成指定目录的侧边栏数据。
 * @param {string} docsRoot - docs相对路径。
 * @param {string} directory - 要处理的目录路径。
 * @param {Object} sidebarOptions - 侧边栏配置项。
 * @returns {Array} 生成的侧边栏数据数组。
 */
export function generateSidebarData(docsRoot, directory, sidebarOptions) {
    let sidebarData = [];
    processDirectory(sidebarData, docsRoot, directory, sidebarOptions);
    // console.log(JSON.stringify(sidebarData, null, 2));
    // const res = sortSidebarItems(sidebarData);
    const inherit = inheritReadmeProperties(sidebarData);
    const sort = sortSidebarItems(inherit);
    return sort;
}

/**
 * 递归处理给定目录，读取Markdown文件和子目录。
 * @param {Array} sidebarData - 存储侧边栏数据的数组。
 * @param {string} docsRoot - docs相对路径。
 * @param {string} directory - 要处理的目录路径。
 * @param {Object} sidebarOptions - 侧边栏配置项。
 */
function processDirectory(sidebarData, docsRoot, directory, sidebarOptions) {
    const dir = path.join(docsRoot, directory);
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        // 忽略以.或@开头的文件或目录
        if (file.startsWith('.') || file.startsWith('@')) return;
        const absolutePath = path.join(dir, file);
        // 文件的相对路径 guide/catalogue.md
        const relativeFilePath = path.join(directory, file);
        const stat = fs.statSync(absolutePath); // 获取文件信息
        if (stat.isDirectory()) {
            const childSidebarData = [];
            processDirectory(childSidebarData, docsRoot, relativeFilePath, sidebarOptions);
            sidebarData.push({
                text: path.basename(relativeFilePath),
                collapsible: sidebarOptions.collapsible ?? true,
                children: childSidebarData
            });
        } else if (path.extname(file) === '.md') {
            processMarkdownFile(sidebarData, docsRoot, absolutePath, relativeFilePath, sidebarOptions);
        }
    });
}

/**
 * 处理Markdown文件，提取front matter数据，并构建页面数据对象。
 * @param {Array} sidebarData - 存储侧边栏数据的数组。
 * @param {string} docsRoot - docs相对路径。
 * @param {string} relativeFilePath - 文件的相对路径。
 * @param {Object} sidebarOptions - 侧边栏配置项。
 * @returns {Object} 页面数据对象。
 */
function processMarkdownFile(sidebarData, docsRoot, absolutePath, relativeFilePath, sidebarOptions) {
    const contentStr = fs.readFileSync(absolutePath, 'utf8');
    const { data, content } = matter(contentStr);
    let { title, index = false, showSidebar = true, icon, iconSize, iconColor, iconRotate, iconSpin, order, collapsible } = data || {};
    const fileName = path.basename(absolutePath, '.md');
    const directoryName = path.basename(path.dirname(relativeFilePath));
    const isReadme = ['readme', 'index'].includes(fileName.toLowerCase());
    const text = title || extractTitleFromContent(content) || directoryName;
    // 如果是README文件，更新或创建根目录数据对象
    if (isReadme) {
        collapsible = collapsible ?? sidebarOptions.sidebarOptions ?? true;
        const rootData = { text, link: relativeFilePath, collapsible, icon, iconSize, iconColor, iconRotate, iconSpin, order, isReadme: true, index, showSidebar };
        sidebarData.push(rootData);
    } else {
        const pageData = { text, link: relativeFilePath, icon, iconSize, iconColor, iconRotate, iconSpin, order, showSidebar };
        sidebarData.push(pageData);
    }
}

/**
 * 从Markdown内容中提取标题。
 * @param {string} content - Markdown文件的内容。
 * @returns {string} 提取出的标题。
 */
function extractTitleFromContent(content) {
    return content?.split('\n')?.find(line => line.startsWith('# '))?.slice(2)?.trim() || '';
}

function inheritReadmeProperties(items) {
    function findReadmeProps(siblings) {
        return siblings.find(item => item.isReadme) || {};
    }

    // 递归函数，用于应用 isReadme 和 showReadme 属性
    function applyReadmePropsRecursively(itemsArray, parentReadmeProps = {}) {
        return itemsArray.map(item => {
            let newItem = { ...item };
            // 如果当前项有子项，则递归地应用属性
            if (newItem.children && Array.isArray(newItem.children)) {
                // 查找子项中的 isReadme 属性
                const childReadmeProps = findReadmeProps(newItem.children);
                // 应用 isReadme 和 showReadme 属性
                newItem = {
                    ...parentReadmeProps,
                    ...item,
                    ...childReadmeProps,
                    link: undefined,
                    isReadme: undefined,
                    showReadme: undefined,
                };
                newItem.children = applyReadmePropsRecursively(item.children, { ...parentReadmeProps, ...childReadmeProps });
            } else {
                // 如果当前项没有子项，应用父级的 isReadme 和 showReadme 属性
                newItem = {
                    ...item,
                    icon: item.icon || parentReadmeProps.icon,
                    iconSize: item.iconSize || parentReadmeProps.iconSize,
                };
            }
            return newItem;
        });
    }
    // 从顶层开始递归应用属性
    const parentReadmeProps = findReadmeProps(items);
    return applyReadmePropsRecursively(items, parentReadmeProps);
}

/* -------------------------------- 解析并整理文件列表 ------------------------------- */

/**
 * 解析并整理文件列表，将其转换为最终的侧边栏数据结构。
 * @param {Array} filesList - 文件列表。
 * @returns {Array} 侧边栏数据数组。
 */

function sortSidebarItems(sidebarItems) {
    // 递归排序函数
    const sortItems = (items) => {
        // 分离有序和无序的项
        const readmeItemExists = items.find(item => item.isReadme && item.index);
        items = items.filter(item => item.showSidebar && (!item.isReadme || item.children));
        const orderedItems = items.filter(item => typeof item.order === 'number' && item.order >= 0);
        const unorderedItems = items.filter(item => typeof item.order !== 'number');
        const negativeOrderedItems = items.filter(item => typeof item.order === 'number' && item.order < 0);

        // 对有序项进行排序
        orderedItems.sort((a, b) => a.order - b.order);
        // 对无序项按标题排序
        unorderedItems.sort((a, b) => a.text.localeCompare(b.text));
        // 对负数有序项进行排序
        negativeOrderedItems.sort((a, b) => a.order - b.order);

        // 合并结果
        if (readmeItemExists) {
            return [readmeItemExists, ...orderedItems, ...unorderedItems, ...negativeOrderedItems];
        }
        return [...orderedItems, ...unorderedItems, ...negativeOrderedItems];
    };

    // 处理侧边栏项
    const processItems = (items) => {
        return items.map(item => {
            // 如果有子项，递归处理
            if (item.children && item.children.length > 0) {
                return {
                    ...item,
                    children: processItems(sortItems(item.children))
                };
            }
            return item;
        });
    };

    // 开始处理并排序侧边栏项
    return sortItems(processItems(sidebarItems));
}

