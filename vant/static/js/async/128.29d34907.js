"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["128"],{77979:function(s,n,a){a.r(n);var t=a("38061");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>FloatingBubble</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Clickable bubbles that hover around the edge of the page. Please upgrade <code>vant</code> to &gt;= v4.6.0 before using this component.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FloatingBubble</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">FloatingBubble</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<p>The floating bubble is displayed by default in the bottom right corner and allows vertical dragging in the y-axis direction. You can set the icon of the bubble using the <code>icon</code> prop.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-bubble</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClick&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClick</span> = (<span class="hljs-params"></span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;Click Bubble&#x27;</span>);\n    };\n    <span class="hljs-keyword">return</span> { onClick };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="free-magnetic" tabindex="-1">Free Magnetic</h3>\n<p>Allow x and y drags to attach to the nearest side of the x axis.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-bubble</span>\n  <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;xy&quot;</span>\n  <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat&quot;</span>\n  <span class="hljs-attr">magnetic</span>=<span class="hljs-string">&quot;x&quot;</span>\n  @<span class="hljs-attr">offset-change</span>=<span class="hljs-string">&quot;onOffsetChange&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onOffsetChange</span> = (<span class="hljs-params">offset</span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(<span class="hljs-string">`x: <span class="hljs-subst">${offset.x.toFixed(<span class="hljs-number">0</span>)}</span>, y: <span class="hljs-subst">${offset.y.toFixed(<span class="hljs-number">0</span>)}</span>`</span>);\n    };\n    <span class="hljs-keyword">return</span> { onOffsetChange };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="use-v-model" tabindex="-1">Use v-model</h3>\n<p>Use <code>v-model:offset</code> control the position.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-bubble</span> <span class="hljs-attr">v-model:offset</span>=<span class="hljs-string">&quot;offset&quot;</span> <span class="hljs-attr">axis</span>=<span class="hljs-string">&quot;xy&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> offset = <span class="hljs-title function_">ref</span>({ <span class="hljs-attr">x</span>: <span class="hljs-number">200</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">400</span> });\n    <span class="hljs-keyword">return</span> { offset };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:offset</td>\n<td>Control bubble position</td>\n<td><em>OffsetType</em></td>\n<td><code>Default right-bottom coordinate</code></td>\n</tr>\n<tr>\n<td>axis</td>\n<td>Drag direction, <code>xy</code> stands for free drag, <code>lock</code> stands for disable drag</td>\n<td><em>\'x\' | \'y\' | \'xy\' | \'lock\'</em></td>\n<td><code>y</code></td>\n</tr>\n<tr>\n<td>magnetic</td>\n<td>Direction of automatic magnetic absorption</td>\n<td><em>\'x\' | \'y\'</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Bubble icon</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>gap</td>\n<td>Minimum gap between the bubble and the window, unit <code>px</code></td>\n<td><em>number</em></td>\n<td><code>24</code></td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>Specifies a target element where BackTop will be mounted</td>\n<td><em>string | Element</em></td>\n<td><code>body</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>Triggered when a component is clicked</td>\n<td><em>MouseEvent</em></td>\n</tr>\n<tr>\n<td>offset-change</td>\n<td>Triggered when the position changes due to user dragging</td>\n<td><em>{x: string, y: string}</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Customize the bubble display content</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">FloatingBubbleProps</span>,\n  <span class="hljs-title class_">FloatingBubbleAxis</span>,\n  <span class="hljs-title class_">FloatingBubbleMagnetic</span>,\n  <span class="hljs-title class_">FloatingBubbleOffset</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-floating-bubble-size</td>\n<td><em>48px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-bubble-initial-gap</td>\n<td><em>24px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-bubble-icon-size</td>\n<td><em>28px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-bubble-background</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-bubble-color</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-bubble-z-index</td>\n<td><em>999</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-floating-bubble-border-radius</td>\n<td><em>--van-floating-bubble-border-radius</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);