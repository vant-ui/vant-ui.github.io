(self.webpackChunk=self.webpackChunk||[]).push([["7368"],{3006:function(s,n,t){"use strict";t.r(n);var a=t("7059");let d=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Progress \u8FDB\u5EA6\u6761</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u7528\u4E8E\u5C55\u793A\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u5728<code>app.json</code>\u6216<code>index.json</code>\u4E2D\u5F15\u5165\u7EC4\u4EF6\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u89C1<a href="#/quickstart#yin-ru-zu-jian" target="_blank">\u5FEB\u901F\u4E0A\u624B</a>\u3002</p>\n<pre><code class="language-json"><span class="hljs-attr">&quot;usingComponents&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>\n  <span class="hljs-attr">&quot;van-progress&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;@vant/weapp/progress/index&quot;</span>\n<span class="hljs-punctuation">}</span>\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u8FDB\u5EA6\u6761\u9ED8\u8BA4\u4E3A\u84DD\u8272\uFF0C\u4F7F\u7528<code>percentage</code>\u5C5E\u6027\u6765\u8BBE\u7F6E\u5F53\u524D\u8FDB\u5EA6\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="xian-tiao-cu-xi" tabindex="-1">\u7EBF\u6761\u7C97\u7EC6</h3>\n<p>\u901A\u8FC7<code>stroke-width</code>\u53EF\u4EE5\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u7684\u7C97\u7EC6\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">stroke-width</span>=<span class="hljs-string">&quot;8&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zhi-hui" tabindex="-1">\u7F6E\u7070</h3>\n<p>\u8BBE\u7F6E<code>inactive</code>\u5C5E\u6027\u540E\u8FDB\u5EA6\u6761\u5C06\u7F6E\u7070\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">inactive</span> <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="yang-shi-ding-zhi" tabindex="-1">\u6837\u5F0F\u5B9A\u5236</h3>\n<p>\u53EF\u4EE5\u4F7F\u7528<code>pivot-text</code>\u5C5E\u6027\u81EA\u5B9A\u4E49\u6587\u5B57\uFF0C<code>color</code>\u5C5E\u6027\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u989C\u8272\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">pivot-text</span>=<span class="hljs-string">&quot;\u6A59\u8272&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#f2826a&quot;</span> <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;25&quot;</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span> <span class="hljs-attr">pivot-text</span>=<span class="hljs-string">&quot;\u7EA2\u8272&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-progress</span>\n  <span class="hljs-attr">percentage</span>=<span class="hljs-string">&quot;75&quot;</span>\n  <span class="hljs-attr">pivot-text</span>=<span class="hljs-string">&quot;\u7D2B\u8272&quot;</span>\n  <span class="hljs-attr">pivot-color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span>\n  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(to right, #be99ff, #7232dd)&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>inactive</td>\n<td>\u662F\u5426\u7F6E\u7070</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>percentage</td>\n<td>\u8FDB\u5EA6\u767E\u5206\u6BD4</td>\n<td><em>number</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>stroke-width</td>\n<td>\u8FDB\u5EA6\u6761\u7C97\u7EC6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A<code>px</code></td>\n<td><em>string | number</em></td>\n<td><code>4px</code></td>\n</tr>\n<tr>\n<td>show-pivot</td>\n<td>\u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6587\u5B57</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>\u8FDB\u5EA6\u6761\u989C\u8272</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>text-color</td>\n<td>\u8FDB\u5EA6\u6587\u5B57\u989C\u8272</td>\n<td><em>string</em></td>\n<td><code>#fff</code></td>\n</tr>\n<tr>\n<td>track-color</td>\n<td>\u8F68\u9053\u989C\u8272</td>\n<td><em>string</em></td>\n<td><code>#e5e5e5</code></td>\n</tr>\n<tr>\n<td>pivot-text</td>\n<td>\u6587\u5B57\u663E\u793A</td>\n<td><em>string</em></td>\n<td>\u767E\u5206\u6BD4\u6587\u5B57</td>\n</tr>\n<tr>\n<td>pivot-color</td>\n<td>\u6587\u5B57\u80CC\u666F\u8272</td>\n<td><em>string</em></td>\n<td>\u4E0E\u8FDB\u5EA6\u6761\u989C\u8272\u4E00\u81F4</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="wai-bu-yang-shi-lei" tabindex="-1">\u5916\u90E8\u6837\u5F0F\u7C7B</h3>\n<table>\n<thead>\n<tr>\n<th>\u7C7B\u540D</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>custom-class</td>\n<td>\u6839\u8282\u70B9\u6837\u5F0F\u7C7B</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,d))}}}]);