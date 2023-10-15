import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},p=n(`<h1>RollingText 翻滚文本动效</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>文本翻滚动效，可以翻滚数字和其他类型文本。请升级 <code>vant</code> 到 &gt;= 4.6.0 版本来使用该组件。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RollingText</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">RollingText</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>你可以通过 <code>start-num</code> 设置起始数值，<code>target-num</code> 设置目标数值。RollingText 组件会自动开始动画，从起始数值翻滚到目标数值。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;123&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="she-zhi-fan-gun-fang-xiang" tabindex="-1">设置翻滚方向</h3><p>你可以通过 <code>direction</code> 属性设置数字的翻滚方向，默认为向下翻滚，设置为 <code>up</code> 即可向上翻滚。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;432&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;up&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="she-zhi-ge-shu-wei-ting-zhi-shun-xu" tabindex="-1">设置各数位停止顺序</h3><p>你可以通过 <code>stop-order</code> 属性设置动画各个数位的停止先后顺序。默认先停止高位，设置为 <code>rtl</code> 可以先从个位停止。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;54321&quot;</span> <span class="hljs-attr">stop-order</span>=<span class="hljs-string">&quot;rtl&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="fan-zhuan-fei-shu-zi-nei-rong" tabindex="-1">翻转非数字内容</h3><p>你可以使用 <code>text-list</code> 属性设置非数字内容的翻转。组件会从数组的第一项翻转到最后一项，请确保数组长度大于等于 2，以及每一项的长度一致。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:text-list</span>=<span class="hljs-string">&quot;textList&quot;</span> <span class="hljs-attr">:duration</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> textList = <span class="hljs-title function_">ref</span>([
      <span class="hljs-string">&#39;aaaaa&#39;</span>,
      <span class="hljs-string">&#39;bbbbb&#39;</span>,
      <span class="hljs-string">&#39;ccccc&#39;</span>,
      <span class="hljs-string">&#39;ddddd&#39;</span>,
      <span class="hljs-string">&#39;eeeee&#39;</span>,
      <span class="hljs-string">&#39;fffff&#39;</span>,
      <span class="hljs-string">&#39;ggggg&#39;</span>,
    ]);
    <span class="hljs-keyword">return</span> { textList };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yang-shi" tabindex="-1">自定义样式</h3><p>RollingText 组件提供了一些 CSS 变量，你可以覆盖这些变量来自定义样式，也可以直接修改组件的样式。此外，你还可以通过 <code>height</code> 属性设置数字高度。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-rolling-text&quot;</span>
  <span class="hljs-attr">:height</span>=<span class="hljs-string">&quot;54&quot;</span>
  <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;12345&quot;</span>
  <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;54321&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.my-rolling-text</span> {
  <span class="hljs-attr">--van-rolling-text-background</span>: <span class="hljs-number">#1989fa</span>;
  <span class="hljs-attr">--van-rolling-text-color</span>: white;
  <span class="hljs-attr">--van-rolling-text-font-size</span>: <span class="hljs-number">24px</span>;
  <span class="hljs-attr">--van-rolling-text-gap</span>: <span class="hljs-number">6px</span>;
  <span class="hljs-attr">--van-rolling-text-item-border-radius</span>: <span class="hljs-number">5px</span>;
  <span class="hljs-attr">--van-rolling-text-item-width</span>: <span class="hljs-number">40px</span>;
}
</code></pre></div><div class="van-doc-card"><h3 id="shou-dong-kong-zhi" tabindex="-1">手动控制</h3><p>通过 ref 获取到组件实例后，你可以调用 <code>start</code>、<code>reset</code> 方法，<code>start</code> 方法用于开始动画，<code>reset</code> 方法用于重置动画。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;rollingTextRef&quot;</span>
  <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span>
  <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;54321&quot;</span>
  <span class="hljs-attr">:auto-start</span>=<span class="hljs-string">&quot;false&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span> <span class="hljs-attr">clickable</span> <span class="hljs-attr">:column-num</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;play-circle-o&quot;</span> <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;start&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;start&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;replay&quot;</span> <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;reset&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;reset&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> rollingTextRef = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">start</span> = (<span class="hljs-params"></span>) =&gt; {
      rollingTextRef.<span class="hljs-property">value</span>.<span class="hljs-title function_">start</span>();
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">reset</span> = (<span class="hljs-params"></span>) =&gt; {
      rollingTextRef.<span class="hljs-property">value</span>.<span class="hljs-title function_">reset</span>();
    };
    <span class="hljs-keyword">return</span> { rollingTextRef, start, reset };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>start-num</td><td>起始数值</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td>target-num</td><td>目标数值</td><td><em>number</em></td><td>-</td></tr><tr><td>text-list</td><td>内容数组，用于翻转非数字内容</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td>duration</td><td>动画时长，单位为秒</td><td><em>number</em></td><td><code>2</code></td></tr><tr><td>direction</td><td>文本翻滚方向，值为 <code>down</code> 和 <code>up</code></td><td><em>string</em></td><td><code>down</code></td></tr><tr><td>auto-start</td><td>是否自动开始动画</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>stop-order</td><td>各个数位动画停止先后顺序，值为 <code>ltr</code> 和 <code>rtl</code></td><td><em>string</em></td><td><code>ltr</code></td></tr><tr><td>height</td><td>数字高度，单位为 <code>px</code></td><td><em>number</em></td><td><code>40</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 RollingText 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>start</td><td>开始动画</td><td>-</td><td>-</td></tr><tr><td>reset</td><td>重置动画</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">RollingTextProps</span>,
  <span class="hljs-title class_">RollingTextInstance</span>,
  <span class="hljs-title class_">RollingTextDirection</span>,
  <span class="hljs-title class_">RollingTextStopOrder</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>RollingTextInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">RollingTextInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> rollingTextRef = ref&lt;<span class="hljs-title class_">RollingTextInstance</span>&gt;();

rollingTextRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">start</span>();
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-rolling-text-background</td><td><em>inherit</em></td><td>单个数位背景色</td></tr><tr><td>--van-rolling-text-color</td><td><em>var(--van-text-color)</em></td><td>数字颜色</td></tr><tr><td>--van-rolling-text-font-size</td><td><em>var(--van-font-size-md)</em></td><td>字体大小</td></tr><tr><td>--van-rolling-text-gap</td><td><em>0px</em></td><td>数位之间的间隔</td></tr><tr><td>--van-rolling-text-item-width</td><td><em>15px</em></td><td>单个数位宽度</td></tr><tr><td>--van-rolling-text-item-border-radius</td><td><em>0px</em></td><td>单个数位边框圆角</td></tr></tbody></table></div>`,16),d=[p];function c(r,o){return a(),t("div",e,d)}const g=s(l,[["render",c]]);export{g as default};
