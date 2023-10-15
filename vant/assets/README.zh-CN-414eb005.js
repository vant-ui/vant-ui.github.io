import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},d=n(`<h1>FloatingBubble 浮动气泡</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>悬浮在页面边缘的可点击气泡。请升级 <code>vant</code> 到 &gt;= 4.6.0 版本来使用该组件。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FloatingBubble</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">FloatingBubble</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>浮动气泡默认展示在右下角，并允许在 y 轴方向上下拖拽，你可以通过 <code>icon</code> 属性设置气泡的图标。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-bubble</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClick&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;点击气泡&#39;</span>);
    };
    <span class="hljs-keyword">return</span> { onClick };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-you-tuo-zhuai-he-ci-xi" tabindex="-1">自由拖拽和磁吸</h3><p>允许 x 和 y 轴方向拖拽，吸附到 x 轴方向最近一边。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-bubble</span>
  <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;xy&quot;</span>
  <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat&quot;</span>
  <span class="hljs-attr">magnetic</span>=<span class="hljs-string">&quot;x&quot;</span>
  @<span class="hljs-attr">offset-change</span>=<span class="hljs-string">&quot;onOffsetChange&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onOffsetChange</span> = (<span class="hljs-params">offset</span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">\`x: <span class="hljs-subst">\${offset.x.toFixed(<span class="hljs-number">0</span>)}</span>, y: <span class="hljs-subst">\${offset.y.toFixed(<span class="hljs-number">0</span>)}</span>\`</span>);
    };
    <span class="hljs-keyword">return</span> { onOffsetChange };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shuang-xiang-bang-ding" tabindex="-1">双向绑定</h3><p>使用 <code>v-model:offset</code> 控制 FloatingBubble 的位置。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-bubble</span> <span class="hljs-attr">v-model:offset</span>=<span class="hljs-string">&quot;offset&quot;</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;xy&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> offset = <span class="hljs-title function_">ref</span>({ <span class="hljs-attr">x</span>: <span class="hljs-number">200</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">400</span> });
    <span class="hljs-keyword">return</span> { offset };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:offset</td><td>控制气泡位置</td><td><em>OffsetType</em></td><td><code>默认右下角坐标</code></td></tr><tr><td>axis</td><td>拖拽的方向，<code>xy</code> 代表自由拖拽，<code>lock</code> 代表禁止拖拽</td><td><em>&#39;x&#39; | &#39;y&#39; | &#39;xy&#39; | &#39;lock&#39;</em></td><td><code>y</code></td></tr><tr><td>magnetic</td><td>自动磁吸的方向</td><td><em>&#39;x&#39; | &#39;y&#39;</em></td><td>-</td></tr><tr><td>icon</td><td>气泡图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td>-</td></tr><tr><td>gap</td><td>气泡与窗口的最小间距，单位为 <code>px</code></td><td><em>number</em></td><td><code>24</code></td></tr><tr><td>teleport</td><td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td><td><em>string | Element</em></td><td><code>body</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击组件时触发</td><td><em>MouseEvent</em></td></tr><tr><td>offset-change</td><td>由用户拖拽导致位置改变后触发</td><td><em>{x: string, y: string}</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义气泡显示内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">FloatingBubbleProps</span>,
  <span class="hljs-title class_">FloatingBubbleAxis</span>,
  <span class="hljs-title class_">FloatingBubbleMagnetic</span>,
  <span class="hljs-title class_">FloatingBubbleOffset</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-floating-bubble-size</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-floating-bubble-initial-gap</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-floating-bubble-icon-size</td><td><em>28px</em></td><td>-</td></tr><tr><td>--van-floating-bubble-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-floating-bubble-color</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-floating-bubble-z-index</td><td><em>999</em></td><td>-</td></tr><tr><td>--van-floating-bubble-border-radius</td><td><em>--van-floating-bubble-border-radius</em></td><td>-</td></tr></tbody></table></div>`,14),p=[d];function o(c,r){return a(),t("div",e,p)}const b=s(l,[["render",o]]);export{b as default};
