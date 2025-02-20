import{_ as n,c as s,o as a,a as t}from"./app-7eMFvEA8.js";const p={},e=t(`<h1 id="面试官-解释下什么是事件代理-应用场景" tabindex="-1"><a class="header-anchor" href="#面试官-解释下什么是事件代理-应用场景" aria-hidden="true">#</a> 面试官：解释下什么是事件代理？应用场景？</h1><p><img src="https://static.vue-js.com/a33f0ab0-797e-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>事件代理，俗地来讲，就是把一个元素响应事件（<code>click</code>、<code>keydown</code>......）的函数委托到另一个元素</p><p>前面讲到，事件流的都会经过三个阶段： 捕获阶段 -&gt; 目标阶段 -&gt; 冒泡阶段，而事件委托就是在冒泡阶段完成</p><p>事件委托，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素，而不是目标元素</p><p>当事件响应到目标元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数</p><p>下面举个例子：</p><p>比如一个宿舍的同学同时快递到了，一种笨方法就是他们一个个去领取</p><p>较优方法就是把这件事情委托给宿舍长，让一个人出去拿好所有快递，然后再根据收件人一一分发给每个同学</p><p>在这里，取快递就是一个事件，每个同学指的是需要响应事件的 <code>DOM </code>元素，而出去统一领取快递的宿舍长就是代理的元素</p><p>所以真正绑定事件的是这个元素，按照收件人分发快递的过程就是在事件执行中，需要判断当前响应的事件应该匹配到被代理元素中的哪一个或者哪几个</p><h2 id="二、应用场景" tabindex="-1"><a class="header-anchor" href="#二、应用场景" aria-hidden="true">#</a> 二、应用场景</h2><p>如果我们有一个列表，列表之中有大量的列表项，我们需要在点击列表项的时候响应一个事件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>ul id<span class="token operator">=</span><span class="token string">&quot;list&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>item <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>item <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>item <span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
  <span class="token operator">...</span><span class="token operator">...</span>
  <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>item n<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果给每个列表项一一都绑定一个函数，那对于内存消耗是非常大的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取目标元素</span>
<span class="token keyword">const</span> lis <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// 循环遍历绑定事件</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lis<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    lis<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候就可以事件委托，把点击事件绑定在父级元素<code>ul</code>上面，然后执行事件的时候再去匹配目标元素</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 给父层元素绑定事件</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 兼容性处理</span>
    <span class="token keyword">var</span> event <span class="token operator">=</span> e <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
    <span class="token keyword">var</span> target <span class="token operator">=</span> event<span class="token punctuation">.</span>target <span class="token operator">||</span> event<span class="token punctuation">.</span>srcElement<span class="token punctuation">;</span>
    <span class="token comment">// 判断是否匹配目标元素</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>nodeName<span class="token punctuation">.</span>toLocaleLowerCase <span class="token operator">===</span> <span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;the content is: &#39;</span><span class="token punctuation">,</span> target<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一种场景是上述列表项并不多，我们给每个列表项都绑定了事件</p><p>但是如果用户能够随时动态的增加或者去除列表项元素，那么在每一次改变的时候都需要重新给新增的元素绑定事件，给即将删去的元素解绑事件</p><p>如果用了事件委托就没有这种麻烦了，因为事件是绑定在父层的，和目标元素的增减是没有关系的，执行到目标元素是在真正响应执行事件函数的过程中去匹配的</p><p>举个例子：</p><p>下面<code>html</code>结构中，点击<code>input</code>可以动态添加元素</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>添加<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ul1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>item 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>item 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用事件委托</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> oBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> oUl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;ul1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

<span class="token comment">//事件委托，添加的子元素也有事件</span>
oUl<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ev <span class="token operator">=</span> ev <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>
    <span class="token keyword">const</span> target <span class="token operator">=</span> ev<span class="token punctuation">.</span>target <span class="token operator">||</span> ev<span class="token punctuation">.</span>srcElement<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>nodeName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;the content is: &#39;</span><span class="token punctuation">,</span> target<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//添加新节点</span>
oBtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    num<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> oLi <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    oLi<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    oUl<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>oLi<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，使用事件委托，在动态绑定事件的情况下是可以减少很多重复工作的</p><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h2><p>适合事件委托的事件有：<code>click</code>，<code>mousedown</code>，<code>mouseup</code>，<code>keydown</code>，<code>keyup</code>，<code>keypress</code></p><p>从上面应用场景中，我们就可以看到使用事件委托存在两大优点：</p><ul><li>减少整个页面所需的内存，提升整体性能</li><li>动态绑定，减少重复工作</li></ul><p>但是使用事件委托也是存在局限性：</p><ul><li><p><code>focus</code>、<code>blur </code>这些事件没有事件冒泡机制，所以无法进行委托绑定事件</p></li><li><p><code>mousemove</code>、<code>mouseout </code>这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的</p></li></ul><p>如果把所有事件都用事件代理，可能会出现事件误判，即本不该被触发的事件被绑定上了事件</p>`,35),o=[e];function c(l,i){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","event_agent.html.vue"]]);export{k as default};
