"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7558"],{71175:function(n,a,s){s.r(a);var t=s("38061");let e=["innerHTML"];a.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>FloatingPanel</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>A panel that floats at the bottom of a page, which can be dragged up and down to browse content, often used to provide additional functionality or information. Please upgrade <code>vant</code> to &gt;= v4.5.0 before using this component.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FloatingPanel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">FloatingPanel</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>The default height of FloatingPanel is <code>100px</code>, and users can drag it to expand the panel to a height of <code>60%</code> of the screen height.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-panel</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span>\n      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in 26&quot;</span>\n      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>\n      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;String.fromCharCode(i + 64)&quot;</span>\n      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-floating-panel</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-anchors" tabindex="-1">Custom Anchors</h3>\n<p>You can set the anchor position of FloatingPanel through the <code>anchors</code> attribute, and control the display height of the current panel through <code>v-model:height</code>.</p>\n<p>For example, you can make the panel stop at three positions: <code>100px</code>, 40% of the screen height, and 70% of the screen height.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-panel</span> <span class="hljs-attr">v-model:height</span>=<span class="hljs-string">&quot;height&quot;</span> <span class="hljs-attr">:anchors</span>=<span class="hljs-string">&quot;anchors&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center; padding: 15px&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Panel Show Height {{ height.toFixed(0) }} px<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-floating-panel</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> anchors = [\n      <span class="hljs-number">100</span>,\n      <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-number">0.4</span> * <span class="hljs-variable language_">window</span>.<span class="hljs-property">innerHeight</span>),\n      <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-number">0.7</span> * <span class="hljs-variable language_">window</span>.<span class="hljs-property">innerHeight</span>),\n    ];\n    <span class="hljs-keyword">const</span> height = <span class="hljs-title function_">ref</span>(anchors[<span class="hljs-number">0</span>]);\n\n    <span class="hljs-keyword">return</span> { anchors, height };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="head-drag-only" tabindex="-1">Head Drag Only</h3>\n<p>By default, both the header and content areas of FloatingPanel can be dragged, but you can disable dragging of the content area through the <code>content-draggable</code> attribute.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-panel</span> <span class="hljs-attr">:content-draggable</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center; padding: 15px&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Content cannot be dragged<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-floating-panel</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:height</td>\n<td>The current display height of the panel</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>anchors</td>\n<td>Setting custom anchors, unit <code>px</code></td>\n<td><em>number[]</em></td>\n<td><code>[100, window.innerWidth * 0.6]</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Transition duration, unit second</td>\n<td><em>number | string</em></td>\n<td><code>0.3</code></td>\n</tr>\n<tr>\n<td>content-draggable</td>\n<td>Allow dragging content</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>lock-scroll <code>v4.6.4</code></td>\n<td>When not dragging, Whether to lock background scroll</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>safe-area-inset-bottom</td>\n<td>Whether to enable bottom safe area adaptation</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>height-change</td>\n<td>Emitted when panel height is changed and the dragging is finished</td>\n<td><em>{ height: number }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Custom panel content</td>\n</tr>\n<tr>\n<td>header</td>\n<td>Custom panel header</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">FloatingPanelProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-floating-panel-border-radius</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-panel-header-height</td>\n<td><em>30px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-panel-z-index</td>\n<td><em>999</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-panel-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-panel-bar-width</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-panel-bar-height</td>\n<td><em>3px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-panel-bar-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);