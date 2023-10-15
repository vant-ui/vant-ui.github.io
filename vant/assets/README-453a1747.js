import{_ as s}from"./locales-be796722.js";import{o as t,a,z as n}from"./vue-libs-19c20d28.js";const e={},o={class:"van-doc-markdown-body"},l=n(`<h1>Notify</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>The display message prompt is at the top of the page, and supports two methods: component call and function call.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Notify</span>);
</code></pre></div><div class="van-doc-card"><h3 id="function-call" tabindex="-1">Function Call</h3><p>Vant provides some utility functions that can quickly evoke global <code>Notify</code> components.</p><p>For example, calling the <code>showNotify</code> function will render a Dialog directly in the page.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showNotify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showNotify</span>(<span class="hljs-string">&#39;Notify Message&#39;</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { showNotify, closeNotify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-comment">// auto close after 3s</span>
<span class="hljs-title function_">showNotify</span>(<span class="hljs-string">&#39;Message&#39;</span>);

<span class="hljs-comment">// manually close</span>
<span class="hljs-title function_">closeNotify</span>();
</code></pre></div><div class="van-doc-card"><h3 id="notify-type" tabindex="-1">Notify Type</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { showNotify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showNotify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;primary&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Notify Message&#39;</span> });
<span class="hljs-title function_">showNotify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;success&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Notify Message&#39;</span> });
<span class="hljs-title function_">showNotify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;danger&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Notify Message&#39;</span> });
<span class="hljs-title function_">showNotify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;warning&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Notify Message&#39;</span> });
</code></pre></div><div class="van-doc-card"><h3 id="custom-notify" tabindex="-1">Custom Notify</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { showNotify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showNotify</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Custom Color&#39;</span>,
  <span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#ad0000&#39;</span>,
  <span class="hljs-attr">background</span>: <span class="hljs-string">&#39;#ffe1e1&#39;</span>,
});

<span class="hljs-title function_">showNotify</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Custom Position&#39;</span>,
  <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;bottom&#39;</span>,
});

<span class="hljs-title function_">showNotify</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Custom Duration&#39;</span>,
  <span class="hljs-attr">duration</span>: <span class="hljs-number">1000</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="use-notify-component" tabindex="-1">Use Notify Component</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Use Notify Component&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showNotify&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-notify</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;bell&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-right: 4px;&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Content<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-notify</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">showNotify</span> = (<span class="hljs-params"></span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      }, <span class="hljs-number">2000</span>);
    };

    <span class="hljs-keyword">return</span> {
      show,
      showNotify,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Vant exports following Notify utility functions:</p><table><thead><tr><th>Methods</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>showNotify</td><td>Display Notify at the top of the page</td><td><code>NotifyOptions | string</code></td><td>Notify instance</td></tr><tr><td>closeNotify</td><td>Close the currently displayed Notify</td><td>-</td><td><code>void</code></td></tr><tr><td>setNotifyDefaultOptions</td><td>Modify the default configuration, affecting all <code>showNotify</code> calls</td><td><code>NotifyOptions</code></td><td><code>void</code></td></tr><tr><td>resetNotifyDefaultOptions</td><td>Reset the default configuration, affecting all <code>showNotify</code> calls</td><td>-</td><td><code>void</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="notifyoptions" tabindex="-1">NotifyOptions</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Can be set to <code>primary</code> <code>success</code> <code>warning</code></td><td><em>NotifyType</em></td><td><code>danger</code></td></tr><tr><td>message</td><td>Message</td><td><em>string</em></td><td>-</td></tr><tr><td>duration</td><td>Duration(ms), won&#39;t disappear if value is 0</td><td><em>number | string</em></td><td><code>3000</code></td></tr><tr><td>z-index</td><td>Set the z-index to a fixed value</td><td><em>number | string</em></td><td><code>2000+</code></td></tr><tr><td>position</td><td>Position, can be set to <code>bottom</code></td><td><em>NotifyPosition</em></td><td><code>top</code></td></tr><tr><td>color</td><td>Message color</td><td><em>string</em></td><td><code>white</code></td></tr><tr><td>background</td><td>Background color</td><td><em>string</em></td><td>-</td></tr><tr><td>className</td><td>Custom className</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>lockScroll</td><td>Whether to lock background scroll</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>onClick</td><td>Callback function after click</td><td><em>(event: MouseEvent) =&gt; void</em></td><td>-</td></tr><tr><td>onOpened</td><td>Callback function after opened</td><td><em>() =&gt; void</em></td><td>-</td></tr><tr><td>onClose</td><td>Callback function after close</td><td><em>() =&gt; void</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">NotifyType</span>,
  <span class="hljs-title class_">NotifyProps</span>,
  <span class="hljs-title class_">NotifyOptions</span>,
  <span class="hljs-title class_">NotifyPosition</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-notify-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-notify-padding</td><td><em>var(--van-padding-xs) var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-notify-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-notify-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-notify-primary-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-notify-success-background</td><td><em>var(--van-success-color)</em></td><td>-</td></tr><tr><td>--van-notify-danger-background</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-notify-warning-background</td><td><em>var(--van-warning-color)</em></td><td>-</td></tr></tbody></table></div>`,15),d=[l];function p(c,i){return t(),a("div",o,d)}const f=s(e,[["render",p]]);export{f as default};
