import{_ as n,c as s,o as a,a as t}from"./app-7eMFvEA8.js";const e={},p=t(`<h1 id="面试官-说说你对单例模式的理解-如何实现" tabindex="-1"><a class="header-anchor" href="#面试官-说说你对单例模式的理解-如何实现" aria-hidden="true">#</a> 面试官：说说你对单例模式的理解？如何实现？</h1><p><img src="https://static.vue-js.com/7df7d830-3b2b-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>单例模式（Singleton Pattern）：创建型模式，提供了一种创建对象的最佳方式，这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建</p><p>在应用程序运行期间，单例模式只会在全局作用域下创建一次实例对象，让所有需要调用的地方都共享这一单例对象，如下图所示：</p><p><img src="https://static.vue-js.com/fa7898d0-3b2c-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>从定义上来看，全局变量好像就是单例模式，但是一般情况我们不认为全局变量是一个单例模式，原因是：</p><ul><li>全局命名污染</li><li>不易维护，容易被重写覆盖</li></ul><h2 id="二、实现" tabindex="-1"><a class="header-anchor" href="#二、实现" aria-hidden="true">#</a> 二、实现</h2><p>在<code>javascript</code>中，实现一个单例模式可以用一个变量来标志当前的类已经创建过对象，如果下次获取当前类的实例时，直接返回之前创建的对象即可，如下：</p><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>// 定义一个类
function Singleton(name) {
    this.name = name;
    this.instance = null;
}
// 原型扩展类的一个方法getName()
Singleton.prototype.getName = function() {
    console.log(this.name)
};
// 获取类的实例
Singleton.getInstance = function(name) {
    if(!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance
};

// 获取对象1
const a = Singleton.getInstance(&#39;a&#39;);
// 获取对象2
const b = Singleton.getInstance(&#39;b&#39;);
// 进行比较
console.log(a === b);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用闭包也能够实现，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Singleton</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 原型扩展类的一个方法getName()</span>
<span class="token class-name">Singleton</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 获取类的实例</span>
Singleton<span class="token punctuation">.</span>getInstance <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance
    <span class="token punctuation">}</span>        
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取对象1</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获取对象2</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 进行比较</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以将上述的方法稍作修改，变成构造函数的形式，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 单例构造函数</span>
<span class="token keyword">function</span> <span class="token function">CreateSingleton</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 获取实例的名字</span>
<span class="token class-name">CreateSingleton</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 单例对象</span>
<span class="token keyword">const</span> Singleton <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> instance<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateSingleton</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建实例对象1</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建实例对象2</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">===</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、使用场景" tabindex="-1"><a class="header-anchor" href="#三、使用场景" aria-hidden="true">#</a> 三、使用场景</h2><p>在前端中，很多情况都是用到单例模式，例如页面存在一个模态框的时候，只有用户点击的时候才会创建，而不是加载完成之后再创建弹窗和隐藏，并且保证弹窗全局只有一个</p><p>可以先创建一个通常的获取对象的方法，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getSingle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">fn</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> result<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> result <span class="token operator">||</span> <span class="token punctuation">(</span> result <span class="token operator">=</span> <span class="token function">fn</span> <span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建弹窗的代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">createLoginLayer</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span> <span class="token string">&#39;div&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;我是浮窗&#39;</span><span class="token punctuation">;</span>
  div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span> div <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> div<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 

<span class="token keyword">const</span> createSingleLoginLayer <span class="token operator">=</span> <span class="token function">getSingle</span><span class="token punctuation">(</span> createLoginLayer <span class="token punctuation">)</span><span class="token punctuation">;</span> 

document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span> <span class="token string">&#39;loginBtn&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> loginLayer <span class="token operator">=</span> <span class="token function">createSingleLoginLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  loginLayer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;block&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述这种实现称为惰性单例，意图解决需要时才创建类实例对象</p><p>并且<code>Vuex</code>、<code>redux</code>全局态管理库也应用单例模式的思想，如下图：</p><p><img src="https://static.vue-js.com/8be50f80-3b2b-11ec-a752-75723a64e8f5.png" alt=""></p><p>现在很多第三方库都是单例模式，多次引用只会使用同一个对象，如<code>jquery</code>、<code>lodash</code>、<code>moment</code>...</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://zh.wikipedia.org/zh-hans/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F</li><li>https://www.runoob.com/design-pattern/singleton-pattern.html</li><li>https://juejin.cn/post/6844903874210299912#heading-5</li></ul>`,27),c=[p];function o(i,l){return a(),s("div",null,c)}const d=n(e,[["render",o],["__file","Singleton Pattern.html.vue"]]);export{d as default};
