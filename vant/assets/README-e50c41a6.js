import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const e={},l={class:"van-doc-markdown-body"},d=n(`<h1>FloatingBubble</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Clickable bubbles that hover around the edge of the page. Please upgrade <code>vant</code> to &gt;= v4.6.0 before using this component.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FloatingBubble</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">FloatingBubble</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>The floating bubble is displayed by default in the bottom right corner and allows vertical dragging in the y-axis direction. You can set the icon of the bubble using the <code>icon</code> prop.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-bubble</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClick&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;Click Bubble&#39;</span>);
    };
    <span class="hljs-keyword">return</span> { onClick };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="free-magnetic" tabindex="-1">Free Magnetic</h3><p>Allow x and y drags to attach to the nearest side of the x axis.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-bubble</span>
  <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;xy&quot;</span>
  <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat&quot;</span>
  <span class="hljs-attr">magnetic</span>=<span class="hljs-string">&quot;x&quot;</span>
  @<span class="hljs-attr">offset-change</span>=<span class="hljs-string">&quot;onOffsetChange&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onOffsetChange</span> = (<span class="hljs-params">offset</span>) =&gt; {
      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">\`x: <span class="hljs-subst">\${offset.x.toFixed(<span class="hljs-number">0</span>)}</span>, y: <span class="hljs-subst">\${offset.y.toFixed(<span class="hljs-number">0</span>)}</span>\`</span>);
    };
    <span class="hljs-keyword">return</span> { onOffsetChange };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="use-v-model" tabindex="-1">Use v-model</h3><p>Use <code>v-model:offset</code> control the position.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-bubble</span> <span class="hljs-attr">v-model:offset</span>=<span class="hljs-string">&quot;offset&quot;</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;xy&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> offset = <span class="hljs-title function_">ref</span>({ <span class="hljs-attr">x</span>: <span class="hljs-number">200</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">400</span> });
    <span class="hljs-keyword">return</span> { offset };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:offset</td><td>Control bubble position</td><td><em>OffsetType</em></td><td><code>Default right-bottom coordinate</code></td></tr><tr><td>axis</td><td>Drag direction, <code>xy</code> stands for free drag, <code>lock</code> stands for disable drag</td><td><em>&#39;x&#39; | &#39;y&#39; | &#39;xy&#39; | &#39;lock&#39;</em></td><td><code>y</code></td></tr><tr><td>magnetic</td><td>Direction of automatic magnetic absorption</td><td><em>&#39;x&#39; | &#39;y&#39;</em></td><td>-</td></tr><tr><td>icon</td><td>Bubble icon</td><td><em>string</em></td><td>-</td></tr><tr><td>gap</td><td>Minimum gap between the bubble and the window, unit <code>px</code></td><td><em>number</em></td><td><code>24</code></td></tr><tr><td>teleport</td><td>Specifies a target element where BackTop will be mounted</td><td><em>string | Element</em></td><td><code>body</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Triggered when a component is clicked</td><td><em>MouseEvent</em></td></tr><tr><td>offset-change</td><td>Triggered when the position changes due to user dragging</td><td><em>{x: string, y: string}</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Customize the bubble display content</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">FloatingBubbleProps</span>,
  <span class="hljs-title class_">FloatingBubbleAxis</span>,
  <span class="hljs-title class_">FloatingBubbleMagnetic</span>,
  <span class="hljs-title class_">FloatingBubbleOffset</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-floating-bubble-size</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-floating-bubble-initial-gap</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-floating-bubble-icon-size</td><td><em>28px</em></td><td>-</td></tr><tr><td>--van-floating-bubble-background</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-floating-bubble-color</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-floating-bubble-z-index</td><td><em>999</em></td><td>-</td></tr><tr><td>--van-floating-bubble-border-radius</td><td><em>--van-floating-bubble-border-radius</em></td><td>-</td></tr></tbody></table></div>`,14),o=[d];function p(c,r){return a(),t("div",l,o)}const b=s(e,[["render",p]]);export{b as default};
