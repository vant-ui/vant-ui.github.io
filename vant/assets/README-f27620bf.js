import{o as a,a as t,z as n}from"./vue-libs-be453a05.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>TextEllipsis</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Display ellipsis for long text and support for expanding or collapsing text.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TextEllipsis</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TextEllipsis</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>Show one rows by default.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-text-ellipsis</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text =
      <span class="hljs-string">&#39;Vant is a lightweight, customizable mobile component library that was open sourced in 2017. Currently Vant officially provides Vue 2 version, Vue 3 version and WeChat applet version, and the community team maintains React version and Alipay applet version.&#39;</span>;
    <span class="hljs-keyword">return</span> { text };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="expand-collapse" tabindex="-1">Expand/Collapse</h3><p>Support Expand/Collapse.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-text-ellipsis</span>
  <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;text&quot;</span>
  <span class="hljs-attr">expand-text</span>=<span class="hljs-string">&quot;expand&quot;</span>
  <span class="hljs-attr">collapse-text</span>=<span class="hljs-string">&quot;collapse&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text =
      <span class="hljs-string">&#39;Vant is a lightweight, customizable mobile component library that was open sourced in 2017. Currently Vant officially provides Vue 2 version, Vue 3 version and WeChat applet version, and the community team maintains React version and Alipay applet version.&#39;</span>;
    <span class="hljs-keyword">return</span> { text };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="customize-rows" tabindex="-1">Customize rows</h3><p>Display the number of <code>rows</code> by setting rows.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-text-ellipsis</span>
  <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;text&quot;</span>
  <span class="hljs-attr">expand-text</span>=<span class="hljs-string">&quot;expand&quot;</span>
  <span class="hljs-attr">collapse-text</span>=<span class="hljs-string">&quot;collapse&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text =
      <span class="hljs-string">&#39;Vant is a lightweight, customizable mobile component library that was open sourced in 2017. Currently Vant officially provides Vue 2 version, Vue 3 version and WeChat applet version, and the community team maintains React version and Alipay applet version.&#39;</span>;
    <span class="hljs-keyword">return</span> { text };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>rows</td><td>Number of rows displayed</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>content</td><td>The text displayed</td><td><em>string</em></td><td>-</td></tr><tr><td>expand-text</td><td>Expand operation text</td><td><em>string</em></td><td>-</td></tr><tr><td>collapse-text</td><td>Collapse operation text</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click-action</td><td>Emitted when Expand/Collapse is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TextEllipsisProps</span>, <span class="hljs-title class_">TextEllipsisThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-text-ellipsis-action-color</td><td><em>var(--van-blue)</em></td><td>Color of action text</td></tr><tr><td>--van-text-ellipsis-line-height</td><td><em>1.6</em></td><td>Line height of text</td></tr></tbody></table></div>`,13),p=[l],h={__name:"README",setup(o,{expose:s}){return s({frontmatter:{}}),(d,r)=>(a(),t("div",e,p))}};export{h as default};
