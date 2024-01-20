/*! For license information please see 979.a358a2b4.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["979"],{38642:function(s,a,n){"use strict";n.r(a),n.d(a,{default:function(){return p}});var t=n("69298");let l=["innerHTML"];var p={setup:()=>({html:""}),render:()=>((0,t.openBlock)(),(0,t.createElementBlock)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Layout</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Quickly and easily create layouts with <code>van-row</code> and <code>van-col</code>.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Col</span>, <span class="hljs-title class_">Row</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Col</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Row</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>Layout are based on 24-column. The attribute <code>span</code> in <code>Col</code> means the number of column the grid spans. Of course, You can use <code>offset</code> attribute to set number of spacing on the left side of the grid.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-row</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span>span: 4<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">offset</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span>offset: 4, span: 10<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>span: 6<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-row</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">offset</span>=<span class="hljs-string">&quot;12&quot;</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>offset: 12, span: 12<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-row</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="column-spacing" tabindex="-1">Column Spacing</h3>\n<p>Set grid spacing using <code>gutter</code> attribute. The default value is 0.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-row</span> <span class="hljs-attr">gutter</span>=<span class="hljs-string">&quot;20&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-row</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="vertical-spacing" tabindex="-1">Vertical Spacing</h3>\n<p>If you want to set the vertical spacing, you can set <code>[horizontal, vertical]</code> as an array.</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- set the vertical spacing --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">&quot;[20, 20]&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>span: 12<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>span: 12<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>span: 12<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>span: 12<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-row</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="justify-content" tabindex="-1">Justify Content</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-row</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>span: 6<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>span: 6<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>span: 6<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-row</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-row</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;end&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>span: 6<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>span: 6<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>span: 6<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-row</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-row</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;space-between&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>span: 6<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>span: 6<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>span: 6<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-row</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-row</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;space-around&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>span: 6<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>span: 6<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-col</span> <span class="hljs-attr">span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>span: 6<span class="hljs-tag">&lt;/<span class="hljs-name">van-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-row</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="row-props" tabindex="-1">Row Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>gutter</td>\n<td>Grid spacing\uFF08px\uFF09</td>\n<td><em>number | string | Array</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>tag</td>\n<td>Custom element tag</td>\n<td><em>string</em></td>\n<td><code>div</code></td>\n</tr>\n<tr>\n<td>justify</td>\n<td>Flex main axis, can be set to end/center/space-around/space-between</td>\n<td><em>string</em></td>\n<td><code>start</code></td>\n</tr>\n<tr>\n<td>align</td>\n<td>Flex cross axis, be set to center/bottom</td>\n<td><em>string</em></td>\n<td><code>top</code></td>\n</tr>\n<tr>\n<td>wrap</td>\n<td>Whether to wrap</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="col-props" tabindex="-1">Col Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>span</td>\n<td>number of column the grid spans</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>number of spacing on the left side of the grid</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>tag</td>\n<td>Custom element tag</td>\n<td><em>string</em></td>\n<td><code>div</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="row-events" tabindex="-1">Row Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>Emitted when the row is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="col-events" tabindex="-1">Col Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>Emitted when the col is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ColProps</span>, <span class="hljs-title class_">RowProps</span>, <span class="hljs-title class_">RowAlign</span>, <span class="hljs-title class_">RowJustify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div>'},null,8,l))}}}]);