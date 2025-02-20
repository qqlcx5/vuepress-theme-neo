import{_ as n,c as s,o as a,a as t}from"./app-7eMFvEA8.js";const p={},e=t(`<h1 id="padend填充右侧字符" tabindex="-1"><a class="header-anchor" href="#padend填充右侧字符" aria-hidden="true">#</a> padEnd填充右侧字符</h1><p>如果string字符串长度小于 length 则在右侧填充字符。 如果超出length长度则截断超出的部分。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">padEnd</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> maskChar <span class="token operator">=</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong></p><ol><li><code>[str=&#39;&#39;]</code>: 要填充的字符串。</li><li><code>[n=0]</code>: 填充的长度。</li><li><code>[maskChar=&#39; &#39;]</code>: 填充字符。</li></ol><p><strong>返回</strong> 返回填充后的字符串。</p><p><strong>例子</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; &#39;abc   &#39;</span>
 
<span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; &#39;abc***&#39;</span>
 
<span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; &#39;abc&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>源码</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> padEnd <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> maskChar <span class="token operator">=</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">String</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> maskChar<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),c=[e];function o(i,l){return a(),s("div",null,c)}const r=n(p,[["render",o],["__file","padEnd填充右侧字符.html.vue"]]);export{r as default};
