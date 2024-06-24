"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5023"],{6836:function(s,n,t){t.r(n);var a=t("38061");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>ShareSheet</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>A pop-up sharing panel at the bottom for displaying the action buttons corresponding to each sharing channel, without specific sharing logic.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ShareSheet</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ShareSheet</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Show ShareSheet&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showShare = true&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Share&quot;</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>\n  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> options = [\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;WeChat&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;wechat&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Weibo&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;weibo&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Link&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;link&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Poster&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;poster&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Qrcode&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;qrcode&#x27;</span> },\n    ];\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">option</span>) =&gt; {\n      <span class="hljs-title function_">showToast</span>(option.<span class="hljs-property">name</span>);\n      showShare.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n    };\n\n    <span class="hljs-keyword">return</span> {\n      options,\n      onSelect,\n      showShare,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="multi-line" tabindex="-1">Multi Line</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Share&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> options = [\n      [\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;WeChat&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;wechat&#x27;</span> },\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;WeChat Moments&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;wechat-moments&#x27;</span> },\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Weibo&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;weibo&#x27;</span> },\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;QQ&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;qq&#x27;</span> },\n      ],\n      [\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Link&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;link&#x27;</span> },\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Poster&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;poster&#x27;</span> },\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Qrcode&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;qrcode&#x27;</span> },\n        { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Weapp Qrcode&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;weapp-qrcode&#x27;</span> },\n      ],\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      options,\n      showShare,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-icon" tabindex="-1">Custom Icon</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> options = [\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Name&#x27;</span>,\n        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-fire.png&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Name&#x27;</span>,\n        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-light.png&#x27;</span>,\n      },\n      {\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Name&#x27;</span>,\n        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-water.png&#x27;</span>,\n      },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      options,\n      showShare,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="show-description" tabindex="-1">Show Description</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-share-sheet</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showShare&quot;</span>\n  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Share&quot;</span>\n  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Description&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> showShare = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> options = [\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;WeChat&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;wechat&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Weibo&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;weibo&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Link&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;link&#x27;</span>, <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;Description&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Poster&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;poster&#x27;</span> },\n      { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Qrcode&#x27;</span>, <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;qrcode&#x27;</span> },\n    ];\n\n    <span class="hljs-keyword">return</span> {\n      options,\n      showShare,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:show</td>\n<td>Whether to show ShareSheet</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>options</td>\n<td>Share options</td>\n<td><em>Option[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>Title</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancel-text</td>\n<td>Cancel button text</td>\n<td><em>string</em></td>\n<td><code>\'Cancel\'</code></td>\n</tr>\n<tr>\n<td>description</td>\n<td>Description</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Transition duration, unit second</td>\n<td><em>number | string</em></td>\n<td><code>0.3</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>Set the z-index to a fixed value</td>\n<td><em>number | string</em></td>\n<td><code>2000+</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>Whether to show round corner</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>Whether to show overlay</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>overlay-class</td>\n<td>Custom overlay class</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlay-style</td>\n<td>Custom overlay style</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lock-scroll</td>\n<td>Whether to lock background scroll</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>lazy-render</td>\n<td>Whether to lazy render util appeared</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-popstate</td>\n<td>Whether to close when popstate</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-overlay</td>\n<td>Whether to close when overlay is clicked</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>safe-area-inset-bottom</td>\n<td>Whether to enable bottom safe area adaptation</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>Specifies a target element where ShareSheet will be mounted</td>\n<td><em>string | Element</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>before-close</td>\n<td>Callback function before close</td>\n<td><em>(action: string) =&gt; boolean | Promise&lt;boolean&gt;</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="data-structure-of-option" tabindex="-1">Data Structure of Option</h3>\n<table>\n<thead>\n<tr>\n<th>Key</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>Option name</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>description</td>\n<td>Option description</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Option icon, can be set to <code>wechat</code> <code>weibo</code> <code>qq</code> <code>link</code> <code>qrcode</code> <code>poster</code> <code>weapp-qrcode</code> <code>wechat-moments</code> or image URL</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Option className is used to set the class props to the share item</td>\n<td><em>string</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>select</td>\n<td>Emitted when an option is clicked</td>\n<td><em>option: Option, index: number</em></td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>Emitted when the cancel button is clicked</td>\n<td>-</td>\n</tr>\n<tr>\n<td>open</td>\n<td>Emitted when opening ShareSheet</td>\n<td>-</td>\n</tr>\n<tr>\n<td>close</td>\n<td>Emitted when closing ShareSheet</td>\n<td>-</td>\n</tr>\n<tr>\n<td>opened</td>\n<td>Emitted when ShareSheet is opened</td>\n<td>-</td>\n</tr>\n<tr>\n<td>closed</td>\n<td>Emitted when ShareSheet is closed</td>\n<td>-</td>\n</tr>\n<tr>\n<td>click-overlay</td>\n<td>Emitted when overlay is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>Custom title</td>\n</tr>\n<tr>\n<td>description</td>\n<td>Custom description</td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>Custom the content of cancel button</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">ShareSheetProps</span>,\n  <span class="hljs-title class_">ShareSheetOption</span>,\n  <span class="hljs-title class_">ShareSheetOptions</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-share-sheet-header-padding</td>\n<td><em>var(--van-padding-sm) var(--van-padding-md) var(--van-padding-base)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-title-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-title-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-title-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-description-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-description-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-description-line-height</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-icon-size</td>\n<td><em>48px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-option-name-color</td>\n<td><em>var(--van-gray-7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-option-name-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-option-description-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-option-description-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-cancel-button-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-cancel-button-height</td>\n<td><em>48px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-share-sheet-cancel-button-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);