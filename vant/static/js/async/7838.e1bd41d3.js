"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7838"],{73753:function(s,n,a){a.r(n);var t=a("38061");let p=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Empty \u7A7A\u72B6\u6001</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u7A7A\u72B6\u6001\u65F6\u7684\u5360\u4F4D\u63D0\u793A\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Empty</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Empty</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="tu-pian-lei-xing" tabindex="-1">\u56FE\u7247\u7C7B\u578B</h3>\n<p>Empty \u7EC4\u4EF6\u5185\u7F6E\u4E86\u591A\u79CD\u5360\u4F4D\u56FE\u7247\u7C7B\u578B\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u4E1A\u52A1\u573A\u666F\u4E0B\u4F7F\u7528\u3002</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u901A\u7528\u9519\u8BEF --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;error&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span> /&gt;</span>\n<span class="hljs-comment">&lt;!-- \u7F51\u7EDC\u9519\u8BEF --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;network&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span> /&gt;</span>\n<span class="hljs-comment">&lt;!-- \u641C\u7D22\u63D0\u793A --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-da-xiao" tabindex="-1">\u81EA\u5B9A\u4E49\u5927\u5C0F</h3>\n<p>\u901A\u8FC7 <code>image-size</code> \u5C5E\u6027\u56FE\u7247\u7684\u5927\u5C0F\u3002</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u4E0D\u6307\u5B9A\u5355\u4F4D\uFF0C\u9ED8\u8BA4\u4E3A px --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image-size</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span> /&gt;</span>\n<span class="hljs-comment">&lt;!-- \u6307\u5B9A\u5355\u4F4D\uFF0C\u652F\u6301 rem, vh, vw --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">image-size</span>=<span class="hljs-string">&quot;10rem&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span> /&gt;</span>\n</code></pre>\n<p>\u5C06 <code>image-size</code> \u8BBE\u7F6E\u4E3A\u6570\u7EC4\u683C\u5F0F\uFF0C\u53EF\u4EE5\u5206\u522B\u8BBE\u7F6E\u5BBD\u9AD8\u3002\u6570\u7EC4\u7B2C\u4E00\u9879\u5BF9\u5E94\u5BBD\u5EA6\uFF0C\u6570\u7EC4\u7B2C\u4E8C\u9879\u5BF9\u5E94\u9AD8\u5EA6\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">:image-size</span>=<span class="hljs-string">&quot;[60, 40]&quot;</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-pian" tabindex="-1">\u81EA\u5B9A\u4E49\u56FE\u7247</h3>\n<p>\u9700\u8981\u81EA\u5B9A\u4E49\u56FE\u7247\u65F6\uFF0C\u53EF\u4EE5\u5728 image \u5C5E\u6027\u4E2D\u4F20\u5165\u4EFB\u610F\u56FE\u7247 URL\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span>\n  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png&quot;</span>\n  <span class="hljs-attr">image-size</span>=<span class="hljs-string">&quot;80&quot;</span>\n  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="di-bu-nei-rong" tabindex="-1">\u5E95\u90E8\u5185\u5BB9</h3>\n<p>\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u53EF\u4EE5\u5728 Empty \u7EC4\u4EF6\u7684\u4E0B\u65B9\u63D2\u5165\u5185\u5BB9\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-empty</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bottom-button&quot;</span>&gt;</span>\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-empty</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.bottom-button</span> {\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">160px</span>;\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">40px</span>;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>image</td>\n<td>\u56FE\u7247\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>error</code> <code>network</code> <code>search</code>\uFF0C\u652F\u6301\u4F20\u5165\u56FE\u7247 URL</td>\n<td><em>string</em></td>\n<td><code>default</code></td>\n</tr>\n<tr>\n<td>image-size</td>\n<td>\u56FE\u7247\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code></td>\n<td><em>number | string | Array</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>description</td>\n<td>\u56FE\u7247\u4E0B\u65B9\u7684\u63CF\u8FF0\u6587\u5B57</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>\u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9</td>\n</tr>\n<tr>\n<td>image</td>\n<td>\u81EA\u5B9A\u4E49\u56FE\u6807</td>\n</tr>\n<tr>\n<td>description</td>\n<td>\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u5B57</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">EmptyProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-empty-padding</td>\n<td><em>var(--van-padding-xl) 0</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-empty-image-size</td>\n<td><em>160px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-empty-description-margin-top</td>\n<td><em>var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-empty-description-padding</td>\n<td><em>0 60px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-empty-description-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-empty-description-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-empty-description-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-empty-bottom-margin-top</td>\n<td><em>24px</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,p))}}}]);