import{o as a,a as s,z as e}from"./vue-libs.d5ee895a.js";const n={class:"van-doc-markdown-body"},d=e(`<h1>Divider</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Separate content into multiple areas.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Divider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Divider</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="with-text" tabindex="-1">With Text</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span>&gt;</span>Text<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="content-position" tabindex="-1">Content Position</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">content-position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>Text<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">content-position</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>Text<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="dashed" tabindex="-1">Dashed</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">dashed</span>&gt;</span>Text<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-style" tabindex="-1">Custom Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ color: &#39;#1989fa&#39;, borderColor: &#39;#1989fa&#39;, padding: &#39;0 16px&#39; }&quot;</span>
&gt;</span>
  Text
<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>dashed</td><td>Whether to use dashed border</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>hairline</td><td>Whether to use hairline</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>content-position</td><td>Content position, can be set to <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>center</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>content</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">DividerProps</span>, <span class="hljs-title class_">DividerContentPosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-divider-margin</td><td><em>var(--van-padding-md) 0</em></td><td>-</td></tr><tr><td>--van-divider-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-divider-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-divider-line-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-divider-border-color</td><td><em>var(--van-border-color)</em></td><td>-</td></tr><tr><td>--van-divider-content-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-divider-content-left-width</td><td><em>10%</em></td><td>-</td></tr><tr><td>--van-divider-content-right-width</td><td><em>10%</em></td><td>-</td></tr></tbody></table></div>`,15),l=[d],h={__name:"README",setup(i,{expose:t}){return t({frontmatter:{}}),(o,c)=>(a(),s("div",n,l))}};export{h as default};
