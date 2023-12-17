/*! For license information please see 4859.e1a03d5a.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4859"],{98435:function(s,a,n){"use strict";n.r(a),n.d(a,{default:function(){return l}});var t=n("76694"),e=n("35859"),l=(0,e.default)({},[["render",t.render]])},76694:function(s,a,n){"use strict";n.r(a);var t=n("82634");n.es(t,a)},82634:function(s,a,n){"use strict";n.r(a),n.d(a,{render:function(){return p}});var t=n("38613");let e={class:"van-doc-markdown-body"},l=[(0,t.createStaticVNode)('<h1>useToggle</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to switch between <code>true</code> and <code>false</code>.</p></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { useToggle } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> [state, toggle] = <span class="hljs-title function_">useToggle</span>();\n\n    <span class="hljs-title function_">toggle</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>\n\n    <span class="hljs-title function_">toggle</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; false</span>\n\n    <span class="hljs-title function_">toggle</span>();\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>\n  },\n};\n</code></pre></div><div class="van-doc-card"><h3 id="default-value" tabindex="-1">Default Value</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { useToggle } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> [state, toggle] = <span class="hljs-title function_">useToggle</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>\n  },\n};\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3><pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useToggle</span>(<span class="hljs-params">\n  defaultValue: <span class="hljs-built_in">boolean</span>,\n</span>): [<span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">boolean</span>&gt;, <span class="hljs-function">(<span class="hljs-params">newValue: <span class="hljs-built_in">boolean</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>];\n</code></pre></div><div class="van-doc-card"><h3 id="params" tabindex="-1">Params</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>defaultValue</td><td>Default value</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="return-value" tabindex="-1">Return Value</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>state</td><td>State</td><td><em>Ref&lt;boolean&gt;</em></td></tr><tr><td>toggle</td><td>Function to switch state</td><td><em>(newValue?: boolean) =&gt; void</em></td></tr></tbody></table></div>',9)];function p(s,a){return(0,t.openBlock)(),(0,t.createElementBlock)("div",e,l)}}}]);