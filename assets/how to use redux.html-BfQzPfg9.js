import{_ as n,c as s,o as a,a as e}from"./app-7eMFvEA8.js";const t={},o=e(`<h1 id="面试官-你在react项目中是如何使用redux的-项目结构是如何划分的" tabindex="-1"><a class="header-anchor" href="#面试官-你在react项目中是如何使用redux的-项目结构是如何划分的" aria-hidden="true">#</a> 面试官：你在React项目中是如何使用Redux的? 项目结构是如何划分的？</h1><p><img src="https://static.vue-js.com/31a4aff0-e7dc-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、背景" tabindex="-1"><a class="header-anchor" href="#一、背景" aria-hidden="true">#</a> 一、背景</h2><p>在前面文章了解中，我们了解到<code>redux</code>是用于数据状态管理，而<code>react</code>是一个视图层面的库</p><p>如果将两者连接在一起，可以使用官方推荐<code>react-redux</code>库，其具有高效且灵活的特性</p><p><code>react-redux</code>将组件分成：</p><ul><li>容器组件：存在逻辑处理</li><li>UI 组件：只负责现显示和交互，内部不处理逻辑，状态由外部控制</li></ul><p>通过<code>redux</code>将整个应用状态存储到<code>store</code>中，组件可以派发<code>dispatch</code>行为<code>action</code>给<code>store</code></p><p>其他组件通过订阅<code>store</code>中的状态<code>state</code>来更新自身的视图</p><h2 id="二、如何做" tabindex="-1"><a class="header-anchor" href="#二、如何做" aria-hidden="true">#</a> 二、如何做</h2><p>使用<code>react-redux</code>分成了两大核心：</p><ul><li>Provider</li><li>connection</li></ul><h3 id="provider" tabindex="-1"><a class="header-anchor" href="#provider" aria-hidden="true">#</a> Provider</h3><p>在<code>redux</code>中存在一个<code>store</code>用于存储<code>state</code>，如果将这个<code>store</code>存放在顶层元素中，其他组件都被包裹在顶层元素之上</p><p>那么所有的组件都能够受到<code>redux</code>的控制，都能够获取到<code>redux</code>中的数据</p><p>使用方式如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Provider store <span class="token operator">=</span> <span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>Provider<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> connection</h3><p><code>connect</code>方法将<code>store</code>上的<code>getState </code>和 <code>dispatch </code>包装成组件的<code>props</code></p><p>导入<code>conect</code>如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-redux&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用法如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以传递两个参数：</p><ul><li><p>mapStateToProps</p></li><li><p>mapDispatchToProps</p></li></ul><h3 id="mapstatetoprops" tabindex="-1"><a class="header-anchor" href="#mapstatetoprops" aria-hidden="true">#</a> mapStateToProps</h3><p>把<code>redux</code>中的数据映射到<code>react</code>中的<code>props</code>中去</p><p>如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// prop : state.xxx  | 意思是将state中的某个数据映射到props中</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span> state<span class="token punctuation">.</span>bar
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件内部就能够通过<code>props</code>获取到<code>store</code>中的数据</p><div class="language-cons line-numbers-mode" data-ext="cons"><pre class="language-cons"><code>class Foo extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
         // 这样子渲染的其实就是state.bar的数据了
            &lt;div&gt;this.props.foo&lt;/div&gt;
        )
    }
}
Foo = connect()(Foo)
export default Foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mapdispatchtoprops" tabindex="-1"><a class="header-anchor" href="#mapdispatchtoprops" aria-hidden="true">#</a> mapDispatchToProps</h3><p>将<code>redux</code>中的<code>dispatch</code>映射到组件内部的<code>props</code>中</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// 默认传递参数就是dispatch</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;increatment&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">(</span>
         
             <span class="token operator">&lt;</span>button onClick <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>onClick<span class="token punctuation">}</span><span class="token operator">&gt;</span>点击increase<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
Foo <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>整体流程图大致如下所示：</p><p><img src="https://static.vue-js.com/3e47db10-e7dc-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="三、项目结构" tabindex="-1"><a class="header-anchor" href="#三、项目结构" aria-hidden="true">#</a> 三、项目结构</h2><p>可以根据项目具体情况进行选择，以下列出两种常见的组织结构</p><h4 id="按角色组织-mvc" tabindex="-1"><a class="header-anchor" href="#按角色组织-mvc" aria-hidden="true">#</a> 按角色组织（MVC）</h4><p>角色如下：</p><ul><li>reducers</li><li>actions</li><li>components</li><li>containers</li></ul><p>参考如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>reducers<span class="token operator">/</span>
  todoReducer<span class="token punctuation">.</span>js
  filterReducer<span class="token punctuation">.</span>js
actions<span class="token operator">/</span>
  todoAction<span class="token punctuation">.</span>js
  filterActions<span class="token punctuation">.</span>js
components<span class="token operator">/</span>
  todoList<span class="token punctuation">.</span>js
  todoItem<span class="token punctuation">.</span>js
  filter<span class="token punctuation">.</span>js
containers<span class="token operator">/</span>
  todoListContainer<span class="token punctuation">.</span>js
  todoItemContainer<span class="token punctuation">.</span>js
  filterContainer<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按功能组织" tabindex="-1"><a class="header-anchor" href="#按功能组织" aria-hidden="true">#</a> 按功能组织</h4><p>使用<code>redux</code>使用功能组织项目，也就是把完成同一应用功能的代码放在一个目录下，一个应用功能包含多个角色的代码</p><p><code>Redux</code>中，不同的角色就是<code>reducer</code>、<code>actions</code>和视图，而应用功能对应的就是用户界面的交互模块</p><p>参考如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>todoList<span class="token operator">/</span>
  actions<span class="token punctuation">.</span>js
  actionTypes<span class="token punctuation">.</span>js
  index<span class="token punctuation">.</span>js
  reducer<span class="token punctuation">.</span>js
  views<span class="token operator">/</span>
    components<span class="token punctuation">.</span>js
    containers<span class="token punctuation">.</span>js
filter<span class="token operator">/</span>
  actions<span class="token punctuation">.</span>js
  actionTypes<span class="token punctuation">.</span>js
  index<span class="token punctuation">.</span>js
  reducer<span class="token punctuation">.</span>js
  views<span class="token operator">/</span>
    components<span class="token punctuation">.</span>js
    container<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个功能模块对应一个目录，每个目录下包含同样的角色文件：</p><ul><li>actionTypes.js 定义action类型</li><li>actions.js 定义action构造函数</li><li>reducer.js 定义这个功能模块如果响应actions.js定义的动作</li><li>views 包含功能模块中所有的React组件，包括展示组件和容器组件</li><li>index.js 把所有的角色导入，统一导出</li></ul><p>其中<code>index</code>模块用于导出对外的接口</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> actions <span class="token keyword">from</span> <span class="token string">&#39;./actions.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">&#39;./reducer.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> view <span class="token keyword">from</span> <span class="token string">&#39;./views/container.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> actions<span class="token punctuation">,</span> reducer<span class="token punctuation">,</span> view <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入方法如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> actions<span class="token punctuation">,</span> reducer<span class="token punctuation">,</span> view <span class="token keyword">as</span> TodoList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./xxxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://www.redux.org.cn/docs/basics/UsageWithReact.html</li><li>https://segmentfault.com/a/1190000010384268</li></ul>`,58),p=[o];function c(i,l){return a(),s("div",null,p)}const r=n(t,[["render",c],["__file","how to use redux.html.vue"]]);export{r as default};
