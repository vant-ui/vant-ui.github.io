import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},e=n(`<h1>Collapse 折叠面板</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Collapse</span>, <span class="hljs-title class_">CollapseItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Collapse</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CollapseItem</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>v-model</code> 控制展开的面板列表，<code>activeNames</code> 为数组格式。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeNames&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    代码是写出来给人看的，附带能在机器上运行。
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    技术无非就是那些开发它的人的共同灵魂。
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题3&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
    在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeNames = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;1&#39;</span>]);
    <span class="hljs-keyword">return</span> { activeNames };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shou-feng-qin" tabindex="-1">手风琴</h3><p>通过 <code>accordion</code> 可以设置为手风琴模式，最多展开一个面板，此时 <code>activeName</code> 为字符串格式。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeName&quot;</span> <span class="hljs-attr">accordion</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    代码是写出来给人看的，附带能在机器上运行。
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    技术无非就是那些开发它的人的共同灵魂。
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题3&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
    在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeName = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
    <span class="hljs-keyword">return</span> { activeName };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">禁用状态</h3><p>通过 <code>disabled</code> 属性来禁用单个面板。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeNames&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    代码是写出来给人看的，附带能在机器上运行。
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
    技术无非就是那些开发它的人的共同灵魂。
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题3&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
    在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-biao-ti-nei-rong" tabindex="-1">自定义标题内容</h3><p>通过 <code>title</code> 插槽可以自定义标题栏的内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeNames&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>标题1 <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;question-o&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    代码是写出来给人看的，附带能在机器上运行。
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span>&gt;</span>
    技术无非就是那些开发它的人的共同灵魂。
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeNames = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;1&#39;</span>]);
    <span class="hljs-keyword">return</span> { activeNames };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="quan-bu-zhan-kai-yu-quan-bu-qie-huan" tabindex="-1">全部展开与全部切换</h3><p>通过 <code>Collapse</code> 实例上的 <code>toggleAll</code> 方法可以实现全部展开与全部切换。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeNames&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    代码是写出来给人看的，附带能在机器上运行。
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    技术无非就是那些开发它的人的共同灵魂。
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题3&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
    在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openAll&quot;</span>&gt;</span>全部展开<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleAll&quot;</span>&gt;</span>全部切换<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeNames = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;1&#39;</span>]);
    <span class="hljs-keyword">const</span> collapse = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">openAll</span> = (<span class="hljs-params"></span>) =&gt; {
      collapse.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);
    }
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggleAll</span> = (<span class="hljs-params"></span>) =&gt; {
      collapse.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>();
    },

    <span class="hljs-keyword">return</span> {
      activeNames,
      openAll,
      toggleAll,
      collapse,
    };
  },
};
</code></pre><blockquote><p>Tips: 手风琴模式下无法使用 toggleAll 方法。</p></blockquote></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="collapse-props" tabindex="-1">Collapse Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前展开面板的 name</td><td>手风琴模式：<em>number | string</em><br>非手风琴模式：<em>(number | string)[]</em></td><td>-</td></tr><tr><td>accordion</td><td>是否开启手风琴模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>border</td><td>是否显示外边框</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="collapse-events" tabindex="-1">Collapse Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换面板时触发</td><td>activeNames: 类型与 v-model 绑定的值一致</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="collapseitem-props" tabindex="-1">CollapseItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>唯一标识符，默认为索引值</td><td><em>number | string</em></td><td><code>index</code></td></tr><tr><td>icon</td><td>标题栏左侧图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td>-</td></tr><tr><td>size</td><td>标题栏大小，可选值为 <code>large</code></td><td><em>string</em></td><td>-</td></tr><tr><td>title</td><td>标题栏左侧内容</td><td><em>number | string</em></td><td>-</td></tr><tr><td>value</td><td>标题栏右侧内容</td><td><em>number | string</em></td><td>-</td></tr><tr><td>label</td><td>标题栏描述信息</td><td><em>number | string</em></td><td>-</td></tr><tr><td>border</td><td>是否显示内边框</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>is-link</td><td>是否展示标题栏右侧箭头并开启点击反馈</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>disabled</td><td>是否禁用面板</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否为只读状态，只读状态下无法操作面板</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lazy-render</td><td>是否在首次展开时才渲染面板内容</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>title-class</td><td>左侧标题额外类名</td><td><em>string</em></td><td>-</td></tr><tr><td>value-class</td><td>右侧内容额外类名</td><td><em>string</em></td><td>-</td></tr><tr><td>label-class</td><td>描述信息额外类名</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="collapse-fang-fa" tabindex="-1">Collapse 方法</h3><p>通过 ref 可以获取到 CollapseItem 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>toggleAll</td><td>切换所有面板展开状态，传 <code>true</code> 为全部展开，<code>false</code> 为全部收起，不传参为全部切换</td><td><em>options?: boolean | object</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="toggleall-fang-fa-shi-li" tabindex="-1">toggleAll 方法示例</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> type { <span class="hljs-title class_">CollapseInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> collapseRef = ref&lt;<span class="hljs-title class_">CollapseInstance</span>&gt;();

<span class="hljs-comment">// 全部切换</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>();
<span class="hljs-comment">// 全部展开</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);
<span class="hljs-comment">// 全部收起</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">false</span>);

<span class="hljs-comment">// 全部全部切换，并跳过禁用的复选框</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>({
  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,
});
<span class="hljs-comment">// 全部选中，并跳过禁用的复选框</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>({
  <span class="hljs-attr">expanded</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="collapseitem-fang-fa" tabindex="-1">CollapseItem 方法</h3><p>通过 ref 可以获取到 CollapseItem 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>toggle</td><td>切换面板展开状态，传 <code>true</code> 为展开，<code>false</code> 为收起，不传参为切换</td><td><em>expand?: boolean</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">CollapseProps</span>,
  <span class="hljs-title class_">CollapseItemProps</span>,
  <span class="hljs-title class_">CollapseItemInstance</span>,
  <span class="hljs-title class_">CollapseToggleAllOptions</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>CollapseItemInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CollapseItemInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> collapseItemRef = ref&lt;<span class="hljs-title class_">CollapseItemInstance</span>&gt;();

collapseItemRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggle</span>();
</code></pre></div><div class="van-doc-card"><h3 id="collapseitem-slots" tabindex="-1">CollapseItem Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>面板内容</td></tr><tr><td>title</td><td>自定义标题栏左侧内容</td></tr><tr><td>value</td><td>自定义标题栏右侧内容</td></tr><tr><td>label</td><td>自定义标题栏描述信息</td></tr><tr><td>icon</td><td>自定义标题栏左侧图标</td></tr><tr><td>right-icon</td><td>自定义标题栏右侧图标</td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-collapse-item-duration</td><td><em>var(--van-duration-base)</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-padding</td><td><em>var(--van-padding-sm) var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-line-height</td><td><em>1.5</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-collapse-item-title-disabled-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr></tbody></table></div>`,20),c=[e];function d(o,r){return a(),t("div",p,c)}const j=s(l,[["render",d]]);export{j as default};
