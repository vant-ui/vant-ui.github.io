import{o as a,a as t,z as n}from"./vue-libs-be453a05.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>Sticky</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>The sticky component is consistent with the effect achieved by the <code>position: sticky</code> property in CSS, in that when the component is within screen range, it will follow the normal layout arrangement, and when the component rolls out of screen range, it will always be fixed at the top of the screen.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Sticky</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Sticky</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Basic Usage<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="offset-top" tabindex="-1">Offset Top</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span> <span class="hljs-attr">:offset-top</span>=<span class="hljs-string">&quot;50&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Offset Top<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="set-container" tabindex="-1">Set Container</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;container&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 150px;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span> <span class="hljs-attr">:container</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Set Container<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> container = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);
    <span class="hljs-keyword">return</span> { container };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="offset-bottom" tabindex="-1">Offset Bottom</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sticky</span> <span class="hljs-attr">:offset-bottom</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Offset Bottom<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-sticky</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>position <code>v3.0.6</code></td><td>Offset position, can be set to <code>bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td>offset-top</td><td>Offset top, supports <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> unit, default <code>px</code></td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>offset-bottom <code>v3.0.6</code></td><td>Offset bottom, supports <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> unit, default <code>px</code></td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>z-index</td><td>z-index when sticky</td><td><em>number | string</em></td><td><code>99</code></td></tr><tr><td>container</td><td>Container DOM</td><td><em>Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change <code>v3.0.10</code></td><td>Emitted when sticky status changed</td><td><em>isFixed: boolean</em></td></tr><tr><td>scroll</td><td>Emitted when scrolling</td><td><em>{ scrollTop: number, isFixed: boolean }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">StickyProps</span>, <span class="hljs-title class_">StickyPosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-sticky-z-index</td><td><em>99</em></td><td>-</td></tr></tbody></table></div>`,14),p=[l],h={__name:"README",setup(o,{expose:s}){return s({frontmatter:{}}),(d,i)=>(a(),t("div",e,p))}};export{h as default};