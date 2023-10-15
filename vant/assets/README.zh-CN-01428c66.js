import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},p={class:"van-doc-markdown-body"},e=n(`<h1>BackTop 回到顶部</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>返回页面顶部的操作按钮。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BackTop</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">BackTop</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>请滚动右侧的示例页面，当页面滚动 <code>200px</code> 时，右下角会出现返回顶部按钮。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];
    <span class="hljs-keyword">return</span> { list };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-wei-zhi" tabindex="-1">自定义位置</h3><p>通过 <code>right</code> 和 <code>bottom</code> 属性来设置组件距离右侧和底部的位置。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;15vw&quot;</span> <span class="hljs-attr">bottom</span>=<span class="hljs-string">&quot;10vh&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];
    <span class="hljs-keyword">return</span> { list };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-nei-rong" tabindex="-1">自定义内容</h3><p>使用默认插槽来自定义组件展示的内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom&quot;</span>&gt;</span>返回顶部<span class="hljs-tag">&lt;/<span class="hljs-name">van-back-top</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.custom</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
    <span class="hljs-attribute">text-align</span>: center;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];
    <span class="hljs-keyword">return</span> { list };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="she-zhi-gun-dong-mu-biao" tabindex="-1">设置滚动目标</h3><p>可以通过 <code>target</code> 属性来设置触发滚动的目标对象，支持传入选择器或 <code>HTMLElement</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;.container&quot;</span> <span class="hljs-attr">bottom</span>=<span class="hljs-string">&quot;30vh&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.container</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">60vh</span>;
    <span class="hljs-attribute">overflow</span>: auto;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];
    <span class="hljs-keyword">return</span> { list };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="shun-jian-gun-dong" tabindex="-1">瞬间滚动</h3><p>当设置 <code>immediate</code> 属性后，页面滚动的过程不再有过渡效果，而是瞬间滚动到顶部。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">immediate</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>target</td><td>触发滚动的目标对象，支持传入选择器或 DOM 元素，默认最近的父级滚动容器</td><td><em>string | HTMLElement</em></td><td>-</td></tr><tr><td>right</td><td>距离页面右侧的距离，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>30</code></td></tr><tr><td>bottom</td><td>距离页面底部的距离，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>40</code></td></tr><tr><td>offset</td><td>滚动高度达到此参数值时才显示组件</td><td><em>number</em></td><td><code>200</code></td></tr><tr><td>teleport</td><td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td><td><em>string | Element</em></td><td><code>body</code></td></tr><tr><td>immediate <code>v4.0.9</code></td><td>是否瞬间滚动到顶部</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>z-index</td><td>设置组件的 z-index 层级</td><td><em>number | string</em></td><td><code>100</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击组件时触发</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义按钮显示内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">BackTopProps</span>, <span class="hljs-title class_">BackTopThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-back-top-size</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-back-top-icon-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-back-top-right</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-back-top-bottom</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-back-top-z-index</td><td><em>100</em></td><td>-</td></tr><tr><td>--van-back-top-text-color</td><td><em>#fff</em></td><td>-</td></tr><tr><td>--van-back-top-background</td><td><em>var(--van-blue)</em></td><td>-</td></tr></tbody></table></div>`,16),c=[e];function d(o,r){return a(),t("div",p,c)}const j=s(l,[["render",d]]);export{j as default};
