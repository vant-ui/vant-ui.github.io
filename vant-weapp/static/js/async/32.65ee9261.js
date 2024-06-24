(self.webpackChunk=self.webpackChunk||[]).push([["32"],{8454:function(n,t,s){"use strict";s.r(t);var a=s("7059");let d=["innerHTML"];t.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Search \u641C\u7D22</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u7528\u4E8E\u641C\u7D22\u573A\u666F\u7684\u8F93\u5165\u6846\u7EC4\u4EF6\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u5728<code>app.json</code>\u6216<code>index.json</code>\u4E2D\u5F15\u5165\u7EC4\u4EF6\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u89C1<a href="#/quickstart#yin-ru-zu-jian" target="_blank">\u5FEB\u901F\u4E0A\u624B</a>\u3002</p>\n<pre><code class="language-json"><span class="hljs-attr">&quot;usingComponents&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>\n  <span class="hljs-attr">&quot;van-search&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;@vant/weapp/search/index&quot;</span>\n<span class="hljs-punctuation">}</span>\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p><code>van-search</code> \u4E2D\uFF0Cvalue \u7528\u4E8E\u63A7\u5236\u641C\u7D22\u6846\u4E2D\u7684\u6587\u5B57\u3002background \u53EF\u4EE5\u81EA\u5B9A\u4E49\u641C\u7D22\u6846\u5916\u90E8\u80CC\u666F\u8272\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value }}&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="shi-jian-jian-ting" tabindex="-1">\u4E8B\u4EF6\u76D1\u542C</h3>\n<p><code>van-search</code> \u63D0\u4F9B\u4E86 search \u548C cancel \u4E8B\u4EF6\u3002search \u4E8B\u4EF6\u5728\u7528\u6237\u70B9\u51FB\u952E\u76D8\u4E0A\u7684\u641C\u7D22\u6309\u94AE\u89E6\u53D1\u3002cancel \u4E8B\u4EF6\u5728\u7528\u6237\u70B9\u51FB\u641C\u7D22\u6846\u53F3\u4FA7\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>\n  <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value }}&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD&quot;</span>\n  <span class="hljs-attr">show-action</span>\n  <span class="hljs-attr">bind:search</span>=<span class="hljs-string">&quot;onSearch&quot;</span>\n  <span class="hljs-attr">bind:cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="sou-suo-kuang-nei-rong-dui-qi" tabindex="-1">\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50</h3>\n<p>\u901A\u8FC7 <code>input-align</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u641C\u7D22\u6846\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>\n  <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value }}&quot;</span>\n  <span class="hljs-attr">input-align</span>=<span class="hljs-string">&quot;center&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="jin-yong-sou-suo-kuang" tabindex="-1">\u7981\u7528\u641C\u7D22\u6846</h3>\n<p>\u901A\u8FC7 <code>disabled</code> \u5C5E\u6027\u53EF\u4EE5\u5C06\u7EC4\u4EF6\u8BBE\u7F6E\u4E3A\u7981\u7528\u72B6\u6001\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value }}&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-bei-jing-se" tabindex="-1">\u81EA\u5B9A\u4E49\u80CC\u666F\u8272</h3>\n<p>\u901A\u8FC7<code>background</code>\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u641C\u7D22\u6846\u5916\u90E8\u7684\u80CC\u666F\u8272\uFF0C\u901A\u8FC7<code>shape</code>\u5C5E\u6027\u8BBE\u7F6E\u641C\u7D22\u6846\u7684\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A<code>round</code>\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>\n  <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value }}&quot;</span>\n  <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span>\n  <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#4fc08d&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-an-niu" tabindex="-1">\u81EA\u5B9A\u4E49\u6309\u94AE</h3>\n<p><code>van-search</code> \u652F\u6301\u81EA\u5B9A\u4E49\u53F3\u4FA7\u53D6\u6D88\u6309\u94AE\uFF0C\u4F7F\u7528\u540D\u5B57\u4E3A action \u7684 slot\uFF0C\u5E76\u8BBE\u7F6E use-action-slot \u4E3A true \u5373\u53EF\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-search</span>\n  <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{{ value }}&quot;</span>\n  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD&quot;</span>\n  <span class="hljs-attr">use-action-slot</span>\n  <span class="hljs-attr">bind:change</span>=<span class="hljs-string">&quot;onChange&quot;</span>\n  <span class="hljs-attr">bind:search</span>=<span class="hljs-string">&quot;onSearch&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">view</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;action&quot;</span> <span class="hljs-attr">bind:tap</span>=<span class="hljs-string">&quot;onClick&quot;</span>&gt;</span>\u641C\u7D22<span class="hljs-tag">&lt;/<span class="hljs-name">view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-search</span>&gt;</span>\n</code></pre>\n<pre><code class="language-javascript"><span class="hljs-title class_">Page</span>({\n  <span class="hljs-attr">data</span>: {\n    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n  },\n  <span class="hljs-title function_">onChange</span>(<span class="hljs-params">e</span>) {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setData</span>({\n      <span class="hljs-attr">value</span>: e.<span class="hljs-property">detail</span>,\n    });\n  },\n  <span class="hljs-title function_">onSearch</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#x27;\u641C\u7D22&#x27;</span> + <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-property">value</span>);\n  },\n  <span class="hljs-title function_">onClick</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#x27;\u641C\u7D22&#x27;</span> + <span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-property">value</span>);\n  },\n});\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>\u5728\u8868\u5355\u5185\u63D0\u4EA4\u65F6\u7684\u6807\u8BC6\u7B26</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>label</td>\n<td>\u641C\u7D22\u6846\u5DE6\u4FA7\u6587\u672C</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>shape</td>\n<td>\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A <code>round</code></td>\n<td><em>string</em></td>\n<td><code>square</code></td>\n</tr>\n<tr>\n<td>value</td>\n<td>\u5F53\u524D\u8F93\u5165\u7684\u503C</td>\n<td><em>string | number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>background</td>\n<td>\u641C\u7D22\u6846\u80CC\u666F\u8272</td>\n<td><em>string</em></td>\n<td><code>#f2f2f2</code></td>\n</tr>\n<tr>\n<td>show-action</td>\n<td>\u662F\u5426\u5728\u641C\u7D22\u6846\u53F3\u4FA7\u663E\u793A\u53D6\u6D88\u6309\u94AE</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>action-text <code>v1.0.0</code></td>\n<td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td>\n<td><em>string</em></td>\n<td><code>\u53D6\u6D88</code></td>\n</tr>\n<tr>\n<td>focus</td>\n<td>\u83B7\u53D6\u7126\u70B9</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>error</td>\n<td>\u662F\u5426\u5C06\u8F93\u5165\u5185\u5BB9\u6807\u7EA2</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u7981\u7528\u8F93\u5165\u6846</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>\u662F\u5426\u53EA\u8BFB</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>clearable</td>\n<td>\u662F\u5426\u542F\u7528\u6E05\u9664\u63A7\u4EF6</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>clear-trigger <code>v1.8.4</code></td>\n<td>\u663E\u793A\u6E05\u9664\u56FE\u6807\u7684\u65F6\u673A\uFF0C<code>always</code> \u8868\u793A\u8F93\u5165\u6846\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A\uFF0C<br><code>focus</code> \u8868\u793A\u8F93\u5165\u6846\u805A\u7126\u4E14\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A</td>\n<td><em>string</em></td>\n<td><code>focus</code></td>\n</tr>\n<tr>\n<td>clear-icon <code>v1.8.4</code></td>\n<td>\u6E05\u9664<a href="#/icon" target="_blank">\u56FE\u6807\u540D\u79F0</a>\u6216\u56FE\u7247\u94FE\u63A5</td>\n<td><em>string</em></td>\n<td><code>clear</code></td>\n</tr>\n<tr>\n<td>maxlength</td>\n<td>\u6700\u5927\u8F93\u5165\u957F\u5EA6\uFF0C\u8BBE\u7F6E\u4E3A -1 \u7684\u65F6\u5019\u4E0D\u9650\u5236\u6700\u5927\u957F\u5EA6</td>\n<td><em>number</em></td>\n<td><code>-1</code></td>\n</tr>\n<tr>\n<td>use-action-slot</td>\n<td>\u662F\u5426\u4F7F\u7528 action slot</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>\u8F93\u5165\u6846\u4E3A\u7A7A\u65F6\u5360\u4F4D\u7B26</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>placeholder-style</td>\n<td>\u6307\u5B9A\u5360\u4F4D\u7B26\u7684\u6837\u5F0F</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>input-align</td>\n<td>\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>center</code> <code>right</code></td>\n<td><em>string</em></td>\n<td><code>left</code></td>\n</tr>\n<tr>\n<td>use-left-icon-slot</td>\n<td>\u662F\u5426\u4F7F\u7528\u8F93\u5165\u6846\u5DE6\u4FA7\u56FE\u6807 slot</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>use-right-icon-slot</td>\n<td>\u662F\u5426\u4F7F\u7528\u8F93\u5165\u6846\u53F3\u4FA7\u56FE\u6807 slot</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>left-icon</td>\n<td>\u8F93\u5165\u6846\u5DE6\u4FA7\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u53EF\u9009\u503C\u89C1 Icon \u7EC4\u4EF6\uFF08\u5982\u679C\u8BBE\u7F6E\u4E86 use-left-icon-slot\uFF0C\u5219\u8BE5\u5C5E\u6027\u65E0\u6548\uFF09</td>\n<td><em>string</em></td>\n<td><code>search</code></td>\n</tr>\n<tr>\n<td>right-icon</td>\n<td>\u8F93\u5165\u6846\u53F3\u4FA7\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u53EF\u9009\u503C\u89C1 Icon \u7EC4\u4EF6\uFF08\u5982\u679C\u8BBE\u7F6E\u4E86 use-right-icon-slot\uFF0C\u5219\u8BE5\u5C5E\u6027\u65E0\u6548\uFF09</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>cursor-spacing</td>\n<td>\u8F93\u5165\u6846\u805A\u7126\u65F6\u5E95\u90E8\u4E0E\u952E\u76D8\u7684\u8DDD\u79BB</td>\n<td><em>number</em></td>\n<td><code>0</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bind:search</td>\n<td>\u786E\u5B9A\u641C\u7D22\u65F6\u89E6\u53D1</td>\n<td>event.detail: \u5F53\u524D\u8F93\u5165\u503C</td>\n</tr>\n<tr>\n<td>bind:change</td>\n<td>\u8F93\u5165\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1</td>\n<td>event.detail: \u5F53\u524D\u8F93\u5165\u503C</td>\n</tr>\n<tr>\n<td>bind:cancel</td>\n<td>\u53D6\u6D88\u641C\u7D22\u641C\u7D22\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:focus</td>\n<td>\u8F93\u5165\u6846\u805A\u7126\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:blur</td>\n<td>\u8F93\u5165\u6846\u5931\u7126\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:clear</td>\n<td>\u70B9\u51FB\u6E05\u7A7A\u63A7\u4EF6\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n<tr>\n<td>bind:click-input</td>\n<td>\u70B9\u51FB\u641C\u7D22\u533A\u57DF\u65F6\u89E6\u53D1</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slot" tabindex="-1">Slot</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>action</td>\n<td>\u81EA\u5B9A\u4E49\u641C\u7D22\u6846\u53F3\u4FA7\u6309\u94AE\uFF0C\u9700\u8981\u5728<code>use-action-slot</code>\u4E3A true \u65F6\u624D\u4F1A\u663E\u793A</td>\n</tr>\n<tr>\n<td>label</td>\n<td>\u81EA\u5B9A\u4E49\u641C\u7D22\u6846\u5DE6\u4FA7\u6587\u672C</td>\n</tr>\n<tr>\n<td>left-icon</td>\n<td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u5DE6\u4FA7\u56FE\u6807\uFF0C\u9700\u8981\u5728<code>use-left-icon-slot</code>\u4E3A true \u65F6\u624D\u4F1A\u663E\u793A</td>\n</tr>\n<tr>\n<td>right-icon</td>\n<td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u53F3\u4FA7\u56FE\u6807\uFF0C\u9700\u8981\u5728<code>use-right-icon-slot</code>\u4E3A true \u65F6\u624D\u4F1A\u663E\u793A</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="wai-bu-yang-shi-lei" tabindex="-1">\u5916\u90E8\u6837\u5F0F\u7C7B</h3>\n<table>\n<thead>\n<tr>\n<th>\u7C7B\u540D</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>custom-class</td>\n<td>\u6839\u8282\u70B9\u6837\u5F0F\u7C7B</td>\n</tr>\n<tr>\n<td>field-class</td>\n<td>\u641C\u7D22\u6846\u6837\u5F0F\u7C7B</td>\n</tr>\n<tr>\n<td>input-class</td>\n<td>\u8F93\u5165\u6846\u6837\u5F0F\u7C7B</td>\n</tr>\n<tr>\n<td>cancel-class</td>\n<td>\u53D6\u6D88\u6309\u94AE\u6837\u5F0F\u7C7B</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,d))}}}]);