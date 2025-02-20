import{_ as s,c as a,o as n,a as e}from"./app-7eMFvEA8.js";const t={},p=e(`<h1 id="面试官-介绍一下grid网格布局" tabindex="-1"><a class="header-anchor" href="#面试官-介绍一下grid网格布局" aria-hidden="true">#</a> 面试官：介绍一下grid网格布局</h1><p><img src="https://static.vue-js.com/4d73e3d0-9a94-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p><code>Grid</code> 布局即网格布局，是一个二维的布局方式，由纵横相交的两组网格线形成的框架性布局结构，能够同时处理行与列</p><p>擅长将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系</p><p><img src="https://static.vue-js.com/59680a40-9a94-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>这与之前讲到的<code>flex</code>一维布局不相同</p><p>设置<code>display:grid/inline-grid</code>的元素就是网格布局容器，这样就能出发浏览器渲染引擎的网格布局算法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;item item-1&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;sub-item&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;item item-2&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;item item-3&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码实例中，<code>.container</code>元素就是网格布局容器，<code>.item</code>元素就是网格的项目，由于网格元素只能是容器的顶层子元素，所以<code>p</code>元素并不是网格元素</p><p>这里提一下，网格线概念，有助于下面对<code>grid-column</code>系列属性的理解</p><p>网格线，即划分网格的线，如下图所示：</p><p><img src="https://static.vue-js.com/61be7080-9a94-11eb-ab90-d9ae814b240d.png" alt=""></p><p>上图是一个 2 x 3 的网格，共有3根水平网格线和4根垂直网格线</p><h2 id="二、属性" tabindex="-1"><a class="header-anchor" href="#二、属性" aria-hidden="true">#</a> 二、属性</h2><p>同样，<code>Grid</code> 布局属性可以分为两大类：</p><ul><li>容器属性，</li><li>项目属性</li></ul><p>关于容器属性有如下：</p><h3 id="display-属性" tabindex="-1"><a class="header-anchor" href="#display-属性" aria-hidden="true">#</a> display 属性</h3><p>文章开头讲到，在元素上设置<code>display：grid</code> 或 <code>display：inline-grid</code> 来创建一个网格容器</p><ul><li><p>display：grid 则该容器是一个块级元素</p></li><li><p>display: inline-grid 则容器元素为行内元素</p></li></ul><h3 id="grid-template-columns-属性-grid-template-rows-属性" tabindex="-1"><a class="header-anchor" href="#grid-template-columns-属性-grid-template-rows-属性" aria-hidden="true">#</a> grid-template-columns 属性，grid-template-rows 属性</h3><p><code>grid-template-columns</code> 属性设置列宽，<code>grid-template-rows</code> 属性设置行高</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token comment">/*  声明了三列，宽度分别为 200px 200px 200px */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 200px 200px 200px<span class="token punctuation">;</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token comment">/*  声明了两行，行高分别为 50px 50px  */</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 50px 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上表示固定列宽为 200px 200px 200px，行高为 50px 50px</p><p>上述代码可以看到重复写单元格宽高，通过使用<code>repeat()</code>函数，可以简写重复的值</p><ul><li>第一个参数是重复的次数</li><li>第二个参数是重复的值</li></ul><p>所以上述代码可以简写成</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span>200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span><span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span>50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上述的<code>repeact</code>关键字，还有：</p><ul><li>auto-fill：示自动填充，让一行（或者一列）中尽可能的容纳更多的单元格</li></ul><blockquote><p><code>grid-template-columns: repeat(auto-fill, 200px)</code> 表示列宽是 200 px，但列的数量是不固定的，只要浏览器能够容纳得下，就可以放置元素</p></blockquote><ul><li>fr：片段，为了方便表示比例关系</li></ul><blockquote><p><code>grid-template-columns: 200px 1fr 2fr</code> 表示第一个列宽设置为 200px，后面剩余的宽度分为两部分，宽度分别为剩余宽度的 1/3 和 2/3</p></blockquote><ul><li>minmax：产生一个长度范围，表示长度就在这个范围之中都可以应用到网格项目中。第一个参数就是最小值，第二个参数就是最大值</li></ul><blockquote><p><code>minmax(100px, 1fr)</code>表示列宽不小于<code>100px</code>，不大于<code>1fr</code></p></blockquote><ul><li>auto：由浏览器自己决定长度</li></ul><blockquote><p><code>grid-template-columns: 100px auto 100px</code> 表示第一第三列为 100px，中间由浏览器决定长度</p></blockquote><h3 id="grid-row-gap-属性-grid-column-gap-属性-grid-gap-属性" tabindex="-1"><a class="header-anchor" href="#grid-row-gap-属性-grid-column-gap-属性-grid-gap-属性" aria-hidden="true">#</a> grid-row-gap 属性， grid-column-gap 属性， grid-gap 属性</h3><p><code>grid-row-gap</code> 属性、<code>grid-column-gap</code> 属性分别设置行间距和列间距。<code>grid-gap</code> 属性是两者的简写形式</p><p><code>grid-row-gap: 10px</code> 表示行间距是 10px</p><p><code>grid-column-gap: 20px</code> 表示列间距是 20px</p><p><code>grid-gap: 10px 20px</code> 等同上述两个属性</p><h3 id="grid-template-areas-属性" tabindex="-1"><a class="header-anchor" href="#grid-template-areas-属性" aria-hidden="true">#</a> grid-template-areas 属性</h3><p>用于定义区域，一个区域由一个或者多个单元格组成</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&#39;a b c&#39;</span>
                       <span class="token string">&#39;d e f&#39;</span>
                       <span class="token string">&#39;g h i&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码先划分出9个单元格，然后将其定名为<code>a</code>到<code>i</code>的九个区域，分别对应这九个单元格。</p><p>多个单元格合并成一个区域的写法如下</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&#39;a a a&#39;</span>
                     <span class="token string">&#39;b b b&#39;</span>
                     <span class="token string">&#39;c c c&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码将9个单元格分成<code>a</code>、<code>b</code>、<code>c</code>三个区域</p><p>如果某些区域不需要利用，则使用&quot;点&quot;（<code>.</code>）表示</p><h3 id="grid-auto-flow-属性" tabindex="-1"><a class="header-anchor" href="#grid-auto-flow-属性" aria-hidden="true">#</a> grid-auto-flow 属性</h3><p>划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。</p><p>顺序就是由<code>grid-auto-flow</code>决定，默认为行，代表&quot;先行后列&quot;，即先填满第一行，再开始放入第二行</p><p><img src="https://static.vue-js.com/70fb3240-9a94-11eb-ab90-d9ae814b240d.png" alt=""></p><p>当修改成<code>column</code>后，放置变为如下：</p><p><img src="https://static.vue-js.com/7c26ffa0-9a94-11eb-ab90-d9ae814b240d.png" alt=""></p><h3 id="justify-items-属性-align-items-属性-place-items-属性" tabindex="-1"><a class="header-anchor" href="#justify-items-属性-align-items-属性-place-items-属性" aria-hidden="true">#</a> justify-items 属性， align-items 属性， place-items 属性</h3><p><code>justify-items</code> 属性设置单元格内容的水平位置（左中右），<code>align-items</code> 属性设置单元格的垂直位置（上中下）</p><p>两者属性的值完成相同</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">justify-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性对应如下：</p><ul><li>start：对齐单元格的起始边缘</li><li>end：对齐单元格的结束边缘</li><li>center：单元格内部居中</li><li>stretch：拉伸，占满单元格的整个宽度（默认值）</li></ul><p><code>place-items</code>属性是<code>align-items</code>属性和<code>justify-items</code>属性的合并简写形式</p><h3 id="justify-content-属性-align-content-属性-place-content-属性" tabindex="-1"><a class="header-anchor" href="#justify-content-属性-align-content-属性-place-content-属性" aria-hidden="true">#</a> justify-content 属性， align-content 属性， place-content 属性</h3><p><code>justify-content</code>属性是整个内容区域在容器里面的水平位置（左中右），<code>align-content</code>属性是整个内容区域的垂直位置（上中下）</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> start | end | center | stretch | space-around | space-between | space-evenly<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> start | end | center | stretch | space-around | space-between | space-evenly<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个属性的写法完全相同，都可以取下面这些值：</p><ul><li>start - 对齐容器的起始边框</li><li>end - 对齐容器的结束边框</li><li>center - 容器内部居中</li></ul><p><img src="https://static.vue-js.com/9d1ec990-9a94-11eb-ab90-d9ae814b240d.png" alt=""></p><ul><li><p>space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍</p></li><li><p>space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔</p></li><li><p>space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔</p></li><li><p>stretch - 项目大小没有指定时，拉伸占据整个网格容器</p></li></ul><p><img src="https://static.vue-js.com/a620b210-9a94-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="grid-auto-columns-属性和-grid-auto-rows-属性" tabindex="-1"><a class="header-anchor" href="#grid-auto-columns-属性和-grid-auto-rows-属性" aria-hidden="true">#</a> grid-auto-columns 属性和 grid-auto-rows 属性</h3><p>有时候，一些项目的指定位置，在现有网格的外部，就会产生显示网格和隐式网格</p><p>比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。超出的部分就是隐式网格</p><p>而<code>grid-auto-rows</code>与<code>grid-auto-columns</code>就是专门用于指定隐式网格的宽高</p><p>关于项目属性，有如下：</p><h3 id="grid-column-start-属性、grid-column-end-属性、grid-row-start-属性以及grid-row-end-属性" tabindex="-1"><a class="header-anchor" href="#grid-column-start-属性、grid-column-end-属性、grid-row-start-属性以及grid-row-end-属性" aria-hidden="true">#</a> grid-column-start 属性、grid-column-end 属性、grid-row-start 属性以及grid-row-end 属性</h3><p>指定网格项目所在的四个边框，分别定位在哪根网格线，从而指定项目的位置</p><ul><li>grid-column-start 属性：左边框所在的垂直网格线</li><li>grid-column-end 属性：右边框所在的垂直网格线</li><li>grid-row-start 属性：上边框所在的水平网格线</li><li>grid-row-end 属性：下边框所在的水平网格线</li></ul><p>举个例子：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">#container</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
        <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.item-1</span> <span class="token punctuation">{</span>
        <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
        <span class="token property">grid-column-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item item-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item item-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item item-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过设置<code>grid-column</code>属性，指定1号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线</p><p><img src="https://static.vue-js.com/b7925530-9a94-11eb-ab90-d9ae814b240d.png" alt=""></p><h3 id="grid-area-属性" tabindex="-1"><a class="header-anchor" href="#grid-area-属性" aria-hidden="true">#</a> grid-area 属性</h3><p><code>grid-area</code> 属性指定项目放在哪一个区域</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> e<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>意思为将1号项目位于<code>e</code>区域</p><p>与上述讲到的<code>grid-template-areas</code>搭配使用</p><h3 id="justify-self-属性、align-self-属性以及-place-self-属性" tabindex="-1"><a class="header-anchor" href="#justify-self-属性、align-self-属性以及-place-self-属性" aria-hidden="true">#</a> justify-self 属性、align-self 属性以及 place-self 属性</h3><p><code>justify-self</code>属性设置单元格内容的水平位置（左中右），跟<code>justify-items</code>属性的用法完全一致，但只作用于单个项目。</p><p><code>align-self</code>属性设置单元格内容的垂直位置（上中下），跟<code>align-items</code>属性的用法完全一致，也是只作用于单个项目</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">justify-self</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个属性都可以取下面四个值。</p><ul><li>start：对齐单元格的起始边缘。</li><li>end：对齐单元格的结束边缘。</li><li>center：单元格内部居中。</li><li>stretch：拉伸，占满单元格的整个宽度（默认值）</li></ul><h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景" aria-hidden="true">#</a> 三、应用场景</h2><p>文章开头就讲到，<code>Grid</code>是一个强大的布局，如一些常见的 CSS 布局，如居中，两列布局，三列布局等等是很容易实现的，在以前的文章中，也有使用<code>Grid</code>布局完成对应的功能</p><p>关于兼容性问题，结果如下：</p><p><img src="https://static.vue-js.com/c24a2b10-9a94-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>总体兼容性还不错，但在 IE 10 以下不支持</p><p>目前，<code>Grid</code>布局在手机端支持还不算太友好</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout</li><li>https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html</li><li>https://juejin.cn/post/6854573220306255880#heading-2</li></ul>`,103),c=[p];function i(o,l){return n(),a("div",null,c)}const r=s(t,[["render",i],["__file","grid.html.vue"]]);export{r as default};
