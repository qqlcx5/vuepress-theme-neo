import{_ as p,r as e,c as o,o as c,a as i,b as n,d as a,e as t}from"./app-7eMFvEA8.js";const l={},u=i(`<h1 id="面试官-说说你对栈、队列的理解-应用场景" tabindex="-1"><a class="header-anchor" href="#面试官-说说你对栈、队列的理解-应用场景" aria-hidden="true">#</a> 面试官：说说你对栈、队列的理解？应用场景？</h1><p><img src="https://static.vue-js.com/bc57f530-1b99-11ec-a752-75723a64e8f5.png" alt=""></p><h2 id="一、栈" tabindex="-1"><a class="header-anchor" href="#一、栈" aria-hidden="true">#</a> 一、栈</h2><p>栈（stack）又名堆栈，它是一种运算受限的线性表，限定仅在表尾进行插入和删除操作的线性表</p><p>表尾这一端被称为栈顶，相反地另一端被称为栈底，向栈顶插入元素被称为进栈、入栈、压栈，从栈顶删除元素又称作出栈</p><p>所以其按照先进后出的原则存储数据，先进入的数据被压入栈底，最后的数据在栈顶，需要读数据的时候从栈顶开始弹出数据，具有记忆作用</p><p>关于栈的简单实现，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 添加一个（或几个）新元素到栈顶
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">element</span> 新元素
   */</span>
  <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 移除栈顶的元素，同时返回被移除的元素
   */</span>
  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）
   */</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 如果栈里没有任何元素就返回true,否则返回false
   */</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 移除栈里的所有元素
   */</span>
  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 返回栈里的元素个数。这个方法和数组的length属性很类似
   */</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于栈的操作主要的方法如下：</p><ul><li>push：入栈操作</li><li>pop：出栈操作</li></ul><h2 id="二、队列" tabindex="-1"><a class="header-anchor" href="#二、队列" aria-hidden="true">#</a> 二、队列</h2><p>跟栈十分相似，队列是一种特殊的线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作</p><p>进行插入操作的端称为队尾，进行删除操作的端称为队头，当队列中没有元素时，称为空队列</p><p>在队列中插入一个队列元素称为入队，从队列中删除一个队列元素称为出队。因为队列只允许在一端插入，在另一端删除，所以只有最早进入队列的元素才能最先从队列中删除，故队列又称为先进先出</p><p>简单实现一个队列的方式，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>frontIndex <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tailIndex <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>tailIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> item
    <span class="token punctuation">}</span>
    <span class="token function">unqueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> item  <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>frontIndex<span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>frontIndex<span class="token operator">++</span>        
        <span class="token keyword">return</span> item
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述这种入队和出队操作中，头尾指针只增加不减小，致使被删元素的空间永远无法重新利用</p><p>当队列中实际的元素个数远远小于向量空间的规模时，也可能由于尾指针已超越向量空间的上界而不能做入队操作，出该现象称为&quot;假溢&quot;</p><p>在实际使用队列时，为了使队列空间能重复使用，往往对队列的使用方法稍加改进：</p><p>无论插入或删除，一旦<code>rear</code>指针增1或<code>front</code>指针增1 时超出了所分配的队列空间，就让它指向这片连续空间的起始位置，这种队列也就是循环队列</p><p>下面实现一个循环队列，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span> <span class="token comment">// 长度需要限制, 来达到空间的利用, 代表空间的长度</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 指向首元素</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 指向准备插入元素的位置</span>
    <span class="token punctuation">}</span>
    <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>k<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_data<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token function">deQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>font<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>font <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>k<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>font <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>k <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>font<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述通过求余的形式代表首尾指针增1 时超出了所分配的队列空间</p><h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景" aria-hidden="true">#</a> 三、应用场景</h2><h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h3><p>借助栈的先进后出的特性，可以简单实现一个逆序数处的功能，首先把所有元素依次入栈，然后把所有元素出栈并输出</p><p>包括编译器的在对输入的语法进行分析的时候，例如<code>&quot;()&quot;</code>、<code>&quot;{}&quot;</code>、<code>&quot;[]&quot;</code>这些成对出现的符号，借助栈的特性，凡是遇到括号的前半部分，即把这个元素入栈，凡是遇到括号的后半部分就比对栈顶元素是否该元素相匹配，如果匹配，则前半部分出栈，否则就是匹配出错</p><p>包括函数调用和递归的时候，每调用一个函数，底层都会进行入栈操作，出栈则返回函数的返回值</p><p>生活中的例子，可以把乒乓球盒比喻成一个堆栈，球一个一个放进去（入栈），最先放进去的要等其后面的全部拿出来后才能出来（出栈），这种就是典型的先进后出模型</p><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h3><p>当我们需要按照一定的顺序来处理数据，而该数据的数据量在不断地变化的时候，则需要队列来帮助解题</p><p>队列的使用广泛应用在广度优先搜索种，例如层次遍历一个二叉树的节点值（后续将到）</p><p>生活中的例子，排队买票，排在队头的永远先处理，后面的必须等到前面的全部处理完毕再进行处理，这也是典型的先进先出模型</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,34),r={href:"https://baike.baidu.com/item/%E6%A0%88/12808149",target:"_blank",rel:"noopener noreferrer"},k={href:"https://baike.baidu.com/item/%E9%98%9F%E5%88%97/14580481",target:"_blank",rel:"noopener noreferrer"};function d(v,m){const s=e("ExternalLinkIcon");return c(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("https://baike.baidu.com/item/栈/12808149"),t(s)])]),n("li",null,[n("a",k,[a("https://baike.baidu.com/item/队列/14580481"),t(s)])])])])}const h=p(l,[["render",d],["__file","stack_queue.html.vue"]]);export{h as default};
