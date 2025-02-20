import{_ as i,r as t,c,o as l,b as n,a as o,d as s,e as a,w as r}from"./app-7eMFvEA8.js";const d={},u=n("h1",{id:"主题布局选项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#主题布局选项","aria-hidden":"true"},"#"),s(" 主题布局选项")],-1),v={id:"navbar-导航栏",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#navbar-导航栏","aria-hidden":"true"},"#",-1),k=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">NavbarItem</span>  <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 文字
     */</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> string

    <span class="token doc-comment comment">/**
     * 图标
     */</span>
    icon<span class="token operator">?</span><span class="token operator">:</span> string
    <span class="token doc-comment comment">/**
     * 图标大小
     */</span>
    iconSize<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> number
    <span class="token doc-comment comment">/**
     * 当前页面路由路径
     */</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span> string
    <span class="token doc-comment comment">/**
     * 该元素在当前路由路径是 /config/ 开头时激活支持正则表达式
     */</span>
    <span class="token literal-property property">activeMatch</span><span class="token operator">:</span> <span class="token string">&#39;^/config/&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b={id:"sidebar-侧边栏",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#sidebar-侧边栏","aria-hidden":"true"},"#",-1),g=o(`<p>比如，你的文档为下述的目录结构：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>doc
├─ <span class="token constant">README</span><span class="token punctuation">.</span>md
├─ foo<span class="token operator">/</span>
│   ├─ <span class="token constant">README</span><span class="token punctuation">.</span>md
│   ├─ one<span class="token punctuation">.</span>md
│   └─ two<span class="token punctuation">.</span>md
└─ bar<span class="token operator">/</span>
    ├─ <span class="token constant">README</span><span class="token punctuation">.</span>md
    ├─ three<span class="token punctuation">.</span>md
    └─ four<span class="token punctuation">.</span>md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想自动生成侧边栏菜单的数据，可以进行以下配置。或者在<code>[]</code>中手动配置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">neoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/bar/&#39;</span><span class="token operator">:</span> <span class="token string">&#39;structure&#39;</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token string-property property">&#39;/foo/&#39;</span><span class="token operator">:</span> <span class="token string">&#39;structure&#39;</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你将会得到以下生成侧边栏数据。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">neoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;one&quot;</span> <span class="token comment">/* /foo/one.html */</span><span class="token punctuation">,</span>
          <span class="token string">&quot;two&quot;</span> <span class="token comment">/* /foo/two.html */</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Bar&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;three&quot;</span> <span class="token comment">/* /bar/three.html */</span><span class="token punctuation">,</span>
          <span class="token string">&quot;four&quot;</span> <span class="token comment">/* /bar/four.html */</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),_=n("code",null,"README.md",-1),y=n("code",null,"ItemConfig",-1),f=n("code",null,"icon",-1);function x(j,q){const e=t("Badge"),p=t("RouterLink");return l(),c("div",null,[u,n("h2",v,[m,s(" navbar 导航栏 "),a(e,{text:"推荐",type:"warning"})]),k,n("h2",b,[h,s(" sidebar 侧边栏 "),a(e,{text:"推荐",type:"warning"})]),g,n("p",null,[s("其中 "),_,s(" 可以定义配置项 "),y,s(" 排序或者定义"),f,s("等。详细见"),a(p,{to:"/config/frontmatter/article.html"},{default:r(()=>[s("Frontmatter 配置")]),_:1})])])}const E=i(d,[["render",x],["__file","layout.html.vue"]]);export{E as default};
