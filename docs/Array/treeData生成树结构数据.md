# `treeData`生成树结构数据

该函数传入一个数组， 每项`id`对应其父级数据`parent_id`，返回一个树结构数组

```js
treeData(array, id, parent_id)
```

**参数**

- `array` 要生成树结构的数组
- `id` 自定义属性名
- `parent_id` 父级自定义属性名

**例子**

```js
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 },
]

treeData(comments)

// => [ { id: 1, parent_id: null, children: [ [Object], [Object] ] } ]
```

**源码**

```js
const treeData = (arr, id = null, link = 'parent_id') => arr.filter(item => item[link] === id).map(item => ({ ...item, children: treeData(arr, item.id) }))
```
