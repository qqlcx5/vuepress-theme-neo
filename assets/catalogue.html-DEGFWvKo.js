import{_ as n,c as s,o as a,a as t}from"./app-7eMFvEA8.js";const c={},p=t(`<h1 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span>
├── <span class="token punctuation">.</span><span class="token function">github</span> <span class="token punctuation">(</span>可选，GitHub 配置文件<span class="token punctuation">)</span>
│   ├── <span class="token function">workflows</span> <span class="token punctuation">(</span>GitHub 工作流配置<span class="token punctuation">)</span>
│   │   └── doc<span class="token punctuation">.</span><span class="token function">yml</span> <span class="token punctuation">(</span>可选，自动部署文档的工作流<span class="token punctuation">)</span>
├── <span class="token function">docs</span> <span class="token punctuation">(</span>文档根目录<span class="token punctuation">)</span>
│   ├── <span class="token punctuation">.</span>vuepress
│   │  │
│   │  ├── <span class="token function">dist</span> <span class="token punctuation">(</span>默认的<span class="token punctuation">)</span> → 构建输出目录
│   │  ├── <span class="token keyword">public</span> <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span> → 静态资源目录
│   │  ├── <span class="token function">styles</span> <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span> → 用于存放样式相关的文件
│   │  ├── config<span class="token punctuation">.</span><span class="token punctuation">{</span>js<span class="token punctuation">,</span>ts<span class="token punctuation">}</span> <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span> → 配置文件的入口文件
│   │  └── client<span class="token punctuation">.</span><span class="token punctuation">{</span>js<span class="token punctuation">,</span>ts<span class="token punctuation">}</span> <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span> → 客户端文件
│   ├── @<span class="token function">pages</span> <span class="token punctuation">(</span>可选，自动生成的文件夹，存放分类页、标签页、归档页<span class="token punctuation">)</span>
│   ├── <span class="token operator">...</span> 存放项目文档目录
│   └── <span class="token constant">README</span><span class="token punctuation">.</span><span class="token function">md</span> <span class="token punctuation">(</span>首页<span class="token punctuation">)</span>
│   │
├── deploy<span class="token punctuation">.</span><span class="token function">sh</span> <span class="token punctuation">(</span>可选，部署命令脚本<span class="token punctuation">)</span>
│
└── <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>docs</code> 文档根目录 文件夹名称请不要修改</p></li><li><p><code>docs/.vuepress</code> 用于存放全局的配置、样式、静态资源等</p></li><li><p><code>docs/@pages</code> 此文件夹是自动生成的，存放分类页、标签页、归档页和专题页对应的.md文件</p></li><li><p><code>docs/README.md</code> 首页</p></li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请注意 VuePress 对目录大小写敏感。</p></div>`,4),e=[p];function o(i,u){return a(),s("div",null,e)}const d=n(c,[["render",o],["__file","catalogue.html.vue"]]);export{d as default};
