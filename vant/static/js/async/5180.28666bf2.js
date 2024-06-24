"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5180"],{66721:function(s,a,n){n.r(a);var i=n("38061");let l=["innerHTML"];a.default={setup:()=>({html:""}),render:()=>((0,i.wg)(),(0,i.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>usePageVisibility</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u83B7\u53D6\u9875\u9762\u7684\u53EF\u89C1\u72B6\u6001\u3002</p>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { usePageVisibility } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> pageVisibility = <span class="hljs-title function_">usePageVisibility</span>();\n\n    <span class="hljs-title function_">watch</span>(pageVisibility, <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;visibility: &#x27;</span>, value);\n    });\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">VisibilityState</span> = <span class="hljs-string">&#x27;visible&#x27;</span> | <span class="hljs-string">&#x27;hidden&#x27;</span>;\n\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">usePageVisibility</span>(<span class="hljs-params"></span>): <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-title class_">VisibilityState</span>&gt;;\n</code></pre>\n</div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">\u8FD4\u56DE\u503C</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>visibilityState</td>\n<td>\u9875\u9762\u5F53\u524D\u7684\u53EF\u89C1\u72B6\u6001\uFF0C<code>visible</code> \u4E3A\u53EF\u89C1\uFF0C<code>hidden</code> \u4E3A\u9690\u85CF</td>\n<td><em>Ref&lt;VisibilityState&gt;</em></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);