import{o as a,a as t,z as n}from"./vue-libs-be453a05.js";const e={class:"van-doc-markdown-body"},d=n(`<h1>Sidebar</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>The vertically displayed navigation bar is used to switch between different content areas.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Sidebar</span>, <span class="hljs-title class_">SidebarItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Sidebar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SidebarItem</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-sidebar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">return</span> { active };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="show-badge" tabindex="-1">Show Badge</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-sidebar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-sidebar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="change-event" tabindex="-1">Change Event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title 1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title 2&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title 3&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-sidebar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">index</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">\`Title <span class="hljs-subst">\${index + <span class="hljs-number">1</span>}</span>\`</span>);
    <span class="hljs-keyword">return</span> {
      active,
      onChange,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="sidebar-props" tabindex="-1">Sidebar Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Index of chosen item</td><td><em>number | string</em></td><td><code>0</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="sidebar-events" tabindex="-1">Sidebar Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted when chosen item changed</td><td><em>index: number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="sidebaritem-props" tabindex="-1">SidebarItem Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Content</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>dot</td><td>Whether to show red dot</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>badge</td><td>Content of the badge</td><td><em>number | string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>badge-props <code>v3.2.8</code></td><td>Props of Badge, see <a href="#/en-US/badge#props" target="_blank">Badge - props</a></td><td><em>BadgeProps</em></td><td>-</td></tr><tr><td>disabled</td><td>Whether to be disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>url</td><td>Link</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>Target route of the link, same as to of vue-router</td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>If true, the navigation will not leave a history record</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="sidebaritem-events" tabindex="-1">SidebarItem Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when an item is clicked</td><td><em>index: number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="sidebaritem-slots" tabindex="-1">SidebarItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>Custom item title</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SidebarProps</span>, <span class="hljs-title class_">SidebarItemProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-sidebar-width</td><td><em>80px</em></td><td>-</td></tr><tr><td>--van-sidebar-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-sidebar-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-sidebar-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-sidebar-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-sidebar-padding</td><td><em>20px var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-sidebar-active-color</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-sidebar-background</td><td><em>var(--van-background)</em></td><td>-</td></tr><tr><td>--van-sidebar-selected-font-weight</td><td><em>var(--van-font-bold)</em></td><td>-</td></tr><tr><td>--van-sidebar-selected-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-sidebar-selected-border-width</td><td><em>4px</em></td><td>-</td></tr><tr><td>--van-sidebar-selected-border-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-sidebar-selected-border-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-sidebar-selected-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr></tbody></table></div>`,17),l=[d],h={__name:"README",setup(r,{expose:s}){return s({frontmatter:{}}),(i,c)=>(a(),t("div",e,l))}};export{h as default};