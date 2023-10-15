import{_ as s}from"./locales-be796722.js";import{o as t,a,z as n}from"./vue-libs-19c20d28.js";const e={},l={class:"van-doc-markdown-body"},d=n(`<h1>NoticeBar</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to display a group of message notifications in a continuons loop.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NoticeBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NoticeBar</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Technology is the common soul of the people who developed it.&quot;</span>
  <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;volume-o&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="scrollable" tabindex="-1">Scrollable</h3><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Enable scroll when text is short --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">scrollable</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Short Content&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- Disable scroll when text is long --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span>
  <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Technology is the common soul of the people who developed it.&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="wrapable" tabindex="-1">Wrapable</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">wrapable</span> <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  Technology is the common soul of the people who developed it.
<span class="hljs-tag">&lt;/<span class="hljs-name">van-notice-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="mode" tabindex="-1">Mode</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;closeable&quot;</span>&gt;</span>Short Content<span class="hljs-tag">&lt;/<span class="hljs-name">van-notice-bar</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;link&quot;</span>&gt;</span>Short Content<span class="hljs-tag">&lt;/<span class="hljs-name">van-notice-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-style" tabindex="-1">Custom Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#ecf9ff&quot;</span> <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;info-o&quot;</span>&gt;</span>
  Short Content
<span class="hljs-tag">&lt;/<span class="hljs-name">van-notice-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="vertical-scroll" tabindex="-1">Vertical Scroll</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-notice-bar</span> <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;volume-o&quot;</span> <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span>
    <span class="hljs-attr">vertical</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-swipe&quot;</span>
    <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;3000&quot;</span>
    <span class="hljs-attr">:touchable</span>=<span class="hljs-string">&quot;false&quot;</span>
    <span class="hljs-attr">:show-indicators</span>=<span class="hljs-string">&quot;false&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>Content 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>Content 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>Content 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-notice-bar</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.notice-swipe</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">40px</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">40px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>mode</td><td>Mode, can be set to <code>closeable</code> <code>link</code></td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>text</td><td>Notice text content</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>color</td><td>Text color</td><td><em>string</em></td><td><code>#ed6a0c</code></td></tr><tr><td>background</td><td>Background color</td><td><em>string</em></td><td><code>#fffbe8</code></td></tr><tr><td>left-icon</td><td>Left Icon</td><td><em>string</em></td><td>-</td></tr><tr><td>delay</td><td>Animation delay (s)</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>speed</td><td>Scroll speed (px/s)</td><td><em>number | string</em></td><td><code>60</code></td></tr><tr><td>scrollable</td><td>Whether to scroll content</td><td><em>boolean</em></td><td>-</td></tr><tr><td>wrapable</td><td>Whether to enable text wrap</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when NoticeBar is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>close</td><td>Emitted when NoticeBar is closed</td><td><em>event: MouseEvent</em></td></tr><tr><td>replay</td><td>Emitted when NoticeBar is replayed</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get NoticeBar instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>reset</td><td>Reset NoticeBar</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">NoticeBarMode</span>, <span class="hljs-title class_">NoticeBarProps</span>, <span class="hljs-title class_">NoticeBarInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>NoticeBarInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">NoticeBarInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> noticeBarRef = ref&lt;<span class="hljs-title class_">NoticeBarInstance</span>&gt;();

noticeBarRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">reset</span>();
</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Notice text content</td></tr><tr><td>left-icon</td><td>Custom left icon</td></tr><tr><td>right-icon</td><td>Custom right icon</td></tr></tbody></table></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-notice-bar-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-notice-bar-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-notice-bar-wrapable-padding</td><td><em>var(--van-padding-xs) var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-notice-bar-text-color</td><td><em>var(--van-orange-dark)</em></td><td>-</td></tr><tr><td>--van-notice-bar-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-notice-bar-line-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-notice-bar-background</td><td><em>var(--van-orange-light)</em></td><td>-</td></tr><tr><td>--van-notice-bar-icon-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-notice-bar-icon-min-width</td><td><em>24px</em></td><td>-</td></tr></tbody></table></div>`,18),c=[d];function o(p,r){return t(),a("div",l,c)}const g=s(e,[["render",o]]);export{g as default};