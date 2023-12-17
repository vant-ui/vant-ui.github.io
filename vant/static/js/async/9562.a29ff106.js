/*! For license information please see 9562.a29ff106.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9562"],{24957:function(s,a,n){"use strict";n.r(a),n.d(a,{default:function(){return p}});var t=n("12517"),l=n("35859"),p=(0,l.default)({},[["render",t.render]])},12517:function(s,a,n){"use strict";n.r(a);var t=n("96803");n.es(t,a)},96803:function(s,a,n){"use strict";n.r(a),n.d(a,{render:function(){return c}});var t=n("38613");let l={class:"van-doc-markdown-body"},p=[(0,t.createStaticVNode)('<h1>Space</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Set the spacing between elements.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Space</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Space</span>);\n</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-space</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="vertical" tabindex="-1">Vertical</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-space</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">fill</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="custom-size" tabindex="-1">Custom Size</h3><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 20px --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-space</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;20&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- 2rem --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-space</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;2rem&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>\n</code></pre></div><div class="van-doc-card"><h3 id="alignment" tabindex="-1">Alignment</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;align&quot;</span>\n  <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>\n  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-bottom: 16px&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;start&quot;</span>&gt;</span>start<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>center<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;end&quot;</span>&gt;</span>end<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;baseline&quot;</span>&gt;</span>baseline<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-space</span> <span class="hljs-attr">:align</span>=<span class="hljs-string">&quot;align&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 16px; background: #f3f2f5&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>{{ align }}<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 40px 20px; background: #fff&quot;</span>&gt;</span>Block<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> align = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;center&#39;</span>);\n    <span class="hljs-keyword">return</span> { align };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="auto-wrap" tabindex="-1">Auto Wrap</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-space</span> <span class="hljs-attr">wrap</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-space</span>&gt;</span>\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>direction</td><td>Spacing direction</td><td><em>vertical | horizontal</em></td><td><code>horizontal</code></td></tr><tr><td>size</td><td>Spacing size, such as <code>20px</code> <code>2em</code>. The default unit is px, supports using array to set horizontal and vertical spacing</td><td><em>number | string | number[] | string[]</em></td><td><code>8px</code></td></tr><tr><td>align</td><td>Spacing alignment</td><td><em>start | end | center | baseline</em></td><td>-</td></tr><tr><td>wrap</td><td>Whether to wrap automatically, only for horizontal alignment</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>fill</td><td>Whether to render Space as a block element and fill the parent element</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Default slot</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SpaceProps</span>, <span class="hljs-title class_">SpaceSize</span>, <span class="hljs-title class_">SpaceAlign</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre></div>',13)];function c(s,a){return(0,t.openBlock)(),(0,t.createElementBlock)("div",l,p)}}}]);