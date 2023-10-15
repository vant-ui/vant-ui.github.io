import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},e=t(`<h1>DropdownMenu 下拉菜单</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>向下弹出的菜单列表。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">DropdownMenu</span>, <span class="hljs-title class_">DropdownItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DropdownMenu</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">DropdownItem</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;a&#39;</span>);
    <span class="hljs-keyword">const</span> option1 = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;全部商品&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;新款商品&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;活动商品&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },
    ];
    <span class="hljs-keyword">const</span> option2 = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;默认排序&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;好评排序&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;b&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;销量排序&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;c&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      value1,
      value2,
      option1,
      option2,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-cai-dan-nei-rong" tabindex="-1">自定义菜单内容</h3><p>通过插槽可以自定义 <code>DropdownItem</code> 的内容，此时需要使用 <code>DropdownMenu</code> 实例上的 <code>close</code> 或指定 <code>DropdownItem</code> 的 <code>toggle</code> 方法手动控制菜单的显示。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;menuRef&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;筛选&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;itemRef&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;包邮&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch1&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;团购&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch2&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 5px 16px;&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span> <span class="hljs-attr">round</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>&gt;</span>
        确认
      <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> menuRef = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);
    <span class="hljs-keyword">const</span> itemRef = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> switch1 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> switch2 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> options = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;全部商品&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;新款商品&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;活动商品&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params"></span>) =&gt; {
      itemRef.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggle</span>();
      <span class="hljs-comment">// 或者</span>
      <span class="hljs-comment">// menuRef.value.close();</span>
    };

    <span class="hljs-keyword">return</span> {
      menuRef,
      itemRef,
      value,
      switch1,
      switch2,
      options,
      onConfirm,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-xuan-zhong-tai-yan-se" tabindex="-1">自定义选中态颜色</h3><p>通过 <code>active-color</code> 属性可以自定义菜单标题和选项的选中态颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="heng-xiang-gun-dong" tabindex="-1">横向滚动</h3><p>通过 <code>swipe-threshold</code> 属性可以自定义滚动阈值。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">swipe-threshold</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="xiang-shang-zhan-kai" tabindex="-1">向上展开</h3><p>将 <code>direction</code> 属性值设置为 <code>up</code>，菜单即可向上展开。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;up&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-cai-dan" tabindex="-1">禁用菜单</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="dropdownmenu-props" tabindex="-1">DropdownMenu Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active-color</td><td>菜单标题和选项的选中态颜色</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>direction</td><td>菜单展开方向，可选值为<code>up</code></td><td><em>string</em></td><td><code>down</code></td></tr><tr><td>z-index</td><td>菜单栏 z-index 层级</td><td><em>number | string</em></td><td><code>10</code></td></tr><tr><td>duration</td><td>动画时长，单位秒，设置为 0 可以禁用动画</td><td><em>number | string</em></td><td><code>0.2</code></td></tr><tr><td>overlay</td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-overlay</td><td>是否在点击遮罩层后关闭菜单</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-outside</td><td>是否在点击外部元素后关闭菜单</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>swipe-threshold</td><td>滚动阈值，选项数量超过阈值且总宽度超过菜单栏宽度时，可以横向滚动</td><td><em>number | string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="dropdownitem-props" tabindex="-1">DropdownItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中项对应的 value</td><td><em>number | string</em></td><td>-</td></tr><tr><td>title</td><td>菜单项标题</td><td><em>string</em></td><td>当前选中项文字</td></tr><tr><td>options</td><td>选项数组</td><td><em>Option[]</em></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用菜单</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lazy-render</td><td>是否在首次展开时才渲染菜单内容</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>title-class</td><td>标题额外类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>teleport</td><td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td><td><em>string | Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="dropdownitem-events" tabindex="-1">DropdownItem Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>点击选项导致 value 变化时触发</td><td>value</td></tr><tr><td>open</td><td>打开菜单栏时触发</td><td>-</td></tr><tr><td>close</td><td>关闭菜单栏时触发</td><td>-</td></tr><tr><td>opened</td><td>打开菜单栏且动画结束后触发</td><td>-</td></tr><tr><td>closed</td><td>关闭菜单栏且动画结束后触发</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="dropdownitem-slots" tabindex="-1">DropdownItem Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>菜单内容</td></tr><tr><td>title</td><td>自定义菜单项标题</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="dropdownmenu-fang-fa" tabindex="-1">DropdownMenu 方法</h3><p>通过 ref 可以获取到 DropdownMenu 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>close</td><td>关闭所有菜单的展示状态</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="dropdownitem-fang-fa" tabindex="-1">DropdownItem 方法</h3><p>通过 ref 可以获取到 DropdownItem 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>toggle</td><td>切换菜单展示状态，传 <code>true</code> 为显示，<code>false</code> 为隐藏，不传参为取反</td><td><em>show?: boolean</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">DropdownMenuProps</span>,
  <span class="hljs-title class_">DropdownItemProps</span>,
  <span class="hljs-title class_">DropdownItemOption</span>,
  <span class="hljs-title class_">DropdownItemInstance</span>,
  <span class="hljs-title class_">DropdownMenuInstance</span>,
  <span class="hljs-title class_">DropdownMenuDirection</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>DropdownMenuInstance</code> 和 <code>DropdownItemInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">DropdownMenuInstance</span>, <span class="hljs-title class_">DropdownItemInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> dropdownMenuRef = ref&lt;<span class="hljs-title class_">DropdownMenuInstance</span>&gt;();
<span class="hljs-keyword">const</span> dropdownItemRef = ref&lt;<span class="hljs-title class_">DropdownItemInstance</span>&gt;();

dropdownMenuRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">close</span>();
dropdownItemRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggle</span>();
</code></pre></div><div class="van-doc-card"><h3 id="option-shu-ju-jie-gou" tabindex="-1">Option 数据结构</h3><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>text</td><td>文字</td><td><em>string</em></td></tr><tr><td>value</td><td>标识符</td><td><em>number | string | boolean</em></td></tr><tr><td>icon</td><td>左侧图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-dropdown-menu-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-shadow</td><td><em>0 2px 12px fade(var(--van-gray-7), 12)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-title-font-size</td><td><em>15px</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-title-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-title-active-text-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-title-disabled-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-title-padding</td><td><em>0 var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-title-line-height</td><td><em>var(--van-line-height-lg)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-option-active-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-dropdown-menu-content-max-height</td><td><em>80%</em></td><td>-</td></tr><tr><td>--van-dropdown-item-z-index</td><td><em>10</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="fu-yuan-su-she-zhi-transform-hou-xia-la-cai-dan-de-wei-zhi-cuo-wu" tabindex="-1">父元素设置 transform 后，下拉菜单的位置错误？</h3><p>把 <code>DropdownMenu</code> 嵌套在 <code>Tabs</code> 等组件内部使用时，可能会遇到下拉菜单位置错误的问题。这是因为在 Chrome 浏览器中，transform 元素内部的 fixed 布局会降级成 absolute 布局，导致下拉菜单的布局异常。</p><p>将 <code>DropdownItem</code> 的 <code>teleport</code> 属性设置为 <code>body</code> 即可避免此问题：</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;body&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;body&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>
</code></pre></div>`,23),d=[e];function o(c,r){return a(),n("div",p,d)}const j=s(l,[["render",o]]);export{j as default};
