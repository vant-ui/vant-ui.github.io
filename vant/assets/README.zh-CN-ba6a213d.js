import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const l={},e={class:"van-doc-markdown-body"},d=n(`<h1>NoticeBar 通知栏</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于循环播放展示一组消息通知。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NoticeBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NoticeBar</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>text</code> 属性设置通知栏的内容，通过 <code>left-icon</code> 属性设置通知栏左侧的图标。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span>
  <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;volume-o&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="gun-dong-bo-fang" tabindex="-1">滚动播放</h3><p>通知栏的内容长度溢出时会自动开启滚动播放，通过 <code>scrollable</code> 属性可以控制该行为。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">scrollable</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;米袋虽空——樱花开哉！&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span>
  <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="duo-xing-zhan-shi" tabindex="-1">多行展示</h3><p>文字较长时，可以通过设置 <code>wrapable</code> 属性来开启多行展示。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span>
  <span class="hljs-attr">wrapable</span>
  <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="tong-zhi-lan-mo-shi" tabindex="-1">通知栏模式</h3><p>通知栏支持 <code>closeable</code> 和 <code>link</code> 两种模式。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- closeable 模式，在右侧显示关闭按钮 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;closeable&quot;</span>&gt;</span>米袋虽空——樱花开哉！<span class="hljs-tag">&lt;/<span class="hljs-name">van-notice-bar</span>&gt;</span>

<span class="hljs-comment">&lt;!-- link 模式，在右侧显示链接箭头 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;link&quot;</span>&gt;</span>米袋虽空——樱花开哉！<span class="hljs-tag">&lt;/<span class="hljs-name">van-notice-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yang-shi" tabindex="-1">自定义样式</h3><p>通过 <code>color</code> 属性设置文本颜色，通过 <code>background</code> 属性设置背景色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#ecf9ff&quot;</span> <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;info-o&quot;</span>&gt;</span>
  米袋虽空——樱花开哉！
<span class="hljs-tag">&lt;/<span class="hljs-name">van-notice-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="chui-zhi-gun-dong" tabindex="-1">垂直滚动</h3><p>搭配 NoticeBar 和 Swipe 组件，可以实现垂直滚动的效果。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;volume-o&quot;</span> <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span>
    <span class="hljs-attr">vertical</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-swipe&quot;</span>
    <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;3000&quot;</span>
    <span class="hljs-attr">:touchable</span>=<span class="hljs-string">&quot;false&quot;</span>
    <span class="hljs-attr">:show-indicators</span>=<span class="hljs-string">&quot;false&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>明月直入，无心可猜。<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>仙人抚我顶，结发受长生。<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>今人不见古时月，今月曾经照古人。<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-notice-bar</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.notice-swipe</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">40px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>mode</td><td>通知栏模式，可选值为 <code>closeable</code> <code>link</code></td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>text</td><td>通知文本内容</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>color</td><td>通知文本颜色</td><td><em>string</em></td><td><code>#ed6a0c</code></td></tr><tr><td>background</td><td>滚动条背景</td><td><em>string</em></td><td><code>#fffbe8</code></td></tr><tr><td>left-icon</td><td>左侧图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td>-</td></tr><tr><td>delay</td><td>动画延迟时间 (s)</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>speed</td><td>滚动速率 (px/s)</td><td><em>number | string</em></td><td><code>60</code></td></tr><tr><td>scrollable</td><td>是否开启滚动播放，内容长度溢出时默认开启</td><td><em>boolean</em></td><td>-</td></tr><tr><td>wrapable</td><td>是否开启文本换行，只在禁用滚动时生效</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击通知栏时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>close</td><td>关闭通知栏时触发</td><td><em>event: MouseEvent</em></td></tr><tr><td>replay</td><td>每当滚动栏重新开始滚动时触发</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3><p>通过 ref 可以获取到 NoticeBar 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>reset</td><td>重置通知栏到初始状态</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">NoticeBarMode</span>, <span class="hljs-title class_">NoticeBarProps</span>, <span class="hljs-title class_">NoticeBarInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>NoticeBarInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">NoticeBarInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> noticeBarRef = ref&lt;<span class="hljs-title class_">NoticeBarInstance</span>&gt;();

noticeBarRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">reset</span>();
</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>内容</th></tr></thead><tbody><tr><td>default</td><td>通知文本内容</td></tr><tr><td>left-icon</td><td>自定义左侧图标</td></tr><tr><td>right-icon</td><td>自定义右侧图标</td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-notice-bar-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-notice-bar-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-notice-bar-wrapable-padding</td><td><em>var(--van-padding-xs) var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-notice-bar-text-color</td><td><em>var(--van-orange-dark)</em></td><td>-</td></tr><tr><td>--van-notice-bar-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-notice-bar-line-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-notice-bar-background</td><td><em>var(--van-orange-light)</em></td><td>-</td></tr><tr><td>--van-notice-bar-icon-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-notice-bar-icon-min-width</td><td><em>24px</em></td><td>-</td></tr></tbody></table></div>`,18),c=[d];function p(o,r){return a(),t("div",e,c)}const g=s(l,[["render",p]]);export{g as default};
