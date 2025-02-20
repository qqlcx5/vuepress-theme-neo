import{_ as n,c as s,o as a,a as e}from"./app-7eMFvEA8.js";const t={},p=e(`<h1 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏" aria-hidden="true">#</a> 侧边栏</h1><p>在 <code>docs/.vuepress/config/sidebar.js</code> 中，你可以为每个页面指定侧边栏，或者禁用侧边栏。</p><p><code>README.md</code> <strong>通常用来定义和继承目录和文件<code>front matter</code>配置项</strong>，所以我会禁用它在侧边栏在展示。 如果展示在侧边栏中可以设置<code>index: true</code>，它总会在排序中成为第一项。</p><p><code>README.md</code> 特有的配置</p><ul><li><code>index</code> 是否在侧边栏展示，默认为 <code>false</code>，如果设置为 <code>true</code>，则不会在侧边栏展示。</li><li><code>catalogue</code> 根据侧边栏数据生成目录页，默认为 <code>false</code>。</li><li><code>collapsible</code> 是否可折叠 默认可折叠</li></ul><p><code>Frontmatter</code> 通用配置</p><ul><li><code>showSidebar</code> 是否在侧边栏展示，默认为 <code>true</code>，如果设置为 <code>false</code>，则不会在侧边栏展示。</li><li><code>icon</code> 侧边栏图标，子级会继承父级的图标。</li><li><code>spin</code> 侧边栏图标是否旋转。</li><li><code>iconSize</code> 侧边栏图标大小。</li><li><code>iconColor</code> 侧边栏图标颜色。</li></ul><h2 id="指定侧边栏" tabindex="-1"><a class="header-anchor" href="#指定侧边栏" aria-hidden="true">#</a> 指定侧边栏</h2><h3 id="假设的目录结构" tabindex="-1"><a class="header-anchor" href="#假设的目录结构" aria-hidden="true">#</a> 假设的目录结构</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docs<span class="token operator">/</span>
├── <span class="token constant">README</span><span class="token punctuation">.</span>md
├── guide<span class="token operator">/</span>
│   ├── <span class="token constant">README</span><span class="token punctuation">.</span>md
│   ├── getting<span class="token operator">-</span>started<span class="token punctuation">.</span>md
│   ├── advanced<span class="token operator">/</span>
│   │      └── <span class="token constant">README</span><span class="token punctuation">.</span>md
│   │      └── frontmatter<span class="token punctuation">.</span>md
│   ├── sidebar<span class="token punctuation">.</span>md
│   └── advanced<span class="token operator">-</span>usage<span class="token punctuation">.</span>md
└── api<span class="token operator">/</span>
    ├── <span class="token constant">README</span><span class="token punctuation">.</span>md
    └── reference<span class="token punctuation">.</span>md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>你可以在 <code>docs/.vuepress/config/sidebar.js</code> 来配置侧边栏。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/guide/&#39;</span><span class="token operator">:</span> <span class="token string">&#39;structure&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;/api/&#39;</span><span class="token operator">:</span> <span class="token string">&#39;structure&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成的侧边栏示例数据" tabindex="-1"><a class="header-anchor" href="#生成的侧边栏示例数据" aria-hidden="true">#</a> 生成的侧边栏示例数据</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/guide/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;advanced&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;frontmatter&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide/advanced/frontmatter.md&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;advanced-usage&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide/advanced-usage.md&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;getting-started&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide/getting-started.md&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;sidebar&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide/sidebar.md&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;/api/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;API&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;reference&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/api/reference.md&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排序规则" tabindex="-1"><a class="header-anchor" href="#排序规则" aria-hidden="true">#</a> 排序规则</h3><p>默认情况下，侧边栏会按照文件名的标题文字按照当前语言排序，你可以通过 <code>front matter</code> <code>order</code>配置选项来覆盖默认的排序。</p><p>含有正数order的项会被放在前面，不含order的项会按标题排序，含有负数order的项会被放在后面。</p><ul><li>含有正数 order 的页面在此处会根据 order 大小排序</li><li>页面 -&gt; order: 1</li><li>页面 -&gt; order: 2</li><li>页面 -&gt; order: 3</li><li>===================</li><li>不含有 order 选项的页面在此处会根据标题排序</li><li>不含有 order 选项的页面 -&gt; 标题: 1</li><li>不含有 order 选项的页面 -&gt; 标题: 2</li><li>不含有 order 选项的页面 -&gt; 标题: a</li><li>不含有 order 选项的页面 -&gt; 标题: z</li><li>===================</li><li>含有负数 order 的页面在此处会根据 order 大小排序</li><li>页面 -&gt; order: -3</li><li>页面 -&gt; order: -2</li><li>页面 -&gt; order: -1</li></ul><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3><p><code>structure</code> 我定义一个函数处理，生成的对象就是侧边栏的配置，这样可以更灵活的配置。不影响默认主题的配置。</p><p>如果有什么不明白的，或者想这个基础上魔改，可以看源码，或者微信联系我。</p>`,22),i=[p];function o(r,l){return a(),s("div",null,i)}const d=n(t,[["render",o],["__file","sidebar.html.vue"]]);export{d as default};
