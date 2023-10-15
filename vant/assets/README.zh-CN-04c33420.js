import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},e=n(`<h1>SwipeCell 滑动单元格</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>可以左右滑动来展示操作按钮的单元格组件。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">SwipeCell</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SwipeCell</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p><code>SwipeCell</code> 组件提供了 <code>left</code> 和 <code>right</code> 两个插槽，用于定义两侧滑动区域的内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;选择&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;删除&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;收藏&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-cell</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-nei-rong" tabindex="-1">自定义内容</h3><p><code>SwipeCell</code> 可以嵌套任意内容，比如嵌套一个商品卡片。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-card</span>
    <span class="hljs-attr">num</span>=<span class="hljs-string">&quot;2&quot;</span>
    <span class="hljs-attr">price</span>=<span class="hljs-string">&quot;2.00&quot;</span>
    <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;描述信息&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;商品标题&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;goods-card&quot;</span>
    <span class="hljs-attr">thumb</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;删除&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;delete-button&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-cell</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.goods-card</span> {
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">background-color</span>: @white;
  }

  <span class="hljs-selector-class">.delete-button</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yi-bu-guan-bi" tabindex="-1">异步关闭</h3><p>通过传入 <code>before-close</code> 回调函数，可以自定义两侧滑动内容关闭时的行为。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-cell</span> <span class="hljs-attr">:before-close</span>=<span class="hljs-string">&quot;beforeClose&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;选择&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;单元格&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;删除&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-cell</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showConfirmDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// position 为关闭时点击的位置</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeClose</span> = (<span class="hljs-params">{ position }</span>) =&gt; {
      <span class="hljs-keyword">switch</span> (position) {
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;left&#39;</span>:
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;cell&#39;</span>:
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;outside&#39;</span>:
          <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;right&#39;</span>:
          <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
            <span class="hljs-title function_">showConfirmDialog</span>({
              <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;确定删除吗？&#39;</span>,
            })
              .<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">resolve</span>(<span class="hljs-literal">true</span>))
              .<span class="hljs-title function_">catch</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">resolve</span>(<span class="hljs-literal">false</span>));
          });
      }
    };

    <span class="hljs-keyword">return</span> { beforeClose };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>标识符，通常为一个唯一的字符串或数字，可以在事件参数中获取到</td><td><em>number | string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>left-width</td><td>指定左侧滑动区域宽度，单位为 <code>px</code></td><td><em>number | string</em></td><td><code>auto</code></td></tr><tr><td>right-width</td><td>指定右侧滑动区域宽度，单位为 <code>px</code></td><td><em>number | string</em></td><td><code>auto</code></td></tr><tr><td>before-close</td><td>关闭前的回调函数，返回 <code>false</code> 可阻止关闭，支持返回 Promise</td><td><em>(args) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用滑动</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>stop-propagation</td><td>是否阻止滑动事件冒泡</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认显示的内容</td></tr><tr><td>left</td><td>左侧滑动区域的内容</td></tr><tr><td>right</td><td>右侧滑动区域的内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击时触发</td><td><em>position: &#39;left&#39; | &#39;right&#39; | &#39;cell&#39; | &#39;outside&#39;</em></td></tr><tr><td>open</td><td>打开时触发</td><td><em>{ name: string | number, position: &#39;left&#39; | &#39;right&#39; }</em></td></tr><tr><td>close</td><td>关闭时触发</td><td><em>{ name: string | number, position: &#39;left&#39; | &#39;right&#39; | &#39;cell&#39; | &#39;outside&#39; }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="beforeclose-can-shu" tabindex="-1">beforeClose 参数</h3><p>beforeClose 的第一个参数为对象，对象中包含以下属性：</p><table><thead><tr><th>参数名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>name</td><td>标识符</td><td><em>string | number</em></td></tr><tr><td>position</td><td>关闭时的点击位置</td><td><em>&#39;left&#39; | &#39;right&#39; | &#39;cell&#39; | &#39;outside&#39;</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 SwipeCell 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>open</td><td>打开单元格侧边栏</td><td>position: <code>left | right</code></td><td>-</td></tr><tr><td>close</td><td>收起单元格侧边栏</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">SwipeCellSide</span>,
  <span class="hljs-title class_">SwipeCellProps</span>,
  <span class="hljs-title class_">SwipeCellPosition</span>,
  <span class="hljs-title class_">SwipeCellInstance</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>SwipeCellInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwipeCellInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> swipeCellRef = ref&lt;<span class="hljs-title class_">SwipeCellInstance</span>&gt;();

swipeCellRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">close</span>();
</code></pre></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian" tabindex="-1">在桌面端无法操作组件？</h3><p>参见<a href="#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei" target="_blank">桌面端适配</a>。</p></div>`,16),c=[e];function d(h,r){return a(),t("div",p,c)}const j=s(l,[["render",d]]);export{j as default};
