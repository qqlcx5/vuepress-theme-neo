import { path, fs } from '@vuepress/utils';
import matter from 'gray-matter';

/**
 * 生成指定目录的侧边栏数据。
 * @param {string} docsRoot - docs相对路径。
 * @param {string} directory - 要处理的目录路径。
 * @param {Object} sidebarOptions - 侧边栏配置项。
 * @returns {Array} 生成的侧边栏数据数组。
 */
export function generateSidebarData(docsRoot, directory, sidebarOptions) {
    const sidebarData = [];
    processDirectory(sidebarData, docsRoot, directory, sidebarOptions);
    // console.log(JSON.stringify(sidebarData, null, 2));
    // const res = sortSidebarItems(sidebarData);
    applyIsReadmeProperties(sidebarData);
    console.log(JSON.stringify(sidebarData, null, 2));
    return sidebarData;
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
    let { title, showReadme = false, icon, iconSize, order, collapsible } = data || {};
    const fileName = path.basename(absolutePath, '.md');
    const directoryName = path.basename(path.dirname(relativeFilePath));
    const isReadme = ['readme', 'index'].includes(fileName.toLowerCase());
    const text = title || extractTitleFromContent(content) || directoryName;
    // 如果是README文件，更新或创建根目录数据对象
    if (isReadme) {
        collapsible = collapsible ?? sidebarOptions.sidebarOptions ?? true;
        const rootData = { text, isReadme: true, showReadme, link: relativeFilePath, collapsible, icon, iconSize, order };
        sidebarData.push(rootData);
    } else {
        const pageData = { text, link: relativeFilePath, icon, iconSize, order };
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

function applyIsReadmeProperties(items) {
    // 查找并返回isReadme对象的属性
    function findReadmeProps(siblings) {
        const readmeItem = siblings.find(item => item.isReadme);
        return readmeItem || {};
    }

    // 递归函数，用于应用isReadme属性
    function applyPropertiesRecursively(itemsArray, readmeProps = {}) {
        itemsArray.forEach(item => {
            // 如果当前项是isReadme项，则跳过
            if (item.isReadme) {
                return;
            }

            // 如果当前项不是isReadme项且有isReadme属性，则应用这些属性
            if (readmeProps) {
                item.icon = item.icon || readmeProps.icon;
            }

            // 如果当前项有子项，则递归地应用属性
            if (item.children && Array.isArray(item.children)) {
                // 查找子项中的isReadme属性
                const childReadmeProps = findReadmeProps(item.children);
                console.log('111', JSON.stringify(childReadmeProps, null, 2));

                // 创建一个新对象，包含item的属性和childReadmeProps的属性，但不包括isReadme和showReadme
                let tempItem = {
                    ...item,
                    ...childReadmeProps,
                    isReadme: undefined,
                    showReadme: undefined
                };
                console.log('222', JSON.stringify(tempItem, null, 2));

                // 递归调用，传递tempItem的children和childReadmeProps
                applyPropertiesRecursively(tempItem.children, childReadmeProps);
            }
        });
    }

    // 使用递归函数处理传入的items数组
    // 首先查找顶层的isReadme属性
    const topReadmeProps = findReadmeProps(items);
    applyPropertiesRecursively(items, topReadmeProps);

    return items;
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
        // const indexItem = items.find(item => item.isReadme && item.index !== true);
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
        // const indexItemExists = indexItem != undefined;
        // if (indexItemExists) {
        //     return [indexItem, ...orderedItems, ...unorderedItems, ...negativeOrderedItems];
        // }
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

