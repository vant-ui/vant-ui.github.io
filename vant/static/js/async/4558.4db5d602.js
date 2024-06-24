"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4558"],{54250:function(s,n,a){a.r(n);var l=a("38061");let t=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,l.wg)(),(0,l.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useCustomFieldValue</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to custom Field value.</p>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>If you want to custom Form items, you can insert your component into the <code>input</code> slot of the Field component, and call the <code>useCustomFieldValue</code> method inside your custom component.</p>\n<h4 id="mycomponent" tabindex="-1">MyComponent</h4>\n<pre><code class="language-js"><span class="hljs-comment">// MyComponent.vue</span>\n<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useCustomFieldValue } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> myValue = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n\n    <span class="hljs-title function_">useCustomFieldValue</span>(<span class="hljs-function">() =&gt;</span> myValue.<span class="hljs-property">value</span>);\n\n    <span class="hljs-keyword">return</span> { myValue };\n  },\n};\n</code></pre>\n<h4 id="form" tabindex="-1">Form</h4>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;my-field&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Custom Field&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">my-component</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useCustomFieldValue</span>(<span class="hljs-params">customValue: () =&gt; <span class="hljs-built_in">unknown</span></span>): <span class="hljs-built_in">void</span>;\n</code></pre>\n</div><div class="van-doc-card"><h3 id="params" tabindex="-1">Params</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default Value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>customValue</td>\n<td>Function to get field value</td>\n<td><em>() =&gt; unknown</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,t))}}}]);