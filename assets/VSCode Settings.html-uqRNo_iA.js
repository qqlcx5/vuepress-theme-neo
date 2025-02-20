import{_ as n,c as s,o as a,a as t}from"./app-7eMFvEA8.js";const o={},e=t(`<h1 id="vscode-settings配置" tabindex="-1"><a class="header-anchor" href="#vscode-settings配置" aria-hidden="true">#</a> VSCode Settings配置</h1><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// 编辑器配置</span>
    <span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;Fira Code&#39;, Consolas, &#39;Courier New&#39;, monospace&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 编辑器是否在保存时格式化</span>
    <span class="token property">&quot;editor.minimap.renderCharacters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 渲染每行的实际字符，而不是色块。</span>
    <span class="token property">&quot;editor.cursorSmoothCaretAnimation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制是否启用平滑插入动画。</span>
    <span class="token property">&quot;editor.smoothScrolling&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制编辑器是否使用动画滚动。</span>
    <span class="token property">&quot;editor.bracketPairColorization.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制是否启用括号对着色</span>
    <span class="token property">&quot;editor.guides.bracketPairs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制是否启用括号对参考线</span>
    <span class="token property">&quot;editor.guides.indentation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制编辑器是否应该呈现缩进指南。</span>
    <span class="token property">&quot;editor.guides.highlightActiveIndentation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制编辑器是否应突出显示活动缩进指南。</span>
    <span class="token property">&quot;editor.detectIndentation&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 控制是否在打开文件时，基于文件内容自动检测</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;diffEditor.renderSideBySide&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//控制差异编辑器的显示方式是并排还是内联。</span>
    <span class="token property">&quot;diffEditor.ignoreTrimWhitespace&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 差异编辑器将忽略前导空格或尾随空格中的更改。</span>
    <span class="token property">&quot;editor.accessibilitySupport&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 编辑器将不再对屏幕阅读器的使用进行优化。</span>
    <span class="token property">&quot;editor.bracketPairColorization.independentColorPoolPerBracketType&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制每个方括号类型是否具有自己的独立颜色池。</span>
    <span class="token property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用/禁用字体连字(&quot;calt&quot; 和 &quot;liga&quot; 字体特性)。将此更改为字符串，可对 &quot;font-feature-settings&quot; CSS 属性进行精细控制。</span>
    <span class="token property">&quot;editor.formatOnPaste&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制编辑器是否自动格式化粘贴的内容。格式化程序必须可用，并且能针对文档中的某一范围进行格式化。</span>
    <span class="token property">&quot;editor.inlineSuggest.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制是否在编辑器中自动显示内联建议。</span>
    <span class="token property">&quot;explorer.incrementalNaming&quot;</span><span class="token operator">:</span> <span class="token string">&quot;smart&quot;</span><span class="token punctuation">,</span> <span class="token comment">//选择在粘贴同名文件(夹)时在重复名称的末尾添加一个数字。</span>
    <span class="token property">&quot;editor.mouseWheelZoom&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 按住 Ctrl 键并滚动鼠标滚轮时对编辑器字体大小进行缩放。</span>
    <span class="token property">&quot;editor.rulers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 在一定数量的等宽字符后显示垂直标尺。</span>
    <span class="token property">&quot;editor.quickSuggestions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;strings&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;other&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.renderControlCharacters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.renderWhitespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;boundary&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.stickyScroll.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.suggestSelection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.wordWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.experimental.pasteActions.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 工作台设置</span>
    <span class="token property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;One Dark Pro Darker&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-icons&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;workbench.startupEditor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;workbench.activityBar.visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;workbench.commandPalette.preserveInput&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;workbench.editor.scrollToSwitchTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;security.workspace.trust.untrustedFiles&quot;</span><span class="token operator">:</span> <span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vsicons.dontShowNewVersionMessage&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 关于新的版本消息将不再显示</span>
    <span class="token comment">// 编辑器窗口设置</span>
    <span class="token property">&quot;window.closeWhenEmpty&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;window.commandCenter&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;window.dialogStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;window.newWindowDimensions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inherit&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;breadcrumbs.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用/禁用导航路径。</span>
    <span class="token comment">// &quot;search.useGlobalIgnoreFiles&quot;: true, // 控制在搜索文件时是否使用全局 .gitignore 和 .ignore 文件。</span>
    <span class="token comment">// &quot;search.useIgnoreFiles&quot;: true, // 控制在搜索文件时是否使用</span>

    <span class="token comment">// emmet 包含 wxml 视为 html</span>
    <span class="token property">&quot;emmet.includeLanguages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;vue-html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;javascript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wxml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;emmet.variables&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;charset&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UTF-8&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;emmet.syntaxProfiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;vue-html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 特定格式文件设置</span>
    <span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;source.fixAll&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[markdown]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.formatOnPaste&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;source.fixAll.markdownlint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DavidAnson.vscode-markdownlint&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[scss]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[stylus]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;thisismanta.stylus-supremacy&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;*.nvue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 显示或隐藏的文件和文件夹</span>
    <span class="token property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;**/.cache&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;**/.temp&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;**/chunk**&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;**/dist&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;search.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;**/node_modules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;**/package-lock.json&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;**/pnpm-lock.yaml&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;**/yarn.lock&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;**/tmp&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// markdown 设置</span>
    <span class="token property">&quot;markdown.validate.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;markdown.preview.openMarkdownLinks&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inEditor&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;markdown.preview.typographer&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;markdown.extension.orderedList.marker&quot;</span><span class="token operator">:</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;markdown.extension.print.imgToBase64&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// markdownlint 设置</span>
    <span class="token property">&quot;markdownlint.config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;MD025&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;MD045&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;MD033&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;MD036&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;MD041&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;MD003&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atx&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;MD004&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dash&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;MD013&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;MD024&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;allow_different_nesting&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;MD035&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;---&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// prettier</span>
    <span class="token property">&quot;prettier.arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 当箭头函数仅有一个参数时加上括号</span>
    <span class="token property">&quot;prettier.semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否在每行末尾添加分号</span>
    <span class="token property">&quot;prettier.endOfLine&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lf&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指定 prettier 的换行符</span>
    <span class="token property">&quot;prettier.printWidth&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token comment">// 指定每行代码的最佳长度， 如果超出长度则换行。</span>
    <span class="token property">&quot;prettier.tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">// 每个制表符占用的空格数</span>
    <span class="token property">&quot;prettier.singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 单引号</span>
    <span class="token property">&quot;prettier.trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 在对象，数组括号与文字之间加空格 &quot;{ foo: bar }&quot;</span>
    <span class="token property">&quot;prettier.htmlWhitespaceSensitivity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ignore&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prettier.useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// Vetur</span>
    <span class="token property">&quot;vetur.format.options.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vetur.ignoreProjectWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Vetur将警告项目设置不正确。你可以禁用它。</span>
    <span class="token property">&quot;vetur.format.options.useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vetur.format.scriptInitialIndent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vetur.format.defaultFormatter.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;js-beautify-html&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vetur.format.defaultFormatter.js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-typescript&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vetur.format.defaultFormatterOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;wrap_attributes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;force-aligned&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;prettier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//不加分号</span>
            <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//用单引号</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// typescript 配置</span>
    <span class="token property">&quot;javascript.format.semicolons&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;javascript.referencesCodeLens.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;javascript.suggest.completeFunctionCalls&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;javascript.preferences.quoteStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;double&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;javascript.updateImportsOnFileMove.enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript.locale&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript.enablePromptUseWorkspaceTsdk&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript.format.semicolons&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript.preferences.quoteStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;double&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript.referencesCodeLens.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript.suggest.completeFunctionCalls&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript.updateImportsOnFileMove.enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// stylus</span>
    <span class="token property">&quot;stylusSupremacy.insertColons&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否插入冒号</span>
    <span class="token property">&quot;stylusSupremacy.insertSemicolons&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否插入分好</span>
    <span class="token property">&quot;stylusSupremacy.insertBraces&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否插入大括号</span>
    <span class="token property">&quot;stylusSupremacy.insertNewLineAroundImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// import是否换行</span>
    <span class="token property">&quot;stylusSupremacy.insertNewLineAroundBlocks&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// eslint</span>
    <span class="token property">&quot;eslint.packageManager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pnpm&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nvue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;typescriptreact&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint.alwaysShowStatus&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 始终显示 ESlint 状态栏项。</span>
    <span class="token property">&quot;eslint.run&quot;</span><span class="token operator">:</span> <span class="token string">&quot;onSave&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 在保存 (onSave) 或类型 (onType) 时运行 linter</span>
    <span class="token property">&quot;eslint.workingDirectories&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint.codeActionsOnSave.mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;problems&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// leetcode</span>
    <span class="token comment">// &quot;leetcode.endpoint&quot;: &quot;leetcode-cn&quot;,</span>
    <span class="token comment">// &quot;leetcode.workspaceFolder&quot;: &quot;/Users/another/.leetcode&quot;,</span>
    <span class="token comment">// &quot;leetcode.hint.setDefaultLanguage&quot;: false,</span>
    <span class="token comment">// &quot;leetcode.defaultLanguage&quot;: &quot;javascript&quot;,</span>
    <span class="token comment">// &quot;leetcode.hint.commandShortcut&quot;: false,</span>
    <span class="token comment">// &quot;leetcode.hint.commentDescription&quot;: false,</span>
    <span class="token comment">// &quot;leetcode.hint.configWebviewMarkdown&quot;: false,</span>
    <span class="token comment">// git</span>
    <span class="token property">&quot;git.autofetch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//自动从当前 Git 存储库的默认远程库提取</span>
    <span class="token property">&quot;git.confirmSync&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 同步 Git 存储库前请先进行确认</span>
    <span class="token property">&quot;git.enableSmartCommit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//在没有暂存的更改时提交所有更改。</span>
    <span class="token property">&quot;git.mergeEditor&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用 Git 合并编辑器</span>

    <span class="token comment">// Git Lens 设置</span>
    <span class="token property">&quot;gitlens.defaultDateFormat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYY-MM-DD HH:mm&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;gitlens.defaultDateShortFormat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYY-MM-DD&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;gitlens.defaultTimeFormat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HH:mm&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;gitlens.gitCommands.closeOnFocusOut&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;gitlens.views.repositories.branches.layout&quot;</span><span class="token operator">:</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;gitlens.advanced.messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;suppressCommitNotFoundWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;suppressRebaseSwitchToTextWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;gitlens.hovers.currentLine.over&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;gitlens.codeLens.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;gitlens.defaultDateStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;absolute&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;gitlens.defaultDateLocale&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// 提示设置</span>
    <span class="token property">&quot;vsintellicode.modify.editor.suggestSelection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;automaticallyOverrodeDefaultValue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;problems.showCurrentInStatus&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 在线服务设置</span>
    <span class="token property">&quot;telemetry.telemetryLevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 终端设置</span>
    <span class="token property">&quot;terminal.external.linuxExec&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.confirmOnExit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hasChildProcesses&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.copyOnSelection&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.enableBell&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.defaultProfile.windows&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PowerShell&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.defaultProfile.linux&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.defaultProfile.osx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zsh&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// &quot;terminal.integrated.fontFamily&quot;: &quot;Meslo LG M for Powerline&quot;,</span>
    <span class="token property">&quot;terminal.integrated.env.linux&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;NODE_OPTIONS&quot;</span><span class="token operator">:</span> <span class="token string">&quot;--max_old_space_size=4096&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.env.windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;NODE_OPTIONS&quot;</span><span class="token operator">:</span> <span class="token string">&quot;--max_old_space_size=4096&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.profiles.windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;PowerShell&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PowerShell&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;overrideName&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;terminal-powershell&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;-NoLogo&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bash&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/bin/zsh&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;star&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;TESTING_VAR&quot;</span><span class="token operator">:</span> <span class="token string">&quot;abc&quot;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.shellIntegration.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.smoothScrolling&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.tabs.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;merge-conflict.autoNavigateNextConflict.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// npm 设置</span>
    <span class="token property">&quot;npm.enableRunFromFolder&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;npm.packageManager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pnpm&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;npm.scriptExplorerAction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;run&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;npm-intellisense.importQuotes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;npm-intellisense.packageSubfoldersIntellisense&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;npm-intellisense.scanDevDependencies&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;npm-intellisense.showBuildInLibs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 文件相关</span>
    <span class="token property">&quot;explorer.confirmDelete&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;explorer.confirmDragAndDrop&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;explorer.fileNesting.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;files.eol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;files.maxMemoryForLargeFilesMB&quot;</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>
    <span class="token comment">// 项目管理器</span>
    <span class="token property">&quot;projectManager.sortList&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Saved&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;projectManager.ignoreProjectsWithinProjects&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;projectManager.any.ignoredFolders&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;out&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;typings&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;__tests__&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &quot;projectManager.git.baseFolders&quot;: [&quot;D:/Projects/&quot;],</span>
    <span class="token comment">// TODO Highlight 配置</span>
    <span class="token property">&quot;todohighlight.keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;WARNING: &quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// stylelint 设置</span>
    <span class="token property">&quot;stylelint.packageManager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// github copilot</span>
    <span class="token property">&quot;github.copilot.enable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;yaml&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;plaintext&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;markdown&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;liveSassCompile.settings.generateMap&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;remoteHub.commitDirectlyWarning&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tabnine.experimentalAutoImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// jsconfig.json</span>
<span class="token comment">// {</span>
<span class="token comment">//   &quot;compilerOptions&quot;: {</span>
<span class="token comment">//     &quot;module&quot;: &quot;commonjs&quot;,</span>
<span class="token comment">//     &quot;target&quot;: &quot;es6&quot;,</span>
<span class="token comment">//     &quot;baseUrl&quot;: &quot;.&quot;,</span>
<span class="token comment">//     &quot;paths&quot;: {</span>
<span class="token comment">//       &quot;@/*&quot;: [&quot;./src/*&quot;],</span>
<span class="token comment">//     }</span>
<span class="token comment">//   },</span>
<span class="token comment">//   &quot;exclude&quot;: [&quot;node_modules&quot;, &quot;dist&quot;],</span>
<span class="token comment">//   &quot;include&quot;: [&quot;src/**/*&quot;]</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[e];function l(c,r){return a(),s("div",null,p)}const i=n(o,[["render",l],["__file","VSCode Settings.html.vue"]]);export{i as default};
