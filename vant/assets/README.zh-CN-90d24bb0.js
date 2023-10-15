import{_ as s}from"./locales-be796722.js";import{o as t,a,z as n}from"./vue-libs-19c20d28.js";const d={},e={class:"van-doc-markdown-body"},l=n(`<h1>ActionSheet 动作面板</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>底部弹起的模态面板，包含与当前情境相关的多个选项。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ActionSheet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionSheet</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>动作面板通过 <code>actions</code> 属性来定义选项，<code>actions</code> 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象格式见文档下方表格。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;基础用法&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;选项一&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;选项二&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;选项三&#39;</span> },
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">item</span>) =&gt; {
      <span class="hljs-comment">// 默认情况下点击选项时不会自动收起</span>
      <span class="hljs-comment">// 可以通过 close-on-click-action 属性开启自动收起</span>
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      <span class="hljs-title function_">showToast</span>(item.<span class="hljs-property">name</span>);
    };

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      onSelect,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zhan-shi-qu-xiao-an-niu" tabindex="-1">展示取消按钮</h3><p>设置 <code>cancel-text</code> 属性后，会在底部展示取消按钮，点击后关闭当前面板并触发 <code>cancel</code> 事件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>
  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;取消&quot;</span>
  <span class="hljs-attr">close-on-click-action</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;选项一&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;选项二&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;选项三&#39;</span> },
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;取消&#39;</span>);

    <span class="hljs-keyword">return</span> {
      show,
      actions,
      onCancel,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zhan-shi-miao-shu-xin-xi" tabindex="-1">展示描述信息</h3><p>通过 <code>description</code> 可以在菜单顶部显示描述信息，通过选项的 <code>subname</code> 属性可以在选项文字的右侧展示描述信息。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>
  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;取消&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;这是一段描述信息&quot;</span>
  <span class="hljs-attr">close-on-click-action</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;选项一&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;选项二&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;选项三&#39;</span>, <span class="hljs-attr">subname</span>: <span class="hljs-string">&#39;描述信息&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> {
      show,
      actions,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="xuan-xiang-zhuang-tai" tabindex="-1">选项状态</h3><p>可以通过 <code>loading</code> 和 <code>disabled</code> 将选项设置为加载状态或禁用状态，或者通过<code>color</code>设置选项的颜色</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">:actions</span>=<span class="hljs-string">&quot;actions&quot;</span>
  <span class="hljs-attr">cancel-text</span>=<span class="hljs-string">&quot;取消&quot;</span>
  <span class="hljs-attr">close-on-click-action</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> actions = [
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;着色选项&#39;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#ee0a24&#39;</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;禁用选项&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;加载选项&#39;</span>, <span class="hljs-attr">loading</span>: <span class="hljs-literal">true</span> },
    ];

    <span class="hljs-keyword">return</span> {
      show,
      actions,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-mian-ban" tabindex="-1">自定义面板</h3><p>通过插槽可以自定义面板的展示内容，同时可以使用<code>title</code>属性展示标题栏</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标题&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>内容<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-sheet</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.content</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">16px</span> <span class="hljs-number">16px</span> <span class="hljs-number">160px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:show</td><td>是否显示动作面板</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>actions</td><td>面板选项列表</td><td><em>ActionSheetAction[]</em></td><td><code>[]</code></td></tr><tr><td>title</td><td>顶部标题</td><td><em>string</em></td><td>-</td></tr><tr><td>cancel-text</td><td>取消按钮文字</td><td><em>string</em></td><td>-</td></tr><tr><td>description</td><td>选项上方的描述信息</td><td><em>string</em></td><td>-</td></tr><tr><td>closeable</td><td>是否显示关闭图标</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-icon</td><td>关闭图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td><code>cross</code></td></tr><tr><td>duration</td><td>动画时长，单位秒，设置为 0 可以禁用动画</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>z-index</td><td>将面板的 z-index 层级设置为一个固定值</td><td><em>number | string</em></td><td><code>2000+</code></td></tr><tr><td>round</td><td>是否显示圆角</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlay</td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>overlay-class</td><td>自定义遮罩层类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlay-style</td><td>自定义遮罩层样式</td><td><em>object</em></td><td>-</td></tr><tr><td>lock-scroll</td><td>是否锁定背景滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-render</td><td>是否在显示弹层时才渲染节点</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-popstate</td><td>是否在页面回退时自动关闭</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-click-action</td><td>是否在点击选项后关闭</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>close-on-click-overlay</td><td>是否在点击遮罩层后关闭</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>safe-area-inset-bottom</td><td>是否开启<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">底部安全区适配</a></td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>teleport</td><td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td><td><em>string | Element</em></td><td>-</td></tr><tr><td>before-close</td><td>关闭前的回调函数，返回 <code>false</code> 可阻止关闭，支持返回 Promise</td><td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="action-shu-ju-jie-gou" tabindex="-1">Action 数据结构</h3><p><code>actions</code> 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：</p><table><thead><tr><th>键名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>name</td><td>标题</td><td><em>string</em></td></tr><tr><td>subname</td><td>二级标题</td><td><em>string</em></td></tr><tr><td>color</td><td>选项文字颜色</td><td><em>string</em></td></tr><tr><td>className</td><td>为对应列添加额外的 class</td><td><em>string | Array | object</em></td></tr><tr><td>loading</td><td>是否为加载状态</td><td><em>boolean</em></td></tr><tr><td>disabled</td><td>是否为禁用状态</td><td><em>boolean</em></td></tr><tr><td>callback</td><td>点击时触发的回调函数</td><td><em>action: ActionSheetAction</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>点击选项时触发，禁用或加载状态下不会触发</td><td><em>action: ActionSheetAction, index: number</em></td></tr><tr><td>cancel</td><td>点击取消按钮时触发</td><td>-</td></tr><tr><td>open</td><td>打开面板时触发</td><td>-</td></tr><tr><td>close</td><td>关闭面板时触发</td><td>-</td></tr><tr><td>opened</td><td>打开面板且动画结束后触发</td><td>-</td></tr><tr><td>closed</td><td>关闭面板且动画结束后触发</td><td>-</td></tr><tr><td>click-overlay</td><td>点击遮罩层时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>自定义面板的展示内容</td><td>-</td></tr><tr><td>description</td><td>自定义描述文案</td><td>-</td></tr><tr><td>cancel</td><td>自定义取消按钮内容</td><td>-</td></tr><tr><td>action</td><td>自定义选项内容</td><td><em>{ action: ActionSheetAction, index: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ActionSheetProps</span>, <span class="hljs-title class_">ActionSheetAction</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-action-sheet-max-height</td><td><em>80%</em></td><td>-</td></tr><tr><td>--van-action-sheet-header-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-action-sheet-header-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-action-sheet-description-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-action-sheet-description-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-action-sheet-description-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-line-height</td><td><em>var(--van-line-height-lg)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-action-sheet-item-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-action-sheet-subname-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-action-sheet-subname-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-action-sheet-subname-line-height</td><td><em>var(--van-line-height-sm)</em></td><td>-</td></tr><tr><td>--van-action-sheet-close-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-action-sheet-close-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-action-sheet-close-icon-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-action-sheet-cancel-text-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-action-sheet-cancel-padding-top</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-action-sheet-cancel-padding-color</td><td><em>var(--van-background)</em></td><td>-</td></tr><tr><td>--van-action-sheet-loading-icon-size</td><td><em>22px</em></td><td>-</td></tr></tbody></table></div>`,17),c=[l];function o(p,r){return t(),a("div",e,c)}const m=s(d,[["render",o]]);export{m as default};
