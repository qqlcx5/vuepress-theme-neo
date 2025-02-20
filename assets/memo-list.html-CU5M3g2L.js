import{_ as n,r as t,c as s,o as l,a as i,b as e,d,e as r}from"./app-7eMFvEA8.js";const c={},v=i(`<h3 id="标题-atx-风格" tabindex="-1"><a class="header-anchor" href="#标题-atx-风格" aria-hidden="true">#</a> 标题 (atx 风格)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># h1
## h2
### h3
#### h4
##### h5
###### h6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标题-setext-风格" tabindex="-1"><a class="header-anchor" href="#标题-setext-风格" aria-hidden="true">#</a> 标题 (setext 风格)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Header 1
========
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Header 2
--------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="块引用" tabindex="-1"><a class="header-anchor" href="#块引用" aria-hidden="true">#</a> 块引用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; 这是一个
&gt; 块引用
&gt;
&gt; &gt; 嵌套
&gt; &gt; 块引用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* Item 1
* Item 2
    * item 3a
    * item 3b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- Item 1
- Item 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+ Item 1
+ Item 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者<strong>任务</strong>列表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- [ ] Checkbox off
- [x] Checkbox on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. Item 1
2. Item 2
    a. item 3a
    b. item 3b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[link](http://google.com)

[link][google]
[google]: http://google.com

&lt;http://google.com&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强调" tabindex="-1"><a class="header-anchor" href="#强调" aria-hidden="true">#</a> 强调</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*斜体*    _斜体_    **粗体**   __粗体__

\`内联代码\`  ~~删除~~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="水平线" tabindex="-1"><a class="header-anchor" href="#水平线" aria-hidden="true">#</a> 水平线</h3><h3 id="换行" tabindex="-1"><a class="header-anchor" href="#换行" aria-hidden="true">#</a> 换行</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在当前行的结尾加 2 个空格··
这行就会新起一行\\
反斜杠也可以换行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尾部添加两个空格，或者添加 <code>\\</code> 反斜杠</p><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
\`\`\`javascript
console.log(&quot;This is a block code&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
\`\`\`markdown
~~~css
.button { border: none; }
~~~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    4 空格缩进做一个代码块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="内联代码" tabindex="-1"><a class="header-anchor" href="#内联代码" aria-hidden="true">#</a> 内联代码</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`Inline code\` 周围有反引号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| 左栏     | 中间栏   | 右栏  |
| -------- | -------- | ----- |
| 单元格 1 | 居中     | $1600 |
| 单元格 2 | 单元格 3 | $12   |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单的风格</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>左栏     | 中间栏   | 右栏  
-------- | -------- | -----
单元格 1 | 居中     | $1600
单元格 2 | 单元格 3 | $12 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加 <code>:</code> 改变文字对齐方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>左栏     |  中间栏  |   右栏 
:------- | :------: | -----: 
左对齐   |   居中   | 右对齐
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),u={href:"https://tableconvert.com/",target:"_blank",rel:"noopener noreferrer"},m=i(`<h3 id="脚注-footnotes" tabindex="-1"><a class="header-anchor" href="#脚注-footnotes" aria-hidden="true">#</a> 脚注 (Footnotes)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这是一个简单的脚注[^1]。

一个脚注也可以有多行[^2]。

你也可以使用文字，更贴合你的写作风格[^note]。

[^1]：我的参考。
[^2]：每个新行都应以 2 个空格为前缀。
  这允许你有一个多行的脚注。
[^note]：
    推荐使用数字命名脚注，但文本更容易识别和链接。
    脚注使用了不同的语法，使用 4 个空格作为新行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>![图片名称](http://图片网址/images/logo.png)

![替代文字](url)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="带链接的图片" tabindex="-1"><a class="header-anchor" href="#带链接的图片" aria-hidden="true">#</a> 带链接的图片</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[![GitHub Logo](/images/logo.png)](https://github.com/)

[![替代文字](image_url)](link_url)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参考风格" tabindex="-1"><a class="header-anchor" href="#参考风格" aria-hidden="true">#</a> 参考风格</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>![替代文字][logo]

[logo]: /images/logo.png &quot;Logo Title&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反斜杠转义" tabindex="-1"><a class="header-anchor" href="#反斜杠转义" aria-hidden="true">#</a> 反斜杠转义</h3><table><thead><tr><th>字符</th><th>转义</th><th>描述</th></tr></thead><tbody><tr><td>\\</td><td>\\\\</td><td>backslash 反斜杠</td></tr><tr><td>\`</td><td>\\\`</td><td>backtick 反引号</td></tr><tr><td>*</td><td>\\*</td><td>asterisk 星号</td></tr><tr><td>_</td><td>\\_</td><td>underscore 下划线</td></tr><tr><td>{}</td><td>\\{}</td><td>curly braces 花括号</td></tr><tr><td>[]</td><td>\\[]</td><td>square brackets 方括号</td></tr><tr><td>()</td><td>\\()</td><td>parentheses 圆括号</td></tr><tr><td>#</td><td>\\#</td><td>hash mark 哈希标记</td></tr><tr><td>+</td><td>\\+</td><td>plus sign 加号</td></tr><tr><td>-</td><td>\\-</td><td>minus sign (hyphen) 减号(连字符)</td></tr><tr><td>.</td><td>\\.</td><td>dot 点</td></tr><tr><td>!</td><td>\\!</td><td>exclamation mark 感叹号</td></tr></tbody></table><h3 id="行内-html-元素" tabindex="-1"><a class="header-anchor" href="#行内-html-元素" aria-hidden="true">#</a> 行内 HTML 元素</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>目前只支持部分段内 HTML 元素效果，包括 &lt;kbd&gt;, &lt;b&gt;, &lt;i&gt;, &lt;em&gt;, &lt;sup&gt;, &lt;sub&gt;, &lt;br&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12);function o(b,h){const a=t("ExternalLinkIcon");return l(),s("div",null,[v,e("p",null,[d("Markdown 表格生成器："),e("a",u,[d("tableconvert.com"),r(a)])]),m])}const x=n(c,[["render",o],["__file","memo-list.html.vue"]]);export{x as default};
