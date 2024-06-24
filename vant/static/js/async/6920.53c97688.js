"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6920"],{72155:function(n,s,t){t.r(s);var a=t("38061");let e=["innerHTML"];s.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useRect</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u83B7\u53D6\u5143\u7D20\u7684\u5927\u5C0F\u53CA\u5176\u76F8\u5BF9\u4E8E\u89C6\u53E3\u7684\u4F4D\u7F6E\uFF0C\u7B49\u4EF7\u4E8E <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect" target="_blank">Element.getBoundingClientRect</a>\u3002</p>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, onMounted } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useRect } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();\n\n    <span class="hljs-title function_">onMounted</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">const</span> rect = <span class="hljs-title function_">useRect</span>(root);\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(rect); <span class="hljs-comment">// -&gt; \u5143\u7D20\u7684\u5927\u5C0F\u53CA\u5176\u76F8\u5BF9\u4E8E\u89C6\u53E3\u7684\u4F4D\u7F6E</span>\n    });\n\n    <span class="hljs-keyword">return</span> { root };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useRect</span>(<span class="hljs-params">\n  element: Element | Window | Ref&lt;Element | Window | <span class="hljs-literal">undefined</span>&gt;,\n</span>): <span class="hljs-title class_">DOMRect</span>;\n</code></pre>\n</div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">\u8FD4\u56DE\u503C</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>width</td>\n<td>\u5BBD\u5EA6</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>height</td>\n<td>\u9AD8\u5EA6</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>top</td>\n<td>\u9876\u90E8\u4E0E\u89C6\u56FE\u7A97\u53E3\u5DE6\u4E0A\u89D2\u7684\u8DDD\u79BB</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>left</td>\n<td>\u5DE6\u4FA7\u4E0E\u89C6\u56FE\u7A97\u53E3\u5DE6\u4E0A\u89D2\u7684\u8DDD\u79BB</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>right</td>\n<td>\u53F3\u4FA7\u4E0E\u89C6\u56FE\u7A97\u53E3\u5DE6\u4E0A\u89D2\u7684\u8DDD\u79BB</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>bottom</td>\n<td>\u5E95\u90E8\u4E0E\u89C6\u56FE\u7A97\u53E3\u5DE6\u4E0A\u89D2\u7684\u8DDD\u79BB</td>\n<td><em>number</em></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);