import{_ as n,c as s,o as a,a as e}from"./app-7eMFvEA8.js";const i={},o=e(`<h1 id="面试官-说说如何在vue项目中应用typescript" tabindex="-1"><a class="header-anchor" href="#面试官-说说如何在vue项目中应用typescript" aria-hidden="true">#</a> 面试官：说说如何在Vue项目中应用TypeScript？</h1><p><img src="https://static.vue-js.com/cc658c10-1565-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p>与link类似</p><p>在<code>VUE</code>项目中应用<code>typescript</code>，我们需要引入一个库<code>vue-property-decorator</code>，</p><p>其是基于<code>vue-class-component</code>库而来，这个库<code>vue</code>官方推出的一个支持使用<code>class</code>方式来开发<code>vue</code>单文件组件的库</p><p>主要的功能如下：</p><ul><li>methods 可以直接声明为类的成员方法</li><li>计算属性可以被声明为类的属性访问器</li><li>初始化的 data 可以被声明为类属性</li><li>data、render 以及所有的 Vue 生命周期钩子可以直接作为类的成员方法</li><li>所有其他属性，需要放在装饰器中</li></ul><h2 id="二、使用" tabindex="-1"><a class="header-anchor" href="#二、使用" aria-hidden="true">#</a> 二、使用</h2><p>vue-property-decorator 主要提供了多个装饰器和一个函数:</p><ul><li>@Prop</li><li>@PropSync</li><li>@Model</li><li>@Watch</li><li>@Provide</li><li>@Inject</li><li>@ProvideReactive</li><li>@InjectReactive</li><li>@Emit</li><li>@Ref</li><li>@Component (由 vue-class-component 提供)</li><li>Mixins (由 vue-class-component 提供)</li></ul><h3 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> @Component</h3><p><code>Component</code>装饰器它注明了此类为一个<code>Vue</code>组件，因此即使没有设置选项也不能省略</p><p>如果需要定义比如 <code>name</code>、<code>components</code>、<code>filters</code>、<code>directives</code>以及自定义属性，就可以在<code>Component</code>装饰器中定义，如下：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import {Component,Vue} from &#39;vue-property-decorator&#39;;
import {componentA,componentB} from &#39;@/components&#39;;

 @Component({
    components:{
        componentA,
        componentB,
    },
    directives: {
        focus: {
            // 指令的定义
            inserted: function (el) {
                el.focus()
            }
        }
    }
})
export default class YourCompoent extends Vue{

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="computed、data、methods" tabindex="-1"><a class="header-anchor" href="#computed、data、methods" aria-hidden="true">#</a> computed、data、methods</h3><p>这里取消了组件的data和methods属性，以往data返回对象中的属性、methods中的方法需要直接定义在Class中，当做类的属性和方法</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">HelloDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">123</span> <span class="token comment">// 类属性相当于以前的 data</span>

    <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span> <span class="token comment">// 类方法就是以前的方法</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取计算属性</span>
    <span class="token keyword">get</span> <span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 设置计算属性</span>
    <span class="token keyword">set</span> <span class="token function">total</span><span class="token punctuation">(</span>param<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> param
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> @props</h3><p>组件接收属性的装饰器，如下使用：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Component<span class="token punctuation">,</span>Vue<span class="token punctuation">,</span>Prop<span class="token punctuation">}</span> from vue<span class="token operator">-</span>property<span class="token operator">-</span>decorator<span class="token punctuation">;</span>

@Component
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">YourComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    @<span class="token function">Prop</span><span class="token punctuation">(</span>String<span class="token punctuation">)</span>
    <span class="token literal-property property">propA</span><span class="token operator">:</span>string<span class="token punctuation">;</span>

    @<span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">[</span>String<span class="token punctuation">,</span>Number<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token literal-property property">propB</span><span class="token operator">:</span>string<span class="token operator">|</span>number<span class="token punctuation">;</span>

    @<span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token comment">// type: [String , Number]</span>
     <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;default value&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 一般为String或Number</span>
      <span class="token comment">//如果是对象或数组的话。默认值从一个工厂函数中返回</span>
      <span class="token comment">// defatult: () =&gt; {</span>
      <span class="token comment">//     return [&#39;a&#39;,&#39;b&#39;]</span>
      <span class="token comment">// }</span>
     <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
     <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;InProcess&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;Settled&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token literal-property property">propC</span><span class="token operator">:</span>string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> @watch</h3><p>实际就是<code>Vue</code>中的监听器，如下：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import { Vue, Component, Watch } from &#39;vue-property-decorator&#39;

@Component
export default class YourComponent extends Vue {
  @Watch(&#39;child&#39;)
  onChildChanged(val: string, oldVal: string) {}

  @Watch(&#39;person&#39;, { immediate: true, deep: true })
  onPersonChanged1(val: Person, oldVal: Person) {}

  @Watch(&#39;person&#39;)
  onPersonChanged2(val: Person, oldVal: Person) {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> @emit</h3><p><code>vue-property-decorator</code> 提供的 <code>@Emit</code> 装饰器就是代替<code>Vue </code>中的事件的触发<code>$emit</code>，如下：</p><div class="language-TS line-numbers-mode" data-ext="TS"><pre class="language-TS"><code>import {Vue, Component, Emit} from &#39;vue-property-decorator&#39;;
    @Component({})
    export default class Some extends Vue{
        mounted(){
            this.$on(&#39;emit-todo&#39;, function(n) {
                console.log(n)
            })
            this.emitTodo(&#39;world&#39;);
        }
        @Emit()
        emitTodo(n: string){
            console.log(&#39;hello&#39;);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-、总结" tabindex="-1"><a class="header-anchor" href="#三-、总结" aria-hidden="true">#</a> 三 、总结</h2><p>可以看到上述<code>typescript</code>版本的<code>vue class</code>的语法与平时<code>javascript</code>版本使用起来还是有很大的不同，多处用到<code>class</code>与装饰器，但实际上本质是一致的，只有不断编写才会得心应手</p>`,29),t=[o];function p(c,l){return a(),s("div",null,t)}const r=n(i,[["render",p],["__file","vue.html.vue"]]);export{r as default};
