"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1312"],{39228:function(n,t,s){s.r(t);var a=s("38061");let e=["innerHTML"];t.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Notify</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>The display message prompt is at the top of the page, and supports two methods: component call and function call.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Notify</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Notify</span>);\n</code></pre>\n</div><div class="van-doc-card"><h3 id="function-call" tabindex="-1">Function Call</h3>\n<p>Vant provides some utility functions that can quickly evoke global <code>Notify</code> components.</p>\n<p>For example, calling the <code>showNotify</code> function will render a Dialog directly in the page.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showNotify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-title function_">showNotify</span>(<span class="hljs-string">&#x27;Notify Message&#x27;</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showNotify, closeNotify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-comment">// auto close after 3s</span>\n<span class="hljs-title function_">showNotify</span>(<span class="hljs-string">&#x27;Message&#x27;</span>);\n\n<span class="hljs-comment">// manually close</span>\n<span class="hljs-title function_">closeNotify</span>();\n</code></pre>\n</div><div class="van-doc-card"><h3 id="notify-type" tabindex="-1">Notify Type</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showNotify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-title function_">showNotify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;primary&#x27;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Notify Message&#x27;</span> });\n<span class="hljs-title function_">showNotify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;success&#x27;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Notify Message&#x27;</span> });\n<span class="hljs-title function_">showNotify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;danger&#x27;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Notify Message&#x27;</span> });\n<span class="hljs-title function_">showNotify</span>({ <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;warning&#x27;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Notify Message&#x27;</span> });\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-notify" tabindex="-1">Custom Notify</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showNotify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-title function_">showNotify</span>({\n  <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Custom Color&#x27;</span>,\n  <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;#ad0000&#x27;</span>,\n  <span class="hljs-attr">background</span>: <span class="hljs-string">&#x27;#ffe1e1&#x27;</span>,\n});\n\n<span class="hljs-title function_">showNotify</span>({\n  <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Custom Position&#x27;</span>,\n  <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;bottom&#x27;</span>,\n});\n\n<span class="hljs-title function_">showNotify</span>({\n  <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Custom Duration&#x27;</span>,\n  <span class="hljs-attr">duration</span>: <span class="hljs-number">1000</span>,\n});\n</code></pre>\n</div><div class="van-doc-card"><h3 id="use-notify-component" tabindex="-1">Use Notify Component</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Use Notify Component&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showNotify&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-notify</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;bell&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-right: 4px;&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Content<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-notify</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">showNotify</span> = (<span class="hljs-params"></span>) =&gt; {\n      show.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n      }, <span class="hljs-number">2000</span>);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      showNotify,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3>\n<p>Vant exports following Notify utility functions:</p>\n<table>\n<thead>\n<tr>\n<th>Methods</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>showNotify</td>\n<td>Display Notify at the top of the page</td>\n<td><code>NotifyOptions | string</code></td>\n<td>Notify instance</td>\n</tr>\n<tr>\n<td>closeNotify</td>\n<td>Close the currently displayed Notify</td>\n<td>-</td>\n<td><code>void</code></td>\n</tr>\n<tr>\n<td>setNotifyDefaultOptions</td>\n<td>Modify the default configuration, affecting all <code>showNotify</code> calls</td>\n<td><code>NotifyOptions</code></td>\n<td><code>void</code></td>\n</tr>\n<tr>\n<td>resetNotifyDefaultOptions</td>\n<td>Reset the default configuration, affecting all <code>showNotify</code> calls</td>\n<td>-</td>\n<td><code>void</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="notifyoptions" tabindex="-1">NotifyOptions</h3>\n<p>When calling the <code>showNotify</code> and other related methods, the following options are supported:</p>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>Can be set to <code>primary</code> <code>success</code> <code>warning</code></td>\n<td><em>NotifyType</em></td>\n<td><code>danger</code></td>\n</tr>\n<tr>\n<td>message</td>\n<td>Message</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Duration(ms), won\'t disappear if value is 0</td>\n<td><em>number | string</em></td>\n<td><code>3000</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>Set the z-index to a fixed value</td>\n<td><em>number | string</em></td>\n<td><code>2000+</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>Position, can be set to <code>bottom</code></td>\n<td><em>NotifyPosition</em></td>\n<td><code>top</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>Message color</td>\n<td><em>string</em></td>\n<td><code>white</code></td>\n</tr>\n<tr>\n<td>background</td>\n<td>Background color</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>className</td>\n<td>Custom className</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lockScroll</td>\n<td>Whether to lock background scroll</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>Specifies a target element where Notify will be mounted</td>\n<td><em>string | Element</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>onClick</td>\n<td>Callback function after click</td>\n<td><em>(event: MouseEvent) =&gt; void</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>onOpened</td>\n<td>Callback function after opened</td>\n<td><em>() =&gt; void</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>Callback function after close</td>\n<td><em>() =&gt; void</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<p>When using <code>Notify</code> as a component, the following props are supported:</p>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:show</td>\n<td>Whether to show notify</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>Can be set to <code>primary</code> <code>success</code> <code>warning</code></td>\n<td><em>NotifyType</em></td>\n<td><code>danger</code></td>\n</tr>\n<tr>\n<td>message</td>\n<td>Message</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>Set the z-index to a fixed value</td>\n<td><em>number | string</em></td>\n<td><code>2000+</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>Position, can be set to <code>bottom</code></td>\n<td><em>NotifyPosition</em></td>\n<td><code>top</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>Message color</td>\n<td><em>string</em></td>\n<td><code>white</code></td>\n</tr>\n<tr>\n<td>background</td>\n<td>Background color</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>class-name</td>\n<td>Custom className</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lock-scroll</td>\n<td>Whether to lock background scroll</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>Specifies a target element where Notify will be mounted</td>\n<td><em>string | Element</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<p>When using <code>Notify</code> as a component, the following events are supported:</p>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Parameters</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>Callback function after click</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>close</td>\n<td>Callback function after close</td>\n<td>-</td>\n</tr>\n<tr>\n<td>opened</td>\n<td>Callback function after opened</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<p>When using <code>Notify</code> as a component, the following slots are supported:</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Custom content</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">NotifyType</span>,\n  <span class="hljs-title class_">NotifyProps</span>,\n  <span class="hljs-title class_">NotifyOptions</span>,\n  <span class="hljs-title class_">NotifyPosition</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-notify-text-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-notify-padding</td>\n<td><em>var(--van-padding-xs) var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-notify-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-notify-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-notify-primary-background</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-notify-success-background</td>\n<td><em>var(--van-success-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-notify-danger-background</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-notify-warning-background</td>\n<td><em>var(--van-warning-color)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);