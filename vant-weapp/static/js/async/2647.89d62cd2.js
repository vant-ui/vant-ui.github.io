(self.webpackChunk=self.webpackChunk||[]).push([["2647"],{7309:function(s,n,t){"use strict";t.r(n);var a=t("7059");let d=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Popup \u5F39\u51FA\u5C42</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u5F39\u51FA\u5C42\u5BB9\u5668\uFF0C\u7528\u4E8E\u5C55\u793A\u5F39\u7A97\u3001\u4FE1\u606F\u63D0\u793A\u7B49\u5185\u5BB9\uFF0C\u652F\u6301\u591A\u4E2A\u5F39\u51FA\u5C42\u53E0\u52A0\u5C55\u793A\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u5728<code>app.json</code>\u6216<code>index.json</code>\u4E2D\u5F15\u5165\u7EC4\u4EF6\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u89C1<a href="#/quickstart#yin-ru-zu-jian" target="_blank">\u5FEB\u901F\u4E0A\u624B</a>\u3002</p>\n<pre><code class="language-json"><span class="hljs-attr">&quot;usingComponents&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>\n  <span class="hljs-attr">&quot;van-popup&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;@vant/weapp/popup/index&quot;</span>\n<span class="hljs-punctuation">}</span>\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u901A\u8FC7<code>show</code>\u5C5E\u6027\u63A7\u5236\u5F39\u51FA\u5C42\u662F\u5426\u5C55\u793A\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5C55\u793A\u5F39\u51FA\u5C42&quot;</span> <span class="hljs-attr">is-link</span> <span class="hljs-attr">bind:click</span>=<span class="hljs-string">&quot;showPopup&quot;</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">show</span>=<span class="hljs-string">&quot;{{ show }}&quot;</span> <span class="hljs-attr">bind:close</span>=<span class="hljs-string">&quot;onClose&quot;</span>&gt;</span>\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>\n</code></pre>\n<pre><code class="language-javascript"><span class="hljs-title class_">Page</span>({\n  <span class="hljs-attr">data</span>: {\n    <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,\n  },\n\n  <span class="hljs-title function_">showPopup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setData</span>({ <span class="hljs-attr">show</span>: <span class="hljs-literal">true</span> });\n  },\n\n  <span class="hljs-title function_">onClose</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setData</span>({ <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span> });\n  },\n});\n</code></pre>\n</div><div class="van-doc-card"><h3 id="dan-chu-wei-zhi" tabindex="-1">\u5F39\u51FA\u4F4D\u7F6E</h3>\n<p>\u901A\u8FC7<code>position</code>\u5C5E\u6027\u8BBE\u7F6E\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u5C45\u4E2D\u5F39\u51FA\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A<code>top</code>\u3001<code>bottom</code>\u3001<code>left</code>\u3001<code>right</code>\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">show</span>=<span class="hljs-string">&quot;{{ show }}&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span>\n  <span class="hljs-attr">custom-style</span>=<span class="hljs-string">&quot;height: 20%;&quot;</span>\n  <span class="hljs-attr">bind:close</span>=<span class="hljs-string">&quot;onClose&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="guan-bi-tu-biao" tabindex="-1">\u5173\u95ED\u56FE\u6807</h3>\n<p>\u8BBE\u7F6E<code>closeable</code>\u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u5F39\u51FA\u5C42\u7684\u53F3\u4E0A\u89D2\u663E\u793A\u5173\u95ED\u56FE\u6807\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7<code>close-icon</code>\u5C5E\u6027\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u4F7F\u7528<code>close-icon-position</code>\u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\u4F4D\u7F6E\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">show</span>=<span class="hljs-string">&quot;{{ show }}&quot;</span>\n  <span class="hljs-attr">closeable</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>\n  <span class="hljs-attr">custom-style</span>=<span class="hljs-string">&quot;height: 20%&quot;</span>\n  <span class="hljs-attr">bind:close</span>=<span class="hljs-string">&quot;onClose&quot;</span>\n/&gt;</span>\n\n<span class="hljs-comment">&lt;!-- \u81EA\u5B9A\u4E49\u56FE\u6807 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">show</span>=<span class="hljs-string">&quot;{{ show }}&quot;</span>\n  <span class="hljs-attr">closeable</span>\n  <span class="hljs-attr">close-icon</span>=<span class="hljs-string">&quot;close&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>\n  <span class="hljs-attr">custom-style</span>=<span class="hljs-string">&quot;height: 20%&quot;</span>\n  <span class="hljs-attr">bind:close</span>=<span class="hljs-string">&quot;onClose&quot;</span>\n/&gt;</span>\n\n<span class="hljs-comment">&lt;!-- \u56FE\u6807\u4F4D\u7F6E --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">show</span>=<span class="hljs-string">&quot;{{ show }}&quot;</span>\n  <span class="hljs-attr">closeable</span>\n  <span class="hljs-attr">close-icon-position</span>=<span class="hljs-string">&quot;top-left&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>\n  <span class="hljs-attr">custom-style</span>=<span class="hljs-string">&quot;height: 20%&quot;</span>\n  <span class="hljs-attr">bind:close</span>=<span class="hljs-string">&quot;onClose&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="yuan-jiao-dan-chuang" tabindex="-1">\u5706\u89D2\u5F39\u7A97</h3>\n<p>\u8BBE\u7F6E<code>round</code>\u5C5E\u6027\u540E\uFF0C\u5F39\u7A97\u4F1A\u6839\u636E\u5F39\u51FA\u4F4D\u7F6E\u6DFB\u52A0\u4E0D\u540C\u7684\u5706\u89D2\u6837\u5F0F\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">show</span>=<span class="hljs-string">&quot;{{ show }}&quot;</span>\n  <span class="hljs-attr">round</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>\n  <span class="hljs-attr">custom-style</span>=<span class="hljs-string">&quot;height: 20%&quot;</span>\n  <span class="hljs-attr">bind:close</span>=<span class="hljs-string">&quot;onClose&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jin-zhi-gun-dong-chuan-tou" tabindex="-1">\u7981\u6B62\u6EDA\u52A8\u7A7F\u900F</h3>\n<p>\u4F7F\u7528\u7EC4\u4EF6\u65F6\uFF0C\u4F1A\u53D1\u73B0\u5185\u5BB9\u90E8\u5206\u6EDA\u52A8\u5230\u5E95\u65F6\uFF0C\u7EE7\u7EED\u5212\u52A8\u4F1A\u5BFC\u81F4\u5E95\u5C42\u9875\u9762\u7684\u6EDA\u52A8\uFF0C\u8FD9\u5C31\u662F\u6EDA\u52A8\u7A7F\u900F\u3002</p>\n<p>\u76EE\u524D\uFF0C\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7 <code>lock-scroll</code> \u5C5E\u6027\u5904\u7406\u90E8\u5206\u6EDA\u52A8\u7A7F\u900F\u95EE\u9898\u3002 <strong>\u4F46\u7531\u4E8E\u5C0F\u7A0B\u5E8F\u81EA\u8EAB\u539F\u56E0\uFF0C\u5F39\u7A97\u5185\u5BB9\u533A\u57DF\u4ECD\u4F1A\u51FA\u73B0\u6EDA\u52A8\u7A7F\u900F\u3002</strong> \u4E0D\u8FC7\uFF0C\u6211\u4EEC\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u4E00\u4E2A\u63A8\u8350\u65B9\u6848\u4EE5\u5B8C\u6574\u89E3\u51B3\u6EDA\u52A8\u7A7F\u900F\uFF1A</p>\n<h4 id="page-meta" tabindex="-1"><a href="https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html" target="_blank">page-meta</a></h4>\n<p>\u5F53\u5C0F\u7A0B\u5E8F\u57FA\u7840\u5E93\u6700\u4F4E\u7248\u672C\u5728 2.9.0 \u4EE5\u4E0A\u65F6\uFF0C\u5373\u53EF\u4F7F\u7528 <a href="https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html" target="_blank">page-meta</a> \u7EC4\u4EF6\u52A8\u6001\u4FEE\u6539\u9875\u9762\u6837\u5F0F</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- page-meta \u53EA\u80FD\u662F\u9875\u9762\u5185\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">page-meta</span> <span class="hljs-attr">page-style</span>=<span class="hljs-string">&quot;{{ show ? &#x27;overflow: hidden;&#x27; : &#x27;&#x27; }}&quot;</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">show</span>=<span class="hljs-string">&quot;{{ show }}&quot;</span> <span class="hljs-attr">catch:touchstart</span> /&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>show</td>\n<td>\u662F\u5426\u663E\u793A\u5F39\u51FA\u5C42</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>z-index \u5C42\u7EA7</td>\n<td><em>number</em></td>\n<td><code>100</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>top</code> <code>bottom</code> <code>right</code> <code>left</code></td>\n<td><em>string</em></td>\n<td><code>center</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2</td>\n<td><em>number | object</em></td>\n<td><code>300</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>\u662F\u5426\u663E\u793A\u5706\u89D2</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>custom-style</td>\n<td>\u81EA\u5B9A\u4E49\u5F39\u51FA\u5C42\u6837\u5F0F</td>\n<td><em>string</em></td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>overlay-style</td>\n<td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F</td>\n<td><em>string</em></td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>close-on-click-overlay</td>\n<td>\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>closeable</td>\n<td>\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>close-icon</td>\n<td>\u5173\u95ED\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5</td>\n<td><em>string</em></td>\n<td><code>cross</code></td>\n</tr>\n<tr>\n<td>close-icon-position</td>\n<td>\u5173\u95ED\u56FE\u6807\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code>top-left</code><br><code>bottom-left</code> <code>bottom-right</code></td>\n<td><em>string</em></td>\n<td><code>top-right</code></td>\n</tr>\n<tr>\n<td>safe-area-inset-bottom</td>\n<td>\u662F\u5426\u4E3A iPhoneX \u7559\u51FA\u5E95\u90E8\u5B89\u5168\u8DDD\u79BB</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>safe-area-inset-top</td>\n<td>\u662F\u5426\u7559\u51FA\u9876\u90E8\u5B89\u5168\u8DDD\u79BB\uFF08\u72B6\u6001\u680F\u9AD8\u5EA6\uFF09</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>safe-area-tab-bar</td>\n<td>\u662F\u5426\u7559\u51FA\u5E95\u90E8 tabbar \u5B89\u5168\u8DDD\u79BB\uFF08\u5728\u4F7F\u7528 tabbar \u7EC4\u4EF6 &amp; \u5C0F\u7A0B\u5E8F\u81EA\u5B9A\u4E49 tabbar \u65F6\uFF0Cpopup \u7EC4\u4EF6\u5C42\u7EA7\u65E0\u6CD5\u76D6\u4F4F tabbar\uFF09</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>lock-scroll <code>v1.7.3</code></td>\n<td>\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>root-portal <code>v1.10.14</code></td>\n<td>\u662F\u5426\u4ECE\u9875\u9762\u4E2D\u8131\u79BB\u51FA\u6765\uFF0C\u7528\u4E8E\u89E3\u51B3\u5404\u79CD fixed \u5931\u6548\u95EE\u9898\uFF0C\u5FAE\u4FE1\u57FA\u7840\u5E93 &gt;= <code>2.25.2 </code></td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bind:close</td>\n<td>\u5173\u95ED\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:click-overlay</td>\n<td>\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:before-enter</td>\n<td>\u8FDB\u5165\u524D\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:enter</td>\n<td>\u8FDB\u5165\u4E2D\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:after-enter</td>\n<td>\u8FDB\u5165\u540E\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:before-leave</td>\n<td>\u79BB\u5F00\u524D\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:leave</td>\n<td>\u79BB\u5F00\u4E2D\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:after-leave</td>\n<td>\u79BB\u5F00\u540E\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="wai-bu-yang-shi-lei" tabindex="-1">\u5916\u90E8\u6837\u5F0F\u7C7B</h3>\n<table>\n<thead>\n<tr>\n<th>\u7C7B\u540D</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>custom-class</td>\n<td>\u6839\u8282\u70B9\u6837\u5F0F\u7C7B</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,d))}}}]);