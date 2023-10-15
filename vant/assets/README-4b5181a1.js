import{_ as s}from"./locales-be796722.js";import{o as a,a as t,z as n}from"./vue-libs-19c20d28.js";const e={},l={class:"van-doc-markdown-body"},p=n(`<h1>BackTop</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>A button to back to top.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BackTop</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">BackTop</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>Please scroll the demo page to display the back top button.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];
    <span class="hljs-keyword">return</span> { list };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-position" tabindex="-1">Custom Position</h3><p>Using <code>right</code> and <code>bottom</code> props to set the position of BackTop component.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;15vw&quot;</span> <span class="hljs-attr">bottom</span>=<span class="hljs-string">&quot;10vh&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];
    <span class="hljs-keyword">return</span> { list };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-content" tabindex="-1">Custom Content</h3><p>Using the default slot to custom content.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom&quot;</span>&gt;</span>Back Top<span class="hljs-tag">&lt;/<span class="hljs-name">van-back-top</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.custom</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
    <span class="hljs-attribute">text-align</span>: center;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];
    <span class="hljs-keyword">return</span> { list };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="set-scroll-target" tabindex="-1">Set Scroll Target</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;.container&quot;</span> <span class="hljs-attr">bottom</span>=<span class="hljs-string">&quot;30vh&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.container</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">60vh</span>;
    <span class="hljs-attribute">overflow</span>: auto;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];
    <span class="hljs-keyword">return</span> { list };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="immediate-scroll" tabindex="-1">Immediate Scroll</h3><p>Add <code>immediate</code> prop to scroll to top immediately.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-back-top</span> <span class="hljs-attr">immediate</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>Can be a selector or a DOM ELement, default closest parent scrolling container</td><td><em>string | HTMLElement</em></td><td>-</td></tr><tr><td>right</td><td>Right distance of the page, the default unit is px</td><td><em>number | string</em></td><td><code>30</code></td></tr><tr><td>bottom</td><td>Bottom distance of the page, the default unit is px</td><td><em>number | string</em></td><td><code>40</code></td></tr><tr><td>offset</td><td>The component will not display until the scroll offset reaches this value</td><td><em>number</em></td><td><code>200</code></td></tr><tr><td>teleport</td><td>Specifies a target element where BackTop will be mounted</td><td><em>string | Element</em></td><td><code>body</code></td></tr><tr><td>immediate <code>v4.0.9</code></td><td>Whether to scroll to top immediately</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>z-index</td><td>Set the z-index to a fixed value</td><td><em>number | string</em></td><td><code>100</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when Component is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>customize default content</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">BackTopProps</span>, <span class="hljs-title class_">BackTopThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-back-top-size</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-back-top-icon-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-back-top-right</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-back-top-bottom</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-back-top-z-index</td><td><em>100</em></td><td>-</td></tr><tr><td>--van-back-top-text-color</td><td><em>#fff</em></td><td>-</td></tr><tr><td>--van-back-top-background</td><td><em>var(--van-blue)</em></td><td>-</td></tr></tbody></table></div>`,16),c=[p];function o(d,r){return a(),t("div",l,c)}const m=s(e,[["render",o]]);export{m as default};
