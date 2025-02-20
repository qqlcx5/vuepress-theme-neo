import{_ as n,c as s,o as a,a as e}from"./app-7eMFvEA8.js";const c={},t=e(`<h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1><h2 id="安装和启动" tabindex="-1"><a class="header-anchor" href="#安装和启动" aria-hidden="true">#</a> 安装和启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载项目</span>
<span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> https://github.com/qqlcx5/vuepress-theme-neo.git

<span class="token comment"># 选择项目</span>
<span class="token builtin class-name">cd</span> vuepress-theme-neo

<span class="token comment"># 安装项目依赖</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token comment"># or yarn install</span>

<span class="token comment"># 运行</span>
<span class="token function">npm</span> run dev <span class="token comment"># or yarn dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接在这项目基础上进行更改岂不是更快。</p><div class="custom-container tip"><p class="custom-container-title">注意</p><p>Node.js 推荐版本 v16+ 你可以使用 corepack 来启用 pnpm。</p></div><h2 id="引用主题" tabindex="-1"><a class="header-anchor" href="#引用主题" aria-hidden="true">#</a> 引用主题</h2><p>::: tabs</p><p>@tab npm</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress-theme-neo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>@tab yarn</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-neo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p><p>请确保你使用的是最新版本的 VuePress（2.0.0-beta.60）和主题。</p><p>参考 VuePress 文档搭建目录结构。建议在 <code>package.json</code> 的 <code>dev</code> 和 <code>build script</code> 里添加 <code>--clean-cache</code>，即：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs --clean-cache&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs --clean-cache&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 <code>.vuepress/config.js</code> 或 <code>.vuepress/config.ts</code>（如果你在使用 TypeScript 的话）中指定主题：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
<span class="token keyword">import</span> neoTheme <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-neo&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 站点选项</span>
  <span class="token comment">// ...</span>

  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">neoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 主题选项</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),i=[t];function p(o,l){return a(),s("div",null,i)}const r=n(c,[["render",p],["__file","quick-start.html.vue"]]);export{r as default};
