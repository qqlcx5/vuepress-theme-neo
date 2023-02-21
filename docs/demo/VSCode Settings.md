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
    // 编辑器配置
    "editor.tabSize": 2,
    "editor.fontSize": 16,
    "editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
    "editor.formatOnSave": false, // 编辑器是否在保存时格式化
    "editor.minimap.renderCharacters": true, // 渲染每行的实际字符，而不是色块。
    "editor.cursorSmoothCaretAnimation": true, // 控制是否启用平滑插入动画。
    "editor.smoothScrolling": true, // 控制编辑器是否使用动画滚动。
    "editor.bracketPairColorization.enabled": true, // 控制是否启用括号对着色
    "editor.guides.bracketPairs": true, // 控制是否启用括号对参考线
    "editor.guides.indentation": true, // 控制编辑器是否应该呈现缩进指南。
    "editor.guides.highlightActiveIndentation": true, // 控制编辑器是否应突出显示活动缩进指南。
    "editor.detectIndentation": false, // 控制是否在打开文件时，基于文件内容自动检测
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "diffEditor.renderSideBySide": true, //控制差异编辑器的显示方式是并排还是内联。
    "diffEditor.ignoreTrimWhitespace": true, // 差异编辑器将忽略前导空格或尾随空格中的更改。
    "editor.accessibilitySupport": "off", // 编辑器将不再对屏幕阅读器的使用进行优化。
    "editor.bracketPairColorization.independentColorPoolPerBracketType": true, // 控制每个方括号类型是否具有自己的独立颜色池。
    "editor.fontLigatures": true, // 启用/禁用字体连字("calt" 和 "liga" 字体特性)。将此更改为字符串，可对 "font-feature-settings" CSS 属性进行精细控制。
    "editor.formatOnPaste": true, // 控制编辑器是否自动格式化粘贴的内容。格式化程序必须可用，并且能针对文档中的某一范围进行格式化。
    "editor.inlineSuggest.enabled": true, // 控制是否在编辑器中自动显示内联建议。
    "explorer.incrementalNaming": "smart", //选择在粘贴同名文件(夹)时在重复名称的末尾添加一个数字。
    "editor.mouseWheelZoom": false, // 按住 Ctrl 键并滚动鼠标滚轮时对编辑器字体大小进行缩放。
    "editor.rulers": [80], // 在一定数量的等宽字符后显示垂直标尺。
    "editor.quickSuggestions": {
        "comments": true,
        "strings": true,
        "other": true
    },
    "editor.renderControlCharacters": true,
    "editor.renderWhitespace": "boundary",
    "editor.stickyScroll.enabled": true,
    "editor.suggestSelection": "first",
    "editor.wordWrap": "on",
    "editor.experimental.pasteActions.enabled": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },

    // 工作台设置
    "workbench.colorTheme": "One Dark Pro Darker",
    "workbench.iconTheme": "vscode-icons",
    "workbench.startupEditor": "none",
    "workbench.activityBar.visible": true,
    "workbench.commandPalette.preserveInput": true,
    "workbench.editor.scrollToSwitchTabs": true,
    "security.workspace.trust.untrustedFiles": "open",
    "vsicons.dontShowNewVersionMessage": true, // 关于新的版本消息将不再显示
    // 编辑器窗口设置
    "window.closeWhenEmpty": true,
    "window.commandCenter": true,
    "window.dialogStyle": "custom",
    "window.newWindowDimensions": "inherit",
    "breadcrumbs.enabled": true, // 启用/禁用导航路径。
    // "search.useGlobalIgnoreFiles": true, // 控制在搜索文件时是否使用全局 .gitignore 和 .ignore 文件。
    // "search.useIgnoreFiles": true, // 控制在搜索文件时是否使用

    // emmet 包含 wxml 视为 html
    "emmet.includeLanguages": {
        "vue-html": "html",
        "vue": "html",
        "javascript": "javascriptreact",
        "wxml": "html"
    },
    "emmet.variables": {
        "lang": "zh-CN",
        "charset": "UTF-8"
    },
    "emmet.syntaxProfiles": {
        "vue-html": "html",
        "vue": "html"
    },
    // 特定格式文件设置
    "[vue]": {
        "editor.codeActionsOnSave": {
            "source.fixAll": true,
            "source.fixAll.eslint": true
        },
        "editor.defaultFormatter": "esbenp.prettier-vscode"
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
    // markdown 设置
    "markdown.validate.enabled": true,
    "markdown.preview.openMarkdownLinks": "inEditor",
    "markdown.preview.typographer": true,
    "markdown.extension.orderedList.marker": "one",
    "markdown.extension.print.imgToBase64": true,
    // markdownlint 设置
    "markdownlint.config": {
        "default": true,
        "MD025": false,
        "MD045": false,
        "MD033": false,
        "MD036": false,
        "MD041": false,
        "MD003": {
            "style": "atx"
        },
        "MD004": {
            "style": "dash"
        },
        "MD013": false,
        "MD024": {
            "allow_different_nesting": true
        },
        "MD035": {
            "style": "---"
        }
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
    // typescript 配置
    "javascript.format.semicolons": "insert",
    "javascript.referencesCodeLens.enabled": true,
    "javascript.suggest.completeFunctionCalls": true,
    "javascript.preferences.quoteStyle": "double",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "typescript.locale": "zh-CN",
    "typescript.enablePromptUseWorkspaceTsdk": true,
    "typescript.format.semicolons": "insert",
    "typescript.preferences.quoteStyle": "double",
    "typescript.referencesCodeLens.enabled": true,
    "typescript.suggest.completeFunctionCalls": true,
    "typescript.updateImportsOnFileMove.enabled": "always",
    // stylus
    "stylusSupremacy.insertColons": true, // 是否插入冒号
    "stylusSupremacy.insertSemicolons": true, // 是否插入分好
    "stylusSupremacy.insertBraces": true, // 是否插入大括号
    "stylusSupremacy.insertNewLineAroundImports": true, // import是否换行
    "stylusSupremacy.insertNewLineAroundBlocks": false,
    // eslint
    "eslint.packageManager": "pnpm",
    "eslint.validate": ["javascript", "javascriptreact", "vue", "nvue", "typescript", "typescriptreact"],
    "eslint.alwaysShowStatus": true, // 始终显示 ESlint 状态栏项。
    "eslint.run": "onSave", // 在保存 (onSave) 或类型 (onType) 时运行 linter
    "eslint.workingDirectories": ["./src"],
    "eslint.codeActionsOnSave.mode": "problems",
    // leetcode
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
    "git.mergeEditor": true, // 启用 Git 合并编辑器

    // Git Lens 设置
    "gitlens.defaultDateFormat": "YYYY-MM-DD HH:mm",
    "gitlens.defaultDateShortFormat": "YYYY-MM-DD",
    "gitlens.defaultTimeFormat": "HH:mm",
    "gitlens.gitCommands.closeOnFocusOut": true,
    "gitlens.views.repositories.branches.layout": "list",
    "gitlens.advanced.messages": {
        "suppressCommitNotFoundWarning": true,
        "suppressRebaseSwitchToTextWarning": true
    },
    "gitlens.hovers.currentLine.over": "line",
    "gitlens.codeLens.enabled": false,
    "gitlens.defaultDateStyle": "absolute",
    "gitlens.defaultDateLocale": null,
    // 提示设置
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "problems.showCurrentInStatus": true,
    // 在线服务设置
    "telemetry.telemetryLevel": "error",
    // 终端设置
    "terminal.external.linuxExec": "bash",
    "terminal.integrated.confirmOnExit": "hasChildProcesses",
    "terminal.integrated.copyOnSelection": true,
    "terminal.integrated.enableBell": true,
    "terminal.integrated.defaultProfile.windows": "PowerShell",
    "terminal.integrated.defaultProfile.linux": "bash",
    "terminal.integrated.defaultProfile.osx": "zsh",
    // "terminal.integrated.fontFamily": "Meslo LG M for Powerline",
    "terminal.integrated.env.linux": {
        "NODE_OPTIONS": "--max_old_space_size=4096"
    },
    "terminal.integrated.env.windows": {
        "NODE_OPTIONS": "--max_old_space_size=4096"
    },
    "terminal.integrated.profiles.windows": {
        "PowerShell": {
            "source": "PowerShell",
            "overrideName": true,
            "icon": "terminal-powershell",
            "args": ["-NoLogo"]
        },
        "bash": {
            "path": "/bin/zsh",
            "icon": "star",
            "env": { "TESTING_VAR": "abc" }
        }
    },
    "terminal.integrated.shellIntegration.enabled": true,
    "terminal.integrated.smoothScrolling": true,
    "terminal.integrated.tabs.enabled": true,
    "merge-conflict.autoNavigateNextConflict.enabled": true,
    // npm 设置
    "npm.enableRunFromFolder": true,
    "npm.packageManager": "pnpm",
    "npm.scriptExplorerAction": "run",
    "npm-intellisense.importQuotes": "\"",
    "npm-intellisense.packageSubfoldersIntellisense": true,
    "npm-intellisense.scanDevDependencies": true,
    "npm-intellisense.showBuildInLibs": true,
    // 文件相关
    "explorer.confirmDelete": false,
    "explorer.confirmDragAndDrop": false,
    "explorer.fileNesting.enabled": true,
    "files.autoSave": "off",
    "files.eol": "\n",
    "files.maxMemoryForLargeFilesMB": 4096,
    // 项目管理器
    "projectManager.sortList": "Saved",
    "projectManager.ignoreProjectsWithinProjects": true,
    "projectManager.any.ignoredFolders": ["dist", "node_modules", "out", "typings", "test", "__tests__"],
    // "projectManager.git.baseFolders": ["D:/Projects/"],
    // TODO Highlight 配置
    "todohighlight.keywords": ["WARNING: "],

    // stylelint 设置
    "stylelint.packageManager": "npm",
    // github copilot
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
