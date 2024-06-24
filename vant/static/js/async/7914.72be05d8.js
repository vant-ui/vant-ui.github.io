"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7914"],{83072:function(n,s,t){t.r(s);var a=t("38061");let l=["innerHTML"];s.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Cell \u5355\u5143\u683C</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u5355\u5143\u683C\u4E3A\u5217\u8868\u4E2D\u7684\u5355\u4E2A\u5C55\u793A\u9879\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Cell</span>, <span class="hljs-title class_">CellGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Cell</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CellGroup</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p><code>Cell</code> \u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u4E0E <code>CellGroup</code> \u642D\u914D\u4F7F\u7528\uFF0C<code>CellGroup</code> \u53EF\u4EE5\u4E3A <code>Cell</code> \u63D0\u4F9B\u4E0A\u4E0B\u5916\u8FB9\u6846\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u4FE1\u606F&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="qia-pian-feng-ge" tabindex="-1">\u5361\u7247\u98CE\u683C</h3>\n<p>\u901A\u8FC7 <code>CellGroup</code> \u7684 <code>inset</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u5C06\u5355\u5143\u683C\u8F6C\u6362\u4E3A\u5706\u89D2\u5361\u7247\u98CE\u683C\uFF08\u4ECE 3.1.0 \u7248\u672C\u5F00\u59CB\u652F\u6301\uFF09\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u4FE1\u606F&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="dan-yuan-ge-da-xiao" tabindex="-1">\u5355\u5143\u683C\u5927\u5C0F</h3>\n<p>\u901A\u8FC7 <code>size</code> \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u5355\u5143\u683C\u7684\u5927\u5C0F\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u4FE1\u606F&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zhan-shi-tu-biao" tabindex="-1">\u5C55\u793A\u56FE\u6807</h3>\n<p>\u901A\u8FC7 <code>icon</code> \u5C5E\u6027\u5728\u6807\u9898\u5DE6\u4FA7\u5C55\u793A\u56FE\u6807\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;location-o&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zhan-shi-jian-tou" tabindex="-1">\u5C55\u793A\u7BAD\u5934</h3>\n<p>\u8BBE\u7F6E <code>is-link</code> \u5C5E\u6027\u540E\u4F1A\u5728\u5355\u5143\u683C\u53F3\u4FA7\u663E\u793A\u7BAD\u5934\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7 <code>arrow-direction</code> \u5C5E\u6027\u63A7\u5236\u7BAD\u5934\u65B9\u5411\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">is-link</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">arrow-direction</span>=<span class="hljs-string">&quot;down&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="ye-mian-dao-hang" tabindex="-1">\u9875\u9762\u5BFC\u822A</h3>\n<p>\u53EF\u4EE5\u901A\u8FC7 <code>url</code> \u5C5E\u6027\u8FDB\u884C URL \u8DF3\u8F6C\uFF0C\u6216\u901A\u8FC7 <code>to</code> \u5C5E\u6027\u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;URL \u8DF3\u8F6C&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://github.com&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8DEF\u7531\u8DF3\u8F6C&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;index&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="fen-zu-biao-ti" tabindex="-1">\u5206\u7EC4\u6807\u9898</h3>\n<p>\u901A\u8FC7 <code>CellGroup</code> \u7684 <code>title</code> \u5C5E\u6027\u53EF\u4EE5\u6307\u5B9A\u5206\u7EC4\u6807\u9898\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5206\u7EC41&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5206\u7EC42&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="shi-yong-cha-cao" tabindex="-1">\u4F7F\u7528\u63D2\u69FD</h3>\n<p>\u5982\u4EE5\u4E0A\u7528\u6CD5\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> <span class="hljs-attr">is-link</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- \u4F7F\u7528 title \u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u6807\u9898 --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-title&quot;</span>&gt;</span>\u5355\u5143\u683C<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6807\u7B7E<span class="hljs-tag">&lt;/<span class="hljs-name">van-tag</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- \u4F7F\u7528 right-icon \u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u53F3\u4FA7\u56FE\u6807 --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;search-icon&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.custom-title</span> {\n    <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">4px</span>;\n    <span class="hljs-attribute">vertical-align</span>: middle;\n  }\n\n  <span class="hljs-selector-class">.search-icon</span> {\n    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;\n    <span class="hljs-attribute">line-height</span>: inherit;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="chui-zhi-ju-zhong" tabindex="-1">\u5782\u76F4\u5C45\u4E2D</h3>\n<p>\u901A\u8FC7 <code>center</code> \u5C5E\u6027\u53EF\u4EE5\u8BA9 <code>Cell</code> \u7684\u5DE6\u53F3\u5185\u5BB9\u90FD\u5782\u76F4\u5C45\u4E2D\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5143\u683C&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u4FE1\u606F&quot;</span> /&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="cellgroup-props" tabindex="-1">CellGroup Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>\u5206\u7EC4\u6807\u9898</td>\n<td><em>string</em></td>\n<td><code>-</code></td>\n</tr>\n<tr>\n<td>inset</td>\n<td>\u662F\u5426\u5C55\u793A\u4E3A\u5706\u89D2\u5361\u7247\u98CE\u683C</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>border</td>\n<td>\u662F\u5426\u663E\u793A\u5916\u8FB9\u6846</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="cell-props" tabindex="-1">Cell Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>\u5DE6\u4FA7\u6807\u9898</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>value</td>\n<td>\u53F3\u4FA7\u5185\u5BB9</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>label</td>\n<td>\u6807\u9898\u4E0B\u65B9\u7684\u63CF\u8FF0\u4FE1\u606F</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>size</td>\n<td>\u5355\u5143\u683C\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>large</code> <code>normal</code></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u5DE6\u4FA7\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>\u56FE\u6807\u7C7B\u540D\u524D\u7F00\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">class-prefix \u5C5E\u6027</a></td>\n<td><em>string</em></td>\n<td><code>van-icon</code></td>\n</tr>\n<tr>\n<td>tag</td>\n<td>\u6839\u8282\u70B9\u5BF9\u5E94\u7684 HTML \u6807\u7B7E\u540D</td>\n<td><em>string</em></td>\n<td><code>div</code></td>\n</tr>\n<tr>\n<td>url</td>\n<td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u94FE\u63A5\u5730\u5740</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>to</td>\n<td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u76EE\u6807\u8DEF\u7531\u5BF9\u8C61\uFF0C\u7B49\u540C\u4E8E Vue Router \u7684 <a href="https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to \u5C5E\u6027</a></td>\n<td><em>string | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>border</td>\n<td>\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>replace</td>\n<td>\u662F\u5426\u5728\u8DF3\u8F6C\u65F6\u66FF\u6362\u5F53\u524D\u9875\u9762\u5386\u53F2</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>clickable</td>\n<td>\u662F\u5426\u5F00\u542F\u70B9\u51FB\u53CD\u9988</td>\n<td><em>boolean</em></td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>is-link</td>\n<td>\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>required</td>\n<td>\u662F\u5426\u663E\u793A\u8868\u5355\u5FC5\u586B\u661F\u53F7</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>center</td>\n<td>\u662F\u5426\u4F7F\u5185\u5BB9\u5782\u76F4\u5C45\u4E2D</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>arrow-direction</td>\n<td>\u7BAD\u5934\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A <code>left</code> <code>up</code> <code>down</code></td>\n<td><em>string</em></td>\n<td><code>right</code></td>\n</tr>\n<tr>\n<td>title-style</td>\n<td>\u5DE6\u4FA7\u6807\u9898\u989D\u5916\u6837\u5F0F</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>title-class</td>\n<td>\u5DE6\u4FA7\u6807\u9898\u989D\u5916\u7C7B\u540D</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>value-class</td>\n<td>\u53F3\u4FA7\u5185\u5BB9\u989D\u5916\u7C7B\u540D</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>label-class</td>\n<td>\u63CF\u8FF0\u4FE1\u606F\u989D\u5916\u7C7B\u540D</td>\n<td><em>string | Array | object</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="cell-events" tabindex="-1">Cell Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>\u70B9\u51FB\u5355\u5143\u683C\u65F6\u89E6\u53D1</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="cellgroup-slots" tabindex="-1">CellGroup Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>\u9ED8\u8BA4\u63D2\u69FD</td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u81EA\u5B9A\u4E49\u5206\u7EC4\u6807\u9898</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="cell-slots" tabindex="-1">Cell Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u6807\u9898</td>\n</tr>\n<tr>\n<td>value</td>\n<td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9</td>\n</tr>\n<tr>\n<td>label</td>\n<td>\u81EA\u5B9A\u4E49\u6807\u9898\u4E0B\u65B9\u7684\u63CF\u8FF0\u4FE1\u606F</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u56FE\u6807</td>\n</tr>\n<tr>\n<td>right-icon</td>\n<td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u56FE\u6807</td>\n</tr>\n<tr>\n<td>extra</td>\n<td>\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6700\u53F3\u4FA7\u7684\u989D\u5916\u5185\u5BB9</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">CellSize</span>,\n  <span class="hljs-title class_">CellProps</span>,\n  <span class="hljs-title class_">CellGroupProps</span>,\n  <span class="hljs-title class_">CellArrowDirection</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-cell-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-line-height</td>\n<td><em>24px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-vertical-padding</td>\n<td><em>10px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-horizontal-padding</td>\n<td><em>var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-border-color</td>\n<td><em>var(--van-border-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-active-color</td>\n<td><em>var(--van-active-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-required-color</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-label-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-label-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-label-line-height</td>\n<td><em>var(--van-line-height-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-label-margin-top</td>\n<td><em>var(--van-padding-base)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-value-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-value-font-size</td>\n<td><em>inherit</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-icon-size</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-right-icon-color</td>\n<td><em>var(--van-gray-6)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-large-vertical-padding</td>\n<td><em>var(--van-padding-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-large-title-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-large-label-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-large-value-font-size</td>\n<td><em>inherit</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-title-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-title-padding</td>\n<td><em>var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-title-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-title-line-height</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-inset-padding</td>\n<td><em>0 var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-inset-radius</td>\n<td><em>var(--van-radius-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-cell-group-inset-title-padding</td>\n<td><em>var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs) var(--van-padding-xl)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);