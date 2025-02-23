// import { getDirname, path } from 'vuepress/utils'
// const __dirname = getDirname(import.meta.url) // import and use the dirname() method from the path module.
// const readFile = require('../utils/simpleReadFile') // 读取文件函数模块
// const docsRoot = path.resolve(__dirname, '..', '..') // docs相对路径
// console.log('__dirname docs---------------------', docsRoot);

export default {
    '/element/': 'structure',
    '/interview/': 'structure',
    '/demo/': 'structure',
    '/guide/': 'structure',
    '/config/': 'structure',
    '/utils/': 'structure',
    '/prompt/': 'structure',
    '/dedaoBook/': 'structure',
};
export const sidebarOptions = {
    collapsible: true,
}

// mock data
// '/utils/': [
//     {
//         text: 'Array',
//         icon: fa-solid fa-file,
//         iconSize: 18,
//         collapsible: true,
//         children: [
//             {
//                 icon: fa-solid fa-file,
//                 iconSize: 18,
//                 text: 'chunk 拆分数组',
//                 link: '/utils/Array/chunk转换二维数组.md',
//             },
//             {
//                 icon: 'fa-solid fa-file',
//                 text: 'clone 拷贝数组',
//                 link: '/utils/Array/clone克隆数组.md',
//             },
//             {
//                 text: 'compact 去除数组中的无效值',
//                 link: '/utils/Array/compact去除数组中的无效值.md',
//             },
//             {
//                 text: 'difference 两个数组中不包含集合',
//                 link: '/utils/Array/difference数组差集.md',
//             },
//             {
//                 text: 'flatten 扁平化数组',
//                 link: '/utils/Array/flatten扁平化数组.md',
//             },
//             {
//                 text: 'flattenDeep 指定层级扁平化数组',
//                 link: '/utils/Array/flattenDeep指定层级扁平化数组.md',
//             },
//             {
//                 text: 'intersection 两个数组中的集合',
//                 link: '/utils/Array/intersection数组交集.md',
//             },
//             {
//                 text: 'isArrayEqual 两个数组各项相等',
//                 link: '/utils/Array/isArrayEqual检查两个数组各项相等.md',
//             },
//             {
//                 text: 'isEqual 检查两个对象各项值相等',
//                 link: '/utils/Array/isEqual检查两个对象各项值相等.md',
//             },
//             {
//                 text: 'max 数组中最大值',
//                 link: '/utils/Array/max数组中最大值.md',
//             },
//             {
//                 text: 'min 数组中最大值',
//                 link: '/utils/Array/min数组中最大值.md',
//             },
//             {
//                 text: 'shuffle 打乱数组',
//                 link: '/utils/Array/shuffle打乱数组.md',
//             },
//             {
//                 text: 'sortAsc 数组升序',
//                 link: '/utils/Array/sortAsc数组升序.md',
//             },
//             {
//                 text: 'sortDesc 数组降序',
//                 link: '/utils/Array/sortDesc数组降序.md',
//             },
//             {
//                 text: 'take 截取数组开始指定的元素',
//                 link: '/utils/Array/take截取数组开始指定的元素.md',
//             },
//             {
//                 text: 'takeLast 截取数组末尾元素',
//                 link: '/utils/Array/takeLast截取数组最后指定的元素.md',
//             },
//             {
//                 text: 'treeData 生成树结构数据',
//                 link: '/utils/Array/treeData生成树结构数据.md',
//             },
//             {
//                 text: 'unique 数组去重',
//                 link: '/utils/Array/unique数组去重.md',
//             },
//             {
//                 text: 'uniqueBy 数组对象去重',
//                 link: '/utils/Array/uniqueBy数组对象去重.md',
//             },
//         ],
//     },
//     {
//         text: 'Function',
//         collapsible: true,
//         children: [
//             {
//                 text: 'calcFn 加减乘除运算',
//                 link: '/utils/Function/calcFn加减乘除运算.md',
//             },
//             {
//                 text: 'debounce 函数防抖',
//                 link: '/utils/Function/debounce函数防抖.md',
//             },
//             {
//                 text: 'throttle 函数节流',
//                 link: '/utils/Function/throttle函数节流.md',
//             },
//             {
//                 text: 'typeFn 判断类型',
//                 link: '/utils/Function/typeFn类型判断.md',
//             },
//         ],
//     },
//     {
//         text: 'Number',
//         collapsible: true,
//         children: [
//             {
//                 text: 'aboutEqual 两个值是否约等于',
//                 link: '/utils/Number/aboutEqual约等于.md',
//             },
//             {
//                 text: 'accum 数组中值总和',
//                 link: '/utils/Number/accum数组中值总和.md',
//             },
//             {
//                 text: 'average 求平均值',
//                 link: '/utils/Number/average求平均值.md',
//             },
//             {
//                 text: 'averageBy 求数组对象平均值',
//                 link: '/utils/Number/averageBy检查数组对象各项相等.md',
//             },
//             {
//                 text: 'getLineSize 计算两点之间的距离',
//                 link: '/utils/Number/getLineSize计算两点之间的距离.md',
//             },
//             {
//                 text: 'randomNumber 指定范围的随机整数',
//                 link: '/utils/Number/randomNumber指定范围的随机整数.md',
//             },
//         ],
//     },
//     {
//         text: 'String',
//         collapsible: true,
//         children: [
//             {
//                 text: 'padEnd填充右侧字符',
//                 link: '/utils/String/padEnd填充右侧字符.md',
//             },
//             {
//                 text: 'padStart填充左侧字符',
//                 link: '/utils/String/padStart填充左侧字符.md',
//             },
//             {
//                 text: 'thousands 数字每隔三位数加分号',
//                 link: '/utils/String/thousands每隔三位数字添加逗号.md',
//             },
//         ],
//     },
// ]
