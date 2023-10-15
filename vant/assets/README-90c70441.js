import{_ as s}from"./locales-be796722.js";import{o as t,a,z as n}from"./vue-libs-19c20d28.js";const e={},o={class:"van-doc-markdown-body"},d=n(`<h1>Toast</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Black semi-transparent pop-up hint in the middle of the page, used for message notification, loading hint, operation result hint and other scenarios.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Toast</span>);
</code></pre></div><div class="van-doc-card"><h3 id="function-call" tabindex="-1">Function Call</h3><p>Vant provides some utility functions that can quickly evoke global <code>Toast</code> components.</p><p>For example, calling the <code>showToast</code> function will render a Toast directly in the page.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;Some messages&#39;</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="text" tabindex="-1">Text</h3><p>Use the <code>showToast</code> method to display a text toast in the center of the screen.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;Some messages&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="loading" tabindex="-1">Loading</h3><p>Use the <code>showLoadingToast</code> method to display a loading toast. The <code>forbidClick</code> option can be used to disable background clicks.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showLoadingToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showLoadingToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Loading...&#39;</span>,
  <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="success-fail" tabindex="-1">Success/Fail</h3><p>Use the <code>showSuccessToast</code> method to display a success message, and use the <code>showFailToast</code> method to display a failure message.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showSuccessToast, showFailToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showSuccessToast</span>(<span class="hljs-string">&#39;Success&#39;</span>);
<span class="hljs-title function_">showFailToast</span>(<span class="hljs-string">&#39;Fail&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="custom-icon" tabindex="-1">Custom Icon</h3><p>The <code>icon</code> option allows you to customize the icon by specifying either the icon name or an image URL, which is equivalent to the <code>name</code> attribute of the Icon component.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast, showLoadingToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Custom Icon&#39;</span>,
  <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;like-o&#39;</span>,
});

<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Custom Image&#39;</span>,
  <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/logo.png&#39;</span>,
});
</code></pre><p>The <code>loadingType</code> option allows you to customize the type of loading icon.</p><pre><code class="language-js"><span class="hljs-title function_">showLoadingToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Loading...&#39;</span>,
  <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">loadingType</span>: <span class="hljs-string">&#39;spinner&#39;</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="custom-position" tabindex="-1">Custom Position</h3><p>By default, the Toast is rendered in the center of the screen. You can control the position of the Toast by using the <code>position</code> option.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Top&#39;</span>,
  <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>,
});

<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Bottom&#39;</span>,
  <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;bottom&#39;</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="word-break" tabindex="-1">Word Break</h3><p>The <code>wordBreak</code> option controls how the text in the Toast is truncated when it exceeds the available space. The default value is <code>break-all</code>, and the optional values are <code>break-word</code> and <code>normal</code>.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;This message will contain a incomprehensibilities long word.&#39;</span>,
  <span class="hljs-attr">wordBreak</span>: <span class="hljs-string">&#39;break-all&#39;</span>,
});

<span class="hljs-title function_">showToast</span>({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;This message will contain a incomprehensibilities long word.&#39;</span>,
  <span class="hljs-attr">wordBreak</span>: <span class="hljs-string">&#39;break-word&#39;</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="update-message" tabindex="-1">Update Message</h3><p>When executing the Toast method, it returns the corresponding Toast instance. You can dynamically update the message by modifying the <code>message</code> property on the instance.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showLoadingToast, closeToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> toast = <span class="hljs-title function_">showLoadingToast</span>({
  <span class="hljs-attr">duration</span>: <span class="hljs-number">0</span>,
  <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">loadingType</span>: <span class="hljs-string">&#39;spinner&#39;</span>,
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;3 seconds&#39;</span>,
});

<span class="hljs-keyword">let</span> second = <span class="hljs-number">3</span>;
<span class="hljs-keyword">const</span> timer = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {
  second--;
  <span class="hljs-keyword">if</span> (second) {
    toast.<span class="hljs-property">message</span> = <span class="hljs-string">\`<span class="hljs-subst">\${second}</span> seconds\`</span>;
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-built_in">clearInterval</span>(timer);
    <span class="hljs-title function_">closeToast</span>();
  }
}, <span class="hljs-number">1000</span>);
</code></pre></div><div class="van-doc-card"><h3 id="singleton" tabindex="-1">Singleton</h3><p>The Toast is implemented as a singleton by default, which means that only one Toast can exist at a time. If you need to display multiple Toasts at the same time, you can refer to the following example:</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast, showSuccessToast, allowMultipleToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">allowMultipleToast</span>();

<span class="hljs-keyword">const</span> toast1 = <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;First Toast&#39;</span>);
<span class="hljs-keyword">const</span> toast2 = <span class="hljs-title function_">showSuccessToast</span>(<span class="hljs-string">&#39;Second Toast&#39;</span>);

toast1.<span class="hljs-title function_">close</span>();
toast2.<span class="hljs-title function_">close</span>();
</code></pre></div><div class="van-doc-card"><h3 id="set-default-options" tabindex="-1">Set Default Options</h3><p>You can globally modify the default configuration of the <code>showToast</code> and other methods by using the <code>setToastDefaultOptions</code> function.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { setToastDefaultOptions, resetToastDefaultOptions } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title function_">setToastDefaultOptions</span>({ <span class="hljs-attr">duration</span>: <span class="hljs-number">2000</span> });

<span class="hljs-title function_">setToastDefaultOptions</span>(<span class="hljs-string">&#39;loading&#39;</span>, { <span class="hljs-attr">forbidClick</span>: <span class="hljs-literal">true</span> });

<span class="hljs-title function_">resetToastDefaultOptions</span>();

<span class="hljs-title function_">resetToastDefaultOptions</span>(<span class="hljs-string">&#39;loading&#39;</span>);
</code></pre></div><div class="van-doc-card"><h3 id="use-toast-component" tabindex="-1">Use Toast Component</h3><p>If you need to embed components or other custom content within the Toast, you can directly use the Toast component and customize it using the message slot. Before using it, you need to register the component using <code>app.use</code> or other methods.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-toast</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 0&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">message</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-image</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;image&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;200&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;140&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: block&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-toast</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> { show };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Vant exports following Toast utility functions:</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>showToast</td><td>Display a text toast</td><td><code>ToastOptions | string</code></td><td>Toast instance</td></tr><tr><td>showLoadingToast</td><td>Display a loading toast</td><td><code>ToastOptions | string</code></td><td>Toast instance</td></tr><tr><td>showSuccessToast</td><td>Display a success toast</td><td><code>ToastOptions | string</code></td><td>Toast instance</td></tr><tr><td>showFailToast</td><td>Display a fail toast</td><td><code>ToastOptions | string</code></td><td>Toast instance</td></tr><tr><td>closeToast</td><td>Close the currently displayed toast</td><td><code>closeAll: boolean</code></td><td><code>void</code></td></tr><tr><td>allowMultipleToast</td><td>Allow multiple toasts to be displayed as the same time</td><td>-</td><td><code>void</code></td></tr><tr><td>setToastDefaultOptions</td><td>Modify the default configuration that affects all <code>showToast</code> calls. Specify the <code>type</code> parameter to modify the default configuration of a specific type of toast</td><td><code>type | ToastOptions</code></td><td><code>void</code></td></tr><tr><td>resetToastDefaultOptions</td><td>Reset the default configuration that affects all <code>showToast</code> calls. Specify the <code>type</code> parameter to reset the default configuration of a specific type of toast</td><td><code>type</code></td><td><code>void</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="toastoptions" tabindex="-1">ToastOptions</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Can be set to <code>loading</code> <code>success</code> <code>fail</code> <code>html</code></td><td><em>ToastType</em></td><td><code>text</code></td></tr><tr><td>position</td><td>Can be set to <code>top</code> <code>middle</code> <code>bottom</code></td><td><em>ToastPosition</em></td><td><code>middle</code></td></tr><tr><td>message</td><td>Message</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>wordBreak</td><td>Can be set to <code>normal</code> <code>break-all</code> <code>break-word</code></td><td><em>ToastWordBreak</em></td><td><code>&#39;break-all&#39;</code></td></tr><tr><td>icon</td><td>Custom icon</td><td><em>string</em></td><td>-</td></tr><tr><td>iconSize</td><td>Custom icon size</td><td><em>number | string</em></td><td><code>36px</code></td></tr><tr><td>iconPrefix</td><td>Icon className prefix</td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>overlay</td><td>Whether to show overlay</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>forbidClick</td><td>Whether to forbid click background</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>closeOnClick</td><td>Whether to close after clicked</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>closeOnClickOverlay</td><td>Whether to close when overlay is clicked</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loadingType</td><td>Loading icon type, can be set to <code>spinner</code></td><td><em>string</em></td><td><code>circular</code></td></tr><tr><td>duration</td><td>Toast duration(ms), won&#39;t disappear if value is 0</td><td><em>number</em></td><td><code>2000</code></td></tr><tr><td>className</td><td>Custom className</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlayClass</td><td>Custom overlay class</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlayStyle</td><td>Custom overlay style</td><td><em>object</em></td><td>-</td></tr><tr><td>onOpened</td><td>Callback function after opened</td><td><em>Function</em></td><td>-</td></tr><tr><td>onClose</td><td>Callback function after close</td><td><em>Function</em></td><td>-</td></tr><tr><td>transition</td><td>Transition, equivalent to <code>name</code> prop of <a href="https://vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a></td><td><em>string</em></td><td><code>van-fade</code></td></tr><tr><td>teleport</td><td>Specifies a target element where Toast will be mounted</td><td><em>string | Element</em></td><td><code>body</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><p>You can use following slots when using <code>Toast</code> component:</p><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>message</td><td>Custom message</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">ToastType</span>,
  <span class="hljs-title class_">ToastProps</span>,
  <span class="hljs-title class_">ToastOptions</span>,
  <span class="hljs-title class_">ToastPosition</span>,
  <span class="hljs-title class_">ToastWordBreak</span>,
  <span class="hljs-title class_">ToastWrapperInstance</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-toast-max-width</td><td><em>70%</em></td><td>-</td></tr><tr><td>--van-toast-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-toast-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-toast-loading-icon-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-toast-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-toast-radius</td><td><em>var(--van-radius-lg)</em></td><td>-</td></tr><tr><td>--van-toast-background</td><td><em>fade(var(--van-black), 70%)</em></td><td>-</td></tr><tr><td>--van-toast-icon-size</td><td><em>36px</em></td><td>-</td></tr><tr><td>--van-toast-text-min-width</td><td><em>96px</em></td><td>-</td></tr><tr><td>--van-toast-text-padding</td><td><em>var(--van-padding-xs) var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-toast-default-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-toast-default-width</td><td><em>88px</em></td><td>-</td></tr><tr><td>--van-toast-default-min-height</td><td><em>88px</em></td><td>-</td></tr><tr><td>--van-toast-position-top-distance</td><td><em>20%</em></td><td>-</td></tr><tr><td>--van-toast-position-bottom-distance</td><td><em>20%</em></td><td>-</td></tr></tbody></table></div>`,22),l=[d];function c(p,i){return t(),a("div",o,l)}const m=s(e,[["render",c]]);export{m as default};
