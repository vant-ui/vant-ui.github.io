import{_ as t}from"./locales-be796722.js";import{o as s,a,z as n}from"./vue-libs-19c20d28.js";const e={},d={class:"van-doc-markdown-body"},l=n(`<h1>NavBar</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Provide navigation function for the page, often used at the top of the page.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NavBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NavBar</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="back" tabindex="-1">Back</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">left-text</span>=<span class="hljs-string">&quot;Back&quot;</span>
  <span class="hljs-attr">left-arrow</span>
  @<span class="hljs-attr">click-left</span>=<span class="hljs-string">&quot;onClickLeft&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickLeft</span> = (<span class="hljs-params"></span>) =&gt; history.<span class="hljs-title function_">back</span>();
    <span class="hljs-keyword">return</span> {
      onClickLeft,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="right-button" tabindex="-1">Right Button</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">left-text</span>=<span class="hljs-string">&quot;Back&quot;</span>
  <span class="hljs-attr">right-text</span>=<span class="hljs-string">&quot;Button&quot;</span>
  <span class="hljs-attr">left-arrow</span>
  @<span class="hljs-attr">click-left</span>=<span class="hljs-string">&quot;onClickLeft&quot;</span>
  @<span class="hljs-attr">click-right</span>=<span class="hljs-string">&quot;onClickRight&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickLeft</span> = (<span class="hljs-params"></span>) =&gt; history.<span class="hljs-title function_">back</span>();
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickRight</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;Button&#39;</span>);
    <span class="hljs-keyword">return</span> {
      onClickLeft,
      onClickRight,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="use-slot" tabindex="-1">Use Slot</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">left-text</span>=<span class="hljs-string">&quot;Back&quot;</span> <span class="hljs-attr">left-arrow</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;search&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-nav-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="disable-button" tabindex="-1">Disable Button</h3><p>Use the <code>left-disabled</code> or <code>right-disabled</code> props to disable the buttons on either side. The prop reduces the opacity of the button and makes it unclickable.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-nav-bar</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">left-text</span>=<span class="hljs-string">&quot;Back&quot;</span>
  <span class="hljs-attr">right-text</span>=<span class="hljs-string">&quot;Button&quot;</span>
  <span class="hljs-attr">left-arrow</span>
  <span class="hljs-attr">left-disabled</span>
  <span class="hljs-attr">right-disabled</span>
/&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>left-text</td><td>Left Text</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>right-text</td><td>Right Text</td><td><em>string</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>left-disabled <code>v4.6.8</code></td><td>Whether to disable the left button, decrease opacity and make it unclickable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>right-disabled <code>v4.6.8</code></td><td>Whether to disable the right button, decrease opacity and make it unclickable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>left-arrow</td><td>Whether to show left arrow</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>border</td><td>Whether to show bottom border</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>fixed</td><td>Whether to fixed top</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>Whether to generate a placeholder element when fixed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>z-index</td><td>Z-index</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>safe-area-inset-top</td><td>Whether to enable top safe area adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>clickable</td><td>Whether to show click feedback when the left or right content is clicked</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>Custom title</td></tr><tr><td>left</td><td>Custom left side content</td></tr><tr><td>right</td><td>Custom right side content</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click-left</td><td>Emitted when the left button is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-right</td><td>Emitted when the right button is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">NavBarProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-nav-bar-height</td><td><em>46px</em></td><td>-</td></tr><tr><td>--van-nav-bar-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-nav-bar-arrow-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-nav-bar-icon-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-nav-bar-text-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-nav-bar-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-nav-bar-title-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-nav-bar-z-index</td><td><em>1</em></td><td>-</td></tr></tbody></table></div>`,16),o=[l];function r(c,p){return s(),a("div",d,o)}const g=t(e,[["render",r]]);export{g as default};
