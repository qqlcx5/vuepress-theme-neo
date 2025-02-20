import{_ as n,c as s,o as a,a as t}from"./app-7eMFvEA8.js";const p={},e=t(`<h1 id="vue-toast-组件开发" tabindex="-1"><a class="header-anchor" href="#vue-toast-组件开发" aria-hidden="true">#</a> Vue Toast 组件开发</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 这里就是我们刚刚创建的那个静态组件</span>
<span class="token keyword">import</span> toastComponent <span class="token keyword">from</span> <span class="token string">&#39;./Toast.vue&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 返回一个 扩展实例构造器, 关于 vue.extend 有不懂的同学,可以去查看以下官方文档 https://cn.vuejs.org/v2/api/#Vue-extend</span>
<span class="token keyword">const</span> ToastConstructor <span class="token operator">=</span> vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>toastComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 定义弹出组件的函数 接收2个参数, 要显示的文本 和 显示时间</span>
<span class="token keyword">function</span> <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> duration <span class="token operator">=</span> <span class="token number">2000</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 实例化一个 toast.vue</span>
  <span class="token keyword">const</span> toastDom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ToastConstructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> text<span class="token punctuation">,</span>
        <span class="token literal-property property">showWrap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showContent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 把 实例化的 toast.vue 添加到 body 里</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>toastDom<span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 提前 250ms 执行淡出动画(因为我们再css里面设置的隐藏动画持续是250ms)</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    toastDom<span class="token punctuation">.</span>showContent <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> duration <span class="token operator">-</span> <span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 过了 duration 时间后隐藏整个组件</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    toastDom<span class="token punctuation">.</span>showWrap <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 注册为全局组件的函数</span>
<span class="token keyword">function</span> <span class="token function">registryToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 将组件注册到 vue 的 原型链里去,</span>
  <span class="token comment">// 这样就可以在所有 vue 的实例里面使用 this.$toast()</span>
  vue<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$toast <span class="token operator">=</span> showToast<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> showToast<span class="token punctuation">,</span> registryToast <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showWrap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showContent ? &#39;fadein&#39; : &#39;fadeout&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.wrap</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fadein</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> animate_in 0.25s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fadeout</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> animate_out 0.25s<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> animate_in</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> animate_out</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","02.Vue Toast组件开发.html.vue"]]);export{k as default};
