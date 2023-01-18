---
title: VSCode Settings配置
date: 2023-01-18 15:55:35
categories:
  - VSCode
tags:
  - 
columns:
  - 
---
# VSCode Settings配置

```json
{
    // 主题
    "workbench.colorTheme": "One Dark Pro Darker",
    "workbench.iconTheme": "vscode-icons",
    "workbench.startupEditor": "welcomePage",
    "vsicons.dontShowNewVersionMessage": true, // 关于新的版本消息将不再显示
    "editor.tabSize": 4,
    "editor.fontSize": 16,
    "editor.formatOnSave": false, // 编辑器是否在保存时格式化
    "editor.minimap.renderCharacters": true, // 渲染每行的实际字符，而不是色块。
    "editor.cursorSmoothCaretAnimation": true, // 控制是否启用平滑插入动画。
    "editor.smoothScrolling": true, // 控制编辑器是否使用动画滚动。
    "editor.bracketPairColorization.enabled": true, // 控制是否启用括号对着色
    "editor.guides.bracketPairs": "active", // 控制是否启用括号对参考线
    "editor.guides.indentation": true, // 控制编辑器是否应该呈现缩进指南。
    "editor.guides.highlightActiveIndentation": true, // 控制编辑器是否应突出显示活动缩进指南。
    "editor.detectIndentation": false, // 控制是否在打开文件时，基于文件内容自动检测
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "diffEditor.ignoreTrimWhitespace": false, // 差异编辑器将忽略前导空格或尾随空格中的更改。
    // "breadcrumbs.enabled": true, // 启用/禁用导航路径。
    // "search.useGlobalIgnoreFiles": true, // 控制在搜索文件时是否使用全局 .gitignore 和 .ignore 文件。
    // "search.useIgnoreFiles": true, // 控制在搜索文件时是否使用
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "emmet.includeLanguages": {
        "vue-html": "html",
        "vue": "html",
        "javascript": "javascriptreact",
        "wxml": "html"
    },
    "emmet.syntaxProfiles": {
        "vue-html": "html",
        "vue": "html"
    },
    "[vue]": {
        "editor.codeActionsOnSave": {
            "source.fixAll": true,
            "source.fixAll.eslint": true
        },
        "editor.defaultFormatter": "octref.vetur"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[markdown]": {
        "editor.formatOnPaste": true,
        "editor.codeActionsOnSave": {
            "source.fixAll.markdownlint": true
        },
        "editor.defaultFormatter": "DavidAnson.vscode-markdownlint"
    },
    "[scss]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[stylus]": {
        "editor.defaultFormatter": "thisismanta.stylus-supremacy"
    },

    "files.associations": {
        "*.nvue": "vue"
    },
    // 显示或隐藏的文件和文件夹
    "files.exclude": {
        "**/.cache": true,
        "**/.temp": true,
        "**/chunk**": true,
        "**/dist": true
    },
    "search.exclude": {
        "**/node_modules": true,
        "**/package-lock.json": true,
        "**/pnpm-lock.yaml": true,
        "**/yarn.lock": true,
        "**/tmp": true
    },
    "markdown.preview.openMarkdownLinks": "inEditor",
    "markdown.preview.typographer": true,
    "markdownlint.config": {
        "MD024": false,
        "MD025": false,
        "MD045": false,
        "MD033": false,
        "MD036": false,
        "MD041": false
    },
    // prettier
    "prettier.arrowParens": "avoid", // 当箭头函数仅有一个参数时加上括号
    "prettier.semi": false, // 是否在每行末尾添加分号
    "prettier.endOfLine": "lf", // 指定 prettier 的换行符
    "prettier.printWidth": 200, // 指定每行代码的最佳长度， 如果超出长度则换行。
    "prettier.tabWidth": 4, // 每个制表符占用的空格数
    "prettier.singleQuote": true, // 单引号
    "prettier.trailingComma": "none", // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    "prettier.htmlWhitespaceSensitivity": "ignore",
    "prettier.useTabs": false,
    // Vetur
    "vetur.format.options.tabSize": 4,
    "vetur.ignoreProjectWarning": true, // Vetur将警告项目设置不正确。你可以禁用它。
    "vetur.format.options.useTabs": false,
    "vetur.format.scriptInitialIndent": false,
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatterOptions": {
        "wrap_attributes": "force-aligned",
        "prettier": {
            "semi": false, //不加分号
            "singleQuote": true //用单引号
        }
    },
    // stylus
    "stylusSupremacy.insertColons": true, // 是否插入冒号
    "stylusSupremacy.insertSemicolons": true, // 是否插入分好
    "stylusSupremacy.insertBraces": true, // 是否插入大括号
    "stylusSupremacy.insertNewLineAroundImports": true, // import是否换行
    "stylusSupremacy.insertNewLineAroundBlocks": false,
    // eslint
    "eslint.alwaysShowStatus": true, // 始终显示 ESlint 状态栏项。
    "eslint.run": "onSave", // 在保存 (onSave) 或类型 (onType) 时运行 linter
    "eslint.workingDirectories": ["./src"],
    "eslint.validate": ["javascript", "javascriptreact", "vue", "nvue"],
    "eslint.codeActionsOnSave.mode": "problems",
    // "terminal.integrated.profiles.osx": {
    //     "bash": {
    //         "path": "/bin/zsh",
    //         "icon": "star",
    //         "env": { "TESTING_VAR": "abc" }
    //     }
    // },
    // "terminal.integrated.defaultProfile.osx": "zsh",
    // "terminal.integrated.fontFamily": "Meslo LG M for Powerline",
    // "terminal.integrated.fontFamily": "MesloLGS NF",
    // "leetcode.endpoint": "leetcode-cn",
    // "leetcode.workspaceFolder": "/Users/another/.leetcode",
    // "leetcode.hint.setDefaultLanguage": false,
    // "leetcode.defaultLanguage": "javascript",
    // "leetcode.hint.commandShortcut": false,
    // "leetcode.hint.commentDescription": false,
    // "leetcode.hint.configWebviewMarkdown": false,
    // git
    "git.autofetch": true, //自动从当前 Git 存储库的默认远程库提取
    "git.confirmSync": false, // 同步 Git 存储库前请先进行确认
    "git.enableSmartCommit": true, //在没有暂存的更改时提交所有更改。
    "git.mergeEditor": false, // 启用 Git 合并编辑器
    "gitlens.defaultDateFormat": "YYYY/MM/DD HH:mm:ss",
    "gitlens.hovers.currentLine.over": "line",
    "gitlens.codeLens.enabled": false,
    "gitlens.defaultDateStyle": "absolute",
    "gitlens.defaultDateLocale": null,
    // copilot
    "github.copilot.enable": {
        "*": true,
        "yaml": false,
        "plaintext": false,
        "markdown": true
    },
    "liveSassCompile.settings.generateMap": false,
    "remoteHub.commitDirectlyWarning": "off",
    "tabnine.experimentalAutoImports": true
}

// jsconfig.json
// {
//   "compilerOptions": {
//     "module": "commonjs",
//     "target": "es6",
//     "baseUrl": ".",
//     "paths": {
//       "@/*": ["./src/*"],
//     }
//   },
//   "exclude": ["node_modules", "dist"],
//   "include": ["src/**/*"]
// }
```
