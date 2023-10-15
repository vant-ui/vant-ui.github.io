import{_ as s}from"./locales-be796722.js";import{o as t,a,z as n}from"./vue-libs-19c20d28.js";const o={},e={class:"van-doc-markdown-body"},l=n(`<h1>Popup</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to display pop-up windows, information prompts, etc., and supports multiple pop-up layers to display.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Popup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Popup</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Show Popup&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPopup&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ padding: &#39;64px&#39; }&quot;</span>&gt;</span>Content<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">showPopup</span> = (<span class="hljs-params"></span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
    };
    <span class="hljs-keyword">return</span> {
      show,
      showPopup,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="position" tabindex="-1">Position</h3><p>Use <code>position</code> prop to set Popup display position.</p><p>The default position is <code>center</code>, it can be set to <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>.</p><ul><li>When the position is <code>top</code> or <code>bottom</code>, the default width is consistent with the screen width, and the height of the Popup depends on the height of the content.</li><li>When the position is <code>left</code> or <code>right</code> side, the width and height are not set by default, and the width and height of the popup depend on the width and height of the content.</li></ul><pre><code class="language-html"><span class="hljs-comment">&lt;!-- top popup --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showTop&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- bottom popup --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showBottom&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
/&gt;</span>

<span class="hljs-comment">&lt;!-- left popup --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showLeft&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ width: &#39;30%&#39;, height: &#39;100%&#39; }&quot;</span>
/&gt;</span>

<span class="hljs-comment">&lt;!-- Popup on the right --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showRight&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ width: &#39;30%&#39;, height: &#39;100%&#39; }&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="close-icon" tabindex="-1">Close Icon</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
/&gt;</span>
<span class="hljs-comment">&lt;!-- Custom Icon --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">close-icon</span>=<span class="hljs-string">&quot;close&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
/&gt;</span>
<span class="hljs-comment">&lt;!-- Icon Position --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">close-icon-position</span>=<span class="hljs-string">&quot;top-left&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="round-corner" tabindex="-1">Round Corner</h3><p>After setting the <code>round</code> prop, the Popup will add different rounded corner styles according to the position.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Round Popup (center) --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showCenter&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ padding: &#39;64px&#39; }&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- Round Popup (bottom) --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showBottom&quot;</span>
  <span class="hljs-attr">round</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="listen-to-click-events" tabindex="-1">Listen To Click Events</h3><p>Popup supports following events:</p><ul><li><code>click</code>: Emitted when Popup is clicked.</li><li><code>click-overlay</code>: Emitted when overlay is clicked.</li><li><code>click-close-icon</code>: Emitted when close icon is clicked.</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Listen Click Events&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
  <span class="hljs-attr">closeable</span>
  @<span class="hljs-attr">click-overlay</span>=<span class="hljs-string">&quot;onClickOverlay&quot;</span>
  @<span class="hljs-attr">click-close-icon</span>=<span class="hljs-string">&quot;onClickCloseIcon&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickOverlay</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;click-overlay&#39;</span>);
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickCloseIcon</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;click-close-icon&#39;</span>);
    };
    <span class="hljs-keyword">return</span> {
      show,
      onClickOverlay,
      onClickCloseIcon,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="listen-to-display-events" tabindex="-1">Listen to Display Events</h3><p>When the Popup is opened or closed, the following events will be emitted:</p><ul><li><code>open</code>: Emitted immediately when the Popup is opened.</li><li><code>opened</code>: Emitted when the Popup is opened and the animation ends.</li><li><code>close</code>: Emitted immediately when the Popup is closed.</li><li><code>closed</code>: Emitted when the Popup is closed and the animation ends.</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Listen to display events&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
  @<span class="hljs-attr">open</span>=<span class="hljs-string">&quot;showToast(&#39;open&#39;)&quot;</span>
  @<span class="hljs-attr">opened</span>=<span class="hljs-string">&quot;showToast(&#39;opened&#39;)&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;showToast(&#39;close&#39;)&quot;</span>
  @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;showToast(&#39;closed&#39;)&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> {
      show,
      showToast,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="get-container" tabindex="-1">Get Container</h3><p>Use <code>teleport</code> prop to specify mount location.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- teleport to body --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;body&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- teleport to #app --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;#app&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:show</td><td>Whether to show popup</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>overlay</td><td>Whether to show overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>position</td><td>Can be set to <code>top</code> <code>bottom</code> <code>right</code> <code>left</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td>overlay-class</td><td>Custom overlay class</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlay-style</td><td>Custom overlay style</td><td><em>object</em></td><td>-</td></tr><tr><td>duration</td><td>Transition duration, unit second</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>z-index</td><td>Set the z-index to a fixed value</td><td><em>number | string</em></td><td><code>2000+</code></td></tr><tr><td>round</td><td>Whether to show round corner</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lock-scroll</td><td>Whether to lock background scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-render</td><td>Whether to lazy render util appeared</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-on-popstate</td><td>Whether to close when popstate</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>close-on-click-overlay</td><td>Whether to close when overlay is clicked</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>closeable</td><td>Whether to show close icon</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>close-icon</td><td>Close icon name</td><td><em>string</em></td><td><code>cross</code></td></tr><tr><td>close-icon-position</td><td>Close Icon Position, can be set to <code>top-left</code> <code>bottom-left</code> <code>bottom-right</code></td><td><em>string</em></td><td><code>top-right</code></td></tr><tr><td>before-close</td><td>Callback function before close</td><td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr><tr><td>icon-prefix</td><td>Icon className prefix</td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>transition</td><td>Transition, equivalent to <code>name</code> prop of <a href="https://vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a></td><td><em>string</em></td><td>-</td></tr><tr><td>transition-appear</td><td>Whether to apply transition on initial render</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>teleport</td><td>Specifies a target element where Popup will be mounted</td><td><em>string | Element</em></td><td>-</td></tr><tr><td>safe-area-inset-top</td><td>Whether to enable top safe area adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>safe-area-inset-bottom</td><td>Whether to enable bottom safe area adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when Popup is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-overlay</td><td>Emitted when overlay is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-close-icon</td><td>Emitted when close icon is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>open</td><td>Emitted immediately when Popup is opened</td><td>-</td></tr><tr><td>close</td><td>Emitted immediately when Popup is closed</td><td>-</td></tr><tr><td>opened</td><td>Emitted when Popup is opened and the animation ends</td><td>-</td></tr><tr><td>closed</td><td>Emitted when Popup is closed and the animation ends</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Content of Popup</td></tr><tr><td>overlay-content</td><td>Content of Popup overlay</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">PopupProps</span>,
  <span class="hljs-title class_">PopupPosition</span>,
  <span class="hljs-title class_">PopupInstance</span>,
  <span class="hljs-title class_">PopupCloseIconPosition</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-popup-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-popup-transition</td><td><em>transform var(--van-duration-base)</em></td><td>-</td></tr><tr><td>--van-popup-round-radius</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-popup-close-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-popup-close-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-popup-close-icon-margin</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-popup-close-icon-z-index</td><td><em>1</em></td><td>-</td></tr></tbody></table></div>`,18),p=[l];function d(c,r){return t(),a("div",e,p)}const u=s(o,[["render",d]]);export{u as default};
