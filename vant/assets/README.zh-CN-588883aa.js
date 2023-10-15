import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const e={},l={class:"van-doc-markdown-body"},c=n(`<h1>Circle 环形进度条</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>圆环形的进度条组件，支持进度渐变动画。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Circle</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Circle</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p><code>rate</code> 属性表示进度条的目标进度，<code>v-model:current-rate</code> 表示动画过程中的实时进度。当 <code>rate</code> 发生变化时，<code>v-model:current-rate</code> 会以 <code>speed</code> 的速度变化，直至达到 <code>rate</code> 设定的值。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;30&quot;</span>
  <span class="hljs-attr">:speed</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;text&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, computed } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentRate = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> text = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> currentRate.<span class="hljs-property">value</span>.<span class="hljs-title function_">toFixed</span>(<span class="hljs-number">0</span>) + <span class="hljs-string">&#39;%&#39;</span>);

    <span class="hljs-keyword">return</span> {
      text,
      currentRate,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="kuan-du-ding-zhi" tabindex="-1">宽度定制</h3><p>通过 <code>stroke-width</code> 属性来控制进度条宽度，<code>stroke-width</code> 指的是 SVG 中 <code>path</code> 的宽度，默认值为 <code>40</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">:stroke-width</span>=<span class="hljs-string">&quot;60&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;宽度定制&quot;</span>
/&gt;</span>
</code></pre><p><code>stroke-width</code> 的单位不是 <code>px</code>，如果你想知道 <code>stroke-width</code> 与 <code>px</code> 的换算关系，可以通过如下公式计算：</p><pre><code class="language-js"><span class="hljs-comment">// SVG 的 viewBox 大小</span>
<span class="hljs-keyword">const</span> viewBox = <span class="hljs-number">1000</span> + strokeWidth;

<span class="hljs-comment">// Circle 组件的宽度，默认为 100px</span>
<span class="hljs-keyword">const</span> circleWidth = <span class="hljs-number">100</span>;

<span class="hljs-comment">// 最终渲染出来的进度条宽度（px）</span>
<span class="hljs-keyword">const</span> pxWidth = (strokeWidth * circleWidth) / viewBox;
</code></pre></div><div class="van-doc-card"><h3 id="yan-se-ding-zhi" tabindex="-1">颜色定制</h3><p>通过 <code>color</code> 属性来控制进度条颜色，<code>layer-color</code> 属性来控制轨道颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">layer-color</span>=<span class="hljs-string">&quot;#ebedf0&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;颜色定制&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jian-bian-se" tabindex="-1">渐变色</h3><p><code>color</code> 属性支持传入对象格式来定义渐变色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">:color</span>=<span class="hljs-string">&quot;gradientColor&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;渐变色&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> currentRate = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> gradientColor = {
      <span class="hljs-string">&#39;0%&#39;</span>: <span class="hljs-string">&#39;#3fecff&#39;</span>,
      <span class="hljs-string">&#39;100%&#39;</span>: <span class="hljs-string">&#39;#6149f6&#39;</span>,
    };

    <span class="hljs-keyword">return</span> {
      currentRate,
      gradientColor,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="ni-shi-zhen-fang-xiang" tabindex="-1">逆时针方向</h3><p>将 <code>clockwise</code> 设置为 <code>false</code>，进度会从逆时针方向开始。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">:clockwise</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;逆时针方向&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="da-xiao-ding-zhi" tabindex="-1">大小定制</h3><p>通过 <code>size</code> 属性设置圆环直径。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;120px&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;大小定制&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="qi-shi-wei-zhi" tabindex="-1">起始位置</h3><p>进度条默认从顶部开始，可以通过 <code>start-position</code> 属性设置起始位置。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;左侧&quot;</span>
  <span class="hljs-attr">start-position</span>=<span class="hljs-string">&quot;left&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;右侧&quot;</span>
  <span class="hljs-attr">start-position</span>=<span class="hljs-string">&quot;right&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-circle</span>
  <span class="hljs-attr">v-model:current-rate</span>=<span class="hljs-string">&quot;currentRate&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;底部&quot;</span>
  <span class="hljs-attr">start-position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
/&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:current-rate</td><td>当前进度</td><td><em>number</em></td><td>-</td></tr><tr><td>rate</td><td>目标进度</td><td><em>number | string</em></td><td><code>100</code></td></tr><tr><td>size</td><td>圆环直径，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>100px</code></td></tr><tr><td>color</td><td>进度条颜色，传入对象格式可以定义渐变色</td><td><em>string | object</em></td><td><code>#1989fa</code></td></tr><tr><td>layer-color</td><td>轨道颜色</td><td><em>string</em></td><td><code>white</code></td></tr><tr><td>fill</td><td>填充颜色</td><td><em>string</em></td><td><code>none</code></td></tr><tr><td>speed</td><td>动画速度（单位为 rate/s）</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>text</td><td>文字</td><td><em>string</em></td><td>-</td></tr><tr><td>stroke-width</td><td>进度条宽度</td><td><em>number | string</em></td><td><code>40</code></td></tr><tr><td>stroke-linecap</td><td>进度条端点的形状，可选值为 <code>square</code> <code>butt</code></td><td><em>string</em></td><td><code>round</code></td></tr><tr><td>clockwise</td><td>是否顺时针增加</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>start-position</td><td>进度起始位置，可选值为 <code>left</code>、<code>right</code>、<code>bottom</code></td><td><em>CircleStartPosition</em></td><td><code>top</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义文字内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CircleProps</span>, <span class="hljs-title class_">CircleStartPosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-circle-size</td><td><em>100px</em></td><td>-</td></tr><tr><td>--van-circle-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-circle-layer-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-circle-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-circle-text-font-weight</td><td><em>var(--van-font-bold)</em></td><td>-</td></tr><tr><td>--van-circle-text-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-circle-text-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr></tbody></table></div>`,17),d=[c];function r(p,o){return a(),t("div",l,d)}const j=s(e,[["render",r]]);export{j as default};
