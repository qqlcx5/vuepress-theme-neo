import{_ as o,r as c,c as r,o as a,a as n,b as e,d,e as l}from"./app-7eMFvEA8.js";const i={},s=n('<h1 id="面试官-请描述下你对vue生命周期的理解-在created和mounted这两个生命周期中请求数据有什么区别呢" tabindex="-1"><a class="header-anchor" href="#面试官-请描述下你对vue生命周期的理解-在created和mounted这两个生命周期中请求数据有什么区别呢" aria-hidden="true">#</a> 面试官：请描述下你对vue生命周期的理解？在created和mounted这两个生命周期中请求数据有什么区别呢？</h1><p><img src="https://static.vue-js.com/3a119e10-3aca-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、生命周期是什么" tabindex="-1"><a class="header-anchor" href="#一、生命周期是什么" aria-hidden="true">#</a> 一、生命周期是什么</h2><p>生命周期<code>（Life Cycle）</code>的概念应用很广泛，特别是在政治、经济、环境、技术、社会等诸多领域经常出现，其基本涵义可以通俗地理解为“从摇篮到坟墓”<code>（Cradle-to-Grave）</code>的整个过程在<code>Vue</code>中实例从创建到销毁的过程就是生命周期，即指从创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程我们可以把组件比喻成工厂里面的一条流水线，每个工人（生命周期）站在各自的岗位，当任务流转到工人身边的时候，工人就开始工作PS：在<code>Vue</code>生命周期钩子会自动绑定 <code>this</code> 上下文到实例中，因此你可以访问数据，对 <code>property</code> 和方法进行运算这意味着<strong>你不能使用箭头函数来定义一个生命周期方法</strong> (例如 <code>created: () =&gt; this.fetchTodos()</code>)</p><h2 id="二、生命周期有哪些" tabindex="-1"><a class="header-anchor" href="#二、生命周期有哪些" aria-hidden="true">#</a> 二、生命周期有哪些</h2><p>Vue生命周期总共可以分为8个阶段：创建前后, 载入前后,更新前后,销毁前销毁后，以及一些特殊场景的生命周期</p><table><thead><tr><th style="text-align:left;">生命周期</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">beforeCreate</td><td style="text-align:left;">组件实例被创建之初</td></tr><tr><td style="text-align:left;">created</td><td style="text-align:left;">组件实例已经完全创建</td></tr><tr><td style="text-align:left;">beforeMount</td><td style="text-align:left;">组件挂载之前</td></tr><tr><td style="text-align:left;">mounted</td><td style="text-align:left;">组件挂载到实例上去之后</td></tr><tr><td style="text-align:left;">beforeUpdate</td><td style="text-align:left;">组件数据发生变化，更新之前</td></tr><tr><td style="text-align:left;">updated</td><td style="text-align:left;">组件数据更新之后</td></tr><tr><td style="text-align:left;">beforeDestroy</td><td style="text-align:left;">组件实例销毁之前</td></tr><tr><td style="text-align:left;">destroyed</td><td style="text-align:left;">组件实例销毁之后</td></tr><tr><td style="text-align:left;">activated</td><td style="text-align:left;">keep-alive 缓存的组件激活时</td></tr><tr><td style="text-align:left;">deactivated</td><td style="text-align:left;">keep-alive 缓存的组件停用时调用</td></tr><tr><td style="text-align:left;">errorCaptured</td><td style="text-align:left;">捕获一个来自子孙组件的错误时被调用</td></tr></tbody></table><h2 id="三、生命周期整体流程" tabindex="-1"><a class="header-anchor" href="#三、生命周期整体流程" aria-hidden="true">#</a> 三、生命周期整体流程</h2><p><code>Vue</code>生命周期流程图</p><p><img src="https://static.vue-js.com/44114780-3aca-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="具体分析" tabindex="-1"><a class="header-anchor" href="#具体分析" aria-hidden="true">#</a> 具体分析</h3><p><strong>beforeCreate -&gt; created</strong></p><ul><li>初始化<code>vue</code>实例，进行数据观测</li></ul><p><strong>created</strong></p><ul><li>完成数据观测，属性与方法的运算，<code>watch</code>、<code>event</code>事件回调的配置</li><li>可调用<code>methods</code>中的方法，访问和修改data数据触发响应式渲染<code>dom</code>，可通过<code>computed</code>和<code>watch</code>完成数据计算</li><li>此时<code>vm.$el</code> 并没有被创建</li></ul><p><strong>created -&gt; beforeMount</strong></p><ul><li>判断是否存在<code>el</code>选项，若不存在则停止编译，直到调用<code>vm.$mount(el)</code>才会继续编译</li><li>优先级：<code>render</code> &gt; <code>template</code> &gt; <code>outerHTML</code></li><li><code>vm.el</code>获取到的是挂载<code>DOM</code>的</li></ul><p><strong>beforeMount</strong></p><ul><li>在此阶段可获取到<code>vm.el</code></li><li>此阶段<code>vm.el</code>虽已完成DOM初始化，但并未挂载在<code>el</code>选项上</li></ul><p><strong>beforeMount -&gt; mounted</strong></p><ul><li>此阶段<code>vm.el</code>完成挂载，<code>vm.$el</code>生成的<code>DOM</code>替换了<code>el</code>选项所对应的<code>DOM</code></li></ul><p><strong>mounted</strong></p><ul><li><code>vm.el</code>已完成<code>DOM</code>的挂载与渲染，此刻打印<code>vm.$el</code>，发现之前的挂载点及内容已被替换成新的DOM</li></ul><p><strong>beforeUpdate</strong></p><ul><li>更新的数据必须是被渲染在模板上的（<code>el</code>、<code>template</code>、<code>render</code>之一）</li><li>此时<code>view</code>层还未更新</li><li>若在<code>beforeUpdate</code>中再次修改数据，不会再次触发更新方法</li></ul><p><strong>updated</strong></p><ul><li>完成<code>view</code>层的更新</li><li>若在<code>updated</code>中再次修改数据，会再次触发更新方法（<code>beforeUpdate</code>、<code>updated</code>）</li></ul><p><strong>beforeDestroy</strong></p><ul><li>实例被销毁前调用，此时实例属性与方法仍可访问</li></ul><p><strong>destroyed</strong></p><ul><li>完全销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器</li><li>并不能清除DOM，仅仅销毁实例</li></ul><p><strong>使用场景分析</strong></p><table><thead><tr><th style="text-align:left;">生命周期</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">beforeCreate</td><td style="text-align:left;">执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务</td></tr><tr><td style="text-align:left;">created</td><td style="text-align:left;">组件初始化完毕，各种数据可以使用，常用于异步数据获取</td></tr><tr><td style="text-align:left;">beforeMount</td><td style="text-align:left;">未执行渲染、更新，dom未创建</td></tr><tr><td style="text-align:left;">mounted</td><td style="text-align:left;">初始化结束，dom已创建，可用于获取访问数据和dom元素</td></tr><tr><td style="text-align:left;">beforeUpdate</td><td style="text-align:left;">更新前，可用于获取更新前各种状态</td></tr><tr><td style="text-align:left;">updated</td><td style="text-align:left;">更新后，所有状态已是最新</td></tr><tr><td style="text-align:left;">beforeDestroy</td><td style="text-align:left;">销毁前，可用于一些定时器或订阅的取消</td></tr><tr><td style="text-align:left;">destroyed</td><td style="text-align:left;">组件已销毁，作用同上</td></tr></tbody></table><h2 id="四、题外话-数据请求在created和mouted的区别" tabindex="-1"><a class="header-anchor" href="#四、题外话-数据请求在created和mouted的区别" aria-hidden="true">#</a> 四、题外话：数据请求在created和mouted的区别</h2><p><code>created</code>是在组件实例一旦创建完成的时候立刻调用，这时候页面<code>dom</code>节点并未生成；<code>mounted</code>是在页面<code>dom</code>节点渲染完毕之后就立刻执行的。触发时机上<code>created</code>是比<code>mounted</code>要更早的，两者的相同点：都能拿到实例对象的属性和方法。 讨论这个问题本质就是触发的时机，放在<code>mounted</code>中的请求有可能导致页面闪动（因为此时页面<code>dom</code>结构已经生成），但如果在页面加载前完成请求，则不会出现此情况。建议对页面内容的改动放在<code>created</code>生命周期当中。</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>',36),f={href:"https://juejin.cn/post/6844903811094413320",target:"_blank",rel:"noopener noreferrer"},h={href:"https://baike.baidu.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"http://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"面试官VUE系列总进度：4／33",-1),u={href:"http://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484101&idx=1&sn=83b0983f0fca7d7c556e4cb0bff8c9b8&chksm=fc10c093cb674985ef3bd2966f66fc28c5eb70b0037e4be1af4bf54fb6fa9571985abd31d52f&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},b={href:"http://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484119&idx=1&sn=d171b28a00d42549d279498944a98519&chksm=fc10c081cb6749976814aaeda6a6433db418223cec57edda7e15b9e5a0ca69ad549655639c61&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},x={href:"http://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484167&idx=1&sn=7b00b4333ab2722f25f12586b70667ca&chksm=fc10c151cb6748476008dab2f4e6c6264f5d19678305955c85cec1b619e56e8f7457b7357fb9&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"};function m(y,_){const t=c("ExternalLinkIcon");return a(),r("div",null,[s,e("ul",null,[e("li",null,[e("a",f,[d("https://juejin.cn/post/6844903811094413320"),l(t)])]),e("li",null,[e("a",h,[d("https://baike.baidu.com/"),l(t)])]),e("li",null,[e("a",g,[d("http://cn.vuejs.org/"),l(t)])])]),p,e("p",null,[e("a",u,[d("面试官：说说你对vue的理解?"),l(t)])]),e("p",null,[e("a",b,[d("面试官：说说你对SPA（单页应用）的理解?"),l(t)])]),e("p",null,[e("a",x,[d("面试官：说说你对双向绑定的理解?"),l(t)])])])}const k=o(i,[["render",m],["__file","lifecycle.html.vue"]]);export{k as default};
