import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},e=t(`<h1>Popover 气泡弹出框</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>弹出式的气泡菜单。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Popover</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Popover</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>当 Popover 弹出时，会基于 <code>reference</code> 插槽的内容进行定位。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>浅色风格<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-comment">// 通过 actions 属性来定义菜单选项</span>
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项一&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项二&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项三&#39;</span> },
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">action</span>) =&gt; <span class="hljs-title function_">showToast</span>(action.<span class="hljs-property">text</span>);

    <span class="hljs-keyword">return</span> {
      actions,
      onSelect,
      showPopover,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shen-se-feng-ge" tabindex="-1">深色风格</h3><p>Popover 支持浅色和深色两种风格，默认为浅色风格，将 <code>theme</code> 属性设置为 <code>dark</code> 可切换为深色风格。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>深色风格<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项一&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项二&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项三&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      actions,
      showPopover,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shui-ping-pai-lie" tabindex="-1">水平排列</h3><p>将 <code>actions-direction</code> 属性设置为 <code>horizontal</code> 后，菜单选项会变成水平排列。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span>
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>
  <span class="hljs-attr">actions-direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>水平排列<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项一&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项二&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项三&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      actions,
      showPopover,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="dan-chu-wei-zhi" tabindex="-1">弹出位置</h3><p>通过 <code>placement</code> 属性来控制气泡的弹出位置。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span> /&gt;</span>
</code></pre><p><code>placement</code> 支持以下值：</p><pre><code class="language-bash">top           <span class="hljs-comment"># 顶部中间位置</span>
top-start     <span class="hljs-comment"># 顶部左侧位置</span>
top-end       <span class="hljs-comment"># 顶部右侧位置</span>
left          <span class="hljs-comment"># 左侧中间位置</span>
left-start    <span class="hljs-comment"># 左侧上方位置</span>
left-end      <span class="hljs-comment"># 左侧下方位置</span>
right         <span class="hljs-comment"># 右侧中间位置</span>
right-start   <span class="hljs-comment"># 右侧上方位置</span>
right-end     <span class="hljs-comment"># 右侧下方位置</span>
bottom        <span class="hljs-comment"># 底部中间位置</span>
bottom-start  <span class="hljs-comment"># 底部左侧位置</span>
bottom-end    <span class="hljs-comment"># 底部右侧位置</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhan-shi-tu-biao" tabindex="-1">展示图标</h3><p>在 <code>actions</code> 数组中，可以通过 <code>icon</code> 字段来定义选项的图标，支持传入图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>展示图标<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项一&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;add-o&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项二&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;music-o&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项三&#39;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;more-o&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      actions,
      showPopover,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-xuan-xiang" tabindex="-1">禁用选项</h3><p>在 <code>actions</code> 数组中，可以通过 <code>disabled</code> 字段来禁用某个选项。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>禁用选项<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项一&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项二&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项三&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      actions,
      showPopover,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-nei-rong" tabindex="-1">自定义内容</h3><p>通过默认插槽，可以在 Popover 内部放置任意内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPopover&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span>
    <span class="hljs-attr">square</span>
    <span class="hljs-attr">clickable</span>
    <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span>
    <span class="hljs-attr">column-num</span>=<span class="hljs-string">&quot;3&quot;</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 240px;&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in 6&quot;</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>
      <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;选项&quot;</span>
      <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPopover = false&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>自定义内容<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> showPopover = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> { showPopover };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="fei-shou-kong-mo-shi" tabindex="-1">非受控模式</h3><p>你可以把 Popover 当做受控组件或非受控组件使用：</p><ul><li>当绑定 <code>v-model:show</code> 时，Popover 为受控组件，此时组件的显示完全由 <code>v-model:show</code> 的值决定。</li><li>当未绑定 <code>v-model:show</code> 时，Popover 为非受控组件，此时你可以通过 <code>show</code> 属性传入一个默认值，组件值的显示由组件自身控制。</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popover</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top-start&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">reference</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>非受控模式<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popover</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项一&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项二&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;选项三&#39;</span> },
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">action</span>) =&gt; <span class="hljs-title function_">showToast</span>(action.<span class="hljs-property">text</span>);
    <span class="hljs-keyword">return</span> {
      actions,
      onSelect,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:show</td><td>是否展示气泡弹出层</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>actions</td><td>选项列表</td><td><em>PopoverAction[]</em></td><td><code>[]</code></td></tr><tr><td>actions-direction <code>v4.4.1</code></td><td>选项列表的排列方向，可选值为 <code>horizontal</code></td><td><em>PopoverActionsDirection</em></td><td><code>vertical</code></td></tr><tr><td>placement</td><td>弹出位置</td><td><em>PopoverPlacement</em></td><td><code>bottom</code></td></tr><tr><td>theme</td><td>主题风格，可选值为 <code>dark</code></td><td><em>PopoverTheme</em></td><td><code>light</code></td></tr><tr><td>trigger</td><td>触发方式，可选值为 <code>manual</code></td><td><em>PopoverTrigger</em></td><td><code>click</code></td></tr><tr><td>duration</td><td>动画时长，单位秒，设置为 0 可以禁用动画</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>offset</td><td>出现位置的偏移量</td><td><em>[number, number]</em></td><td><code>[0, 8]</code></td></tr><tr><td>overlay</td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>overlay-class</td><td>自定义遮罩层类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlay-style</td><td>自定义遮罩层样式</td><td><em>object</em></td><td>-</td></tr><tr><td>show-arrow</td><td>是否展示小箭头</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-action</td><td>是否在点击选项后关闭</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-outside</td><td>是否在点击外部元素后关闭菜单</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-overlay</td><td>是否在点击遮罩层后关闭菜单</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>teleport</td><td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td><td><em>string | Element</em></td><td><code>body</code></td></tr><tr><td>icon-prefix</td><td>图标类名前缀，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">class-prefix 属性</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="popoveraction-shu-ju-jie-gou" tabindex="-1">PopoverAction 数据结构</h3><p><code>actions</code> 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：</p><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>text</td><td>选项文字</td><td><em>string</em></td></tr><tr><td>icon</td><td>文字左侧的图标，支持传入图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td></tr><tr><td>color</td><td>选项文字颜色</td><td><em>string</em></td></tr><tr><td>disabled</td><td>是否为禁用状态</td><td><em>boolean</em></td></tr><tr><td>className</td><td>为对应选项添加额外的类名</td><td><em>string | Array | object</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>点击选项时触发</td><td><em>action: PopoverAction, index: number</em></td></tr><tr><td>open</td><td>打开菜单时触发</td><td>-</td></tr><tr><td>close</td><td>关闭菜单时触发</td><td>-</td></tr><tr><td>opened</td><td>打开菜单且动画结束后触发</td><td>-</td></tr><tr><td>closed</td><td>关闭菜单且动画结束后触发</td><td>-</td></tr><tr><td>click-overlay</td><td>点击遮罩层时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>自定义菜单内容</td><td>-</td></tr><tr><td>reference</td><td>触发 Popover 显示的元素内容</td><td>-</td></tr><tr><td>action</td><td>自定义选项内容</td><td><em>{ action: PopoverAction, index: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">PopoverProps</span>,
  <span class="hljs-title class_">PopoverTheme</span>,
  <span class="hljs-title class_">PopoverAction</span>,
  <span class="hljs-title class_">PopoverActionsDirection</span>,
  <span class="hljs-title class_">PopoverTrigger</span>,
  <span class="hljs-title class_">PopoverPlacement</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-popover-arrow-size</td><td><em>6px</em></td><td>-</td></tr><tr><td>--van-popover-radius</td><td><em>var(--van-radius-lg)</em></td><td>-</td></tr><tr><td>--van-popover-action-width</td><td><em>128px</em></td><td>-</td></tr><tr><td>--van-popover-action-height</td><td><em>44px</em></td><td>-</td></tr><tr><td>--van-popover-action-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-popover-action-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-popover-action-icon-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-popover-horizontal-action-height</td><td><em>34px</em></td><td>-</td></tr><tr><td>--van-popover-horizontal-action-icon-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-popover-light-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-popover-light-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-popover-light-action-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-popover-dark-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-popover-dark-background</td><td><em>#4a4a4a</em></td><td>-</td></tr><tr><td>--van-popover-dark-action-disabled-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="popover-de-dian-ji-shi-jian-wu-fa-zheng-que-chu-fa" tabindex="-1">Popover 的点击事件无法正确触发？</h3><p>这种情况通常是由于项目中引入了 <code>fastclick</code> 库导致的。建议移除 <code>fastclick</code>，或者配置 <code>fastclick</code> 的 <a href="https://github.com/ftlabs/fastclick#advanced" target="_blank">ignore 规则</a>。</p></div>`,22),o=[e];function c(d,r){return a(),n("div",p,o)}const j=s(l,[["render",c]]);export{j as default};
