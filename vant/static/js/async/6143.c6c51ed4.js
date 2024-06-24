"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6143"],{82693:function(s,a,n){n.r(a);var l=n("38061");let t=["innerHTML"];a.default={setup:()=>({html:""}),render:()=>((0,l.wg)(),(0,l.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useToggle</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to switch between <code>true</code> and <code>false</code>.</p>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { useToggle } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> [state, toggle] = <span class="hljs-title function_">useToggle</span>();\n\n    <span class="hljs-title function_">toggle</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>\n\n    <span class="hljs-title function_">toggle</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; false</span>\n\n    <span class="hljs-title function_">toggle</span>();\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="default-value" tabindex="-1">Default Value</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { useToggle } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> [state, toggle] = <span class="hljs-title function_">useToggle</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(state.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; true</span>\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useToggle</span>(<span class="hljs-params">\n  defaultValue: <span class="hljs-built_in">boolean</span>,\n</span>): [<span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">boolean</span>&gt;, <span class="hljs-function">(<span class="hljs-params">newValue: <span class="hljs-built_in">boolean</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>];\n</code></pre>\n</div><div class="van-doc-card"><h3 id="params" tabindex="-1">Params</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default Value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>defaultValue</td>\n<td>Default value</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="return-value" tabindex="-1">Return Value</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>state</td>\n<td>State</td>\n<td><em>Ref&lt;boolean&gt;</em></td>\n</tr>\n<tr>\n<td>toggle</td>\n<td>Function to switch state</td>\n<td><em>(newValue?: boolean) =&gt; void</em></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,t))}}}]);