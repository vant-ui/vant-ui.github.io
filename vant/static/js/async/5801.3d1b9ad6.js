"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5801"],{80602:function(s,n,a){a.r(n);var l=a("38061");let t=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,l.wg)(),(0,l.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useToggle</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u7528\u4E8E\u5728 <code>true</code> \u548C <code>false</code> \u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002</p>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { useToggle } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> [state, toggle] = <span class="hljs-title function_">useToggle</span>();\n\n    <span class="hljs-title function_">toggle</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>\n\n    <span class="hljs-title function_">toggle</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; false</span>\n\n    <span class="hljs-title function_">toggle</span>();\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="she-zhi-mo-ren-zhi" tabindex="-1">\u8BBE\u7F6E\u9ED8\u8BA4\u503C</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { useToggle } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> [state, toggle] = <span class="hljs-title function_">useToggle</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useToggle</span>(<span class="hljs-params">\n  defaultValue: <span class="hljs-built_in">boolean</span>,\n</span>): [<span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">boolean</span>&gt;, <span class="hljs-function">(<span class="hljs-params">newValue: <span class="hljs-built_in">boolean</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>];\n</code></pre>\n</div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">\u53C2\u6570</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>defaultValue</td>\n<td>\u9ED8\u8BA4\u503C</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">\u8FD4\u56DE\u503C</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>state</td>\n<td>\u72B6\u6001\u503C</td>\n<td><em>Ref&lt;boolean&gt;</em></td>\n</tr>\n<tr>\n<td>toggle</td>\n<td>\u5207\u6362\u72B6\u6001\u503C\u7684\u51FD\u6570</td>\n<td><em>(newValue?: boolean) =&gt; void</em></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,t))}}}]);