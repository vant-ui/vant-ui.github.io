/*! For license information please see 1874.8bc7c2d3.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["1874"],{41851:function(s,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var n=a("45067"),e=a("35859"),l=(0,e.default)({},[["render",n.render]])},45067:function(s,t,a){"use strict";a.r(t);var n=a("85470");a.es(n,t)},85470:function(s,t,a){"use strict";a.r(t),a.d(t,{render:function(){return o}});var n=a("38613");let e={class:"van-doc-markdown-body"},l=[(0,n.createStaticVNode)('<h1>TextEllipsis</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Display ellipsis for long text and support for expanding or collapsing text. Please upgrade <code>vant</code> to &gt;= v4.1.0 before using this component.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TextEllipsis</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TextEllipsis</span>);\n</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>Show one rows by default.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-text-ellipsis</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> text =\n      <span class="hljs-string">&#39;Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.&#39;</span>;\n    <span class="hljs-keyword">return</span> { text };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="expand-collapse" tabindex="-1">Expand/Collapse</h3><p>Support Expand/Collapse.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-text-ellipsis</span>\n  <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;text&quot;</span>\n  <span class="hljs-attr">expand-text</span>=<span class="hljs-string">&quot;expand&quot;</span>\n  <span class="hljs-attr">collapse-text</span>=<span class="hljs-string">&quot;collapse&quot;</span>\n/&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> text =\n      <span class="hljs-string">&quot;The fleeting time of one&#39;s life is everything that belongs to a person. Only this thing truly belongs to you. Everything else is just a momentary pleasure or misfortune, which will soon be gone with the passing of time.&quot;</span>;\n    <span class="hljs-keyword">return</span> { text };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="customize-rows" tabindex="-1">Customize rows</h3><p>Display the number of <code>rows</code> by setting rows.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-text-ellipsis</span>\n  <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;3&quot;</span>\n  <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;text&quot;</span>\n  <span class="hljs-attr">expand-text</span>=<span class="hljs-string">&quot;expand&quot;</span>\n  <span class="hljs-attr">collapse-text</span>=<span class="hljs-string">&quot;collapse&quot;</span>\n/&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> text =\n      <span class="hljs-string">&quot;That day, I turned twenty-one. In the golden age of my life, I was full of dreams. I wanted to love, to eat, and to instantly transform into one of these clouds, part alight, part darkened. It was only later that I understood life is but a slow, drawn-out process of getting your balls crushed. Day by day, you get older. Day by day, your dreams fade. In the end you are no different from a crushed ox. But I hadn&#39;t foreseen any of it on my twenty-first birthday. I thought I would be vigorous forever, and that nothing could ever crush me.&quot;</span>;\n    <span class="hljs-keyword">return</span> { text };\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="custom-collapse-position" tabindex="-1">Custom Collapse Position</h3><ul><li>Collapse the beginning part of the content:</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-text-ellipsis</span>\n  <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;1&quot;</span>\n  <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;text&quot;</span>\n  <span class="hljs-attr">expand-text</span>=<span class="hljs-string">&quot;expand&quot;</span>\n  <span class="hljs-attr">collapse-text</span>=<span class="hljs-string">&quot;collapse&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;start&quot;</span>\n/&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> text =\n      <span class="hljs-string">&quot;That day, I turned twenty-one. In the golden age of my life, I was full of dreams. I wanted to love, to eat, and to instantly transform into one of these clouds, part alight, part darkened. It was only later that I understood life is but a slow, drawn-out process of getting your balls crushed. Day by day, you get older. Day by day, your dreams fade. In the end you are no different from a crushed ox. But I hadn&#39;t foreseen any of it on my twenty-first birthday. I thought I would be vigorous forever, and that nothing could ever crush me.&quot;</span>;\n    <span class="hljs-keyword">return</span> { text };\n  },\n};\n</code></pre><ul><li>Collapse the middle part of the content:</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-text-ellipsis</span>\n  <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;2&quot;</span>\n  <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;text&quot;</span>\n  <span class="hljs-attr">expand-text</span>=<span class="hljs-string">&quot;expand&quot;</span>\n  <span class="hljs-attr">collapse-text</span>=<span class="hljs-string">&quot;collapse&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;middle&quot;</span>\n/&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> text =\n      <span class="hljs-string">&quot;That day, I turned twenty-one. In the golden age of my life, I was full of dreams. I wanted to love, to eat, and to instantly transform into one of these clouds, part alight, part darkened. It was only later that I understood life is but a slow, drawn-out process of getting your balls crushed. Day by day, you get older. Day by day, your dreams fade. In the end you are no different from a crushed ox. But I hadn&#39;t foreseen any of it on my twenty-first birthday. I thought I would be vigorous forever, and that nothing could ever crush me.&quot;</span>;\n    <span class="hljs-keyword">return</span> { text };\n  },\n};\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>rows</td><td>Number of rows displayed</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>content</td><td>The text displayed</td><td><em>string</em></td><td>-</td></tr><tr><td>expand-text</td><td>Expand operation text</td><td><em>string</em></td><td>-</td></tr><tr><td>collapse-text</td><td>Collapse operation text</td><td><em>string</em></td><td>-</td></tr><tr><td>dots <code>v4.2.0</code></td><td>Text content of ellipsis</td><td><em>string</em></td><td><code>&#39;...&#39;</code></td></tr><tr><td>position <code>v4.6.2</code></td><td>Can be set to <code>start</code> <code>middle</code></td><td><em>string</em></td><td><code>&#39;end&#39;</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click-action</td><td>Emitted when Expand/Collapse is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get TextEllipsis instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>toggle</td><td>Toggle expanded status</td><td><em>expanded?: boolean</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">TextEllipsisProps</span>,\n  <span class="hljs-title class_">TextEllipsisInstance</span>,\n  <span class="hljs-title class_">TextEllipsisThemeVars</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre><p><code>TextEllipsisInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TextEllipsisInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> textEllipsisRef = ref&lt;<span class="hljs-title class_">TextEllipsisInstance</span>&gt;();\n\ntextEllipsisRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggle</span>();\n</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-text-ellipsis-action-color</td><td><em>var(--van-blue)</em></td><td>Color of action text</td></tr><tr><td>--van-text-ellipsis-line-height</td><td><em>1.6</em></td><td>Line height of text</td></tr></tbody></table></div>',15)];function o(s,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",e,l)}}}]);