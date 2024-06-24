(self.webpackChunk=self.webpackChunk||[]).push([["5467"],{2059:function(s,n,a){"use strict";a.r(n);var t=a("7059");let l=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>DropdownMenu \u4E0B\u62C9\u83DC\u5355</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u5411\u4E0B\u5F39\u51FA\u7684\u83DC\u5355\u5217\u8868\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u5728<code>app.json</code>\u6216<code>index.json</code>\u4E2D\u5F15\u5165\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u4E3A<code>ES6</code>\u7248\u672C\uFF0C<code>ES5</code>\u5F15\u5165\u65B9\u5F0F\u53C2\u89C1<a href="#/quickstart" target="_blank">\u5FEB\u901F\u4E0A\u624B</a>\u3002</p>\n<pre><code class="language-json"><span class="hljs-attr">&quot;usingComponents&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>\n  <span class="hljs-attr">&quot;van-dropdown-menu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;@vant/weapp/dropdown-menu/index&quot;</span><span class="hljs-punctuation">,</span>\n  <span class="hljs-attr">&quot;van-dropdown-item&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;@vant/weapp/dropdown-item/index&quot;</span>\n<span class="hljs-punctuation">}</span>\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value1 }}&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">&quot;{{ option1 }}&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value2 }}&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">&quot;{{ option2 }}&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-title class_">Page</span>({\n  <span class="hljs-attr">data</span>: {\n    <span class="hljs-attr">option1</span>: [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5168\u90E8\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u65B0\u6B3E\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6D3B\u52A8\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },\n    ],\n    <span class="hljs-attr">option2</span>: [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u9ED8\u8BA4\u6392\u5E8F&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;a&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u597D\u8BC4\u6392\u5E8F&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;b&#x27;</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u9500\u91CF\u6392\u5E8F&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;c&#x27;</span> },\n    ],\n    <span class="hljs-attr">value1</span>: <span class="hljs-number">0</span>,\n    <span class="hljs-attr">value2</span>: <span class="hljs-string">&#x27;a&#x27;</span>,\n  },\n});\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-cai-dan-nei-rong" tabindex="-1">\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value1 }}&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">&quot;{{ option1 }}&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;{{ itemTitle }}&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;{{ switchTitle1 }}&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span>\n        <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right-icon&quot;</span>\n        <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span>\n        <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 26px&quot;</span>\n        <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;{{ switch1 }}&quot;</span>\n        <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>\n        <span class="hljs-attr">bind:change</span>=<span class="hljs-string">&quot;onSwitch1Change&quot;</span>\n      /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;{{ switchTitle2 }}&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span>\n        <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right-icon&quot;</span>\n        <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span>\n        <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 26px&quot;</span>\n        <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;{{ switch2 }}&quot;</span>\n        <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>\n        <span class="hljs-attr">bind:change</span>=<span class="hljs-string">&quot;onSwitch2Change&quot;</span>\n      /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 5px 16px;&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">block</span> <span class="hljs-attr">round</span> <span class="hljs-attr">bind:click</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>&gt;</span>\n        \u786E\u8BA4\n      <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-title class_">Page</span>({\n  <span class="hljs-attr">data</span>: {\n    <span class="hljs-attr">switchTitle1</span>: <span class="hljs-string">&#x27;\u5305\u90AE&#x27;</span>,\n    <span class="hljs-attr">switchTitle2</span>: <span class="hljs-string">&#x27;\u56E2\u8D2D&#x27;</span>,\n    <span class="hljs-attr">itemTitle</span>: <span class="hljs-string">&#x27;\u7B5B\u9009&#x27;</span>,\n    <span class="hljs-attr">option1</span>: [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5168\u90E8\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u65B0\u6B3E\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6D3B\u52A8\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },\n    ],\n    <span class="hljs-attr">value1</span>: <span class="hljs-number">0</span>,\n  },\n\n  <span class="hljs-title function_">onConfirm</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">selectComponent</span>(<span class="hljs-string">&#x27;#item&#x27;</span>).<span class="hljs-title function_">toggle</span>();\n  },\n\n  <span class="hljs-title function_">onSwitch1Change</span>(<span class="hljs-params">{ detail }</span>) {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setData</span>({ <span class="hljs-attr">switch1</span>: detail });\n  },\n\n  <span class="hljs-title function_">onSwitch2Change</span>(<span class="hljs-params">{ detail }</span>) {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setData</span>({ <span class="hljs-attr">switch2</span>: detail });\n  },\n});\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-xuan-zhong-zhuang-tai-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u9009\u4E2D\u72B6\u6001\u989C\u8272</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value1 }}&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">&quot;{{ option1 }}&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value2 }}&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">&quot;{{ option2 }}&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="xiang-shang-zhan-kai" tabindex="-1">\u5411\u4E0A\u5C55\u5F00</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;up&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value1 }}&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">&quot;{{ option1 }}&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value2 }}&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">&quot;{{ option2 }}&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jin-yong-cai-dan" tabindex="-1">\u7981\u7528\u83DC\u5355</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value1 }}&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">options</span>=<span class="hljs-string">&quot;{{ option1 }}&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value2 }}&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">options</span>=<span class="hljs-string">&quot;{{ option2 }}&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="yi-bu-da-kai-guan-bi" tabindex="-1">\u5F02\u6B65\u6253\u5F00/\u5173\u95ED</h3>\n<p>\u901A\u8FC7 <code>before-toggle</code> \u4E8B\u4EF6\u53EF\u4EE5\u5728\u4E0B\u62C9\u83DC\u5355\u6253\u5F00\u6216\u8005\u5173\u95ED\u524D\u6267\u884C\u7279\u5B9A\u7684\u903B\u8F91\uFF0C\u5B9E\u73B0\u72B6\u6001\u53D8\u66F4\u524D\u6821\u9A8C\u3001\u5F02\u6B65\u6253\u5F00/\u5173\u95ED\u7684\u76EE\u7684</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-dropdown-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value1 }}&quot;</span> <span class="hljs-attr">options</span>=<span class="hljs-string">&quot;{{ option1 }}&quot;</span> <span class="hljs-attr">use-before-toggle</span> <span class="hljs-attr">bind:before-toggle</span>=<span class="hljs-string">&quot;onBeforeChange&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-dropdown-menu</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-title class_">Page</span>({\n  <span class="hljs-attr">data</span>: {\n    <span class="hljs-attr">value1</span>: <span class="hljs-number">0</span>,\n     <span class="hljs-attr">option1</span>: [\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u5168\u90E8\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u65B0\u6B3E\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },\n      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6D3B\u52A8\u5546\u54C1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },\n    ],\n  },\n  <span class="hljs-title function_">onBeforeChange</span>(<span class="hljs-params">{ detail: { status, callback }}</span>) {\n    wx.<span class="hljs-title function_">showModal</span>({\n      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;\u5F02\u6B65\u6253\u5F00/\u5173\u95ED&#x27;</span>,\n      <span class="hljs-attr">content</span>: <span class="hljs-string">`\u786E\u5B9A\u8981<span class="hljs-subst">${status ? <span class="hljs-string">&#x27;\u6253\u5F00&#x27;</span> : <span class="hljs-string">&#x27;\u5173\u95ED&#x27;</span>}</span>\u4E0B\u62C9\u83DC\u5355\u5417\uFF1F`</span>,\n      <span class="hljs-attr">success</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {\n        <span class="hljs-keyword">if</span> (res.<span class="hljs-property">confirm</span>) {\n          <span class="hljs-title function_">callback</span>(<span class="hljs-literal">true</span>)\n        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (res.<span class="hljs-property">cancel</span>) {\n          <span class="hljs-title function_">callback</span>(<span class="hljs-literal">false</span>)\n        }\n      },\n    })\n  }\n});\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="dropdownmenu-props" tabindex="-1">DropdownMenu Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>active-color</td>\n<td>\u83DC\u5355\u6807\u9898\u548C\u9009\u9879\u7684\u9009\u4E2D\u6001\u989C\u8272</td>\n<td><em>string</em></td>\n<td><code>#ee0a24</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>\u83DC\u5355\u680F z-index \u5C42\u7EA7</td>\n<td><em>number</em></td>\n<td><code>10</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2</td>\n<td><em>number</em></td>\n<td><code>200</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>\u83DC\u5355\u5C55\u5F00\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A up</td>\n<td><em>string</em></td>\n<td><code>down</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>safe-area-tab-bar <code>v1.10.14</code></td>\n<td>\u662F\u5426\u7559\u51FA\u5E95\u90E8 tabbar \u5B89\u5168\u8DDD\u79BB</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>close-on-click-overlay</td>\n<td>\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED\u83DC\u5355</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-outside</td>\n<td>\u662F\u5426\u5728\u70B9\u51FB\u5916\u90E8 menu \u540E\u5173\u95ED\u83DC\u5355</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownitem-props" tabindex="-1">DropdownItem Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>\u5F53\u524D\u9009\u4E2D\u9879\u5BF9\u5E94\u7684 value</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u83DC\u5355\u9879\u6807\u9898</td>\n<td><em>string</em></td>\n<td>\u5F53\u524D\u9009\u4E2D\u9879\u6587\u5B57</td>\n</tr>\n<tr>\n<td>options</td>\n<td>\u9009\u9879\u6570\u7EC4</td>\n<td><em>Option[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u7981\u7528\u83DC\u5355</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>title-class</td>\n<td>\u6807\u9898\u989D\u5916\u7C7B\u540D\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u81EA\u5B9A\u4E49\u6837\u5F0F item-title-class \u4EE3\u66FF</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>popup-style</td>\n<td>\u81EA\u5B9A\u4E49\u5F39\u51FA\u5C42\u6837\u5F0F</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>use-before-toggle <code>v1.10.12</code></td>\n<td>\u662F\u5426\u5F00\u542F\u4E0B\u62C9\u83DC\u5355\u6253\u5F00\u6216\u8005\u5173\u95ED\u524D\u6821\u9A8C</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>root-portal <code>v1.10.14</code></td>\n<td>\u662F\u5426\u4ECE\u9875\u9762\u5B50\u6811\u4E2D\u8131\u79BB\u51FA\u6765\uFF0C\u7528\u4E8E\u89E3\u51B3\u5404\u79CD fixed \u5931\u6548\u95EE\u9898\uFF0C\u5FAE\u4FE1\u57FA\u7840\u5E93 &gt;= <code>2.25.2 </code></td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownitem-events" tabindex="-1">DropdownItem Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>\u70B9\u51FB\u9009\u9879\u5BFC\u81F4 value \u53D8\u5316\u65F6\u89E6\u53D1</td>\n<td>value</td>\n</tr>\n<tr>\n<td>open</td>\n<td>\u6253\u5F00\u83DC\u5355\u680F\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>close</td>\n<td>\u5173\u95ED\u83DC\u5355\u680F\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>opened</td>\n<td>\u6253\u5F00\u83DC\u5355\u680F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>closed</td>\n<td>\u5173\u95ED\u83DC\u5355\u680F\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>before-toggle <code>v1.10.12</code></td>\n<td>\u4E0B\u62C9\u83DC\u5355\u6253\u5F00\u6216\u8005\u5173\u95ED\u524D\u89E6\u53D1\uFF0C\u9700\u8981\u5C06<code>use-before-toggle</code>\u5C5E\u6027\u8BBE\u7F6E\u4E3A<code>true</code></td>\n<td><code>event.detail.status</code>: <code>true</code> \u6253\u5F00\u4E0B\u62C9\u83DC\u5355\uFF0C<code>false</code> \u5173\u95ED\u4E0B\u62C9\u83DC\u5355 <br><code>event.detail.callback</code>: \u56DE\u8C03\u51FD\u6570\uFF0C\u8C03\u7528<code>callback(false)</code>\u7EC8\u6B62\u4E0B\u62C9\u83DC\u5355\u72B6\u6001\u53D8\u66F4</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownitem-fang-fa" tabindex="-1">DropdownItem \u65B9\u6CD5</h3>\n<p>\u901A\u8FC7 selectComponent(id) \u53EF\u8BBF\u95EE\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n<th>\u8FD4\u56DE\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggle</td>\n<td>\u5207\u6362\u83DC\u5355\u5C55\u793A\u72B6\u6001\uFF0C\u4F20<code>true</code>\u4E3A\u663E\u793A\uFF0C<code>false</code>\u4E3A\u9690\u85CF\uFF0C\u4E0D\u4F20\u53C2\u4E3A\u53D6\u53CD</td>\n<td>show?: boolean</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="option-shu-ju-jie-gou" tabindex="-1">Option \u6570\u636E\u7ED3\u6784</h3>\n<table>\n<thead>\n<tr>\n<th>\u952E\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>\u6587\u5B57</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>value</td>\n<td>\u6807\u8BC6\u7B26</td>\n<td><em>number | string</em></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u5DE6\u4FA7<a href="#/icon" target="_blank">\u56FE\u6807\u540D\u79F0</a>\u6216\u56FE\u7247\u94FE\u63A5</td>\n<td><em>string</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownmenu-wai-bu-yang-shi-lei" tabindex="-1">DropdownMenu \u5916\u90E8\u6837\u5F0F\u7C7B</h3>\n<table>\n<thead>\n<tr>\n<th>\u7C7B\u540D</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>custom-class</td>\n<td>\u6839\u8282\u70B9\u6837\u5F0F\u7C7B</td>\n</tr>\n<tr>\n<td>title-class <code>v1.10.7</code></td>\n<td>\u9009\u4E2D\u9879\u6837\u5F0F\u7C7B</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="dropdownitem-wai-bu-yang-shi-lei" tabindex="-1">DropdownItem \u5916\u90E8\u6837\u5F0F\u7C7B</h3>\n<table>\n<thead>\n<tr>\n<th>\u7C7B\u540D</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>custom-class <code>v1.10.7</code></td>\n<td>\u6839\u8282\u70B9\u6837\u5F0F\u7C7B</td>\n</tr>\n<tr>\n<td>item-title-class <code>v1.10.7</code></td>\n<td>\u9009\u9879\u6837\u5F0F\u7C7B</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);