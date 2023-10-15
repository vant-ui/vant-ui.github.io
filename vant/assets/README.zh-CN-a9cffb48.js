import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},p=t(`<h1>TreeSelect 分类选择</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于从一组相关联的数据集合中进行选择。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TreeSelect</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TreeSelect</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="dan-xuan-mo-shi" tabindex="-1">单选模式</h3><p><code>item</code> 为分类显示所需的数据，数据格式见下方示例。<code>main-active-index</code> 表示左侧高亮选项的索引，<code>active-id</code> 表示右侧高亮选项的 id。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tree-select</span>
  <span class="hljs-attr">v-model:active-id</span>=<span class="hljs-string">&quot;activeId&quot;</span>
  <span class="hljs-attr">v-model:main-active-index</span>=<span class="hljs-string">&quot;activeIndex&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeId = <span class="hljs-title function_">ref</span>(<span class="hljs-number">1</span>);
    <span class="hljs-keyword">const</span> activeIndex = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> items = [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;浙江&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">1</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;温州&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">2</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;宁波&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
        ],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;江苏&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;南京&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">4</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;无锡&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">5</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;徐州&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">6</span> },
        ],
      },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;福建&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    ];

    <span class="hljs-keyword">return</span> {
      items,
      activeId,
      activeIndex,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="duo-xuan-mo-shi" tabindex="-1">多选模式</h3><p><code>active-id</code> 为数组格式时，可以选中多个右侧选项。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tree-select</span>
  <span class="hljs-attr">v-model:active-id</span>=<span class="hljs-string">&quot;activeIds&quot;</span>
  <span class="hljs-attr">v-model:main-active-index</span>=<span class="hljs-string">&quot;activeIndex&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeId = <span class="hljs-title function_">ref</span>([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]);
    <span class="hljs-keyword">const</span> activeIndex = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> items = [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;浙江&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">1</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;温州&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">2</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;宁波&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
        ],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;江苏&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;南京&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">4</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;无锡&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">5</span> },
          { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;徐州&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">6</span> },
        ],
      },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;福建&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
    ];

    <span class="hljs-keyword">return</span> {
      items,
      activeId,
      activeIndex,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-nei-rong" tabindex="-1">自定义内容</h3><p>通过 <code>content</code> 插槽可以自定义右侧区域的内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tree-select</span>
  <span class="hljs-attr">v-model:main-active-index</span>=<span class="hljs-string">&quot;activeIndex&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;55vw&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>
      <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;activeIndex === 0&quot;</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>
      <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;activeIndex === 1&quot;</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tree-select</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeIndex = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">return</span> {
      activeIndex,
      <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;分组 1&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;分组 2&#39;</span> }],
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="hui-biao-ti-shi" tabindex="-1">徽标提示</h3><p>设置 <code>dot</code> 属性后，会在图标右上角展示一个小红点；设置 <code>badge</code> 属性后，会在图标右上角展示相应的徽标。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tree-select</span>
  <span class="hljs-attr">v-model:main-active-index</span>=<span class="hljs-string">&quot;activeIndex&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;55vw&quot;</span>
  <span class="hljs-attr">:items</span>=<span class="hljs-string">&quot;items&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeIndex = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">return</span> {
      activeIndex,
      <span class="hljs-attr">items</span>: [
        {
          <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;浙江&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">1</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;温州&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">2</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;宁波&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
          ],
          <span class="hljs-attr">dot</span>: <span class="hljs-literal">true</span>,
        },
        {
          <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;江苏&#39;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;南京&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">4</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;无锡&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">5</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;徐州&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">6</span> },
          ],
          <span class="hljs-attr">badge</span>: <span class="hljs-number">5</span>,
        },
      ],
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:main-active-index</td><td>左侧选中项的索引</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>v-model:active-id</td><td>右侧选中项的 id，支持传入数组</td><td><em>number | string |<br>(number | string)[]</em></td><td><code>0</code></td></tr><tr><td>items</td><td>分类显示所需的数据</td><td><em>TreeSelectItem[]</em></td><td><code>[]</code></td></tr><tr><td>height</td><td>高度，默认单位为<code>px</code></td><td><em>number | string</em></td><td><code>300</code></td></tr><tr><td>max</td><td>右侧项最大选中个数</td><td><em>number | string</em></td><td><code>Infinity</code></td></tr><tr><td>selected-icon</td><td>自定义右侧栏选中状态的图标</td><td><em>string</em></td><td><code>success</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click-nav</td><td>点击左侧导航时触发</td><td><em>index: number</em></td></tr><tr><td>click-item</td><td>点击右侧选择项时触发</td><td><em>item: TreeSelectChild</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>nav-text <code>v4.1.0</code></td><td>自定义导航名称</td><td><em>item: TreeSelectChild</em></td></tr><tr><td>content</td><td>自定义右侧区域内容</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="treeselectitem-shu-ju-jie-gou" tabindex="-1">TreeSelectItem 数据结构</h3><p><code>TreeSelectItem</code> 整体为一个数组，数组内包含一系列描述分类的对象，每个分类里，<code>text</code> 表示当前分类的名称，<code>children</code> 表示分类里的可选项。</p><pre><code class="language-js">[
  {
    <span class="hljs-comment">// 导航名称</span>
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;所有城市&#39;</span>,
    <span class="hljs-comment">// 导航名称右上角徽标</span>
    <span class="hljs-attr">badge</span>: <span class="hljs-number">3</span>,
    <span class="hljs-comment">// 是否在导航名称右上角显示小红点</span>
    <span class="hljs-attr">dot</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-comment">// 导航节点额外类名</span>
    <span class="hljs-attr">className</span>: <span class="hljs-string">&#39;my-class&#39;</span>,
    <span class="hljs-comment">// 该导航下所有的可选项</span>
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-comment">// 名称</span>
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;温州&#39;</span>,
        <span class="hljs-comment">// id，作为匹配选中状态的标识符</span>
        <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
        <span class="hljs-comment">// 禁用选项</span>
        <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
      },
    ],
  },
];
</code></pre></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TreeSelectItem</span>, <span class="hljs-title class_">TreeSelectChild</span>, <span class="hljs-title class_">TreeSelectProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-tree-select-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-tree-select-nav-background</td><td><em>var(--van-background)</em></td><td>-</td></tr><tr><td>--van-tree-select-content-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-tree-select-nav-item-padding</td><td><em>14px var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-tree-select-item-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-tree-select-item-active-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-tree-select-item-disabled-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-tree-select-item-selected-size</td><td><em>16px</em></td><td>-</td></tr></tbody></table></div>`,16),c=[p];function d(r,h){return a(),n("div",e,c)}const o=s(l,[["render",d]]);export{o as default};
