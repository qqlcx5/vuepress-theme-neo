import{_ as n,r,c as o,o as l,a as i,b as e,d,e as c}from"./app-7eMFvEA8.js";const t={},s=i(`<h1 id="frontmatter-目录配置" tabindex="-1"><a class="header-anchor" href="#frontmatter-目录配置" aria-hidden="true">#</a> Frontmatter 目录配置</h1><p>假设这是你的 Markdown 文件所处的目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>doc
├─ README.md
├─ foo/
│   ├─ README.md
│   ├─ one.md
│   └─ two.md
└─ bar/
│    ├─ README.md
│    ├─ three.md
│    └─ four.md
└─ multi
  ├─ README.md
  ├─ AAA/
  │   ├─ README.md
  │   ├─ one.md
  │   └─ two.md
  └─ BBB/
      ├─ README.md
      ├─ three.md
      └─ four.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),u=e("code",null,"doc/README.md",-1),h={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"},m=i('<h2 id="单级目录配置-doc-foo" tabindex="-1"><a class="header-anchor" href="#单级目录配置-doc-foo" aria-hidden="true">#</a> 单级目录配置 <code>doc/foo/</code></h2><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>类型：<code>string</code></li></ul><p>定义侧边栏标题，未定义则取当前文件夹名。</p><h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h3><ul><li>类型：<code>string</code></li></ul><p>定义侧边栏的图标。</p><h3 id="iconsize" tabindex="-1"><a class="header-anchor" href="#iconsize" aria-hidden="true">#</a> iconSize</h3><ul><li>类型：<code>number</code></li></ul><p>定义侧边栏的图标大小。</p><h3 id="catalogue" tabindex="-1"><a class="header-anchor" href="#catalogue" aria-hidden="true">#</a> catalogue</h3><ul><li>类型：<code>boolean</code></li><li>默认：false</li></ul><p>开启目录页，枚举<code>doc/foo/</code>的所有md页面。通常是在<code>doc/xxx</code>目录中下配置才会生效。</p><h3 id="collapsible" tabindex="-1"><a class="header-anchor" href="#collapsible" aria-hidden="true">#</a> collapsible</h3><ul><li>类型：<code>boolean</code></li><li>默认：true</li></ul><p>是否在侧边栏中开启目录展开和收缩。</p><h2 id="多级目录配置-doc-multi" tabindex="-1"><a class="header-anchor" href="#多级目录配置-doc-multi" aria-hidden="true">#</a> 多级目录配置 <code>doc/multi/</code></h2><p>以上配置在多级目录也一样适用。</p><h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> order</h3><ul><li>类型：<code>number</code></li><li>默认：<code>null</code></li></ul><p>子目录在侧边栏显示的顺序，从小到大。</p><p>例如 <code>AAA/</code>和 <code>BBB/</code>目录下<code>README.md</code>中<code>order</code>定义 <code>2 1</code>，那么<code>BBB/</code>会在侧边栏先展示。</p><p>默认情况下，侧边栏会按照文件名的标题文字按照当前语言排序，你可以通过 order 来控制它们的排序方式， 当你设置为正数时，它们会出现在分组最前方，越小的越靠前，也可以是为负数时，会出现在分组最前方:</p><ul><li>目录页面 -&gt; order: 1</li><li>目录页面 -&gt; order: 2</li><li>目录页面 -&gt; order: 3</li></ul><p>含有 order 的页面在此处会根据 order 大小排序.</p><p>不含有 order 选项的目录在order后面然后按照文件名的标题文字排序。</p>',26);function v(b,p){const a=r("ExternalLinkIcon");return l(),o("div",null,[s,e("p",null,[u,d(" 关于首页配置 可以 "),e("a",h,[d("默认主题 > Frontmatter 参考"),c(a)])]),m])}const _=n(t,[["render",v],["__file","catalogue.html.vue"]]);export{_ as default};
