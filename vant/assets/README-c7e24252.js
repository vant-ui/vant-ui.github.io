import{_ as s}from"./locales-be796722.js";import{o as t,a,z as n}from"./vue-libs-19c20d28.js";const e={},l={class:"van-doc-markdown-body"},o=n(`<h1>RollingText</h1><div class="van-doc-card"><h3 id="introduction" tabindex="-1">Introduction</h3><p>Rolling text animation, which can roll numbers and other types of text. Please upgrade <code>vant</code> to &gt;= v4.6.0 before using this component.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RollingText</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">RollingText</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>You can set the starting value with <code>start-num</code> and the target value with <code>target-num</code>. The RollingText component will automatically start the animation, rolling from the starting value to the target value.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;123&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="set-rolling-direction" tabindex="-1">Set Rolling Direction</h3><p>You can set the rolling direction of the numbers using the <code>direction</code> prop. By default, it rolls downwards, but you can set it to <code>up</code> to roll upwards.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;432&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;up&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="set-stop-order" tabindex="-1">Set Stop Order</h3><p>You can set the order of stopping the animation of each digit through the <code>stop-order</code> prop. By default, it stops from the higher digits. Setting <code>rtl</code> can stop from the ones digit.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;54321&quot;</span> <span class="hljs-attr">stop-order</span>=<span class="hljs-string">&quot;rtl&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="roll-non-numeric-text" tabindex="-1">Roll Non-numeric Text</h3><p>You can reverse non-numeric content by using the <code>text-list</code> prop. The component will rolling from the first item to the last item in the array. Please make sure that the array length is greater than or equal to 2, and that each item has the same length.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:text-list</span>=<span class="hljs-string">&quot;textList&quot;</span> <span class="hljs-attr">:duration</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="custom-style" tabindex="-1">Custom Style</h3><p>The RollingText component provides some CSS variables that you can override to customize the style, or you can directly modify the component&#39;s style. Additionally, you can set the height of the numbers using the <code>height</code> prop.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span>
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
</code></pre></div><div class="van-doc-card"><h3 id="manual-control" tabindex="-1">Manual Control</h3><p>After obtaining the component instance through <code>ref</code>, you can call the <code>start</code> and <code>reset</code> methods. The <code>start</code> method is used to start the animation, and the <code>reset</code> method is used to reset the animation.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span>
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
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>start-num</td><td>Start number</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td>target-num</td><td>Target number</td><td><em>number</em></td><td>-</td></tr><tr><td>text-list</td><td>Text array</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td>duration</td><td>Duration of the animation, in seconds</td><td><em>number</em></td><td><code>2</code></td></tr><tr><td>direction</td><td>Rolling direction of the text, with <code>down</code> and <code>up</code> as the values</td><td><em>string</em></td><td><code>down</code></td></tr><tr><td>auto-start</td><td>Whether to start the animation</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>stop-order</td><td>Order of stopping the animation of each digit, with <code>ltr</code> and <code>rtl</code> as the values</td><td><em>string</em></td><td><code>ltr</code></td></tr><tr><td>height</td><td>Height of digit, <code>px</code> as unit</td><td><em>number</em></td><td><code>40</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get RollingText instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>start</td><td>Start the animation</td><td>-</td><td>-</td></tr><tr><td>reset</td><td>Reset the animation</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">RollingTextProps</span>,
  <span class="hljs-title class_">RollingTextInstance</span>,
  <span class="hljs-title class_">RollingTextDirection</span>,
  <span class="hljs-title class_">RollingTextStopOrder</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>RollingTextInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">RollingTextInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> rollingTextRef = ref&lt;<span class="hljs-title class_">RollingTextInstance</span>&gt;();

rollingTextRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">start</span>();
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-rolling-text-background</td><td><em>inherit</em></td><td>Background color of a single digit</td></tr><tr><td>--van-rolling-text-color</td><td><em>var(--van-text-color)</em></td><td>Color of the number</td></tr><tr><td>--van-rolling-text-font-size</td><td><em>var(--van-font-size-md)</em></td><td>Font size of the number</td></tr><tr><td>--van-rolling-text-gap</td><td><em>0px</em></td><td>Spacing between digits</td></tr><tr><td>--van-rolling-text-item-width</td><td><em>15px</em></td><td>Width of a single digit</td></tr><tr><td>--van-rolling-text-item-border-radius</td><td><em>0px</em></td><td>Border radius of a single digit</td></tr></tbody></table></div>`,16),r=[o];function p(c,d){return t(),a("div",l,r)}const g=s(e,[["render",p]]);export{g as default};
