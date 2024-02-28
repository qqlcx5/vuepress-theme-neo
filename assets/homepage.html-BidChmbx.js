import{_ as n,o as s,c as a,a as e}from"./app-DK9aT6cZ.js";const p={},t=e(`<h1 id="主题首页配置" tabindex="-1"><a class="header-anchor" href="#主题首页配置" aria-hidden="true">#</a> 主题首页配置</h1><h2 id="首页大图" tabindex="-1"><a class="header-anchor" href="#首页大图" aria-hidden="true">#</a> 首页大图</h2><h3 id="homeheaderinfo" tabindex="-1"><a class="header-anchor" href="#homeheaderinfo" aria-hidden="true">#</a> homeHeaderInfo</h3><ul><li>类型: <code>object</code></li><li>默认值: <code>none</code></li></ul><p>首页内容信息。</p><h3 id="homeheaderimages" tabindex="-1"><a class="header-anchor" href="#homeheaderimages" aria-hidden="true">#</a> homeHeaderImages</h3><ul><li>类型: <code>array</code></li><li>默认值: <code>[]</code></li></ul><p>首页图片配置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">neoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">homeHeaderInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vuepress-theme-neo&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&#39;https://feyoudao.oss-cn-hongkong.aliyuncs.com/site/star_field.png&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;🚀一款极简风格VuePress2.x 主题✨&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">homeHeaderImages</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 图 1</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/img/home-bg/1.jpg&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">mask</span><span class="token operator">:</span> <span class="token string">&#39;rgba(40, 57, 101, .4)&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 图 2</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/img/home-bg/2.jpg&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">mask</span><span class="token operator">:</span> <span class="token string">&#39;rgb(251, 170, 152, .2)&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[t];function i(r,l){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","homepage.html.vue"]]);export{d as default};
