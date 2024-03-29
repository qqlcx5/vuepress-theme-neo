---
title: el-form表单组件
date: 2019-06-06 14:11:35
categories:
  - element
tags:
  - 
comment: false
columns:
  -
order: 5
---

# Vue2 elForm 表单组件

## 前言

想到当初对`el-form`表单如何实现有一些困惑，最近看着源码重现`el-form`组件，对表单实现有新的认识。

### Form 表单

下面是一份`el-form`示例代码

```vue
<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <el-form-item label="名字" prop="pass">
      <el-input type="password" v-model="ruleForm.pass"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model.number="ruleForm.age"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
      },
      rules: {
        pass: [{ required: true, message: '请输入名字', trigger: 'blur' }],
        age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
```

首先要清楚一下组件的使用方式

1. `el-form`接收`model`和`rule`两个 prop
   1. `model`表示表单绑定的数据对象
   2. `rule`表示验证规则策略，表单验证
2. `el-form-item`接收的`prop`属性，对应`form`组件的`model`数据中某个 key 值，如果 rule 刚好有 key，给定的条件下去如失去焦点验证规则匹不匹配。

最终得到类似这样代码结构

```vue
<template>
  <div>
    <form @submit.prevent>
      <div>
        姓名
        <input v-model="form.name" />
      </div>
      <div>
        年龄
        <input v-model="form.age" />
      </div>
      <div>
        <button @click="submit">提交</button>
      </div>
    </form>
  </div>
</template>
```

### 组件

组件中嵌套组件，主要是通过`slot`插槽，可以将组件拼接成上面代码结构。代码如下

**el-form**

```vue
<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 'elForm',
};
</script>
```

**el-form-item**

```vue
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'elFormItem',
};
</script>
```

**el-input**

```vue
<template>
  <input type="text" />
</template>
<script>
export default {
  name: 'elInput',
};
</script>
```

接下来就要考虑到组件中的通讯。
由于组件中有可能嵌套很多的组件，如果单纯通过`$parent`和`$children`查找出来的父级组件，不一定是`el-form`组件。

两个问题：

- `el-form-item`组件如何得到`el-form`的数据
- `el-form`组件如何和`el-form-item`进行交互

解决第一问题，可以通过`provide`与`inject`实现。
解决第二问题，就要讲到`dispatch`派发和`broadcast`广播

#### provide 与 inject

通过`provide`将当前表单实例传递到所有后代组件中，后代通过`inject`接受传递的值。

**el-form**

```vue
<template>
  <form><slot></slot></form>
</template>
<script>
export default {
  name: 'elForm',
  provide() {
    return {
      elForm: this,
    };
  },
  props: {
    model: {
      type: Object,
      default: () => ({}),
    },
    rules: Object,
  },
};
</script>
```

**el-form-item**

```vue
<template>
  <div><slot></slot></div>
</template>
<script>
export default {
  name: 'elFormItem',
  inject: ['elForm'],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: String,
  },
  mounted() {
    console.log(this.elForm);
  },
};
</script>
```

`provide`中`this`指`el-form`组件，
`this.elForm`就能得到`el-form`组件中的数据和方法。

#### dispatch 和 broadcast 广播

`$dispatch`与`$broadcast`是一种有历史的组件通信方式，因为他们是 Vue1.0 提供的一种方式，在 Vue2.0 中废弃了。

`$dispatch`: `$dispatch`会向上触发一个事件，同时传递要触发的祖先组件的名称与参数，当事件向上传递到对应的组件上时会触发组件上的事件侦听器，同时传播会停止。

`$broadcast`: `$broadcast`会向所有的后代组件传播一个事件，同时传递要触发的后代组件的名称与参数，当事件传递到对应的后代组件时，会触发组件上的事件侦听器，同时传播会停止（因为向下传递是树形的，所以只会停止其中一个叶子分支的传递）

**$dispatch**

```js
/**
 * 派发 (向上查找) (一个)
 * @param componentName // 需要找的组件的名称
 * @param eventName // 事件名称
 * @param params // 需要传递的参数
 */
    dispatch(componentName, eventName, params) {
        let parent = this.$parent || this.$root;//$parent 找到最近的父节点 $root 根节点
        let name = parent.$options.name; // 获取当前组件实例的name
        // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
        // 循环出当前名称的一样的组件实例
        while (parent && (!name||name!==componentName)) {
            parent = parent.$parent;
            if (parent) {
                name = parent.$options.name;
            }
        }
        // 有节点表示当前找到了name一样的实例
        if (parent) {
            parent.$emit.apply(parent,[eventName].concat(params))
        }
    },
```

**$broadcast**

```js
/**
 * 派发 (向上查找) (一个)
 * @param componentName // 需要找的组件的名称
 * @param eventName // 事件名称
 * @param params // 需要传递的参数
 */
broadcast(componentName, eventName, params) {
// 循环子节点找到名称一样的子节点 否则 递归 当前子节点
this.$children.map(child=>{
    if (componentName===child.$options.name) {
        child.$emit.apply(child,[eventName].concat(params))
    }else {
        broadcast.apply(child,[componentName,eventName].concat(params))
    }
})
```

**验证表单**

`async-validator`是一个表单的异步验证的第三方库，也是`element-ui` 中的`form`组件所使用的验证方式。

**el-form-item**

```vue
<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    {{ errorMessage }}
  </div>
</template>
<script>
import Schema from 'async-validator';
export default {
  name: 'elFormItem',
  inject: ['elForm'],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: String,
  },
  data() {
    return { errorMessage: '' };
  },
  mounted() {
    this.$on('validate', () => {
      if (this.prop) {
        let rule = this.elForm.rules[this.prop];
        let newValue = this.elForm.model[this.prop];

        let descriptor = {
          [this.prop]: rule,
        };
        let schema = new Schema(descriptor);

        return schema.validate({ [this.prop]: newValue }, (err, res) => {
          if (err) {
            this.errorMessage = err[0].message;
          } else {
            this.errorMessage = '';
          }
        });
      }
    });
  },
};
</script>
```
