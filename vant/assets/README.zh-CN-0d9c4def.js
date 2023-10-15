import{_ as s}from"./locales-be796722.js";import{o as a,a as n,z as t}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},c=t(`<h1>Badge 徽标</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>在右上角展示徽标数字或小红点。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Badge</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Badge</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>设置 <code>content</code> 属性后，Badge 会在子元素的右上角显示对应的徽标，也可以通过 <code>dot</code> 来显示小红点。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;Hot&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">dot</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.child</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#f2f3f5</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zui-da-zhi" tabindex="-1">最大值</h3><p>设置 <code>max</code> 属性后，当 <code>content</code> 的数值超过最大值时，会自动显示为 <code>{max}+</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;20&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;20&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;200&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;99&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h3><p>通过 <code>color</code> 属性来设置徽标的颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">dot</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-hui-biao-nei-rong" tabindex="-1">自定义徽标内容</h3><p>通过 <code>content</code> 插槽可以自定义徽标的内容，比如插入一个图标。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;badge-icon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;cross&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;badge-icon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;down&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;badge-icon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.badge-icon</span> {
  <span class="hljs-attribute">display</span>: block;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">10px</span>;
  <span class="hljs-attribute">line-height</span>: <span class="hljs-number">16px</span>;
}
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-hui-biao-wei-zhi" tabindex="-1">自定义徽标位置</h3><p>通过 <code>position</code> 属性来设置徽标的位置。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top-left&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom-left&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom-right&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;child&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-badge</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="du-li-zhan-shi" tabindex="-1">独立展示</h3><p>当 Badge 没有子元素时，会作为一个独立的元素进行展示。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-badge</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;200&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;99&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>徽标内容</td><td><em>number | string</em></td><td>-</td></tr><tr><td>color</td><td>徽标背景颜色</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td>dot</td><td>是否展示为小红点</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>max</td><td>最大值，超过最大值会显示 <code>{max}+</code>，仅当 content 为数字时有效</td><td><em>number | string</em></td><td>-</td></tr><tr><td>offset</td><td>设置徽标的偏移量，数组的两项分别对应水平向右和垂直向下方向的偏移量，默认单位为 <code>px</code></td><td><em>[number | string, number | string]</em></td><td>-</td></tr><tr><td>show-zero</td><td>当 content 为数字 0 或字符串 &#39;0&#39; 时，是否展示徽标</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>position</td><td>徽标位置，可选值为 <code>top-left</code> <code>bottom-left</code> <code>bottom-right</code></td><td><em>string</em></td><td><code>top-right</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>徽标包裹的子元素</td></tr><tr><td>content</td><td>自定义徽标内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">BadgeProps</span>, <span class="hljs-title class_">BadgePosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-badge-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-badge-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-badge-padding</td><td><em>0 3px</em></td><td>-</td></tr><tr><td>--van-badge-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-badge-font-weight</td><td><em>var(--van-font-bold)</em></td><td>-</td></tr><tr><td>--van-badge-border-width</td><td><em>var(--van-border-width)</em></td><td>-</td></tr><tr><td>--van-badge-background</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-badge-dot-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-badge-dot-size</td><td><em>8px</em></td><td>-</td></tr><tr><td>--van-badge-font</td><td><em>-apple-system-font, Helvetica Neue, Arial, sans-serif</em></td><td>-</td></tr></tbody></table></div>`,16),e=[c];function d(h,o){return a(),n("div",p,e)}const j=s(l,[["render",d]]);export{j as default};
