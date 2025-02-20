import{_ as n,c as s,o as a,a as e}from"./app-7eMFvEA8.js";const c={},o=e(`<h1 id="面试官-说说var、let、const之间的区别" tabindex="-1"><a class="header-anchor" href="#面试官-说说var、let、const之间的区别" aria-hidden="true">#</a> 面试官：说说var、let、const之间的区别</h1><p><img src="https://static.vue-js.com/d2aba2e0-50f7-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、var" tabindex="-1"><a class="header-anchor" href="#一、var" aria-hidden="true">#</a> 一、var</h2><p>在ES5中，顶层对象的属性和全局变量是等价的，用<code>var</code>声明的变量既是全局变量，也是顶层变量</p><p>注意：顶层对象，在浏览器环境指的是<code>window</code>对象，在 <code>Node</code> 指的是<code>global</code>对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>var</code>声明的变量存在变量提升的情况</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在编译阶段，编译器会将其变成以下执行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
a <span class="token operator">=</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>var</code>，我们能够对一个变量进行多次声明，后面声明的变量会覆盖前面的变量声明</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span> 
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">30</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在函数中使用使用<code>var</code>声明变量时候，该变量是局部的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">30</span>
<span class="token punctuation">}</span>
<span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 20 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而如果在函数内不使用<code>var</code>，该变量是全局的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   a <span class="token operator">=</span> <span class="token number">30</span>
<span class="token punctuation">}</span>
<span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 30 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、let" tabindex="-1"><a class="header-anchor" href="#二、let" aria-hidden="true">#</a> 二、let</h2><p><code>let</code>是<code>ES6</code>新增的命令，用来声明变量</p><p>用法类似于<code>var</code>，但是所声明的变量，只在<code>let</code>命令所在的代码块内有效</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// ReferenceError: a is not defined.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不存在变量提升</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 报错ReferenceError</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这表示在声明它之前，变量<code>a</code>是不存在的，这时如果用到它，就会抛出一个错误</p><p>只要块级作用域内存在<code>let</code>命令，这个区域就不再受外部影响</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span> <span class="token comment">// ReferenceError</span>
    <span class="token keyword">let</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>let</code>声明变量前，该变量都不可用，也就是大家常说的“暂时性死区”</p><p>最后，<code>let</code>不允许在相同作用域中重复声明</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">30</span>
<span class="token comment">// Uncaught SyntaxError: Identifier &#39;a&#39; has already been declared</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意的是相同作用域，下面这种情况是不会报错的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">30</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，我们不能在函数内部重新声明参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// Uncaught SyntaxError: Identifier &#39;arg&#39; has already been declared</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、const" tabindex="-1"><a class="header-anchor" href="#三、const" aria-hidden="true">#</a> 三、const</h2><p><code>const</code>声明一个只读的常量，一旦声明，常量的值就不能改变</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
a <span class="token operator">=</span> <span class="token number">3</span>
<span class="token comment">// TypeError: Assignment to constant variable.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着，<code>const</code>一旦声明变量，就必须立即初始化，不能留到以后赋值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a<span class="token punctuation">;</span>
<span class="token comment">// SyntaxError: Missing initializer in const declaration</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果之前用<code>var</code>或<code>let</code>声明过变量，再用<code>const</code>声明同样会报错</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">30</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">30</span>
<span class="token comment">// 都会报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>const</code>实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动</p><p>对于简单类型的数据，值就保存在变量指向的那个内存地址，因此等同于常量</p><p>对于复杂类型的数据，变量指向的内存地址，保存的只是一个指向实际数据的指针，<code>const</code>只能保证这个指针是固定的，并不能确保改变量的结构不变</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 为 foo 添加一个属性，可以成功</span>
foo<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>prop <span class="token comment">// 123</span>

<span class="token comment">// 将 foo 指向另一个对象，就会报错</span>
foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: &quot;foo&quot; is read-only</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其它情况，<code>const</code>与<code>let</code>一致</p><h2 id="四、区别" tabindex="-1"><a class="header-anchor" href="#四、区别" aria-hidden="true">#</a> 四、区别</h2><p><code>var</code>、<code>let</code>、<code>const</code>三者区别可以围绕下面五点展开：</p><ul><li>变量提升</li><li>暂时性死区</li><li>块级作用域</li><li>重复声明</li><li>修改声明的变量</li><li>使用</li></ul><h3 id="变量提升" tabindex="-1"><a class="header-anchor" href="#变量提升" aria-hidden="true">#</a> 变量提升</h3><p><code>var </code>声明的变量存在变量提升，即变量可以在声明之前调用，值为<code>undefined</code></p><p><code>let</code>和<code>const</code>不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// var</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment">// undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>

<span class="token comment">// let </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>  <span class="token comment">// Cannot access &#39;b&#39; before initialization</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span>

<span class="token comment">// const</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment">// Cannot access &#39;c&#39; before initialization</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="暂时性死区" tabindex="-1"><a class="header-anchor" href="#暂时性死区" aria-hidden="true">#</a> 暂时性死区</h3><p><code>var</code>不存在暂时性死区</p><p><code>let</code>和<code>const</code>存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// var</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment">// undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>

<span class="token comment">// let</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>  <span class="token comment">// Cannot access &#39;b&#39; before initialization</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span>

<span class="token comment">// const</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment">// Cannot access &#39;c&#39; before initialization</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="块级作用域" tabindex="-1"><a class="header-anchor" href="#块级作用域" aria-hidden="true">#</a> 块级作用域</h3><p><code>var</code>不存在块级作用域</p><p><code>let</code>和<code>const</code>存在块级作用域</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// var</span>
<span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment">// 20</span>

<span class="token comment">// let</span>
<span class="token punctuation">{</span>
    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>  <span class="token comment">// Uncaught ReferenceError: b is not defined</span>

<span class="token comment">// const</span>
<span class="token punctuation">{</span>
    <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment">// Uncaught ReferenceError: c is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重复声明" tabindex="-1"><a class="header-anchor" href="#重复声明" aria-hidden="true">#</a> 重复声明</h3><p><code>var</code>允许重复声明变量</p><p><code>let</code>和<code>const</code>在同一作用域不允许重复声明变量</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// var</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span> <span class="token comment">// 20</span>

<span class="token comment">// let</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">20</span> <span class="token comment">// Identifier &#39;b&#39; has already been declared</span>

<span class="token comment">// const</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">20</span> <span class="token comment">// Identifier &#39;c&#39; has already been declared</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改声明的变量" tabindex="-1"><a class="header-anchor" href="#修改声明的变量" aria-hidden="true">#</a> 修改声明的变量</h3><p><code>var</code>和<code>let</code>可以</p><p><code>const</code>声明一个只读的常量。一旦声明，常量的值就不能改变</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// var</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>
a <span class="token operator">=</span> <span class="token number">20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment">// 20</span>

<span class="token comment">//let</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span>
b <span class="token operator">=</span> <span class="token number">20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>  <span class="token comment">// 20</span>

<span class="token comment">// const</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">10</span>
c <span class="token operator">=</span> <span class="token number">20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// Uncaught TypeError: Assignment to constant variable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>能用<code>const</code>的情况尽量使用<code>const</code>，其他情况下大多数使用<code>let</code>，避免使用<code>var</code></p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://es6.ruanyifeng.com/</li></ul>`,71),p=[o];function t(l,i){return a(),s("div",null,p)}const r=n(c,[["render",t],["__file","var_let_const.html.vue"]]);export{r as default};
