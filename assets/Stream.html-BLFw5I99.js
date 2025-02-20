import{_ as n,c as s,o as a,a as e}from"./app-7eMFvEA8.js";const t={},p=e(`<h1 id="面试官-说说对-node-中的-stream-的理解-应用场景" tabindex="-1"><a class="header-anchor" href="#面试官-说说对-node-中的-stream-的理解-应用场景" aria-hidden="true">#</a> 面试官：说说对 Node 中的 Stream 的理解？应用场景？</h1><p><img src="https://static.vue-js.com/a5df3c60-c76f-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>流（Stream），是一个数据传输手段，是端到端信息交换的一种方式，而且是有顺序的,是逐块读取数据、处理内容，用于顺序读取输入或写入输出</p><p><code>Node.js</code>中很多对象都实现了流，总之它是会冒数据（以 <code>Buffer</code> 为单位）</p><p>它的独特之处在于，它不像传统的程序那样一次将一个文件读入内存，而是逐块读取数据、处理其内容，而不是将其全部保存在内存中</p><p>流可以分成三部分：<code>source</code>、<code>dest</code>、<code>pipe</code></p><p>在<code>source</code>和<code>dest</code>之间有一个连接的管道<code>pipe</code>,它的基本语法是<code>source.pipe(dest)</code>，<code>source</code>和<code>dest</code>就是通过pipe连接，让数据从<code>source</code>流向了<code>dest</code>，如下图所示：</p><p><img src="https://static.vue-js.com/aec05670-c76f-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="二、种类" tabindex="-1"><a class="header-anchor" href="#二、种类" aria-hidden="true">#</a> 二、种类</h2><p>在<code>NodeJS</code>，几乎所有的地方都使用到了流的概念，分成四个种类：</p><ul><li><p>可写流：可写入数据的流。例如 fs.createWriteStream() 可以使用流将数据写入文件</p></li><li><p>可读流： 可读取数据的流。例如fs.createReadStream() 可以从文件读取内容</p></li><li><p>双工流： 既可读又可写的流。例如 net.Socket</p></li><li><p>转换流： 可以在数据写入和读取时修改或转换数据的流。例如，在文件压缩操作中，可以向文件写入压缩数据，并从文件中读取解压数据</p></li></ul><p>在<code>NodeJS</code>中<code>HTTP</code>服务器模块中，<code>request</code> 是可读流，<code>response</code> 是可写流。还有<code>fs</code> 模块，能同时处理可读和可写文件流</p><p>可读流和可写流都是单向的，比较容易理解，而另外两个是双向的</p><h3 id="双工流" tabindex="-1"><a class="header-anchor" href="#双工流" aria-hidden="true">#</a> 双工流</h3><p>之前了解过<code>websocket</code>通信，是一个全双工通信，发送方和接受方都是各自独立的方法，发送和接收都没有任何关系</p><p>如下图所示：</p><p><img src="https://static.vue-js.com/b7ac6d00-c76f-11eb-ab90-d9ae814b240d.png" alt=""></p><p>基本代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Duplex <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;stream&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myDuplex <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Duplex</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">read</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">write</span><span class="token punctuation">(</span><span class="token parameter">chunk<span class="token punctuation">,</span> encoding<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双工流-1" tabindex="-1"><a class="header-anchor" href="#双工流-1" aria-hidden="true">#</a> 双工流</h3><p>双工流的演示图如下所示：</p><p><img src="https://static.vue-js.com/c02883b0-c76f-11eb-ab90-d9ae814b240d.png" alt=""></p><p>除了上述压缩包的例子，还比如一个 <code>babel</code>，把<code>es6</code>转换为，我们在左边写入 <code>es6</code>，从右边读取 <code>es5</code></p><p>基本代码如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Transform <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;stream&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myTransform <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transform</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">transform</span><span class="token punctuation">(</span><span class="token parameter">chunk<span class="token punctuation">,</span> encoding<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景" aria-hidden="true">#</a> 三、应用场景</h2><p><code>stream</code>的应用场景主要就是处理<code>IO</code>操作，而<code>http</code>请求和文件操作都属于<code>IO</code>操作</p><p>试想一下，如果一次<code>IO</code>操作过大，硬件的开销就过大，而将此次大的<code>IO</code>操作进行分段操作，让数据像水管一样流动，直到流动完成</p><p>常见的场景有：</p><ul><li>get请求返回文件给客户端</li><li>文件操作</li><li>一些打包工具的底层操作</li></ul><h3 id="get请求返回文件给客户端" tabindex="-1"><a class="header-anchor" href="#get请求返回文件给客户端" aria-hidden="true">#</a> get请求返回文件给客户端</h3><p>使用<code>stream</code>流返回文件，<code>res</code>也是一个<code>stream</code>对象，通过<code>pipe</code>管道将文件数据返回</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> method <span class="token operator">=</span> req<span class="token punctuation">.</span>method<span class="token punctuation">;</span> <span class="token comment">// 获取请求方法</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>method <span class="token operator">===</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// get 请求</span>
        <span class="token keyword">const</span> fileName <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;data.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> stream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        stream<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将 res 作为 stream 的 dest</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h3><p>创建一个可读数据流<code>readStream</code>，一个可写数据流<code>writeStream</code>，通过<code>pipe</code>管道把数据流转过去</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 两个文件名</span>
<span class="token keyword">const</span> fileName1 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;data.txt&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fileName2 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;data-bak.txt&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 读取文件的 stream 对象</span>
<span class="token keyword">const</span> readStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>fileName1<span class="token punctuation">)</span>
<span class="token comment">// 写入文件的 stream 对象</span>
<span class="token keyword">const</span> writeStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span>fileName2<span class="token punctuation">)</span>
<span class="token comment">// 通过 pipe执行拷贝，数据流转</span>
readStream<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>writeStream<span class="token punctuation">)</span>
<span class="token comment">// 数据读取完成监听，即拷贝完成</span>
readStream<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;拷贝完成&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一些打包工具的底层操作" tabindex="-1"><a class="header-anchor" href="#一些打包工具的底层操作" aria-hidden="true">#</a> 一些打包工具的底层操作</h3><p>目前一些比较火的前端打包构建工具，都是通过<code>node.js</code>编写的，打包和构建的过程肯定是文件频繁操作的过程，离不来<code>stream</code>，如<code>gulp</code></p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://xie.infoq.cn/article/1a9695020828460eb3c4ff1fa</li><li>https://juejin.cn/post/6844903891083984910</li></ul>`,41),c=[p];function o(i,l){return a(),s("div",null,c)}const d=n(t,[["render",o],["__file","Stream.html.vue"]]);export{d as default};
