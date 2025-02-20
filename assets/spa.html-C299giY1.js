import{_ as n,c as s,o as a,a as t}from"./app-7eMFvEA8.js";const p={},e=t(`<h1 id="面试官-你对spa单页面的理解-它的优缺点分别是什么-如何实现spa应用呢" tabindex="-1"><a class="header-anchor" href="#面试官-你对spa单页面的理解-它的优缺点分别是什么-如何实现spa应用呢" aria-hidden="true">#</a> 面试官：你对SPA单页面的理解，它的优缺点分别是什么？如何实现SPA应用呢</h1><p><img src="https://static.vue-js.com/cf6aa320-3ac6-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、什么是spa" tabindex="-1"><a class="header-anchor" href="#一、什么是spa" aria-hidden="true">#</a> 一、什么是SPA</h2><p>SPA（single-page application），翻译过来就是单页应用<code>SPA</code>是一种网络应用程序或网站的模型，它通过动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验在单页应用中，所有必要的代码（<code>HTML</code>、<code>JavaScript</code>和<code>CSS</code>）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面页面在任何时间点都不会重新加载，也不会将控制转移到其他页面举个例子来讲就是一个杯子，早上装的牛奶，中午装的是开水，晚上装的是茶，我们发现，变的始终是杯子里的内容，而杯子始终是那个杯子结构如下图</p><p><img src="https://static.vue-js.com/df14a5a0-3ac6-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>我们熟知的JS框架如<code>react</code>,<code>vue</code>,<code>angular</code>,<code>ember</code>都属于<code>SPA</code></p><h2 id="二、spa和mpa的区别" tabindex="-1"><a class="header-anchor" href="#二、spa和mpa的区别" aria-hidden="true">#</a> 二、SPA和MPA的区别</h2><p>上面大家已经对单页面有所了解了，下面来讲讲多页应用MPA（MultiPage-page application），翻译过来就是多页应用在<code>MPA</code>中，每个页面都是一个主页面，都是独立的当我们在访问另一个页面的时候，都需要重新加载<code>html</code>、<code>css</code>、<code>js</code>文件，公共文件则根据需求按需加载如下图</p><p><img src="https://static.vue-js.com/eeb13aa0-3ac6-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h4 id="单页应用与多页应用的区别" tabindex="-1"><a class="header-anchor" href="#单页应用与多页应用的区别" aria-hidden="true">#</a> 单页应用与多页应用的区别</h4><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">单页面应用（SPA）</th><th style="text-align:left;">多页面应用（MPA）</th></tr></thead><tbody><tr><td style="text-align:left;">组成</td><td style="text-align:left;">一个主页面和多个页面片段</td><td style="text-align:left;">多个主页面</td></tr><tr><td style="text-align:left;">刷新方式</td><td style="text-align:left;">局部刷新</td><td style="text-align:left;">整页刷新</td></tr><tr><td style="text-align:left;">url模式</td><td style="text-align:left;">哈希模式</td><td style="text-align:left;">历史模式</td></tr><tr><td style="text-align:left;">SEO搜索引擎优化</td><td style="text-align:left;">难实现，可使用SSR方式改善</td><td style="text-align:left;">容易实现</td></tr><tr><td style="text-align:left;">数据传递</td><td style="text-align:left;">容易</td><td style="text-align:left;">通过url、cookie、localStorage等传递</td></tr><tr><td style="text-align:left;">页面切换</td><td style="text-align:left;">速度快，用户体验良好</td><td style="text-align:left;">切换加载资源，速度慢，用户体验差</td></tr><tr><td style="text-align:left;">维护成本</td><td style="text-align:left;">相对容易</td><td style="text-align:left;">相对复杂</td></tr></tbody></table><h4 id="单页应用优缺点" tabindex="-1"><a class="header-anchor" href="#单页应用优缺点" aria-hidden="true">#</a> 单页应用优缺点</h4><p>优点：</p><ul><li>具有桌面应用的即时性、网站的可移植性和可访问性</li><li>用户体验好、快，内容的改变不需要重新加载整个页面</li><li>良好的前后端分离，分工更明确</li></ul><p>缺点：</p><ul><li>不利于搜索引擎的抓取</li><li>首次渲染速度相对较慢</li><li></li></ul><h2 id="三、实现一个spa" tabindex="-1"><a class="header-anchor" href="#三、实现一个spa" aria-hidden="true">#</a> 三、实现一个SPA</h2><h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h4><ol><li>监听地址栏中<code>hash</code>变化驱动界面变化</li><li>用<code>pushsate</code>记录浏览器的历史，驱动界面发送变化</li></ol><p><img src="https://static.vue-js.com/fc95bf60-3ac6-11eb-ab90-d9ae814b240d.png" alt=""></p><h4 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h4><h5 id="hash-模式" tabindex="-1"><a class="header-anchor" href="#hash-模式" aria-hidden="true">#</a> <code>hash</code> 模式</h5><p>核心通过监听<code>url</code>中的<code>hash</code>来进行路由跳转</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义 Router  </span>
<span class="token keyword">class</span> <span class="token class-name">Router</span> <span class="token punctuation">{</span>  
    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>routes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 存放路由path及callback  </span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>currentUrl <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>  
          
        <span class="token comment">// 监听路由change调用相对应的路由回调  </span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>refresh<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;hashchange&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>refresh<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
      
    <span class="token function">route</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span> <span class="token operator">=</span> callback<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
      
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
  
<span class="token comment">// 使用 router  </span>
window<span class="token punctuation">.</span>miniRouter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
miniRouter<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;page1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
miniRouter<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;/page2&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;page2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
  
miniRouter<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token comment">// page1  </span>
miniRouter<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/page2&#39;</span><span class="token punctuation">)</span> <span class="token comment">// page2  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="history模式" tabindex="-1"><a class="header-anchor" href="#history模式" aria-hidden="true">#</a> history模式</h5><p><code>history</code> 模式核心借用 <code>HTML5 history api</code>，<code>api</code> 提供了丰富的 <code>router</code> 相关属性先了解一个几个相关的api</p><ul><li><code>history.pushState</code> 浏览器历史纪录添加记录</li><li><code>history.replaceState</code>修改浏览器历史纪录中当前纪录</li><li><code>history.popState</code> 当 <code>history</code> 发生变化时触发</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义 Router  </span>
<span class="token keyword">class</span> <span class="token class-name">Router</span> <span class="token punctuation">{</span>  
    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>routes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">listerPopState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
    <span class="token punctuation">}</span>  
      
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        history<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
      
    <span class="token function">route</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span> <span class="token operator">=</span> callback<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
      
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>routes<span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
      
    <span class="token function">listerPopState</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;popstate&#39;</span> <span class="token punctuation">,</span> e <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
            <span class="token keyword">const</span> path <span class="token operator">=</span> e<span class="token punctuation">.</span>state <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>state<span class="token punctuation">.</span>path<span class="token punctuation">;</span>  
            <span class="token keyword">this</span><span class="token punctuation">.</span>routers<span class="token punctuation">[</span>path<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>routers<span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
        <span class="token punctuation">}</span><span class="token punctuation">)</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
  
<span class="token comment">// 使用 Router  </span>
  
window<span class="token punctuation">.</span>miniRouter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
miniRouter<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;page1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
miniRouter<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;/page2&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;page2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
  
<span class="token comment">// 跳转  </span>
miniRouter<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/page2&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// page2  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、题外话-如何给spa做seo" tabindex="-1"><a class="header-anchor" href="#四、题外话-如何给spa做seo" aria-hidden="true">#</a> 四、题外话：如何给SPA做SEO</h3><p>下面给出基于<code>Vue</code>的<code>SPA</code>如何实现<code>SEO</code>的三种方式</p><ol><li><strong>SSR服务端渲染</strong></li></ol><p>将组件或页面通过服务器生成html，再返回给浏览器，如<code>nuxt.js</code></p><ol start="2"><li><strong>静态化</strong></li></ol><p>目前主流的静态化主要有两种：（1）一种是通过程序将动态页面抓取并保存为静态页面，这样的页面的实际存在于服务器的硬盘中（2）另外一种是通过WEB服务器的 <code>URL Rewrite</code>的方式，它的原理是通过web服务器内部模块按一定规则将外部的URL请求转化为内部的文件地址，一句话来说就是把外部请求的静态地址转化为实际的动态页面地址，而静态页面实际是不存在的。这两种方法都达到了实现URL静态化的效果</p><ol start="3"><li><strong>使用<code>Phantomjs</code>针对爬虫处理</strong></li></ol><p>原理是通过<code>Nginx</code>配置，判断访问来源是否为爬虫，如果是则搜索引擎的爬虫请求会转发到一个<code>node server</code>，再通过<code>PhantomJS</code>来解析完整的<code>HTML</code>，返回给爬虫。下面是大致流程图</p><p><img src="https://static.vue-js.com/25be6630-3ac7-11eb-ab90-d9ae814b240d.png" alt=""></p><h3 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h3><ul><li>https://segmentfault.com/a/1190000019623624</li><li>https://juejin.cn/post/6844903512107663368</li><li>https://www.cnblogs.com/constantince/p/5586851.html</li></ul>`,39),o=[e];function c(l,i){return a(),s("div",null,o)}const d=n(p,[["render",c],["__file","spa.html.vue"]]);export{d as default};
